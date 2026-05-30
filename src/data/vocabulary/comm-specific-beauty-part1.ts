import { Topic } from './types';

export const specificBeautyPart1: Topic[] = [
  {
    id: 'beauty-01',
    title: 'Greet & Warm Arrival',
    vietnameseTitle: 'Chào hỏi & Bắt chuyện ấm cúng',
    category: 'Communication',
    subCategory: ['For Beauty Professionals'],
    icon: '👋',
    color: '#FFB5A7',
    description: 'Bắt chuyện thân mật buổi đầu, tháo áo khoác, giúp khách ngồi ghế bồn ngâm chân chân hoặc giường gội dịu mát.',
    words: [
      { id: 'b1-1', word: 'Walk-in', ipa: '/ˈwɔːk ɪn/', definition: 'Khách hàng vãng lai bước vào tiệm trực tiếp không cần đặt lịch hẹn.', translation: 'Khách vãng lai', example: 'We have many walk-ins on Saturday afternoons.', blankSentence: 'Are you a ____ or do you have an appointment?', emoji: '🚶' },
      { id: 'b1-2', word: 'Unload', ipa: '/ˌʌnˈləʊd/', definition: 'Hành động cất gác dọn gọn túi xách hay áo khoác của khách để họ nhẹ người.', translation: 'Cất đồ đạc/Nhẹ lòng', example: 'Let me help you unload your heavy bag and winter coat.', blankSentence: 'You can ____ your jackets right over here.', emoji: '🧥' },
      { id: 'b1-3', word: 'Cozy', ipa: '/ˈkəʊzi/', definition: 'Trạng thái dễ chịu, thoải mái, ấm cúng và đầy tin tưởng.', translation: 'Thư giãn/Ấm cúng', example: 'Our salon aims to provide a cozy and peaceful atmosphere.', blankSentence: 'Take a seat and get ____ in this chair.', emoji: '☕' },
      { id: 'b1-4', word: 'Small talk', ipa: '/smɔːl tɔːk/', definition: 'Trò chuyện xã giao thân thiết về các chủ đề nhẹ nhàng phi công việc.', translation: 'Trò chuyện xã giao', example: 'Doing small talk with clients builds excellent connection.', blankSentence: 'I usually break the ice with quick ____ about the weather.', emoji: '💬' },
      { id: 'b1-5', word: 'Vibe', ipa: '/vaɪb/', definition: 'Bầu không khí, năng lượng lan tỏa của con người hay địa điểm.', translation: 'Bầu không khí/Cảm hứng', example: 'I really love the tranquil vibes of this skin care room.', blankSentence: 'The modern music gives this place a chill ____.', emoji: '✨' }
    ],
    structures: [
      { id: 'str101-1', phrase: 'Can I take your coat and bag for you?', meaning: 'Em cất giúp chị áo khoác và túi nhé?', vietnamese: 'Giúp khách rảnh tay, sẵn sàng thư giãn làm đẹp.' },
      { id: 'str101-2', phrase: 'Is the water temperature cozy enough?', meaning: 'Nước ngâm chân ấm thế này vừa chưa chị?', vietnamese: 'Hỏi han chu đáo khi khách chuẩn bị ngâm móng pedicure.' }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Welcoming Client to the Pedicure Throne',
        participants: [
          { name: 'Chloe', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Chloe', role: 'Technician' },
          { name: 'Sarah', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah', role: 'Client' }
        ],
        lines: [
          { participant: 'Chloe', text: 'Hi there! Welcome to Serene Palms! Do you have an appointment with us today?', translation: 'Dạ xin kính chào quý khách! Chào mừng chị đến với Serene Palms! Không biết hôm nay mình có đặt lịch trước chưa ạ?' },
          { participant: 'Sarah', text: 'Oh, hi! Actually, I\'m just a walk-in. Do you have any open spots right now for a pedicure?', translation: 'Ồ chào em! Thật ra chị ghé vãng lai thôi. Không biết bên em hiện tại có ghế trống nào cho dịch vụ pedicure không nhỉ?' },
          { participant: 'Chloe', text: 'Yes, we do! You\'re just in time. Let me help you unload your heavy coat and handbag first.', translation: 'Dạ có chứ ạ! Chị đến đúng lúc lắm luôn á. Chị để em cất hộ áo mang tô nặng với ví tay cho nhẹ người nha.' },
          { participant: 'Sarah', text: 'Thank you so much! Gosh, the heat outside is unbelievable.', translation: 'Chị cảm ơn em nhiều nha! Trời ơi, cái nắng nóng cháy da ở ngoài đường nãy giờ khiếp thật.' },
          { participant: 'Chloe', text: 'I know, right? Make yourself cozy on this massage chair. Let me know if the water temperature is warm enough.', translation: 'Dạ chuẩn luôn sếp! Chị ngả người nằm thoải mái thư giãn trên ghế mát-xa này nha. Có gì chị thử nước ấm bồn ngâm chân xem vừa nhiệt độ chưa ạ.' }
        ]
      }
    ]
  },
  {
    id: 'beauty-02',
    title: 'Consulting the Indecisive',
    vietnameseTitle: 'Tư vấn khi Khách phân vân',
    category: 'Communication',
    subCategory: ['For Beauty Professionals'],
    icon: '🤔',
    color: '#FCD5CE',
    description: 'Cách khơi gợi nhu cầu thói quen, gợi ý 2-3 sự lựa chọn thực tế dựa trên công việc bàn giấy hay lao động nhiều tay.',
    words: [
      { id: 'b2-1', word: 'Indecisive', ipa: '/ˌɪndɪˈsaɪsɪv/', definition: 'Trạng thái đắn đo, lúng túng khó tự đưa ra quyết định cuối cùng.', translation: 'Phân vân/Lưỡng lự', example: 'Clients are often indecisive about picking the right color.', blankSentence: 'Don\'t feel bad for being ____, we have a lot of options!', emoji: '🤷‍♀️' },
      { id: 'b2-2', word: 'Matte finish', ipa: '/mæt ˈfɪnɪʃ/', definition: 'Bề mặt sơn mờ mộc mạc, nhã nhặn không phản quang lóng lánh.', translation: 'Sơn lì/Nhám mờ', example: 'A matte finish is perfect for a modern, understated style.', blankSentence: 'Would you prefer a glossy top coat or a ____?', emoji: '💅' },
      { id: 'b2-3', word: 'Glossy coat', ipa: '/ˈɡlɒsi kəʊt/', definition: 'Lớp bóng bóng bảo vệ sau cùng giúp móng sáng nhoáng.', translation: 'Lớp sơn bóng', example: 'The glossy coat prevents the nail color from chipping easily.', blankSentence: 'Let me apply a thick ____ for extra sheen.', emoji: '✨' },
      { id: 'b2-4', word: 'Classic set', ipa: '/ˈklæsɪk set/', definition: 'Bộ lắp ráp đơn giản, phổ biến mang vẻ đẹp tự nhiên, thanh tú.', translation: 'Bộ mi/móng cổ điển', example: 'A classic set of eyelash extensions is perfect for office workers.', blankSentence: 'I recommend a ____ because it fits every outfit.', emoji: '👁️' },
      { id: 'b2-5', word: 'Sturdy', ipa: '/ˈstɜːdi/', definition: 'Tính chất cứng cáp, bền vững chịu được lực va cọ xát cơ học hằng ngày.', translation: 'Cứng cáp/Bền bỉ', example: 'Since you do gardening, you need a sturdy acrylic overlay.', blankSentence: 'Gel-X is lightweight but incredibly ____.', emoji: '💪' }
    ],
    structures: [
      { id: 'str102-1', phrase: 'Do you do a lot of hands-on work?', meaning: 'Công việc thường ngày của chị có phải dùng tay chân nhiều không?', vietnamese: 'Khảo sát thói quen để tư vấn loại móng lì bền hay mỏng dẹt.' },
      { id: 'str102-2', phrase: 'Are we going for a natural look or something more pop?', meaning: 'Hôm nay tụi mình làm kiểu nhã nhặn tự nhiên hay nổi bật phá cách hẳn sếp?', vietnamese: 'Giúp khách thu hẹp lựa chọn nhanh chóng.' }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Bridging the Color Gap with a Busy Secretary',
        participants: [
          { name: 'Thuy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Thuy', role: 'Technician' },
          { name: 'Amber', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amber', role: 'Client' }
        ],
        lines: [
          { participant: 'Thuy', text: 'Alright Amber, here is our color wheel. Do you have any colors in mind today?', translation: 'Dạ Amber ơi, bảng khuyên tròn chọn sắc màu của bên em đây nha. Không biết nay chị có nghía được tông màu nào chưa sếp?' },
          { participant: 'Amber', text: 'I am so indecisive! I want my nails done, but I have no idea. Just something pretty, maybe pink or nude?', translation: 'Trời ơi chị lười nghĩ ghê, phân vân quá đi mất! Chị muốn sửa bộ móng tay lại cơ mà chả biết màu nào hợp. Cứ kiểu gì xinh xinh, chắc là hồng hay tông nude nhạt chăng?' },
          { participant: 'Thuy', text: 'Tell me, do you do a lot of hands-on work at your job?', translation: 'Dạ chị chia sẻ xíu, hằng ngày đi làm chị có phải gõ bàn phím nhiều hay làm gì tay chân động chạm mạnh không ạ?' },
          { participant: 'Amber', text: 'Yes, actually. I\'m a secretary, so I\'m typing on a keyboard all day long.', translation: 'À đúng rồi đó em. Chị làm thư ký hành chính nên suốt ngày cộc cạch gõ phím máy tính thô bạo lém.' },
          { participant: 'Thuy', text: 'In that case, I highly recommend a classic set with powder gel. It is very sturdy, and we can finish with a natural nude tone in a glossy coat so it won\'t show scratches easily.', translation: 'Dạ thế thì em nhiệt liệt khuyên chị làm một bộ móng đắp gel bột phom cổ điển nha. Dòng này siêu cứng cáp bền bỉ lắm luôn á, rồi mình chốt thêm tông hồng nude tự nhiên kết hợp một lớp sơn bóng bảo vệ nha, mẻ xước bàn phím cũng không lo lộ vết đâu sếp.' },
          { participant: 'Amber', text: 'Oh, that sounds perfect! Let\'s go with your plan.', translation: 'Uầy, nghe hợp lý quá chừng sếp ơi! Quyết vậy đi em, chị tin tay nghề em á!' }
        ]
      }
    ]
  },
  {
    id: 'beauty-03',
    title: 'Inclusive & Soft Dialogue',
    vietnameseTitle: 'Giao tiếp Đa văn hóa nhã nhặn',
    category: 'Communication',
    subCategory: ['For Beauty Professionals'],
    icon: '🌐',
    color: '#0E6251',
    description: 'Cách khen ngợi tông sắc tố da nhã nhặn, từ chối hoặc góp ý bằng từ ngữ cẩn trọng tránh gây tủi thân hay miệt thị về tuổi tác, màu da.',
    words: [
      { id: 'b3-1', word: 'Complexion', ipa: '/kəmˈplekʃn/', definition: 'Sắc thái toàn cảnh, màu sắc hay khía cạnh tự nhiên hiển thị của làn da.', translation: 'Sắc tố/Làn da diện mạo', example: 'This sunscreen helps brighten your dull complexion.', blankSentence: 'A deep red polish will match your glowing ____ beautifully.', emoji: '✨' },
      { id: 'b3-2', word: 'Skin tone', ipa: '/skɪn təʊn/', definition: 'Tông độ màu sắc đậm nhạt của da từ sâu bên trong cơ thể.', translation: 'Tông màu da', example: 'We have foundation shades for every single skin tone.', blankSentence: 'Pastel colors are very flattering on your warm ____.', emoji: '🎨' },
      { id: 'b3-3', word: 'Sunburned', ipa: '/ˈsʌnbɜːnd/', definition: 'Làn da bị tổn thương tấy đỏ rát do tiếp xúc trực tiếp quá lâu với tia UV.', translation: 'Bị cháy nắng', example: 'Our soothing aloe facial treatment is highly recommended for sunburned skin.', blankSentence: 'Protect your shoulders from getting ____ at the beach.', emoji: '🥵' },
      { id: 'b3-4', word: 'Ashy skin', ipa: '/ˈæʃi skɪn/', definition: 'Tình trạng da khô bong tróc tạo lớp sừng phấn trắng nhạt (phổ biến ở khách da màu khi trời hanh khô).', translation: 'Da khô mốc trắng', example: 'Applying heavy body butter prevents ashy skin on elbows and ankles.', blankSentence: 'Winter wind often causes dry, ____.', emoji: '❄️' },
      { id: 'b3-5', word: 'Compliment', ipa: '/ˈfəl-tə-rē//', definition: 'Một lời động viên, khen ngợi tinh tế ngọt ngào khiến người đối diện tự tin.', translation: 'Khen ngợi khéo', example: 'Giving a gentle compliment on their hair makes clients smile.', blankSentence: 'She loves to ____ her repeat customers on their style.', emoji: '💖' }
    ],
    structures: [
      { id: 'str103-1', phrase: 'This shade would look beautiful on your skin tone.', meaning: 'Tông màu sơn này cực kỳ tôn da của chị sếp ơi.', vietnamese: 'Khen ngợi và định hướng màu sơn tương thích, nâng niu làn da khách.' },
      { id: 'str103-2', phrase: 'Is your skin feeling a bit dry/sensitive today?', meaning: 'Cơ địa da hôm nay có cảm giác hơi khô hay nhạy cảm hơn không chị?', vietnamese: 'Thăm dò kỹ lưỡng trước khi bôi hóa chất mạnh hoặc tẩy da chết, tránh đụng chạm nhạy cảm.' }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Selecting a Gorgeous Shade for an Afro-American Client',
        participants: [
          { name: 'Lan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lan', role: 'Technician' },
          { name: 'Kisha', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kisha', role: 'Client' }
        ],
        lines: [
          { participant: 'Lan', text: 'Hi Kisha! I noticed your hands are feeling a tiny bit dry from the cold. Is your skin feeling sensitive today?', translation: 'Dạ chị Kisha ơi! Em sờ tay thấy hơi có chút khô rát do gió lạnh á. Không biết hôm nay da tay mình có cảm giác nhạy cảm hay ngứa xót gì không sếp?' },
          { participant: 'Kisha', text: 'Yes, child! My hands get so ashy and dry around this time of year. It\'s quite annoying.', translation: 'Chuẩn rồi cục cưng ơi! Cứ tầm mùa này là tay chân chị nó mốc khô trắng tợn ra vậy á, bực bội ghê hồn.' },
          { participant: 'Lan', text: 'No worries at all! I\'ll apply a deeply moisturizing sugar scrub and paraffin wax later. Meanwhile, let\'s pick a color. I think this rich caramel brown shade would look beautiful on your warm skin tone.', translation: 'Dạ chị đừng lo gì hết nha! Lát nữa em sẽ tẩm quất kem tẩy tế bào chết đường mía siêu dưỡng ẩm sâu kết hợp ủ sáp paraffin êm ái cho mịn màng lại nè. Trong lúc này mình lẩm nhẩm lựa màu móng nha. Em nghĩ tông nâu caramel đậm ấm áp này đắp lên tôn làn da ấm cực kỳ sang xịn mịn luôn á.' },
          { participant: 'Kisha', text: 'Oh, let me see... Wow, you\'re right. It really complements my natural complexion. You have a great eye!', translation: 'Ồ để chị nhòm coi... Uầy mọc mắt ghê, em tinh mắt lắm nha. Màu này lên phom nó hợp mượt mà sắc diện diện mạo da tự nhiên của chị ghê á, tinh ý gớm cơ!' },
          { participant: 'Lan', text: 'Thank you, Kisha! I just love making sure your nails match your natural glow.', translation: 'Dạ em cảm ơn chị Kisha nhiều nha! Thấy tông màu móng làm sáng bừng nét rạng ngời cá tính của chị là em sướng âm ỉ luôn á.' }
        ]
      }
    ]
  },
  {
    id: 'beauty-04',
    title: 'Confirming Desired Form',
    vietnameseTitle: 'Xác nhận Rõ ràng phom dáng móng',
    category: 'Communication',
    subCategory: ['For Beauty Professionals'],
    icon: '📐',
    color: '#F9DCC4',
    description: 'Cách hỏi chiều dài, dáng phom bấm bẻ (oval, square, coffin…), độ dày mỏng của mi nối bằng hình ảnh iPad, điện thoại.',
    words: [
      { id: 'b4-1', word: 'Shape', ipa: '/ʃeɪp/', definition: 'Các dạng dũa định hình của phom móng hoặc kiểu phân bổ của các cụm mi nối.', translation: 'Dáng phom móng/mi', example: 'Square shape is trendy, but almond shape makes fingers look slim.', blankSentence: 'What nail ____ are we filing down today?', emoji: '💅' },
      { id: 'b4-2', word: 'Thickness', ipa: '/ˈθɪknəs/', definition: 'Mức độ nông sâu dày mỏng của các sợi mi hoặc lớp thạch bột đắp móng.', translation: 'Độ dày/Độ mảnh', example: 'We should keep the acrylic thickness natural.', blankSentence: 'A medium ____ is best so the set won\'t feel too heavy.', emoji: '👁️' },
      { id: 'b4-3', word: 'Curl', ipa: '/kɜːl/', definition: 'Độ uốn cong của sợi mi dài đính vào bờ mắt.', translation: 'Độ cong mi', example: 'D curl is very dramatic, whereas C curl looks gentle and soft.', blankSentence: 'If you want open eyes, let\'s go with a CC ____.', emoji: '➰' },
      { id: 'b4-4', word: 'Reference picture', ipa: '/ˈrefrəns ˈpɪktʃə(r)/', definition: 'Tấm hình chụp mẫu cụ thể làm mốc hướng tới cho kỹ thuật viên thi triển.', translation: 'Ảnh mẫu tham chiếu', example: 'Please show me a reference picture so I can copy the design.', blankSentence: 'She pulled out a Pintrest ____ on her phone.', emoji: '📸' },
      { id: 'b4-5', word: 'Length', ipa: '/leŋθ/', definition: 'Mức độ dài ngắn của phom móng bột từ khóe ngoài ra hoặc sợi mi giả.', translation: 'Chiều dài móng/mi', example: 'Keep the length short because I type a lot.', blankSentence: 'Let me double-check the ____ of your index finger.', emoji: '📏' }
    ],
    structures: [
      { id: 'str104-1', phrase: 'Could you show me a reference picture of what you have in mind?', meaning: 'Sếp có ảnh mẫu hay kiểu dáng nào chị đang định làm không cho em xem với?', vietnamese: 'Trực quan hóa mong muốn siêu tốc, loại bỏ hiểu lầm ngôn từ.' },
      { id: 'str104-2', phrase: 'Is this length and thickness acceptable for you?', meaning: 'Độ dài ngang tầm này với độ dày đắp mỏng thế này đúng ý chị chưa ạ?', vietnamese: 'Hỏi xác nhận liên tục trong lúc giũa phom hoặc nối mi điểm đầu.' }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Shaping a Coffin Set with Pinterest Proof',
        participants: [
          { name: 'Minh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Minh', role: 'Technician' },
          { name: 'Brooke', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Brooke', role: 'Client' }
        ],
        lines: [
          { participant: 'Minh', text: 'Alright Brooke, before we lay down the acrylic, let\'s settle on the details. Could you show me a reference picture of what you have in mind?', translation: 'Dạ rồi Brooke ơi! Trước khi em đặt bột lên đắp vẽ, tụi mình chốt phom dáng phụ kiện xíu nha. Chị có ảnh mẫu tham khảo cụ thể nào về kiểu móng chị đang nhắm tới không sếp?' },
          { participant: 'Brooke', text: 'Yes, I saved this on Pinterest! See? It\'s like a sharp coffin shape with some glitter on the ring finger.', translation: 'Có chứ em yêu, chị găm sẵn ảnh mẫu này trên Pinterest rồi nè! Nhìn xem? Kiểu dáng coffin nhọn thon dài quyến rũ, kèm chút điểm kim tuyến ở ngón áp út á.' },
          { participant: 'Minh', text: 'Ah, I got it! Coffin shape. This is very popular. Now, about the length—is this tip extension length acceptable for you, or should we file it down a bit?', translation: 'Dạ a, em thông rồi nha! Dáng coffin kiêu sa quyến rũ đúng không ạ. Mẫu này đang hốt khách lắm sếp. Giờ bàn về chiều dài móng nè—độ dài móng giả nối thêm ra tầm này đã vừa mắt sếp chưa, hay em dũa lùi bớt tí xíu sếp ha?' },
          { participant: 'Brooke', text: 'Actually, let\'s trim it down just a tiny notch. I don\'t want to accidentally poke my eyes out with my contacts!', translation: 'À, dũa co ngắn lại một khấc nhỏ xíu hộ chị đi em. Dài thế này nhỡ tay chọc lòi con mắt đeo kính áp tròng của chị thì chết dữ, hi hi!' },
          { participant: 'Minh', text: 'Haha, safety first! I\'ll file it down to a sweet spot. How about the thickness? Let\'s keep it slim and sleek so it looks like your real nails.', translation: 'Haha, an toàn trên hết nha sếp! Em dũa thụt lại đúng tiêu chuẩn lý tưởng liền. Còn độ dày móng thì sao ạ? Để em giữ mỏng dẹt, thon gọn tự nhiên trông mượt như móng thật của chị luôn ha.' },
          { participant: 'Brooke', text: 'Yes, perfect! Slim but strong is my jam.', translation: 'Chuẩn bài rồi em ơi. Thanh mảnh nhưng chắc chắn dẻo dai là gu ruột của chị!' }
        ]
      }
    ]
  },
  {
    id: 'beauty-05',
    title: 'Explaining Sensations',
    vietnameseTitle: 'Giải thích cảm giác khi thi triển',
    category: 'Communication',
    subCategory: ['For Beauty Professionals'],
    icon: '🧖‍♀️',
    color: '#FEC89A',
    description: 'Báo trước cảm giác châm chích, nóng râm ran dưới máy sấy UV, tiếng rè rè máy mài móng móng để khách an tâm.',
    words: [
      { id: 'b5-1', word: 'Sting', ipa: '/stɪŋ/', definition: 'Cảm giác đau nhói buốt, râm ran châm chích nhẹ khi bôi cồn cồn, hóa chất hay nặn mụn.', translation: 'Buốt nhói/Châm chích', example: 'The facial toner might sting a little if you have tiny scratches.', blankSentence: 'Does the clay mask make your nose ____?', emoji: '🌶️' },
      { id: 'b5-2', word: 'Tingle', ipa: '/ˈtɪŋɡl/', definition: 'Cảm giác tê râm ran, buồn buồn dễ chịu lan rộng bờ da.', translation: 'Râm ran/Tê mát', example: 'The peppermint skin balm causes a refreshing tingle on the forehead.', blankSentence: 'My scalp started to ____ under the herbal wash.', emoji: '❄️' },
      { id: 'b5-3', word: 'Drill', ipa: '/drɪl/', definition: 'Máy mài móng xoay tốc độ cao có tiếng xè xè dùng để tẩy chuốt tháo phom.', translation: 'Máy mài móng điện tử', example: 'Don\'t worry, the electric drill won\'t hurt your real nail surface.', blankSentence: 'You will feel a little vibration from the ____.', emoji: '🔌' },
      { id: 'b5-4', word: 'Warmth', ipa: '/wɔːmθ/', definition: 'Cảm giác hơi nóng bốc dịu nhẹ khi tay ngâm nước ấm hay lồng hơ đèn sấy móng.', translation: 'Cơn âm ấm/Hơi nóng dịu', example: 'You\'ll notice a sudden warmth in the LED lamp as the gel cures.', blankSentence: 'The hot stone massage distributes deep ____ through your muscles.', emoji: '🔥' },
      { id: 'b5-5', word: 'Tightness', ipa: '/ˈtaɪtnəs/', definition: 'Cảm giác co bóp, căng khít làn da sau bước quấn nilon nilon hay đắp nạ thải độc.', translation: 'Cảm giác căng rít mịn', example: 'Skin tightness after skin peeling is totally standard.', blankSentence: 'When the clay mask dries, you will feel real ____.', emoji: '💆‍♀️' }
    ],
    structures: [
      { id: 'str105-1', phrase: 'It might feel a little warm under the LED light, just let me know.', meaning: 'Lát đút tay vô lồng máy LED sẽ hơi âm ấm sấy nóng tí sếp nha, có nóng rát gì sếp la em liền.', vietnamese: 'Dặn dò chu đáo giúp khách không giật nảy ra làm méo sơn gel chưa khô.' },
      { id: 'str105-2', phrase: 'You\'re going to hear a buzzing noise from the drill.', meaning: 'Tai chị sẽ nghe rè rè nhỏ máy dũa mài nha sếp.', vietnamese: 'Khách sợ tiếng ồn máy mài dễ lo tay bị dũa phạm phạm, trấn an trước là mấu chốt.' }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Trimming Old Gel Polish Without Panic',
        participants: [
          { name: 'Kieu', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kieu', role: 'Technician' },
          { name: 'Grace', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Grace', role: 'Client' }
        ],
        lines: [
          { participant: 'Kieu', text: 'Alright Grace, I\'m going to remove your old gel set now. For this step, you\'re going to hear a buzzing noise from the drill.', translation: 'Dạ chị Grace ơi, giờ em tính phá dỡ nước sơn sơn gel cũ cho mình nha. Bước này là tai mình nghe tiếng rè rè nhỏ xíu từ máy mài dũa điện tử á.' },
          { participant: 'Grace', text: 'Oh, will it scrape my nail skin? The last technician at another place made my nails feel paper-thin.', translation: 'Ủa em, nó có mài sạt mất da móng tự nhiên của chị không thế? Đợt trước chị làm tiệm khác thợ mài sấn sâu cảm giác móng mỏng dẹt dính như tờ giấy nến rát run người á.' },
          { participant: 'Kieu', text: 'I promise it won\'t. I have it on the lowest speed. You\'ll only feel a light vibration on your finger. Let me know if you feel any heat or friction.', translation: 'Dạ sếp yên tâm 100% không lo chuyện đó nha. Em vặn máy tốc độ rùa bò êm ái nhất rồi ạ. Chị chỉ thấy rung bần bật nhẹ như đi mát-xa vậy á. Có thấy hơi nóng hay xót tay rát dũa hông báo em buông ra liền nhen.' },
          { participant: 'Grace', text: 'Okay, that actually feels totally fine. Not painful at all.', translation: 'Ừ hay nha, sờ mài rà rà thế này thấy hoàn toàn êm ái dịu nha bồ. Ko đau đớn đau đớn gì hết.' },
          { participant: 'Kieu', text: 'Great! Now, as I apply the new coat and we dry it, it might feel a little warm under the LED light. If it gets hot, just lift your hand out for three seconds then put it back, okay?', translation: 'Dạ tuyệt sếp! Giờ em bôi nước bóng mới rồi đút sấy nha, lồng sấy LED hơi tỏa nhiệt hơi ấm râm ran một xíu. Có gì mà thấy hơi nóng rát ngón tay sếp cứ rụt ra ngoài 3 giây cho dịu rồi đút vô tiếp nha sếp.' }
        ]
      }
    ]
  },
  {
    id: 'beauty-06',
    title: 'Comfort in Pain',
    vietnameseTitle: 'Xử lý khéo léo khi khách đau rát',
    category: 'Communication',
    subCategory: ['For Beauty Professionals'],
    icon: '🩹',
    color: '#E8B6DF',
    description: 'Cách tạ lỗi dỗ ngọt khi nhỡ tay bấm chảy máu khóe móng, waxing quá nóng hay khách giật mình co giật tay đau rát.',
    words: [
      { id: 'b6-1', word: 'Flinch', ipa: '/flɪntʃ/', definition: 'Hành động giật nảy mình một phản xạ tự nhiên của cơ thể bảo vệ khi gặp đau đớn bất ngờ.', translation: 'Giật nảy người/Rụt tay', example: 'Don\'t worry, you flinched slightly but I caught your hand gently.', blankSentence: 'The hot wax made her ____ for a split second.', emoji: '⚡' },
      { id: 'b6-2', word: 'Ergonomic', ipa: '/ˌɜːɡəˈnɒmɪk/', definition: 'Tính chất thiết kế tư thế tối ưu nâng đỡ cơ thể không lo đau mỏi xương khớp.', translation: 'Đỡ mỏi/Chuẩn tư thế', example: 'This ergonomic leg rest saves the technician\'s sore back.', blankSentence: 'Make sure your sitting angle is ____.', emoji: '🪑' },
      { id: 'b6-3', word: 'Adjust', ipa: '/əˈdʒʌst/', definition: 'Điều chỉnh, vặn bớt bớt lực bóp, thay đổi gối kê tư thế.', translation: 'Điều chỉnh', example: 'I can adjust the intensity of the foot rub if it hurts.', blankSentence: 'Let me ____ this neck pillow to make you comfy.', emoji: '⚙️' },
      { id: 'b6-4', word: 'Soreness', ipa: '/ˈsɔːnəs/', definition: 'Cảm giác đau nhức âm ỉ rần rần dộp nổi đỏ sau khi làm da, wax hoặc xăm lột.', translation: 'Sự đau nhức/Sưng rát rát', example: 'A little soreness after a deep extraction is regular.', blankSentence: 'Apply cool water to ease the ____ on your skin.', emoji: '🔴' },
      { id: 'b6-5', word: 'Soothing gel', ipa: '/ˈsuːðɪŋ dʒel/', definition: 'Hợp chất làm dịu mẩm đỏ (thường chiết xuất từ nha đam) thoa bôi tức thì xoa tức tối dịu mát da.', translation: 'Gel xoa dịu làm mát da', example: 'This soothing gel will instantly calm down the red rashes.', blankSentence: 'We use premium organics ____ right after waxing.', emoji: '🍇' }
    ],
    structures: [
      { id: 'str106-1', phrase: 'Please let me know immediately if the pressure is too much.', meaning: 'Có bóp ấn hay miết mạnh quá chị la làng báo em liền nhen.', vietnamese: 'Mẫu câu vàng khi làm spa, mát-xa chân tay.' },
      { id: 'str106-2', phrase: 'Let me adjust my grip and do it more gently.', meaning: 'Em lỏng tay lại tí dũa chuốt nhè nhẹ dịu ngọt hơn nha sếp.', vietnamese: 'Bày tỏ sự khéo léo bồi đắp uy tín tiệm khi lỡ tay làm khách nhăn mặt.' }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Nipping Cuticle Ouch Moment Comfort',
        participants: [
          { name: 'Vy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vy', role: 'Technician' },
          { name: 'Emma', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma', role: 'Client' }
        ],
        lines: [
          { participant: 'Vy', text: 'Okay Emma, I\'m going to clean up your cuticles helper skin. Please let me know immediately if the pusher is too firm or hurts your side.', translation: 'Dạ rồi Emma ơi, giờ em rà nhặt da khóe biểu bì tế bào chết cho mình nha. Chị nhớ la báo em liền nếu thanh đẩy da em đi quá lực hay rát sếp nha.' },
          { participant: 'Emma', text: 'Actually, ouch! That corner feels really sore. Can you go easy on this pinky finger?', translation: 'Dạ, ui da đau đau đau! Cái góc sườn khóe khóe đó ê rát nhói dại người luôn á. Em đi nương nương lực lỏng ngón út này đi em yêu hỡi.' },
          { participant: 'Vy', text: 'Oh! I am so sorry about that. You flinched a little, did I pinch you? I\'ll adjust my grip and do it more gently. Let me apply a soothing gel right away.', translation: 'Dạ ôi thôi thôi chết, em vô cùng xin lỗi sếp nha! Sếp giòn giã rụt tay giật nảy thế kia, em nhỡ tay bấm lẹ kẹp nhói da sếp rồi hử sếp hỡi? Để em giảm lực lỏng tay lại lách đầu kềm nhè nhẹ dịu ngọt mềm mướt như lướt sóng nha. Đợi em bôi xíu gel lô hội mát lạnh xoa dịu rát da liền nhen.' },
          { participant: 'Emma', text: 'Whew, thank you. Yes, that gel cooled it off. I have thin cuticles, so they bleed easily.', translation: 'Phù, chị cảm ơn cưng nha. Ừa bôi gel nha đam rười rượi cái bớt rát buốt buốt rần rần liền luôn. Cơ địa da sườn viền móng móng của chị siêu mỏng dễ rách bật máu chảy lắm á.' },
          { participant: 'Vy', text: 'I understand completely, Emma. I made a special note in your client record file about your thin cuticles, so from now on, I will use extra light pressure on your hands.', translation: 'Dạ em tường tận mỏ hết rồi sếp Emma ơi sếp có làn da sườn mỏng ranh mãnh. Em ghim ghi chú kịch độc độc quyền trong hồ sơ riêng của sếp rồi nè, từ này về sau các buổi sau em sẽ rà kềm lực chuốt bông gòn bông hoa tơ duyên mượt mà mướt nhẹ nhất cho sếp nha.' }
        ]
      }
    ]
  },
  {
    id: 'beauty-07',
    title: 'Surviving Accent & Slang',
    vietnameseTitle: 'Giải quyết Trở ngại Ngôn ngữ',
    category: 'Communication',
    subCategory: ['For Beauty Professionals'],
    icon: '🗣️',
    color: '#78281F',
    description: 'Cách mượn khách nói chậm lại bằng từ nhã nhặn nhã nhặn, paraphrase để xác minh chốt ý khi khách nói quá nhanh, dùng tiếng lóng.',
    words: [
      { id: 'b7-1', word: 'Slang', ipa: '/slæŋ/', definition: 'Tập hợp các thuật ngữ lóng không trang quy chuẩn nhưng khách Mỹ bản địa sải dùng rất nhiều.', translation: 'Tiếng lóng/Câu nói lóng', example: 'Teenage clients use slang words like "snatched" to mean perfect nail art.', blankSentence: 'Sorry I\'m not familiar with this ____, what does it mean?', emoji: '🤪' },
      { id: 'b7-2', word: 'Pardon', ipa: '/ˈpɑːdn/', definition: 'Câu van nài tạ lỗi lịch sự xin đối diện lặp lại câu từ vì chưa nghe kịp dội tai.', translation: 'Dạ xin lỗi/Nghe chưa rõ ạ', example: 'Pardon? Did you say you want matte or extra glitter?', blankSentence: '____ me, could you repeat that?', emoji: '👂' },
      { id: 'b7-3', word: 'Mumble', ipa: '/ˈmʌmbl/', definition: 'Lối phát ngôn lý nhí trong miệng, líu cước líu lưỡi cực khó đón tai âm thanh.', translation: 'Nói lý nhí rầm rì', example: 'When clients mumble, it is very hard to understand their design choices.', blankSentence: 'Try not to ____, please speak a little louder.', emoji: '🤫' },
      { id: 'b7-4', word: 'Paraphrase', ipa: '/ˈpærəfreɪz/', definition: 'Hành động dùng từ ngữ đơn giản của mình dịch lại tóm tắt dập tắt để khách xác nhận đúng sai.', translation: 'Diễn giải lại ý/Xác nhận', example: 'Let me paraphrase to confirm we are on the same page.', blankSentence: 'I will ____ your request so I won\'t make mistakes.', emoji: '📝' },
      { id: 'b7-5', word: 'Visual aid', ipa: '/ˈvɪʒuəl eɪd/', definition: 'Tất thảy các bảng mẫu vẽ vẽ sơn dính thạch móng, tranh ảnh hỗ nâng kề bờ bên rực trực ranh.', translation: 'Hình ảnh, mẫu móng trực quan', example: 'The visual aid nails boards help bridge any extreme language barrier.', blankSentence: 'Let\'s check the color ____ on my iPad.', emoji: '🖼️' }
    ],
    structures: [
      { id: 'str107-1', phrase: 'Could you say that a bit slower for me? I want to make sure I get it perfect.', meaning: 'Sếp ơi chị nói nhè nhẹ chậm chậm xíu hộ em được không sếp? Em muốn sấn tai nghe thật kỹ đắp vẽ chuẩn đét 100% cho sếp luôn á.', vietnamese: 'Lý do chính đáng "muốn làm móng móng đẹp nhất cho khách" làm khách cực vui vẻ nói chậm lại.' },
      { id: 'str107-2', phrase: 'So if I understand correctly, you want [X], right?', meaning: 'Vậy nếu em không trật đường luồng hiểu đúng ý chị là chị muốn làm [Kiểu X], đúng chuẩn chưa sếp hỡi?', vietnamese: 'Chốt xác lập lại yêu cầu chắc chắn không lo làm sai hỏng.' }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Decoding the "Snatch my Claws" Teen Request',
        participants: [
          { name: 'Phuong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Phuong', role: 'Technician' },
          { name: 'Kylie', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kylie', role: 'Client' }
        ],
        lines: [
          { participant: 'Phuong', text: 'Hi Kylie! Great having you. What are we planning to do with your hands?', translation: 'Dạ chào Kylie dễ thương nha! Nay chị ghé em vui ghê hồn. Mình tính thiết kế bộ móng tay thế nào đây sếp yêu hỡi?' },
          { participant: 'Kylie', text: 'Hey bestie! I wanna literally snatch my claws, you know? Like, make \'em totally fleek! Chromey stiletto vibe!', translation: 'Aloo cưng em yêu! Nay vô sòng tính tút tát quất bộ vuốt vuốt "claws" cho sắc bén bốc lửa "snatch" giật gân, em hiểu hông? Kiểu phom dáng phải siêu bén "fleek" dã man á! Cho chị dính quả móng nhọn hoắt stiletto ánh tráng gương lóng lánh bùng cháy nha nhe!' },
          { participant: 'Phuong', text: 'Oh, pardon me, Kylie. Could you say that a bit slower for me? I want to make sure I get your nails perfect.', translation: 'Dạ ối, chị Kylie ơi tạ lỗi với sếp nha. Chị nói nhè nhẹ dãn nhịp chậm chậm xíu hộ em được không sếp hông ta hử? Em nách tai nghe kỹ giáp móng đắp vẽ chuẩn phom kịch trần tuyệt tác nhất cho sếp luôn nè.' },
          { participant: 'Kylie', text: 'Haha, sorry! I speak too fast. Basically, I want a stiletto nail shape, and I want silver chrome powder on all ten fingers.', translation: 'Haha, tội nghiệp cưng, lỗi chị nói toe toe súng máy bốc xù lẹ quá. Đại khái là chị muốn tạo dáng phom móng nhọn nhọn như đầu kiếm stiletto này nè, rồi đánh bột tráng gương màu bạc lấp lánh chói lọi phủ tràn đầy cả mười ngón ngón luôn á cưng yêu.' },
          { participant: 'Phuong', text: 'Ah, so if I understand correctly, you want the stiletto pointed shape, finished with silver chrome on all fingers, looks exactly like this visual aid on my iPad, right?', translation: 'A, tuyệt rồi chị ơi em sướng sướng hiểu thấu rành rồi nha! Vậy chốt chuẩn là dáng móng vuốt nhọn stiletto bốc lửa, rồi phủ bột tráng gương xi mạ bóng láng màu bạc toàn tập tràn 10 ngón tay, nhìn y chang mẫu trên iPad này em mở lên cho chị đúng chưa sếp hỡi sếp hử?' },
          { participant: 'Kylie', text: 'Omg, yes! That is exactly what I mean. Snatched!', translation: 'Trời hỡi ơi trúng phóc rồi em yêu ơi! Ý chị rành rọt rành mạch thế đấy đó cưng. Chụp mẫu bái sư làm lẹ đi cưng, tuyệt vời ông mặt trời!' }
        ]
      }
    ]
  },
  {
    id: 'beauty-08',
    title: 'Grace Period Rules',
    vietnameseTitle: 'Xử lý Khách trễ hẹn & Phút chót',
    category: 'Communication',
    subCategory: ['For Beauty Professionals'],
    icon: '⏳',
    color: '#1A5276',
    description: 'Cách giải thích chính sách thời gian đợi cho phép (grace period 15-20p), đổi ca hẹn hoặc khéo từ chối phát sinh vẽ móng phức tạp.',
    words: [
      { id: 'b8-1', word: 'Grace period', ipa: '/ɡreɪs ˈpɪəriəd/', definition: 'Khoảng thời sảnh đợi sụt lùi muộn tối đa cho phép trong nội quy sòng tiệm rước khi bị hủy hay cắt bớt thời sảnh.', translation: 'Thời gian trễ cho phép', example: 'Serene Palms has a strict fifteen-minute grace period.', blankSentence: 'If you exceed our ____, we will have to reschedule your slot.', emoji: '⌚' },
      { id: 'b8-2', word: 'No-show fee', ipa: '/ˌnəʊ ˈʃəʊ fiː/', definition: 'Mức tiền phạt hụt hẫng hụt hẹn chấn chỉnh dành cho khách đăng ký xong bùng bặt tăm không báo cáo xóa buổi.', translation: 'Phí phạt bùng hẹn', example: 'Avoid a twenty percent no-show fee by calling two hours in advance.', blankSentence: 'We require a credit card deposit to cover the ____.', emoji: '💸' },
      { id: 'b8-3', word: 'Squeezed in', ipa: '/skwiːzd ɪn/', definition: 'Cố nẹp lách khe chen chúc hùa chen thời gian dồn ca hỗ trợ khâu khách rước.', translation: 'Cố lách/Sắp xếp xen lịch', example: 'The bookkeeper managed to get me squeezed in between appointments.', blankSentence: 'Our lash master is fully booked, but we got you ____ today.', emoji: '🥪' },
      { id: 'b8-4', word: 'Cancellation policy', ipa: '/ˌkænsəˈleɪʃn ˈpɒləsi/', definition: 'Nghị định quy chế hủy lịch báo mốc thời gian giữ uy sòng.', translation: 'Chính sách hủy lịch hẹn', example: 'Read our cancellation policy online before booking.', blankSentence: 'According to our ____, same day cancels pay half.', emoji: '📄' },
      { id: 'b8-5', word: 'Last-minute request', ipa: '/lɑːst ˈmɪnɪt rɪˈkwest/', definition: 'Đòi hỏi lách phác dấy động đùng phát sát rạt trước hay ngay sòng làm.', translation: 'Yêu cầu phát sinh sát nút', example: 'We can\'t accept complicated nail sketch on a last-minute request.', blankSentence: 'Is this ____ possible to add today?', emoji: '⏰' }
    ],
    structures: [
      { id: 'str108-1', phrase: 'We have a 15-minute grace period before we must shorten the service.', meaning: 'Quy tắc bên tiệm tụi em chỉ cho dời tối đa 15p thôi nhen sếp, quá là bọn em buộc phải cắt ngắn khâu dịch vụ á.', vietnamese: 'Giải thích nhẹ nhàng lý trí bảo vệ uy sòng.' },
      { id: 'str108-2', phrase: 'Since we have another client reserved right after, we can...', meaning: 'Vì sờ ngay gót sảnh sau ca này tiệm vướng một khách khác đúc vào sườn rồi sếp hỡi, nên tụi em dồn lực chỉ làm kịp...', vietnamese: 'Khéo léo phân bua lý do khách quan không xúc phạm khách bận.' }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Explaining 20-Minutes Lateness Policy Squeeze',
        participants: [
          { name: 'Khang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Khang', role: 'Technician' },
          { name: 'Britney', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Britney', role: 'Client' }
        ],
        lines: [
          { participant: 'Khang', text: 'Oh! Hello Britney! Glad you made it safely. We were a little worried about you.', translation: 'Dạ, a aloo chào chị Britney ạ! Mừng sếp an lành vác tay ghé tới nha. Nãy giờ bọn em cứ móng ngóng phập phồng lo sếp gặp han xe cộ gì ngoài sườn.' },
          { participant: 'Britney', text: 'Hey Khang, so sorry I\'m like twenty minutes late! The traffic lights near the bridge were a total nightmare. Can we still start my full acrylic set with the flower design?', translation: 'Aloo Khang hỡi, bách lỗi ngàn lỗi nha cưng chị bị bò lết trễ mất tận 20p rồi á! Cái cụm đèn đỏ chét ngã rẽ mé chân cầu kẹt dồn ác mộng run bần bật dữ hồn. Giờ tụi mình nhào sòng đắp Acrylic trọn bộ vẽ hoa lá hẹ cành đào bồng cho chị luôn kịp hông ta?' },
          { participant: 'Khang', text: 'I completely understand the traffic, Britney. However, as discussed beforehand, we have a strict fifteen-minute grace period before we must shorten the service or reschedule to avoid messing up the whole day.', translation: 'Dạ em thấu hết n cảnh kẹt xe ngột ngạt ngày sườn rồi chị Britney ơi. Cơ mà tủ thảm sòng quy chế như bữa tụi mình chốt từ trước á, tiệm em chỉ ráng nín thở đợi sếp đợi trễ tối đa 15 phút thôi hà nhen, lố giờ đó dồn ứ là buộc phải cắt bớt phân đoạn làm hay dời buổi khác chứ ko là vỡ mâm lây lan trễ sạt sòng phao của cả dàn khách hôm nay sếp ạ.' },
          { participant: 'Britney', text: 'Oh no! Can\'t you just speed it up? Or maybe skip lunch break to do my flowers?', translation: 'Trời đất ơi! Cưng đẩy tốc độ sấp ngửa bay nhảy dũa gió bão bão giùm chị đi hông cưng hử? Hoặc cưng cúp ca ăn trưa gặm sấn bánh mì vẽ hoa dực dực giùm chị xíu nhen cưng?' },
          { participant: 'Khang', text: 'I wish I could, Britney! But since we have another client reserved right after you at 1:30 PM, we don\'t have enough hours for intricate nail design now. What we can do is get you a gorgeous, clean base set of acrylic today, and squeeze you in next Tuesday for the custom hand-paint flowers. How does that sound?', translation: 'Dạ ước chi tay em mọc cánh sấm sét dũa đại cho sếp được luôn á sếp huyên hỡi! Cơ mà khẹt sườn khôn khéo là đúng 1 giờ rưỡi trưa nay tiệm vướng cứng ngắc ngắc một ca đặt phòng gối đầu sườn ngay gót sếp rồi ạ, ko dơi dời dũa kịp họa tiết vẽ tay tỉ mẩn rải ngón đâu sếp. Phương án tối ưu thong dong bây giờ là hôm nay em tút tát quất phom dũa nền Acrylic trơn mượt bóng láng bốc lửa sang xịn kịch trần trước nha sếp, rồi em chốt nách lách xen ca "squeezed in" xếp súp sườn chị đúng thứ Ba tuần sau ghé thả lướt cọ múa hoa dực sắc sau nha sếp. Nghe mát mẻ hài hòa đôi đường chuẩn bài hết nấc chưa sếp?' },
          { participant: 'Britney', text: 'Alright, you have a solid point. I don\'t want to ruin the next person\'s Saturday either. Let\'s do the clean regular acrylic set today.', translation: 'À thôi, cưng phân tích thấu tình đoạt lý dữ hồn thế thì chị nghe rắp rắp. Chị cũng muốn giữ lối sống văn minh chả ai muốn bị sụt ca ngày thứ Bảy. Quất phom sơn móng đắp dũa Acrylic sạch trơn sang sành điệu trước đi em hử!' }
        ]
      }
    ]
  },
  {
    id: 'beauty-09',
    title: 'Chatty Handlers',
    vietnameseTitle: 'Giải tỏa stress Khách nói dông',
    category: 'Communication',
    subCategory: ['For Beauty Professionals'],
    icon: '🧘‍♀️',
    color: '#D35400',
    description: 'Cách ứng xử tinh tế khi khách thao thao kể chuyện riêng tư, cãi vã, buôn dưa hoặc trút giận lên chất lượng, giữ sòng im lặng dập lửa.',
    words: [
      { id: 'b9-1', word: 'Gossip', ipa: '/ˈgɒsɪp/', definition: 'Hành động kể tể chuyện, bàn tán sâu xa riêng tư đời tư của một bên thứ ba.', translation: 'Bàn tán chuyện ngoài lề', example: 'We should never participate in office gossip with our clients.', blankSentence: 'I prefer to keep things professional and avoid any political ____.', emoji: '🗣️' },
      { id: 'b9-2', word: 'Neutral', ipa: '/ˈnjuːtrəl/', definition: 'Thái độ giữ vững mực tầm trung lập không rẽ vây tán đồng hay chê trách gây kích thích hận thù.', translation: 'Giữ thái độ trung lập', example: 'Keeping a neutral stance during political rants is a server lifesaver.', blankSentence: 'Just nod your head and provide ____ responses when they complain.', emoji: '⚖️' },
      { id: 'b9-3', word: 'Unsatisfied', ipa: '/ʌnˈsætɪsfaɪd/', definition: 'Cảm giác hậm hực không thỏa mãn khi móng mi da nặn bị lệch lệch phom mong đợi.', translation: 'Không ưng ý/Bất mãn', example: 'If an unsatisfied client raises their voice, speak softer.', blankSentence: 'We always redo the treatment for ____ guests.', emoji: '😡' },
      { id: 'b9-4', word: 'Redo', ipa: '/ˌriːˈduː/', definition: 'Thao tác dũa mài tẩy rửa đập bỏ dán thạch móng xóa vết nối mi làm lại mới cho ưng mới thôi.', translation: 'Làm lại hoàn toàn mới', example: 'I will redo this pointer finger nail to match your template.', blankSentence: 'There is no charge for us to ____ a mistakes we made.', emoji: '🔄' },
      { id: 'b9-5', word: 'Vent', ipa: '/vent/', definition: 'Hành động nói toe bốc hỏa xổ ra cục tức gắt gao trong người cho vơi bớt xót xót.', translation: 'Xả giận/Than phiền vơi tức', example: 'A facial spa slot is sometimes just a place for women to vent their household stress.', blankSentence: 'Kylie just needed to ____ about her terrible boss tonight.', emoji: '😤' }
    ],
    structures: [
      { id: 'str109-1', phrase: 'I completely understand your frustration, let me make it right for you.', meaning: 'Em thấu hiểu hết dằn vặt oán ức bực bội khó tả của sếp rôi nha, để em tận lực dốc tay sửa sang uốn nắn chuẩn lại liền nha sếp.', vietnamese: 'Vuốt giận xoa dịu xém xẹp hỏa khách cằn nhằn.' },
      { id: 'str109-2', phrase: 'Let\'s focus on shaping a nice form first, and you can tell me...', meaning: 'Giờ tụi mình chú tâm uốn kéo dáng phom tạo móng thật nuột cho chuẩn trước nhen sếp, rồi sếp thấy chỗ nào chưa ổn sếp cứ nách lời sửa nha.', vietnamese: 'Kéo khách đang buôn dưa hoặc trút hận về thế sành điệu làm việc tinh kỳ.' }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Calming down a venting husband-complainer client',
        participants: [
          { name: 'Nga', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nga', role: 'Technician' },
          { name: 'Jessica', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jessica', role: 'Client' }
        ],
        lines: [
          { participant: 'Nga', text: 'Hi Jessica! How is your weekend treating you so far?', translation: 'Dạ chào chị Jessica! Ngày cuối tuần hằng mong ước của sếp hôm nay khởi sắc thế nào rồi ạ sếp?' },
          { participant: 'Jessica', text: 'Oh, don\'t ask, Nga! I\'m absolutely livid! My husband did nothing but watch sports and leave dirty dishes in the sink all morning. Men are just totally useless, aren\'t they?', translation: 'Trời ơi bồ đừng có hỏi han làm gì Nga ơi rầu dữ hồn rụng rốn rụng râm rập rắp rắp! Bực lộn ruột gan thô bạo lên nè! Sáng ngày sướng trời ra ông chồng tớ chả mó tay động chân gì rải rác coi thể thao hét lác rồi ném rổ rổ chén bát lấm lem mốc bồn rửa. Sờ tới lũ đàn ông đúng chất vô dụng xài cạn sức ăn hại xấp mặt bồ há?' },
          { participant: 'Nga', text: 'Oh, sorry to hear that, Jessica. Gosh, managing family life and keeping home clean can be very tiring indeed.', translation: 'Dạ ui xót ghê á sếp, chia buồn dồn dức gác dỡ ghen tuông gia can hằng ngày của bồ nhen Jessica ơi. Làm ăn lo vun vén sườn nhà cửa tổ ấm bận cơ quan dồn việc mệt muốn chết mệt lả mệt lử run bần bật dữ hồn thiệt á.' },
          { participant: 'Jessica', text: 'And look at this middle thumb finger! The shape looks a bit uneven to me. The technician last time made such an ugly base.', translation: 'Mà coi nhìn nghía quả ngón tay cái sườn giữa sườn móng này xem! Phom thô lệch vẹo không tăm tắp chắt đều gì với sòng móng rải rác bên cạnh hà. Tiệm gì ca kĩ thuật thợ trước múa kéo đẽo đắp gớm guốc xấu òm tệ hại mứt hột luôn á.' },
          { participant: 'Nga', text: 'I completely understand your frustration, Jessica. Let me make it right for you today. Let\'s focus on shaping a nice, clean tapered coffin base first of all, and you can point out any spot you need me to adjust immediately. We\'ll get you shiny, perfect nails to wash away that bad day!', translation: 'Dạ chị Jessica hỡi em thấu hết dằn vặt oán giận tức bốc hỏa hậm hực của sếp rồi nha sếp yêu. Cứ để dốc hết binh tinh tay nghề đẫy đà hôm nay em chuốt sang tạo mượt ngọt tạ lễ sếp luôn nha. Lời răn đầu là tụi mình chú tâm mài giũa dáng móng coffin thuôn gọn tinh tế bóng láng kịch trần kình địch này trước nhen sếp, rồi sếp sấn mắt chỉ lướt dũa ngón nào trật kẽ phom sếp hô em sửa luôn nách chỗ tức tưởi nha sếp. Em dâng bộ móng siêu bóng bẩy lung linh xua tan bay sạch mây mù đen thui dột nát ngày hôm nay của sếp luôn nhen!' },
          { participant: 'Jessica', text: 'Aww, you\'re such a sweetheart, Nga. Thank you for listening to my rants. Yes, this shape is looking gorgeous already!', translation: 'Uầy, Nga nói ngọt mát rượi mát lòng mát ruột cưng ghê cưng ơi, như hũ mật rót rầm rầm tai á. Cảm ơn cưng tỉ tê gánh vác nuông chiều bệ tai nghe chị xàm xí than oán nha. Ừa dòm dũa vuốt tay nãy giờ thấy phom dáng nắn ôm sát tăm tắp nuột rày quyến rũ kịch trần nực bốc rồi đó em yêu!' }
        ]
      }
    ]
  },
  {
    id: 'beauty-10',
    title: 'Charges & Smart Upsells',
    vietnameseTitle: 'Phụ thu & Upselling dưỡng móng khôn khéo',
    category: 'Communication',
    subCategory: ['For Beauty Professionals'],
    icon: '💰',
    color: '#117864',
    description: 'Cách giải thích khéo léo phụ phí tháo móng cũ móng gãy nứt, gạ khách up-sell dùng dầu dưỡng biểu bì hay parrafin ko ép buộc.',
    words: [
      { id: 'b10-1', word: 'Surcharge', ipa: '/ˈsɜːtʃɑːdʒ/', definition: 'Khoản thu phụ gia thêm vào vì dịch vụ làm ngoài khung đơn chuẩn móng như phá bột mộc mẻ móng đắp đá vẽ ngón.', translation: 'Phụ phí phát sinh', example: 'There is a seven-dollar surcharge for changing nail shape from round to almond.', blankSentence: 'Removing gel polish has a small five-dollar ____.', emoji: '📈' },
      { id: 'b10-2', word: 'Specialty shape', ipa: '/ˈspeʃəlti ʃeɪp/', definition: 'Những dáng phom móng khó đẽo mài tốn nhiều công dũa lượn cạnh.', translation: 'Phom móng đặc biệt/bản quyền', example: 'Coffin and Stiletto are considered specialty shapes in our pricing list.', blankSentence: 'Is there an extra charge for a long ____?', emoji: '📏' },
      { id: 'b10-3', word: 'Cuticle oil', ipa: '/ˈkjuːtɪkl ɔɪl/', definition: 'Hợp chất dầu thoa mát vùng rìa khóe móng giúp bổ ẩm cấp dưỡng ngăn da tước xước mọc móng rớt.', translation: 'Dầu mỡ dưỡng khóe móng', example: 'Rubbing cuticle oil every evening makes your manicure last double time.', blankSentence: 'I highly suggest taking home a bottle of organic ____.', emoji: '💧' },
      { id: 'b10-4', word: 'Cash tip', ipa: '/kæʃ tɪp/', definition: 'Tiền thưởng boa sòng phẳng bằng tiền mặt thỏi tạ thợ đúp tay thọc trực tiếp không quẹt hụt ngân thẻ.', translation: 'Tiền boa mặt/Tip tay', example: 'While card tipping works, our staff always prefers a cozy cash tip.', blankSentence: 'You can write the tip on receipt or slip some ____ in the jar.', emoji: '💵' },
      { id: 'b10-5', word: 'Combo deal', ipa: '/ˈkɒmbəʊ diːl/', definition: 'Gói sáp kết hợp hai dọn dịch vụ tay chân song hành để hạ bớt đỉnh giá ưu đãi kéo khách bám sòng.', translation: 'Gói combo ưu đãi gộp', example: 'We have a weekend combo deal for spa facials and lash lift extensions.', blankSentence: 'Book our manicure and pedicure ____ to shave off fifteen dollars!', emoji: '🎁' }
    ],
    structures: [
      { id: 'str110-1', phrase: 'There is a small surcharge of [X] for removing the old gels.', meaning: 'Dạ bên em có khoản phụ phí nhỏ [X] đô để tẩy tháo nước sơn cũ móng gel ra nha sếp.', vietnamese: 'Công bố trước minh bạch mỏ giá, tránh khách tá hỏa lúc thanh toán tại quầy.' },
      { id: 'str110-2', phrase: 'If you want to keep the skin around your finger soft, I suggest...', meaning: 'Dạ sếp muốn giữ vùng da sườn quanh kẽ móng láng o mềm mại mượt bảnh bóng o thì em khuyên sếp nên dùng...', vietnamese: 'Lối gợi mở up-sell sản phẩm vô cùng tự nhiên và chứa chan quan tâm khách.' }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Explaining Acrylic Debts & Recommending Cuticle Oils',
        participants: [
          { name: 'My', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=My', role: 'Technician' },
          { name: 'Valerie', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Valerie', role: 'Client' }
        ],
        lines: [
          { participant: 'My', text: 'Alright Valerie, since you wanted a full set of stiletto Gel-X today, I noticed you have some left-over hard gel acrylic on your nails. Do you mind if we soak it off first?', translation: 'Dạ Valerie ơi, nay mình làm trọn bộ Gel-X phom nhọn hoắt stiletto sang trọng sang sành nhen sếp. Tuy nhiên em rờ thấy móng sườn mình dính tàn tích lớp đắp bột đá bám chặt cứng từ trước á. Em xin phép ngâm tháo tháo rã lớp móng bột cũ này ra trước rồi mới thi công nha sếp.' },
          { participant: 'Valerie', text: 'Sure, get that gunk off. Oh, but wait, is it included in the base price?', translation: 'Ừ cưng tháo tẩy phanh phui bay phăng đống gỉ sắt bồn móng đó đi cho nhẹ nách nhen. Mà khoan hụt cho chị hỏi tí, cái khâu phá tháo bột cũ này có gộp chung thối gộp tiền nền ban đầu hông đó dợ?' },
          { participant: 'My', text: 'Just to be upfront, because removing hard gel takes about twenty minutes of wrap soaking, there is a small surcharge of ten dollars for removing the old acrylic, and a ten-dollar fee for the stiletto specialty shape. But our weekend manicure-pedicure combo deal will actually save you fifteen dollars today, which almost covers it!', translation: 'Dạ sếp huyên huyên, để em giãi bày rành mạch trước cho sếp yên lòng nhen sếp hông, khâu cạo phá rả bột bám cứng nắp này tốn của em tận dâu 20 phút ủ bọc Acetone dũa rà bủn tay á sếp, nên bên sòng tiệm quy chế có dính khoản phụ thu surcharge 10 đô tháo móng cũ, cộng 10 đô tạo dáng phom specialty shape stiletto sắc sảo rực ranh nè sếp. Cơ mà bù sướt lại nách là nay chị gộp làm combo móng tay+chân gộp dính "combo deal" cuối tuần tiệm em giảm nóng bốc khói hẳn 15 đô lận á sếp, coi như bù trừ đắp cọc khít khì khịt gánh bớt mâm phụ thu luôn nha sếp yêu!' },
          { participant: 'Valerie', text: 'Oh! Well, that\'s actually a pretty good compromise. Excellent work on breaking that down for me, My.', translation: 'Ồ! Tính cua gạt lẩm nhẩm thế thì sướng ngọt đôi đường mượt ghê á cưng. Cưng liệt kê phân tích giá sòng phẳng rõ như ban ngày thế chị thích sướng sướng lém nha.' },
          { participant: 'My', text: 'Thank you, Valerie! Also, I see your finger sides are cracking. If you want to keep the skin around your nail bed soft and prevent snagging, I suggest picking up this organic lavender cuticle oil before you walk out. You only need a drop before bed!', translation: 'Dạ em cảm ơn Valerie sếp bảnh lém nha! Với lị em chuốt dũa tay thấy sườn sườn khóe khóe móng mình nứt nẻ sần sùi ghê mọc rớt tước xước da nè sếp. Chị muốn da chung quanh dẻo mát nuột o mềm mại bớt trầy xước móc quần áo xơ tóc, em gợi ý nhẹ sếp mua mang về tuýp tinh dầu cuticle oil hoa oải hương hữu cơ này bôi dưỡng nhen sếp. Chỉ cần búng nhỏ một giọt rà khó khóe móng móng mỗi tối trước ngủ là tay láng mịn nuột tơ mướt mát liền à!' },
          { participant: 'Valerie', text: 'You know what? Throw a bottle in my bill. I absolutely hate hangnails.', translation: 'Uầy mê mọc rồi nha bồ! Cộng bỏ thêm giùm chị một chai bự vô hóa đơn thanh toán luôn đê em. Chị thù khiếp vía dăm mọc rớt móng tước lột rát rạt này bấy lâu nay á!' }
        ]
      }
    ]
  }
];
