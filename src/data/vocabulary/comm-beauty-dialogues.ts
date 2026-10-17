import { Dialogue } from './comm-students-dialogues';
import { BEAUTY_DIALOGUES_PART1 } from './comm-beauty-dialogues-part1';
import { BEAUTY_DIALOGUES_PART2 } from './comm-beauty-dialogues-part2';

export const BEAUTY_DIALOGUES: Record<string, Dialogue[]> = {
  ...BEAUTY_DIALOGUES_PART1,
  ...BEAUTY_DIALOGUES_PART2
};
