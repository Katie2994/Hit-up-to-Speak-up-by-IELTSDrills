import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Topic, Word } from '../data/vocab';
import { ArrowLeft, Trophy } from 'lucide-react';
import { playTTS } from '../services/tts';
import { playCorrectSound, playIncorrectSound } from '../services/audio';

interface WordFloodProps {
  topic: Topic;
  onBack: () => void;
  updateStars?: (n: number) => void;
  highscore: number;
  updateHighscore: (n: number) => void;
}

const LANES = 4;

interface Slot {
  wordId: string;
  meaning: string;
}

interface Block {
  word: Word;
  y: number; // 0 to 100
  lane: number;
}

export function WordFlood({ topic, onBack, updateStars, highscore, updateHighscore }: WordFloodProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [lives, setLives] = useState(3);
  
  const [fallingBlock, setFallingBlock] = useState<Block | null>(null);
  const [slots, setSlots] = useState<Slot[]>([]);
  
  const requestRef = useRef<number>();
  const blockRef = useRef<Block | null>(null);
  const speedRef = useRef(0.2); // y increment per frame

  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    if (!isPlaying || !blockRef.current) return;
    
    if (e.key === 'ArrowLeft' || e.key === 'a') {
      blockRef.current.lane = Math.max(0, blockRef.current.lane - 1);
    } else if (e.key === 'ArrowRight' || e.key === 'd') {
      blockRef.current.lane = Math.min(LANES - 1, blockRef.current.lane + 1);
    }
  }, [isPlaying]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  const swipeStartRef = useRef<number>(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    swipeStartRef.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
     if (!isPlaying || !blockRef.current) return;
     const swipeEnd = e.changedTouches[0].clientX;
     const diff = swipeEnd - swipeStartRef.current;
     if (diff > 40) { // Swipe right
       blockRef.current.lane = Math.min(LANES - 1, blockRef.current.lane + 1);
     } else if (diff < -40) { // Swipe left
       blockRef.current.lane = Math.max(0, blockRef.current.lane - 1);
     }
  };

  const spawnBlockAndSlots = useCallback(() => {
    // Pick 4 distinct random words
    const shuffled = [...topic.words].sort(() => Math.random() - 0.5).slice(0, 4);
    
    // Create slots
    const newSlots = shuffled.map(w => ({ wordId: w.id, meaning: w.definition }));
    setSlots(newSlots);

    // Pick 1 target word for the falling block
    const targetWord = shuffled[Math.floor(Math.random() * shuffled.length)];
    const newBlock = {
      word: targetWord,
      y: 0,
      lane: Math.floor(Math.random() * LANES)
    };
    
    blockRef.current = newBlock;
    setFallingBlock(newBlock);
  }, [topic]);

  const startGame = () => {
    setScore(0);
    setLives(3);
    setGameOver(false);
    setIsPlaying(true);
    speedRef.current = 0.3; // Reset speed
    spawnBlockAndSlots();
  };

  useEffect(() => {
    if (!isPlaying) return;

    let lastTime = 0;
    const animate = (time: number) => {
      if (!lastTime) lastTime = time;
      lastTime = time;

      if (blockRef.current) {
        // Update physics
        blockRef.current.y += speedRef.current;
        
        // Ground detection (at Y=90 relative to container)
        if (blockRef.current.y >= 90) {
          // Check collision
          const slot = slots[blockRef.current.lane];
          if (slot && slot.wordId === blockRef.current.word.id) {
            // Correct
            playCorrectSound();
            setScore(s => s + 10);
            speedRef.current = Math.min(1.2, speedRef.current + 0.02); // increase speed
            spawnBlockAndSlots();
          } else {
            // Wrong
            playIncorrectSound();
            setLives(l => {
              if (l <= 1) {
                setGameOver(true);
                setIsPlaying(false);
                return 0;
              }
              spawnBlockAndSlots();
              return l - 1;
            });
          }
        } else {
          // Trigger render update
          setFallingBlock({ ...blockRef.current });
        }
      }

      if (isPlaying) {
        requestRef.current = requestAnimationFrame(animate);
      }
    };

    requestRef.current = requestAnimationFrame(animate);
    return () => {
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isPlaying, slots, spawnBlockAndSlots]);

  useEffect(() => {
    if (gameOver) {
      if (score > highscore) updateHighscore(score);
      if (updateStars) updateStars(Math.floor(score / 20));
      playTTS("Game Over");
    }
  }, [gameOver, score, highscore, updateHighscore, updateStars]);

  return (
    <div className="flex flex-col h-full bg-[#1A1A2E] text-white select-none relative overflow-hidden">
      {/* Header */}
      <div className="flex items-center p-4 bg-[#16213E] border-b-4 border-[#0F3460] shrink-0 z-10">
        <button 
          onClick={onBack}
          className="w-10 h-10 bg-[#1A1A1A]/10 hover:bg-[#1A1A1A]/20 border border-white/20 rounded-xl flex items-center justify-center transition-colors mr-4"
        >
          <ArrowLeft strokeWidth={3} className="text-white" />
        </button>
        <div className="flex-1 flex justify-between items-center">
          <h1 className="text-xl font-black uppercase tracking-tight">Word Flood</h1>
          
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 bg-[#1A1A1A]/10 px-3 py-1 rounded-full border border-white/20">
              <Trophy size={16} className="text-yellow-400" />
              <span className="font-bold">{highscore}</span>
            </div>
          </div>
        </div>
      </div>

      {!isPlaying && !gameOver ? (
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center z-10">
          <div className="text-8xl mb-6">🧱</div>
          <h2 className="text-4xl font-black mb-4 uppercase text-[#A594F9]">Word Flood</h2>
          <p className="text-lg mb-8 opacity-80 max-w-sm">Tap sides or swipe to drop the word into the correct meaning slot!</p>
          <button 
            onClick={startGame}
            className="bg-[#A594F9] text-[#1A1A2E] border border-[#1A1A2E] px-10 py-4 rounded-full font-black text-2xl shadow-[6px_6px_0px_0px_rgba(165,148,249,0.3)] hover:translate-y-1 transition-all active:translate-y-2"
          >
            START
          </button>
        </div>
      ) : gameOver ? (
        <div className="flex-1 flex flex-col items-center justify-center p-6 text-center z-10">
          <h2 className="text-4xl font-black mb-4 uppercase text-[#dc2323]">Game Over</h2>
          <p className="text-2xl font-bold mb-8">Score: {score}</p>
          <button 
            onClick={startGame}
            className="bg-[#ffe36d] text-[#1A1A2E] border border-[#1A1A2E] px-10 py-4 rounded-full font-black text-2xl shadow-[6px_6px_0px_0px_rgba(255,230,109,0.3)] hover:translate-y-1 transition-all active:translate-y-2"
          >
            RETRY
          </button>
        </div>
      ) : (
        <div 
          className="flex-1 flex flex-col relative w-full touch-none"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* HUD overlay */}
          <div className="absolute top-4 left-4 right-4 flex justify-between z-10 pointer-events-none">
             <div className="bg-[#0F3460]/80 backdrop-blur px-4 py-2 rounded-2xl border border-white/10">
              <span className="font-black text-2xl text-[#4ECDC4]">{score}</span>
              <span className="text-xs uppercase font-bold opacity-60 ml-2">PTS</span>
            </div>
            <div className="flex gap-1 bg-[#0F3460]/80 backdrop-blur px-3 py-2 rounded-2xl border border-white/10">
              {[...Array(3)].map((_, i) => (
                <span key={i} className={`text-xl ${i < lives ? '' : 'opacity-20 grayscale'}`}>❤️</span>
              ))}
            </div>
          </div>

          {/* Falling Area */}
          <div className="flex-1 relative">
            {/* Grid Lines */}
            <div className="absolute inset-0 flex">
              {[...Array(LANES)].map((_, i) => (
                <div key={i} className="flex-1 border-r border-white/5 h-full relative" 
                     onClick={() => { if(blockRef.current) blockRef.current.lane = i; }}>
                   {/* Clickable lane to move block instantly via touch */}
                </div>
              ))}
            </div>

            {/* Falling Block */}
            {fallingBlock && (
              <div 
                className="absolute bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center p-2 shadow-[0_0_15px_rgba(0,255,255,0.5)] border border-white transition-all duration-75"
                style={{
                  width: `${100/LANES}%`,
                  height: '60px',
                  left: `${fallingBlock.lane * (100/LANES)}%`,
                  top: `${fallingBlock.y}%`,
                }}
              >
                 <span className="font-black text-center text-sm md:text-base leading-tight drop-shadow-md text-white line-clamp-2">
                   {fallingBlock.word.word}
                 </span>
              </div>
            )}
          </div>

          {/* Bottom Slots */}
          <div className="h-[20%] min-h-[120px] bg-[#0F3460] flex border-t-4 border-[#4ECDC4]">
            {slots.map((slot, i) => (
              <div 
                key={i} 
                className="flex-1 border-r-2 border-white/10 last:border-r-0 p-2 flex items-center justify-center text-center overflow-hidden"
              >
                <div className="bg-[#16213E] w-full h-full rounded-lg flex items-center justify-center p-1 md:p-2 border border-white/5 shadow-inner">
                  <span className="text-[10px] sm:text-xs md:text-sm font-bold text-white/80 line-clamp-3 leading-tight break-words">
                    {slot.meaning}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
