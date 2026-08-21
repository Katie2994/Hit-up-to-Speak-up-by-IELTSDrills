import { Topic } from './vocabulary/types';
export * from './vocabulary/types';

import { enrichTopics } from './vocabulary/enricher';

import { commTopics } from './vocabulary/comm-data';
import { howToSpeakTopics } from './vocabulary/comm-how-to-speak';
import { parentChildTopics } from './vocabulary/comm-parent-child';
import { specificStudents } from './vocabulary/comm-specific-students';
import { specificProfessionals } from './vocabulary/comm-specific-professionals';
import { specificBeauty } from './vocabulary/comm-specific-beauty';
import { specificFood } from './vocabulary/comm-food-restaurant';
import { makingFriendsTopics } from './vocabulary/comm-making-friends';
import { specificTopics } from './vocabulary/comm-specific';
import { slangTopics } from './vocabulary/slang-data';
import { lifeTopics } from './vocabulary/vocab-life';
import { clTopics } from './vocabulary/vocab-cl';
import { slTopics } from './vocabulary/vocab-sl';
import { phrasalTopics } from './vocabulary/vocab-phrasal';
import { idTopics } from './vocabulary/vocab-id';
import { fwTopics } from './vocabulary/vocab-fw';
import { lwTopics } from './vocabulary/vocab-lw';

// Map original categories to the new type-safe categories
const mapOldTopics = (topics: any[], category: string): Topic[] => {
  return topics.map(t => ({
    ...t,
    category: category as any,
    vietnameseTitle: t.title // Default to title if no translation exists
  }));
};

export const VOCAB_TOPICS: Topic[] = [
  ...howToSpeakTopics,
  ...commTopics,
  ...enrichTopics(parentChildTopics, 'Parent-Child'),
  ...enrichTopics(makingFriendsTopics, 'Making Friends'),
  ...enrichTopics(specificStudents, 'For Students'),
  ...enrichTopics(specificProfessionals, 'For Professionals'),
  ...enrichTopics(specificBeauty, 'Beauty'),
  ...specificFood,
  ...specificTopics,
  ...slangTopics,
  ...mapOldTopics(lifeTopics, 'Life'),
  ...mapOldTopics(clTopics, 'Collocations'),
  ...mapOldTopics(slTopics, 'Slang'), 
  ...mapOldTopics(phrasalTopics, 'PhrasalVerbs'),
  ...mapOldTopics(idTopics, 'Idioms'),
  ...mapOldTopics(fwTopics, 'Formal'),
  ...mapOldTopics(lwTopics, 'Literary'),
];

