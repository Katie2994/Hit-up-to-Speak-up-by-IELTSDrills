import { Topic } from './types';

export const ipaTopics: Topic[] = [
  {
    id: 'hts-ending-sounds',
    title: 'Quy Tắc Đuôi Chuẩn: -s/-es & -ed',
    vietnameseTitle: 'Quy Tắc Vàng Phát Âm Đuôi -s/-es & -ed Kèm Ngoại Lệ Tính Từ',
    category: 'Communication',
    subCategory: ['How to Speak'],
    icon: '⚡',
    color: '#E76F51',
    description: 'Quy tắc vàng: Vô thanh + Vô thanh, Hữu thanh + Hữu thanh, Nguyên âm + Hữu thanh; cùng bảng ngoại lệ tính từ -ed đọc /ɪd/ và âm xuýt -es đọc /ɪz/.',
    words: [
      { id: 'end-01', word: 'cups', ipa: '/kʌps/', definition: 'Đuôi -s phát âm là /s/ vô thanh sau phụ âm vô thanh /p/.', translation: 'những chiếc tách', example: 'She washes the coffee cups every morning.', blankSentence: 'She washes the coffee ____ every morning.', emoji: '☕' },
      { id: 'end-02', word: 'cats', ipa: '/kæts/', definition: 'Đuôi -s phát âm là /s/ vô thanh sau phụ âm vô thanh /t/.', translation: 'những chú mèo', example: 'Two friendly cats play in the backyard.', blankSentence: 'Two friendly ____ play in the backyard.', emoji: '🐱' },
      { id: 'end-03', word: 'books', ipa: '/bʊks/', definition: 'Đuôi -s phát âm là /s/ vô thanh sau phụ âm vô thanh /k/.', translation: 'những cuốn sách', example: 'He reads interesting books before going to sleep.', blankSentence: 'He reads interesting ____ before going to sleep.', emoji: '📚' },
      { id: 'end-04', word: 'buses', ipa: '/ˈbʌsɪz/', definition: 'Đuôi -es phát âm là /ɪz/ sau âm gió/xuýt /s/, thêm một âm tiết.', translation: 'những chuyến xe buýt', example: 'Public buses arrive every ten minutes.', blankSentence: 'Public ____ arrive every ten minutes.', emoji: '🚌' },
      { id: 'end-05', word: 'watches', ipa: '/ˈwɒtʃɪz/', definition: 'Đuôi -es phát âm là /ɪz/ sau âm xuýt /tʃ/, thêm một âm tiết.', translation: 'những chiếc đồng hồ', example: 'My father owns two luxury watches.', blankSentence: 'My father owns two luxury ____.', emoji: '⌚' },
      { id: 'end-06', word: 'boxes', ipa: '/ˈbɒksɪz/', definition: 'Đuôi -es phát âm là /ɪz/ sau âm x (/ks/), thêm một âm tiết.', translation: 'những chiếc hộp', example: 'Store the holiday decorations in wooden boxes.', blankSentence: 'Store the holiday decorations in wooden ____.', emoji: '📦' },
      { id: 'end-07', word: 'dogs', ipa: '/dɒɡz/', definition: 'Đuôi -s phát âm là /z/ hữu thanh sau phụ âm hữu thanh /ɡ/.', translation: 'những chú chó', example: 'Their loyal dogs guard the house all day.', blankSentence: 'Their loyal ____ guard the house all day.', emoji: '🐕' },
      { id: 'end-08', word: 'days', ipa: '/deɪz/', definition: 'Đuôi -s phát âm là /z/ hữu thanh sau nguyên âm đôi /eɪ/.', translation: 'những ngày', example: 'We spent three sunny days at the beach.', blankSentence: 'We spent three sunny ____ at the beach.', emoji: '☀️' },
      { id: 'end-09', word: 'looked', ipa: '/lʊkt/', definition: 'Đuôi -ed phát âm là /t/ vô thanh sau phụ âm vô thanh /k/.', translation: 'đã nhìn', example: 'He looked at the map to find the direction.', blankSentence: 'He ____ at the map to find the direction.', emoji: '👀' },
      { id: 'end-10', word: 'stopped', ipa: '/stɒpt/', definition: 'Đuôi -ed phát âm là /t/ vô thanh sau phụ âm vô thanh /p/.', translation: 'đã dừng lại', example: 'The red bus stopped right at the crossroad.', blankSentence: 'The red bus ____ right at the crossroad.', emoji: '🛑' },
      { id: 'end-11', word: 'cleaned', ipa: '/kliːnd/', definition: 'Đuôi -ed phát âm là /d/ hữu thanh sau phụ âm hữu thanh /n/.', translation: 'đã lau dọn', example: 'She cleaned the kitchen before going to bed.', blankSentence: 'She ____ the kitchen before going to bed.', emoji: '✨' },
      { id: 'end-12', word: 'played', ipa: '/pleɪd/', definition: 'Đuôi -ed phát âm là /d/ hữu thanh sau nguyên âm đôi /eɪ/.', translation: 'đã chơi', example: 'The children played football in the garden.', blankSentence: 'The children ____ football in the garden.', emoji: '⚽' },
      { id: 'end-13', word: 'wanted', ipa: '/ˈwɒntɪd/', definition: 'Đuôi -ed phát âm là /ɪd/ sau âm /t/ (quy tắc tiền-đô), thêm một âm tiết.', translation: 'đã muốn', example: 'She wanted to visit Paris last summer.', blankSentence: 'She ____ to visit Paris last summer.', emoji: '🗼' },
      { id: 'end-14', word: 'decided', ipa: '/dɪˈsaɪdɪd/', definition: 'Đuôi -ed phát âm là /ɪd/ sau âm /d/ (quy tắc tiền-đô), thêm một âm tiết.', translation: 'đã quyết định', example: 'They decided to buy a new electric vehicle.', blankSentence: 'They ____ to buy a new electric vehicle.', emoji: '🚗' },
      { id: 'end-15', word: 'naked', ipa: '/ˈneɪkɪd/', definition: 'TÍNH TỪ NGOẠI LỆ: Đuôi -ed luôn phát âm là /ɪd/ bất kể âm trước là gì.', translation: 'mắt trần / trần trụi', example: 'He could see the stars with his naked eyes.', blankSentence: 'He could see the stars with his ____ eyes.', emoji: '👁️' },
      { id: 'end-16', word: 'wicked', ipa: '/ˈwɪkɪd/', definition: 'TÍNH TỪ NGOẠI LỆ: Đuôi -ed luôn phát âm là /ɪd/.', translation: 'độc ác / tinh quái', example: 'The wicked witch lived in a dark castle.', blankSentence: 'The ____ witch lived in a dark castle.', emoji: '🧙' },
      { id: 'end-17', word: 'sacred', ipa: '/ˈseɪkrɪd/', definition: 'TÍNH TỪ NGOẠI LỆ: Đuôi -ed luôn phát âm là /ɪd/.', translation: 'thiêng liêng / thần thánh', example: 'This ancient temple is a sacred place for meditation.', blankSentence: 'This ancient temple is a ____ place for meditation.', emoji: '⛩️' },
      { id: 'end-18', word: 'beloved', ipa: '/bɪˈlʌvɪd/', definition: 'TÍNH TỪ NGOẠI LỆ: Đuôi -ed luôn phát âm là /ɪd/.', translation: 'yêu dấu / yêu quý', example: 'She returned to her beloved hometown after twenty years.', blankSentence: 'She returned to her ____ hometown after twenty years.', emoji: '💖' }
    ],
    structures: [
      {
        phrase: 'The cat jumps on the desks and looks at the cups.',
        meaning: 'Quy tắc Vô thanh + Vô thanh: các âm tận cùng /p, t, k/ khi thêm -s/-es luôn phát âm là /s/.',
        vietnamese: 'Chú mèo nhảy lên những chiếc bàn và nhìn vào những chiếc tách.',
        business: { phrase: 'The company develops new tech products that meet international standards.', example: 'The company develops new tech products that meet international standards.', translation: 'Công ty phát triển các sản phẩm công nghệ mới đáp ứng các tiêu chuẩn quốc tế. (develops, products, meets: đuôi /s/)' },
        casualStyle: { phrase: 'The cat jumps on the desks and looks at the cups.', example: 'The cat jumps on the desks and looks at the cups.', translation: 'Chú mèo nhảy lên những chiếc bàn và nhìn vào những chiếc tách. (jumps, desks, looks, cups: đuôi /s/)' },
        superCasual: { phrase: 'Cats, cups, desks—all end in sharp /s/ sounds!', example: 'Cats, cups, desks—all end in sharp /s/ sounds!', translation: 'Cats, cups, desks—tất cả đều có âm đuôi /s/ vô thanh sắc sảo!' }
      },
      {
        phrase: 'Public buses arrive, and the conductor watches the passengers.',
        meaning: 'Quy tắc Âm Gió/Xuýt: tận cùng /s, z, ʃ, tʃ, dʒ/ khi thêm -s/-es luôn phát âm là /ɪz/ (thêm 1 âm tiết).',
        vietnamese: 'Những chuyến xe buýt công cộng đến, và người soát vé quan sát các hành khách.',
        business: { phrase: 'The manager manages several branches and changes outdated policies.', example: 'The manager manages several branches and changes outdated policies.', translation: 'Người quản lý quản lý nhiều chi nhánh và thay đổi các chính sách lỗi thời. (manages, branches, changes: đuôi /ɪz/)' },
        casualStyle: { phrase: 'Public buses arrive, and the conductor watches the passengers.', example: 'Public buses arrive, and the conductor watches the passengers.', translation: 'Xe buýt công cộng đến, và người soát vé quan sát hành khách. (buses, watches: đuôi /ɪz/)' },
        superCasual: { phrase: 'Buses, watches, boxes—extra syllable with /ɪz/!', example: 'Buses, watches, boxes—extra syllable with /ɪz/!', translation: 'Buses, watches, boxes—thêm một âm tiết với đuôi /ɪz/!' }
      },
      {
        phrase: 'My friends love dogs, rooms with fresh air, and sunny days.',
        meaning: 'Quy tắc Hữu thanh + Hữu thanh & Nguyên âm + Hữu thanh: phụ âm rung và nguyên âm luôn thêm đuôi /z/.',
        vietnamese: 'Bạn bè của tôi yêu chó, những căn phòng thoáng khí, và những ngày nắng đẹp.',
        business: { phrase: 'Our partners deliver great solutions and expand our regional ties.', example: 'Our partners deliver great solutions and expand our regional ties.', translation: 'Các đối tác của chúng tôi cung cấp những giải pháp tuyệt vời và mở rộng các mối quan hệ khu vực. (partners, solutions, ties: đuôi /z/)' },
        casualStyle: { phrase: 'My friends love dogs, rooms with fresh air, and sunny days.', example: 'My friends love dogs, rooms with fresh air, and sunny days.', translation: 'Bạn bè tôi yêu chó, những căn phòng thoáng khí và những ngày nắng đẹp. (friends, dogs, rooms, days: đuôi /z/)' },
        superCasual: { phrase: 'Dogs, pens, days—vibrate your throat with /z/!', example: 'Dogs, pens, days—vibrate your throat with /z/!', translation: 'Dogs, pens, days—rung cổ họng với âm đuôi /z/!' }
      },
      {
        phrase: 'She looked at the map, stopped the car, and laughed.',
        meaning: 'Quy tắc Đuôi -ed Vô thanh: sau các âm vô thanh /p, k, f, s, ʃ, tʃ/ thì -ed phát âm là /t/.',
        vietnamese: 'Cô ấy đã nhìn vào bản đồ, dừng xe lại và bật cười.',
        business: { phrase: 'The team worked diligently, launched the platform, and reached all targets.', example: 'The team worked diligently, launched the platform, and reached all targets.', translation: 'Đội ngũ đã làm việc chăm chỉ, ra mắt nền tảng và đạt được mọi mục tiêu. (worked, launched, reached: đuôi /t/)' },
        casualStyle: { phrase: 'She looked at the map, stopped the car, and laughed.', example: 'She looked at the map, stopped the car, and laughed.', translation: 'Cô ấy đã nhìn vào bản đồ, dừng xe lại và bật cười. (looked, stopped, laughed: đuôi /t/)' },
        superCasual: { phrase: 'Looked, stopped, laughed—dry crisp /t/ at the end!', example: 'Looked, stopped, laughed—dry crisp /t/ at the end!', translation: 'Looked, stopped, laughed—âm /t/ dứt khoát sắc bén!' }
      },
      {
        phrase: 'He wanted to wait until they decided on the sacred project.',
        meaning: 'Quy tắc Đuôi -ed /ɪd/: sau âm /t, d/ (tiền-đô) và BẢNG TÍNH TỪ NGOẠI LỆ (naked, wicked, sacred, beloved...).',
        vietnamese: 'Anh ấy đã muốn chờ đợi cho đến khi họ quyết định về dự án thiêng liêng.',
        business: { phrase: 'The board decided on the budget and visited the sacred historical foundation.', example: 'The board decided on the budget and visited the sacred historical foundation.', translation: 'Hội đồng đã quyết định về ngân sách và đến thăm cơ sở lịch sử thiêng liêng. (decided, visited, sacred: đuôi /ɪd/)' },
        casualStyle: { phrase: 'He wanted to wait until they decided on the sacred project.', example: 'He wanted to wait until they decided on the sacred project.', translation: 'Anh ấy đã muốn đợi cho đến khi họ quyết định về dự án thiêng liêng. (wanted, decided, sacred: đuôi /ɪd/)' },
        superCasual: { phrase: 'Wanted, decided, beloved, naked—all end in /ɪd/!', example: 'Wanted, decided, beloved, naked—all end in /ɪd/!', translation: 'Wanted, decided, beloved, naked—tất cả đều có đuôi /ɪd/!' }
      }
    ],
    howToSpeak: [
      {
        type: 'ending_sounds',
        title: 'Bí Kíp 3 Quy Tắc Vàng & Bảng Ngoại Lệ Tính Từ -s/-es & -ed',
        description: 'Bấm nghe từng từ ví dụ để luyện phản xạ âm đuôi chuẩn xác 100% không bao giờ nuốt âm hay phát âm bừa.',
        theory: 'Âm đuôi (Final Sounds) là "linh hồn" của tiếng Anh. Nắm chắc 3 QUY TẮC VÀNG: 1) Vô thanh + Vô thanh (âm cuối vô thanh -> đuôi vô thanh /s/ hoặc /t/); 2) Hữu thanh + Hữu thanh (âm cuối phụ âm rung -> đuôi hữu thanh /z/ hoặc /d/); 3) Nguyên âm + Hữu thanh (tất cả nguyên âm đều rung -> đuôi /z/ hoặc /d/). ĐẶC BIỆT GHI NHỚ: Đuôi -es sau âm gió /s, z, ʃ, ʒ, tʃ, dʒ/ đọc là /ɪz/; Đuôi -ed sau /t, d/ đọc là /ɪd/; và BẢNG TÍNH TỪ ĐẶC BIỆT luôn đọc đuôi -ed là /ɪd/ (naked, wicked, sacred, beloved, ragged, crooked, learned, blessed, cursed, wretched).',
        items: [
          {
            sound: 'Quy Tắc 1: Đuôi -s/-es phát âm là /s/ (Vô Thanh + Vô Thanh)',
            rule: 'Khi từ tận cùng là các phụ âm vô thanh: /p/, /t/, /k/, /f/, /θ/',
            tip: 'Mẹo nhớ: "Thảo Phải Phục Thời Kiến" (θ, p, f, t, k) -> Dây thanh quản không rung, âm đuôi xì nhẹ sắc bén.',
            sentence: 'The cat jumps on the tops of two desks.',
            translation: 'Chú mèo nhảy lên mặt hai chiếc bàn làm việc. (Âm đuôi /s/ xì nhẹ sắc bén: jumps, tops, desks)',
            examples: [
              { word: 'cups', ipa: '/kʌps/', translation: 'những chiếc tách (đuôi /p/)' },
              { word: 'cats', ipa: '/kæts/', translation: 'những con mèo (đuôi /t/)' },
              { word: 'books', ipa: '/bʊks/', translation: 'những cuốn sách (đuôi /k/)' },
              { word: 'laughs', ipa: '/lɑːfs/', translation: 'những tiếng cười (đuôi /f/)' },
              { word: 'months', ipa: '/mʌnθs/', translation: 'những tháng (đuôi /θ/)' }
            ]
          },
          {
            sound: 'Quy Tắc 2: Đuôi -s/-es phát âm là /ɪz/ (Âm Xuýt / Âm Gió)',
            rule: 'Khi từ tận cùng là các âm gió: /s/, /z/, /ʃ/, /tʃ/, /ʒ/, /dʒ/ (thường là s, ss, x, ch, sh, ce, ge)',
            tip: 'Mẹo nhớ: "Sóng Gió Chẳng Sợ Zó Giông" (s, z, ʃ, tʃ, ʒ, dʒ) -> Tạo thêm 1 âm tiết rõ rệt!',
            sentence: 'The actress watches the matches and washes the dishes.',
            translation: 'Nữ diễn viên xem các trận đấu và rửa bát đĩa. (Âm đuôi /ɪz/ thêm 1 âm tiết: watches, matches, washes, dishes)',
            examples: [
              { word: 'buses', ipa: '/ˈbʌsɪz/', translation: 'những chuyến xe buýt (đuôi /s/)' },
              { word: 'watches', ipa: '/ˈwɒtʃɪz/', translation: 'những chiếc đồng hồ (đuôi /tʃ/)' },
              { word: 'dishes', ipa: '/ˈdɪʃɪz/', translation: 'những cái đĩa (đuôi /ʃ/)' },
              { word: 'boxes', ipa: '/ˈbɒksɪz/', translation: 'những cái hộp (đuôi /ks/)' },
              { word: 'changes', ipa: '/ˈtʃeɪndʒɪz/', translation: 'những sự thay đổi (đuôi /dʒ/)' },
              { word: 'roses', ipa: '/ˈroʊzɪz/', translation: 'những bông hoa hồng (đuôi /z/)' }
            ]
          },
          {
            sound: 'Quy Tắc 3: Đuôi -s/-es phát âm là /z/ (Hữu Thanh + Hữu Thanh & Nguyên Âm)',
            rule: 'Khi từ tận cùng là nguyên âm hoặc phụ âm hữu thanh còn lại: /b, d, ɡ, v, ð, m, n, ŋ, l, r, w, j/',
            tip: 'Mẹo nhớ: Tất cả các nguyên âm và phụ âm rung cổ họng còn lại. Đặt tay lên cổ sẽ thấy rung bần bật.',
            sentence: 'My friends love dogs, rooms, and sunny days.',
            translation: 'Những người bạn của tôi yêu chó, các căn phòng và những ngày đầy nắng. (Âm đuôi /z/ rung nhẹ)',
            examples: [
              { word: 'dogs', ipa: '/dɒɡz/', translation: 'những con chó (đuôi /ɡ/ rung)' },
              { word: 'pens', ipa: '/penz/', translation: 'những cây bút (đuôi /n/ rung)' },
              { word: 'rooms', ipa: '/ruːmz/', translation: 'những căn phòng (đuôi /m/ rung)' },
              { word: 'days', ipa: '/deɪz/', translation: 'những ngày (nguyên âm đôi /eɪ/)' },
              { word: 'cars', ipa: '/kɑːrz/', translation: 'những chiếc xe hơi (đuôi /r/)' }
            ]
          },
          {
            sound: 'Quy Tắc 4: Đuôi -ed phát âm là /t/ (Vô Thanh + Vô Thanh)',
            rule: 'Khi động từ tận cùng bằng các phụ âm vô thanh: /p/, /k/, /f/, /s/, /ʃ/, /tʃ/',
            tip: 'Mẹo nhớ: "Chính Phủ Phát Sách Không Thèm Share" (tʃ, p, f, s, k, θ, ʃ) -> Bật luồng hơi /t/ khô và dứt khoát.',
            sentence: 'She stopped, looked at the map, and laughed.',
            translation: 'Cô ấy đã dừng lại, nhìn vào bản đồ và bật cười. (Đuôi /t/ bật hơi dứt khoát: stopped, looked, laughed)',
            examples: [
              { word: 'stopped', ipa: '/stɒpt/', translation: 'đã dừng lại (đuôi /p/)' },
              { word: 'looked', ipa: '/lʊkt/', translation: 'đã nhìn (đuôi /k/)' },
              { word: 'laughed', ipa: '/lɑːft/', translation: 'đã cười (đuôi /f/)' },
              { word: 'washed', ipa: '/wɒʃt/', translation: 'đã giặt/rửa (đuôi /ʃ/)' },
              { word: 'watched', ipa: '/wɒtʃt/', translation: 'đã xem (đuôi /tʃ/)' },
              { word: 'missed', ipa: '/mɪst/', translation: 'đã bỏ lỡ (đuôi /s/)' }
            ]
          },
          {
            sound: 'Quy Tắc 5: Đuôi -ed phát âm là /d/ (Hữu Thanh + Hữu Thanh & Nguyên Âm)',
            rule: 'Khi động từ tận cùng bằng các âm hữu thanh còn lại (tất cả nguyên âm và phụ âm rung)',
            tip: 'Mẹo nhớ: Toàn bộ động từ có âm cuối rung cổ họng. Phát âm âm /d/ trầm ấm liền mạch.',
            sentence: 'We played games, cleaned the room, and loved the dinner.',
            translation: 'Chúng tôi đã chơi game, dọn dẹp phòng và rất thích bữa tối. (Đuôi /d/ trầm ấm: played, cleaned, loved)',
            examples: [
              { word: 'played', ipa: '/pleɪd/', translation: 'đã chơi (nguyên âm /eɪ/)' },
              { word: 'cleaned', ipa: '/kliːnd/', translation: 'đã dọn dẹp (phụ âm /n/)' },
              { word: 'loved', ipa: '/lʌvd/', translation: 'đã yêu thích (phụ âm /v/)' },
              { word: 'opened', ipa: '/ˈoʊpənd/', translation: 'đã mở ra (phụ âm /n/)' },
              { word: 'called', ipa: '/kɔːld/', translation: 'đã gọi điện (phụ âm /l/)' }
            ]
          },
          {
            sound: 'Quy Tắc 6: Đuôi -ed phát âm là /ɪd/ (Sau âm /t/ hoặc /d/)',
            rule: 'Khi động từ tận cùng bằng âm /t/ hoặc /d/',
            tip: 'Mẹo nhớ: "Tiền - Đô" (t - d) -> Bắt buộc phát âm thêm 1 âm tiết /ɪd/ để không bị dính môi.',
            sentence: 'He wanted to wait until they decided.',
            translation: 'Anh ấy muốn đợi cho đến khi họ quyết định. (Đuôi /ɪd/ phát rõ âm tiết: wanted, decided)',
            examples: [
              { word: 'wanted', ipa: '/ˈwɒntɪd/', translation: 'đã muốn (đuôi /t/)' },
              { word: 'decided', ipa: '/dɪˈsaɪdɪd/', translation: 'đã quyết định (đuôi /d/)' },
              { word: 'needed', ipa: '/ˈniːdɪd/', translation: 'đã cần (đuôi /d/)' },
              { word: 'visited', ipa: '/ˈvɪzɪtɪd/', translation: 'đã ghé thăm (đuôi /t/)' }
            ]
          },
          {
            sound: 'Quy Tắc 7 ĐẶC BIỆT: Bảng Tính Từ -ed Ngoại Lệ Luôn Phát Âm Là /ɪd/',
            rule: 'Các TÍNH TỪ tận cùng bằng -ed luôn luôn phát âm là /ɪd/ bất kể âm trước là gì!',
            tip: 'Lưu ý vàng thi cử & giao tiếp chuẩn: naked, wicked, sacred, beloved, ragged, crooked, learned, blessed, cursed, wretched.',
            sentence: 'The beloved scholar studied the sacred text with his naked eyes.',
            translation: 'Học giả được kính yêu đã nghiên cứu văn bản thiêng liêng bằng chính đôi mắt trần của mình.',
            examples: [
              { word: 'naked', ipa: '/ˈneɪkɪd/', translation: 'mắt trần, trần trụi (tính từ)' },
              { word: 'wicked', ipa: '/ˈwɪkɪd/', translation: 'độc ác, tinh quái (tính từ)' },
              { word: 'sacred', ipa: '/ˈseɪkrɪd/', translation: 'thiêng liêng, trang nghiêm (tính từ)' },
              { word: 'beloved', ipa: '/bɪˈlʌvɪd/', translation: 'yêu dấu, người yêu quý (tính từ)' },
              { word: 'ragged', ipa: '/ˈræɡɪd/', translation: 'rách rưới, tả tơi (tính từ)' },
              { word: 'crooked', ipa: '/ˈkrʊkɪd/', translation: 'quanh co, cong queo (tính từ)' },
              { word: 'learned', ipa: '/ˈlɜːnɪd/', translation: 'uyên bác, thông thái (tính từ)' },
              { word: 'blessed', ipa: '/ˈblesɪd/', translation: 'may mắn, diễm phúc (tính từ)' },
              { word: 'cursed', ipa: '/ˈkɜːsɪd/', translation: 'đáng ghét, bị nguyền rủa (tính từ)' }
            ]
          },
          {
            sound: 'Quy Tắc 8: 12 Cụm Nối Âm Trải Dài Đa Dạng Tất Cả Trường Hợp -s/-es & -ed',
            rule: 'Khi từ tận cùng là -s, -es, -ed đứng trước nguyên âm, âm đuôi sẽ nối thẳng sang nguyên âm tiếp theo tạo dòng chảy liền mạch không ngắt hơi.',
            tip: '12 cụm chuẩn: cups of, cats and, books in, lives in, days off, buses arrive, watches over, boxes of, looked at, stopped it, cleaned up, decided on.',
            sentence: 'She washed the cups of coffee, stopped it, and cleaned up.',
            translation: 'Cô ấy rửa những tách cà phê, dừng lại và dọn dẹp sạch sẽ. (Nối âm: cups of -> cup-s‿of, stopped it -> stop-t‿it, cleaned up -> clean-d‿up)',
            examples: [
              { word: 'cups of', ipa: '/kʌp.səv/', translation: 'cup-s‿of (-s vô thanh)' },
              { word: 'cats and', ipa: '/kæt.sænd/', translation: 'cat-s‿and (-s vô thanh)' },
              { word: 'books in', ipa: '/bʊk.sɪn/', translation: 'book-s‿in (-s vô thanh)' },
              { word: 'lives in', ipa: '/lɪv.zɪn/', translation: 'live-z‿in (-s hữu thanh)' },
              { word: 'days off', ipa: '/deɪ.zɒf/', translation: 'day-z‿off (-s nguyên âm rung)' },
              { word: 'buses arrive', ipa: '/ˈbʌs.ɪ.zəˈraɪv/', translation: 'buse-s-ɪz‿arrive (-es âm gió)' },
              { word: 'watches over', ipa: '/ˈwɒtʃ.ɪ.zoʊ.vər/', translation: 'watche-s-ɪz‿over (-es âm xuýt)' },
              { word: 'boxes of', ipa: '/ˈbɒk.sɪ.zəv/', translation: 'boxe-s-ɪz‿of (-es âm gió)' },
              { word: 'looked at', ipa: '/lʊk.tæt/', translation: 'look-t‿at (-ed vô thanh /t/)' },
              { word: 'stopped it', ipa: '/stɒp.tɪt/', translation: 'stop-t‿it (-ed vô thanh /t/)' },
              { word: 'cleaned up', ipa: '/kliːn.dʌp/', translation: 'clean-d‿up (-ed hữu thanh /d/)' },
              { word: 'decided on', ipa: '/dɪˈsaɪ.dɪ.dɒn/', translation: 'decide-d-ɪd‿on (-ed đọc /ɪd/)' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'hts-minimal-pairs',
    title: 'Cặp Âm Dễ Nhầm Lẫn Của Người Việt',
    vietnameseTitle: 'Luyện Tai & Khẩu Hình: Phân Biệt Các Cặp Âm Dễ Gây Hiểu Lầm & Lỗi Nuốt Đuôi',
    category: 'Communication',
    subCategory: ['How to Speak'],
    icon: '🎯',
    color: '#264653',
    description: 'Tránh những pha hiểu lầm "dở khóc dở cười": so sánh trực diện sheep vs ship, bad vs bed, think vs sink, she vs see, và triệt tiêu lỗi nuốt phụ âm đuôi.',
    words: [
      { id: 'pair-01', word: 'sheep', ipa: '/ʃiːp/', definition: 'Âm i dài kéo căng mép sang hai bên như đang cười tươi, âm ngân dài.', translation: 'con cừu (i dài)', example: 'The white sheep is grazing on the green hill.', blankSentence: 'The white ____ is grazing on the green hill.', emoji: '🐑' },
      { id: 'pair-02', word: 'ship', ipa: '/ʃɪp/', definition: 'Âm i ngắn mở hẹp vừa phải, cơ miệng thả lỏng dứt khoát không ngân.', translation: 'con tàu (i ngắn)', example: 'The cargo ship sailed across the ocean.', blankSentence: 'The cargo ____ sailed across the ocean.', emoji: '🚢' },
      { id: 'pair-03', word: 'bed', ipa: '/bed/', definition: 'Âm e ngắn mở miệng vừa phải, âm phát ra tự nhiên dứt khoát.', translation: 'chiếc giường (e ngắn)', example: 'I go to bed early when I feel tired.', blankSentence: 'I go to ____ early when I feel tired.', emoji: '🛏️' },
      { id: 'pair-04', word: 'bad', ipa: '/bæd/', definition: 'Âm a bẹt mở rộng hết cỡ vòm miệng, hạ quai hàm tối đa.', translation: 'tồi tệ / xấu (a bẹt)', example: 'Eating too much sugar is bad for your teeth.', blankSentence: 'Eating too much sugar is ____ for your teeth.', emoji: '❌' },
      { id: 'pair-05', word: 'think', ipa: '/θɪŋk/', definition: 'Âm th kẹp lưỡi giữa hai hàm răng, thổi luồng hơi gió nhẹ ra ngoài không rung cổ.', translation: 'suy nghĩ (th thổi gió)', example: 'I think that learning English is very enjoyable.', blankSentence: 'I ____ that learning English is very enjoyable.', emoji: '🧠' },
      { id: 'pair-06', word: 'sink', ipa: '/sɪŋk/', definition: 'Hai hàm răng khép hờ, đầu lưỡi sát nướu răng trên xì gió sắc bén.', translation: 'bồn rửa / chìm (s xì răng)', example: 'Please wash your hands in the bathroom sink.', blankSentence: 'Please wash your hands in the bathroom ____.', emoji: '🚰' },
      { id: 'pair-07', word: 'she', ipa: '/ʃiː/', definition: 'Môi chu tròn hướng ra trước như ra hiệu im lặng "suỵt", đẩy luồng hơi êm.', translation: 'cô ấy (s nặng chu môi)', example: 'She is a talented and hardworking doctor.', blankSentence: '____ is an talented and hardworking doctor.', emoji: '👩' },
      { id: 'pair-08', word: 'see', ipa: '/siː/', definition: 'Hai hàm răng khép hờ xì gió nhẹ nhàng không chu môi.', translation: 'nhìn thấy (s nhẹ)', example: 'Can you see the stars in the night sky?', blankSentence: 'Can you ____ the stars in the night sky?', emoji: '👁️' },
      { id: 'pair-09', word: 'pool', ipa: '/puːl/', definition: 'Âm u dài môi chu tròn nhỏ như huýt sáo, cơ môi căng tròn ngân dài.', translation: 'hồ bơi (u dài)', example: 'We swim in the outdoor swimming pool every summer.', blankSentence: 'We swim in the outdoor swimming ____ every summer.', emoji: '🏊' },
      { id: 'pair-10', word: 'pull', ipa: '/pʊl/', definition: 'Âm u ngắn môi hơi tròn lơi, cơ môi thả lỏng phát âm dứt khoát.', translation: 'kéo vào (u ngắn)', example: 'Pull the door gently to open it.', blankSentence: '____ the door gently to open it.', emoji: '🚪' },
      { id: 'pair-11', word: 'cheap', ipa: '/tʃiːp/', definition: 'Chu môi nhẹ bật lưỡi vô thanh, không rung dây thanh quản.', translation: 'giá rẻ (ch vô thanh)', example: 'They bought cheap airline tickets for the holiday.', blankSentence: 'They bought ____ airline tickets for the holiday.', emoji: '🏷️' },
      { id: 'pair-12', word: 'jeep', ipa: '/dʒiːp/', definition: 'Chu môi bật lưỡi hữu thanh kết hợp rung mạnh thanh quản trong họng.', translation: 'xe jeep (j hữu thanh)', example: 'He drove an old military jeep through the desert.', blankSentence: 'He drove an old military ____ through the desert.', emoji: '🚙' },
      { id: 'pair-13', word: 'like', ipa: '/laɪk/', definition: 'Âm cuối bật hơi dứt khoát từ cuống lưỡi /k/, không được nuốt âm.', translation: 'thích (đuôi /k/)', example: 'I like reading books on rainy afternoons.', blankSentence: 'I ____ reading books on rainy afternoons.', emoji: '❤️' },
      { id: 'pair-14', word: 'life', ipa: '/laɪf/', definition: 'Âm cuối thổi hơi qua kẽ răng cửa trên và môi dưới /f/, không được nuốt âm.', translation: 'cuộc sống (đuôi /f/)', example: 'She lives a peaceful and happy life in the countryside.', blankSentence: 'She lives a peaceful and happy ____ in the countryside.', emoji: '🌿' }
    ],
    structures: [
      {
        phrase: 'Please do not leave while I live in this house.',
        meaning: 'Phân biệt cặp âm /iː/ vs /ɪ/: leave /liːv/ (ngân dài cười tươi) vs live /lɪv/ (ngắn dứt khoát).',
        vietnamese: 'Làm ơn đừng rời đi trong khi tôi đang sống ở ngôi nhà này.',
        business: { phrase: 'We intend to leave the office once our partners live up to the agreement.', example: 'Please do not leave while I live in this house.', translation: 'Chúng tôi dự định rời văn phòng sau khi đối tác thực hiện đúng cam kết. (leave vs live)' },
        casualStyle: { phrase: 'Please do not leave while I live in this house.', example: 'Please do not leave while I live in this house.', translation: 'Làm ơn đừng rời đi trong khi tôi đang sống ở ngôi nhà này. (leave /liːv/ vs live /lɪv/)' },
        superCasual: { phrase: 'Sheep on a ship, leave while you live—stretch that /iː/!', example: 'Sheep on a ship, leave while you live—stretch that /iː/!', translation: 'Cười tươi ngân dài âm /iː/ để người ta không nghe nhầm thành /ɪ/ nhé!' }
      },
      {
        phrase: 'The bad man slept in an uncomfortable bed.',
        meaning: 'Phân biệt cặp âm /e/ vs /æ/: bed /bed/ (mở miệng vừa) vs bad /bæd/ (hạ quai hàm mở to).',
        vietnamese: 'Người đàn ông xấu xa đã ngủ trên một chiếc giường không thoải mái.',
        business: { phrase: 'A bad investment strategy may put our entire budget to bed.', example: 'The bad man slept in an uncomfortable bed.', translation: 'Một chiến lược đầu tư tồi tệ có thể khép lại toàn bộ ngân sách của chúng ta. (bad vs bed)' },
        casualStyle: { phrase: 'The bad man slept in an uncomfortable bed.', example: 'The bad man slept in an uncomfortable bed.', translation: 'Người đàn ông xấu tính đã ngủ trên chiếc giường không thoải mái. (bad /bæd/ vs bed /bed/)' },
        superCasual: { phrase: 'Bad cat on a red bed—drop your jaw for /æ/!', example: 'Bad cat on a red bed—drop your jaw for /æ/!', translation: 'Hạ sâu quai hàm khi nói /æ/ nếu không người ta tưởng bạn nói /e/!' }
      },
      {
        phrase: 'I think that small wooden boat will not sink.',
        meaning: 'Phân biệt cặp âm /θ/ vs /s/: think /θɪŋk/ (kẹp đầu lưỡi thổi hơi) vs sink /sɪŋk/ (khép răng xì gió).',
        vietnamese: 'Tôi nghĩ rằng chiếc thuyền gỗ nhỏ đó sẽ không bị chìm đâu.',
        business: { phrase: 'We think this new product line will not sink our quarterly revenue.', example: 'I think that small wooden boat will not sink.', translation: 'Chúng tôi nghĩ dòng sản phẩm mới này sẽ không làm chìm doanh thu quý của chúng ta. (think vs sink)' },
        casualStyle: { phrase: 'I think that small wooden boat will not sink.', example: 'I think that small wooden boat will not sink.', translation: 'Tôi nghĩ rằng chiếc thuyền gỗ nhỏ đó sẽ không bị chìm đâu. (think /θɪŋk/ vs sink /sɪŋk/)' },
        superCasual: { phrase: 'Tongue between your teeth for think, teeth closed for sink!', example: 'Tongue between your teeth for think, teeth closed for sink!', translation: 'Kẹp lưỡi cho think, khép răng cho sink—đừng để I think thành Tôi chìm!' }
      },
      {
        phrase: 'She loves to stand by the shore to see the sea.',
        meaning: 'Phân biệt cặp âm /ʃ/ vs /s/: she /ʃiː/ (chu môi suỵt gió) vs see /siː/ (răng khép xì gió nhẹ).',
        vietnamese: 'Cô ấy thích đứng bên bờ biển để ngắm nhìn đại dương.',
        business: { phrase: 'She can see significant market opportunities in the renewable energy sector.', example: 'She loves to stand by the shore to see the sea.', translation: 'Cô ấy có thể nhìn thấy những cơ hội thị trường lớn trong lĩnh vực năng lượng tái tạo. (she vs see)' },
        casualStyle: { phrase: 'She loves to stand by the shore to see the sea.', example: 'She loves to stand by the shore to see the sea.', translation: 'Cô ấy thích đứng bên bờ để ngắm nhìn biển cả. (she /ʃiː/ vs see /siː/)' },
        superCasual: { phrase: 'Round lips for she, smile wide for see!', example: 'Round lips for she, smile wide for see!', translation: 'Chu môi tròn cho she, cười tươi xì nhẹ cho see!' }
      },
      {
        phrase: 'I like my life under the bright night lights.',
        meaning: 'Triệt tiêu lỗi nuốt phụ âm đuôi: like /laɪk/ vs life /laɪf/ vs light /laɪt/ vs line /laɪn/.',
        vietnamese: 'Tôi yêu cuộc sống của mình dưới ánh đèn đêm sáng rực rỡ.',
        business: { phrase: 'We would like to lead a life of innovation under the spotlight of global technology.', example: 'I like my life under the bright night lights.', translation: 'Chúng tôi muốn dẫn đầu một cuộc đời đổi mới dưới ánh đèn sân khấu công nghệ toàn cầu. (like, life, light)' },
        casualStyle: { phrase: 'I like my life under the bright night lights.', example: 'I like my life under the bright night lights.', translation: 'Tôi yêu cuộc sống của mình dưới ánh đèn đêm sáng rực. (bật rõ đuôi /k/, /f/, /t/)' },
        superCasual: { phrase: 'Like, life, light, line—never swallow your ending consonants!', example: 'Like, life, light, line—never swallow your ending consonants!', translation: 'Like, life, light, line—tuyệt đối không nuốt âm đuôi khiến chúng biến thành "lai"!' }
      }
    ],
    howToSpeak: [
      {
        type: 'minimal_pairs',
        title: 'Thử Thách Luyện Tai & Phân Biệt Cặp Từ Tối Thiểu (Minimal Pairs)',
        description: 'Bấm nghe luân phiên từng từ trong cặp để cảm nhận sự khác biệt tinh tế nhưng thay đổi hoàn toàn ý nghĩa.',
        theory: 'Cặp từ tối thiểu (Minimal Pairs) là hai từ chỉ khác nhau duy nhất một âm vị nhưng mang hai ý nghĩa hoàn toàn trái ngược. Người Việt thường có thói quen phát âm theo phản xạ tiếng mẹ đẻ: kẹp lưỡi /θ/ bị nói thành /s/ ("I think" -> "I sink"), chu môi /ʃ/ bị nói thành /s/ ("she" -> "see"), hoặc nuốt sạch âm cuối khiến "like", "life", "light", "line" đều nghe thành một âm "lai". Luyện nghe đối chiếu song song là bí quyết nhanh nhất để nói tiếng Anh chuẩn xác.',
        items: [
          {
            sound: 'Cặp 1: /iː/ (i dài cười tươi) vs /ɪ/ (i ngắn dứt khoát)',
            sentence: 'Please do not leave while I live in this house.',
            translation: 'Làm ơn đừng rời đi trong khi tôi đang sống ở ngôi nhà này. (leave /liːv/ vs live /lɪv/)',
            pairA: { word: 'sheep', ipa: '/ʃiːp/', translation: 'con cừu (kéo mép cười)' },
            pairB: { word: 'ship', ipa: '/ʃɪp/', translation: 'con tàu (ngắn dứt khoát)' },
            note: 'Nếu không kéo dài âm /iː/, người nghe sẽ nghe "sheep" thành "ship" hoặc "sheet" thành từ nhạy cảm!'
          },
          {
            sound: 'Cặp 2: /e/ (e ngắn mở vừa) vs /æ/ (a bẹt mở to quai hàm)',
            sentence: 'The bad man slept in an uncomfortable bed.',
            translation: 'Người đàn ông xấu xa đã ngủ trên chiếc giường không thoải mái. (bad /bæd/ vs bed /bed/)',
            pairA: { word: 'bed', ipa: '/bed/', translation: 'chiếc giường (mở miệng vừa)' },
            pairB: { word: 'bad', ipa: '/bæd/', translation: 'tồi tệ (mở to hạ quai hàm)' },
            note: 'Âm /æ/ phải mở rộng quai hàm tối đa, nếu không bạn nói "bad" người ta sẽ tưởng là "bed"!'
          },
          {
            sound: 'Cặp 3: /uː/ (u dài chu tròn môi) vs /ʊ/ (u ngắn thả lỏng)',
            sentence: 'The pool was full of cool water.',
            translation: 'Hồ bơi chứa đầy nước mát lạnh. (pool /puːl/ vs pull /pʊl/)',
            pairA: { word: 'pool', ipa: '/puːl/', translation: 'hồ bơi (chu môi ngân dài)' },
            pairB: { word: 'pull', ipa: '/pʊl/', translation: 'kéo vào (thả lỏng ngắn)' },
            note: 'Âm /uː/ môi phải chu tròn nhỏ như huýt sáo; âm /ʊ/ môi thả lỏng không gồng cứng.'
          },
          {
            sound: 'Cặp 4: /θ/ (th kẹp lưỡi thổi hơi) vs /s/ (s xì răng)',
            sentence: 'I think that small wooden boat will not sink.',
            translation: 'Tôi nghĩ rằng chiếc thuyền gỗ nhỏ đó sẽ không bị chìm đâu. (think /θɪŋk/ vs sink /sɪŋk/)',
            pairA: { word: 'think', ipa: '/θɪŋk/', translation: 'suy nghĩ (lưỡi kẹp giữa 2 răng)' },
            pairB: { word: 'sink', ipa: '/sɪŋk/', translation: 'bồn rửa, chìm (răng khép xì gió)' },
            note: 'Nếu không kẹp đầu lưỡi giữa răng, "I think" sẽ biến thành "I sink" (Tôi chìm)!'
          },
          {
            sound: 'Cặp 5: /ð/ (th kẹp lưỡi rung cổ) vs /d/ (d gõ nướu)',
            sentence: 'They went to work on that rainy day.',
            translation: 'Họ đã đi làm vào ngày mưa đó. (they /ðeɪ/ vs day /deɪ/)',
            pairA: { word: 'they', ipa: '/ðeɪ/', translation: 'họ, chúng nó (lưỡi kẹp rung)' },
            pairB: { word: 'day', ipa: '/deɪ/', translation: 'ngày (đầu lưỡi chạm nướu trên)' },
            note: 'Lưỡi của /ð/ phải chìa ra ngoài giữa hai hàm răng và rung tê cổ, không thụt vào trong nướu như /d/.'
          },
          {
            sound: 'Cặp 6: /ʃ/ (s nặng chu môi) vs /s/ (s nhẹ xì răng)',
            sentence: 'She loves to see the sunset by the sea.',
            translation: 'Cô ấy thích ngắm hoàng hôn bên bờ biển. (she /ʃiː/ vs see /siː/)',
            pairA: { word: 'she', ipa: '/ʃiː/', translation: 'cô ấy (chu môi đưa ra trước)' },
            pairB: { word: 'see', ipa: '/siː/', translation: 'nhìn thấy (răng khép hờ)' },
            note: 'Âm /ʃ/ phải chu môi tròn như ra hiệu "suỵt" im lặng, tạo luồng gió ấm êm dịu.'
          },
          {
            sound: 'Cặp 7: /tʃ/ (ch bật vô thanh) vs /dʒ/ (j bật hữu thanh)',
            sentence: 'He bought cheap gasoline for his old jeep.',
            translation: 'Anh ấy đã mua xăng giá rẻ cho chiếc xe jeep cũ của mình. (cheap /tʃiːp/ vs jeep /dʒiːp/)',
            pairA: { word: 'cheap', ipa: '/tʃiːp/', translation: 'rẻ tiền (không rung cổ)' },
            pairB: { word: 'jeep', ipa: '/dʒiːp/', translation: 'xe jeep (cổ rung bần bật)' },
            note: 'Cả hai âm đều chu môi bật lưỡi, nhưng /dʒ/ phải rung mạnh thanh quản trong họng.'
          },
          {
            sound: 'Cặp 8: Lỗi Nuốt Phụ Âm Đuôi: /k/ vs /f/ vs /t/ vs /n/',
            sentence: 'I like my life in the bright night line.',
            translation: 'Tôi yêu cuộc sống của mình trong hàng dài đêm sáng rực rỡ. (like vs life vs light vs line)',
            pairA: { word: 'like', ipa: '/laɪk/', translation: 'thích (đuôi /k/ bật họng)' },
            pairB: { word: 'life', ipa: '/laɪf/', translation: 'cuộc sống (đuôi /f/ thổi môi-răng)' },
            note: 'Nếu nuốt âm đuôi, cả "like", "life", "light", "line" sẽ nghe y chang nhau như "lai", người bản xứ không thể hiểu được!'
          }
        ]
      }
    ]
  }
];
