import { Topic, Structure, Word } from '../data/vocab';

const IDIOMS_DICTIONARY: Record<string, { definition: string; example: string; blankSentence: string }> = {
  "A blessing in disguise": {
    definition: "Trong cái rủi có cái may (điều tốt đẹp ban đầu trông như tai họa/xui xẻo).",
    example: "Losing that job was a blessing in disguise because I found a much better one.",
    blankSentence: "Losing my flight turned out to be a ____ because I met my old friend on the train."
  },
  "Beat around the bush": {
    definition: "Nói vòng vo tam quốc, lảng tránh vấn đề chính.",
    example: "Stop beating around the bush and tell me what you want.",
    blankSentence: "Don't ____; just get straight to the point."
  },
  "Call it a day": {
    definition: "Dừng làm việc/nghỉ ngơi (kết thúc một ngày làm việc).",
    example: "We've been working for ten hours, let's call it a day.",
    blankSentence: "I am too tired to continue, so let's ____."
  },
  "Bite the bullet": {
    definition: "Cắn răng chịu đựng, dũng cảm quyết định đối mặt khó khăn.",
    example: "I decided to bite the bullet and go to the dentist.",
    blankSentence: "You have to ____ and tell her the truth instead of running away."
  },
  "Break a leg": {
    definition: "Chúc may mắn (thường dùng trong nghệ thuật, sân khấu).",
    example: "You are going on stage next, break a leg!",
    blankSentence: "I know you will do great in your audition, so ____!"
  },
  "Cut corners": {
    definition: "Đi tắt, làm ẩu, làm sơ sài (thường để tiết kiệm tiền/thời gian).",
    example: "They cut corners to finish the building with a low budget, and now it has cracks.",
    blankSentence: "Never ____ when it comes to medical safety."
  },
  "Easy does it": {
    definition: "Cứ từ từ, cẩn thận và nhẹ nhàng kẻo hỏng.",
    example: "Easy does it! Don't spill that hot soup.",
    blankSentence: "____! Just move the glass table slowly."
  },
  "Get out of hand": {
    definition: "Mất kiểm soát, vượt khỏi tầm tay.",
    example: "The party got out of hand when too many people in the neighborhood showed up.",
    blankSentence: "We must act quickly before the protests ____."
  },
  "Hang in there": {
    definition: "Kiên trì lên, cố gắng vượt qua giai đoạn khó khăn.",
    example: "I know work is tough right now, but hang in there.",
    blankSentence: "____, things will get better soon!"
  },
  "Make a long story short": {
    definition: "Nói tóm lại, rút ngắn câu chuyện dài dòng.",
    example: "To make a long story short, we missed the flight.",
    blankSentence: "To ____, they ended up getting married."
  },
  "Miss the boat": {
    definition: "Bỏ lỡ cơ hội tốt.",
    example: "If you don't apply today, you will miss the boat on this scholarship.",
    blankSentence: "I waited too long to buy the tickets and totally ____."
  },
  "No pain, no gain": {
    definition: "Không vục mặt thì không thể ngẩng đầu, không có gian khổ không có thành quả.",
    example: "I practiced at the gym until all my muscles ached. No pain, no gain!",
    blankSentence: "You must study hard every night; after all, ____."
  },
  "On the ball": {
    definition: "Nhanh nhẹn, thạo việc, nắm bắt tình hình tốt.",
    example: "That new executive is really on the ball.",
    blankSentence: "She is always ____ and solves problems before they escalate."
  },
  "Pull someone's leg": {
    definition: "Trêu chọc, đùa cợt gạt ai đó cho vui.",
    example: "Don't worry, I am not angry, I was just pulling your leg.",
    blankSentence: "Is it true that you won the lottery, or are you just ____ your ____?"
  },
  "So far so good": {
    definition: "Đến nay mọi việc vẫn suôn sẻ tốt đẹp.",
    example: "How is your new project? So far so good.",
    blankSentence: "We finished the first three chapters, and ____."
  },
  "Under the weather": {
    definition: "Cảm thấy không khỏe, hơi mệt mỏi.",
    example: "I missed the meeting because I was feeling under the weather.",
    blankSentence: "She stayed home today because she is slightly ____."
  },
  "Wrap your head around": {
    definition: "Thấu hiểu nổi, tiếp thu được thông tin phức tạp.",
    example: "I can't wrap my head around this massive theory.",
    blankSentence: "It is hard to ____ how big the universe really is."
  },
  "A penny for your thoughts": {
    definition: "Bạn đang nghĩ gì thế? (Dùng để hỏi một người đang trầm tư).",
    example: "You have been quiet for a while; a penny for your thoughts?",
    blankSentence: "You look so deep in thought, ____?"
  },
  "Barking up the wrong tree": {
    definition: "Tìm sai chỗ, trách nhầm người, đi sai hướng giải quyết.",
    example: "If you think I took your keys, you are barking up the wrong tree.",
    blankSentence: "He is looking for answers in books, but he is ____."
  },
  "Bird in the hand": {
    definition: "Hai thỏ đứng không bằng một chim trong tay (quý trọng cái đang có hơn cái viển vông).",
    example: "I accepted the job offer instead of waiting for a better one; a bird in the hand.",
    blankSentence: "A ____ is worth two in the bush, so cherish what you have."
  },
  "Bite off more than you can chew": {
    definition: "Cố quá thành quá sức mình, gánh vác việc quá khả năng.",
    example: "Taking five courses while working full-time is biting off more than you can chew.",
    blankSentence: "Don't ____ by accepting too many tasks at once."
  },
  "Break the ice": {
    definition: "Phá vỡ sự ngại ngùng e dè (khi mới gặp mặt).",
    example: "He told a joke to break the ice during the meeting.",
    blankSentence: "Playing a small game is a great way to ____ at a party."
  },
  "By the skin of your teeth": {
    definition: "Suýt soát, vừa khít, ngay sát nút.",
    example: "I passed the final math exam by the skin of my teeth.",
    blankSentence: "We escaped the wild dog ____."
  },
  "Cost an arm and a leg": {
    definition: "Rất đắt đỏ, tốn kém tài chính lớn.",
    example: "Repairing that sports car is going to cost an arm and a leg.",
    blankSentence: "Villas near the beach usually ____."
  },
  "Do something at the drop of a hat": {
    definition: "Làm gì ngay lập tức không chần chừ do dự.",
    example: "She loves traveling and packs her bags at the drop of a hat.",
    blankSentence: "They are ready to help anyone ____."
  },
  "Don't cry over spilt milk": {
    definition: "Đừng tiếc nuối những gì đã hỏng hóc qua rồi chẳng cứu vãn lại được.",
    example: "You failed the driver test, but don't cry over spilt milk; just try again.",
    blankSentence: "It is useless to complain about the lost key; ____."
  },
  "Don't put all your eggs in one basket": {
    definition: "Đừng bỏ tất cả niềm tin vào một chỗ (chia rủi ro ra nhiều giỏ).",
    example: "Invest in different companies; don't put all your eggs in one basket.",
    blankSentence: "Apply for multiple jobs because you shouldn't ____."
  },
  "Every cloud has a silver lining": {
    definition: "Trong cái rủi có cái may, sau cơn mưa trời lại sáng.",
    example: "Even though I got sick, it allowed me to read my favorite book; every cloud has a silver lining.",
    blankSentence: "Keep your spirits up, for ____."
  },
  "Give the benefit of the doubt": {
    definition: "Tạm tin tưởng ai đó khi chưa có bằng chứng xác đáng chống lại họ.",
    example: "She said her car broke down, so let's give her the benefit of the doubt.",
    blankSentence: "I don't know if his excuse is true, but I will ____."
  },
  "Hit the nail on the head": {
    definition: "Nói trúng phóc tim đen, phát biểu vô cùng chuẩn xác.",
    example: "Her analysis of the financial problem really hit the nail on the head.",
    blankSentence: "Your suggestion about shortening the meetings was correct; you ____."
  },
  "Jump on the bandwagon": {
    definition: "Chạy theo trào lưu, ăn theo xu hướng đang thịnh hành.",
    example: "Many stores jumped on the bandwagon of selling milktea.",
    blankSentence: "First-time investors always ____ when Bitcoin price rises."
  },
  "Keep your chin up": {
    definition: "Hãy ngẩng cao đầu vui vẻ đối mặt, chớ nản lòng.",
    example: "Keep your chin up! You will find a better opportunity next time.",
    blankSentence: "____ even during times of heavy challenge."
  },
  "Let the cat out of the bag": {
    definition: "Để lộ bí mật (vô tình hoặc cố ý).",
    example: "It was a surprise party, but Jamie let the cat out of the bag.",
    blankSentence: "Who ____ about our new product launch?"
  },
  "Once in a blue moon": {
    definition: "Hiếm khi nào xảy ra, năm thì mười họa mới có.",
    example: "We only go out to expensive dining once in a blue moon.",
    blankSentence: "He calls his parents only ____."
  },
  "Piece of cake": {
    definition: "Dễ như ăn bánh.",
    example: "That test was a piece of cake; I finished in ten minutes.",
    blankSentence: "Don't worry about the interview; it's going to be a ____ for you."
  },
  "See eye to eye": {
    definition: "Đồng quan điểm, nhất trí đồng lòng.",
    example: "My boss and I don't always see eye to eye on design choices.",
    blankSentence: "They finally agreed because they see eye to eye on almost everything."
  },
  "Spill the beans": {
    definition: "Nôn ra bí mật, khai tuốt ra.",
    example: "We wanted to surprise her, but Chase spilled the beans.",
    blankSentence: "Come on, tell me what happened! ____!"
  },
  "Take with a grain of salt": {
    definition: "Nửa tin nửa ngờ, chớ tin sái cổ (cần kiểm chứng độ xác thực).",
    example: "You should take all internet advice with a grain of salt.",
    blankSentence: "His stories are always exaggerated, so take them ____."
  },
  "The elephant in the room": {
    definition: "Vấn đề hiển nhiên dập dờn sờ sờ nhưng ai cũng tránh né đề cập.",
    example: "Their massive bad division is the elephant in the room during meetings.",
    blankSentence: "We talked for hours but completely ignored ____."
  },
  "The best of both worlds": {
    definition: "Vẹn cả đôi đường, được lợi từ cả hai phía khác biệt.",
    example: "Working part-time allows her to spend time with her baby and keep her job; the best of both worlds.",
    blankSentence: "Living in the countryside but commuting to the city gives her ____."
  }
};

// Pre-defined rich content of 5 structures for core topics to give high-fidelity custom experiences
const HANDCRAFTED_STRUCTURES: Record<string, Structure[]> = {
  'lesson-01': [
    {
      phrase: 'How do you do?',
      meaning: 'Chưa từng gặp mặt.',
      vietnamese: 'Rất hân hạnh được gặp anh/chị. (Trang trọng)',
      business: { phrase: 'Allow me to introduce myself, I am Alex.', example: 'Allow me to introduce myself, I am Alex from HR.', translation: 'Cho phép tôi tự giới thiệu, tôi là Alex từ phòng nhân sự.' },
      casualStyle: { phrase: "Hey there! I'm Jamie.", example: "Hey there! I'm Jamie. Nice to meet you.", translation: 'Chào đằng ấy! Mình là Jamie. Rất vui được gặp bạn.' },
      superCasual: { phrase: "What's up, I'm Jamie.", example: "What's up, I'm Jamie. You new around here?", translation: 'Sao thế, tôi là Jamie đây. Mới tới đây à?' }
    },
    {
      phrase: 'Where are you from?',
      meaning: 'Hỏi quê quán.',
      vietnamese: 'Bạn đến từ đâu?',
      business: { phrase: 'Could you tell me where you are based?', example: 'Could you tell me where you are based currently?', translation: 'Anh/chị có thể cho biết văn phòng làm việc của mình ở đâu không?' },
      casualStyle: { phrase: 'Where are you originally from?', example: 'Where are you originally from? Born and raised?', translation: 'Bạn vốn là ở đâu đến vậy? Sinh ra ở đó luôn à?' },
      superCasual: { phrase: 'Where you reppin?', example: 'Hey man, where you reppin?', translation: 'Này ông, quê ngoại ở đâu thế?' }
    },
    {
      phrase: 'What do you do for work?',
      meaning: 'Hỏi ngành nghề.',
      vietnamese: 'Bạn làm công việc gì?',
      business: { phrase: 'What line of work are you in?', example: 'What line of work are you in if I may ask?', translation: 'Nếu tôi có thể hỏi, ông/bà đang làm trong lĩnh vực nào ạ?' },
      casualStyle: { phrase: 'What do you do for a living?', example: 'What do you do for a living? Are you currently working?', translation: 'Bạn làm nghề gì để kiếm sống vậy? Có đang đi làm không?' },
      superCasual: { phrase: 'What do you do for bread?', example: 'So what do you do for bread?', translation: 'Thế cày cuốc gì để kiếm cơm vậy?' }
    },
    {
      phrase: 'Nice to meet you.',
      meaning: 'Chào xã giao.',
      vietnamese: 'Rất vui được gặp bạn.',
      business: { phrase: 'It is a pleasure meeting you today.', example: 'It is a pleasure meeting you today, looking forward to our collaboration.', translation: 'Hôm nay được gặp anh/chị thật là vinh hạnh, mong chờ sự hợp tác của chúng ta.' },
      casualStyle: { phrase: 'Great meeting you.', example: 'Great meeting you, Jamie. Hope to see you around.', translation: 'Rất vui được gặp bạn, Jamie. Hy vọng sớm gặp lại nhé.' },
      superCasual: { phrase: 'Class meeting you.', example: 'Class meeting you. Catch you later!', translation: 'Gặp bồ vui ghê. Gặp lại sau nha!' }
    },
    {
      phrase: 'I did not catch your name.',
      meaning: 'Không nghe rõ tên.',
      vietnamese: 'Tôi chưa nghe rõ tên bạn.',
      business: { phrase: 'Apologies, could you repeat your name, please?', example: 'Apologies, could you repeat your name, please? I want to write it correctly.', translation: 'Xin lỗi, anh/chị có thể lặp lại tên của mình không? Tôi muốn ghi lại cho chính xác.' },
      casualStyle: { phrase: "I'm sorry, I didn't quite catch your name.", example: "I'm sorry, I didn't quite catch your name. Did you say Jamie?", translation: 'Xin lỗi nhé, mình chưa nghe rõ tên bạn lắm. Bạn vừa bảo Jamie à?' },
      superCasual: { phrase: 'Your name again?', example: "Your name again? My memory's shot.", translation: 'Tên dòng họ gì ấy nhỉ? Đầu óc tôi dạo này cá vàng quá.' }
    }
  ],
  'lesson-02': [
    {
      phrase: 'How do I look?',
      meaning: 'Hỏi ngoại hình.',
      vietnamese: 'Tôi trông thế nào?',
      business: { phrase: 'Is this attire appropriate for the corporate client dinner?', example: 'Is this attire appropriate for the corporate client dinner tonight?', translation: 'Bộ trang phục này có phù hợp cho buổi tối ăn tiệc với khách hàng của công ty không?' },
      casualStyle: { phrase: 'Does this outfit look okay on me?', example: 'Does this outfit look okay on me, or does it clash?', translation: 'Bộ đồ này mặc lên trông ổn không bạn, hay bị lố quá?' },
      superCasual: { phrase: 'Looking fly or what?', example: 'So... looking fly or what?', translation: 'Sao... trông chất chơi người dơi chưa?' }
    },
    {
      phrase: 'This suit fits you well.',
      meaning: 'Khen ăn mặc hợp.',
      vietnamese: 'Bộ đồ này vừa vặn với bạn.',
      business: { phrase: 'That suit complements your professional stature perfectly.', example: 'That suit complements your professional stature perfectly, class presentation.', translation: 'Bộ vest đó tôn lên vóc dáng chuyên nghiệp của anh/chị một cách hoàn hảo đấy.' },
      casualStyle: { phrase: 'This jacket suits you so well!', example: 'This jacket suits you so well, where did you buy it?', translation: 'Cái áo khoác này hợp với bạn ghê luôn, mua ở đâu thế?' },
      superCasual: { phrase: 'That jacket is a total vibe!', example: 'Bro, that jacket is a total vibe, absolutely drippy.', translation: 'Ê bồ, cái áo khoác này nghệ vãi, chất chơi thực sự.' }
    },
    {
      phrase: 'Are you dressing up?',
      meaning: 'Hỏi có ăn diện không.',
      vietnamese: 'Bạn có diện đồ không?',
      business: { phrase: 'What is the dress code enforced for the gala dinner?', example: 'What is the dress code enforced for the gala dinner tonight?', translation: 'Mã trang phục bắt buộc cho buổi dạ tiệc tối nay là gì vậy?' },
      casualStyle: { phrase: 'Are we dressing up tonight, or keeping it casual?', example: 'Are we dressing up tonight, or keeping it casual with shirts?', translation: 'Tối nay chúng mình mặc diện không, hay chỉ cần mặc áo thun đơn giản thôi?' },
      superCasual: { phrase: 'We going fancy or bumming it?', example: 'We going fancy or bumming it tonight?', translation: 'Tối nay xúng xính xiêm y hay cứ áo cộc quần là lượt vậy?' }
    },
    {
      phrase: 'I want a makeover.',
      meaning: 'Muốn thay đổi diện mạo.',
      vietnamese: 'Tôi muốn đổi mới diện mạo.',
      business: { phrase: 'I intend to upgrade my professional wardrobe completely.', example: 'I intend to upgrade my professional wardrobe completely for the executive promotion.', translation: 'Tôi dự định nâng cấp toàn bộ tủ đồ công sở của mình nhằm chuẩn bị cho đợt thăng chức ban điều hành.' },
      casualStyle: { phrase: 'My style needs a serious makeover.', example: 'My style needs a serious makeover, help me choose some items.', translation: 'Phong cách của mình cần lột xác thực sự rồi, giúp mình lựa vài món đi.' },
      superCasual: { phrase: 'Need a style revamp ASAP.', example: 'Man, I need a style revamp ASAP, look at these old boots!', translation: 'Ông ơi, tôi cần thay đổi phong cách gấp luôn, xem đôi bốt cũ mèm này đi!' }
    },
    {
      phrase: 'Does this clash?',
      meaning: 'Hỏi màu sắc có chọi nhau không.',
      vietnamese: 'Các món này có bị chọi màu không?',
      business: { phrase: 'Do the patterns on this tie clash with the pinstripe shirt?', example: 'Do the patterns on this tie clash with the pinstripe shirt?', translation: 'Họa tiết trên chiếc cà vạt này có bị chọi với chiếc sơ mi kẻ sọc không?' },
      casualStyle: { phrase: 'Do these jeans clash with my leather boots?', example: 'Do these jeans clash with my leather boots?', translation: 'Cái quần jeans này có bị chọi với đôi bốt da của mình không?' },
      superCasual: { phrase: 'This look a bit off?', example: 'Does this color scheme look a bit off to you?', translation: 'Hai màu này nhìn trông cứ cấn cấn thế nào ấy nhỉ?' }
    }
  ]
};

// Handcrafted 3 dialogues for key topics
const HANDCRAFTED_DIALOGUES: Record<string, any[]> = {
  'lesson-01': [
    {
      type: 'pair',
      school: 'business',
      title: '👔 Business Networking Evening',
      participants: [
        { name: 'Diana (HR Manager)', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Diana', role: 'Host' },
        { name: 'Robert (Consultant)', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Robert', role: 'Partner' }
      ],
      lines: [
        { participant: 'Diana (HR Manager)', text: 'Good evening. Allow me to introduce myself, I am Diana from HR operations.', translation: 'Chúc anh buổi tối tốt lành. Cho phép tôi tự giới thiệu, tôi là Diana từ bộ phận vận hành nhân sự.' },
        { participant: 'Robert (Consultant)', text: 'A pleasure meeting you today, Diana. I am Robert, a consultant from the tech advisory branch.', translation: 'Rất vui được gặp chị hôm nay, Diana. Tôi là Robert, chuyên viên tư vấn từ chi nhánh cố vấn công nghệ.' },
        { participant: 'Diana (HR Manager)', text: 'Excellent. What line of business are you primarily focused on this quarter?', translation: 'Tuyệt vời. Anh chủ yếu tập trung vào lĩnh vực kinh doanh nào trong quý này?' },
        { participant: 'Robert (Consultant)', text: 'We are currently assisting clients with digital transformation frameworks. Could you tell me where you are based?', translation: 'Chúng tôi hiện đang hỗ trợ khách hàng xây dựng khung chuyển đổi kỹ thuật số. Chị có thể cho tôi biết văn phòng làm việc của chị ở đâu không?' },
        { participant: 'Diana (HR Manager)', text: 'Our main headquarters is in Boston, though I travel often. I look forward to our collaborations.', translation: 'Trụ sở chính của chúng tôi ở Boston, mặc dù tôi đi lại khá thường xuyên. Mong chờ sự hợp tác của chúng ta.' }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: '💬 Friendly Coffee Spot Meetup',
      participants: [
        { name: 'Alex', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex', role: 'Friend A' },
        { name: 'Jamie', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jamie', role: 'Friend B' }
      ],
      lines: [
        { participant: 'Alex', text: "Hey! Nice to meet you. I'm Alex. You new around here?", translation: "Chào bạn nhé! Rất vui được gặp bạn. Mình là Alex. Bạn là người mới quanh đây à?" },
        { participant: 'Jamie', text: "Hey Alex, great meeting you. I'm Jamie. Yes, my first week in town, actually.", translation: "Chào Alex, rất vui được gặp bạn. Mình là Jamie. Đúng vậy, thực ra là tuần đầu tiên mình ở thành phố này." },
        { participant: 'Alex', text: 'Awesome. Where are you originally from? Born and raised?', translation: 'Tuyệt thế. Bạn vốn là ở đâu đến vậy? Sinh ra và lớn lên ở đó luôn à?' },
        { participant: 'Jamie', text: 'I was raised in Seattle, but just relocated for work. What do you do for a living?', translation: 'Mình lớn lên ở Seattle, nhưng mới chuyển đến đây để làm việc. Bạn đang làm nghề gì kiếm sống vậy?' },
        { participant: 'Alex', text: "I'm a graphic designer at an agency downtown. Talk about a small world!", translation: "Mình là nhà thiết kế đồ họa tại một công ty dưới phố. Đúng là trái đất tròn thật!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: '⚡ Skate Park Chill Smalltalk',
      participants: [
        { name: 'Ryan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ryan', role: 'Homie' },
        { name: 'Chase', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Chase', role: 'Homie' }
      ],
      lines: [
        { participant: 'Ryan', text: "What's up, I'm Ryan. I keep seeing you shredding around.", translation: "Có gì hot, mình là Ryan. Thấy ông lướt ván đỉnh vãi chưởng." },
        { participant: 'Chase', text: "Yo, nice one Ryan. I'm Chase. Just practicing some flatground tricks.", translation: "Yo, cảm ơn ông nhé Ryan. Mình là Chase. Đang dợt mấy bài trượt căn bản thôi ấy mà." },
        { participant: 'Ryan', text: 'Your name again? My memory is shot today. Where you reppin anyway?', translation: 'Tên ông là gì ấy nhỉ? Nay đầu tôi cá vàng quá. Mà quê gốc ở đâu ông?' },
        { participant: 'Chase', text: 'Haha no worries, Chase. Reppin Cali. What about you?', translation: 'Haha không sao đâu, Chase nhé. Gốc Cali á. Còn ông thì sao?' },
        { participant: 'Ryan', text: 'Brooklyn born. What do you do for bread, man?', translation: 'Sinh ở Brooklyn nhé. Thế bình thường cày bừa gì để kiếm cơm vậy?' },
        { participant: 'Chase', text: 'Just coding side gigs, keeps my pockets full enough to skate. Good vibes!', translation: 'Làm mấy việc viết code linh tinh thôi, đủ lúa trang trải để đi trượt ván. Vui vẻ là chính!' }
      ]
    }
  ],
  'lesson-02': [
    {
      type: 'pair',
      school: 'business',
      title: '👔 Dress Code Alignment for Partners',
      participants: [
        { name: 'Sarah (Director)', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah', role: 'Management' },
        { name: 'Marcus (VP)', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus', role: 'Management' }
      ],
      lines: [
        { participant: 'Sarah (Director)', text: 'Marcus, is this attire appropriate for the corporate client dinner tonight?', translation: 'Marcus, trang phục này có đủ lịch sự cho buổi tiệc tối cùng khách hàng doanh nghiệp không?' },
        { participant: 'Marcus (VP)', text: 'That suit complements your professional stature perfectly, Sarah. Highly elegant.', translation: 'Bộ vest đó tôn lên phong thái chuyên nghiệp của chị một cách hoàn hảo đấy, Sarah. Vô cùng thanh lịch.' },
        { participant: 'Sarah (Director)', text: 'Thank you. Do the patterns on this silk tie clash with the pinstripe blazer?', translation: 'Cảm ơn anh. Liệu họa tiết trên chiếc cà vạt lụa này có bị chọi màu với chiếc blazer kẻ sọc không?' },
        { participant: 'Marcus (VP)', text: 'Not at all. It maintains an impeccable corporate image. Our clients will be impressed.', translation: 'Hoàn toàn không. Trông nó duy trì một hình ảnh công sở cực kỳ chuẩn mực. Khách hàng sẽ ấn tượng lắm đây.' }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: '💬 Picking Out Outfits for a Social Party',
      participants: [
        { name: 'Emma', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma', role: 'Friend A' },
        { name: 'Liam', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Liam', role: 'Friend B' }
      ],
      lines: [
        { participant: 'Emma', text: 'Are we dressing up tonight, or keeping it casual for the house party?', translation: 'Tối nay chúng mình có điệu đà ăn diện không, hay chỉ cần mặc đồ bụi bặm cho buổi tiệc tại gia thôi?' },
        { participant: 'Liam', text: 'I think most folks are keeping it simple. But does this outfit look okay on me?', translation: 'Mình nghĩ mọi người mặc giản dị thôi. Trông bộ này có hợp với mình không bồ?' },
        { participant: 'Emma', text: 'This denim jacket suits you so well! It really highlights your style.', translation: 'Cái áo khoác bò này hợp với bồ ghê luôn! Tôn phong cách dã man ấy.' },
        { participant: 'Liam', text: 'Perfect. My style needed a serious makeover. Let’s head out!', translation: 'Tuyệt vời. Phong cách của mình cũng đến lúc cần thay da đổi thịt rồi. Đi thôi!' }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: '⚡ Rate the Fits on Street',
      participants: [
        { name: 'Kayden', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kayden', role: 'Fit Inspector' },
        { name: 'Tyler', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tyler', role: 'Fit Inspector' }
      ],
      lines: [
        { participant: 'Kayden', text: 'Check the fit. Looking fly or what, bro?', translation: 'Xem đống đồ này đi. Nhìn chất chơi chưa bồ ơi?' },
        { participant: 'Tyler', text: 'Whoa! Bro, that puffer jacket is a total vibe, absolutely drippy.', translation: 'Ù uôi! Cái áo phao này nghệ vãi, chất phát ngất luôn thề.' },
        { participant: 'Kayden', text: 'Appreciate it. Did you think these sneakers clashing with the camo pattern?', translation: 'Ấm lòng ghê. Thế bồ thấy đôi giày thể thao này có bị lệch pha với cái hoa văn rằn ri không?' },
        { participant: 'Tyler', text: 'Nah, it fits like a glove. You need to snap a pic for social media ASAP.', translation: 'Không hề, hợp rơ từng centimet luôn. Phải chụp kiểu ảnh đăng lên mạng xã hội ngay và luôn.' }
      ]
    }
  ]
};

// Generates high-quality fallback structures dynamically if not custom defined
function generateProceduralStructures(topic: Topic): Structure[] {
  const baseWords = topic.words || [];
  const list: Structure[] = [];
  
  // Create 5 structured sentence patterns based on the vocabulary words of the topic!
  for (let i = 0; i < 5; i++) {
    const wordObj = baseWords[i] || baseWords[i % baseWords.length] || { word: 'speak english', translation: 'giao tiếp tiếng Anh' };
    const w = wordObj.word;
    const t = wordObj.translation || 'kết nối';
    
    switch (i) {
      case 0:
        list.push({
          phrase: `How do you define "${w}"?`,
          meaning: `Hỏi về ý nghĩa từ vựng ${w}.`,
          vietnamese: `Hỏi nghĩa của cụm "${t}".`,
          business: { 
            phrase: `Could you clarify the operational context of "${w}"?`, 
            example: `Could you clarify the operational context of "${w}" in our scope?`, 
            translation: `Anh/chị có thể làm rõ bối cảnh ứng dụng của từ "${w}" trong phạm vi của chúng ta không?` 
          },
          casualStyle: { 
            phrase: `What does "${w}" actually mean in conversation?`, 
            example: `What does "${w}" actually mean when chatting?`, 
            translation: `Thế cụm từ "${w}" thực chất có nghĩa là gì khi nói chuyện vậy bạn?` 
          },
          superCasual: { 
            phrase: `What's "${w}" slang for?`, 
            example: `Hey, what's "${w}" slang for in these streets?`, 
            translation: `Ê, cái từ "${w}" thì giang hồ hay gọi là gì vậy?` 
          }
        });
        break;
      case 1:
        list.push({
          phrase: `Can you demonstrate "${w}"?`,
          meaning: `Yêu cầu làm mẫu thực tế về ${w}.`,
          vietnamese: `Bạn có thể chỉ rõ hơn về "${t}" không?`,
          business: { 
            phrase: `Would you mind presenting an empirical case of "${w}"?`, 
            example: `Would you mind presenting an empirical case of "${w}" in action?`, 
            translation: `Anh/chị có phiền đưa ra một trường hợp cụ thể thực tế của việc "${w}" không?` 
          },
          casualStyle: { 
            phrase: `Can you show me a simple example of "${w}"?`, 
            example: `Can you show me a simple example of "${w}" in use?`, 
            translation: `Bạn có thể lấy ví dụ đơn giản minh họa cho "${w}" được không?` 
          },
          superCasual: { 
            phrase: `Show me how to work "${w}".`, 
            example: `Yo, show me how to work "${w}" real quick!`, 
            translation: `Này, quẹt qua xem làm sao để sài từ "${w}" cái coi!` 
          }
        });
        break;
      case 2:
        list.push({
          phrase: `I love focusing on "${w}".`,
          meaning: `Bày tỏ sự yêu thích về ${w}.`,
          vietnamese: `Tôi vô cùng say mê "${t}".`,
          business: { 
            phrase: `I maintain a professional advocacy for "${w}" initiatives.`, 
            example: `I maintain a professional advocacy for "${w}" initiatives.`, 
            translation: `Tôi duy trì sự ủng hộ chuyên nghiệp dành cho các hoạt động sáng kiến liên quan đến "${w}".` 
          },
          casualStyle: { 
            phrase: `I always enjoy practicing and learning "${w}".`, 
            example: `I always enjoy practicing "${w}" in my free time.`, 
            translation: `Mình luôn luôn thích thực hành học hỏi thêm về "${w}" lắm.` 
          },
          superCasual: { 
            phrase: `I'm super obsessed with "${w}".`, 
            example: `No cap, I'm super obsessed with "${w}" lately.`, 
            translation: `Thề không điêu, dạo này tôi cuồng cái món "${w}" này dã man.` 
          }
        });
        break;
      case 3:
        list.push({
          phrase: `Is "${w}" critical?`,
          meaning: `Hỏi tính quan trọng của khái niệm ${w}.`,
          vietnamese: `Liệu việc "${t}" có thực sự cốt lõi không?`,
          business: { 
            phrase: `Is "${w}" deemed a mission-critical asset for this project?`, 
            example: `Is "${w}" deemed critical for the key result metrics?`, 
            translation: `Việc cấu trúc "${w}" có được xem là tài sản mang tính sống còn đối với các chỉ số đo lường không?` 
          },
          casualStyle: { 
            phrase: `Does "${w}" really matter that much for us?`, 
            example: `Does "${w}" really matter that much in our daily routine?`, 
            translation: `Món "${w}" này có thực sự quan trọng đến thế với chúng mình không?` 
          },
          superCasual: { 
            phrase: `Is "${w}" even a big deal?`, 
            example: `Bro, is "${w}" even a big deal or what?`, 
            translation: `Ông ơi, cái trò "${w}" này quan trọng lắm cơ á?` 
          }
        });
        break;
      case 4:
        list.push({
          phrase: `Let's discuss "${w}".`,
          meaning: `Đề xuất thảo luận về ${w}.`,
          vietnamese: `Chúng ta hãy bàn luận về "${t}".`,
          business: { 
            phrase: `Let us deliberate on our strategic path regarding "${w}".`, 
            example: `Let us deliberate on our strategic path regarding "${w}".`, 
            translation: `Chúng ta cùng thảo luận sâu về hướng đi chiến lược của chúng ta liên quan đến khía cạnh "${w}".` 
          },
          casualStyle: { 
            phrase: `Let's talk a bit about your favorite "${w}".`, 
            example: `Let's talk a bit about your favorite "${w}" over coffee.`, 
            translation: `Chúng mình cùng nói một chút về sở thích "${w}" bên ly cà phê đi.` 
          },
          superCasual: { 
            phrase: `Let's gossip about "${w}".`, 
            example: `Come on, let's gossip about "${w}", spill the tea!`, 
            translation: `Lại đây, tọc mạch chút xíu về cái vụ "${w}" coi, buôn dưa lê đi!` 
          }
        });
        break;
    }
  }
  return list;
}

// Generates high-quality fallback dialogues dynamically for other lessons
function generateProceduralDialogues(topic: Topic): any[] {
  const baseWords = topic.words || [];
  const w1 = baseWords[0]?.word || 'communication';
  const w2 = baseWords[1]?.word || 'accent';
  const t1 = baseWords[0]?.translation || 'giao tiếp';
  const t2 = baseWords[1]?.translation || 'phát âm';

  return [
    {
      type: 'pair',
      school: 'business',
      title: '👔 Executive Strategic Alignment',
      participants: [
        { name: 'Director Smith', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Smith', role: 'Executive' },
        { name: 'Manager Taylor', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Taylor', role: 'L&D Manager' }
      ],
      lines: [
        { participant: 'Director Smith', text: `Good morning. We need to align our workforce resources with contemporary competence in ${w1}.`, translation: `Chào buổi sáng. Chúng ta cần định hình năng lực của đội ngũ nhân sự phù hợp với xu thế hiện đại về ${t1}.` },
        { participant: 'Manager Taylor', text: `We are rolling out training modules focusing highly on ${w2} metrics next month.`, translation: `Chúng tôi sẽ triển khai các mô-đun đào tạo tập trung sâu vào các chỉ tiêu đo lường ${t2} vào tháng tới.` },
        { participant: 'Director Smith', text: `Excellent initiative. This guarantees long term strategic outcomes for our corporate clients.`, translation: `Sáng kiến rất tuyệt vời. Việc này đảm bảo mang lại hiệu quả chiến lược lâu dài cho khách hàng của chúng ta.` }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: '💬 Team Coffee Chat',
      participants: [
        { name: 'Brian', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Brian', role: 'Senior Designer' },
        { name: 'Sophia', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sophia', role: 'Copywriter' }
      ],
      lines: [
        { participant: 'Brian', text: `Hey Sophia! Have you checked out any good strategies to practice our ${w1} recently?`, translation: `Này Sophia! Gần đây bạn có tìm được phương pháp nào hay để thực hành kĩ năng ${t1} không?` },
        { participant: 'Sophia', text: `Oh yeah! I try to focus on speaking with native speakers and studying ${w2} elements daily.`, translation: `Ồ có chứ! Mình cố gắng tập nói chuyện với người bản xứ và học hỏi về khía cạnh ${t2} hàng ngày.` },
        { participant: 'Brian', text: `Sounds like a solid plan. Mind if I tag along for your next practice run?`, translation: `Nghe có vẻ là kế hoạch rất chắc chắn đấy. Mình tham gia buổi tập tới cùng bạn được không?` }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: '⚡ Weekend Chill Conversation',
      participants: [
        { name: 'Gavin', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Gavin', role: 'Skater' },
        { name: 'Kylie', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kylie', role: 'Syllable master' }
      ],
      lines: [
        { participant: 'Gavin', text: `Yo! Let's do some funny drills on ${w1} today, my friend.`, translation: `Yo! Hôm nay bồ tèo làm vài bài luyện nói về ${t1} cho vui nhộn đi.` },
        { participant: 'Kylie', text: `Haha real talk, let's flex some absolute masterclass in ${w2} first.`, translation: `Haha chân thành đấy, biểu diễn bản lĩnh masterclass phát âm ${t2} đỉnh chóp trước đã nào.` },
        { participant: 'Gavin', text: `Ahaha bet! Slang is basic, let's spill the tea!`, translation: `Ahaha hứa nhé bồ tèo! Từ lóng chỉ là chuyện muỗi thôi, kể lể tiếp đi coi!` }
      ]
    }
  ];
}

// Global enrichment function called on the VOCAB_TOPICS or activeTopic
export function augmentTopic(topic: Topic): Topic {
  let mappedWords = topic.words;
  if (mappedWords) {
    mappedWords = mappedWords.map(w => {
      const match = IDIOMS_DICTIONARY[w.word.trim()];
      if (match) {
        return {
          ...w,
          definition: match.definition,
          example: match.example,
          blankSentence: match.blankSentence
        };
      }
      return w;
    });
  }

  // If it is a review topic, return with mapped words, and bypass extra generation
  if (topic.id.startsWith('review_')) {
    return {
      ...topic,
      words: mappedWords
    };
  }

  // Bind custom structures if handcrafted, otherwise prefer defined topic level, otherwise procedurally generate
  const mappedStructures = HANDCRAFTED_STRUCTURES[topic.id] || (topic.structures as Structure[]) || generateProceduralStructures(topic);
  
  // Bind custom dialogues if handcrafted, otherwise prefer defined topic level, otherwise procedurally generate
  const mappedDialogues = HANDCRAFTED_DIALOGUES[topic.id] || (topic.dialogues as any[]) || generateProceduralDialogues(topic);

  // Return augmented topic structure
  return {
    ...topic,
    words: mappedWords,
    structures: mappedStructures,
    dialogues: mappedDialogues
  };
}
