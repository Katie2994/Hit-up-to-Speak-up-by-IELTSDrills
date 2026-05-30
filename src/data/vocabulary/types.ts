export type Word = {
  id: string;
  word: string;
  ipa: string;
  definition: string;
  translation?: string; // Optional Vietnamese translation
  example: string;
  blankSentence: string;
  emoji: string;
};

export type Structure = {
  phrase: string;
  meaning: string;
  vietnamese: string;
  casual?: string;
  id?: string;
  business?: { phrase: string; example: string; translation: string };
  casualStyle?: { phrase: string; example: string; translation: string };
  superCasual?: { phrase: string; example: string; translation: string };
};

export type Topic = {
  id: string;
  title: string;
  vietnameseTitle?: string;
  category?: 'Communication' | 'Slang' | 'Business' | 'General' | 'Life' | 'Collocations' | 'Idioms' | 'Academic' | 'PhrasalVerbs' | 'Formal' | 'Literary';
  subCategory?: string | string[];
  icon: string;
  color: string;
  description: string;
  words: ReadonlyArray<Word>;
  structures?: ReadonlyArray<Structure>;
  idioms?: ReadonlyArray<Structure>;
  videoUrl?: string;
  homework?: string[];
  prepare?: string[];
  dialogues?: {
    type: 'pair' | 'group';
    title: string;
    school?: 'business' | 'casual' | 'superCasual';
    participants: { name: string; avatar: string; role?: string }[];
    lines: { participant: string; text: string; translation?: string }[];
  }[];
  howToSpeak?: {
    type: 'chunking' | 'intonation' | 'stress' | 'connected_speech';
    title: string;
    description: string;
    theory?: string; // Additional detailed explanation
    items: {
      sentence: string;
      translation: string;
      // For chunking: the sentence divided into chunks
      chunks?: { text: string; pause: boolean }[];
      // For intonation/stress: the sentence divided into words with pitch markers
      words?: { text: string; pitch?: 'rising' | 'falling' | 'flat'; stress?: boolean; linkToNext?: boolean }[];
    }[];
  }[];
};
