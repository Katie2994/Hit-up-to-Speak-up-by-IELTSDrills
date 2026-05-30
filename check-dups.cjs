const fs = require('fs');

const files = ['src/data/vocab-life.ts', 'src/data/vocab-phrasal.ts', 'src/data/vocab-id.ts', 'src/data/vocab-ac.ts'];

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  const words = content.match(/"word":\s*"(.*?)"/g);
  if (!words) continue;
  
  const wordCounts = {};
  for (const w of words) {
    const word = w.match(/"word":\s*"(.*?)"/)[1].toLowerCase();
    wordCounts[word] = (wordCounts[word] || 0) + 1;
  }
  
  let duplicates = 0;
  for (const [word, count] of Object.entries(wordCounts)) {
    if (count > 1) {
      console.log(`${file}: Duplicated word '${word}' appears ${count} times.`);
      duplicates++;
    }
  }
  if (duplicates === 0) {
    console.log(`${file}: No duplicates found.`);
  }
}
fs.readFileSync('src/data/vocab-life.ts', 'utf8');
