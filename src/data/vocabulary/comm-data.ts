import { Topic } from './types';
import { COMMON_LESSONS_DIALOGUES } from './comm-common-dialogues';
import { COMMON_LESSONS_STRUCTURES } from './comm-common-structures';

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
      { id: 'c1-1', word: 'Introduce', ipa: '/ˌɪntrəˈdjuːs/', definition: 'Tự trình bày danh tính với người khác.', translation: 'Giới thiệu', example: 'Allow me to introduce myself, my name is Huy.', blankSentence: 'I would like to ____ my best friend to the team.', emoji: '🗣️' },
      { id: 'c1-2', word: 'Hometown', ipa: '/ˈhəʊmtaʊn/', definition: 'Nơi sinh ra hoặc lớn lên của một người.', translation: 'Quê hương', example: 'Vinh is my peaceful hometown.', blankSentence: 'I often visit my peaceful ____ during Tet holiday.', emoji: '🏡' },
      { id: 'c1-3', word: 'Hobby', ipa: '/ˈhɒbi/', definition: 'Hoạt động giải trí yêu thích lúc rảnh rỗi.', translation: 'Sở thích', example: 'Playing soccer is my main hobby.', blankSentence: 'What is your favorite outdoor ____ on weekends?', emoji: '⚽' },
      { id: 'c1-4', word: 'Break the ice', ipa: '/breɪk ðiː aɪs/', definition: 'Bắt chuyện thân thiện để xóa tan e ngại ban đầu.', translation: 'Phá băng (làm quen)', example: 'A friendly joke was told to break the ice.', blankSentence: 'She shared a funny story to ____ during our first meeting.', emoji: '🧊' },
      { id: 'c1-5', word: 'Direct', ipa: '/daɪˈrekt/', definition: 'Thẳng thắn, không vòng vo.', translation: 'Thẳng thắn', example: 'Vietnamese youth prefer a direct approach.', blankSentence: 'Don\'t be shy, just be completely ____ with your feedback.', emoji: '🎯' }
    ],
    structures: COMMON_LESSONS_STRUCTURES['lesson-01'],
    dialogues: COMMON_LESSONS_DIALOGUES['lesson-01']
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
      { id: 'c2-1', word: 'Sibling', ipa: '/ˈsɪblɪŋ/', definition: 'Anh, chị, em ruột trong nhà.', translation: 'Anh chị em ruột', example: 'I have two siblings, an older sister and a brother.', blankSentence: 'Do you have any ____ in your family to play with?', emoji: '👥' },
      { id: 'c2-2', word: 'Supportive', ipa: '/səˈpɔːtɪv/', definition: 'Luôn ủng hộ, giúp đỡ người khác.', translation: 'Ủng hộ, nâng đỡ', example: 'My family is exceptionally supportive of my plans.', blankSentence: 'Having a truly ____ friend during tough times is a blessing.', emoji: '💖' },
      { id: 'c2-3', word: 'Trustworthy', ipa: '/ˈtrʌstˌwɜːði/', definition: 'Đáng tin cậy, có thể giữ bí mật.', translation: 'Đáng tin cậy', example: 'Bao is a trustworthy best friend of mine.', blankSentence: 'We only share our personal secrets with ____ people.', emoji: '🛡️' },
      { id: 'c2-4', word: 'Get along', ipa: '/ɡet əˈlɒŋ/', definition: 'Hòa thuận, có mối quan hệ tốt với ai.', translation: 'Hòa thuận', example: 'I get along very well with my classmates.', blankSentence: 'Do you ____ well with your younger brother at home?', emoji: '🤝' },
      { id: 'c2-5', word: 'Tight-knit', ipa: '/ˌtaɪt ˈnɪt/', definition: 'Gắn bó khăng khít, đoàn kết.', translation: 'Gắn bó khít khao', example: 'We belong to a tight-knit family.', blankSentence: 'Our study squad is a highly ____ circle of friends.', emoji: '🧶' }
    ],
    structures: COMMON_LESSONS_STRUCTURES['lesson-02'],
    dialogues: COMMON_LESSONS_DIALOGUES['lesson-02']
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
      { id: 'c3-1', word: 'Assignment', ipa: '/əˈsaɪnmənt/', definition: 'Bài tập được giao về nhà hoặc bài luận trường lớp.', translation: 'Bài tập lớn', example: 'We have a group assignment for English class.', blankSentence: 'Don\'t forget to submit your research ____ before Friday.', emoji: '📝' },
      { id: 'c3-2', word: 'Syllabus', ipa: '/ˈsɪləbəs/', definition: 'Đề cương chi tiết của môn học.', translation: 'Đề cương môn học', example: 'Check the syllabus to see the final test date.', blankSentence: 'The professor uploaded the new course ____ on the portal.', emoji: '📖' },
      { id: 'c3-3', word: 'Strict', ipa: '/strɪkt/', definition: 'Nghiêm khắc, kỉ luật cao.', translation: 'Nghiêm khắc', example: 'Our math teacher is quite strict but very kind.', blankSentence: 'The university maintains ____ rules regarding exam attendance.', emoji: '📏' },
      { id: 'c3-4', word: 'Ace', ipa: '/eɪs/', definition: 'Đạt điểm tuyệt đối hoặc hoàn thành xuất sắc bài kiểm tra.', translation: 'Đạt điểm đỉnh, điểm A', example: 'He managed to ace his science quiz.', blankSentence: 'Study diligently and you will easily ____ the chemistry test!', emoji: '💯' },
      { id: 'c3-5', word: 'Curriculum', ipa: '/kəˈrɪkjələm/', definition: 'Toàn bộ chương trình khung đào tạo.', translation: 'Chương trình giảng dạy', example: 'The high school curriculum includes sports.', blankSentence: 'A modern school requires a dynamic practical ____.', emoji: '🎯' }
    ],
    structures: COMMON_LESSONS_STRUCTURES['lesson-03'],
    dialogues: COMMON_LESSONS_DIALOGUES['lesson-03']
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
      { id: 'c4-1', word: 'Commute', ipa: '/kəˈmjuːt/', definition: 'Hành trình di chuyển đều đặn từ nhà đến nơi học/làm.', translation: 'Quá trình đi lại', example: 'My daily commute by bus takes 30 minutes.', blankSentence: 'How long does your morning ____ take during rush hour?', emoji: '🚌' },
      { id: 'c4-2', word: 'Productive', ipa: '/prəˈdʌktɪv/', definition: 'Làm việc năng suất, đạt nhiều thành tựu.', translation: 'Năng suất hiệu quả', example: 'I had a highly productive morning today.', blankSentence: 'Planning your schedule helps you stay ____ throughout the day.', emoji: '⚙️' },
      { id: 'c4-3', word: 'Unwind', ipa: '/ˌʌnˈwaɪnd/', definition: 'Trút bỏ căng thẳng, thư giãn thoải mái.', translation: 'Thả lỏng, xả stress', example: 'Watching cute dog videos helps me unwind.', blankSentence: 'How do you like to ____ after an intensive exam day?', emoji: '🛁' },
      { id: 'c4-4', word: 'Routine', ipa: '/ruːˈtiːn/', definition: 'Chuỗi thói quen lặp lại hàng ngày.', translation: 'Thói quen thường lệ', example: 'A healthy morning routine boosts energy.', blankSentence: 'Having a consistent evening ____ improves sleep quality.', emoji: '🔄' },
      { id: 'c4-5', word: 'Early bird', ipa: '/ˈɜːli bɜːd/', definition: 'Người thường có thói quen dậy rất sớm.', translation: 'Người dậy sớm (chim sớm)', example: 'My father is an early bird, he rises at 5 AM.', blankSentence: 'Are you an ____ or do you prefer staying up late?', emoji: '🌅' }
    ],
    structures: COMMON_LESSONS_STRUCTURES['lesson-04'],
    dialogues: COMMON_LESSONS_DIALOGUES['lesson-04']
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
      { id: 'c5-1', word: 'Binge-watch', ipa: '/ˈbɪndʒ wɔːtʃ/', definition: 'Xem liền tù tì nhiều tập phim cùng lúc.', translation: 'Cày phim liên tục', example: 'I decided to binge-watch a Korean drama last night.', blankSentence: 'Do you want to ____ this new mystery series with me?', emoji: '🍿' },
      { id: 'c5-2', word: 'Leisure', ipa: '/ˈleʒə(r)/', definition: 'Thời gian rỗi không phải làm việc hay đi học.', translation: 'Thời gian nhàn rỗi', example: 'He spends his leisure time baking cakes.', blankSentence: 'Most people value their ____ moments after a grueling week.', emoji: '🧸' },
      { id: 'c5-3', word: 'Addicted', ipa: '/əˈdɪktɪd/', definition: 'Bị mê mẩn hoặc nghiện một hoạt động lành mạnh/không lành mạnh.', translation: 'Bị nghiện, mê mệt', example: 'Vietnamese teenagers are addicted to TikTok.', blankSentence: 'I am completely ____ to this new tactical video game.', emoji: '📲' },
      { id: 'c5-4', word: 'Outdoors', ipa: '/ˌaʊtˈdɔːz/', definition: 'Không gian ngoài trời tuyệt vời.', translation: 'Hoạt động dã ngoại ngoài trời', example: 'Let\'s go outdoors for some clean fresh air.', blankSentence: 'He is athletic and prefers spending weekends ____.', emoji: '🏕️' },
      { id: 'c5-5', word: 'Niche', ipa: '/niːʃ/', definition: 'Phân khúc sở thích độc lạ ít người theo đuổi.', translation: 'Thị trường/sở thích ngách', example: 'Collecting mechanical clocks is a niche hobby.', blankSentence: 'Finding your own ____ interest makes free time exciting.', emoji: '🎯' }
    ],
    structures: COMMON_LESSONS_STRUCTURES['lesson-05'],
    dialogues: COMMON_LESSONS_DIALOGUES['lesson-05']
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
      { id: 'c6-1', word: 'Street food', ipa: '/striːt fuːd/', definition: 'Đồ ăn được bán trực tiếp trên lề đường hè phố.', translation: 'Món ăn đường phố', example: 'Hanoi street food is worldwide famous.', blankSentence: 'Let\'s try some cheap and tasty ____ near the old market.', emoji: '🍢' },
      { id: 'c6-2', word: 'Broth', ipa: '/brɒθ/', definition: 'Phần nước súp dùng ninh từ xương thịt siêu ngọt.', translation: 'Nước dùng phở', example: 'The Pho broth was cooked for 10 hours.', blankSentence: 'You will enjoy the savory bone ____ seasoned with cinnamon.', emoji: '🥣' },
      { id: 'c6-3', word: 'Ingredient', ipa: '/ɪnˈɡriːdiənt/', definition: 'Thành phần nguyên liệu chế biến món ăn.', translation: 'Nguyên liệu thực phẩm', example: 'Lemongrass is a vital ingredient in Bun bo Hue.', blankSentence: 'Fresh aromatic ____ is the true secret of Vietnamese cooking.', emoji: '🥬' },
      { id: 'c6-4', word: 'Specialty', ipa: '/ˈspeʃəlti/', definition: 'Đặc sản của một vùng miền địa phương.', translation: 'Món đặc sản', example: 'Com Tam is a legendary specialty of Saigon.', blankSentence: 'Try our regional ____ whenever you visit Da Nang.', emoji: '🍱' },
      { id: 'c6-5', word: 'Authentic', ipa: '/ɔːˈθentɪk/', definition: 'Chuẩn vị nguyên gốc bản sắc.', translation: 'Nguyên bản chuẩn vị', example: 'This small store serves authentic Hanoi Pho.', blankSentence: 'I am searching for an ____ bowl of bun cha.', emoji: '⭐' }
    ],
    structures: COMMON_LESSONS_STRUCTURES['lesson-06'],
    dialogues: COMMON_LESSONS_DIALOGUES['lesson-06']
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
      { id: 'c7-1', word: 'Budget', ipa: '/ˈbʌdʒɪt/', definition: 'Khoản quỹ ví tiền giới hạn dự chi.', translation: 'Ngân sách giới hạn', example: 'I bought this phone with a tight budget.', blankSentence: 'Make sure this purchase stays within your monthly ____.', emoji: '👛' },
      { id: 'c7-2', word: 'Bargain', ipa: '/ˈbɑːɡən/', definition: 'Món đồ có hời lớn hoặc giao dịch thương lượng giá hời.', translation: 'Món hời lớn', example: 'At only fifty thousand Dong, this shirt is a real bargain.', blankSentence: 'She loves hunting for a nice ____ at the flea market.', emoji: '🏷️' },
      { id: 'c7-3', word: 'Price tag', ipa: '/ˈpraɪs tæɡ/', definition: 'Nhãn mác dán chỉ thị giá tiền món hàng.', translation: 'Mác ghi giá', example: 'I look at the price tag before choosing items.', blankSentence: 'Check the ____ before taking items to the cashier.', emoji: '🏷️' },
      { id: 'c7-4', word: 'Overpriced', ipa: '/ˌəʊvəˈpraɪst/', definition: 'Mức định giá đắt đỏ, quá mức thực tế.', translation: 'Đắt một cách lố bịch', example: 'Drinks at airport can be highly overpriced.', blankSentence: 'I think that tourist boutique is heavily ____.', emoji: '💸' },
      { id: 'c7-5', word: 'Receipt', ipa: '/rɪˈsiːt/', definition: 'Tờ hóa đơn xác minh thanh toán giao dịch.', translation: 'Tờ hóa đơn', example: 'Keep your receipt for a warranty repair.', blankSentence: 'Please keep your printed ____ in case you need an exchange.', emoji: '🧾' }
    ],
    structures: COMMON_LESSONS_STRUCTURES['lesson-07'],
    dialogues: COMMON_LESSONS_DIALOGUES['lesson-07']
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
      { id: 'c8-1', word: 'Schedule', ipa: '/ˈʃedjuːl/', definition: 'Bản phân chia lịch trình các hoạt động dự tính.', translation: 'Lịch trình dự kiến', example: 'I need to check my study schedule.', blankSentence: 'My weekly academic ____ is completely packed with exams.', emoji: '📅' },
      { id: 'c8-2', word: 'Deadline', ipa: '/ˈdedlaɪn/', definition: 'Thời mốc giới hạn bắt buộc hoàn tất nhiệm vụ.', translation: 'Hạn chót công việc', example: 'The absolute deadline for the essay is midnight.', blankSentence: 'We cannot afford to miss this presentation ____.', emoji: '⏳' },
      { id: 'c8-3', word: 'Appointment', ipa: '/əˈpɔɪntmənt/', definition: 'Cuộc gặp khứa được đặt hẹn dặn trước lịch.', translation: 'Lịch hẹn trước', example: 'I have a dentist appointment at 3 PM today.', blankSentence: 'I secured an advisory ____ with my academic counselor.', emoji: '🦷' },
      { id: 'c8-4', word: 'Prioritize', ipa: '/praɪˈɒrətaɪz/', definition: 'Đưa các việc cấp bách lên xử lí ưu tiên bậc nhất.', translation: 'Ưu tiên tầm quan trọng', example: 'You must prioritize core tasks before gaming.', blankSentence: 'Learn how to ____ urgent homework before leisure time.', emoji: '🎯' },
      { id: 'c8-5', word: 'Postpone', ipa: '/pəʊˈspəʊn/', definition: 'Hoãn trì hoãn dịch chuyển lịch lui về sau.', translation: 'Trì hoãn, hoãn lịch', example: 'We decided to postpone our soccer match due to rain.', blankSentence: 'Could we ____ our group discussion until tomorrow afternoon?', emoji: '↩️' }
    ],
    structures: COMMON_LESSONS_STRUCTURES['lesson-08'],
    dialogues: COMMON_LESSONS_DIALOGUES['lesson-08']
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
      { id: 'c9-1', word: 'Landmark', ipa: '/ˈlændmɑːk/', definition: 'Tòa nhà biểu tượng dễ nhận diện trên đường phố.', translation: 'Điểm mốc nhận diện', example: 'The Opera House is a huge historic landmark.', blankSentence: 'Look for the tall bell tower ____ next to the river.', emoji: '🏛️' },
      { id: 'c9-2', word: 'Intersection', ipa: '/ˌɪntəˈsekʃn/', definition: 'Ngã tư, giao điểm giao lộ các ngả đường.', translation: 'Ngã tư giao lộ', example: 'Turn left at the busy traffic intersection.', blankSentence: 'Be cautious when crossing this four-way traffic ____.', emoji: '🚦' },
      { id: 'c9-3', word: 'Direct', ipa: '/daɪˈrekt/', definition: 'Chỉ lối dẫn đường cho ai đó tận tình.', translation: 'Hướng dẫn lối đi', example: 'Can you direct me to the nearest bus stop?', blankSentence: 'Could someone kindly ____ me toward the central museum?', emoji: '👉' },
      { id: 'c9-4', word: 'Shortest', ipa: '/ˈʃɔːtɪst/', definition: 'Quãng đường tối ưu ngắn nhất.', translation: 'Ngắn nhất', example: 'Google Maps showed us the shortest way home.', blankSentence: 'What is the ____ walking route to the train terminal?', emoji: '🏁' },
      { id: 'c9-5', word: 'Destination', ipa: '/ˌdestɪˈneɪʃn/', definition: 'Điểm đích cuối cùng cần tìm đặt chân đến.', translation: 'Điểm đích đến', example: 'We finally reached our beach destination.', blankSentence: 'Your final ____ will be visible right after the roundabout.', emoji: '🏖️' }
    ],
    structures: COMMON_LESSONS_STRUCTURES['lesson-09'],
    dialogues: COMMON_LESSONS_DIALOGUES['lesson-09']
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
      { id: 'c10-1', word: 'Connection', ipa: '/kəˈnekʃn/', definition: 'Sự liên kết mạng internet kết nối.', translation: 'Kết nối mạng', example: 'We have a weak Wifi connection in this café.', blankSentence: 'Restart the modem to establish a faster internet ____.', emoji: '🌐' },
      { id: 'c10-2', word: 'Mute', ipa: '/mjuːt/', definition: 'Tắt phần tiếng phát âm thanh micro.', translation: 'Tắt tiếng (im lặng)', example: 'Please mute yourself during the slideshow.', blankSentence: 'Unmute your mic, you are currently on ____!', emoji: '🔇' },
      { id: 'c10-3', word: 'Shoot', ipa: '/ʃuːt/', definition: 'Hành động nhanh chóng gửi một tin nhắn.', translation: 'Gửi nhanh (tin nhắn)', example: 'I will shoot you an email right away.', blankSentence: 'Please ____ me a quick message once you arrive home.', emoji: '✉️' },
      { id: 'c10-4', word: 'Break up', ipa: '/breɪk ʌp/', definition: 'Âm thanh đàm thoại bị đứt đoạn, bập bõm không rõ nghe.', translation: 'Sóng yếu nghe bập bõm', example: 'Your voice is starting to break up on my side.', blankSentence: 'The mobile reception is terrible, your words keep ____.', emoji: '📶' },
      { id: 'c10-5', word: 'Notification', ipa: '/ˌnəʊtɪfɪˈkeɪʃn/', definition: 'Thông báo đẩy thiết bị điện tử khi có tin mới.', translation: 'Chuông thông báo', example: 'Turn off notification sounds to focus better.', blankSentence: 'I received an urgent push ____ from our learning app.', emoji: '🔔' }
    ],
    structures: COMMON_LESSONS_STRUCTURES['lesson-10'],
    dialogues: COMMON_LESSONS_DIALOGUES['lesson-10']
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
      { id: 'c11-1', word: 'Headache', ipa: '/ˈhedeɪk/', definition: 'Cơn đau râm ran trong vùng đầu khó chịu.', translation: 'Đau đầu bứt rứt', example: 'Too much screen time gives me a bad headache.', blankSentence: 'Drink warm water if you experience a splitting ____.', emoji: '🤯' },
      { id: 'c11-2', word: 'Symptom', ipa: '/ˈsɪmptəm/', definition: 'Chứng điềm chỉ báo của trạng thái sức khỏe cơ thể.', translation: 'Triệu chứng bệnh lý', example: 'Fever is a standard symptom of flu.', blankSentence: 'Sneezing and coughing are the most common cold ____.', emoji: '🌡️' },
      { id: 'c11-3', word: 'Exhausted', ipa: '/ɪɡˈzɔːstɪd/', definition: 'Kiệt quệ mệt mỏi rã rời hết sạch năng lượng.', translation: 'Kiệt sức rã rời', example: 'I felt totally exhausted after pulling an all-nighter.', blankSentence: 'Take a long nap; you look completely ____ today.', emoji: '😫' },
      { id: 'c11-4', word: 'Recover', ipa: '/rɪˈkʌvə(r)/', definition: 'Khôi phục hồi sức khỏe trở lại bình thường lành lặn.', translation: 'Hồi phục bình phục', example: 'It took him a week to recover from the bad cough.', blankSentence: 'Eating nutritious soup will help you ____ much faster.', emoji: '🍀' },
      { id: 'c11-5', word: 'Anxious', ipa: '/ˈæŋkʃəs/', definition: 'Cảm xúc bất an bồn chồn lo sợ vu vơ.', translation: 'Lo âu phấp phỏng', example: 'She felt highly anxious before the stage performance.', blankSentence: 'Try taking deep breaths whenever you feel ____.', emoji: '🥺' }
    ],
    structures: COMMON_LESSONS_STRUCTURES['lesson-11'],
    dialogues: COMMON_LESSONS_DIALOGUES['lesson-11']
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
      { id: 'c12-1', word: 'Ambition', ipa: '/æmˈbɪʃn/', definition: 'Khát vọng, hoài bão lớn lao của đời người.', translation: 'Hoài bão, ước mơ lớn', example: 'His main ambition is to build an AI software.', blankSentence: 'Cultivate your youthful ____ and never give up your vision.', emoji: '🚀' },
      { id: 'c12-2', word: 'Profession', ipa: '/prəˈfeʃn/', definition: 'Công việc đòi hỏi kiến thức chuyên môn nghề nghiệp bài bản.', translation: 'Lĩnh vực nghề nghiệp chuyên sâu', example: 'Teaching is a highly respected profession.', blankSentence: 'Choose a dedicated ____ that aligns with your passions.', emoji: '💼' },
      { id: 'c12-3', word: 'Major', ipa: '/ˈmeɪdʒə(r)/', definition: 'Ngành học chuyên môn chính quy tại bậc Đại học.', translation: 'Ngành học chuyên môn chính', example: 'My university major is computer science.', blankSentence: 'What academic ____ do you plan to select for university?', emoji: '🎓' },
      { id: 'c12-4', word: 'Pursue', ipa: '/pəˈsjuː/', definition: 'Theo đuổi tận cùng mục tiêu mong muốn.', translation: 'Theo đuổi bền bỉ', example: 'They decided to pursue their dream career in arts.', blankSentence: 'Are you determined to ____ a master\'s degree abroad?', emoji: '🎯' },
      { id: 'c12-5', word: 'Guidance', ipa: '/ˈɡaɪdns/', definition: 'Sự định hướng dẫn lối chỉ bảo từ chuyên gia đi trước.', translation: 'Sự định hướng dìu dắt', example: 'With the right guidance from teachers, we succeeded.', blankSentence: 'Seeking professional career ____ is wise before graduation.', emoji: '🗺️' }
    ],
    structures: COMMON_LESSONS_STRUCTURES['lesson-12'],
    dialogues: COMMON_LESSONS_DIALOGUES['lesson-12']
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
      { id: 'c13-1', word: 'Reunion', ipa: '/ˌriːˈjuːniən/', definition: 'Dịp đoàn tụ, sum họp các thành viên gia đình sau năm dài.', translation: 'Đoàn sum họp sum vầy', example: 'Tet is the ultimate time for family reunion.', blankSentence: 'Tet holiday is celebrated as a cherished family ____.', emoji: '👨‍👩‍👧‍👦' },
      { id: 'c13-2', word: 'Decoration', ipa: '/ˌdekəˈreɪʃn/', definition: 'Những đồ vật xinh xắn bày hoàng điểm tô không gian.', translation: 'Vật phẩm trang hoàng trang trí', example: 'Peach blossoms are popular holiday decorations.', blankSentence: 'We put up vibrant red paper ____ across our living room.', emoji: '🏮' },
      { id: 'c13-3', word: 'Custom', ipa: '/ˈkʌstəm/', definition: 'Phong tục tập quán duy trì lưu truyền lâu đời.', translation: 'Phong tục thói quen lâu đời', example: 'Giving lucky money is a heartwarming Vietnamese custom.', blankSentence: 'Visiting grandparents on New Year\'s Day is an ancient ____.', emoji: '⛩️' },
      { id: 'c13-4', word: 'Prosperity', ipa: '/prɒˈsperəti/', definition: 'Sự vinh hoa, phú quý tài lộc phát vượng dồi dào.', translation: 'Sự phồn thịnh tài lộc', example: 'Red color symbolizes luck and endless prosperity.', blankSentence: 'I wish your family good health and boundless ____ this year.', emoji: '🧧' },
      { id: 'c13-5', word: 'Gather', ipa: '/ˈɡæðə(r)/', definition: 'Tập hợp, hội tụ mọi người đứng chung vui vầy.', translation: 'Tụ họp sum vầy', example: 'We gather in the kitchen to wrap Banh Chung.', blankSentence: 'All relatives ____ around the banquet table to celebrate.', emoji: '🤝' }
    ],
    structures: COMMON_LESSONS_STRUCTURES['lesson-13'],
    dialogues: COMMON_LESSONS_DIALOGUES['lesson-13']
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
      { id: 'c14-1', word: 'Scenery', ipa: '/ˈsiːnəri/', definition: 'Cảnh quan non nước bao la tuyệt trần của thiên nhiên.', translation: 'Thắng cảnh kỳ vĩ thiên nhiên', example: 'The mountain scenery in Ha Giang is breathtaking.', blankSentence: 'Pause the car to admire the stunning mountain ____.', emoji: '⛰️' },
      { id: 'c14-2', word: 'Hospitality', ipa: '/ˌhɒspɪˈtæləti/', definition: 'Sự mến khách nồng hậu hiếu hỉ của lòng người.', translation: 'Lòng mến khách nhiệt thành', example: 'Vietnamese locals are famous worldwide for their warm hospitality.', blankSentence: 'Foreign tourists love our villagers for their genuine ____.', emoji: '🤗' },
      { id: 'c14-3', word: 'Itinerary', ipa: '/aɪˈtɪnərəri/', definition: 'Bản lộ trình ghi chi tiết các điểm ghé chân du lịch.', translation: 'Lịch trình du hí di chuyển', example: 'We have a detailed itinerary for our 3-day Da Lat trip.', blankSentence: 'Let\'s finalize our four-day vacation ____ before booking tickets.', emoji: '🗺️' },
      { id: 'c14-4', word: 'Breathtaking', ipa: '/ˈbreθteɪkɪŋ/', definition: 'Đẹp đến mức làm nghẹt thở sững sờ.', translation: 'Cảnh sắc lung linh sững sờ', example: 'The sunrise over Ha Long Bay was absolutely breathtaking.', blankSentence: 'The mountain pass offers a ____ panoramic view of the valley.', emoji: '🌅' },
      { id: 'c14-5', word: 'Souvenir', ipa: '/ˌsuːvəˈnɪə(r)/', definition: 'Đồ lưu niệm làm quà kỷ niệm chuyến đi xa.', translation: 'Món quà lưu niệm kỷ niệm', example: 'I bought some cute conical hats as souvenirs.', blankSentence: 'I bought a handwoven silk scarf as a travel ____.', emoji: '🎁' }
    ],
    structures: COMMON_LESSONS_STRUCTURES['lesson-14'],
    dialogues: COMMON_LESSONS_DIALOGUES['lesson-14']
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
      { id: 'c15-1', word: 'Recycle', ipa: '/ˌriːˈsaɪkl/', definition: 'Tái chế rác thải giấy, nhựa cũ thành đồ hữu ích mới.', translation: 'Tái chế sử dụng lại', example: 'We should recycle single-use plastic bottles.', blankSentence: 'Learn how to sort empty cans so we can ____ them properly.', emoji: '♻️' },
      { id: 'c15-2', word: 'Pollution', ipa: '/pəˈluːʃn/', definition: 'Trạng thái suy thoái ô nhiễm môi trường tự nhiên.', translation: 'Nạn ô nhiễm môi trường', example: 'Air pollution is a pressing health concern in big cities.', blankSentence: 'Excessive plastic waste causes severe marine ____.', emoji: '🏭' },
      { id: 'c15-3', word: 'Voluntary', ipa: '/ˈvɒləntri/', definition: 'Hành động thiện nguyện, tự nguyện không vụ lợi.', translation: 'Hoạt động tự nguyện tình nguyện', example: 'She joined the voluntary park cleaning squad.', blankSentence: 'Our youth club participates in ____ tree planting drives.', emoji: '🤝' },
      { id: 'c15-4', word: 'Conserve', ipa: '/kənˈsɜːv/', definition: 'Bảo tồn năng lượng, bảo toàn tài nguyên bền vững.', translation: 'Bảo tồn năng lượng sinh thái', example: 'Conserve clean fresh water at home.', blankSentence: 'Turn off unnecessary lights to ____ electricity and resources.', emoji: '💧' },
      { id: 'c15-5', word: 'Organic', ipa: '/ɔːˈɡænɪk/', definition: 'Đồ hữu cơ tự nhiên sạch không dính hóa chất.', translation: 'Sản vật hữu cơ tự nhiên sạch', example: 'Buying organic vegetables promotes sustainable farming.', blankSentence: 'We choose ____ biodegradable containers instead of plastic.', emoji: '🍎' }
    ],
    structures: COMMON_LESSONS_STRUCTURES['lesson-15'],
    dialogues: COMMON_LESSONS_DIALOGUES['lesson-15']
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
      { id: 'c16-1', word: 'Grateful', ipa: '/ˈɡreɪtfl/', definition: 'Tấm lòng nhớ ơn, vô cùng trân quý lòng tốt.', translation: 'Vô cùng biết ơn', example: 'I am incredibly grateful for your math coaching.', blankSentence: 'I am extremely ____ for your unwavering mentorship and support.', emoji: '💖' },
      { id: 'c16-2', word: 'Apologize', ipa: '/əˈpɒlədʒaɪz/', definition: 'Chân thành thốt lời xin lỗi vì lỗi lầm gây nên.', translation: 'Ngỏ lời xin lỗi nhận sai', example: 'I sincerely apologize for pushing the wrong button.', blankSentence: 'I wish to ____ sincerely for the unexpected delay in my reply.', emoji: '🥺' },
      { id: 'c16-3', word: 'Misunderstanding', ipa: '/ˌmɪsʌndəˈstændɪŋ/', definition: 'Sự hiểu lầm lệch nhịp giữa các cá nhân.', translation: 'Hiểu nhầm cản trở giao tiếp', example: 'It was a simple misunderstanding about the schedule.', blankSentence: 'Clear communication resolves any minor ____ between teammates.', emoji: '🤷' },
      { id: 'c16-4', word: 'Forgive', ipa: '/fəˈɡɪv/', definition: 'Bao dung tha thứ bỏ quá cho lỗi lầm.', translation: 'Tha thứ lượng thứ', example: 'Please forgive me for forgetting your birthday party.', blankSentence: 'She was gracious enough to ____ my thoughtless mistake.', emoji: '🤝' },
      { id: 'c16-5', word: 'Polite', ipa: '/pəˈlaɪt/', definition: 'Văn minh lễ phép, đối xử rất mực nho nhã.', translation: 'Lịch sự lễ phép nề nếp', example: 'Saying please and thank you is basic polite behavior.', blankSentence: 'Maintaining a ____ tone makes every conversation pleasant.', emoji: '🧑‍💼' }
    ],
    structures: COMMON_LESSONS_STRUCTURES['lesson-16'],
    dialogues: COMMON_LESSONS_DIALOGUES['lesson-16']
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
      { id: 'c17-1', word: 'Perspective', ipa: '/pəˈspektɪv/', definition: 'Tầm nhìn nhãn quang, góc quan điểm cá nhân.', translation: 'Quan điểm góc nhìn riêng', example: 'Travelling opens up a completely modern perspective.', blankSentence: 'From my personal ____, practical skills outweigh pure theory.', emoji: '👁️' },
      { id: 'c17-2', word: 'Disagree', ipa: '/ˌdɪsəˈɡriː/', definition: 'Bất đồng, không đồng nhất ý kiến.', translation: 'Bất đồng ý kiến', example: 'I respect your view, but I highly disagree with this choice.', blankSentence: 'We can respectfully ____ and still remain close friends.', emoji: '🙅' },
      { id: 'c17-3', word: 'Convincing', ipa: '/kənˈvɪnsɪŋ/', definition: 'Tính thuyết phục mạnh mẽ rành rọt thấu lý.', translation: 'Đầy tính thấu lí thuyết phục', example: 'Her presentation displayed very convincing evidence.', blankSentence: 'He presented a remarkably ____ case supported by data.', emoji: '📈' },
      { id: 'c17-4', word: 'Argument', ipa: '/ˈɑːɡjumənt/', definition: 'Lập luận đưa luận điểm bảo vệ ý kiến.', translation: 'Luận điểm bảo vệ ý kiến', example: 'Bao built a strong logical argument for the project.', blankSentence: 'A well-reasoned ____ is more persuasive than loud voices.', emoji: '🗣️' },
      { id: 'c17-5', word: 'Compromise', ipa: '/ˈkɒmprəmaɪz/', definition: 'Giải pháp thỏa hiệp dung hòa đôi bên cùng vui.', translation: 'Điểm thỏa hiệp chung đôi bên', example: 'After debating for an hour, we reached a compromise.', blankSentence: 'Both parties agreed to make a reasonable ____.', emoji: '🤝' }
    ],
    structures: COMMON_LESSONS_STRUCTURES['lesson-17'],
    dialogues: COMMON_LESSONS_DIALOGUES['lesson-17']
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
      { id: 'c18-1', word: 'Nostalgic', ipa: '/nɒˈstældʒɪk/', definition: 'Cảm giác bồi hồi, hoài niệm khôn nguôi về quá khứ.', translation: 'Hoài niệm bồi hồi dạt dào', example: 'Listening to old video game music makes me highly nostalgic.', blankSentence: 'Flipping through our old middle-school album makes me feel ____.', emoji: '🥺' },
      { id: 'c18-2', word: 'Memory', ipa: '/ˈmeməri/', definition: 'Gói ký ức, vùng lưu giữ kỉ niệm thuở xưa.', translation: 'Vùng kí ức ngọt ngào', example: 'Eating Grandma\'s cookies is a sweet memory of mine.', blankSentence: 'Camping by the lake remains my most cherished childhood ____.', emoji: '🎞️' },
      { id: 'c18-3', word: 'Remind', ipa: '/rɪˈmaɪnd/', definition: 'Đập xúc cảm nhắc nhở nhớ về bóng dáng sự việc cũ.', translation: 'Gợi tưởng gợi nhớ về', example: 'This delicious smell of soup reminds me of my village home.', blankSentence: 'The melody of this folk song will always ____ me of home.', emoji: '💭' },
      { id: 'c18-4', word: 'Childhood', ipa: '/ˈtʃaɪldhʊd/', definition: 'Khoảng thời niên thiếu ấu thơ vô tư lự.', translation: 'Kỷ nguyên niên thiếu ấu thơ', example: 'Bao and I shared a fun childhood in Hue.', blankSentence: 'My carefree ____ days were spent roaming outdoors with friends.', emoji: '👦' },
      { id: 'c18-5', word: 'Unforgettable', ipa: '/ˌʌnfəˈɡetəbl/', definition: 'Kỷ niệm khắc cốt ghi tâm không thể nào quên.', translation: 'Mãi khắc ghi không bao giờ quên', example: 'The class camping night was an unforgettable experience.', blankSentence: 'Our high school graduation night was an ____ milestone.', emoji: '⭐' }
    ],
    structures: COMMON_LESSONS_STRUCTURES['lesson-18'],
    dialogues: COMMON_LESSONS_DIALOGUES['lesson-18']
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
      { id: 'c19-1', word: 'Celebrity', ipa: '/səˈlebrəti/', definition: 'Người nổi tiếng lừng danh trong nền văn hóa giải trí đại chúng.', translation: 'Ngôi sao giải trí, danh nhân', example: 'A huge crowd gathered at the airport to meet the celebrity.', blankSentence: 'A world-famous ____ was interviewed live on the talk show.', emoji: '🕺' },
      { id: 'c19-2', word: 'Album', ipa: '/ˈælbəm/', definition: 'Tập hợp các bài hát thu tuyển đĩa nhạc phát hành.', translation: 'Album tuyển tập nhạc', example: 'His debut album broke all streaming records.', blankSentence: 'Every single track on her newly released studio ____ is a hit.', emoji: '💽' },
      { id: 'c19-3', word: 'Blockbuster', ipa: '/ˈblɒkbʌstə(r)/', definition: 'Phim bom tấn công phá doanh thu phòng vé rạp chiếu.', translation: 'Siêu phẩm bom tấn rạp', example: 'Avatar is a legendary sci-fi blockbuster.', blankSentence: 'The summer sci-fi ____ sold out every cinema auditorium.', emoji: '🎬' },
      { id: 'c19-4', word: 'Talented', ipa: '/ˈtæləntɪd/', definition: 'Tài năng xuất chúng, bẩm sinh đã có năng lực đỉnh cao.', translation: 'Tài hoa, xuất chúng tài năng', example: 'The Vietnamese pianist is exceptionally talented.', blankSentence: 'She is an extraordinarily ____ musician who writes her own lyrics.', emoji: '🏅' },
      { id: 'c19-5', word: 'Charisma', ipa: '/kəˈrɪzmə/', definition: 'Sức hấp dẫn lôi cuốn tự nhiên đặc biệt truyền cảm xúc.', translation: 'Thần thái lôi cuốn nội tại', example: 'The singer\'s stage charisma is completely magnetic.', blankSentence: 'The lead actor commands magnetic ____ that hypnotizes audiences.', emoji: '✨' }
    ],
    structures: COMMON_LESSONS_STRUCTURES['lesson-19'],
    dialogues: COMMON_LESSONS_DIALOGUES['lesson-19']
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
      { id: 'c20-1', word: 'Teamwork', ipa: '/ˈtiːmwɜːk/', definition: 'Sự chung phối hợp sức nhịp nhàng giữa tập thể hướng tới đích.', translation: 'Sự phối hợp hoạt động nhóm', example: 'Success in group task heavily requires excellent teamwork.', blankSentence: 'Harmonious ____ transforms an overwhelming project into easy tasks.', emoji: '👥' },
      { id: 'c20-2', word: 'Presentation', ipa: '/ˌpreznˈteɪʃn/', definition: 'Triển lãm, thuyết trình bày tỏ ý tưởng trước bục dõng dạc.', translation: 'Bài thuyết trình bày luận', example: 'Our mock startup presentation won the top price.', blankSentence: 'Practice delivering your slide ____ with poise and confidence.', emoji: '📊' },
      { id: 'c20-3', word: 'Handle', ipa: '/ˈhændl/', definition: 'Chịu trách nhiệm phân xử điều khiển thu dọn vấn đề gọn gàng.', translation: 'Xử lý, ứng phó tươm tất', example: 'Don\'t panic, we can handle this tricky conflict easily.', blankSentence: 'A good leader knows how to ____ unexpected crises calmly.', emoji: '⚙️' },
      { id: 'c20-4', word: 'Conflict', ipa: '/ˈkɒnflɪkt/', definition: 'Sự va đập tranh cãi mâu thuẫn nảy lửa đôi bên.', translation: 'Mâu thuẫn tranh cãi nội bộ', example: 'We should solve our design conflict with constructive arguments.', blankSentence: 'Listen actively to resolve any interpersonal ____ peacefully.', emoji: '⚡' },
      { id: 'c20-5', word: 'Resourceful', ipa: '/rɪˈsɔːsfl/', definition: 'Đầy mưu mẹo tháo vát xoay xở giải quyết tình huống khó.', translation: 'Đầy tháo vát nhạy bén', example: 'A resourceful student can research and find free mock tests.', blankSentence: 'Our project coordinator is incredibly ____ in solving technical hurdles.', emoji: '💡' }
    ],
    structures: COMMON_LESSONS_STRUCTURES['lesson-20'],
    dialogues: COMMON_LESSONS_DIALOGUES['lesson-20']
  }
];
