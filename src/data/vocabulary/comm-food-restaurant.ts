import { Topic } from './types';

export const specificFood: Topic[] = [
  {
    id: 'food-01',
    title: 'Restaurant Dining & Table Service',
    vietnameseTitle: 'Phục vụ Nhà hàng & Gọi món tại bàn',
    category: 'Communication',
    subCategory: ['Food - Restaurant Services'],
    icon: '🍽️',
    color: '#E63946',
    description: 'Gọi món tại bàn, tùy biến khẩu vị độ cay (bún bò, bánh mì), phàn nàn đồ ăn nguội, gợi ý món ăn và thanh toán hóa đơn.',
    words: [
      { id: 'f1-01', word: 'Restaurant', ipa: '/ˈrestrɒnt/', definition: 'Nhà hàng phục vụ ăn uống', translation: 'Nhà hàng', example: 'We dined at a family-run Italian restaurant.', blankSentence: 'I booked a table at a luxury ____.', emoji: '🍽️' },
      { id: 'f1-02', word: 'Burger joint', ipa: '/ˈbɜːɡə dʒɔɪnt/', definition: 'Quán chuyên bán burger', translation: 'Quán burger', example: 'There is a popular burger joint around the corner.', blankSentence: 'Let\'s grab lunch at the local ____.', emoji: '🍔' },
      { id: 'f1-03', word: 'Side dish', ipa: '/saɪd dɪʃ/', definition: 'Món ăn kèm', translation: 'Món ăn kèm', example: 'Would you prefer fries or a salad as your side dish?', blankSentence: 'The steak comes with a delicious ____.', emoji: '🥗' },
      { id: 'f1-04', word: 'Beef noodle soup', ipa: '/biːf ˈnuːdl suːp/', definition: 'Món bún bò / phở bò', translation: 'Bún bò / Phở bò', example: 'This restaurant is famous for authentic beef noodle soup.', blankSentence: 'A hot bowl of ____ is perfect for breakfast.', emoji: '🍜' },
      { id: 'f1-05', word: 'Broth', ipa: '/brɒθ/', definition: 'Nước dùng, nước lèo', translation: 'Nước dùng/lèo', example: 'The rich broth is simmered for twelve hours.', blankSentence: 'The chef poured steaming hot ____ over the noodles.', emoji: '🥣' },
      { id: 'f1-06', word: 'Spicy', ipa: '/ˈspaɪsi/', definition: 'Cay nồng', translation: 'Vị cay', example: 'Could you please make it less spicy?', blankSentence: 'Be careful, this chili sauce is extremely ____.', emoji: '🌶️' },
      { id: 'f1-07', word: 'Reheat', ipa: '/ˌriːˈhiːt/', definition: 'Hâm nóng lại thức ăn', translation: 'Hâm nóng lại', example: 'Could you warm up or reheat my soup?', blankSentence: 'The soup went cold, please ____ it for me.', emoji: '🔥' },
      { id: 'f1-08', word: 'Recommend', ipa: '/ˌrekəˈmend/', definition: 'Gợi ý, đề xuất món', translation: 'Gợi ý món ăn', example: 'What dish do you recommend for dinner?', blankSentence: 'Could you ____ your best-selling specialty?', emoji: '⭐' },
      { id: 'f1-09', word: 'Bill / Check', ipa: '/bɪl / tʃek/', definition: 'Hóa đơn tính tiền', translation: 'Hóa đơn tính tiền', example: 'Excuse me, could we have the bill, please?', blankSentence: 'The waiter brought the ____ to our table.', emoji: '🧾' },
      { id: 'f1-10', word: 'Cutlery', ipa: '/ˈkʌtləri/', definition: 'Dao nĩa, muỗng đũa ăn', translation: 'Bộ dao muỗng nĩa', example: 'Could we get an extra set of cutlery?', blankSentence: 'The napkins and ____ are placed beside the plate.', emoji: '🍴' },
      { id: 'f1-11', word: 'Condiments', ipa: '/ˈkɒndɪmənts/', definition: 'Gia vị chấm (tương ớt, tương cà, xì dầu)', translation: 'Gia vị chấm', example: 'Condiments like ketchup and chili sauce are on the counter.', blankSentence: 'Pass me the ____, please.', emoji: '🧂' },
      { id: 'f1-12', word: 'Apologize', ipa: '/əˈpɒlədʒaɪz/', definition: 'Xin lỗi một cách chân thành', translation: 'Xin lỗi', example: 'I sincerely apologize for the delay.', blankSentence: 'We ____ for bringing the wrong order.', emoji: '🙏' }
    ],
    structures: [
      {
        phrase: 'I’d like to order..., please.',
        meaning: 'Mẫu câu lịch sự tiêu chuẩn khi gọi món tại nhà hàng.',
        vietnamese: 'Tôi muốn gọi món..., làm ơn.',
        business: { phrase: 'Good afternoon. I’d like to order a cheeseburger combo to go, please.', example: 'Good afternoon. I’d like to order a cheeseburger combo to go, please.', translation: 'Chào buổi chiều. Tôi xin phép được gọi một phần combo cheeseburger mang về ạ.' },
        casualStyle: { phrase: 'Hi, can I get a cheeseburger combo?', example: 'Hi, can I get a cheeseburger combo with fries?', translation: 'Chào bạn, cho mình gọi một combo cheeseburger nhé?' },
        superCasual: { phrase: 'A cheeseburger, please.', example: 'A cheeseburger and fries, please.', translation: 'Cho một cái cheeseburger.' }
      },
      {
        phrase: 'Could you make it less spicy / leave out...?',
        meaning: 'Yêu cầu điều chỉnh khẩu vị (ít cay, bỏ bớt nguyên liệu như ớt/hành).',
        vietnamese: 'Bạn có thể làm bớt cay / bỏ bớt... được không?',
        business: { phrase: 'Could you tell me how spicy the soup is, and make it mild, please?', example: 'Could you tell me how spicy the soup is, and make it mild, please?', translation: 'Xin hỏi món súp này có cay lắm không, và phiền bạn làm mức cay nhẹ giúp tôi nhé?' },
        casualStyle: { phrase: 'Is the beef noodle soup spicy? Less spicy for me, please.', example: 'Excuse me, is the noodle soup very spicy? Can you make it less spicy?', translation: 'Món bún bò có cay lắm không bạn? Làm ít cay cho mình nhé.' },
        superCasual: { phrase: 'Is this spicy? Less spicy, please.', example: 'No chili, extra cucumber, please.', translation: 'Cay không? Cho ít cay thôi / Không ớt nha.' }
      },
      {
        phrase: 'Could you warm it up / reheat this?',
        meaning: 'Phàn nàn lịch sự khi thức ăn bị nguội.',
        vietnamese: 'Bạn có thể hâm nóng lại món này giúp tôi được không?',
        business: { phrase: 'Excuse me, my soup is not very hot. Would it be possible to have it reheated?', example: 'Excuse me, my soup is not very hot. Would it be possible to have it reheated?', translation: 'Xin lỗi, món súp của tôi hơi nguội. Phiền bạn mang vào hâm nóng lại giúp tôi được không ạ?' },
        casualStyle: { phrase: 'Sorry, but my soup is a bit cold. Could you warm it up?', example: 'Sorry, but my soup is a bit cold. Could you warm it up?', translation: 'Xin lỗi bạn, súp hơi bị nguội rồi. Bạn hâm nóng lại giúp mình nhé?' },
        superCasual: { phrase: 'Excuse me, this soup is cold. Heat it up?', example: 'This soup is cold. Can you heat it up?', translation: 'Súp này nguội rồi. Làm nóng lại giùm với.' }
      },
      {
        phrase: 'Could we have the check / bill, please?',
        meaning: 'Yêu cầu tính tiền và hỏi phương thức thanh toán.',
        vietnamese: 'Cho chúng tôi xin hóa đơn tính tiền nhé.',
        business: { phrase: 'Excuse me, could we have the check, please? Do you accept credit cards?', example: 'Excuse me, could we have the check, please? Do you accept credit cards?', translation: 'Xin lỗi, cho chúng tôi xin hóa đơn tính tiền ạ. Quán có nhận thẻ tín dụng không?' },
        casualStyle: { phrase: 'Could we have the bill, please? Can I pay by card?', example: 'Could we have the bill, please? Can I pay by card?', translation: 'Cho mình xin hóa đơn nhé? Mình quẹt thẻ được không?' },
        superCasual: { phrase: 'Can I get the bill? Card okay?', example: 'Can I get the bill? One moment.', translation: 'Tính tiền đi. Trả thẻ được không?' }
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Formal Fine Dining Table Service & Taste Customization',
        school: 'business',
        participants: [
          { name: 'Waiter', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Waiter1', role: 'Server' },
          { name: 'Customer', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Customer1', role: 'Guest' }
        ],
        lines: [
          { participant: 'Waiter', text: 'Good evening. Are you ready to place your order?', translation: 'Chào buổi tối. Quý khách đã sẵn sàng gọi món chưa ạ?' },
          { participant: 'Customer', text: 'Yes, we are. We’d like one medium pepperoni pizza and beef noodle soup, please.', translation: 'Vâng. Chúng tôi muốn gọi một pizza pepperoni cỡ vừa và một tô bún bò.' },
          { participant: 'Customer', text: 'Could you tell me how spicy the beef noodle soup is? Could you make it mild, please?', translation: 'Xin hỏi món bún bò có cay lắm không ạ? Phiền bạn làm mức cay nhẹ giúp tôi.' },
          { participant: 'Waiter', text: 'Certainly. It is moderately spicy, but we will make it mild for you. Would you like any drinks?', translation: 'Chắc chắn rồi ạ. Độ cay vừa phải, nhưng bếp sẽ điều chỉnh cay nhẹ cho quý khách. Quý khách có muốn dùng đồ uống không?' },
          { participant: 'Customer', text: 'Two iced teas, please. Also, could we have a chicken sandwich without chili and with extra cucumber?', translation: 'Cho hai ly trà đá nhé. Ngoài ra, cho một bánh mì gà không ớt và thêm nhiều dưa chuột.' },
          { participant: 'Waiter', text: 'Of course. No chili and extra cucumber. I will place your order right away.', translation: 'Dạ vâng. Không ớt và thêm nhiều dưa chuột. Tôi sẽ lên đơn cho quý khách ngay ạ.' }
        ]
      },
      {
        type: 'pair',
        title: 'Ordering at Table & Customizing Taste with Server',
        school: 'casual',
        participants: [
          { name: 'Waiter', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Waiter1', role: 'Server' },
          { name: 'Customer', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Customer1', role: 'Guest' }
        ],
        lines: [
          { participant: 'Waiter', text: 'Are you ready to order, or do you need a few more minutes?', translation: 'Các bạn đã sẵn sàng gọi món chưa, hay cần thêm vài phút xem menu nữa?' },
          { participant: 'Customer', text: 'We’re ready! Can we get a medium pepperoni pizza and beef noodle soup?', translation: 'Tụi mình chọn xong rồi! Cho tụi mình một pizza pepperoni vừa và một bún bò nhé?' },
          { participant: 'Customer', text: 'Excuse me, is the beef noodle soup very spicy? Less spicy for me, please.', translation: 'À bạn ơi, bún bò có cay lắm không? Làm ít cay giúp mình nha.' },
          { participant: 'Waiter', text: 'Sure, no problem! It’s a little spicy, but I’ll tell the chef to make it mild. Any drinks?', translation: 'Dạ được chứ không sao! Bình thường hơi cay nhẹ, mình sẽ báo bếp làm ít cay. Các bạn uống gì không?' },
          { participant: 'Customer', text: 'Two iced teas. And can I get a chicken sandwich without chili and with extra cucumber?', translation: 'Hai trà đá nha. Với lại cho mình một bánh mì gà không ớt, thêm nhiều dưa chuột nhé.' },
          { participant: 'Waiter', text: 'Sure. No chili, extra cucumber. Anything else?', translation: 'Oke bạn. Không ớt, nhiều dưa chuột. Có cần thêm gì nữa không?' }
        ]
      },
      {
        type: 'pair',
        title: 'Fast Counter Food Order & Quick Modifiers',
        school: 'superCasual',
        participants: [
          { name: 'Waiter', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Waiter1', role: 'Server' },
          { name: 'Customer', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Customer1', role: 'Guest' }
        ],
        lines: [
          { participant: 'Waiter', text: 'Ready to order?', translation: 'Gọi món nha bạn?' },
          { participant: 'Customer', text: 'One medium pepperoni pizza and one sandwich, no chili, please.', translation: 'Một pizza pepperoni cỡ vừa và một bánh mì không ớt nha.' },
          { participant: 'Customer', text: 'Is the noodle soup spicy? Make it less spicy.', translation: 'Bún bò cay không? Làm ít cay thôi.' },
          { participant: 'Waiter', text: 'Sure thing. Anything to drink?', translation: 'Oke luôn. Uống gì không nè?' },
          { participant: 'Customer', text: 'Just two iced teas and water.', translation: 'Hai trà đá với nước lọc thôi.' }
        ]
      },
      {
        type: 'pair',
        title: 'Formal Guest Complaint Resolution & Bill Settlement',
        school: 'business',
        participants: [
          { name: 'Staff', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=StaffBill', role: 'Server' },
          { name: 'Customer', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=GuestBill', role: 'Client' }
        ],
        lines: [
          { participant: 'Customer', text: 'Excuse me, my soup is not very hot. Would it be possible to have it reheated?', translation: 'Xin lỗi, món súp của tôi không được nóng lắm. Bạn hâm nóng lại giúp tôi được không ạ?' },
          { participant: 'Staff', text: 'I sincerely apologize for that inconvenience. I’ll have it reheated for you immediately.', translation: 'Tôi thành thật xin lỗi vì sự bất tiện này. Tôi sẽ mang vào hâm nóng lại ngay lập tức cho quý khách ạ.' },
          { participant: 'Customer', text: 'Thank you. Also, could you recommend a dessert after this?', translation: 'Cảm ơn bạn. Nhân tiện bạn có thể gợi ý món tráng miệng sau bữa này không?' },
          { participant: 'Staff', text: 'Certainly. Our signature molten chocolate cake is very popular and customers really enjoy it.', translation: 'Dạ được chứ ạ. Bánh sô-cô-la tan chảy đặc trưng của quán rất nổi tiếng và được nhiều khách yêu thích.' },
          { participant: 'Customer', text: 'Excuse me, could we have the check, please? Do you accept credit cards?', translation: 'Xin lỗi, cho chúng tôi xin hóa đơn tính tiền. Quán có nhận thẻ tín dụng không ạ?' },
          { participant: 'Staff', text: 'Certainly. I’ll bring it right away. Yes, you can pay by card or in cash.', translation: 'Dạ có ạ. Tôi sẽ mang hóa đơn ra ngay. Quý khách có thể trả bằng thẻ hoặc tiền mặt.' }
        ]
      },
      {
        type: 'pair',
        title: 'Handling Food Temperature & Splitting the Bill',
        school: 'casual',
        participants: [
          { name: 'Staff', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=StaffBill', role: 'Server' },
          { name: 'Customer', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=GuestBill', role: 'Client' }
        ],
        lines: [
          { participant: 'Customer', text: 'Sorry, but my soup is a bit cold. Could you warm it up?', translation: 'Xin lỗi bạn nha, súp của mình hơi bị nguội. Bạn hâm nóng lại giúp mình được không?' },
          { participant: 'Staff', text: 'I’m so sorry about that! I’ll take it back to the kitchen right away.', translation: 'Ôi mình xin lỗi bạn nhiều nha! Mình sẽ đem vào bếp làm nóng lại ngay.' },
          { participant: 'Customer', text: 'Do you have any dessert recommendations?', translation: 'Bạn có gợi ý món tráng miệng nào ngon không?' },
          { participant: 'Staff', text: 'Yes, our grilled banana cake is super popular today!', translation: 'Có chứ, món bánh chuối nướng hôm nay cực kỳ đắt hàng luôn!' },
          { participant: 'Customer', text: 'Could we have the bill, please? Can I pay by card?', translation: 'Cho tụi mình xin hóa đơn nhé? Trả thẻ được đúng không?' },
          { participant: 'Staff', text: 'Of course. I’ll bring it right over. Yes, we accept cards.', translation: 'Tất nhiên rồi. Mình mang qua liền đây. Quán có nhận quẹt thẻ nha.' }
        ]
      },
      {
        type: 'pair',
        title: 'Fast Cold Food Fix & Quick Card Pay',
        school: 'superCasual',
        participants: [
          { name: 'Staff', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=StaffBill', role: 'Server' },
          { name: 'Customer', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=GuestBill', role: 'Client' }
        ],
        lines: [
          { participant: 'Customer', text: 'Excuse me, this soup is cold.', translation: 'Bạn ơi, súp này nguội ngắt à.' },
          { participant: 'Staff', text: 'Oh, sorry about that. I’ll heat it up right away.', translation: 'Ủa vậy hả, xin lỗi bạn nha. Để mình quay nóng lại liền.' },
          { participant: 'Customer', text: 'What do you recommend here?', translation: 'Ở đây có món gì ngon nhất?' },
          { participant: 'Staff', text: 'Our beef burger is killer and very good.', translation: 'Burger bò ở đây là đỉnh chóp luôn á.' },
          { participant: 'Customer', text: 'Can I get the bill? Card okay?', translation: 'Tính tiền đi bạn. Quẹt thẻ nha?' },
          { participant: 'Staff', text: 'Sure, one moment. Card is fine!', translation: 'Oke đợi xíu nha. Quẹt thẻ vô tư!' }
        ]
      }
    ]
  },
  {
    id: 'food-02',
    title: 'Takeaway, Customization & Reservations',
    vietnameseTitle: 'Mua mang đi, Trà sữa & Đặt bàn',
    category: 'Communication',
    subCategory: ['Food - Restaurant Services'],
    icon: '🧋',
    color: '#06D6A0',
    description: 'Gọi đồ mang đi (takeaway/to go), tùy biến trà sữa (đường, đá, topping), xử lý hết món thay thế, số thứ tự và đặt bàn trước.',
    words: [
      { id: 'f2-01', word: 'Takeaway / To go', ipa: '/ˈteɪkəweɪ / tuː ɡəʊ/', definition: 'Đồ ăn mang đi, không ngồi lại', translation: 'Mua mang về', example: 'I would like to order a burger to go, please.', blankSentence: 'Are you eating here or is it ____?', emoji: '🥡' },
      { id: 'f2-02', word: 'Dine-in / For here', ipa: '/daɪn ɪn / fɔː hɪə/', definition: 'Dùng bữa tại chỗ trong quán', translation: 'Ăn tại quán', example: 'We would prefer dine-in tonight.', blankSentence: 'Is this order for ____ or to go?', emoji: '🪑' },
      { id: 'f2-03', word: 'Toppings', ipa: '/ˈtɒpɪŋz/', definition: 'Thức rắc / topping thêm (trân châu, thạch, pudding)', translation: 'Topping thêm', example: 'What toppings do you have for bubble tea?', blankSentence: 'I want extra boba and jelly ____.', emoji: '🧋' },
      { id: 'f2-04', word: 'Pearls / Boba', ipa: '/pɜːlz / ˈbəʊbə/', definition: 'Hạt trân châu', translation: 'Trân châu đen/trắng', example: 'Can I get a large milk tea with chewy pearls?', blankSentence: 'I love black sugar ____ in my drink.', emoji: '⚫' },
      { id: 'f2-05', word: 'Sugar level', ipa: '/ˈʃʊɡə ˈlevl/', definition: 'Mức độ ngọt (không đường, 50% đường, ít đường)', translation: 'Mức đường', example: 'You can adjust the sugar level to half sugar or less sugar.', blankSentence: 'What ____ would you prefer for your tea?', emoji: '🍬' },
      { id: 'f2-06', word: 'Ice level', ipa: '/aɪs ˈlevl/', definition: 'Lượng đá trong đồ uống (không đá, ít đá)', translation: 'Lượng đá', example: 'I asked for less ice in my iced coffee.', blankSentence: 'Please set the ____ to no ice.', emoji: '🧊' },
      { id: 'f2-07', word: 'Out of stock', ipa: '/aʊt əv stɒk/', definition: 'Hết hàng, hết nguyên liệu', translation: 'Hết hàng/món', example: 'I am afraid we are out of stock for fries.', blankSentence: 'The popular dessert is currently ____.', emoji: '❌' },
      { id: 'f2-08', word: 'Substitute / Instead', ipa: '/ˈsʌbstɪtjuːt / ɪnˈsted/', definition: 'Món thay thế', translation: 'Thay thế / Thay vì', example: 'Can I get onion rings instead of fries?', blankSentence: 'We can ____ salad for the chips.', emoji: '🔄' },
      { id: 'f2-09', word: 'Order number', ipa: '/ˈɔːdə ˈnʌmbə/', definition: 'Mã số đơn hàng để nhận món', translation: 'Số thứ tự đơn hàng', example: 'Your order number is 25. Please wait by the counter.', blankSentence: 'They called my ____ when the food was ready.', emoji: '🔢' },
      { id: 'f2-10', word: 'Waiting time', ipa: '/ˈweɪtɪŋ taɪm/', definition: 'Thời gian ước tính chờ ra món', translation: 'Thời gian chờ', example: 'The estimated waiting time is about ten minutes.', blankSentence: 'How long is the ____ for takeaway?', emoji: '⏳' },
      { id: 'f2-11', word: 'Reservation / Book a table', ipa: '/ˌrezəˈveɪʃn / bʊk/', definition: 'Đặt chỗ / giữ bàn trước', translation: 'Đặt bàn trước', example: 'I would like to make a table reservation for four at 7 p.m.', blankSentence: 'Do we need a ____ on Friday nights?', emoji: '📅' },
      { id: 'f2-12', word: 'Onion rings', ipa: '/ˈʌnjən rɪŋz/', definition: 'Hành tây tẩm bột chiên giòn', translation: 'Hành tây chiên giòn', example: 'If fries are out, I will have crispy onion rings.', blankSentence: 'The combo comes with a basket of ____.', emoji: '🧅' }
    ],
    structures: [
      {
        phrase: 'For here or to go?',
        meaning: 'Hỏi khách muốn dùng tại quán hay đóng gói mang đi.',
        vietnamese: 'Dùng tại quán hay mang đi ạ?',
        business: { phrase: 'Would you prefer to dine in or take your order to go?', example: 'Would you prefer to dine in or take your order to go?', translation: 'Quý khách muốn dùng bữa tại đây hay mang đi ạ?' },
        casualStyle: { phrase: 'Sure! For here or to go?', example: 'Sure. For here or to go?', translation: 'Dạ được. Dùng ở đây hay mang đi bạn?' },
        superCasual: { phrase: 'For here or to go?', example: 'For here or to go?', translation: 'Ở đây hay mang về?' }
      },
      {
        phrase: 'Can I have [drink] with [sugar/ice level] and [toppings]?',
        meaning: 'Mẫu câu hoàn chỉnh gọi trà sữa theo yêu cầu riêng.',
        vietnamese: 'Cho tôi một [đồ uống] với [mức đường/đá] và [topping] nhé.',
        business: { phrase: 'I’d like a large milk tea with half sugar and less ice, and please add pearls.', example: 'I’d like a large milk tea with half sugar and less ice, please.', translation: 'Cho tôi một ly trà sữa cỡ lớn, 50% đường, ít đá và thêm trân châu ạ.' },
        casualStyle: { phrase: 'Can I have a large milk tea with half sugar, less ice, and pearls?', example: 'Can I have a large milk tea with half sugar and less ice?', translation: 'Cho mình một trà sữa size L, nửa đường, ít đá với trân châu nhé?' },
        superCasual: { phrase: 'One large milk tea, half sugar, less ice, pearls.', example: 'One milk tea, less sugar, no ice. Large, please.', translation: 'Một trà sữa lớn, ít ngọt, ít đá, trân châu.' }
      },
      {
        phrase: 'I’m afraid we’ve run out of... Can I get... instead?',
        meaning: 'Báo hết món và đề xuất / yêu cầu món thay thế.',
        vietnamese: 'Rất tiếc chúng tôi đã hết món... Tôi đổi sang món... được không?',
        business: { phrase: 'I’m afraid we’ve run out of fries. In that case, could I have onion rings instead?', example: 'I’m afraid we’ve run out of fries today. I apologize for the inconvenience.', translation: 'Rất tiếc là hôm nay quán đã hết khoai tây chiên. Trong trường hợp đó, tôi đổi sang hành tây chiên được không?' },
        casualStyle: { phrase: 'I’m sorry, we’re out of fries today. Can I get onion rings instead?', example: 'Oh, okay. Can I get onion rings instead?', translation: 'Tiếc quá hôm nay hết khoai tây rồi. Cho mình đổi qua hành chiên nhé?' },
        superCasual: { phrase: 'Sorry, no fries. Onion rings instead?', example: 'Okay, then onion rings.', translation: 'Hết khoai rồi. Lấy hành chiên nha.' }
      },
      {
        phrase: 'I’d like to make a reservation for [number] people at [time].',
        meaning: 'Mẫu câu chuẩn đặt bàn nhà hàng qua điện thoại.',
        vietnamese: 'Tôi muốn đặt bàn cho [số lượng] người vào lúc [giờ].',
        business: { phrase: 'Good evening. I’d like to make a reservation for four people at 7 p.m. this evening.', example: 'Good evening. I’d like to make a reservation for four people at 7 p.m. this evening.', translation: 'Chào buổi tối. Tôi muốn đặt một bàn cho 4 người vào lúc 7 giờ tối nay ạ.' },
        casualStyle: { phrase: 'Hi, I’d like to reserve a table for four at 7 p.m. tonight.', example: 'Hi, I’d like to reserve a table for four at 7 p.m. tonight.', translation: 'Chào bạn, mình muốn đặt bàn cho 4 người lúc 7 giờ tối nay.' },
        superCasual: { phrase: 'I’d like to book a table for four at 7.', example: 'I’d like to book a table for four at 7. Name: Nam.', translation: 'Đặt bàn 4 người lúc 7 giờ nhé. Tên Nam.' }
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Bespoke Beverage Customization & Sold-Out Handling',
        school: 'business',
        participants: [
          { name: 'Staff', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Barista1', role: 'Staff' },
          { name: 'Customer', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CustomerBoba', role: 'Customer' }
        ],
        lines: [
          { participant: 'Staff', text: 'Good afternoon. What can I get started for you today?', translation: 'Chào buổi chiều. Tôi có thể chuẩn bị món gì cho quý khách hôm nay ạ?' },
          { participant: 'Customer', text: 'I’d like a large milk tea with half sugar and less ice, and a cheeseburger combo to go, please.', translation: 'Cho tôi một ly trà sữa lớn 50% đường, ít đá và một combo cheeseburger mang về ạ.' },
          { participant: 'Staff', text: 'Certainly. Would you like to add any toppings? Also, I’m afraid we’ve run out of fries for the combo.', translation: 'Dạ được ạ. Quý khách có muốn thêm topping không? Ngoài ra, rất tiếc là khoai tây chiên cho combo đã hết rồi ạ.' },
          { participant: 'Customer', text: 'I see. Please add pearls to the tea, and could I have onion rings instead of fries?', translation: 'Tôi hiểu rồi. Cho thêm trân châu vào trà, và tôi đổi sang hành tây chiên thay cho khoai tây được không?' },
          { participant: 'Staff', text: 'Of course. Your order number is 25. Please wait by the counter and we’ll call your number when it’s ready.', translation: 'Chắc chắn rồi ạ. Số đơn của quý khách là 25. Xin mời đợi tại quầy, chúng tôi sẽ gọi số khi món sẵn sàng.' }
        ]
      },
      {
        type: 'pair',
        title: 'Ordering Bubble Tea & Handling Out of Stock',
        school: 'casual',
        participants: [
          { name: 'Staff', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Barista1', role: 'Staff' },
          { name: 'Customer', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CustomerBoba', role: 'Customer' }
        ],
        lines: [
          { participant: 'Staff', text: 'Hi there! What would you like today? For here or to go?', translation: 'Chào bạn! Hôm nay bạn dùng gì nè? Uống ở đây hay mang đi?' },
          { participant: 'Customer', text: 'To go, please. Can I have a large milk tea with half sugar, less ice, and pearls?', translation: 'Mang đi nhé. Cho mình một trà sữa lớn nửa đường, ít đá và trân châu nha?' },
          { participant: 'Staff', text: 'Sure! Did you also want the burger combo? I’m sorry, we’re out of fries today.', translation: 'Được chứ! Bạn có lấy thêm combo burger không? Tiếc là hôm nay hết khoai tây chiên rồi.' },
          { participant: 'Customer', text: 'Oh, okay. Can I get onion rings instead?', translation: 'Ồ vậy hả. Cho mình đổi qua hành tây chiên giòn nhé?' },
          { participant: 'Staff', text: 'Sure thing! Your order number is 25. Please wait over there, it’ll be ready in five minutes.', translation: 'Được luôn! Số thứ tự của bạn là 25. Bạn chờ bên kia nhé, khoảng 5 phút là có.' }
        ]
      },
      {
        type: 'pair',
        title: 'Fast Boba Order & Quick Ice-Sugar Tweaks',
        school: 'superCasual',
        participants: [
          { name: 'Staff', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Barista1', role: 'Staff' },
          { name: 'Customer', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CustomerBoba', role: 'Customer' }
        ],
        lines: [
          { participant: 'Staff', text: 'Hi! What can I get you? For here or to go?', translation: 'Hế lô! Uống gì bạn? Ở đây hay mang đi?' },
          { participant: 'Customer', text: 'To go. One large milk tea, less sugar, no ice, extra pearls.', translation: 'Mang đi. Một trà sữa lớn, ít đường, không đá, nhiều trân châu.' },
          { participant: 'Staff', text: 'Sorry, we don’t have fries for the combo.', translation: 'Hết khoai tây chiên rồi nha bạn.' },
          { participant: 'Customer', text: 'Okay, then onion rings. How long will it take?', translation: 'Vậy lấy hành chiên. Chờ lâu không?' },
          { participant: 'Staff', text: 'Your order number is 12. Wait over there, ready in two mins.', translation: 'Số đơn 12 nha. Ra góc kia đợi 2 phút là có liền.' }
        ]
      },
      {
        type: 'pair',
        title: 'Executive VIP Table Reservation by Phone',
        school: 'business',
        participants: [
          { name: 'Staff', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HostPizza', role: 'Receptionist' },
          { name: 'Customer', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NamPhone', role: 'Guest' }
        ],
        lines: [
          { participant: 'Customer', text: 'Good evening. I’d like to make a reservation for four people at 7 p.m. this evening.', translation: 'Chào buổi tối. Tôi muốn đặt trước một bàn cho 4 người lúc 7 giờ tối nay ạ.' },
          { participant: 'Staff', text: 'Certainly. May I have your name and a contact number, please?', translation: 'Dạ được chứ ạ. Xin phép cho tôi biết tên và số điện thoại liên hệ của quý khách?' },
          { participant: 'Customer', text: 'My name is Nam, and my phone number is 0123 456 789.', translation: 'Tên tôi là Nam, và số điện thoại là 0123 456 789.' },
          { participant: 'Staff', text: 'Thank you, Mr. Nam. A table for four is reserved. We will see you at 7 p.m. this evening.', translation: 'Cảm ơn anh Nam. Bàn 4 người đã được giữ chỗ. Hẹn gặp anh vào lúc 7 giờ tối nay ạ.' }
        ]
      },
      {
        type: 'pair',
        title: 'Booking a Dinner Table Over the Phone',
        school: 'casual',
        participants: [
          { name: 'Staff', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HostPizza', role: 'Receptionist' },
          { name: 'Customer', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NamPhone', role: 'Guest' }
        ],
        lines: [
          { participant: 'Customer', text: 'Hi, I’d like to reserve a table for four at 7 p.m. tonight.', translation: 'Chào bạn, mình muốn đặt một bàn cho 4 người lúc 7 giờ tối nay.' },
          { participant: 'Staff', text: 'Sure! Can I have your name and phone number?', translation: 'Dạ được! Bạn cho mình xin tên với số điện thoại nha?' },
          { participant: 'Customer', text: 'It’s Nam, 0123 456 789.', translation: 'Mình tên Nam, số 0123 456 789.' },
          { participant: 'Staff', text: 'Great, table for four booked for Nam at 7 p.m. See you tonight!', translation: 'Tuyệt, đã giữ bàn 4 người cho bạn Nam lúc 7h tối nhé. Hẹn gặp bạn tối nay!' }
        ]
      },
      {
        type: 'pair',
        title: 'Fast Table Reservation Text',
        school: 'superCasual',
        participants: [
          { name: 'Staff', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HostPizza', role: 'Receptionist' },
          { name: 'Customer', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NamPhone', role: 'Guest' }
        ],
        lines: [
          { participant: 'Customer', text: 'I’d like to book a table for four at 7.', translation: 'Đặt giùm bàn 4 người lúc 7 giờ nha.' },
          { participant: 'Staff', text: 'Okay, your name?', translation: 'Oke, bạn tên gì?' },
          { participant: 'Customer', text: 'Nam, 0123 456 789.', translation: 'Nam, 0123 456 789.' },
          { participant: 'Staff', text: 'Got it, Nam. See ya at 7.', translation: 'Xong rồi Nam nha. 7 giờ gặp.' }
        ]
      }
    ]
  },
  {
    id: 'food-03',
    title: 'Internal Co-worker Communication',
    vietnameseTitle: 'Giao tiếp Nội bộ Đồng nghiệp',
    category: 'Communication',
    subCategory: ['Food - Restaurant Services'],
    icon: '🤝',
    color: '#3A86FF',
    description: 'Hỗ trợ nhau khi đông khách, báo hết nguyên liệu trong kho, đổi ca làm việc và nhắc nhở giữ gìn vệ sinh quầy bàn.',
    words: [
      { id: 'f3-01', word: 'Give someone a hand', ipa: '/ɡɪv ... ə hænd/', definition: 'Giúp đỡ ai đó một tay', translation: 'Giúp một tay', example: 'Can you give me a hand at the counter?', blankSentence: 'I need you to ____ with these orders.', emoji: '✋' },
      { id: 'f3-02', word: 'Running low on', ipa: '/ˈrʌnɪŋ ləʊ ɒn/', definition: 'Đang sắp hết, cạn kiệt nguồn cung', translation: 'Sắp hết / cạn hàng', example: 'We are running low on burger buns and napkins.', blankSentence: 'The kitchen is ____ cooking oil.', emoji: '📉' },
      { id: 'f3-03', word: 'Storage / Stockroom', ipa: '/ˈstɔːrɪdʒ / ˈstɒkruːm/', definition: 'Kho chứa nguyên vật liệu', translation: 'Kho nguyên liệu', example: 'I will grab some boxes from the storage.', blankSentence: 'Check if we have extra cups in the ____.', emoji: '📦' },
      { id: 'f3-04', word: 'Swap shifts', ipa: '/swɒp ʃɪfts/', definition: 'Đổi ca làm việc với đồng nghiệp', translation: 'Đổi ca trực', example: 'Would you be able to swap shifts with me on Friday?', blankSentence: 'Can we ____ for tomorrow afternoon?', emoji: '🔄' },
      { id: 'f3-05', word: 'Cover someone', ipa: '/ˈkʌvə(r)/', definition: 'Làm thay / đỡ vị trí cho ai một lúc', translation: 'Trông / Đỡ ca hộ', example: 'Could you cover my table while I take a quick break?', blankSentence: 'I will ____ you while you are in the kitchen.', emoji: '🛡️' },
      { id: 'f3-06', word: 'Wipe the tables', ipa: '/waɪp ðə ˈteɪblz/', definition: 'Lau dọn bàn ăn sạch sẽ', translation: 'Lau dọn bàn', example: 'Could you please wipe the tables? They are kinda messy.', blankSentence: 'Use the disinfectant spray to ____.', emoji: '🧽' },
      { id: 'f3-07', word: 'Messy', ipa: '/ˈmesi/', definition: 'Bừa bộn, dính bẩn', translation: 'Bừa bộn, bẩn', example: 'The dining area is a bit messy after the rush.', blankSentence: 'Please clean up the ____ counter.', emoji: '🧹' },
      { id: 'f3-08', word: 'In a second / Right away', ipa: '/ɪn ə ˈsekənd/', definition: 'Ngay tức thì, trong chốc lát', translation: 'Lập tức / Ngay đây', example: 'Sure, I’ll be there in a second to help.', blankSentence: 'I will bring out the burger buns ____.', emoji: '⚡' }
    ],
    structures: [
      {
        phrase: 'Can you give me a hand? It’s getting busy.',
        meaning: 'Nhờ đồng nghiệp hỗ trợ khẩn cấp khi quầy hoặc bàn quá tải.',
        vietnamese: 'Bạn phụ mình một tay được không? Khách đang đông quá.',
        business: { phrase: 'Could you please assist me at the front counter? We are experiencing a high volume of guests.', example: 'Could you help me at the counter? We’re getting quite busy.', translation: 'Bạn có thể hỗ trợ mình ở quầy trước được không? Khách bắt đầu đông rồi ạ.' },
        casualStyle: { phrase: 'Hey, can you give me a hand at the counter? It’s getting really busy.', example: 'Hey, can you give me a hand at the counter? It’s getting really busy.', translation: 'Ê, ra quầy phụ mình một tay với? Khách đông nghẹt rồi nè.' },
        superCasual: { phrase: 'Help me out! Getting slammed here.', example: 'Give me a hand at the counter, bro!', translation: 'Cứu bồ với! Quầy đang ngập đơn nè.' }
      },
      {
        phrase: 'We’re running low on... Could you grab some from the storage?',
        meaning: 'Báo động sắp cạn nguyên liệu và nhờ lấy thêm từ kho.',
        vietnamese: 'Chúng ta sắp hết... Bạn lấy thêm từ kho ra được không?',
        business: { phrase: 'We are running low on burger buns. Could you please retrieve additional supplies from the storage?', example: 'We’re running low on burger buns. Could you get some more from the storage?', translation: 'Chúng ta sắp hết vỏ bánh burger. Bạn lấy thêm từ trong kho ra giúp mình nhé?' },
        casualStyle: { phrase: 'We’re running low on burger buns. I’ll grab some from the storage.', example: 'We’re running low on burger buns. Okay, I’ll grab some from storage.', translation: 'Sắp hết vỏ bánh burger rồi. Để mình vô kho lấy thêm ra.' },
        superCasual: { phrase: 'Almost out of buns! Grab some from the back.', example: 'Running low on buns, fetch more from storage!', translation: 'Hết vỏ bánh rồi! Vô kho bê ra lẹ.' }
      },
      {
        phrase: 'Would you be able to swap shifts with me on...?',
        meaning: 'Xin phép đổi ca làm việc một cách lịch sự với đồng nghiệp.',
        vietnamese: 'Bạn có thể đổi ca trực với mình vào ngày... được không?',
        business: { phrase: 'Would you be able to swap shifts with me on Friday? I am scheduled from 2 to 8 p.m.', example: 'Would you be able to swap shifts with me on Friday?', translation: 'Bạn có thể đổi ca thứ Sáu với mình được không? Ca của mình từ 2h đến 8h tối.' },
        casualStyle: { phrase: 'Can you swap shifts with me on Friday? What time is your shift?', example: 'Can you swap shifts with me on Friday? I’ll text you.', translation: 'Thứ Sáu đổi ca với mình được không? Ca của bạn mấy giờ?' },
        superCasual: { phrase: 'Swap shifts on Friday? Text me.', example: 'Can you take my Friday shift? I will cover yours Sunday.', translation: 'Đổi ca thứ Sáu nha? Nhắn tin sau nhé.' }
      },
      {
        phrase: 'Could you please wipe the tables? They’re kinda messy.',
        meaning: 'Nhắc nhở dọn dẹp và giữ vệ sinh không gian quán.',
        vietnamese: 'Bạn lau dọn mấy cái bàn giúp mình nhé? Đang hơi bẩn/bừa bộn.',
        business: { phrase: 'Could you please sanitize and wipe the dining tables? They require immediate attention.', example: 'Could you please wipe the tables? They’re a bit messy at the moment.', translation: 'Phiền bạn lau dọn và khử khuẩn các bàn ăn giúp mình nhé? Hiện đang hơi bừa bộn một chút.' },
        casualStyle: { phrase: 'Can you wipe the tables? They’re kinda messy. Sure, I’ll do it now.', example: 'Can you wipe the tables? They’re kinda messy.', translation: 'Bạn lau mấy cái bàn giúp mình với? Hơi bẩn rồi á. Được, mình làm liền.' },
        superCasual: { phrase: 'Wipe table 4 real quick, it’s messy.', example: 'Wipe these tables down, bro.', translation: 'Lau lẹ bàn số 4 giùm cái, dơ quá.' }
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Kitchen Inventory Audit & Shift Assistance',
        school: 'business',
        participants: [
          { name: 'Staff 1', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=StaffA', role: 'Server' },
          { name: 'Staff 2', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=StaffB', role: 'Server' }
        ],
        lines: [
          { participant: 'Staff 1', text: 'Could you please assist me at the counter? We’re getting quite busy with lunch orders.', translation: 'Bạn có thể hỗ trợ mình ở quầy được không? Khách gọi món ăn trưa đang khá đông.' },
          { participant: 'Staff 2', text: 'Of course. I’ll come over right away.', translation: 'Tất nhiên rồi. Mình sẽ qua ngay lập tức.' },
          { participant: 'Staff 1', text: 'Also, we’re running low on burger buns and cup lids. Could you get some more from the storage?', translation: 'Ngoài ra, chúng ta sắp hết vỏ bánh burger và nắp ly rồi. Bạn lấy thêm từ kho ra được không?' },
          { participant: 'Staff 2', text: 'Sure, I’ll bring them out now. While I do that, could you please wipe table number 3? It is a bit messy.', translation: 'Được chứ, mình sẽ mang ra ngay. Trong lúc đó, bạn lau giúp mình bàn số 3 nhé? Đang hơi bừa bộn.' },
          { participant: 'Staff 1', text: 'Certainly, I will take care of it right away.', translation: 'Chắc chắn rồi, mình sẽ dọn dẹp ngay.' }
        ]
      },
      {
        type: 'pair',
        title: 'Team Assistance & Supplies Check on Shift',
        school: 'casual',
        participants: [
          { name: 'Staff 1', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=StaffA', role: 'Server' },
          { name: 'Staff 2', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=StaffB', role: 'Server' }
        ],
        lines: [
          { participant: 'Staff 1', text: 'Hey, can you give me a hand at the counter? It’s getting really busy!', translation: 'Ê bạn ơi, ra quầy phụ mình một tay với? Khách đông nghẹt rồi nè!' },
          { participant: 'Staff 2', text: 'Sure, I’ll be there in a second!', translation: 'Oke, mình chạy ra liền đây!' },
          { participant: 'Staff 1', text: 'We’re running low on burger buns too. Can you grab some from the storage?', translation: 'Tụi mình cũng sắp hết vỏ burger rồi. Bạn vô kho lấy một ít ra nha?' },
          { participant: 'Staff 2', text: 'Got it, I’ll grab some now. Can you wipe the tables over there? They’re kinda messy.', translation: 'Biết rồi, mình đi lấy liền. Bạn lau mấy cái bàn bên kia giùm nha? Hơi bẩn xíu.' },
          { participant: 'Staff 1', text: 'Sure, I’ll do it right now. Thanks a lot!', translation: 'Oke, mình lau liền. Cảm ơn nhiều nha!' }
        ]
      },
      {
        type: 'pair',
        title: 'Fast Station Restock & Rush Hour Backup',
        school: 'superCasual',
        participants: [
          { name: 'Staff 1', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=StaffA', role: 'Server' },
          { name: 'Staff 2', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=StaffB', role: 'Server' }
        ],
        lines: [
          { participant: 'Staff 1', text: 'Yo, give me a hand here! We’re slammed.', translation: 'Ê cứu quầy với! Đang ngập mặt nè.' },
          { participant: 'Staff 2', text: 'Coming in hot, on my way!', translation: 'Có mặt liền, đang tới đây!' },
          { participant: 'Staff 1', text: 'Running low on buns, fetch a box from the back.', translation: 'Sắp hết bánh mì rồi, vô kho vác ra một thùng coi.' },
          { participant: 'Staff 2', text: 'On it. Wipe down table 5 real quick too.', translation: 'Oke làm liền. Lau lẹ bàn số 5 luôn nha.' }
        ]
      },
      {
        type: 'pair',
        title: 'Formal Roster Swapping & Manager Authorization',
        school: 'business',
        participants: [
          { name: 'Staff 1', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ColleagueA', role: 'Employee' },
          { name: 'Staff 2', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ColleagueB', role: 'Employee' }
        ],
        lines: [
          { participant: 'Staff 1', text: 'Would you be able to swap shifts with me on Friday? I have an urgent commitment.', translation: 'Bạn có thể đổi ca thứ Sáu với mình được không? Mình có việc gia đình đột xuất.' },
          { participant: 'Staff 2', text: 'Possibly. What time is your shift on that day?', translation: 'Có thể được. Ca của bạn hôm đó từ mấy giờ đến mấy giờ?' },
          { participant: 'Staff 1', text: 'I am scheduled to work from 2 to 8 p.m., and I can cover your Sunday shift in return.', translation: 'Ca của mình từ 2h đến 8h tối, và mình có thể làm bù lại ca Chủ nhật cho bạn.' },
          { participant: 'Staff 2', text: 'Okay, I think that is perfectly fine. I will inform the supervisor.', translation: 'Được rồi, như vậy rất ổn. Mình sẽ báo lại với quản lý nhé.' }
        ]
      },
      {
        type: 'pair',
        title: 'Shift Swapping & Scheduling with Peer',
        school: 'casual',
        participants: [
          { name: 'Staff 1', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ColleagueA', role: 'Employee' },
          { name: 'Staff 2', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ColleagueB', role: 'Employee' }
        ],
        lines: [
          { participant: 'Staff 1', text: 'Can you swap shifts with me on Friday?', translation: 'Thứ Sáu bạn đổi ca với mình được không?' },
          { participant: 'Staff 2', text: 'Maybe. What time is your shift?', translation: 'Chắc được á. Ca của bạn mấy giờ?' },
          { participant: 'Staff 1', text: 'I’m working from 2 to 8 p.m. I’ll cover your Sunday shift!', translation: 'Mình làm từ 2h tới 8h tối. Mình làm bù ca Chủ nhật cho bạn nha!' },
          { participant: 'Staff 2', text: 'Sounds like a plan! I’ll put it on the schedule.', translation: 'Hợp lý luôn! Để mình ghi vào lịch làm việc nhé.' }
        ]
      },
      {
        type: 'pair',
        title: 'Fast Shift Cover Ping Between Staff',
        school: 'superCasual',
        participants: [
          { name: 'Staff 1', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ColleagueA', role: 'Employee' },
          { name: 'Staff 2', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ColleagueB', role: 'Employee' }
        ],
        lines: [
          { participant: 'Staff 1', text: 'Can you take my Friday shift? 2 to 8 p.m.', translation: 'Gánh giùm ca thứ Sáu nha? 2h tới 8h tối.' },
          { participant: 'Staff 2', text: 'Deal, if you cover my Sunday morning.', translation: 'Chốt đơn, nếu ông gánh ca sáng Chủ nhật cho tôi.' },
          { participant: 'Staff 1', text: 'Deal! Texting the manager right now.', translation: 'Chốt luôn! Nhắn tin cho sếp liền đây.' }
        ]
      }
    ]
  },
  {
    id: 'food-04',
    title: 'Manager & Staff Operations',
    vietnameseTitle: 'Quản lý, Phản hồi & Xử lý Khiếu nại',
    category: 'Communication',
    subCategory: ['Food - Restaurant Services'],
    icon: '👔',
    color: '#8338EC',
    description: 'Họp giao ca giờ cao điểm, phản hồi hiệu suất và tốc độ phục vụ, quy trình giải quyết khiếu nại khách hàng, và quy định đồng phục bảng tên.',
    words: [
      { id: 'f4-01', word: 'Rush hour', ipa: '/ˈrʌʃ ˌaʊə(r)/', definition: 'Giờ cao điểm đông khách', translation: 'Giờ cao điểm', example: 'It might be very busy during lunch rush hour.', blankSentence: 'We need everyone at their stations during ____.', emoji: '🏃' },
      { id: 'f4-02', word: 'Promotion', ipa: '/prəˈməʊʃn/', definition: 'Chương trình khuyến mãi, ưu đãi', translation: 'Chương trình khuyến mãi', example: 'We have a special promotion today for new customers.', blankSentence: 'The lunch ____ brought in many guests.', emoji: '🏷️' },
      { id: 'f4-03', word: 'Fast and accurate', ipa: '/fɑːst ænd ˈækjərət/', definition: 'Nhanh chóng và chính xác không sai sót', translation: 'Nhanh và chính xác', example: 'Please make sure all orders are fast and accurate.', blankSentence: 'Speed is good, but orders must be ____.', emoji: '🎯' },
      { id: 'f4-04', word: 'Performance feedback', ipa: '/pəˈfɔːməns ˈfiːdbæk/', definition: 'Góp ý, nhận xét hiệu suất làm việc', translation: 'Nhận xét hiệu suất', example: 'I would like to give you some constructive feedback.', blankSentence: 'The manager gave helpful ____ after the shift.', emoji: '📊' },
      { id: 'f4-05', word: 'Handle a complaint', ipa: '/ˈhændl ə kəmˈpleɪnt/', definition: 'Xử lý lời phàn nàn, khiếu nại của khách', translation: 'Xử lý khiếu nại', example: 'If a customer complains, stay calm and listen carefully.', blankSentence: 'We must ____ with empathy and professionalism.', emoji: '🤝' },
      { id: 'f4-06', word: 'Replacement', ipa: '/rɪˈpleɪsmənt/', definition: 'Món đổi mới đền cho khách', translation: 'Đổi món mới', example: 'Offer a free replacement or a discount if necessary.', blankSentence: 'The chef prepared an immediate ____ dish.', emoji: '🔄' },
      { id: 'f4-07', word: 'Uniform', ipa: '/ˈjuːnɪfɔːm/', definition: 'Đồng phục nhân viên', translation: 'Đồng phục', example: 'Please make sure you wear your full uniform every day.', blankSentence: 'Staff must keep their ____ clean and neat.', emoji: '👕' },
      { id: 'f4-08', word: 'Name tag', ipa: '/ˈneɪm tæɡ/', definition: 'Bảng tên đeo ngực', translation: 'Bảng tên', example: 'It is important to wear your name tag so customers recognize you.', blankSentence: 'Don’t forget to pin your ____ on your shirt.', emoji: '📛' }
    ],
    structures: [
      {
        phrase: 'Please make sure orders are fast and accurate.',
        meaning: 'Quản lý nhắc nhở nhân viên duy trì tốc độ và độ chuẩn xác khi lên món.',
        vietnamese: 'Hãy đảm bảo các đơn hàng được làm nhanh và chính xác.',
        business: { phrase: 'We have a promotion today. Please ensure all orders are processed with speed and accuracy.', example: 'Please make sure orders are fast and accurate, and be extra friendly to new customers.', translation: 'Hôm nay chúng ta có chương trình khuyến mãi. Đề nghị đảm bảo mọi đơn hàng nhanh và chuẩn xác.' },
        casualStyle: { phrase: 'Let’s try to be faster during rush hour. Make sure orders are accurate.', example: 'Let’s try to be faster during rush hour. Let me know if you need support.', translation: 'Cố gắng đẩy nhanh tốc độ lúc cao điểm nhé. Nhớ kiểm tra đơn thật chuẩn.' },
        superCasual: { phrase: 'Keep orders fast and right! Rush is coming.', example: 'Fast and accurate, let’s crush this lunch shift!', translation: 'Làm nhanh và chuẩn nha! Cao điểm tới rồi.' }
      },
      {
        phrase: 'If a customer complains, stay calm, apologize, and offer a solution.',
        meaning: 'Quy tắc 3 bước xử lý phàn nàn: Bình tĩnh, Xin lỗi, Đưa giải pháp (đổi món/giảm giá).',
        vietnamese: 'Khi khách phàn nàn: Giữ bình tĩnh, xin lỗi trước và đưa giải pháp.',
        business: { phrase: 'When addressing customer complaints, remain calm, apologize sincerely, and offer a suitable replacement or discount.', example: 'Apologize first, then offer a solution, like a replacement or a discount if necessary.', translation: 'Khi xử lý khiếu nại: Giữ bình tĩnh, xin lỗi chân thành và đưa giải pháp đổi món hoặc chiết khấu.' },
        casualStyle: { phrase: 'If a customer is unhappy, stay calm, say sorry, and offer to replace the dish.', example: 'Apologize first, then offer a solution like a replacement.', translation: 'Nếu khách không hài lòng, cứ bình tĩnh, xin lỗi trước rồi đổi món mới cho khách.' },
        superCasual: { phrase: 'Stay chill, apologize, and remake the dish for them.', example: 'Stay calm and sort it out with a free replacement.', translation: 'Cứ bình tĩnh xin lỗi rồi làm lại đĩa mới cho khách.' }
      },
      {
        phrase: 'Please make sure you wear your full uniform and name tag.',
        meaning: 'Nhắc nhở tác phong và quy chuẩn đồng phục.',
        vietnamese: 'Nhớ mặc đồng phục đầy đủ và đeo bảng tên nhé.',
        business: { phrase: 'It is essential for brand standard that all staff wear full uniform and visible name tags.', example: 'Please make sure you wear your full uniform and name tag.', translation: 'Tiêu chuẩn yêu cầu tất cả nhân viên phải mặc đầy đủ đồng phục và đeo bảng tên rõ ràng.' },
        casualStyle: { phrase: 'Don’t forget your name tag and full uniform tomorrow.', example: 'It’s important for customers to recognize staff easily. Please bring it tomorrow.', translation: 'Khách hàng cần nhận biết nhân viên dễ dàng. Mai nhớ mang bảng tên đầy đủ nha.' },
        superCasual: { phrase: 'Wear your full uniform and tag tomorrow, don’t forget!', example: 'Full uniform and name tag on, please!', translation: 'Mặc đủ đồng phục với đeo bảng tên vào nha!' }
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Pre-Service Executive Operations & Shift Briefing',
        school: 'business',
        participants: [
          { name: 'Manager', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ManagerPro', role: 'Supervisor' },
          { name: 'Staff', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=StaffPro', role: 'Server' }
        ],
        lines: [
          { participant: 'Manager', text: 'Good morning team. We have a special promotion today, so it might be very busy during lunch.', translation: 'Chào buổi sáng cả đội. Hôm nay chúng ta có chương trình khuyến mãi đặc biệt, nên buổi trưa có thể sẽ rất đông khách.' },
          { participant: 'Staff', text: 'Understood. We are all prepared at our stations.', translation: 'Đã rõ ạ. Chúng em đều đã chuẩn bị sẵn sàng ở các vị trí.' },
          { participant: 'Manager', text: 'Please make sure orders are fast and accurate, and be extra friendly to new customers.', translation: 'Lưu ý đảm bảo các đơn hàng lên nhanh và chính xác nhé, và nhớ niềm nở với khách hàng mới.' },
          { participant: 'Manager', text: 'Regarding yesterday: you were very welcoming, but food timing was slightly delayed. Let’s focus on speed during peak hours.', translation: 'Về hôm qua: bạn rất niềm nở, nhưng thời gian ra món hơi bị chậm một chút. Chúng ta hãy tập trung đẩy nhanh tốc độ trong giờ cao điểm nhé.' },
          { participant: 'Staff', text: 'I understand completely. I will coordinate closely with the kitchen to improve delivery time.', translation: 'Em hiểu rồi ạ. Em sẽ phối hợp chặt chẽ với bếp để cải thiện thời gian ra món.' }
        ]
      },
      {
        type: 'pair',
        title: 'Rush Hour Briefing & Service Feedback',
        school: 'casual',
        participants: [
          { name: 'Manager', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ManagerPro', role: 'Supervisor' },
          { name: 'Staff', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=StaffPro', role: 'Server' }
        ],
        lines: [
          { participant: 'Manager', text: 'We have a big deal today, so lunch is going to be packed!', translation: 'Hôm nay có deal lớn đó nha, buổi trưa đảm bảo đông kín bàn luôn!' },
          { participant: 'Staff', text: 'Got it, I’ll be ready.', translation: 'Dạ rõ rồi, em chuẩn bị sẵn sàng rồi anh.' },
          { participant: 'Manager', text: 'I want to give a quick feedback about yesterday. You were great with customers, but orders came out a bit slowly during rush hour.', translation: 'Anh muốn góp ý nhanh về hôm qua. Em tiếp khách rất tốt, nhưng lúc cao điểm ra món hơi chậm xíu.' },
          { participant: 'Staff', text: 'I understand. I’ll pay more attention to the timing today.', translation: 'Dạ em hiểu. Hôm nay em sẽ chú ý tốc độ hơn.' },
          { participant: 'Manager', text: 'Great! Let me know if you need any extra hands.', translation: 'Tốt lắm! Cần thêm người hỗ trợ cứ ới anh nhé.' }
        ]
      },
      {
        type: 'pair',
        title: 'Fast Pre-Rush Huddle & Station Check',
        school: 'superCasual',
        participants: [
          { name: 'Manager', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ManagerPro', role: 'Supervisor' },
          { name: 'Staff', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=StaffPro', role: 'Server' }
        ],
        lines: [
          { participant: 'Manager', text: 'Big rush coming at noon, team! Let’s crush it.', translation: 'Trưa nay khách đông lắm nha anh em! Chiến hết mình nào.' },
          { participant: 'Staff', text: 'Ready when you are, boss!', translation: 'Tụi em sẵn sàng rồi sếp ơi!' },
          { participant: 'Manager', text: 'Keep the speed up today, yesterday was a bit slow on burgers.', translation: 'Tăng tốc độ hôm nay lên nha, hôm qua burger ra hơi chậm đó.' },
          { participant: 'Staff', text: 'Gotcha! We’ll be super fast today.', translation: 'Rõ luôn! Hôm nay bao nhanh nha sếp.' }
        ]
      },
      {
        type: 'pair',
        title: 'Senior Management Quality Audit & Uniform Compliance',
        school: 'business',
        participants: [
          { name: 'Manager', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Manager2', role: 'Supervisor' },
          { name: 'Staff', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Staff2', role: 'Server' }
        ],
        lines: [
          { participant: 'Manager', text: 'If a customer complains about cold food or wrong orders, always stay calm and listen attentively.', translation: 'Nếu khách hàng phàn nàn về đồ ăn nguội hoặc sai món, hãy luôn giữ bình tĩnh và lắng nghe chăm chú.' },
          { participant: 'Staff', text: 'What is the exact protocol we should follow?', translation: 'Quy trình chuẩn chúng em nên thực hiện là gì ạ?' },
          { participant: 'Manager', text: 'Apologize sincerely first, then offer a solution, such as an immediate replacement or a complimentary beverage.', translation: 'Hãy xin lỗi chân thành trước, sau đó đưa ra giải pháp như đổi món ngay lập tức hoặc tặng kèm đồ uống miễn phí.' },
          { participant: 'Manager', text: 'Also, please make sure you wear your full uniform and name tag tomorrow so guests can identify you easily.', translation: 'Ngoài ra, mai nhớ mặc đầy đủ đồng phục và đeo bảng tên để khách dễ nhận diện nhé.' },
          { participant: 'Staff', text: 'I apologize for forgetting my name tag today. I will definitely wear it tomorrow.', translation: 'Em xin lỗi vì hôm nay quên bảng tên. Ngày mai em chắc chắn sẽ đeo đầy đủ ạ.' }
        ]
      },
      {
        type: 'pair',
        title: 'Customer Complaint Resolution & Uniform Standards',
        school: 'casual',
        participants: [
          { name: 'Manager', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Manager2', role: 'Supervisor' },
          { name: 'Staff', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Staff2', role: 'Server' }
        ],
        lines: [
          { participant: 'Manager', text: 'If a customer is unhappy, don’t argue. Just stay calm and listen.', translation: 'Nếu khách không vừa ý, đừng tranh cãi nhé. Cứ bình tĩnh lắng nghe.' },
          { participant: 'Staff', text: 'Sure, should I get you right away?', translation: 'Dạ, em có cần gọi anh ra ngay không?' },
          { participant: 'Manager', text: 'Apologize first, and offer a fresh replacement. If they still complain, call me over.', translation: 'Xin lỗi trước và đề xuất đổi đĩa mới liền. Nếu khách vẫn khó chịu thì gọi anh qua.' },
          { participant: 'Manager', text: 'And don’t forget to bring your name tag tomorrow!', translation: 'Với lại mai nhớ mang bảng tên đi đó nha!' },
          { participant: 'Staff', text: 'Sorry about today, I left it on my desk. I will bring it tomorrow!', translation: 'Dạ em xin lỗi, hôm nay để quên ở bàn. Mai em đem theo liền!' }
        ]
      },
      {
        type: 'pair',
        title: 'Quick Apron & Name Tag Check',
        school: 'superCasual',
        participants: [
          { name: 'Manager', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Manager2', role: 'Supervisor' },
          { name: 'Staff', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Staff2', role: 'Server' }
        ],
        lines: [
          { participant: 'Manager', text: 'Any customer complaint? Stay chill, apologize, remake the dish.', translation: 'Khách phàn nàn gì là cứ bình tĩnh xin lỗi rồi làm lại đĩa mới nha.' },
          { participant: 'Staff', text: 'Got it! And where is my name tag?', translation: 'Rõ rồi ạ! Mà bảng tên em đâu rồi ta?' },
          { participant: 'Manager', text: 'You forgot it at home! Don’t forget tomorrow, alright?', translation: 'Quên ở nhà rồi chứ đâu! Mai nhớ đeo đó nghe chưa?' },
          { participant: 'Staff', text: 'Aye aye, boss!', translation: 'Dạ tuân lệnh sếp!' }
        ]
      }
    ]
  },
  {
    id: 'food-05',
    title: 'Food Advertising & Captions',
    vietnameseTitle: 'Quảng cáo, Viết Caption & Thu hút khách',
    category: 'Communication',
    subCategory: ['Food - Restaurant Services'],
    icon: '📢',
    color: '#F4A261',
    description: 'Từ vựng miêu tả hương vị đỉnh cao (juicy, crispy, rich broth, signature), các mẫu câu giật tít, caption quảng cáo mạng xã hội và lời kêu gọi hành động CTA.',
    words: [
      { id: 'f5-01', word: 'Juicy', ipa: '/ˈdʒuːsi/', definition: 'Mọng nước, mềm ngậy hấp dẫn', translation: 'Mọng nước / Đậm đà', example: 'Try our juicy grilled burgers with crispy fries.', blankSentence: 'The beef patty is remarkably tender and ____.', emoji: '🥩' },
      { id: 'f5-02', word: 'Crispy', ipa: '/ˈkrɪspi/', definition: 'Giòn rụm, vàng ươm', translation: 'Giòn rụm', example: 'Our golden crispy fries are a customer favorite.', blankSentence: 'Fried chicken with extra ____ skin.', emoji: '🍟' },
      { id: 'f5-03', word: 'Cheesy', ipa: '/ˈtʃiːzi/', definition: 'Ngập tràn phô mai béo ngậy', translation: 'Ngập tràn phô mai', example: 'Dig into our cheesy pizza slices today!', blankSentence: 'A piping hot and ____ Margherita pizza.', emoji: '🧀' },
      { id: 'f5-04', word: 'Signature dish', ipa: '/ˈsɪɡnətʃə dɪʃ/', definition: 'Món tủ, món đặc trưng làm nên tên tuổi', translation: 'Món đặc trưng của quán', example: 'Our signature dish is Vietnamese beef noodle soup.', blankSentence: 'Don\'t leave without tasting our chef\'s ____.', emoji: '⭐' },
      { id: 'f5-05', word: 'Homemade sauce', ipa: '/ˌhəʊmˈmeɪd sɔːs/', definition: 'Nước sốt tự làm thủ công', translation: 'Nước sốt nhà làm', example: 'Served with our secret homemade garlic sauce.', blankSentence: 'The pasta is tossed in rich ____.', emoji: '🥫' },
      { id: 'f5-06', word: 'Best value', ipa: '/best ˈvæljuː/', definition: 'Giá trị hời nhất, đáng tiền nhất', translation: 'Giá trị tốt nhất / Siêu hời', example: 'Our family lunch combo offers the best value in town.', blankSentence: 'This combo meal is undoubtedly our ____.', emoji: '💰' },
      { id: 'f5-07', word: 'Buy one get one free', ipa: '/baɪ wʌn ɡet wʌn friː/', definition: 'Mua 1 tặng 1 (BOGO)', translation: 'Mua 1 tặng 1', example: 'Grand opening deal: Buy one pizza, get one free!', blankSentence: 'Enjoy our exclusive ____ promotion on milk tea.', emoji: '🎁' },
      { id: 'f5-08', word: 'Limited-time offer', ipa: '/ˈlɪmɪtɪd taɪm ˈɒfə/', definition: 'Ưu đãi có thời hạn số lượng có hạn', translation: 'Ưu đãi có hạn', example: 'This is a limited-time offer. While supplies last!', blankSentence: 'Hurry up to catch this ____ before it ends!', emoji: '⏰' },
      { id: 'f5-09', word: 'Fast delivery', ipa: '/fɑːst dɪˈlɪvəri/', definition: 'Giao hàng hỏa tốc', translation: 'Giao hàng nhanh', example: 'Hot meals guaranteed with our super fast delivery.', blankSentence: 'Order on the app for free and ____.', emoji: '🛵' },
      { id: 'f5-10', word: 'Budget-friendly / Affordable', ipa: '/ˈbʌdʒɪt ˈfrendli/', definition: 'Giá cả phải chăng, vừa túi tiền', translation: 'Vừa túi tiền / Giá sinh viên', example: 'Enjoy tasty, budget-friendly meals every single day.', blankSentence: 'Our restaurant serves premium meals at ____ prices.', emoji: '💵' },
      { id: 'f5-11', word: 'Don’t miss out', ipa: '/dəʊnt mɪs aʊt/', definition: 'Đừng bỏ lỡ cơ hội', translation: 'Đừng bỏ lỡ', example: 'Special student discount today — don’t miss out!', blankSentence: '____ on our 50% happy hour discount!', emoji: '🚀' },
      { id: 'f5-12', word: 'While supplies last', ipa: '/waɪl səˈplaɪz lɑːst/', definition: 'Cho đến khi hết hàng', translation: 'Số lượng có hạn', example: 'Free topping with every milk tea, while supplies last.', blankSentence: 'Get your gift box today, ____!', emoji: '⏳' }
    ],
    structures: [
      {
        phrase: 'Try our [juicy/crispy] [dish] – perfect for [occasion]!',
        meaning: 'Mẫu câu quảng cáo món ăn ngắn gọn, thu hút trên banner / mạng xã hội.',
        vietnamese: 'Thưởng thức [món ăn] [mọng nước/giòn rụm] – sự lựa chọn hoàn hảo cho [dịp]!',
        business: { phrase: 'We invite you to experience our signature beef noodle soup with rich, authentic broth.', example: 'Homemade beef noodle soup with rich, authentic flavor – taste Vietnam in every bowl.', translation: 'Kính mời quý khách trải nghiệm bún bò đặc trưng với nước dùng nguyên bản đậm đà.' },
        casualStyle: { phrase: 'Try our juicy burgers with crispy fries – perfect for your quick lunch!', example: 'Try our juicy burgers with crispy fries – perfect for your quick lunch.', translation: 'Thử ngay burger mọng nước cùng khoai tây giòn rụm – chuẩn bài cho bữa trưa nhanh gọn!' },
        superCasual: { phrase: 'Craving juicy burgers? Grab yours now, 50% off!', example: 'Fresh milk tea with chewy boba – order now and get free toppings!', translation: 'Thèm burger ngập thịt? Múc liền tay giảm 50%!' }
      },
      {
        phrase: 'Grand opening / Happy hour: Buy one get one free. Limited-time offer!',
        meaning: 'Mẫu câu tung deal khuyến mãi khai trương / giờ vàng.',
        vietnamese: 'Khai trương / Giờ vàng: Mua một tặng một. Ưu đãi có hạn!',
        business: { phrase: 'Grand Opening Celebration: Enjoy an exclusive buy one get one free promotion on all specialty pizzas.', example: 'Grand opening: Buy one pizza, get one free. Limited-time offer.', translation: 'Khai trương tưng bừng: Tận hưởng ưu đãi mua 1 tặng 1 cho tất cả các loại pizza đặc biệt.' },
        casualStyle: { phrase: 'Grand opening deal: Buy one pizza, get one free today only!', example: 'Grand opening: Buy one pizza, get one free. Limited-time offer.', translation: 'Khuyến mãi khai trương: Mua một bánh pizza tặng ngay một bánh chỉ hôm nay!' },
        superCasual: { phrase: 'BOGO is on! Buy 1 get 1 free on all teas, don’t miss out!', example: 'Buy 1 get 1 free today! Grab yours while supplies last!', translation: 'Deal BOGO mua 1 tặng 1 toàn bộ trà sữa, chốt đơn lẹ kẻo lỡ!' }
      },
      {
        phrase: 'Fast, friendly service and great prices – your new favorite [place].',
        meaning: 'Slogan định vị thương hiệu dịch vụ ăn uống thân thiện, giá tốt.',
        vietnamese: 'Phục vụ nhanh nhẹn, thân thiện với giá cực tốt – điểm đến yêu thích mới của bạn.',
        business: { phrase: 'Exemplary culinary quality and attentive service – making us your premier dining destination.', example: 'Fast, friendly service and great prices – your new favorite burger place.', translation: 'Chất lượng ẩm thực chuẩn mực cùng phục vụ chu đáo – điểm hẹn ẩm thực hàng đầu của bạn.' },
        casualStyle: { phrase: 'Fast, friendly service and great prices – your new favorite burger place!', example: 'Fast, friendly service and great prices – your new favorite burger place.', translation: 'Phục vụ nhanh chóng, thân thiện với giá siêu hời – quán ruột mới của bạn!' },
        superCasual: { phrase: 'Dope food, killer vibe, cheap deals. Come hang out!', example: 'Best burgers in town, no cap. Grab yours today!', translation: 'Đồ ăn bao ngon, không gian chill, giá hạt dẻ. Ghé chơi liền!' }
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Strategic Culinary Campaign Pitch & Menu Promotion',
        school: 'business',
        participants: [
          { name: 'Marketer', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AdExec', role: 'Sales Lead' },
          { name: 'Customer', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=VIPGuest', role: 'Guest' }
        ],
        lines: [
          { participant: 'Marketer', text: 'Good evening. Welcome to our Grand Opening. We are currently offering an exclusive limited-time promotion.', translation: 'Chào buổi tối. Chào mừng quý khách đến với sự kiện Khai trương. Hiện chúng tôi đang có chương trình ưu đãi đặc biệt có thời hạn.' },
          { participant: 'Customer', text: 'That sounds marvelous. What does the grand opening special include?', translation: 'Nghe tuyệt vời quá. Chương trình đặc biệt khai trương gồm những gì vậy?' },
          { participant: 'Marketer', text: 'If you order our signature artisan pizza, you receive a second pizza free of charge, along with homemade iced tea.', translation: 'Nếu quý khách gọi món pizza thủ công đặc trưng, quý khách sẽ được tặng một bánh pizza thứ hai hoàn toàn miễn phí kèm trà đá nhà làm.' },
          { participant: 'Customer', text: 'That is truly an exceptional value. We will definitely place an order right now.', translation: 'Đó thực sự là một mức giá trị đặc biệt. Chúng tôi nhất định sẽ gọi món ngay bây giờ.' }
        ]
      },
      {
        type: 'pair',
        title: 'Pitching Promo Deals & Advertising Specials',
        school: 'casual',
        participants: [
          { name: 'Staff', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AdExec', role: 'Server' },
          { name: 'Customer', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=VIPGuest', role: 'Guest' }
        ],
        lines: [
          { participant: 'Staff', text: 'Hi guys! Check out our grand opening deal: Buy one pizza, get one free today!', translation: 'Chào các bạn! Xem ngay ưu đãi khai trương hôm nay nhé: Mua một pizza tặng một pizza!' },
          { participant: 'Customer', text: 'Wow, really? Does that apply to the cheesy pepperoni pizza too?', translation: 'Uầy thật hả bạn? Có áp dụng cho cả pizza pepperoni ngập phô mai không?' },
          { participant: 'Staff', text: 'Yes, all signature flavors! Plus you get free delivery if you order via our hotline.', translation: 'Đúng rồi, áp dụng tất cả các vị đặc trưng! Lại còn được miễn phí giao hàng nếu gọi hotline nữa nha.' },
          { participant: 'Customer', text: 'Awesome deal! Don’t miss out on this, let’s get two medium pizzas!', translation: 'Deal xịn quá! Không thể bỏ lỡ được, tụi mình lấy 2 cái pizza vừa nha!' }
        ]
      },
      {
        type: 'pair',
        title: 'Fast Social Media Promo Drop & Hashtag Ping',
        school: 'superCasual',
        participants: [
          { name: 'Staff', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AdExec', role: 'Server' },
          { name: 'Customer', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=VIPGuest', role: 'Guest' }
        ],
        lines: [
          { participant: 'Staff', text: 'Yo! BOGO promo today: Buy one juicy burger, get one free. Don’t miss out!', translation: 'Ê! Deal BOGO mua 1 tặng 1 burger mọng nước hôm nay nha. Đừng bỏ lỡ!' },
          { participant: 'Customer', text: 'No way, for real? Hook me up with the cheeseburger combo!', translation: 'Thật luôn á? Lên ngay cho tui một combo cheeseburger đi!' },
          { participant: 'Staff', text: 'Gotcha! Free crispy fries included while supplies last.', translation: 'Oke chốt đơn! Tặng kèm khoai tây giòn rụm số lượng có hạn nhen.' },
          { participant: 'Customer', text: 'Sweet, best value ever!', translation: 'Đỉnh chóp, hời nhất quả đất!' }
        ]
      }
    ]
  },
  {
    id: 'food-06',
    title: 'Dietary Restrictions, Allergens & Custom Requests',
    vietnameseTitle: 'Ăn kiêng, Dị ứng & Yêu cầu Món Đặc biệt',
    category: 'Communication',
    subCategory: ['Food - Restaurant Services'],
    icon: '🥗',
    color: '#10B981',
    description: 'Hỏi han và xử lý yêu cầu dị ứng (đậu phộng, hải sản, bơ sữa, gluten), các chế độ ăn chay (vegetarian, vegan), phòng tránh nhiễm khuẩn chéo trong bếp và tư vấn món thay thế an toàn.',
    words: [
      { id: 'f6-01', word: 'Allergy', ipa: '/ˈælədʒi/', definition: 'Tình trạng dị ứng thực phẩm', translation: 'Dị ứng', example: 'Do you have any food allergies we should be aware of?', blankSentence: 'Please inform us if you have any severe food ____.', emoji: '⚠️' },
      { id: 'f6-02', word: 'Allergic to', ipa: '/əˈlɜːdʒɪk tuː/', definition: 'Bị dị ứng với thành phần nào đó', translation: 'Bị dị ứng với...', example: 'I am highly allergic to peanuts and tree nuts.', blankSentence: 'My son is severely ____ dairy products.', emoji: '🥜' },
      { id: 'f6-03', word: 'Vegetarian', ipa: '/ˌvedʒəˈteəriən/', definition: 'Người ăn chay (không ăn thịt cá, có thể dùng trứng sữa)', translation: 'Ăn chay', example: 'We have a delicious vegetarian pasta with mushrooms.', blankSentence: 'Is this vegetable broth suitable for a strict ____?', emoji: '🥦' },
      { id: 'f6-04', word: 'Vegan', ipa: '/ˈviːɡən/', definition: 'Thuần chay (không dùng bất kỳ sản phẩm từ động vật, mật ong, bơ sữa)', translation: 'Thuần chay', example: 'This rich chocolate cake is one hundred percent vegan.', blankSentence: 'We offer plant-based cheese for our ____ guests.', emoji: '🌱' },
      { id: 'f6-05', word: 'Gluten-free', ipa: '/ˌɡluːtn ˈfriː/', definition: 'Không chứa gluten (dành cho người bệnh celiac hoặc kiêng lúa mì)', translation: 'Không chứa gluten', example: 'Do you offer gluten-free bread for sandwiches?', blankSentence: 'Our chef prepared a special ____ pizza crust.', emoji: '🌾' },
      { id: 'f6-06', word: 'Dairy-free', ipa: '/ˈdeəri friː/', definition: 'Không chứa sữa động vật hoặc bơ phô mai', translation: 'Không sữa động vật', example: 'Can I substitute dairy milk with oat milk?', blankSentence: 'This iced latte is made with ____ almond milk.', emoji: '🥛' },
      { id: 'f6-07', word: 'Cross-contamination', ipa: '/ˌkrɒs kənˌtæmɪˈneɪʃn/', definition: 'Nhiễm chéo giữa các nguyên liệu trong quá trình chế biến', translation: 'Lây nhiễm chéo trong bếp', example: 'We sanitize all cutting boards to prevent cross-contamination.', blankSentence: 'Our dedicated allergy station eliminates all risks of ____.', emoji: '🧼' },
      { id: 'f6-08', word: 'Seafood', ipa: '/ˈsiːfuːd/', definition: 'Hải sản (tôm, cua, mực, cá)', translation: 'Hải sản', example: 'Does this fried rice contain any shellfish or seafood?', blankSentence: 'She requested a meal completely free of ____.', emoji: '🦐' },
      { id: 'f6-09', word: 'Substitute', ipa: '/ˈsʌbstɪtjuːt/', definition: 'Thay thế thành phần nguyên liệu khác', translation: 'Thay thế', example: 'Can we substitute tofu for chicken in this curry?', blankSentence: 'You can ____ brown rice for white rice without extra charge.', emoji: '🔄' },
      { id: 'f6-10', word: 'Separate cookware', ipa: '/ˈseprət ˈkʊkweə(r)/', definition: 'Nồi chảo và dụng cụ nấu riêng biệt', translation: 'Dụng cụ nấu riêng', example: 'The chef always uses separate cookware for allergen-free meals.', blankSentence: 'We prepare your gluten-free dish using ____.', emoji: '🍳' }
    ],
    structures: [
      {
        phrase: 'Do you have any food allergies or dietary requirements?',
        meaning: 'Nhân viên chủ động hỏi khách về dị ứng hoặc chế độ ăn kiêng trước khi gọi món.',
        vietnamese: 'Quý khách có bị dị ứng thực phẩm hay có chế độ ăn kiêng nào không ạ?',
        business: { phrase: 'Before we take your order, may I ask if anyone at the table has food allergies or specific dietary restrictions?', example: 'Before we take your order, may I ask if anyone has food allergies?', translation: 'Trước khi ghi nhận gọi món, xin phép hỏi quý khách có ai bị dị ứng hay kiêng món gì không ạ?' },
        casualStyle: { phrase: 'Do you have any food allergies or dietary restrictions we should let the chef know?', example: 'Do you have any food allergies or dietary restrictions?', translation: 'Bạn có bị dị ứng hay kiêng ăn món gì để mình báo bếp không?' },
        superCasual: { phrase: 'Any allergies or special diet we should know?', example: 'Any food allergies? No nuts, no dairy?', translation: 'Có kiêng hay dị ứng gì không bạn?' }
      },
      {
        phrase: 'Could we make this dish [dairy-free / gluten-free / vegetarian]?',
        meaning: 'Khách hỏi xem nhà hàng có thể điều chỉnh cách nấu món ăn theo chế độ ăn riêng hay không.',
        vietnamese: 'Món này có thể nấu theo kiểu [không sữa / không gluten / ăn chay] được không?',
        business: { phrase: 'Would the chef be able to prepare the signature risotto without dairy butter or cheese, please?', example: 'Would the chef be able to prepare this risotto dairy-free?', translation: 'Bếp trưởng có thể nấu món risotto đặc trưng này mà không dùng bơ sữa hay phô mai được không ạ?' },
        casualStyle: { phrase: 'Can I get this pasta gluten-free, and swap the cream for tomato sauce?', example: 'Can I get this pasta gluten-free, please?', translation: 'Cho mình làm món mì này không gluten, và đổi sốt kem sang sốt cà chua được không?' },
        superCasual: { phrase: 'Can you make it vegan? No cheese or eggs.', example: 'Make it vegan, please. No cheese.', translation: 'Làm món này thuần chay giùm nhé, không phô mai trứng.' }
      },
      {
        phrase: 'I have a severe [peanut/shellfish] allergy. Can you ensure no cross-contamination?',
        meaning: 'Khách thông báo mức độ dị ứng nguy hiểm và yêu cầu đảm bảo an toàn tuyệt đối.',
        vietnamese: 'Tôi bị dị ứng [đậu phộng/hải sản] rất nặng. Quán có thể đảm bảo không bị dính chéo nguyên liệu không?',
        business: { phrase: 'I must mention that I have an acute peanut allergy. Could you verify with the head chef that separate cookware is used?', example: 'I have a severe nut allergy. Can you ensure no cross-contamination?', translation: 'Tôi xin lưu ý là tôi bị dị ứng đậu phộng rất nặng. Bạn có thể xác nhận với bếp trưởng dùng chảo riêng không ạ?' },
        casualStyle: { phrase: 'I’m super allergic to peanuts. Is there any chance of cross-contamination in the fryer?', example: 'I’m very allergic to shellfish. Is the oil shared?', translation: 'Mình bị dị ứng đậu phộng nặng lắm. Nồi chiên có bị chiên chung dính dầu không bạn?' },
        superCasual: { phrase: 'Deathly allergic to nuts, zero contact please!', example: 'No nuts at all, severe allergy, please be careful!', translation: 'Dị ứng hạt rất nặng, tuyệt đối không dính hạt nha bạn!' }
      },
      {
        phrase: 'Let me double-check with the chef right away to guarantee your safety.',
        meaning: 'Nhân viên trấn an khách và cam kết vào bếp kiểm tra kỹ danh sách thành phần gia vị.',
        vietnamese: 'Để tôi vào bếp kiểm tra kỹ lại với bếp trưởng ngay để đảm bảo an toàn tuyệt đối cho quý khách.',
        business: { phrase: 'I completely understand your concern. Allow me to consult directly with our executive chef to ensure absolute safety.', example: 'I will consult directly with the chef to ensure your meal is safe.', translation: 'Tôi hoàn toàn thấu hiểu mối lo của quý khách. Xin phép để tôi trao đổi trực tiếp với bếp trưởng để đảm bảo an toàn.' },
        casualStyle: { phrase: 'No worries at all! Let me double-check with the kitchen right now and mark your ticket as allergy priority.', example: 'Let me check with the kitchen to make sure it’s completely nut-free.', translation: 'Bạn yên tâm nhé! Để mình vô bếp hỏi kỹ lại liền và gắn nhãn ưu tiên dị ứng cho đơn của bạn.' },
        superCasual: { phrase: 'Got it, checking with the chef now. Safety first!', example: 'Checking with the kitchen right away, hang on!', translation: 'Hiểu rồi, mình đi hỏi bếp liền đây. An toàn là trên hết!' }
      }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'High-End Dining Allergy & Dietary Consultation',
        school: 'business',
        participants: [
          { name: 'Server', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ServerFine', role: 'Head Server' },
          { name: 'Guest', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=GuestAllergy', role: 'VIP Guest' }
        ],
        lines: [
          { participant: 'Server', text: 'Good evening, ladies and gentlemen. Before we proceed with the dinner menu, may I inquire if anyone at the table has any food allergies or specific dietary requirements?', translation: 'Chào buổi tối quý khách. Trước khi xem qua thực đơn tối, xin phép hỏi quý khách có ai bị dị ứng thực phẩm hay có yêu cầu ăn kiêng đặc biệt nào không ạ?' },
          { participant: 'Guest', text: 'Thank you for asking. Yes, I have a severe peanut and tree nut allergy, and my colleague is strictly vegetarian.', translation: 'Cảm ơn bạn đã hỏi. Tôi bị dị ứng đậu phộng và các loại hạt rất nặng, còn đồng nghiệp của tôi thì ăn chay trường.' },
          { participant: 'Server', text: 'Thank you for informing us. For your nut allergy, I will notify the head chef immediately to prepare your dishes with separate sanitized cookware to eliminate cross-contamination.', translation: 'Cảm ơn quý khách đã báo trước. Về phần dị ứng hạt, tôi sẽ báo ngay cho bếp trưởng dùng dụng cụ nấu riêng biệt đã tiệt trùng để triệt tiêu mọi rủi ro lây nhiễm chéo.' },
          { participant: 'Guest', text: 'That gives me complete peace of mind. Which vegetarian main course would you recommend for my colleague?', translation: 'Nghe vậy tôi hoàn toàn yên tâm. Bạn có thể gợi ý món chính chay nào ngon cho đồng nghiệp của tôi không?' },
          { participant: 'Server', text: 'Our truffle mushroom risotto is completely vegetarian and can also be prepared dairy-free if requested. It is extraordinarily flavorful.', translation: 'Món cơm Ý risotto nấm truffle của chúng tôi hoàn toàn chay và có thể làm không sữa nếu muốn. Hương vị vô cùng đậm đà tuyệt hảo ạ.' },
          { participant: 'Guest', text: 'Splendid! We will take the risotto and the grilled salmon without any nut garnishes, please.', translation: 'Tuyệt vời! Chúng tôi xin gọi món risotto và cá hồi nướng tuyệt đối không rắc vụn hạt trang trí nhé.' }
        ]
      },
      {
        type: 'pair',
        title: 'Casual Restaurant Ordering with Gluten-Free & Dairy-Free Options',
        school: 'casual',
        participants: [
          { name: 'Waiter', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=WaiterFriendly', role: 'Waiter' },
          { name: 'Diner', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DinerHealthy', role: 'Customer' }
        ],
        lines: [
          { participant: 'Waiter', text: 'Hi guys! Are you ready to order, or do you have any dietary restrictions we should know about?', translation: 'Chào các bạn! Các bạn đã sẵn sàng gọi món chưa, hay có cần lưu ý dị ứng gì không nè?' },
          { participant: 'Diner', text: 'Hi! Actually, I’m gluten intolerant, and my friend cannot have dairy products. Can we customize the burger combo?', translation: 'Chào bạn! Thật ra mình không dung nạp gluten, còn bạn mình thì không ăn được bơ sữa. Tụi mình có thể tùy chỉnh combo burger được không?' },
          { participant: 'Waiter', text: 'Absolutely! We have freshly baked gluten-free buns, and we can replace regular cheese with vegan cheese or sliced avocado.', translation: 'Dạ được chứ bạn ơi! Quán có sẵn vỏ bánh mì không gluten mới nướng, và tụi mình có thể đổi phô mai thường sang phô mai thuần chay hoặc bơ tươi thái lát.' },
          { participant: 'Diner', text: 'That sounds amazing! Are the crispy french fries fried in a dedicated fryer, or shared with breaded chicken?', translation: 'Nghe tuyệt quá! Cho mình hỏi thêm khoai tây chiên giòn có chiên trong nồi riêng không, hay chiên chung với gà tẩm bột vậy bạn?' },
          { participant: 'Waiter', text: 'Great question! We use a dedicated fryer exclusively for french fries, so there is zero gluten cross-contamination.', translation: 'Bạn hỏi chuẩn bài luôn! Quán có một nồi chiên riêng chỉ dành cho khoai tây thôi, nên bảo đảm không dính chút gluten nào hết.' },
          { participant: 'Diner', text: 'Awesome! We’ll get two gluten-free burgers with dairy-free cheese and two orders of fries, please!', translation: 'Đỉnh quá bạn ơi! Cho tụi mình hai burger không gluten với phô mai thuần chay và hai phần khoai tây chiên nhé!' }
        ]
      },
      {
        type: 'pair',
        title: 'Quick Counter Order with Severe Allergy Alert',
        school: 'superCasual',
        participants: [
          { name: 'Cashier', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CashierFast', role: 'Staff' },
          { name: 'Customer', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CustomerFast', role: 'Customer' }
        ],
        lines: [
          { participant: 'Customer', text: 'Hey, I need a chicken salad, but heads up: I’m deathly allergic to sesame and peanuts.', translation: 'Ê bạn, cho một salad gà, nhưng lưu ý nha: tui dị ứng đậu phộng với mè nặng lắm đó.' },
          { participant: 'Cashier', text: 'Got it! I’m tagging this order with a red allergy alert. The chef will change gloves and wipe down the station.', translation: 'Rõ luôn! Mình gắn thẻ báo động đỏ dị ứng liền. Bếp sẽ thay găng tay mới và lau sạch bàn làm.' },
          { participant: 'Customer', text: 'Thanks a ton, really appreciate the care! Any drinks with oat milk?', translation: 'Cảm ơn nhiều nha, chu đáo ghê! Có đồ uống nào pha sữa yến mạch không?' },
          { participant: 'Cashier', text: 'Yup, cold brew with creamy oat milk. No dairy, super safe. Ready in three mins!', translation: 'Có luôn, cà phê ủ lạnh sữa yến mạch béo ngậy. Không dính sữa bò, bao an toàn. 3 phút có liền nha!' }
        ]
      }
    ]
  }
];
