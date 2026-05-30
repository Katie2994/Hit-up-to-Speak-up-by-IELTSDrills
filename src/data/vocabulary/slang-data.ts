import { Topic } from './types';

export const slangTopics: Topic[] = [
  {
    id: 'slang-uk',
    title: 'British Slang',
    vietnameseTitle: 'Tiếng lóng Anh-Anh',
    category: 'Slang',
    icon: '🇬🇧',
    color: '#00247D',
    description: 'Slang terms commonly used in the United Kingdom.',
    words: [
      { id: 'suk-1', word: 'Mate', ipa: '/meɪt/', definition: 'A friend or companion.', translation: 'Bạn bè/Bạn đời', example: 'Cheers, mate!', blankSentence: 'He is my best ____.', emoji: '🤜' },
      { id: 'suk-2', word: 'Knackered', ipa: '/ˈnækərd/', definition: 'Extremely tired.', translation: 'Kiệt sức', example: 'I\'m absolutely knackered after work.', blankSentence: 'I feel ____ after that run.', emoji: '😫' },
      { id: 'suk-3', word: 'Bloke', ipa: '/bləʊk/', definition: 'A man.', translation: 'Gã/Anh chàng', example: 'He\'s a nice bloke.', blankSentence: 'Who is that ____ over there?', emoji: '🧔' },
      { id: 'suk-4', word: 'Quid', ipa: '/kwɪd/', definition: 'One pound sterling.', translation: 'Bảng Anh (đơn vị)', example: 'It cost ten quid.', blankSentence: 'Can you lend me a ____?', emoji: '💷' },
      { id: 'suk-5', word: 'Cheers', ipa: '/tʃɪəz/', definition: 'Thank you or goodbye.', translation: 'Cảm ơn/Cạn ly', example: 'Cheers for the help!', blankSentence: '____! See you later.', emoji: '🍻' },
      { id: 'suk-6', word: 'Banter', ipa: '/ˈbæntər/', definition: 'Playful and friendly teasing.', translation: 'Lời trêu đùa', example: 'It\'s just a bit of banter, don\'t take it seriously.', blankSentence: 'We had some great ____ at the pub.', emoji: '🗣️' },
      { id: 'suk-7', word: 'Gutted', ipa: '/ˈɡʌtɪd/', definition: 'Bitterly disappointed or upset.', translation: 'Cực kỳ thất vọng', example: 'I was absolutely gutted when my team lost.', blankSentence: 'He felt ____ after failing the exam.', emoji: '😫' },
      { id: 'suk-8', word: 'Chuffed', ipa: '/tʃʌft/', definition: 'Very pleased or happy.', translation: 'Hài lòng/Vui sướng', example: 'She was chuffed with her birthday present.', blankSentence: 'I\'m quite ____ about the good news.', emoji: '😁' },
      { id: 'suk-9', word: 'Barmy', ipa: '/ˈbɑːmi/', definition: 'Mad or crazy.', translation: 'Điên rồ/Kỳ quặc', example: 'That\'s a barmy idea!', blankSentence: 'You must be ____ to go out in this storm.', emoji: '🤪' },
      { id: 'suk-10', word: 'Gobsmacked', ipa: '/ˈɡɒbsmækt/', definition: 'Utterly astonished.', translation: 'Ngỡ ngàng/Sốc', example: 'I was gobsmacked when I heard the news.', blankSentence: 'She stood there completely ____.', emoji: '😲' },
    ]
  },
  {
    id: 'slang-us',
    title: 'American Slang',
    vietnameseTitle: 'Tiếng lóng Anh-Mỹ',
    category: 'Slang',
    icon: '🇺🇸',
    color: '#B22234',
    description: 'Slang terms popular in the United States.',
    words: [
      { id: 'sus-1', word: 'Dude', ipa: '/duːd/', definition: 'A man; used as a greeting.', translation: 'Anh bạn', example: 'Hey dude, what\'s up?', blankSentence: 'That ____ is really cool.', emoji: '🤙' },
      { id: 'sus-2', word: 'Buck', ipa: '/bʌk/', definition: 'One US dollar.', translation: 'Đô la Mỹ', example: 'It only costs five bucks.', blankSentence: 'I have ten ____ in my pocket.', emoji: '💵' },
      { id: 'sus-3', word: 'Awesome', ipa: '/ˈɔːsəm/', definition: 'Extremely impressive or daunting.', translation: 'Tuyệt vời', example: 'The movie was awesome!', blankSentence: 'That is ____!', emoji: '🤩' },
      { id: 'sus-4', word: 'For real', ipa: '/fɔːr rɪəl/', definition: 'Truly or honestly.', translation: 'Thật luôn', example: 'I\'m for real, I didn\'t see it.', blankSentence: 'Are you ____?', emoji: '💯' },
      { id: 'sus-5', word: 'No biggie', ipa: '/nəʊ ˈbɪɡi/', definition: 'Not a problem; it doesn\'t matter.', translation: 'Chuyện nhỏ', example: 'Don\'t worry about it, no biggie.', blankSentence: 'It\'s ____, I can do it.', emoji: '👌' },
      { id: 'sus-6', word: 'Cringe', ipa: '/krɪndʒ/', definition: 'Embarrassing or awkward.', translation: 'Đáng xấu hổ', example: 'That speech was so cringe.', blankSentence: 'Watching that old video makes me ____.', emoji: '😬' },
      { id: 'sus-7', word: 'Salty', ipa: '/ˈsɔːlti/', definition: 'Bitter or upset about something.', translation: 'Cay cú/Tức giận', example: 'He was salty after losing the game.', blankSentence: 'Don\'t be so ____ about it.', emoji: '🧂' },
      { id: 'sus-8', word: 'Bummer', ipa: '/ˈbʌmər/', definition: 'A disappointing or unpleasant situation.', translation: 'Sự thất vọng', example: 'It\'s a real bummer that it rained.', blankSentence: 'What a ____ we missed the concert.', emoji: '😮‍💨' },
      { id: 'sus-9', word: 'Binge', ipa: '/bɪndʒ/', definition: 'To indulge excessively in something (e.g., watching TV).', translation: 'Cày (phim)/Ăn uống vô độ', example: 'I intend to binge the whole series tonight.', blankSentence: 'We like to ____ watch Netflix on weekends.', emoji: '🍿' },
      { id: 'sus-10', word: 'Cram', ipa: '/kræm/', definition: 'To study intensively over a short period.', translation: 'Học nhồi nhét', example: 'I need to cram for my history test.', blankSentence: 'She was up all night trying to ____.', emoji: '📚' },
    ]
  },
  {
    id: 'slang-au',
    title: 'Australian Slang',
    vietnameseTitle: 'Tiếng lóng Anh-Úc',
    category: 'Slang',
    icon: '🇦🇺',
    color: '#00008B',
    description: 'Unique slang from "down under".',
    words: [
      { id: 'sau-1', word: 'G\'day', ipa: '/ɡəˈdeɪ/', definition: 'Common greeting for "Good day".', translation: 'Chào buổi sáng/ngày', example: 'G\'day, how are you going?', blankSentence: '____ mate!', emoji: '👋' },
      { id: 'sau-2', word: 'Barbie', ipa: '/ˈbɑːbi/', definition: 'Short for barbecue.', translation: 'Tiệc nướng', example: 'Let\'s throw some shrimp on the barbie.', blankSentence: 'We\'re having a ____ on Sunday.', emoji: '🍗' },
      { id: 'sau-3', word: 'Arvo', ipa: '/ˈɑːvəʊ/', definition: 'Afternoon.', translation: 'Buổi chiều', example: 'See you this arvo.', blankSentence: 'What are you doing this ____?', emoji: '☀️' },
      { id: 'sau-4', word: 'Straya', ipa: '/ˈstreɪə/', definition: 'Slang for Australia.', translation: 'Nước Úc', example: 'Best place in Straya.', blankSentence: 'Welcome to ____!', emoji: '🗺️' },
      { id: 'sau-5', word: 'Ripper', ipa: '/ˈrɪpə/', definition: 'Great, fantastic.', translation: 'Tuyệt đỉnh', example: 'That was a ripper of a game!', blankSentence: 'Have a ____ day!', emoji: '🥇' },
      { id: 'sau-6', word: 'Brekkie', ipa: '/ˈbreki/', definition: 'Breakfast.', translation: 'Bữa sáng', example: 'What\'s for brekkie?', blankSentence: 'Let\'s have eggs for ____.', emoji: '🍳' },
      { id: 'sau-7', word: 'Defo', ipa: '/ˈdefəʊ/', definition: 'Definitely.', translation: 'Chắc chắn', example: 'I will defo be there.', blankSentence: 'That\'s ____ the best movie I\'ve seen.', emoji: '💯' },
      { id: 'sau-8', word: 'Maccas', ipa: '/ˈmækəz/', definition: 'McDonald\'s restaurant.', translation: 'Cửa hàng McDonald\'s', example: 'Let\'s grab a burger from Maccas.', blankSentence: 'I\'m craving some fries from ____.', emoji: '🍔' },
      { id: 'sau-9', word: 'Servo', ipa: '/ˈsɜːvəʊ/', definition: 'Service or gas station.', translation: 'Trạm xăng', example: 'I need to stop at the servo for petrol.', blankSentence: 'I bought this pie at the ____.', emoji: '⛽' },
      { id: 'sau-10', word: 'Bogan', ipa: '/ˈbəʊɡən/', definition: 'An uncultured or unsophisticated person.', translation: 'Kẻ quê mùa', example: 'He is a bit of a bogan.', blankSentence: 'They stereotyped him as a ____.', emoji: '🚜' },
    ]
  },
  {
    id: 'slang-ca',
    title: 'Canadian Slang',
    vietnameseTitle: 'Tiếng lóng Anh-Canada',
    category: 'Slang',
    icon: '🇨🇦',
    color: '#FF0000',
    description: 'Friendly slang from the Great White North.',
    words: [
      { id: 'sca-1', word: 'Loonie', ipa: '/ˈluːni/', definition: 'A Canadian one-dollar coin.', translation: 'Đồng 1 đô Canada', example: 'I have a loonie for the laundry.', blankSentence: 'Give me a ____.', emoji: '🪙' },
      { id: 'sca-2', word: 'Toque', ipa: '/tuːk/', definition: 'A close-fitting knitted cap.', translation: 'Mũ len', example: 'Wear a toque, it\'s cold!', blankSentence: 'Put on your ____.', emoji: '🧶' },
      { id: 'sca-3', word: 'Double-double', ipa: '/ˌdʌbl ˈdʌbl/', definition: 'Coffee with two creams and two sugars.', translation: 'Cà phê 2 kem 2 đường', example: 'I\'ll have a double-double, please.', blankSentence: 'I need my ____.', emoji: '☕' },
      { id: 'sca-4', word: 'Kerfuffle', ipa: '/kəˈfʌfl/', definition: 'A commotion or fuss.', translation: 'Sự hỗn loạn/ầm ĩ', example: 'There was a bit of a kerfuffle.', blankSentence: 'What a ____!', emoji: '😵‍💫' },
      { id: 'sca-5', word: 'Eh', ipa: '/eɪ/', definition: 'Used at the end of a sentence for agreement.', translation: 'Nhỉ/Hả (cuối câu)', example: 'It\'s cold out, eh?', blankSentence: 'Nice weather, ____?', emoji: '🇨🇦' },
      { id: 'sca-6', word: 'Pop', ipa: '/pɒp/', definition: 'Soda or carbonated beverage.', translation: 'Nước ngọt/Soda', example: 'Can I get a can of pop?', blankSentence: 'I prefer drinking cola ____.', emoji: '🥤' },
      { id: 'sca-7', word: 'Timmies', ipa: '/ˈtɪmiz/', definition: 'Tim Hortons coffee shop.', translation: 'Quán Tim Hortons', example: 'I \'m stopping by Timmies for a donut.', blankSentence: 'Let\'s get a coffee at ____.', emoji: '☕' },
      { id: 'sca-8', word: 'Toonie', ipa: '/ˈtuːni/', definition: 'A Canadian two-dollar coin.', translation: 'Đồng 2 đô kiểu Canada', example: 'You\'ll need a toonie for the parking meter.', blankSentence: 'I found a ____ on the street.', emoji: '🪙' },
      { id: 'sca-9', word: 'Poutine', ipa: '/puːˈtiːn/', definition: 'Fries covered in cheese curds and gravy.', translation: 'Khoai tây chiên sốt', example: 'Poutine is a classic Canadian dish.', blankSentence: 'We ordered some delicious ____.', emoji: '🍟' },
      { id: 'sca-10', word: 'Keener', ipa: '/ˈkiːnər/', definition: 'Someone who is extremely eager or enthusiastic.', translation: 'Kẻ hăng hái thái quá', example: 'She is such a keener in class.', blankSentence: 'He is the real ____ of the group.', emoji: '🤓' },
    ]
  },
  {
    id: 'slang-nz',
    title: 'New Zealand Slang',
    vietnameseTitle: 'Tiếng lóng Anh-New Zealand',
    category: 'Slang',
    icon: '🇳🇿',
    color: '#00247D',
    description: 'Unique and quirky slang from the beautiful islands of New Zealand.',
    words: [
      { id: 'snz-1', word: 'Chur', ipa: '/tʃɜːr/', definition: 'Cheers, thank you, or an expression of agreement/greeting.', translation: 'Cảm ơn/Chào bạn', example: 'Chur, bro! Appreciate the help.', blankSentence: 'I just wanted to say ____ for the coffee.', emoji: '🤙' },
      { id: 'snz-2', word: 'Sweet as', ipa: '/swiːt æz/', definition: 'Great, awesome, or no problem.', translation: 'Tuyệt vời/Không sao', example: 'You can borrow my car tomorrow. Sweet as!', blankSentence: 'If you can make it tonight, that would be ____.', emoji: '😎' },
      { id: 'snz-3', word: 'Bro', ipa: '/broʊ/', definition: 'Brother or friend; a term of address.', translation: 'Chiến hữu/Người anh em', example: 'What\'s up, bro?', blankSentence: 'How have you been, ____?', emoji: '🤝' },
      { id: 'snz-4', word: 'Choice', ipa: '/tʃɔɪs/', definition: 'Excellent, awesome, or cool.', translation: 'Tuyệt đỉnh/Quá xịn', example: 'He gave me a choice seat at the game.', blankSentence: 'That lunch you cooked was absolute ____.', emoji: '🔥' },
      { id: 'snz-5', word: 'Dairy', ipa: '/ˈdeəri/', definition: 'A local corner convenience store or newsagent.', translation: 'Cửa hàng tiện lợi', example: 'Can you go to the dairy to buy some milk?', blankSentence: 'I need to grab an ice cream at the local ____.', emoji: '🏪' },
      { id: 'snz-6', word: 'Tiki tour', ipa: '/ˈtiːki tʊər/', definition: 'A scenic or roundabout route to get somewhere.', translation: 'Đi lòng vòng ngắm cảnh', example: 'We took a tiki tour through the forest instead of taking the highway.', blankSentence: 'We got lost and ended up taking a ____ of the city.', emoji: '🚗' },
      { id: 'snz-7', word: 'Yeah nah', ipa: '/jeə nɑː/', definition: 'Technically means "no", but polite (acknowledging first, then declining).', translation: 'Cũng đúng nhưng thôi', example: 'Yeah nah, I don\'t think I want to go out tonight.', blankSentence: '____, that doesn\'t sound like a good plan.', emoji: '🙅' },
      { id: 'snz-8', word: 'Wop-wops', ipa: '/wɒp wɒps/', definition: 'The middle of nowhere; extremely remote areas.', translation: 'Nơi khỉ ho cò gáy', example: 'They live out in the wop-wops, miles away from town.', blankSentence: 'His cabin is located somewhere in the ____.', emoji: '🪵' },
      { id: 'snz-9', word: 'Scran', ipa: '/skræn/', definition: 'Food, grub, or a delicious meal.', translation: 'Mồi ngon/Đồ ăn thức uống', example: 'Let\'s grab some decent scran from the bakery.', blankSentence: 'We need some proper ____ for the road trip.', emoji: '🍔' },
      { id: 'snz-10', word: 'Flat out', ipa: '/flæt aʊt/', definition: 'Extremely busy or at full capacity.', translation: 'Bận ngập đầu', example: 'I have been flat out with work all week.', blankSentence: 'She is ____ preparing for the product presentation.', emoji: '🏃‍♂️' }
    ]
  }
];
