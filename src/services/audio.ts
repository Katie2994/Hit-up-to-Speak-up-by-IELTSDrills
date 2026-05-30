let correctAudio: HTMLAudioElement | null = null;
let incorrectAudio: HTMLAudioElement | null = null;

export const playCorrectSound = () => {
  if (!correctAudio) {
    correctAudio = new Audio('https://api.dictionaryapi.dev/media/pronunciations/en/match-uk.mp3');
    correctAudio.volume = 0.5;
  }
  correctAudio.currentTime = 0;
  correctAudio.play().catch(e => console.log('Audio play failed:', e));
};

export const playIncorrectSound = () => {
  if (!incorrectAudio) {
    incorrectAudio = new Audio('https://ahdictionary.com/application/resources/wavs/A0134200.wav');
    incorrectAudio.volume = 0.5;
  }
  incorrectAudio.currentTime = 0;
  incorrectAudio.play().catch(e => console.log('Audio play failed:', e));
};
