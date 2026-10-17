// Distinct 3-tier Sentence Structures for Lessons beauty-01 to beauty-21 & spec-03 (For Beauty Professionals)
// Guarantees authentic professional salon standards, realistic client chats, and crisp short communication.

import { Structure } from './types';
import { BEAUTY_STRUCTURES_PART2 } from './comm-beauty-structures-part2';
import { BEAUTY_STRUCTURES_PART3 } from './comm-beauty-structures-part3';

const BEAUTY_STRUCTURES_PART1: Record<string, Structure[]> = {
  'beauty-01': [
    {
      phrase: "May I assist you with your coat and personal belongings?",
      meaning: "Đón tiếp khách chu đáo, hỗ trợ cất áo khoác và túi xách để khách thư thái.",
      vietnamese: "Để em giúp chị cất áo khoác và túi xách nhé ạ.",
      business: {
        phrase: "Allow me to check your coat and store your personal belongings in our secure locker.",
        example: "Allow me to check your coat and store your personal belongings in our secure locker while your suite is readied.",
        translation: "Cho phép em cất áo khoác và cất giữ tư trang của quý khách trong tủ đồ an toàn trong khi chuẩn bị phòng ạ."
      },
      casualStyle: {
        phrase: "Can I take your jacket and bag so you can relax?",
        example: "Let me grab your heavy jacket and purse so you can get comfy in the chair!",
        translation: "Để mình cất áo khoác với ví giùm bạn cho bạn thoải mái ngồi ghế nhé!"
      },
      superCasual: {
        phrase: "Hang your coat right by the door!",
        example: "Toss your jacket on the hook, chair 3 is ready!",
        translation: "Treo áo khoác lên móc ở cửa nha, ghế số 3 sẵn sàng rồi nè!"
      }
    },
    {
      phrase: "How does the water temperature feel for you?",
      meaning: "Hỏi thăm nhiệt độ nước bồn ngâm chân chu đáo khi bắt đầu pedicure.",
      vietnamese: "Nhiệt độ nước ngâm chân thế này vừa chưa chị?",
      business: {
        phrase: "Please inform me if the footbath temperature requires any calibration for your comfort.",
        example: "Please inform me if the footbath temperature requires any calibration for your comfort before we commence.",
        translation: "Kính xin quý khách cho biết nếu nhiệt độ bồn ngâm chân cần điều chỉnh thêm để đạt sự thư thái tối đa ạ."
      },
      casualStyle: {
        phrase: "Is this water warm enough, or would you like it a bit hotter?",
        example: "How's that water feeling on your feet? Too hot, or just right?",
        translation: "Nước ngâm chân thế này vừa chưa bạn ơi? Có bị nóng quá hay vừa vặn rồi nè?"
      },
      superCasual: {
        phrase: "Water temp okay?",
        example: "Warm enough or need more hot water?",
        translation: "Nước ấm vừa chưa hay cần thêm nước nóng?"
      }
    },
    {
      phrase: "Do you have an appointment with us today?",
      meaning: "Xác nhận lịch hẹn khi khách vừa bước vào cửa tiệm.",
      vietnamese: "Hôm nay mình có đặt lịch trước chưa ạ?",
      business: {
        phrase: "May I have your name to cross-reference our digital reservation schedule?",
        example: "Good morning! May I have your full name to cross-reference our digital reservation schedule?",
        translation: "Kính chào quý khách! Cho em xin họ tên để đối chiếu với lịch hẹn đặt trước trên hệ thống ạ."
      },
      casualStyle: {
        phrase: "Are you booked with someone today, or are you walking in?",
        example: "Hi there! Do you have an appointment, or are you hoping to walk in for a manicure?",
        translation: "Chào bạn! Hôm nay bạn có hẹn trước với thợ nào chưa, hay là khách vãng lai ghé làm móng nè?"
      },
      superCasual: {
        phrase: "Got an appointment or walk-in?",
        example: "Appointment under Taylor or just walking in?",
        translation: "Đặt lịch tên Taylor hay ghé vãng lai vậy bạn?"
      }
    },
    {
      phrase: "Make yourself comfortable while we prepare your station.",
      meaning: "Mời khách ngồi nghỉ ngơi thư giãn trong lúc dọn bàn làm việc.",
      vietnamese: "Chị cứ ngồi nghỉ ngơi thư giãn trong lúc em chuẩn bị bàn nhé.",
      business: {
        phrase: "Please enjoy our relaxation lounge and herbal refreshments while your private suite is prepared.",
        example: "Please enjoy our relaxation lounge and herbal refreshments while your private suite is prepared by our lead specialist.",
        translation: "Kính mời quý khách dùng trà thảo mộc tại phòng chờ trong khi chuyên viên chuẩn bị phòng riêng ạ."
      },
      casualStyle: {
        phrase: "Have a seat in the massage chair, I'll be right with you in two minutes!",
        example: "Sit back and turn on the massage chair, I'll bring the color swatches right over!",
        translation: "Bạn cứ ngả lưng bật ghế mát-xa nha, mình mang bảng màu qua liền trong 2 phút nhé!"
      },
      superCasual: {
        phrase: "Hop into chair 2, starting in a sec!",
        example: "Take a seat at table 4, be right there!",
        translation: "Ngồi bàn số 4 nha, tớ qua liền nè!"
      }
    },
    {
      phrase: "Would you like something warm or cold to drink?",
      meaning: "Mời nước uống chu đáo tạo cảm giác được quan tâm từ đầu.",
      vietnamese: "Chị muốn dùng chút nước ấm hay nước mát không ạ?",
      business: {
        phrase: "May I offer you our complimentary selection of chilled cucumber mint water or warm chamomile tea?",
        example: "May I offer you our complimentary selection of chilled cucumber mint water or warm chamomile tea while you unwind?",
        translation: "Em có thể mời quý khách dùng nước khoáng dưa leo bạc hà mát lạnh hay trà hoa cúc ấm thư giãn ạ?"
      },
      casualStyle: {
        phrase: "Can I grab you some cold water or an iced tea while you sit back?",
        example: "Would you like some water or green tea while we do your nails today?",
        translation: "Mình lấy cho bạn ly nước mát hay trà xanh trong lúc làm móng nhé?"
      },
      superCasual: {
        phrase: "Water or tea from the fridge?",
        example: "Bottled water or soda? Grab one from the cooler!",
        translation: "Nước suối hay nước ngọt? Cứ lấy trong tủ lạnh nha!"
      }
    }
  ],

  'beauty-02': [
    {
      phrase: "What style or color palette did you have in mind today?",
      meaning: "Khơi gợi sở thích để tư vấn màu sắc phù hợp với khách hàng.",
      vietnamese: "Hôm nay mình đang nhắm tới phong cách hay tông màu nào chưa ạ?",
      business: {
        phrase: "What aesthetic outcome or color harmony were you envisioning for this consultation?",
        example: "What aesthetic outcome or color harmony were you envisioning for today's professional consultation?",
        translation: "Quý khách đang hướng tới phong cách thẩm mỹ và bảng phối màu như thế nào trong buổi tư vấn hôm nay ạ?"
      },
      casualStyle: {
        phrase: "Do you have any colors in mind, or do you want me to show you our trending shades?",
        example: "Any shades jumping out at you from the swatch ring, or want some recommendations?",
        translation: "Bạn có nghía được màu nào trên bảng chưa, hay để mình gợi ý mấy màu đang hot trend nhé?"
      },
      superCasual: {
        phrase: "Going nude or bold color today?",
        example: "Nude vibes or something bright today?",
        translation: "Hôm nay thích tông nude nhã nhặn hay màu nổi bật nè?"
      }
    },
    {
      phrase: "Do you do a lot of hands-on typing or manual work?",
      meaning: "Tìm hiểu thói quen công việc để tư vấn phom móng bền chắc, không gãy.",
      vietnamese: "Công việc hàng ngày của mình có phải gõ máy tính hay làm việc tay nhiều không ạ?",
      business: {
        phrase: "Does your professional routine involve intensive mechanical keyboard use or manual tasks?",
        example: "Does your professional routine involve intensive mechanical keyboard use that might necessitate structural reinforcement?",
        translation: "Công việc chuyên môn của quý khách có đòi hỏi thao tác bàn phím cường độ cao cần gia cố kết cấu móng không ạ?"
      },
      casualStyle: {
        phrase: "Do you type on a keyboard all day, or are you working with your hands a lot?",
        example: "If you type a ton at your desk, a medium squoval shape won't catch on keys!",
        translation: "Nếu bạn gõ phím máy tính cả ngày thì dáng vuông bầu vừa phải sẽ không bị vướng phím đâu nè!"
      },
      superCasual: {
        phrase: "Type lots on keyboards?",
        example: "Heavy typing job? Let's keep length medium!",
        translation: "Gõ phím nhiều hả? Để độ dài vừa phải cho tiện nhé!"
      }
    },
    {
      phrase: "I recommend a builder gel overlay for maximum durability.",
      meaning: "Tư vấn đắp gel gia cố giúp móng thật khỏe bền.",
      vietnamese: "Em khuyên mình nên đắp thêm lớp gel gia cố để móng bền tối đa ạ.",
      business: {
        phrase: "I strongly recommend an apex-balanced structured builder gel to optimize longevity and prevent stress fractures.",
        example: "I strongly recommend an apex-balanced structured builder gel to optimize longevity and protect your natural nail bed.",
        translation: "Em đặc biệt khuyên dùng kỹ thuật đắp gel gia cố chuẩn trọng tâm để tối ưu độ bền và bảo vệ móng thật ạ."
      },
      casualStyle: {
        phrase: "Builder gel will make your natural nails super sturdy so they won't snap easily.",
        example: "Since you love growing your nails out, builder gel is an absolute game changer!",
        translation: "Đắp gel gia cố sẽ làm móng thật cứng cáp cực kỳ, bạn nuôi móng dài không sợ bị gãy đâu nè!"
      },
      superCasual: {
        phrase: "Builder gel is indestructible, let's do it!",
        example: "Do builder gel! Lasts a solid month without chips.",
        translation: "Làm gel gia cố đi! Bền cả tháng không tróc mẻ miếng nào luôn."
      }
    },
    {
      phrase: "Let's swatch both shades on two fingers so you can see them side by side.",
      meaning: "Thử hai màu lên móng để khách so sánh trực tiếp dưới ánh đèn.",
      vietnamese: "Để em thử hai màu lên hai ngón tay cho chị nhìn so sánh thực tế nhé.",
      business: {
        phrase: "Allow me to apply sample swatches of both formulations under true-daylight lighting for your comparative evaluation.",
        example: "Allow me to apply sample swatches of both shades under true-daylight lighting for your comparative evaluation.",
        translation: "Cho phép em sơn thử cả hai mẫu dưới ánh sáng chuẩn ban ngày để quý khách dễ dàng so sánh đánh giá ạ."
      },
      casualStyle: {
        phrase: "Let me paint a quick stripe of both on your pinky so you can compare them side by side!",
        example: "Let's swatch the mauve and the nude side by side so you can see which matches your skin best!",
        translation: "Để mình quẹt thử màu tím khói với màu nude cạnh nhau xem màu nào tôn da bạn hơn nhé!"
      },
      superCasual: {
        phrase: "Swatch both on two fingers quick?",
        example: "Testing both on your pointer—pick your fave!",
        translation: "Thử cả hai lên ngón trỏ nè—thích màu nào hơn thì chọn nha!"
      }
    },
    {
      phrase: "Would you prefer a glossy high-shine finish or a velvet matte top coat?",
      meaning: "Hỏi lựa chọn lớp phủ bóng sáng gương hay mờ nhám thời thượng.",
      vietnamese: "Chị thích lớp phủ bóng sáng gương hay phủ nhám mờ lì ạ?",
      business: {
        phrase: "Do you prefer an ultra-refractive high-gloss sealant or an understated satin matte top coat?",
        example: "Do you prefer an ultra-refractive high-gloss sealant or an understated satin matte top coat for this set?",
        translation: "Quý khách ưa chuộng lớp phủ bóng bắt sáng cao cấp hay lớp sơn mờ satin thanh lịch cho bộ móng này ạ?"
      },
      casualStyle: {
        phrase: "Are we going with super glossy and shiny, or do you want to try the trendy matte finish?",
        example: "Do you want that classic glass shine, or a velvety matte look today?",
        translation: "Hôm nay bạn thích bóng loáng như gương hay kiểu mờ lì nhung mịn thời thượng nè?"
      },
      superCasual: {
        phrase: "Glossy shine or velvet matte?",
        example: "Shiny gloss or cool matte?",
        translation: "Sơn bóng sáng hay sơn lì nhám?"
      }
    }
  ],

  'beauty-03': [
    {
      phrase: "This rich undertone compliments your warm skin tone beautifully.",
      meaning: "Khen ngợi tinh tế và hướng dẫn màu sắc tôn vinh sắc da tự nhiên.",
      vietnamese: "Tông màu ấm này tôn lên làn da của chị cực kỳ xinh đẹp luôn ạ.",
      business: {
        phrase: "This chromatic palette harmonizes flawlessly with your warm undertone, creating an illuminated aesthetic.",
        example: "This chromatic palette harmonizes flawlessly with your warm undertone, creating an illuminated aesthetic for your hands.",
        translation: "Bảng sắc độ này hòa hợp hoàn hảo với tông da ấm của quý khách, tạo nên vẻ rạng rỡ đầy cuốn hút cho đôi tay ạ."
      },
      casualStyle: {
        phrase: "This deep wine shade looks so flattering against your golden skin tone!",
        example: "Look how that emerald green makes your hands pop against your sun-kissed skin!",
        translation: "Nhìn xem màu xanh ngọc này tôn đôi tay sáng bừng trên làn da rám nắng của bạn xinh chưa nè!"
      },
      superCasual: {
        phrase: "That color looks stunning on your skin!",
        example: "Burgundy is definitely your shade, gorgeous!",
        translation: "Màu đỏ rượu vang đúng là sinh ra cho da bạn luôn, đẹp xuất sắc!"
      }
    },
    {
      phrase: "Does your skin tend to be dry or sensitive during seasonal changes?",
      meaning: "Thăm dò độ nhạy cảm của da trước khi tẩy da chết hay bôi hóa chất.",
      vietnamese: "Da của mình có hay bị khô hay nhạy cảm khi thời tiết giao mùa không ạ?",
      business: {
        phrase: "Do you experience epidermal barrier fragility or reactive sensitivity during climatic transitions?",
        example: "Do you experience epidermal barrier fragility or reactive sensitivity that requires hypo-allergenic formulations?",
        translation: "Làn da của quý khách có dễ bị kích ứng hay suy yếu hàng rào bảo vệ khi thời tiết thay đổi không ạ?"
      },
      casualStyle: {
        phrase: "Does your skin get a little dry or tight around this time of year?",
        example: "If your hands feel a bit sensitive in the winter, I'll use our gentle oatmeal scrub instead.",
        translation: "Nếu da tay bạn hơi nhạy cảm vào mùa đông thì mình sẽ dùng tẩy tế bào chết yến mạch dịu nhẹ nhé."
      },
      superCasual: {
        phrase: "Skin feeling dry or sensitive today?",
        example: "Sensitive cuticles today? I'll go super gentle.",
        translation: "Hôm nay da khóe có nhạy cảm không? Mình sẽ làm thật nhẹ tay nha."
      }
    },
    {
      phrase: "We have certified fragrance-free and plant-based formulas available.",
      meaning: "Giới thiệu các dòng sản phẩm thuần chay, không hương liệu cho khách cơ địa dị ứng.",
      vietnamese: "Bên em có sẵn các dòng thuần thực vật và không chứa hương liệu nhân tạo ạ.",
      business: {
        phrase: "We offer dermatologically certified vegan, non-toxic, and fragrance-free formulations for sensitive skin.",
        example: "We offer dermatologically certified vegan and fragrance-free formulations to prevent any risk of contact dermatitis.",
        translation: "Bên em có sẵn các dòng mỹ phẩm thuần thực vật đạt kiểm định da liễu, không hương liệu để ngăn ngừa kích ứng tiếp xúc ạ."
      },
      casualStyle: {
        phrase: "We have all-natural, unscented lotions if your skin reacts to heavy perfumes.",
        example: "If perfumes bother your allergies, our unscented coconut butter is super nourishing and calm.",
        translation: "Nếu bạn dị ứng mùi thơm nồng thì bơ dừa không hương liệu bên mình dưỡng ẩm cực êm luôn nhé."
      },
      superCasual: {
        phrase: "Unscented organic lotion available!",
        example: "Want the unscented lotion? Gentle on skin!",
        translation: "Dùng kem dưỡng không mùi nhé? Rất êm da!"
      }
    },
    {
      phrase: "Feel free to let me know if you prefer complete quiet during your session.",
      meaning: "Tôn trọng nhu cầu yên tĩnh thư giãn không nói chuyện phiếm của khách.",
      vietnamese: "Chị cứ thoải mái bảo em nếu chị muốn nghỉ ngơi yên tĩnh trong suốt buổi làm nhé.",
      business: {
        phrase: "Please inform us if you prefer a silent restorative session; we honor your need for quiet contemplation.",
        example: "Please inform us if you prefer a silent restorative appointment; we completely honor your personal space and peace.",
        translation: "Kính xin quý khách báo cho chúng em biết nếu quý khách muốn một không gian tĩnh lặng để nghỉ ngơi thư thái ạ."
      },
      casualStyle: {
        phrase: "If you just want to put your headphones in and relax without chatting, that is 100% fine with me!",
        example: "Feel free to close your eyes or listen to a podcast, don't feel pressured to chat at all!",
        translation: "Bạn cứ thoải mái nhắm mắt nghỉ ngơi hoặc nghe nhạc nha, không cần phải ngại trò chuyện đâu nè!"
      },
      superCasual: {
        phrase: "Headphones on? Total quiet mode!",
        example: "Wanna zone out with tunes? Go right ahead!",
        translation: "Muốn đeo tai nghe thư giãn hả? Cứ tự nhiên nha!"
      }
    },
    {
      phrase: "Every skin tone is unique and deserves bespoke care.",
      meaning: "Thể hiện tinh thần đa văn hóa, trân trọng và tôn vinh vẻ đẹp của từng màu da.",
      vietnamese: "Mỗi sắc tố da đều có nét đẹp riêng và xứng đáng được chăm sóc tận tâm nhất.",
      business: {
        phrase: "Our clinic is dedicated to inclusive dermatological aesthetics tailored across all Fitzpatrick skin classifications.",
        example: "Our clinic is dedicated to inclusive dermatological aesthetics tailored across all Fitzpatrick skin classifications.",
        translation: "Cơ sở thẩm mỹ của chúng tôi cam kết cung cấp dịch vụ cá nhân hóa chuẩn mực cho mọi phân loại sắc tố da ạ."
      },
      casualStyle: {
        phrase: "Every skin tone looks amazing with the right color match, that's why we customize every palette!",
        example: "Whether fair, olive, or deep bronze, we'll find the shade that makes your hands glow!",
        translation: "Dù là da trắng, da bánh mật hay ngăm khỏe thì chọn đúng màu là tay sáng bừng quyến rũ ngay!"
      },
      superCasual: {
        phrase: "Got colors matching every skin tone!",
        example: "Hundreds of shades here, we'll match your tone perfectly!",
        translation: "Hàng trăm màu ở đây, kiểu gì cũng chọn được màu tôn da nhất cho bạn!"
      }
    }
  ],

  'beauty-04': [
    {
      phrase: "Please let me know immediately if you feel any heat or discomfort.",
      meaning: "Dặn khách báo ngay nếu bị nóng rát hay ê buốt khi hơ đèn LED.",
      vietnamese: "Chị nhớ bảo em ngay nếu thấy nóng rát hay khó chịu nhé ạ.",
      business: {
        phrase: "Kindly alert me immediately if any thermal spike or tactile discomfort exceeds your tolerance threshold.",
        example: "Kindly alert me immediately if any thermal spike occurs during polymerization under the LED curing unit.",
        translation: "Kính xin quý khách thông báo ngay nếu cảm thấy nhiệt độ tỏa ra từ đèn LED vượt quá mức chịu đựng ạ."
      },
      casualStyle: {
        phrase: "If you feel a quick heat spike under the lamp, pull your hand out for three seconds!",
        example: "Gel can get a little warm when curing. If it pinches, pull out, tap the table, and slide back in!",
        translation: "Sơn gel lúc sấy có thể hơi nóng ran. Thấy nóng thì bạn rút tay ra 3 giây rồi từ từ cho vào lại nhé!"
      },
      superCasual: {
        phrase: "Lamp too hot? Pull out quick!",
        example: "Too warm? Pull hand out for 5 secs!",
        translation: "Nóng quá hả? Rút tay ra 5 giây liền nha!"
      }
    },
    {
      phrase: "All our metal tools are sterilized in a medical autoclave.",
      meaning: "Khẳng định tiêu chuẩn tiệt trùng y tế giúp khách an tâm tuyệt đối.",
      vietnamese: "Toàn bộ kềm kéo kim loại bên em đều được tiệt trùng bằng nồi hấp y tế ạ.",
      business: {
        phrase: "All stainless-steel implements undergo hospital-grade pressure sterilization in our validated autoclave.",
        example: "All stainless-steel implements undergo hospital-grade pressure sterilization in our validated autoclave prior to single-use deployment.",
        translation: "Toàn bộ dụng cụ thép không gỉ đều được khử trùng áp suất cao chuẩn bệnh viện trước khi sử dụng cho từng khách ạ."
      },
      casualStyle: {
        phrase: "We unseal a brand-new sterile pouch of sanitized tools right in front of every customer.",
        example: "See this sealed bag? It's freshly sterilized so you never have to worry about cleanliness here!",
        translation: "Bạn nhìn chiếc túi niêm phong này nè, vừa tiệt trùng xong nên làm ở đây bạn hoàn toàn an tâm về vệ sinh nha!"
      },
      superCasual: {
        phrase: "Fresh sterile pouch opened for you!",
        example: "Pouch unsealed right now, totally clean!",
        translation: "Xé túi tiệt trùng mới toanh ngay trước mặt bạn nè, bao sạch!"
      }
    },
    {
      phrase: "Does this nail file pressure feel comfortable on your nail bed?",
      meaning: "Kiểm tra lực dũa mài có quá mạnh hay gây ê móng không.",
      vietnamese: "Lực dũa móng thế này có vừa vặn êm ái không chị?",
      business: {
        phrase: "Is the abrasive filing pressure calibrated comfortably against your lateral nail folds?",
        example: "Is the abrasive filing pressure calibrated comfortably against your lateral nail folds and cuticle perimeter?",
        translation: "Lực dũa viền móng đã được điều chỉnh êm ái vừa vặn với vùng khóe móng của quý khách chưa ạ?"
      },
      casualStyle: {
        phrase: "Tell me if the file feels too rough or if I'm pressing too hard on your fingers.",
        example: "Is this filing gentle enough, or does anything feel sharp or tender?",
        translation: "Dũa thế này có êm không bạn ơi, có chỗ nào hơi cấn hay đau rát không nè?"
      },
      superCasual: {
        phrase: "Filing too hard?",
        example: "Filing feel fine? Speak up if it pinches!",
        translation: "Dũa êm chưa? Thấy đau bảo tớ liền nha!"
      }
    },
    {
      phrase: "We use brand-new disposable files and buffers for every client.",
      meaning: "Sử dụng đồ giũa xốp dùng một lần đảm bảo vệ sinh tuyệt đối.",
      vietnamese: "Bên em dùng giũa và phao mài mới tinh một lần cho từng khách hàng ạ.",
      business: {
        phrase: "Single-use porous implements, including emery boards and buffers, are strictly discarded after each individual treatment.",
        example: "Single-use porous implements are strictly discarded after each individual treatment to eliminate cross-contamination.",
        translation: "Toàn bộ vật dụng xốp dùng một lần đều được tiêu hủy ngay sau mỗi ca dịch vụ để loại bỏ nguy cơ lây nhiễm chéo ạ."
      },
      casualStyle: {
        phrase: "This file and buffer are brand new just for you—you can even take them home after we finish!",
        example: "We never reuse files! You can take this mini file in your purse when you leave today.",
        translation: "Cây giũa với phao mài này là đồ mới toanh của riêng bạn đó, làm xong bạn có thể bỏ túi mang về dùng nha!"
      },
      superCasual: {
        phrase: "Brand new file! Take it home if you want.",
        example: "New buffer and file, yours to keep!",
        translation: "Giũa mới tinh đó, thích thì mang về dùng luôn nha!"
      }
    },
    {
      phrase: "Please rest your hand comfortably inside the center of the lamp.",
      meaning: "Hướng dẫn khách đặt bàn tay đúng giữa đèn để sơn khô đều bóng.",
      vietnamese: "Chị để tay ngay chính giữa đèn để sơn gel khô đều và đẹp nhất nhé.",
      business: {
        phrase: "Please center your hand within the focal curing zone of the optical unit to ensure uniform photo-polymerization.",
        example: "Please center your hand within the focal curing zone to ensure uniform photo-polymerization across all five digits.",
        translation: "Kính xin quý khách đặt bàn tay vào đúng tiêu cự trung tâm của đèn để gel khô đều đẹp trên cả 5 ngón ạ."
      },
      casualStyle: {
        phrase: "Slide your hand all the way into the center of the lamp so your thumb cures properly too!",
        example: "Make sure your thumb rests flat on the bottom tray so the gel doesn't slide to the side!",
        translation: "Bạn cho tay vào giữa đèn nha, nhớ để ngón cái nằm phẳng để sơn không bị chảy dồn sang mép nhé!"
      },
      superCasual: {
        phrase: "Hand straight into the lamp center!",
        example: "Thumb flat in the lamp, perfect!",
        translation: "Ngón cái nằm thẳng trong đèn, chuẩn rồi đó!"
      }
    }
  ]
};

export const BEAUTY_STRUCTURES: Record<string, Structure[]> = {
  ...BEAUTY_STRUCTURES_PART1,
  ...BEAUTY_STRUCTURES_PART2,
  ...BEAUTY_STRUCTURES_PART3
};

