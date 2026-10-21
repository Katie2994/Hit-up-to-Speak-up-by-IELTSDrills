import { Topic } from './types';

export const hotelTopicsPart2: Topic[] = [
  // Buổi 11: Giao tiếp của bộ phận Buồng phòng (1) – Gõ cửa & vào phòng
  {
    id: 'hotel-11',
    title: 'Housekeeping (1) – Knocking & Room Entry',
    vietnameseTitle: 'Buổi 11: Buồng phòng (1) – Gõ cửa & Vào phòng',
    category: 'Communication',
    subCategory: ['Hotel & Hospitality'],
    icon: '🧹',
    color: '#0284c7',
    description: 'Mẫu câu gõ cửa, xin phép vào phòng, hỏi xem khách có muốn dọn phòng hay không, và cách xử lý khi gặp biển "Do Not Disturb" (DND).',
    words: [
      { id: 'h11-1', word: 'Housekeeping', ipa: '/ˈhaʊskiːpɪŋ/', definition: 'Bộ phận buồng phòng, công việc dọn dẹp phòng', translation: 'Bộ phận buồng phòng', example: 'Housekeeping knocks three times before entering any room.', blankSentence: 'The ____ department maintains pristine cleanliness across the property.', emoji: '🧹' },
      { id: 'h11-2', word: 'Disturb', ipa: '/dɪˈstɜːb/', definition: 'Làm phiền, quấy rầy', translation: 'Làm phiền', example: 'We apologize for disturbing you during your afternoon rest.', blankSentence: 'Please do not ____ the guest while the sign is hung.', emoji: '🚫' },
      { id: 'h11-3', word: 'Tidy up', ipa: '/ˈtaɪdi ʌp/', definition: 'Dọn dẹp cho ngăn nắp, sạch sẽ', translation: 'Dọn dẹp ngăn nắp', example: 'Would you like us to tidy up your room while you are having breakfast?', blankSentence: 'Our maid will ____ the suite immediately.', emoji: '🛏️' },
      { id: 'h11-4', word: 'Convenient', ipa: '/kənˈviːniənt/', definition: 'Thuận tiện, tiện lợi về mặt thời gian', translation: 'Thuận tiện', example: 'What time would be most convenient for your daily room service?', blankSentence: 'Please let us know a ____ time to refresh your linen.', emoji: '⏰' },
      { id: 'h11-5', word: 'Privacy', ipa: '/ˈprɪvəsi/', definition: 'Sự riêng tư của khách', translation: 'Sự riêng tư', example: 'We respect our guests’ privacy and never enter without permission.', blankSentence: 'We always uphold guest ____ when the sign is visible.', emoji: '🔒' },
      { id: 'h11-6', word: 'Refresh', ipa: '/rɪˈfreʃ/', definition: 'Làm mới, thay mới khăn và dọn dẹp nhẹ', translation: 'Làm mới, dọn nhẹ', example: 'I can quickly refresh the bathroom and replenish fresh bottled water.', blankSentence: 'May I ____ your towels while you step out?', emoji: '✨' }
    ],
    structures: [
      {
        phrase: 'Housekeeping! May I come in?',
        meaning: 'Khẩu lệnh chuẩn mực khi gõ cửa phòng khách (gõ 3 tiếng kèm xưng danh rõ ràng).',
        vietnamese: 'Bộ phận buồng phòng xin phép! Tôi có thể vào phòng được không ạ?',
        business: { phrase: 'Housekeeping! Good morning, may I service your room at this time, Sir?', example: 'Housekeeping! Good morning, may I come in?', translation: 'Bộ phận buồng phòng xin kính chào quý khách! Tôi có thể vào dọn phòng cho quý khách lúc này được không ạ?' },
        casualStyle: { phrase: 'Housekeeping! Is it a good time to tidy up your room?', example: 'Hi! Housekeeping! Would you like a room clean right now?', translation: 'Dọn phòng đây ạ! Lúc này có tiện để em dọn phòng cho mình không anh/chị?' },
        superCasual: { phrase: 'Housekeeping! Need fresh towels or cleaning?', example: 'Housekeeping! Quick clean today?', translation: 'Dọn phòng đây! Mình có cần dọn hay đổi khăn không ạ?' }
      },
      {
        phrase: 'Would you prefer that I return at a later time?',
        meaning: 'Lịch sự đề nghị quay lại sau khi khách đang bận hoặc chưa sẵn sàng.',
        vietnamese: 'Quý khách có muốn tôi quay lại dọn dẹp vào thời gian khác thuận tiện hơn không ạ?',
        business: { phrase: 'I apologize for any disruption. Would you prefer that our team returns at a later time today, Madam?', example: 'Would you prefer that I return at a later time, Mr. Davis?', translation: 'Tôi xin lỗi vì đã làm phiền. Quý khách có muốn chúng tôi quay lại vào một giờ khác thuận tiện hơn không ạ?' },
        casualStyle: { phrase: 'No problem at all! Should I come back in an hour or so?', example: 'I can totally come back later if you need rest!', translation: 'Dạ không sao ạ! Tầm một tiếng nữa em quay lại dọn nhé?' },
        superCasual: { phrase: 'All good! When should I come back?', example: 'No worries, want me to stop by later?', translation: 'Dạ không sao! Khi nào tiện em quay lại nhé?' }
      },
      {
        phrase: 'We noticed the "Do Not Disturb" sign on your door.',
        meaning: 'Cách thông báo nhã nhặn về việc tôn trọng biển báo không làm phiền của khách.',
        vietnamese: 'Chúng tôi thấy biển "Xin đừng làm phiền" treo trước cửa phòng của quý khách.',
        business: { phrase: 'We noticed your "Do Not Disturb" sign and wanted to ensure your peace of mind while checking if you require fresh linen.', example: 'We observed the Do Not Disturb indicator, so we did not enter your suite.', translation: 'Chúng tôi thấy biển Không làm phiền nên tuyệt đối tôn trọng sự yên tĩnh của quý khách và xin phép hỏi quý khách có cần thêm đồ dùng gì không ạ.' },
        casualStyle: { phrase: 'We saw your DND sign outside, so we did not knock earlier.', example: 'Saw the do not disturb sign, just wanted to check if you need fresh towels!', translation: 'Tụi em thấy biển không làm phiền nên không gõ cửa làm phiền anh/chị ạ.' },
        superCasual: { phrase: 'Saw your sign! Just pinging to see if you need towels.', example: 'Left you alone because of the sign! Need anything?', translation: 'Thấy có biển DND nên em không gõ! Mình có cần khăn hay nước gì không ạ?' }
      },
      {
        phrase: 'May I quickly take out the trash and replace the towels?',
        meaning: 'Đề xuất phương án dọn nhanh (express service) khi khách không muốn dọn toàn bộ.',
        vietnamese: 'Tôi có thể xin phép đổ rác nhanh và thay khăn mới cho quý khách được không ạ?',
        business: { phrase: 'If you prefer not to have full housekeeping today, may I simply empty the wastebaskets and replenish fresh towels?', example: 'May I quickly take out the trash and replace the towels for you, Sir?', translation: 'Nếu quý khách không muốn dọn toàn bộ, tôi có thể xin phép đổ rác và thay mới bộ khăn tắm cho quý khách được không ạ?' },
        casualStyle: { phrase: 'Can I just grab the trash and swap out your towels real quick?', example: 'I can do a 2-minute trash run and towel swap if you want!', translation: 'Em xin phép đổ giỏ rác và đổi khăn mới nhanh trong 2 phút được không anh/chị?' },
        superCasual: { phrase: 'Quick trash run and new towels ok?', example: 'Just swapping towels and trash, good for you?', translation: 'Đổi khăn với đổ rác nhanh nha bạn?' }
      },
      {
        phrase: 'Please hang the sign on the outside door handle whenever you are ready.',
        meaning: 'Hướng dẫn khách sử dụng biển treo cửa để yêu cầu dọn phòng hoặc giữ yên tĩnh.',
        vietnamese: 'Quý khách vui lòng treo biển này bên ngoài tay nắm cửa khi quý khách cần dọn phòng hoặc muốn nghỉ ngơi ạ.',
        business: { phrase: 'Whenever you are ready for room makeup, kindly hang the "Please Make Up Room" placard outside your door.', example: 'Please place the placard on your exterior door handle at your leisure.', translation: 'Bất cứ khi nào quý khách muốn dọn phòng, xin vui lòng treo bảng Yêu cầu dọn phòng lên nắm cửa phía ngoài ạ.' },
        casualStyle: { phrase: 'Just hang this card outside your door whenever you want us to clean!', example: 'Pop this card on the handle whenever you want a refresh!', translation: 'Lúc nào anh/chị muốn tụi em dọn thì cứ treo tấm thẻ này ngoài cửa nhé!' },
        superCasual: { phrase: 'Just hang the tag outside when ready!', example: 'Flip the tag outside whenever you head out!', translation: 'Cứ móc thẻ ra ngoài cửa là tụi em biết vào dọn nha!' }
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Morning Room Make-up Knocking',
        school: 'business',
        participants: [
          { name: "Housekeeping Linh", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=HousekeepingLinh", role: "Hotel Staff" },
          { name: "Guest Mr. Harrison", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=GuestMr.Harrison", role: "Guest" }
        ],
        lines: [
          { participant: "Housekeeping Linh", text: 'Housekeeping! Good morning! (Knocks three times gently).', translation: 'Bộ phận buồng phòng xin chào buổi sáng! (Gõ cửa nhẹ nhàng ba tiếng).' },
          { participant: "Guest Mr. Harrison", text: 'Hello! Yes, just a second please.', translation: 'Xin chào! Vâng, đợi tôi một giây nhé.' },
          { participant: "Housekeeping Linh", text: 'Good morning, Mr. Harrison. May I service and make up your suite at this time?', translation: 'Kính chào ông Harrison. Tôi có thể xin phép vào dọn phòng cho ông lúc này được không ạ?' },
          { participant: "Guest Mr. Harrison", text: 'Actually, I am just leaving for breakfast downstairs. That would be wonderful!', translation: 'Thực ra tôi chuẩn bị xuống lầu ăn sáng ngay đây. Được thế thì tuyệt vời quá!' },
          { participant: "Housekeeping Linh", text: 'Splendid! We will ensure everything is spotless and restocked before you return. Have a delightful breakfast, Sir.', translation: 'Dạ tuyệt quá ạ! Chúng tôi sẽ đảm bảo mọi thứ sạch tinh tươm và bổ sung đầy đủ trước khi ông quay lại. Chúc ông có bữa sáng ngon miệng ạ.' }
        ]
      },
      {
        type: 'pair',
        title: 'Guest Resting – Offering Later Time',
        school: 'casual',
        participants: [
          { name: "Housekeeping Tuan", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=HousekeepingTuan", role: "Hotel Staff" },
          { name: "Guest Sarah", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=GuestSarah", role: "Guest" }
        ],
        lines: [
          { participant: "Housekeeping Tuan", text: 'Good morning! Housekeeping service. Would you like your room made up today?', translation: 'Dạ chào buổi sáng ạ! Bộ phận buồng phòng xin hỏi anh/chị có muốn dọn phòng hôm nay không ạ?' },
          { participant: "Guest Sarah", text: 'Oh, hi. I actually have a severe jet lag headache and need a few more hours of sleep.', translation: 'Chào em. Chị vừa bay chuyến dài nên đang đau đầu lệch múi giờ quá, chị cần ngủ thêm vài tiếng nữa.' },
          { participant: "Housekeeping Tuan", text: 'I completely understand, Ms. Sarah. Would 2:00 PM be a more convenient time for us to stop by?', translation: 'Dạ em hoàn toàn hiểu ạ, chị Sarah. Tầm 2 giờ chiều tụi em quay lại dọn thì có tiện hơn cho chị không ạ?' },
          { participant: "Guest Sarah", text: 'Yes, 2:00 PM would be ideal. Could you just hand me two bottles of water now?', translation: 'Được thế thì tốt quá, tầm 2h nhé. Em cho chị xin 2 chai nước khoáng trước được không?' },
          { participant: "Housekeeping Tuan", text: 'Here are two chilled bottles right away. Rest well, and I will see you at 2:00 PM!', translation: 'Dạ đây là 2 chai nước mát cho chị liền ạ. Chúc chị ngủ ngon giấc, 2h chiều em quay lại nhé!' }
        ]
      },
      {
        type: 'pair',
        title: 'Do Not Disturb Sign Follow-up',
        school: 'superCasual',
        participants: [
          { name: "Front Desk Arthur", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=FrontDeskArthur", role: "Hotel Staff" },
          { name: "Guest Mr. Brown", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=GuestMr.Brown", role: "Guest" }
        ],
        lines: [
          { participant: "Front Desk Arthur", text: 'Good afternoon Mr. Brown! Calling from reception to make sure you are having a comfortable day.', translation: 'Dạ chào buổi chiều anh Brown! Lễ tân gọi thăm để đảm bảo anh đang có trải nghiệm thoải mái ạ.' },
          { participant: "Guest Mr. Brown", text: 'Hi! Everything is fine, why do you ask?', translation: 'Chào bạn! Mọi thứ đều ổn mà, sao vậy bạn?' },
          { participant: "Front Desk Arthur", text: 'We noticed your DND sign is still out, so our housekeeping team wanted to make sure you do not miss fresh towels or cleaning before shift change.', translation: 'Dạ tụi em thấy ngoài cửa vẫn đang để biển không làm phiền, nên muốn hỏi xem anh có cần đổi khăn sạch hay dọn dẹp trước khi hết ca trực không thôi ạ.' },
          { participant: "Guest Mr. Brown", text: 'Oh, thank you for noticing! I forgot to take it down. Yes, please send someone in 15 minutes.', translation: 'Ồ, cảm ơn bạn đã để ý nhắc! Mình quên gỡ bảng xuống. Bạn cho người qua dọn giúp mình trong 15 phút nữa nhé.' },
          { participant: "Front Desk Arthur", text: 'Right away! Housekeeping is heading up on floor 8.', translation: 'Dạ có liền ạ! Nhân viên buồng phòng đang lên tầng 8 phục vụ anh đây ạ.' }
        ]
      }
    ]
  },

  // Buổi 12: Giao tiếp của bộ phận Buồng phòng (2) – Xử lý yêu cầu trong phòng
  {
    id: 'hotel-12',
    title: 'Housekeeping (2) – Room Requests & Amenities',
    vietnameseTitle: 'Buổi 12: Buồng phòng (2) – Xử lý yêu cầu trong phòng',
    category: 'Communication',
    subCategory: ['Hotel & Hospitality'],
    icon: '🛏️',
    color: '#0284c7',
    description: 'Từ vựng về đồ dùng trong phòng, amenities, đồ thiếu hoặc hỏng hóc, mẫu câu khi khách yêu cầu thêm khăn, nước, gối, sửa thiết bị, và cách báo chuyển giao kỹ thuật.',
    words: [
      { id: 'h12-1', word: 'Toiletries', ipa: '/ˈtɔɪlətriz/', definition: 'Vật dụng vệ sinh cá nhân (dầu gội, sữa tắm, bàn chải)', translation: 'Đồ dùng vệ sinh cá nhân', example: 'We provide organic aromatherapy toiletries in all bathroom sets.', blankSentence: 'Could you please bring extra ____ like shampoo and dental kits?', emoji: '🧴' },
      { id: 'h12-2', word: 'Replenish', ipa: '/rɪˈplenɪʃ/', definition: 'Bổ sung thêm cho đầy, thay mới vật tư tiêu hao', translation: 'Bổ sung, châm thêm', example: 'We replenish complimentary tea, coffee capsules, and water daily.', blankSentence: 'Our maid will ____ the minibar snacks this afternoon.', emoji: '☕' },
      { id: 'h12-3', word: 'Defective', ipa: '/dɪˈfektɪv/', definition: 'Bị lỗi, bị hỏng hóc kỹ thuật', translation: 'Bị hỏng, có lỗi', example: 'The bedside reading lamp appears to be defective.', blankSentence: 'We will swiftly replace any ____ hair dryer in the room.', emoji: '⚠️' },
      { id: 'h12-4', word: 'Maintenance', ipa: '/ˈmeɪntənəns/', definition: 'Bộ phận kỹ thuật & bảo trì cơ điện', translation: 'Bộ phận bảo trì', example: 'I will contact our engineering and maintenance team right away.', blankSentence: 'The ____ technician will inspect the air conditioner within ten minutes.', emoji: '🔧' },
      { id: 'h12-5', word: 'Duvet', ipa: '/ˈduːveɪ/', definition: 'Chăn bông dày bọc ga', translation: 'Chăn bông, ruột chăn', example: 'Would you prefer a hypoallergenic down duvet or extra wool blanket?', blankSentence: 'I have brought an extra feather ____ for your bed.', emoji: '🛋️' },
      { id: 'h12-6', word: 'Slippers', ipa: '/ˈslɪpəz/', definition: 'Dép bông đi trong phòng ngủ', translation: 'Dép đi trong phòng', example: 'Complimentary indoor slippers are located inside the wardrobe.', blankSentence: 'May I provide two pairs of soft cotton ____?', emoji: '🥿' }
    ],
    structures: [
      {
        phrase: 'I will bring that up to your room right away.',
        meaning: 'Cam kết mang đồ dùng khách yêu cầu lên phòng ngay tức khắc.',
        vietnamese: 'Tôi sẽ mang vật dụng đó lên phòng cho quý khách ngay ạ.',
        business: { phrase: 'Certainly, Mr. Collins. I will have our team deliver additional bath sheets and pillowcases to your room right away.', example: 'I will bring that up to your room right away, Sir.', translation: 'Dạ chắc chắn rồi ông Collins. Tôi sẽ cho nhân viên mang thêm khăn tắm lớn và vỏ gối lên phòng cho ông ngay lập tức ạ.' },
        casualStyle: { phrase: 'Got it! I’ll bring extra towels and water bottles right up for you.', example: 'I will grab those extra slippers and run them up now!', translation: 'Dạ em ghi nhận rồi! Em sẽ mang thêm khăn và nước suối lên phòng liền cho mình nhé.' },
        superCasual: { phrase: 'Bringing that right up to you now!', example: 'Be right up with the extra pillows!', translation: 'Em mang lên phòng cho mình ngay đây ạ!' }
      },
      {
        phrase: 'I apologize for the malfunction; I will dispatch our technician immediately.',
        meaning: 'Xin lỗi khi thiết bị phòng gặp trục trặc và thông báo cử kỹ thuật viên lên xử lý.',
        vietnamese: 'Thành thật xin lỗi quý khách vì sự cố hỏng hóc; tôi sẽ điều phối kỹ thuật viên lên kiểm tra ngay lập tức.',
        business: { phrase: 'Please accept our sincere apologies for the air conditioning issue; I will dispatch our chief maintenance technician to inspect it immediately.', example: 'I apologize for the malfunction; our engineering team is on its way.', translation: 'Thành thật cáo lỗi cùng quý khách vì sự cố máy lạnh; tôi sẽ cử kỹ thuật viên trưởng lên kiểm tra và khắc phục ngay lập tức ạ.' },
        casualStyle: { phrase: 'So sorry about the hot water! I’m sending our maintenance guy up right now.', example: 'Apologies for the TV glitch, our technician will be there in 5 minutes.', translation: 'Thành thật xin lỗi chị vì vụ nước nóng ạ! Em đang báo chú kỹ thuật chạy lên kiểm tra liền cho chị đây.' },
        superCasual: { phrase: 'Sorry about that! Maintenance is heading up now.', example: 'Our tech guy is on his way up to fix the AC!', translation: 'Xin lỗi bạn nha! Kỹ thuật đang chạy lên sửa máy lạnh liền nè.' }
      },
      {
        phrase: 'Is there anything else we can provide to make your stay more comfortable?',
        meaning: 'Hỏi xem khách còn cần thêm tiện ích hay đồ dùng nào khác để chăm sóc tối đa.',
        vietnamese: 'Quý khách có cần chúng tôi bổ sung thêm đồ dùng gì để kỳ nghỉ thêm phần thoải mái không ạ?',
        business: { phrase: 'Here are the extra bathrobes you requested. Is there anything else we can provide to ensure your absolute comfort, Madam?', example: 'Is there anything else we can provide to make your stay more comfortable today?', translation: 'Dạ đây là áo choàng tắm thêm quý khách yêu cầu. Quý khách có cần thêm vật dụng nào khác để tiện nghi thoải mái nhất không ạ?' },
        casualStyle: { phrase: 'Here are your pillows! Anything else you need for the room tonight?', example: 'Got everything you need, or can I grab you some more tea bags?', translation: 'Dạ gối của anh/chị đây ạ! Tối nay mình có cần thêm đồ gì khác trong phòng nữa không nè?' },
        superCasual: { phrase: 'All set, or need anything else?', example: 'Need more coffee pods or anything before I go?', translation: 'Đủ hết chưa hay cần lấy thêm gì nữa không bạn ơi?' }
      },
      {
        phrase: 'The tap water is filtered, but complimentary bottled water is on the desk.',
        meaning: 'Giải thích nguồn nước và vị trí nước suối miễn phí cho khách nước ngoài.',
        vietnamese: 'Nước máy đã được lọc sạch, tuy nhiên khách sạn có chuẩn bị sẵn nước suối đóng chai miễn phí trên bàn làm việc ạ.',
        business: { phrase: 'Please note that the complimentary premium mineral water bottles are refreshed daily on your writing desk and minibar counter.', example: 'Complimentary bottled water is replenished every morning on your counter.', translation: 'Xin lưu ý là nước suối khoáng cao cấp miễn phí được bổ sung hàng ngày trên bàn làm việc và quầy bar mini của quý khách ạ.' },
        casualStyle: { phrase: 'You’ve got two free water bottles on the desk every day, and feel free to ask for more!', example: 'The bottled water on the counter is totally on the house!', translation: 'Mỗi ngày tụi em đều chuẩn bị sẵn 2 chai nước miễn phí trên bàn, anh/chị cứ thoải mái gọi thêm nếu cần nha!' },
        superCasual: { phrase: 'Water on the desk is free! Just buzz us if you want extra.', example: 'Free bottled water is right there, let me know if you need more!', translation: 'Nước suối trên bàn miễn phí đó nha! Thiếu cứ bấm chuông gọi em lấy thêm.' }
      },
      {
        phrase: 'If the problem persists, we will gladly arrange a room transfer for you.',
        meaning: 'Đề xuất giải pháp đổi phòng mới nếu sự cố thiết bị không thể khắc phục nhanh.',
        vietnamese: 'Nếu sự cố vẫn không khắc phục được, chúng tôi rất sẵn lòng sắp xếp đổi phòng mới ngay cho quý khách ạ.',
        business: { phrase: 'If our technician cannot resolve the safe lock within fifteen minutes, we will gladly escort you to an upgraded suite on the 12th floor.', example: 'If the issue persists, we will gladly arrange an immediate room move.', translation: 'Nếu kỹ thuật viên không mở được két sắt trong vòng 15 phút, chúng tôi rất vinh hạnh được chuyển quý khách sang phòng hạng cao hơn ở tầng 12 ngay ạ.' },
        casualStyle: { phrase: 'If the AC still doesn’t chill in 10 minutes, we’ll move you to a quiet room next door right away.', example: 'Don’t worry, if it’s not fixed quickly, I’ll get you keys to another room!', translation: 'Nếu máy lạnh vẫn không mát sau 10 phút thì em sẽ làm thủ tục chuyển phòng êm hơn sát bên cho mình liền nha.' },
        superCasual: { phrase: 'If it’s not working fast, I’ll swap your room in a snap.', example: 'Can’t fix it? I’ll move you to another sweet room right away.', translation: 'Nếu sửa không được nhanh thì em đổi phòng khác xịn xò cho mình liền nha!' }
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Requesting Extra Pillows and Dental Kits',
        school: 'business',
        participants: [
          { name: "Housekeeping Mai", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=HousekeepingMai", role: "Hotel Staff" },
          { name: "Guest Mrs. Watson", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=GuestMrs.Watson", role: "Guest" }
        ],
        lines: [
          { participant: "Housekeeping Mai", text: 'Good evening, Housekeeping department. Mai speaking, how may I assist you tonight?', translation: 'Dạ kính chào buổi tối, bộ phận buồng phòng xin nghe. Tôi là Mai, tôi có thể hỗ trợ gì cho quý khách ạ?' },
          { participant: "Guest Mrs. Watson", text: 'Good evening, Mai. Room 604 here. We need two extra firm pillows and three dental kits if possible.', translation: 'Chào Mai. Tôi ở phòng 604. Vợ chồng tôi cần thêm hai chiếc gối cứng tựa lưng và ba bộ bàn chải đánh răng nếu được nhé.' },
          { participant: "Housekeeping Mai", text: 'Certainly, Mrs. Watson! Two firm orthopedic pillows and three dental kits. Would you like extra shampoo or shower gel as well?', translation: 'Dạ chắc chắn rồi thưa bà Watson! Hai gối cứng chuyên dụng và ba bộ bàn chải. Quý khách có muốn lấy thêm dầu gội hay sữa tắm không ạ?' },
          { participant: "Guest Mrs. Watson", text: 'That would be wonderful, thank you so much.', translation: 'Được thế thì chu đáo quá, cảm ơn cháu nhiều nhé.' },
          { participant: "Housekeeping Mai", text: 'It is truly our pleasure. Our team will deliver everything to room 604 within ten minutes.', translation: 'Dạ được phục vụ quý khách là niềm vui của chúng tôi. Nhân viên sẽ mang lên phòng 604 trong vòng mười phút nữa ạ.' }
        ]
      },
      {
        type: 'pair',
        title: 'Air Conditioner Malfunction Report',
        school: 'casual',
        participants: [
          { name: "Operator Bao", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=OperatorBao", role: "Hotel Staff" },
          { name: "Guest David", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=GuestDavid", role: "Guest" }
        ],
        lines: [
          { participant: "Operator Bao", text: 'Front desk and guest service, Bao speaking. How can I help you today?', translation: 'Quầy dịch vụ khách hàng xin nghe, em là Bảo. Em có thể hỗ trợ gì cho anh/chị ạ?' },
          { participant: "Guest David", text: 'Hi Bao, our AC in room 412 seems to be blowing room-temperature air. It is quite warm in here.', translation: 'Chào Bảo, máy lạnh ở phòng 412 hình như chỉ thổi gió thường thôi. Trong phòng đang khá là nóng bức đấy.' },
          { participant: "Operator Bao", text: 'I am so sorry for the discomfort, Mr. David. Let me dispatch our duty technician with our AC toolkit right away. He will be at your door in five minutes.', translation: 'Em thành thật xin lỗi vì sự bất tiện này, anh David. Em sẽ báo kỹ thuật viên trực ca mang dụng cụ lên phòng anh ngay lập tức. Chú ấy sẽ có mặt trong 5 phút nữa ạ.' },
          { participant: "Guest David", text: 'Great. If it takes too long to fix, could we consider moving to another room?', translation: 'Tốt quá. Nếu sửa lâu thì bên khách sạn có thể đổi phòng khác cho chúng tôi được không?' },
          { participant: "Operator Bao", text: 'Absolutely! If it cannot be resolved in 15 minutes, I already have an upgraded Deluxe room ready on floor 7 for you.', translation: 'Dạ chắc chắn 100% ạ! Nếu không xử lý được trong 15 phút, em đã chuẩn bị sẵn một phòng Deluxe nâng hạng ở tầng 7 cho anh rồi ạ.' }
        ]
      },
      {
        type: 'pair',
        title: 'Need Iron and Ironing Board Quickly',
        school: 'superCasual',
        participants: [
          { name: "Guest Tom", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=GuestTom", role: "Guest" },
          { name: "Housekeeping Hoa", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=HousekeepingHoa", role: "Hotel Staff" }
        ],
        lines: [
          { participant: "Guest Tom", text: 'Hey there! Any chance I can get an iron and ironing board sent up to room 305?', translation: 'Alo bạn ơi! Có thể cho mình mượn cái bàn ủi với cái cầu là quần áo lên phòng 305 gấp được không?' },
          { participant: "Housekeeping Hoa", text: 'Hey Tom! Absolutely, we have steam irons ready. Heading up to 305 with both right now!', translation: 'Chào anh Tom! Dạ được liền, bên em có sẵn bàn ủi hơi nước nè. Em mang cả bộ lên phòng 305 cho anh ngay nhé!' },
          { participant: "Guest Tom", text: 'Awesome, thanks for the lightning speed!', translation: 'Tuyệt quá, cảm ơn em vì tốc độ phản hồi nhanh như chớp nhé!' },
          { participant: "Housekeeping Hoa", text: 'Anytime! Give us a shout if you need laundry done too.', translation: 'Dạ không có chi ạ! Lúc nào cần giặt ủi đồ cứ ới tụi em nhé.' }
        ]
      }
    ]
  },

  // Buổi 13: Giao tiếp trong nhà hàng khách sạn (1) – Chào & sắp xếp bàn
  {
    id: 'hotel-13',
    title: 'Hotel Restaurant (1) – Greeting & Table Seating',
    vietnameseTitle: 'Buổi 13: Nhà hàng (1) – Chào & Sắp xếp bàn',
    category: 'Communication',
    subCategory: ['Hotel & Hospitality'],
    icon: '🍽️',
    color: '#0284c7',
    description: 'Chào khách tại cửa nhà hàng khách sạn, hỏi số lượng khách, kiểm tra tình trạng đặt bàn trước, dẫn khách vào bàn, đưa menu và giới thiệu đồ uống khởi đầu.',
    words: [
      { id: 'h13-1', word: 'Hostess', ipa: '/ˈhəʊstəs/', definition: 'Nữ nhân viên đón khách tại cửa nhà hàng', translation: 'Nhân viên đón tiếp nhà hàng', example: 'Our hostess warmly greets guests at the restaurant entrance.', blankSentence: 'The ____ will guide you to a private corner table.', emoji: '👩‍💼' },
      { id: 'h13-2', word: 'Reservation', ipa: '/ˌrezəˈveɪʃn/', definition: 'Sự đặt chỗ trước cho bữa ăn', translation: 'Đặt bàn trước', example: 'Do you have a table reservation with us this evening?', blankSentence: 'I have verified your table ____ under the name of Mr. Miller.', emoji: '📖' },
      { id: 'h13-3', word: 'Party', ipa: '/ˈpɑːti/', definition: 'Đoàn khách, nhóm người cùng đi ăn', translation: 'Nhóm khách, đoàn', example: 'How many guests are in your dining party tonight?', blankSentence: 'A table for a ____ of four is ready near the garden.', emoji: '👥' },
      { id: 'h13-4', word: 'Terrace', ipa: '/ˈterəs/', definition: 'Sân hiên ngoài trời có view ngắm cảnh', translation: 'Sân hiên ngoài trời', example: 'Would you prefer indoor dining or a table on the outdoor terrace?', blankSentence: 'Enjoy the sunset breeze from our rooftop ____.', emoji: '🌇' },
      { id: 'h13-5', word: 'Buffet', ipa: '/ˈbʊfeɪ/', definition: 'Tiệc tự chọn món ăn không giới hạn', translation: 'Tiệc buffet, tự chọn', example: 'Breakfast buffet is served daily from 6:30 to 10:30 AM.', blankSentence: 'Please feel free to help yourself to the cold cuts ____.', emoji: '🥐' },
      { id: 'h13-6', word: 'Aperitif', ipa: '/əˈperətɪf/', definition: 'Đồ uống khai vị trước bữa ăn', translation: 'Đồ uống khai vị', example: 'May I bring you a glass of champagne as an aperitif?', blankSentence: 'We recommend our signature cocktail as an evening ____.', emoji: '🥂' }
    ],
    structures: [
      {
        phrase: 'Good evening! Do you have a reservation with us tonight?',
        meaning: 'Chào hỏi và kiểm tra thông tin đặt bàn trước tại cửa nhà hàng.',
        vietnamese: 'Kính chào quý khách! Quý khách đã đặt bàn trước tại nhà hàng tối nay chưa ạ?',
        business: { phrase: 'Good evening, welcome to La Rive Restaurant. May I inquire if you have a reservation with us tonight, Sir?', example: 'Good evening! Do you have a table reserved under your room number?', translation: 'Kính chào quý khách đến với nhà hàng La Rive. Tôi xin phép được hỏi quý khách đã đặt bàn trước tối nay chưa ạ?' },
        casualStyle: { phrase: 'Welcome! Do you have a table booked, or are you walking in tonight?', example: 'Hi there! Did you book ahead or table for two?', translation: 'Chào mừng anh/chị! Mình đã đặt bàn trước chưa hay vào ăn luôn tối nay ạ?' },
        superCasual: { phrase: 'Table booked or looking for a spot?', example: 'Hey! Got a reservation or just walking in?', translation: 'Mình có đặt bàn trước chưa hay tìm bàn trống nè?' }
      },
      {
        phrase: 'How many guests are in your party this evening?',
        meaning: 'Hỏi số lượng người đi cùng để xếp kích thước bàn phù hợp.',
        vietnamese: 'Đoàn của quý khách đi bao nhiêu người tối nay ạ?',
        business: { phrase: 'May I confirm how many guests will be joining your party this evening, Madam?', example: 'How many guests will be dining with you tonight, Mr. Lee?', translation: 'Tôi xin phép được xác nhận đoàn mình tối nay có bao nhiêu khách cùng dùng bữa ạ thưa bà?' },
        casualStyle: { phrase: 'How many of you will be dining together today?', example: 'Table for how many folks tonight?', translation: 'Nhà mình đi mấy người dùng bữa tối nay vậy anh/chị?' },
        superCasual: { phrase: 'Just two of you tonight?', example: 'How many seats do you guys need?', translation: 'Mấy người vậy bạn? Đi 2 người đúng không?' }
      },
      {
        phrase: 'Right this way, please. Let me escort you to your table.',
        meaning: 'Dẫn khách từ cửa sảnh vào tận bàn một cách trang trọng, lịch lãm.',
        vietnamese: 'Xin mời đi lối này ạ. Để tôi dẫn quý khách vào bàn nhé.',
        business: { phrase: 'Right this way, please. Allow me to escort you to your reserved window table overlooking the marina.', example: 'Please follow me, Sir, right this way to your seat.', translation: 'Xin mời quý khách đi lối này. Hãy để tôi dẫn quý khách vào bàn bên cửa sổ ngắm toàn cảnh bến du thuyền đã được giữ trước ạ.' },
        casualStyle: { phrase: 'Follow me please! I’ve got a lovely cozy booth for you guys.', example: 'Right this way! Let’s get you seated by the garden.', translation: 'Mời anh/chị đi theo em ạ! Em có một bàn góc đệm êm rất dễ thương cho nhà mình.' },
        superCasual: { phrase: 'Follow me! Got a great table for you.', example: 'Right over here guys!', translation: 'Đi theo mình nè! Bàn này view đẹp lắm nghen.' }
      },
      {
        phrase: 'Would you prefer sparkling water, still water, or an aperitif to begin?',
        meaning: 'Hỏi lựa chọn đồ uống mở đầu kinh điển trong ẩm thực nhà hàng khách sạn.',
        vietnamese: 'Quý khách muốn dùng nước khoáng có ga, nước suối thông thường, hay một ly rượu khai vị để mở đầu bữa ăn ạ?',
        business: { phrase: 'May I present our drinks menu? Would you prefer chilled sparkling mineral water, still water, or a glass of dry champagne to begin?', example: 'Would you care for sparkling or still water to start your dinner, Madam?', translation: 'Tôi xin phép gửi menu đồ uống. Quý khách muốn dùng nước khoáng sủi bọt, nước lọc tĩnh hay một ly sâm-panh khai vị ạ?' },
        casualStyle: { phrase: 'Can I start you off with some iced water, beer, or a house cocktail?', example: 'Would you like sparkling water or regular iced water to drink?', translation: 'Em lấy trước cho mình nước đá, bia lạnh hay một ly cocktail đặc trưng của quán nhé?' },
        superCasual: { phrase: 'Sparkling, still, or grab a drink first?', example: 'Want some cold water or beer to kick things off?', translation: 'Uống nước khoáng có ga, nước suối hay làm ly bia khai vị trước nha?' }
      },
      {
        phrase: 'Here is our menu. Our server will be with you shortly to introduce today’s specials.',
        meaning: 'Trao menu tận tay và báo nhân viên phục vụ bàn sẽ đến tư vấn món ăn đặc biệt.',
        vietnamese: 'Đây là thực đơn của nhà hàng. Nhân viên phục vụ bàn sẽ đến ngay để giới thiệu món đặc sắc hôm nay với quý khách ạ.',
        business: { phrase: 'Here are our à la carte and tasting menus. Your dedicated server will be with you momentarily to share Chef Laurent’s evening specials.', example: 'Please take your time with the menu; our captain will be right over.', translation: 'Kính gửi quý khách thực đơn món lẻ và thực đơn thưởng thức. Trưởng ca phục vụ sẽ đến trong giây lát để giới thiệu các món đặc sản tối nay của bếp trưởng Laurent ạ.' },
        casualStyle: { phrase: 'Here are the menus! Our waiter will pop over in a minute to tell you about the catch of the day.', example: 'Have a look through, and we’ll be right back to take your order!', translation: 'Dạ thực đơn của mình đây ạ! Bạn phục vụ sẽ qua ngay để giới thiệu món hải sản tươi hôm nay nha.' },
        superCasual: { phrase: 'Here’s the menu! Server will be right over.', example: 'Check out the specials board too! Be right back.', translation: 'Menu đây nè! Lát nữa bạn phục vụ qua tư vấn món ngon liền nha.' }
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Dinner Table Greeting and Seating',
        school: 'business',
        participants: [
          { name: "Hostess Thao", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=HostessThao", role: "Hotel Staff" },
          { name: "Guest James", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=GuestJames", role: "Guest" },
          { name: "Guest Claire", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=GuestClaire", role: "Guest" }
        ],
        lines: [
          { participant: "Hostess Thao", text: 'Good evening and welcome to The Horizon. Do you have a reservation with us tonight, Sir?', translation: 'Kính chào quý khách đến với nhà hàng The Horizon. Dạ quý khách đã đặt bàn trước tối nay chưa ạ?' },
          { participant: "Guest James", text: 'Good evening. Yes, a table for two under the name James Henderson. Room 918.', translation: 'Chào cô. Vâng, bàn cho hai người dưới tên James Henderson. Tôi ở phòng 918.' },
          { participant: "Hostess Thao", text: 'Ah, wonderful Mr. Henderson! We have reserved your quiet terrace table overlooking the ocean. Right this way please.', translation: 'Dạ tuyệt quá ông Henderson! Chúng tôi đã chuẩn bị sẵn bàn ngoài ban công yên tĩnh nhìn thẳng ra biển cho hai vị. Xin mời đi theo tôi lối này ạ.' },
          { participant: "Guest Claire", text: 'Oh, this view is breathtaking! Thank you so much.', translation: 'Ôi, góc nhìn ngắm biển này ngoạn mục quá! Cảm ơn bạn nhiều nhé.' },
          { participant: "Hostess Thao", text: 'It is truly our pleasure, Madam. Here are the menus. May I invite you to begin with chilled San Pellegrino or a flute of Rosé champagne?', translation: 'Dạ được phục vụ hai vị là vinh hạnh của chúng tôi. Kính gửi hai vị thực đơn. Hai vị có muốn khai vị bằng nước khoáng San Pellegrino hay một ly sâm-panh Rosé ướp lạnh không ạ?' }
        ]
      },
      {
        type: 'pair',
        title: 'Walk-in Family for Breakfast Buffet',
        school: 'casual',
        participants: [
          { name: "Greeter Huy", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=GreeterHuy", role: "Hotel Staff" },
          { name: "Guest Mark", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=GuestMark", role: "Guest" }
        ],
        lines: [
          { participant: "Greeter Huy", text: 'Good morning! Welcome to the Sunrise Breakfast Lounge. What room number are you in today?', translation: 'Dạ chào buổi sáng! Chào mừng quý khách đến phòng ăn buffet Sunrise. Mình ở phòng số mấy ạ?' },
          { participant: "Guest Mark", text: 'Good morning! We are in room 502, family of four, including two young children.', translation: 'Chào em! Nhà anh ở phòng 502, cả nhà 4 người, có hai bé nhỏ nữa.' },
          { participant: "Greeter Huy", text: 'Excellent, room 502 includes full buffet for all four guests! Would you like a high chair for your toddler?', translation: 'Dạ tuyệt quá, phòng 502 đã bao gồm vé buffet sáng trọn gói cho cả 4 thành viên! Em lấy thêm một chiếc ghế ăn dặm cho bé nhỏ nhé?' },
          { participant: "Guest Mark", text: 'Yes, that would be super helpful. Somewhere near the pancake station would be great.', translation: 'Ừ, thế thì tiện quá. Xếp bàn gần quầy làm bánh pancake được không em?' },
          { participant: "Greeter Huy", text: 'Right over here by booth 12, right next to the pastry and live egg station! Enjoy your feast!', translation: 'Dạ mời cả nhà ngồi bàn số 12 này nha, ngay sát quầy bánh ngọt và quầy chiên trứng nóng hổi luôn ạ! Chúc cả nhà ăn ngon miệng!' }
        ]
      },
      {
        type: 'pair',
        title: 'Solo Guest Looking for a Quiet Spot',
        school: 'superCasual',
        participants: [
          { name: "Host Nam", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=HostNam", role: "Hotel Staff" },
          { name: "Guest Alex", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=GuestAlex", role: "Guest" }
        ],
        lines: [
          { participant: "Host Nam", text: 'Hey there! Dining solo tonight?', translation: 'Dạ chào anh! Tối nay mình đi một mình hả anh?' },
          { participant: "Guest Alex", text: 'Yeah, just me. Do you have a small quiet table with a power socket nearby?', translation: 'Ừ, có mình tôi thôi. Có bàn nhỏ nào yên tĩnh mà gần ổ cắm điện không bạn?' },
          { participant: "Host Nam", text: 'Got the perfect spot right in the library corner! Quiet, fast Wi-Fi, and two plugs right beside the banquette.', translation: 'Có ngay bàn chuẩn bài ở góc thư viện luôn anh! Siêu yên tĩnh, Wi-Fi căng đét, lại có sẵn 2 ổ cắm ngay cạnh ghế sofa luôn.' },
          { participant: "Guest Alex", text: 'Brilliant. Could I get an iced Americano first while I browse the dinner menu?', translation: 'Quá đỉnh. Cho tôi một ly Americano đá trước trong lúc xem thực đơn ăn tối nhé.' },
          { participant: "Host Nam", text: 'Coming right up! Take all the time you need.', translation: 'Có liền sau một phút nha anh! Anh cứ thong thả chọn món nhé.' }
        ]
      }
    ]
  },

  // Buổi 14: Giao tiếp trong nhà hàng khách sạn (2) – Gọi món & phục vụ
  {
    id: 'hotel-14',
    title: 'Hotel Restaurant (2) – Order Taking & Food Service',
    vietnameseTitle: 'Buổi 14: Nhà hàng (2) – Gọi món & Phục vụ',
    category: 'Communication',
    subCategory: ['Hotel & Hospitality'],
    icon: '🍷',
    color: '#0284c7',
    description: 'Từ vựng về món ăn, đồ uống, bữa ăn; mẫu câu gợi ý món, hỏi về dị ứng hoặc sở thích ăn kiêng, và cách hỏi thăm cảm nhận của khách trong bữa ăn (two-minute check).',
    words: [
      { id: 'h14-1', word: 'Allergy', ipa: '/ˈælədʒi/', definition: 'Dị ứng thực phẩm (hải sản, đậu phộng, gluten)', translation: 'Dị ứng thực phẩm', example: 'Do any guests at your table have specific food allergies or dietary restrictions?', blankSentence: 'Please inform the kitchen if you have a peanut or shellfish ____.', emoji: '🥜' },
      { id: 'h14-2', word: 'Specialty', ipa: '/ˈspeʃəlti/', definition: 'Món ăn đặc sản, món tủ của bếp trưởng', translation: 'Món đặc sản', example: 'Our chef’s specialty tonight is pan-seared sea bass with truffle reduction.', blankSentence: 'The braised beef cheek is our signature house ____.', emoji: '🥩' },
      { id: 'h14-3', word: 'Dietary', ipa: '/ˈdaɪətəri/', definition: 'Chế độ ăn uống (chay, kiêng mặn, không đường)', translation: 'Chế độ ăn kiêng', example: 'We offer an extensive vegan menu for guests with dietary preferences.', blankSentence: 'Are there any strict ____ requirements we should notify our chef about?', emoji: '🥗' },
      { id: 'h14-4', word: 'Rare/Medium/Well-done', ipa: '/reə / ˈmiːdiəm / wel dʌn/', definition: 'Các mức độ chín của thịt bò bít tết', translation: 'Tái / Vừa / Chín kỹ', example: 'How would you like your Wagyu tenderloin steak prepared: medium-rare?', blankSentence: 'I would prefer my ribeye cooked ____ please.', emoji: '🍳' },
      { id: 'h14-5', word: 'Pairing', ipa: '/ˈpeərɪŋ/', definition: 'Sự kết hợp rượu vang và món ăn hài hòa', translation: 'Kết hợp rượu & món ăn', example: 'Our sommelier suggests a crisp Sauvignon Blanc pairing for the grilled salmon.', blankSentence: 'This full-bodied red is an exquisite wine ____ for the lamb.', emoji: '🍷' },
      { id: 'h14-6', word: 'Complimentary', ipa: '/ˌkɒmplɪˈmentri/', definition: 'Miễn phí tặng kèm từ nhà hàng / khách sạn', translation: 'Miễn phí, biếu tặng', example: 'Please enjoy this complimentary amuse-bouche from the executive chef.', blankSentence: 'Sourdough bread and herb butter are served on a ____ basis.', emoji: '🥖' }
    ],
    structures: [
      {
        phrase: 'Are you ready to order, or would you like a few more minutes?',
        meaning: 'Hỏi xem khách đã sẵn sàng gọi món chưa một cách tế nhị, không thúc ép.',
        vietnamese: 'Quý khách đã sẵn sàng gọi món chưa ạ, hay cần thêm vài phút để tham khảo thực đơn?',
        business: { phrase: 'Are you ready to place your dinner order, or would you care for a few more moments to review our creations, Sir?', example: 'Are you ready to order, or may I bring you more time?', translation: 'Quý khách đã sẵn sàng gọi món chưa ạ, hay quý khách muốn có thêm một vài phút để chọn lựa ạ thưa ngài?' },
        casualStyle: { phrase: 'Are you guys ready to order, or do you need a couple more minutes with the menu?', example: 'Ready to order, or still deciding?', translation: 'Nhà mình đã sẵn sàng gọi món chưa hay cần thêm vài phút xem menu nữa ạ?' },
        superCasual: { phrase: 'Ready to choose or need a sec?', example: 'All set to order?', translation: 'Chọn món được chưa hay cần thêm một chút xíu nữa bạn?' }
      },
      {
        phrase: 'Do you or anyone in your party have any food allergies or dietary requirements?',
        meaning: 'Câu hỏi an toàn thực phẩm tối quan trọng theo tiêu chuẩn quốc tế 5 sao.',
        vietnamese: 'Quý khách hoặc người đi cùng có ai bị dị ứng thức ăn hay có chế độ ăn kiêng đặc biệt nào không ạ?',
        business: { phrase: 'Before confirming your selection, do you or anyone at the table have any allergies, gluten sensitivities, or religious dietary restrictions?', example: 'Please let us know if any guests have food allergies.', translation: 'Trước khi chốt thực đơn, xin cho phép tôi hỏi quý khách có ai bị dị ứng, mẫn cảm với gluten hay có yêu cầu ăn kiêng đặc biệt nào không ạ?' },
        casualStyle: { phrase: 'Just wanted to check: does anyone at the table have any allergies or diet preferences?', example: 'Any food allergies we should let the kitchen know about?', translation: 'Em xin phép hỏi một chút: bàn mình có ai bị dị ứng hay ăn chay ăn kiêng gì không ạ?' },
        superCasual: { phrase: 'Any allergies or stuff you can’t eat?', example: 'Anyone allergic to nuts, dairy, or seafood?', translation: 'Có ai dị ứng tôm cua, đậu phộng gì không báo mình nhé?' }
      },
      {
        phrase: 'May I recommend our Chef’s daily signature special?',
        meaning: 'Gợi ý món ăn đặc sắc nhất của nhà hàng nhằm upsell và nâng cao trải nghiệm khách.',
        vietnamese: 'Tôi xin phép được gợi ý món đặc sản trong ngày của Bếp trưởng được không ạ?',
        business: { phrase: 'If I may recommend, tonight our Executive Chef has flown in fresh Nha Trang lobsters served with saffron foam.', example: 'May I recommend our signature seafood platter for two, Madam?', translation: 'Nếu quý khách cho phép gợi ý, tối nay Bếp trưởng chúng tôi có tôm hùm Nha Trang tươi ngon chế biến cùng sốt bọt nghệ tây rất đặc sắc ạ.' },
        casualStyle: { phrase: 'I’d really recommend our grilled sea bass tonight—it’s super fresh and caught this morning!', example: 'Our beef tenderloin is definitely the crowd favorite here!', translation: 'Em nhiệt tình gợi ý món cá vược nướng sốt chanh hôm nay nha, cá tươi rói mới đánh bắt sáng nay luôn ạ!' },
        superCasual: { phrase: 'You gotta try the grilled lobster, it’s amazing!', example: 'The ribeye steak is killer tonight!', translation: 'Phải thử món tôm hùm nướng nha, ngon đỉnh chóp luôn á!' }
      },
      {
        phrase: 'How is everything tasting for you this evening?',
        meaning: 'Hỏi thăm cảm nhận sau 2 phút phục vụ món (The Two-Minute / Two-Bite Check).',
        vietnamese: 'Các món ăn tối nay có vừa miệng với quý khách không ạ?',
        business: { phrase: 'Excuse me, Mr. Davis, how are all the flavors tasting for you this evening? Is the steak cooked to your preferred temperature?', example: 'How is everything tasting for you tonight, Madam?', translation: 'Xin phép ông Davis, hương vị các món tối nay có vừa miệng quý khách không ạ? Độ chín của thịt bò có đúng mức ông yêu thích không ạ?' },
        casualStyle: { phrase: 'How is the food tasting so far? Is the steak done just how you like it?', example: 'Everything tasting good over here?', translation: 'Món ăn ăn có vừa miệng không anh/chị ơi? Thịt bò chín vừa ý mình chưa ạ?' },
        superCasual: { phrase: 'How’s the food? Loving the pasta?', example: 'Tasting good, guys?', translation: 'Ăn vừa miệng không mọi người ơi? Món mì ăn ngon không?' }
      },
      {
        phrase: 'Certainly! I will inform the kitchen right away.',
        meaning: 'Tiếp nhận yêu cầu điều chỉnh món (bớt cay, không hành, thêm sốt) nhanh chóng.',
        vietnamese: 'Dạ chắc chắn rồi! Tôi sẽ báo ngay với bếp để chế biến theo ý quý khách.',
        business: { phrase: 'Certainly, Madam. I will personally notify the sous chef to prepare your risotto with olive oil instead of butter.', example: 'Understood, Sir. I will communicate that directly to our head chef.', translation: 'Dạ chắc chắn rồi thưa bà. Tôi sẽ trực tiếp thông báo với bếp phó chuẩn bị phần risotto bằng dầu ô liu thay vì bơ cho bà ạ.' },
        casualStyle: { phrase: 'No worries at all! I’ll tell the chef to make yours non-spicy and put the dressing on the side.', example: 'Got it, no cilantro and extra garlic sauce coming right up!', translation: 'Dạ không sao hết ạ! Em sẽ dặn bếp làm không cay và để sốt riêng cho mình nha.' },
        superCasual: { phrase: 'Got it! Extra sauce, no onions. On it!', example: 'Easy, telling the kitchen right now!', translation: 'Ghi nhận! Nhiều sốt, không hành. Báo bếp làm liền!' }
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Taking a Fine Dining Dinner Order',
        school: 'business',
        participants: [
          { name: "Server Khang", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ServerKhang", role: "Hotel Staff" },
          { name: "Guest Emma", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=GuestEmma", role: "Guest" },
          { name: "Guest Robert", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=GuestRobert", role: "Guest" }
        ],
        lines: [
          { participant: "Server Khang", text: 'Good evening. Are you ready to order, or would you care for a few more moments with our menu?', translation: 'Kính chào hai vị. Hai vị đã sẵn sàng chọn món chưa ạ, hay cần thêm vài phút tham khảo thực đơn ạ?' },
          { participant: "Guest Emma", text: 'We are ready, thank you Khang. For appetizers, we will take the tuna tartare and the mushroom velouté.', translation: 'Chúng tôi sẵn sàng rồi, cảm ơn Khang. Khai vị cho chúng tôi một gỏi cá ngừ tartare và súp nấm nhung nhé.' },
          { participant: "Server Khang", text: 'Exquisite choices. Before we proceed to mains, may I confirm if either of you has any food allergies or gluten sensitivities?', translation: 'Dạ lựa chọn rất tinh tế ạ. Trước khi sang món chính, tôi xin phép hỏi hai vị có ai bị dị ứng hải sản hay mẫn cảm với gluten không ạ?' },
          { participant: "Guest Emma", text: 'My husband has a mild peanut allergy, but seafood and dairy are totally fine.', translation: 'Chồng tôi bị dị ứng nhẹ với đậu phộng, còn hải sản và bơ sữa thì ăn thoải mái.' },
          { participant: "Server Khang", text: 'Noted with the utmost care, no nuts of any kind will touch his plate. And for your main courses?', translation: 'Dạ tôi đã ghi chú cẩn trọng tuyệt đối, tuyệt đối không có hạt hay đậu phộng trong đĩa của ông ấy. Còn món chính hai vị chọn món gì ạ?' },
          { participant: "Guest Robert", text: 'I’d love the Australian ribeye steak, medium-rare please.', translation: 'Cho tôi phần thăn bò Úc nướng, làm chín vừa tái (medium-rare) nhé.' },
          { participant: "Server Khang", text: 'Australian ribeye cooked to a succulent medium-rare. Would you like a glass of Cabernet Sauvignon paired with your steak?', translation: 'Dạ thăn bò Úc nướng chín vừa tái mọng nước. Ông có muốn dùng kèm một ly rượu vang đỏ Cabernet Sauvignon không ạ?' }
        ]
      },
      {
        type: 'pair',
        title: 'Two-Minute Table Check during Meal',
        school: 'casual',
        participants: [
          { name: "Server Trang", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ServerTrang", role: "Hotel Staff" },
          { name: "Guest Liam", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=GuestLiam", role: "Guest" }
        ],
        lines: [
          { participant: "Server Trang", text: 'Excuse me folks, how is everything tasting for you tonight? Is the salmon cooked to your liking?', translation: 'Dạ em xin phép hỏi thăm một chút, món ăn tối nay có vừa miệng với cả nhà không ạ? Món cá hồi áp chảo có vừa khẩu vị của chị không?' },
          { participant: "Guest Liam", text: 'The salmon is perfectly tender and flavorful, Trang! But could we perhaps get a little more pepper and some extra lime wedges?', translation: 'Cá hồi mềm ngon và đậm đà lắm Trang ơi! Nhưng cho tụi anh xin thêm xíu tiêu xay với vài lát chanh tươi được không?' },
          { participant: "Server Trang", text: 'Certainly! I will bring fresh cracked black pepper and a saucer of lime wedges right away. Would you like a top-up on your beer as well?', translation: 'Dạ chắc chắn rồi ạ! Em sẽ mang tiêu đen xay tại bàn và đĩa chanh tươi lên ngay. Anh có muốn châm thêm ly bia lạnh nữa không ạ?' },
          { participant: "Guest Liam", text: 'That would be awesome. Thanks for checking in!', translation: 'Được vậy thì đã quá. Cảm ơn em đã chu đáo ghé hỏi thăm nhé!' }
        ]
      },
      {
        type: 'pair',
        title: 'Casual Room Service Order by Phone',
        school: 'superCasual',
        participants: [
          { name: "Room Service Quang", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=RoomServiceQuang", role: "Hotel Staff" },
          { name: "Guest Mike", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=GuestMike", role: "Guest" }
        ],
        lines: [
          { participant: "Room Service Quang", text: 'In-Room Dining, Quang speaking! What can I cook up for you tonight?', translation: 'Dạ phục vụ ăn uống tại phòng nghe đây, em là Quang! Tối nay anh muốn đặt món ngon gì nè?' },
          { participant: "Guest Mike", text: 'Hey Quang! Can I get the Angus bacon cheeseburger with crispy fries up to room 710?', translation: 'Chào Quang! Cho anh một phần burger phô mai thịt xông khói bò Angus kèm khoai tây chiên giòn lên phòng 710 nhé?' },
          { participant: "Room Service Quang", text: 'Sounds delicious! Any drinks with that? We have ice-cold craft beers or sodas.', translation: 'Nghe hấp dẫn quá anh! Anh có muốn uống gì không? Tụi em có bia thủ công mát lạnh với nước ngọt có ga nè.' },
          { participant: "Guest Mike", text: 'Throw in a cold Coke Zero please! How long will it take?', translation: 'Cho anh thêm một lon Coke Zero ướp lạnh nhé! Mất bao lâu thì có đồ ăn hả em?' },
          { participant: "Room Service Quang", text: 'About 20 minutes hot and fresh to your door! Shall I charge that directly to your room folio?', translation: 'Tầm 20 phút là nóng hổi giòn rụm tận cửa phòng anh liền! Em tính tiền ghi vào hóa đơn phòng luôn nha?' },
          { participant: "Guest Mike", text: 'Yes, charge to room 710. Thanks man!', translation: 'Ừ tính vào phòng 710 luôn giúp anh. Cảm ơn em nhé!' }
        ]
      }
    ]
  },

  // Buổi 15: Giao tiếp trong nhà hàng khách sạn (3) – Thanh toán & kết thúc
  {
    id: 'hotel-15',
    title: 'Hotel Restaurant (3) – Bill Settlement & Farewell',
    vietnameseTitle: 'Buổi 15: Nhà hàng (3) – Thanh toán & Kết thúc',
    category: 'Communication',
    subCategory: ['Hotel & Hospitality'],
    icon: '🧾',
    color: '#0284c7',
    description: 'Hỏi khách dùng thêm món tráng miệng hoặc đồ uống, hỏi phương thức thanh toán (tiền mặt, thẻ, hay tính vào hóa đơn phòng - room charge), mang bill, trả tiền thừa và lời chào tạm biệt.',
    words: [
      { id: 'h15-1', word: 'Room charge', ipa: '/ruːm tʃɑːdʒ/', definition: 'Hình thức ghi nợ chi phí ăn uống trực tiếp vào số phòng khách sạn', translation: 'Tính vào tiền phòng', example: 'Would you prefer to settle the bill in cash, or charge it directly to your room?', blankSentence: 'Guests may conveniently sign the check as a ____.', emoji: '🏨' },
      { id: 'h15-2', word: 'Dessert', ipa: '/dɪˈzɜːt/', definition: 'Món tráng miệng ngọt sau bữa ăn chính', translation: 'Món tráng miệng', example: 'May I present our dessert tray featuring warm molten chocolate cake?', blankSentence: 'Would you care for coffee or ____ to finish your dinner?', emoji: '🍰' },
      { id: 'h15-3', word: 'Gratuity / Service charge', ipa: '/ɡrəˈtjuːəti / ˈsɜːvɪs tʃɑːdʒ/', definition: 'Tiền boa hoặc phí phục vụ (thường 5% trong khách sạn)', translation: 'Phí dịch vụ / Tiền tip', example: 'A 5% service charge and 8% VAT are already included in the total amount.', blankSentence: 'The total bill reflects standard government taxes and hotel ____.', emoji: '💵' },
      { id: 'h15-4', word: 'Receipt', ipa: '/rɪˈsiːt/', definition: 'Hóa đơn, biên lai thanh toán đã in', translation: 'Hóa đơn, biên lai', example: 'Here is your itemized receipt and credit card voucher, Sir.', blankSentence: 'Please retain this signed ____ for your accounting records.', emoji: '🧾' },
      { id: 'h15-5', word: 'Digestif', ipa: '/diː.ʒeˈstiːf/', definition: 'Đồ uống trợ tiêu hóa sau bữa ăn (rượu mạnh nhẹ, thảo mộc)', translation: 'Đồ uống tiêu vị sau bữa ăn', example: 'Would you care for an espresso or an artisanal herbal digestif?', blankSentence: 'A warm herbal tea serves as a soothing ____.', emoji: '☕' },
      { id: 'h15-6', word: 'Farewell', ipa: '/ˌfeəˈwel/', definition: 'Lời chào tạm biệt nồng ấm khi tiễn khách ra về', translation: 'Lời chào tạm biệt', example: 'We bade a fond farewell to the happy wedding party.', blankSentence: 'Our captain bid them a cordial ____ and invited them to return.', emoji: '👋' }
    ],
    structures: [
      {
        phrase: 'May I offer you our dessert menu or a warm coffee or tea?',
        meaning: 'Hỏi xem khách có muốn dùng thêm món tráng miệng hoặc cà phê/trà.',
        vietnamese: 'Tôi xin phép gửi quý khách thực đơn tráng miệng hoặc một tách cà phê/trà nóng được không ạ?',
        business: { phrase: 'Would you care to view our dessert menu, or may I prepare a fresh espresso or chamomile tea for you, Madam?', example: 'May I offer you dessert or an after-dinner coffee tonight, Sir?', translation: 'Quý khách có muốn xem qua thực đơn tráng miệng, hay để tôi chuẩn bị một tách espresso hoặc trà hoa cúc nóng cho quý khách ạ?' },
        casualStyle: { phrase: 'Can I tempt you guys with some dessert, ice cream, or hot tea before you go?', example: 'Room for dessert tonight, or just coffee?', translation: 'Nhà mình có muốn nếm thử chút kem tráng miệng hay làm tách trà nóng trước khi về không ạ?' },
        superCasual: { phrase: 'Any dessert or coffee to wrap up?', example: 'Saved room for cheesecake or gelato?', translation: 'Có ăn thêm bánh ngọt hay uống cà phê chốt hạ không nè?' }
      },
      {
        phrase: 'Would you like to pay with cash, card, or charge this to your room?',
        meaning: 'Hỏi phương thức thanh toán trong nhà hàng khách sạn.',
        vietnamese: 'Quý khách muốn thanh toán bằng tiền mặt, thẻ, hay ghi nợ vào tiền phòng ạ?',
        business: { phrase: 'How would you prefer to settle your bill this evening: cash, credit card, or charging it to your room folio, Mr. Adams?', example: 'Would you care to charge this directly to your room, Sir?', translation: 'Quý khách muốn thanh toán bữa tối bằng tiền mặt, thẻ tín dụng, hay ghi nợ vào tài khoản phòng ạ thưa ông Adams?' },
        casualStyle: { phrase: 'How would you like to pay: card, cash, or put it on your room bill?', example: 'Will you be charging this to room 405 or paying by card?', translation: 'Mình muốn trả bằng thẻ, tiền mặt hay tính vào hóa đơn phòng luôn ạ?' },
        superCasual: { phrase: 'Charging to the room or card?', example: 'Card or room charge tonight?', translation: 'Tính vào tiền phòng hay quẹt thẻ bạn ơi?' }
      },
      {
        phrase: 'Could you please write your room number, print your name, and sign here?',
        meaning: 'Hướng dẫn khách ký xác nhận bill ghi nợ vào tài khoản phòng.',
        vietnamese: 'Quý khách vui lòng ghi số phòng, in rõ họ tên và ký tên xác nhận vào đây giúp tôi ạ.',
        business: { phrase: 'If you wish to charge to your room, kindly write your room number, print your full name, and place your signature on this line, Sir.', example: 'Please write your room number and signature right here.', translation: 'Nếu quý khách muốn tính vào phòng, xin vui lòng điền số phòng, ghi rõ họ tên và ký tên vào dòng này giúp tôi ạ.' },
        casualStyle: { phrase: 'Just jot down your room number, print your name, and sign right here please!', example: 'Room number and signature right on this line, thanks!', translation: 'Anh/chị ghi giúp em số phòng, tên và ký một chữ ký vào chỗ này nha!' },
        superCasual: { phrase: 'Room number and signature right here, please!', example: 'Just sign and room number here, all good!', translation: 'Ghi số phòng với ký tên vô đây giúp mình nha!' }
      },
      {
        phrase: 'Here is your receipt and change. Thank you very much for dining with us!',
        meaning: 'Trao hóa đơn kèm tiền thừa và cảm ơn khách đã dùng bữa.',
        vietnamese: 'Đây là hóa đơn và tiền thừa của quý khách. Cảm ơn quý khách rất nhiều vì đã dùng bữa tại nhà hàng!',
        business: { phrase: 'Here is your itemized receipt and credit card voucher, Mr. Vance. Thank you sincerely for dining with us at The Palm.', example: 'Here is your receipt, Sir. Thank you very much for your patronage.', translation: 'Kính gửi ông Vance hóa đơn chi tiết và biên lai cà thẻ. Thành thật cảm ơn ông đã dùng bữa tại nhà hàng The Palm tối nay ạ.' },
        casualStyle: { phrase: 'Here’s your receipt and card back! Thanks a ton for coming by tonight.', example: 'Here is your change and receipt! Hope you loved the meal!', translation: 'Dạ gửi lại anh thẻ và hóa đơn nha! Cảm ơn anh rất nhiều đã ghé ăn tối cùng tụi em.' },
        superCasual: { phrase: 'Here’s your receipt! Thanks a bunch guys!', example: 'All done, receipt is right here! Have a great night!', translation: 'Hóa đơn của bạn đây nè! Cảm ơn nhiều nha!' }
      },
      {
        phrase: 'We hope you enjoyed your meal and look forward to welcoming you back soon.',
        meaning: 'Lời tiễn khách lịch thiệp, tạo ấn tượng tốt đẹp lâu dài cho khách sạn.',
        vietnamese: 'Chúng tôi hy vọng quý khách đã có một bữa ăn ngon miệng và rất mong sớm được đón tiếp quý khách trở lại.',
        business: { phrase: 'We hope you had a sublime culinary evening, and we look forward to welcoming you back during your stay.', example: 'Have a wonderful rest of your evening, and we hope to see you tomorrow.', translation: 'Chúng tôi hy vọng quý khách đã có một buổi tối ẩm thực tuyệt vời, và rất mong được đón tiếp quý khách trong những ngày lưu trú tiếp theo.' },
        casualStyle: { phrase: 'Hope you guys enjoyed dinner! Have a wonderful relaxing night upstairs.', example: 'Have a great evening and see you at breakfast tomorrow!', translation: 'Hy vọng nhà mình thích bữa tối nay! Chúc mọi người có một buổi tối thật thư giãn trên phòng nha.' },
        superCasual: { phrase: 'Have a great night! See you at breakfast!', example: 'Sleep well and see you guys tomorrow!', translation: 'Buổi tối vui vẻ nghen! Hẹn gặp lại cả nhà vào buffet sáng mai nha!' }
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Settling Dinner with Room Charge',
        school: 'business',
        participants: [
          { name: "Server Duc", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ServerDuc", role: "Hotel Staff" },
          { name: "Guest George", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=GuestGeorge", role: "Guest" }
        ],
        lines: [
          { participant: "Server Duc", text: 'May I present our dessert trolley, or would you prefer the check at this time, Sir?', translation: 'Dạ tôi xin phép giới thiệu xe tráng miệng đặc biệt, hay quý khách muốn nhận hóa đơn lúc này ạ?' },
          { participant: "Guest George", text: 'We are completely full from that exquisite duck breast, Duc! Just the bill please, and we would like to charge it to our room.', translation: 'Chúng tôi no căng bụng vì món ức vịt tuyệt hảo vừa rồi Duc ơi! Cho chúng tôi xin hóa đơn nhé, và tính thẳng vào tiền phòng giúp tôi.' },
          { participant: "Server Duc", text: 'Certainly, Mr. George. Here is your itemized check. The total is $124.50 including service charge and tax. Kindly verify, print your name, and sign on the line.', translation: 'Dạ chắc chắn rồi ông George. Đây là hóa đơn chi tiết của hai vị. Tổng cộng là 124.50 đô bao gồm phí dịch vụ và thuế. Xin ông vui lòng kiểm tra, ghi tên và ký vào dòng này ạ.' },
          { participant: "Guest George", text: 'Room 804, George Peterson. (Signs the bill). There you go.', translation: 'Phòng 804, George Peterson. (Ký tên). Xong rồi đây anh.' },
          { participant: "Server Duc", text: 'Thank you immensely, Mr. Peterson. Here is your copy. We wish both of you a tranquil night, and we look forward to greeting you tomorrow.', translation: 'Thành thật cảm ơn ông Peterson rất nhiều. Đây là liên lưu của ông. Kính chúc hai vị một đêm an giấc, và hẹn gặp lại hai vị vào ngày mai ạ.' }
        ]
      },
      {
        type: 'pair',
        title: 'Paying Cash and Asking for Change',
        school: 'casual',
        participants: [
          { name: "Guest Jessica", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=GuestJessica", role: "Guest" },
          { name: "Server Linh", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ServerLinh", role: "Hotel Staff" }
        ],
        lines: [
          { participant: "Guest Jessica", text: 'Excuse me, could we get the bill please?', translation: 'Bạn ơi, tính tiền giúp bàn mình với nhé?' },
          { participant: "Server Linh", text: 'Right away! Here is your bill inside the folder. The total is 380,000 VND.', translation: 'Dạ có liền ạ! Em gửi hóa đơn trong kẹp da nha. Tổng cộng của mình là 380.000 đồng ạ.' },
          { participant: "Guest Jessica", text: 'Here is 500,000 VND in cash.', translation: 'Mình gửi 500.000 đồng tiền mặt nhé.' },
          { participant: "Server Linh", text: 'Thank you! Out of 500,000 VND. I will bring your exact change of 120,000 VND right back.', translation: 'Dạ em cảm ơn! Em nhận 500.000 đồng ạ. Em sẽ mang lại tiền thừa chính xác 120.000 đồng cho mình liền nha.' },
          { participant: "Guest Jessica", text: 'Keep the 20,000 VND note for yourself, you were very attentive!', translation: 'Em giữ lại tờ 20.000 đồng làm tiền tip nha, em phục vụ rất dễ thương và chu đáo!' },
          { participant: "Server Linh", text: 'That is so generous of you, thank you so much! Have a wonderful day exploring the town!', translation: 'Dạ em cảm ơn chị nhiều lắm ạ! Chúc chị một ngày dạo phố thật vui vẻ nhé!' }
        ]
      },
      {
        type: 'pair',
        title: 'Quick Card Tap and Farewell',
        school: 'superCasual',
        participants: [
          { name: "Guest Sam", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=GuestSam", role: "Guest" },
          { name: "Server Kien", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ServerKien", role: "Hotel Staff" }
        ],
        lines: [
          { participant: "Guest Sam", text: 'Hey buddy, got the bill? Tour bus is arriving in 5 minutes!', translation: 'Bạn ơi, bill bàn mình bao nhiêu á? Xe tour tới rước trong 5 phút nữa rồi!' },
          { participant: "Server Kien", text: 'Got you covered! $28 for the coffee and croissant. Got the wireless card machine right here—tap your phone anytime.', translation: 'Dạ em lo được liền! 28 đô cho cà phê với bánh sừng bò ạ. Có máy quẹt thẻ không dây ngay đây—anh chạm điện thoại vô là xong.' },
          { participant: "Guest Sam", text: '(Taps Apple Pay) Beep! Done. Thanks man!', translation: '(Chạm Apple Pay) Tít! Xong rồi. Cảm ơn nhé!' },
          { participant: "Server Kien", text: 'Receipt’s printed! Have a blast on your tour today, Sam!', translation: 'Hóa đơn đã in xong! Chúc Sam đi tour siêu vui vẻ hôm nay nghen!' }
        ]
      }
    ]
  },

  // Buổi 16: Xử lý phàn nàn (1) – Ngôn ngữ xin lỗi & đồng cảm
  {
    id: 'hotel-16',
    title: 'Complaint Handling (1) – Apology & Empathy Framework',
    vietnameseTitle: 'Buổi 16: Xử lý phàn nàn (1) – Xin lỗi & Đồng cảm',
    category: 'Communication',
    subCategory: ['Hotel & Hospitality'],
    icon: '🤝',
    color: '#0284c7',
    description: 'Bộ khung ngôn ngữ chuẩn quốc tế (HEAT/LAST framework) khi khách bức xúc: xin lỗi chân thành, thể hiện sự đồng cảm sâu sắc, lặp lại vấn đề để xác nhận hiểu đúng, trấn an và cam kết giải quyết.',
    words: [
      { id: 'h16-1', word: 'Inconvenience', ipa: '/ˌɪnkənˈviːniəns/', definition: 'Sự phiền toái, bất tiện gây ra cho khách', translation: 'Sự bất tiện, phiền toái', example: 'We sincerely apologize for any inconvenience this construction noise has caused.', blankSentence: 'Please accept our apologies for this unacceptable ____.', emoji: '😔' },
      { id: 'h16-2', word: 'Empathy', ipa: '/ˈempəθi/', definition: 'Sự thấu cảm, đặt mình vào vị trí cảm xúc của khách', translation: 'Sự thấu cảm', example: 'Listening with empathy is our core service principle.', blankSentence: 'A professional hotelier always listens with genuine ____.', emoji: '❤️' },
      { id: 'h16-3', word: 'Rectify', ipa: '/ˈrektɪfaɪ/', definition: 'Khắc phục, sửa đổi sai sót ngay lập tức', translation: 'Khắc phục, xử lý', example: 'We will take immediate action to rectify this situation for you.', blankSentence: 'Allow me to ____ this mistake without delay.', emoji: '🛠️' },
      { id: 'h16-4', word: 'Assure', ipa: '/əˈʃʊə/', definition: 'Cam đoan, trấn an tinh thần khách hàng', translation: 'Cam đoan, trấn an', example: 'I assure you that I am personally handling this matter.', blankSentence: 'Rest ____ that your comfort is our top priority.', emoji: '🛡️' },
      { id: 'h16-5', word: 'Compensate', ipa: '/ˈkɒmpənseɪt/', definition: 'Bồi thường, đền bù thiện chí (giảm giá, tặng voucher)', translation: 'Đền bù, bồi thường', example: 'To compensate for the wait, dinner tonight is on the house.', blankSentence: 'We would like to ____ you with a complimentary spa pass.', emoji: '🎁' },
      { id: 'h16-6', word: 'Distress', ipa: '/dɪˈstres/', definition: 'Sự bực bội, khó chịu, ức chế của khách', translation: 'Sự phiền lòng, bức xúc', example: 'We deeply regret any distress this billing mistake caused you.', blankSentence: 'We understand your frustration and ____ regarding this delay.', emoji: '😣' }
    ],
    structures: [
      {
        phrase: 'I sincerely apologize for the inconvenience this has caused you.',
        meaning: 'Lời xin lỗi trang trọng mở đầu mọi tình huống xử lý phàn nàn.',
        vietnamese: 'Tôi thành thật xin lỗi vì sự bất tiện mà sự việc này đã gây ra cho quý khách.',
        business: { phrase: 'On behalf of the hotel management, I sincerely apologize for the frustration and inconvenience this situation has caused you, Sir.', example: 'I sincerely apologize for the inconvenience, Mr. Cooper.', translation: 'Thay mặt ban giám đốc khách sạn, tôi xin gửi lời xin lỗi chân thành nhất vì sự thất vọng và bất tiện mà sự việc này đã gây ra cho quý khách ạ.' },
        casualStyle: { phrase: 'I am so sorry for this trouble! I completely understand how frustrating that is.', example: 'So sorry about this! Let me get this sorted out for you right away.', translation: 'Em vô cùng xin lỗi vì sự cố này ạ! Em hoàn toàn hiểu cảm giác khó chịu của anh/chị lúc này.' },
        superCasual: { phrase: 'Really sorry about that! I totally get why you’re upset.', example: 'My bad, let me fix this right now!', translation: 'Thành thật xin lỗi bạn nha! Mình hiểu sao bạn bực mình rồi, để mình giải quyết liền nè.' }
      },
      {
        phrase: 'I completely understand how frustrating that must be for you.',
        meaning: 'Thể hiện sự đồng cảm cao độ (Empathy statement) để hạ nhiệt cảm xúc của khách.',
        vietnamese: 'Tôi hoàn toàn thấu hiểu quý khách cảm thấy thất vọng và khó chịu đến mức nào.',
        business: { phrase: 'I completely understand your frustration, Madam. After such an exhausting 14-hour flight, waiting for your room is indeed unacceptable.', example: 'I understand how disappointing this must be on your anniversary trip.', translation: 'Tôi hoàn toàn thấu hiểu sự bức xúc của bà. Sau chuyến bay dài 14 tiếng mệt mỏi, việc phải chờ nhận phòng quả thật là không thể chấp nhận được ạ.' },
        casualStyle: { phrase: 'I’d feel the exact same way if I were in your shoes! It’s totally our fault.', example: 'I totally get it. You just wanted to relax and this happened.', translation: 'Nếu ở vị trí của anh thì em cũng sẽ bực bội hệt như vậy thôi ạ! Lỗi hoàn toàn thuộc về phía tụi em.' },
        superCasual: { phrase: 'I’d be mad too if that happened to me, totally get it.', example: 'Totally hear you, that sucks after a long day.', translation: 'Gặp mình là mình cũng quạu nữa á, hiểu cảm giác của bạn mà!' }
      },
      {
        phrase: 'If I understand correctly, the issue is that [Problem]. Is that accurate?',
        meaning: 'Kỹ thuật lắng nghe chủ động (Active Listening): lặp lại sự việc để khẳng định đã hiểu đúng.',
        vietnamese: 'Nếu tôi hiểu chính xác, vấn đề là [Nội dung sự việc]. Tôi tóm tắt như vậy đã đúng chưa ạ?',
        business: { phrase: 'Allow me to ensure I have captured every detail: the air conditioner in room 504 made loud rattling sounds all night and did not cool down. Is that entirely correct, Sir?', example: 'So if I understand correctly, your breakfast order did not arrive on time?', translation: 'Xin cho phép tôi tóm tắt để chắc chắn không sót chi tiết nào: máy điều hòa ở phòng 504 kêu to cả đêm và không làm mát. Tôi hiểu như vậy đã hoàn toàn chính xác chưa ạ?' },
        casualStyle: { phrase: 'Just so we’re on the same page: your shower water stayed cold this morning, right?', example: 'So the room wasn’t cleaned when you came back at 3 PM, correct?', translation: 'Để chắc chắn em nắm đúng ý mình: sáng nay vòi sen tắm nước không nóng đúng không ạ?' },
        superCasual: { phrase: 'So the key card stopped working twice, right?', example: 'Got it, noise from next door all night, yeah?', translation: 'Vậy là thẻ từ bị hư 2 lần liên tiếp đúng hông bạn?' }
      },
      {
        phrase: 'I will personally look into this and keep you updated every step of the way.',
        meaning: 'Nhận trách nhiệm cá nhân (Personal Accountability), không đổ lỗi cho đồng nghiệp khác.',
        vietnamese: 'Tôi sẽ trực tiếp đích thân xử lý việc này và cập nhật tiến độ liên tục cho quý khách.',
        business: { phrase: 'I will take personal responsibility for rectifying this matter and will contact you directly within thirty minutes with a full resolution.', example: 'I will personally oversee this and follow up with you at 4:00 PM.', translation: 'Tôi xin chịu trách nhiệm cá nhân trong việc giải quyết thỏa đáng sự việc này và sẽ liên hệ trực tiếp lại với quý khách trong vòng 30 phút nữa ạ.' },
        casualStyle: { phrase: 'I’m taking charge of this myself, and I’ll buzz you the moment it’s fixed!', example: 'Leave it with me, I will make sure this gets sorted out today.', translation: 'Em sẽ tự tay giải quyết vụ này cho anh/chị, xong xuôi là em báo mình liền ạ!' },
        superCasual: { phrase: 'I’m on it personally! Will ring you in 15 mins.', example: 'Trust me on this, I’ll get it done now.', translation: 'Cứ để mình lo trực tiếp! 15 phút nữa mình gọi báo kết quả nha.' }
      },
      {
        phrase: 'Please allow us to make this right by offering you [Compensatory gesture].',
        meaning: 'Đưa ra thiện chí bù đắp tổn thất tinh thần để khôi phục niềm tin của khách.',
        vietnamese: 'Xin cho phép chúng tôi chuộc lại lỗi lầm bằng cách gửi tặng quý khách [Hình thức bù đắp].',
        business: { phrase: 'Please allow us to make amends for your inconvenience: we have upgraded you to an Executive Suite and invite you to enjoy complimentary dinner at our rooftop grill tonight.', example: 'Please allow us to make this right by waiving your room charge for tonight.', translation: 'Xin cho phép chúng tôi tạ lỗi vì sự bất tiện này: chúng tôi đã nâng hạng phòng sang Executive Suite và trân trọng mời quý khách dùng bữa tối miễn phí tại nhà hàng nướng tầng thượng ạ.' },
        casualStyle: { phrase: 'To make up for this headache, lunch today is completely on us, plus a free late checkout at 3 PM!', example: 'We’d love to buy you dinner tonight to make it up to you.', translation: 'Để chuộc lỗi vì trải nghiệm không vui này, bữa trưa nay khách sạn xin phép mời mình toàn bộ, cộng thêm miễn phí trả phòng trễ đến 3h chiều luôn nha!' },
        superCasual: { phrase: 'Dinner tonight is on us to make it right!', example: 'Free spa session on the house for the hassle!', translation: 'Bữa tối nay bên mình đãi toàn bộ để tạ lỗi với bạn nghen!' }
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Heated Guest Complaint at Front Desk',
        school: 'business',
        participants: [
          { name: "Guest Mr. Sterling", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=GuestMr.Sterling", role: "Guest" },
          { name: "Assistant Manager Dung", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=AssistantManagerDung", role: "Hotel Staff" }
        ],
        lines: [
          { participant: "Guest Mr. Sterling", text: 'This is outrageous! Check-in was at 2:00 PM, it is now past 3:00 PM, and your staff just told me my suite is still dirty! I have an important business Zoom meeting in 20 minutes!', translation: 'Thật là vô lý hết sức! Giờ nhận phòng là 2h chiều, bây giờ đã hơn 3h chiều rồi mà nhân viên bảo phòng tôi vẫn chưa dọn xong! Tôi có một cuộc họp Zoom quan trọng trong 20 phút nữa đấy!' },
          { participant: "Assistant Manager Dung", text: 'Mr. Sterling, I hear your frustration loud and clear, and I sincerely apologize for this unacceptable delay. After traveling to our hotel, having your suite delayed when you have an urgent meeting is entirely our fault.', translation: 'Thưa ông Sterling, tôi hoàn toàn lắng nghe sự bức xúc của ông, và tôi chân thành xin lỗi vì sự chậm trễ không thể chấp nhận được này. Sau chặng đường dài đến đây mà phòng lại chưa sẵn sàng giữa lúc ông có cuộc họp gấp, lỗi này hoàn toàn thuộc về chúng tôi ạ.' },
          { participant: "Guest Mr. Sterling", text: 'Apologies don’t solve my meeting! Where am I supposed to take this call with a quiet background and fast internet?', translation: 'Lời xin lỗi đâu có giải quyết được cuộc họp của tôi! Bây giờ tôi phải ngồi họp ở đâu với bối cảnh yên tĩnh và mạng nhanh đây?' },
          { participant: "Assistant Manager Dung", text: 'I have already unlocked our Executive Boardroom on the 3rd floor exclusively for your private use right now, equipped with high-speed fiber internet and complimentary espresso.', translation: 'Dạ tôi đã cho mở ngay phòng họp VIP Executive ở tầng 3 dành riêng cho một mình ông sử dụng lúc này rồi ạ, đầy đủ đường truyền cáp quang tốc độ cao và cà phê espresso miễn phí phục vụ ông.' },
          { participant: "Guest Mr. Sterling", text: 'Alright... that actually helps tremendously. And what about my suite?', translation: 'Được rồi... giải pháp đó giúp ích cho tôi rất nhiều đấy. Thế còn căn phòng của tôi thì sao?' },
          { participant: "Assistant Manager Dung", text: 'While you conduct your meeting, our executive housekeeping supervisor is personally inspecting your suite. Furthermore, we have upgraded you to our Presidential Suite and waived your first night’s charge.', translation: 'Trong lúc ông họp, giám sát trưởng buồng phòng đang đích thân kiểm tra phòng cho ông. Thêm vào đó, chúng tôi xin được nâng hạng ông lên phòng Tổng Thống và miễn phí hoàn toàn tiền phòng đêm đầu tiên ạ.' }
        ]
      },
      {
        type: 'pair',
        title: 'Cold Food Complaint at Dinner',
        school: 'casual',
        participants: [
          { name: "Guest Laura", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=GuestLaura", role: "Guest" },
          { name: "Server Minh", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ServerMinh", role: "Hotel Staff" }
        ],
        lines: [
          { participant: "Guest Laura", text: 'Excuse me, server. We waited 40 minutes for these steaks, and when they finally arrived, the meat and gravy are stone cold.', translation: 'Em ơi lại chị bảo tí. Bàn chị đợi 40 phút mới có hai đĩa bít tết, mà dọn ra thì cả thịt lẫn nước sốt đều nguội ngắt rồi này.' },
          { participant: "Server Minh", text: 'Oh Ms. Laura, I am so truly sorry! That is completely unacceptable, and I don’t blame you one bit for being upset.', translation: 'Ôi chị Laura, em vô cùng xin lỗi chị ạ! Chuyện này thật sự không thể chấp nhận được, chị bực mình là hoàn toàn đúng ạ.' },
          { participant: "Guest Laura", text: 'We are starving, and this totally ruined our mood.', translation: 'Tụi chị đang đói lả cả người, gặp chuyện này mất hết cả hứng ăn uống.' },
          { participant: "Server Minh", text: 'I completely understand. Let me immediately take both plates back. Our head chef will fire up two fresh prime steaks on high priority right this second—it will take under 8 minutes.', translation: 'Em hoàn toàn hiểu ạ. Để em bưng hai đĩa này vào bếp ngay. Bếp trưởng sẽ trực tiếp làm lại 2 phần bò hảo hạng mới ở chế độ ưu tiên cao nhất ngay giây này—chỉ mất chưa đầy 8 phút thôi ạ.' },
          { participant: "Guest Laura", text: 'Okay, please make sure it’s piping hot this time.', translation: 'Ừ, nhớ dặn bếp làm nóng hổi bốc khói giúp chị nhé.' },
          { participant: "Server Minh", text: 'Piping hot for sure! And please allow us to treat both of you to a glass of wine on the house while you wait.', translation: 'Chắc chắn nóng hổi bốc khói luôn ạ! Và trong lúc chờ, khách sạn xin phép mời hai anh chị mỗi người một ly rượu vang miễn phí để chuộc lỗi nha.' }
        ]
      },
      {
        type: 'pair',
        title: 'Key Card Deactivated Multiple Times',
        school: 'superCasual',
        participants: [
          { name: "Guest Ken", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=GuestKen", role: "Guest" },
          { name: "Receptionist Binh", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ReceptionistBinh", role: "Hotel Staff" }
        ],
        lines: [
          { participant: "Guest Ken", text: 'Dude, third time this key card died on me! I had to hike all the way down from floor 11 again!', translation: 'Bạn ơi, lần thứ ba cái thẻ phòng này bị hư rồi đó! Mình phải lội bộ từ tầng 11 xuống đây nữa nè!' },
          { participant: "Receptionist Binh", text: 'Man, Ken, that sucks so bad! I’d be fuming too if I had to walk up and down three times. Really sorry about that!', translation: 'Trời ơi anh Ken, phiền phức quá chừng! Gặp em phải đi lên đi xuống 3 lần em cũng bực muốn xỉu luôn. Em thành thật xin lỗi anh nhiều nha!' },
          { participant: "Guest Ken", text: 'Can someone just come up with me and test the door lock?', translation: 'Có ai đi lên cùng mình mở cửa test thử cái ổ khóa luôn được không?' },
          { participant: "Receptionist Binh", text: 'I’m going up with you right now with two brand new magnetic keys and our master badge. Let’s ride up together!', translation: 'Em đích thân đi thang máy lên với anh ngay đây, cầm theo 2 thẻ mới toanh với thẻ master luôn. Mình cùng lên lầu kiểm tra liền nha!' },
          { participant: "Guest Ken", text: 'Appreciate you stepping out to help directly.', translation: 'Cảm ơn bạn đã chịu khó bước ra ngoài hỗ trợ trực tiếp nhé.' }
        ]
      }
    ]
  },

  // Buổi 17: Xử lý phàn nàn (2) – Tình huống phổ biến
  {
    id: 'hotel-17',
    title: 'Complaint Handling (2) – Common Hotel Scenarios & Solutions',
    vietnameseTitle: 'Buổi 17: Xử lý phàn nàn (2) – Tình huống phổ biến',
    category: 'Communication',
    subCategory: ['Hotel & Hospitality'],
    icon: '🛠️',
    color: '#0284c7',
    description: 'Từ vựng và mẫu câu xử lý các sự cố thường gặp nhất: phòng ồn, phòng bẩn, điều hòa/vòi sen hỏng, phục vụ chậm trễ; cùng các giải pháp đề xuất: đổi phòng ngay, giảm trừ chi phí, tặng dịch vụ.',
    words: [
      { id: 'h17-1', word: 'Unacceptable', ipa: '/ˌʌnəkˈseptəbl/', definition: 'Không thể chấp nhận được đối với tiêu chuẩn khách sạn', translation: 'Không thể chấp nhận được', example: 'Finding hair on the bedsheet is completely unacceptable.', blankSentence: 'Cleanliness lapses like this are utterly ____ in our property.', emoji: '❌' },
      { id: 'h17-2', word: 'Relocate', ipa: '/ˌriːləʊˈkeɪt/', definition: 'Di dời, chuyển khách sang phòng khác yên tĩnh hơn', translation: 'Chuyển phòng, di dời', example: 'We would be delighted to relocate you to a quieter room on the penthouse floor.', blankSentence: 'Allow our bellman to ____ your luggage to a newly prepared suite.', emoji: '🧳' },
      { id: 'h17-3', word: 'Noisy', ipa: '/ˈnɔɪzi/', definition: 'Ồn ào, huyên náo gây mất ngủ', translation: 'Ồn ào', example: 'The neighboring room had the television volume turned up too high.', blankSentence: 'We apologize that the street traffic made your night so ____.', emoji: '🔊' },
      { id: 'h17-4', word: 'Discount', ipa: '/ˈdɪskaʊnt/', definition: 'Mức giảm giá, chiết khấu trừ vào hóa đơn', translation: 'Giảm giá, chiết khấu', example: 'We would like to offer a 30% discount on your entire stay.', blankSentence: 'Our manager authorized a 25% ____ on your final bill.', emoji: '🏷️' },
      { id: 'h17-5', word: 'Voucher', ipa: '/ˈvaʊtʃə/', definition: 'Phiếu quà tặng, phiếu giảm giá sử dụng dịch vụ', translation: 'Phiếu dịch vụ, voucher', example: 'Please accept this $50 dining voucher valid at any of our resort outlets.', blankSentence: 'We have enclosed a complimentary massage ____ for two.', emoji: '🎟️' },
      { id: 'h17-6', word: 'Resolution', ipa: '/ˌrezəˈluːʃn/', definition: 'Phương án giải quyết dứt điểm vấn đề', translation: 'Giải pháp xử lý dứt điểm', example: 'We hope this room upgrade is a satisfactory resolution to the problem.', blankSentence: 'Our team worked diligently toward a speedy ____.', emoji: '✅' }
    ],
    structures: [
      {
        phrase: 'I can immediately move you to a quiet, upgraded room on a higher floor.',
        meaning: 'Đề xuất đổi phòng lập tức sang phòng hạng cao hơn, êm ái hơn.',
        vietnamese: 'Tôi có thể chuyển quý khách ngay sang một phòng nâng hạng yên tĩnh hơn ở tầng cao ạ.',
        business: { phrase: 'To resolve this noise disturbance instantly, I have already arranged to relocate you to an upgraded Premier Suite on our 15th executive floor.', example: 'I can immediately move you to a quiet, upgraded suite on a higher floor, Sir.', translation: 'Để chấm dứt sự phiền hà do tiếng ồn ngay lập tức, tôi đã sắp xếp chuyển quý khách sang phòng Premier Suite nâng hạng ở tầng 15 yên tĩnh tuyệt đối ạ.' },
        casualStyle: { phrase: 'Let’s get you out of that noisy room! I’ve got a super quiet upgraded room on floor 10 ready right now.', example: 'I can pack you up and move you to a peaceful room next wing right away!', translation: 'Để em chuyển mình ra khỏi phòng ồn đó liền nha! Em có sẵn một phòng xịn hơn siêu yên tĩnh ở tầng 10 cho mình ngay đây ạ.' },
        superCasual: { phrase: 'Moving you to a quiet sweet room on floor 10 right now!', example: 'Let’s swap your room to a top-floor quiet spot!', translation: 'Chuyển bạn qua phòng tầng 10 êm ru xịn sò ngay và luôn nha!' }
      },
      {
        phrase: 'Our bellman will assist in transferring all your luggage seamlessly.',
        meaning: 'Cam kết cử nhân viên khuân vác hỗ trợ di chuyển hành lý trọn gói.',
        vietnamese: 'Nhân viên hành lý của chúng tôi sẽ hỗ trợ chuyển toàn bộ va li của quý khách một cách nhanh chóng và chu đáo.',
        business: { phrase: 'Our head bellman will arrive at your door in five minutes to seamlessly transfer your luggage to the new suite without any effort on your part.', example: 'Our concierge will handle transferring your luggage seamlessly, Madam.', translation: 'Trưởng nhóm hành lý sẽ có mặt tại cửa phòng trong 5 phút để chuyển toàn bộ hành lý sang phòng mới mà quý khách không cần phải bận tâm mang vác gì cả ạ.' },
        casualStyle: { phrase: 'Don’t worry about packing heavy bags, our bellboy will carry everything up for you!', example: 'Our team will take care of moving all your stuff over.', translation: 'Anh/chị không cần mang vác va li nặng đâu ạ, bạn nhân viên sẽ qua xách toàn bộ sang phòng mới giúp mình!' },
        superCasual: { phrase: 'Our bell guy will move all your bags in a flash!', example: 'We’ll carry your bags over, no worries!', translation: 'Nhân viên bên mình qua vác hành lý qua cái rẹt, khỏi lo bạn ơi!' }
      },
      {
        phrase: 'We have waived tonight’s charge and credited a $50 spa voucher to your account.',
        meaning: 'Thông báo miễn phí tiền phòng và cộng voucher dịch vụ đền bù.',
        vietnamese: 'Chúng tôi đã miễn phí tiền phòng đêm nay và cộng thêm một voucher spa trị giá 50 đô vào tài khoản của quý khách.',
        business: { phrase: 'As a gesture of goodwill for the distress caused, we have completely waived tonight’s room rate and credited a $50 spa voucher to your room folio.', example: 'We have deducted tonight’s charge and added a complimentary dining credit.', translation: 'Như một nghĩa cử tạ lỗi chân thành vì những phiền toái đã qua, chúng tôi xin miễn hoàn toàn tiền phòng đêm nay và gửi tặng voucher spa 50 đô vào tài khoản phòng của quý khách ạ.' },
        casualStyle: { phrase: 'Tonight’s stay is 100% on us, plus here’s a $50 voucher for our rooftop spa to help you relax!', example: 'We took off tonight’s room fee and added free breakfast for your whole stay!', translation: 'Đêm nay khách sạn miễn phí 100% cho mình, lại tặng thêm voucher spa 50 đô trên tầng thượng để anh/chị thư giãn xả stress nha!' },
        superCasual: { phrase: 'Tonight is free, plus enjoy $50 off the spa on us!', example: 'Free night + spa voucher for you guys!', translation: 'Tối nay miễn phí hoàn toàn, tặng kèm voucher spa 50 đô cho hai bạn luôn nha!' }
      },
      {
        phrase: 'We have dispatched an emergency housekeeping team to re-clean and sanitize your room.',
        meaning: 'Cử đội dọn phòng khẩn cấp lên vệ sinh khử khuẩn lại toàn diện khi phòng bẩn.',
        vietnamese: 'Chúng tôi đã điều phối đội buồng phòng khẩn cấp lên vệ sinh và khử trùng lại toàn bộ căn phòng của quý khách.',
        business: { phrase: 'Our executive housekeeper and a specialized sanitization crew have been dispatched to thoroughly re-clean every corner of your suite.', example: 'An emergency housekeeping team is deep-cleaning your room as we speak.', translation: 'Trưởng bộ phận buồng phòng cùng đội ngũ vệ sinh chuyên biệt đã được điều động lên lau dọn và khử khuẩn kỹ lưỡng từng góc nhỏ trong phòng của quý khách ạ.' },
        casualStyle: { phrase: 'I’ve sent our cleaning team up with fresh linens to deep-clean the whole bathroom and bedroom right away.', example: 'Two housekeepers are heading up to scrub and polish everything spotless.', translation: 'Em đã cho hai bạn buồng phòng mang ga trải giường mới tinh lên lau dọn khử khuẩn lại từ phòng tắm đến phòng ngủ liền rồi ạ.' },
        superCasual: { phrase: 'Cleaning crew is scrubbing down the room right now!', example: 'Deep-cleaning team is on it right this second!', translation: 'Đội buồng phòng đang lên lau dọn bóng loáng lại phòng liền nè!' }
      },
      {
        phrase: 'Is this resolution satisfactory, or is there anything else we can do for you?',
        meaning: 'Kiểm tra xem khách đã thực sự hài lòng với phương án giải quyết chưa.',
        vietnamese: 'Phương án xử lý này đã thỏa đáng với quý khách chưa ạ, hay quý khách còn mong muốn chúng tôi hỗ trợ thêm điều gì nữa không ạ?',
        business: { phrase: 'Does this resolution meet your expectations, Mr. Foster, or is there any additional arrangement we can make to restore your confidence in our hotel?', example: 'Is this solution satisfactory to you, Madam?', translation: 'Phương án giải quyết này đã đáp ứng được kỳ vọng của ông Foster chưa ạ, hay chúng tôi còn có thể làm thêm điều gì để lấy lại niềm tin nơi quý khách ạ?' },
        casualStyle: { phrase: 'Does that sound fair to you, or is there anything else you’d like us to arrange?', example: 'Are you happy with that plan, or would you prefer something else?', translation: 'Như vậy đã ổn thỏa và vừa lòng anh/chị chưa ạ, hay mình còn muốn tụi em hỗ trợ thêm gì nữa không nè?' },
        superCasual: { phrase: 'All good with this plan, or need something more?', example: 'Sound like a fair deal to you?', translation: 'Phương án vậy okie chưa hay cần gì thêm cứ nói mình nha!' }
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Loud Neighboring Party at Midnight',
        school: 'business',
        participants: [
          { name: "Guest Dr. Aris", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=GuestDr.Aris", role: "Guest" },
          { name: "Duty Manager Tu", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=DutyManagerTu", role: "Hotel Staff" }
        ],
        lines: [
          { participant: "Guest Dr. Aris", text: 'Hello, reception? This is Dr. Aris in room 510. It is half past midnight and the guests in room 512 are having a loud boisterous party with blasting bass! I have brain surgery to perform at 7:00 AM!', translation: 'Alo lễ tân hả? Tôi là bác sĩ Aris ở phòng 510. Bây giờ đã nửa đêm 0h30 rồi mà phòng 512 bên cạnh đang mở nhạc đập bass ầm ĩ tiệc tùng! 7h sáng mai tôi có một ca phẫu thuật não đấy!' },
          { participant: "Duty Manager Tu", text: 'Dr. Aris, I sincerely apologize for this unacceptable disturbance to your vital rest. Our security supervisor is stepping onto the 5th floor this very second to shut down the noise immediately.', translation: 'Thưa bác sĩ Aris, tôi thành thật xin lỗi vì sự quấy rầy nghiêm trọng đến giấc ngủ quý giá của ông. Đội trưởng an ninh đang bước lên tầng 5 ngay giây phút này để yêu cầu dập tắt tiếng ồn lập tức ạ.' },
          { participant: "Guest Dr. Aris", text: 'Even if they stop now, the walls are thin and I cannot risk being woken up again.', translation: 'Dù họ có tắt thì tường ở đây cũng mỏng, tôi không thể đánh cược việc bị giật mình thức giấc thêm lần nào nữa.' },
          { participant: "Duty Manager Tu", text: 'I completely agree with you, Doctor. I have already prepared a serene Corner Suite on our quiet VIP 14th floor, far away from any other guests. Our bellman is outside your door with the new key card right now.', translation: 'Tôi hoàn toàn đồng quan điểm với bác sĩ. Tôi đã chuẩn bị sẵn một căn Corner Suite biệt lập tại tầng 14 khu VIP, yên tĩnh tuyệt đối cách xa mọi tiếng ồn. Nhân viên hành lý đang đứng trước cửa phòng ông với thẻ mới ngay lúc này ạ.' },
          { participant: "Guest Dr. Aris", text: 'Thank you for moving so fast. That is true professional hospitality.', translation: 'Cảm ơn anh vì hành động quá nhanh chóng. Đó mới đúng là dịch vụ khách sạn chuyên nghiệp.' }
        ]
      },
      {
        type: 'pair',
        title: 'Dirty Towels and Hair Found in Bathroom',
        school: 'casual',
        participants: [
          { name: "Guest Kelly", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=GuestKelly", role: "Guest" },
          { name: "Supervisor Hanh", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=SupervisorHanh", role: "Hotel Staff" }
        ],
        lines: [
          { participant: "Guest Kelly", text: 'Hi, I just walked into room 308. There are damp used towels hanging behind the bathroom door and hair in the sink. This is really gross.', translation: 'Chào em, chị vừa bước vào phòng 308. Có khăn tắm ẩm ướt của ai treo sau cửa phòng tắm với tóc trong bồn rửa mặt. Thật sự rất mất vệ sinh.' },
          { participant: "Supervisor Hanh", text: 'Oh Ms. Kelly, I am mortified and deeply sorry! That violates every cleanliness standard we hold dear. You have every right to be upset.', translation: 'Trời ơi chị Kelly, em vô cùng bàng hoàng và thành thật xin lỗi chị! Chuyện này vi phạm nghiêm trọng tiêu chuẩn vệ sinh của khách sạn. Chị bức xúc là hoàn toàn đúng ạ.' },
          { participant: "Guest Kelly", text: 'I don’t even feel comfortable sleeping in this room now.', translation: 'Chị nhìn thấy vậy là không còn chút cảm giác thoải mái nào để ở lại căn phòng này nữa rồi.' },
          { participant: "Supervisor Hanh", text: 'I wouldn’t want you to stay in there either! I am moving you immediately to an Executive Deluxe room on the 8th floor that I inspected personally ten minutes ago. Here is your new key, and let me grab your suitcase.', translation: 'Em cũng không thể để chị ở lại trong phòng đó được ạ! Em xin chuyển chị ngay lên phòng Executive Deluxe ở tầng 8 mà đích thân em vừa kiểm tra sạch tinh tươm 10 phút trước. Đây là chìa khóa mới, để em xách va li qua phòng mới cho chị liền nha.' },
          { participant: "Guest Kelly", text: 'Thank you Hanh. The quick room switch makes me feel much better.', translation: 'Cảm ơn Hạnh. Em đổi phòng nhanh nhẹn như vầy làm chị thấy nhẹ nhõm hơn nhiều rồi.' }
        ]
      },
      {
        type: 'pair',
        title: 'Broken Shower Water Heater',
        school: 'superCasual',
        participants: [
          { name: "Guest Brian", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=GuestBrian", role: "Guest" },
          { name: "Front Desk Vu", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=FrontDeskVu", role: "Hotel Staff" }
        ],
        lines: [
          { participant: "Guest Brian", text: 'Morning desk! The shower water in 402 is ice cold. Froze my back off trying to get ready for my conference.', translation: 'Chào lễ tân! Nước vòi sen ở phòng 402 lạnh như đá vậy. Tắm mà muốn đóng băng cái lưng luôn, đang cần chuẩn bị đi hội thảo đây.' },
          { participant: "Front Desk Vu", text: 'Oh man Brian, taking an ice-cold shower before a conference is the worst! Huge apologies for that!', translation: 'Trời ơi anh Brian, tắm nước lạnh ngắt trước giờ đi hội thảo thì ác mộng thiệt sự! Em thành thật xin lỗi anh rất nhiều!' },
          { participant: "Guest Brian", text: 'Is the central boiler broken or what?', translation: 'Bình nước nóng trung tâm bị nổ hay bị sao vậy em?' },
          { participant: "Front Desk Vu", text: 'The pressure valve tripped on floor 4. The plumber just reset it, hot water is piping hot again right now! And I’ve taken 20% off your room bill today to make up for the cold shock!', translation: 'Cái van áp suất tầng 4 nó bị nhảy á anh. Chú thợ vừa kích hoạt lại xong, nước nóng sực trở lại ngay lúc này luôn rồi ạ! Với lại em đã trừ 20% tiền phòng hôm nay để tạ lỗi vụ tắm nước lạnh nha anh!' },
          { participant: "Guest Brian", text: 'Haha, appreciate the discount and quick fix Vu! Have a good one.', translation: 'Haha, cảm ơn vì đã giảm giá với sửa nhanh nha Vũ! Chúc một ngày tốt lành.' }
        ]
      }
    ]
  },

  // Buổi 18: Giao tiếp small talk với khách
  {
    id: 'hotel-18',
    title: 'Guest Small Talk & Rapport Building',
    vietnameseTitle: 'Buổi 18: Giao tiếp Small Talk với khách',
    category: 'Communication',
    subCategory: ['Hotel & Hospitality'],
    icon: '💬',
    color: '#0284c7',
    description: 'Chủ đề trò chuyện an toàn, lịch sự (thời tiết, chuyến bay, kế hoạch tham quan), mẫu câu gợi chuyện tự nhiên, không tọc mạch hay làm phiền khách, và cách giới thiệu ngắn về thành phố/địa phương.',
    words: [
      { id: 'h18-1', word: 'Rapport', ipa: '/ræˈpɔː/', definition: 'Mối quan hệ thân tình, sự hòa hợp cởi mở với khách', translation: 'Mối quan hệ thân thiện, gắn kết', example: 'Building warm rapport turns first-time guests into lifelong regulars.', blankSentence: 'A friendly smile helps establish instant ____ with newcomers.', emoji: '🤝' },
      { id: 'h18-2', word: 'Sightseeing', ipa: '/ˈsaɪtsiːɪŋ/', definition: 'Hoạt động đi tham quan danh lam thắng cảnh', translation: 'Đi ngắm cảnh, tham quan', example: 'Are you planning on doing any sightseeing around the historic Old Quarter today?', blankSentence: 'The sunny weather is ideal for afternoon ____.', emoji: '📸' },
      { id: 'h18-3', word: 'Pleasant', ipa: '/ˈpleznt/', definition: 'Dễ chịu, thoải mái (nói về thời tiết, chuyến đi)', translation: 'Dễ chịu, thuận lợi', example: 'We have very pleasant, breezy weather forecasted for this weekend.', blankSentence: 'Did you have a ____ flight from Sydney?', emoji: '☀️' },
      { id: 'h18-4', word: 'Itinerary', ipa: '/aɪˈtɪnərəri/', definition: 'Lịch trình, kế hoạch các điểm đến trong chuyến đi', translation: 'Lịch trình tham quan', example: 'What interesting spots do you have on your travel itinerary today?', blankSentence: 'Our concierge can help tailor your day-trip ____.', emoji: '🗺️' },
      { id: 'h18-5', word: 'Culinary', ipa: '/ˈkʌlɪnəri/', definition: 'Thuộc về ẩm thực, nấu nướng và đồ ăn ngon', translation: 'Ẩm thực', example: 'Our city is world-famous for its vibrant culinary street food scene.', blankSentence: 'Food lovers will adore the rich ____ heritage of this region.', emoji: '🍜' },
      { id: 'h18-6', word: 'Unwind', ipa: '/ʌnˈwaɪnd/', definition: 'Thư giãn, xả hơi sau những giờ làm việc/di chuyển', translation: 'Thư giãn, xả hơi', example: 'Our rooftop infinity pool is the perfect spot to unwind at twilight.', blankSentence: 'We hope you have plenty of time to relax and ____.', emoji: '🧘' }
    ],
    structures: [
      {
        phrase: 'How was your journey getting here today?',
        meaning: 'Mở đầu cuộc trò chuyện tự nhiên về chuyến bay / chuyến xe của khách.',
        vietnamese: 'Chuyến đi đến khách sạn của quý khách hôm nay có thuận lợi không ạ?',
        business: { phrase: 'Good afternoon, Mr. Gallagher. How was your flight from Frankfurt today? Did you experience any turbulence or delays?', example: 'How was your journey getting here today, Madam?', translation: 'Kính chào ông Gallagher. Chuyến bay từ Frankfurt của ông hôm nay có thuận lợi không ạ? Chuyến bay có bị trễ hay xóc lắc gì không ạ?' },
        casualStyle: { phrase: 'Hi there! Did you have a smooth flight getting into town today?', example: 'How was the drive up from the airport? Traffic okay?', translation: 'Chào anh/chị! Chuyến bay đến đây hôm nay có êm ái và thuận lợi không ạ?' },
        superCasual: { phrase: 'How was the flight? Smooth ride?', example: 'Trip over good? Beat the airport traffic?', translation: 'Chuyến bay êm không bạn? Đường từ sân bay về có kẹt xe hông?' }
      },
      {
        phrase: 'The weather is absolutely wonderful today, perfect for exploring the town!',
        meaning: 'Bình luận về thời tiết – chủ đề trò chuyện an toàn số một trên thế giới.',
        vietnamese: 'Thời tiết hôm nay thật tuyệt vời, rất lý tưởng để đi dạo khám phá thành phố ạ!',
        business: { phrase: 'We are fortunate to have such mild sunshine today; it creates the perfect atmosphere for strolling through the botanical gardens.', example: 'The weather is magnificent today, ideal for outdoor sightseeing.', translation: 'Thật may mắn là hôm nay thời tiết nắng nhẹ rất dễ chịu; khung cảnh hoàn hảo để tản bộ quanh vườn bách thảo ạ.' },
        casualStyle: { phrase: 'What gorgeous sunshine today! Are you planning to hit the beach or walk around the Old Quarter?', example: 'It’s such a crisp breezy day out! Great day to walk around.', translation: 'Hôm nay nắng đẹp quá chừng luôn! Mình có dự định đi tắm biển hay dạo quanh phố cổ không nè?' },
        superCasual: { phrase: 'Sun’s out! Beach day or town exploring?', example: 'Gorgeous day today! Heading out?', translation: 'Trời nắng đẹp ghê chưa! Hôm nay đi biển hay dạo phố nè?' }
      },
      {
        phrase: 'Is this your first visit to Vietnam, or have you visited before?',
        meaning: 'Hỏi xem khách đến lần đầu hay đã từng ghé thăm để tư vấn phù hợp.',
        vietnamese: 'Đây là lần đầu tiên quý khách ghé thăm Việt Nam, hay quý khách đã từng đến đây trước đó rồi ạ?',
        business: { phrase: 'May I inquire if this is your inaugural visit to Vietnam, or have you had the pleasure of traveling here previously, Sir?', example: 'Is this your first time in Da Nang, Madam?', translation: 'Tôi xin phép được hỏi đây là lần đầu tiên quý khách đến thăm Việt Nam, hay quý khách đã từng có dịp đi du lịch ở đây trước đó rồi ạ?' },
        casualStyle: { phrase: 'Is it your first time in the city, or are you already familiar with the area?', example: 'First time visiting Vietnam? What do you think of it so far?', translation: 'Đây là lần đầu mình đến thành phố này hay anh/chị đã quen thuộc với nơi này rồi ạ?' },
        superCasual: { phrase: 'First time in town or been here before?', example: 'Ever visited Vietnam before this trip?', translation: 'Lần đầu đến đây hay đi mấy lần rồi bạn?' }
      },
      {
        phrase: 'If you enjoy street food, you simply must try our authentic Pho and crispy Banh Xeo!',
        meaning: 'Gợi ý ẩm thực bản địa một cách hào hứng, gần gũi và đầy tự hào.',
        vietnamese: 'Nếu quý khách yêu thích món ăn đường phố, quý khách nhất định phải thử món Phở truyền thống và Bánh xèo giòn rụm của địa phương ạ!',
        business: { phrase: 'If you appreciate culinary discoveries, I would be honored to recommend several historic family-run eateries renowned for authentic Pho bo and crispy pancakes.', example: 'You simply must experience our traditional Vietnamese coffee at a local café.', translation: 'Nếu quý khách yêu thích khám phá ẩm thực, tôi rất vinh hạnh được gợi ý vài quán gia truyền lâu đời nức tiếng với phở bò và bánh xèo giòn rụm ạ.' },
        casualStyle: { phrase: 'You’ve definitely got to try the local beef Pho and iced condensed milk coffee—it’ll blow your mind!', example: 'If you love good food, the night food market two blocks away is an absolute must-visit!', translation: 'Nhất định anh/chị phải thử phở bò với cà phê sữa đá địa phương nha—ngon đỉnh cao luôn á!' },
        superCasual: { phrase: 'You gotta grab some street banh mi and egg coffee! Best thing ever!', example: 'Try the crispy banh xeo down the alley, so good!', translation: 'Phải đi ăn bánh mì vỉa hè với cà phê trứng nha! Ngon nhức nách luôn á!' }
      },
      {
        phrase: 'Please do not hesitate to ask if you need any directions or insider recommendations.',
        meaning: 'Lời kết thúc small talk tự nhiên, chuyển sang tư vấn dịch vụ khách sạn khi khách cần.',
        vietnamese: 'Quý khách đừng ngần ngại hỏi chúng tôi nếu cần chỉ đường hay muốn biết những địa điểm thú vị mà người địa phương hay lui tới nhé.',
        business: { phrase: 'Please consider our concierge team at your full disposal should you require tailored recommendations, private drivers, or hidden gems off the beaten path.', example: 'Please do not hesitate to ask should you need local insights.', translation: 'Xin quý khách cứ xem đội ngũ lễ tân chúng tôi như người đồng hành sẵn sàng hỗ trợ bất cứ khi nào quý khách cần gợi ý điểm đến, xe riêng hay những góc đẹp ít người biết ạ.' },
        casualStyle: { phrase: 'Feel free to shout if you need any directions or tips on where the locals eat!', example: 'Just swing by the desk if you ever need any maps or food tips!', translation: 'Cứ thoải mái ới tụi em nếu anh/chị cần chỉ đường hay muốn biết mấy quán ăn người bản địa hay ghé nha!' },
        superCasual: { phrase: 'Any directions or secret spots, just ask me anytime!', example: 'Catch me at the desk if you get lost!', translation: 'Cần chỉ đường hay quán ruột bí mật cứ hỏi mình nha!' }
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Elevator Small Talk with Executive Guest',
        school: 'business',
        participants: [
          { name: "Receptionist Thanh", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ReceptionistThanh", role: "Hotel Staff" },
          { name: "Guest Mr. Sterling", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=GuestMr.Sterling", role: "Guest" }
        ],
        lines: [
          { participant: "Receptionist Thanh", text: 'Good afternoon, Mr. Sterling. Floor 12 for you today?', translation: 'Kính chào buổi chiều ông Sterling. Ông lên tầng 12 hôm nay đúng không ạ?' },
          { participant: "Guest Mr. Sterling", text: 'Yes, thank you Thanh. Quite a long day at the convention center.', translation: 'Đúng rồi, cảm ơn Thanh. Một ngày làm việc khá dài ở trung tâm hội nghị.' },
          { participant: "Receptionist Thanh", text: 'I can imagine. Did your panel presentation go successfully this morning?', translation: 'Dạ tôi có thể hình dung được. Bài thuyết trình thảo luận của ông sáng nay diễn ra thành công tốt đẹp chứ ạ?' },
          { participant: "Guest Mr. Sterling", text: 'Splendidly! The feedback was very enthusiastic. Now I just need to unwind.', translation: 'Rất tuyệt vời! Phản hồi của mọi người cực kỳ nhiệt tình. Giờ thì tôi chỉ cần xả hơi nghỉ ngơi thôi.' },
          { participant: "Receptionist Thanh", text: 'May I suggest our 19th-floor sky lounge? The sunset over the river is beginning right now, and the acoustic jazz quartet starts in twenty minutes.', translation: 'Tôi xin phép được gợi ý quán sky lounge trên tầng 19 ạ? Hoàng hôn buông xuống dòng sông đang bắt đầu rất đẹp, và ban nhạc jazz mộc sẽ biểu diễn sau hai mươi phút nữa ạ.' },
          { participant: "Guest Mr. Sterling", text: 'That sounds like the perfect evening. Thank you for the thoughtful idea, Thanh.', translation: 'Nghe có vẻ là một buổi tối hoàn hảo đấy. Cảm ơn ý kiến rất chu đáo của Thanh nhé.' }
        ]
      },
      {
        type: 'pair',
        title: 'Morning Poolside Small Talk with Vacationers',
        school: 'casual',
        participants: [
          { name: "Pool Attendant Phong", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=PoolAttendantPhong", role: "Hotel Staff" },
          { name: "Guest Chloe", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=GuestChloe", role: "Guest" },
          { name: "Guest Dan", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=GuestDan", role: "Guest" }
        ],
        lines: [
          { participant: "Pool Attendant Phong", text: 'Good morning! Here are two fresh fluffy towels for you guys. Isn’t the weather fantastic today?', translation: 'Dạ chào buổi sáng! Gửi hai anh chị hai chiếc khăn tắm êm ái mới tinh nha. Thời tiết hôm nay mát mẻ thích quá anh chị nhỉ?' },
          { participant: "Guest Chloe", text: 'Good morning Phong! Yes, the breeze is so refreshing! We are thinking of renting bicycles this afternoon.', translation: 'Chào Phong! Ừ, gió biển thổi mát rượi luôn! Chiều nay tụi chị tính thuê xe đạp đi dạo.' },
          { participant: "Pool Attendant Phong", text: 'Biking along the coastal coconut path is amazing! Have you tried the local coconut ice cream along the way yet?', translation: 'Đạp xe dọc theo con đường dừa ven biển là mê ly luôn á chị! Hai anh chị đã thử món kem dừa non dọc đường bao giờ chưa?' },
          { participant: "Guest Dan", text: 'No, not yet! Is there a specific spot we shouldn’t miss?', translation: 'Chưa em ơi! Có quán nào ngon đặc biệt không nên bỏ lỡ không em?' },
          { participant: "Pool Attendant Phong", text: 'Stop by Mrs. Ba’s hut right next to the white lighthouse—served inside a real coconut shell with roasted peanuts. It’s heaven!', translation: 'Anh chị nhớ ghé chòi cô Ba ngay cạnh ngọn hải đăng trắng nha—kem múc trong trái dừa thật rắc đậu phộng rang giòn. Ngon đỉnh luôn ạ!' }
        ]
      },
      {
        type: 'pair',
        title: 'Casual Chat in the Lobby about Rainy Weather',
        school: 'superCasual',
        participants: [
          { name: "Guest Jack", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=GuestJack", role: "Guest" },
          { name: "Bellman Son", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=BellmanSon", role: "Hotel Staff" }
        ],
        lines: [
          { participant: "Guest Jack", text: 'Whoa, looks like the skies just opened up! Typical tropical shower, huh?', translation: 'U là trời, mưa rào xối xả bất thình lình luôn kìa! Mưa đặc sản nhiệt đới hả bạn?' },
          { participant: "Bellman Son", text: 'Haha yep, welcome to the tropics! Don’t worry though, these afternoon showers usually vanish in 15 minutes flat.', translation: 'Haha dạ đúng rồi, đặc sản xứ nhiệt đới đó anh! Mà anh đừng lo, mấy cơn mưa chiều này tầm 15 phút là tạnh ráo ngay à.' },
          { participant: "Guest Jack", text: 'Good to know! I was worried my street food crawl was washed out.', translation: 'Nghe vậy mừng quá! Cứ sợ chuyến đi săn đồ ăn vỉa hè bị trôi theo dòng nước.' },
          { participant: "Bellman Son", text: 'No way! Actually, hot crispy Banh Xeo pancakes taste twice as good when it’s raining outside! Take one of our hotel umbrellas just in case.', translation: 'Không sao đâu anh ơi! Thực ra trời mưa se se lạnh ăn bánh xèo nóng giòn còn ngon gấp đôi ấy chứ! Anh cầm theo cây dù của khách sạn cho chắc cú nè.' }
        ]
      }
    ]
  },

  // Buổi 19: Giới thiệu địa phương & hỗ trợ thông tin cho khách
  {
    id: 'hotel-19',
    title: 'Local Attractions & Concierge Guidance',
    vietnameseTitle: 'Buổi 19: Giới thiệu địa phương & Hỗ trợ thông tin',
    category: 'Communication',
    subCategory: ['Hotel & Hospitality'],
    icon: '🗺️',
    color: '#0284c7',
    description: 'Từ vựng về địa điểm du lịch, phương tiện di chuyển, thời gian mở cửa, mẫu câu chỉ đường, gợi ý lịch trình đơn giản, và giao tiếp khi khách hỏi về taxi, đặt tour, mua vé tham quan.',
    words: [
      { id: 'h19-1', word: 'Attraction', ipa: '/əˈtrækʃn/', definition: 'Điểm tham quan thu hút khách du lịch', translation: 'Điểm tham quan du lịch', example: 'The Marble Mountains and Dragon Bridge are the top attractions nearby.', blankSentence: 'What historic ____ would you recommend visiting this morning?', emoji: '🏛️' },
      { id: 'h19-2', word: 'Landmark', ipa: '/ˈlændmɑːk/', definition: 'Công trình kiến trúc hoặc biểu tượng nổi tiếng của thành phố', translation: 'Địa danh, biểu tượng', example: 'The ancient Japanese Covered Bridge is Hoi An’s most iconic landmark.', blankSentence: 'The Cathedral is a striking architectural ____ in the center.', emoji: '🗼' },
      { id: 'h19-3', word: 'Excursion', ipa: '/ɪkˈskɜːʃn/', definition: 'Chuyến tham quan dã ngoại ngắn trong ngày', translation: 'Chuyến dã ngoại, du ngoạn', example: 'We can arrange a full-day private boat excursion to the Cham Islands.', blankSentence: 'Guests loved the countryside eco-tour ____.', emoji: '⛵' },
      { id: 'h19-4', word: 'Directions', ipa: '/daɪˈrekʃnz/', definition: 'Lời chỉ đường, phương hướng đi lại', translation: 'Chỉ dẫn đường đi', example: 'Could you give me walking directions to the night food market?', blankSentence: 'I marked the shortest walking ____ on this pocket map.', emoji: '🧭' },
      { id: 'h19-5', word: 'Fare', ipa: '/feə/', definition: 'Giá cước vé xe, vé tàu, cước taxi', translation: 'Giá cước, tiền vé', example: 'The standard metered taxi fare to the airport is approximately 250,000 VND.', blankSentence: 'Does the tour ticket include shuttle bus ____?', emoji: '🚕' },
      { id: 'h19-6', word: 'Pedestrian zone', ipa: '/pəˈdestriən zəʊn/', definition: 'Tuyến phố đi bộ không cho xe cộ lưu thông', translation: 'Phố đi bộ', example: 'The lake promenade transforms into a lively pedestrian zone on weekends.', blankSentence: 'Vehicles are prohibited inside the ancient ____ after 5 PM.', emoji: '🚶' }
    ],
    structures: [
      {
        phrase: 'It is roughly a 10-minute walk from here; simply turn left at the corner.',
        meaning: 'Mẫu câu chỉ đường đi bộ rõ ràng, dễ hình dung cho khách du lịch.',
        vietnamese: 'Nơi đó cách đây khoảng 10 phút đi bộ; quý khách chỉ cần rẽ trái ở góc phố kia ạ.',
        business: { phrase: 'The historic French quarter is located approximately an eight-minute walk from our lobby. Simply exit through the main revolving doors and take your immediate left at the fountain.', example: 'It is roughly a 10-minute walk; turn left at the main intersection, Sir.', translation: 'Khu phố Pháp cổ nằm cách sảnh khách sạn khoảng 8 phút đi bộ. Quý khách chỉ cần bước qua cửa xoay chính và rẽ trái ngay tại đài phun nước ạ.' },
        casualStyle: { phrase: 'It’s super close—just about a 10-minute walk! Turn left at the corner and walk straight down two blocks.', example: 'Only 5 minutes on foot! You can’t miss it right across the square.', translation: 'Gần xịt luôn anh/chị ơi—đi bộ tầm 10 phút à! Rẽ trái ngay góc đường rồi đi thẳng qua hai ngã tư là tới liền.' },
        superCasual: { phrase: 'Just 10 mins on foot! Turn left at the traffic light and you’re there.', example: 'Super close! Hang a left at the café and walk straight.', translation: 'Đi bộ 10 phút à! Quẹo trái chỗ đèn đỏ là đụng ngay luôn.' }
      },
      {
        phrase: 'Would you like me to book a reliable metered taxi or a private hotel limousine?',
        meaning: 'Đề xuất lựa chọn xe taxi hãng uy tín hoặc xe riêng sang trọng của khách sạn.',
        vietnamese: 'Quý khách muốn tôi gọi một chiếc taxi tính cước đồng hồ uy tín hay đặt xe riêng limousine của khách sạn ạ?',
        business: { phrase: 'Would you prefer that our concierge summons a trusted metered taxi, or would you favor reserving our private Mercedes limousine for your trip?', example: 'Shall I book a private car or hail a licensed taxi for you, Madam?', translation: 'Quý khách muốn lễ tân gọi một chiếc taxi tính cước đồng hồ uy tín, hay quý khách muốn đặt xe riêng Mercedes limousine của khách sạn cho chuyến đi ạ?' },
        casualStyle: { phrase: 'Would you like us to call a Grab taxi for you, or book our hotel private van?', example: 'I can call a reliable cab for you in two minutes!', translation: 'Em gọi một chuyến taxi Grab cho mình hay đặt xe riêng 7 chỗ của khách sạn ạ?' },
        superCasual: { phrase: 'Need a taxi or want our hotel driver?', example: 'Grab a cab or call you a Grab ride?', translation: 'Bắt taxi hay để mình gọi xe Grab cho nhanh nè?' }
      },
      {
        phrase: 'The museum is open Tuesday through Sunday from 8:00 AM to 5:00 PM.',
        meaning: 'Cung cấp thông tin ngày và giờ mở cửa chính xác của các điểm tham quan.',
        vietnamese: 'Bảo tàng mở cửa từ thứ Ba đến Chủ Nhật, trong khung giờ từ 8:00 sáng đến 5:00 chiều ạ.',
        business: { phrase: 'Please note that the Royal Fine Arts Museum welcomes visitors from Tuesday through Sunday, between 8:00 AM and 5:00 PM, and is closed on Mondays for restoration.', example: 'The landmark is open daily from 9:00 AM until sunset.', translation: 'Xin lưu ý là Bảo tàng Mỹ thuật Hoàng gia mở cửa đón khách từ thứ Ba đến Chủ Nhật, từ 8:00 sáng đến 5:00 chiều, và đóng cửa vào thứ Hai để bảo tồn ạ.' },
        casualStyle: { phrase: 'The temple is open every day from 7:30 AM to 5:30 PM, but morning is the best time before the tour buses arrive!', example: 'It’s open all week from 8 AM to 5 PM, free admission on Fridays!', translation: 'Ngôi chùa mở cửa mỗi ngày từ 7h30 sáng đến 5h30 chiều, nhưng đi buổi sáng sớm là thích nhất vì chưa có xe đoàn đông đúc ạ!' },
        superCasual: { phrase: 'Open daily 8 to 5! Go early to skip the crowds.', example: 'Closed Mondays, open every other day until 5 PM!', translation: 'Mở cửa mỗi ngày từ 8h tới 5h chiều nha! Đi sớm cho vắng người.' }
      },
      {
        phrase: 'Here is a complimentary city map; I have circled the top recommended spots for you.',
        meaning: 'Trao bản đồ thành phố và khoanh tròn những địa điểm đáng ghé thăm nhất.',
        vietnamese: 'Đây là bản đồ thành phố miễn phí; tôi đã khoanh tròn các địa điểm nổi bật nhất cho quý khách rồi ạ.',
        business: { phrase: 'Allow me to present this complimentary illustrated city guide. I have highlighted our hotel location with a gold star and circled the top culinary and historic landmarks.', example: 'Here is your pocket map with the recommended route marked in red.', translation: 'Xin phép gửi quý khách bản đồ thành phố minh họa miễn phí. Tôi đã đánh dấu vị trí khách sạn bằng ngôi sao vàng và khoanh tròn các điểm văn hóa, ẩm thực đặc sắc nhất cho quý khách ạ.' },
        casualStyle: { phrase: 'Here’s a pocket map for you! I circled the best street food street, the night market, and the beach path.', example: 'Take this map! I marked the secret viewpoints you shouldn’t miss.', translation: 'Dạ em gửi anh/chị tấm bản đồ bỏ túi nha! Em đã khoanh sẵn con phố ẩm thực ngon nhất, chợ đêm với đường dạo bãi biển rồi nè.' },
        superCasual: { phrase: 'Here’s a free map! Marked the cool spots with a red pen.', example: 'Pocket this map, all the best spots are circled!', translation: 'Cầm bản đồ này theo nha! Mấy chỗ chất chơi mình lấy bút đỏ khoanh sẵn hết rồi.' }
      },
      {
        phrase: 'We can also assist with booking entrance tickets so you can skip the queue.',
        meaning: 'Cung cấp dịch vụ đặt vé trước không phải xếp hàng (Skip-the-line ticket service).',
        vietnamese: 'Chúng tôi cũng có thể hỗ trợ quý khách đặt vé vào cổng trước để quý khách không phải xếp hàng chờ đợi lâu ạ.',
        business: { phrase: 'We can issue priority VIP passes directly at our concierge desk, enabling you to bypass the lengthy ticket queues at the Ba Na Hills cable car.', example: 'We can arrange skip-the-line vouchers for you right here.', translation: 'Chúng tôi có thể xuất vé ưu tiên VIP trực tiếp tại quầy lễ tân để quý khách không phải xếp hàng chờ mua vé cáp treo Bà Nà Hills dài dằng dặc ạ.' },
        casualStyle: { phrase: 'We can grab your cable car and museum tickets right here, so you can walk straight through without queuing!', example: 'Save time and let us print your entrance passes right now.', translation: 'Bên em có thể xuất vé cáp treo với vé bảo tàng ngay tại quầy luôn, qua đó anh/chị cứ thế đi thẳng vào cửa không cần xếp hàng mua vé đâu ạ!' },
        superCasual: { phrase: 'Can book tickets here so you skip the crazy lines!', example: 'Buy tickets with us and walk straight in!', translation: 'Mua vé tại quầy luôn đi cho khỏe, khỏi xếp hàng chen chúc chi cho mệt!' }
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Concierge Day-Tour Planning',
        school: 'business',
        participants: [
          { name: "Concierge Kiet", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ConciergeKiet", role: "Hotel Staff" },
          { name: "Guest Mr. Wright", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=GuestMr.Wright", role: "Guest" },
          { name: "Guest Mrs. Wright", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=GuestMrs.Wright", role: "Guest" }
        ],
        lines: [
          { participant: "Concierge Kiet", text: 'Good morning, Mr. and Mrs. Wright. How may our concierge team enrich your discoveries today?', translation: 'Kính chào buổi sáng hai ông bà Wright. Đội ngũ lễ tân chúng tôi có thể giúp ích gì cho hành trình khám phá hôm nay của hai vị ạ?' },
          { participant: "Guest Mr. Wright", text: 'Good morning, Kiet. We have one full free day and would love to experience the authentic heritage and craft villages outside the tourist traps.', translation: 'Chào Kiệt. Vợ chồng tôi có trọn một ngày rảnh rỗi và rất muốn trải nghiệm những di sản nguyên bản cùng các làng nghề truyền thống, tránh xa những chỗ quá xô bồ du lịch.' },
          { participant: "Concierge Kiet", text: 'Splendid! I recommend a morning bicycle ride through the organic herb village of Tra Que, followed by a lantern-making masterclass with an artisan family. Here on the map, I have drawn the scenic river trail.', translation: 'Tuyệt vời quá thưa ông! Tôi xin gợi ý buổi sáng đạp xe qua làng rau hữu cơ Trà Quế, sau đó tham gia lớp học làm đèn lồng thủ công cùng một gia đình nghệ nhân. Trên bản đồ này, tôi đã vẽ sẵn tuyến đường men theo sông rất thơ mộng ạ.' },
          { participant: "Guest Mrs. Wright", text: 'That sounds utterly enchanting! What about transportation?', translation: 'Nghe thật sự cuốn hút quá! Thế còn phương tiện đi lại thì sao cháu?' },
          { participant: "Concierge Kiet", text: 'Our resort provides complimentary vintage bicycles, or I can assign a private chauffeured car at your convenience. Would you like me to reserve the artisan workshop for 10:30 AM?', translation: 'Resort chúng tôi có sẵn xe đạp cổ điển miễn phí, hoặc tôi có thể điều một xe riêng có tài xế phục vụ hai vị bất cứ lúc nào. Tôi xin phép đặt chỗ lớp học nghệ nhân vào lúc 10h30 sáng cho hai vị nhé?' },
          { participant: "Guest Mr. Wright", text: 'Please do, Kiet. You always know the finest hidden gems.', translation: 'Làm giúp chúng tôi nhé Kiệt. Cháu lúc nào cũng biết những góc trải nghiệm tuyệt vời nhất.' }
        ]
      },
      {
        type: 'pair',
        title: 'Asking for Taxi to Airport and Traffic Time',
        school: 'casual',
        participants: [
          { name: "Guest Brian", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=GuestBrian", role: "Guest" },
          { name: "Bell Captain An", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=BellCaptainAn", role: "Hotel Staff" }
        ],
        lines: [
          { participant: "Guest Brian", text: 'Hi there! My flight departs at 4:30 PM. What time should I leave for the airport, and could you call me a taxi?', translation: 'Chào em! Chuyến bay của anh cất cánh lúc 4h30 chiều. Tầm mấy giờ thì anh nên xuất phát ra sân bay, và em gọi giúp anh một chiếc taxi được không?' },
          { participant: "Bell Captain An", text: 'For international flights, you should be at the terminal by 2:30 PM. The drive takes about 35 minutes, so leaving at 1:45 PM would give you plenty of peace of mind.', translation: 'Đối với chuyến bay quốc tế thì anh nên có mặt ở nhà ga lúc 2h30 chiều ạ. Quãng đường đi mất khoảng 35 phút, nên tầm 1h45 chiều mình xuất phát là thong thả và an tâm nhất ạ.' },
          { participant: "Guest Brian", text: 'Perfect. How much is the typical taxi fare?', translation: 'Hợp lý quá. Giá cước taxi thường khoảng bao nhiêu em?' },
          { participant: "Bell Captain An", text: 'It’s roughly 300,000 VND (about $12 USD) on the meter, including the airport toll. I have booked a 7-seater Mai Linh taxi for you at 1:45 PM sharp.', translation: 'Dạ đồng hồ tính cước tầm 300.000 đồng (khoảng 12 đô), đã bao gồm phí qua cổng sân bay ạ. Em đã đặt một xe 7 chỗ Mai Linh đón anh đúng 1h45 chiều trước cửa sảnh nha.' },
          { participant: "Guest Brian", text: 'Awesome, thank you An!', translation: 'Tuyệt vời, cảm ơn An nhiều nhé!' }
        ]
      },
      {
        type: 'pair',
        title: 'Directions to the Nearest ATM and Pharmacy',
        school: 'superCasual',
        participants: [
          { name: "Guest Lisa", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=GuestLisa", role: "Guest" },
          { name: "Receptionist Khang", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ReceptionistKhang", role: "Hotel Staff" }
        ],
        lines: [
          { participant: "Guest Lisa", text: 'Hey! Quick question: is there an ATM and a pharmacy within walking distance?', translation: 'Alo bạn ơi! Cho mình hỏi nhanh: gần đây có cây ATM với tiệm thuốc tây nào đi bộ tới được không?' },
          { participant: "Receptionist Khang", text: 'Yep, super close! Step out the front door, turn right, and walk 50 meters. You’ll see the Vietcombank ATM right beside the green Pharmacity drugstore.', translation: 'Có chứ, siêu gần luôn! Bước ra khỏi cổng chính, quẹo phải đi 50 mét là thấy cây ATM Vietcombank nằm ngay sát tiệm thuốc Pharmacity màu xanh lá luôn á.' },
          { participant: "Guest Lisa", text: 'Do they take international cards at that ATM?', translation: 'Cây ATM đó có nhận thẻ quốc tế như Visa/Master không bạn?' },
          { participant: "Receptionist Khang", text: '100% yes, accepts Visa, MasterCard, and Amex with English instructions on screen!', translation: 'Dạ 100% có nha, nhận thẻ Visa, Master, Amex có hướng dẫn tiếng Anh trên màn hình luôn á!' }
        ]
      }
    ]
  },

  // Buổi 20: Tình huống tổng hợp theo ca làm việc
  {
    id: 'hotel-20',
    title: 'Shift Synthesis – End-to-End Hotel Communication',
    vietnameseTitle: 'Buổi 20: Tình huống tổng hợp theo ca làm việc',
    category: 'Communication',
    subCategory: ['Hotel & Hospitality'],
    icon: '🏨',
    color: '#0284c7',
    description: 'Xâu chuỗi trọn vẹn toàn bộ các bước tương tác trong một ca làm việc: đón khách – check-in – phục vụ buồng phòng/nhà hàng – xử lý tình huống phát sinh – check-out & tiễn khách; phối hợp liên bộ phận trơn tru.',
    words: [
      { id: 'h20-1', word: 'Handover', ipa: '/ˈhændəʊvə/', definition: 'Biên bản và quá trình bàn giao công việc giữa các ca trực', translation: 'Giao ca, bàn giao công việc', example: 'We conduct a thorough shift handover log at 2:00 PM every afternoon.', blankSentence: 'Make sure all guest requests are noted in the shift ____.', emoji: '📋' },
      { id: 'h20-2', word: 'Interdepartmental', ipa: '/ˌɪntədɪˌpɑːtˈmentl/', definition: 'Liên bộ phận (giữa lễ tân, buồng phòng, F&B, kỹ thuật)', translation: 'Liên bộ phận, phối hợp', example: 'Seamless interdepartmental coordination guarantees flawless guest satisfaction.', blankSentence: 'Prompt ____ communication prevents missed wake-up calls.', emoji: '🔄' },
      { id: 'h20-3', word: 'Hospitality', ipa: '/ˌhɒspɪˈtæləti/', definition: 'Tinh thần hiếu khách chân thành, ngành dịch vụ khách sạn', translation: 'Tinh thần hiếu khách', example: 'True hospitality means anticipating a guest’s needs before they even ask.', blankSentence: 'Warm Vietnamese ____ leaves an indelible impression on travelers.', emoji: '🌟' },
      { id: 'h20-4', word: 'Satisfaction', ipa: '/ˌsætɪsˈfækʃn/', definition: 'Sự hài lòng tuyệt đối của khách hàng đối với dịch vụ', translation: 'Sự hài lòng', example: 'Our ultimate milestone is 100% guest satisfaction across every department.', blankSentence: 'We monitor guest reviews to ensure continuous ____.', emoji: '😊' },
      { id: 'h20-5', word: 'Folio', ipa: '/ˈfəʊliəʊ/', definition: 'Hồ sơ tài khoản thanh toán chi tiết của phòng trong kỳ lưu trú', translation: 'Hồ sơ chi tiêu của phòng', example: 'Please review your complete guest folio before settling the balance.', blankSentence: 'All restaurant charges have been compiled onto your room ____.', emoji: '📁' },
      { id: 'h20-6', word: 'Endeavor', ipa: '/ɪnˈdevə/', definition: 'Nỗ lực hết mình phục vụ khách hàng chu đáo', translation: 'Nỗ lực cống hiến', example: 'We endeavor to make every single moment of your vacation memorable.', blankSentence: 'Our dedicated staff will ____ to exceed your expectations.', emoji: '💪' }
    ],
    structures: [
      {
        phrase: 'From all of us at [Hotel Name], thank you for choosing to stay with us.',
        meaning: 'Lời cảm ơn chuẩn mực, trang trọng đại diện cho toàn thể cán bộ nhân viên khách sạn.',
        vietnamese: 'Thay mặt toàn thể nhân viên khách sạn, chân thành cảm ơn quý khách đã lựa chọn lưu trú cùng chúng tôi.',
        business: { phrase: 'From all of us at The Grand Heritage, we thank you most sincerely for honoring us with your stay. It has been a true privilege serving you.', example: 'From all of us at the resort, thank you for choosing to stay with us, Mr. Bennett.', translation: 'Thay mặt toàn thể cán bộ nhân viên The Grand Heritage, chúng tôi xin chân thành cảm ơn quý khách đã tin tưởng lưu trú cùng chúng tôi. Được phục vụ quý khách là niềm vinh dự to lớn của chúng tôi ạ.' },
        casualStyle: { phrase: 'On behalf of the whole team, thank you so much for staying with us! We loved having you here.', example: 'Thanks a million for staying with our family here at the hotel!', translation: 'Thay mặt cho cả đội ngũ, cảm ơn anh/chị rất nhiều vì đã ghé ở lại cùng tụi em! Rất vui được đón tiếp nhà mình.' },
        superCasual: { phrase: 'Thanks a ton for staying with us guys! You were awesome guests!', example: 'Loved having you here! Thanks for choosing us!', translation: 'Cảm ơn hai bạn nhiều vì đã ở lại với tụi mình nha! Khách gì đâu mà dễ thương xỉu!' }
      },
      {
        phrase: 'I will coordinate directly with our housekeeping and bell teams to make sure that is seamless.',
        meaning: 'Khẳng định vai trò điều phối liên bộ phận đảm bảo quy trình trôi chảy.',
        vietnamese: 'Tôi sẽ trực tiếp điều phối với bộ phận buồng phòng và hành lý để đảm bảo mọi việc diễn ra suôn sẻ nhất ạ.',
        business: { phrase: 'I will coordinate directly between our front desk, executive housekeeping, and concierge teams to ensure your airport transfer and late departure are handled seamlessly.', example: 'I will liaise with our departments to execute this request flawlessly.', translation: 'Tôi sẽ trực tiếp điều phối giữa lễ tân, buồng phòng và concierge để đảm bảo chuyến xe ra sân bay và việc trả phòng trễ của quý khách diễn ra trơn tru nhất ạ.' },
        casualStyle: { phrase: 'I’ll jump on the radio with housekeeping and the driver right now to get everything set for you.', example: 'I’m calling housekeeping and our bell staff to get this sorted in two minutes.', translation: 'Em sẽ cầm bộ đàm báo liền cho bên buồng phòng với bác tài xế để chuẩn bị sẵn sàng chu đáo cho mình nha.' },
        superCasual: { phrase: 'Radioing the team right now to set that up!', example: 'On the walkie-talkie with housekeeping now, got you covered!', translation: 'Bắn bộ đàm cho các bộ phận lo liền nè, yên tâm nghen!' }
      },
      {
        phrase: 'If you have a brief moment, we would be deeply grateful for your review on TripAdvisor or Google.',
        meaning: 'Khéo léo xin đánh giá tích cực của khách trên các nền tảng trực tuyến.',
        vietnamese: 'Nếu quý khách có vài phút thảnh thơi, chúng tôi sẽ vô cùng biết ơn nếu nhận được vài dòng đánh giá của quý khách trên TripAdvisor hoặc Google ạ.',
        business: { phrase: 'If you have a leisurely moment during your journey home, our team would be profoundly grateful if you could share your experience on TripAdvisor or Google Reviews.', example: 'Your positive review on Google would mean the world to our hardworking team.', translation: 'Nếu quý khách có ít phút rảnh rỗi trên đường về, đội ngũ nhân viên chúng tôi sẽ vô cùng biết ơn nếu quý khách chia sẻ trải nghiệm kỳ nghỉ trên TripAdvisor hoặc Google ạ.' },
        casualStyle: { phrase: 'If you enjoyed your stay, a quick 5-star review on Google or TripAdvisor would mean the world to our team!', example: 'Drop us a quick review online if you had a great time with us!', translation: 'Nếu mình thấy chuyến đi vui vẻ, một đánh giá 5 sao trên Google hay TripAdvisor sẽ là nguồn động viên to lớn cho cả đội ngũ tụi em á!' },
        superCasual: { phrase: 'Loved your stay? Drop us a quick 5 stars on Google, would mean the world!', example: 'Give us a shout-out on TripAdvisor if you had fun!', translation: 'Thấy vui thì cho tụi mình xin cái 5 sao trên Google ủng hộ nha, quý lắm luôn á!' }
      },
      {
        phrase: 'Please have a safe, pleasant flight home, and we eagerly await your return!',
        meaning: 'Lời chúc thượng lộ bình an và kỳ vọng ngày hội ngộ trong tương lai gần.',
        vietnamese: 'Kính chúc quý khách có một chuyến bay an toàn, êm ái về nhà, và chúng tôi rất mong ngóng ngày được đón tiếp quý khách quay trở lại!',
        business: { phrase: 'We wish you a safe, smooth journey home, and we eagerly look forward to welcoming you back to your home away from home in Vietnam.', example: 'Safe travels home, Sir, and we look forward to your next visit.', translation: 'Kính chúc quý khách có một hành trình trở về an toàn, thuận buồm xuôi gió, và chúng tôi rất mong chờ ngày được đón tiếp quý khách trở lại ngôi nhà thứ hai tại Việt Nam.' },
        casualStyle: { phrase: 'Safe travels on your flight back home, and make sure to visit us again on your next holiday!', example: 'Have a smooth trip back! See you guys next summer!', translation: 'Chúc anh/chị có chuyến bay về nhà bình an, và kỳ nghỉ tới nhớ lại ghé thăm tụi em nha!' },
        superCasual: { phrase: 'Fly safe and come back to visit us soon!', example: 'Safe flight home! See you next time!', translation: 'Bay an toàn và sớm quay lại quẩy tiếp với tụi mình nha!' }
      },
      {
        phrase: 'May I take this opportunity to present you with a small local gift as a token of our appreciation?',
        meaning: 'Trao quà lưu niệm tri ân của khách sạn khi làm thủ tục check-out cuối cùng.',
        vietnamese: 'Tôi xin phép được gửi tặng quý khách một món quà nhỏ đặc sản địa phương thay cho lời tri ân sâu sắc từ khách sạn ạ.',
        business: { phrase: 'May I present you with this handcrafted box of premium lotus tea as a humble token of our sincere appreciation for your stay.', example: 'Please accept this souvenir gift from our General Manager with our compliments.', translation: 'Tôi xin phép được kính tặng quý khách hộp trà sen thượng hạng thủ công này thay cho lời tri ân sâu sắc nhất vì đã lưu trú cùng chúng tôi ạ.' },
        casualStyle: { phrase: 'Here’s a little box of local cinnamon candy and coffee beans for you to enjoy on your flight home!', example: 'A little souvenir gift from our hotel team for you!', translation: 'Dạ tụi em có chút quà đặc sản kẹo quế với hạt cà phê gửi tặng anh/chị nhâm nhi trên máy bay về nước nè!' },
        superCasual: { phrase: 'Little gift from us for the road! Enjoy!', example: 'Here’s some local coffee to remember us by!', translation: 'Món quà kỷ niệm nhỏ gửi tặng bạn đi đường nè! Nhớ tụi mình nha!' }
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Full Shift Handover and VIP Guest Farewell',
        school: 'business',
        participants: [
          { name: "Receptionist Bao", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ReceptionistBao", role: "Hotel Staff" },
          { name: "Guest Mr. Kensington", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=GuestMr.Kensington", role: "Guest" },
          { name: "Guest Mrs. Kensington", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=GuestMrs.Kensington", role: "Guest" }
        ],
        lines: [
          { participant: "Receptionist Bao", text: 'Good afternoon Mr. and Mrs. Kensington. It is our pleasure to assist you with check-out today. Did you enjoy every aspect of your anniversary stay with us?', translation: 'Kính chào buổi chiều ông bà Kensington. Chúng tôi rất vinh hạnh được hỗ trợ hai vị làm thủ tục trả phòng hôm nay. Kỳ nghỉ kỷ niệm ngày cưới của hai vị tại khách sạn có thật sự trọn vẹn và ưng ý không ạ?' },
          { participant: "Guest Mr. Kensington", text: 'It was nothing short of magical, Bao. The anniversary cake, the rose petals, the private sunset dinner—your team exceeded all our dreams.', translation: 'Thật sự kỳ diệu không từ ngữ nào tả xiết, Bảo ạ. Chiếc bánh kỷ niệm, những cánh hoa hồng, bữa tối ngắm hoàng hôn riêng tư—đội ngũ của bạn đã vượt xa mọi mong ước của chúng tôi.' },
          { participant: "Receptionist Bao", text: 'Hearing that brings immense joy to our entire staff. Here is your finalized folio for review; room charges and dining have been settled via your corporate credit card. May I present this handcrafted silk scarf from our local village as a keepsake?', translation: 'Nghe được những lời này là niềm hạnh phúc vô bờ bến của toàn thể nhân viên chúng tôi. Kính gửi ông hồ sơ thanh toán hoàn tất; tiền phòng và ăn uống đã được tất toán qua thẻ tín dụng công ty. Tôi xin phép được gửi tặng hai vị chiếc khăn lụa tơ tằm dệt thủ công từ làng nghề truyền thống làm quà kỷ niệm ạ.' },
          { participant: "Guest Mrs. Kensington", text: 'Oh, this is exquisite! How extraordinarily thoughtful of you!', translation: 'Ôi, chiếc khăn đẹp tinh xảo quá! Các bạn chu đáo đến mức không ngờ!' },
          { participant: "Receptionist Bao", text: 'Our chauffeur is waiting by the executive sedan outside. Safe journey home, and we eagerly anticipate your next visit to our resort!', translation: 'Dạ bác tài xế riêng đang đợi hai vị cạnh chiếc xe sang trước sảnh rồi ạ. Chúc hai vị thượng lộ bình an, và chúng tôi rất nóng lòng mong đợi ngày được đón tiếp hai vị trong chuyến đi tiếp theo ạ!' }
        ]
      },
      {
        type: 'pair',
        title: 'Family Checkout with Interdepartmental Coordination',
        school: 'casual',
        participants: [
          { name: "Guest David", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=GuestDavid", role: "Guest" },
          { name: "Receptionist Trinh", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ReceptionistTrinh", role: "Hotel Staff" }
        ],
        lines: [
          { participant: "Guest David", text: 'Hi! Checking out of room 705. Our airport shuttle is arriving in 10 minutes.', translation: 'Chào em! Anh làm thủ tục trả phòng 705. Xe đưa đón ra sân bay tới trong 10 phút nữa.' },
          { participant: "Receptionist Trinh", text: 'Good morning Mr. David! Let me take care of that for you right now. (Speaks into radio): Bell team, please collect three suitcases from room 705, and Housekeeping please clear minibar 705.', translation: 'Dạ chào buổi sáng anh David! Để em xử lý nhanh gọn cho anh liền ạ. (Bấm bộ đàm): Đội hành lý hỗ trợ mang 3 kiện va li từ phòng 705 xuống, và buồng phòng kiểm tra nhanh minibar 705 giúp em nhé.' },
          { participant: "Guest David", text: 'We only had two sodas from the minibar yesterday.', translation: 'Nhà anh chỉ có uống hai lon nước ngọt trong tủ lạnh hôm qua thôi.' },
          { participant: "Receptionist Trinh", text: 'Yes, exactly two sodas for 60,000 VND. Total is settled, key cards received, and here are your suitcases arriving at the door right on time!', translation: 'Dạ chính xác hai lon nước ngọt 60.000 đồng ạ. Mọi chi phí đã xong xuôi, em đã nhận lại thẻ phòng, và hành lý của nhà mình cũng vừa xuống tới cửa sảnh đúng giờ luôn rồi ạ!' },
          { participant: "Guest David", text: 'Wow, talk about teamwork! Seamless and fast.', translation: 'Chà, đúng là tinh thần làm việc nhóm đỉnh cao! Nhanh thoăn thoắt và chuyên nghiệp ghê.' },
          { participant: "Receptionist Trinh", text: 'Thank you so much! Have a safe flight back to Singapore, and hope to see the kids again soon!', translation: 'Dạ cảm ơn anh nhiều! Chúc cả nhà bay về Singapore bình an, và hẹn sớm gặp lại hai bé dễ thương nha!' }
        ]
      },
      {
        type: 'pair',
        title: 'End of Shift Friendly Goodbye',
        school: 'superCasual',
        participants: [
          { name: "Receptionist Nam", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=ReceptionistNam", role: "Hotel Staff" },
          { name: "Guest Mark", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=GuestMark", role: "Guest" }
        ],
        lines: [
          { participant: "Receptionist Nam", text: 'Hey Mark! Handing over my shift to Linh for the night. Just wanted to say goodbye and make sure you’re enjoying the trip!', translation: 'Chào Mark nha! Mình chuẩn bị giao ca tối cho Linh rồi nè. Muốn ghé chào tạm biệt bạn một tiếng và xem chuyến đi chơi vui không á!' },
          { participant: "Guest Mark", text: 'Nam, you’ve been a legend! The restaurant you recommended last night was top tier.', translation: 'Nam ơi, bạn đỉnh thật sự! Quán ăn tối qua bạn chỉ cho mình ngon xuất sắc luôn á.' },
          { participant: "Receptionist Nam", text: 'Haha so glad you loved it! Linh’s got your back tonight if you need anything at all. Have a chill night and see you before you fly out Friday!', translation: 'Haha mừng quá vì bạn thích mê! Đêm nay có bạn Linh trực ca chăm sóc bạn chu đáo nha. Chúc bạn tối nay ngủ ngon và hẹn gặp lại trước khi bạn bay vào thứ Sáu nghen!' },
          { participant: "Guest Mark", text: 'Get some good rest man! See you tomorrow!', translation: 'Về nghỉ ngơi lấy sức nha bạn! Hẹn mai gặp lại nhé!' }
        ]
      }
    ]
  }
];
