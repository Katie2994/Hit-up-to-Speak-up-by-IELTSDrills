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
      title: 'Discreet Health Consultation on Onychomycosis & Podiatrist Referral',
      participants: [
        { name: 'Kim', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KimTechOwnerHealth', role: 'Salon Supervisor' },
        { name: 'Mrs. Harrington', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HarringtonClientHealth', role: 'Client' }
      ],
      lines: [
        { participant: 'Kim', text: "Mrs. Harrington, upon inspecting your right big toenail, I observe localized yellow-green discoloration and minor nail plate thickening consistent with a fungal condition.", translation: "Thưa bà Harrington, qua kiểm tra móng chân cái bên phải của bà, em nhận thấy có vùng đổi màu vàng xanh cục bộ và bản móng hơi dày lên, đây là dấu hiệu đặc trưng của tình trạng nấm móng ạ." },
        { participant: 'Mrs. Harrington', text: "Oh dear, I was hoping you could simply buff it down and cover it with dark acrylic powder.", translation: "Ôi trời, tôi cứ tưởng các cô chỉ cần mài phẳng đi rồi đắp bột acrylic màu tối lên là che được chứ." },
        { participant: 'Kim', text: "Under State Board health regulations, applying an acrylic seal over an active fungal infection traps moisture and accelerates spore proliferation. For your safety, we must leave that nail bare. We can perform our soothing medical-grade herbal soak on all ten toes, and I strongly recommend consulting a podiatrist for antifungal treatment.", translation: "Dạ theo quy định y tế của Hội đồng Thẩm mỹ Bang, việc đắp bột bịt kín lên móng đang nhiễm nấm sẽ giữ ẩm và làm bào tử nấm lây lan nhanh hơn rất nhiều ạ. Vì an toàn của bà, tiệm bắt buộc phải để móng đó thông thoáng. Bên em sẽ thực hiện ngâm thảo mộc kháng khuẩn cho cả mười ngón, và em chân thành khuyên bà nên đến gặp bác sĩ chuyên khoa chân để được kê thuốc điều trị dứt điểm ạ." },
        { participant: 'Mrs. Harrington', text: "Thank you for your honesty and medical ethics rather than taking the easy route. I will make a doctor appointment tomorrow.", translation: "Cảm ơn cô đã rất trung thực và giữ đúng y đức thay vì chỉ làm cho xong chuyện. Ngày mai tôi sẽ đi khám bác sĩ ngay." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Discreet Advice on Greenish Nail Pocket & Deferring Polish',
      participants: [
        { name: 'Linh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LinhTechFungus', role: 'Nail Tech' },
        { name: 'Sarah', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SarahClientFungus', role: 'Client' }
      ],
      lines: [
        { participant: 'Linh', text: "Sarah, I'm speaking softly so only you can hear: when I gently removed your old gel, I noticed a tiny green spot on your thumbnail. It looks like a classic moisture pocket where bacteria settled.", translation: "Sarah ơi, mình nói nhỏ riêng với bạn nghe thôi nhé: lúc mình tháo lớp sơn gel cũ ra, mình thấy có một đốm xanh lá nhỏ trên ngón tay cái. Đây là vết ố ẩm vi khuẩn rất phổ biến khi móng bị hở mép đó." },
        { participant: 'Sarah', text: "Oh no! Is it mold? That sounds horrifying! Can you paint over it?", translation: "Ôi chết rồi! Có phải bị mốc không bạn? Nghe sợ quá vậy! Bạn sơn đè lên che giùm mình được không?" },
        { participant: 'Linh', text: "Don't panic at all! It is not dangerous if treated properly, but painting gel over it will trap the moisture and make it worse. I will sanitize it with tea tree oil, trim it clean, and leave it bare for two weeks until it grows out. We can paint the other nine fingers gorgeously!", translation: "Bạn đừng hoảng nha! Cái này không nguy hiểm nếu chăm sóc đúng cách, nhưng nếu sơn gel đè lên thì móng sẽ bí hơi và lan rộng hơn đó. Mình sẽ sát trùng bằng tinh dầu tràm trà, tỉa gọn gàng và để móng đó mọc tự nhiên trong 2 tuần nhé. Chín ngón còn lại mình sơn thật xinh cho bạn nha!" },
        { participant: 'Sarah', text: "Phew, thank you for being so discreet and protecting my natural nails! You're the best.", translation: "Phù, cảm ơn bạn đã nói riêng tế nhị và bảo vệ móng thật cho mình nhé! Bạn chu đáo quá chừng." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Private Check on Toenail Fungal Spot',
      participants: [
        { name: 'Vy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=VyTechFungus', role: 'Tech' },
        { name: 'Emily', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=EmilyToenail', role: 'Client' }
      ],
      lines: [
        { participant: 'Vy', text: "Discreet heads-up Em: tiny fungal spot on the left big toe.", translation: "Nhắc nhỏ Emily nè: khóe móng chân cái bên trái hơi có dấu hiệu nấm nha." },
        { participant: 'Emily', text: "Yikes, should we skip polish on that one?", translation: "Trời, vậy ngón đó khỏi sơn màu hả bạn?" },
        { participant: 'Vy', text: "Yeah, keep it completely bare, dab rubbing alcohol daily!", translation: "Đúng rồi, để móng trần thông thoáng, mỗi ngày chấm cồn sát trùng nhé!" },
        { participant: 'Emily', text: "Got it, thanks for catching that!", translation: "Hiểu rồi, may mà bạn phát hiện sớm giùm mình!" }
      ]
    }
  ],

  'beauty-14': [
    {
      type: 'pair',
      school: 'business',
      title: 'Ergonomic & Chemical-Free Accommodation for Expectant Mothers',
      participants: [
        { name: 'Elena', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ElenaPregnancyCare', role: 'Spa Director' },
        { name: 'Mrs. Kensington', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KensingtonPregnancy', role: 'Expectant Mother' }
      ],
      lines: [
        { participant: 'Elena', text: "Good morning, Mrs. Kensington. We have prepared our premium ventilated garden suite for your appointment, ensuring an entirely fume-free environment during your third trimester.", translation: "Kính chào bà Kensington. Bên em đã chuẩn bị riêng phòng suite hướng vườn thông thoáng cho buổi làm đẹp hôm nay, đảm bảo không gian hoàn toàn không mùi hóa chất trong giai đoạn tam cá nguyệt thứ ba của bà ạ." },
        { participant: 'Mrs. Kensington', text: "Thank you, Elena. My lower back has been aching constantly, and my ankles are noticeably swollen today.", translation: "Cảm ơn cô Elena. Lưng dưới của tôi dạo này ê ẩm suốt, còn hai mắt cá chân hôm nay sưng phù thấy rõ." },
        { participant: 'Elena', text: "We have outfitted your chair with contoured memory-foam lumbar cushions and a warm footrest elevator. Furthermore, our pedicurist is certified in prenatal care and will bypass all reflexology trigger points around the Achilles tendon.", translation: "Dạ bên em đã lót sẵn gối tựa thắt lưng cao su non êm ái và bục nâng đỡ chân thư giãn ạ. Ngoài ra, chuyên viên bên em đã có chứng chỉ chăm sóc mẹ bầu, sẽ tránh hoàn toàn các huyệt đạo nhạy cảm xung quanh gân gót chân ạ." },
        { participant: 'Mrs. Kensington', text: "That level of medical awareness and specialized comfort is why I refuse to go anywhere else.", translation: "Sự thấu hiểu y khoa và chăm sóc tận tâm đến mức này chính là lý do tôi không bao giờ chọn nơi nào khác." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Caring for an Elderly Client with Trembling Hands & Delicate Skin',
      participants: [
        { name: 'Chloe', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ChloeElderCare', role: 'Nail Technician' },
        { name: 'Mrs. Gable', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=GableElderly', role: 'Elderly Client' }
      ],
      lines: [
        { participant: 'Chloe', text: "Take your time walking over, Mrs. Gable! Let me hold your arm and help you step up onto the pedicure platform slowly.", translation: "Bà Gable cứ thong thả bước ạ! Để con đỡ tay dìu bà bước lên bục ngâm chân từ từ nhé." },
        { participant: 'Mrs. Gable', text: "Thank you, sweetie. My arthritis acts up so badly when it rains, and my hands shake a little bit.", translation: "Cảm ơn cháu gái ngoan nhé. Mỗi khi trời mưa là khớp của bà lại nhức buốt ghê lắm, tay bà cũng hơi run run một tí." },
        { participant: 'Chloe', text: "Please don't worry about any trembling at all! I will rest your hand gently on a warm towel and use a soft sponge buffer so nothing ever pulls on your delicate skin. How does the water temperature feel on your feet?", translation: "Bà đừng bận tâm chuyện tay run nha bà ơi! Con sẽ đặt tay bà êm ái trên khăn ấm và chỉ dùng phao xốp mềm nhẹ nhất để không làm trầy da mỏng của bà đâu ạ. Nước ngâm chân ấm vừa ý bà chưa ạ?" },
        { participant: 'Mrs. Gable', text: "The warm water feels like a warm hug on my tired knees. You have the gentlest touch, Chloe.", translation: "Nước ấm ngâm chân dễ chịu như có người ôm lấy đôi đầu gối mỏi nhừ của bà vậy. Cháu làm lúc nào cũng nhẹ nhàng và khéo léo nhất." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Fast Cushion & Low-Fume Setup for Mom-to-Be',
      participants: [
        { name: 'Mia', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MiaPregText', role: 'Tech' },
        { name: 'Jess', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JessPregText', role: 'Pregnant Client' }
      ],
      lines: [
        { participant: 'Mia', text: "Extra lumbar pillow and water by chair 4 for you, Jess!", translation: "Gối tựa lưng êm ái với ly nước sẵn sàng ở ghế 4 cho mẹ bầu Jess nha!" },
        { participant: 'Jess', text: "Lifesaver! Baby's pressing right on my spine today.", translation: "Cứu tinh đời tớ! Em bé hôm nay đạp thúc vào cột sống ê ẩm ghê luôn." },
        { participant: 'Mia', text: "Desk fan on low fresh air, zero acetone smell!", translation: "Bật quạt thổi khí tươi mát rượi, cam kết không dính một tí mùi acetone!" },
        { participant: 'Jess', text: "Best tech ever, sitting down now!", translation: "Thợ làm móng có tâm nhất hệ mặt trời, tớ ngồi xuống liền đây!" }
      ]
    }
  ],

  'beauty-15': [
    {
      type: 'pair',
      school: 'business',
      title: 'Managing Peak Walk-in Inquiries against Prioritized Bookings',
      participants: [
        { name: 'Giselle', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=GiselleConciergeWalkin', role: 'Salon Manager' },
        { name: 'Mr. Sterling', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SterlingWalkinGuest', role: 'Walk-in Client' }
      ],
      lines: [
        { participant: 'Mr. Sterling', text: "Good afternoon. I do not have a prior booking, but I require an immediate executive manicure before my 3:00 PM boardroom presentation.", translation: "Xin chào cô. Tôi chưa đặt lịch trước, nhưng tôi cần làm dịch vụ chăm sóc móng nam gấp trước buổi thuyết trình hội đồng quản trị lúc 3 giờ chiều." },
        { participant: 'Giselle', text: "Good afternoon, sir. We welcome walk-in guests; however, all our stations are currently occupied with reserved clients who have prioritized scheduling.", translation: "Kính chào quý khách. Salon bên em rất hân hạnh đón tiếp khách vãng lai; tuy nhiên hiện tại tất cả các bàn đều đang phục vụ khách đã đặt hẹn trước theo đúng khung giờ ưu tiên ạ." },
        { participant: 'Mr. Sterling', text: "Can you not squeeze me in? I am willing to pay an expedite surcharge.", translation: "Cô không thể linh động chen ngang cho tôi được sao? Tôi sẵn sàng trả thêm phụ phí dịch vụ gấp." },
        { participant: 'Giselle', text: "To protect service excellence, we never compromise a scheduled guest's timeline. However, our master technician has a thirty-minute window opening at precisely 2:15 PM. May I reserve that slot for you while you enjoy an espresso in our private lounge?", translation: "Dạ để giữ trọn vẹn chất lượng dịch vụ, bên em tuyệt đối không cắt bớt thời gian của khách đã đặt trước ạ. Tuy nhiên, đúng 2 giờ 15 phút chuyên viên bên em sẽ trống một khoảng 30 phút. Em xin phép giữ ngay suất đó cho anh trong khi mời anh dùng cà phê espresso tại phòng chờ được không ạ?" },
        { participant: 'Mr. Sterling', text: "That is fair and professional. I will take the 2:15 PM slot.", translation: "Cách làm việc rất công bằng và chuyên nghiệp. Tôi sẽ lấy khung giờ 2 giờ 15 phút đó." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Fitting a Walk-in Client into a Squeezed Cancellation Slot',
      participants: [
        { name: 'Lan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LanFrontDeskWalkin', role: 'Receptionist' },
        { name: 'Amanda', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AmandaWalkinLady', role: 'Walk-in Client' }
      ],
      lines: [
        { participant: 'Amanda', text: "Hi! I know it's a busy Saturday, but is there any chance you have room for a walk-in gel manicure right now?", translation: "Chào bạn! Mình biết thứ Bảy tiệm rất đông, nhưng không biết bên bạn có thể nhận khách vãng lai làm bộ móng gel ngay bây giờ không nhỉ?" },
        { participant: 'Lan', text: "Hi Amanda! Saturdays are fully booked by appointment, so usually walk-ins have a 45-minute wait. But guess what? A client just called to reschedule her 1:15 appointment!", translation: "Chào bạn Amanda! Thứ Bảy bên mình thường kín lịch đặt trước nên khách ghé đột xuất phải chờ tầm 45 phút. Nhưng may quá chừng, vừa có một chị khách gọi điện xin dời lịch hẹn 1 giờ 15 sang ngày mai nè!" },
        { participant: 'Amanda', text: "Oh, that is amazing luck! Can I take her spot?", translation: "Ôi may mắn quá trời luôn! Cho mình trám vào chỗ đó được không bạn?" },
        { participant: 'Lan', text: "Absolutely! Chair number 2 with Chloe is sanitizing right now. Pick your color swatch and have a seat in two minutes!", translation: "Được luôn bạn ơi! Ghế số 2 của chị Chloe đang tiệt trùng dụng cụ. Bạn chọn màu sơn rồi hai phút nữa vào ghế luôn nha!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Fast Walk-in Time Check at Register',
      participants: [
        { name: 'Vee', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=VeeFrontDeskQuick', role: 'Tech' },
        { name: 'Chloe', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ChloeQuickWalkin', role: 'Walk-in Client' }
      ],
      lines: [
        { participant: 'Chloe', text: "Any quick walk-in slot for pedi right now?", translation: "Bên mình còn ghế trống làm móng chân vãng lai liền không bạn?" },
        { participant: 'Vee', text: "Next opening's at 2:30! Can you wait fifteen mins?", translation: "Ca tiếp theo trống lúc 2 rưỡi nha! Bạn đợi tầm 15 phút được không?" },
        { participant: 'Chloe', text: "Grabbing a milk tea next door, hold chair for me!", translation: "Để mình chạy qua tiệm bên cạnh mua ly trà sữa, giữ ghế giúp mình nhé!" },
        { participant: 'Vee', text: "Got your name down, see you at 2:30!", translation: "Ghi tên bạn rồi nha, 2 rưỡi gặp lại!" }
      ]
    }
  ],

  'beauty-16': [
    {
      type: 'pair',
      school: 'business',
      title: 'Lookbook Photography Permission & Cordial Yelp Testimonial Request',
      participants: [
        { name: 'Julian', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JulianPhotoManager', role: 'Creative Director' },
        { name: 'Madeline', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MadelineClientPhoto', role: 'Client' }
      ],
      lines: [
        { participant: 'Julian', text: "Madeline, your completed chrome ombre set with French encapsulation turned out breathtaking. With your permission, our salon would love to photograph your hands under studio lighting for our bridal lookbook.", translation: "Thưa chị Madeline, bộ móng chuyển màu chrome ombre viền French ẩn của chị hoàn thiện đẹp xuất sắc ạ. Nếu được sự cho phép của chị, bên em rất mong được chụp hình đôi bàn tay chị dưới ánh đèn studio để lưu vào bộ sưu tập mẫu cô dâu của salon ạ." },
        { participant: 'Madeline', text: "I would be honored! The hand-painted lace detail is truly a work of art.", translation: "Tôi rất sẵn lòng! Chi tiết hoa ren vẽ tay này thực sự là một tác phẩm nghệ thuật tuyệt vời." },
        { participant: 'Julian', text: "Please hold this silk camellia blossom lightly in your palm. Perfect! Furthermore, if you enjoyed your pampering experience, sharing a few words and tagging our master artist Bao on Yelp or Google means the world to our independent team.", translation: "Chị vui lòng khẽ ôm bông hoa trà lụa này trong lòng bàn tay nhé. Xuất sắc luôn ạ! Ngoài ra, nếu chị hài lòng với trải nghiệm hôm nay, một vài dòng cảm nhận kèm nhắc tên Master Bao trên Yelp hoặc Google sẽ là nguồn động viên to lớn cho cả đội ngũ bên em ạ." },
        { participant: 'Madeline', text: "I will gladly post a glowing five-star review with photos as soon as I get home.", translation: "Về đến nhà tôi sẽ đăng bài đánh giá 5 sao kèm hình ảnh thật đẹp ngay." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Aesthetic Ring-Light Photo Pose & Gentle 5-Star Yelp Prompt',
      participants: [
        { name: 'Bao', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BaoPhotoArtist', role: 'Nail Artist' },
        { name: 'Brianna', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BriannaGlamour', role: 'Client' }
      ],
      lines: [
        { participant: 'Bao', text: "Brianna, this chrome cat-eye finish is insane! You have to let me take a video under the ring light for our Instagram page!", translation: "Brianna ơi, ánh mắt mèo tráng gương này nhìn đỉnh chóp luôn á! Cho mình xin phép quay một đoạn video dưới đèn vòng ring light để đăng lên Instagram tiệm nha!" },
        { participant: 'Brianna', text: "Yesss, please! Hand me a cute prop, my hands look so snatched!", translation: "Dạ được chứ anh ơi! Đưa em cầm đạo cụ gì xinh xinh đi, tay em lên hình nhìn mê ly luôn!" },
        { participant: 'Bao', text: "Hold this designer perfume bottle with your fingers relaxed. Wow, look at that velvet shimmer! If you tag @BlossomNails on your story and drop a 5-star review on Yelp mentioning my name, you get $5 off your next set!", translation: "Em cầm nhẹ chai nước hoa hàng hiệu này, thả lỏng ngón tay ra nhé. Wow, nhìn ánh nhũ nhung lấp lánh chưa kìa! Nếu em tag @BlossomNails lên story và để lại đánh giá 5 sao trên Yelp kèm tên anh, lần sau em được giảm ngay 5 đô luôn nha!" },
        { participant: 'Brianna', text: "Writing the Yelp review right this second! You totally deserve five stars!", translation: "Em mở Yelp ra chấm 5 sao viết review ngay và luôn đây! Tay nghề anh xứng đáng điểm 10 luôn á!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Ring-Light Snap & Story Tag Ping',
      participants: [
        { name: 'Tina', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TinaSnap', role: 'Tech' },
        { name: 'Sam', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SamAesthetic', role: 'Client' }
      ],
      lines: [
        { participant: 'Tina', text: "Cross thumbs under the ring light, Sam! Snapping a quick shot!", translation: "Bắt chéo hai ngón cái dưới đèn tròn nè Sam ơi! Bấm nhanh một tấm ảnh nha!" },
        { participant: 'Sam', text: "Lighting is chefs kiss! Tag me on TikTok!", translation: "Ánh sáng đỉnh chóp luôn! Đăng TikTok nhớ tag tớ vào nha!" },
        { participant: 'Tina', text: "Drop a 5-star Google review if you love the set!", translation: "Chấm 5 sao trên Google ủng hộ tiệm nếu mê bộ móng này nha bạn!" },
        { participant: 'Sam', text: "Already on it, 5 stars all day!", translation: "Đang viết luôn nè, 5 sao chất lượng!" }
      ]
    }
  ],

  'beauty-17': [
    {
      type: 'pair',
      school: 'business',
      title: 'Reserving an Executive Nail Art Consultation over the Phone',
      participants: [
        { name: 'Adeline', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AdelinePhoneConcierge', role: 'Salon Receptionist' },
        { name: 'Ms. Thornton', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ThorntonClientCall', role: 'Client Calling In' }
      ],
      lines: [
        { participant: 'Adeline', text: "Good morning, Opaline Sanctuary. Adeline speaking, how may I assist your beauty booking today?", translation: "Kính chào quý khách, Opaline Sanctuary xin nghe. Em là Adeline, em có thể hỗ trợ quý khách đặt lịch làm đẹp như thế nào ạ?" },
        { participant: 'Ms. Thornton', text: "Good morning. I would like to schedule an appointment with your senior master, Danny, for this coming Thursday afternoon around 3:30 PM.", translation: "Chào cô. Tôi muốn đặt một lịch hẹn với Master Danny vào chiều thứ Năm tuần này tầm 3 giờ 30 chiều." },
        { participant: 'Adeline', text: "Master Danny has an opening at 3:45 PM on Thursday. What specific services will we be preparing for you?", translation: "Dạ thứ Năm Master Danny có lịch trống lúc 3 giờ 45 chiều ạ. Quý khách dự định làm những dịch vụ cụ thể nào để bên em chuẩn bị chu đáo ạ?" },
        { participant: 'Ms. Thornton', text: "I require an acrylic removal followed by a structured hard-gel overlay with customized French micro-art. I understand this requires approximately two hours.", translation: "Tôi cần tháo lớp móng bột cũ, sau đó đắp gel cứng định hình và vẽ viền French micro nghệ thuật. Tôi hiểu liệu trình này sẽ kéo dài khoảng hai tiếng đúng không cô." },
        { participant: 'Adeline', text: "Precisely two hours. We will block out 3:45 to 5:45 PM exclusively for you. May I take your credit card number to finalize the standard twenty-dollar reservation deposit?", translation: "Dạ chính xác là hai tiếng ạ. Bên em sẽ giữ trọn khung giờ từ 3:45 đến 5:45 chiều dành riêng cho chị. Em xin phép nhận số thẻ thanh toán để xác nhận khoản đặt cọc 20 đô theo quy định của tiệm được không ạ?" }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Calling to Book a Friday Slot & Checking Nail Art Add-ons',
      participants: [
        { name: 'Vy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=VyPhoneTech', role: 'Technician' },
        { name: 'Hannah', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HannahCaller', role: 'Client Calling' }
      ],
      lines: [
        { participant: 'Hannah', text: "Hi there! I'm hoping to book a gel pedicure and a full set of acrylics for this Friday after work, maybe around 5:30 PM?", translation: "Chào bạn! Mình muốn đặt lịch làm móng chân gel với đắp một bộ móng bột mới vào chiều thứ Sáu sau giờ làm, tầm 5 giờ rưỡi chiều có được không bạn?" },
        { participant: 'Vy', text: "Hi Hannah! Let me check the book. 5:30 PM is booked solid, but I have 4:45 PM or 6:15 PM open with Kelly. Would either of those work with your commute?", translation: "Chào bạn Hannah! Để mình xem sổ hẹn nhé. 5 rưỡi thì kín khách mất rồi, nhưng mình còn trống ca lúc 4 giờ 45 hoặc 6 giờ 15 với bạn Kelly nè. Giờ đó có tiện đường bạn đi làm về không?" },
        { participant: 'Hannah', text: "6:15 PM is actually even better, no need to rush! Also, I want to add chrome powder and two accent gems. Does Kelly do nail art?", translation: "6 giờ 15 thực ra còn tiện hơn nữa, khỏi sợ kẹt xe vội vàng! Với cả mình muốn chà thêm bột tráng gương chrome và đính hai hạt đá điểm xuyết. Bạn Kelly vẽ móng nghệ thuật tốt không bạn?" },
        { participant: 'Vy', text: "Kelly is a chrome wizard, you're in great hands! I've booked you for 6:15 PM this Friday for gel pedi and full set with art.", translation: "Kelly là phù thủy tráng gương luôn đó, bạn cứ yên tâm trao gửi bàn tay nha! Mình đã chốt lịch cho bạn lúc 6h15 thứ Sáu này làm móng chân gel và bộ móng bột đính đá nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Fast Booking Text to Nail Tech',
      participants: [
        { name: 'Linh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LinhBookingDM', role: 'Tech' },
        { name: 'Chloe', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ChloeBookingDM', role: 'Client' }
      ],
      lines: [
        { participant: 'Chloe', text: "Hey Linh! Any slots open Friday after 4 for a gel fill?", translation: "Linh ơi! Chiều thứ Sáu sau 4h có trống ca nào làm dặm gel không?" },
        { participant: 'Linh', text: "Got 4:30 PM with your name on it! French or solid color?", translation: "Còn đúng ca 4h30 dành riêng cho bạn nè! Làm French hay sơn màu trơn?" },
        { participant: 'Chloe', text: "Solid burgundy! Book me in, sending $15 Venmo deposit now.", translation: "Màu đỏ rượu vang trơn nha! Chốt lịch giùm tớ, tớ chuyển cọc 15 đô qua Venmo liền." },
        { participant: 'Linh', text: "Received and locked in! See you Friday at 4:30!", translation: "Nhận cọc rồi nha, hẹn bạn 4h30 thứ Sáu!" }
      ]
    }
  ],

  'beauty-18': [
    {
      type: 'pair',
      school: 'business',
      title: 'Specifying Hypoallergenic Formulations & Understated Aesthetics',
      participants: [
        { name: 'Julianne', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JulianneClientWants', role: 'Executive Client' },
        { name: 'Chloe', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ChloeMasterWants', role: 'Master Nail Stylist' }
      ],
      lines: [
        { participant: 'Julianne', text: "Chloe, before we proceed, I want to clarify my personal sensitivities: I have a proven dermatological allergy to HEMA monomers, and I strongly dislike pungent chemical odors.", translation: "Chloe này, trước khi tiến hành, tôi muốn nêu rõ cơ địa nhạy cảm của mình: tôi đã được bác sĩ da liễu xác nhận dị ứng với hoạt chất HEMA trong sơn gel, và tôi rất khó chịu với mùi hóa chất nồng nặc." },
        { participant: 'Chloe', text: "Thank you for advising me, Julianne. We have dedicated HEMA-free, 10-Free hypoallergenic gel formulations specifically for sensitive clients, and our extraction filters eliminate all airborne vapors.", translation: "Dạ rất cảm ơn chị Julianne đã dặn trước ạ. Tiệm em có sẵn dòng sản phẩm gel hữu cơ không chứa HEMA, đạt chuẩn lành tính 10-Free dành riêng cho khách có cơ địa mẫn cảm, và máy hút mùi sẽ khử sạch toàn bộ hơi dung môi ạ." },
        { participant: 'Julianne', text: "Wonderful. Furthermore, regarding aesthetic preference, I work in corporate finance, so I require a short, understated squoval silhouette in a translucent neutral pink. No exaggerated length or excessive embellishment.", translation: "Tuyệt vời. Ngoài ra về sở thích thẩm mỹ, tôi làm việc trong ngành tài chính doanh nghiệp nên chỉ cần phom móng vuông bầu ngắn tự nhiên, màu hồng thạch bán trong suốt trang nhã. Tuyệt đối không làm móng quá dài hay đính đá cầu kỳ nhé." },
        { participant: 'Chloe', text: "Understood completely. Understated elegance with maximum dermatological safety will be our guiding principle for your set.", translation: "Dạ em hiểu trọn vẹn ý chị rồi ạ. Vẻ đẹp thanh lịch tinh tế đi đôi với sự an toàn tuyệt đối cho làn da sẽ là tiêu chuẩn số một cho bộ móng của chị." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Explaining Sensitive Skin & Requesting Short Practical Almond Shape',
      participants: [
        { name: 'Nga', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NgaTechPreferences', role: 'Nail Technician' },
        { name: 'Kendra', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KendraClientPreferences', role: 'Client' }
      ],
      lines: [
        { participant: 'Kendra', text: "Hey Nga! Before you start filing, I just want to mention that I'm a dental hygienist, so I wear tight latex gloves all day. I need my nails kept super short so they don't tear my gloves!", translation: "Nga ơi! Trước khi bạn giũa móng, mình xin dặn trước là mình làm nha tá nên cả ngày phải đeo găng tay cao su y tế bó sát. Bạn làm móng thật ngắn giúp mình để không bị rách găng nhé!" },
        { participant: 'Nga', text: "Good to know, Kendra! How about a soft, rounded almond that aligns perfectly with your fingertip cushion?", translation: "Hay quá bạn dặn kịp lúc nè Kendra! Vậy mình bo tròn dáng hạnh nhân mềm mại vừa khít bằng đầu ngón tay bạn nhé?" },
        { participant: 'Kendra', text: "That sounds ideal! Also, my skin flares up if acetone touches my cuticles too long. Can you use foil wraps instead of dipping my whole fingers in a bowl?", translation: "Nghe hợp lý quá chừng! Ngoài ra da mình rất dễ bị kích ứng mẩn đỏ nếu ngâm acetone lâu. Bạn ủ móng bằng giấy bạc giùm mình thay vì ngâm cả bàn tay vào tô nước tháo được không?" },
        { participant: 'Nga', text: "100%! Foil wraps with cotton pads keep the acetone strictly on the nail plate without soaking your surrounding skin. I'll take extra good care of you!", translation: "100% nhất trí luôn! Quấn giấy bạc kẹp bông gòn sẽ giữ dung dịch đúng trên bề mặt móng mà không làm ngấm vào vùng da xung quanh. Bạn cứ yên tâm để mình chăm sóc chu đáo nhé!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Fast Allergy & Short Nail Preference Ping',
      participants: [
        { name: 'Mai', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MaiAllergyText', role: 'Tech' },
        { name: 'Taylor', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TaylorShortNails', role: 'Client' }
      ],
      lines: [
        { participant: 'Taylor', text: "Mai! Need super short natural square today, typing all week!", translation: "Mai ơi! Hôm nay làm móng vuông tự nhiên ngắn cũn giùm tớ nha, tuần này gõ máy tính tối mặt!" },
        { participant: 'Mai', text: "Short and sporty, got it! Still doing the low-tox nude?", translation: "Ngắn gọn thể thao, hiểu bài liền! Vẫn dùng sơn nude hữu cơ lành tính chứ?" },
        { participant: 'Taylor', text: "Yes please, my sensitive cuticles love that gentle formula.", translation: "Chuẩn luôn, da khóe nhạy cảm của tớ chỉ ưng mỗi loại êm dịu đó thôi." },
        { participant: 'Mai', text: "Bottle prepped and ready for you!", translation: "Chai sơn đã sẵn sàng trên bàn cho bạn rồi nha!" }
      ]
    }
  ],

  'beauty-19': [
    {
      type: 'pair',
      school: 'business',
      title: 'Diplomatic Real-Time Symmetry Adjustment during Enhancement Sculpting',
      participants: [
        { name: 'Charlotte', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CharlotteVIPAdjust', role: 'VIP Client' },
        { name: 'Julian', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JulianMasterAdjust', role: 'Master Nail Artist' }
      ],
      lines: [
        { participant: 'Charlotte', text: "Pardon me, Julian, before you place my left hand under the UV lamp: observing the side profile, the structural apex on the ring finger appears slightly higher than the middle finger.", translation: "Xin lỗi anh Julian một chút, trước khi đưa tay trái vào đèn hơ UV: tôi ngắm góc nghiêng thì thấy điểm uốn chịu lực (apex) ở ngón đeo nhẫn có vẻ hơi gồ cao hơn so với ngón giữa." },
        { participant: 'Julian', text: "Thank you for alerting me immediately, Mrs. Charlotte. Let me examine the lateral arch at eye level. Yes, you have a very keen eye; there is a fractional surplus of builder gel near the stress zone.", translation: "Rất cảm ơn bà Charlotte đã nhắc em ngay lúc này ạ. Để em nâng ngang tầm mắt kiểm tra vòm cong bên sườn móng. Dạ đúng rồi, mắt bà nhìn chuẩn xác quá ạ; ở vùng chịu lực đang hơi dư một lượng gel rất nhỏ." },
        { participant: 'Charlotte', text: "Could we feather that down smoothly so the contour matches the rest of the hand?", translation: "Anh có thể dùng cọ vuốt mỏng nhẹ bớt phần đó để đường cong đồng đều với các ngón khác được không?" },
        { participant: 'Julian', text: "Certainly. I will use a dry detailing brush to redistribute the resin before curing. Please inspect it now—is that curve completely balanced to your satisfaction?", translation: "Dạ chắc chắn rồi ạ. Em dùng cọ tỉa khô để vuốt đều lượng gel trước khi cho vào hơ đèn. Xin mời bà xem lại ạ—đường cong như vậy đã đạt độ cân đối hoàn hảo theo ý bà chưa ạ?" }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Politely Speaking Up to Straighten a Crooked Tip while Tech is Filing',
      participants: [
        { name: 'Jessica', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JessicaTweaks', role: 'Client' },
        { name: 'Vy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=VyTechTweaks', role: 'Technician' }
      ],
      lines: [
        { participant: 'Jessica', text: "Hey Vy, do you mind if I pause you for just a second? Looking down my pointer finger, the right corner seems to lean slightly tilted to the right.", translation: "Vy ơi, mình xin phép ngắt lời bạn một giây được không nè? Nhìn dọc theo ngón trỏ, mình thấy góc bên phải hơi bị xéo nghiêng về phía bên phải một tí xíu." },
        { participant: 'Vy', text: "Oh, please speak up anytime, Jessica! Flip your hand over towards you so we can view it from your natural vantage point. Which side needs taking in?", translation: "Ôi bạn cứ tự nhiên góp ý bất cứ lúc nào nha Jessica! Bạn lật bàn tay hướng về phía bạn để tụi mình cùng nhìn theo góc mắt hàng ngày của bạn nè. Cạnh bên nào cần dũa bớt bạn ơi?" },
        { participant: 'Jessica', text: "Just two light swipes on the outside edge right here, so it points straight down my knuckle.", translation: "Chỉ cần dũa nhẹ hai đường ở mép ngoài chỗ này thôi nè, để móng thẳng tắp theo khớp đốt ngón tay là đẹp." },
        { participant: 'Vy', text: "There you go—two light passes! How does that alignment look now?", translation: "Xong liền đây bạn—hai đường dũa êm ru! Nhìn lại xem đã thẳng tắp chưa bạn ơi?" },
        { participant: 'Jessica', text: "Much better! Thank you for being so receptive and sweet about it.", translation: "Thẳng đẹp hơn hẳn rồi! Cảm ơn bạn vì đã rất vui vẻ và nhiệt tình lắng nghe khách nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Fast Mid-Filing Tweak & Shape Check',
      participants: [
        { name: 'Danielle', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DanielleTweak', role: 'Client' },
        { name: 'Kylie', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KylieTechTweak', role: 'Tech' }
      ],
      lines: [
        { participant: 'Danielle', text: "Wait Kylie, can you round that left corner a tiny bit more?", translation: "Khoan đã Kylie ơi, bo tròn góc bên trái thêm tí xíu nữa được không?" },
        { participant: 'Kylie', text: "One file swipe right here—how's that?", translation: "Một đường dũa lướt qua chỗ này nè—thấy ưng chưa bạn?" },
        { participant: 'Danielle', text: "Yes! Perfectly even with the other thumb.", translation: "Chuẩn luôn! Đều tăm tắp với ngón cái bên kia rồi." },
        { participant: 'Kylie', text: "Love when you speak up! Top coat time.", translation: "Thích nhất là khách cứ góp ý thẳng thắn thế này! Lên nước bóng thôi." }
      ]
    }
  ],

  'beauty-20': [
    {
      type: 'pair',
      school: 'business',
      title: 'Assertive Warranty Dispute Resolution for Premature Lifting & Peeling',
      participants: [
        { name: 'Mrs. Kensington', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KensingtonComplaint', role: 'Executive Client' },
        { name: 'Tram', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TramManagerWarranty', role: 'Salon General Manager' }
      ],
      lines: [
        { participant: 'Mrs. Kensington', text: "Good morning. I had a full acrylic and gel overlay completed here seventy-two hours ago, and three fingers have developed noticeable lifting along the proximal fold. This is well within your stated 7-day guarantee.", translation: "Chào cô. Tôi vừa làm trọn bộ móng bột phủ gel tại đây 72 giờ trước, mà hiện tại ba ngón đã bị bong mép rõ rệt dọc theo chân móng. Tình trạng này hoàn toàn nằm trong chính sách bảo hành 7 ngày bằng văn bản của salon." },
        { participant: 'Tram', text: "Good morning, Mrs. Kensington. Please accept our apologies. Premature lifting on day three indicates an inadequate dehydrator prep, which falls squarely under our quality warranty.", translation: "Dạ kính chào bà Kensington. Em xin thành thật cáo lỗi cùng bà ạ. Móng bị bong mép vào ngày thứ ba chứng tỏ khâu khử dầu làm sạch bề mặt móng chưa đạt chuẩn, và trường hợp này hoàn toàn thuộc phạm vi bảo hành chất lượng của bên em ạ." },
        { participant: 'Mrs. Kensington', text: "I expect either a complete complimentary reapplication by a senior master or a full credit refund to my card.", translation: "Tôi yêu cầu một là chuyên viên cao cấp phải làm lại mới hoàn toàn miễn phí cho tôi, hai là hoàn lại toàn bộ số tiền vào thẻ của tôi." },
        { participant: 'Tram', text: "We will seat you immediately with our head artistic director, Michelle, to completely redo the affected nails at zero charge, and we have credited a thirty-dollar voucher to your account for the inconvenience.", translation: "Dạ ngay bây giờ em xin mời bà vào ghế để Giám đốc nghệ thuật Michelle trực tiếp làm lại mới hoàn toàn miễn phí các ngón bị bong, đồng thời bên em đã cộng thêm một voucher 30 đô vào tài khoản của bà để bù đắp sự phiền hà này ạ." },
        { participant: 'Mrs. Kensington', text: "That is an upright and highly professional resolution. Thank you, Tram.", translation: "Cách xử lý rất có trách nhiệm và vô cùng chuyên nghiệp. Cảm ơn cô Tram." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Politely Requesting a Quick Fix for Chipped Gel under Salon Redo Policy',
      participants: [
        { name: 'Amanda', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AmandaRedo', role: 'Client' },
        { name: 'Phuong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PhuongTechRedo', role: 'Nail Technician' }
      ],
      lines: [
        { participant: 'Amanda', text: "Hi Phuong! I had my nails done here on Wednesday, but yesterday while I was typing at work, the gel on my index finger chipped right off the corner. Your card says free fixes within five days, right?", translation: "Chào Phuong! Mình vừa làm móng ở đây hôm thứ Tư, mà hôm qua lúc đang gõ máy tính ở cơ quan thì lớp gel ở ngón trỏ bị mẻ mất một góc rồi. Trên danh thiếp của tiệm có ghi sửa miễn phí trong vòng 5 ngày đúng không bạn?" },
        { participant: 'Phuong', text: "Hi Amanda! Yes, absolutely! Within five days, any chip or lift is 100% covered and completely free. Did the natural nail break underneath?", translation: "Chào bạn Amanda! Dạ chuẩn luôn bạn ơi! Trong vòng 5 ngày mọi vết mẻ hay bong tróc đều được bảo hành 100% miễn phí hoàn toàn nha. Móng thật ở dưới có bị gãy dập gì không bạn?" },
        { participant: 'Amanda', text: "No, the nail plate is intact, just the polish peeled away.", translation: "May quá không, móng thật vẫn nguyên vẹn, chỉ có lớp sơn gel bị tróc góc thôi." },
        { participant: 'Phuong', text: "Great! Hop in my chair right now. I'll buff it, reapply base and color, and cure it double so it stays locked. It will take less than ten minutes!", translation: "Tuyệt vời! Bạn qua ghế mình ngồi liền nhé. Mình sẽ mài êm, sơn lại lớp lót với màu rồi hơ đèn kỹ gấp đôi để bám thật chắc. Chỉ mất chưa đầy 10 phút là xong ngay!" },
        { participant: 'Amanda', text: "Thank you so much, Phuong! I love that you guys stand by your work without any hassle.", translation: "Cảm ơn bạn Phuong nhiều nha! Mình rất thích việc tiệm luôn có trách nhiệm với dịch vụ mà không hề gây khó dễ gì cho khách." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Chipped Nail DM & Same-Day Redo',
      participants: [
        { name: 'Claire', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ClaireDMRedo', role: 'Client' },
        { name: 'Tina', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TinaTechFixRedo', role: 'Tech' }
      ],
      lines: [
        { participant: 'Claire', text: "Tina! Thumbnail chipped on day 2 opening a drawer! Free redo slot today?", translation: "Tina ơi! Móng ngón cái mới ngày thứ 2 mở ngăn kéo đã bị mẻ rồi! Hôm nay có ca nào ghé qua sửa miễn phí không bạn?" },
        { participant: 'Tina', text: "Omg so sorry! Free fix on the house, slide in at 4:15 between clients!", translation: "Trời ơi xin lỗi bạn nha! Bảo hành miễn phí hoàn toàn, 4h15 tranh thủ ghé qua tớ dặm lại liền!" },
        { participant: 'Claire', text: "Lifesaver, see you at 4:15!", translation: "Cứu tinh ơi, 4h15 tớ có mặt nhé!" },
        { participant: 'Tina', text: "Got the polish bottle ready!", translation: "Chuẩn bị sẵn chai sơn chờ bạn rồi nè!" }
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
