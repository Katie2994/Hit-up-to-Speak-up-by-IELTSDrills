// Distinct 3-tier Dialogues (Business/Formal, Casual, Super Casual) for Beauty Topics beauty-01 to beauty-10
// Guarantees authentic professional salon standards, realistic client chats, and crisp short communication.

import { Dialogue } from './comm-students-dialogues';

export const BEAUTY_DIALOGUES_PART1: Record<string, Dialogue[]> = {
  'beauty-01': [
    {
      type: 'pair',
      school: 'business',
      title: 'Reception Intake & Appointment Verification at Luxury Spa',
      participants: [
        { name: 'Elena', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ElenaSalon', role: 'Front Desk Host' },
        { name: 'Mrs. Kensington', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kensington', role: 'Client' }
      ],
      lines: [
        { participant: 'Elena', text: "Good morning, Mrs. Kensington. Welcome to Opaline Sanctuary. We have you reserved for a 90-minute restorative facial at 10:15.", translation: "Kính chào bà Kensington. Chào mừng bà đến với Opaline Sanctuary. Bên em đã đặt trước cho bà liệu trình phục hồi da mặt 90 phút vào lúc 10 giờ 15 ạ." },
        { participant: 'Mrs. Kensington', text: "Good morning. Yes, that is correct. May I store my trench coat and umbrella here?", translation: "Chào cô. Đúng rồi đấy. Tôi có thể gửi áo măng-tô và dù ở đây được không?" },
        { participant: 'Elena', text: "Certainly. Allow me to take those for you. Please slip into our complimentary slippers and have some warm infused water in the lounge while your esthetician prepares the suite.", translation: "Dạ chắc chắn rồi ạ. Để em hỗ trợ cất đồ cho bà. Xin mời bà đổi sang dép mềm của spa và dùng chút nước thảo mộc ấm tại phòng chờ trong khi chuyên viên chuẩn bị phòng ạ." },
        { participant: 'Mrs. Kensington', text: "Thank you, Elena. Your hospitality is always impeccable.", translation: "Cảm ơn cô, Elena. Dịch vụ đón tiếp bên cô lúc nào cũng thật chu đáo." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Welcoming a Walk-in Client to the Pedicure Chair',
      participants: [
        { name: 'Chloe', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ChloeTech', role: 'Nail Technician' },
        { name: 'Sarah', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SarahClient', role: 'Walk-in Client' }
      ],
      lines: [
        { participant: 'Chloe', text: "Hi there! Welcome to Blossom Nails. Do you have an appointment with us today, or are you walking in?", translation: "Chào bạn! Chào mừng bạn đến với Blossom Nails. Hôm nay bạn có đặt lịch trước chưa, hay là khách ghé vãng lai ạ?" },
        { participant: 'Sarah', text: "Hi! I don't have an appointment, but I'm hoping you have time for a quick gel pedicure?", translation: "Chào bạn! Mình chưa đặt lịch, không biết bên bạn có chỗ làm nhanh cho mình một bộ móng chân gel không nhỉ?" },
        { participant: 'Chloe', text: "You're in luck, we just had a chair open up! Let me take your jacket and bag. Have a seat right here, and tell me if the water temperature feels comfortable.", translation: "Bạn may mắn ghê, bên mình vừa trống một ghế đây! Để mình cất áo khoác với túi xách giùm bạn nhé. Bạn ngồi vào ghế này nha, nước ấm vừa chân chưa bạn ơi?" },
        { participant: 'Sarah', text: "The water feels heavenly after walking in the cold. Thank you so much!", translation: "Nước ấm dễ chịu quá chừng sau khi đi bộ ngoài trời lạnh. Cảm ơn bạn nhiều nhé!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Doorstep Check-in via SMS & Entry',
      participants: [
        { name: 'Mia', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MiaNails', role: 'Tech' },
        { name: 'Taylor', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TaylorReg', role: 'Regular Client' }
      ],
      lines: [
        { participant: 'Taylor', text: "Hey Mia! Just parked outside, heading in now.", translation: "Ê Mia ơi! Vừa đậu xe xong, tớ đang vào đây." },
        { participant: 'Mia', text: "Perfect! Chair 3 is all set up for you. Grab an iced tea from the fridge if you want!", translation: "Tuyệt vời! Ghế số 3 sẵn sàng rồi nha. Trong tủ lạnh có trà đá, cứ tự nhiên lấy nhé!" },
        { participant: 'Taylor', text: "Awesome, thanks! Need to take off this heavy coat first.", translation: "Hay quá, cảm ơn nha! Để cởi cái áo khoác dày này ra đã." },
        { participant: 'Mia', text: "Hang it by the door, hop in when you're ready!", translation: "Cứ treo ở cửa rồi vào ngồi nha!" }
      ]
    }
  ],

  'beauty-02': [
    {
      type: 'pair',
      school: 'business',
      title: 'Comprehensive Nail Shape & Longevity Consultation',
      participants: [
        { name: 'Victoria', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=VictoriaMaster', role: 'Senior Technician' },
        { name: 'Clara', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ClaraConsult', role: 'Corporate Client' }
      ],
      lines: [
        { participant: 'Victoria', text: "Good afternoon, Clara. Looking at your consultation sheet, you mentioned wanting an elegant look that withstands frequent keyboard typing.", translation: "Chào chị Clara. Theo phiếu tư vấn, chị mong muốn một kiểu móng thanh lịch nhưng phải chịu được việc gõ bàn phím thường xuyên đúng không ạ?" },
        { participant: 'Clara', text: "Yes, exactly. I love long almond shapes, but they tend to chip at my office desk within days.", translation: "Đúng vậy. Tôi rất thích dáng móng hạnh nhân dài, nhưng cứ làm việc văn phòng vài hôm là đầu móng lại bị mẻ." },
        { participant: 'Victoria', text: "In that case, I recommend a medium squoval shape with structured builder gel. It reinforces your natural stress points while preserving a sleek silhouette.", translation: "Nếu vậy, em khuyên chị nên chọn dáng vuông bầu (squoval) độ dài vừa phải kết hợp đắp gel gia cố. Cách này bảo vệ tối đa các điểm chịu lực mà vẫn giữ được nét thanh thoát." },
        { participant: 'Clara', text: "That sounds like the ideal compromise between aesthetics and durability. Let's proceed with that.", translation: "Nghe rất hợp lý, vừa đẹp lại vừa bền. Chúng ta làm theo phương án đó nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Helping an Indecisive Customer Pick Between Shades',
      participants: [
        { name: 'Thuy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ThuyBeauty', role: 'Technician' },
        { name: 'Amber', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AmberClient', role: 'Client' }
      ],
      lines: [
        { participant: 'Thuy', text: "Here is our autumn color swatch ring, Amber! Have any shades caught your eye yet?", translation: "Bảng màu mùa thu đây nha Amber ơi! Bạn đã nghía được tông màu nào ưng ý chưa?" },
        { participant: 'Amber', text: "I'm so indecisive today! I can't choose between this muted mauve and the creamy terracotta.", translation: "Hôm nay mình phân vân quá! Cứ lưỡng lự mãi giữa màu tím khói nhạt này với màu cam đất kem." },
        { participant: 'Thuy', text: "Let's swatch both on two fingers so you can see them under natural salon lighting. The mauve is great for office wear, while terracotta gives a cozy, warm pop.", translation: "Để mình thử mỗi màu lên một ngón tay cho bạn xem dưới ánh sáng tự nhiên nhé. Tông tím khói rất hợp đi làm công sở, còn cam đất thì tạo cảm giác ấm áp, nổi bật hơn." },
        { participant: 'Amber', text: "Seeing them side-by-side makes it so much easier! The terracotta wins, hands down.", translation: "Để cạnh nhau thế này dễ chọn hơn hẳn! Mình chốt màu cam đất nhé, nhìn xinh quá." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Fast Choice on Story Inspiration',
      participants: [
        { name: 'Kelly', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KellyTech', role: 'Tech' },
        { name: 'Zoe', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ZoeClient', role: 'Client' }
      ],
      lines: [
        { participant: 'Zoe', text: "Kelly, milky white chrome or glazed donut? I can't decide!", translation: "Kelly ơi, trắng sữa tráng gương hay kiểu bóng glazed donut đây? Không biết chọn cái nào!" },
        { participant: 'Kelly', text: "Glazed donut on almond nails! You'll love it, trust me.", translation: "Glazed donut trên phom móng hạnh nhân nha! Đảm bảo mê luôn, tin tớ đi." },
        { participant: 'Zoe', text: "Done! Glazed donut it is.", translation: "Chốt luôn! Làm glazed donut nha." },
        { participant: 'Kelly', text: "Base coat going on now!", translation: "Sơn lót ngay đây!" }
      ]
    }
  ],

  'beauty-03': [
    {
      type: 'pair',
      school: 'business',
      title: 'Culturally Sensitive Consultation for Hypersensitive Skin',
      participants: [
        { name: 'Genevieve', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=GenevieveDerm', role: 'Lead Esthetician' },
        { name: 'Amina', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AminaClient', role: 'Client' }
      ],
      lines: [
        { participant: 'Genevieve', text: "Good morning, Amina. Before we begin your facial, I would like to review any ingredient sensitivities or cultural preferences you may have.", translation: "Chào cô Amina. Trước khi bắt đầu liệu trình chăm sóc da mặt, tôi muốn kiểm tra kỹ các thành phần cô dễ bị kích ứng hoặc các yêu cầu đặc thù của cô ạ." },
        { participant: 'Amina', text: "Thank you for asking. I follow halal skincare standards and have melanin-rich skin that scars easily from harsh chemical peels.", translation: "Cảm ơn cô đã hỏi. Tôi ưu tiên các sản phẩm đạt tiêu chuẩn thuần chay/halal và làn da giàu sắc tố melanin của tôi rất dễ thâm nếu dùng hóa chất lột tẩy quá mạnh." },
        { participant: 'Genevieve', text: "We have certified alcohol-free, plant-based formulations specifically curated for hyperpigmentation-prone complexions. We will strictly avoid aggressive AHA percentages.", translation: "Bên em có sẵn dòng sản phẩm thuần thực vật không cồn, được đặc chế cho làn da dễ tăng sắc tố. Em sẽ tuyệt đối không dùng AHA nồng độ cao ạ." },
        { participant: 'Amina', text: "I deeply appreciate your respectful and knowledgeable approach. I feel very safe in your care.", translation: "Tôi rất trân trọng sự thấu hiểu và chu đáo của cô. Tôi cảm thấy rất yên tâm." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Recommending Complimenting Tones for Warm Undertones',
      participants: [
        { name: 'Hannah', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HannahNail', role: 'Nail Artist' },
        { name: 'Leila', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LeilaWarm', role: 'Client' }
      ],
      lines: [
        { participant: 'Hannah', text: "Leila, with your golden sun-kissed skin tone, cool chalky pinks tend to look a little washed out.", translation: "Leila ơi, với làn da tông ấm rám nắng của bạn, màu hồng phấn lạnh nhìn sẽ hơi bị bợt da một chút đó." },
        { participant: 'Leila', text: "I noticed that last time! What color palette would bring out my natural glow?", translation: "Lần trước mình cũng thấy thế! Vậy tông màu nào sẽ tôn da mình sáng đẹp nhất nhỉ?" },
        { participant: 'Hannah', text: "Deep emerald green, rich wine burgundy, or a soft warm nude with caramel undertones would look stunning on you.", translation: "Xanh ngọc lục bảo thẫm, đỏ rượu vang quý phái, hoặc màu nude ấm ánh caramel sẽ cực kỳ tôn da của bạn luôn." },
        { participant: 'Leila', text: "Ooh, the burgundy swatch looks gorgeous against my hand! Let's do that one.", translation: "Uầy, màu đỏ rượu ướm lên tay nhìn sang thật sự! Mình làm màu này nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Fast Color Swap Suggestion',
      participants: [
        { name: 'Tammy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TammyTech', role: 'Tech' },
        { name: 'Priya', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PriyaClient', role: 'Client' }
      ],
      lines: [
        { participant: 'Priya', text: "Tammy, does this pastel yellow wash me out?", translation: "Tammy ơi, màu vàng nhạt này có làm xỉn da tớ không?" },
        { participant: 'Tammy', text: "A bit pale for you. Swap it for honey mustard or warm amber!", translation: "Hơi nhạt xíu. Đổi sang vàng mù tạt hoặc hổ phách ấm là bao xinh!" },
        { participant: 'Priya', text: "Love the amber idea. Let's go!", translation: "Mê màu hổ phách rồi đấy. Triển luôn!" },
        { participant: 'Tammy', text: "Grabbing bottle 42 right now.", translation: "Lấy chai số 42 ngay đây." }
      ]
    }
  ],

  'beauty-04': [
    {
      type: 'pair',
      school: 'business',
      title: 'Formal Nail Architecture & Apex Consultation',
      participants: [
        { name: 'Chloe', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ChloeMasterForm', role: 'Master Stylist' },
        { name: 'Victoria', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=VictoriaClientForm', role: 'Executive Client' }
      ],
      lines: [
        { participant: 'Chloe', text: "Victoria, before we apply the hard gel overlay, let us confirm your desired shape and structural apex. Were you envisioning a classic tapered almond or a refined medium coffin?", translation: "Thưa chị Victoria, trước khi đắp lớp gel cứng gia cố, em xin xác nhận lại phom dáng móng và điểm uốn chịu lực (apex) theo đúng ý chị ạ. Chị đang hướng tới dáng hạnh nhân thon cổ điển hay dáng coffin (thang) vừa vặn thanh lịch ạ?" },
        { participant: 'Victoria', text: "I prefer a tapered almond, but keep the free edge no more than three millimeters past the fingertip so I can type efficiently.", translation: "Tôi thích dáng hạnh nhân thon gọn, nhưng giữ phần đầu móng vươn ra không quá 3 milimet khỏi đầu ngón tay để tôi gõ bàn phím thuận tiện nhé." },
        { participant: 'Chloe', text: "Understood. I have shaped your left index finger as a master reference. Please inspect the taper angle and side-wall symmetry under the desk lamp.", translation: "Dạ em hiểu rồi ạ. Em vừa giũa xong ngón trỏ tay trái làm phom chuẩn mẫu. Xin mời chị kiểm tra góc vuốt thon và độ cân xứng hai bên khóe dưới đèn bàn ạ." },
        { participant: 'Victoria', text: "The curve and balance are flawless. Please replicate this exact form across all remaining fingers.", translation: "Đường cong và sự cân đối rất hoàn hảo. Cô cứ làm theo đúng phom chuẩn này cho các ngón còn lại nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Confirming Desired Form with Pinterest Photo Proof',
      participants: [
        { name: 'Vy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=VyTechForm', role: 'Nail Technician' },
        { name: 'Rachel', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=RachelClientForm', role: 'Client' }
      ],
      lines: [
        { participant: 'Vy', text: "Rachel, I see the Pinterest photo on your phone shows a sharp coffin shape, but your natural nails are currently rounded. Are we using extensions today to achieve that sharp edge?", translation: "Rachel ơi, mình thấy tấm hình trên Pinterest trong điện thoại bạn là phom thang coffin góc cạnh, mà móng thật của bạn hiện đang tròn. Hôm nay tụi mình nối móng tip để tạo cạnh sắc chuẩn như hình nha?" },
        { participant: 'Rachel', text: "Yes, exactly! Medium-length coffin extensions, but please don't make them too wide or bulky.", translation: "Chuẩn luôn bạn ơi! Nối móng dáng thang độ dài vừa phải, nhưng đừng làm to bè hay dày cộm quá nhé." },
        { participant: 'Vy', text: "I'll taper the sidewalls slenderly. Take a look at this first finger: does this width and length feel comfortable when you pretend to text on your phone?", translation: "Mình sẽ vuốt thon gọn hai bên hông móng lại. Bạn xem ngón đầu tiên này nhé: độ rộng với chiều dài này bạn thử bấm điện thoại xem có thoải mái không nè?" },
        { participant: 'Rachel', text: "That is spot-on! Super sleek and not clunky at all. Let's do all ten like this!", translation: "Chuẩn chỉnh luôn á! Nhìn thanh mảnh cực kỳ chứ không bị thô tí nào. Triển khai cả mười ngón y như vầy nha!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Thumb Length & Shape Check',
      participants: [
        { name: 'Jen', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JenNailForm', role: 'Tech' },
        { name: 'Mia', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MiaShortForm', role: 'Client' }
      ],
      lines: [
        { participant: 'Jen', text: "Compare both thumbs, length look even to you?", translation: "Ướm thử hai ngón cái xem độ dài đều chưa nào?" },
        { participant: 'Mia', text: "Right one's a millimeter longer, file it down a tiny bit?", translation: "Bên phải dài hơn tầm một li, dũa bớt tí xíu nha?" },
        { participant: 'Jen', text: "Two quick swipes—check it now!", translation: "Hai đường dũa xong ngay—so lại xem nào!" },
        { participant: 'Mia', text: "Perfect match! Coffin corners look crisp.", translation: "Khít khìn khịt luôn! Góc phom thang nhìn nét căng rồi." }
      ]
    }
  ],

  'beauty-05': [
    {
      type: 'pair',
      school: 'business',
      title: 'Clinical Sensation Advisory & E-File Thermal Management',
      participants: [
        { name: 'Nurse Rachel', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=RachelNurseSensations', role: 'Medical Aesthetician' },
        { name: 'David', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DavidLaserSensations', role: 'Clinical Client' }
      ],
      lines: [
        { participant: 'Rachel', text: "David, as I begin removing the old acrylic enhancement using the ceramic e-file, you will feel a mild high-speed vibration across the nail plate, but zero burning heat.", translation: "Anh David, khi em bắt đầu dùng máy mài đầu gốm để tháo lớp bột cũ, anh sẽ cảm nhận được độ rung nhẹ tốc độ cao trên bề mặt móng, nhưng hoàn toàn không bị nóng rát ạ." },
        { participant: 'David', text: "Thank you for explaining beforehand. At another salon, the friction heat was quite intense and made me flinch.", translation: "Cảm ơn cô đã giải thích trước. Ở tiệm khác, nhiệt ma sát nóng buốt làm tôi từng giật nảy mình." },
        { participant: 'Rachel', text: "That occurs when a technician holds the bit in one spot. I maintain continuous sweeping strokes and low revolutions per minute. If you detect even a hint of warmth, notify me immediately.", translation: "Tình trạng đó xảy ra khi kỹ thuật viên giữ đầu mài đứng yên một chỗ ạ. Em luôn di chuyển cọ lướt liên tục và cài số vòng quay thấp. Nếu anh thấy hơi ấm lên dù chỉ một chút, xin báo ngay cho em nhé." },
        { participant: 'David', text: "It feels completely smooth and cool. I appreciate the clear explanation.", translation: "Tôi thấy rất êm và mát tay. Rất cảm ơn cô đã hướng dẫn rõ ràng." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Explaining UV Lamp Heat Spikes & Drill Sensations',
      participants: [
        { name: 'Linh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LinhTechSensations', role: 'Nail Tech' },
        { name: 'Emily', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=EmilyClientSensations', role: 'Client' }
      ],
      lines: [
        { participant: 'Linh', text: "Emily, I'm applying a layer of builder gel to strengthen your nails. When you slide your hand into the LED lamp, you might feel a quick heat spike around the ten-second mark as the molecules shrink and cure.", translation: "Emily ơi, bây giờ mình chải một lớp gel đắp để móng bạn cứng cáp hơn nhé. Khi bạn đưa tay vào đèn LED, tầm giây thứ 10 bạn có thể thấy hơi nóng ran nhẹ vì các phân tử gel co lại khi đông cứng đó." },
        { participant: 'Emily', text: "Oh, that heat spike always scares me! What should I do if it burns?", translation: "Ôi cái cảm giác nóng rát đó làm mình sợ lắm luôn! Nếu thấy buốt quá thì làm sao bạn nhỉ?" },
        { participant: 'Linh', text: "Don't suffer through it! The second you feel warmth, pull your hand out for three seconds, tap your fingers on the desk, then slide back in. It resets completely.", translation: "Đừng ráng chịu đựng nha! Ngay khi thấy ấm nóng là bạn rút tay ra ngoài 3 giây, chạm nhẹ ngón xuống bàn rồi từ từ cho vào lại. Sẽ dịu hẳn ngay lập tức đó." },
        { participant: 'Emily', text: "That trick works like magic! It didn't burn at all when I did that.", translation: "Mẹo đó thần kỳ ghê á! Mình làm theo là không còn thấy buốt rát chút nào luôn." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Fast Heat Reaction & E-File Tickle Ping',
      participants: [
        { name: 'Nga', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NgaQuickSensations', role: 'Tech' },
        { name: 'Beth', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BethRegSensations', role: 'Client' }
      ],
      lines: [
        { participant: 'Beth', text: "Ouch, lamp's getting spicy on that ring finger!", translation: "Ái chà, đèn bắt đầu nóng râm ran ngón đeo nhẫn rồi nha!" },
        { participant: 'Nga', text: "Pull it out quick! Tap desk twice, put it back on low-heat mode.", translation: "Rút tay ra liền nè! Chạm bàn hai cái rồi đưa vào lại, mình bấm chế độ nhiệt êm rồi đó." },
        { participant: 'Beth', text: "Phew, cool as a cucumber now, thanks!", translation: "Phù, êm ru mát rượi rồi, cảm ơn nha!" },
        { participant: 'Nga', text: "Any warmth, shout right away!", translation: "Thấy ấm chỗ nào là ới liền nghen!" }
      ]
    }
  ],

  'beauty-06': [
    {
      type: 'pair',
      school: 'business',
      title: 'Gentle Protocol for Hypersensitive Nail Folds & Antiseptic Care',
      participants: [
        { name: 'Camilla', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CamillaManagerPain', role: 'Salon Supervisor' },
        { name: 'Charlotte', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CharlotteVIPPain', role: 'VIP Client' }
      ],
      lines: [
        { participant: 'Camilla', text: "Mrs. Charlotte, I observed you wince slightly during the eponychium exfoliation. Please accept my sincere apologies. Did the diamond bit cause any discomfort or stinging?", translation: "Thưa bà Charlotte, em nhận thấy bà hơi khẽ giật mình trong lúc chuyên viên làm sạch tế bào chết viền móng. Em xin chân thành cáo lỗi cùng bà ạ. Đầu mài kim cương có làm bà bị châm chích hay đau rát không ạ?" },
        { participant: 'Charlotte', text: "The skin on my left index finger is quite thin, so the friction felt a bit sharp.", translation: "Vùng da ở ngón trỏ tay trái của tôi khá mỏng nên lúc ma sát thấy hơi nhói một chút." },
        { participant: 'Camilla', text: "I will immediately apply our soothing witch-hazel and tea-tree antiseptic compress to calm the epidermal tissue, and our artist will complete the remaining cuticle care manually with a cushioned micro-file.", translation: "Dạ em sẽ thoa ngay dung dịch chiết xuất cây phỉ và tràm trà làm dịu mô da, và chuyên viên bên em sẽ thao tác các bước còn lại hoàn toàn thủ công bằng dũa bọt êm ái ạ." },
        { participant: 'Charlotte', text: "The compress is remarkably soothing. Thank you for handling that with such thoughtful attentiveness.", translation: "Gạc thuốc làm dịu rất nhanh. Cảm ơn cô đã xử lý vô cùng ân cần và chu đáo." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Soothing an Accidental Cuticle Nick with Apology and Care',
      participants: [
        { name: 'Mai', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MaiTechPain', role: 'Nail Technician' },
        { name: 'Valerie', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ValerieClientPain', role: 'Client' }
      ],
      lines: [
        { participant: 'Valerie', text: "Ouch! That pinched a bit right by the corner.", translation: "Ái! Chỗ góc khóe vừa bị cấn đau một chút bạn ơi." },
        { participant: 'Mai', text: "Oh, I am so sorry, Valerie! Let me stop right away and take a close look. Your sidewall is so delicate right there.", translation: "Ôi mình xin lỗi bạn nhiều nha Valerie! Để mình dừng lại kiểm tra liền. Vùng da khóe bên này của bạn mỏng manh quá chừng." },
        { participant: 'Valerie', text: "It stung for a second, but I don't think it's bleeding.", translation: "Nó nhói lên một giây thôi chứ mình nghĩ không bị chảy máu đâu." },
        { participant: 'Mai', text: "There's just a tiny spot of redness. Let me spray a gentle soothing antiseptic mist so it won't sting when we wash hands. I'll steer completely clear of that edge with the nippers.", translation: "Chỉ hơi ửng đỏ một chấm xíu thôi nè. Để mình xịt chút nước sát khuẩn dịu nhẹ để lát rửa tay không bị xót nha. Mình sẽ không đụng kềm vào rìa mép đó nữa đâu nhé." },
        { participant: 'Valerie', text: "Thank you, Mai. It feels so much better now. I appreciate how attentive you are.", translation: "Cảm ơn Mai nha, dịu hẳn rồi nè. Mình rất thích sự cẩn thận và chu đáo của bạn." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Ouch Moment & Gentle Reset',
      participants: [
        { name: 'Kylie', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KylieTechPain', role: 'Tech' },
        { name: 'Danielle', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DanielleOilPain', role: 'Client' }
      ],
      lines: [
        { participant: 'Danielle', text: "Ow! Tender spot on pinky corner!", translation: "Ái! Góc ngón út hơi bị thốn nha!" },
        { participant: 'Kylie', text: "So sorry! Stopping right now. Dabbing soothing spray—stinging gone?", translation: "Xin lỗi cậu nha! Tớ dừng liền đây. Chấm chút xịt làm dịu nè—hết rát chưa?" },
        { participant: 'Danielle', text: "All good, just a sensitive cuticle day.", translation: "Ổn rồi nè, hôm nay da khóe hơi nhạy cảm xíu thôi." },
        { participant: 'Kylie', text: "I'll use the soft buffer only on pinky, promise!", translation: "Ngón út tớ chỉ dùng phao mềm thôi, hứa luôn!" }
      ]
    }
  ],

  'beauty-07': [
    {
      type: 'pair',
      school: 'business',
      title: 'Cross-Cultural Salon Linguistic Clarification & Visual Confirmation',
      participants: [
        { name: 'Dr. Evelyn', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DrEvelynLang', role: 'Salon Manager' },
        { name: 'Arthur', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ArthurLang', role: 'Client with Regional Accent' }
      ],
      lines: [
        { participant: 'Arthur', text: "Aye, mate, fancy giving us a proper trim and buffing down the rough bits on me thumbs, innit? Don't want no flashy varnish, just a clean buff.", translation: "Chào cô nhé, nhờ cô tỉa tót cho tôi gọn gàng với mài phẳng mấy chỗ ráp ráp ở ngón cái được không? Tôi không ham ba cái nước sơn bóng bẩy đâu, chỉ cần đánh bóng sạch sẽ thôi nha." },
        { participant: 'Dr. Evelyn', text: "Pardon me, Arthur. To ensure we understand your request with complete precision: you would like a natural executive grooming service—clean cuticle care, nail shaping, and a non-glossy natural buff finish without any colored lacquer?", translation: "Dạ xin lỗi anh Arthur. Để đảm bảo bên em hiểu đúng 100% mong muốn của anh: anh muốn làm gói chăm sóc móng tự nhiên dành cho nam—nhặt da sạch sẽ, giũa phom gọn gàng và đánh bóng mờ tự nhiên chứ không dùng sơn bóng hay màu mè đúng không ạ?" },
        { participant: 'Arthur', text: "Spot on! That's bang on what I meant. Appreciate you double-checking with me.", translation: "Chuẩn bài luôn! Đúng y xì đúc ý tôi đấy. Cảm ơn cô đã hỏi lại cặn kẽ để khỏi hiểu lầm nhé." },
        { participant: 'Dr. Evelyn', text: "It is our absolute pleasure. We pride ourselves on clear communication and tailored guest comfort.", translation: "Dạ được phục vụ anh là niềm vinh hạnh của tiệm. Bên em luôn chú trọng giao tiếp rõ ràng và trải nghiệm chu đáo nhất cho từng vị khách ạ." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Decoding Gen Z Nail Slang & Clarifying Fast Speech',
      participants: [
        { name: 'Bao', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BaoArtistSlang', role: 'Nail Artist' },
        { name: 'Brianna', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BriannaTeenSlang', role: 'Gen Z Client' }
      ],
      lines: [
        { participant: 'Brianna', text: "Hey! So I need you to totally snatch my claws today! Like, make them giving pure baddie energy, super aesthetic, total slay, no cap!", translation: "Chào anh! Hôm nay anh làm cho bộ vuốt của em nhìn thật là 'snatched' bén ngót nha! Kiểu phải toát lên năng lượng 'baddie' quyến rũ, cực nghệ và 'slay' hết nước chấm luôn á, thề không điêu đâu!" },
        { participant: 'Bao', text: "Haha, I love the energy, Brianna! Let me make sure I decode that right: you want long tapered square extensions with razor-sharp corners and a sleek aura chrome effect, right?", translation: "Haha, thích năng lượng tràn trề của em ghê Brianna! Để anh dịch chuẩn ý em nhé: em muốn nối móng vuông dài vuốt thon, góc cạnh bén ngót và phủ lớp tráng gương aura huyền ảo đúng không nè?" },
        { participant: 'Brianna', text: "Omg yes! You totally speak my language! Here's the TikTok video I saved to show the chrome shift.", translation: "Trời ơi chuẩn đét luôn! Anh nói đúng ngôn ngữ của em ghê! Em cho anh xem video TikTok em lưu về hiệu ứng đổi màu chrome nè." },
        { participant: 'Bao', text: "Awesome! We have the exact pearlescent powder from that video. Your set is going to slay for sure!", translation: "Tuyệt vời luôn! Tiệm anh có đúng loại bột nhũ ngọc trai trong video đó đó. Bộ này lên tay là bao đẹp đỉnh chóp nhé!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Fast Slang & Photo Check Ping',
      participants: [
        { name: 'Tina', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TinaNailsSlang', role: 'Tech' },
        { name: 'Sam', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SamOutfitSlang', role: 'Client' }
      ],
      lines: [
        { participant: 'Sam', text: "Need my nails super snatched and pointy, Tina!", translation: "Muốn bộ móng hôm nay phải bén ngót và nhọn hoắt nha Tina ơi!" },
        { participant: 'Tina', text: "Stiletto or sharp almond? Flash me your photo real quick!", translation: "Phom gót nhọn stiletto hay hạnh nhân bén? Bật tấm ảnh cho tớ nghía nhanh 1 giây!" },
        { participant: 'Sam', text: "This Pinterest pic right here!", translation: "Tấm Pinterest này nè bạn ơi!" },
        { participant: 'Tina', text: "Gotcha, snatching them sharp now!", translation: "Hiểu bài rồi, mài bén ngót ngay và luôn!" }
      ]
    }
  ],

  'beauty-08': [
    {
      type: 'pair',
      school: 'business',
      title: 'Enforcing Grace Period Policy Professionally for Late Arrival',
      participants: [
        { name: 'Jonathan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JonathanConcierge', role: 'Salon Manager' },
        { name: 'Audrey', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AudreyLate', role: 'Client' }
      ],
      lines: [
        { participant: 'Jonathan', text: "Good afternoon, Ms. Audrey. We are pleased you arrived safely despite the highway construction.", translation: "Chào chị Audrey. Rất mừng vì chị đã đến nơi an toàn dù đường cao tốc đang thi công ạ." },
        { participant: 'Audrey', text: "I am so sorry I am twenty-five minutes late! Can we still do the full acrylic set with 3D nail art?", translation: "Tôi vô cùng xin lỗi vì đến muộn tận 25 phút! Liệu chúng ta vẫn kịp làm trọn bộ acrylic vẽ 3D chứ?" },
        { participant: 'Jonathan', text: "Because our schedule accommodates reserved guests every hour, we have a strict fifteen-minute grace window. To ensure our next booking at 2:00 PM is not delayed, we can complete a solid color overlay today, and schedule your custom art session for next Wednesday.", translation: "Vì lịch làm việc bên em phục vụ khách đặt trước theo khung giờ, tiệm có quy định thời gian chờ tối đa 15 phút. Để không ảnh hưởng đến vị khách tiếp theo lúc 2 giờ chiều, hôm nay bên em có thể hoàn thành bộ móng trơn một màu, và hẹn chị thứ Tư tuần sau để vẽ họa tiết thiết kế ạ." },
        { participant: 'Audrey', text: "I understand that policy protects everyone's schedule. Let's do the single color today and book the art for Wednesday.", translation: "Tôi hiểu quy định đó để đảm bảo quyền lợi chung cho mọi người. Hôm nay làm một màu trước và xếp lịch vẽ cho tôi vào thứ Tư nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Managing a Rushed Schedule Due to Traffic Delays',
      participants: [
        { name: 'Khang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KhangTech', role: 'Nail Artist' },
        { name: 'Britney', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BritneyClient', role: 'Client' }
      ],
      lines: [
        { participant: 'Britney', text: "Khang, I am so out of breath! Parking downtown was an absolute nightmare today.", translation: "Khang ơi, thở không ra hơi luôn nè! Hôm nay tìm chỗ đậu xe dưới phố đông kinh khủng." },
        { participant: 'Khang', text: "Take a deep breath and have a sip of water, Britney! Don't stress. We lost about fifteen minutes, but we can definitely still do your gel manicure.", translation: "Uống ngụm nước rồi thở đều lại nha Britney! Đừng căng thẳng. Tụi mình bị lố tầm 15 phút, nhưng chắc chắn vẫn kịp làm trọn vẹn bộ móng gel cho bạn nha." },
        { participant: 'Britney', text: "Phew! Can we still squeeze in the French tips?", translation: "Phù, may quá! Có kịp vẽ thêm viền French không bạn?" },
        { participant: 'Khang', text: "If we skip the lengthy hand massage today, we can get that French tip looking flawless before my 1:30 appointment walks in!", translation: "Nếu hôm nay tụi mình rút ngắn khâu mát-xa tay thư giãn thì mình bao bạn có bộ viền French siêu xinh trước khi ca khách 1 giờ 30 đến nhé!" },
        { participant: 'Britney', text: "You're a lifesaver, Khang. Let's make it work!", translation: "Cứu tinh của đời tôi đây rồi Khang ơi. Bắt đầu luôn nào!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Texting Running Late Status',
      participants: [
        { name: 'Cindy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CindyTech', role: 'Tech' },
        { name: 'Megan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MeganLate', role: 'Client' }
      ],
      lines: [
        { participant: 'Megan', text: "Cindy, stuck behind a bus accident! Running 10 mins behind, still okay?", translation: "Cindy ơi, kẹt sau vụ tai nạn xe buýt rồi! Trễ tầm 10 phút, còn làm kịp không bạn?" },
        { participant: 'Cindy', text: "10 mins is fine! My current client just left. See you soon!", translation: "10 phút thì thoải mái nha! Khách trước của tớ cũng vừa xong. Gặp lại bạn lát nữa!" },
        { participant: 'Megan', text: "Bless you, sprinting from the lot now!", translation: "Cảm ơn bạn nhiều nha, đang chạy bộ từ bãi xe vào đây!" },
        { participant: 'Cindy', text: "Station 4 ready when you get here.", translation: "Bàn số 4 sẵn sàng đợi bạn rồi nè." }
      ]
    }
  ],

  'beauty-09': [
    {
      type: 'pair',
      school: 'business',
      title: 'De-escalating Workplace Stress Talk & Refocusing on Service Quality',
      participants: [
        { name: 'Vivian', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=VivianSpa', role: 'Senior Spa Specialist' },
        { name: 'Beatrice', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BeatriceCorp', role: 'Executive Client' }
      ],
      lines: [
        { participant: 'Beatrice', text: "I have had the most dreadful day at corporate headquarters. My subordinates are incompetent and upper management is impossible!", translation: "Hôm nay tôi đã trải qua một ngày tồi tệ nhất ở trụ sở công ty. Cấp dưới thì làm ăn tắc trách, còn ban giám đốc thì toàn đòi hỏi vô lý!" },
        { participant: 'Vivian', text: "I am deeply sorry to hear you've had such a challenging day, Beatrice. High-stakes leadership can place enormous strain on the mind and body.", translation: "Em rất chia sẻ với một ngày đầy áp lực của chị Beatrice. Ở vị trí lãnh đạo gánh vác nhiều trách nhiệm quả thực vô cùng căng thẳng ạ." },
        { participant: 'Beatrice', text: "It truly is exhausting. Nobody seems to care about deadlines anymore.", translation: "Mệt mỏi đến kiệt sức thật sự. Chẳng còn ai quan tâm đến hạn chót công việc nữa." },
        { participant: 'Vivian', text: "Allow us to create an oasis for you right here. Let us place a warm lavender towel on your shoulders, lower the lighting, and focus entirely on restoring your peace of mind while we shape your nails.", translation: "Chị hãy để tụi em tạo một không gian bình yên cho chị ngay tại đây nhé. Em xin phép đặt khăn ấm hương oải hương lên vai chị, chỉnh dịu ánh sáng lại để chị hoàn toàn thư thái trong lúc em chăm sóc móng cho chị ạ." },
        { participant: 'Beatrice', text: "That is exactly what I need right now. Thank you for your empathy, Vivian.", translation: "Đó chính xác là những gì tôi cần lúc này. Cảm ơn sự chu đáo của cô, Vivian." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Friendly Ear and Active Listening without Gossiping',
      participants: [
        { name: 'Nga', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NgaFriendly', role: 'Technician' },
        { name: 'Jessica', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JessicaClient', role: 'Client' }
      ],
      lines: [
        { participant: 'Jessica', text: "Nga, don't even ask about my morning! My house is a mess, the kids wouldn't get in the car, and my husband just watched football.", translation: "Nga ơi, đừng nhắc tới buổi sáng nay nữa! Nhà cửa thì bừa bộn, mấy đứa nhỏ thì quấy khóc không chịu lên xe, còn ông chồng thì cứ dán mắt vào xem bóng đá." },
        { participant: 'Nga', text: "Oh man, juggling kids and household duties on the weekend can really push anyone to their limit! You definitely earned this self-care hour today.", translation: "Ôi trời, vừa lo việc nhà vừa trông con ngày cuối tuần thực sự đuối sức lắm luôn á! Hôm nay bạn hoàn toàn xứng đáng có một giờ thư giãn cho bản thân nè." },
        { participant: 'Jessica', text: "Thank you for validating that. Sometimes I just need to vent without being judged.", translation: "Cảm ơn bạn đã thấu hiểu nhé. Đôi khi mình chỉ muốn được trút bầu tâm sự mà không bị phán xét thôi." },
        { participant: 'Nga', text: "Anytime! Sit back, enjoy the massage chair, and let's get you nails that make you feel like a queen again.", translation: "Có gì đâu nè! Bạn cứ ngả lưng thư giãn trên ghế mát-xa nha, để mình làm cho bạn một bộ móng xinh lung linh như hoàng hậu luôn." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Silent Appointment Request & Respect',
      participants: [
        { name: 'Grace', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=GraceQuiet', role: 'Tech' },
        { name: 'Lily', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LilyHeadphones', role: 'Client' }
      ],
      lines: [
        { participant: 'Lily', text: "Hey Grace, mind if I put headphones on and zone out today? Rough week.", translation: "Grace ơi, hôm nay tớ đeo tai nghe nằm nghe nhạc thư giãn được không? Tuần này đuối quá." },
        { participant: 'Grace', text: "Totally! Silent appointment mode activated. Tap me if you need anything.", translation: "Thoải mái luôn nha! Chế độ làm móng yên tĩnh bắt đầu. Cần gì cứ khều tớ nhé." },
        { participant: 'Lily', text: "You're the best tech ever.", translation: "Bạn là thợ có tâm nhất hệ mặt trời luôn." },
        { participant: 'Grace', text: "Relax and enjoy your tunes!", translation: "Cứ nghe nhạc thư giãn đi nha!" }
      ]
    }
  ],

  'beauty-10': [
    {
      type: 'pair',
      school: 'business',
      title: 'Transparent Pricing Disclosure for Specialty Shapes & Removals',
      participants: [
        { name: 'Clarisse', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ClarisseFront', role: 'Salon Coordinator' },
        { name: 'Diana', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DianaClient', role: 'New Client' }
      ],
      lines: [
        { participant: 'Clarisse', text: "Good afternoon, Diana. Prior to beginning your service, we want to ensure complete transparency regarding your service quotation.", translation: "Chào chị Diana. Trước khi bắt đầu dịch vụ, bên em muốn thông tin minh bạch toàn bộ các hạng mục trong báo giá của chị ạ." },
        { participant: 'Diana', text: "I appreciate that. I've had salons add unexpected surcharges at checkout before.", translation: "Tôi rất thích điều này. Trước đây tôi từng gặp trường hợp ra thanh toán mới bị báo thêm đủ thứ phụ phí bất ngờ." },
        { participant: 'Clarisse', text: "Our base Gel-X set is sixty-five dollars. Because we must soak off existing hard acrylics, there is a ten-dollar removal fee, plus a five-dollar fee for extra-long coffin shaping. Your all-inclusive total before tax is eighty dollars.", translation: "Dạ bộ Gel-X cơ bản bên em là 65 đô. Do cần ngâm tháo sạch lớp bột acrylic cũ nên có phụ phí tháo móng là 10 đô, cộng thêm 5 đô tạo phom dáng coffin dài đặc biệt. Tổng chi phí trọn gói của chị trước thuế là 80 đô ạ." },
        { participant: 'Diana', text: "Thank you for explaining each line item upfront. That is very fair, please proceed.", translation: "Cảm ơn cô đã giải thích rõ từng mục từ đầu. Rất rõ ràng và minh bạch, làm cho tôi nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Natural Aftercare Recommendation without Pushy Sales',
      participants: [
        { name: 'My', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MyNailUpsell', role: 'Technician' },
        { name: 'Valerie', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ValerieSmart', role: 'Client' }
      ],
      lines: [
        { participant: 'My', text: "Valerie, your French tips look pristine! While we're drying, I noticed your knuckles are getting a little chapped from frequent washing.", translation: "Valerie ơi, bộ móng viền French của bạn lên phom bóng đẹp lắm rồi nè! Trong lúc chờ khô, mình thấy các khớp ngón tay bạn hơi khô nứt do rửa tay nhiều lần nè." },
        { participant: 'Valerie', text: "Yeah, I work in healthcare, so I sanitize my hands fifty times a day.", translation: "Đúng rồi đó, mình làm trong ngành y tế nên mỗi ngày sát khuẩn tay tới 50 lần lận." },
        { participant: 'My', text: "That makes total sense! If you'd like, we have an organic jojoba and honey balm by the register for eight dollars. It creates a breathable moisture seal that won't wash off immediately.", translation: "Thảo nào da dễ khô! Nếu bạn muốn, ở quầy thu ngân bên mình có sáp dưỡng ẩm mật ong và jojoba hữu cơ 8 đô. Thoa lên sẽ tạo lớp màng ẩm tự nhiên không bị trôi ngay khi rửa tay đâu." },
        { participant: 'Valerie', text: "Oh, that sounds perfect for my hospital shifts! Add one to my total, please.", translation: "Nghe hợp với ca trực bệnh viện của mình quá! Cho mình lấy thêm một hộp vào hóa đơn luôn nha." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Add-on Question at the Station',
      participants: [
        { name: 'Sammy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SammyTech', role: 'Tech' },
        { name: 'Brooke', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BrookeClient', role: 'Client' }
      ],
      lines: [
        { participant: 'Brooke', text: "Sammy, can we add chrome powder onto this nude base?", translation: "Sammy ơi, quét thêm bột tráng gương chrome lên nền nude này được không?" },
        { participant: 'Sammy', text: "Yup! It's ten bucks extra, cool with that?", translation: "Được chứ! Thêm 10 đô nha, bạn thấy ok không?" },
        { participant: 'Brooke', text: "Totally fine, make it shine!", translation: "Thoải mái luôn, cho lấp lánh lên nha!" },
        { participant: 'Sammy', text: "Rubbing the chrome on now!", translation: "Chà bột chrome lên ngay đây!" }
      ]
    }
  ]
};
