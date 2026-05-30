import { useState, useRef, MouseEvent, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Volume2, ChevronRight, ChevronLeft, RefreshCcw, Download, MessageCircle } from 'lucide-react';
import { Topic, Word } from '../data/vocab';
import { playTTS } from '../services/tts';
import confetti from 'canvas-confetti';
import { toPng } from 'html-to-image';

interface FlashcardProps {
  topic: Topic;
  onBack: () => void;
}

export function Flashcards({ topic, onBack }: FlashcardProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showCompletionLogo, setShowCompletionLogo] = useState(false);
  const exportRef = useRef<HTMLDivElement>(null);

  const words = topic.words;
  const currentWord = words[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    if (currentIndex < words.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ffe36d', '#dc2323', '#ffffff']
      });
      setShowCompletionLogo(true);
      setTimeout(() => setShowCompletionLogo(false), 2500);
    }
  };

  const handlePrev = () => {
    setIsFlipped(false);
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is holding modifier keys
      if (e.altKey || e.ctrlKey || e.metaKey) return;
      
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        setIsFlipped(prev => !prev);
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, words.length]);

  const handleDownload = async (e: MouseEvent) => {
    e.stopPropagation();
    if (exportRef.current) {
      try {
        const dataURL = await toPng(exportRef.current, {
          cacheBust: true,
          style: {
            // Need to set margin to 0 for proper export if layout is flex/absolute
            margin: '0',
          },
          pixelRatio: 2
        });
        const a = document.createElement('a');
        a.href = dataURL;
        a.download = `Flashcard - ${currentWord.word}.png`;
        a.click();
      } catch (err) {
        console.error("Failed to generate flashcard image", err);
      }
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#0D0D0D] relative overflow-hidden">
      <AnimatePresence>
        {showCompletionLogo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0, rotate: -180, opacity: 0 }}
              animate={{ scale: 1, rotate: 0, opacity: 1 }}
              exit={{ scale: 2, opacity: 0 }}
              transition={{ 
                type: "spring", 
                stiffness: 260, 
                damping: 20,
                duration: 0.8
              }}
              className="flex flex-col items-center"
            >
               <div className="w-40 h-40 bg-[#ffe36d] rounded-[40px] flex items-center justify-center shadow-[0_20px_40px_rgba(255,227,109,0.2)] overflow-hidden mb-6">
                 <MessageCircle size={80} className="text-[#111]" />
               </div>
               <motion.h1 
                 animate={{ scale: [1, 1.1, 1] }}
                 transition={{ repeat: Infinity, duration: 1 }}
                 className="text-6xl font-black text-white tracking-tighter uppercase text-center"
               >
                 SPEAK UP!
               </motion.h1>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Offscreen element for clean image export */}
      <div className="fixed top-[200vh] left-0 pointer-events-none -z-50 opacity-0">
        <div ref={exportRef} className="w-[500px] h-[750px] bg-[#111] border border-[#333] rounded-[40px] p-0 flex flex-col items-center shadow-2xl overflow-hidden relative">
            {/* Branding Header */}
            <div className="w-full bg-[#1A1A1A] py-5 px-8 flex justify-between items-center border-b border-[#333]">
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 bg-[#ffe36d] rounded-xl flex items-center justify-center overflow-hidden">
               <MessageCircle className="text-[#111] w-6 h-6" />
             </div>
            <span className="text-white font-black tracking-tighter uppercase text-lg">Hit up to Speak up!</span>
          </div>
          <div className="bg-[#dc2323] text-white px-3 py-1.5 rounded-full text-[9px] font-black tracking-wider uppercase ml-4 shadow-[0_2px_4px_rgba(220,35,35,0.15)] flex items-center justify-center shrink-0">
            by IELTSDrills.com
          </div>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center p-8 w-full space-y-6">
              <div className="flex flex-col items-center">
                <span className="text-[60px] mb-2 leading-none">{currentWord.emoji}</span>
                <h2 className="text-4xl font-black text-white uppercase tracking-tighter mb-3 underline decoration-[#ffe36d] decoration-[4px] text-center w-full break-words px-4 leading-tight">{currentWord.word}</h2>
                <div className="flex items-center gap-2 font-mono text-lg text-[#ffe36d] bg-[#222] px-4 py-1.5 rounded-full mt-2">
                  <span>/</span>{currentWord.ipa}<span>/</span>
                </div>
              </div>
              
              <div className="w-full h-1 bg-[#333] max-w-[200px] rounded-full"></div>
              
              <div className="w-full space-y-4 px-2">
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-500 mb-1 text-center">DEFINITION</h3>
                  <p className="text-xl font-black text-[#dc2323] text-center leading-tight px-4 text-balance">
                    {currentWord.definition}
                  </p>
                </div>
                
                <div className="bg-[#1A1A1A] p-5 rounded-[24px] border border-[#333] rotate-[-1deg] w-full flex flex-col items-center text-center mt-6">
                  <h3 className="text-[10px] uppercase tracking-[0.2em] font-black text-gray-500 mb-1">EXAMPLE</h3>
                  <p className="text-base font-bold italic text-white leading-snug text-balance">
                    "{currentWord.example}"
                  </p>
                </div>
              </div>
            </div>

            {/* Branding Footer */}
            <div className="w-full bg-[#ffe36d] py-3 text-center border-t border-[#333] mt-auto">
               <span className="text-[#111] font-black tracking-widest uppercase text-[10px]">Luyện Thi IELTS Miễn Phí tại IELTSDrills.com</span>
            </div>
        </div>
      </div>

      {/* Header */}
      <div className={`p-5 text-white bg-[#1A1A1A] border-b border-[#333] flex items-center justify-between rounded-b-[32px] shadow-lg relative z-10 mx-2 sm:mx-4 mt-2 sm:mt-4`}>
        <button onClick={onBack} className="p-2 hover:bg-[#333] rounded-2xl transition-colors text-gray-400 hover:text-white">
          <ArrowLeft size={24} />
        </button>
        <span className="font-black text-lg tracking-wider uppercase flex items-center gap-2 text-white/90">
          {topic.icon} {topic.title}
        </span>
        <div className="px-4 py-2 bg-[#222] text-[#ffe36d] rounded-full flex items-center justify-center font-black text-xs border border-[#444]">
          {currentIndex + 1}/{words.length}
        </div>
      </div>

      {/* Main Card Area */}
      <div className="flex-1 flex flex-col p-4 sm:p-6 w-full max-w-md mx-auto min-h-0 pt-8 sm:pt-12">
        <div className="flex-1 min-h-0 flex flex-col items-center justify-center w-full">
          <div 
            className="w-full max-w-[320px] sm:max-w-none h-full max-h-[500px] aspect-[1/1] sm:aspect-[4/5] perspective-1000 cursor-pointer relative shrink-0"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            {/* Download Button Component */}
            <button 
              onClick={handleDownload}
              className="absolute -top-4 -right-4 z-20 p-3 bg-[#222] text-white rounded-full shadow-xl border border-[#444] hover:bg-[#ffe36d] hover:text-[#111] transition-all active:scale-95"
              title="Tải Flashcard"
            >
              <Download size={20} />
            </button>

            <motion.div
              className="w-full h-full relative preserve-3d shadow-2xl"
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
            >
              {/* Front of card */}
              <div className={`absolute inset-0 backface-hidden bg-[#1A1A1A] rounded-[40px] flex flex-col items-center justify-center p-6 border border-[#333]`}>
                {/* Branding Watermark */}
                <div className="absolute top-6 flex flex-col items-center opacity-10 pointer-events-none">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-md overflow-hidden text-white">
                      <MessageCircle className="w-full h-full object-cover" />
                    </div>
                    <span className="font-black uppercase tracking-tighter text-sm text-white">Hit up to Speak up!</span>
                  </div>
                </div>

                <span className="text-6xl sm:text-7xl mb-6 mt-4">{currentWord.emoji}</span>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-4 text-white text-center underline decoration-[#ffe36d] decoration-[3px] underline-offset-4">{currentWord.word}</h2>
                <div className="font-mono text-sm sm:text-base text-[#ffe36d] bg-[#222] px-4 py-1.5 rounded-full mb-8 border border-[#444]">/{currentWord.ipa}/</div>
                
                <button 
                  onClick={(e) => { e.stopPropagation(); playTTS(currentWord.word); }}
                  className={`p-4 rounded-full bg-[#dc2323] text-white hover:bg-[#b01c1c] active:scale-95 transition-all shadow-lg`}
                >
                  <Volume2 size={28} className="sm:w-8 sm:h-8" />
                </button>
              </div>

              {/* Back of card */}
              <div className={`absolute inset-0 backface-hidden [transform:rotateY(180deg)] bg-[#1A1A1A] rounded-[40px] flex flex-col items-center justify-center p-6 border border-[#333] text-center overflow-y-auto`}>
                {/* Branding Watermark */}
                <div className="absolute top-6 right-6 flex flex-col items-end opacity-10 pointer-events-none">
                  <div className="flex items-center gap-1">
                    <div className="w-4 h-4 text-white rounded ml-1 overflow-hidden pointer-events-none">
                      <MessageCircle className="w-full h-full object-cover" />
                    </div>
                    <span className="font-black uppercase tracking-tighter text-[10px] text-white">Hit up to Speak up!</span>
                  </div>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center space-y-6 w-full mt-4 min-h-0">
                  <div className="w-full">
                    <h3 className="text-xs uppercase tracking-widest text-[#dc2323] font-black mb-2">Definition</h3>
                    <p className="text-white text-lg sm:text-xl font-bold leading-snug max-h-[100px] sm:max-h-[140px] overflow-y-auto px-1 scrollbar-hide">"{currentWord.definition}"</p>
                  </div>
                  
                  <div className="w-full h-px bg-[#333] shrink-0"></div>

                  <div className="w-full">
                    <h3 className="text-xs uppercase tracking-widest text-[#ffe36d] font-black mb-2">Example</h3>
                    <p className="text-gray-300 font-medium text-sm sm:text-lg italic max-h-[100px] sm:max-h-[140px] overflow-y-auto px-1 scrollbar-hide">"{currentWord.example}"</p>
                  </div>
                </div>

                 <button 
                  onClick={(e) => { e.stopPropagation(); playTTS(currentWord.example); }}
                  className="mt-6 flex items-center gap-2 mx-auto bg-[#222] px-5 py-2.5 rounded-full text-xs font-black border border-[#444] text-white hover:bg-[#dc2323] hover:border-[#dc2323] transition-all shrink-0"
                >
                  <Volume2 size={18} /> LISTEN ALOUD
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Controls */}
        <div className="grid grid-cols-3 gap-4 w-full mt-8 shrink-0">
          <button 
            disabled={currentIndex === 0}
            onClick={handlePrev}
            className="py-4 bg-[#1A1A1A] rounded-[24px] border border-[#333] text-white flex items-center justify-center transition-all disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#ffe36d] hover:text-[#ffe36d]"
          >
            <ChevronLeft size={28} />
          </button>
          
          <button 
            onClick={() => setIsFlipped(!isFlipped)}
             className="py-4 bg-[#222] rounded-[24px] border border-[#444] text-[#ffe36d] flex items-center justify-center transition-all hover:bg-[#333] active:scale-95"
          >
            <RefreshCcw size={24} />
          </button>

          <button 
            onClick={handleNext}
            className={`py-4 rounded-[24px] flex items-center justify-center transition-all active:scale-95
              ${currentIndex === words.length - 1 
                ? 'bg-[#dc2323] text-white hover:bg-[#b01c1c]' 
                : 'bg-[#ffe36d] text-[#111] hover:bg-[#efd35d]'}
            `}
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </div>
    </div>
  );
}

