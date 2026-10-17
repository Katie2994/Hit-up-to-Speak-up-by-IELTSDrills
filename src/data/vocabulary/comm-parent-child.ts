import { Topic } from './types';
import { PARENT_CHILD_DIALOGUES } from './comm-parent-child-dialogues';
import { PARENT_CHILD_STRUCTURES } from './comm-parent-child-structures';

const rawParentChildTopics: Topic[] = [
  {
    id: 'parent-child-01',
    title: 'Daily Connection: Catching Up & Sharing',
    vietnameseTitle: 'Kết nối hằng ngày: Hỏi thăm & Chia sẻ nhỏ',
    category: 'Communication',
    subCategory: ['Parent-Child'],
    icon: '💬',
    color: '#3490DC',
    description: 'Hỏi về ngày đi học, bạn bè, niềm vui nhỏ; bố mẹ chia sẻ ngày làm việc để tránh cảm giác tra khảo.',
    words: [
      { id: 'pc1-1', word: 'Highs and lows', ipa: '/haɪz ænd ləʊz/', definition: 'Những nốt thăng trầm (niềm vui và nỗi buồn nhỏ trong ngày).', translation: 'Niềm vui & Nỗi buồn trong ngày', example: 'Let\'s share our highs and lows at the dinner table.', blankSentence: 'What were your ____ today, sweetie?', emoji: '🎢' },
      { id: 'pc1-2', word: 'Chat', ipa: '/tʃæt/', definition: 'Nói chuyện thân mật, tán gẫu nhỏ.', translation: 'Tán gẫu, trò chuyện', example: 'I love having a casual chat with my son before bed.', blankSentence: 'Can we have a quick ____ about your school?', emoji: '🗣️' },
      { id: 'pc1-3', word: 'Check-in', ipa: '/tʃek ɪn/', definition: 'Sự hỏi han tình hình, gắn kết cảm xúc.', translation: 'Hỏi han, cập nhật tình hình', example: 'A daily check-in helps parents and children stay close.', blankSentence: 'Let\'s do a quick ____ before we discuss dinner.', emoji: '🧭' }
    ],
    structures: [
      {
        phrase: "What was the best part of your day?",
        meaning: "Câu hỏi mở thân thiện khơi gợi con chia sẻ chuyện vui.",
        vietnamese: "Điều tuyệt vời nhất hôm nay của con là gì?",
        casual: "Any highlights from school today, buddy?"
      },
      {
        phrase: "I had a busy day at work, but...",
        meaning: "Bố mẹ chủ động tâm sự trước để thu hẹp khoảng cách.",
        vietnamese: "Hôm nay bố mẹ làm việc khá bận, cơ mà...",
        casual: "Work was super hectic today, but seeing you makes me feel so much better."
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Sharing or Traising questions?',
        participants: [
          { name: 'Mom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mom' },
          { name: 'Khang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Khang' }
        ],
        lines: [
          { participant: 'Mom', text: "Hey Khang! How was your day? What was the best part of your school day?", translation: "Khang ơi! Hôm nay thế nào con? Điều tuyệt vời nhất hôm nay ở trường của con là gì?" },
          { participant: 'Khang', text: "It was fine, Mom. Just normal classes. Nothing special.", translation: "Cũng ổn mẹ ạ. Chỉ là mấy tiết học bình thường thôi. Không có gì đặc sắc cả." },
          { participant: 'Mom', text: "I see. Well, I had a busy day at work today, but I managed to solve a hard problem. It felt great! How about your highs and lows?", translation: "Mẹ hiểu rồi. Ờ, hôm nay mẹ làm việc khá bận rộn, nhưng mẹ đã giải quyết được một vấn đề hóc búa. Thấy vui lắm! Còn thăng trầm trong ngày của con thì sao?" },
          { participant: 'Khang', text: "Ah, actually, we played football during recess and my team won! That was definitely the high point.", translation: "Hì, thực ra hôm nay giờ ra chơi tụi con đá bóng và đội con thắng! Đó chắc chắn là nốt thặng hạnh phúc nhất." }
        ]
      }
    ]
  },
  {
    id: 'parent-child-02',
    title: 'Emotions: Naming & Accepting Feelings',
    vietnameseTitle: 'Cảm xúc: Gọi tên, Lắng nghe & Chấp nhận',
    category: 'Communication',
    subCategory: ['Parent-Child'],
    icon: '❤️',
    color: '#E3342F',
    description: 'Giúp con gọi tên cảm xúc, mô tả cảm giác cơ thể; phản chiếu cảm xúc thay vì dập tắt hay phán xét.',
    words: [
      { id: 'pc2-1', word: 'Frustrated', ipa: '/frʌˈstreɪtɪd/', definition: 'Bực bội, nản lòng vì không đạt được như ý.', translation: 'Bực bội, nản lòng', example: 'He felt frustrated when he couldn\'t solve the math puzzle.', blankSentence: 'Are you feeling ____ because of the grades?', emoji: '😤' },
      { id: 'pc2-2', word: 'Mirror', ipa: '/ˈmɪrə(r)/', definition: 'Phản chiếu lại cảm xúc của đối phương để thể hiện sự cảm thông.', translation: 'Phản chiếu cảm xúc', example: 'To show empathy, you should mirror your child\'s feelings.', blankSentence: 'Try to ____ their thoughts instead of giving lectures.', emoji: '🪞' },
      { id: 'pc2-3', word: 'Validate', ipa: '/ˈvælɪdeɪt/', definition: 'Chấp nhận và công nhận cảm xúc hiện tại là hợp lý.', translation: 'Xác nhận, thấu cảm', example: 'It\'s important to validate their sadness before looking for tips.', blankSentence: 'We must ____ their feelings first.', emoji: '🤝' }
    ],
    structures: [
      {
        phrase: "It sounds like you felt really...",
        meaning: "Cụm phản chiếu cảm xúc giúp con cảm thấy được thấu hiểu.",
        vietnamese: "Nghe có vẻ như lúc đó con đã rất...",
        casual: "Sounds like you were totally bummed out about that."
      },
      {
        phrase: "I'm here for you, no matter what.",
        meaning: "Câu khẳng định tình yêu vô điều kiện của cha mẹ.",
        vietnamese: "Bố mẹ luôn ở đây bên con, dù thế nào đi nữa.",
        casual: "I've got your back, no matter what happens."
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Validation after a tough day',
        participants: [
          { name: 'Dad', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dad' },
          { name: 'An', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=An' }
        ],
        lines: [
          { participant: 'An', text: "Dad, I got a bad grade on my art assignment today. The teacher said my drawing lacked imagination.", translation: "Bố ơi, hôm nay con bị điểm kém môn vẽ. Cô bảo tranh con thiếu trí tưởng tượng." },
          { participant: 'Dad', text: "Oh, An. It sounds like you felt really frustrated or sad when she said that.", translation: "Ôi An à. Nghe có vẻ như con đã rất bực bội hoặc buồn khi cô nói vậy phải không." },
          { participant: 'An', text: "Yes, I worked so hard on it. I feel like I'm terrible at drawing.", translation: "Vâng ạ, con đã nỗ lực rất nhiều. Con cảm giác mình vẽ dở tệ." },
          { participant: 'Dad', text: "Your hard work is what matters. I love your creative spirit, and I'm here for you, no matter what. Let's look at it together later, okay?", translation: "Sự nỗ lực của con mới là điều quan trọng. Bố thích tinh thần sáng tạo của con, và bố luôn ở đây bên con, dù thế nào đi nữa. Lát nữa hai bố con mình cùng xem thử nha?" }
        ]
      }
    ]
  },
  {
    id: 'parent-child-03',
    title: 'Family Rules & Mutual Agreements',
    vietnameseTitle: 'Nội quy gia đình & Thỏa thuận chung',
    category: 'Communication',
    subCategory: ['Parent-Child'],
    icon: '📜',
    color: '#F6AD55',
    description: 'Cùng thương lượng về giờ ngủ, thiết bị, việc nhà; giải thích lý do và cùng đạt thỏa hiệp tôn trọng.',
    words: [
      { id: 'pc3-1', word: 'Curfew', ipa: '/ˈkɜːfjuː/', definition: 'Giờ giới nghiêm buộc phải có mặt ở nhà.', translation: 'Giờ về nhà, giới nghiêm', example: 'Her curfew is set to 10 PM on weekends.', blankSentence: 'We need to discuss an appropriate ____ for your age.', emoji: '🕙' },
      { id: 'pc3-2', word: 'Compromise', ipa: '/ˈkɒmprəmaɪz/', definition: 'Sự nhượng bộ, thỏa hiệp từ hai phía.', translation: 'Thỏa hiệp, thương lượng', example: 'A happy home is built on mutual compromise.', blankSentence: 'Let\'s reach a ____ that works for both of us.', emoji: '⚖️' },
      { id: 'pc3-3', word: 'Screen time', ipa: '/skriːn taɪm/', definition: 'Thời lượng sử dụng máy tính, tivi, điện thoại.', translation: 'Thời gian dùng thiết bị', example: 'Two hours of screen time per day is our golden rule.', blankSentence: 'Too much ____ isn\'t good for your eyes.', emoji: '📱' }
    ],
    structures: [
      {
        phrase: "Let's make a deal regarding...",
        meaning: "Lời mở đầu rủ con cùng thương lượng luật lệ.",
        vietnamese: "Chúng ta cùng thỏa thuận về chuyện...",
        casual: "Let's work out a deal on..."
      },
      {
        phrase: "I want to understand your view on...",
        meaning: "Thể hiện tinh thần lắng nghe chứ không áp đặt.",
        vietnamese: "Bố mẹ rất muốn hiểu góc nhìn của con về...",
        casual: "Help me understand where you're coming from on..."
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Negotiating Screen Time',
        participants: [
          { name: 'Mom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mom' },
          { name: 'Son', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Son' }
        ],
        lines: [
          { participant: 'Son', text: "Mom, can I play video games for three hours tonight? Please?", translation: "Mẹ ơi, tối nay con chơi game 3 tiếng được không? Đi mà mẹ!" },
          { participant: 'Mom', text: "I want to understand your view on this, but three hours is quite long. Let's make a deal regarding your screen time.", translation: "Mẹ muốn nghe góc nhìn của con, nhưng 3 tiếng thì hơi dài. Hay là mình thỏa thuận về thời gian dùng thiết bị nhé." },
          { participant: 'Son', text: "How about two hours? Only if I finish all my homework first.", translation: "Thế còn 2 tiếng thì sao ạ? Chỉ chơi sau khi con đã làm xong hết bài tập." },
          { participant: 'Mom', text: "That sounds like a fair compromise. Remember, at 9 PM, we turn off all electronics.", translation: "Nghe có vẻ là một thỏa hiệp công bằng đó. Nhớ nhé con, 9 giờ tối tụi mình sẽ tắt hết đồ điện tử." }
        ]
      }
    ]
  },
  {
    id: 'parent-child-04',
    title: 'Encouragement & Constructive Feedback',
    vietnameseTitle: 'Khen ngợi, Động viên & Góp ý hành vi',
    category: 'Communication',
    subCategory: ['Parent-Child'],
    icon: '🌟',
    color: '#48BB78',
    description: 'Khen ngợi nỗ lực thay vì chỉ khen kết quả; góp ý hành vi sai mà không dán nhãn hay xúc phạm.',
    words: [
      { id: 'pc4-1', word: 'Effort', ipa: '/ˈefət/', definition: 'Sự cố gắng, nỗ lực đổ ra cho một mục tiêu.', translation: 'Nỗ lực, cố gắng', example: 'I highly value your effort even if you do not win.', blankSentence: 'Make sure to put some ____ into this task.', emoji: '💪' },
      { id: 'pc4-2', word: 'Constructive', ipa: '/kənˈstrʌktɪv/', definition: 'Mang tính xây dựng, giúp tiến bộ hơn.', translation: 'Mang tính xây dựng', example: 'I want to give constructive criticism to help you grow.', blankSentence: 'Let\'s keep our discussion ____ and positive.', emoji: '🧱' },
      { id: 'pc4-3', word: 'Praise', ipa: '/preɪz/', definition: 'Khen ngợi, tôn vinh biểu hiện tốt.', translation: 'Lời khen ngợi', example: 'Praise your children for their consistent focus.', blankSentence: 'Genuine ____ can boost a child\'s confidence.', emoji: '🎉' }
    ],
    structures: [
      {
        phrase: "I noticed how hard you worked on...",
        meaning: "Khen ngợi quy trình và sự tập trung của con.",
        vietnamese: "Bố mẹ nhận thấy con đã làm việc rất chăm chỉ cho...",
        casual: "I saw the crazy effort you put into..."
      },
      {
        phrase: "It's okay to make mistakes; let's...",
        meaning: "Lời động viên đồng hành khắc phục lỗi lầm.",
        vietnamese: "Mắc lỗi cũng không sao cả; chúng ta hãy cùng...",
        casual: "Mistakes happen; let's see how we can fix this."
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Praising Effort over Grades',
        participants: [
          { name: 'Dad', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dad' },
          { name: 'Vy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vy' }
        ],
        lines: [
          { participant: 'Vy', text: "Dad, I got a B on my science test. I'm sorry, I wanted an A.", translation: "Bố ơi, con được điểm B kiểm tra khoa học. Con xin lỗi, con đã muốn đạt điểm A." },
          { participant: 'Dad', text: "Don't apologize at all! I noticed how hard you worked on studying last week. That effort is what makes me proud.", translation: "Không việc gì phải xin lỗi cả! Bố thấy con đã chăm học bài thế nào tuần qua. Sự nỗ lực đó mới là điều làm bố tự hào." },
          { participant: 'Vy', text: "Really? You're not disappointed?", translation: "Thế ạ? Bố không thất vọng sao?" },
          { participant: 'Dad', text: "Not even a bit. It's okay to make mistakes or miss perfect scores; let's review the hard questions together so we can learn.", translation: "Không một chút nào luôn. Mắc lỗi hay trượt điểm tuyệt đối cũng không sao; tụi mình hãy cùng xem lại mấy câu khó để học hỏi nha." }
        ]
      }
    ]
  },
  {
    id: 'parent-child-05',
    title: 'Storytelling, Reading & Playing Together',
    vietnameseTitle: 'Kể chuyện – Đọc sách – Chơi cùng nhau',
    category: 'Communication',
    subCategory: ['Parent-Child'],
    icon: '📚',
    color: '#38B2AC',
    description: 'Dùng sách truyện, phim ảnh kết nối; dạy qua câu hỏi mở tinh tế thay vì thuyết giảng khô khan.',
    words: [
      { id: 'pc5-1', word: 'Perspective', ipa: '/pəˈspektɪv/', definition: 'Góc nhìn, thế giới quan hoặc lăng kính quan sát.', translation: 'Góc nhìn, quan điểm', example: 'Reading books teaches children perspectives of others.', blankSentence: 'What is your ____ on this character\'s choice?', emoji: '👓' },
      { id: 'pc5-2', word: 'Role model', ipa: '/ˈrəʊl mɒdl/', definition: 'Hình mẫu tốt đẹp để noi theo.', translation: 'Hình mẫu noi theo', example: 'Spiderman is a brave role model for my little brother.', blankSentence: 'Parents are the first ____ for their kids.', emoji: '🦸' },
      { id: 'pc5-3', word: 'Imagination', ipa: '/ɪˌmædʒɪˈneɪʃn/', definition: 'Trí tưởng tượng phong phú.', translation: 'Trí tưởng tượng', example: 'Fairy tales can spark a giant wave of imagination.', blankSentence: 'Let your ____ run wild while drawing!', emoji: '🦄' }
    ],
    structures: [
      {
        phrase: "What would you do if you were...?",
        meaning: "Câu hỏi mở kích thích tư duy giải quyết vấn đề và đồng cảm.",
        vietnamese: "Con sẽ làm thế nào nếu con là...?",
        casual: "If you were in their shoes, what would you do?"
      },
      {
        phrase: "Which character do you relate to most?",
        meaning: "Hỏi han để thấu hiểu tính cách và liên hệ thực tế của con.",
        vietnamese: "Con thấy mình giống với nhân vật nào nhất?",
        casual: "Who's your absolute favorite in this story?"
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Discussing a movie character',
        participants: [
          { name: 'Mom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mom' },
          { name: 'Linh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Linh' }
        ],
        lines: [
          { participant: 'Mom', text: "Linh, that movie was so exciting! Which character do you relate to most?", translation: "Linh ơi, bộ phim đó hồi hộp quá! Con thấy mình giống nhân vật nào nhất?" },
          { participant: 'Linh', text: "I think I relate to the smart sidekick. She was quiet but solved all the puzzles.", translation: "Con nghĩ con giống cô bạn đồng hành thông minh ấy. Cô ấy trầm tính nhưng giải được mọi câu đố." },
          { participant: 'Mom', text: "I totally agree! What would you do if you were her when the bridge fell?", translation: "Mẹ hoàn toàn đồng ý luôn! Nhớ đoạn cây cầu bị sập, con sẽ làm thế nào nếu con là cô ấy?" },
          { participant: 'Linh', text: "I would probably seek help from the animals instead of trying to jump over it.", translation: "Có thể con sẽ tìm sự giúp đỡ từ muông thú thay vì cố nhảy vọt qua." }
        ]
      }
    ]
  },
  {
    id: 'parent-child-06',
    title: 'Academic Pressure & Genuine Support',
    vietnameseTitle: 'Học tập, Bài vở & Áp lực điểm số',
    category: 'Communication',
    subCategory: ['Parent-Child'],
    icon: '🎓',
    color: '#4299E1',
    description: 'Hỏi thăm khó khăn học đường, giải tỏa áp lực điểm số; đồng hành gỡ rối thay vì gợn ép đạt mục tiêu.',
    words: [
      { id: 'pc6-1', word: 'Overwhelmed', ipa: '/ˌəʊvəˈwelmd/', definition: 'Bị choáng ngợp, quá tải trước lượng công việc.', translation: 'Choáng ngợp, quá tải', example: 'She felt overwhelmed by the endless school stack.', blankSentence: 'Tell me if you feel ____ by your math coursework.', emoji: '😫' },
      { id: 'pc6-2', word: 'Stressed out', ipa: '/strest aʊt/', definition: 'Bị căng thẳng cực độ về thể chất hoặc tinh thần.', translation: 'Căng thẳng mệt mỏi', example: 'Don\'t get too stressed out about the midterm.', blankSentence: 'My teen gets ____ before every presentation.', emoji: '🧠' },
      { id: 'pc6-3', word: 'Progress', ipa: '/ˈprəʊɡres/', definition: 'Quá trình tiến bộ, phát triển từng bước.', translation: 'Tiến bộ, tiến trình', example: 'We are celebrating slow but steady progress.', blankSentence: 'Your reading skills have made amazing ____.', emoji: '📈' }
    ],
    structures: [
      {
        phrase: "Grades don't define your worth.",
        meaning: "Câu nói xoa dịu giúp tháo gỡ gánh nặng điểm số cho con.",
        vietnamese: "Điểm số không định nghĩa giá trị con người con.",
        casual: "A grade is just a letter, it doesn't define who you are."
      },
      {
        phrase: "How can I support you with...?",
        meaning: "Sẵn sàng làm điểm tựa gỡ rối.",
        vietnamese: "Mẹ/Bố có thể hỗ trợ con thế nào với...?",
        casual: "How can I help make things easier for you with...?"
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Calming Math Exam Stress',
        participants: [
          { name: 'Dad', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dad' },
          { name: 'Khoa', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Khoa' }
        ],
        lines: [
          { participant: 'Khoa', text: "I have my final calculus exam tomorrow. I'm completely stressed out and feel like crying.", translation: "Ngày mai con thi cuối kỳ giải tích rồi. Con đang siêu mệt mỏi và chỉ muốn khóc thôi bố." },
          { participant: 'Dad', text: "Hey Khoa, take a deep breath. Grades don't define your worth as my son.", translation: "Khoa ơi, hít một hơi sâu nào con. Điểm số không bao giờ định nghĩa giá trị của con trai bố cả." },
          { participant: 'Khoa', text: "But I don't want to fail and waste your tuition money.", translation: "Nhưng con chẳng muốn thi trượt rồi phí tiền học phí của bố đâu." },
          { participant: 'Dad', text: "I care about your well-being, not just scores. How can I support you right now? Maybe a hot meal or some quiet space?", translation: "Bố lo cho sức khỏe của con chứ đâu phải mỗi điểm số. Giờ bố có thể hỗ trợ con thế nào? Ăn chút gì nóng hổi hay cần một không gian yên tĩnh nhé?" }
        ]
      }
    ]
  },
  {
    id: 'parent-child-07',
    title: 'Friendships & Handling Peer Conflicts',
    vietnameseTitle: 'Bạn bè, Mối quan hệ & Xung đột',
    category: 'Communication',
    subCategory: ['Parent-Child'],
    icon: '👥',
    color: '#9F7AEA',
    description: 'Hỏi thăm bạn bè, lắng nghe xung đột; tránh vội phán xét bạn của con, giúp con tự nghĩ phương án giải quyết.',
    words: [
      { id: 'pc7-1', word: 'Exclusion', ipa: '/ɪkˈskluːʒn/', definition: 'Sự bài xích, cô lập hay tẩy chay ra khỏi nhóm.', translation: 'Sự cô lập, tẩy chay', example: 'Social exclusion can be really painful for teenagers.', blankSentence: 'She is dealing with some feelings of ____ at class.', emoji: '🏚️' },
      { id: 'pc7-2', word: 'Conflict', ipa: '/ˈkɒnflɪkt/', definition: 'Sự bất đồng ý kiến, xung đột va chạm.', translation: 'Xung đột, mâu thuẫn', example: 'We need to deal with this friendship conflict calmly.', blankSentence: 'How did this minor ____ start in the group chat?', emoji: '⚡' },
      { id: 'pc7-3', word: 'Misunderstanding', ipa: '/ˌmɪsʌndəˈstændɪŋ/', definition: 'Sự hiểu lầm ý của nhau gây sứt mẻ.', translation: 'Sự hiểu lầm', example: 'Clear communication can easily solve any misunderstanding.', blankSentence: 'It was just a silly ____ online.', emoji: '🧩' }
    ],
    structures: [
      {
        phrase: "I'm listening. Tell me what happened.",
        meaning: "Câu cam kết lắng nghe chân thành, không ngắt lời phán xét.",
        vietnamese: "Bố mẹ đang lắng nghe đây. Con kể xem chuyện gì đã xảy ra nào.",
        casual: "I'm all ears. What went down?"
      },
      {
        phrase: "How do you think you can solve this?",
        meaning: "Thúc đẩy con tự suy nghĩ giải pháp cho mối quan hệ.",
        vietnamese: "Con nghĩ làm cách nào để giải quyết chuyện này?",
        casual: "What do you think is the best way to handle this?"
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Left out of the group chat',
        participants: [
          { name: 'Mom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mom' },
          { name: 'Bao', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bao' }
        ],
        lines: [
          { participant: 'Bao', text: "My classmates locked me out of their main group chat. They are talking behind my back.", translation: "Mấy đứa cùng lớp đuổi con ra khỏi nhóm chat chính rồi. Chúng nó đang nói xấu sau lưng con." },
          { participant: 'Mom', text: "Oh Bao, that hurts. I'm listening. Tell me what happened.", translation: "Ôi Bảo ơi, chuyện đó buồn thật. Mẹ đang lắng nghe đây. Con kể xem chuyện gì đã xảy ra nào." },
          { participant: 'Bao', text: "We had a misunderstanding during the science presentation. Now nobody wants to sit next to me.", translation: "Tụi con có một chút hiểu lầm trong lúc thuyết trình môn khoa học. Giờ chẳng ai thèm ngồi cạnh con nữa." },
          { participant: 'Mom', text: "That is tough. Exclusion feels horrible. How do you think you can solve this? Would you like to talk to them directly or let it settle?", translation: "Khó khăn thật đấy. Cảm giác bị cô lập rất tệ. Con nghĩ làm cách nào để giải quyết chuyện này? Con muốn nói thẳng với các bạn hay cứ để từ từ lắng xuống?" }
        ]
      }
    ]
  },
  {
    id: 'parent-child-08',
    title: 'Social Media, Gaming & the Digital World',
    vietnameseTitle: 'Mạng xã hội, Game & Thế giới online',
    category: 'Communication',
    subCategory: ['Parent-Child'],
    icon: '🎮',
    color: '#ED64A6',
    description: 'Trao đổi về game và app con dùng bằng sự tò mò tích cực; cùng thỏa thuận các biện pháp bảo mật an toàn.',
    words: [
      { id: 'pc8-1', word: 'Online safety', ipa: '/ˈɒnlaɪn ˈseɪfti/', definition: 'Các biện pháp bảo vệ bản thân trên không gian mạng.', translation: 'An toàn trực tuyến', example: 'We teach children online safety before giving them tablets.', blankSentence: 'Always prioritize your ____ by not sharing passwords.', emoji: '🛡️' },
      { id: 'pc8-2', word: 'Privacy settings', ipa: '/ˈprɪvəsi ˈsetɪŋz/', definition: 'Chế độ cài đặt quyền riêng tư để chặn tin nhắn người lạ.', translation: 'Cài đặt quyền riêng tư', example: 'Make sure your social media account has tight privacy settings.', blankSentence: 'Did you turn on your high ____ today?', emoji: '🔑' },
      { id: 'pc8-3', word: 'Stranger danger', ipa: '/ˈstreɪndʒə(r) ˈdeɪndʒə(r)/', definition: 'Mối hiểm họa tiềm tàng từ việc kết nối với người lạ.', translation: 'Mối nguy từ người lạ', example: 'Gaming chats require kids to know about stranger danger.', blankSentence: 'Don\'t trade game items due to ____.', emoji: '👤' }
    ],
    structures: [
      {
        phrase: "Tell me more about this game/app.",
        meaning: "Tiếp cận với thái độ thích thú tìm tòi thay vì dọa cấm cản.",
        vietnamese: "Kể thêm cho bố/mẹ nghe về game/ứng dụng này đi con.",
        casual: "Show me how this app works, it looks cool!"
      },
      {
        phrase: "We need to protect your personal info.",
        meaning: "Giải thích lý do bảo mật để bảo vệ con.",
        vietnamese: "Chúng ta cần bảo vệ thông tin cá nhân của con.",
        casual: "Let's keep your personal stuff strictly private."
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Asking to install TikTok',
        participants: [
          { name: 'Dad', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dad' },
          { name: 'Mai', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mai' }
        ],
        lines: [
          { participant: 'Mai', text: "Dad, all my friends are on TikTok. Can I download the app onto my phone?", translation: "Bố ơi, bạn bè con đều chơi TikTok hết rồi. Con tải app đó về điện thoại được không bố?" },
          { participant: 'Dad', text: "Tell me more about this app, Mai. What kind of videos do you want to create or watch?", translation: "Kể thêm cho bố nghe về app này đi Mai. Con muốn làm hay xem những kiểu video nào nào?" },
          { participant: 'Mai', text: "Just dance trends and funny cat clips! I promise not to waste hours on it.", translation: "Chỉ là mấy trào lưu nhảy múa với clip mèo hài hước thôi ạ! Con hứa không xem tốn nhiều giờ đâu." },
          { participant: 'Dad', text: "Alright, we can try it. But we need to protect your personal info first. We will keep your account private and block direct messages from strangers.", translation: "Được rồi, tụi mình có thể thử xem sao. Nhưng trước tiên chúng ta cần bảo vệ thông tin cá nhân của con. Mình sẽ để tài khoản riêng tư và chặn tin nhắn trực tiếp từ người lạ nhé." }
        ]
      }
    ]
  },
  {
    id: 'parent-child-09',
    title: 'Money, Core Values & Wise Spending',
    vietnameseTitle: 'Tiền bạc, Giá trị & Tiêu dùng',
    category: 'Communication',
    subCategory: ['Parent-Child'],
    icon: '💵',
    color: '#ECC94B',
    description: 'Nói về tiền tiêu vặt, phân biệt ranh giới giữa “muốn” với “cần” và giá trị của sức lao động.',
    words: [
      { id: 'pc9-1', word: 'Allowance', ipa: '/əˈlaʊəns/', definition: 'Tiền trợ cấp tiêu vặt định kỳ bố mẹ cho con.', translation: 'Tiền tiêu vặt định kỳ', example: 'Saving my weekly allowance taught me financial discipline.', blankSentence: 'How do you plan to partition your monthly ____?', emoji: '💰' },
      { id: 'pc9-2', word: 'Need vs. Want', ipa: '/niːd vɜːsəs wɒnt/', definition: 'Khái niệm phân biệt đồ thiết yếu và đồ mua theo sở thích nhất thời.', translation: 'Cần thiết đối chiếu Mong muốn', example: 'Understanding need vs. want is crucial for wise budget.', blankSentence: 'Before purchasing, write down the ____ chart.', emoji: '⚖️' },
      { id: 'pc9-3', word: 'Budget', ipa: '/ˈbʌdʒɪt/', definition: 'Khoản tiền giới hạn được phân bổ chi tiêu hợp lý.', translation: 'Quỹ ngân sách chi tiêu', example: 'We have a tight budget for extracurricular gadgets.', blankSentence: 'Does this expensive toy fit into your ____?', emoji: '📊' }
    ],
    structures: [
      {
        phrase: "Is this a 'need' or just a 'want'?",
        meaning: "Câu hỏi gợi ý con cân nhắc giá trị thực tế của món đồ.",
        vietnamese: "Thứ này con thực sự 'cần' hay chỉ đang 'muốn' nhất thời thôi?",
        casual: "Do you actually need this, or is it just a want?"
      },
      {
        phrase: "Let's see if we can save up for...",
        meaning: "Hướng dẫn con lên kế hoạch tiết kiệm tiền để đạt được mục tiêu.",
        vietnamese: "Để xem chúng ta có thể tiết kiệm tiền để mua... không nhé.",
        casual: "Let's start piggy-banking for..."
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Buying the Trendiest Shoes',
        participants: [
          { name: 'Mom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mom' },
          { name: 'Duy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Duy' }
        ],
        lines: [
          { participant: 'Duy', text: "Mom, I need these new sneakers! Everyone at class is wearing them.", translation: "Mẹ ơi, con cần đôi giày thể thao mới này lắm! Cả lớp con ai cũng đi đôi này." },
          { participant: 'Mom', text: "They look stylish, Duy! But let me ask you: is this a 'need' or just a 'want'? You already have two good pairs of shoes.", translation: "Đôi giày trông phong cách thật đó Duy! Nhưng mẹ hỏi chút: thứ này con thực sự 'cần' hay chỉ 'muốn' nhất thời thôi? Con đã có hai đôi giày rất tốt rồi mà." },
          { participant: 'Duy', text: "Well, it's mostly a want. I just want to fit in with the school trend.", translation: "Dạ, phần lớn là muốn thôi ạ. Con chỉ muốn hòa nhập vào xu hướng của trường." },
          { participant: 'Mom', text: "I understand that feeling. Let's see if we can save up for them by using your allowance and doing some extra chores.", translation: "Mẹ rất hiểu cảm giác đó. Hay là để xem chúng ta có thể tiết kiệm tiền để mua chúng bằng cách gom tiền tiêu vặt và làm thêm việc nhà nha." }
        ]
      }
    ]
  },
  {
    id: 'parent-child-10',
    title: 'Body Safety, Puberty & Boundaries',
    vietnameseTitle: 'Cơ thể, Giới tính & An toàn',
    category: 'Communication',
    subCategory: ['Parent-Child'],
    icon: '🛡️',
    color: '#319795',
    description: 'Nói về ranh giới cơ thể, dậy thì, tình yêu lành mạnh bằng ngôn ngữ tôn trọng, không dọa nạt hay né tránh.',
    words: [
      { id: 'pc10-1', word: 'Puberty', ipa: '/ˈpjuːbəti/', definition: 'Giai đoạn dậy thì thay đổi lớn về thể chất và tâm lý.', translation: 'Tuổi dậy thì', example: 'Puberty is a natural process where your body transitions.', blankSentence: 'We had a warm chat about physical changes in ____.', emoji: '🌱' },
      { id: 'pc10-2', word: 'Consent', ipa: '/kənˈsent/', definition: 'Sự đồng ý chấp thuận rõ ràng của các bên.', translation: 'Sự đồng thuận', example: 'We must teach teens that consent is absolute and required.', blankSentence: 'No touch should happen without active ____.', emoji: '🛑' },
      { id: 'pc10-3', word: 'Boundary', ipa: '/ˈbaʊndri/', definition: 'Ranh giới an toàn cá nhân không ai được xâm hại.', translation: 'Ranh giới cá nhân', example: 'Set clear boundaries for your physical integrity.', blankSentence: 'You have every right to protect your personal ____.', emoji: '🧱' }
    ],
    structures: [
      {
        phrase: "Your body belongs to you only.",
        meaning: "Lời khẳng định quyền làm chủ cơ thể cho trẻ từ nhỏ.",
        vietnamese: "Cơ thể của con chỉ thuộc về riêng con thôi.",
        casual: "Remember, your body is your own sacred space."
      },
      {
        phrase: "It is completely normal to feel...",
        meaning: "Trấn an con khi có những biến đổi tâm sinh lý lạ lẫm.",
        vietnamese: "Hoàn toàn bình thường khi con cảm thấy...",
        casual: "Don't sweat it, it's totally natural to feel..."
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Talking about Puberty Changes',
        participants: [
          { name: 'Dad', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dad' },
          { name: 'Tuan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tuan' }
        ],
        lines: [
          { participant: 'Tuan', text: "Dad, my voice is acting weird and cracking during classes, and my face keeps breaking out. It is so embarrassing.", translation: "Bố ơi, giọng con dạo này kỳ lắm cứ vỡ ra khi phát biểu, mặt con lại mọc đầy mụn nữa. Nhìn ngại kinh khủng." },
          { participant: 'Dad', text: "Hey Tuan, look at me. It is completely normal to feel self-conscious during puberty. My voice cracked like crazy too!", translation: "Tuấn ơi, nhìn bố này. Hoàn toàn bình thường khi con thấy tự ti trong tuổi dậy thì thôi. Giọng bố ngày xưa cũng vỡ tùm lum luôn!" },
          { participant: 'Tuan', text: "Really? You looked so handsome in old pictures though.", translation: "Thật ạ? Nhưng trong ảnh cũ trông bố vẫn điển trai lắm mà." },
          { participant: 'Dad', text: "Ah, pictures lie! It's all part of growing up. Your body is maturing, and you are in complete control of it. Your body belongs to you, so take care of it with patience.", translation: "Hahaha, ảnh lừa tình đó con! Đây là một phần của sự trưởng thành thôi. Cơ thể con đang phát triển và con là người làm chủ nó hoàn toàn. Hãy chăm sóc nó với sự kiên nhẫn nhé." }
        ]
      }
    ]
  },
  {
    id: 'parent-child-11',
    title: 'Making Decisions & Taking Responsibility',
    vietnameseTitle: 'Quyết định & Trách nhiệm',
    category: 'Communication',
    subCategory: ['Parent-Child'],
    icon: '⚖️',
    color: '#4299E1',
    description: 'Luyện hội thoại giúp con tự quyết về sở thích, hoạt động ngoại khóa, học tập và gánh chịu hệ quả.',
    words: [
      { id: 'pc11-1', word: 'Consequence', ipa: '/ˈkɒnsɪkwəns/', definition: 'Hệ quả, hậu quả tất yếu từ một hành động.', translation: 'Hệ quả, hậu quả', example: 'Every decision comes with its own positive or negative consequence.', blankSentence: 'Are you prepared to face the ____ of this choice?', emoji: '🍂' },
      { id: 'pc11-2', word: 'Responsibility', ipa: '/rɪˌspɒnsəˈbɪləti/', definition: 'Trách nhiệm gánh vác việc mình đã làm.', translation: 'Trách nhiệm, phận sự', example: 'Taking responsibility for mistakes is a sign of maturity.', blankSentence: 'With freedom comes a lot of heavy ____.', emoji: '💼' },
      { id: 'pc11-3', word: 'Pros and cons', ipa: '/prəʊz ænd kɒnz/', definition: 'Những lợi ích và tác hại, điểm tốt và xấu của sự việc.', translation: 'Ưu điểm và Nhược điểm', example: 'Let\'s list the pros and cons before switching classes.', blankSentence: 'We weighed the ____ of going to art club.', emoji: '⚖️' }
    ],
    structures: [
      {
        phrase: "What are the pros and cons of this...?",
        meaning: "Câu hỏi dạy con tư duy thấu đáo đa chiều trước khi chọn.",
        vietnamese: "Ưu và nhược điểm của lựa chọn này là gì con nhỉ?",
        casual: "What's the upside and downside of this choice?"
      },
      {
        phrase: "You made the choice, so you need to...",
        meaning: "Định ranh giới trách nhiệm khi con đã tự quyết.",
        vietnamese: "Con đã quyết định chọn, vì vậy con cần phải...",
        casual: "This was your call, so you've gotta stick to..."
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Choosing Art vs Math Club',
        participants: [
          { name: 'Mom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mom' },
          { name: 'An', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=An' }
        ],
        lines: [
          { participant: 'An', text: "Mom, I want to quit the extra math preparation class and join the painting studio instead.", translation: "Mẹ ơi, con muốn bỏ lớp bồi dưỡng toán nâng cao và tham gia xưởng vẽ tranh thay thế." },
          { participant: 'Mom', text: "That is a big decision, An. What are the pros and cons of this choice in your opinion?", translation: "Đó là quyết định lớn đó An. Theo con thì ưu và nhược điểm của lựa chọn này là gì?" },
          { participant: 'An', text: "Pros: I will be much happier and creative. Cons: My grade in math might drop a bit, and I have to study by myself.", translation: "Ưu điểm: Con sẽ hạnh phúc và sáng tạo hơn. Nhược điểm: Điểm toán của con có thể tụt một chút, và con phải tự học toán ở nhà." },
          { participant: 'Mom', text: "Fair enough. If we agree, you made the choice, so you need to take indeed responsibility for self-studying math every day. Do we have a deal?", translation: "Hợp lý đó. Nếu mẹ đồng ý, con tự mình đưa ra quyết định này, vì vậy con phải hoàn toàn có trách nhiệm tự học toán mỗi ngày. Mình chốt kèo nha?" }
        ]
      }
    ]
  },
  {
    id: 'parent-child-12',
    title: 'Privacy, Boundaries & Respect',
    vietnameseTitle: 'Ranh giới & Quyền riêng tư',
    category: 'Communication',
    subCategory: ['Parent-Child'],
    icon: '🔑',
    color: '#A0AEC0',
    description: 'Thảo luận về sự tôn trọng phòng riêng, vật dụng cá nhân, tin nhắn điện thoại để nuôi dưỡng lòng tin.',
    words: [
      { id: 'pc12-1', word: 'Privacy', ipa: '/ˈprɪvəsi/', definition: 'Sự riêng tư cá nhân không thích bị dòm ngó, xâm nhập.', translation: 'Quyền riêng tư', example: 'Teenagers value their privacy extremely highly.', blankSentence: 'Please knock on my door to respect my ____.', emoji: '🚪' },
      { id: 'pc12-2', word: 'Boundary', ipa: '/ˈbaʊndri/', definition: 'Ranh giới thỏa thuận về giới gian và tài sản cá nhân.', translation: 'Ranh giới tôn trọng', example: 'Creating communication boundaries brings peace to families.', blankSentence: 'We must set a healthy ____ for room inspection.', emoji: '🚧' },
      { id: 'pc12-3', word: 'Trust', ipa: '/trʌst/', definition: 'Lòng tin cậy, sự tin tưởng lẫn nhau.', translation: 'Lòng tin, sự tin cậy', example: 'Trust is fragile; it must be built step by step over time.', blankSentence: 'I placed my complete ____ in your honesty.', emoji: '🤝' }
    ],
    structures: [
      {
        phrase: "I want to respect your space, but...",
        meaning: "Câu nói xoa dịu ranh giới khi bố mẹ thực sự lo lắng an toàn.",
        vietnamese: "Bố mẹ rất muốn tôn trọng không gian riêng của con, nhưng...",
        casual: "I completely get that you need space, but..."
      },
      {
        phrase: "May I come in?",
        meaning: "Mẫu câu đơn giản làm gương gõ cửa trước khi vào phòng con.",
        vietnamese: "Mẹ/Bố vào phòng được không?",
        casual: "Mind if I hop in for a second?"
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Locks on bedroom doors',
        participants: [
          { name: 'Mom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mom' },
          { name: 'Phong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Phong' }
        ],
        lines: [
          { participant: 'Mom', text: "Phong, why is your bedroom door locked all day? It makes me worry that something is wrong.", translation: "Phong ơi, sao cửa phòng con cứ khóa suốt ngày thế? Làm mẹ cứ lo không biết có chuyện gì không ổn." },
          { participant: 'Phong', text: "Nothing is wrong, Mom. I just need some privacy when studying or listening to music.", translation: "Không có gì đâu mẹ. Con chỉ cần chút riêng tư khi học bài hoặc nghe nhạc thôi ạ." },
          { participant: 'Mom', text: "I want to respect your space, but keeping it locked 24/7 makes it hard to check-in. How about we agree to knock first, but keep the door unlocked during weekdays?", translation: "Mẹ rất muốn tôn trọng không gian của con, cơ mà khóa suốt 24/7 làm mẹ khó hỏi han con được. Hay là mình quy định mẹ sẽ gõ cửa trước, đổi lại con không khóa xích cửa ngày thường nhé?" },
          { participant: 'Phong', text: "Alright, that is fair. As long as you always ask: 'May I come in?' before walking inside.", translation: "Dạ được ạ, thế thì công bằng rồi. Miễn là mẹ luôn hỏi: 'Mẹ vào được không?' trước khi bước vào phòng con." }
        ]
      }
    ]
  },
  {
    id: 'parent-child-13',
    title: 'Family Values & Generation Gaps',
    vietnameseTitle: 'Văn hóa gia đình & Khác biệt thế hệ',
    category: 'Communication',
    subCategory: ['Parent-Child'],
    icon: '🏡',
    color: '#DD6B20',
    description: 'Cách chia sẻ câu chuyện gia truyền, tổ tiên và đồng thời hòa giải sự khác biệt thế hệ trong tư duy, lối sống.',
    words: [
      { id: 'pc13-1', word: 'Heritage', ipa: '/ˈherɪtɪdʒ/', definition: 'Di sản tinh thần, phong tục văn hóa truyền lại.', translation: 'Văn hóa, di sản gia đình', example: 'Maintaining ancestral heritage is a beautiful custom.', blankSentence: 'Our family has a rich historic ____.', emoji: '🏺' },
      { id: 'pc13-2', word: 'Generation gap', ipa: '/ˌdʒenəˈreɪʃn ɡæp/', definition: 'Sự khác biệt lớn về tư duy giữa các thế hệ ông bà, cha mẹ, con.', translation: 'Khoảng cách thế hệ', example: 'The generation gap can cause minor arguments about tech.', blankSentence: 'To bridge the ____, we need to talk with open minds.', emoji: '🌉' },
      { id: 'pc13-3', word: 'Tradition', ipa: '/trəˈdɪʃn/', definition: 'Nền nếp truyền thống gia đình lâu đời.', translation: 'Truyền thống, thói quen', example: 'Our family tradition dictates celebrating Lunar New Year together.', blankSentence: 'Let\'s create a brand new weekend ____!', emoji: '🎋' }
    ],
    structures: [
      {
        phrase: "When I was your age, things were...",
        meaning: "Cách kể chuyện ngày xưa một cách mộc mạc, không áp đặt dạy đời.",
        vietnamese: "Bằng tuổi con ngày xưa thì mọi sự là...",
        casual: "Back in my day, things were way different."
      },
      {
        phrase: "I appreciate your perspective, even if...",
        meaning: "Chấp nhận sự khác biệt của con một cách văn minh.",
        vietnamese: "Bố mẹ trân trọng góc nhìn của con, ngay cả khi...",
        casual: "I totally respect where you're coming from, even if we don't fully agree."
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Tradition vs Modern Career Choices',
        participants: [
          { name: 'Dad', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dad' },
          { name: 'Hung', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Hung' }
        ],
        lines: [
          { participant: 'Hung', text: "Dad, I know everyone in our family is a doctor, but I want to be a digital game designer.", translation: "Bố ơi, con biết mọi người trong dòng họ mình đều làm bác sĩ, nhưng con muốn trở thành nhà thiết kế game." },
          { participant: 'Dad', text: "When I was your age, things were simple. We just followed our parents' footsteps without questioning. But times have changed.", translation: "Bằng tuổi con ngày xưa, mọi thứ đơn giản lắm. Tụi bố chỉ nối nghiệp cha mẹ chứ không thắc mắc gì. Nhưng giờ thời thế thay đổi rồi." },
          { participant: 'Hung', text: "I'm glad you understand. I was terrified you'd be furious with me.", translation: "Con rất mừng vì bố hiểu chuyện ấy. Con đã từng khiếp sợ bố sẽ nổi trận lôi đình với con." },
          { participant: 'Dad', text: "I appreciate your perspective, even if I don't fully understand digital games. Let's research the career outlook together.", translation: "Bố trân trọng quan điểm học tập của con, cho dù bố chẳng rành mấy món thiết kế game này lắm. Cùng bố nghiên cứu lộ trình phát triển ngành này xem sao nhé." }
        ]
      }
    ]
  },
  {
    id: 'parent-child-14',
    title: 'Mistakes, Apologies & Family Forgiveness',
    vietnameseTitle: 'Sai lầm, Xin lỗi & Tha thứ',
    category: 'Communication',
    subCategory: ['Parent-Child'],
    icon: '🤝',
    color: '#E53E3E',
    description: 'Cha mẹ làm gương nhận lỗi khi nóng giận quát mắng; dìu dắt con nhận lỗi khi sai và cùng sửa đổi.',
    words: [
      { id: 'pc14-1', word: 'Overreact', ipa: '/ˌəʊvəriˈækt/', definition: 'Nóng giận, hành xử thái quá trước một sự việc.', translation: 'Phản ứng quá đà, bốc đồng', example: 'I apologized to my child for letting myself overreact.', blankSentence: 'I am sorry, I didn\'t mean to ____ earlier.', emoji: '🌋' },
      { id: 'pc14-2', word: 'Forgiveness', ipa: '/fəˈɡɪvnəs/', definition: 'Sự tha thứ, bao dung dập tắt ấm ức cũ.', translation: 'Sự tha thứ, bao dung', example: 'Forgiveness in a family keeps our bond unbreakable.', blankSentence: 'Seeking your ____ is the first step to fix things.', emoji: '🕊️' },
      { id: 'pc14-3', word: 'Apologize', ipa: '/əˈpɒlədʒaɪz/', definition: 'Nói lời xin lỗi chân thành.', translation: 'Nói lời xin lỗi', example: 'It is hard for corporate parents to apologize to their toddlers.', blankSentence: 'I wanted to run over and ____ sincerely to you.', emoji: '🙇' }
    ],
    structures: [
      {
        phrase: "I apologize for losing my temper.",
        meaning: "Câu xin lỗi chuẩn mực khi cha mẹ lỡ nặng lời quát mắng con.",
        vietnamese: "Bố mẹ vô cùng xin lỗi vì đã mất bình tĩnh.",
        casual: "I'm so sorry for blowing my top earlier."
      },
      {
        phrase: "How can we fix this together?",
        meaning: "Hướng con chú trọng giải pháp hơn là dằn vặt dán nhãn lỗi.",
        vietnamese: "Làm sao để chúng ta cùng sửa chữa chuyện này đây con?",
        casual: "What can we do to make this right?"
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Apologizing after an argument',
        participants: [
          { name: 'Mom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mom' },
          { name: 'Vy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vy' }
        ],
        lines: [
          { participant: 'Mom', text: "Vy, I am so sorry. I apologize for losing my temper and yelling at you about the dirty kitchen earlier.", translation: "Vy ơi, mẹ vô cùng xin lỗi con. Mẹ xin lỗi vì hồi nãy đã mất bình tĩnh và quát tháo con về cái bếp bẩn." },
          { participant: 'Vy', text: "It's okay, Mom. I was wrong too. I promised to clean it up before 5 PM but I forgot during gaming.", translation: "Dạ không sao đâu mẹ. Con cũng có lỗi ạ. Con hứa dọn dẹp trước 5 giờ chiều mà mải chơi game quên mất tiêu." },
          { participant: 'Mom', text: "Thank you for admitting that. How can we fix this together? Can we set a timer next time?", translation: "Mẹ cảm ơn con vì đã can đảm nhận lỗi. Làm sao để chúng ta cùng sửa chữa chuyện này đây? Hay lần tới mình đặt đồng hồ báo thức nhé?" },
          { participant: 'Vy', text: "Yes, that sounds like a great plan. Let me clean the kitchen thoroughly right now.", translation: "Vâng, ý kiến đó xuất sắc luôn mẹ. Để con vào dọn dẹp sạch bóng khít khao cái bếp ngay đây." }
        ]
      }
    ]
  },
  {
    id: 'parent-child-15',
    title: 'Health, Safety & Substance-Free Life',
    vietnameseTitle: 'Sức khỏe & Chất kích thích (Teens+)',
    category: 'Communication',
    subCategory: ['Parent-Child'],
    icon: '🚭',
    color: '#805AD5',
    description: 'Thảo luận an toàn về vape, thuốc lá, rượu; lập nguyên tắc ranh giới và sẵn sàng cứu trợ lúc con gắp rắc rối.',
    words: [
      { id: 'pc15-1', word: 'Substance', ipa: '/ˈsʌbstəns/', definition: 'Chất kích thích gây nghiện hoặc hại sức khỏe nói chung.', translation: 'Chất kích thích, cấm', example: 'We should educate children early on toxic substances.', blankSentence: 'Avoid trying any unknown ____ at the party.', emoji: '🧪' },
      { id: 'pc15-2', word: 'Peer pressure', ipa: '/pɪə(r) ˈpreʃə(r)/', definition: 'Áp lực rủ rê bị ép ép từ nhóm bạn bè đồng trang lứa.', translation: 'Áp lực đồng trang lứa', example: 'Peer pressure lies behind many teens trying vaping.', blankSentence: 'Vaping often starts due to sheer ____.', emoji: '👥' },
      { id: 'pc15-3', word: 'Support system', ipa: '/səˈpɔːt ˈsɪstəm/', definition: 'Hệ thống điểm tựa hỗ trợ khẩn cấp (như gia đình).', translation: 'Hệ thống điểm tựa cứu trợ', example: 'Parents should act as a reliable safety net and support system.', blankSentence: 'Always know that home is your final ____.', emoji: '🕸️' }
    ],
    structures: [
      {
        phrase: "You can always call me if you are...",
        meaning: "Tạo cam kết làm phao cứu sinh, không trừng phạt để con dám cầu cứu.",
        vietnamese: "Con luôn có thể gọi điện cho bố mẹ nếu con đang...",
        casual: "No questions asked, just call me if you're in a pinch."
      },
      {
        phrase: "My main concern is your safety.",
        meaning: "Nhấn mạnh tình thương yêu và sự bảo vệ lên trên nguyên tắc trừng phạt.",
        vietnamese: "Mối quan tâm ưu tiên nhất của bố mẹ là sự an toàn của con.",
        casual: "Look, I just want you to be completely safe, that's what matters."
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Establishing a Safety Call agreement',
        participants: [
          { name: 'Dad', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dad' },
          { name: 'Khoa', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Khoa' }
        ],
        lines: [
          { participant: 'Dad', text: "Khoa, you are starting high school next term. You might see peers vaping or drinking at parties.", translation: "Khoa này, học kỳ tới con bước vào cấp ba rồi. Con có thể sẽ bắt gặp bạn bè hút vape hay uống rượu bia tiệc tùng." },
          { participant: 'Khoa', text: "Yeah, I've already seen some kids doing it. I roll my eyes but sometimes I feel left out.", translation: "Vâng, con cũng thấy vài bạn làm rồi. Con tuy ngó lơ nhưng thỉnh thoảng vẫn thấy hơi lạc mồi." },
          { participant: 'Dad', text: "That peer pressure is real. My main concern is your safety. Let's make an agreement: you can always call me if you are in any uncomfortable situation, no matter what.", translation: "Áp lực rủ rê từ bạn bè là có thật con ạ. Mối bận tâm ưu tiên nhất của bố là sự an toàn của con. Bố con mình thỏa thuận nhé: con luôn có thể gọi điện cho bố nếu con rơi vào bất kỳ hoàn cảnh khó chịu nào, dù thế nào đi nữa." },
          { participant: 'Khoa', text: "Even if I accidentally drank something too? You won't yell at me?", translation: "Ngay cả khi con vô tình uống chút gì đó rồi sao bố? Bố không la mắng con chứ?" },
          { participant: 'Dad', text: "No yelling. I will pick you up safely, bring you home, and we will talk with cool heads the next morning. I promise.", translation: "Hứa không la mắng quát tháo. Bố sẽ tới đón con về nhà an toàn, rồi sáng hôm sau hai bố con mình nói chuyện bình yên sau. Bố hứa đó." }
        ]
      }
    ]
  },
  {
    id: 'parent-child-16',
    title: 'Dreams, Goals & Mapping Your Future',
    vietnameseTitle: 'Ước mơ, Mục tiêu & Lộ trình',
    category: 'Communication',
    subCategory: ['Parent-Child'],
    icon: '🚀',
    color: '#319795',
    description: 'Hỏi thăm ước bão tương lai gợi mở lộ trình; cha mẹ sẵn sàng chia sẻ thất bại bản thân để làm bàn đạp.',
    words: [
      { id: 'pc16-1', word: 'Aspire', ipa: '/əˈspaɪə(r)/', definition: 'Thiết tha khao khát đạt tới một ước mơ lớn.', translation: 'Khao khát, hướng tới', example: 'What career do you aspire to build after university?', blankSentence: 'I deeply ____ to become an environmentalist.', emoji: '🎯' },
      { id: 'pc16-2', word: 'Milestone', ipa: '/ˈmaɪlstəʊn/', definition: 'Cột mốc đánh dấu bước phát triển quan trọng.', translation: 'Cột mốc quan trọng', example: 'Graduating high school is a massive milestone.', blankSentence: 'We celebrated each tiny ____ on the journey.', emoji: '🏁' },
      { id: 'pc16-3', word: 'Failure', ipa: '/ˈfeɪljə(r)/', definition: 'Sự vấp ngã thất bại đem lại bài học đắt giá.', translation: 'Sự thất bại, vấp ngã', example: 'Failure is not the opposite of success, it is part of it.', blankSentence: 'Don\'t be afraid of ____; it\'s a great teacher.', emoji: '💥' }
    ],
    structures: [
      {
        phrase: "What does your dream life look like?",
        meaning: "Câu hỏi mở tuyệt bích giúp khơi mở đam mê của con.",
        vietnamese: "Bức tranh cuộc sống ước mơ của con trông ra sao nhỉ?",
        casual: "If you could do anything, what's your dream gig?"
      },
      {
        phrase: "I once failed at... but it taught me...",
        meaning: "Bộc bạch thất bại để gần gũi và nâng đỡ con.",
        vietnamese: "Bố mẹ từng thất bại ở việc... cơ mà nó dạy bố mẹ...",
        casual: "I totally crashed and burned at... but boy, did I learn..."
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'A gap year conversation',
        participants: [
          { name: 'Mom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mom' },
          { name: 'Phuong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Phuong' }
        ],
        lines: [
          { participant: 'Phuong', text: "Mom, I feel so lost. I don't know what to study. I want to take a gap year instead of rushing to college.", translation: "Mẹ ơi con thấy vô định quá. Con chả biết nên học ngành gì. Con muốn nghỉ một năm (gap year) thay vì vội vàng vào đại học." },
          { participant: 'Mom', text: "It is okay to feel lost, Phuong! What does your dream life look like if you have that year off?", translation: "Con cảm thấy mông lung cũng bình thường thôi Phương ạ! Thế bức tranh cuộc sống mơ ước của con trông ra sao nếu con có một năm nghỉ đó?" },
          { participant: 'Phuong', text: "I want to travel around Vietnam, volunteer at organic farms, and learn photography.", translation: "Con muốn đi du lịch xuyên Việt, làm tình nguyện viên nông trại hữu cơ và học nhiếp ảnh." },
          { participant: 'Mom', text: "I love your focus. You know, I once failed to pass my dream audit entrance exam, but it taught me indeed that exploring alternative routes is valuable. Let's draft a blueprint for your gap year budget!", translation: "Mẹ rất thích sự tập trung của con. Con biết đấy, mẹ từng thi trượt kỳ kiểm toán ước mơ hồi xưa, nhưng nó thực sự dạy mẹ rằng việc khám phá các hướng đi thay thế rất giá trị. Để hai mẹ con mình cùng lên kế hoạch tài chính cho năm nghỉ này nhé!" }
        ]
      }
    ]
  },
  {
    id: 'parent-child-17',
    title: 'Conflict Resolution & Win-Win Negotiation',
    vietnameseTitle: 'Giải quyết xung đột & Thương lượng',
    category: 'Communication',
    subCategory: ['Parent-Child'],
    icon: '🗣️',
    color: '#ED8936',
    description: 'Thực hành nhường nhịn tranh luận, lắng nghe và nhắc lại luận điểm đối phương tìm giải pháp dung hòa.',
    words: [
      { id: 'pc17-1', word: 'Active listening', ipa: '/ˈæktɪv ˈlɪsənɪŋ/', definition: 'Lắng nghe tích cực bằng cách ghi nhận và lặp lại ý kiến.', translation: 'Lắng nghe tích cực', example: 'Active listening helps de-escalate heated arguments.', blankSentence: 'Try practicing ____ before raising your voice.', emoji: '👂' },
      { id: 'pc17-2', word: 'Win-win solution', ipa: '/wɪn wɪn səˈluːʃn/', definition: 'Giải pháp phân định mà cả hai bên cùng có lợi.', translation: 'Giải pháp hai bên cùng thắng', example: 'We always strive for a win-win solution during conflicts.', blankSentence: 'Let\'s collaborate on a ____ for your allowance.', emoji: '🤝' },
      { id: 'pc17-3', word: 'Composure', ipa: '/kəmˈpəʊʒə(r)/', definition: 'Sự điềm tĩnh, tự chủ kiểm soát xúc cảm.', translation: 'Sự điềm tĩnh, tự chủ', example: 'Losing your composure turns a negotiation into a fight.', blankSentence: 'Take a deep breath to maintain your ____.', emoji: '🧘' }
    ],
    structures: [
      {
        phrase: "If I hear you correctly, you wish...",
        meaning: "Cụm nhại nhắc lại lời đối phương chứng tỏ sự thấu hiểu chân thực.",
        vietnamese: "Nếu bố mẹ nghe không lầm, con đang mong muốn...",
        casual: "So, basically you want..."
      },
      {
        phrase: "Can we meet halfway on this?",
        meaning: "Câu đề đạt mỗi bên nhượng bộ một bước thương lượng.",
        vietnamese: "Chúng ta có thể nhường nhịn nhau thỏa hiệp phương án giữa không?",
        casual: "Can we find some middle ground here?"
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Discussing Curfew Extension',
        participants: [
          { name: 'Dad', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dad' },
          { name: 'Linh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Linh' }
        ],
        lines: [
          { participant: 'Linh', text: "Dad, keeping my curfew at 9 PM is totally ridiculous! Everyone else gets to stay out until 11 PM.", translation: "Bố ơi, bắt con về trước 9 giờ tối thì vô lý khủng khiếp! Ai cũng được đi chơi đến tận 11 giờ đêm." },
          { participant: 'Dad', text: "Hung, let's keep our composure first. If I hear you correctly, you wish to stay out later because you feel restricted compared to your peers.", translation: "Linh ơi, bố con mình cùng giữ điềm tĩnh nói chuyện nhé. Nếu bố nghe không lầm, con mong muốn được về muộn hơn vì thấy bị gò bó so với bạn bè." },
          { participant: 'Linh', text: "Yes! The movies and group dinners don't even finish by 9:30 PM.", translation: "Vâng đúng thế ạ! Phim ảnh và các buổi ăn uống tụ tập toàn sau 9 giờ rưỡi mới xong." },
          { participant: 'Dad', text: "I understand that. Can we meet halfway on this? How about a 10 PM limit, but you must text me when leaving, and I will pick you up? Is that a win-win solution?", translation: "Bố hiểu điều đó. Hay tụi mình thỏa hiệp mỗi người nhường một bước? Giới hạn là 10 giờ tối, đổi lại con phải nhắn tin cho bố lúc ra về và bố sẽ tới đón. Đây có phải giải pháp cả hai cùng vui không?" }
        ]
      }
    ]
  },
  {
    id: 'parent-child-18',
    title: 'Coping with Loss & Major Family Changes',
    vietnameseTitle: 'Biến cố, Chia ly & Mất mát gia đình',
    category: 'Communication',
    subCategory: ['Parent-Child'],
    icon: '🕊️',
    color: '#718096',
    description: 'Đồng hành cùng con đi qua ly hôn, tang chế, bệnh tật; nói thật tinh tế và phù hợp lứa tuổi.',
    words: [
      { id: 'pc18-1', word: 'Grief', ipa: '/ɡriːf/', definition: 'Nỗi buồn thấu tâm gan rã rời trước tang chế, mất mát nặng nề.', translation: 'Nỗi đau buồn, thương xót', example: 'Grief is a natural response to losing a family pet or relative.', blankSentence: 'We must give room to process our heavy ____.', emoji: '🕯️' },
      { id: 'pc18-2', word: 'Transition', ipa: '/trænˈzɪʃn/', definition: 'Sự chuyển giao, chuyển dời cấu trúc cuộc sống mới.', translation: 'Sự chuyển giao, biến động', example: 'Moving to a new city is a huge transition for kids.', blankSentence: 'Please hold hands through this major room ____.', emoji: '🛤️' },
      { id: 'pc18-3', word: 'Resilience', ipa: '/rɪˈzɪliəns/', definition: 'Sức bật hồi sinh, kiên cường gượng dậy sau bão tố.', translation: 'Sức bật dẻo dai, kiên cường', example: 'Going through hard times builds incredible family resilience.', blankSentence: 'The children showed remarkable ____ during the flood.', emoji: '🌱' }
    ],
    structures: [
      {
        phrase: "It is okay to feel sad or confused.",
        meaning: "Câu khẳng định chấp nhận mọi giọt nước mắt bàng hoàng của con.",
        vietnamese: "Con hoàn toàn có quyền cảm thấy buồn bã hay hoang mang.",
        casual: "It is totally fine to cry or feel completely mixed up."
      },
      {
        phrase: "We will get through this dark time.",
        meaning: "Lời gắn kết hi vọng và bảo chứng của một mái nhà.",
        vietnamese: "Gia đình chúng ta chắc chắn sẽ cùng vượt qua chuỗi ngày khó khăn này.",
        casual: "We're going to get through this together, no matter what."
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Telling a child about moving away',
        participants: [
          { name: 'Mom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mom' },
          { name: 'Na', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Na' }
        ],
        lines: [
          { participant: 'Mom', text: "Na, come sit next to me. I need to share some news. We are moving to Da Nang next month because of my job transfer.", translation: "Na ơi, lại đây ngồi cạnh mẹ. Mẹ có tin này cần báo cho con. Tháng tới cả nhà mình sẽ chuyển tới Đà Nẵng sống vì mẹ chuyển công tác." },
          { participant: 'Na', text: "No! I don't want to! All my best friends are here! I hate this so much!", translation: "Không! Con không muốn đâu! Bạn thân của con đều ở đây mà! Con ghét chuyện này lắm!" },
          { participant: 'Mom', text: "I know, Na. It is okay to feel sad or confused. It is a massive transition for you, and it sucks to say goodbye to your friends.", translation: "Mẹ biết chứ Na. Con hoàn toàn có quyền thấy buồn hay hoang mang bực bội. Đây là biến động lớn với con, dứt áo chào bạn bè tệ thật đấy." },
          { participant: 'Na', text: "But I don\'t want to go to a strange school.", translation: "Nhưng rời đi con không muốn vào một trường học xa lạ đâu." },
          { participant: 'Mom', text: "Indeed. But we will make trips back often, and we will visit the beach together. We will get through this dark time as a family, step by step.", translation: "Mẹ hiểu. Nhưng mẹ con mình vẫn sẽ bắt tàu xe về thăm các bạn thường xuyên, rồi nhà mình cùng đi tắm biển nữa. Gia đình mình nhất định sẽ vượt qua hồi chuông xáo trộn này cùng nhau con yêu." }
        ]
      }
    ]
  },
  {
    id: 'parent-child-19',
    title: 'Transitioning into Adulthood & Letting Go',
    vietnameseTitle: 'Chuyển giao & Buông tay (Tuổi trưởng thành)',
    category: 'Communication',
    subCategory: ['Parent-Child'],
    icon: '🌍',
    color: '#4A5568',
    description: 'Chuyển vai trò sang quân sư tham mưu, gợi ý thay vì quản thúc; tôn trọng hoàn toàn tự lập.',
    words: [
      { id: 'pc19-1', word: 'Independence', ipa: '/ˌɪndɪˈpendəns/', definition: 'Sự độc lập tự chủ đưa ra và gánh chịu quyết định riêng.', translation: 'Sự độc lập, tự chủ', example: 'Encouraging independence is the ultimate goal of parenting.', blankSentence: 'He is striving to gain absolute financial ____.', emoji: '🦅' },
      { id: 'pc19-2', word: 'Consultant', ipa: '/kənˈsʌltənt/', definition: 'Vai trò người trung gian quân sư tham mưu mộc mạc.', translation: 'Quân sư, cố vấn', example: 'As kids grow into adults, parents shift from boss to consultant.', blankSentence: 'Treat me as a friendly career ____, not a commander.', emoji: '🧠' },
      { id: 'pc19-3', word: 'Letting go', ipa: '/ˈlet.ɪŋ ɡəʊ/', definition: 'Sự học cách buông tay để con tự do tung cánh bay xa.', translation: 'Buông tay, tin tưởng con', example: 'Letting go is the hardest but most loving parenting stage.', blankSentence: 'Accepting their growth requires some brave ____.', emoji: '🎈' }
    ],
    structures: [
      {
        phrase: "I trust you to make the right choice.",
        meaning: "Câu trao quyền lực gửi gắm lòng tin tuyệt đối cho con trưởng thành.",
        vietnamese: "Bố mẹ hoàn toàn tin tưởng con tự đưa ra quyết định đúng đắn.",
        casual: "I completely trust your judgment on this one."
      },
      {
        phrase: "I am always just a phone call away.",
        meaning: "Lời cam kết làm cảng hàng không bình yên nâng đỡ vô điều kiện.",
        vietnamese: "Chỉ cần một cuộc gọi là bố mẹ luôn sẵn sàng ở bên con.",
        casual: "If you ever need anything, I'm just a call away."
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Moving out for first job',
        participants: [
          { name: 'Dad', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dad' },
          { name: 'Minh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Minh' }
        ],
        lines: [
          { participant: 'Minh', text: "Dad, I rented a small studio apartment near my new software office. I am moving out next Sunday.", translation: "Bố ơi, con vừa thuê một căn hộ nhỏ gần văn phòng phần mềm mới của con rồi. Chủ nhật tới con dọn ra riêng bố nhé." },
          { participant: 'Dad', text: "Wow, Sunday already! It\'s a huge transition. Letting go isn\'t easy for me, but I am incredibly proud of your independence.", translation: "Chà, chủ nhật tới luôn ư! Quả là bước đổi dời chóng vánh. Đối với bố học cách buông tay con chả dễ dàng chút nào, nhưng bố cực kỳ tự hào về sự độc lập của con." },
          { participant: 'Minh', text: "Thank you, Dad. I\'m nervous about cooking and paying bills myself.", translation: "Con cảm ơn bố. Thực ra con cũng run lắm lo chuyện cơm nước với trả nợ hóa đơn một mình." },
          { participant: 'Dad', text: "I trust you to make the right choice and handle things well. And remember, if you ever mess up cooking or get lonely, I am always just a phone call away.", translation: "Bố hoàn toàn tin tưởng con tự chọn lựa và gánh vác việc êm xuôi. Và hãy nhớ nhé, nếu lỡ nấu ăn hỏng hay thấy trống trải cô đơn, bố luôn cách con chỉ đúng một cuộc gọi thôi." }
        ]
      }
    ]
  },
  {
    id: 'parent-child-20',
    title: 'Playfulness & Creating Core Memories',
    vietnameseTitle: 'Vui chơi, Hài hước & Ký ức đẹp',
    category: 'Communication',
    subCategory: ['Parent-Child'],
    icon: '🎡',
    color: '#ECC94B',
    description: 'Tạo tiếng cười vui nhộn qua nấu nướng, cờ bàn, xem phim; giảm bớt thuyết giảng để tăng gắn bó.',
    words: [
      { id: 'pc20-1', word: 'Inside joke', ipa: '/ɪnˈsaɪd dʒəʊk/', definition: 'Lời nói đùa đùa dí dỏm chỉ người trong nhà mới hiểu rành rọt.', translation: 'Trò đùa nội bộ gia đình', example: 'We shared a hilarious inside joke during dinner.', blankSentence: 'Our family\'s silly ____ always makes us laugh.', emoji: '😹' },
      { id: 'pc20-2', word: 'Bond', ipa: '/bɒnd/', definition: 'Sợi dây liên kết, thắt chặt thâm giao thâm mật.', translation: 'Sự thắt chặt gắn kết', example: 'Cooking together builds a solid parent-child bond.', blankSentence: 'Let\'s create activities to strengthen our family ____.', emoji: '⛓️' },
      { id: 'pc20-3', word: 'Light-hearted', ipa: '/ˌlaɪt ˈhɑːtɪd/', definition: 'Vui vẻ không lo nghĩ, nhẹ nhõm dịu dàng.', translation: 'Nhẹ nhàng, thư thái', example: 'We kept the conversation light-hearted during holidays.', blankSentence: 'I loved having this ____ chat while baking cookies.', emoji: '🍰' }
    ],
    structures: [
      {
        phrase: "Let's cook something wild tonight!",
        meaning: "Câu rủ phá bĩnh hào hứng phá tan nếp tẻ nhạt thường nhật.",
        vietnamese: "Tối nay tụi mình cùng chế biến món gì cực lạ lùng đi!",
        casual: "Let's whip up some crazy dishes tonight!"
      },
      {
        phrase: "Remember that time when we...?",
        meaning: "Cách tuyệt vời dợt lại dòng ôn lại kỷ lục ký ức hạnh phúc xưa cũ.",
        vietnamese: "Con có nhớ hồi đó khi tụi mình... không?",
        casual: "Remember when we got totally lost in the rain?"
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Baking a messy cake together',
        participants: [
          { name: 'Mom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mom' },
          { name: 'Ngoc', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ngoc' }
        ],
        lines: [
          { participant: 'Mom', text: "Ngoc, look at your face! You have white flour all over your nose and cheeks!", translation: "Ngọc ơi nhìn mặt con kìa! Bột mì dính trắng xóa hết cả mũi với hai má rồi!" },
          { participant: 'Ngoc', text: "Haha! You started it, Mom! You threw the dough at my apron first!", translation: "Haha! Mẹ bắt đầu trước đấy nhá! Mẹ ném bột vào tạp dề của con trước cơ mà!" },
          { participant: 'Mom', text: "True! Let's cook something wild tonight! This chocolate volcano cake is turning into a delicious swamp.", translation: "Chuẩn luôn! Tối nay tụi mình cùng chế biến món gì thật kỳ quặc đi! Cái bánh núi lửa sô-cô-la này biến thành một cái đầm lầy ngon lành rồi." },
          { participant: 'Ngoc', text: "Swamp cake! That is going to be our new family inside joke. I love baking with you, Mom.", translation: "Bánh đầm lầy! Đây sẽ là trò đùa nội bộ gia đình mới của tụi mình nhé. Con thích nướng bánh bôi bẩn cùng mẹ thế này lắm." }
        ]
      }
    ]
  }
];

export const parentChildTopics: Topic[] = rawParentChildTopics.map(topic => ({
  ...topic,
  dialogues: PARENT_CHILD_DIALOGUES[topic.id] || topic.dialogues,
  structures: PARENT_CHILD_STRUCTURES[topic.id] || topic.structures
}));

