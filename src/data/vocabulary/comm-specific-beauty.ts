import { Topic } from './types';
import { specificBeautyPart1 } from './comm-specific-beauty-part1';
import { specificBeautyPart2 } from './comm-specific-beauty-part2';
import { BEAUTY_DIALOGUES } from './comm-beauty-dialogues';
import { BEAUTY_STRUCTURES } from './comm-beauty-structures';

const rawBeauty: Topic[] = [
  ...specificBeautyPart1,
  ...specificBeautyPart2
];

export const specificBeauty: Topic[] = rawBeauty.map(topic => ({
  ...topic,
  dialogues: BEAUTY_DIALOGUES[topic.id] || topic.dialogues,
  structures: BEAUTY_STRUCTURES[topic.id] || topic.structures
}));
