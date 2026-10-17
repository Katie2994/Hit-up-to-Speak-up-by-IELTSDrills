import { Topic } from './types';
import { STUDENTS_DIALOGUES } from './comm-students-dialogues';
import { STUDENTS_STRUCTURES } from './comm-students-structures';

const rawStudents: Topic[] = [
  {
    id: 'student-01',
    title: 'School Introduction & Orientation',
    vietnameseTitle: 'Làm quen & Giới thiệu bản thân',
    category: 'Communication',
    subCategory: ['For Students'],
    icon: '🤝',
    color: '#FF6B6B',
    description: 'Giới thiệu tên, tuổi, lớp/khoa, ngành học, quê quán; lý do chọn trường/ngành trong ngày định hướng hoặc lớp học mới.',
    words: [
      { id: 'st1-1', word: 'Major', ipa: '/ˈmeɪdʒə(r)/', definition: 'Ngành học chuyên môn chính tại Đại học.', translation: 'Chuyên ngành học', example: 'My major is computer science and engineering.', blankSentence: 'What are you planning to ____ in?', emoji: '🎓' },
      { id: 'st1-2', word: 'Freshman', ipa: '/ˈfreʃmən/', definition: 'Sinh viên năm nhất mới nhập học.', translation: 'Tân sinh viên', example: 'The freshmen are eager to explore the spacious campus.', blankSentence: 'As a ____, everything seems so new to me.', emoji: '🎒' },
      { id: 'st1-3', word: 'Orientation', ipa: '/ˌɔːriənˈteɪʃn/', definition: 'Buổi hướng dẫn, định hướng định vị cho sinh viên mới.', translation: 'Buổi định hướng', example: 'The school orientation will take place in the main hall.', blankSentence: 'Make sure not to miss the freshers\' ____.', emoji: '🗺️' },
      { id: 'st1-4', word: 'Enroll', ipa: '/ɪnˈrəʊl/', definition: 'Đăng ký nhập học chính thức một lớp hoặc một khóa.', translation: 'Đăng ký, ghi danh', example: 'I decided to enroll in the advanced English class.', blankSentence: 'Where should we go to ____ for this semester?', emoji: '📝' },
      { id: 'st1-5', word: 'Hometown', ipa: '/ˈhəʊmtaʊn/', definition: 'Quê quán, nơi sinh ra hoặc lớn lên của một người.', translation: 'Quê quán', example: 'Da Nang is my coastal hometown.', blankSentence: 'I always talk proudly about my peaceful ____.', emoji: '🏡' }
    ],
    structures: [
      {
        phrase: "I'm majoring in...",
        meaning: "Giới thiệu chuyên ngành học chính của mình.",
        vietnamese: "Mình đang học chuyên ngành...",
        casual: "I'm majoring in business administration."
      },
      {
        phrase: "The reason I chose this school is...",
        meaning: "Giải thích động lực, lý do chọn trường lớp.",
        vietnamese: "Lý do mình chọn ngôi trường này là...",
        casual: "The main reason I picked this school is its amazing lab facilities."
      },
      {
        phrase: "Nice to meet you all, let's cooperate well!",
        meaning: "Lời chào xã giao trong buổi gặp gỡ đầu tiên tiện bắt tay.",
        vietnamese: "Rất vui được gặp mọi người, cùng hợp tác tốt nhé!",
        casual: "Stoked to be working with you all, let's ace this term!"
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Meeting during the orientation',
        participants: [
          { name: 'Lan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lan' },
          { name: 'Minh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Minh' }
        ],
        lines: [
          { participant: 'Lan', text: "Hey! Let me introduce myself. I'm Lan, a freshman in class IT-02.", translation: "Chào cậu! Cho mình tự giới thiệu nhé. Mình là Lan, tân sinh viên lớp IT-02." },
          { participant: 'Minh', text: "Oh, hi Lan! I'm Minh. I'm majoring in software design too. Nice to meet you in person!", translation: "Ồ, chào Lan! Mình là Minh. Mình cũng đang theo học chuyên ngành thiết kế phần mềm. Rất vui được gặp trực tiếp bạn!" },
          { participant: 'Lan', text: "Awesome! The reason I chose this school is the modern practical lab. What about you?", translation: "Tuyệt quá! Lý do tớ chọn trường này là vì phòng thí nghiệm thực hành hiện đại. Còn cậu thì sao?" },
          { participant: 'Minh', text: "Same here. Since this orientation is to help us break the ice, let's explore together!", translation: "Tớ cũng thế. Tiện dịp định hướng giúp tụi mình làm quen luôn, tụi mình cùng đi khám phá nhé!" }
        ]
      }
    ]
  },
  {
    id: 'student-02',
    title: 'Family, Mentor & Classmates',
    vietnameseTitle: 'Gia đình, Người hướng dẫn & Bạn cùng lớp',
    category: 'Communication',
    subCategory: ['For Students'],
    icon: '👨‍👩‍👧‍👦',
    color: '#4ECDC4',
    description: 'Từ các mối quan hệ gia đình cơ bản đến các quan hệ học đường nâng cao: bạn cùng phòng ký túc xá, bạn cùng nhóm, thầy cô cố vấn và giảng viên hướng dẫn (mentor).',
    words: [
      { id: 'st2-1', word: 'Roommate', ipa: '/ˈruːmmeɪt/', definition: 'Người bạn ở chung một phòng trong ký túc xá hoặc nhà thuê.', translation: 'Bạn cùng phòng', example: 'My roommate is incredibly tidy.', blankSentence: 'Having a supportive ____ makes dorm life easier.', emoji: '🛏️' },
      { id: 'st2-2', word: 'Advisor', ipa: '/ədˈvaɪzə(r)/', definition: 'Giáo viên hoặc chuyên gia chỉ dẫn học thuật.', translation: 'Cố vấn học tập', example: 'I scheduled a meeting with my academic advisor today.', blankSentence: 'Make sure your ____ signs this credit form.', emoji: '👨‍💼' },
      { id: 'st2-3', word: 'Mentor', ipa: '/ˈmentɔː(r)/', definition: 'Người đi trước giàu kinh nghiệm dẫn dắt, dạy bảo.', translation: 'Người hướng dẫn', example: 'Our mentor guided us patiently through the research stage.', blankSentence: 'She acted as an inspiring career ____.', emoji: '🧠' },
      { id: 'st2-4', word: 'Teammate', ipa: '/ˈtiːmmeɪt/', definition: 'Thành viên cùng nhóm gánh vác mục tiêu chung.', translation: 'Bạn cùng nhóm, đồng đội', example: 'I need to coordinate with my teammates before the submission.', blankSentence: 'Ask your ____ to upload their slides.', emoji: '🤝' },
      { id: 'st2-5', word: 'Guardian', ipa: '/ˈɡɑːdiən/', definition: 'Người đại diện pháp lý bảo hộ, chăm nom trẻ.', translation: 'Người giám hộ, cha mẹ', example: 'The teacher shared the course progress with my guardian.', blankSentence: 'Please get your ____\'s signature here.', emoji: '👪' }
    ],
    structures: [
      {
        phrase: "My roommate is exceptionally supportive.",
        meaning: "Nói lời biết ơn sự nâng đỡ từ người bạn cùng phòng.",
        vietnamese: "Bạn cùng phòng của tôi cực kỳ hỗ trợ tôi.",
        casual: "My roomie is a lifesaver, she always helps me out."
      },
      {
        phrase: "Who is your assigned academic advisor?",
        meaning: "Hỏi han thăm dò danh tính giáo viên cố vấn học tập.",
        vietnamese: "Cố vấn học tập được phân công của bạn là ai?",
        casual: "Who's your go-to advisor for picking credits?"
      },
      {
        phrase: "Our mentor gave us detailed feedback on...",
        meaning: "Báo cáo lời khuyên từ quản lý hoặc chuyên gia hướng dẫn.",
        vietnamese: "Người hướng dẫn đã cho chúng tôi phản hồi chi tiết về...",
        casual: "Our mentor really grilled us on our code structure."
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Discussing support systems',
        participants: [
          { name: 'Kien', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kien' },
          { name: 'John', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John' }
        ],
        lines: [
          { participant: 'Kien', text: "John, do you get along well with your new roommate in the dormitory?", translation: "John ơi, cậu có hòa thuận với bạn cùng phòng mới ở ký túc xá không?" },
          { participant: 'John', text: "Yes! My roommate is exceptionally supportive, she always has my back.", translation: "Có chứ! Bạn cùng phòng của tớ cực kỳ hỗ trợ, cô ấy luôn giúp đỡ tớ hết mình." },
          { participant: 'Kien', text: "That is amazing. Who is your assigned academic advisor for this semester?", translation: "Tuyệt thật đó nha. Mà ai là cố vấn học tập kỳ này của cậu thế?" },
          { participant: 'John', text: "I have Professor Smith. But our research mentor is the one who gives indeed detailed feedback.", translation: "Tớ được phân công gặp giáo sư Smith. Nhưng thầy hướng dẫn nghiên cứu mới là người cho phản hồi siêu chi tiết." }
        ]
      }
    ]
  },
  {
    id: 'student-03',
    title: 'School, Classrooms & Campus Facilities',
    vietnameseTitle: 'Lớp học, Trường học & Cơ sở vật chất',
    category: 'Communication',
    subCategory: ['For Students'],
    icon: '🏫',
    color: '#FFD166',
    description: 'Nói về lớp học, thư viện, phòng thí nghiệm, ký túc xá, căn tin trường; mô tả cảm nhận và tuân thủ nội quy chung.',
    words: [
      { id: 'st3-1', word: 'Laboratory', ipa: '/ˈlæbrətɔːri/', definition: 'Phòng thực hành trang bị công cụ thí nghiệm khoa học.', translation: 'Phòng thí nghiệm', example: 'We must wear protective coats in chemistry laboratory.', blankSentence: 'Let\'s head to the biology ____.', emoji: '🧪' },
      { id: 'st3-2', word: 'Dormitory', ipa: '/ˈdɔːmətɔːri/', definition: 'Khu ký túc xá nội trú sinh viên.', translation: 'Ký túc xá', example: 'Living in dormitory helps save rent money.', blankSentence: 'The global students stay in the Western ____.', emoji: '🏢' },
      { id: 'st3-3', word: 'Cafeteria', ipa: '/ˌkæfəˈtɪəriə/', definition: 'Căn-tin, nhà ăn bách hóa của trường học.', translation: 'Nhà ăn, căn-tin', example: 'The campus cafeteria serves affordable Vietnamese meals.', blankSentence: 'Shall we meet at the ____ for lunch?', emoji: '🍲' },
      { id: 'st3-4', word: 'Facility', ipa: '/fəˈsɪləti/', definition: 'Hệ thống cơ sở vật chất trang thiết bị hữu ích.', translation: 'Cơ sở vật chất', example: 'Our football field has top-tier lighting facilities.', blankSentence: 'The sports center is a great ____.', emoji: '🏟️' },
      { id: 'st3-5', word: 'Campus', ipa: '/ˈkæmpəs/', definition: 'Toàn bộ khuôn viên bao quanh tòa nhà trường học.', translation: 'Khuôn viên trường', example: 'The campus is filled with beautiful green trees.', blankSentence: 'I lost my keys walking around the school ____.', emoji: '🌳' }
    ],
    structures: [
      {
        phrase: "Where can I find the biology laboratory?",
        meaning: "Hỏi han thăm dò vị trí các phòng hỗ trợ thực hành.",
        vietnamese: "Mình có thể tìm phòng thí nghiệm sinh học ở đâu thế?",
        casual: "Where's the biology lab located?"
      },
      {
        phrase: "The cafeteria is always crowded during lunch hour.",
        meaning: "Nhận xét mật độ học sinh tại căn tin vào giờ cao điểm.",
        vietnamese: "Căn-tin luôn chật kín người trong giờ ăn trưa.",
        casual: "Dorm dining is packed at noon, let's grab takeout."
      },
      {
        phrase: "Is there an ATM on campus?",
        meaning: "Hỏi thăm tiện ích rút tiền trong khuôn viên trường.",
        vietnamese: "Trong khuôn viên trường có cây ATM nào không?",
        casual: "Any cash machines on campus?"
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Exploring campus layout',
        participants: [
          { name: 'Vy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vy' },
          { name: 'John', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John' }
        ],
        lines: [
          { participant: 'Vy', text: "Excuse me, John, I am looking for the chemistry laboratory. Do you know where it is?", translation: "Xin lỗi John nha, tớ đang tìm phòng thí nghiệm Hóa học. Cậu biết ở đâu không?" },
          { participant: 'John', text: "Ah! It is on the east side of the campus, close to the dormitory area.", translation: "À! Nó ở phía đông của khuôn viên trường, sát gần khu ký túc xá đó." },
          { participant: 'Vy', text: "Perfect. And is the school cafeteria any close? I want to grab a quick snack.", translation: "Tuyệt quá. Mà căn-tin trường có gần đó không? Tớ muốn mua đồ ăn vặt xíu." },
          { participant: 'John', text: "Yes! But the cafeteria is always packed during lunch hour. Better run fast!", translation: "Có nha! Cơ mà căn-tin luôn chật kín người vào giờ ăn trưa. Chạy nhanh lên nha bồ!" }
        ]
      }
    ]
  },
  {
    id: 'student-04',
    title: 'School Supplies & Learning Resources',
    vietnameseTitle: 'Đồ dùng & Tài nguyên học tập',
    category: 'Communication',
    subCategory: ['For Students'],
    icon: '🖍️',
    color: '#A594F9',
    description: 'Đồ dùng học tập từ bút vẽ, sách truyện (lớp nhỏ) đến laptop, giáo trình nghiên cứu, dữ liệu học tập online và hỏi mượn, xin photo tài liệu.',
    words: [
      { id: 'st4-1', word: 'Textbook', ipa: '/ˈtekstbʊk/', definition: 'Sách giáo khoa, giáo trình tiêu chuẩn chính thức cho môn học.', translation: 'Sách giáo khoa', example: 'We must purchase the physics textbook before next session.', blankSentence: 'Can I share your ____ for today\'s lecture?', emoji: '📘' },
      { id: 'st4-2', word: 'Stationery', ipa: '/ˈsteɪʃənri/', definition: 'Đồ dùng văn phòng phẩm học tập như bút, tẩy, vở vẽ.', translation: 'Văn phòng phẩm', example: 'The school store sells cheap stationery items.', blankSentence: 'I need to restock my ____ kit.', emoji: '✏️' },
      { id: 'st4-3', word: 'Database', ipa: '/ˈdeɪtəbeɪs/', definition: 'Cơ sở dữ liệu điện tử lưu trữ và tìm tài liệu báo học khoa học.', translation: 'Cơ sở dữ liệu điện tử', example: 'Check the academic database for verified references.', blankSentence: 'The library guide explains how to search the ____.', emoji: '💻' },
      { id: 'st4-4', word: 'Photocopy', ipa: '/ˈfəʊtəʊkɒpi/', definition: 'Tài liệu sao chép nhân bản từ bản gốc.', translation: 'Phô-tô tài liệu, bản sao', example: 'I will photocopy this syllabus for our study circle.', blankSentence: 'Could you make a ____ of this chapter for me?', emoji: '🖨️' },
      { id: 'st4-5', word: 'Crayon', ipa: '/ˈkreɪən/', definition: 'Bút màu sáp chuyên dùng để vẽ tập tô của học sinh nhỏ.', translation: 'Bút sáp màu', example: 'The kids are drawing a landscape with red crayons.', blankSentence: 'Pass me the golden ____, please.', emoji: '🖍️' }
    ],
    structures: [
      {
        phrase: "Could I photocopy your chemistry notes?",
        meaning: "Đề xuất mượn vở để đem đi nhân bản photo học cùng.",
        vietnamese: "Mình mang tập ghi chép Hóa của bạn đi phô-tô được không?",
        casual: "Mind if I run and copy your chem notes?"
      },
      {
        phrase: "I usually download papers from the online database.",
        meaning: "Chia sẻ thói quen tra cứu bài báo từ thư viện số trực tuyến.",
        vietnamese: "Tớ hay tải các bài báo nghiên cứu từ cơ sở dữ liệu trực tuyến.",
        casual: "I just surf the school catalog to grab PDF resources."
      },
      {
        phrase: "Do you have a spare pen I could borrow?",
        meaning: "Hỏi mượn một cây bút sơ cua phòng hờ.",
        vietnamese: "Bạn có cây bút thừa nào để mình mượn tạm không?",
        casual: "Gimme a spare pen, left mine in the room."
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Borrowing study resources',
        participants: [
          { name: 'Phuong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Phuong' },
          { name: 'Nam', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nam' }
        ],
        lines: [
          { participant: 'Phuong', text: "Hey Nam, do you have a spare pen I could borrow? Mine just ran out of ink.", translation: "Nam ơi, có chiếc bút sáp màu hay bút thừa nào cho mình mượn với? Bút mình vừa hết mực rồi." },
          { participant: 'Nam', text: "Sure! Here is a spare ballpoint pen from my stationery case.", translation: "Có chứ! Đây nè, sẵn cây bút bi sơ cua trong hộp bút văn phòng phẩm của tớ." },
          { participant: 'Phuong', text: "You are a lifesaver. Also, could I photocopy your textbook chapter for the assignment?", translation: "Cậu cứu tinh đời tớ rồi. Tiện thể, tớ đem cuốn sách giáo khoa của cậu đi phô-tô một chương làm bài nhé?" },
          { participant: 'Nam', text: "No problem at all! Actually, you should also check our university's online database for fresh data.", translation: "Không vấn đề gì luôn! Thật ra bồ nên vào tra cứu cơ sở dữ liệu trực tuyến của trường mình để hốt thêm dữ liệu mới nha." }
        ]
      }
    ]
  },
  {
    id: 'student-05',
    title: 'Timetables & Study Schedules',
    vietnameseTitle: 'Thời gian biểu & Quản lý việc học',
    category: 'Communication',
    subCategory: ['For Students'],
    icon: '📅',
    color: '#FF9F1C',
    description: 'Mô tả thời khóa biểu, lịch thi, lịch học thêm; cách phân phối các nhiệm vụ, bài tập nhóm tránh trễ deadline.',
    words: [
      { id: 'st5-1', word: 'Timetable', ipa: '/ˈtaɪmteɪbl/', definition: 'Thời khóa biểu chi tiết hàng tuần.', translation: 'Thời khóa biểu', example: 'Let\'s match our timetables to organize a group session.', blankSentence: 'My chemistry class got added to the ____.', emoji: '📅' },
      { id: 'st5-2', word: 'Deadline', ipa: '/ˈdedlaɪn/', definition: 'Hạn cuối bắt buộc hoàn thành nhiệm vụ được giao.', translation: 'Hại chót, hạn nộp', example: 'The final submission deadline is Sunday midnight.', blankSentence: 'I have to push hard to meet this ____.', emoji: '⏳' },
      { id: 'st5-3', word: 'Prioritize', ipa: '/praɪˈɒrətaɪz/', definition: 'Xếp đặt tầm quan trọng ưu tiên việc cấp bách trước.', translation: 'Ưu tiên hóa công việc', example: 'We must prioritize core lectures before doing volunteer jobs.', blankSentence: 'How do you ____ your weekly tasks?', emoji: '🎯' },
      { id: 'st5-4', word: 'Revision', ipa: '/rɪˈvɪʒn/', definition: 'Quá trình xem lại và ôn tập các kiến thức cũ.', translation: 'Ôn tập, ôn thi', example: 'Effective revision schedules prevent late night cramming.', blankSentence: 'Start your ____ at least two weeks before the test.', emoji: '📖' },
      { id: 'st5-5', word: 'Session', ipa: '/ˈseʃn/', definition: 'Khoảng thời gian cử hành một hoạt động, một buổi gặp.', translation: 'Buổi học, phiên làm việc', example: 'She held a long brainstorming session yesterday.', blankSentence: 'Can we book a study ____ tomorrow?', emoji: '⏰' }
    ],
    structures: [
      {
        phrase: "My schedule is completely packed this semester.",
        meaning: "Cách phàn nàn thời gian biểu cá nhân kín mít.",
        vietnamese: "Lịch trình kỳ này của tôi bận kín mít rồi.",
        casual: "I have literally zero breathing room on my schedule."
      },
      {
        phrase: "We need to prioritize this assignment.",
        meaning: "Khẳng định cần ưu tiên xử lý bài tập lớn gấp bách.",
        vietnamese: "Chúng ta cần phải ưu tiên làm bài tập lớn này trước.",
        casual: "Let's put this essay on top of our pile."
      },
      {
        phrase: "Are you free for a study session tomorrow?",
        meaning: "Mời gọi người khác tới tham gia một buổi tự học cùng nhau.",
        vietnamese: "Ngày mai bạn có rảnh tham gia một buổi học nhóm không?",
        casual: "Down for a sprint study session tomorrow morning?"
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Discussing midterms planning',
        participants: [
          { name: 'Duc', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Duc' },
          { name: 'Bao', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bao' }
        ],
        lines: [
          { participant: 'Duc', text: "Bao, looking at our school timetable, we have exams approaching. Let's make a plan.", translation: "Bảo ơi, nhìn thời khóa biểu thì thấy thi cử sắp tới mông rồi. Tụ tập thảo kế hoạch đi." },
          { participant: 'Bao', text: "I agree. My schedule is completely packed this semester, but we must prioritize revision.", translation: "Đồng ý dã man. Lịch kỳ này của tớ bận kín kịt luôn á, nhưng rỡ ràng phải ưu tiên ôn tập thôi." },
          { participant: 'Duc', text: "Are you free for a group study session tomorrow afternoon at the library?", translation: "Thế chiều mai bồ có rảnh làm một buổi tự học cày đề ở thư viện không?" },
          { participant: 'Bao', text: "Saturday works! We should aim to complete the English assignment before the deadline.", translation: "Thứ Bảy chuẩn đét nè! Chúng mình nên cố hạ xong bài tập Tiếng Anh trước hạn chót luôn." }
        ]
      }
    ]
  },
  {
    id: 'student-06',
    title: 'Classroom Interactions: Speaking Up',
    vietnameseTitle: 'Hoạt động trên lớp & Phát biểu ý kiến',
    category: 'Communication',
    subCategory: ['For Students'],
    icon: '🙋‍♂️',
    color: '#06D6A0',
    description: 'Cách giơ tay phát biểu, nhờ thầy giải thích lại bài, đặt câu hỏi tranh biện, xin phép ra ngoài, đến muộn và diễn đạt sự băn khoăn.',
    words: [
      { id: 'st6-1', word: 'Clarify', ipa: '/ˈklærəfaɪ/', definition: 'Giải thích làm cho mọi thứ dễ hiểu, sáng tỏ hơn.', translation: 'Làm rõ, giải thích lại', example: 'Could you clarify the grading criteria once more?', blankSentence: 'The professor was asked to ____ his formula.', emoji: '🔍' },
      { id: 'st6-2', word: 'Permission', ipa: '/pəˈmɪʃn/', definition: 'Sự cho phép cử hành một ý định cá nhân.', translation: 'Sự xin phép, cho phép', example: 'You must secure permission before entering the room late.', blankSentence: 'Ask for ____ to step outside.', emoji: '🔑' },
      { id: 'st6-3', word: 'Participate', ipa: '/pɑːˈtɪsɪpeɪt/', definition: 'Tích cực tham dự vào buổi học và phát biểu ý kiến.', translation: 'Tham gia, phát biểu', example: 'Active students love to participate in debates.', blankSentence: 'We encourage everyone to ____.', emoji: '🙋‍♀️' },
      { id: 'st6-4', word: 'Volunteer', ipa: '/ˌvɒlənˈtɪə(r)/', definition: 'Tự nguyện giơ tay nhận làm mẫu hoặc trả lời trước.', translation: 'Xung phong, tình nguyện', example: 'She chose to volunteer for the challenging reading test.', blankSentence: 'Who wants to ____ to answer?', emoji: '✋' },
      { id: 'st6-5', word: 'Explain', ipa: '/ɪkˈspleɪn/', definition: 'Mô tả cặn kẽ để người khác nắm bắt ý tứ thông tin.', translation: 'Cắt nghĩa, giảng bài', example: 'I will explain the hard puzzle again so no one gets lost.', blankSentence: 'Could you ____ that step?', emoji: '🗣️' }
    ],
    structures: [
      {
        phrase: "Could you kindly clarify that last point?",
        meaning: "Thỉnh cầu lịch sự nhờ thầy giải thích rõ luận điểm cuối.",
        vietnamese: "Thầy/Cô có thể vui lòng làm rõ ý cuối cùng được không ạ?",
        casual: "Sorry, I didn't quite catch that last step. Could you recap?"
      },
      {
        phrase: "May I be excused for a moment?",
        meaning: "Lời xin phép lịch sự xin được phép ra ngoài vài phút.",
        vietnamese: "Em xin phép được ra ngoài một lát có được không ạ?",
        casual: "Mind if I slip out for a quick bathroom break?"
      },
      {
        phrase: "I'd like to ask a follow-up question.",
        meaning: "Đề xuất đặt câu hỏi phụ tiếp nối câu chuyện đang diễn thuyết.",
        vietnamese: "Em có câu hỏi phụ tiếp nối muốn được hỏi thêm ạ.",
        casual: "Quick question on top of what you just said."
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Asking teacher for clarification',
        participants: [
          { name: 'Khuyen', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Khuyen' },
          { name: 'Teacher', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Teacher', role: 'Instructor' }
        ],
        lines: [
          { participant: 'Khuyen', text: "Excuse me, teacher. Could you kindly clarify that last point on the homework formula?", translation: "Dạ thưa thầy. Thầy có thể vui lòng giảng rõ lại công thức của bài tập về nhà được không ạ?" },
          { participant: 'Teacher', text: "Certainly, Khuyen. I will explain the variables again on the board. Always participate when you feel lost!", translation: "Chắc chắn rồi Khuyên. Để thầy cắt nghĩa từng biến số lại trên bảng. Nhớ tích cực giơ tay hỏi khi chưa hiểu nhé!" },
          { participant: 'Khuyen', text: "Thank you. Also, may I be excused for a moment? I need to wash my hands.", translation: "Em cảm ơn thầy ạ. Tiện thể, em xin phép được ra ngoài một lát có được không ạ?" },
          { participant: 'Teacher', text: "Of course! Hurry back so you don't miss the next exercise.", translation: "Được chứ! Nhớ về lẹ để không lỡ bài tập thực hành tiếp theo nhé." }
        ]
      }
    ]
  },
  {
    id: 'student-07',
    title: 'Homework, Quizzes & Examinations',
    vietnameseTitle: 'Bài tập về nhà, Kiểm tra & Thi cử',
    category: 'Communication',
    subCategory: ['For Students'],
    icon: '📝',
    color: '#FF6B6B',
    description: 'Bàn bạc thời hạn nộp bài, cách thức nộp qua hệ thống học, trao đổi mẹo ôn bài và chia sẻ kết quả cao.',
    words: [
      { id: 'st7-1', word: 'Assignment', ipa: '/əˈsaɪnmənt/', definition: 'Bài tập lớn yêu cầu nộp chấm điểm chính thức.', translation: 'Bài tập được giao nộp', example: 'We have a huge geography assignment due on Monday.', blankSentence: 'Have you finished your group ____?', emoji: '✍️' },
      { id: 'st7-2', word: 'Quiz', ipa: '/kwɪz/', definition: 'Bài trắc nghiệm ngắn lượng giá nhanh độ tiếp thu.', translation: 'Bài kiểm tra ngắn', example: 'The teacher surprised us with a pop quiz on physics.', blankSentence: 'Review your vocabulary notes before the ____.', emoji: '❓' },
      { id: 'st7-3', word: 'Syllabus', ipa: '/ˈsɪləbəs/', definition: 'Đề cương của toàn bộ khóa học chỉ dẫn lịch kiểm tra.', translation: 'Đề cương học tập', example: 'Look at the syllabus to see the midterm distribution.', blankSentence: 'Does the ____ contain details about scoring?', emoji: '📖' },
      { id: 'st7-4', word: 'Ace', ipa: '/eɪs/', definition: 'Hoàn thành xuất sắc vượt mong đợi bài thi.', translation: 'Đạt điểm tối đa, điểm tuyệt đối', example: 'I hope I can ace this chemistry exam.', blankSentence: 'Study hard and you will ____ it!', emoji: '💯' },
      { id: 'st7-5', word: 'Score', ipa: '/skɔː(r)/', definition: 'Điểm số chính thức sau khi chấm bài.', translation: 'Điểm số bài thi', example: 'They posted the final test scores online.', blankSentence: 'What was your overall average ____?', emoji: '📊' }
    ],
    structures: [
      {
        phrase: "When is this assignment due?",
        meaning: "Câu hỏi vàng hỏi hạn nộp bài tập về nhà.",
        vietnamese: "Khi nào bài tập này đến hạn nộp vậy?",
        casual: "What's the cutoff date for this draft?"
      },
      {
        phrase: "I got a pretty high score on...",
        meaning: "Khoe nhẹ điểm thi xuất sắc của mình.",
        vietnamese: "Tớ đạt điểm khá cao trong bài kiểm tra...",
        casual: "I totally crushed the math session, got an A!"
      },
      {
        phrase: "Let's review the mock quiz questions together.",
        meaning: "Mời bạn lập đội cày đề kiểm tra thử chung.",
        vietnamese: "Chúng mình cùng duyệt lại các câu hỏi thi thử nhé.",
        casual: "Let's run through these sample test papers together."
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Discussing english class results',
        participants: [
          { name: 'Khang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Khang' },
          { name: 'Vy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vy' }
        ],
        lines: [
          { participant: 'Khang', text: "Vy, did you look up the syllabus? When is our next English assignment due?", translation: "Vy ơi, bồ xem đề cương môn chưa? Khi nào bài tập Tiếng Anh tiếp theo tới hạn nộp thế?" },
          { participant: 'Vy', text: "It's due on Friday! But don't stress, we can review the homework together.", translation: "Thứ Sáu này nộp đó bồ! Mà đừng có lo quá, tụi mình cùng nhau ngồi làm và duyệt bài là ổn." },
          { participant: 'Khang', text: "Excellent. I managed to ace the previous quiz, so I want to keep the momentum going.", translation: "Tuyệt đỉnh. Hôm nọ tớ ăn trọn điểm tối đa bài trắc nghiệm ngắn nên tớ muốn giữ phom phong độ này." },
          { participant: 'Vy', text: "Let's do that! Let's get high scores in the final test too.", translation: "Quất luôn bồ! Quyết tâm ẵm điểm số cao vút cho cả kỳ thi cuối kỳ luôn nhé." }
        ]
      }
    ]
  },
  {
    id: 'student-08',
    title: 'Group Projects & Collaboration',
    vietnameseTitle: 'Làm việc nhóm & Dự án học tập',
    category: 'Communication',
    subCategory: ['For Students'],
    icon: '👥',
    color: '#219EBC',
    description: 'Từ vựng cách phân công vai trò, đóng góp ý tưởng sáng tạo, theo sát tiến độ và giải quyết mâu thuẫn ý kiến nhỏ khi học nhóm.',
    words: [
      { id: 'st8-1', word: 'Collaborate', ipa: '/kəˈlæbəreɪt/', definition: 'Hợp tác chặt chẽ cùng nhau cùng đạt thành tựu.', translation: 'Hợp tác làm việc chung', example: 'We should collaborate with other classmates to finish early.', blankSentence: 'Let\'s ____ on this graphic poster project.', emoji: '🤝' },
      { id: 'st8-2', word: 'Brainstorm', ipa: '/ˈbreɪnstɔːm/', definition: 'Động não, thảo luận tự do nghĩ ra nhiều giải pháp.', translation: 'Động não vắt óc suy nghĩ', example: 'Our team sat down to brainstorm topic names.', blankSentence: 'We need to ____ some creative concepts.', emoji: '⚡' },
      { id: 'st8-3', word: 'Division', ipa: '/dɪˈvɪʒn/', definition: 'Sự phân chia định vị phần việc của mỗi người.', translation: 'Sự phân công công việc', example: 'A clear division of labor keeps the team efficient.', blankSentence: 'Let\'s decide on the task ____.', emoji: '🎛️' },
      { id: 'st8-4', word: 'Conflict', ipa: '/ˈkɒnflɪkt/', definition: 'Sự xung đột mâu thuẫn bất hòa ý kiến.', translation: 'Sự xung đột bất đồng', example: 'Open dialogue resolves any group conflict quickly.', blankSentence: 'Avoid personal ____ during professional tasks.', emoji: '⚡' },
      { id: 'st8-5', word: 'Feedback', ipa: '/ˈfiːdbæk/', definition: 'Ý kiến đóng góp tinh thần xây dựng sửa đổi.', translation: 'Phản hồi, nhận xét đóng góp', example: 'Please send your feedback on the first draft of slide.', blankSentence: 'I really appreciate your constructve ____.', emoji: '🗣️' }
    ],
    structures: [
      {
        phrase: "Let's divide the tasks equally among everyone.",
        meaning: "Đề xuất phân công chia đều nhiệm vụ công bằng.",
        vietnamese: "Chúng ta chia đều phần việc cho mọi người nhé.",
        casual: "Let's split the labor fifty-fifty so everyone has a chunk."
      },
      {
        phrase: "We need a brainstorming session to clear the mess.",
        meaning: "Yêu cầu vắt óc thảo luận nhóm đột phá.",
        vietnamese: "Chúng ta cần một buổi thảo luận động não để gỡ rối.",
        casual: "Let's get in a room and toss some ideas around."
      },
      {
        phrase: "Don't take criticism personally; it's just for the thesis grade.",
        meaning: "Lời khuyên nhủ hãy tôn trọng nhận xét để nâng cao chất lượng bài viết.",
        vietnamese: "Đừng coi những nhận xét là chỉ trích cá nhân nhé; chỉ vì điểm thôi.",
        casual: "No offence, but we need to trim this section down."
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Forming a group team',
        participants: [
          { name: 'Truc', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Truc' },
          { name: 'Kien', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kien' }
        ],
        lines: [
          { participant: 'Truc', text: "Kien! Let's collaborate for our marketing slides. We must brainstorm unique ideas.", translation: "Kiên ơi! Tụi mình bắt tay hợp tác làm slide tiếp thị đi. Cần nghĩ ra ý tưởng gì đó thật độc lạ." },
          { participant: 'Kien', text: "I'm down. Let's make a fair division of work. I can carry the design part.", translation: "Hợp lý luôn bồ. Phải phân chia phần việc rõ ràng ra nhen. Tớ lo phần thiết kế cho." },
          { participant: 'Truc', text: "Excellent. How do we solve any creative conflict if one of us disagrees?", translation: "Tuyệt vời. Mà nhỡ bất đồng ý kiến đột xuất thì làm sao gỡ bồ?" },
          { participant: 'Kien', text: "We just vote and give constructive feedback. Let's schedule a Zoom call tomorrow!", translation: "Thì biểu quyết rồi góp ý giúp nhau sửa đổi thui. Mai lên Zoom vắt óc thảo luận nha!" }
        ]
      }
    ]
  },
  {
    id: 'student-09',
    title: 'Presentations & Academic Reports',
    vietnameseTitle: 'Thuyết trình & Báo cáo học thuật',
    category: 'Communication',
    subCategory: ['For Students'],
    icon: '📊',
    color: '#8ECAE6',
    description: 'Chuẩn bị dàn bài, thiết kế slide, trình bày tự tin thuyết phục trước thầy cô, cách chuyển ý mượt và trả lời câu hỏi phản biện.',
    words: [
      { id: 'st9-1', word: 'Present', ipa: '/prɪˈzent/', definition: 'Tự tin trình diễn các thông tin ý kiến trước khán thính giả.', translation: 'Thuyết trình, trình bày', example: 'We will present our findings to the university council.', blankSentence: 'Are you ready to ____ your school slides?', emoji: '🧑‍🏫' },
      { id: 'st9-2', word: 'Outline', ipa: '/ˈaʊtlaɪn/', definition: 'Kết cấu dàn ý khái quát của cuộc hội thảo.', translation: 'Dàn ý tổng quát', example: 'The outline of our presentation has three parts.', blankSentence: 'Draft an ____ before building the slides.', emoji: '📝' },
      { id: 'st9-3', word: 'Visual aid', ipa: '/ˈvɪʒuəl eɪd/', definition: 'Công cụ thị giác minh họa sinh động thông tin (tranh ảnh, biểu bảng).', translation: 'Phương tiện hỗ trợ hình ảnh', example: 'Charts and videos are helpful visual aids.', blankSentence: 'Use extra ____ to engage the student audience.', emoji: '📈' },
      { id: 'st9-4', word: 'Slide', ipa: '/slaɪd/', definition: 'Mỗi trang nội dung trình chiếu phần mềm trợ giảng.', translation: 'Slide trình chiếu', example: 'I will refine the layout of our introduction slide.', blankSentence: 'Can you toggle to the next ____, please?', emoji: '💻' },
      { id: 'st9-5', word: 'Conclusion', ipa: '/kənˈkluːʒn/', definition: 'Lời kết luận tổng kết lại các tinh túy báo cáo.', translation: 'Lời kết luận', example: 'Bring your talk to a swift and impactful conclusion.', blankSentence: 'In ____, I urge you to save trees.', emoji: '🏁' }
    ],
    structures: [
      {
        phrase: "Today, we'd like to share our findings on...",
        meaning: "Câu mở đầu thuyết trình cực kỳ thông thạo và trôi chảy.",
        vietnamese: "Hôm nay, chúng tôi mạn phép chia sẻ các kết quả nghiên cứu về...",
        casual: "Hey guys, our group is going to look into..."
      },
      {
        phrase: "Moving on to the next slide, we see...",
        meaning: "Chuyển ý mượt mà đưa sự chú ý khán giả sang trang sau.",
        vietnamese: "Chuyển sang trang tiếp theo, chúng ta nhìn thấy...",
        casual: "Alright, flipping over to the next slide here."
      },
      {
        phrase: "To wrap up our presentation, the main takeaway is...",
        meaning: "Lời kết luận tóm gọn lấy ý tưởng mấu chốt.",
        vietnamese: "Đúc kết bài thuyết trình, bài học cốt lõi rút ra là...",
        casual: "So, the big picture here basically is..."
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Rehearsing the presentation',
        participants: [
          { name: 'Lan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lan' },
          { name: 'David', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David' }
        ],
        lines: [
          { participant: 'Lan', text: "David, are you ready to present our environment slides today?", translation: "David ơi, sẵn sòng ra sân thuyết trình bộ slide môi trường của tụi mình chưa?" },
          { participant: 'David', text: "Almost! I am checking our outline and visual aids right now. The charts look neat.", translation: "Hầu như xong rồi! Tớ đang dò lại dàn bài và các phương tiện hỗ trợ hình ảnh. Mấy cái biểu đồ nhìn mướt mát lắm." },
          { participant: 'Lan', text: "Perfect. When moving on to the next slide, you should handle the statistics.", translation: "Chuẩn bài. Khi quẹt chuyển sang trang slide tiếp theo, bồ phụ trách đọc mấy cái thống kê giùm tớ nha." },
          { participant: 'David', text: "Got it! Then I will lead the talk to an impactful conclusion to hook the class.", translation: "Đã rõ luôn! Sau đó tớ sẽ dẫn dắt câu chuyện đi đến lời kết thật bùng nổ để hút cả lớp." }
        ]
      }
    ]
  },
  {
    id: 'student-10',
    title: 'Library, Search & Info Literacy',
    vietnameseTitle: 'Thư viện & Kỹ năng tìm tài liệu',
    category: 'Communication',
    subCategory: ['For Students'],
    icon: '📚',
    color: '#023047',
    description: 'Hỏi han thủ thư, tìm sách trong catalog, thao tác cơ sở dữ liệu số, mượn mực và trả sách quá lịch hẹn.',
    words: [
      { id: 'st10-1', word: 'Librarian', ipa: '/laɪˈbreəriən/', definition: 'Người thủ thư quản lý giữ sách.', translation: 'Thủ thư thư viện', example: 'Ask the librarian if you cannot locate this novel.', blankSentence: 'The friendly ____ guided me to the old collection.', emoji: '👩‍🦰' },
      { id: 'st10-2', word: 'Catalog', ipa: '/ˈkætəlɒɡ/', definition: 'Mục lục tra cứu mã vị trí sách kệ.', translation: 'Mã danh mục, mục lục', example: 'Most students search the online catalog by typing keywords.', blankSentence: 'Use the library ____ terminal.', emoji: '💻' },
      { id: 'st10-3', word: 'Article', ipa: '/ˈɑːtɪkl/', definition: 'Bài luận, bài báo phân tích chuyên ngành.', translation: 'Bài báo học thuật', example: 'I printed three academic articles for references.', blankSentence: 'Which research ____ did you cite?', emoji: '📄' },
      { id: 'st10-4', word: 'Borrow', ipa: '/ˈbɒrəʊ/', definition: 'Mượn tạm đem về sử dụng và hứa hẹn trả sau.', translation: 'Mượn sách, tài liệu', example: 'You can borrow up to five books for two weeks.', blankSentence: 'Where is the counter to ____ materials?', emoji: '📥' },
      { id: 'st10-5', word: 'Reference', ipa: '/ˈrefrəns/', definition: 'Các tài nguyên dùng so chiếu trích dẫn nguồn.', translation: 'Tài liệu tham khảo', example: 'This shelf contains important reference dictionaries.', blankSentence: 'Include a complete list of ____ at the end.', emoji: '📖' }
    ],
    structures: [
      {
        phrase: "Excuse me, how can I search the online catalog?",
        meaning: "Hỏi xin chỉ dẫn cách tra danh mục tài liệu trực tuyến.",
        vietnamese: "Xin lỗi, làm sao để mình tìm mục lục trực tuyến của thư viện thế?",
        casual: "Hey, how do I look up books on this computer catalog?"
      },
      {
        phrase: "Are we allowed to borrow dictionaries?",
        meaning: "Hỏi han nội quy mượn đem về nhà từ thư viện.",
        vietnamese: "Học sinh có được phép mượn từ điển về nhà không ạ?",
        casual: "Can we actually check out reference books?"
      },
      {
        phrase: "The book is currently checked out, you can reserve it.",
        meaning: "Thông báo quyển sách đã bị mượn hết ráo, khuyên đặt gạch trước.",
        vietnamese: "Quyển sách này hiện đã có người mượn, bạn có thể đăng ký đặt chỗ.",
        casual: "Some classmate took that copy already, put your name on list."
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Consulting the librarian',
        participants: [
          { name: 'Phuong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Phuong' },
          { name: 'Librarian', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Librarian', role: 'Staff' }
        ],
        lines: [
          { participant: 'Phuong', text: "Excuse me, I want to search the catalog for a specific research article. Could you help?", translation: "Dạ thưa cô thủ thư, em muốn tra mục lục để tìm một bài báo nghiên cứu cụ thể. Cô giúp em được không ạ?" },
          { participant: 'Librarian', text: "Of course! Have you checked our university's digital website catalog first?", translation: "Tất nhiên rồi con! Con đã tra cứu thử danh mục số trên trang web chính thức của trường mình chưa?" },
          { participant: 'Phuong', text: "Ah, I see! Are we allowed to borrow physical reference books for group studies?", translation: "Dạ thì ra là vậy! Thế tụi em có được phép mượn mấy cuốn từ điển tham khảo giấy đem học nhóm không cô?" },
          { participant: 'Librarian', text: "Reference books must stay in this hall, but you can photocopy any chapters you need.", translation: "Sách tham khảo bắt buộc phải đọc tại chỗ ở sảnh này nha con, cơ mà con có mang ra máy phô-tô mấy trang cần thiết đem học là được." }
        ]
      }
    ]
  },
  {
    id: 'student-11',
    title: 'Teachers, Advisors & Polite Mail',
    vietnameseTitle: 'Giáo viên & Giao tiếp học thuật lịch sự',
    category: 'Communication',
    subCategory: ['For Students'],
    icon: '👩‍🏫',
    color: '#2A9D8F',
    description: 'Cách viết email/nói chuyện lịch thiệp khi gặp khó khăn, xin lùi hạn nộp bài, hẹn lịch gặp riêng và xin thư giới thiệu.',
    words: [
      { id: 'st11-1', word: 'Respectful', ipa: '/rɪˈspektfl/', definition: 'Thái độ tôn kính, khiêm tốn chuẩn mực.', translation: 'Lễ độ, tôn kính', example: 'We should maintain a respectful tone when speaking to advisors.', blankSentence: 'Write a ____ email to request a draft check.', emoji: '🙏' },
      { id: 'st11-2', word: 'Consultant', ipa: '/kənˈsʌltənt/', definition: 'Người đứng ra tư vấn hỗ trợ tháo gỡ vướng mắc.', translation: 'Người tư vấn học thuật', example: 'The study consultant helped me plan my credit courses.', blankSentence: 'Go see the student ____ if you struggle with math.', emoji: '💼' },
      { id: 'st11-3', word: 'Recommendation', ipa: '/ˌrekəmenˈdeɪʃn/', definition: 'Sự tiến cử nồng nhiệt, khích lệ từ thầy cô để xin học bổng.', translation: 'Thư giới thiệu tiếng tăm', example: 'The professor wrote a glowing recommendation letter for my CV.', blankSentence: 'Ask for a ____ ahead of time.', emoji: '✉️' },
      { id: 'st11-4', word: 'Extension', ipa: '/ɪkˈstenʃn/', definition: 'Gia hạn thêm khoảng thời gian nộp bài chống cháy.', translation: 'Sự lùi hạn chót', example: 'He got a three-day extension due to health reasons.', blankSentence: 'Are we allowed to apply for a deadline ____?', emoji: '📅' },
      { id: 'st11-5', word: 'Draft', ipa: '/drɑːft/', definition: 'Bản thô phác thảo sơ bộ trước khi nắn nót bản in.', translation: 'Bản nháp sơ bộ', example: 'Submit your first report draft for early feedback.', blankSentence: 'I am refining my second academic ____ today.', emoji: '📝' }
    ],
    structures: [
      {
        phrase: "Would it be possible to get a short extension on the paper?",
        meaning: "Câu thỉnh cầu cứu rỗi xin dời hạn nộp luận văn cực khéo.",
        vietnamese: "Dạ thầy/cô cho phép em được lùi hạn nộp bài một chút có được không ạ?",
        casual: "Any chance I can grab a couple days more to finish this up?"
      },
      {
        phrase: "I would highly appreciate your guidance on...",
        meaning: "Bày tỏ lòng biết ơn sự soi đường dẫn lối tận tâm.",
        vietnamese: "Em cực kỳ trân quý sự chỉ bảo của thầy/cô về...",
        casual: "I'd really love to hear your thoughts on my strategy."
      },
      {
        phrase: "Thank you for taking the time to meet with me.",
        meaning: "Cảm tạ thầy cô đã chắt chiu thời gian vàng ngọc gặp mặt.",
        vietnamese: "Em xin chân thành cảm ơn thầy/cô đã dành thời gian gặp em.",
        casual: "Thanks for squeezed me in your busy hour today."
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Asking for a deadline extension',
        participants: [
          { name: 'Nam', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nam' },
          { name: 'Professor Smith', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Smith', role: 'Faculty' }
        ],
        lines: [
          { participant: 'Nam', text: "Dear Professor Smith, thank you for taking the time to meet with me today.", translation: "Thưa Giáo sư Smith, em chân thành cảm ơn thầy đã bớt chút thời gian gặp em hôm nay." },
          { participant: 'Professor Smith', text: "My pleasure, Nam. How is your research draft coming along? Any blockers?", translation: "Vinh hạnh của thầy mà Nam. Bản thảo nghiên cứu của em tiến triển thế nào rồi? Có vướng chỗ nào không?" },
          { participant: 'Nam', text: "Yes, I need extra references. Would it be possible to get a short extension on the submission deadline?", translation: "Dạ vâng, em đang bị thiếu nguồn tài liệu đối chiếu. Liệu có thể cho phép em được dời hạn nộp bài một chút có được không ạ?" },
          { participant: 'Professor Smith', text: "Since you are keeping a respectful and hard working attitude, I will grant you a three-day extension. Keep pushing!", translation: "Vì em luôn giữ thái độ rất lễ độ và siêng năng học hành, thầy sẽ cho phép em lùi hạn thêm ba ngày nhé. Tiếp tục cố gắng nhen!" }
        ]
      }
    ]
  },
  {
    id: 'student-12',
    title: 'International Friends & Exchanges',
    vietnameseTitle: 'Bạn bè quốc tế & Giao lưu văn hóa',
    category: 'Communication',
    subCategory: ['For Students'],
    icon: '🌍',
    color: '#E76F51',
    description: 'Giới thiệu trường học, nét đẹp Tết, ẩm thực hè phố Việt Nam với lưu học sinh; hỏi văn hóa phương Tây để hòa nhập tốt.',
    words: [
      { id: 'st12-1', word: 'Diverse', ipa: '/daɪˈvɜːs/', definition: 'Môi trường đa dạng muôn màu muôn vẻ nhiều sắc tộc phong phú.', translation: 'Đa dạng, phong phú', example: 'We belong to a highly diverse and open university.', blankSentence: 'A ____ culture triggers creative sparks.', emoji: '🌈' },
      { id: 'st12-2', word: 'Custom', ipa: '/ˈkʌstəm/', definition: 'Phong tục tập quán tập quán lâu đời được kế thừa.', translation: 'Phong tục tập quán', example: 'Taking off shoes before entering house is a local custom.', blankSentence: 'Learn the foreign ____ to avoid awkward blunders.', emoji: '🕯️' },
      { id: 'st12-3', word: 'Heritage', ipa: '/ˈherɪtɪdʒ/', definition: 'Sản vật di sản lịch sử văn hóa cốt lõi.', translation: 'Di sản văn hóa', example: 'Vietnamese food forms a vital part of our national heritage.', blankSentence: 'Protecting tangible ____ is our responsibility.', emoji: '🏛️' },
      { id: 'st12-4', word: 'Festival', ipa: '/ˈfestɪvl/', definition: 'Hội hè dịp tụ tụ ăn mừng nhảy múa truyền thống.', translation: 'Lễ hội truyền thống', example: 'The Mid-Autumn Festival is beloved by young kids.', blankSentence: 'Which local ____ is held in spring?', emoji: '🏮' },
      { id: 'st12-5', word: 'Expat', ipa: '/ˌeksˈpæt/', definition: 'Người nước ngoài cư trú làm ăn và sinh hoạt tại chỗ.', translation: 'Người nước ngoài sống tại Việt Nam', example: 'Canggu and Saigon house massive expat communities.', blankSentence: 'Connecting with local ____ is super fun.', emoji: '👨‍✈️' }
    ],
    structures: [
      {
        phrase: "Allow me to introduce our local high school customs.",
        meaning: "Lời mở đầu duyên dáng thuyết minh phong tục trường học Việt.",
        vietnamese: "Cho phép mình giới thiệu về các nội quy phong tục trường học của tụi mình nhé.",
        casual: "Let me show you how we do things in classrooms here."
      },
      {
        phrase: "Our school has a highly diverse student population.",
        meaning: "Tự hào giới thiệu cộng đồng sinh viên trường phong phú muôn màu.",
        vietnamese: "Trường tụi mình có cộng đồng học sinh vô cùng đa dạng.",
        casual: "We've got people from literally all over the globe here."
      },
      {
        phrase: "What is the key cultural difference you noticed?",
        meaning: "Hỏi kháp thăm về điểm chạm sốc văn hóa đầu đời.",
        vietnamese: "Điểm khác biệt văn hóa lớn nhất bạn nhận ra là gì thế?",
        casual: "What shocked you most when you landed here?"
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Guiding an exchange student',
        participants: [
          { name: 'Toan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Toan' },
          { name: 'Sarah', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah', role: 'Exchange Student' }
        ],
        lines: [
          { participant: 'Toan', text: "Hello Sarah! Welcome! Our school houses a highly diverse exchange group this year.", translation: "Chào Sarah nha! Chào mừng bạn! Trường tụi mình năm nay chào đón một đội ngũ sinh viên giao lưu vô cùng đa dạng sắc màu luôn." },
          { participant: 'Sarah', text: "Thank you, Toan! I am so excited to be here. Could you explain the local high school customs to me?", translation: "Cảm ơn Toàn nhé! Tớ hào hứng dã man khi ở đây. Bạn giải thích sơ qua về mấy cái phong tục trường học ở đây giùm tớ nhé?" },
          { participant: 'Toan', text: "With pleasure! For example, during the Mid-Autumn Festival, we always perform lion dances on campus.", translation: "Rất vinh hạnh nha! Thí dụ như dịp tết Trung Thu lễ hội ở đây, tụi tớ hay có mấy màn múa lân ngay trong khuôn viên trường vui lắm." },
          { participant: 'Sarah', text: "That sounds like a beautiful cultural heritage. I can't wait to participate!", translation: "Nghe giống như một di sản văn hóa đẹp đẽ ấy. Tớ không thể đợi thêm để được nhào vô quẩy cùng luôn!" }
        ]
      }
    ]
  },
  {
    id: 'student-13',
    title: 'School Clubs & Extracurriculars',
    vietnameseTitle: 'Câu lạc bộ & Hoạt động ngoại khóa',
    category: 'Communication',
    subCategory: ['For Students'],
    icon: '⚽',
    color: '#06D6A0',
    description: 'Giới thiệu các câu lạc bộ (Tình nguyện, Kịch, Thể thao...), rủ rê nộp đơn gia nhập, thảo luận giờ sinh hoạt chung và kỹ năng học được.',
    words: [
      { id: 'st13-1', word: 'Register', ipa: '/ˈredʒɪstə(r)/', definition: 'Ghi danh đăng ký nhập hội đăng tên chính thức.', translation: 'Đăng ký, ghi danh', example: 'I decided to register for the campus robotic club.', blankSentence: 'Where can we go to ____ for the event?', emoji: '📝' },
      { id: 'st13-2', word: 'Leadership', ipa: '/ˈliːdəʃɪp/', definition: 'Kỹ năng lãnh đạo, dẫn dắt đội ngũ tài ba.', translation: 'Kỹ năng lãnh đạo', example: 'Joining voluntary projects boosts your school leadership.', blankSentence: 'The club head demonstrated exceptional ____ skills.', emoji: '👑' },
      { id: 'st13-3', word: 'Recruit', ipa: '/rɪˈkruːt/', definition: 'Chiêu mộ săn lùng thêm thành viên mới xuất chúng.', translation: 'Tuyển thành viên mới', example: 'The art club wants to recruit skilled painters this Friday.', blankSentence: 'Our team is launching a campaign to ____ freshmen.', emoji: '🎯' },
      { id: 'st13-4', word: 'Regular', ipa: '/ˈreɡjələ(r)/', definition: 'Các hoạt động diễn ra đều đặn theo quy củ lịch tuần.', translation: 'Thường xuyên, đều đặn', example: 'We have regular club rehearsals at the community center.', blankSentence: 'I attend the ____ English practice group.', emoji: '🔄' },
      { id: 'st13-5', word: 'Volunteer', ipa: '/ˌvɒlənˈtɪə(r)/', definition: 'Tình nguyện hiến dâng sức trẻ cho cộng đồng không vụ lợi.', translation: 'Hoạt động tình nguyện', example: 'He joined the beach clean-up as a voluntary worker.', blankSentence: 'Our school leads a helpful ____ campaign.', emoji: '🌱' }
    ],
    structures: [
      {
        phrase: "Which club would you suggest joining?",
        meaning: "Hỏi xin ý kiến khuyên nên gia nhập hội nhóm nào vui.",
        vietnamese: "Cậu gợi ý mình nên gia nhập câu lạc bộ nào không?",
        casual: "What's the absolute best club to hook up with on campus?"
      },
      {
        phrase: "You'll learn amazing leadership skills there.",
        meaning: "Cam đoan đối phương sẽ thu thập được khả năng quản lý tuyệt đỉnh.",
        vietnamese: "Bạn sẽ học hỏi được các kỹ năng lãnh đạo tuyệt vời ở đó.",
        casual: "They'll shape you into a top-tier team leader in no time."
      },
      {
        phrase: "Let's register for the voluntary task together!",
        meaning: "Rủ bạn mọc rễ đăng ký chung một chiến dịch mùa hè xanh.",
        vietnamese: "Chúng mình cùng đăng ký tham gia chương trình tình nguyện đi!",
        casual: "Wanna sign up for the soup kitchen run this Saturday?"
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Joining an extracurricular club',
        participants: [
          { name: 'Vy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vy' },
          { name: 'Duc', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Duc' }
        ],
        lines: [
          { participant: 'Vy', text: "Duc, are you planning to register for any extra student activities this semester?", translation: "Đức ơi, cậu có tính đăng ký tham gia hoạt động hóng hớt ngoại khóa nào kỳ này không?" },
          { participant: 'Duc', text: "I want to! Which club would you suggest joining for a tech freshman?", translation: "Có chứ! Bồ gợi ý tớ nên quẩy hội nhóm nào phù hợp cho một tân binh IT mầm non như tớ không?" },
          { participant: 'Vy', text: "Definitely the Voluntary Tech Club! You will learn amazing leadership and coding skills.", translation: "Chắc chắn là CLB Công Nghệ Tình Nguyện rồi bồ! Bồ sẽ lượm được bao kỹ năng lãnh đạo và viết code xịn mịn luôn." },
          { participant: 'Duc', text: "Sounds incredibly rewarding! Let's register for the voluntary task together this afternoon!", translation: "Nghe đậm đà trải nghiệm quá đi! Chiều nay hai đứa mình dắt tay đi ghi danh đăng ký chung luôn nhen!" }
        ]
      }
    ]
  },
  {
    id: 'student-14',
    title: 'Aspirations & Future Career paths',
    vietnameseTitle: 'Ước mơ, Định hướng học tập & Nghề nghiệp',
    category: 'Communication',
    subCategory: ['For Students'],
    icon: '🚀',
    color: '#F4A261',
    description: 'Bày tỏ khát vọng, hỏi và giải thích hướng nghiên cứu học bổng học thuật, rải đơn kiến tập và vạch ra tương lai 5 năm.',
    words: [
      { id: 'st14-1', word: 'Aspiration', ipa: '/ˌæspəˈreɪʃn/', definition: 'Khát vọng, hoài bão thúc đẩy con người lao động học tập.', translation: 'Hoài bão, ước vươn lên', example: 'Her core aspiration is to cure visual illnesses.', blankSentence: 'Do you share the same career ____?', emoji: '🚀' },
      { id: 'st14-2', word: 'Career', ipa: '/kəˈrɪə(r)/', definition: 'Sự nghiệp gắn bó lâu dài trải qua nhiều chức vụ.', translation: 'Con đường sự nghiệp', example: 'She is laying blueprints for a career in marketing.', blankSentence: 'Building a stable ____ requires deep patience.', emoji: '💼' },
      { id: 'st14-3', word: 'Scholarship', ipa: '/ˈskɒləʃɪp/', definition: 'Học bổng tài trợ tài chính học phí miễn phí.', translation: 'Học bổng tài trợ', example: 'He secured a fully funded scholarship to study abroad in Japan.', blankSentence: 'Keep your grades high to qualify for the ____.', emoji: '🎓' },
      { id: 'st14-4', word: 'Goal', ipa: '/ɡəʊl/', definition: 'Đích đến, cột mốc hành trình dự mưu hoàn thành.', translation: 'Mục tiêu vạch sẵn', example: 'My ultimate goal is writing an international thesis paper.', blankSentence: 'Write down your five-year plan ____.', emoji: '🎯' },
      { id: 'st14-5', word: 'Path', ipa: '/pɑːθ/', definition: 'Lộ trình hướng đi cuộc đời sự nghiệp.', translation: 'Lộ trình, hướng đi', example: 'Choosing the right academic path is sometimes difficult.', blankSentence: 'Follow the research ____ that keeps you curious.', emoji: '🗺️' }
    ],
    structures: [
      {
        phrase: "My ultimate goal after graduation is...",
        meaning: "Trình diễn tầm nhìn sau khi nhận bằng cử nhân.",
        vietnamese: "Mục tiêu tối thượng của tớ sau khi tốt nghiệp là...",
        casual: "My end game after getting this paper is definitely..."
      },
      {
        phrase: "How do we apply for the exchange scholarship?",
        meaning: "Hỏi xin biểu mẫu và cách thức tranh đoạt học bổng giao lưu.",
        vietnamese: "Làm sao để chúng mình nộp đơn xin học bổng trao đổi thế?",
        casual: "What's the trick to grab that study-abroad scholarship grant?"
      },
      {
        phrase: "I'm planning to choose a research-based path.",
        meaning: "Chia sẻ ước nguyện đi theo con đường nghiên cứu hàn lâm.",
        vietnamese: "Tớ đang có kế hoạch chọn con đường thiên hướng nghiên cứu.",
        casual: "I think I'm leaning heavily towards staying in academia."
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Discussing goals after uni',
        participants: [
          { name: 'Khang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Khang' },
          { name: 'Jane', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane' }
        ],
        lines: [
          { participant: 'Khang', text: "Jane, have you mapped out your future aspiration after our university tenure?", translation: "Jane ơi, bồ đã thiết kế phác thảo ước mơ hoài bão của mình sau thời gian mài đít ở trường đại học này chưa?" },
          { participant: 'Jane', text: "Yes! My ultimate goal after graduation is to secure a fully-funded scholarship for a Master path.", translation: "Ừa! Mục tiêu tối thượng của tớ sau tốt nghiệp là giật bằng được một suất học bổng toàn phần để leo lên thạc sĩ." },
          { participant: 'Khang', text: "That is amazing. I'm actually planning to choose a more career-based path in corporate sales.", translation: "Quá kinh khủng bồ ơi. Còn tớ thì tính chọn lộ trình sự nghiệp va vấp thực tế hơn là nhảy vô chuỗi bán hàng tập đoàn." },
          { participant: 'Jane', text: "Both paths are awesome. Let's study smart to back up our career dreams!", translation: "Đường nào cũng ngon lành cành đào hết bồ ơi. Cố học ngon nghẻ để làm bệ phóng cho ước mơ sự nghiệp tụi mình nhé!" }
        ]
      }
    ]
  },
  {
    id: 'student-15',
    title: 'Technology & Online Classrooms',
    vietnameseTitle: 'Công nghệ trong học tập & Học online',
    category: 'Communication',
    subCategory: ['For Students'],
    icon: '💻',
    color: '#FF6B6B',
    description: 'Vấn đề kết nối internet, đăng nhập phần mềm học LMS, thao tác micro, camera và xử lý trục trặc công nghệ tức thời.',
    words: [
      { id: 'st15-1', word: 'Software', ipa: '/ˈsɒftweə(r)/', definition: 'Phần mềm ứng dụng học trực tuyến như Zoom, Teams.', translation: 'Phần mềm ứng dụng', example: 'We must install the latest laboratory simulation software.', blankSentence: 'Does this old laptop support the required ____?', emoji: '⚙️' },
      { id: 'st15-2', word: 'Platform', ipa: '/ˈplætfɔːm/', definition: 'Nền tảng cổng thông tin quản trị học tập LMS sỉ lẻ.', translation: 'Nền tảng công nghệ', example: 'The teacher uploaded our test score on the learning platform.', blankSentence: 'Log in to the LMS ____ to hand in the paper.', emoji: '🌐' },
      { id: 'st15-3', word: 'Connection', ipa: '/kəˈnekʃn/', definition: 'Mạng kết nối tín hiệu vô tuyến hoặc cáp quang.', translation: 'Đường truyền mạng', example: 'Please switch off video stream if connection is laggy.', blankSentence: 'My home network has an unstable ____.', emoji: '📶' },
      { id: 'st15-4', word: 'Microphone', ipa: '/ˈmaɪkrəfəʊn/', definition: 'Thiết bị micro thu âm tiếng nói.', translation: 'Micro thu âm, mic', example: 'Turn off your microphone unless the teacher invites you to speak.', blankSentence: 'Is my external ____ working fine?', emoji: '🎤' },
      { id: 'st15-5', word: 'Submit', ipa: '/səbˈmɪt/', definition: 'Nộp bài báo cáo qua hệ thống nộp bài trực tuyến.', translation: 'Nộp bài trực tuyến', example: 'You must submit your document before the system automatically locks.', blankSentence: 'Press this green button to ____ your work.', emoji: '📥' }
    ],
    structures: [
      {
        phrase: "I think your microphone is currently muted.",
        meaning: "Nhắc nhở nhẹ nhàng bạn học hoặc thầy chưa mở mic.",
        vietnamese: "Hình như micro của bồ đang bị tắt tiếng kìa.",
        casual: "Hey pal, you're talkin' but you're muted!"
      },
      {
        phrase: "My home connection is starting to break up.",
        meaning: "Thông báo tín hiệu mạng dật dờ dở tệ bập bõm.",
        vietnamese: "Đường truyền mạng nhà tớ đang bắt đầu bập bõm giật giật.",
        casual: "Hang on, my screen is totally freezin' up."
      },
      {
        phrase: "Which homework platform should we use to submit?",
        meaning: "Hỏi han thống nhất địa chỉ nộp tài liệu bài tập lớn.",
        vietnamese: "Tụi mình nộp bài qua nền tảng học tập nào vậy cậu?",
        casual: "Where do we hand in this science paper?"
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Troubleshooting online group call',
        participants: [
          { name: 'Phuc', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Phuc' },
          { name: 'Jane', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jane' }
        ],
        lines: [
          { participant: 'Phuc', text: "Aloo Jane! I think your microphone was currently muted just now. We missed your intro.", translation: "Aloo Jane ơi! Hình như vừa nãy micro của bồ bị tắt tiếng rồi á. Bụi tớ hụt mất khúc tự giới thiệu rồi." },
          { participant: 'Jane', text: "Oh, really? Sorry about the technology blunder. My home connection is starting to break up too.", translation: "Ủa thế á? Xin lỗi vì cú lỗi công nghệ bốc mùi này nha. Đường truyền mạng nhà tớ hôm nay cũng đang bập bõm nữa." },
          { participant: 'Phuc', text: "No worries! Which homework platform should we use to submit our draft slides?", translation: "Đâu sao đâu bồ! Mà tụi mình nộp thô bộ slide này qua nền tảng học tập trực tuyến nào thế?" },
          { participant: 'Jane', text: "We should log in and submit directly via the MS Teams portal. Let me do it now!", translation: "Tụi mình đăng nhập rồi nộp thẳng tay qua cổng Teams nha. Để tớ xử luôn cho nóng!" }
        ]
      }
    ]
  },
  {
    id: 'student-16',
    title: 'Stress, Balance & Counselor Advice',
    vietnameseTitle: 'Sức khỏe, Áp lực học tập & Cân bằng',
    category: 'Communication',
    subCategory: ['For Students'],
    icon: '🤯',
    color: '#E76F51',
    description: 'Từ vựng lo âu thi cử, cảm giác kiệt sức (burnout), tìm kiếm sự động viên từ cố vấn tâm lý học đường, chia sẻ mẹo xả stress.',
    words: [
      { id: 'st16-1', word: 'Exhausted', ipa: '/ɪɡˈzɔːstɪd/', definition: 'Cơ thể mỏi nhừ rũ rượi, vơi kiệt cạn sức lực.', translation: 'Kiệt quệ, mệt nhoài', example: 'Preparing daily presentations left me totally exhausted.', blankSentence: 'Go lay down, you look completely ____.', emoji: '😫' },
      { id: 'st16-2', word: 'Anxiety', ipa: '/æŋˈzaɪəti/', definition: 'Nỗi lo âu hồi hộp bấn loạn vẩn vơ.', translation: 'Sự bứt rứt lo âu', example: 'Yoga and meditation help reduce exam anxiety.', blankSentence: 'How do you cope with academic ____?', emoji: '🥺' },
      { id: 'st16-3', word: 'Counselor', ipa: '/ˈkaʊnsələ(r)/', definition: 'Cố vấn chuyên gia gỡ rối tư vấn tâm tư tình cảm.', translation: 'Cố vấn tâm lý học đường', example: 'Talk to the school counselor if you feel overwhelmed.', blankSentence: 'Go and share your stress with the student ____.', emoji: '👩‍⚕️' },
      { id: 'st16-4', word: 'Relax', ipa: '/rɪˈlæks/', definition: 'Thư thả xả bớt mọi ưu phiền nặng gánh.', translation: 'Thả lỏng, xả hơi', example: 'Let\'s head to the park to relax after this tough exam.', blankSentence: 'Listen to calming tunes to help you ____.', emoji: '🌳' },
      { id: 'st16-5', word: 'Balance', ipa: '/ˈbæləns/', definition: 'Trạng thái cân bằng hài hòa phân bố thời gian biểu.', translation: 'Trạng thái cân bằng', example: 'A healthy life requires active balance between study and fun.', blankSentence: 'Keep a neat ____ and sleep well.', emoji: '⚖️' }
    ],
    structures: [
      {
        phrase: "I'm feeling under immense academic pressure lately.",
        meaning: "Thổ lộ bản thân đang gồng mình dưới áp lực thi cử khổng lồ.",
        vietnamese: "Dạo gần đây tớ đang thấy áp lực thi cử đè nặng quá.",
        casual: "I'm honestly drowning in prep files these days."
      },
      {
        phrase: "You look exhausted, make sure to catch some sleep.",
        meaning: "Lời an ủi lo lắng khuyên bạn cất vở đi ngủ hồi sức.",
        vietnamese: "Trông bồ oải quá rồi kìa, nhớ đi chợp mắt dưỡng sức nha.",
        casual: "Dude, you look like a zombie. Go crash right now."
      },
      {
        phrase: "Have you tried talking to the student counselor?",
        meaning: "Gợi ý đi trò chuyện tâm tình gỡ rối cùng chuyên gia tâm lý trường.",
        vietnamese: "Cậu đã thử tâm sự giãi bày với thầy cô cố vấn tâm lý trường mình chưa?",
        casual: "Maybe schedule a chat with the support crew to vent?"
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Discussing burnouts with a friend',
        participants: [
          { name: 'Lam', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lam' },
          { name: 'Tram', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tram' }
        ],
        lines: [
          { participant: 'Lam', text: "Tram, I'm feeling under immense academic pressure lately. I can't sleep.", translation: "Trâm ơi, gần đây tớ thấy áp lực học hành thi cử nặng nề quá mức. Tớ không chợp mắt nổi luôn." },
          { participant: 'Tram', text: "You look exhausted, make sure to catch some sleep! Have you tried talking to the student counselor?", translation: "Trông bồ mệt nhoài kiệt quệ rồi kìa, lo nhắm mắt dưỡng sức đi nhé! Cậu đã thử đi thố lộ với cố vấn tâm lý trường mình chưa?" },
          { participant: 'Lam', text: "Not yet, I was too scared of being judged. But maybe I should visit him to find some balance.", translation: "Chưa bồ ơi, tớ sợ người ta cười chê đánh giá á. Nhưng chắc cũng phải mò qua gặp thầy để lấy lại cân bằng tâm trí thui." },
          { participant: 'Tram', text: "Exactly! Take a short break, sip some tea, and relax. Your mental health is key!", translation: "Chuẩn cơm mẹ nấu rồi! Nghỉ xả hơi một tẹo, nhấp ngụm trà nóng rồi thả lỏng đầu óc nhé. Sức khỏe tinh thần mới là số một!" }
        ]
      }
    ]
  },
  {
    id: 'student-17',
    title: 'Rules, Disciplines & Resolution',
    vietnameseTitle: 'Kỷ luật, Quy tắc & Giải quyết vấn đề',
    category: 'Communication',
    subCategory: ['For Students'],
    icon: '⚖️',
    color: '#023047',
    description: 'Từ xếp hàng trật tự (bé) đến vi phạm giờ giới nghiêm, xin lỗi giáo viên vì quên nộp bài, thảo luận nội quy nội trú ký túc xá.',
    words: [
      { id: 'st17-1', word: 'Regulation', ipa: '/ˌreɡjuˈleɪʃn/', definition: 'Hệ thống quy phạm nội quy bắt buộc thi hành nghiêm cẩn.', translation: 'Nội quy quy định', example: 'Campus regulations strictly forbid smoking near laboratories.', blankSentence: 'We must abide by school ____.', emoji: '📏' },
      { id: 'st17-2', word: 'Apologize', ipa: '/əˈpɒlədʒaɪz/', definition: 'Bày tỏ lòng hối lỗi ăn năn vì lỡ làm hỏng việc.', translation: 'Xin lỗi thành khẩn', example: 'I decide to apologize directly to the teacher for my mistake.', blankSentence: 'Don\'t hesitate to ____ when you are wrong.', emoji: '🙏' },
      { id: 'st17-3', word: 'Compromise', ipa: '/ˈkɒmprəmaɪz/', definition: 'Hành động nhượng qua lại đôi bên đạt thoả thuận hòa giải.', translation: 'Thỏa thuận hòa giải, nhượng bộ', example: 'To resolve the roommate clash, we agreed on a middle compromise.', blankSentence: 'Let\'s make a fair ____ regarding clean chores.', emoji: '🤝' },
      { id: 'st17-4', word: 'Offense', ipa: '/əˈfens/', definition: 'Hành vi vi phạm kỷ luật bị ghi nhớ bêu tên phạt.', translation: 'Hành vi vi phạm kỷ luật', example: 'Late night noise in dormitory is a minor offense.', blankSentence: 'Repeated ____ will lead to parent calls.', emoji: '🚨' },
      { id: 'st17-5', word: 'Negotiate', ipa: '/nɪˈɡəʊʃieɪt/', definition: 'Thảo luận đứng ra thương thuyết điều đình.', translation: 'Thương thảo, điều đình', example: 'We managed to negotiate a lower deposit for our rent.', blankSentence: 'Try to ____ a peaceful curfew update.', emoji: '🗣️' }
    ],
    structures: [
      {
        phrase: "I sincerely apologize for violating this dorm rule.",
        meaning: "Tự nhận bản thân sai sót lỗi lầm thành tâm sửa chữa trước quản lý.",
        vietnamese: "Em thành thật xin lỗi vì đã vi phạm nội quy ký túc xá ạ.",
        casual: "My bad for missin' the lockup time, won't happen again."
      },
      {
        phrase: "Let's find a middle compromise to handle this noise.",
        meaning: "Lập lời kêu gọi đôi bên hòa hoãn giải tỏa ô nhiễm tiếng ồn.",
        vietnamese: "Chúng ta hãy tìm một thỏa thuận chung để xử lý vụ ồn ào này nhé.",
        casual: "How about we turn down the bass after ten PM?"
      },
      {
        phrase: "Is there any way to negotiate a makeup test?",
        meaning: "Hỏi han thăm dò xem có xin thi bù gia ân điểm được không.",
        vietnamese: "Có cách nào xin cô/thầy kiểm tra bù gỡ điểm được không ạ?",
        casual: "Any chance we can rewrite this test? Happy to take a penalty!"
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Resolving a noisy dorm conflict',
        participants: [
          { name: 'Huy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Huy' },
          { name: 'Phong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Phong', role: 'Roommate' }
        ],
        lines: [
          { participant: 'Huy', text: "Hey Phong. I sincerely apologize for playing games so loud past the dormitory curfew yesterday.", translation: "Ê Phong ơi. Tớ thành thật xin lỗi bồ vì tối qua cày game gào rú to quá giờ giới nghiêm ký túc xá nha." },
          { participant: 'Phong', text: "Apology accepted, Huy! But it is a repeated offense, and I couldn't focus on my draft essay.", translation: "Chấp nhận lời xin lỗi của bồ nha Huy! Cơ mà bồ phạm lỗi này lần thứ mấy rồi á, tớ không tập trung viết bản nháp luận văn nổi." },
          { participant: 'Huy', text: "Oh, I see! Let's find a middle compromise to handle this. I will put on headphones after 10 PM.", translation: "Uầy tớ hiểu rồi! Để tụi mình tìm giải pháp thỏa thuận hòa hòa hai bên đi nha. Tớ cam kết quẹt tai nghe sau 10 giờ tối." },
          { participant: 'Phong', text: "That works beautifully. And I will also turn down my table lamp so you can sleep early.", translation: "Ý kiến thế chuẩn rồi bồ. Rồi tớ cũng sẽ chỉnh nhỏ đèn bàn học lại cho bồ dễ ngủ sớm thảnh thơi nhen." }
        ]
      }
    ]
  },
  {
    id: 'student-18',
    title: 'Academic Debates & Discussions',
    vietnameseTitle: 'Thảo luận học thuật & Nêu ý kiến',
    category: 'Communication',
    subCategory: ['For Students'],
    icon: '🗣️',
    color: '#8ECAE6',
    description: 'Bày tỏ sự đồng tình/phản đối văn minh lịch thiệp, cấu trúc gợi mở ví dụ lý chứng thực tế và cách bẻ gãy lập luận.',
    words: [
      { id: 'st18-1', word: 'Opinion', ipa: '/əˈpɪnjən/', definition: 'Quan điểm chủ quan cá nhân đối với một chủ đề.', translation: 'Ý kiến, quan điểm cá nhân', example: 'In my humble opinion, online study can be highly engaging.', blankSentence: 'What is your professional ____ on child tech?', emoji: '🗣️' },
      { id: 'st18-2', word: 'Disagree', ipa: '/ˌdɪsəˈɡriː/', definition: 'Không đồng thuận và đưa ý kiến rẽ hướng trái chiều.', translation: 'Bất đồng, phản đối', example: 'I respect your slides, but I strongly disagree with the numbers.', blankSentence: 'We can agree to ____ and stay friends.', emoji: '🙅‍♂️' },
      { id: 'st18-3', word: 'Argument', ipa: '/ˈɑːɡjumənt/', definition: 'Luận điểm, mảng chứng lẽ củng cố lập trường.', translation: 'Luận điểm, lập luận', example: 'He made a compelling argument for saving municipal parks.', blankSentence: 'Your ____ lacks verified statistics.', emoji: '⚖️' },
      { id: 'st18-4', word: 'Evidence', ipa: '/ˈevɪdəns/', definition: 'Chứng cứ thực tế, số liệu dẫn thuyết khoa học rành rẽ.', translation: 'Bằng chứng khoa học', example: 'Always back up your homework claims using solid evidence.', blankSentence: 'Where did you gather this forensic ____?', emoji: '📊' },
      { id: 'st18-5', word: 'Aspect', ipa: '/ˈæspekt/', definition: 'Một khía cạnh dải góc độ của vấn đề đa chiều.', translation: 'Khía cạnh vấn đề', example: 'Let\'s analyze the socio-cultural aspect of this technology transition.', blankSentence: 'Don\'t overlook the financial ____ of the project.', emoji: '🧩' }
    ],
    structures: [
      {
        phrase: "I entirely see your point, but on the other hand...",
        meaning: "Mở màn tranh luận ghi nhận ý kiến đối thủ rồi bẻ ngược lại rất nhã nhặn.",
        vietnamese: "Tớ hoàn toàn hiểu ý cậu, tuy nhiên đứng ở khía cạnh khác thì...",
        casual: "I completely get where you're comin' from, but look at it this way..."
      },
      {
        phrase: "Do you have any concrete evidence to support that?",
        meaning: "Vặn hỏi số liệu chứng cớ thuyết phục khoa học.",
        vietnamese: "Cậu có bằng chứng xác thực nào để chứng minh ý đó không?",
        casual: "Got any real facts or numbers to back that claim up?"
      },
      {
        phrase: "That is a highly valid argument, I must say.",
        meaning: "Khen ngợi luận điểm sắc bén của đồng đội/đối phương trong buổi tranh biện.",
        vietnamese: "Tớ phải công nhận đó là một lập luận vô cùng thuyết phục.",
        casual: "Honestly? That's a super solid point right there."
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Classroom debate on online learning',
        participants: [
          { name: 'Truc', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Truc' },
          { name: 'Kien', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kien' }
        ],
        lines: [
          { participant: 'Truc', text: "In my opinion, studying online is way more productive than offline because it saves commute hours.", translation: "Quan điểm cá nhân tớ thì thấy học online năng suất vượt trội học trực tiếp vì đỡ tốn mớ giờ chạy xe di chuyển." },
          { participant: 'Kien', text: "I entirely see your point, but on the other hand, student isolated screens can damage community bonds.", translation: "Tớ hoàn toàn hiểu ý bồ, tuy nhiên nhìn từ khía cạnh khác, học sô lô qua màn hình có thể mài mòn sự gắn bó giao hảo cộng đồng." },
          { participant: 'Truc', text: "Do you have any concrete evidence or research statistics to support that claim?", translation: "Thế bồ có chứng cứ khoa học xác thực hay số liệu nghiên cứu nào chứng minh cho nhận định đó không?" },
          { participant: 'Kien', text: "Yes, look at this recent psychological survey on campus. The data is highly solid!", translation: "Có chứ bồ, nhìn cái bảng khảo sát tâm lý sinh viên trường mình vừa tung ra nè. Số liệu cực kỳ đanh thép luôn!" }
        ]
      }
    ]
  },
  {
    id: 'student-19',
    title: 'Research Thesis & Academic Citations',
    vietnameseTitle: 'Nghiên cứu nhỏ, Bài luận & Trích nguồn',
    category: 'Communication',
    subCategory: ['For Students'],
    icon: '🔬',
    color: '#2A9D8F',
    description: 'Khái niệm đạo văn (plagiarism), thiết lập chú thích nguồn tài liệu khoa học (citation), giải thích phương pháp nghiên cứu với người hướng dẫn.',
    words: [
      { id: 'st19-1', word: 'Plagiarism', ipa: '/ˈpleɪdʒərɪzəm/', definition: 'Hành vi đạo văn sao chép bất hợp pháp chất xám người khác.', translation: 'Đạo văn, sao chép trộm', example: 'The thesis check tools are highly strict about plagiarism.', blankSentence: 'Accidental ____ can lead to severe academic failure.', emoji: '🚫' },
      { id: 'st19-2', word: 'Citation', ipa: '/saɪˈteɪʃn/', definition: 'Sự trích tên tác giả nguồn gốc học thuyết khoa học.', translation: 'Trích dẫn nguồn học thuật', example: 'Include a proper APA citation for each definition used.', blankSentence: 'Every single quote requires an inline ____.', emoji: '🏷️' },
      { id: 'st19-3', word: 'Source', ipa: '/sɔːs/', definition: 'Gốc gác nguồn sách, tài liệu xuất bản chính thức.', translation: 'Nguồn tài liệu gốc', example: 'Always trace your scientific data back to its original source.', blankSentence: 'Make sure your internet ____ is credible.', emoji: '📰' },
      { id: 'st19-4', word: 'Abstract', ipa: '/ˈæbstrækt/', definition: 'Bản tóm tắt cô đọng súc tích mở đầu bài luận văn.', translation: 'Bản tóm tắt luận bàn', example: 'The abstract should contain the core research methodology.', blankSentence: 'Draft a short 200-word ____ for your paper.', emoji: '📄' },
      { id: 'st19-5', word: 'Thesis', ipa: '/ˈθiːsɪs/', definition: 'Bản đề án đề tài khoa học dài hơi trước thềm tốt nghiệp.', translation: 'Bản luận văn tốt nghiệp', example: 'I am refining the final chapter of my computer safety thesis.', blankSentence: 'Prepare well to defend your master\'s ____.', emoji: '📖' }
    ],
    structures: [
      {
        phrase: "You must include complete citations for all sources.",
        meaning: "Lời răn đe bắt buộc bồi chú thích nguồn học thuật chuẩn chỉnh.",
        vietnamese: "Cậu bắt buộc phải đính kèm đầy đủ nguồn trích dẫn cho mọi tài liệu nhé.",
        casual: "Don't forget to link up credit lines at the bottom."
      },
      {
        phrase: "The software scanned our abstract for potential plagiarism.",
        meaning: "Báo cáo máy quét kiểm tự động chống sao chép chất xám.",
        vietnamese: "Hệ thống phần mềm đã quét tóm tắt để kiếm các lỗi đạo văn tiềm ẩn.",
        casual: "The prof ran our summary through the copier check web."
      },
      {
        phrase: "My main thesis statement concentrates on...",
        meaning: "Tự tin phát biểu luận điểm xương sống bao trùm đề án.",
        vietnamese: "Luận điểm cốt lõi bài nghiên cứu của em xoay quanh...",
        casual: "My paper basically drills down on..."
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Reviewing citing guidelines',
        participants: [
          { name: 'Toan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Toan' },
          { name: 'Librarian', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Librarian', role: 'Staff' }
        ],
        lines: [
          { participant: 'Toan', text: "Excuse me, I am finalizing my graduation thesis. How do I avoid plagiarism issues?", translation: "Dạ thưa cô, em đang hoàn thiện khóa luận tốt nghiệp của mình. Làm sao để em tránh lỗi vi phạm đạo văn ạ?" },
          { participant: 'Librarian', text: "You must include complete citations for all sources in your biography list. It is an absolute academic rule!", translation: "Con bắt buộc phải đính kèm đầy đủ nguồn trích dẫn cho tất cả tài liệu tham khảo trong thư mục. Đó là nội quy học thuật tối quan trọng luôn nha con!" },
          { participant: 'Toan', text: "I see! Does our school software scan the abstract or the entire thesis text?", translation: "Dạ em hiểu rồi! Bản quét hệ thống của trường mình sẽ quét phần tóm tắt hay quét hết toàn bộ thân bài khóa luận ạ?" },
          { participant: 'Librarian', text: "The system scans every single page, comparing with global libraries. Just maintain authentic writing!", translation: "Máy sẽ quét từng ngóc ngách trang giấy luôn con ơi, so chiếu thư viện toàn câu. Cứ viết thật chân phương bằng ý mình là chuẩn nhất!" }
        ]
      }
    ]
  },
  {
    id: 'student-20',
    title: 'Exchange Programs & Global Conferences',
    vietnameseTitle: 'Học bổng, Trao đổi & Hội thảo quốc tế',
    category: 'Communication',
    subCategory: ['For Students'],
    icon: '✈️',
    color: '#FFD166',
    description: 'Nộp đơn học bổng du học, giao tiếp bối cảnh hội nghị sinh viên toàn cầu, đăng ký đón đầu các cơ hội trao đổi.',
    words: [
      { id: 'st20-1', word: 'Exchange', ipa: '/ɪksˈtʃeɪndʒ/', definition: 'Hoạt động giao lưu đưa đón học sinh xuyên quốc gia học tập.', translation: 'Chương trình giao lưu trao đổi', example: 'I applied for a winter exchange semester in Sweden.', blankSentence: 'Where is the guide for the student ____ project?', emoji: '✈️' },
      { id: 'st20-2', word: 'Scholarship', ipa: '/ˈskɒləʃɪp/', definition: 'Khoản bao tiêu học phí khích lệ tài năng xuất xắc.', translation: 'Suất học bổng danh giá', example: 'She won a full-ride scholarship to Harvard University.', blankSentence: 'Getting a ____ requires a stellar presentation portfolio.', emoji: '🏅' },
      { id: 'st20-3', word: 'Conference', ipa: '/ˈkɒnfərəns/', definition: 'Hội nghị khoa học trình bày sáng chế học thuật.', translation: 'Hội nghị học thuật khoa học', example: 'Hundreds of delegates gathered for the global climate conference.', blankSentence: 'I have to present my paper at the youth ____.', emoji: '🏛️' },
      { id: 'st20-4', word: 'Register', ipa: '/ˈredʒɪstə(r)/', definition: 'Lọc thủ tục nộp vé đăng ký đại biểu chính trị học thuật.', translation: 'Đăng ký tham dự', example: 'Ensure to register before the delegate slots are booked out.', blankSentence: 'Where do we go to ____ for the seminar?', emoji: '✍️' },
      { id: 'st20-5', word: 'Delegate', ipa: '/ˈdelɪɡət/', definition: 'Đại cử tri đại biểu ưu tú đại biểu quốc gia.', translation: 'Đại biểu đại diện', example: 'The Vietnamese student delegate delivered an inspiring speech.', blankSentence: 'Welcome our guest ____ from Thailand!', emoji: '👔' }
    ],
    structures: [
      {
        phrase: "How can I apply for this exchange program?",
        meaning: "Câu hỏi nòng cốt hỏi cách thức nộp đơn xin bay du học ngắn hạn.",
        vietnamese: "Làm thế nào để tôi có thể nộp đơn gia nhập chương trình trao đổi này vậy?",
        casual: "What's the queue to sign up for this study tour abroad?"
      },
      {
        phrase: "I'm extremely proud to be a student delegate.",
        meaning: "Lời phát cảm khi được vinh dự làm thủ lĩnh đại cử diện trường học.",
        vietnamese: "Tớ vô cùng hãnh diện khi được chọn làm dại biểu sinh viên.",
        casual: "So hyped to rep our university at the conference!"
      },
      {
        phrase: "Are there any academic scholarships available for seniors?",
        meaning: "Hỏi han thăm tìm cơ hội học dổng cho khóa đàn anh cuối cấp.",
        vietnamese: "Có suất học bổng học thuật nào đang mở rộng đón chờ sinh viên năm cuối không ạ?",
        casual: "Any funding grants left for students finishing up this year?"
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Discussing conference application',
        participants: [
          { name: 'Sarah', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah' },
          { name: 'Phuong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Phuong' }
        ],
        lines: [
          { participant: 'Sarah', text: "Phuong! Look at this poster. The university is calling to register for the Global Tech Conference in Tokyo!", translation: "Phương ơi! Xem cái poster này nè. Trường mình đang kêu gọi đăng ký tham gia Hội nghị Công nghệ Toàn cầu bên Tokyo kìa!" },
          { participant: 'Phuong', text: "Oh, neat! How can I apply for this exchange program? Is there any scholarship back-up?", translation: "Ồ, xịn vậy bồ! Làm sao để tớ có thể nộp đơn gia nhập chương trình trao đổi này nhỉ? Có hỗ trợ suất học bổng tài trợ nào đi kèm không ta?" },
          { participant: 'Sarah', text: "Yes! They fund the top five delegates. I'm incredibly proud to register as a student candidate.", translation: "Có chứ! Họ bao trọn gói kinh phí cho rốp 5 đại biểu xuất sắc nhất á. Tớ đang cực kỳ tự hào đăng ký làm một ứng viên sinh viên đây." },
          { participant: 'Phuong', text: "Count me in! Let's submit our portfolio abstract before the date closes out!", translation: "Tính tớ một chân với nhé! Tụi mình nhanh tay nộp tập tóm tắt hồ sơ năng lực trước khi đóng cổng nộp đi thôi!" }
        ]
      }
    ]
  }
];

export const specificStudents: Topic[] = rawStudents.map(topic => ({
  ...topic,
  dialogues: STUDENTS_DIALOGUES[topic.id] || topic.dialogues,
  structures: STUDENTS_STRUCTURES[topic.id] || topic.structures
}));
