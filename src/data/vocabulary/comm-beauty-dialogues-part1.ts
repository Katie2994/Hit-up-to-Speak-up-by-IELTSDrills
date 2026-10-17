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
      title: 'Clinical Hygiene Assurance & Heat-Spike Protocol',
      participants: [
        { name: 'Nurse Rachel', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=RachelNurse', role: 'Medical Aesthetician' },
        { name: 'David', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DavidLaser', role: 'Laser Skin Client' }
      ],
      lines: [
        { participant: 'Rachel', text: "Before we begin the laser resurfacing, please note all handpieces have undergone hospital-grade autoclave sterilization. The indicator pouch was unsealed in your presence.", translation: "Trước khi thực hiện liệu trình laser, xin thông báo toàn bộ đầu máy đã được tiệt trùng bằng nồi hấp chuẩn y tế. Túi chỉ thị vô trùng vừa được mở ngay trước mặt anh ạ." },
        { participant: 'David', text: "Thank you for confirming. I had a severe burning sensation at another clinic previously, so I'm somewhat anxious.", translation: "Cảm ơn cô đã xác nhận. Trước đây tôi từng bị bỏng rát ở một phòng khám khác nên hôm nay hơi lo lắng." },
        { participant: 'Rachel', text: "I completely understand. We utilize continuous contact cooling. If you experience any heat threshold exceeding 4 out of 10, raise your hand and I will immediately suspend the pulse.", translation: "Em hoàn toàn thấu hiểu. Bên em sử dụng hệ thống làm mát tiếp xúc liên tục. Nếu anh cảm thấy mức nhiệt vượt quá 4/10, chỉ cần giơ tay là em sẽ tạm dừng ngay lập tức ạ." },
        { participant: 'David', text: "That gives me great peace of mind. I am ready when you are.", translation: "Nghe vậy tôi an tâm hơn rất nhiều. Tôi sẵn sàng rồi." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Gentle Cuticle Work & UV Lamp Comfort Check',
      participants: [
        { name: 'Linh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LinhGentle', role: 'Nail Tech' },
        { name: 'Emily', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=EmilyNail', role: 'Client' }
      ],
      lines: [
        { participant: 'Linh', text: "Emily, I'm going to trim your cuticles now. Please let me know if anything feels sharp or tender, okay?", translation: "Emily ơi, bây giờ mình sẽ nhặt da khóe móng nhé. Nếu chỗ nào hơi cấn hay ê buốt thì bạn nhớ bảo mình ngay nha?" },
        { participant: 'Emily', text: "Will do. My cuticles are quite thin around the ring fingers.", translation: "Nhất trí. Da khóe ở ngón đeo nhẫn của mình khá mỏng đấy." },
        { participant: 'Linh', text: "Got it, I'll be extra gentle there. Also, when curing the builder gel in the LED lamp, if you feel a heat spike, pull your hand out for five seconds and slide it back in slowly.", translation: "Mình hiểu rồi, mình sẽ làm thật nhẹ tay ở chỗ đó. Ngoài ra lúc hơ gel trong đèn LED, nếu bạn thấy nóng ran thì cứ rút tay ra ngoài 5 giây rồi từ từ cho vào lại nhé." },
        { participant: 'Emily', text: "Oh, that's such a helpful trick! Thanks for looking out for me.", translation: "Mẹo hay quá! Cảm ơn bạn đã dặn trước nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Lamp Heat Reaction & Adjustment',
      participants: [
        { name: 'Nga', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NgaQuick', role: 'Tech' },
        { name: 'Beth', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BethReg', role: 'Client' }
      ],
      lines: [
        { participant: 'Beth', text: "Ouch, lamp's a bit hot!", translation: "Ái, đèn hơi nóng nha!" },
        { participant: 'Nga', text: "Pull it out quick! Tap the desk twice, then put it back in on low-heat mode.", translation: "Rút tay ra ngay nè! Chạm nhẹ xuống bàn hai cái rồi đưa vào lại, mình bật chế độ nhiệt thấp rồi đó." },
        { participant: 'Beth', text: "Much better now, thanks!", translation: "Đỡ hơn hẳn rồi, cảm ơn nha!" },
        { participant: 'Nga', text: "Any pain, shout right away!", translation: "Thấy buốt chỗ nào là ới liền nghen!" }
      ]
    }
  ],

  'beauty-05': [
    {
      type: 'pair',
      school: 'business',
      title: 'Bespoke Bridal Aesthetic Consultation & Mood Board Review',
      participants: [
        { name: 'Julian', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JulianStylist', role: 'Creative Director' },
        { name: 'Madeline', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MadelineBride', role: 'Bride-to-be' }
      ],
      lines: [
        { participant: 'Julian', text: "Madeline, having reviewed your wedding dress swatches and bouquet palette, I propose a sheer blush chrome with delicate micro-pearl accents.", translation: "Chào Madeline. Sau khi xem mẫu vải váy cưới và bảng màu hoa cầm tay của bạn, tôi đề xuất tông màu hồng nude tráng gương kết hợp đính vi ngọc trai tinh tế." },
        { participant: 'Madeline', text: "That sounds very romantic. Will the micro-pearls catch on my lace veil during the ceremony?", translation: "Nghe lãng mạn quá. Liệu những hạt ngọc trai nhỏ này có bị vướng vào khăn voan ren trong lúc làm lễ không?" },
        { participant: 'Julian', text: "We encapsulate every embellishment under two layers of crystal-clear structural resin. The surface will be entirely smooth to the touch.", translation: "Bên em sẽ bọc phẳng từng viên đính dưới hai lớp resin trong suốt cao cấp. Bề mặt móng sẽ hoàn toàn láng mịn khi chạm vào ạ." },
        { participant: 'Madeline', text: "That is exquisite craftsmanship. Please proceed with the mock bridal set.", translation: "Thật là tay nghề đỉnh cao. Chúng ta tiến hành làm bộ mẫu thử luôn nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Praising a Client\'s Style & Recommending Trendy Accents',
      participants: [
        { name: 'Bao', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BaoArtist', role: 'Nail Artist' },
        { name: 'Jessica', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JessicaStyle', role: 'Client' }
      ],
      lines: [
        { participant: 'Bao', text: "Jessica, I love that silver rings and chunky watch combo you're wearing today! It has such a cool, modern aesthetic.", translation: "Jessica ơi, mình thích bộ nhẫn bạc với đồng hồ to bản bạn đeo hôm nay ghê! Trông rất cá tính và hiện đại luôn." },
        { participant: 'Jessica', text: "Thank you! I'm trying to match my nails with silver jewelry for an upcoming concert.", translation: "Cảm ơn bạn nhé! Mình đang muốn làm móng sao cho ăn rơ với phụ kiện bạc để đi xem concert sắp tới nè." },
        { participant: 'Bao', text: "In that case, how about adding 3D metallic chrome droplets on your thumb and middle finger? It will tie your whole outfit together effortlessly.", translation: "Nếu vậy bạn nghĩ sao nếu tụi mình vẽ thêm giọt nước tráng gương kim loại 3D ở ngón cái và ngón giữa? Nhìn sẽ cực kỳ ăn nhập với tổng thể trang phục luôn." },
        { participant: 'Jessica', text: "Yes! That is exactly the futuristic vibe I was looking for. Let's do it!", translation: "Chuẩn luôn! Đúng phong cách hiện đại mà mình tìm kiếm bấy lâu nay. Làm ngay thôi!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Outfit & Nail Art Vibe Check',
      participants: [
        { name: 'Tina', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TinaNails', role: 'Tech' },
        { name: 'Sam', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SamOutfit', role: 'Client' }
      ],
      lines: [
        { participant: 'Tina', text: "That jacket is fire, Sam! Silver aura nails would match it insane.", translation: "Cái áo khoác chất quá Sam ơi! Phối bộ móng aura bạc là đỉnh chóp luôn." },
        { participant: 'Sam', text: "You read my mind! French tips or full aura?", translation: "Hiểu ý ghê! Làm đầu móng French hay phủ aura toàn bộ?" },
        { participant: 'Tina', text: "Full aura on almond shape, trust me.", translation: "Phủ full aura trên phom móng hạnh nhân, bao chuẩn." },
        { participant: 'Sam', text: "Say less, let's paint!", translation: "Khỏi bàn cãi, triển luôn!" }
      ]
    }
  ],

  'beauty-06': [
    {
      type: 'pair',
      school: 'business',
      title: 'Formal Color Swatch Verification & Design Confirmation',
      participants: [
        { name: 'Camilla', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CamillaManager', role: 'Salon Supervisor' },
        { name: 'Charlotte', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CharlotteVIP', role: 'VIP Client' }
      ],
      lines: [
        { participant: 'Camilla', text: "Mrs. Charlotte, before our artist cures the full set, I would like to verify the shade code #418 against your initial swatch selection under balanced daylight.", translation: "Thưa bà Charlotte, trước khi chuyên viên sấy hoàn thiện cả bộ móng, em xin phép kiểm tra đối chiếu mã màu #418 với mẫu bà đã chọn dưới ánh sáng chuẩn ban ngày ạ." },
        { participant: 'Charlotte', text: "Thank you for double-checking. The first coat appeared slightly more mauve than I anticipated.", translation: "Cảm ơn cô đã kiểm tra lại. Lớp sơn đầu tiên trông có vẻ hơi tím hơn so với tôi hình dung." },
        { participant: 'Camilla', text: "Understood. We will apply a semi-translucent beige veil to adjust the tone precisely to the warm nude sample you approved.", translation: "Dạ em hiểu rồi ạ. Bên em sẽ dặm thêm một lớp màu be mờ bán trong suốt để điều chỉnh tông màu về đúng mẫu nude ấm mà bà đã ưng ý ạ." },
        { participant: 'Charlotte', text: "That is wonderfully accommodating. Thank you for your diligence.", translation: "Cách xử lý rất khéo léo và chu đáo. Cảm ơn cô nhiều." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Confirming French Tip Width & Nail Length',
      participants: [
        { name: 'Vy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=VyTech', role: 'Technician' },
        { name: 'Rachel', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=RachelClient', role: 'Client' }
      ],
      lines: [
        { participant: 'Vy', text: "Rachel, I painted one sample French line on your index finger. Do you like this thin micro-French width, or would you prefer a thicker smile line?", translation: "Rachel ơi, mình vừa vẽ thử một đường viền French lên ngón trỏ nè. Bạn thích độ mảnh micro-French này hay muốn vẽ dày hơn một xíu?" },
        { participant: 'Rachel', text: "I love how elegant the thin line looks! Can we round the corners just a tiny bit more?", translation: "Mình thích viền mảnh thanh lịch này nè! Bạn bo tròn khóe hai bên một chút xíu nữa được không?" },
        { participant: 'Vy', text: "Of course! How about the overall length? Does it feel comfortable when you pretend to type on your phone?", translation: "Được chứ! Còn độ dài tổng thể thì sao bạn? Bạn thử bấm điện thoại xem có cảm thấy vướng víu không nha?" },
        { participant: 'Rachel', text: "The length is spot on. Let's do all ten fingers like this!", translation: "Độ dài chuẩn không cần chỉnh rồi. Triển khai cả 10 ngón y như thế này nhé!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Thumb Length Check',
      participants: [
        { name: 'Jen', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=JenNail', role: 'Tech' },
        { name: 'Mia', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MiaShort', role: 'Client' }
      ],
      lines: [
        { participant: 'Jen', text: "Compare both thumbs, length look even?", translation: "Ướm thử hai ngón cái xem độ dài đều chưa nào?" },
        { participant: 'Mia', text: "Right one's a millimeter longer, file it down a tiny bit?", translation: "Bên phải dài hơn tầm một li, dũa bớt tí xíu nha?" },
        { participant: 'Jen', text: "Two quick swipes—check it now!", translation: "Hai đường dũa xong ngay—so lại xem nào!" },
        { participant: 'Mia', text: "Perfect match! Top coat time.", translation: "Khít khìn khịt luôn! Lên nước bóng thôi." }
      ]
    }
  ],

  'beauty-07': [
    {
      type: 'pair',
      school: 'business',
      title: 'Nail Plate Health Assessment & Restorative Program Recommendation',
      participants: [
        { name: 'Dr. Evelyn', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DrEvelyn', role: 'Clinical Podiatrist & Manicurist' },
        { name: 'Arthur', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ArthurHealth', role: 'Client' }
      ],
      lines: [
        { participant: 'Dr. Evelyn', text: "Good morning, Arthur. Upon inspecting your nail beds, I observe longitudinal ridging and slight thinning from previous improper mechanical drill removal.", translation: "Chào anh Arthur. Qua kiểm tra bề mặt móng, tôi nhận thấy có các đường rãnh dọc và móng hơi bị mỏng do trước đây dùng máy mài tháo móng không đúng kỹ thuật ạ." },
        { participant: 'Arthur', text: "Yes, my nails feel quite brittle and bend easily whenever they get wet. What do you advise?", translation: "Đúng vậy, móng tay tôi dạo này rất giòn và dễ bị uốn cong mỗi khi dính nước. Bác sĩ có lời khuyên gì không?" },
        { participant: 'Dr. Evelyn', text: "I strongly advise pausing acrylic overlays for four weeks. Instead, we should implement a keratin-infused IBX strengthening treatment alongside daily jojoba oil massage.", translation: "Tôi chân thành khuyên anh nên tạm ngưng đắp bột acrylic trong vòng 4 tuần. Thay vào đó, chúng ta nên thực hiện liệu trình phục hồi liên kết keratin IBX kết hợp mát-xa dầu jojoba hàng ngày." },
        { participant: 'Arthur', text: "I appreciate your honest medical perspective over a quick sale. Let's begin the restorative program today.", translation: "Tôi rất trân trọng sự trung thực vì sức khỏe khách hàng thay vì chỉ chăm chăm bán dịch vụ. Chúng ta bắt đầu liệu trình phục hồi ngay hôm nay nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Advising on Dry Cuticles and Daily Moisturizing Habits',
      participants: [
        { name: 'Mai', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MaiTechCare', role: 'Nail Technician' },
        { name: 'Valerie', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ValerieClient', role: 'Client' }
      ],
      lines: [
        { participant: 'Mai', text: "Valerie, your nail plate is naturally strong, but the skin around your sidewalls is a little dehydrated from the winter weather.", translation: "Valerie ơi, móng của bạn tự nhiên vốn rất khỏe, nhưng vùng da hai bên khóe móng đang hơi bị khô do thời tiết hanh hao mùa đông nè." },
        { participant: 'Valerie', text: "Ugh, I get so many painful hangnails lately! I keep catching them on my wool sweaters.", translation: "Trời ơi, dạo này mình bị tước da xước măng rô đau điếng luôn! Cứ hay vướng vào áo len hoài à." },
        { participant: 'Mai', text: "Don't pull or bite them! Keep a small cuticle oil pen in your purse and swipe it on before bed. It keeps the skin pliable and stops hangnails completely.", translation: "Bạn đừng giật hay cắn nhé! Cứ để một bút dưỡng viền móng nhỏ trong túi xách, trước khi ngủ quẹt một chút xíu. Da sẽ mềm dẻo và hết hẳn xước măng rô luôn." },
        { participant: 'Valerie', text: "I'll definitely buy one of those pens on my way out. Thanks for the tip, Mai!", translation: "Lát thanh toán mình mua liền một cây bút dưỡng đó. Cảm ơn Mai đã chỉ mẹo hay nhé!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Oil Habit Reminder',
      participants: [
        { name: 'Kylie', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KylieTech', role: 'Tech' },
        { name: 'Danielle', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DanielleOil', role: 'Client' }
      ],
      lines: [
        { participant: 'Kylie', text: "Promise me you're not peeling your gel off this time, Danielle!", translation: "Hứa với tớ lần này không tự lột cạy sơn gel nữa nha Danielle!" },
        { participant: 'Danielle', text: "Guilty! It's so tempting when it starts lifting.", translation: "Biết lỗi rồi! Cứ mỗi lần móng hơi bong mép là tay lại ngứa ngáy muốn bóc." },
        { participant: 'Kylie', text: "Come in for a five-dollar fix instead! Peeling strips your natural nail layers.", translation: "Ghé qua tớ sửa 5 đô thôi nè! Bóc ra là tróc hết màng móng thật tội nghiệp lắm." },
        { participant: 'Danielle', text: "Deal. Pinky swear!", translation: "Chốt kèo. Móc ngoéo luôn!" }
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
