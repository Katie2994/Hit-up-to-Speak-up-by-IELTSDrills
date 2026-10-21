// Distinct 2-tier Dialogues (Casual Standard, Super Casual) for Lessons parent-child-11 to parent-child-20
// Guarantees authentic, warm, realistic family conversations and crisp, non-cringe texting/short interactions.

import { Dialogue } from './comm-students-dialogues';

export const PARENT_CHILD_DIALOGUES_PART2: Record<string, Dialogue[]> = {
  'parent-child-11': [
    {
      type: 'pair',
      school: 'casual',
      title: 'Guiding a Teen to Weigh Pros & Cons and Own Their Decisions',
      participants: [
        { name: 'Dad', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DadCasual11Decide', role: 'Father' },
        { name: 'Khang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KhangCasual11Decide', role: 'Teen Son' }
      ],
      lines: [
        { participant: 'Khang', text: "Dad, I can't decide whether to join the robotics club or audition for the school basketball team. Both meet on Tuesday afternoons!", translation: "Bố ơi, con không biết nên tham gia câu lạc bộ chế tạo robot hay đi thi tuyển vào đội bóng rổ của trường nữa. Cả hai đều sinh hoạt vào chiều thứ Ba!" },
        { participant: 'Dad', text: "Having two passions you care about is a great problem to have, Khang. Let's make a pros and cons list together.", translation: "Có tới hai niềm đam mê để chọn lựa là một điều rất may mắn đó Khang. Bố con mình cùng lập bảng ưu và nhược điểm nhé." },
        { participant: 'Khang', text: "Robotics aligns with my engineering dream, but basketball keeps me fit with my close friends.", translation: "Robot thì đúng hướng ước mơ kỹ sư của con, nhưng bóng rổ lại giúp con rèn thể lực cùng đám bạn thân." },
        { participant: 'Dad', text: "At fourteen, you are mature enough to make this call. Whichever path you choose, commit to it wholeheartedly and take responsibility for managing your schedule. I will support your decision either way.", translation: "Ở tuổi 14, con đã đủ lớn để tự đưa ra quyết định này rồi. Dù con chọn con đường nào, hãy cam kết hết mình và tự chịu trách nhiệm sắp xếp thời gian. Bố mẹ sẽ luôn ủng hộ lựa chọn của con." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Fist Bump on Decision Ownership',
      participants: [
        { name: 'Khang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KhangQuick11Decide', role: 'Son' },
        { name: 'Dad', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DadQuick11Decide', role: 'Dad' }
      ],
      lines: [
        { participant: 'Khang', text: "Dad, submitted my robotics club form! Playing street basketball on weekends instead.", translation: "Bố ơi, con nộp đơn vào CLB Robot rồi ạ! Còn bóng rổ con sẽ chơi vỉa hè với bạn vào cuối tuần." },
        { participant: 'Dad', text: "Smart compromise! Proud of you for owning that choice.", translation: "Phương án dung hòa rất thông minh! Bố tự hào vì con đã tự quyết định." },
        { participant: 'Khang', text: "Thanks for trusting me, Dad!", translation: "Cảm ơn bố đã tin tưởng con!" },
        { participant: 'Dad', text: "Always got your back, son.", translation: "Bố luôn là chỗ dựa vững chắc cho con mà." }
      ]
    }
  ],

  'parent-child-12': [
    {
      type: 'pair',
      school: 'casual',
      title: 'Establishing Bedroom Privacy, Door Knocking & Mutual Trust',
      participants: [
        { name: 'Mom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MomCasual12Privacy', role: 'Mother' },
        { name: 'Yen', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=YenCasual12Privacy', role: 'Daughter' }
      ],
      lines: [
        { participant: 'Yen', text: "Mom, yesterday you walked into my bedroom without knocking while I was changing. Can we establish a house rule about knocking first?", translation: "Mẹ ơi, hôm qua mẹ mở cửa bước vào phòng con mà không gõ cửa lúc con đang thay đồ. Nhà mình quy định gõ cửa trước khi vào phòng được không mẹ?" },
        { participant: 'Mom', text: "You are completely right, Yen. I sincerely apologize for invading your privacy; I was in a rush with the laundry, but that is no excuse.", translation: "Con nói hoàn toàn đúng, Yến à. Mẹ chân thành xin lỗi vì đã làm phiền không gian riêng tư của con; lúc đó mẹ vội mang quần áo vào giặt, nhưng đó không phải lý do chính đáng." },
        { participant: 'Yen', text: "Thank you for listening, Mom. As I get older, having a private sanctuary where I can journal and think really matters to me.", translation: "Cảm ơn mẹ đã lắng nghe con nhé. Càng lớn, việc có một không gian riêng tư để con viết nhật ký và suy ngẫm thực sự rất quan trọng với con." },
        { participant: 'Mom', text: "I completely respect that. From now on, our family rule is: knock, wait for verbal permission before turning the knob. Your personal space is sacred.", translation: "Mẹ hoàn toàn tôn trọng điều đó. Từ nay quy tắc gia đình mình sẽ là: gõ cửa và chờ con lên tiếng đồng ý rồi mới vặn tay nắm cửa. Không gian riêng của con luôn được trân trọng." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Door Knock & Quick Permission',
      participants: [
        { name: 'Dad', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DadQuick12Privacy', role: 'Dad' },
        { name: 'Yen', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=YenQuick12Privacy', role: 'Daughter' }
      ],
      lines: [
        { participant: 'Dad', text: "*Knock knock* Yen, free for a second? Brought clean towels.", translation: "*Cốc cốc* Yến ơi, con có rảnh một giây không? Bố mang khăn tắm sạch cho con nè." },
        { participant: 'Yen', text: "Come in Dad, door is unlocked!", translation: "Bố vào đi ạ, cửa không khóa đâu bố!" },
        { participant: 'Dad', text: "Left them on your shelf. Studying hard?", translation: "Bố để trên kệ nha. Đang chăm chỉ học bài hả con?" },
        { participant: 'Yen', text: "Almost done with history, thanks Dad!", translation: "Con sắp xong môn Lịch sử rồi ạ, con cảm ơn bố!" }
      ]
    }
  ],

  'parent-child-13': [
    {
      type: 'pair',
      school: 'casual',
      title: 'Bridging Generation Gaps: Heritage Values vs. Modern Passions',
      participants: [
        { name: 'Grandfather', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=GrandpaCasual13', role: 'Grandfather' },
        { name: 'Bao', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BaoCasual13', role: 'Grandson' }
      ],
      lines: [
        { participant: 'Grandfather', text: "Bao, in our day, becoming a doctor or civil servant was the only honorable career path. Why do you spend all your evenings drawing digital animations?", translation: "Bảo này, thời của ông ngày xưa, trở thành bác sĩ hay công chức nhà nước mới là con đường danh giá duy nhất. Sao tối nào cháu cũng cặm cụi vẽ mấy cái hình động trên máy tính thế?" },
        { participant: 'Bao', text: "Grandpa, I respect our family traditions deeply, but technology has transformed the creative economy. Vietnamese animators are now producing films for global studios!", translation: "Dạ thưa ông, cháu luôn tôn trọng truyền thống gia đình mình, nhưng thời đại công nghệ đã thay đổi nền kinh tế sáng tạo rồi ạ. Các nghệ sĩ hoạt hình Việt Nam giờ đây đang làm phim cho các hãng phim hoạt hình toàn cầu đấy ông!" },
        { participant: 'Grandfather', text: "Is that truly a viable profession? It sounds so intangible compared to medicine.", translation: "Nghề đó có thực sự nuôi sống được bản thân không cháu? Nghe nó xa vời quá so với ngành y." },
        { participant: 'Bao', text: "Look at this historical animation I created of the Tran Dynasty battle on Bach Dang River! I used modern digital tools to honor our ancestral heritage so younger kids can learn history with pride.", translation: "Ông xem thử đoạn phim hoạt hình lịch sử về trận chiến Bạch Đằng thời nhà Trần do chính cháu vẽ này ạ! Cháu dùng công nghệ hiện đại để tôn vinh trang sử hào hùng của cha ông để các bạn nhỏ học lịch sử thấy tự hào hơn." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Family Heritage Tea Time Ping',
      participants: [
        { name: 'Grandfather', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=GrandpaQuick13', role: 'Grandpa' },
        { name: 'Bao', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BaoQuick13', role: 'Grandson' }
      ],
      lines: [
        { participant: 'Grandfather', text: "Bao, brewed jasmine tea on the veranda. Show me more of those drawings.", translation: "Bảo ơi, ông pha trà lài ngoài hiên rồi nè. Ra cho ông xem thêm mấy bức tranh của cháu đi." },
        { participant: 'Bao', text: "Bringing my iPad right out, Grandpa!", translation: "Cháu cầm iPad chạy ra liền đây ông ơi!" },
        { participant: 'Grandfather', text: "The historical ship looked magnificent.", translation: "Chiếc thuyền chiến thời xưa cháu vẽ nhìn uy nghiêm lắm." },
        { participant: 'Bao', text: "I'll show you how I animated the river waves!", translation: "Cháu sẽ chỉ cho ông xem cách cháu vẽ sóng nước cuộn trào nha!" }
      ]
    }
  ],

  'parent-child-14': [
    {
      type: 'pair',
      school: 'casual',
      title: "A Parent's Heartfelt Apology for Overreacting in Anger",
      participants: [
        { name: 'Mom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MomCasual14Apology', role: 'Mother' },
        { name: 'Thao', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ThaoCasual14Apology', role: 'Daughter' }
      ],
      lines: [
        { participant: 'Mom', text: "Thao, can I sit with you for a moment? I want to talk about how I shouted at you when you accidentally knocked over the vase earlier.", translation: "Thảo ơi, mẹ ngồi nói chuyện với con một lát được không? Mẹ muốn xin lỗi về việc lúc nãy mẹ đã to tiếng quát mắng khi con vô tình làm vỡ bình hoa." },
        { participant: 'Thao', text: "I was really scared, Mom. I didn't mean to break it; my backpack strap caught on the table corner.", translation: "Lúc đó con sợ lắm mẹ ơi. Con đâu có cố ý làm vỡ đâu, tại cái quai balo của con bị vướng vào góc bàn thôi mà." },
        { participant: 'Mom', text: "I know, and that is why I am so sorry. I had a stressful day at work, but that is zero excuse to take out my frustration on you. Shouting was wrong of me, and I apologize sincerely.", translation: "Mẹ biết rồi, và đó là lý do mẹ rất ân hận. Hôm nay mẹ gặp nhiều chuyện bực mình ở cơ quan, nhưng đó tuyệt đối không phải lý do để mẹ trút giận lên đầu con. Việc mẹ quát tháo là hoàn toàn sai, mẹ chân thành xin lỗi con gái nhé." },
        { participant: 'Thao', text: "Thank you for saying that, Mom. It means so much that you apologized. I forgive you.", translation: "Con cảm ơn mẹ vì đã nói ra những lời này. Thấy mẹ nhận lỗi con cảm động lắm. Con không giận mẹ nữa đâu ạ." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Post-Spill Forgiveness & Warm Hug',
      participants: [
        { name: 'Dad', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DadQuick14Apology', role: 'Dad' },
        { name: 'Thao', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ThaoQuick14Apology', role: 'Daughter' }
      ],
      lines: [
        { participant: 'Dad', text: "Hey, don't cry over spilt milk! Accidents happen to everyone.", translation: "Thôi nào, đừng khóc vì cốc sữa bị đổ con ơi! Tai nạn nhỏ ai mà chẳng gặp." },
        { participant: 'Thao', text: "I thought you'd be furious with me.", translation: "Con cứ tưởng bố sẽ nổi trận lôi đình với con cơ." },
        { participant: 'Dad', text: "Never over a spill. Grab the mop, let's clean it together!", translation: "Chuyện cỏn con vậy ai lại giận con. Cầm cây lau nhà, hai bố con mình cùng dọn sạch nào!" },
        { participant: 'Thao', text: "Thanks Dad, love you!", translation: "Con cảm ơn bố, con yêu bố nhiều!" }
      ]
    }
  ],

  'parent-child-15': [
    {
      type: 'pair',
      school: 'casual',
      title: 'Frank, Supportive Talk on Peer Pressure, Vaping & Safe Rides',
      participants: [
        { name: 'Dad', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DadCasual15Safety', role: 'Father' },
        { name: 'Minh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MinhCasual15Safety', role: 'Teen Son' }
      ],
      lines: [
        { participant: 'Dad', text: "Minh, as you enter tenth grade, parties and hangouts will become more common. I want to have a completely honest, judgment-free conversation about substance peer pressure.", translation: "Minh à, bước vào lớp 10 thì việc tụ tập tiệc tùng sẽ nhiều hơn. Bố muốn hai bố con mình có một cuộc trò chuyện hoàn toàn cởi mở, không phán xét về áp lực rủ rê chất kích thích." },
        { participant: 'Minh', text: "Some seniors behind the bleachers were offering vape pods to ninth graders last week, Dad.", translation: "Tuần trước mấy anh khóa trên ở sau khán đài có rủ mấy bạn lớp 9 hút thử vape đó bố." },
        { participant: 'Dad', text: "Saying 'No' when everyone else seems to be doing it takes enormous courage. Nicotine and unknown chemicals can permanently harm your developing lungs and brain.", translation: "Nói lời từ chối khi đám đông xung quanh đang hùa theo đòi hỏi sự dũng cảm rất lớn con trai à. Chất nicotine và hóa chất độc hại sẽ phá hủy vĩnh viễn phổi và não bộ đang phát triển của con." },
        { participant: 'Minh', text: "I walked away with my friend Jack. What if I'm ever stuck at a party where people are doing illegal things?", translation: "Lúc đó con với bạn Jack đã rủ nhau đi chỗ khác rồi ạ. Nhưng lỡ sau này con bị kẹt ở buổi tiệc mà người ta làm điều phi pháp thì sao hả bố?" },
        { participant: 'Dad', text: "Here is our lifelong 'No-Questions-Asked Safe Call' rule: call or text me anytime, 2 AM or 4 AM. I will pick you up immediately without yelling or interrogating you. Your safety comes before all else.", translation: "Đây là giao ước 'Cuộc gọi an toàn không phán xét' suốt đời của bố con mình: con cứ gọi điện hoặc nhắn tin cho bố bất kể lúc nào, dù là 2 giờ hay 4 giờ sáng. Bố sẽ đến đón con ngay lập tức mà không bao giờ mắng mỏ hay tra khảo con. Sự an toàn của con luôn đứng trên tất cả mọi thứ." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Safe Ride Guarantee Ping',
      participants: [
        { name: 'Minh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MinhQuick15Safety', role: 'Son' },
        { name: 'Dad', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DadQuick15Safety', role: 'Dad' }
      ],
      lines: [
        { participant: 'Minh', text: "Party vibe got weird. Can you pick me up from 42 Le Loi?", translation: "Không khí buổi tiệc bắt đầu thấy kỳ kỳ rồi bố ơi. Bố ghé số 42 Lê Lợi đón con được không ạ?" },
        { participant: 'Dad', text: "In the car right now, arriving in 8 minutes. Proud of you for calling.", translation: "Bố đang nổ máy xe rồi nè, 8 phút nữa bố có mặt. Bố rất tự hào vì con đã biết gọi cho bố." },
        { participant: 'Minh', text: "Waiting under the streetlight outside.", translation: "Con đang đứng chờ dưới cột đèn đường bên ngoài ạ." },
        { participant: 'Dad', text: "Stay where it's bright, see you shortly.", translation: "Cứ đứng chỗ sáng sủa nha, bố tới liền." }
      ]
    }
  ],

  'parent-child-16': [
    {
      type: 'pair',
      school: 'casual',
      title: 'Supporting an Unconventional Dream and Breaking It into Actionable Milestones',
      participants: [
        { name: 'Mom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MomCasual16Dream', role: 'Mother' },
        { name: 'Dan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DanCasual16Dream', role: 'Son' }
      ],
      lines: [
        { participant: 'Dan', text: "Mom, I know you hoped I'd study business finance, but my real dream is documentary filmmaking.", translation: "Mẹ ơi, con biết mẹ từng mong con học tài chính kinh doanh, nhưng ước mơ thực sự của con là làm phim tài liệu." },
        { participant: 'Mom', text: "Tell me more, Dan. Where did this deep aspiration come from?", translation: "Kể cho mẹ nghe thêm đi Dan. Niềm khao khát cháy bỏng này bắt nguồn từ đâu thế con?" },
        { participant: 'Dan', text: "I want to document vanishing traditional crafts in rural Vietnam before they disappear. Stories matter to me so much more than spreadsheets.", translation: "Con muốn ghi lại hình ảnh những làng nghề truyền thống đang dần mai một ở nông thôn Việt Nam trước khi chúng biến mất. Những câu chuyện con người có ý nghĩa với con hơn nhiều so với các bảng tính khô khan." },
        { participant: 'Mom', text: "That is a noble, meaningful pursuit, Dan. Pursuing creative fields requires immense discipline. What if we map out actionable milestones: you submit your short portfolio to youth film festivals this year while maintaining solid grades?", translation: "Đó là một hoài bão rất cao đẹp và giàu ý nghĩa đó Dan. Theo đuổi nghệ thuật đòi hỏi tính kỷ luật cực kỳ lớn. Bố mẹ con mình cùng vạch ra những cột mốc hành động thực tế nhé: năm nay con thử nộp phim ngắn dự thi các liên hoan phim trẻ, đồng thời vẫn duy trì điểm số tốt trên lớp được không con?" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Encouragement on Portfolio Submission',
      participants: [
        { name: 'Dan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DanQuick16Dream', role: 'Son' },
        { name: 'Mom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MomQuick16Dream', role: 'Mom' }
      ],
      lines: [
        { participant: 'Dan', text: "Mom! My short film got selected for the youth showcase!", translation: "Mẹ ơi! Phim ngắn của con vừa được chọn vào triển lãm phim trẻ rồi nè!" },
        { participant: 'Mom', text: "I AM SO INCREDIBLY PROUD OF YOU! Hard work shining through!", translation: "MẸ TỰ HÀO VỀ CON VÔ CÙNG LUÔN! Mọi công sức nỗ lực đã được đền đáp xứng đáng!" },
        { participant: 'Dan', text: "Screening is next Friday, save the date!", translation: "Lịch chiếu là thứ Sáu tuần sau, mẹ nhớ giữ lịch đi xem nha!" },
        { participant: 'Mom', text: "Front row seats for the whole family!", translation: "Cả nhà mình sẽ ngồi ngay hàng ghế đầu tiên cổ vũ con!" }
      ]
    }
  ],

  'parent-child-17': [
    {
      type: 'pair',
      school: 'casual',
      title: 'Negotiating Curfew and Finding a Win-Win Solution Calmly',
      participants: [
        { name: 'Dad', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DadCasual17Negotiate', role: 'Father' },
        { name: 'Huy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HuyCasual17Negotiate', role: 'Teen Son' }
      ],
      lines: [
        { participant: 'Huy', text: "Dad, we keep arguing every time I want to attend my friend's birthday party. You always think I'm being reckless, and I feel like you don't trust me.", translation: "Bố ơi, bố con mình cứ hay cãi nhau mỗi khi con muốn đi sinh nhật bạn bè. Bố lúc nào cũng nghĩ con bốc đồng, còn con lại thấy bố không tin tưởng con." },
        { participant: 'Dad', text: "I'm glad you called this discussion with composure, Huy. Let's practice active listening. Tell me what feels restrictive to you.", translation: "Bố rất mừng vì con bình tĩnh ngồi lại nói chuyện thẳng thắn như thế này, Huy à. Hai bố con mình cùng lắng nghe tích cực nhé. Con thấy điều gì đang gò bó con nhất nào?" },
        { participant: 'Huy', text: "Having to leave at 8:30 PM when the group is just cutting the cake makes me feel humiliated in front of everyone.", translation: "Việc con phải ra về lúc 8h30 tối đúng lúc cả nhóm vừa mới cắt bánh sinh nhật làm con thấy ngượng chín mặt trước bạn bè." },
        { participant: 'Dad', text: "I hear you clearly. How about a win-win solution: for special birthdays, curfew extends to 10:00 PM, provided you share the venue address and introduce me to the host parents beforehand. Can you agree to that compromise?", translation: "Bố hiểu rõ cảm giác đó của con rồi. Vậy bố con mình tìm một giải pháp đôi bên cùng có lợi nhé: với các dịp sinh nhật đặc biệt, giờ giới nghiêm sẽ là 10h00 tối, miễn là con chia sẻ địa chỉ quán và giới thiệu phụ huynh bạn tổ chức cho bố biết trước. Con đồng ý với thỏa hiệp này chứ?" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Curfew Confirmation Text',
      participants: [
        { name: 'Huy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HuyQuick17Negotiate', role: 'Son' },
        { name: 'Dad', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DadQuick17Negotiate', role: 'Dad' }
      ],
      lines: [
        { participant: 'Huy', text: "Party address sent! Mr. Nam is supervising the room.", translation: "Con gửi địa chỉ tiệc rồi bố nha! Có bác Nam phụ huynh đang quản lý phòng ạ." },
        { participant: 'Dad', text: "Got the pin. Enjoy the party until 10 PM sharp!", translation: "Bố nhận được định vị rồi. Chúc con vui vẻ tới đúng 10h tối nha!" },
        { participant: 'Huy', text: "Thanks for trusting me, Dad!", translation: "Con cảm ơn bố đã tin tưởng con!" },
        { participant: 'Dad', text: "Have a blast, champ.", translation: "Chơi vui vẻ nha chàng trai." }
      ]
    }
  ],

  'parent-child-18': [
    {
      type: 'pair',
      school: 'casual',
      title: 'Holding Space for Grief After the Loss of a Beloved Pet',
      participants: [
        { name: 'Mom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MomCasual18Loss', role: 'Mother' },
        { name: 'Ha', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HaCasual18Loss', role: 'Daughter' }
      ],
      lines: [
        { participant: 'Ha', text: "Mom, coming home from school and not hearing Miu's bell collar jingle at the door is tearing me apart. The living room feels so painfully empty.", translation: "Mẹ ơi, đi học về mà không nghe tiếng lục lạc leng keng của bé Miu chạy ra đón ở cửa làm lòng con quặn thắt lại. Phòng khách nhà mình sao mà trống trải đến đau lòng." },
        { participant: 'Mom', text: "Come into my arms, Ha. Miu was a cherished member of our family for ten wonderful years. It is heartbreaking to say goodbye.", translation: "Lại ôm mẹ nào Hà. Bé Miu đã là thành viên yêu quý của gia đình mình suốt 10 năm tuyệt vời. Phải nói lời từ biệt thực sự đau xót vô cùng con ơi." },
        { participant: 'Ha', text: "I keep thinking I see him napping in the sunny corner.", translation: "Con cứ có cảm giác như vẫn thấy em nó đang nằm sưởi nắng trong góc quen thuộc vậy mẹ." },
        { participant: 'Mom', text: "Grief takes time, and we don't have to rush past the sadness. We gave Miu a life filled with warmth, treats, and boundless love. Let's make a memorial photo frame with his favorite pictures this evening so his memory stays bright in our hearts.", translation: "Nỗi đau mất mát cần thời gian để nguôi ngoai, và mẹ con mình không cần phải gượng ép kìm nén nỗi buồn. Tụi mình đã mang lại cho bé Miu một cuộc đời tràn ngập sự ấm áp, đồ ăn ngon và tình yêu thương vô bờ bến. Tối nay hai mẹ con mình cùng làm một khung ảnh kỷ niệm những khoảnh khắc đáng yêu nhất của em nó để ký ức về Miu luôn sáng mãi trong tim nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Warm Blanket & Silent Comfort Hug',
      participants: [
        { name: 'Dad', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DadQuick18Loss', role: 'Dad' },
        { name: 'Ha', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HaQuick18Loss', role: 'Daughter' }
      ],
      lines: [
        { participant: 'Dad', text: "Sitting with you quietly, Ha. You don't have to say a word.", translation: "Bố ngồi đây lặng lẽ bên con nhé Hà. Con không cần phải nói gì đâu." },
        { participant: 'Ha', text: "Holding your hand helps so much, Dad.", translation: "Nắm tay bố giúp con thấy vững tâm hơn nhiều lắm ạ." },
        { participant: 'Dad', text: "We carry Miu's gentle spirit together.", translation: "Bố con mình sẽ cùng nhau lưu giữ linh hồn hiền lành của bé Miu con nhé." },
        { participant: 'Ha', text: "Thank you for being here with me.", translation: "Con cảm ơn bố đã luôn ở bên con." }
      ]
    }
  ],

  'parent-child-19': [
    {
      type: 'pair',
      school: 'casual',
      title: 'Preparing to Move to College Dorm: Proud Pride & Letting Go',
      participants: [
        { name: 'Mom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MomCasual19', role: 'Mother' },
        { name: 'Phong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PhongCasual19', role: 'College Freshman' }
      ],
      lines: [
        { participant: 'Mom', text: "Phong, your dorm packing boxes are all taped up by the front door. Seeing your empty bedroom makes my heart ache with pride and sadness all at once.", translation: "Phong ơi, mấy thùng đồ chuyển lên ký túc xá đại học của con đã dán băng keo ngay ngắn ngoài cửa rồi kìa. Nhìn căn phòng ngủ trống trải làm lòng mẹ vừa nghẹn ngào tự hào vừa thấy hụt hẫng vô cùng." },
        { participant: 'Phong', text: "I'm nervous about living on my own for the first time, Mom. Cooking, doing laundry, managing budgets without you and Dad.", translation: "Lần đầu tiên phải sống tự lập con cũng hồi hộp lắm mẹ ơi. Nấu nướng, giặt giũ rồi tự quản lý chi tiêu mà không có bố mẹ bên cạnh." },
        { participant: 'Mom', text: "We have spent eighteen years preparing you for this exact independence, son. You are capable, kind, and responsible. Our role now transitions from daily directors to your lifelong consultants and biggest cheerleaders.", translation: "Bố mẹ đã dành suốt 18 năm qua để chuẩn bị cho con ngày tự lập này mà con trai. Con rất tháo vát, tốt bụng và có trách nhiệm. Vai trò của bố mẹ từ nay sẽ chuyển từ người hướng dẫn hàng ngày thành những chuyên gia tư vấn suốt đời và là những người cổ vũ nhiệt thành nhất cho con." },
        { participant: 'Phong', text: "I will call every Sunday evening, I promise! And I'll come home for your famous beef stew once a month.", translation: "Con hứa sẽ gọi điện về cho bố mẹ vào mỗi tối Chủ nhật! Và mỗi tháng con sẽ về nhà ăn món bò kho trứ danh của mẹ một lần nha." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'First Dorm Night Check-in Text',
      participants: [
        { name: 'Phong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PhongQuick19', role: 'Son' },
        { name: 'Dad', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DadQuick19', role: 'Dad' }
      ],
      lines: [
        { participant: 'Phong', text: "Bed made, roommate is cool! Good night from dorm room 402.", translation: "Giường chiếu dọn dẹp xong rồi, bạn cùng phòng dễ tính lắm bố ơi! Chúc bố mẹ ngủ ngon từ phòng 402 nha." },
        { participant: 'Dad', text: "So proud of you son! Sleep well on your first adult night.", translation: "Bố tự hào về con lắm con trai! Ngủ thật ngon trong đêm đầu tiên của tuổi trưởng thành nha." },
        { participant: 'Phong', text: "Love you and Mom so much!", translation: "Con yêu bố mẹ nhiều lắm ạ!" },
        { participant: 'Dad', text: "Always in our hearts. Fly high!", translation: "Bố mẹ luôn dõi theo con. Bay thật cao thật xa nha con trai!" }
      ]
    }
  ],

  'parent-child-20': [
    {
      type: 'pair',
      school: 'casual',
      title: 'Silly Pancake Baking & Laughing over Kitchen Disasters',
      participants: [
        { name: 'Dad', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DadCasual20', role: 'Father' },
        { name: 'Binh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BinhCasual20', role: 'Son' }
      ],
      lines: [
        { participant: 'Binh', text: "Dad, look! My pancake flip landed on the ceiling fan instead of the skillet!", translation: "Bố nhìn kìa! Con hất chảo làm cái bánh kếp bay dính luôn lên quạt trần thay vì rơi vào chảo rồi!" },
        { participant: 'Dad', text: "Hahaha, call the Guinness World Records! That was the highest pancake trajectory in family history!", translation: "Hahaha, gọi điện cho Sách Kỷ lục Guinness gấp! Đó là quỹ đạo bay của bánh kếp cao nhất lịch sử gia đình mình luôn rồi!" },
        { participant: 'Binh', text: "Should I grab the broom to scrape it off before Mom walks into the kitchen?", translation: "Con lấy chổi khều xuống trước khi mẹ bước vào bếp nha bố?" },
        { participant: 'Dad', text: "Quick, mission stealth! Catch it with the plate! Kitchen disasters like this make the absolute best core memories.", translation: "Nhanh, nhiệm vụ bí mật! Lấy đĩa hứng bên dưới kìa! Mấy pha thảm họa nấu nướng hài hước thế này mới tạo nên những ký ức tuổi thơ đẹp đẽ nhất đó con." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Sunday Morning Board Game Challenge',
      participants: [
        { name: 'Binh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BinhQuick20', role: 'Son' },
        { name: 'Mom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MomQuick20', role: 'Mom' }
      ],
      lines: [
        { participant: 'Binh', text: "Uno rematch in the living room! You won't draw another +4 card on me!", translation: "Tái đấu bài Uno ở phòng khách đi mẹ! Lần này mẹ không rút được lá +4 bốc tiếp đè con đâu nhé!" },
        { participant: 'Mom', text: "You're on, little champion! Shuffling the deck right now.", translation: "Thách đấu luôn chàng quán quân nhí! Mẹ đang xào bài đây." },
        { participant: 'Binh', text: "Loser washes the lunch dishes!", translation: "Ai thua phải rửa bát bữa trưa nha mẹ!" },
        { participant: 'Mom', text: "Deal! Prepare for defeat!", translation: "Chốt kèo! Chuẩn bị tinh thần rửa bát đi nha con!" }
      ]
    }
  ]
};
