import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'src/data/vocabulary/vocab-sl.ts');
const fileContent = fs.readFileSync(filePath, 'utf-8');

const idStart = 'id: "sl_rev1",';
const indexOfId = fileContent.indexOf(idStart);

if (indexOfId !== -1) {
  const nextTarget = 'id: "sl_3",'; // Gen Z & TikTok? Let's check what id comes after sl_rev1.
  console.log("Found sl_rev1");
}

