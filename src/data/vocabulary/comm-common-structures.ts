// Distinct 3-tier Sentence Structures (Business, Casual, Super Casual) for Lessons 01 - 20 (Phần lớn học viên)
// Guarantees 5 high-yield structures per topic, accurately adapted across all 3 communication schools.

import { Structure } from './types';

export const COMMON_LESSONS_STRUCTURES: Record<string, Structure[]> = {
  // -------------------------------------------------------------
  // LESSON 01: Làm quen & Giới thiệu bản thân
  // -------------------------------------------------------------
  'lesson-01': [
    {
      phrase: "Allow me to introduce myself.",
      meaning: "Mở đầu lời chào và tự giới thiệu bản thân.",
      vietnamese: "Cho phép tôi tự giới thiệu bản thân.",
      business: {
        phrase: "Allow me to formally introduce myself; my name is [Name].",
        example: "Allow me to formally introduce myself; my name is Diana Hughes from Regional Operations.",
        translation: "Cho phép tôi được trang trọng tự giới thiệu bản thân; tôi là Diana Hughes từ bộ phận Vận hành khu vực."
      },
      casualStyle: {
        phrase: "Hey there! I don't think we've met yet, I'm [Name].",
        example: "Hey there! I don't think we've met yet, I'm Minh, your presentation partner.",
        translation: "Chào bạn! Hình như tụi mình chưa gặp nhau bao giờ nhỉ, mình là Minh, bạn đồng hành thuyết trình của bạn."
      },
      superCasual: {
        phrase: "Yo, what's good! Name's [Name].",
        example: "Yo, what's good! Name's Ryan, you new around the skatepark?",
        translation: "Ê chào ông bạn! Tui tên Ryan, mới tới khu trượt ván này chơi à?"
      }
    },
    {
      phrase: "Where are you originally from?",
      meaning: "Hỏi về quê quán hoặc nơi sinh trưởng.",
      vietnamese: "Bạn vốn dĩ đến từ đâu?",
      business: {
        phrase: "Could you advise where your regional division is based?",
        example: "Could you advise where your regional division is based originally?",
        translation: "Anh/chị có thể cho biết phân ban khu vực của mình vốn đặt tại đâu không ạ?"
      },
      casualStyle: {
        phrase: "Where are you originally from? Born and raised?",
        example: "Where are you originally from? Were you born and raised in Da Nang?",
        translation: "Bạn vốn quê ở đâu đến thế? Sinh ra và lớn lên ở Đà Nẵng luôn à?"
      },
      superCasual: {
        phrase: "Where you reppin' originally, bro?",
        example: "Sick trick! Where you reppin' originally, bro?",
        translation: "Cú nhảy chất đấy! Quê gốc ông ở đâu thế ông bạn ơi?"
      }
    },
    {
      phrase: "What do you do for work?",
      meaning: "Hỏi về công việc hoặc chuyên môn nghề nghiệp.",
      vietnamese: "Bạn làm công việc gì?",
      business: {
        phrase: "May I inquire what industry sector you specialize in?",
        example: "May I inquire what industry sector you specialize in within the consultancy?",
        translation: "Tôi có thể xin phép hỏi anh/chị đang chuyên môn sâu trong lĩnh vực ngành nghề nào không ạ?"
      },
      casualStyle: {
        phrase: "What do you do for a living these days?",
        example: "What do you do for a living these days? Are you working full-time?",
        translation: "Dạo này bạn đang làm nghề gì để kiếm sống vậy? Có đang làm toàn thời gian không?"
      },
      superCasual: {
        phrase: "What's your main hustle right now?",
        example: "So what's your main hustle right now besides skating?",
        translation: "Thế dạo này cày cuốc nghề gì để kiếm cơm ngoài đi trượt ván vậy ông?"
      }
    },
    {
      phrase: "Nice to meet you.",
      meaning: "Lời chào xã giao khi gặp gỡ lần đầu.",
      vietnamese: "Rất vui được gặp bạn.",
      business: {
        phrase: "It is an absolute pleasure to make your acquaintance.",
        example: "It is an absolute pleasure to make your acquaintance, Ms. Hughes. Looking forward to our synergy.",
        translation: "Thực sự là một vinh hạnh lớn khi được diện kiến cô Hughes. Rất mong chờ sự kết hợp của chúng ta."
      },
      casualStyle: {
        phrase: "Great meeting you in person!",
        example: "Great meeting you in person, Sarah! We've chatted online so much.",
        translation: "Rất vui được gặp trực tiếp bạn ngoài đời, Sarah! Tụi mình đã nhắn tin trên mạng nhiều rồi."
      },
      superCasual: {
        phrase: "Stoked to meet ya, man!",
        example: "Stoked to meet ya, Chase! Good vibes all around.",
        translation: "Gặp ông bạn sướng ghê, Chase! Không khí ở đây đỉnh chóp thực sự."
      }
    },
    {
      phrase: "To break the ice...",
      meaning: "Cách mở đầu câu chuyện để xóa tan e ngại ban đầu.",
      vietnamese: "Để làm quen phá tan e ngại...",
      business: {
        phrase: "To break the ice, allow me to share an insight regarding our summit agenda.",
        example: "To break the ice, allow me to share an insight regarding our summit agenda today.",
        translation: "Để mở đầu câu chuyện, cho phép tôi chia sẻ một góc nhìn sâu sắc về lịch trình hội nghị thượng đỉnh hôm nay."
      },
      casualStyle: {
        phrase: "Since we need to break the ice, what's your favorite hobby?",
        example: "Since we need to break the ice, what's your favorite hobby on lazy Sundays?",
        translation: "Tiện thể phá băng làm quen luôn thì sở thích yêu thích của bạn vào Chủ nhật lười biếng là gì?"
      },
      superCasual: {
        phrase: "Gotta break the ice, let's grab some iced boba and chill!",
        example: "Gotta break the ice, let's grab some iced boba and chill, bro!",
        translation: "Làm quen cho bớt ngượng cái coi, đi làm ly trà sữa đá rồi buôn dưa lê đi ông ơi!"
      }
    }
  ],

  // -------------------------------------------------------------
  // LESSON 02: Gia đình & Bạn bè
  // -------------------------------------------------------------
  'lesson-02': [
    {
      phrase: "We come from a tight-knit family.",
      meaning: "Diễn tả gia đình gắn bó khăng khít, luôn đùm bọc nhau.",
      vietnamese: "Chúng tôi xuất thân từ một gia đình rất khăng khít.",
      business: {
        phrase: "Maintaining a tight-knit family structure reinforces executive resilience.",
        example: "Maintaining a tight-knit family structure reinforces executive resilience during high-stakes mergers.",
        translation: "Việc duy trì một nền tảng gia đình khăng khít giúp củng cố bản lĩnh kiên cường của lãnh đạo trong các thương vụ lớn."
      },
      casualStyle: {
        phrase: "My household is super tight-knit and we eat dinner together every day.",
        example: "My household is super tight-knit and we eat dinner together every day.",
        translation: "Nhà mình gắn bó khăng khít lắm, ngày nào cả nhà cũng ngồi ăn cơm tối cùng nhau."
      },
      superCasual: {
        phrase: "My fam is tight-knit as hell, we always stick together no cap.",
        example: "My fam is tight-knit as hell, we always stick together no cap.",
        translation: "Gia đình tui gắn bó khăng khít dã man, lúc nào cũng bọc lót cho nhau, thề luôn."
      }
    },
    {
      phrase: "He always has my back.",
      meaning: "Diễn tả việc luôn được ai đó bảo vệ, ủng hộ vô điều kiện.",
      vietnamese: "Anh ấy luôn đứng ra bảo vệ tôi.",
      business: {
        phrase: "A trustworthy peer is someone who consistently supports your strategic decisions.",
        example: "A trustworthy peer is someone who consistently supports your strategic decisions during audits.",
        translation: "Một người đồng nghiệp đáng tin cậy là người luôn kiên định ủng hộ các quyết định chiến lược của bạn trong các kỳ kiểm toán."
      },
      casualStyle: {
        phrase: "Whenever I'm stressed out, my best friend always has my back.",
        example: "Whenever I'm stressed out, my best friend always has my back.",
        translation: "Bất cứ khi nào mình bị căng thẳng, bạn thân của mình lúc nào cũng ở phía sau bảo bọc hỗ trợ mình."
      },
      superCasual: {
        phrase: "Bro is my ride-or-die, he's always got my back fr.",
        example: "Bro is my ride-or-die, he's always got my back fr.",
        translation: "Thằng bạn sống chết có nhau của tui đấy, lúc nào cũng sẵn sàng bảo vệ tui, thật sự."
      }
    },
    {
      phrase: "How do you get along with your siblings?",
      meaning: "Hỏi thăm về mối quan hệ hòa thuận giữa các anh chị em.",
      vietnamese: "Bạn hòa thuận với anh chị em trong nhà chứ?",
      business: {
        phrase: "Do your siblings also pursue careers within professional corporate sectors?",
        example: "Do your siblings also pursue careers within professional corporate sectors?",
        translation: "Các anh chị em ruột của anh/chị có cùng theo đuổi sự nghiệp trong các khối doanh nghiệp chuyên nghiệp không?"
      },
      casualStyle: {
        phrase: "Do you get along well with your older brother, or do you bicker?",
        example: "Do you get along well with your older brother, or do you bicker over silly stuff?",
        translation: "Bạn có hòa thuận với anh trai của mình không, hay hai anh em hay cãi cọ mấy chuyện vặt vãnh?"
      },
      superCasual: {
        phrase: "You and your siblings chill together or do they drive you crazy?",
        example: "You and your siblings chill together or do they drive you crazy, man?",
        translation: "Ông với mấy đứa em ở nhà có hợp cạ không hay tụi nó làm ông phát điên lên thế?"
      }
    },
    {
      phrase: "My parents are exceptionally supportive.",
      meaning: "Khen ngợi bố mẹ luôn ủng hộ mọi quyết định.",
      vietnamese: "Bố mẹ tôi luôn hết mực ủng hộ tôi.",
      business: {
        phrase: "Having a supportive personal foundation is invaluable for sustaining leadership focus.",
        example: "Having a supportive personal foundation is invaluable for sustaining leadership focus.",
        translation: "Có một nền tảng hậu phương ủng hộ là điều vô giá để duy trì sự tập trung của người lãnh đạo."
      },
      casualStyle: {
        phrase: "My parents are super supportive of my creative hobbies and study choices.",
        example: "My parents are super supportive of my creative hobbies and study choices.",
        translation: "Bố mẹ mình cực kỳ ủng hộ những sở thích sáng tạo và các lựa chọn ngành học của mình."
      },
      superCasual: {
        phrase: "My folks are chill as ever, always hyped about whatever I do.",
        example: "My folks are chill as ever, always hyped about whatever I do.",
        translation: "Bố mẹ tui tâm lý thoải mái cực, lúc nào cũng hào hứng cổ vũ mọi trò tui làm."
      }
    },
    {
      phrase: "We go way back.",
      meaning: "Nói về mối quan hệ quen biết lâu năm từ xưa.",
      vietnamese: "Chúng tôi đã quen biết nhau từ rất lâu rồi.",
      business: {
        phrase: "Our corporate relationship traces back across more than a decade of shared ventures.",
        example: "Our corporate relationship traces back across more than a decade of shared ventures.",
        translation: "Mối quan hệ doanh nghiệp giữa chúng tôi bắt nguồn từ hơn một thập kỷ cùng hợp tác dự án."
      },
      casualStyle: {
        phrase: "John and I? Oh, we totally go way back to primary school.",
        example: "John and I? Oh, we totally go way back to primary school.",
        translation: "John với mình á? Ồ, tụi mình quen nhau từ thuở học tiểu học xa lắc xa lơ rồi."
      },
      superCasual: {
        phrase: "Me and the homie go way back, day-ones for real!",
        example: "Me and the homie go way back, day-ones for real!",
        translation: "Tui với thằng cạ cứng này quen nhau từ thời mặc tã, bạn nối khố chí cốt thực sự luôn!"
      }
    }
  ],

  // -------------------------------------------------------------
  // LESSON 03: Trường học & Lớp học
  // -------------------------------------------------------------
  'lesson-03': [
    {
      phrase: "What does the syllabus specify?",
      meaning: "Hỏi về nội dung hoặc yêu cầu trong đề cương môn học.",
      vietnamese: "Đề cương môn học quy định những gì?",
      business: {
        phrase: "Could you clarify the grading criteria outlined in the course syllabus?",
        example: "Could you clarify the grading criteria outlined in the course syllabus, Professor Vance?",
        translation: "Thưa Giáo sư Vance, Thầy có thể làm rõ các tiêu chí chấm điểm được đề ra trong đề cương môn học không ạ?"
      },
      casualStyle: {
        phrase: "Did you check the syllabus to see when our first quiz is scheduled?",
        example: "Did you check the syllabus to see when our first quiz is scheduled?",
        translation: "Bạn đã xem đề cương để biết khi nào tụi mình có bài kiểm tra đầu tiên chưa?"
      },
      superCasual: {
        phrase: "Look at this insane syllabus, teacher's going full tryhard mode!",
        example: "Look at this insane syllabus, teacher's going full tryhard mode, fr!",
        translation: "Xem cái đề cương điên rồ này coi, giáo viên tính làm khó nhau tới bến luôn rồi, thề!"
      }
    },
    {
      phrase: "I really want to ace this assignment.",
      meaning: "Quyết tâm đạt điểm tuyệt đối cho bài tập lớn.",
      vietnamese: "Tôi thực sự muốn đạt điểm tối đa bài tập này.",
      business: {
        phrase: "Our academic cohort is committed to achieving distinction on this research assignment.",
        example: "Our academic cohort is committed to achieving distinction on this research assignment.",
        translation: "Nhóm nghiên cứu học thuật của chúng em cam kết sẽ đạt kết quả xuất sắc trong bài luận này."
      },
      casualStyle: {
        phrase: "If we study together every afternoon, we can definitely ace this assignment.",
        example: "If we study together every afternoon, we can definitely ace this assignment.",
        translation: "Nếu tụi mình cùng nhau ôn bài mỗi buổi chiều, tụi mình chắc chắn sẽ giật điểm A bài tập này."
      },
      superCasual: {
        phrase: "Gotta ace this paper, bro! Need that GPA boost ASAP.",
        example: "Gotta ace this paper, bro! Need that GPA boost ASAP.",
        translation: "Phải giật điểm tuyệt đối bài này thôi ông ơi! Cần kéo điểm trung bình GPA gấp luôn."
      }
    },
    {
      phrase: "The professor has strict expectations.",
      meaning: "Nói về giáo viên nghiêm khắc, yêu cầu cao.",
      vietnamese: "Giáo sư có những kỳ vọng rất khắt khe.",
      business: {
        phrase: "The academic board enforces strict methodological rigor across all submissions.",
        example: "The academic board enforces strict methodological rigor across all submissions.",
        translation: "Hội đồng học thuật áp dụng sự nghiêm ngặt về mặt phương pháp luận đối với toàn bộ bài nộp."
      },
      casualStyle: {
        phrase: "Our chemistry teacher is quite strict with deadlines, so don't submit late.",
        example: "Our chemistry teacher is quite strict with deadlines, so don't submit late.",
        translation: "Giáo viên môn Hóa của tụi mình khá nghiêm khắc về hạn chót, nên bạn đừng nộp muộn nhé."
      },
      superCasual: {
        phrase: "Teacher is way too strict, one minute late and it's a flat zero!",
        example: "Teacher is way too strict, one minute late and it's a flat zero, no cap!",
        translation: "Giáo viên gắt gao quá thể đáng, nộp trễ một phút thôi là ăn con số 0 tròn trĩnh, thề luôn!"
      }
    },
    {
      phrase: "The curriculum is well-structured.",
      meaning: "Khen ngợi khung chương trình học được thiết kế bài bản.",
      vietnamese: "Chương trình giảng dạy được cấu trúc rất tốt.",
      business: {
        phrase: "The updated university curriculum aligns with modern enterprise competencies.",
        example: "The updated university curriculum aligns with modern enterprise competencies.",
        translation: "Chương trình khung đại học vừa cập nhật tương thích với năng lực thực tiễn của doanh nghiệp hiện đại."
      },
      casualStyle: {
        phrase: "I like this semester's curriculum; it includes lots of hands-on workshops.",
        example: "I like this semester's curriculum; it includes lots of hands-on workshops.",
        translation: "Mình rất thích khung chương trình học kỳ này; nó có nhiều buổi thực hành thực tế rất hay."
      },
      superCasual: {
        phrase: "This curriculum is actually lit, no boring old theory stuff.",
        example: "This curriculum is actually lit, no boring old theory stuff.",
        translation: "Chương trình học này đỉnh phết đấy, không có mấy trò lý thuyết suông buồn ngủ."
      }
    },
    {
      phrase: "Can you help me with this task?",
      meaning: "Nhờ vả bạn học hỗ trợ bài tập.",
      vietnamese: "Bạn giúp mình giải bài tập này được không?",
      business: {
        phrase: "Would you be amenable to collaborating on this analytical module?",
        example: "Would you be amenable to collaborating on this analytical module during consultation hours?",
        translation: "Thưa anh/chị, liệu anh/chị có sẵn lòng cùng cộng tác giải quyết học phần phân tích này không ạ?"
      },
      casualStyle: {
        phrase: "Mind giving me a quick hand with question number four?",
        example: "Mind giving me a quick hand with question number four? I'm kind of stuck.",
        translation: "Bạn không phiền giúp mình một tay câu hỏi số 4 được không? Mình đang hơi bị kẹt."
      },
      superCasual: {
        phrase: "Yo bro, carry me through this formula real quick!",
        example: "Yo bro, carry me through this formula real quick before class starts!",
        translation: "Này ông bạn, gánh giùm tui công thức này lẹ cái trước khi vào giờ học với coi!"
      }
    }
  ],

  // -------------------------------------------------------------
  // LESSON 04: Cuộc sống hàng ngày
  // -------------------------------------------------------------
  'lesson-04': [
    {
      phrase: "I have a productive morning routine.",
      meaning: "Nói về thói quen buổi sáng mang lại hiệu quả cao.",
      vietnamese: "Tôi có một thói quen buổi sáng rất năng suất.",
      business: {
        phrase: "Establishing a productive morning routine maximizes operational throughput.",
        example: "Establishing a productive morning routine maximizes operational throughput for executive leaders.",
        translation: "Thiết lập một thời gian biểu buổi sáng năng suất sẽ tối ưu hóa hiệu quả vận hành của các nhà lãnh đạo."
      },
      casualStyle: {
        phrase: "Having a solid morning routine helps me stay focused and productive all day.",
        example: "Having a solid morning routine helps me stay focused and productive all day.",
        translation: "Có một thói quen buổi sáng ổn định giúp mình luôn tập trung và làm việc năng suất suốt cả ngày."
      },
      superCasual: {
        phrase: "Got my morning routine on lock: coffee, pushups, and hustle!",
        example: "Got my morning routine on lock: coffee, pushups, and hustle, let's go!",
        translation: "Lên nếp sinh hoạt buổi sáng chuẩn chỉ luôn: cà phê, chống đẩy và cày cuốc thôi anh em!"
      }
    },
    {
      phrase: "Are you an early bird or a night owl?",
      meaning: "Hỏi đối phương thuộc tuýp người dậy sớm hay thức khuya.",
      vietnamese: "Bạn là người dậy sớm hay cú đêm thức khuya?",
      business: {
        phrase: "Do your peak analytical hours align with early mornings or late evenings?",
        example: "Do your peak analytical hours align with early mornings or late evenings?",
        translation: "Khung giờ làm việc phân tích đỉnh cao của anh/chị rơi vào buổi sáng sớm hay đêm muộn ạ?"
      },
      casualStyle: {
        phrase: "Are you more of an early bird, or do you prefer studying as a night owl?",
        example: "Are you more of an early bird, or do you prefer studying as a night owl?",
        translation: "Bạn thuộc tuýp người thích dậy sớm hơn, hay thích cày bài đêm khuya như cú vọ vậy?"
      },
      superCasual: {
        phrase: "You a certified early bird or crawling outta bed at noon?",
        example: "You a certified early bird or crawling outta bed at noon like me, bro?",
        translation: "Ông là hội chim sớm dậy ban mai hay tới trưa trờ trưa trật mới lết xác ra khỏi giường như tui thế?"
      }
    },
    {
      phrase: "How long is your daily commute?",
      meaning: "Hỏi thời gian di chuyển từ nhà đến nơi học/làm.",
      vietnamese: "Thời gian đi lại hàng ngày của bạn mất bao lâu?",
      business: {
        phrase: "What is the average duration of your regional transit commute?",
        example: "What is the average duration of your regional transit commute to headquarters?",
        translation: "Thời gian di chuyển trung bình trong hành trình đi lại của anh/chị đến trụ sở là bao lâu ạ?"
      },
      casualStyle: {
        phrase: "How long does your morning commute take by bus or motorbike?",
        example: "How long does your morning commute take by bus or motorbike during rush hour?",
        translation: "Quãng đường đi làm buổi sáng bằng xe buýt hoặc xe máy của bạn mất bao lâu vào giờ cao điểm?"
      },
      superCasual: {
        phrase: "How brutal is your commute every morning, man?",
        example: "How brutal is your commute every morning, man? Traffic is wild!",
        translation: "Đoạn đường lết đi học buổi sáng của ông có cực hình lắm không? Xe cộ đông nghẹt thở luôn!"
      }
    },
    {
      phrase: "How do you unwind after a busy day?",
      meaning: "Hỏi cách giải tỏa căng thẳng sau một ngày bận rộn.",
      vietnamese: "Bạn thư giãn thả lỏng như thế nào sau một ngày bận rộn?",
      business: {
        phrase: "What practices do you employ to unwind and achieve psychological detachment?",
        example: "What practices do you employ to unwind and achieve psychological detachment from quarterly stress?",
        translation: "Anh/chị áp dụng phương pháp nào để thư giãn và tách rời tâm trí khỏi áp lực quý vừa qua ạ?"
      },
      casualStyle: {
        phrase: "How do you like to unwind after a long day of lectures?",
        example: "How do you like to unwind after a long day of lectures? Do you watch series?",
        translation: "Bạn thích xả stress thư giãn như thế nào sau một ngày dài nghe giảng? Bạn có cày phim không?"
      },
      superCasual: {
        phrase: "How do you unwind when your brain is completely cooked?",
        example: "How do you unwind when your brain is completely cooked, bro?",
        translation: "Ông xả hơi kiểu gì khi não đã chính thức bốc khói khét lẹt rồi hả ông bạn?"
      }
    },
    {
      phrase: "I have a packed schedule today.",
      meaning: "Báo lịch trình trong ngày bận rộn kín mít.",
      vietnamese: "Hôm nay lịch trình của tôi kín mít rồi.",
      business: {
        phrase: "My calendar is fully committed with back-to-back executive meetings today.",
        example: "My calendar is fully committed with back-to-back executive meetings today.",
        translation: "Lịch làm việc của tôi hôm nay đã kín đặc với các cuộc họp ban điều hành nối tiếp nhau."
      },
      casualStyle: {
        phrase: "I've got a super busy schedule today with classes and group work.",
        example: "I've got a super busy schedule today with classes and group work.",
        translation: "Hôm nay lịch của mình bận kín mít luôn với các tiết học và bài tập nhóm."
      },
      superCasual: {
        phrase: "My schedule is slammed today, zero free time to even grab coffee!",
        example: "My schedule is slammed today, zero free time to even grab coffee!",
        translation: "Lịch hôm nay ngập đầu ngập cổ luôn, đến thời gian uống ngụm cà phê còn chả có!"
      }
    }
  ],

  // -------------------------------------------------------------
  // LESSON 05: Sở thích & Giải trí
  // -------------------------------------------------------------
  'lesson-05': [
    {
      phrase: "I love spending my leisure time outdoors.",
      meaning: "Bày tỏ sở thích hòa mình với thiên nhiên lúc rảnh rỗi.",
      vietnamese: "Tôi thích dành thời gian nhàn rỗi ra ngoài trời.",
      business: {
        phrase: "We encourage our personnel to utilize their leisure time for outdoor wellness.",
        example: "We encourage our personnel to utilize their leisure time for outdoor wellness pursuits.",
        translation: "Chúng tôi khuyến khích toàn thể nhân sự tận dụng thời gian rảnh rỗi cho các hoạt động thể chất ngoài trời."
      },
      casualStyle: {
        phrase: "I really enjoy spending my leisure time outdoors hiking or cycling in the park.",
        example: "I really enjoy spending my leisure time outdoors hiking or cycling in the park.",
        translation: "Mình rất thích dành thời gian rảnh rỗi ra ngoài trời đi leo núi hoặc đạp xe trong công viên."
      },
      superCasual: {
        phrase: "Catch me outdoors chilling in nature whenever the weekend hits!",
        example: "Catch me outdoors chilling in nature whenever the weekend hits, no cap!",
        translation: "Cứ cuối tuần đến là thấy mặt tui ngoài trời hòa mình vào thiên nhiên ngay, thề luôn!"
      }
    },
    {
      phrase: "I'm a big fan of binge-watching shows.",
      meaning: "Thừa nhận sở thích cày phim dài tập liên tục.",
      vietnamese: "Tôi là fan cuồng của việc cày phim liên tục.",
      business: {
        phrase: "Digital streaming platforms have popularized intensive episodic content consumption.",
        example: "Digital streaming platforms have popularized intensive episodic content consumption globally.",
        translation: "Các nền tảng phát trực tuyến kỹ thuật số đã phổ biến hóa xu hướng xem nội dung theo từng tập dài trên toàn cầu."
      },
      casualStyle: {
        phrase: "I'm a big fan of binge-watching mystery series whenever I have a free weekend.",
        example: "I'm a big fan of binge-watching mystery series whenever I have a free weekend.",
        translation: "Mình là fan bự của việc cày liền tù tì các bộ phim trinh thám mỗi khi có dịp cuối tuần rảnh rỗi."
      },
      superCasual: {
        phrase: "I binge-watched ten episodes in one sitting, totally glued to the screen!",
        example: "I binge-watched ten episodes in one sitting, totally glued to the screen, bro!",
        translation: "Tui cày liền một mạch 10 tập phim trong một buổi tối, mắt dính chặt vào màn hình luôn ông ơi!"
      }
    },
    {
      phrase: "It's easy to get addicted to video games.",
      meaning: "Nói về việc dễ bị say mê, cuốn hút vào trò chơi điện tử.",
      vietnamese: "Rất dễ bị mê mẩn nghiện các trò chơi điện tử.",
      business: {
        phrase: "Gamified mobile applications carry risk factors regarding behavioral over-engagement.",
        example: "Gamified mobile applications carry risk factors regarding behavioral over-engagement among youth.",
        translation: "Các ứng dụng di động được trò chơi hóa tiềm ẩn nguy cơ gây lệ thuộc hành vi quá mức trong giới trẻ."
      },
      casualStyle: {
        phrase: "It's so easy to get addicted to this new game; the storyline is amazing.",
        example: "It's so easy to get addicted to this new game; the storyline is amazing.",
        translation: "Rất dễ bị nghiện mê mệt trò chơi mới này; cốt truyện của nó hay tuyệt đỉnh."
      },
      superCasual: {
        phrase: "This game is crack, bro! I'm completely addicted, cannot stop playing!",
        example: "This game is crack, bro! I'm completely addicted, cannot stop playing!",
        translation: "Con game này cuốn dã man ông ơi! Tui nghiện đét luôn rồi, không tài nào dứt ra nổi!"
      }
    },
    {
      phrase: "Collecting mechanical keyboards is my niche hobby.",
      meaning: "Nói về sở thích ngách độc đáo, ít người theo đuổi.",
      vietnamese: "Sưu tầm bàn phím cơ là sở thích ngách độc lạ của tôi.",
      business: {
        phrase: "Cultivating a specialized niche interest fosters unique problem-solving capabilities.",
        example: "Cultivating a specialized niche interest fosters unique problem-solving capabilities.",
        translation: "Việc theo đuổi một sở thích ngách chuyên biệt giúp nuôi dưỡng năng lực giải quyết vấn đề độc đáo."
      },
      casualStyle: {
        phrase: "Building custom mechanical keyboards is kind of my niche hobby outside work.",
        example: "Building custom mechanical keyboards is kind of my niche hobby outside work.",
        translation: "Tự ráp bàn phím cơ theo yêu cầu là sở thích ngách khá thú vị của mình ngoài giờ làm."
      },
      superCasual: {
        phrase: "It's super niche, but tuning key switches is my absolute vibe, fr!",
        example: "It's super niche, but tuning key switches is my absolute vibe, fr!",
        translation: "Cái này gu ngách cực kỳ, nhưng ngồi độ phím cơ đúng là chân ái của đời tui, thật sự!"
      }
    },
    {
      phrase: "It's just not my cup of tea.",
      meaning: "Cách từ chối hoặc nói rằng cái gì không phải gu của mình.",
      vietnamese: "Đó không phải là gu sở thích của tôi.",
      business: {
        phrase: "That particular recreational avenue does not align with my personal preferences.",
        example: "That particular recreational avenue does not align with my personal preferences.",
        translation: "Phương thức giải trí cụ thể đó không thực sự tương thích với sở thích cá nhân của tôi."
      },
      casualStyle: {
        phrase: "Heavy metal music is exciting, but it's just not really my cup of tea.",
        example: "Heavy metal music is exciting, but it's just not really my cup of tea.",
        translation: "Nhạc rock mạnh nghe cũng sôi động đấy, cơ mà nó không hẳn là gu thưởng thức của mình."
      },
      superCasual: {
        phrase: "Nah, horror movies are zero vibe for me, not my cup of tea at all.",
        example: "Nah, horror movies are zero vibe for me, not my cup of tea at all, bro.",
        translation: "Thôi thôi, phim kinh dị chả hợp miếng nào với tui, không phải gu tui tí nào đâu ông ơi."
      }
    }
  ],

  // -------------------------------------------------------------
  // LESSON 06: Văn hóa Ẩm thực Việt
  // -------------------------------------------------------------
  'lesson-06': [
    {
      phrase: "Vietnamese street food is world-famous.",
      meaning: "Ca ngợi món ăn đường phố Việt Nam nức tiếng toàn cầu.",
      vietnamese: "Ẩm thực đường phố Việt Nam nổi tiếng khắp thế giới.",
      business: {
        phrase: "Vietnamese culinary street gastronomy represents an internationally acclaimed cultural asset.",
        example: "Vietnamese culinary street gastronomy represents an internationally acclaimed cultural asset.",
        translation: "Ẩm thực đường phố Việt Nam đại diện cho một tài sản văn hóa được quốc tế công nhận và tôn vinh."
      },
      casualStyle: {
        phrase: "Vietnamese street food is so delicious and famous; everyone loves trying banh mi.",
        example: "Vietnamese street food is so delicious and famous; everyone loves trying banh mi.",
        translation: "Đồ ăn đường phố Việt Nam ngon và nổi tiếng ghê; ai đến đây cũng mê tít món bánh mì."
      },
      superCasual: {
        phrase: "Vietnamese street food hits different, bro! Best cheap eats on the planet, fr!",
        example: "Vietnamese street food hits different, bro! Best cheap eats on the planet, fr!",
        translation: "Đồ ăn vỉa hè Việt Nam ăn cuốn dã man ông ơi! Món ngon giá hạt dẻ đỉnh nhất quả đất luôn, thề!"
      }
    },
    {
      phrase: "The bone broth is simmered for hours.",
      meaning: "Nói về nước dùng ninh từ xương thịt nhiều giờ đậm vị.",
      vietnamese: "Nước dùng ninh từ xương được hầm suốt nhiều giờ.",
      business: {
        phrase: "Our artisanal broth is slowly simmered across twelve hours to extract natural essence.",
        example: "Our artisanal broth is slowly simmered across twelve hours to extract natural essence.",
        translation: "Nước dùng kỳ công của chúng tôi được ninh chậm suốt 12 tiếng để chiết xuất trọn vẹn tinh túy tự nhiên."
      },
      casualStyle: {
        phrase: "The secret to authentic Pho is the bone broth simmered with cinnamon and star anise.",
        example: "The secret to authentic Pho is the bone broth simmered with cinnamon and star anise.",
        translation: "Bí quyết của phở chuẩn vị là phần nước dùng ninh từ xương với quế và hoa hồi."
      },
      superCasual: {
        phrase: "Look at that rich broth, bro! Pure bone marrow goodness, absolutely mouthwatering!",
        example: "Look at that rich broth, bro! Pure bone marrow goodness, absolutely mouthwatering!",
        translation: "Nhìn cái tô nước dùng béo ngậy này đi ông! Toàn tinh túy tủy xương, ngon ứa nước miếng luôn!"
      }
    },
    {
      phrase: "Fresh ingredients make all the difference.",
      meaning: "Khẳng định nguyên liệu tươi làm nên sự khác biệt của món ăn.",
      vietnamese: "Nguyên liệu tươi ngon tạo nên tất cả sự khác biệt.",
      business: {
        phrase: "Sourcing locally harvested organic ingredients guarantees exceptional gastronomic quality.",
        example: "Sourcing locally harvested organic ingredients guarantees exceptional gastronomic quality.",
        translation: "Việc thu mua các nguyên liệu hữu cơ thu hoạch tại địa phương đảm bảo chất lượng ẩm thực vượt trội."
      },
      casualStyle: {
        phrase: "Using fresh herbs and crisp ingredients really makes this noodle dish stand out.",
        example: "Using fresh herbs and crisp ingredients really makes this noodle dish stand out.",
        translation: "Dùng các loại rau thơm tươi và nguyên liệu tươi giòn thực sự khiến món bún này nổi bật hẳn."
      },
      superCasual: {
        phrase: "Fresh herbs on top and that homemade sauce? That's peak flavor right there!",
        example: "Fresh herbs on top and that homemade sauce? That's peak flavor right there, no cap!",
        translation: "Rau thơm tươi rắc lên trên cộng thêm nước sốt gia truyền nữa? Đúng chuẩn đỉnh cao hương vị luôn!"
      }
    },
    {
      phrase: "You must give this specialty a try!",
      meaning: "Nhiệt tình khuyên ai đó phải thử món đặc sản này.",
      vietnamese: "Bạn nhất định phải thử món đặc sản này nhé!",
      business: {
        phrase: "I strongly recommend experiencing our regional culinary specialty during your delegation visit.",
        example: "I strongly recommend experiencing our regional culinary specialty during your delegation visit.",
        translation: "Tôi nồng nhiệt đề xuất phái đoàn nên trải nghiệm món đặc sản ẩm thực vùng miền trong chuyến thăm lần này."
      },
      casualStyle: {
        phrase: "Bun cha is Hanoi's signature dish; you honestly must give it a try!",
        example: "Bun cha is Hanoi's signature dish; you honestly must give it a try!",
        translation: "Bún chả là món đặc trưng của Hà Nội đấy; bạn nhất định phải thử một lần cho biết nha!"
      },
      superCasual: {
        phrase: "Dude, you gotta try this specialty right now or you'll regret it forever!",
        example: "Dude, you gotta try this specialty right now or you'll regret it forever, bro!",
        translation: "Ông ơi, phải đớp thử món đặc sản này ngay và luôn đi không là hối hận cả đời đấy!"
      }
    },
    {
      phrase: "This restaurant serves authentic flavors.",
      meaning: "Khen nhà hàng nấu chuẩn vị nguyên bản.",
      vietnamese: "Nhà hàng này phục vụ các hương vị nguyên bản chuẩn vị.",
      business: {
        phrase: "This establishment prides itself on preserving authentic centuries-old culinary traditions.",
        example: "This establishment prides itself on preserving authentic centuries-old culinary traditions.",
        translation: "Cơ sở này tự hào gìn giữ những truyền thống ẩm thực nguyên bản có lịch sử hàng thế kỷ."
      },
      casualStyle: {
        phrase: "If you want authentic Saigon Com Tam, this small street diner is the best spot.",
        example: "If you want authentic Saigon Com Tam, this small street diner is the best spot.",
        translation: "Nếu bạn muốn ăn Cơm tấm Sài Gòn chuẩn vị, quán ăn nhỏ ven đường này là điểm đến số một."
      },
      superCasual: {
        phrase: "This spot is as authentic as it gets, zero tourist traps here!",
        example: "This spot is as authentic as it gets, zero tourist traps here, straight fire!",
        translation: "Quán này chuẩn vị bản địa đét luôn, không có chặt chém bẫy khách du lịch đâu, ngon đỉnh!"
      }
    }
  ],

  // -------------------------------------------------------------
  // LESSON 07: Mua sắm & Tiền bạc cơ bản
  // -------------------------------------------------------------
  'lesson-07': [
    {
      phrase: "That fits my budget nicely.",
      meaning: "Nói về sản phẩm vừa vặn với túi tiền dự chi.",
      vietnamese: "Món đồ đó rất vừa vặn với ngân sách của tôi.",
      business: {
        phrase: "The negotiated commercial quote aligns squarely with our approved departmental budget.",
        example: "The negotiated commercial quote aligns squarely with our approved departmental budget.",
        translation: "Báo giá thương mại đã đàm phán hoàn toàn tương thích với ngân sách phòng ban đã được phê duyệt."
      },
      casualStyle: {
        phrase: "This pair of shoes is super cute and it fits my monthly shopping budget nicely.",
        example: "This pair of shoes is super cute and it fits my monthly shopping budget nicely.",
        translation: "Đôi giày này xinh xắn ghê mà lại rất vừa vặn với ngân sách mua sắm tháng này của mình."
      },
      superCasual: {
        phrase: "Cheap as dirt and fits my wallet like a charm, I'm copping it!",
        example: "Cheap as dirt and fits my wallet like a charm, I'm copping it right now!",
        translation: "Rẻ như cho mà lại vừa túi tiền dã man, tui múc liền tay luôn không nói nhiều!"
      }
    },
    {
      phrase: "I managed to find a great bargain.",
      meaning: "Kể về việc săn được món đồ giá hời lớn.",
      vietnamese: "Tôi đã săn được một món hời giá rất tốt.",
      business: {
        phrase: "Our procurement division secured an exceptional bulk discount bargain from certified suppliers.",
        example: "Our procurement division secured an exceptional bulk discount bargain from certified suppliers.",
        translation: "Bộ phận thu mua của chúng tôi đã đạt được thỏa thuận giá hời mua số lượng lớn từ các nhà cung ứng."
      },
      casualStyle: {
        phrase: "I went to the weekend flea market and found a real bargain on vintage clothes.",
        example: "I went to the weekend flea market and found a real bargain on vintage clothes.",
        translation: "Mình đi chợ phiên cuối tuần và săn được món đồ cũ giá siêu hời luôn."
      },
      superCasual: {
        phrase: "Snagged this jacket for twenty bucks, absolute steal of a bargain, no cap!",
        example: "Snagged this jacket for twenty bucks, absolute steal of a bargain, no cap!",
        translation: "Chộp được cái áo khoác này có 20 đô, đúng là món hời như cướp cạn, thề không điêu!"
      }
    },
    {
      phrase: "Always check the price tag first.",
      meaning: "Khuyên nên xem kỹ mác giá trước khi mua.",
      vietnamese: "Luôn luôn kiểm tra mác giá trước đã.",
      business: {
        phrase: "Departmental buyers must verify the unit price tag against the contract master schedule.",
        example: "Departmental buyers must verify the unit price tag against the contract master schedule.",
        translation: "Bên thu mua của phòng ban phải đối chiếu mác đơn giá so với khung hợp đồng tổng thể."
      },
      casualStyle: {
        phrase: "Before I try anything on, I always check the price tag so there are no surprises.",
        example: "Before I try anything on, I always check the price tag so there are no surprises.",
        translation: "Trước khi thử đồ gì lên người, mình luôn kiểm tra mác giá trước để đỡ bị bất ngờ té ngửa."
      },
      superCasual: {
        phrase: "Look at the price tag before you hype yourself up, bro!",
        example: "Look at the price tag before you hype yourself up, bro, it might be crazy expensive!",
        translation: "Ngó cái mác giá trước khi sướng rơn lên đi ông giáo, khéo nó hét giá trên trời đấy!"
      }
    },
    {
      phrase: "Drinks here are heavily overpriced.",
      meaning: "Phàn nàn giá cả đắt đỏ quá mức thực tế.",
      vietnamese: "Đồ uống ở đây đắt đỏ một cách quá đáng.",
      business: {
        phrase: "Vendor hospitality surcharges appear disproportionately inflated and overpriced.",
        example: "Vendor hospitality surcharges appear disproportionately inflated and overpriced.",
        translation: "Các khoản phụ phí tiếp khách của nhà cung ứng có vẻ bị đội giá và đắt đỏ bất hợp lý."
      },
      casualStyle: {
        phrase: "I think coffee at this tourist spot is heavily overpriced; let's find a local cafe.",
        example: "I think coffee at this tourist spot is heavily overpriced; let's find a local cafe.",
        translation: "Mình thấy cà phê ở khu du lịch này đắt đỏ quá mức; tụi mình tìm một quán địa phương đi."
      },
      superCasual: {
        phrase: "Ten bucks for a bottle of water?! Total highway robbery, way overpriced!",
        example: "Ten bucks for a bottle of water?! Total highway robbery, way overpriced, fr!",
        translation: "Mười đô một chai nước lọc á?! Khác gì ăn cướp giữa ban ngày đâu, đắt lố bịch thực sự!"
      }
    },
    {
      phrase: "Could I please get a receipt?",
      meaning: "Xin hóa đơn thanh toán sau khi mua hàng.",
      vietnamese: "Cho tôi xin tờ hóa đơn được không ạ?",
      business: {
        phrase: "Kindly furnish an itemized VAT tax receipt for corporate expense auditing.",
        example: "Kindly furnish an itemized VAT tax receipt for corporate expense auditing.",
        translation: "Xin vui lòng xuất hóa đơn thuế VAT chi tiết để phục vụ kiểm toán chi phí doanh nghiệp."
      },
      casualStyle: {
        phrase: "Could I please get a printed receipt just in case I need to exchange sizes?",
        example: "Could I please get a printed receipt just in case I need to exchange sizes?",
        translation: "Cho mình xin hóa đơn in sẵn phòng khi mình cần đổi lại kích cỡ áo được không ạ?"
      },
      superCasual: {
        phrase: "Keep the receipt handy, bro, in case we gotta return this stuff!",
        example: "Keep the receipt handy, bro, in case we gotta return this stuff!",
        translation: "Cầm chắc cái hóa đơn giùm tui nha ông, phòng hờ lát phải mang đồ đi trả lại đấy!"
      }
    }
  ],

  // -------------------------------------------------------------
  // LESSON 08: Thời gian & Lên kế hoạch
  // -------------------------------------------------------------
  'lesson-08': [
    {
      phrase: "Does this time suit your schedule?",
      meaning: "Hỏi xác nhận thời gian có phù hợp với lịch của đối phương không.",
      vietnamese: "Thời gian này có phù hợp với lịch trình của bạn không?",
      business: {
        phrase: "Would ten o'clock on Thursday morning suit your executive calendar?",
        example: "Would ten o'clock on Thursday morning suit your executive calendar, Director Henderson?",
        translation: "Thưa Giám đốc Henderson, 10 giờ sáng thứ Năm liệu có phù hợp với lịch làm việc của ông không ạ?"
      },
      casualStyle: {
        phrase: "Does Saturday afternoon around two suit your schedule for studying?",
        example: "Does Saturday afternoon around two suit your schedule for studying?",
        translation: "Tầm 2 giờ chiều thứ Bảy có vừa giờ với lịch học của bạn không?"
      },
      superCasual: {
        phrase: "Is four PM good with you or does that clash with your plans, bro?",
        example: "Is four PM good with you or does that clash with your plans, bro?",
        translation: "4 giờ chiều có tiện cho ông không hay bị đụng lịch với trò khác rồi hả ông bạn?"
      }
    },
    {
      phrase: "We are facing a tight deadline.",
      meaning: "Nói về hạn chót công việc đang đến rất gần và gấp gáp.",
      vietnamese: "Chúng ta đang đối mặt với một hạn chót rất gấp.",
      business: {
        phrase: "We are managing a demanding delivery deadline governed by contractual milestones.",
        example: "We are managing a demanding delivery deadline governed by contractual milestones.",
        translation: "Chúng tôi đang phải xử lý một hạn chót bàn giao rất gấp bị chi phối bởi các mốc hợp đồng."
      },
      casualStyle: {
        phrase: "Our presentation deadline is this Friday, so we need to work fast.",
        example: "Our presentation deadline is this Friday, so we need to work fast.",
        translation: "Hạn chót nộp bài thuyết trình là thứ Sáu này rồi, nên tụi mình phải làm nhanh thôi."
      },
      superCasual: {
        phrase: "Deadline is creeping up on us, bro! We're gonna have to pull an all-nighter!",
        example: "Deadline is creeping up on us, bro! We're gonna have to pull an all-nighter!",
        translation: "Hạn chót dí sát đít tới nơi rồi ông ơi! Kiểu này anh em mình phải thức trắng đêm thôi!"
      }
    },
    {
      phrase: "We need to prioritize core tasks.",
      meaning: "Nhắc nhở cần ưu tiên làm các việc quan trọng cốt lõi trước.",
      vietnamese: "Chúng ta cần ưu tiên các nhiệm vụ cốt lõi trước.",
      business: {
        phrase: "Strategic governance requires us to prioritize mission-critical objectives.",
        example: "Strategic governance requires us to prioritize mission-critical objectives first.",
        translation: "Quản trị chiến lược đòi hỏi chúng ta phải ưu tiên hàng đầu cho các mục tiêu sống còn."
      },
      casualStyle: {
        phrase: "Let's prioritize finishing the slides outline before we pick colors and fonts.",
        example: "Let's prioritize finishing the slides outline before we pick colors and fonts.",
        translation: "Tụi mình ưu tiên chốt xong dàn ý slide trước khi ngồi chọn màu sắc với phông chữ nhé."
      },
      superCasual: {
        phrase: "Prioritize the big boss mission first, leave the side quests for later!",
        example: "Prioritize the big boss mission first, leave the side quests for later, man!",
        translation: "Ưu tiên đập trùm cuối trước đi ông giáo, mấy nhiệm vụ phụ vớ vẩn để tính sau!"
      }
    },
    {
      phrase: "Can we postpone this appointment?",
      meaning: "Đề nghị hoãn hoặc dời lịch cuộc hẹn lại.",
      vietnamese: "Chúng ta có thể hoãn cuộc hẹn này lại được không?",
      business: {
        phrase: "Would it be permissible to postpone our steering consultation to next Monday?",
        example: "Would it be permissible to postpone our steering consultation to next Monday?",
        translation: "Liệu có thể cho phép hoãn cuộc họp tham vấn chỉ đạo sang thứ Hai tuần tới được không ạ?"
      },
      casualStyle: {
        phrase: "I'm feeling unwell today; could we postpone our study meetup to Sunday?",
        example: "I'm feeling unwell today; could we postpone our study meetup to Sunday?",
        translation: "Hôm nay mình hơi mệt; tụi mình dời buổi học nhóm sang Chủ nhật được không bạn?"
      },
      superCasual: {
        phrase: "Can we postpone the hangout, bro? Something urgent just came up!",
        example: "Can we postpone the hangout, bro? Something urgent just came up!",
        translation: "Hoãn kèo đi chơi bữa nay lại được không ông? Tự dưng có biến gấp đùng một cái phát sinh nè!"
      }
    },
    {
      phrase: "I'm running a bit behind schedule.",
      meaning: "Báo rằng bản thân đang bị trễ giờ so với kế hoạch.",
      vietnamese: "Tôi đang bị chậm tiến độ so với lịch trình một chút.",
      business: {
        phrase: "Due to unexpected transit delays, I am currently running behind schedule.",
        example: "Due to unexpected transit delays, I am currently running slightly behind schedule.",
        translation: "Do sự cố chậm trễ phương tiện di chuyển, hiện tại tôi đang bị trễ lịch trình một chút."
      },
      casualStyle: {
        phrase: "Traffic is crazy today, so I'm running about fifteen minutes behind schedule.",
        example: "Traffic is crazy today, so I'm running about fifteen minutes behind schedule.",
        translation: "Hôm nay kẹt xe dữ quá, nên mình đang bị trễ lịch hẹn tầm 15 phút nha."
      },
      superCasual: {
        phrase: "Running mad late, traffic's a nightmare, don't start without me!",
        example: "Running mad late, traffic's a nightmare, don't start without me, bro!",
        translation: "Tui đang trễ sml rồi, đường kẹt như ác mộng, đừng có bắt đầu trước khi tui tới đấy nhá!"
      }
    }
  ],

  // -------------------------------------------------------------
  // LESSON 09: Tìm đường & Vị trí Thành phố
  // -------------------------------------------------------------
  'lesson-09': [
    {
      phrase: "Could you direct me to the landmark?",
      meaning: "Nhờ hướng dẫn lối đi đến địa danh biểu tượng.",
      vietnamese: "Bạn có thể chỉ đường giúp tôi đến địa danh đó không?",
      business: {
        phrase: "Could you kindly direct me toward the municipal convention center landmark?",
        example: "Could you kindly direct me toward the municipal convention center landmark?",
        translation: "Xin ông vui lòng chỉ đường giúp tôi đến điểm mốc Trung tâm hội nghị thành phố được không ạ?"
      },
      casualStyle: {
        phrase: "Excuse me, could you direct me to the historic cathedral landmark?",
        example: "Excuse me, could you direct me to the historic cathedral landmark nearby?",
        translation: "Xin lỗi ơi, bạn có thể chỉ đường giúp mình tới địa danh nhà thờ cổ gần đây được không?"
      },
      superCasual: {
        phrase: "Yo, which way to that famous graffiti wall landmark, bro?",
        example: "Yo, which way to that famous graffiti wall landmark, bro?",
        translation: "Ê ông ơi, đi đường nào tới cái bức tường vẽ graffiti nổi tiếng đằng kia thế?"
      }
    },
    {
      phrase: "Turn left at the busy intersection.",
      meaning: "Hướng dẫn quẹo trái ở ngã tư giao lộ đông đúc.",
      vietnamese: "Quẹo trái tại ngã tư giao lộ đông đúc.",
      business: {
        phrase: "Advise your chauffeur to execute a left turn at the primary four-way intersection.",
        example: "Advise your chauffeur to execute a left turn at the primary four-way intersection.",
        translation: "Xin hãy nhắc tài xế của ông thực hiện rẽ trái tại ngã tư giao lộ bốn ngả chính."
      },
      casualStyle: {
        phrase: "Keep walking straight and turn left at the second traffic light intersection.",
        example: "Keep walking straight and turn left at the second traffic light intersection.",
        translation: "Cứ tiếp tục đi thẳng rồi quẹo trái ở ngã tư có đèn giao thông thứ hai nhé."
      },
      superCasual: {
        phrase: "Hang a hard left at the intersection, don't miss the alley!",
        example: "Hang a hard left at the intersection, don't miss the alley, bro!",
        translation: "Rẽ ngoặt sang bên trái ngay ngã tư đi ông, coi chừng đi lố cái hẻm đấy!"
      }
    },
    {
      phrase: "What is the shortest route there?",
      meaning: "Hỏi tìm tuyến đường ngắn nhất để đến đích.",
      vietnamese: "Đâu là tuyến đường ngắn nhất để đến đó?",
      business: {
        phrase: "What is the most expedited and shortest transit corridor to the international terminal?",
        example: "What is the most expedited and shortest transit corridor to the international terminal?",
        translation: "Đâu là tuyến đường ngắn nhất và nhanh nhất để đi tới nhà ga quốc tế ạ?"
      },
      casualStyle: {
        phrase: "What is the shortest walking route to get to the museum from here?",
        example: "What is the shortest walking route to get to the museum from here?",
        translation: "Đâu là đường đi bộ ngắn nhất để đi từ đây tới bảo tàng vậy bạn?"
      },
      superCasual: {
        phrase: "What's the quickest shortcut to the skate shop, no detours?",
        example: "What's the quickest shortcut to the skate shop, no detours, man?",
        translation: "Đường tắt nào phóng tới tiệm ván trượt lẹ nhất, không đi lòng vòng đâu nhé?"
      }
    },
    {
      phrase: "Your destination is around the corner.",
      meaning: "Chỉ vị trí đích đến ở ngay khúc cua gần đó.",
      vietnamese: "Điểm đến của bạn ở ngay góc cua đằng kia.",
      business: {
        phrase: "Your destination will be immediately discernible upon turning the corner of Grand Plaza.",
        example: "Your destination will be immediately discernible upon turning the corner of Grand Plaza.",
        translation: "Điểm đến của quý khách sẽ hiện ra rõ rệt ngay khi rẽ qua khúc quanh Quảng trường Lớn."
      },
      casualStyle: {
        phrase: "Just cross the street; your destination is right around the corner next to the cafe.",
        example: "Just cross the street; your destination is right around the corner next to the cafe.",
        translation: "Cứ băng qua đường nhé; điểm đến của bạn ở ngay khúc cua bên cạnh quán cà phê kìa."
      },
      superCasual: {
        phrase: "Boom! Destination's right around the corner, we finally made it, bro!",
        example: "Boom! Destination's right around the corner, we finally made it, bro!",
        translation: "Chuẩn luôn! Điểm đến ở ngay góc ngoặt đằng kia kìa, cuối cùng anh em mình cũng tới nơi rồi!"
      }
    },
    {
      phrase: "Go straight until you see...",
      meaning: "Hướng dẫn tiếp tục đi thẳng đến khi thấy điểm mốc.",
      vietnamese: "Đi thẳng tới khi bạn nhìn thấy...",
      business: {
        phrase: "Proceed straight along the avenue until the glass corporate tower comes into view.",
        example: "Proceed straight along the avenue until the glass corporate tower comes into view.",
        translation: "Xin tiếp tục tiến thẳng theo đại lộ cho đến khi tòa tháp doanh nghiệp bằng kính xuất hiện trong tầm nhìn."
      },
      casualStyle: {
        phrase: "Go straight down this street until you see the big green bookstore on your right.",
        example: "Go straight down this street until you see the big green bookstore on your right.",
        translation: "Cứ đi thẳng tắp con phố này cho tới khi bạn thấy hiệu sách to màu xanh lá ở bên tay phải."
      },
      superCasual: {
        phrase: "Just keep cruising straight till you spot the giant neon sign, can't miss it!",
        example: "Just keep cruising straight till you spot the giant neon sign, can't miss it!",
        translation: "Cứ phóng thẳng một lèo tới khi thấy cái biển đèn neon to tướng, không thể nào lạc được đâu!"
      }
    }
  ],

  // -------------------------------------------------------------
  // LESSON 10: Giao tiếp Mạng & Điện thoại
  // -------------------------------------------------------------
  'lesson-10': [
    {
      phrase: "You are currently on mute.",
      meaning: "Nhắc nhở đối phương đang tắt micro trong cuộc gọi trực tuyến.",
      vietnamese: "Bạn đang bị tắt mic kìa.",
      business: {
        phrase: "Pardon the interruption, Dr. Lee, but your audio feed is currently muted.",
        example: "Pardon the interruption, Dr. Lee, but your audio feed is currently muted.",
        translation: "Xin thứ lỗi ngắt lời, thưa Tiến sĩ Lee, nhưng đường truyền âm thanh của cô hiện đang bị tắt mic."
      },
      casualStyle: {
        phrase: "Hey Jane, we can't hear you because you're on mute; unmute your mic!",
        example: "Hey Jane, we can't hear you because you're on mute; unmute your mic!",
        translation: "Jane ơi, tụi mình không nghe được bạn nói vì bạn đang tắt mic kìa; bật mic lên đi!"
      },
      superCasual: {
        phrase: "Bro, you're on mute! Stop talking to yourself, lmao!",
        example: "Bro, you're on mute! Stop talking to yourself, lmao!",
        translation: "Ông tướng ơi, đang tắt mic kìa! Ngừng lẩm bẩm một mình đi ông ơi, haha!"
      }
    },
    {
      phrase: "My internet connection is unstable.",
      meaning: "Báo cáo đường truyền mạng internet đang bị chập chờn.",
      vietnamese: "Kết nối mạng của tôi đang không ổn định.",
      business: {
        phrase: "Our broadband connection is experiencing intermittent latency spikes.",
        example: "Our broadband connection is experiencing intermittent latency spikes during this call.",
        translation: "Đường truyền băng thông của chúng tôi đang gặp hiện tượng trễ sóng gián đoạn trong cuộc gọi này."
      },
      casualStyle: {
        phrase: "Sorry everyone, my Wi-Fi connection is super weak today, so I might lag.",
        example: "Sorry everyone, my Wi-Fi connection is super weak today, so I might lag.",
        translation: "Xin lỗi mọi người nhé, mạng Wi-Fi nhà mình hôm nay siêu yếu nên mình có thể bị lag."
      },
      superCasual: {
        phrase: "My Wi-Fi is literally dying, ping is over three hundred ms, help!",
        example: "My Wi-Fi is literally dying, ping is over three hundred ms, help!",
        translation: "Mạng nhà tui sắp chết ngắc rồi, ping vọt lên hơn 300 ms, cứu tui với anh em ơi!"
      }
    },
    {
      phrase: "Your voice is breaking up.",
      meaning: "Báo cho đối phương biết âm thanh của họ bị giật cục, bập bõm.",
      vietnamese: "Giọng của bạn đang bị bập bõm nghe không rõ.",
      business: {
        phrase: "Your audio transmission is breaking up; kindly consider disabling video streaming.",
        example: "Your audio transmission is breaking up; kindly consider disabling video streaming.",
        translation: "Tín hiệu âm thanh của ông/bà đang bị giật đứt đoạn; xin vui lòng cân nhắc tắt video camera."
      },
      casualStyle: {
        phrase: "Hold on for a second, your voice is breaking up so I missed your last sentence.",
        example: "Hold on for a second, your voice is breaking up so I missed your last sentence.",
        translation: "Chờ xíu bạn ơi, giọng bạn đang bị bập bõm nên mình vừa lỡ mất câu nói vừa rồi của bạn."
      },
      superCasual: {
        phrase: "You're breaking up so bad you sound like an alien robot, fr!",
        example: "You're breaking up so bad you sound like an alien robot, fr!",
        translation: "Giọng ông giật đùng đùng bập bõm nghe như người máy ngoài hành tinh ấy, thề luôn!"
      }
    },
    {
      phrase: "I'll shoot you an email right away.",
      meaning: "Hứa sẽ gửi nhanh thư điện tử hoặc tin nhắn ngay.",
      vietnamese: "Tôi sẽ gửi email cho bạn ngay lập tức.",
      business: {
        phrase: "I will shoot the encrypted documentation to your corporate inbox immediately.",
        example: "I will shoot the encrypted documentation to your corporate inbox immediately.",
        translation: "Tôi sẽ gửi tài liệu mã hóa vào hòm thư doanh nghiệp của anh/chị ngay lập tức."
      },
      casualStyle: {
        phrase: "I'll shoot you a quick text with the Google Drive link after our call.",
        example: "I'll shoot you a quick text with the Google Drive link after our call.",
        translation: "Mình sẽ nhắn tin nhanh gửi link Google Drive cho bạn ngay sau cuộc gọi này nhé."
      },
      superCasual: {
        phrase: "Shoot me that invite link on discord, bro, hopping on now!",
        example: "Shoot me that invite link on discord, bro, hopping on now!",
        translation: "Bắn cái link mời phòng trên Discord qua đây đi ông, tui nhảy vào liền bây giờ đây!"
      }
    },
    {
      phrase: "Turn off system notifications.",
      meaning: "Khuyên tắt bớt chuông thông báo để tập trung.",
      vietnamese: "Tắt các thông báo hệ thống đi.",
      business: {
        phrase: "Please mute background system notifications to prevent interference with recording.",
        example: "Please mute background system notifications to prevent interference with recording.",
        translation: "Xin vui lòng tắt các chuông thông báo hệ thống ngầm để tránh gây nhiễu bản ghi âm cuộc họp."
      },
      casualStyle: {
        phrase: "Try turning off your app notifications so your phone doesn't keep buzzing.",
        example: "Try turning off your app notifications so your phone doesn't keep buzzing.",
        translation: "Thử tắt bớt thông báo ứng dụng đi để điện thoại đỡ rung bần bật liên tục bạn nhé."
      },
      superCasual: {
        phrase: "Mute that notification spam, bro, it's driving the whole lobby crazy!",
        example: "Mute that notification spam, bro, it's driving the whole lobby crazy!",
        translation: "Tắt cái đống thông báo dội bom đó đi ông tướng, nó làm cả phòng phát điên lên rồi kìa!"
      }
    }
  ],

  // -------------------------------------------------------------
  // LESSON 11: Sức khỏe & Cảm xúc
  // -------------------------------------------------------------
  'lesson-11': [
    {
      phrase: "I'm feeling a bit under the weather.",
      meaning: "Cách nói ẩn dụ bản thân đang hơi mệt hoặc ốm nhẹ.",
      vietnamese: "Tôi đang cảm thấy hơi mệt mỏi trong người.",
      business: {
        phrase: "I am feeling slightly under the weather and request permission to work asynchronously.",
        example: "I am feeling slightly under the weather and request permission to work asynchronously today.",
        translation: "Tôi đang cảm thấy không được khỏe trong người và xin phép được xử lý công việc không đồng bộ hôm nay."
      },
      casualStyle: {
        phrase: "I'm feeling a bit under the weather today, so I might stay in bed and sip warm tea.",
        example: "I'm feeling a bit under the weather today, so I might stay in bed and sip warm tea.",
        translation: "Hôm nay mình thấy hơi mệt trong người, nên chắc mình sẽ nằm nghỉ và nhâm nhi trà nóng."
      },
      superCasual: {
        phrase: "Under the weather is an understatement, bro, I'm completely wiped out!",
        example: "Under the weather is an understatement, bro, I'm completely wiped out!",
        translation: "Bảo mệt nhẹ là còn nói giảm nói tránh đấy ông ơi, tui kiệt sức nằm liệt giường luôn rồi!"
      }
    },
    {
      phrase: "I woke up with a pounding headache.",
      meaning: "Kể về việc thức dậy với cơn đau đầu dữ dội.",
      vietnamese: "Tôi thức dậy với một cơn đau đầu như búa bổ.",
      business: {
        phrase: "The employee reported acute headache symptoms consistent with excessive digital eye strain.",
        example: "The employee reported acute headache symptoms consistent with excessive digital eye strain.",
        translation: "Nhân viên báo cáo triệu chứng đau đầu cấp tính tương thích với việc mỏi mắt do nhìn màn hình quá nhiều."
      },
      casualStyle: {
        phrase: "I woke up with such a pounding headache that I couldn't look at my laptop screen.",
        example: "I woke up with such a pounding headache that I couldn't look at my laptop screen.",
        translation: "Sáng nay mình dậy đầu đau như búa bổ đến mức chẳng thể nhìn nổi vào màn hình máy tính."
      },
      superCasual: {
        phrase: "My head is pounding like a bass drum, pop me an aspirin ASAP!",
        example: "My head is pounding like a bass drum, pop me an aspirin ASAP, bro!",
        translation: "Đầu tui đang gõ thình thịch như trống trận này, quẳng cho tui viên giảm đau lẹ coi ông bạn!"
      }
    },
    {
      phrase: "I hope you recover quickly.",
      meaning: "Lời chúc mong đối phương mau chóng khỏi bệnh.",
      vietnamese: "Tôi hy vọng bạn sẽ nhanh chóng hồi phục sức khỏe.",
      business: {
        phrase: "We extend our sincere wishes for your swift recovery and restored health.",
        example: "We extend our sincere wishes for your swift recovery and restored health, Ms. Berg.",
        translation: "Chúng tôi xin gửi lời chúc chân thành mong cô Berg nhanh chóng bình phục và lấy lại sức khỏe."
      },
      casualStyle: {
        phrase: "Get lots of rest and drink ginger tea; I hope you recover very quickly!",
        example: "Get lots of rest and drink ginger tea; I hope you recover very quickly!",
        translation: "Nghỉ ngơi thật nhiều và uống trà gừng nhé; mình mong bạn sẽ mau chóng bình phục!"
      },
      superCasual: {
        phrase: "Sleep it off and recover fast, bro! We need you back on the squad!",
        example: "Sleep it off and recover fast, bro! We need you back on the squad!",
        translation: "Ngủ một giấc cho khỏe rồi hồi phục nhanh đi ông tướng! Anh em đang cần ông quay lại đội nè!"
      }
    },
    {
      phrase: "Don't be so anxious about the exam.",
      meaning: "Lời khuyên nhủ ai đó đừng quá bất an, lo lắng.",
      vietnamese: "Đừng quá lo âu về kỳ thi đó.",
      business: {
        phrase: "Mitigating anxious tension through structured preparation ensures optimal performance.",
        example: "Mitigating anxious tension through structured preparation ensures optimal performance.",
        translation: "Việc giảm thiểu căng thẳng lo âu thông qua sự chuẩn bị bài bản sẽ đảm bảo hiệu suất tối ưu."
      },
      casualStyle: {
        phrase: "You've studied so hard, so try not to feel too anxious about tomorrow's test.",
        example: "You've studied so hard, so try not to feel too anxious about tomorrow's test.",
        translation: "Bạn đã học rất chăm chỉ rồi, nên cố gắng đừng để bản thân quá lo âu về bài thi ngày mai nhé."
      },
      superCasual: {
        phrase: "Stop stressing and getting anxious, man! You're gonna crush this quiz, no cap!",
        example: "Stop stressing and getting anxious, man! You're gonna crush this quiz, no cap!",
        translation: "Ngừng xoắn quẩy với lo âu đi ông giáo! Ông chắc chắn sẽ nghiền nát bài thi này, thề luôn!"
      }
    },
    {
      phrase: "You look completely exhausted.",
      meaning: "Nhận xét ai đó trông có vẻ kiệt sức, rã rời.",
      vietnamese: "Trông bạn hoàn toàn kiệt sức rồi.",
      business: {
        phrase: "Physical exhaustion compromises strategic decision-making; mandatory rest is advised.",
        example: "Physical exhaustion compromises strategic decision-making; mandatory rest is advised.",
        translation: "Sự kiệt quệ thể chất làm suy giảm chất lượng ra quyết định chiến lược; khuyến nghị nghỉ ngơi bắt buộc."
      },
      casualStyle: {
        phrase: "Sit down and take a break; you look completely exhausted from studying all night.",
        example: "Sit down and take a break; you look completely exhausted from studying all night.",
        translation: "Ngồi xuống nghỉ ngơi một lát đi; trông bạn kiệt sức hoàn toàn vì thức trắng đêm học bài rồi đấy."
      },
      superCasual: {
        phrase: "Bro, you look like a walking zombie, totally exhausted! Go crash!",
        example: "Bro, you look like a walking zombie, totally exhausted! Go crash!",
        translation: "Ông ơi, trông như xác sống biết đi rồi, kiệt sức rã rời thế kia! Đi ngủ ngay giùm tui!"
      }
    }
  ],

  // -------------------------------------------------------------
  // LESSON 12: Hướng nghiệp & Sở thích Học tập
  // -------------------------------------------------------------
  'lesson-12': [
    {
      phrase: "What is your main career ambition?",
      meaning: "Hỏi về hoài bão sự nghiệp lớn nhất của đối phương.",
      vietnamese: "Hoài bão sự nghiệp lớn nhất của bạn là gì?",
      business: {
        phrase: "What long-term professional ambition guides your career progression?",
        example: "What long-term professional ambition guides your career progression, Mr. Nguyen?",
        translation: "Hoài bão nghề nghiệp dài hạn nào đang dẫn dắt con đường phát triển sự nghiệp của anh Nguyên?"
      },
      casualStyle: {
        phrase: "What is your main ambition after graduation? What kind of work excites you?",
        example: "What is your main ambition after graduation? What kind of work excites you?",
        translation: "Hoài bão lớn nhất của bạn sau khi ra trường là gì? Kiểu công việc nào làm bạn hứng khởi?"
      },
      superCasual: {
        phrase: "What's the big ambition, bro? Aiming to be CEO or starting your own hustle?",
        example: "What's the big ambition, bro? Aiming to be CEO or starting your own hustle?",
        translation: "Ước mơ hoài bão lớn nhất là gì thế ông bạn? Tính làm sếp lớn hay tự mở cty cày cuốc riêng?"
      }
    },
    {
      phrase: "I want to pursue a career in technology.",
      meaning: "Bày tỏ mong muốn theo đuổi nghề nghiệp trong ngành công nghệ.",
      vietnamese: "Tôi muốn theo đuổi sự nghiệp trong ngành công nghệ.",
      business: {
        phrase: "I intend to pursue an enterprise career at the intersection of AI and business analytics.",
        example: "I intend to pursue an enterprise career at the intersection of AI and business analytics.",
        translation: "Em có định hướng theo đuổi sự nghiệp doanh nghiệp tại điểm giao thoa giữa AI và phân tích kinh doanh."
      },
      casualStyle: {
        phrase: "I really want to pursue a career in software development because I love coding.",
        example: "I really want to pursue a career in software development because I love coding.",
        translation: "Mình thực sự muốn theo đuổi sự nghiệp phát triển phần mềm vì mình rất mê viết code."
      },
      superCasual: {
        phrase: "Gotta pursue this indie game dev dream, bro! Corporate life is not for me.",
        example: "Gotta pursue this indie game dev dream, bro! Corporate life is not for me.",
        translation: "Phải quyết tâm theo đuổi giấc mơ làm game độc lập thôi ông ơi! Đời văn phòng không dành cho tui."
      }
    },
    {
      phrase: "Which university major did you choose?",
      meaning: "Hỏi chuyên ngành đại học mà đối phương đã lựa chọn.",
      vietnamese: "Bạn đã chọn theo học chuyên ngành đại học nào?",
      business: {
        phrase: "How does your undergraduate major provide domain expertise for this consultancy role?",
        example: "How does your undergraduate major provide domain expertise for this consultancy role?",
        translation: "Chuyên ngành đại học của anh/chị cung cấp chuyên môn nền tảng như thế nào cho vai trò tư vấn này ạ?"
      },
      casualStyle: {
        phrase: "Which major are you enrolled in? Are you enjoying your coursework?",
        example: "Which major are you enrolled in? Are you enjoying your coursework?",
        translation: "Bạn đang theo học chuyên ngành nào thế? Bạn có thấy thích các môn học không?"
      },
      superCasual: {
        phrase: "What major did you pick? Computer science or something chill?",
        example: "What major did you pick? Computer science or something chill, man?",
        translation: "Chọn ngành gì thế ông? Khoa học máy tính cày bừa hay ngành nào thảnh thơi hơn?"
      }
    },
    {
      phrase: "Medicine is a highly respected profession.",
      meaning: "Nhận xét ngành y là một nghề nghiệp được xã hội vô cùng tôn trọng.",
      vietnamese: "Ngành y là một nghề nghiệp rất được coi trọng.",
      business: {
        phrase: "Entering the medical profession demands steadfast adherence to ethical standards.",
        example: "Entering the medical profession demands steadfast adherence to ethical standards.",
        translation: "Việc bước chân vào nghề nghiệp y khoa đòi hỏi sự tuân thủ kiên định các chuẩn mực đạo đức."
      },
      casualStyle: {
        phrase: "Teaching is such a respected profession; it shapes young minds every single day.",
        example: "Teaching is such a respected profession; it shapes young minds every single day.",
        translation: "Nghề dạy học là một nghề nghiệp rất đáng trân trọng; nó định hình tư duy của thế hệ trẻ mỗi ngày."
      },
      superCasual: {
        phrase: "That's a crazy respected profession, bro, huge props to anyone doing it!",
        example: "That's a crazy respected profession, bro, huge props to anyone doing it!",
        translation: "Cái nghề đó được cả xã hội nể phục dã man ông ạ, ngả mũ kính phục ai theo đuổi nổi luôn!"
      }
    },
    {
      phrase: "I am seeking experienced career guidance.",
      meaning: "Nói về việc tìm kiếm lời khuyên định hướng nghề nghiệp từ người đi trước.",
      vietnamese: "Tôi đang tìm kiếm sự định hướng nghề nghiệp từ chuyên gia.",
      business: {
        phrase: "Seeking structured mentorship and strategic guidance accelerates executive readiness.",
        example: "Seeking structured mentorship and strategic guidance accelerates executive readiness.",
        translation: "Việc tìm kiếm sự dìu dắt bài bản và định hướng chiến lược sẽ đẩy nhanh tốc độ sẵn sàng của lãnh đạo."
      },
      casualStyle: {
        phrase: "I booked an appointment with our career counselor to get some practical guidance.",
        example: "I booked an appointment with our career counselor to get some practical guidance.",
        translation: "Mình đã đặt hẹn với thầy tư vấn hướng nghiệp để xin vài lời khuyên định hướng thực tế."
      },
      superCasual: {
        phrase: "Need some solid guidance from senior devs before we dive into this startup blind!",
        example: "Need some solid guidance from senior devs before we dive into this startup blind, fr!",
        translation: "Phải đi xin mấy tiền bối chỉ giáo vài chiêu định hướng trước khi cắm đầu khởi nghiệp mù quáng, thật sự!"
      }
    }
  ],

  // -------------------------------------------------------------
  // LESSON 13: Lễ Tết & Phong tục Việt
  // -------------------------------------------------------------
  'lesson-13': [
    {
      phrase: "Tet is the ultimate time for family reunion.",
      meaning: "Khẳng định Tết là dịp sum họp gia đình thiêng liêng nhất.",
      vietnamese: "Tết là khoảng thời gian tối thượng cho sự đoàn tụ gia đình.",
      business: {
        phrase: "The Lunar New Year holiday embodies our society's deepest veneration for family reunion.",
        example: "The Lunar New Year holiday embodies our society's deepest veneration for family reunion.",
        translation: "Kỳ nghỉ Tết Nguyên Đán thể hiện sự tôn vinh sâu sắc nhất của xã hội chúng ta đối với giá trị đoàn viên gia đình."
      },
      casualStyle: {
        phrase: "Tet is the best time of the year because our whole family gathers for a joyful reunion.",
        example: "Tet is the best time of the year because our whole family gathers for a joyful reunion.",
        translation: "Tết là khoảng thời gian tuyệt nhất trong năm vì cả nhà mình tụ họp sum vầy vui vẻ bên nhau."
      },
      superCasual: {
        phrase: "Family reunion mode activated, bro! Feasting with the whole clan all week!",
        example: "Family reunion mode activated, bro! Feasting with the whole clan all week!",
        translation: "Kích hoạt chế độ sum họp gia đình thôi ông ơi! Cả dòng họ ngồi ăn uống phủ phê cả tuần liền!"
      }
    },
    {
      phrase: "People put up colorful holiday decorations.",
      meaning: "Miêu tả cảnh trang hoàng phố xá rực rỡ đón Tết.",
      vietnamese: "Mọi người treo các đồ trang trí ngày lễ rực rỡ sắc màu.",
      business: {
        phrase: "Municipal districts feature magnificent decorative floral displays and ceremonial lanterns.",
        example: "Municipal districts feature magnificent decorative floral displays and ceremonial lanterns.",
        translation: "Các quận nội thành được điểm tô bằng những công trình hoa trang trí tráng lệ và đèn lồng trang nghiêm."
      },
      casualStyle: {
        phrase: "Streets look so pretty right now with all the red decorations and yellow apricot blossoms.",
        example: "Streets look so pretty right now with all the red decorations and yellow apricot blossoms.",
        translation: "Phố phường lúc này trông xinh xắn ghê với đủ thứ đồ trang trí màu đỏ và hoa mai vàng rực rỡ."
      },
      superCasual: {
        phrase: "Check out those crazy decorations on every corner, festive vibes are maxed out!",
        example: "Check out those crazy decorations on every corner, festive vibes are maxed out, bro!",
        translation: "Ngó đống đồ trang trí lung linh khắp mọi ngóc ngách kìa, không khí lễ hội đang đạt đỉnh nóc kịch trần luôn!"
      }
    },
    {
      phrase: "Giving lucky money is a cherished custom.",
      meaning: "Nói về phong tục lì xì đầu năm mang lại may mắn.",
      vietnamese: "Trao tiền mừng tuổi lì xì là một phong tục rất được trân quý.",
      business: {
        phrase: "The ceremonial distribution of lucky envelopes symbolizes generational benevolence and respect.",
        example: "The ceremonial distribution of lucky envelopes symbolizes generational benevolence and respect.",
        translation: "Nghi thức trao phong bao lì xì tượng trưng cho lòng nhân ái và sự kính trọng giữa các thế hệ."
      },
      casualStyle: {
        phrase: "Giving crisp red envelopes to children and grandparents is my favorite Tet custom.",
        example: "Giving crisp red envelopes to children and grandparents is my favorite Tet custom.",
        translation: "Trao những phong bao lì xì đỏ tươi cho trẻ nhỏ và ông bà là phong tục Tết mình thích nhất."
      },
      superCasual: {
        phrase: "Hunting for red envelopes is the ultimate holiday custom, keep 'em coming!",
        example: "Hunting for red envelopes is the ultimate holiday custom, keep 'em coming, fam!",
        translation: "Đi săn bao lì xì là phong tục đỉnh nhất trần đời, bao nhiêu phong bao cũng xin nhận hết nha anh em!"
      }
    },
    {
      phrase: "Wishing you a year of peace and prosperity!",
      meaning: "Lời chúc năm mới an khang thịnh vượng.",
      vietnamese: "Kính chúc bạn một năm mới an bình và thịnh vượng!",
      business: {
        phrase: "May this Lunar New Year bestow enduring peace, commercial prosperity, and distinguished success upon your enterprise.",
        example: "May this Lunar New Year bestow enduring peace, commercial prosperity, and distinguished success upon your enterprise.",
        translation: "Kính chúc quý doanh nghiệp một năm mới vạn sự an khang, kinh doanh phát đạt thịnh vượng và gặt hái thành công vượt bậc."
      },
      casualStyle: {
        phrase: "Wishing you and your family abundant health, endless happiness, and great prosperity this year!",
        example: "Wishing you and your family abundant health, endless happiness, and great prosperity this year!",
        translation: "Chúc bạn và gia đình dồi dào sức khỏe, ngập tràn niềm vui và phát tài phát lộc trong năm nay nhé!"
      },
      superCasual: {
        phrase: "May your pockets be heavy with prosperity and your heart stay light, bro!",
        example: "May your pockets be heavy with prosperity and your heart stay light, bro, Happy New Year!",
        translation: "Chúc ví ông lúc nào cũng nặng trĩu tiền tài thịnh vượng còn lòng thì phơi phới nhẹ tênh nhé ông bạn, Chúc Mừng Năm Mới!"
      }
    },
    {
      phrase: "Let's gather around the kitchen to wrap Banh Chung.",
      meaning: "Rủ rê mọi người quây quần gói bánh chưng.",
      vietnamese: "Chúng ta cùng quây quần bên gian bếp để gói bánh chưng.",
      business: {
        phrase: "Generations gather to preserve traditional culinary heritage through collective artisanal preparation.",
        example: "Generations gather to preserve traditional culinary heritage through collective artisanal preparation.",
        translation: "Các thế hệ tề tựu để gìn giữ di sản ẩm thực truyền thống thông qua việc cùng nhau chuẩn bị nguyên liệu thủ công."
      },
      casualStyle: {
        phrase: "All my cousins gather on New Year's Eve to wrap sticky rice cakes and tell old stories.",
        example: "All my cousins gather on New Year's Eve to wrap sticky rice cakes and tell old stories.",
        translation: "Tất cả anh em họ nhà mình tụ họp vào đêm giao thừa để gói bánh chưng và kể chuyện ngày xưa."
      },
      superCasual: {
        phrase: "Squad, gather round the pot! Boiling sticky rice cakes all night long, let's go!",
        example: "Squad, gather round the pot! Boiling sticky rice cakes all night long, let's go!",
        translation: "Anh em ơi, quây quanh nồi bánh nào! Thức trắng đêm canh nồi bánh chưng luộc, chiến thôi nào!"
      }
    }
  ],

  // -------------------------------------------------------------
  // LESSON 14: Du lịch & Vẻ đẹp quê hương
  // -------------------------------------------------------------
  'lesson-14': [
    {
      phrase: "The natural mountain scenery is breathtaking.",
      meaning: "Khen ngợi cảnh sắc non nước kỳ vĩ làm sững sờ.",
      vietnamese: "Cảnh quan núi non thiên nhiên đẹp đến nghẹt thở.",
      business: {
        phrase: "The majestic limestone karst scenery represents a breathtaking natural wonder of global stature.",
        example: "The majestic limestone karst scenery represents a breathtaking natural wonder of global stature.",
        translation: "Cảnh quan núi đá vôi kỳ vĩ đại diện cho một kỳ quan thiên nhiên đẹp đến nghẹt thở mang tầm vóc toàn cầu."
      },
      casualStyle: {
        phrase: "The mountain scenery in Ha Giang is so breathtaking that I took hundreds of photos.",
        example: "The mountain scenery in Ha Giang is so breathtaking that I took hundreds of photos.",
        translation: "Cảnh sắc đồi núi ở Hà Giang đẹp nghẹt thở đến mức mình đã chụp hàng trăm bức ảnh lưu niệm."
      },
      superCasual: {
        phrase: "That canyon scenery took my breath away, bro! Pure visual magic, no cap!",
        example: "That canyon scenery took my breath away, bro! Pure visual magic, no cap!",
        translation: "Cảnh hẻm núi đó làm tui chết đứng vì đẹp luôn ông ơi! Ảo diệu con mắt thực sự, thề không điêu!"
      }
    },
    {
      phrase: "Vietnamese locals are famous for their hospitality.",
      meaning: "Ca ngợi lòng hiếu khách nồng hậu của người dân Việt.",
      vietnamese: "Người dân Việt Nam nổi tiếng vì lòng hiếu khách nồng hậu.",
      business: {
        phrase: "Our international visitors consistently commend the exceptional warmth and hospitality of local hosts.",
        example: "Our international visitors consistently commend the exceptional warmth and hospitality of local hosts.",
        translation: "Du khách quốc tế của chúng tôi liên tục ngợi khen sự ấm áp và lòng hiếu khách vượt trội của người dân bản địa."
      },
      casualStyle: {
        phrase: "The villagers showed us so much warm hospitality; they invited us in for hot tea and fruit.",
        example: "The villagers showed us so much warm hospitality; they invited us in for hot tea and fruit.",
        translation: "Người dân trong làng đón tiếp tụi mình bằng sự hiếu khách nồng nhiệt; họ mời tụi mình vào uống trà nóng và ăn hoa quả."
      },
      superCasual: {
        phrase: "The homestay aunties treated us like royalty with endless food and hospitality, fr!",
        example: "The homestay aunties treated us like royalty with endless food and hospitality, fr!",
        translation: "Mấy cô chủ homestay tiếp đãi anh em mình như vua chúa, đồ ăn ngập mặt cùng sự nhiệt tình hết nấc luôn!"
      }
    },
    {
      phrase: "Let's draw up a detailed travel itinerary.",
      meaning: "Lên kế hoạch lộ trình du lịch chi tiết.",
      vietnamese: "Chúng ta hãy cùng lập một bản lộ trình du lịch chi tiết.",
      business: {
        phrase: "We have finalized a comprehensive four-day conference and cultural itinerary for the delegation.",
        example: "We have finalized a comprehensive four-day conference and cultural itinerary for the delegation.",
        translation: "Chúng tôi đã hoàn thiện bản lịch trình 4 ngày toàn diện kết hợp hội nghị và giao lưu văn hóa cho phái đoàn."
      },
      casualStyle: {
        phrase: "Let's draw up a 3-day Da Lat itinerary so we don't waste time figuring out where to go.",
        example: "Let's draw up a 3-day Da Lat itinerary so we don't waste time figuring out where to go.",
        translation: "Tụi mình cùng lên lịch trình 3 ngày ở Đà Lạt đi để khỏi tốn thời gian lúng túng không biết đi đâu."
      },
      superCasual: {
        phrase: "Forget strict itineraries, bro! Let's just wing it and explore random backroads!",
        example: "Forget strict itineraries, bro! Let's just wing it and explore random backroads!",
        translation: "Dẹp mấy cái lịch trình gò bó đi ông giáo! Cứ xách xe lên rồi lượn mấy con đường mòn ngẫu hứng đi!"
      }
    },
    {
      phrase: "I bought handmade crafts as souvenirs.",
      meaning: "Kể về việc mua đồ thủ công làm quà lưu niệm.",
      vietnamese: "Tôi đã mua các món đồ thủ công mỹ nghệ về làm quà kỷ niệm.",
      business: {
        phrase: "Delegates received exquisite artisanal lacquerware as commemorative official souvenirs.",
        example: "Delegates received exquisite artisanal lacquerware as commemorative official souvenirs.",
        translation: "Các đại biểu đã nhận được những món đồ sơn mài thủ công tinh xảo làm quà lưu niệm chính thức kỷ niệm chuyến đi."
      },
      casualStyle: {
        phrase: "I bought some cute conical hats and local roasted coffee as souvenirs for my classmates.",
        example: "I bought some cute conical hats and local roasted coffee as souvenirs for my classmates.",
        translation: "Mình đã mua vài chiếc nón lá xinh xắn và cà phê rang xay bản địa về làm quà lưu niệm cho bạn cùng lớp."
      },
      superCasual: {
        phrase: "Copped a handmade scarf as a souvenir, but the photos are the real treasure, man!",
        example: "Copped a handmade scarf as a souvenir, but the photos are the real treasure, man!",
        translation: "Tui sắm được cái khăn dệt tay làm kỷ niệm rồi, cơ mà đống ảnh sống ảo mới là kho báu xịn nhất ông ơi!"
      }
    },
    {
      phrase: "My hometown is celebrated for its coastlines.",
      meaning: "Tự hào giới thiệu thế mạnh danh thắng của quê hương.",
      vietnamese: "Quê hương của tôi nổi tiếng với những đường bờ biển tuyệt đẹp.",
      business: {
        phrase: "Our coastal municipality is celebrated internationally for pristine marine eco-sanctuaries.",
        example: "Our coastal municipality is celebrated internationally for pristine marine eco-sanctuaries.",
        translation: "Đô thị miền duyên hải của chúng tôi nổi tiếng trên trường quốc tế với các khu bảo tồn sinh thái biển hoang sơ."
      },
      casualStyle: {
        phrase: "My hometown Da Nang is famous for its long sandy beaches and friendly atmosphere.",
        example: "My hometown Da Nang is famous for its long sandy beaches and friendly atmosphere.",
        translation: "Quê Đà Nẵng của mình nổi tiếng với những bãi cát dài thoai thoải và bầu không khí thân thiện."
      },
      superCasual: {
        phrase: "My hometown has the sickest beach sunsets, you gotta pull up sometime, bro!",
        example: "My hometown has the sickest beach sunsets, you gotta pull up sometime, bro!",
        translation: "Quê tui có mấy buổi hoàng hôn trên biển đẹp đỉnh chóp luôn, bữa nào ông phải ghé qua chơi đấy nhá!"
      }
    }
  ],

  // -------------------------------------------------------------
  // LESSON 15: Môi trường & Trách nhiệm
  // -------------------------------------------------------------
  'lesson-15': [
    {
      phrase: "We must minimize industrial pollution.",
      meaning: "Kêu gọi giảm thiểu tối đa nạn ô nhiễm công nghiệp.",
      vietnamese: "Chúng ta phải giảm thiểu nạn ô nhiễm công nghiệp.",
      business: {
        phrase: "Our corporate sustainability mandate requires active measures to curtail environmental pollution.",
        example: "Our corporate sustainability mandate requires active measures to curtail environmental pollution.",
        translation: "Chỉ thị phát triển bền vững của doanh nghiệp đòi hỏi các biện pháp chủ động nhằm hạn chế ô nhiễm môi trường."
      },
      casualStyle: {
        phrase: "Air pollution is getting serious in the city, so we should bike more often.",
        example: "Air pollution is getting serious in the city, so we should bike more often.",
        translation: "Tình trạng ô nhiễm không khí trong thành phố đang trở nên nghiêm trọng, nên tụi mình nên đạp xe thường xuyên hơn."
      },
      superCasual: {
        phrase: "Plastic pollution is choking this beach, bro! Time to clean this mess up!",
        example: "Plastic pollution is choking this beach, bro! Time to clean this mess up!",
        translation: "Rác nhựa đang bóp nghẹt cả cái bãi biển này rồi ông ơi! Đã đến lúc phải dọn dẹp bãi chiến trường này thôi!"
      }
    },
    {
      phrase: "Separate trash so we can recycle properly.",
      meaning: "Nhắc nhở phân loại rác thải để tái chế đúng cách.",
      vietnamese: "Phân loại rác để chúng ta có thể tái chế đúng quy trình.",
      business: {
        phrase: "Establishing rigorous sorting protocols enables the enterprise to recycle eighty percent of solid waste.",
        example: "Establishing rigorous sorting protocols enables the enterprise to recycle eighty percent of solid waste.",
        translation: "Việc thiết lập các quy chuẩn phân loại nghiêm ngặt cho phép doanh nghiệp tái chế tới 80% rác thải rắn."
      },
      casualStyle: {
        phrase: "Make sure you rinse and separate plastic bottles so the center can recycle them easily.",
        example: "Make sure you rinse and separate plastic bottles so the center can recycle them easily.",
        translation: "Nhớ tráng sạch và phân loại chai nhựa riêng ra để trung tâm có thể tái chế dễ dàng nhé."
      },
      superCasual: {
        phrase: "Don't just toss that can in the dirt, recycle it so it doesn't rot in a landfill, man!",
        example: "Don't just toss that can in the dirt, recycle it so it doesn't rot in a landfill, man!",
        translation: "Đừng có vứt bừa cái lon xuống đất thế, bỏ vào thùng tái chế kẻo nó nằm thối rữa ở bãi rác bây giờ!"
      }
    },
    {
      phrase: "Every voluntary community action counts.",
      meaning: "Cổ vũ tinh thần thiện nguyện vì cộng đồng, việc nhỏ ý nghĩa lớn.",
      vietnamese: "Mỗi hành động thiện nguyện vì cộng đồng đều có giá trị.",
      business: {
        phrase: "Corporate voluntary participation in ecological remediation demonstrates true civic accountability.",
        example: "Corporate voluntary participation in ecological remediation demonstrates true civic accountability.",
        translation: "Sự tham gia tự nguyện của doanh nghiệp vào việc phục hồi sinh thái thể hiện trách nhiệm công dân đích thực."
      },
      casualStyle: {
        phrase: "Joining this voluntary park cleanup felt so rewarding; every small action counts.",
        example: "Joining this voluntary park cleanup felt so rewarding; every small action counts.",
        translation: "Tham gia buổi dọn rác tình nguyện ở công viên này thấy ý nghĩa ghê; từng hành động nhỏ đều góp phần tạo nên thay đổi."
      },
      superCasual: {
        phrase: "Did some voluntary trash-tagging today, pure good karma for the squad, no cap!",
        example: "Did some voluntary trash-tagging today, pure good karma for the squad, no cap!",
        translation: "Hôm nay đi nhặt rác tình nguyện đăng mạng xã hội, tích đức xịn sò cho cả hội anh em luôn, thề!"
      }
    },
    {
      phrase: "We need to conserve natural energy and water.",
      meaning: "Nhắc nhở tiết kiệm bảo tồn năng lượng và nguồn nước sạch.",
      vietnamese: "Chúng ta cần bảo tồn năng lượng tự nhiên và nguồn nước.",
      business: {
        phrase: "Facility modifications are designed to conserve freshwater usage by forty percent.",
        example: "Facility modifications are designed to conserve freshwater usage by forty percent across all plants.",
        translation: "Các cải tiến cơ sở vật chất được thiết kế nhằm bảo tồn và tiết kiệm 40% lượng nước ngọt trên toàn nhà máy."
      },
      casualStyle: {
        phrase: "Turn off the lights when leaving the room to conserve electricity and protect the planet.",
        example: "Turn off the lights when leaving the room to conserve electricity and protect the planet.",
        translation: "Nhớ tắt đèn khi rời khỏi phòng để tiết kiệm điện năng và bảo vệ hành tinh xanh của chúng mình nhé."
      },
      superCasual: {
        phrase: "Conserve that water, bro! Don't let the tap run while brushing your teeth!",
        example: "Conserve that water, bro! Don't let the tap run while brushing your teeth!",
        translation: "Tiết kiệm nước giùm cái coi ông tướng! Đừng có xả vòi nước chảy tự do trong lúc đánh răng thế chứ!"
      }
    },
    {
      phrase: "Choose organic and eco-friendly products.",
      meaning: "Khuyên lựa chọn các sản phẩm hữu cơ, thân thiện với môi trường.",
      vietnamese: "Hãy ưu tiên chọn các sản phẩm hữu cơ và thân thiện với môi trường.",
      business: {
        phrase: "Procurement preference is awarded to certified organic and biodegradable packaging solutions.",
        example: "Procurement preference is awarded to certified organic and biodegradable packaging solutions.",
        translation: "Quyền ưu tiên thu mua được trao cho các giải pháp bao bì hữu cơ và tự phân hủy sinh học đạt chứng chỉ."
      },
      casualStyle: {
        phrase: "Buying organic fruits and using cloth grocery bags is an easy way to go green.",
        example: "Buying organic fruits and using cloth grocery bags is an easy way to go green.",
        translation: "Mua hoa quả hữu cơ và dùng túi vải đi chợ là cách rất đơn giản để sống xanh mỗi ngày."
      },
      superCasual: {
        phrase: "Swap out plastic straws for organic bamboo ones, it's a total flex for the earth, fr!",
        example: "Swap out plastic straws for organic bamboo ones, it's a total flex for the earth, fr!",
        translation: "Đổi ống hút nhựa sang ống hút tre hữu cơ đi, vừa chất chơi lại vừa bảo vệ môi trường, thật sự!"
      }
    }
  ],

  // -------------------------------------------------------------
  // LESSON 16: Cảm ơn, Xin lỗi & Phép Lịch sự
  // -------------------------------------------------------------
  'lesson-16': [
    {
      phrase: "I sincerely apologize for the delay.",
      meaning: "Lời xin lỗi chân thành vì sự chậm trễ.",
      vietnamese: "Tôi chân thành xin lỗi vì sự chậm trễ này.",
      business: {
        phrase: "I sincerely apologize for the unexpected administrative delay regarding the portfolio dispatch.",
        example: "I sincerely apologize for the unexpected administrative delay regarding the portfolio dispatch.",
        translation: "Tôi chân thành xin lỗi vì sự chậm trễ hành chính ngoài ý muốn liên quan đến việc bàn giao hồ sơ đầu tư."
      },
      casualStyle: {
        phrase: "I sincerely apologize for making you wait; my bus was stuck in traffic.",
        example: "I sincerely apologize for making you wait; my bus was stuck in traffic.",
        translation: "Mình chân thành xin lỗi vì đã để bạn phải chờ; xe buýt của mình bị kẹt cứng trong dòng xe cộ."
      },
      superCasual: {
        phrase: "My total bad for being late, bro, traffic was an absolute zoo!",
        example: "My total bad for being late, bro, traffic was an absolute zoo!",
        translation: "Lỗi tui ngàn lần vì tới trễ nha ông bạn, ngoài đường xe cộ đông như sở thú ấy!"
      }
    },
    {
      phrase: "I am extremely grateful for your guidance.",
      meaning: "Bày tỏ lòng biết ơn sâu sắc đối với sự hỗ trợ, dìu dắt.",
      vietnamese: "Tôi vô cùng biết ơn sự định hướng chỉ dẫn của bạn.",
      business: {
        phrase: "We remain exceptionally grateful for your esteemed mentorship and unwavering stewardship.",
        example: "We remain exceptionally grateful for your esteemed mentorship and unwavering stewardship.",
        translation: "Chúng tôi vô cùng biết ơn sự dìu dắt đáng kính và sự định hướng kiên định của quý vị."
      },
      casualStyle: {
        phrase: "I'm super grateful for your help with my grammar essay; you are a lifesaver!",
        example: "I'm super grateful for your help with my grammar essay; you are a lifesaver!",
        translation: "Mình siêu biết ơn sự giúp đỡ của bạn cho bài luận ngữ pháp của mình; bạn đúng là vị cứu tinh!"
      },
      superCasual: {
        phrase: "Can't thank you enough, man! You're a certified real one, grateful for you fr!",
        example: "Can't thank you enough, man! You're a certified real one, grateful for you fr!",
        translation: "Cảm ơn ông bao nhiêu cũng không đủ luôn! Ông đúng là người anh em uy tín số một, biết ơn ông thật sự!"
      }
    },
    {
      phrase: "It was just a simple misunderstanding.",
      meaning: "Xoa dịu sự việc bằng cách giải thích đó chỉ là hiểu lầm nhỏ.",
      vietnamese: "Đó chỉ là một sự hiểu lầm đơn giản thôi mà.",
      business: {
        phrase: "The scheduling discrepancy was merely an unfortunate administrative misunderstanding.",
        example: "The scheduling discrepancy was merely an unfortunate administrative misunderstanding.",
        translation: "Sự sai lệch về lịch trình đơn thuần chỉ là một sự hiểu lầm hành chính không may phát sinh."
      },
      casualStyle: {
        phrase: "Don't feel bad about it at all; it was just a tiny misunderstanding about the dates.",
        example: "Don't feel bad about it at all; it was just a tiny misunderstanding about the dates.",
        translation: "Đừng có tự dằn vặt bản thân nhé; nó chỉ là chút hiểu lầm cỏn con về ngày hẹn thôi mà."
      },
      superCasual: {
        phrase: "No stress, bro! Classic miscommunication misunderstanding, we're all good!",
        example: "No stress, bro! Classic miscommunication misunderstanding, we're all good!",
        translation: "Không có gì phải căng ông ơi! Lỗi hiểu nhầm kinh điển lúc nhắn tin thôi mà, anh em mình vẫn ổn áp!"
      }
    },
    {
      phrase: "Please forgive my thoughtlessness.",
      meaning: "Xin sự tha thứ bao dung cho lỗi lầm vô ý.",
      vietnamese: "Xin hãy tha thứ cho sự vô ý thiếu sót của tôi.",
      business: {
        phrase: "I trust you will graciously forgive this procedural lapse on our department's part.",
        example: "I trust you will graciously forgive this procedural lapse on our department's part.",
        translation: "Tôi tin tưởng quý vị sẽ lượng thứ bỏ qua cho sơ suất về mặt quy trình này từ phía phòng ban chúng tôi."
      },
      casualStyle: {
        phrase: "I completely forgot it was your birthday yesterday, please forgive me!",
        example: "I completely forgot it was your birthday yesterday, please forgive me!",
        translation: "Hôm qua mình đã hoàn toàn đãng trí quên mất sinh nhật của bạn, xin hãy tha thứ cho mình nhé!"
      },
      superCasual: {
        phrase: "Forgive and forget, right bro? Let me buy you lunch to make up for it!",
        example: "Forgive and forget, right bro? Let me buy you lunch to make up for it!",
        translation: "Đánh kẻ chạy đi chứ ai đánh người chạy lại đúng không ông bạn? Để tui bao bữa trưa chuộc lỗi nha!"
      }
    },
    {
      phrase: "That was exceptionally polite of you.",
      meaning: "Khen ngợi cách cư xử rất đỗi lịch sự, nhã nhặn.",
      vietnamese: "Hành động đó của bạn thực sự rất mực lịch thiệp.",
      business: {
        phrase: "Your team's professional etiquette and polite decorum were deeply appreciated by our clients.",
        example: "Your team's professional etiquette and polite decorum were deeply appreciated by our clients.",
        translation: "Tác phong chuyên nghiệp và sự nhã nhặn lịch sự của đội ngũ anh/chị được khách hàng đánh giá rất cao."
      },
      casualStyle: {
        phrase: "Bringing back a thank-you milk tea was so polite and thoughtful of you!",
        example: "Bringing back a thank-you milk tea was so polite and thoughtful of you!",
        translation: "Mua ly trà sữa mang về cảm ơn như vậy thực sự rất lịch sự và chu đáo đấy bạn ơi!"
      },
      superCasual: {
        phrase: "Holding the door for everyone? Classy move, bro, polite as ever!",
        example: "Holding the door for everyone? Classy move, bro, polite as ever!",
        translation: "Đứng giữ cửa thang máy cho cả đoàn người luôn á? Xử sự phong độ đấy ông bạn, lúc nào cũng ga-lăng!"
      }
    }
  ],

  // -------------------------------------------------------------
  // LESSON 17: Bày tỏ ý kiến & Tranh luận
  // -------------------------------------------------------------
  'lesson-17': [
    {
      phrase: "From my perspective...",
      meaning: "Mở đầu bày tỏ quan điểm, góc nhìn cá nhân.",
      vietnamese: "Dưới góc nhìn của cá nhân tôi...",
      business: {
        phrase: "From our corporate perspective, market diversification represents the optimal risk mitigation strategy.",
        example: "From our corporate perspective, market diversification represents the optimal risk mitigation strategy.",
        translation: "Dưới góc nhìn doanh nghiệp của chúng tôi, việc đa dạng hóa thị trường đại diện cho chiến lược giảm thiểu rủi ro tối ưu."
      },
      casualStyle: {
        phrase: "From my perspective, studying abroad teaches you independence much faster than staying home.",
        example: "From my perspective, studying abroad teaches you independence much faster than staying home.",
        translation: "Dưới góc nhìn của mình, đi du học giúp bạn học được tính tự lập nhanh hơn nhiều so với ở nhà."
      },
      superCasual: {
        phrase: "From my perspective, that movie was pure hype with zero substance, ngl!",
        example: "From my perspective, that movie was pure hype with zero substance, ngl!",
        translation: "Dưới góc nhìn của tui thì bộ phim đó chỉ được cái làm màu quảng cáo chứ nội dung rỗng tuếch, thề luôn!"
      }
    },
    {
      phrase: "I see your point, but I respectfully disagree.",
      meaning: "Ghi nhận ý kiến đối phương rồi nhẹ nhàng bày tỏ sự bất đồng.",
      vietnamese: "Tôi hiểu góc ý kiến của bạn, tuy nhiên tôi xin phép không đồng tình.",
      business: {
        phrase: "While I acknowledge your operational thesis, I must respectfully disagree regarding the cost trajectory.",
        example: "While I acknowledge your operational thesis, I must respectfully disagree regarding the cost trajectory.",
        translation: "Mặc dù tôi ghi nhận luận điểm vận hành của ông, nhưng tôi xin phép không đồng tình về quỹ đạo chi phí."
      },
      casualStyle: {
        phrase: "I see your point about saving money, but I disagree that buying cheap gear is always better.",
        example: "I see your point about saving money, but I disagree that buying cheap gear is always better.",
        translation: "Mình hiểu ý bạn về việc tiết kiệm tiền, nhưng mình không đồng tình rằng cứ mua đồ rẻ là tốt hơn đâu."
      },
      superCasual: {
        phrase: "I get what you're saying, bro, but hard disagree! Your logic has a giant hole in it!",
        example: "I get what you're saying, bro, but hard disagree! Your logic has a giant hole in it!",
        translation: "Tui hiểu ý ông đang nói gì rồi, nhưng tui phản đối kịch liệt nha! Lập luận của ông có lỗ hổng to đùng kia kìa!"
      }
    },
    {
      phrase: "That is a very convincing argument.",
      meaning: "Thừa nhận lập luận của đối phương rất có sức thuyết phục.",
      vietnamese: "Đó là một luận điểm vô cùng thuyết phục.",
      business: {
        phrase: "Your empirical financial models present a remarkably convincing argument for acquisition.",
        example: "Your empirical financial models present a remarkably convincing argument for acquisition.",
        translation: "Các mô hình tài chính thực nghiệm của quý vị đưa ra một lập luận vô cùng thuyết phục cho việc mua lại sáp nhập."
      },
      casualStyle: {
        phrase: "You made some very convincing arguments during our debate; you really changed my mind.",
        example: "You made some very convincing arguments during our debate; you really changed my mind.",
        translation: "Bạn đã đưa ra vài luận điểm rất thuyết phục trong buổi tranh luận; bạn thực sự đã làm mình đổi ý."
      },
      superCasual: {
        phrase: "Okay, that stat was actually super convincing, bro! You kinda won me over, ngl.",
        example: "Okay, that stat was actually super convincing, bro! You kinda won me over, ngl.",
        translation: "Được rồi, cái số liệu đó nghe thuyết phục dã man ông ơi! Ông làm tui xuôi xuôi rồi đấy, thề."
      }
    },
    {
      phrase: "Let's reach a healthy compromise.",
      meaning: "Đề xuất tìm giải pháp dung hòa đôi bên cùng vui vẻ.",
      vietnamese: "Chúng ta hãy cùng đạt được một điểm thỏa hiệp dung hòa.",
      business: {
        phrase: "Let us deliberate to reach a mutually advantageous compromise regarding contract terms.",
        example: "Let us deliberate to reach a mutually advantageous compromise regarding contract terms.",
        translation: "Chúng ta hãy cùng thảo luận để đạt được một thỏa hiệp dung hòa đôi bên cùng có lợi về các điều khoản hợp đồng."
      },
      casualStyle: {
        phrase: "We don't need to argue; let's reach a compromise and split the tasks equally.",
        example: "We don't need to argue; let's reach a compromise and split the tasks equally.",
        translation: "Tụi mình không cần phải tranh cãi làm gì; cùng tìm điểm thỏa hiệp dung hòa và chia đều công việc ra nhé."
      },
      superCasual: {
        phrase: "Let's compromise, bro: we watch your movie tonight, my pick tomorrow. Deal?",
        example: "Let's compromise, bro: we watch your movie tonight, my pick tomorrow. Deal?",
        translation: "Thỏa hiệp đi ông giáo: Tối nay xem phim của ông, mai tới lượt tui chọn. Chốt kèo không?"
      }
    },
    {
      phrase: "I couldn't agree more with you.",
      meaning: "Đồng thuận tuyệt đối với ý kiến vừa nêu.",
      vietnamese: "Tôi hoàn toàn đồng ý với bạn, không chệch đi đâu được.",
      business: {
        phrase: "I wholeheartedly align with that strategic direction; I could not agree more.",
        example: "I wholeheartedly align with that strategic direction; I could not agree more, Director Vance.",
        translation: "Tôi hoàn toàn đồng thuận với định hướng chiến lược đó; không thể nào đồng tình hơn được nữa thưa Giám đốc Vance."
      },
      casualStyle: {
        phrase: "You hit the nail on the head; I couldn't agree more with your presentation feedback.",
        example: "You hit the nail on the head; I couldn't agree more with your presentation feedback.",
        translation: "Bạn nói trúng phóc tim đen rồi; mình hoàn toàn đồng tình với những góp ý thuyết trình của bạn."
      },
      superCasual: {
        phrase: "Big facts, bro! Spitting pure truth, I couldn't agree more!",
        example: "Big facts, bro! Spitting pure truth, I couldn't agree more, no cap!",
        translation: "Chuẩn cơm mẹ nấu rồi ông ơi! Nói trúng phóc sự thật luôn, tui đồng tình 1000% không lệch đi đâu được!"
      }
    }
  ],

  // -------------------------------------------------------------
  // LESSON 18: Kỷ niệm tuổi thơ & Trải nghiệm
  // -------------------------------------------------------------
  'lesson-18': [
    {
      phrase: "Looking at these photos makes me so nostalgic.",
      meaning: "Cảm thấy bồi hồi hoài niệm khi xem lại hình ảnh cũ.",
      vietnamese: "Nhìn những bức ảnh này làm tôi thấy thật bồi hồi hoài niệm.",
      business: {
        phrase: "Reflecting on our enterprise's modest inception evokes a deeply nostalgic appreciation.",
        example: "Reflecting on our enterprise's modest inception evokes a deeply nostalgic appreciation for the journey.",
        translation: "Hồi tưởng về những ngày đầu khởi nghiệp khiêm tốn của doanh nghiệp khơi gợi sự trân quý đầy hoài niệm cho cả hành trình."
      },
      casualStyle: {
        phrase: "Looking at our middle-school yearbook photos makes me feel so nostalgic about childhood.",
        example: "Looking at our middle-school yearbook photos makes me feel so nostalgic about childhood.",
        translation: "Xem lại kỷ yếu hồi cấp 2 khiến mình cảm thấy thật bồi hồi hoài niệm về thời thơ ấu."
      },
      superCasual: {
        phrase: "Bro, this throwback pic is making me mad nostalgic, look at our goofy haircuts!",
        example: "Bro, this throwback pic is making me mad nostalgic, look at our goofy haircuts!",
        translation: "Ông ơi, tấm ảnh ngày xửa ngày xưa này làm tui hoài niệm dã man, nhìn quả đầu ngố tàu của hai đứa kìa!"
      }
    },
    {
      phrase: "This smell reminds me of my village home.",
      meaning: "Mùi hương hoặc hình ảnh khơi gợi ký ức về quê nhà.",
      vietnamese: "Mùi hương này làm tôi gợi nhớ về ngôi nhà ở làng quê của mình.",
      business: {
        phrase: "This architectural motif strongly reminds our stakeholders of regional ancestral traditions.",
        example: "This architectural motif strongly reminds our stakeholders of regional ancestral traditions.",
        translation: "Mô-típ kiến trúc này gợi nhớ mạnh mẽ cho các đối tác về những truyền thống cội nguồn của vùng miền."
      },
      casualStyle: {
        phrase: "The sweet scent of roasted sweet potatoes always reminds me of winter afternoons with Grandma.",
        example: "The sweet scent of roasted sweet potatoes always reminds me of winter afternoons with Grandma.",
        translation: "Mùi khoai lang nướng thơm lừng lúc nào cũng làm mình gợi nhớ về những buổi chiều mùa đông bên bà."
      },
      superCasual: {
        phrase: "This snack totally throws me back to the elementary school canteen days, fr!",
        example: "This snack totally throws me back to the elementary school canteen days, fr!",
        translation: "Cái món ăn vặt này kéo tui về thẳng thời căn tin trường tiểu học luôn, thật sự!"
      }
    },
    {
      phrase: "That camping night was an unforgettable experience.",
      meaning: "Nói về trải nghiệm khắc cốt ghi tâm không thể nào quên.",
      vietnamese: "Đêm cắm trại đó là một trải nghiệm không thể nào quên.",
      business: {
        phrase: "Navigating our corporate restructuring was an unforgettable executive trial of endurance.",
        example: "Navigating our corporate restructuring was an unforgettable executive trial of endurance.",
        translation: "Việc chèo lái đợt tái cấu trúc doanh nghiệp là một phép thử khắc cốt ghi tâm về sức bền bỉ của người lãnh đạo."
      },
      casualStyle: {
        phrase: "Getting caught in that sudden summer rainstorm together was an unforgettable experience.",
        example: "Getting caught in that sudden summer rainstorm together was an unforgettable experience.",
        translation: "Cùng nhau mắc mưa trong cơn dông mùa hè bất chợt đó đúng là một trải nghiệm không bao giờ quên được."
      },
      superCasual: {
        phrase: "That road trip was an unforgettable vibe, bro! Craziest memories of my whole life!",
        example: "That road trip was an unforgettable vibe, bro! Craziest memories of my whole life!",
        translation: "Chuyến phượt đó đúng là đỉnh chóp không thể nào quên ông ơi! Kỷ niệm điên rồ nhất cuộc đời tui luôn!"
      }
    },
    {
      phrase: "Back in my childhood days...",
      meaning: "Mở đầu chuỗi kể về những kỷ niệm thời thơ ấu.",
      vietnamese: "Quay lại những ngày thơ ấu của tôi...",
      business: {
        phrase: "Formative lessons inculcated during my rural childhood laid the groundwork for my work ethic.",
        example: "Formative lessons inculcated during my rural childhood laid the groundwork for my work ethic.",
        translation: "Những bài học định hình được rèn giũa trong thời thơ ấu ở vùng thôn quê đã đặt nền móng cho đạo đức nghề nghiệp của tôi."
      },
      casualStyle: {
        phrase: "Back in my childhood days, we used to run outside after school and play marble games until sunset.",
        example: "Back in my childhood days, we used to run outside after school and play marble games until sunset.",
        translation: "Hồi còn thơ bé, tụi mình hay ùa ra ngoài sau giờ học và chơi bắn bi tới tận lúc hoàng hôn lặn."
      },
      superCasual: {
        phrase: "Way back in the day, we pulled some unhinged stunts and never got caught, lmao!",
        example: "Way back in the day, we pulled some unhinged stunts and never got caught, lmao!",
        translation: "Ngày xửa ngày xưa, anh em mình quậy banh nóc mấy trò nghịch dại mà chả bao giờ bị tóm, haha!"
      }
    },
    {
      phrase: "I will cherish this memory forever.",
      meaning: "Hứa sẽ nâng niu, trân quý kỷ niệm này suốt đời.",
      vietnamese: "Tôi sẽ mãi trân quý kỷ niệm này suốt cuộc đời.",
      business: {
        phrase: "I will forever cherish the professional camaraderie shared across this inaugural project.",
        example: "I will forever cherish the professional camaraderie shared across this inaugural project.",
        translation: "Tôi sẽ mãi trân quý tình đồng nghiệp chuyên nghiệp được sẻ chia xuyên suốt dự án khởi đầu này."
      },
      casualStyle: {
        phrase: "Our graduation day was filled with tears and laughs; I will cherish this memory forever.",
        example: "Our graduation day was filled with tears and laughs; I will cherish this memory forever.",
        translation: "Ngày lễ tốt nghiệp của tụi mình ngập tràn nước mắt và nụ cười; mình sẽ mãi trân quý kỷ niệm này."
      },
      superCasual: {
        phrase: "Locked in the vault forever, bro! Best core memory with the squad, no cap!",
        example: "Locked in the vault forever, bro! Best core memory with the squad, no cap!",
        translation: "Khắc cốt ghi tâm trong tim mãi mãi luôn ông ơi! Kỷ niệm vàng ròng với hội anh em, thề luôn!"
      }
    }
  ],

  // -------------------------------------------------------------
  // LESSON 19: Âm nhạc, Phim ảnh & Thần tượng
  // -------------------------------------------------------------
  'lesson-19': [
    {
      phrase: "He has incredible stage charisma.",
      meaning: "Khen ngợi thần thái lôi cuốn tự nhiên của nghệ sĩ trên sân khấu.",
      vietnamese: "Anh ấy sở hữu thần thái sân khấu vô cùng lôi cuốn.",
      business: {
        phrase: "The lead artist commands extraordinary stage charisma that captivates international stadium audiences.",
        example: "The lead artist commands extraordinary stage charisma that captivates international stadium audiences.",
        translation: "Nghệ sĩ chính làm chủ một thần thái sân khấu phi thường cuốn hút trọn vẹn khán giả các sân vận động quốc tế."
      },
      casualStyle: {
        phrase: "Whenever he steps onto the stage, his charisma and presence completely command the room.",
        example: "Whenever he steps onto the stage, his charisma and presence completely command the room.",
        translation: "Mỗi khi anh ấy bước lên sân khấu, thần thái và sự cuốn hút của anh ấy làm chủ hoàn toàn khán phòng."
      },
      superCasual: {
        phrase: "Bro's stage charisma is off the charts! Totally commanding the whole crowd, no cap!",
        example: "Bro's stage charisma is off the charts! Totally commanding the whole crowd, no cap!",
        translation: "Thần thái sân khấu của idol đúng là vượt mọi thang điểm ông ơi! Làm chủ cả biển người luôn, thề!"
      }
    },
    {
      phrase: "That movie is a certified blockbuster.",
      meaning: "Khen ngợi bộ phim là bom tấn phòng vé thực thụ.",
      vietnamese: "Bộ phim đó đúng là một siêu phẩm bom tấn thực thụ.",
      business: {
        phrase: "The production studio successfully engineered a global cinematic blockbuster exceeding box-office targets.",
        example: "The production studio successfully engineered a global cinematic blockbuster exceeding box-office targets.",
        translation: "Hãng sản xuất đã nhào nặn thành công một siêu phẩm bom tấn điện ảnh toàn cầu vượt xa các chỉ tiêu doanh thu phòng vé."
      },
      casualStyle: {
        phrase: "The new sci-fi film is a certified blockbuster; the theaters are packed every single screening.",
        example: "The new sci-fi film is a certified blockbuster; the theaters are packed every single screening.",
        translation: "Bộ phim viễn tưởng mới đúng là bom tấn xịn sò; suất chiếu nào các rạp cũng chật kín không còn chỗ."
      },
      superCasual: {
        phrase: "That movie was straight fire! A certified blockbuster, best watch of the year, fr!",
        example: "That movie was straight fire! A certified blockbuster, best watch of the year, fr!",
        translation: "Bộ phim đó cháy khét lẹt luôn ông ơi! Đúng chuẩn bom tấn, phim đáng xem nhất năm nay luôn, thật sự!"
      }
    },
    {
      phrase: "The lead actress is exceptionally talented.",
      meaning: "Ca ngợi tài năng xuất chúng bẩm sinh của diễn viên chính.",
      vietnamese: "Nữ diễn viên chính tài năng xuất chúng một cách phi thường.",
      business: {
        phrase: "The lead performer is exceptionally talented, embodying complex characters with consummate nuance.",
        example: "The lead performer is exceptionally talented, embodying complex characters with consummate nuance.",
        translation: "Người nghệ sĩ chính tài năng xuất chúng phi thường, hóa thân vào các nhân vật phức tạp với sự tinh tế tột bậc."
      },
      casualStyle: {
        phrase: "She is such a talented singer; she composed all the tracks on her new album herself.",
        example: "She is such a talented singer; she composed all the tracks on her new album herself.",
        translation: "Cô ấy là một ca sĩ tài hoa ghê; cô ấy tự tay sáng tác tất cả các bài hát trong album mới của mình."
      },
      superCasual: {
        phrase: "She's ridiculously talented, bro! Singing, dancing, acting, she does it all effortlessly!",
        example: "She's ridiculously talented, bro! Singing, dancing, acting, she does it all effortlessly!",
        translation: "Cô ấy tài năng đến mức phi lý luôn ông ơi! Hát hò, nhảy nhót, diễn xuất, cái gì cũng cân ngọt ngào!"
      }
    },
    {
      phrase: "Her new studio album is a masterpiece.",
      meaning: "Tán thưởng đĩa nhạc mới là một kiệt tác nghệ thuật.",
      vietnamese: "Album phòng thu mới của cô ấy là một kiệt tác.",
      business: {
        phrase: "The newly launched studio album represents an artistic and commercial masterpiece.",
        example: "The newly launched studio album represents an artistic and commercial masterpiece.",
        translation: "Album phòng thu vừa ra mắt đại diện cho một kiệt tác trên cả phương diện nghệ thuật lẫn thương mại."
      },
      casualStyle: {
        phrase: "Every song on her new album tells a deep story; it is an absolute masterpiece.",
        example: "Every song on her new album tells a deep story; it is an absolute masterpiece.",
        translation: "Mỗi bài hát trong album mới của cô ấy đều kể một câu chuyện sâu sắc; nó thực sự là một kiệt tác."
      },
      superCasual: {
        phrase: "Zero skips on this album, bro! An absolute masterpiece from start to finish, bet!",
        example: "Zero skips on this album, bro! An absolute masterpiece from start to finish, bet!",
        translation: "Cả album không phải tua qua bài nào luôn ông giáo! Kiệt tác đỉnh chóp từ đầu tới đuôi, cá bao nhiêu cũng nhận!"
      }
    },
    {
      phrase: "She is a globally recognized celebrity.",
      meaning: "Nói về một ngôi sao giải trí nổi danh toàn thế giới.",
      vietnamese: "Cô ấy là một người nổi tiếng được cả thế giới biết đến.",
      business: {
        phrase: "Collaborating with a globally recognized celebrity elevates our product endorsement campaign.",
        example: "Collaborating with a globally recognized celebrity elevates our product endorsement campaign.",
        translation: "Việc hợp tác với một người nổi tiếng tầm cỡ toàn cầu sẽ nâng tầm chiến dịch đại sứ thương hiệu sản phẩm của chúng ta."
      },
      casualStyle: {
        phrase: "Even though she is a huge celebrity, she remains humble and talks warmly to fans.",
        example: "Even though she is a huge celebrity, she remains humble and talks warmly to fans.",
        translation: "Mặc dù cô ấy là một ngôi sao nổi tiếng bự, cô ấy vẫn rất khiêm tốn và trò chuyện ấm áp với người hâm mộ."
      },
      superCasual: {
        phrase: "Living like an A-list celebrity sounds wild, paparazzi stalking you everywhere!",
        example: "Living like an A-list celebrity sounds wild, paparazzi stalking you everywhere, man!",
        translation: "Sống như người nổi tiếng hạng A nghe điên rồ ghê, cánh săn ảnh bám đuôi khắp mọi ngóc ngách luôn ông ơi!"
      }
    }
  ],

  // -------------------------------------------------------------
  // LESSON 20: Kỹ năng sống & Làm việc nhóm
  // -------------------------------------------------------------
  'lesson-20': [
    {
      phrase: "Teamwork makes the dream work.",
      meaning: "Châm ngôn về sức mạnh đồng lòng, tinh thần tập thể gánh vác.",
      vietnamese: "Đồng lòng nhóm sẽ làm nên chiến tích mơ ước.",
      business: {
        phrase: "Synchronized cross-functional teamwork is the indispensable catalyst for enterprise achievement.",
        example: "Synchronized cross-functional teamwork is the indispensable catalyst for enterprise achievement.",
        translation: "Sự phối hợp nhóm đồng bộ liên phòng ban là chất xúc tác không thể thiếu cho các thành tựu của doanh nghiệp."
      },
      casualStyle: {
        phrase: "Let's back each other up and stay coordinated; teamwork makes the dream work!",
        example: "Let's back each other up and stay coordinated; teamwork makes the dream work!",
        translation: "Tụi mình hãy cùng bọc lót cho nhau và giữ liên lạc chặt chẽ nhé; đồng lòng sẽ làm nên kết quả như mơ!"
      },
      superCasual: {
        phrase: "Teamwork makes the dream work, bro! Squad got each other's backs till we win!",
        example: "Teamwork makes the dream work, bro! Squad got each other's backs till we win!",
        translation: "Anh em đồng lòng là ẵm cúp thôi ông ơi! Cả hội bảo bọc nhau tới khi thắng trận mới thôi!"
      }
    },
    {
      phrase: "We need to handle internal conflicts calmly.",
      meaning: "Nhắc nhở xử lý các mâu thuẫn nội bộ trong bình tĩnh.",
      vietnamese: "Chúng ta cần xử lý các mâu thuẫn nội bộ một cách bình tĩnh.",
      business: {
        phrase: "Leaders must handle interpersonal conflict through objective mediation and professional decorum.",
        example: "Leaders must handle interpersonal conflict through objective mediation and professional decorum.",
        translation: "Các nhà lãnh đạo phải xử lý mâu thuẫn giữa các cá nhân thông qua sự hòa giải khách quan và tác phong chuyên nghiệp."
      },
      casualStyle: {
        phrase: "If we disagree on the topic, let's talk it through calmly so we can handle the conflict maturely.",
        example: "If we disagree on the topic, let's talk it through calmly so we can handle the conflict maturely.",
        translation: "Nếu tụi mình bất đồng về chủ đề, hãy cùng ngồi lại trao đổi bình tĩnh để giải quyết mâu thuẫn một cách chín chắn nhé."
      },
      superCasual: {
        phrase: "No use yelling over small glitches, bro! Let's handle this conflict like adults and fix the code!",
        example: "No use yelling over small glitches, bro! Let's handle this conflict like adults and fix the code!",
        translation: "Hò hét vì mấy cái lỗi vặt chả giải quyết được gì đâu ông ơi! Giải quyết mâu thuẫn văn minh rồi sửa code đi!"
      }
    },
    {
      phrase: "She is a very resourceful teammate.",
      meaning: "Khen ngợi đồng đội tháo vát, nhạy bén xoay xở giải quyết việc.",
      vietnamese: "Cô ấy là một người đồng đội vô cùng tháo vát nhạy bén.",
      business: {
        phrase: "Employing resourceful analysts enables our division to bypass unexpected supply chain disruptions.",
        example: "Employing resourceful analysts enables our division to bypass unexpected supply chain disruptions.",
        translation: "Việc sử dụng các chuyên viên phân tích tháo vát nhạy bén giúp phân ban của chúng ta vượt qua các gián đoạn chuỗi cung ứng ngoài dự kiến."
      },
      casualStyle: {
        phrase: "Whenever our group gets stuck on research, Trang is always resourceful and finds great sources.",
        example: "Whenever our group gets stuck on research, Trang is always resourceful and finds great sources.",
        translation: "Bất cứ khi nào nhóm mình bị bí trong việc tìm tài liệu, Trang lúc nào cũng rất tháo vát tìm ra những nguồn tuyệt vời."
      },
      superCasual: {
        phrase: "Syd is the most resourceful hacker on the planet, patched the bug in two minutes flat, no cap!",
        example: "Syd is the most resourceful hacker on the planet, patched the bug in two minutes flat, no cap!",
        translation: "Syd là lập trình viên tháo vát nhạy bén nhất quả đất luôn, vá xong lỗi trong đúng 2 phút, thề luôn!"
      }
    },
    {
      phrase: "How should we split the presentation roles?",
      meaning: "Bàn bạc phân chia vai trò thuyết trình trong nhóm.",
      vietnamese: "Chúng ta nên phân chia các vai trò thuyết trình như thế nào?",
      business: {
        phrase: "How shall we distribute speaking roles and Q&A facilitation across the executive presentation?",
        example: "How shall we distribute speaking roles and Q&A facilitation across the executive presentation?",
        translation: "Chúng ta nên phân bổ các vai trò phát biểu và điều phối hỏi đáp như thế nào trong bài thuyết trình của ban điều hành?"
      },
      casualStyle: {
        phrase: "How should we split our roles? I can handle the slides while you deliver the opening speech.",
        example: "How should we split our roles? I can handle the slides while you deliver the opening speech.",
        translation: "Tụi mình nên chia việc thế nào đây? Mình có thể lo phần slide còn bạn phụ trách phát biểu mở đầu nhé."
      },
      superCasual: {
        phrase: "Who's talking on stage and who's controlling the clicker? Let's split roles real quick, bro!",
        example: "Who's talking on stage and who's controlling the clicker? Let's split roles real quick, bro!",
        translation: "Ai đứng bục nói và ai cầm chuột bấm slide đây? Chia vai nhanh gọn lẹ đi ông bạn ơi!"
      }
    },
    {
      phrase: "Deliver your presentation with confidence.",
      meaning: "Khích lệ thuyết trình một cách tự tin trước đám đông.",
      vietnamese: "Hãy trình bày bài thuyết trình của bạn với sự tự tin.",
      business: {
        phrase: "Deliver your executive presentation with assertive clarity and grounded authority.",
        example: "Deliver your executive presentation with assertive clarity and grounded authority.",
        translation: "Hãy trình bày bài báo cáo của ban điều hành với sự rõ ràng quyết đoán và phong thái đĩnh đạc."
      },
      casualStyle: {
        phrase: "Take a deep breath and deliver your slides with confidence; you practiced so well!",
        example: "Take a deep breath and deliver your slides with confidence; you practiced so well!",
        translation: "Hít một hơi thật sâu và tự tin thuyết trình các slide của bạn nhé; bạn đã dợt bài rất kỹ rồi mà!"
      },
      superCasual: {
        phrase: "Go out there and own that stage with pure confidence, bro! Show 'em how it's done!",
        example: "Go out there and own that stage with pure confidence, bro! Show 'em how it's done!",
        translation: "Bước ra đó và làm chủ sân khấu với sự tự tin 100% đi ông tướng! Cho cả hội thấy trình độ của anh em mình nào!"
      }
    }
  ]
};
