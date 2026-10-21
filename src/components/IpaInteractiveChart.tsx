import React, { useState } from 'react';
import { Volume2, Sparkles, ChevronRight, Maximize2, X, AlertTriangle, CheckCircle2, Bookmark, ArrowRight, Layers, HelpCircle } from 'lucide-react';
import {
  VOWEL_QUAD_ROWS,
  DIPHTHONG_KEYS,
  CONSONANT_PLACES,
  CONSONANT_ROWS,
  PL_LABELS,
  VOWEL_DATA,
  DIPHTHONG_DATA,
  CONSONANT_DATA,
  CONSONANT_PARAMS,
  SOUND_DETAILS_EXTENDED,
  VOICELESS_CONSONANTS_QUICK_TABLE,
  MINIMAL_PAIRS,
  VIETNAMESE_COMMON_MISTAKES,
  CONSONANT_CLUSTERS_PRACTICE,
  FIVE_STEP_STRATEGY,
  renderMouthCrossSection,
  renderLipsSvg
} from '../data/ipaData';

interface IpaInteractiveChartProps {
  onBack?: () => void;
  className?: string;
}

export function IpaInteractiveChart({ onBack, className = '' }: IpaInteractiveChartProps) {
  const [selectedSound, setSelectedSound] = useState<string>('iː');
  const [activeTab, setActiveTab] = useState<'chart' | 'pairs' | 'mistakes' | 'strategy'>('chart');
  const [zoomedSvg, setZoomedSvg] = useState<{ title: string; html: string } | null>(null);
  const [playingPair, setPlayingPair] = useState<string | null>(null);

  // Text-To-Speech helper
  const playSound = (text: string, rate: number = 0.85) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-GB';
    utterance.rate = rate;
    window.speechSynthesis.speak(utterance);
  };

  const playPairSound = (word1: string, word2: string) => {
    setPlayingPair(`${word1}-${word2}`);
    playSound(word1, 0.8);
    setTimeout(() => {
      playSound(word2, 0.8);
      setTimeout(() => setPlayingPair(null), 1200);
    }, 1100);
  };

  // Inspect sound data
  const getSoundInfo = (k: string) => {
    if (VOWEL_DATA[k]) {
      const [word, ipa, params, vi] = VOWEL_DATA[k];
      return {
        symbol: k,
        word,
        ipa,
        type: 'vowel' as const,
        isLong: k.includes('ː'),
        vi,
        params,
        extra: SOUND_DETAILS_EXTENDED[k]
      };
    }
    if (DIPHTHONG_DATA[k]) {
      const [word, ipa, fromS, toS, vi] = DIPHTHONG_DATA[k];
      const fromParam = VOWEL_DATA[fromS]?.[2] || { o: 0.82, r: 0, h: 0.18, b: 0.38 };
      const toParam = VOWEL_DATA[toS]?.[2] || { o: 0.28, r: 0, h: 0.78, b: 0.22 };
      return {
        symbol: k,
        word,
        ipa,
        type: 'diphthong' as const,
        glide: `/${fromS}/ → /${toS}/`,
        vi,
        params: { fromParam, toParam },
        extra: SOUND_DETAILS_EXTENDED[k]
      };
    }
    if (CONSONANT_DATA[k]) {
      const [word, ipa, pl, manner, voiced, vi] = CONSONANT_DATA[k];
      const pr = CONSONANT_PARAMS[pl] || { o: 0.3, r: 0, h: 0.5, b: 0.5 };
      return {
        symbol: k,
        word,
        ipa,
        type: 'consonant' as const,
        voiced: voiced === 1,
        place: PL_LABELS[pl] || pl,
        manner,
        vi,
        params: { ...pr, pl, air: manner },
        extra: SOUND_DETAILS_EXTENDED[k]
      };
    }
    return null;
  };

  const currentSound = getSoundInfo(selectedSound);

  const handleSelectSound = (k: string) => {
    setSelectedSound(k);
    const info = getSoundInfo(k);
    if (info && info.word) {
      playSound(info.word, 0.85);
    }
  };

  return (
    <div className={`space-y-8 text-left ${className}`}>
      {/* Top Banner Card */}
      <div className="relative bg-gradient-to-br from-[#1C1212] via-[#151515] to-[#111111] border border-[#ff4e4e]/20 rounded-[32px] p-6 sm:p-8 shadow-2xl overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-radial from-[#dc2323]/10 to-transparent rounded-full filter blur-2xl pointer-events-none" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#dc2323]/15 border border-[#dc2323]/30 px-3.5 py-1.5 rounded-full text-xs font-black text-[#ffe36d] uppercase tracking-wider">
              <Sparkles size={14} className="text-[#ffe36d] animate-pulse" /> Chuẩn Khung Quốc Tế IPA (44 Sounds)
            </div>

            <h2 className="text-3xl sm:text-4xl font-black text-white uppercase tracking-tight">
              Bảng Phát Âm IPA Tương Tác
            </h2>

            <p className="text-gray-300 text-sm sm:text-base font-semibold max-w-2xl leading-relaxed">
              Nghe âm thanh chuẩn bản xứ, quan sát mặt cắt vòm miệng & khẩu hình môi 2D, đối chiếu chi tiết với tiếng Việt để xoá bỏ triệt để lỗi phát âm thường gặp.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 self-start md:self-center">
            {onBack && (
              <button
                onClick={onBack}
                className="px-4 py-2.5 bg-[#222] hover:bg-[#333] border border-[#444] text-white rounded-2xl text-xs font-black uppercase tracking-wider transition-all active:scale-95"
              >
                ← Quay lại danh mục
              </button>
            )}
          </div>
        </div>

        {/* Core Principles Alert */}
        <div className="mt-6 bg-[#ffe36d]/10 border border-[#ffe36d]/30 rounded-2xl p-4 flex items-start gap-3">
          <div className="w-8 h-8 rounded-xl bg-[#ffe36d] text-black flex items-center justify-center font-black text-base shrink-0 mt-0.5">
            💡
          </div>
          <div className="text-xs sm:text-sm text-gray-200">
            <span className="font-black text-[#ffe36d] uppercase tracking-wider">Nguyên tắc quan trọng nhất: </span>
            Đừng đoán phát âm bằng mặt chữ! Hãy học theo <span className="text-white font-bold underline decoration-[#ffe36d] underline-offset-4">âm (IPA)</span> — vì một chữ cái tiếng Anh có thể đọc thành nhiều âm khác nhau, và một âm có thể được cấu tạo bởi nhiều cách viết khác nhau.
          </div>
        </div>
      </div>

      {/* Nav Sub-Tabs for Pronunciation Skills */}
      <div className="flex flex-wrap items-center gap-2 border-b border-[#222] pb-3">
        <button
          onClick={() => setActiveTab('chart')}
          className={`px-5 py-2.5 rounded-2xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 ${
            activeTab === 'chart'
              ? 'bg-[#ffe36d] text-black shadow-lg font-extrabold'
              : 'bg-[#181818] border border-[#2b2b2b] text-gray-400 hover:text-white hover:border-[#ffe36d]/50'
          }`}
        >
          <span>🎯</span> Bảng 44 Âm IPA & Khẩu Hình
        </button>
        <button
          onClick={() => setActiveTab('pairs')}
          className={`px-5 py-2.5 rounded-2xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 ${
            activeTab === 'pairs'
              ? 'bg-[#dc2323] text-white shadow-lg font-extrabold shadow-[#dc2323]/20'
              : 'bg-[#181818] border border-[#2b2b2b] text-gray-400 hover:text-white hover:border-[#dc2323]/50'
          }`}
        >
          <span>⚡</span> Cặp Âm Dễ Nhầm (Minimal Pairs)
        </button>
        <button
          onClick={() => setActiveTab('mistakes')}
          className={`px-5 py-2.5 rounded-2xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 ${
            activeTab === 'mistakes'
              ? 'bg-[#dc2323] text-white shadow-lg font-extrabold shadow-[#dc2323]/20'
              : 'bg-[#181818] border border-[#2b2b2b] text-gray-400 hover:text-white hover:border-[#dc2323]/50'
          }`}
        >
          <span>⚠️</span> 7 Lỗi Phổ Biến & Âm Cuối
        </button>
        <button
          onClick={() => setActiveTab('strategy')}
          className={`px-5 py-2.5 rounded-2xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 ${
            activeTab === 'strategy'
              ? 'bg-[#222] text-[#ffe36d] border border-[#ffe36d]/40 shadow-lg font-extrabold'
              : 'bg-[#181818] border border-[#2b2b2b] text-gray-400 hover:text-white'
          }`}
        >
          <span>🏆</span> Chiến Lược Luyện 5 Bước
        </button>
      </div>

      {/* TAB CONTENT 1: FULL IPA BOARD & INSPECTOR */}
      {activeTab === 'chart' && (
        <div className="space-y-10">
          {/* Section 1: 3 Core Questions Overview */}
          <div className="bg-[#151515] border border-[#262626] rounded-[28px] p-6 sm:p-7 space-y-4">
            <h3 className="text-lg font-black uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffe36d]"></span>
              Phần 1: Hiểu hệ thống âm qua 3 câu hỏi cốt lõi
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#1C1C1C] border border-[#333] rounded-2xl p-5 space-y-2">
                <span className="text-xs font-black uppercase tracking-wider text-[#ffe36d] block">
                  1. LOẠI ÂM?
                </span>
                <h4 className="text-white font-bold text-sm">Nguyên âm hay Phụ âm?</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  <b className="text-white">Nguyên âm (20 âm):</b> Luồng hơi không bị cản → tạo âm vang.<br />
                  <b className="text-white">Phụ âm (24 âm):</b> Luồng hơi bị cản ở vị trí cụ thể (môi, răng, lợi, vòm…).
                </p>
              </div>

              <div className="bg-[#1C1C1C] border border-[#333] rounded-2xl p-5 space-y-2">
                <span className="text-xs font-black uppercase tracking-wider text-[#ffe36d] block">
                  2. VỊ TRÍ CẤU ÂM?
                </span>
                <h4 className="text-white font-bold text-sm">Môi, răng, lưỡi ở đâu?</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  <b className="text-white">Nguyên âm:</b> Độ cao lưỡi (cao/thấp), trước/sau, tròn/dẹt môi.<br />
                  <b className="text-white">Phụ âm:</b> Hai môi, môi–răng, lưỡi–răng, lưỡi–lợi, vòm cứng, ngạc mềm.
                </p>
              </div>

              <div className="bg-[#1C1C1C] border border-[#333] rounded-2xl p-5 space-y-2">
                <span className="text-xs font-black uppercase tracking-wider text-[#ffe36d] block">
                  3. DÂY THANH RUNG KHÔNG?
                </span>
                <h4 className="text-white font-bold text-sm">Hữu thanh hay Vô thanh?</h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Đặt tay lên hõm cổ họng:<br />
                  <b className="text-[#dc2323]">Hữu thanh (Voiced):</b> /z, v, b, d, g/ rung mạnh.<br />
                  <b className="text-gray-300">Vô thanh (Voiceless):</b> /s, f, p, t, k, θ/ không rung.
                </p>
              </div>
            </div>
          </div>

          {/* Interactive Sound Inspector Box */}
          {currentSound && (
            <div className="bg-gradient-to-br from-[#1C1515] to-[#121212] border-2 border-[#ff4e4e]/30 rounded-[32px] p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              <div className="flex flex-col lg:flex-row gap-8 items-start justify-between">
                {/* Left Column: Sound Symbol & Audio Controls */}
                <div className="w-full lg:w-1/3 space-y-5 text-left shrink-0">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest bg-[#ffe36d]/15 text-[#ffe36d] border border-[#ffe36d]/30">
                    Âm đang chọn để luyện tập
                  </div>

                  <div>
                    <div className="text-6xl sm:text-7xl font-black text-white tracking-tighter">
                      /{currentSound.symbol}/
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-[#ffe36d] mt-1 flex items-center gap-2">
                      {currentSound.word}
                      <span className="text-sm font-mono text-gray-400 font-normal">{currentSound.ipa}</span>
                    </div>
                  </div>

                  {/* Audio Controls */}
                  <div className="flex flex-wrap gap-2.5 pt-1">
                    <button
                      onClick={() => playSound(currentSound.word, 0.85)}
                      className="px-5 py-2.5 bg-[#dc2323] hover:bg-[#b51c1c] text-white rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-[#dc2323]/25 active:scale-95 transition-all"
                    >
                      <Volume2 size={16} /> Nghe Chuẩn
                    </button>
                    <button
                      onClick={() => playSound(currentSound.word, 0.45)}
                      className="px-4 py-2.5 bg-[#252525] hover:bg-[#333] border border-[#444] text-gray-200 rounded-xl text-xs font-black uppercase tracking-wider flex items-center gap-1.5 active:scale-95 transition-all"
                    >
                      🐢 Nghe Chậm
                    </button>
                  </div>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {currentSound.type === 'vowel' && (
                      <>
                        <span className="px-2.5 py-1 bg-[#222] border border-[#333] text-white text-[10px] font-black uppercase rounded-lg">
                          Nguyên âm đơn
                        </span>
                        <span className="px-2.5 py-1 bg-[#222] border border-[#333] text-[#ffe36d] text-[10px] font-black uppercase rounded-lg">
                          {currentSound.isLong ? 'Nguyên âm dài (Long)' : 'Nguyên âm ngắn (Short)'}
                        </span>
                      </>
                    )}
                    {currentSound.type === 'diphthong' && (
                      <>
                        <span className="px-2.5 py-1 bg-[#222] border border-[#333] text-white text-[10px] font-black uppercase rounded-lg">
                          Nguyên âm đôi
                        </span>
                        <span className="px-2.5 py-1 bg-[#222] border border-[#333] text-[#ffe36d] text-[10px] font-black uppercase rounded-lg">
                          {currentSound.glide}
                        </span>
                      </>
                    )}
                    {currentSound.type === 'consonant' && (
                      <>
                        <span className="px-2.5 py-1 bg-[#222] border border-[#333] text-white text-[10px] font-black uppercase rounded-lg">
                          Phụ âm {currentSound.manner}
                        </span>
                        <span className={`px-2.5 py-1 text-[10px] font-black uppercase rounded-lg border ${
                          currentSound.voiced
                            ? 'bg-[#dc2323]/20 text-[#ff7171] border-[#dc2323]/40'
                            : 'bg-gray-800 text-gray-300 border-gray-700'
                        }`}>
                          {currentSound.voiced ? 'Hữu thanh (Rung cổ)' : 'Vô thanh (Không rung)'}
                        </span>
                        <span className="px-2.5 py-1 bg-[#222] border border-[#333] text-gray-300 text-[10px] font-black uppercase rounded-lg">
                          {currentSound.place}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Center / Right Column: Anatomical Diagrams & Guides */}
                <div className="w-full lg:w-2/3 space-y-4">
                  {/* SVG Diagrams */}
                  <div className="flex flex-wrap items-center gap-4 bg-[#141414] border border-[#2b2b2b] p-4 rounded-2xl">
                    {/* Cross-section */}
                    <div className="flex flex-col items-center gap-1.5">
                      <div
                        onClick={() => {
                          const html = currentSound.type === 'vowel'
                            ? renderMouthCrossSection(currentSound.params)
                            : currentSound.type === 'consonant'
                            ? renderMouthCrossSection(currentSound.params, currentSound.voiced, currentSound.manner === 'Mũi')
                            : renderMouthCrossSection(currentSound.params.fromParam);
                          setZoomedSvg({ title: `Mặt cắt vòm miệng: /${currentSound.symbol}/`, html });
                        }}
                        className="w-36 h-44 bg-[#0d0d0d] border border-[#333] hover:border-[#ffe36d] rounded-xl p-2 cursor-zoom-in transition-all overflow-hidden flex items-center justify-center relative group"
                        title="Bấm để phóng to sơ đồ"
                        dangerouslySetInnerHTML={{
                          __html: currentSound.type === 'vowel'
                            ? renderMouthCrossSection(currentSound.params)
                            : currentSound.type === 'consonant'
                            ? renderMouthCrossSection(currentSound.params, currentSound.voiced, currentSound.manner === 'Mũi')
                            : renderMouthCrossSection(currentSound.params.fromParam)
                        }}
                      />
                      <span className="text-[10px] font-bold text-gray-400 flex items-center gap-1">
                        <Maximize2 size={10} /> Mặt cắt miệng
                      </span>
                    </div>

                    {/* Front lips */}
                    <div className="flex flex-col items-center gap-1.5">
                      <div
                        onClick={() => {
                          const html = currentSound.type === 'vowel'
                            ? renderLipsSvg(currentSound.params)
                            : renderLipsSvg(currentSound.params);
                          setZoomedSvg({ title: `Khẩu hình mặt trước: /${currentSound.symbol}/`, html });
                        }}
                        className="w-36 h-44 bg-[#0d0d0d] border border-[#333] hover:border-[#ffe36d] rounded-xl p-2 cursor-zoom-in transition-all overflow-hidden flex items-center justify-center relative group"
                        title="Bấm để phóng to khẩu hình"
                        dangerouslySetInnerHTML={{
                          __html: renderLipsSvg(currentSound.params)
                        }}
                      />
                      <span className="text-[10px] font-bold text-gray-400 flex items-center gap-1">
                        <Maximize2 size={10} /> Khẩu hình môi
                      </span>
                    </div>

                    <div className="flex-1 min-w-[200px] text-xs text-gray-400 space-y-1">
                      <p className="font-bold text-gray-300">💡 Cách đọc sơ đồ:</p>
                      <p>• Phía bên trái sơ đồ là răng và môi.</p>
                      <p>• Phần màu hồng cam là thân lưỡi đang định vị.</p>
                      <p>• Chấm đỏ biểu thị điểm tiếp xúc / cản luồng hơi chính.</p>
                      <p>• Mũi tên xanh chỉ hướng thoát khí (miệng hoặc mũi).</p>
                    </div>
                  </div>

                  {/* Vietnamese Comparison Note */}
                  <div className="bg-[#1e1b15] border border-[#ffe36d]/30 rounded-2xl p-4 text-xs sm:text-sm text-gray-300 leading-relaxed">
                    <span className="font-black text-[#ffe36d] uppercase tracking-wider">So với tiếng Việt: </span>
                    {currentSound.vi}
                  </div>

                  {/* Extra Guidelines & Mistake Warnings */}
                  {currentSound.extra && (
                    <div className="bg-[#191919] border border-[#333] rounded-2xl p-4 space-y-2 text-xs sm:text-sm">
                      <p className="text-gray-300 leading-relaxed">
                        <b className="text-[#ffe36d]">Ví dụ thông dụng:</b> {currentSound.extra[0]}
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        <b className="text-white">Cách đặt khẩu hình:</b> {currentSound.extra[1]}
                      </p>
                      {currentSound.extra[2] && (
                        <p className="text-gray-400 bg-black/40 border border-[#333] p-2.5 rounded-xl leading-relaxed">
                          <b className="text-[#dc2323]">⚠️ Lưu ý tránh sai:</b> {currentSound.extra[2]}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* 2.1: 12 Monophthongs Quadrant */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#ffe36d]">PHÂN NHÓM NGUYÊN ÂM ĐƠN</span>
                <h3 className="text-xl font-black uppercase text-white tracking-tight">
                  12 Nguyên Âm Đơn (Monophthongs)
                </h3>
              </div>
              <p className="text-xs text-gray-400">
                Sơ đồ độ cao lưỡi (trên xuống) & vị trí trước/sau (trái sang phải). Bấm vào âm để nghe & xem khẩu hình.
              </p>
            </div>

            <div className="overflow-x-auto bg-[#141414] border border-[#2b2b2b] rounded-[24px] p-4 sm:p-6">
              <div className="min-w-[620px] space-y-2">
                {/* Header row */}
                <div className="grid grid-cols-4 gap-2 text-center text-xs font-black uppercase tracking-wider text-gray-400 pb-2 border-b border-[#262626]">
                  <div className="text-left text-gray-500 pl-2">Độ cao lưỡi</div>
                  <div className="bg-[#1C1C1C] py-1.5 rounded-lg text-[#ffe36d]">Trước (Front)</div>
                  <div className="bg-[#1C1C1C] py-1.5 rounded-lg text-[#ffe36d]">Trung tâm (Central)</div>
                  <div className="bg-[#1C1C1C] py-1.5 rounded-lg text-[#ffe36d]">Sau (Back)</div>
                </div>

                {/* Vowel Rows */}
                {VOWEL_QUAD_ROWS.map((row, idx) => (
                  <div key={idx} className="grid grid-cols-4 gap-2 items-center">
                    <div className="text-xs font-black uppercase text-gray-400 pl-2">
                      {row.label}
                    </div>

                    {/* Front */}
                    <div>
                      {row.front ? (
                        <button
                          onClick={() => handleSelectSound(row.front)}
                          className={`w-full p-2.5 rounded-xl border flex flex-col items-center justify-center transition-all ${
                            selectedSound === row.front
                              ? 'bg-[#ffe36d] text-black border-[#ffe36d] shadow-lg scale-105 font-black'
                              : 'bg-[#1c1c1c] border-[#333] text-white hover:border-[#ffe36d] hover:bg-[#252525]'
                          }`}
                        >
                          <span className="text-lg font-black">/{row.front}/</span>
                          <span className="text-[10px] text-gray-400 font-bold underline decoration-[#ffe36d]">
                            {VOWEL_DATA[row.front]?.[0]}
                          </span>
                        </button>
                      ) : (
                        <div className="h-14 border border-dashed border-[#262626] rounded-xl opacity-20" />
                      )}
                    </div>

                    {/* Central */}
                    <div>
                      {row.central ? (
                        row.central.includes(' / ') ? (
                          <div className="flex gap-1.5">
                            <button
                              onClick={() => handleSelectSound('ə')}
                              className={`flex-1 p-2 rounded-xl border flex flex-col items-center justify-center transition-all ${
                                selectedSound === 'ə'
                                  ? 'bg-[#ffe36d] text-black border-[#ffe36d] shadow-lg scale-105 font-black'
                                  : 'bg-[#1c1c1c] border-[#333] text-white hover:border-[#ffe36d] hover:bg-[#252525]'
                              }`}
                            >
                              <span className="text-base font-black">/ə/</span>
                              <span className="text-[9px] text-gray-400 font-bold underline decoration-[#ffe36d]">teacher</span>
                            </button>
                            <button
                              onClick={() => handleSelectSound('ɜː')}
                              className={`flex-1 p-2 rounded-xl border flex flex-col items-center justify-center transition-all ${
                                selectedSound === 'ɜː'
                                  ? 'bg-[#ffe36d] text-black border-[#ffe36d] shadow-lg scale-105 font-black'
                                  : 'bg-[#1c1c1c] border-[#333] text-white hover:border-[#ffe36d] hover:bg-[#252525]'
                              }`}
                            >
                              <span className="text-base font-black">/ɜː/</span>
                              <span className="text-[9px] text-gray-400 font-bold underline decoration-[#ffe36d]">bird</span>
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => handleSelectSound(row.central)}
                            className={`w-full p-2.5 rounded-xl border flex flex-col items-center justify-center transition-all ${
                              selectedSound === row.central
                                ? 'bg-[#ffe36d] text-black border-[#ffe36d] shadow-lg scale-105 font-black'
                                : 'bg-[#1c1c1c] border-[#333] text-white hover:border-[#ffe36d] hover:bg-[#252525]'
                            }`}
                          >
                            <span className="text-lg font-black">/{row.central}/</span>
                            <span className="text-[10px] text-gray-400 font-bold underline decoration-[#ffe36d]">
                              {VOWEL_DATA[row.central]?.[0]}
                            </span>
                          </button>
                        )
                      ) : (
                        <div className="h-14 border border-dashed border-[#262626] rounded-xl opacity-20" />
                      )}
                    </div>

                    {/* Back */}
                    <div>
                      {row.back ? (
                        <button
                          onClick={() => handleSelectSound(row.back)}
                          className={`w-full p-2.5 rounded-xl border flex flex-col items-center justify-center transition-all ${
                            selectedSound === row.back
                              ? 'bg-[#ffe36d] text-black border-[#ffe36d] shadow-lg scale-105 font-black'
                              : 'bg-[#1c1c1c] border-[#333] text-white hover:border-[#ffe36d] hover:bg-[#252525]'
                          }`}
                        >
                          <span className="text-lg font-black">/{row.back}/</span>
                          <span className="text-[10px] text-gray-400 font-bold underline decoration-[#ffe36d]">
                            {VOWEL_DATA[row.back]?.[0]}
                          </span>
                        </button>
                      ) : (
                        <div className="h-14 border border-dashed border-[#262626] rounded-xl opacity-20" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 2.2: 8 Diphthongs Grid */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#ffe36d]">NGUYÊN ÂM CÓ CHUYỂN ĐỘNG TRƯỢT</span>
                <h3 className="text-xl font-black uppercase text-white tracking-tight">
                  8 Nguyên Âm Đôi (Diphthongs)
                </h3>
              </div>
              <p className="text-xs text-gray-400">
                Âm bắt đầu ở một vị trí rồi lướt mượt mà về vị trí thứ hai trong cùng một hơi.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {DIPHTHONG_KEYS.map((k) => (
                <button
                  key={k}
                  onClick={() => handleSelectSound(k)}
                  className={`p-4 rounded-2xl border flex flex-col items-center justify-center transition-all text-center ${
                    selectedSound === k
                      ? 'bg-[#ffe36d] text-black border-[#ffe36d] shadow-xl scale-105 font-black'
                      : 'bg-[#181818] border-[#2d2d2d] text-white hover:border-[#ffe36d] hover:bg-[#202020]'
                  }`}
                >
                  <span className="text-2xl font-black">/{k}/</span>
                  <span className="text-xs text-gray-400 font-bold mt-1 underline decoration-[#ffe36d]">
                    {DIPHTHONG_DATA[k]?.[0]}
                  </span>
                  <span className="text-[10px] text-gray-500 font-mono mt-0.5">
                    {DIPHTHONG_DATA[k]?.[1]}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* 2.3: 24 Consonants Matrix */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#ffe36d]">BẢNG PHÂN LOẠI PHỤ ÂM</span>
                <h3 className="text-xl font-black uppercase text-white tracking-tight">
                  24 Phụ Âm Tiếng Anh (Consonants)
                </h3>
              </div>
              <div className="flex items-center gap-4 text-xs">
                <span className="flex items-center gap-1.5 font-bold text-[#ff6464]">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#dc2323]"></span> Hữu thanh (Rung)
                </span>
                <span className="flex items-center gap-1.5 font-bold text-gray-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-gray-500"></span> Vô thanh (Không rung)
                </span>
              </div>
            </div>

            <div className="overflow-x-auto bg-[#141414] border border-[#2b2b2b] rounded-[24px] p-4 sm:p-6">
              <div className="min-w-[850px] space-y-3">
                {/* Header row */}
                <div className="grid grid-cols-10 gap-2 text-center text-[11px] font-black uppercase tracking-wider text-gray-400 pb-2 border-b border-[#262626]">
                  <div className="text-left text-gray-500 pl-2">Cách tạo âm</div>
                  {CONSONANT_PLACES.map((p, idx) => (
                    <div key={idx} className="bg-[#1C1C1C] py-1.5 rounded-lg text-gray-300">
                      {p}
                    </div>
                  ))}
                </div>

                {/* Rows */}
                {CONSONANT_ROWS.map((row, idx) => (
                  <div key={idx} className="grid grid-cols-10 gap-2 items-center">
                    <div className="text-xs font-black uppercase text-gray-300 pl-2">
                      {row.label}
                    </div>

                    {CONSONANT_PLACES.map((place, pIdx) => {
                      const sounds = (row.cells as any)[place] || [];
                      return (
                        <div key={pIdx} className="flex flex-col gap-1.5">
                          {sounds.map((k: string) => {
                            const voiced = CONSONANT_DATA[k]?.[4] === 1;
                            const isSelected = selectedSound === k;
                            return (
                              <button
                                key={k}
                                onClick={() => handleSelectSound(k)}
                                className={`w-full py-2 px-1 rounded-xl border flex flex-col items-center justify-center transition-all ${
                                  isSelected
                                    ? 'bg-[#ffe36d] text-black border-[#ffe36d] shadow-lg scale-105 font-black'
                                    : voiced
                                    ? 'bg-[#211515] border-[#422222] text-[#ff8080] hover:border-[#ff5050]'
                                    : 'bg-[#181818] border-[#333] text-gray-200 hover:border-gray-500'
                                }`}
                              >
                                <span className="text-lg font-black leading-tight">/{k}/</span>
                                <span className="text-[10px] text-gray-400 underline decoration-[#ffe36d] truncate max-w-full">
                                  {CONSONANT_DATA[k]?.[0]}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 8 Voiceless Consonants Quick Table */}
          <div className="space-y-4">
            <h3 className="text-lg font-black uppercase tracking-wider text-white flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#dc2323]"></span>
              Bảng tra cứu nhanh: 8 phụ âm vô thanh thường gặp nhất
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {VOICELESS_CONSONANTS_QUICK_TABLE.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => handleSelectSound(item.symbol.replace(/\//g, ''))}
                  className="bg-[#181818] border border-[#2c2c2c] hover:border-[#ffe36d] p-5 rounded-2xl cursor-pointer transition-all space-y-2 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black text-white group-hover:text-[#ffe36d] transition-colors">
                      {item.symbol}
                    </span>
                    <span className="text-[9px] font-black uppercase tracking-wider bg-[#222] text-gray-400 px-2 py-0.5 rounded border border-[#333]">
                      {item.place}
                    </span>
                  </div>

                  <p className="text-xs font-bold text-[#ffe36d]">{item.examples}</p>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB CONTENT 2: MINIMAL PAIRS */}
      {activeTab === 'pairs' && (
        <div className="space-y-6">
          <div className="bg-[#181818] border border-[#2b2b2b] rounded-[28px] p-6 sm:p-7 space-y-3">
            <span className="text-xs font-black uppercase tracking-widest text-[#ffe36d]">BÀI TẬP PHÂN BIỆT CẶP TỐI THIỂU</span>
            <h3 className="text-2xl font-black uppercase text-white tracking-tight">
              14 Cặp Âm Dễ Nhầm Lẫn Nhất (Minimal Pairs)
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed max-w-3xl">
              Nhấn vào từng từ để nghe lẻ, hoặc bấm nút <b className="text-[#ffe36d]">"Phát cả cặp"</b> để nghe nối tiếp và cảm nhận sự khác biệt tinh tế về độ dài nguyên âm hoặc độ rung của dây thanh quản.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {MINIMAL_PAIRS.map((pair, idx) => {
              const isPlaying = playingPair === `${pair.word1}-${pair.word2}`;
              return (
                <div
                  key={idx}
                  className={`bg-[#161616] border rounded-2xl p-5 transition-all flex flex-col justify-between gap-4 ${
                    isPlaying ? 'border-[#ffe36d] bg-[#1e1b12] shadow-xl' : 'border-[#2d2d2d] hover:border-[#444]'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-wider text-[#ffe36d] bg-[#ffe36d]/10 px-2 py-0.5 rounded border border-[#ffe36d]/20">
                        {pair.type}
                      </span>
                      <button
                        onClick={() => playPairSound(pair.word1, pair.word2)}
                        className="px-3 py-1 bg-[#222] hover:bg-[#ffe36d] hover:text-black border border-[#333] text-white text-[10px] font-black uppercase tracking-wider rounded-lg transition-all flex items-center gap-1 active:scale-95"
                      >
                        <Volume2 size={12} /> Phát cả cặp
                      </button>
                    </div>

                    {/* Word 1 vs Word 2 */}
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <button
                        onClick={() => playSound(pair.word1, 0.8)}
                        className="p-3 bg-[#1F1F1F] hover:bg-[#282828] border border-[#333] hover:border-[#ffe36d] rounded-xl flex flex-col items-center justify-center transition-all group active:scale-95"
                      >
                        <span className="text-xl font-black text-white group-hover:text-[#ffe36d]">{pair.word1}</span>
                        <span className="text-xs font-mono text-gray-400">{pair.ipa1}</span>
                      </button>

                      <button
                        onClick={() => playSound(pair.word2, 0.8)}
                        className="p-3 bg-[#1F1F1F] hover:bg-[#282828] border border-[#333] hover:border-[#ffe36d] rounded-xl flex flex-col items-center justify-center transition-all group active:scale-95"
                      >
                        <span className="text-xl font-black text-white group-hover:text-[#ffe36d]">{pair.word2}</span>
                        <span className="text-xs font-mono text-gray-400">{pair.ipa2}</span>
                      </button>
                    </div>
                  </div>

                  <p className="text-xs text-gray-400 bg-black/40 border border-[#2b2b2b] p-3 rounded-xl leading-relaxed">
                    💡 <b className="text-white">Mẹo:</b> {pair.note}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* TAB CONTENT 3: MISTAKES & FINAL CONSONANTS */}
      {activeTab === 'mistakes' && (
        <div className="space-y-8">
          {/* Table of 7 Common Mistakes */}
          <div className="space-y-4">
            <div className="space-y-1">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#dc2323]">PHÂN TÍCH LỖI SAI</span>
              <h3 className="text-2xl font-black uppercase text-white tracking-tight">
                7 Lỗi Phát Âm Kinh Điển Của Người Việt & Cách Khắc Phục
              </h3>
            </div>

            <div className="space-y-3">
              {VIETNAMESE_COMMON_MISTAKES.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-[#161616] border border-[#292929] hover:border-[#dc2323]/50 p-5 rounded-2xl transition-all space-y-2 text-left"
                >
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-[#dc2323] text-white flex items-center justify-center text-xs font-black shrink-0">
                      {idx + 1}
                    </span>
                    <h4 className="text-base font-black text-white">{item.issue}</h4>
                  </div>

                  <p className="text-xs font-semibold text-[#ffe36d] pl-8">
                    <b className="text-gray-400">Ví dụ sai:</b> {item.examples}
                  </p>
                  <p className="text-xs text-gray-300 leading-relaxed pl-8 bg-black/30 p-3 rounded-xl border border-[#292929]">
                    <b className="text-[#ffe36d]">Cách sửa chuẩn:</b> {item.fix}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Final Sounds & Consonant Clusters Drills */}
          <div className="bg-[#181818] border border-[#2d2d2d] rounded-[28px] p-6 sm:p-7 space-y-4">
            <h3 className="text-xl font-black uppercase text-white tracking-tight flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffe36d]"></span>
              Luyện Cụm Phụ Âm Phức Tạp (Consonant Clusters)
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Tiếng Việt không có cụm 2–3 phụ âm đứng liền nhau nên người học hay bị nuốt bớt âm. Hãy tập tách cụm rồi gộp lại một cách mượt mà:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2">
              {CONSONANT_CLUSTERS_PRACTICE.map((c, idx) => (
                <button
                  key={idx}
                  onClick={() => playSound(c.text, 0.75)}
                  className="bg-[#1F1F1F] hover:bg-[#282828] border border-[#333] hover:border-[#ffe36d] p-4 rounded-xl text-left transition-all group active:scale-95"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-black text-white group-hover:text-[#ffe36d]">{c.text}</span>
                    <Volume2 size={14} className="text-gray-500 group-hover:text-[#ffe36d]" />
                  </div>
                  <span className="text-xs font-mono text-gray-400">{c.ipa}</span>
                  <p className="text-[11px] font-bold text-[#ffe36d] mt-2">{c.breakdown}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Vowel Length & Word Stress Note */}
          <div className="bg-gradient-to-r from-[#1c1212] to-[#141414] border border-[#ff4e4e]/20 rounded-2xl p-6 space-y-2">
            <h4 className="text-base font-black text-white uppercase tracking-tight flex items-center gap-2">
              <span>🎯</span> Trọng âm và độ dài nguyên âm
            </h4>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              Nhiều khi bạn nói người bản xứ không hiểu không phải do sai âm hoàn toàn, mà là do bạn chưa kéo dài nguyên âm dài (kéo gấp đôi âm ngắn) hoặc đánh sai trọng âm từ.
              Hãy nhấn mạnh âm tiết chính (cao hơn, dài hơn, to hơn), và các âm tiết yếu hãy hạ nhẹ thành âm lướt schwa <b className="text-[#ffe36d]">/ə/</b> (about, teacher, sofa).
            </p>
          </div>
        </div>
      )}

      {/* TAB CONTENT 4: 5-STEP STRATEGY */}
      {activeTab === 'strategy' && (
        <div className="space-y-6">
          <div className="bg-[#181818] border border-[#2b2b2b] rounded-[28px] p-6 sm:p-7 space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-[#ffe36d]">LỘ TRÌNH KHOA HỌC</span>
            <h3 className="text-2xl font-black uppercase text-white tracking-tight">
              Chiến Lược Tự Học Phát Âm 5 Bước Chuẩn Bản Xứ
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed max-w-2xl">
              Áp dụng tuần tự 5 bước sau để biến kiến thức phát âm từ lý thuyết thành phản xạ cơ miệng tự nhiên.
            </p>
          </div>

          <div className="space-y-4">
            {FIVE_STEP_STRATEGY.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#161616] border border-[#2c2c2c] hover:border-[#ffe36d] p-6 rounded-2xl transition-all flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-2xl bg-[#ffe36d] text-black font-black text-lg flex items-center justify-center shrink-0 shadow-md">
                  {idx + 1}
                </div>
                <div className="space-y-1.5">
                  <h4 className="text-lg font-black text-white">{item.step}</h4>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-semibold">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Drill Sentences */}
          <div className="bg-[#1A1A1A] border border-[#333] rounded-2xl p-6 space-y-3">
            <h4 className="text-sm font-black text-white uppercase tracking-wider flex items-center gap-2">
              <span>🗣️</span> Câu mẫu luyện cơ miệng phụ âm khó:
            </h4>
            <div className="space-y-2">
              <div
                onClick={() => playSound('three thin things', 0.8)}
                className="p-3 bg-[#141414] border border-[#2d2d2d] hover:border-[#ffe36d] rounded-xl cursor-pointer flex items-center justify-between text-xs sm:text-sm text-gray-300 group"
              >
                <span>"Three thin things" (/θ/ vô thanh)</span>
                <Volume2 size={16} className="text-gray-500 group-hover:text-[#ffe36d]" />
              </div>
              <div
                onClick={() => playSound('this is the thing that they think', 0.8)}
                className="p-3 bg-[#141414] border border-[#2d2d2d] hover:border-[#ffe36d] rounded-xl cursor-pointer flex items-center justify-between text-xs sm:text-sm text-gray-300 group"
              >
                <span>"This is the thing that they think" (/ð/ hữu thanh & /θ/ vô thanh)</span>
                <Volume2 size={16} className="text-gray-500 group-hover:text-[#ffe36d]" />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Zoom Modal for SVG diagrams */}
      {zoomedSvg && (
        <div
          onClick={() => setZoomedSvg(null)}
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-[#181818] border border-[#333] rounded-[32px] p-6 max-w-lg w-full shadow-2xl relative space-y-4"
          >
            <div className="flex items-center justify-between border-b border-[#2b2b2b] pb-3">
              <h4 className="text-base font-black text-white">{zoomedSvg.title}</h4>
              <button
                onClick={() => setZoomedSvg(null)}
                className="p-1.5 rounded-full bg-[#2b2b2b] hover:bg-[#3b3b3b] text-gray-300"
              >
                <X size={18} />
              </button>
            </div>

            <div
              className="w-full h-80 bg-[#0d0d0d] rounded-2xl p-4 flex items-center justify-center"
              dangerouslySetInnerHTML={{ __html: zoomedSvg.html }}
            />

            <p className="text-xs text-center text-gray-400">
              Bấm ra ngoài hoặc bấm nút ✕ để đóng cửa sổ
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
