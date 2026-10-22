import { Topic } from './types';
import { ipaTopics } from './comm-ipa-data';

const prosodyTopics: Topic[] = [
  {
    id: 'hts-01',
    title: 'Chunking (Ngắt nghỉ)',
    vietnameseTitle: 'Kỹ năng Ngắt nghỉ',
    category: 'Communication',
    subCategory: ['How to Speak'],
    icon: '✂️',
    color: '#E63946',
    description: 'Cách ngắt cụm từ để nói tự nhiên và dễ hiểu hơn.',
    words: [
      { id: 'hts1-1', word: 'Chunk', ipa: '/tʃʌŋk/', definition: 'Một cụm từ ngắn.', translation: 'Cụm từ', example: 'Speak in chunks, not word by word.', blankSentence: 'Try to speak in logical ____s for natural flow.', emoji: '🧩' },
      { id: 'hts1-2', word: 'Pause', ipa: '/pɔːz/', definition: 'Khoảng nghỉ giữa các cụm.', translation: 'Khoảng nghỉ', example: 'Take a short pause after a comma.', blankSentence: 'Take a short ____ before finishing your sentence.', emoji: '⏸️' },
      { id: 'hts1-3', word: 'Rhythm', ipa: '/ˈrɪðəm/', definition: 'Nhịp điệu khi nói.', translation: 'Nhịp điệu', example: 'English has a natural rhythm.', blankSentence: 'English speakers speak with a musical ____.', emoji: '🎶' }
    ],
    howToSpeak: [
      {
        type: 'chunking',
        title: 'Slice it Right!',
        description: 'Tập ngắt cụm từ (từ dễ đến khó) để nói tự nhiên và lưu loát hơn như người bản xứ. Nhấn vào từng cụm để nghe.',
        theory: 'Ngắt giọng (Chunking) là kỹ năng phân chia câu thành các cụm từ có nghĩa (chunks). Thay vì đọc từng từ đơn lẻ như một cái máy, việc ngắt giọng đúng chỗ giúp người nghe dễ dàng theo dõi và hiểu ý bạn hơn, đồng thời giúp bạn có thời gian để lấy hơi và suy nghĩ ý tiếp theo.',
        items: [
          {
            sentence: 'I went to the store to buy some milk.',
            translation: 'Tôi đã đến cửa hàng (nghỉ) để mua một ít sữa.',
            chunks: [
              { text: 'I went to the store', pause: true },
              { text: 'to buy some milk.', pause: false }
            ]
          },
          {
            sentence: 'In the morning, I always drink hot coffee.',
            translation: 'Vào buổi sáng (nghỉ) tôi luôn uống cà phê nóng.',
            chunks: [
              { text: 'In the morning,', pause: true },
              { text: 'I always drink hot coffee.', pause: false }
            ]
          },
          {
            sentence: 'I want to eat a slice of apple pie.',
            translation: 'Tôi muốn ăn (nghỉ) một lát bánh táo.',
            chunks: [
              { text: 'I want to eat', pause: true },
              { text: 'a slice of apple pie.', pause: false }
            ]
          },
          {
            sentence: 'If it rains tomorrow, we will have to stay home.',
            translation: 'Nếu ngày mai trời mưa (nghỉ) chúng ta sẽ phải ở nhà.',
            chunks: [
              { text: 'If it rains tomorrow,', pause: true },
              { text: 'we will have to stay home.', pause: false }
            ]
          },
          {
            sentence: 'My best friend, who lives in London, is coming to visit.',
            translation: 'Bạn thân nhất của tôi (nghỉ) người sống ở London (nghỉ) chuẩn bị sang thăm.',
            chunks: [
              { text: 'My best friend,', pause: true },
              { text: 'who lives in London,', pause: true },
              { text: 'is coming to visit.', pause: false }
            ]
          },
          {
            sentence: 'Although he was extremely tired, he completed the report on time.',
            translation: 'Mặc dù anh ấy vô cùng mệt mỏi (nghỉ) anh ấy đã hoàn thành báo cáo đúng hạn.',
            chunks: [
              { text: 'Although he was extremely tired,', pause: true },
              { text: 'he completed the report on time.', pause: false }
            ]
          },
          {
            sentence: 'When you arrive at the airport, please call me immediately.',
            translation: 'Khi bạn đến sân bay (nghỉ) vui lòng gọi cho tôi ngay lập tức.',
            chunks: [
              { text: 'When you arrive at the airport,', pause: true },
              { text: 'please call me immediately.', pause: false }
            ]
          },
          {
            sentence: 'Learning a new foreign language requires high patience, dedication, and daily practice.',
            translation: 'Học một ngoại ngữ mới (nghỉ) đòi hỏi sự kiên nhẫn cao (nghỉ) sự cống hiến (nghỉ) và luyện tập hàng ngày.',
            chunks: [
              { text: 'Learning a new foreign language', pause: true },
              { text: 'requires high patience,', pause: true },
              { text: 'dedication,', pause: true },
              { text: 'and daily practice.', pause: false }
            ]
          },
          {
            sentence: 'She decided to sell her old car because she wanted to buy a new electric vehicle.',
            translation: 'Cô ấy quyết định bán xe cũ (nghỉ) vì cô ấy muốn mua (nghỉ) một chiếc xe điện mới tinh.',
            chunks: [
              { text: 'She decided to sell her old car', pause: true },
              { text: 'because she wanted to buy', pause: true },
              { text: 'a new electric vehicle.', pause: false }
            ]
          },
          {
            sentence: 'To succeed in the modern business world, you need to be creative, highly adaptable, and extremely resilient.',
            translation: 'Để thành công trong thế giới kinh doanh hiện đại (nghỉ) bạn cần phát huy sáng tạo (nghỉ) khả năng thích ứng cao (nghỉ) và cực kỳ kiên trì.',
            chunks: [
              { text: 'To succeed in the modern business world,', pause: true },
              { text: 'you need to be creative,', pause: true },
              { text: 'highly adaptable,', pause: true },
              { text: 'and extremely resilient.', pause: false }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'hts-02',
    title: 'Intonation (Lên xuống giọng)',
    vietnameseTitle: 'Ngữ điệu',
    category: 'Communication',
    subCategory: ['How to Speak'],
    icon: '🎢',
    color: '#457B9D',
    description: 'Cách lên và xuống giọng để thể hiện cảm xúc và ý nghĩa.',
    words: [
      { id: 'hts2-1', word: 'Pitch', ipa: '/pɪtʃ/', definition: 'Độ cao của giọng nói.', translation: 'Độ cao giọng', example: 'Change your pitch to show surprise.', blankSentence: 'You can change your vocal ____ to sound more exciting.', emoji: '📈' },
      { id: 'hts2-2', word: 'Rising', ipa: '/ˈraɪzɪŋ/', definition: 'Lên giọng ở cuối câu.', translation: 'Lên giọng', example: 'Use rising intonation for Yes/No questions.', blankSentence: 'Use ____ intonation at the end of yes-no questions.', emoji: '↗️' },
      { id: 'hts2-3', word: 'Falling', ipa: '/ˈfɔːlɪŋ/', definition: 'Xuống giọng ở cuối câu.', translation: 'Xuống giọng', example: 'Use falling intonation for statements.', blankSentence: 'Statements usually end with a ____ intonation.', emoji: '↘️' }
    ],
    howToSpeak: [
      {
        type: 'intonation',
        title: 'The Voice Rollercoaster',
        description: 'Luyện ngữ điệu lên xuống giọng theo 10 mức độ từ dễ đến khó để phản xạ tự nhiên hơn khi giao tiếp.',
        theory: 'Ngữ điệu (Intonation) giống như giai điệu của bài hát. Chúng ta thường lên giọng (Rising) ở cuối câu hỏi Yes/No để thể hiện sự chờ đợi câu trả lời, và xuống giọng (Falling) ở cuối câu nói thông thường (statements) hoặc câu hỏi Wh- để thể hiện sự khẳng định, kết thúc.',
        items: [
          {
            sentence: 'Do you like tea?',
            translation: 'Bạn có thích trà không? (Lên giọng ở cuối câu hỏi Yes/No)',
            words: [
              { text: 'Do you like', pitch: 'flat' },
              { text: 'tea?', pitch: 'rising' }
            ]
          },
          {
            sentence: 'I love music.',
            translation: 'Tôi yêu âm nhạc. (Xuống giọng ở cuối câu trần thuật)',
            words: [
              { text: 'I love', pitch: 'flat' },
              { text: 'music.', pitch: 'falling' }
            ]
          },
          {
            sentence: 'Where is the bus stop?',
            translation: 'Trạm xe buýt ở đâu thế? (Xuống giọng ở cuối câu hỏi WH-)',
            words: [
              { text: 'Where is the', pitch: 'flat' },
              { text: 'bus stop?', pitch: 'falling' }
            ]
          },
          {
            sentence: 'Is she coming today, or tomorrow?',
            translation: 'Cô ấy sẽ đến hôm nay hay ngày mai? (Lên giọng ở vế đầu, xuống giọng ở vế cuối)',
            words: [
              { text: 'Is she coming', pitch: 'flat' },
              { text: 'today,', pitch: 'rising' },
              { text: 'or', pitch: 'flat' },
              { text: 'tomorrow?', pitch: 'falling' }
            ]
          },
          {
            sentence: 'I bought apples, bananas, and oranges.',
            translation: 'Tôi đã mua táo, chuối và cam. (Lên giọng danh sách liệt kê, xuống ở quả cuối)',
            words: [
              { text: 'I bought', pitch: 'flat' },
              { text: 'apples,', pitch: 'rising' },
              { text: 'bananas,', pitch: 'rising' },
              { text: 'and', pitch: 'flat' },
              { text: 'oranges.', pitch: 'falling' }
            ]
          },
          {
            sentence: 'If you need help, just ask me.',
            translation: 'Nếu bạn cần giúp đỡ, cứ hỏi tôi nha. (Lên giọng ở mệnh đề phụ, xuống ở mệnh đề chính)',
            words: [
              { text: 'If you need', pitch: 'flat' },
              { text: 'help,', pitch: 'rising' },
              { text: 'just ask', pitch: 'flat' },
              { text: 'me.', pitch: 'falling' }
            ]
          },
          {
            sentence: 'Excuse me, could you tell me the time?',
            translation: 'Xin lỗi, bạn xem giùm tôi mấy giờ rồi được không? (Thần thái lịch sự lên giọng)',
            words: [
              { text: 'Excuse', pitch: 'flat' },
              { text: 'me,', pitch: 'rising' },
              { text: 'could you tell me the', pitch: 'flat' },
              { text: 'time?', pitch: 'rising' }
            ]
          },
          {
            sentence: 'What a beautiful sunset it is!',
            translation: 'Cảnh hoàng hôn mới đẹp làm sao! (Câu cảm thán nói sống động, xuống giọng ở từ cuối)',
            words: [
              { text: 'What a', pitch: 'flat' },
              { text: 'beautiful', pitch: 'flat' },
              { text: 'sunset', pitch: 'rising' },
              { text: 'it is!', pitch: 'falling' }
            ]
          },
          {
            sentence: 'She did not make a mistake, did she?',
            translation: 'Cô ấy không mắc lỗi, phải không nhỉ? (Tag question thăm dò ý kiến -> lên giọng)',
            words: [
              { text: 'She did not make a mistake,', pitch: 'flat' },
              { text: 'did she?', pitch: 'rising' }
            ]
          },
          {
            sentence: 'Although she was extremely tired, she finished her project with high quality.',
            translation: 'Dù vô cùng mệt mỏi, cô ấy vẫn hoàn thành dự án chất lượng cao. (Chuyển giọng điệu từ tương phản lên phẳng và xuống hẳn)',
            words: [
              { text: 'Although she was extremely', pitch: 'flat' },
              { text: 'tired,', pitch: 'rising' },
              { text: 'she finished her project with high', pitch: 'flat' },
              { text: 'quality.', pitch: 'falling' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'hts-03',
    title: 'Word Stress & Sentence Stress',
    vietnameseTitle: 'Trọng âm',
    category: 'Communication',
    subCategory: ['How to Speak'],
    icon: '🔨',
    color: '#F4A261',
    description: 'Nhấn mạnh từ hoặc âm tiết quan trọng trong câu.',
    words: [
      { id: 'hts3-1', word: 'Stress', ipa: '/stres/', definition: 'Nhấn mạnh.', translation: 'Trọng âm', example: 'Put stress on the first syllable.', blankSentence: 'Proper sentence ____ emphasizes the most important keywords.', emoji: '🎯' },
      { id: 'hts3-2', word: 'Syllable', ipa: '/ˈsɪləbl/', definition: 'Âm tiết.', translation: 'Âm tiết', example: 'The word "water" has two syllables.', blankSentence: 'The word "beautiful" contains three different ____s.', emoji: '🔠' }
    ],
    howToSpeak: [
      {
        type: 'stress',
        title: 'Hit the Right Beat & Strong vs Weak Sounds',
        description: 'Tập nhấn giọng từ & câu, hiểu sâu bản chất Strong sound vs Weak sound để không đọc đều đều từng nhịp như tiếng Việt mà nói tự nhiên như người bản xứ.',
        theory: 'Trọng âm (Sentence Stress) & Nguyên lý Strong Sound - Weak Sound: Tiếng Anh là ngôn ngữ tiết tấu trọng âm (Stress-timed rhythm), khác hoàn toàn tiếng Việt vốn đọc từng từ đều đều như nhau (Syllable-timed). \n\n• BẢN CHẤT KHI NÀO ĐỌC NHANH VÀ KHI NÀO ĐỌC CHẬM:\n- ĐỌC CHẬM, TO, RÕ (Strong Sound): Áp dụng cho Content Words (Danh từ, Động từ chính, Tính từ, Trạng từ) chứa đựng thông tin then chốt của câu.\n- ĐỌC LƯỚT NHANH, HẠ GIỌNG (Weak Sound): Áp dụng cho Function Words (Từ ngữ pháp: can, to, do, have, for, and, was, that...). Người bản xứ luôn làm mờ nguyên âm của các từ này thành âm Schwa /ə/ hoặc /ɪ/ để lướt qua cực nhanh.\n\n• LƯU Ý ĐẶC BIỆT CÁC TỪ CHỨC NĂNG (CAN, TO, DO, HAVE...):\n- Khi đóng vai trò phụ trong câu, chúng bắt buộc đọc ở dạng WEAK sound (Ví dụ: "I can do it" đọc là /aɪ kən duː ɪt/, không đọc /kæn/).\n- Nhưng khi đứng cuối câu hoặc mang hàm ý khẳng định/nhấn mạnh, chúng chuyển sang STRONG sound (Ví dụ: "Yes, I CAN!" đọc là /kæn/).\n- ĐẶC BIỆT: Phủ định "CAN\'T" luôn luôn là STRONG sound (/kɑːnt/ hoặc /kænt/) để tránh nhầm với "can"!',
        strongWeakPairs: [
          {
            word: 'CAN / CAN\'T',
            role: 'Trợ động từ chỉ khả năng',
            weakForm: '/kən/ (Lướt nhanh, hạ tone)',
            weakExample: 'I can do it easily.',
            weakExampleIpa: '/aɪ kən duː ɪt ˈiːzɪli/',
            weakNote: 'Trong câu khẳng định bình thường, "can" là từ phụ, đọc lướt thành /kən/.',
            strongForm: '/kæn/ hoặc phủ định /kɑːnt/',
            strongExample: 'Yes, I CAN! / I CAN\'T do it.',
            strongExampleIpa: '/jes aɪ kæn/ | /aɪ kɑːnt duː ɪt/',
            strongNote: 'Đứng cuối câu đọc /kæn/. Đặc biệt "CAN\'T" luôn luôn là Strong sound (/kɑːnt/ hoặc /kænt/)!'
          },
          {
            word: 'TO',
            role: 'Giới từ chỉ hướng / to-V',
            weakForm: '/tə/ (Âm Schwa siêu ngắn)',
            weakExample: 'I want to go to school.',
            weakExampleIpa: '/aɪ wɒnt tə gəʊ tə skuːl/',
            weakNote: 'Đứng trước phụ âm đọc lướt thành /tə/, tiết kiệm hơi tối đa.',
            strongForm: '/tuː/ (Nguyên âm dài)',
            strongExample: 'Who are you talking TO?',
            strongExampleIpa: '/huː ɑːr juː ˈtɔːkɪŋ tuː/',
            strongNote: 'Khi đứng ở cuối câu hỏi hoặc khi cần nhấn mạnh mục tiêu.'
          },
          {
            word: 'DO',
            role: 'Trợ động từ nghi vấn / nhấn mạnh',
            weakForm: '/də/ hoặc /d/',
            weakExample: 'What do you think?',
            weakExampleIpa: '/wɒt də jʊ θɪŋk/',
            weakNote: 'Lướt nhanh trong câu hỏi Wh-, không đọc mạnh /duː/.',
            strongForm: '/duː/ (Âm u dài ngân)',
            strongExample: 'I DO love you. / Yes, I DO.',
            strongExampleIpa: '/aɪ duː lʌv juː/ | /jes aɪ duː/',
            strongNote: 'Dùng để nhấn mạnh cảm xúc chắc chắn hoặc đứng cuối câu trả lời ngắn.'
          },
          {
            word: 'HAVE',
            role: 'Trợ động từ hoàn thành vs Động từ sở hữu',
            weakForm: '/həv/ hoặc /əv/',
            weakExample: 'They have finished the work.',
            weakExampleIpa: '/ðeɪ əv ˈfɪnɪʃt ðə wɜːk/',
            weakNote: 'Trợ động từ thì hoàn thành đọc lướt thành /əv/, gần như dính vào chủ ngữ.',
            strongForm: '/hæv/ (Nguyên âm /æ/ mở to)',
            strongExample: 'I HAVE two cars. / Yes, we HAVE.',
            strongExampleIpa: '/aɪ hæv tuː kɑːrz/ | /jes wiː hæv/',
            strongNote: 'Khi là động từ chính mang nghĩa sở hữu hoặc đứng cuối câu.'
          },
          {
            word: 'FOR',
            role: 'Giới từ chỉ mục đích / dành cho',
            weakForm: '/fər/ (Lướt nhẹ)',
            weakExample: 'This present is for you.',
            weakExampleIpa: '/ðɪs ˈpreznt ɪz fər juː/',
            weakNote: 'Trong câu nói bình thường, chỉ đọc lướt nhẹ /fər/.',
            strongForm: '/fɔːr/ (Âm /ɔː/ ngân vang)',
            strongExample: 'What is this button FOR?',
            strongExampleIpa: '/wɒt ɪz ðɪs ˈbʌtn fɔːr/',
            strongNote: 'Khi giới từ bị đẩy về cuối câu.'
          },
          {
            word: 'AND',
            role: 'Liên từ nối',
            weakForm: '/ənd/ hoặc chỉ là âm /n/',
            weakExample: 'Fish and chips / Rock and roll',
            weakExampleIpa: '/fɪʃ ən tʃɪps/ | /ˈrɒk n rəʊl/',
            weakNote: 'Người bản xứ đọc lướt thành /ən/ hoặc /n/ ("Rock \'n\' Roll").',
            strongForm: '/ænd/ (Nguyên âm /æ/)',
            strongExample: 'I said apples AND oranges, not just one!',
            strongExampleIpa: '/aɪ sed ˈæplz ænd ˈɒrɪndʒɪz/',
            strongNote: 'Khi muốn làm rõ hoặc nhấn mạnh sự liên kết cả hai.'
          }
        ],
        items: [
          {
            sentence: 'Compare: PHO-to-graph vs pho-TO-gra-pher.',
            translation: 'So sánh thay đổi vị trí trọng âm giữa các từ cùng gốc gốc: Danh từ vs Danh từ chỉ người',
            words: [
              { text: 'Compare:' },
              { text: 'PHO-', stress: true },
              { text: 'to-graph' },
              { text: 'vs' },
              { text: 'pho-' },
              { text: 'TO-', stress: true },
              { text: 'gra-pher.' }
            ]
          },
          {
            sentence: 'I will re-CORD a new RE-cord.',
            translation: 'Tôi sẽ ghi âm (re-CORD) một kỷ lục (RE-cord) mới. (Động từ nhấn âm 2, Danh từ nhấn âm 1)',
            words: [
              { text: 'I will' },
              { text: 're-' },
              { text: 'CORD', stress: true },
              { text: 'a new' },
              { text: 'RE-', stress: true },
              { text: 'cord.' }
            ]
          },
          {
            sentence: 'I will pre-SENT your PRE-sent.',
            translation: 'Tôi sẽ trình bày (pre-SENT) món quà (PRE-sent) của bạn. (Quy tắc động âm 2, danh âm 1)',
            words: [
              { text: 'I will' },
              { text: 'pre-' },
              { text: 'SENT', stress: true },
              { text: 'your' },
              { text: 'PRE-', stress: true },
              { text: 'sent.' }
            ]
          },
          {
            sentence: 'He wants to BUY a CAR.',
            translation: 'Anh ấy muốn mua một chiếc xe hơi. (Nhấn mạnh động từ chính BUY và danh từ CAR)',
            words: [
              { text: 'He wants to' },
              { text: 'BUY', stress: true },
              { text: 'a' },
              { text: 'CAR.', stress: true }
            ]
          },
          {
            sentence: 'The TEA-cher is TAL-king to the STU-dents.',
            translation: 'Giáo viên đang nói chuyện với học sinh. (Nhấn vào từ chính mang thông tin quan trọng)',
            words: [
              { text: 'The' },
              { text: 'TEA-cher', stress: true },
              { text: 'is' },
              { text: 'TAL-king', stress: true },
              { text: 'to the' },
              { text: 'STU-dents.', stress: true }
            ]
          },
          {
            sentence: 'I CANNOT un-der-STAND this pro-blem.',
            translation: 'Tôi không thể hiểu nổi vấn đề này. (Nhấn vào phủ định CANNOT, động từ UNDERSTAND và danh từ PROBLEM)',
            words: [
              { text: 'I' },
              { text: 'CAN-NOT', stress: true },
              { text: 'un-der-' },
              { text: 'STAND', stress: true },
              { text: 'this' },
              { text: 'PRO-blem.', stress: true }
            ]
          },
          {
            sentence: 'She is an in-CRE-di-bly TA-len-ted mu-SI-cian.',
            translation: 'Cô ấy là một nhạc sĩ tài năng đến kinh ngạc. (Nhấn mạnh trạng từ, tính từ và danh từ chỉ người)',
            words: [
              { text: 'She is an' },
              { text: 'in-' },
              { text: 'CRE-', stress: true },
              { text: 'di-bly' },
              { text: 'TA-len-ted', stress: true },
              { text: 'mu-' },
              { text: 'SI-cian.', stress: true }
            ]
          },
          {
            sentence: 'Please pre-PARE the DO-cu-ment for the ME-e-ting.',
            translation: 'Vui lòng chuẩn bị tài liệu cho cuộc họp.',
            words: [
              { text: 'Please' },
              { text: 'pre-' },
              { text: 'PARE', stress: true },
              { text: 'the' },
              { text: 'DO-cu-ment', stress: true },
              { text: 'for the' },
              { text: 'MEE-ting.', stress: true }
            ]
          },
          {
            sentence: 'COM-pu-ter science is a FAS-ci-na-ting field.',
            translation: 'Môn khoa học máy tính là một ngành rất thú vị.',
            words: [
              { text: 'Com-' },
              { text: 'PU-ter', stress: true },
              { text: 'science is a' },
              { text: 'FAS-ci-na-ting', stress: true },
              { text: 'FIELD.', stress: true }
            ]
          },
          {
            sentence: 'It is es-SEN-tial to de-VE-lop strong com-mu-ni-CA-tion skills.',
            translation: 'Phát triển kỹ năng giao tiếp xuất sắc là điều cực kỳ thiết yếu.',
            words: [
              { text: 'It is' },
              { text: 'es-' },
              { text: 'SEN-tial', stress: true },
              { text: 'to' },
              { text: 'de-' },
              { text: 'VE-lop', stress: true },
              { text: 'strong' },
              { text: 'com-mu-ni-' },
              { text: 'CA-tion', stress: true },
              { text: 'SKILLS.', stress: true }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'hts-04',
    title: 'Connected Speech',
    vietnameseTitle: 'Nối âm',
    category: 'Communication',
    subCategory: ['How to Speak'],
    icon: '🔗',
    color: '#2A9D8F',
    description: 'Cách nối các từ lại với nhau khi nói nhanh.',
    words: [
      { id: 'hts4-1', word: 'Link', ipa: '/lɪŋk/', definition: 'Nối lại.', translation: 'Nối', example: 'Link the consonant to the vowel.', blankSentence: 'Fluent speakers usually ____ a final consonant to the next vowel.', emoji: '🤝' },
      { id: 'hts4-2', word: 'Blend', ipa: '/blend/', definition: 'Hòa quyện âm thanh.', translation: 'Hòa quyện', example: 'Blend the sounds to speak faster.', blankSentence: 'The letters T and Y often ____ to form a "ch" sound.', emoji: '🌪️' }
    ],
    howToSpeak: [
      {
        type: 'connected_speech',
        title: 'Smooth Talker & Cảnh Báo Nuốt Âm Cuối',
        description: 'Tập nối âm với 10 câu thực tế từ ngắn đến dài. Biểu tượng móc nối thể hiện điểm âm đuôi của từ trước hòa vào âm đầu của từ sau.',
        theory: 'Nối âm (Connected Speech) xảy ra khi người bản xứ nói nhanh. Nếu một từ kết thúc bằng một phụ âm và từ tiếp theo bắt đầu bằng một nguyên âm, họ sẽ nối phụ âm đó sang nguyên âm để tạo âm thanh mượt mà không bị ngắt quãng (Ví dụ: find_out, an_apple). \n\n⚠️ ĐẶC BIỆT CẢNH BÁO TAI HẠI: Người Việt hay có thói quen đọc THIẾU ÂM CUỐI dẫn đến THIẾU NỐI ÂM, điều này tạo ra những tình huống "dở khóc dở cười" làm biến đổi 100% ý nghĩa câu nói (Xem phần phân tích các bẫy nuốt âm nguy hiểm bên dưới)!',
        embarrassingTraps: [
          {
            targetPhrase: 'dine out',
            mistakeSound: 'die out',
            correctSentence: 'I want to dine out with you tonight.',
            correctMeaning: 'Tối nay tôi muốn đi ăn ngoài tiệm cùng bạn.',
            trapSentence: 'I want to "die" out with you tonight.',
            trapMeaning: 'Tối nay tôi muốn CHẾT cùng bạn ngoài đường! (Do nuốt mất phụ âm cuối /n/)',
            explanation: 'Nuốt phụ âm /n/ khiến "dine" biến thành "die", chuyển một lời mời hẹn hò lãng mạn thành một lời đe dọa thảm họa!'
          },
          {
            targetPhrase: 'dive in',
            mistakeSound: 'die in',
            correctSentence: 'I want to dive in the deep sea.',
            correctMeaning: 'Tôi muốn lặn xuống biển sâu ngắm san hô.',
            trapSentence: 'I want to "die" in the deep sea.',
            trapMeaning: 'Tôi muốn CHẾT chìm dưới đáy biển sâu! (Do nuốt mất phụ âm cuối /v/)',
            explanation: 'Bỏ quên phụ âm răng-môi /v/ và không nối âm khiến "dive in" biến thành "die in" rùng rợn!'
          },
          {
            targetPhrase: 'white wine',
            mistakeSound: 'white why',
            correctSentence: "I'd like a glass of white wine, please.",
            correctMeaning: 'Làm ơn cho tôi một ly rượu vang trắng.',
            trapSentence: "I'd like a glass of white 'why', please.",
            trapMeaning: 'Làm ơn cho tôi một ly... tại sao màu trắng?! (Do nuốt âm /n/)',
            explanation: 'Nuốt âm cuối /n/ của "wine" khiến người bồi bàn ngơ ngác không hiểu bạn muốn gọi đồ uống gì.'
          },
          {
            targetPhrase: 'hold on',
            mistakeSound: 'ho-on',
            correctSentence: 'Hold on a second, please.',
            correctMeaning: 'Làm ơn giữ máy / chờ một chút nhé.',
            trapSentence: 'Ho-on a second, please.',
            trapMeaning: 'Âm thanh cụt lủn kỳ quặc, vô nghĩa! (Do bỏ qua âm /ld/ và không nối âm)',
            explanation: 'Phải giữ âm /l/ và nối /d/ sang "on" tạo thành "hol-d‿on" mượt mà.'
          },
          {
            targetPhrase: 'need a',
            mistakeSound: 'knee a',
            correctSentence: 'I really need a break right now.',
            correctMeaning: 'Tôi thật sự cần nghỉ ngơi một chút.',
            trapSentence: 'I really "knee" a break right now.',
            trapMeaning: 'Tôi thật sự lấy "đầu gối" bẻ gãy một cái?! (Do nuốt phụ âm /d/)',
            explanation: 'Không có âm /d/ nối sang "a", "need a" nghe y hệt như danh từ "knee" (đầu gối).'
          },
          {
            targetPhrase: 'live in',
            mistakeSound: 'lie in',
            correctSentence: 'They live in a beautiful house.',
            correctMeaning: 'Họ sống trong một ngôi nhà đẹp.',
            trapSentence: 'They "lie" in a beautiful house.',
            trapMeaning: 'Họ nói dối / nằm lì trong ngôi nhà! (Nuốt /v/ biến "live" thành "lie")',
            explanation: 'Âm rung /v/ của "live" phải nối sang "in" tạo thành "li-v‿in".'
          }
        ],
        items: [
          {
            sentence: 'An apple a day.',
            translation: 'Một quả táo mỗi ngày. ("An apple" nghe gần như "A-nap-ple")',
            words: [
              { text: 'A', linkToNext: true },
              { text: 'nap', linkToNext: true },
              { text: 'ple', linkToNext: true },
              { text: 'a day.' }
            ]
          },
          {
            sentence: 'I want to find out.',
            translation: 'Tôi muốn tìm hiểu. ("find out" nghe như "fin-dout")',
            words: [
              { text: 'I want to' },
              { text: 'fin', linkToNext: true },
              { text: 'dout.' }
            ]
          },
          {
            sentence: 'Please wake up now.',
            translation: 'Làm ơn hãy dậy ngay đi. ("wake up" nghe như "way-kup")',
            words: [
              { text: 'Please' },
              { text: 'way', linkToNext: true },
              { text: 'kup' },
              { text: 'now.' }
            ]
          },
          {
            sentence: 'Please come on in!',
            translation: 'Mời bạn đi vào trong nhé! ("come on in" nghe như "co-mo-nin")',
            words: [
              { text: 'Please' },
              { text: 'co', linkToNext: true },
              { text: 'mo', linkToNext: true },
              { text: 'nin!' }
            ]
          },
          {
            sentence: 'Read a book tonight.',
            translation: 'Đọc một cuốn sách tối nay đi. ("read a" nghe như "ree-da")',
            words: [
              { text: 'Ree', linkToNext: true },
              { text: 'da book' },
              { text: 'tonight.' }
            ]
          },
          {
            sentence: 'He turned on the light.',
            translation: 'Anh ấy đã bật đèn lên. ("turned on" nối âm /d/ qua /ɒ/)',
            words: [
              { text: 'He' },
              { text: 'turn', linkToNext: true },
              { text: 'don the' },
              { text: 'light.' }
            ]
          },
          {
            sentence: 'I will find out about it.',
            translation: 'Tôi sẽ tìm hiểu rõ thông tin về nó. (Liên hoàn nối: find_out_about_it)',
            words: [
              { text: 'I will' },
              { text: 'fin', linkToNext: true },
              { text: 'dou', linkToNext: true },
              { text: 'ta', linkToNext: true },
              { text: 'bou', linkToNext: true },
              { text: 'tit.' }
            ]
          },
          {
            sentence: 'We need some more time.',
            translation: 'Chúng tôi cần thêm một chút thời gian nữa. (Nối âm đồng hóa đồng phụ âm m-m: "some more" nói lướt m nhanh)',
            words: [
              { text: 'We need' },
              { text: 'some', linkToNext: true },
              { text: 'more time.' }
            ]
          },
          {
            sentence: 'Turn off the computer and go out.',
            translation: 'Tắt máy tính đi và ngoài kia chơi đi. (Turn_off, and_go_out)',
            words: [
              { text: 'Tur', linkToNext: true },
              { text: 'noff the computer' },
              { text: 'an', linkToNext: true },
              { text: 'dgo', linkToNext: true },
              { text: 'wout.' }
            ]
          },
          {
            sentence: 'Take a deep breath and let it go.',
            translation: 'Hít một hơi thật sâu và để mọi thứ trôi qua xuôi dòng. (Take_a, let_it)',
            words: [
              { text: 'Tay', linkToNext: true },
              { text: 'ka deep breath' },
              { text: 'and' },
              { text: 'le', linkToNext: true },
              { text: 'tit go.' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'hts-05',
    title: '7 Mẹo Phát Âm Chuẩn Hơn',
    vietnameseTitle: '7 Mẹo Vàng Phát Âm & Nói Tự Nhiên Như Người Bản Xứ 🛠️',
    category: 'Communication',
    subCategory: ['How to Speak'],
    icon: '🛠️',
    color: '#E76F51',
    description: '7 mẹo thực tế: âm cuối, nối âm, strong/weak sounds, trọng âm ngân vang, thanh ngang không dấu sắc, đọc cụm từ, và lướt từ phụ.',
    words: [
      { id: 'tip-w1', word: 'Voiced', ipa: '/vɔɪst/', definition: 'Âm hữu thanh có rung dây thanh quản.', translation: 'Âm hữu thanh (rung cổ)', example: 'Voiced consonants make your vocal cords vibrate.', blankSentence: 'The sound /b/ is a ____ consonant.', emoji: '🔊' },
      { id: 'tip-w2', word: 'Unvoiced', ipa: '/ʌnˈvɔɪst/', definition: 'Âm vô thanh không rung dây thanh quản.', translation: 'Âm vô thanh (bật hơi)', example: 'Unvoiced sounds like /p/ and /t/ only push air.', blankSentence: 'Whispered sounds are usually ____.', emoji: '💨' },
      { id: 'tip-w3', word: 'Connected Speech', ipa: '/kəˈnektɪd spiːtʃ/', definition: 'Nói nối các từ lại với nhau trong ngữ lưu tự nhiên.', translation: 'Nói nối âm', example: 'Connected speech makes your English flow naturally.', blankSentence: 'Native speakers use ____ speech to speak faster.', emoji: '🔗' },
      { id: 'tip-w4', word: 'Weak Form', ipa: '/wiːk fɔːm/', definition: 'Dạng phát âm nhẹ, lướt của từ chức năng.', translation: 'Dạng âm yếu / lướt', example: 'Use weak forms for words like "to" and "can".', blankSentence: 'The schwa sound is the most common ____ form.', emoji: '🍃' },
      { id: 'tip-w5', word: 'Stress', ipa: '/stres/', definition: 'Trọng âm cần nói to hơn, cao hơn và ngân dài hơn.', translation: 'Trọng âm ngân vang', example: 'Put the stress on the correct syllable.', blankSentence: 'Always emphasize the syllable with primary ____.', emoji: '🎯' },
      { id: 'tip-w6', word: 'Monotone Flat', ipa: '/ˈmɒnətəʊn flæt/', definition: 'Giọng thanh ngang, tránh đánh dấu sắc nhọn.', translation: 'Thanh ngang tự nhiên', example: 'Keep stressed syllables flat, avoid adding a sharp tone.', blankSentence: 'English stressed syllables should sound ____ without Vietnamese accents.', emoji: '🎙️' },
      { id: 'tip-w7', word: 'Function Words', ipa: '/ˈfʌŋkʃn wɜːdz/', definition: 'Từ phụ ngữ pháp (a, the, to, and) đọc nhanh.', translation: 'Từ phụ ngữ pháp', example: 'Speed through function words to sound fluent.', blankSentence: 'Articles and prepositions are classified as ____ words.', emoji: '⏩' }
    ],
    howToSpeak: [
      {
        type: 'pronunciation_tips',
        title: 'Các Mẹo Phát Âm Chuẩn Hơn 🛠️',
        description: 'Dưới đây là 7 mẹo thực tế giúp bạn cải thiện phát âm và nói tự nhiên như người bản xứ. Bấm từng mẹo để nghe phát âm mẫu!',
        theory: 'Phát âm tiếng Anh chuẩn xác không chỉ là ghép từng âm ký tự lại với nhau, mà là nắm vững 7 nguyên lý cốt lõi: kiểm soát âm cuối rung/không rung, nối âm mượt mà, phân biệt âm mạnh/nhẹ, ngân vang ở trọng âm, giữ thanh ngang không dấu sắc, đọc theo cụm ngữ nghĩa và lướt nhanh từ phụ.',
        tips: [
          {
            number: 1,
            title: 'Luôn để ý âm cuối (Voiced/Unvoiced Consonant Sounds)',
            icon: '🔊',
            tag: 'Âm Cuối Rung & Không Rung',
            explanation: 'Âm cuối có thể là "voiced" (rung dây thanh quản, ví dụ: /b/, /d/, /g/) hoặc "unvoiced" (không rung, chỉ bật luồng hơi, ví dụ: /p/, /t/, /k/). Phát âm sai hoặc nuốt âm cuối dễ gây hiểu nhầm hoàn toàn sang từ khác.',
            exampleWord1: 'Bad',
            ipa1: '/bæd/ (voiced - rung cổ)',
            meaning1: 'tồi tệ / xấu',
            exampleWord2: 'Bat',
            ipa2: '/bæt/ (unvoiced - không rung)',
            meaning2: 'con dơi / cây gậy bóng chày',
            practiceSentence: 'The bad bat flew into the cave.',
            practiceTranslation: 'Con dơi xấu xí bay vào hang động. (Cảm nhận /d/ rung ở cổ họng vs /t/ dứt khoát không rung).',
            actionTip: 'Nói "bad" và đặt tay lên cổ họng cảm nhận độ rung rần rần, sau đó nói "bat" luồng hơi bật ra dứt khoát không rung.'
          },
          {
            number: 2,
            title: 'Luôn để ý nối âm (Connected Speech)',
            icon: '🔗',
            tag: 'Dòng Chảy Liền Mạch',
            explanation: 'Trong tiếng Anh tự nhiên, các từ không bao giờ đứng tách rời như những hòn đảo mà nối mượt mà phụ âm cuối của từ trước sang nguyên âm đầu của từ sau.',
            exampleWord1: 'What are you doing?',
            ipa1: '/wɒtər ju ˈduː.ɪŋ/',
            meaning1: 'Bạn đang làm gì thế? (Nối "what" và "are" thành /wɒtər/)',
            exampleWord2: 'Pick it up',
            ipa2: '/pɪ-kɪ-tʌp/',
            meaning2: 'Nhặt nó lên đi (Nối kép: pick_it_up)',
            practiceSentence: 'What are you doing with an apple?',
            practiceTranslation: 'Bạn đang làm gì với quả táo vậy? ("What are" -> /wɒtər/, "an apple" -> /ə-næpl/).',
            actionTip: 'Nói nhanh cụm "What are" thành một âm liền mạch "wɒt-ər", không ngắt hơi giữa chừng.'
          },
          {
            number: 3,
            title: 'Phân biệt nguyên âm mạnh và nhẹ (Strong/Weak Sounds)',
            icon: '🌟',
            tag: 'Nguyên Âm Mạnh vs Nhẹ',
            explanation: 'Nguyên âm mạnh (Strong sound) được nhấn rõ ràng, to và ngân dài (ví dụ: /iː/). Nguyên âm nhẹ (Weak sound) thường rất ngắn, mờ và chuyển thành âm Schwa /ə/ hoặc /ɪ/.',
            exampleWord1: 'Believe',
            ipa1: '/bɪˈliːv/',
            meaning1: 'tin tưởng ("li" mạnh ngân dài /iː/, còn "be" nhẹ /ɪ/)',
            exampleWord2: 'Banana',
            ipa2: '/bəˈnæn.ə/',
            meaning2: 'quả chuối ("na" giữa mạnh, hai âm "ba" và "na" cuối là âm Schwa /ə/ nhẹ)',
            practiceSentence: 'I believe that she can succeed.',
            practiceTranslation: 'Tôi tin rằng cô ấy có thể thành công. (Nhấn mạnh "LIEVE", lướt nhẹ "be-").',
            actionTip: 'Nhấn mạnh to rõ "LI" và nói lướt nhẹ nhàng "be".'
          },
          {
            number: 4,
            title: 'Phát âm mạnh và ngân vang ở âm nhấn (Multisyllabic Words)',
            icon: '🎵',
            tag: 'Trọng Âm Đa Âm Tiết',
            explanation: 'Trong các từ có nhiều âm tiết, âm nhấn (Primary Stress) cần được nói TO HƠN, CAO HƠN và NGÂN DÀI HƠN các âm tiết còn lại.',
            exampleWord1: 'Beautiful',
            ipa1: '/ˈbjuː.tɪ.fəl/',
            meaning1: 'xinh đẹp (nhấn mạnh "BEAU", ngân dài /bjuː/)',
            exampleWord2: 'Comfortable',
            ipa2: '/ˈkʌmf.tə.bəl/',
            meaning2: 'thoải mái (nhấn mạnh "COMF", lướt nhanh phần sau)',
            practiceSentence: 'She lives in a beautiful and comfortable home.',
            practiceTranslation: 'Cô ấy sống trong một ngôi nhà xinh đẹp và thoải mái.',
            actionTip: 'Nói "BEAU-ti-ful" với trọng âm đánh mạnh vào "beau", hai âm tiết sau thả lỏng rơi nhẹ.'
          },
          {
            number: 5,
            title: 'Phát âm thanh ngang, tránh đánh dấu sắc',
            icon: '🎙️',
            tag: 'Giữ Thanh Ngang Tự Nhiên',
            explanation: 'Tiếng Anh KHÔNG dùng thanh điệu như tiếng Việt (sắc, huyền, hỏi, ngã, nặng). Âm nhấn cần giữ thanh NGANG ngân dài (như nốt nhạc cao nhưng bằng phẳng), âm không nhấn rơi nhẹ như dấu huyền. Tuyệt đối không đánh dấu sắc nhọn làm giọng bị chua và chói tai!',
            exampleWord1: 'Teacher',
            ipa1: '/ˈtiː.tʃər/',
            meaning1: 'giáo viên ("tea" ngang ngân dài, "cher" nhẹ rơi)',
            exampleWord2: 'Doctor',
            ipa2: '/ˈdɒk.tər/',
            meaning2: 'bác sĩ ("doc" ngang, "tor" nhẹ rơi)',
            practiceSentence: 'My teacher is a great doctor of science.',
            practiceTranslation: 'Giáo viên của tôi là một tiến sĩ khoa học xuất sắc.',
            actionTip: 'Tránh đọc dấu sắc nhọn "TÍ-cher", hãy đọc "TEE-cher" với âm "TEE" ngân ngang bằng phẳng.'
          },
          {
            number: 6,
            title: 'Đọc thành cụm danh/động/tính/trạng từ (Phrasing)',
            icon: '📝',
            tag: 'Nhóm Cụm Từ Ý Nghĩa',
            explanation: 'Xác định các cụm từ có nghĩa (Noun phrases, Verb phrases, Prepositional phrases) trong câu để đọc liền mạch theo từng cụm, thay vì đọc tách rời từng chữ đơn lẻ.',
            exampleWord1: 'The big dog',
            ipa1: '/ðə bɪɡ dɒɡ/',
            meaning1: 'Cụm danh từ: chú chó lớn',
            exampleWord2: 'runs quickly',
            ipa2: '/rʌnz ˈkwɪk.li/',
            meaning2: 'Cụm vị ngữ: chạy rất nhanh',
            practiceSentence: 'The big dog / runs quickly / across the green park.',
            practiceTranslation: 'Chú chó lớn / chạy thật nhanh / băng qua công viên xanh. (Đọc thành 3 cụm liền mạch).',
            actionTip: 'Nhóm từ lại theo cụm khi luyện nói, chỉ lấy hơi nhẹ ở ranh giới giữa các cụm.'
          },
          {
            number: 7,
            title: 'Đọc nhanh các từ phụ (Function Words) ⏩',
            icon: '⏩',
            tag: 'Lướt Nhanh Từ Phụ',
            explanation: 'Các từ ngữ pháp như "the", "a", "an", "to", "and", "of", "for" mang ít thông tin cốt lõi, do đó người bản xứ luôn đọc lướt cực nhanh và nhẹ để dồn năng lượng vào từ chính.',
            exampleWord1: 'I want to go to the park.',
            ipa1: '/aɪ wɒnt tə gəʊ tə ðə pɑːk/',
            meaning1: 'Tôi muốn đi đến công viên ("to", "the" đọc nhẹ lướt thành /tə/, /ðə/)',
            exampleWord2: 'Fish and chips',
            ipa2: '/fɪʃ ən tʃɪps/',
            meaning2: 'Cá và khoai tây ("and" lướt thành /ən/ hoặc /n/)',
            practiceSentence: 'I want to go to the park and have a picnic.',
            practiceTranslation: 'Tôi muốn đi tới công viên và ăn dã ngoại. (Nhấn: WANT, GO, PARK, PICNIC; Lướt: to, the, and, a).',
            actionTip: 'Nhấn mạnh các từ chính "want", "go", "park", đọc lướt thoăn thoắt các từ phụ "to", "the".'
          }
        ]
      }
    ]
  },
  {
    id: 'hts-06',
    title: 'Bí Mật Âm Câm (Silent Letters)',
    vietnameseTitle: 'Chuyên Đề Âm Câm: Không Đọc Thừa Âm - Chuẩn Như Bản Xứ',
    category: 'Communication',
    subCategory: ['How to Speak'],
    icon: '🤫',
    color: '#F4A261',
    description: 'Nắm vững hơn 60% từ vựng tiếng Anh chứa âm câm (B, K, W, G/GH, L, P, T, H, C, S) và quy tắc nhận diện để không bao giờ bị đọc thừa âm gây ngượng ngùng.',
    words: [
      { id: 'hts06-w1', word: 'doubt', ipa: '/daʊt/', definition: 'sự hoài nghi, nghi ngờ (âm B câm)', translation: 'hoài nghi / nghi ngờ', example: 'I have no doubt about your ability.', blankSentence: 'I have no ____ about your success.', emoji: '🤔' },
      { id: 'hts06-w2', word: 'climb', ipa: '/klaɪm/', definition: 'leo trèo (âm B câm sau M)', translation: 'leo trèo', example: 'They love to climb high mountains.', blankSentence: 'Children love to ____ trees in the park.', emoji: '🧗' },
      { id: 'hts06-w3', word: 'knife', ipa: '/naɪf/', definition: 'con dao (âm K câm trước N)', translation: 'con dao sắc', example: 'Be careful with that sharp knife.', blankSentence: 'Use a sharp ____ to slice the bread.', emoji: '🔪' },
      { id: 'hts06-w4', word: 'knowledge', ipa: '/ˈnɒl.ɪdʒ/', definition: 'kiến thức, hiểu biết (K câm)', translation: 'kiến thức', example: 'Knowledge is power in the modern world.', blankSentence: 'Books are a great source of ____.', emoji: '📚' },
      { id: 'hts06-w5', word: 'wrong', ipa: '/rɒŋ/', definition: 'sai trái, không đúng (W câm trước R)', translation: 'sai trái', example: 'There is nothing wrong with making mistakes.', blankSentence: 'You dialed the ____ phone number.', emoji: '❌' },
      { id: 'hts06-w6', word: 'receipt', ipa: '/rɪˈsiːt/', definition: 'hóa đơn, biên lai (âm P câm)', translation: 'hóa đơn / biên lai', example: 'Always keep your receipt after payment.', blankSentence: 'Please give me the payment ____.', emoji: '🧾' },
      { id: 'hts06-w7', word: 'listen', ipa: '/ˈlɪs.ən/', definition: 'lắng nghe (âm T câm trong đuôi -sten)', translation: 'lắng nghe', example: 'Listen carefully to the instructions.', blankSentence: 'Always ____ to good advice from teachers.', emoji: '👂' },
      { id: 'hts06-w8', word: 'honest', ipa: '/ˈɒn.ɪst/', definition: 'thật thà, chân thành (H câm đầu từ)', translation: 'thật thà, trung thực', example: 'She is an honest and hardworking person.', blankSentence: 'To be completely ____, I agree with you.', emoji: '🤝' },
      { id: 'hts06-w9', word: 'island', ipa: '/ˈaɪ.lənd/', definition: 'hòn đảo (âm S câm)', translation: 'hòn đảo', example: 'They spent their holiday on a tropical island.', blankSentence: 'They sailed to a beautiful green ____.', emoji: '🏝️' },
      { id: 'hts06-w10', word: 'muscle', ipa: '/ˈmʌs.əl/', definition: 'cơ bắp (âm C câm sau S)', translation: 'cơ bắp', example: 'Regular exercise builds strong muscles.', blankSentence: 'Lifting weights builds strong arm ____.', emoji: '💪' }
    ],
    howToSpeak: [
      {
        type: 'silent_letters',
        title: '9 Nhóm Âm Câm Kinh Điển Trong Tiếng Anh',
        description: 'Hơn 60% từ tiếng Anh chứa các chữ cái viết ra nhưng không được phát âm. Nắm vững 9 nhóm này để phát âm sạch sẽ, tinh tế và không bao giờ bị "quê" vì đọc thừa âm!',
        theory: 'Âm câm hình thành do lịch sử tiếng Anh mượn từ vựng từ tiếng Pháp cổ, tiếng Hy Lạp, tiếng Đức và bán đảo Scandinavia. Sau cuộc Đại Biến Chuyển Nguyên Âm (Great Vowel Shift), cách nói đã biến đổi giản lược để nói nhanh hơn nhưng chữ viết thì bị "đóng băng" từ thời in ấn thế kỷ 15. Đọc to âm câm là lỗi phổ biến nhất khiến người nghe nhận ra bạn chưa nắm vững ngữ âm bản xứ.',
        silentLetterGroups: [
          {
            letter: 'B Câm (Silent B)',
            rule: 'Đứng sau "m" ở đuôi từ (-mb) hoặc đứng trước "t" (-bt)',
            explanation: 'Khi chữ B đi sau M ở cuối từ hoặc đứng trước T, môi chỉ khép lại ở âm /m/ hoặc chuyển ngay sang /t/, tuyệt đối không bật âm /b/.',
            words: [
              { word: 'doubt', ipa: '/daʊt/', translation: 'hoài nghi / nghi ngờ', silentChar: 'b', note: 'Đọc là "đao-t", không đọc "đao-b-t"' },
              { word: 'debt', ipa: '/det/', translation: 'khoản nợ', silentChar: 'b', note: 'Đọc là "đét", không đọc "đép-t"' },
              { word: 'subtle', ipa: '/ˈsʌt.əl/', translation: 'tinh tế, tế nhị', silentChar: 'b', note: 'Đọc là "sát-tl", b hoàn toàn câm' },
              { word: 'climb', ipa: '/klaɪm/', translation: 'leo trèo', silentChar: 'b', note: 'Đọc là "klai-m", không bật b' },
              { word: 'bomb', ipa: '/bɒm/', translation: 'quả bom', silentChar: 'b', note: 'Đọc là "bom", không có âm b cuối' },
              { word: 'comb', ipa: '/koʊm/', translation: 'cái lược, chải đầu', silentChar: 'b', note: 'Đọc là "cô-m"' },
              { word: 'thumb', ipa: '/θʌm/', translation: 'ngón tay cái', silentChar: 'b', note: 'Đọc là "thâm"' },
              { word: 'lamb', ipa: '/læm/', translation: 'thịt cừu non', silentChar: 'b', note: 'Đọc là "lam"' },
              { word: 'tomb', ipa: '/tuːm/', translation: 'lăng mộ', silentChar: 'b', note: 'Đọc là "tu-m"' }
            ],
            practiceSentence: 'I have no doubt he can climb the mountain and pay off his debt.',
            practiceTranslation: 'Tôi không hề hoài nghi việc anh ấy có thể leo núi và trả hết nợ (doubt = /daʊt/, climb = /klaɪm/, debt = /det/).'
          },
          {
            letter: 'K Câm (Silent K)',
            rule: 'Đứng trước "n" ở đầu từ (kn-)',
            explanation: 'Tất cả các từ bắt đầu bằng cụm "kn-" thì chữ K đều câm 100%, bạn chỉ việc bắt đầu câu bằng âm /n/.',
            words: [
              { word: 'know', ipa: '/noʊ/', translation: 'biết, hiểu', silentChar: 'k', note: 'Đọc là "nâu", không đọc "k-nâu"' },
              { word: 'knife', ipa: '/naɪf/', translation: 'con dao', silentChar: 'k', note: 'Đọc là "nai-f"' },
              { word: 'knee', ipa: '/niː/', translation: 'đầu gối', silentChar: 'k', note: 'Đọc là "ni"' },
              { word: 'knight', ipa: '/naɪt/', translation: 'hiệp sĩ', silentChar: 'k', note: 'Đọc giống hệt từ "night"' },
              { word: 'knock', ipa: '/nɒk/', translation: 'gõ cửa', silentChar: 'k', note: 'Đọc là "nók"' },
              { word: 'knot', ipa: '/nɒt/', translation: 'nút thắt', silentChar: 'k', note: 'Đọc giống hệt từ "not"' },
              { word: 'knowledge', ipa: '/ˈnɒl.ɪdʒ/', translation: 'kiến thức', silentChar: 'k', note: 'Đọc là "nó-lịch"' }
            ],
            practiceSentence: 'The brave knight knows how to tie a knot with a sharp knife.',
            practiceTranslation: 'Người hiệp sĩ dũng cảm biết cách thắt một nút dây bằng con dao sắc.'
          },
          {
            letter: 'W Câm (Silent W)',
            rule: 'Đứng trước "r" ở đầu từ (wr-) hoặc trong nhóm "wh + o"',
            explanation: 'Đầu từ "wr-" luôn chỉ phát âm âm uốn môi /r/. Trong các từ "who, whole, whose", chữ W câm và âm H được phát âm.',
            words: [
              { word: 'write', ipa: '/raɪt/', translation: 'viết', silentChar: 'w', note: 'Đọc giống từ "right"' },
              { word: 'wrong', ipa: '/rɒŋ/', translation: 'sai trái', silentChar: 'w', note: 'Đọc là "rong"' },
              { word: 'wrist', ipa: '/rɪst/', translation: 'cổ tay', silentChar: 'w', note: 'Đọc là "rist"' },
              { word: 'wrap', ipa: '/ræp/', translation: 'gói, bọc quà', silentChar: 'w', note: 'Đọc giống từ "rap"' },
              { word: 'who', ipa: '/huː/', translation: 'ai', silentChar: 'w', note: 'Bắt đầu bằng /h/, w câm' },
              { word: 'whole', ipa: '/hoʊl/', translation: 'toàn bộ', silentChar: 'w', note: 'Đọc giống từ "hole"' },
              { word: 'answer', ipa: '/ˈɑːn.sər/', translation: 'câu trả lời', silentChar: 'w', note: 'Đọc là "an-sơ", không có âm w' },
              { word: 'sword', ipa: '/sɔːd/', translation: 'thanh kiếm', silentChar: 'w', note: 'Đọc là "sò-d", không đọc "s-uốt"' }
            ],
            practiceSentence: 'Who wrote the wrong answer on the whole document?',
            practiceTranslation: 'Ai đã viết câu trả lời sai trên toàn bộ tập tài liệu?'
          },
          {
            letter: 'G & GH Câm (Silent G & GH)',
            rule: '"g" đứng trước "n" (gn-, -gn) hoặc "gh" đứng sau nguyên âm',
            explanation: 'Chữ G trước N ở đầu hoặc cuối từ hoàn toàn câm. Đuôi "-ight", "-ought" có "gh" câm, biến nguyên âm thành âm dài.',
            words: [
              { word: 'sign', ipa: '/saɪn/', translation: 'ký tên, biển hiệu', silentChar: 'g', note: 'Đọc là "sai-n"' },
              { word: 'design', ipa: '/dɪˈzaɪn/', translation: 'thiết kế', silentChar: 'g', note: 'Đọc là "đi-zai-n"' },
              { word: 'campaign', ipa: '/kæmˈpeɪn/', translation: 'chiến dịch', silentChar: 'g', note: 'Đọc là "kèm-pein"' },
              { word: 'foreign', ipa: '/ˈfɒr.ən/', translation: 'nước ngoài', silentChar: 'g', note: 'Đọc là "fó-rần"' },
              { word: 'high', ipa: '/haɪ/', translation: 'cao', silentChar: 'gh', note: 'Đọc là "hai", gh câm' },
              { word: 'light', ipa: '/laɪt/', translation: 'ánh sáng, nhẹ', silentChar: 'gh', note: 'Đọc là "lai-t"' },
              { word: 'thought', ipa: '/θɔːt/', translation: 'suy nghĩ', silentChar: 'gh', note: 'Đọc là "thót"' },
              { word: 'daughter', ipa: '/ˈdɔː.tər/', translation: 'con gái', silentChar: 'gh', note: 'Đọc là "đó-tơ"' }
            ],
            practiceSentence: 'The foreign designer signed the contract late at night.',
            practiceTranslation: 'Nhà thiết kế nước ngoài đã ký hợp đồng vào đêm muộn.'
          },
          {
            letter: 'L Câm (Silent L)',
            rule: 'Đứng trước "k", "m", "f", "d" (-lk, -lm, -lf, -ld)',
            explanation: 'Tuyệt đối không uốn lưỡi đọc chữ L trong "walk" hay "talk"! Âm L hoàn toàn biến mất, chỉ còn nguyên âm kéo dài.',
            words: [
              { word: 'talk', ipa: '/tɔːk/', translation: 'trò chuyện', silentChar: 'l', note: 'Đọc là "tó-k", không uốn L' },
              { word: 'walk', ipa: '/wɔːk/', translation: 'đi bộ', silentChar: 'l', note: 'Đọc là "wó-k"' },
              { word: 'half', ipa: '/hɑːf/', translation: 'một nửa', silentChar: 'l', note: 'Đọc là "ha-f"' },
              { word: 'calm', ipa: '/kɑːm/', translation: 'bình tĩnh', silentChar: 'l', note: 'Đọc là "ka-m"' },
              { word: 'salmon', ipa: '/ˈsæm.ən/', translation: 'cá hồi', silentChar: 'l', note: 'Đọc là "sæm-ần", KHÔNG đọc là "sal-mon"!' },
              { word: 'could', ipa: '/kʊd/', translation: 'có thể', silentChar: 'l', note: 'Đọc là "kút", L câm' },
              { word: 'should', ipa: '/ʃʊd/', translation: 'nên', silentChar: 'l', note: 'Đọc là "sút", L câm' },
              { word: 'would', ipa: '/wʊd/', translation: 'sẽ / muốn', silentChar: 'l', note: 'Đọc là "wút", L câm' }
            ],
            practiceSentence: 'We should stay calm and walk half a mile to talk.',
            practiceTranslation: 'Chúng ta nên giữ bình tĩnh và đi bộ nửa dặm để trò chuyện.'
          },
          {
            letter: 'P Câm (Silent P)',
            rule: 'Đầu từ gốc Hy Lạp (ps-, pn-, pt-) hoặc trong từ mượn Pháp',
            explanation: 'Các thuật ngữ tâm lý học, y khoa bắt đầu bằng "ps-", "pn-" thì P hoàn toàn câm. Trong từ "receipt", P cũng câm 100%.',
            words: [
              { word: 'psychology', ipa: '/saɪˈkɒl.ə.dʒi/', translation: 'tâm lý học', silentChar: 'p', note: 'Bắt đầu bằng /s/, đọc "sai-kó-lơ-dji"' },
              { word: 'receipt', ipa: '/rɪˈsiːt/', translation: 'biên lai, hóa đơn', silentChar: 'p', note: 'Đọc là "rì-sít", KHÔNG đọc là "rì-síp-t"!' },
              { word: 'cupboard', ipa: '/ˈkʌb.əd/', translation: 'tủ chén bát', silentChar: 'p', note: 'Đọc là "cắp-bợt", p đồng hóa thành b' },
              { word: 'pneumonia', ipa: '/njuːˈmoʊ.ni.ə/', translation: 'bệnh viêm phổi', silentChar: 'p', note: 'Đọc là "nìu-mâu-ni-ơ"' },
              { word: 'corps', ipa: '/kɔːr/', translation: 'quân đoàn', silentChar: 'p', note: 'P và S đều câm, đọc là "co"' }
            ],
            practiceSentence: 'Keep your payment receipt in the cupboard after studying psychology.',
            practiceTranslation: 'Hãy cất biên lai thanh toán vào tủ chén sau khi học xong môn tâm lý học.'
          },
          {
            letter: 'T Câm (Silent T)',
            rule: 'Đứng trong cụm đuôi "-sten", "-stle" và từ mượn tiếng Pháp',
            explanation: 'Trong "listen" và "castle", âm /t/ bị triệt tiêu để luồng hơi đi thẳng từ /s/ sang âm schwa /ən/, /əl/.',
            words: [
              { word: 'listen', ipa: '/ˈlɪs.ən/', translation: 'lắng nghe', silentChar: 't', note: 'Đọc là "lít-sừn", KHÔNG đọc là "lít-từn"!' },
              { word: 'castle', ipa: '/ˈkɑː.səl/', translation: 'lâu đài', silentChar: 't', note: 'Đọc là "cá-sồ"' },
              { word: 'whistle', ipa: '/ˈwɪs.əl/', translation: 'tiếng còi, huýt sáo', silentChar: 't', note: 'Đọc là "wít-sồ"' },
              { word: 'fasten', ipa: '/ˈfɑːs.ən/', translation: 'thắt chặt (dây an toàn)', silentChar: 't', note: 'Đọc là "phá-sừn"' },
              { word: 'Christmas', ipa: '/ˈkrɪs.məs/', translation: 'Lễ Giáng Sinh', silentChar: 't', note: 'Đọc là "Krít-mợt"' },
              { word: 'ballet', ipa: '/ˈbæl.eɪ/', translation: 'múa ba-lê', silentChar: 't', note: 'Từ gốc Pháp, t cuối câm' }
            ],
            practiceSentence: 'Fasten your seatbelt and listen to the Christmas whistle near the castle.',
            practiceTranslation: 'Hãy thắt dây an toàn và lắng nghe tiếng còi Giáng Sinh gần lâu đài.'
          },
          {
            letter: 'H Câm (Silent H)',
            rule: 'Đầu từ gốc Latin (dùng "an"), sau "r" (rh-) hoặc sau "ex-"',
            explanation: 'Chữ H không bật hơi gió, từ bắt đầu trực tiếp bằng nguyên âm nên bắt buộc đi với mạo từ "an" (an hour, an honest man).',
            words: [
              { word: 'hour', ipa: '/aʊər/', translation: 'giờ đồng hồ', silentChar: 'h', note: 'Đọc là "ao-ơ", dùng "an hour"' },
              { word: 'honest', ipa: '/ˈɒn.ɪst/', translation: 'thật thà, trung thực', silentChar: 'h', note: 'Đọc là "ón-nịt", dùng "an honest person"' },
              { word: 'honor', ipa: '/ˈɒn.ər/', translation: 'vinh dự', silentChar: 'h', note: 'Đọc là "ón-nơ", dùng "an honor"' },
              { word: 'ghost', ipa: '/ɡoʊst/', translation: 'bóng ma', silentChar: 'h', note: 'Đọc là "gô-st", h câm' },
              { word: 'rhythm', ipa: '/ˈrɪð.əm/', translation: 'nhịp điệu', silentChar: 'h', note: 'Đọc là "ri-đừm"' },
              { word: 'exhausted', ipa: '/ɪɡˈzɔː.stɪd/', translation: 'kiệt sức', silentChar: 'h', note: 'Đọc là "ik-zó-stịt"' },
              { word: 'vehicle', ipa: '/ˈviː.ə.kəl/', translation: 'phương tiện, xe cộ', silentChar: 'h', note: 'Đọc là "vi-ơ-kồ", h câm' }
            ],
            practiceSentence: 'It is an honor to meet an honest person after an hour in this vehicle.',
            practiceTranslation: 'Thật là một vinh dự khi gặp một người thật thà sau một giờ ngồi trên chiếc xe này.'
          },
          {
            letter: 'C & S Câm (Silent C & S)',
            rule: '"c" sau "s" (sc-) hoặc "s" trong từ mượn gốc Pháp cổ (island, aisle)',
            explanation: 'Chữ C trong "muscle, scene" đồng hóa hoàn toàn vào âm /s/. Chữ S trong "island, aisle" tuyệt đối không được phát âm.',
            words: [
              { word: 'muscle', ipa: '/ˈmʌs.əl/', translation: 'cơ bắp', silentChar: 'c', note: 'Đọc là "mắ-sồ", c câm' },
              { word: 'scene', ipa: '/siːn/', translation: 'cảnh tượng, phân cảnh', silentChar: 'c', note: 'Đọc là "sin"' },
              { word: 'scissors', ipa: '/ˈsɪz.əz/', translation: 'cái kéo', silentChar: 'c', note: 'Đọc là "xí-zơz"' },
              { word: 'fascinating', ipa: '/ˈfæs.ɪ.neɪ.tɪŋ/', translation: 'hấp dẫn, lôi cuốn', silentChar: 'c', note: 'Đọc là "phá-si-nei-ting"' },
              { word: 'island', ipa: '/ˈaɪ.lənd/', translation: 'hòn đảo', silentChar: 's', note: 'Đọc là "ai-lần", KHÔNG đọc là "ít-lần"!' },
              { word: 'aisle', ipa: '/aɪl/', translation: 'lối đi giữa 2 hàng ghế', silentChar: 's', note: 'Đọc giống từ "I\'ll"' },
              { word: 'debris', ipa: '/ˈdeb.riː/', translation: 'mảnh vỡ, tàn tích', silentChar: 's', note: 'Từ Pháp, s cuối câm, đọc "đé-bri"' }
            ],
            practiceSentence: 'Walk down the aisle to see the fascinating island scenery.',
            practiceTranslation: 'Hãy bước dọc theo lối đi để chiêm ngưỡng khung cảnh hòn đảo kỳ thú.'
          }
        ]
      }
    ]
  },
  {
    id: 'hts-07',
    title: 'Nghệ Thuật Nuốt Âm (Elision & Sound Deletion)',
    vietnameseTitle: 'Chuyên Đề Nuốt Âm: Bí Quyết Nói Nhanh & Lướt Âm Tự Nhiên (Elision)',
    category: 'Communication',
    subCategory: ['How to Speak'],
    icon: '💨',
    color: '#2A9D8F',
    description: 'Học cách người bản ngữ nói tốc độ cao bằng cách nuốt phụ âm /t, d/, nuốt nguyên âm yếu Schwa và rụng âm /h/ trong đại từ một cách tự nhiên.',
    words: [
      { id: 'hts07-w1', word: 'last night', ipa: '/lɑːs naɪt/', definition: 'tối hôm qua (nuốt phụ âm /t/)', translation: 'tối hôm qua', example: 'I stayed up late last night.', blankSentence: 'I had dinner with a friend ____.', emoji: '🌙' },
      { id: 'hts07-w2', word: 'next door', ipa: '/neks dɔːr/', definition: 'nhà bên cạnh (nuốt phụ âm /t/)', translation: 'nhà bên cạnh', example: 'A friendly doctor lives next door.', blankSentence: 'My best friend lives right ____.', emoji: '🚪' },
      { id: 'hts07-w3', word: 'hold tight', ipa: '/hoʊl taɪt/', definition: 'giữ chặt (nuốt phụ âm /d/)', translation: 'giữ chặt', example: 'Hold tight while we ride the roller coaster.', blankSentence: 'Please ____ to the handrail on the bus.', emoji: '✊' },
      { id: 'hts07-w4', word: 'fast food', ipa: '/fæs fuːd/', definition: 'đồ ăn nhanh (nuốt phụ âm /t/)', translation: 'đồ ăn nhanh', example: 'Try not to eat too much fast food.', blankSentence: 'Hamburgers and fries are popular ____.', emoji: '🍔' },
      { id: 'hts07-w5', word: 'camera', ipa: '/ˈkæm.rə/', definition: 'máy ảnh (nuốt nguyên âm schwa, còn 2 âm tiết)', translation: 'máy ảnh', example: 'Bring your camera to the beach.', blankSentence: 'Smile and look straight at the ____.', emoji: '📷' },
      { id: 'hts07-w6', word: 'chocolate', ipa: '/ˈtʃɒk.lət/', definition: 'sô-cô-la (nuốt âm giữa, còn 2 âm tiết)', translation: 'sô-cô-la', example: 'Dark chocolate is good for your heart.', blankSentence: 'She loves a box of sweet ____.', emoji: '🍫' },
      { id: 'hts07-w7', word: 'restaurant', ipa: '/ˈres.trɒnt/', definition: 'nhà hàng (nuốt âm giữa, còn 2 âm tiết)', translation: 'nhà hàng', example: 'Let us book a table at that Italian restaurant.', blankSentence: 'We reserved a nice table at the local ____.', emoji: '🍽️' },
      { id: 'hts07-w8', word: 'family', ipa: '/ˈfæm.li/', definition: 'gia đình (nuốt âm /ɪ/, đọc gọn 2 âm tiết)', translation: 'gia đình', example: 'My family always supports me.', blankSentence: 'Spending time with ____ is priceless.', emoji: '👨‍👩‍👧' },
      { id: 'hts07-w9', word: 'tell him', ipa: '/tel ɪm/', definition: 'bảo với anh ấy (rụng âm /h/ trong him)', translation: 'nói với anh ấy', example: 'Please tell him to call me back.', blankSentence: 'If you see John, please ____ to come here.', emoji: '🗣️' },
      { id: 'hts07-w10', word: 'cup of tea', ipa: '/kʌp ə tiː/', definition: 'tách trà (nuốt âm /v/ trong of)', translation: 'tách trà', example: 'Would you like a hot cup of tea?', blankSentence: 'Relaxing with a warm ____ in the morning.', emoji: '☕' }
    ],
    howToSpeak: [
      {
        type: 'elision',
        title: '4 Nguyên Tắc Nuốt Âm Cốt Lõi Để Nói Tự Nhiên',
        description: 'Nuốt âm (Elision) là hiện tượng lược bỏ âm vị tự nhiên khi nói nhanh nhằm tiết kiệm công sức cơ miệng (Economy of Effort). Người bản ngữ không hề "nói ẩu" - đây là quy tắc ngữ âm sống còn!',
        theory: 'Khi nói ở tốc độ giao tiếp thực tế, các bộ phận phát âm (lưỡi, môi) chuẩn bị trước cho âm tiếp theo, khiến cho âm đứng giữa bị "nuốt chửng" hoàn toàn. Nếu bạn cố đọc từng chữ tròn vành rõ chữ từng âm /t/, /d/, cơ miệng bạn sẽ bị đơ cứng và giọng nghe giật cục như robot.',
        elisionGroups: [
          {
            category: 'Nuốt phụ âm /t/ và /d/ giữa 2 phụ âm khác (Consonant Cluster Elision)',
            rule: 'Khi /t/ hoặc /d/ đứng giữa 2 phụ âm -> Nuốt hoàn toàn',
            explanation: 'Khi một từ kết thúc bằng cụm phụ âm có đuôi /t/ hoặc /d/, và từ tiếp theo bắt đầu bằng phụ âm, âm /t/ hoặc /d/ sẽ biến mất hoàn toàn để luồng hơi chuyển tiếp mượt mà.',
            examples: [
              { original: 'last night', elided: "las' night", ipaOriginal: '/lɑːst naɪt/', ipaElided: '/lɑːs naɪt/', context: 'Âm /t/ kẹp giữa /s/ và /n/ bị nuốt trọn' },
              { original: 'next door', elided: "nex' door", ipaOriginal: '/nekst dɔːr/', ipaElided: '/neks dɔːr/', context: 'Âm /t/ kẹp giữa /ks/ và /d/ bị nuốt' },
              { original: 'hold tight', elided: "hol' tight", ipaOriginal: '/hoʊld taɪt/', ipaElided: '/hoʊl taɪt/', context: 'Âm /d/ kẹp giữa /l/ và /t/ bị nuốt' },
              { original: 'fast food', elided: "fas' food", ipaOriginal: '/fæst fuːd/', ipaElided: '/fæs fuːd/', context: 'Âm /t/ kẹp giữa /s/ và /f/ bị nuốt' },
              { original: 'just married', elided: "jus' married", ipaOriginal: '/dʒʌst ˈmærid/', ipaElided: '/dʒʌs ˈmærid/', context: 'Âm /t/ kẹp giữa /s/ và /m/ bị nuốt' },
              { original: 'stand there', elided: "stan' there", ipaOriginal: '/stænd ðeər/', ipaElided: '/stæn ðeər/', context: 'Âm /d/ kẹp giữa /n/ và /ð/ bị nuốt' }
            ],
            practiceSentence: 'Last night I ate fast food with the just married couple next door.',
            practiceTranslation: 'Tối qua tôi đã ăn thức ăn nhanh cùng cặp đôi mới cưới ở nhà bên cạnh (đọc: las-night, fas-food, jus-married, nex-door).'
          },
          {
            category: 'Nuốt nguyên âm yếu Schwa /ə/ và /ɪ/ trong từ dài (Vowel Syncope)',
            rule: 'Giảm số âm tiết của từ nhiều âm tiết bằng cách nuốt nguyên âm không nhấn',
            explanation: 'Các từ 3-4 âm tiết thường bị nuốt mất nguyên âm Schwa không mang trọng âm, giúp từ được phát âm nhanh gấp đôi và giữ đúng giai điệu tiếng Anh.',
            examples: [
              { original: 'camera', elided: 'cam-ra', ipaOriginal: '/ˈkæm.ər.ə/ (3 âm tiết)', ipaElided: '/ˈkæm.rə/ (2 âm tiết)', context: 'Nuốt schwa ở giữa, đọc gọn thành 2 âm tiết' },
              { original: 'chocolate', elided: 'choc-late', ipaOriginal: '/ˈtʃɒk.əl.ət/ (3 âm tiết)', ipaElided: '/ˈtʃɒk.lət/ (2 âm tiết)', context: 'Nuốt schwa, tuyệt đối KHÔNG đọc là chô-cô-lét' },
              { original: 'restaurant', elided: 'res-trant', ipaOriginal: '/ˈres.tər.ɒnt/ (3 âm tiết)', ipaElided: '/ˈres.trɒnt/ (2 âm tiết)', context: 'Nuốt âm /tər/, đọc gọn thành res-tront' },
              { original: 'family', elided: 'fam-ly', ipaOriginal: '/ˈfæm.ɪ.li/ (3 âm tiết)', ipaElided: '/ˈfæm.li/ (2 âm tiết)', context: 'Nuốt âm /ɪ/, đọc gọn thành fam-li' },
              { original: 'vegetable', elided: 'veg-table', ipaOriginal: '/ˈvedʒ.ɪ.tə.bəl/ (4 âm tiết)', ipaElided: '/ˈvedʒ.tə.bəl/ (3 âm tiết)', context: 'Nuốt âm /ɪ/, đọc 3 âm tiết thay vì 4' },
              { original: 'comfortable', elided: 'comf-table', ipaOriginal: '/ˈkʌm.fər.tə.bəl/ (4 âm tiết)', ipaElided: '/ˈkʌmf.tə.bəl/ (3 âm tiết)', context: 'Nuốt âm /fər/, đọc là comf-tuh-bl' }
            ],
            practiceSentence: 'My family took a camera to that comfortable Italian restaurant.',
            practiceTranslation: 'Gia đình tôi đã mang máy ảnh đến nhà hàng Ý ấm cúng đó (fam-ly, cam-ra, comf-tuh-bl, res-tront).'
          },
          {
            category: 'Nuốt âm /h/ trong đại từ & trợ động từ (H-Dropping)',
            rule: 'Các từ "he, him, his, her, have, has, had" rụng âm /h/ khi ở vị trí phụ',
            explanation: 'Khi các đại từ này không mang thông tin chính, âm /h/ bị rụng mất. Nguyên âm phía sau sẽ nối mượt mà vào phụ âm của từ đi trước.',
            examples: [
              { original: 'Tell him', elided: 'Tell-im', ipaOriginal: '/tel hɪm/', ipaElided: '/tel ɪm/', context: 'Âm /l/ nối thẳng vào /ɪm/ thành "te-lim"' },
              { original: 'Ask her', elided: 'Ask-er', ipaOriginal: '/ɑːsk hɜːr/', ipaElided: '/ɑːsk ɜːr/', context: 'Âm /k/ nối thẳng vào /ɜːr/ thành "as-ker"' },
              { original: 'I saw him', elided: 'I saw-(r)-im', ipaOriginal: '/aɪ sɔː hɪm/', ipaElided: '/aɪ sɔːr ɪm/', context: 'Rụng /h/ và nối nguyên âm thành "I sawr-im"' },
              { original: 'What has he done?', elided: "What's-e done?", ipaOriginal: '/wɒt hæz hiː dʌn/', ipaElided: '/wɒt əz i dʌn/', context: 'Cả has và he đều rụng âm /h/' },
              { original: 'You should have known', elided: 'You should-av known', ipaOriginal: '/juː ʃʊd hæv noʊn/', ipaElided: '/juː ʃʊd əv noʊn/', context: 'Have rụng /h/ thành /əv/' }
            ],
            practiceSentence: 'Tell him I saw her and ask what he would have done.',
            practiceTranslation: 'Nói với anh ấy là tôi đã thấy cô ấy và hỏi xem anh ấy sẽ làm gì (tel-im, saw-er, what-e would-av done).'
          },
          {
            category: 'Nuốt âm /v/ trong giới từ OF trước phụ âm',
            rule: '"OF" (/əv/) -> Rụng /v/ chỉ còn âm schwa /ə/ trước từ bắt đầu bằng phụ âm',
            explanation: 'Trong hội thoại đời thường, "cup of tea" luôn được đọc thành "cuppa tea", "kind of" thành "kinda", "lots of" thành "lots-a".',
            examples: [
              { original: 'cup of tea', elided: 'cuppa tea', ipaOriginal: '/kʌp əv tiː/', ipaElided: '/kʌp ə tiː/', context: 'Âm /v/ rụng trước phụ âm /t/ tạo thành cụm "cuppa tea"' },
              { original: 'piece of cake', elided: 'piece-a cake', ipaOriginal: '/piːs əv keɪk/', ipaElided: '/piːs ə keɪk/', context: 'Dễ như ăn bánh - /v/ rụng trước /k/' },
              { original: 'lots of money', elided: 'lots-a money', ipaOriginal: '/lɒts əv ˈmʌni/', ipaElided: '/lɒts ə ˈmʌni/', context: 'Nhiều tiền - /v/ rụng trước /m/' },
              { original: 'kind of tired', elided: 'kinda tired', ipaOriginal: '/kaɪnd əv ˈtaɪəd/', ipaElided: '/ˈkaɪndə ˈtaɪəd/', context: 'Hơi mệt một chút - of rút gọn thành a' }
            ],
            practiceSentence: 'Having a cup of tea with a piece of cake is a lot of fun.',
            practiceTranslation: 'Uống một tách trà cùng miếng bánh ngọt mang lại rất nhiều niềm vui (cuppa tea, piece-a cake, lot-a fun).'
          }
        ]
      }
    ]
  },
  {
    id: 'hts-08',
    title: 'Các Loại Accent Đặc Biệt (World Accents)',
    vietnameseTitle: 'Chuyên Đề Accent Toàn Cầu: Mỹ (US), Anh (UK), Úc (AU) & Hiệu Chỉnh Giọng Việt',
    category: 'Communication',
    subCategory: ['How to Speak'],
    icon: '🌏',
    color: '#E76F51',
    description: 'Giải mã những khác biệt mấu chốt giữa Giọng Mỹ (General American), Giọng Anh (British RP), Giọng Úc (Aussie) và 4 thói quen phát âm cần hiệu chỉnh của người Việt.',
    words: [
      { id: 'hts08-w1', word: 'water', ipa: 'US: /ˈwɑː.dər/ | UK: /ˈwɔː.tə/', definition: 'nước (Mỹ vỗ Flap T /d/, Anh giữ T sắc nét)', translation: 'nước', example: 'Please bring me a glass of cold water.', blankSentence: 'Drink a glass of fresh ____ every morning.', emoji: '💧' },
      { id: 'hts08-w2', word: 'better', ipa: 'US: /ˈbe.dər/ | UK: /ˈbe.tə/', definition: 'tốt hơn (Mỹ Flap T, Anh non-rhotic)', translation: 'tốt hơn', example: 'You will feel much better after rest.', blankSentence: 'Practice will make your English ____.', emoji: '📈' },
      { id: 'hts08-w3', word: 'dance', ipa: 'US: /dæns/ | UK: /dɑːns/', definition: 'khiêu vũ (Mỹ âm /æ/ bẹt, Anh âm /ɑː/ trầm sâu)', translation: 'khiêu vũ, nhảy', example: 'Do you want to dance with me tonight?', blankSentence: 'They love to ____ to Latin music.', emoji: '💃' },
      { id: 'hts08-w4', word: 'can\'t', ipa: 'US: /kænt/ | UK: /kɑːnt/', definition: 'không thể (khác biệt rõ rệt giữa /æ/ và /ɑː/)', translation: 'không thể', example: 'I can\'t believe you finished the project so quickly.', blankSentence: 'I ____ wait to see you tomorrow.', emoji: '🚫' },
      { id: 'hts08-w5', word: 'car', ipa: 'US: /kɑːr/ | UK: /kɑː/', definition: 'xe ô tô (Mỹ Rhotic cuộn R, Anh Non-rhotic)', translation: 'xe ô tô', example: 'He parked his new car outside.', blankSentence: 'He drove his electric ____ to work.', emoji: '🚗' },
      { id: 'hts08-w6', word: 'today', ipa: 'US/UK: /təˈdeɪ/ | AU: /təˈdaɪ/', definition: 'hôm nay (Úc dịch chuyển nguyên âm /eɪ/ -> /aɪ/)', translation: 'hôm nay', example: 'What are your plans for today?', blankSentence: 'The weather is wonderful ____.', emoji: '📅' },
      { id: 'hts08-w7', word: 'mate', ipa: 'US/UK: /meɪt/ | AU: /maɪt/', definition: 'bạn bè, chiến hữu (người Úc đọc như "might")', translation: 'bạn bè, đồng chí', example: 'Thanks for your help, mate!', blankSentence: 'Have a great weekend, ____!', emoji: '🤜🤛' },
      { id: 'hts08-w8', word: 'tomato', ipa: 'US: /təˈmeɪ.toʊ/ | UK: /təˈmɑː.təʊ/', definition: 'cà chua (Mỹ to-may-to, Anh to-mah-to)', translation: 'quả cà chua', example: 'Fresh tomato soup tastes delicious.', blankSentence: 'Add sliced ____ to the salad.', emoji: '🍅' },
      { id: 'hts08-w9', word: 'schedule', ipa: 'US: /ˈskedʒ.uːl/ | UK: /ˈʃedʒ.uːl/', definition: 'lịch trình (Mỹ skedule, Anh shedule)', translation: 'lịch trình / thời khóa biểu', example: 'We have a tight schedule this week.', blankSentence: 'Let us check the meeting ____.', emoji: '🗓️' },
      { id: 'hts08-w10', word: 'bottle', ipa: 'US: /ˈbɑː.dəl/ | UK: /ˈbɒ.təl/', definition: 'cái chai (Mỹ Flap T, Anh Glottal Stop /ʔ/)', translation: 'cái chai lọ', example: 'She bought a bottle of olive oil.', blankSentence: 'Fill the reusable ____ with filtered water.', emoji: '🍾' }
    ],
    howToSpeak: [
      {
        type: 'accents',
        title: 'Bản Đồ Các Loại Accent & Hiệu Chỉnh Giọng Nói',
        description: 'Không có accent nào là "duy nhất đúng". Tuy nhiên, hiểu rõ cơ chế âm thanh của Mỹ, Anh, Úc và thói quen của người Việt giúp bạn nghe hiểu toàn cầu và tự tin giao tiếp mọi nơi.',
        theory: 'Sự khác biệt cốt lõi giữa các accent tập trung vào: (1) Tính Rhotic (cuộn lưỡi âm R); (2) Flap T vs Glottal Stop; (3) Nguyên âm bẹt /æ/ vs nguyên âm mở sâu /ɑː/; (4) Nhịp điệu câu và hiện tượng dịch chuyển nguyên âm (Vowel Shift). Nắm vững các đặc trưng này sẽ nâng tầm đôi tai nghe và khả năng làm chủ giọng nói của bạn.',
        accentGroups: [
          {
            accentName: 'General American (Mỹ Phổ Thông)',
            region: 'Bắc Mỹ (Hoa Kỳ & Canada)',
            flag: '🇺🇸',
            description: 'Giọng nói phổ biến nhất trên phim ảnh Hollywood, Netflix và kinh doanh quốc tế. Âm điệu thoải mái, phóng khoáng, nổi bật với âm R cuộn lưỡi mạnh và vỗ lưỡi Flap T.',
            keyTraits: [
              'Rhotic R: Luôn cuộn lưỡi phát âm /r/ rõ nét ở mọi vị trí (car, hard, water, star).',
              'Flap T (Vỗ lưỡi): /t/ đứng giữa 2 nguyên âm biến thành /d/ lướt nhẹ (water -> "wah-der", city -> "ci-dy", better -> "bed-der").',
              'Nguyên âm bẹt /æ/ mở rộng khóe môi: dance, can\'t, ask, half phát âm với âm /æ/ bẹt vang.',
              'Yod-dropping: Lược bỏ âm /j/ sau phụ âm /t, d, n/ (new -> /nuː/, duty -> /ˈduːti/, tune -> /tuːn/).'
            ],
            comparisons: [
              { wordOrPhrase: 'Water', usIpa: '/ˈwɑː.dər/', ukIpa: '/ˈwɔː.tə/', explanation: 'Mỹ vỗ lưỡi /d/ mềm và cuộn R cuối từ, Anh phát âm T bật sắc nét và không cuộn R.' },
              { wordOrPhrase: "Can't dance", usIpa: '/kænt dæns/', ukIpa: '/kɑːnt dɑːns/', explanation: 'Mỹ mở ngang khóe môi /æ/, Anh mở dọc cuống họng sâu /ɑː/.' },
              { wordOrPhrase: 'Better schedule', usIpa: '/ˈbe.dər ˈskedʒ.uːl/', ukIpa: '/ˈbe.tə ˈʃedʒ.uːl/', explanation: 'Mỹ đọc "skedule", Anh đọc "shedule".' },
              { wordOrPhrase: 'Bottle of water', usIpa: '/ˈbɑː.dəl əv ˈwɑː.dər/', ukIpa: '/ˈbɒ.təl əv ˈwɔː.tə/', explanation: 'Mỹ đọc "bah-dl of wah-der", nối âm trơn tru.' }
            ],
            sampleSentence: 'I drank a bottle of cold water in the center of the city.',
            sampleTranslation: 'Tôi đã uống một chai nước lạnh ở trung tâm thành phố (đọc với Flap T: bod-dl of cold wah-der in the cen-der).',
            culturalNote: 'Người Mỹ chú trọng sự thoải mái, thả lỏng quai hàm và nối âm cực kỳ mạnh mẽ để duy trì luồng hơi liên tục.'
          },
          {
            accentName: 'British RP (Giọng Chuẩn Anh Quốc - BBC)',
            region: 'Vương Quốc Anh (Received Pronunciation)',
            flag: '🇬🇧',
            description: 'Còn được gọi là "The King\'s English" hay giọng chuẩn BBC. Mang phong thái thanh nhã, quý phái, nguyên âm mở sâu ở cuống họng và phụ âm bật rất sắc bén.',
            keyTraits: [
              'Non-rhotic: Không cuộn lưỡi âm R ở cuối từ hoặc trước phụ âm (car -> /kɑː/, bird -> /bɜːd/, water -> /ˈwɔː.tə/).',
              'Broad A (/ɑː/ trầm sâu): Mở khẩu hình theo chiều dọc, âm phát ra từ đáy họng (dance -> /dɑːns/, path -> /pɑːθ/, bath -> /bɑːθ/).',
              'Glottal Stop /ʔ/ (Ngắt thanh quản): Chặn đột ngột luồng hơi ở thanh quản thay cho âm /t/ (bottle -> /ˈbɒ.ʔəl/, butter -> /ˈbʌ.ʔə/).',
              'Giữ nguyên âm Yod /j/: Không bỏ /j/ sau /t, d, n/ (new -> /njuː/, tune -> /tjuːn/, duty -> /ˈdjuːti/).'
            ],
            comparisons: [
              { wordOrPhrase: 'Tomato', usIpa: '/təˈmeɪ.toʊ/', ukIpa: '/təˈmɑː.təʊ/', explanation: 'Mỹ đọc to-may-to, Anh đọc to-mah-to với âm /ɑː/ dài quý phái.' },
              { wordOrPhrase: 'Pass the castle', usIpa: '/pæs ðə ˈkæs.əl/', ukIpa: '/pɑːs ðə ˈkɑː.səl/', explanation: 'Cả pass và castle trong giọng Anh đều dùng âm /ɑː/ mở dọc sâu.' },
              { wordOrPhrase: 'New duty', usIpa: '/nuː ˈduː.ti/', ukIpa: '/njuː ˈdjuː.ti/', explanation: 'Anh giữ âm /j/ thanh lịch, Mỹ giản lược Yod.' },
              { wordOrPhrase: 'Hot coffee', usIpa: '/hɑːt ˈkɑː.fi/', ukIpa: '/hɒt ˈkɒf.i/', explanation: 'Anh phát âm tròn môi với âm /ɒ/ ngắn, Mỹ mở rộng thành /ɑː/.' }
            ],
            sampleSentence: 'You can\'t pass the castle without an afternoon cup of tea.',
            sampleTranslation: 'Bạn không thể đi qua lâu đài mà không uống một tách trà chiều (can\'t /kɑːnt/, pass /pɑːs/, castle /kɑːsl/, tea /tiː/).',
            culturalNote: 'Giọng Anh chú trọng âm ngực (chest voice) và độ vang của vòm họng, phát âm phụ âm rất dứt khoát.'
          },
          {
            accentName: 'Australian English (Giọng Tiếng Anh Úc)',
            region: 'Nước Úc (Oceania)',
            flag: '🇦🇺',
            description: 'Giọng nói ấm áp, hào sảng và vô cùng gần gũi. Nổi tiếng toàn cầu với việc dịch chuyển nguyên âm (Vowel Shift) và ngữ điệu lên giọng cuối câu độc đáo.',
            keyTraits: [
              'Vowel Shift (Chuyển dịch nguyên âm): Âm /eɪ/ chuyển dịch thành /aɪ/ (today nghe như "to-die", mate nghe như "might", say nghe như "sigh").',
              'Âm /aɪ/ chuyển sang /ɔɪ/: Từ "night", "like" phát âm gần giống "noit", "loik".',
              'High Rising Terminal (HRT): Lên giọng ở cuối câu kể như đang hỏi để tạo sự kết nối và kiểm tra người nghe có đang đồng tình.',
              'Văn hóa nói tắt (Diminutives): Thêm hậu tố -ie hoặc -o vào mọi danh từ (breakfast -> brekkie, afternoon -> arvo, barbecue -> barbie).'
            ],
            comparisons: [
              { wordOrPhrase: 'G\'day mate!', usIpa: '/ɡəˈdeɪ meɪt/', ukIpa: '/ɡəˈdeɪ meɪt/', auIpa: '/ɡəˈdaɪ maɪt/', explanation: 'Lời chào huyền thoại của người Úc, âm /eɪ/ hóa thành /aɪ/.' },
              { wordOrPhrase: 'See you today', usIpa: '/siː juː təˈdeɪ/', ukIpa: '/siː juː təˈdeɪ/', auIpa: '/siː jə təˈdaɪ/', explanation: '"today" của người Úc nghe rất giống "to-die".' },
              { wordOrPhrase: 'Barbecue breakfast', usIpa: '/ˈbɑːrbɪkjuː ˈbrekfəst/', ukIpa: '/ˈbɑːbɪkjuː ˈbrekfəst/', auIpa: "'Barbie and brekkie'", explanation: 'Thói quen biến mọi danh từ thành đuôi -ie thân mật.' },
              { wordOrPhrase: 'Good on ya', usIpa: '/ɡʊd ɒn juː/', ukIpa: '/ɡʊd ɒn juː/', auIpa: '/ɡʊd ɒn jə/', explanation: 'Cách nói khen ngợi đặc trưng của người Úc (Làm tốt lắm!).' }
            ],
            sampleSentence: 'G\'day mate, let\'s have brekkie this arvo and cook a barbie!',
            sampleTranslation: 'Xin chào bạn, chiều nay ăn bữa sáng muộn và nướng thịt ngoài trời nhé! (G-dye myte, brekkie this arvo).',
            culturalNote: 'Người Úc rất thân thiện, nói chuyện thư giãn và thường hơi hạ thấp quai hàm để âm thanh bay bổng.'
          },
          {
            accentName: 'Hiệu Chỉnh Accent Việt Nam (Vietnamese Calibration)',
            region: 'Việt Nam (Người học tiếng Anh)',
            flag: '🇻🇳',
            description: 'Nhận diện 4 thói quen phát âm cố hữu của người Việt do ảnh hưởng từ tiếng mẹ đẻ đơn âm tiết, và phương pháp hiệu chỉnh để nói tiếng Anh quốc tế cực kỳ tự nhiên.',
            keyTraits: [
              'Thói quen 1 - Nuốt phụ âm cuối: Tiếng Việt kết thúc bằng nguyên âm hoặc âm tắc vô thanh không bật hơi, nên người Việt hay quên bật /s, z, t, d, k, g, l/. Hiệu chỉnh: Luôn giữ và bật nhẹ âm cuối (like -> /laɪk/, need -> /niːd/).',
              'Thói quen 2 - Đánh dấu sắc/nặng vào từ: Đánh dấu "TÍ-cher" làm câu giật cục. Hiệu chỉnh: Âm nhấn giữ thanh NGANG ngân dài (TEE-cher), âm phụ lướt nhẹ.',
              'Thói quen 3 - Nhầm các cặp âm xát: Nhầm /ʃ/ (she) với /s/ (see), /tʃ/ (cheap) với /dʒ/ (jeep), /θ/ (think) đọc thành /t/ (tinh). Hiệu chỉnh: Chú ý khẩu hình tròn môi cho /ʃ, tʃ/.',
              'Thói quen 4 - Đọc đều từng nhịp (Syllable-timed): Đọc nhát gừng từng chữ. Hiệu chỉnh: Luyện nhịp điệu trọng âm câu (Stress-timed), lướt nhanh từ phụ và nối âm mượt mà.'
            ],
            comparisons: [
              { wordOrPhrase: 'I like rice', usIpa: '/aɪ laɪk raɪs/', ukIpa: '/aɪ laɪk raɪs/', explanation: 'Người Việt dễ đọc thành "Ai lai rai" (mất /k/ và /s/). Bắt buộc phải bật âm cuối /k/ và /s/ rõ ràng!' },
              { wordOrPhrase: 'She sells shoes', usIpa: '/ʃiː selz ʃuːz/', ukIpa: '/ʃiː selz ʃuːz/', explanation: 'Phân biệt rạch ròi /ʃ/ chu môi trong "She, Shoes" với /s/ thẳng khóe môi trong "Sells".' },
              { wordOrPhrase: 'Teacher and student', usIpa: '/ˈtiː.tʃər ən ˈstuː.dənt/', ukIpa: '/ˈtiː.tʃər ən ˈstjuː.dənt/', explanation: 'Không đọc "Tí-chờ én sì-tu-đần", đọc thanh ngang ngân dài "TEE-cher and STOO-dent".' },
              { wordOrPhrase: 'I think that', usIpa: '/aɪ θɪŋk ðæt/', ukIpa: '/aɪ θɪŋk ðæt/', explanation: 'Đặt đầu lưỡi giữa 2 hàm răng phát âm /θ/ trong think, không đọc là "tinh".' }
            ],
            sampleSentence: 'I think she likes this delicious seafood on the island.',
            sampleTranslation: 'Tôi nghĩ cô ấy thích món hải sản thơm ngon này trên đảo (Luyện chuẩn: think /θ/, she /ʃ/, likes /s/, seafood /s/ & /d/).',
            culturalNote: 'Chất giọng người Việt vốn rất trong trẻo và mềm mại; chỉ cần bổ sung âm cuối và giữ thanh ngang là bạn sẽ có một giọng tiếng Anh quốc tế vô cùng cuốn hút!'
          }
        ]
      }
    ]
  }
];

export const howToSpeakTopics: Topic[] = [
  ...ipaTopics,
  ...prosodyTopics
];
