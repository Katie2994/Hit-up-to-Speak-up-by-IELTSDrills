import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Topic, Word } from '../data/vocab';
import confetti from 'canvas-confetti';
import { playTTS } from '../services/tts';
import { playCorrectSound, playIncorrectSound } from '../services/audio';

interface MemoryMatchProps {
  topic: Topic;
  onBack: () => void;
  updateStars?: (n: number) => void;
}

type CardData = {
  id: string; // Unique ID for the specific card instance
  wordId: string;
  type: 'word' | 'emoji';
  content: string;
  isMatched: boolean;
  isFlipped: boolean;
};

export function MemoryMatch({ topic, onBack, updateStars }: MemoryMatchProps) {
  const [cards, setCards] = useState<CardData[]>([]);
  const [flippedIds, setFlippedIds] = useState<string[]>([]);
  const [matches, setMatches] = useState(0);

  // Initialize game
  useEffect(() => {
    // Select 6 words for 12 cards total
    const selectedWords = [...topic.words].sort(() => 0.5 - Math.random()).slice(0, 6);
    
    const deck: CardData[] = selectedWords.flatMap(w => [
      { id: `${w.id}-w`, wordId: w.id, type: 'word', content: w.word, isMatched: false, isFlipped: false },
      { id: `${w.id}-e`, wordId: w.id, type: 'emoji', content: w.emoji, isMatched: false, isFlipped: false }
    ]);
    
    setCards(deck.sort(() => 0.5 - Math.random()));
  }, [topic]);

  const handleCardClick = (id: string) => {
    // Prevent clicking if 2 are already flipped or click on already flipped/matched
    if (flippedIds.length >= 2) return;
    const clickedCard = cards.find(c => c.id === id);
    if (!clickedCard || clickedCard.isFlipped || clickedCard.isMatched) return;

    if (clickedCard.type === 'word') {
       playTTS(clickedCard.content);
    }
    
    const newFlipped = [...flippedIds, id];
    setFlippedIds(newFlipped);
    
    setCards(prev => prev.map(c => c.id === id ? { ...c, isFlipped: true } : c));

    if (newFlipped.length === 2) {
      const [firstCardId, secondCardId] = newFlipped;
      const firstCard = cards.find(c => c.id === firstCardId)!;
      const secondCard = cards.find(c => c.id === id)!;

      if (firstCard.wordId === secondCard.wordId && firstCard.type !== secondCard.type) {
        // Match!
        playCorrectSound();
        setTimeout(() => {
          setCards(prev => prev.map(c => 
            c.id === firstCardId || c.id === secondCardId 
              ? { ...c, isMatched: true } 
              : c
          ));
          setFlippedIds([]);
          setMatches(m => m + 1);
          if (updateStars) {
            updateStars(2); // 2 stars per match
          }
        }, 1000);
      } else {
        // Not a match
        playIncorrectSound();
        setTimeout(() => {
          setCards(prev => prev.map(c => 
            c.id === firstCardId || c.id === secondCardId 
              ? { ...c, isFlipped: false } 
              : c
          ));
          setFlippedIds([]);
        }, 1500);
      }
    }
  };

  useEffect(() => {
    if (matches > 0 && matches === 6) { /* We chose 6 pairs */
      setTimeout(() => {
        confetti({ particleCount: 150, spread: 100, origin: {y: 0.5} });
      }, 500);
    }
  }, [matches]);

  if (matches === 6) {
    return (
      <div className="flex flex-col h-full bg-[#0D0D0D] relative">
        <div className={`p-5 text-white bg-[#1A1A1A] border-b border-[#333] rounded-b-[32px] shadow-lg flex items-center justify-between z-10 mx-2 sm:mx-4 mt-2 sm:mt-4`}>
          <button onClick={onBack} className="p-2 hover:bg-[#333] rounded-2xl border border-transparent transition-all">
            <ArrowLeft size={24} />
          </button>
          <span className="font-black text-lg uppercase tracking-widest">Chiến Thắng!</span>
          <div className="w-10"></div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center p-8 text-center">
           <span className="text-8xl mb-6 drop-shadow-md">🧩</span>
           <h2 className="text-4xl font-black text-white mb-4 uppercase tracking-tighter">Trí Nhớ Tuyệt Vời!</h2>
           <p className="text-sm font-bold text-gray-400 mb-8 uppercase tracking-widest">Bạn đã tìm được tất cả các cặp!</p>
           <button 
             onClick={onBack}
             className={`px-8 py-4 rounded-[24px] text-white font-black text-xl bg-[#dc2323] border border-[#dc2323] hover:bg-[#b01c1c] active:scale-95 shadow-lg transition-all uppercase tracking-wider`}
           >
             Về Chủ Đề
           </button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-[#0D0D0D] relative overflow-hidden">
      <div className={`p-5 text-white bg-[#1A1A1A] border-b border-[#333] flex items-center justify-between rounded-b-[32px] shadow-lg relative z-10 mx-2 sm:mx-4 mt-2 sm:mt-4`}>
        <button onClick={onBack} className="p-2 hover:bg-[#333] rounded-2xl border border-transparent transition-all">
          <ArrowLeft size={24} />
        </button>
        <div className="font-black text-lg uppercase tracking-wider">
          Ghép Từ
        </div>
        <div className="w-16 h-10 bg-[#222] text-[#dc2323] border border-[#444] rounded-full flex items-center justify-center font-black text-xs shadow-sm">
           {matches}/6
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center p-6 w-full max-w-4xl mx-auto overflow-y-auto">
        <p className="text-gray-400 text-[10px] uppercase tracking-widest font-black mb-6 text-center">Lật thẻ để tìm từ và biểu tượng khớp nhau</p>
        
        <div className="w-full grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {cards.map((card) => (
             <div 
               key={card.id} 
               className="w-full aspect-[3/4] perspective-1000 cursor-pointer"
               onClick={() => handleCardClick(card.id)}
             >
                <div
                  className="w-full h-full relative preserve-3d transition-transform duration-500"
                  style={{ transform: card.isFlipped || card.isMatched ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
                >
                  {/* Front (Hidden state) */}
                  <div className="absolute inset-0 backface-hidden bg-[#222] rounded-[24px] shadow-sm border border-[#444] flex items-center justify-center hover:border-[#dc2323] hover:bg-[#333] transition-colors">
                    <span className="text-4xl text-[#111] font-black opacity-20">?</span>
                  </div>

                  {/* Back (Revealed state) */}
                  <div className={`absolute inset-0 backface-hidden [transform:rotateY(180deg)] ${card.isMatched ? 'bg-[#4ECDC4] text-[#111] border-[#4ECDC4]' : 'bg-[#1A1A1A] text-white border-[#333]'} rounded-[24px] shadow-lg border flex items-center justify-center p-2 text-center`}>
                    {card.type === 'emoji' ? (
                       <span className="text-5xl">{card.content}</span>
                    ) : (
                       <span className={`font-black text-lg sm:text-base break-words px-1 leading-tight ${card.isMatched ? 'text-[#111]' : 'text-white'}`}>{card.content}</span>
                    )}
                  </div>
                </div>
             </div>
          ))}
        </div>
      </div>
    </div>
  );
}
