import { Topic } from './types';
import { pvTopicsExtra } from './vocab-phrasal-extra';
import { pvTopicsExtra2 } from './vocab-phrasal-extra2';

export const allPvTopics: Topic[] = [
  ...pvTopicsExtra,
  ...pvTopicsExtra2
];
