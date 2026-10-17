// Distinct 2-tier Dialogues (Casual Standard, Super Casual) for Lessons parent-child-11 to parent-child-20
// Guarantees authentic, warm, realistic family conversations and crisp, non-cringe texting/short interactions.

import { Dialogue } from './comm-students-dialogues';

export const PARENT_CHILD_DIALOGUES_PART2: Record<string, Dialogue[]> = {
  'parent-child-11': [
    {
      type: 'pair',
      school: 'casual',
      title: 'Healthy Screen Habits & Family No-Phone Dinner Routine',
      participants: [
        { name: 'Dad', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DadCasual11', role: 'Father' },
        { name: 'Khang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KhangCasual11', role: 'Teen Son' }
      ],
      lines: [
        { participant: 'Dad', text: "Khang, I noticed you were scrolling through short videos on your phone until 1:00 AM last night. Your eyes look pretty bloodshot today.", translation: "Khang ơi, bố thấy đêm qua con lướt video ngắn trên điện thoại tới tận 1 giờ sáng lận. Hôm nay mắt con quầng đỏ hết cả rồi kìa." },
        { participant: 'Khang', text: "I know, Dad. The algorithm is so addictive! I told myself I'd watch for five minutes, and suddenly two hours vanished.", translation: "Dạ con biết rồi bố. Thuật toán video nó cuốn quá chừng! Con cứ tự nhủ xem 5 phút thôi mà vèo cái mất toi hai tiếng đồng hồ." },
        { participant: 'Dad', text: "I struggle with the exact same thing when answering work emails late at night. How about we both put our phones into the charging dock in the living room at 10 PM every evening?", translation: "Bố cũng từng bị y chang như vậy mỗi khi mải trả lời email công việc lúc đêm khuya. Hay là tối nào từ 10 giờ trở đi, hai bố con mình cùng để điện thoại ở trạm sạc ngoài phòng khách nhé?" },
        { participant: 'Khang', text: "Doing it together makes it much easier! No late-night temptation in our bedrooms.", translation: "Bố con mình cùng làm thì dễ hơn nhiều ạ! Khỏi sợ bị cám dỗ lén xem điện thoại trong phòng ngủ." },
        { participant: 'Dad', text: "Deal! Let's read actual paper books or listen to music instead.", translation: "Nhất trí! Lúc đó mình đọc sách giấy hoặc nghe nhạc thư giãn nhé con." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Dinner Table Phone Basket Rule',
      participants: [
        { name: 'Mom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MomQuick11', role: 'Mom' },
        { name: 'Khang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KhangQuick11', role: 'Son' }
      ],
      lines: [
        { participant: 'Mom', text: "Dinner time! Phone in the wicker basket, Khang!", translation: "Đến giờ cơm tối rồi! Bỏ điện thoại vào giỏ mây nha Khang!" },
        { participant: 'Khang', text: "Dropped it in! Smells like grilled pork chops tonight?", translation: "Con thả vào giỏ rồi nè! Tối nay có món sườn nướng thơm phức đúng không mẹ?" },
        { participant: 'Mom', text: "Your favorite! Grab the chopsticks.", translation: "Món tủ của con đó! Lấy đũa phụ mẹ nào." },
        { participant: 'Khang', text: "Sitting down now!", translation: "Con ngồi vào bàn liền đây!" }
      ]
    }
  ],

  'parent-child-12': [
    {
      type: 'pair',
      school: 'casual',
      title: 'Positive Body Image & Nourishing Our Bodies',
      participants: [
        { name: 'Mom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MomCasual12', role: 'Mother' },
        { name: 'Yen', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=YenCasual12', role: 'Daughter' }
      ],
      lines: [
        { participant: 'Yen', text: "Mom, I skipped lunch at school today. Some influencers on social media said skipping carbs is the only way to look slim and fit in trendy clothes.", translation: "Mẹ ơi, trưa nay ở trường con nhịn cơm. Mấy bạn nổi tiếng trên mạng bảo phải cắt hết tinh bột thì người mới thon gọn mặc đồ đẹp được." },
        { participant: 'Mom', text: "Oh Yen, please sit down with me. Social media filters and extreme diets create such unrealistic, harmful standards.", translation: "Ôi Yến à, ngồi xuống đây với mẹ nào. Những bộ lọc làm đẹp và chế độ ăn kiêng cực đoan trên mạng vẽ ra những tiêu chuẩn ảo rất có hại cho sức khỏe con ơi." },
        { participant: 'Yen', text: "I just feel insecure when I look at photos of fashion models.", translation: "Con cứ thấy tự ti mỗi khi xem ảnh người mẫu thời trang thôi mẹ ạ." },
        { participant: 'Mom', text: "Your body is growing, carrying you through dance practices, and keeping you strong. Food isn't something to fear—it is wholesome fuel. Let's make a colorful salad with grilled salmon and rice together tonight. Strong and healthy is true beauty.", translation: "Cơ thể con đang tuổi lớn, giúp con tập nhảy múa và luôn khỏe mạnh mỗi ngày. Thức ăn không phải điều gì đáng sợ—nó là nguồn dinh dưỡng nuôi sống con. Tối nay mẹ con mình cùng làm món salad cá hồi nướng ăn với cơm thơm nhé. Cơ thể khỏe khoắn tràn đầy năng lượng mới là vẻ đẹp đích thực con à." },
        { participant: 'Yen', text: "I'd love that, Mom. I was actually getting dizzy from hunger this afternoon.", translation: "Dạ con đồng ý mẹ ơi. Thực ra chiều nay đói bụng con hơi bị hoa mắt chóng mặt nữa." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Post-Gym Protein Smoothie Shake',
      participants: [
        { name: 'Dad', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DadQuick12', role: 'Dad' },
        { name: 'Yen', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=YenQuick12', role: 'Daughter' }
      ],
      lines: [
        { participant: 'Yen', text: "Back from volleyball practice, starved!", translation: "Con tập bóng chuyền về rồi nè bố ơi, đói lả người luôn!" },
        { participant: 'Dad', text: "Blended a banana peanut-butter smoothie for you! Drink up, fuel those muscles.", translation: "Bố vừa xay sẵn sinh tố chuối bơ đậu phộng cho con nè! Uống liền cho cơ bắp nạp năng lượng nha." },
        { participant: 'Yen', text: "So creamy and delicious! Thanks Dad!", translation: "Béo ngậy thơm ngon quá chừng! Cảm ơn bố nhiều nhé!" },
        { participant: 'Dad', text: "Shower and rest up!", translation: "Tắm rửa rồi nghỉ ngơi cho khỏe nha!" }
      ]
    }
  ],

  'parent-child-13': [
    {
      type: 'pair',
      school: 'casual',
      title: 'Deciding between College Major Passion and Practicality',
      participants: [
        { name: 'Dad', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DadCasual13', role: 'Father' },
        { name: 'Bao', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BaoCasual13', role: 'High School Senior' }
      ],
      lines: [
        { participant: 'Bao', text: "Dad, college application deadlines are next month. I'm torn between studying graphic design or software engineering.", translation: "Bố ơi, tháng sau là hạn nộp hồ sơ đại học rồi. Con đang giằng xé mãi giữa ngành thiết kế đồ họa với ngành kỹ thuật phần mềm." },
        { participant: 'Dad', text: "That is a significant life crossroads, Bao. It's completely normal to feel the weight of this choice.", translation: "Đó là một ngã rẽ cuộc đời quan trọng đó Bao. Cảm thấy trăn trở trước lựa chọn này là chuyện hết sức bình thường con à." },
        { participant: 'Bao', text: "I love drawing and visual storytelling, but people keep saying software engineering guarantees higher starting salaries.", translation: "Con đam mê vẽ và kể chuyện bằng hình ảnh, nhưng mọi người cứ bảo học phần mềm mới đảm bảo lương khởi điểm cao hơn." },
        { participant: 'Dad', text: "Financial stability matters, but so does your intrinsic passion. What if you explored UI/UX design? It bridges creative visual artistry with modern software technology.", translation: "Tài chính ổn định là điều cần thiết, nhưng đam mê từ sâu bên trong con cũng quan trọng không kém. Con có nghĩ đến ngành thiết kế giao diện UI/UX chưa? Ngành này kết hợp hoàn hảo giữa nghệ thuật thị giác sáng tạo với công nghệ phần mềm hiện đại đó." },
        { participant: 'Bao', text: "Whoa, I hadn't thought about UI/UX! That combines both worlds perfectly. Let me research that curriculum tonight.", translation: "Uầy, con chưa từng nghĩ tới ngành UI/UX luôn! Nó kết hợp hài hòa cả hai thứ con thích. Tối nay con sẽ tìm hiểu kỹ chương trình học này liền." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Encouragement before Application Submit',
      participants: [
        { name: 'Bao', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BaoQuick13', role: 'Son' },
        { name: 'Mom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MomQuick13', role: 'Mom' }
      ],
      lines: [
        { participant: 'Bao', text: "Mom, just hit the 'Submit' button on my design portfolio!", translation: "Mẹ ơi, con vừa bấm nút 'Nộp bài' cho bộ hồ sơ thiết kế rồi ạ!" },
        { participant: 'Mom', text: "Congratulations sweetie! Whichever school admits you will be lucky to have your creativity.", translation: "Chúc mừng con trai yêu! Trường nào nhận con cũng sẽ là may mắn vì có được sự sáng tạo của con." },
        { participant: 'Bao', text: "Weight completely off my shoulders!", translation: "Trút bỏ được gánh nặng nghìn cân rồi mẹ ơi!" },
        { participant: 'Mom', text: "Ice cream celebration tonight!", translation: "Tối nay ăn kem ăn mừng nha!" }
      ]
    }
  ],

  'parent-child-14': [
    {
      type: 'pair',
      school: 'casual',
      title: 'Empathy through Mood Swings & Hormonal Growing Pains',
      participants: [
        { name: 'Mom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MomCasual14', role: 'Mother' },
        { name: 'Thao', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ThaoCasual14', role: 'Daughter' }
      ],
      lines: [
        { participant: 'Thao', text: "Mom, I don't know what's wrong with me lately. One minute I'm fine, and the next minute I feel like bursting into tears over nothing.", translation: "Mẹ ơi, dạo này con chẳng hiểu bản thân bị làm sao nữa. Mới phút trước còn bình thường, phút sau đã muốn bật khóc nức nở dù chẳng có chuyện gì to tát." },
        { participant: 'Mom', text: "Come sit by me, Thao. There is nothing 'wrong' with you at all. At fourteen, your body and hormones are undergoing massive biological changes.", translation: "Lại đây ngồi gần mẹ nào Thảo. Con không hề bị làm sao hết đâu. Ở tuổi 14, cơ thể và nội tiết tố của con đang trải qua những biến chuyển sinh học rất lớn." },
        { participant: 'Thao', text: "Is that why my skin breaks out and I feel so easily irritated by little sounds?", translation: "Đó là lý do da con hay nổi mụn với lại con dễ bị cáu gắt bởi mấy tiếng động nhỏ hả mẹ?" },
        { participant: 'Mom', text: "Exactly. Your brain is rewiring itself for adulthood. When emotions feel overwhelming, don't bottle them up. Take a walk, journal, or come hug me. I went through the exact same turbulent phase at your age.", translation: "Chính xác luôn con. Bộ não con đang tự tái cấu trúc để lớn lên thành người trưởng thành. Mỗi khi cảm xúc dâng trào khó kiểm soát, con đừng kìm nén trong lòng nha. Cứ đi dạo, viết nhật ký hoặc qua ôm mẹ. Ở tuổi con ngày xưa mẹ cũng từng trải qua giai đoạn chênh vênh y chang như thế." },
        { participant: 'Thao', text: "It helps so much knowing you understand instead of thinking I'm just being dramatic.", translation: "Biết mẹ thấu hiểu chứ không nghĩ con làm quá lên giúp con thấy an tâm hơn nhiều lắm ạ." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Warm Tea Delivery during Mood Drop',
      participants: [
        { name: 'Dad', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DadQuick14', role: 'Dad' },
        { name: 'Thao', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ThaoQuick14', role: 'Daughter' }
      ],
      lines: [
        { participant: 'Dad', text: "Left chamomile tea outside your door. No pressure to talk, just rest.", translation: "Bố để ly trà hoa cúc ngoài cửa phòng con nhé. Không cần phải nói chuyện gì đâu, con cứ nghỉ ngơi nha." },
        { participant: 'Thao', text: "Brought it in, thank you Dad. That means a lot.", translation: "Con mang vào phòng rồi ạ, con cảm ơn bố nhiều lắm." },
        { participant: 'Dad', text: "Always here for you, sweetie.", translation: "Bố luôn ở đây bên con nhé." },
        { participant: 'Thao', text: "Love you, Dad.", translation: "Con yêu bố ạ." }
      ]
    }
  ],

  'parent-child-15': [
    {
      type: 'pair',
      school: 'casual',
      title: 'Practicing Gratitude for Daily Sacrifices & Little Joys',
      participants: [
        { name: 'Dad', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DadCasual15', role: 'Father' },
        { name: 'Minh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MinhCasual15', role: 'Son' }
      ],
      lines: [
        { participant: 'Minh', text: "Dad, looking through our old family photo albums made me realize how much you and Mom gave up so we could have good schooling.", translation: "Bố ơi, ngồi xem lại cuốn album ảnh gia đình cũ con mới nhận ra bố mẹ đã hy sinh nhiều thế nào để cho tụi con được đi học đàng hoàng." },
        { participant: 'Dad', text: "Every long shift and overtime weekend was completely worth it to watch you and your sister thrive, Minh.", translation: "Từng ca làm thêm giờ và những ngày cuối tuần bận rộn đều hoàn toàn xứng đáng khi được nhìn thấy con và em gái khôn lớn trưởng thành, Minh à." },
        { participant: 'Minh', text: "I just wanted to say thank you directly. Sometimes I get caught up in exams and forget to express how grateful I am.", translation: "Con chỉ muốn trực tiếp nói lời cảm ơn bố. Nhiều lúc mải mê thi cử con hay quên bày tỏ lòng biết ơn của mình đối với bố mẹ." },
        { participant: 'Dad', text: "Hearing that from you today fills my heart with joy, son. Gratitude isn't about grand gestures; recognizing each other's quiet love is what keeps our family strong.", translation: "Hôm nay nghe con nói những lời này làm lòng bố ngập tràn hạnh phúc, con trai à. Lòng biết ơn không cần phải đao to búa lớn; chỉ cần thấu hiểu tình yêu thương thầm lặng của nhau là gia đình mình đã luôn vững bền rồi." },
        { participant: 'Minh', text: "I'll make sure to tell Mom when she comes home from the market too.", translation: "Lát mẹ đi chợ về con cũng sẽ nói lời cảm ơn mẹ nữa ạ." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Sticky Note on the Fridge',
      participants: [
        { name: 'Minh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MinhQuick15', role: 'Son' },
        { name: 'Mom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MomQuick15', role: 'Mom' }
      ],
      lines: [
        { participant: 'Minh', text: "Left a sticky note on the fridge for you! Check it when you pack lunch.", translation: "Con có dán tờ giấy ghi chú trên tủ lạnh cho mẹ nè! Lát mẹ chuẩn bị cơm trưa nhớ xem nha." },
        { participant: 'Mom', text: "Just saw it! 'Thank you for making the best lunches in the world.' You made my morning, sweetie!", translation: "Mẹ vừa thấy rồi nè! 'Cảm ơn mẹ vì những bữa cơm trưa ngon nhất trần đời.' Mẹ đọc mà vui cả buổi sáng luôn con ơi!" },
        { participant: 'Minh', text: "Mean every word! Have a great day at work, Mom!", translation: "Con nói thật lòng đó mẹ! Đi làm vui vẻ nha mẹ ơi!" },
        { participant: 'Mom', text: "You too, study well!", translation: "Con cũng vậy nha, học giỏi nhé!" }
      ]
    }
  ],

  'parent-child-16': [
    {
      type: 'pair',
      school: 'casual',
      title: 'Respecting Bedroom Privacy & Knocking before Entering',
      participants: [
        { name: 'Mom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MomCasual16', role: 'Mother' },
        { name: 'Duc', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DucCasual16', role: 'Teen Son' }
      ],
      lines: [
        { participant: 'Duc', text: "Mom, can we talk about something? When my door is closed, could you please knock and wait for me to answer before walking in?", translation: "Mẹ ơi, con nói chuyện này với mẹ được không ạ? Những lúc cửa phòng con đóng, mẹ vui lòng gõ cửa và đợi con trả lời rồi hãy bước vào nhé mẹ?" },
        { participant: 'Mom', text: "Oh Duc, I'm sorry if I startled you yesterday. I was just bringing clean laundry in and didn't think twice.", translation: "Ôi Đức à, mẹ xin lỗi nếu hôm qua mẹ làm con giật mình nhé. Lúc đó mẹ chỉ tiện tay mang quần áo sạch vào phòng nên không để ý thôi." },
        { participant: 'Duc', text: "I understand, but as I'm getting older, having personal space where I can change or think privately feels really important to me.", translation: "Con hiểu ạ, nhưng giờ con lớn rồi, có một không gian riêng tư để thay đồ hoặc yên tĩnh suy nghĩ đối với con rất quan trọng mẹ à." },
        { participant: 'Mom', text: "You're completely right, Duc. You deserve privacy and respect in your room. From now on, Dad and I will always knock and wait for your 'come in' before opening the door.", translation: "Con nói hoàn toàn đúng, Đức à. Con xứng đáng có được sự riêng tư và tôn trọng trong căn phòng của mình. Từ nay bố mẹ sẽ luôn gõ cửa và đợi con bảo 'mời vào' rồi mới mở cửa nhé." },
        { participant: 'Duc', text: "Thank you so much, Mom. That makes me feel respected as an adult.", translation: "Con cảm ơn mẹ nhiều lắm ạ. Nghe vậy con thấy mình được tôn trọng như một người lớn thực thụ." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Door Knock & Quick Permission',
      participants: [
        { name: 'Dad', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DadQuick16', role: 'Dad' },
        { name: 'Duc', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DucQuick16', role: 'Son' }
      ],
      lines: [
        { participant: 'Dad', text: "*Knock knock* Duc, got a second? Can I come in?", translation: "*Cốc cốc* Đức ơi, bố vào phòng chút được không con?" },
        { participant: 'Duc', text: "Just putting on my shirt—come on in, Dad!", translation: "Con vừa mặc áo xong—bố vào đi ạ!" },
        { participant: 'Dad', text: "Thanks for the green light! Brought your mail package.", translation: "Cảm ơn con trai! Bố mang bưu phẩm của con lên nè." },
        { participant: 'Duc', text: "Awesome, my books arrived! Thanks Dad!", translation: "Hay quá, sách con đặt về rồi! Con cảm ơn bố nha!" }
      ]
    }
  ],

  'parent-child-17': [
    {
      type: 'pair',
      school: 'casual',
      title: 'Supporting an Unconventional Passion for Filmmaking',
      participants: [
        { name: 'Dad', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DadCasual17', role: 'Father' },
        { name: 'Phong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PhongCasual17', role: 'Son' }
      ],
      lines: [
        { participant: 'Phong', text: "Dad, I finished editing my five-minute short film for the youth festival! Would you like to watch it with me?", translation: "Bố ơi, con vừa dựng xong bộ phim ngắn 5 phút để dự thi liên hoan phim trẻ nè! Bố xem cùng con nhé?" },
        { participant: 'Dad', text: "I would be thrilled to, Phong! Fire up the laptop, let's watch it on the big screen.", translation: "Bố hào hứng lắm luôn đó Phong! Bật máy tính lên đi con, hai bố con mình cắm ra màn hình lớn xem cho đã." },
        { participant: 'Phong', text: "I was a little worried you'd think spending my weekends filming was a waste of time compared to studying math.", translation: "Trước con cứ hơi lo bố sẽ nghĩ con dành ngày cuối tuần quay phim là tốn thời gian vô bổ so với học Toán." },
        { participant: 'Dad', text: "Are you kidding? Look at your lighting and color grading! Storytelling through film requires discipline, creativity, and technical skill. Whatever honest passion brings fire to your soul, your mother and I will always champion you.", translation: "Con nói gì vậy? Nhìn cách con phối ánh sáng và chỉnh màu phim kìa! Kể chuyện qua điện ảnh đòi hỏi tính kỷ luật, sự sáng tạo và kỹ năng kỹ thuật rất cao. Bất kể đam mê chân chính nào thắp lên ngọn lửa trong tâm hồn con, bố mẹ cũng sẽ luôn hết lòng ủng hộ con." },
        { participant: 'Phong', text: "Having your support gives me so much confidence to submit it to the judges today.", translation: "Có được sự ủng hộ của bố tiếp thêm cho con bao nhiêu tự tin để nộp bài cho ban giám khảo hôm nay ạ." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Film Festival Notification Screenshot',
      participants: [
        { name: 'Phong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PhongQuick17', role: 'Son' },
        { name: 'Mom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MomQuick17', role: 'Mom' }
      ],
      lines: [
        { participant: 'Phong', text: "Mom! My short film got selected for the city screening next Friday!", translation: "Mẹ ơi! Phim ngắn của con được chọn chiếu tại rạp thành phố thứ Sáu tới rồi!" },
        { participant: 'Mom', text: "OMGGG! That is incredible news! Reserving front-row tickets for our whole family right now!", translation: "Trời đất ơi! Tin vui tuyệt vời quá con ơi! Mẹ đặt vé hàng ghế đầu cho cả nhà mình đi cổ vũ liền đây!" },
        { participant: 'Phong', text: "My biggest fans in the front row!", translation: "Những khán giả hâm mộ cuồng nhiệt nhất ở hàng ghế đầu nha!" },
        { participant: 'Mom', text: "Always and forever!", translation: "Mãi mãi là như vậy con yêu!" }
      ]
    }
  ],

  'parent-child-18': [
    {
      type: 'pair',
      school: 'casual',
      title: 'Role-Playing How to Say "No" Firmly to Uncomfortable Situations',
      participants: [
        { name: 'Mom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MomCasual18', role: 'Mother' },
        { name: 'Trang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TrangCasual18', role: 'Teen Daughter' }
      ],
      lines: [
        { participant: 'Trang', text: "Mom, I'm going to a high school birthday party this Friday. What should I do if older kids offer me alcohol or tell me to get in a car with a driver who's been drinking?", translation: "Mẹ ơi, thứ Sáu này con đi tiệc sinh nhật ở trường. Con phải làm sao nếu mấy anh chị lớn ép con uống rượu bia hoặc rủ lên xe của một người đã uống rượu lái ạ?" },
        { participant: 'Mom', text: "I am so proud of you for thinking ahead and asking this, Trang. Your safety and personal boundaries are non-negotiable.", translation: "Mẹ vô cùng tự hào vì con đã biết lường trước tình huống và chủ động hỏi mẹ câu này, Trang à. Sự an toàn và ranh giới cá nhân của con là điều tuyệt đối không thể nhân nhượng." },
        { participant: 'Trang', text: "Sometimes I freeze up because I don't want to look uncool or ruin the vibe.", translation: "Đôi khi con hay bị sượng đơ người vì sợ bị chê là không ngầu hoặc làm mất vui bữa tiệc." },
        { participant: 'Mom', text: "Remember the code: 'No thanks, I have sports early tomorrow.' And here is our golden family rule: if you ever feel unsafe, text me the letter 'X'. I will immediately call you with an 'emergency excuse' and come pick you up, zero questions asked and zero punishment.", translation: "Con nhớ câu thần chú này nhé: 'Không, cảm ơn, sáng mai mình có lịch tập thể thao sớm.' Và đây là quy tắc vàng của nhà mình: nếu con thấy bất an, chỉ cần nhắn cho mẹ chữ 'X'. Mẹ sẽ lập tức gọi điện lấy cớ gia đình có việc gấp rồi đến đón con ngay, không tra khảo và không phạt con gì hết." },
        { participant: 'Trang', text: "Knowing I have that secret 'X' safety net makes me feel so much safer. Thank you, Mom.", translation: "Biết mình có chiếc phao cứu sinh chữ 'X' bí mật làm con thấy an tâm hơn rất nhiều. Con cảm ơn mẹ." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Safe Ride Confirmation',
      participants: [
        { name: 'Trang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TrangQuick18', role: 'Daughter' },
        { name: 'Dad', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DadQuick18', role: 'Dad' }
      ],
      lines: [
        { participant: 'Trang', text: "Party is winding down, Dad. Can you pick me up now?", translation: "Tiệc sắp tàn rồi bố ơi. Bố đến đón con bây giờ được không ạ?" },
        { participant: 'Dad', text: "In the car right now, arriving in 8 minutes! Stay inside until I pull up.", translation: "Bố đang ngồi trong xe rồi, 8 phút nữa tới nha! Cứ đứng trong nhà đợi bố đỗ xe trước cửa nhé." },
        { participant: 'Trang', text: "Standing by the front hall, see you in 8!", translation: "Con đứng đợi ở sảnh chính nè, 8 phút nữa gặp bố nha!" },
        { participant: 'Dad', text: "Be right there, kiddo.", translation: "Bố tới liền đây con gái." }
      ]
    }
  ],

  'parent-child-19': [
    {
      type: 'pair',
      school: 'casual',
      title: 'Preparing to Move to College Dorm: Proud Pride & Letting Go',
      participants: [
        { name: 'Dad', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DadCasual19', role: 'Father' },
        { name: 'Long', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LongCasual19', role: 'Son' }
      ],
      lines: [
        { participant: 'Long', text: "Dad, my suitcases are packed by the front door. Moving into the university dorm tomorrow morning feels so surreal.", translation: "Bố ơi, vali của con đã xếp gọn gàng ở cửa trước rồi. Sáng mai dọn vào ký túc xá đại học cảm giác kỳ lạ và bồi hồi quá bố ạ." },
        { participant: 'Dad', text: "It feels like just yesterday I was teaching you how to ride a two-wheel bicycle without training wheels, Long.", translation: "Cảm giác như mới ngày hôm qua bố còn đang dạy con tập đi xe đạp hai bánh không có bánh phụ vậy đó Long." },
        { participant: 'Long', text: "I'm excited, but honestly a little nervous about managing grocery budgets, cooking meals, and doing laundry myself.", translation: "Con vừa háo hức, nhưng thực lòng cũng hơi lo lắng về chuyện tự đi chợ tính toán chi tiêu, nấu nướng và giặt giũ một mình." },
        { participant: 'Dad', text: "You will make mistakes, and that's how true independence is built! Remember: our home will always be your anchor. If you ever burn your dinner or feel homesick, our door is permanently unlocked.", translation: "Con sẽ có những lúc làm chưa quen, nhưng đó chính là cách sự độc lập thực sự được tôi luyện! Hãy nhớ rằng: ngôi nhà này sẽ luôn là điểm tựa vững chắc của con. Nếu lỡ nấu cháy cơm hay thấy nhớ nhà, cánh cửa nhà mình luôn mở rộng đón con." },
        { participant: 'Long', text: "Thanks for always being my rock, Dad. I promise to make you and Mom proud.", translation: "Cảm ơn bố đã luôn là chỗ dựa vững chãi cho con. Con hứa sẽ học tập thật tốt để bố mẹ tự hào ạ." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'First Dorm Night Check-in Text',
      participants: [
        { name: 'Long', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LongQuick19', role: 'Son' },
        { name: 'Mom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MomQuick19', role: 'Mom' }
      ],
      lines: [
        { participant: 'Long', text: "Bed made and desk set up! My roommate is super nice.", translation: "Giường chiếu với bàn học con dọn xong rồi mẹ ơi! Bạn cùng phòng dễ thương lắm ạ." },
        { participant: 'Mom', text: "Phew, so happy to hear that! Did you find the emergency first-aid kit I packed in your blue bin?", translation: "Phù, nghe vậy mẹ mừng quá! Con có thấy hộp sơ cứu mẹ để trong thùng đồ màu xanh không?" },
        { participant: 'Long', text: "Found it, right next to the hot sauce bottle! Love you Mom!", translation: "Con thấy rồi nè, để ngay cạnh chai tương ớt! Con yêu mẹ nhiều!" },
        { participant: 'Mom', text: "Love you so much, sleep well in your new room!", translation: "Yêu con nhiều lắm, ngủ ngon trong phòng mới nha con!" }
      ]
    }
  ],

  'parent-child-20': [
    {
      type: 'pair',
      school: 'casual',
      title: 'Silly Pancake Baking & Laughing over Kitchen Disasters',
      participants: [
        { name: 'Mom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MomCasual20', role: 'Mother' },
        { name: 'Ngoc', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NgocCasual20', role: 'Daughter' }
      ],
      lines: [
        { participant: 'Ngoc', text: "Mom, look at your apron! You have pancake batter splattered from your nose down to your shoes!", translation: "Mẹ ơi nhìn tạp dề mẹ kìa! Bột bánh kếp bắn tung tóe từ chóp mũi xuống tận mũi giày luôn rồi!" },
        { participant: 'Mom', text: "Haha! That was your fault for flipping that pancake with a double somersault! It landed right on the kitchen vent!", translation: "Haha! Tại con hăng hái lật bánh tung hứng hai vòng lộn nhào chứ đâu! Cái bánh nó dính luôn lên máy hút mùi kìa!" },
        { participant: 'Ngoc', text: "It looks like an alien spaceship stuck to the ceiling! This chocolate volcano pancake is definitely turning into a delicious disaster.", translation: "Nhìn y chang đĩa bay người ngoài hành tinh dính trên trần nhà vậy á mẹ! Cái bánh núi lửa sô-cô-la này biến thành một thảm họa thơm ngon rồi." },
        { participant: 'Mom', text: "Disasters make the best memories! Who cares about perfect round pancakes when we're laughing this hard? Let's pile on the maple syrup and eat our spaceship pancake together.", translation: "Những sự cố vụng về thế này mới là kỷ niệm đẹp nhất đó con! Cần gì bánh phải tròn hoàn hảo khi hai mẹ con mình cười sảng khoái thế này? Rưới thêm si-rô phong rồi cùng thưởng thức chiếc bánh đĩa bay thôi nào." },
        { participant: 'Ngoc', text: "I love our messy Sunday breakfasts, Mom. Best core memory ever!", translation: "Con thích những bữa sáng Chủ nhật bôi lem luốc này cùng mẹ lắm. Kỷ niệm đáng nhớ nhất đời luôn!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Sunday Morning Board Game Challenge',
      participants: [
        { name: 'Dad', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DadQuick20', role: 'Dad' },
        { name: 'Ngoc', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NgocQuick20', role: 'Daughter' }
      ],
      lines: [
        { participant: 'Dad', text: "Scrabble rematch on the living room rug? Loser washes dinner dishes!", translation: "Đấu lại ván cờ chữ trên thảm phòng khách không con gái? Ai thua phải rửa bát tối nha!" },
        { participant: 'Ngoc', text: "Challenge accepted! You're going down, Dad!", translation: "Chấp nhận thách đấu liền! Bố chuẩn bị rửa bát đi nha!" },
        { participant: 'Dad', text: "Setting up the letter tiles right now, bring it on!", translation: "Bố đang xếp quân cờ ra đây, tới luôn nào!" },
        { participant: 'Ngoc', text: "Grabbing the dictionary!", translation: "Con đi lấy từ điển đây!" }
      ]
    }
  ]
};
