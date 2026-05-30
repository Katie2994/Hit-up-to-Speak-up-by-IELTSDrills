export type Word = {
  id: string;
  word: string;
  ipa: string;
  definition: string;
  example: string;
  blankSentence: string;
  emoji: string;
};

export type Topic = {
  id: string;
  title: string;
  icon: string;
  color: string;
  description: string;
  words: ReadonlyArray<Word>;
};
