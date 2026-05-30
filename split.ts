import fs from 'fs';

const content = fs.readFileSync('./src/data/vocab.ts', 'utf-8');

// I will just use regex to parse out everything and save it.
// Actually, since it exports VOCAB_TOPICS directly, I can write a small ts script
// to do the splitting.
