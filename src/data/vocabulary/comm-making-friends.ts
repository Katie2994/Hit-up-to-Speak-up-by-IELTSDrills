import { Topic } from './types';
import { makingFriendsPart1 } from './comm-making-friends-part1';
import { makingFriendsPart2 } from './comm-making-friends-part2';
import { FRIENDS_DIALOGUES } from './comm-friends-dialogues';
import { FRIENDS_STRUCTURES } from './comm-friends-structures';

const rawFriends: Topic[] = [
  ...makingFriendsPart1,
  ...makingFriendsPart2
];

export const makingFriendsTopics: Topic[] = rawFriends.map(topic => ({
  ...topic,
  dialogues: FRIENDS_DIALOGUES[topic.id] || topic.dialogues,
  structures: FRIENDS_STRUCTURES[topic.id] || topic.structures
}));
