// Distinct 3-tier Dialogues (Business, Casual, Super Casual) for Lessons 01 - 20 (Phần lớn học viên)
// Guarantees 100% differentiation across all 3 communication schools with no overlapping scenarios.

export interface DialogueParticipant {
  name: string;
  avatar: string;
  role?: string;
}

export interface DialogueLine {
  participant: string;
  text: string;
  translation: string;
}

export interface TopicDialogue {
  type: 'pair';
  school: 'business' | 'casual' | 'superCasual';
  title: string;
  participants: DialogueParticipant[];
  lines: DialogueLine[];
}

export const COMMON_LESSONS_DIALOGUES: Record<string, TopicDialogue[]> = {
  // -------------------------------------------------------------
  // LESSON 01: Làm quen & Giới thiệu bản thân
  // -------------------------------------------------------------
  'lesson-01': [
    {
      type: 'pair',
      school: 'business',
      title: '👔 International Trade Summit Networking',
      participants: [
        { name: 'Diana Hughes', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DianaHughes', role: 'Regional Director' },
        { name: 'Robert Chen', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=RobertChen', role: 'Strategy Consultant' }
      ],
      lines: [
        { participant: 'Diana Hughes', text: 'Good evening. Allow me to introduce myself; I am Diana Hughes, Regional Director at Apex Global.', translation: 'Chúc anh buổi tối tốt lành. Cho phép tôi được tự giới thiệu; tôi là Diana Hughes, Giám đốc khu vực tại Apex Global.' },
        { participant: 'Robert Chen', text: 'A sincere pleasure to make your acquaintance, Ms. Hughes. I am Robert Chen, senior strategy consultant.', translation: 'Rất hân hạnh được diện kiến cô Hughes. Tôi là Robert Chen, chuyên viên tư vấn chiến lược cấp cao.' },
        { participant: 'Diana Hughes', text: 'To break the ice, could you tell me where your regional office is currently based?', translation: 'Để mở đầu câu chuyện làm quen, anh có thể chia sẻ văn phòng khu vực của anh hiện đặt tại đâu không?' },
        { participant: 'Robert Chen', text: 'My team is based in Singapore, though my peaceful hometown is Da Nang, Vietnam. It is an honor to connect.', translation: 'Đội ngũ của tôi đặt tại Singapore, dù quê hương bình yên của tôi là Đà Nẵng, Việt Nam. Rất vinh hạnh được kết nối cùng cô.' },
        { participant: 'Diana Hughes', text: 'I truly appreciate your direct and gracious demeanor. I look forward to exploring potential synergies.', translation: 'Tôi rất đánh giá cao phong thái thẳng thắn và nhã nhặn của anh. Rất mong chờ những cơ hội hợp tác tiềm năng sắp tới.' }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: '💬 Coffee Shop University Partner Meetup',
      participants: [
        { name: 'Minh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Minh', role: 'Economics Student' },
        { name: 'Sarah', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah', role: 'Exchange Student' }
      ],
      lines: [
        { participant: 'Minh', text: "Hey Sarah! Nice to meet you in person. Let me introduce myself properly: I'm Minh, your presentation partner.", translation: "Chào Sarah nhé! Rất vui được gặp trực tiếp bạn. Cho mình tự giới thiệu tử tế một chút: mình là Minh, bạn đồng hành thuyết trình của bạn." },
        { participant: 'Sarah', text: "Hi Minh! Great to meet you too. Where are you originally from? I love hearing about different hometowns.", translation: "Chào Minh! Mình cũng rất vui được gặp bạn. Quê gốc của bạn ở đâu thế? Mình rất thích nghe kể về các vùng quê khác nhau." },
        { participant: 'Minh', text: "I was born in Dalat, the city of flowers! What about your hobbies when you have free time?", translation: "Mình sinh ra ở Đà Lạt, thành phố ngàn hoa! Còn sở thích của bạn vào lúc rảnh rỗi là gì thế?" },
        { participant: 'Sarah', text: "I love exploring local cafes and street photography. Thanks for reaching out so fast to break the ice!", translation: "Mình thích khám phá các quán cà phê bản địa và chụp ảnh đường phố. Cảm ơn bạn đã chủ động nhắn tin phá băng làm quen nhanh vậy nhé!" },
        { participant: 'Minh', text: "Anytime! Let's grab some iced milk tea and sketch our presentation outline.", translation: "Có gì đâu nè! Chúng mình gọi trà sữa đá rồi phác thảo dàn ý bài thuyết trình luôn nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: '⚡ Skatepark Bowl Chill Chat',
      participants: [
        { name: 'Ryan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=RyanSkate', role: 'Local Skater' },
        { name: 'Chase', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ChaseSkate', role: 'Street Skater' }
      ],
      lines: [
        { participant: 'Ryan', text: "Yo, what's good bro! That kickflip over the stair set was insane. Name's Ryan.", translation: "Ê ông ơi, khỏe không! Cú nhảy kickflip qua bậc thang ban nãy đỉnh vãi chưởng luôn. Tui là Ryan nhé." },
        { participant: 'Chase', text: "Yo Ryan, appreciate it man! I'm Chase. Just moved here from Brooklyn last week.", translation: "Yo Ryan, cảm ơn ông nhiều nha! Tui là Chase. Mới chuyển từ Brooklyn tới đây hồi tuần trước thôi." },
        { participant: 'Ryan', text: "Sick! So where you reppin' originally? Brooklyn your real hometown or what?", translation: "Chất đấy! Thế gốc gác ông ở đâu thế? Brooklyn là quê xịn của ông luôn hay sao?" },
        { participant: 'Chase', text: "Born and raised, bro. Skating is basically my whole hobby and lifestyle. No cap.", translation: "Sinh ra và lớn lên ở đó luôn ông ơi. Trượt ván coi như là sở thích và lẽ sống duy nhất của tui luôn. Thề không điêu." },
        { participant: 'Ryan', text: "Love the direct energy, man. Come chill with the crew on the half-pipe!", translation: "Khoái cái tính thẳng thắn nhiệt tình này của ông rồi đấy. Lại đây giao lưu với hội anh em ở dốc trượt nè!" }
      ]
    }
  ],

  // -------------------------------------------------------------
  // LESSON 02: Gia đình & Bạn bè
  // -------------------------------------------------------------
  'lesson-02': [
    {
      type: 'pair',
      school: 'business',
      title: '👔 Executive Dining & Work-Life Balance Sync',
      participants: [
        { name: 'Marcus Sterling', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MarcusSterling', role: 'Senior Partner' },
        { name: 'Evelyn Vance', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=EvelynVance', role: 'Managing Director' }
      ],
      lines: [
        { participant: 'Marcus Sterling', text: 'Evelyn, maintaining high performance during quarterly audits requires an exceptionally supportive foundation.', translation: 'Evelyn à, việc duy trì hiệu suất cao trong các đợt kiểm toán quý đòi hỏi một điểm tựa hỗ trợ vô cùng vững chắc.' },
        { participant: 'Evelyn Vance', text: 'I wholeheartedly concur, Marcus. I come from a tight-knit family who keeps my perspective anchored.', translation: 'Tôi hoàn toàn đồng tình, Marcus. Tôi lớn lên trong một gia đình gắn bó khăng khít, điều đó giúp tôi luôn giữ được sự cân bằng.' },
        { participant: 'Marcus Sterling', text: 'Do you have siblings involved in corporate enterprises as well?', translation: 'Các anh chị em ruột của cô có cùng tham gia vào các tập đoàn kinh doanh không?' },
        { participant: 'Evelyn Vance', text: 'My elder brother is an architect. Having trustworthy confidants outside finance is truly invaluable.', translation: 'Anh trai tôi là kiến trúc sư. Có được những người đáng tin cậy để tâm sự bên ngoài ngành tài chính thực sự vô cùng quý giá.' },
        { participant: 'Marcus Sterling', text: 'Indeed. A balanced executive is an effective executive. Let us raise a toast to that principle.', translation: 'Đúng như vậy. Một người lãnh đạo biết cân bằng mới là một người lãnh đạo hiệu quả. Chúng ta hãy nâng ly vì nguyên tắc đó.' }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: '💬 Weekend Park Walk & Friendship Catchup',
      participants: [
        { name: 'Linh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LinhFriend', role: 'Close Friend' },
        { name: 'John', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JohnFriend', role: 'Close Friend' }
      ],
      lines: [
        { participant: 'Linh', text: "John, you mentioned your brother was visiting this weekend. How do you two get along?", translation: "John ơi, cậu bảo anh trai cậu đến chơi cuối tuần này đúng không. Hai anh em hòa thuận với nhau chứ?" },
        { participant: 'John', text: "Surprisingly well! We used to bicker as kids, but now he is my most trustworthy buddy.", translation: "Hợp nhau bất ngờ luôn á! Hồi bé thì hay cãi cọ, nhưng giờ anh ấy là người bạn đáng tin cậy nhất của tớ." },
        { participant: 'Linh', text: "That is so sweet. My parents are super supportive of my music classes too. Family makes all the difference.", translation: "Dễ thương ghê. Bố mẹ tớ cũng cực kỳ ủng hộ việc tớ học lớp thanh nhạc. Gia đình thực sự tạo nên mọi sự khác biệt." },
        { participant: 'John', text: "Totally. Knowing someone always has your back gives you so much courage to try new things.", translation: "Chuẩn luôn. Biết được luôn có người bảo bọc phía sau lưng cho mình nhiều dũng khí để thử những điều mới mẻ lắm." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: '⚡ Rooftop Late-Night Squad Banter',
      participants: [
        { name: 'Zack', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ZackHomie', role: 'Day-one Homie' },
        { name: 'Leo', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LeoHomie', role: 'Day-one Homie' }
      ],
      lines: [
        { participant: 'Zack', text: "Bro, my little sibling just spilled ramen all over my gaming keyboard, I'm losing it!", translation: "Ông ơi, đứa em ruột tui vừa đổ nguyên tô mì lên bàn phím chơi game, tui phát điên mất thôi!" },
        { participant: 'Leo', text: "Lmao classic sibling behavior! But fr though, he's your ride-or-die whenever you get into trouble.", translation: "Haha đúng chuẩn mấy đứa em trong nhà rồi! Cơ mà nói thật chứ thằng bé sống chết vì ông mỗi khi ông gặp chuyện rắc rối mà." },
        { participant: 'Zack', text: "True that, man. He's always got my back no matter what. Our household is super tight-knit.", translation: "Cũng đúng ông ạ. Dù thế nào thằng bé cũng đứng ra bênh tui. Nhà tui gắn bó khăng khít dã man." },
        { participant: 'Leo', text: "Same with our squad. You guys are trustworthy as hell. We go way back, no cap!", translation: "Y chang hội anh em mình vậy. Mấy ông uy tín đáng tin cậy hết nấc. Tụi mình quen nhau từ thuở nào rồi, thề luôn!" }
      ]
    }
  ],

  // -------------------------------------------------------------
  // LESSON 03: Trường học & Lớp học
  // -------------------------------------------------------------
  'lesson-03': [
    {
      type: 'pair',
      school: 'business',
      title: '👔 Academic Advisory & Course Syllabus Consultation',
      participants: [
        { name: 'Professor Vance', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ProfVance', role: 'Dean of Studies' },
        { name: 'Claire Dupont', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ClaireStudent', role: 'Honor Student' }
      ],
      lines: [
        { participant: 'Claire Dupont', text: 'Good morning, Professor Vance. May I inquire about the rigorous assignment requirements in this semester\'s syllabus?', translation: 'Kính chào Giáo sư Vance. Em xin phép được hỏi về các yêu cầu bài tập khắt khe trong đề cương môn học kỳ này được không ạ?' },
        { participant: 'Professor Vance', text: 'Certainly, Claire. While our departmental curriculum is strict, it is designed to prepare you for international industry standards.', translation: 'Tất nhiên rồi Claire. Mặc dù chương trình giảng dạy của khoa chúng ta rất nghiêm ngặt, nhưng nó được thiết kế để chuẩn bị cho các em theo chuẩn công nghiệp quốc tế.' },
        { participant: 'Claire Dupont', text: 'Understood, Professor. I am determined to ace the mid-term examinations through diligent preparation.', translation: 'Em đã hiểu thưa Thầy. Em quyết tâm sẽ đạt kết quả xuất sắc trong các kỳ thi giữa kỳ bằng việc chuẩn bị kỹ lưỡng.' },
        { participant: 'Professor Vance', text: 'I commend your dedication. Be sure to review the lecture citations carefully before final submission.', translation: 'Thầy đánh giá rất cao sự tận tụy của em. Hãy nhớ kiểm tra các trích dẫn bài giảng cẩn thận trước khi nộp bài chính thức nhé.' }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: '💬 Campus Library Study Session',
      participants: [
        { name: 'Khang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KhangStudent', role: 'Study Partner' },
        { name: 'Vy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=VyStudent', role: 'Study Partner' }
      ],
      lines: [
        { participant: 'Khang', text: "Vy, did you get a chance to look over the chemistry syllabus for next week?", translation: "Vy ơi, bạn đã kịp xem qua đề cương môn Hóa cho tuần tới chưa thế?" },
        { participant: 'Vy', text: "Yes, I did! The professor has a reputation for being strict, but her curriculum is very well organized.", translation: "Mình xem rồi nè! Cô giáo nổi tiếng nghiêm khắc thật, nhưng chương trình học của cô được sắp xếp rất bài bản." },
        { participant: 'Khang', text: "We have a group assignment due on Friday. If we work together, I think we can definitely ace it.", translation: "Tụi mình có bài tập nhóm phải nộp vào thứ Sáu. Nếu hai đứa mình hợp tác, mình tin chắc chúng mình sẽ giật điểm A nhẹ tênh." },
        { participant: 'Vy', text: "Count me in! Let's divide the research questions and meet back here tomorrow afternoon.", translation: "Cho mình tham gia với! Cùng chia nhau các câu hỏi nghiên cứu rồi chiều mai gặp lại ở đây nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: '⚡ Campus Lawn Cramming Gossip',
      participants: [
        { name: 'Mason', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MasonStudent', role: 'Crammer' },
        { name: 'Brooke', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BrookeStudent', role: 'Crammer' }
      ],
      lines: [
        { participant: 'Mason', text: "Bro, this 10-page essay assignment is insane! My brain is officially fried.", translation: "Ê bồ ơi, bài tập luận 10 trang này điên rồ thật sự! Não tui chính thức bốc khói rồi đây." },
        { participant: 'Brooke', text: "Ngl, the teacher is way too strict. Look at this crazy grading rubric on the syllabus!", translation: "Thề luôn á, giáo viên gắt gao quá thể đáng. Xem cái thang điểm dã man trên đề cương này coi!" },
        { participant: 'Mason', text: "No cap! If we don't pull an all-nighter, there's zero chance we ace this quiz.", translation: "Chuẩn đét! Nếu đêm nay không thức trắng cày cuốc thì cửa đâu mà giật điểm A nổi bài kiểm tra này." },
        { participant: 'Brooke', text: "Grab an energy drink, bro. Let's blast through this slides deck before midnight!", translation: "Làm lon nước tăng lực đi ông tướng. Cày nát đống slide này trước nửa đêm thôi nào!" }
      ]
    }
  ],

  // -------------------------------------------------------------
  // LESSON 04: Cuộc sống hàng ngày
  // -------------------------------------------------------------
  'lesson-04': [
    {
      type: 'pair',
      school: 'business',
      title: '👔 Executive Morning Routine & Productivity Strategy',
      participants: [
        { name: 'Arthur Pendelton', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ArthurExec', role: 'Chief Operations Officer' },
        { name: 'Genevieve Scott', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=GenevieveHR', role: 'VP of Human Resources' }
      ],
      lines: [
        { participant: 'Arthur Pendelton', text: 'Good morning, Genevieve. Establishing a predictable routine has noticeably enhanced executive focus across our regional offices.', translation: 'Chào buổi sáng Genevieve. Việc thiết lập một thời gian biểu có kỷ luật rõ ràng đã nâng cao sự tập trung của ban điều hành tại các văn phòng khu vực.' },
        { participant: 'Genevieve Scott', text: 'Indeed, Arthur. Being an early bird allows me to complete high-priority analysis before the morning commute begins.', translation: 'Quả đúng như vậy, Arthur. Thói quen dậy sớm cho phép tôi hoàn thành các phân tích ưu tiên cao trước khi bắt đầu quãng đường đi làm buổi sáng.' },
        { participant: 'Arthur Pendelton', text: 'A productive morning sets the strategic tone for the entire enterprise. How do you ensure mental recovery in the evenings?', translation: 'Một buổi sáng năng suất sẽ định hình khí thế chiến lược cho toàn bộ doanh nghiệp. Chị thường làm cách nào để phục hồi tinh thần vào buổi tối?' },
        { participant: 'Genevieve Scott', text: 'I schedule ninety minutes without digital devices to unwind completely with classical literature.', translation: 'Tôi luôn dành trọn 90 phút không dùng thiết bị điện tử để thư giãn hoàn toàn với văn học cổ điển.' }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: '💬 Office Breakroom Coffee Chat',
      participants: [
        { name: 'Nam', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NamWork', role: 'Marketing Specialist' },
        { name: 'Duc', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DucWork', role: 'UI Designer' }
      ],
      lines: [
        { participant: 'Nam', text: "Morning Duc! You look full of energy today. Are you naturally an early bird?", translation: "Chào buổi sáng Đức! Trông bạn hôm nay tràn đầy năng lượng thế. Bạn vốn là người thích dậy sớm à?" },
        { participant: 'Duc', text: "Actually yes! I wake up at 5:30, make a fresh espresso, and plan out my tasks. It makes my day so productive.", translation: "Thực ra là đúng vậy đó! Mình dậy từ 5 rưỡi sáng, pha ly cà phê espresso rồi lên danh sách việc cần làm. Cảm giác ngày làm việc năng suất hẳn." },
        { participant: 'Nam', text: "I wish I could do that. My morning bus commute is always packed, and I'm a chronic night owl.", translation: "Ước gì mình làm được như bạn. Chuyến xe buýt đi làm buổi sáng của mình lúc nào cũng chen chúc, mà mình lại chuyên cú đêm nữa chứ." },
        { participant: 'Duc', text: "You should try building a relaxing evening routine to unwind earlier. It completely changed my sleep quality!", translation: "Bạn thử tập một thói quen buổi tối nhẹ nhàng để xả stress sớm xem. Nó đã thay đổi chất lượng giấc ngủ của mình hoàn toàn luôn đó!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: '⚡ Discord Voice Call Sleep Schedule Rant',
      participants: [
        { name: 'Jax', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JaxGamer', role: 'Night Owl' },
        { name: 'Toby', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TobyGamer', role: 'Night Owl' }
      ],
      lines: [
        { participant: 'Jax', text: "Bro, I rolled out of bed at 1 PM today. My daily routine is completely ruined, ngl.", translation: "Ông ơi, hôm nay tận 1 giờ chiều tui mới lết xác ra khỏi giường. Lịch sinh hoạt nát bét hết rồi, thề luôn." },
        { participant: 'Toby', text: "Lol, same here! I was gaming till 4 AM. Zero chance of me becoming an early bird anytime soon.", translation: "Haha y xì tui! Hôm qua tui cày game tới 4 giờ sáng. Còn lâu tui mới thành mấy người dậy sớm chim sớm nổi." },
        { participant: 'Jax', text: "Fr, but my commute to classes tomorrow morning is gonna be brutal if I don't catch some Z's.", translation: "Công nhận, nhưng sáng mai mà lết đi học với cái thân xác này thì đúng là địa ngục nếu không ngủ tí nào." },
        { participant: 'Toby', text: "Go hit the shower, unwind, and put your phone on airplane mode, man. Catch ya tomorrow!", translation: "Đi tắm nước ấm xả stress rồi bật chế độ máy bay đi ông tướng. Mai gặp lại nha!" }
      ]
    }
  ],

  // -------------------------------------------------------------
  // LESSON 05: Sở thích & Giải trí
  // -------------------------------------------------------------
  'lesson-05': [
    {
      type: 'pair',
      school: 'business',
      title: '👔 Corporate Wellness & Team Leisure Planning',
      participants: [
        { name: 'Harrison Clark', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HarrisonClark', role: 'Corporate Culture Director' },
        { name: 'Elena Rostova', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ElenaRostova', role: 'People Operations Lead' }
      ],
      lines: [
        { participant: 'Harrison Clark', text: 'Elena, our annual employee engagement survey indicates a strong desire for healthy outdoor leisure activities.', translation: 'Elena, khảo sát gắn kết nhân viên thường niên cho thấy nhu cầu rất lớn đối với các hoạt động giải trí ngoài trời lành mạnh.' },
        { participant: 'Elena Rostova', text: 'Precisely, Harrison. Excessive screen time has left many team members feeling mentally fatigued and addicted to constant notifications.', translation: 'Chính xác thưa anh Harrison. Việc nhìn màn hình quá nhiều khiến không ít nhân viên cảm thấy kiệt quệ tinh thần và bị lệ thuộc vào các thông báo liên tục.' },
        { participant: 'Harrison Clark', text: 'We should sponsor outdoor weekend retreats rather than indoor entertainment vouchers.', translation: 'Chúng ta nên tài trợ các chuyến dã ngoại hòa mình vào thiên nhiên vào cuối tuần thay vì phát phiếu quà tặng giải trí trong nhà.' },
        { participant: 'Elena Rostova', text: 'An excellent proposal. Exploring nature encourages authentic rejuvenation across all departments.', translation: 'Một đề xuất rất xuất sắc. Khám phá thiên nhiên sẽ mang lại nguồn năng lượng tươi mới đích thực cho toàn bộ các phòng ban.' }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: '💬 Weekend Brunch & TV Series Discussion',
      participants: [
        { name: 'Truc', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TrucBrunch', role: 'Friend' },
        { name: 'Kien', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KienBrunch', role: 'Friend' }
      ],
      lines: [
        { participant: 'Truc', text: "Kien, do you have any fun plans for your leisure time this weekend?", translation: "Kiên ơi, cuối tuần này cậu có kế hoạch giải trí gì thú vị vào thời gian rảnh không?" },
        { participant: 'Kien', text: "I'm probably going to binge-watch that new sci-fi series on Netflix. I heard the plot twists are crazy!", translation: "Chắc tớ sẽ cày liền tù tì bộ phim khoa học viễn tưởng mới trên Netflix. Nghe bảo cốt truyện quay xe đỉnh lắm!" },
        { participant: 'Truc', text: "Haha, don't get too addicted to screens! The weather is going to be gorgeous; let's spend some time outdoors.", translation: "Haha, đừng để bị nghiện cày màn hình quá nha! Thời tiết cuối tuần đẹp lắm đấy; tụi mình dành chút thời gian ra ngoài trời đi." },
        { participant: 'Kien', text: "Good point. How about we hike up the pine hill on Saturday morning and watch movies on Sunday?", translation: "Ý hay đó. Hay là sáng thứ Bảy tụi mình đi leo đồi thông, còn Chủ nhật thì tha hồ xem phim nhé?" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: '⚡ Gaming Lounge Battle Royale Hype',
      participants: [
        { name: 'Dexter', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DexterGamer', role: 'Pro Gamer' },
        { name: 'Kai', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KaiGamer', role: 'Pro Gamer' }
      ],
      lines: [
        { participant: 'Dexter', text: "Bro, that new shooter game update is straight fire! I'm completely addicted, no cap.", translation: "Ê bồ ơi, bản cập nhật game bắn súng mới cháy vãi chưởng luôn! Tui cày mê mệt luôn rồi, thề không điêu." },
        { participant: 'Kai', text: "Fr! My squad hopped on discord and binge-watched the championship finals till sunrise.", translation: "Chuẩn luôn! Cả team tui nhảy lên Discord cày trực tiếp vòng chung kết giải đấu tới tận lúc mặt trời mọc." },
        { participant: 'Dexter', text: "Who needs outdoors when you've got ranked lobbies with the homies, right?", translation: "Cần gì ra ngoài dã ngoại khi mình đã có mấy trận đấu hạng căng đét với anh em, đúng không nhờ?" },
        { participant: 'Kai', text: "Big facts! Queue up right now, let's grab that victory crown!", translation: "Chuẩn không cần chỉnh! Bấm tìm trận luôn đi bồ, lấy cái vương miện vô địch trận này nào!" }
      ]
    }
  ],

  // -------------------------------------------------------------
  // LESSON 06: Văn hóa Ẩm thực Việt
  // -------------------------------------------------------------
  'lesson-06': [
    {
      type: 'pair',
      school: 'business',
      title: '👔 Diplomatic Delegation Culinary Reception',
      participants: [
        { name: 'Ambassador Thorne', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AmbassadorThorne', role: 'Trade Delegate' },
        { name: 'Madam Linh Tran', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MadamLinhTran', role: 'Cultural Attaché' }
      ],
      lines: [
        { participant: 'Ambassador Thorne', text: 'Madam Tran, this banquet offers an extraordinary introduction to authentic Vietnamese gastronomy.', translation: 'Thưa bà Trần, bữa tiệc này thực sự là một lời giới thiệu tuyệt vời về nền ẩm thực chuẩn vị nguyên bản của Việt Nam.' },
        { participant: 'Madam Linh Tran', text: 'Thank you, Mr. Ambassador. The bone broth for our specialty beef pho simmered for over twelve hours with star anise and cinnamon.', translation: 'Cảm ơn Ngài Đại sứ. Nước dùng từ xương cho món phở bò đặc sản của chúng tôi đã được ninh hơn 12 tiếng cùng hoa hồi và thanh quế.' },
        { participant: 'Ambassador Thorne', text: 'The depth of flavor from such natural ingredients is truly remarkable. Vietnamese culinary culture is a world-class asset.', translation: 'Độ đậm đà sâu lắng từ những nguyên liệu tự nhiên như thế này thực sự rất ấn tượng. Văn hóa ẩm thực Việt Nam là một tài sản đẳng cấp thế giới.' },
        { participant: 'Madam Linh Tran', text: 'We take great pride in our culinary heritage. May this shared meal strengthen our mutual diplomatic bonds.', translation: 'Chúng tôi rất tự hào về di sản ẩm thực của quê hương mình. Kính chúc bữa ăn sum vầy này sẽ thắt chặt thêm tình bang giao giữa đôi bên.' }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: '💬 Hanoi Old Quarter Food Tour',
      participants: [
        { name: 'Lan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LanFoodie', role: 'Local Friend' },
        { name: 'David', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DavidExpat', role: 'Expat Friend' }
      ],
      lines: [
        { participant: 'Lan', text: "David, are you ready to try some authentic Hanoi street food tonight?", translation: "David ơi, tối nay anh đã sẵn sàng thưởng thức những món ăn đường phố Hà Nội chuẩn vị chưa?" },
        { participant: 'David', text: "I can't wait, Lan! What specialty do you recommend we try first?", translation: "Tôi háo hức quá chừng rồi Lan ơi! Món đặc sản nào bạn gợi ý tụi mình nên thử đầu tiên vậy?" },
        { participant: 'Lan', text: "We have to start with Bun Cha. The pork patties are charcoal-grilled and the herbs are super fresh.", translation: "Tụi mình nhất định phải mở màn bằng Bún chả. Chả thịt nướng trên than hoa và rau sống ăn kèm thì siêu tươi ngon luôn." },
        { participant: 'David', text: "The aroma alone is mouthwatering! Lead the way, I'm completely in your hands.", translation: "Mới ngửi mùi thơm thôi mà nước miếng đã ứa ra rồi! Bạn dẫn đường đi, tôi tin tưởng bạn tuyệt đối luôn." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: '⚡ Midnight Street Food Alley Craving',
      participants: [
        { name: 'Bo', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BoStreet', role: 'Hungry Homie' },
        { name: 'Ken', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KenStreet', role: 'Hungry Homie' }
      ],
      lines: [
        { participant: 'Bo', text: "Yo Ken, my stomach is screaming! We gotta hit up that midnight street food cart right now.", translation: "Ê Ken ơi, bụng tui réo ầm ĩ rồi! Phải phi ra xe đẩy đồ ăn đường phố bán đêm ngay và luôn thôi." },
        { participant: 'Ken', text: "Say less! Are we getting crispy banh mi or that piping hot pho broth?", translation: "Khỏi cần nói nhiều! Làm ổ bánh mì giòn rụm hay húp tô nước dùng phở nóng hổi đây ông tướng?" },
        { participant: 'Bo', text: "Banh mi with extra chili and pate, bro. That auntie's homemade sauce is an absolute masterpiece!", translation: "Bánh mì nhiều ớt nhiều pate nhé ông. Nước sốt gia truyền của cô bán hàng đúng là kiệt tác luôn á!" },
        { participant: 'Ken', text: "Bet! Hop on the scooter, let's speed before she sells out!", translation: "Chốt đơn! Nhảy lên xe máy lẹ coi, phóng nhanh kẻo cô bán hết sạch bây giờ!" }
      ]
    }
  ],

  // -------------------------------------------------------------
  // LESSON 07: Mua sắm & Tiền bạc cơ bản
  // -------------------------------------------------------------
  'lesson-07': [
    {
      type: 'pair',
      school: 'business',
      title: '👔 Procurement & Budget Optimization Review',
      participants: [
        { name: 'Victoria Sterling', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=VictoriaProcure', role: 'Head of Procurement' },
        { name: 'Julian Drake', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JulianFinance', role: 'Chief Financial Officer' }
      ],
      lines: [
        { participant: 'Victoria Sterling', text: 'Mr. Drake, we have reviewed the vendor proposals against our quarterly capital expenditure budget.', translation: 'Thưa ông Drake, chúng tôi đã rà soát lại các đề xuất từ nhà cung ứng so với ngân sách chi tiêu vốn trong quý này.' },
        { participant: 'Julian Drake', text: 'Excellent, Victoria. Were any of the technology hardware quotes deemed overpriced?', translation: 'Rất tuyệt vời, Victoria. Có báo giá thiết bị phần cứng công nghệ nào bị đánh giá là đắt đỏ quá mức không?' },
        { participant: 'Victoria Sterling', text: 'Several enterprise servers carried unjustified price tags, but we negotiated a bulk discount bargain that saved fourteen percent.', translation: 'Một vài máy chủ doanh nghiệp gắn mức giá không tương xứng, nhưng chúng tôi đã thương lượng được thỏa thuận giá hời theo số lượng lớn giúp tiết kiệm 14%.' },
        { participant: 'Julian Drake', text: 'Splendid negotiation. Please ensure every itemized receipt is filed for corporate audit compliance.', translation: 'Khả năng đàm phán rất xuất sắc. Hãy đảm bảo mọi hóa đơn chi tiết đều được lưu trữ phục vụ cho đợt kiểm toán doanh nghiệp nhé.' }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: '💬 Weekend Boutique Shopping & Bargain Hunting',
      participants: [
        { name: 'Hien', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HienShop', role: 'Shopper' },
        { name: 'Shopkeeper', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ShopkeeperBoutique', role: 'Boutique Owner' }
      ],
      lines: [
        { participant: 'Hien', text: "Hello! Excuse me, could you tell me the price of this handwoven linen jacket?", translation: "Dạ xin chào cô! Cô cho con hỏi thăm giá của chiếc áo khoác vải lanh dệt tay này với ạ?" },
        { participant: 'Shopkeeper', text: "Hi dear! The price tag says four hundred thousand Dong, but it's pure organic cotton from local artisans.", translation: "Chào con gái! Mác giá là 400 nghìn đồng, nhưng là chất vải bông hữu cơ nguyên chất từ nghệ nhân làng nghề đấy con." },
        { participant: 'Hien', text: "It is beautiful, but slightly over my budget today. Could you offer a slight discount if I buy two items?", translation: "Dạ đẹp thật, cơ mà hơi vượt quá ngân sách hôm nay của con xíu. Cô có thể bớt giá chút xíu nếu con mua 2 món được không cô?" },
        { participant: 'Shopkeeper', text: "Because you're so polite, I can do seven hundred for both. Here is your printed receipt, sweetheart!", translation: "Vì con bé nói chuyện dễ thương lịch sự, cô bớt còn 700 nghìn cả đôi luôn nha. Hóa đơn in sẵn của con đây nhé!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: '⚡ Flea Market Vintage Thrift Haul',
      participants: [
        { name: 'Sammy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SammyThrift', role: 'Thrifter' },
        { name: 'Noah', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NoahThrift', role: 'Thrifter' }
      ],
      lines: [
        { participant: 'Sammy', text: "Noah, check this leather bomber jacket! Snagged it for twenty bucks. Absolute bargain of the century!", translation: "Noah ơi, xem cái áo khoác da bomber này đi! Tui tóm được giá có 20 đô bọ. Đúng là món hời đỉnh nhất thế kỷ luôn!" },
        { participant: 'Noah', text: "No way, bro! The thrift store downtown had the exact same jacket overpriced at a hundred!", translation: "Không thể nào, đùa à ông! Cái tiệm đồ cũ dưới phố bán đúng cái áo này mà hét giá đắt cắt cổ 100 đô lận!" },
        { participant: 'Sammy', text: "I checked the price tag three times to make sure my eyes weren't playing tricks on me, lol.", translation: "Tui phải căng mắt dòm cái mác giá 3 lần để chắc là mắt mình không bị hoa lên đấy, haha." },
        { participant: 'Noah', text: "Keep the receipt framed on your wall, man. That's a certified steal!", translation: "Đóng khung cái hóa đơn treo lên tường đi ông ơi. Kèo hời thế này đúng là không mua thì có lỗi với bản thân!" }
      ]
    }
  ],

  // -------------------------------------------------------------
  // LESSON 08: Thời gian & Lên kế hoạch
  // -------------------------------------------------------------
  'lesson-08': [
    {
      type: 'pair',
      school: 'business',
      title: '👔 Quarterly Deliverables & Milestone Alignment',
      participants: [
        { name: 'Director Henderson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DirectorHenderson', role: 'Project Director' },
        { name: 'Dr. Rachel Mills', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=RachelMills', role: 'Lead Architect' }
      ],
      lines: [
        { participant: 'Director Henderson', text: 'Dr. Mills, our upcoming product launch deadline is November fifteenth. How is the technical schedule holding up?', translation: 'Tiến sĩ Mills, hạn chót ra mắt sản phẩm sắp tới là ngày 15 tháng 11. Tiến độ kỹ thuật hiện đang duy trì như thế nào?' },
        { participant: 'Dr. Rachel Mills', text: 'We must prioritize security audits this week, Director. If testing passes, we will not need to postpone any release milestones.', translation: 'Chúng tôi phải ưu tiên hàng đầu cho việc kiểm toán bảo mật trong tuần này, thưa Giám đốc. Nếu các bài kiểm tra đạt, chúng ta sẽ không cần phải trì hoãn bất kỳ mốc phát hành nào.' },
        { participant: 'Director Henderson', text: 'Splendid. Let us schedule a formal alignment appointment with the steering committee on Thursday morning.', translation: 'Rất tốt. Chúng ta hãy lên lịch một cuộc hẹn thống nhất chính thức với ban chỉ đạo vào sáng thứ Năm.' },
        { participant: 'Dr. Rachel Mills', text: 'Ten o\'clock suits our engineering leads perfectly. I will distribute the briefing memorandum in advance.', translation: '10 giờ sáng rất phù hợp với các trưởng nhóm kỹ thuật. Tôi sẽ gửi bản ghi nhớ tóm tắt trước cuộc họp.' }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: '💬 Group Project Study Schedule Planning',
      participants: [
        { name: 'Kien', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KienPlan', role: 'Group Leader' },
        { name: 'Phuong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PhuongPlan', role: 'Teammate' }
      ],
      lines: [
        { participant: 'Kien', text: "Phuong, our project presentation deadline is next Friday. When can we meet to practice?", translation: "Phương ơi, hạn chót nộp bài thuyết trình nhóm là thứ Sáu tuần tới rồi. Khi nào tụi mình gặp nhau để dợt thử được nhỉ?" },
        { participant: 'Phuong', text: "Let's check our weekly schedules. Does Saturday morning around nine suit you?", translation: "Cùng kiểm tra lịch trình tuần này xem sao nhé. Sáng thứ Bảy tầm 9 giờ có tiện cho bạn không?" },
        { participant: 'Kien', text: "That works nicely! I have a dentist appointment in the afternoon, so morning is ideal.", translation: "Giờ đó hợp lý quá! Chiều hôm đó mình có hẹn đi nha sĩ rồi, nên buổi sáng là chuẩn bài." },
        { participant: 'Phuong', text: "Great, let's prioritize finishing the slides draft so we don't have to postpone anything last minute.", translation: "Tuyệt, tụi mình ưu tiên chốt xong bản nháp slide trước nhé để khỏi phải hoãn lại vào phút chót." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: '⚡ Weekend Hangout Texting Panic',
      participants: [
        { name: 'Cole', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ColeLate', role: 'Late Buddy' },
        { name: 'Finn', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=FinnLate', role: 'Waiting Buddy' }
      ],
      lines: [
        { participant: 'Finn', text: "Bro, where you at? The movie starts in ten minutes, you're ghosting the squad!", translation: "Ê ông ơi, đang ở xó nào thế? Phim chiếu trong 10 phút nữa rồi đấy, tính cho cả lũ leo cây à!" },
        { participant: 'Cole', text: "My bad, man! Running way behind schedule, traffic on the bridge is completely jammed.", translation: "Lỗi tui, ngàn lần xin lỗi ông nha! Lịch trình toang hết rồi, xe trên cầu kẹt cứng ngắc không nhích nổi." },
        { participant: 'Finn', text: "Can we postpone our ticket seats to the next showing at eight or what?", translation: "Liệu có đổi lùi vé sang suất chiếu 8 giờ tối được không, hay tính sao đây?" },
        { participant: 'Cole', text: "Yeah, swap 'em real quick! I'm speeding through the intersection now, buy the popcorn!", translation: "Ừa, đổi vé gấp giùm tui với! Tui đang phóng qua ngã tư đây rồi, nhớ mua bỏng ngô nhá!" }
      ]
    }
  ],

  // -------------------------------------------------------------
  // LESSON 09: Tìm đường & Vị trí Thành phố
  // -------------------------------------------------------------
  'lesson-09': [
    {
      type: 'pair',
      school: 'business',
      title: '👔 Hotel Concierge & Executive Navigation',
      participants: [
        { name: 'Concierge Jean-Paul', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JeanPaulConcierge', role: 'Head Concierge' },
        { name: 'Senator Montgomery', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SenatorMont', role: 'Visiting Dignitary' }
      ],
      lines: [
        { participant: 'Senator Montgomery', text: 'Pardon me, sir. Could you direct me toward the municipal convention center for our bilateral conference?', translation: 'Xin thứ lỗi cho tôi hỏi thăm. Ông có thể hướng dẫn lối đi đến trung tâm hội nghị thành phố cho phiên hội đàm song phương của chúng tôi không?' },
        { participant: 'Concierge Jean-Paul', text: 'With pleasure, Senator. The shortest and most scenic route is through the grand boulevard adjacent to the historic Opera landmark.', translation: 'Rất hân hạnh được phục vụ Ngài. Tuyến đường ngắn nhất và cảnh quan đẹp nhất là đi qua đại lộ nằm kế bên địa danh Nhà hát Lớn lịch sử.' },
        { participant: 'Senator Montgomery', text: 'Are there any complex traffic intersections I should advise my driver to anticipate?', translation: 'Có ngã tư giao lộ phức tạp nào mà tôi cần nhắc tài xế của mình chú ý quan sát không?' },
        { participant: 'Concierge Jean-Paul', text: 'Only the roundabout at Grand Plaza, sir. Your destination will be prominent directly on your right.', translation: 'Dạ chỉ có vòng xuyến tại Quảng trường Lớn thôi thưa Ngài. Điểm đích đến của Ngài sẽ hiện rõ nổi bật ngay phía tay phải.' }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: '💬 City Center Directions & Famous Bubble Tea',
      participants: [
        { name: 'Robert', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=RobertTourist', role: 'Tourist' },
        { name: 'Tram', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TramLocal', role: 'Local Resident' }
      ],
      lines: [
        { participant: 'Robert', text: "Excuse me, could you show me the way to the central library? I think I might be turned around.", translation: "Xin lỗi ơi, bạn chỉ giúp mình đường đến thư viện trung tâm với được không? Hình như mình đang đi lạc hướng mất rồi." },
        { participant: 'Tram', text: "No worries at all! Go straight down this avenue until you see the big cathedral landmark.", translation: "Không sao đâu bạn ơi! Bạn cứ đi thẳng tắp theo đại lộ này tới khi nhìn thấy biểu tượng nhà thờ lớn nhé." },
        { participant: 'Robert', text: "Great, do I need to make any turns at the next traffic intersection?", translation: "Tuyệt quá, thế mình có cần quẹo gì ở ngã tư đèn giao thông tiếp theo không?" },
        { participant: 'Tram', text: "Yes, take a quick left at the intersection. Your destination is just around the corner, right next to a bookstore.", translation: "Có nhé, bạn quẹo trái ở ngã tư. Điểm đến của bạn ở ngay góc cua đằng kia thôi, sát cạnh tiệm sách luôn." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: '⚡ Lost in Alley Maze Sneaker Hunt',
      participants: [
        { name: 'Toby', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TobyLost', role: 'Lost Buddy' },
        { name: 'Gavin', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=GavinLost', role: 'Lost Buddy' }
      ],
      lines: [
        { participant: 'Toby', text: "Dude, Google Maps is bugging out! We've been circling this exact alley three times.", translation: "Ông ơi, Google Maps bị ngáo rồi! Tụi mình lượn vòng quanh đúng cái ngõ này 3 lần rồi đấy." },
        { participant: 'Gavin', text: "Lmao, I told you to look for the neon graffiti landmark! We missed the turn completely.", translation: "Haha, tui đã bảo ông tìm cái điểm mốc hình vẽ graffiti phát sáng rồi mà! Tụi mình đi lố ngã rẽ rồi." },
        { participant: 'Toby', text: "Is this sketchy shortcut the shortest route to the sneaker store or are we doomed?", translation: "Cái hẻm nhỏ trông mờ ám này có phải đường ngắn nhất tới tiệm giày không hay tụi mình toang rồi?" },
        { participant: 'Gavin', text: "Chill, bro! Cut through here, our destination is literally behind that coffee joint. Let's sprint!", translation: "Bình tĩnh ông giáo! Luồn qua đây là tới, điểm đến ngay sau lưng quán cà phê kia kìa. Chạy lẹ lên!" }
      ]
    }
  ],

  // -------------------------------------------------------------
  // LESSON 10: Giao tiếp Mạng & Điện thoại
  // -------------------------------------------------------------
  'lesson-10': [
    {
      type: 'pair',
      school: 'business',
      title: '👔 High-Level Boardroom Video Conference Protocol',
      participants: [
        { name: 'Chairperson Davis', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ChairpersonDavis', role: 'Board Chair' },
        { name: 'Dr. Kimberly Lee', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DrKimberlyLee', role: 'Chief Technology Officer' }
      ],
      lines: [
        { participant: 'Chairperson Davis', text: 'Dr. Lee, we are prepared for your technical briefing, but I believe your microphone is currently on mute.', translation: 'Tiến sĩ Lee, chúng tôi đã sẵn sàng cho phần báo cáo kỹ thuật của cô, tuy nhiên tôi nhận thấy mic của cô dường như đang tắt tiếng.' },
        { participant: 'Dr. Kimberly Lee', text: 'My apologies, Chairperson Davis. My notification feed caused a minor audio interruption.', translation: 'Xin thứ lỗi cho tôi thưa Chủ tịch Davis. Chuông thông báo trên máy tôi vừa gây ra một gián đoạn âm thanh nhỏ.' },
        { participant: 'Chairperson Davis', text: 'Understood. Is your broadband connection sufficiently stable to stream the financial data visualizations?', translation: 'Tôi hiểu rồi. Đường truyền mạng băng thông của cô có đủ ổn định để phát dữ liệu trực quan tài chính không?' },
        { participant: 'Dr. Kimberly Lee', text: 'Yes, sir. I will shoot the encrypted deck to every board member\'s inbox immediately as a failsafe.', translation: 'Dạ có thưa ông. Tôi sẽ gửi nhanh tập tài liệu mã hóa vào hòm thư của từng thành viên hội đồng quản trị ngay lập tức để dự phòng.' }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: '💬 Online Study Group Call Check-in',
      participants: [
        { name: 'Phuc', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PhucOnline', role: 'Classmate' },
        { name: 'Jane', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JaneOnline', role: 'Classmate' }
      ],
      lines: [
        { participant: 'Phuc', text: "Hey Jane! Can you hear me clearly, or is my internet connection lagging on your end?", translation: "Chào Jane ơi! Bạn nghe rõ tiếng mình nói không, hay kết nối mạng bên mình đang bị lag giật thế?" },
        { participant: 'Jane', text: "I can hear you now, but you were on mute a second ago! Also, your voice started to break up slightly.", translation: "Giờ thì mình nghe được rồi, nhưng một giây trước bạn bị tắt mic đấy! Mà giọng bạn cũng hơi bập bõm một chút." },
        { participant: 'Phuc', text: "Ah, my bad! My room Wi-Fi has been acting up all afternoon. I'll turn off my camera to save bandwidth.", translation: "Á, lỗi tại mình rồi! Wi-Fi phòng mình chiều nay cứ chập chờn suốt. Mình tắt bớt camera cho đỡ tốn băng thông nhé." },
        { participant: 'Jane', text: "Sounds good. Shoot me the Google Docs link in the chatbox so we can edit the slides together.", translation: "Hợp lý đấy. Bắn link Google Docs vào ô chat cho mình với để tụi mình cùng sửa slide nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: '⚡ Squad Gaming Voice Chat High Ping Rant',
      participants: [
        { name: 'Nate', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NatePing', role: 'Squad Teammate' },
        { name: 'Chase', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ChasePing', role: 'Squad Teammate' }
      ],
      lines: [
        { participant: 'Nate', text: "Bro! Unmute your mic, you've been talking to yourself for ten straight minutes!", translation: "Ông tướng ơi! Bật mic lên coi, ông tự lẩm bẩm một mình suốt 10 phút đồng hồ rồi đấy!" },
        { participant: 'Chase', text: "Yo my bad, lmao! My connection is dying today, ping spiked to three hundred ms.", translation: "Yo lỗi tui, haha! Mạng họ nhà tui hôm nay muốn ngỏm củ tỏi rồi, ping vọt lên tận 300 ms." },
        { participant: 'Nate', text: "You're breaking up so bad you sound like an alien robot, fr.", translation: "Giọng ông giật đùng đùng bập bõm nghe như người ngoài hành tinh ấy, thề luôn." },
        { participant: 'Chase', text: "Gimme a sec, gonna restart my router. Shoot me a game invite once I'm back online!", translation: "Chờ tui một giây, tui khởi động lại cục phát wifi. Bắn cho tui cái lời mời vào phòng khi tui online lại nhé!" }
      ]
    }
  ],

  // -------------------------------------------------------------
  // LESSON 11: Sức khỏe & Cảm xúc
  // -------------------------------------------------------------
  'lesson-11': [
    {
      type: 'pair',
      school: 'business',
      title: '👔 Executive Health & Medical Leave Consultation',
      participants: [
        { name: 'Dr. Alistair Finch', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DrAlistairFinch', role: 'Corporate Health Advisor' },
        { name: 'Helena Berg', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HelenaBerg', role: 'Senior Audit Manager' }
      ],
      lines: [
        { participant: 'Dr. Alistair Finch', text: 'Good morning, Ms. Berg. I noticed you logged medical leave due to a persistent headache and exhaustion.', translation: 'Chào buổi sáng cô Berg. Tôi nhận thấy cô có đăng ký nghỉ ốm vì chứng đau đầu dai dẳng và tình trạng kiệt sức.' },
        { participant: 'Helena Berg', text: 'Yes, Doctor Finch. I have felt uncharacteristically anxious regarding our compliance deadlines.', translation: 'Vâng đúng vậy thưa Bác sĩ Finch. Tôi cảm thấy bất an và lo âu khác thường trước các hạn chót tuân thủ quy định.' },
        { participant: 'Dr. Alistair Finch', text: 'Mental fatigue is a serious clinical symptom. I strongly advise taking three days of complete rest to recover fully.', translation: 'Mệt mỏi kiệt quệ tinh thần là một triệu chứng lâm sàng rất nghiêm trọng. Tôi khuyên cô nên nghỉ ngơi trọn vẹn 3 ngày để hồi phục hoàn toàn.' },
        { participant: 'Helena Berg', text: 'Thank you for your clinical guidance, Doctor. I will delegate my immediate tasks and focus on wellness.', translation: 'Cảm ơn sự tư vấn y khoa tận tình của Bác sĩ. Tôi sẽ bàn giao các nhiệm vụ trước mắt và tập trung hồi phục sức khỏe.' }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: '💬 Caring for a Sick Classmate',
      participants: [
        { name: 'Tram', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TramCaring', role: 'Classmate' },
        { name: 'Lam', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LamSick', role: 'Sick Classmate' }
      ],
      lines: [
        { participant: 'Tram', text: "Lam, you missed classes this morning! Are you feeling any better?", translation: "Lâm ơi, sáng nay không thấy bạn đi học! Trong người đã thấy đỡ hơn chút nào chưa?" },
        { participant: 'Lam', text: "Not really, I'm feeling quite under the weather. I woke up with a pounding headache and fever.", translation: "Vẫn chưa bạn ơi, mình thấy khá mệt mỏi trong người. Sáng nay dậy đầu đau như búa bổ và hơi sốt nữa." },
        { participant: 'Tram', text: "Oh no, those sound like classic flu symptoms. You looked completely exhausted yesterday.", translation: "Trời ơi, nghe đúng là các triệu chứng cảm cúm kinh điển rồi. Hôm qua nhìn bạn đã thấy kiệt sức lắm rồi." },
        { participant: 'Lam', text: "Yeah, I was anxious about the midterm exam. I'm taking some warm soup to recover quickly.", translation: "Ừa, đợt này mình cũng hơi lo âu về bài thi giữa kỳ nữa. Mình đang húp chút súp nóng cho nhanh hồi phục đây." },
        { participant: 'Tram', text: "Get well soon, buddy! Don't worry about notes; I'll share everything with you.", translation: "Mau khỏe lại nhé bạn thân ơi! Đừng lo bài vở, mình sẽ gửi toàn bộ ghi chú cho bạn." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: '⚡ Post-All-Nighter Exhaustion Venting',
      participants: [
        { name: 'Kip', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KipTired', role: 'Burnt Out Buddy' },
        { name: 'Jax', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JaxTired', role: 'Burnt Out Buddy' }
      ],
      lines: [
        { participant: 'Kip', text: "Bro, my brain is turning into mush. Pulled a 24-hour grind and now I'm completely wiped out.", translation: "Ông ơi, não tui sắp nhũn ra như cháo rồi. Thức trắng 24 tiếng cày việc giờ kiệt sức rã rời luôn." },
        { participant: 'Jax', text: "Dude, you look like a walking zombie! Pop an aspirin for that killer headache before you pass out.", translation: "Ông giáo ơi, trông ông như xác sống di động ấy! Uống viên giảm đau cho đỡ nhức đầu trước khi ngất ra đấy đi." },
        { participant: 'Kip', text: "I was getting so anxious about failing that I forgot to eat real food all day, ngl.", translation: "Tui lo thi trượt đến mức căng thẳng cả ngày chả buồn ăn hạt cơm nào vào bụng, thề luôn." },
        { participant: 'Jax', text: "Go crash for ten hours, man. Sleep is the only way you recover from this mess!", translation: "Đi ngủ ngay 10 tiếng đi ông tướng. Chỉ có ngủ mới cứu nổi ông khỏi mớ bòng bong kiệt sức này thôi!" }
      ]
    }
  ],

  // -------------------------------------------------------------
  // LESSON 12: Hướng nghiệp & Sở thích Học tập
  // -------------------------------------------------------------
  'lesson-12': [
    {
      type: 'pair',
      school: 'business',
      title: '👔 Executive Career Fair & Recruitment Interview',
      participants: [
        { name: 'Managing Partner Sterling', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PartnerSterling', role: 'Lead Recruiter' },
        { name: 'An Nguyen', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AnCandidate', role: 'Candidate' }
      ],
      lines: [
        { participant: 'Managing Partner Sterling', text: 'Good afternoon, Mr. Nguyen. What academic ambition inspired you to pursue a profession in strategic consulting?', translation: 'Chào buổi chiều anh Nguyên. Hoài bão học thuật nào đã truyền cảm hứng để anh theo đuổi nghề nghiệp tư vấn chiến lược?' },
        { participant: 'An Nguyen', text: 'My university major in International Economics revealed how analytical guidance can empower sustainable business growth.', translation: 'Chuyên ngành Kinh tế Quốc tế của em đã mở ra thấy được sự định hướng phân tích sắc sảo có thể thúc đẩy tăng trưởng doanh nghiệp bền vững như thế nào.' },
        { participant: 'Managing Partner Sterling', text: 'A commendable answer. In consulting, continuous learning is essential to navigate complex market dynamics.', translation: 'Một câu trả lời rất đáng khen ngợi. Trong ngành tư vấn, việc học hỏi không ngừng là thiết yếu để thích ứng với biến động thị trường.' },
        { participant: 'An Nguyen', text: 'I am eager to contribute my utmost diligence under the mentorship of your esteemed senior partners.', translation: 'Em rất mong muốn được cống hiến hết sự tận tụy của mình dưới sự dìu dắt của các vị lãnh đạo cấp cao trong công ty.' }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: '💬 Coffee Shop University Major Discussion',
      participants: [
        { name: 'Nga', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NgaCareer', role: 'Senior Student' },
        { name: 'Bao', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BaoCareer', role: 'Senior Student' }
      ],
      lines: [
        { participant: 'Nga', text: "Bao, graduation is coming up so fast! Have you decided which profession you want to pursue?", translation: "Bảo ơi, sắp tốt nghiệp đến nơi rồi nhanh ghê! Bạn đã quyết định muốn theo đuổi nghề nghiệp nào chưa?" },
        { participant: 'Bao', text: "My main ambition is to become an AI product developer. I love designing smart algorithms that help people.", translation: "Hoài bão lớn nhất của mình là trở thành nhà phát triển sản phẩm AI. Mình thích thiết kế các thuật toán thông minh giúp ích cho đời sống." },
        { participant: 'Nga', text: "That fits your computer science major perfectly! Have you sought any guidance from our career center?", translation: "Rất đúng chuyên ngành Khoa học Máy tính của bạn luôn! Bạn đã đến xin định hướng từ trung tâm hướng nghiệp chưa?" },
        { participant: 'Bao', text: "Yes, our counselor suggested building open-source projects first. What about your career path, Nga?", translation: "Rồi nè, thầy tư vấn khuyên mình nên bắt tay xây dựng dự án mã nguồn mở trước. Còn con đường của Nga thì sao?" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: '⚡ Late-Night Startup Dream Banter',
      participants: [
        { name: 'Finn', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=FinnDream', role: 'Indie Hacker' },
        { name: 'Zack', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ZackDream', role: 'Indie Hacker' }
      ],
      lines: [
        { participant: 'Finn', text: "Bro, working a 9-to-5 corporate grind is not the vibe for me. I gotta pursue my own game studio hustle!", translation: "Ông ơi, ngồi văn phòng cày cuốc từ 9 giờ sáng tới 5 giờ chiều không phải gu của tui rồi. Phải tự theo đuổi đam mê lập studio làm game thôi!" },
        { participant: 'Zack', text: "No cap! That's the ultimate ambition right there. Forget the corporate ladder, let's build our own empire.", translation: "Chuẩn đét! Đó mới là hoài bão lớn đời người chứ. Cần gì leo thang danh vọng văn phòng, tự tay dựng cơ đồ của mình đi." },
        { participant: 'Finn', text: "Fr, but we definitely need some guidance from seasoned devs so we don't go broke in month two.", translation: "Thề luôn, nhưng chắc chắn tụi mình phải kiếm ai đó đi trước chỉ giáo thêm chứ không lại rỗng túi tháng thứ hai bây giờ." },
        { participant: 'Zack', text: "Bet! We code all weekend, pitch to angel investors, and make millions. Let's get it!", translation: "Kèo thơm! Cuối tuần này thức trắng viết code, đi gọi vốn thiên thần rồi hốt bạc. Chiến luôn ông giáo ơi!" }
      ]
    }
  ],

  // -------------------------------------------------------------
  // LESSON 13: Lễ Tết & Phong tục Việt
  // -------------------------------------------------------------
  'lesson-13': [
    {
      type: 'pair',
      school: 'business',
      title: '👔 Lunar New Year Corporate Diplomatic Greeting',
      participants: [
        { name: 'General Director Vuong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=VuongDirector', role: 'General Director' },
        { name: 'Consul General Dupont', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DupontConsul', role: 'Consul General' }
      ],
      lines: [
        { participant: 'General Director Vuong', text: 'Honorable Consul Dupont, on behalf of our enterprise, I extend our warmest wishes for health and prosperity this Lunar New Year.', translation: 'Kính thưa Ngài Tổng lãnh sự Dupont, đại diện cho doanh nghiệp, tôi xin gửi lời chúc sức khỏe và thịnh vượng nồng nhiệt nhất nhân dịp Tết Nguyên Đán.' },
        { participant: 'Consul General Dupont', text: 'Thank you cordially, Director Vuong. The vibrant Tet decorations and peach blossoms across the city are magnificent.', translation: 'Chân thành cảm ơn Giám đốc Vương. Những món đồ trang trí Tết rực rỡ và sắc hoa đào khắp phố phường thực sự vô cùng tráng lệ.' },
        { participant: 'General Director Vuong', text: 'It is our cherished cultural custom for families to gather and celebrate reunion, honoring ancestral roots.', translation: 'Đó là phong tục văn hóa thiêng liêng để các gia đình tề tựu đoàn sum họp, hướng về cội nguồn tổ tiên.' },
        { participant: 'Consul General Dupont', text: 'May this meaningful festival usher in peace and fruitful bilateral collaborations for our nations.', translation: 'Kính chúc ngày lễ hội ý nghĩa này sẽ mang lại hòa bình và sự hợp tác song phương đơm hoa kết trái cho hai quốc gia chúng ta.' }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: '💬 Friendly Tet Holiday Cultural Exchange',
      participants: [
        { name: 'Kieu', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KieuTet', role: 'Local Friend' },
        { name: 'Tom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TomTet', role: 'Expat Friend' }
      ],
      lines: [
        { participant: 'Kieu', text: "Tom, have you seen all the red decorations and kumquat trees outside? Tet is almost here!", translation: "Tom ơi, anh đã thấy cây quất và đồ trang trí màu đỏ rực rỡ ngoài đường chưa? Tết sắp đến rồi đó!" },
        { participant: 'Tom', text: "Yes! The atmosphere is electric. What is the most important tradition during this festival?", translation: "Tôi thấy rồi chứ! Không khí tưng bừng ghê. Đâu là truyền thống quan trọng nhất trong dịp lễ này vậy?" },
        { participant: 'Kieu', text: "It's all about family reunion. Relatives from all over gather to cook square sticky rice cakes and wish each other prosperity.", translation: "Quan trọng nhất là sự sum họp gia đình. Họ hàng từ khắp nơi tụ họp về để gói bánh chưng và chúc nhau an khang thịnh vượng." },
        { participant: 'Tom', text: "That is so heartwarming. Wishing you and your loved ones an incredible and joyful New Year!", translation: "Ấm áp quá chừng. Chúc bạn và gia đình có một năm mới thật tuyệt vời và tràn đầy niềm vui nhé!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: '⚡ Lucky Money & Banh Chung Banter',
      participants: [
        { name: 'Tuan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TuanLiXi', role: 'Young Cousin' },
        { name: 'An', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AnLiXi', role: 'Young Cousin' }
      ],
      lines: [
        { participant: 'Tuan', text: "Yo An! Put on your best outfit, we gotta go gather at Grandma's house for the red envelope hunt!", translation: "Ê An ơi! Mặc bộ đồ xịn nhất vào, chuẩn bị kéo quân sang nhà bà nội săn lì xì thôi nào!" },
        { participant: 'An', text: "Lmao bet! Wishing prosperity to all the aunties and uncles so our pockets stay heavy, no cap!", translation: "Haha kèo thơm! Chúc Tết các cô các chú tiền vào như nước để ví tụi mình căng đét, thề không điêu!" },
        { participant: 'Tuan', text: "Did you help wrap the Banh Chung yesterday or did you just snack on candied coconut all day?", translation: "Hôm qua có phụ gói bánh chưng tí nào không hay chỉ ngồi đớp mứt dừa suốt cả ngày thế?" },
        { participant: 'An', text: "Hey, taste-testing the festive treats is a vital holiday custom too, bro! Let's ride!", translation: "Ơ kìa, nếm thử bánh kẹo cũng là phong tục ngày Tết quan trọng lắm đấy nhé ông anh! Lên xe đi thôi!" }
      ]
    }
  ],

  // -------------------------------------------------------------
  // LESSON 14: Du lịch & Vẻ đẹp quê hương
  // -------------------------------------------------------------
  'lesson-14': [
    {
      type: 'pair',
      school: 'business',
      title: '👔 International Eco-Tourism Keynote & Partnership',
      participants: [
        { name: 'Tourism Commissioner Sterling', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CommSterling', role: 'Tourism Board Head' },
        { name: 'Lady Charlotte Wynne', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LadyWynne', role: 'Luxury Travel Agency Director' }
      ],
      lines: [
        { participant: 'Tourism Commissioner Sterling', text: 'Lady Wynne, our regional initiative showcases the breathtaking karst scenery of Ha Long Bay with sustainable luxury standards.', translation: 'Kính thưa bà Wynne, sáng kiến khu vực của chúng tôi tôn vinh cảnh quan núi đá vôi kỳ vĩ làm say đắm lòng người của Vịnh Hạ Long theo các tiêu chuẩn du lịch sinh thái cao cấp.' },
        { participant: 'Lady Charlotte Wynne', text: 'Our international clientele is deeply drawn to the authentic hospitality of Vietnamese coastal communities.', translation: 'Các khách hàng thượng lưu quốc tế của chúng tôi đặc biệt yêu mến lòng hiếu khách chân thành, nồng hậu của các cộng đồng miền duyên hải Việt Nam.' },
        { participant: 'Tourism Commissioner Sterling', text: 'We have curated a bespoke four-day itinerary balancing cultural heritage, gastronomy, and artisan souvenir workshops.', translation: 'Chúng tôi đã thiết kế một lịch trình 4 ngày độc quyền kết hợp hài hòa giữa di sản văn hóa, ẩm thực và các buổi trải nghiệm đồ lưu niệm thủ công.' },
        { participant: 'Lady Charlotte Wynne', text: 'Exquisite. I foresee this partnership becoming our agency\'s premier Southeast Asian expedition.', translation: 'Thật tuyệt hảo. Tôi tin rằng mối quan hệ đối tác này sẽ trở thành chuyến hành trình Đông Nam Á hàng đầu của công ty chúng tôi.' }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: '💬 Vacation Itinerary Planning for Da Lat',
      participants: [
        { name: 'Ha', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HaTravel', role: 'Coworker' },
        { name: 'Nick', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NickTravel', role: 'Coworker' }
      ],
      lines: [
        { participant: 'Ha', text: "Nick, look at these photos from my hometown Da Lat! The mountain scenery is absolutely breathtaking.", translation: "Nick ơi, xem mấy bức ảnh này từ quê Đà Lạt của mình nè! Thắng cảnh đồi núi kỳ vĩ đẹp đến nghẹt thở luôn." },
        { participant: 'Nick', text: "Wow, the pine forests and morning mist look stunning! How is the local hospitality there?", translation: "Uầy, rừng thông với sương mù buổi sớm trông ảo diệu ghê! Lòng hiếu khách của người dân ở đó thế nào bạn?" },
        { participant: 'Ha', text: "People are incredibly warm and welcoming. Let's put together an itinerary for our summer vacation!", translation: "Mọi người cực kỳ ấm áp và nhiệt tình luôn. Tụi mình cùng lên một lịch trình du hí cho kỳ nghỉ hè tới đi!" },
        { participant: 'Nick', text: "Count me in! Make sure we set aside time to buy some fresh artichoke tea as souvenirs.", translation: "Cho mình một vé nhé! Nhớ dành chút thời gian ghé mua trà atisô tươi về làm quà lưu niệm nha." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: '⚡ Ha Giang Motorbike Loop Roadtrip Hype',
      participants: [
        { name: 'Rex', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=RexBiker', role: 'Backpacker' },
        { name: 'Colt', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ColtBiker', role: 'Backpacker' }
      ],
      lines: [
        { participant: 'Rex', text: "Bro, riding motorbikes through Ha Giang pass was the most insane trip of my entire life!", translation: "Ông ơi, phi xe máy qua đèo Hà Giang đúng là chuyến đi điên rồ nhất cuộc đời tui luôn á!" },
        { participant: 'Colt', text: "No cap! That canyon scenery took my breath away. Pure adrenaline rush at every cliff edge.", translation: "Thề luôn! Cảnh sắc hẻm vực đẹp chết đứng con người ta. Cảm giác hưng phấn nghẹt thở ở từng khúc cua vách đá." },
        { participant: 'Rex', text: "And the homestay aunties treated us like royalty with endless hot tea and roasted corn.", translation: "Mà mấy cô chủ nhà homestay tiếp đãi anh em mình như vua chúa, trà nóng với ngô nướng ê hề luôn." },
        { participant: 'Colt', text: "Bought a handmade woven scarf as a souvenir, but the real prize was those epic mountain memories, fr!", translation: "Tui có mua cái khăn dệt tay làm kỷ niệm, cơ mà món quà đỉnh nhất vẫn là mấy kỷ niệm núi non bão táp này, thề!" }
      ]
    }
  ],

  // -------------------------------------------------------------
  // LESSON 15: Môi trường & Trách nhiệm
  // -------------------------------------------------------------
  'lesson-15': [
    {
      type: 'pair',
      school: 'business',
      title: '👔 ESG Sustainability & Carbon Footprint Board Briefing',
      participants: [
        { name: 'Chief Sustainability Officer Pierce', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PierceCSO', role: 'Chief Sustainability Officer' },
        { name: 'Board Member Catherine', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CatherineBoard', role: 'Board Director' }
      ],
      lines: [
        { participant: 'Chief Sustainability Officer Pierce', text: 'Good morning, Director Catherine. Our ESG mandate requires us to conserve natural resources and cut industrial pollution across supply lines.', translation: 'Kính chào bà Catherine. Định hướng tiêu chuẩn ESG đòi hỏi chúng ta phải bảo tồn tài nguyên thiên nhiên và cắt giảm ô nhiễm công nghiệp xuyên suốt chuỗi cung ứng.' },
        { participant: 'Board Member Catherine', text: 'Agreed, Mr. Pierce. How effectively are our packaging facilities transitioning to recycle biodegradable materials?', translation: 'Tôi hoàn toàn nhất trí, ông Pierce. Các cơ sở đóng gói của chúng ta đang chuyển đổi để tái chế các vật liệu tự phân hủy sinh học hiệu quả ra sao?' },
        { participant: 'Chief Sustainability Officer Pierce', text: 'We have replaced ninety percent of single-use plastics with certified organic plant-based fibers.', translation: 'Chúng tôi đã thay thế 90% nhựa dùng một lần bằng sợi thực vật hữu cơ đạt chứng nhận tiêu chuẩn.' },
        { participant: 'Board Member Catherine', text: 'Commendable progress. Corporate voluntary leadership in environmental stewardship is essential for our global brand value.', translation: 'Một sự tiến bộ rất đáng khen ngợi. Tinh thần tự nguyện tiên phong của doanh nghiệp trong bảo vệ môi trường là điều sống còn cho giá trị thương hiệu toàn cầu của chúng ta.' }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: '💬 Campus Green Club Beach Cleanup',
      participants: [
        { name: 'An', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AnGreen', role: 'Club Member' },
        { name: 'Trung', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TrungGreen', role: 'Club Member' }
      ],
      lines: [
        { participant: 'An', text: "Trung, look at all the plastic litter washed ashore. The ocean pollution is really heartbreaking.", translation: "Trung ơi, nhìn đống rác nhựa dạt vào bờ biển kìa. Tình trạng ô nhiễm đại dương thực sự nhức nhối quá." },
        { participant: 'Trung', text: "It is, An. That's why our voluntary cleanup drive today is so important. Every small action counts.", translation: "Đúng thế An. Đó là lý do tại sao chiến dịch tình nguyện dọn rác hôm nay của tụi mình lại ý nghĩa như vậy. Từng hành động nhỏ đều có giá trị." },
        { participant: 'An', text: "We can separate the plastic bottles to recycle them properly, and encourage shops to use organic packaging.", translation: "Tụi mình có thể phân loại chai nhựa để tái chế đúng cách, và vận động các quán xá chuyển sang bao bì hữu cơ." },
        { participant: 'Trung', text: "Great idea! Let's conserve our beautiful coastline so the marine wildlife stays safe.", translation: "Ý tưởng tuyệt vời! Cùng chung tay bảo tồn bờ biển tươi đẹp để các sinh vật biển luôn được an toàn nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: '⚡ Trash Tag TikTok Challenge Video',
      participants: [
        { name: 'Spike', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SpikeEco', role: 'Eco Teen' },
        { name: 'Dash', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DashEco', role: 'Eco Teen' }
      ],
      lines: [
        { participant: 'Spike', text: "Yo Dash! Film this real quick, we're doing the trash cleanup challenge for social media!", translation: "Ê Dash ơi! Bật máy quay lẹ cái coi, anh em mình làm clip thử thách dọn sạch bãi rác đăng mạng xã hội nè!" },
        { participant: 'Dash', text: "Got you on camera, bro! Bag up all those nasty plastic cups so we can recycle 'em.", translation: "Bắt trọn khung hình rồi ông tướng! Nhét hết mấy cái cốc nhựa bẩn thỉu kia vào bao để đem đi tái chế nào." },
        { participant: 'Spike', text: "No cap, plastic pollution in this park was getting outta hand. Look at that clean grass now!", translation: "Thề luôn, rác nhựa ở cái công viên này từng ngập ngụa mất kiểm soát dã man. Nhìn bãi cỏ sạch bong giờ xem!" },
        { participant: 'Dash', text: "Total glow-up for the environment! Tag the squad and tell 'em to conserve nature, fr!", translation: "Lột xác 100 điểm cho môi trường luôn! Gắn thẻ hội anh em vào nhắc nhở bảo vệ thiên nhiên ngay và luôn!" }
      ]
    }
  ],

  // -------------------------------------------------------------
  // LESSON 16: Cảm ơn, Xin lỗi & Phép Lịch sự
  // -------------------------------------------------------------
  'lesson-16': [
    {
      type: 'pair',
      school: 'business',
      title: '👔 Executive Client Resolution & Cordial Gratitude',
      participants: [
        { name: 'Senior Partner Sinclair', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SinclairPartner', role: 'Senior Partner' },
        { name: 'Baroness Von Meyer', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=VonMeyerClient', role: 'Key Stakeholder' }
      ],
      lines: [
        { participant: 'Senior Partner Sinclair', text: 'Baroness Von Meyer, I sincerely apologize for the slight misunderstanding regarding the delivery date of the portfolio.', translation: 'Kính thưa Nữ nam tước Von Meyer, tôi chân thành xin lỗi vì sự hiểu nhầm nhỏ liên quan đến ngày bàn giao tập hồ sơ đầu tư.' },
        { participant: 'Baroness Von Meyer', text: 'I appreciate your prompt explanation, Mr. Sinclair. Clear and polite communication resolves any oversight.', translation: 'Tôi ghi nhận lời giải thích nhanh chóng của ông, ông Sinclair. Giao tiếp rõ ràng và lịch sự sẽ giải tỏa mọi sơ suất.' },
        { participant: 'Senior Partner Sinclair', text: 'We are exceptionally grateful for your gracious patience and continued trust in our advisory services.', translation: 'Chúng tôi vô cùng biết ơn sự bao dung kiên nhẫn và niềm tin bền bỉ của bà đối với dịch vụ tư vấn của chúng tôi.' },
        { participant: 'Baroness Von Meyer', text: 'All is forgiven. Let us proceed with our quarterly agenda with full confidence.', translation: 'Mọi chuyện đều được bỏ qua. Chúng ta hãy tiếp tục lịch trình quý với sự tin tưởng tuyệt đối.' }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: '💬 Returning a Borrowed Book & Milk Tea Treat',
      participants: [
        { name: 'Hung', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HungBook', role: 'Friend' },
        { name: 'Chloe', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ChloeBook', role: 'Friend' }
      ],
      lines: [
        { participant: 'Hung', text: "Chloe, I sincerely apologize for the delay in returning your IELTS book! I had a crazy exam week.", translation: "Chloe ơi, mình chân thành xin lỗi vì sự chậm trễ trong việc gửi trả cuốn sách IELTS của bạn nhé! Tuần rồi mình thi cử bận tối mắt." },
        { participant: 'Chloe', text: "Oh, don't worry about it at all, Hung! It was just a minor misunderstanding about the dates.", translation: "Ồ, không có gì phải bận tâm đâu Hùng ơi! Chỉ là hiểu nhầm chút xíu về ngày hẹn thôi mà." },
        { participant: 'Hung', text: "I'm super grateful for your patience. I brought you your favorite brown sugar milk tea as a thank you!", translation: "Mình siêu biết ơn sự kiên nhẫn của bạn. Mình mua tặng bạn ly trà sữa đường đen gu ruột của bạn để cám ơn nè!" },
        { participant: 'Chloe', text: "You are so polite and thoughtful! I happily forgive you, thanks for the delicious treat!", translation: "Bạn chu đáo và lịch sự quá đi mất! Mình xóa nợ luôn nha, cảm ơn bạn vì ly nước ngon tuyệt cú mèo!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: '⚡ Squashing Petty Beef over Street Food',
      participants: [
        { name: 'Manny', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MannyBro', role: 'Homie' },
        { name: 'Vince', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=VinceBro', role: 'Homie' }
      ],
      lines: [
        { participant: 'Manny', text: "Yo Vince, my total bad about blowing up on discord yesterday, man. I was stressed outta my mind.", translation: "Yo Vince, tui hoàn toàn có lỗi vụ nổi cáu vô cớ trên Discord hôm qua nha ông. Lúc đó đầu óc tui căng như dây đàn." },
        { participant: 'Vince', text: "All good, bro! I figured you were just having a rough day. Water under the bridge, fr.", translation: "Không sao đâu ông ơi! Tui đoán ngay là ông đang có một ngày tồi tệ rồi. Chuyện cũ bỏ qua, không tính toán gì hết." },
        { participant: 'Manny', text: "Appreciate you, man. Grateful you're always a real homie who can forgive easily.", translation: "Biết ơn ông nhiều lắm. Quý cái tính anh em chí cốt luôn biết bao dung thông cảm của ông ghê." },
        { participant: 'Vince', text: "We're squad for life, no cap! Now buy me a bowl of noodles and we're totally even, haha!", translation: "Anh em mình là một nhà suốt đời, thề luôn! Giờ bao tui tô bún bò là huề cả làng nhé, haha!" }
      ]
    }
  ],

  // -------------------------------------------------------------
  // LESSON 17: Bày tỏ ý kiến & Tranh luận
  // -------------------------------------------------------------
  'lesson-17': [
    {
      type: 'pair',
      school: 'business',
      title: '👔 Executive Strategic Debate & Constructive Consensus',
      participants: [
        { name: 'Chief Strategist Vance', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=VanceStrategist', role: 'Chief Strategist' },
        { name: 'VP Montgomery', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MontVP', role: 'VP of Commercial Ops' }
      ],
      lines: [
        { participant: 'Chief Strategist Vance', text: 'From our perspective, allocating eighty percent of capital to digital transformation offers the most convincing return.', translation: 'Dưới góc nhìn của chúng tôi, việc phân bổ 80% vốn vào chuyển đổi kỹ thuật số mang lại lợi suất thuyết phục nhất.' },
        { participant: 'VP Montgomery', text: 'I respect your analysis, Mr. Vance, but I disagree on the timeline. Our brick-and-mortar revenue remains essential.', translation: 'Tôi tôn trọng phân tích của ông, ông Vance, nhưng tôi không đồng tình về mốc thời gian. Doanh thu từ hệ thống cửa hàng vật lý vẫn đóng vai trò cốt lõi.' },
        { participant: 'Chief Strategist Vance', text: 'Your argument regarding cash flow stability is well taken. How do you propose we reach a compromise?', translation: 'Lập luận của ông về sự ổn định của dòng tiền rất xác đáng. Ông đề xuất chúng ta nên đạt được thỏa hiệp dung hòa như thế nào?' },
        { participant: 'VP Montgomery', text: 'A balanced phased rollout of fifty percent this fiscal year will safeguard reserves while accelerating innovation.', translation: 'Phương án triển khai theo giai đoạn 50% trong năm tài chính này sẽ bảo vệ nguồn dự trữ đồng thời thúc đẩy đổi mới sáng tạo.' }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: '💬 Coffee Debate: Remote Work vs Office Culture',
      participants: [
        { name: 'Quang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=QuangDebate', role: 'Debater' },
        { name: 'Phuong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PhuongDebate', role: 'Debater' }
      ],
      lines: [
        { participant: 'Quang', text: "From my perspective, working remotely full-time is the absolute best way to stay productive.", translation: "Theo góc nhìn của mình, làm việc từ xa toàn thời gian thực sự là cách tốt nhất để duy trì năng suất." },
        { participant: 'Phuong', text: "I see your point, but I respectfully disagree. In-person collaboration builds much stronger team trust.", translation: "Mình hiểu ý bạn, nhưng mình không đồng tình lắm. Làm việc trực tiếp với nhau giúp xây dựng niềm tin đồng đội vững chắc hơn nhiều." },
        { participant: 'Quang', text: "That's a convincing argument, but commuting two hours every day drains so much creative energy.", translation: "Đó là một lập luận rất thuyết phục, cơ mà di chuyển 2 tiếng trên đường mỗi ngày bòn rút bao nhiêu năng lượng sáng tạo rồi." },
        { participant: 'Phuong', text: "How about a healthy compromise? A hybrid model with two days in the office sounds ideal for both sides!", translation: "Hay là tụi mình chọn một điểm thỏa hiệp dung hòa đi? Mô hình kết hợp 2 ngày lên công ty nghe rất lý tưởng cho cả đôi bên nè!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: '⚡ Hot Take Friendly Anime Banter',
      participants: [
        { name: 'Zane', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ZaneAnime', role: 'Anime Fan' },
        { name: 'Kip', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KipAnime', role: 'Anime Fan' }
      ],
      lines: [
        { participant: 'Zane', text: "Hot take: Season two of that show was pure trash! The plot had zero logic, ngl.", translation: "Quan điểm trái chiều đây: Mùa hai của bộ phim đó đúng là thảm họa! Cốt truyện chả có tí logic nào, thề luôn." },
        { participant: 'Kip', text: "Cap! I heavily disagree, bro! The animation during the final boss fight was absolute art!", translation: "Điêu vãi! Tui phản đối kịch liệt nha ông tướng! Đồ họa chuyển động trận đánh trùm cuối đúng là kiệt tác nghệ thuật luôn!" },
        { participant: 'Zane', text: "Okay, your argument about the visuals is convincing, but the pacing was still rushed as hell.", translation: "Rồi rồi, cái lý lẽ về mặt hình ảnh của ông nghe thuyết phục đấy, nhưng nhịp phim vẫn bị đẩy nhanh một cách cẩu thả." },
        { participant: 'Kip', text: "Let's reach a compromise: 10/10 animation, 5/10 writing. Fair enough, bro?", translation: "Thống nhất tiếng nói chung đi: Hình ảnh 10/10, kịch bản 5/10. Công bằng chưa ông bồ?" }
      ]
    }
  ],

  // -------------------------------------------------------------
  // LESSON 18: Kỷ niệm tuổi thơ & Trải nghiệm
  // -------------------------------------------------------------
  'lesson-18': [
    {
      type: 'pair',
      school: 'business',
      title: '👔 Executive Keynote on Formative Leadership Roots',
      participants: [
        { name: 'CEO Marcus Vance', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MarcusKeynote', role: 'Chief Executive' },
        { name: 'Moderator Beatrice', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BeatriceMod', role: 'Executive Moderator' }
      ],
      lines: [
        { participant: 'Moderator Beatrice', text: 'Mr. Vance, during your keynote you recalled formative memories from your rural childhood. How did that shape your resilience?', translation: 'Thưa ông Vance, trong bài phát biểu định hướng ông có gợi nhắc về những ký ức thời thơ ấu ở vùng nông thôn. Điều đó đã tôi luyện tính kiên cường của ông ra sao?' },
        { participant: 'CEO Marcus Vance', text: 'Looking back feels deeply nostalgic, Beatrice. Watching my grandparents manage agriculture through droughts taught me unforgettable leadership lessons.', translation: 'Nhìn lại quá khứ mang lại cảm giác vô cùng bồi hồi hoài niệm, Beatrice. Chứng kiến ông bà làm nông vượt qua bao mùa hạn hán đã dạy cho tôi những bài học lãnh đạo khắc cốt ghi tâm.' },
        { participant: 'Moderator Beatrice', text: 'Does that humble background continuously remind you of your core organizational values?', translation: 'Cội nguồn bình dị đó có thường xuyên nhắc nhở ông về các giá trị cốt lõi của tổ chức không?' },
        { participant: 'CEO Marcus Vance', text: 'Invariably. Never forgetting one\'s beginnings keeps executive ambition grounded and deeply humane.', translation: 'Luôn luôn là như vậy. Không bao giờ lãng quên điểm xuất phát sẽ giúp hoài bão lãnh đạo luôn gắn liền với thực tế và giàu tính nhân văn.' }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: '💬 Reminiscing over Old School Yearbooks',
      participants: [
        { name: 'Kien', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KienMemories', role: 'Childhood Friend' },
        { name: 'Nhi', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NhiMemories', role: 'Childhood Friend' }
      ],
      lines: [
        { participant: 'Kien', text: "Nhi, look at this old snapshot from our fifth-grade school camping trip! It makes me so nostalgic.", translation: "Nhi ơi nhìn bức ảnh cũ từ chuyến cắm trại hồi lớp 5 của tụi mình nè! Tự dưng thấy bồi hồi hoài niệm quá chừng." },
        { participant: 'Nhi', text: "Oh wow, our childhood days were so carefree! That rainstorm during campfire night was an unforgettable memory.", translation: "Ôi trời ơi, những ngày thơ ấu của tụi mình vô tư vô lo thật đấy! Cơn mưa rào đêm đốt lửa trại đúng là một kỷ niệm không bao giờ quên." },
        { participant: 'Kien', text: "This smell of hot roasted corn always reminds me of walking home with you after classes.", translation: "Mùi bắp ngô nướng nóng hổi này lúc nào cũng gợi nhớ cho tớ về những buổi tan trường đi bộ về nhà cùng cậu." },
        { participant: 'Nhi', text: "Time really flies, doesn't it? I'm so glad we're still best friends after all these years.", translation: "Thời gian trôi nhanh như tên bắn nhỉ? Thật vui vì sau bao nhiêu năm tụi mình vẫn là bạn thân của nhau." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: '⚡ Reminiscing Crazy Neighborhood Stunts',
      participants: [
        { name: 'Bax', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BaxNostalgia', role: 'Day-One Buddy' },
        { name: 'Cody', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CodyNostalgia', role: 'Day-One Buddy' }
      ],
      lines: [
        { participant: 'Bax', text: "Bro, remember when we built that sketchy wooden ramp and launched our bikes into the lake?", translation: "Ông ơi, nhớ hồi tụi mình đóng cái ván gỗ ọp ẹp rồi phóng xe đạp lao thẳng xuống hồ nước không?" },
        { participant: 'Cody', text: "LMAO! How did we survive our childhood without broken bones, fr?! That memory was pure madness.", translation: "HAHA! Sao hồi nhỏ tụi mình quậy thế mà không gãy cái xương nào hay vậy trời?! Kỷ niệm đó đúng là đỉnh cao điên rồ luôn." },
        { participant: 'Bax', text: "Seeing kids riding BMX bikes always reminds me of our glory days. Zero responsibilities, just vibes.", translation: "Cứ nhìn mấy đứa nhóc chạy xe đạp địa hình là lại gợi nhớ về chuỗi ngày hoàng kim của anh em mình. Không chút âu lo, chỉ có vui vẻ." },
        { participant: 'Cody', text: "Unforgettable times, bro! We gotta plan a reunion fishing trip soon, no cap!", translation: "Những năm tháng không thể nào quên được ông ạ! Tụi mình phải lên kèo đi câu cá ôn lại kỷ niệm sớm thôi, thề luôn!" }
      ]
    }
  ],

  // -------------------------------------------------------------
  // LESSON 19: Âm nhạc, Phim ảnh & Thần tượng
  // -------------------------------------------------------------
  'lesson-19': [
    {
      type: 'pair',
      school: 'business',
      title: '👔 Global Entertainment Industry Media Panel',
      participants: [
        { name: 'Studio Head Montgomery', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MontgomeryStudio', role: 'Studio President' },
        { name: 'Cultural Critic Vivienne', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=VivienneCritic', role: 'Senior Arts Editor' }
      ],
      lines: [
        { participant: 'Studio Head Montgomery', text: 'Vivienne, our latest cinematic blockbuster surpassed opening-weekend projections across thirty-four overseas markets.', translation: 'Vivienne, siêu phẩm điện ảnh bom tấn mới nhất của hãng chúng tôi đã vượt qua mọi dự báo doanh thu mở màn tại 34 thị trường quốc tế.' },
        { participant: 'Cultural Critic Vivienne', text: 'The lead actor\'s magnetic charisma and exceptionally talented ensemble carried the narrative with genuine conviction.', translation: 'Sức hút thần thái lôi cuốn của diễn viên chính cùng dàn diễn viên tài năng xuất chúng đã truyền tải câu chuyện một cách đầy thuyết phục.' },
        { participant: 'Studio Head Montgomery', text: 'We also partnered with top recording artists to launch the official soundtrack album simultaneously.', translation: 'Chúng tôi cũng đã hợp tác với các nghệ sĩ thu âm hàng đầu để phát hành album nhạc phim chính thức đồng thời trên toàn cầu.' },
        { participant: 'Cultural Critic Vivienne', text: 'A brilliant multi-platform strategy. It elevates commercial celebrity appeal into genuine cultural resonance.', translation: 'Một chiến lược đa nền tảng vô cùng xuất sắc. Nó nâng tầm sức hút của các ngôi sao giải trí thành sự lan tỏa văn hóa đích thực.' }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: '💬 Cinema Lobby & New Album Discussion',
      participants: [
        { name: 'Tram', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TramCinema', role: 'Music Lover' },
        { name: 'Bao', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BaoCinema', role: 'Music Lover' }
      ],
      lines: [
        { participant: 'Tram', text: "Bao, that sci-fi blockbuster movie was incredible! The visual effects totally blew my mind.", translation: "Bảo ơi, bộ phim bom tấn viễn tưởng ban nãy đỉnh quá chừng luôn! Kỹ xảo hình ảnh làm mình choáng ngợp thực sự." },
        { participant: 'Bao', text: "Same here! The lead actress is so talented; she brought so much emotional charisma to her character.", translation: "Mình cũng vậy nè! Nữ diễn viên chính tài năng xuất chúng thật; thần thái cuốn hút của cô ấy thổi hồn vào nhân vật sống động ghê." },
        { participant: 'Tram', text: "Have you listened to the new studio album she released last week as well? Her vocals are stunning.", translation: "Bạn đã nghe album phòng thu mới mà cô ấy phát hành tuần trước chưa? Giọng hát của cô ấy hay tuyệt đỉnh luôn." },
        { participant: 'Bao', text: "Yes! Every single track is a masterpiece. She is definitely my favorite celebrity right now.", translation: "Mình nghe rồi chứ! Từng bài hát đều là một kiệt tác. Cô ấy chắc chắn là ngôi sao thần tượng mình hâm mộ nhất hiện nay." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: '⚡ Music Video Drop React Hype',
      participants: [
        { name: 'Jett', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JettMusic', role: 'Fanboy' },
        { name: 'Rory', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=RoryMusic', role: 'Fanboy' }
      ],
      lines: [
        { participant: 'Jett', text: "BRO! Did you see that music video that just dropped?! The beat is an absolute banger, no cap!", translation: "ÔNG ƠI! Xem cái video ca nhạc vừa mới ra lò chưa?! Con beat này cháy khét lẹt luôn, thề không điêu!" },
        { participant: 'Rory', text: "Fr! The artist has ungodly stage charisma. That whole album is going number one worldwide, bet!", translation: "Chuẩn luôn! Thần thái biểu diễn sân khấu của idol đỉnh chóp dã man. Cả cái album này chắc chắn leo top 1 toàn cầu, cá bao nhiêu cũng nhận!" },
        { participant: 'Jett', text: "The choreography was so sick! Most talented celebrity in the entire pop industry right now.", translation: "Vũ đạo nhìn mê ly xịn xò dã man! Đúng là ngôi sao tài năng xuất chúng nhất làng nhạc pop bây giờ." },
        { participant: 'Rory', text: "Looping this track on repeat all day! We gotta cop concert tickets the second they go live!", translation: "Bật bài này nghe đi nghe lại cả ngày hôm nay luôn! Vé ca nhạc mở bán cái là anh em mình phải giật liền tay nha!" }
      ]
    }
  ],

  // -------------------------------------------------------------
  // LESSON 20: Kỹ năng sống & Làm việc nhóm
  // -------------------------------------------------------------
  'lesson-20': [
    {
      type: 'pair',
      school: 'business',
      title: '👔 Senior Leadership Workshop & Conflict Management',
      participants: [
        { name: 'Managing Director Sterling', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SterlingDirector', role: 'Managing Director' },
        { name: 'Dr. Rebecca Stone', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=RebeccaStone', role: 'Organizational Psychologist' }
      ],
      lines: [
        { participant: 'Managing Director Sterling', text: 'Dr. Stone, our cross-functional presentation to the executive board requires flawless teamwork and coordination.', translation: 'Tiến sĩ Stone, bài thuyết trình liên phòng ban trước hội đồng quản trị đòi hỏi sự phối hợp nhóm và tinh thần đồng đội hoàn hảo.' },
        { participant: 'Dr. Rebecca Stone', text: 'Certainly, Director Sterling. How is your team leadership prepared to handle internal friction or technical conflict?', translation: 'Chắc chắn rồi thưa Giám đốc Sterling. Đội ngũ lãnh đạo của ông đã chuẩn bị như thế nào để xử lý các bất đồng nội bộ hoặc xung đột kỹ thuật?' },
        { participant: 'Managing Director Sterling', text: 'We foster a culture of active listening where resourceful specialists propose objective evidence-based resolutions.', translation: 'Chúng tôi nuôi dưỡng văn hóa lắng nghe tích cực, nơi các chuyên gia tháo vát nhạy bén luôn đưa ra các giải pháp khách quan dựa trên dữ liệu thực tế.' },
        { participant: 'Dr. Rebecca Stone', text: 'An exemplary methodology. Constructive conflict resolution transforms competent teams into extraordinary high-performing units.', translation: 'Một phương pháp luận mẫu mực. Giải quyết xung đột mang tính xây dựng sẽ biến những tập thể tài năng thành các đơn vị có hiệu suất vượt trội.' }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: '💬 University Group Presentation Prep',
      participants: [
        { name: 'Khang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KhangTeam', role: 'Group Member' },
        { name: 'Trang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TrangTeam', role: 'Group Member' }
      ],
      lines: [
        { participant: 'Khang', text: "Trang, our final group presentation is scheduled for next Monday. Good teamwork is going to be key.", translation: "Trang ơi, bài thuyết trình nhóm cuối kỳ của tụi mình được ấn định vào thứ Hai tới rồi. Sự phối hợp nhóm tốt sẽ là chìa khóa then chốt đấy." },
        { participant: 'Trang', text: "Agreed! How should we split the workload? I can handle the graphic slides and visual charts.", translation: "Chuẩn luôn! Tụi mình nên phân chia công việc như thế nào đây? Mình có thể cáng đáng khâu làm slide đồ họa và các biểu đồ trực quan." },
        { participant: 'Khang', text: "You are always so resourceful with slide design! I will handle the speech delivery and answer professor questions.", translation: "Bạn lúc nào cũng cực kỳ tháo vát nhạy bén trong khoản thiết kế slide! Mình sẽ lo phần thuyết trình và trả lời câu hỏi phản biện của thầy cô." },
        { participant: 'Trang', text: "Perfect! If any conflict comes up about our topic choices, we'll talk it through calmly together.", translation: "Tuyệt vời! Nếu có bất kỳ bất đồng mâu thuẫn nào về lựa chọn chủ đề, tụi mình sẽ cùng ngồi lại trao đổi bình tĩnh nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: '⚡ Hackathon All-Nighter Squad Crunch',
      participants: [
        { name: 'Brock', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BrockHacker', role: 'Coder' },
        { name: 'Syd', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SydHacker', role: 'Coder' }
      ],
      lines: [
        { participant: 'Brock', text: "Bro, five hours left in this hackathon! The backend API is throwing errors, we're in deep trouble!", translation: "Ông ơi, còn đúng 5 tiếng là hết giờ thi lập trình hackathon rồi! Hệ thống máy chủ đang báo lỗi tùm lum, toang tới nơi rồi!" },
        { participant: 'Syd', text: "Don't panic, man! Teamwork makes the dream work. I'll handle the bug fix while you polish the demo presentation.", translation: "Bình tĩnh ông giáo, đừng hoảng! Đồng lòng nhóm sẽ làm nên điều kỳ diệu. Tui sẽ xử lý lỗi này, còn ông lo trau chuốt bài thuyết trình chạy thử đi." },
        { participant: 'Brock', text: "You're a lifesaver, Syd! Most resourceful coder in the whole room, no cap.", translation: "Ông đúng là vị cứu tinh của tui, Syd ơi! Lập trình viên tháo vát nhạy bén nhất cái phòng này luôn, thề không điêu." },
        { participant: 'Syd', text: "Let's crush this final pitch and take home the trophy! We got this, bro!", translation: "Hãy nghiền nát bài thuyết trình cuối cùng này và ẵm cúp vô địch về nhà nào! Tụi mình làm được mà, anh em ơi!" }
      ]
    }
  ]
};
