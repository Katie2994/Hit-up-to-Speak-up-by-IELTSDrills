import { useState, useEffect, useMemo } from 'react';
import { 
  ArrowLeft, PlayCircle, BrainCircuit, Type, Puzzle, Blocks, 
  Users, User, Volume2, Sparkles, Languages, Check, RefreshCw, 
  HelpCircle, Shuffle, ChevronRight, GraduationCap, Play, Pause, XCircle
} from 'lucide-react';
import { Topic, Structure, Word } from '../data/vocab';
import { motion, AnimatePresence } from 'motion/react';
import { playTTS } from '../services/tts';
import { augmentTopic } from '../utils/vocabAugmenter';
import { toPng } from 'html-to-image';

interface TopicDetailProps {
  topic: Topic;
  onBack: () => void;
  onSelectMode: (mode: string) => void;
  activeCommTab: 'dialogue' | 'structures' | 'skillsLab';
  setActiveCommTab: (tab: 'dialogue' | 'structures' | 'skillsLab') => void;
}

export function TopicDetail({ topic: rawTopic, onBack, onSelectMode, activeCommTab, setActiveCommTab }: TopicDetailProps) {
  // Always augment the rawTopic to inject the 3 schools models and guarantee 5 structures & 3 dialogues
  const topic = useMemo(() => augmentTopic(rawTopic), [rawTopic]);

  const isHowToSpeak = useMemo(() => {
    return rawTopic.subCategory?.includes('How to Speak') || rawTopic.id.startsWith('hts-');
  }, [rawTopic]);

  const isParentChild = useMemo(() => {
    return rawTopic.subCategory?.includes('Parent-Child') || rawTopic.id?.startsWith('parent-child-');
  }, [rawTopic]);

  const howToSpeakData = useMemo(() => {
    return rawTopic.howToSpeak?.[0] || null;
  }, [rawTopic]);

  // Audio recording & playback states for dialogue lines
  const [playingLineId, setPlayingLineId] = useState<string | null>(null);
  const [isAudioPaused, setIsAudioPaused] = useState<boolean>(false);

  // School filter managers, default to 'casual'
  const [activeStructureSchool, setActiveStructureSchool] = useState<'business' | 'casual' | 'superCasual'>('casual');
  const [activeDialogueSchool, setActiveDialogueSchool] = useState<'business' | 'casual' | 'superCasual'>('casual');

  // Interactive Lab tab manager
  const [activeLabDrill, setActiveLabDrill] = useState<'translation' | 'chunking' | 'intonation' | 'stress' | 'linking'>('translation');

  useEffect(() => {
    setActiveStructureSchool('casual');
    setActiveDialogueSchool('casual');
  }, [rawTopic, isParentChild]);

  useEffect(() => {
    if (isHowToSpeak) {
      if (rawTopic.id === 'hts-01') {
        setActiveLabDrill('chunking');
      } else if (rawTopic.id === 'hts-02') {
        setActiveLabDrill('intonation');
      } else if (rawTopic.id === 'hts-03') {
        setActiveLabDrill('stress');
      } else if (rawTopic.id === 'hts-04') {
        setActiveLabDrill('linking');
      }
    } else {
      setActiveLabDrill('translation');
    }
  }, [rawTopic, isHowToSpeak]);

  // Handle standard TTS with Pause and Stop controls for dialogue lines
  const speakDialogueLine = (id: string, text: string) => {
    if (!window.speechSynthesis) return;

    // Is already playing this exact line and is paused -> Resume
    if (playingLineId === id && isAudioPaused) {
      window.speechSynthesis.resume();
      setIsAudioPaused(false);
      return;
    }

    // Otherwise, cancel any ongoing speech and start over
    window.speechSynthesis.cancel();

    // Check system sound settings if enabled/disabled
    try {
      const saved = localStorage.getItem('vocabjoy_progress');
      if (saved) {
        const progress = JSON.parse(saved);
        if (progress.settings && progress.settings.soundEnabled === false) {
          return;
        }
      }
    } catch (e) {
      // ignore
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;

    utterance.onend = () => {
      setPlayingLineId(null);
      setIsAudioPaused(false);
    };

    utterance.onerror = () => {
      setPlayingLineId(null);
      setIsAudioPaused(false);
    };

    setPlayingLineId(id);
    setIsAudioPaused(false);
    window.speechSynthesis.speak(utterance);
  };

  const pauseDialogueLine = () => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.pause();
    setIsAudioPaused(true);
  };

  const stopDialogueLine = () => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    setPlayingLineId(null);
    setIsAudioPaused(false);
  };

  // Safe cancel on unmount
  useEffect(() => {
    return () => {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Revealed dialogue lines cache
  const [revealedLines, setRevealedLines] = useState<Record<string, boolean>>({});

  const toggleLine = (dIdx: string | number, lIdx: number, text: string) => {
    const key = `${dIdx}-${lIdx}`;
    setRevealedLines(prev => {
      return { ...prev, [key]: !prev[key] };
    });
  };

  const handleDownloadPNG = async (dIndex: number, title: string) => {
    const node = document.getElementById(`dialogue-card-${dIndex}`);
    if (node) {
      try {
        const dataUrl = await toPng(node, { cacheBust: true, backgroundColor: '#1A1A1A' });
        const link = document.createElement('a');
        link.download = `${title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}_${dIndex}.png`;
        link.href = dataUrl;
        link.click();
      } catch (err) {
        console.error('Failed to export PNG', err);
      }
    }
  };

  // ==========================================
  // STATIC & DYNAMIC PRACTICE DRILLS BUILDER
  // ==========================================
  
  // 1. Translation Drills (5 Questions based on topic vocabulary)
  const [transIndex, setTransIndex] = useState(0);
  const [transSelectedWords, setTransSelectedWords] = useState<string[]>([]);
  const [transFeedback, setTransFeedback] = useState<{ isCorrect: boolean; show: boolean } | null>(null);
  const [transDrills, setTransDrills] = useState<any[]>([]);

  useEffect(() => {
    const drills = topic.words.map((w) => {
      const sentenceClean = w.example
        .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?]/g, "")
        .trim();
      const wordsList = sentenceClean.split(/\s+/).filter(Boolean);
      const scrambled = [...wordsList].sort(() => Math.random() - 0.5);
      return {
        vietnamese: w.translation ? `Dịch cụm từ chứa: "${w.translation}"` : `Dịch câu ví dụ chứa: "${w.word}"`,
        vietnameseContext: w.translation ? `Nghĩa Việt: ${w.translation} (${w.word})` : `Ví dụ: ${w.word}`,
        englishSentence: w.example,
        scrambledWords: scrambled,
        correctSequence: wordsList,
        audioText: w.example,
        hint: w.example
      };
    }).slice(0, 5);
    setTransDrills(drills);
    setTransIndex(0);
    setTransSelectedWords([]);
    setTransFeedback(null);
  }, [topic]);

  const handleWordSelect = (word: string) => {
    setTransSelectedWords(prev => [...prev, word]);
    playTTS(word, 'en-US', true);
  };

  const handleWordRemove = (indexToRem: number) => {
    setTransSelectedWords(prev => prev.filter((_, idx) => idx !== indexToRem));
  };

  const checkTranslationAnswer = () => {
    if (transDrills.length === 0) return;
    const current = transDrills[transIndex];
    const userAns = transSelectedWords.join(' ').toLowerCase().replace(/[.,!?]/g, "");
    const correctAns = current.correctSequence.join(' ').toLowerCase().replace(/[.,!?]/g, "");
    
    // Allow loose checks
    const isCorrect = userAns === correctAns || correctAns.includes(userAns) && userAns.length > correctAns.length * 0.8;
    
    setTransFeedback({ isCorrect, show: true });
    if (isCorrect) {
      playTTS(current.audioText, 'en-US', true);
    }
  };

  const nextTranslationDrill = () => {
    setTransSelectedWords([]);
    setTransFeedback(null);
    setTransIndex(prev => (prev + 1) % transDrills.length);
  };

  const resetTranslationDrill = () => {
    setTransSelectedWords([]);
    setTransFeedback(null);
  };

  // 2. Chunking (Ngắt nghỉ) Drills
  const [chunkingIndex, setChunkingIndex] = useState(0);
  const [chunkingRevealed, setChunkingRevealed] = useState(false);
  const chunkingDrills = useMemo(() => {
    const speakData = rawTopic.howToSpeak?.find(h => h.type === 'chunking');
    if (speakData?.items) return speakData.items;

    // fallbacks
    return topic.words.map(w => ({
      sentence: w.example,
      translation: w.translation || '',
      chunks: [
        { text: w.example.split(' ').slice(0, Math.ceil(w.example.split(' ').length / 2)).join(' '), pause: true },
        { text: w.example.split(' ').slice(Math.ceil(w.example.split(' ').length / 2)).join(' '), pause: false }
      ]
    }));
  }, [topic, rawTopic]);

  // 3. Intonation (Lên xuống) Drills
  const [intonationIndex, setIntonationIndex] = useState(0);
  const [intonationSelected, setIntonationSelected] = useState<'rising' | 'falling' | null>(null);
  const [intonationFeedback, setIntonationFeedback] = useState<string | null>(null);

  const intonationDrills = useMemo(() => {
    const speakData = rawTopic.howToSpeak?.find(h => h.type === 'intonation');
    if (speakData?.items) {
      // Map the structure to match the drill structure
      return speakData.items.map(item => {
        const lastWordPitch = item.words?.[item.words.length - 1]?.pitch || 'falling';
        const mainPitch = item.words?.find((w: any) => w.pitch === 'rising') ? 'rising' : lastWordPitch;
        return {
          sentence: item.sentence,
          translation: item.translation,
          pitch: mainPitch === 'rising' ? 'rising' : 'falling',
          explanation: item.translation
        };
      });
    }

    // fallback general questions
    return [
      {
        sentence: "Do you like learning English?",
        translation: "Bạn có thích học tiếng Anh không?",
        pitch: "rising" as const,
        explanation: "Lên giọng ở cuối câu hỏi Có/Không (Yes/No Question) để biểu thị sự thăm dò ngữ cảnh."
      },
      {
        sentence: "Where is the international terminal?",
        translation: "Nhà ga quốc tế nằm ở hướng nào vậy?",
        pitch: "falling" as const,
        explanation: "Xuống giọng ở cuối câu hỏi lấy thông tin (Wh- question) để tạo tính dứt khoát."
      },
      {
        sentence: "I visited my hometown yesterday.",
        translation: "Mình đã về thăm quê ngày hôm qua.",
        pitch: "falling" as const,
        explanation: "Xuống giọng ở cuối câu khẳng định thường hoặc câu kể để khẳng định tính chấm dứt câu."
      }
    ];
  }, [topic, rawTopic]);

  const handleCheckIntonation = (ans: 'rising' | 'falling') => {
    setIntonationSelected(ans);
    if (!intonationDrills[intonationIndex]) return;
    const correct = intonationDrills[intonationIndex].pitch;
    if (ans === correct) {
      setIntonationFeedback("Chính xác! Quy tắc ngữ điệu: " + intonationDrills[intonationIndex].explanation);
      playTTS(intonationDrills[intonationIndex].sentence, 'en-US', true);
    } else {
      setIntonationFeedback("Chưa chính xác rồi. Hãy quan sát kỹ mục đích của câu hỏi/kể và thử suy nghĩ lại nhé!");
    }
  };

  // 4. Word Stress Drills
  const [stressIndex, setStressIndex] = useState(0);
  const [stressSelected, setStressSelected] = useState<number | null>(null);
  const [stressFeedback, setStressFeedback] = useState<string | null>(null);

  const stressDrills = useMemo(() => {
    return topic.words.map(w => {
      // Split word into syllables using regex
      let syllables = [w.word];
      const cleanWord = w.word.replace(/[^a-zA-Z]/g, '').toLowerCase();
      if (cleanWord.length > 3) {
        const regex = /[^aeiouy]*[aeiouy]+(?:[^aeiouy]*$|[^aeiouy](?=[^aeiouy]))?/gi;
        const match = w.word.match(regex);
        if (match) syllables = match;
      } else if (w.word.includes(' ')) {
        syllables = w.word.split(' ');
      }

      // Estimate correctIndex from IPA
      let correctIndex = 0;
      const parts = w.ipa.split('ˈ');
      if (parts.length >= 2) {
        const beforeStress = parts[0];
        const vowelMatches = beforeStress.match(/[aeiouæɛɪɒʊʌəɑɔɜ]/gi);
        correctIndex = vowelMatches ? vowelMatches.length : 0;
      }
      
      // Safety bound
      if (correctIndex >= syllables.length) correctIndex = syllables.length - 1;
      if (correctIndex < 0) correctIndex = 0;

      return {
        word: w.word,
        ipa: w.ipa,
        syllables: syllables,
        correctIndex: correctIndex, 
        vietnamese: w.translation || ''
      };
    });
  }, [topic]);

  const handleCheckStress = (idx: number) => {
    setStressSelected(idx);
    if (!stressDrills[stressIndex]) return;
    if (idx === stressDrills[stressIndex].correctIndex) {
      setStressFeedback("Đúng thế! Trọng âm chính được nhấn mạnh vào tiết tấu này (đọc to hơn, cao giọng hơn và ngân dài hơn một chút).");
      playTTS(stressDrills[stressIndex].word, 'en-US', true);
    } else {
      setStressFeedback("Chưa đúng chỗ. Hãy bấm nghe và cảm nhận âm tiết được nhấn mạnh nhất nhé!");
    }
  };

  // 5. Connected Speech (Nối âm) Drills
  const [linkingIndex, setLinkingIndex] = useState(0);
  const [linkingActivated, setLinkingActivated] = useState(false);

  const linkingDrills = useMemo(() => {
    const speakData = rawTopic.howToSpeak?.find(h => h.type === 'connected_speech');
    if (speakData?.items) {
      return speakData.items.map(item => {
        const linkedRepresentation = item.words?.map((w: any) => w.text + (w.linkToNext ? ' ⁀ ' : ' ')).join('').trim();
        return {
          phrase: item.sentence.split(' ').slice(0, 2).join(' '),
          sentence: item.sentence,
          linked: linkedRepresentation,
          explanation: item.translation
        };
      });
    }

    // fallback general questions
    return [
      {
        phrase: "find out",
        sentence: "I want to find out the secret.",
        linked: "fin-dout",
        explanation: "Phụ âm đuôi /d/ của 'find' nối liền với nguyên âm /aʊ/ của 'out' tạo ra 'fin-dout'."
      },
      {
        phrase: "come in",
        sentence: "Please come on in, friend!",
        linked: "co-min",
        explanation: "Phụ âm đuôi /m/ của 'come' nối sang nguyên âm /ɪ/ của 'in' tạo ra 'co-min'."
      },
      {
        phrase: "wake up",
        sentence: "We need to wake up early tomorrow.",
        linked: "way-kup",
        explanation: "Âm /k/ của 'wake' lướt mượt sang nguyên âm /ʌ/ của 'up' tạo ra phát âm 'way-kup'."
      }
    ];
  }, [topic, rawTopic]);

  // Filters dialogues strictly matching the active conversational school
  const matchingDialogues = useMemo(() => {
    if (!topic.dialogues) return [];
    const directMatches = topic.dialogues.filter((d: any) => d.school === activeDialogueSchool);
    if (directMatches.length > 0) return directMatches;
    return [topic.dialogues[0]];
  }, [topic.dialogues, activeDialogueSchool]);

  return (
    <div className="flex flex-col h-full bg-[#0D0D0D] text-white overflow-hidden relative">
      
      {/* Visual background accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#dc2323]/5 rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#ffe36d]/5 rounded-full filter blur-3xl pointer-events-none" />

      {/* Header Panel */}
      <div className="p-5 pb-5 text-white bg-[#111] border-b border-[#222] relative z-10 shrink-0 w-full flex flex-col gap-3">
        <div className="max-w-4xl mx-auto w-full flex items-center justify-between">
          <div className="flex gap-4 items-center">
            <button 
              onClick={onBack} 
              className="p-2 -ml-2 bg-[#1A1A1A] hover:bg-[#222] border border-[#333] rounded-xl transition-all text-gray-400 hover:text-white inline-flex active:scale-95"
            >
              <ArrowLeft size={20} />
            </button>
            <div className="w-12 h-12 shrink-0 rounded-2xl border border-[#333] bg-[#1A1A1A] flex items-center justify-center text-2xl shadow-sm">
              {topic.icon}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-black uppercase tracking-widest text-[#ffe36d] opacity-85">
                  {topic.category}
                </span>
                {topic.subCategory && (
                  <span className="text-[10px] bg-[#222] text-gray-400 px-2 py-0.5 rounded border border-[#333]">
                    {Array.isArray(topic.subCategory) ? topic.subCategory[0] : topic.subCategory}
                  </span>
                )}
              </div>
              <h1 className="text-xl sm:text-2xl font-black uppercase tracking-tighter text-white mt-0.5">{topic.title}</h1>
            </div>
          </div>
          
          <div className="hidden sm:flex items-center gap-2 bg-black/40 border border-[#222] px-3 py-1.5 rounded-full text-xs font-bold text-gray-300">
            <GraduationCap size={14} className="text-[#ffe36d]" /> Giáo trình thực hành
          </div>
        </div>
      </div>

      {/* Sub Category Controller (Switcher) */}
      {!topic.id.startsWith('review_') && (
        <div className="bg-[#111]/70 border-b border-[#222] px-4 py-2 sticky top-0 z-20 backdrop-blur-md">
          <div className="max-w-4xl mx-auto w-full flex justify-center gap-2">
            {isHowToSpeak ? (
              <>
                <button
                  onClick={() => setActiveCommTab('dialogue')}
                  className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all text-center ${
                    activeCommTab === 'dialogue'
                      ? 'bg-[#ffe36d] text-black shadow-md font-extrabold'
                      : 'text-gray-400 hover:text-white hover:bg-[#1A1A1A]'
                  }`}
                >
                  📖 Bài Học & Lí Thuyết
                </button>
                <button
                  onClick={() => setActiveCommTab('skillsLab')}
                  className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all text-center flex items-center justify-center gap-1.5 ${
                    activeCommTab === 'skillsLab'
                      ? 'bg-[#dc2323] text-white shadow-md font-extrabold shadow-[#dc2323]/20'
                      : 'text-[#dc2323]/90 bg-[#dc2323]/5 border border-[#dc2323]/20 hover:bg-[#dc2323]/10'
                  }`}
                >
                  ⚡ Lab Luyện Âm & Dịch <Sparkles size={13} className="animate-pulse" />
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setActiveCommTab('dialogue')}
                  className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all text-center ${
                    activeCommTab === 'dialogue'
                      ? 'bg-[#ffe36d] text-black shadow-md font-extrabold'
                      : 'text-gray-400 hover:text-white hover:bg-[#1A1A1A]'
                  }`}
                >
                  💬 Đối Thoại (3 Style)
                </button>
                <button
                  onClick={() => setActiveCommTab('structures')}
                  className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all text-center ${
                    activeCommTab === 'structures'
                      ? 'bg-[#ffe36d] text-black shadow-md font-extrabold'
                      : 'text-gray-400 hover:text-white hover:bg-[#1A1A1A]'
                  }`}
                >
                  👔 5 Cấu Trúc Đa Dạng
                </button>
                <button
                  onClick={() => setActiveCommTab('skillsLab')}
                  className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest transition-all text-center flex items-center justify-center gap-1.5 ${
                    activeCommTab === 'skillsLab'
                      ? 'bg-[#dc2323] text-white shadow-md font-extrabold shadow-[#dc2323]/20'
                      : 'text-[#dc2323]/90 bg-[#dc2323]/5 border border-[#dc2323]/20 hover:bg-[#dc2323]/10'
                  }`}
                >
                  ⚡ Lab Phát Âm & Dịch <Sparkles size={13} className="animate-pulse" />
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* Main Content Body */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 pb-24 z-0">
        <div className="max-w-4xl mx-auto w-full">
          
          <AnimatePresence mode="wait">
            
            {/* TAB 1: DIALOGUE IN 3 SCHOOLS */}
            {activeCommTab === 'dialogue' && !isHowToSpeak && !topic.id.startsWith('review_') && (
              <motion.div
                key="dialogue-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="space-y-6"
              >
                {/* Dialogue register controller */}
                <div className="bg-[#151515] p-2 rounded-[20px] border border-[#2d2d2d] flex gap-1.5 shadow-inner">
                  {(isParentChild ? (['casual', 'superCasual'] as const) : (['business', 'casual', 'superCasual'] as const)).map((school) => (
                    <button
                      key={school}
                      onClick={() => {
                        setActiveDialogueSchool(school);
                        setRevealedLines({});// reset play caching
                      }}
                      className={`flex-1 py-3 px-3 rounded-xl text-[11px] sm:text-xs font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${
                        activeDialogueSchool === school
                          ? 'bg-[#ffe36d] text-black font-extrabold shadow-md'
                          : 'text-gray-400 hover:text-white hover:bg-[#222]'
                      }`}
                    >
                      {school === 'business' && '👔 Business Line'}
                      {school === 'casual' && '💬 Casual Standard'}
                      {school === 'superCasual' && '⚡ Super Casual'}
                    </button>
                  ))}
                </div>

                <div className="space-y-6">
                  {matchingDialogues.length > 0 ? (
                    matchingDialogues.map((dialogue: any, dIndex: number) => {
                      return (
                        <div key={dIndex} id={`dialogue-card-${dIndex}`} className="bg-[#1A1A1A] border border-[#2d2d2d] rounded-[32px] overflow-hidden shadow-lg mb-6">
                          <div className="p-5 border-b border-[#2d2d2d] bg-gradient-to-r from-red-600/10 via-transparent to-transparent flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                            <div className="flex items-center gap-2.5">
                              <span className="w-2.5 h-2.5 rounded-full bg-[#dc2323] animate-pulse"></span>
                              <h4 className="font-black text-white tracking-tight uppercase text-sm">
                                {dialogue.title}
                              </h4>
                            </div>
                            <div className="flex items-center gap-2">
                              <button 
                                onClick={() => handleDownloadPNG(dIndex, dialogue.title)} 
                                className="text-[10px] font-black uppercase tracking-widest bg-[#222] hover:bg-[#333] border border-[#444] px-3 py-1 rounded-full text-gray-300 transition-colors flex items-center gap-1"
                                title="Download PNG"
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16"><path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5"/><path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/></svg>
                                <span>PNG</span>
                              </button>
                              <span className="text-[10px] font-black uppercase tracking-widest bg-[#222] border border-[#444] px-3 py-1 rounded-full text-gray-300">
                                {activeDialogueSchool} MODE {matchingDialogues.length > 1 ? `#${dIndex + 1}` : ''}
                              </span>
                            </div>
                          </div>

                          <div className="p-6 space-y-6">
                            
                            {/* Participants list */}
                            <div className="flex flex-wrap gap-3 pb-5 border-b border-[#333] border-dashed">
                              {dialogue.participants.map((p: any, idx: number) => (
                                <div key={idx} className="flex items-center gap-2 bg-[#222] border border-[#333] px-3 py-1.5 rounded-full text-xs font-bold">
                                  <img src={p.avatar} alt={p.name} className="w-6 h-6 rounded-full bg-black/40 border border-[#444]" referrerPolicy="no-referrer" />
                                  <div>
                                    <p className="text-[10px] font-black text-white leading-none">{p.name}</p>
                                    {p.role && <p className="text-[8px] text-gray-500 font-bold uppercase mt-0.5">{p.role}</p>}
                                  </div>
                                </div>
                              ))}
                            </div>

                            {/* Speech list bubbles */}
                            <div className="space-y-4">
                              {dialogue.lines.map((line: any, lIdx: number) => {
                                const participant = dialogue.participants.find((p: any) => p.name === line.participant);
                                const isEven = lIdx % 2 === 0;
                                const isRevealed = revealedLines[`${activeDialogueSchool}-${dIndex}-${lIdx}`];

                                return (
                                  <div key={lIdx} className={`flex gap-3 items-start ${isEven ? 'flex-row' : 'flex-row-reverse'}`}>
                                    <img 
                                      src={participant?.avatar} 
                                      alt={line.participant} 
                                      className="w-10 h-10 rounded-xl border border-[#333] shrink-0 bg-[#222]" 
                                      referrerPolicy="no-referrer"
                                    />
                                    <div className={`flex flex-col ${isEven ? 'items-start' : 'items-end'} max-w-[80%] gap-1`}>
                                      <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">
                                        {line.participant}
                                      </span>
                                      <div
                                        onClick={() => toggleLine(`${activeDialogueSchool}-${dIndex}`, lIdx, line.text)}
                                        className={`p-4 sm:p-5 border text-left transition-all cursor-pointer relative group/bubble ${
                                          isRevealed 
                                            ? (isEven 
                                                ? 'bg-gradient-to-br from-[#1E1E1E] to-[#252525] border-[#444] text-white rounded-[24px] rounded-tl-none ring-1 ring-white/5 shadow-md' 
                                                : 'bg-gradient-to-br from-[#dc2323] to-[#b31414] border-[#e03a3a] text-white rounded-[24px] rounded-tr-none hover:brightness-110 shadow-lg shadow-red-950/20')
                                            : 'bg-[#151515]/90 border-[#2b2b2b] hover:border-[#ffe36d]/50 hover:bg-[#1A1A1A] text-gray-400 rounded-[20px] transition-all duration-200'
                                        }`}
                                      >
                                        {!isRevealed ? (
                                          <div className="flex items-center gap-3">
                                            <div className="w-8 h-8 rounded-full bg-[#222] border border-[#333] flex items-center justify-center text-[#ffe36d] group-hover/bubble:bg-[#ffe36d] group-hover/bubble:text-black transition-colors shrink-0">
                                              <Volume2 size={14} className="animate-pulse" />
                                            </div>
                                            <div>
                                              <p className="text-xs font-black uppercase tracking-widest text-[#ffe36d]">Bấm Để Hiện Hội Thoại</p>
                                              <p className="text-[10px] text-gray-500 font-bold mt-0.5">Click to reveal dialogue & translate</p>
                                            </div>
                                            <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover/bubble:opacity-100 transition-all text-[9px] font-black uppercase bg-[#ffe36d]/10 border border-[#ffe36d]/20 px-2 py-0.5 rounded-md text-[#ffe36d] tracking-widest">TAP ⚡</span>
                                          </div>
                                        ) : (
                                          <div className="space-y-2">
                                            <div className="flex items-center justify-between gap-4 border-b border-white/5 pb-1.5 opacity-90 transition-opacity">
                                              <span className="text-[10px] font-bold tracking-widest uppercase text-white/40">Dialogue Text</span>
                                              
                                              {/* Audio Player Controllers */}
                                              <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
                                                {playingLineId === `${activeDialogueSchool}-${dIndex}-${lIdx}` ? (
                                                  <div className="flex items-center gap-1.5">
                                                    {!isAudioPaused ? (
                                                      <button
                                                        onClick={() => pauseDialogueLine()}
                                                        className="flex items-center gap-1 px-2.5 py-1 bg-[#ffe36d] hover:bg-[#ebd05c] text-black text-[10px] font-black uppercase tracking-wider rounded-lg transition-all active:scale-95 shadow-md border border-[#ffe36d]"
                                                      >
                                                        <Pause size={10} className="fill-black" /> Tạm dừng
                                                      </button>
                                                    ) : (
                                                      <button
                                                        onClick={() => speakDialogueLine(`${activeDialogueSchool}-${dIndex}-${lIdx}`, line.text)}
                                                        className="flex items-center gap-1 px-2.5 py-1 bg-gradient-to-r from-emerald-500 to-green-600 hover:brightness-110 text-white text-[10px] font-black uppercase tracking-wider rounded-lg transition-all active:scale-95 shadow-md"
                                                      >
                                                        <Play size={10} className="fill-white" /> Tiếp tục
                                                      </button>
                                                    )}
                                                    <button
                                                      onClick={() => stopDialogueLine()}
                                                      className="p-1 px-2 text-rose-400 hover:text-rose-300 hover:bg-rose-500/10 rounded-lg transition-colors text-[10px] font-black uppercase tracking-widest flex items-center gap-1"
                                                    >
                                                      <XCircle size={11} /> Tắt
                                                    </button>
                                                  </div>
                                                ) : (
                                                  <button
                                                    onClick={() => speakDialogueLine(`${activeDialogueSchool}-${dIndex}-${lIdx}`, line.text)}
                                                    className="flex items-center gap-1 px-2.5 py-1 bg-white hover:bg-gray-100 text-black text-[10px] font-black uppercase tracking-wider rounded-lg transition-all active:scale-95 shadow-md"
                                                  >
                                                    <Play size={10} className="fill-black" /> Phát âm
                                                  </button>
                                                )}
                                              </div>
                                            </div>
                                            <p className="font-extrabold text-sm sm:text-base text-white leading-relaxed tracking-wide select-text">{line.text}</p>
                                            {line.translation && (
                                              <div className="pt-2 border-t border-white/10 mt-2">
                                                <span className="text-[9px] font-black uppercase tracking-wider text-[#ffe36d] block mb-0.5 opacity-90">Ý nghĩa:</span>
                                                <p className="text-xs sm:text-sm font-black text-[#ffe36d] leading-relaxed select-text">
                                                  {line.translation}
                                                </p>
                                              </div>
                                            )}
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                );
                              })}
                            </div>

                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <div className="bg-[#1A1A1A] border border-[#2d2d2d] rounded-[32px] p-12 text-center text-gray-400">
                      Không có đoạn đối thoại nào sẵn có.
                    </div>
                  )}
                </div>
              </motion.div>
            )}

            {/* TAB 1 FOR HOW TO SPEAK (PRONUNCIATION LESSON) */}
            {activeCommTab === 'dialogue' && isHowToSpeak && howToSpeakData && !topic.id.startsWith('review_') && (
               <motion.div
                 key="how-to-speak-lesson-tab"
                 initial={{ opacity: 0, y: 15 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -15 }}
                 className="space-y-8"
               >
                 {/* Theory Overview Card */}
                 <div className="bg-gradient-to-br from-[#1c1212] to-[#111] border border-[#ff4e4e]/15 hover:border-[#ff4e4e]/30 rounded-[32px] p-6 sm:p-8 shadow-xl relative overflow-hidden text-left transition-all duration-300">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-radial from-[#dc2323]/5 to-transparent rounded-full filter blur-xl pointer-events-none" />
                    
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-[#ffe36d] to-[#c69a0d] rounded-2xl flex items-center justify-center text-xl shadow-lg shrink-0">
                         ⭐
                      </div>
                      <div>
                         <span className="text-[10px] font-black uppercase tracking-widest text-[#ffe36d]">Acoustic Concept Definition</span>
                         <h3 className="text-xl font-extrabold text-white uppercase tracking-tight">{howToSpeakData.title}</h3>
                      </div>
                    </div>

                    <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mb-2">Nguyên lý cốt lõi:</p>
                    <p className="text-gray-300 text-sm sm:text-base font-medium leading-relaxed bg-black/30 border border-[#2d2d2d] p-5 rounded-2xl italic">
                       "{howToSpeakData.theory}"
                    </p>

                    <div className="mt-4 flex items-center gap-2 text-[11px] font-black uppercase text-[#ffe36d] tracking-widest bg-black/20 self-start px-3 py-1 rounded-full border border-[#ffe36d]/10">
                       <Sparkles size={12} className="animate-spin" /> {howToSpeakData.description}
                    </div>
                 </div>

                 {/* 10 Interactive Sentence Items */}
                 <div className="space-y-4">
                    <h3 className="text-lg font-black uppercase tracking-widest text-gray-400 px-1 flex items-center gap-2">
                       <span className="w-2.5 h-2.5 rounded-full bg-[#ffe36d]"></span>
                       10 Bài học thực hành ngữ âm
                    </h3>

                    <div className="grid grid-cols-1 gap-4">
                       {howToSpeakData.items.map((item: any, idx: number) => (
                          <div 
                            key={idx}
                            className="bg-[#1A1A1A] border border-[#2d2d2d] hover:border-[#ffe36d]/50 p-6 rounded-[28px] shadow-md transition-all flex flex-col gap-4 text-left relative overflow-hidden group"
                          >
                            {/* Accent backdrop marker */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white/5 to-transparent rounded-bl-full pointer-events-none" />
                            
                            <div className="flex items-center justify-between">
                              <span className="text-[10px] bg-[#222]/80 border border-[#333] font-black text-gray-400 uppercase tracking-widest px-3 py-1 rounded-full">
                                Bài tập {idx + 1}/10
                              </span>
                              <button
                                onClick={() => playTTS(item.sentence)}
                                className="flex items-center gap-1.5 px-3 py-1 bg-white hover:bg-gray-100 text-black text-[10px] font-black uppercase tracking-wider rounded-xl transition-all shadow-sm active:scale-95"
                              >
                                <Volume2 size={12} /> Nghe Toàn Câu
                              </button>
                            </div>

                            {/* Custom rendering based on pronunciation type */}
                            
                            {/* CHUNKING VIEW */}
                            {howToSpeakData.type === 'chunking' && (
                              <div className="flex flex-wrap items-center gap-y-3 gap-x-2.5 bg-black/30 border border-[#222] p-4 rounded-2xl min-h-[72px]">
                                {item.chunks?.map((chk: any, cIdx: number) => (
                                  <div key={cIdx} className="flex items-center">
                                    <button
                                      onClick={() => playTTS(chk.text)}
                                      className="font-black text-sm sm:text-base px-4 py-2 bg-[#222] hover:bg-[#333] hover:border-[#ffe36d] border border-[#333] rounded-xl text-white transition-all active:scale-95"
                                    >
                                      {chk.text}
                                    </button>
                                    {chk.pause && (
                                      <span className="text-red-500 text-2xl font-black mx-2 select-none" title="Ngắt nghỉ hơi ở đây">/</span >
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* INTONATION VIEW */}
                            {howToSpeakData.type === 'intonation' && (
                              <div className="flex flex-wrap items-center gap-y-3 gap-x-2 bg-black/30 border border-[#222] p-4 rounded-2xl min-h-[72px]">
                                {item.words?.map((wordObj: any, wIdx: number) => {
                                  const isRising = wordObj.pitch === 'rising';
                                  const isFalling = wordObj.pitch === 'falling';
                                  return (
                                    <button
                                      key={wIdx}
                                      onClick={() => playTTS(wordObj.text)}
                                      className={`font-black text-sm sm:text-base px-3.5 py-1.5 rounded-xl border transition-all active:scale-95 flex items-center gap-1 ${
                                        isRising 
                                          ? 'bg-[#ffe36d]/10 border-[#ffe36d]/50 text-[#ffe36d]' 
                                          : isFalling 
                                            ? 'bg-red-500/10 border-red-500/50 text-[#ff4c4c]' 
                                            : 'bg-[#222] border-[#333] text-white hover:border-gray-500'
                                      }`}
                                    >
                                      {wordObj.text}
                                      {isRising && <span className="text-xs font-bold text-amber-400">↗️</span>}
                                      {isFalling && <span className="text-xs font-bold text-red-400">↘️</span>}
                                    </button>
                                  );
                                })}
                              </div>
                            )}

                            {/* STRESS VIEW */}
                            {howToSpeakData.type === 'stress' && (
                              <div className="flex flex-wrap items-center gap-y-3 gap-x-2 bg-black/30 border border-[#222] p-4 rounded-2xl min-h-[72px]">
                                {item.words?.map((wordObj: any, wIdx: number) => {
                                  const isStressed = wordObj.stress;
                                  return (
                                    <button
                                      key={wIdx}
                                      onClick={() => playTTS(wordObj.text)}
                                      className={`font-black text-sm sm:text-base px-4 py-2 rounded-xl transition-all active:scale-95 flex items-center gap-1 ${
                                        isStressed 
                                          ? 'bg-gradient-to-r from-[#ffe36d] to-[#e4c95d] text-black border-2 border-black font-extrabold shadow-md' 
                                          : 'bg-[#222] border border-[#333] text-white hover:border-gray-500'
                                      }`}
                                    >
                                      {wordObj.text}
                                      {isStressed && <span className="text-[10px] bg-black/20 p-0.5 rounded-md">🎯</span>}
                                    </button>
                                  );
                                })}
                              </div>
                            )}

                            {/* CONNECTED SPEECH VIEW */}
                            {howToSpeakData.type === 'connected_speech' && (
                              <div className="flex flex-wrap items-center gap-y-3 gap-x-1.5 bg-black/30 border border-[#222] p-4 rounded-2xl min-h-[72px]">
                                {item.words?.map((wordObj: any, wIdx: number) => {
                                  const linked = wordObj.linkToNext;
                                  return (
                                    <div key={wIdx} className="flex items-center">
                                      <button
                                        onClick={() => playTTS(wordObj.text)}
                                        className={`font-black text-sm sm:text-base px-3.5 py-1.5 bg-[#222] border border-[#333] rounded-xl text-white hover:border-gray-500 transition-all active:scale-95`}
                                      >
                                        {wordObj.text}
                                      </button>
                                      {linked && (
                                        <span className="text-[#ffe36d] text-xl font-bold mx-1 select-none animate-pulse" title="Nối liên âm">⁀</span>
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            )}

                            {/* Translation Description underneath */}
                            <div className="pl-4 border-l-2 border-[#ffe36d]/40 bg-[#1C1C1C] text-left p-3 rounded-r-xl">
                               <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-0.5">Chú Thích & Ý Nghĩa:</p>
                               <span className="text-sm font-bold text-white">{item.translation}</span>
                            </div>
                          </div>
                       ))}
                    </div>
                 </div>
               </motion.div>
            )}

            {/* TAB 2: SENTENCE STRUCTURES IN 3 SCHOOLS */}
            {activeCommTab === 'structures' && !isHowToSpeak && !topic.id.startsWith('review_') && (
              <motion.div
                key="structures-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                className="space-y-6"
              >
                {/* Structure register controller switcher */}
                <div className="bg-[#151515] p-2 rounded-[20px] border border-[#2d2d2d] flex gap-1.5 shadow-inner">
                  {(isParentChild ? (['casual', 'superCasual'] as const) : (['business', 'casual', 'superCasual'] as const)).map((school) => (
                    <button
                      key={school}
                      onClick={() => setActiveStructureSchool(school)}
                      className={`flex-1 py-3 px-3 rounded-xl text-[11px] sm:text-xs font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 ${
                        activeStructureSchool === school
                          ? 'bg-[#ffe36d] text-black font-extrabold shadow-md'
                          : 'text-gray-400 hover:text-white hover:bg-[#222]'
                      }`}
                    >
                      {school === 'business' && '👔 Business Context'}
                      {school === 'casual' && '💬 Casual Speaking'}
                      {school === 'superCasual' && '⚡ Super Casual'}
                    </button>
                  ))}
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {topic.structures && topic.structures.length > 0 ? (
                    topic.structures.map((struct, idx) => {
                      // Extract register version
                      const schoolData = 
                        activeStructureSchool === 'business' ? struct.business :
                        activeStructureSchool === 'superCasual' ? struct.superCasual : 
                        struct.casualStyle || (struct.casual ? { phrase: struct.casual, example: struct.phrase, translation: struct.vietnamese } : null);

                      const finalPhrase = schoolData?.phrase || struct.phrase;
                      const finalExample = schoolData?.example || struct.phrase;
                      const finalTranslation = schoolData?.translation || struct.vietnamese;

                      return (
                        <div 
                          key={idx} 
                          className="bg-[#1A1A1A] border border-[#2d2d2d] p-5 rounded-[24px] shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-[#ffe36d] transition-all"
                        >
                          <div className="flex-1 space-y-2">
                            <div className="flex items-center gap-2">
                              <span className="inline-flex w-5 h-5 bg-[#ffe36d]/10 text-[#ffe36d] items-center justify-center rounded-full text-xs font-black">
                                {idx + 1}
                              </span>
                              <p className="text-sm font-bold text-gray-400 uppercase tracking-widest">
                                {struct.meaning}
                              </p>
                            </div>
                            
                            <h3 className="text-xl font-black text-white hover:text-[#ffe36d] transition-colors">{finalPhrase}</h3>
                            
                            <div className="pl-4 border-l-2 border-[#ffe36d]/30 bg-black/20 p-2.5 rounded-r-xl">
                              <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">Ví dụ thực tế:</p>
                              <p className="text-sm font-black text-white">{finalExample}</p>
                              <p className="text-xs font-bold text-[#ffe36d] mt-1">{finalTranslation}</p>
                            </div>

                            <p className="text-xs text-gray-400 font-bold italic pt-1">Gốc: {struct.phrase} (Ý: {struct.vietnamese})</p>
                          </div>

                          <button 
                            onClick={() => playTTS(finalExample)}
                            className="p-3 rounded-xl bg-[#222] text-[#ffe36d] border border-transparent hover:border-[#ffe36d] hover:bg-[#ffe36d] hover:text-[#111] transition-all shadow-md shrink-0 self-end md:self-center active:scale-90"
                          >
                            <Volume2 size={20} />
                          </button>
                        </div>
                      );
                    })
                  ) : (
                    <div className="p-12 text-center text-gray-400">Không có cấu trúc nào.</div>
                  )}
                </div>
              </motion.div>
            )}

            {/* TAB 3: INTEGRATED SKILLS LAB */}
            {activeCommTab === 'skillsLab' && !topic.id.startsWith('review_') && (
              <motion.div
                key="skills-lab-tab"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                className="space-y-6"
              >
                {/* Lab Inner category selector */}
                <div className="flex flex-wrap bg-[#151515] p-1.5 rounded-[20px] border border-[#2d2d2d] gap-1 shadow-inner">
                  {/* Dịch cụm is always enabled for all lessons! */}
                  <button
                    onClick={() => setActiveLabDrill('translation')}
                    className={`flex-1 py-2 px-3 rounded-lg text-[10px] sm:text-xs font-black uppercase tracking-widest transition-all ${
                      activeLabDrill === 'translation' ? 'bg-[#dc2323] text-white shadow-md' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    🧩 Dịch Cụm
                  </button>

                  {/* Chunking button */}
                  {(!isHowToSpeak || rawTopic.id === 'hts-01') && (
                    <button
                      onClick={() => setActiveLabDrill('chunking')}
                      className={`flex-1 py-2 px-3 rounded-lg text-[10px] sm:text-xs font-black uppercase tracking-widest transition-all ${
                        activeLabDrill === 'chunking' ? 'bg-[#dc2323] text-white shadow-md' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      ✂️ Chunking
                    </button>
                  )}

                  {/* Intonation button */}
                  {(!isHowToSpeak || rawTopic.id === 'hts-02') && (
                    <button
                      onClick={() => setActiveLabDrill('intonation')}
                      className={`flex-1 py-2 px-3 rounded-lg text-[10px] sm:text-xs font-black uppercase tracking-widest transition-all ${
                        activeLabDrill === 'intonation' ? 'bg-[#dc2323] text-white shadow-md' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      🎢 Intonation
                    </button>
                  )}

                  {/* Stress button */}
                  {(!isHowToSpeak || rawTopic.id === 'hts-03') && (
                    <button
                      onClick={() => setActiveLabDrill('stress')}
                      className={`flex-1 py-2 px-3 rounded-lg text-[10px] sm:text-xs font-black uppercase tracking-widest transition-all ${
                        activeLabDrill === 'stress' ? 'bg-[#dc2323] text-white shadow-md' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      🔨 Stress
                    </button>
                  )}

                  {/* Linking button */}
                  {(!isHowToSpeak || rawTopic.id === 'hts-04') && (
                    <button
                      onClick={() => setActiveLabDrill('linking')}
                      className={`flex-1 py-2 px-3 rounded-lg text-[10px] sm:text-xs font-black uppercase tracking-widest transition-all ${
                        activeLabDrill === 'linking' ? 'bg-[#dc2323] text-white shadow-md' : 'text-gray-400 hover:text-white'
                      }`}
                    >
                      🔗 Nối Âm
                    </button>
                  )}
                </div>

                {/* Sub Module 1: Chunk-by-chunk Translation */}
                {activeLabDrill === 'translation' && transDrills.length > 0 && (
                  <div className="bg-[#1A1A1A] border-2 border-[#dc2323]/20 p-6 rounded-[32px] space-y-6">
                    <div className="flex justify-between items-center pb-3 border-b border-[#2d2d2d]">
                      <h3 className="text-base font-black text-white uppercase tracking-wider flex items-center gap-2">
                        <span>🧩</span> Luyện Dịch Cụm Từ Vựng
                      </h3>
                      <div className="text-xs font-black uppercase tracking-widest text-gray-400 bg-black/40 px-3 py-1.5 rounded-full border border-[#2d2d2d]">
                        Câu {transIndex + 1}/{transDrills.length}
                      </div>
                    </div>

                    <div className="p-4 bg-red-600/5 border border-red-500/10 rounded-2xl">
                      <p className="text-lg font-black text-[#ffe36d] leading-snug">
                        {transDrills[transIndex].vietnamese}
                      </p>
                      <p className="text-xs font-bold text-gray-400 mt-1 uppercase tracking-widest">
                        {transDrills[transIndex].vietnameseContext}
                      </p>
                    </div>

                    {/* Word Assemble board */}
                    <div className="p-4 bg-black/50 border border-[#333] rounded-2xl min-h-[80px] flex flex-wrap gap-2 items-center justify-center">
                      {transSelectedWords.length === 0 ? (
                        <p className="text-xs font-bold uppercase tracking-wider text-gray-600 italic">Chọn các từ bên dưới theo thứ tự chính xác</p>
                      ) : (
                        transSelectedWords.map((word, wIdx) => {
                          const correctWord = transDrills[transIndex]?.correctSequence[wIdx];
                          const isCorrectPos = correctWord && word.toLowerCase().replace(/[.,!?]/g, "").trim() === correctWord.toLowerCase().replace(/[.,!?]/g, "").trim();
                          
                          return (
                            <motion.button
                              key={`${wIdx}-${word}`}
                              initial={{ scale: 0.8, opacity: 0, y: 8 }}
                              animate={{ 
                                scale: isCorrectPos ? [0.9, 1.15, 1] : 1, 
                                opacity: 1, 
                                y: 0 
                              }}
                              transition={{ duration: 0.25 }}
                              onClick={() => handleWordRemove(wIdx)}
                              className={`font-black text-sm px-3.5 py-1.5 rounded-xl flex items-center gap-1.5 transition-all shadow-md border ${
                                isCorrectPos 
                                  ? 'bg-[#1b4332] border-[#2d6a4f] text-[#d8f3dc] shadow-[0_0_12px_rgba(16,185,129,0.15)]' 
                                  : 'bg-white text-black border-transparent hover:bg-rose-50 hover:text-rose-600'
                              }`}
                            >
                              {isCorrectPos && <span className="text-xs text-[#6af29f]">✓</span>}
                              {word} <span className="text-[10px] font-bold opacity-60">×</span>
                            </motion.button>
                          );
                        })
                      )}
                    </div>

                    {/* Scrambled source choices */}
                    <div className="flex flex-wrap gap-2 justify-center py-2">
                      {transDrills[transIndex].scrambledWords.map((word: string, wIdx: number) => {
                        const isUsed = transSelectedWords.includes(word);
                        return (
                          <button
                            key={wIdx}
                            disabled={isUsed}
                            onClick={() => handleWordSelect(word)}
                            className={`px-4 py-2.5 rounded-xl font-bold text-sm border-2 transition-all active:scale-95 ${
                              isUsed 
                                ? 'bg-black/30 border-[#2d2d2d] text-gray-600 opacity-30 cursor-not-allowed'
                                : 'bg-[#222] border-[#333] hover:border-[#ffe36d] text-white hover:text-[#ffe36d]'
                            }`}
                          >
                            {word}
                          </button>
                        );
                      })}
                    </div>

                    {/* Feedbacks and buttons */}
                    {transFeedback && (
                      <div className={`p-4 rounded-2xl text-center font-bold text-sm ${
                        transFeedback.isCorrect 
                           ? 'bg-emerald-500/10 border border-emerald-500/20 text-[#4ECDC4]'
                           : 'bg-rose-500/10 border border-rose-500/20 text-rose-400'
                      }`}>
                        {transFeedback.isCorrect ? (
                          <p className="flex items-center justify-center gap-2 text-base font-black uppercase tracking-wider">
                            <Check size={20} /> CHÍNH XÁC! Tuyệt vời
                          </p>
                        ) : (
                          <p>Chưa khớp hoàn toàn. Hãy bấm nút làm lại bên dưới để thử lắp lại nhé!</p>
                        )}
                      </div>
                    )}

                    <div className="flex gap-3 justify-center">
                      <button
                        onClick={resetTranslationDrill}
                        className="flex items-center gap-2 px-5 py-3.5 bg-[#222] hover:bg-[#333] text-gray-300 font-bold uppercase tracking-widest text-xs rounded-xl border border-[#444] transition-all active:scale-95"
                      >
                        <RefreshCw size={14} /> Làm Lại
                      </button>

                      {!transFeedback?.isCorrect ? (
                        <button
                          onClick={checkTranslationAnswer}
                          disabled={transSelectedWords.length === 0}
                          className="flex items-center gap-2 px-8 py-3.5 bg-[#ffe36d] text-black hover:bg-[#ebd05a] disabled:opacity-40 disabled:pointer-events-none font-black uppercase tracking-widest text-xs rounded-xl transition-all active:scale-95"
                        >
                          Xác Nhận ⚡
                        </button>
                      ) : (
                        <button
                          onClick={nextTranslationDrill}
                          className="flex items-center gap-2 px-8 py-3.5 bg-emerald-500 hover:bg-emerald-600 text-white font-black uppercase tracking-widest text-xs rounded-xl transition-all active:scale-95"
                        >
                          Tiếp Tục <ChevronRight size={14} />
                        </button>
                      )}
                    </div>
                  </div>
                )}

                {/* Sub Module 2: Chunking (Ngắt nghỉ) */}
                {activeLabDrill === 'chunking' && chunkingDrills.length > 0 && (
                  <div className="bg-[#1A1A1A] border-2 border-[#dc2323]/20 p-6 rounded-[32px] space-y-6">
                    <div className="flex justify-between items-center pb-3 border-b border-[#2d2d2d]">
                      <h3 className="text-base font-black text-white uppercase tracking-wider flex items-center gap-2">
                        <span>✂️</span> Luyện Cụm Diễn Đạt & Ngắt Nghỉ
                      </h3>
                      <div className="text-xs font-black tracking-widest uppercase text-gray-400 bg-black/40 px-3 py-1.5 rounded-full border border-[#2d2d2d]">
                        Bài {chunkingIndex + 1}/{chunkingDrills.length}
                      </div>
                    </div>

                    <div className="text-center space-y-2">
                      <p className="text-xs uppercase font-black tracking-widest text-[#dc2323]">Ý nghĩa hoàn cảnh:</p>
                      <p className="text-lg font-black text-[#ffe36d]">{chunkingDrills[chunkingIndex].translation}</p>
                    </div>

                    {/* Interaction timing chunks render */}
                    <div className="p-8 border-2 border-dashed border-[#333] rounded-[24px] bg-black/35 flex flex-wrap justify-center items-center gap-y-6 gap-x-3 my-4">
                      {chunkingDrills[chunkingIndex].chunks?.map((chk: any, cIdx: number) => (
                        <div key={cIdx} className="flex items-center">
                          <button
                            onClick={() => playTTS(chk.text, 'en-US', true)}
                            className={`font-black text-base px-5 py-3 border-2 transition-all active:translate-y-1 ${
                              chunkingRevealed 
                                ? 'bg-[#ffe36d] text-black border-black shadow-[3px_3px_0_0_rgba(255,227,109,0.3)]' 
                                : 'bg-[#222] text-white border-[#444] hover:border-gray-400'
                            }`}
                          >
                            {chk.text}
                          </button>
                          {chk.pause && (
                            <span className="text-[#dc2323] text-4xl font-extrabold mx-3 tracking-tighter bg-red-600/10 px-2 rounded-lg animate-pulse">/</span>
                          )}
                        </div>
                      ))}
                    </div>

                    <p className="text-xs font-bold text-gray-400 text-center uppercase tracking-widest leading-relaxed">
                      {!chunkingRevealed 
                        ? 'Hãy suy ngẫm vị trí nên ngừng lại nghỉ hơi, bấm "Hiện kết quả" để xem /.'
                        : 'Xem mẫu ngắt nghỉ! Phụ âm đuôi cuối cụm từ ngắt nhẹ giúp giọng nói mạch lạc.'}
                    </p>

                    <div className="flex gap-3 justify-center">
                      <button
                        onClick={() => {
                          setChunkingRevealed(!chunkingRevealed);
                          if (!chunkingRevealed) {
                            playTTS(chunkingDrills[chunkingIndex].chunks?.map((c: any) => c.text).join(' ') || '', 'en-US', true);
                          }
                        }}
                        className="px-6 py-3.5 bg-white text-black font-black uppercase tracking-widest text-xs rounded-xl active:scale-95 transition-all flex items-center gap-2 leading-none"
                      >
                        {chunkingRevealed ? 'Ẩn Kết Quả' : 'Hiện Kết Quả 👁️'}
                      </button>

                      <button
                        onClick={() => {
                          setChunkingRevealed(false);
                          setChunkingIndex(prev => (prev + 1) % chunkingDrills.length);
                        }}
                        className="px-6 py-3.5 bg-[#222] hover:bg-[#333] text-gray-300 font-bold uppercase tracking-widest text-xs rounded-xl active:scale-95 transition-all border border-[#444]"
                      >
                        Bài Tiếp Theo
                      </button>
                    </div>
                  </div>
                )}

                {/* Sub Module 3: Intonation (Lên xuống giọng) */}
                {activeLabDrill === 'intonation' && (
                  <div className="bg-[#1A1A1A] border-2 border-[#dc2323]/20 p-6 rounded-[32px] space-y-6">
                    <div className="flex justify-between items-center pb-3 border-b border-[#2d2d2d]">
                      <h3 className="text-base font-black text-white uppercase tracking-wider flex items-center gap-2">
                        <span>🎢</span> Kiểm Tra Ngữ Điệu Lên/Xuống
                      </h3>
                      <div className="text-xs font-black tracking-widest uppercase text-gray-400 bg-black/40 px-3 py-1.5 rounded-full border border-[#2d2d2d]">
                        Câu {intonationIndex + 1}/{intonationDrills.length}
                      </div>
                    </div>

                    <div className="p-5 bg-[#222] border border-[#333] rounded-[24px] text-center space-y-1">
                      <p className="text-[#ffe36d] font-black text-xl italic font-mono">
                        "{intonationDrills[intonationIndex].sentence}"
                      </p>
                      <p className="text-xs text-gray-400 font-bold">Ý dịch: {intonationDrills[intonationIndex].translation}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <button
                        onClick={() => handleCheckIntonation('rising')}
                        className={`p-5 rounded-[24px] border-2 flex flex-col items-center justify-center gap-2 transition-all active:scale-95 ${
                          intonationSelected === 'rising' 
                            ? 'bg-[#ffe36d]/10 border-[#ffe36d] text-[#ffe36d]'
                            : 'bg-[#222] border-[#333] hover:border-gray-500'
                        }`}
                      >
                        <span className="text-3xl">↗️</span>
                        <span className="font-black uppercase tracking-wider text-xs">Lên Giọng (Rising)</span>
                      </button>

                      <button
                        onClick={() => handleCheckIntonation('falling')}
                        className={`p-5 rounded-[24px] border-2 flex flex-col items-center justify-center gap-2 transition-all active:scale-95 ${
                          intonationSelected === 'falling' 
                            ? 'bg-[#ffe36d]/10 border-[#ffe36d] text-[#ffe36d]'
                            : 'bg-[#222] border-[#333] hover:border-gray-500'
                        }`}
                      >
                        <span className="text-3xl">↘️</span>
                        <span className="font-black uppercase tracking-wider text-xs">Xuống Giọng (Falling)</span>
                      </button>
                    </div>

                    {intonationFeedback && (
                      <div className="p-4 bg-black/40 border border-[#333] rounded-2xl text-center text-sm font-bold leading-relaxed text-[#ffe36d]">
                        {intonationFeedback}
                      </div>
                    )}

                    <div className="flex justify-center">
                      <button
                        onClick={() => {
                          setIntonationSelected(null);
                          setIntonationFeedback(null);
                          setIntonationIndex(prev => (prev + 1) % intonationDrills.length);
                        }}
                        className="px-6 py-3.5 bg-[#222] hover:bg-[#333] font-bold text-gray-300 uppercase tracking-widest text-xs rounded-xl border border-[#444] active:scale-95 transition-all"
                      >
                        Câu Hỏi Kế Tiếp
                      </button>
                    </div>
                  </div>
                )}

                {/* Sub Module 4: Word Stress (Trọng âm từ) */}
                {activeLabDrill === 'stress' && stressDrills.length > 0 && (
                  <div className="bg-[#1A1A1A] border-2 border-[#dc2323]/20 p-6 rounded-[32px] space-y-6">
                    <div className="flex justify-between items-center pb-3 border-b border-[#2d2d2d]">
                      <h3 className="text-base font-black text-white uppercase tracking-wider flex items-center gap-2">
                        <span>🔨</span> Thử Thách Nhấn Trọng Âm
                      </h3>
                      <div className="text-xs font-black tracking-widest uppercase text-gray-400 bg-black/40 px-3 py-1.5 rounded-full border border-[#2d2d2d]">
                        Từ {stressIndex + 1}/{stressDrills.length}
                      </div>
                    </div>

                    <div className="text-center space-y-1">
                      <p className="text-xs font-black tracking-widest uppercase text-gray-400">Từ vựng mục tiêu:</p>
                      <h4 className="text-3xl font-black text-white">{stressDrills[stressIndex].word}</h4>
                      <p className="text-sm font-mono text-[#ffe36d]">{stressDrills[stressIndex].ipa}</p>
                      <p className="text-xs font-bold text-gray-500">Nghĩa Việt: {stressDrills[stressIndex].vietnamese}</p>
                    </div>

                    <div className="bg-black/20 p-4 border border-[#222] rounded-2xl text-center space-y-3">
                      <p className="text-xs font-black text-gray-400 uppercase tracking-wider">Nhấn vào âm tiết mang Trọng âm chính:</p>
                      
                      <div className="flex flex-wrap justify-center gap-3">
                        {stressDrills[stressIndex].syllables.map((syl, sIdx) => (
                          <button
                            key={sIdx}
                            onClick={() => handleCheckStress(sIdx)}
                            className={`px-5 py-4 font-black rounded-xl text-lg uppercase transition-all border-2 active:scale-95 ${
                              stressSelected === sIdx
                                ? (sIdx === stressDrills[stressIndex].correctIndex 
                                    ? 'bg-[#ffe36d] border-black text-black shadow-md shadow-[#ffe36d]/20' 
                                    : 'bg-rose-600/10 border-[#dc2323] text-[#dc2323]')
                                : 'bg-[#222] border-[#333] hover:border-gray-500 text-white'
                            }`}
                          >
                            {syl}
                          </button>
                        ))}
                      </div>
                    </div>

                    {stressFeedback && (
                      <div className="p-4 bg-black/40 border border-[#333] rounded-2xl text-center text-xs sm:text-sm font-bold text-gray-300">
                        {stressFeedback}
                      </div>
                    )}

                    <div className="flex justify-center">
                      <button
                        onClick={() => {
                          setStressSelected(null);
                          setStressFeedback(null);
                          setStressIndex(prev => (prev + 1) % stressDrills.length);
                        }}
                        className="px-6 py-3.5 bg-[#222] hover:bg-[#333] text-gray-300 uppercase font-bold tracking-widest text-xs border border-[#444] rounded-xl active:scale-95 transition-all"
                      >
                        Đổi Từ Khác
                      </button>
                    </div>
                  </div>
                )}

                {/* Sub Module 5: Connected Speech (Nối âm) */}
                {activeLabDrill === 'linking' && (
                  <div className="bg-[#1A1A1A] border-2 border-[#dc2323]/20 p-6 rounded-[32px] space-y-6">
                    <div className="flex justify-between items-center pb-3 border-b border-[#2d2d2d]">
                      <h3 className="text-base font-black text-white uppercase tracking-wider flex items-center gap-2">
                        <span>🔗</span> Luyện Tập Nối Điệu Phụ-Nguyên
                      </h3>
                      <div className="text-xs font-black tracking-widest uppercase text-gray-400 bg-black/40 px-3 py-1.5 rounded-full border border-[#2d2d2d]">
                        Mục {linkingIndex + 1}/{linkingDrills.length}
                      </div>
                    </div>

                    <div className="text-center">
                      <p className="text-xs uppercase font-bold tracking-widest text-gray-400">Cụm từ liên nhịp:</p>
                      <h4 className="text-2xl font-black text-[#ffe36d] uppercase">{linkingDrills[linkingIndex].phrase}</h4>
                    </div>

                    <div className="p-6 bg-black/35 rounded-[24px] border border-[#333] flex flex-col justify-center items-center gap-4 text-center">
                      <p className="text-white/80 font-bold max-w-sm">"{linkingDrills[linkingIndex].sentence}"</p>
                      
                      {linkingActivated ? (
                        <div className="flex items-center gap-2.5 bg-[#ffe36d]/5 border border-[#ffe36d]/20 px-5 py-3 rounded-full">
                          <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Âm thanh nối:</span>
                          <span className="font-mono font-black text-lg text-[#ffe36d]">{linkingDrills[linkingIndex].linked}</span>
                        </div>
                      ) : (
                        <p className="text-[10px] uppercase font-black text-gray-500">Ấn kích hoạt nối âm để nghe nhịp</p>
                      )}
                    </div>

                    {linkingActivated && (
                      <div className="p-4 bg-[#222] border border-[#333] rounded-2xl text-xs sm:text-sm font-bold leading-relaxed text-gray-300">
                        {linkingDrills[linkingIndex].explanation}
                      </div>
                    )}

                    <div className="flex gap-3 justify-center">
                      <button
                        onClick={() => {
                          setLinkingActivated(!linkingActivated);
                          if (!linkingActivated) {
                            playTTS(linkingDrills[linkingIndex].phrase, 'en-US', true);
                          }
                        }}
                        className="px-6 py-3.5 bg-white text-black font-black uppercase tracking-widest text-xs rounded-xl active:scale-95 transition-all flex items-center gap-2 leading-none"
                      >
                        {linkingActivated ? 'Tắt Nối Âm' : 'Bật Nối Âm 🔗'}
                      </button>

                      <button
                        onClick={() => {
                          setLinkingActivated(false);
                          setLinkingIndex(prev => (prev + 1) % linkingDrills.length);
                        }}
                        className="px-6 py-3.5 bg-[#222] hover:bg-[#333] text-gray-300 font-bold uppercase tracking-widest text-xs rounded-xl active:scale-95 border border-[#444]"
                      >
                        Luyện Cụm Sau
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

          </AnimatePresence>

          {/* Core Words list (Always show general flashcard list underneath on dialogue/structures tabs, or always show for review topics) */}
          {(activeCommTab !== 'skillsLab' || topic.id.startsWith('review_')) && (
            <div className="mt-12">
              <h3 className="text-base font-black uppercase tracking-widest text-[#ffe36d] mb-5 px-1 flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffe36d]"></span>
                {topic.id.startsWith('review_') ? "Từ Vựng Ôn Tập Tổng Hợp" : "Danh sách Từ Vựng cốt lõi"} ({topic.words.length})
              </h3>
              <div className="grid grid-cols-1 gap-3">
                {topic.words.map((w, index) => (
                  <div key={index} className="bg-[#1A1A1A] border border-[#333] rounded-[24px] p-5 flex justify-between items-start gap-4">
                    <div className="flex gap-4 items-start">
                      <span className="text-3xl bg-[#222] border border-[#333] p-3 rounded-2xl shrink-0 block">{w.emoji}</span>
                      <div className="space-y-1">
                        <div className="flex items-baseline gap-2.5 flex-wrap">
                          <h4 className="text-lg font-black text-white">{w.word}</h4>
                          <span className="text-xs font-mono text-[#ffe36d]">{w.ipa}</span>
                        </div>
                        <p className="text-xs text-gray-400 font-bold">{w.definition}</p>
                        {w.translation && (
                          <p className="text-xs text-[#ffe36d] font-bold">Nghĩa Việt: {w.translation}</p>
                        )}
                        <p className="text-xs text-white p-2.5 bg-black/30 rounded-xl mt-2 block border border-[#2d2d2d]">
                          <strong className="text-gray-500 uppercase tracking-widest text-[9px] block mb-0.5">Mẫu câu:</strong>
                          <b>{w.example}</b>
                        </p>
                      </div>
                    </div>

                    <button 
                      onClick={() => playTTS(w.word)}
                      className="p-3 bg-[#222] text-[#ffe36d] rounded-xl hover:bg-[#ffe36d] hover:text-black transition-all border border-transparent hover:border-black shrink-0 active:scale-90"
                    >
                      <Volume2 size={16} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Standard Practice Drills Trigger Selection Grid (No WordSnake nor WordBlast) */}
          <div className="mt-12 pt-8 border-t border-[#222]">
            <h3 className="text-xl font-black uppercase tracking-tighter text-[#ffe36d] mb-6">Luyện Tập Phản Xạ</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <motion.button 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={() => onSelectMode('flashcards')}
                className="group w-full bg-[#1A1A1A] rounded-[24px] p-5 border border-[#333] hover:border-[#ffe36d] shadow-sm flex items-center gap-4 hover:translate-y-[-2px] transition-all text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-[#222] text-[#ffe36d] flex items-center justify-center group-hover:bg-[#ffe36d] group-hover:text-[#111] transition-colors shrink-0">
                  <PlayCircle size={24} />
                </div>
                <div className="flex-1">
                  <h2 className="text-base font-black text-white uppercase tracking-tight mb-0.5">Thẻ Từ Vựng</h2>
                  <p className="text-gray-400 font-bold text-[9px] uppercase tracking-widest leading-none">Flashcards & phát âm</p>
                </div>
              </motion.button>

              <motion.button 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                onClick={() => onSelectMode('quiz')}
                className="group w-full bg-[#1A1A1A] rounded-[24px] p-5 border border-[#333] hover:border-[#ffe36d] shadow-sm flex items-center gap-4 hover:translate-y-[-2px] transition-all text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-[#222] text-[#ffe36d] flex items-center justify-center group-hover:bg-[#ffe36d] group-hover:text-[#111] transition-colors shrink-0">
                  <BrainCircuit size={24} />
                </div>
                <div className="flex-1">
                  <h2 className="text-base font-black text-white uppercase tracking-tight mb-0.5">Trắc Nghiệm</h2>
                  <p className="text-gray-400 font-bold text-[9px] uppercase tracking-widest leading-none">Kiểm tra trí nhớ</p>
                </div>
              </motion.button>
              
              <motion.button 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                onClick={() => onSelectMode('fillblank')}
                className="group w-full bg-[#1A1A1A] rounded-[24px] p-5 border border-[#333] hover:border-[#ffe36d] shadow-sm flex items-center gap-4 hover:translate-y-[-2px] transition-all text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-[#222] text-[#ffe36d] flex items-center justify-center group-hover:bg-[#ffe36d] group-hover:text-[#111] transition-colors shrink-0">
                  <Type size={24} />
                </div>
                <div className="flex-1">
                  <h2 className="text-base font-black text-white uppercase tracking-tight mb-0.5">Điền Từ</h2>
                  <p className="text-gray-400 font-bold text-[9px] uppercase tracking-widest leading-none">Hoàn thành đoạn khuyết</p>
                </div>
              </motion.button>

              <motion.button 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                onClick={() => onSelectMode('memorymatch')}
                className="group w-full bg-[#1A1A1A] rounded-[24px] p-5 border border-[#333] hover:border-[#ffe36d] shadow-sm flex items-center gap-4 hover:translate-y-[-2px] transition-all text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-[#222] text-[#dc2323] flex items-center justify-center group-hover:bg-[#dc2323] group-hover:text-white transition-colors shrink-0">
                  <Puzzle size={24} />
                </div>
                <div className="flex-1">
                  <h2 className="text-base font-black text-white uppercase tracking-tight mb-0.5">Ghép Từ</h2>
                  <p className="text-gray-400 font-bold text-[9px] uppercase tracking-widest leading-none">Nối từ & biểu tượng</p>
                </div>
              </motion.button>

              <motion.button 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
                onClick={() => onSelectMode('wordtower')}
                className="group w-full bg-[#1A1A1A] rounded-[24px] p-5 border border-[#333] hover:border-[#ffe36d] shadow-sm flex items-center gap-4 hover:translate-y-[-2px] transition-all text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-[#222] text-[#dc2323] flex items-center justify-center group-hover:bg-[#dc2323] group-hover:text-white transition-colors shrink-0">
                  <Blocks size={24} />
                </div>
                <div className="flex-1">
                  <h2 className="text-base font-black text-white uppercase tracking-tight mb-0.5">Xây Tháp Từ</h2>
                  <p className="text-gray-400 font-bold text-[9px] uppercase tracking-widest leading-none">Vừa gõ từ vừa xây tháp</p>
                </div>
              </motion.button>
              
              <motion.button 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                onClick={() => onSelectMode('wordflood')}
                className="group w-full bg-[#1A1A1A] rounded-[24px] p-5 border border-[#333] hover:border-[#ffe36d] shadow-sm flex items-center gap-4 hover:translate-y-[-2px] transition-all text-left"
              >
                <div className="w-12 h-12 rounded-xl bg-[#222] text-[#dc2323] flex items-center justify-center group-hover:bg-[#dc2323] group-hover:text-white transition-colors shrink-0">
                  <span className="text-[22px]">🧱</span>
                </div>
                <div className="flex-1">
                  <h2 className="text-base font-black text-white uppercase tracking-tight mb-0.5">Word Flood</h2>
                  <p className="text-gray-400 font-bold text-[9px] uppercase tracking-widest leading-none">Tetris ghép cặp vựng</p>
                </div>
              </motion.button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
