import { Topic } from './types';

export const makingFriendsPart1: Topic[] = [
  {
    id: 'mf-01',
    title: 'Striking up Conversations & Introductions',
    vietnameseTitle: 'Bắt chuyện & Giới thiệu bản thân',
    category: 'Communication',
    subCategory: ['Making Friends Abroad'],
    icon: '🆕',
    color: '#319795',
    description: 'Làm quen nhanh và tự nhiên thay vì chỉ hỏi "Where are you from?" lặp đi lặp lại.',
    words: [
      { id: 'mf1-1', word: 'Icebreaker', ipa: '/ˈaɪsbreɪkə(r)/', definition: 'Câu nói hoặc hành động làm giảm bớt sự ngại ngùng ban đầu.', translation: 'Lời mở đầu phá vỡ sự ngại ngùng', example: 'A compliment is always a great conversational icebreaker.', blankSentence: 'Do you have a fun ____ we could use in the group chat?', emoji: '🧊' },
      { id: 'mf1-2', word: 'Strike up', ipa: '/straɪk ʌp/', definition: 'Bắt đầu một cuộc trò chuyện hay mối quan hệ một cách tự nhiên.', translation: 'Bắt chuyện, mở lời', example: 'I managed to strike up a friendly conversation with a tourist at the coffee shop.', blankSentence: 'It is easy to ____ a chat if you both play the same game.', emoji: '🗣️' },
      { id: 'mf1-3', word: 'Expat', ipa: '/ˈekspæt/', definition: 'Người nước ngoài sinh sống và làm việc tại một quốc gia khác.', translation: 'Người nước ngoài định cư tạm thời', example: 'There is a large expat community living in Da Nang.', blankSentence: 'He is an ____ from Canada teaching English in Hanoi.', emoji: '🌎' }
    ],
    structures: [
      {
        phrase: "Hey there! I couldn't help but notice...",
        meaning: "Một cách mở lời lịch thiệp và vô cùng tự nhiên dựa trên quan sát xung quanh.",
        vietnamese: "Chào bạn! Mình không thể không chú ý thấy...",
        casual: "Hey! Just noticed you're reading that book, is it any good?"
      },
      {
        phrase: "By the way, I'm... What brings you here?",
        meaning: "Giới thiệu tên nhanh gọn và hỏi lý do họ có mặt ở địa điểm/nhóm đó.",
        vietnamese: "Nhân tiện thì mình là... Điều gì đưa bạn đến đây thế?",
        casual: "I'm Nam by the way. What brings you to this Discord server?"
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Meeting in a Board Game Cafe',
        participants: [
          { name: 'Linh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Linh' },
          { name: 'Marcus', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus' }
        ],
        lines: [
          { participant: 'Linh', text: "Hey there! I couldn't help but notice that you are studying the rules of Catan. Are you a fan of board games?", translation: "Chào bạn! Mình vô cùng chú ý thấy bạn đang nghiên cứu luật chơi Catan. Bạn cũng là fan của board game hả?" },
          { participant: 'Marcus', text: "Hi! Oh, absolutely. I just moved here and discovered this cafe. It's awesome.", translation: "Chào bạn! Ôi đúng thế rồi. Mình vừa mới chuyển tới đây và phát hiện ra quán cafe này. Nó tuyệt thật sự." },
          { participant: 'Linh', text: "By the way, I'm Linh. What brings you to Vietnam? Work or travel?", translation: "Nhân tiện thì mình là Linh. Điều gì đưa bạn đến Việt Nam thế? Công việc hay du lịch vậy?" },
          { participant: 'Marcus', text: "Pleasure to meet you, Linh! I'm Marcus. I'm actually an expat working in tech here. Still trying to make some new friends!", translation: "Rất vui được gặp bạn, Linh! Mình là Marcus. Mình thực chất là một expat đang làm mảng công nghệ ở đây. Vẫn đang cố kết thêm vài người bạn mới!" }
        ]
      }
    ]
  },
  {
    id: 'mf-02',
    title: 'Talking about Languages & Learning Platforms',
    vietnameseTitle: 'Hỏi – đáp về Ngôn ngữ & Nền tảng học tập',
    category: 'Communication',
    subCategory: ['Making Friends Abroad'],
    icon: '🗣️',
    color: '#805AD5',
    description: 'Nói về tiếng mẹ đẻ, slang, các ứng dụng trao đổi ngoại ngữ và cách nhờ đối phương sửa lỗi khéo léo.',
    words: [
      { id: 'mf2-1', word: 'Slang', ipa: '/slæŋ/', definition: 'Từ lóng bình dân thường dùng trong văn nói không trang trọng.', translation: 'Từ lóng, ngôn ngữ đường phố', example: 'Learning English slang makes you sound much more natural.', blankSentence: 'What does this teenage ____ mean in your country?', emoji: '💬' },
      { id: 'mf2-2', word: 'Exchange', ipa: '/ɪksˈtʃeɪndʒ/', definition: 'Sự trao đổi qua lại giữa hai bên cùng có lợi.', translation: 'Trao đổi (ngôn ngữ/văn hóa)', example: 'Language exchange is a win-win for both practicing fluent talk.', blankSentence: 'We do a weekly language ____ on Skype.', emoji: '🎛️' },
      { id: 'mf2-3', word: 'Constructive feedback', ipa: '/kənˈstrʌktɪv ˈfiːdbæk/', definition: 'Ý kiến phản hồi mang tính xây dựng tiến bộ.', translation: 'Góp ý mang tính xây dựng', example: 'Please give me constructive feedback on my English pronunciation.', blankSentence: 'I really appreciate your ____ when I repeat words.', emoji: '📝' }
    ],
    structures: [
      {
        phrase: "Does that make sense dynamically?",
        meaning: "Hỏi để xác minh xem cách diễn đạt của mình nghe có tự nhiên và hiểu được không.",
        vietnamese: "Nói như vậy nghe có hợp lý và chuẩn ngữ cảnh không bạn?",
        casual: "Does that sound natural to you?"
      },
      {
        phrase: "Feel free to correct me if...",
        meaning: "Bật đèn xanh cho bạn chỉnh sửa phát âm/ngữ pháp mà không ngại.",
        vietnamese: "Cứ tự nhiên sửa lỗi cho mình nếu...",
        casual: "Please call me out if I make a slip of the tongue."
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Practicing English and Vietnamese',
        participants: [
          { name: 'Khang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Khang' },
          { name: 'Emma', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma' }
        ],
        lines: [
          { participant: 'Khang', text: "Hey Emma, thanks for joining this call! Feel free to correct me if I say anything wrong. I am still working on my accent.", translation: "Chào Emma, cảm ơn bạn đã tham gia cuộc gọi này! Cứ tự nhiên sửa lỗi cho mình nếu mình nói sai nhé. Mình vẫn đang cải thiện phát âm." },
          { participant: 'Emma', text: "No worries, Khang! Your English is already great. What Vietnamese slang should I learn today?", translation: "Không sao đâu Khang! Tiếng Anh của bạn tốt lắm rồi. Có từ lóng tiếng Việt nào hay ho mình nên học hôm nay không?" },
          { participant: 'Khang', text: "You should learn 'bó tay'! It means 'to fold your hands' but we use it when we give up on a situation. Does that make sense?", translation: "Bạn nên học từ 'bó tay'! Nghĩa đen là bó hai tay lại nhưng tụi mình dùng để chỉ việc đầu hàng trước một tình huống. Nói thế nghe hợp lý chứ?" },
          { participant: 'Emma', text: "Haha, I love that! That is perfect constructive feedback for my slang vocabulary.", translation: "Haha, thích thế! Đó đúng là một đóng góp xây dựng tuyệt vời cho rổ từ lóng của mình." }
        ]
      }
    ]
  },
  {
    id: 'mf-03',
    title: 'Sharing about Vietnam: Beyond the Brochure',
    vietnameseTitle: 'Kể về Việt Nam: Văn hóa, Đời sống thực tế',
    category: 'Communication',
    subCategory: ['Making Friends Abroad'],
    icon: '🇻🇳',
    color: '#DD6B20',
    description: 'Giới thiệu văn hóa, ẩm thực, kẹt xe, cà phê sữa đá chân thật mộc mạc thay vì chỉ sáo rỗng lý thuyết.',
    words: [
      { id: 'mf3-1', word: 'Sizzling', ipa: '/ˈsɪzlɪŋ/', definition: 'Âm thanh xèo xèo vui tai khi chiên nấu đồ ăn.', translation: 'Xèo xèo, nóng hổi', example: 'Banh xeo is a sizzling crepe that smells incredible.', blankSentence: 'The ____ sound of street food makes me hungry instantly.', emoji: '🍳' },
      { id: 'mf3-2', word: 'Hectic', ipa: '/ˈhektɪk/', definition: 'Bận rộn, hối hả, náo nhiệt xô bồ.', translation: 'Hối hả, náo nhiệt, kẹt xe', example: 'Hanoi traffic can be super hectic during rush hour.', blankSentence: 'Life in big Vietnamese cities is incredibly ____.', emoji: '🏍️' },
      { id: 'mf3-3', word: 'Hospitality', ipa: '/ˌhɒspɪˈtæləti/', definition: 'Sự hiếu khách, nồng hậu đón chào.', translation: 'Vòng tay hiếu khách, nồng hậu', example: 'We are known worldwide for our warm hospitality.', blankSentence: 'The locals in the countryside welcomed us with great ____.', emoji: '🤝' }
    ],
    structures: [
      {
        phrase: "If you ever visit Vietnam, you absolutely must try...",
        meaning: "Câu gợi ý đồ ăn thức uống kinh điển dành tặng bạn bè phương xa.",
        vietnamese: "Nếu bạn có dịp ghé thăm Việt Nam, bạn nhất định phải thử...",
        casual: "You gotta try coffee on the sidewalk if you're ever in Saigon."
      },
      {
        phrase: "It might seem chaotic at first, but...",
        meaning: "Giải thích hóm hỉnh về những nét đặc trưng lạ lẫm như giao thông.",
        vietnamese: "Mới đầu trông có vẻ hỗn loạn thật, cơ mà...",
        casual: "The scooter lanes look scary, but there's a hidden flow to it!"
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Telling an online friend about traffic and coffee',
        participants: [
          { name: 'Vy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vy' },
          { name: 'Julian', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Julian' }
        ],
        lines: [
          { participant: 'Julian', text: "Vy, I keep watching videos of motorbikes in Saigon. How do you even cross the street?", translation: "Vy ơi, mình xem mấy video xe máy ở Sài Gòn hoài luôn. Làm sao các bạn băng qua đường được vậy?" },
          { participant: 'Vy', text: "Haha! It might seem chaotic at first, but if you walk steadily at a slow pace, the riders will actually dodge around you.", translation: "Haha! Mới đầu trông có vẻ hỗn loạn thật, cơ mà nếu bạn cứ đi đều bước với tốc độ chậm rãi, tài xế sẽ tự luồn lách né bạn thôi." },
          { participant: 'Julian', text: "That sounds like an extreme sport! What about the food culture there?", translation: "Nghe cứ như môn thể thao mạo hiểm ấy! Còn văn hóa ẩm thực ở đó thì sao?" },
          { participant: 'Vy', text: "Oh, if you ever visit Vietnam, you absolutely must try iced condensed milk coffee while sitting on plastic stools. The street hospitality is legendary!", translation: "Ồ, nếu bạn có dịp ghé thăm Việt Nam, nhất định bạn phải uống thử cà phê sữa đá khi ngồi bệt trên ghế nhựa nha. Sự hiếu khách vỉa hè là huyền thoại đó!" }
        ]
      }
    ]
  },
  {
    id: 'mf-04',
    title: 'Finding Common Ground: Memes, Music & Pop Culture',
    vietnameseTitle: 'Tìm điểm chung: Âm nhạc, Game, Meme',
    category: 'Communication',
    subCategory: ['Making Friends Abroad'],
    icon: '🎮',
    color: '#3490DC',
    description: 'Kết nối nhanh nhờ sở thích xem phim Netflix, nghe nhạc US-UK, chơi game hoặc trêu đùa bằng meme.',
    words: [
      { id: 'mf4-1', word: 'Obsessed', ipa: '/əbˈsest/', definition: 'Bị cuồng, ám ảnh mê mẩn một thứ gì đó cực độ.', translation: 'Cuồng, mê mẩn', example: 'I am completely obsessed with the new Elden Ring game.', blankSentence: 'Are you seriously ____ with that anime series?', emoji: '🤩' },
      { id: 'mf4-2', word: 'Meme', ipa: '/miːm/', definition: 'Hình ảnh, biểu cảm hài hước lan truyền rộng rãi.', translation: 'Meme, trò đùa mạng', example: 'We always exchange stupid cat memes to cheer each other up.', blankSentence: 'Send me that funny ____ you found on Reddit.', emoji: '😸' },
      { id: 'mf4-3', word: 'Vibe', ipa: '/vaɪb/', definition: 'Cảm giác, bầu không khí toát ra từ âm nhạc hay không gian.', translation: 'Rung cảm, bầu không khí', example: 'This indie band has an amazing lo-fi vibe.', blankSentence: 'I really dig the chill ____ of this server.', emoji: '🌌' }
    ],
    structures: [
      {
        phrase: "Are you into... at all?",
        meaning: "Câu hỏi thăm dò cực kỳ tự nhiên về xu hướng hay sở thích chung.",
        vietnamese: "Bạn có thích hay xem... chút nào không?",
        casual: "Are you into anime at all, or not really?"
      },
      {
        phrase: "OMG, same! I could talk about it for hours.",
        meaning: "Câu hưởng ứng bộc lộ cảm xúc hào hứng đồng điệu mãnh liệt.",
        vietnamese: "Ôi trời ơi, mình cũng thế! Mình có thể buôn chuyện này cả ngày.",
        casual: "No way! I'm completely hooked on that too."
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Discussing Music and Gaming',
        participants: [
          { name: 'Duy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Duy' },
          { name: 'Sarah', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah' }
        ],
        lines: [
          { participant: 'Duy', text: "Hey Sarah, are you into indie music at all? I noticed your Spotify playlist in your discord status.", translation: "Này Sarah, bạn có thích nghe nhạc indie chút nào không? Mình thấy cái playlist Spotify lấp ló trên trạng thái Discord của bạn." },
          { participant: 'Sarah', text: "OMG, same! Yes, I am completely obsessed with the lo-fi indie scene right now. The vibe is just perfect for late night study sessions.", translation: "Ôi trời ơi, tớ cũng thế! Đúng vậy, tớ đang cực kỳ mê mẩn lo-fi indie luôn. Giai điệu mộc mạc thư thả hoàn hảo cho mấy buổi thức đêm học bài." },
          { participant: 'Duy', text: "No way! Me too. I keep listening to this band on loop. We should exchange playlists!", translation: "Không thể nào! Mình cũng thế. Mình nghe đi nghe lại ban nhạc này suốt. Tụi mình phải đổi list nhạc cho nhau thôi!" },
          { participant: 'Sarah', text: "Definitely! Send over your links, and feel free to spam me with any funny music memes too.", translation: "Chắc chắn rồi! Gửi link qua đây đi, và cứ tha hồ dội bom tớ bằng mấy cái meme âm nhạc hài hước nữa nha." }
        ]
      }
    ]
  },
  {
    id: 'mf-05',
    title: 'Daily Cultural Differences & Social Norms',
    vietnameseTitle: 'Khác biệt Văn hóa hằng ngày',
    category: 'Communication',
    subCategory: ['Making Friends Abroad'],
    icon: '🛂',
    color: '#D69E2E',
    description: 'Ứng xử thông minh trước những ranh giới vô hình: thói quen giờ giấc, khoảng cách cá nhân và chủ đề nhạy cảm.',
    words: [
      { id: 'mf5-1', word: 'Taboo', ipa: '/təˈbuː/', definition: 'Những điều tối kỵ, cấm kỵ văn hóa không nên chạm vào.', translation: 'Điều cấm kỵ, tối kỵ', example: 'In some countries, asking about salary is a major taboo.', blankSentence: 'What are some cultural ____ we should avoid?', emoji: '🔇' },
      { id: 'mf5-2', word: 'Punctual', ipa: '/ˈpʌŋktʃuəl/', definition: 'Đúng giờ giấc một cách chuẩn chỉ tuyệt đối.', translation: 'Đúng giờ giấc, hẹn hạn', example: 'My German friend is extremely punctual for online hangouts.', blankSentence: 'Is it critical to be ____ in your work culture?', emoji: '⏰' },
      { id: 'mf5-3', word: 'Misinterpret', ipa: '/ˌmɪsɪnˈtɜːprɪt/', definition: 'Hiểu sai, diễn dịch sai lệch ý đồ ban đầu.', translation: 'Dắt đến hiểu lầm, hiểu sai', example: 'A text message can be easily misinterpreted without emojis.', blankSentence: 'I was afraid you might ____ my joke.', emoji: '🧩' }
    ],
    structures: [
      {
        phrase: "Is it considered rude to... in your culture?",
        meaning: "Câu hỏi bày tỏ sự tinh tế nhằm tìm hiểu nguyên tắc lịch thiệp của bạn.",
        vietnamese: "Ở nước bạn thì việc... có bị coi là bất lịch sự không?",
        casual: "Is it a big deal if someone turns up fashionably late?"
      },
      {
        phrase: "Just to clarify, I didn't mean to...",
        meaning: "Câu chữa cháy kịp thời khi lỡ lời làm tổn thương đối phương sứt mẻ.",
        vietnamese: "Để làm rõ nhé, mình hoàn toàn không có ý định...",
        casual: "Sorry, didn't mean for that to come out wrong!"
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Discussing Punctuality and Social Boundaries',
        participants: [
          { name: 'Phong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Phong' },
          { name: 'Hans', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Hans' }
        ],
        lines: [
          { participant: 'Phong', text: "Hey Hans, sorry I was 10 minutes late to our Zoom call! Is it considered rude to do that in Germany?", translation: "Chào Hans, xin lỗi vì mình vào muộn 10 phút nhé! Ở Đức việc này có bị xem là bất lịch sự lắm không?" },
          { participant: 'Hans', text: "Honestly, Germans are typically very punctual, but since we are close friends, it's fine! Just don't do it in a job interview.", translation: "Thành thật mà nói, người Đức thường rất đúng giờ chỉnh chu, nhưng do tụi mình là bạn thân nên không sao đâu! Chỉ đừng làm thế khi đi phỏng vấn xin việc nha." },
          { participant: 'Phong', text: "Phew, got it! In Vietnam, we have 'rubber time' where people show up late, but I want to break that habit.", translation: "Phù, hiểu rồi! Ở Việt Nam tụi mình có vụ 'giờ cao su' mọi người đến trễ suốt, nhưng mình muốn bỏ cái tính đó." },
          { participant: 'Hans', text: "I respect that! It's always best to ask so we don't misinterpret each other's behavior.", translation: "Mình trân trọng điều đó! Tốt nhất cứ hỏi han trực tiếp để hai bên không bao giờ dịch hiểu sai hành vi của nhau." }
        ]
      }
    ]
  },
  {
    id: 'mf-06',
    title: 'Answering Sensitive Topics Civilly',
    vietnameseTitle: 'Hỏi – đáp về Chủ đề nhạy cảm',
    category: 'Communication',
    subCategory: ['Making Friends Abroad'],
    icon: '🧘',
    color: '#E53E3E',
    description: 'Ứng xử lịch sự khi bạn bè hỏi về vấn đề chính trị, lịch sử chiến tranh, tôn giáo một cách khách quan nhất.',
    words: [
      { id: 'mf6-1', word: 'Complicated', ipa: '/ˈkɒmplɪkeɪtɪd/', definition: 'Phức tạp, đa chiều khó có thể giải thích ngay.', translation: 'Rắc rối, phức tạp', example: 'History is complicated and has many different perspectives.', blankSentence: 'The historical relationship is rather ____.', emoji: '🕸' },
      { id: 'mf6-2', word: 'Stereotype', ipa: '/ˈsteriətaɪp/', definition: 'Định kiến rập khuôn, một chiều áp đặt lên một nhóm người.', translation: 'Định kiến lỗi thời, rập khuôn', example: 'We should avoid cultural stereotypes because every individual is unique.', blankSentence: 'That is just a common media ____.', emoji: '🖼️' },
      { id: 'mf6-3', word: 'Individual', ipa: '/ˌɪndɪˈvɪdʒuəl/', definition: 'Một cá nhân riêng biệt có tư duy độc lập.', translation: 'Mỗi cá nhân, góc nhìn cá nhân', example: 'My views only represent me as an individual, not my whole country.', blankSentence: 'Every ____ has their own story.', emoji: '🧍' }
    ],
    structures: [
      {
        phrase: "It's a bit complicated, but from my view...",
        meaning: "Câu mở đầu an toàn dập tắt tranh luận gay gắt, trình bày ý kiến khách quan.",
        vietnamese: "Chuyện này hơi phức tạp một chút, nhưng theo góc nhìn của mình...",
        casual: "It's a long story, but here's how I see it..."
      },
      {
        phrase: "I'm not super comfortable discussing this, if you don't mind.",
        meaning: "Lời từ chối thanh lịch khi không muốn can thiệp sâu vào drama nhạy cảm.",
        vietnamese: "Mình không thoải mái bàn sâu chuyện này lắm, nếu bạn không phiền.",
        casual: "Can we skip this topic? Not really my thing to talk about."
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Handling a query about war history',
        participants: [
          { name: 'Kien', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kien' },
          { name: 'Chloe', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Chloe' }
        ],
        lines: [
          { participant: 'Chloe', text: "Hey Kien, can I ask you something? What do people in Vietnam think about the war stories in movies?", translation: "Này Kiên, mình hỏi cái này được không? Người dân Việt Nam nghĩ thế nào về mấy câu chuyện chiến tranh trong phim ảnh vậy?" },
          { participant: 'Kien', text: "It's a bit complicated, but from my view, younger generations focus more on building a bright future, though we still deeply respect history.", translation: "Nó hơi phức tạp một chút, nhưng theo góc nhìn của mình, thế hệ trẻ tụi mình tập trung nhiều hơn vào việc xây dựng tương lai tươi sáng, dẫu chúng mình vẫn vô cùng tôn trọng lịch sử." },
          { participant: 'Chloe', text: "Ah, I see. I was worried I might offend you by asking.", translation: "À, mình hiểu rồi. Mình đã lo hỏi câu này sẽ làm bạn phật lòng." },
          { participant: 'Kien', text: "Not at all, as long as we ask civilly! But please remember my thoughts represent me as an individual, and are not the official voice.", translation: "Không hề gì đâu, miễn là tụi mình trao đổi văn minh ôn hòa! Nhưng nhớ là suy nghĩ này chỉ đại diện cho cá nhân mình thôi nhé." }
        ]
      }
    ]
  },
  {
    id: 'mf-07',
    title: 'Connecting with Physical Travelers in Vietnam',
    vietnameseTitle: 'Kết nối với Khách du lịch trực tiếp',
    category: 'Communication',
    subCategory: ['Making Friends Abroad'],
    icon: '🗺️',
    color: '#38B2AC',
    description: 'Chỉ đường, giúp họ gọi xe, cảnh báo chiêu trò scam chặt chém một cách tinh tế văn minh.',
    words: [
      { id: 'mf7-1', word: 'Scam', ipa: '/skæm/', definition: 'Hành vi lừa đảo khách nước ngoài nhằm trục lợi bất chính.', translation: 'Trò lừa đảo, chặt chém', example: 'Be careful of taxi scams near the airport terminal.', blankSentence: 'Don\'t fall for that street price ____.', emoji: '🚨' },
      { id: 'mf7-2', word: 'Tour guide', ipa: '/ˈtʊə ɡaɪd/', definition: 'Hướng dẫn viên du lịch dẫn dắt đoàn đi tham quan.', translation: 'Hướng dẫn viên du lịch', example: 'I volunteered as a local tour guide to practice speaking English.', blankSentence: 'I can act as your free ____ this weekend!', emoji: '🧢' },
      { id: 'mf7-3', word: 'Rip-off', ipa: '/ˈrɪp ɒf/', definition: 'Món đồ có mức giá chặt chém cao cắt cổ phi lý.', translation: 'Giá cắt cổ, đắt đỏ phi lý', example: 'Paying ten dollars for an earbud is a complete rip-off.', blankSentence: 'That market stall is a massive ____, bypass it.', emoji: '💸' }
    ],
    structures: [
      {
        phrase: "Just a heads-up, you should always check...",
        meaning: "Cảnh báo nhẹ nhàng giúp du khách nhận thức để tự bảo vệ bản thân.",
        vietnamese: "Cảnh báo một chút nhé, bạn nên nhớ kiểm tra...",
        casual: "Just so you know, keep an eye out for..."
      },
      {
        phrase: "I'd style-guide you to this spot if you have some free time.",
        meaning: "Đề xuất đưa đón hoặc giới thiệu địa điểm bản địa tuyệt vời.",
        vietnamese: "Mình có thể dẫn bạn tới chỗ này nếu bạn rảnh rỗi.",
        casual: "I can show you around if you want to hang out!"
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Helping a lost tourist in District 1',
        participants: [
          { name: 'Phuong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Phuong' },
          { name: 'Alex', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex' }
        ],
        lines: [
          { participant: 'Alex', text: "Excuse me, do you happen to know where the nearest shuttle bus stop is? My mapping app is lagging.", translation: "Xin lỗi bạn ơi, bạn có biết trạm xe buýt đưa đón gần nhất ở đâu không? App bản đồ của mình đang bị lag." },
          { participant: 'Phuong', text: "Oh, it's just two blocks down that street on the left! Just a heads-up, you should always use ride-hailing apps on your phone instead of catching random motorbikes to avoid a rip-off.", translation: "Ồ, nó chỉ cách đây hai dãy nhà phía cuối đường bên tay trái thôi! Cảnh báo một chút nha, bạn nên đặt xe qua app trên điện thoại thay vì bắt xe ôm vãng lai dọc đường để tránh bị chặt chém nha." },
          { participant: 'Alex', text: "Wow, thank you so much! I really appreciate the warning.", translation: "Kinh ngạc chưa, cảm ơn bạn nhiều lắm! Mình rất trân trọng lời cảnh báo này của bạn." },
          { participant: 'Phuong', text: "My pleasure! No worries at all. Honestly, I'd guide you to this local pho spot near here if you have some free time.", translation: "Phận sự của mình thôi! Không có gì đâu bạn. Thật lòng thì mình có thể dẫn bạn tới quán phở bản địa ngon lắm gần đây nếu bạn rảnh dỗi nhé." }
        ]
      }
    ]
  },
  {
    id: 'mf-08',
    title: 'Bonding Online: Gaming, Discord & Reddit communities',
    vietnameseTitle: 'Làm bạn online qua Discord & Reddit',
    category: 'Communication',
    subCategory: ['Making Friends Abroad'],
    icon: '🔮',
    color: '#4299E1',
    description: 'Bí kíp thả thính, giao lưu văn minh tại các máy chủ game, tránh xa các cuộc chiến bàn phím dớ dẩn.',
    words: [
      { id: 'mf8-1', word: 'Toxic', ipa: '/ˈtɒksɪk/', definition: 'Hành vi phá hoại cảm xúc, thô lỗ xúc phạm người bêu rếu.', translation: 'Độc hại, thô lỗ cộc cằn', example: 'I left that gaming group because the voice chat was extremely toxic.', blankSentence: 'Don\'t let ____ players ruin your fun gaming night.', emoji: '☣️' },
      { id: 'mf8-2', word: 'Lurk', ipa: '/lɜːk/', definition: 'Theo dõi tin nhắn đọc ngầm mà không bao giờ bình luận.', translation: 'Ẩn mình đọc trộm, tàu ngầm', example: 'I used to lurk in this subreddit for months before finally posting.', blankSentence: 'You don\'t have to speak, it\'s alright to just ____.', emoji: '🕵️' },
      { id: 'mf8-3', word: 'Spam', ipa: '/spæm/', definition: 'Gửi hàng loạt tin nhắn rác gây phiền toái.', translation: 'Gửi tin nhắn rác, spam', example: 'Spamming emojis in the main channel is against the server rules.', blankSentence: 'Please do not ____ the general chat with link cards.', emoji: '🗑️' }
    ],
    structures: [
      {
        phrase: "Hey guys, mind if I join the party/voice lobby?",
        meaning: "Câu lịch thiệp xin phép nhảy vào kênh voice của một nhóm online.",
        vietnamese: "Chào mọi người, mình xin phép tham gia nhóm voice được không?",
        casual: "Hey! Got space in the squad for one more?"
      },
      {
        phrase: "I've been lurking here for a bit and decided to say hi.",
        meaning: "Lời chào thân thiện bày tỏ việc đã theo dõi nhóm từ lâu nay mới mở lời.",
        vietnamese: "Mình đã nằm vùng ở đây một thời gian rồi và hôm nay quyết định ngoi lên chào cả nhà.",
        casual: "Finally decided to break my silence and say hello!"
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Joining a Discord Gaming Lobby',
        participants: [
          { name: 'Koa', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Koa' },
          { name: 'Rex', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rex' }
        ],
        lines: [
          { participant: 'Koa', text: "Hey guys! I've been lurking in the general channel for a bit, and finally decided to hop in here and say hi.", translation: "Chào mọi người! Em đã nằm vùng ở kênh chat chung một thời gian rồi, hôm nay mới quyết định nhảy vào đây chào cả nhà." },
          { participant: 'Rex', text: "Welcome Koa! Glad you did. We were just about to boot up a match. Mind if you join the party?", translation: "Chào mừng Khoa nha! Rất vui vì ông đã ngoi lên. Bọn tôi cũng chuẩn bị khởi động một trận đây. Có muốn chơi cùng không?" },
          { participant: 'Koa', text: "I'd love to! I was afraid people might be toxic to beginners in this game group.", translation: "Có chứ thích quá! Em cứ sợ mọi người trong nhóm game này sẽ độc hại mắng mỏ người mới chơi." },
          { participant: 'Rex', text: "Not here, buddy. We ban toxic players immediately. Just have fun and don't spam the chat commands!", translation: "Không hề có chuyện đó ở đây đâu ông ơi. Bọn tôi ban sạch mấy đứa độc hại ngay lập tức. Cứ chơi vui đi và đừng spam lệnh bậy bạ là được!" }
        ]
      }
    ]
  },
  {
    id: 'mf-09',
    title: 'Sliding into DMs: Instagram & TikTok DM Etiquette',
    vietnameseTitle: 'Cách trò chuyện trên Social Media',
    category: 'Communication',
    subCategory: ['Making Friends Abroad'],
    icon: '📱',
    color: '#ED64A6',
    description: 'Quy tắc nhắn tin riêng tư thông minh: trả lời story tinh tế, không đòi hỏi trả lời ngay lập tức.',
    words: [
      { id: 'mf9-1', word: 'Ghost', ipa: '/ɡəʊst/', definition: 'Cắt đứt liên lạc, im hơi lặng tiếng biến mất không dấu vết.', translation: 'Ngó lơ tin nhắn, bốc hơi', example: 'We talked daily for a week, but then he decided to ghost me.', blankSentence: 'It\'s extremely annoying when people suddenly ____ you.', emoji: '👻' },
      { id: 'mf9-2', word: 'DM', ipa: '/diː em/', definition: 'Nhắn tin trực tiếp qua các mạng xã hội Instagram, Twitter.', translation: 'Nhắn tin trực tiếp, chat mật', example: 'Just slide into my DM and I will send you the coordinates.', blankSentence: 'Drop me a ____ so we can coordinate the plan.', emoji: '📬' },
      { id: 'mf9-3', word: 'Spamming', ipa: '/ˈspæmɪŋ/', definition: 'Liên tục khủng bố tin nhắn dồn dập khiến người khác bực bội.', translation: 'Khủng bố tin nhắn dồn dập', example: 'Stop spamming the inbox with question marks.', blankSentence: 'Your continuous ____ is going to get you blocked.', emoji: '🚫' }
    ],
    structures: [
      {
        phrase: "Love your story post! I was wondering...",
        meaning: "Cách mở đầu cuộc trò chuyện vô cùng tự nhiên từ việc xem story của ai đó.",
        vietnamese: "Rất thích cái story của bạn luôn! Mình tò mò không biết...",
        casual: "That view is insane! Where exactly was that taken?"
      },
      {
        phrase: "Take your time replying. No rush at all!",
        meaning: "Thể hiện mình là người lịch sự, tôn trọng thời gian riêng của bạn.",
        vietnamese: "Cứ thong thả rep nhé. Không có gì phải vội đâu nha!",
        casual: "Get back to me whenever, no biggie!"
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Replying to an Instagram Story',
        participants: [
          { name: 'Nga', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nga' },
          { name: 'Lucas', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lucas' }
        ],
        lines: [
          { participant: 'Nga', text: "Love your story post from Da Nang! I was wondering, did you try the bread street food near the bridge?", translation: "Thích cái story của bạn đăng ở Đà Nẵng quá! Mình tò mò không biết bạn đã ăn thử bánh mì vỉa hè gần chân cầu chưa?" },
          { participant: 'Lucas', text: "Oh, hi! No, I haven't yet. Is it really that magical? I don't want to get scammed.", translation: "Ồ, chào bạn! Mà chưa mình chưa ăn. Nó ngon kỳ diệu thế thật hả? Mình sợ bị chặt chém lắm." },
          { participant: 'Nga', text: "It is super cheap and delicious. I can share the map link. Also, take your time replying. No rush at all!", translation: "Nó siêu rẻ và siêu ngon luôn á. Mình có thể gửi link bản đồ qua nha. Với lại cứ từ từ thong thả rep nhé, không có gì vội đâu!" },
          { participant: 'Lucas', text: "Thank you! I was worried you were spamming me, but this DM was super helpful.", translation: "Cảm ơn bạn nhé! Nãy mình cũng sợ bạn khủng bố tin nhắn rác, nhưng tin nhắn mật này hữu ích dã man." }
        ]
      }
    ]
  },
  {
    id: 'mf-10',
    title: 'Forums & Academic Networks: Reddit & LinkedIn',
    vietnameseTitle: 'Giao tiếp trên Reddit & LinkedIn',
    category: 'Communication',
    subCategory: ['Making Friends Abroad'],
    icon: '👔',
    color: '#4A5568',
    description: 'Bày tỏ quan điểm trên mạng xã hội chuyên nghiệp LinkedIn, tranh luận bất đồng văn minh trên Reddit.',
    words: [
      { id: 'mf10-1', word: 'Self-promotion', ipa: '/self prəˈməʊʃn/', definition: 'Quảng bá bản thân lộ liễu làm loãng chất lượng cộng đồng.', translation: 'Quảng cáo bản thân quá đà', example: 'Most subreddits strictly forbid blatant self-promotion.', blankSentence: 'Keep your posts educational rather than full of ____.', emoji: '📢' },
      { id: 'mf10-2', word: 'Disagree civilly', ipa: '/ˌdɪsəˈɡriː ˈsɪvəli/', definition: 'Bất đồng ý kiến một cách lịch thiệp ôn hòa.', translation: 'Bất đồng quan điểm ôn hòa, văn minh', example: 'It is fully possible to disagree civilly inside professional threads.', blankSentence: 'We can ____ without resorting to personal insults.', emoji: '🤝' },
      { id: 'mf10-3', word: 'Connection request', ipa: '/kəˈnekʃn rɪˈkwest/', definition: 'Yêu cầu kết nối giao hữu chuyên nghiệp trên LinkedIn.', translation: 'Yêu cầu kết nối chuyên nghiệp', example: 'Always add a short custom note when sending a connection request.', blankSentence: 'I accepted his ____ because of his code archive.', emoji: '🔗' }
    ],
    structures: [
      {
        phrase: "I have a slightly different perspective on...",
        meaning: "Bày tỏ quan điểm trái chiều rất lịch sự tế nhị.",
        vietnamese: "Mình có một góc nhìn hơi khác một chút về...",
        casual: "I see things a bit differently regarding that trend."
      },
      {
        phrase: "I'd love to connect and learn more about your work with...",
        meaning: "Câu mở đầu vàng ngọc kết nối cơ hội kinh doanh/đối tác.",
        vietnamese: "Mình rất muốn được kết nối và tìm hiểu thêm về các công việc của bạn với...",
        casual: "Hoping to link up and talk about your engineering path!"
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Networking on LinkedIn politely',
        participants: [
          { name: 'Tri', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tri' },
          { name: 'Sophia', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sophia' }
        ],
        lines: [
          { participant: 'Tri', text: "Hi Sophia, I saw your article on decentralized database systems. I\'d love to connect and learn more about your work with cloud infrastructure.", translation: "Chào Sophia, mình có đọc bài viết của bạn về hệ thống cơ sở dữ liệu phi tập trung. Mình rất muốn kết nối và tìm hiểu thêm về công việc của bạn với hạ tầng đám mây." },
          { participant: 'Sophia', text: "Hello Tri! Thank you for the connection request. I\'m always happy to talk tech with colleagues.", translation: "Chào Trí! Cảm ơn bạn vì lời mời kết nối này nha. Mình luôn sẵn lòng bàn luận công nghệ với đồng nghiệp." },
          { participant: 'Tri', text: "Actually, I have a slightly different perspective on your storage benchmarks. I found that distributed keys speed up read times significantly.", translation: "Thực ra mình có một góc nhìn hơi khác một tí về kết quả đo đạc lưu trữ của bạn. Mình thấy phân bổ khóa phân tán sẽ cải thiện tốc độ đọc đáng kể." },
          { participant: 'Sophia', text: "Interesting point! Thanks for disagreeing civilly. Send me your research data so I can review it.", translation: "Ý tưởng thú vị đó! Cảm ơn bạn đã phản biện một cách cực kỳ ôn hòa văn minh. Gửi dữ liệu nghiên cứu qua đây để mình xem thử nhé." }
        ]
      }
    ]
  }
];
