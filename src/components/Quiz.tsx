import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, CheckCircle2, XCircle } from 'lucide-react';
import { Topic, Word, VOCAB_TOPICS } from '../data/vocab';
import confetti from 'canvas-confetti';
import { playTTS } from '../services/tts';
import { playCorrectSound, playIncorrectSound } from '../services/audio';

interface QuizProps {
  topic: Topic;
  onBack: () => void;
  updateStars?: (n: number) => void;
}

export function Quiz({ topic, onBack, updateStars }: QuizProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  
  const words = topic.words;
  const currentWord = words[currentIndex];

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
        colors: ['#ffe36d', '#dc2323', '#ffffff']
      });
    } else {
      playIncorrectSound();
    }

    setTimeout(() => {
      setSelectedAnswer(null);
      if (currentIndex < words.length - 1) {
        setCurrentIndex(prev => prev + 1);
      } else {
         // Finished
         confetti({ particleCount: 150, spread: 100, origin: {y: 0.5}, colors: ['#ffe36d', '#dc2323', '#ffffff'] });
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
        <div className={`p-5 text-white bg-[#1A1A1A] border-b border-[#333] rounded-b-[32px] shadow-lg flex items-center justify-between z-10 mx-2 sm:mx-4 mt-2 sm:mt-4`}>
          <button onClick={onBack} className="p-2 hover:bg-[#333] rounded-2xl border border-transparent transition-all">
            <ArrowLeft size={24} />
          </button>
          <span className="font-black text-lg uppercase tracking-widest">Quiz Complete!</span>
          <div className="w-10"></div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
           <span className="text-8xl mb-6 drop-shadow-md">🏆</span>
           <h2 className="text-4xl font-black text-white mb-4 uppercase tracking-tighter">Làm Rất Tốt!</h2>
           <p className="text-2xl font-black bg-[#222] text-[#ffe36d] border border-[#444] px-6 py-3 rounded-[24px] shadow-sm mb-8">Bạn đạt {score} / {words.length}</p>
           <button 
             onClick={onBack}
             className={`px-8 py-4 rounded-[24px] text-white font-black text-xl bg-[#dc2323] hover:bg-[#b01c1c] active:scale-95 transition-all uppercase tracking-wider`}
           >
             Về Chủ Đề
           </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-[#0D0D0D] relative overflow-hidden">
      <div className={`p-5 text-white bg-[#1A1A1A] border-b border-[#333] rounded-b-[32px] shadow-lg flex items-center justify-between z-10 mx-2 sm:mx-4 mt-2 sm:mt-4`}>
        <button onClick={onBack} className="p-2 hover:bg-[#333] rounded-2xl border border-transparent transition-all">
          <ArrowLeft size={24} />
        </button>
        <div className="font-black text-lg uppercase tracking-wider">
          Quiz
        </div>
        <div className="w-16 h-10 bg-[#222] text-[#ffe36d] border border-[#444] rounded-full flex items-center justify-center font-black text-xs shadow-sm">
           {currentIndex + 1}/{words.length}
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center p-4 sm:p-6 w-full max-w-4xl mx-auto overflow-y-auto">
        <div className="w-full max-w-md bg-[#1A1A1A] text-white rounded-[40px] shadow-sm p-8 mb-8 mt-4 text-center border border-[#333] relative">
          <p className="text-gray-500 text-[10px] uppercase tracking-widest font-black mb-4">What does this mean?</p>
          <h2 className="text-4xl font-black tracking-tight mb-2 cursor-pointer hover:opacity-80 underline decoration-[#ffe36d] decoration-[4px] underline-offset-4" onClick={() => playTTS(currentWord.word)}>{currentWord.word}</h2>
          <p className="font-mono text-sm text-[#ffe36d] bg-[#222] px-3 py-1 inline-block rounded-full border border-[#444] mt-2">/{currentWord.ipa}/</p>
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4">
          <AnimatePresence mode="popLayout">
            {options.map((opt) => {
              const isSelected = selectedAnswer === opt.id;
              const isCorrectTarget = currentWord.id === opt.id;
              
              let btnClass = "bg-[#1A1A1A] text-white border-[#333] hover:border-[#ffe36d] shadow-sm hover:-translate-y-1";
              let icon = null;
              
              if (selectedAnswer) {
                if (isCorrectTarget) {
                  btnClass = "bg-[#4ECDC4] border-[#4ECDC4] text-[#111]";
                  icon = <CheckCircle2 className="text-[#111]" size={28} />;
                } else if (isSelected) {
                  btnClass = "bg-[#dc2323] border-[#dc2323] text-white";
                  icon = <XCircle className="text-white" size={28} />;
                } else {
                  btnClass = "bg-[#1A1A1A] text-white border-[#333] opacity-50";
                }
              }

              return (
                <motion.button
                  key={opt.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  disabled={selectedAnswer !== null}
                  onClick={() => handleSelect(opt.id)}
                  className={`w-full text-left p-5 rounded-[24px] border flex items-center gap-4 transition-all duration-300 ${btnClass}`}
                >
                  <span className="text-3xl bg-[#222] p-2 border border-[#444] rounded-xl">{opt.emoji}</span>
                  <div className="flex-1">
                    <p className="font-bold text-lg leading-tight">{opt.definition}</p>
                  </div>
                  {icon}
                </motion.button>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
