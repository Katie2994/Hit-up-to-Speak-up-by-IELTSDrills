// Distinct 2-tier Dialogues (Casual Standard, Super Casual) for Lessons parent-child-01 to parent-child-10
// Guarantees authentic, warm, realistic family conversations and crisp, non-cringe texting/short interactions.

import { Dialogue } from './comm-students-dialogues';

export const PARENT_CHILD_DIALOGUES_PART1: Record<string, Dialogue[]> = {
  'parent-child-01': [
    {
      type: 'pair',
      school: 'casual',
      title: 'Dinner Table Highs & Lows Catch-up',
      participants: [
        { name: 'Mom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MomCasual01', role: 'Mother' },
        { name: 'Khang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KhangCasual01', role: 'Son' }
      ],
      lines: [
        { participant: 'Mom', text: "Hey Khang, let's do our dinner check-in! What was your high and your low for today?", translation: "Khang ơi, tụi mình cùng chia sẻ niềm vui với nỗi buồn trong ngày nhé! Hôm nay của con có điểm gì vui và điểm gì chưa ưng ý nè?" },
        { participant: 'Khang', text: "Well, the low was definitely getting stuck in the rain after soccer practice. My shoes got totally soaked.", translation: "Dạ, điểm buồn nhất chắc chắn là lúc đá bóng xong bị mắc mưa ạ. Giày con ướt sũng luôn." },
        { participant: 'Mom', text: "Oh, that's such an uncomfortable feeling! How about your high point?", translation: "Ôi, cảm giác giày ướt khó chịu lắm luôn á! Thế còn niềm vui hôm nay là gì con?" },
        { participant: 'Khang', text: "My team scored three goals and I made an assist! And coming home to your warm chicken soup made everything better.", translation: "Đội con ghi được 3 bàn và con kiến tạo một bàn ạ! Với lại về nhà được ăn canh gà nóng của mẹ là thấy ấm lòng liền." },
        { participant: 'Mom', text: "That's an awesome comeback! Grab another bowl, you worked hard today.", translation: "Tuyệt vời quá con trai! Múc thêm bát nữa ăn cho ấm người nha, hôm nay con đã nỗ lực nhiều rồi." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Ride-Home Text Check',
      participants: [
        { name: 'Dad', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DadQuick01', role: 'Dad' },
        { name: 'Khang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KhangQuick01', role: 'Son' }
      ],
      lines: [
        { participant: 'Dad', text: "Leaving the office now. Want me to swing by school and pick you up?", translation: "Bố vừa rời văn phòng nè. Bố ghé trường đón con luôn nhé?" },
        { participant: 'Khang', text: "Yes please! Waiting by the school gate.", translation: "Dạ tuyệt quá bố ơi! Con đang đứng đợi ở cổng trường nè." },
        { participant: 'Dad', text: "There in 5! Grabbed some hot bao buns for you.", translation: "5 phút nữa bố tới nha! Có mua sẵn bánh bao nóng cho con nè." },
        { participant: 'Khang', text: "You're the best, Dad!", translation: "Bố là số một luôn!" }
      ]
    }
  ],

  'parent-child-02': [
    {
      type: 'pair',
      school: 'casual',
      title: 'Empathy & Validation after a Disappointing Test Result',
      participants: [
        { name: 'Dad', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DadCasual02', role: 'Father' },
        { name: 'An', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AnCasual02', role: 'Daughter' }
      ],
      lines: [
        { participant: 'An', text: "Dad, I got a C on my chemistry midterm today. I studied the entire weekend and still couldn't solve the lab questions.", translation: "Bố ơi, hôm nay bài thi giữa kỳ môn Hóa con chỉ được điểm C thôi. Con đã ôn bài suốt cả cuối tuần mà vẫn không làm được phần bài tập thực hành." },
        { participant: 'Dad', text: "Come sit here with me, An. It sounds like you're feeling really frustrated and let down after putting in so much honest effort.", translation: "Lại đây ngồi với bố nào An. Bố nghe là thấy con đang rất hụt hẫng và buồn bực vì mình đã bỏ ra bao nhiêu công sức học tập." },
        { participant: 'An', text: "I just feel like all that studying was completely useless.", translation: "Con cứ thấy công sức ôn thi của mình đổ sông đổ biển hết rồi." },
        { participant: 'Dad', text: "It wasn't useless at all. One test score doesn't define your intelligence or worth. I'm proud of how hard you worked, and we'll go through the tricky problems together whenever you're ready.", translation: "Không hề vô ích chút nào đâu con. Một bài kiểm tra không thể định nghĩa trí tuệ hay giá trị của con. Bố tự hào vì con đã rất nỗ lực, và bố con mình sẽ cùng xem lại những câu khó khi nào con thấy thoải mái nhé." },
        { participant: 'An', text: "Thanks Dad, hearing you say that takes a huge weight off my chest.", translation: "Con cảm ơn bố, nghe bố nói vậy con thấy nhẹ nhõm đi nhiều lắm ạ." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Comforting Bedtime Hug',
      participants: [
        { name: 'Mom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MomQuick02', role: 'Mom' },
        { name: 'An', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AnQuick02', role: 'Daughter' }
      ],
      lines: [
        { participant: 'An', text: "Rough day today, Mom. Brain feels completely fried.", translation: "Hôm nay đuối quá mẹ ơi. Đầu óc con mụ mị hết cả rồi." },
        { participant: 'Mom', text: "Big hug for you! Drink some warm milk and go straight to bed.", translation: "Ôm con một cái thật chặt nè! Uống cốc sữa ấm rồi đi ngủ sớm nha con." },
        { participant: 'An', text: "Tucking in now. Love you, Mom.", translation: "Con đắp chăn ngủ đây ạ. Yêu mẹ nhiều." },
        { participant: 'Mom', text: "Love you too, sweet dreams!", translation: "Yêu con, ngủ ngon nhé!" }
      ]
    }
  ],

  'parent-child-03': [
    {
      type: 'pair',
      school: 'casual',
      title: 'Family Agreement on Weekend Curfew & Device Screen Time',
      participants: [
        { name: 'Mom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MomCasual03', role: 'Mother' },
        { name: 'Minh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MinhCasual03', role: 'Teen Son' }
      ],
      lines: [
        { participant: 'Minh', text: "Mom, my friends are going to the mall and then watching a movie this Saturday. Can I stay out until 11:30 PM?", translation: "Mẹ ơi, thứ Bảy này các bạn con rủ đi trung tâm thương mại rồi xem phim. Con ở lại chơi đến 11 giờ rưỡi đêm được không mẹ?" },
        { participant: 'Mom', text: "I'm glad you're planning fun outings with friends, Minh. But 11:30 is a bit too late for public transit safety. How about a compromise?", translation: "Mẹ rất vui vì con có kế hoạch đi chơi cùng bạn bè, Minh à. Nhưng 11h30 thì hơi muộn để đi xe buýt về an toàn. Mẹ con mình thỏa hiệp thế này nhé?" },
        { participant: 'Minh', text: "What do you propose?", translation: "Mẹ tính thế nào ạ?" },
        { participant: 'Mom', text: "If the movie finishes at 10 PM, Dad can pick you and your friends up directly from the cinema. You get to enjoy the full movie, and we know you're getting home safely.", translation: "Nếu phim chiếu xong lúc 10 giờ, bố sẽ lái xe đến đón con và các bạn ngay tại rạp. Con vừa xem trọn bộ phim mà bố mẹ lại hoàn toàn an tâm về sự an toàn của con." },
        { participant: 'Minh', text: "That's actually awesome! My friends won't have to wait for the late bus either. Deal!", translation: "Thế thì tuyệt vời quá mẹ ơi! Các bạn con cũng đỡ phải đợi xe buýt đêm. Chốt kèo mẹ nhé!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Curfew Check-in Text',
      participants: [
        { name: 'Minh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MinhQuick03', role: 'Son' },
        { name: 'Dad', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DadQuick03', role: 'Dad' }
      ],
      lines: [
        { participant: 'Minh', text: "Dad, movie ended! Standing outside cinema exit right now.", translation: "Bố ơi, phim hết rồi ạ! Con đang đứng ở cửa ra rạp chiếu phim nè." },
        { participant: 'Dad', text: "Pulling into the pickup lane in 2 mins. Look for the silver car!", translation: "Bố đang rẽ vào làn đón xe trong 2 phút nha. Để ý xe màu bạc nhé!" },
        { participant: 'Minh', text: "Spot you! Heading over.", translation: "Con thấy xe rồi ạ! Đang đi qua đây." },
        { participant: 'Dad', text: "Hop in!", translation: "Lên xe con!" }
      ]
    }
  ],

  'parent-child-04': [
    {
      type: 'pair',
      school: 'casual',
      title: 'Praising the Process & Effort, Not Just the Trophy',
      participants: [
        { name: 'Dad', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DadCasual04', role: 'Father' },
        { name: 'Bao', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BaoCasual04', role: 'Son' }
      ],
      lines: [
        { participant: 'Bao', text: "Dad, our debate team won second place today! I really wanted the gold trophy though.", translation: "Bố ơi, hôm nay đội tranh biện của con đạt giải Nhì! Cơ mà con vẫn thích cúp Vàng hơn cơ." },
        { participant: 'Dad', text: "Second place out of forty teams is a phenomenal achievement, Bao! But what impressed me most wasn't the trophy—it was your perseverance.", translation: "Giải Nhì trong số 40 đội là thành tích cực kỳ đáng nể đó Bao! Nhưng điều làm bố khâm phục nhất không phải chiếc cúp—mà chính là sự bền bỉ của con." },
        { participant: 'Bao', text: "Really? You noticed?", translation: "Thật hả bố? Bố cũng thấy vậy ạ?" },
        { participant: 'Dad', text: "Of course! You woke up at 6 AM every day for three weeks to rehearse rebuttal arguments. Seeing you stay calm under cross-examination was true courage.", translation: "Tất nhiên rồi! Suốt 3 tuần qua ngày nào con cũng dậy từ 6h sáng để luyện các luận điểm phản biện. Nhìn con bình tĩnh đối đáp trước các câu hỏi hóc búa, đó mới là bản lĩnh thực sự." },
        { participant: 'Bao', text: "Thanks Dad. Knowing you value my preparation means more than the medal.", translation: "Con cảm ơn bố. Biết bố trân trọng quá trình chuẩn bị của con còn ý nghĩa hơn cả tấm huy chương nữa ạ." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Proud Fist Bump',
      participants: [
        { name: 'Mom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MomQuick04', role: 'Mom' },
        { name: 'Bao', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BaoQuick04', role: 'Son' }
      ],
      lines: [
        { participant: 'Mom', text: "Heard you crushed your piano presentation today!", translation: "Mẹ nghe nói hôm nay con biểu diễn piano xuất sắc lắm nha!" },
        { participant: 'Bao', text: "Nails didn't shake once! Practice paid off.", translation: "Tay con không run một nhịp nào luôn! Luyện tập có kết quả rồi mẹ ạ." },
        { participant: 'Mom', text: "Proud of your dedication, sweetie! Fist bump!", translation: "Tự hào về sự chăm chỉ của con lắm! Đụng nắm đấm chúc mừng nào!" },
        { participant: 'Bao', text: "Boom! Thanks Mom!", translation: "Yeah! Cảm ơn mẹ nha!" }
      ]
    }
  ],

  'parent-child-05': [
    {
      type: 'pair',
      school: 'casual',
      title: 'Calm De-escalation of Sibling Dispute over Shared Space',
      participants: [
        { name: 'Mom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MomCasual05', role: 'Mother' },
        { name: 'Linh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LinhCasual05', role: 'Older Sister' }
      ],
      lines: [
        { participant: 'Linh', text: "Mom! Tom borrowed my iPad without asking again and left peanut butter fingerprints all over the screen!", translation: "Mẹ ơi! Thằng Tom lại tự ý lấy iPad của con dùng mà không thèm xin phép, còn bôi đầy dấu tay bơ đậu phộng lên màn hình nữa!" },
        { participant: 'Mom', text: "Take a deep breath with me, Linh. I completely understand why you're upset; your personal property needs to be respected.", translation: "Hít sâu thở đều cùng mẹ nào Linh. Mẹ hoàn toàn hiểu vì sao con bực mình; đồ dùng cá nhân của con cần phải được tôn trọng." },
        { participant: 'Linh', text: "He does it every single afternoon! It's so annoying.", translation: "Chiều nào nó cũng làm thế hết mẹ ạ! Bực mình không chịu được." },
        { participant: 'Mom', text: "Let's call Tom over together. We will establish a clear house rule: he must ask for permission first, wash his hands, and clean the screen if you agree to lend it. How does that sound?", translation: "Mẹ con mình cùng gọi Tom qua đây nhé. Tụi mình sẽ đặt ra quy tắc rõ ràng: em phải hỏi xin phép trước, rửa sạch tay và lau sạch màn hình nếu con đồng ý cho mượn. Con thấy như vậy được không?" },
        { participant: 'Linh', text: "That sounds fair. As long as he actually asks first.", translation: "Dạ thế thì công bằng ạ. Miễn là nó phải hỏi xin phép đàng hoàng trước." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick House Reset Call',
      participants: [
        { name: 'Dad', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DadQuick05', role: 'Dad' },
        { name: 'Linh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LinhQuick05', role: 'Daughter' }
      ],
      lines: [
        { participant: 'Dad', text: "Hey kiddos, stop shouting in the hall! Five-minute cooldown in your rooms.", translation: "Mấy đứa ơi, ngưng cãi cọ ngoài hành lang nha! Vào phòng nghỉ 5 phút cho hạ hỏa nào." },
        { participant: 'Linh', text: "Okay Dad, taking a breather.", translation: "Dạ bố, con vào phòng hít thở đây ạ." },
        { participant: 'Dad', text: "Good. We'll solve it calmly in the living room in 5.", translation: "Tốt lắm. 5 phút nữa ra phòng khách nói chuyện êm đẹp nhé." },
        { participant: 'Linh', text: "Got it.", translation: "Dạ con rõ rồi ạ." }
      ]
    }
  ],

  'parent-child-06': [
    {
      type: 'pair',
      school: 'casual',
      title: 'Easing Exam Anxiety with Perspective and Balance',
      participants: [
        { name: 'Dad', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DadCasual06', role: 'Father' },
        { name: 'Khoa', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KhoaCasual06', role: 'Son' }
      ],
      lines: [
        { participant: 'Khoa', text: "Dad, my national entrance exams are in two weeks. My stomach is in knots and I can barely sleep at night.", translation: "Bố ơi, còn hai tuần nữa là đến kỳ thi vào cấp ba rồi. Bụng dạ con cứ cồn cào lo lắng, đêm hầu như chẳng ngủ được." },
        { participant: 'Dad', text: "I can see the tension in your shoulders, Khoa. It's completely natural to feel nervous before a major milestone.", translation: "Bố nhìn dáng con là thấy vai căng cứng rồi Khoa à. Đứng trước một kỳ thi quan trọng thì hồi hộp là điều hết sức tự nhiên con ơi." },
        { participant: 'Khoa', text: "What if I blank out on exam day and let everyone down?", translation: "Lỡ vào phòng thi con bị đứng hình quên hết chữ, làm mọi người thất vọng thì sao hả bố?" },
        { participant: 'Dad', text: "Listen to me: your mother and I love you unconditionally for who you are, never for an exam ranking. You have prepared diligently. Tonight, close the books at 9 PM, let's walk the dog together, and give your mind rest.", translation: "Nghe bố dặn này: bố mẹ yêu thương con vô điều kiện vì chính bản thân con, chứ không bao giờ vì điểm số hay thứ hạng. Con đã ôn luyện rất chăm chỉ rồi. Tối nay 9 giờ đóng sách lại, hai bố con mình cùng dắt chó đi dạo để đầu óc con được nghỉ ngơi nhé." },
        { participant: 'Khoa', text: "I really needed to hear that, Dad. A walk outside sounds wonderful.", translation: "Con thực sự rất cần nghe những lời này của bố. Đi dạo một lát ngoài trời chắc sẽ dễ chịu lắm ạ." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Midnight Study Snack Delivery',
      participants: [
        { name: 'Mom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MomQuick06', role: 'Mom' },
        { name: 'Khoa', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KhoaQuick06', role: 'Son' }
      ],
      lines: [
        { participant: 'Mom', text: "Still studying? Brought you sliced apples and honey tea.", translation: "Vẫn đang học bài hả con? Mẹ mang táo gọt với trà mật ong cho con nè." },
        { participant: 'Khoa', text: "Smells so good! Just finishing this practice test.", translation: "Thơm quá mẹ ơi! Con làm nốt đề thi thử này thôi ạ." },
        { participant: 'Mom', text: "Wrap it up by 10:30, sleep is fuel for your brain!", translation: "10h30 nghỉ đi ngủ nha, ngủ đủ giấc thì não mới nạp năng lượng tốt được!" },
        { participant: 'Khoa', text: "Promised, 10:30 sharp!", translation: "Con hứa, đúng 10h30 con tắt đèn liền!" }
      ]
    }
  ],

  'parent-child-07': [
    {
      type: 'pair',
      school: 'casual',
      title: 'Fair Chore Distribution & Teamwork Spirit',
      participants: [
        { name: 'Mom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MomCasual07', role: 'Mother' },
        { name: 'Vy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=VyCasual07', role: 'Daughter' }
      ],
      lines: [
        { participant: 'Vy', text: "Mom, why do I always have to empty the dishwasher and take out the trash while my brother just feeds the cat?", translation: "Mẹ ơi, sao lúc nào con cũng phải úp bát đĩa với đổ rác, trong khi em trai chỉ mỗi việc cho mèo ăn thôi vậy mẹ?" },
        { participant: 'Mom', text: "That's a very valid observation, Vy. Our chore chart hasn't been updated since Lucas turned ten.", translation: "Con nhận xét rất đúng đó Vy. Bảng phân công việc nhà của tụi mình chưa cập nhật lại từ lúc cu Lucas lên mười tuổi đến giờ." },
        { participant: 'Vy', text: "It feels really unfair when I have two hours of homework on top of chores.", translation: "Con thấy không công bằng chút nào khi con vừa phải làm bài tập 2 tiếng vừa phải gánh hết việc nhà." },
        { participant: 'Mom', text: "You're right. Let's rotate weekly: this week you handle the cat and wiping dining tables, while Lucas takes the dishwasher and trash. We are a family team and everyone pulls their weight.", translation: "Con nói đúng. Tụi mình sẽ xoay ca hàng tuần nha: tuần này con cho mèo ăn và lau bàn ăn, còn Lucas sẽ úp bát đĩa và đi đổ rác. Nhà mình là một đội và ai cũng phải có trách nhiệm chung." },
        { participant: 'Vy', text: "I love that rotation plan! Thanks for listening to me, Mom.", translation: "Con thích cách luân phiên này lắm mẹ ơi! Cảm ơn mẹ đã lắng nghe con nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Chore Hand-off Message',
      participants: [
        { name: 'Vy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=VyQuick07', role: 'Daughter' },
        { name: 'Dad', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DadQuick07', role: 'Dad' }
      ],
      lines: [
        { participant: 'Vy', text: "Dad, finished folding the laundry! Can I head to Sarah's house now?", translation: "Bố ơi, con gấp quần áo xong hết rồi ạ! Giờ con qua nhà bạn Sarah chơi được chưa bố?" },
        { participant: 'Dad', text: "Checked the living room, basket is empty and neat! Have fun at Sarah's!", translation: "Bố xem phòng khách rồi, giỏ đồ sạch sẽ ngăn nắp lắm! Đi chơi với Sarah vui vẻ nha con!" },
        { participant: 'Vy', text: "Thanks Dad, home before 6!", translation: "Cảm ơn bố, trước 6h con về nhé!" },
        { participant: 'Dad', text: "See you at dinner!", translation: "Tối gặp lại nha!" }
      ]
    }
  ],

  'parent-child-08': [
    {
      type: 'pair',
      school: 'casual',
      title: 'A Parent\'s Sincere Apology for Losing Patience',
      participants: [
        { name: 'Mom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MomCasual08', role: 'Mother' },
        { name: 'Tuan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TuanCasual08', role: 'Son' }
      ],
      lines: [
        { participant: 'Mom', text: "Tuan, do you have a few minutes? I wanted to apologize for snapping at you before school this morning.", translation: "Tuấn ơi, con có rảnh vài phút không? Mẹ muốn xin lỗi con vì sáng nay trước khi đi học mẹ đã gắt gỏng với con." },
        { participant: 'Tuan', text: "I was really surprised, Mom. I was just looking for my science notebook.", translation: "Sáng nay con bất ngờ lắm mẹ ạ. Con chỉ đang tìm cuốn vở môn Khoa học thôi mà." },
        { participant: 'Mom', text: "I know, and my reaction was unfair. I was stressed about an urgent work email and took my tension out on you. That wasn't okay, and I am genuinely sorry.", translation: "Mẹ biết, và phản ứng của mẹ như vậy là không đúng. Lúc đó mẹ đang bị căng thẳng vì một email công việc gấp nên đã trút giận lên con. Làm thế là sai, và mẹ thực lòng xin lỗi con." },
        { participant: 'Tuan', text: "Thank you for saying that, Mom. It made me feel pretty hurt this morning, but I forgive you.", translation: "Con cảm ơn mẹ đã nói vậy ạ. Sáng nay con thấy tủi thân lắm, nhưng con tha lỗi cho mẹ rồi." },
        { participant: 'Mom', text: "I appreciate your generous heart, Tuan. Next time I feel overwhelmed, I will take a breath before speaking.", translation: "Mẹ rất cảm ơn tấm lòng bao dung của con, Tuấn. Lần sau nếu thấy quá tải, mẹ sẽ hít thở sâu trước khi cất lời." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Post-Spill Forgiveness',
      participants: [
        { name: 'Tuan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TuanQuick08', role: 'Son' },
        { name: 'Dad', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DadQuick08', role: 'Dad' }
      ],
      lines: [
        { participant: 'Tuan', text: "Dad, so sorry! Dropped the juice carton and spilled on the kitchen tile.", translation: "Bố ơi, con xin lỗi! Con lỡ tay làm rơi hộp nước cam đổ ra sàn bếp rồi ạ." },
        { participant: 'Dad', text: "Accidents happen, buddy! Grab the mop in the pantry and we'll wipe it together.", translation: "Chuyện lỡ tay thôi con trai! Lấy cây lau nhà trong kho ra rồi hai bố con mình cùng lau nhé." },
        { participant: 'Tuan', text: "Mopping right now, thanks for not getting mad!", translation: "Con đang lau đây ạ, cảm ơn bố đã không mắng con!" },
        { participant: 'Dad', text: "All good, teamwork solves spills!", translation: "Không sao con, cùng làm là sạch bong ngay!" }
      ]
    }
  ],

  'parent-child-09': [
    {
      type: 'pair',
      school: 'casual',
      title: 'Discussing Budgeting, Needs vs. Wants, and Saving Up',
      participants: [
        { name: 'Dad', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DadCasual09', role: 'Father' },
        { name: 'Nam', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NamCasual09', role: 'Son' }
      ],
      lines: [
        { participant: 'Nam', text: "Dad, the new limited-edition sneakers dropped today! Can you buy them for me? All the guys at school are getting a pair.", translation: "Bố ơi, đôi giày thể thao phiên bản giới hạn vừa ra mắt hôm nay! Bố mua cho con được không bố? Mấy đứa bạn ở trường ai cũng mua một đôi hết á." },
        { participant: 'Dad', text: "Those look very stylish, Nam! But at two hundred dollars, let's categorize them: is this a necessity, or a want?", translation: "Đôi giày trông phong cách ghê Nam! Nhưng với giá 200 đô la thì bố con mình cùng phân loại nhé: đây là nhu cầu thiết yếu hay là mong muốn sở thích nè?" },
        { participant: 'Nam', text: "Well... my current running shoes still fit fine, so I guess it's a want.", translation: "Dạ... đôi giày chạy hiện tại của con vẫn vừa vặn tốt, nên chắc đây là mong muốn sở thích thôi ạ." },
        { participant: 'Dad', text: "Good self-awareness! Here is my proposal: your birthday is in two months. If you save half the cost from your weekly allowance, I will happily match the other half as your birthday present.", translation: "Nhận thức rất tốt con trai! Bố đề xuất thế này nhé: hai tháng nữa là sinh nhật con rồi. Nếu con tiết kiệm được một nửa số tiền từ tiền tiêu vặt hàng tuần, bố sẽ sẵn sàng bù nửa còn lại làm quà sinh nhật cho con." },
        { participant: 'Nam', text: "That sounds like a fair challenge! I'm going to start putting my allowance into my savings jar right now.", translation: "Nghe như một thử thách rất công bằng ạ! Giờ con bắt đầu bỏ tiền tiêu vặt vào hũ tiết kiệm liền đây." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Allowance Check Text',
      participants: [
        { name: 'Nam', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NamQuick09', role: 'Son' },
        { name: 'Mom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MomQuick09', role: 'Mom' }
      ],
      lines: [
        { participant: 'Nam', text: "Mom, transferred my weekly chores into the savings jar! $20 saved towards the sneakers!", translation: "Mẹ ơi, con làm xong việc nhà và bỏ tiền vào hũ tiết kiệm rồi! Tiết kiệm được 20 đô cho đôi giày rồi nè mẹ!" },
        { participant: 'Mom', text: "Awesome budgeting, Nam! Proud of your self-discipline!", translation: "Quản lý chi tiêu đỉnh quá Nam ơi! Rất tự hào về tính tự giác của con!" },
        { participant: 'Nam', text: "Halfway to my goal!", translation: "Được nửa chặng đường rồi mẹ ạ!" },
        { participant: 'Mom', text: "Keep it up!", translation: "Cố gắng phát huy nha!" }
      ]
    }
  ],

  'parent-child-10': [
    {
      type: 'pair',
      school: 'casual',
      title: 'Navigating Peer Pressure & Standing Up for Personal Values',
      participants: [
        { name: 'Mom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MomCasual10', role: 'Mother' },
        { name: 'Mai', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MaiCasual10', role: 'Teen Daughter' }
      ],
      lines: [
        { participant: 'Mai', text: "Mom, can I talk to you? Some popular girls in my class were making fun of a new student's lunchbox today, and they expected me to laugh along.", translation: "Mẹ ơi, con tâm sự với mẹ chút được không? Hôm nay mấy bạn nữ nổi tiếng trong lớp trêu chọc hộp cơm trưa của một bạn học sinh mới, rồi mấy bạn đó bắt con phải hùa theo cười cợt." },
        { participant: 'Mom', text: "Thank you for coming to me, Mai. That must have felt really uncomfortable. How did you react in the moment?", translation: "Cảm ơn con đã chủ động tâm sự với mẹ, Mai à. Lúc đó chắc con cảm thấy rất khó xử đúng không. Khi đó con đã phản ứng thế nào?" },
        { participant: 'Mai', text: "I just stayed quiet and walked away, but I felt guilty for not defending her.", translation: "Con chỉ im lặng rồi bỏ đi chỗ khác, nhưng trong lòng con thấy áy náy vì đã không lên tiếng bảo vệ bạn ấy." },
        { participant: 'Mom', text: "Walking away took courage; you refused to join in on cruelty. Tomorrow, why don't you sit with the new girl at lunch? A kind gesture speaks louder than any bully's words.", translation: "Không hùa theo và bỏ đi cũng là một sự dũng cảm rồi con; con đã từ chối tham gia vào việc làm tổn thương người khác. Ngày mai con thử qua ngồi ăn trưa cùng bạn mới xem sao nhé? Một cử chỉ tử tế còn mạnh mẽ hơn ngàn lời trêu chọc đó con." },
        { participant: 'Mai', text: "I'll do that! I can share my homemade cookies with her.", translation: "Con sẽ làm như vậy mẹ ạ! Con có thể chia bánh quy mẹ làm cho bạn ấy nữa." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick After-School Pep Talk',
      participants: [
        { name: 'Mai', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MaiQuick10', role: 'Daughter' },
        { name: 'Dad', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DadQuick10', role: 'Dad' }
      ],
      lines: [
        { participant: 'Mai', text: "Dad, sat with the new girl at lunch! Her name is Clara and she's super sweet.", translation: "Bố ơi, trưa nay con ngồi ăn cùng bạn mới rồi! Bạn ấy tên Clara và dễ thương lắm luôn." },
        { participant: 'Dad', text: "That makes my day, Mai! True kindness in action.", translation: "Nghe con kể bố vui cả ngày luôn Mai à! Hành động tử tế đáng quý lắm con." },
        { participant: 'Mai', text: "Invited her to study together tomorrow too!", translation: "Con rủ bạn ấy mai cùng học nhóm nữa nè!" },
        { participant: 'Dad', text: "So proud of you!", translation: "Bố tự hào về con lắm!" }
      ]
    }
  ]
};
