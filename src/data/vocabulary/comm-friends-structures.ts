// Distinct 3-tier Sentence Structures for Lessons mf-01 to mf-20 (Making Friends Abroad)
// Guarantees authentic diplomatic, casual, and super-casual sentence variations.

import { Structure } from './types';

export const FRIENDS_STRUCTURES: Record<string, Structure[]> = {
  'mf-01': [
    {
      phrase: "Hey there! I couldn't help but notice...",
      meaning: "Một cách mở lời lịch thiệp và vô cùng tự nhiên dựa trên quan sát xung quanh.",
      vietnamese: "Chào bạn! Mình thấy bạn đang...",
      business: {
        phrase: "Pardon the intrusion, but I could not help observing your scholarly monograph on...",
        example: "Pardon the intrusion, but I could not help observing your scholarly monograph on Southeast Asian trade.",
        translation: "Xin thứ lỗi vì đã làm phiền, nhưng tôi không khỏi chú ý đến chuyên khảo học thuật sâu sắc của quý vị về thương mại Đông Nam Á."
      },
      casualStyle: {
        phrase: "Hey there! I couldn't help but notice you're playing Catan, love that game!",
        example: "Hey there! I couldn't help but notice you're playing Catan, love that game!",
        translation: "Chào bạn! Mình thấy bạn đang chơi Catan nè, mình mê trò đó lắm!"
      },
      superCasual: {
        phrase: "Cool game! Mind if I watch?",
        example: "Cool game! Mind if I watch you guys play?",
        translation: "Trò này hay phết! Cho tui đứng xem ké được hông?"
      }
    },
    {
      phrase: "By the way, I'm... What brings you here?",
      meaning: "Giới thiệu tên nhanh gọn và hỏi thăm lý do họ có mặt tại địa điểm/sự kiện.",
      vietnamese: "Nhân tiện thì mình là... Điều gì đưa bạn đến đây thế?",
      business: {
        phrase: "Allow me to introduce myself; what strategic objective brings your delegation to this summit?",
        example: "Allow me to introduce myself; what strategic objective brings your delegation to this multilateral summit?",
        translation: "Cho phép tôi được tự giới thiệu; không biết mục tiêu chiến lược nào đã đưa phái đoàn của quý vị tới hội nghị thượng đỉnh đa phương này ạ?"
      },
      casualStyle: {
        phrase: "I'm Nam by the way. What brings you to Da Nang?",
        example: "I'm Nam by the way. What brings you to Da Nang? Traveling or working?",
        translation: "Nhân tiện mình là Nam nè. Điều gì đưa bạn đến Đà Nẵng thế? Đi du lịch hay làm việc vậy?"
      },
      superCasual: {
        phrase: "I'm Nam! Traveling or staying local?",
        example: "I'm Nam! Traveling or staying local for a while?",
        translation: "Tui là Nam nè! Đang đi phượt hay ở đây lâu dài?"
      }
    }
  ],

  'mf-02': [
    {
      phrase: "What kind of hobbies are you passionate about?",
      meaning: "Hỏi thăm về sở thích và đam mê cá nhân.",
      vietnamese: "Bạn đam mê những sở thích nào?",
      business: {
        phrase: "What intellectual pursuits or cultural disciplines do you find enriching outside executive duties?",
        example: "What intellectual pursuits or cultural disciplines do you find enriching outside executive duties?",
        translation: "Những thú vui trí tuệ hoặc lĩnh vực văn hóa nào mang lại cho quý vị sự phong phú ngoài nhiệm vụ điều hành?"
      },
      casualStyle: {
        phrase: "What do you like doing in your free time when you're not working?",
        example: "What do you like doing in your free time when you're not working or traveling?",
        translation: "Lúc rảnh không phải đi làm hay đi du lịch thì bạn thích làm gì nhất?"
      },
      superCasual: {
        phrase: "What you into? Gaming, sports, music?",
        example: "What you into? Gaming, sports, music?",
        translation: "Hay mê món gì? Game, thể thao hay nghe nhạc?"
      }
    }
  ],

  'mf-03': [
    {
      phrase: "Have you tried traditional street food here?",
      meaning: "Hỏi thăm trải nghiệm ẩm thực đường phố bản địa.",
      vietnamese: "Bạn đã thử đồ ăn đường phố truyền thống ở đây chưa?",
      business: {
        phrase: "Have you had the opportunity to experience our indigenous gastronomic traditions?",
        example: "Have you had the opportunity to experience our indigenous gastronomic traditions in Hanoi?",
        translation: "Quý vị đã có cơ hội trải nghiệm tinh hoa ẩm thực truyền thống bản địa tại Hà Nội chưa ạ?"
      },
      casualStyle: {
        phrase: "Have you tried authentic street food at a roadside stall yet?",
        example: "Have you tried authentic street food at a roadside stall yet? You have to try Banh Mi!",
        translation: "Bạn đã thử ăn món ăn đường phố đúng điệu ở quán vỉa hè chưa? Nhất định phải thử bánh mì nhé!"
      },
      superCasual: {
        phrase: "Tried street food yet? Banh mi is fire!",
        example: "Tried street food yet? Banh mi is fire!",
        translation: "Ăn đồ vỉa hè chưa? Bánh mì ngon bá cháy luôn!"
      }
    }
  ],

  'mf-04': [
    {
      phrase: "That travel destination sounds breathtaking.",
      meaning: "Khen ngợi một điểm đến du lịch tuyệt đẹp.",
      vietnamese: "Điểm đến du lịch đó nghe thật ngoạn mục.",
      business: {
        phrase: "That geopolitical province is renowned for its sublime topographical majesty.",
        example: "That geopolitical province is renowned for its sublime topographical majesty and biodiversity.",
        translation: "Địa phương đó nổi tiếng với vẻ đẹp địa hình kỳ vĩ và sự đa dạng sinh học trác tuyệt."
      },
      casualStyle: {
        phrase: "That motorbike loop looks absolutely stunning in your photos!",
        example: "That motorbike loop looks absolutely stunning in your photos, I want to go there!",
        translation: "Cung đường phượt xe máy đó trong ảnh của bạn nhìn đẹp mê hồn luôn, mình muốn đi quá!"
      },
      superCasual: {
        phrase: "That spot looks insane! Pure magic.",
        example: "That spot looks insane! Pure magic.",
        translation: "Chỗ đó nhìn ảo diệu dã man! Đẹp như tranh vẽ."
      }
    }
  ],

  'mf-05': [
    {
      phrase: "How would you express that naturally in local slang?",
      meaning: "Hỏi cách diễn đạt tự nhiên theo ngôn ngữ đời sống bản xứ.",
      vietnamese: "Người bản xứ diễn đạt điều đó bằng tiếng lóng như thế nào?",
      business: {
        phrase: "How is that semantic concept articulated within contemporary vernacular parlance?",
        example: "How is that semantic concept articulated within contemporary vernacular parlance?",
        translation: "Khái niệm ngữ nghĩa đó được diễn đạt như thế nào trong khẩu ngữ bản xứ đương đại?"
      },
      casualStyle: {
        phrase: "What's the everyday phrase locals use when they want to say that?",
        example: "What's the everyday phrase locals use when they want to say something is super cool?",
        translation: "Người địa phương hay dùng cụm từ đời thường nào khi muốn khen cái gì đó quá tuyệt?"
      },
      superCasual: {
        phrase: "What's the slang for that? Teach me!",
        example: "What's the slang for that? Teach me!",
        translation: "Từ lóng cho cái đó là gì? Chỉ tui với coi!"
      }
    }
  ],

  'mf-06': [
    {
      phrase: "Are you free to hang out this weekend?",
      meaning: "Rủ bạn bè đi chơi vào dịp cuối tuần.",
      vietnamese: "Cuối tuần này bạn có rảnh đi chơi không?",
      business: {
        phrase: "Would your schedule accommodate a bilateral cultural excursion this Saturday?",
        example: "Would your schedule accommodate a bilateral cultural excursion this Saturday morning?",
        translation: "Liệu lịch trình của quý vị có thuận tiện cho một chuyến tham quan văn hóa vào sáng thứ Bảy này không ạ?"
      },
      casualStyle: {
        phrase: "Are you free to hang out this Saturday? We could grab coffee by the lake.",
        example: "Are you free to hang out this Saturday? We could grab coffee by the lake.",
        translation: "Thứ Bảy này bạn có rảnh đi chơi không? Tụi mình ra bờ hồ uống cà phê ngắm cảnh."
      },
      superCasual: {
        phrase: "Free this weekend? Down for coffee?",
        example: "Free this weekend? Down for coffee and a walk?",
        translation: "Cuối tuần rảnh hông? Đi cà phê dạo phố xíu nha?"
      }
    }
  ],

  'mf-07': [
    {
      phrase: "Have you listened to any local music lately?",
      meaning: "Hỏi han về việc nghe các tác phẩm âm nhạc địa phương.",
      vietnamese: "Dạo này bạn có nghe nhạc bản địa nào không?",
      business: {
        phrase: "Have you explored the symphonic acoustic traditions of this regional artistic heritage?",
        example: "Have you explored the symphonic acoustic traditions of this regional artistic heritage?",
        translation: "Quý vị đã khám phá những truyền thống âm thanh giao hưởng thuộc di sản nghệ thuật khu vực này chưa ạ?"
      },
      casualStyle: {
        phrase: "Have you checked out any Vietnamese indie bands on Spotify recently?",
        example: "Have you checked out any Vietnamese indie bands on Spotify recently? There are great songs!",
        translation: "Gần đây bạn có nghe ban nhạc indie Việt Nam nào trên Spotify không? Nhiều bài hay lắm!"
      },
      superCasual: {
        phrase: "Heard this track yet? Total banger!",
        example: "Heard this track yet? Total banger!",
        translation: "Nghe bài này chưa? Nhạc cháy cực kỳ luôn!"
      }
    }
  ],

  'mf-08': [
    {
      phrase: "It takes time to adjust to a new culture.",
      meaning: "Động viên cần có thời gian để thích nghi với môi trường sống mới.",
      vietnamese: "Cần có thời gian để hòa nhập với một nền văn hóa mới.",
      business: {
        phrase: "Cross-cultural assimilation is an organic psychological continuum requiring deliberate patience.",
        example: "Cross-cultural assimilation is an organic psychological continuum requiring deliberate patience.",
        translation: "Sự hòa nhập liên văn hóa là một tiến trình tâm lý tự nhiên đòi hỏi sự kiên nhẫn có chủ đích."
      },
      casualStyle: {
        phrase: "Don't worry, feeling homesick is totally normal when you first move abroad.",
        example: "Don't worry, feeling homesick is totally normal when you first move abroad.",
        translation: "Đừng lo, cảm giác nhớ nhà là hoàn toàn bình thường khi bạn mới chuyển sang sống ở nước ngoài."
      },
      superCasual: {
        phrase: "Culture shock hits everyone! You got this.",
        example: "Culture shock hits everyone! You got this, hang in there.",
        translation: "Sốc văn hóa ai cũng bị hết á! Bạn sẽ ổn thôi, cố lên nhé."
      }
    }
  ],

  'mf-09': [
    {
      phrase: "You did an amazing job today!",
      meaning: "Lời khen ngợi và động viên nồng ấm.",
      vietnamese: "Hôm nay bạn đã làm rất tuyệt vời!",
      business: {
        phrase: "Your exceptional composure and articulate discourse deserve the highest commendation.",
        example: "Your exceptional composure and articulate discourse deserve the highest commendation.",
        translation: "Sự đĩnh đạc xuất sắc và bài phát biểu lưu loát của quý vị xứng đáng nhận được lời khen ngợi cao quý nhất."
      },
      casualStyle: {
        phrase: "You did an incredible job with your presentation today, seriously!",
        example: "You did an incredible job with your presentation today, seriously! Be proud.",
        translation: "Hôm nay bạn thuyết trình xuất sắc lắm luôn, nghiêm túc đó! Hãy tự hào về bản thân nha."
      },
      superCasual: {
        phrase: "Killed it today! Pure talent.",
        example: "Killed it today! Pure talent, so proud of you.",
        translation: "Hôm nay làm đỉnh chóp luôn! Tài năng xuất chúng, tự hào về bạn ghê."
      }
    }
  ],

  'mf-10': [
    {
      phrase: "I see your point, but I look at it differently.",
      meaning: "Bày tỏ bất đồng quan điểm một cách lịch sự, văn minh.",
      vietnamese: "Tôi hiểu ý bạn, nhưng tôi nhìn nhận vấn đề hơi khác.",
      business: {
        phrase: "While I comprehend your premise, our analytical framework reveals divergent conclusions.",
        example: "While I comprehend your premise, our analytical framework reveals divergent conclusions.",
        translation: "Mặc dù tôi thấu hiểu tiền đề của quý vị, khung phân tích của chúng tôi lại cho thấy những kết luận có phần khác biệt."
      },
      casualStyle: {
        phrase: "I totally see where you're coming from, but I look at it a bit differently.",
        example: "I totally see where you're coming from, but I look at it a bit differently based on my experience.",
        translation: "Mình hoàn toàn hiểu góc nhìn của bạn, nhưng dựa trên trải nghiệm của mình thì mình thấy hơi khác một chút."
      },
      superCasual: {
        phrase: "Get your point, but I see it another way.",
        example: "Get your point, but I see it another way. Both valid though!",
        translation: "Hiểu ý ông rồi, cơ mà tui thấy theo hướng khác. Cả hai đều có lý mà!"
      }
    }
  ],

  'mf-11': [
    {
      phrase: "Are you being serious or just being sarcastic?",
      meaning: "Hỏi để làm rõ đối phương đang nói đùa mỉa mai hay nghiêm túc.",
      vietnamese: "Bạn đang nghiêm túc hay chỉ đang nói đùa mỉa mai thế?",
      business: {
        phrase: "May I clarify whether your observation was intended with ironic nuance or literal intent?",
        example: "May I clarify whether your observation was intended with ironic nuance or literal intent?",
        translation: "Tôi xin phép làm rõ nhận xét vừa rồi mang sắc thái châm biếm hay là ý tứ đen chuẩn xác ạ?"
      },
      casualStyle: {
        phrase: "Wait, are you being sarcastic right now, or did you actually mean that?",
        example: "Wait, are you being sarcastic right now, or did you actually mean that? Tone was subtle!",
        translation: "Khoan đã, bạn đang mỉa mai hay nói thật lòng vậy? Ngữ điệu nghe khó đoán ghê!"
      },
      superCasual: {
        phrase: "Playing or serious? Can't tell!",
        example: "Playing or serious? Can't tell with that deadpan face!",
        translation: "Đang đùa hay nghiêm túc đó? Cái mặt tỉnh rụi nhìn không đoán nổi luôn!"
      }
    }
  ],

  'mf-12': [
    {
      phrase: "Thanks for asking, but I need some quiet time.",
      meaning: "Từ chối lịch thiệp để giữ không gian riêng tư.",
      vietnamese: "Cảm ơn bạn đã rủ, nhưng tôi cần chút thời gian yên tĩnh.",
      business: {
        phrase: "We appreciate your kind invitation; however, prior commitments necessitate our polite declination.",
        example: "We appreciate your kind invitation; however, prior commitments necessitate our polite declination.",
        translation: "Chúng tôi rất cảm kích lời mời nhã nhặn của quý vị; tuy nhiên, các nghĩa vụ đã định trước buộc chúng tôi phải xin phép khước từ."
      },
      casualStyle: {
        phrase: "Thanks so much for the invite, but that's not really my scene. I need to recharge.",
        example: "Thanks so much for the invite, but that's not really my scene. I need to recharge tonight.",
        translation: "Cảm ơn bạn nhiều vì lời mời nha, nhưng chỗ đó không hợp gu của mình lắm. Tối nay mình cần nạp lại năng lượng."
      },
      superCasual: {
        phrase: "Gotta pass tonight, battery on 0%!",
        example: "Gotta pass tonight, battery on 0%! Raincheck?",
        translation: "Tối nay cho tui xin kiếu nha, pin cạn kiệt về 0% rồi! Hẹn hôm khác được hông?"
      }
    }
  ],

  'mf-13': [
    {
      phrase: "Let's connect on Discord and play together.",
      meaning: "Rủ rê kết nối qua Discord để chơi game hoặc trò chuyện.",
      vietnamese: "Tụi mình kết nối qua Discord để chơi cùng nhau nhé.",
      business: {
        phrase: "We invite your technical community to synchronize through our monitored digital server node.",
        example: "We invite your technical community to synchronize through our monitored digital server node.",
        translation: "Chúng tôi trân trọng mời cộng đồng kỹ thuật của quý vị cùng kết nối qua hệ thống máy chủ số được quản trị của chúng tôi."
      },
      casualStyle: {
        phrase: "Drop your Discord tag, let's voice chat and play some co-op games tonight.",
        example: "Drop your Discord tag, let's voice chat and play some co-op games tonight.",
        translation: "Cho mình xin tên Discord đi, tối nay tụi mình vào phòng voice chơi game đồng đội nhé."
      },
      superCasual: {
        phrase: "Drop your Discord! Hopping in voice now.",
        example: "Drop your Discord! Hopping in voice right now.",
        translation: "Cho xin Discord liền! Đang nhảy vào phòng voice đây nè."
      }
    }
  ],

  'mf-14': [
    {
      phrase: "What do you value most in life?",
      meaning: "Hỏi về triết lý và giá trị sống cốt lõi.",
      vietnamese: "Điều gì bạn trân trọng nhất trong cuộc đời?",
      business: {
        phrase: "What core ethical tenets govern your overarching philosophical compass?",
        example: "What core ethical tenets govern your overarching philosophical compass and legacy?",
        translation: "Những nguyên tắc đạo đức cốt lõi nào định hướng cho kim chỉ nam triết lý và di sản của quý vị?"
      },
      casualStyle: {
        phrase: "When you look back on your journey, what truly matters to you the most?",
        example: "When you look back on your journey, what truly matters to you the most in life?",
        translation: "Khi nhìn lại chặng đường đã qua, điều gì thực sự có ý nghĩa quan trọng nhất đối với bạn?"
      },
      superCasual: {
        phrase: "What keeps you going when life gets tough?",
        example: "What keeps you going when life gets tough? Good friends?",
        translation: "Điều gì tiếp thêm động lực cho bạn mỗi khi cuộc sống gặp khó khăn? Bạn bè tốt hả?"
      }
    }
  ],

  'mf-15': [
    {
      phrase: "How do you celebrate traditional festivals back home?",
      meaning: "Hỏi thăm cách đón lễ hội truyền thống ở quê nhà bạn bè.",
      vietnamese: "Ở quê nhà bạn đón lễ hội truyền thống như thế nào?",
      business: {
        phrase: "How does your native sovereign heritage commemorate ancestral festive jubilees?",
        example: "How does your native sovereign heritage commemorate ancestral festive jubilees?",
        translation: "Di sản quốc gia bản địa của quý vị cử hành các ngày lễ truyền thống của tổ tiên như thế nào ạ?"
      },
      casualStyle: {
        phrase: "What kind of special foods or traditions does your family have during the holidays?",
        example: "What kind of special foods or traditions does your family have during the holidays?",
        translation: "Gia đình bạn thường có những món ăn hay phong tục đặc biệt nào trong dịp lễ tết?"
      },
      superCasual: {
        phrase: "What's holiday food like back home? Any favorites?",
        example: "What's holiday food like back home? Any favorites?",
        translation: "Món ăn ngày lễ ở quê bạn thế nào? Có món nào mê nhất hông?"
      }
    }
  ],

  'mf-16': [
    {
      phrase: "Do you enjoy staying active through sports?",
      meaning: "Hỏi về thói quen rèn luyện thể thao và lối sống năng động.",
      vietnamese: "Bạn có thích duy trì vận động qua thể thao không?",
      business: {
        phrase: "Do you integrate structured physical conditioning into your rigorous executive routine?",
        example: "Do you integrate structured physical conditioning into your rigorous executive routine?",
        translation: "Quý vị có đưa việc rèn luyện thể lực có tổ chức vào lịch trình làm việc bận rộn của mình không?"
      },
      casualStyle: {
        phrase: "Do you want to go for an easy jog along the beach boardwalk tomorrow morning?",
        example: "Do you want to go for an easy jog along the beach boardwalk tomorrow morning?",
        translation: "Sáng mai bạn có muốn cùng mình chạy bộ nhẹ nhàng dọc theo bờ biển không?"
      },
      superCasual: {
        phrase: "Hit the gym or run by the beach?",
        example: "Hit the gym or run by the beach? Up to you!",
        translation: "Đi tập gym hay chạy bộ bờ biển? Tùy bạn chọn đó nha!"
      }
    }
  ],

  'mf-17': [
    {
      phrase: "Let's do a language exchange session.",
      meaning: "Đề xuất cùng nhau luyện tập trao đổi ngôn ngữ.",
      vietnamese: "Tụi mình cùng có một buổi giao lưu ngôn ngữ nhé.",
      business: {
        phrase: "We propose establishing an institutional tandem linguistic immersion program.",
        example: "We propose establishing an institutional tandem linguistic immersion program between our faculties.",
        translation: "Chúng tôi đề xuất thiết lập một chương trình rèn luyện ngôn ngữ ghép cặp chính thức giữa hai khoa."
      },
      casualStyle: {
        phrase: "Let's do 30 minutes in Vietnamese and 30 minutes in English over coffee.",
        example: "Let's do 30 minutes in Vietnamese and 30 minutes in English over coffee this weekend.",
        translation: "Cuối tuần này đi cà phê tụi mình nói 30 phút tiếng Việt rồi 30 phút tiếng Anh nhé."
      },
      superCasual: {
        phrase: "Teach me English, I'll teach you Vietnamese!",
        example: "Teach me English, I'll teach you Vietnamese! Win-win.",
        translation: "Dạy tui tiếng Anh, tui dạy lại tiếng Việt cho! Đôi bên cùng có lợi nha."
      }
    }
  ],

  'mf-18': [
    {
      phrase: "I love escaping to the quiet countryside.",
      meaning: "Bày tỏ niềm yêu thích được về vùng quê yên bình nghỉ ngơi.",
      vietnamese: "Tôi rất thích trốn về vùng đồng quê yên bình.",
      business: {
        phrase: "We advocate for periodic retreats to bucolic sanctuaries to mitigate urban cognitive strain.",
        example: "We advocate for periodic retreats to bucolic sanctuaries to mitigate urban cognitive strain.",
        translation: "Chúng tôi chủ trương các kỳ nghỉ dưỡng định kỳ tại các không gian điền viên để giải tỏa áp lực nhận thức đô thị."
      },
      casualStyle: {
        phrase: "After a noisy week in the city, spending a weekend in the mountains is pure bliss.",
        example: "After a noisy week in the city, spending a weekend in the mountains is pure bliss.",
        translation: "Sau một tuần ồn ào ở thành phố, được dành hai ngày cuối tuần trên núi đúng là thiên đường."
      },
      superCasual: {
        phrase: "Trading city honks for mountain birds!",
        example: "Trading city honks for mountain birds! So peaceful here.",
        translation: "Đổi tiếng còi xe lấy tiếng chim rừng! Ở đây bình yên thực sự."
      }
    }
  ],

  'mf-19': [
    {
      phrase: "True friendship transcends distance.",
      meaning: "Khẳng định khoảng cách địa lý không làm phai mờ tình bạn chân thành.",
      vietnamese: "Tình bạn chân thành vượt qua mọi khoảng cách địa lý.",
      business: {
        phrase: "Enduring bilateral collegiality transcends geographical separation and temporal dispersion.",
        example: "Enduring bilateral collegiality transcends geographical separation and temporal dispersion.",
        translation: "Mối quan hệ đồng nghiệp gắn kết bền chặt luôn vượt qua mọi khoảng cách địa lý và sự cách biệt thời gian."
      },
      casualStyle: {
        phrase: "No matter how many miles apart we are, real friends always pick up right where they left off.",
        example: "No matter how many miles apart we are, real friends always pick up right where they left off.",
        translation: "Dù cách nhau bao nhiêu cây số, bạn bè thực sự gặp lại là thân thiết như chưa từng có khoảng cách."
      },
      superCasual: {
        phrase: "Miles apart, still best buds!",
        example: "Miles apart, still best buds! Call me anytime.",
        translation: "Cách nửa vòng trái đất vẫn là bạn chí cốt! Rảnh cứ gọi tui bất kỳ lúc nào nha."
      }
    }
  ],

  'mf-20': [
    {
      phrase: "Would you be interested in collaborating on an art project?",
      meaning: "Rủ rê cùng nhau thực hiện một dự án nghệ thuật sáng tạo.",
      vietnamese: "Bạn có hứng thú cùng hợp tác làm một dự án nghệ thuật không?",
      business: {
        phrase: "Would your studio be receptive to a formal interdisciplinary artistic residency co-production?",
        example: "Would your studio be receptive to a formal interdisciplinary artistic residency co-production?",
        translation: "Liệu xưởng nghệ thuật của quý vị có sẵn sàng cho một dự án đồng sáng tác lưu trú liên ngành chính thức không ạ?"
      },
      casualStyle: {
        phrase: "Would you be open to doing a collaboration combining your illustrations with my photography?",
        example: "Would you be open to doing a collaboration combining your illustrations with my photography?",
        translation: "Bạn có sẵn lòng hợp tác một dự án lồng ghép tranh vẽ của bạn với ảnh chụp của mình không?"
      },
      superCasual: {
        phrase: "Let's team up and make something sick!",
        example: "Let's team up and make something sick! You draw, I animate.",
        translation: "Bắt tay làm cái gì đỉnh chóp đi bạn ơi! Bạn vẽ tranh, tui làm chuyển động."
      }
    }
  ]
};
