import { useState, useEffect } from 'react';
import { 
  Settings, UserCircle, ArrowLeft, Trophy, Zap, Star, MessageCircle, ArrowRight,
  Sparkles, BookOpen, Layers, Heart, Bookmark, Search, Volume2
} from 'lucide-react';
import { Topic, VOCAB_TOPICS } from '../data/vocab';
import { motion, AnimatePresence } from 'motion/react';
import { playTTS } from '../services/tts';

interface HomeProps {
  onSelectTopic: (topic: Topic) => void;
  activeCategory: string | null;
  setActiveCategory: (cat: string | null) => void;
  activeCommTab: string;
  setActiveCommTab: (tab: string) => void;
  progress: {
    stars: number;
    streak: number;
    dailyStars: number;
    settings: {
      soundEnabled: boolean;
      notificationsEnabled: boolean;
    }
  };
  updateSetting: (key: "soundEnabled" | "notificationsEnabled", value: boolean) => void;
}

const MAIN_CATEGORIES = [
  { id: "Communication", title: "Bài Học Giao Tiếp", description: "Giáo trình Hit up to Speak up", icon: "🗣️", color: "bg-[#dc2323]" },
  { id: "Slang", title: "Từ Lóng Quốc Tế", description: "UK, US, AU, CA", icon: "😎", color: "bg-[#ffe36d] text-black" },
  { id: "Life", title: "Tiếng Anh Đời Sống", description: "Từ vựng hàng ngày", icon: "🍎", color: "bg-[#222222] text-white" },
  { id: "PhrasalVerbs", title: "Động Từ Ghép", description: "Phrasal Verbs thông dụng", icon: "👟", color: "bg-[#222222] text-white" },
  { id: "Idioms", title: "Thành Ngữ", description: "Thành ngữ giao tiếp", icon: "🎭", color: "bg-[#222222] text-white" },
  { id: "Collocations", title: "Cụm Từ Cố Định", description: "Collocations tự nhiên", icon: "🔗", color: "bg-[#222222] text-white" }
];

const PORTAL_CATEGORIES = [
  {
    id: "Slang",
    title: "Từ Lóng Quốc Tế",
    sub: "US, UK, AU, CA Slang",
    description: "Nhịp sống hiện đại qua ngôn ngữ vô cùng tự nhiên của giới trẻ bản xứ.",
    icon: "😎",
    color: "from-amber-500/10 to-amber-600/5 hover:border-amber-400/40 border-amber-500/20 text-amber-400",
    glow: "shadow-amber-500/5 hover:shadow-amber-500/10",
    tags: ["Thực tế 100%", "Giao tiếp sành điệu", "Gen Z Speak"],
    benefits: "Chất chơi, nâng cao độ cool ngầu cho câu nói."
  },
  {
    id: "Life",
    title: "Tiếng Anh Đời Sống",
    sub: "Daily Life Expressions",
    description: "Giao tiếp trôi chảy tự tin trong sinh hoạt, ẩm thực, mua sắm.",
    icon: "🍎",
    color: "from-rose-500/10 to-rose-600/5 hover:border-rose-400/40 border-rose-500/20 text-rose-400",
    glow: "shadow-rose-500/5 hover:shadow-rose-500/10",
    tags: ["Phản xạ đời thực", "Nhu cầu hằng ngày", "Cực kỳ thực tế"],
    benefits: "Định cư, du lịch hay sinh hoạt đều mượt mà."
  },
  {
    id: "PhrasalVerbs",
    title: "Động Từ Ghép",
    sub: "Essential Phrasal Verbs",
    description: "Công cụ nói tiếng Anh siêu trôi chảy và cực kỳ tự nhiên.",
    icon: "👟",
    color: "from-cyan-500/10 to-cyan-600/5 hover:border-cyan-400/40 border-cyan-500/20 text-cyan-400",
    glow: "shadow-cyan-500/5 hover:shadow-cyan-500/10",
    tags: ["Phrasal Verbs bão", "Nói không bị vấp", "Phản xạ nhanh"],
    benefits: "Thay thế các từ đơn học thuật cứng nhắc."
  },
  {
    id: "Idioms",
    title: "Thành Ngữ",
    sub: "Native Idiomatic Speech",
    description: "Diễn đạt ẩn dụ giàu tính văn hóa, tăng vọt màu sắc biểu cảm.",
    icon: "🎭",
    color: "from-purple-500/10 to-purple-600/5 hover:border-purple-400/40 border-purple-500/20 text-purple-400",
    glow: "shadow-purple-500/5 hover:shadow-purple-500/10",
    tags: ["Idiom thông dụng", "Speaking mượt mà", "Bản xứ 100%"],
    benefits: "Tăng điểm độ trôi chảy & tự nhiên trong IELTS Speaking."
  },
  {
    id: "Collocations",
    title: "Cụm Từ Cố Định",
    sub: "Standard Collocations",
    description: "Sử dụng từ đúng cặp, đúng ngữ pháp của người bản xứ.",
    icon: "🔗",
    color: "from-emerald-500/10 to-emerald-600/5 hover:border-emerald-400/40 border-emerald-500/20 text-emerald-400",
    glow: "shadow-emerald-500/5 hover:shadow-emerald-500/10",
    tags: ["Collocations hay", "Diễn đạt tự nhiên", "Cực chuẩn văn phong"],
    benefits: "Hạn chế tuyệt đối lỗi dịch nghĩa Việt-Anh ngây ngô."
  }
];

const PORTAL_FLASHCARDS = [
  { word: "Chill out", type: "Từ Lóng", translation: "Thư giãn, bớt nóng giận đi", example: "Hey, chill out! No need to get so angry.", category: "Slang", ipa: "/tʃɪl aʊt/" },
  { word: "A piece of cake", type: "Thành Ngữ", translation: "Dễ như trở bàn tay, cực dễ", example: "Don't worry about the English test, it's a piece of cake!", category: "Idioms", ipa: "/ə piːs əv keɪk/" },
  { word: "Under the weather", type: "Thành Ngữ", translation: "Có vẻ không khỏe, hơi mệt mỏi", example: "I am feeling a bit under the weather today, maybe I'll rest.", category: "Idioms", ipa: "/ˈʌn.də ðə ˈweð.ə/" },
  { word: "Find out", type: "Động Từ Ghép", translation: "Khám phá ra, tìm ra sự thật", example: "I need to find out what time the bus leaves.", category: "PhrasalVerbs", ipa: "/faɪnd aʊt/" },
  { word: "Take a break", type: "Cụm Từ Cố Định", translation: "Nghỉ ngơi, giải lao một lát", example: "We've been working for hours. Let's take a break!", category: "Collocations", ipa: "/teɪk ə breɪk/" }
];

const SCATTERED_WORDS = [
  "How", "exciting", "predict", "say", "can", "I", "finally", 
  "Hit", "up", "to", "speak", "up!", "confidence", "fluency", "A.I."
];

export function Home({ onSelectTopic, activeCategory, setActiveCategory, activeCommTab, setActiveCommTab, progress, updateSetting }: HomeProps) {
  const [showSettings, setShowSettings] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  const [cardFlipIndex, setCardFlipIndex] = useState(0);
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const COMM_TABS = [
    { id: 'How to Speak', label: 'Kỹ năng Phát âm' },
    { id: 'Phổ biến', label: 'Phần lớn học viên' },
    { id: 'For Students', label: 'Học sinh - Sinh viên' },
    { id: 'For Professionals', label: 'Người đi làm' },
    { id: 'For Beauty Professionals', label: 'Ngành làm đẹp' },
    { id: 'Making Friends Abroad', label: 'Kết bạn Quốc tế' },
    { id: 'Parent-Child', label: 'Bố mẹ & Con cái' },
  ];

  const getDisplayTopics = () => {
    if (!activeCategory) return [];
    
    let baseTopics = VOCAB_TOPICS.filter(t => t.category === activeCategory);
    
    if (activeCategory === "Communication") {
       baseTopics = baseTopics.filter(t => {
           if (Array.isArray(t.subCategory)) {
               return t.subCategory.includes(activeCommTab);
           }
           return t.subCategory === activeCommTab;
       });
    }

    const result: Topic[] = [];
    let reviewCounter = 1;
    let reviewBuffer: Topic[] = [];
    
    for (let i = 0; i < baseTopics.length; i++) {
        const topic = baseTopics[i];
        result.push(topic);
        reviewBuffer.push(topic);
        
        let shouldReview = false;
        
        if (reviewBuffer.length === 2) {
            shouldReview = true;
        }
        
        if (shouldReview) {
          const reviewWords = reviewBuffer.flatMap(t => t.words || []);
          const includedTopicTitles = reviewBuffer.map(t => t.title).join(', ');
          
          result.push({
            id: `review_${activeCategory}_${activeCommTab}_${i}`,
            title: `Ôn tập tổng hợp ${reviewCounter}`,
            vietnameseTitle: `Ôn tập ${reviewCounter}`,
            category: activeCategory as any,
            description: `${includedTopicTitles}`,
            icon: "🔥",
            color: "bg-[#dc2323]",
            words: reviewWords,
            subCategory: activeCommTab
          });
          reviewCounter++;
          if (activeCategory === "Communication") {
              reviewBuffer = []; // reset buffer
          } else {
              // old behavior for other categories
              reviewBuffer = [];
          }
        }
    }
    
    return result;
  };

  const displayTopics = getDisplayTopics();

  return (
    <div className="flex flex-col h-full bg-[#0D0D0D] text-white font-sans overflow-hidden">
      {/* Header */}
      <header className="bg-[#111111]/80 px-6 py-5 border-b border-[#333] sticky top-0 z-30 w-full flex justify-between items-center backdrop-blur-md">
        <div className="flex items-center gap-3">
           <a 
             href="https://www.facebook.com/profile.php?id=61572120501598"
             target="_blank"
             rel="noopener noreferrer"
             className="w-10 h-10 bg-[#ffe36d] rounded-xl flex items-center justify-center hover:scale-105 transition-transform"
           >
             <MessageCircle size={24} className="text-[#0D0D0D]" />
           </a>
           <h1 className="text-xl sm:text-2xl font-black tracking-tighter uppercase cursor-pointer text-white" onClick={() => setActiveCategory(null)}>
             Hit up to Speak up!
           </h1>
           <a 
             href="https://ieltsdrills.com" 
             target="_blank" 
             rel="noopener noreferrer"
             className="ml-2 px-2 py-0.5 bg-[#222] text-[#ffe36d] border border-[#ffe36d]/30 text-[10px] font-black rounded-md hover:bg-[#ffe36d] hover:text-[#0D0D0D] transition-colors"
           >
             IELTS DRILLS
           </a>
        </div>
        
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden sm:flex items-center gap-1.5 bg-[#222] px-3 py-1.5 rounded-full border border-[#444]">
            <Zap size={16} className="text-[#ffe36d]" fill="#ffe36d" />
            <span className="font-bold text-sm text-white">{progress.streak}</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 bg-[#222] px-3 py-1.5 rounded-full border border-[#444]">
            <Star size={16} className="text-[#dc2323]" fill="#dc2323" />
            <span className="font-bold text-sm text-white">{progress.stars}</span>
          </div>
          <button 
            onClick={() => setShowSettings(true)}
            className="p-2 hover:bg-[#222] rounded-xl transition-colors active:scale-95 text-gray-300"
          >
            <Settings size={22} />
          </button>
          <button 
            onClick={() => setShowProfile(true)}
            className="p-2 hover:bg-[#222] rounded-xl transition-colors text-[#dc2323] active:scale-95"
          >
            <UserCircle size={24} />
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto relative">
        <div className="max-w-5xl mx-auto w-full px-4 sm:px-6 py-8 sm:py-12 relative z-10">
          
          <AnimatePresence mode="wait">
            {!activeCategory ? (
              <motion.div
                key="home-dashboard"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="space-y-12"
              >
                {/* Brand New Hero Box - Inspired by image */}
                <div className="relative bg-[#ffe36d] rounded-[40px] p-8 sm:p-12 overflow-hidden flex flex-col md:flex-row items-center justify-between min-h-[320px] shadow-[0_20px_40px_rgba(255,227,109,0.1)]">
                  
                  {/* Decorative Mood Background blob */}
                  <div className="absolute inset-0 opacity-40 pointer-events-none overflow-hidden">
                    <div className="absolute -top-20 -right-20 w-96 h-96 bg-[#dc2323] rounded-[100px] rotate-45 mix-blend-multiply filter blur-2xl"></div>
                    <div className="absolute top-40 -left-20 w-72 h-72 bg-white rounded-full mix-blend-screen filter blur-3xl opacity-50"></div>
                  </div>

                  {/* Left Side: Content */}
                  <div className="relative z-10 w-full md:w-[60%] flex flex-col items-start gap-4">
                    <div className="inline-flex items-center gap-2 bg-[#111] text-white px-4 py-2 rounded-full text-xs font-black uppercase tracking-wider shadow-lg">
                      <Zap size={14} className="text-[#ffe36d]" fill="#ffe36d"/> 100% Thực Tế
                    </div>
                    <h2 className="text-[3rem] sm:text-[4.5rem] font-black text-[#111] uppercase tracking-tighter leading-[0.9]">
                      Speak<br />Like<br />A Pro.
                    </h2>
                    <p className="font-bold text-[#333] text-lg max-w-sm mt-3">
                      Làm chủ kĩ năng giao tiếp tiếng Anh qua phản xạ thực tế.
                    </p>
                    
                    <button 
                      onClick={() => setActiveCategory("Communication")}
                      className="mt-6 flex items-center gap-3 bg-[#dc2323] text-white px-8 py-5 rounded-full font-black text-xl uppercase tracking-widest hover:bg-[#b01c1c] hover:scale-105 active:scale-95 transition-all shadow-xl"
                    >
                      Học Giao Tiếp <ArrowRight size={24} />
                    </button>
                  </div>

                  {/* Right Side: Floating Pills (Image Inspiration) */}
                  <div className="relative z-10 w-full md:w-[40%] h-[250px] mt-12 md:mt-0 right-0 flex items-center justify-center">
                    <div className="relative w-full max-w-md h-full flex flex-wrap justify-center content-center gap-2">
                       {SCATTERED_WORDS.map((word, i) => {
                         const isAccent = i % 4 === 0;
                         const isWhite = i % 5 === 0;
                         const bg = isAccent ? 'bg-[#dc2323] text-white' : (isWhite ? 'bg-white text-black' : 'bg-[#111] text-white');
                         
                         return (
                           <motion.div
                             key={i}
                             initial={{ opacity: 0, scale: 0, y: 20 }}
                             animate={{ 
                               opacity: 1, 
                               scale: 1,
                               y: 0
                             }}
                             transition={{
                               delay: i * 0.05,
                               duration: 0.5,
                               type: "spring"
                             }}
                             whileHover={{ scale: 1.1, rotate: Math.random() > 0.5 ? 5 : -5 }}
                             className={`px-5 py-2.5 rounded-full font-black text-sm sm:text-base uppercase tracking-tighter shadow-xl whitespace-nowrap cursor-default ${bg}`}
                           >
                             {word}
                           </motion.div>
                         )
                       })}
                    </div>
                  </div>
                </div>

                {/* Progress Stats */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-[#1A1A1A] border border-[#333] rounded-[32px] p-6 flex flex-col justify-between hover:border-[#ffe36d] transition-colors">
                    <div>
                      <h2 className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2">Tiến trình hôm nay</h2>
                      <div className="flex items-end gap-2 mb-6 text-[#ffe36d]">
                        <span className="text-4xl font-black">{Math.min(progress.dailyStars, 50)}/50</span>
                        <span className="text-sm font-bold opacity-70 mb-1.5 uppercase tracking-widest">ngôi sao</span>
                      </div>
                    </div>
                    <div className="w-full bg-[#333] h-3 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        animate={{ width: `${Math.min(100, (progress.dailyStars / 50) * 100)}%` }}
                        className="bg-[#ffe36d] h-full rounded-r-full"
                      ></motion.div>
                    </div>
                  </div>

                  <div className="bg-[#dc2323] rounded-[32px] p-6 text-white flex items-center justify-between border border-[#dc2323] shadow-lg relative overflow-hidden group">
                    <div className="absolute inset-0 bg-[#b01c1c] opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative z-10">
                       <h2 className="text-xs font-black uppercase tracking-widest text-white/80 mb-2">Chuỗi ngày</h2>
                       <p className="text-4xl font-black flex items-center gap-3">
                         {progress.streak} <span className="text-[#ffe36d] text-3xl">🔥</span>
                       </p>
                       <p className="text-xs font-bold mt-2 opacity-90">Giữ vững phong độ nhé!</p>
                    </div>
                    <div className="relative z-10 w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                       <Trophy size={32} className="text-white" strokeWidth={2} />
                    </div>
                  </div>
                </div>

                {/* Từ Vựng Cần Thiết (Essential Vocabulary Showcase) */}
                <div className="space-y-6">
                  <div className="flex items-center justify-between px-2 text-left">
                    <h3 className="text-xl sm:text-2xl font-black uppercase tracking-widest text-[#ffe36d] flex items-center gap-3">
                      <span className="w-3 h-3 rounded-full bg-[#ffe36d] animate-pulse"></span>
                      Từ vựng cần thiết
                    </h3>
                    <span className="hidden sm:inline-block text-[10px] font-black uppercase tracking-wider text-gray-400 bg-[#222] border border-[#333] px-3.5 py-1.5 rounded-full">
                      Hơn 100+ Thử Thách Bản Xứ
                    </span>
                  </div>
                  
                  <motion.div
                    whileHover={{ scale: 1.015 }}
                    whileTap={{ scale: 0.995 }}
                    onClick={() => {
                      setSearchQuery("");
                      setActiveCategory('EssentialVocabPortal');
                    }}
                    className="relative cursor-pointer bg-gradient-to-br from-[#121212] to-[#1a1a1a] border-2 border-[#ffe36d]/10 hover:border-[#ffe36d]/60 rounded-[32px] p-6 sm:p-10 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 transition-all duration-300 group shadow-xl hover:shadow-[#ffe36d]/5 text-left"
                  >
                    {/* Glowing highlight indicator */}
                    <div className="absolute top-0 right-0 w-80 h-80 bg-radial from-[#ffe36d]/5 to-transparent rounded-full filter blur-xl pointer-events-none group-hover:opacity-100 transition-opacity" />

                    <div className="flex-1 space-y-4 text-left relative z-10">
                      <div className="inline-flex items-center gap-1.5 bg-[#dc2323]/10 border border-[#dc2323]/30 px-3.5 py-1.5 rounded-full text-[10px] font-black text-[#ff4e4e] uppercase tracking-wider">
                        <Sparkles size={12} className="text-[#ffe36d]" /> Sân Chơi Từ Vựng Đỉnh Cao
                      </div>
                      
                      <h4 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tighter leading-none group-hover:text-[#ffe36d] transition-colors">
                        Essential Word Bank
                      </h4>
                      
                      <p className="text-gray-400 text-sm sm:text-base font-semibold max-w-xl leading-relaxed">
                        Chinh phục gói từ vựng cốt lõi gồm <span className="text-[#ffe36d] font-black">Từ lóng sành điệu, Tiếng Anh giao tiếp đời sống, Động từ ghép, Thành ngữ ví von, và Collocations bản xứ</span>. Tăng tự tin và độ trôi chảy khi nói lên 200%.
                      </p>

                      {/* Cool Category Badges */}
                      <div className="flex flex-wrap gap-1.5 pt-1 text-left">
                        {['😎 Slang', '🍎 Life', '👟 Phrasal Verbs', '🎭 Idioms', '🔗 Collocations'].map((categoryName) => (
                          <span key={categoryName} className="px-3 py-1 bg-[#222] border border-[#333] rounded-lg text-[10px] font-black uppercase tracking-wider text-gray-300">
                            {categoryName}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Floating Premium Visual Asset Cards */}
                    <div className="relative w-full md:w-[32%] h-[160px] flex items-center justify-center overflow-hidden shrink-0 select-none pointer-events-none">
                      <motion.div 
                        animate={{ y: [0, -4, 0], rotate: [-10, -11, -10] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                        className="absolute w-24 h-32 bg-[#bf2424] border border-[#ff5353]/30 rounded-2xl rotate-[-10deg] translate-x-[-35px] shadow-xl flex flex-col justify-between p-3"
                      >
                        <span className="text-2xl">🍎</span>
                        <span className="font-sans text-[10px] font-black uppercase text-white/80 tracking-wider">Life Vocab</span>
                      </motion.div>
                      
                      <motion.div 
                        animate={{ y: [0, -8, 0], rotate: [2, 3, 2] }}
                        transition={{ repeat: Infinity, duration: 4, delay: 0.5, ease: "easeInOut" }}
                        className="absolute z-10 w-24 h-32 bg-[#121212] border border-[#ffe36d]/50 rounded-2xl rotate-[2deg] shadow-2xl flex flex-col justify-between p-3"
                      >
                        <span className="text-2xl">😎</span>
                        <div className="flex flex-col gap-0.5 text-left">
                          <span className="font-mono text-[8px] font-black uppercase text-[#ffe36d] tracking-wider">US Slang</span>
                          <span className="text-[10px] text-white font-extrabold truncate">No cap!</span>
                        </div>
                      </motion.div>
                      
                      <motion.div 
                        animate={{ y: [0, -5, 0], rotate: [15, 14, 15] }}
                        transition={{ repeat: Infinity, duration: 4, delay: 1, ease: "easeInOut" }}
                        className="absolute w-24 h-32 bg-[#c69a0d] border border-[#fff275]/30 rounded-2xl rotate-[15deg] translate-x-[35px] shadow-xl flex flex-col justify-between p-3"
                      >
                        <span className="text-2xl">🎭</span>
                        <span className="font-sans text-[10px] font-black uppercase text-black/80 tracking-wider">Idioms</span>
                      </motion.div>
                    </div>

                    {/* Circle Chevron CTA */}
                    <div className="w-14 h-14 bg-[#222]/80 border border-[#333] rounded-full flex items-center justify-center shrink-0 text-white group-hover:bg-[#ffe36d] group-hover:text-black hover:scale-105 transition-all self-end md:self-center shadow-lg">
                      <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ) : activeCategory === 'EssentialVocabPortal' ? (
              <motion.div
                key="essential-vocab-portal"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="space-y-10 max-w-5xl mx-auto text-left"
              >
                {/* Portal Navigation & Title */}
                <div className="flex flex-col gap-4 text-left">
                  <button 
                    onClick={() => setActiveCategory(null)}
                    className="flex items-center gap-2 px-4 py-2.5 bg-[#141414] hover:bg-[#222] border border-[#333] hover:border-[#ffe36d]/30 text-gray-400 hover:text-white rounded-2xl text-xs font-black uppercase tracking-widest transition-all w-fit active:scale-95"
                  >
                    <ArrowLeft size={16} /> Quay Lại Trang Chủ
                  </button>
                  
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#222] pb-6 text-left">
                    <div className="space-y-1 text-left">
                      <span className="text-xs font-black uppercase tracking-widest text-[#ffe36d] bg-[#ffe36d]/10 px-3 py-1 rounded-full border border-[#ffe36d]/20">Từ Vựng Cần Thiết</span>
                      <h2 className="text-4xl font-extrabold text-white tracking-tighter uppercase mt-2">Hộp Công Cụ Từ Vựng</h2>
                      <p className="text-gray-400 text-sm sm:text-base font-semibold max-w-2xl">
                        Tổng hợp 5 gói từ vựng cao cấp, phản xạ nhanh và thành ngữ bản xứ được cập nhật liên tục hàng tuần. Chọn chủ đề bên dưới để bước vào bài học chi tiết.
                      </p>
                    </div>

                    {/* Interactive Real-Time Search Bar */}
                    <div className="relative w-full md:w-80 shrink-0">
                      <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                      <input 
                        type="text" 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Tìm kiếm chủ đề, cụm từ..."
                        className="w-full bg-[#1A1A1A] text-white border border-[#333] focus:border-[#ffe36d] rounded-2xl pl-11 pr-4 py-3 text-sm font-bold placeholder-gray-500 focus:outline-none transition-colors shadow-inner"
                      />
                      {searchQuery && (
                        <button 
                          onClick={() => setSearchQuery("")}
                          className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-black uppercase tracking-wider text-gray-400 hover:text-white bg-[#333] px-2 py-0.5 rounded-md"
                        >
                          Xoá
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {searchQuery === "" ? (
                  <>
                    {/* Highlight Interactive Feature: Word of the Day (Breathtaking flip card deck!) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                      {/* Interactive Flip Card Container */}
                      <div className="md:col-span-2 bg-gradient-to-br from-[#121212] to-[#151515] border border-[#222] rounded-[32px] p-6 sm:p-8 flex flex-col justify-between gap-6 shadow-xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-radial from-[#ffe36d]/5 to-transparent rounded-full filter blur-xl pointer-events-none" />
                        
                        <div className="space-y-4">
                          <div className="flex items-center justify-between">
                            <span className="flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#ffe36d]">
                              <Sparkles size={14} className="animate-spin" /> Thử thách phản xạ hằng ngày
                            </span>
                            <span className="text-[10px] font-black uppercase tracking-widest text-[#dc2323] bg-[#dc2323]/10 border border-[#dc2323]/20 px-2.5 py-1 rounded-md">
                              TAP TO FLIP
                            </span>
                          </div>
                          
                          <div className="relative min-h-[140px] flex items-center justify-center pt-2">
                            <AnimatePresence mode="wait">
                              {!isCardFlipped ? (
                                <motion.div
                                  key="front"
                                  initial={{ rotateY: -90, opacity: 0 }}
                                  animate={{ rotateY: 0, opacity: 1 }}
                                  exit={{ rotateY: 90, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  onClick={() => setIsCardFlipped(true)}
                                  className="w-full flex flex-col items-center justify-center text-center cursor-pointer py-4"
                                >
                                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white uppercase tracking-tighter group-hover:scale-105 transition-transform duration-300">
                                    "{PORTAL_FLASHCARDS[cardFlipIndex].word}"
                                  </h3>
                                  <span className="text-xs font-mono text-gray-500 font-semibold tracking-wider mt-1.5 mt-2">
                                    {PORTAL_FLASHCARDS[cardFlipIndex].ipa} • {PORTAL_FLASHCARDS[cardFlipIndex].type}
                                  </span>
                                  <p className="text-xs font-bold text-[#ffe36d] uppercase tracking-widest mt-4 bg-[#ffe36d]/10 px-4 py-1.5 rounded-full border border-[#ffe36d]/20 hover:bg-[#ffe36d] hover:text-black transition-colors">
                                    Bấm để lật xem ý nghĩa 🔄
                                  </p>
                                </motion.div>
                              ) : (
                                <motion.div
                                  key="back"
                                  initial={{ rotateY: 90, opacity: 0 }}
                                  animate={{ rotateY: 0, opacity: 1 }}
                                  exit={{ rotateY: -90, opacity: 0 }}
                                  transition={{ duration: 0.3 }}
                                  onClick={() => setIsCardFlipped(false)}
                                  className="w-full flex flex-col items-center justify-center text-center cursor-pointer py-4"
                                >
                                  <p className="text-xl sm:text-2xl font-black text-[#ffe36d] leading-tight px-4">
                                    {PORTAL_FLASHCARDS[cardFlipIndex].translation}
                                  </p>
                                  <p className="text-xs font-semibold text-gray-400 mt-3 italic max-w-sm px-4">
                                    {PORTAL_FLASHCARDS[cardFlipIndex].example}
                                  </p>
                                  <div className="flex gap-2.5 mt-5">
                                    <button 
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        playTTS(PORTAL_FLASHCARDS[cardFlipIndex].word);
                                      }}
                                      className="flex items-center gap-1.5 px-3 py-1.5 bg-[#222] hover:bg-[#333] border border-[#444] text-[10px] font-black uppercase tracking-widest text-white rounded-xl transition-all"
                                    >
                                      <Volume2 size={12} className="text-[#ffe36d]" /> Nghe Phát Âm
                                    </button>
                                    <button 
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        setIsCardFlipped(false);
                                      }}
                                      className="px-3 py-1.5 bg-white hover:bg-gray-100 text-[#111] text-[10px] font-black uppercase tracking-widest rounded-xl transition-all"
                                    >
                                      Lật lại
                                    </button>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>

                        {/* Flashcard Steppers */}
                        <div className="flex items-center justify-between border-t border-[#222] pt-4 mt-2">
                          <button 
                            onClick={() => {
                              setIsCardFlipped(false);
                              setCardFlipIndex(i => (i - 1 + PORTAL_FLASHCARDS.length) % PORTAL_FLASHCARDS.length);
                            }}
                            className="text-xs font-black tracking-widest text-gray-500 hover:text-white uppercase px-3 py-1.5 rounded-lg hover:bg-[#1C1C1C] transition-colors"
                          >
                            Trước đó
                          </button>
                          
                          <div className="flex gap-1.5">
                            {PORTAL_FLASHCARDS.map((_, i) => (
                              <button 
                                key={i}
                                onClick={() => {
                                  setIsCardFlipped(false);
                                  setCardFlipIndex(i);
                                }}
                                className={`w-2 h-2 rounded-full transition-all ${cardFlipIndex === i ? 'w-6 bg-[#ffe36d]' : 'bg-gray-700'}`}
                              />
                            ))}
                          </div>

                          <button 
                            onClick={() => {
                              setIsCardFlipped(false);
                              setCardFlipIndex(i => (i + 1) % PORTAL_FLASHCARDS.length);
                            }}
                            className="text-xs font-black tracking-widest text-[#ffe36d] hover:text-white uppercase px-3 py-1.5 rounded-lg hover:bg-[#1C1C1C] transition-colors"
                          >
                            Tiếp theo
                          </button>
                        </div>
                      </div>

                      {/* Portal Stats / Methodology Banner */}
                      <div className="bg-gradient-to-br from-[#1C1212] to-[#121212] border border-[#2c1d1d] rounded-[32px] p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden text-left">
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#bf2424]/10 rounded-full filter blur-xl pointer-events-none" />
                        <div>
                          <div className="w-12 h-12 bg-[#dc2323] text-white rounded-2xl flex items-center justify-center text-xl font-bold mb-4">
                            ⭐
                          </div>
                          <h4 className="text-lg font-black text-white uppercase tracking-tight leading-tight">Phương Pháp Phản Xạ</h4>
                          <p className="text-gray-400 text-xs font-bold leading-relaxed mt-2">
                            Mỗi bài học được thiết kế đặc thù kết hợp game **Word Tower**, xếp khối **Memory Match** & trắc nghiệm nhanh để bạn học sâu, ghi nhớ từ vựng vĩnh viễn không bao giờ quên.
                          </p>
                        </div>
                        <div className="border-t border-red-950/40 pt-4 mt-4 text-[10px] font-black uppercase text-[#ffe36d] tracking-widest flex items-center gap-1.5 justify-start">
                          <Zap size={12} className="fill-[#ffe36d] stroke-none" /> 100% Chống học vẹt hiệu quả
                        </div>
                      </div>
                    </div>

                    {/* Majestic Commons Grid for categories (Ui chung cực đẹp ở ngoài) */}
                    <div className="space-y-4 pt-4 text-left">
                      <h3 className="text-xl font-black uppercase tracking-widest text-gray-400 px-2 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#ffe36d]"></span>
                        CHỌN THỂ LOẠI TỪ VỰNG CẦN HỌC
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
                        {PORTAL_CATEGORIES.map((cat, index) => {
                          const topicCount = VOCAB_TOPICS.filter(t => t.category === cat.id).length;
                          const categoryTopics = VOCAB_TOPICS.filter(t => t.category === cat.id).slice(0, 2);
                          
                          return (
                            <motion.div
                              whileHover={{ y: -6, scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              key={cat.id}
                              onClick={() => {
                                // Direct entry into the list screen ("rồi vào sẽ thấy các bài riêng")
                                setActiveCategory(cat.id);
                              }}
                              className={`bg-[#151515] border border-[#252525] rounded-[28px] p-5 cursor-pointer flex flex-col justify-between min-h-[300px] relative transition-all duration-300 group hover:border-[#ffe36d] shadow-md hover:shadow-xl hover:shadow-[#ffe36d]/5 text-left`}
                            >
                              <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                  <div className="w-12 h-12 rounded-2xl bg-[#222] border border-[#333] flex items-center justify-center text-2xl group-hover:bg-[#ffe36d] group-hover:text-black transition-colors shrink-0">
                                    {cat.icon}
                                  </div>
                                  <span className="text-[10px] font-black text-[#ffe36d] bg-[#ffe36d]/10 px-2.5 py-1 rounded-md border border-[#ffe36d]/20">
                                    {topicCount} BÀI HỌC
                                  </span>
                                </div>

                                <div className="space-y-1">
                                  <h4 className="text-lg font-black text-white leading-tight mb-0.5 group-hover:text-[#ffe36d] transition-colors">{cat.title}</h4>
                                  <span className="text-[9px] font-mono font-bold uppercase text-gray-500 tracking-wider block">{cat.sub}</span>
                                </div>

                                <p className="text-gray-400 text-xs font-semibold leading-relaxed line-clamp-3">
                                  {cat.description}
                                </p>
                              </div>

                              <div className="pt-4 border-t border-[#222] mt-4 space-y-3">
                                {/* Preview topics to represent depth */}
                                <div className="space-y-1">
                                  <span className="text-[8px] font-black uppercase text-gray-600 tracking-wider block">Ví dụ chủ đề:</span>
                                  <div className="flex flex-wrap gap-1">
                                    {categoryTopics.map(t => (
                                      <span key={t.id} className="text-[9px] font-black bg-[#222] text-gray-300 px-2 py-0.5 rounded-md truncate max-w-[110px]" title={t.title}>
                                        {t.title}
                                      </span>
                                    ))}
                                    {topicCount > 2 && (
                                      <span className="text-[8px] font-black text-gray-500 bg-[#1e1e1e] px-1 py-0.5 rounded">+{topicCount - 2}</span>
                                    )}
                                  </div>
                                </div>

                                <div className="flex items-center justify-between text-xs font-black uppercase tracking-wider text-gray-500 group-hover:text-white transition-colors">
                                  <span>Học ngay</span>
                                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  </>
                ) : (
                  /* Live Search Results view inside portal */
                  <div className="space-y-6 text-left">
                    <div className="flex items-center justify-between px-2 text-left">
                      <h3 className="text-xl font-black uppercase tracking-widest text-[#ffe36d] flex items-center gap-2">
                        <span>🔍</span> Kết quả tìm kiếm ({
                          VOCAB_TOPICS.filter(t => 
                            ['Slang', 'Life', 'PhrasalVerbs', 'Idioms', 'Collocations'].includes(t.category) &&
                            (t.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                             (t.description && t.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
                             (t.vietnameseTitle && t.vietnameseTitle.toLowerCase().includes(searchQuery.toLowerCase())))
                          ).length
                        })
                      </h3>
                      <button 
                        onClick={() => setSearchQuery("")}
                        className="text-xs font-bold text-gray-400 hover:text-white underline"
                      >
                        Hiển thị tất cả thể loại
                      </button>
                    </div>

                    {(() => {
                      const list = VOCAB_TOPICS.filter(t => 
                        ['Slang', 'Life', 'PhrasalVerbs', 'Idioms', 'Collocations'].includes(t.category) &&
                        (t.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         (t.description && t.description.toLowerCase().includes(searchQuery.toLowerCase())) ||
                         (t.vietnameseTitle && t.vietnameseTitle.toLowerCase().includes(searchQuery.toLowerCase())))
                      );

                      if (list.length > 0) {
                        return (
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-left">
                            {list.map((topic) => {
                              const categoryObj = MAIN_CATEGORIES.find(c => c.id === topic.category);
                              return (
                                <motion.div
                                  whileHover={{ scale: 1.02 }}
                                  key={topic.id}
                                  onClick={() => onSelectTopic(topic)}
                                  className="bg-[#151515] border border-[#252525] hover:border-[#ffe36d] rounded-[24px] p-5 cursor-pointer flex items-center gap-4 transition-all group text-left"
                                >
                                  <div className="w-12 h-12 rounded-xl bg-[#222] flex items-center justify-center text-xl shrink-0 group-hover:bg-[#ffe36d] group-hover:text-black transition-colors">
                                    {topic.icon}
                                  </div>
                                  <div className="flex-1 min-w-0 text-left">
                                    <h4 className="text-base font-black text-white leading-tight mb-1 truncate">{topic.title}</h4>
                                    <div className="flex items-center gap-2">
                                      <span className="text-[9px] font-black uppercase tracking-wider bg-[#222] border border-[#333] px-2 py-0.5 rounded text-[#ffe36d]">
                                        {categoryObj ? categoryObj.title : topic.category}
                                      </span>
                                      <span className="text-[9px] font-semibold text-gray-500">
                                        {topic.words ? topic.words.length : 0} từ
                                      </span>
                                    </div>
                                  </div>
                                  <ArrowRight size={16} className="text-gray-600 group-hover:text-white transition-colors" />
                                </motion.div>
                              );
                            })}
                          </div>
                        );
                      }

                      return (
                        <div className="text-center py-16 bg-[#121212] rounded-3xl border border-[#222] space-y-2">
                          <span className="text-4xl">🌵</span>
                          <h4 className="text-lg font-black text-white uppercase">Không tìm thấy kết quả</h4>
                          <p className="text-gray-500 text-sm font-semibold max-w-md mx-auto">
                            Không tìm thấy chủ đề nào khớp với từ khoá "{searchQuery}". Vui lòng thử tìm kiếm với cụm từ khác!
                          </p>
                        </div>
                      );
                    })()}
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div
                key="topics-view"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="max-w-3xl mx-auto"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-10 sticky top-20 z-20 bg-[#0D0D0D]/90 backdrop-blur-md pb-4 pt-2 text-left">
                  <button 
                    onClick={() => {
                      if (['Slang', 'Life', 'PhrasalVerbs', 'Idioms', 'Collocations'].includes(activeCategory || '')) {
                        setActiveCategory('EssentialVocabPortal');
                      } else {
                        setActiveCategory(null);
                      }
                    }} 
                    className="w-12 h-12 flex items-center justify-center bg-[#1A1A1A] border border-[#333] text-white rounded-2xl hover:bg-[#333] hover:text-[#ffe36d] transition-colors"
                  >
                    <ArrowLeft size={24} />
                  </button>
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-[#ffe36d] bg-[#ffe36d]/10 px-2.5 py-0.5 rounded border border-[#ffe36d]/20">TỪ VỰNG CẦN THIẾT PORTAL</span>
                    <h3 className="text-3xl font-black uppercase tracking-tighter text-white mt-1">
                      {MAIN_CATEGORIES.find(c => c.id === activeCategory)?.title}
                    </h3>
                  </div>
                </div>

                {/* Vertical Timeline Path */}
                <div className="flex flex-col gap-4 sm:gap-6 relative py-4 text-left">
                  {(() => {
                    const renderTopic = (topic: Topic, index: number) => {
                      const isReview = topic.id.startsWith("review_");
                      return (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          key={topic.id}
                          onClick={() => onSelectTopic(topic)}
                          className="relative z-10 w-full"
                        >
                           <motion.div 
                            whileHover={{ scale: 1.02, x: 5 }}
                            className={`
                              group cursor-pointer p-5 rounded-[24px] border border-[#333] 
                              flex items-center gap-4 sm:gap-6 
                              ${isReview ? 'bg-[#1A1A1A] border-[#dc2323]' : 'bg-[#151515] hover:bg-[#1A1A1A] hover:border-[#ffe36d]'}
                              transition-all shadow-md hover:shadow-xl
                            `}
                           >
                              <div className={`${isReview ? 'bg-[#dc2323] text-white' : 'bg-[#222] text-[#ffe36d]'} w-14 h-14 sm:w-16 sm:h-16 rounded-[20px] flex items-center justify-center text-2xl sm:text-3xl shrink-0 group-hover:bg-[#ffe36d] group-hover:text-black transition-colors`}>
                                 {topic.icon}
                              </div>
                              <div className="flex-1 min-w-0">
                                 <h4 className="font-black text-lg sm:text-xl text-white leading-tight mb-1 truncate">{topic.title}</h4>
                                 {topic.description && (
                                   <p className="text-[11px] sm:text-[12px] text-gray-400 font-bold mb-2 truncate" title={topic.description}>{topic.description}</p>
                                 )}
                                 <div className="flex items-center gap-1">
                                    <Star size={12} fill="#ffe36d" color="#ffe36d" />
                                    <Star size={12} fill="#ffe36d" color="#ffe36d" />
                                    <Star size={12} fill="none" color="#ffe36d" opacity={0.3} />
                                    <span className="text-[10px] font-black text-[#ffe36d] ml-1 uppercase tracking-widest">{topic.words ? topic.words.length : 0} Từ vựng</span>
                                 </div>
                              </div>
                              
                              <div className="hidden sm:flex text-[#555] group-hover:text-[#ffe36d] transition-colors pr-2">
                                {isReview ? <Zap size={24} /> : <ArrowRight size={24} />}
                              </div>
                           </motion.div>
                        </motion.div>
                      );
                    };

                    if (activeCategory === "Communication") {
                      return (
                        <div className="space-y-6">
                          <div className="sticky top-[140px] z-20 pb-4 bg-[#0D0D0D] border-b border-[#333] overflow-x-auto no-scrollbar -mx-4 px-4 sm:mx-0 sm:px-0">
                            <div className="flex gap-2 min-w-max">
                              {COMM_TABS.map(tab => (
                                <button
                                  key={tab.id}
                                  onClick={() => setActiveCommTab(tab.id)}
                                  className={`px-4 py-2 font-bold text-sm uppercase tracking-widest transition-colors rounded-full ${
                                    activeCommTab === tab.id 
                                    ? 'bg-[#ffe36d] text-black shadow-md' 
                                    : 'bg-[#1A1A1A] border border-[#333] text-gray-400 hover:text-white hover:border-[#ffe36d]'
                                  }`}
                                >
                                  {tab.label}
                                </button>
                              ))}
                            </div>
                          </div>
                          
                          <div className="flex flex-col gap-4 sm:gap-6">
                            {displayTopics.map((topic, index) => renderTopic(topic, index))}
                          </div>
                        </div>
                      );
                    }

                    return displayTopics.map((topic, index) => renderTopic(topic, index));
                  })()}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Settings Modal */}
      <AnimatePresence>
        {showSettings && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSettings(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-[#1A1A1A] border border-[#333] text-white w-full max-w-sm rounded-[32px] shadow-2xl p-8 relative z-10"
            >
              <h2 className="text-3xl font-black uppercase tracking-tight mb-6">Cài đặt</h2>
              <div className="space-y-4 mb-8">
                <div 
                  className="flex items-center justify-between p-4 bg-[#222] rounded-2xl cursor-pointer active:scale-95 transition-transform"
                  onClick={() => updateSetting('soundEnabled', !progress.settings.soundEnabled)}
                >
                  <span className="font-bold text-lg">Âm thanh</span>
                  <div className={`w-12 h-6 rounded-full relative transition-colors ${progress.settings.soundEnabled ? 'bg-[#ffe36d]' : 'bg-[#444]'}`}>
                    <div className={`absolute top-0.5 w-5 h-5 bg-black rounded-full transition-all ${progress.settings.soundEnabled ? 'right-0.5' : 'left-0.5'}`} />
                  </div>
                </div>
                <div 
                  className="flex items-center justify-between p-4 bg-[#222] rounded-2xl cursor-pointer active:scale-95 transition-transform"
                  onClick={() => updateSetting('notificationsEnabled', !progress.settings.notificationsEnabled)}
                >
                  <span className="font-bold text-lg">Thông báo</span>
                  <div className={`w-12 h-6 rounded-full relative transition-colors ${progress.settings.notificationsEnabled ? 'bg-[#ffe36d]' : 'bg-[#444]'}`}>
                    <div className={`absolute top-0.5 w-5 h-5 bg-black rounded-full transition-all ${progress.settings.notificationsEnabled ? 'right-0.5' : 'left-0.5'}`} />
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setShowSettings(false)}
                className="w-full py-4 bg-[#dc2323] text-white font-black uppercase tracking-widest rounded-2xl active:scale-95 transition-transform shadow-lg"
              >
                Đóng
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Profile Modal */}
      <AnimatePresence>
        {showProfile && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowProfile(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="bg-[#1A1A1A] border border-[#333] text-white w-full max-w-sm rounded-[32px] shadow-2xl p-8 relative z-10 text-center"
            >
              <div className="w-24 h-24 bg-[#ffe36d] rounded-[40px] mx-auto mb-6 flex items-center justify-center text-5xl rotate-3 shadow-xl">
                🦊
              </div>
              <h2 className="text-3xl font-black uppercase tracking-tight mb-2">Người học mới</h2>
              <p className="font-bold text-[#ffe36d] mb-8">Học sinh chăm chỉ v4.0</p>
              
              <div className="grid grid-cols-2 gap-4 mb-8 text-left">
                <div className="bg-[#222] p-4 rounded-2xl flex flex-col items-center">
                  <Star size={24} className="text-[#dc2323] mb-2" fill="#dc2323" />
                  <p className="text-2xl font-black">{progress.stars}</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Ngôi sao</p>
                </div>
                <div className="bg-[#222] p-4 rounded-2xl flex flex-col items-center">
                  <Zap size={24} className="text-[#ffe36d] mb-2" fill="#ffe36d" />
                  <p className="text-2xl font-black">{progress.streak}</p>
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-1">Chuỗi ngày</p>
                </div>
              </div>

              <button 
                onClick={() => setShowProfile(false)}
                className="w-full py-4 bg-white text-[#111] font-black uppercase tracking-widest rounded-2xl active:scale-95 transition-transform"
              >
                Trở lại
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
