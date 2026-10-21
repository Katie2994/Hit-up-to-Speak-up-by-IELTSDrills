export interface SoundDetail {
  symbol: string;
  word: string;
  ipa: string;
  type: 'monophthong' | 'diphthong' | 'consonant';
  length?: 'long' | 'short';
  voiced?: boolean;
  place?: string;
  manner?: string;
  vietnameseComparison: string;
  examples: string[];
  howToPronounce: string;
  notes?: string;
  drawParams?: any;
}

export const VOWEL_QUAD_ROWS = [
  { label: 'Cao', front: 'iː', central: '', back: 'uː' },
  { label: 'Gần cao', front: 'ɪ', central: '', back: 'ʊ' },
  { label: 'Giữa-cao', front: 'e', central: '', back: '' },
  { label: 'Trung tâm', front: '', central: 'ə / ɜː', back: '' },
  { label: 'Giữa-thấp', front: '', central: 'ʌ', back: 'ɔː' },
  { label: 'Gần thấp', front: 'æ', central: '', back: 'ɒ' },
  { label: 'Thấp', front: '', central: '', back: 'ɑː' }
];

export const DIPHTHONG_KEYS = ['ɪə', 'eɪ', 'ʊə', 'ɔɪ', 'əʊ', 'eə', 'aɪ', 'aʊ'];

export const CONSONANT_PLACES = [
  'Môi–môi',
  'Môi–răng',
  'Răng',
  'Lợi',
  'Sau lợi',
  'Vòm cứng',
  'Ngạc mềm',
  'Môi–ngạc mềm',
  'Thanh hầu'
];

export const CONSONANT_ROWS = [
  { label: 'Tắc', cells: { 'Môi–môi': ['p', 'b'], 'Lợi': ['t', 'd'], 'Ngạc mềm': ['k', 'g'] } },
  { label: 'Tắc–xát', cells: { 'Sau lợi': ['tʃ', 'dʒ'] } },
  { label: 'Xát', cells: { 'Môi–răng': ['f', 'v'], 'Răng': ['θ', 'ð'], 'Lợi': ['s', 'z'], 'Sau lợi': ['ʃ', 'ʒ'], 'Thanh hầu': ['h'] } },
  { label: 'Mũi', cells: { 'Môi–môi': ['m'], 'Lợi': ['n'], 'Ngạc mềm': ['ŋ'] } },
  { label: 'Tiếp cận / bên', cells: { 'Lợi': ['l'], 'Sau lợi': ['r'], 'Vòm cứng': ['j'], 'Môi–ngạc mềm': ['w'] } }
];

export const PL_LABELS: Record<string, string> = {
  lips: 'Hai môi',
  ld: 'Răng trên – môi dưới',
  dent: 'Lưỡi giữa hai răng',
  alv: 'Đầu lưỡi – lợi trên',
  post: 'Đầu lưỡi – sau lợi',
  rr: 'Lưỡi cong, không chạm',
  w: 'Hai môi chu tròn',
  pal: 'Giữa lưỡi – vòm cứng',
  vel: 'Gốc lưỡi – vòm mềm',
  glot: 'Thanh hầu'
};

const M = (o: number, r: number, h: number, b: number) => ({ o, r, h, b });

export const VOWEL_DATA: Record<string, [string, string, { o: number; r: number; h: number; b: number }, string]> = {
  'iː': ['sheep', '/ʃiːp/', M(0.15, 0, 0.95, 0.15), 'Nguyên âm trước, cao; môi thường hơi kéo ngang, lưỡi nâng cao phía trước. Giữ âm dài và có độ căng; không chỉ là “i tiếng Việt kéo dài”.'],
  'ɪ': ['ship', '/ʃɪp/', M(0.28, 0, 0.78, 0.22), 'Nguyên âm trước gần cao; lưỡi thấp hơn và cơ miệng thư giãn hơn /iː/. Khác nhau cả về chất âm lẫn độ dài, âm ngắn dứt khoát.'],
  'ʊ': ['good', '/ɡʊd/', M(0.3, 0.55, 0.72, 0.82), 'Nguyên âm sau gần cao; môi tròn nhẹ đến vừa, lưỡi thấp hơn /uː/. Đừng ép môi chu quá mức hoặc chỉ rút ngắn /uː/.'],
  'uː': ['shoot', '/ʃuːt/', M(0.18, 0.75, 0.93, 0.9), 'Nguyên âm sau cao; môi thường tròn, chu ra, lưỡi nâng cao phía sau. Giữ chất âm rõ và kéo dài.'],
  'e': ['bed', '/bed/', M(0.42, 0, 0.58, 0.18), 'Nguyên âm trước giữa-cao; môi không tròn, hàm mở vừa. So sánh với “e” tiếng Việt chỉ là mẹo gần đúng.'],
  'ə': ['teacher', '/ˈtiːtʃə/', M(0.35, 0, 0.48, 0.48), 'Schwa: nguyên âm trung tâm quan trọng nhất trong tiếng Anh! Môi và lưỡi thả lỏng hoàn toàn; âm rất ngắn và nhẹ, xuất hiện ở âm tiết không nhấn.'],
  'ɜː': ['bird', '/bɜːd/', M(0.38, 0, 0.52, 0.5), 'Nguyên âm trung tâm, không tròn môi, dài và trầm. Trong giọng Mỹ thường có âm rhotic r-colored /ɝː/ rõ rệt.'],
  'ɔː': ['door', '/dɔː/', M(0.48, 0.65, 0.42, 0.88), 'Nguyên âm sau, môi tròn, miệng mở vừa, lưỡi lùi sau. Giữ âm dài và tròn; tránh đọc thành “ô/oa” phẳng.'],
  'æ': ['cat', '/kæt/', M(0.82, 0, 0.25, 0.18), 'Nguyên âm trước gần thấp; hạ hàm dưới sâu rõ rệt, môi hơi kéo ngang, lưỡi thấp trước. Mẹo: nói “e” nhưng há miệng thật to.'],
  'ʌ': ['up', '/ʌp/', M(0.58, 0, 0.32, 0.48), 'Nguyên âm trung tâm hoặc hơi lùi, gần thấp-trung, không tròn môi. Âm rất ngắn và dứt; gần giống “cấp/bất” nhưng ngắn gọn.'],
  'ɑː': ['far', '/fɑː/', M(0.88, 0, 0.12, 0.82), 'Nguyên âm thấp, sau, không tròn môi; hàm mở rộng tối đa, âm dài và trầm từ sâu trong khoang miệng.'],
  'ɒ': ['on', '/ɒn/', M(0.82, 0.5, 0.16, 0.84), 'Nguyên âm thấp, sau, môi hơi tròn trong Anh–Anh truyền thống. Giọng Mỹ thường phát âm gần /ɑ/ trong hot, on.']
};

export const DIPHTHONG_DATA: Record<string, [string, string, string, string, string]> = {
  'ɪə': ['here', '/hɪə/', 'ɪ', 'ə', 'Bắt đầu gần /ɪ/ rồi trượt mượt mà về /ə/. Giọng Mỹ thường có xu hướng r-hóa: here /hɪr/.'],
  'eɪ': ['wait', '/weɪt/', 'e', 'ɪ', 'Bắt đầu ở vùng /e/ rồi trượt lên /ɪ/. Tạo chuyển động môi hàm liên tục, đừng đọc thành “êi” phẳng tách rời.'],
  'ʊə': ['tourist', '/ˈtʊərɪst/', 'ʊ', 'ə', 'Bắt đầu gần /ʊ/ rồi trượt về /ə/. Trong tiếng Anh hiện đại âm này thường có thể thay đổi hoặc thêm /r/ tùy vùng.'],
  'ɔɪ': ['boy', '/bɔɪ/', 'ɔː', 'ɪ', 'Bắt đầu ở vùng nguyên âm sau mở /ɔː/ và trượt nhanh lên phía /ɪ/.'],
  'əʊ': ['show', '/ʃəʊ/', 'ə', 'ʊ', 'Trong Anh-Anh bắt đầu ở trung tâm /ə/ rồi trượt về /ʊ/. Trong Anh-Mỹ thường ghi /oʊ/; người Việt hay nhầm thành “ô” một nguyên âm.'],
  'eə': ['hair', '/heə/', 'e', 'ə', 'Bắt đầu gần /e/ rồi mở nhẹ về /ə/. Giọng Mỹ thường phát âm là /er/ rõ âm r.'],
  'aɪ': ['my', '/maɪ/', 'a', 'ɪ', 'Bắt đầu bằng nguyên âm mở thấp rồi trượt vuốt lên /ɪ/. Miệng và hàm thay đổi rõ rệt trong suốt quá trình phát âm.'],
  'aʊ': ['cow', '/kaʊ/', 'a', 'ʊ', 'Bắt đầu bằng /a/ mở rộng rồi trượt về /ʊ/, môi tròn dần về cuối. Đừng đọc thành “ao” tiếng Việt không chuyển động môi.']
};

export const CONSONANT_DATA: Record<string, [string, string, string, string, number, string]> = {
  'p': ['pea', '/piː/', 'lips', 'Tắc', 0, 'Giống “p” cuối từ; đầu từ hai môi khép chặt rồi bật hơi mạnh (đưa tờ giấy trước miệng sẽ bay phấp phới), không rung dây thanh.'],
  'b': ['boat', '/bəʊt/', 'lips', 'Tắc', 1, 'Gần “b” tiếng Việt, hai môi khép rồi bật, dây thanh rung rõ rệt trong cổ họng.'],
  't': ['tea', '/tiː/', 'alv', 'Tắc', 0, 'Khác hoàn toàn “t” Việt: đầu lưỡi chạm mặt sau lợi trên và bật hơi mạnh ở đầu từ; cuối từ phải chốt chạm lợi rồi ngắt.'],
  'd': ['dog', '/dɒɡ/', 'alv', 'Tắc', 1, 'Gần “đ” tiếng Việt, đầu lưỡi chạm lợi trên, bật nhẹ và rung cổ họng.'],
  'tʃ': ['cheese', '/tʃiːz/', 'post', 'Tắc–xát', 0, 'Tắc-xát vô thanh kết hợp /t/ + /ʃ/: đầu lưỡi sau lợi, môi hơi chu và bật hơi mạnh; chú ý không nuốt âm cuối trong watch, catch.'],
  'dʒ': ['June', '/dʒuːn/', 'post', 'Tắc–xát', 1, 'Tắc-xát hữu thanh: khẩu hình giống /tʃ/ nhưng dây thanh rung mạnh trong cổ; không có âm tương đương hoàn toàn trong tiếng Việt.'],
  'k': ['car', '/kɑː/', 'vel', 'Tắc', 0, 'Gần “c/k”, gốc lưỡi chạm vòm mềm rồi bật hơi mạnh; cuối từ phải chốt gốc lưỡi (back, cat).'],
  'g': ['go', '/ɡəʊ/', 'vel', 'Tắc', 1, 'Gần “g” (gờ), gốc lưỡi chạm vòm mềm, bật ra và rung dây thanh.'],
  'f': ['fly', '/flaɪ/', 'ld', 'Xát', 0, 'Khác “ph” tiếng Việt: răng cửa trên chạm nhẹ môi dưới, thổi luồng hơi xát qua khe răng; không rung cổ.'],
  'v': ['video', '/ˈvɪdiəʊ/', 'ld', 'Xát', 1, 'Răng trên chạm nhẹ bờ môi dưới, thổi hơi đồng thời rung mạnh cổ họng; tuyệt đối tránh đọc nhầm thành “w” hay “d”.'],
  'θ': ['think', '/θɪŋk/', 'dent', 'Xát', 0, 'Âm vô thanh không có trong tiếng Việt: đặt nhẹ đầu lưỡi thò ra giữa hai hàm răng, thổi luồng hơi qua. Không đọc thành /t/ hay /s/.'],
  'ð': ['this', '/ðɪs/', 'dent', 'Xát', 1, 'Âm hữu thanh: đặt lưỡi thò nhẹ giữa hai hàm răng như /θ/ nhưng rung mạnh dây thanh. Tránh đọc thành /d/ hay /z/.'],
  's': ['see', '/siː/', 'alv', 'Xát', 0, 'Giống “x” miền Bắc, luồng hơi xì sắc bén qua khe đầu lưỡi và lợi trên; ở cuối từ (bus, miss) bắt buộc phải phát rõ.'],
  'z': ['zoo', '/zuː/', 'alv', 'Xát', 1, 'Vị trí cấu âm giống /s/ nhưng rung dây thanh liên tục; tiếng Việt không có âm này nên người học thường hay quên rung.'],
  'ʃ': ['shall', '/ʃæl/', 'post', 'Xát', 0, 'Giống âm “s” miền Nam trong “sáng”, môi hơi chu tròn, thân lưỡi nâng gần vòm cứng, luồng hơi xát mạnh.'],
  'ʒ': ['television', '/ˈtelɪvɪʒn/', 'post', 'Xát', 1, 'Khẩu hình giống /ʃ/ nhưng rung dây thanh; thường nằm giữa từ (vision, measure, pleasure) hoặc cuối từ mượn.'],
  'm': ['man', '/mæn/', 'lips', 'Mũi', 1, 'Hai môi khép chặt hoàn toàn, luồng hơi thoát ra qua đường mũi; ở cuối từ (team, home) phải ngậm môi lại.'],
  'n': ['now', '/naʊ/', 'alv', 'Mũi', 1, 'Đầu lưỡi chạm lợi trên chặn đường miệng, luồng hơi thoát qua mũi; âm cuối (ten, pen) lưỡi phải chạm lợi.'],
  'ŋ': ['sing', '/sɪŋ/', 'vel', 'Mũi', 1, 'Gốc lưỡi nâng chạm vòm mềm, hơi qua mũi; lưu ý không bật thêm /g/ ở sau thành “sinh-gờ”.'],
  'h': ['hat', '/hæt/', 'glot', 'Xát', 0, 'Giống “h” tiếng Việt, luồng hơi nhẹ nhàng thoát ra từ thanh môn, không rung dây thanh.'],
  'l': ['love', '/lʌv/', 'alv', 'Bên', 1, 'Đầu lưỡi chạm lợi trên, hơi luồn qua hai bên lưỡi. Cuối từ là “dark L” [ɫ] (full, feel) cuống lưỡi nâng nhẹ, không bỏ quên.'],
  'r': ['red', '/red/', 'rr', 'Tiếp cận', 1, 'Ký hiệu phiên âm đại diện cho [ɹ]: nâng hoặc kéo nhẹ lưỡi về sau vòm miệng nhưng không chạm và không rung lật đầu lưỡi như tiếng Việt.'],
  'w': ['wet', '/wet/', 'w', 'Tiếp cận', 1, 'Chu tròn môi đồng thời nâng phần sau lưỡi về phía vòm mềm, rồi chuyển nhanh sang nguyên âm; không cắn môi đọc thành /v/.'],
  'j': ['yes', '/jes/', 'pal', 'Tiếp cận', 1, 'Gần âm đầu “y” trong “yêu” tiếng Việt: mặt lưỡi nâng gần vòm cứng; lưu ý ký hiệu /j/ không phải âm /dʒ/.']
};

export const CONSONANT_PARAMS: Record<string, any> = {
  lips: { o: 0, r: 0, h: 0.3, b: 0.5, lo: 48, ll: 43 },
  ld: { o: 0.1, r: 0, h: 0.3, b: 0.5, ll: 46 },
  dent: { o: 0.2, r: 0, h: 0.4, b: 0.3, tx: 27, ty: 50, hx: 62, hy: 54 },
  alv: { o: 0.2, r: 0, h: 0.8, b: 0.2, tx: 36, ty: 41, hx: 62, hy: 48 },
  post: { o: 0.2, r: 0.5, h: 0.8, b: 0.3, tx: 50, ty: 36, hx: 76, hy: 46 },
  rr: { o: 0.3, r: 0.4, h: 0.6, b: 0.5, tx: 52, ty: 44, hx: 82, hy: 50 },
  w: { o: 0.3, r: 1, h: 0.8, b: 0.9 },
  pal: { o: 0.25, r: 0, h: 0.9, b: 0.6, tx: 34, ty: 58, hx: 78, hy: 32 },
  vel: { o: 0.3, r: 0, h: 0.9, b: 0.9, tx: 34, ty: 62, hx: 102, hy: 31 },
  glot: { o: 0.4, r: 0, h: 0.3, b: 0.5 }
};

export const SOUND_DETAILS_EXTENDED: Record<string, [string, string, string]> = {
  'ɪ': [
    'sit, hit, ship, live, busy, minute',
    'Miệng mở vừa, môi thư giãn, lưỡi nâng lên nhưng không cao như /iː/. Âm ngắn, dứt nhanh gọn gàng.',
    'Dễ nhầm với /iː/ (seat). Mẹo: /ɪ/ “thả lỏng – ngắn – nhanh”, /iː/ “căng mép – kéo dài”.'
  ],
  'e': [
    'pen, bed, head, friend, check',
    'Miệng mở nhẹ, môi hơi dẹt sang hai bên, lưỡi ở vị trí trước – trung bình. Phát âm ngắn và rõ.',
    'Đừng mở miệng quá to như “e” kéo dài tiếng Việt, chỉ cần mở vừa và dứt nhanh.'
  ],
  'æ': [
    'cat, man, black, apple, hand',
    'Miệng mở rộng, hàm dưới hạ rõ rệt xuống sâu, môi hơi kéo ngang, lưỡi thấp ở phía trước.',
    'Rất dễ nhầm với /e/ (nếu chưa há đủ rộng) và /ɑː/ (car). Mẹo: nói “e” nhưng há miệng to như đang khám răng.'
  ],
  'ʌ': [
    'cup, bus, love, sun, money, cut',
    'Miệng mở vừa, lưỡi ở vùng giữa – hơi lùi nhẹ, âm phát ra rất ngắn, dứt khoát.',
    'Người Việt hay đọc thành /a/. Hãy nghĩ tới nguyên âm trong “cấp, bất” nhưng ngắn và dứt điểm.'
  ],
  'ɒ': [
    'hot, not, rock, box, coffee',
    'Môi hơi tròn nhẹ, miệng mở vừa, lưỡi thấp về phía sau.',
    'Nhiều giọng Mỹ dùng /ɑ/ trong hot, nhưng cách phát âm chuẩn Anh giữ tròn môi nhẹ.'
  ],
  'ʊ': [
    'book, put, cook, look, foot, good',
    'Môi hơi tròn nhẹ, lưỡi nâng lên nhưng thấp hơn /uː/. Âm ngắn, không kéo dài.',
    'Dễ nhầm với /uː/ (food). Không nên chu môi quá sâu.'
  ],
  'ə': [
    'about /əˈbaʊt/, teacher /ˈtiːtʃə/, sofa /ˈsəʊfə/, banana /bəˈnænə/',
    'Miệng hoàn toàn thả lỏng, môi và lưỡi thư giãn như không cần làm gì. Âm cực kỳ ngắn và nhẹ.',
    'Âm xuất hiện nhiều nhất trong tiếng Anh! Cực kỳ quan trọng cho nối âm, giảm âm và nhịp điệu tự nhiên.'
  ],
  'iː': [
    'see, eat, teacher, sheep, keep, believe',
    'Môi kéo ngang dẹt sang hai bên như đang cười mỉm, lưỡi nâng cao về phía trước. Giữ âm căng và dài.',
    'So với /ɪ/: /iː/ căng hơn gấp đôi và dài hơn gấp đôi. Tuyệt đối không đọc thành âm ngắn.'
  ],
  'ɑː': [
    'car, star, heart, father, calm, hard',
    'Miệng mở rộng, cuống lưỡi thấp lùi về sau, môi thư giãn. Âm ngân dài và trầm từ cuống họng.',
    'So với /æ/: /æ/ mở hàm ở phía trước, còn /ɑː/ mở sâu lùi về phía sau.'
  ],
  'ɔː': [
    'talk, wall, thought, law, water, sport',
    'Môi tròn rõ rệt, miệng mở vừa, lưỡi lùi về sau. Âm ngân dài và tròn trịa.',
    'Người Việt hay đọc thành “ô/oa” phẳng; cần giữ khuôn môi tròn đều đặn.'
  ],
  'uː': [
    'blue, food, school, moon, shoe, choose',
    'Môi tròn chu rõ rệt về phía trước, cuống lưỡi nâng cao về phía sau. Âm căng và dài.',
    'So với /ʊ/: /uː/ tròn môi hơn, căng hơn và dài gấp đôi.'
  ],
  'ɜː': [
    'bird, word, learn, girl, first, perfect',
    'Lưỡi ở vùng trung tâm hơi lùi, miệng mở vừa, môi thả lỏng không tròn. Âm ngân dài.',
    'Giọng Mỹ thường cuộn hoặc kéo nhẹ lưỡi về sau tạo âm rhotic /ɝː/ rất đặc trưng.'
  ],
  'eɪ': [
    'face, name, day, break, play, rain',
    'Bắt đầu từ âm /e/, lướt mượt mà lên /ɪ/. Chuyển động miệng liên tục.',
    'Đừng đọc “êi” phẳng lì; hãy để hàm khép dần lại khi lướt lên /ɪ/.'
  ],
  'aɪ': [
    'time, like, my, high, night, dry',
    'Bắt đầu từ âm mở rộng /a/ rồi trượt vuốt lên /ɪ/. Môi và hàm thay đổi rõ rệt.',
    'Đừng đọc “ai” phẳng của tiếng Việt; hãy tạo nhịp lướt uyển chuyển.'
  ],
  'ɔɪ': [
    'boy, toy, choice, voice, enjoy, oil',
    'Bắt đầu từ âm tròn môi /ɔː/ rồi trượt nhanh và mượt về phía /ɪ/.',
    'Cần giữ tròn môi ở đầu âm rồi mới mở khóe môi sang âm /ɪ/.'
  ],
  'aʊ': [
    'now, house, about, mouth, loud, brown',
    'Bắt đầu mở to ở âm /a/, trượt dần về /ʊ/ với môi tròn lại ở cuối.',
    'Khác hoàn toàn âm “ao” tiếng Việt; cần có chuyển động tròn môi ở cuối âm.'
  ],
  'əʊ': [
    'go, no, open, phone, slow, road',
    'Bắt đầu ở vị trí trung tâm thả lỏng /ə/ rồi trượt lên /ʊ/.',
    'Lỗi người Việt hay gặp nhất: đọc thành một nguyên âm đơn “gô”, hãy tập thói quen lướt âm.'
  ],
  'ɪə': [
    'near, here, ear, clear, fear, beer',
    'Bắt đầu từ âm /ɪ/ rồi mở nhẹ trượt sang âm /ə/.',
    'Giọng Mỹ thường kèm âm /r/ ở cuối: here /hɪr/.'
  ],
  'eə': [
    'care, hair, air, bear, square, share',
    'Bắt đầu ở âm /e/ rồi trượt mượt mà sang âm thả lỏng /ə/.',
    'Giọng Mỹ thường phát âm rõ thành /ker/, /her/.'
  ],
  'ʊə': [
    'tour, pure, cure, secure, tourist',
    'Bắt đầu từ âm /ʊ/ tròn môi nhẹ rồi trượt sang âm schwa /ə/.',
    'Hiện nay nhiều người bản xứ có xu hướng đọc chuyển thành /ɔː/ hoặc thêm /r/ trong giọng Mỹ.'
  ],
  'p': [
    'pen, cap, happy, stop, people, paper',
    'Vô thanh: hai môi khép kín lại rồi bật mạnh luồng khí ra ngoài. Cổ họng không rung.',
    'Mẹo: đặt bàn tay hoặc tờ giấy trước miệng, /p/ sẽ làm tờ giấy bay mạnh, còn /b/ thì không.'
  ],
  'b': [
    'bed, cab, baby, bubble, back, job',
    'Hữu thanh: hai môi chạm khép rồi bật nhẹ, dây thanh trong cổ họng rung mạnh.',
    'Luyện cặp /p/ – /b/: cap /kæp/ vs cab /kæb/.'
  ],
  't': [
    'top, bat, water, time, cat, letter',
    'Vô thanh: đầu lưỡi áp chặt vào lợi trên sau răng cửa, bật hơi mạnh ở đầu từ.',
    'Khác chữ “t” tiếng Việt: bật hơi mạnh hơn nhiều, cuối từ phải chốt chạm lợi rồi ngắt.'
  ],
  'd': [
    'dog, bad, ready, dark, food, lady',
    'Hữu thanh: đầu lưỡi chạm lợi trên, bật ra kết hợp rung mạnh dây thanh.',
    'Luyện cặp /t/ – /d/: seat /siːt/ vs seed /siːd/.'
  ],
  'k': [
    'cat, back, king, clock, make, school',
    'Vô thanh: phần gốc lưỡi nâng áp chặt vào vòm mềm (ngạc mềm) rồi bật hơi mạnh ra.',
    'Cuối từ phải chốt ngắt gốc lưỡi (back, cat), tránh nuốt mất âm cuối.'
  ],
  'g': [
    'go, bag, big, green, egg, game',
    'Hữu thanh: gốc lưỡi áp vòm mềm rồi bật ra, kèm rung dây thanh.',
    'Luyện cặp /k/ – /g/: back /bæk/ vs bag /bæɡ/.'
  ],
  'f': [
    'fan, leaf, coffee, four, phone, staff',
    'Vô thanh: răng cửa trên chạm nhẹ vào viền môi dưới, thổi luồng hơi xát qua khe.',
    'Khác “ph” tiếng Việt: răng trên chạm môi dưới rõ ràng hơn rất nhiều.'
  ],
  'v': [
    'van, leave, video, give, seven, very',
    'Hữu thanh: răng trên chạm bờ môi dưới như /f/, nhưng rung dây thanh mạnh mẽ.',
    'Luyện cặp: vine /vaɪn/ vs wine /waɪn/, vest /vest/ vs west /west/.'
  ],
  'θ': [
    'think, both, teeth, thank, math, healthy',
    'Vô thanh: thè nhẹ đầu lưỡi ra giữa hai hàm răng, thổi luồng hơi nhẹ qua khe răng.',
    'Lỗi người Việt hay gặp: đọc thành /t/ (“tink”) hoặc /s/ (“sink”). Mẹo: nhìn gương thấy đầu lưỡi thò ra.'
  ],
  'ð': [
    'this, mother, weather, they, brother, with',
    'Hữu thanh: vị trí lưỡi y hệt /θ/ nhưng phát âm kết hợp rung mạnh dây thanh.',
    'Lỗi người Việt: đọc thành /d/ (“dis”) hoặc /z/. Hãy nhớ thò nhẹ lưỡi và rung cổ.'
  ],
  's': [
    'see, bus, sister, class, city, star',
    'Vô thanh: đầu lưỡi nâng gần sát lợi trên, tạo luồng hơi xì sắc bén qua khe hẹp.',
    'Ở cuối từ (bus, miss, nice), tuyệt đối không được nuốt âm xì này.'
  ],
  'z': [
    'zoo, busy, music, easy, rise, nose',
    'Hữu thanh: vị trí miệng giống /s/ nhưng dây thanh rung mạnh như tiếng ong kêu.',
    'Tiếng Việt không có âm này, cần chú ý độ rung trong cổ họng.'
  ],
  'ʃ': [
    'she, shoe, nation, cash, special, fish',
    'Vô thanh: hai môi hơi chu tròn nhẹ, đầu lưỡi nâng lên sau lợi, luồng hơi xát rộng.',
    'Giống âm “s” miền Nam trong “sương sáng”, nhưng môi chu tròn hơn.'
  ],
  'ʒ': [
    'vision, pleasure, measure, decision, beige, casual',
    'Hữu thanh: khẩu hình giống /ʃ/ nhưng rung dây thanh liên tục.',
    'Thường xuất hiện ở giữa từ hoặc cuối từ mượn gốc Pháp.'
  ],
  'h': [
    'he, hello, home, happy, help, hand',
    'Vô thanh: chỉ là luồng hơi thở nhẹ nhàng đi qua thanh môn, không rung dây thanh.',
    'Giống “h” tiếng Việt nhưng êm ái hơn.'
  ],
  'tʃ': [
    'chair, watch, teacher, check, beach, question',
    'Tắc–xát vô thanh: khép đầu lưỡi chặn sau lợi rồi bật xát mạnh kèm môi chu.',
    'Người Việt đọc âm đầu khá tốt, chỉ cần nhớ giữ âm cuối trong “watch”, “teach”.'
  ],
  'dʒ': [
    'job, bridge, June, change, major, orange',
    'Tắc–xát hữu thanh: giống /tʃ/ nhưng dây thanh rung mạnh mẽ.',
    'Luyện cặp /tʃ/ – /dʒ/: rich /rɪtʃ/ vs ridge /rɪdʒ/.'
  ],
  'm': [
    'man, time, summer, milk, come, room',
    'Hữu thanh: hai môi khép chặt lại, toàn bộ luồng khí đi qua khoang mũi.',
    'Âm cuối từ (room, team) phải ngậm kín môi lại.'
  ],
  'n': [
    'no, ten, winner, phone, sun, fine',
    'Hữu thanh: đầu lưỡi áp chặt vào lợi trên, hơi thoát hoàn toàn qua mũi.',
    'Âm cuối từ (sun, run) đầu lưỡi phải giữ nguyên chạm lợi.'
  ],
  'ŋ': [
    'sing, long, thanks, ring, English, going',
    'Hữu thanh: phần cuống lưỡi áp chặt vào ngạc mềm (vòm mềm), hơi qua mũi.',
    'Lưu ý: Không bật thêm âm /g/ ở sau thành “sinh-gờ” trong sing, ring.'
  ],
  'l': [
    'light, feel, bottle, yellow, late, call',
    'Hữu thanh: đầu lưỡi chạm lợi trên, luồng hơi thoát ra hai bên sườn lưỡi.',
    'Có “clear L” đầu từ (look) và “dark L” [ɫ] cuối từ (full, feel) cuống lưỡi hơi nâng.'
  ],
  'r': [
    'red, try, very, right, run, price',
    'Hữu thanh: cuộn hoặc kéo nhẹ thân lưỡi về sau vòm miệng mà không chạm vào đâu.',
    'Tuyệt đối không rung hoặc lật đầu lưỡi như chữ “r” tiếng Việt.'
  ],
  'w': [
    'we, window, quick, water, one, always',
    'Hữu thanh: chu tròn môi đồng thời cuống lưỡi nâng cao về ngạc mềm rồi chuyển nhanh.',
    'Âm tiếp cận môi–ngạc mềm: không cắn môi dưới như âm /v/.'
  ],
  'j': [
    'yes, you, young, yellow, student, music',
    'Hữu thanh: thân lưỡi nâng cao gần vòm cứng, trượt nhanh sang nguyên âm sau.',
    'Gần giống “y” trong “yêu” tiếng Việt; không nhầm với chữ “j” tiếng Anh /dʒ/.'
  ]
};

export const VOICELESS_CONSONANTS_QUICK_TABLE = [
  {
    symbol: '/p/',
    examples: 'pen, cap, happy',
    place: 'Hai môi',
    description: 'Hai môi khép chặt rồi bật hơi mạnh; không rung cổ. Đầu từ bật hơi rõ rệt (pie), cuối từ vẫn phải chốt môi (cap).'
  },
  {
    symbol: '/t/',
    examples: 'tea, cat, water',
    place: 'Đầu lưỡi – lợi trên',
    description: 'Khác “t” tiếng Việt: bật hơi mạnh ở đầu từ; cuối từ phải đặt đầu lưỡi chạm lợi rồi ngắt dứt khoát (cat).'
  },
  {
    symbol: '/k/',
    examples: 'key, back, school',
    place: 'Gốc lưỡi – vòm mềm',
    description: 'Bật hơi mạnh; cuối từ phải chốt gốc lưỡi (back), tránh bỏ rơi âm cuối.'
  },
  {
    symbol: '/f/',
    examples: 'fan, leaf, coffee',
    place: 'Răng trên – môi dưới',
    description: 'Răng trên chạm nhẹ môi dưới, thổi luồng hơi xát qua khe; không rung cổ. Khác “ph” tiếng Việt ở chỗ môi–răng rõ ràng hơn.'
  },
  {
    symbol: '/θ/',
    examples: 'think, both, healthy',
    place: 'Lưỡi giữa hai răng',
    description: 'Không có trong tiếng Việt: thè nhẹ đầu lưỡi ra giữa hai hàm răng, thổi hơi. Tránh đọc thành /t/ (“tink”) hay /s/ (“sink”).'
  },
  {
    symbol: '/s/',
    examples: 'see, bus, sister',
    place: 'Đầu lưỡi – lợi trên',
    description: 'Giống “x” tiếng Việt; cuối từ bắt buộc phải giữ luồng hơi xì (bus, nice), tuyệt đối không được bỏ.'
  },
  {
    symbol: '/ʃ/',
    examples: 'she, shoe, nation',
    place: 'Đầu lưỡi – sau lợi',
    description: 'Môi hơi chu tròn nhẹ, thân lưỡi nâng gần vòm cứng; giống “s” miền Nam nhưng tròn môi hơn.'
  },
  {
    symbol: '/tʃ/',
    examples: 'chair, watch, teacher',
    place: 'Đầu lưỡi – sau lợi',
    description: 'Tắc–xát vô thanh = /t/ + /ʃ/. Người Việt thường đọc âm đầu khá chuẩn, cần chú ý không nuốt âm cuối (watch).'
  }
];

export const MINIMAL_PAIRS = [
  { word1: 'sheep', ipa1: '/ʃiːp/', word2: 'ship', ipa2: '/ʃɪp/', type: 'Nguyên âm dài vs ngắn', note: 'Kéo dài /iː/ gấp đôi /ɪ/, cơ miệng căng hơn.' },
  { word1: 'leave', ipa1: '/liːv/', word2: 'live', ipa2: '/lɪv/', type: 'Nguyên âm dài vs ngắn', note: 'leave dài và căng; live ngắn và thả lỏng.' },
  { word1: 'men', ipa1: '/men/', word2: 'man', ipa2: '/mæn/', type: 'Độ mở hàm /e/ vs /æ/', note: 'man mở hàm dưới hạ sâu hơn hẳn men.' },
  { word1: 'cap', ipa1: '/kæp/', word2: 'cup', ipa2: '/kʌp/', type: '/æ/ hạ hàm vs /ʌ/ ngắn giữa', note: 'cup dứt khoát nhanh gọn; cap há to.' },
  { word1: 'full', ipa1: '/fʊl/', word2: 'fool', ipa2: '/fuːl/', type: '/ʊ/ ngắn vs /uː/ dài tròn', note: 'fool chu môi tròn và dài hơn full.' },
  { word1: 'think', ipa1: '/θɪŋk/', word2: 'sink', ipa2: '/sɪŋk/', type: 'Lưỡi giữa răng /θ/ vs Lợi /s/', note: 'think thò nhẹ đầu lưỡi ra giữa 2 răng.' },
  { word1: 'then', ipa1: '/ðen/', word2: 'den', ipa2: '/den/', type: 'Lưỡi giữa răng /ð/ vs Lợi /d/', note: 'then thò đầu lưỡi ra và rung dây thanh.' },
  { word1: 'vine', ipa1: '/vaɪn/', word2: 'wine', ipa2: '/waɪn/', type: 'Răng–môi /v/ vs Chu môi /w/', note: 'vine cắn nhẹ môi dưới; wine chu tròn môi.' },
  { word1: 'cap', ipa1: '/kæp/', word2: 'cab', ipa2: '/kæb/', type: 'Vô thanh /p/ vs Hữu thanh /b/', note: 'Đặt tay lên cổ: cab làm rung cổ họng, cap thì không.' },
  { word1: 'back', ipa1: '/bæk/', word2: 'bag', ipa2: '/bæɡ/', type: 'Vô thanh /k/ vs Hữu thanh /g/', note: 'bag rung cổ và nguyên âm trước đó hơi kéo dài hơn.' },
  { word1: 'seat', ipa1: '/siːt/', word2: 'seed', ipa2: '/siːd/', type: 'Vô thanh /t/ vs Hữu thanh /d/', note: 'seed nguyên âm kéo dài hơn và chốt rung nhẹ.' },
  { word1: 'light', ipa1: '/laɪt/', word2: 'lie', ipa2: '/laɪ/', type: 'Có âm cuối /t/ vs Không có âm cuối', note: 'Âm cuối thay đổi hoàn toàn nghĩa của từ.' },
  { word1: 'miss', ipa1: '/mɪs/', word2: 'mix', ipa2: '/mɪks/', type: 'Đơn âm /s/ vs Cụm phụ âm /ks/', note: 'mix phát âm cả /k/ rồi xì /s/.' },
  { word1: 'sing', ipa1: '/sɪŋ/', word2: 'sin', ipa2: '/sɪn/', type: 'Gốc lưỡi /ŋ/ vs Đầu lưỡi /n/', note: 'sing gốc lưỡi chạm vòm mềm; sin đầu lưỡi chạm lợi.' }
];

export const VIETNAMESE_COMMON_MISTAKES = [
  {
    issue: 'Bỏ âm cuối (Final Consonants)',
    examples: 'cat /kæt/ – cab /kæb/ đọc thành “ca”',
    fix: 'Đọc rõ và “chốt” phụ âm cuối; luyện cap–cab, back–bag, seat–seed. Tập gõ nhẹ ngón tay vào bàn tại thời điểm phát âm cuối.'
  },
  {
    issue: 'Không phân biệt nguyên âm dài / ngắn',
    examples: 'sheep /ʃiːp/ – ship /ʃɪp/',
    fix: 'Nguyên âm dài kéo thời gian gấp đôi âm ngắn, cơ miệng căng dẹt hơn; âm ngắn thả lỏng cơ miệng và dứt nhanh.'
  },
  {
    issue: '/θ, ð/ đọc thành t, s, d, z',
    examples: 'think → “sink” hoặc “tink”, this → “dis”',
    fix: 'Thè nhẹ đầu lưỡi ra giữa hai hàm răng, thổi luồng hơi nhẹ ra ngoài. /θ/ không rung cổ, /ð/ rung cổ.'
  },
  {
    issue: '/v/ đọc thành /w/ hoặc /j/',
    examples: 'vine đọc thành wine, very đọc thành dery',
    fix: '/v/: răng cửa trên chạm nhẹ vào viền môi dưới và rung cổ; /w/: chu môi tròn không chạm răng.'
  },
  {
    issue: '/r/ rung hoặc lật lưỡi kiểu Việt',
    examples: 'red, try, right',
    fix: 'Cong hoặc kéo nhẹ lưỡi lên về sau vòm miệng nhưng tuyệt đối không chạm vòm và không rung đầu lưỡi.'
  },
  {
    issue: 'Nguyên âm đôi đọc phẳng',
    examples: 'go → “gô”, my → “mai”, now → “nau”',
    fix: 'Khuôn miệng phải di chuyển và trượt mượt mà từ vị trí âm đầu sang vị trí âm cuối trong một nhịp.'
  },
  {
    issue: 'Thêm âm /g/ sau /ŋ/',
    examples: 'sing → đọc thành “sinh-gờ”',
    fix: 'Chỉ cần nâng gốc lưỡi chạm vòm mềm chặn hơi rồi dừng lại, không được bật nảy thêm âm /g/.'
  }
];

export const CONSONANT_CLUSTERS_PRACTICE = [
  { text: 'spring', breakdown: 's – pr – ɪŋ → spring', ipa: '/sprɪŋ/' },
  { text: 'street', breakdown: 's – tr – iːt → street', ipa: '/striːt/' },
  { text: 'texts', breakdown: 'tek – s – ts → texts', ipa: '/teksts/' },
  { text: 'glimpse', breakdown: 'ɡl – ɪm – ps → glimpse', ipa: '/ɡlɪmps/' }
];

export const FIVE_STEP_STRATEGY = [
  {
    step: '1. Nắm chắc 44 âm IPA cơ bản',
    desc: 'Luyện từng âm chuẩn xác: nghe phát âm mẫu, nhìn sơ đồ khẩu hình vòm miệng và bắt chước khẩu hình môi.'
  },
  {
    step: '2. Luyện nhóm âm dễ nhầm theo cặp (Minimal Pairs)',
    desc: 'Luyện các cặp tương phản: /iː/–/ɪ/ (sheep – ship), /e/–/æ/ (men – man), /æ/–/ʌ/ (cap – cup), /ʊ/–/uː/ (full – fool).'
  },
  {
    step: '3. Khắc phục phụ âm khó với người Việt',
    desc: 'Tập trung luyện /θ, ð/ lưỡi giữa hai hàm răng (think, this), phân biệt /v/ vs /w/ (vine – wine), và /r/ không rung.'
  },
  {
    step: '4. Từ → Cụm từ → Câu giao tiếp',
    desc: 'Bắt đầu từ từ đơn có âm đó rồi ghép vào câu hoàn chỉnh: "three thin things", "this is the thing that they think".'
  },
  {
    step: '5. Thu âm – So sánh đối chiếu',
    desc: 'Dùng điện thoại thu lại giọng nói của bản thân và so sánh với phát âm mẫu của người bản xứ để tự chỉnh sửa sai sót.'
  }
];

// Simplified mouth cross-section generator
export function renderMouthCrossSection(params: any, voiced?: boolean, isNasal?: boolean): string {
  const T: Record<string, any> = {
    lips: { lo: 140, tx: 94, ty: 148, hx: 140, hy: 146, c: [52, 144] },
    ld: { lo: 150, tx: 94, ty: 156, hx: 140, hy: 152, c: [76, 148] },
    dent: { lo: 166, tx: 78, ty: 150, hx: 135, hy: 152, c: [80, 152] },
    alv: { lo: 160, tx: 92, ty: 134, hx: 135, hy: 146, c: [92, 131] },
    post: { lo: 160, tx: 105, ty: 124, hx: 140, hy: 140, c: [106, 121] },
    rr: { lo: 162, tx: 110, ty: 132, hx: 150, hy: 134 },
    w: { lo: 160, tx: 94, ty: 168, hx: 165, hy: 124 },
    pal: { lo: 162, tx: 94, ty: 168, hx: 140, hy: 118, c: [140, 115] },
    vel: { lo: 164, tx: 94, ty: 170, hx: 168, hy: 121, c: [170, 120] },
    glot: { lo: 168, tx: 94, ty: 174, hx: 140, hy: 172, c: [162, 262] }
  };

  const pl = params.pl;
  let q = pl ? T[pl] : null;
  if (!q) {
    const o = params.o || 0.3;
    const h = params.h || 0.5;
    const b = params.b || 0.5;
    const lo = 146 + o * 34;
    const hy = lo + 16 - h * (lo + 16 - 124);
    q = { lo, tx: 94, ty: lo + 6, hx: 118 + b * 50, hy };
  }

  const { lo, tx, ty, hx, hy } = q;
  const isAirFriction = ['Xát', 'Tắc–xát', 'Tắc'].includes(params.air);
  const air = isAirFriction
    ? `<path class='ar' d='M44 ${lo + 12}H16M22 ${lo + 6}L16 ${lo + 12}L22 ${lo + 18}' stroke='#2563eb' stroke-width='2' fill='none'/>`
    : isNasal
    ? `<path class='ar' d='M26 102L6 108M6 108L8 99M6 108L15 107' stroke='#2563eb' stroke-width='2' fill='none'/>`
    : '';

  const vel = isNasal
    ? 'M175 120Q192 128 192 154'
    : 'M175 120C190 126 200 134 200 140M186 116L200 140';

  const cord = voiced
    ? `<path class='vc' d='M152 262h26' stroke='#2563eb' stroke-width='2.5'/><path class='vc' d='M150 252q4-6 8 0t8 0t8 0t8 0' stroke='#2563eb' stroke-width='1.5' fill='none'/>`
    : `<path class='vc' d='M152 254L160 270M178 254L170 270' stroke='#718096' stroke-width='2' fill='none'/>`;

  return `<svg viewBox='0 0 210 300' class='w-full h-full' role='img'>
    <path d='M${tx} ${ty}C${tx + 14} ${ty - 4} ${hx - 28} ${hy} ${hx} ${hy}C${hx + 22} ${hy} 184 ${hy + 6} 188 ${hy + 30}L188 232C170 224 130 ${ty + 22} ${tx} ${ty + 12}Q${tx - 3} ${ty + 6} ${tx} ${ty}Z' fill='#f28b82' stroke='#a33' stroke-width='1.5'/>
    <path d='M55 29L22 65Q14 85 25 94L50 96Q56 104 54 112Q44 122 44 134Q46 142 56 141L70 134' fill='none' stroke='#445' stroke-width='2.5'/>
    <path d='M88 132C108 118 150 110 175 120' fill='none' stroke='#445' stroke-width='2.5'/>
    <path d='${vel}' fill='none' stroke='#445' stroke-width='2.5'/>
    <path d='M82 ${lo + 2}Q58 ${lo - 6} 55 ${lo + 6}Q58 ${lo + 16} 66 ${lo + 26}Q68 210 64 222Q68 236 95 236Q118 232 130 240Q146 262 142 290' fill='none' stroke='#445' stroke-width='2.5'/>
    <ellipse cx='75' cy='132' rx='6' ry='14' fill='#fff' stroke='#445' stroke-width='1'/>
    ${lo >= 144 ? `<ellipse cx='86' cy='${lo + 9}' rx='5' ry='9' fill='#fff' stroke='#445' stroke-width='1'/>` : ''}
    ${q.c ? `<circle cx='${q.c[0]}' cy='${q.c[1]}' r='5' fill='#e11' opacity='0.85'/>` : ''}
    ${air}${cord}
    <g font-size='8' fill='#889'>
      <text x='${hx - 10}' y='${hy + 22}' fill='#fff' font-weight='bold'>Lưỡi</text>
      <text x='96' y='102'>Vòm cứng</text>
      <text x='152' y='102'>Vòm mềm</text>
      <text x='138' y='288'>Dây thanh</text>
    </g>
  </svg>`;
}

// Front lips visualizer
export function renderLipsSvg(params: any): string {
  const o = params?.o || 0.3;
  const r = params?.r || 0;
  const cx = 110, cy = 120;
  const ix = 20 - r * 12;
  const iy = 2 + o * 12 + r * 3;
  const mw = 26 + ix * 2.6;
  const mh = iy * 2.6;
  const op = `M${cx - mw} ${cy}C${cx - mw * 0.6} ${cy - mh * 1.3} ${cx + mw * 0.6} ${cy - mh * 1.3} ${cx + mw} ${cy}C${cx + mw * 0.6} ${cy + mh * 1.4} ${cx - mw * 0.6} ${cy + mh * 1.4} ${cx - mw} ${cy}Z`;

  return `<svg viewBox='0 0 220 232' class='w-full h-full' role='img'>
    <rect width='220' height='232' rx='20' fill='#f3d9c8'/>
    <path d='M${cx - 26} 28Q${cx} 46 ${cx + 26} 28' fill='none' stroke='#8a5a50' stroke-width='2'/>
    <ellipse cx='${cx - 13}' cy='34' rx='7' ry='4' fill='#6b3b34' opacity='0.6'/>
    <ellipse cx='${cx + 13}' cy='34' rx='7' ry='4' fill='#6b3b34' opacity='0.6'/>
    <path d='M${cx - mw - 8} ${cy}C${cx - mw * 0.55} ${cy - mh * 1.3 - 36} ${cx + mw * 0.55} ${cy - mh * 1.3 - 36} ${cx + mw + 8} ${cy}C${cx + mw * 0.55} ${cy + mh * 1.4 + 40} ${cx - mw * 0.55} ${cy + mh * 1.4 + 40} ${cx - mw - 8} ${cy}Z' fill='#c4605e' stroke='#7a2b2b' stroke-width='2'/>
    <path d='${op}' fill='#3b0d10'/>
    <ellipse cx='${cx}' cy='${cy + mh * 0.55}' rx='${mw * 0.75}' ry='${mh * 0.6}' fill='#d6544a'/>
    <path d='${op}' fill='none' stroke='#2a0808' stroke-width='2'/>
    <text x='110' y='222' text-anchor='middle' font-size='10' font-weight='bold' fill='#667'>Khẩu hình mặt trước</text>
  </svg>`;
}
