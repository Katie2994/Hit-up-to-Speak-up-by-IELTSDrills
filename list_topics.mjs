import fs from 'fs';

const content = fs.readFileSync('src/data/vocab.ts', 'utf-8');
const topics = [];

// Simple regex to extract id and title
let match;
const regex = /"id":\s*"(.*?)",\s*"title":\s*"(.*?)"/g;
while ((match = regex.exec(content)) !== null) {
  topics.push({ id: match[1], title: match[2] });
}

console.log(JSON.stringify(topics, null, 2));
