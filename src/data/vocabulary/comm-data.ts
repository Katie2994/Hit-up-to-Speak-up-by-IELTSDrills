import { Topic } from './types';

export const commTopics: Topic[] = [
  {
    id: 'lesson-01',
    title: 'Self-Introduction & Breaking the Ice',
    vietnameseTitle: 'Làm quen & Giới thiệu bản thân',
    category: 'Communication',
    subCategory: ['Phổ biến'],
    icon: '🤝',
    color: '#FF6B6B',
    description: 'Giới thiệu tên, tuổi, quê quán, trường/lớp, sở thích cơ bản và cách bắt chuyện khi gặp gỡ lần đầu.',
    words: [
      { id: 'c1-1', word: 'Introduce', ipa: '/ˌɪntrəˈdjuːs/', definition: 'Tự trình bày danh tính với người khác.', translation: 'Giới thiệu', example: 'Allow me to introduce myself, my name is Huy.', blankSentence: 'I would like to ____ my best friend.', emoji: '🗣️' },
      { id: 'c1-2', word: 'Hometown', ipa: '/ˈhəʊmtaʊn/', definition: 'Nơi sinh ra hoặc lớn lên của một người.', translation: 'Quê hương', example: 'Vinh is my peaceful hometown.', blankSentence: 'I often visit my ____ during Tet.', emoji: '🏡' },
      { id: 'c1-3', word: 'Hobby', ipa: '/ˈhɒbi/', definition: 'Hoạt động giải trí yêu thích lúc rảnh rỗi.', translation: 'Sở thích', example: 'Playing soccer is my main hobby.', blankSentence: 'What is your favorite ____?', emoji: '⚽' },
      { id: 'c1-4', word: 'Break the ice', ipa: '/breɪk ðiː aɪs/', definition: 'Bắt chuyện thân thiện để xóa tan e ngại ban đầu.', translation: 'Phá băng (làm quen)', example: 'A friendly joke was told to break the ice.', blankSentence: 'I smiled to ____ during our meeting.', emoji: '🧊' },
      { id: 'c1-5', word: 'Direct', ipa: '/daɪˈrekt/', definition: 'Thẳng thắn, không vòng vo.', translation: 'Thẳng thắn', example: 'Vietnamese youth prefer a direct approach.', blankSentence: 'Don\'t be shy, just be ____ with her.', emoji: '🎯' }
    ],
    structures: [
      {
        phrase: "Allow me to introduce myself.",
        meaning: "Mở đầu tự giới thiệu một cách lịch sự.",
        vietnamese: "Cho phép tôi tự giới thiệu.",
        casual: "Hey there, I don't think we've met. I'm Huy."
      },
      {
        phrase: "I'm originally from...",
        meaning: "Nói về nơi xuất xứ hoặc quê quán.",
        vietnamese: " Tôi vốn dĩ đến từ...",
        casual: "I hail from Da Nang, born and raised."
      },
      {
        phrase: "How do you spend your weekends?",
        meaning: "Hỏi han thân thiện về thời gian rảnh rỗi.",
        vietnamese: "Bạn thường làm gì vào cuối tuần?",
        casual: "Doing anything fun over the weekend?"
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Meeting a class partner',
        participants: [
          { name: 'Minh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Minh' },
          { name: 'Sarah', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah' }
        ],
        lines: [
          { participant: 'Minh', text: "Hey! Allow me to introduce myself. I'm Minh, your presentation partner.", translation: "Chào bạn! Cho phép mình tự giới thiệu nhé. Mình là Minh, bạn đồng hành thuyết trình của bạn." },
          { participant: 'Sarah', text: "Oh, hi Minh! I'm Sarah. Nice to meet you in person! Where are you originally from?", translation: "Ồ, chào Minh! Mình là Sarah. Rất vui được gặp trực tiếp bạn! Bạn vốn ở đâu đến thế?" },
          { participant: 'Minh', text: "I'm originally from Da Lat. Since we need to break the ice, what's your hobby?", translation: "Mình quê ở Đà Lạt. Tiện thể phá băng làm quen luôn thì sở thích của bạn là gì?" },
          { participant: 'Sarah', text: "I love reading books and sipping milk tea. Let's start the draft!", translation: "Mình thích đọc sách và nhâm nhi trà sữa. Bắt đầu làm nháp bài thôi nào!" }
        ]
      }
    ]
  },
  {
    id: 'lesson-02',
    title: 'Family & Friends',
    vietnameseTitle: 'Gia đình & Bạn bè',
    category: 'Communication',
    subCategory: ['Phổ biến'],
    icon: '👨‍👩‍👧‍👦',
    color: '#4ECDC4',
    description: 'Mô tả các thành viên trong gia đình, tính cách, nghề nghiệp và mối quan hệ thân thiết với bạn bè.',
    words: [
      { id: 'c2-1', word: 'Sibling', ipa: '/ˈsɪblɪŋ/', definition: 'Anh, chị, em ruột trong nhà.', translation: 'Anh chị em ruột', example: 'I have two siblings, an older sister and a brother.', blankSentence: 'Do you have any ____ in your family?', emoji: '👥' },
      { id: 'c2-2', word: 'Supportive', ipa: '/səˈpɔːtɪv/', definition: 'Luôn ủng hộ, giúp đỡ người khác.', translation: 'Ủng hộ, nâng đỡ', example: 'My family is exceptionally supportive of my plans.', blankSentence: 'Having a ____ friend is a blessing.', emoji: '💖' },
      { id: 'c2-3', word: 'Trustworthy', ipa: '/ˈtrʌstˌwɜːði/', definition: 'Đáng tin cậy, có thể giữ bí mật.', translation: 'Đáng tin cậy', example: 'Bao is a trustworthy best friend of mine.', blankSentence: 'We only share secrets with ____ people.', emoji: '🛡️' },
      { id: 'c2-4', word: 'Get along', ipa: '/ɡet əˈlɒŋ/', definition: 'Hòa thuận, có mối quan hệ tốt với ai.', translation: 'Hòa thuận', example: 'I get along very well with my classmates.', blankSentence: 'Do you ____ with your younger brother?', emoji: '🤝' },
      { id: 'c2-5', word: 'Tight-knit', ipa: '/ˌtaɪt ˈnɪt/', definition: 'Gắn bó khăng khít, đoàn kết.', translation: 'Gắn bó khít khao', example: 'We belong to a tight-knit family.', blankSentence: 'Our team is a highly ____ circle.', emoji: '🧶' }
    ],
    structures: [
      {
        phrase: "We go way back.",
        meaning: "Diễn tả mối quan hệ lâu năm từ thuở nhỏ.",
        vietnamese: "Chúng tôi đã quen biết từ rất lâu rồi.",
        casual: "Bao and I? Oh, we totally go way back."
      },
      {
        phrase: "I take after my...",
        meaning: "Thừa hưởng tính cách hoặc diện mạo từ người trong nhà.",
        vietnamese: "Tôi khá là giống với (bố/mẹ) của tôi.",
        casual: "Personality-wise, I heavily take after my dad."
      },
      {
        phrase: "He always has my back.",
        meaning: "Anh ấy luôn bảo vệ và giúp đỡ tôi vô điều kiện.",
        vietnamese: "Anh ấy luôn đứng ra bảo vệ tôi.",
        casual: "No matter what, my best friend always has my back."
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Discussing best friends',
        participants: [
          { name: 'Linh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Linh' },
          { name: 'John', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John' }
        ],
        lines: [
          { participant: 'Linh', text: "John, do you have a big family or a tight-knit support system?", translation: "John ơi, gia đình bạn đông người hay bạn có một vòng hỗ trợ khăng khít?" },
          { participant: 'John', text: "I have a tight-knit family. I actually get along well with all my siblings.", translation: "Mình có một gia đình rất khăng khít. Thực ra mình hòa thuận với tất cả anh chị em của mình luôn." },
          { participant: 'Linh', text: "That is amazing. My parents are also incredibly supportive of my choices.", translation: "Tuyệt vời quá. Bố mẹ mình cũng cực kỳ ủng hộ những quyết định của mình." },
          { participant: 'John', text: "My best friend is like family too, she is trustworthy and always has my back.", translation: "Bạn thân mình cũng giống như người nhà vậy, cô ấy rất đáng tin cậy và luôn bảo vệ mình." }
        ]
      }
    ]
  },
  {
    id: 'lesson-03',
    title: 'School & Classroom',
    vietnameseTitle: 'Trường học & Lớp học',
    category: 'Communication',
    subCategory: ['Phổ biến'],
    icon: '🏫',
    color: '#FFD166',
    description: 'Nói về các môn học, thời khóa biểu học tập, cách tương tác với thầy cô và hỏi bài vở trong lớp.',
    words: [
      { id: 'c3-1', word: 'Assignment', ipa: '/əˈsaɪnmənt/', definition: 'Bài tập được giao về nhà hoặc bài luận trường lớp.', translation: 'Bài tập lớn', example: 'We have a group assignment for English class.', blankSentence: 'Don\'t forget to hand in your ____ tomorrow.', emoji: '📝' },
      { id: 'c3-2', word: 'Syllabus', ipa: '/ˈsɪləbəs/', definition: 'Đề cương chi tiết của môn học.', translation: 'Đề cương môn học', example: 'Check the syllabus to see the final test date.', blankSentence: 'The teacher shared the course ____.', emoji: '📖' },
      { id: 'c3-3', word: 'Strict', ipa: '/strɪkt/', definition: 'Nghiêm khắc, kỉ luật cao.', translation: 'Nghiêm khắc', example: 'Our math teacher is quite strict but very kind.', blankSentence: 'Do they have ____ rules in your school?', emoji: '📏' },
      { id: 'c3-4', word: 'Ace', ipa: '/eɪs/', definition: 'Đạt điểm tuyệt đối hoặc hoàn thành xuất sắc bài kiểm tra.', translation: 'Đạt điểm đỉnh, điểm A', example: 'He managed to ace his science quiz.', blankSentence: 'Study hard and you will ____ the test!', emoji: '💯' },
      { id: 'c3-5', word: 'Curriculum', ipa: '/kəˈrɪkjələm/', definition: 'Toàn bộ chương trình khung đào tạo.', translation: 'Chương trình giảng dạy', example: 'The high school curriculum includes sports.', blankSentence: 'A modern school requires an active ____.', emoji: '🎯' }
    ],
    structures: [
      {
        phrase: "What is your main major?",
        meaning: "Hỏi chuyên ngành học chính tại trường.",
        vietnamese: "Chuyên ngành chính của bạn là gì?",
        casual: "What are you majoring in these days?"
      },
      {
        phrase: "Can you help me with this task?",
        meaning: "Khẩn cầu sự hỗ trợ bài tập một cách thân thiện.",
        vietnamese: "Bạn giúp mình giải bài này được không?",
        casual: "Mind giving me a hand with this equation?"
      },
      {
        phrase: "The final exam is just around the corner.",
        meaning: "Nhắc nhở kỳ thi cuối kỳ sắp diễn ra rất gần.",
        vietnamese: "Kỳ thi cuối kỳ ngay trước mắt rồi.",
        casual: "Finals are creeping up on us, better start cramming."
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Discussing tests and grades',
        participants: [
          { name: 'Khang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Khang' },
          { name: 'Vy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vy' }
        ],
        lines: [
          { participant: 'Khang', text: "Vy, did you look at the new syllabus for our chemistry class?", translation: "Vy ơi, bạn có xem đề cương mới của lớp Hóa chưa?" },
          { participant: 'Vy', text: "Yes, I did! The teacher seems strict, but she has a clear curriculum.", translation: "Mình xem rồi! Cô giáo có vẻ nghiêm khắc, nhưng cô có chương trình học rất rõ ràng." },
          { participant: 'Khang', text: "We have an important assignment due on Friday. I really want to ace it.", translation: "Chúng mình có bài tập lớn quan trọng phải nộp vào thứ Sáu đấy. Mình muốn giật điểm tối đa quá." },
          { participant: 'Vy', text: "No worries! Let's study together so both of us can ace this.", translation: "Đừng lo nhé! Chúng mình cùng học nhóm để cả hai ta đạt kết quả xuất sắc nhất nào." }
        ]
      }
    ]
  },
  {
    id: 'lesson-04',
    title: 'Daily Routine',
    vietnameseTitle: 'Cuộc sống hàng ngày',
    category: 'Communication',
    subCategory: ['Phổ biến'],
    icon: '⏰',
    color: '#A594F9',
    description: 'Kể về thời gian biểu một ngày điển hình: giờ giấc thức dậy, đi học, ăn tối và các thói quen bổ ích khác.',
    words: [
      { id: 'c4-1', word: 'Commute', ipa: '/kəˈmjuːt/', definition: 'Hành trình di chuyển đều đặn từ nhà đến nơi học/làm.', translation: 'Quá trình đi lại', example: 'My daily commute by bus takes 30 minutes.', blankSentence: 'How long is your morning ____?', emoji: '🚌' },
      { id: 'c4-2', word: 'Productive', ipa: '/prəˈdʌktɪv/', definition: 'Làm việc năng suất, đạt nhiều thành tựu.', translation: 'Năng suất hiệu quả', example: 'I had a highly productive morning today.', blankSentence: 'Listening to music helps me stay ____.', emoji: '⚙️' },
      { id: 'c4-3', word: 'Unwind', ipa: '/ˌʌnˈwaɪnd/', definition: 'Trút bỏ căng thẳng, thư giản thoải mái.', translation: 'Thả lỏng, xả stress', example: 'Watching cute dog videos helps me unwind.', blankSentence: 'How do you ____ after a tough lecture?', emoji: '🛁' },
      { id: 'c4-4', word: 'Routine', ipa: '/ruːˈtiːn/', definition: 'Chuỗi thói quen lặp lại hàng ngày.', translation: 'Thói quen thường lệ', example: 'A healthy morning routine boosts energy.', blankSentence: 'My sister hates breaking her daily ____.', emoji: '🔄' },
      { id: 'c4-5', word: 'Early bird', ipa: '/ˈɜːli bɜːd/', definition: 'Người thường có thói quen dậy rất sớm.', translation: 'Người dậy dớm (chim sớm)', example: 'My father is an early bird, he rises at 5 AM.', blankSentence: 'Are you an ____ or a night owl?', emoji: '🌅' }
    ],
    structures: [
      {
        phrase: "I'm a night owl.",
        meaning: "Tự nhận bản thân thích thức khuya và hoạt động ban đêm.",
        vietnamese: "Tôi là người chuyên cú đêm.",
        casual: "I do most of my studying late at night, I'm a real night owl."
      },
      {
        phrase: "How do you start your day?",
        meaning: "Hỏi han về thói quen bắt đầu buổi sáng.",
        vietnamese: "Bạn bắt đầu buổi sáng của mình như thế nào?",
        casual: "What's your morning go-to routine?"
      },
      {
        phrase: "I've got a busy schedule today.",
        meaning: "Thông báo lịch trình cá nhân bận rộn.",
        vietnamese: "Lịch hôm nay của tôi bận kín mít rồi.",
        casual: "My schedule is completely packed today."
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Sharing daily life schedules',
        participants: [
          { name: 'Nam', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nam' },
          { name: 'Duc', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Duc' }
        ],
        lines: [
          { participant: 'Nam', text: "Good morning! You sound so energetic. Are you an early bird?", translation: "Chào buổi sáng! Giọng cậu tràn đầy năng lượng thế. Cậu thuộc nhóm cú sáng dậy sớm à?" },
          { participant: 'Duc', text: "Exactly! I prefer a productive morning. I always write down my plans.", translation: "Chuẩn luôn! Mình thích một buổi sáng thật năng suất. Mình hay ghi chép kế hoạch ra." },
          { participant: 'Nam', text: "Man, I'm the opposite, a total night owl. My morning commute is always slow too.", translation: "Uầy, tớ ngược lại hoàn toàn, một đứa đích thực cú đêm. Đoạn đường đi học buổi sáng cũng siêu lề mề." },
          { participant: 'Duc', text: "You should set a solid routine. It gives you plenty of time to unwind later.", translation: "Cậu nên lập một thói quen cố định xem. Kiểu đó sẽ cho cậu nhiều thời gian thảnh thơi xả stress về sau." }
        ]
      }
    ]
  },
  {
    id: 'lesson-05',
    title: 'Hobbies, Games & Entertainment',
    vietnameseTitle: 'Sở thích & Giải trí',
    category: 'Communication',
    subCategory: ['Phổ biến'],
    icon: '🎮',
    color: '#FF9F1C',
    description: 'Bàn luận về thể thao, trò chơi điện tử, âm nhạc, phim ảnh, mạng xã hội và cách thể hiện sự yêu thích.',
    words: [
      { id: 'c5-1', word: 'Binge-watch', ipa: '/ˈbɪndʒ wɔːtʃ/', definition: 'Xem liền tù tì nhiều tập phim cùng lúc.', translation: 'Cày phim liên tục', example: 'I decided to binge-watch a Korean drama last night.', blankSentence: 'Do you want to ____ this series with me?', emoji: '🍿' },
      { id: 'c5-2', word: 'Leisure', ipa: '/ˈleʒə(r)/', definition: 'Thời gian rỗi không phải làm việc hay đi học.', translation: 'Thời gian nhàn rỗi', example: 'He spends his leisure time baking cakes.', blankSentence: 'Most people value their ____ moments.', emoji: '🧸' },
      { id: 'c5-3', word: 'Addicted', ipa: '/əˈdɪktɪd/', definition: 'Bị mê mẩn hoặc nghiện một hoạt động lành mạnh/không lành mạnh.', translation: 'Bị nghiện, mê mệt', example: 'Vietnamese teenagers are addicted to TikTok.', blankSentence: 'I am slightly ____ to this new PC game.', emoji: '📲' },
      { id: 'c5-4', word: 'Outdoors', ipa: '/ˌaʊtˈdɔːz/', definition: 'Không gian ngoài trời tuyệt vời.', translation: 'Hoạt động dã ngoại dại khờ', example: 'Let\'s go outdoors for some clean fresh air.', blankSentence: 'He is athletic and prefers the ____.', emoji: '🏕️' },
      { id: 'c5-5', word: 'Niche', ipa: '/niːʃ/', definition: 'Phân khúc sở thích độc lạ ít người theo đuổi.', translation: 'Thị trường/sở thích ngách', example: 'Collecting mechanical clocks is a niche hobby.', blankSentence: 'Find your ____ and pursue it.', emoji: '🎯' }
    ],
    structures: [
      {
        phrase: "I'm a big fan of...",
        meaning: "Thể hiện niềm đam mê sâu sắc với một cái gì đó.",
        vietnamese: "Tôi là fan bự của...",
        casual: "I'm absolutely obsessed with indie pop music."
      },
      {
        phrase: "I can't get enough of...",
        meaning: "Diễn đạt việc không thể ngừng say mê điều gì.",
        vietnamese: "Tôi không bao giờ chán món...",
        casual: "I just can't get enough of this shooter game!"
      },
      {
        phrase: "It is not my cup of tea.",
        meaning: "Cách phản đối nhẹ nhàng, không đúng sở thích của mình.",
        vietnamese: "Đó không phải gu của tôi.",
        casual: "Heavy metal music is just not my cup of tea."
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Discussing online games',
        participants: [
          { name: 'Truc', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Truc' },
          { name: 'Kien', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kien' }
        ],
        lines: [
          { participant: 'Truc', text: "Kien, do you have any fun leisure hobbies to share?", translation: "Kiên ơi, cậu có sở thích rảnh rỗi thú vị nào chia sẻ không?" },
          { participant: 'Kien', text: "I'm a big fan of modern video games. I spent hours to build my stream layout.", translation: "Tớ là một fan cứng của các trò chơi điện tử hiện đại. Tớ tốn hàng giờ thiết kế bố cục kênh stream." },
          { participant: 'Truc', text: "Oh, so you are addicted to gaming! I prefer to head outdoors during the weekend.", translation: "Ồ, vậy là cậu nghiện game rồi nhé! Tớ thì thích hòa mình ra ngoài trời dã ngoại dịp cuối tuần." },
          { participant: 'Kien', text: "Outdoor sports are fine, but virtual adventures are my niche!" , translation: "Thể thao ngoài trời cũng tốt, cơ mà các chuyến phiêu lưu ảo mới là gu ngách của tớ!" }
        ]
      }
    ]
  },
  {
    id: 'lesson-06',
    title: 'Vietnamese Cuisine & Food Culture',
    vietnameseTitle: 'Văn hóa Ẩm thực Việt',
    category: 'Communication',
    subCategory: ['Phổ biến'],
    icon: '🍜',
    color: '#E76F51',
    description: 'Thảo luận về các món ăn Việt quen thuộc (Phở, Bún chả...), món ăn đường phố và bày biện món ăn.',
    words: [
      { id: 'c6-1', word: 'Street food', ipa: '/striːt fuːd/', definition: 'Đồ ăn được bán trực tiếp trên lề đường hè phố.', translation: 'Món ăn đường phố', example: 'Hanoi street food is worldwide famous.', blankSentence: 'Let\'s try some cheap and tasty ____.', emoji: '🍢' },
      { id: 'c6-2', word: 'Broth', ipa: '/brɒθ/', definition: 'Phần nước súp dùng ninh từ xương thịt siêu ngọt.', translation: 'Nước dùng phở', example: 'The Pho broth was cooked for 10 hours.', blankSentence: 'You will enjoy the sweet bone ____.', emoji: '🥣' },
      { id: 'c6-3', word: 'Ingredient', ipa: '/ɪnˈɡriːdiənt/', definition: 'Thành phần nguyên liệu chế biến món ăn.', translation: 'Nguyên liệu thực phẩm', example: 'Lemongrass is a vital ingredient in Bun bo Hue.', blankSentence: 'Do we have enough ____ for cooking?', emoji: '🥬' },
      { id: 'c6-4', word: 'Specialty', ipa: '/ˈspeʃəlti/', definition: 'Đặc sản của một vùng miền địa phương.', translation: 'Món đặc sản', example: 'Com Tam is a legendary specialty of Saigon.', blankSentence: 'Try our local ____ during your trip.', emoji: '🍱' },
      { id: 'c6-5', word: 'Authentic', ipa: '/ɔːˈθentɪk/', definition: 'Chuẩn vị nguyên gốc bản sắc.', translation: 'Nguyên bản chuẩn vị', example: 'This small store serves authentic Hanoi Pho.', blankSentence: 'I am looking for an ____ taste.', emoji: '⭐' }
    ],
    structures: [
      {
        phrase: "You must give it a try!",
        meaning: "Khích lệ nồng nhiệt ai đó thử món mới.",
        vietnamese: "Bạn nhất định phải thử món đó nhé!",
        casual: "Bun cha is amazing, you honestly must give it a shot."
      },
      {
        phrase: "The broth is incredibly savory.",
        meaning: "Khen nước súp của món bún/phở đậm đà.",
        vietnamese: "Nước dùng có vị đậm đà ngon tuyệt.",
        casual: "The bone soup is so rich and savory."
      },
      {
        phrase: "What do you recommend?",
        meaning: "Hỏi xin ý kiến gợi ý món ăn khi đi nhà hàng.",
        vietnamese: "Bạn đề xuất món gì ngon ở đây?",
        casual: "Hey, what's good here? Any recommendation?"
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Guiding an expat to try Pho',
        participants: [
          { name: 'Lan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lan' },
          { name: 'David', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David', role: 'Expat' }
        ],
        lines: [
          { participant: 'Lan', text: "David, have you tried any authentic Vietnamese street food yet?", translation: "David ơi, anh đã thử món ăn đường phố Việt Nam chuẩn vị nào chưa?" },
          { participant: 'David', text: "Not yet, I'm waiting for your recommendation! What is the ultimate signature?", translation: "Chưa nhen, tôi đang đợi gợi ý của bạn đây! Đâu là món đặc trưng tối thượng?" },
          { participant: 'Lan', text: "You must try our specialty: Beef Pho! The bone broth is incredibly savory.", translation: "Anh nhất định phải thử đặc sản của chúng tôi: Phở Bò! Nước dùng ninh từ xương ngọt đậm đà lắm." },
          { participant: 'David', text: "Oh, that sounds mouth-watering. Let's find a store with fresh ingredients nearby!", translation: "Ồ, nghe thèm chảy nước miếng luôn rồi. Cùng tìm một tiệm có nguyên liệu tươi gần đây nhé!" }
        ]
      }
    ]
  },
  {
    id: 'lesson-07',
    title: 'Shopping & Basic Money',
    vietnameseTitle: 'Mua sắm & Tiền bạc cơ bản',
    category: 'Communication',
    subCategory: ['Phổ biến'],
    icon: '🛍️',
    color: '#06D6A0',
    description: 'Mua sắm quần áo, đồ ăn vặt, văn phòng phẩm; cách hỏi giá, trả giá thân mật và so sánh giá cả.',
    words: [
      { id: 'c7-1', word: 'Budget', ipa: '/ˈbʌdʒɪt/', definition: 'Khoản quỹ ví tiền giới hạn dự chi.', translation: 'Ngân sách giới hạn', example: 'I bought this phone with a tight budget.', blankSentence: 'Don\'t go over your designated ____.', emoji: '👛' },
      { id: 'c7-2', word: 'Bargain', ipa: '/ˈbɑːɡən/', definition: 'Món đồ có hời lớn hoặc giao dịch thương lượng giá hời.', translation: 'Món hời lớn', example: 'At only fifty thousand Dong, this shirt is a real bargain.', blankSentence: 'She loves hunting for a nice ____.', emoji: '🏷️' },
      { id: 'c7-3', word: 'Price tag', ipa: '/ˈpraɪs tæɡ/', definition: 'Nhãn mác dán chỉ thị giá tiền món hàng.', translation: 'Mác ghi giá', example: 'I look at the price tag before choosing items.', blankSentence: 'This wallet doesn\'t have any ____ on it.', emoji: '🏷️' },
      { id: 'c7-4', word: 'Overpriced', ipa: '/ˌəʊvəˈpraɪst/', definition: 'Mức định giá đắt đỏ, quá mức thực tế.', translation: 'Đắt một cách lố bịch', example: 'Drinks at airport can be highly overpriced.', blankSentence: 'I think that local boutique is ____.', emoji: '💸' },
      { id: 'c7-5', word: 'Receipt', ipa: '/rɪˈsiːt/', definition: 'Tờ hóa đơn xác minh thanh toán giao dịch.', translation: 'Tờ hóa đơn', example: 'Keep your receipt for a warranty repair.', blankSentence: 'Do you need a printed paper ____?', emoji: '🧾' }
    ],
    structures: [
      {
        phrase: "How much is this?",
        meaning: "Mẫu câu hỏi giá đồ vật thông thường.",
        vietnamese: "Món này giá bao nhiêu vậy?",
        casual: "How much for this keychain?"
      },
      {
        phrase: "Can you give me a lower price?",
        meaning: "Lời trả giá nhẹ nhàng tại chợ truyền thống.",
        vietnamese: "Giảm bớt giá một xíu được không cô/chú?",
        casual: "Can you knock a few thousand Dong off?"
      },
      {
        phrase: "That fits my wallet nicely.",
        meaning: "Nói về sản phẩm giá hạt dẻ vừa vặn ngân sách hẹp.",
        vietnamese: "Món đó rất vừa túi tiền của tôi.",
        casual: "This deal is so cheap, it fits my wallet perfectly."
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Bargaining at Ben Thanh Market',
        participants: [
          { name: 'Hien', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Hien' },
          { name: 'Vendor', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vendor', role: 'Seller' }
        ],
        lines: [
          { participant: 'Hien', text: "Hello! How much is this cute hand-woven bag?", translation: "Dạ chào cô! Cái túi dệt tay xinh xắn này giá bao nhiêu vậy ạ?" },
          { participant: 'Vendor', text: "It is three hundred thousand Dong, sweetie. It is supreme quality.", translation: "Ba trăm ngàn đồng đó con gái. Hàng tuyển chất lượng cao luôn nha." },
          { participant: 'Hien', text: "Oh, that is slightly overpriced for my budget. Can you give me a lower price?", translation: "Uầy, thế thì hơi quá tầm hầu bao của con rồi ạ. Cô bớt cho con xíu được không cô?" },
          { participant: 'Vendor', text: "Alright, the lowest I can offer can go to two hundred and fifty. Keep the receipt!", translation: "Được rồi, giá bét nhất cô bốc cho con là hai trăm rưỡi nha. Nhận túi lấy hóa đơn đi con!" }
        ]
      }
    ]
  },
  {
    id: 'lesson-08',
    title: 'Time & Planning Schedules',
    vietnameseTitle: 'Thời gian & Lên kế hoạch',
    category: 'Communication',
    subCategory: ['Phổ biến'],
    icon: '📅',
    color: '#FF6B6B',
    description: 'Hỏi đáp về giờ giấc, ngày tháng, hẹn gặp mặt, chuẩn bị lịch học nhóm và sắp xếp công việc gọn gàng.',
    words: [
      { id: 'c8-1', word: 'Schedule', ipa: '/ˈʃedjuːl/', definition: 'Bản phân chia lịch trình các hoạt động dự tính.', translation: 'Lịch trình dự kiến', example: 'I need to check my study schedule.', blankSentence: 'My weekly chemistry ____ is full.', emoji: '📅' },
      { id: 'c8-2', word: 'Deadline', ipa: '/ˈdedlaɪn/', definition: 'Thời mốc giới hạn bắt buộc hoàn tất nhiệm vụ.', translation: 'Hạn chót công việc', example: 'The absolute deadline for the essay is midnight.', blankSentence: 'Can we stretch the project ____?', emoji: '⏳' },
      { id: 'c8-3', word: 'Appointment', ipa: '/əˈpɔɪntmənt/', definition: 'Cuộc gặp khứa được đặt hẹn dặn trước lịch.', translation: 'Lịch hẹn trước', example: 'I have a dentist appointment at 3 PM today.', blankSentence: 'Do you want to secure an ____?', emoji: '🦷' },
      { id: 'c8-4', word: 'Prioritize', ipa: '/praɪˈɒrətaɪz/', definition: 'Đưa các việc cấp bách lên xử lí ưu tiên bậc nhất.', translation: 'Ưu thế hóa tầm quan trọng', example: 'You must prioritize core tasks before gaming.', blankSentence: 'Learn how to ____ your homework!', emoji: '🎯' },
      { id: 'c8-5', word: 'Postpone', ipa: '/pəʊˈspəʊn/', definition: 'Hoãn trì hoãn dịch chuyển lịch lui về sau.', translation: 'Trì hoãn, hoãn lịch', example: 'We decided to postpone our soccer match due to rain.', blankSentence: 'Don\'t ____ your homework until tomorrow.', emoji: '↩️' }
    ],
    structures: [
      {
        phrase: "Does that time suit you?",
        meaning: "Hỏi han xác thực lịch hẹn có tiện cho người khác không.",
        vietnamese: "Giờ đó có phù hợp với bạn không?",
        casual: "Is 4 PM good with you? Does that work?"
      },
      {
        phrase: "Let's meet up this weekend.",
        meaning: "Lời rủ rê họp mặt bạn bè dịp cuối tuần.",
        vietnamese: "Cuối tuần này chúng mình gặp nhau nhé.",
        casual: "Wanna hang out this Sunday?"
      },
      {
        phrase: "I'm running a bit behind schedule.",
        meaning: "Nói lời xin lỗi vì đến muộn hơn so với dự định.",
        vietnamese: "Tôi đang bị trễ kế hoạch một chút.",
        casual: "Running a tad late, my bad!"
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Sheduling a group project meeting',
        participants: [
          { name: 'Kien', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kien' },
          { name: 'Phuong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Phuong' }
        ],
        lines: [
          { participant: 'Kien', text: "Phuong, we have a tight deadline for our slides. When should we gather our minds?", translation: "Phương ơi, hạn chót hoàn thành học kỳ này kẹt lắm rồi. Chúng ta tụ họp bàn bài khi nào đây?" },
          { participant: 'Phuong', text: "Let's meet up this weekend. I will reorganize my personal schedule.", translation: "Cuối tuần này gặp nha. Mình sẽ điều chỉnh lại lịch trình cá nhân xíu." },
          { participant: 'Kien', text: "Perfect. Does Saturday morning at Coffee House suit you?", translation: "Tuyệt vời. Sáng thứ Bảy ở Coffee House có vừa giờ của bạn không?" },
          { participant: 'Phuong', text: "That works! We must prioritize writing the core ideas first. See you then!", translation: "Thời sảnh chuẩn bài rồi! Mình phải ưu tiên soạn các ý chính trước nhé. Hẹn gặp lại nhé!" }
        ]
      }
    ]
  },
  {
    id: 'lesson-09',
    title: 'City Places & Navigation',
    vietnameseTitle: 'Tìm đường & Vị trí Thành phố',
    category: 'Communication',
    subCategory: ['Phổ biến'],
    icon: '🗺️',
    color: '#F4A261',
    description: 'Hỏi và chỉ đường đơn giản đến các điểm công cộng quen thuộc (trường học, siêu thị, rạp phim, quán trà sữa).',
    words: [
      { id: 'c9-1', word: 'Landmark', ipa: '/ˈlændmɑːk/', definition: 'Tòa nhà biểu tượng dễ nhận diện trên đường phố.', translation: 'Điểm mốc nhận diện', example: 'The Opera House is a huge historic landmark.', blankSentence: 'Find the tall ____ next to the bank.', emoji: '🏛️' },
      { id: 'c9-2', word: 'Intersection', ipa: '/ˌɪntəˈsekʃn/', definition: 'Ngã tư, giao điểm giao lộ các ngả đường.', translation: 'Ngã tư giao lộ', example: 'Turn left at the busy traffic intersection.', blankSentence: 'Watch out at the dangerous ____.', emoji: '🚦' },
      { id: 'c9-3', word: 'Direct', ipa: '/daɪˈrekt/', definition: 'Chỉ lối dẫn đường cho ai đó tận tình.', translation: 'Hướng dẫn lối đi', example: 'Can you direct me to the nearest bus stop?', blankSentence: 'She can ____ you to the office.', emoji: '👉' },
      { id: 'c9-4', word: 'Shortest', ipa: '/ˈʃɔːtɪst/', definition: 'Quãng đường tối ưu ngắn nhất.', translation: 'Quắn nhất, ngắn nhất', example: 'Google Maps showed us the shortest way home.', blankSentence: 'What is the ____ route to the center?', emoji: '🏁' },
      { id: 'c9-5', word: 'Destination', ipa: '/ˌdestɪˈneɪʃn/', definition: 'Điểm đích cuối cùng cần tìm đặt chân đến.', translation: 'Điểm đích đến', example: 'We finally reached our beach destination.', blankSentence: 'The bus will arrive at the ____ soon.', emoji: '🏖️' }
    ],
    structures: [
      {
        phrase: "Could you show me the way?",
        meaning: "Lời thỉnh cầu hỏi han lối đi một cách lịch sự.",
        vietnamese: "Bạn chỉ đường giúp tôi được không?",
        casual: "Excuse me, how do I get to the local library?"
      },
      {
        phrase: "It is just around the corner.",
        meaning: "Chỉ vị trí rất gần, chỉ cần quẹo qua khúc ngoặt.",
        vietnamese: "Nó ngay góc cua đằng kia thôi.",
        casual: "That bubble tea shop? It's basically right around the corner."
      },
      {
        phrase: "Go straight until you see...",
        meaning: "Mẫu câu hướng dẫn hành khách tiếp tục đi thẳng.",
        vietnamese: "Đi thẳng tới khi bạn nhìn thấy...",
        casual: "Keep walkin' down this street till you hit the traffic lights."
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Searching for a bubble tea shop',
        participants: [
          { name: 'Robert', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Robert', role: 'Tourist' },
          { name: 'Tram', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tram' }
        ],
        lines: [
          { participant: 'Robert', text: "Excuse me, could you show me the way to the famous milk tea landmark?", translation: "Xin lỗi ơi, bạn chỉ giúp mình đường đến quán trà sữa biểu tượng nổi tiếng ở đây với?" },
          { participant: 'Tram', text: "Oh, it is very close, not hard to direct. Go straight until you see a big supermarket.", translation: "Ồ, nó gần lắm, không khó chỉ đâu. Di chuyển thẳng tắp tới khi nhìn thấy một siêu thị to nhé." },
          { participant: 'Robert', text: "Great, do I need to make any turn at the traffic intersection?", translation: "Tuyệt, thế mình có cần quẹo gì ở ngã tư giao lộ đèn giao thông không?" },
          { participant: 'Tram', text: "Yes! Turn right at the crossroad, your destination will be right around the corner, next to the park.", translation: "Có nhé! Quẹo phải ngay ngã tư, điểm đến của bạn sẽ ở ngay góc cua, sát bên cạnh công viên." }
        ]
      }
    ]
  },
  {
    id: 'lesson-10',
    title: 'Digital & Phone Communication',
    vietnameseTitle: 'Giao tiếp Mạng & Điện thoại',
    category: 'Communication',
    subCategory: ['Phổ biến'],
    icon: '📱',
    color: '#2A9D8F',
    description: 'Ngôn từ xã giao dùng khi chat, đàm thoại điện thoại, họp học tập online và các thói quen trả lời lịch sự.',
    words: [
      { id: 'c10-1', word: 'Connection', ipa: '/kəˈnekʃn/', definition: 'Sự liên kết mạng internet kết nối.', translation: 'Kết nối mạng', example: 'We have a weak Wifi connection in this café.', blankSentence: 'Please restart the router for a better ____.', emoji: '🌐' },
      { id: 'c10-2', word: 'Mute', ipa: '/mjuːt/', definition: 'Tắt phần tiếng phát âm thanh micro.', translation: 'Tắt tiếng (im lặng)', example: 'Please mute yourself during the slideshow.', blankSentence: 'You are on ____, we cannot hear you!', emoji: '🔇' },
      { id: 'c10-3', word: 'Shoot', ipa: '/ʃuːt/', definition: 'Hành động nhanh chóng thảy/gửi một tin nhắn.', translation: 'Gửi nhanh (tin nhắn)', example: 'I will shoot you an email right away.', blankSentence: 'Please ____ me a text when you arrive home.', emoji: '✉️' },
      { id: 'c10-4', word: 'Break up', ipa: '/breɪk ʌp/', definition: 'Âm thanh đàm thoại bị đứt đoạn, bập bõm không rõ nghe.', translation: 'Sóng yếu nghe bập bõm', example: 'Your voice is starting to break up on my side.', blankSentence: 'The signal is bad, you are ____.', emoji: '📶' },
      { id: 'c10-5', word: 'Notification', ipa: '/ˌnəʊtɪfɪˈkeɪʃn/', definition: 'Thông báo đẩy thiết bị điện tử khi có tin mới.', translation: 'Chuông thông báo', example: 'Turn off notification sounds to focus better.', blankSentence: 'I got a new ____ from the app.', emoji: '🔔' }
    ],
    structures: [
      {
        phrase: "You are on mute.",
        meaning: "Nhắc nhở thành viên chưa kích hoạt bật micro trong họp học tuyến.",
        vietnamese: "Bạn đang tắt mic kìa.",
        casual: "Hey, we can't hear you. You're muted."
      },
      {
        phrase: "I'll shoot you a text later.",
        meaning: "Hẹn ước nhắn gửi tin thông báo về sau.",
        vietnamese: "Mình sẽ nhắn tin cho bạn sau nhé.",
        casual: "Gotta run, I'll drop you a text later on tonight!"
      },
      {
        phrase: "Sorry, you are breaking up.",
        meaning: "Báo cáo đường truyền thoại bập bõm ngắt đoạn.",
        vietnamese: "Xin lỗi, đường truyền của bạn hơi giật cục.",
        casual: "Hang on, your voice is totally breaking up on my end."
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'An online group call meeting',
        participants: [
          { name: 'Phuc', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Phuc' },
          { name: 'Jane', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane' }
        ],
        lines: [
          { participant: 'Phuc', text: "Hello Jane? Can you hear me clearly, or is my internet connection laggy?", translation: "Aloo Jane ơi? Bạn nghe rõ mình nói không, hay mạng nhà mình bập bùng lag rồi?" },
          { participant: 'Jane', text: "I can hear you, but you were on mute a second ago. Unmute yourself!", translation: "Nghe được mà nãy bạn bị tắt mic một giây trước đó á. Mở mic lên nói đi bồ!" },
          { participant: 'Phuc', text: "Ah, my bad! My notification sound was ringin' loudly too.", translation: "Á, lỗi tại tớ! Vừa nãy âm thông báo của tớ cũng reo ong cả tai." },
          { participant: 'Jane', text: "Oh, try to mute system notifications. Actually, your signal is breaking up a bit now.", translation: "Ồ, thử tắt âm thông báo hệ thống đi xem. Cơ mà giờ sóng bồ bắt đầu hơi bập bõm giật giật rồi á." }
        ]
      }
    ]
  },
  {
    id: 'lesson-11',
    title: 'Health, Illness & Emotions',
    vietnameseTitle: 'Sức khỏe & Cảm xúc',
    category: 'Communication',
    subCategory: ['Phổ biến'],
    icon: '🤒',
    color: '#E76F51',
    description: 'Từ vựng thông dụng về cảm cúm nhẹ, đau họng, căng thẳng, cách bày tỏ cảm xúc và xoa dịu lo âu.',
    words: [
      { id: 'c11-1', word: 'Headache', ipa: '/ˈhedeɪk/', definition: 'Cơn đau râm ran trong vùng vùng đầu khó chịu.', translation: 'Đau đầu bứt rứt', example: 'Too much screen time gives me a bad headache.', blankSentence: 'Take a pill if you have a ____.', emoji: '🤯' },
      { id: 'c11-2', word: 'Symptom', ipa: '/ˈsɪmptəm/', definition: 'Chứng điềm chỉ báo của trạng thái sức khỏe cơ thể.', translation: 'Triệu chứng bệnh lý', example: 'Fever is a standard symptom of flu.', blankSentence: 'Do you feel any other weird ____?', emoji: '🌡️' },
      { id: 'c11-3', word: 'Exhausted', ipa: '/ɪɡˈzɔːstɪd/', definition: 'Kiệt quệ mệt mỏi rã rời hết sạch năng lượng.', translation: 'Kiệt sức rã rời', example: 'I felt totally exhausted after pulling an all-nighter.', blankSentence: 'Sit down, you look completely ____.', emoji: '😫' },
      { id: 'c11-4', word: 'Recover', ipa: '/rɪˈkʌvə(r)/', definition: 'Khôi phục hồi sức khỏe trở lại bình thường lành lặn.', translation: 'Hồi phục bình phục', example: 'It took him a week to recover from the bad cough.', blankSentence: 'Eat warm soup to help you ____ fast.', emoji: '🍀' },
      { id: 'c11-5', word: 'Anxious', ipa: '/ˈæŋkʃəs/', definition: 'Cảm xúc bất can bồn chồn lo sợ vu vơ.', translation: 'Lo âu phấp phỏng', example: 'She felt highly anxious before the stage performance.', blankSentence: 'Don\'t be ____ about the exam result.', emoji: '🥺' }
    ],
    structures: [
      {
        phrase: "I'm feeling under the weather.",
        meaning: "Cách nói ẩn dụ bản thân đang mệt hoặc ốm nhẹ.",
        vietnamese: "Hôm nay tôi thấy mệt mỏi trong người.",
        casual: "I'm feeling a bit under the weather today, might stay in bed."
      },
      {
        phrase: "Get well soon!",
        meaning: "Câu chúc mong người bệnh nhanh chóng có lại sức khỏe.",
        vietnamese: "Chúc bạn chóng khỏe nhé!",
        casual: "Take care and get well soon, buddy!"
      },
      {
        phrase: "Make sure you get enough rest.",
        meaning: "Lời khuyên nhủ ân cần chăm nom giấc ngủ.",
        vietnamese: "Nhớ chú ý dành thời gian ngủ nghỉ đầy đủ nhé.",
        casual: "Go crash for a few hours, you need that rest."
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Visiting a sick classmate',
        participants: [
          { name: 'Tram', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tram' },
          { name: 'Lam', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lam' }
        ],
        lines: [
          { participant: 'Tram', text: "Lam, you didn't attend school today. Are you feeling alright?", translation: "Lâm ơi, hôm nay không thấy bồ đi học luôn. Thiết kế sức khỏe thế nào rồi?" },
          { participant: 'Lam', text: "Not really, I'm feeling under the weather. I woke up with a splitting headache.", translation: "Oải lắm, tớ thấy oải kiểu đổ bệnh dưới thời tiết rồi. Dậy một cái đầu đau như búa bổ." },
          { participant: 'Tram', text: "Oh no! Is that a symptom of a seasonal flu? You look completely exhausted.", translation: "Trời ạ! Có phải triệu chứng của cúm mùa không thế? Trông bồ kiệt quệ hết sinh khí rồi." },
          { participant: 'Lam', text: "Yeah, I hope to recover quickly. Thanks for dropping by to ask!", translation: "Ừa, hi vọng hồi sức phục hồi lẹ lẹ. Cảm ơn bồ đã tạt qua hỏi han nha!" }
        ]
      }
    ]
  },
  {
    id: 'lesson-12',
    title: 'Interests & Career Ambitions',
    vietnameseTitle: 'Hướng nghiệp & Sở thích Học tập',
    category: 'Communication',
    subCategory: ['Phổ biến'],
    icon: '🚀',
    color: '#219EBC',
    description: 'Bày tỏ môn học mình đam mê, ước mơ nghề nghiệp tương lai và lý do chọn ngành đầy thuyết phục.',
    words: [
      { id: 'c12-1', word: 'Ambition', ipa: '/æmˈbɪʃn/', definition: 'Khát vọng, hoài bão lớn lao của đời người.', translation: 'Hoài bão, ước mơ lớn', example: 'His main ambition is to build an AI software.', blankSentence: 'Pursue your ____ and never give up.', emoji: '🚀' },
      { id: 'c12-2', word: 'Profession', ipa: '/prəˈfeʃn/', definition: 'Công việc đòi hỏi kiến thức chuyên môn nghề nghiệp bài bản.', translation: 'Lĩnh vực nghề nghiệp chuyên sâu', example: 'Teaching is a highly respected profession.', blankSentence: 'Choose a ____ that fits your calling.', emoji: '💼' },
      { id: 'c12-3', word: 'Major', ipa: '/ˈmeɪdʒə(r)/', definition: 'Ngành học chuyên môn chính quy tại bậc Đại học.', translation: 'Ngành học chuyên môn chính', example: 'My university major is computer science.', blankSentence: 'What ____ does she want to enroll in?', emoji: '🎓' },
      { id: 'c12-4', word: 'Pursue', ipa: '/pəˈsjuː/', definition: 'Theo đuổi tận cùng mục tiêu mong muốn.', translation: 'Theo đuổi bền bỉ', example: 'They decided to pursue their dream career in arts.', blankSentence: 'Are you ready to ____ your passion?', emoji: '🎯' },
      { id: 'c12-5', word: 'Guidance', ipa: '/ˈɡaɪdns/', definition: 'Sự định hướng dẫn lối chỉ bảo từ chuyên gia đi trước.', translation: 'Sự định hướng dìu dắt', example: 'With the right guidance from teachers, we succeeded.', blankSentence: 'Seeking professional career ____ is helpful.', emoji: '🗺️' }
    ],
    structures: [
      {
        phrase: "What do you dream of becoming?",
        meaning: "Câu hỏi thăm mở rộng về đích đến sự nghiệp tương lai.",
        vietnamese: "Ước mơ tương lai bạn muốn trở thành ai?",
        casual: "What's your dream job after graduation?"
      },
      {
        phrase: "I'd like to pursue a career in...",
        meaning: "Trình diễn kế hoạch hướng theo ngành mình khao khát.",
        vietnamese: "Tôi muốn theo đuổi sự nghiệp trong ngành...",
        casual: "I'm fixing to get into the software development industry."
      },
      {
        phrase: "Which field interests you most?",
        meaning: "Hỏi han tìm hiểu mảng kiến thức đối phương đam mê.",
        vietnamese: "Lĩnh vực nào cuốn hút bạn nhất vậy?",
        casual: "What sector are you leaning towards?"
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Discussing future university majors',
        participants: [
          { name: 'Nga', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nga' },
          { name: 'Bao', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bao' }
        ],
        lines: [
          { participant: 'Nga', text: "Bao, graduation is close. What is your main academic ambition?", translation: "Bảo ơi, tốt nghiệp cận kề rồi. Hoài bão lớn nhất cho con đường học tập của cậu là gì?" },
          { participant: 'Bao', text: "I want to pursue a professional career in AI. What about you, Nga?", translation: "Tớ muốn dấn bước theo đuổi ngành nghề chuyên nghiệp về AI. Còn cậu thì sao Nga?" },
          { participant: 'Nga', text: "I'd like to choose marketing as my major. I enjoy creative concepts.", translation: "Tớ muốn chọn chuyên ngành chính là tiếp thị truyền thông. Tớ mê mẩn các ý tưởng sáng tạo độc đáo." },
          { participant: 'Bao', text: "That is perfect. We both need deep guidance from our career counselor!", translation: "Tuyệt đỉnh luôn rồi. Hai tụi mình chắc phải kiếm tư vấn hướng nghiệp để có thêm định hướng sâu!" }
        ]
      }
    ]
  },
  {
    id: 'lesson-13',
    title: 'Traditional Tet & Celebrations',
    vietnameseTitle: 'Lễ Tết & Phong tục Việt',
    category: 'Communication',
    subCategory: ['Phổ biến'],
    icon: '🧨',
    color: '#FF6B6B',
    description: 'Ăn mừng Tết Nguyên Đán, Tết Trung Thu, chúc mừng 20/11, thăm hỏi người thân phong tục tinh hoa Việt.',
    words: [
      { id: 'c13-1', word: 'Reunion', ipa: '/ˌriːˈjuːniən/', definition: 'Dịp đoàn tụ, sum họp các thành viên gia đình sau năm dài.', translation: 'Đoàn sum họp sum vầy', example: 'Tet is the ultimate time for family reunion.', blankSentence: 'We held a joyful family ____ around the bonfire.', emoji: '👨‍👩‍👧‍👦' },
      { id: 'c13-2', word: 'Decoration', ipa: '/ˌdekəˈreɪʃn/', definition: 'Những đồ vật xinh xắn bày hoàng điểm tô không gian.', translation: 'Vật phẩm trang hoàng trang trí', example: 'Peach blossoms are popular holiday decorations.', blankSentence: 'Let\'s hang up some cute red ____.', emoji: '🏮' },
      { id: 'c13-3', word: 'Custom', ipa: '/ˈkʌstəm/', definition: 'Phong tục tập quán duy trì lưu truyền lâu đời.', translation: 'Phong tục thói quen lâu đời', example: 'Giving lucky money is a heartwarming Vietnamese custom.', blankSentence: 'We observe traditional ancestral ____ during Tet.', emoji: '⛩️' },
      { id: 'c13-4', word: 'Prosperity', ipa: '/prɒˈsperəti/', definition: 'Sự vinh hoa, phú quý tài lộc phát vượng dồi dào.', translation: 'Sự phồn thịnh tài lộc', example: 'Red color symbolizes luck and endless prosperity.', blankSentence: 'I wish you a new year filled with health and ____.', emoji: '🧧' },
      { id: 'c13-5', word: 'Gather', ipa: '/ˈɡæðə(r)/', definition: 'Tập hợp, hội tụ mọi người đứng chung vui vầy.', translation: 'Gom lại hội họp', example: 'We gather in the kitchen to wrap Banh Chung.', blankSentence: 'The old relatives will ____ around the table.', emoji: '🤝' }
    ],
    structures: [
      {
        phrase: "Wishing you a happy and prosperous new year!",
        meaning: "Câu chúc Tết truyền miệng kinh điển và lịch thiệp nhất.",
        vietnamese: "Chúc bạn một năm mới an khang thịnh vượng!",
        casual: "May your pocket be heavy and your heart be light this Tet!"
      },
      {
        phrase: "How do you celebrate this festival?",
        meaning: "Hỏi han thăm thú cách người bạn hưởng ngày lễ hội.",
        vietnamese: "Bạn ăn mừng ngày lễ đón tết này như thế nào?",
        casual: "Lining up any grand plan for the Tet holiday?"
      },
      {
        phrase: "Let's make some family gatherings.",
        meaning: "Đề nghị họp tề tựu ấm áp bữa cơm gia đình.",
        vietnamese: "Chúng ta cùng tổ chức gom tụ liên gia đình nhé.",
        casual: "Come over, we're throwing a massive family feast!"
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Explaining Tet to a foreigner',
        participants: [
          { name: 'Kieu', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kieu' },
          { name: 'Tom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tom', role: 'Foreigner' }
        ],
        lines: [
          { participant: 'Kieu', text: "Tom, are you ready to witness our traditional Tet reunion?", translation: "Tom ơi, anh đã sẵn sàng chiêm ngưỡng tết đoàn sum họp sum vầy truyền thống của tụi tôi chưa?" },
          { participant: 'Tom', text: "Yes, I'm super excited! People are putting up colorful decorations everywhere.", translation: "Sẵn sàng luôn, hào hứng ghê! Người dân đang treo vật dụng trang trí nhiều màu khắp nẻo đường kìa." },
          { participant: 'Kieu', text: "Indeed. One unique custom of ours is to gather and cook sticky rice cakes.", translation: "Đúng vậy đó. Một phong tục độc đáo đặc sắc của tụi tôi là tề tựu nấu bánh chưng bánh tét." },
          { participant: 'Tom', text: "That is fascinating. I wish you and your family ultimate prosperity this year!", translation: "Hay quá xá. Chúc gia đình cô năm nay hanh thông vạn sự đắc tài lộc phú quý nha!" }
        ]
      }
    ]
  },
  {
    id: 'lesson-14',
    title: 'Travel & Homeland Beauties',
    vietnameseTitle: 'Du lịch & Vẻ đẹp quê hương',
    category: 'Communication',
    subCategory: ['Phổ biến'],
    icon: '✈️',
    color: '#4ECDC4',
    description: 'Giới thiệu quê hương, những địa danh non nước danh thắng vạn người mê (Đà Nẵng, Hạ Long, Hà Giang...).',
    words: [
      { id: 'c14-1', word: 'Scenery', ipa: '/ˈsiːnəri/', definition: 'Cảnh quan non nước bao la tuyệt trần của thiên nhiên.', translation: 'Thắng cảnh kỳ vĩ thiên nhiên', example: 'The mountain scenery in Ha Giang is breathtaking.', blankSentence: 'Stop the car to look at the majestic ____.', emoji: '⛰️' },
      { id: 'c14-2', word: 'Hospitality', ipa: '/ˌhɒspɪˈtæləti/', definition: 'Sự mến khách nồng hậu hiếu hỉ của lòng người.', translation: 'Lòng mến khách nhiệt thành', example: 'Vietnamese locals are famous worldwide for their warm hospitality.', blankSentence: 'We truly appreciate your hospitable ____.', emoji: '🤗' },
      { id: 'c14-3', word: 'Itinerary', ipa: '/aɪˈtɪnərəri/', definition: 'Bản lộ trình ghi chi tiết các điểm ghé chân du lịch.', translation: 'Lịch trình du hí di chuyển', example: 'We have a detailed itinerary for our 3-day Da Lat trip.', blankSentence: 'Add the waterfalls to our travel ____.', emoji: '🗺️' },
      { id: 'c14-4', word: 'Breathtaking', ipa: '/ˈbreθteɪkɪŋ/', definition: 'Đẹp đến mức làm nghẹt thở sững sờ.', translation: 'Cảnh sắc lung linh sững sờ', example: 'The sunrise over Ha Long Bay was absolutely breathtaking.', blankSentence: 'This high viewpoint offers a ____ view.', emoji: '🌅' },
      { id: 'c14-5', word: 'Souvenir', ipa: '/ˌsuːvəˈnɪə(r)/', definition: 'Đồ lưu niệm làm quà kỷ niệm chuyến đi xa.', translation: 'Món quà lưu niệm kỷ niệm', example: 'I bought some cute conical hats as souvenirs.', blankSentence: 'What local ____ should we store?', emoji: '🎁' }
    ],
    structures: [
      {
        phrase: "My hometown is famous for...",
        meaning: "Giới thiệu điểm hút khách thế mạnh nét đặc trưng của quê nhà.",
        vietnamese: "Quê hương của tôi nổi tiếng về...",
        casual: "My town is basically the capital of delicious seafood."
      },
      {
        phrase: "The landscape is absolutely breathtaking.",
        meaning: "Khen ngợi nức lòng vẻ đẹp thiên nhiên kỳ hoành.",
        vietnamese: "Cảnh vật thiên nhiên đẹp đến mê hồn.",
        casual: "The view from the mountain top is pure magic."
      },
      {
        phrase: "How long should we stay there?",
        meaning: "Thảo luận thời gian dừng chân trú chân trong hành trình.",
        vietnamese: "Chúng ta nên dừng chân ở đó bao lâu nhỉ?",
        casual: "What's the play? Are we crashing here for a couple of days?"
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Sharing school holiday trip photos',
        participants: [
          { name: 'Ha', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ha' },
          { name: 'Nick', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nick' }
        ],
        lines: [
          { participant: 'Ha', text: "Nick, look at this! My hometown Nha Trang has the most incredible scenery.", translation: "Nick ơi, lướt coi này! Nha Trang quê tớ sở hữu thắng cảnh đẹp không thể tả xiết." },
          { participant: 'Nick', text: "Woah, that water looks crystal clear! The beach views are breathtaking indeed.", translation: "Uầy, nước ngập mắt nhìn trong veo như pha lê luôn! Cảnh sắc bãi biển sững sờ thực sự." },
          { participant: 'Ha', text: "Yes! And the locals are well known for their welcoming hospitality.", translation: "Ừa! Và cư dân địa phương ở đây cực kì hiếu khách, nồng nhiệt đón chào du khách lắm." },
          { participant: 'Nick', text: "Let's draw up an itinerary for the next summer break so I can visit!", translation: "Để tụi mình lập một kế hoạch du hí hè tới tớ nhất định dạt qua chơi nhé!" }
        ]
      }
    ]
  },
  {
    id: 'lesson-15',
    title: 'Environment & Responsibility',
    vietnameseTitle: 'Môi trường & Trách nhiệm',
    category: 'Communication',
    subCategory: ['Phổ biến'],
    icon: '🌱',
    color: '#2A9D8F',
    description: 'Bàn luận về rác thải, ô nhiễm, thói quen tiết kiệm nguồn tài nguyên và các chiến dịch xanh tình nguyện.',
    words: [
      { id: 'c15-1', word: 'Recycle', ipa: '/ˌriːˈsaɪkl/', definition: 'Tái chế rác thải giấy, nhựa cũ thành đồ hữu ích mới.', translation: 'Tái chế sử dụng lại', example: 'We should recycle single-use plastic bottles.', blankSentence: 'Learn how to separate trash and ____ them.', emoji: '♻️' },
      { id: 'c15-2', word: 'Pollution', ipa: '/pəˈluːʃn/', definition: 'Trạng thái suy thoái ô nhiễm môi trường tự nhiên.', translation: 'Nạn ô nhiễm môi trường', example: 'Air pollution is a pressing health concern in big cities.', blankSentence: 'The factories caused severe water ____.', emoji: '🏭' },
      { id: 'c15-3', word: 'Voluntary', ipa: '/ˈvɒləntri/', definition: 'Hành động thiện nguyện, tự nguyện không vụ lợi lương bổng.', translation: 'Hoạt động tự nguyện tình nguyện', example: 'She joined the voluntary park cleaning squad.', blankSentence: 'They do excellent ____ community work.', emoji: '🤝' },
      { id: 'c15-4', word: 'Conserve', ipa: '/kənˈsɜːv/', definition: 'Bảo tồn năng lượng, bảo toàn tài nguyên bền vững.', translation: 'Bảo tồn năng lượng sinh thái', example: 'Conserve clean fresh water at home.', blankSentence: 'Every youth must help to ____ biological reserves.', emoji: '💧' },
      { id: 'c15-5', word: 'Organic', ipa: '/ɔːˈɡænɪk/', definition: 'Đồ hữu cơ tự nhiên sạch không dính hóa chất.', translation: 'Sản vật hữu cơ tự nhiên sạch', example: 'Buying organic vegetables promotes sustainable farming.', blankSentence: 'We prefer eating ____ raw honey.', emoji: '🍎' }
    ],
    structures: [
      {
        phrase: "We should minimize plastic waste.",
        meaning: "Lời kêu gọi giảm tải lượng rác thải khó phân hủy.",
        vietnamese: "Chúng ta nên giảm thiểu tối đa rác chất thải nhựa bừa bãi.",
        casual: "Cut down on the plastic wrapping, folks."
      },
      {
        phrase: "Every small action counts.",
        meaning: "Cổ vũ ý thức hành động dù nhỏ bé nhưng chung sức sẽ làm nên điều lớn lao.",
        vietnamese: "Mỗi hành trình hành động nhỏ bé đều có giá trị lớn.",
        casual: "No matter how tiny the action, it's making a difference."
      },
      {
        phrase: "How can we make our classroom green?",
        meaning: "Hỏi han bàn tính thiết kế xanh trường học.",
        vietnamese: "Làm cách nào chúng ta phủ xanh lớp học của mình?",
        casual: "Got any brilliant ideas to make our corner eco-friendly?"
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Planning a weekend cleaning event',
        participants: [
          { name: 'An', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=An' },
          { name: 'Trung', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Trung' }
        ],
        lines: [
          { participant: 'An', text: "Trung, look at all this beach plastic litter! The ocean pollution is terrible.", translation: "Trung ơi, nhìn rác nhựa ngoài bãi biển kìa! Chuyện ô nhiễm đại dương ghê rợn thật sự." },
          { participant: 'Trung', text: "Yeah, we must act to conserve our beautiful marine life. Let's do some voluntary work.", translation: "Đúng thế, ta phải hành động ngay để bảo tồn sinh vật biển tươi đẹp. Gom tay làm tí việc thiện nguyện đi." },
          { participant: 'An', text: "We can recycle some bottles and collect trash. Remember, every small action counts!", translation: "Tụi mình thu gom chai tái chế sử dụng lại và gom rác sạch sẽ. Nhớ nha, từng hành động lí nhí đều có giá trị lớn đó!" },
          { participant: 'Trung', text: "Awesome! Let's invite more classmates to keep our coastline pristine and green.", translation: "Đỉnh chóp luôn! Hãy kêu gọi tụi bạn cùng lớp biến đường biển trở nên sạch bong sáng bóng và xanh tươi nào." }
        ]
      }
    ]
  },
  {
    id: 'lesson-16',
    title: 'Apology, Gratitude & Light Manners',
    vietnameseTitle: 'Cảm ơn, Xin lỗi & Phép Lịch sự',
    category: 'Communication',
    subCategory: ['Phổ biến'],
    icon: '🙏',
    color: '#E9C46A',
    description: 'Học cách xin lỗi tinh tế, ghi nhận lòng biết ơn chân thành, nói từ chối lịch thiệp trong giao tiếp.',
    words: [
      { id: 'c16-1', word: 'Grateful', ipa: '/ˈɡreɪtfl/', definition: 'Tấm lòng nhớ ơn, vô cùng trân quý lòng tốt.', translation: 'Vô cùng biết ơn', example: 'I am incredibly grateful for your math coaching.', blankSentence: 'They are ____ to have a supportive coach.', emoji: '💖' },
      { id: 'c16-2', word: 'Apologize', ipa: '/əˈpɒlədʒaɪz/', definition: 'Chân thành thốt lời xin lỗi vì lỗi lầm gây nên.', translation: 'Ngỏ lời xin lỗi nhận sai', example: 'I sincerely apologize for pushing the wrong button.', blankSentence: 'You should ____ for being late to class.', emoji: '🥺' },
      { id: 'c16-3', word: 'Misunderstanding', ipa: '/ˌmɪsʌndəˈstændɪŋ/', definition: 'Sự hiểu lầm lệch nhịp giữa các cá nhân.', translation: 'Hiểu nhầm cản trở giao tiếp', example: 'It was a simple misunderstanding about the schedule.', blankSentence: 'Clarify the issue to completely avoid any ____.', emoji: '🤷' },
      { id: 'c16-4', word: 'Forgive', ipa: '/fəˈɡɪv/', definition: 'Bao dung tha thứ bỏ quá cho lỗi người cũ.', translation: 'Tha thứ xóa tội', example: 'Please forgive me for forgetting your birthday party.', blankSentence: 'She is generous enough to easily ____ him.', emoji: '🤝' },
      { id: 'c16-5', word: 'Polite', ipa: '/pəˈlaɪt/', definition: 'Văn minh lễ phép, đối xử rất mực nho nhã với người đời.', translation: 'Lịch sự lễ phép nề nếp', example: 'Saying please and thank you is basic polite behavior.', blankSentence: 'Always be exceptionally ____ to the elderly.', emoji: '🧑‍💼' }
    ],
    structures: [
      {
        phrase: "I sincerely apologize for...",
        meaning: "Cách xin lỗi vô cùng lịch lãm và trang nhã chuẩn mực.",
        vietnamese: "Tôi chân thành xin lỗi vì...",
        casual: "Sorry about that! My total bad."
      },
      {
        phrase: "I am extremely grateful for your help.",
        meaning: "Tri ân nồng nhiệt tấm lòng nâng đỡ.",
        vietnamese: "Tôi vô cùng biết ơn sự hỗ trợ chỉ dạy của bạn.",
        casual: "I seriously can't thank you enough! You're a life saver."
      },
      {
        phrase: "I'd love to, but I'm afraid I can't.",
        meaning: "Lời chối khéo từ chối lời mời cực kỳ lịch sự.",
        vietnamese: "Mình rất muốn tham gia, nhưng e rằng mình bận mất rồi.",
        casual: "Sounds like a blast, but I gotta pass this time."
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Resolving a book borrowing delay',
        participants: [
          { name: 'Hung', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Hung' },
          { name: 'Chloe', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Chloe' }
        ],
        lines: [
          { participant: 'Hung', text: "Chloe, I sincerely apologize for the delay in returning your dictionary.", translation: "Chloe ơi, mình chân thành xin lỗi bồ vì trễ nải trong việc trả cuốn từ điển nha." },
          { participant: 'Chloe', text: "Ah, no worries Hung! I thought it was a slight misunderstanding about the date.", translation: "Á, không sao đâu Hùng ơi! Mình cứ nghĩ là có chút xíu hiểu nhầm về ngày hẹn thèm thôi hà." },
          { participant: 'Hung', text: "I'm extremely grateful for your patience. Say, can I buy you a drink as a thank you?", translation: "Mình siêu biết ơn sự bao dung kiên trì xí xóa của bồ. Tiện đây cho mình mời ly trà sữa làm quà cám ơn nhé?" },
          { participant: 'Chloe', text: "That is incredibly polite of you! I'll forgive you and accept the drink!", translation: "Chu đáo tinh tế xịn sò quá bồ ơi! Xóa nợ luôn và tớ nhận ly nước dập dịu này nhé!" }
        ]
      }
    ]
  },
  {
    id: 'lesson-17',
    title: 'Expressing Opinions & Debates',
    vietnameseTitle: 'Bày tỏ ý kiến & Tranh luận',
    category: 'Communication',
    subCategory: ['Phổ biến'],
    icon: '🗣️',
    color: '#06D6A0',
    description: 'Diễn đạt ý kiến đồng tình/phản bác văn minh lịch sự về các vấn đề quen thuộc (ví dụ tự học vs học thêm).',
    words: [
      { id: 'c17-1', word: 'Perspective', ipa: '/pəˈspektɪv/', definition: 'Tầm nhìn nhãn quang, góc quan điểm cá tính.', translation: 'Quan điểm góc nhìn riêng', example: 'Travelling opens up a completely modern perspective.', blankSentence: 'Try to analyze this issue from my ____.', emoji: '👁️' },
      { id: 'c17-2', word: 'Disagree', ipa: '/ˌdɪsəˈɡriː/', definition: 'Bất đồng, không đồng lõa thống nhất ý kiến.', translation: 'Bất đồng ý kiến không chịu', example: 'I respect your view, but I highly disagree with this choice.', blankSentence: 'We can ____ and still maintain friendship.', emoji: '🙅' },
      { id: 'c17-3', word: 'Convincing', ipa: '/kənˈvɪnsɪŋ/', definition: 'Tính thuyết phục mạnh mẻ rành rọt thấu lý.', translation: 'Đầy tính thấu lí thuyết phục', example: 'Her presentation displayed very convincing evidence.', blankSentence: 'Your explanation is not completely ____ yet.', emoji: '📈' },
      { id: 'c17-4', word: 'Argument', ipa: '/ˈɑːɡjumənt/', definition: 'Lập luận đưa luận điểm bảo bọc góc tối ý kiến.', translation: 'Luận điểm bảo vệ ý kiến', example: 'Bao built a strong logical argument for the project.', blankSentence: 'Check if there is a loophole in your ____.', emoji: '🗣️' },
      { id: 'c17-5', word: 'Compromise', ipa: '/ˈkɒmprəmaɪz/', definition: 'Giải pháp thỏa hiệp dung hòa đôi bên cùng vui.', translation: 'Điểm thỏa hiệp chung đôi bên', example: 'After debating for an hour, we reached a compromise.', blankSentence: 'Are you ready to make a healthy ____?', emoji: '🤝' }
    ],
    structures: [
      {
        phrase: "From my perspective...",
        meaning: "Cách mở đầu trình bày lập trường cá tính nhã nhặn.",
        vietnamese: "Dưới góc nhìn góc độ của cá nhân tôi...",
        casual: "Personally, the way I see it is..."
      },
      {
        phrase: "I see your point, but...",
        meaning: "Ghi nhận lập ý đối phương rồi nhẹ nhàng lật ý phản bác biện giải.",
        vietnamese: "Tôi hiểu góc ý kiến của bạn, tuy nhiên...",
        casual: "I completely get where you're coming from, but hear this."
      },
      {
        phrase: "I couldn't agree more.",
        meaning: "Đồng thuận hoàn hảo tuyết đối không có gì bàn cãi.",
        vietnamese: "Tôi đồng tình hoàn toàn không chệch đi đâu được.",
        casual: "Preach! That is absolutely spot on!"
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Debating Self-Study vs Extra Classes',
        participants: [
          { name: 'Quang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Quang' },
          { name: 'Phuong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Phuong' }
        ],
        lines: [
          { participant: 'Quang', text: "From my perspective, self-study online is the absolute king of learning.", translation: "Theo góc quan điểm của tớ, tự học trực tuyến mới thật sự là vua của việc học tập." },
          { participant: 'Phuong', text: "I see your point, but extra classes offer excellent expert coaching and guidance.", translation: "Tớ hiểu ý cậu, cơ mà lớp học thêm lại cho ta kĩ thuật sư định hướng dìu dắt từ chuyên gia xịn." },
          { participant: 'Quang', text: "True, but a self-study plan forces you to build strong career ambition and drive.", translation: "Cũng đúng, nhưng lộ trình tự luyện bắt bồ tực xây hoài bão ước mơ ước chế kỉ luật bản lĩnh lắm." },
          { participant: 'Phuong', text: "Let's reach a compromise. Blending both methods is the most convincing strategy!", translation: "Hợp ý thỏa hiệp dung hòa đi. Phối kết hợp cả hai nẻo mới là đối sách thuyết phục tột đỉnh!" }
        ]
      }
    ]
  },
  {
    id: 'lesson-18',
    title: 'Experience & Childhood Memories',
    vietnameseTitle: 'Kỷ niệm tuổi thơ & Trải nghiệm',
    category: 'Communication',
    subCategory: ['Phổ biến'],
    icon: '🚲',
    color: '#FF9F1C',
    description: 'Kể lại một chuyện vui vẻ buổi ngây thơ, kỷ niệm gia đình đầm ấm hoặc một sự cố quậy nghịch thời thơ dại.',
    words: [
      { id: 'c18-1', word: 'Nostalgic', ipa: '/nɒˈstældʒɪk/', definition: 'Cảm giác bồi hồi, hoài niệm khôn nguôi về quá khứ.', translation: 'Hoài niệm bồi hồi dạt dào', example: 'Listening to old video game music makes me highly nostalgic.', blankSentence: 'We felt quite ____ looking at childhood photo snaps.', emoji: '🥺' },
      { id: 'c18-2', word: 'Memory', ipa: '/ˈmeməri/', definition: 'Gói ký ức, vùng lưu giữ kỉ niệm thưở xưa.', translation: 'Vùng kí ức ngọt ngào', example: 'Eating Grandma\'s cookies is a sweet memory of mine.', blankSentence: 'My trip to Nha Trang holds my best childhood ____.', emoji: '🎞️' },
      { id: 'c18-3', word: 'Remind', ipa: '/rɪˈmaɪnd/', definition: 'Đập xúc cảm nhắc nhở nhớ về bóng dáng sự việc cũ.', translation: 'Gợi tưởng gợi nhớ về', example: 'This delicious smell of soup reminds me of my village home.', blankSentence: 'Does this old song ____ you of our school days?', emoji: '💭' },
      { id: 'c18-4', word: 'Childhood', ipa: '/ˈtʃaɪldhʊd/', definition: 'Khoảng thời niên thiếu ấu thơ vô tư lự.', translation: 'Kỷ nguyên niên thiếu ấu thơ', example: 'Bao and I shared a fun childhood in Hue.', blankSentence: 'What was your favorite hobby back in your ____?', emoji: '👦' },
      { id: 'c18-5', word: 'Unforgettable', ipa: '/ˌʌnfəˈɡetəbl/', definition: 'Kỷ niệm khắc cốt ghi xương không thể nào quên.', translation: 'Mãi khắc ghi không bao giờ quên', example: 'The class camping night was an unforgettable experience.', blankSentence: 'Our graduation ceremony was an ____ event.', emoji: '⭐' }
    ],
    structures: [
      {
        phrase: "This reminds me of...",
        meaning: "Bày tỏ cảm hứng hoài niệm khơi gợi từ hình ảnh hiện hữu.",
        vietnamese: "Điều này làm tôi gợi nhớ đến...",
        casual: "Man, looking at this playground totally throws me back to the old days."
      },
      {
        phrase: "Back in my school days...",
        meaning: "Mở đầu chuỗi kể về chuỗi kỉ niệm ngày cắp sách tới trường.",
        vietnamese: "Quay về những ngày đi học thưở xưa...",
        casual: "Way back then, we used to pull some crazy stunts."
      },
      {
        phrase: "I will never forget the time when...",
        meaning: "Xác nhận khoảnh khắc kỷ niệm trân quý mãi không phai mờ.",
        vietnamese: "Tôi sẽ không bao giờ quên dạo kì tích khi mà...",
        casual: "No cap, I'll never forget the time we got lost in that forest."
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Discussing old school memories',
        participants: [
          { name: 'Kien', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kien' },
          { name: 'Nhi', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nhi' }
        ],
        lines: [
          { participant: 'Kien', text: "Nhi, look! Whispering this sweet ice-cream flavor reminds me of our primary school.", translation: "Nhi ơi nhìn kìa! Nhấm nháp hương kem ngọt ngào này làm tớ khơi gợi nhớ về thuở tiểu học quá." },
          { participant: 'Nhi', text: "Oh, it makes me highly nostalgic too. Our childhood days were filled with laughs.", translation: "Ồ, nó cũng khiến tớ hoài niệm bồi hồi phết. Kỷ nguyên niên thiếu thuở xưa ngập tràn tiếng cười reo." },
          { participant: 'Kien', text: "I will never forget the time when we got caught playing games under the heavy rain.", translation: "Tớ mãi khắc ghi đợt bị bắt quả tang đầu trần tắm mưa chơi đuổi bắt nghịch cát dã man." },
          { participant: 'Nhi', text: "Haha, our strict teacher scolded us! That was indeed an unforgettable experience.", translation: "Ha ha, dạo đó bị thầy giáo nghiêm khắc cốc đầu mắng tưng bừng! Cơ mà đó quả thực là trải nghiệm không phai mờ." }
        ]
      }
    ]
  },
  {
    id: 'lesson-19',
    title: 'Music, Movies & Celebs',
    vietnameseTitle: 'Âm nhạc, Phim ảnh & Thần tượng',
    category: 'Communication',
    subCategory: ['Phổ biến'],
    icon: '🎵',
    color: '#A594F9',
    description: 'Nói về ca sĩ, ban nhạc, các siêu phẩm điện ảnh bom tấn yêu thích; giải thích nguyên cớ hâm mộ cuồng nhiệt.',
    words: [
      { id: 'c19-1', word: 'Celebrity', ipa: '/səˈlebrəti/', definition: 'Người nổi tiếng lừng danh trong nền văn hóa giải trí đại chúng.', translation: 'Ngôi sao giải trí, danh nhân', example: 'A huge crowd gathered at the airport to meet the celebrity.', blankSentence: 'Would you ever want to live like a rich ____?', emoji: '🕺' },
      { id: 'c19-2', word: 'Album', ipa: '/ˈælbəm/', definition: 'Tập hợp các bài hát thu tuyển đĩa nhạc phát hành.', translation: 'Album tuyển tập nhạc', example: 'His debut album broke all streaming records.', blankSentence: 'Which hit track from this ____ is your favorite?', emoji: '💽' },
      { id: 'c19-3', word: 'Blockbuster', ipa: '/ˈblɒkbʌstə(r)/', definition: 'Phim bom tấn công phá doanh thu phòng vé rạp chiếu.', translation: 'Siêu phẩm bom tấn rạp', example: 'Avatar is a legendary sci-fi blockbuster.', blankSentence: 'Queue up to buy tickets for the summer ____.', emoji: '🎬' },
      { id: 'c19-4', word: 'Talented', ipa: '/ˈtæləntɪd/', definition: 'Tài năng xuất chúng, bẩm sinh đã có năng lực đỉnh cao.', translation: 'Tài hoa, xuất chúng tài năng', example: 'The Vietnamese pianist is exceptionally talented.', blankSentence: 'Working with a ____ cast is an honor.', emoji: '🏅' },
      { id: 'c19-5', word: 'Charisma', ipa: '/kəˈrɪzmə/', definition: 'Sức hấp dẫn lôi cuốn tự nhiên đặc biệt truyền cảm xúc.', translation: 'Thần thái lôi cuốn nội tại', example: 'The singer\'s stage charisma is completely magnetic.', blankSentence: 'A great leader usually possesses natural ____.', emoji: '✨' }
    ],
    structures: [
      {
        phrase: "I'm a huge fan of...",
        meaning: "Diễn tả việc hâm mộ thần tượng cuồng nhiệt.",
        vietnamese: "Tôi là một người hâm mộ cuồng nhiệt của...",
        casual: "I'm a massive fan of V-pop, no cap."
      },
      {
        phrase: "His new work is a absolute masterpiece.",
        meaning: "Tán đương ngợi ca tác phẩm siêu phẩm bão táp đỉnh cao nghệ thuật.",
        vietnamese: "Tác phẩm mới của anh ấy là một kiệt tác thực sự.",
        casual: "The lead single from her album is an absolute banger."
      },
      {
        phrase: "What makes them so appealing?",
        meaning: "Hỏi han phân tích tố chất thành công gây bão của thần tượng.",
        vietnamese: "Điều gì tạo nên sức hút khó cưỡng ở họ vậy?",
        casual: "What's the magic trick behind their massive success?"
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Discussing a new trendy song',
        participants: [
          { name: 'Tram', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tram' },
          { name: 'Bao', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bao' }
        ],
        lines: [
          { participant: 'Tram', text: "Bao, have you heard the lead track from Son Tung's new music album?", translation: "Bảo ơi, bồ nghe ca khúc chủ đề trong đĩa nhạc album mới của Sơn Tùng chưa?" },
          { participant: 'Bao', text: "Oh yeah, I am a huge fan! His performance is absolutely talented and magnetic.", translation: "Ồ rồi chứ, tớ là fan bự của anh ấy luôn! Phong thái diễn xướng tài hoa lôi cuốn mãnh liệt." },
          { participant: 'Tram', text: "Exactly. The music composition is an absolute masterpiece. His stage charisma is unmatched.", translation: "Không sai lệch tí nào. Hòa âm phối khí kiệt tác đỉnh cao thực sự. Thần thái tỏa ra sân khấu hết nấc." },
          { participant: 'Bao', text: "I agree, he is not just a standard celebrity, he shapes the modern V-pop style!", translation: "Tớ đồng tình luôn, anh ấy không chỉ là ngôi sao giải trí phổ thông, anh ấy định hình phong cách V-pop thế hệ mới luôn!" }
        ]
      }
    ]
  },
  {
    id: 'lesson-20',
    title: 'Life Skills & Team Collaboration',
    vietnameseTitle: 'Kỹ năng sống & Làm việc nhóm',
    category: 'Communication',
    subCategory: ['Phổ biến'],
    icon: '🤝',
    color: '#06D6A0',
    description: 'Thuyết trình trước đám đông, phân công làm việc chung hiệu quả, phối hợp xử lý mâu thuẫn tranh cãi nhỏ.',
    words: [
      { id: 'c20-1', word: 'Teamwork', ipa: '/ˈtiːmwɜːk/', definition: 'Sự chung phối hợp sức nhịp nhàng giữa tập thể hướng tới đích.', translation: 'Sự phối hợp hoạt động nhóm', example: 'Success in group task heavily requires excellent teamwork.', blankSentence: 'Smooth ____ makes the heavy project lighter.', emoji: '👥' },
      { id: 'c20-2', word: 'Presentation', ipa: '/ˌpreznˈteɪʃn/', definition: 'Triển lãm, thuyết trình bày tỏ ý tưởng trước bục dõng dạc.', translation: 'Bài thuyết trình bày luận', example: 'Our mock startup presentation won the top price.', blankSentence: 'Make sure your slides for the ____ look clean.', emoji: '📊' },
      { id: 'c20-3', word: 'Handle', ipa: '/ˈhændl/', definition: 'Chịu trách nhiệm phân xử điều khiển thu dọn vấn đề gọn gàng.', translation: 'Xử lý, ứng phó tươm tất', example: 'Don\'t panic, we can handle this tricky conflict easily.', blankSentence: 'Learn how to ____ pressure before presentation.', emoji: '⚙️' },
      { id: 'c20-4', word: 'Conflict', ipa: '/ˈkɒnflɪkt/', definition: 'Sự va đập tranh cãi mâu thuẫn nảy lửa đôi bên.', translation: 'Trọng mâu thuẫn tranh cãi nội bộ', example: 'We should solve our design conflict with constructive arguments.', blankSentence: 'Avoid personal ____ in a work brainstorm room.', emoji: '⚡' },
      { id: 'c20-5', word: 'Resourceful', ipa: '/rɪˈsɔːsfl/', definition: 'Đầy mưu mẹo tháo vát xoay xở giải quyết tình huống khó.', translation: 'Đầy tháo vát nhạy bén', example: 'A resourceful student can research and find free mock tests.', blankSentence: 'With her ____ mind, we bypassed the server breakdown.', emoji: '💡' }
    ],
    structures: [
      {
        phrase: "Teamwork makes the dream work.",
        meaning: "Câu châm ngôn kinh điển đề xuất tinh thần tập thể gánh vác.",
        vietnamese: "Đồng lòng nhóm sẽ làm nên chiến tích mơ ước.",
        casual: "Let's back each other up, teamwork makes the dream work!"
      },
      {
        phrase: "How should we split our roles?",
        meaning: "Bàn tính việc phân bổ gác vai hoạt động.",
        vietnamese: "Chúng mình nên phân chia vai trò công việc như nào đây?",
        casual: "Alright, who is tackling the slides and who's talking?"
      },
      {
        phrase: "Let's resolve this issue peacefully.",
        meaning: "Định hướng xử hòa đàm luận giải tỏa căng quẩn bất đồng.",
        vietnamese: "Chúng ta hãy cùng giải quyết vấn đề này trong hòa bình nhé.",
        casual: "No use argue, let's cool down and talk track-by-track."
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Splitting group presentation tasks',
        participants: [
          { name: 'Khang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Khang' },
          { name: 'Trang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Trang' }
        ],
        lines: [
          { participant: 'Khang', text: "Trang, our final group presentation is next week. We need solid teamwork.", translation: "Trang ơi, tuần tới thuyết trình bài rồi đấy. Tụi mình phải phối hợp nhóm thật mượt nhen." },
          { participant: 'Trang', text: "Aggred. How should we split our roles? I can handle the slides draft.", translation: "Chuẩn rồi. Chúng mình nên chia năm xẻ việc như thế nào đây? Tớ cáng đáng khâu làm slide nháp nhé." },
          { participant: 'Khang', text: "Excellent, you are very resourceful with design. I will speak and handle questions.", translation: "Tuyệt vời, cậu tháo vát nhạy bén khoảng thiết kế lắm. Tớ lo phần nói và đứng ứng phó câu hỏi phụ." },
          { participant: 'Trang', text: "That is perfect! Group work is straightforward when everyone backs each other up.", translation: "Hợp ý hết tầm luôn! Làm việc nhóm cực phẳng phiu khi tụi mình bù trừ gánh vác lẫn nhau." }
        ]
      }
    ]
  }
];
