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
        { participant: 'Mom', text: "Khang, let's do our dinner check-in! What was the highlight of your day at school?", translation: "Khang ơi, đến giờ tâm sự bữa tối của nhà mình rồi! Hôm nay ở trường điều gì làm con vui nhất thế?" },
        { participant: 'Khang', text: "Actually, our debate team won the regional qualifiers! Everyone clapped when the judge called our school name.", translation: "Dạ thật ra hôm nay đội tranh biện của con vừa thắng vòng loại khu vực mẹ ạ! Cả hội trường vỗ tay rần rần lúc giám khảo đọc tên trường mình." },
        { participant: 'Mom', text: "That is fantastic news, sweetie! Your father and I are so proud of your hard work. Any low points or rough moments?", translation: "Tin tuyệt vời quá con yêu ơi! Bố mẹ rất tự hào về sự nỗ lực của con. Thế hôm nay có chuyện gì buồn hay vướng mắc không con?" },
        { participant: 'Khang', text: "Chemistry lab was a bit stressful, but having home-cooked braised pork tonight makes up for everything.", translation: "Tiết thực hành Hóa học hơi áp lực một xíu mẹ ạ, nhưng tối nay về được ăn thịt kho mẹ nấu là bao nhiêu mệt mỏi tan biến hết luôn." }
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
        { participant: 'Dad', text: "Waiting by gate 2 in the silver sedan! Ready?", translation: "Bố đang đỗ xe chờ ở cổng số 2 nha! Con xong chưa?" },
        { participant: 'Khang', text: "Packing my backpack, running out in 2 mins!", translation: "Con đang cất cặp sách, 2 phút nữa con chạy ra liền ạ!" },
        { participant: 'Dad', text: "Take your time, watch for motorbikes.", translation: "Cứ từ từ cẩn thận, ngó trước ngó sau xe máy nha con." },
        { participant: 'Khang', text: "Spotting you now, coming!", translation: "Con thấy xe bố rồi, con ra ngay đây!" }
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
        { name: 'Mai', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MaiCasual02', role: 'Daughter' }
      ],
      lines: [
        { participant: 'Mai', text: "Dad, I studied so hard for math, but I only scored 6.5 on the midterm. I feel so completely useless.", translation: "Bố ơi, con ôn thi Toán kỹ lắm mà bài giữa kỳ con chỉ được có 6.5 thôi. Con thấy bản thân vô tích sự quá chừng." },
        { participant: 'Dad', text: "Come sit next to me, Mai. I can see how deeply disappointed and frustrated you are right now.", translation: "Lại đây ngồi với bố nào Mai. Bố nhìn là thấy con đang thất vọng và buồn bã nhiều thế nào rồi." },
        { participant: 'Mai', text: "I just feel like crying. My whole week is ruined.", translation: "Con chỉ muốn khóc thôi bố ạ. Cả tuần này của con coi như hỏng bét." },
        { participant: 'Dad', text: "It is completely okay to cry and let those heavy feelings out. One test does not define your intelligence or worth. When you are ready, we will look through the mistakes together without any pressure.", translation: "Khóc một trận cho nhẹ lòng là chuyện hoàn toàn bình thường con gái à. Một bài kiểm tra không bao giờ định nghĩa được năng lực hay giá trị của con. Khi nào con bình tâm lại, hai bố con mình cùng xem lại mấy lỗi sai mà không có áp lực gì hết nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Comforting Bedtime Hug',
      participants: [
        { name: 'Mom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MomQuick02', role: 'Mom' },
        { name: 'Mai', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MaiQuick02', role: 'Daughter' }
      ],
      lines: [
        { participant: 'Mom', text: "Tucked you in with your warm blanket. Feeling any lighter?", translation: "Mẹ đắp chăn ấm cho con rồi nè. Lòng thấy nhẹ nhõm hơn chút nào chưa con gái?" },
        { participant: 'Mai', text: "Much better after talking with you and Dad. Love you.", translation: "Được tâm sự với bố mẹ con thấy đỡ hơn nhiều rồi ạ. Con yêu mẹ." },
        { participant: 'Mom', text: "Tomorrow is a fresh sunrise. Sleep deeply, sweet girl.", translation: "Ngày mai là một khởi đầu mới tinh khôi. Ngủ thật ngon nha con yêu." },
        { participant: 'Mai', text: "Good night Mom.", translation: "Chúc mẹ ngủ ngon ạ." }
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
        { name: 'Duc', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DucCasual03', role: 'Teen Son' }
      ],
      lines: [
        { participant: 'Duc', text: "Mom, all my high school friends stay out until 10:30 PM on Saturday nights. Can we adjust my 9:00 PM curfew?", translation: "Mẹ ơi, mấy đứa bạn cấp ba của con toàn được đi chơi tới 10h30 tối thứ Bảy không à. Nhà mình nới giờ giới nghiêm 9h của con ra xíu được không mẹ?" },
        { participant: 'Mom', text: "I appreciate you bringing this up respectfully, Duc. We set rules because your safety is our top priority, not to restrict your fun.", translation: "Mẹ rất mừng vì con biết mở lời trao đổi đàng hoàng, Đức à. Bố mẹ đặt ra quy tắc là vì an toàn của con là trên hết, chứ không phải để gò bó con." },
        { participant: 'Duc', text: "I know. What if I promise to send my live location and text you every hour?", translation: "Con hiểu mà mẹ. Nếu con hứa sẽ bật định vị và nhắn tin báo tình hình cho mẹ mỗi tiếng một lần thì sao ạ?" },
        { participant: 'Mom', text: "Let's compromise on 10:00 PM for this Saturday trial. If you keep your promise and arrive home on time, we can make it an official agreement.", translation: "Mẹ con mình thống nhất thử nghiệm mốc 10h00 tối thứ Bảy này nhé. Nếu con giữ đúng lời hứa và về nhà đúng giờ, mẹ sẽ chính thức áp dụng khung giờ này cho con." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Curfew Check-in Text',
      participants: [
        { name: 'Duc', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DucQuick03', role: 'Son' },
        { name: 'Mom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MomQuick03', role: 'Mom' }
      ],
      lines: [
        { participant: 'Duc', text: "Leaving the movie theater now! On track for 9:45 PM.", translation: "Con đang ra khỏi rạp chiếu phim nè mẹ ơi! Tầm 9h45 là con có mặt ở nhà." },
        { participant: 'Mom', text: "Thanks for keeping me updated! Drive carefully on the scooter.", translation: "Cảm ơn con đã nhắn tin báo trước nha! Chạy xe máy cẩn thận nghen con." },
        { participant: 'Duc', text: "Will do, see you shortly!", translation: "Dạ con nhớ rồi, lát gặp mẹ nha!" },
        { participant: 'Mom', text: "Door unlocked for you.", translation: "Mẹ mở sẵn cửa cho con rồi đó." }
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
        { name: 'An', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AnCasual04', role: 'Son' }
      ],
      lines: [
        { participant: 'An', text: "Dad, we only got the silver medal in the city soccer championship. I missed the decisive penalty shot.", translation: "Bố ơi, đội con chỉ giành được huy chương bạc giải bóng đá thành phố thôi. Quả luân lưu quyết định con sút hỏng mất tiêu." },
        { participant: 'Dad', text: "An, look at me. I watched you wake up at 5:30 AM every Saturday for three months to train with this team.", translation: "An à, nhìn bố này. Bố đã thấy con thức dậy từ 5 rưỡi sáng mỗi thứ Bảy suốt ba tháng ròng để tập luyện cùng đồng đội." },
        { participant: 'An', text: "Still, I wanted to bring home the gold for the team.", translation: "Nhưng mà con vẫn muốn mang cúp vàng về cho cả đội hơn." },
        { participant: 'Dad', text: "That grit, your discipline, and how you supported your teammates when they were exhausted—that is what makes you a true champion in my eyes. Winning a trophy is nice, but your character is what lasts forever.", translation: "Chính sự kiên trì, tính kỷ luật và cách con luôn động viên đồng đội lúc kiệt sức—đó mới là điều biến con thành một nhà vô địch thực thụ trong mắt bố. Chiếc cúp vô địch thì đẹp thật đấy, nhưng nhân cách của con mới là thứ quý giá đi cùng năm tháng." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Proud Fist Bump',
      participants: [
        { name: 'Dad', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DadQuick04', role: 'Dad' },
        { name: 'An', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AnQuick04', role: 'Son' }
      ],
      lines: [
        { participant: 'Dad', text: "Head held high, champ! Proud of every minute on that field.", translation: "Ngẩng cao đầu lên nào chàng trai! Bố tự hào về từng phút con chiến đấu trên sân." },
        { participant: 'An', text: "Thanks Dad. Glad you came to watch me play.", translation: "Con cảm ơn bố. Con vui lắm vì bố đã đến sân cổ vũ con." },
        { participant: 'Dad', text: "Wouldn't miss it for the world. Ice cream on the way home?", translation: "Có bận mấy bố cũng phải xem con đá chứ. Trên đường về ghé ăn kem nha?" },
        { participant: 'An', text: "Double scoop chocolate!", translation: "Cho con hai viên sô cô la nha bố!" }
      ]
    }
  ],

  'parent-child-05': [
    {
      type: 'pair',
      school: 'casual',
      title: 'Reading an Adventure Novel Together and Discussing Perspectives',
      participants: [
        { name: 'Mom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MomCasual05Story', role: 'Mother' },
        { name: 'Minh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MinhCasual05Story', role: 'Child' }
      ],
      lines: [
        { participant: 'Mom', text: "Minh, we just finished chapter four of 'The Little Prince'! What did you think of the Fox explaining why the Rose is special?", translation: "Minh ơi, mẹ con mình vừa đọc xong chương 4 cuốn 'Hoàng tử bé' rồi nè! Con nghĩ sao về lời chú Cáo giải thích lý do bông hoa hồng trở nên đặc biệt?" },
        { participant: 'Minh', text: "The Fox said it's the time the Prince spent caring for his Rose that made her so important. That made me think of our garden!", translation: "Chú Cáo bảo chính thời gian Hoàng tử bé bỏ ra để chăm sóc hoa hồng mới làm bông hoa trở nên quan trọng. Nghe đoạn đó con nhớ đến khu vườn nhà mình ghê!" },
        { participant: 'Mom', text: "What a perceptive insight, sweetie! When we invest love, attention, and patience into something, it becomes irreplaceable.", translation: "Góc nhìn sâu sắc quá con yêu ơi! Khi tụi mình dồn tình yêu thương, sự chú tâm và lòng kiên nhẫn vào điều gì đó, nó sẽ trở thành duy nhất không thể thay thế." },
        { participant: 'Minh', text: "Can we read chapter five tomorrow night before bed? I really want to find out what happens on the next asteroid!", translation: "Tối mai trước khi đi ngủ mẹ con mình đọc tiếp chương 5 nha mẹ? Con tò mò muốn biết Hoàng tử bé sẽ gặp ai ở tiểu hành tinh tiếp theo quá!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Fast Bedtime Story Chapter Wrap-up',
      participants: [
        { name: 'Dad', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DadQuick05Story', role: 'Dad' },
        { name: 'Minh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MinhQuick05Story', role: 'Child' }
      ],
      lines: [
        { participant: 'Dad', text: "Bookmark placed on page 50! Eyes closing, little explorer?", translation: "Bố kẹp thẻ trang 50 rồi nha! Mắt đã díu lại chưa nhà thám hiểm nhí ơi?" },
        { participant: 'Minh', text: "Almost asleep! The dragon chapter was epic.", translation: "Con buồn ngủ lắm rồi ạ! Chương có con rồng hay đỉnh luôn bố." },
        { participant: 'Dad', text: "Dream about flying over the castles tonight. Sleep tight!", translation: "Tối nay mơ thấy mình bay qua lâu đài nha. Ngủ ngoan con nhé!" },
        { participant: 'Minh', text: "Good night Dad, love you!", translation: "Chúc bố ngủ ngon, con yêu bố!" }
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
        { participant: 'Dad', text: "Listen to me: your mother and I love you unconditionally for who you are, never for an exam ranking. You have prepared diligently. Tonight, close the books at 9 PM, let's walk the dog together, and give your mind rest.", translation: "Nghe bố dặn này: bố mẹ yêu thương con vô điều kiện vì chính bản thân con, chứ không bao giờ vì điểm số hay thứ hạng. Con đã ôn luyện rất chăm chỉ rồi. Tối nay 9 giờ đóng sách lại, hai bố con mình cùng dắt chó đi dạo để đầu óc con được nghỉ ngơi nhé." }
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
      title: 'Comforting a Child Feeling Left Out of a Friend Group',
      participants: [
        { name: 'Mom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MomCasual07Friends', role: 'Mother' },
        { name: 'Vy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=VyCasual07Friends', role: 'Daughter' }
      ],
      lines: [
        { participant: 'Vy', text: "Mom, today during lunch, the girls at my table were whispering about a weekend party, and I realized they created a separate group chat without me.", translation: "Mẹ ơi, trưa nay giờ ăn trưa, mấy bạn nữ ngồi cùng bàn cứ thì thầm to nhỏ về bữa tiệc cuối tuần, rồi con mới nhận ra mấy bạn lập nhóm chat riêng không có con." },
        { participant: 'Mom', text: "Oh sweetheart, come here. Being excluded like that hurts deeply, and your feelings are completely valid.", translation: "Ôi con gái yêu, lại đây với mẹ nào. Cảm giác bị bạn bè gạt ra ngoài như thế đau lòng lắm, con cảm thấy tủi thân là điều hết sức tự nhiên." },
        { participant: 'Vy', text: "Did I do something wrong? I always try to be kind to everyone.", translation: "Có phải con đã làm gì sai không mẹ? Con luôn cố gắng tốt bụng với tất cả mọi người mà." },
        { participant: 'Mom', text: "You did nothing wrong at all, Vy. Sometimes middle school cliques form out of insecurity. True friendship never requires you to shrink yourself or beg for inclusion. Let's focus on the genuine friends who value you, and plan a fun craft night this Friday.", translation: "Con không hề làm gì sai hết đâu Vy. Đôi khi bạn bè tuổi mới lớn hay lập nhóm bè phái vì sự bất an của chính họ thôi. Tình bạn chân chính không bao giờ đòi hỏi con phải thu mình lại hay van nài để được tham gia. Mẹ con mình hãy hướng về những người bạn thật lòng quý mến con, và tối thứ Sáu này lên kế hoạch làm đồ thủ công thật vui nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick After-School Pep Talk & Bubble Tea',
      participants: [
        { name: 'Dad', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DadQuick07Friends', role: 'Dad' },
        { name: 'Vy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=VyQuick07Friends', role: 'Daughter' }
      ],
      lines: [
        { participant: 'Dad', text: "Picking you up at the corner! Brown sugar boba in the cup holder.", translation: "Bố đang đón con ở góc đường nè! Có sẵn ly trà sữa trân châu đường đen trên xe nha." },
        { participant: 'Vy', text: "Boba! You are the best Dad ever.", translation: "Trà sữa! Bố là tuyệt vời nhất trên đời luôn." },
        { participant: 'Dad', text: "Whatever happened at school, we leave it behind today. Ready to blast some music?", translation: "Ở trường có chuyện gì buồn cứ bỏ lại sau lưng nha con. Sẵn sàng bật nhạc quẩy chưa?" },
        { participant: 'Vy', text: "Hopping in right now!", translation: "Con lên xe liền đây bố ơi!" }
      ]
    }
  ],

  'parent-child-08': [
    {
      type: 'pair',
      school: 'casual',
      title: 'Setting Healthy Boundaries for Social Media & Online Safety',
      participants: [
        { name: 'Dad', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DadCasual08Social', role: 'Father' },
        { name: 'Tuan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TuanCasual08Social', role: 'Son' }
      ],
      lines: [
        { participant: 'Tuan', text: "Dad, all the seventh graders are creating public TikTok accounts to post dance videos. Can I download the app too?", translation: "Bố ơi, các bạn lớp 7 trường con ai cũng tạo tài khoản TikTok công khai để quay video nhảy hết á. Con tải ứng dụng về dùng được không bố?" },
        { participant: 'Dad', text: "I'm glad you came and asked me directly, Tuan. Making creative videos sounds like lots of fun, but digital platforms carry real privacy concerns.", translation: "Bố rất mừng vì con chủ động hỏi ý kiến bố đàng hoàng, Tuấn à. Làm video sáng tạo thì nghe vui thật đấy, nhưng các nền tảng mạng xã hội luôn đi kèm những rủi ro bảo mật có thật con ơi." },
        { participant: 'Tuan', text: "What kind of concerns? I only want my classmates to see them.", translation: "Rủi ro thế nào hả bố? Con chỉ muốn chia sẻ cho các bạn trong lớp xem thôi mà." },
        { participant: 'Dad', text: "When accounts are public, strangers can download your likeness or find our location. How about this agreement: we set your account to strictly private, friend-only, and no posting school uniforms or street signs. Deal?", translation: "Khi tài khoản để chế độ công khai, người lạ có thể tải hình ảnh của con hoặc lần ra vị trí nhà mình. Bố con mình giao ước thế này nhé: tài khoản để chế độ riêng tư tuyệt đối, chỉ kết bạn với người quen, và tuyệt đối không quay phù hiệu trường học hay biển tên đường. Chốt kèo không con?" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Screen-Time Wind-down Reminder',
      participants: [
        { name: 'Mom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MomQuick08Social', role: 'Mom' },
        { name: 'Tuan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TuanQuick08Social', role: 'Son' }
      ],
      lines: [
        { participant: 'Mom', text: "Gaming timer beeped, Tuan! Save your checkpoint.", translation: "Đồng hồ hẹn giờ chơi game kêu rồi đó Tuấn ơi! Lưu game lại nào con." },
        { participant: 'Tuan', text: "Saving right now! Defeated the boss just in time.", translation: "Con đang lưu game đây ạ! Vừa kịp đánh xong con trùm luôn." },
        { participant: 'Mom', text: "Great timing! Wash your hands for dinner.", translation: "Canh giờ chuẩn đấy! Rửa tay vào ăn cơm nha con." },
        { participant: 'Tuan', text: "Coming to set the table!", translation: "Con ra dọn mâm liền đây mẹ ơi!" }
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
        { name: 'Phuong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PhuongCasual09', role: 'Daughter' }
      ],
      lines: [
        { participant: 'Phuong', text: "Dad, a new limited-edition designer sneaker just dropped for three million dong. Can you buy it for me?", translation: "Bố ơi, đôi giày thể thao phiên bản giới hạn mới ra mắt giá ba triệu đồng đẹp xỉu luôn. Bố mua cho con được không?" },
        { participant: 'Dad', text: "Those shoes look stylish, Phuong, but let's pause and distinguish between a need and a want.", translation: "Đôi giày đó nhìn kiểu dáng đẹp thật đấy Phương à, nhưng bố con mình cùng ngồi lại phân biệt giữa nhu cầu thiết yếu và sở thích nhất thời nhé." },
        { participant: 'Phuong', text: "Well, my current running shoes still fit fine, but everyone at school is wearing this new brand.", translation: "Dạ đôi giày thể thao hiện tại của con đi vẫn vừa vặn, nhưng mấy bạn ở trường ai cũng đang đi hãng mới này hết á bố." },
        { participant: 'Dad', text: "That is peer trend pressure speaking, sweetie. How about we practice budgeting: you save fifty percent from your allowance and chores, and I will match the remaining half next month? That way, you truly own what you earn.", translation: "Đó là áp lực chạy theo trào lưu của bạn bè đấy con gái à. Bố con mình cùng tập quản lý tài chính nhé: con tự tiết kiệm 50% từ tiền tiêu vặt và làm việc nhà, tháng sau bố sẽ hỗ trợ bù nốt 50% còn lại. Như vậy con sẽ thực sự quý trọng món đồ do chính công sức mình làm ra." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Allowance Check Text',
      participants: [
        { name: 'Phuong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PhuongQuick09', role: 'Daughter' },
        { name: 'Dad', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DadQuick09', role: 'Dad' }
      ],
      lines: [
        { participant: 'Phuong', text: "Dad, transferred my chore earnings to my savings jar!", translation: "Bố ơi, con vừa bỏ tiền thưởng làm việc nhà vào hũ tiết kiệm rồi nè!" },
        { participant: 'Dad', text: "Proud of your discipline! How much is saved so far?", translation: "Bố rất tự hào về tính kỷ luật của con! Tiết kiệm được bao nhiêu rồi con gái?" },
        { participant: 'Phuong', text: "One million already! Halfway to the sneaker goal.", translation: "Được 1 triệu rồi ạ! Đi được nửa chặng đường mua giày rồi." },
        { participant: 'Dad', text: "Matching my half on payday, keep it up!", translation: "Đến ngày lĩnh lương bố sẽ góp nửa còn lại, tiếp tục phát huy nha!" }
      ]
    }
  ],

  'parent-child-10': [
    {
      type: 'pair',
      school: 'casual',
      title: 'An Open, Respectful Talk About Puberty Changes & Body Safety',
      participants: [
        { name: 'Mom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MomCasual10Puberty', role: 'Mother' },
        { name: 'Linh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LinhCasual10Puberty', role: 'Daughter' }
      ],
      lines: [
        { participant: 'Linh', text: "Mom, my body is changing so fast this year, and my skin keeps breaking out in pimples. I feel so awkward and self-conscious.", translation: "Mẹ ơi, năm nay cơ thể con thay đổi nhanh quá, da mặt lại cứ bị nổi mụn nữa. Con cảm thấy lúng túng và tự ti ghê gớm." },
        { participant: 'Mom', text: "Come sit close to me, Linh. Puberty is a completely normal, healthy milestone that every single human being navigates.", translation: "Lại đây ngồi gần mẹ nào Linh. Dậy thì là một cột mốc phát triển hoàn toàn tự nhiên và lành mạnh mà bất cứ ai cũng đều phải trải qua con à." },
        { participant: 'Linh', text: "Sometimes people make remarks about my height or how I look, and it makes me super uncomfortable.", translation: "Thỉnh thoảng có người hay nhận xét về chiều cao hay vóc dáng của con, làm con thấy cực kỳ khó chịu." },
        { participant: 'Mom', text: "Always remember: your body belongs entirely to you. You have absolute right to bodily boundaries. If anyone ever touches you inappropriately or makes comments that make you uneasy, you have full permission to say 'No' firmly and come tell me immediately.", translation: "Con hãy luôn ghi nhớ điều này: cơ thể con thuộc về chính con. Con có quyền tuyệt đối đối với ranh giới thân thể của mình. Nếu bất kỳ ai có hành vi đụng chạm không phù hợp hay đưa ra những lời bình phẩm làm con khó chịu, con có toàn quyền nói 'Không' một cách dứt khoát và về báo ngay với mẹ nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Gentle Growing-Pains Check-in & Warm Tea',
      participants: [
        { name: 'Mom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MomQuick10Puberty', role: 'Mom' },
        { name: 'Linh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LinhQuick10Puberty', role: 'Daughter' }
      ],
      lines: [
        { participant: 'Mom', text: "Brought you a warm heating pad and ginger tea for the cramps.", translation: "Mẹ mang túi chườm ấm với trà gừng cho con đỡ đau bụng nè." },
        { participant: 'Linh', text: "Thank you Mom, you always know what helps.", translation: "Con cảm ơn mẹ, mẹ lúc nào cũng hiểu con cần gì nhất." },
        { participant: 'Mom', text: "Rest your head on my lap, sweetie.", translation: "Gối đầu lên đùi mẹ nằm nghỉ một lát đi con yêu." },
        { participant: 'Linh', text: "Love you Mom.", translation: "Con yêu mẹ nhiều lắm ạ." }
      ]
    }
  ]
};
