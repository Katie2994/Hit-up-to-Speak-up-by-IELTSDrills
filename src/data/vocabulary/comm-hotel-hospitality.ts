import { Topic } from './types';
import { hotelTopicsPart1 } from './comm-hotel-part1';
import { hotelTopicsPart2 } from './comm-hotel-part2';

export const hotelTopics: Topic[] = [
  ...hotelTopicsPart1,
  ...hotelTopicsPart2
];
