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
        title: 'Hit the Right Beat',
        description: 'Tập nhấn giọng từ và câu (10 bài từ dễ đến khó). Phần CHỮ IN HOA biểu thị trọng âm chính cần đọc to, cao, và kéo dài hơn.',
        theory: 'Trọng âm (Stress) là linh hồn của tiếng Anh. Để nhấn trọng âm đúng, bạn cần nói âm tiết đó TO HƠN, CAO HƠN và DÀI HƠN các âm tiết khác. Trong câu, chúng ta thường nhấn vào các Content Words (Danh từ, Động từ chính, Tính từ, Trạng từ) mang ý nghĩa cốt lõi của câu.',
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
        title: 'Smooth Talker',
        description: 'Tập nối âm với 10 câu thực tế từ ngắn đến dài. Biểu tượng móc nối thể hiện điểm âm đuôi của từ trước hòa vào âm đầu của từ sau.',
        theory: 'Nối âm (Connected Speech) xảy ra khi người bản xứ nói nhanh. Nếu một từ kết thúc bằng một phụ âm và từ tiếp theo bắt đầu bằng một nguyên âm, họ sẽ nối phụ âm đó sang nguyên âm để tạo âm thanh mượt mà không bị ngắt quãng (Ví dụ: find_out, an_apple).',
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
  }
];

export const howToSpeakTopics: Topic[] = [
  ...ipaTopics,
  ...prosodyTopics
];
