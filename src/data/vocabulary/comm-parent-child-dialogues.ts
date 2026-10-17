import { Dialogue } from './comm-students-dialogues';
import { PARENT_CHILD_DIALOGUES_PART1 } from './comm-parent-child-dialogues-part1';
import { PARENT_CHILD_DIALOGUES_PART2 } from './comm-parent-child-dialogues-part2';

export const PARENT_CHILD_DIALOGUES: Record<string, Dialogue[]> = {
  ...PARENT_CHILD_DIALOGUES_PART1,
  ...PARENT_CHILD_DIALOGUES_PART2
};
