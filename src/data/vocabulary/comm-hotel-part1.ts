import { Topic } from './types';

export const hotelTopicsPart1: Topic[] = [
  // Buổi 1: Chào hỏi & giao tiếp cơ bản
  {
    id: 'hotel-01',
    title: 'Hotel Greetings & Core Courtesy',
    vietnameseTitle: 'Buổi 1: Chào hỏi & Giao tiếp cơ bản',
    category: 'Communication',
    subCategory: ['Hotel & Hospitality'],
    icon: '🏨',
    color: '#0284c7',
    description: 'Cách chào khách, tự giới thiệu, hỏi thăm lịch sự, xin phép, cảm ơn, xin lỗi, đề nghị hỗ trợ và giới thiệu dịch vụ chính.',
    words: [
      { id: 'h1-1', word: 'Hospitality', ipa: '/ˌhɒspɪˈtæləti/', definition: 'Sự hiếu khách, ngành khách sạn', translation: 'Lòng hiếu khách', example: 'Our resort is renowned for genuine Vietnamese hospitality.', blankSentence: 'We pride ourselves on providing world-class ____.', emoji: '🤝' },
      { id: 'h1-2', word: 'Courtesy', ipa: '/ˈkɜːtəsi/', definition: 'Sự lịch thiệp, nhã nhặn', translation: 'Sự lịch thiệp', example: 'Always greet arriving guests with warmth and courtesy.', blankSentence: 'Professional ____ is essential at the front desk.', emoji: '✨' },
      { id: 'h1-3', word: 'Concierge', ipa: '/kɒn.siˈeəʒ/', definition: 'Nhân viên hỗ trợ thông tin & đặt dịch vụ cho khách', translation: 'Nhân viên trợ giúp khách hàng', example: 'The concierge can book dinner reservations and airport taxis.', blankSentence: 'Please speak with our ____ for local tour advice.', emoji: '🛎️' },
      { id: 'h1-4', word: 'Amenities', ipa: '/əˈmiːnətiz/', definition: 'Tiện nghi và dịch vụ gia tăng của khách sạn', translation: 'Tiện nghi khách sạn', example: 'Our amenities include an infinity pool, spa, and fitness center.', blankSentence: 'Guests enjoy complimentary access to all hotel ____.', emoji: '🏊' },
      { id: 'h1-5', word: 'Assist', ipa: '/əˈsɪst/', definition: 'Hỗ trợ, giúp đỡ khách', translation: 'Hỗ trợ', example: 'How may I assist you with your luggage today, Sir?', blankSentence: 'Please let me ____ you with your check-in bags.', emoji: '🧳' },
      { id: 'h1-6', word: 'Pleasant', ipa: '/ˈpleznt/', definition: 'Thoải mái, dễ chịu', translation: 'Dễ chịu, thoải mái', example: 'We wish you a very pleasant and restful stay.', blankSentence: 'We hope you have a ____ stay in our city.', emoji: '🌸' }
    ],
    structures: [
      {
        phrase: 'Welcome to [Hotel Name], how may I assist you?',
        meaning: 'Mẫu câu chào đón chuẩn mực quốc tế khi khách bước vào sảnh.',
        vietnamese: 'Chào mừng quý khách đến với khách sạn, tôi có thể hỗ trợ gì cho quý khách?',
        business: { phrase: 'Good morning, welcome to the Grand Palace Hotel! My name is Arthur. How may I be of assistance today, Sir?', example: 'Good morning, welcome to the Grand Palace Hotel! How may I assist you today, Sir?', translation: 'Kính chào quý khách đến với khách sạn Grand Palace! Tôi là Arthur, tôi có thể hỗ trợ gì cho quý khách hôm nay ạ?' },
        casualStyle: { phrase: 'Welcome to our hotel! How can I help you today?', example: 'Hi there, welcome! How can I help you check in?', translation: 'Chào mừng bạn đến với khách sạn tụi mình! Mình có thể giúp gì cho bạn hôm nay nè?' },
        superCasual: { phrase: 'Welcome! Checking in today?', example: 'Hey, welcome! How can I help?', translation: 'Chào bạn! Đến nhận phòng hả bạn?' }
      },
      {
        phrase: 'Allow me to take care of that for you.',
        meaning: 'Chủ động đề nghị hỗ trợ xách hành lý hoặc giải quyết nhu cầu.',
        vietnamese: 'Xin phép để tôi hỗ trợ việc này cho quý khách.',
        business: { phrase: 'Please allow me to carry your luggage to the reception lounge.', example: 'Please allow me to take your bags while you check in.', translation: 'Xin phép để tôi mang hành lý của quý khách vào khu vực sảnh chờ lễ tân ạ.' },
        casualStyle: { phrase: 'Let me grab those heavy bags for you.', example: 'Let me take those bags for you, no problem!', translation: 'Để mình xách mấy túi hành lý nặng này giúp bạn nha.' },
        superCasual: { phrase: 'I got your bags.', example: 'Here, let me take that bag.', translation: 'Để tui cầm túi cho.' }
      },
      {
        phrase: 'Thank you for choosing our hotel.',
        meaning: 'Bày tỏ lòng cảm kích khi khách tin tưởng lưu trú.',
        vietnamese: 'Cảm ơn quý khách đã lựa chọn khách sạn của chúng tôi.',
        business: { phrase: 'We sincerely thank you for choosing the Grand Palace for your holiday.', example: 'Thank you for choosing our hotel, we hope you enjoy your stay.', translation: 'Chúng tôi chân thành cảm ơn quý khách đã tin tưởng lựa chọn khách sạn Grand Palace cho kỳ nghỉ.' },
        casualStyle: { phrase: 'Thanks so much for staying with us!', example: 'Thanks for booking with us, hope you love the place!', translation: 'Cảm ơn bạn rất nhiều vì đã ghé ở chỗ tụi mình nha!' },
        superCasual: { phrase: 'Thanks for coming by!', example: 'Great having you here!', translation: 'Cảm ơn đã ghé khách sạn nha!' }
      },
      {
        phrase: 'I apologize for the brief wait.',
        meaning: 'Xin lỗi lịch sự nếu khách phải chờ đợi một chút.',
        vietnamese: 'Tôi thành thật xin lỗi vì đã để quý khách phải chờ trong giây lát.',
        business: { phrase: 'I sincerely apologize for the brief delay; our reception team is ready for you now.', example: 'I apologize for keeping you waiting, Sir.', translation: 'Tôi xin lỗi vì sự chậm trễ trong ít phút; đội ngũ lễ tân đã sẵn sàng phục vụ quý khách ngay bây giờ ạ.' },
        casualStyle: { phrase: 'Sorry to keep you waiting for a minute!', example: 'Sorry about the short wait, thanks for your patience!', translation: 'Xin lỗi vì để bạn đợi một lát nhé, cảm ơn bạn đã kiên nhẫn!' },
        superCasual: { phrase: 'Sorry for the wait!', example: 'Sorry about that wait, let’s get you sorted.', translation: 'Ngại quá để bạn chờ tí nha!' }
      },
      {
        phrase: 'Our hotel features [Amenities] for your enjoyment.',
        meaning: 'Giới thiệu nhanh các tiện ích nổi bật của khách sạn.',
        vietnamese: 'Khách sạn chúng tôi có các tiện ích... phục vụ quý khách.',
        business: { phrase: 'Our property features a panoramic rooftop swimming pool and a 24-hour wellness fitness center.', example: 'Our hotel features an infinity pool and a complimentary sauna on the 5th floor.', translation: 'Khách sạn có hồ bơi vô cực ngắm toàn cảnh tầng thượng và phòng gym chăm sóc sức khỏe mở cửa 24/7.' },
        casualStyle: { phrase: 'We have a heated pool on the roof and a gym open all day.', example: 'Check out our rooftop pool on the top floor, the view is amazing!', translation: 'Tụi mình có hồ bơi nước ấm trên tầng thượng và phòng tập mở cả ngày đó bạn.' },
        superCasual: { phrase: 'Pool is upstairs, gym is on level 3.', example: 'Rooftop pool is open till 10 PM.', translation: 'Hồ bơi ở sân thượng, gym ở lầu 3 nha bạn.' }
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Executive 5-Star Welcome & Lobby Introduction',
        school: 'business',
        participants: [
          { name: 'Concierge Leo', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LeoConcierge', role: 'Concierge' },
          { name: 'Mr. Vance', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MrVance', role: 'VIP Guest' }
        ],
        lines: [
          { participant: 'Concierge Leo', text: 'Good afternoon, Sir! Welcome to the Grand Horizon Resort & Spa. My name is Leo. May I assist you with your luggage?', translation: 'Kính chào buổi chiều quý khách! Chào mừng quý khách đến với Grand Horizon Resort & Spa. Tôi là Leo, xin phép được hỗ trợ hành lý cho quý khách ạ?' },
          { participant: 'Mr. Vance', text: 'Good afternoon, Leo. Thank you, I have two large suitcases and a briefcase in the trunk.', translation: 'Chào buổi chiều Leo. Cảm ơn cậu, tôi có hai vali lớn và một cặp táp trong cốp xe.' },
          { participant: 'Concierge Leo', text: 'Allow me to take care of those right away, Sir. Here is your luggage claim receipt tag. How was your flight into Da Nang today?', translation: 'Xin phép để tôi tiếp nhận ngay ạ. Đây là thẻ giữ hành lý của quý khách. Chuyến bay đến Đà Nẵng của quý khách hôm nay có thuận lợi không ạ?' },
          { participant: 'Mr. Vance', text: 'It was very smooth, thank you. Just a bit tired after ten hours in transit.', translation: 'Chuyến bay rất êm ái, cảm ơn cậu. Chỉ là hơi mỏi một chút sau mười tiếng quá cảnh.' },
          { participant: 'Concierge Leo', text: 'I completely understand, Sir. Please step right inside to the reception desk. Our front desk manager has your registration prepared, and our cold lotus tea is waiting for you.', translation: 'Tôi hoàn toàn thấu hiểu thưa quý khách. Xin mời quý khách bước vào quầy lễ tân ạ. Trưởng bộ phận tiếp tân đã chuẩn bị sẵn hồ sơ nhận phòng và trà sen ướp lạnh đang đón chào quý khách.' },
          { participant: 'Mr. Vance', text: 'Splendid service, Leo. Much appreciated.', translation: 'Dịch vụ thật chu đáo, Leo. Tôi đánh giá rất cao.' }
        ]
      },
      {
        type: 'pair',
        title: 'Friendly Boutique Hotel Lobby Greeting',
        school: 'casual',
        participants: [
          { name: 'Receptionist Mai', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MaiReception', role: 'Front Desk' },
          { name: 'Guest Sarah', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SarahGuest', role: 'Traveler' }
        ],
        lines: [
          { participant: 'Receptionist Mai', text: 'Hi there! Welcome to The Heritage Boutique Hotel! Did you find our location okay?', translation: 'Chào bạn! Chào mừng bạn đến với The Heritage Boutique Hotel! Bạn tìm đường đến đây có dễ không?' },
          { participant: 'Guest Sarah', text: 'Hi! Yes, the driver dropped me right at your front door. The courtyard garden is gorgeous!', translation: 'Chào bạn! Dễ lắm, bác tài dừng ngay cửa trước luôn. Khu vườn trước sân đẹp quá chừng!' },
          { participant: 'Receptionist Mai', text: 'Thank you so much! Let me take those heavy bags off your hands so you can relax.', translation: 'Cảm ơn bạn nhiều nha! Để mình xách mấy chiếc túi nặng này giúp bạn cho bạn thảnh thơi nhé.' },
          { participant: 'Guest Sarah', text: 'Oh, you are a lifesaver! I have a reservation under Sarah Jenkins.', translation: 'Ôi bạn tuyệt vời quá! Mình có đặt phòng dưới tên Sarah Jenkins.' },
          { participant: 'Receptionist Mai', text: 'Awesome, Sarah! Take a seat on the velvet sofa, have a sip of fresh passionfruit juice, and I will check you in in two minutes.', translation: 'Tuyệt vời, Sarah! Bạn cứ ngồi nghỉ trên ghế sofa nhung, uống ly nước chanh dây tươi mát này nhé, mình làm thủ tục trong 2 phút là xong liền.' }
        ]
      },
      {
        type: 'pair',
        title: 'Fast-Paced Urban Transit Hotel Check-In Greeting',
        school: 'superCasual',
        participants: [
          { name: 'Staff Jack', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=StaffJack', role: 'Staff' },
          { name: 'Traveler Dan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TravelerDan', role: 'Guest' }
        ],
        lines: [
          { participant: 'Staff Jack', text: 'Hey, welcome! Checking in today?', translation: 'Chào bạn, đến nhận phòng hôm nay đúng không?' },
          { participant: 'Traveler Dan', text: 'Yeah, booking under Dan Miller.', translation: 'Ừ đúng rồi, tên Dan Miller.' },
          { participant: 'Staff Jack', text: 'Got it, Dan. Single room, two nights. Got your passport handy?', translation: 'Thấy rồi Dan. Phòng đơn, ở hai đêm. Bạn có sẵn hộ chiếu ở đó không?' },
          { participant: 'Traveler Dan', text: 'Here you go. And where is the elevator?', translation: 'Đây nè. Thang máy ở hướng nào vậy bạn?' },
          { participant: 'Staff Jack', text: 'Right past the coffee stand on your left. Room 402. Enjoy your stay, man!', translation: 'Ngay sau quầy cà phê phía bên trái nha. Phòng 402. Nghỉ ngơi thoải mái nghen!' }
        ]
      }
    ]
  },

  // Buổi 2: Ngôn ngữ lịch sự & thái độ phục vụ
  {
    id: 'hotel-02',
    title: 'Professional Hospitality Etiquette & Speech',
    vietnameseTitle: 'Buổi 2: Ngôn ngữ lịch sự & Thái độ phục vụ',
    category: 'Communication',
    subCategory: ['Hotel & Hospitality'],
    icon: '🛎️',
    color: '#0284c7',
    description: 'Các mẫu câu lịch sự thông dụng, xưng hô Sir/Ma’am, điều chỉnh giọng điệu ân cần, ngôn ngữ cơ thể và tránh những từ ngữ cộc lốc.',
    words: [
      { id: 'h2-1', word: 'Demeanor', ipa: '/dɪˈmiːnə/', definition: 'Thái độ, phong thái giao tiếp chuyên nghiệp', translation: 'Phong thái', example: 'A warm and polite demeanor makes guests feel valued.', blankSentence: 'Maintain a courteous ____ at all times.', emoji: '👔' },
      { id: 'h2-2', word: 'Tactful', ipa: '/ˈtæktfl/', definition: 'Khéo léo, tế nhị khi xử lý tình huống', translation: 'Khéo léo, tế nhị', example: 'Always be tactful when explaining hotel regulations to guests.', blankSentence: 'Give a ____ explanation instead of a blunt refusal.', emoji: '🧠' },
      { id: 'h2-3', word: 'Certainly', ipa: '/ˈsɜːtnli/', definition: 'Chắc chắn rồi (thay cho câu "Ok" thông thường)', translation: 'Dạ chắc chắn rồi', example: 'Certainly, Sir, I will arrange an extra duvet right away.', blankSentence: '"____, Ma\'am, I will take care of it immediately."', emoji: '👌' },
      { id: 'h2-4', word: 'Pleasure', ipa: '/ˈpleʒə/', definition: 'Niềm vinh hạnh khi được phục vụ', translation: 'Niềm vinh hạnh', example: 'It is my absolute pleasure to assist you.', blankSentence: 'It was our ____ having you with us.', emoji: '💎' },
      { id: 'h2-5', word: 'Promptly', ipa: '/ˈprɒmptli/', definition: 'Nhanh chóng, kịp thời không chậm trễ', translation: 'Kịp thời, ngay tức khắc', example: 'Your request will be attended to promptly.', blankSentence: 'Our maintenance team will arrive ____.', emoji: '⚡' },
      { id: 'h2-6', word: 'Inconvenience', ipa: '/ˌɪnkənˈviːniəns/', definition: 'Sự phiền hà, bất tiện ngoài ý muốn', translation: 'Sự bất tiện', example: 'We deeply regret any inconvenience caused by the renovation.', blankSentence: 'We apologize for this unexpected ____.', emoji: '🙇' }
    ],
    structures: [
      {
        phrase: 'Certainly, Sir/Ma’am, I would be delighted to help.',
        meaning: 'Thay thế từ "Yes/OK" cộc lốc bằng phong thái khách sạn 5 sao.',
        vietnamese: 'Dạ chắc chắn rồi thưa quý khách, tôi rất hân hạnh được hỗ trợ.',
        business: { phrase: 'Certainly, Mr. Robertson, I would be delighted to arrange that private car transfer for you.', example: 'Certainly, Ma’am, I will attend to your request immediately.', translation: 'Dạ chắc chắn rồi thưa ông Robertson, tôi rất hân hạnh được sắp xếp chuyến xe riêng cho ông ạ.' },
        casualStyle: { phrase: 'Of course! I’d love to help you with that right now.', example: 'Sure thing, I can sort that out for you in a sec.', translation: 'Tất nhiên rồi bạn! Mình rất vui được hỗ trợ bạn ngay đây.' },
        superCasual: { phrase: 'No problem at all, on it!', example: 'Gotcha, on it right now.', translation: 'Không sao hết, tui làm liền đây!' }
      },
      {
        phrase: 'Would you mind [doing something] for a moment?',
        meaning: 'Đề nghị khách phối hợp một cách mềm mỏng, tôn trọng.',
        vietnamese: 'Phiền quý khách... trong giây lát được không ạ?',
        business: { phrase: 'Would you mind verifying your departure date on this confirmation slip?', example: 'Would you mind having a seat while I print your bill?', translation: 'Phiền quý khách vui lòng kiểm tra lại ngày trả phòng trên phiếu xác nhận này giúp tôi được không ạ?' },
        casualStyle: { phrase: 'Could you please check this date for me real quick?', example: 'Could you just sign here for me?', translation: 'Bạn xem giúp mình ngày này xem đúng chưa nha?' },
        superCasual: { phrase: 'Just check this date here.', example: 'Sign right here please.', translation: 'Xem giúp tui ngày ở đây nha.' }
      },
      {
        phrase: 'It is our absolute pleasure to be of service.',
        meaning: 'Lời cảm ơn và khẳng định tinh thần phục vụ tận tâm.',
        vietnamese: 'Được phục vụ quý khách là niềm vinh hạnh tuyệt đối của chúng tôi.',
        business: { phrase: 'You are very welcome, Sir. It is our absolute pleasure to ensure your comfort.', example: 'It is always our pleasure to be of service to our loyal guests.', translation: 'Không có chi thưa ông. Được đảm bảo sự thoải mái cho quý khách là niềm vinh dự của chúng tôi.' },
        casualStyle: { phrase: 'Anytime! We’re super happy to have you here with us.', example: 'Happy to help anytime!', translation: 'Bất cứ lúc nào bạn nhé! Tụi mình rất vui khi được đón tiếp bạn ở đây.' },
        superCasual: { phrase: 'Happy to help! Enjoy your day!', example: 'Anytime, enjoy!', translation: 'Giúp bạn là vui rồi! Chúc ngày vui vẻ nghen!' }
      },
      {
        phrase: 'I understand completely, and I will handle this personally.',
        meaning: 'Tạo sự an tâm tuyệt đối khi khách có thắc mắc hoặc băn khoăn.',
        vietnamese: 'Tôi hoàn toàn thấu hiểu và tôi sẽ đích thân xử lý việc này.',
        business: { phrase: 'I understand your concern completely, Mrs. Gomez, and I will personally oversee your room change.', example: 'I understand completely, Sir, and I will handle this matter personally.', translation: 'Tôi hoàn toàn thấu hiểu băn khoăn của bà Gomez, và tôi sẽ đích thân giám sát việc đổi phòng cho bà ạ.' },
        casualStyle: { phrase: 'I totally get it! Don’t worry, I’ll take care of this myself.', example: 'I hear you, leave it with me and I’ll get it done.', translation: 'Mình hiểu rõ mà! Bạn đừng lo, đích thân mình sẽ xử lý vụ này cho bạn.' },
        superCasual: { phrase: 'Got it, leave it to me.', example: 'No worries, I’ll fix it.', translation: 'Hiểu rồi, cứ để tui lo.' }
      },
      {
        phrase: 'May I recommend [Service] while you wait?',
        meaning: 'Gợi ý dịch vụ chăm sóc khách hàng trong lúc chờ đợi.',
        vietnamese: 'Tôi xin phép gợi ý quý khách trải nghiệm... trong lúc chờ đợi được không ạ?',
        business: { phrase: 'May I recommend our executive lounge on the 3rd floor for complimentary espresso while your suite is being inspected?', example: 'May I suggest a seat in the garden lounge with a fresh cocktail?', translation: 'Xin phép gợi ý quý khách ghé qua phòng chờ Executive tầng 3 để thưởng thức espresso miễn phí trong lúc chờ kiểm tra phòng ạ?' },
        casualStyle: { phrase: 'Why not grab a free coffee at our cafe while you wait?', example: 'Feel free to chill at the pool bar while we get your room ready.', translation: 'Trong lúc đợi bạn ghé quán cà phê của tụi mình uống tách cà phê miễn phí nha?' },
        superCasual: { phrase: 'Grab a coffee at the bar while you wait!', example: 'Chill by the lobby, coffee is free.', translation: 'Uống ly cà phê ở quầy bar trong lúc đợi nha!' }
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Polite Tone & Professional De-escalation',
        school: 'business',
        participants: [
          { name: 'Duty Manager Phong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PhongManager', role: 'Duty Manager' },
          { name: 'Lady Katherine', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LadyKatherine', role: 'VIP Patron' }
        ],
        lines: [
          { participant: 'Duty Manager Phong', text: 'Good evening, Lady Katherine. I noticed you were inquiring about the high-floor ocean view suite. How may I be of service?', translation: 'Kính chào buổi tối bà Katherine. Tôi thấy bà đang hỏi về phòng suite hướng biển tầng cao. Tôi có thể hỗ trợ gì cho bà ạ?' },
          { participant: 'Lady Katherine', text: 'Good evening. The junior receptionist told me there were no rooms available, but my booking agent promised an ocean view.', translation: 'Chào buổi tối. Nhân viên tiếp tân vừa bảo đã hết phòng, nhưng đại lý du lịch của tôi đã cam kết sẽ có phòng hướng biển.' },
          { participant: 'Duty Manager Phong', text: 'I understand your frustration completely, Lady Katherine. Please accept my sincere apologies for the miscommunication.', translation: 'Tôi hoàn toàn thấu hiểu sự bất tiện này thưa bà Katherine. Xin bà nhận lời xin lỗi chân thành từ chúng tôi vì sự sai lệch thông tin này ạ.' },
          { participant: 'Lady Katherine', text: 'I appreciate your calm manner, young man. Can anything be arranged?', translation: 'Tôi rất ghi nhận thái độ hòa nhã của cậu. Liệu có thu xếp được cách nào không?' },
          { participant: 'Duty Manager Phong', text: 'Certainly, Ma’am. I have just authorized a complimentary upgrade to our Presidential Penthouse Suite on the 22nd floor. It offers breathtaking panoramic views of the entire bay.', translation: 'Dạ chắc chắn là được thưa bà. Tôi vừa ký duyệt nâng hạng miễn phí cho bà lên phòng Presidential Penthouse Suite tại tầng 22. Căn phòng có tầm nhìn bao quát tuyệt đẹp ra toàn bộ vịnh biển.' },
          { participant: 'Lady Katherine', text: 'That is truly world-class hospitality. Thank you so much, Phong.', translation: 'Đó thực sự là phong cách hiếu khách đẳng cấp thế giới. Cảm ơn cậu rất nhiều, Phong.' }
        ]
      },
      {
        type: 'pair',
        title: 'Courteous Everyday Receptionist Assistance',
        school: 'casual',
        participants: [
          { name: 'Host Long', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HostLong', role: 'Front Desk Host' },
          { name: 'Guest Mark', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=GuestMark', role: 'Guest' }
        ],
        lines: [
          { participant: 'Host Long', text: 'Good morning, Mr. Mark! Did you sleep well last night?', translation: 'Chào buổi sáng anh Mark! Đêm qua anh ngủ có ngon giấc không?' },
          { participant: 'Guest Mark', text: 'Morning! Yes, the mattress was super comfy, but I forgot to bring a phone charger adapter for Vietnamese sockets.', translation: 'Chào buổi sáng! Giường êm ru luôn, cơ mà tôi quên mang đầu chuyển sạc điện thoại cho ổ cắm Việt Nam rồi.' },
          { participant: 'Host Long', text: 'No worries at all, Sir! We keep international multi-plug adapters right here at the desk. Here you go, completely free to borrow.', translation: 'Dạ chuyện nhỏ anh ơi! Tụi em có sẵn đầu chuyển đa năng quốc tế ngay tại quầy đây ạ. Gửi anh mượn dùng thoải mái suốt chuyến đi nha.' },
          { participant: 'Guest Mark', text: 'Wow, that is so thoughtful! Thanks a million!', translation: 'Chà, chu đáo quá chừng luôn! Cảm ơn cậu cả triệu lần nhé!' },
          { participant: 'Host Long', text: 'It’s our pleasure, Mark! Enjoy your breakfast buffet in the garden room!', translation: 'Dạ vinh hạnh của tụi em mà anh Mark! Chúc anh ăn sáng buffet ngon miệng tại phòng vườn nha!' }
        ]
      },
      {
        type: 'pair',
        title: 'Direct Quick Assistance at Front Counter',
        school: 'superCasual',
        participants: [
          { name: 'Clerk Tom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ClerkTom', role: 'Clerk' },
          { name: 'Guest Ryan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=GuestRyan', role: 'Guest' }
        ],
        lines: [
          { participant: 'Clerk Tom', text: 'Morning! Need a hand with something?', translation: 'Sáng tốt lành! Cần mình giúp gì không bạn?' },
          { participant: 'Guest Ryan', text: 'Can I get two extra keycards? Room 305.', translation: 'Cho mình xin thêm 2 thẻ phòng được không? Phòng 305.' },
          { participant: 'Clerk Tom', text: 'Sure thing, give me 10 seconds to encode them.', translation: 'Được chứ, cho mình 10 giây nạp mã thẻ nha.' },
          { participant: 'Guest Ryan', text: 'Sweet, thanks!', translation: 'Tuyệt, cảm ơn nha!' },
          { participant: 'Clerk Tom', text: 'Here you go! Both activated. Have a good one!', translation: 'Đây bạn ơi! Cả hai thẻ đều kích hoạt rồi. Chúc ngày vui vẻ nghen!' }
        ]
      }
    ]
  },

  // Buổi 3: Từ vựng & mẫu câu nền tảng cho lễ tân
  {
    id: 'hotel-03',
    title: 'Front Desk Fundamentals & Inquiries',
    vietnameseTitle: 'Buổi 3: Từ vựng & Mẫu câu nền tảng cho Lễ tân',
    category: 'Communication',
    subCategory: ['Hotel & Hospitality'],
    icon: '🏨',
    color: '#0284c7',
    description: 'Từ vựng đặt phòng, phân loại phòng (Standard, Superior, Deluxe, Suite), giá phòng theo đêm, thuế VAT, phụ thu và quy trình check-in/out.',
    words: [
      { id: 'h3-1', word: 'Room rate', ipa: '/ruːm reɪt/', definition: 'Giá tiền thuê phòng một đêm', translation: 'Giá phòng', example: 'The room rate includes complimentary high-speed Wi-Fi.', blankSentence: 'What is the daily ____ for a double suite?', emoji: '💵' },
      { id: 'h3-2', word: 'Occupancy', ipa: '/ˈɒkjəpənsi/', definition: 'Số lượng người lưu trú tối đa trong một phòng', translation: 'Số lượng người ở', example: 'Maximum occupancy for this King Deluxe is two adults and one child.', blankSentence: 'The room has a strict maximum ____ of two guests.', emoji: '👥' },
      { id: 'h3-3', word: 'Superior', ipa: '/suːˈpɪəriə/', definition: 'Hạng phòng cao cấp hơn Standard', translation: 'Hạng phòng Superior', example: 'The Superior room features a private balcony facing the inner garden.', blankSentence: 'We booked a ____ room with twin beds.', emoji: '🛏️' },
      { id: 'h3-4', word: 'Complimentary', ipa: '/ˌkɒmplɪˈmentri/', definition: 'Miễn phí kèm theo dịch vụ', translation: 'Miễn phí đính kèm', example: 'Complimentary bottled water is replenished daily.', blankSentence: 'Breakfast is ____ for all staying guests.', emoji: '🎁' },
      { id: 'h3-5', word: 'Surcharge', ipa: '/ˈsɜːtʃɑːdʒ/', definition: 'Khoản phụ thu thêm ngoài giá gốc', translation: 'Khoản phụ thu', example: 'An additional surcharge applies for late check-out after 3 PM.', blankSentence: 'There is a small holiday ____ during New Year.', emoji: '🧾' },
      { id: 'h3-6', word: 'Deposit', ipa: '/dɪˈpɒzɪt/', definition: 'Tiền đặt cọc giữ phòng hoặc bảo lãnh đồ đạc', translation: 'Tiền đặt cọc', example: 'We require a $50 incidental deposit upon check-in.', blankSentence: 'Your credit card was authorized for a security ____.', emoji: '💳' }
    ],
    structures: [
      {
        phrase: 'What room type are you interested in reserving?',
        meaning: 'Hỏi nhu cầu loại phòng của khách khi tư vấn.',
        vietnamese: 'Quý khách đang quan tâm đến loại phòng nào ạ?',
        business: { phrase: 'May I inquire what type of accommodation you would prefer: a Deluxe Garden View or an Executive Suite?', example: 'What room category are you interested in reserving for your stay?', translation: 'Xin phép được hỏi quý khách muốn chọn loại phòng nào: phòng Deluxe hướng vườn hay Executive Suite ạ?' },
        casualStyle: { phrase: 'What kind of room are you looking for: King bed or twin beds?', example: 'Are you after a sea view room or city view?', translation: 'Bạn đang tìm loại phòng nào nè: giường đôi lớn King hay hai giường đơn?' },
        superCasual: { phrase: 'King or twin beds for you?', example: 'One bed or two?', translation: 'Một giường to hay hai giường đơn bạn?' }
      },
      {
        phrase: 'The nightly rate is [Price], including buffet breakfast.',
        meaning: 'Báo giá phòng theo đêm rõ ràng, minh bạch.',
        vietnamese: 'Giá phòng mỗi đêm là [Giá], đã bao gồm bữa sáng buffet.',
        business: { phrase: 'The nightly rate for our Premier Ocean Suite is $180, fully inclusive of taxes, service fees, and gourmet breakfast buffet.', example: 'The room rate is $120 per night including breakfast.', translation: 'Giá mỗi đêm cho phòng Premier Ocean Suite là 180 USD, đã bao gồm trọn gói thuế phí và buffet sáng thịnh soạn.' },
        casualStyle: { phrase: 'It’s $120 a night, and that covers your breakfast buffet and gym access.', example: 'That’s $100 per night with breakfast included.', translation: 'Giá là 120 đô một đêm, đã gồm buffet sáng và vé tập gym rồi nha bạn.' },
        superCasual: { phrase: '$100 a night with breakfast.', example: '$90 total per night.', translation: '100 đô một đêm có ăn sáng.' }
      },
      {
        phrase: 'Standard check-in begins at 2:00 PM.',
        meaning: 'Thông báo quy định giờ nhận phòng chuẩn của khách sạn.',
        vietnamese: 'Giờ nhận phòng tiêu chuẩn bắt đầu từ 14:00 chiều.',
        business: { phrase: 'Standard hotel check-in commences at 2:00 PM, while check-out is requested by 12:00 PM noon.', example: 'Check-in begins at 2:00 PM daily.', translation: 'Giờ nhận phòng tiêu chuẩn bắt đầu từ 14:00 chiều, và giờ trả phòng là trước 12:00 trưa ạ.' },
        casualStyle: { phrase: 'Check-in is at 2 PM, and check-out is at 12 noon.', example: 'You can check in starting at 2 PM.', translation: 'Nhận phòng từ 2 giờ chiều, còn trả phòng trước 12 giờ trưa nha bạn.' },
        superCasual: { phrase: 'Check-in at 2 PM, out by noon.', example: 'In at 2, out at 12.', translation: 'Vào lúc 2h chiều, trả lúc 12h trưa.' }
      },
      {
        phrase: 'We require a small security deposit upon arrival.',
        meaning: 'Thông báo về khoản tiền cọc bảo lãnh phòng.',
        vietnamese: 'Khách sạn có quy định đặt cọc bảo lãnh một khoản nhỏ khi nhận phòng.',
        business: { phrase: 'We politely request a refundable incidental deposit of $50 per room via credit card or cash upon arrival.', example: 'A refundable deposit is required at check-in.', translation: 'Khách sạn xin phép thu một khoản đặt cọc hoàn lại 50 USD mỗi phòng qua thẻ hoặc tiền mặt khi làm thủ tục ạ.' },
        casualStyle: { phrase: 'There is a quick $50 refundable deposit when you check in.', example: 'We just need a $50 deposit which you get back at check-out.', translation: 'Có khoản cọc 50 đô khi nhận phòng, lúc trả phòng tụi mình gửi lại bạn nguyên vẹn nha.' },
        superCasual: { phrase: '$50 deposit, refunded at check-out.', example: '$50 deposit on card or cash.', translation: 'Cọc 50 đô, lúc trả phòng nhận lại.' }
      },
      {
        phrase: 'All rooms are equipped with [Features].',
        meaning: 'Mô tả tiện nghi phòng nghỉ sẵn có.',
        vietnamese: 'Tất cả các phòng đều được trang bị...',
        business: { phrase: 'All our suites are equipped with individual climate control, an electronic safe, and a private espresso maker.', example: 'All rooms feature a flat-screen TV and minibar.', translation: 'Tất cả các căn phòng đều được trang bị hệ thống điều hòa độc lập, két sắt an toàn và máy pha cà phê espresso riêng biệt.' },
        casualStyle: { phrase: 'Every room has cold AC, a mini fridge, and a safe box.', example: 'You get fast Wi-Fi and a smart TV in every room.', translation: 'Phòng nào cũng có máy lạnh mát rượi, tủ lạnh mini và két sắt an toàn nha.' },
        superCasual: { phrase: 'Smart TV, fridge, and safe in every room.', example: 'AC and fast Wi-Fi included.', translation: 'Có smart TV, tủ lạnh với két sắt sẵn trong phòng luôn.' }
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Front Desk Room Inquiry & Rate Comparison',
        school: 'business',
        participants: [
          { name: 'Senior Agent Linh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SeniorLinh', role: 'Front Desk' },
          { name: 'Dr. Albert', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DrAlbert', role: 'Inquiring Guest' }
        ],
        lines: [
          { participant: 'Senior Agent Linh', text: 'Good morning, Sir! Welcome to the Royal Palms. How may I assist your travel plans today?', translation: 'Kính chào buổi sáng thưa ông! Chào mừng ông đến với Royal Palms. Tôi có thể hỗ trợ gì cho kế hoạch du lịch của ông hôm nay ạ?' },
          { participant: 'Dr. Albert', text: 'Good morning. I am attending a medical conference here on Thursday. What are your room rates for three nights?', translation: 'Chào cô. Tôi tham dự một hội nghị y khoa ở đây vào thứ Năm. Giá phòng cho ba đêm bên cô như thế nào?' },
          { participant: 'Senior Agent Linh', text: 'For conference delegates, we offer our Deluxe King room at $130 per night, or our Executive Suite with lounge access at $175 per night.', translation: 'Dạ dành cho đại biểu hội nghị, khách sạn có phòng Deluxe King ưu đãi 130 USD/đêm, hoặc Executive Suite có quyền vào phòng chờ VIP giá 175 USD/đêm ạ.' },
          { participant: 'Dr. Albert', text: 'Does that rate include breakfast and airport transfer?', translation: 'Mức giá đó đã bao gồm bữa sáng và xe đưa đón sân bay chưa cô?' },
          { participant: 'Senior Agent Linh', text: 'Yes, indeed. Both rates are fully inclusive of our international buffet breakfast, 10% VAT, and complimentary round-trip airport limousine service.', translation: 'Dạ hoàn toàn bao gồm rồi ạ. Cả hai hạng phòng đều đã bao gồm buffet sáng quốc tế, 10% VAT và dịch vụ xe limousine đưa đón sân bay khứ hồi miễn phí.' },
          { participant: 'Dr. Albert', text: 'That is outstanding value. Let us book the Executive Suite, please.', translation: 'Giá trị dịch vụ rất xuất sắc. Vậy làm ơn đặt giúp tôi phòng Executive Suite nhé.' }
        ]
      },
      {
        type: 'pair',
        title: 'Walk-In Guest Casual Rate Inquiry',
        school: 'casual',
        participants: [
          { name: 'Agent Bao', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AgentBao', role: 'Front Desk' },
          { name: 'Traveler Chloe', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TravelerChloe', role: 'Backpacker' }
        ],
        lines: [
          { participant: 'Agent Bao', text: 'Hey there! How can I help you today?', translation: 'Chào bạn! Mình có thể giúp gì cho bạn hôm nay nè?' },
          { participant: 'Traveler Chloe', text: 'Hi! Do you have any double rooms available for tonight?', translation: 'Chào bạn! Chỗ bạn còn phòng đôi nào trống đêm nay không?' },
          { participant: 'Agent Bao', text: 'Yes, we have a lovely Superior Double on the 4th floor for $65 tonight, breakfast included!', translation: 'Dạ còn bạn ơi, tụi mình có một phòng Superior Double tầng 4 giá 65 đô đêm nay, có kèm ăn sáng luôn nha!' },
          { participant: 'Traveler Chloe', text: 'That sounds great! Can I pay with credit card?', translation: 'Nghe ưng quá! Mình quẹt thẻ tín dụng được chứ?' },
          { participant: 'Agent Bao', text: 'Absolutely! Visa and Mastercard are welcome with zero extra fees. May I have your ID?', translation: 'Chắc chắn rồi bạn! Visa và Mastercard quẹt vô tư không mất thêm phí gì hết. Cho mình mượn căn cước hoặc hộ chiếu của bạn nha.' }
        ]
      },
      {
        type: 'pair',
        title: 'Quick Counter Price Check',
        school: 'superCasual',
        participants: [
          { name: 'Agent Ken', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AgentKen', role: 'Front Desk' },
          { name: 'Driver Sam', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DriverSam', role: 'Guest' }
        ],
        lines: [
          { participant: 'Agent Ken', text: 'Need a room for tonight?', translation: 'Bạn cần phòng đêm nay hả?' },
          { participant: 'Driver Sam', text: 'Yeah, just a basic single room. How much?', translation: 'Ừ, phòng đơn cơ bản thôi. Nhiêu tiền vậy bạn?' },
          { participant: 'Agent Ken', text: 'Standard single is $45, checkout at noon tomorrow.', translation: 'Phòng đơn tiêu chuẩn 45 đô, mai 12h trưa trả phòng nha.' },
          { participant: 'Driver Sam', text: 'Cool, take cash?', translation: 'Oke, nhận tiền mặt không?' },
          { participant: 'Agent Ken', text: 'Cash is perfect. Here is your keycard, Room 104.', translation: 'Tiền mặt chuẩn bài luôn. Thẻ phòng của bạn đây, phòng 104 nghen.' }
        ]
      }
    ]
  },

  // Buổi 4: Giao tiếp khi khách đến – Chào khách & xác nhận đặt phòng
  {
    id: 'hotel-04',
    title: 'Guest Arrival, Lobby Greeting & Booking Verification',
    vietnameseTitle: 'Buổi 4: Khách đến – Chào khách & Xác nhận đặt phòng',
    category: 'Communication',
    subCategory: ['Hotel & Hospitality'],
    icon: '🛎️',
    color: '#0284c7',
    description: 'Mẫu câu chào đón tại sảnh, hỏi tên, tra cứu mã đặt phòng (reservation confirmation), số đêm, loại phòng, mời ngồi chờ và mời nước.',
    words: [
      { id: 'h4-1', word: 'Reservation', ipa: '/ˌrezəˈveɪʃn/', definition: 'Hồ sơ đặt phòng trước', translation: 'Đặt phòng', example: 'Do you have an existing room reservation with us?', blankSentence: 'I have a ____ under the name of Smith.', emoji: '📋' },
      { id: 'h4-2', word: 'Confirmation code', ipa: '/ˌkɒnfəˈmeɪʃn kəʊd/', definition: 'Mã số xác nhận đặt phòng', translation: 'Mã xác nhận', example: 'Could you show me your booking confirmation code on your phone?', blankSentence: 'Please provide your 6-digit ____.', emoji: '🔢' },
      { id: 'h4-3', word: 'Lobby lounge', ipa: '/ˈlɒbi laʊndʒ/', definition: 'Khu vực sảnh đón tiếp khách', translation: 'Khu sảnh chờ', example: 'Please take a comfortable seat in our lobby lounge.', blankSentence: 'Enjoy our complimentary tea in the ____.', emoji: '🛋️' },
      { id: 'h4-4', word: 'Luggage tag', ipa: '/ˈlʌɡɪdʒ tæɡ/', definition: 'Thẻ đính kèm gửi giữ hành lý', translation: 'Thẻ gửi hành lý', example: 'Keep this luggage tag safe so we can identify your bags.', blankSentence: 'The porter handed me a yellow ____.', emoji: '🏷️' },
      { id: 'h4-5', word: 'Verify', ipa: '/ˈverɪfaɪ/', definition: 'Xác minh, đối chiếu thông tin', translation: 'Xác nhận/đối chiếu', example: 'Allow me to verify your reservation details in our system.', blankSentence: 'Let me ____ your passport details.', emoji: '🔍' },
      { id: 'h4-6', word: 'Welcome drink', ipa: '/ˈwelkəm drɪŋk/', definition: 'Đồ uống chào mừng miễn phí khi khách tới sảnh', translation: 'Đồ uống chào mừng', example: 'Enjoy this refreshing welcome drink while we finish check-in.', blankSentence: 'Here is your cold herbal ____.', emoji: '🍹' }
    ],
    structures: [
      {
        phrase: 'May I have your name or booking confirmation code, please?',
        meaning: 'Hỏi thông tin để tra cứu hồ sơ khách hàng trên hệ thống.',
        vietnamese: 'Tôi có thể xin tên hoặc mã xác nhận đặt phòng của quý khách được không ạ?',
        business: { phrase: 'May I please have your full surname or your reservation confirmation number to retrieve your file?', example: 'May I have your booking confirmation number, Sir?', translation: 'Tôi có thể xin họ tên hoặc mã số xác nhận đặt phòng của quý khách để tra cứu dữ liệu trên hệ thống được không ạ?' },
        casualStyle: { phrase: 'Could you tell me what name the booking is under?', example: 'What name is your reservation under today?', translation: 'Bạn cho mình xin tên người đặt phòng với nha?' },
        superCasual: { phrase: 'Booking name, please?', example: 'Got a confirmation code?', translation: 'Tên đặt phòng là gì bạn?' }
      },
      {
        phrase: 'I have located your reservation for [Room Type] for [Nights].',
        meaning: 'Xác nhận thông tin đặt phòng chính xác với khách.',
        vietnamese: 'Tôi đã tìm thấy thông tin đặt phòng [Loại phòng] trong [Số đêm] của quý khách.',
        business: { phrase: 'I have located your booking right here: one Deluxe King Room with ocean view for three nights, checking out on Sunday.', example: 'I found your reservation for two nights in our Suite.', translation: 'Tôi đã tìm thấy thông tin đặt phòng của quý khách: một phòng Deluxe King hướng biển trong ba đêm, trả phòng vào Chủ Nhật ạ.' },
        casualStyle: { phrase: 'Found it! A Deluxe King room for three nights, checking out Sunday.', example: 'Got your booking right here, two nights with twin beds.', translation: 'Tìm thấy rồi nè! Phòng Deluxe giường King 3 đêm, trả phòng ngày Chủ Nhật nha.' },
        superCasual: { phrase: 'Here it is: King room, 3 nights.', example: 'Found you: 2 nights, room 504.', translation: 'Đây rồi nè: phòng King, ở 3 đêm.' }
      },
      {
        phrase: 'Please have a seat in the lounge while we finalize your check-in.',
        meaning: 'Mời khách ngồi chờ thoải mái tại khu vực sảnh.',
        vietnamese: 'Xin mời quý khách nghỉ chân tại sảnh trong khi chúng tôi hoàn thiện thủ tục.',
        business: { phrase: 'Please make yourself comfortable in the lounge while our concierge prepares your welcome beverage and keys.', example: 'Please take a seat in our lounge, we will be with you shortly.', translation: 'Xin mời quý khách an tọa tại sảnh chờ trong lúc nhân viên chuẩn bị đồ uống chào mừng và chìa khóa phòng ạ.' },
        casualStyle: { phrase: 'Take a seat over on the couch and enjoy your cold drink while I print your paperwork.', example: 'Feel free to relax on the sofa for two minutes!', translation: 'Bạn cứ ngồi nghỉ ngơi trên sofa uống nước mát trong khi mình in giấy tờ nhé.' },
        superCasual: { phrase: 'Have a seat, be right with you.', example: 'Take a seat, won’t be long.', translation: 'Ngồi nghỉ xíu nha, xong ngay đây.' }
      },
      {
        phrase: 'Here is a refreshing cold towel and welcome drink for you.',
        meaning: 'Phục vụ khăn lạnh và thức uống giải khát chào mừng.',
        vietnamese: 'Gửi quý khách khăn lạnh và ly đồ uống chào đón tươi mát.',
        business: { phrase: 'Please enjoy this chilled lemongrass towel and our signature passionfruit welcome cocktail.', example: 'Here is a refreshing cold towel and welcome drink for you, Sir.', translation: 'Kính mời quý khách dùng khăn lạnh hương sả và ly cocktail chanh dây đặc trưng của khách sạn ạ.' },
        casualStyle: { phrase: 'Here is a cold towel and some iced tea to cool down after your trip!', example: 'Here’s some fresh juice and a cold towel for you.', translation: 'Gửi bạn khăn lạnh với ly trà đá mát lạnh để xua tan mệt mỏi sau chuyến đi nè!' },
        superCasual: { phrase: 'Here’s a cold drink and towel.', example: 'Grab a cold drink!', translation: 'Khăn lạnh với nước uống mát đây bạn.' }
      },
      {
        phrase: 'Is there any special request you noted on your booking?',
        meaning: 'Kiểm tra lại các yêu cầu đặc biệt mà khách đã ghi chú.',
        vietnamese: 'Quý khách có yêu cầu đặc biệt nào đã ghi chú trước không ạ?',
        business: { phrase: 'I notice you requested a quiet high-floor room away from the elevators; we have happily accommodated that for you.', example: 'We have noted your request for a non-smoking high floor.', translation: 'Tôi thấy quý khách có yêu cầu phòng tầng cao yên tĩnh tránh xa khu thang máy; chúng tôi đã sắp xếp chu toàn cho quý khách rồi ạ.' },
        casualStyle: { phrase: 'You asked for a high floor room, right? We got a great one on floor 15 for you!', example: 'We saw you wanted late checkout, we noted that down!', translation: 'Bạn có dặn xếp phòng tầng cao đúng không? Tụi mình xếp cho bạn một phòng cực đẹp ở tầng 15 rồi nha!' },
        superCasual: { phrase: 'Got your high floor room ready.', example: 'Noted: quiet room.', translation: 'Phòng tầng cao chuẩn bị sẵn sàng rồi nghen.' }
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Executive Welcome & Reservation Verification',
        school: 'business',
        participants: [
          { name: 'Receptionist Trang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TrangReception', role: 'Receptionist' },
          { name: 'Mr. & Mrs. Dupont', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DupontCouple', role: 'Guests' }
        ],
        lines: [
          { participant: 'Receptionist Trang', text: 'Good afternoon, Sir and Madam! Welcome to the Pullman Danang Beach Resort. May I have your surname, please?', translation: 'Kính chào buổi chiều ông bà! Chào mừng ông bà đến với Pullman Danang Beach Resort. Tôi có thể xin họ tên của ông bà được không ạ?' },
          { participant: 'Mr. & Mrs. Dupont', text: 'Good afternoon! Yes, the booking is under Dupont, Arthur and Claire Dupont.', translation: 'Chào buổi chiều cô! Đặt phòng dưới tên Dupont, Arthur và Claire Dupont.' },
          { participant: 'Receptionist Trang', text: 'Thank you, Mr. Dupont. Yes, I have your reservation right here: an Oceanfront Villa with private plunge pool for five nights.', translation: 'Cảm ơn ông Dupont. Dạ vâng, tôi đã thấy thông tin đặt phòng của ông bà: một căn Biệt thự Hướng biển có hồ bơi riêng biệt trong 5 đêm.' },
          { participant: 'Mr. & Mrs. Dupont', text: 'That is correct. We also requested early check-in if possible.', translation: 'Chính xác rồi cô. Chúng tôi có nhờ hỗ trợ nhận phòng sớm nếu được.' },
          { participant: 'Receptionist Trang', text: 'Splendid news! Your villa has been thoroughly inspected and is ready right now. Please enjoy these iced lotus drinks in our lounge while our bellman tags your luggage.', translation: 'Một tin tuyệt vời thưa ông bà! Căn villa của ông bà đã được kiểm tra chu đáo và sẵn sàng đón khách ngay lúc này. Kính mời ông bà thưởng thức trà sen ướp lạnh tại sảnh trong khi nhân viên gắn thẻ hành lý ạ.' },
          { participant: 'Mr. & Mrs. Dupont', text: 'How wonderful! Thank you for such an effortless arrival experience.', translation: 'Tuyệt vời quá! Cảm ơn cô vì sự đón tiếp nhẹ nhàng và nhanh chóng này.' }
        ]
      },
      {
        type: 'pair',
        title: 'Boutique Hotel Casual Check-In Verification',
        school: 'casual',
        participants: [
          { name: 'Host Nam', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HostNam', role: 'Front Host' },
          { name: 'Guest Kevin', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=GuestKevin', role: 'Tourist' }
        ],
        lines: [
          { participant: 'Host Nam', text: 'Hey Kevin! Welcome to Hoi An Sunshine Hotel! You made it just in time before the afternoon sun gets hot.', translation: 'Chào Kevin! Chào mừng bạn đến với Hoi An Sunshine Hotel! Bạn đến vừa kịp lúc trước khi trời nắng gắt luôn.' },
          { participant: 'Guest Kevin', text: 'Haha yeah, it is scorching out there! Booking confirmation code is HA-8921.', translation: 'Haha chuẩn luôn, ngoài trời nóng ran! Mã xác nhận của mình là HA-8921 nha.' },
          { participant: 'Host Nam', text: 'Got it on my screen! Deluxe Balcony room with garden view, 2 nights. Here is an ice-cold towel for you!', translation: 'Thấy trên màn hình rồi nè! Phòng Deluxe Ban công hướng vườn, ở 2 đêm. Gửi bạn khăn ướp đá lạnh lau cho mát nha!' },
          { participant: 'Guest Kevin', text: 'Oh man, this towel is heavenly. Thanks Nam!', translation: 'Trời ơi, khăn lạnh sướng muốn xỉu luôn. Cảm ơn Nam nhé!' },
          { participant: 'Host Nam', text: 'Drink some fresh watermelon juice too, then we will get your room keys sorted!', translation: 'Uống thêm ngụm nước dưa hấu tươi này nữa nè, rồi tụi mình lấy thẻ phòng cho bạn liền!' }
        ]
      },
      {
        type: 'pair',
        title: 'Quick Counter Verification',
        school: 'superCasual',
        participants: [
          { name: 'Clerk Liz', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ClerkLiz', role: 'Front Desk' },
          { name: 'Guest Mike', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=GuestMike', role: 'Guest' }
        ],
        lines: [
          { participant: 'Clerk Liz', text: 'Hey, checking in? Name on the booking?', translation: 'Chào bạn, nhận phòng hả? Tên trên đặt phòng là gì nè?' },
          { participant: 'Guest Mike', text: 'Mike Miller. Booked on Agoda.', translation: 'Mike Miller. Đặt qua Agoda á.' },
          { participant: 'Clerk Liz', text: 'Found it. Standard Double, 3 nights. Grab a seat, keycard ready in a minute.', translation: 'Thấy rồi. Phòng đôi tiêu chuẩn, 3 đêm. Ngồi ghế nghỉ xíu nha, 1 phút có thẻ liền.' },
          { participant: 'Guest Mike', text: 'Awesome, thanks!', translation: 'Oke cảm ơn bạn!' }
        ]
      }
    ]
  },

  // Buổi 5: Quy trình giao tiếp khi check-in (1)
  {
    id: 'hotel-05',
    title: 'Check-In Formalities: Identification & Regulations',
    vietnameseTitle: 'Buổi 5: Quy trình Check-in (1) – Giấy tờ & Đăng ký',
    category: 'Communication',
    subCategory: ['Hotel & Hospitality'],
    icon: '🏨',
    color: '#0284c7',
    description: 'Hỏi hộ chiếu, CMND/CCCD, liên hệ, hướng dẫn điền form, ký tên xác nhận, giải thích giờ ăn sáng, giờ trả phòng và chính sách cấm hút thuốc.',
    words: [
      { id: 'h5-1', word: 'Registration card', ipa: '/ˌredʒɪˈstreɪʃn kɑːd/', definition: 'Phiếu đăng ký thông tin lưu trú của khách', translation: 'Phiếu đăng ký lưu trú', example: 'Please review your details on the registration card.', blankSentence: 'Sign your name at the bottom of the ____.', emoji: '📝' },
      { id: 'h5-2', word: 'Passport', ipa: '/ˈpɑːspɔːt/', definition: 'Hộ chiếu xuất nhập cảnh của khách quốc tế', translation: 'Hộ chiếu', example: 'We need to scan your passport for local immigration registration.', blankSentence: 'May I borrow your ____ for scanning?', emoji: '🛂' },
      { id: 'h5-3', word: 'Signature', ipa: '/ˈsɪɡnətʃə/', definition: 'Chữ ký xác nhận của khách', translation: 'Chữ ký', example: 'Your signature confirms agreement with our hotel policies.', blankSentence: 'Please place your ____ on the dotted line.', emoji: '✍️' },
      { id: 'h5-4', word: 'Non-smoking policy', ipa: '/nɒn ˈsməʊkɪŋ ˈpɒləsi/', definition: 'Chính sách nghiêm cấm hút thuốc trong phòng', translation: 'Chính sách cấm hút thuốc', example: 'Our non-smoking policy carries a cleaning penalty fee.', blankSentence: 'All guestrooms follow a strict ____.', emoji: '🚭' },
      { id: 'h5-5', word: 'Immigration', ipa: '/ˌɪmɪˈɡreɪʃn/', definition: 'Cơ quan quản lý xuất nhập cảnh / đăng ký tạm trú', translation: 'Thủ tục tạm trú', example: 'We register all guest passports with local immigration.', blankSentence: 'This scan is submitted for ____ compliance.', emoji: '🏛️' },
      { id: 'h5-6', word: 'Breakfast buffet', ipa: '/ˈbrekfəst ˈbʊfeɪ/', definition: 'Tiệc buffet ăn sáng tự chọn', translation: 'Buffet ăn sáng', example: 'Breakfast buffet is served daily from 6:30 to 10:00 AM.', blankSentence: 'Enjoy our hot ____ on the ground floor.', emoji: '🍳' }
    ],
    structures: [
      {
        phrase: 'Could you please present your passport or photo ID?',
        meaning: 'Hỏi mượn giấy tờ tùy thân để quét và đăng ký lưu trú.',
        vietnamese: 'Phiền quý khách cho tôi xin hộ chiếu hoặc giấy tờ tùy thân có ảnh được không ạ?',
        business: { phrase: 'Could you please present your passport and credit card for identity verification and deposit authorization?', example: 'May I borrow your passport for a moment, Sir?', translation: 'Phiền quý khách cho tôi xin hộ chiếu và thẻ tín dụng để xác minh danh tính và làm thủ tục đặt cọc bảo lãnh ạ?' },
        casualStyle: { phrase: 'Can I just grab your passport real quick to scan it?', example: 'Do you have your passport or ID on you?', translation: 'Cho mình mượn hộ chiếu của bạn một lát để quét thông tin nha?' },
        superCasual: { phrase: 'Passport please, just need a quick scan.', example: 'Got your passport on you?', translation: 'Cho xin hộ chiếu quét cái nha bạn.' }
      },
      {
        phrase: 'Please verify your contact details and sign here.',
        meaning: 'Hướng dẫn khách kiểm tra thông tin và ký xác nhận phiếu lưu trú.',
        vietnamese: 'Xin quý khách kiểm tra lại thông tin liên lạc và ký tên tại đây.',
        business: { phrase: 'Kindly review your email address and phone number, and place your signature at the bottom right.', example: 'Please verify your details and sign at the bottom.', translation: 'Kính mong quý khách xem lại địa chỉ email và số điện thoại, sau đó ký tên ở góc dưới bên phải ạ.' },
        casualStyle: { phrase: 'Just check your email and phone number here, then pop your signature right at the bottom.', example: 'Could you sign right here for me, please?', translation: 'Bạn kiểm tra lại email với số điện thoại ở đây, rồi ký tên giúp mình ngay dưới này nha.' },
        superCasual: { phrase: 'Check details and sign here.', example: 'Quick signature right here.', translation: 'Kiểm tra thông tin rồi ký vô đây nha.' }
      },
      {
        phrase: 'Breakfast is served from [Time] to [Time] at [Location].',
        meaning: 'Hướng dẫn cụ thể về thời gian và địa điểm ăn sáng.',
        vietnamese: 'Bữa sáng được phục vụ từ [Giờ] đến [Giờ] tại [Địa điểm].',
        business: { phrase: 'Our gourmet breakfast buffet is served daily from 6:30 AM until 10:30 AM at the Garden Terrace on the ground floor.', example: 'Breakfast is served from 6:30 to 10:00 AM in the main restaurant.', translation: 'Bữa sáng buffet được phục vụ hàng ngày từ 6:30 đến 10:30 sáng tại nhà hàng Garden Terrace ở tầng trệt ạ.' },
        casualStyle: { phrase: 'Breakfast is ready between 6:30 and 10 AM downstairs at the cafe!', example: 'You can grab breakfast downstairs from 6:30 to 10:00 AM.', translation: 'Bữa sáng mở từ 6:30 đến 10 giờ sáng dưới tầng trệt tại quán cafe nha bạn!' },
        superCasual: { phrase: 'Breakfast is 6:30 to 10 AM downstairs.', example: 'Breakfast: 6:30 - 10 AM, ground floor.', translation: 'Ăn sáng 6h30 tới 10h ở dưới tầng trệt nha.' }
      },
      {
        phrase: 'Please note that all rooms are strictly non-smoking.',
        meaning: 'Nhắc nhở quy định cấm hút thuốc bảo vệ phòng ốc.',
        vietnamese: 'Xin lưu ý rằng tất cả các phòng đều nghiêm cấm hút thuốc.',
        business: { phrase: 'Please note that our entire hotel property operates a strict non-smoking policy, with dedicated smoking areas outside.', example: 'All rooms are strictly non-smoking, Sir.', translation: 'Xin lưu ý rằng toàn bộ khách sạn áp dụng chính sách nghiêm cấm hút thuốc, chúng tôi có bố trí khu vực hút thuốc riêng ở ngoài trời ạ.' },
        casualStyle: { phrase: 'Just a friendly reminder, all our rooms are non-smoking, but you can smoke on the outdoor patio.', example: 'No smoking in the rooms, please use the garden area.', translation: 'Nhắc nhẹ bạn một chút là trong phòng cấm hút thuốc nha, bạn có thể hút ngoài ban công sân vườn nè.' },
        superCasual: { phrase: 'No smoking inside, designated area is outside.', example: 'Strictly non-smoking in rooms.', translation: 'Không hút thuốc trong phòng nha, hút ở ngoài sân á.' }
      },
      {
        phrase: 'Check-out time is tomorrow at 12:00 noon.',
        meaning: 'Thông báo giờ trả phòng để khách sắp xếp lịch trình.',
        vietnamese: 'Giờ trả phòng là vào lúc 12:00 trưa.',
        business: { phrase: 'Check-out is by 12:00 noon on your departure day. Should you require late check-out, please notify us in advance.', example: 'Check-out time is at 12:00 noon.', translation: 'Giờ trả phòng là trước 12:00 trưa ngày khởi hành. Nếu quý khách có nhu cầu trả phòng muộn, xin vui lòng báo trước với chúng tôi ạ.' },
        casualStyle: { phrase: 'Check-out is at 12 noon. If you need an extra hour or two, just let us know tomorrow morning!', example: 'We check out at 12 PM, let us know if you need late check-out.', translation: 'Giờ trả phòng là 12h trưa. Nếu bạn cần thêm 1-2 tiếng thì cứ báo tụi mình vào sáng mai nha!' },
        superCasual: { phrase: 'Out by noon, let us know if you need late checkout.', example: 'Checkout is at 12.', translation: '12h trưa trả phòng nha, cần ở thêm thì ới tui.' }
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Formal Registration & Policy Explanation',
        school: 'business',
        participants: [
          { name: 'Agent Yen', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=YenAgent', role: 'Front Desk' },
          { name: 'Mr. Harrison', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MrHarrison', role: 'Business Traveler' }
        ],
        lines: [
          { participant: 'Agent Yen', text: 'Thank you for waiting, Mr. Harrison. May I please borrow your passport to complete the local registration?', translation: 'Cảm ơn ông Harrison đã kiên nhẫn chờ. Tôi có thể xin mượn hộ chiếu của ông để hoàn tất thủ tục đăng ký lưu trú được không ạ?' },
          { participant: 'Mr. Harrison', text: 'Certainly, here is my British passport.', translation: 'Dạ được chứ, đây là hộ chiếu Anh của tôi.' },
          { participant: 'Agent Yen', text: 'Thank you very much. I have printed your registration slip. Kindly verify your email address and place your signature here, please.', translation: 'Cảm ơn ông rất nhiều. Tôi đã in phiếu đăng ký lưu trú. Kính mong ông kiểm tra lại email và ký tên tại đây giúp tôi ạ.' },
          { participant: 'Mr. Harrison', text: 'Everything looks accurate. There is my signature. What time is breakfast?', translation: 'Mọi thông tin đều chuẩn xác rồi. Chữ ký của tôi đây. Mấy giờ thì bắt đầu ăn sáng vậy cô?' },
          { participant: 'Agent Yen', text: 'Our international buffet breakfast is served from 6:30 AM to 10:00 AM on the 2nd floor. Also, please note all rooms are strictly non-smoking.', translation: 'Buffet sáng quốc tế của khách sạn phục vụ từ 6:30 đến 10:00 sáng tại tầng 2 ạ. Ngoài ra, xin lưu ý tất cả các phòng đều nghiêm cấm hút thuốc.' },
          { participant: 'Mr. Harrison', text: 'Understood. I do not smoke anyway. Thank you, Yen.', translation: 'Tôi hiểu rồi. Dù sao thì tôi cũng không hút thuốc. Cảm ơn cô, Yến.' }
        ]
      },
      {
        type: 'pair',
        title: 'Casual Smooth Registration Process',
        school: 'casual',
        participants: [
          { name: 'Agent Huy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AgentHuy', role: 'Front Desk' },
          { name: 'Guest Jessica', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=GuestJessica', role: 'Traveler' }
        ],
        lines: [
          { participant: 'Agent Huy', text: 'Hi Jessica! Can I grab your passport for just a quick 10-second scan?', translation: 'Chào Jessica! Cho mình mượn hộ chiếu của bạn quét nhanh 10 giây nha?' },
          { participant: 'Guest Jessica', text: 'Here it is! All ready.', translation: 'Đây nè bạn ơi! Sẵn sàng hết rồi.' },
          { participant: 'Agent Huy', text: 'Awesome! Here is your registration form. Just check your mobile number and sign right along the dotted line.', translation: 'Tuyệt vời! Đây là phiếu đăng ký của bạn. Bạn kiểm tra lại số điện thoại rồi ký dọc theo đường chấm chấm này nhé.' },
          { participant: 'Guest Jessica', text: 'Done! Where do we get breakfast tomorrow?', translation: 'Xong rồi nè! Ngày mai tụi mình ăn sáng ở đâu vậy bạn?' },
          { participant: 'Agent Huy', text: 'Right by the pool on the ground floor between 6:30 and 10 AM. Fresh smoothies and pancakes every morning!', translation: 'Ngay cạnh hồ bơi ở tầng trệt từ 6:30 đến 10 giờ sáng nha. Sáng nào cũng có sinh tố trái cây tươi với bánh pancake nóng hổi luôn!' }
        ]
      },
      {
        type: 'pair',
        title: 'Quick Check-in Signing',
        school: 'superCasual',
        participants: [
          { name: 'Host Dan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HostDan', role: 'Staff' },
          { name: 'Guest Brad', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=GuestBrad', role: 'Guest' }
        ],
        lines: [
          { participant: 'Host Dan', text: 'Passport please, just scanning it in.', translation: 'Hộ chiếu nha bạn, quét vào máy tí.' },
          { participant: 'Guest Brad', text: 'Here.', translation: 'Đây nè.' },
          { participant: 'Host Dan', text: 'Sign right here. Breakfast is 6 to 10 AM downstairs. No smoking in the rooms.', translation: 'Ký vô đây nha. Ăn sáng từ 6h tới 10h dưới lầu. Cấm hút thuốc trong phòng á.' },
          { participant: 'Guest Brad', text: 'Got it, all good.', translation: 'Rõ rồi, ô kê luôn.' }
        ]
      }
    ]
  },

  // Buổi 6: Quy trình giao tiếp khi check-in (2)
  {
    id: 'hotel-06',
    title: 'Keycard Issuance & Room Orientation',
    vietnameseTitle: 'Buổi 6: Check-in (2) – Bàn giao Thẻ phòng & Hướng dẫn',
    category: 'Communication',
    subCategory: ['Hotel & Hospitality'],
    icon: '🛎️',
    color: '#0284c7',
    description: 'Giới thiệu loại phòng, vị trí tầng, hướng dẫn chạm thẻ thang máy, kết nối Wi-Fi, bàn giao chìa khóa/thẻ phòng và kết thúc check-in chuyên nghiệp.',
    words: [
      { id: 'h6-1', word: 'Keycard', ipa: '/ˈkiːkɑːd/', definition: 'Thẻ từ điện tử mở cửa phòng và thang máy', translation: 'Thẻ từ mở phòng', example: 'Tap your keycard against the electronic door sensor.', blankSentence: 'Insert the ____ into the slot for power.', emoji: '💳' },
      { id: 'h6-2', word: 'Elevator', ipa: '/ˈelɪveɪtə/', definition: 'Thang máy di chuyển giữa các tầng', translation: 'Thang máy', example: 'The guest elevators are located directly behind the lobby pillar.', blankSentence: 'Take the ____ up to the 14th floor.', emoji: '🛗' },
      { id: 'h6-3', word: 'Sensor', ipa: '/ˈsensə/', definition: 'Bộ phận cảm biến nhận diện thẻ từ', translation: 'Bộ phận cảm biến', example: 'Hold your card against the sensor until the green light flashes.', blankSentence: 'Tap your card on the elevator ____.', emoji: '🟢' },
      { id: 'h6-4', word: 'Escort', ipa: '/ɪˈskɔːt/', definition: 'Dẫn đường, hộ tống khách lên phòng', translation: 'Dẫn đường, hộ tống', example: 'Our porter will gladly escort you directly to your suite.', blankSentence: 'Allow our team to ____ you to your room.', emoji: '🚶' },
      { id: 'h6-5', word: 'Network', ipa: '/ˈnetwɜːk/', definition: 'Mạng Wi-Fi internet của khách sạn', translation: 'Mạng Wi-Fi', example: 'Connect to our "Grand_Guest" Wi-Fi network without a password.', blankSentence: 'Select the hotel Wi-Fi ____ on your phone.', emoji: '📶' },
      { id: 'h6-6', word: 'Dial', ipa: '/ˈdaɪəl/', definition: 'Bấm số gọi điện thoại nội bộ', translation: 'Bấm số điện thoại', example: 'Dial "0" on your room phone to reach reception 24/7.', blankSentence: 'Just ____ zero if you need fresh towels.', emoji: '☎️' }
    ],
    structures: [
      {
        phrase: 'Here are your keycards for Room [Number], on the [Floor] floor.',
        meaning: 'Bàn giao thẻ phòng và thông báo số phòng, tầng lầu.',
        vietnamese: 'Đây là thẻ phòng của quý khách: Phòng [Số phòng], tại tầng [Số tầng].',
        business: { phrase: 'Here are your two keycards for Room 1208, located on the twelfth floor overlooking the ocean.', example: 'Here are your keycards for Room 502 on the fifth floor.', translation: 'Đây là hai thẻ từ cho Phòng 1208, tọa lạc tại tầng 12 với hướng nhìn ra đại dương tuyệt đẹp ạ.' },
        casualStyle: { phrase: 'Here are your keys! You’re in Room 504 on the 5th floor.', example: 'Here is your keycard for Room 302 on the third floor.', translation: 'Thẻ phòng của bạn đây nè! Bạn ở phòng 504 tại tầng 5 nha.' },
        superCasual: { phrase: 'Room 504, 5th floor. Two cards.', example: 'Keys for room 201.', translation: 'Phòng 504, lầu 5. Gửi bạn 2 thẻ nha.' }
      },
      {
        phrase: 'To access your floor, tap your keycard against the elevator sensor.',
        meaning: 'Hướng dẫn an ninh khi sử dụng thang máy khách sạn.',
        vietnamese: 'Để lên tầng phòng mình, quý khách vui lòng chạm thẻ vào cảm biến thang máy.',
        business: { phrase: 'For guest security, please tap your keycard against the elevator scanner before selecting floor twelve.', example: 'Tap your keycard in the elevator before pressing your floor.', translation: 'Để đảm bảo an ninh cho quý khách, vui lòng chạm thẻ từ vào cảm biến thang máy trước khi bấm chọn tầng 12 ạ.' },
        casualStyle: { phrase: 'In the elevator, just tap your card first, then hit the 5th floor button.', example: 'Tap your card right below the buttons in the lift.', translation: 'Lên thang máy bạn chỉ cần quẹt thẻ trước, rồi bấm số 5 là thang chạy nha.' },
        superCasual: { phrase: 'Tap card in the lift, then press 5.', example: 'Scan card first, then floor.', translation: 'Chạm thẻ vô thang máy rồi bấm số 5.' }
      },
      {
        phrase: 'Wi-Fi is complimentary; simply connect to [Network Name].',
        meaning: 'Hướng dẫn kết nối mạng internet không dây.',
        vietnamese: 'Wi-Fi hoàn toàn miễn phí; quý khách chỉ cần kết nối vào mạng [Tên mạng].',
        business: { phrase: 'High-speed Wi-Fi is complimentary hotel-wide; simply connect to "Sheraton_Guest" and enter your room number and surname.', example: 'Wi-Fi is free; connect to "Hotel_Guest" network.', translation: 'Wi-Fi tốc độ cao được cung cấp miễn phí toàn khách sạn; quý khách chỉ cần kết nối vào "Sheraton_Guest" và nhập số phòng cùng họ tên ạ.' },
        casualStyle: { phrase: 'Wi-Fi is super fast and free. Just select "Hotel_Guest", no password needed!', example: 'Free Wi-Fi everywhere, no password needed.', translation: 'Wi-Fi nhanh và miễn phí hoàn toàn. Bạn chọn mạng "Hotel_Guest" là vào được luôn không cần mật khẩu nha!' },
        superCasual: { phrase: 'Free Wi-Fi, network name is on the keycard sleeve.', example: 'Wi-Fi name is on your folder.', translation: 'Wi-Fi miễn phí, tên mạng in sẵn trên bao đựng thẻ luôn á.' }
      },
      {
        phrase: 'Should you need anything, simply dial "0" from your room phone.',
        meaning: 'Hướng dẫn cách liên hệ bộ phận chăm sóc khách hàng từ phòng.',
        vietnamese: 'Nếu cần bất cứ điều gì, quý khách chỉ cần bấm phím "0" từ điện thoại trong phòng.',
        business: { phrase: 'Should you require any amenities or room service, please dial "0" to connect with our 24-hour guest service center.', example: 'Dial "0" from your bedside phone for reception.', translation: 'Nếu quý khách cần thêm vật dụng hay gọi đồ ăn tại phòng, xin vui lòng bấm phím "0" để kết nối với tổng đài 24/7 của chúng tôi ạ.' },
        casualStyle: { phrase: 'If you ever need fresh towels or room service, just press "0" on the phone!', example: 'Need anything? Just hit 0 on the phone.', translation: 'Nếu cần thêm khăn hay đồ ăn thức uống gì, bạn cứ bấm số "0" trên máy bàn nha!' },
        superCasual: { phrase: 'Dial 0 for anything you need.', example: 'Press 0 for reception.', translation: 'Cần gì cứ bấm phím 0 nha.' }
      },
      {
        phrase: 'Our bellman will escort you and deliver your luggage shortly.',
        meaning: 'Báo cho khách biết nhân viên hành lý sẽ hỗ trợ đưa lên phòng.',
        vietnamese: 'Nhân viên hành lý sẽ dẫn đường và mang hành lý lên phòng cho quý khách ngay bây giờ.',
        business: { phrase: 'Our bellman, James, will escort you to your suite and deliver your luggage immediately. We wish you an exceptional stay!', example: 'Our bellman will escort you up and handle your bags.', translation: 'Nhân viên hành lý James sẽ dẫn đường và chuyển hành lý lên tận phòng cho quý khách ngay bây giờ ạ. Chúc quý khách có kỳ nghỉ tuyệt vời!' },
        casualStyle: { phrase: 'Nam here will help carry your bags upstairs right away. Have a fantastic stay!', example: 'Our porter will follow you up with your luggage. Enjoy!', translation: 'Bạn Nam đây sẽ giúp xách hành lý lên phòng cho bạn ngay nhé. Chúc bạn ở đây thật vui vẻ!' },
        superCasual: { phrase: 'Bags are coming right behind you. Enjoy your stay!', example: 'Bags will be up in a minute.', translation: 'Hành lý được đem lên liền theo sau bạn nha. Nghỉ ngơi vui nghen!' }
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Complete 5-Star Keycard Handover & Room Orientation',
        school: 'business',
        participants: [
          { name: 'Concierge Bao', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BaoConcierge', role: 'Front Desk' },
          { name: 'Ms. Anderson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MsAnderson', role: 'Guest' }
        ],
        lines: [
          { participant: 'Concierge Bao', text: 'Everything is finalized, Ms. Anderson. Here are your two keycards for Room 1604, located on our sixteenth floor.', translation: 'Mọi thủ tục đã hoàn tất chu đáo rồi thưa cô Anderson. Đây là hai thẻ từ mở Phòng 1604, tọa lạc tại tầng 16 của khách sạn.' },
          { participant: 'Ms. Anderson', text: 'Thank you! Does this keycard also operate the elevator?', translation: 'Cảm ơn cậu! Thẻ này cũng dùng để quẹt thang máy luôn đúng không?' },
          { participant: 'Concierge Bao', text: 'Yes, exactly. For your security, simply tap your card against the sensor below the floor buttons, and press sixteen.', translation: 'Dạ hoàn toàn chính xác ạ. Để đảm bảo an ninh, cô chỉ cần chạm nhẹ thẻ vào cảm biến phía dưới bảng nút bấm, rồi nhấn số 16 là được ạ.' },
          { participant: 'Ms. Anderson', text: 'Wonderful. And what is the Wi-Fi password?', translation: 'Tuyệt quá. Còn mật khẩu Wi-Fi là gì vậy cậu?' },
          { participant: 'Concierge Bao', text: 'No password is required, Ms. Anderson. Simply connect to "Grand_Luxury_Guest" and enter your room number 1604. If you need anything at all, dial zero. Our bellman will escort you up now. Have a truly wonderful stay!', translation: 'Dạ không cần mật khẩu thưa cô Anderson. Cô chỉ cần chọn mạng "Grand_Luxury_Guest" và nhập số phòng 1604. Nếu cần bất cứ điều gì, cô chỉ cần bấm phím không. Nhân viên hành lý sẽ đưa cô lên phòng ngay bây giờ ạ. Chúc cô có một kỳ nghỉ thật tuyệt vời!' }
        ]
      },
      {
        type: 'pair',
        title: 'Casual Warm Room Keycard Handover',
        school: 'casual',
        participants: [
          { name: 'Staff Hoa', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=StaffHoa', role: 'Front Desk' },
          { name: 'Guest Chris', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=GuestChris', role: 'Guest' }
        ],
        lines: [
          { participant: 'Staff Hoa', text: 'All done, Chris! Here are your keys to Room 308 on the third floor.', translation: 'Xong xuôi hết rồi Chris ơi! Đây là chìa khóa phòng 308 ở tầng 3 của bạn nha.' },
          { participant: 'Guest Chris', text: 'Awesome! Where is the lift?', translation: 'Tuyệt vời! Thang máy ở đâu vậy bạn?' },
          { participant: 'Staff Hoa', text: 'Right down that corridor next to the indoor bamboo fountain. Tap your card first in the lift, then press three. Free Wi-Fi connects automatically!', translation: 'Ngay dọc hành lang bên cạnh đài phun nước tre trong nhà đó bạn. Lên thang máy quẹt thẻ trước rồi bấm số 3 nghen. Wi-Fi miễn phí kết nối tự động luôn!' },
          { participant: 'Guest Chris', text: 'Super easy. Thanks for being so welcoming, Hoa!', translation: 'Dễ ợt luôn. Cảm ơn Hoa vì sự đón tiếp nồng hậu nha!' },
          { participant: 'Staff Hoa', text: 'My absolute pleasure! Have a super relaxing afternoon, Chris!', translation: 'Niềm vui của mình mà! Chúc Chris có một buổi chiều nghỉ ngơi thật thoải mái nha!' }
        ]
      },
      {
        type: 'pair',
        title: 'Quick Elevator & Card Info',
        school: 'superCasual',
        participants: [
          { name: 'Clerk Sam', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ClerkSam', role: 'Staff' },
          { name: 'Guest Tom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=GuestTom', role: 'Guest' }
        ],
        lines: [
          { participant: 'Clerk Sam', text: 'Here are your keys, Room 410. Lift is on your right. Scan the card, press 4.', translation: 'Thẻ phòng của bạn đây, phòng 410. Thang máy bên tay phải. Quẹt thẻ rồi bấm số 4 nha.' },
          { participant: 'Guest Tom', text: 'Wi-Fi password?', translation: 'Mật khẩu Wi-Fi là gì bạn?' },
          { participant: 'Clerk Sam', text: 'No password, open network. Dial 0 for front desk. Enjoy your stay!', translation: 'Không có pass, mạng mở nha. Cần gì bấm phím 0 gọi lễ tân. Chúc ở vui vẻ!' }
        ]
      }
    ]
  },

  // Buổi 7: Tư vấn phòng & dịch vụ khách sạn
  {
    id: 'hotel-07',
    title: 'Room Upselling & Hotel Amenities Consultation',
    vietnameseTitle: 'Buổi 7: Tư vấn Phòng & Dịch vụ Khách sạn',
    category: 'Communication',
    subCategory: ['Hotel & Hospitality'],
    icon: '🏨',
    color: '#0284c7',
    description: 'Mô tả Standard, Deluxe, Suite, giới thiệu nhà hàng, spa, gym, hồ bơi, đưa đón sân bay và kỹ thuật upselling nâng hạng phòng tinh tế.',
    words: [
      { id: 'h7-1', word: 'Upgrade', ipa: '/ˌʌpˈɡreɪd/', definition: 'Nâng lên hạng phòng cao cấp hơn', translation: 'Nâng hạng phòng', example: 'We would love to offer you a special upgrade to our Executive Suite.', blankSentence: 'Would you like to ____ to an oceanfront villa?', emoji: '⬆️' },
      { id: 'h7-2', word: 'Suite', ipa: '/swiːt/', definition: 'Hạng phòng cao cấp có phòng khách và phòng ngủ riêng', translation: 'Phòng Suite', example: 'The Presidential Suite features a private sauna and butler service.', blankSentence: 'They stayed in a luxury corner ____.', emoji: '🛋️' },
      { id: 'h7-3', word: 'Panoramic', ipa: '/ˌpænəˈræmɪk/', definition: 'Tầm nhìn bao quát toàn cảnh không bị che chắn', translation: 'Tầm nhìn toàn cảnh', example: 'Enjoy panoramic views of the city skyline from your private terrace.', blankSentence: 'The rooftop bar offers a ____ ocean vista.', emoji: '🌅' },
      { id: 'h7-4', word: 'Shuttle bus', ipa: '/ˈʃʌtl bʌs/', definition: 'Xe đưa đón định kỳ của khách sạn', translation: 'Xe buýt đưa đón', example: 'Our complimentary shuttle bus departs for the ancient town every hour.', blankSentence: 'Is there a free airport ____ available?', emoji: '🚌' },
      { id: 'h7-5', word: 'Treatment', ipa: '/ˈtriːtmənt/', definition: 'Liệu trình chăm sóc sức khỏe, massage tại spa', translation: 'Liệu trình spa', example: 'Book an aromatherapy massage treatment at our Lotus Spa.', blankSentence: 'Guests receive 20% off all spa ____s.', emoji: '💆' },
      { id: 'h7-6', word: 'Infinity pool', ipa: '/ɪnˈfɪnəti puːl/', definition: 'Hồ bơi vô cực nhìn ra chân trời', translation: 'Hồ bơi vô cực', example: 'The rooftop infinity pool is the perfect spot for sunset photos.', blankSentence: 'Take a swim in our heated ____.', emoji: '🏊' }
    ],
    structures: [
      {
        phrase: 'For just [Amount] extra, we can upgrade you to [Room Type].',
        meaning: 'Nâng hạng phòng với mức giá chênh lệch ưu đãi.',
        vietnamese: 'Chỉ với thêm [Số tiền], chúng tôi có thể nâng hạng phòng cho quý khách lên [Loại phòng].',
        business: { phrase: 'For an additional $35 per night, we can gladly upgrade you to our Premier Suite with panoramic ocean views and lounge privileges.', example: 'For just $30 extra, we can upgrade you to our Executive Suite.', translation: 'Chỉ với thêm 35 USD mỗi đêm, chúng tôi rất hân hạnh được nâng hạng phòng cho quý khách lên Premier Suite với tầm nhìn đại dương toàn cảnh và đặc quyền phòng chờ VIP ạ.' },
        casualStyle: { phrase: 'For only $25 more tonight, you can get a huge balcony overlooking the ocean!', example: 'We have a special deal today: upgrade to ocean view for just $20.', translation: 'Chỉ thêm 25 đô đêm nay thôi là bạn có ngay ban công siêu rộng ngắm trọn cảnh biển rồi nè!' },
        superCasual: { phrase: 'Upgrade to sea view for just $20 extra?', example: 'Want a bigger room for $20 more?', translation: 'Thêm 20 đô đổi qua phòng ngắm biển luôn hông bạn?' }
      },
      {
        phrase: 'Our hotel offers complimentary access to [Amenities].',
        meaning: 'Giới thiệu các tiện ích đi kèm không phụ thu.',
        vietnamese: 'Khách sạn có các tiện ích miễn phí bao gồm...',
        business: { phrase: 'All registered guests enjoy complimentary access to our 24-hour fitness studio, sauna, and rooftop infinity pool.', example: 'Our hotel offers complimentary access to the gym and pool.', translation: 'Tất cả quý khách lưu trú đều được sử dụng miễn phí phòng tập thể hình 24/7, phòng xông hơi và hồ bơi vô cực trên tầng thượng ạ.' },
        casualStyle: { phrase: 'You can use the gym, sauna, and top-floor pool whenever you like for free!', example: 'Pool and gym are totally free for you to use.', translation: 'Bạn có thể dùng phòng gym, phòng xông hơi và hồ bơi tầng thượng hoàn toàn miễn phí bất cứ lúc nào nha!' },
        superCasual: { phrase: 'Pool, gym, and sauna are all free.', example: 'Free pool and gym access.', translation: 'Hồ bơi, gym với xông hơi xài tẹt ga miễn phí nha.' }
      },
      {
        phrase: 'May I recommend our [Service] for your relaxation?',
        meaning: 'Gợi ý dịch vụ spa hoặc ẩm thực tinh tế.',
        vietnamese: 'Tôi xin phép gợi ý quý khách trải nghiệm dịch vụ... để thư giãn ạ.',
        business: { phrase: 'May I recommend our Lotus Spa on the 3rd floor? We offer an exclusive 20% discount on herbal aromatherapy treatments for staying guests.', example: 'May I recommend our Lotus Spa for your relaxation this afternoon?', translation: 'Tôi xin phép được gợi ý quý khách trải nghiệm Lotus Spa tại tầng 3 ạ? Chúng tôi đang có ưu đãi giảm giá 20% các liệu trình massage thảo dược cho khách lưu trú.' },
        casualStyle: { phrase: 'If you’re feeling tired after your flight, our spa downstairs has a great massage promo today!', example: 'Check out the spa downstairs, it’s super relaxing.', translation: 'Nếu bạn thấy mỏi người sau chuyến bay thì spa dưới tầng trệt đang có gói massage giảm giá đã lắm đó!' },
        superCasual: { phrase: 'Spa downstairs has 20% off today.', example: 'Spa is 20% off if you need a massage.', translation: 'Spa ở dưới đang giảm 20% kìa bạn ơi.' }
      },
      {
        phrase: 'We operate a daily complimentary shuttle service to [Location].',
        meaning: 'Thông báo về tuyến xe buýt đưa đón miễn phí.',
        vietnamese: 'Chúng tôi có tuyến xe đưa đón miễn phí hàng ngày đến...',
        business: { phrase: 'We operate a complimentary private shuttle service to the historical center departing every two hours from our main lobby.', example: 'We have a free shuttle bus to the beach every hour.', translation: 'Khách sạn có dịch vụ xe buýt riêng đưa đón miễn phí đến khu phố cổ, xuất phát 2 tiếng một chuyến từ sảnh chính ạ.' },
        casualStyle: { phrase: 'We have a free shuttle van going straight to the beach every hour!', example: 'Catch our free shuttle to downtown, leaves every hour.', translation: 'Tụi mình có xe trung chuyển miễn phí chạy thẳng ra biển mỗi tiếng một chuyến đó nha!' },
        superCasual: { phrase: 'Free beach shuttle leaves every hour outside.', example: 'Free van to town every 2 hours.', translation: 'Xe buýt ra biển miễn phí đậu ngoài sảnh mỗi tiếng 1 chuyến.' }
      },
      {
        phrase: 'Would you like me to make a reservation on your behalf?',
        meaning: 'Chủ động đề nghị hỗ trợ đặt bàn hoặc dịch vụ cho khách.',
        vietnamese: 'Quý khách có muốn tôi hỗ trợ đặt trước thay cho quý khách không ạ?',
        business: { phrase: 'Would you like me to reserve a private sunset table for dinner at our rooftop grill on your behalf?', example: 'Would you like me to book a spa appointment for you today?', translation: 'Quý khách có muốn tôi hỗ trợ đặt trước một bàn ngắm hoàng hôn cho bữa tối tại nhà hàng nướng tầng thượng không ạ?' },
        casualStyle: { phrase: 'Want me to book you a table at the rooftop restaurant tonight?', example: 'Shall I book a spot for you at the spa?', translation: 'Bạn có muốn mình giữ sẵn một bàn đẹp ở nhà hàng sân thượng tối nay không?' },
        superCasual: { phrase: 'Want me to book a table for you?', example: 'I can book that table for you right now.', translation: 'Cần tui giữ bàn ăn tối nay cho bạn hông?' }
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Upselling Room Upgrade & Spa Consultation',
        school: 'business',
        participants: [
          { name: 'Concierge Huy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HuyConcierge', role: 'Front Desk Host' },
          { name: 'Mr. Sterling', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MrSterling', role: 'Executive Guest' }
        ],
        lines: [
          { participant: 'Concierge Huy', text: 'Good afternoon, Mr. Sterling. While reviewing your profile, I noticed you have booked our Deluxe City View room for four nights.', translation: 'Kính chào buổi chiều ông Sterling. Khi kiểm tra hồ sơ, tôi thấy ông đã đặt phòng Deluxe Hướng phố trong bốn đêm.' },
          { participant: 'Mr. Sterling', text: 'Yes, that is correct, Huy.', translation: 'Vâng đúng rồi Huy.' },
          { participant: 'Concierge Huy', text: 'Because you are celebrating your wedding anniversary, we have a privileged offer: for just $30 additional per night, we can upgrade you to our Oceanfront Suite with a private balcony and complimentary evening cocktail lounge access.', translation: 'Nhân dịp ông bà kỷ niệm ngày cưới, khách sạn có ưu đãi đặc biệt: chỉ thêm 30 USD mỗi đêm, chúng tôi xin phép nâng hạng phòng cho ông bà lên Oceanfront Suite có ban công riêng nhìn ra biển và quyền vào phòng chờ cocktail miễn phí mỗi tối ạ.' },
          { participant: 'Mr. Sterling', text: 'That sounds delightful! My wife would adore the ocean breeze. Let us do that, please.', translation: 'Nghe tuyệt quá! Vợ tôi chắc chắn sẽ mê mẩn gió biển. Làm ơn nâng hạng giúp tôi nhé.' },
          { participant: 'Concierge Huy', text: 'Splendid choice, Sir! Also, may I suggest our couples aromatherapy treatment at Lotus Spa? We offer an exclusive 25% discount for suite guests.', translation: 'Một lựa chọn tuyệt hảo thưa ông! Ngoài ra, tôi xin phép gợi ý liệu trình massage đôi bằng tinh dầu tại Lotus Spa ạ? Chúng tôi đang giảm giá 25% cho khách phòng Suite.' },
          { participant: 'Mr. Sterling', text: 'Book us in for 5:00 PM tomorrow, Huy. Outstanding recommendations!', translation: 'Đặt giúp chúng tôi lúc 5 giờ chiều mai nhé Huy. Những gợi ý thật xuất sắc!' }
        ]
      },
      {
        type: 'pair',
        title: 'Casual Room Deal & Pool Recommendation',
        school: 'casual',
        participants: [
          { name: 'Staff Lan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=StaffLan', role: 'Host' },
          { name: 'Guest Amy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=GuestAmy', role: 'Vacationer' }
        ],
        lines: [
          { participant: 'Staff Lan', text: 'Hey Amy! Quick question: we have an opening in our top-floor pool view room today for only $15 more. Would you like to treat yourself?', translation: 'Chào Amy! Mình hỏi nhỏ nè: hôm nay tụi mình có một phòng trống tầng trên cùng nhìn thẳng ra hồ bơi chỉ thêm có 15 đô thôi á. Bạn có muốn tự thưởng cho mình không nè?' },
          { participant: 'Guest Amy', text: 'Oh wow, does it have a balcony?', translation: 'Ồ đã vậy, phòng đó có ban công không bạn?' },
          { participant: 'Staff Lan', text: 'Yes, a huge private balcony with sunset views! Plus, you can walk straight out to the rooftop infinity pool.', translation: 'Có chứ, ban công riêng siêu rộng ngắm hoàng hôn luôn! Với lại bạn bước vài bước là ra ngay hồ bơi vô cực trên tầng thượng.' },
          { participant: 'Guest Amy', text: 'Sign me up! That sounds totally worth $15!', translation: 'Chốt đơn cho mình liền! 15 đô mà như vầy quá xứng đáng luôn á!' },
          { participant: 'Staff Lan', text: 'You are going to love it! Here are your upgraded keys!', translation: 'Bạn chắc chắn sẽ mê tít cho xem! Thẻ phòng nâng hạng của bạn đây nha!' }
        ]
      },
      {
        type: 'pair',
        title: 'Quick Upgrade Option at Check-In',
        school: 'superCasual',
        participants: [
          { name: 'Clerk Dan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ClerkDan', role: 'Staff' },
          { name: 'Guest Nick', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=GuestNick', role: 'Guest' }
        ],
        lines: [
          { participant: 'Clerk Dan', text: 'Want to bump up to a sea view room? Just $10 extra tonight.', translation: 'Muốn đổi lên phòng ngắm biển không bạn? Thêm 10 đô đêm nay thôi nè.' },
          { participant: 'Guest Nick', text: 'Sea view on high floor?', translation: 'Ngắm biển trên tầng cao hả bạn?' },
          { participant: 'Clerk Dan', text: 'Yep, 10th floor, corner room.', translation: 'Chuẩn luôn, tầng 10 phòng góc.' },
          { participant: 'Guest Nick', text: 'Deal, let’s do it.', translation: 'Chốt, làm luôn bạn.' }
        ]
      }
    ]
  },

  // Buổi 8: Giao tiếp khi check-out & thanh toán
  {
    id: 'hotel-08',
    title: 'Check-Out Procedure, Billing & Farewell',
    vietnameseTitle: 'Buổi 8: Giao tiếp khi Check-out & Thanh toán',
    category: 'Communication',
    subCategory: ['Hotel & Hospitality'],
    icon: '🛎️',
    color: '#0284c7',
    description: 'Hỏi số phòng, trả thẻ phòng, kiểm tra minibar, xuất hóa đơn folio chi tiết, thanh toán tiền mặt/thẻ, hỏi cảm nhận của khách, chào tạm biệt và mời quay lại.',
    words: [
      { id: 'h8-1', word: 'Folio', ipa: '/ˈfəʊliəʊ/', definition: 'Bảng kê chi tiết toàn bộ hóa đơn chi tiêu của khách', translation: 'Bảng kê hóa đơn khách sạn', example: 'Here is your itemized folio showing room charges and incidentals.', blankSentence: 'Please review your printed room ____.', emoji: '📄' },
      { id: 'h8-2', word: 'Minibar', ipa: '/ˈmɪnibɑː/', definition: 'Tủ lạnh nhỏ chứa nước ngọt, rượu bia tính phí', translation: 'Tủ lạnh mini', example: 'Did you enjoy any beverages or snacks from the minibar today?', blankSentence: 'Have you used anything from the ____?', emoji: '🥤' },
      { id: 'h8-3', word: 'Settlement', ipa: '/ˈsetlmənt/', definition: 'Việc thanh toán dứt điểm hóa đơn', translation: 'Thanh toán hoàn tất', example: 'We will process the settlement on your credit card.', blankSentence: 'Your invoice is ready for final ____.', emoji: '💳' },
      { id: 'h8-4', word: 'Receipt', ipa: '/rɪˈsiːt/', definition: 'Hóa đơn, biên lai thanh toán đã đóng dấu', translation: 'Biên lai thanh toán', example: 'Here is your signed payment receipt and tax invoice.', blankSentence: 'I will email you the official VAT ____.', emoji: '🧾' },
      { id: 'h8-5', word: 'Feedback', ipa: '/ˈfiːdbæk/', definition: 'Ý kiến phản hồi, đánh giá cảm nhận của khách', translation: 'Ý kiến đóng góp', example: 'We highly value your feedback on your stay experience.', blankSentence: 'Thank you for giving us valuable ____.', emoji: '⭐' },
      { id: 'h8-6', word: 'Farewell', ipa: '/feəˈwel/', definition: 'Lời chào tạm biệt nồng ấm khi khách rời đi', translation: 'Lời chào tạm biệt', example: 'We bid you a warm farewell and safe journey home.', blankSentence: 'Our team gathered to bid the guests ____.', emoji: '👋' }
    ],
    structures: [
      {
        phrase: 'May I have your room number and keycards, please?',
        meaning: 'Hỏi số phòng và thu lại thẻ từ khi làm thủ tục check-out.',
        vietnamese: 'Tôi có thể xin lại số phòng và thẻ phòng của quý khách được không ạ?',
        business: { phrase: 'Good morning, Sir. Are you checking out today? May I please have your room number and your keycards?', example: 'May I have your room number and keycards, please?', translation: 'Kính chào buổi sáng thưa ông. Quý khách làm thủ tục trả phòng hôm nay đúng không ạ? Tôi xin phép được nhận lại số phòng và thẻ từ ạ.' },
        casualStyle: { phrase: 'Morning! Checking out? Can I grab your room number and keys?', example: 'Hi there, are you heading out today? What was your room number?', translation: 'Chào buổi sáng bạn! Bạn trả phòng hả? Cho mình xin số phòng với thẻ từ nha.' },
        superCasual: { phrase: 'Checking out? Room number please.', example: 'Keys and room number, please.', translation: 'Trả phòng đúng hông? Cho tui số phòng với thẻ nha.' }
      },
      {
        phrase: 'Did you happen to use any items from the minibar today?',
        meaning: 'Hỏi kiểm tra đồ uống đồ ăn vặt minibar trước khi xuất hóa đơn.',
        vietnamese: 'Quý khách có dùng đồ uống hay đồ ăn vặt trong tủ lạnh minibar không ạ?',
        business: { phrase: 'Did you happen to consume any refreshments or snacks from the minibar this morning?', example: 'Did you use any items from the minibar today, Sir?', translation: 'Dạ sáng nay quý khách có dùng thêm thức uống giải khát hay đồ ăn nhẹ nào từ tủ lạnh minibar không ạ?' },
        casualStyle: { phrase: 'Did you grab any drinks or snacks from the minibar before leaving?', example: 'Anything from the minibar this morning?', translation: 'Sáng nay bạn có lấy chai nước hay gói bánh nào trong minibar không nè?' },
        superCasual: { phrase: 'Anything from the minibar?', example: 'Use the minibar today?', translation: 'Có uống gì trong tủ lạnh nhỏ không bạn?' }
      },
      {
        phrase: 'Here is your itemized folio for your review.',
        meaning: 'Đưa hóa đơn chi tiết cho khách kiểm tra trước khi quẹt thẻ.',
        vietnamese: 'Gửi quý khách bảng kê hóa đơn chi tiết để kiểm tra lại ạ.',
        business: { phrase: 'Here is your itemized folio detailing your room charge, dining at the grill, and spa services. Kindly review it for accuracy.', example: 'Here is your itemized bill for your review, Sir.', translation: 'Đây là bảng kê chi tiết gồm tiền phòng, bữa ăn tại nhà hàng nướng và dịch vụ spa. Kính mời quý khách kiểm tra lại tính chính xác ạ.' },
        casualStyle: { phrase: 'Here is the breakdown of your bill: room and dinner last night. Looks good to you?', example: 'Take a quick look at the bill to make sure everything is right.', translation: 'Đây là chi tiết hóa đơn của bạn nè: tiền phòng với bữa tối hôm qua. Bạn xem qua thấy chuẩn hết chưa nha?' },
        superCasual: { phrase: 'Here’s the bill, take a quick look.', example: 'Bill is right here.', translation: 'Hóa đơn đây, bạn nghía qua cái nha.' }
      },
      {
        phrase: 'How was your overall stay with us?',
        meaning: 'Hỏi thăm cảm nhận trải nghiệm lưu trú của khách.',
        vietnamese: 'Kỳ nghỉ của quý khách tại khách sạn chúng tôi như thế nào ạ?',
        business: { phrase: 'How was your overall experience during your stay with us, Mr. Henderson? Did everything meet your expectations?', example: 'How was your stay with us, Sir? Was everything satisfactory?', translation: 'Kỳ nghỉ của ông Henderson tại khách sạn chúng tôi có như ý không ạ? Mọi dịch vụ có làm ông hài lòng không ạ?' },
        casualStyle: { phrase: 'How was your time with us? Did you enjoy the pool and the breakfast?', example: 'Did you have a good time staying with us?', translation: 'Mấy hôm ở đây bạn thấy thế nào nè? Bạn có thích hồ bơi với đồ ăn sáng không?' },
        superCasual: { phrase: 'How was everything? Good stay?', example: 'Enjoy your stay?', translation: 'Mọi thứ ổn áp hết chứ bạn? Ở thích không?' }
      },
      {
        phrase: 'Thank you for staying with us; we wish you a safe trip home!',
        meaning: 'Chào tạm biệt nồng ấm và chúc khách lên đường bình an.',
        vietnamese: 'Cảm ơn quý khách đã lưu trú; chúc quý khách chuyến đi thượng lộ bình an!',
        business: { phrase: 'Thank you very much for choosing the Grand Palace. It was a true pleasure hosting you. We wish you a safe onward journey and look forward to your return!', example: 'Thank you for staying with us, have a safe trip home!', translation: 'Chân thành cảm ơn quý khách đã lựa chọn Grand Palace. Rất hân hạnh được đón tiếp quý khách. Chúc quý khách thượng lộ bình an và hẹn gặp lại quý khách lần tới ạ!' },
        casualStyle: { phrase: 'Thanks so much for staying with us! Have a safe flight back home, and visit us again soon!', example: 'Thanks a lot for coming, safe travels home!', translation: 'Cảm ơn bạn rất nhiều vì đã ghé khách sạn nha! Chúc bạn bay bình an và sớm quay lại với tụi mình nghen!' },
        superCasual: { phrase: 'Thanks for coming! Safe travels!', example: 'Have a great flight back!', translation: 'Cảm ơn bạn đã ghé nha! Đi đường bình an nghen!' }
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Executive Check-Out & Bill Settlement',
        school: 'business',
        participants: [
          { name: 'Senior Agent Mai', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MaiSenior', role: 'Front Desk' },
          { name: 'Mr. Bradley', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MrBradley', role: 'Business Guest' }
        ],
        lines: [
          { participant: 'Senior Agent Mai', text: 'Good morning, Mr. Bradley. Are you checking out of Room 1402 today?', translation: 'Kính chào buổi sáng ông Bradley. Ông làm thủ tục trả phòng 1402 hôm nay đúng không ạ?' },
          { participant: 'Mr. Bradley', text: 'Good morning, Mai. Yes, here are my two keycards.', translation: 'Chào buổi sáng Mai. Đúng rồi, đây là hai thẻ phòng của tôi.' },
          { participant: 'Senior Agent Mai', text: 'Thank you, Sir. Did you have an opportunity to consume anything from the minibar this morning?', translation: 'Cảm ơn ông ạ. Sáng nay ông có dùng thêm đồ uống nào trong tủ lạnh minibar không ạ?' },
          { participant: 'Mr. Bradley', text: 'Just one bottle of sparkling mineral water before packing.', translation: 'Chỉ có một chai nước khoáng có ga trước khi thu dọn đồ thôi.' },
          { participant: 'Senior Agent Mai', text: 'Noted, Sir. Here is your itemized folio showing your three room nights, laundry, and the mineral water. The total comes to $425. Would you like to charge this to the Visa on file?', translation: 'Dạ tôi đã ghi nhận. Đây là bảng kê chi tiết gồm ba đêm phòng, dịch vụ giặt ủi và chai nước khoáng. Tổng thanh toán là 425 USD. Ông có muốn thanh toán qua thẻ Visa đã lưu trên hệ thống không ạ?' },
          { participant: 'Mr. Bradley', text: 'Yes, please charge that card. The service here has been top-notch throughout my business trip.', translation: 'Vâng, làm ơn quẹt thẻ đó giúp tôi. Dịch vụ ở đây rất chu đáo trong suốt chuyến công tác của tôi.' },
          { participant: 'Senior Agent Mai', text: 'We are thrilled to hear that, Mr. Bradley! Here is your signed invoice. Our taxi is waiting at the curb to take you to the airport. Have a safe journey home!', translation: 'Chúng tôi rất vui mừng khi nghe điều đó thưa ông Bradley! Đây là hóa đơn đã ký. Xe taxi đã đón sẵn trước sảnh để đưa ông ra sân bay ạ. Chúc ông thượng lộ bình an!' }
        ]
      },
      {
        type: 'pair',
        title: 'Casual Friendly Check-Out',
        school: 'casual',
        participants: [
          { name: 'Host Khoa', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HostKhoa', role: 'Host' },
          { name: 'Guest Laura', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=GuestLaura', role: 'Traveler' }
        ],
        lines: [
          { participant: 'Host Khoa', text: 'Morning Laura! Off to the airport already?', translation: 'Chào buổi sáng Laura! Bạn chuẩn bị ra sân bay rồi hả?' },
          { participant: 'Guest Laura', text: 'Yes, unfortunately vacation time is over! Here are my room keys for 205.', translation: 'Ừ, tiếc ghê kỳ nghỉ hết vèo cái xong luôn! Thẻ phòng 205 của mình đây nè.' },
          { participant: 'Host Khoa', text: 'Awesome, thanks! Did you have anything from the minibar today?', translation: 'Tuyệt quá, cảm ơn bạn nha! Hôm nay bạn có dùng đồ trong tủ lạnh mini không nè?' },
          { participant: 'Guest Laura', text: 'Nope, untouched. Everything was paid online.', translation: 'Không hề, nguyên vẹn luôn. Tiền phòng mình thanh toán online hết rồi á.' },
          { participant: 'Host Khoa', text: 'Zero balance! You are all set to go. How did you like the sunset from your balcony?', translation: 'Số dư bằng không! Bạn xong xuôi hết rồi nè. Mấy hôm ngắm hoàng hôn từ ban công bạn thấy thích không?' },
          { participant: 'Guest Laura', text: 'It was breathtaking, Khoa! Best view in Hoi An. I will definitely be back next year!', translation: 'Đẹp nghẹt thở luôn Khoa ơi! View xịn nhất Hội An. Chắc chắn năm sau mình sẽ quay lại!' }
        ]
      },
      {
        type: 'pair',
        title: 'Quick 30-Second Check-Out',
        school: 'superCasual',
        participants: [
          { name: 'Staff Bill', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=StaffBill', role: 'Staff' },
          { name: 'Guest Jake', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=GuestJake', role: 'Guest' }
        ],
        lines: [
          { participant: 'Staff Bill', text: 'Checkout? Room number?', translation: 'Trả phòng hả bạn? Số phòng mấy nè?' },
          { participant: 'Guest Jake', text: 'Room 108. Nothing from the fridge.', translation: 'Phòng 108. Không uống gì trong tủ lạnh hết.' },
          { participant: 'Staff Bill', text: 'Card received. Receipt emailed to you. Safe travels, man!', translation: 'Đã nhận thẻ. Hóa đơn gửi qua email cho bạn rồi nha. Đi đường bình an nghen!' },
          { participant: 'Guest Jake', text: 'Thanks brother, see ya!', translation: 'Cảm ơn người anh em, gặp lại sau nha!' }
        ]
      }
    ]
  },

  // Buổi 9: Giao tiếp qua điện thoại (1) – Quy tắc & câu mở đầu
  {
    id: 'hotel-09',
    title: 'Telephone Etiquette: Professional Greetings & Standards',
    vietnameseTitle: 'Buổi 9: Giao tiếp qua Điện thoại (1) – Quy tắc & Mở đầu',
    category: 'Communication',
    subCategory: ['Hotel & Hospitality'],
    icon: '🏨',
    color: '#0284c7',
    description: 'Quy tắc nghe điện thoại chuyên nghiệp (nhấc máy trong 3 hồi chuông), câu chào, giới thiệu bản thân/khách sạn, giữ máy, chuyển máy và xin nhắc lại.',
    words: [
      { id: 'h9-1', word: 'Telephone etiquette', ipa: '/ˈtelɪfəʊn ˈetɪket/', definition: 'Quy tắc ứng xử và tác phong chuẩn mực khi nghe điện thoại', translation: 'Nghi thức trực điện thoại', example: 'Telephone etiquette requires answering within three rings with a smiling voice.', blankSentence: 'Mastering ____ builds guest trust.', emoji: '📞' },
      { id: 'h9-2', word: 'Transfer', ipa: '/trænsˈfɜː/', definition: 'Chuyển cuộc gọi sang phòng ban hoặc số máy khác', translation: 'Chuyển máy', example: 'Allow me to transfer your call to the reservations desk.', blankSentence: 'Please hold while I ____ your call.', emoji: '🔄' },
      { id: 'h9-3', word: 'Hold the line', ipa: '/həʊld ðə laɪn/', definition: 'Giữ máy chờ trong giây lát', translation: 'Giữ máy chờ', example: 'Could you please hold the line for just a moment?', blankSentence: 'Thank you for ____ing while I checked.', emoji: '⏳' },
      { id: 'h9-4', word: 'Pardon', ipa: '/ˈpɑːdn/', definition: 'Xin lỗi vì nghe chưa rõ, nhờ nhắc lại', translation: 'Xin nhắc lại', example: 'Pardon me, could you repeat that surname once more?', blankSentence: 'I beg your ____, the line was staticky.', emoji: '👂' },
      { id: 'h9-5', word: 'Operator', ipa: '/ˈɒpəreɪtə/', definition: 'Nhân viên trực tổng đài điện thoại khách sạn', translation: 'Nhân viên trực tổng đài', example: 'The hotel operator routes incoming calls to guest rooms.', blankSentence: 'Dial zero to reach the central ____.', emoji: '🎧' },
      { id: 'h9-6', word: 'Extension', ipa: '/ɪkˈstenʃn/', definition: 'Số máy nhánh nội bộ', translation: 'Số máy nhánh', example: 'The restaurant extension is 405.', blankSentence: 'Please connect me to ____ 201.', emoji: '🔢' }
    ],
    structures: [
      {
        phrase: 'Thank you for calling [Hotel Name], this is [Name] speaking.',
        meaning: 'Câu mở đầu cuộc gọi chuẩn mực khách sạn chuyên nghiệp.',
        vietnamese: 'Cảm ơn quý khách đã gọi đến [Tên khách sạn], tôi là [Tên] xin nghe ạ.',
        business: { phrase: 'Good morning, thank you for calling the InterContinental Danang. This is Peter speaking from Guest Services. How may I assist you today?', example: 'Thank you for calling Grand Hotel, this is Linda speaking.', translation: 'Kính chào buổi sáng, cảm ơn quý khách đã gọi đến InterContinental Đà Nẵng. Tôi là Peter thuộc bộ phận Chăm sóc khách hàng xin nghe. Tôi có thể hỗ trợ gì cho quý khách ạ?' },
        casualStyle: { phrase: 'Hi, thanks for calling Palm Resort! How can I help you today?', example: 'Hello, Sunshine Hotel, Mai speaking! How can I help?', translation: 'Xin chào, cảm ơn bạn đã gọi đến Palm Resort! Mình có thể giúp gì cho bạn hôm nay nè?' },
        superCasual: { phrase: 'Grand Hotel, front desk speaking.', example: 'Front desk, how can I help?', translation: 'Lễ tân khách sạn Grand xin nghe.' }
      },
      {
        phrase: 'May I ask who is calling, please?',
        meaning: 'Hỏi tên người gọi một cách lịch sự, nhã nhặn.',
        vietnamese: 'Tôi có thể xin phép được biết quý danh của quý khách được không ạ?',
        business: { phrase: 'May I have the pleasure of knowing who is calling, please, so that I may address you properly?', example: 'May I ask who is calling, please?', translation: 'Tôi có thể xin phép được biết quý danh của quý khách để tiện xưng hô được không ạ?' },
        casualStyle: { phrase: 'Could you give me your name, please?', example: 'Who am I speaking with today?', translation: 'Bạn cho mình xin tên với nha?' },
        superCasual: { phrase: 'Who’s calling, please?', example: 'Your name please?', translation: 'Ai đang gọi đó ạ?' }
      },
      {
        phrase: 'Could you please hold the line for just a moment?',
        meaning: 'Xin phép khách giữ máy trong lúc kiểm tra thông tin hoặc chuyển máy.',
        vietnamese: 'Phiền quý khách vui lòng giữ máy chờ trong giây lát được không ạ?',
        business: { phrase: 'Would you mind holding the line for a brief moment while I connect you with our reservations manager?', example: 'Could you hold the line for just a moment, please?', translation: 'Phiền quý khách vui lòng giữ máy trong ít phút trong lúc tôi kết nối máy tới Quản lý đặt phòng được không ạ?' },
        casualStyle: { phrase: 'Hang on just a sec while I transfer your call, okay?', example: 'Hold on a moment, let me check that for you.', translation: 'Bạn đợi mình một giây để mình chuyển máy nha, được không nè?' },
        superCasual: { phrase: 'Hold on a second please.', example: 'One moment, holding please.', translation: 'Chờ xíu nghen.' }
      },
      {
        phrase: 'I apologize, the line is breaking up. Could you please repeat that?',
        meaning: 'Nhờ khách nhắc lại thông tin do đường truyền điện thoại kém.',
        vietnamese: 'Tôi thành thật xin lỗi, đường truyền hơi chập chờn. Quý khách có thể nhắc lại giúp tôi được không ạ?',
        business: { phrase: 'My apologies, Sir, the connection was breaking up slightly. Would you mind repeating that confirmation code?', example: 'I apologize, could you repeat your name one more time?', translation: 'Thành thật xin lỗi ông, đường truyền vừa rồi hơi bị chập chờn. Phiền ông nhắc lại mã xác nhận giúp tôi được không ạ?' },
        casualStyle: { phrase: 'Sorry, the line cut out for a second! Could you say that last part again?', example: 'Sorry, I missed that. Can you repeat it?', translation: 'Xin lỗi bạn, đường dây vừa bị giật một chút! Bạn nói lại đoạn vừa rồi giúp mình nha?' },
        superCasual: { phrase: 'Sorry, didn’t catch that. Say again?', example: 'Bad connection, say that again?', translation: 'Ngại ghê nghe không rõ, bạn nói lại giùm với?' }
      },
      {
        phrase: 'Thank you for holding, I have [Person/Department] on the line.',
        meaning: 'Quay lại sau khi khách giữ máy và kết nối thành công.',
        vietnamese: 'Cảm ơn quý khách đã kiên nhẫn chờ, tôi đã kết nối được với... rồi ạ.',
        business: { phrase: 'Thank you very much for holding, Mr. Davis. I have our executive chef on the line to discuss your dietary requirements now.', example: 'Thank you for holding, I have the manager on the line for you.', translation: 'Cảm ơn ông Davis đã kiên nhẫn chờ máy ạ. Tôi đã kết nối được với Bếp trưởng để trao đổi về thực đơn ăn kiêng của ông rồi đây ạ.' },
        casualStyle: { phrase: 'Thanks for waiting! Here is our restaurant manager on the line for you.', example: 'Thanks for holding, transferring you now!', translation: 'Cảm ơn bạn đã đợi nha! Đây là Quản lý nhà hàng đang nghe máy với bạn nè.' },
        superCasual: { phrase: 'Thanks for waiting, connecting you now.', example: 'Here’s the manager, go ahead.', translation: 'Cảm ơn đã chờ, nối máy liền đây.' }
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Professional External Inquiry Call',
        school: 'business',
        participants: [
          { name: 'Operator Lan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LanOperator', role: 'Operator' },
          { name: 'Caller Mr. Drake', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MrDrake', role: 'Corporate Caller' }
        ],
        lines: [
          { participant: 'Operator Lan', text: 'Good morning, thank you for calling the Grand Landmark Hotel. My name is Lan. How may I direct your call today?', translation: 'Kính chào buổi sáng, cảm ơn quý khách đã gọi đến Grand Landmark Hotel. Tôi là Lan, tôi có thể chuyển cuộc gọi của quý khách đến bộ phận nào ạ?' },
          { participant: 'Caller Mr. Drake', text: 'Good morning. Could you connect me with the sales and banqueting department, please? I wish to inquire about hosting a conference.', translation: 'Chào cô. Làm ơn nối máy giúp tôi tới phòng Kinh doanh & Tiệc được không? Tôi muốn hỏi về việc tổ chức hội thảo.' },
          { participant: 'Operator Lan', text: 'Certainly, Sir. May I ask who is calling and the name of your organization, please?', translation: 'Dạ chắc chắn rồi thưa ông. Tôi xin phép được biết quý danh của ông và tên cơ quan của mình được không ạ?' },
          { participant: 'Caller Mr. Drake', text: 'Yes, this is Richard Drake representing Drake Global Logistics.', translation: 'Vâng, tôi là Richard Drake đại diện cho Drake Global Logistics.' },
          { participant: 'Operator Lan', text: 'Thank you, Mr. Drake. Please hold the line for just a moment while I transfer you directly to Ms. Thao, our director of sales.', translation: 'Cảm ơn ông Drake. Phiền ông vui lòng giữ máy trong ít phút trong lúc tôi chuyển máy trực tiếp tới cô Thảo, Giám đốc kinh doanh của chúng tôi ạ.' },
          { participant: 'Caller Mr. Drake', text: 'Thank you for your prompt assistance, Lan.', translation: 'Cảm ơn sự hỗ trợ nhanh nhẹn của cô, Lan.' }
        ]
      },
      {
        type: 'pair',
        title: 'Friendly Casual Phone Booking Inquiry',
        school: 'casual',
        participants: [
          { name: 'Staff Hien', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=StaffHien', role: 'Desk Host' },
          { name: 'Caller Emma', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CallerEmma', role: 'Caller' }
        ],
        lines: [
          { participant: 'Staff Hien', text: 'Hi, thanks for calling Hoi An Garden Villa! Hien speaking, how can I help you today?', translation: 'Xin chào, cảm ơn bạn đã gọi đến Hoi An Garden Villa! Mình là Hiền xin nghe, mình giúp gì được cho bạn hôm nay nè?' },
          { participant: 'Caller Emma', text: 'Hi Hien! I was wondering if your swimming pool is open to outside guests for day passes?', translation: 'Chào Hiền! Cho mình hỏi hồ bơi bên bạn có mở bán vé ngày cho khách ngoài vào bơi không?' },
          { participant: 'Staff Hien', text: 'Hold on just a moment, let me double check today’s pool capacity with our recreation team!', translation: 'Bạn đợi mình một xíu để mình kiểm tra số lượng khách ở hồ bơi hôm nay với đội giải trí nha!' },
          { participant: 'Caller Emma', text: 'Sure thing, take your time!', translation: 'Được chứ bạn, cứ tự nhiên nghen!' },
          { participant: 'Staff Hien', text: 'Thanks for holding, Emma! Yes, day passes are available today for $10 including a towel and a complimentary fresh coconut drink!', translation: 'Cảm ơn Emma đã đợi nha! Hôm nay hồ bơi vẫn đón khách ngoài giá 10 đô, đã gồm khăn tắm với một trái dừa tươi mát lạnh luôn nè!' }
        ]
      },
      {
        type: 'pair',
        title: 'Quick Internal Room Phone Call',
        school: 'superCasual',
        participants: [
          { name: 'Operator Tim', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=OperatorTim', role: 'Staff' },
          { name: 'Guest Gary', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=GuestGary', role: 'Guest' }
        ],
        lines: [
          { participant: 'Operator Tim', text: 'Front desk, how can I help?', translation: 'Lễ tân xin nghe, giúp gì được bạn nè?' },
          { participant: 'Guest Gary', text: 'Hey, room 402. Can I get a wake-up call tomorrow at 6:30 AM?', translation: 'Chào bạn, phòng 402. Đặt giúp mình báo thức sáng mai lúc 6h30 được không?' },
          { participant: 'Operator Tim', text: '6:30 AM wake-up call for room 402 is set. Anything else?', translation: 'Đã cài báo thức 6h30 sáng cho phòng 402 xong. Cần gì nữa không bạn?' },
          { participant: 'Guest Gary', text: 'That’s all, thanks!', translation: 'Vậy thôi, cảm ơn nha!' }
        ]
      }
    ]
  },

  // Buổi 10: Giao tiếp qua điện thoại (2) – Nhận đặt phòng & yêu cầu
  {
    id: 'hotel-10',
    title: 'Telephone Reservations & Special Requests',
    vietnameseTitle: 'Buổi 10: Giao tiếp qua Điện thoại (2) – Nhận đặt phòng & Yêu cầu',
    category: 'Communication',
    subCategory: ['Hotel & Hospitality'],
    icon: '🛎️',
    color: '#0284c7',
    description: 'Quy trình nhận đặt phòng qua điện thoại, ngày đến/đi, số lượng khách, loại phòng, ghi chú yêu cầu đặc biệt, đánh vần tên và gửi email xác nhận.',
    words: [
      { id: 'h10-1', word: 'Arrival date', ipa: '/əˈraɪvl deɪt/', definition: 'Ngày dự kiến khách đến nhận phòng', translation: 'Ngày đến', example: 'What is your scheduled arrival date?', blankSentence: 'Please confirm your ____ and departure date.', emoji: '📅' },
      { id: 'h10-2', word: 'Party size', ipa: '/ˈpɑːti saɪz/', definition: 'Số lượng thành viên trong đoàn lưu trú', translation: 'Số lượng khách', example: 'How many guests are in your traveling party?', blankSentence: 'Our total ____ is four adults and two kids.', emoji: '👨‍👩‍👧‍👦' },
      { id: 'h10-3', word: 'Spell', ipa: '/spel/', definition: 'Đánh vần từng chữ cái của họ tên hoặc mã số', translation: 'Đánh vần', example: 'Could you please spell your surname using the phonetic alphabet?', blankSentence: 'How do you ____ your first name?', emoji: '🔤' },
      { id: 'h10-4', word: 'Guarantee', ipa: '/ˌɡærənˈtiː/', definition: 'Bảo lãnh đặt cọc phòng bằng thẻ tín dụng', translation: 'Bảo lãnh phòng', example: 'We require a valid credit card to guarantee your late arrival.', blankSentence: 'A card is needed to ____ the booking.', emoji: '🔒' },
      { id: 'h10-5', word: 'Special request', ipa: '/ˈspeʃl rɪˈkwest/', definition: 'Yêu cầu đặc biệt của khách (nôi em bé, tầng cao, đồ ăn kiêng)', translation: 'Yêu cầu đặc biệt', example: 'I have noted your special request for an extra baby cot.', blankSentence: 'Do you have any ____ for your stay?', emoji: '⭐' },
      { id: 'h10-6', word: 'Read back', ipa: '/riːd bæk/', definition: 'Đọc lại toàn bộ thông tin để đối chiếu chính xác', translation: 'Đọc lại xác nhận', example: 'Let me read back your reservation details to confirm.', blankSentence: 'Allow me to ____ your email address.', emoji: '📢' }
    ],
    structures: [
      {
        phrase: 'What dates are you planning to stay with us?',
        meaning: 'Hỏi ngày check-in và check-out của khách qua điện thoại.',
        vietnamese: 'Quý khách dự định lưu trú vào những ngày nào ạ?',
        business: { phrase: 'Could you please advise your intended arrival and departure dates, and how many guests will be traveling?', example: 'What dates are you planning to stay with us, Sir?', translation: 'Quý khách vui lòng cho biết ngày dự kiến đến và đi, cùng số lượng khách trong đoàn được không ạ?' },
        casualStyle: { phrase: 'When are you thinking of visiting, and how many nights will you stay?', example: 'What dates were you looking at?', translation: 'Bạn tính ghé khách sạn vào ngày nào, và định ở lại mấy đêm nè?' },
        superCasual: { phrase: 'What dates are you looking for?', example: 'Check-in and check-out dates?', translation: 'Bạn cần phòng ngày nào tới ngày nào?' }
      },
      {
        phrase: 'Could you please spell your full name for the booking?',
        meaning: 'Nhờ khách đánh vần tên để tránh sai sót giấy tờ.',
        vietnamese: 'Quý khách có thể vui lòng đánh vần họ tên để ghi vào hồ sơ đặt phòng được không ạ?',
        business: { phrase: 'Could you please spell your surname for me so that I record it accurately in our guest system?', example: 'Could you spell your last name for me, please?', translation: 'Quý khách có thể đánh vần họ của mình để tôi ghi nhận chính xác vào hệ thống được không ạ?' },
        casualStyle: { phrase: 'Could you spell out your last name for me real quick?', example: 'How do you spell that surname?', translation: 'Bạn đánh vần giúp mình họ của bạn với nha?' },
        superCasual: { phrase: 'Can you spell that name?', example: 'How do you spell that?', translation: 'Đánh vần tên giùm tui nha.' }
      },
      {
        phrase: 'I have noted down your request for [Special Request].',
        meaning: 'Ghi nhận các yêu cầu cá nhân hóa của khách hàng.',
        vietnamese: 'Tôi đã ghi nhận yêu cầu của quý khách về...',
        business: { phrase: 'I have carefully noted down your request for a high-floor corner suite with twin beds and feather-free pillows.', example: 'I have noted your request for an airport pickup.', translation: 'Tôi đã cẩn thận ghi nhận yêu cầu của quý khách về phòng suite góc tầng cao với hai giường đơn và gối không lông vũ ạ.' },
        casualStyle: { phrase: 'Got your request for a baby crib and late check-out right here on the file!', example: 'I’ve marked down that you want a quiet room.', translation: 'Mình đã ghi rõ vào hồ sơ yêu cầu nôi em bé và trả phòng muộn cho bạn rồi nha!' },
        superCasual: { phrase: 'Noted: baby crib and quiet room.', example: 'Got your request down.', translation: 'Đã lưu: nôi em bé và phòng yên tĩnh.' }
      },
      {
        phrase: 'Allow me to read back your reservation details to confirm.',
        meaning: 'Đọc lại toàn bộ chi tiết đặt phòng để đối chiếu.',
        vietnamese: 'Xin phép để tôi đọc lại toàn bộ thông tin đặt phòng để xác nhận ạ.',
        business: { phrase: 'Allow me to read back your booking summary: Mr. David Miller, Deluxe Ocean Room, checking in October 12th for four nights.', example: 'Let me read back your details to ensure accuracy.', translation: 'Xin phép để tôi đọc lại tóm tắt đặt phòng: Ông David Miller, phòng Deluxe Ocean, nhận phòng ngày 12/10 trong 4 đêm ạ.' },
        casualStyle: { phrase: 'Let me just double-check everything with you: David Miller, 4 nights starting October 12th, right?', example: 'Let’s review real quick: 2 nights, King bed.', translation: 'Để mình kiểm tra lại với bạn nha: David Miller, ở 4 đêm bắt đầu từ 12 tháng 10, đúng chưa nè?' },
        superCasual: { phrase: 'So that’s: David, 4 nights from Oct 12. Correct?', example: 'Quick check: 2 nights, room for two?', translation: 'Vậy là: David, 4 đêm từ 12/10. Chuẩn chưa bạn?' }
      },
      {
        phrase: 'I have sent a booking confirmation to your email address.',
        meaning: 'Xác nhận đã gửi email đặt phòng thành công.',
        vietnamese: 'Tôi đã gửi thư xác nhận đặt phòng tới địa chỉ email của quý khách.',
        business: { phrase: 'I have dispatched a comprehensive booking confirmation along with our payment guarantee policy to your email address.', example: 'Your confirmation email has been sent successfully.', translation: 'Tôi đã gửi thư xác nhận đặt phòng chi tiết kèm chính sách bảo lãnh thanh toán tới địa chỉ email của quý khách rồi ạ.' },
        casualStyle: { phrase: 'I just sent over the confirmation email with all the details and directions to the hotel!', example: 'Check your inbox, confirmation is on its way!', translation: 'Mình vừa gửi email xác nhận có đầy đủ chi tiết với hướng dẫn đường đi tới khách sạn rồi nha!' },
        superCasual: { phrase: 'Confirmation sent to your email. Check your inbox!', example: 'Sent to your email, check it out.', translation: 'Gửi thư xác nhận qua email rồi, bạn check hộp thư nha!' }
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Complete Telephone Room Reservation Protocol',
        school: 'business',
        participants: [
          { name: 'Reservationist Quynh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=QuynhReservations', role: 'Reservations Agent' },
          { name: 'Caller Mr. Thompson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MrThompson', role: 'Guest' }
        ],
        lines: [
          { participant: 'Reservationist Quynh', text: 'Thank you for calling reservations at The Grand Reverie. My name is Quynh. How may I assist your booking today?', translation: 'Cảm ơn quý khách đã gọi đến bộ phận Đặt phòng của The Grand Reverie. Tôi là Quỳnh, tôi có thể hỗ trợ quý khách đặt phòng như thế nào ạ?' },
          { participant: 'Caller Mr. Thompson', text: 'Good morning, Quynh. I would like to book a room for my family from November 15th for four nights.', translation: 'Chào buổi sáng cô Quỳnh. Tôi muốn đặt một phòng cho gia đình từ ngày 15 tháng 11 trong bốn đêm.' },
          { participant: 'Reservationist Quynh', text: 'Certainly, Sir. How many guests will be staying in your party, and do you have a preferred room type?', translation: 'Dạ chắc chắn rồi thưa ông. Trong đoàn mình sẽ có bao nhiêu khách lưu trú, và ông có chuộng loại phòng nào không ạ?' },
          { participant: 'Caller Mr. Thompson', text: 'Two adults and our toddler daughter. We would love a two-bedroom Family Suite with a baby cot.', translation: 'Hai người lớn và một bé gái nhỏ. Chúng tôi muốn đặt một căn Family Suite 2 phòng ngủ có kèm nôi trẻ em.' },
          { participant: 'Reservationist Quynh', text: 'We have our Family Ocean Suite available at $220 per night, including complimentary baby cot and family breakfast. May I have your full name and contact number, please?', translation: 'Khách sạn có sẵn căn Family Ocean Suite giá 220 USD/đêm, đã miễn phí nôi em bé và buffet sáng gia đình. Tôi có thể xin họ tên và số điện thoại của ông được không ạ?' },
          { participant: 'Caller Mr. Thompson', text: 'My name is Robert Thompson, spelled T-H-O-M-P-S-O-N. Phone is +61 412 345 678.', translation: 'Tôi tên là Robert Thompson, đánh vần là T-H-O-M-P-S-O-N. Số điện thoại là +61 412 345 678.' },
          { participant: 'Reservationist Quynh', text: 'Thank you, Mr. Thompson. I have reserved the Family Ocean Suite from November 15th to 19th with a complimentary crib. I have just emailed your official confirmation letter. We look forward to welcoming your family!', translation: 'Cảm ơn ông Thompson. Tôi đã đặt giữ căn Family Ocean Suite từ ngày 15 đến 19 tháng 11 kèm nôi trẻ em miễn phí. Tôi vừa gửi thư xác nhận chính thức qua email của ông rồi ạ. Rất mong chờ được đón tiếp gia đình mình!' }
        ]
      },
      {
        type: 'pair',
        title: 'Casual Friendly Phone Room Booking',
        school: 'casual',
        participants: [
          { name: 'Staff Tuan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=StaffTuan', role: 'Staff' },
          { name: 'Caller Kelly', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CallerKelly', role: 'Caller' }
        ],
        lines: [
          { participant: 'Staff Tuan', text: 'Hi, thanks for calling Hoi An River Resort! Tuan here, how can I help you book your holiday?', translation: 'Chào bạn, cảm ơn bạn đã gọi Hoi An River Resort! Mình là Tuấn, mình có thể giúp bạn đặt phòng kỳ nghỉ thế nào nè?' },
          { participant: 'Caller Kelly', text: 'Hi Tuan! Do you have a river-view room open next Friday for two nights? Just me and my partner.', translation: 'Chào Tuấn! Thứ Sáu tuần sau bên bạn có phòng hướng sông trống trong 2 đêm không? Có mình với bạn trai thôi à.' },
          { participant: 'Staff Tuan', text: 'Yes, we do! Our River Deluxe with private balcony is $80 a night including breakfast. Want me to hold that for you?', translation: 'Dạ có bạn ơi! Phòng River Deluxe có ban công riêng giá 80 đô một đêm kèm ăn sáng luôn. Mình giữ phòng đó cho bạn nha?' },
          { participant: 'Caller Kelly', text: 'Yes please! Name is Kelly Adams, spelled K-E-L-L-Y.', translation: 'Dạ đặt giúp mình nha! Tên mình là Kelly Adams, đánh vần là K-E-L-L-Y.' },
          { participant: 'Staff Tuan', text: 'Done deal, Kelly! Confirmation email is flying to your inbox right now. See you next Friday!', translation: 'Xong ngay Kelly ơi! Thư xác nhận đang bay vèo vào hộp thư của bạn rồi nè. Hẹn gặp bạn thứ Sáu tuần sau nha!' }
        ]
      },
      {
        type: 'pair',
        title: 'Quick Telephone Reservation Call',
        school: 'superCasual',
        participants: [
          { name: 'Agent Bill', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AgentBillPhone', role: 'Staff' },
          { name: 'Caller Dan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CallerDan', role: 'Caller' }
        ],
        lines: [
          { participant: 'Agent Bill', text: 'City Hotel reservations, how can I help?', translation: 'Đặt phòng City Hotel xin nghe, giúp gì được bạn nè?' },
          { participant: 'Caller Dan', text: 'Need a single room for tomorrow night. Name is Dan King.', translation: 'Mình cần một phòng đơn tối mai. Tên là Dan King.' },
          { participant: 'Agent Bill', text: 'Got one standard single, $50. Email address to send the voucher?', translation: 'Còn một phòng đơn tiêu chuẩn, 50 đô. Cho mình xin email gửi phiếu nhận phòng nha?' },
          { participant: 'Caller Dan', text: 'dan.king@gmail.com.', translation: 'dan.king@gmail.com.' },
          { participant: 'Agent Bill', text: 'Sent! See you tomorrow, Dan.', translation: 'Đã gửi! Mai gặp nha Dan.' }
        ]
      }
    ]
  }
];
