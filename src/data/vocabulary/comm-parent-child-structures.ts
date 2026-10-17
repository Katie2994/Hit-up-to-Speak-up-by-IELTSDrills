import { Structure } from './types';
import { PARENT_CHILD_STRUCTURES_PART1 } from './comm-parent-child-structures-part1';
import { PARENT_CHILD_STRUCTURES_PART2 } from './comm-parent-child-structures-part2';

export const PARENT_CHILD_STRUCTURES: Record<string, Structure[]> = {
  ...PARENT_CHILD_STRUCTURES_PART1,
  ...PARENT_CHILD_STRUCTURES_PART2
};
