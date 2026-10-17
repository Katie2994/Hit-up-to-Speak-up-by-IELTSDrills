// Distinct 3-tier Dialogues (Business/Diplomatic, Casual, Super Casual) for Lessons mf-01 to mf-20 (Making Friends Abroad)
// Guarantees 100% differentiation across all 3 communication schools with no overlapping scenarios.

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
      title: 'International Literature & Creative Arts Panel Discussion',
      participants: [
        { name: 'Curator Vance', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CuratorVance', role: 'Museum Curator' },
        { name: 'Mai', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MaiArts', role: 'Art Historian' }
      ],
      lines: [
        { participant: 'Mai', text: "Good evening, Curator Vance. I was deeply impressed by your curated exhibition on contemporary Southeast Asian pottery.", translation: "Kính chào Giám tuyển Vance. Tôi vô cùng ấn tượng trước triển lãm của ông về nghệ thuật gốm đương đại Đông Nam Á." },
        { participant: 'Curator Vance', text: "Thank you, Mai. My enduring research passion has always centered on indigenous ceramic glazing traditions.", translation: "Cảm ơn cô Mai. Đam mê nghiên cứu bền bỉ của tôi luôn gắn liền với các kỹ thuật tráng men truyền thống bản địa." },
        { participant: 'Mai', text: "Fascinating. In Vietnam, our traditional Bat Trang ceramics reflect a parallel evolution of cobalt-pigment techniques.", translation: "Thật cuốn hút. Tại Việt Nam, làng gốm Bát Tràng truyền thống cũng phản ánh sự phát triển tương đồng về kỹ thuật chế tác sắc tố lam cobalt." },
        { participant: 'Curator Vance', text: "A remarkable cultural correlation. Let us exchange academic portfolios to facilitate mutual research cataloging.", translation: "Một mối liên hệ văn hóa thật đáng chú ý. Chúng ta hãy cùng trao đổi hồ sơ nghiên cứu để thuận tiện cho việc lưu trữ tài liệu chung." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Bonding Over Photography Gear at a Scenic Lookout',
      participants: [
        { name: 'Duc', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DucPhoto', role: 'Photographer' },
        { name: 'Emma', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=EmmaPhoto', role: 'Backpacker' }
      ],
      lines: [
        { participant: 'Duc', text: "Nice camera! Are you shooting with a 35mm prime lens on that Fuji body?", translation: "Máy ảnh xịn quá bạn ơi! Bạn đang chụp bằng ống kính 35mm một tiêu cự trên thân máy Fuji hả?" },
        { participant: 'Emma', text: "Hey! Yes, good eye! Street photography is my biggest passion whenever I travel through Asia.", translation: "Chào bạn! Chuẩn luôn, mắt nhìn tinh ghê! Chụp ảnh đường phố là đam mê lớn nhất của mình mỗi khi đi du lịch châu Á." },
        { participant: 'Duc', text: "Same here. The golden hour lighting over the old town roofs right now is unbelievable.", translation: "Mình cũng mê thể loại đó. Ánh sáng giờ vàng chiếu qua mấy mái ngói phố cổ lúc này đẹp không tin nổi luôn." },
        { participant: 'Emma', text: "Totally breathtaking! Do you share your shots on Instagram? Let's follow each other!", translation: "Quá choáng ngợp luôn! Bạn có hay đăng ảnh lên Instagram không? Cho mình kết bạn theo dõi với nha!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Gaming Tag Exchange on Discord',
      participants: [
        { name: 'Khoa', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KhoaGame', role: 'Gamer' },
        { name: 'Leo', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LeoGame', role: 'Gamer' }
      ],
      lines: [
        { participant: 'Khoa', text: "Play Valorant or Apex?", translation: "Có chơi Valorant hay Apex không?" },
        { participant: 'Leo', text: "Maining Apex! Diamond rank.", translation: "Chuyên cày Apex nè! Hạng Kim cương." },
        { participant: 'Khoa', text: "Drop your Discord tag, let's duo!", translation: "Cho xin tên Discord đi, tối nay leo rank đôi!" },
        { participant: 'Leo', text: "Leo#1024. Adding you now, let's frag!", translation: "Leo#1024 nè. Add ông liền, tối bắn cháy máy!" }
      ]
    }
  ],

  'mf-03': [
    {
      type: 'pair',
      school: 'business',
      title: 'Diplomatic Culinary Heritage Presentation',
      participants: [
        { name: 'Ambassador Miller', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MillerAmb', role: 'Ambassador' },
        { name: 'Chef Thao', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ThaoChef', role: 'Gastronomy Envoy' }
      ],
      lines: [
        { participant: 'Chef Thao', text: "Excellency, it is an honor to present our traditional Vietnamese Phở broth, slow-simmered for twelve hours with star anise, cinnamon, and roasted ginger.", translation: "Kính thưa Đại sứ, thật vinh dự được giới thiệu món nước dùng Phở truyền thống Việt Nam, ninh chậm suốt 12 tiếng cùng hoa hồi, quế và gừng nướng." },
        { participant: 'Ambassador Miller', text: "The aromatic complexity is truly magnificent, Chef Thao. Culinary tradition is perhaps the most resonant ambassador of national heritage.", translation: "Hương thơm phức hợp này thực sự tuyệt vời, thưa Bếp trưởng Thảo. Ẩm thực truyền thống có lẽ là vị đại sứ truyền cảm hứng nhất của di sản văn hóa một quốc gia." },
        { participant: 'Chef Thao', text: "Indeed, Excellency. Vietnamese gastronomy is predicated on the philosophy of yin-yang balance and fresh medicinal herbs.", translation: "Dạ đúng như vậy thưa ngài. Nghệ thuật ẩm thực Việt Nam dựa trên triết lý cân bằng âm dương và các loại thảo mộc tươi tốt cho sức khỏe." },
        { participant: 'Ambassador Miller', text: "A profound cultural testament. We look forward to featuring this showcase at our upcoming diplomatic culinary summit.", translation: "Một minh chứng văn hóa thật sâu sắc. Chúng tôi rất mong được đưa món ăn này vào buổi tiệc chiêu đãi ngoại giao sắp tới." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Introducing Street Food Culture to an Expat Friend',
      participants: [
        { name: 'Hung', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HungStreet', role: 'Local Friend' },
        { name: 'Chloe', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ChloeStreet', role: 'Expat Friend' }
      ],
      lines: [
        { participant: 'Hung', text: "Chloe, have you ever eaten Banh Mi at a roadside cart while sitting on tiny plastic stools?", translation: "Chloe ơi, bạn đã bao giờ ngồi ghế nhựa lề đường ăn bánh mì ở một xe đẩy ven đường chưa?" },
        { participant: 'Chloe', text: "Not yet! I've only been to sit-down restaurants so far. Show me how locals do it!", translation: "Chưa luôn á! Từ hồi tới đây mình toàn ăn ở nhà hàng máy lạnh thôi. Dẫn mình đi trải nghiệm như người bản địa đi!" },
        { participant: 'Hung', text: "You're in for a treat! The crispy warm baguette with pâté, grilled pork, pickled daikon, and fresh coriander is a flavor explosion.", translation: "Bạn sắp được mở mang tầm mắt rồi! Bánh mì nóng giòn rụm kẹp pate, thịt nướng, đồ chua với rau mùi tươi ngon bùng nổ vị giác luôn." },
        { participant: 'Chloe', text: "I can smell the grill already! Let's get two and find a spot by the park.", translation: "Mình ngửi thấy mùi thịt nướng thơm phức rồi nè! Mua hai ổ rồi ra công viên ngồi ăn thôi bạn!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Fast Midnight Street Food Run',
      participants: [
        { name: 'Dat', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DatNight', role: 'Friend' },
        { name: 'Sam', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SamNight', role: 'Friend' }
      ],
      lines: [
        { participant: 'Dat', text: "Late night snail stall? Best in town.", translation: "Đi ăn ốc đêm hông? Quán đỉnh nhất thành phố luôn." },
        { participant: 'Sam', text: "Are they spicy? I love spicy!", translation: "Có cay không? Mê ăn cay lắm đó!" },
        { participant: 'Dat', text: "Chili salt and lemongrass. Unmatched!", translation: "Muối ớt với sả thơm lừng. Hết nước chấm!" },
        { participant: 'Sam', text: "Hop on the scooter, let's ride!", translation: "Lên xe máy liền, phóng thôi nào!" }
      ]
    }
  ],

  'mf-04': [
    {
      type: 'pair',
      school: 'business',
      title: 'International Tourism Development Roundtable',
      participants: [
        { name: 'Director Sterling', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DirectorSterling', role: 'Tourism Board' },
        { name: 'Dr. Trang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DrTrangTour', role: 'Heritage Specialist' }
      ],
      lines: [
        { participant: 'Dr. Trang', text: "Good morning, Director Sterling. I am presenting our UNESCO heritage stewardship framework for Ha Long Bay and Phong Nha-Ke Bang.", translation: "Kính chào Giám đốc Sterling. Tôi xin trình bày khung quản lý di sản UNESCO bền vững cho Vịnh Hạ Long và Vườn quốc gia Phong Nha - Kẻ Bàng." },
        { participant: 'Director Sterling', text: "Welcome, Dr. Trang. How do you propose harmonizing eco-tourism accessibility with strict environmental conservation?", translation: "Chào Tiến sĩ Trang. Bà đề xuất việc dung hòa giữa việc mở cửa du lịch sinh thái với công tác bảo tồn môi trường nghiêm ngặt như thế nào?" },
        { participant: 'Dr. Trang', text: "We enforce strict carrying-capacity quotas, zero-plastic maritime corridors, and mandatory local community revenue-sharing.", translation: "Chúng tôi áp dụng định mức hạn chế sức tải du khách nghiêm ngặt, hành lang biển không rác thải nhựa và bắt buộc chia sẻ lợi ích kinh tế với cộng đồng bản địa." },
        { participant: 'Director Sterling', text: "A compelling sustainable model. We will incorporate these strategic recommendations into our regional development whitepaper.", translation: "Một mô hình phát triển bền vững rất thuyết phục. Chúng tôi sẽ đưa các khuyến nghị chiến lược này vào báo cáo phát triển khu vực." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Swapping Backpacking Stories in a Hostel Common Room',
      participants: [
        { name: 'Khang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KhangTravel', role: 'Backpacker' },
        { name: 'Oliver', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=OliverTravel', role: 'Traveler' }
      ],
      lines: [
        { participant: 'Khang', text: "Oliver, how was your motorbike trip riding through the Ha Giang Loop last week?", translation: "Oliver ơi, chuyến phượt xe máy qua cung đường đèo Hà Giang tuần trước của bạn thế nào rồi?" },
        { participant: 'Oliver', text: "It was hands down the most breathtaking adventure of my life! The mountain passes and misty valleys were surreal.", translation: "Phải nói là chuyến phiêu lưu đẹp nghẹt thở nhất cuộc đời mình từ trước đến nay! Mấy cung đèo hiểm trở với thung lũng mờ sương trông ảo diệu vô cùng." },
        { participant: 'Khang', text: "Did you stop by the Ma Pi Leng pass and take a boat tour on the Nho Que river?", translation: "Bạn có ghé đèo Mã Pí Lèng rồi đi thuyền ngắm sông Nho Quế màu ngọc bích không?" },
        { participant: 'Oliver', text: "Yes! The emerald-green water looked like something straight out of a fantasy movie. Vietnam's north is magic.", translation: "Có chứ! Làn nước xanh như ngọc bích nhìn như cảnh bước ra từ phim điện ảnh thần thoại vậy. Miền Bắc Việt Nam quá kỳ diệu." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Fast Travel Photo Ping',
      participants: [
        { name: 'Son', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SonPhoto', role: 'Friend' },
        { name: 'Max', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MaxPhoto', role: 'Friend' }
      ],
      lines: [
        { participant: 'Son', text: "Check your WhatsApp! Dropped Ha Giang pics.", translation: "Xem WhatsApp liền đi! Gửi ảnh Hà Giang qua rồi đó." },
        { participant: 'Max', text: "Dude, that canyon view is insane!", translation: "Trời ơi bạn ơi, cái hẻm núi nhìn choáng ngợp dã man!" },
        { participant: 'Son', text: "Booking your flight yet?", translation: "Đã đặt vé máy bay chưa đó?" },
        { participant: 'Max', text: "Packing my bags right now!", translation: "Đang xếp ba lô liền đây!" }
      ]
    }
  ],

  'mf-05': [
    {
      type: 'pair',
      school: 'business',
      title: 'Cross-Cultural Sociolinguistics Seminar',
      participants: [
        { name: 'Professor Higgins', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ProfHiggins', role: 'Linguist' },
        { name: 'Yen', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=YenLinguist', role: 'Researcher' }
      ],
      lines: [
        { participant: 'Yen', text: "Professor Higgins, our comparative research examines how digital shorthand and pragmatic particles evolve in cross-cultural messaging.", translation: "Kính thưa Giáo sư Higgins, nghiên cứu đối chiếu của chúng em phân tích cách thức các từ ngữ viết tắt kỹ thuật số và trợ từ ngữ dụng tiến hóa trong giao tiếp liên văn hóa." },
        { participant: 'Professor Higgins', text: "A captivating inquiry, Yen. Contemporary youth communications exhibit remarkable semantic economy and contextual nuances.", translation: "Một hướng nghiên cứu rất hấp dẫn, Yen à. Ngôn ngữ giao tiếp của giới trẻ đương đại thể hiện tính tiết kiệm ngữ nghĩa và sắc thái ngữ cảnh vô cùng độc đáo." },
        { participant: 'Yen', text: "Precisely, sir. Even tone-modulating emojis fulfill the pragmatic function of epistemic stance markers.", translation: "Dạ chính xác thưa thầy. Ngay cả các biểu tượng cảm xúc điều chỉnh sắc thái cũng đảm nhiệm chức năng ngữ dụng như các chỉ dấu biểu thị thái độ." },
        { participant: 'Professor Higgins', text: "Indeed. Your thesis draft will serve as an insightful chapter in our forthcoming sociolinguistic compendium.", translation: "Rất đúng. Bản thảo luận văn của em sẽ là một chương nghiên cứu sâu sắc trong tuyển tập xã hội học ngôn ngữ sắp tới của khoa." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Deciphering Slang and Texting Abbreviations Over Coffee',
      participants: [
        { name: 'Minh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MinhSlang', role: 'Local' },
        { name: 'Alex', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AlexSlang', role: 'Exchange Student' }
      ],
      lines: [
        { participant: 'Alex', text: "Minh, what does 'dinh chop' or 'het nuoc cham' actually mean in Vietnamese slang? I see it all over TikTok comments!", translation: "Minh ơi, mấy từ lóng tiếng Việt như 'đỉnh chóp' với 'hết nước chấm' thực sự có nghĩa là gì thế? Mình thấy người ta bình luận đầy trên TikTok luôn!" },
        { participant: 'Minh', text: "Haha! 'Dinh chop' literally means 'mountain peak', basically meaning 'top-tier' or 'peak excellence'. And 'het nuoc cham' means something is so good you ran out of dipping sauce!", translation: "Haha! 'Đỉnh chóp' nghĩa đen là đỉnh núi, tương đương với 'top-tier' cực kỳ xuất sắc. Còn 'hết nước chấm' là món ngon đến mức ăn sạch cả nước chấm luôn!" },
        { participant: 'Alex', text: "That is so hilarious and expressive! What's the equivalent of 'chill out' or 'relax'?", translation: "Diễn đạt hài hước mà hình tượng ghê! Thế còn từ tương đương với 'chill out' hay 'thư giãn' là gì?" },
        { participant: 'Minh', text: "We just say 'Chill di' or 'Cu binh tinh'! Short, punchy, and everyone understands.", translation: "Tụi mình hay bảo 'Chill đi' hoặc 'Cứ bình tĩnh'! Ngắn gọn, dễ hiểu ai cũng dùng." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Fast Slang Texting Chat',
      participants: [
        { name: 'Vy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=VyText', role: 'Friend' },
        { name: 'Tom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TomText', role: 'Friend' }
      ],
      lines: [
        { participant: 'Vy', text: "Concert was absolute peak! Pure vibes.", translation: "Buổi hòa nhạc đỉnh chóp luôn! Vibe cực cháy." },
        { participant: 'Tom', text: "FOMO hitting hard! Send video clips.", translation: "Thấy mà tiếc hùi hụi luôn nè! Gửi mấy đoạn video xem với." },
        { participant: 'Vy', text: "Uploading to IG story now. Check it!", translation: "Đang up lên story Instagram nè. Vào xem lẹ!" },
        { participant: 'Tom', text: "Watching right now, insane crowd!", translation: "Đang xem nè, khán giả cuồng nhiệt dã man!" }
      ]
    }
  ],

  'mf-06': [
    {
      type: 'pair',
      school: 'business',
      title: 'Formal Bilateral Weekend Excursion Protocol',
      participants: [
        { name: 'Protocol Officer Henderson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=OfficerHenderson', role: 'Protocol Lead' },
        { name: 'Dr. Tuan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DrTuan', role: 'Visiting Scholar' }
      ],
      lines: [
        { participant: 'Dr. Tuan', text: "Good afternoon, Officer Henderson. Our visiting academic delegation wishes to arrange a cultural weekend excursion to the Imperial Citadel of Hue.", translation: "Kính chào Trưởng ban Lễ tân Henderson. Phái đoàn học giả của chúng tôi mong muốn sắp xếp một chuyến tham quan văn hóa cuối tuần tới Đại Nội Huế ạ." },
        { participant: 'Protocol Officer Henderson', text: "Certainly, Dr. Tuan. We can coordinate an official diplomatic transport van and accredited heritage guides for Saturday morning.", translation: "Chắc chắn rồi Tiến sĩ Tuấn. Chúng tôi có thể điều phối xe ngoại giao và hướng dẫn viên di sản được cấp phép cho sáng thứ Bảy." },
        { participant: 'Dr. Tuan', text: "That is most gracious. I shall submit our delegation manifest and dietary preferences by 4 PM today.", translation: "Thật vô cùng chu đáo. Tôi sẽ gửi danh sách đoàn và các yêu cầu khẩu vị trước 4 giờ chiều hôm nay." },
        { participant: 'Protocol Officer Henderson', text: "We look forward to curating an enriching historical experience for your scholars.", translation: "Chúng tôi rất mong được mang đến cho các học giả một trải nghiệm lịch sử phong phú và ý nghĩa." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Planning a Saturday Beach and Cafe Hangout',
      participants: [
        { name: 'Huong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HuongHangout', role: 'Local Friend' },
        { name: 'Daniel', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DanielHangout', role: 'Expat Friend' }
      ],
      lines: [
        { participant: 'Huong', text: "Hey Daniel, do you have any plans for this Saturday? The weather forecast looks sunny and breezy.", translation: "Daniel ơi, thứ Bảy này bạn có kế hoạch gì chưa? Dự báo thời tiết có nắng nhẹ mà gió mát lắm." },
        { participant: 'Daniel', text: "I'm totally free! I was thinking of renting a surfboard at My Khe beach in the morning. Are you down to join?", translation: "Mình rảnh nguyên ngày luôn! Mình đang tính sáng sớm ra biển Mỹ Khê thuê ván lướt sóng. Bạn có muốn đi cùng không?" },
        { participant: 'Huong', text: "Count me in! We can surf for a couple of hours and then grab avocado smoothies at that open-air cafe nearby.", translation: "Tính mình một chân với nha! Tụi mình lướt sóng tầm hai tiếng rồi ghé quán cà phê thoáng mát gần đó uống sinh tố bơ." },
        { participant: 'Daniel', text: "Sounds like the perfect weekend plan. I'll pick you up at 7:30 AM so we beat the midday heat.", translation: "Kế hoạch cuối tuần quá chuẩn bài luôn. Tầm 7h30 sáng mình qua đón bạn để tránh nắng gắt buổi trưa nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Weekend Chill Ping',
      participants: [
        { name: 'Kien', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KienChill', role: 'Friend' },
        { name: 'Sam', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SamChill', role: 'Friend' }
      ],
      lines: [
        { participant: 'Kien', text: "Free tonight? Rooftop drinks?", translation: "Tối nay rảnh hông? Lên quán bar sân thượng ngắm cảnh?" },
        { participant: 'Sam', text: "100% down! What time?", translation: "Chốt kèo liền! Mấy giờ thế?" },
        { participant: 'Kien', text: "8 PM. Sunset view is fire.", translation: "8 giờ tối nha. Ngắm hoàng hôn bao đỉnh." },
        { participant: 'Sam', text: "See you there! Don't be late.", translation: "Hẹn gặp ở đó! Cấm cao su giờ dây thun nhen." }
      ]
    }
  ],

  'mf-07': [
    {
      type: 'pair',
      school: 'business',
      title: 'International Film Festival Reception & Panel',
      participants: [
        { name: 'Jury President Laurent', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JuryLaurent', role: 'Jury President' },
        { name: 'Director Ha', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DirectorHa', role: 'Filmmaker' }
      ],
      lines: [
        { participant: 'Director Ha', text: "Good evening, President Laurent. It is a distinct privilege to screen our independent feature at this international festival.", translation: "Kính chào Chủ tịch Ban giám khảo Laurent. Thật là một đặc ân to lớn khi bộ phim độc lập của chúng tôi được trình chiếu tại liên hoan phim quốc tế này ạ." },
        { participant: 'Jury President Laurent', text: "Congratulations, Director Ha. The jury was profoundly moved by your cinematic portrayal of rural matrilineal traditions.", translation: "Xin chúc mừng Đạo diễn Hà. Ban giám khảo đã vô cùng xúc động trước ngôn ngữ điện ảnh khắc họa truyền thống mẫu hệ nông thôn của bà." },
        { participant: 'Director Ha', text: "Thank you, sir. We sought to illuminate universal human vulnerability through an intimate indigenous cultural lens.", translation: "Cảm ơn ngài. Chúng tôi mong muốn làm sáng tỏ những góc khuất tâm hồn phổ quát của con người qua lăng kính văn hóa bản địa sâu sắc." },
        { participant: 'Jury President Laurent', text: "You achieved that with poetic mastery. We anticipate widespread distribution acclaim for your motion picture.", translation: "Bà đã đạt được điều đó với sự điêu luyện đầy chất thơ. Chúng tôi tin rằng bộ phim sẽ nhận được sự tán thưởng rộng rãi khi phát hành." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Discussing Favorite Indie Bands and Movies',
      participants: [
        { name: 'Nam', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NamIndie', role: 'Music Fan' },
        { name: 'Maya', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MayaIndie', role: 'Film Buff' }
      ],
      lines: [
        { participant: 'Nam', text: "Maya, have you listened to any Vietnamese indie bands like Ngot or Ca Hoi Hoang?", translation: "Maya ơi, bạn đã nghe ban nhạc indie Việt Nam nào như Ngọt hay Cá Hồi Hoang chưa?" },
        { participant: 'Maya', text: "Not yet! I've been meaning to explore local music. Send me your top playlist on Spotify!", translation: "Chưa luôn á! Mình cũng đang muốn tìm hiểu nhạc bản địa nè. Gửi playlist ruột của bạn trên Spotify qua cho mình với!" },
        { participant: 'Nam', text: "Sending it right now! The melodic guitar riffs and poetic lyrics are so soulful.", translation: "Gửi qua liền nè! Giai điệu guitar với lời ca giàu chất thơ nghe thấm lắm." },
        { participant: 'Maya', text: "Thanks! In exchange, you have to watch this Korean indie thriller I discovered last weekend. It'll blow your mind.", translation: "Cảm ơn bạn nha! Đổi lại bạn phải xem bộ phim trinh thám indie Hàn Quốc mình mới cày tuần trước. Đảm bảo cuốn đến phút chót." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Fast Spotify Song Share',
      participants: [
        { name: 'Bao', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BaoSong', role: 'Friend' },
        { name: 'Leo', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LeoSong', role: 'Friend' }
      ],
      lines: [
        { participant: 'Bao', text: "Listen to this track right now!", translation: "Nghe bài hát này liền đi ông bạn!" },
        { participant: 'Leo', text: "Putting headphones on... That beat is crazy!", translation: "Đang đeo tai nghe... Tiếng beat căng đét luôn!" },
        { participant: 'Bao', text: "Told you! On repeat all day.", translation: "Đã bảo mà! Bật lặp lại cả ngày nay." },
        { participant: 'Leo', text: "Added to my favorites. Pure heat!", translation: "Thêm vào danh sách yêu thích rồi. Quá cháy!" }
      ]
    }
  ],

  'mf-08': [
    {
      type: 'pair',
      school: 'business',
      title: 'Expatriate Well-being Consultation at International Institute',
      participants: [
        { name: 'Director Dr. Morrison', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DrMorrison', role: 'Expat Counselor' },
        { name: 'Quang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=QuangExpat', role: 'Visiting Scholar' }
      ],
      lines: [
        { participant: 'Quang', text: "Good morning, Dr. Morrison. I would like to consult with you regarding cultural transition challenges during my first semester abroad.", translation: "Kính chào Tiến sĩ Morrison. Em xin phép được tham vấn thầy về những khó khăn trong việc thích ứng văn hóa trong học kỳ đầu ở nước ngoài ạ." },
        { participant: 'Director Dr. Morrison', text: "Welcome, Quang. Navigating culture shock and homesickness is an entirely natural phase of cross-border relocation.", translation: "Chào em Quang. Trải qua cảm giác sốc văn hóa và nhớ nhà là một giai đoạn hoàn toàn tự nhiên khi chuyển đến sống ở một quốc gia khác." },
        { participant: 'Quang', text: "The unfamiliar social norms and linguistic differences occasionally induce a sense of isolation.", translation: "Các quy chuẩn xã hội xa lạ và sự khác biệt về ngôn ngữ đôi lúc làm em cảm thấy bị cô lập ạ." },
        { participant: 'Director Dr. Morrison', text: "We facilitate a weekly international scholar peer-support circle. Connecting with fellow overseas students accelerates cultural adaptation remarkably.", translation: "Viện có tổ chức nhóm chia sẻ đồng cảnh ngộ hàng tuần cho học giả quốc tế. Việc kết nối với các bạn du học sinh sẽ giúp đẩy nhanh quá trình hòa nhập rất nhiều." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Sharing Homesickness and Comfort Food with a Friend',
      participants: [
        { name: 'Trang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TrangHome', role: 'Student Abroad' },
        { name: 'Liam', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LiamHome', role: 'Local Friend' }
      ],
      lines: [
        { participant: 'Liam', text: "Hey Trang, you looked a bit quiet during lunch today. Everything alright?", translation: "Trang ơi, lúc ăn trưa thấy bạn hơi trầm lặng. Mọi chuyện vẫn ổn chứ?" },
        { participant: 'Trang', text: "Honestly, I'm just feeling pretty homesick today. My family is having a big reunion dinner back home for the Lunar New Year.", translation: "Thú thật là hôm nay mình nhớ nhà quá. Ở quê gia đình đang sum họp ăn bữa cơm tất niên mừng năm mới." },
        { participant: 'Liam', text: "I completely understand how tough that can feel. Do you want to go to the Asian market and cook some traditional spring rolls together tonight?", translation: "Mình hoàn toàn hiểu cảm giác trống trải đó. Tối nay bạn có muốn cùng mình ghé chợ châu Á mua đồ về tự cuốn nem rán truyền thống không?" },
        { participant: 'Trang', text: "That would mean the world to me, Liam! Cooking family recipes always makes me feel so much better.", translation: "Bạn chu đáo quá Liam ơi! Tự tay nấu mấy món quen thuộc của gia đình lúc nào cũng làm mình thấy ấm lòng hơn." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Homesick Comfort Text',
      participants: [
        { name: 'Duc', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DucText', role: 'Friend' },
        { name: 'An', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AnText', role: 'Friend' }
      ],
      lines: [
        { participant: 'Duc', text: "Craving mom's beef pho so bad.", translation: "Thèm phở bò mẹ nấu cồn cào luôn." },
        { participant: 'An', text: "Found an authentic pho spot yesterday! Going?", translation: "Hôm qua mới tìm được một quán phở chuẩn vị nè! Đi ăn không?" },
        { participant: 'Duc', text: "Save my life! Send location.", translation: "Cứu tinh đời tui! Gửi định vị qua liền đi." },
        { participant: 'An', text: "Sent! Meet you outside in 15.", translation: "Gửi rồi đó! 15 phút nữa gặp trước quán nha." }
      ]
    }
  ],

  'mf-09': [
    {
      type: 'pair',
      school: 'business',
      title: 'Formal Commendation at International Charity Gala',
      participants: [
        { name: 'Ambassador Thorne', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AmbThorne', role: 'Ambassador' },
        { name: 'Ms. Linh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LinhCharity', role: 'NGO Director' }
      ],
      lines: [
        { participant: 'Ambassador Thorne', text: "Ms. Linh, I wish to extend our deepest commendations for your exceptional humanitarian leadership in disaster relief operations.", translation: "Kính thưa bà Linh, tôi xin gửi lời khen ngợi sâu sắc nhất trước sự lãnh đạo nhân đạo xuất sắc của bà trong các hoạt động cứu trợ thiên tai." },
        { participant: 'Ms. Linh', text: "Your Excellency is most generous. This achievement belongs entirely to our courageous frontline volunteers and grassroots partners.", translation: "Đại sứ thật quá lời khen ngợi ạ. Thành quả này thuộc về toàn bộ các tình nguyện viên tuyến đầu quả cảm và các đối tác cơ sở." },
        { participant: 'Ambassador Thorne', text: "Your humility exemplifies true statesmanship. Our embassy pledges matching financial grants for your ongoing rural clinic construction.", translation: "Sự khiêm nhường của bà thể hiện phẩm chất của một nhà lãnh đạo chân chính. Đại sứ quán chúng tôi cam kết tài trợ đối ứng cho dự án xây dựng trạm y tế nông thôn." },
        { participant: 'Ms. Linh', text: "We accept this partnership with immense gratitude. It will transform countless lives across mountainous communities.", translation: "Chúng tôi đón nhận sự hợp tác này với lòng biết ơn vô hạn. Dự án sẽ thay đổi cuộc sống của vô số người dân vùng cao." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Cheering Up a Friend After a Rough Presentation',
      participants: [
        { name: 'Mai', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MaiFriend', role: 'Classmate' },
        { name: 'Chris', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ChrisFriend', role: 'Classmate' }
      ],
      lines: [
        { participant: 'Chris', text: "I totally butchered that presentation today, Mai. I stumbled over my words and lost my place on slide four.", translation: "Hôm nay mình thuyết trình tệ quá Mai ơi. Mình bị vấp từ liên tục rồi lúng túng quên mất ý ở slide số bốn." },
        { participant: 'Mai', text: "Hey, don't be so hard on yourself! You handled the Q&A section with incredible clarity, and your research data was rock solid.", translation: "Này, đừng quá khắt khe với bản thân thế chứ! Phần trả lời câu hỏi bạn giải thích cực kỳ gãy gọn, với lại số liệu nghiên cứu của bạn rất chặt chẽ mà." },
        { participant: 'Chris', text: "Do you really think so? I was convinced everyone was judging my accent.", translation: "Bạn thật sự nghĩ vậy hả? Mình cứ đinh ninh là mọi người đang săm soi giọng phát âm của mình." },
        { participant: 'Mai', text: "Nobody cared about your accent at all! Everyone was focused on your insights. You did great, honestly.", translation: "Chẳng có ai để ý giọng của bạn đâu! Ai cũng chăm chú lắng nghe các góc nhìn sâu sắc của bạn hết. Bạn đã làm rất tốt, thật lòng đó." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Fast Hype and Support Text',
      participants: [
        { name: 'Nam', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NamHype', role: 'Friend' },
        { name: 'Jake', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JakeHype', role: 'Friend' }
      ],
      lines: [
        { participant: 'Nam', text: "Killed it on stage today, bro!", translation: "Hôm nay trên sân khấu biểu diễn đỉnh chóp luôn bạn ơi!" },
        { participant: 'Jake', text: "Felt shaky at first, not gonna lie.", translation: "Lúc đầu run bắn người, thề luôn á." },
        { participant: 'Nam', text: "Looked like a rockstar! Crowd went wild.", translation: "Nhìn như ngôi sao ca nhạc luôn! Khán giả hò reo quá trời." },
        { participant: 'Jake', text: "Thanks for the hype, means a lot!", translation: "Cảm ơn đã tiếp thêm tinh thần nha, quý lắm!" }
      ]
    }
  ],

  'mf-10': [
    {
      type: 'pair',
      school: 'business',
      title: 'Diplomatic Dialogue on International Trade Policy Divergence',
      participants: [
        { name: 'Minister Chen', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MinisterChen', role: 'Trade Minister' },
        { name: 'Delegate Bao', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DelegateBao', role: 'Delegate' }
      ],
      lines: [
        { participant: 'Delegate Bao', text: "Minister Chen, while we concur on tariff harmonization, our delegation holds a divergent perspective regarding agricultural subsidies.", translation: "Thưa Bộ trưởng Chen, mặc dù chúng tôi đồng thuận về việc hài hòa thuế quan, phái đoàn chúng tôi có góc nhìn khác biệt liên quan đến trợ cấp nông nghiệp." },
        { participant: 'Minister Chen', text: "I welcome your candid and civil presentation of that nuance, Delegate Bao. Wherein lies your primary economic divergence?", translation: "Tôi rất hoan nghênh cách trình bày thẳng thắn và lịch thiệp của quý vị, thưa Đại biểu Bảo. Điểm khác biệt kinh tế trọng yếu của quý vị nằm ở đâu?" },
        { participant: 'Delegate Bao', text: "We submit that premature subsidy phase-outs pose acute risks to smallholder farmer livelihoods in transitional developing economies.", translation: "Chúng tôi nhận định rằng việc cắt giảm trợ cấp vội vàng sẽ gây rủi ro nghiêm trọng đến sinh kế của các hộ nông dân nhỏ tại các nền kinh tế đang phát triển." },
        { participant: 'Minister Chen', text: "A legitimate geopolitical concern. Let us draft a transitional grace period into the multilateral treaty annex.", translation: "Một mối quan ngại địa chính trị hoàn toàn chính đáng. Chúng ta hãy cùng đưa điều khoản gia hạn chuyển tiếp vào phụ lục hiệp định đa phương." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Civil Debate on Remote Work vs Office Work at a Cafe',
      participants: [
        { name: 'Thao', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ThaoDebate', role: 'Friend' },
        { name: 'Mark', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MarkDebate', role: 'Friend' }
      ],
      lines: [
        { participant: 'Mark', text: "Honestly Thao, I feel like full remote work will eventually replace offices completely. It saves so much commute time.", translation: "Thú thật với Thảo, mình nghĩ làm việc từ xa hoàn toàn sẽ sớm thay thế văn phòng truyền thống. Tiết kiệm biết bao nhiêu thời gian đi lại." },
        { participant: 'Thao', text: "I see where you're coming from, but I look at it a bit differently. In-person brainstorms spark spontaneous creativity that Zoom calls just can't match.", translation: "Mình hiểu lý lẽ của bạn, nhưng mình có góc nhìn hơi khác một chút. Những buổi cùng ngồi thảo luận trực tiếp tạo ra sự sáng tạo ngẫu hứng mà họp qua Zoom không thể nào có được." },
        { participant: 'Mark', text: "That is a very fair point. Hybrid might truly be the best of both worlds.", translation: "Ý đó cũng rất hợp lý. Có lẽ mô hình kết hợp linh hoạt cả hai mới thực sự là lựa chọn vẹn toàn nhất." },
        { participant: 'Thao', text: "Exactly! Thanks for having an open mind. It's refreshing to debate without anyone taking it personally.", translation: "Chính xác luôn! Cảm ơn bạn vì tinh thần cởi mở. Thích nhất là được tranh luận thẳng thắn mà không ai để bụng chuyện cá nhân." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Friendly Tech Disagreement',
      participants: [
        { name: 'Tri', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TriTech', role: 'Dev' },
        { name: 'Dan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DanTech', role: 'Dev' }
      ],
      lines: [
        { participant: 'Tri', text: "TypeScript beats JavaScript every day of the week.", translation: "TypeScript ăn đứt JavaScript về mọi mặt luôn." },
        { participant: 'Dan', text: "For big apps yes, small scripts JS is faster!", translation: "Dự án lớn thì đúng, còn làm việc nhỏ thì viết JS nhanh hơn!" },
        { participant: 'Tri', text: "Fair take! Agree to disagree on the small stuff.", translation: "Góc nhìn công bằng đó! Đồng ý bất đồng mấy vụ việc nhỏ." },
        { participant: 'Dan', text: "Deal! Coffee time?", translation: "Chốt kèo! Đi làm ly cà phê không?" }
      ]
    }
  ],

  'mf-11': [
    {
      type: 'pair',
      school: 'business',
      title: 'Executive Cross-Cultural Linguistic Debrief',
      participants: [
        { name: 'Director Sterling', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DirectorSterling', role: 'Director' },
        { name: 'Khang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KhangDebrief', role: 'Liaison' }
      ],
      lines: [
        { participant: 'Khang', text: "Director Sterling, I wish to clarify a semantic ambiguity during our bilateral negotiation with the Australian delegation.", translation: "Kính thưa Giám đốc Sterling, tôi xin phép làm rõ một điểm mập mờ ngữ nghĩa trong buổi đàm phán song phương với phái đoàn Úc ạ." },
        { participant: 'Director Sterling', text: "Please elaborate, Khang. Precision in international covenant diction is paramount.", translation: "Bạn vui lòng nói rõ hơn, Khang. Sự chuẩn xác trong từ ngữ giao kết quốc tế là tối quan trọng." },
        { participant: 'Khang', text: "When their counsel employed self-deprecating irony regarding their turnaround timetable, our junior staff initially misconstrued it as a formal delay.", translation: "Khi luật sư của họ sử dụng lối nói mỉa mai tự trào về thời hạn hoàn thành, các nhân viên trẻ của chúng ta lúc đầu hiểu nhầm thành việc trì hoãn chính thức." },
        { participant: 'Director Sterling', text: "An astute observation. We shall conduct a cross-cultural idiomatic briefing for all international delegates.", translation: "Một quan sát rất tinh tế. Chúng ta sẽ tổ chức buổi tập huấn về thành ngữ liên văn hóa cho toàn bộ các đại biểu." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Deciphering British Sarcasm and Gentle Humor',
      participants: [
        { name: 'Tom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TomBritish', role: 'British Expat' },
        { name: 'Linh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LinhHumor', role: 'Friend' }
      ],
      lines: [
        { participant: 'Tom', text: "Oh brilliant! It's pouring rain and our ferry got delayed by another hour. What absolute splendid luck.", translation: "Ồ vi diệu ghê! Trời thì mưa như trút nước còn chuyến phà thì hoãn thêm một tiếng nữa. Đúng là vận may tuyệt vời son sẻ." },
        { participant: 'Linh', text: "Wait, Tom, are you being completely sarcastic right now, or are you actually enjoying the rain?", translation: "Khoan đã Tom, bạn đang nói mỉa mai ngược đời đúng không, hay là bạn đang thích ngắm mưa thật thế?" },
        { participant: 'Tom', text: "Haha! Complete sarcasm, Linh! British people love complaining about misery by pretending it's wonderful.", translation: "Haha! Mỉa mai 100% luôn đó Linh! Dân Anh tụi mình khoái phàn nàn chuyện xui xẻo bằng cách giả vờ khen nó tuyệt vời." },
        { participant: 'Linh', text: "Haha, got it! In Vietnamese, we'd say 'Soi den het cho noi'. Thanks for clarifying the tone!", translation: "Haha mình hiểu rồi! Tiếng Việt tụi mình sẽ bảo 'Số đen hết chỗ nói'. Cảm ơn bạn đã giải thích rõ ngữ điệu nha!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Joke Check Between Friends',
      participants: [
        { name: 'Nam', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NamJoke', role: 'Friend' },
        { name: 'Jack', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JackJoke', role: 'Friend' }
      ],
      lines: [
        { participant: 'Jack', text: "Loving this 40-degree heatwave so much.", translation: "Đang cực kỳ tận hưởng đợt nắng nóng 40 độ này đây." },
        { participant: 'Nam', text: "Sarcasm detector beeped! Melting already?", translation: "Máy dò mỉa mai reo vang rồi nha! Sắp tan chảy chưa?" },
        { participant: 'Jack', text: "Melting into a puddle. Get inside the AC!", translation: "Chảy thành vũng nước luôn rồi. Vào phòng máy lạnh gấp!" },
        { participant: 'Nam', text: "Iced tea's waiting for you inside!", translation: "Trà đá đang chờ sẵn bên trong nè!" }
      ]
    }
  ],

  'mf-12': [
    {
      type: 'pair',
      school: 'business',
      title: 'Diplomatic Declination of Unscheduled Proposal',
      participants: [
        { name: 'Senior Envoy Vance', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=EnvoyVance', role: 'Envoy' },
        { name: 'Undersecretary Mai', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=UndersecretaryMai', role: 'Government Official' }
      ],
      lines: [
        { participant: 'Senior Envoy Vance', text: "Undersecretary Mai, would your ministry entertain an expedited review of the maritime transit amendment this evening?", translation: "Kính thưa Thứ trưởng Mai, liệu bộ của bà có thể xem xét nhanh bản sửa đổi quá cảnh hàng hải ngay trong tối nay không ạ?" },
        { participant: 'Undersecretary Mai', text: "We appreciate your proactive engagement, Senior Envoy. However, our statutory governance guidelines preclude impromptu deliberations without prior cabinet scrutiny.", translation: "Chúng tôi đánh giá cao sự chủ động của ngài, thưa Đặc phái viên. Tuy nhiên, quy chế quản trị bắt buộc không cho phép chúng tôi thảo luận đột xuất khi chưa có sự thẩm định trước của nội các." },
        { participant: 'Senior Envoy Vance', text: "We respect your administrative protocol completely. We shall table the motion for the formal plenary session next week.", translation: "Chúng tôi hoàn toàn tôn trọng quy trình hành chính của quý bộ. Chúng tôi sẽ đưa nội dung này vào phiên họp toàn thể tuần tới." },
        { participant: 'Undersecretary Mai', text: "Thank you for your diplomatic consideration and mutual respect of institutional boundaries.", translation: "Cảm ơn sự thấu hiểu ngoại giao và sự tôn trọng lẫn nhau đối với các nguyên tắc tổ chức." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Politely Declining an Invitation and Setting Boundaries',
      participants: [
        { name: 'Chloe', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ChloeBound', role: 'Friend' },
        { name: 'An', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AnBound', role: 'Friend' }
      ],
      lines: [
        { participant: 'Chloe', text: "Hey An! A group of us are heading to a loud techno club tonight around 11 PM. Do you want to come along?", translation: "An ơi! Nhóm tụi mình định tầm 11 giờ đêm nay đi bar nghe nhạc techno sôi động nè. Bạn đi chung với tụi mình không?" },
        { participant: 'An', text: "Thanks so much for thinking of me, Chloe! But late-night loud clubs really aren't my scene. I need some quiet recharge time tonight.", translation: "Cảm ơn bạn nhiều vì đã rủ mình nha Chloe! Nhưng mấy quán bar ồn ào đêm muộn thực sự không hợp gu của mình. Tối nay mình cần chút không gian yên tĩnh để nạp lại năng lượng." },
        { participant: 'Chloe', text: "I totally respect that! How about we meet up for quiet coffee or breakfast this Sunday instead?", translation: "Mình hoàn toàn tôn trọng điều đó mà! Hay là sáng Chủ nhật này tụi mình hẹn nhau đi cà phê hoặc ăn sáng nhẹ nhàng nhé?" },
        { participant: 'An', text: "Sunday morning sounds wonderful! Let's do that.", translation: "Sáng Chủ nhật thì quá tuyệt luôn! Nhất trí thế nha." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Polite No Text',
      participants: [
        { name: 'Jake', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JakeNo', role: 'Friend' },
        { name: 'Khoa', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KhoaNo', role: 'Friend' }
      ],
      lines: [
        { participant: 'Jake', text: "Late karaoke tonight? Starting at 10.", translation: "Tối nay đi hát karaoke tăng hai không? 10 giờ bắt đầu." },
        { participant: 'Khoa', text: "Gotta pass tonight, early morning tomorrow!", translation: "Tối nay tui xin kiếu nha, mai có việc phải dậy sớm!" },
        { participant: 'Jake', text: "Totally understand. Rest up bro!", translation: "Hiểu mà. Nghỉ ngơi dưỡng sức nhen bạn hiền!" },
        { participant: 'Khoa', text: "Catch you next weekend for sure!", translation: "Chắc chắn cuối tuần sau hội ngộ nha!" }
      ]
    }
  ],

  'mf-13': [
    {
      type: 'pair',
      school: 'business',
      title: 'Global Esports Governance & Streaming Rights Symposium',
      participants: [
        { name: 'Commissioner Zhang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ZhangEsports', role: 'Esports Commissioner' },
        { name: 'Executive Minh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MinhEsports', role: 'Broadcast Director' }
      ],
      lines: [
        { participant: 'Executive Minh', text: "Good morning, Commissioner Zhang. We are proposing a standardized cross-border broadcasting protocol for our upcoming regional championship.", translation: "Kính chào Trưởng ban Zhang. Chúng tôi xin đề xuất quy chuẩn phát sóng xuyên biên giới cho giải vô địch khu vực sắp tới ạ." },
        { participant: 'Commissioner Zhang', text: "Welcome, Minh. How does your digital network ensure broadcast latency parity across multiple time zones?", translation: "Chào Minh. Hệ thống mạng số của bạn làm thế nào để đảm bảo tính đồng bộ về độ trễ phát sóng qua các múi giờ khác nhau?" },
        { participant: 'Executive Minh', text: "We deploy distributed edge server relays coupled with automated Discord community moderation channels.", translation: "Chúng tôi triển khai các máy chủ trung chuyển phân tán tại biên kết hợp cùng hệ thống kiểm duyệt cộng đồng Discord tự động ạ." },
        { participant: 'Commissioner Zhang', text: "Technologically robust. The commission endorses your streaming distribution tender.", translation: "Hạ tầng công nghệ rất vững chắc. Ủy ban chính thức phê duyệt gói thầu phân phối phát sóng của quý đơn vị." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Setting Up a Co-op Gaming Session on Discord',
      participants: [
        { name: 'Phong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PhongGamer', role: 'Gamer' },
        { name: 'Marcus', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MarcusGamer', role: 'Gamer' }
      ],
      lines: [
        { participant: 'Phong', text: "Marcus, are you free tonight to jump into our Discord server and play some Helldivers 2 with the group?", translation: "Marcus ơi, tối nay bạn có rảnh vào server Discord của tụi mình chơi Helldivers 2 với cả nhóm không?" },
        { participant: 'Marcus', text: "Yes! I just updated the game patch. What time are you guys hopping into the voice channel?", translation: "Có chứ! Mình vừa cập nhật bản vá xong. Mấy giờ mấy bạn vào phòng voice thế?" },
        { participant: 'Phong', text: "Around 8:30 PM. We need a fourth player to tackle the higher-difficulty missions.", translation: "Tầm 8h30 tối nha. Tụi mình đang thiếu một người để đi mấy nhiệm vụ độ khó cao nè." },
        { participant: 'Marcus', text: "Count me in! I'll bring the heavy armor and airstrike support.", translation: "Tính mình một chân! Mình sẽ mang giáp hạng nặng với gọi hỗ trợ pháo kích cho." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Fast Discord Voice Call Ping',
      participants: [
        { name: 'Tri', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TriDiscord', role: 'Friend' },
        { name: 'Leo', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LeoDiscord', role: 'Friend' }
      ],
      lines: [
        { participant: 'Tri', text: "Hop in voice! Squad is ready.", translation: "Vào phòng voice liền đi! Đội hình sẵn sàng rồi." },
        { participant: 'Leo', text: "Grabbing my headset. Launching game now.", translation: "Đang lấy tai nghe. Đang bật game lên nè." },
        { participant: 'Tri', text: "Invited you to the lobby.", translation: "Đã gửi lời mời vào sảnh chờ rồi đó." },
        { participant: 'Leo', text: "Joined! Let's win this match.", translation: "Vào rồi nè! Trận này quyết thắng nha." }
      ]
    }
  ],

  'mf-14': [
    {
      type: 'pair',
      school: 'business',
      title: 'International Philosophical Forum on Technology and Ethics',
      participants: [
        { name: 'Professor Vance', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ProfVance', role: 'Philosopher' },
        { name: 'Scholar Linh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ScholarLinh', role: 'Ethics Fellow' }
      ],
      lines: [
        { participant: 'Scholar Linh', text: "Professor Vance, our plenary inquiry centers on whether artificial intelligence autonomy reshapes classical definitions of moral agency.", translation: "Kính thưa Giáo sư Vance, chủ đề hội thảo của chúng ta tập trung vào việc liệu quyền tự chủ của trí tuệ nhân tạo có định hình lại các định nghĩa cổ điển về tư cách đạo đức không ạ." },
        { participant: 'Professor Vance', text: "A timeless existential inquiry, Linh. Technology amplifies human intent, but human responsibility remains fundamentally unalterable.", translation: "Một câu hỏi hiện sinh mang tính thời đại, Linh à. Công nghệ khuếch đại ý chí của con người, nhưng trách nhiệm của con người về bản chất vẫn không thể chuyển giao." },
        { participant: 'Scholar Linh', text: "Indeed, sir. Eastern philosophy consistently emphasizes harmony between societal technological stewardship and inner moral cultivate.", translation: "Dạ đúng như vậy thưa thầy. Triết học phương Đông luôn nhấn mạnh sự hài hòa giữa việc quản trị công nghệ xã hội và sự tu dưỡng đạo đức nội tâm." },
        { participant: 'Professor Vance', text: "A profound convergence of traditions. We shall publish this dialogue in our global ethics journal.", translation: "Một sự giao thoa tư tưởng vô cùng sâu sắc. Chúng ta sẽ xuất bản cuộc đối thoại này trên tạp chí đạo đức toàn cầu." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Late Night Balcony Chat About Life and Aspirations',
      participants: [
        { name: 'Duy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DuyNight', role: 'Friend' },
        { name: 'Liam', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LiamNight', role: 'Friend' }
      ],
      lines: [
        { participant: 'Duy', text: "Liam, looking out over the city lights tonight makes you think about where we'll both be in ten years.", translation: "Liam ơi, ngắm ánh đèn thành phố đêm nay làm mình tự hỏi không biết mười năm nữa hai đứa mình sẽ ở đâu nhỉ." },
        { participant: 'Liam', text: "I was just thinking the exact same thing. When I first moved abroad, I was obsessed with achieving fast milestones, but now I value inner peace and genuine friendships so much more.", translation: "Mình cũng vừa nghĩ y chang như thế luôn. Hồi mới ra nước ngoài, mình lúc nào cũng ám ảnh việc phải thành công thật nhanh, nhưng giờ mình trân trọng sự bình yên trong tâm hồn và những tình bạn chân thành hơn nhiều." },
        { participant: 'Duy', text: "That resonates with me deeply. Chasing passion without losing sight of human connections is what truly gives life meaning.", translation: "Những lời đó chạm đúng vào suy nghĩ của mình. Theo đuổi đam mê mà không đánh mất đi sự gắn kết giữa người với người mới thực sự tạo nên ý nghĩa cuộc sống." },
        { participant: 'Liam', text: "Cheers to that, Duy. Conversations like this are rare and precious.", translation: "Cụng ly vì điều đó nha Duy. Những cuộc trò chuyện sâu lắng như thế này thực sự rất hiếm và đáng quý." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Late Night Balcony Breeze Chat',
      participants: [
        { name: 'Son', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SonLate', role: 'Friend' },
        { name: 'Sam', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SamLate', role: 'Friend' }
      ],
      lines: [
        { participant: 'Son', text: "Stars are out tonight. So peaceful.", translation: "Đêm nay trời đầy sao luôn. Yên bình thật sự." },
        { participant: 'Sam', text: "Best view in the whole building.", translation: "Góc ngắm cảnh đỉnh nhất cả tòa nhà này." },
        { participant: 'Son', text: "Grateful for this friendship, bro.", translation: "Rất trân trọng tình bạn này nha ông bạn." },
        { participant: 'Sam', text: "Right back at you! Always got your back.", translation: "Tôi cũng thế! Lúc nào cũng sẵn sàng tương trợ." }
      ]
    }
  ],

  'mf-15': [
    {
      type: 'pair',
      school: 'business',
      title: 'Consular Multilateral Cultural Festival Opening',
      participants: [
        { name: 'Consul General Dubois', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ConsulDubois', role: 'Consul General' },
        { name: 'Director Ha', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DirectorHaFestival', role: 'Festival Director' }
      ],
      lines: [
        { participant: 'Director Ha', text: "Good evening, Consul General Dubois. We are honored to inaugurate the International Spring Festival celebrating cross-cultural heritage.", translation: "Kính chào Tổng Lãnh sự Dubois. Chúng tôi rất vinh dự được khai mạc Lễ hội Mùa xuân Quốc tế tôn vinh các di sản văn hóa đa quốc gia ạ." },
        { participant: 'Consul General Dubois', text: "A splendid cultural assembly, Director Ha. Traditional festivals remind us of our collective shared humanity.", translation: "Một cuộc hội ngộ văn hóa thật lộng lẫy, thưa Giám đốc Hà. Các lễ hội truyền thống nhắc nhở chúng ta về những giá trị nhân văn chung của nhân loại." },
        { participant: 'Director Ha', text: "Indeed, Excellency. Tonight's pavilion features lantern arts from Hoi An alongside culinary crafts from fifteen nations.", translation: "Dạ đúng như vậy thưa ngài. Gian trưng bày tối nay giới thiệu nghệ thuật đèn lồng Hội An song hành cùng tinh hoa ẩm thực từ 15 quốc gia." },
        { participant: 'Consul General Dubois', text: "Magnificent craftsmanship. Our diplomatic mission is proud to be a premier institutional patron.", translation: "Nghệ thuật chế tác tuyệt mỹ. Phái đoàn ngoại giao chúng tôi rất tự hào được làm nhà bảo trợ chính thức." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Celebrating Mid-Autumn Festival with Lanterns and Mooncakes',
      participants: [
        { name: 'Ngan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NganFestival', role: 'Local Friend' },
        { name: 'Emma', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=EmmaFestival', role: 'Expat Friend' }
      ],
      lines: [
        { participant: 'Ngan', text: "Emma, tonight is the Mid-Autumn Festival! Look at all the glowing carp lanterns along the pedestrian street.", translation: "Emma ơi, tối nay là Tết Trung thu đó! Nhìn mấy chiếc đèn lồng cá chép phát sáng rực rỡ dọc phố đi bộ kìa." },
        { participant: 'Emma', text: "It's like a magical fairytale! What are the traditional cakes everyone is sharing with hot tea?", translation: "Đẹp như trong truyện cổ tích luôn! Còn mấy cái bánh truyền thống mà mọi người đang ăn cùng trà nóng là bánh gì thế?" },
        { participant: 'Ngan', text: "Those are mooncakes! This one has lotus seed paste and a salted egg yolk inside representing the full moon. Try a slice!", translation: "Đó là bánh trung thu đó! Chiếc này có nhân hạt sen với lòng đỏ trứng muối tượng trưng cho trăng tròn. Bạn thử một miếng đi!" },
        { participant: 'Emma', text: "Mmm, the sweet and savory combination with jasmine tea is absolutely delicious! Thank you for showing me this tradition.", translation: "Ngon quá, vị mặn ngọt hòa quyện uống với trà hoa lài hợp dã man! Cảm ơn bạn đã dắt mình đi trải nghiệm phong tục này nha." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Fast Festival Gathering Ping',
      participants: [
        { name: 'Tuan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TuanFest', role: 'Friend' },
        { name: 'Jack', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JackFest', role: 'Friend' }
      ],
      lines: [
        { participant: 'Tuan', text: "Dragon dance starting in 5 mins!", translation: "Múa lân 5 phút nữa bắt đầu kìa!" },
        { participant: 'Jack', text: "At the square? Pushing through the crowd!", translation: "Ở quảng trường hả? Đang lách qua đám đông nè!" },
        { participant: 'Tuan', text: "Saved you a front-row spot. Hurry!", translation: "Giữ cho một chỗ hàng đầu rồi. Nhanh lên!" },
        { participant: 'Jack', text: "Here! Those drums are loud!", translation: "Tới rồi nè! Tiếng trống gõ vang trời luôn!" }
      ]
    }
  ],

  'mf-16': [
    {
      type: 'pair',
      school: 'business',
      title: 'International Marathon Committee Logistics Briefing',
      participants: [
        { name: 'Race Director Henderson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HendersonMarathon', role: 'Race Director' },
        { name: 'Coordinator Duc', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DucMarathon', role: 'Course Coordinator' }
      ],
      lines: [
        { participant: 'Coordinator Duc', text: "Good morning, Race Director Henderson. Our international marathon course preparations in Da Nang are finalized.", translation: "Kính chào Giám đốc Đường đua Henderson. Công tác chuẩn bị cung đường chạy marathon quốc tế tại Đà Nẵng đã hoàn tất ạ." },
        { participant: 'Race Director Henderson', text: "Welcome, Duc. Have all medical stations and electrolyte hydration points been strategically positioned along the coastal route?", translation: "Chào Duc. Toàn bộ các trạm y tế và điểm tiếp nước điện giải đã được bố trí chiến lược dọc tuyến đường ven biển chưa?" },
        { participant: 'Coordinator Duc', text: "Yes, sir. Certified emergency medical personnel are stationed every two kilometers, backed by automated timing transponders.", translation: "Dạ rồi thưa Giám đốc. Đội ngũ y tế cấp cứu được bố trí đều đặn mỗi hai cây số, cùng hệ thống chip bấm giờ tự động." },
        { participant: 'Race Director Henderson', text: "Exemplary operational execution. We are set to host four thousand overseas athletes safely.", translation: "Vận hành rất mẫu mực. Chúng ta đã sẵn sàng đón tiếp bốn nghìn vận động viên quốc tế thi đấu an toàn." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Morning Jog and Workout at the Coastal Boardwalk',
      participants: [
        { name: 'Phuong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PhuongJog', role: 'Runner' },
        { name: 'Sarah', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SarahJog', role: 'Runner' }
      ],
      lines: [
        { participant: 'Phuong', text: "Sarah, what pace are you aiming for our 5k morning run along the beach boardwalk?", translation: "Sarah ơi, sáng nay chạy 5 cây số dọc bờ biển thì bạn tính chạy theo tốc độ bao nhiêu thế?" },
        { participant: 'Sarah', text: "Let's keep an easy, conversational pace, around six minutes per kilometer. The sunrise breeze is so refreshing!", translation: "Tụi mình chạy thong thả vừa chạy vừa nói chuyện được nha, tầm 6 phút một cây số. Gió biển buổi sáng sớm mát rượi luôn!" },
        { participant: 'Phuong', text: "Sounds perfect. Afterward, do you want to hit the outdoor pull-up bars for some calisthenics?", translation: "Tốc độ đó chuẩn luôn. Chạy xong bạn có muốn ghé khu xà đơn ngoài trời tập thêm vài bài thể hình không?" },
        { participant: 'Sarah', text: "Definitely! Then fresh coconut water by the beach. Let's start stretching!", translation: "Chắc chắn rồi! Xong xuôi làm trái dừa tươi ven biển nữa là hết bài. Khởi động giãn cơ thôi bạn!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Fast Gym Meetup Text',
      participants: [
        { name: 'Dat', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DatGym', role: 'Friend' },
        { name: 'Marcus', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MarcusGym', role: 'Friend' }
      ],
      lines: [
        { participant: 'Dat', text: "Leg day today? Gym in 20?", translation: "Hôm nay tập chân đúng không? 20 phút nữa ở phòng gym nha?" },
        { participant: 'Marcus', text: "Spotting you on squats! On my way.", translation: "Để tui đỡ tạ gánh đùi cho! Đang phóng xe qua nè." },
        { participant: 'Dat', text: "Bring lifting straps!", translation: "Nhớ mang theo dây đai quấn cổ tay nhen!" },
        { participant: 'Marcus', text: "Got 'em in my bag. Let's lift heavy!", translation: "Có sẵn trong túi rồi. Lên tạ nặng thôi!" }
      ]
    }
  ],

  'mf-17': [
    {
      type: 'pair',
      school: 'business',
      title: 'Multilingual Pedagogy & Language Acquisition Conference',
      participants: [
        { name: 'Dean Dr. Bennett', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DrBennett', role: 'Dean' },
        { name: 'Lecturer Ha', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LecturerHa', role: 'Linguistics Lecturer' }
      ],
      lines: [
        { participant: 'Lecturer Ha', text: "Good morning, Dean Bennett. Our faculty research validates the cognitive efficacy of tandem bilingual immersion partnerships.", translation: "Kính chào Trưởng khoa Bennett. Nghiên cứu của khoa chúng tôi đã kiểm chứng tính hiệu quả nhận thức của mô hình học tập song ngữ ghép cặp tương hỗ ạ." },
        { participant: 'Dean Dr. Bennett', text: "Welcome, Ha. How do your empirical findings measure communicative fluency progression?", translation: "Chào cô Hà. Các kết quả thực nghiệm đo lường sự tiến bộ về độ trôi chảy trong giao tiếp như thế nào?" },
        { participant: 'Lecturer Ha', text: "Participants demonstrated a forty percent increase in spontaneous lexical retrieval and cross-cultural pragmatics proficiency.", translation: "Người tham gia cho thấy sự cải thiện 40% về khả năng phản xạ từ vựng tự nhiên và năng lực vận dụng ngữ dụng liên văn hóa." },
        { participant: 'Dean Dr. Bennett', text: "Impeccable research rigour. We shall institutionalize this tandem language program for all incoming exchange students.", translation: "Nghiên cứu rất chặt chẽ và chuẩn mực. Chúng ta sẽ đưa chương trình học song ngữ này vào áp dụng chính thức cho toàn bộ sinh viên trao đổi." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Weekly 1-on-1 Vietnamese-English Language Exchange',
      participants: [
        { name: 'Thanh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ThanhLang', role: 'Native Speaker' },
        { name: 'Oliver', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=OliverLang', role: 'Learner' }
      ],
      lines: [
        { participant: 'Thanh', text: "Oliver, let's split our session today: 30 minutes practicing your Vietnamese tones, and 30 minutes on my English idioms.", translation: "Oliver ơi, hôm nay tụi mình chia đôi thời gian nhé: 30 phút đầu luyện thanh điệu tiếng Việt cho bạn, 30 phút sau luyện thành ngữ tiếng Anh cho mình." },
        { participant: 'Oliver', text: "Sounds perfect! I still struggle with the difference between 'dấu hỏi' and 'dấu ngã'. They sound so similar to my ears!", translation: "Nghe chuẩn quá! Mình vẫn hay bị lẫn giữa dấu hỏi với dấu ngã. Lỗ tai mình nghe hai dấu đó cứ thấy na ná nhau!" },
        { participant: 'Thanh', text: "Don't worry, it's very common for English speakers! 'Dấu hỏi' drops down then goes slightly up, while 'dấu ngã' has a sharp glottal break in the middle. Repeat after me: 'hỏi' vs 'ngã'.", translation: "Đừng lo, người nói tiếng Anh ai mới học cũng bị vậy hết á! 'Dấu hỏi' trầm xuống rồi hơi hất nhẹ lên, còn 'dấu ngã' thì bị ngắt một nhịp ở cổ họng. Đọc theo mình nè: 'hỏi' khác với 'ngã'." },
        { participant: 'Oliver', text: "Ah, I hear the break now! That physical tip makes so much more sense than just reading a textbook.", translation: "À, mình nghe ra chỗ ngắt giọng rồi! Mẹo thực tế này dễ hiểu hơn nhiều so với việc chỉ đọc sách giáo khoa." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Fast Daily Vocab Quiz Text',
      participants: [
        { name: 'Nam', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NamVocab', role: 'Friend' },
        { name: 'Sam', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SamVocab', role: 'Friend' }
      ],
      lines: [
        { participant: 'Nam', text: "Quick test! What does 'Cam on' mean?", translation: "Kiểm tra nhanh! 'Cảm ơn' nghĩa là gì nào?" },
        { participant: 'Sam', text: "Thank you! Too easy, give me a harder one.", translation: "Cảm ơn! Dễ ợt, đố từ nào khó hơn đi." },
        { participant: 'Nam', text: "How about 'Khong co chi'?", translation: "Thế còn 'Không có chi'?" },
        { participant: 'Sam', text: "You're welcome! Nailed it, right?", translation: "Không có gì / You're welcome! Đúng phóc rồi chứ gì?" }
      ]
    }
  ],

  'mf-18': [
    {
      type: 'pair',
      school: 'business',
      title: 'Urban Planning & Eco-Sanctuary Development Forum',
      participants: [
        { name: 'Urban Director Campbell', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CampbellUrban', role: 'Urban Director' },
        { name: 'Architect Kien', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KienArchitect', role: 'Landscape Architect' }
      ],
      lines: [
        { participant: 'Architect Kien', text: "Good morning, Director Campbell. Our master plan harmonizes metropolitan density with restorative countryside eco-corridors.", translation: "Kính chào Giám đốc Campbell. Đồ án quy hoạch tổng thể của chúng tôi dung hòa giữa mật độ đô thị với các hành lang sinh thái đồng quê nghỉ dưỡng ạ." },
        { participant: 'Urban Director Campbell', text: "Welcome, Kien. How do your residential clusters mitigate urban sensory overload and air quality degradation?", translation: "Chào Kien. Các cụm dân cư của bạn làm thế nào để giảm thiểu tình trạng quá tải giác quan đô thị và suy giảm chất lượng không khí?" },
        { participant: 'Architect Kien', text: "We integrate agro-forestry buffers, electric micro-mobility networks, and biophilic architectural standards.", translation: "Chúng tôi tích hợp các vành đai nông lâm kết hợp, mạng lưới giao thông vi mô xe điện và các tiêu chuẩn kiến trúc thuận tự nhiên ạ." },
        { participant: 'Urban Director Campbell', text: "A vision of sustainable equilibrium. We will recommend this blueprint to the municipal developmental council.", translation: "Một tầm nhìn về sự cân bằng bền vững. Chúng tôi sẽ đề xuất bản thiết kế này lên hội đồng phát triển đô thị thành phố." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Escaping the City for a Weekend Farm Stay',
      participants: [
        { name: 'Huong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HuongFarm', role: 'City Resident' },
        { name: 'Chloe', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ChloeFarm', role: 'City Resident' }
      ],
      lines: [
        { participant: 'Huong', text: "Chloe, Saigon traffic and noise have been driving me crazy this month. Want to escape to a farmstay in Da Lat this weekend?", translation: "Chloe ơi, tháng này xe cộ với tiếng còi xe ở Sài Gòn làm mình căng thẳng quá. Cuối tuần này bạn có muốn trốn lên một nông trại ở Đà Lạt không?" },
        { participant: 'Chloe', text: "Oh, that sounds like pure bliss! Pine trees, crisp mountain air, and waking up to birds instead of motorbike honks.", translation: "Trời ơi, nghe như thiên đường vậy! Có rừng thông, không khí núi trong lành, sáng thức dậy nghe tiếng chim hót thay vì tiếng còi xe máy." },
        { participant: 'Huong', text: "I found this rustic wooden homestay surrounded by organic strawberry fields and a babbling stream.", translation: "Mình tìm được một căn homestay gỗ mộc mạc bao quanh bởi vườn dâu tây hữu cơ với một con suối róc rách nè." },
        { participant: 'Chloe', text: "Book it immediately! Let's pack warm sweaters and disconnect our work Slack apps for 48 hours.", translation: "Đặt phòng liền đi bạn! Tụi mình xếp áo len ấm rồi tắt thông báo Slack công việc trong vòng 48 tiếng nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Weekend Getaway Text',
      participants: [
        { name: 'Vy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=VyEscape', role: 'Friend' },
        { name: 'Dan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DanEscape', role: 'Friend' }
      ],
      lines: [
        { participant: 'Vy', text: "Camping trip this Saturday?", translation: "Thứ Bảy này đi cắm trại hông?" },
        { participant: 'Dan', text: "Tent and campfire? Sign me up!", translation: "Ngủ lều với đốt lửa trại hả? Đăng ký một vé liền!" },
        { participant: 'Vy', text: "By the lake, grilling sausages.", translation: "Cạnh bờ hồ, nướng xúc xích ăn." },
        { participant: 'Dan', text: "Grabbing marshmallows right now!", translation: "Đang đi mua kẹo xốp nướng liền nè!" }
      ]
    }
  ],

  'mf-19': [
    {
      type: 'pair',
      school: 'business',
      title: 'Global Alumni Strategic Outreach & Endowment Meeting',
      participants: [
        { name: 'President Dr. Sterling', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SterlingAlumni', role: 'University President' },
        { name: 'Ambassador Bao', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BaoAlumni', role: 'Global Alumni Chair' }
      ],
      lines: [
        { participant: 'Ambassador Bao', text: "Good afternoon, President Sterling. Our international alumni network now spans chapters across forty-two countries, maintaining robust cross-border mentorship ties.", translation: "Kính chào Hiệu trưởng Sterling. Mạng lưới cựu sinh viên quốc tế của chúng ta hiện đã có chi hội tại 42 quốc gia, duy trì mối liên kết cố vấn xuyên biên giới rất chặt chẽ." },
        { participant: 'President Dr. Sterling', text: "Welcome, Ambassador Bao. Sustaining meaningful lifelong fellowship across continents is the bedrock of our global reputation.", translation: "Chào Đại sứ Bảo. Việc duy trì tình bạn đồng môn bền chặt suốt đời qua các châu lục chính là nền tảng cho danh tiếng toàn cầu của trường ta." },
        { participant: 'Ambassador Bao', text: "We have established an endowment fund to support incoming international exchange students facing financial hardships.", translation: "Chúng tôi đã thành lập một quỹ tài trợ để hỗ trợ các bạn sinh viên trao đổi quốc tế có hoàn cảnh khó khăn." },
        { participant: 'President Dr. Sterling', text: "A noble testament to enduring institutional loyalty. We express our deepest gratitude to our global alumni community.", translation: "Một minh chứng cao đẹp cho sự gắn bó thủy chung với mái trường. Chúng tôi xin gửi lời tri ân sâu sắc nhất tới cộng đồng cựu sinh viên toàn cầu." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Catching Up with an Overseas Friend over FaceTime',
      participants: [
        { name: 'Minh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MinhFaceTime', role: 'Friend' },
        { name: 'Alex', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AlexFaceTime', role: 'Friend' }
      ],
      lines: [
        { participant: 'Minh', text: "Alex! It's so amazing to see your face! How has life been in London since you finished your exchange semester here?", translation: "Alex ơi! Nhìn thấy mặt bạn vui quá đi mất! Cuộc sống ở London thế nào rồi từ sau khi kết thúc kỳ học trao đổi bên này?" },
        { participant: 'Alex', text: "Minh! I miss Vietnam every single day! I finally found an authentic Vietnamese noodle shop in Soho, but it's not quite the same as sitting on stools with you in Hanoi.", translation: "Minh ơi! Ngày nào mình cũng nhớ Việt Nam hết á! Cuối cùng mình cũng tìm được một quán bún chuẩn vị ở Soho, nhưng mà không thể nào bằng cảm giác hai đứa ngồi ghế nhựa ở Hà Nội được." },
        { participant: 'Minh', text: "Haha, nothing beats street food in Hanoi! Are you still planning to come back for a visit next winter?", translation: "Haha, không gì sánh bằng đồ ăn vỉa hè Hà Nội đâu! Mùa đông năm tới bạn vẫn lên kế hoạch quay lại chơi chứ?" },
        { participant: 'Alex', text: "100%! My tickets are already bookmarked. Distance really can't fade a true friendship.", translation: "100% luôn! Mình đã lưu sẵn vé máy bay rồi. Khoảng cách địa lý chắc chắn không thể làm phai mờ tình bạn chân thành đâu." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Fast Long-Distance Postcard Ping',
      participants: [
        { name: 'An', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AnPostcard', role: 'Friend' },
        { name: 'Jake', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JakePostcard', role: 'Friend' }
      ],
      lines: [
        { participant: 'An', text: "Got your postcard from Berlin in the mail!", translation: "Nhận được bưu thiếp bạn gửi từ Berlin qua đường bưu điện rồi nè!" },
        { participant: 'Jake', text: "It finally arrived? Took 3 weeks!", translation: "Tới nơi rồi hả? Đi mất tận 3 tuần luôn á!" },
        { participant: 'An', text: "Pinned on my fridge. Miss you bro!", translation: "Ghim ngay trên cửa tủ lạnh rồi. Nhớ ông bạn ghê!" },
        { participant: 'Jake', text: "Miss you too! FaceTime this Sunday?", translation: "Tôi cũng nhớ bạn nhiều! Chủ nhật này gọi FaceTime nha?" }
      ]
    }
  ],

  'mf-20': [
    {
      type: 'pair',
      school: 'business',
      title: 'International Creative Residency & Bilateral Exhibition Agreement',
      participants: [
        { name: 'Biennale Curator Sterling', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CuratorSterlingArt', role: 'Biennale Curator' },
        { name: 'Artist Huong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ArtistHuong', role: 'Visual Artist' }
      ],
      lines: [
        { participant: 'Artist Huong', text: "Good morning, Curator Sterling. I present our proposed collaborative installation pairing Vietnamese lacquer techniques with digital neon projections.", translation: "Kính chào Giám tuyển Sterling. Tôi xin trình bày tác phẩm sắp đặt kết hợp giữa nghệ thuật sơn mài truyền thống Việt Nam với hiệu ứng chiếu sáng neon kỹ thuật số ạ." },
        { participant: 'Biennale Curator Sterling', text: "Welcome, Huong. The visual dialogue between traditional eggshell lacquer and futuristic luminescence is profoundly striking.", translation: "Chào nghệ sĩ Hương. Sự đối thoại thị giác giữa kỹ thuật cẩn vỏ trứng sơn mài truyền thống với ánh sáng phát quang tương lai vô cùng ấn tượng." },
        { participant: 'Artist Huong', text: "Thank you, sir. Our collaborative cohort includes Tokyo-based generative projection designers and traditional artisans from Ha Thai village.", translation: "Cảm ơn ngài. Nhóm hợp tác của chúng tôi gồm các nhà thiết kế tạo hình từ Tokyo cùng các nghệ nhân truyền thống từ làng nghề Hạ Thái." },
        { participant: 'Biennale Curator Sterling', text: "A masterclass in cross-cultural synthesis. We will feature your collaborative pavilion as the centerpiece of our autumn Biennale.", translation: "Một tác phẩm đỉnh cao của sự hòa hợp đa văn hóa. Chúng tôi sẽ chọn gian trưng bày này làm điểm nhấn trung tâm của triển lãm Biennale mùa thu." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Planning an Art Collaboration Between Photographer and Illustrator',
      participants: [
        { name: 'Huong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HuongCollab', role: 'Photographer' },
        { name: 'Kento', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KentoCollab', role: 'Illustrator' }
      ],
      lines: [
        { participant: 'Huong', text: "Hey Kento! I just saw your digital artwork on Instagram and was completely blown away by your usage of vivid neon colors.", translation: "Chào Kento! Mình vừa xem tranh vẽ kỹ thuật số của bạn trên Instagram và bị choáng ngợp hoàn toàn trước cách phối tông màu neon rực rỡ của bạn luôn." },
        { participant: 'Kento', text: "Wow, Huong! Thank you so much! Coming from an amazing photographer like you, that means the world to me.", translation: "Woah Hương ơi! Cảm ơn bạn nhiều lắm! Nhận lời khen từ một nhiếp ảnh gia tài năng như bạn đúng là niềm vinh hạnh lớn của mình." },
        { participant: 'Huong', text: "Would you be open to doing a collaboration where we combine my night photos of Saigon with your futuristic anime illustrations?", translation: "Bạn có sẵn lòng hợp tác một dự án nơi tụi mình lồng ghép ảnh chụp đêm Sài Gòn của mình với nét vẽ anime tương lai của bạn không?" },
        { participant: 'Kento', text: "OMG, absolutely! That combination is going to turn out epic. Let's create a shared Google Drive and start dropping assets!", translation: "Trời ơi, chắc chắn rồi! Sự kết hợp này hứa hẹn sẽ cực kỳ bùng nổ đây. Tụi mình tạo Google Drive chung rồi bắt đầu tải tư liệu lên nhé!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Fast Art Collab File Drop',
      participants: [
        { name: 'Son', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SonArt', role: 'Friend' },
        { name: 'Leo', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LeoArt', role: 'Friend' }
      ],
      lines: [
        { participant: 'Son', text: "Sent the beat draft on Google Drive!", translation: "Gửi bản nháp beat nhạc qua Google Drive rồi nha!" },
        { participant: 'Leo', text: "Listening now... Bassline is disgusting! In a good way.", translation: "Đang nghe nè... Đoạn bass đỉnh dã man! Hay xỉu luôn." },
        { participant: 'Son', text: "Drop your guitar solo on track 3?", translation: "Thu đoạn solo guitar vào track 3 giùm tui nha?" },
        { participant: 'Leo', text: "Plugging in my amp right now!", translation: "Đang cắm dây đàn vào âm ly liền đây!" }
      ]
    }
  ]
};
