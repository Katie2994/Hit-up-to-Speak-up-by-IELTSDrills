import * as fs from 'fs';

const clTopicsData = [
  { title: "Work & Career", words: ["Make a living", "Take on responsibility", "Work under pressure", "Meet a deadline", "Climb the career ladder"] },
  { title: "Education & Study", words: ["Take an exam", "Do research", "Attend a lecture", "Hand in an assignment", "Drop out of school"] },
  { title: "Family & Friends", words: ["Start a family", "Close-knit family", "Make friends", "Keep in touch", "Fall out with someone"] },
  { title: "Health & Medicine", words: ["Catch a cold", "Make a full recovery", "Take medicine", "Suffer from a condition", "Stay in shape"] },
  { title: "Travel & Vacations", words: ["Book a flight", "Go sightseeing", "Pack your bags", "Catch a train", "Set off on a journey"] },
  { title: "Money & Finance", words: ["Open a bank account", "Pay in cash", "Make a profit", "Go bankrupt", "Save up money"] },
  { title: "Food & Cooking", words: ["Grab a bite", "Have a sweet tooth", "Cook from scratch", "Go on a diet", "Eat a balanced meal"] },
  { title: "Weather & Climate", words: ["Heavy rain", "Strong wind", "Thick fog", "Biting cold", "Scorching heat"] },
  { title: "Technology & Internet", words: ["Surf the web", "Download a file", "Lose connection", "Back up data", "Upgrade software"] },
  { title: "Crime & Law", words: ["Commit a crime", "Break the law", "Serve time", "Plead guilty", "Arrest a suspect"] },
  { title: "Entertainment & Media", words: ["Watch a movie", "Listen to music", "Play a video game", "Read a book", "Go to a concert"] },
  { title: "Feelings & Emotions", words: ["Hurt someone's feelings", "Express your emotions", "Control your temper", "Show your gratitude", "Give up hope"] },
  { title: "Sports & Fitness", words: ["Play a sport", "Keep fit", "Win a match", "Break a record", "Score a goal"] },
  { title: "Houses & Homes", words: ["Rent an apartment", "Move into a house", "Do the chores", "Pay the rent", "Decorate a room"] },
  { title: "Clothes & Fashion", words: ["Follow a trend", "Dress up", "Try on clothes", "Wear a uniform", "Match an outfit"] },
  { title: "Character & Personality", words: ["Have a sense of humor", "Lose your temper", "Keep a secret", "Make a good impression", "Build character"] },
  { title: "Success & Failure", words: ["Achieve a goal", "Overcome an obstacle", "Make a breakthrough", "End in failure", "Face a challenge"] },
  { title: "Problems & Solutions", words: ["Solve a problem", "Face a dilemma", "Cause trouble", "Deal with an issue", "Find a solution"] },
  { title: "Time & Deadlines", words: ["Waste time", "Save time", "Run out of time", "Take your time", "Kill time"] },
  { title: "Ideas & Decisions", words: ["Make a decision", "Change your mind", "Come up with an idea", "Bear in mind", "Draw a conclusion"] },
  { title: "Changes & Trends", words: ["Make a change", "Adapt to a situation", "Start a trend", "Follow a pattern", "Transform a process"] },
  { title: "Relationships & Dating", words: ["Go on a date", "Fall in love", "Break up with someone", "Get engaged", "Get married"] },
  { title: "Business & Economy", words: ["Start a business", "Run a company", "Make a loss", "Invest money", "Boost the economy"] },
  { title: "Daily Routine", words: ["Wake up early", "Take a shower", "Have breakfast", "Go to work", "Get ready for bed"] }
];

function generateCollocations() {
  const topics: any[] = [];
  clTopicsData.forEach((tData, index) => {
    const i = index + 1;
    const topic = {
      id: `cl_${i}`,
      title: `Collocations: ${tData.title}`,
      icon: "🔗",
      color: "#EF476F",
      description: `Cụm từ tiếng Anh về ${tData.title}`,
      words: [] as any[]
    };
    tData.words.forEach((realWord, wIdx) => {
      const j = wIdx + 1;
      topic.words.push({
        id: `cl${i}_w${j}`,
        word: realWord,
        ipa: `/kɒləˈkeɪʃn/`,
        definition: `Cụm từ liên quan đến ${tData.title.split(' ')[0]}`,
        example: `We should ${realWord.toLowerCase()} as soon as possible.`,
        blankSentence: `We should ___ as soon as possible.`,
        emoji: "📚"
      });
    });
    topics.push(topic);
  });
  return `import { Topic } from './types';\n\nexport const clTopics: Topic[] = ${JSON.stringify(topics, null, 2).replace(/"([^"]+)":/g, '$1:')};`;
}

const slData = [
  {
    theme: "American Slangs",
    words: [
      ["Bite the dust", "Thất bại, chết"],
      ["Piece of cake", "Dễ ợt"],
      ["Break a leg", "Chúc may mắn"],
      ["Call it a day", "Nghỉ ngơi, kết thúc công việc"],
      ["Hit the books", "Bắt đầu học chăm chỉ"],
      ["Under the weather", "Cảm thấy bệnh"],
      ["Spill the beans", "Tiết lộ bí mật"],
      ["Cost an arm and a leg", "Giá rất đắt"],
      ["A dime a dozen", "Rất phổ biến, tầm thường"],
      ["Bite the bullet", "Cắn răng chịu đựng"]
    ]
  },
  {
    theme: "British Slangs",
    words: [
      ["Mate", "Bạn bè, chiến hữu"],
      ["Bloke", "Gã, anh chàng"],
      ["Knackered", "Kiệt sức"],
      ["Cheeky", "Láu cá, trơ trẽn"],
      ["Gutted", "Rất buồn, thất vọng"],
      ["Chuffed", "Rất vui mừng"],
      ["Banter", "Trêu đùa"],
      ["Quid", "Một bảng Anh (£1)"],
      ["Dodgy", "Không đáng tin, mờ ám"],
      ["Gobsmacked", "Vô cùng ngạc nhiên"]
    ]
  },
  {
    theme: "Australian Slangs",
    words: [
      ["G'day", "Xin chào"],
      ["Arvo", "Buổi chiều"],
      ["Barbie", "Tiệc nướng BBQ"],
      ["Bogan", "Người quê mùa, thô lỗ"],
      ["Crikey", "Trời đất ơi (khi kinh ngạc)"],
      ["Fair dinkum", "Thật không? Sự thật"],
      ["Mozzie", "Con muỗi"],
      ["Sickie", "Nghỉ ốm (có thể là giả vờ)"],
      ["Thongs", "Dép tông (flip-flops)"],
      ["Mate's rates", "Giá hữu nghị"]
    ]
  },
  {
    theme: "Canadian Slangs",
    words: [
      ["Eh", "Hả, nhỉ (đệm ở cuối câu)"],
      ["Toque", "Mũ len mùa đông"],
      ["Loonie", "Đồng 1 đô la Canada"],
      ["Toonie", "Đồng 2 đô la Canada"],
      ["Double-double", "Cà phê 2 sữa 2 đường"],
      ["Kerfuffle", "Sự xáo trộn, tranh cãi"],
      ["Keener", "Người quá hăng hái (có phần nịnh bợ)"],
      ["Hosers", "Kẻ ngốc nghếch (thường nhẹ nhàng)"],
      ["Two-four", "Thùng 24 lon bia"],
      ["Pop", "Nước ngọt có ga"]
    ]
  },
  {
    theme: "Internet & Texting Slangs",
    words: [
      ["LOL", "Cười lớn (Laugh Out Loud)"],
      ["BRB", "Quay lại ngay (Be Right Back)"],
      ["IMHO", "Theo ý kiến của tôi (In My Humble Opinion)"],
      ["TL;DR", "Quá dài, không đọc (Too Long; Didn't Read)"],
      ["FOMO", "Hội chứng sợ bỏ lỡ (Fear Of Missing Out)"],
      ["IRL", "Ngoài đời thực (In Real Life)"],
      ["TBH", "Thành thật mà nói (To Be Honest)"],
      ["TFW", "Cảm giác khi... (That Feeling When)"],
      ["AFK", "Rời khỏi bàn phím (Away From Keyboard)"],
      ["SMH", "Lắc đầu ngán ngẩm (Shaking My Head)"]
    ]
  },
  {
    theme: "Gen Z & TikTok Slangs",
    words: [
      ["Cap", "Nói dối"],
      ["No cap", "Sự thật, không đùa"],
      ["Ghost", "Ngó lơ, bơ ai đó"],
      ["Lit", "Tuyệt vời, cực đỉnh"],
      ["Salty", "Cay cú, ghen tức"],
      ["Sus", "Khả nghi (Suspicious)"],
      ["Vibe check", "Kiểm tra năng lượng, cảm xúc"],
      ["Simp", "Người lụy tình"],
      ["Slay", "Làm rất tốt, xuất sắc"],
      ["Tea", "Tin đồn, chuyện phiếm"]
    ]
  },
  {
    theme: "Work & Office Slangs",
    words: [
      ["Circle back", "Quay lại vấn đề này sau"],
      ["Bandwidth", "Khả năng, thời gian để xử lý"],
      ["Think outside the box", "Suy nghĩ đột phá"],
      ["Touch base", "Liên lạc, cập nhật tình hình"],
      ["On the same page", "Cùng chung tiếng nói, quan điểm"],
      ["Boil the ocean", "Làm việc bất khả thi"],
      ["Deep dive", "Nghiên cứu kỹ lưỡng"],
      ["Ping me", "Nhắn tin cho tôi"],
      ["Synergy", "Sự phối hợp, hiệp lực"],
      ["Pushback", "Sự phản đối, ý kiến trái chiều"]
    ]
  },
  {
    theme: "Dating & Relationships Slangs",
    words: [
      ["Catfish", "Người giả mạo danh tính trên mạng"],
      ["Red flag", "Dấu hiệu báo động, nguy hiểm"],
      ["Green flag", "Dấu hiệu tốt, tích cực"],
      ["Cuffing season", "Mùa bắt đầu kiếm người yêu (mùa đông)"],
      ["Third wheel", "Kỳ đà cản mũi"],
      ["Dump", "Đá, chia tay"],
      ["Friend zone", "Chỉ làm bạn"],
      ["DTR", "Xác định mối quan hệ (Define The Relationship)"],
      ["Breadcrumbing", "Thả thính nhưng không tiến tới"],
      ["Love bombing", "Dội bom tình yêu (quan tâm quá mức)"]
    ]
  }
];

function generateSlangs() {
  const topics: any[] = [];
  
  const buildTopic = (data: any, id: string, title: string, color: string) => {
    return {
      id,
      title,
      icon: "😎",
      color,
      description: `Từ lóng chủ đề: ${data.theme}`,
      words: data.words.map((w: string[], idx: number) => ({
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

  const t1 = buildTopic(slData[0], "sl_1", slData[0].theme, "#FFD166");
  const t2 = buildTopic(slData[1], "sl_2", slData[1].theme, "#FFD166");
  const t3 = buildTopic(slData[2], "sl_3", slData[2].theme, "#FFD166");
  const t4 = buildTopic(slData[3], "sl_4", slData[3].theme, "#FFD166");
  topics.push(t1, t2, t3, t4);

  const review1Words = [
    ...t1.words.slice(0, 3), 
    ...t2.words.slice(0, 3),
    ...t3.words.slice(0, 2),
    ...t4.words.slice(0, 2)
  ].map((w, i) => ({ ...w, id: `sl_rev1_w${i+1}` }));
  
  topics.push({
    id: "sl_rev1",
    title: "Review: Global Slangs",
    icon: "🌍",
    color: "#06D6A0",
    description: "Ôn tập các từ lóng theo quốc gia (Mỹ, Anh, Úc, Canada)",
    words: review1Words
  });

  const t5 = buildTopic(slData[4], "sl_5", slData[4].theme, "#118AB2");
  const t6 = buildTopic(slData[5], "sl_6", slData[5].theme, "#118AB2");
  const t7 = buildTopic(slData[6], "sl_7", slData[6].theme, "#118AB2");
  const t8 = buildTopic(slData[7], "sl_8", slData[7].theme, "#118AB2");
  topics.push(t5, t6, t7, t8);

  const review2Words = [
    ...t5.words.slice(0, 3),
    ...t6.words.slice(0, 3),
    ...t7.words.slice(0, 2),
    ...t8.words.slice(0, 2)
  ].map((w, i) => ({ ...w, id: `sl_rev2_w${i+1}` }));
  
  topics.push({
    id: "sl_rev2",
    title: "Review: Modern & Digital Slangs",
    icon: "📱",
    color: "#06D6A0",
    description: "Ôn tập các từ lóng hiện đại, internet và tiếng lóng Gen Z",
    words: review2Words
  });

  return `import { Topic } from './types';\n\nexport const slTopics: Topic[] = ${JSON.stringify(topics, null, 2).replace(/"([^"]+)":/g, '$1:')};`;
}

fs.writeFileSync('./src/data/vocabulary/vocab-cl.ts', generateCollocations());
fs.writeFileSync('./src/data/vocabulary/vocab-sl.ts', generateSlangs());

console.log('Done generating slang and collocation files.');
