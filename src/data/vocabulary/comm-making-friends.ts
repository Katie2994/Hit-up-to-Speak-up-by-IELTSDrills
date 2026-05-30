import { Topic } from './types';
import { makingFriendsPart1 } from './comm-making-friends-part1';
import { makingFriendsPart2 } from './comm-making-friends-part2';

export const makingFriendsTopics: Topic[] = [
  ...makingFriendsPart1,
  ...makingFriendsPart2
];
