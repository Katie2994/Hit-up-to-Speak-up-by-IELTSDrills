import * as fs from 'fs';

const globalSlangs = [
  // American
  { w: "Piece of cake", d: "Dễ ợt (Mỹ - American)" },
  { w: "Hit the books", d: "Bắt đầu học chăm chỉ (Mỹ - American)" },
  { w: "Spill the beans", d: "Tiết lộ bí mật (Mỹ - American)" },
  // British
  { w: "Mate", d: "Bạn bè, chiến hữu (Anh - British)" },
  { w: "Cheeky", d: "Láu cá, trơ trẽn (Anh - British)" },
  { w: "Gutted", d: "Rất buồn, thất vọng (Anh - British)" },
  // Australian
  { w: "G'day", d: "Xin chào (Úc - Australian)" },
  { w: "Barbie", d: "Tiệc nướng BBQ (Úc - Australian)" },
  // Canadian
  { w: "Eh", d: "Hả, nhỉ (Canada)" },
  { w: "Loonie", d: "Đồng 1 đô la (Canada)" },
];

const internetSlangs = [
  ["LOL", "Cười lớn (Laugh Out Loud)"],
  ["BRB", "Quay lại ngay (Be Right Back)"],
  ["IMHO", "Theo ý kiến của tôi"],
  ["TL;DR", "Quá dài, không đọc"],
  ["FOMO", "Hội chứng sợ bỏ lỡ"],
  ["IRL", "Ngoài đời thực"],
  ["TBH", "Thành thật mà nói"],
  ["TFW", "Cảm giác khi..."],
  ["AFK", "Rời khỏi bàn phím"],
  ["SMH", "Lắc đầu ngán ngẩm"]
];

const genZSlangs = [
  ["Cap", "Nói dối"],
  ["No cap", "Sự thật, không đùa"],
  ["Ghost", "Ngó lơ, bơ ai đó"],
  ["Lit", "Tuyệt vời, cực đỉnh"],
  ["Salty", "Cay cú, ghen tức"],
  ["Sus", "Khả nghi (Suspicious)"],
  ["Vibe check", "Kiểm tra năng lượng"],
  ["Simp", "Người lụy tình"],
  ["Slay", "Làm rất tốt, xuất sắc"],
  ["Tea", "Tin đồn, chuyện phiếm"]
];

const workSlangs = [
  ["Circle back", "Quay lại vấn đề này sau"],
  ["Bandwidth", "Thời gian/khả năng xử lý"],
  ["Touch base", "Liên lạc, cập nhật"],
  ["On the same page", "Cùng chung quan điểm"],
  ["Deep dive", "Nghiên cứu kỹ lưỡng"],
  ["Ping me", "Nhắn tin cho tôi"],
  ["Synergy", "Sự hiệp lực"],
  ["Pushback", "Sự phản đối"],
  ["Think outside the box", "Suy nghĩ đột phá"],
  ["ASAP", "Càng sớm càng tốt"]
];

const datingSlangs = [
  ["Catfish", "Người giả mạo danh tính"],
  ["Red flag", "Dấu hiệu báo động"],
  ["Green flag", "Dấu hiệu tích cực"],
  ["Third wheel", "Kỳ đà cản mũi"],
  ["Dump", "Đá, chia tay"],
  ["Friend zone", "Chỉ làm bạn"],
  ["Breadcrumbing", "Thả thính nhưng không tiến tới"],
  ["Love bombing", "Dội bom tình yêu"],
  ["Crush", "Người thầm thương"],
  ["Bae", "Người yêu (Before Anyone Else)"]
];

function generateSlangs() {
  const topics: any[] = [];
  
  const buildTopic = (wordsList: string[][], id: string, title: string, color: string, icon: string, desc: string) => {
    return {
      id,
      title,
      icon,
      color,
      description: desc,
      words: wordsList.map((w, idx) => ({
        id: `${id}_w${idx+1}`,
        word: w[0],
        ipa: "/slæŋ/",
        definition: w[1],
        example: `You should learn to use '${w[0]}' naturally.`,
        blankSentence: `You should learn to use '___' naturally.`,
        emoji: "✌️"
      }))
    }
  };

  const t1 = {
    id: "sl_1",
    title: "Global Slangs",
    icon: "🌍",
    color: "#FFD166",
    description: "Từ lóng phổ biến ở Mỹ, Anh, Úc, và Canada",
    words: globalSlangs.map((w, idx) => ({
      id: `sl_1_w${idx+1}`,
      word: w.w,
      ipa: "/slæŋ/",
      definition: w.d,
      example: `You should learn to use '${w.w}' naturally.`,
      blankSentence: `You should learn to use '___' naturally.`,
      emoji: "✌️"
    }))
  };
  topics.push(t1);

  const t2 = buildTopic(internetSlangs, "sl_2", "Internet & Texting", "#118AB2", "💻", "Từ lóng trên mạng Internet");
  topics.push(t2);

  // Review 1 (Mỹ, Anh, Úc, Ca)
  topics.push({
    id: "sl_rev1",
    title: "Review 1: Global Slangs",
    icon: "🔄",
    color: "#06D6A0",
    description: "Ôn tập các từ lóng British, American, Úc và Canada",
    words: t1.words.map((w, i) => ({ ...w, id: `sl_rev1_w${i+1}` }))
  });

  const t3 = buildTopic(genZSlangs, "sl_3", "Gen Z & TikTok", "#EF476F", "📱", "Từ lóng giới trẻ Gen Z");
  const t4 = buildTopic(workSlangs, "sl_4", "Work & Office", "#073B4C", "💼", "Từ lóng công sở");
  topics.push(t3, t4);

  // Review 2
  topics.push({
    id: "sl_rev2",
    title: "Review 2: Internet & Gen Z",
    icon: "🔄",
    color: "#06D6A0",
    description: "Ôn tập từ lóng Mạng xã hội, Gen Z và Công sở",
    words: [
      ...t2.words.slice(0, 3),
      ...t3.words.slice(0, 4),
      ...t4.words.slice(0, 3),
    ].map((w, i) => ({ ...w, id: `sl_rev2_w${i+1}` }))
  });

  const t5 = buildTopic(datingSlangs, "sl_5", "Dating & Relationships", "#EE6C4D", "❤️", "Từ lóng chủ đề hẹn hò");
  topics.push(t5);

  return `import { Topic } from './types';\n\nexport const slTopics: Topic[] = ${JSON.stringify(topics, null, 2).replace(/"([^"]+)":/g, '$1:')};`;
}

fs.writeFileSync('./src/data/vocabulary/vocab-sl.ts', generateSlangs());

console.log('Done generating requested slangs.');
