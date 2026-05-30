export const playTTS = async (text: string, lang: string = 'en-US') => {
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

  // System sounds
  if (text === "Correct!") {
    new Audio("https://api.dictionaryapi.dev/media/pronunciations/en/correct-us.mp3").play().catch(console.error);
    return;
  }
  
  if (text.startsWith("Oops") || text === "Wrong!") {
    new Audio("https://api.dictionaryapi.dev/media/pronunciations/en/wrong-ca.mp3").play().catch(console.error);
    return;
  }

  // Try to get authentic audio from Dictionary API for single words
  const cleanWord = text.trim().toLowerCase();
  if (!cleanWord.includes(' ')) {
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

  // Fallback to standard TTS
  if (!window.speechSynthesis) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = lang;
  utterance.rate = 0.9;
  window.speechSynthesis.cancel();
  window.speechSynthesis.speak(utterance);
};
