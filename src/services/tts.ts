// Cache browser voices once available
let cachedVoices: SpeechSynthesisVoice[] = [];
if (typeof window !== 'undefined' && window.speechSynthesis) {
  cachedVoices = window.speechSynthesis.getVoices();
  if (window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = () => {
      cachedVoices = window.speechSynthesis.getVoices();
    };
  }
}

const getPreferredVoice = (lang: string): SpeechSynthesisVoice | null => {
  if (typeof window === 'undefined' || !window.speechSynthesis) return null;
  const voices = cachedVoices.length > 0 ? cachedVoices : window.speechSynthesis.getVoices();
  if (!voices || voices.length === 0) return null;

  const target = lang.toLowerCase().replace('_', '-');

  if (target.startsWith('en-au')) {
    // 1. Look for exact en-AU match
    const exact = voices.find(v => v.lang.toLowerCase().replace('_', '-') === 'en-au');
    if (exact) return exact;

    // 2. Look for Australia in voice name or lang
    const byName = voices.find(v => {
      const n = v.name.toLowerCase();
      const l = v.lang.toLowerCase();
      return n.includes('australia') || n.includes('australian') || n.includes('en-au') || 
             l.includes('en-au') || n.includes('karen') || n.includes('catherine') || 
             n.includes('russell') || n.includes('lee') || n.includes('natasha');
    });
    if (byName) return byName;
  } else if (target.startsWith('en-gb')) {
    const gb = voices.find(v => v.lang.toLowerCase().replace('_', '-') === 'en-gb') ||
               voices.find(v => v.name.toLowerCase().includes('united kingdom') || v.name.toLowerCase().includes('british') || v.name.toLowerCase().includes('daniel'));
    if (gb) return gb;
  } else if (target.startsWith('en-us')) {
    const us = voices.find(v => v.lang.toLowerCase().replace('_', '-') === 'en-us') ||
               voices.find(v => v.name.toLowerCase().includes('united states') || v.name.toLowerCase().includes('us english') || v.name.toLowerCase().includes('samantha'));
    if (us) return us;
  }

  // Fallback: any voice starting with target lang prefix
  return voices.find(v => v.lang.toLowerCase().replace('_', '-').startsWith(target)) || null;
};

export const playTTS = async (text: string, lang: string = 'en-US', forceStandardTTS: boolean = false) => {
  try {
    const saved = localStorage.getItem('vocabjoy_progress');
    if (saved) {
      const progress = JSON.parse(saved);
      if (progress.settings && progress.settings.soundEnabled === false) {
        return; // Don't play sound if disabled
      }
    }
  } catch (e) {
    // Ignore error
  }

  // Clean input text
  const cleanText = text.trim();
  if (!cleanText) return;

  if (!forceStandardTTS) {
    // System sounds
    if (cleanText === "Correct!") {
      new Audio("https://api.dictionaryapi.dev/media/pronunciations/en/correct-us.mp3").play().catch(console.error);
      return;
    }
    
    if (cleanText.startsWith("Oops") || cleanText === "Wrong!") {
      new Audio("https://api.dictionaryapi.dev/media/pronunciations/en/wrong-ca.mp3").play().catch(console.error);
      return;
    }

    // Try to get authentic audio from Dictionary API ONLY for US English single words.
    // For Australian English (en-AU) or British English (en-GB) or multi-words,
    // we bypass dictionary API to preserve authentic regional pronunciation through TTS!
    const cleanWord = cleanText.toLowerCase();
    if (lang === 'en-US' && !cleanWord.includes(' ')) {
      try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${cleanWord}`);
        const data = await response.json();
        if (Array.isArray(data) && data[0].phonetics) {
          const audioUrl = data[0].phonetics.find((p: any) => p.audio !== '')?.audio;
          if (audioUrl) {
            const audio = new Audio(audioUrl);
            audio.play().catch(console.error);
            return;
          }
        }
      } catch (e) {
        console.log('API Audio failed, falling back to TTS');
      }
    }
  }

  // Fallback / standard TTS using Web Speech API with regional voice selection
  if (typeof window === 'undefined' || !window.speechSynthesis) return;

  const utterance = new SpeechSynthesisUtterance(cleanText);
  utterance.lang = lang;
  utterance.rate = lang === 'en-AU' ? 0.88 : 0.9;

  const voice = getPreferredVoice(lang);
  if (voice) {
    utterance.voice = voice;
  }

  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
};
