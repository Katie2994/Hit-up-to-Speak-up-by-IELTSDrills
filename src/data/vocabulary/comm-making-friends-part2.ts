import { Topic } from './types';

export const makingFriendsPart2: Topic[] = [
  {
    id: 'mf-11',
    title: 'Sarcasm, Jokes & Linguistic Misunderstandings',
    vietnameseTitle: 'Mỉa mai, Đùa vui & Hiểu lầm Ngôn ngữ',
    category: 'Communication',
    subCategory: ['Making Friends Abroad'],
    icon: '🤪',
    color: '#848586',
    description: 'Cách hiểu và xử lý tế nhị trước các kiểu mỉa mai (sarcasm), trò đùa hoặc mâu thuẫn từ ngữ mập mờ.',
    words: [
      { id: 'mf11-1', word: 'Sarcasm', ipa: '/ˈsɑːkæzəm/', definition: 'Lời nói mỉa mai ngược đời nhằm đùa cợt trêu chọc.', translation: 'Sự mỉa mai, nói bóng gió', example: 'Native speakers love using sarcasm, which is hard for learners to catch.', blankSentence: 'Don\'t take it seriously, she was just using ____.', emoji: '😏' },
      { id: 'mf11-2', word: 'Idiomatic', ipa: '/ˌɪdiəˈmætɪk/', definition: 'Mang tính thành ngữ, lối nói phong cách bản xứ.', translation: 'Mang tính thành ngữ bản địa', example: 'His speech was highly idiomatic, making it tough to translate word-by-word.', blankSentence: 'Try to master some ____ expressions before traveling.', emoji: '📖' },
      { id: 'mf11-3', word: 'Clarify', ipa: '/ˈklærɪfaɪ/', definition: 'Giải thích làm rõ một vấn đề tránh hiểu lầm đáng tiếc.', translation: 'Giải thích làm rõ, minh định', example: 'Can you please outline that again so we clarify any confusion?', blankSentence: 'Let\'s ____ this point before moving further.', emoji: '💡' }
    ],
    structures: [
      {
        phrase: "Wait, just so I get this right, are you playing or are you serious?",
        meaning: "Câu hỏi thẳng thắn nhưng nhẹ nhàng để xác minh xem đối phương có đang đùa mỉa mai hay không.",
        vietnamese: "Khoan đã, mình muốn chắc chắn rằng, bạn đang trêu mình hay đang nghiêm túc thế?",
        casual: "Are you being sarcastic right now, or did you mean that?"
      },
      {
        phrase: "Ah, my bad! In Vietnamese, we say it differently and it sounded...",
        meaning: "Lời xin lỗi xoa dịu khi câu từ dịch thô của mình bị hiểu lầm tai hại.",
        vietnamese: "À lỗi mình nha! Trong tiếng Việt tụi mình diễn đạt hơi khác nên nghe có vẻ...",
        casual: "Oops! Lost in translation. I definitely didn't mean it that way!"
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Deciphering a Sarcastic Joke',
        participants: [
          { name: 'Khang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Khang' },
          { name: 'Tom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tom' }
        ],
        lines: [
          { participant: 'Tom', text: "Oh great! Our scheduled game is postponed for the seventh time tonight. This is absolutely wonderful.", translation: "Ồ tuyệt ghê! Trận game đã lên lịch lại bị hoãn lần thứ 7 tối nay. Thật sự là điều quá đỗi vi diệu." },
          { participant: 'Khang', text: "Wait, just so I get this right, are you playing or are you serious? Why are you happy that the game is postponed?", translation: "Khoan đã, mình muốn chắc chắn, bạn đang trêu mình hay nghiêm túc thế? Sao bạn lại vui khi game bị hoãn vậy?" },
          { participant: 'Tom', text: "Haha! Sorry Khang, I was using sarcasm. It's an idiomatic way of expressing complete frustration by saying the opposite.", translation: "Haha! Xin lỗi Khang nha, tớ đang nói mỉa mai thôi. Đó là một cách diễn đạt ẩn dụ để bộc lộ sự ức chế bằng việc nói ngược lại ấy." },
          { participant: 'Khang', text: "Ah, my bad! I didn't catch the tone. Thanks for taking a second to clarify that for me!", translation: "À, lỗi mình! Mình đã không nhận ra cái giọng điệu đó. Cảm ơn ông đã dành chút thời gian giải thích làm rõ cho tôi nha!" }
        ]
      }
    ]
  },
  {
    id: 'mf-12',
    title: 'Saying No & Setting Personal Boundaries',
    vietnameseTitle: 'Nói "Không" & Thiết lập Ranh giới',
    category: 'Communication',
    subCategory: ['Making Friends Abroad'],
    icon: '🛑',
    color: '#E53E3E',
    description: 'Từ chối lịch sự trước những lời rủ rê nhạy cảm, từ chối video call hoặc gửi tài liệu thông tin nhạy cảm.',
    words: [
      { id: 'mf12-1', word: 'Boundary', ipa: '/ˈbaʊndri/', definition: 'Lấy ranh giới phòng vệ an toàn cá nhân không để ai xâm phạm.', translation: 'Ranh giới an toàn cá nhân', example: 'Setting boundaries keeps digital relationships healthy.', blankSentence: 'Don\'t hesitate to construct a firm ____ if you feel uncomfortable.', emoji: '🧱' },
      { id: 'mf12-2', word: 'Intrusive', ipa: '/ɪnˈtruːsɪv/', definition: 'Có xu hướng tò mò săm soi xâm phạm sự riêng tư quá đà.', translation: 'Xâm phạm riêng tư, tò mò quá đà', example: 'Asking about my exact home address felt a bit intrusive.', blankSentence: 'Her questions about my background were highly ____.', emoji: '👁️' },
      { id: 'mf12-3', word: 'Turn down', ipa: '/tɜːn daʊn/', definition: 'Từ chối lời mời hoặc đề nghị từ ai đó ghé thăm.', translation: 'Từ chối khéo, bãi bỏ', example: 'I had to turn down his request to borrow some money.', blankSentence: 'How do I legally ____ an online donation pledge?', emoji: '🚫' }
    ],
    structures: [
      {
        phrase: "I'm not comfortable sharing that, let's keep it focus here.",
        meaning: "Từ chối khéo khi đối phương hỏi sâu thông tin đời tư nhạy cảm dở dở ương ương.",
        vietnamese: "Mình không thấy thoải mái khi chia sẻ chuyện đó lắm, tụi mình tập trung chuyện khác nha.",
        casual: "I'd prefer not to talk about that, if you don't mind."
      },
      {
        phrase: "I'm going to have to pass on this, but thanks anyway!",
        meaning: "Từ chối lịch thiệp khi được rủ đi chơi riêng hoặc làm việc không thích.",
        vietnamese: "Mình xin phép bỏ qua/từ chối việc này, cơ mà dù sao cũng cảm ơn bạn nhé!",
        casual: "No can do, but appreciate the offer!"
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Refusing to share phone number',
        participants: [
          { name: 'Tram', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tram' },
          { name: 'Daniel', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Daniel' }
        ],
        lines: [
          { participant: 'Daniel', text: "Hey Tram, you are super cool to talk with on this server. Can you give me your main phone number? I want to call you on WhatsApp.", translation: "Này Trâm, nói chuyện với bạn trên server này cuốn ghê. Cho mình số điện thoại chính đi? Mình muốn gọi điện qua WhatsApp." },
          { participant: 'Tram', text: "Thanks Daniel! I’m going to have to pass on this. I'm not comfortable sharing my phone number with people I met online, let's keep our chats on Discord.", translation: "Cảm ơn Daniel nhé! Mình xin phép từ chối việc này. Mình không thấy thoải mái khi chia sẻ số điện thoại cá nhân với bạn bè gặp online, tụi mình cứ chat trên Discord nha." },
          { participant: 'Daniel', text: "Oh, sorry! I didn't mean to sound intrusive. I understand your boundary.", translation: "Ồ, xin lỗi bạn! Mình không cố ý săm soi xâm phạm riêng tư của bạn đâu. Mình hiểu ranh giới của bạn mà." },
          { participant: 'Tram', text: "Thank you for being so understanding about my personal boundaries! I'm happy to keep talking here.", translation: "Cảm ơn bạn vì đã rất thấu hiểu ranh giới cá nhân của mình! Mình vẫn rất vui vẻ buôn chuyện tiếp với bạn ở đây nha." }
        ]
      }
    ]
  },
  {
    id: 'mf-13',
    title: 'Digital Privacy & Secure Interactions',
    vietnameseTitle: 'An toàn Số & Bảo mật Thông tin cá nhân',
    category: 'Communication',
    subCategory: ['Making Friends Abroad'],
    icon: '🛡️',
    color: '#3182CE',
    description: 'Bảo vệ thông tin cá nhân (OTP, tài khoản, trường học, hình ảnh nhạy cảm) và nhận diện chiệu trò lừa rác.',
    words: [
      { id: 'mf13-1', word: 'Catfish', ipa: '/ˈkæt.fɪʃ/', definition: 'Hành vi dùng ảnh ảo, thông tin giả tạo tài khoản để lừa dối người khác.', translation: 'Lập tài khoản mạo danh, ảnh ảo', example: 'Be careful! That profile might be a catfish using stolen photos.', blankSentence: 'I suspect this accounts is trying to ____ gullible users.', emoji: '🦦' },
      { id: 'mf13-2', word: 'Phishing', ipa: '/ˈfɪʃɪŋ/', definition: 'Chiêu lừa đảo gửi link giả mạo hòng đánh cắp mật khẩu tài khoản.', translation: 'Chiêu lừa câu link, phishing', example: 'Never click on random external links to prevent a phishing scam.', blankSentence: 'Keep your login safe from various ____ schemes.', emoji: '🎣' },
      { id: 'mf13-3', word: 'Over-sharing', ipa: '/ˌəʊvə ˈʃeərɪŋ/', definition: 'Chia sẻ quá đà mọi thông tin cá nhân lên mạng.', translation: 'Sự chia sẻ thông tin quá đà', example: 'Over-sharing your daily routine online can attract stalkers.', blankSentence: 'You need to avoid ____ your home coordinates.', emoji: '🗣' }
    ],
    structures: [
      {
        phrase: "For safety reasons, I never click on...",
        meaning: "Lời từ chối đứt đuôi khi có kẻ lạ rủ click link trúng thưởng.",
        vietnamese: "Vì lý do an toàn, mình không bao giờ click vào...",
        casual: "No offense, but I don't click on random link attachments."
      },
      {
        phrase: "Wait, that sounds a bit suspicious. Why do you need my...?",
        meaning: "Câu hỏi cảnh giác để bắt thóp kẻ có ý định điều tra tài khoản ngân hàng của bạn.",
        vietnamese: "Khoan đã, nghe có vẻ hơi nghi ngờ đó nha. Sao bạn lại cần... của mình?",
        casual: "Hold up, why are you asking for my bank ledger anyway?"
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Spotting a suspicious link',
        participants: [
          { name: 'Kien', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kien' },
          { name: 'Stranger', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Stranger' }
        ],
        lines: [
          { participant: 'Stranger', text: "Hey Kien, check out this private link! It has free steam codes for gaming. You just need to log in with your email account.", translation: "Này Kiên ơi, bấm vào cái link riêng tư này đi! Có tặng code Steam chơi game miễn phí nè. Bạn chỉ cần đăng nhập bằng tài khoản email kìa." },
          { participant: 'Kien', text: "Wait, that sounds a bit suspicious. Why do you need my email login to give codes?", translation: "Khoan đã, nghe có vẻ hơi nghi ngờ đó nha. Sao bạn lại cần tài khoản email của mình để phát code vậy?" },
          { participant: 'Stranger', text: "It's just for verification! Come on, hurry, before it expires.", translation: "Chỉ để xác minh thôi mà! Nào nào, nhanh lên không nó hết hạn mất." },
          { participant: 'Kien', text: "No, thanks. For safety reasons, I never click on unverified social links. I don't want to get catfish or phished.", translation: "Không, cảm ơn nhé. Vì lý do an toàn, mình không bao giờ click vào mấy liên kết chưa được xác thực. Mình chẳng muốn bị lừa đảo tài khoản hay dính phishing đâu." }
        ]
      }
    ]
  },
  {
    id: 'mf-14',
    title: 'Staying Safe when Meeting Online Friends IRL',
    vietnameseTitle: 'Giữ An toàn khi Gặp bạn Online ngoài đời',
    category: 'Communication',
    subCategory: ['Making Friends Abroad'],
    icon: '☕',
    color: '#38A169',
    description: 'Quy tắc vàng khi hẹn gặp ngoài đời thực (IRL): chọn nơi đông người, tự di chuyển, báo trước cho người thân.',
    words: [
      { id: 'mf14-1', word: 'In real life', ipa: '/ɪn rɪəl laɪf/', definition: 'Ngoài đời thực (viết tắt là IRL).', translation: 'Ngoài đời thực, gặp trực tiếp', example: 'It felt amazing to finally meet my translation partner in real life.', blankSentence: 'I wonder if they behave the same way ____.', emoji: '🙋' },
      { id: 'mf14-2', word: 'Public spot', ipa: '/ˈpʌblɪk spɒt/', definition: 'Nơi công cộng, đông đúc văn minh để hẹn gặp lần đầu.', translation: 'Địa điểm công cộng đông đúc', example: 'A public spot like a mall or cafe is ideal for first meetings.', blankSentence: 'Always plan your first meet at a busy ____.', emoji: '🏬' },
      { id: 'mf14-3', word: 'Backup plan', ipa: '/ˈbækʌp plæn/', definition: 'Phương án dự phòng, chuẩn bị trước giải nguy.', translation: 'Phương án dự phòng giải nguy', example: 'I always have a backup plan in case the meetup goes awkward.', blankSentence: 'My ____ is having a friend call me after 30 minutes.', emoji: '🛡️' }
    ],
    structures: [
      {
        phrase: "Let's meet up at... it's much easier to find.",
        meaning: "Chủ động đề xuất địa điểm công cộng an toàn, dễ tìm.",
        vietnamese: "Tụi mình hẹn nhau ở... đi, chỗ đó cho dễ tìm nha.",
        casual: "How about we meet at the downtown coffee plaza?"
      },
      {
        phrase: "I've told my friends about my schedule, so I have to...",
        meaning: "Khéo léo báo việc mình đã chia sẻ lịch trình với bạn bè/bố mẹ, răn đe đối phương không nên có ý xấu.",
        vietnamese: "Mình đã báo lịch trình cho bạn bè/bố mẹ rồi nên mình phải...",
        casual: "My sister knows where I am, so I gotta ring her up later."
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Planning a Safe First Meetup',
        participants: [
          { name: 'Nga', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nga' },
          { name: 'Mark', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mark' }
        ],
        lines: [
          { participant: 'Mark', text: "Nga! I am finally visiting Hanoi. Let's hang out. Can I pick you up from your house around 8 PM?", translation: "Ngà ơi! Cuối cùng mình cũng ghé thăm Hà Nội rồi. Đi chơi đi. Tối tầm 8 giờ mình ghé đón bạn tận nhà nha?" },
          { participant: 'Nga', text: "That is so exciting, Mark! But let's meet up at Highlands Coffee near Hoan Kiem Lake, it's a busy public spot and much easier to find.", translation: "Vui quá đi Mark ơi! Nhưng mà tụi mình hẹn nhau ở quán cà phê Highlands gần bờ hồ Hoàn Kiếm đi, chỗ đó đông vui, an toàn và dễ tìm hơn nhiều á." },
          { participant: 'Mark', text: "Sure, no problem! We can chill there. And then maybe we can take a private stroll around?", translation: "Được chứ, không vấn đề gì! Tụi mình tán gẫu ở đó. Rồi sau đấy mình kiếm hẻm vắng dạo mát riêng nhé?" },
          { participant: 'Nga', text: "I've told my friends about my schedule, so I have to head back home right after coffee at 9:30 PM. Just a backup plan I always stick to in real life!", translation: "À, mình đã báo lịch trình cho tụi bạn thân biết rồi, nên uống cafe xong tầm 9 giờ rưỡi là mình phải về thẳng nhà ngay. Đó là phương án dự phòng xưa nay mình luôn tuân theo ngoài đời thực mà!" }
        ]
      }
    ]
  },
  {
    id: 'mf-15',
    title: 'Handling Discriminatory Behavior & Verbal Harassment',
    vietnameseTitle: 'Xử lý Kỳ thị & Quấy rối Ngôn từ',
    category: 'Communication',
    subCategory: ['Making Friends Abroad'],
    icon: '🙅',
    color: '#E53E3E',
    description: 'Cách ứng phó lạnh lùng dứt khoát trước những từ ngữ kỳ thị chủng tộc, body-shaming dơ dáy.',
    words: [
      { id: 'mf15-1', word: 'Harassment', ipa: '/ˈhærəsmənt/', definition: 'Hành vi quấy rối, xúc phạm đe dọa liên tục.', translation: 'Hành vi quấy rối, công kích', example: 'Report any verbal harassment to the server administrators instantly.', blankSentence: 'We have zero tolerance for online ____.', emoji: '❌' },
      { id: 'mf15-2', word: 'Offensive', ipa: '/əˈfensɪv/', definition: 'Thô lỗ gây hấn xúc phạm nghiêm trọng đến danh dự.', translation: 'Xúc phạm thô lỗ, gây hấn', example: 'His comments about my accent were extremely offensive.', blankSentence: 'That remark was highly ____ and uncalled for.', emoji: '🤬' },
      { id: 'mf15-3', word: 'Report', ipa: '/rɪˈpɔːt/', definition: 'Báo cáo lên ban điều trị/công an để trừng phạt kẻ xấu.', translation: 'Báo cáo sai phạm, tố cáo', example: 'Don\'t engage with bullies; simply block and report them.', blankSentence: 'If you see racism, make sure to ____ the account.', emoji: '📝' }
    ],
    structures: [
      {
        phrase: "That comment was completely inappropriate and offensive.",
        meaning: "Câu phản kháng lạnh lùng và dứt khoát chỉ rõ ranh giới.",
        vietnamese: "Bình luận vừa rồi hoàn toàn không phù hợp và mang tính xúc phạm thô lỗ.",
        casual: "Not cool. That comment is crossing the line."
      },
      {
        phrase: "I'm ending this conversation now.",
        meaning: "Câu tuyên bố chấm dứt giao lưu lập tức với kẻ bêu rếu.",
        vietnamese: "Mình sẽ dừng cuộc trò chuyện ở đây ngay lập tức.",
        casual: "I'm out. Done talking to you."
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Confronting an offensive accent comment',
        participants: [
          { name: 'Duy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Duy' },
          { name: 'Bully', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bully' }
        ],
        lines: [
          { participant: 'Bully', text: "Hahaha, you sound so funny when you speak English! Your accent is terrible, maybe you should stick to rice farming.", translation: "Hahaha, nghe mày nói tiếng Anh cười chết mất! Phát âm dở tệ, chắc nên bám lấy việc làm ruộng đi thôi." },
          { participant: 'Duy', text: "That comment was completely inappropriate and offensive. My accent is just a sign that I speak more than one language.", translation: "Bình luận vừa rồi hoàn toàn không phù hợp và mang tính xúc phạm thô lỗ. Phát âm của tớ chỉ là dấu hiệu cho thấy tớ sử dụng nhiều hơn một ngôn ngữ mà thôi." },
          { participant: 'Bully', text: "Oh, come on, don't be so sensitive. It was just a joke!", translation: "Ôi dào, làm gì mà nhạy cảm quá thế. Chỉ đùa tí thôi làm căng!" },
          { participant: 'Duy', text: "Harassment is never a joke. I'm ending this conversation now. I will also block and report your account.", translation: "Quấy rối không bao giờ là trò đùa cả. Tớ dừng cuộc trò chuyện ở đây. Tớ cũng sẽ chặn và tố cáo tài khoản này." }
        ]
      }
    ]
  },
  {
    id: 'mf-16',
    title: 'Maintaining Long-distance International Friendships',
    vietnameseTitle: 'Duy trì Tình bạn Quốc tế lâu dài',
    category: 'Communication',
    subCategory: ['Making Friends Abroad'],
    icon: '✉️',
    color: '#805AD5',
    description: 'Bí quyết giữ lửa tình bạn xa: gửi bưu thiếp, chúc tụng ngày lễ quốc gia và chấp nhận việc lệch múi giờ.',
    words: [
      { id: 'mf16-1', word: 'Time zone', ipa: '/ˈtaɪm zəʊn/', definition: 'Múi giờ sinh hoạt của các quốc gia khác nhau.', translation: 'Múi giờ sinh hoạt', example: 'We have a twelve-hour time zone difference, but we still make it work.', blankSentence: 'What ____ are you in, so I can plan the call?', emoji: '⌚' },
      { id: 'mf16-2', word: 'Keep in touch', ipa: '/kiːp ɪn tʌtʃ/', definition: 'Giữ liên lạc thường xuyên đều đặn.', translation: 'Giữ liên lạc đều đặn', example: 'We send meme letters to keep in touch every month.', blankSentence: 'Make sure we ____ after you graduate!', emoji: '📬' },
      { id: 'mf16-3', word: 'Care package', ipa: '/ˈkeə pækɪdʒ/', definition: 'Kiện hàng nhỏ chứa đồ ăn, quà kỷ niệm gửi tặng bạn phương xa.', translation: 'Gói quà chăm sóc gửi xa', example: 'Linh sent me a care package full of Vietnamese instant noodles.', blankSentence: 'I am preparing a custom ____ for my buddy in US.', emoji: '📦' }
    ],
    structures: [
      {
        phrase: "Hey! Just saw this and immediately thought of you...",
        meaning: "Lý do hoàn hảo để nhắn tin hỏi han lại người bạn lâu ngày chưa nói chuyện.",
        vietnamese: "Này! Mình vừa thấy thứ này là nghĩ ngay đến bạn liền...",
        casual: "Dude, saw this cat meme and had to send it your way!"
      },
      {
        phrase: "I know you're super busy, so no need to reply right away.",
        meaning: "Giảm bớt áp lực rep tin nhắn cho bạn bè đang quay cuồng công việc học hành.",
        vietnamese: "Mình biết bạn đang cực kỳ bận rộn nên không cần trả lời lại ngay đâu nha.",
        casual: "Rep whenever, don't worry about it!"
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Checking in across time zones',
        participants: [
          { name: 'Vy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vy' },
          { name: 'Liam', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Liam' }
        ],
        lines: [
          { participant: 'Vy', text: "Hey Liam! Just saw this old indie game poster and immediately thought of you and our late-night gaming sessions last summer.", translation: "Này Liam! Mình vừa thấy cái poster game indie cũ này là nghĩ đến bạn liền, nhớ thời tụi mình chơi game thâu đêm hè trước quá." },
          { participant: 'Liam', text: "Oh Vy! That brought back so many great memories. I miss our chats! How have you been?", translation: "Ôi Vy ơi! Cái đó làm sống dậy bao kỷ niệm đẹp luôn. Mình nhớ mấy buổi buôn chuyện của tụi mình quá! Dạo này thế nào rồi?" },
          { participant: 'Vy', text: "I'm doing well, though my coursework is intense right now. I know you're super busy with your new job, so no need to reply right away.", translation: "Mọi sự ổn lắm, dẫu bài tập của mình đang ngập đầu. Mình biết bạn bận rộn với công việc mới nên không cần trả lời lại ngay đâu nha." },
          { participant: 'Liam', text: "Thanks Vy. It is hard due to our time zone gap, but let's definitely keep in touch. I am sending you a little care package of snacks soon!", translation: "Cảm ơn Vy. Trở ngại múi giờ khó khăn thật đấy, song tụi mình nhất định phải giữ liên lạc nha. Sắp tới mình sẽ gửi một thùng quà ăn vặt nhỏ cho bạn đó!" }
        ]
      }
    ]
  },
  {
    id: 'mf-17',
    title: 'Language Exchange Partners & Online School Projects',
    vietnameseTitle: 'Đối tác Học Tập & Trao đổi Ngôn ngữ',
    category: 'Communication',
    subCategory: ['Making Friends Abroad'],
    icon: '🤝',
    color: '#319795',
    description: 'Cách tìm partner học chung chất lượng, tự giác chia vai trò tập luyện tiếng Anh - Việt sòng phẳng.',
    words: [
      { id: 'mf17-1', word: 'Commitment', ipa: '/kəˈmɪtmənt/', definition: 'Sự cam kết, gắn kết nghiêm túc thực hiện nghĩa vụ.', translation: 'Sự cam kết nghiêm túc', example: 'Language practice requires basic commitment from both partners.', blankSentence: 'We need to honor our scheduling ____.', emoji: '🤝' },
      { id: 'mf17-2', word: 'Collaborative', ipa: '/kəˈlæbərətɪv/', definition: 'Mang tính hợp tác chung tay gánh vác.', translation: 'Mang tính hợp tác đồng hành', example: 'We used collaborative digital boards to design our software demo.', blankSentence: 'This is a highly ____ learning space.', emoji: '🎨' },
      { id: 'mf17-3', word: 'Partner', ipa: '/ˈpɑːtnə(r)/', definition: 'Người bạn, đối tác đồng hành chia việc.', translation: 'Bạn đồng hành, đối tác', example: 'I found an awesome language exchange partner living in London.', blankSentence: 'My project ____ is responsible for the slides.', emoji: '🧑‍🤝‍🧑' }
    ],
    structures: [
      {
        phrase: "How about we divide our time: 30 minutes for...",
        meaning: "Cách phân bổ thời gian luyện tập khoa học công bằng cho cả hai ngôn ngữ.",
        vietnamese: "Hay là chúng ta chia đôi thời gian nhé: 30 phút rèn...",
        casual: "Let's split the hour: half English, half Vietnamese."
      },
      {
        phrase: "I'm feeling a bit stuck on... can you break down?",
        meaning: "Hỏi han khi gặp từ vựng khó nuốt cần partner giải thích mộc mạc.",
        vietnamese: "Mình đang thấy hơi bí chỗ... bạn có thể giảng giải chi tiết ra không?",
        casual: "Can you make sense of this idiom for me?"
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Structuring a Lang-Exchange Call',
        participants: [
          { name: 'Tri', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tri' },
          { name: 'Clara', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Clara' }
        ],
        lines: [
          { participant: 'Tri', text: "Hey Clara, I\'m so glad we are learning partners. How about we divide our time: 30 minutes for English conversation and then 30 minutes for Vietnamese?", translation: "Chào Clara, rất vui bạn là bạn học cùng mình. Hay là tụi mình chia đôi thời gian nhé: 30 phút nói chuyện tiếng Anh rồi 30 phút nói tiếng Việt?" },
          { participant: 'Clara', text: "That sounds like a fair commitment! I really want to practice my basic Vietnamese speaking vocabulary today.", translation: "Phân chia cam kết như vậy siêu công bằng luôn! Hôm nay mình cực kỳ muốn luyện vốn từ nói tiếng Việt cơ bản của mình." },
          { participant: 'Tri', text: "Awesome! Let's start with English first. Actually, I am feeling a bit stuck on phrasal verbs, can you break down the usage of 'run up against' for me?", translation: "Tuyệt vời! Vậy xuất phát bằng tiếng Anh trước nhé. Thực ra mình đang hơi bí mảng cụm động từ, bạn giải thích giùm mình cách xài từ 'run up against' được không?" },
          { participant: 'Clara', text: "Ah, of course! It simply means to face a major problem or difficulty. Let\'s do some collaborative sentences together!", translation: "À, dễ ợt! Nó đơn giản nghĩa là đụng độ một khó khăn trở ngại lớn ấy mà. Cùng hợp tác đặt vài câu ví dụ nào!" }
        ]
      }
    ]
  },
  {
    id: 'mf-18',
    title: 'Making Friends in Real Life Camps & Exchange Programs',
    vietnameseTitle: 'Kết bạn tại Trại hè & Giao lưu Quốc tế',
    category: 'Communication',
    subCategory: ['Making Friends Abroad'],
    icon: '🏕️',
    color: '#DD6B20',
    description: 'Chủ động bước ra khỏi vùng an toàn, bớt dính cụm người Việt để hòa nhập, chia sẻ ẩm thực văn hóa.',
    words: [
      { id: 'mf18-1', word: 'Comfort zone', ipa: '/ˈkʌmfət zəʊn/', definition: 'Vùng an toàn khiến bản thân ngại thử thách cái mới.', translation: 'Vùng an toàn', example: 'Traveling solo forces you to step far outside of your comfort zone.', blankSentence: 'You need to break your ____ to greet new faces.', emoji: '🏡' },
      { id: 'mf18-2', word: 'Incorporate', ipa: '/ɪnˈkɔːpəreɪt/', definition: 'Tích hợp, kết hợp kéo léo nhiều yếu tố hòa hợp.', translation: 'Kéo léo lồng ghép, tích hợp', example: 'Let\'s incorporate some Vietnamese folk games into the camp program.', blankSentence: 'We can ____ local dishes into the final dinner menu.', emoji: '🍱' },
      { id: 'mf18-3', word: 'Diverse', ipa: '/daɪˈvɜːs/', definition: 'Đa dạng, phong phú nhiều mẫu sắc văn hóa con người.', translation: 'Đa dạng phong phú, muôn vẻ', example: 'Our summer camp group was incredibly diverse, representation from 10 countries.', blankSentence: 'The student exchange body is very ____.', emoji: '🌈' }
    ],
    structures: [
      {
        phrase: "Hey! Do you mind if I sit here? I was hoping to make some new...",
        meaning: "Mẫu câu ứng xử vàng ngọc để xin phép ngồi chung bàn hòa nhập trong trại hè.",
        vietnamese: "Chào bạn! Bạn có phiền nếu mình ngồi đây không? Mình đang mong được kết bạn...",
        casual: "Hey, space for one more here? Trying to mingle with folks!"
      },
      {
        phrase: "In my country, we actually do it like this...",
        meaning: "Giới thiệu hóm hỉnh về nghi lễ hay thói quen mang tính nguồn cội.",
        vietnamese: "Ở đất nước của mình, mọi người thường làm như thế này kìa...",
        casual: "Back in Vietnam, we have the coolest custom where we..."
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Mingle during a Global Summer Camp',
        participants: [
          { name: 'Binh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Binh' },
          { name: 'Sarah', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah' }
        ],
        lines: [
          { participant: 'Binh', text: "Hey! Do you mind if I sit here? I was hoping to make some new friends and step outside my comfort zone.", translation: "Chào bạn! Bạn có phiền nếu mình ngồi bàn này không? Mình đang kì vọng được kết thêm bạn mới và bước ra khỏi vùng an toàn của chính mình ấy." },
          { participant: 'Sarah', text: "No, please do! I'm Sarah from Canada. It's so cool that this camp is so diverse.", translation: "Ồ không hề, cứ ngồi đi bạn! Mình là Sarah đến từ Canada. Thật tuyệt vời khi thấy trại hè này đa dạng rực rỡ sắc màu thế." },
          { participant: 'Binh', text: "Nice to meet you, Sarah! I'm Binh from Vietnam. Look at the dessert table, in my country, we actually incorporate fruit with spicy chili salt! Have you ever seen that?", translation: "Rất vui được gặp bạn, Sarah! Mình là Bình đến từ Việt Nam nè. Hãy nghía qua bàn tráng miệng xem, ở đất nước của tớ, mọi người lồng ghép trái cây chấm với muối ớt cay nồng luôn á! Bạn từng thấy món này bao giờ chưa?" },
          { participant: 'Sarah', text: "Wait, chili salt on sweet fruit? That sounds wild! I'd love to try that pairing with you right now.", translation: "Khoan, muối ớt chấm trái cây ngọt á? Nghe lạ lẫm hoang dại quá! Để tớ thử ngay cái sự kết hợp này cùng cậu xem sao nào." }
        ]
      }
    ]
  },
  {
    id: 'mf-19',
    title: 'Humor & Self-deprecation without Crossing Lines',
    vietnameseTitle: 'Hài hước & Tự trào An toàn, Tinh tế',
    category: 'Communication',
    subCategory: ['Making Friends Abroad'],
    icon: '🤡',
    color: '#ECC94B',
    description: 'Cách tấu hề tự trào bản thân nhẹ nhàng, tránh xa các trò đùa phân biệt chủng tộc tôn giáo thô bại.',
    words: [
      { id: 'mf19-1', word: 'Self-deprecating', ipa: '/ˌself ˈdeprəkeɪtɪŋ/', definition: 'Tự giễu, trêu đùa một cách hóm hỉnh về khuyết điểm bản thân.', translation: 'Hài hước tự trào, tự giễu', example: 'A little self-deprecating joke makes you sound approachable.', blankSentence: 'My friend always tell ____ stories about his language blunders.', emoji: '🪵' },
      { id: 'mf19-2', word: 'Off-limits', ipa: '/ˌɒf ˈlɪmɪts/', definition: 'Những khu vực ranh giới cấm kỵ xâm phạm tuyệt đối.', translation: 'Ranh giới cấm kỵ, giới hạn đỏ', example: 'Jokes about religious beliefs are strictly off-limits.', blankSentence: 'History trauma is completely ____ in this chatroom.', emoji: '🛑' },
      { id: 'mf19-3', word: 'Light-hearted', ipa: '/ˌlaɪt ˈhɑːtɪd/', definition: 'Thư giãn, vui tươi nhẹ nhàng không gây áp lực.', translation: 'Vui vẻ nhẹ nhàng, giải trí', example: 'We kept the conversation light-hearted to ease the mood.', blankSentence: 'Send a ____ GIF to break the tension.', emoji: '🎈' }
    ],
    structures: [
      {
        phrase: "You think that's bad? You should see me...",
        meaning: "Câu mở đầu tấu hề kể về thói quen dập xóa vụng về của bản thân.",
        vietnamese: "Bạn tưởng thế là tệ á? Bạn nên thấy cảnh mình lúc...",
        casual: "That's nothing, check out how I fail at cooking!"
      },
      {
        phrase: "Thanks for checking, but let's choose another topic to avoid...",
        meaning: "Lời nhắc nhở khéo léo khi câu đùa chạm ngưỡng nhạy cảm cấm kỵ.",
        vietnamese: "Cảm ơn vì đã hỏi, nhưng tụi mình đổi chủ đề khác để tránh...",
        casual: "Appreciate the head-up, let's steer clear of that drama."
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Friendly teasing over accent failure',
        participants: [
          { name: 'Vy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vy' },
          { name: 'Owen', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Owen' }
        ],
        lines: [
          { participant: 'Owen', text: "Vy, did you really call the waiter a 'couch' instead of 'coach' during the field trip?", translation: "Vy ơi, có thật là cậu gọi anh phục vụ là cái 'ghế sofa' thay vì 'huấn luyện viên' hôm đi dã ngoại không?" },
          { participant: 'Vy', text: "Haha! Yes! You think that's bad? You should see me ordering beer at the local tavern, I accidentally certified that I wanted 'ears'!", translation: "Haha! Đúng vậy luôn! Cậu tưởng thế là tệ á? Cậu nên thấy cảnh tớ gọi bia vỉa hè bản địa kìa, tớ lỡ miệng bảo tớ muốn mua vài cái 'tai'!" },
          { participant: 'Owen', text: "Hahaha! That's hilarious! Your self-deprecating humor is so endearing. No offense intended, of course.", translation: "Hahaha! Buồn cười dã man! Sự tự giễu hóm hỉnh của cậu đáng yêu thật sự. Đương nhiên là mình trêu vui chứ không có ý xúc phạm gì đâu nha." },
          { participant: 'Vy', text: "None taken at all! I love light-hearted jokes, though I ensure war history is always off-limits in our group teasings.", translation: "Không có gì đâu nè! Tớ rất khoái mấy trò đùa vui vẻ nhẹ nhàng, dẫu vậy tớ luôn đảm bảo lịch sử chiến tranh là ranh giới đỏ tuyệt đối trong các cuộc trêu nhau của tụi mình." }
        ]
      }
    ]
  },
  {
    id: 'mf-20',
    title: 'Connecting Over Creative Hobbies: Art, Music & Vlogs',
    vietnameseTitle: 'Kết nối qua Sở thích Sáng tạo: Nghệ thuật, Vlog',
    category: 'Communication',
    subCategory: ['Making Friends Abroad'],
    icon: '🎨',
    color: '#38B2AC',
    description: 'Chia sẻ các tác phẩm nghệ thuật, cover bài hát nhạc cụ gạt bỏ e thẹn rụt rè kết giao thêm tri kỷ.',
    words: [
      { id: 'mf20-1', word: 'Feedback', ipa: '/ˈfiːdbæk/', definition: 'Lời nhận xét đóng góp ý kiến nâng trình tác phẩm.', translation: 'Lời nhận xét, góp ý chuyên môn', example: 'I post my vector sketches online to accumulate helpful feedback.', blankSentence: 'Please leave some honest ____ on my travel blog.', emoji: '📝' },
      { id: 'mf20-2', word: 'Collaboration', ipa: '/kəˌlæbəˈreɪʃn/', definition: 'Sự kết hợp ăn ý tạo nên sản phẩm nghệ thuật độc đáo.', translation: 'Sự cộng tác sáng tạo', example: 'Let\'s do a collaboration where you draw and I paint!', blankSentence: 'I am so excited for this acoustic ____ project.', emoji: '🎸' },
      { id: 'mf20-3', word: 'Insightful', ipa: '/ˈɪnsaɪtfl/', definition: 'Đầy sâu sắc, chứa đựng kiến thức góc nhìn tinh tường.', translation: 'Sâu sắc, chứa kiến giải thông tuệ', example: 'His comments on my photography angle were incredibly insightful.', blankSentence: 'Thank you for your highly ____ design suggestions.', emoji: '🧠' }
    ],
    structures: [
      {
        phrase: "Hey! I just saw your piece and was blown away by...",
        meaning: "Câu khen ngợi nức nở mở màn trước một bức tranh hay bản thu âm độc đáo.",
        vietnamese: "Này! Mình vừa xem tác phẩm của bạn và bị choáng ngợp hoàn toàn bởi...",
        casual: "Wow, your cover is absolutely insane! Love that guitar riff."
      },
      {
        phrase: "Would you be open to doing a collaboration where we...?",
        meaning: "Đề xuất hợp tác sáng tác chung một dự án nghệ thuật.",
        vietnamese: "Bạn có sẵn lòng hợp tác một dự án nơi chúng ta cùng... không?",
        casual: "Wanna team up for a duet song?"
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Proposing an Art Collaboration',
        participants: [
          { name: 'Huong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Huong' },
          { name: 'Kento', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kento' }
        ],
        lines: [
          { participant: 'Huong', text: "Hey Kento! I just saw your digital drawing piece on Instagram and was completely blown away by your usage of vivid neon colors.", translation: "Chào Kento! Mình vừa xem bức vẽ digital của bạn trên Instagram và bị gây choáng ngợp hoàn toàn trước cách phối tông màu neon rực rỡ của bạn luôn." },
          { participant: 'Kento', text: "Wow, Huong! Thank you so much, coming from an amazing photographer like you, that means the world to me.", translation: "Woah Hương ơi! Cảm ơn bạn nhiều lắm, nhận lời khen từ một nhiếp ảnh gia xịn mịn như bạn đúng là niềm vinh hạnh lớn của mình." },
          { participant: 'Huong', text: "They are so aesthetic! Actually, would you be open to doing a collaboration where we combine my Saigon night photos with your futuristic neon illustrations?", translation: "Trông ngập tràn vibe nghệ thuật luôn! Thực ra, bạn có sẵn lòng hợp tác một dự án nơi tụi mình ghép ảnh chụp đêm Sài Gòn của mình với nét vẽ neon tương lai của bạn không?" },
          { participant: 'Kento', text: "OMG, absolutely! That collaboration is going to turn out epic. Let\'s exchange assets and starts working on layouts!", translation: "Trời ơi, chắc chắn rồi! Sự kết hợp này hứa hẹn sẽ cực kỳ bùng nổ đây. Hãy cùng trao đổi tư liệu và bắt tay lên bố cục thôi nào!" }
        ]
      }
    ]
  }
];
