import { useState, useEffect } from 'react';
import { Home } from './components/Home';
import { TopicDetail } from './components/TopicDetail';
import { Flashcards } from './components/Flashcards';
import { Quiz } from './components/Quiz';
import { FillBlank } from './components/FillBlank';
import { MemoryMatch } from './components/MemoryMatch';
import { WordTower } from './components/WordTower';
import { WordFlood } from './components/WordFlood';
import { Topic, VOCAB_TOPICS } from './data/vocab';
import { useUserProgress } from './hooks/useUserProgress';

type ViewState = 'home' | 'topic' | 'flashcards' | 'quiz' | 'fillblank' | 'memorymatch' | 'wordtower' | 'wordflood';

export default function App() {
  const [view, setView] = useState<ViewState>('home');
  const [activeTopic, setActiveTopic] = useState<Topic | null>(null);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeCommTab, setActiveCommTab] = useState('How to Speak');
  const [activeTopicTab, setActiveTopicTab] = useState<'dialogue' | 'structures' | 'skillsLab'>('dialogue');
  
  const { progress, updateStars, updateStreak, updateSetting, updateTowerHighscore, updateBlastHighscore, updateSnakeHighscore, updateFloodHighscore } = useUserProgress();
  
  useEffect(() => {
    updateStreak(); // Update streak when app loads
  }, []);

  const handleSelectTopic = (topic: Topic) => {
    setActiveTopic(topic);
    setView('topic');
  };

  const handleSelectMode = (mode: string) => {
    setView(mode as ViewState);
  };

  const handleBackToHome = () => {
    setActiveTopic(null);
    setView('home');
  };

  const handleBackToTopic = () => {
    setView('topic');
  };

  return (
    <div className="w-full h-screen bg-[#0D0D0D] font-sans flex flex-col items-center overflow-hidden">
      <main className="w-full flex-1 min-h-0 bg-[#0D0D0D] relative shadow-none flex flex-col overflow-hidden">
        {view === 'home' && (
          <Home 
            onSelectTopic={handleSelectTopic} 
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
            activeCommTab={activeCommTab}
            setActiveCommTab={setActiveCommTab}
            progress={progress}
            updateSetting={updateSetting}
          />
        )}
        
        {view === 'topic' && activeTopic && (
          <TopicDetail 
            topic={activeTopic} 
            onBack={handleBackToHome}
            onSelectMode={handleSelectMode}
            activeCommTab={activeTopicTab}
            setActiveCommTab={setActiveTopicTab}
          />
        )}

        {view === 'flashcards' && activeTopic && (
          <Flashcards 
            topic={activeTopic}
            onBack={handleBackToTopic}
          />
        )}

        {view === 'quiz' && activeTopic && (
          <Quiz 
            topic={activeTopic}
            onBack={handleBackToTopic}
            updateStars={updateStars}
          />
        )}
        
        {view === 'fillblank' && activeTopic && (
          <FillBlank 
            topic={activeTopic}
            onBack={handleBackToTopic}
            updateStars={updateStars}
          />
        )}
        
        {view === 'memorymatch' && activeTopic && (
          <MemoryMatch 
            topic={activeTopic}
            onBack={handleBackToTopic}
            updateStars={updateStars}
          />
        )}
                {view === 'wordtower' && activeTopic && (
          <WordTower 
            topic={activeTopic}
            onBack={handleBackToTopic}
            updateStars={updateStars}
            highscore={progress.towerHighscore || 0}
            updateHighscore={updateTowerHighscore}
          />
        )}
        
        {view === 'wordflood' && activeTopic && (
          <WordFlood 
            topic={activeTopic}
            onBack={handleBackToTopic}
            updateStars={updateStars}
            highscore={progress.floodHighscore || 0}
            updateHighscore={updateFloodHighscore}
          />
        )}
      </main>

      <footer className="w-full h-[40px] shrink-0 bg-[#111] border-t border-[#333] flex items-center justify-center gap-2 z-50">
        <span className="text-gray-500 font-black tracking-widest uppercase text-[9px] sm:text-[10px]">Luyện Thi IELTS Miễn Phí tại</span>
        <a 
          href="https://ieltsdrills.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="px-2 py-0.5 bg-[#222] text-[#ffe36d] border border-[#444] text-[9px] sm:text-[10px] font-black rounded hover:bg-[#ffe36d] hover:text-[#111] hover:-translate-y-0.5 transition-all shadow-sm active:translate-y-0"
        >
          IELTS DRILLS
        </a>
      </footer>
    </div>
  );
}
