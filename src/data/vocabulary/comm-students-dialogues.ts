// Distinct 3-tier Dialogues (Business/Academic, Casual, Super Casual) for Lessons student-01 to student-20
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
        { name: 'Nam', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nam', role: 'Friend' },
        { name: 'Khoa', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Khoa', role: 'Friend' }
      ],
      lines: [
        { participant: 'Nam', text: "Yo Khoa, you made it! Grabbed a seat yet?", translation: "Ê Khoa, tới rồi hả! Có chỗ ngồi chưa?" },
        { participant: 'Khoa', text: "Not yet, place is packed. Saving me a spot?", translation: "Chưa, đông nghẹt luôn. Giữ giùm một chỗ được không?" },
        { participant: 'Nam', text: "Row three on the left. Slide in quick!", translation: "Hàng ba bên trái nè. Lẹ lên nào!" },
        { participant: 'Khoa', text: "Coming right now. Thanks man!", translation: "Tới liền đây. Cảm ơn ông nha!" }
      ]
    }
  ],

  'student-02': [
    {
      type: 'pair',
      school: 'business',
      title: 'Consulting an Academic Advisor on Degree Progress',
      participants: [
        { name: 'Dr. Katherine', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DrKatherine', role: 'Advisor' },
        { name: 'Thu', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Thu', role: 'Student' }
      ],
      lines: [
        { participant: 'Thu', text: "Good afternoon, Dr. Katherine. I would appreciate your guidance regarding my academic advisor selection.", translation: "Kính chào Tiến sĩ Katherine. Em rất mong nhận được sự hướng dẫn của cô về việc lựa chọn cố vấn học tập ạ." },
        { participant: 'Dr. Katherine', text: "Certainly, Thu. Have you discussed your research preferences with your assigned mentor yet?", translation: "Chắc chắn rồi Thu. Em đã thảo luận về định hướng nghiên cứu với người hướng dẫn được chỉ định chưa?" },
        { participant: 'Thu', text: "Yes, Professor Miller agreed to mentor my capstone project. I also have written consent from my academic guardian.", translation: "Dạ rồi, Giáo sư Miller đã đồng ý hướng dẫn đồ án tốt nghiệp của em. Em cũng đã có văn bản đồng thuận từ người bảo trợ học tập ạ." },
        { participant: 'Dr. Katherine', text: "That is exemplary preparation. I shall officially approve your academic petition in the registry.", translation: "Sự chuẩn bị rất chỉn chu. Cô sẽ chính thức phê duyệt đơn học thuật của em trên cổng hệ thống nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Discussing Roommates and Study Groups',
      participants: [
        { name: 'Binh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Binh', role: 'Student' },
        { name: 'Huy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Huy', role: 'Student' }
      ],
      lines: [
        { participant: 'Binh', text: "Hey Huy, how are things going with your new dorm roommate?", translation: "Huy ơi, tình hình với bạn cùng phòng mới ở ký túc xá thế nào rồi?" },
        { participant: 'Huy', text: "Really great! He's super tidy and quiet at night, so we study together without distractions.", translation: "Ổn áp lắm ông ơi! Bạn ấy gọn gàng cực kỳ mà tối lại yên tĩnh, nên hai đứa tự học không bị phân tâm." },
        { participant: 'Binh', text: "You're lucky. What about your teammates for the business presentation?", translation: "Số hưởng ghê. Thế còn mấy bạn cùng nhóm cho bài thuyết trình môn kinh doanh thì sao?" },
        { participant: 'Huy', text: "Everyone is doing their share. We're meeting our senior mentor tomorrow to rehearse.", translation: "Mọi người đều làm tròn phần việc. Tụi mình định mai gặp anh mentor khóa trên để tập dượt thử nè." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Dorm Roommate Ping',
      participants: [
        { name: 'Viet', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Viet', role: 'Roommate' },
        { name: 'Long', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Long', role: 'Roommate' }
      ],
      lines: [
        { participant: 'Viet', text: "Roomie, did you grab the dorm room key?", translation: "Bạn phòng ơi, có cầm chìa khóa phòng không?" },
        { participant: 'Long', text: "Got it right here. At the campus gate, you locked out?", translation: "Có nè. Đang ở cổng trường, bị kẹt ngoài cửa hả?" },
        { participant: 'Viet', text: "Yeah, left mine on the desk. Hurry back!", translation: "Ừ, quên chìa trên bàn rồi. Về sớm cứu bồ nha!" },
        { participant: 'Long', text: "5 minutes. Don't freeze out there!", translation: "5 phút nữa tới. Đừng để chết cóng ngoài đó nha!" }
      ]
    }
  ],

  'student-03': [
    {
      type: 'pair',
      school: 'business',
      title: 'Lab Safety & Campus Facility Inquiry',
      participants: [
        { name: 'Lab Director', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DirectorChen', role: 'Faculty' },
        { name: 'Mai', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mai', role: 'Student' }
      ],
      lines: [
        { participant: 'Mai', text: "Good morning, Director Chen. May I enquire about the operating hours for the advanced robotics laboratory?", translation: "Kính chào Thầy Chen. Em xin phép được hỏi về khung giờ hoạt động của phòng thí nghiệm robot nâng cao ạ?" },
        { participant: 'Lab Director', text: "The laboratory is open from 8 AM to 9 PM on weekdays. Have you completed the mandatory safety compliance seminar?", translation: "Phòng lab mở từ 8 giờ sáng đến 9 giờ tối các ngày trong tuần. Em đã hoàn thành khóa tập huấn an toàn bắt buộc chưa?" },
        { participant: 'Mai', text: "Yes, sir. I have my safety clearance badge and access credentials ready.", translation: "Dạ rồi thưa thầy. Em đã có thẻ chứng nhận an toàn và tài khoản truy cập sẵn sàng ạ." },
        { participant: 'Lab Director', text: "Very good. You may reserve workbench slots through the campus facility management portal.", translation: "Rất tốt. Em có thể đặt trước vị trí bàn thực hành qua cổng quản lý cơ sở vật chất của trường nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Navigating Campus Buildings & Cafeteria',
      participants: [
        { name: 'An', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=An', role: 'Student' },
        { name: 'Trang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Trang', role: 'Student' }
      ],
      lines: [
        { participant: 'An', text: "Excuse me, Trang! Do you know where Building C is? I have chemistry there in ten minutes.", translation: "Trang ơi cho mình hỏi xíu! Bạn biết Tòa nhà C ở đâu không? Mình có tiết Hóa bên đó sau mười phút nữa." },
        { participant: 'Trang', text: "It's right past the main library, just opposite the south dormitory complex.", translation: "Nó nằm ngay sau thư viện chính đó, đối diện khu ký túc xá phía nam luôn." },
        { participant: 'An', text: "Phew, thanks! Is the new cafeteria nearby too? I'm starving.", translation: "Hên quá, cảm ơn nha! Nhà ăn mới có gần đó không? Đói bụng quá rồi." },
        { participant: 'Trang', text: "Yeah, it's on the ground floor of Building C. Good food and really student-friendly prices!", translation: "Có, ở tầng trệt Tòa C luôn. Đồ ăn ngon mà giá lại rất hợp túi tiền sinh viên!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Meeting at Campus Coffee Kiosk',
      participants: [
        { name: 'Tuan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tuan', role: 'Friend' },
        { name: 'Bao', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bao', role: 'Friend' }
      ],
      lines: [
        { participant: 'Tuan', text: "Where you at? Class ended early.", translation: "Ở đâu đó? Lớp tan sớm rồi nè." },
        { participant: 'Bao', text: "Outside the cafeteria bench. Grab a bench?", translation: "Ghế đá ngoài căng-tin nè. Ra ngồi hóng gió không?" },
        { participant: 'Tuan', text: "Heading there. Want an iced coffee?", translation: "Đang ra đây. Uống cà phê sữa đá không tớ mua?" },
        { participant: 'Bao', text: "Legend! Less sweet, please.", translation: "Tuyệt vời ông mặt trời! Ít ngọt nha." }
      ]
    }
  ],

  'student-04': [
    {
      type: 'pair',
      school: 'business',
      title: 'Requesting Library Academic Database Access',
      participants: [
        { name: 'Head Librarian', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Librarian', role: 'Faculty' },
        { name: 'Dat', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dat', role: 'Student' }
      ],
      lines: [
        { participant: 'Dat', text: "Good afternoon. I am currently compiling literature for my senior thesis and require access to the peer-reviewed IEEE database.", translation: "Kính chào cô. Em đang tổng hợp tài liệu cho khóa luận tốt nghiệp và cần quyền truy cập vào cơ sở dữ liệu học thuật IEEE ạ." },
        { participant: 'Head Librarian', text: "Please present your student identification card and institutional email credentials.", translation: "Em vui lòng xuất trình thẻ sinh viên và địa chỉ email của trường nhé." },
        { participant: 'Dat', text: "Here is my student credential card, along with my department authorization slip.", translation: "Dạ đây là thẻ sinh viên của em, kèm theo giấy giới thiệu của khoa ạ." },
        { participant: 'Head Librarian', text: "Your institutional database subscription is now activated. You may also download licensed textbook chapters remotely.", translation: "Tài khoản cơ sở dữ liệu của em đã được kích hoạt. Em cũng có thể tải các chương giáo trình có bản quyền từ xa nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Sharing Notes and Textbooks',
      participants: [
        { name: 'Hoa', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Hoa', role: 'Student' },
        { name: 'Duc', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Duc', role: 'Student' }
      ],
      lines: [
        { participant: 'Hoa', text: "Hey Duc, do you have the PDF version of the Macroeconomics textbook?", translation: "Đức ơi, bạn có bản PDF cuốn giáo trình Kinh tế Vĩ mô không?" },
        { participant: 'Duc', text: "Yeah, our study group uploaded it to the shared drive yesterday. I can send you the link.", translation: "Có nè, nhóm tự học của tụi mình đã tải lên Google Drive chung hôm qua rồi. Mình gửi link cho bạn nhé." },
        { participant: 'Hoa', text: "That would be awesome! Also, could I photocopy your lecture notes from Tuesday?", translation: "Thế thì tốt quá! Với lại mình mượn vở photo lại ghi chép bài giảng hôm thứ Ba được không?" },
        { participant: 'Duc', text: "Sure thing. Just grab my notebook after this class.", translation: "Thoải mái luôn. Tan tiết này cứ lấy vở của mình đi photo nha." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Borrowing a Pen in Lecture Hall',
      participants: [
        { name: 'Vy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vy', role: 'Classmate' },
        { name: 'Hanh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Hanh', role: 'Classmate' }
      ],
      lines: [
        { participant: 'Vy', text: "Spare pen? Mine just died.", translation: "Còn cây bút nào không? Bút tớ tắc mực rồi." },
        { participant: 'Hanh', text: "Here, keep it. Got plenty.", translation: "Đây nè, giữ luôn đi. Trong hộp còn nhiều." },
        { participant: 'Vy', text: "Lifesaver! Pop quiz starting now.", translation: "Cứu tinh! Thầy bắt đầu kiểm tra 15 phút rồi kìa." },
        { participant: 'Hanh', text: "Eyes front, good luck!", translation: "Nhìn lên bảng đi, chúc làm bài tốt!" }
      ]
    }
  ],

  'student-05': [
    {
      type: 'pair',
      school: 'business',
      title: 'Formal Rescheduling Request with Course Coordinator',
      participants: [
        { name: 'Dr. Adams', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DrAdams', role: 'Professor' },
        { name: 'Ngan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ngan', role: 'Student' }
      ],
      lines: [
        { participant: 'Ngan', text: "Good morning, Dr. Adams. I am writing to politely enquire about an unavoidable exam timetable conflict.", translation: "Kính chào Tiến sĩ Adams. Em xin phép gửi thư hỏi về trường hợp xung đột lịch thi bắt buộc ạ." },
        { participant: 'Dr. Adams', text: "Good morning, Ngan. Which courses are overlapping on your examination schedule?", translation: "Chào Ngan. Những môn nào đang bị trùng thời gian trong lịch thi của em?" },
        { participant: 'Ngan', text: "My Advanced Algorithms final exam coincides with the Molecular Biology lab practical on June 15th.", translation: "Dạ bài thi cuối kỳ môn Thuật toán nâng cao trùng giờ với buổi thực hành Sinh học phân tử ngày 15/6 ạ." },
        { participant: 'Dr. Adams', text: "Submit an official petition form with your syllabus timetable, and we will arrange an alternate test session for you.", translation: "Em hãy nộp mẫu đơn xin hoãn thi chính thức kèm lịch học, khoa sẽ sắp xếp ca thi phụ cho em nhé." }
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
      title: 'Consulting Professor on Course Prerequisites and Electives',
      participants: [
        { name: 'Professor Sterling', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sterling', role: 'Faculty' },
        { name: 'Yen', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Yen', role: 'Student' }
      ],
      lines: [
        { participant: 'Yen', text: "Professor Sterling, may I consult you regarding the elective courses required for the Machine Learning specialization?", translation: "Thưa Giáo sư Sterling, em xin phép được tham vấn thầy về các học phần tự chọn bắt buộc cho định hướng Học máy ạ?" },
        { participant: 'Professor Sterling', text: "Certainly, Yen. The prerequisite is Linear Algebra, followed by Applied Probability.", translation: "Được chứ Yen. Học phần tiên quyết là Đại số Tuyến tính, tiếp nối bởi Xác suất Ứng dụng." },
        { participant: 'Yen', text: "I completed both courses with high honors last semester. Can I enroll directly into the Capstone seminar?", translation: "Dạ em đã hoàn thành xuất sắc cả hai học phần kỳ trước ạ. Liệu em có thể đăng ký thẳng vào hội thảo đồ án tốt nghiệp không ạ?" },
        { participant: 'Professor Sterling', text: "Given your academic standing, I will grant an official prerequisite waiver for your enrollment.", translation: "Với kết quả học tập tốt của em, thầy sẽ ký giấy miễn điều kiện tiên quyết để em đăng ký nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Picking Elective Subjects with a Peer',
      participants: [
        { name: 'Phuc', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Phuc', role: 'Student' },
        { name: 'My', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=My', role: 'Student' }
      ],
      lines: [
        { participant: 'Phuc', text: "My, have you decided which elective to take for our general education requirement?", translation: "My ơi, bạn đã chọn được môn tự chọn nào cho phần kiến thức đại cương chưa?" },
        { participant: 'My', text: "I'm torn between Digital Photography and Introduction to Psychology. What about you?", translation: "Mình đang phân vân giữa Nhiếp ảnh Số với Nhập môn Tâm lý học nè. Còn bạn thì sao?" },
        { participant: 'Phuc', text: "I signed up for Psychology! Seniors told me the lecturer is super engaging and there's no heavy final exam.", translation: "Mình đăng ký môn Tâm lý học rồi! Mấy anh chị khóa trên bảo giảng viên dạy cuốn lắm mà thi cuối kỳ lại nhẹ nhàng nữa." },
        { participant: 'My', text: "Oh, that sounds perfect! Let me check if there's still an open slot in your class section.", translation: "Ồ nghe thích ghê! Để mình kiểm tra xem lớp bạn còn suất trống không nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Fast Elective Swap Chat',
      participants: [
        { name: 'Tan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tan', role: 'Classmate' },
        { name: 'Hien', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Hien', role: 'Classmate' }
      ],
      lines: [
        { participant: 'Tan', text: "Drop that morning elective yet?", translation: "Hủy môn tự chọn buổi sáng đó chưa?" },
        { participant: 'Hien', text: "Just did. Swapped to Tuesday afternoon. You?", translation: "Vừa hủy xong. Đổi sang chiều thứ Ba rồi. Còn ông?" },
        { participant: 'Tan', text: "Same section! We're lab partners then.", translation: "Cùng lớp luôn! Thế là chung nhóm thực hành rồi nha." },
        { participant: 'Hien', text: "Sweet. Less stress this term!", translation: "Tuyệt vời. Kỳ này đỡ áp lực hẳn!" }
      ]
    }
  ],

  'student-07': [
    {
      type: 'pair',
      school: 'business',
      title: 'Requesting an Academic Extension on Research Essay',
      participants: [
        { name: 'Dr. Holloway', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Holloway', role: 'Professor' },
        { name: 'Quynh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Quynh', role: 'Student' }
      ],
      lines: [
        { participant: 'Quynh', text: "Good afternoon, Dr. Holloway. Due to recent medical circumstances, I wish to formally request a 48-hour extension on my sociology research essay.", translation: "Kính chào Tiến sĩ Holloway. Do lý do sức khỏe đột xuất, em xin phép được kính trình đơn gia hạn 48 giờ cho bài tiểu luận nghiên cứu Xã hội học ạ." },
        { participant: 'Dr. Holloway', text: "I understand, Quynh. Have you submitted your medical certificate to the student welfare office?", translation: "Thầy hiểu rồi Quynh. Em đã gửi giấy chứng nhận y tế đến văn phòng quản lý sinh viên chưa?" },
        { participant: 'Quynh', text: "Yes, sir. I have also attached the formal confirmation receipt and my draft outline to this request.", translation: "Dạ rồi thưa thầy. Em cũng đã đính kèm biên nhận xác nhận và đề cương bản nháp vào thư này ạ." },
        { participant: 'Dr. Holloway', text: "Your extension is approved until Friday at 5 PM. Please focus on your well-being first.", translation: "Thầy chấp thuận gia hạn cho em đến 5 giờ chiều thứ Sáu nhé. Hãy chú ý giữ gìn sức khỏe trước tiên." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Peer Reviewing Homework Drafts',
      participants: [
        { name: 'Tung', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tung', role: 'Student' },
        { name: 'Van', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Van', role: 'Student' }
      ],
      lines: [
        { participant: 'Tung', text: "Hey Van, have you finished the literature review for the history paper?", translation: "Vân ơi, bạn đã hoàn thành phần tổng quan tài liệu cho bài tập môn Lịch sử chưa?" },
        { participant: 'Van', text: "Almost! I just need to format my citations properly in APA style. Do you want to swap drafts and peer-review?", translation: "Gần xong rồi! Mình chỉ cần định dạng lại trích dẫn chuẩn theo quy tắc APA nữa thôi. Bạn có muốn đổi bài nháp để góp ý chéo cho nhau không?" },
        { participant: 'Tung', text: "That would be super helpful. I'm a bit worried my conclusion section isn't clear enough.", translation: "Được thế thì tốt quá. Mình đang hơi lo phần kết luận của mình chưa đủ rõ ràng." },
        { participant: 'Van', text: "Send it over! I'll read yours right after dinner and leave detailed comments on Google Docs.", translation: "Gửi qua đi! Ăn tối xong mình đọc bài của bạn rồi để lại nhận xét chi tiết trên Google Docs nha." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Submitting Homework Right on Time',
      participants: [
        { name: 'Hung', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Hung', role: 'Friend' },
        { name: 'Dung', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dung', role: 'Friend' }
      ],
      lines: [
        { participant: 'Hung', text: "Submitted on canvas yet?", translation: "Nộp bài lên trang Canvas chưa?" },
        { participant: 'Dung', text: "Turned it in with 3 minutes to spare!", translation: "Nộp rồi, trước giờ khóa đúng 3 phút!" },
        { participant: 'Hung', text: "Talk about living on the edge!", translation: "Đúng là chuyên gia chơi hệ sát nút!" },
        { participant: 'Dung', text: "Never again. Sleep time now!", translation: "Chừa luôn. Đi ngủ thôi mệt quá rồi!" }
      ]
    }
  ],

  'student-08': [
    {
      type: 'pair',
      school: 'business',
      title: 'Grade Clarification Session with Course Examiner',
      participants: [
        { name: 'Professor Wallace', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Wallace', role: 'Examiner' },
        { name: 'Hai', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Hai', role: 'Student' }
      ],
      lines: [
        { participant: 'Hai', text: "Good morning, Professor Wallace. Thank you for accommodating me during your office hours to review my midterm examination results.", translation: "Kính chào Giáo sư Wallace. Cảm ơn thầy đã dành thời gian trong giờ tư vấn để xem lại kết quả bài thi giữa kỳ của em ạ." },
        { participant: 'Professor Wallace', text: "Good morning, Hai. Which specific question on the midterm exam did you wish to discuss?", translation: "Chào Hai. Em muốn trao đổi về câu hỏi cụ thể nào trong đề thi giữa kỳ?" },
        { participant: 'Hai', text: "On question four regarding econometric models, I believe my derivation follows the alternative method outlined in chapter five.", translation: "Dạ ở câu số bốn về mô hình kinh tế lượng, em đối chiếu thấy cách chứng minh của mình khớp với phương pháp bổ trợ ở chương năm ạ." },
        { participant: 'Professor Wallace', text: "Let me inspect your calculation sheet... Ah, indeed. Your derivation is valid. I will adjust your score in the student registry.", translation: "Để thầy kiểm tra lại bài giải của em... À, đúng rồi. Cách biến đổi này hoàn toàn chính xác. Thầy sẽ cập nhật lại điểm số trên hệ thống nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Studying Together Before the Final Exam',
      participants: [
        { name: 'Lam', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lam', role: 'Student' },
        { name: 'Tram', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tram', role: 'Student' }
      ],
      lines: [
        { participant: 'Lam', text: "Tram, how are you feeling about the organic chemistry final next Tuesday?", translation: "Trâm ơi, bạn thấy bài thi cuối kỳ Hóa hữu cơ thứ Ba tuần tới thế nào rồi?" },
        { participant: 'Tram', text: "Honestly, quite nervous! Reaction mechanisms always trip me up. Do you want to quiz each other with flashcards?", translation: "Thú thật là hơi run! Mấy cơ chế phản ứng mình cứ hay bị nhầm hoài. Bạn có muốn hai đứa dùng flashcard đố nhau ôn bài không?" },
        { participant: 'Lam', text: "Great idea! Let's book a quiet study room at the library from 2 to 5 PM tomorrow.", translation: "Ý hay đó! Tụi mình đặt một phòng học nhóm yên tĩnh ở thư viện từ 2 đến 5 giờ chiều mai nha." },
        { participant: 'Tram', text: "Perfect. I'll bring the mock practice exams from previous years.", translation: "Tuyệt vời. Mình sẽ mang theo mấy bộ đề thi thử của các năm trước." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Post-Exam Hallway Relief',
      participants: [
        { name: 'Loc', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Loc', role: 'Friend' },
        { name: 'Kien', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kien', role: 'Friend' }
      ],
      lines: [
        { participant: 'Loc', text: "How was it? Surviving?", translation: "Sao rồi? Ổn áp không?" },
        { participant: 'Kien', text: "Way better than expected! Nailed question two.", translation: "Dễ thở hơn tưởng tượng nhiều! Trúng tủ câu hai." },
        { participant: 'Loc', text: "Same! Celebrate with bubble tea?", translation: "Tui cũng vậy! Đi ăn mừng trà sữa không?" },
        { participant: 'Kien', text: "100% yes, let's roll!", translation: "Chốt liền, triển luôn đi!" }
      ]
    }
  ],

  'student-09': [
    {
      type: 'pair',
      school: 'business',
      title: 'Capstone Presentation Rehearsal with Project Advisor',
      participants: [
        { name: 'Dr. Evans', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DrEvans', role: 'Project Advisor' },
        { name: 'Bao', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bao', role: 'Team Lead' }
      ],
      lines: [
        { participant: 'Bao', text: "Good morning, Dr. Evans. Our team has finalized the slide deck for tomorrow's capstone defense.", translation: "Kính chào Tiến sĩ Evans. Nhóm em đã hoàn thiện bộ slide cho buổi bảo vệ đồ án tốt nghiệp ngày mai ạ." },
        { participant: 'Dr. Evans', text: "Welcome, Bao. How has your team divided the speaking segments and technical demonstrations?", translation: "Chào em Bao. Nhóm em đã phân chia các phần thuyết trình và demo kỹ thuật như thế nào?" },
        { participant: 'Bao', text: "I will deliver the executive summary and methodology, while Sarah and Dung will present the empirical findings and prototype.", translation: "Dạ em sẽ đảm nhận phần tóm tắt điều hành và phương pháp nghiên cứu, bạn Sarah và Dũng sẽ trình bày kết quả thực nghiệm và nguyên mẫu sản phẩm ạ." },
        { participant: 'Dr. Evans', text: "That is a well-structured allocation. Ensure each presenter remains strictly within the eight-minute threshold.", translation: "Phân bổ như vậy rất hợp lý. Các em nhớ lưu ý mỗi người nói gói gọn đúng trong khung tám phút nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Dividing Group Project Tasks at a Cafe',
      participants: [
        { name: 'Thao', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Thao', role: 'Student' },
        { name: 'Nhan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nhan', role: 'Student' }
      ],
      lines: [
        { participant: 'Thao', text: "Okay everyone, our marketing project deadline is in two weeks. How should we split the workload?", translation: "Được rồi mọi người ơi, hạn nộp dự án Marketing còn hai tuần nữa. Tụi mình chia đầu việc thế nào đây?" },
        { participant: 'Nhan', text: "I can handle the competitor analysis and customer survey data, since I enjoy working with spreadsheets.", translation: "Mình có thể phụ trách phần phân tích đối thủ cạnh tranh và dữ liệu khảo sát khách hàng, vì mình thích làm việc với bảng tính Excel." },
        { participant: 'Thao', text: "Awesome! Then I'll focus on designing the presentation slides and writing the final executive summary.", translation: "Tuyệt quá! Vậy mình sẽ tập trung thiết kế slide thuyết trình và viết bài tóm tắt tổng kết nhé." },
        { participant: 'Nhan', text: "Sounds like a solid plan. Let's aim to have our first complete draft ready by next Wednesday.", translation: "Kế hoạch nghe rất ổn áp. Cùng phấn đấu hoàn thành bản nháp đầu tiên vào thứ Tư tới nha." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Group Chat Quick Standup',
      participants: [
        { name: 'Son', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Son', role: 'Teammate' },
        { name: 'Vy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vy', role: 'Teammate' }
      ],
      lines: [
        { participant: 'Son', text: "Slides done? Adding my section now.", translation: "Slide xong chưa? Đang thêm phần của tớ vô nè." },
        { participant: 'Vy', text: "Almost! Just fixing the charts. Looks clean.", translation: "Gần xong rồi! Đang chỉnh lại mấy biểu đồ. Trông nét lắm." },
        { participant: 'Son', text: "Rehearse over Google Meet tonight?", translation: "Tối nay tập dượt thử qua Google Meet không?" },
        { participant: 'Vy', text: "8 PM works. Drop the link later!", translation: "8 giờ tối nha. Lát nhớ gửi link nhe!" }
      ]
    }
  ],

  'student-10': [
    {
      type: 'pair',
      school: 'business',
      title: 'Requesting Letter of Recommendation during Office Hours',
      participants: [
        { name: 'Professor Hughes', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Hughes', role: 'Professor' },
        { name: 'Khang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Khang', role: 'Senior' }
      ],
      lines: [
        { participant: 'Khang', text: "Good afternoon, Professor Hughes. I am deeply grateful for your continuous mentorship in our econometrics seminar.", translation: "Kính chào Giáo sư Hughes. Em vô cùng biết ơn sự hướng dẫn tận tình của thầy trong suốt kỳ hội thảo kinh tế lượng vừa qua ạ." },
        { participant: 'Professor Hughes', text: "You did exceptional work in class, Khang. What can I assist you with today?", translation: "Em đã hoàn thành bài vở rất xuất sắc trong lớp, Khang. Thầy có thể hỗ trợ gì cho em hôm nay?" },
        { participant: 'Khang', text: "I am preparing my applications for postgraduate master's programs in Europe, and I would be deeply honored if you could write a recommendation letter on my behalf.", translation: "Dạ em đang chuẩn bị hồ sơ ứng tuyển chương trình Thạc sĩ tại châu Âu, và em sẽ rất vinh dự nếu được thầy viết giúp một bức thư giới thiệu ạ." },
        { participant: 'Professor Hughes', text: "I would be delighted to support your application. Please send me your curriculum vitae and statement of purpose by Friday.", translation: "Thầy rất sẵn lòng hỗ trợ hồ sơ của em. Em hãy gửi CV và bài luận mục đích cho thầy trước thứ Sáu nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Clarifying Lecture Points After Class',
      participants: [
        { name: 'Teaching Assistant David', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TADavid', role: 'TA' },
        { name: 'Linh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Linh', role: 'Student' }
      ],
      lines: [
        { participant: 'Linh', text: "Hi David, do you have a few minutes? I was a bit confused by the regression formula from today's lecture.", translation: "Chào David, bạn có rảnh vài phút không? Mình hơi thắc mắc công thức hồi quy trong bài giảng sáng nay một chút." },
        { participant: 'Teaching Assistant David', text: "Hey Linh, sure thing! Let's take a look at your notebook. Which step felt tricky?", translation: "Chào Linh, được chứ! Cứ mở vở ra xem nào. Bước nào làm bạn cảm thấy khó hiểu?" },
        { participant: 'Linh', text: "Right here where we derive the variance. I couldn't follow how the professor simplified this term.", translation: "Ngay chỗ này nè, lúc biến đổi phương sai ấy. Mình không theo kịp đoạn thầy rút gọn số hạng này." },
        { participant: 'Teaching Assistant David', text: "Ah, he applied the zero-covariance assumption from last week. Let me write out the intermediate step for you.", translation: "À, đoạn này thầy áp dụng giả định hiệp phương sai bằng không của tuần trước đó. Để mình viết rõ bước trung gian ra cho bạn dễ nhìn nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Checking If Office Hours Are Open',
      participants: [
        { name: 'Quan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Quan', role: 'Student' },
        { name: 'Duy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Duy', role: 'Student' }
      ],
      lines: [
        { participant: 'Quan', text: "Prof in his office right now?", translation: "Thầy đang ở phòng làm việc không?" },
        { participant: 'Duy', text: "Yeah, door's wide open. No line.", translation: "Có, cửa mở toang luôn. Không có ai xếp hàng cả." },
        { participant: 'Quan', text: "Running over now to sign my slip!", translation: "Chạy qua liền để xin chữ ký đây!" },
        { participant: 'Duy', text: "Be quick, he leaves at noon.", translation: "Nhanh lên, 12 giờ trưa thầy về đó." }
      ]
    }
  ],

  'student-11': [
    {
      type: 'pair',
      school: 'business',
      title: 'Student Union Budget Proposal to Faculty Board',
      participants: [
        { name: 'Dean Martinez', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Martinez', role: 'Dean' },
        { name: 'Ha', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ha', role: 'Club President' }
      ],
      lines: [
        { participant: 'Ha', text: "Good afternoon, Dean Martinez. On behalf of the University Debate Society, I present our annual charity tournament proposal.", translation: "Kính chào Trưởng khoa Martinez. Đại diện cho Câu lạc bộ Tranh biện trường, em xin trình bày đề xuất tổ chức giải đấu gây quỹ từ thiện thường niên ạ." },
        { participant: 'Dean Martinez', text: "Welcome, Ha. How does your society plan to allocate the requested university sponsorship funds?", translation: "Chào em Ha. Câu lạc bộ dự kiến phân bổ kinh phí tài trợ của nhà trường như thế nào?" },
        { participant: 'Ha', text: "Seventy percent will cover venue logistics and technical streaming, while thirty percent will go directly toward scholarship prizes for regional high school participants.", translation: "Dạ 70% sẽ chi trả cho công tác hậu cần hội trường và truyền hình trực tiếp, 30% còn lại sẽ trao học bổng trực tiếp cho các thí sinh THPT trong khu vực ạ." },
        { participant: 'Dean Martinez', text: "That is a well-considered budget. The faculty board commends your initiative and grants full event approval.", translation: "Bản dự toán rất chu đáo. Ban chủ nhiệm khoa đánh giá cao sáng kiến của các em và phê duyệt tổ chức sự kiện nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Joining a Campus Music Club',
      participants: [
        { name: 'Phong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Phong', role: 'Student' },
        { name: 'Mai', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mai', role: 'Club Member' }
      ],
      lines: [
        { participant: 'Phong', text: "Hi Mai! I saw your acoustic club's performance at the club fair. Can beginners audition too?", translation: "Chào Mai! Mình có xem tiết mục biểu diễn của CLB Guitar tại ngày hội câu lạc bộ. Người mới tập chơi có được thử giọng không bạn?" },
        { participant: 'Mai', text: "Absolutely! We welcome all skill levels, whether you sing, play guitar, or just want to help with event production.", translation: "Được chứ bạn ơi! Tụi mình chào đón mọi trình độ, dù bạn hát, chơi guitar hay chỉ muốn hỗ trợ tổ chức sự kiện." },
        { participant: 'Phong', text: "That's such a relief! When are the weekly club meetups held?", translation: "Nghe thế đỡ ngại hẳn! Thường thì câu lạc bộ sinh hoạt vào lúc nào trong tuần vậy?" },
        { participant: 'Mai', text: "We jam every Thursday evening in the Student Activity Center. Come hang out with us this week!", translation: "Tụi mình tập nhạc mỗi tối thứ Năm ở Nhà Văn hóa Sinh viên. Tối thứ Năm này ghé chơi với tụi mình nha!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Fast Club Meeting Ping',
      participants: [
        { name: 'Tri', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tri', role: 'Friend' },
        { name: 'Hau', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Hau', role: 'Friend' }
      ],
      lines: [
        { participant: 'Tri', text: "Club meeting tonight still on?", translation: "Tối nay CLB vẫn họp bình thường chứ?" },
        { participant: 'Hau', text: "Yep, room 204. Free pizza too!", translation: "Ừ, phòng 204. Có pizza miễn phí nữa đó!" },
        { participant: 'Tri', text: "Say less! On my way.", translation: "Khỏi nói nhiều! Tới liền nè." },
        { participant: 'Hau', text: "Save a slice for me if you get there first!", translation: "Đến trước nhớ giữ giùm một miếng nha!" }
      ]
    }
  ],

  'student-12': [
    {
      type: 'pair',
      school: 'business',
      title: 'Reporting Dormitory Maintenance to Housing Officer',
      participants: [
        { name: 'Housing Warden', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Warden', role: 'Staff' },
        { name: 'Chau', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Chau', role: 'Resident' }
      ],
      lines: [
        { participant: 'Chau', text: "Good morning, Officer. I would like to formally report a plumbing malfunction in Dormitory Block D, room 302.", translation: "Kính chào Ban quản lý. Em xin phép được báo cáo sự cố hư hỏng đường ống nước tại Ký túc xá D, phòng 302 ạ." },
        { participant: 'Housing Warden', text: "Good morning. Please state the nature and severity of the leakage.", translation: "Chào em. Em vui lòng mô tả tình trạng và mức độ rò rỉ nước nhé." },
        { participant: 'Chau', text: "The bathroom pipe has a persistent crack causing water leakage onto the floor corridor.", translation: "Dạ đường ống nhà vệ sinh bị nứt làm rò rỉ nước liên tục ra hành lang sàn nhà ạ." },
        { participant: 'Housing Warden', text: "Thank you for the prompt notice. I have logged ticket #408 and our certified technician will repair it by 2 PM.", translation: "Cảm ơn em đã kịp thời thông báo. Tôi đã lưu phiếu yêu cầu #408 và thợ kỹ thuật sẽ đến sửa trước 2 giờ chiều nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Discussing Dorm Cleaning Chores with Roommate',
      participants: [
        { name: 'Linh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Linh', role: 'Roommate' },
        { name: 'Trang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Trang', role: 'Roommate' }
      ],
      lines: [
        { participant: 'Linh', text: "Hey Trang, let's set up a weekly cleaning schedule so our dorm room stays neat during midterm week.", translation: "Trang ơi, tụi mình cùng lên lịch dọn dẹp hàng tuần để phòng ký túc xá luôn gọn gàng trong đợt thi giữa kỳ đi." },
        { participant: 'Trang', text: "Good call! How about I take out the trash and wipe down the study desks on Mondays and Thursdays?", translation: "Hợp lý quá! Hay là mình đổ rác và lau bàn học vào thứ Hai với thứ Năm nhé?" },
        { participant: 'Linh', text: "Sounds fair. I'll sweep and mop the floor every Wednesday and Saturday morning.", translation: "Rất công bằng luôn. Vậy mình sẽ quét và lau sàn vào mỗi sáng thứ Tư và thứ Bảy." },
        { participant: 'Trang', text: "Awesome! And we can split buying hand soap and paper towels 50-50.", translation: "Tuyệt vời! Còn xà phòng rửa tay với khăn giấy thì tụi mình cắn đôi tiền mua nha." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Late Night Dorm Knock',
      participants: [
        { name: 'Thien', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Thien', role: 'Roomie' },
        { name: 'Khang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Khang', role: 'Roomie' }
      ],
      lines: [
        { participant: 'Thien', text: "Hey, asleep yet?", translation: "Ê, ngủ chưa đó?" },
        { participant: 'Khang', text: "Still awake, headphones on. What's up?", translation: "Vẫn thức, đang đeo tai nghe nè. Có gì hông?" },
        { participant: 'Thien', text: "Mind turning off the main light? Screen's fine.", translation: "Tắt giùm cái đèn trần được hông? Bật đèn bàn thôi." },
        { participant: 'Khang', text: "Done! Good night bro.", translation: "Tắt rồi nè! Ngủ ngon nhe bạn hiền." }
      ]
    }
  ],

  'student-13': [
    {
      type: 'pair',
      school: 'business',
      title: 'Inquiring About Dietary Options at University Dining Hall',
      participants: [
        { name: 'Cafeteria Manager', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CafeManager', role: 'Manager' },
        { name: 'Diem', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Diem', role: 'Student' }
      ],
      lines: [
        { participant: 'Diem', text: "Good afternoon. May I enquire whether your daily dining menu clearly labels potential allergen ingredients?", translation: "Kính chào Quản lý. Cho em hỏi thực đơn ăn uống hàng ngày có ghi nhãn rõ các thành phần dễ gây dị ứng không ạ?" },
        { participant: 'Cafeteria Manager', text: "Yes, indeed. All menu boards feature standardized nutritional icons for gluten, dairy, and peanut traces.", translation: "Có chứ em. Toàn bộ bảng thực đơn đều có biểu tượng chuẩn ghi rõ dấu vết gluten, sữa và đậu phộng." },
        { participant: 'Diem', text: "That is reassuring. Are vegetarian meal vouchers included in the semester student meal plan?", translation: "Dạ vậy thì yên tâm quá. Các phiếu ăn chay có nằm trong gói ăn uống cả kỳ cho sinh viên không ạ?" },
        { participant: 'Cafeteria Manager', text: "Certainly. You can redeem vouchers at counters two and four without any surcharge.", translation: "Chắc chắn rồi. Em có thể đổi phiếu ở quầy số hai và số bốn mà không mất thêm phụ phí nào nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Ordering Quick Lunch and Coffee Between Lectures',
      participants: [
        { name: 'Tuan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tuan', role: 'Student' },
        { name: 'Barista', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Barista', role: 'Barista' }
      ],
      lines: [
        { participant: 'Tuan', text: "Hi! Can I get a chicken baguette and an iced Americano to go, please?", translation: "Chào bạn! Cho mình một ổ bánh mì gà và một ly Americano đá mang đi nhé?" },
        { participant: 'Barista', text: "Sure! Would you like the baguette toasted with chili sauce?", translation: "Được chứ! Bạn có muốn nướng nóng bánh mì và cho tương ớt không?" },
        { participant: 'Tuan', text: "Light chili, please. Do you offer a student discount with this ID card?", translation: "Cho ít ớt thôi nhé. Quán có giảm giá sinh viên khi xuất trình thẻ này không bạn?" },
        { participant: 'Barista', text: "Yes, you get ten percent off! That comes to 45,000 VND total. It'll be ready in three minutes.", translation: "Có, bạn được giảm 10% nha! Tổng cộng của bạn là 45.000 VNĐ. Ba phút nữa đồ ăn sẽ có nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Campus Coffee Run',
      participants: [
        { name: 'Giang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Giang', role: 'Friend' },
        { name: 'Huy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Huy', role: 'Friend' }
      ],
      lines: [
        { participant: 'Giang', text: "Coffee run before 10 AM class, want anything?", translation: "Chạy đi mua cà phê trước tiết 10h nè, uống gì hông?" },
        { participant: 'Huy', text: "Iced milk tea, 50% sugar. You're the best!", translation: "Trà sữa đá, 50% đường nhe. Số một luôn á!" },
        { participant: 'Giang', text: "Transfer me via Momo later.", translation: "Lát chuyển khoản MoMo cho tui nha." },
        { participant: 'Huy', text: "Done deal. See you at the lecture hall!", translation: "Chốt đơn. Hẹn gặp ở giảng đường nha!" }
      ]
    }
  ],

  'student-14': [
    {
      type: 'pair',
      school: 'business',
      title: 'Professional Internship Interview on Campus',
      participants: [
        { name: 'HR Recruiter Mr. Stone', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MrStone', role: 'Recruiter' },
        { name: 'Nghia', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nghia', role: 'Candidate' }
      ],
      lines: [
        { participant: 'Nghia', text: "Good morning, Mr. Stone. Thank you for the opportunity to interview for the Software Quality Assurance internship role.", translation: "Kính chào ông Stone. Cảm ơn ông đã tạo cơ hội cho em phỏng vấn vị trí thực tập sinh Đảm bảo Chất lượng Phần mềm ạ." },
        { participant: 'HR Recruiter Mr. Stone', text: "Welcome, Nghia. How do you plan to balance a twenty-hour work week with your university coursework?", translation: "Chào Nghia. Em dự định cân bằng thời gian 20 giờ làm việc mỗi tuần với lịch học ở trường như thế nào?" },
        { participant: 'Nghia', text: "I have arranged all my remaining major credits into morning sessions, allowing me to commit fully to afternoon team sprints.", translation: "Dạ em đã sắp xếp toàn bộ các tín chỉ chuyên ngành vào các buổi sáng, giúp em có thể dành trọn vẹn buổi chiều cho các ca làm việc của nhóm ạ." },
        { participant: 'HR Recruiter Mr. Stone', text: "That demonstrates admirable discipline. Our team will review your coding assessment and contact you by Friday.", translation: "Điều đó thể hiện tính kỷ luật rất tốt. Đội ngũ sẽ đánh giá bài kiểm tra lập trình của em và liên hệ lại trước thứ Sáu nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Discussing a Part-time Barista Job',
      participants: [
        { name: 'Vy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vy', role: 'Student' },
        { name: 'Khoa', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Khoa', role: 'Student' }
      ],
      lines: [
        { participant: 'Vy', text: "Khoa, are you still working part-time at the book cafe near campus?", translation: "Khoa ơi, bạn vẫn đang làm thêm bán thời gian ở quán cà phê sách gần trường hả?" },
        { participant: 'Khoa', text: "Yeah, three shifts a week! The manager is really flexible with student exam schedules.", translation: "Ừ, tuần 3 ca nè! Quản lý ở đó rất tâm lý và linh hoạt theo lịch thi cử của sinh viên tụi mình." },
        { participant: 'Vy', text: "That sounds ideal! Do they have any openings for weekend shifts? I need some extra spending money.", translation: "Nghe lý tưởng ghê! Bên đó còn tuyển vị trí ca cuối tuần không? Mình đang muốn kiếm thêm ít tiền tiêu vặt." },
        { participant: 'Khoa', text: "Actually yes, we need a weekend cashier. Drop by this afternoon and I'll introduce you to the manager!", translation: "Có luôn đó, đang thiếu một bạn thu ngân cuối tuần nè. Chiều nay ghé qua đi mình giới thiệu với quản lý cho!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Covering a Part-Time Shift',
      participants: [
        { name: 'Binh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Binh', role: 'Coworker' },
        { name: 'Nam', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nam', role: 'Coworker' }
      ],
      lines: [
        { participant: 'Binh', text: "Can you cover my Friday shift? Got a surprise midterm.", translation: "Đổi ca thứ Sáu giùm tớ được không? Tự nhiên bị dính bài kiểm tra giữa kỳ." },
        { participant: 'Nam', text: "Sure, if you take my Sunday morning.", translation: "Được chứ, đổi lại ông trực sáng Chủ nhật giùm tui nha." },
        { participant: 'Binh', text: "Deal! Telling the boss now.", translation: "Chốt kèo! Để báo với sếp liền." },
        { participant: 'Nam', text: "Good luck with your test!", translation: "Thi tốt nha ông bạn!" }
      ]
    }
  ],

  'student-15': [
    {
      type: 'pair',
      school: 'business',
      title: 'Consulting Head Research Librarian on Citation Standards',
      participants: [
        { name: 'Dr. Warren', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Warren', role: 'Archivist' },
        { name: 'Thanh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Thanh', role: 'Researcher' }
      ],
      lines: [
        { participant: 'Thanh', text: "Good morning, Dr. Warren. I am conducting an empirical study on renewable energy policies and need guidance on archival citations.", translation: "Kính chào Tiến sĩ Warren. Em đang thực hiện nghiên cứu thực nghiệm về chính sách năng lượng tái tạo và cần được hướng dẫn về quy chuẩn trích dẫn tài liệu lưu trữ ạ." },
        { participant: 'Dr. Warren', text: "Good morning, Thanh. Are you adhering to the APA seventh edition or the Harvard referencing system?", translation: "Chào Thanh. Em đang áp dụng quy chuẩn APA ấn bản thứ 7 hay hệ thống trích dẫn Harvard?" },
        { participant: 'Thanh', text: "Our faculty guidelines mandate APA seventh edition for all governmental whitepapers and peer-reviewed journal articles.", translation: "Dạ quy định của khoa yêu cầu chuẩn APA 7 cho toàn bộ báo cáo chính phủ và các bài báo khoa học bình duyệt ạ." },
        { participant: 'Dr. Warren', text: "Splendid. Allow me to guide you to the rare documents repository and demonstrate our digital reference generator.", translation: "Rất tốt. Thầy sẽ hướng dẫn em vào kho tài liệu chuyên biệt và giới thiệu công cụ tạo trích dẫn số của thư viện nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Finding a Quiet Corner in the University Library',
      participants: [
        { name: 'Nga', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nga', role: 'Student' },
        { name: 'Hoang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Hoang', role: 'Student' }
      ],
      lines: [
        { participant: 'Nga', text: "Hoang, the ground floor is so crowded today! Do you know where the silent study zone is?", translation: "Hoàng ơi, tầng trệt hôm nay đông quá! Bạn có biết khu vực tự học yên tĩnh ở đâu không?" },
        { participant: 'Hoang', text: "Head up to the third floor. It's a strictly silent zone with individual study pods and charging outlets.", translation: "Lên tầng ba đi bạn. Trên đó là khu yên tĩnh tuyệt đối, có từng ô bàn học riêng và ổ cắm sạc đầy đủ luôn." },
        { participant: 'Nga', text: "That sounds perfect. Do we need to scan our student badge at the turnstile upstairs?", translation: "Nghe thích ghê. Lên trên đó có cần quẹt thẻ sinh viên ở cổng xoay không bạn?" },
        { participant: 'Hoang', text: "Yeah, just tap your card. I'll save you a desk next to the window.", translation: "Có, chỉ cần chạm thẻ là vào được. Để mình giữ cho bạn một bàn cạnh cửa sổ nha." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Library Seat Hold',
      participants: [
        { name: 'Vinh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vinh', role: 'Friend' },
        { name: 'Dat', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dat', role: 'Friend' }
      ],
      lines: [
        { participant: 'Vinh', text: "Step away 5 mins for water. Watch my laptop?", translation: "Đi lấy nước 5 phút nha. Canh giùm cái laptop với?" },
        { participant: 'Dat', text: "Got eyes on it. Grab me some too?", translation: "Canh cho rồi. Tiện thể lấy giùm ly nước luôn nhe?" },
        { participant: 'Vinh', text: "Cold or room temp?", translation: "Uống lạnh hay bình thường?" },
        { participant: 'Dat', text: "Cold please, thanks!", translation: "Lạnh nha, cảm ơn bạn hiền!" }
      ]
    }
  ],

  'student-16': [
    {
      type: 'pair',
      school: 'business',
      title: 'Applying for Merit-based Scholarship at Financial Aid Office',
      participants: [
        { name: 'Director Henderson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Henderson', role: 'Director' },
        { name: 'Yen', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Yen', role: 'Applicant' }
      ],
      lines: [
        { participant: 'Yen', text: "Good morning, Director Henderson. I am submitting my official dossier for the Global Leadership Academic Scholarship.", translation: "Kính chào Giám đốc Henderson. Em xin phép được nộp hồ sơ chính thức ứng tuyển Học bổng Học thuật Lãnh đạo Toàn cầu ạ." },
        { participant: 'Director Henderson', text: "Welcome, Yen. Let us verify your cumulative grade point average and faculty recommendation forms.", translation: "Chào Yen. Để thầy kiểm tra điểm trung bình tích lũy và các thư giới thiệu từ khoa của em nhé." },
        { participant: 'Yen', text: "My cumulative GPA is 3.92, accompanied by two sealed letters of recommendation from Professor Smith and Professor Vance.", translation: "Dạ điểm GPA tích lũy của em là 3.92, kèm theo hai thư giới thiệu niêm phong từ Giáo sư Smith và Giáo sư Vance ạ." },
        { participant: 'Director Henderson', text: "Your academic credentials exceed our eligibility criteria. The scholarship evaluation board will convene on Friday.", translation: "Hồ sơ học tập của em hoàn toàn vượt chuẩn tiêu chí xét chọn. Hội đồng đánh giá học bổng sẽ nhóm họp vào thứ Sáu nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Discussing Tuition Grants and Application Tips',
      participants: [
        { name: 'Tram', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tram', role: 'Senior' },
        { name: 'Minh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Minh', role: 'Junior' }
      ],
      lines: [
        { participant: 'Minh', text: "Tram, congrats on winning the tech talent grant! Do you have any tips for writing the personal statement?", translation: "Trâm ơi, chúc mừng bạn giành được suất học bổng tài năng công nghệ nha! Bạn có kinh nghiệm gì khi viết bài luận cá nhân không?" },
        { participant: 'Tram', text: "Thanks, Minh! The key is highlighting real community impact rather than just listing your test grades.", translation: "Cảm ơn Minh nhiều! Mấu chốt là phải nêu bật được các đóng góp thực tế cho cộng đồng chứ đừng chỉ liệt kê bảng điểm thi." },
        { participant: 'Minh', text: "That makes a lot of sense. Did you include your volunteer coding workshops?", translation: "Nghe có lý quá. Đợt đó bạn có đưa mấy buổi dạy lập trình tình nguyện vào không?" },
        { participant: 'Tram', text: "Definitely! Reviewers love seeing tangible leadership. I can look over your outline whenever you're ready.", translation: "Chắc chắn rồi! Ban giám khảo rất thích thấy tố chất lãnh đạo thực tế. Cứ lên xong dàn ý đi mình xem góp ý cho nha." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Scholarship Results Announcement',
      participants: [
        { name: 'Son', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Son', role: 'Friend' },
        { name: 'Vu', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vu', role: 'Friend' }
      ],
      lines: [
        { participant: 'Son', text: "Check your email! Results dropped!", translation: "Check mail liền đi! Có kết quả rồi kìa!" },
        { participant: 'Vu', text: "Got the 50% tuition grant! Can't believe it!", translation: "Được học bổng 50% học phí rồi! Không tin nổi luôn!" },
        { participant: 'Son', text: "Told you so! Dinner on you tonight!", translation: "Đã bảo mà lị! Tối nay khao chầu ăn mừng nha!" },
        { participant: 'Vu', text: "Big hotpot party, let's go!", translation: "Lẩu thả ga luôn, đi thôi!" }
      ]
    }
  ],

  'student-17': [
    {
      type: 'pair',
      school: 'business',
      title: 'Confidential Consultation at Student Well-being Center',
      participants: [
        { name: 'Counselor Dr. Reed', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DrReed', role: 'Counselor' },
        { name: 'Trang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Trang', role: 'Student' }
      ],
      lines: [
        { participant: 'Trang', text: "Good afternoon, Dr. Reed. I have been experiencing severe fatigue and anxiety related to my concurrent thesis and exam deadlines.", translation: "Kính chào Tiến sĩ Reed. Thời gian gần đây em cảm thấy kiệt sức và căng thẳng nghiêm trọng do lịch bảo vệ khóa luận và thi cử dồn dập cùng lúc ạ." },
        { participant: 'Counselor Dr. Reed', text: "Thank you for reaching out, Trang. Recognizing academic burnout is the first crucial step toward recovery.", translation: "Cảm ơn em đã chủ động tìm đến chia sẻ, Trang. Nhận diện được tình trạng kiệt sức học thuật là bước quan trọng đầu tiên để hồi phục." },
        { participant: 'Trang', text: "I struggle to disconnect in the evenings, constantly feeling overwhelmed by my project backlog.", translation: "Buổi tối em rất khó thư giãn đầu óc, lúc nào cũng cảm thấy bị ngợp trước khối lượng công việc tồn đọng ạ." },
        { participant: 'Counselor Dr. Reed', text: "We will establish a structured mindfulness plan and coordinate with your faculty to arrange appropriate workload pacing.", translation: "Chúng ta sẽ cùng lập một kế hoạch cân bằng thư giãn và trao đổi với khoa để điều tiết tiến độ học tập phù hợp cho em nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Taking a Mental Health Walk Around the Lake',
      participants: [
        { name: 'Ngan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ngan', role: 'Friend' },
        { name: 'Duc', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Duc', role: 'Friend' }
      ],
      lines: [
        { participant: 'Ngan', text: "Hey Duc, you've been staring at that laptop screen for six hours straight. Let's take a break!", translation: "Đức ơi, bạn dán mắt vào màn hình laptop sáu tiếng liên tục rồi đó. Ra ngoài nghỉ ngơi xíu đi!" },
        { participant: 'Duc', text: "I'm just so stressed about this database presentation. My brain feels completely fried.", translation: "Tại mình đang lo lắng cho bài thuyết trình môn Cơ sở dữ liệu quá. Đầu óc quay cuồng đơ hết cả rồi." },
        { participant: 'Ngan', text: "Stressing won't fix it. A twenty-minute brisk walk around the campus lake will clear your head.", translation: "Càng lo càng không giải quyết được gì đâu. Đi dạo 20 phút quanh hồ trường cho thoáng đầu óc rồi về làm tiếp." },
        { participant: 'Duc', text: "You're right. Let me grab my sneakers and get some fresh air.", translation: "Bạn nói đúng. Để mình mang giày rồi ra hít thở không khí trong lành tí." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick De-stress Vent',
      participants: [
        { name: 'Huy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Huy', role: 'Friend' },
        { name: 'Khoa', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Khoa', role: 'Friend' }
      ],
      lines: [
        { participant: 'Huy', text: "Brain is melting. Need a 10-minute break.", translation: "Não đơ luôn rồi. Cần nghỉ xả hơi 10 phút." },
        { participant: 'Khoa', text: "Push-ups or milk tea run?", translation: "Hít đất hay làm ly trà sữa?" },
        { participant: 'Huy', text: "Definitely milk tea. Let's step out.", translation: "Chắc chắn là trà sữa rồi. Đi thôi nào." },
        { participant: 'Khoa', text: "Laptops closed. Five minutes outside!", translation: "Gập máy lại. Ra ngoài 5 phút xả xui!" }
      ]
    }
  ],

  'student-18': [
    {
      type: 'pair',
      school: 'business',
      title: 'Career Planning Strategy with University Placement Director',
      participants: [
        { name: 'Placement Director Mr. Cole', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MrCole', role: 'Director' },
        { name: 'Tuan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tuan', role: 'Graduating Senior' }
      ],
      lines: [
        { participant: 'Tuan', text: "Good afternoon, Director Cole. As I approach graduation this semester, I would appreciate your advice regarding graduate recruitment pathways.", translation: "Kính chào Giám đốc Cole. Chuẩn bị tốt nghiệp kỳ này, em rất mong nhận được lời khuyên của thầy về các lộ trình tuyển dụng sau đại học ạ." },
        { participant: 'Placement Director Mr. Cole', text: "Welcome, Tuan. Are you targeting multinational corporate management trainee programs or specialized tech firms?", translation: "Chào em Tuan. Em đang nhắm tới các chương trình Quản trị viên Tập sự tại tập đoàn đa quốc gia hay các công ty công nghệ chuyên sâu?" },
        { participant: 'Tuan', text: "I aim to join an international fintech firm, ideally in cloud architecture or algorithmic risk analysis.", translation: "Dạ em định hướng gia nhập các công ty công nghệ tài chính quốc tế, cụ thể ở mảng kiến trúc đám mây hoặc phân tích rủi ro thuật toán ạ." },
        { participant: 'Placement Director Mr. Cole', text: "Our alumni network has strong partnerships in that sector. Let us optimize your portfolio for the upcoming executive career fair.", translation: "Mạng lưới cựu sinh viên trường ta có mối quan hệ rất sâu rộng trong ngành này. Chúng ta sẽ cùng hoàn thiện hồ sơ của em cho ngày hội việc làm cấp cao sắp tới nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Discussing Job Offers and Graduation Plans',
      participants: [
        { name: 'Quynh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Quynh', role: 'Senior' },
        { name: 'Thanh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Thanh', role: 'Senior' }
      ],
      lines: [
        { participant: 'Quynh', text: "Thanh, have you ordered your cap and gown for the commencement ceremony next month?", translation: "Thành ơi, bạn đã đăng ký thuê áo mũ cử nhân cho lễ tốt nghiệp tháng sau chưa?" },
        { participant: 'Thanh', text: "Done! My parents are flying in for the ceremony. What about your job hunt? Any news?", translation: "Xong xuôi rồi! Bố mẹ mình cũng bay vào dự lễ nè. Còn chuyện tìm việc của bạn sao rồi? Có tin gì mới không?" },
        { participant: 'Quynh', text: "I just got an offer from an international logistics company as a Junior Business Analyst!", translation: "Mình vừa nhận được lời mời làm việc từ một công ty logistics quốc tế ở vị trí Chuyên viên Phân tích Kinh doanh rồi!" },
        { participant: 'Thanh', text: "That is huge news! Congratulations! We definitely have to celebrate together this weekend.", translation: "Tin mừng chấn động luôn! Chúc mừng bạn nha! Cuối tuần này chắc chắn phải đi ăn mừng một bữa rồi." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Graduation Cap Toss Excitement',
      participants: [
        { name: 'Bao', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bao', role: 'Graduate' },
        { name: 'Duy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Duy', role: 'Graduate' }
      ],
      lines: [
        { participant: 'Bao', text: "We actually graduated! Can't believe four years flew by.", translation: "Tụi mình tốt nghiệp thật rồi! Không tin nổi bốn năm trôi qua nhanh vậy." },
        { participant: 'Duy', text: "We made it! Picture with the diploma?", translation: "Thành công rồi! Ra chụp tấm ảnh với tấm bằng cử nhân không?" },
        { participant: 'Bao', text: "Right by the school gate. Toss the caps on three!", translation: "Ngay cổng trường đi. Đếm đến ba cùng tung mũ nha!" },
        { participant: 'Duy', text: "One, two, three, fly!", translation: "Một, hai, ba, bay lên nào!" }
      ]
    }
  ],

  'student-19': [
    {
      type: 'pair',
      school: 'business',
      title: 'Discussing Academic Ethics and Plagiarism Verification',
      participants: [
        { name: 'Ethics Committee Chair Dr. Bennett', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bennett', role: 'Chair' },
        { name: 'Toan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Toan', role: 'Graduating Senior' }
      ],
      lines: [
        { participant: 'Toan', text: "Good morning, Dr. Bennett. I am finalizing my master's thesis and wish to verify our faculty's similarity index threshold.", translation: "Kính chào Tiến sĩ Bennett. Em đang hoàn thiện luận văn và muốn xác minh quy định về tỷ lệ tương đồng tối đa của khoa ạ." },
        { participant: 'Ethics Committee Chair Dr. Bennett', text: "Our institutional guidelines specify a Turnitin similarity index strictly below twelve percent, excluding bibliography and standard formulas.", translation: "Quy chuẩn của trường quy định tỷ lệ trùng lặp trên Turnitin phải tuyệt đối dưới 12%, loại trừ phần danh mục tài liệu và các công thức tiêu chuẩn." },
        { participant: 'Toan', text: "Understood, sir. All secondary sources and paraphrased findings have been attributed with direct DOIs.", translation: "Dạ em hiểu rồi thưa thầy. Toàn bộ các nguồn tham khảo thứ cấp và diễn giải đều được gắn mã định danh DOI chính xác ạ." },
        { participant: 'Ethics Committee Chair Dr. Bennett', text: "Exemplary adherence to academic integrity. Once the automated report is generated, submit your signed integrity declaration.", translation: "Tác phong học thuật rất chuẩn mực. Sau khi hệ thống xuất báo cáo tự động, em hãy nộp bản cam kết liêm chính có chữ ký nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Double-Checking Bibliography and Quotes with Teammate',
      participants: [
        { name: 'Hien', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Hien', role: 'Student' },
        { name: 'Phong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Phong', role: 'Student' }
      ],
      lines: [
        { participant: 'Hien', text: "Phong, before we submit our group paper, can you help me double-check our references section?", translation: "Phong ơi, trước khi nộp bài tập nhóm, bạn kiểm tra lại phần tài liệu tham khảo với mình một chút được không?" },
        { participant: 'Phong', text: "Sure thing! Are all the direct quotes properly enclosed in quotation marks with exact page numbers?", translation: "Được chứ! Mấy câu trích dẫn nguyên văn đã được đóng ngoặc kép kèm số trang chính xác chưa bạn?" },
        { participant: 'Hien', text: "Yes, I verified every single quote. I also ran our draft through the university grammar and citation checker.", translation: "Rồi, mình đã đối chiếu từng câu một. Mình cũng cho chạy qua công cụ kiểm tra ngữ pháp và trích dẫn của trường rồi." },
        { participant: 'Phong', text: "Looks spotless! That way we can be 100% confident our paper adheres to academic standards.", translation: "Quá chuẩn luôn! Làm kỹ như thế này tụi mình hoàn toàn yên tâm bài đạt chuẩn học thuật." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Fast Citation Check Before Upload',
      participants: [
        { name: 'Khang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Khang', role: 'Friend' },
        { name: 'Lam', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lam', role: 'Friend' }
      ],
      lines: [
        { participant: 'Khang', text: "Turnitin report clean?", translation: "Báo cáo Turnitin sạch đẹp chứ?" },
        { participant: 'Lam', text: "Only 4% similarity, all standard references. All clear!", translation: "Có 4% tương đồng à, toàn danh mục tham khảo. Ngon lành cành đào!" },
        { participant: 'Khang', text: "Awesome. Hit submit and let's go celebrate!", translation: "Tuyệt vời. Bấm nộp bài rồi đi ăn mừng thôi!" },
        { participant: 'Lam', text: "Uploaded! Mission accomplished.", translation: "Đã nộp! Nhiệm vụ hoàn thành xuất sắc." }
      ]
    }
  ],

  'student-20': [
    {
      type: 'pair',
      school: 'business',
      title: 'Global Student Delegate Briefing with Faculty Dean',
      participants: [
        { name: 'Dean Richardson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Richardson', role: 'Dean' },
        { name: 'Phuong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Phuong', role: 'Student Delegate' }
      ],
      lines: [
        { participant: 'Phuong', text: "Good morning, Dean Richardson. It is an absolute privilege to represent our university as a student delegate at the upcoming Asian Academic Summit in Singapore.", translation: "Kính chào Trưởng khoa Richardson. Em vô cùng vinh dự được đại diện cho trường ta làm đại biểu sinh viên tại Hội nghị Thượng đỉnh Học thuật Châu Á sắp tới tại Singapore ạ." },
        { participant: 'Dean Richardson', text: "Congratulations, Phuong. Have you finalized your presentation on sustainable urban development?", translation: "Thầy chúc mừng em, Phuong. Em đã hoàn thiện bài thuyết trình về phát triển đô thị bền vững chưa?" },
        { participant: 'Phuong', text: "Yes, sir. I have rehearsed the keynote presentation and coordinated with our international student exchange liaison.", translation: "Dạ rồi thưa thầy. Em đã tập dượt bài phát biểu chính và kết nối với ban điều phối trao đổi sinh viên quốc tế ạ." },
        { participant: 'Dean Richardson', text: "We have utmost confidence that you will represent our institution with distinction and foster fruitful global partnerships.", translation: "Nhà trường đặt trọn niềm tin rằng em sẽ đại diện cho trường thật xuất sắc và mở ra nhiều cơ hội hợp tác quốc tế tốt đẹp nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Preparing for an Exchange Semester Abroad',
      participants: [
        { name: 'Sarah', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah', role: 'Exchange Student' },
        { name: 'Nam', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nam', role: 'Student' }
      ],
      lines: [
        { participant: 'Nam', text: "Sarah, how are your preparations going for the exchange semester in Seoul next month?", translation: "Sarah ơi, khâu chuẩn bị cho kỳ học trao đổi ở Seoul tháng sau của bạn thế nào rồi?" },
        { participant: 'Sarah', text: "Pretty exciting! My student visa was approved yesterday, and the host university just confirmed my campus dormitory slot.", translation: "Hào hứng lắm bạn ơi! Visa du học của mình vừa được duyệt hôm qua, và trường bên đó cũng vừa xác nhận suất phòng ký túc xá rồi." },
        { participant: 'Nam', text: "That is fantastic! Are you planning to take Korean language electives alongside your business courses?", translation: "Tuyệt vời quá! Bạn có dự định học thêm mấy môn tự chọn tiếng Hàn song song với các môn kinh doanh không?" },
        { participant: 'Sarah', text: "Yes, definitely! I want to immerse myself fully in the local culture while studying abroad.", translation: "Có chứ chắc chắn rồi! Mình muốn hòa nhập tối đa vào văn hóa bản địa trong thời gian du học." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Airport Farewell for Exchange Flight',
      participants: [
        { name: 'Tuan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tuan', role: 'Friend' },
        { name: 'Phuong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Phuong', role: 'Friend' }
      ],
      lines: [
        { participant: 'Tuan', text: "Bags checked in? Flight on time?", translation: "Ký gửi hành lý xong hết chưa? Chuyến bay đúng giờ chứ?" },
        { participant: 'Phuong', text: "All good! Boarding in 20 minutes. Thanks for seeing me off!", translation: "Xong hết rồi! 20 phút nữa lên máy bay. Cảm ơn ông đã ra tiễn tui nha!" },
        { participant: 'Tuan', text: "Safe travels! Ping me when you touch down in Tokyo.", translation: "Thượng lộ bình an nha! Tới Tokyo nhớ nhắn tui một tiếng đó." },
        { participant: 'Phuong', text: "Will do! See you in six months!", translation: "Chắc chắn rồi! Hẹn gặp lại sau 6 tháng nữa nha!" }
      ]
    }
  ]
};
