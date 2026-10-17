// Distinct 3-tier Dialogues (Business/Formal, Casual, Super Casual) for Beauty Topics beauty-11 to beauty-21 & spec-03
// Guarantees authentic professional salon standards, realistic client chats, and crisp short communication.

import { Dialogue } from './comm-students-dialogues';

export const BEAUTY_DIALOGUES_PART2: Record<string, Dialogue[]> = {
  'beauty-11': [
    {
      type: 'pair',
      school: 'business',
      title: 'De-escalating a Gel Chipping Dispute with Store Policy & Master Touch-up',
      participants: [
        { name: 'Tram', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TramManager', role: 'Salon Manager' },
        { name: 'Helena', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HelenaClient', role: 'Upset Client' }
      ],
      lines: [
        { participant: 'Helena', text: "I had a gel manicure done here on Thursday, and two nails are already severely chipped! I spent seventy dollars and this quality is unacceptable. I want a complete refund.", translation: "Tôi làm móng gel ở đây hôm thứ Năm, mà giờ hai ngón đã mẻ nham nhở rồi! Tôi bỏ ra 70 đô mà chất lượng như thế này là không thể chấp nhận được. Tôi muốn được hoàn lại toàn bộ tiền." },
        { participant: 'Tram', text: "Good afternoon, Helena. I sincerely apologize for the inconvenience and understand your disappointment. Our gel services should certainly withstand daily wear much longer than two days.", translation: "Dạ chào chị Helena. Em xin thành thật xin lỗi vì sự bất tiện này và rất thấu hiểu sự thất vọng của chị ạ. Bộ móng gel bên em thông thường phải bền đẹp hơn hai ngày rất nhiều ạ." },
        { participant: 'Helena', text: "I don't have time for excuses. Are you going to refund my money or not?", translation: "Tôi không có thời gian nghe giải thích. Các cô có hoàn tiền cho tôi hay không đây?" },
        { participant: 'Tram', text: "While our written salon policy does not offer cash refunds once chemical services are performed, we stand behind our workmanship 100%. I can seat you immediately with our senior master, Michelle, for a complimentary full-set redo, or provide a sixty-dollar store voucher for your next service. We want you completely satisfied.", translation: "Dạ theo quy định bằng văn bản của salon, bên em không hoàn tiền mặt sau khi đã sử dụng hóa chất dịch vụ, nhưng bên em cam kết 100% trách nhiệm về tay nghề. Ngay bây giờ em có thể mời chị vào ghế để đích thân Master Michelle làm lại mới hoàn toàn miễn phí cho chị, hoặc gửi tặng chị phiếu voucher 60 đô trừ thẳng vào lần làm sau ạ. Tiệm em rất mong chị ra về với sự hài lòng trọn vẹn nhất." },
        { participant: 'Helena', text: "Michelle does excellent work. If she can redo them right now at no cost, I will accept that resolution.", translation: "Cô Michelle thì tay nghề rất giỏi rồi. Nếu cô ấy có thể làm lại ngay bây giờ không tính phí thì tôi đồng ý với cách giải quyết này." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Friendly Fix for an Accidental Door Snag Chip',
      participants: [
        { name: 'Phuong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PhuongTech', role: 'Nail Technician' },
        { name: 'Amanda', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AmandaFriendly', role: 'Client' }
      ],
      lines: [
        { participant: 'Amanda', text: "Hey Phuong! I accidentally slammed my index finger in the car door yesterday, and the gel peeled clean off the corner. Can you save me?", translation: "Phuong ơi! Hôm qua mình lỡ tay kẹp ngón trỏ vào cửa xe ô tô, thế là góc sơn gel bị tróc mất tiêu rồi. Cứu mình với được không?" },
        { participant: 'Phuong', text: "Oh ouch, Amanda! Did your natural nail underneath crack or bleed at all?", translation: "Ôi trời ơi Amanda! Móng thật ở dưới có bị dập hay rướm máu gì không bạn ơi?" },
        { participant: 'Amanda', text: "Thankfully no, just my pride! The nail plate itself feels totally fine.", translation: "May quá là không, chỉ đau điếng người thôi! Bề mặt móng vẫn nguyên vẹn không sao hết nè." },
        { participant: 'Phuong', text: "Phew, that's a relief! Hop into my chair right now. I'll buff the edges smooth and reapply the base, color, and top coat. It will only take ten minutes and it's on the house!", translation: "Phù, nghe vậy nhẹ cả người! Bạn qua ghế mình ngồi liền nhé. Mình sẽ mài êm mép rồi sơn lót, sơn màu và phủ bóng lại cho bạn. Chỉ mất 10 phút thôi và bên mình làm miễn phí tặng bạn nha!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Corner Touch-up DM',
      participants: [
        { name: 'Tina', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TinaTechFix', role: 'Tech' },
        { name: 'Claire', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ClaireDM', role: 'Client' }
      ],
      lines: [
        { participant: 'Claire', text: "Tina! Chipped my thumbnail opening a can. Any 5-min slot today?", translation: "Tina ơi! Mở nắp lon làm mẻ mất móng ngón cái rồi. Hôm nay có rảnh 5 phút không bạn?" },
        { participant: 'Tina', text: "Swing by at 4:15! I'll fix that thumb in between clients.", translation: "4 giờ 15 ghé qua tớ nha! Tranh thủ giữa hai ca khách tớ dặm lại ngón đó cho." },
        { participant: 'Claire', text: "You are an angel, see you at 4:15!", translation: "Tuyệt vời quá, 4 giờ 15 tớ có mặt nhé!" },
        { participant: 'Tina', text: "See ya!", translation: "Gặp lại sau nha!" }
      ]
    }
  ],

  'beauty-12': [
    {
      type: 'pair',
      school: 'business',
      title: 'Professional Floor Etiquette & Seamless Client Handover',
      participants: [
        { name: 'Marcus', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MarcusManager', role: 'Floor Manager' },
        { name: 'Jennifer', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JenniferStaff', role: 'Junior Technician' }
      ],
      lines: [
        { participant: 'Marcus', text: "Jennifer, a gentle reminder regarding salon etiquette: please ensure all conversation on the floor remains in English so our guests never feel excluded or uneasy.", translation: "Jennifer, anh nhắc nhở nhẹ về quy chuẩn giao tiếp trên sàn làm việc: em chú ý duy trì toàn bộ cuộc trò chuyện bằng tiếng Anh để khách hàng không bao giờ cảm thấy bị cô lập hay ngượng ngùng nhé." },
        { participant: 'Jennifer', text: "Understood, Marcus. I apologize, I was asking Linh in Vietnamese where the sterile cuticle nippers were kept.", translation: "Em hiểu rồi ạ, anh Marcus. Em xin lỗi, nãy em vội hỏi chị Linh bằng tiếng Việt xem kềm nhặt da tiệt trùng để ở đâu." },
        { participant: 'Marcus', text: "No problem at all. Also, when you transition Ms. Adams to Jane for hand-painted art, introduce Jane warmly and summarize Ms. Adams's design preferences clearly in her presence.", translation: "Không sao em. Ngoài ra khi em bàn giao chị Adams cho chị Jane vẽ họa tiết, hãy giới thiệu chị Jane một cách trang trọng và tóm tắt rõ sở thích vẽ móng của chị Adams ngay trước mặt khách nhé." },
        { participant: 'Jennifer', text: "Certainly. I will introduce Jane right now and ensure Ms. Adams feels completely valued.", translation: "Dạ vâng ạ. Em sẽ đưa chị Adams sang gặp chị Jane ngay và đảm bảo chị ấy cảm thấy được chăm sóc chu đáo nhất." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Introducing a Colleague for Intricate 3D Floral Art',
      participants: [
        { name: 'Thuy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ThuyHandover', role: 'Technician' },
        { name: 'Kendra', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KendraClient', role: 'Client' },
        { name: 'Michelle', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MichelleMaster', role: 'Senior Artist' }
      ],
      lines: [
        { participant: 'Thuy', text: "Kendra, now that we've finished shaping and laying down your clean nude base, I'd like to introduce my colleague, Michelle. She is our salon's resident master for hand-painted flowers!", translation: "Kendra ơi, tụi mình vừa tạo phom và sơn xong lớp nền nude trong suốt rất đẹp rồi. Bây giờ mình xin giới thiệu đồng nghiệp của mình là chị Michelle nhé. Chị ấy là bậc thầy vẽ hoa nghệ thuật nổi tiếng nhất tiệm mình đó!" },
        { participant: 'Kendra', text: "Hi Michelle! I saw your floral work on Instagram, it's absolutely breathtaking.", translation: "Chào chị Michelle! Em có xem các mẫu hoa chị vẽ trên Instagram rồi, đẹp mê hồn luôn ạ." },
        { participant: 'Michelle', text: "Thank you so much, Kendra! Thuy told me you're looking for dainty white cherry blossoms with gold foil. Let me show you two brush styles before we begin.", translation: "Cảm ơn em nhiều nha Kendra! Thuy có nói với chị là em muốn vẽ hoa anh đào trắng li ti điểm xuyết nhũ vàng lá đúng không nè? Để chị đưa em xem hai kiểu nét cọ trước khi vẽ nhé." },
        { participant: 'Kendra', text: "I can't wait to see how they turn out!", translation: "Em nóng lòng được ngắm thành quả quá chừng!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Pass-off between Techs',
      participants: [
        { name: 'Bao', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BaoQuickPass', role: 'Tech' },
        { name: 'Amy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AmyLash', role: 'Lash Tech' }
      ],
      lines: [
        { participant: 'Bao', text: "Amy, pedicures done for chair 2. Ready for her lash fill?", translation: "Amy ơi, ghế 2 xong móng chân rồi nè. Sẵn sàng qua nối mi chưa?" },
        { participant: 'Amy', text: "Lash room 1 is sanitized and warm! Walking her over now.", translation: "Phòng mi số 1 tiệt trùng và bật sưởi sẵn rồi! Dắt chị ấy qua ngay đây." },
        { participant: 'Bao', text: "Perfect timing, thanks!", translation: "Chuẩn giờ ghê, cảm ơn nhé!" },
        { participant: 'Amy', text: "Got her covered!", translation: "Cứ để chị lo!" }
      ]
    }
  ],

  'beauty-13': [
    {
      type: 'pair',
      school: 'business',
      title: 'Ventilation & Monomer Safety Compliance Briefing',
      participants: [
        { name: 'Robert', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=RobertSafety', role: 'Safety Compliance Officer' },
        { name: 'Kim', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KimTechOwner', role: 'Salon Supervisor' }
      ],
      lines: [
        { participant: 'Robert', text: "Good morning, Kim. As part of our semi-annual health review, I am inspecting your local source-capture exhaust systems at every nail station.", translation: "Chào cô Kim. Trong đợt kiểm tra sức khỏe an toàn lao động định kỳ, tôi sẽ kiểm tra hệ thống hút bụi và khí thải cục bộ tại từng bàn làm móng ạ." },
        { participant: 'Kim', text: "Good morning, Inspector Robert. We recently installed HEPA carbon filtration down-draft units on all twelve tables, and our central HVAC cycles fresh air every ten minutes.", translation: "Chào Thanh tra Robert. Bên em vừa lắp đặt đồng bộ máy hút âm bàn màng lọc than hoạt tính HEPA cho cả 12 bàn, và hệ thống thông gió tổng luôn luân chuyển khí tươi 10 phút một lần ạ." },
        { participant: 'Robert', text: "Excellent. Please also confirm your technicians store all ethyl methacrylate monomers in tightly sealed, labeled dispensers to minimize chemical vapors.", translation: "Rất tốt. Cô cũng vui lòng đảm bảo các kỹ thuật viên luôn chứa dung dịch đắp bột EMA trong bình chuyên dụng có nắp đậy kín và dán nhãn rõ ràng để hạn chế tối đa hơi hóa chất nhé." },
        { participant: 'Kim', text: "All stations strictly comply with OSHA labeling guidelines. Here is our Safety Data Sheet binder for your inspection.", translation: "Toàn bộ bàn làm việc đều tuân thủ nghiêm ngặt quy định nhãn mác của OSHA. Em xin gửi tập hồ sơ Bảng chỉ dẫn an toàn hóa chất (SDS) để anh kiểm tra ạ." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Assuring a Sensitive Client about Odor & Fresh Air Quality',
      participants: [
        { name: 'Linh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LinhAirAssure', role: 'Technician' },
        { name: 'Theresa', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TheresaSmell', role: 'Client' }
      ],
      lines: [
        { participant: 'Theresa', text: "Linh, I usually get headaches from strong acrylic odors at traditional nail shops, but your salon smells remarkably fresh!", translation: "Linh ơi, bình thường mình hay bị nhức đầu bởi mùi nồng của bột đắp móng ở mấy tiệm truyền thống, mà sao salon bên bạn ngửi thoáng mát dễ chịu thế!" },
        { participant: 'Linh', text: "Thank you for noticing, Theresa! We use 100% EMA monomer instead of harsh chemicals, and every single desk has a built-in vacuum that sucks dust and vapor down immediately.", translation: "Cảm ơn bạn đã nhận ra nha Theresa! Bên mình chỉ sử dụng dung dịch EMA chuẩn y tế không mùi gắt độc hại, hơn nữa mỗi bàn đều tích hợp máy hút bụi chân không hút sạch bụi và mùi ngay lập tức đó." },
        { participant: 'Theresa', text: "That makes a huge difference. I can actually breathe comfortably while getting my full set done.", translation: "Khác biệt lớn thật sự luôn á. Mình có thể thở hoàn toàn thoải mái trong suốt lúc làm móng." },
        { participant: 'Linh', text: "Your health and our staff's well-being are always our top priorities. Let me know if you ever want the desk fan turned on higher too!", translation: "Sức khỏe của bạn và nhân viên luôn là ưu tiên hàng đầu của tiệm. Nếu bạn muốn chỉnh quạt bàn mạnh hơn thì cứ bảo mình nha!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Filter Check & Dust Empty',
      participants: [
        { name: 'Nate', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NateFilter', role: 'Tech' },
        { name: 'Ken', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KenTech', role: 'Tech' }
      ],
      lines: [
        { participant: 'Nate', text: "Ken, did you swap the vacuum filter on desk 5?", translation: "Ken ơi, thay tấm lọc máy hút ở bàn số 5 chưa?" },
        { participant: 'Ken', text: "Emptied the tray and put in a fresh filter 5 mins ago. Ready for the next set!", translation: "Đổ khay bụi với lắp tấm lọc mới tinh 5 phút trước rồi nha. Sẵn sàng làm bộ tiếp theo rồi!" },
        { participant: 'Nate', text: "Awesome, keeping the air clean!", translation: "Đỉnh, giữ không khí trong lành thế này là chuẩn!" },
        { participant: 'Ken', text: "Always!", translation: "Chuẩn luôn!" }
      ]
    }
  ],

  'beauty-14': [
    {
      type: 'pair',
      school: 'business',
      title: 'Bridal Party Contract, Deposit & Staggered Timeline Consultation',
      participants: [
        { name: 'Sophia', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SophiaBridalManager', role: 'Event Coordinator' },
        { name: 'Bridesmaid Chloe', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ChloeMaid', role: 'Maid of Honor' }
      ],
      lines: [
        { participant: 'Sophia', text: "Good afternoon, Chloe. Thank you for considering The Grand Salon for Sarah's bridal party of eight on October 14th.", translation: "Chào cô Chloe. Cảm ơn cô đã tin tưởng lựa chọn The Grand Salon cho tiệc làm đẹp cô dâu gồm 8 người của bạn Sarah vào ngày 14 tháng 10 tới ạ." },
        { participant: 'Chloe', text: "Good afternoon, Sophia. We need four gel manicures, four spa pedicures, and customized champagne service within a three-hour window.", translation: "Chào cô Sophia. Nhóm chúng tôi cần 4 dịch vụ làm móng gel, 4 dịch vụ móng chân spa, kèm phục vụ rượu vang sủi theo yêu cầu trong khung giờ gói gọn 3 tiếng ạ." },
        { participant: 'Sophia', text: "We have dedicated four senior technicians and two spa suites exclusively for your party from 10:00 AM to 1:00 PM. To secure this reserved block, a 30% non-refundable deposit is required by this Friday, with the balance settled on event day.", translation: "Bên em đã bố trí riêng 4 chuyên viên cao cấp và 2 phòng suite spa dành riêng cho đoàn của mình từ 10 giờ sáng đến 1 giờ chiều. Để giữ khung giờ đặc quyền này, bên em nhận khoản đặt cọc 30% trước thứ Sáu này, phần còn lại sẽ thanh toán vào ngày diễn ra sự kiện ạ." },
        { participant: 'Chloe', text: "That contract structure works perfectly for our wedding budget. Please send the digital invoice and we will finalize the deposit today.", translation: "Hợp đồng và điều khoản như vậy rất phù hợp với ngân sách đám cưới của chúng tôi. Cô gửi hóa đơn điện tử để tôi thanh toán cọc ngay hôm nay nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Excited Chat with Bridesmaids about Colors and Mimosa Toast',
      participants: [
        { name: 'Kylie', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KylieParty', role: 'Nail Artist' },
        { name: 'Jessica', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JessicaBridesmaid', role: 'Bridesmaid' }
      ],
      lines: [
        { participant: 'Kylie', text: "Congratulations to the whole bridal squad! Are you all coordinating nail colors with the sage green bridesmaid dresses today?", translation: "Chúc mừng cả hội chị em cô dâu nha! Hôm nay mọi người có định chọn màu móng đồng bộ với váy phù dâu xanh xô thơm không nè?" },
        { participant: 'Jessica', text: "Yes! The bride wants us all wearing glazed donut chrome over sheer nude, while she gets full white French tips with diamonds.", translation: "Đúng rồi đó! Cô dâu muốn tụi mình sơn màu nude phủ tráng gương glazed donut, còn nàng ấy sẽ làm đầu móng French trắng đính đá pha lê lấp lánh." },
        { participant: 'Kylie', text: "That is going to look breathtaking in the wedding album photos! Let me pour you another chilled mimosa while we shape your nails.", translation: "Lên hình album cưới đảm bảo đẹp xuất sắc luôn á! Để mình rót thêm cho bạn ly cocktail mimosa mát lạnh trong lúc giũa móng nhé." },
        { participant: 'Jessica', text: "Cheers to that! This is the most relaxing wedding prep ever.", translation: "Cạn ly thôi nào! Chuẩn bị đám cưới mà thư thái như thế này thì thích mê." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Group Timing Text Confirmation',
      participants: [
        { name: 'Linh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LinhHost', role: 'Tech' },
        { name: 'Steph', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=StephGroup', role: 'Organizer' }
      ],
      lines: [
        { participant: 'Steph', text: "Linh! All 6 of us just got in the Uber, arriving at 11 sharp!", translation: "Linh ơi! Cả 6 đứa vừa lên xe Uber rồi, đúng 11 giờ tới nơi nha!" },
        { participant: 'Linh', text: "Chairs 1 through 6 are prepped and mimosas are chilled! See you in 15!", translation: "Ghế 1 đến 6 chuẩn bị xong hết rồi, đồ uống đã ướp lạnh sẵn! 15 phút nữa gặp nha!" },
        { participant: 'Steph', text: "Can't wait!", translation: "Hóng quá đi!" },
        { participant: 'Linh', text: "Safe ride over!", translation: "Đi xe an toàn nha!" }
      ]
    }
  ],

  'beauty-15': [
    {
      type: 'pair',
      school: 'business',
      title: 'Tiered Loyalty Program Enrollment & Point Redemption Explanation',
      participants: [
        { name: 'Cassandra', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CassandraLoyalty', role: 'Guest Relations Officer' },
        { name: 'Eleanor', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=EleanorClient', role: 'Frequent Client' }
      ],
      lines: [
        { participant: 'Cassandra', text: "Good afternoon, Eleanor. With today's service, you have accumulated over 500 reward points, qualifying you for our Platinum Sanctuary tier.", translation: "Chào chị Eleanor. Với dịch vụ hôm nay, chị đã tích lũy được hơn 500 điểm thưởng, đủ tiêu chuẩn nâng hạng lên thành viên Bạch Kim của spa bên em ạ." },
        { participant: 'Eleanor', text: "Oh, wonderful! What privileges come with the Platinum tier?", translation: "Ôi tuyệt quá! Hạng Bạch Kim này có những đặc quyền gì vậy cô?" },
        { participant: 'Cassandra', text: "Platinum members receive priority booking on holiday weekends, a complimentary paraffin hand treatment on every visit, and ten percent cash back in store credit on all retail skincare purchases.", translation: "Thành viên Bạch Kim được ưu tiên xếp lịch vào các dịp lễ tết cuối tuần, tặng kèm liệu trình ủ ấm sáp paraffin cho tay trong mỗi lần ghé thăm, và được hoàn 10% điểm thưởng khi mua các sản phẩm dưỡng da bán lẻ ạ." },
        { participant: 'Eleanor', text: "Those are very generous benefits. Please apply fifty points toward today's ticket.", translation: "Quyền lợi thực sự rất chu đáo. Hãy trừ 50 điểm tích lũy vào hóa đơn hôm nay giúp tôi nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Signing up a Client on the Loyalty Tablet at the Register',
      participants: [
        { name: 'An', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AnRegister', role: 'Cashier' },
        { name: 'Brittany', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BrittanyLoyal', role: 'Client' }
      ],
      lines: [
        { participant: 'An', text: "Brittany, are you signed up with our VIP phone number rewards yet? You get five dollars off for every five visits!", translation: "Brittany ơi, bạn đã đăng ký số điện thoại tích điểm VIP bên mình chưa nè? Cứ mỗi 5 lần ghé là được giảm ngay 5 đô đó nha!" },
        { participant: 'Brittany', text: "I don't think so! Does it send a bunch of spam text messages?", translation: "Hình như chưa thì phải! Có bị gửi tin nhắn rác quảng cáo nhiều không bạn?" },
        { participant: 'An', text: "Not at all, zero spam! Just a friendly birthday discount text once a year and a receipt text when you finish.", translation: "Tuyệt đối không có tin nhắn rác đâu bạn ơi! Mỗi năm chỉ gửi đúng một tin chúc mừng sinh nhật kèm voucher giảm giá, với tin nhắn hóa đơn sau khi làm xong thôi." },
        { participant: 'Brittany', text: "That sounds great, let me type my phone number on the screen now.", translation: "Nghe thích quá, để mình nhập số điện thoại lên màn hình liền nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Birthday Month Perk Reminder',
      participants: [
        { name: 'Mia', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MiaPerk', role: 'Tech' },
        { name: 'Hailey', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HaileyBDay', role: 'Client' }
      ],
      lines: [
        { participant: 'Mia', text: "Hailey, isn't your birthday next week? You've got a free gel upgrade in our system!", translation: "Hailey ơi, tuần sau sinh nhật bạn đúng không? Trong hệ thống có ưu đãi nâng cấp sơn gel miễn phí cho bạn nè!" },
        { participant: 'Hailey', text: "Omg yes! October 19th! Can I use it on this set?", translation: "Trời ơi đúng rồi! Ngày 19 tháng 10! Dùng luôn cho bộ móng này được không bạn?" },
        { participant: 'Mia', text: "Already applied it! Happy early birthday!", translation: "Tớ áp mã luôn rồi nha! Chúc mừng sinh nhật sớm nhé!" },
        { participant: 'Hailey', text: "You're the sweetest, thank you!", translation: "Đáng yêu quá chừng, cảm ơn bạn nhiều nha!" }
      ]
    }
  ],

  'beauty-16': [
    {
      type: 'pair',
      school: 'business',
      title: 'Corporate Gift Certificate Issuance & Holiday Redemption Terms',
      participants: [
        { name: 'Giselle', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=GiselleGift', role: 'Salon Director' },
        { name: 'Mr. Sterling', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SterlingCorp', role: 'Corporate Executive' }
      ],
      lines: [
        { participant: 'Mr. Sterling', text: "Good morning. I would like to purchase ten gift certificates of two hundred dollars each as year-end executive bonuses for my team.", translation: "Chào cô. Tôi muốn mua 10 phiếu quà tặng, mỗi phiếu trị giá 200 đô la làm phần thưởng cuối năm cho đội ngũ quản lý của tôi." },
        { participant: 'Giselle', text: "Good morning, Mr. Sterling. That is a wonderful gesture of appreciation. We will package each certificate in our signature gold-embossed sleeve with a seasonal botanical ribbon.", translation: "Kính chào ông Sterling. Món quà tri ân thật ý nghĩa ạ. Bên em sẽ chuẩn bị từng phiếu trong phong bì dập nhũ vàng sang trọng kèm ruy băng hoa lá tinh tế ạ." },
        { participant: 'Mr. Sterling', text: "Excellent. Are there any holiday blackout dates or expiration constraints on these certificates?", translation: "Rất tốt. Liệu các phiếu quà tặng này có bị giới hạn ngày sử dụng dịp lễ hay thời hạn hết hạn không?" },
        { participant: 'Giselle', text: "Under state consumer law, our monetary gift certificates never expire. They are fully redeemable for both luxury treatments and retail skincare at any time.", translation: "Theo luật bảo vệ người tiêu dùng, phiếu quà tặng mệnh giá tiền bên em không bao giờ hết hạn ạ. Người nhận có thể dùng cho mọi dịch vụ spa lẫn mua mỹ phẩm bất cứ lúc nào." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Buying a Mother\'s Day Pampering Gift Card',
      participants: [
        { name: 'Lan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LanFront', role: 'Receptionist' },
        { name: 'Daniel', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DanielMomGift', role: 'Client' }
      ],
      lines: [
        { participant: 'Daniel', text: "Hi Lan! Mother's Day is coming up and I want to treat my mom to a full pampering day. What package do you recommend?", translation: "Chào Lan! Sắp tới Ngày của Mẹ rồi, mình muốn tặng mẹ một ngày thư giãn trọn vẹn. Bạn gợi ý gói nào hợp nhất nhỉ?" },
        { participant: 'Lan', text: "Our Deluxe Rose Spa package is the absolute favorite for moms! It includes a warm milk foot soak, exfoliating sugar scrub, paraffin wax, and a gentle neck and shoulder massage.", translation: "Gói Deluxe Rose Spa hoa hồng bên mình là chân ái của các mẹ luôn đó! Gồm ngâm chân sữa ấm, tẩy tế bào chết đường nâu, ủ sáp paraffin mềm da và mát-xa cổ vai gáy nhẹ nhàng." },
        { participant: 'Daniel', text: "That sounds heavenly, she works so hard and really needs to unwind. Can you put eighty-five dollars on a gift card?", translation: "Nghe êm ái quá, mẹ mình làm việc vất vả nên rất cần được xả stress. Bạn nạp 85 đô vào thẻ quà tặng giúp mình nhé?" },
        { participant: 'Lan', text: "Done! Here is a lovely calligraphy card you can write a sweet message in for her.", translation: "Xong rồi đây ạ! Mình gửi bạn kèm một tấm thiệp viết tay xinh xắn để bạn ghi lời chúc gửi mẹ nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick E-Gift Card Buy via App',
      participants: [
        { name: 'Vee', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=VeeFront', role: 'Tech' },
        { name: 'Chloe', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ChloeQuickGift', role: 'Client' }
      ],
      lines: [
        { participant: 'Chloe', text: "Vee, can I buy an e-gift card for my sister on your website?", translation: "Vee ơi, tớ mua thẻ quà tặng điện tử cho em gái trên web tiệm được không?" },
        { participant: 'Vee', text: "Totally! It emails the voucher code instantly with your custom message.", translation: "Thoải mái luôn! Hệ thống sẽ gửi email mã voucher liền kèm lời chúc của bạn luôn." },
        { participant: 'Chloe', text: "Buying a $50 card right now from my phone, thanks!", translation: "Đang mua thẻ 50 đô trên điện thoại luôn đây, cảm ơn nha!" },
        { participant: 'Vee', text: "She's gonna love it!", translation: "Em bạn chắc chắn sẽ mê tít cho xem!" }
      ]
    }
  ],

  'beauty-17': [
    {
      type: 'pair',
      school: 'business',
      title: 'Clinical Post-Care Instructions Following Acid Peel Treatment',
      participants: [
        { name: 'Dr. Celine', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CelineEsthetician', role: 'Dermal Specialist' },
        { name: 'Marcus', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MarcusPostCare', role: 'Client' }
      ],
      lines: [
        { participant: 'Dr. Celine', text: "Marcus, your lactic acid peel went smoothly. Now, adherence to post-treatment home protocol is crucial for optimal barrier repair.", translation: "Anh Marcus, liệu trình peel da bằng acid lactic của anh đã hoàn thành rất tốt. Giờ đây việc tuân thủ các bước chăm sóc tại nhà là yếu tố quyết định để hàng rào bảo vệ da phục hồi tối ưu ạ." },
        { participant: 'Marcus', text: "Understood. What are the essential guidelines for the next forty-eight hours?", translation: "Tôi hiểu rồi. Những nguyên tắc cốt lõi trong vòng 48 giờ tới là gì thưa chuyên viên?" },
        { participant: 'Dr. Celine', text: "Avoid direct sun exposure, saunas, and strenuous workouts that induce heavy sweating. Apply our broad-spectrum SPF 50 every four hours, and strictly refrain from picking any minor flaking.", translation: "Anh tránh tiếp xúc trực tiếp với ánh nắng, không xông hơi và không tập thể thao nặng gây đổ nhiều mồ hôi. Thoa kem chống nắng phổ rộng SPF 50 mỗi 4 tiếng một lần, và tuyệt đối không dùng tay cạy bóc các mảng da bong nhẹ ạ." },
        { participant: 'Marcus', text: "I have the aftercare kit and will follow every guideline precisely. Thank you, Dr. Celine.", translation: "Tôi đã có sẵn bộ sản phẩm phục hồi và sẽ làm đúng từng bước hướng dẫn. Cảm ơn cô Celine." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Practical Tips to Keep Gel-X Extensions Pristine for 4 Weeks',
      participants: [
        { name: 'Nga', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NgaCareNail', role: 'Nail Technician' },
        { name: 'Taylor', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TaylorClientCare', role: 'Client' }
      ],
      lines: [
        { participant: 'Nga', text: "Taylor, your long almond Gel-X set is finished and looking fabulous! Remember: nails are jewels, not tools!", translation: "Taylor ơi, bộ móng Gel-X dáng hạnh nhân dài của bạn đã xong và nhìn xinh xỉu luôn! Nhớ lời dặn vàng nhé: móng tay là trang sức, không phải đồ nghề cạy mở đồ đâu nha!" },
        { participant: 'Taylor', text: "Haha, I know! I always try to pry soda cans open with my thumbnails.", translation: "Haha, tớ biết rồi! Toàn có thói quen tiện tay lấy ngón cái bật nắp lon nước ngọt thôi à." },
        { participant: 'Nga', text: "Use a butter knife or coin instead! Also, wear rubber gloves when washing dishes with bleach or hot water so the chemicals don't weaken the adhesive bond.", translation: "Dùng cán thìa hoặc đồng xu để mở nha! Ngoài ra khi rửa chén bát với nước nóng hoặc chất tẩy rửa thì nhớ đeo găng tay cao su để hóa chất không làm yếu lớp keo liên kết nha bạn." },
        { participant: 'Taylor', text: "Good call on the gloves! I want this set to last all the way through my vacation.", translation: "Nhắc vụ găng tay đúng lúc ghê! Mình muốn giữ bộ móng này thật bền suốt chuyến du lịch sắp tới." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Glove & Dish Rule Text',
      participants: [
        { name: 'Kelly', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KellyTechCare', role: 'Tech' },
        { name: 'Sam', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SamGloves', role: 'Client' }
      ],
      lines: [
        { participant: 'Kelly', text: "Friendly reminder Sam: rubber gloves for dishes tonight!", translation: "Nhắc nhẹ Sam nè: tối nay rửa bát nhớ đeo bao tay cao su nghen!" },
        { participant: 'Sam', text: "Already got pink gloves ready by the sink! Not ruining this set!", translation: "Đã thủ sẵn đôi găng tay hồng ngay bồn rửa rồi! Quyết không để hỏng bộ móng này!" },
        { participant: 'Kelly', text: "Proud of you! See you in 3 weeks!", translation: "Tự hào ghê! Hẹn gặp lại sau 3 tuần nha!" },
        { participant: 'Sam', text: "Bye Kelly!", translation: "Tạm biệt Kelly nhé!" }
      ]
    }
  ],

  'beauty-18': [
    {
      type: 'pair',
      school: 'business',
      title: 'Formal Shift Schedule Reallocation & Weekend Coverage Discussion',
      participants: [
        { name: 'Diane', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DianeSalonManager', role: 'General Manager' },
        { name: 'Khoa', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KhoaTechShift', role: 'Senior Technician' }
      ],
      lines: [
        { participant: 'Khoa', text: "Good morning, Diane. I would like to formally request an adjustment to my schedule for next weekend, October 21st and 22nd.", translation: "Chào chị Diane. Em xin phép gửi đề xuất điều chỉnh lịch làm việc cuối tuần tới, ngày 21 và 22 tháng 10 ạ." },
        { participant: 'Diane', text: "Good morning, Khoa. As you know, Saturdays are our peak appointment volume with thirty bookings already scheduled. Do you have a coverage plan in place?", translation: "Chào Khoa. Như em biết, thứ Bảy là ngày cao điểm nhất của tiệm với hơn 30 lịch hẹn đã kín chỗ. Em đã có phương án người hỗ trợ đổi ca chưa?" },
        { participant: 'Khoa', text: "Yes. I spoke with Jenny, and she has agreed to cover my full Saturday shift. In return, I will take her shifts on Monday and Tuesday during our regular restocking days.", translation: "Dạ có ạ. Em đã trao đổi với chị Jenny và chị ấy đồng ý làm thay toàn bộ ca thứ Bảy giúp em. Đổi lại, em sẽ làm bù cho chị ấy vào thứ Hai và thứ Ba trong ca kiểm kê hàng tuần ạ." },
        { participant: 'Diane', text: "That ensures our station coverage remains uninterrupted. I will update the master scheduling software accordingly.", translation: "Phương án sắp xếp rất hợp lý, đảm bảo đủ nhân sự phục vụ khách. Chị sẽ cập nhật lên phần mềm phân ca chung của salon nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Friendly Coworker Swap for a Family Gathering',
      participants: [
        { name: 'Jenny', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JennySwap', role: 'Technician' },
        { name: 'Bao', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BaoSwap', role: 'Technician' }
      ],
      lines: [
        { participant: 'Bao', text: "Hey Jenny! Are you free next Friday evening? My cousin is having her engagement party and I'm desperate to make it.", translation: "Jenny ơi! Chiều tối thứ Sáu tuần sau bạn có rảnh không? Em họ mình tổ chức tiệc đính hôn mà mình tha thiết muốn đi dự quá nè." },
        { participant: 'Jenny', text: "Oh, congratulations to your cousin! I'm actually free from 3:00 PM onward. Could you take my Sunday morning shift in exchange?", translation: "Ôi chúc mừng em họ bạn nha! Thực ra từ 3 giờ chiều trở đi mình rảnh nè. Đổi lại bạn làm giúp mình ca sáng Chủ nhật được không?" },
        { participant: 'Bao', text: "Sunday morning works completely fine for me! I'll tell the manager right away so she can sign off on our switch.", translation: "Sáng Chủ nhật mình làm hoàn toàn tiện luôn! Để mình báo quản lý liền để chị ấy duyệt đổi ca cho tụi mình nhé." },
        { participant: 'Jenny', text: "Awesome! Have fun at the engagement party, Bao!", translation: "Tuyệt quá! Đi tiệc đính hôn vui vẻ nha Bao ơi!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Shift Cover Text',
      participants: [
        { name: 'Linh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LinhShiftText', role: 'Tech' },
        { name: 'Chloe', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ChloeShiftText', role: 'Tech' }
      ],
      lines: [
        { participant: 'Chloe', text: "Linh! Can you take my 2pm client tomorrow? Got a dentist emergency.", translation: "Linh ơi! Chiều mai 2h nhận khách giúp tớ được không? Tớ bị đau răng đột xuất phải đi khám." },
        { participant: 'Linh', text: "No problem, got you covered! Gel or full set?", translation: "Không sao, để tớ lo! Khách làm gel hay đắp bột trọn bộ?" },
        { participant: 'Chloe', text: "Simple gel mani. You're a life saver!", translation: "Móng gel đơn giản thôi à. Cứu tinh của đời tớ ơi!" },
        { participant: 'Linh', text: "Feel better soon, leave it to me!", translation: "Mau khỏe răng nha, cứ yên tâm để tớ!" }
      ]
    }
  ],

  'beauty-19': [
    {
      type: 'pair',
      school: 'business',
      title: 'Quarterly Inventory Audit & Bulk Supplier Procurement',
      participants: [
        { name: 'Brandon', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BrandonProcure', role: 'Procurement Director' },
        { name: 'Nga', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NgaInventoryLead', role: 'Lead Technician' }
      ],
      lines: [
        { participant: 'Brandon', text: "Nga, let's review the stock audit report before I place our quarterly wholesale order with OPI and Kiara Sky.", translation: "Nga ơi, tụi mình cùng rà soát lại báo cáo kiểm kê kho trước khi anh đặt đơn hàng bán buôn quý này với hãng OPI và Kiara Sky nhé." },
        { participant: 'Nga', text: "Yes, Brandon. We have ample 100/180 grit disposable files, but our reserve of acetone, alcohol wipes, and #000 detail nail art brushes is critically low.", translation: "Dạ vâng anh Brandon. Giũa dùng một lần độ nhám 100/180 thì còn dồi dào, nhưng lượng cồn lau, nước ngâm tháo acetone và cọ tỉa nét số #000 đang ở mức báo động thấp ạ." },
        { participant: 'Brandon', text: "I will order twenty gallons of pure acetone and four bulk cases of fine brushes. How are our top-selling nude gel polishes holding up?", translation: "Anh sẽ đặt 20 gallon acetone nguyên chất và 4 thùng cọ tỉa nét. Còn các màu sơn gel nude bán chạy nhất thì số lượng trong kho thế nào em?" },
        { participant: 'Nga', text: "Shades 'Bubble Bath' and 'Funny Bunny' are nearly depleted due to the wedding season rush. We need at least fifteen bottles of each.", translation: "Hai mã màu 'Bubble Bath' và 'Funny Bunny' gần như cạn kiệt do khách làm tiệc cưới quá đông ạ. Mình cần bổ sung ít nhất 15 chai cho mỗi màu ạ." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Restocking the Station Cart before the Afternoon Rush',
      participants: [
        { name: 'Vy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=VyCart', role: 'Technician' },
        { name: 'Amy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AmyRestock', role: 'Technician' }
      ],
      lines: [
        { participant: 'Vy', text: "Amy, I'm heading back to the storage supply room to grab more lint-free wipes. Do you need anything for your station?", translation: "Amy ơi, mình chuẩn bị ra phòng kho lấy thêm bông lau không xơ nè. Bàn bạn có thiếu đồ gì cần mình lấy hộ không?" },
        { participant: 'Amy', text: "Oh, you're the best! Could you grab me two bottles of non-wipe top coat and a pack of orange wood sticks?", translation: "Ôi bạn tuyệt vời quá! Bạn lấy giùm mình hai chai sơn bóng không cần lau cồn với một bịch que gỗ đẩy khóe nhé?" },
        { participant: 'Vy', text: "Sure thing! Are we running low on cuticle oil dropper bottles at the front desk too?", translation: "Được chứ! Dưới quầy tiếp tân chai nhỏ giọt dầu dưỡng viền móng có sắp hết luôn không bạn nhỉ?" },
        { participant: 'Amy', text: "I checked earlier, there are only three lavender bottles left on the retail shelf. Definitely grab a box of those too!", translation: "Hồi nãy mình xem thấy trên kệ bán lẻ chỉ còn đúng 3 chai hương oải hương thôi. Tiện tay bạn xách thêm một hộp ra luôn nha!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Fast Top Coat Check',
      participants: [
        { name: 'Tim', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TimSupplies', role: 'Tech' },
        { name: 'Linh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LinhTopCoat', role: 'Tech' }
      ],
      lines: [
        { participant: 'Tim', text: "Linh, where's the box of matte top coats?", translation: "Linh ơi, thùng sơn bóng mờ để ở góc nào vậy?" },
        { participant: 'Linh', text: "Bottom shelf right behind the autoclave machine!", translation: "Ngăn kệ dưới cùng ngay sau cái máy hấp tiệt trùng nha!" },
        { participant: 'Tim', text: "Got it, thanks!", translation: "Tìm thấy rồi, cảm ơn nhé!" },
        { participant: 'Linh', text: "Grab two while you're there!", translation: "Tiện tay cầm ra hai chai luôn nha!" }
      ]
    }
  ],

  'beauty-20': [
    {
      type: 'pair',
      school: 'business',
      title: 'State Board Sanitation Audit & Autoclave Log Verification',
      participants: [
        { name: 'Inspector Vance', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=InspectorVance', role: 'State Board Inspector' },
        { name: 'Mai', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MaiSalonOwner', role: 'Salon Owner' }
      ],
      lines: [
        { participant: 'Inspector Vance', text: "Good afternoon. I am Inspector Vance from the State Board of Cosmetology conducting a routine unannounced sanitary inspection.", translation: "Xin chào. Tôi là Thanh tra Vance từ Hội đồng Thẩm mỹ Bang đến thực hiện đợt kiểm tra vệ sinh an toàn định kỳ không báo trước." },
        { participant: 'Mai', text: "Good afternoon, Inspector Vance. You are very welcome to inspect our facility. All licenses and safety postings are framed in the entrance foyer.", translation: "Kính chào Thanh tra Vance. Xin mời ông kiểm tra toàn bộ cơ sở của chúng tôi ạ. Toàn bộ chứng chỉ hành nghề và bảng thông báo an toàn đều được lồng khung niêm yết tại sảnh chính ạ." },
        { participant: 'Inspector Vance', text: "Thank you. Let us inspect your wet disinfectant Barbicide solutions, your single-use disposable implement protocol, and the monthly autoclave spore test records.", translation: "Cảm ơn cô. Chúng tôi sẽ kiểm tra dung dịch ngâm khử trùng Barbicide, quy trình xử lý dụng cụ dùng một lần và sổ theo dõi kiểm tra bào tử máy hấp tiệt trùng hàng tháng." },
        { participant: 'Mai', text: "Here is our dated autoclave spore test binder, certified by an independent laboratory. Our Barbicide jars are refreshed every morning, and all metal implements are sealed in sterile pouches.", translation: "Dạ đây là sổ lưu kết quả kiểm định máy hấp tiệt trùng có chứng nhận của phòng xét nghiệm độc lập. Các bình ngâm Barbicide đều được thay mới mỗi sáng, và toàn bộ dụng cụ kim loại đều được đóng gói trong túi ép vô trùng ạ." },
        { participant: 'Inspector Vance', text: "Your documentation and operational hygiene standards are exemplary, Mai. Full marks across all compliance categories.", translation: "Hồ sơ và tiêu chuẩn vệ sinh thực tế của salon cô đạt mức mẫu mực. Đạt điểm tối đa trong tất cả các hạng mục kiểm định." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Explaining Sterile Tool Pouches to an Anxious Client',
      participants: [
        { name: 'Khang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KhangSterile', role: 'Technician' },
        { name: 'Laura', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LauraClientClean', role: 'Client' }
      ],
      lines: [
        { participant: 'Laura', text: "Khang, before you start on my cuticles, do you mind me asking how these metal clippers are cleaned? I caught an infection years ago at a cheap mall shop.", translation: "Khang ơi, trước khi nhặt da khóe móng, cho mình hỏi kềm kéo kim loại này được vệ sinh thế nào vậy? Cách đây vài năm mình từng bị nhiễm trùng ở một tiệm ngoài chợ nên giờ sợ lắm." },
        { participant: 'Khang', text: "I'm so glad you asked, Laura! Your health is everything to us. Look at this pouch right here: see how this indicator mark turned from pink to brown? That means it went through high-pressure medical autoclave sterilization at 270 degrees.", translation: "Mình rất mừng vì bạn đã chủ động hỏi nha Laura! Sức khỏe của khách là số một đối với tiệm. Bạn nhìn chiếc túi này xem: vạch chỉ thị màu hồng đã chuyển hẳn sang màu nâu rồi đúng không nè? Điều đó chứng tỏ bộ kềm này đã được tiệt trùng trong lò hấp y tế áp suất cao ở 270 độ C đó." },
        { participant: 'Laura', text: "And you're opening the sealed pouch right in front of me! That is so reassuring.", translation: "Và bạn còn xé niêm phong túi vô trùng ngay trước mặt mình nữa! Thật sự an tâm vô cùng." },
        { participant: 'Khang', text: "Always fresh, every single client, zero exceptions! We also use brand-new nail files and buffers that we throw away or let you take home.", translation: "Luôn luôn vô trùng mới cho từng khách hàng, không bao giờ có ngoại lệ! Cây giũa và phao mài này cũng là đồ mới toanh, làm xong bạn có thể mang về hoặc tụi mình bỏ thùng rác luôn." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Pouch Unseal at the Desk',
      participants: [
        { name: 'Cindy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CindyPouch', role: 'Tech' },
        { name: 'Gwen', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=GwenClean', role: 'Client' }
      ],
      lines: [
        { participant: 'Cindy', text: "Hear that rip? Fresh sterile nippers unsealed just for you!", translation: "Nghe tiếng xé túi không nào? Kềm tiệt trùng mới toanh dành riêng cho bạn nè!" },
        { participant: 'Gwen', text: "Love that sound, always makes me feel safe here.", translation: "Thích nghe âm thanh đó ghê, lúc nào làm ở đây cũng thấy an tâm." },
        { participant: 'Cindy', text: "Your hands deserve the cleanest care!", translation: "Bàn tay ngọc ngà phải được chăm sóc sạch nhất chứ lị!" },
        { participant: 'Gwen', text: "Amen to that!", translation: "Chuẩn không cần chỉnh!" }
      ]
    }
  ],

  'beauty-21': [
    {
      type: 'pair',
      school: 'business',
      title: 'Itemized Receipt Breakdown & Tipping Protocol at Concierge Register',
      participants: [
        { name: 'Adeline', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AdelineCashier', role: 'Salon Concierge' },
        { name: 'Julianne', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JulianneBill', role: 'Corporate Client' }
      ],
      lines: [
        { participant: 'Julianne', text: "Good afternoon. I just completed my appointment with Chloe. My total is ninety-five dollars, which is slightly higher than the quoted base price. Could you provide an itemized breakdown, please?", translation: "Chào cô. Tôi vừa hoàn thành buổi làm móng với cô Chloe. Tổng hóa đơn là 95 đô, hơi cao hơn một chút so với mức giá cơ bản ban đầu. Cô có thể in bảng kê chi tiết từng khoản giúp tôi được không?" },
        { participant: 'Adeline', text: "Certainly, Julianne. Here is your printed receipt. The base Gel-X set is sixty-five dollars. We included the ten-dollar gentle soak-off removal for previous acrylics, and a twenty-dollar custom hand-painted French chrome art fee. There are no undisclosed fees.", translation: "Dạ chắc chắn rồi ạ, chị Julianne. Đây là hóa đơn chi tiết in từ hệ thống ạ. Gói móng Gel-X cơ bản là 65 đô. Có phụ phí 10 đô ngâm tháo móng bột cũ nhẹ nhàng, và 20 đô cho thiết kế vẽ đầu móng French tráng gương nghệ thuật ạ. Toàn bộ các khoản thu đều minh bạch không có phụ phí ẩn nào ạ." },
        { participant: 'Julianne', text: "Thank you for explaining that so clearly. Chloe's artistry was immaculate, she deserves an excellent tip. May I add a twenty percent gratuity on my credit card, or does she prefer cash?", translation: "Cảm ơn cô đã giải thích rất rõ ràng. Tay nghề của Chloe thực sự hoàn hảo, cô ấy xứng đáng nhận được tiền tip hậu hĩnh. Tôi có thể cộng thêm 20% tiền tip vào thẻ tín dụng, hay Chloe thích nhận tiền mặt hơn?" },
        { participant: 'Adeline', text: "Chloe appreciates both equally. You can select the gratuity percentage directly on the payment terminal screen, or leave cash directly in her personal station envelope. Thank you for your generosity.", translation: "Chloe nhận cách nào cũng rất vui lòng ạ. Chị có thể bấm chọn phần trăm tiền tip trực tiếp trên màn hình máy quẹt thẻ, hoặc gửi tiền mặt vào phong bì tại bàn làm việc của cô ấy ạ. Cảm ơn sự hào phóng của chị." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Warm Checkout, Venmo Tip Option & Rebooking',
      participants: [
        { name: 'Kylie', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KylieCashierWarm', role: 'Receptionist' },
        { name: 'Brooke', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BrookeHappy', role: 'Client' }
      ],
      lines: [
        { participant: 'Brooke', text: "Hi Kylie! That pedicure with Thuy was absolute perfection. My feet feel like they're walking on clouds!", translation: "Chào Kylie! Vừa làm móng chân với Thuy xong phải nói là đỉnh của chóp luôn. Chân mình nhẹ nhõm như đang bước trên mây vậy á!" },
        { participant: 'Kylie', text: "Thuy is such an angel, she'll be thrilled to hear that! Your total today comes to fifty-five dollars for the spa deluxe package.", translation: "Thuy dễ thương lắm, nghe bạn khen chắc chị ấy vui cả ngày luôn nè! Tổng hóa đơn của bạn hôm nay là 55 đô cho gói spa cao cấp nha." },
        { participant: 'Brooke', text: "I'm running a little low on paper cash. Does Thuy have a Venmo QR code so I can send her a tip directly?", translation: "Ví mình hôm nay hơi ít tiền mặt lẻ. Thuy có mã QR Venmo không để mình bắn tiền tip trực tiếp cho chị ấy luôn?" },
        { participant: 'Kylie', text: "Yes! Here is Thuy's direct Venmo card on the acrylic stand. Just scan it with your phone camera! Would you like to rebook your next fill for four weeks from now?", translation: "Có chứ! Thẻ Venmo của Thuy đặt ngay trên giá mica này nè. Bạn chỉ cần quét camera điện thoại là xong! Bạn có muốn đặt trước lịch dặm móng cho 4 tuần nữa luôn không nè?" },
        { participant: 'Brooke', text: "Scanned and sent twenty dollars tip to Thuy! And yes, let's put me down for Saturday the 18th at 2 PM.", translation: "Mình quét gửi 20 đô tip cho Thuy rồi nha! Và đặt trước cho mình vào thứ Bảy ngày 18 lúc 2 giờ chiều nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Fast Tap to Pay & Cash Tip Drop',
      participants: [
        { name: 'Sam', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SamFastPay', role: 'Cashier' },
        { name: 'Maya', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MayaTip', role: 'Client' }
      ],
      lines: [
        { participant: 'Sam', text: "Total is $60, Maya! Tap card whenever you're ready.", translation: "Tổng cộng 60 đô nha Maya ơi! Chạm thẻ thanh toán lúc nào cũng được nha." },
        { participant: 'Maya', text: "Tapped! And here's a $15 cash tip for Bao on desk 3.", translation: "Chạm thẻ xong rồi nha! Với gửi thêm 15 đô tiền mặt tip cho Bao ở bàn số 3 giúp mình nhé." },
        { participant: 'Sam', text: "Dropping it right in Bao's tip box! Have an amazing weekend!", translation: "Bỏ vào hộp tip của Bao ngay nè! Chúc bạn cuối tuần vui vẻ nhé!" },
        { participant: 'Maya', text: "Thanks, you too!", translation: "Cảm ơn, bạn cũng vậy nha!" }
      ]
    }
  ],

  'spec-03': [
    {
      type: 'pair',
      school: 'business',
      title: 'Comprehensive Beauty Consultation & Service Roadmap',
      participants: [
        { name: 'Vivian', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=VivianSpec03', role: 'Senior Spa Director' },
        { name: 'Clarissa', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ClarissaSpec03', role: 'Client' }
      ],
      lines: [
        { participant: 'Vivian', text: "Good morning, Clarissa. In the beauty and wellness industry, clear communication ensures both exceptional aesthetic results and client peace of mind.", translation: "Chào chị Clarissa. Trong ngành làm đẹp và chăm sóc sức khỏe, giao tiếp rõ ràng là chìa khóa mang lại kết quả thẩm mỹ vượt trội và sự an tâm tuyệt đối cho khách hàng ạ." },
        { participant: 'Clarissa', text: "I completely agree. I value professionals who take time to understand my skin and nail needs before performing any procedure.", translation: "Tôi hoàn toàn đồng ý. Tôi đánh giá rất cao những chuyên viên biết dành thời gian lắng nghe tình trạng da và móng trước khi tiến hành dịch vụ." },
        { participant: 'Vivian', text: "We adhere strictly to international sanitation protocols, transparent pricing disclosures, and personalized aftercare plans for every client.", translation: "Bên em tuân thủ nghiêm ngặt các quy chuẩn vệ sinh quốc tế, minh bạch bảng giá và xây dựng lộ trình chăm sóc tại nhà cá nhân hóa cho từng khách hàng ạ." },
        { participant: 'Clarissa', text: "That level of professionalism is what sets this establishment apart. I look forward to our session.", translation: "Sự chuyên nghiệp chuẩn mực đó chính là điều tạo nên uy tín của salon. Tôi rất trông đợi buổi làm đẹp hôm nay." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Warm Welcoming & Salon Tour for a New Beauty Lover',
      participants: [
        { name: 'Chloe', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ChloeSpec03', role: 'Beauty Specialist' },
        { name: 'Emily', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=EmilySpec03', role: 'New Client' }
      ],
      lines: [
        { participant: 'Chloe', text: "Hi Emily! Welcome to our beauty studio! Are you excited for some relaxing self-care time today?", translation: "Chào Emily! Chào mừng bạn đến với studio làm đẹp bên mình! Đã sẵn sàng cho một buổi nuông chiều bản thân thật thư giãn chưa nào?" },
        { participant: 'Emily', text: "I really am! My week was so busy, I desperately need a fresh manicure and pedicure.", translation: "Sẵn sàng lắm rồi nè! Tuần này bận rộn quá, mình đang thèm một buổi làm móng tay móng chân cho tươi mới lại đây." },
        { participant: 'Chloe', text: "You've come to the right place! We've got herbal foot soaks, hundreds of trendy gel colors, and the comfiest massage chairs. Let's find your dream look!", translation: "Đến đúng nơi rồi đó bạn ơi! Bên mình có ngâm chân thảo mộc, hàng trăm màu gel hot trend và ghế mát-xa êm ái nhất luôn. Cùng chọn mẫu móng mơ ước của bạn nhé!" },
        { participant: 'Emily', text: "Thank you so much, Chloe! I can already feel the stress melting away.", translation: "Cảm ơn Chloe nhiều nhé! Mới bước vào thôi mà đã thấy tan biến hết mệt mỏi rồi." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Beauty Check-in',
      participants: [
        { name: 'Tina', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TinaSpec03', role: 'Tech' },
        { name: 'Zoe', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ZoeSpec03', role: 'Client' }
      ],
      lines: [
        { participant: 'Tina', text: "Zoe! Ready for fresh nails?", translation: "Zoe ơi! Sẵn sàng lên bộ móng mới chưa nè?" },
        { participant: 'Zoe', text: "Born ready! Almond shape and chrome please!", translation: "Sẵn sàng từ lâu rồi! Cho tớ dáng hạnh nhân tráng gương nha!" },
        { participant: 'Tina', text: "Take chair 2, starting in 2 mins!", translation: "Ngồi ghế 2 nha, 2 phút nữa bắt đầu liền!" },
        { participant: 'Zoe', text: "Yay, thank you!", translation: "Tuyệt quá, cảm ơn nha!" }
      ]
    }
  ]
};
