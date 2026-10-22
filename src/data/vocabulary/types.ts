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
    type: 'chunking' | 'intonation' | 'stress' | 'connected_speech' | 'ipa_vowels' | 'ipa_consonants' | 'ending_sounds' | 'minimal_pairs' | 'pronunciation_tips' | 'silent_letters' | 'elision' | 'accents';
    title: string;
    description: string;
    theory?: string; // Additional detailed explanation
    embarrassingTraps?: {
      targetPhrase: string;
      mistakeSound: string;
      correctSentence: string;
      correctMeaning: string;
      trapSentence: string;
      trapMeaning: string;
      explanation: string;
    }[];
    strongWeakPairs?: {
      word: string;
      role: string;
      weakForm: string;
      weakExample: string;
      weakExampleIpa: string;
      weakNote: string;
      strongForm: string;
      strongExample: string;
      strongExampleIpa: string;
      strongNote: string;
    }[];
    tips?: {
      number: number;
      title: string;
      icon: string;
      tag: string;
      explanation: string;
      exampleWord1: string;
      ipa1: string;
      meaning1: string;
      exampleWord2: string;
      ipa2: string;
      meaning2: string;
      practiceSentence: string;
      practiceTranslation: string;
      actionTip: string;
    }[];
    silentLetterGroups?: {
      letter: string;
      rule: string;
      explanation: string;
      words: {
        word: string;
        ipa: string;
        translation: string;
        silentChar: string;
        note?: string;
      }[];
      practiceSentence: string;
      practiceTranslation: string;
    }[];
    elisionGroups?: {
      category: string;
      rule: string;
      explanation: string;
      examples: {
        original: string;
        elided: string;
        ipaOriginal: string;
        ipaElided: string;
        context: string;
      }[];
      practiceSentence: string;
      practiceTranslation: string;
    }[];
    accentGroups?: {
      accentName: string;
      region: string;
      flag: string;
      description: string;
      keyTraits: string[];
      comparisons: {
        wordOrPhrase: string;
        usIpa: string;
        ukIpa: string;
        auIpa?: string;
        explanation: string;
      }[];
      sampleSentence: string;
      sampleTranslation: string;
      culturalNote?: string;
    }[];
    items?: {
      sentence: string;
      translation: string;
      // For chunking: the sentence divided into chunks
      chunks?: { text: string; pause: boolean }[];
      // For intonation/stress: the sentence divided into words with pitch markers
      words?: { text: string; pitch?: 'rising' | 'falling' | 'flat'; stress?: boolean; linkToNext?: boolean }[];
      // For IPA sounds, ending sounds & minimal pairs
      sound?: string;
      ipa?: string;
      mouthShape?: string;
      rule?: string;
      tip?: string;
      examples?: { word: string; ipa: string; translation: string }[];
      pairA?: { word: string; ipa: string; translation: string };
      pairB?: { word: string; ipa: string; translation: string };
      note?: string;
    }[];
  }[];
};
