import fs from 'fs';
import { VOCAB_TOPICS } from './src/data/vocab.ts';

const lifeTopics = VOCAB_TOPICS.filter(t => t.id.startsWith('dl_'));
const verbTopics = VOCAB_TOPICS.filter(t => t.id.startsWith('pv_'));
const basicTopics = VOCAB_TOPICS.filter(t => t.id.startsWith('bw_'));
const idiomTopics = VOCAB_TOPICS.filter(t => t.id.startsWith('id_'));
const academicTopics = VOCAB_TOPICS.filter(t => t.id.startsWith('aw_'));

// Wait, let's extract their IDs to be sure what prefixes they use.
const counts = {
  dl: lifeTopics.length,
  pv: verbTopics.length,
  bw: basicTopics.length,
  id: idiomTopics.length,
  aw: academicTopics.length,
  other: VOCAB_TOPICS.filter(t => !['dl_','pv_','bw_','id_','aw_'].includes(t.id.substring(0, 3))).length
};

console.log(counts);
