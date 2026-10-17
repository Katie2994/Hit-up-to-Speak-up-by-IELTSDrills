// Distinct 3-tier Sentence Structures for Lessons student-01 to student-20
// Guarantees authentic academic, casual, and super-casual sentence variations.

import { Structure } from './types';

export const STUDENTS_STRUCTURES: Record<string, Structure[]> = {
  'student-01': [
    {
      phrase: "I am majoring in...",
      meaning: "Giới thiệu chuyên ngành học chính tại trường đại học.",
      vietnamese: "Tôi đang theo học chuyên ngành...",
      business: {
        phrase: "Allow me to introduce my academic focus; I am currently majoring in...",
        example: "Allow me to introduce my academic focus; I am currently majoring in Computer Science.",
        translation: "Cho phép em được giới thiệu định hướng học thuật của mình; em đang theo học chuyên ngành Khoa học Máy tính."
      },
      casualStyle: {
        phrase: "I'm majoring in...",
        example: "I'm majoring in Software Engineering at the tech campus.",
        translation: "Mình đang học chuyên ngành Kỹ thuật Phần mềm ở cơ sở công nghệ."
      },
      superCasual: {
        phrase: "Doing CS / Studying...",
        example: "Doing CS this term, what about you?",
        translation: "Đang học IT nè, còn bạn học gì?"
      }
    },
    {
      phrase: "The reason I chose this institution is...",
      meaning: "Giải thích động lực và lý do lựa chọn trường học.",
      vietnamese: "Lý do tôi chọn ngôi trường này là...",
      business: {
        phrase: "The primary rationale behind my decision to enroll in this institution is...",
        example: "The primary rationale behind my decision to enroll in this institution is its distinguished faculty in data systems.",
        translation: "Lý do căn bản đằng sau quyết định nhập học tại trường của em là đội ngũ giảng viên uy tín về hệ thống dữ liệu."
      },
      casualStyle: {
        phrase: "The main reason I picked this school is...",
        example: "The main reason I picked this school is because of its great campus facilities.",
        translation: "Lý do chính mình chọn trường này là vì cơ sở vật chất ở đây xịn xò."
      },
      superCasual: {
        phrase: "Came here for...",
        example: "Came here for the awesome tech labs and good vibe.",
        translation: "Vô đây chủ yếu vì mấy phòng lab ngon với môi trường thích."
      }
    },
    {
      phrase: "Nice to meet you all, let's cooperate well!",
      meaning: "Lời chào và mong muốn hợp tác tích cực trong tập thể mới.",
      vietnamese: "Rất vui được gặp các bạn, cùng hợp tác tốt nhé!",
      business: {
        phrase: "It is an honor to make your acquaintance; I look forward to productive collaboration.",
        example: "It is an honor to make your acquaintance; I look forward to productive academic collaboration.",
        translation: "Thật vinh dự được làm quen cùng quý thầy cô và các bạn; em rất mong đợi sự hợp tác học thuật hiệu quả."
      },
      casualStyle: {
        phrase: "Nice to meet you all! Looking forward to working together this semester.",
        example: "Nice to meet you all! Looking forward to working together on group projects this semester.",
        translation: "Rất vui được gặp mọi người! Rất mong được hợp tác làm bài tập nhóm cùng nhau kỳ này."
      },
      superCasual: {
        phrase: "Stoked to meet you guys! Let's crush this term.",
        example: "Stoked to meet you guys! Let's crush this term together.",
        translation: "Vui quá được gặp cả nhóm! Cùng nhau quẩy nát kỳ này nha."
      }
    },
    {
      phrase: "Are you attending the orientation seminar?",
      meaning: "Hỏi thăm về việc tham gia buổi định hướng sinh viên mới.",
      vietnamese: "Bạn có tham dự buổi hội thảo định hướng không?",
      business: {
        phrase: "May I enquire whether you will be participating in the official orientation symposium?",
        example: "May I enquire whether you will be participating in the official orientation symposium this afternoon?",
        translation: "Em xin phép được hỏi liệu bạn có tham dự hội nghị định hướng chính thức chiều nay không ạ?"
      },
      casualStyle: {
        phrase: "Are you going to the freshman orientation today?",
        example: "Are you going to the freshman orientation in the main auditorium today?",
        translation: "Hôm nay bạn có đi buổi định hướng tân sinh viên ở hội trường lớn không?"
      },
      superCasual: {
        phrase: "Orientation later? Heading there?",
        example: "Orientation later? Heading there together?",
        translation: "Tí nữa đi định hướng không? Cùng đi chung nhé?"
      }
    },
    {
      phrase: "Where are you from originally?",
      meaning: "Hỏi thăm quê quán và nguồn gốc của bạn học.",
      vietnamese: "Quê gốc của bạn ở đâu thế?",
      business: {
        phrase: "If I may enquire, which province or region do you call your hometown?",
        example: "If I may enquire, which province or region do you call your hometown?",
        translation: "Nếu em không làm phiền, cho em hỏi quê nhà của bạn ở tỉnh thành nào thế ạ?"
      },
      casualStyle: {
        phrase: "Where's your hometown? Did you move here for college?",
        example: "Where's your hometown? Did you move here for college from another province?",
        translation: "Quê bạn ở đâu thế? Bạn từ tỉnh khác chuyển lên đây học đại học hả?"
      },
      superCasual: {
        phrase: "Where from? Local or out of town?",
        example: "Where from? Local or out of town?",
        translation: "Dân ở đây hay dưới quê lên vậy?"
      }
    }
  ],

  'student-02': [
    {
      phrase: "My roommate is exceptionally supportive.",
      meaning: "Bày tỏ sự biết ơn đối với bạn cùng phòng.",
      vietnamese: "Bạn cùng phòng của tôi rất hay giúp đỡ tôi.",
      business: {
        phrase: "I am fortunate to reside with an exceptionally conscientious roommate.",
        example: "I am fortunate to reside with an exceptionally conscientious and supportive roommate.",
        translation: "Em rất may mắn được ở cùng một người bạn phòng vô cùng chu đáo và hay giúp đỡ."
      },
      casualStyle: {
        phrase: "My roommate is great, we get along really well.",
        example: "My roommate is great, we get along really well and study together.",
        translation: "Bạn cùng phòng của mình đỉnh lắm, tụi mình rất hòa thuận và hay học bài cùng nhau."
      },
      superCasual: {
        phrase: "Roomie's awesome, solid dude.",
        example: "Roomie's awesome, always got my back.",
        translation: "Bạn phòng xịn đét, lúc nào cũng chu đáo."
      }
    },
    {
      phrase: "Who is your assigned academic advisor?",
      meaning: "Hỏi thăm danh tính giáo viên cố vấn học tập.",
      vietnamese: "Cố vấn học tập được phân công của bạn là ai?",
      business: {
        phrase: "May I ask which faculty member has been designated as your academic advisor?",
        example: "May I ask which faculty member has been designated as your academic advisor for this academic year?",
        translation: "Cho em hỏi giảng viên nào được phân công làm cố vấn học tập cho bạn trong năm học này ạ?"
      },
      casualStyle: {
        phrase: "Who did you get as your academic advisor?",
        example: "Who did you get as your academic advisor for the semester?",
        translation: "Kỳ này bạn được phân vào thầy cô nào làm cố vấn học tập thế?"
      },
      superCasual: {
        phrase: "Got your advisor yet? Who?",
        example: "Got your advisor yet? Who'd you get?",
        translation: "Có cố vấn chưa? Rơi vào thầy cô nào vậy?"
      }
    },
    {
      phrase: "Our mentor gave us detailed feedback on...",
      meaning: "Chia sẻ lời nhận xét từ người hướng dẫn học tập.",
      vietnamese: "Người hướng dẫn đã cho chúng tôi phản hồi chi tiết về...",
      business: {
        phrase: "Our research mentor provided rigorous, constructive critiques regarding...",
        example: "Our research mentor provided rigorous, constructive critiques regarding our experimental methodology.",
        translation: "Người hướng dẫn nghiên cứu đã đưa ra những góp ý nghiêm cẩn và mang tính xây dựng về phương pháp thực nghiệm của chúng em."
      },
      casualStyle: {
        phrase: "Our mentor gave us lots of helpful feedback on our project draft.",
        example: "Our mentor gave us lots of helpful feedback on our project draft yesterday.",
        translation: "Anh mentor đã cho tụi mình rất nhiều nhận xét hữu ích về bản nháp dự án hôm qua."
      },
      superCasual: {
        phrase: "Mentor dropped solid notes on our slides.",
        example: "Mentor dropped solid notes on our slides, let's fix them.",
        translation: "Mentor nhận xét slide kỹ lắm, sửa lẹ thôi."
      }
    },
    {
      phrase: "We need to coordinate with our teammates.",
      meaning: "Nhấn mạnh sự cần thiết phải phối hợp nhịp nhàng với bạn cùng nhóm.",
      vietnamese: "Chúng ta cần phối hợp với các thành viên trong nhóm.",
      business: {
        phrase: "It is imperative that we establish seamless coordination among all team members.",
        example: "It is imperative that we establish seamless coordination among all team members before the milestone review.",
        translation: "Điều cấp thiết là chúng ta phải thiết lập sự phối hợp nhịp nhàng giữa các thành viên trước đợt đánh giá tiến độ."
      },
      casualStyle: {
        phrase: "Let's sync up with our teammates before the weekend.",
        example: "Let's sync up with our teammates before the weekend to split the tasks.",
        translation: "Tụi mình cùng họp nhanh với các bạn trong nhóm trước cuối tuần để chia việc nhé."
      },
      superCasual: {
        phrase: "Sync with the squad tonight?",
        example: "Sync with the squad tonight on Discord?",
        translation: "Tối nay họp nhóm qua Discord tí không?"
      }
    },
    {
      phrase: "I received approval from my academic guardian.",
      meaning: "Thông báo đã có sự đồng thuận từ phụ huynh hoặc người bảo hộ.",
      vietnamese: "Tôi đã nhận được sự đồng thuận từ người bảo hộ.",
      business: {
        phrase: "I have procured formal written consent from my designated legal guardian.",
        example: "I have procured formal written consent from my designated legal guardian for this field expedition.",
        translation: "Em đã nhận được văn bản chấp thuận chính thức từ người bảo hộ pháp lý cho chuyến đi thực tế này."
      },
      casualStyle: {
        phrase: "My parents signed the permission slip for the exchange trip.",
        example: "My parents signed the permission slip for the exchange trip without hesitation.",
        translation: "Bố mẹ mình đã ký giấy đồng ý cho chuyến đi trao đổi rồi."
      },
      superCasual: {
        phrase: "Parents gave the green light!",
        example: "Parents gave the green light! I'm officially going.",
        translation: "Phụ huynh bật đèn xanh rồi! Chính thức được đi nha."
      }
    }
  ],

  'student-03': [
    {
      phrase: "Where can I find the science laboratory?",
      meaning: "Hỏi đường đến phòng thí nghiệm khoa học.",
      vietnamese: "Tôi có thể tìm phòng thí nghiệm ở đâu thế?",
      business: {
        phrase: "Could you kindly direct me to the specialized research laboratory facility?",
        example: "Could you kindly direct me to the specialized research laboratory facility in Building B?",
        translation: "Thưa thầy cô, xin chỉ giúp em đường đến cơ sở phòng thí nghiệm nghiên cứu chuyên sâu ở Tòa B với ạ?"
      },
      casualStyle: {
        phrase: "Excuse me, where's the chemistry lab located?",
        example: "Excuse me, where's the chemistry lab located? Is it on this floor?",
        translation: "Bạn ơi cho mình hỏi phòng thực hành Hóa nằm ở đâu thế? Có ở tầng này không?"
      },
      superCasual: {
        phrase: "Where's the lab at? Which floor?",
        example: "Where's the lab at? Which floor?",
        translation: "Phòng lab ở đâu thế? Tầng mấy vậy?"
      }
    },
    {
      phrase: "The cafeteria is always crowded during lunch hour.",
      meaning: "Nhận xét về việc nhà ăn luôn đông đúc giờ trưa.",
      vietnamese: "Căng-tin lúc nào cũng đông nghẹt vào giờ ăn trưa.",
      business: {
        phrase: "The dining facility reaches maximum capacity during peak lunchtime intervals.",
        example: "The dining facility reaches maximum capacity during peak lunchtime intervals between noon and one.",
        translation: "Cơ sở nhà ăn đạt công suất tối đa trong các khung giờ ăn trưa cao điểm từ 12 đến 1 giờ."
      },
      casualStyle: {
        phrase: "The cafeteria is always packed at noon, let's go a bit earlier.",
        example: "The cafeteria is always packed at noon, let's go a bit earlier to find a table.",
        translation: "Căng-tin trưa nào cũng đông nghẹt, tụi mình đi sớm một chút để tìm bàn nhé."
      },
      superCasual: {
        phrase: "Canteen is jammed. Takeout instead?",
        example: "Canteen is jammed. Takeout instead?",
        translation: "Căng-tin nghẹt cứng rồi. Mua mang về đi?"
      }
    },
    {
      phrase: "Are the sports facilities open to all students?",
      meaning: "Hỏi về quyền sử dụng khu liên hợp thể thao cho sinh viên.",
      vietnamese: "Cơ sở thể thao có mở cửa tự do cho toàn bộ sinh viên không?",
      business: {
        phrase: "May I enquire whether the athletic complex is universally accessible to matriculated students?",
        example: "May I enquire whether the athletic complex is universally accessible to matriculated students without fee?",
        translation: "Em xin phép được hỏi liệu khu liên hợp thể thao có mở cửa miễn phí cho tất cả sinh viên đang theo học không ạ?"
      },
      casualStyle: {
        phrase: "Can any student use the campus gym and tennis courts?",
        example: "Can any student use the campus gym and tennis courts for free with a student ID?",
        translation: "Sinh viên có được dùng phòng gym và sân tennis của trường miễn phí bằng thẻ sinh viên không?"
      },
      superCasual: {
        phrase: "Gym free with student ID?",
        example: "Gym free with student ID? Thinking of hitting it later.",
        translation: "Phòng gym có thẻ sinh viên là vào miễn phí hả? Tính tí nữa ghé tập."
      }
    },
    {
      phrase: "I live in the western dormitory block.",
      meaning: "Giới thiệu vị trí nơi ở trong ký túc xá.",
      vietnamese: "Tôi sống ở khu ký túc xá phía tây.",
      business: {
        phrase: "I am accommodated within the west quadrant residential dormitory hall.",
        example: "I am accommodated within the west quadrant residential dormitory hall for international scholars.",
        translation: "Em hiện đang lưu trú tại khu ký túc xá phía tây dành cho học giả quốc tế."
      },
      casualStyle: {
        phrase: "I'm staying in the West Dorm building near the football field.",
        example: "I'm staying in the West Dorm building near the football field, it's very quiet.",
        translation: "Mình ở ký túc xá khu Tây gần sân bóng đá, trên đó yên tĩnh lắm."
      },
      superCasual: {
        phrase: "In Dorm West, 3rd floor.",
        example: "In Dorm West, 3rd floor. Pull up whenever!",
        translation: "Ở KTX khu Tây, tầng 3. Rảnh cứ ghé qua chơi!"
      }
    },
    {
      phrase: "The campus has excellent green spaces.",
      meaning: "Khen ngợi khuôn viên trường nhiều cây xanh thoáng đãng.",
      vietnamese: "Khuôn viên trường có không gian xanh rất tuyệt vời.",
      business: {
        phrase: "The university campus boasts an exceptionally verdant and well-maintained botanical landscape.",
        example: "The university campus boasts an exceptionally verdant and well-maintained botanical landscape.",
        translation: "Khuôn viên trường sở hữu cảnh quan cây xanh vô cùng tươi tốt và được chăm sóc chu đáo."
      },
      casualStyle: {
        phrase: "I really love how green and peaceful our campus is.",
        example: "I really love how green and peaceful our campus is, especially around the main lake.",
        translation: "Mình thích khuôn viên trường nhiều cây xanh và yên bình ghê, nhất là quanh khu vực hồ chính."
      },
      superCasual: {
        phrase: "Campus looks super chill under the trees.",
        example: "Campus looks super chill under the trees. Great spot to relax.",
        translation: "Trường nhìn chill phết dưới mấy hàng cây. Ngồi thư giãn bao êm."
      }
    }
  ],

  'student-04': [
    {
      phrase: "Could I photocopy your lecture notes?",
      meaning: "Xin phép mượn vở để đi photo tài liệu học tập.",
      vietnamese: "Mình mượn vở bạn đi photo bài giảng được không?",
      business: {
        phrase: "Would it be permissible for me to reproduce your comprehensive lecture annotations?",
        example: "Would it be permissible for me to reproduce your comprehensive lecture annotations for study review?",
        translation: "Liệu em có thể xin phép được photo lại phần ghi chép bài giảng chi tiết của bạn để ôn tập không ạ?"
      },
      casualStyle: {
        phrase: "Mind if I photocopy your chemistry notes after class?",
        example: "Mind if I photocopy your chemistry notes after class? I missed a few formulas.",
        translation: "Tan học mình mượn vở Hóa của bạn đi photo được không? Mình lỡ mất vài công thức."
      },
      superCasual: {
        phrase: "Borrow your notes real quick? Gonna snap pics.",
        example: "Borrow your notes real quick? Gonna snap pics with my phone.",
        translation: "Mượn vở xíu nha? Lấy điện thoại chụp lại vài trang."
      }
    },
    {
      phrase: "I access the university online database frequently.",
      meaning: "Nói về thói quen tra cứu cơ sở dữ liệu số của trường.",
      vietnamese: "Tôi thường xuyên truy cập cơ sở dữ liệu trực tuyến của trường.",
      business: {
        phrase: "I regularly retrieve scholarly peer-reviewed papers via the university's licensed digital repository.",
        example: "I regularly retrieve scholarly peer-reviewed papers via the university's licensed digital repository.",
        translation: "Em thường xuyên tra cứu các bài báo khoa học bình duyệt qua kho dữ liệu số có bản quyền của trường."
      },
      casualStyle: {
        phrase: "I download most of my research papers from the school's online library.",
        example: "I download most of my research papers from the school's online library using my student account.",
        translation: "Mình tải hầu hết các bài nghiên cứu từ thư viện điện tử của trường bằng tài khoản sinh viên."
      },
      superCasual: {
        phrase: "Grabbing papers off the school portal.",
        example: "Grabbing papers off the school portal for my essay right now.",
        translation: "Đang tải mấy bài báo trên cổng trường để làm tiểu luận nè."
      }
    },
    {
      phrase: "Do you have a spare pen I could borrow?",
      meaning: "Hỏi mượn một cây bút sơ cua phòng hờ.",
      vietnamese: "Bạn có cây bút nào thừa cho mình mượn tạm không?",
      business: {
        phrase: "Pardon me, might you possess an auxiliary writing instrument I could temporarily utilize?",
        example: "Pardon me, might you possess an auxiliary writing instrument I could temporarily utilize for this examination?",
        translation: "Xin thứ lỗi, không biết bạn có thừa cây bút nào để em mượn tạm trong bài thi này không ạ?"
      },
      casualStyle: {
        phrase: "Do you happen to have a spare pen? Mine just ran out of ink.",
        example: "Do you happen to have a spare pen? Mine just ran out of ink right before the quiz.",
        translation: "Bạn có cây bút nào thừa không? Bút mình vừa hết mực ngay trước bài kiểm tra."
      },
      superCasual: {
        phrase: "Got an extra pen? Mine's dry.",
        example: "Got an extra pen? Mine's dry.",
        translation: "Còn dư cây bút nào hông? Bút tui hết mực rồi."
      }
    },
    {
      phrase: "We should purchase the required textbook early.",
      meaning: "Khuyên mua sách giáo khoa sớm tránh hết hàng.",
      vietnamese: "Chúng ta nên mua giáo trình bắt buộc sớm.",
      business: {
        phrase: "It is prudent to acquire the mandatory curriculum textbooks prior to semester commencement.",
        example: "It is prudent to acquire the mandatory curriculum textbooks prior to semester commencement.",
        translation: "Điều khôn ngoan là nên mua giáo trình học phần bắt buộc trước khi học kỳ chính thức bắt đầu."
      },
      casualStyle: {
        phrase: "We should buy the course textbook soon before the bookstore runs out of stock.",
        example: "We should buy the course textbook soon before the bookstore runs out of stock.",
        translation: "Tụi mình nên mua sách giáo trình sớm kẻo nhà sách trường hết hàng."
      },
      superCasual: {
        phrase: "Get the textbook now or grab the PDF?",
        example: "Get the textbook now or grab the PDF? PDF is free!",
        translation: "Mua sách giấy hay tải bản PDF? PDF miễn phí ngon hơn!"
      }
    },
    {
      phrase: "Stationery items are available at the campus store.",
      meaning: "Chỉ nơi mua đồ dùng học tập tại căng-tin / nhà sách trường.",
      vietnamese: "Đồ văn phòng phẩm có sẵn tại cửa hàng trong khuôn viên trường.",
      business: {
        phrase: "Requisite academic stationery and drafting supplies may be procured at the campus bookstore.",
        example: "Requisite academic stationery and drafting supplies may be procured at the campus bookstore.",
        translation: "Các đồ dùng văn phòng phẩm học thuật cần thiết có thể được mua tại nhà sách khuôn viên trường."
      },
      casualStyle: {
        phrase: "The campus convenience store sells pens, notebooks, and highlighters at cheap prices.",
        example: "The campus convenience store sells pens, notebooks, and highlighters at cheap prices.",
        translation: "Cửa hàng tiện lợi trong trường có bán bút, tập vở và bút dạ quang giá rất rẻ."
      },
      superCasual: {
        phrase: "School shop's got cheap notebooks and pens.",
        example: "School shop's got cheap notebooks and pens. Restock there.",
        translation: "Cửa hàng trường bán tập với bút rẻ bèo à. Ra đó mua thêm đi."
      }
    }
  ],

  'student-05': [
    {
      phrase: "My schedule is completely packed this semester.",
      meaning: "Nói về thời gian biểu học tập bận rộn kín mít.",
      vietnamese: "Lịch học kỳ này của tôi bận kín mít rồi.",
      business: {
        phrase: "My academic calendar for this term is heavily congested with advanced seminar modules.",
        example: "My academic calendar for this term is heavily congested with advanced seminar modules.",
        translation: "Lịch học kỳ này của em rất dày đặc với các học phần chuyên đề nâng cao."
      },
      casualStyle: {
        phrase: "My schedule is completely packed this semester, hardly any free afternoons.",
        example: "My schedule is completely packed this semester, hardly any free afternoons.",
        translation: "Lịch học kỳ này của mình kín mít rồi, hầu như chẳng có buổi chiều nào rảnh."
      },
      superCasual: {
        phrase: "Schedule's totally jammed this term.",
        example: "Schedule's totally jammed this term, zero free time.",
        translation: "Lịch kín bưng luôn, chẳng có tí thời gian rảnh nào."
      }
    },
    {
      phrase: "We need to prioritize this assignment.",
      meaning: "Nhấn mạnh việc cần ưu tiên làm bài tập lớn trước.",
      vietnamese: "Chúng ta cần phải ưu tiên làm bài tập này trước.",
      business: {
        phrase: "It is paramount that we prioritize this empirical capstone above secondary coursework.",
        example: "It is paramount that we prioritize this empirical capstone above secondary coursework.",
        translation: "Điều tối quan trọng là chúng ta phải ưu tiên đồ án thực nghiệm này lên trên các bài tập thứ cấp."
      },
      casualStyle: {
        phrase: "Let's prioritize this research paper first since the deadline is next Monday.",
        example: "Let's prioritize this research paper first since the deadline is next Monday.",
        translation: "Tụi mình ưu tiên làm bài nghiên cứu này trước đi vì hạn chót là thứ Hai tới rồi."
      },
      superCasual: {
        phrase: "Put this essay on top of the pile.",
        example: "Put this essay on top of the pile, it's due in two days!",
        translation: "Ưu tiên bài luận này lên đầu đi, hai ngày nữa nộp rồi!"
      }
    },
    {
      phrase: "Are you free for a study session tomorrow?",
      meaning: "Rủ bạn học cùng tham gia một buổi tự học ôn bài.",
      vietnamese: "Ngày mai bạn có rảnh tham gia một buổi học nhóm không?",
      business: {
        phrase: "Would your availability permit a collaborative academic revision session tomorrow morning?",
        example: "Would your availability permit a collaborative academic revision session tomorrow morning?",
        translation: "Liệu thời gian biểu của bạn có cho phép chúng ta có một buổi ôn tập học thuật vào sáng mai không ạ?"
      },
      casualStyle: {
        phrase: "Are you free to do a quick study session together tomorrow at the library?",
        example: "Are you free to do a quick study session together tomorrow at the library?",
        translation: "Ngày mai bạn có rảnh qua thư viện học nhóm một buổi với mình không?"
      },
      superCasual: {
        phrase: "Down to study together tomorrow?",
        example: "Down to study together tomorrow? Library around 2?",
        translation: "Mai rảnh học nhóm không? Tầm 2 giờ ở thư viện nha?"
      }
    },
    {
      phrase: "The final submission deadline is strictly enforced.",
      meaning: "Nhắc nhở hạn nộp bài cuối cùng được quy định rất nghiêm ngặt.",
      vietnamese: "Hạn chót nộp bài cuối cùng được áp dụng rất nghiêm ngặt.",
      business: {
        phrase: "The submission deadline is uncompromisingly enforced by the faculty examination committee.",
        example: "The submission deadline is uncompromisingly enforced by the faculty examination committee.",
        translation: "Hạn chót nộp bài được hội đồng khảo thí của khoa thực thi một cách nghiêm ngặt tuyệt đối."
      },
      casualStyle: {
        phrase: "Remember that the professor won't accept any late submissions past midnight.",
        example: "Remember that the professor won't accept any late submissions past midnight.",
        translation: "Nhớ là thầy sẽ không nhận bất kỳ bài nộp muộn nào sau nửa đêm đâu đấy."
      },
      superCasual: {
        phrase: "Hard deadline at midnight, no excuses!",
        example: "Hard deadline at midnight, no excuses! Hit submit early.",
        translation: "Hạn chót nửa đêm nghiêm cấm lý do! Nộp sớm đi cho chắc."
      }
    },
    {
      phrase: "Let's match our weekly timetables.",
      meaning: "Đề xuất so khớp thời gian biểu để tìm giờ rảnh chung.",
      vietnamese: "Chúng ta hãy so khớp thời khóa biểu tuần nhé.",
      business: {
        phrase: "Let us reconcile our respective institutional timetables to establish optimal meeting times.",
        example: "Let us reconcile our respective institutional timetables to establish optimal meeting times.",
        translation: "Chúng ta hãy cùng đối chiếu thời khóa biểu của nhau để tìm ra khung giờ gặp mặt tối ưu nhất."
      },
      casualStyle: {
        phrase: "Send me your class schedule so we can figure out when we're both free.",
        example: "Send me your class schedule so we can figure out when we're both free.",
        translation: "Gửi thời khóa biểu của bạn qua để tụi mình xem khi nào cả hai cùng rảnh nhé."
      },
      superCasual: {
        phrase: "Drop your schedule, let's find a free slot.",
        example: "Drop your schedule, let's find a free slot to meet.",
        translation: "Quăng cái thời khóa biểu qua đây, kiếm lúc rảnh gặp."
      }
    }
  ],

  'student-06': [
    {
      phrase: "Could you kindly clarify that last point?",
      meaning: "Thỉnh cầu giảng viên làm rõ một điểm khó hiểu trong bài giảng.",
      vietnamese: "Thầy/Cô có thể vui lòng làm rõ ý cuối cùng được không ạ?",
      business: {
        phrase: "Could you kindly elaborate upon the theoretical distinction outlined in that last equation?",
        example: "Could you kindly elaborate upon the theoretical distinction outlined in that last equation, Professor?",
        translation: "Thưa Thầy/Cô, xin vui lòng làm rõ hơn sự khác biệt lý thuyết trong phương trình cuối cùng được không ạ?"
      },
      casualStyle: {
        phrase: "Sorry, could you explain that last step again? I didn't quite catch it.",
        example: "Sorry, could you explain that last step again? I didn't quite catch it.",
        translation: "Xin lỗi thầy, thầy có thể giảng lại bước cuối được không ạ? Em chưa kịp ghi lại."
      },
      superCasual: {
        phrase: "Recap that last bit, please?",
        example: "Recap that last bit, please? Missed the formula.",
        translation: "Nói lại khúc cuối xíu được không? Lỡ mất công thức rồi."
      }
    },
    {
      phrase: "May I be excused for a moment?",
      meaning: "Xin phép ra ngoài một lát trong giờ học.",
      vietnamese: "Em xin phép được ra ngoài một lát có được không ạ?",
      business: {
        phrase: "May I request permission to step outside for a brief moment?",
        example: "May I request permission to step outside for a brief moment, Professor?",
        translation: "Thưa Thầy/Cô, em xin phép được ra ngoài trong chốc lát được không ạ?"
      },
      casualStyle: {
        phrase: "Excuse me, may I step out for a few minutes?",
        example: "Excuse me, may I step out for a few minutes to take an urgent call?",
        translation: "Em xin lỗi, em xin phép ra ngoài vài phút nghe cuộc gọi gấp được không ạ?"
      },
      superCasual: {
        phrase: "Step out a sec, back soon.",
        example: "Step out a sec, back soon.",
        translation: "Ra ngoài một xíu, vô liền."
      }
    },
    {
      phrase: "I'd like to ask a follow-up question.",
      meaning: "Đề xuất đặt câu hỏi phụ tiếp nối câu chuyện đang diễn thuyết.",
      vietnamese: "Em có câu hỏi phụ muốn hỏi thêm ạ.",
      business: {
        phrase: "With your permission, I would like to posit a supplementary enquiry regarding this hypothesis.",
        example: "With your permission, I would like to posit a supplementary enquiry regarding this empirical hypothesis.",
        translation: "Nếu Thầy/Cô cho phép, em xin được đặt thêm một câu hỏi bổ trợ về giả thuyết thực nghiệm này ạ."
      },
      casualStyle: {
        phrase: "I have a quick follow-up question regarding the case study.",
        example: "I have a quick follow-up question regarding the case study we just discussed.",
        translation: "Em có một câu hỏi nhỏ muốn hỏi thêm về trường hợp nghiên cứu vừa thảo luận ạ."
      },
      superCasual: {
        phrase: "Quick question on that!",
        example: "Quick question on that! Does this apply everywhere?",
        translation: "Hỏi nhanh chỗ đó xíu! Cái này áp dụng cho mọi trường hợp hả thầy?"
      }
    }
  ],

  'student-07': [
    {
      phrase: "When is this assignment due?",
      meaning: "Hỏi về thời hạn nộp bài tập được giao.",
      vietnamese: "Khi nào bài tập này đến hạn nộp vậy?",
      business: {
        phrase: "May I confirm the exact institutional deadline for this research submission?",
        example: "May I confirm the exact institutional deadline for this research submission, Professor?",
        translation: "Em xin phép xác nhận lại thời hạn nộp bài nghiên cứu này chính xác là khi nào ạ?"
      },
      casualStyle: {
        phrase: "When is our history assignment due again?",
        example: "When is our history assignment due again? Is it this Friday or next Monday?",
        translation: "Bài tập Lịch sử của tụi mình khi nào nộp ấy nhỉ? Thứ Sáu này hay thứ Hai tuần sau?"
      },
      superCasual: {
        phrase: "Due date on the essay?",
        example: "Due date on the essay? Midnight tonight?",
        translation: "Hạn chót bài luận là lúc nào? Nửa đêm nay hả?"
      }
    },
    {
      phrase: "I got a pretty high score on...",
      meaning: "Chia sẻ kết quả điểm số tốt trong bài thi.",
      vietnamese: "Tớ đạt điểm khá cao trong bài kiểm tra...",
      business: {
        phrase: "I am gratified to report that I attained an exceptional mark in...",
        example: "I am gratified to report that I attained an exceptional mark in the quantitative finance examination.",
        translation: "Em rất vui mừng được báo cáo rằng mình đã đạt số điểm xuất sắc trong kỳ thi Tài chính Định lượng."
      },
      casualStyle: {
        phrase: "I got a surprisingly high score on the midterm exam!",
        example: "I got a surprisingly high score on the midterm exam, so relieved!",
        translation: "Mình đạt điểm cao bất ngờ trong bài thi giữa kỳ, nhẹ cả người!"
      },
      superCasual: {
        phrase: "Crushed the test, got an A!",
        example: "Crushed the test, got an A! Hotpot time.",
        translation: "Trúng tủ bài thi rồi, được điểm A luôn! Đi ăn lẩu thôi."
      }
    },
    {
      phrase: "Let's review the mock quiz questions together.",
      meaning: "Rủ bạn cùng luyện tập lại bộ câu hỏi thi thử.",
      vietnamese: "Chúng mình cùng duyệt lại các câu hỏi thi thử nhé.",
      business: {
        phrase: "Let us systematically examine the sample examination items prior to the formal evaluation.",
        example: "Let us systematically examine the sample examination items prior to the formal evaluation session.",
        translation: "Chúng ta hãy cùng nhau rà soát lại các câu hỏi mẫu một cách có hệ thống trước buổi đánh giá chính thức."
      },
      casualStyle: {
        phrase: "Let's sit down and run through the practice questions together.",
        example: "Let's sit down and run through the practice questions together at the library.",
        translation: "Tụi mình cùng ngồi xuống duyệt qua mấy câu hỏi luyện tập ở thư viện nhé."
      },
      superCasual: {
        phrase: "Grind sample questions together?",
        example: "Grind sample questions together? In the dorm study room?",
        translation: "Cày đề mẫu chung hông? Ở phòng tự học KTX nha?"
      }
    }
  ],

  'student-08': [
    {
      phrase: "How was your examination performance?",
      meaning: "Hỏi thăm cảm nhận và kết quả bài thi của bạn bè.",
      vietnamese: "Bạn làm bài thi thế nào rồi?",
      business: {
        phrase: "How would you assess the rigour and your outcome in the recent examination session?",
        example: "How would you assess the rigour and your outcome in the recent examination session?",
        translation: "Bạn đánh giá độ khó và kết quả làm bài của mình trong kỳ thi vừa qua như thế nào?"
      },
      casualStyle: {
        phrase: "How did the final exam go? Did you finish all the questions?",
        example: "How did the final exam go? Did you finish all the questions on time?",
        translation: "Bài thi cuối kỳ thế nào rồi? Bạn có làm kịp hết các câu hỏi không?"
      },
      superCasual: {
        phrase: "How'd the test go? Survived?",
        example: "How'd the test go? Survived? Looked tough!",
        translation: "Thi sao rồi? Sống sót hông? Thấy đề căng phết!"
      }
    },
    {
      phrase: "I stayed up all night cramming.",
      meaning: "Nói về việc thức trắng đêm nhồi nhét ôn thi.",
      vietnamese: "Tôi đã thức trắng đêm để cày bài thi.",
      business: {
        phrase: "I engaged in prolonged nocturnal revision to consolidate the extensive curriculum syllabus.",
        example: "I engaged in prolonged nocturnal revision to consolidate the extensive curriculum syllabus.",
        translation: "Em đã dành trọn thời gian ban đêm để hệ thống hóa toàn bộ khối lượng kiến thức của giáo trình."
      },
      casualStyle: {
        phrase: "I pulled an all-nighter cramming for organic chemistry, I'm exhausted.",
        example: "I pulled an all-nighter cramming for organic chemistry, I'm exhausted.",
        translation: "Mình đã thức trắng đêm cày môn Hóa hữu cơ, giờ kiệt sức luôn."
      },
      superCasual: {
        phrase: "Pulled an all-nighter, running on pure caffeine.",
        example: "Pulled an all-nighter, running on pure caffeine right now.",
        translation: "Thức trắng đêm luôn, giờ sống nhờ cà phê thôi đó."
      }
    }
  ],

  'student-09': [
    {
      phrase: "How should we allocate our group tasks?",
      meaning: "Hỏi cách phân chia công việc trong bài tập nhóm.",
      vietnamese: "Chúng ta nên phân chia công việc nhóm thế nào?",
      business: {
        phrase: "How shall we strategically allocate project responsibilities among our team constituents?",
        example: "How shall we strategically allocate project responsibilities among our team constituents?",
        translation: "Chúng ta sẽ phân bổ trách nhiệm dự án giữa các thành viên một cách chiến lược như thế nào?"
      },
      casualStyle: {
        phrase: "How should we split up the workload for this presentation?",
        example: "How should we split up the workload for this presentation so everyone has equal parts?",
        translation: "Tụi mình chia đầu việc bài thuyết trình này thế nào để ai cũng có phần cân bằng?"
      },
      superCasual: {
        phrase: "Who's taking slides, who's speaking?",
        example: "Who's taking slides, who's speaking? Let's divide quick.",
        translation: "Ai làm slide ai thuyết trình? Chia nhanh lẹ nha."
      }
    },
    {
      phrase: "Let's rehearse the presentation slides once more.",
      meaning: "Rủ cả nhóm tập dượt lại bài thuyết trình thêm một lần nữa.",
      vietnamese: "Chúng ta cùng tập dượt slide thuyết trình thêm lần nữa nhé.",
      business: {
        phrase: "I propose a comprehensive dry run of our presentation slides to ensure precise timekeeping.",
        example: "I propose a comprehensive dry run of our presentation slides to ensure precise timekeeping.",
        translation: "Tôi đề xuất một buổi tập dượt tổng thể để đảm bảo kiểm soát thời gian chuẩn xác nhất."
      },
      casualStyle: {
        phrase: "Let's do one more practice run of our slides before tomorrow's class.",
        example: "Let's do one more practice run of our slides before tomorrow's class.",
        translation: "Tụi mình tập dượt thêm một lần nữa trước tiết học ngày mai nha."
      },
      superCasual: {
        phrase: "One more run-through, then we're good!",
        example: "One more run-through, then we're good to go!",
        translation: "Chạy thử thêm lần nữa là bao chuẩn bài!"
      }
    }
  ],

  'student-10': [
    {
      phrase: "Could I schedule a meeting during your office hours?",
      meaning: "Xin hẹn gặp giảng viên trong giờ tư vấn văn phòng.",
      vietnamese: "Em có thể hẹn gặp Thầy/Cô trong giờ tư vấn được không ạ?",
      business: {
        phrase: "Would it be convenient for me to secure an appointment during your scheduled faculty office hours?",
        example: "Would it be convenient for me to secure an appointment during your scheduled faculty office hours?",
        translation: "Liệu em có thể xin một lịch hẹn trong khung giờ tiếp sinh viên chính thức của Thầy/Cô được không ạ?"
      },
      casualStyle: {
        phrase: "Could I drop by your office hours tomorrow to ask about the assignment?",
        example: "Could I drop by your office hours tomorrow to ask about the assignment?",
        translation: "Ngày mai em có thể ghé qua giờ tư vấn của thầy để hỏi về bài tập được không ạ?"
      },
      superCasual: {
        phrase: "Free for office hours tomorrow?",
        example: "Free for office hours tomorrow? Just need a quick sign-off.",
        translation: "Mai thầy có giờ tư vấn không ạ? Em chỉ cần xin chữ ký nhanh thôi."
      }
    }
  ],

  'student-11': [
    {
      phrase: "Are you interested in joining any student clubs?",
      meaning: "Hỏi thăm sự hào hứng tham gia các câu lạc bộ sinh viên.",
      vietnamese: "Bạn có hứng thú tham gia câu lạc bộ sinh viên nào không?",
      business: {
        phrase: "Do you intend to participate in any co-curricular student societies this academic term?",
        example: "Do you intend to participate in any co-curricular student societies this academic term?",
        translation: "Bạn có dự định tham gia vào các hội sinh viên ngoại khóa trong học kỳ này không?"
      },
      casualStyle: {
        phrase: "Are you planning to sign up for any student clubs at the club fair?",
        example: "Are you planning to sign up for any student clubs at the club fair this Thursday?",
        translation: "Thứ Năm này bạn có định đăng ký vào câu lạc bộ sinh viên nào ở ngày hội CLB không?"
      },
      superCasual: {
        phrase: "Joining any clubs this term?",
        example: "Joining any clubs this term? Music club looks dope.",
        translation: "Kỳ này có vào CLB nào hông? CLB Âm nhạc trông chiến phết."
      }
    }
  ],

  'student-12': [
    {
      phrase: "Let's set up a cleaning schedule for our dorm room.",
      meaning: "Thống nhất lịch dọn vệ sinh phòng ký túc xá.",
      vietnamese: "Tụi mình cùng lên lịch dọn dẹp phòng ký túc xá nhé.",
      business: {
        phrase: "I propose we institute a structured sanitation rota for our shared residential quarters.",
        example: "I propose we institute a structured sanitation rota for our shared residential quarters.",
        translation: "Tôi đề xuất chúng ta thiết lập một lịch trực nhật vệ sinh có tổ chức cho phòng ở chung."
      },
      casualStyle: {
        phrase: "Let's make a weekly chore chart so our room stays clean.",
        example: "Let's make a weekly chore chart so our room stays clean and organized.",
        translation: "Tụi mình lập bảng phân công việc nhà hàng tuần để phòng luôn sạch sẽ ngăn nắp nhé."
      },
      superCasual: {
        phrase: "Split chores? Trash on Mondays, floors on Thursdays.",
        example: "Split chores? Trash on Mondays, floors on Thursdays.",
        translation: "Chia việc nhà hông? Thứ Hai đổ rác, thứ Năm lau nhà nhen."
      }
    }
  ],

  'student-13': [
    {
      phrase: "Can I get an iced Americano to go?",
      meaning: "Gọi đồ uống mang đi nhanh giữa các tiết học.",
      vietnamese: "Cho mình một ly Americano đá mang đi nhé.",
      business: {
        phrase: "I would like to purchase a chilled beverage for takeaway consumption, please.",
        example: "I would like to purchase a chilled beverage for takeaway consumption, please.",
        translation: "Cho tôi xin phép được mua một ly đồ uống ướp lạnh mang đi ạ."
      },
      casualStyle: {
        phrase: "Can I get a large iced Americano with light ice to go, please?",
        example: "Can I get a large iced Americano with light ice to go, please?",
        translation: "Cho mình một ly Americano đá size lớn, ít đá mang đi với nha."
      },
      superCasual: {
        phrase: "Iced Americano to go, please!",
        example: "Iced Americano to go, please! Running to class.",
        translation: "Cho ly Americano đá mang đi với! Đang vội vào lớp."
      }
    }
  ],

  'student-14': [
    {
      phrase: "How do you balance coursework with part-time work?",
      meaning: "Hỏi cách cân bằng giữa việc học trên trường và đi làm thêm.",
      vietnamese: "Bạn cân bằng việc học với việc làm thêm thế nào?",
      business: {
        phrase: "How do you reconcile academic commitments with professional employment responsibilities?",
        example: "How do you reconcile academic commitments with professional employment responsibilities?",
        translation: "Bạn điều hòa giữa nghĩa vụ học thuật và trách nhiệm công việc chuyên môn như thế nào?"
      },
      casualStyle: {
        phrase: "How do you manage to work part-time without falling behind in class?",
        example: "How do you manage to work part-time without falling behind in class?",
        translation: "Làm sao bạn vừa đi làm thêm mà vẫn không bị đuối bài trên lớp thế?"
      },
      superCasual: {
        phrase: "Work + school? How you holding up?",
        example: "Work + school? How you holding up? Need caffeine?",
        translation: "Vừa học vừa cày việc thêm? Vẫn ổn chứ ông bạn? Cần nạp cà phê không?"
      }
    }
  ],

  'student-15': [
    {
      phrase: "The third floor is a strictly quiet study zone.",
      meaning: "Nhắc nhở về khu vực tự học yên tĩnh tuyệt đối trong thư viện.",
      vietnamese: "Tầng ba là khu vực tự học hoàn toàn yên tĩnh.",
      business: {
        phrase: "The tertiary floor is designated as a rigorously silent academic research sanctuary.",
        example: "The tertiary floor is designated as a rigorously silent academic research sanctuary.",
        translation: "Tầng ba được chỉ định là không gian nghiên cứu học thuật hoàn toàn yên tĩnh và trang nghiêm."
      },
      casualStyle: {
        phrase: "Head up to the third floor if you need absolute silence to focus.",
        example: "Head up to the third floor if you need absolute silence to focus on your essay.",
        translation: "Lên tầng ba đi nếu bạn cần không gian yên tĩnh tuyệt đối để tập trung viết bài luận."
      },
      superCasual: {
        phrase: "Third floor's whisper-quiet, perfect spot.",
        example: "Third floor's whisper-quiet, perfect spot to grind.",
        translation: "Tầng ba im phăng phắc luôn, chỗ cày bài lý tưởng nhất."
      }
    }
  ],

  'student-16': [
    {
      phrase: "I received notification of my scholarship grant.",
      meaning: "Thông báo đã nhận được tin cấp học bổng tài trợ.",
      vietnamese: "Tôi đã nhận được thông báo cấp học bổng.",
      business: {
        phrase: "I am honored to have received formal notification regarding my merit-based scholarship award.",
        example: "I am honored to have received formal notification regarding my merit-based scholarship award.",
        translation: "Em rất vinh dự được nhận thông báo chính thức về giải thưởng học bổng dựa trên thành tích học tập."
      },
      casualStyle: {
        phrase: "I just got an email saying I won the university scholarship!",
        example: "I just got an email saying I won the university scholarship, so stoked!",
        translation: "Mình vừa nhận được email báo trúng học bổng của trường nè, vui quá trời!"
      },
      superCasual: {
        phrase: "Got the scholarship! Dinner's on me!",
        example: "Got the scholarship! Dinner's on me tonight!",
        translation: "Được học bổng rồi! Tối nay tui bao ăn mừng nha!"
      }
    }
  ],

  'student-17': [
    {
      phrase: "Taking regular breaks helps prevent burnout.",
      meaning: "Khuyên nghỉ ngơi định kỳ để phòng ngừa kiệt sức.",
      vietnamese: "Nghỉ ngơi đều đặn giúp phòng tránh kiệt sức.",
      business: {
        phrase: "Intermittent rest intervals are essential to prevent cognitive exhaustion and academic burnout.",
        example: "Intermittent rest intervals are essential to prevent cognitive exhaustion and academic burnout.",
        translation: "Các quãng nghỉ ngơi định kỳ là thiết yếu để ngăn ngừa tình trạng suy kiệt nhận thức và kiệt sức học đường."
      },
      casualStyle: {
        phrase: "Make sure you take short walks so you don't burn yourself out before finals.",
        example: "Make sure you take short walks so you don't burn yourself out before finals.",
        translation: "Nhớ thỉnh thoảng đi dạo xíu kẻo bị kiệt sức trước kỳ thi cuối kỳ đấy nhé."
      },
      superCasual: {
        phrase: "Step away from the screen, take 5!",
        example: "Step away from the screen, take 5! Brain needs air.",
        translation: "Rời mắt khỏi màn hình đi, nghỉ 5 phút! Não cần thở tí."
      }
    }
  ],

  'student-18': [
    {
      phrase: "I am preparing my graduate portfolio.",
      meaning: "Chuẩn bị hồ sơ năng lực tốt nghiệp để xin việc.",
      vietnamese: "Tôi đang chuẩn bị hồ sơ năng lực tốt nghiệp.",
      business: {
        phrase: "I am actively compiling a comprehensive graduate credentials portfolio for prospective employers.",
        example: "I am actively compiling a comprehensive graduate credentials portfolio for prospective employers.",
        translation: "Em đang tích cực tổng hợp hồ sơ năng lực sau đại học toàn diện để gửi tới các nhà tuyển dụng tiềm năng."
      },
      casualStyle: {
        phrase: "I'm updating my resume and LinkedIn profile for job applications.",
        example: "I'm updating my resume and LinkedIn profile for job applications this month.",
        translation: "Tháng này mình đang cập nhật lại CV với trang LinkedIn để nộp hồ sơ xin việc."
      },
      superCasual: {
        phrase: "Polishing the CV, ready to apply!",
        example: "Polishing the CV, ready to apply to tech firms.",
        translation: "Tút tát lại cái CV xong xuôi, chuẩn bị nộp đơn các công ty công nghệ thôi!"
      }
    }
  ],

  'student-19': [
    {
      phrase: "Academic integrity requires accurate citation.",
      meaning: "Liêm chính học thuật đòi hỏi việc trích dẫn nguồn chuẩn xác.",
      vietnamese: "Liêm chính học thuật đòi hỏi việc trích dẫn chính xác.",
      business: {
        phrase: "Strict academic integrity mandates comprehensive bibliographic attribution for all external sources.",
        example: "Strict academic integrity mandates comprehensive bibliographic attribution for all external sources.",
        translation: "Liêm chính học thuật nghiêm ngặt bắt buộc phải ghi chú đầy đủ danh mục trích dẫn cho mọi nguồn tài liệu bên ngoài."
      },
      casualStyle: {
        phrase: "Always remember to cite your sources properly to avoid plagiarism issues.",
        example: "Always remember to cite your sources properly to avoid plagiarism issues.",
        translation: "Luôn nhớ trích dẫn nguồn cẩn thận để tránh mắc lỗi đạo văn nhé."
      },
      superCasual: {
        phrase: "Cite everything, zero Turnitin drama!",
        example: "Cite everything, zero Turnitin drama later.",
        translation: "Trích dẫn hết đi cho chắc, khỏi lo bị quét trùng lặp rắc rối."
      }
    }
  ],

  'student-20': [
    {
      phrase: "I am honored to represent our university as a student delegate.",
      meaning: "Bày tỏ niềm tự hào khi làm đại biểu sinh viên giao lưu quốc tế.",
      vietnamese: "Tôi rất vinh dự được đại diện trường làm đại biểu sinh viên.",
      business: {
        phrase: "I consider it an exceptional privilege to represent our academic institution as an official delegate.",
        example: "I consider it an exceptional privilege to represent our academic institution as an official delegate at the global summit.",
        translation: "Em coi đó là một đặc ân to lớn khi được đại diện cho cơ sở học thuật của trường ta làm đại biểu chính thức tại hội nghị thượng đỉnh toàn cầu."
      },
      casualStyle: {
        phrase: "I'm super proud to be chosen as a student delegate for the exchange conference.",
        example: "I'm super proud to be chosen as a student delegate for the exchange conference in Japan.",
        translation: "Mình cực kỳ tự hào khi được chọn làm đại biểu sinh viên tham dự hội thảo trao đổi ở Nhật Bản."
      },
      superCasual: {
        phrase: "Repping our school abroad! So hyped!",
        example: "Repping our school abroad! So hyped for Tokyo!",
        translation: "Đại diện trường đi nước ngoài nè! Háo hức đi Tokyo quá chừng!"
      }
    }
  ]
};
