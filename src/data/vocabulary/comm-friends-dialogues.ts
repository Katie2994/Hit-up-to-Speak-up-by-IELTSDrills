// Distinct 3-tier Dialogues (Business/Diplomatic, Casual, Super Casual) for Lessons mf-01 to mf-20 (Making Friends Abroad)
// Guarantees 100% alignment with lesson topics and differentiation across all 3 communication schools.

import { Dialogue } from './comm-students-dialogues';

export const FRIENDS_DIALOGUES: Record<string, Dialogue[]> = {
  'mf-01': [
    {
      type: 'pair',
      school: 'business',
      title: 'Formal Bilateral Cultural Exchange Reception',
      participants: [
        { name: 'Consul General Davies', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Davies', role: 'Diplomat' },
        { name: 'Linh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LinhDiplomat', role: 'Cultural Liaison' }
      ],
      lines: [
        { participant: 'Linh', text: "Good evening, Consul General Davies. Allow me to introduce myself. My name is Linh, serving as Cultural Liaison for the Vietnam-UK Youth Exchange Program.", translation: "Kính chào Tổng Lãnh sự Davies. Cho phép tôi được tự giới thiệu. Tôi tên là Linh, cán bộ điều phối văn hóa của Chương trình Giao lưu Thanh niên Việt - Anh ạ." },
        { participant: 'Consul General Davies', text: "A distinct pleasure to meet you, Linh. We are thrilled by the remarkable bilateral attendance at tonight's gala.", translation: "Rất hân hạnh được gặp cô, Linh. Chúng tôi vô cùng vui mừng trước sự hiện diện đông đảo của đại diện hai nước trong đêm dạ tiệc tối nay." },
        { participant: 'Linh', text: "Indeed, sir. Our primary mission is to foster enduring cross-border educational ties and mutual understanding among future leaders.", translation: "Dạ đúng như vậy thưa ngài. Sứ mệnh trọng tâm của chúng tôi là vun đắp mối quan hệ giáo dục bền chặt và sự thấu hiểu lẫn nhau giữa các nhà lãnh đạo tương lai." },
        { participant: 'Consul General Davies', text: "An admirable objective. Please convey my warmest regards to your delegation director; we look forward to supporting your upcoming initiatives.", translation: "Một mục tiêu rất đáng trân trọng. Xin gửi lời thăm hỏi nồng ấm nhất của tôi đến Trưởng đoàn; chúng tôi rất mong được hỗ trợ các sáng kiến sắp tới của quý vị." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Striking up a Friendly Chat in a Board Game Cafe',
      participants: [
        { name: 'Linh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LinhCasual', role: 'Local' },
        { name: 'Marcus', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MarcusExpat', role: 'Traveler' }
      ],
      lines: [
        { participant: 'Linh', text: "Hey there! I couldn't help but notice you're playing Catan. Is this your first time at this board game cafe?", translation: "Chào bạn! Mình thấy bạn đang chơi Catan nè. Đây là lần đầu tiên bạn ghé quán cà phê board game này hả?" },
        { participant: 'Marcus', text: "Hi! Yeah, a coworker recommended it. I'm Marcus, from Canada. Living in Da Nang for a couple of months.", translation: "Chào bạn! Đúng rồi, một người bạn cùng công ty giới thiệu cho mình. Mình là Marcus, đến từ Canada. Mình đang sống ở Đà Nẵng vài tháng." },
        { participant: 'Linh', text: "Welcome to Da Nang, Marcus! I'm Linh. How are you liking the local food so far?", translation: "Chào mừng bạn đến Đà Nẵng nha, Marcus! Mình là Linh. Bạn thấy đồ ăn ở đây thế nào rồi?" },
        { participant: 'Marcus', text: "I'm obsessed with Mi Quang and Vietnamese iced coffee! Any other hidden gems you'd recommend?", translation: "Mình mê tít món Mì Quảng với cà phê sữa đá luôn á! Bạn có biết quán nào ngon nữa giới thiệu cho mình với?" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Fast Meetup Chat over Boba',
      participants: [
        { name: 'An', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=An', role: 'Local' },
        { name: 'Liam', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Liam', role: 'Exchange Student' }
      ],
      lines: [
        { participant: 'An', text: "Hey Liam! Milk tea spot by the river?", translation: "Ê Liam! Ra quán trà sữa bờ sông hóng gió hông?" },
        { participant: 'Liam', text: "Down! Grabbing my skateboard now.", translation: "Kèo thơm nha! Đang lấy ván trượt đây." },
        { participant: 'An', text: "See you at the bridge in 10!", translation: "10 phút nữa gặp ở chân cầu nha!" },
        { participant: 'Liam', text: "On my way, save a table!", translation: "Đang phóng tới đây, giữ bàn giùm nha!" }
      ]
    }
  ],

  'mf-02': [
    {
      type: 'pair',
      school: 'business',
      title: 'Bilateral Applied Linguistics & Pedagogy Symposium',
      participants: [
        { name: 'Professor Vance', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CuratorVance', role: 'Linguistics Chair' },
        { name: 'Dr. Mai', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MaiArts', role: 'Senior Researcher' }
      ],
      lines: [
        { participant: 'Dr. Mai', text: "Good afternoon, Professor Vance. Our academic consortium has evaluated the outcomes of digital peer-to-peer language exchange platforms.", translation: "Kính chào Giáo sư Vance. Hiệp hội học thuật chúng tôi đã đánh giá kết quả từ các nền tảng trao đổi ngôn ngữ số giữa các bạn đồng trang lứa." },
        { participant: 'Professor Vance', text: "The preliminary metrics are quite illuminating, Dr. Mai. Contextual peer immersion demonstrates superior retention compared to rote acquisition.", translation: "Các chỉ số ban đầu rất sáng tỏ, thưa Tiến sĩ Mai. Việc tương tác ngữ cảnh đồng cấp cho thấy tỷ lệ ghi nhớ vượt trội so với học vẹt." },
        { participant: 'Dr. Mai', text: "Indeed. Integrating structured constructive feedback mechanisms allows learners to calibrate idiomatic expressions effectively.", translation: "Dạ đúng như vậy. Việc tích hợp cơ chế góp ý mang tính xây dựng giúp người học điều chỉnh cách diễn đạt thành ngữ rất hiệu quả." },
        { participant: 'Professor Vance', text: "A splendid pedagogy. Let us formalize these findings into our upcoming curriculum reform whitepaper.", translation: "Một phương pháp sư phạm tuyệt vời. Chúng ta hãy văn bản hóa các phát hiện này vào sách trắng cải cách chương trình sắp tới." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Practicing English & Vietnamese Slang over Coffee',
      participants: [
        { name: 'Khang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Khang', role: 'Local Learner' },
        { name: 'Emma', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=EmmaPhoto', role: 'Expat Partner' }
      ],
      lines: [
        { participant: 'Khang', text: "Hey Emma, thanks for doing this language exchange! Feel free to correct my English anytime—I really value constructive feedback.", translation: "Chào Emma, cảm ơn bạn đã cùng mình trao đổi ngôn ngữ nha! Cứ tự nhiên sửa lỗi tiếng Anh cho mình bất kỳ lúc nào nhé, mình rất trân trọng góp ý xây dựng." },
        { participant: 'Emma', text: "You got it, Khang! And in return, you have to teach me authentic Vietnamese slang that young people actually say on threads.", translation: "Nhất trí luôn Khang! Đổi lại bạn phải dạy mình mấy từ lóng tiếng Việt chuẩn bài mà giới trẻ hay nói trên mạng nhé." },
        { participant: 'Khang', text: "Deal! Today's phrase is 'bó tay'—literally 'fold your hands', used when you're completely out of solutions. Does that make sense?", translation: "Chốt kèo! Cụm từ hôm nay là 'bó tay'—nghĩa đen là trói tay lại, dùng khi hết cách giải quyết. Nói vậy bạn hiểu chứ?" },
        { participant: 'Emma', text: "Haha, totally makes sense! 'Bó tay' is going right into my flashcards app today.", translation: "Haha, hiểu liền luôn! Cụm 'bó tay' sẽ vào ngay ứng dụng từ vựng của mình hôm nay." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Tandem / Discord Slang Ping',
      participants: [
        { name: 'Khoa', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KhoaGame', role: 'Learner' },
        { name: 'Leo', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LeoGame', role: 'Friend' }
      ],
      lines: [
        { participant: 'Khoa', text: "Yo Leo, quick check: does 'no cap' mean for real?", translation: "Ê Leo hỏi nhanh nè: 'no cap' nghĩa là thiệt 100% đúng hông?" },
        { participant: 'Leo', text: "Spot on bro! 100% no lie.", translation: "Chuẩn bài luôn bạn ơi! Đúng kiểu không điêu một câu." },
        { participant: 'Khoa', text: "Nice! Teach you 'đỉnh chóp' in return tonight.", translation: "Ngon! Tối nay dạy lại từ 'đỉnh chóp' nha." },
        { participant: 'Leo', text: "Bet! Jumping on voice chat at 9.", translation: "Hứa nha! 9 giờ tối lên voice chat." }
      ]
    }
  ],

  'mf-03': [
    {
      type: 'pair',
      school: 'business',
      title: 'Diplomatic Culinary Heritage Presentation',
      participants: [
        { name: 'Attache Miller', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Miller', role: 'Commercial Attache' },
        { name: 'Huong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HuongDiplomat', role: 'Hospitality Director' }
      ],
      lines: [
        { participant: 'Huong', text: "Good evening, Attache Miller. Beyond our formal agenda, we are pleased to introduce our delegation to the authentic regional flavors of Vietnam.", translation: "Kính chào Tùy viên Miller. Ngoài chương trình nghị sự chính thức, chúng tôi rất hân hạnh được giới thiệu tới phái đoàn hương vị ẩm thực vùng miền đích thực của Việt Nam." },
        { participant: 'Attache Miller', text: "A marvelous cultural gesture, Huong. The depth of Vietnamese culinary craftsmanship has garnered widespread acclaim.", translation: "Một nghĩa cử văn hóa tuyệt vời, thưa cô Hương. Chiều sâu tinh hoa ẩm thực Việt Nam nhận được sự đánh giá rất cao từ cộng đồng quốc tế." },
        { participant: 'Huong', text: "Our culinary ethos is built upon balanced herbs, fresh produce, and legendary hospitality across every province.", translation: "Triết lý ẩm thực của chúng tôi dựa trên sự cân bằng của thảo mộc, nông sản tươi sạch và lòng hiếu khách nồng hậu khắp các tỉnh thành." },
        { participant: 'Attache Miller', text: "It is thoroughly impressive. We are eager to partake in tonight's traditional banquet.", translation: "Thật sự rất ấn tượng. Chúng tôi rất hào hứng được thưởng thức bữa tiệc truyền thống tối nay." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Introducing Street Food Culture to an Expat Friend',
      participants: [
        { name: 'Vy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=VyStreet', role: 'Local Friend' },
        { name: 'Dave', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DaveTravel', role: 'Expat Friend' }
      ],
      lines: [
        { participant: 'Dave', text: "Vy, I keep watching videos of motorbikes and street vendors in Saigon. Isn't it super hectic?", translation: "Vy ơi, mình xem video thấy xe máy với hàng quán vỉa hè ở Sài Gòn đông đúc ghê. Nhìn bộ nhộn nhạo lắm đúng không?" },
        { participant: 'Vy', text: "It looks chaotic on camera, but there is actually a natural rhythm to it! Street food here is vibrant, affordable, and incredibly fresh.", translation: "Lên hình trông thế thôi chứ thật ra có nhịp điệu riêng đấy! Ẩm thực đường phố ở đây cực kỳ sôi động, giá hợp lý và nguyên liệu siêu tươi ngon." },
        { participant: 'Dave', text: "What's that sizzling sound coming from that corner stall with the plastic red stools?", translation: "Tiếng xèo xèo thơm nức mũi phát ra từ cái quán góc đường kê ghế nhựa đỏ kia là món gì thế?" },
        { participant: 'Vy', text: "That is Banh Xeo, crispy Vietnamese savory pancakes wrapped in fresh herbs. Grab a stool, my treat!", translation: "Đó là Bánh xèo đó, bánh giòn rụm cuộn rau rừng tươi ngon. Ngồi xuống ghế nhựa đi, hôm nay mình bao!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Fast Midnight Street Food Run',
      participants: [
        { name: 'Tuan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TuanFood', role: 'Friend' },
        { name: 'Chris', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ChrisFood', role: 'Friend' }
      ],
      lines: [
        { participant: 'Tuan', text: "Hungry? Grilled pork skewers alley?", translation: "Đói bụng chưa? Ra hẻm nem nướng hông?" },
        { participant: 'Chris', text: "Starving! Scooter ready?", translation: "Đói meo mốc mồm rồi! Xe sẵn sàng chưa?" },
        { participant: 'Tuan', text: "Downstairs already. Put on your helmet!", translation: "Dưới sảnh rồi nè. Đội mũ bảo hiểm vô!" },
        { participant: 'Chris', text: "Running down in 30 seconds!", translation: "30 giây phi xuống liền!" }
      ]
    }
  ],

  'mf-04': [
    {
      type: 'pair',
      school: 'business',
      title: 'Global Pop Culture & Digital Media Convergence Panel',
      participants: [
        { name: 'Panel Chair Scott', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PanelScott', role: 'Media Director' },
        { name: 'Trang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TrangMedia', role: 'Pop Culture Analyst' }
      ],
      lines: [
        { participant: 'Trang', text: "Good morning, Director Scott. Digital streaming platforms and viral social memes have established unprecedented common ground among Gen Z internationally.", translation: "Kính chào Giám đốc Scott. Các nền tảng phát trực tuyến và trào lưu meme trên mạng xã hội đã tạo ra điểm chung chưa từng có giữa thế hệ trẻ toàn cầu." },
        { participant: 'Panel Chair Scott', text: "Indeed, Trang. Contemporary youth culture transcends geopolitical borders via shared audiovisual appreciation.", translation: "Dạ đúng vậy thưa cô Trang. Văn hóa giới trẻ đương đại vượt qua ranh giới địa lý nhờ sự đồng điệu về âm nhạc và hình ảnh." },
        { participant: 'Trang', text: "Our focus group metrics confirm that international students bond significantly faster over shared musical tastes and popular media.", translation: "Số liệu khảo sát của chúng tôi khẳng định sinh viên quốc tế kết nối nhanh hơn rõ rệt khi có chung sở thích âm nhạc và văn hóa đại chúng." },
        { participant: 'Panel Chair Scott', text: "Remarkable insights. This should inform our cross-border campus engagement campaigns.", translation: "Góc nhìn rất sâu sắc. Điều này sẽ định hình các chiến dịch gắn kết giới trẻ quốc tế của chúng ta." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Swapping Playlists and Memes at a Coffee Shop',
      participants: [
        { name: 'Sarah', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SarahMusic', role: 'International Friend' },
        { name: 'Nam', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NamMusic', role: 'Local Friend' }
      ],
      lines: [
        { participant: 'Nam', text: "Sarah, are you into indie pop at all? I noticed you were listening to Men I Trust on your headphones.", translation: "Sarah ơi, bạn có thích nghe indie pop không? Mình thấy bạn đeo tai nghe nghe nhạc của Men I Trust nè." },
        { participant: 'Sarah', text: "Oh, I am totally obsessed with them! How do you know them? I thought they were pretty niche!", translation: "Ôi trời, mình mê ban nhạc đó điên đảo luôn! Sao bạn biết hay vậy? Mình tưởng họ kén người nghe lắm chứ!" },
        { participant: 'Nam', text: "Indie vibes are huge among students in Saigon! Also, have you seen this hilarious cat meme trending on TikTok?", translation: "Gu indie thịnh hành lắm trong giới trẻ Sài Gòn á! À mà bạn đã xem cái meme con mèo hài hước đang viral trên TikTok chưa?" },
        { participant: 'Sarah', text: "Hahaha, that audio track is pure gold! Send me that video and let's swap Spotify playlists!", translation: "Hahaha, đoạn âm thanh đó đỉnh thật sự! Gửi video đó cho mình với, tụi mình đổi danh sách nhạc Spotify cho nhau nghe đi!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Fast Spotify Playlist & Meme Drop',
      participants: [
        { name: 'Kien', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KienMeme', role: 'Homie' },
        { name: 'Alex', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AlexMeme', role: 'Homie' }
      ],
      lines: [
        { participant: 'Kien', text: "New track dropped today. Pure fire vibe!", translation: "Bài hát mới ra lò hôm nay nè. Vibe đỉnh chóp luôn!" },
        { participant: 'Alex', text: "Link it bro! On Spotify?", translation: "Thả link liền ông bạn! Trên Spotify hả?" },
        { participant: 'Kien', text: "Sent! Check DMs. Also that meme is you lol.", translation: "Gửi rồi! Check tin nhắn đi. Mà cái meme đó giống ông y đúc haha." },
        { participant: 'Alex', text: "LMAO spot on! Adding to my playlist now.", translation: "Haha chuẩn không cần chỉnh! Thêm vô playlist liền." }
      ]
    }
  ],

  'mf-05': [
    {
      type: 'pair',
      school: 'business',
      title: 'Diplomatic Protocol Briefing on Cross-Cultural Norms',
      participants: [
        { name: 'Chief of Protocol Sterling', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sterling', role: 'Chief of Protocol' },
        { name: 'Attache Binh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BinhProtocol', role: 'Liaison Officer' }
      ],
      lines: [
        { participant: 'Attache Binh', text: "Good morning, Chief Sterling. Before the international delegates arrive, we have compiled a briefing on local social norms and etiquette.", translation: "Kính chào Trưởng ban Sterling. Trước khi các đại biểu quốc tế đến, chúng tôi đã biên soạn cẩm nang về chuẩn mực xã hội và phong tục địa phương." },
        { participant: 'Chief of Protocol Sterling', text: "Punctuality and respect for generational seniority are paramount, I presume?", translation: "Tính đúng giờ và sự tôn trọng đối với các bậc tiền bối là những yếu tố tối quan trọng đúng không?" },
        { participant: 'Attache Binh', text: "Precisely, sir. Furthermore, touching heads or pointing feet toward altars are considered cultural taboos in Southeast Asia.", translation: "Chính xác thưa ngài. Ngoài ra, việc xoa đầu hoặc hướng mũi chân về phía bàn thờ được xem là điều kiêng kỵ tại Đông Nam Á." },
        { participant: 'Chief of Protocol Sterling', text: "Essential cultural nuances. We shall distribute this guidance to ensure exemplary diplomatic decorum.", translation: "Những sắc thái văn hóa rất thiết yếu. Chúng tôi sẽ phổ biến tài liệu này để đảm bảo tác phong ngoại giao mẫu mực." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Discussing Punctuality and Social Boundaries over Lunch',
      participants: [
        { name: 'Hans', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HansGerman', role: 'German Colleague' },
        { name: 'Minh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MinhCasual', role: 'Vietnamese Friend' }
      ],
      lines: [
        { participant: 'Hans', text: "Minh, sorry I seemed surprised earlier when our friends arrived fifteen minutes past our scheduled lunch time.", translation: "Minh ơi, xin lỗi ban nãy mình có vẻ ngạc nhiên khi thấy mấy bạn đến muộn hơn giờ hẹn ăn trưa 15 phút nhé." },
        { participant: 'Minh', text: "No worries at all, Hans! In Germany, punctuality is absolute, right? Here in casual social outings, people sometimes operate on 'rubber time' due to traffic.", translation: "Không sao đâu Hans! Ở Đức tính đúng giờ là tuyệt đối đúng không? Còn ở đây khi đi chơi bạn bè, mọi người thỉnh thoảng hơi co giãn giờ giấc vì kẹt xe đó." },
        { participant: 'Hans', text: "I see! Are there any other daily taboos I should keep in mind so I don't misinterpret things?", translation: "Mình hiểu rồi! Có điều kiêng kỵ nào thường ngày mà mình nên lưu ý để không hiểu lầm không?" },
        { participant: 'Minh', text: "Always take off your shoes when entering someone's home, and pass things with two hands to elders. That shows instant respect!", translation: "Luôn cởi giày trước khi vào nhà ai đó, và đưa đồ vật cho người lớn bằng hai tay nhé. Như vậy là thể hiện sự tôn trọng ngay lập tức luôn!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Traffic Jam Running Late Ping',
      participants: [
        { name: 'Quang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=QuangTraffic', role: 'Friend' },
        { name: 'Tom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TomFriend', role: 'Friend' }
      ],
      lines: [
        { participant: 'Quang', text: "Stuck at red light on Cong Hoa! 5 mins late.", translation: "Đang kẹt cứng đèn đỏ đường Cộng Hòa! Trễ 5 phút nha." },
        { participant: 'Tom', text: "No sweat, ordered coffee already.", translation: "Không sao đâu, tớ gọi cà phê sẵn rồi nè." },
        { participant: 'Quang', text: "Thanks bro, parking scooter now!", translation: "Cảm ơn bồ tèo, đang gửi xe máy vô liền đây!" },
        { participant: 'Tom', text: "Corner table, take your time.", translation: "Bàn trong góc nha, cứ từ từ không vội." }
      ]
    }
  ],

  'mf-06': [
    {
      type: 'pair',
      school: 'business',
      title: 'Diplomatic Dialogue Navigating Geopolitical Sensitivities',
      participants: [
        { name: 'Ambassador Thorne', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ThorneAmbassador', role: 'Ambassador' },
        { name: 'Liaison Director Thao', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ThaoLiaison', role: 'Liaison Director' }
      ],
      lines: [
        { participant: 'Ambassador Thorne', text: "Director Thao, international press briefings occasionally raise inquiries regarding past geopolitical conflicts and sovereignty.", translation: "Thưa Giám đốc Thảo, các buổi họp báo quốc tế thỉnh thoảng nêu ra câu hỏi liên quan đến các cuộc xung đột địa chính trị trong quá khứ và chủ quyền." },
        { participant: 'Liaison Director Thao', text: "Our diplomatic posture remains consistent, Excellency: we approach complex historical narratives with dignity, mutual respect, and a forward-looking commitment to peace.", translation: "Lập trường ngoại giao của chúng tôi luôn nhất quán, thưa ngài Đại sứ: chúng tôi tiếp cận các câu chuyện lịch sử phức tạp bằng sự tôn trọng lẫn nhau và cam kết hướng tới hòa bình tương lai." },
        { participant: 'Ambassador Thorne', text: "An admirably balanced perspective. Acknowledging nuance without perpetuating historical acrimony is the hallmark of seasoned statecraft.", translation: "Một góc nhìn cân bằng rất đáng khâm phục. Thấu hiểu sắc thái mà không duy trì sự hiềm khích lịch sử chính là bản lĩnh ngoại giao dày dặn." },
        { participant: 'Liaison Director Thao', text: "Thank you, Ambassador. Fostering bilateral understanding requires open yet courteous dialogue.", translation: "Cảm ơn ngài Đại sứ. Xây dựng sự hiểu biết song phương luôn cần đối thoại cởi mở nhưng mực thước." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Discussing War History and National Stereotypes Civilly',
      participants: [
        { name: 'Kien', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KienCasual', role: 'Vietnamese Host' },
        { name: 'Arthur', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ArthurExpat', role: 'American Friend' }
      ],
      lines: [
        { participant: 'Arthur', text: "Kien, can I ask you something personal? How do younger people in Vietnam actually feel when foreigners ask about the war?", translation: "Kiên ơi, mình hỏi tế nhị chút được không? Người trẻ ở Việt Nam thực sự cảm thấy thế nào khi người nước ngoài hỏi về chiến tranh?" },
        { participant: 'Kien', text: "I appreciate you asking respectfully, Arthur. History is complicated and painful, but our generation focuses on peace, reconciliation, and building a bright future.", translation: "Mình rất trân trọng vì bạn hỏi chuyện một cách lịch sự, Arthur. Lịch sử rất phức tạp và đau thương, nhưng thế hệ tụi mình hướng tới hòa bình, hàn gắn và cùng nhau xây dựng tương lai." },
        { participant: 'Arthur', text: "That is so inspiring. Movies back home sometimes push outdated stereotypes, but everyone I've met here has been so warm.", translation: "Nghe cảm động thật đấy. Phim ảnh ở quê mình đôi khi hay gắn những định kiến cũ rích, nhưng mọi người mình gặp ở đây đều vô cùng nồng hậu." },
        { participant: 'Kien', text: "Stereotypes never tell the whole story. What matters is how we listen and connect as individuals today.", translation: "Định kiến không bao giờ phản ánh toàn bộ câu chuyện. Quan trọng là cách tụi mình lắng nghe và gắn kết như những người bạn ngày hôm nay." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Keeping Group Chat Respectful and Chill',
      participants: [
        { name: 'Bao', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BaoChill', role: 'Gamer' },
        { name: 'Ken', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KenChill', role: 'Gamer' }
      ],
      lines: [
        { participant: 'Bao', text: "Hey guys, let's keep politics out of the squad channel.", translation: "Ê mấy ông, đừng bàn chuyện chính trị nhạy cảm trong nhóm nha." },
        { participant: 'Ken', text: "My bad, got carried away. All good vibes here!", translation: "Lỗi tôi, hơi lỡ lời xíu. Nhóm mình chơi vui là chính!" },
        { participant: 'Bao', text: "Respect bro! Let's queue up next match.", translation: "Tôn trọng nhau vậy là ok rồi! Vô tìm trận tiếp theo thôi." },
        { participant: 'Ken', text: "Ready! Locking in healer.", translation: "Sẵn sàng! Tôi chọn tướng hồi máu nhé." }
      ]
    }
  ],

  'mf-07': [
    {
      type: 'pair',
      school: 'business',
      title: 'Municipal Tourism Bureau Visitor Safety Protocol',
      participants: [
        { name: 'Inspector Pham', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=InspectorPham', role: 'Tourism Inspector' },
        { name: 'Coordinator Evans', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=EvansCoord', role: 'Travel Agency Director' }
      ],
      lines: [
        { participant: 'Inspector Pham', text: "Good morning, Director Evans. Our municipal task force has cracked down on unregistered tour operators and taxi overcharging in District 1.", translation: "Kính chào Giám đốc Evans. Đội đặc nhiệm đô thị đã xử lý dứt điểm các đơn vị lữ hành không phép và tình trạng taxi 'chặt chém' tại Quận 1." },
        { participant: 'Coordinator Evans', text: "Excellent initiative, Inspector. Protecting international travelers from fraudulent pricing safeguards our nation's hospitality reputation.", translation: "Sáng kiến rất kịp thời, thưa Thanh tra. Bảo vệ du khách quốc tế khỏi gian lận giá cả sẽ giữ vững uy tín hiếu khách của quốc gia." },
        { participant: 'Inspector Pham', text: "We have established verified multi-language information kiosks throughout pedestrian hubs to assist independent travelers.", translation: "Chúng tôi đã thiết lập các trạm thông tin đa ngữ có chứng nhận dọc các tuyến phố đi bộ để hỗ trợ khách du lịch tự túc." },
        { participant: 'Coordinator Evans', text: "Commendable governance. We will integrate these verified points into our incoming tourist guides.", translation: "Công tác quản lý rất đáng khen ngợi. Chúng tôi sẽ tích hợp các điểm uy tín này vào cẩm nang du lịch cho du khách." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Helping a Lost Backpacker in the Old Quarter',
      participants: [
        { name: 'Linh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LinhTouristGuide', role: 'Local Youth' },
        { name: 'Chloe', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ChloeBackpacker', role: 'Backpacker' }
      ],
      lines: [
        { participant: 'Chloe', text: "Excuse me! Do you know how to get to the water puppet theater from here? A cyclo driver just offered to take me for 500,000 VND.", translation: "Bạn ơi làm phiền chút! Bạn có biết đường đi đến Nhà hát múa rối nước từ đây không? Một bác xích lô vừa đòi chở mình với giá 500.000 đồng." },
        { participant: 'Linh', text: "Oh, definitely don't take that! That is an extreme rip-off; the theater is literally a two-minute walk right down this street.", translation: "Ôi đừng đi xe đó nha! Giá đó là bị 'chém đẹp' rồi đấy, nhà hát chỉ cách đây có đúng hai phút đi bộ thẳng theo con phố này thôi." },
        { participant: 'Chloe', text: "Phew, thank goodness I asked you! Are there any trustworthy ways to travel around if I want to explore further?", translation: "May quá mình hỏi bạn kịp thời! Có cách nào uy tín để đi lại nếu mình muốn đi xa hơn không?" },
        { participant: 'Linh', text: "Always book through ride-hailing apps like Grab so the fare is fixed, or look for reputable metered green cabs. Have a wonderful time in Hanoi!", translation: "Bạn cứ đặt qua ứng dụng như Grab để cố định giá tiền, hoặc chọn taxi xanh có đồng hồ chuẩn nha. Chúc bạn có chuyến đi thật vui ở Hà Nội!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Fast Map Pin & Street Food Tip for Traveler',
      participants: [
        { name: 'Duy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DuyLocal', role: 'Local' },
        { name: 'Ben', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BenTraveler', role: 'Traveler' }
      ],
      lines: [
        { participant: 'Ben', text: "Hey man, best Pho spot around here?", translation: "Bạn ơi, quanh đây quán Phở nào ngon nhất?" },
        { participant: 'Duy', text: "Alley 10 on your left. Real broth, no tourist price!", translation: "Hẻm số 10 bên tay trái bạn á. Nước dùng chuẩn vị, không chặt chém!" },
        { participant: 'Ben', text: "Legend! Thanks a ton.", translation: "Đỉnh quá! Cảm ơn bạn nhiều nha." },
        { participant: 'Duy', text: "Enjoy the food, bro!", translation: "Ăn ngon miệng nha người anh em!" }
      ]
    }
  ],

  'mf-08': [
    {
      type: 'pair',
      school: 'business',
      title: 'Global Online Communities & Anti-Harassment Governance',
      participants: [
        { name: 'Council Chair Watson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=WatsonGovernance', role: 'Moderation Director' },
        { name: 'Liaison Trang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TrangDiscord', role: 'Community Lead' }
      ],
      lines: [
        { participant: 'Trang', text: "Good afternoon, Chair Watson. Our international gaming servers have instituted proactive filter algorithms to eradicate toxic harassment and hate speech.", translation: "Kính chào Chủ tịch Watson. Hệ thống máy chủ trò chơi quốc tế của chúng tôi đã triển khai thuật toán lọc chủ động để loại bỏ quấy rối độc hại và ngôn từ kích động thù địch." },
        { participant: 'Council Chair Watson', text: "Splendid execution, Trang. Online spaces must offer inclusive sanctuary rather than toxic exposure for international youth.", translation: "Thực thi rất xuất sắc, thưa cô Trang. Không gian mạng phải là nơi trú ẩn an toàn, hòa nhập chứ không phải nơi tiêm nhiễm độc hại cho giới trẻ toàn cầu." },
        { participant: 'Trang', text: "Furthermore, our multilingual community moderators ensure transparent reporting channels across Discord and Reddit hubs.", translation: "Hơn nữa, đội ngũ điều phối viên đa ngữ của chúng tôi đảm bảo các kênh báo cáo sai phạm minh bạch trên cả Discord và Reddit." },
        { participant: 'Council Chair Watson', text: "Exemplary stewardship. This standard will define our international esports charter.", translation: "Sự quản trị rất kiểu mẫu. Tiêu chuẩn này sẽ định hình điều lệ thể thao điện tử quốc tế của chúng ta." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Joining a Discord Gaming Lobby and Avoiding Toxic Trolls',
      participants: [
        { name: 'Long', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LongGamer', role: 'Vietnamese Gamer' },
        { name: 'Marcus', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MarcusDiscord', role: 'Online Friend' }
      ],
      lines: [
        { participant: 'Long', text: "Hey Marcus! I've been lurking in this international Discord server for a week. Are people usually friendly here?", translation: "Chào Marcus! Mình theo dõi trong kênh Discord quốc tế này cả tuần rồi. Mọi người ở đây thường có thân thiện không?" },
        { participant: 'Marcus', text: "Most members are super welcoming! We have zero tolerance for spamming or toxic trash talk. If anyone gets rude, admins ban them immediately.", translation: "Đa số thành viên cực kỳ cởi mở luôn! Tụi mình không bao giờ dung thứ cho việc spam hay nói chuyện độc hại. Ai thô lỗ là ban quản trị cấm cửa liền." },
        { participant: 'Long', text: "That is great to hear. I was worried my English might be rusty during fast-paced voice comms.", translation: "Nghe vậy an tâm hẳn. Mình từng lo tiếng Anh của mình không theo kịp khi giao tiếp nhanh trong phòng thoại." },
        { participant: 'Marcus', text: "Don't sweat it at all! Just hop into Voice Channel 3, we're all playing for fun and good vibes.", translation: "Đừng lo lắng gì cả! Cứ nhảy vào Phòng thoại số 3 nhé, tụi mình chơi vui vẻ và thoải mái là chính." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Fast Squad Invite Ping on Discord',
      participants: [
        { name: 'Tri', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TriSquad', role: 'Gamer' },
        { name: 'Sam', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SamSquad', role: 'Gamer' }
      ],
      lines: [
        { participant: 'Tri', text: "Need +1 for Valorant comp, hop on VC!", translation: "Thiếu 1 chân leo rank Valorant nè, vô voice đi!" },
        { participant: 'Sam', text: "Booting up PC now. Who's in lobby?", translation: "Đang bật máy tính đây. Trong phòng có những ai rồi?" },
        { participant: 'Tri', text: "Just chill friends, no toxicity.", translation: "Toàn bạn bè thân thiện thôi, không toxic đâu." },
        { participant: 'Sam', text: "Love that. Joining in 1 minute!", translation: "Thích thế. 1 phút nữa có mặt!" }
      ]
    }
  ],

  'mf-09': [
    {
      type: 'pair',
      school: 'business',
      title: 'Corporate Social Media Influencer Outreach Protocol',
      participants: [
        { name: 'Director Sterling', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SterlingDirector', role: 'Brand Director' },
        { name: 'Liaison Nga', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NgaOutreach', role: 'Digital Strategist' }
      ],
      lines: [
        { participant: 'Nga', text: "Good morning, Director Sterling. When initiating collaboration inquiries via Instagram direct messaging, our team adheres to strict professional courtesy.", translation: "Kính chào Giám đốc Sterling. Khi gửi lời mời hợp tác qua tin nhắn trực tiếp trên Instagram, nhóm chúng tôi luôn tuân thủ tác phong chuyên nghiệp lịch thiệp." },
        { participant: 'Director Sterling', text: "Conciseness and authentic engagement are essential, Nga. Cold spamming damages brand credibility.", translation: "Sự ngắn gọn và tương tác chân thành là cốt lõi, thưa cô Nga. Việc gửi tin nhắn rác hàng loạt sẽ hủy hoại uy tín thương hiệu." },
        { participant: 'Nga', text: "Precisely. We open by commending a specific creative campaign, outline mutual value, and provide formal institutional email contacts.", translation: "Dạ chính xác ạ. Chúng tôi mở đầu bằng lời khen ngợi một chiến dịch sáng tạo cụ thể, nêu rõ giá trị hợp tác và để lại địa chỉ email cơ quan chính thức." },
        { participant: 'Director Sterling', text: "An impeccable communication framework. Proceed with the influencer outreach.", translation: "Một quy trình giao tiếp hoàn hảo. Hãy tiến hành liên hệ với các nhà sáng tạo nội dung." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Politely Replying to an Instagram Story without Spamming',
      participants: [
        { name: 'An', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AnInstagram', role: 'Local Friend' },
        { name: 'Sophie', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SophieInstagram', role: 'Traveler' }
      ],
      lines: [
        { participant: 'An', text: "Hey Sophie! I saw your story from Da Nang yesterday—that sunset photo over Dragon Bridge looked unbelievable!", translation: "Chào Sophie! Mình thấy bạn đăng story ở Đà Nẵng hôm qua—tấm ảnh hoàng hôn trên Cầu Rồng nhìn đẹp mê hồn luôn!" },
        { participant: 'Sophie', text: "Hey An! Thanks so much for reaching out! It was mesmerizing in person. Do you know if the fire-breathing show happens every night?", translation: "Chào An! Cảm ơn bạn đã nhắn tin nha! Ngoài đời cảnh đó đẹp ngẩn ngơ luôn á. Bạn có biết màn phun lửa của Cầu Rồng có diễn ra mỗi tối không?" },
        { participant: 'An', text: "It only happens on weekend nights at 9 PM! Definitely head there on Saturday around 8:30 to get a good viewing spot.", translation: "Chỉ diễn ra vào tối cuối tuần lúc 9 giờ thôi bạn ơi! Thứ Bảy bạn cứ ra tầm 8 rưỡi để xí được chỗ ngắm đẹp nhất nhé." },
        { participant: 'Sophie', text: "That is so helpful, thank you! I'm glad I didn't get ghosted by bad online travel guides!", translation: "Thông tin hữu ích quá, cảm ơn bạn nhiều! May mà mình không bị bỏ rơi bởi mấy bài cẩm nang du lịch cũ rích!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Story React & Casual DM Ping',
      participants: [
        { name: 'Huy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HuyDM', role: 'Friend' },
        { name: 'Mia', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MiaDM', role: 'Friend' }
      ],
      lines: [
        { participant: 'Huy', text: "That coffee shop story is aesthetic! Where is it?", translation: "Story quán cà phê nhìn nghệ quá! Ở đâu thế bạn?" },
        { participant: 'Mia', text: "District 3, hidden alley! Sent you the address.", translation: "Quận 3 trong hẻm nhỏ á! Gửi địa chỉ cho rồi nè." },
        { participant: 'Huy', text: "Saving to my places list, thanks!", translation: "Lưu vào danh sách địa điểm liền, cảm ơn nha!" },
        { participant: 'Mia', text: "Try their coconut coffee, top tier!", translation: "Uống thử cà phê dừa ở đó đi, đỉnh của chóp luôn!" }
      ]
    }
  ],

  'mf-10': [
    {
      type: 'pair',
      school: 'business',
      title: 'Executive LinkedIn Connection & Thought Leadership Outreach',
      participants: [
        { name: 'Vice President Lawson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LawsonVP', role: 'Executive' },
        { name: 'Minh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MinhLinkedIn', role: 'Tech Consultant' }
      ],
      lines: [
        { participant: 'Minh', text: "Dear Vice President Lawson, I recently read your insightful article on decentralized database architecture on LinkedIn.", translation: "Kính gửi Phó Chủ tịch Lawson, gần đây tôi đã đọc bài viết sâu sắc của ông về kiến trúc cơ sở dữ liệu phi tập trung trên LinkedIn." },
        { participant: 'Vice President Lawson', text: "Thank you, Minh. We have been examining how low-latency consensus models scale across cross-border financial networks.", translation: "Cảm ơn Minh. Chúng tôi đang nghiên cứu cách các mô hình đồng thuận độ trễ thấp mở rộng quy mô trên mạng lưới tài chính xuyên biên giới." },
        { participant: 'Minh', text: "Indeed. I would be honored to connect and follow your upcoming executive case studies in this domain.", translation: "Dạ đúng như vậy. Tôi rất vinh hạnh được kết nối và theo dõi các nghiên cứu điển hình sắp tới của ông trong lĩnh vực này ạ." },
        { participant: 'Vice President Lawson', text: "With pleasure. I have accepted your connection request; let us maintain professional dialogue.", translation: "Rất sẵn lòng. Tôi đã chấp nhận yêu cầu kết nối; chúng ta hãy tiếp tục trao đổi chuyên môn nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Civil Debate on Tech Reddit without Hostility',
      participants: [
        { name: 'Khoa', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KhoaReddit', role: 'Subreddit Member' },
        { name: 'Dave', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DaveReddit', role: 'Subreddit Member' }
      ],
      lines: [
        { participant: 'Khoa', text: "Hey Dave, I saw your comment on the programming subreddit. While I respectfully disagree with your framework choice, your benchmark data was super interesting.", translation: "Chào Dave, mình thấy bình luận của bạn trên diễn đàn lập trình Reddit. Dù quan điểm của mình hơi khác về lựa chọn framework, nhưng dữ liệu đối chuẩn bạn đưa ra rất thú vị." },
        { participant: 'Dave', text: "Thanks for keeping the discussion civil, Khoa! So many online threads turn into toxic flame wars, so I appreciate your constructive points.", translation: "Cảm ơn bạn đã tranh luận rất văn minh nhé Khoa! Nhiều chủ đề trên mạng hay biến thành cuộc cãi vã độc hại, nên mình rất trân trọng các ý kiến xây dựng của bạn." },
        { participant: 'Khoa', text: "Totally! In our field, comparing real metrics beats self-promotion and arguing every single time.", translation: "Chuẩn luôn! Trong ngành này, so sánh số liệu thực tế luôn tốt hơn nhiều so với việc tự bốc phét hay cãi vã vô bổ." },
        { participant: 'Dave', text: "Agreed 100%. Let's continue sharing benchmark experiments in the thread!", translation: "Đồng ý 100%. Tụi mình cùng tiếp tục chia sẻ các thử nghiệm đo lường trong bài viết nhé!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick LinkedIn / Reddit DM Ping',
      participants: [
        { name: 'Tuan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TuanPing', role: 'Dev' },
        { name: 'Sam', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SamPing', role: 'Dev' }
      ],
      lines: [
        { participant: 'Tuan', text: "Upvoted your solution on Reddit! Super clean code.", translation: "Vừa upvote câu trả lời của bạn trên Reddit! Code chuẩn chỉ ghê." },
        { participant: 'Sam', text: "Appreciate the karma boost, bro!", translation: "Cảm ơn bạn đã cộng điểm uy tín cho mình nha!" },
        { participant: 'Tuan', text: "Sent you a quick LinkedIn connect too.", translation: "Vừa gửi lời mời kết bạn bên LinkedIn luôn rồi á." },
        { participant: 'Sam', text: "Accepted! Let's stay in touch.", translation: "Đồng ý liền! Giữ liên lạc nha." }
      ]
    }
  ],

  'mf-11': [
    {
      type: 'pair',
      school: 'business',
      title: 'Executive Cross-Cultural Linguistic Debrief',
      participants: [
        { name: 'Director Sterling', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DirectorSterling', role: 'Managing Director' },
        { name: 'Phuong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PhuongDebrief', role: 'Regional Liaison' }
      ],
      lines: [
        { participant: 'Phuong', text: "Good morning, Director Sterling. During yesterday's multilateral briefing, I noticed several British idioms that could be misinterpreted by our Asian partners.", translation: "Kính chào Giám đốc Sterling. Trong phiên họp đa phương hôm qua, tôi nhận thấy một số cách diễn đạt đậm chất Anh có thể bị các đối tác châu Á hiểu lầm." },
        { participant: 'Director Sterling', text: "An astute observation, Phuong. British understatement and gentle dry humor often convey nuanced critique rather than literal endorsement.", translation: "Quan sát rất sắc sảo, cô Phương. Lối nói giảm nói tránh và sự châm biếm hóm hỉnh của người Anh thường thể hiện ý phê bình tế nhị chứ không phải sự tán đồng theo nghĩa đen." },
        { participant: 'Phuong', text: "Indeed, sir. For instance, 'with the greatest respect' frequently signifies strong underlying disagreement in formal negotiations.", translation: "Dạ đúng như vậy thưa ngài. Ví dụ cụm từ 'với sự tôn trọng cao nhất' thường mang hàm ý bất đồng quan điểm sâu sắc trong đàm phán chính thức." },
        { participant: 'Director Sterling', text: "Precisely. We must issue a clarifying addendum to ensure complete alignment across all regional delegations.", translation: "Chính xác. Chúng ta cần ban hành bản phụ lục giải thích rõ để đảm bảo sự thống nhất giữa các đoàn đại biểu khu vực." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Deciphering British Sarcasm and Gentle Humor',
      participants: [
        { name: 'Oliver', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=OliverHumor', role: 'British Expat' },
        { name: 'Linh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LinhHumor', role: 'Vietnamese Friend' }
      ],
      lines: [
        { participant: 'Linh', text: "Oliver, earlier when it started pouring rain and you said 'Oh, lovely tropical weather we're having', were you being sarcastic?", translation: "Oliver ơi, lúc nãy khi trời đổ mưa tầm tã mà bạn bảo 'Ôi, thời tiết nhiệt đới dễ thương ghê', có phải bạn đang nói mỉa mai không?" },
        { participant: 'Oliver', text: "Haha, spot on, Linh! Classic British dry humor. When things go terribly wrong, we often say the complete opposite with a deadpan face.", translation: "Haha, chuẩn luôn Linh ơi! Khiếu hài hước tỉnh bơ kinh điển của người Anh đó. Khi mọi thứ rối tung lên, tụi mình hay nói ngược lại với khuôn mặt tỉnh bơ." },
        { participant: 'Linh', text: "I'm glad I checked! In Vietnamese, we have playful sarcasm too, but tone of voice usually gives it away much more clearly.", translation: "May quá mình hỏi lại cho chắc! Trong tiếng Việt tụi mình cũng hay nói kháy đùa vui, nhưng tông giọng thường lộ rõ hơn nhiều." },
        { participant: 'Oliver', text: "Tone is everything! Don't worry, if I'm ever being genuinely serious, I'll let you know without the cheeky jokes.", translation: "Ngữ điệu quyết định tất cả mà! Đừng lo, khi nào mình nghiêm túc thật sự, mình sẽ nói thẳng chứ không đùa cợt đâu." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Joke Check Between Friends',
      participants: [
        { name: 'Tuan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TuanJoke', role: 'Friend' },
        { name: 'Jack', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JackJoke', role: 'Friend' }
      ],
      lines: [
        { participant: 'Jack', text: "Yeah right, like you can eat 5 bowls of Pho!", translation: "Ừ chắc vậy, làm như ông húp được 5 tô Phở không bằng!" },
        { participant: 'Tuan', text: "Sarcasm detected! Are we betting boba on this?", translation: "Nghe mùi mỉa mai rồi nha! Cá cược chầu trà sữa hông?" },
        { participant: 'Jack', text: "You're on! Winner gets extra toppings.", translation: "Chơi luôn! Người thắng được thêm trân châu." },
        { participant: 'Tuan', text: "Deal! Pho shop after school, let's go.", translation: "Chốt kèo! Tan học ra quán phở triển luôn." }
      ]
    }
  ],

  'mf-12': [
    {
      type: 'pair',
      school: 'business',
      title: 'Diplomatic Declination of Unscheduled Proposal',
      participants: [
        { name: 'Ambassador Thorne', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ThorneDiplomat', role: 'Ambassador' },
        { name: 'Director Ha', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DirectorHaDiplomat', role: 'Director' }
      ],
      lines: [
        { participant: 'Director Ha', text: "Good afternoon, Ambassador Thorne. We were wondering if your delegation might accommodate an impromptu press conference this evening.", translation: "Kính chào Đại sứ Thorne. Chúng tôi muốn thăm dò xem liệu phái đoàn của ngài có thể thu xếp một buổi họp báo đột xuất vào tối nay không ạ." },
        { participant: 'Ambassador Thorne', text: "While we deeply value your initiative, Director Ha, protocol boundaries require our scheduled delegation briefings to proceed without alteration.", translation: "Mặc dù chúng tôi rất trân trọng sáng kiến của Giám đốc Hà, nhưng các nguyên tắc nghi lễ đòi hỏi lịch trình của phái đoàn phải diễn ra đúng kế hoạch đã định." },
        { participant: 'Director Ha', text: "We entirely respect your scheduling constraints, Excellency. We will defer media engagements to the official summit slot.", translation: "Chúng tôi hoàn toàn tôn trọng các ràng buộc về lịch trình của ngài Đại sứ. Chúng tôi sẽ dời việc gặp gỡ truyền thông sang khung giờ chính thức của hội nghị thượng đỉnh." },
        { participant: 'Ambassador Thorne', text: "Thank you for your gracious understanding. Maintaining structured commitments ensures optimal bilateral collaboration.", translation: "Cảm ơn sự thấu hiểu lịch thiệp của quý vị. Việc duy trì các cam kết có tổ chức sẽ đảm bảo sự hợp tác song phương đạt hiệu quả cao nhất." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Politely Declining an Invitation and Setting Boundaries',
      participants: [
        { name: 'Sophie', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SophieExpat', role: 'Expat Friend' },
        { name: 'Trang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TrangBoundaries', role: 'Local Friend' }
      ],
      lines: [
        { participant: 'Sophie', text: "Trang! A big group of us are going to a late-night club in Bui Vien tonight until 3 AM. You have to come with us!", translation: "Trang ơi! Tối nay cả nhóm tụi mình rủ nhau đi quẩy ở Bùi Viện tới 3 giờ sáng nè. Bạn nhất định phải đi chung đó nha!" },
        { participant: 'Trang', text: "Thank you so much for thinking of me, Sophie! That sounds super fun, but I really need to get some rest and study for my exam tomorrow.", translation: "Cảm ơn Sophie rất nhiều vì đã rủ mình nhé! Nghe vui quá, nhưng tối nay mình thật sự cần nghỉ ngơi và ôn bài cho bài thi ngày mai." },
        { participant: 'Sophie', text: "Are you sure? You could just stay for an hour!", translation: "Bạn có chắc không đấy? Đi một tiếng thôi cũng được mà!" },
        { participant: 'Trang', text: "I'd love to hang out another time, but late clubs aren't really my thing during weekdays. How about coffee this Sunday instead?", translation: "Mình rất muốn đi chơi dịp khác, nhưng đi bar khuya trong tuần không hợp với mình lắm. Hay là Chủ nhật này tụi mình đi cà phê bù nhé?" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Polite No Text',
      participants: [
        { name: 'Khang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KhangText', role: 'Friend' },
        { name: 'Leo', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LeoText', role: 'Friend' }
      ],
      lines: [
        { participant: 'Leo', text: "Beers tonight downtown?", translation: "Tối nay ra phố làm vài vại bia không ông?" },
        { participant: 'Khang', text: "Can't tonight bro, battery is at 0%. Catch you this weekend!", translation: "Tối nay không được rồi ông bạn, pin cạn 0% rồi. Cuối tuần bù nha!" },
        { participant: 'Leo', text: "All good, get some sleep!", translation: "Không sao đâu, ngủ đẫy mắt đi!" },
        { participant: 'Khang', text: "Thanks for understanding! Catch you soon.", translation: "Cảm ơn đã thông cảm nha! Hẹn sớm gặp lại." }
      ]
    }
  ],

  'mf-13': [
    {
      type: 'pair',
      school: 'business',
      title: 'Corporate Data Privacy & Anti-Phishing Security Briefing',
      participants: [
        { name: 'CISO Morrison', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MorrisonCISO', role: 'Chief Information Security Officer' },
        { name: 'Huy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HuySecurity', role: 'Systems Analyst' }
      ],
      lines: [
        { participant: 'Huy', text: "Good morning, Officer Morrison. Our threat intelligence monitoring has intercepted targeted phishing vectors disguised as external event invitations.", translation: "Kính chào Giám đốc An ninh Morrison. Hệ thống theo dõi mối đe dọa của chúng tôi vừa phát hiện các luồng mã độc giả mạo thư mời sự kiện bên ngoài." },
        { participant: 'CISO Morrison', text: "Vigilance is paramount, Huy. Unverified attachments and deceptive hyperlinks represent the primary attack surface across our international network.", translation: "Cảnh giác là yếu tố tối thượng, Huy. Tệp đính kèm chưa xác thực và đường liên kết giả mạo chính là lỗ hổng tấn công chính trong toàn mạng lưới quốc tế." },
        { participant: 'Huy', text: "Understood, sir. We have mandated multi-factor verification and issued guidance against over-sharing organizational credentials.", translation: "Rõ thưa Giám đốc. Chúng tôi đã kích hoạt xác thực hai lớp bắt buộc và ban hành hướng dẫn nghiêm cấm chia sẻ thông tin đăng nhập nội bộ." },
        { participant: 'CISO Morrison', text: "Rigorous execution. Consistent digital hygiene protects our corporate confidentiality.", translation: "Thực thi rất chặt chẽ. Kỷ luật an toàn số nghiêm ngặt sẽ bảo vệ tính bảo mật của toàn cơ quan." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Warning an Online Friend About Suspicious Links & Catfishing',
      participants: [
        { name: 'Kien', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KienPrivacy', role: 'Cyber-Savvy Friend' },
        { name: 'Mark', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MarkGamer', role: 'Online Friend' }
      ],
      lines: [
        { participant: 'Mark', text: "Hey Kien, check out this private Discord link someone just sent me! It promises free Steam game codes if you link your account.", translation: "Kiên ơi, xem cái link Discord riêng mà ai đó vừa gửi cho mình nè! Họ bảo sẽ tặng mã game Steam miễn phí nếu liên kết tài khoản." },
        { participant: 'Kien', text: "Stop right there, Mark! Do not click that link. That is a textbook phishing scam designed to steal your inventory and login credentials.", translation: "Dừng lại ngay Mark ơi! Tuyệt đối không bấm vào link đó nha. Đó là chiêu trò lừa đảo câu thông tin điển hình để hack tài khoản và đồ trong game của bạn đấy." },
        { participant: 'Mark', text: "Wait, really? But their profile had a picture of a mutual gaming friend!", translation: "Ủa thật hả bạn? Nhưng hồ sơ của họ để hình của một người bạn chơi game chung mà!" },
        { participant: 'Kien', text: "People catfish and clone profiles all the time online. Never share personal information or credentials unless it's an official verified domain.", translation: "Trên mạng người ta làm giả hồ sơ và mạo danh suốt ngày á bạn. Đừng bao giờ chia sẻ thông tin cá nhân hay mật khẩu trừ khi đó là trang web chính thức có chứng nhận." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Fast Scam Alert Warning in Group Chat',
      participants: [
        { name: 'Dan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DanAlert', role: 'Friend' },
        { name: 'Kylie', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KylieAlert', role: 'Friend' }
      ],
      lines: [
        { participant: 'Dan', text: "DO NOT click the link that bot sent! Total phishing.", translation: "ĐỪNG bấm vào cái link con bot vừa gửi nha! Lừa đảo chiếm tài khoản đó." },
        { participant: 'Kylie', text: "Got it! Banned and deleted the bot.", translation: "Nhận tin rồi! Đã khóa và xóa nick con bot đó rồi." },
        { participant: 'Dan', text: "Good catch, stay safe out there.", translation: "Xử lý chuẩn đấy, cẩn thận kẻo mất nick nha cả nhà." },
        { participant: 'Kylie', text: "Thanks for the heads-up bro!", translation: "Cảm ơn bạn đã cảnh báo kịp thời nhé!" }
      ]
    }
  ],

  'mf-14': [
    {
      type: 'pair',
      school: 'business',
      title: 'Executive Security Protocol for First-Time Field Representative Meetings',
      participants: [
        { name: 'Director Henderson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HendersonDirector', role: 'Security Director' },
        { name: 'Agent Nga', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NgaAgent', role: 'Field Representative' }
      ],
      lines: [
        { participant: 'Agent Nga', text: "Good morning, Director Henderson. I am preparing to meet an external international consultant whose initial engagement occurred via professional web forums.", translation: "Kính chào Giám đốc Henderson. Tôi đang chuẩn bị gặp gỡ trực tiếp một chuyên gia tư vấn quốc tế mà sự kết nối ban đầu diễn ra qua các diễn đàn chuyên môn trực tuyến." },
        { participant: 'Director Henderson', text: "Adhere strictly to protocol, Nga: initial physical meetups must transpire exclusively in public commercial venues during daylight hours.", translation: "Phải tuân thủ tuyệt đối quy trình an toàn, cô Nga: buổi gặp mặt trực tiếp đầu tiên phải diễn ra tại địa điểm thương mại công cộng và trong khung giờ ban ngày." },
        { participant: 'Agent Nga', text: "Understood, sir. The rendezvous is set at the hotel business lounge, and our regional headquarters maintains continuous location monitoring.", translation: "Rõ thưa Giám đốc. Điểm hẹn được ấn định tại sảnh phòng chờ khách sạn, và ban chỉ huy khu vực sẽ duy trì việc giám sát vị trí liên tục." },
        { participant: 'Director Henderson', text: "Exemplary operational diligence. Establish your check-in confirmation upon arrival.", translation: "Kỷ luật vận hành rất mẫu mực. Hãy xác nhận điểm danh ngay khi đến nơi." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Planning a Safe First Meetup at a Busy Cafe',
      participants: [
        { name: 'Nga', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NgaSafe', role: 'Local Friend' },
        { name: 'Mark', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MarkTraveler', role: 'Online Friend' }
      ],
      lines: [
        { participant: 'Mark', text: "Nga! I am finally visiting Hanoi after chatting online for six months. Can I pick you up from your house around 8 PM so we can drive somewhere quiet?", translation: "Nga ơi! Cuối cùng mình cũng ghé thăm Hà Nội sau nửa năm trò chuyện trên mạng. Tối tầm 8 giờ mình ghé đón bạn tận nhà rồi mình kiếm chỗ nào vắng vẻ dạo nhé?" },
        { participant: 'Nga', text: "That is so exciting you're here, Mark! But for our first time meeting in real life, let's meet directly at Highlands Coffee near Hoan Kiem Lake around 3 PM.", translation: "Vui quá đi Mark ơi! Nhưng mà lần đầu tiên gặp nhau ngoài đời thực, tụi mình hẹn gặp thẳng ở quán cà phê Highlands gần bờ hồ Hoàn Kiếm lúc 3 giờ chiều đi." },
        { participant: 'Mark', text: "Oh, sure, no problem! Is that easier for you?", translation: "À được chứ, không vấn đề gì! Chỗ đó thuận tiện hơn cho bạn hả?" },
        { participant: 'Nga', text: "Yes, it's a bustling public spot and easy to find. I also always share my schedule and live location with my roommates as a standard backup plan!", translation: "Đúng rồi, chỗ đó đông đúc an toàn và dễ tìm. Mình cũng luôn gửi lịch trình và định vị cho các bạn cùng phòng như một phương án an toàn quen thuộc ấy mà!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Live Location Pin Text Before Meetup',
      participants: [
        { name: 'Linh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LinhPin', role: 'Friend' },
        { name: 'Emma', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=EmmaPin', role: 'Online Friend' }
      ],
      lines: [
        { participant: 'Linh', text: "Arrived at the cafe! Sitting by the window on 1st floor.", translation: "Tớ tới quán cà phê rồi nè! Đang ngồi cạnh cửa sổ tầng 1." },
        { participant: 'Emma', text: "Walking up the stairs now! Wearing a yellow jacket.", translation: "Đang đi bộ lên cầu thang nè! Tớ mặc áo khoác màu vàng nha." },
        { participant: 'Linh', text: "See you! Pinned location sent to my sister too.", translation: "Thấy rồi nha! Tớ cũng gửi định vị cho chị gái rồi." },
        { participant: 'Emma', text: "Smart move! Wave your hand, spotting you now!", translation: "Cẩn thận vậy là chuẩn đó! Vẫy tay đi, tớ thấy bạn rồi!" }
      ]
    }
  ],

  'mf-15': [
    {
      type: 'pair',
      school: 'business',
      title: 'Diplomatic Facilitation on Cultural Respect at Youth Forum',
      participants: [
        { name: 'Dr. Vance', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=VanceTribunal', role: 'Forum Facilitator' },
        { name: 'Duy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DuyCounselor', role: 'Youth Delegate' }
      ],
      lines: [
        { participant: 'Duy', text: "Excuse me, Dr. Vance. During the round table, a few remarks relied heavily on outdated cultural stereotypes about Southeast Asian participants.", translation: "Xin lỗi tiến sĩ Vance. Trong phiên thảo luận bàn tròn vừa rồi, một vài ý kiến đã dựa trên những định kiến văn hóa khá cũ kỹ về các đại biểu Đông Nam Á." },
        { participant: 'Dr. Vance', text: "Thank you for bringing this to my attention, Duy. We strive to cultivate an environment founded on mutual cultural dignity.", translation: "Cảm ơn Duy đã thông báo kịp thời. Diễn đàn luôn nỗ lực xây dựng một không gian giao lưu dựa trên sự tôn trọng phẩm giá văn hóa của nhau." },
        { participant: 'Duy', text: "I appreciate that. I believe addressing cross-cultural awareness early will keep our collaborative discussions constructive.", translation: "Em rất trân trọng điều đó. Em tin rằng việc nâng cao nhận thức giao lưu văn hóa từ sớm sẽ giúp các phiên thảo luận nhóm diễn ra mang tính xây dựng hơn." },
        { participant: 'Dr. Vance', text: "Absolutely. I will emphasize inclusive communication principles at the opening of our afternoon plenary.", translation: "Chắc chắn rồi. Tôi sẽ nhấn mạnh các nguyên tắc giao tiếp tôn trọng và hòa nhập ngay đầu phiên họp toàn thể chiều nay." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Confronting an Insensitive Accent Joke Assertively',
      participants: [
        { name: 'Duy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Duy', role: 'Vietnamese Student' },
        { name: 'Jake', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bully', role: 'Exchange Peer' }
      ],
      lines: [
        { participant: 'Jake', text: "Haha Duy, your accent sounds so exotic! Can you say that again for our video?", translation: "Haha Duy ơi, giọng cậu nghe lạ tai ghê á! Nói lại câu đó cho tụi mình quay clip đi?" },
        { participant: 'Duy', text: "Actually, Jake, making fun of someone's accent isn't funny. My accent just shows I'm fluent in more than one language.", translation: "Thật ra thì Jake à, việc đem phát âm của người khác ra làm trò cười không vui chút nào đâu. Giọng của tớ chỉ chứng minh tớ nói được nhiều hơn một thứ tiếng thôi." },
        { participant: 'Jake', text: "Hey, sorry man! I didn't mean to make you feel uncomfortable, honestly.", translation: "Ủa xin lỗi bồ nhé! Tớ thực sự không có ý làm cậu cảm thấy khó chịu đâu." },
        { participant: 'Duy', text: "Thanks for understanding. Let's just focus on finishing our group presentation together.", translation: "Cảm ơn bạn đã hiểu. Tụi mình cùng tập trung hoàn thành bài thuyết trình nhóm thôi nào." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Muting & Reporting a Toxic Troll in Discord Voice Chat',
      participants: [
        { name: 'Nam', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NamBlock', role: 'Gamer' },
        { name: 'Alex', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AlexBlock', role: 'Gamer' }
      ],
      lines: [
        { participant: 'Nam', text: "That guy is dropping rude racist jokes in voice chat.", translation: "Thằng kia đang phun mấy câu đùa phân biệt chủng tộc kìa." },
        { participant: 'Alex', text: "Mute him instantly. Don't feed the troll.", translation: "Mute mic nó ngay và luôn đi. Đừng tiếp chuyện kẻ độc hại." },
        { participant: 'Nam', text: "Done. Clicked report for toxic harassment too.", translation: "Mute rồi. Vừa bấm report hành vi độc hại quấy rối luôn." },
        { participant: 'Alex', text: "Good call. Server mod already kicked him.", translation: "Xử lý chuẩn đấy. Mod server vừa kick nó ra luôn rồi." }
      ]
    }
  ],

  'mf-16': [
    {
      type: 'pair',
      school: 'business',
      title: 'Transnational Alumni Association Secretariat Coordination',
      participants: [
        { name: 'Secretariat Director Thorne', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ThorneSecretariat', role: 'Secretariat Director' },
        { name: 'Coordinator My', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MyCoord', role: 'Global Liaison' }
      ],
      lines: [
        { participant: 'Coordinator My', text: "Good evening, Director Thorne. Coordinating alumni chapters across twelve disparate time zones presents substantial logistical friction.", translation: "Kính chào Giám đốc Thorne. Việc điều phối các chi hội cựu sinh viên trên 12 múi giờ cách biệt tạo ra những thách thức hậu cần không nhỏ ạ." },
        { participant: 'Secretariat Director Thorne', text: "Indeed, My. Asynchronous communication channels and scheduled quarterly roundtables have become critical to maintaining institutional solidarity.", translation: "Dạ đúng vậy thưa cô My. Các kênh thông tin bất đối xứng và các buổi tọa đàm định kỳ hàng quý đã trở thành yếu tố then chốt để duy trì tình đoàn kết." },
        { participant: 'Coordinator My', text: "Furthermore, sending annual commemorative packages has strengthened enduring ties between international fellows and our home base.", translation: "Hơn nữa, việc gửi các kiện quà lưu niệm thường niên đã thắt chặt sợi dây liên kết bền bỉ giữa các học viên quốc tế và trụ sở chính." },
        { participant: 'Secretariat Director Thorne', text: "An invaluable initiative. Distance must never erode our collective global fellowship.", translation: "Một sáng kiến vô cùng giá trị. Khoảng cách địa lý không bao giờ được phép làm phai nhạt tình bạn bè quốc tế của chúng ta." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Catching Up Across Time Zones & Sending Care Packages',
      participants: [
        { name: 'Linh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LinhLongDistance', role: 'Friend in Vietnam' },
        { name: 'Liam', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LiamLongDistance', role: 'Friend in US' }
      ],
      lines: [
        { participant: 'Liam', text: "Linh! It is so good to see your face on FaceTime! Sorry for the weird calling hour—it's morning for you and night for me.", translation: "Linh ơi! Được nhìn thấy mặt bạn qua FaceTime vui quá đi! Xin lỗi vì gọi vào giờ hơi lệch—bên bạn đang là sáng còn bên mình đã là tối muộn." },
        { participant: 'Linh', text: "Liam, no need to apologize at all! With a twelve-hour time zone difference, we always make it work. By the way, did my care package arrive?", translation: "Liam ơi, không cần xin lỗi gì cả đâu! Lệch nhau tận 12 múi giờ mà tụi mình vẫn giữ liên lạc đều đặn được là đỉnh lắm rồi. À mà gói quà của mình gửi qua tới nơi chưa?" },
        { participant: 'Liam', text: "Yes! I opened it yesterday—the Vietnamese coffee filter, Trung Nguyen coffee grounds, and dried mango slices were unbelievable!", translation: "Tới rồi bạn ơi! Hôm qua mình vừa bóc hộp ra—cái phin cà phê Việt Nam, bịch cà phê Trung Nguyên với xoài sấy dẻo ngon xuất sắc luôn!" },
        { participant: 'Linh', text: "I'm so glad you loved it! I'm preparing another batch of handwritten postcards for your birthday next month.", translation: "Thấy bạn thích là mình vui lắm rồi! Mình đang chuẩn bị thêm mấy tấm bưu thiếp viết tay cho sinh nhật tháng sau của bạn nè." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Fast Time Zone Greeting Ping',
      participants: [
        { name: 'Huy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HuyTime', role: 'Friend' },
        { name: 'Jake', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JakeTime', role: 'Friend' }
      ],
      lines: [
        { participant: 'Huy', text: "Morning from Hanoi! Night time for you bro?", translation: "Chào buổi sáng từ Hà Nội nha! Bên ông chắc đang nửa đêm hả?" },
        { participant: 'Jake', text: "Heading to bed! Miss the Saigon iced coffee.", translation: "Đang chuẩn bị chui vô chăn nè! Nhớ cà phê sữa đá Sài Gòn ghê." },
        { participant: 'Huy', text: "Sleep well! Let's voice call this Sunday.", translation: "Ngủ ngon nha bạn hiền! Chủ nhật này gọi điện buôn chuyện nha." },
        { participant: 'Jake', text: "Deal! Sunday 8 PM your time.", translation: "Chốt kèo! 8 giờ tối Chủ nhật bên ông nhé." }
      ]
    }
  ],

  'mf-17': [
    {
      type: 'pair',
      school: 'business',
      title: 'Multilingual Pedagogy & Language Acquisition Conference',
      participants: [
        { name: 'Dean Martinez', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MartinezDean', role: 'Faculty Dean' },
        { name: 'Huong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HuongExchange', role: 'Exchange Coordinator' }
      ],
      lines: [
        { participant: 'Huong', text: "Good afternoon, Dean Martinez. Our cross-border virtual exchange pilot has completed its initial semester evaluation.", translation: "Kính chào Trưởng khoa Martinez. Dự án thí điểm trao đổi học thuật trực tuyến xuyên biên giới của chúng tôi đã hoàn tất kỳ đánh giá học kỳ đầu tiên ạ." },
        { participant: 'Dean Martinez', text: "Splendid news, Huong. How did the structured tandem learning partnerships perform regarding student engagement?", translation: "Tin rất vui, cô Hương. Các cặp đối tác học tập theo mô hình tandem có cấu trúc đã đạt hiệu quả thế nào về mức độ gắn kết của sinh viên?" },
        { participant: 'Huong', text: "Over ninety percent of student pairs maintained consistent weekly collaborative meetings, producing bilingual research summaries.", translation: "Dạ hơn 90% các cặp sinh viên duy trì gặp mặt hợp tác đều đặn hàng tuần và cùng nhau xuất bản các bản tóm tắt nghiên cứu song ngữ ạ." },
        { participant: 'Dean Martinez', text: "Remarkable dedication. The faculty will allocate formal funding to expand this exchange program university-wide.", translation: "Sự cống hiến rất đáng trân trọng. Ban giám hiệu sẽ cấp ngân sách chính thức để mở rộng chương trình trao đổi này ra toàn trường." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Weekly 1-on-1 Vietnamese-English Language Exchange',
      participants: [
        { name: 'Clara', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ClaraPartner', role: 'Language Partner' },
        { name: 'Nam', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NamPartner', role: 'Language Partner' }
      ],
      lines: [
        { participant: 'Nam', text: "Hey Clara, I'm so glad we committed to this weekly language exchange! How about we do thirty minutes of Vietnamese first, then thirty minutes of English?", translation: "Chào Clara, mình rất vui vì tụi mình đã cam kết duy trì buổi trao đổi ngoại ngữ hàng tuần này! Hay là tụi mình nói 30 phút tiếng Việt trước, sau đó 30 phút tiếng Anh nhé?" },
        { participant: 'Clara', text: "That sounds like the perfect balance! Today I prepared questions about how to order food at local Vietnamese markets.", translation: "Nghe cân bằng hoàn hảo luôn! Hôm nay mình đã chuẩn bị sẵn mấy câu hỏi về cách gọi món tại các chợ dân sinh ở Việt Nam nè." },
        { participant: 'Nam', text: "Awesome! And afterwards, could you help me review the abstract for my university environmental presentation?", translation: "Tuyệt quá! Còn lát nữa, bạn có thể xem giúp mình bản tóm tắt bài thuyết trình về môi trường ở trường đại học được không?" },
        { participant: 'Clara', text: "I'd love to! Having a collaborative partner makes studying so much more motivating than doing it alone.", translation: "Mình rất sẵn lòng! Có một người bạn đồng hành hợp tác thế này làm việc học có động lực hơn hẳn tự học một mình." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Fast Daily Vocab Quiz Text',
      participants: [
        { name: 'Binh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BinhQuiz', role: 'Study Buddy' },
        { name: 'Tom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TomQuiz', role: 'Study Buddy' }
      ],
      lines: [
        { participant: 'Binh', text: "Quick quiz: How do you say 'Thank you very much' in Vietnamese?", translation: "Đố vui nhanh nè: 'Thank you very much' nói tiếng Việt thế nào?" },
        { participant: 'Tom', text: "'Cảm ơn rất nhiều!' Did I nail the tone?", translation: "'Cảm ơn rất nhiều!' Tớ phát âm đúng dấu chưa?" },
        { participant: 'Binh', text: "10/10! Ready for our Skype study session tonight?", translation: "10/10 điểm luôn! Sẵn sàng cho buổi học qua Skype tối nay chưa?" },
        { participant: 'Tom', text: "Ready! See you at 8 sharp.", translation: "Sẵn sàng luôn! Đúng 8 giờ gặp nhau nha." }
      ]
    }
  ],

  'mf-18': [
    {
      type: 'pair',
      school: 'business',
      title: 'International Youth Leadership Forum Opening Assembly',
      participants: [
        { name: 'Secretary General Larsson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LarssonSG', role: 'Secretary General' },
        { name: 'Delegate Quynh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=QuynhDelegate', role: 'Youth Delegate' }
      ],
      lines: [
        { participant: 'Delegate Quynh', text: "Good morning, Secretary General Larsson. The Vietnamese youth delegation has arrived for the Global Leadership Camp in Geneva.", translation: "Kính chào Tổng Thư ký Larsson. Phái đoàn thanh niên Việt Nam đã có mặt tham dự Trại hè Lãnh đạo Toàn cầu tại Geneva ạ." },
        { participant: 'Secretary General Larsson', text: "Welcome, Quynh. Our annual camp unites delegates from sixty nations to foster intercultural understanding and problem-solving.", translation: "Chào mừng Quỳnh. Trại hè thường niên của chúng tôi quy tụ đại biểu từ 60 quốc gia để thúc đẩy sự thấu hiểu văn hóa và kỹ năng giải quyết vấn đề." },
        { participant: 'Delegate Quynh', text: "We are eager to step outside our comfort zones, collaborate with diverse peers, and share our sustainability frameworks.", translation: "Chúng tôi rất háo hức được bước ra khỏi vùng an toàn, hợp tác cùng các bạn bè đa quốc gia và chia sẻ các đề án phát triển bền vững." },
        { participant: 'Secretary General Larsson', text: "A laudable ethos. May this international forum forge lifelong diplomatic bonds.", translation: "Một tinh thần rất đáng khen ngợi. Chúc diễn đàn quốc tế này sẽ hun đúc nên những tình bạn ngoại giao bền chặt suốt đời." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Mingling at an International Summer Camp Common Room',
      participants: [
        { name: 'Minh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MinhCamp', role: 'Camp Participant' },
        { name: 'Lucas', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LucasCamp', role: 'Camp Participant' }
      ],
      lines: [
        { participant: 'Minh', text: "Hey! Do you mind if I sit here? I saw the Brazilian flag on your backpack; are you from São Paulo?", translation: "Chào bạn! Mình ngồi đây được không? Thấy cờ Brazil trên balo của bạn, bạn đến từ São Paulo hả?" },
        { participant: 'Lucas', text: "Please, have a seat! Yes, born and raised in São Paulo. My first time attending an international youth camp in Asia!", translation: "Cứ tự nhiên ngồi đi bạn ơi! Đúng rồi, mình sinh ra và lớn lên ở São Paulo. Lần đầu tiên mình tham gia trại hè quốc tế ở châu Á luôn đấy!" },
        { participant: 'Minh', text: "Welcome! I'm Minh from Hanoi. Stepping into this huge camp full of diverse nationalities felt intimidating at first, but everyone is so friendly.", translation: "Chào mừng bạn nhé! Mình là Minh đến từ Hà Nội. Ban đầu bước vào trại hè lớn toàn bạn bè đa quốc tịch thế này mình cũng hơi ngợp, nhưng mọi người ai cũng thân thiện ghê." },
        { participant: 'Lucas', text: "Totally agree! It pushes you right out of your comfort zone in the best way. Have you signed up for the talent show tonight?", translation: "Hoàn toàn đồng ý luôn! Trại hè này đẩy mình ra khỏi vùng an toàn theo cách tuyệt vời nhất. Bạn đã đăng ký tiết mục giao lưu tối nay chưa?" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Fast Camp Ping Pong Challenge Ping',
      participants: [
        { name: 'Dat', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DatPingPong', role: 'Camper' },
        { name: 'Felix', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=FelixPingPong', role: 'Camper' }
      ],
      lines: [
        { participant: 'Dat', text: "Ping pong table free! Rematch?", translation: "Bàn bóng bàn trống rồi kìa! Tái đấu không?" },
        { participant: 'Felix', text: "You're on! Grabbing my paddle now.", translation: "Chơi luôn sợ gì! Đang đi lấy vợt đây." },
        { participant: 'Dat', text: "First to 11 points buys ice cream!", translation: "Ai tới 11 điểm trước được khao kem nha!" },
        { participant: 'Felix', text: "Deal, meet you at the rec hall!", translation: "Chốt kèo, gặp ở phòng sinh hoạt chung nha!" }
      ]
    }
  ],

  'mf-19': [
    {
      type: 'pair',
      school: 'business',
      title: 'Cross-Cultural Diplomacy Briefing on Humor and Light-Hearted Wit',
      participants: [
        { name: 'Protocol Chief Vance', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ProtocolVance', role: 'Protocol Chief' },
        { name: 'Counselor Ha', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CounselorHa', role: 'Counselor' }
      ],
      lines: [
        { participant: 'Counselor Ha', text: "Good morning, Chief Vance. Incorporating light-hearted wit into our keynote speeches requires thorough cultural calibration.", translation: "Kính chào Trưởng ban Vance. Việc đưa sự hóm hỉnh nhẹ nhàng vào các bài diễn văn chính đòi hỏi sự cân nhắc văn hóa rất kỹ lưỡng." },
        { participant: 'Protocol Chief Vance', text: "Indeed, Counselor Ha. Gentle self-deprecating remarks can break tension, but sensitive religious or national topics remain strictly off-limits.", translation: "Dạ đúng vậy thưa Tham tán Hà. Lời tự trào tế nhị có thể giải tỏa căng thẳng, nhưng các chủ đề tôn giáo hoặc quốc gia nhạy cảm phải tuyệt đối tránh xa." },
        { participant: 'Counselor Ha', text: "We have reviewed the draft addresses to ensure the humor highlights personal humility without compromising institutional dignity.", translation: "Chúng tôi đã rà soát các bản thảo phát biểu để đảm bảo sự hài hước thể hiện sự khiêm nhường cá nhân mà không làm tổn hại đến phẩm giá cơ quan." },
        { participant: 'Protocol Chief Vance', text: "Exemplary diplomatic tact. A measured smile builds trust across any bilateral assembly.", translation: "Sự khéo léo ngoại giao rất chuẩn mực. Một nụ cười đúng mực luôn xây dựng được niềm tin ở mọi cuộc gặp song phương." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Gentle Banter and Self-Deprecation Over Accent Bloopers',
      participants: [
        { name: 'Vy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=VyHumor', role: 'Vietnamese Friend' },
        { name: 'Leo', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LeoHumor', role: 'Expat Friend' }
      ],
      lines: [
        { participant: 'Leo', text: "Vy, did you really accidentally tell the restaurant server that you wanted to eat 'chồng' instead of 'chả' earlier?", translation: "Vy ơi, lúc nãy có thật là bạn lỡ miệng nói với nhân viên nhà hàng là muốn ăn 'chồng' thay vì 'chả' không vậy?" },
        { participant: 'Vy', text: "Hahaha, please don't remind me! My brain completely short-circuited under pressure. The server's face was utterly priceless!", translation: "Hahaha, ôi đừng nhắc lại nữa mà! Lúc đó não mình bị đơ toàn tập dưới áp lực. Mặt bạn nhân viên lúc đó nhìn đúng là không nhịn được cười!" },
        { participant: 'Leo', text: "Don't feel bad, last week I tried to order noodles in Vietnamese and accidentally insulted the chef's grandmother!", translation: "Đừng ngại, tuần trước mình tập gọi bún bằng tiếng Việt còn suýt nói nhầm xúc phạm tới cả bà nội đầu bếp kìa!" },
        { participant: 'Vy', text: "Haha, learning languages without a sense of self-deprecating humor is impossible! As long as it's light-hearted, laughing at our own mistakes is great.", translation: "Haha, học ngoại ngữ mà không có tính tự trào biết cười bản thân thì không sống nổi! Miễn là vui vẻ nhẹ nhàng thì cùng cười trên lỗi sai của mình cũng vui mà." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Fast Autocorrect Fail Laugh Ping',
      participants: [
        { name: 'Nam', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NamTypo', role: 'Friend' },
        { name: 'Sam', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SamTypo', role: 'Friend' }
      ],
      lines: [
        { participant: 'Nam', text: "Autocorrect just changed 'see you soon' to 'sue you soon' LMAO!", translation: "Bàn phím vừa tự sửa 'hẹn sớm gặp' thành 'hẹn sớm kiện ra tòa' cười chết mất haha!" },
        { participant: 'Sam', text: "Hahaha don't take me to court bro!", translation: "Hahaha đừng lôi tôi ra tòa nha người anh em!" },
        { participant: 'Nam', text: "Never! See you at 5.", translation: "Ai dám đâu! 5 giờ chiều gặp nha." },
        { participant: 'Sam', text: "Holding you to it, attorney Nam!", translation: "Nhớ đó nha luật sư Nam!" }
      ]
    }
  ],

  'mf-20': [
    {
      type: 'pair',
      school: 'business',
      title: 'International Creative Residency & Bilateral Exhibition Agreement',
      participants: [
        { name: 'Curator Sterling', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CuratorSterling', role: 'Gallery Curator' },
        { name: 'Mai', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MaiArtist', role: 'Visual Artist' }
      ],
      lines: [
        { participant: 'Mai', text: "Good afternoon, Curator Sterling. I have finalized the creative portfolio proposing a collaborative photography and lacquer art residency between Vietnamese and Canadian artists.", translation: "Kính chào Giám tuyển Sterling. Tôi đã hoàn thiện hồ sơ sáng tạo đề xuất chương trình lưu trú nghệ thuật kết hợp nhiếp ảnh và tranh sơn mài giữa các nghệ sĩ Việt Nam và Canada." },
        { participant: 'Curator Sterling', text: "The synergy between traditional lacquer textures and contemporary architectural photography is breathtaking, Mai.", translation: "Sự cộng hưởng giữa chất liệu sơn mài truyền thống và nhiếp ảnh kiến trúc đương đại thật sự ngoạn mục, thưa cô Mai." },
        { participant: 'Mai', text: "Thank you, sir. Our primary objective is to facilitate reciprocal mentorship and exhibit the final joint series at the upcoming cultural festival.", translation: "Cảm ơn ông. Mục tiêu trọng tâm của chúng tôi là tạo điều kiện cho các nghệ sĩ học hỏi lẫn nhau và trưng bày chuỗi tác phẩm chung tại lễ hội văn hóa sắp tới." },
        { participant: 'Curator Sterling', text: "A splendid cultural initiative. Our foundation guarantees full grant sponsorship and gallery pavilion hosting.", translation: "Một sáng kiến văn hóa rất tuyệt vời. Quỹ của chúng tôi cam kết tài trợ toàn phần và cung cấp không gian triển lãm cho dự án." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Planning an Art Collaboration Between Photographer and Illustrator',
      participants: [
        { name: 'Kien', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KienArt', role: 'Street Photographer' },
        { name: 'Emma', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=EmmaArt', role: 'Digital Illustrator' }
      ],
      lines: [
        { participant: 'Emma', text: "Hey Kien! I just saw your high-contrast black and white photos of Hanoi's railway tracks on Instagram. The lighting is mesmerizing!", translation: "Chào Kiên! Mình vừa xem loạt ảnh đen trắng độ tương phản cao bạn chụp đường ray xe lửa Hà Nội trên Instagram. Ánh sáng đẹp mê hồn luôn!" },
        { participant: 'Kien', text: "Thanks so much, Emma! I've been admiring your neon digital illustrations for a while. Your cyberpunk color palettes are so unique.", translation: "Cảm ơn Emma nhiều nha! Mình cũng theo dõi tranh minh họa kỹ thuật số phong cách neon của bạn lâu rồi. Bảng màu cyberpunk của bạn độc đáo dã man." },
        { participant: 'Emma', text: "How would you feel about collaborating? What if I drew vibrant mythological creatures over your urban street shots?", translation: "Bạn nghĩ sao về việc tụi mình cùng kết hợp làm một dự án chung? Nếu mình vẽ thêm các sinh vật thần thoại rực rỡ đè lên ảnh đường phố của bạn thì sao?" },
        { participant: 'Kien', text: "That sounds like an incredible concept! Blending real street life with fantasy illustration would make a stunning zine. Let's start sketching!", translation: "Ý tưởng đó đỉnh thật sự luôn! Kết hợp đời sống đường phố chân thực với minh họa kỳ ảo sẽ tạo nên một cuốn tạp chí nghệ thuật tuyệt đẹp. Tụi mình bắt tay vào phác thảo liền đi!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Fast Art Collab File Drop',
      participants: [
        { name: 'Linh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LinhCollab', role: 'Artist' },
        { name: 'Max', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MaxCollab', role: 'Animator' }
      ],
      lines: [
        { participant: 'Linh', text: "Exported the background layer PSD to Google Drive!", translation: "Vừa xuất file PSD lớp nền lên Google Drive rồi nè!" },
        { participant: 'Max', text: "Downloading now! The color tones are insane.", translation: "Đang tải xuống đây! Tông màu nhìn cháy quá." },
        { participant: 'Linh', text: "Animate the floating lanterns next?", translation: "Hoạt họa tiếp mấy cái đèn lồng bay lơ lửng nha?" },
        { participant: 'Max', text: "On it! Will share preview clip tonight.", translation: "Triển luôn! Tối nay gửi clip xem thử liền." }
      ]
    }
  ]
};
