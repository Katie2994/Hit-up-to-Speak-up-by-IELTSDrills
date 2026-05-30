import fs from 'fs';
import path from 'path';

const dir = './src/components';
const files = [
  'FillBlank.tsx', 'MemoryMatch.tsx', 'Quiz.tsx', 
  'WordBlast.tsx', 'WordFlood.tsx', 'WordSnake.tsx', 'WordTower.tsx'
];

for (const file of files) {
  const filePath = path.join(dir, file);
  if (!fs.existsSync(filePath)) continue;

  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Backgrounds
  content = content.replace(/bg-\[\#FAF9F6\]/g, 'bg-[#0D0D0D]');
  content = content.replace(/bg-white/g, 'bg-[#1A1A1A]');
  
  // Borders
  content = content.replace(/border-\[\#1A1A1A\]/g, 'border-[#333]');
  
  // Colors
  content = content.replace(/bg-\[\#FFE66D\]/g, 'bg-[#ffe36d]');
  content = content.replace(/text-\[\#FFE66D\]/g, 'text-[#ffe36d]');
  content = content.replace(/decoration-\[\#FFE66D\]/g, 'decoration-[#ffe36d]');
  
  content = content.replace(/bg-\[\#FF6B6B\]/g, 'bg-[#dc2323]');
  content = content.replace(/text-\[\#FF6B6B\]/g, 'text-[#dc2323]');
  content = content.replace(/decoration-\[\#FF6B6B\]/g, 'decoration-[#dc2323]');

  // Shadows
  content = content.replace(/shadow-\[.*?rgba\(26,26,26,1\).*?\]/g, 'shadow-lg');
  
  // Text colors
  // If inside bg-[#ffe36d] it needs to stay dark, but we can't contextually do that easily.
  // We'll replace text-[#1A1A1A] with text-white initially, but we might need to manually fix.
  content = content.replace(/text-\[\#1A1A1A\]/g, 'text-white');
  
  // Update generic border-2 to border for subtlety
  content = content.replace(/border-2/g, 'border');
  content = content.replace(/border-4/g, 'border');

  fs.writeFileSync(filePath, content);
  console.log('Updated ' + file);
}
