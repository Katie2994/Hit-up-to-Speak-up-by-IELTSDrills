// Distinct 3-tier Dialogues (Business/Academic, Casual, Super Casual) for Lessons student-01 to student-20
// Guarantees 100% thematic fidelity across all 20 student topics with zero overlapping scenarios.

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

export interface Dialogue {
  type: 'pair' | 'group';
  school?: 'business' | 'casual' | 'superCasual';
  title: string;
  participants: DialogueParticipant[];
  lines: DialogueLine[];
}

export const STUDENTS_DIALOGUES: Record<string, Dialogue[]> = {
  'student-01': [
    {
      type: 'pair',
      school: 'business',
      title: 'Formal Introduction with Department Dean',
      participants: [
        { name: 'Professor Vance', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ProfVance', role: 'Dean' },
        { name: 'Minh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Minh', role: 'Freshman' }
      ],
      lines: [
        { participant: 'Minh', text: "Good morning, Professor Vance. Allow me to introduce myself. My name is Minh, and I have just enrolled as a freshman in Computer Science.", translation: "Kính chào Giáo sư Vance. Cho phép em được tự giới thiệu. Em tên là Minh, tân sinh viên vừa nhập học khoa Khoa học Máy tính ạ." },
        { participant: 'Professor Vance', text: "Welcome to the department, Minh. What led you to choose this particular major at our university?", translation: "Chào mừng em đến với khoa, Minh. Điều gì đã đưa em đến quyết định chọn chuyên ngành này tại trường ta?" },
        { participant: 'Minh', text: "I was deeply inspired by your faculty's research in artificial intelligence and modern software systems.", translation: "Dạ thưa thầy, em được truyền cảm hứng sâu sắc bởi các nghiên cứu của khoa về trí tuệ nhân tạo và các hệ thống phần mềm hiện đại ạ." },
        { participant: 'Professor Vance', text: "Excellent. I encourage you to attend the orientation symposium this afternoon to meet your academic advisors.", translation: "Rất tốt. Thầy khuyến khích em tham dự hội nghị định hướng chiều nay để gặp các thầy cô cố vấn học tập nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Campus Tour Chat Between Classmates',
      participants: [
        { name: 'Lan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lan', role: 'Student' },
        { name: 'Quang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Quang', role: 'Student' }
      ],
      lines: [
        { participant: 'Lan', text: "Hey! Are you also heading to the freshman orientation in Hall A?", translation: "Chào bạn! Bạn cũng đang đi đến buổi định hướng tân sinh viên ở Hội trường A đúng không?" },
        { participant: 'Quang', text: "Yeah, I am! I'm Quang, by the way. Majoring in Software Engineering. What about you?", translation: "Đúng rồi! Mình là Quang nè. Mình học chuyên ngành Kỹ thuật Phần mềm. Còn bạn thì sao?" },
        { participant: 'Lan', text: "I'm Lan, Data Science! Did you move here from another city?", translation: "Mình là Lan, ngành Khoa học Dữ liệu! Bạn từ tỉnh khác chuyển lên đây hả?" },
        { participant: 'Quang', text: "Yeah, my hometown is Da Nang. Still trying to get used to the huge campus!", translation: "Ừ, quê mình ở Đà Nẵng. Vẫn đang tập quen với cái khuôn viên trường to đùng này đây!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Check-in Outside Orientation Hall',
      participants: [
        { name: 'Huy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Huy', role: 'Freshman' },
        { name: 'Bao', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bao', role: 'Freshman' }
      ],
      lines: [
        { participant: 'Huy', text: "Yo, freshman orientation in this hall?", translation: "Ê bồ, định hướng năm nhất ở hội trường này đúng không?" },
        { participant: 'Bao', text: "Yeah, starts in 5 minutes! Grab a seat fast.", translation: "Chuẩn rồi, 5 phút nữa bắt đầu á! Vô nhanh tìm chỗ ngồi đi." },
        { participant: 'Huy', text: "Save me a spot near the back row!", translation: "Giữ giùm tớ một chỗ gần hàng ghế cuối nhé!" },
        { participant: 'Bao', text: "Got you covered. Come on in!", translation: "Bao trọn gói. Vào lẹ đi bồ!" }
      ]
    }
  ],

  'student-02': [
    {
      type: 'pair',
      school: 'business',
      title: 'Consulting an Academic Advisor on Degree Progress',
      participants: [
        { name: 'Dr. Evelyn', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DrEvelyn', role: 'Advisor' },
        { name: 'Kiet', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kiet', role: 'Student' }
      ],
      lines: [
        { participant: 'Kiet', text: "Good afternoon, Dr. Evelyn. Thank you for setting aside time during your consultation hours.", translation: "Kính chào Tiến sĩ Evelyn. Cảm ơn cô đã dành thời gian trong khung giờ tư vấn học tập ạ." },
        { participant: 'Dr. Evelyn', text: "Of course, Kiet. As your assigned mentor, how are you finding your workload this term?", translation: "Tất nhiên rồi Kiet. Với tư cách là người hướng dẫn của em, em thấy khối lượng bài vở học kỳ này thế nào?" },
        { participant: 'Kiet', text: "My teammates and I are managing well, though balancing lab hours with coursework requires strict discipline.", translation: "Dạ các bạn trong nhóm và em vẫn đang xoay xở tốt, dù việc cân bằng giờ phòng thí nghiệm với bài trên lớp đòi hỏi kỷ luật cao ạ." },
        { participant: 'Dr. Evelyn', text: "I appreciate your focus. Let us review your degree credit audit to ensure smooth graduation.", translation: "Cô đánh giá cao sự tập trung của em. Chúng ta hãy rà soát bảng điểm tích lũy để đảm bảo tiến độ tốt nghiệp nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Discussing Roommates and Study Groups',
      participants: [
        { name: 'Vy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vy', role: 'Student' },
        { name: 'Ha', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ha', role: 'Student' }
      ],
      lines: [
        { participant: 'Vy', text: "Ha, how are things going with your new dorm roommate?", translation: "Hà ơi, ở chung với bạn cùng phòng mới bên ký túc xá thế nào rồi?" },
        { participant: 'Ha', text: "She's super considerate! She studies late at the library so she doesn't disturb my sleep.", translation: "Bạn ấy tâm lý lắm luôn! Thường học bài muộn ở thư viện để không làm phiền giấc ngủ của mình." },
        { participant: 'Vy', text: "That's great. Our project teammate Linh also recommended starting a weekly review group together.", translation: "Thế thì tuyệt quá. Bạn Linh cùng nhóm dự án cũng rủ tụi mình lập nhóm ôn tập hằng tuần đấy." },
        { participant: 'Ha', text: "Count me in! Having dedicated study buddies keeps all of us accountable.", translation: "Cho mình tham gia với nhé! Có bạn cùng học sẽ giúp tụi mình chăm chỉ hơn nhiều." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Dorm Roommate Ping',
      participants: [
        { name: 'Nam', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nam', role: 'Roommate' },
        { name: 'Quan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Quan', role: 'Roommate' }
      ],
      lines: [
        { participant: 'Nam', text: "Hey, heading to the dorm now. Want any takeout?", translation: "Ê, đang về ký túc xá nè. Có muốn mua đồ ăn gì không?" },
        { participant: 'Quan', text: "Grab me a milk tea! Left my wallet on the desk.", translation: "Mua giùm ly trà sữa đi! Để quên ví trên bàn rồi." },
        { participant: 'Nam', text: "Less sugar, right? You got the dorm room key?", translation: "Ít đường đúng không? Mà ông có cầm chìa khóa phòng không đấy?" },
        { participant: 'Quan', text: "Yep, door is unlocked. Hurry back!", translation: "Có chứ, cửa không khóa đâu. Về lẹ nha!" }
      ]
    }
  ],

  'student-03': [
    {
      type: 'pair',
      school: 'business',
      title: 'Lab Safety & Campus Facility Inquiry',
      participants: [
        { name: 'Director Chen', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Chen', role: 'Lab Director' },
        { name: 'An', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=An', role: 'Research Student' }
      ],
      lines: [
        { participant: 'An', text: "Good morning, Director Chen. May I enquire about the operating hours for the advanced robotics laboratory?", translation: "Kính chào Giám đốc Chen. Cho phép em xin hỏi về khung giờ hoạt động của phòng thí nghiệm robot nâng cao ạ?" },
        { participant: 'Director Chen', text: "The main facility is open from 8 AM to 9 PM on weekdays. Have you completed the mandatory safety compliance briefing?", translation: "Khu phòng lab mở từ 8 giờ sáng đến 9 giờ tối các ngày trong tuần. Em đã hoàn thành buổi tập huấn an toàn bắt buộc chưa?" },
        { participant: 'An', text: "Yes, sir. I have submitted my safety certification to the campus registry office.", translation: "Dạ rồi thưa thầy. Em đã nộp chứng chỉ an toàn lên văn phòng quản lý khuôn viên trường rồi ạ." },
        { participant: 'Director Chen', text: "Very well. You may scan your student badge at the entrance turnstile for authorized access.", translation: "Tốt lắm. Em có thể quẹt thẻ sinh viên tại cổng xoay để vào phòng nghiên cứu nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Navigating Campus Buildings & Cafeteria',
      participants: [
        { name: 'Trang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Trang', role: 'Student' },
        { name: 'Tuan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tuan', role: 'Student' }
      ],
      lines: [
        { participant: 'Tuan', text: "Excuse me, Trang! Do you know where Building C is? I have chemistry there in ten minutes.", translation: "Trang ơi cho mình hỏi xíu! Bạn biết Tòa nhà C ở đâu không? Mười phút nữa mình có tiết hóa học ở đó." },
        { participant: 'Trang', text: "It's right past the central cafeteria and the student sports complex, on the left!", translation: "Nó nằm ngay sau nhà ăn trung tâm và khu thể thao sinh viên, phía bên tay trái á!" },
        { participant: 'Tuan', text: "Oh perfect! Is the cafeteria usually crowded around lunchtime?", translation: "Ồ tuyệt quá! Nhà ăn tầm trưa có đông đúc lắm không bạn?" },
        { participant: 'Trang', text: "Yeah, it gets packed after 11:30. Grab lunch early if you want a quiet table!", translation: "Ừ, sau 11 rưỡi là đông nghẹt luôn á. Muốn có bàn yên tĩnh thì bạn nên ăn sớm nha!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Meeting at Campus Coffee Kiosk',
      participants: [
        { name: 'Binh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Binh', role: 'Student' },
        { name: 'Dung', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dung', role: 'Student' }
      ],
      lines: [
        { participant: 'Binh', text: "Where you at? Class ended early.", translation: "Đang ở đâu thế? Lớp tan sớm rồi nè." },
        { participant: 'Dung', text: "Bench outside Building B, grabbing iced coffee.", translation: "Ghế đá ngoài Tòa B, đang mua cà phê đá." },
        { participant: 'Binh', text: "Walk over to the cafeteria pavilion?", translation: "Đi bộ qua sảnh nhà ăn không?" },
        { participant: 'Dung', text: "Meet you there in two minutes!", translation: "Gặp nhau ở đó sau 2 phút nha!" }
      ]
    }
  ],

  'student-04': [
    {
      type: 'pair',
      school: 'business',
      title: 'Requesting Library Academic Database Access',
      participants: [
        { name: 'Ms. Thornton', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Thornton', role: 'Librarian' },
        { name: 'Hoang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Hoang', role: 'Student' }
      ],
      lines: [
        { participant: 'Hoang', text: "Good afternoon. I am currently compiling literature for my senior thesis and require access to the peer-reviewed IEEE database.", translation: "Kính chào cô. Em đang thu thập tài liệu cho khóa luận tốt nghiệp và cần cấp quyền truy cập cơ sở dữ liệu học thuật IEEE ạ." },
        { participant: 'Ms. Thornton', text: "Certainly. Has your academic department issued you institutional proxy credentials?", translation: "Được chứ em. Khoa của em đã cấp thông tin ủy quyền mạng nội bộ trường cho em chưa?" },
        { participant: 'Hoang', text: "Yes, I have my student authorization token right here.", translation: "Dạ rồi, em có mang mã xác thực sinh viên ở đây ạ." },
        { participant: 'Ms. Thornton', text: "I have linked your student account. You now have full remote access to digital archives and technical textbooks.", translation: "Cô đã liên kết tài khoản cho em rồi nhé. Bây giờ em có toàn quyền truy cập từ xa vào kho lưu trữ số và giáo trình kỹ thuật." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Sharing Notes and Textbooks',
      participants: [
        { name: 'Duc', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Duc', role: 'Student' },
        { name: 'Mai', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mai', role: 'Student' }
      ],
      lines: [
        { participant: 'Mai', text: "Hey Duc, do you have the PDF version of the Macroeconomics textbook?", translation: "Đức ơi, bạn có file PDF giáo trình Kinh tế vĩ mô không?" },
        { participant: 'Duc', text: "I do! I also have handwritten summary notes from the lecturer's review session.", translation: "Mình có nè! Mình còn có cả tập ghi chép tóm tắt bài giảng của thầy buổi ôn tập nữa." },
        { participant: 'Mai', text: "Could you AirDrop them to me? I can share my practice quiz flashcards in return!", translation: "Bạn gửi qua AirDrop cho mình được không? Đổi lại mình chia sẻ bộ thẻ ghi nhớ câu hỏi trắc nghiệm của mình cho!" },
        { participant: 'Duc', text: "Deal! Let me send over the folder right now.", translation: "Chốt luôn! Để mình gửi nguyên thư mục qua ngay đây." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Borrowing a Pen in Lecture Hall',
      participants: [
        { name: 'Khoa', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Khoa', role: 'Student' },
        { name: 'Son', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Son', role: 'Student' }
      ],
      lines: [
        { participant: 'Khoa', text: "Spare pen? Mine just died.", translation: "Có dư cây bút nào không? Bút tớ vừa hết mực." },
        { participant: 'Son', text: "Here, take the blue gel pen.", translation: "Nè, lấy cây bút gel xanh này đi." },
        { participant: 'Khoa', text: "Lifesaver! Give it back right after class.", translation: "Cứu tinh của đời tôi! Hết tiết tớ trả lại liền nha." },
        { participant: 'Son', text: "Keep it, got three more in my bag.", translation: "Cứ giữ lấy mà dùng, balo tớ còn 3 cây lận." }
      ]
    }
  ],

  'student-05': [
    {
      type: 'pair',
      school: 'business',
      title: 'Formal Rescheduling Request with Course Coordinator',
      participants: [
        { name: 'Dr. Adams', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Adams', role: 'Coordinator' },
        { name: 'Bich', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bich', role: 'Student' }
      ],
      lines: [
        { participant: 'Bich', text: "Good morning, Dr. Adams. I am writing to politely enquire about an unavoidable exam timetable conflict.", translation: "Kính chào Tiến sĩ Adams. Em xin phép liên hệ về sự cố trùng lịch thi bất khả kháng trong thời gian biểu ạ." },
        { participant: 'Dr. Adams', text: "Please state the two conflicting examination modules and their respective time slots, Bich.", translation: "Em hãy nêu rõ tên hai học phần bị trùng lịch thi và khung giờ tương ứng nhé Bich." },
        { participant: 'Bich', text: "Both Advanced Microeconomics and Data Analysis are currently timetabled for Monday at 9:00 AM.", translation: "Dạ cả hai môn Kinh tế vi mô nâng cao và Phân tích dữ liệu đều đang bị xếp lịch vào sáng thứ Hai lúc 9 giờ ạ." },
        { participant: 'Dr. Adams', text: "Thank you for bringing this to our attention. I will reassign your Data Analysis slot to the supplementary session on Thursday.", translation: "Cảm ơn em đã phản ánh. Thầy sẽ điều chỉnh ca thi Phân tích dữ liệu của em sang ca bổ sung vào sáng thứ Năm nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Comparing Semester Schedules and Deadlines',
      participants: [
        { name: 'Thang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Thang', role: 'Student' },
        { name: 'Linh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Linh', role: 'Student' }
      ],
      lines: [
        { participant: 'Thang', text: "Linh, how does your timetable look this semester? Do you have free mornings on Fridays?", translation: "Linh ơi, lịch học kỳ này của bạn thế nào? Sáng thứ Sáu bạn có rảnh không?" },
        { participant: 'Linh', text: "Friday mornings are completely free! But Mondays and Wednesdays are totally packed from 8 to 5.", translation: "Sáng thứ Sáu mình rảnh hoàn toàn luôn! Cơ mà thứ Hai với thứ Tư thì kín lịch từ 8 giờ sáng tới 5 giờ chiều." },
        { participant: 'Thang', text: "Same here. We should prioritize working on our group project on Friday mornings to beat the mid-term deadline.", translation: "Mình cũng vậy nè. Tụi mình nên ưu tiên làm bài tập nhóm vào sáng thứ Sáu để kịp hạn chót giữa kỳ nhé." },
        { participant: 'Linh', text: "Agreed. Let's block out two hours every Friday at the study hall.", translation: "Nhất trí. Cứ chốt hai tiếng mỗi sáng thứ Sáu ở phòng tự học nha." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Last-minute Deadline Panic',
      participants: [
        { name: 'Khang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Khang', role: 'Friend' },
        { name: 'Tri', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tri', role: 'Friend' }
      ],
      lines: [
        { participant: 'Khang', text: "Yo, essay due tonight at midnight, right?", translation: "Ê, bài luận hạn chót nửa đêm nay đúng không?" },
        { participant: 'Tri', text: "11:59 PM sharp! How many pages you got?", translation: "Đúng 11h59 đêm! Viết được mấy trang rồi?" },
        { participant: 'Khang', text: "Barely two. Cramming at the library now.", translation: "Mới được hai trang à. Đang cắm cọc thư viện cày đây." },
        { participant: 'Tri', text: "Order coffee and speed-type. You got this!", translation: "Gọi cà phê rồi gõ nhanh lên. Kịp mà lo gì!" }
      ]
    }
  ],

  'student-06': [
    {
      type: 'pair',
      school: 'business',
      title: 'Raising Hand to Ask Professor for Conceptual Clarification',
      participants: [
        { name: 'Professor Sterling', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ProfSterling', role: 'Lecturer' },
        { name: 'Minh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MinhHand', role: 'Student' }
      ],
      lines: [
        { participant: 'Minh', text: "Excuse me, Professor Sterling. Could you please clarify the distinction between supervised and unsupervised learning on slide twelve?", translation: "Thưa Giáo sư Sterling, thầy có thể giải thích rõ hơn sự khác biệt giữa học có giám sát và không giám sát ở slide số 12 được không ạ?" },
        { participant: 'Professor Sterling', text: "An insightful question, Minh. In supervised learning, the training dataset contains labeled target outputs, whereas unsupervised models uncover latent data structures independently.", translation: "Một câu hỏi rất hay, Minh. Trong học có giám sát, tập dữ liệu huấn luyện có chứa nhãn đầu ra mục tiêu, trong khi mô hình không giám sát tự khám phá các cấu trúc dữ liệu tiềm ẩn." },
        { participant: 'Minh', text: "Thank you, Professor. That clarifies why clustering algorithms require no pre-assigned ground truth labels.", translation: "Em cảm ơn thầy ạ. Điều này làm rõ lý do tại sao các thuật toán phân cụm không cần nhãn dữ liệu chuẩn gán sẵn từ trước." },
        { participant: 'Professor Sterling', text: "Precisely. I appreciate your active participation in class discussions.", translation: "Chính xác là như vậy. Thầy đánh giá cao tinh thần chủ động phát biểu của em trong giờ học." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Whispering to Classmate to Clarify Lecture Exercise',
      participants: [
        { name: 'Yen', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=YenClass', role: 'Student' },
        { name: 'Quang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=QuangClass', role: 'Student' }
      ],
      lines: [
        { participant: 'Yen', text: "Hey Quang, did the lecturer say we need to submit this in-class exercise before the break?", translation: "Quang ơi, thầy vừa bảo bài tập trên lớp này phải nộp trước giờ giải lao đúng không bạn?" },
        { participant: 'Quang', text: "Yeah, we have fifteen minutes to finish steps one through three with our neighbor.", translation: "Đúng rồi đó, tụi mình có 15 phút để làm xong từ bước 1 đến bước 3 cùng bạn ngồi cạnh nè." },
        { participant: 'Yen', text: "I'm slightly stuck on the second formula. Can we compare our calculation steps?", translation: "Mình đang bị cấn ở công thức thứ hai một chút. Tụi mình cùng so các bước tính toán xem sao nha?" },
        { participant: 'Quang', text: "Sure! Let me show you how I derived the standard deviation here.", translation: "Được chứ! Để mình chỉ cho bạn cách mình tính độ lệch chuẩn ở chỗ này nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Slide Check Whisper in Lecture',
      participants: [
        { name: 'Kiet', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KietWhisper', role: 'Student' },
        { name: 'Bao', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BaoWhisper', role: 'Student' }
      ],
      lines: [
        { participant: 'Kiet', text: "What slide is he explaining? Looked down for a second.", translation: "Thầy đang giảng tới slide mấy rồi? Vừa cúi đầu xuống chép bài có tí xíu." },
        { participant: 'Bao', text: "Slide 18, chapter 3 formula.", translation: "Slide 18 nha, công thức chương 3 á." },
        { participant: 'Kiet', text: "Raise hand to ask him to flip back?", translation: "Giơ tay xin thầy lùi lại một slide không?" },
        { participant: 'Bao', text: "I snapped a photo, I'll send it to you after class.", translation: "Tớ chụp màn hình rồi, lát tan tiết gửi cho nha." }
      ]
    }
  ],

  'student-07': [
    {
      type: 'pair',
      school: 'business',
      title: 'Consulting Examiner on Midterm Scoring Rubric',
      participants: [
        { name: 'Dr. Wallace', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ProfWallace', role: 'Course Examiner' },
        { name: 'Lan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LanExam', role: 'Student' }
      ],
      lines: [
        { participant: 'Lan', text: "Good morning, Dr. Wallace. Thank you for granting me time during office hours to review my midterm examination feedback.", translation: "Kính chào Tiến sĩ Wallace. Cảm ơn thầy đã dành thời gian trong giờ tiếp sinh viên để phản hồi bài thi giữa kỳ của em ạ." },
        { participant: 'Dr. Wallace', text: "Welcome, Lan. You scored highly on quantitative analysis, but question four lacked empirical citations.", translation: "Chào em Lan. Điểm phần phân tích định lượng của em rất cao, tuy nhiên câu hỏi số 4 còn thiếu các trích dẫn thực nghiệm." },
        { participant: 'Lan', text: "I understand, sir. If I strengthen the theoretical bibliography in my final paper, will that align with the faculty grading rubric?", translation: "Dạ em đã hiểu thưa thầy. Nếu em củng cố thêm danh mục tài liệu lý thuyết trong bài thi cuối kỳ, liệu đã đáp ứng đúng thang điểm đánh giá của khoa chưa ạ?" },
        { participant: 'Dr. Wallace', text: "Precisely. Emphasize peer-reviewed case studies and your final mark will reflect that rigor.", translation: "Chính xác là như vậy. Hãy chú trọng các nghiên cứu thực tế có phản biện học thuật, điểm số cuối kỳ sẽ phản ánh sự chuẩn mực đó." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Peer Reviewing Homework Solutions & Quiz Prep',
      participants: [
        { name: 'Tuan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TuanQuiz', role: 'Student' },
        { name: 'Mai', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MaiQuiz', role: 'Student' }
      ],
      lines: [
        { participant: 'Tuan', text: "Mai, how are you feeling about the multiple-choice quiz on Canvas tomorrow?", translation: "Mai ơi, bạn thấy bài trắc nghiệm trên Canvas ngày mai thế nào rồi?" },
        { participant: 'Mai', text: "I've reviewed all lecture slides twice! The trickiest part is remembering the historical economic policies.", translation: "Mình ôn lại toàn bộ slide bài giảng hai lần rồi! Phần khó nhằn nhất là nhớ các chính sách kinh tế trong quá khứ ấy." },
        { participant: 'Tuan', text: "Let's quiz each other for twenty minutes at the library so we make sure we don't drop easy points!", translation: "Tụi mình cùng đố nhau 20 phút ở thư viện đi để không bị mất điểm oan mấy câu dễ nhé!" },
        { participant: 'Mai', text: "Great idea! Let's start with the mock questions at the end of chapter four.", translation: "Ý kiến tuyệt vời! Bắt đầu từ mấy câu hỏi ôn tập cuối chương 4 nha." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Submitting Homework Right on Time',
      participants: [
        { name: 'Duc', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DucSubmit', role: 'Student' },
        { name: 'Son', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SonSubmit', role: 'Student' }
      ],
      lines: [
        { participant: 'Duc', text: "Submitted assignment on Canvas yet?", translation: "Nộp bài tập lên Canvas chưa ông bạn?" },
        { participant: 'Son', text: "Just hit submit at 11:50 PM! You?", translation: "Vừa bấm nút nộp lúc 11h50 đêm nè! Còn ông?" },
        { participant: 'Duc', text: "Got the confirmation email just now. Huge relief!", translation: "Mới nhận được email xác nhận xong. Thở phào nhẹ nhõm!" },
        { participant: 'Son', text: "Sleep time! Good job surviving this week.", translation: "Đi ngủ thôi! Chúc mừng tụi mình vượt qua tuần này ngon lành." }
      ]
    }
  ],

  'student-08': [
    {
      type: 'pair',
      school: 'business',
      title: 'Formal Capstone Milestone Planning & Task Division',
      participants: [
        { name: 'Minh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MinhLead', role: 'Team Lead' },
        { name: 'Dr. Evans', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DrEvans', role: 'Project Advisor' }
      ],
      lines: [
        { participant: 'Minh', text: "Good afternoon, Dr. Evans. Our capstone squad has established our sprint deliverables and task breakdown structure.", translation: "Kính chào Tiến sĩ Evans. Nhóm đồ án của chúng em đã thiết lập xong các đầu việc bàn giao theo sprint và cấu trúc phân công nhiệm vụ ạ." },
        { participant: 'Dr. Evans', text: "Excellent initiative, Minh. How has the team distributed research, modeling, and documentation responsibilities?", translation: "Sự chủ động rất đáng khen, Minh. Nhóm đã phân chia trách nhiệm nghiên cứu, xây dựng mô hình và viết tài liệu như thế nào?" },
        { participant: 'Minh', text: "Two members oversee dataset preprocessing, while two lead front-end prototype development, with bi-weekly code reviews.", translation: "Dạ hai bạn phụ trách tiền xử lý tập dữ liệu, hai bạn phụ trách phát triển giao diện mẫu, và nhóm họp rà soát code hai tuần một lần ạ." },
        { participant: 'Dr. Evans', text: "A robust operational structure. Proceed with sprint one and report your progress at next Monday's advisory.", translation: "Một cơ cấu vận hành rất bài bản. Các em hãy triển khai sprint 1 và báo cáo tiến độ vào buổi tư vấn sáng thứ Hai tuần tới nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Brainstorming Group Presentation Ideas at Campus Cafe',
      participants: [
        { name: 'Trang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TrangCafe', role: 'Student' },
        { name: 'Khang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KhangCafe', role: 'Student' }
      ],
      lines: [
        { participant: 'Trang', text: "Okay guys, our marketing presentation is due in ten days. How should we split the workload?", translation: "Được rồi mọi người ơi, bài thuyết trình marketing hạn chót còn 10 ngày nữa. Nhóm mình chia việc thế nào đây?" },
        { participant: 'Khang', text: "I can handle the competitor market analysis and build the survey charts if someone takes the slide design.", translation: "Mình có thể đảm nhận phần phân tích đối thủ cạnh tranh và làm biểu đồ khảo sát, nếu có bạn nhận thiết kế slide." },
        { participant: 'Trang', text: "I love creating visual slide decks on Canva! I'll take charge of the design and script rehearsal.", translation: "Mình cực thích làm slide đẹp trên Canva luôn! Mình nhận phần thiết kế với tập dượt kịch bản nhé." },
        { participant: 'Khang', text: "Awesome team synergy. Let's dump all our research links into our shared Notion workspace tonight!", translation: "Nhóm phối hợp ăn ý quá. Tối nay tụi mình cùng quăng hết link tài liệu vào không gian Notion chung nha!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Group Chat Quick Standup',
      participants: [
        { name: 'Tri', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TriChat', role: 'Teammate' },
        { name: 'Huy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HuyChat', role: 'Teammate' }
      ],
      lines: [
        { participant: 'Tri', text: "Slides 1 to 5 done! Who's adding financial charts?", translation: "Slide từ 1 đến 5 xong rồi nè! Ai gắn biểu đồ tài chính vào đấy?" },
        { participant: 'Huy', text: "Exporting from Excel now. Drop it in in 3 mins.", translation: "Đang xuất từ Excel ra đây. 3 phút nữa tớ thả vào nhé." },
        { participant: 'Tri', text: "Clean formatting please, keeping it consistent.", translation: "Chỉnh font cho sạch đẹp đồng bộ nha bồ." },
        { participant: 'Huy', text: "All set! Deck looks fire.", translation: "Xong xuôi hết rồi! Slide nhìn xịn đét luôn." }
      ]
    }
  ],

  'student-09': [
    {
      type: 'pair',
      school: 'business',
      title: 'Academic Defense Rehearsal & Feedback with Advisor',
      participants: [
        { name: 'Professor Hughes', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ProfHughes', role: 'Advisor' },
        { name: 'Quang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=QuangDefense', role: 'Presenter' }
      ],
      lines: [
        { participant: 'Quang', text: "Professor Hughes, our presentation rehearsal is prepared. May we receive your evaluation on our research narrative structure?", translation: "Kính thưa Giáo sư Hughes, buổi diễn tập thuyết trình của nhóm em đã sẵn sàng. Chúng em xin phép được lắng nghe đánh giá của thầy về mạch dẫn dắt nghiên cứu ạ?" },
        { participant: 'Professor Hughes', text: "Your empirical data visualizations are compelling, Quang. However, condense your methodology overview to allocate more time for conclusion findings.", translation: "Các biểu đồ trực quan hóa dữ liệu thực nghiệm của em rất thuyết phục, Quang. Tuy nhiên, hãy cô đọng phần tổng quan phương pháp để dành nhiều thời gian hơn cho kết luận phát hiện nghiên cứu." },
        { participant: 'Quang', text: "Understood, sir. We will trim slide four to ensure we conclude strictly within our designated twelve-minute allocation.", translation: "Dạ em đã hiểu thưa thầy. Nhóm em sẽ rút gọn slide 4 để đảm bảo kết bài đúng trong khung thời lượng 12 phút được phân bổ ạ." },
        { participant: 'Professor Hughes', text: "Good. Maintaining poise and pacing during the committee Q&A will be crucial for top honors.", translation: "Rất tốt. Giữ vững sự tự tin và nhịp độ khi trả lời câu hỏi của hội đồng sẽ là yếu tố then chốt để đạt kết quả xuất sắc." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Timing Slide Transitions and Delivery with Presentation Partner',
      participants: [
        { name: 'Lan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LanPresent', role: 'Student' },
        { name: 'Tuan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TuanPresent', role: 'Student' }
      ],
      lines: [
        { participant: 'Lan', text: "Tuan, let's run through our slides with a stopwatch once more before class starts.", translation: "Tuấn ơi, tụi mình cùng bấm giờ chạy thử bài thuyết trình lần nữa trước khi vào lớp đi." },
        { participant: 'Tuan', text: "Sounds good. Remember that I will hand over the clicker to you right when we transition to the case study.", translation: "Được đó. Nhớ là mình sẽ chuyển con chuột bấm slide cho bạn ngay khi chuyển sang phần nghiên cứu tình huống nhé." },
        { participant: 'Lan', text: "Got it! And if the professor interrupts with a question, let's pause calmly instead of rushing.", translation: "Nhớ rồi! Với lại nếu thầy cô có ngắt lời đặt câu hỏi, tụi mình cứ bình tĩnh dừng lại lắng nghe chứ đừng nói vội nha." },
        { participant: 'Tuan', text: "Exactly. We practiced thoroughly, we're going to ace this presentation!", translation: "Chuẩn luôn. Tụi mình đã luyện tập kỹ càng rồi, kiểu gì cũng đạt điểm cao cho xem!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Podium Clicker Check',
      participants: [
        { name: 'Son', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SonClick', role: 'Presenter' },
        { name: 'Khoa', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KhoaClick', role: 'Presenter' }
      ],
      lines: [
        { participant: 'Son', text: "Clicker working on the podium laptop?", translation: "Con chuột bấm chuyển slide trên laptop bục giảng chạy ngon không?" },
        { participant: 'Khoa', text: "Tested it, slides flipping smooth.", translation: "Thử rồi nha, chuyển slide mượt mà lắm." },
        { participant: 'Son', text: "Next group after this one is us. Nervous?", translation: "Hết nhóm này là tới tụi mình rồi đó. Run không?" },
        { participant: 'Khoa', text: "A little, but we got this. Let's do it!", translation: "Hơi hồi hộp tí, nhưng tụi mình làm được mà. Chiến thôi!" }
      ]
    }
  ],

  'student-10': [
    {
      type: 'pair',
      school: 'business',
      title: 'Consulting Head Librarian on Archival Research Databases',
      participants: [
        { name: 'Dr. Warren', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=WarrenLib', role: 'Head Librarian' },
        { name: 'Bich', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BichLib', role: 'Senior Student' }
      ],
      lines: [
        { participant: 'Bich', text: "Good morning, Dr. Warren. I am conducting an empirical study on renewable energy policies and need guidance on archival citations.", translation: "Kính chào Tiến sĩ Warren. Em đang thực hiện nghiên cứu thực nghiệm về chính sách năng lượng tái tạo và cần được hướng dẫn tra cứu lưu trữ ạ." },
        { participant: 'Dr. Warren', text: "Welcome, Bich. We subscribe to JSTOR and ScienceDirect, where full-text peer-reviewed journals are cataloged.", translation: "Chào em Bich. Thư viện trường mình có liên kết với JSTOR và ScienceDirect, nơi các tạp chí khoa học có phản biện đều được lập mục lục đầy đủ." },
        { participant: 'Bich', text: "How do I request physical interlibrary loans if a specific volume is currently checked out?", translation: "Dạ nếu một ấn bản sách in hiện đã có người mượn, em làm thế nào để yêu cầu mượn liên thư viện ạ?" },
        { participant: 'Dr. Warren', text: "Submit the ISBN via our online catalog portal, and our staff will reserve an archival copy within forty-eight hours.", translation: "Em hãy nhập mã ISBN qua cổng mục lục trực tuyến, thủ thư sẽ giữ bản sao lưu trữ cho em trong vòng 48 giờ nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Locating Reserved Reading Books and Silent Study Carrels',
      participants: [
        { name: 'Hoang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HoangStudy', role: 'Student' },
        { name: 'Yen', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=YenStudy', role: 'Student' }
      ],
      lines: [
        { participant: 'Yen', text: "Hoang, the ground floor is so crowded today! Do you know where the silent study zone is?", translation: "Hoàng ơi, tầng trệt hôm nay đông người quá! Bạn biết khu vực tự học yên tĩnh ở đâu không?" },
        { participant: 'Hoang', text: "Take the stairs to the third floor! It's an absolute silent floor with private cubicles and power outlets.", translation: "Đi cầu thang lên tầng 3 đi bạn! Đó là tầng giữ im lặng tuyệt đối, có từng ô bàn riêng và ổ cắm điện đầy đủ luôn." },
        { participant: 'Yen', text: "Awesome. Do we need our student card to check out books from the reserve shelf?", translation: "Tuyệt quá. Mượn sách giáo trình ở kệ sách lưu hành nội bộ có cần quẹt thẻ sinh viên không bạn?" },
        { participant: 'Hoang', text: "Yeah, just scan your digital barcode at the self-checkout scanner by the exit.", translation: "Có nha, chỉ cần quét mã vạch điện tử ở máy tự mượn sách ngay gần lối ra là xong à." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Library Seat Hold',
      participants: [
        { name: 'Binh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BinhSeat', role: 'Student' },
        { name: 'Dung', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DungSeat', role: 'Student' }
      ],
      lines: [
        { participant: 'Binh', text: "Step away 5 mins for water. Watch my laptop?", translation: "Tớ đi lấy nước 5 phút nha. Coi chừng giùm cái laptop với?" },
        { participant: 'Dung', text: "Sure, leave it here. Grab me a napkin if you see one.", translation: "Yên tâm cứ để đó. Thấy khăn giấy thì cầm giùm tớ một tờ với nhé." },
        { participant: 'Binh', text: "Back in a flash!", translation: "Chạy đi rồi về liền đây!" },
        { participant: 'Dung', text: "No rush, holding your chair.", translation: "Không phải vội đâu, tớ giữ ghế cho." }
      ]
    }
  ],

  'student-11': [
    {
      type: 'pair',
      school: 'business',
      title: 'Requesting Academic Recommendation Letter During Office Hours',
      participants: [
        { name: 'Professor Hughes', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ProfHughesOffice', role: 'Mentor' },
        { name: 'Kiet', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KietOffice', role: 'Applicant' }
      ],
      lines: [
        { participant: 'Kiet', text: "Good afternoon, Professor Hughes. I am deeply grateful for your continuous guidance in our econometrics seminar.", translation: "Kính chào Giáo sư Hughes. Em vô cùng biết ơn sự hướng dẫn tận tình của thầy trong chuyên đề kinh tế lượng vừa qua ạ." },
        { participant: 'Professor Hughes', text: "It has been a pleasure having you in class, Kiet. What brings you to office hours today?", translation: "Rất vui được có em trong lớp, Kiet. Hôm nay có điều gì đưa em đến giờ tiếp sinh viên vậy?" },
        { participant: 'Kiet', text: "I am applying for a graduate research scholarship and was hoping you might consider authoring a letter of recommendation.", translation: "Dạ em đang nộp hồ sơ xin học bổng nghiên cứu sau đại học, và em rất hy vọng thầy có thể xem xét viết giúp em một lá thư giới thiệu ạ." },
        { participant: 'Professor Hughes', text: "I would be glad to support your application. Email me your updated curriculum vitae and statement of intent by Friday.", translation: "Thầy rất sẵn lòng hỗ trợ hồ sơ của em. Hãy gửi email cho thầy bản CV cập nhật và bài luận mục đích học tập trước thứ Sáu nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Asking Lecturer for Informal Feedback on Essay Draft',
      participants: [
        { name: 'Mai', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MaiMail', role: 'Student' },
        { name: 'Dr. Evans', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=EvansMail', role: 'Lecturer' }
      ],
      lines: [
        { participant: 'Mai', text: "Hi Dr. Evans! Do you have a few spare minutes after class? I sent an email with my essay outline yesterday.", translation: "Chào thầy Evans ạ! Thầy có rảnh vài phút sau giờ học không ạ? Hôm qua em có gửi email bản dàn ý bài luận của em." },
        { participant: 'Dr. Evans', text: "Hello Mai! Yes, I reviewed your thesis statement. Your argumentative stance is strong and well-focused.", translation: "Chào Mai! Thầy có xem qua luận điểm chính của em rồi. Lập luận của em rất sắc bén và đi đúng trọng tâm." },
        { participant: 'Mai', text: "Thank you so much! Should I expand more on the policy implications in section three?", translation: "Em cảm ơn thầy nhiều ạ! Em có nên mở rộng thêm phần tác động chính sách ở phần 3 không thầy?" },
        { participant: 'Dr. Evans', text: "Just two paragraphs will suffice. Keep your writing concise and submit your full draft next week.", translation: "Chỉ cần thêm khoảng hai đoạn là vừa vặn. Hãy giữ văn phong cô đọng và nộp bản thảo hoàn chỉnh vào tuần tới nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Checking If Office Hours Are Open',
      participants: [
        { name: 'Thang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ThangDoor', role: 'Student' },
        { name: 'Duc', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DucDoor', role: 'Student' }
      ],
      lines: [
        { participant: 'Thang', text: "Prof in his office right now?", translation: "Thầy có đang ở trong văn phòng khoa không ông?" },
        { participant: 'Duc', text: "Yeah, door is half-open. Only one student ahead of you.", translation: "Có nha, cửa đang hé mở. Chỉ có một bạn sinh viên xếp hàng trước ông thôi." },
        { participant: 'Thang', text: "Running up the stairs now! Thanks for checking.", translation: "Đang chạy bộ lên cầu thang nè! Cảm ơn ông đã ngó giùm nhé." },
        { participant: 'Duc', text: "Knock softly before walking in.", translation: "Nhớ gõ cửa nhẹ trước khi vào nha." }
      ]
    }
  ],

  'student-12': [
    {
      type: 'pair',
      school: 'business',
      title: 'Formal Welcome Briefing for Inbound International Exchange Students',
      participants: [
        { name: 'Director Martinez', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MartinezGlobal', role: 'Global Affairs Director' },
        { name: 'Minh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MinhGlobal', role: 'Student Ambassador' }
      ],
      lines: [
        { participant: 'Director Martinez', text: "Good morning, Minh. As president of our university international student liaison committee, how are the inbound delegates settling in?", translation: "Chào buổi sáng, Minh. Với vai trò trưởng ban liên lạc sinh viên quốc tế, các đại biểu du học sinh đã ổn định sinh hoạt chưa em?" },
        { participant: 'Minh', text: "Director Martinez, we welcomed twenty-five exchange scholars yesterday and completed their residence registrations and campus badges.", translation: "Thưa Giám đốc Martinez, hôm qua chúng em đã đón tiếp 25 bạn sinh viên trao đổi và hoàn tất thủ tục đăng ký tạm trú cũng như phát thẻ sinh viên ạ." },
        { participant: 'Director Martinez', text: "Splendid work. Ensure the cultural adaptation workshop and city tour proceed with proper health and safety compliance.", translation: "Làm tốt lắm. Hãy đảm bảo buổi tọa đàm hòa nhập văn hóa và chuyến tham quan thành phố diễn ra an toàn và chu đáo nhé." },
        { participant: 'Minh', text: "Certainly, sir. Our local student buddies are committed to making them feel at home.", translation: "Dạ chắc chắn rồi thưa thầy. Đội ngũ bạn đồng hành sinh viên Việt Nam cam kết sẽ giúp các bạn cảm thấy gần gũi như ở nhà." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Introducing Local Street Food & Campus Life to Exchange Buddy',
      participants: [
        { name: 'Lan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LanBuddy', role: 'Local Buddy' },
        { name: 'Chloe', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ChloeExchange', role: 'Exchange Student' }
      ],
      lines: [
        { participant: 'Lan', text: "Chloe, welcome to Vietnam! Have you tried any authentic Vietnamese food since you landed?", translation: "Chloe ơi, chào mừng bạn đến Việt Nam nhé! Từ lúc hạ cánh đến giờ bạn đã thử món ăn Việt chính gốc nào chưa?" },
        { participant: 'Chloe', text: "I tried Pho at the airport, but I really want to experience the local student street food around campus!", translation: "Mình có ăn phở ở sân bay rồi, nhưng mình cực kỳ muốn trải nghiệm ẩm thực đường phố sinh viên quanh trường nè!" },
        { participant: 'Lan', text: "There's an amazing Banh Mi and iced peach tea spot right by Gate 2. Let's go there after our morning seminar!", translation: "Có một quán bánh mì với trà đào siêu ngon ngay Cổng 2 trường mình. Tan tiết hội thảo sáng nay tụi mình ghé liền nha!" },
        { participant: 'Chloe', text: "That sounds wonderful! I'm so excited to learn more about student life here with you.", translation: "Nghe tuyệt quá! Mình rất hào hứng được cùng bạn tìm hiểu về đời sống sinh viên nơi đây." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Campus Meetup Text with Exchange Buddy',
      participants: [
        { name: 'Huy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HuyText', role: 'Buddy' },
        { name: 'Kenji', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KenjiText', role: 'Exchange Peer' }
      ],
      lines: [
        { participant: 'Huy', text: "Grab iced coffee by the lake before afternoon class?", translation: "Uống cà phê đá bên bờ hồ trước giờ học buổi chiều không bồ?" },
        { participant: 'Kenji', text: "Yes! Dying to try Vietnamese milk coffee with ice.", translation: "Đi chứ! Đang thèm thử cà phê sữa đá Việt Nam quá chừng nè." },
        { participant: 'Huy', text: "Meet at the central fountain in 10 mins.", translation: "Gặp ở đài phun nước trung tâm sau 10 phút nha." },
        { participant: 'Kenji', text: "On my way now!", translation: "Đang đi tới liền đây!" }
      ]
    }
  ],

  'student-13': [
    {
      type: 'pair',
      school: 'business',
      title: 'Student Union Club Charter & Event Budget Defense',
      participants: [
        { name: 'Dean Richardson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=RichardsonDean', role: 'Faculty Dean' },
        { name: 'Hoang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HoangClub', role: 'Club President' }
      ],
      lines: [
        { participant: 'Hoang', text: "Good afternoon, Dean Richardson. On behalf of the University Volunteer Society, I present our annual charity initiative proposal.", translation: "Kính chào Thầy Trưởng khoa Richardson. Đại diện cho Hội Tình nguyện Sinh viên trường, em xin phép đệ trình đề án hoạt động từ thiện thường niên ạ." },
        { participant: 'Dean Richardson', text: "We welcome student leadership, Hoang. How does your society plan to allocate funding across logistics and community impact?", translation: "Thầy luôn ủng hộ năng lực lãnh đạo của sinh viên, Hoang. Hội dự kiến phân bổ kinh phí thế nào giữa khâu hậu cần và tác động cộng đồng?" },
        { participant: 'Hoang', text: "Seventy percent of our budget directly provides school supplies for rural classrooms, audited under university financial guidelines.", translation: "Dạ 70% ngân sách sẽ trực tiếp trang bị đồ dùng học tập cho học sinh vùng khó khăn, được kiểm toán theo quy chế tài chính của trường ạ." },
        { participant: 'Dean Richardson', text: "A commendable proposal. The faculty board hereby approves your extracurricular event grant.", translation: "Một đề án rất đáng khen ngợi. Ban chủ nhiệm khoa chính thức phê duyệt khoản tài trợ hoạt động ngoại khóa này cho các em." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Joining the University Acoustic Music Club at Club Fair',
      participants: [
        { name: 'Trang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TrangClub', role: 'Club Member' },
        { name: 'Son', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SonClub', role: 'Student' }
      ],
      lines: [
        { participant: 'Son', text: "Hi Trang! I saw your acoustic club's live performance at the orientation fair. Can beginners audition too?", translation: "Chào Trang! Mình thấy tiết mục biểu diễn của CLB Acoustic tại hội chợ định hướng rồi. Người mới tập chơi có được ứng tuyển không bạn?" },
        { participant: 'Trang', text: "Absolutely! We have workshops every Thursday for guitar, vocals, and cajon. Passion matters way more than experience!", translation: "Chắc chắn rồi bạn ơi! Tụi mình có các buổi tập huấn vào thứ Năm hằng tuần về guitar, hát và trống cajon. Đam mê quan trọng hơn kinh nghiệm nhiều!" },
        { participant: 'Son', text: "That's so encouraging. How do I fill out the registration form?", translation: "Nghe có động lực ghê. Làm sao để mình điền đơn đăng ký tham gia vậy?" },
        { participant: 'Trang', text: "Just scan this QR code on our standee! Auditions are next Saturday, super chill and friendly.", translation: "Bạn chỉ cần quét mã QR trên bảng standee này thôi! Buổi giao lưu thử giọng vào thứ Bảy tuần tới, thân thiện và thoải mái lắm nha." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Fast Club Rehearsal Ping',
      participants: [
        { name: 'Tri', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TriRehearse', role: 'Club Leader' },
        { name: 'Bao', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BaoRehearse', role: 'Member' }
      ],
      lines: [
        { participant: 'Tri', text: "Club rehearsal tonight still on at 6 PM?", translation: "Buổi tập CLB tối nay vẫn diễn ra lúc 6 giờ đúng không?" },
        { participant: 'Bao', text: "Room 204 Student Center! Bring your guitar tuner.", translation: "Phòng 204 Nhà Văn hóa Sinh viên nha! Nhớ mang đồ chỉnh dây đàn theo." },
        { participant: 'Tri', text: "Got it in my backpack. See you there!", translation: "Bỏ sẵn trong balo rồi. Hẹn gặp tối nay!" },
        { participant: 'Bao', text: "Be on time, ordering pizza afterwards!", translation: "Đúng giờ nha, tập xong tụi mình gọi pizza ăn đó!" }
      ]
    }
  ],

  'student-14': [
    {
      type: 'pair',
      school: 'business',
      title: 'Career Strategy & Graduate Trainee Consultation with Placement Director',
      participants: [
        { name: 'Director Cole', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DirectorCole', role: 'Placement Director' },
        { name: 'Minh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MinhCareer', role: 'Senior' }
      ],
      lines: [
        { participant: 'Minh', text: "Good afternoon, Director Cole. As I enter my final academic year, I would appreciate your guidance regarding graduate trainee recruitment pathways.", translation: "Kính chào Giám đốc Cole. Chuẩn bị bước vào năm học cuối, em rất mong nhận được lời khuyên của thầy về các lộ trình tuyển dụng quản trị viên tập sự ạ." },
        { participant: 'Director Cole', text: "Welcome, Minh. Multinational technology firms actively seek candidates possessing both strong software fundamentals and collaborative project portfolios.", translation: "Chào em Minh. Các tập đoàn công nghệ đa quốc gia luôn tích cực tìm kiếm ứng viên vừa có nền tảng phần mềm vững chắc vừa có hồ sơ dự án nhóm thực tế." },
        { participant: 'Minh', text: "I have completed two capstone repositories on GitHub and maintained a top-tier GPA. How should I tailor my executive summary?", translation: "Dạ em đã hoàn thành hai dự án đồ án trên GitHub và duy trì điểm trung bình xuất sắc. Em nên điều chỉnh bản tóm tắt hồ sơ năng lực thế nào ạ?" },
        { participant: 'Director Cole', text: "Highlight measurable system impacts and leadership roles. I will connect you with our corporate alumni mentoring network.", translation: "Hãy làm nổi bật các chỉ số hiệu quả đo lường được và vai trò dẫn dắt nhóm. Thầy sẽ kết nối em với mạng lưới cựu sinh viên doanh nghiệp nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Comparing Tech Internship Offers & Post-Grad Plans with Peer',
      participants: [
        { name: 'Quang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=QuangIntern', role: 'Student' },
        { name: 'Thang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ThangIntern', role: 'Student' }
      ],
      lines: [
        { participant: 'Quang', text: "Thang! Did you hear back from the fintech company about the summer internship?", translation: "Thắng ơi! Bạn đã nhận được phản hồi từ công ty công nghệ tài chính về vị trí thực tập hè chưa?" },
        { participant: 'Thang', text: "Yes! They sent an official offer letter yesterday for the junior developer track!", translation: "Nhận rồi nè! Hôm qua họ vừa gửi thư mời nhận việc chính thức cho vị trí lập trình viên tập sự á!" },
        { participant: 'Quang', text: "Congratulations man, that's huge! What are your five-year career aspirations after graduation?", translation: "Chúc mừng bạn nhé, xịn thật sự luôn! Mục tiêu sự nghiệp 5 năm sau tốt nghiệp của bạn thế nào?" },
        { participant: 'Thang', text: "I want to master cloud infrastructure first, then lead engineering teams on scalable consumer apps.", translation: "Mình muốn làm chủ hạ tầng đám mây trước, rồi sau đó dẫn dắt đội ngũ kỹ thuật phát triển các ứng dụng quy mô lớn." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Fast Resume Submission Hype Text',
      participants: [
        { name: 'Khang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KhangApp', role: 'Senior' },
        { name: 'Duc', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DucApp', role: 'Senior' }
      ],
      lines: [
        { participant: 'Khang', text: "Just submitted my internship application to Shopee!", translation: "Vừa nộp đơn ứng tuyển thực tập bên Shopee xong rồi nè!" },
        { participant: 'Duc', text: "Fingers crossed bro! When's the technical interview?", translation: "Cầu chúc may mắn nha! Khi nào có lịch phỏng vấn kỹ thuật thế?" },
        { participant: 'Khang', text: "Coding assessment next Tuesday. Time to grind LeetCode!", translation: "Bài kiểm tra thuật toán vào thứ Ba tới. Tới lúc cày đề thôi!" },
        { participant: 'Duc', text: "You're gonna crush it! Let's prep together.", translation: "Ông kiểu gì cũng qua mà! Tối luyện chung nha." }
      ]
    }
  ],

  'student-15': [
    {
      type: 'pair',
      school: 'business',
      title: 'Reporting LMS Server Outage & Online Exam Proctoring Glitch',
      participants: [
        { name: 'Director Sterling', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SterlingIT', role: 'IT Academic Dean' },
        { name: 'Lan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LanIT', role: 'Student Representative' }
      ],
      lines: [
        { participant: 'Lan', text: "Good morning, Director Sterling. I am reporting an unexpected system timeout on our university Canvas LMS portal during this morning's online test session.", translation: "Kính chào Giám đốc Sterling. Em xin phép báo cáo sự cố sập kết nối máy chủ trên cổng Canvas LMS của trường trong ca thi trực tuyến sáng nay ạ." },
        { participant: 'Director Sterling', text: "Thank you for alerting us promptly, Lan. Did the automated proctoring software disconnect before students could submit their answer scripts?", translation: "Cảm ơn em Lan đã thông báo kịp thời. Phần mềm giám thị tự động có bị ngắt kết nối trước khi sinh viên kịp nộp bài không em?" },
        { participant: 'Lan', text: "Yes, sir. Several cohorts received fatal connection socket errors around 9:45 AM.", translation: "Dạ có thưa thầy. Rất nhiều bạn cùng khóa nhận thông báo lỗi ngắt cổng kết nối vào khoảng 9 giờ 45 phút ạ." },
        { participant: 'Director Sterling', text: "Our central IT infrastructure team is rebooting the proxy clusters. An official grace period and re-testing protocol will be dispatched immediately.", translation: "Đội ngũ hạ tầng CNTT đang khởi động lại cụm máy chủ. Văn phòng sẽ ban hành thông báo gia hạn thời gian và quy chế thi lại ngay lập tức." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Troubleshooting Mic Echo & Screen Sharing on Zoom Tutorial',
      participants: [
        { name: 'Tuan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TuanZoom', role: 'Student' },
        { name: 'Mai', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MaiZoom', role: 'Student' }
      ],
      lines: [
        { participant: 'Tuan', text: "Mai, can you hear me clearly? I think my microphone has a loud background echo on Zoom.", translation: "Mai ơi bạn nghe rõ mình nói không? Mình thấy micro của mình hình như bị vang tiếng trên Zoom thì phải." },
        { participant: 'Mai', text: "It was buzzing a second ago, but now you sound crisp! Can you try sharing your slide deck screen?", translation: "Nãy hơi rè một tí, giờ nghe trong trẻo rồi nè! Bạn thử chia sẻ màn hình slide thuyết trình xem được chưa?" },
        { participant: 'Tuan', text: "Clicking share screen right now. Is the presentation showing up in full screen for everyone?", translation: "Mình đang bấm nút chia sẻ màn hình đây. Mọi người đã thấy bài thuyết trình hiện toàn màn hình chưa?" },
        { participant: 'Mai', text: "Yes, perfectly visible! Let me mute my mic while you present the introductory slides.", translation: "Thấy rõ nét mượt mà rồi nha! Để mình tắt mic để bạn bắt đầu trình bày phần mở đầu nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Fast Zoom Unmute Ping in Online Class',
      participants: [
        { name: 'Huy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HuyMute', role: 'Student' },
        { name: 'Bao', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BaoMute', role: 'Student' }
      ],
      lines: [
        { participant: 'Huy', text: "Yo, you're on mute! Lecturer called your name.", translation: "Ê ông ơi, đang tắt mic kìa! Thầy vừa gọi tên ông đó." },
        { participant: 'Bao', text: "Shoot! Unmuting right now, thanks!", translation: "Chết cha! Bật mic lên liền đây, cảm ơn ông nhé!" },
        { participant: 'Huy', text: "Turn on camera too if possible.", translation: "Bật luôn cả camera nếu được nha." },
        { participant: 'Bao', text: "Done, answering question two now!", translation: "Xong rồi, đang trả lời câu hỏi số 2 đây!" }
      ]
    }
  ],

  'student-16': [
    {
      type: 'pair',
      school: 'business',
      title: 'Confidential Consultation at Campus Well-being Center on Exam Burnout',
      participants: [
        { name: 'Dr. Reed', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DrReed', role: 'Counselor' },
        { name: 'Yen', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=YenWellbeing', role: 'Student' }
      ],
      lines: [
        { participant: 'Yen', text: "Good afternoon, Dr. Reed. I scheduled this appointment because the simultaneous demands of final exams and thesis deadlines have caused severe anxiety and sleep deprivation.", translation: "Kính chào Tiến sĩ Reed. Em đặt lịch hẹn này vì áp lực thi cử cuối kỳ cùng hạn nộp khóa luận dồn dập khiến em bị lo âu và thiếu ngủ trầm trọng ạ." },
        { participant: 'Dr. Reed', text: "Thank you for taking this proactive step, Yen. Academic burnout is very real, and your mental well-being must always take precedence.", translation: "Cảm ơn em Yen đã chủ động tìm đến tư vấn. Hiện tượng kiệt sức học đường rất phổ biến, và sức khỏe tinh thần của em luôn phải được ưu tiên hàng đầu." },
        { participant: 'Yen', text: "I often feel overwhelmed and find it difficult to maintain concentration throughout the day.", translation: "Dạ em thường xuyên cảm thấy quá tải và rất khó duy trì sự tập trung trong suốt cả ngày ạ." },
        { participant: 'Dr. Reed', text: "Let us construct a balanced cognitive schedule incorporating structured rest intervals, and I will issue an advisory note to support your exam arrangements.", translation: "Chúng ta hãy cùng thiết lập một lịch sinh hoạt khoa học có các quãng nghỉ hợp lý, và cô sẽ gửi giấy tư vấn hỗ trợ cho quá trình thi của em nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Encouraging a Burned-out Friend to Take a Relaxing Walk',
      participants: [
        { name: 'Duc', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DucWalk', role: 'Friend' },
        { name: 'Quang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=QuangWalk', role: 'Friend' }
      ],
      lines: [
        { participant: 'Duc', text: "Quang, you've been staring at that code repository for six hours straight without touching your lunch!", translation: "Quang ơi, bạn ngồi dán mắt vào màn hình máy tính suốt 6 tiếng liền mà chưa thèm đụng vào hộp cơm trưa kìa!" },
        { participant: 'Quang', text: "I know, but if I don't finish this algorithm debug today, I feel like I'm falling hopelessly behind.", translation: "Mình biết chứ, nhưng nếu hôm nay không sửa xong lỗi thuật toán này, mình cứ có cảm giác bị tụt lại phía sau ấy." },
        { participant: 'Duc', text: "Taking a twenty-minute walk around the campus lake will actually refresh your brain. Come on, my treat for milk tea!", translation: "Đi dạo 20 phút quanh bờ hồ trường sẽ giúp đầu óc bạn thông thoáng hơn nhiều á. Đi thôi, mình bao ly trà sữa!" },
        { participant: 'Quang', text: "You're right. Pushing through exhaustion isn't helping. Let me shut my laptop for a bit.", translation: "Bạn nói đúng. Cố quá lúc kiệt sức cũng chẳng giải quyết được gì. Để mình gập máy lại nghỉ xíu." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick De-stress Vent Between Study Buddies',
      participants: [
        { name: 'Mai', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MaiVent', role: 'Student' },
        { name: 'Lan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LanVent', role: 'Student' }
      ],
      lines: [
        { participant: 'Mai', text: "Brain is completely fried. Need a 10-minute break.", translation: "Đầu óc muốn bốc khói luôn rồi. Cần nghỉ ngơi 10 phút gấp." },
        { participant: 'Lan', text: "Step outside the library! Fresh air does wonders.", translation: "Bước ra ngoài sảnh thư viện đi bạn ơi! Hít thở không khí trong lành là tỉnh liền." },
        { participant: 'Mai', text: "Grabbing a matcha latte at the kiosk.", translation: "Đang đi mua ly matcha latte ở quầy nè." },
        { participant: 'Lan', text: "Get one for me too, sending cash on MoMo!", translation: "Mua giùm tớ một ly luôn nhé, tớ chuyển khoản MoMo liền!" }
      ]
    }
  ],

  'student-17': [
    {
      type: 'pair',
      school: 'business',
      title: 'Resolving Dormitory Curfew & Quiet Hours Infraction with Officer',
      participants: [
        { name: 'Officer Miller', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MillerOfficer', role: 'Housing Warden' },
        { name: 'Thang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ThangDorm', role: 'Resident' }
      ],
      lines: [
        { participant: 'Thang', text: "Good morning, Officer Miller. I am reporting to your office in response to the written notification regarding late arrival past dormitory curfew.", translation: "Kính chào Cán bộ Miller. Em đến gặp thầy theo thông báo bằng văn bản về việc về ký túc xá muộn sau giờ giới nghiêm ạ." },
        { participant: 'Officer Miller', text: "Our housing regulations maintain quiet hours from 11 PM to safeguard our academic living environment, Thang. What caused the delay?", translation: "Quy chế nội trú quy định giữ trật tự sau 11 giờ đêm để bảo đảm không gian học tập yên tĩnh cho sinh viên, Thang. Điều gì đã khiến em về muộn?" },
        { participant: 'Thang', text: "My university research lab run completed unexpectedly late, and I sincerely apologize for failing to pre-register late access in advance.", translation: "Dạ buổi chạy thử nghiệm tại phòng lab trường em kết thúc muộn bất ngờ, và em thành thật xin lỗi vì đã không làm đơn đăng ký về muộn từ trước ạ." },
        { participant: 'Officer Miller', text: "I accept your explanation and apology. Please submit official laboratory overtime documentation to clear your disciplinary record.", translation: "Thầy ghi nhận giải trình và lời xin lỗi của em. Hãy nộp giấy xác nhận làm thêm giờ của phòng thí nghiệm để xóa biên bản nhắc nhở nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Negotiating Dorm Kitchen Chores & Cleaning Rotation',
      participants: [
        { name: 'Khang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KhangDorm', role: 'Roommate' },
        { name: 'Son', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SonDorm', role: 'Roommate' }
      ],
      lines: [
        { participant: 'Khang', text: "Hey Son, could we set up a clear weekly cleaning rotation for our shared dorm kitchen?", translation: "Sơn ơi, tụi mình cùng lập một bảng phân công dọn dẹp hàng tuần rõ ràng cho khu bếp chung ký túc xá được không?" },
        { participant: 'Son', text: "Definitely! It got a bit messy during midterm week because everyone was cramming late.", translation: "Chắc chắn rồi! Mấy hôm thi giữa kỳ hơi bừa bộn một xíu vì ai cũng thức khuya cày bài." },
        { participant: 'Khang', text: "How about I handle taking out the trash and wiping counters on weekdays, and you take the weekend deep clean?", translation: "Hay là các ngày trong tuần mình nhận đổ rác và lau bàn bếp, còn cuối tuần bạn phụ trách tổng vệ sinh nhé?" },
        { participant: 'Son', text: "That sounds completely fair to me! Let's pin the schedule on our kitchen fridge.", translation: "Phân chia thế quá hợp lý luôn! Để mình dán thời gian biểu lên tủ lạnh nha." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Dorm Key Lockout Ping',
      participants: [
        { name: 'Tri', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TriDoor', role: 'Roommate' },
        { name: 'Huy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HuyDoor', role: 'Roommate' }
      ],
      lines: [
        { participant: 'Tri', text: "Locked out of room 302! Are you inside?", translation: "Bị kẹt ngoài cửa phòng 302 rồi! Ông có ở trong phòng không?" },
        { participant: 'Huy', text: "Wearing headphones, opening right now!", translation: "Đang đeo tai nghe, ra mở cửa liền đây!" },
        { participant: 'Tri', text: "Lifesaver, forgot keys on my desk.", translation: "May quá, để quên chìa khóa trên bàn học." },
        { participant: 'Huy', text: "Door unlocked! Don't leave keys behind next time.", translation: "Mở rồi nha! Lần sau nhớ đừng quên chìa khóa nữa đó." }
      ]
    }
  ],

  'student-18': [
    {
      type: 'pair',
      school: 'business',
      title: 'Formal Academic Debate on AI Ethics & Labor Disruption',
      participants: [
        { name: 'Professor Sterling', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SterlingDebate', role: 'Moderator' },
        { name: 'Minh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MinhDebate', role: 'Debater' }
      ],
      lines: [
        { participant: 'Minh', text: "While technological efficiency increases output, empirical evidence indicates that automated cognitive tools risk unprecedented workforce dislocation if unmitigated.", translation: "Mặc dù hiệu suất công nghệ giúp gia tăng sản lượng, các bằng chứng thực nghiệm chỉ ra rằng công cụ tự động hóa nhận thức có nguy cơ làm xáo trộn lực lượng lao động chưa từng có nếu không có chính sách can thiệp kịp thời." },
        { participant: 'Professor Sterling', text: "A compelling premise, Minh. How does your proposition address historical precedent where industrial revolutions ultimately created net-positive employment?", translation: "Một luận điểm rất thuyết phục, Minh. Vậy quan điểm của em đối chiếu thế nào với tiền lệ lịch sử khi các cuộc cách mạng công nghiệp rốt cuộc đều tạo ra số lượng việc làm ròng tích cực?" },
        { participant: 'Minh', text: "The critical difference lies in the rapid velocity of modern cognitive displacement, necessitating proactive public retrain funding.", translation: "Dạ điểm khác biệt mấu chốt nằm ở tốc độ thay thế nhận thức diễn ra quá nhanh hiện nay, đòi hỏi ngân sách công phải chủ động đầu tư đào tạo lại kỹ năng ạ." },
        { participant: 'Professor Sterling', text: "A well-structured and substantive academic argument. The affirmative bench may now respond.", translation: "Một lập luận học thuật rất chặt chẽ và sâu sắc. Xin mời đội phản biện đưa ra câu trả lời." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Debating Remote Learning vs In-Person Classes at Campus Cafe',
      participants: [
        { name: 'Lan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LanDebate', role: 'Student' },
        { name: 'Quang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=QuangDebate', role: 'Student' }
      ],
      lines: [
        { participant: 'Lan', text: "Honestly Quang, I feel like online recorded lectures give students way more flexibility to work and study at their own pace.", translation: "Thật sự đó Quang, mình thấy các bài giảng online được ghi hình lại giúp sinh viên linh hoạt hơn hẳn để vừa học vừa làm theo nhịp độ riêng." },
        { participant: 'Quang', text: "I see your point about convenience, but don't you think physical classes create irreplaceable networking and hands-on lab interaction?", translation: "Mình hiểu ý bạn về mặt tiện lợi, nhưng bạn có nghĩ rằng việc học trực tiếp trên lớp tạo ra sự gắn kết bạn bè và trải nghiệm thực hành trong phòng lab mà online không thể thay thế được không?" },
        { participant: 'Lan', text: "That's true for lab sciences! A hybrid model where lectures are recorded but tutorials are in-person would probably be the ideal balance.", translation: "Đúng thật đối với các môn khoa học thực nghiệm! Mô hình kết hợp học lý thuyết online nhưng thảo luận trực tiếp có lẽ là giải pháp cân bằng lý tưởng nhất." },
        { participant: 'Quang', text: "I totally agree with that compromise. Best of both worlds without forcing four-hour commutes.", translation: "Mình hoàn toàn đồng ý với phương án đó. Vừa tiện lợi đôi bên mà lại không phải tốn thời gian di chuyển đi lại vất vả." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Fast Hot Take Ping on Exam Format',
      participants: [
        { name: 'Duc', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DucTake', role: 'Student' },
        { name: 'Son', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SonTake', role: 'Student' }
      ],
      lines: [
        { participant: 'Duc', text: "Hot take: Open-book exams are ten times harder than memorization tests!", translation: "Quan điểm riêng: Đề thi mở tài liệu khó gấp mười lần mấy bài thi học vẹt!" },
        { participant: 'Son', text: "Facts! The questions make you apply everything under pressure.", translation: "Chuẩn đét luôn! Đề bài bắt vận dụng tổng hợp dưới áp lực thời gian." },
        { participant: 'Duc', text: "No time to flip through 500 textbook pages.", translation: "Chứ thời gian đâu mà lật 500 trang giáo trình tìm câu trả lời." },
        { participant: 'Son', text: "Better study concepts deep tonight!", translation: "Thế nên tối nay cày kỹ bản chất khái niệm thôi!" }
      ]
    }
  ],

  'student-19': [
    {
      type: 'pair',
      school: 'business',
      title: 'Thesis Methodology Verification & Similarity Index Review with Supervisor',
      participants: [
        { name: 'Dr. Bennett', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BennettThesis', role: 'Supervisor' },
        { name: 'Minh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MinhThesis', role: 'Candidate' }
      ],
      lines: [
        { participant: 'Minh', text: "Good morning, Dr. Bennett. I am finalizing my senior thesis draft and wish to verify our faculty's similarity index threshold on Turnitin.", translation: "Kính chào Tiến sĩ Bennett. Em đang hoàn thiện bản thảo khóa luận và muốn xác nhận lại ngưỡng chỉ số tương đồng Turnitin của khoa mình ạ." },
        { participant: 'Dr. Bennett', text: "Our departmental standard requires a score strictly below fifteen percent, excluding properly referenced bibliographies and statutory quotations.", translation: "Quy chuẩn của khoa yêu cầu chỉ số phải dưới 15%, không tính phần danh mục tài liệu tham khảo đúng quy cách và các trích dẫn luật định." },
        { participant: 'Minh', text: "I have adopted APA seventh edition formatting for all empirical sources and included a methodological limitations section.", translation: "Dạ em đã áp dụng quy chuẩn APA bản thứ 7 cho toàn bộ nguồn tài liệu thực nghiệm và đã bổ sung phần giới hạn phương pháp nghiên cứu ạ." },
        { participant: 'Dr. Bennett', text: "Your academic rigor is commendable. Submit your chapter through the institutional portal for official clearance.", translation: "Sự chỉn chu học thuật của em rất đáng khen. Em hãy nộp chương qua cổng trường để nhận xác nhận chính thức nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Double-Checking APA References & Bibliography with Classmate',
      participants: [
        { name: 'Phong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PhongCite', role: 'Student' },
        { name: 'Mai', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MaiCite', role: 'Student' }
      ],
      lines: [
        { participant: 'Phong', text: "Mai, before we upload our joint paper, can you help me double-check our references section?", translation: "Mai ơi, trước khi tải bài làm chung lên hệ thống, bạn kiểm tra lại giùm mình danh mục trích dẫn nguồn nhé?" },
        { participant: 'Mai', text: "Sure! Did you include DOIs for all academic journal articles we cited in chapter two?", translation: "Được chứ! Mấy bài báo khoa học mình trích ở chương 2 bạn đã gắn đủ mã định danh DOI chưa?" },
        { participant: 'Phong', text: "I just added them using Zotero! All book citations follow alphabetical author ordering as well.", translation: "Mình vừa dùng Zotero thêm vào hết rồi nè! Toàn bộ sách trích dẫn cũng xếp theo thứ tự bảng chữ cái tên tác giả rồi á." },
        { participant: 'Mai', text: "Awesome. Our bibliography looks clean and fully formatted. Ready to export to PDF!", translation: "Tuyệt vời. Danh mục tài liệu tham khảo nhìn chuẩn chỉnh và sạch sẽ lắm rồi. Sẵn sàng xuất ra PDF thôi!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Fast Citation Check Before Upload',
      participants: [
        { name: 'Kiet', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KietCite', role: 'Student' },
        { name: 'Son', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SonCite', role: 'Student' }
      ],
      lines: [
        { participant: 'Kiet', text: "Turnitin report clean on your end?", translation: "Báo cáo Turnitin bên ông ra kết quả ổn không?" },
        { participant: 'Son', text: "Similarity score 6%, completely green!", translation: "Độ tương đồng có 6% à, tích xanh lá an toàn tuyệt đối luôn!" },
        { participant: 'Kiet', text: "Sweet! Hit the final submit button on LMS.", translation: "Quá ngon! Bấm nộp bài chính thức lên LMS đi ông." },
        { participant: 'Son', text: "Submitted! We are officially done with this term.", translation: "Đã nộp! Tụi mình chính thức xong bài vở kỳ này rồi." }
      ]
    }
  ],

  'student-20': [
    {
      type: 'pair',
      school: 'business',
      title: 'Global Youth Delegate Pre-Departure Briefing with Faculty Dean',
      participants: [
        { name: 'Dean Richardson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DeanGlobal', role: 'Dean' },
        { name: 'Lan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LanGlobal', role: 'Student Delegate' }
      ],
      lines: [
        { participant: 'Lan', text: "Good morning, Dean Richardson. It is an absolute honor to represent our university as a student delegate at the upcoming Asian Academic Summit in Singapore.", translation: "Kính chào Thầy Trưởng khoa Richardson. Em vô cùng vinh dự được đại diện trường tham dự với tư cách đại biểu sinh viên tại Hội nghị Thượng đỉnh Học thuật Châu Á sắp tới tại Singapore ạ." },
        { participant: 'Dean Richardson', text: "You earned this prestigious international scholarship through merit and leadership, Lan. Have your conference itinerary and research abstracts been finalized?", translation: "Em xứng đáng nhận được suất học bổng quốc tế danh giá này nhờ thành tích và năng lực dẫn dắt của mình, Lan. Lịch trình hội nghị và bài tóm tắt nghiên cứu đã hoàn thiện chưa em?" },
        { participant: 'Lan', text: "Yes, sir. Our bilateral presentation on sustainable urban development is fully scheduled for day two.", translation: "Dạ rồi thưa thầy. Bài thuyết trình hợp tác song phương của nhóm em về phát triển đô thị bền vững được xếp lịch vào ngày thứ hai ạ." },
        { participant: 'Dean Richardson', text: "Outstanding. Carry our institution's values with pride and foster enduring academic partnerships.", translation: "Rất xuất sắc. Hãy mang niềm tự hào về ngôi trường chúng ta và xây dựng những mối quan hệ hợp tác học thuật bền vững nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Planning Exchange Semester Logistics & Visa Prep with Friend',
      participants: [
        { name: 'Quang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=QuangAbroad', role: 'Student' },
        { name: 'Sarah', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SarahAbroad', role: 'Exchange Friend' }
      ],
      lines: [
        { participant: 'Sarah', text: "Quang! How are your visa preparations coming along for your exchange semester in Seoul next month?", translation: "Quang ơi! Hồ sơ xin visa cho kỳ học trao đổi bên Seoul tháng tới của bạn chuẩn bị tới đâu rồi?" },
        { participant: 'Quang', text: "I just received my official university certificate of admission! Now I'm packing warm winter clothes and sorting out travel insurance.", translation: "Mình vừa nhận được giấy báo nhập học chính thức từ trường đại học bên đó nè! Giờ đang sắm thêm áo ấm mùa đông với mua bảo hiểm du lịch." },
        { participant: 'Sarah', text: "That's so thrilling! Make sure you join their international buddy network before landing so someone meets you at the airport.", translation: "Hồi hộp và thích thú ghê! Nhớ tham gia mạng lưới bạn đồng hành sinh viên quốc tế bên đó trước khi bay để có người đón bạn ở sân bay nhé." },
        { participant: 'Quang', text: "Great advice! I'll register on their exchange portal tonight. Can't wait for this adventure!", translation: "Lời khuyên chuẩn quá! Tối nay mình đăng ký trên cổng sinh viên trao đổi liền. Nôn nóng bắt đầu hành trình mới ghê!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Airport Departure Farewell Text',
      participants: [
        { name: 'Huy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HuyFly', role: 'Student' },
        { name: 'Bao', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BaoFly', role: 'Friend' }
      ],
      lines: [
        { participant: 'Huy', text: "Luggage checked in, heading through security now!", translation: "Ký gửi hành lý xong xuôi rồi, tớ đang qua cửa an ninh đây!" },
        { participant: 'Bao', text: "Have a safe flight to Tokyo! Send photos when you land.", translation: "Bay an toàn sang Tokyo nhé bồ! Hạ cánh nhớ gửi hình qua liền nha." },
        { participant: 'Huy', text: "Will do! Gonna miss everyone at uni.", translation: "Nhất định rồi! Sẽ nhớ mọi người ở trường lắm đấy." },
        { participant: 'Bao', text: "Make us proud! Safe travels bro!", translation: "Làm rạng danh trường mình nhé! Thượng lộ bình an!" }
      ]
    }
  ]
};
