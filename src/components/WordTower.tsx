import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Topic, Word } from '../data/vocab';
import { ArrowLeft, Trophy, Flame } from 'lucide-react';
import { playTTS } from '../services/tts';
import confetti from 'canvas-confetti';
import { playCorrectSound, playIncorrectSound } from '../services/audio';

interface WordTowerProps {
  topic: Topic;
  onBack: () => void;
  updateStars?: (n: number) => void;
  highscore: number;
  updateHighscore: (n: number) => void;
}

type QuestionType = 'meaning' | 'reverse' | 'blank';

interface Block {
  id: string;
  word: string;
  color: string;
}

const TIER_COLORS = [
  'bg-emerald-400',
  'bg-blue-400',
  'bg-indigo-400',
  'bg-purple-400',
  'bg-rose-400',
  'bg-orange-400',
  'bg-amber-400'
];

function shuffle<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

export function WordTower({ topic, onBack, updateStars, highscore, updateHighscore }: WordTowerProps) {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const [streak, setStreak] = useState(0);
  const [isShaking, setIsShaking] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [fallingBlock, setFallingBlock] = useState<Block | null>(null);

  // Question state
  const [currentWord, setCurrentWord] = useState<Word | null>(null);
  const [questionType, setQuestionType] = useState<QuestionType>('meaning');
  const [options, setOptions] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const towerRef = useRef<HTMLDivElement>(null);

  // Generate new question
  const generateQuestion = () => {
    const randomWord = topic.words[Math.floor(Math.random() * topic.words.length)];
    setCurrentWord(randomWord);
    
    const types: QuestionType[] = ['meaning', 'reverse', 'blank'];
    const type = types[Math.floor(Math.random() * types.length)];
    setQuestionType(type);

    let correctAnswer = '';
    let wrongPool: string[] = [];

    if (type === 'meaning') {
      correctAnswer = randomWord.definition;
      wrongPool = topic.words.filter(w => w.id !== randomWord.id).map(w => w.definition);
    } else if (type === 'reverse') {
      correctAnswer = randomWord.word;
      wrongPool = topic.words.filter(w => w.id !== randomWord.id).map(w => w.word);
    } else {
      correctAnswer = randomWord.word;
      wrongPool = topic.words.filter(w => w.id !== randomWord.id).map(w => w.word);
    }

    const wrongOptions = shuffle(wrongPool).slice(0, 3);
    setOptions(shuffle([correctAnswer, ...wrongOptions]));
    setSelectedAnswer(null);
  };

  useEffect(() => {
    generateQuestion();
  }, [topic]);

  useEffect(() => {
    if (towerRef.current) {
      towerRef.current.scrollTop = towerRef.current.scrollHeight;
    }
  }, [blocks, fallingBlock]);

  useEffect(() => {
    if (blocks.length > highscore) {
      updateHighscore(blocks.length);
    }
  }, [blocks.length, highscore, updateHighscore]);

  const handleSelect = (option: string) => {
    if (selectedAnswer || !currentWord) return;
    
    setSelectedAnswer(option);
    
    let isCorrect = false;
    if (questionType === 'meaning') {
      isCorrect = option === currentWord.definition;
    } else {
      isCorrect = option === currentWord.word;
    }

    if (isCorrect) {
      playCorrectSound();
      const newStreak = streak + 1;
      setStreak(newStreak);
      if (updateStars) updateStars(1);

      if (newStreak === 5) {
        confetti({ particleCount: 50, spread: 60, origin: { y: 0.8 } });
      }

      // Add block animation
      const tierIndex = Math.floor(blocks.length / 10) % TIER_COLORS.length;
      const newBlock: Block = {
        id: Math.random().toString(),
        word: currentWord.word,
        color: TIER_COLORS[tierIndex]
      };
      
      setFallingBlock(newBlock);
      setTimeout(() => {
        setBlocks(prev => [...prev, newBlock]);
        setFallingBlock(null);
        generateQuestion();
      }, 500);

    } else {
      playIncorrectSound();
      setStreak(0);
      setIsShaking(true);
      
      setTimeout(() => {
        setIsShaking(false);
        setBlocks(prev => {
          const newLen = Math.max(0, prev.length - 2);
          if (newLen === 0 && prev.length > 0) {
            setGameOver(true);
          }
          return prev.slice(0, newLen);
        });
        
        if (!gameOver) {
          generateQuestion();
        }
      }, 500);
    }
  };

  const currentTier = Math.floor(blocks.length / 10);
  
  if (gameOver) {
    return (
      <div className="flex flex-col h-full bg-[#0D0D0D]">
        <div className="flex items-center p-4 sm:p-6 bg-[#1A1A1A] border-b-4 border-[#333]">
          <button 
            onClick={onBack}
            className="w-12 h-12 bg-[#1A1A1A] border border-[#333] rounded-2xl flex items-center justify-center hover:bg-[#ffe36d] transition-colors shadow-lg mr-4"
          >
            <ArrowLeft strokeWidth={3} className="text-white" />
          </button>
          <div className="flex-1">
            <h1 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-white">Word Tower</h1>
          </div>
        </div>
        
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
          <div className="text-8xl mb-8">🏗️</div>
          <h2 className="text-4xl font-black mb-4">Tháp Đổ Rồi!</h2>
          <p className="text-xl font-bold mb-8 opacity-60">Bạn đã xây được <span className="text-[#dc2323]">{blocks.length}</span> tầng.</p>
          <button 
            onClick={() => {
              setBlocks([]);
              setGameOver(false);
              setStreak(0);
              generateQuestion();
            }}
            className="bg-[#4ECDC4] border border-[#333] px-10 py-4 rounded-full font-black text-2xl shadow-lg hover:translate-y-1 hover:shadow-lg transition-all active:translate-y-2 active:shadow-none"
          >
            Chơi Lại
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-[#f5e6d0]">
      {/* Header */}
      <div className="flex items-center p-4 bg-[#1A1A1A] border-b-4 border-[#333] z-10 shrink-0">
        <button 
          onClick={onBack}
          className="w-10 h-10 bg-[#1A1A1A] border border-[#333] rounded-xl flex items-center justify-center hover:bg-[#ffe36d] transition-colors shadow-lg mr-4 shrink-0"
        >
          <ArrowLeft strokeWidth={3} className="text-white" />
        </button>
        <div className="flex-1 flex justify-between items-center">
          <h1 className="text-xl font-black uppercase tracking-tight text-white truncate mr-2">Word Tower</h1>
          
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex items-center gap-1 bg-[#0D0D0D] px-3 py-1 rounded-full border border-[#333]">
              <Trophy size={16} className="text-yellow-500" fill="currentColor" />
              <span className="font-bold">{highscore}</span>
            </div>
            {streak > 0 && (
              <div className="flex items-center gap-1 bg-[#ffe36d] px-3 py-1 rounded-full border border-[#333] animate-pulse">
                <Flame size={16} className="text-orange-500" fill="currentColor" />
                <span className="font-bold">{streak}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="flex-1 flex flex-col md:flex-row min-h-0 overflow-hidden">
        {/* Tower Side */}
        <div className="flex-1 md:w-1/2 border-b-4 md:border-b-0 md:border-r-4 border-[#333] relative flex flex-col items-center justify-end overflow-hidden pb-4 md:pb-8 bg-gradient-to-t from-[#8ECAE6] to-[#219EBC]">
          {/* Clouds */}
          <div className="absolute top-10 left-10 text-6xl opacity-50 text-white drop-shadow-md">☁️</div>
          <div className="absolute top-40 right-10 text-5xl opacity-30 text-white drop-shadow-md">☁️</div>
        
          {/* Ground */}
          <div className="absolute bottom-0 w-full h-8 md:h-12 bg-[#023047] border-t-4 border-[#333]"></div>
          
          <div 
            ref={towerRef}
            className={`w-[85%] max-w-[400px] mb-8 md:mb-12 flex flex-col-reverse items-center overflow-visible transition-transform duration-100 ${isShaking ? 'translate-x-2' : ''}`}
            style={{ 
              maxHeight: '100%',
              transform: isShaking ? 'translateX(-10px)' : 'none' 
            }}
          >
            {blocks.map((block, idx) => (
              <div 
                key={block.id}
                className={`w-full h-[50px] ${block.color} border border-[#333] mb-[-4px] flex items-center justify-center font-black font-sans text-2xl text-white shadow-lg relative overflow-hidden`}
                style={{ 
                  zIndex: blocks.length - idx,
                  opacity: isShaking && idx >= blocks.length - 2 ? 0.5 : 1,
                  transform: isShaking && idx >= blocks.length - 2 ? `translateY(${Math.random() * 20 + 20}px) rotate(${Math.random() * 20 - 10}deg)` : 'none',
                  transition: 'all 0.4s cubic-bezier(0.36, 0, 0.66, -0.56)'
                }}
              >
                {/* Brick texture overlay */}
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: 'linear-gradient(rgba(0,0,0,0.5) 2px, transparent 2px), linear-gradient(90deg, rgba(0,0,0,0.5) 2px, transparent 2px)',
                  backgroundSize: '40px 25px',
                  backgroundPosition: idx % 2 === 0 ? '0 0' : '20px 0'
                }}></div>
                <span className="relative z-10" style={{ textShadow: '2px 2px 0 #1A1A1A, -2px -2px 0 #1A1A1A, 2px -2px 0 #1A1A1A, -2px 2px 0 #1A1A1A' }}>
                  {block.word}
                </span>
              </div>
            ))}

            {fallingBlock && (
              <div 
                className={`w-full h-[50px] ${fallingBlock.color} border border-[#333] mb-[-4px] flex items-center justify-center font-black font-sans text-2xl text-white shadow-lg animate-[dropIn_0.4s_ease-out_forwards] absolute overflow-hidden`}
                style={{ bottom: blocks.length * 46 }}
              >
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: 'linear-gradient(rgba(0,0,0,0.5) 2px, transparent 2px), linear-gradient(90deg, rgba(0,0,0,0.5) 2px, transparent 2px)',
                  backgroundSize: '40px 25px',
                  backgroundPosition: blocks.length % 2 === 0 ? '0 0' : '20px 0'
                }}></div>
                <span className="relative z-10" style={{ textShadow: '2px 2px 0 #1A1A1A, -2px -2px 0 #1A1A1A, 2px -2px 0 #1A1A1A, -2px 2px 0 #1A1A1A' }}>
                  {fallingBlock.word}
                </span>
              </div>
            )}
          </div>
          
          {/* Milestone marker */}
          {blocks.length > 0 && Math.floor(blocks.length / 10) > 0 && (
            <div className="absolute right-4 top-4 bg-[#1A1A1A]/80 border border-[#333] px-3 py-1 rounded-full font-bold shadow-lg">
              Tier {currentTier}
            </div>
          )}
        </div>

        {/* Quiz Side */}
        <div className="flex-1 md:w-3/5 bg-[#1A1A1A] p-4 sm:p-6 md:p-10 flex flex-col justify-center overflow-y-auto">
          {currentWord && (
            <div className="w-full max-w-xl mx-auto space-y-6 md:space-y-8">
              <div className="text-center mb-6">
                <h3 className="text-sm md:text-base font-black text-gray-400 uppercase tracking-widest mb-2">
                  {questionType === 'meaning' ? "Chọn nghĩa của từ:" : 
                   questionType === 'reverse' ? "Từ nào có nghĩa là:" :
                   "Điền vào chỗ trống:"}
                </h3>
                <div className="text-2xl sm:text-3xl md:text-4xl font-black text-white bg-[#0D0D0D] p-4 sm:p-6 md:p-8 rounded-3xl border border-[#333] shadow-lg">
                  {questionType === 'meaning' ? currentWord.word :
                   questionType === 'reverse' ? currentWord.definition :
                   currentWord.blankSentence.replace('________', '___')}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                {options.map((option, i) => {
                  let statusClass = "bg-[#1A1A1A] hover:bg-[#0D0D0D] hover:-translate-y-1 hover:shadow-lg";
                  let isCorrectOption = false;
                  
                  if (questionType === 'meaning') {
                    isCorrectOption = option === currentWord.definition;
                  } else {
                    isCorrectOption = option === currentWord.word;
                  }

                  if (selectedAnswer) {
                    if (option === selectedAnswer) {
                      if (isCorrectOption) {
                        statusClass = "bg-[#4ECDC4] text-white shadow-lg translate-y-1";
                      } else {
                        statusClass = "bg-[#dc2323] text-white shadow-lg translate-y-1";
                      }
                    } else if (isCorrectOption) {
                      statusClass = "bg-[#4ECDC4] text-white opacity-80";
                    } else {
                      statusClass = "bg-gray-100 opacity-50";
                    }
                  }

                  return (
                    <button
                      key={i}
                      disabled={selectedAnswer !== null || !!fallingBlock || isShaking}
                      onClick={() => handleSelect(option)}
                      className={`text-left p-4 sm:p-5 border border-[#333] rounded-2xl font-bold text-base sm:text-lg transition-all shadow-lg flex items-center gap-3 ${statusClass}`}
                    >
                      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full border sm:border border-[#333] flex items-center justify-center font-black bg-[#1A1A1A] text-white shrink-0 text-sm sm:text-base">
                        {['A', 'B', 'C', 'D'][i]}
                      </div>
                      <span className="leading-tight">{option}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes dropIn {
          0% { transform: translateY(-300px); opacity: 0; }
          60% { transform: translateY(10px); opacity: 1; }
          80% { transform: translateY(-5px); }
          100% { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}
