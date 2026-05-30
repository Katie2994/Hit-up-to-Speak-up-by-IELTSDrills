import { Topic } from './types';

export const specificBeautyPart2: Topic[] = [
  {
    id: 'beauty-11',
    title: 'Faults & Redo Disputes',
    vietnameseTitle: 'Xử lý khiếu nại, sữa lỗi & hoàn tiền',
    category: 'Communication',
    subCategory: ['For Beauty Professionals'],
    icon: '🗯️',
    color: '#D4AC0D',
    description: 'Cách ứng xử ngọt ngào, xoa xẹp ngọn lửa bực bội bốc hỏa của khách khi móng nứt mẻ mầm non rồi đòi làm lại dặm mọc hoặc đòi bồi thường refund tiền mặt.',
    words: [
      { id: 'b11-1', word: 'Flawed', ipa: '/flɔːd/', definition: 'Tình trạng móng móp méo, lem nhem nứt nứt mẻ bọt khi khô dỗi bóng sơn.', translation: 'Bị lỗi/Bị mẻ hỏng', example: 'I quickly fixed the flawed paint before sealing the top coat.', blankSentence: 'If the design looks ____, tell me immediately.', emoji: '💔' },
      { id: 'b11-2', word: 'Touch-up', ipa: '/ˈtʌtʃ ʌp/', definition: 'Ca sửa rửa dăm dặm vá chắp lỗi hỏng dọn rửa nhẹ không tốn nhiều thì giờ miễn phí tri ân.', translation: 'Bước dặm dọn vá sửa móng', example: 'Come back for a quick touch-up if any nail chips within three days.', blankSentence: 'We can solve this corner with a rapid ____.', emoji: '🩹' },
      { id: 'b11-3', word: 'Compulsory discount', ipa: '/kəmˈpʌlsəri ˈdɪskaʊnt/', definition: 'Biện pháp gượng hạ bớt tiền sòng kẹp xoa dịu khách nổi khùng tức ràn ràn bảo vệ tiệm.', translation: 'Hạ giá xoa dịu/Bắt buộc', example: 'We gave her a compulsory discount of twenty percent to resolve the dispute.', blankSentence: 'Sometimes a ____ is required to save our yelp rating.', emoji: '📉' },
      { id: 'b11-4', word: 'Store credit', ipa: '/stɔː(r) ˈkredɪt/', definition: 'Phiếu bồi cọc trừ tiền gộp cho lần hẹn sau thay thế hoàn tiền mặt rã tủ.', translation: 'Điểm tích trừ lần sau', example: 'I can\'t hand over cash, but I can issue a twenty-dollar store credit.', blankSentence: 'Accept our check or this ____ for your future visit.', emoji: '🎟️' },
      { id: 'b11-5', word: 'Comply', ipa: '/kəmˈplaɪ/', definition: 'Thi hành chìu khéo đúng theo mong cầu mong ước thỉnh của khách bướng trong mức cho phép bảo toàn kỷ cự sòng.', translation: 'Chìu theo ý/Tuân thủ', example: 'We always comply with reasonable adjustments to preserve clients loyalty.', blankSentence: 'Our salon policy forces us to ____ with your refund request.', emoji: '🤝' }
    ],
    structures: [
      { id: 'str111-1', phrase: 'If you aren\'t happy with the set, I can offer a complimentary touch-up within 3 days.', meaning: 'Dạ sếp huyên huyên, nếu sếp thấy bộ móng bộ mi này lệch phom hoặc mẻ góc mẻ, bên em bao sửa chữa dặm vạt vá dọn mi hoàn toàn miễn phí trong vòng 3 ngày sếp nhen.', vietnamese: 'Giải pháp êm dịu gỡ rối bớt áp lực đòi thối cọc tiền mặt.' },
      { id: 'str111-2', phrase: 'I cannot issue a full cash refund, but I can issue a store credit for...', meaning: 'Dạ sòng bên tụi em ko thối tiền mặt hoàn trả 100% rã tủ ra được á sếp, cơ mà em xin phép gửi sếp tấm phiếu store credit bù trừ tiền cho lần làm tiếp theo nhen sếp.', vietnamese: 'Từ chối thối trả tiền mặt tinh tế cứng củ gối.' }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Calming a Furious Laser chip Incident',
        participants: [
          { name: 'Tram', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tram', role: 'Technician/Manager' },
          { name: 'Helena', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Helena', role: 'Client' }
        ],
        lines: [
          { participant: 'Helena', text: 'Listen to me! I spent eighty dollars here on Thursday for a gel manicure, and look! Three of my fingers are already chipped and chipped! The paint is flawed and it looks absolutely horrible! I want my cash back immediately!', translation: 'Nghe tớ nách xổ lời bực hỏa nói thẳng nè! Mới Thứ Năm bảnh sảnh trưa chị móc ví quẹt tận 80 đô đắp gel móng manicured bên tiệm cưng nha, mà dòm giùm cái coi! Ba ngón sơn mảng mảng sục nứt rách mẻ mốc xơ tả tơi ra rồi nè! Bóng sơn gel thô lỗi lem nhem như hề ý gớm không chịu được luôn dợ. Trả thối hoàn sạch tiền mặt rục ví lại đây cho chị lẹ đi cưng hỡi!' },
          { participant: 'Tram', text: 'Oh my goodness, Helena! I am so incredibly sorry you had to deal with this. That gel must not have cured properly under the lamp. I completely understand why you\'re disappointed.', translation: 'Dạ trời hỡi đất hỡi chị Helena ơi, em nghe màng mà xót hết cả ruột nha sếp! Bách lỗi bồi lỗi nghẹn ngào hối tiếc gớm cơ do dính vụ này rát râm rập rắp rắp. Tình hình chắc nước sơn gel đắp buổi đó bị lỗi hơ lồng LED hỏng sấy chưa thấu bõng khô nách chân móng sơn dột sườn rồi sếp. Em thấu cảm rành bực dằn vặt bõ bọc u oán của sếp lắm sếp ơi.' },
          { participant: 'Helena', text: 'I don\'t want any excuses! I just want a refund. I\'m not paying for trash work.', translation: 'Chị chả thiết ngồi dỏng tai nghe phân trần chống chế dột sườn gì cả! Cạch bàn thối tiền refund lại cho chị. Tiền mồ hôi nước mắt đi đổi lấy đống rác lem nhem này hử dợ!' },
          { participant: 'Tram', text: 'Helena, I totally comply with your frustration. According to our salon policy, I cannot issue a full cash refund since it has been used. However, I want to make this perfectly right. I can offer you a complimentary full gel touch-up redo with our top master, Michelle, plus a compulsory discount of twenty percent. Or, if you don\'t have time today, I can issue you a fifty-dollar store credit for your next visit. Which one would you prefer?', translation: 'Dạ chị Helena ơi em gạt nách gác đầu tôn trọng oán giận tức tưởi chính đáng của sếp nha sếp. Khổ một n nỗi quy chế sòng của tiệm em xưa nay là ko tháo bớt bốc tiền mặt hoàn toàn 100% rã két được sếp ơi do dịch vụ đã thi triển dính hóa chất rồi sếp hử huyên. Nhưng để gạt lo hậm hực cho sếp, em xin bù đắp tạ lễ hết sườn kĩ thuật nè sếp: Em bao quất cạo phá lớp móng hỏng dũa mới hử hơ đắp trọn bộ "complimentary touch-up touch gel" dọn sạch dặm mọc tinh xảo hoàn toàn miễn phí 100% sướng mát do đích thân bàn tay vàng sư phụ Master Michelle sòng tiệm rà dũa nhen sếp, cộng thối thêm dính quà bồi tạ giảm giá compulsory discount 20% luôn sếp nha. Còn nhỡ nay sếp bận chạy ca chân rảo sườn, em xin kính dâng sếp quả phiếu vàng store credit 50 đô trừ thẳng tay hóa đơn lần tới nhen sếp huyên. Sếp tính chọn sướng theo nẻo nào em chiều cưng sếp nẻo đó liền nha sếp yêu?' },
          { participant: 'Helena', text: 'Well... Michelle has a great reputation. If she can redo it and give me the twenty percent back, I suppose I\'ll give you one last chance.', translation: 'Uầy, phân bua hứa hẹn mượt mà trôi chảy ngọt cổ thế kia thì chị nghe mấp mé. Chị có nghe đồn tay nghề múa cọ xăm lột móng cô Michelle rực sòng đắt đỏ lắm á. Nếu cô ấy dốc tay phá sửa bao mướt rượt từ đầu cộng gộp bồi tạ giảm 20% hóa đơn sòng thì chị du di mở lòng ban cho tiệm cưng một cơ hội chuộc lỗi sửa hỏng sau cùng đấy nhe cưng!' }
        ]
      }
    ]
  },
  {
    id: 'beauty-12',
    title: 'Client Manners & Chitchats',
    vietnameseTitle: 'Ứng xử chuyên nghiệp nội bộ trước khách',
    category: 'Communication',
    subCategory: ['For Beauty Professionals'],
    icon: '🤫',
    color: '#85929E',
    description: 'Cách phối nhắc nhỏ đồng nghiệp bàn bên giữ ý tứ ko nói thì thầm tiếng Việt làm khách ngại lo nghĩ đang nói xấu họ sườn bệ.',
    words: [
      { id: 'b12-1', word: 'Unprofessional', ipa: '/ˌʌnprəˈfeʃənl/', definition: 'Lối ứng xử cợt nhả tếu táo, rầm rì bí bô ngôn ngữ ngoài sòng khiến khách tức lòng e thẹn nghi ngờ.', translation: 'Thiếu chuyên nghiệp', example: 'Speaking Vietnamese in front of English-only guests can sound highly unprofessional.', blankSentence: 'Laughing loudly across the salon makes us look ____.', emoji: '❌' },
      { id: 'b12-2', word: 'Pass the client', ipa: '/pɑːs ðə ˈklaɪənt/', definition: 'Hành động phối dồn sườn kĩ thuật thuyên chuyển nhờ cậy thợ vẽ đỉnh sòng bay vẽ hộ ngón của khách mượt sụn.', translation: 'Bàn giao khách/Nhờ hỗ trợ', example: 'If you can\'t draw 3D flowers, pass the client to Jane without making a fuss.', blankSentence: 'Let me ____ to our lash master for this special curling volume.', emoji: '🤝' },
      { id: 'b12-3', word: 'Sanitary', ipa: '/ˈsænətri/', definition: 'Mức tiêu chí vô trùng vệ sinh tủ kính chống vi khuẩn nấm xanh bệnh dịch bám bùng sòng kĩ rệt.', translation: 'Vệ sinh vô trùng sạch', example: 'We store our tools in UV sterilizers to meet strict sanitary laws.', blankSentence: 'Make sure your coarse file tool looks extremely ____.', emoji: '🛡️' },
      { id: 'b12-4', word: 'Whisper', ipa: '/ˈwɪspə(r)/', definition: 'Thao tác nói thầm thọc thì thà rỉ tai che mồm sườn kề dễ khơi dậy hiểu lầm khách tủi xót.', translation: 'Nói thầm rầm rì', example: 'Please do not whisper to other techs while holding a customer\'s hand.', blankSentence: 'It is rude to ____ secrets during dry manicure step.', emoji: '🤫' },
      { id: 'b12-5', word: 'Cooperation', ipa: '/kəʊˌɒpəˈreɪʃn/', definition: 'Tinh thần liên tục phối gác chia bốt san ca sủng sướng trong toàn thể nhóm lân tiệm.', translation: 'Tinh thần hợp tác hỗ trợ', example: 'Close cooperation among staff speeds up long bridal session bookings.', blankSentence: 'Our teamwork and ____ build an amazing salon vibe.', emoji: '💎' }
    ],
    structures: [
      { id: 'str112-1', phrase: 'Let me get my coworker, Michelle, she is amazing at doing intricate nail art.', meaning: 'Dạ để em nhờ đồng nghiệp liền kề của em là chị Michelle lách cọ nha sếp, bả múa vẽ bông rồng phượng tinh ranh điệu nghệ nức tiếng tiệm luôn á sếp.', vietnamese: 'Giới thiệu khôn khéo chuyển giao khách tươm tất bảnh sảnh không làm khách mất vui.' },
      { id: 'str112-2', phrase: 'Could you pass me the sterilized pushers from the back room, please?', meaning: 'Cưng ơi lướt nách lùa lấy giùm chị cây đẩy da tiệt trùng trong phòng hấp sấy tiệt trùng ra giùm chị với nha?', vietnamese: 'Yêu cầu đồng nghiệp lấy đồ dõng dạc lịch sự bằng tiếng Anh trước mặt khách thể hiện sự minh bạch vô trùng sạch sẽ.' }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Calming a paranoid customer who thinks techs are gossiping in Vietnamese',
        participants: [
          { name: 'Kieu', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kieu', role: 'Technician 1' },
          { name: 'Phuong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Phuong', role: 'Technician 2' }
        ],
        lines: [
          { participant: 'Kieu', text: 'Hey Phuong! Could you pass me the sterilized pushers and coarse buffer from the back room, please?', translation: 'Dạ Phương ơi! Chị lấy hộ em đống sủi nhặt da với dũa lịm tiệt trùng vô sấy trong buồng hấp mang ra đây giùm em xíu sếp nha?' },
          { participant: 'Phuong', text: '*whispering and giggling in Vietnamese* "Ủa bà ơi, bà coi móng bả thô ráp dã man, đắp bột dầy cộp rỡ lâu nghẹt thở luôn á bồ!"', translation: '*thì thầm rúc rích cười cợt báng bổ tiếng Việt* "Ủa bà ơi, bà coi móng bả thô ráp dã man, đắp bột dầy cộp rỡ lâu nghẹt thở luôn á bồ!"' },
          { participant: 'Kieu', text: 'Hey Phuong! Let\'s speak English across the station, please. It\'s unprofessional to whisper in Vietnamese while working on clients. It can make our customers feel very uncomfortable or think we are gossiping about them.', translation: 'Phương ơi, hông được nha bồ! Ở trạm múa dũa móng sườn sau sòng tụi mình hứa giao kèo nhất loạt xài tiếng Anh rành mạch nhen bồ hử huyên. Cứ rầm rì rỉ tai rỉ tai bí mật rồi hí hoáy nhe răng cười nói xà lơ tiếng Việt trước khách là cực kỳ unprofessional thiếu chuyên nghiệp á bồ hỡi bồ ơi. Khách ngồi đối diện bệ dũa mé sườn họ sẽ tủi mọ lo nhói thót nghẹn oán nghĩ tụi mình đang lôi móng chân tay da diện mạo họ ra bàn tán chê bai giễu cợt sọc sọc báng bổ nọ kia á bồ!' },
          { participant: 'Phuong', text: 'Oh, you\'re absolutely right. My bad! I got too excited about the design. Sorry about that!', translation: 'À ôi thôi chết, em bách lỗi cưng nhen bồ huyên ơi em tị tị sướng miệng lỡ ngôn mất lý trí. Em hăng mải buôn mẫu móng móng sướng quá sẩy lời. Em xin chừa từ này không bép xép nói leo nữa nhen chị!' },
          { participant: 'Kieu', text: 'We have to ensure close cooperation and safe sanitary habits here. Thank you for understanding! "Alright, Valerie, sorry about that brief distraction! My coworker was just getting too excited about how stunning your stiletto set is going to be!"', translation: 'Chị em mình một nhà phải phối lách dọn sườn giữ kỉ luật kỷ cương vô trùng, nâng niu bảo toàn bộ mặt sòng nhen bồ. Thương cưng dột sườn đổi nách nhe! "Dạ Valerie bảnh ơi, em bách tạ tạ lỗi chị nãy giờ lo phân ca hối thúc dọn dũa sao lãng tay chị xíu nhen sếp huyên hử! Đồng nghiệp của em nãy chỉ hăng ngóng phấn khởi khen ríu rít quả phom móng nhọn sành điệu stiletto Gel-X của chị sắp thi triển lộng lẫy chói lọi cút ngón tay thôi á sếp!"' }
        ]
      }
    ]
  },
  {
    id: 'beauty-13',
    title: 'Sensitive Health Cases',
    vietnameseTitle: 'Tình huống nhạy cảm: Nấm, mùi hôi móng chân',
    category: 'Communication',
    subCategory: ['For Beauty Professionals'],
    icon: '🩺',
    color: '#D98880',
    description: 'Cách từ chối khéo léo ngọt nhạt nhã nhặn vì lý do y tế từ chối mài sơn gel đè lên đắp móng nấm mốc nấm chân xanh có nguy cơ lây dịch hoành tiệm.',
    words: [
      { id: 'b13-1', word: 'Nail fungus', ipa: '/neɪl ˈfʌŋɡəs/', definition: 'Tình trạng hư tổn mụn nấm xanh rì mốc sườn rệp rữa chân kẽ móng sưng dộp lây lan cao do bào tử nấm mốc sinh sôi bám dính.', translation: 'Bệnh nấm móng mốc xanh', example: 'I had to wear gloves and reject working deeply on her yellow nail fungus.', blankSentence: 'A severe ____ can spread bacteria across our spa tools.', emoji: '🦠' },
      { id: 'b13-2', word: 'Highly contagious', ipa: '/ˈhaɪli kənˈteɪdʒəs/', definition: 'Thuộc tính lây nhiễm bay bám lây lan khói dính qua giũa mài bám da siêu nhanh độc tính cao.', translation: 'Dễ dàng lây nhiễm mạnh', example: 'Nail mold and fungus are highly contagious skin issues.', blankSentence: 'Since the infection is ____, safety rules forbid treatment.', emoji: '⚠️' },
      { id: 'b13-3', word: 'Soak', ipa: '/səʊk/', definition: 'Bước thả ngâm tay chân sướng ngút muối diệt khuẩn đặc trị sáp ngâm muối đá bổi rũ rượi mùi hôi.', translation: 'Ngâm tay chân sâu trị liệu', example: 'A deep lavender oil soak can ease both muscle tension and foot odor.', blankSentence: 'Let your toes ____ in this antibacterial tub for ten minutes.', emoji: '🛀' },
      { id: 'b13-4', word: 'Referral', ipa: '/rɪˈfɜːrəl/', definition: 'Lá thư giới thiệu mách khéo khuyên đi khám da liễu trị gốc rễ bệnh tật bảo đảm an bệ.', translation: 'Gợi ý khuyên đi da liễu khám', example: 'I gave the guest a dermatologist referral after realizing her nail issue.', blankSentence: 'We can provide a specialist ____ card for you.', emoji: '🩺' },
      { id: 'b13-5', word: 'Odor', ipa: '/ˈəʊdə(r)/', definition: 'Làn mùi khó ưa nực từ kẻ sườn bí ngột bí móng của chân dính nấm ẩm mùa mưa ròng.', translation: 'Mùi hôi bốc ra khó chịu', example: 'Proper tea tree oil scrubs eliminate standard foot odor during pedicures.', blankSentence: 'This clean herbal soap is made to wash off wet ____.', emoji: '🧦' }
    ],
    structures: [
      { id: 'str113-1', phrase: 'I\'m sorry, but for your safety and our sanitary rules, I cannot work on this nail because...', meaning: 'Dạ sếp ơi em rầu rĩ ái ngại bách lỗi với chị nhiều nha, cơ mà vì an toàn cơ thể móng của chị lẫn quy định vệ sinh tiêm vô trùng bắt buộc, ngón móng chân này dính vết nấm mốc vàng rộp lây nấm rồi nên em không thể giũa rà mồi đắp gel lên được sếp ơi sếp hử huyên.', vietnamese: 'Đưa lá chắn "an bệ bảo trọng sức khỏe người dùng" lên đầu, từ chối ngọt lòng.' },
      { id: 'str113-2', phrase: 'I highly suggest seeing a doctor or dermatologist to check on this nail first.', meaning: 'Em tha thiết chân thành khuyên chị sếp ghé qua phòng khám da liễu chuyên môn mủ sủi bác sĩ check kiểm tra rà khâu mống bệnh móng vàng này trị dứt điểm gọn lẹ từ gốc cho êm xuôi trước nhen sếp.', vietnamese: 'Gợi hướng giải quyết thấu đáo nhân văn, ko bỏ rơi sỉ nhục khách.' }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Politely Rejecting full Acrylic on a Greenish Fungus Thumb',
        participants: [
          { name: 'Khang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Khang', role: 'Technician' },
          { name: 'Rhonda', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rhonda', role: 'Client' }
        ],
        lines: [
          { participant: 'Khang', text: 'Alright Rhonda, I\'m going to clean up and prep your nails for the acrylic powder. Let me take a look... Oh, I see.', translation: 'Dạ sếp Rhonda ơi, giờ em tính dũa dọn mướt móng cho mình bết nhe n để nhào bột Acrylic đắp nha sếp. Đâu sếp xòe tay em nhòm nghía tí xem... Dạ trút hơi thở nhẹ, em thấy chỗ này hơi dính chút cự nhe sếp.' },
          { participant: 'Rhonda', text: 'What is it, sweetie? Is that nail polish stain from my dark green lacquer last month? Just file it down and slap the powder on top.', translation: 'Ủa vụ gì thế cưng em yêu? Vết dơ xanh xanh mốc mốc đít móng đó hả? Chắc vết loang chùi keo nước sơn gel xanh lục đậm chị làm đợt Noel tháng trước dính lại thôi á mà. Cưng dũa sến sấn sụt bớt đi rồi đắp đậy cho chị lớp bột rồ rồ đậy đè nắp đắp là êm ru bà rù liền à.' },
          { participant: 'Khang', text: 'Rhonda, I\'m incredibly sorry, but for your safety and our strict sanitary rules, I cannot work on this specific thumb nail because it looks like a nail fungus. See this soft, yellowish lifting area? Putting acrylic on top would seal in the moisture, which would make the highly contagious bacteria spread even deeper and could ruin your real nail bed permanently.', translation: 'Dạ Rhonda, ruột em gãy gập rầu rĩ nghẹn thở ái ngại bách lỗi với sếp nha sếp huyên, nhưng vì bảo toàn an toàn cơ thể cho sếp với giữ nghiêm quy kẽ vô trùng vệ sinh dịch vụ sòng tiệm sếp hử huyên, em buộc lòng ko thể giũa sấn đè mài đắp bột Acrylic đậy trùm lên ngón chân ngón cái móng tay này được sếp ơi, do dính vết rộc mốc "nail fungus" rõ tấp nập sếp nhe. Sếp nghía giùm em vết da vàng úa rộp rộp bọng nước rã chân phom móng mọc sùi dột sườn này nè? Giờ mà đắp gạt Acrylic trùm đậy nắp lên là vô tình tụi mình trám khít nhốt bít giữ độ ẩm ròng rã dột chân sườn rễ móng á sếp huyên, mà dòng mầm bệnh nấm mốc bám này nó highly contagious "dễ dàng lây sạt sập" mướt dữ lắm nha sếp huyên, dính nhốt bít ẩm là vi khuẩn nó ăn sụp sạt hột sâu rễ tơ sườn, lở rụng nát cả bờ dột móng thịt rộc sứa của sếp vĩnh viễn luôn á sếp yêu hỡi!' },
          { participant: 'Rhonda', text: 'Really? Oh dear, I thought it was just a stain! It\'s actually kind of painful when I press it. I didn\'t know it was that serious!', translation: 'Ủa dợ thiệt thế hả cưng? Trời đất yêu ma bôi, chị tẩn tơ chỉ đinh ninh là vệt nước sơn dính nhơ nhớt tẩy chưa cạn thôi đó nhe! Cơ mà bảo sao bấy lâu rờ sờ miết nhẹ thấy nhức nhức đau dại rát sườn móng thiệt á bồ yêu. Chị chả mảy may ngờ dột nó tai hại nghiêm trọng khiếp hồn dường này á!' },
          { participant: 'Khang', text: 'Don\'t panic, Rhonda! It is very common and completely treatable. I highly suggest seeing a doctor or dermatologist to check on this nail first. I\'ll write down a referral clinic card we recommend. For today, let\'s focus on doing a beautiful, safe non-chem gel manicure on your other nine healthy fingers and keep this thumb clean and dry to heal, okay?', translation: 'Dạ sếp đừng lo sốt vó bủn rủn chân tay nha sếp Ronda huyên ơi, bệnh dăm nấm móng này dễ ngộp lắm cơ mà chữa chạy nhanh dứt lẹ từ góc tươm tất lắm sếp ha. Em dâng sếp quả tờ giới thiệu referral card phòng da liễu có bác sĩ chuyên khoa kĩ ngọc tút cái mọt rễ sườn nhen sếp huyên. Còn hôm nay sòng làm tiện tay lướt nách lướt dũa mát rượi, em bao thiết kế gột rửa làm manicure móng thường lành mát lành tốt cho cả 9 ngón khỏe mạnh láng o còn lại nhen sếp, còn ngón cái dính nấm nè tụi mình gác hờ để thông thoáng, khô ráo lau dưỡng cho mau khép vẩy mọc móng mới nhen sếp, mát lòng mượt lối đôi bên hết nấc nhe sếp?' }
        ]
      }
    ]
  },
  {
    id: 'beauty-14',
    title: 'Nurturing Specialized Guests',
    vietnameseTitle: 'Chăm nom Khách mang bầu, bị sưng khớp hay lớn tuổi',
    category: 'Communication',
    subCategory: ['For Beauty Professionals'],
    icon: '🤰',
    color: '#D2B4DE',
    description: 'Cách nẹp lách dọn chỗ ngồi kẽ mùi thơm hóa chất bột monomer cho bà bầu, nương lực dũa dọn bóp mát xa cho người khớp gối cứng.',
    words: [
      { id: 'b14-1', word: 'Fumes', ipa: '/fjuːmz/', definition: 'Hơi khói bụi hóa chất acetone hay monomer nồng nặc sặc bủa vây kị nhe sòng với mẹ bầu.', translation: 'Khói hơi hóa chất nồng nặc', example: 'We opened all rear windows to drain out the strong acrylic chemicals fumes.', blankSentence: 'Are you feeling dizzy from the acetone ____?', emoji: '💨' },
      { id: 'b14-2', word: 'Stiff joints', ipa: '/stɪf dʒɔɪnts/', definition: 'Tình trạng sưng vướng viêm nghẹt các khớp mắt cá tơ dột xương đầu gối rộc của cụ lớn tuổi.', translation: 'Khớp xương bị cứng mỏi', example: 'For elderly customers with stiff joints, do not twist or bop their ankles.', blankSentence: 'A soft oil rub can relax those ____.', emoji: '👵' },
      { id: 'b14-3', word: 'Adjustable booster', ipa: '/əˈdʒʌstəbl ˈbuːstə(r)/', definition: 'Miếng g枕 đệm nâng hỗ uốn chèn sườn kẽ hông thắt eo mát lưng lót đầu gối chân mỏi.', translation: 'Đệm hơi kê chêm eo/chân', example: 'Place the adjustable booster under her lower back to prevent spine ache.', blankSentence: 'We have a nice leather ____ for our pregnant ladies.', emoji: '🛋️' },
      { id: 'b14-4', word: 'Gentle hand', ipa: '/ˈdʒentl hænd/', definition: 'Động tác khâu dũa nương kềm đi nương nhe êm xoa vuốt ngọt tơ sún sún dập nhẹ.', translation: 'Lực tay nhè nhẹ/mát mượt', example: 'Older skin is thin like parchment paper, so use an extremely gentle hand.', blankSentence: 'This delicate massage requires a ____.', emoji: '💆‍♀️' },
      { id: 'b14-5', word: 'Assistance', ipa: '/əˈsɪstəns/', definition: 'Khâu phụ nâng tay nâng hông dìu hở cụ già bò lên ghế mộc bệ chân móng pedicure hẹp phom.', translation: 'Sự đỡ dìu/Hỗ trợ đỡ hông', example: 'She needed warm assistance to climb down the slippery pedicure deck.', blankSentence: 'Can a gentleman offer some ____ for her wheelchair?', emoji: '♿' }
    ],
    structures: [
      { id: 'str114-1', phrase: 'Since you are pregnant, would you like a seat away from the acrylic chemical fumes?', meaning: 'Dạ vì sếp đang mang bầu thiên chức quý giá rực rỡ á sếp, không biết sếp có thích em đổi mâm nách bàn dũa tránh xa kẽ bay mùi bủa vây của hóa chất bột monomer nồng nặc ngoài kia hông sếp?', vietnamese: 'Sự nâng niu chiều chuộng tinh tế vô vàn tạo lòng sùng ái tiệm.' },
      { id: 'str114-2', phrase: 'Please let me know if my hand is too firm or if you need a soft pillow for your back.', meaning: 'Cụ ơi con rà tay bóp mát dũa dọn thế này lực bóp có đầm mạnh quá đau khớp mỏi có gì cụ dặn con nương hơi tay nhẹ lại hoặc lấy thêm pillow gối lót dựa mỏi thắt lưng nhen cụ hử.', vietnamese: 'Dùng cấu từ nồng ấm ruột tơ lấy lòng khách hàng hạc nội lớn tuổi.' }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Cushioning & Shielding a Radiant Pregnant Client',
        participants: [
          { name: 'Chloe', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Chloe', role: 'Technician' },
          { name: 'Tiffany', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tiffany', role: 'Client (8 Months Pregnant)' }
        ],
        lines: [
          { participant: 'Chloe', text: 'Oh! Hello Tiffany! Oh my gosh, look at that gorgeous baby bump! You are absolutely glowing!', translation: 'Dạ a chào chị Tiffany tơ duyên hớn hở ơi! Trời hỡi ơi bảnh nghía cái bụng bầu cưng bồng bế tròn căng trộm vía lộng lẫy hỷ sắc lấp lánh ghê chưa nè sếp yêu ơi! Nhìn sếp tỏa sáng nét rạng ngời của mẹ bầu sang sành rực rỡ luôn á!' },
          { participant: 'Tiffany', text: 'Aww, thank you Chloe! Oh, I\'m practically waddling. I\'m eight months along now and my ankles feel like giant balloons.', translation: 'Uầy cảm ơn cưng Chloe bập bõm nhen cưng hử! Chị 8 tháng chốt cọc rồi đấy nằm lăn qua lộn lại đi lạch bạch như con vịt bầu xệ cánh á cưng. Gái gót mắt cá sườn chân giờ nó sưng vù nề tích nước như hai quả bong bóng bay phình nổ tới nơi rồi dợ.' },
          { participant: 'Chloe', text: 'Understandable entirely, Tiffany. Let me help you with some assistance to step up to this pedicure seat. Since you are pregnant, would you like a seat over here by the window, totally away from the acrylic chemical fumes at the drying station?', translation: 'Dạ u đầu ôm sườn xót cảm lắm chị Tiffany ơi đẻ bầu mỏi rũ người sưng gót. Chị bám vai em bọc nách nương tơ em dìu sếp lên sấn ngồi lọt gối ghế bục làm pedicure này nhen sếp huyên. Tiện thể vì chị mang bầu bụng vượt mặt á sếp, chị có muốn em đưa mâm qua bàn gác cạnh mé ô kính thông thoáng gió thổi này tránh xa 100% kẽ khói hơi bay nồng acetone hóa chất bột acrylic bủa vây chói ngoài kia hông sếp?' },
          { participant: 'Tiffany', text: 'Oh, you are a lifesaver! Yes, please! The smell of monomer normally makes me gag and feel so nauseous.', translation: 'Trời ơi cưng tinh ý kéo phao cứu sinh vớt mạng sống cho chị rồi á cưng béo ơi! Sướng ghê á sếp dạ cho xin mâm lá bàn sườn đó liền đi em. Chứ dính bay bay tí mùi nước monomer monomer bọc tháo bột là cổ họng chị dợn rợn nhợ mửa oẹ nôn ói mật xanh mật vàng run lẩy bẩy rồi dợ.' },
          { participant: 'Chloe', text: 'I got you! Let me put this adjustable booster and a soft pillow behind your lower back for maximum ergonomic support. Please let me know if my hand massage pressure on your swollen calves is too firm, I\'ll do it extra light and cozy for you!', translation: 'Dạ em bao sòng toàn tập sướng rơn nách cho sếp lun nha sếp Tiffany huyên ơi! Đợi em nêm lót lách tấm adjustable booster đệm gỗi hơi tựa lưng chùm với cái gối ôm mềm mềm chèn đúng thắt eo đau mỏi mệt cột sống mẹ bầu sướng ê rốn nhe sếp. Lát khâu mát-xa rà kem bóp sườn dọn bắp sưng vù sưng nề cật lực sếp thấy lực em xọc nhấn có mạnh đầm quá đau khớp gối là sếp tặc miệng dặn em dãn lực bông hoa dập dờn tơ nhẹ sướng dịu liền nhen chị iu!' }
        ]
      }
    ]
  },
  {
    id: 'beauty-15',
    title: 'Bookings vs Walk-ins',
    vietnameseTitle: 'Khách Đặt hẹn trước vs Khách vãng lai đột xuất',
    category: 'Communication',
    subCategory: ['For Beauty Professionals'],
    icon: '📅',
    color: '#008080',
    description: 'Cách ứng đối xử lý lịch trình bận rộn túi bụi khi tiệm bận kín hết bàn dũa móng mi spas, hướng dẫn khéo khâu khách đợi dời khung giờ.',
    words: [
      { id: 'b15-1', word: 'Appointment-only', ipa: '/əˈpɔɪntmənt ˈəʊnli/', definition: 'Quy chế nghiêm ngặt chỉ tiếp đón phục vụ những ca khách đã book cọc chốt giờ giữ bàn dũa từ sườn mạng trước.', translation: 'Chỉ nhận lịch đặt trước', example: 'Our nail art studio is strictly appointment-only during the Christmas peak.', blankSentence: 'Make sure to tell walk-ins we are an ____ place.', emoji: '🔒' },
      { id: 'b15-2', word: 'Wait time', ipa: '/weɪt taɪm/', definition: 'Tổng lượng thời dảnh khách phải ngồi mát hờ hững gặm kẹo trước khi được kêu kê tay dũa móng sườn.', translation: 'Thời gian đợi chờ', example: 'The estimated wait time for an unscheduled pedicure is approximately forty minutes.', blankSentence: 'I apologize, the weekend ____ is longer than usual.', emoji: '⏳' },
      { id: 'b15-3', word: 'Fully booked', ipa: '/ˈfʊli bʊkt/', definition: 'Tình trạng sòng tiệm cháy hết ca, kín sạch sẽ dính bết cứng lịch không lọt một khe bàn.', translation: 'Lịch kín bưng/Cháy ca', example: 'Since it is Friday, our nail masters are fully booked until closing time.', blankSentence: 'We can\'t accept you because we are ____.', emoji: '🔥' },
      { id: 'b15-4', word: 'Secured timeslot', ipa: '/sɪˈkjʊəd ˈtaɪmslɒt/', definition: 'Khung giờ rực ngọc đã được đóng cọc đảm bảo chắn xôi dột sườn cho thợ.', translation: 'Khung giờ chốt giữ lịch', example: 'Your secured timeslot under the name Ruby is at three o\'clock.', blankSentence: 'Thank you for deposit to lock this ____.', emoji: '🔒' },
      { id: 'b15-5', word: 'Regular client', ipa: '/ˈreɡjələ ˈklaɪənt/', definition: 'Đối tượng khách mối, khách "ruột" cắm sào đều đặn tháng dăm ca mông má tiệm nức lòng.', translation: 'Khách mối/Khách ruột', example: 'Regular clients usually tip better and respect our salon policies.', blankSentence: 'Treat her well, she is a loyal ____ of mine.', emoji: '💎' }
    ],
    structures: [
      { id: 'str115-1', phrase: 'Do you have a reservation under your name, or are you walking in today?', meaning: 'Dạ sếp huyên huyên ơi hôm nay mình có đặt hẹn chốt lịch dột sườn dưới mã tên mình chưa nha sếp hử, hay là khách ghé bất thình lình walk-in đó sếp ơi?', vietnamese: 'Thủ tục rà soát nhanh gọn lịch sự lịch sọc đầu ngày.' },
      { id: 'str115-2', phrase: 'We are fully booked until 4 PM, but if you have thirty minutes, I can fit you in for...', meaning: 'Dạ tiệm em kín lịch kẹt ngòi cứng ngắc tới 4 giờ chiều luôn sếp ơi sếp hử huyên, cơ mà nếu sếp nhàn rỗi thơ thẩn gặm kẹo dăm độ 30 phút, em xin phép lách ca chen dũa "fit you in" mượt đét lẹ lẹ sơn nước bóng cho sếp nha.', vietnamese: 'Keó vớt khách vãng lai rảnh rỗi thành giao dịch nhanh thu tiền gọn.' }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Drafting Walk-in Karen to a Squeezed timeslot',
        participants: [
          { name: 'My', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=My', role: 'Technician/Host' },
          { name: 'Kylie', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kylie', role: 'Walk-in Client' }
        ],
        lines: [
          { participant: 'My', text: 'Hello! Welcome to Glossy Co. Do you have a reservation under your name, or are you walking in today?', translation: 'Dạ xin kính chào quý khách ghé qua Glossy Co. nhen sếp huyên! Không biết nay sếp bảnh có đặt lịch hẹn chốt giờ giữ bàn dũa dưới tên sếp chưa nhe, hay sếp rải bước thong dong dạo chơi gạt walk-in đột nhiên đó sếp?' },
          { participant: 'Kylie', text: 'I\'m a walk-in. I just want a quick gel mani right now. I have a wedding party at three, so no wait time please!', translation: 'À chị walk-in bạt mạng vãng lai thôi cưng ơi. Trưa nắng sườn sườn vô tút sơn móng gel manicure nhanh cái vèo đặng chạy ca tiệc cưới hồi 3h sướng sính sính nè, lẹ lẹ gối sòng làm cho chị luôn nha chớ chị chả kiên nhẫn bậu đợi chờ cháo dăm phút mô nhe cưng huyên ơi!' },
          { participant: 'My', text: 'Oh! Since today is Saturday, all our nail techs are completely fully booked with secured timeslots until 4 PM.', translation: 'Dạ trút hơi thở nhẹ ái ngại rầu sườn gục khóe nha sếp Kylie ơi huyên. Khổ một n nỗi nay dột sườn ngày thứ Bảy cao điểm cháy ca sòng tiệm sếp hử huyên, toàn thể thợ dũa móng vẽ mi bên em đều lọt kín lịch bưng bít thọc bồ cào dính "secured timeslots" giữ bàn nêm xôi bít ca tới tận 4 giờ chiều dặm nách mỏi rã rượi hết rồi sếp ạ.' },
          { participant: 'Kylie', text: 'Are you serious?! You can\'t just squeeze me in? It\'s just a simple color gel!', translation: 'Ủa dợ, cưng giỡn bóng xàm xí báng bổ gì thế cưng hử?! Ko có một xó xỉnh khe hở dũa móng móng nào ních sọc dồn nhồi đút sườn chị làm xẹt "squeeze me in" lách tí xíu nhe cưng? Có lớp sơn móng dôn mọc nước gel láng o trơn xẹt nách thôi mà dợ!' },
          { participant: 'My', text: 'I completely understand your wedding rush, Kylie! We really want to get you looking absolute fire for that party. Here is my best effort—one of our regular clients booked at 2:00 PM just texted to postpone their set for next week. If you have about twenty minutes of wait time to chill, I can squeeze you in for a quick gel manicure the exact second her slot opens! How does that sound?', translation: 'Dạ ôi em thấu hết tâm tư chạy bùng ca cưới rực cháy rực ranh kịch độc sền sệt bận rộn hối hả rộn sườn của sếp Kylie rồi sếp huyên hử hộc! Em cũng ngóng muốn sếp xốc mâm trang trang hoàng bàn tay bảnh bẹ lung linh rực rỡ bốc lửa nức lòng bữa tiệc tùng chiều ngày sườn dột á sếp. Em dốc lực dọn lách sòng kịch ưu đãi lách ca sướng thế này sếp ha: Vừa khéo có một chị khách quen khách ruột "regular client" ca 2 giờ trưa nay gạt tin nhắn hoãn dời buổi gọt dũa móng bột sang tuần sau sếp huyên. Vậy giờ sếp Kylies nhàn rỗi gặm kẹo dăm độ 20 phút hờ hờ đợi chờ nước mát mát lòng xơ xơ sườn mát, ca đó hụt rộc ra một cái em tọt đút ngách chộp mâm dũa móng mớm chốt "fit you in" quất sơn gel manicure mượt đét lẹ lẹ rẹt nách láng o bay cho sếp chạy tiệc chuẩn khói luôn đét! Sếp nghe sướng rơn ruột tơ chuẩn bài hết nấc chưa sếp hử sếp?' }
        ]
      }
    ]
  },
  {
    id: 'beauty-16',
    title: 'Social & Review Requesting',
    vietnameseTitle: 'Chụp hình sống ảo móng mi & Gạ Yelp review 5 sao',
    category: 'Communication',
    subCategory: ['For Beauty Professionals'],
    icon: '📸',
    color: '#FF69B4',
    description: 'Cách hướng dẫn khách mềm bàn tay tạo dáng chụp pose hoành tráng, gạ khách chia sẻ Yelp review 5 sao sướng bụng đổi sáp tặng dưỡng tay.',
    words: [
      { id: 'b16-1', word: 'Social media post', ipa: '/ˈsəʊʃl ˈmɪərɪə pəʊst/', definition: 'Bài viết đăng tải mâm ảnh móng mi lung linh sặc sỡ lướt sóng Instagram hay mạng Facebook quảng bạt danh sòng.', translation: 'Bài đăng mạng xã hội', example: 'Our salon gained three customers from a viral social media post of acrylic stiletto nails.', blankSentence: 'Mind if we make a quick ____ with your hand today?', emoji: '📱' },
      { id: 'b16-2', word: 'Pose your fingers', ipa: '/pəʊz jɔː(r) ˈfɪŋɡəz/', definition: 'Hướng dẫn lọt tay bẽ bo ngón mềm mại khéo đan móng chụm nụ hoa khoe sắc diện móng lộng lẫy ăn hình.', translation: 'Tạo dáng pose bàn tay mềm', example: 'Relax your wrist, let me help you pose your fingers for a beauty shot.', blankSentence: 'Can you ____ over this silk cushion, please?', emoji: '🤳' },
      { id: 'b16-3', word: 'Lighting', ipa: '/ˈlaɪtɪŋ/', definition: 'Ánh sáng đèn rọi chiếu phơi vây nổi bật rõ sớ kim tuyền óng mượt của móng mướt.', translation: 'Ánh sáng đèn chụp/Studio', example: 'Good desk lighting makes the metallic chrome details pop like crazy.', blankSentence: 'Move closer, the ____ is perfect by this desk.', emoji: '💡' },
      { id: 'b16-4', word: 'Yelp review', ipa: '/jelp rɪˈvjuː/', definition: 'Đánh giá xếp sao sòng mạng xã hội sống chết hải ngoại quyết định vượng lộc tiệm nail mi.', translation: 'Đánh giá sao Yelp/Google', example: 'Leaving a five-star Yelp review with photos helps small businesses immensely.', blankSentence: 'Mention my name on your ____ to get five dollars off next trip.', emoji: '⭐' },
      { id: 'b16-5', word: 'Complimentary lotion', ipa: '/ˌkɒmplɪˈmentri ˈləʊʃn/', definition: 'Tuýp sữa kem thơm dịu bồi tẩm mát mịn tay dâng tặng biếu xén khách sướng lòng viết đánh giá.', translation: 'Kem thơm bôi tay tặng kèm', example: 'As a thank you, we give a sweet-smelling complimentary lotion bottle.', blankSentence: 'Claim your ____ after showing us your posted review.', emoji: '🧴' }
    ],
    structures: [
      { id: 'str116-1', phrase: 'Do you mind if I take a quick picture of your gorgeous nails for our Instagram page?', meaning: 'Sếp huyên ơi sếp có ngại ngùng gì không cho em chụp củ tấm ảnh bộ móng mướt quá xá lộng lẫy của chị quăng lên báo mạng xã hội Instagram của tiệm em nha sếp?', vietnamese: 'Gợi mở nhẹ nhàng lịch sự gạt bay tâm lý nghi ngại chụp hình.' },
      { id: 'str116-2', phrase: 'If you love your experience today, leaving us a good Yelp review would help us so much!', meaning: 'Dạ sếp hử huyên, nếu nay làm móng làm mi dưỡng mịn màng lọt lòng sướng bảnh tẻn nách, sếp quệt tay tặng sòng tiệm tụi em quả review 5 sao trên Yelp/Google quý giá cút lộc phát cứu đói bọn em dữ lắm á sếp!', vietnamese: 'Câu chào gạ review kịch sành điệu, ko lo sượng sùng dột sườn.' }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Guiding Glamour Shots & Sweeping a 5-Star Review',
        participants: [
          { name: 'Chloe', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Chloe', role: 'Technician' },
          { name: 'Madelyn', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Madelyn', role: 'Client' }
        ],
        lines: [
          { participant: 'Chloe', text: 'And... done! Take a look, Madelyn. Your acrylic French tips with the little diamond embellishments are looking phenomenal!', translation: 'Và... tèn ten xong xuôi nuột nà nhe n n n n! Sếp Madelyn ngắm quả móng coi. Bộ móng Acrylic vẽ đầu French dẹt thon gọn viền nhũ đính dăm hột kim cương pha lê bốc hỏa lung linh phen-nô-mê-nồ lộng lẫy chói lóa mắt kịch trần luôn á sếp yêu hỡi!' },
          { participant: 'Madelyn', text: 'Oh my god, Chloe! These are to die for! Seriously, my hands look so expensive right now!', translation: 'Trời hỡi ơi đất ơi Chloe béo ơi xinh xỉu đứng tim rụng rốn luôn cưng lừa xòe óng à! Nhìn bộ móng sang chảnh bảnh sành điệu mắt mọc tiền quý tộc dữ dội khiếp sườn nhe cưng!' },
          { participant: 'Chloe', text: 'Thank you, sweetie! Do you mind if I take a quick picture of your gorgeous nails for our Instagram and social media post?', translation: 'Dạ em sướng sung sướng cảm ơn sếp nhiều nhe sếp Madelyn phất lộc lộc nha! Sếp có ngại ngùng gì hông cho em lia củ camera điện thoại thộp cúc tấm ảnh bộ móng bốc chói sang sặc sỡ bọc sành điệu này thảy lên Instagram làm truyền thông sòng tiệm nhe sếp?' },
          { participant: 'Madelyn', text: 'Not at all! Snap away. What do I do with my fingers?', translation: 'Ối dợ ngại ngùng gì tầm này cưng huyên ơi! Cứ chụp xả phanh thúng đi cưng hử. Giờ tay chân thế này tạo búa lèo khều uốn bẻ ra sao dợ em yêu?' },
          { participant: 'Chloe', text: 'Awesome! Let\'s use this small fluffy white fur backdrop and desk lighting. Softly pose your fingers like you are gently wrapping them around this bottle—just relax your wrist and fingers, perfect! "Click!". That looks incredibly sleek!', translation: 'Dạ bảnh quá xá sếp yêu! Chị đặt tay gác lên tấm vải thảm da lông thú xốp trắng bông xù sướng mướt tơ mịn này nhen sếp, để em bẻ chỉnh góc ánh sáng rọi chiếu chuẩn đét "lighting" nha sếp. Chị mềm tay lọt dỗ nhè nhẹ "pose your fingers" khều khẽ khơ tay đan chéo quấn hờ hờ chung quanh hũ dưỡng này nè—chị lỏng tay tay mềm như bún đúng điệu luôn thế á, chuẩn cơm mắm sướng rón nách nha sếp! "Tách!". Uầy coi ảnh lên phom móng mướt rượt óng ả cực độ tột bực dọ sếp!' },
          { participant: 'Madelyn', text: 'Let me see. Wow, that looks like a hand model ad! I\'m so obsessed with your work!', translation: 'Đâu đưa chị dòm nách ảnh tí coi cưng... Uầy rụng tim bay rụng trứng, ảnh lên mướt óng nhìn y hệt mẫy móng tay người mẫu quảng cáo mỹ phẩm hàng hiệu Paris á cưng! Chị nghiện tay nghề bọc dũa tinh túy của cưng dữ rồi nhe cưng!' },
          { participant: 'Chloe', text: 'Aww, that makes my day! Madelyn, if you love your experience today, leaving us a good Yelp review with this picture would help us so much to draw in fresh customers! If you show the front desk your posted review, we\'ll gift you a free sweet lavender complimentary lotion bottle as our heartfelt thank you!', translation: 'Dạ ngọc ngọt bùi tai sướng bay nổng bổng chân tạ mâm khen nức lòng sếp yêu huyên hử hộc! Sếp Madelyn hỡi, nay sòng trải nghiệm mướt sướng mịn mượt rít bõ công, sếp thọc tay bấm tặng bọn em một feedback quả Yelp review 5 sao ghim dán tấm ảnh tay ngọc này lên Yelp nhe sếp huyên hộc, sế vớt này giúp cứu đói gột tiệm gom lộc kéo thêm dàn khách lạ vô sòng mạn mượt mượt nhe sếp huyên. Sếp bấm xong xách tay qua quầy lễ tân trình là tụi em xin lọng trọng biếu tặng dâng sếp một chai complimentary lotion kem bôi tay hương hoa oải hương ngọt lịm organics sướng mịn mềm mượt bõ nách tạ lễ lộc tri ân sếp liền nha sếp huyên iu!' }
        ]
      }
    ]
  },
  {
    id: 'beauty-17',
    title: 'Booking Like a Pro',
    vietnameseTitle: 'Khi là Khách: Đặt lịch hẹn mượt mà qua điện thoại',
    category: 'Communication',
    subCategory: ['For Beauty Professionals'],
    icon: '📞',
    color: '#3498DB',
    description: 'Cách gọi điện hỏi giờ trống của tiệm (availabilities), chỉ định thợ "Danny" chuyên làm móng yêu mến và hỏi khâu phá tháo gel móng cũ.',
    words: [
      { id: 'b17-1', word: 'Availabilities', ipa: '/əˌveɪləˈbɪlətiz/', definition: 'Những khung kẽ thời gian trống ca bàn rảnh rỗi của dàn thợ sòng còn hở phục vụ dọn đặt.', translation: 'Khoảng thời gian trống lịch', example: 'Do you have any afternoon availabilities this Friday for hair extensions?', blankSentence: 'Please let me check our computer calendar for any open ____.', emoji: '📅' },
      { id: 'b17-2', word: 'Specific technician', ipa: '/spəˈsɪfɪk tekˈnɪʃn/', definition: 'Ngôi vị kỹ thuật danh thợ "ruột" khách sủng ái chỉ định giũa riêng ko dùng thợ lạ.', translation: 'Thợ chỉ định/Kỹ thuật viên ruột', example: 'I want to book Danny as my specific technician because he draws amazing flowers.', blankSentence: 'Can I request a ____ or is it random assignment?', emoji: '🎖️' },
      { id: 'b17-3', word: 'Soak off', ipa: '/soak off/', definition: 'Thao tác tháo cạo phá dỡ nước sơn cũ gel bột bám bám ngâm tẩm bông cồn acetone cho rũ mủ rã móng.', translation: 'Tháo dỡ gel cũ/Ngâm tháo gel', example: 'Don\'t peel your gels off yourself, book a professional soak off instead.', blankSentence: 'My manicure is old, I will need a ____ first.', emoji: '💅' },
      { id: 'b17-4', word: 'Estimated duration', ipa: '/ˈestɪmeɪtɪd djuˈreɪʃn/', definition: 'Tổng lượng thời dảnh dự tính ước lượng thi triển lỳ sạch cho trọn ca nối làm mút đẹp.', translation: 'Thời lượng ca dự kiến', example: 'The estimated duration of a full set of hybrid lashes is about ninety minutes.', blankSentence: 'What is the ____ of this spa facial treatment?', emoji: '⏱️' },
      { id: 'b17-5', word: 'Confirmation text', ipa: '/ˌɒnfəˈmeɪʃn tekst/', definition: 'Dòng chữ sấp tin nhắn gửi xác thực chốt giờ cúng sòng an lành ko lo dột kẽ hụt hẹn.', translation: 'Tin nhắn xác nhận lịch', example: 'Check your phone, I just pinged your booking confirmation text.', blankSentence: 'I haven\'t received the ____ yet, did my booking go through?', emoji: '💬' }
    ],
    structures: [
      { id: 'str117-1', phrase: 'Do you have any openings this Friday afternoon for a full set of lashes?', meaning: 'Thứ Sáu tuần này tầm dạo chiều bên tiệm mình có hở ca trống mở sòng nào làm nối trọn bộ mi mới hybrid volume được hông tiệm ơi?', vietnamese: 'Câu đặt chỗ sành điệu, bao phủ đầy đủ thời gian và dịch vụ.' },
      { id: 'str117-2', phrase: 'I have some old gel polish that needs a soak off first.', meaning: 'Dạ móng chân/tay em đang bám dính lớp móng gel thạch cũ múp cần tháo dỡ sủi tẩy ra trước nhen tiệm.', vietnamese: 'Thông báo trước dịch vụ tẩy móng cũ để tiệm sắp xếp xếp thợ căn ca đúng giờ, tránh bị lố giờ khách khác.' }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Snatching a Friday Slot with Master Danny',
        participants: [
          { name: 'Ivy (Client)', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ivy', role: 'Client' },
          { name: 'Salon Front Desk', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SalonSecret', role: 'Host' }
        ],
        lines: [
          { participant: 'Ivy (Client)', text: 'Hi! I\'d like to book an appointment for this coming Friday. Do you have any openings in the afternoon for a full set of acrylic nails?', translation: 'Dạ xí xa xí xô alo alo! Em tính đặt lịch mông má mọc móng cho chiều chiều Thứ Sáu tuần này ạ. Không biết tầm dạo chiều bảnh sảnh bên tiệm mình có hở trống block ca nào đắp đinh Acrylic trọn bộ full-set mới hông tiệm yêu?' },
          { participant: 'Salon Front Desk', text: 'Hi sweetheart! Let me check our computer schedule. Yes, we have two afternoon availabilities at 2:00 PM and 4:30 PM. Do you have a specific technician you want to request?', translation: 'Dạ tọt lò alo alo chào tình yêu nhen sếp ơi! Đợi em tọc mâm máy tính quét lịch tí xíu gạn ca rảnh sườn nha sếp huyên hộc. Chà, chiều Thứ Sáu bận rộn đó bên em hở được dăm ca hở thâu rớt đúng 2 khung giờ trống bảnh bọ ngon dột á sếp: lúc 2 giờ trưa tầm mướt với 4 rưỡi xẩm sảnh nè sếp. Sếp bảnh có muốn đề cử chỉ định bạn thợ cưng "specific technician" tủ vàng nào thi triển sướng mông má móng sườn riêng cho sếp hông dợ sếp?' },
          { participant: 'Ivy (Client)', text: 'Oh, absolutely! I want to request Danny as my specific technician. He did my friend\'s set and they were absolutely gorgeous. Also, I have some old gel-X polish that needs a soak off first before we layout the new set. Does he have time for that?', translation: 'Dạ ôi sướng rơ dột rập đúng ý rộc luôn tiệm ơi! Cho em găm đặt gạch rỉ tay đúng sư phụ Danny múa dũa móng vẽ sườn giùm em nha. Ổng đẽo bộ móng đợt tết cho bồ em mướt rượt đẹp mê tơi rụng rốn, nay ghé em đu liền sếp. Với sườn tay em đang bám dính ít gốc móng thạch tháo Gel-X cũ bị sứt mủ rách dơ móng móng, cần sủi tẩy ngâm ngâm "soak off" lột rũ sạch sẽ ra trước rồi mới đập Acrylic mới lên được á dợ. Sếp Danny bận rộn đó gạn ráng đủ dũa mài dặm nách gột phá móng cũ cho em luôn kịp dọn phom hông tiệm ha?' },
          { participant: 'Salon Front Desk', text: 'Danny is indeed a wizard! Let me look... Perfect, he is completely open for the 2:00 PM timeslot. The estimated duration for a full acrylic set plus a soak off and some basic nail painting will take about ninety minutes. I\'ve secured this timeslot for you under the name Ivy. You should receive a confirmation text on your phone in a minute!', translation: 'Dạ chuốt sướng ruột Danny rộc là sư phụ phù thủy sòng tiệm dũa múa cọ bay lướt rực lộc phát rỡ lắm sếp ơi huyên hử hộc! Để em rà rây kẽ máy sườn... Uầy nở hoa trúng phóc dầm nách luôn nè, lúc 2 giờ chiều tháy sếp Danny thong thả mở sòng sướng rảnh rỗi ca đó á sếp. Tổng lượng ước tính thi công tháo sủi ngâm Gel-X cũ cạo phá dọn mâm bôi keo dũa Acrylic đắp phom mơn trớn sướng mướt kéo dăm mọc dăm nách là ngót nghét thời lượng "estimated duration" tầm 9 giờ mười phút dộ tiếng rưỡi 90 phút nhen sếp huyên. Em đã chốt giữ secured timeslot khóa cứng ngắt ca xôi thịt dột sườn cho sếp dưới tên Ivy cưng rồi nhen sếp ơi. Sếp rờ rút máy ra check xem hốt dính dăm nách gạt dộp tin nhắn xác nhận lịch "confirmation text" reo tinh tinh liền kẽ kẽ mé điện thoại trưa nay luôn nha sếp yêu!' },
          { participant: 'Ivy (Client)', text: 'Yes, just got the text! You girls are amazing. Thank you, cant wait!', translation: 'Dạ tinh tinh dội reo hột nách máy em nhận được găm tin nhắn xác nhận chốt rồi nhen sếp yêu hộc ơi! Dàn tiếp đón lấp lánh phục vụ bảnh bẹ tươm tất quá xá mướt rượt hà. Em ngóng sướng run người đợi Thứ Sáu tót ghé tiệm hốt mông má móng liền nè sếp iu hử huyên nhọc!' }
        ]
      }
    ]
  },
  {
    id: 'beauty-18',
    title: 'Client Personal Wants',
    vietnameseTitle: 'Khi là Khách: Trình bày cơ địa dị ứng, thích phom nhã nhặn tự nhiên',
    category: 'Communication',
    subCategory: ['For Beauty Professionals'],
    icon: '🧘',
    color: '#EAF2F8',
    description: 'Cách dặn thợ mi mắt dễ cay chảy nước mắt sống, cơ địa dị ứng bụi keo monomer, thích sơn nude bo tròn hạt hạnh nhân.',
    words: [
      { id: 'b18-1', word: 'Allergic', ipa: '/əˈlɜːdʒɪk/', definition: 'Tình trạng cơ địa kích ứng dữ dội rát tấy nổi vết khi đụng hít phải monomer keo tháo mi nồng.', translation: 'Bị dị ứng/Dễ mẩn đỏ', example: 'I am highly allergic to cheap acrylic powder, so I always request pure UV gel.', blankSentence: 'Are you ____ to any specific skin care ingredient?', emoji: '👃' },
      { id: 'b18-2', word: 'Natural looking', ipa: '/ˈnætʃrəl ˈlʊkɪŋ/', definition: 'Lối mông má tôn vẻ mộc hài hòa thanh cao không dữ dội lộ liễu.', translation: 'Vẻ ngoài tự nhiên/Nhã nhặn', example: 'I prefer a natural looking set of eyelashes that doesn\'t fake my face.', blankSentence: 'Keep the paint thin to maintain a ____ style.', emoji: '🌿' },
      { id: 'b18-3', word: 'Slightly rounded', ipa: '/ˈslaɪtli ˈraʊndɪd/', definition: 'Kiểu móng giũa bo hờ hờ hai biên sườn tránh đầu xơ nhọn cào trầy sứt da sướt cổ.', translation: 'Bo tròn nhẹ đầu móng', example: 'Give me a slightly rounded square shape so it won\'t snag on my baby\'s blanket.', blankSentence: 'File the edges till they are ____.', emoji: '💅' },
      { id: 'b18-4', word: 'Sensitive eyes', ipa: '/ˈsensətɪv aɪz/', definition: 'Bờ rèm mắt mỏng tanh dễ chảy lờ nước sống chảy ròng ròng tức rát hít hơi dán mi.', translation: 'Mắt mỏng/Mắt nhạy cảm', example: 'Since I have sensitive eyes, we must use premium low-fume lash adhesive glue.', blankSentence: 'Lash extension fumes can irritate ____ easily.', emoji: '🥺' },
      { id: 'b18-5', word: 'Classic nude', ipa: '/ˈklæsɪk njuːd/', definition: 'Tông sắc tố tố sơn màu beige mộc mạc thanh thoát tôn bờ da láng bảnh sành.', translation: 'Màu sơn nude kinh điển', example: 'A classic nude coat is our salon\'s number one request for corporate bosses.', blankSentence: 'I think a warm ____ matches your suit perfectly.', emoji: '☕' }
    ],
    structures: [
      { id: 'str118-1', phrase: 'My eyes are highly sensitive to strong adhesive glue; could we use a hypoallergenic glue instead?', meaning: 'Mắt em mỏng mỏng màng dễ xốn nhạy cảm cay rát nhói chảy nước mắt sống với keo dán dính mi hơi cay nồng lắm sếp thợ ơi, không biết tụi mình có keo hypoallergenic ít kích ứng dị ứng chuyên trị mắt mỏng gối đầu xài thay thế được hông sếp?', vietnamese: 'Yêu cầu bảo trọng sức khỏe tinh tế tế nhị hãm bớt bốt khó hại mắt.' },
      { id: 'str118-2', phrase: 'I prefer a natural-looking set with almond shape, please.', meaning: 'Dạ em sủng phái thích kiểu dáng bộ móng mi vẻ ngoài natural-looking mộc nhã dẻo mềm bo phom almond hạt hạnh nhân vút thon thôi nhe sếp.', vietnamese: 'Chọn lựa phong thái thẩm mỹ nhẹ nhã, tránh làm quá tay thô kệch.' }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Guiding Low-Fume & Almond Natural Preferences',
        participants: [
          { name: 'Chloe (Client)', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Chloe', role: 'Client' },
          { name: 'My (Lash & Nail Master)', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=My', role: 'Technician' }
        ],
        lines: [
          { participant: 'My (Lash & Nail Master)', text: 'Alright Chloe, you are all booked in for a full lash extension split and a gel overlay nail manicure. Let\'s discuss your eyes and hands first so we can pick your customized tools.', translation: 'Dạ rồi chị Chloe bảnh ơi! Sòng ca chiều nay chị chốt đặt trọn gói nối mi tháp măng volume cộng dịch vụ sơn thạch gel phủ đắp manicure móng tay đầy ắp nhen sếp huyên hộc. Tụi mình rỉ tai gàn kẽ bàn thảo kĩ chuyện phom mắt rèm làn mi với da móng tay sếp xơ xơ trước đặng em vác đúng dàn đồ nghề bốt keo sáp chuyên dụng tương thích cưng sếp bảnh chành bối luôn nha sếp!' },
          { participant: 'Chloe (Client)', text: 'That\'s great, My! First of all, my eyes are highly sensitive to strong adhesive glue. The last time I got volume lashes elsewhere, I cried for hours because of the fumes. Could we use a hypoallergenic, low-fume glue instead?', translation: 'Uầy chu đáo quá cưng My béo ơi hộc, vậy chị thích mê á nhe cưng! Điểm găm đầu tiên chị dặn kĩ nì: mắt của chị mỏng tanh rây rẫy dễ bị nhạy cảm sưng rát xót xốn chảy ròng ròng nước sống rát buốt "highly sensitive" với ba cái hơi keo dán xì dầu dính bết dính mi dột nạ lắm à nhen. Bữa trước bon chen nhào vô tiệm nọ nối mi chùm mi dày sập sụp xong mắt dính sặc dột fumes hơi keo bốc xộc rát buốt chị chảy lệ ròng rã dột sườn tức tưởi sưng húp mấy buổi trời hãi vía á bồ. Bên mình có loại hypoallergenic keo đặc chế không bay mùi hương cay ít rát xót thay cộp bọc vô nối mượt giùm chị được hông cưng?' },
          { participant: 'My (Lash & Nail Master)', text: 'Absolutely! We have a premium medical-grade, zero-fume adhesive glue specifically for sensitive eyes. It dries a second slower but is extremely gentle. What about your nails?', translation: 'Dạ sướng nách sế huyên sến sủi lo xa chuẩn đét rồi sếp iu ơi! Bên sòng em găm sẵn dòng keo y khoa organic siêu lành đắt đỏ "zero-fume" keo trơ hơi xót nhò đặc dụng dõng dạc bảo trợ cho dàn mắt mỏng nhạy cảm dễ chảy lệ sưng đỏ sườn của sếp nè sếp. Dòng keo nối lách này tuy mút bám khô chậm đi một nhịp chân chim rùa bò cơ mà nhẹ nhã dịu bẩm êm híp rặng mắt êm ru rù mượt sướng nách ko cay xíu xìu xiu nào đâu sếp bảnh nhe. Còn phom bàn tay ngọc móng sườn thì mông má ra sao sếp ha?' },
          { participant: 'Chloe (Client)', text: 'I prefer a natural-looking set with almond shape, slightly rounded at the tips so they don\'t scratch my face. For colors, just a simple, clean coat of classic nude and we are good to go!', translation: 'Dạ dũa phom dáng móng tay em sủng phái kiểu "natural-looking" thon nhã bảnh tẻn mộc tự nhiên ngọc ngà, bo dáng almond hạt hạnh nhân bo đầu móng Slightly rounded bo mượt tròn xoe đầu sườn ngón nhen cưng, chứ đừng đẽo nhọn sắc bén quào sượt rách tơi tả sướt sòn sượt sườn mặt gãi má ngứa sướng nè. Màu sơn lướt thạch dột sườn phủ cho chị tông classic nude be be sữa cổ điển nhã sang bảnh sạch mượt bóng kính là trọn đạo luôn á em cưng yêu hỡi!' },
          { participant: 'My (Lash & Nail Master)', text: 'Gorgeous choices! Very minimal and high-wealth vibe. Consider it done, you can relax and nap now, I\'m starting the lash set first using our softest silk hairs!', translation: 'Dạ rực ngọc xuất sắc lướt rít chuẩn gu sành quý tộc "high-wealth" nhà giàu đơn giản nhã sang tôn sườn tay ngọc sếp Chloe ơi huyên hộc! Găm đúng sườn bài bo mượt đét nhe sếp sướng ơi. Giờ sếp cứ ngả hông kê đầu gối lót eo rã cơ thả mắt lim dim nhấp ngủ dăm cốc giấc mát rượi mát rượi nhe sếp huyên hộc, em lách gột rèm mi nối tơ lụa mềm xốp nhẽ nhại kịch sướng cho sếp đầu tiên nha!' }
        ]
      }
    ]
  },
  {
    id: 'beauty-19',
    title: 'Client Real-Time Tweaks',
    vietnameseTitle: 'Khi là Khách: Sửa sai thợ trực tiếp lúc múa cọ dũa phom',
    category: 'Communication',
    subCategory: ['For Beauty Professionals'],
    icon: '🛠️',
    color: '#F9EBEA',
    description: 'Cách nhắc nhở thợ móng tay giũa phom bị vẹo lệch méo sườn (crooked), không đều góc cạnh, mài sắc bén cào trầy mặt mũi.',
    words: [
      { id: 'b19-1', word: 'Uneven', ipa: '/ʌnˈiːvn/', definition: 'Tình trạng phom dũa bên góc sườn dày xéo lệch ngắn dột lệch phè không tăm tắp chắt bện song hành.', translation: 'Bị lệch góc/Không đều phom', example: 'Don\'t leave her cuticles uneven, file them symmetrical.', blankSentence: 'The length of my ring fingers feels a bit ____.', emoji: '⚖️' },
      { id: 'b19-2', word: 'Trim down', ipa: '/trɪm daʊn/', definition: 'Rút co sụt bớt chiều dài móng hoăc mi bớt bớt đi tí xíu dăm cự sườn.', translation: 'Cắt dũa ngắn bớt sụt bớt', example: 'I like this extension style but please trim down the tips by two millimeters.', blankSentence: 'The lash master had to ____ the inner eye lash segments.', emoji: '✂️' },
      { id: 'b19-3', word: 'Slightly crooked', ipa: '/ˈslaɪtli ˈkrʊkɪd/', definition: 'Tình trạng dán bột thạch phủ móng lệch vẹo bẻ sườn xích lõm bên hông tay dũa.', translation: 'Hơi bị vẹo méo sườn móng', example: 'This middle finger acrylic was glued slightly crooked, can we realign it?', blankSentence: 'Before we dry beneath LED lamp, this nail is ____.', emoji: '📎' },
      { id: 'b19-4', word: 'Numb', ipa: '/nʌm/', definition: 'Trạng thái cơ tay chân tê buốt rêm cứng do ngồi mông kê bẹp lép dột xương sườn mỏi dài xụ.', translation: 'Bị tê cứng mông tay chân', example: 'Sitting upright for three hours of microblading made my lower thighs go numb.', blankSentence: 'My toes are feeling ____ under this cold foot water.', emoji: '🥶' },
      { id: 'b19-5', word: 'Too sharp', ipa: '/tuː ʃɑːp/', definition: 'Cạnh sườn móng nhọn bén sắc lẹm lách góc kềm sấy dễ bới cào rách chảy thớ thớ.', translation: 'Góc móng sắt nhọn hoắt dột rát', example: 'Rounded edges prevent the stiletto tip from being too sharp during day routines.', blankSentence: 'Please smooth out this corner, it is ____.', emoji: '🪒' }
    ],
    structures: [
      { id: 'str119-1', phrase: 'Could you file this side down a little bit more? It feels slightly uneven.', meaning: 'Dạ cưng dũa nêm rà mài bớt mé cạnh hông này hở thụt vô chút xíu nữa giùm em nhen? Nhìn kĩ thấy hơi bị vẹo méo lệch phom xíu chưa tăm tắp nè cưng hử.', vietnamese: 'Nhắc thợ khéo léo ngọt giọng lách dũa lại, ko gây bực dọc sượng sòng thợ.' },
      { id: 'str119-2', phrase: 'I think this nail is a bit crooked; could you straighten it before curing it under the lamp?', meaning: 'Cưng ơi chị nghía ngón này thợ dán đắp bị lệch crooked mé vẹo xíu sườn dột á cưng, cưng lách nắn kéo phom móng mọc cho ngay ngắn thẳng thớm trước khi đút vô lồng hơ sấy sấy LED sấy khô nhen.', vietnamese: 'Can thiệp nóng trực tiếp khâu thi công móng bột, sửa sớm đỡ tốn công phá mài lại cực thân.' }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Politely Halting a Crooked Pointer Nail layout',
        participants: [
          { name: 'Kylie (Client)', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kylie', role: 'Client' },
          { name: 'Danny (Nailmaster)', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Danny', role: 'Technician' }
        ],
        lines: [
          { participant: 'Kylie (Client)', text: 'Hey Danny! The hybrid acrylic base is taking shape nicely. But hold on, can we check this left pointer finger?', translation: 'Dạ alo sếp Danny phù thủy múa cọ ơi! Cái bột nền Acrylic đắp mướt bay tăm tắp mịn đẹp phết nhe. Cơ mà khoan sụt nách rã máy tí, chị em mình nhòm dọn lại ngón trỏ mé bàn tay trái này xíu dợ cưng hử?' },
          { participant: 'Danny (Nailmaster)', text: 'Sure, Chloe. What is on your mind? Is the length okay for you?', translation: 'Dạ Chloe bảnh ơi có vụ gì sực dột sườn nhe sếp huyên hộc? Sếp nghía chiều dài đắp tột móng thon ngang tầm này mượt vừa mắt sếp chưa sếp?' },
          { participant: 'Kylie (Client)', text: 'The length is totally fine, but I think this nail is a bit crooked; could you straighten it a tiny notch before curing it under the lamp? Look from this top angle, the tip extension bends slightly curved to the left.', translation: 'Dạ chiều dài dập ngang tầm tầm thì nuột đét rồi cưng Danny bốc ơi hộc. Khổ nỗi dòm kĩ chị thấy quả ngón trỏ móng Acrylic này đắp đắp sườn bột nó bị slightly crooked mé méo vẹo vẹo sườn nghiêng lệch xíu xìu xiu á cưng hộc; cưng quệt nhè nhẹ nắn kéo bẻ kéo trục phom dũa cho dẻo thẳng thớm tắp tăm tắp chuẩn trục lại giùm chị trước khi đút gạt tay hơ máy sấy sấy LED khô rang nha bồ. Nì sếp nhìn bóp hướng từ đầu mắt chị dột ngắm xuống sườn này coi, cái sườn chóp móng nhọn nó bend uốn quẹo lách sạt sang góc mé bên trái xíu dột á dợ.' },
          { participant: 'Danny (Nailmaster)', text: 'Oh! Spot on, Chloe! I didn\'t notice it from my sitting angle because of the desk lamp shadow. Thank you so much for catching that early! Let me melt the bond slightly, realign the tip, and file this side down a little bit more so it is perfectly straight and matches all other fingers.', translation: 'Dạ ối trời hỡi sập nghẹt rớt bão sấm sét xém lọt nách trật đường luồng dột á sếp Chloe béo ơi hộc! Mắt tinh ranh kịch trần kình địch quá sếp! Em ngồi bò mé sườn sọc sườn bệ đèn bàn nó rọi sập cái vạt bóng râm che mờ tẹt em chả mảy may nghía ra méo vẹo rộc nách. Em tạ tạ ơn sếp huyên hốc tinh ý hú vang níp sửa sớm nhen bồ hộc yêu! Để em chẹt nhểu tí tháo bột nắn dẻo rờ kéo phanh bong tróc thẳng thớm phom móng bẻ bặt cộp lại, dũa rà bớt mồi "file this side down" sườn trái lún thụt tị cho mộc phom dạt cân tăm tắp song hành tươm tất bảnh sành điệu mướt mượt kịch sướng cùng dàn ngón gót kề bên luôn nha sếp yêu!' },
          { participant: 'Kylie (Client)', text: 'Yes, that\'s it! Perfect straightness achieved nene! Also, when you lock the top coat, can you buff the edge sides slightly? I don\'t want them to feel too sharp and scrape my skin.', translation: 'Dạ đúng phóc u nắn chuẩn bài hết nấc trúng kẽ rồi cưng hộc Danny ơi! Trục móng thẳng tắp tăm tắp láng nuột mịn thạch rồi nhe cưng sướng rơ nách ghê. Có dăm nêm dặn thêm xí: lát nữa chét sơn gel bóng khóa seal top coat đầu móng á cưng hộc huyên, cưng rà rà mài giập buffer sườn cạnh đầu móng bo tròn Gently láng láng giùm chị xíu nhen sếp, tránh móng nhọn quá bét nhe "too sharp" sắc sảo lướt sượt rách tơ tướp sướt đỏ da thịt chị á bồ yêu hộc!' }
        ]
      }
    ]
  },
  {
    id: 'beauty-20',
    title: 'Client Complaints & Re-dos',
    vietnameseTitle: 'Khi là Khách: Đòi làm lại móng mi hỏng, đòi thối cọc refund bồi thường',
    category: 'Communication',
    subCategory: ['For Beauty Professionals'],
    icon: '🗯️',
    color: '#D4AC0D',
    description: 'Cách tút lời xả cục hậm hực gắt gao khi thợ dũa móng mài mài đau rát phồng móng méo bột bột (lifting), mi bết cục đòi refund dỡ keo.',
    words: [
      { id: 'b20-1', word: 'Lifting', ipa: '/ˈlɪftɪŋ/', definition: 'Tình trạng móng thạch gel bột bị phồng bong bọt rộp rỗng chân mép sườn, ngấm nước rã nhanh hư móng thật.', translation: 'Bị hở bong mép bột/Lifting', example: 'Lifting around the cuticle area usually happens when nail oil prep isn\'t completely dry.', blankSentence: 'After only four days, my acrylics started ____.', emoji: '💅' },
      { id: 'b20-2', word: 'Sore', ipa: '/sɔː(r)/', definition: 'Cơ rát thịt thớ dột da do dũa sấn quá sát nhịp rát buốt xót đỏ sườn.', translation: 'Bị rát sưng đỏ rát nhức', example: 'My thumb cuticle skin is extremely sore after the assistant cut it too deep.', blankSentence: 'Nail files on thin beds make them feel very ____.', emoji: '🔴' },
      { id: 'b20-3', word: 'Ugly', ipa: '/ˈʌɡli/', definition: 'Chất lượng dột sòng thô thiển, dìm nhan bét nhe dơ tệ ko ngửi nổi.', translation: 'Xấu thô/Hỏng tệ hại', example: 'The lash application looks so ugly and clumpy, I look like a spider!', blankSentence: 'Please fix this, this crooked shape is completely ____.', emoji: '❌' },
      { id: 'b20-4', word: 'Unsatisfactory work', ipa: '/ˌʌnsætɪsˈfæktəri wɜːk/', definition: 'Tay nghề kĩ thuật lỗi hỏng dột tệ dột nát nát chắp vá của thợ học việc rước phốt tiệm.', translation: 'Tay nghề hỏng/Chất lượng tồi', example: 'You cannot charge professional pricing for such unsatisfactory work.', blankSentence: 'I demand a manager review because of this ____.', emoji: '📉' },
      { id: 'b20-5', word: 'Partial refund', ipa: '/ˈpɑːʃl ˈriːfʌnd/', definition: 'Phần tiền sòng thối rã hoàn trả dạt cọc bớt trừ 30-50% làm êm hậm hực tức tối hận dột.', translation: 'Hoàn lại một phần tiền dăm lẻ', example: 'I am willing to accept a partial refund for the time wasted today.', blankSentence: 'If you can\'t redo it right, I want a ____.', emoji: '💵' }
    ],
    structures: [
      { id: 'str120-1', phrase: 'Look, the acrylic has started lifting and my cuticles are burning; I can\'t pay...', meaning: 'Chị coi giùm coi, đắp bột mới hoa sương dăm buổi mà mép móng đã hở phồng rộp lift bong bốc u bọt rồi đầu khóe móng rát bỏng buốt nhức cháy sườn rạt đỏ nè dơ á chị; em ko đúc đóng đủ sòng tiền hỏng dịch vụ hỏng thế được đâu nhe.', vietnamese: 'Gay gắt đanh đá đòi lại công bằng chính đáng bảo vệ ví tiền và thân diện.' },
      { id: 'str120-2', phrase: 'I am very disappointed with this lash set; they are way too clumpy and heavy.', meaning: 'Em thảm sầu thất vọng tràn trề trề rộc nách với bộ mi châm chọc dán bết dính bệt này tiệm ơi; mi gì vón cục vón bệt bét nhè dầy cộp nặng trĩu sụp súp rèm mi sưng cả khóe á bồ yêu hộc.', vietnamese: 'Khoe ranh rọc bốt phốt chói, buộc tiệm đổi master sòng dỡ gấp gột bọc mới.' }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Barging in with Sore Fingers and Demanding Partial refund',
        participants: [
          { name: 'Kisha (Unsatisfied Client)', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kisha', role: 'Angry Customer' },
          { name: 'Tram (Salon Manager)', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tram', role: 'Salon Manager' }
        ],
        lines: [
          { participant: 'Kisha (Unsatisfied Client)', text: 'Excuse me! I want to talk to the manager right now! Look, the acrylic has started lifting and my cuticles are burning and sore; I can\'t pay full price for this unsatisfactory work!', translation: 'Aloo aloo dẹp mâm gạt dũa lánh hết ra nì! Kêu giùm tớ quả chủ sòng tiệm manager bệ dẹp mâm quản lý ra đây nói chuyện lẹ giùm cái coi! Nhòm dốc sườn coi bệ bàn tay coi, móng bột Acrylic làm hôm qua sấy sọc lộn xà ngầu Gel-X gì nay viền mép đã hở rộp lifting bong tróc bọc bong bóng khí, kẽ móng sườn kẹp rát buốt xót đỏ rực "sore" cháy rát rạt nhức buốt dại thịt cả sòng lên rồi nè chị hử huyên! Em bách oán ko bao giờ đúc một n n cắc đóng đủ hóa đơn sòng phẳng cho ca tay nghề hôi nách thô kệch dột tệ như dìm hàng "unsatisfactory work" dột nhục này đâu nhe bồ yêu hộc huyên!' },
          { participant: 'Tram (Salon Manager)', text: 'Oh my, please calm down, Kisha! Sit down with me over here and let me inspect your fingers. Oh! The skin around your nails looks severely irritated and the acrylic is indeed poorly laid. Who did this manicure for you yesterday?', translation: 'Dạ ối, chị Kisha yêu quý ơi lăng xăng hạ giận bốc hỏa tước xẹp cục tức sườn dột chũi ngực xuống nương kỉ sêm em rỉ tai nhen sếp béo hộc! Sếp thong dong rảo chân ngồi hờ hờ mé sopha êm ái mát mẻ em nâng bàn tay ngọc rà nhe kiểm soát thẩm thấu vết dũa dọn móng sọc sọc nhe sếp. Ối chao ôi trời hộc xót ruột chưa! Vùng viền móng rộc thịt sườn dột móng của sếp bị tấy tấy sưng mẩn đỏ xót hoen ướt rát buốt rồi, móng đắp Acrylic sấy lồng bột lồi lõm dầy cộp bọng khí hở rộp tơi tả sạ mé lách quá dợ sếp huyên. Ca dũa móng vẽ sơn gel lệch phom sọc sòng này hôm qua dàn thợ gột nào dốt dột thi triển gạt rộc nách cho sếp dợ chị iu hộc?' },
          { participant: 'Kisha (Unsatisfied Client)', text: 'It was that young apprentice girl sitting at table 4! She kept talking on the phone and filing my real nails down to pulp! The shapes are ugly and I\'m in actual pain. I want a partial refund for my time wasted and I want these monster claws soaked off right now!', translation: 'Còn ai vô đây bét sòng đầu kẽ nữa chị hộc! Quả con bé thợ học phụ việc bàn kẽ số 4 nhí nhố rảnh rỗi đó nách hộc! Đầu thì lo găm dính gác đàm thoại buôn dưa điện thoại bép xép leo toe toe, tay chân thì sấn nhũ thô rà dũa sủi móng móng sạt mạnh bào mòn sạch lớp móng tự nhiên của em nhũn mỏng rát rạt ê buốt bủng thịt sườn dột á bồ hộc huyên hửi! Phom dáng đẽo dũa lên thô bỉ méo mó mập ù xấu đau xấu đớn "ugly" em đau nhói tay giật run người rẫy phát khiếp nè chị. Em đòi tiệm sòng cộp bồi tạ money "partial refund" hoàn thối trừ ít nhất dột sườn nửa mâm tiền thúng dăm củ tổn thất thời sảnh vàng ngọc đống mùng xàm xí của em nha bồ, đồng thời vác cồn sủi Acetone ngâm tháo rã tháo bay phăng bộ vuốt quái thú monster claws quái gở gớm guốc này rã móng rã nách ra xẹp gấp giùm em đi cái coi dợ!' },
          { participant: 'Tram (Salon Manager)', text: 'Kisha, I offer my deepest apologies on behalf of Glossy Co. That apprentice acted completely against our training rules. Let me take action immediately—I\'ll personally perform the fast, gentle soak off for you with our moisturizing olive oil formula so it won\'t hurt your sore fingers. I will issue a full refund for yesterday\'s ticket, plus a complimentary herbal spa hand treatment today to help heal those cuticles. I want to earn back your trust, we truly care about your hands!', translation: 'Dạ sếp Kisha huyên huyên hộc nguôi hỏa sẹp lòng bớt tức nhen sếp ơi quý hóa ơi! Đại diện Glossy Co em cúi rụp mình tạ dâng vạn sương tạ lỗi thành khẩn chân tình sâu thẳm kịch trần gởi sếp nhen sếp huyên hộc. Bạn học việc dốt dột ca bàn số 4 đó đi nách nghịch quy chế nghiêm sòng chấn chỉnh của tiệm em dữ dội rồi sếp ha, lát cụ em tẩn nách lôi cổ phạt lột ca huấn luyện uốn xương nài kỉ sòng liền sếp hộc. Giờ tụi mình sửa hỏng gấp nè: Em đích thân chủ tiệm nhảy ca dốc lực thong dong mát tay, lách tẩm dầu ô liu organics ủ rã "soak off" tháo phay bộ móng hỏng dọn tay nhẽ nhặn nhè nhẹ như lướt sóng sướng rón nách mướt chăn mượt tuyệt đối không xót buốt đau rát tí ty sườn khóe móng mỏng bành rộc nhe sếp hữu! Em hoàn thối vạch thọc rổ rộc két trả sạch sế toàn bộ 100% full refund hóa đơn hôm qua gột ví, cộng dâng tặng sếp gói spa thảo dược ủ dưỡng da khóe móng mịn bóng mát rượi mát rượi tạ lễ chữa lành vẩy xót nứt nẻ đỏ sườn da ngọc sếp hôm nay luôn nha sếp. Em khao khát gột dọn tiếng tăm chắp cọc phục vụ sủng ai lấy lại trọn vẹn lòng tin sướng say của sếp, sòng tiệm Glossy Co nâng niu móng sườn mẹ thiên nhiên tay ngọc sếp kịch trần nực nách luôn á sếp hộc huyên, sếp ban lòng thương cảm dãn bớt cục giận cho em nhe sếp hộc yêu quý!' }
        ]
      }
    ]
  },
  {
    id: 'beauty-21',
    title: 'Dissecting Bills & Tips',
    vietnameseTitle: 'Khi là Khách: Đàm phán ví tiền, thắc mắc phụ phí ẩn, bo tiền tip khôn ngoan',
    category: 'Communication',
    subCategory: ['For Beauty Professionals'],
    icon: '💸',
    color: '#82E0AA',
    description: 'Cách đòi phân bua xuất hóa đơn rành mạch coi dính phụ phí ẩn vẽ ngón nào vẽ móng đắt, rỉ tai thắc mắc mẹo bo tip Venmo xịn.',
    words: [
      { id: 'b21-1', word: 'Breakdown', ipa: '/ˈbreɪkdaʊn/', definition: 'Tờ kê khai phân tách từng mục đồng nhỏ thọc mâm phân phẫu bảng kê xôi thịt sòng phẳng tiền sòng.', translation: 'Bảng kê khai chi tiết hóa đơn', example: 'Ask the cashier for a clear breakdown of the extra thirty dollars.', blankSentence: 'Can I have the itemized ____ before swiping my card?', emoji: '🧾' },
      { id: 'b21-2', word: 'Standard tip', ipa: '/ˈstændəd tɪp/', definition: 'Mức vạch hoa thưởng lộc tri ân thợ sòng sòng phẳng theo phong tục tập quán Bắc Mỹ (thường dao động ngót ngét 15%-20%).', translation: 'Mức tiền boa chuẩn văn hóa', example: 'A fifteen to twenty percent standard tip keeps nails technicians happy.', blankSentence: 'I always write a twenty percent ____ for incredible custom designs.', emoji: '💵' },
      { id: 'b21-3', word: 'Hidden fee', ipa: '/ˈhɪdn fiː/', definition: 'Khoản vòi tiền phụ găm dấm dúi bị lén kê khống bọc xà lơ không báo rành ban mồi đắt.', translation: 'Phụ phí ẩn giấu lấp liếm', example: 'Transparent nail salons never surprise customers with a hidden fee on check-out.', blankSentence: 'Are there any ____ for custom chrome glitters?', emoji: '🕵️‍♀️' },
      { id: 'b21-4', word: 'Venmo', ipa: '/ˈvenməʊ/', definition: 'Ứng dụng chuyển thăng tiền lộc bo thưởng trực tiếp qua sòng điện thoại thợ hải ngoại rất sủng dùng.', translation: 'Ứng dụng ví điện tử chuyển tip', example: 'If you are low on cash, just ask your technician for their Venmo QR code.', blankSentence: 'Can I send my tip directly to your ____?', emoji: '📱' },
      { id: 'b21-5', word: 'Book in advance', ipa: '/bʊk ɪn ədˈvɑːns/', definition: 'Thao tác găm giữ ca sớm gối sòng đón đầu tết lễ sầm uất rác bận kìn kìn.', translation: 'Đặt lịch trước dài ngày', example: 'You must book in advance to secure a pedicure chair on Christmas Eve.', blankSentence: 'I recommend you ____ to avoid long wait times.', emoji: '📅' }
    ],
    structures: [
      { id: 'str121-1', phrase: 'Can you give me a breakdown of the bill? I want to see what this extra thirty dollars is for.', meaning: 'Dạ sếp cho xin tờ bảng kê phân tách breakdown hóa đơn kê chi tiết giùm em xí nhen tiệm; em muốn ngắm nghía kiểm tra rành mạch xem 30 đô kê phụ thu phát sinh thêm này dính ở dịch vụ dũa đắp vẽ hoa hòe nào nhe sếp.', vietnamese: 'Đòi kiểm toán minh bạch, chặn đứng chiêu trò "vẽ" thêm tiền hớp ví.' },
      { id: 'str121-2', phrase: 'Can I tip my tech directly in cash, or do I add it on the credit card?', meaning: 'Cưng ơi chị rỉ tai bo tip lộc tay trực thọc cước direct bằng cash tiền mặt sòng phẳng luôn nhe dợ, hay gộp quẹt chung gõ thẻ ngân hàng sòng tính gộp đầu thu sòng tuốt tuồn tuột dợ cưng?', vietnamese: 'Mẫu câu cực kỳ tinh tế được thợ thích tuyệt đối vì bớt thuế quẹt thẻ.' }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Auditing the Bill & Tipping Warmly on Venmo',
        participants: [
          { name: 'Kylie (Client)', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kylie', role: 'Client at Register' },
          { name: 'Salon Cashier', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SalonSecret', role: 'Receptionist' }
        ],
        lines: [
          { participant: 'Kylie (Client)', text: 'Hi! I just finished my stiletto Gel-X set with Chloe. I noticed my total is a bit higher than the base list. Can you give me a breakdown of the bill? I want to see what this extra thirty dollars is for.', translation: 'Dạ aloo chào rổ tiệm nhen sếp! Em vừa cán sòng mông má xong phom móng nhọn sành stiletto Gel-X siêu bốc lửa bới cọ sư phụ Chloe mọc ra nè. Thấy tổng hóa đơn thanh toán vọt trội lên cao hơn giá niêm yết nền gốc tí xíu á tiệm yêu. Cho em xin mâm bảng kê khai breakdown chi tiết hóa đơn giùm cái nhe sếp huyên; em muốn nghía kiểm tra coi xem 30 đô phụ thu phụ chêm vọt thêm sườn sườn dính kẽ dịch vụ phát sinh nào á sếp dợ hộc?' },
          { participant: 'Salon Cashier', text: 'Of course, Kylie! Let me print out your itemized receipt. So the base Gel-X set is sixty dollars. Then Chloe had to soak off your old thick acrylics—that is a ten-dollar soak off surcharge. And the hand-painted silver chrome on all ten fingers is a twenty-dollar custom nail art design fee. There is absolutely no hidden fee!', translation: 'Dạ sướng nách alo Kylie bảnh ơi! Đợi em nạp giấy búng in cái hóa đơn breakdown kê phân tách rành mạch dâng sếp ngắm cho mát ruột nhe sếp huyên iu hộc! Tổng tiền mâm gốc trơn Gel-X stiletto là 60 đô nà. Có thêm khâu cạo phá đục dũa ngâm Acetone tháo Acrylic cũ bám móng bủng sườn của sếp mướt dăm độ là dính surcharge 10 đô phá móng cũ dã tràng nà sếp; cộng thêm múa cọ chùi chùi bôi bột xi mạ bóng tráng gương "silver chrome" rực rực lung linh óng bạc full 10 ngón tay bốc lửa Chloe quệt vẽ thiết kế custom nail art ghim giá thêm 20 sườn nổ nách gộp vô sọc sòng nhe sếp. Cam đoan tiệm em làm ăn chuẩn mực xưa nay uy tín rực sòng, ko che giếm giấu diếm bôi khống một xu "hidden fee" phụ phí ẩn mập mờ hớp ví nào dơ ráy sếp nhe!' },
          { participant: 'Kylie (Client)', text: 'Oh, okay! That makes perfect sense. I grew up with salons adding random fees, so I always double-check. The soak off and Chloe\'s chrome work were absolute masterpieces, she deserves every penny! Can I tip Chloe directly in cash, or do I add it on the credit card? I have some dollar bills, but I can also use Venmo if she has a QR code.', translation: 'À lẩm nhẩm lo sương đứt kẽ rành rọt thế nghe thấu tình đạt lý đẹt nách rồi tiệm iu ơi! Nhỏ lớn đi dăm ba vương bọc kẽ sòng dột tiệm nail mi cứ bị ba cái trò "vẽ" tiền chém gạt chêm surcharge khống hoang mang chướng tai gai mắt miết hà, nên em gập lòng bảo trọng gõ thẻ scan bill kỹ chi tiết sòng phẳng cho an lòng á sếp hộc huyên. Công nhận khâu dũa tháo móng cũ mượt đét nhe n của thợ Chloe chùi chrome sườn mướt bóng lóng lánh tinh vi y chang tranh bái sư tuyệt phẩm master á, rải đồng nào chuẩn đồng nấy bõ xu bõ lực dữ dội luôn nhe chị sếp! À, chị cho hỏi nhỏ thêm xí: em bo tip gom lộc direct trực bo lộc tạ tay Chloe bằng cash tiền mặt sòng phẳng luôn nhen bồ hộc, hay gõ cộng gộp chung quét thẻ tín dụng gao sòng luôn dợ bồ? Em rủng rỉnh dư dăm tờ đô xanh xanh mướt mát mặt nè dợ hộc, còn ko tiệm khều em mã Venmo QR code em tọng xẹt quét lộc chuyển khoản thẳng thót qua nách cho Chloe bả nắp bỏ túi sướng rơn ruột nhe sếp yêu hộc huyên hử!' },
          { participant: 'Salon Cashier', text: 'You are so thoughtful, Kylie! Chloe will be thrilled! You can absolutely tip her in cash—it goes directly into her pocket without any card processing cuts. And yes, she has her Venmo QR scanner taped right onto her station desk too! Here is your card receipt, and we suggest to book in advance next time since Chloe is always super popular!', translation: 'Dạ hỷ sắc rực rỡ sấy sướng bõ lòng tốt kịch trần sành sành của sếp Kylie béo iu quý ơi hộc! Chloe bả hốt được lộc sùng ái này dứt khoác sướng rơn ngất ngây bọc rủ lợ rổ lòng luôn á sếp huyên! Sếp cứ táng tiền bo sòng phẳng trực tiếp "cash tip" bao mặt luôn sướng nách sếp ơi—lộc tươi chui tọt rộp rộp kẹp thẳng túi rã á nhe, ko lo dính chiết sạt dăm móng chiết khấu phí quẹt sòng ngân hàng gì đâu á nha. Với lại trên mặt trạm bàn dũa số 4 Chloe có dán dán quả nhãn mã Venmo QR bọc sướng rực lộc đó sếp huyên tọng sấn đút scan cái rẹt thong thả nhe sếp huyên hộc. Dạ rồi em quẹt dâng sếp hóa đơn gốc thẻ nà n, khuyên sếp bảnh chành dốt ca lần tới là búng tay gạch đặt "book in advance" xí sòng trước dăm buổi sớm sớm kẽ nách nha sếp iu hộc huyên ơi, do danh tiếng Chloe sòng tiệm sủng bót cháy ca liên tục hot rầm trời sủng bái vượng lộc quanh năm luôn á sếp iu hộc!' }
        ]
      }
    ]
  }
];
