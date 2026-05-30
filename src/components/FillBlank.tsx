import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, CheckCircle2, XCircle } from 'lucide-react';
import { Topic, Word, VOCAB_TOPICS } from '../data/vocab';
import confetti from 'canvas-confetti';
import { playTTS } from '../services/tts';
import { playCorrectSound, playIncorrectSound } from '../services/audio';

interface FillBlankProps {
  topic: Topic;
  onBack: () => void;
  updateStars?: (n: number) => void;
}

export function FillBlank({ topic, onBack, updateStars }: FillBlankProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  
  const words = topic.words;
  const currentWord = words[currentIndex];

  // Prepare the sentence with the blank or the filled answer
  const sentenceWithBlank = useMemo(() => {
    if (!currentWord) return "";
    
    if (selectedAnswer !== null) {
      const parts = currentWord.blankSentence.split("________");
      if (parts.length === 2) {
        const prefix = parts[0];
        const suffix = parts[1];
        if (currentWord.example.startsWith(prefix) && currentWord.example.endsWith(suffix)) {
          const middle = currentWord.example.slice(prefix.length, currentWord.example.length - suffix.length);
          return (
            <span>
              {prefix}
              <span className="text-[#ffe36d] underline decoration-4 decoration-[#ffe36d]/50 bg-[#1A1A1A]/10 px-2 rounded-lg">{middle}</span>
              {suffix}
            </span>
          );
        }
      }
      return currentWord.example;
    }
    
    return currentWord.blankSentence;
  }, [currentWord, selectedAnswer]);

  // Generate 3 wrong options + 1 correct option
  const options = useMemo(() => {
    if (!currentWord) return [];
    
    // Get words from all topics except the correct one
    const allWords = VOCAB_TOPICS.flatMap(t => t.words).filter(w => w.id !== currentWord.id);
    const shuffledAll = [...allWords].sort(() => 0.5 - Math.random());
    const wrongOptions = shuffledAll.slice(0, 3);
    
    const combined = [...wrongOptions, currentWord];
    return combined.sort(() => 0.5 - Math.random());
  }, [currentWord]);

  const handleSelect = (wordId: string) => {
    if (selectedAnswer) return; // Prevent multiple selections
    
    setSelectedAnswer(wordId);
    if (wordId === currentWord.id) {
      setScore(prev => prev + 1);
      playCorrectSound();
      confetti({
        particleCount: 50,
        spread: 40,
        origin: { y: 0.8 },
        colors: ['#4ECDC4', '#A594F9']
      });
    } else {
      playIncorrectSound();
    }

    setTimeout(() => {
      setSelectedAnswer(null);
      if (currentIndex < words.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
         confetti({ particleCount: 150, spread: 100, origin: {y: 0.5} });
         if (updateStars) {
           updateStars(score + (wordId === currentWord.id ? 1 : 0));
         }
      }
    }, 1500);
  };

  const isFinished = currentIndex >= words.length;

  if (isFinished) {
    return (
      <div className="flex flex-col h-full bg-[#0D0D0D] relative">
        <div className={`p-4 text-white bg-[#1A1A1A] border-b-2 border-[#333] rounded-b-3xl shadow-lg flex items-center justify-between z-10`}>
          <button onClick={onBack} className="p-2 hover:bg-[#333] rounded-xl border border-transparent transition-all">
            <ArrowLeft size={24} />
          </button>
          <span className="font-black text-lg uppercase tracking-widest">Hoàn Thành!</span>
          <div className="w-10"></div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
           <span className="text-8xl mb-6 drop-shadow-md">🏆</span>
           <h2 className="text-4xl font-black text-white mb-4 uppercase tracking-tighter">Tuyệt Vời!</h2>
           <p className="text-2xl font-black bg-[#222] text-[#ffe36d] border border-[#444] px-6 py-3 rounded-[24px] shadow-sm mb-8">Bạn đạt {score} / {words.length}</p>
           <button 
             onClick={onBack}
             className={`px-8 py-4 rounded-[24px] text-white font-black text-xl bg-[#dc2323] hover:bg-[#b01c1c] active:scale-95 transition-all shadow-sm uppercase tracking-wider`}
           >
             Về Trang Chủ
           </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-[#0D0D0D] relative overflow-hidden">
      <div className={`p-4 text-white bg-[#1A1A1A] border-b-2 border-[#333] flex items-center justify-between rounded-b-3xl shadow-lg relative z-10`}>
        <button onClick={onBack} className="p-2 hover:bg-[#333] rounded-xl border border-transparent transition-all">
          <ArrowLeft size={24} />
        </button>
        <div className="font-black text-lg uppercase tracking-wider">
          Điền Từ
        </div>
        <div className="w-16 h-10 bg-[#222] text-[#ffe36d] border border-[#444] rounded-full flex items-center justify-center font-black text-xs shadow-sm">
           {currentIndex + 1}/{words.length}
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center p-6 w-full max-w-4xl mx-auto overflow-y-auto">
        <div className="w-full max-w-2xl bg-[#1A1A1A] text-white rounded-3xl shadow-sm p-8 mb-10 mt-4 text-center border border-[#333] relative">
          <p className="text-gray-500 text-[10px] uppercase tracking-widest font-black mb-6">Hoàn thành câu dưới đây!</p>
          <h2 className="text-3xl font-black tracking-tight mb-2 leading-relaxed">{sentenceWithBlank}</h2>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {options.map((opt) => {
              const isSelected = selectedAnswer === opt.id;
              const isCorrectTarget = currentWord.id === opt.id;
              
              let btnClass = "bg-[#1A1A1A] text-white border-[#333] shadow-sm hover:border-[#ffe36d] hover:-translate-y-1";
              
              if (selectedAnswer) {
                if (isCorrectTarget) {
                  btnClass = "bg-[#4ECDC4] border-[#4ECDC4] text-[#111]";
                } else if (isSelected) {
                  btnClass = "bg-[#dc2323] border-[#dc2323] text-white";
                } else {
                  btnClass = "bg-[#1A1A1A] text-white border-[#333] opacity-50";
                }
              }

              return (
                <motion.button
                  key={opt.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  disabled={selectedAnswer !== null}
                  onClick={() => handleSelect(opt.id)}
                  className={`w-full text-center p-6 py-8 rounded-3xl border flex flex-col justify-center items-center gap-3 transition-all duration-300 ${btnClass}`}
                >
                  <span className="text-4xl drop-shadow-md">{opt.emoji}</span>
                  <div className="w-full">
                    <p className="font-black text-xl leading-tight">{opt.word}</p>
                  </div>
                </motion.button>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
