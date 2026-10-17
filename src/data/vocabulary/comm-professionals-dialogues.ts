// Distinct 3-tier Dialogues (Business, Casual, Super Casual) for Lessons pro-01 to pro-20 (For Professionals)
// Guarantees 100% differentiation across all 3 communication schools with no overlapping scenarios.

import { Dialogue } from './comm-students-dialogues';

export const PROFESSIONALS_DIALOGUES: Record<string, Dialogue[]> = {
  'pro-01': [
    {
      type: 'pair',
      school: 'business',
      title: 'Formal Executive Onboarding Introduction',
      participants: [
        { name: 'Director Harris', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Harris', role: 'Executive Director' },
        { name: 'Alex', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex', role: 'Senior Product Manager' }
      ],
      lines: [
        { participant: 'Alex', text: "Good morning, Director Harris. Allow me to formally introduce myself on my onboarding day. My name is Alex, joining as Senior Product Manager.", translation: "Kính chào Giám đốc Harris. Cho phép tôi được tự giới thiệu trong ngày nhận việc hôm nay. Tôi là Alex, gia nhập công ty với vị trí Giám đốc Quản lý Sản phẩm Cấp cao." },
        { participant: 'Director Harris', text: "Welcome to the executive team, Alex. We have high expectations for our Q3 digital platform transformation.", translation: "Chào mừng Alex gia nhập đội ngũ lãnh đạo. Ban giám đốc rất kỳ vọng vào đợt chuyển đổi nền tảng số trong Quý 3 này." },
        { participant: 'Alex', text: "Thank you, sir. I report directly to VP Nguyen and will oversee our enterprise architecture and cross-functional alignment.", translation: "Cảm ơn Giám đốc. Tôi báo cáo trực tiếp cho Phó Chủ tịch Nguyễn và sẽ phụ trách giám sát kiến trúc doanh nghiệp cùng sự đồng bộ giữa các phòng ban." },
        { participant: 'Director Harris', text: "Splendid. I look forward to reviewing your 90-day strategic roadmap at next week's steering committee.", translation: "Rất tốt. Tôi rất mong đợi được xem qua lộ trình chiến lược 90 ngày của bạn tại cuộc họp ban chỉ đạo tuần tới." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Coffee Machine Welcome with Department Colleague',
      participants: [
        { name: 'Sarah', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah', role: 'Colleague' },
        { name: 'Alex', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex', role: 'New PM' }
      ],
      lines: [
        { participant: 'Sarah', text: "Hey Alex! Welcome to the fifth floor. I'm Sarah from the product design team.", translation: "Chào Alex! Chào mừng bạn đến với văn phòng tầng 5 nha. Mình là Sarah bên nhóm thiết kế sản phẩm nè." },
        { participant: 'Alex', text: "Hi Sarah, great to meet you in person! I've been admiring the design system your team published.", translation: "Chào Sarah, rất vui được gặp trực tiếp bạn! Mình rất ấn tượng với hệ thống thiết kế mà team bạn vừa công bố." },
        { participant: 'Sarah', text: "Thanks so much! Are you settling in okay with your laptop setup and team Slack channels?", translation: "Cảm ơn bạn nhiều nha! Bạn đã cài đặt máy tính với vào các kênh Slack của team ổn thỏa hết chưa?" },
        { participant: 'Alex', text: "Everything's smooth so far! Let's grab lunch together later if you're free.", translation: "Mọi thứ đều suôn sẻ! Lát rảnh thì tụi mình đi ăn trưa chung nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Slack DM Onboarding Welcome',
      participants: [
        { name: 'Dan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dan', role: 'Engineer' },
        { name: 'Alex', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex', role: 'PM' }
      ],
      lines: [
        { participant: 'Dan', text: "Hey Alex! Added you to #dev-standup.", translation: "Chào Alex! Đã add bạn vào kênh #dev-standup rồi nha." },
        { participant: 'Alex', text: "Thanks Dan! Quick sync after lunch?", translation: "Cảm ơn Dan! Đầu giờ chiều họp nhanh xíu được không?" },
        { participant: 'Dan', text: "Sure, 1:30 PM works. Ping me on huddle.", translation: "Được chứ, 1h30 nha. Cứ gọi huddle qua Slack." },
        { participant: 'Alex', text: "Sounds good, see ya!", translation: "Chốt luôn, lát gặp!" }
      ]
    }
  ],

  'pro-02': [
    {
      type: 'pair',
      school: 'business',
      title: 'Morning Executive Briefing Between Department Heads',
      participants: [
        { name: 'Elena', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Elena', role: 'Finance Head' },
        { name: 'Marcus', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus', role: 'Operations Head' }
      ],
      lines: [
        { participant: 'Elena', text: "Good morning, Marcus. I trust your operational quarterly audit proceeded smoothly yesterday?", translation: "Chào buổi sáng, Marcus. Tôi tin là đợt kiểm toán vận hành quý hôm qua của phòng bạn đã diễn ra thuận lợi chứ?" },
        { participant: 'Marcus', text: "Good morning, Elena. Indeed, all supply chain inventory reconciled within anticipated margins.", translation: "Chào Elena. Đúng vậy, toàn bộ số liệu tồn kho chuỗi cung ứng đều khớp trong mức dung sai dự tính." },
        { participant: 'Elena', text: "Excellent. May I request the finalized capital expenditure figures prior to our board review?", translation: "Rất tốt. Tôi có thể xin số liệu chi phí vốn hoàn chỉnh trước buổi báo cáo hội đồng quản trị được không?" },
        { participant: 'Marcus', text: "Certainly. My financial analyst will transmit the signed disclosure by 11 AM.", translation: "Chắc chắn rồi. Chuyên viên tài chính của tôi sẽ chuyển bản công bố có chữ ký trước 11 giờ trưa nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Pantry Small Talk and Borrowing a Charger',
      participants: [
        { name: 'Kevin', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kevin', role: 'Marketer' },
        { name: 'Linh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Linh', role: 'Content Lead' }
      ],
      lines: [
        { participant: 'Kevin', text: "Morning Linh! How's your week treating you so far?", translation: "Chào buổi sáng Linh! Tuần này công việc của bạn thế nào rồi?" },
        { participant: 'Linh', text: "Pretty busy with the autumn campaign launch, but making good progress! How about you?", translation: "Khá bận với đợt chạy chiến dịch mùa thu, nhưng tiến độ đang rất tốt! Còn bên bạn thì sao?" },
        { participant: 'Kevin', text: "Same here. Hey, do you happen to have a spare USB-C phone charger I could borrow for an hour?", translation: "Bên mình cũng thế. À, bạn có dư dây sạc điện thoại Type-C cho mình mượn tầm một tiếng được không?" },
        { participant: 'Linh', text: "Sure, right here in my top drawer. Take it!", translation: "Có nè, ngay trong ngăn kéo trên cùng của mình. Bạn cứ lấy dùng đi!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Desk Ping Across Cubicles',
      participants: [
        { name: 'Tom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tom', role: 'Developer' },
        { name: 'An', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=An', role: 'Designer' }
      ],
      lines: [
        { participant: 'Tom', text: "Coffee run? Heading down now.", translation: "Đi làm ly cà phê không? Đang xuống sảnh nè." },
        { participant: 'An', text: "Yes please! Iced latte, oat milk.", translation: "Có có! Cho một ly latte đá sữa yến mạch nha." },
        { participant: 'Tom', text: "Got it. Back in ten.", translation: "Nhận đơn. Mười phút nữa mang lên." },
        { participant: 'An', text: "Legend! Money sent via bank app.", translation: "Tuyệt đỉnh! Đã bắn tiền qua app rồi nha." }
      ]
    }
  ],

  'pro-03': [
    {
      type: 'pair',
      school: 'business',
      title: 'Opening and Moderating a Regional Strategy Meeting',
      participants: [
        { name: 'Chairperson Bradley', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bradley', role: 'Chairperson' },
        { name: 'Ms. Thornton', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Thornton', role: 'Strategy Director' }
      ],
      lines: [
        { participant: 'Chairperson Bradley', text: "Good afternoon, colleagues. The meeting is now called to order. Ms. Thornton, will you please walk us through item two on the agenda?", translation: "Chào các đồng nghiệp. Cuộc họp xin phép được bắt đầu. Thưa cô Thornton, xin vui lòng dẫn dắt phần nội dung thứ hai trong chương trình nghị sự." },
        { participant: 'Ms. Thornton', text: "Certainly, Mr. Chairman. Item two concerns our market penetration strategy in Southeast Asia.", translation: "Dạ thưa Chủ tọa. Nội dung thứ hai liên quan đến chiến lược thâm nhập thị trường khu vực Đông Nam Á." },
        { participant: 'Chairperson Bradley', text: "Are there any dissenting views or budgetary amendments regarding these expansion metrics?", translation: "Có ý kiến phản biện hoặc đề xuất điều chỉnh ngân sách nào liên quan đến các chỉ số mở rộng này không?" },
        { participant: 'Ms. Thornton', text: "None recorded in preliminary consultations. We are positioned to proceed to a formal vote.", translation: "Không có ý kiến phản đối nào trong các buổi tham vấn sơ bộ ạ. Chúng ta đã sẵn sàng chuyển sang bước biểu quyết chính thức." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Scheduling a Cross-Team Sync',
      participants: [
        { name: 'Rachel', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rachel', role: 'Product Lead' },
        { name: 'Minh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Minh', role: 'Tech Lead' }
      ],
      lines: [
        { participant: 'Rachel', text: "Hi Minh, do you have 30 minutes free tomorrow afternoon to sync up on the API integration?", translation: "Chào Minh, chiều mai bạn có rảnh khoảng 30 phút để hai bên mình chốt lại phần tích hợp API không?" },
        { participant: 'Minh', text: "Hey Rachel! Let me check my calendar... I have an open slot between 2:30 and 3:00 PM.", translation: "Chào Rachel! Để mình xem lại lịch... Mình đang trống khung giờ từ 2h30 đến 3h chiều nè." },
        { participant: 'Rachel', text: "That works perfectly. I'll send out the Google Calendar invite with a short agenda attached.", translation: "Khung giờ đó chuẩn quá. Mình sẽ gửi lời mời lịch Google Calendar kèm chương trình họp ngắn gọn nhé." },
        { participant: 'Minh', text: "Great. I'll make sure our backend engineers review the spec before we hop on.", translation: "Tuyệt vời. Mình sẽ bảo các bạn kỹ sư backend xem trước bản đặc tả kỹ thuật trước khi vào họp." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Meeting Reschedule Ping',
      participants: [
        { name: 'Nick', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nick', role: 'Colleague' },
        { name: 'Hien', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Hien', role: 'Colleague' }
      ],
      lines: [
        { participant: 'Nick', text: "Client call ran over. Push our 1:1 by 15 mins?", translation: "Cuộc gọi khách hàng bị lố giờ. Dời cuộc gặp 1:1 của tụi mình trễ 15 phút được hông?" },
        { participant: 'Hien', text: "No worries at all. Ping me when you're free.", translation: "Không sao hết nè. Xong việc cứ nhắn mình nha." },
        { participant: 'Nick', text: "Thanks, hopping on at 1:45 PM.", translation: "Cảm ơn bạn, 1h45 mình vào liền." },
        { participant: 'Hien', text: "See you then!", translation: "Lát gặp nhé!" }
      ]
    }
  ],

  'pro-04': [
    {
      type: 'pair',
      school: 'business',
      title: 'Formal International Conference Call with Key Stakeholder',
      participants: [
        { name: 'Mr. Tanaka', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tanaka', role: 'Partner Director' },
        { name: 'Ms. Van', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Van', role: 'Commercial Director' }
      ],
      lines: [
        { participant: 'Ms. Van', text: "Good morning, Mr. Tanaka. May I verify whether our audio transmission is clear and audible on your end in Tokyo?", translation: "Kính chào ông Tanaka. Tôi xin phép được xác nhận xem đường truyền âm thanh bên phía Tokyo của ông có rõ ràng không ạ?" },
        { participant: 'Mr. Tanaka', text: "Good morning, Ms. Van. Your reception is pristine. Thank you for accommodating our time-zone disparity.", translation: "Chào bà Vân. Tín hiệu bên bà rất rõ. Cảm ơn bà đã linh hoạt sắp xếp cuộc họp theo chênh lệch múi giờ." },
        { participant: 'Ms. Van', text: "It is our absolute pleasure. Allow me to share my presentation slides on screen to review our quarterly service level agreement.", translation: "Đó là niềm vinh hạnh của chúng tôi. Cho phép tôi chia sẻ slide thuyết trình lên màn hình để cùng rà soát bản cam kết chất lượng dịch vụ quý." },
        { participant: 'Mr. Tanaka', text: "The slides are visibly displayed. Please proceed with the executive walkthrough.", translation: "Slide đã hiển thị rõ ràng. Xin mời bà bắt đầu phần trình bày tổng quan." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Troubleshooting Mic Issues on Zoom Call',
      participants: [
        { name: 'James', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James', role: 'Colleague' },
        { name: 'Thao', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Thao', role: 'Colleague' }
      ],
      lines: [
        { participant: 'James', text: "Hi Thao! Can you hear me okay? I think you're currently muted on your end.", translation: "Chào Thảo! Bạn nghe mình nói rõ không? Hình như bạn đang tắt mic bên đó thì phải." },
        { participant: 'Thao', text: "Oh, sorry about that! I forgot to unmute. Can you hear me loud and clear now?", translation: "Ôi xin lỗi bạn nha! Mình quên bật mic lại. Giờ bạn nghe rõ tiếng mình chưa?" },
        { participant: 'James', text: "Perfect! Loud and clear. Let's do a quick screen share to check the UI mockup.", translation: "Tuyệt rồi! Nghe to và rõ lắm. Tụi mình chia sẻ màn hình nhanh để xem bản vẽ giao diện nhé." },
        { participant: 'Thao', text: "Sounds good, opening the Figma file right now.", translation: "Nhất trí, mình đang mở file Figma lên đây." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Video Call Check-in',
      participants: [
        { name: 'Long', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Long', role: 'Coworker' },
        { name: 'Duy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Duy', role: 'Coworker' }
      ],
      lines: [
        { participant: 'Long', text: "Can you hear me? Mic was acting up.", translation: "Nghe tui nói không? Nãy mic bị chập chờn." },
        { participant: 'Duy', text: "Loud and clear now. Screen share working?", translation: "Nghe rõ mồn một rồi. Chia sẻ màn hình được chưa?" },
        { participant: 'Long', text: "Pulling up the dashboard right now.", translation: "Đang mở bảng điều khiển lên đây." },
        { participant: 'Duy', text: "Yep, see it! Looks good.", translation: "Thấy rồi! Trông đẹp mắt đó." }
      ]
    }
  ],

  'pro-05': [
    {
      type: 'pair',
      school: 'business',
      title: 'Formal Written Clarification via Executive Email',
      participants: [
        { name: 'Vice President Robert', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Robert', role: 'VP' },
        { name: 'Ha', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ha', role: 'Compliance Lead' }
      ],
      lines: [
        { participant: 'Ha', text: "Dear Vice President Robert, further to our correspondence yesterday, I am transmitting the finalized GDPR compliance assessment.", translation: "Kính gửi Phó Chủ tịch Robert, tiếp theo thư từ trao đổi hôm qua, tôi xin chuyển bản đánh giá tuân thủ quy chuẩn GDPR hoàn chỉnh." },
        { participant: 'Vice President Robert', text: "Thank you, Ha. Have all cross-border data transfer protocols been thoroughly vetted by external legal counsel?", translation: "Cảm ơn Ha. Toàn bộ các giao thức truyền dữ liệu xuyên biên giới đã được văn phòng luật sư bên ngoài thẩm định kỹ lưỡng chưa?" },
        { participant: 'Ha', text: "Yes, sir. Their signed validation memorandum is enclosed as Appendix B for your perusal.", translation: "Dạ rồi thưa Phó Chủ tịch. Bản ghi nhớ xác nhận có chữ ký được đính kèm ở Phụ lục B để ngài xem xét." },
        { participant: 'Vice President Robert', text: "Splendid diligence. I shall endorse the formal release authorization upon my executive sign-off.", translation: "Tinh thần làm việc rất xuất sắc. Tôi sẽ ký phê duyệt văn bản ủy quyền chính thức ngay." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Tagging Colleague on Slack for PR Review',
      participants: [
        { name: 'Nam', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nam', role: 'Frontend Dev' },
        { name: 'Khanh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Khanh', role: 'Senior Dev' }
      ],
      lines: [
        { participant: 'Nam', text: "Hi Khanh, I just submitted the pull request for the checkout flow. Could you take a look when you have a moment?", translation: "Chào Khánh, mình vừa tạo pull request cho luồng thanh toán xong. Khi nào rảnh bạn vào xem qua giùm mình nhé?" },
        { participant: 'Khanh', text: "Hey Nam! Sure thing. Did you add unit tests for the coupon discount logic?", translation: "Chào Nam! Được chứ. Bạn đã viết thêm các bài test cho logic áp mã giảm giá chưa?" },
        { participant: 'Nam', text: "Yes, all test suites passed locally. The PR link is in the team channel.", translation: "Rồi, toàn bộ các bài kiểm thử đều pass ngon lành trên máy mình rồi. Link PR mình để trong kênh team nhé." },
        { participant: 'Khanh', text: "Awesome, I'll review and leave comments before our daily standup.", translation: "Tuyệt, mình sẽ vào duyệt và để lại nhận xét trước buổi họp nhanh hôm nay." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Fast Slack DM Ping',
      participants: [
        { name: 'Bao', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bao', role: 'Colleague' },
        { name: 'Tram', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tram', role: 'Colleague' }
      ],
      lines: [
        { participant: 'Bao', text: "Pinged you the doc link. Quick sign-off?", translation: "Đã gửi link tài liệu qua rồi nha. Duyệt nhanh giùm tui với?" },
        { participant: 'Tram', text: "Reviewing right now. Looks solid!", translation: "Đang xem nè. Trông ổn áp lắm!" },
        { participant: 'Bao', text: "Thanks a bunch! Appreciate it.", translation: "Cảm ơn nhiều nha! Quá tuyệt vời." },
        { participant: 'Tram', text: "Approved! You're good to ship.", translation: "Đã duyệt rồi! Cứ tiến hành thôi." }
      ]
    }
  ],

  'pro-06': [
    {
      type: 'pair',
      school: 'business',
      title: 'Quarterly Milestone Status Report to Executive Committee',
      participants: [
        { name: 'Senior Director Hayes', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Hayes', role: 'Director' },
        { name: 'Quoc', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Quoc', role: 'Lead Program Manager' }
      ],
      lines: [
        { participant: 'Quoc', text: "Good morning, Director Hayes. I am pleased to deliver our quarterly milestone status update for the enterprise migration program.", translation: "Kính chào Giám đốc Hayes. Tôi rất vinh dự được báo cáo tình hình tiến độ mốc Quý của chương trình chuyển đổi doanh nghiệp." },
        { participant: 'Senior Director Hayes', text: "Thank you, Quoc. Are all key milestones currently tracking on schedule and within baseline budget?", translation: "Cảm ơn Quoc. Toàn bộ các mốc trọng yếu hiện có đang đúng tiến độ và trong phạm vi ngân sách cơ sở không?" },
        { participant: 'Quoc', text: "Phase one is ninety-five percent complete. We have successfully mitigated the database latency issue noted in last month's report.", translation: "Giai đoạn một đã hoàn thành 95%. Chúng tôi đã khắc phục triệt để vấn đề độ trễ cơ sở dữ liệu được nêu trong báo cáo tháng trước." },
        { participant: 'Senior Director Hayes', text: "Commendable execution. Please submit the finalized risk matrix before Friday's board session.", translation: "Triển khai rất đáng khen ngợi. Bạn vui lòng nộp ma trận rủi ro hoàn thiện trước phiên họp hội đồng thứ Sáu nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Weekly Sprint Progress Update in Team Standup',
      participants: [
        { name: 'Yen', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Yen', role: 'Scrum Master' },
        { name: 'Hung', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Hung', role: 'Backend Dev' }
      ],
      lines: [
        { participant: 'Yen', text: "Morning Hung! How are we doing on the user authentication ticket for this sprint?", translation: "Chào Hùng! Ticket xác thực tài khoản người dùng trong sprint này tình hình thế nào rồi bạn?" },
        { participant: 'Hung', text: "Making steady progress! The OAuth login is finished. I'm just polishing the two-factor authentication flow today.", translation: "Tiến độ rất đều đặn! Đăng nhập qua OAuth xong rồi. Hôm nay mình hoàn thiện nốt luồng bảo mật hai lớp là chuẩn." },
        { participant: 'Yen', text: "Any blockers or dependencies holding you back from testing?", translation: "Có vướng mắc hay phụ thuộc vào nhóm nào khiến bạn chưa test được không?" },
        { participant: 'Hung', text: "No blockers at all. I should have the code ready for QA testing by 3 PM.", translation: "Không có vướng mắc gì cả. Tầm 3 giờ chiều là mình bàn giao code cho đội QA test được rồi." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Sprint Status Check',
      participants: [
        { name: 'Tri', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tri', role: 'Colleague' },
        { name: 'Lan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lan', role: 'Colleague' }
      ],
      lines: [
        { participant: 'Tri', text: "Status on the payment bug?", translation: "Vụ lỗi thanh toán tiến độ sao rồi?" },
        { participant: 'Lan', text: "Fixed! Deploying hotfix to staging now.", translation: "Sửa xong rồi! Đang đẩy bản vá lên staging đây." },
        { participant: 'Tri', text: "Nice! Let me know once it's live.", translation: "Ngon! Lên live thì ới tớ một tiếng." },
        { participant: 'Lan', text: "Will do, 10 mins tops.", translation: "Okie, mười phút nữa là xong." }
      ]
    }
  ],

  'pro-07': [
    {
      type: 'pair',
      school: 'business',
      title: 'Formal Resource Reallocation Request with Senior Management',
      participants: [
        { name: 'General Manager Douglas', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Douglas', role: 'GM' },
        { name: 'Diep', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Diep', role: 'Operations Manager' }
      ],
      lines: [
        { participant: 'Diep', text: "Good afternoon, General Manager Douglas. In light of our upcoming enterprise product release, I formally request auxiliary engineering delegation.", translation: "Kính chào Tổng Giám đốc Douglas. Trước thềm đợt ra mắt sản phẩm doanh nghiệp sắp tới, tôi xin phép được đề xuất bổ sung thêm nhân sự kỹ thuật hỗ trợ ạ." },
        { participant: 'General Manager Douglas', text: "What specific technical competencies does your immediate workload require, Diep?", translation: "Khối lượng công việc hiện tại của phòng bạn đòi hỏi năng lực kỹ thuật cụ thể nào, thưa Điệp?" },
        { participant: 'Diep', text: "We require two senior infrastructure specialists for a four-week period to oversee our stress testing protocols.", translation: "Chúng tôi cần hai chuyên gia hạ tầng cấp cao trong bốn tuần để giám sát quy trình kiểm thử tải hệ thống ạ." },
        { participant: 'General Manager Douglas', text: "Your request is well-founded. I will authorize the secondment of two DevOps engineers from the platform division.", translation: "Đề xuất của bạn rất xác đáng. Tôi sẽ phê duyệt điều động hai kỹ sư DevOps từ khối nền tảng sang hỗ trợ nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Asking a Teammate for Help with Workload',
      participants: [
        { name: 'Thu', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Thu', role: 'Marketing Specialist' },
        { name: 'Kien', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kien', role: 'Marketing Specialist' }
      ],
      lines: [
        { participant: 'Thu', text: "Hey Kien, do you have a little bandwidth this afternoon? I'm swamped with three event proposals.", translation: "Kiên ơi, chiều nay bạn có chút thời gian rảnh nào không? Mình đang ngập đầu với ba bản đề xuất sự kiện." },
        { participant: 'Kien', text: "I just finished scheduling the newsletter, so I can definitely help out! What do you need?", translation: "Mình vừa lên lịch gửi bản tin xong, nên chắc chắn phụ bạn được nè! Bạn cần mình giúp phần nào?" },
        { participant: 'Thu', text: "Could you take over drafting the sponsor deck for the annual gala? I've already outlined the key slides.", translation: "Bạn nhận soạn giúp mình bộ slide nhà tài trợ cho đêm gala thường niên được không? Mình đã lên sẵn dàn ý chính rồi." },
        { participant: 'Kien', text: "Sure thing! Send over the template and I'll knock it out before 4 PM.", translation: "Chuyện nhỏ! Gửi file mẫu qua đi mình làm xong trước 4 giờ chiều cho." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Hand with a Deck',
      participants: [
        { name: 'Huy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Huy', role: 'Coworker' },
        { name: 'Ngan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ngan', role: 'Coworker' }
      ],
      lines: [
        { participant: 'Huy', text: "Can you give me a quick hand with slide 5?", translation: "Phụ tớ một tay sửa nhanh slide 5 với?" },
        { participant: 'Ngan', text: "Sure, jumping into the Figma file now.", translation: "Được chứ, đang vào file Figma nè." },
        { participant: 'Huy', text: "Just need the chart aligned with the header.", translation: "Chỉ cần căn lại biểu đồ cho thẳng hàng với tiêu đề thôi." },
        { participant: 'Ngan', text: "Done! Aligned and formatted.", translation: "Xong rồi! Căn chỉnh đẹp mắt luôn." }
      ]
    }
  ],

  'pro-08': [
    {
      type: 'pair',
      school: 'business',
      title: 'Annual Performance Appraisal and Constructive Review',
      participants: [
        { name: 'Vice President Edwards', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Edwards', role: 'VP' },
        { name: 'Khang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Khang', role: 'Senior Analyst' }
      ],
      lines: [
        { participant: 'Vice President Edwards', text: "Good afternoon, Khang. Let us conduct your annual performance appraisal and review key developmental goals.", translation: "Kính chào Khang. Chúng ta cùng tiến hành phiên đánh giá hiệu suất năm và xem xét các mục tiêu phát triển trọng yếu." },
        { participant: 'Khang', text: "Thank you, Vice President Edwards. I welcome your comprehensive feedback on my fiscal year deliverables.", translation: "Cảm ơn Phó Chủ tịch Edwards. Tôi rất mong đợi nhận được phản hồi toàn diện của ngài về kết quả công việc trong năm tài chính qua." },
        { participant: 'Vice President Edwards', text: "Your quantitative analytical outputs have been exemplary. Going forward, I encourage you to cultivate greater cross-departmental stakeholder management.", translation: "Các sản phẩm phân tích định lượng của bạn rất xuất sắc. Thời gian tới, tôi khuyến khích bạn rèn luyện thêm kỹ năng quản lý các bên liên quan giữa các phòng ban." },
        { participant: 'Khang', text: "I deeply appreciate this insightful guidance and will prioritize stakeholder alignment workshops in my personal development plan.", translation: "Tôi chân thành cảm ơn định hướng sâu sắc này và sẽ đưa các khóa đào tạo tương tác vào kế hoạch phát triển cá nhân của mình." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Peer Feedback on Design Mockup',
      participants: [
        { name: 'Mai', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mai', role: 'UI Designer' },
        { name: 'Tuan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tuan', role: 'UX Researcher' }
      ],
      lines: [
        { participant: 'Mai', text: "Tuan, do you have five minutes to give me honest feedback on this landing page mockup?", translation: "Tuấn ơi, bạn có rảnh 5 phút để cho mình xin nhận xét thật tình về bản thiết kế trang đích này không?" },
        { participant: 'Tuan', text: "Sure! The typography and color scheme look very clean and modern. I really love the hero section.", translation: "Được chứ! Kiểu chữ với phối màu nhìn rất tinh tế và hiện đại. Mình đặc biệt thích phần đầu trang." },
        { participant: 'Mai', text: "Thanks! What about the call-to-action buttons? Do they feel prominent enough?", translation: "Cảm ơn bạn! Thế còn mấy nút kêu gọi hành động thì sao? Bạn thấy đã đủ nổi bật chưa?" },
        { participant: 'Tuan', text: "I'd suggest increasing the padding slightly so the button stands out more against the dark background.", translation: "Mình nghĩ nên tăng khoảng cách đệm lên một chút để nút bấm nổi rõ hơn trên nền tối." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Feedback Ping on Slack',
      participants: [
        { name: 'Chau', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Chau', role: 'Coworker' },
        { name: 'Vy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vy', role: 'Coworker' }
      ],
      lines: [
        { participant: 'Chau', text: "Honest thoughts on the new copy?", translation: "Nhận xét thật lòng về bài viết mới với?" },
        { participant: 'Vy', text: "Punchy and catchy! Headline is fire.", translation: "Ngắn gọn mà bắt tai lắm! Tiêu đề xuất sắc." },
        { participant: 'Chau', text: "No awkward wording?", translation: "Không bị sượng chỗ nào hả?" },
        { participant: 'Vy', text: "Clean as a whistle. Ship it!", translation: "Mượt mà trơn tru luôn. Đăng bài đi!" }
      ]
    }
  ],

  'pro-09': [
    {
      type: 'pair',
      school: 'business',
      title: 'Formal Conflict Resolution Session Between Department Heads',
      participants: [
        { name: 'Ombudsman Dr. Stewart', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Stewart', role: 'Ombudsman' },
        { name: 'Mr. Campbell', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Campbell', role: 'Engineering Head' }
      ],
      lines: [
        { participant: 'Ombudsman Dr. Stewart', text: "Good morning, gentlemen. We have convened to constructively resolve the operational friction regarding the release calendar.", translation: "Kính chào các vị. Chúng ta gặp nhau hôm nay để giải quyết một cách xây dựng những bất đồng vận hành liên quan đến lịch phát hành sản phẩm." },
        { participant: 'Mr. Campbell', text: "Thank you, Dr. Stewart. Engineering's primary concern remains code stability and comprehensive security compliance.", translation: "Cảm ơn Tiến sĩ Stewart. Mối quan tâm hàng đầu của khối Kỹ thuật vẫn là độ ổn định của mã nguồn và sự tuân thủ bảo mật toàn diện." },
        { participant: 'Ombudsman Dr. Stewart', text: "Understood. Let us establish a mutually acceptable phased deployment protocol that satisfies security while meeting commercial delivery dates.", translation: "Tôi đã hiểu. Chúng ta hãy cùng thiết lập một quy trình triển khai theo từng giai đoạn vừa đảm bảo an ninh vừa đáp ứng kịp tiến độ kinh doanh." },
        { participant: 'Mr. Campbell', text: "We concur with that compromise and are prepared to sign the harmonized SLA memorandum.", translation: "Chúng tôi hoàn toàn đồng thuận với giải pháp thỏa hiệp đó và sẵn sàng ký biên bản cam kết thống nhất." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Clearing Up a Misunderstanding After a Meeting',
      participants: [
        { name: 'Binh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Binh', role: 'Project Lead' },
        { name: 'Phong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Phong', role: 'Tech Lead' }
      ],
      lines: [
        { participant: 'Binh', text: "Hey Phong, do you have a minute for a quick coffee? I wanted to clear the air about that heated discussion during the sprint review.", translation: "Phong ơi, bạn có rảnh một lát đi cà phê không? Mình muốn trao đổi thẳng thắn để giải tỏa khúc mắc trong buổi họp sprint căng thẳng vừa rồi." },
        { participant: 'Phong', text: "Sure Binh! I appreciate you reaching out. I was a bit frustrated about the sudden scope change.", translation: "Được chứ Bình! Mình rất trân trọng việc bạn chủ động nói chuyện. Lúc nãy mình hơi khó chịu vì phạm vi dự án bị thay đổi đột ngột." },
        { participant: 'Binh', text: "I completely understand your frustration. The client requested it last night, and I should have briefed you before the meeting.", translation: "Mình hoàn toàn hiểu cảm giác của bạn. Khách hàng mới yêu cầu tối qua, đáng lẽ mình nên báo trước với bạn một tiếng trước cuộc họp." },
        { participant: 'Phong', text: "Thanks for explaining. Now that we're on the same page, let's adjust the delivery timeline together.", translation: "Cảm ơn bạn đã giải thích rõ. Giờ hiểu nhau rồi thì tụi mình cùng nhau điều chỉnh lại thời hạn bàn giao nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick 1:1 Coffee to Reset After Disagreement',
      participants: [
        { name: 'Dat', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dat', role: 'Colleague' },
        { name: 'Vinh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vinh', role: 'Colleague' }
      ],
      lines: [
        { participant: 'Dat', text: "All good between us after that meeting?", translation: "Mọi chuyện giữa tụi mình ổn hết rồi chứ sau cuộc họp đó?" },
        { participant: 'Vinh', text: "Totally good! Just work debates, no hard feelings.", translation: "Ổn áp hoàn toàn mà! Tranh luận công việc thôi chứ không có bụng dạ gì đâu." },
        { participant: 'Dat', text: "Awesome. Grab coffee downstairs?", translation: "Tuyệt quá. Xuống sảnh làm ly cà phê nhé?" },
        { participant: 'Vinh', text: "Lead the way, my treat!", translation: "Đi thôi, chầu này tui khao!" }
      ]
    }
  ],

  'pro-10': [
    {
      type: 'pair',
      school: 'business',
      title: 'Boardroom Business Case Pitch for Innovation Investment',
      participants: [
        { name: 'Board Chairman Sterling', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SterlingBoard', role: 'Chairman' },
        { name: 'Ms. Phuong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PhuongBiz', role: 'Chief Innovation Officer' }
      ],
      lines: [
        { participant: 'Ms. Phuong', text: "Distinguished board members, I present the strategic business case for our proprietary machine learning platform.", translation: "Kính thưa các thành viên Hội đồng quản trị, tôi xin trình bày đề án kinh doanh chiến lược cho nền tảng học máy độc quyền của chúng ta." },
        { participant: 'Board Chairman Sterling', text: "What is the forecasted return on investment and payback duration for this capital allocation?", translation: "Mức tỷ suất hoàn vốn dự báo và thời gian thu hồi vốn cho khoản phân bổ ngân sách này là bao lâu?" },
        { participant: 'Ms. Phuong', text: "We project a twenty-four percent internal rate of return, with capital amortization achieved within eighteen months.", translation: "Chúng tôi dự báo tỷ suất hoàn vốn nội bộ đạt 24%, với thời gian khấu hao hoàn vốn hoàn tất trong vòng 18 tháng." },
        { participant: 'Board Chairman Sterling', text: "Those financial projections are persuasive. The board formally authorizes phase one venture funding.", translation: "Các dự báo tài chính rất thuyết phục. Hội đồng quản trị chính thức phê duyệt cấp vốn giai đoạn một." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Brainstorming a Product Pitch with Teammate',
      participants: [
        { name: 'Hoang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Hoang', role: 'Product Strategist' },
        { name: 'Trang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Trang', role: 'UX Designer' }
      ],
      lines: [
        { participant: 'Hoang', text: "Trang, let's practice our pitch before we present to the department head tomorrow morning.", translation: "Trang ơi, tụi mình cùng tập dượt bài thuyết trình trước khi trình bày với trưởng phòng sáng mai đi." },
        { participant: 'Trang', text: "Good idea! How do you want to kick off the presentation?", translation: "Ý hay đó! Bạn muốn mở đầu bài thuyết trình như thế nào?" },
        { participant: 'Hoang', text: "I'll start with the user pain point: customers are abandoning their shopping carts because checkout takes too many clicks.", translation: "Mình sẽ mở màn bằng nỗi đau của người dùng: khách hàng bỏ giỏ hàng vì bước thanh toán tốn quá nhiều lượt nhấp chuột." },
        { participant: 'Trang', text: "That hooks their attention immediately! Then I'll reveal our new one-click checkout prototype.", translation: "Mở đầu như thế thu hút sự chú ý ngay lập tức! Sau đó mình sẽ giới thiệu bản demo thanh toán một chạm mới." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Fast Pitch Deck Rehearsal',
      participants: [
        { name: 'Nam', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nam', role: 'Coworker' },
        { name: 'Khoa', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Khoa', role: 'Coworker' }
      ],
      lines: [
        { participant: 'Nam', text: "Slide deck ready for tomorrow's pitch?", translation: "Bộ slide đã sẵn sàng cho bài thuyết trình ngày mai chưa?" },
        { participant: 'Khoa', text: "Polished to perfection. 10 slides, 5 mins.", translation: "Chuẩn chỉ từng chi tiết luôn. 10 slide, đúng 5 phút." },
        { participant: 'Nam', text: "Short and sharp. Investors will love it.", translation: "Ngắn gọn súc tích. Các nhà đầu tư sẽ mê tít." },
        { participant: 'Khoa', text: "Let's bring home the win!", translation: "Cùng mang chiến thắng về nhà nào!" }
      ]
    }
  ],

  'pro-11': [
    {
      type: 'pair',
      school: 'business',
      title: 'Project Steering Committee Milestone Review',
      participants: [
        { name: 'Program Director Sterling', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DirectorSterling', role: 'Program Director' },
        { name: 'Kien', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KienPM', role: 'Project Manager' }
      ],
      lines: [
        { participant: 'Kien', text: "Good morning, Director Sterling. I am presenting our critical path analysis for the ERP cloud migration.", translation: "Kính chào Giám đốc Sterling. Tôi xin trình bày bản phân tích đường găng tiến độ cho dự án chuyển đổi hệ thống ERP lên đám mây." },
        { participant: 'Program Director Sterling', text: "Welcome, Kien. Does the current schedule allow adequate contingency buffer for security penetration audits?", translation: "Chào Kien. Lịch trình hiện tại có dành đủ quỹ thời gian dự phòng cho công tác đánh giá an ninh mạng không?" },
        { participant: 'Kien', text: "Yes, sir. We incorporated a three-week testing contingency buffer prior to the global production cutover date.", translation: "Dạ có thưa Giám đốc. Chúng tôi đã tính toán dự trù ba tuần kiểm thử đệm trước ngày chính thức chuyển giao hệ thống toàn cầu." },
        { participant: 'Program Director Sterling', text: "Prudent planning. Ensure weekly risk escalation logs are transmitted to the executive steering group.", translation: "Kế hoạch rất cẩn trọng. Bạn nhớ định kỳ gửi nhật ký cảnh báo rủi ro hàng tuần tới ban chỉ đạo điều hành nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Discussing Task Deadlines on Trello Board',
      participants: [
        { name: 'Huong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Huong', role: 'Project Coordinator' },
        { name: 'Dat', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Dat', role: 'Lead Developer' }
      ],
      lines: [
        { participant: 'Huong', text: "Dat, looking at our sprint board, the payment gateway task is marked yellow. Are we still on track for Friday?", translation: "Đạt ơi, nhìn bảng công việc sprint thì thấy phần cổng thanh toán đang báo vàng. Tụi mình còn kịp hạn chót thứ Sáu không bạn?" },
        { participant: 'Dat', text: "We're slightly delayed because the third-party sandbox was down yesterday, but we'll catch up today.", translation: "Hơi chậm một chút vì hôm qua môi trường thử nghiệm của bên thứ ba bị sập, nhưng hôm nay team sẽ làm bù tiến độ." },
        { participant: 'Huong', text: "Do you need me to reassign any secondary bugs to free up your engineers?", translation: "Bạn có cần mình điều phối bớt mấy lỗi phụ cho nhóm khác làm để giải phóng nhân lực không?" },
        { participant: 'Dat', text: "That would be super helpful! If Lam can take the UI tweaks, we can focus 100% on the core gateway.", translation: "Được vậy thì tốt quá! Nếu Lam nhận sửa mấy lỗi giao diện thì nhóm mình sẽ dồn 100% sức vào cổng thanh toán." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Deadline Sanity Check',
      participants: [
        { name: 'Son', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Son', role: 'Teammate' },
        { name: 'Vy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vy', role: 'Teammate' }
      ],
      lines: [
        { participant: 'Son', text: "Hard cutoff 5 PM today, right?", translation: "Chốt cứng 5 giờ chiều nay đúng không?" },
        { participant: 'Vy', text: "Yep, deployment freeze right after.", translation: "Đúng rồi, sau đó là đóng băng code không chỉnh sửa nữa." },
        { participant: 'Son', text: "Pushing my final commits now.", translation: "Đang đẩy những dòng code cuối cùng lên đây." },
        { participant: 'Vy', text: "Let's get this baby shipped!", translation: "Cho sản phẩm lên sàn thôi nào!" }
      ]
    }
  ],

  'pro-12': [
    {
      type: 'pair',
      school: 'business',
      title: 'Executive Financial Review & Budget Allocation',
      participants: [
        { name: 'Chief Financial Officer Vance', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CFOVance', role: 'CFO' },
        { name: 'Mai', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MaiFinance', role: 'Finance Director' }
      ],
      lines: [
        { participant: 'Mai', text: "Good morning, CFO Vance. I have compiled the fiscal year operational expenditure report along with department budget variance analyses.", translation: "Kính chào Giám đốc Tài chính Vance. Tôi đã tổng hợp báo cáo chi phí vận hành năm tài chính kèm phân tích biến động ngân sách các phòng ban." },
        { participant: 'Chief Financial Officer Vance', text: "Thank you, Mai. How did our software licensing expenditures align with initial forecasts?", translation: "Cảm ơn Mai. Các khoản chi cho bản quyền phần mềm có khớp với dự báo ban đầu không?" },
        { participant: 'Mai', text: "Through enterprise volume negotiations, we secured an eight percent cost reduction across multi-seat cloud subscriptions.", translation: "Nhờ đàm phán mua số lượng lớn cho toàn doanh nghiệp, chúng ta đã tiết kiệm được 8% chi phí cho các gói thuê bao đám mây." },
        { participant: 'Chief Financial Officer Vance', text: "Outstanding fiscal discipline. Proceed to release the approved department operational budgets for Q4.", translation: "Tính kỷ luật tài chính rất xuất sắc. Bạn hãy tiến hành giải ngân ngân sách vận hành Quý 4 đã được phê duyệt nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Submitting Expense Reimbursement and Invoices',
      participants: [
        { name: 'Thanh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Thanh', role: 'Sales Lead' },
        { name: 'Accountant Loan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AccountantLoan', role: 'Accountant' }
      ],
      lines: [
        { participant: 'Thanh', text: "Hi Loan, I'm submitting my travel expense report for last week's client summit in Da Nang.", translation: "Chào chị Loan, em gửi hồ sơ thanh toán công tác phí cho hội nghị khách hàng ở Đà Nẵng tuần trước ạ." },
        { participant: 'Accountant Loan', text: "Hey Thanh! Did you attach the red value-added tax invoices for the hotel and taxi fares?", translation: "Chào Thanh! Em đã đính kèm đầy đủ hóa đơn đỏ GTGT cho tiền khách sạn với cước taxi chưa?" },
        { participant: 'Thanh', text: "Yes, all original VAT invoices and boarding passes are scanned and uploaded to the ERP portal.", translation: "Dạ rồi, toàn bộ hóa đơn VAT gốc và cuống vé máy bay em đã quét và tải lên cổng ERP rồi ạ." },
        { participant: 'Accountant Loan', text: "Looks complete! Once your department manager signs off, the reimbursement will hit your bank account on Friday.", translation: "Hồ sơ đủ rồi nè! Sếp phòng em duyệt xong là tiền thanh toán sẽ về tài khoản vào thứ Sáu nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Receipt Upload Ping',
      participants: [
        { name: 'Khang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Khang', role: 'Colleague' },
        { name: 'Duy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Duy', role: 'Colleague' }
      ],
      lines: [
        { participant: 'Khang', text: "Uploaded the lunch invoice to Notion.", translation: "Đã tải hóa đơn ăn trưa lên Notion rồi nha." },
        { participant: 'Duy', text: "Tagged finance already? Due today.", translation: "Đã tag kế toán chưa? Hạn chót hôm nay đó." },
        { participant: 'Khang', text: "Tagged Loan! She's processing it.", translation: "Tag chị Loan rồi! Chị đang xử lý." },
        { participant: 'Duy', text: "Sweet. Fast refund incoming!", translation: "Tuyệt. Sắp có tiền về ví rồi!" }
      ]
    }
  ],

  'pro-13': [
    {
      type: 'pair',
      school: 'business',
      title: 'High-Stakes Contract Negotiation with Strategic Enterprise Partner',
      participants: [
        { name: 'General Counsel Harrison', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CounselHarrison', role: 'Legal Counsel' },
        { name: 'Director An', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DirectorAn', role: 'Procurement Director' }
      ],
      lines: [
        { participant: 'Director An', text: "Good afternoon, Counsel Harrison. We have reconvened to finalize the indemnity and intellectual property clauses in the master services agreement.", translation: "Kính chào Luật sư Harrison. Chúng ta gặp lại hôm nay để chốt các điều khoản bồi thường thiệt hại và sở hữu trí tuệ trong hợp đồng dịch vụ tổng thể." },
        { participant: 'General Counsel Harrison', text: "Good afternoon, Director An. Our board insists on a reciprocal liability cap pegged at twelve months of aggregate contract value.", translation: "Chào Giám đốc An. Hội đồng quản trị bên tôi giữ nguyên quan điểm về mức giới hạn trách nhiệm tương hỗ tương đương 12 tháng tổng giá trị hợp đồng." },
        { participant: 'Director An', text: "That is acceptable provided your firm guarantees an SLA uptime of ninety-nine point nine five percent, backed by service credit penalties.", translation: "Mức đó có thể chấp nhận được với điều kiện bên ông cam kết thời gian hoạt động hệ thống đạt 99.95%, có chế tài bồi hoàn dịch vụ đi kèm." },
        { participant: 'General Counsel Harrison', text: "We accept those terms. We will execute the binding bilateral contract before end of business today.", translation: "Chúng tôi đồng thuận với các điều khoản đó. Chúng ta sẽ ký kết hợp đồng song phương trước giờ kết thúc ngày làm việc hôm nay." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Reviewing Contract Terms with Sales Partner',
      participants: [
        { name: 'Tuan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tuan', role: 'Account Exec' },
        { name: 'Linh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Linh', role: 'Partner Manager' }
      ],
      lines: [
        { participant: 'Tuan', text: "Hi Linh, the client agreed to our annual enterprise tier, but they're asking for a five percent volume discount.", translation: "Chào Linh, khách hàng đã đồng ý gói doanh nghiệp hàng năm rồi, nhưng họ đang xin chiết khấu số lượng 5%." },
        { participant: 'Linh', text: "Can we offer the five percent discount on the condition that they sign a two-year commitment instead of one?", translation: "Mình có thể giảm 5% với điều kiện họ ký cam kết hợp đồng hai năm thay vì một năm được không bạn?" },
        { participant: 'Tuan', text: "That's a smart counter-offer! It secures long-term recurring revenue for us while meeting their budget needs.", translation: "Đòn đàm phán phản hồi rất thông minh! Vừa giữ chân được doanh thu định kỳ dài hạn vừa đáp ứng nhu cầu ngân sách của họ." },
        { participant: 'Linh', text: "Exactly. Pitch that to their procurement manager and see how they respond.", translation: "Chính xác. Bạn cứ gửi đề xuất đó cho trưởng phòng mua hàng bên họ xem phản hồi thế nào nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Deal Closed Quick Ping',
      participants: [
        { name: 'Long', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Long', role: 'Sales' },
        { name: 'Son', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Son', role: 'Sales' }
      ],
      lines: [
        { participant: 'Long', text: "Client signed the contract!", translation: "Khách hàng ký hợp đồng rồi nha!" },
        { participant: 'Son', text: "Boom! What tier did they take?", translation: "Quá đỉnh! Họ chốt gói nào thế?" },
        { participant: 'Long', text: "Full Enterprise, 2-year lock-in.", translation: "Gói Enterprise cao nhất, khóa hợp đồng 2 năm." },
        { participant: 'Son', text: "Massive win for the team! Drinks tonight!", translation: "Chiến thắng vang dội cho cả team! Tối nay đi ăn mừng thôi!" }
      ]
    }
  ],

  'pro-14': [
    {
      type: 'pair',
      school: 'business',
      title: 'Executive Client Escalation and Root Cause Rectification',
      participants: [
        { name: 'Client VP Sterling', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ClientVP', role: 'Enterprise Client' },
        { name: 'Chief Customer Officer Bao', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CCOBao', role: 'CCO' }
      ],
      lines: [
        { participant: 'Client VP Sterling', text: "Good afternoon, Mr. Bao. Yesterday's payment outage disrupted our regional e-commerce processing for over ninety minutes.", translation: "Chào ông Bảo. Sự cố gián đoạn cổng thanh toán hôm qua đã làm tê liệt giao dịch thương mại điện tử khu vực của chúng tôi hơn 90 phút." },
        { participant: 'Chief Customer Officer Bao', text: "We sincerely apologize for the operational impact, Vice President Sterling. Our engineering executive team immediately initiated a tier-one incident investigation.", translation: "Chúng tôi chân thành xin lỗi vì ảnh hưởng vận hành này, thưa Phó Chủ tịch Sterling. Ban lãnh đạo kỹ thuật đã kích hoạt ngay cuộc điều tra sự cố cấp 1." },
        { participant: 'Client VP Sterling', text: "What corrective safeguards have been instituted to preclude recurrent failover vulnerabilities?", translation: "Biện pháp phòng ngừa khắc phục nào đã được triển khai để ngăn chặn lỗ hổng chuyển mạch dự phòng tái diễn?" },
        { participant: 'Chief Customer Officer Bao', text: "We deployed dual redundant database clustering with automated heartbeat failovers, backed by a comprehensive financial SLA credit.", translation: "Chúng tôi đã triển khai cụm cơ sở dữ liệu dự phòng kép với cơ chế chuyển mạch tự động, kèm theo khoản bồi hoàn tài chính cam kết chất lượng dịch vụ." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Handling a Customer Complaint with Support Lead',
      participants: [
        { name: 'Nga', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nga', role: 'Support Agent' },
        { name: 'Huy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Huy', role: 'Customer Support Lead' }
      ],
      lines: [
        { participant: 'Nga', text: "Huy, I have an escalated ticket from a premium subscriber. Their monthly analytics export failed three times.", translation: "Huy ơi, mình có một ca khiếu nại mức độ cao từ khách hàng gói VIP. Bản xuất báo cáo phân tích hàng tháng của họ bị lỗi ba lần liên tiếp." },
        { participant: 'Huy', text: "Did you check the error logs? Is it an account permission glitch or a file size limit?", translation: "Bạn đã kiểm tra nhật ký lỗi chưa? Do trục trặc phân quyền tài khoản hay vượt quá giới hạn dung lượng file thế?" },
        { participant: 'Nga', text: "Their dataset exceeded the default CSV limit. I manually generated the export and sent it directly to their email.", translation: "Dữ liệu của họ vượt quá giới hạn file CSV mặc định. Mình đã xuất file thủ công và gửi thẳng vào email cho họ rồi." },
        { participant: 'Huy', text: "Great customer care! Send them a courtesy month of free premium add-ons to make up for the inconvenience.", translation: "Xử lý chăm sóc khách hàng rất khéo! Tặng họ một tháng dùng miễn phí tiện ích mở rộng để bù đắp sự bất tiện nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Fast Escalation Resolution Ping',
      participants: [
        { name: 'Tri', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tri', role: 'Support' },
        { name: 'Linh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Linh', role: 'Support' }
      ],
      lines: [
        { participant: 'Tri', text: "Angry customer on chat line 2.", translation: "Khách đang nóng giận ở kênh chat số 2 kìa." },
        { participant: 'Linh', text: "Issue sorted? Refund issued?", translation: "Xử lý xong chưa? Đã hoàn tiền cho khách chưa?" },
        { participant: 'Tri', text: "Refund sent + 10% apology voucher. Client happy now!", translation: "Gửi hoàn tiền + mã giảm giá 10% tạ lỗi rồi. Khách vui vẻ lại rồi!" },
        { participant: 'Linh', text: "Smooth handling, high five!", translation: "Xử lý êm ru, đỉnh chóp luôn!" }
      ]
    }
  ],

  'pro-15': [
    {
      type: 'pair',
      school: 'business',
      title: 'Executive Industry Summit Networking',
      participants: [
        { name: 'Sir Arthur Mitchell', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SirArthur', role: 'Keynote Speaker' },
        { name: 'Dr. Quynh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DrQuynh', role: 'Managing Partner' }
      ],
      lines: [
        { participant: 'Dr. Quynh', text: "Good evening, Sir Arthur. I found your keynote address on sovereign artificial intelligence governance exceptionally profound.", translation: "Kính chào ngài Arthur. Tôi thấy bài phát biểu chính của ngài về quản trị trí tuệ nhân tạo quốc gia vô cùng sâu sắc." },
        { participant: 'Sir Arthur Mitchell', text: "Thank you, Dr. Quynh. Cross-border regulatory harmony is indeed the defining challenge of our era.", translation: "Cảm ơn Tiến sĩ Quỳnh. Sự hài hòa pháp lý xuyên biên giới thực sự là thách thức cốt lõi của thời đại chúng ta." },
        { participant: 'Dr. Quynh', text: "Indeed. Here is my executive credential card. Our institute would be deeply honored to co-host an academic symposium with your council.", translation: "Đúng như vậy ạ. Xin gửi ngài danh thiếp của tôi. Viện chúng tôi rất vinh dự nếu được đồng tổ chức hội thảo khoa học cùng hội đồng của ngài." },
        { participant: 'Sir Arthur Mitchell', text: "I welcome that prospect. My chief of staff will liaise with your office next week to explore collaborative frameworks.", translation: "Tôi rất hoan nghênh triển vọng này. Chánh văn phòng của tôi sẽ liên hệ với cơ quan bà vào tuần tới để tìm hiểu khuôn khổ hợp tác." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Connecting at a Tech Meetup over Drinks',
      participants: [
        { name: 'Phong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Phong', role: 'Developer' },
        { name: 'Sarah', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SarahTech', role: 'Tech Founder' }
      ],
      lines: [
        { participant: 'Phong', text: "Hi! Great lightning talk you gave earlier about building scalable serverless apps.", translation: "Chào bạn! Bài chia sẻ ngắn lúc nãy của bạn về cách xây dựng ứng dụng không máy chủ mở rộng hay quá." },
        { participant: 'Sarah', text: "Thanks so much! I'm Sarah, founder of CloudScale. What kind of stack do you work with?", translation: "Cảm ơn bạn nhiều nha! Mình là Sarah, sáng lập viên CloudScale. Bạn hay làm việc với bộ công nghệ nào?" },
        { participant: 'Phong', text: "I work primarily with React and Node.js microservices. Are you guys currently looking for contributors?", translation: "Mình chủ yếu làm với React và hệ thống microservices Node.js. Bên bạn hiện có đang tìm kiếm người đóng góp không?" },
        { participant: 'Sarah', text: "Definitely! Let's connect on LinkedIn. I can introduce you to our engineering lead for coffee next week.", translation: "Có chứ chắc chắn rồi! Tụi mình kết nối qua LinkedIn nhé. Tuần tới mình hẹn bạn với trưởng nhóm kỹ thuật bên mình đi cà phê." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Fast LinkedIn QR Scan at Conference',
      participants: [
        { name: 'Nam', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nam', role: 'Attendee' },
        { name: 'Jake', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jake', role: 'Attendee' }
      ],
      lines: [
        { participant: 'Nam', text: "Got a LinkedIn QR code handy?", translation: "Có sẵn mã QR LinkedIn ở đó không?" },
        { participant: 'Jake', text: "Pulling it up on my phone now. Scan away!", translation: "Đang mở trên điện thoại nè. Quét đi ông!" },
        { participant: 'Nam', text: "Connected! Great chatting with you.", translation: "Đã kết nối rồi nha! Trò chuyện với bạn vui lắm." },
        { participant: 'Jake', text: "Same here. Catch you on the Discord server!", translation: "Tôi cũng vậy. Gặp lại trên server Discord nhé!" }
      ]
    }
  ],

  'pro-16': [
    {
      type: 'pair',
      school: 'business',
      title: 'Executive Compensation & Promotion Discussion',
      participants: [
        { name: 'Chief Human Resources Officer Evans', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CHROEvans', role: 'CHRO' },
        { name: 'Thang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ThangDirector', role: 'Engineering Lead' }
      ],
      lines: [
        { participant: 'Chief Human Resources Officer Evans', text: "Good afternoon, Thang. The executive compensation committee has concluded its annual executive leadership review.", translation: "Kính chào Thang. Hội đồng đãi ngộ nhân sự cấp cao đã hoàn tất đợt rà soát đội ngũ lãnh đạo thường niên." },
        { participant: 'Thang', text: "Good afternoon, Director Evans. I welcome the committee's appraisal of our department's performance metrics.", translation: "Chào Giám đốc Evans. Tôi rất mong đợi được nghe đánh giá của hội đồng về các chỉ số hiệu suất phòng ban chúng tôi." },
        { participant: 'Chief Human Resources Officer Evans', text: "In recognition of your successful cloud architecture delivery, we are pleased to elevate your title to Senior Director, accompanied by a fifteen percent base adjustment and equity grant.", translation: "Ghi nhận sự thành công của bạn trong đợt chuyển đổi kiến trúc đám mây, công ty vinh dự bổ nhiệm bạn lên chức danh Giám đốc Cấp cao, kèm mức tăng lương cơ bản 15% và gói cổ phiếu thưởng." },
        { participant: 'Thang', text: "I am deeply privileged by this executive trust and remain committed to steering our engineering organization toward sustainable excellence.", translation: "Tôi vô cùng vinh hạnh trước sự tin tưởng của ban lãnh đạo và cam kết tiếp tục dẫn dắt khối kỹ thuật phát triển bền vững và xuất sắc." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Discussing Performance Review and Salary Goals',
      participants: [
        { name: 'Chau', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Chau', role: 'Senior Specialist' },
        { name: 'Vy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vy', role: 'Senior Specialist' }
      ],
      lines: [
        { participant: 'Chau', text: "Vy, how are you preparing for your mid-year review with the department head?", translation: "Vy ơi, bạn chuẩn bị cho buổi đánh giá giữa năm với sếp phòng thế nào rồi?" },
        { participant: 'Vy', text: "I put together a one-pager listing all the major accounts I closed this year, with direct revenue numbers.", translation: "Mình lập một bản tóm tắt một trang liệt kê toàn bộ các khách hàng lớn mình đã chốt năm nay, kèm số liệu doanh thu cụ thể luôn." },
        { participant: 'Chau', text: "That is the best approach. Hard data makes negotiating for a promotion or raise so much smoother.", translation: "Cách đó là chuẩn bài nhất. Có số liệu rõ ràng thì đàm phán lên chức hay tăng lương sẽ thuận lợi hơn nhiều." },
        { participant: 'Vy', text: "Exactly. Fingers crossed! Let me know how your review goes as well.", translation: "Chính xác luôn. Mong là mọi chuyện suôn sẻ! Buổi đánh giá của bạn xong nhớ kể mình nghe với nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Promotion Celebration Ping',
      participants: [
        { name: 'Duc', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Duc', role: 'Colleague' },
        { name: 'Khoa', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Khoa', role: 'Colleague' }
      ],
      lines: [
        { participant: 'Duc', text: "Heard the news! Congrats on Senior PM!", translation: "Nghe tin rồi nha! Chúc mừng lên chức Senior PM!" },
        { participant: 'Khoa', text: "Thanks man! Hard work paid off.", translation: "Cảm ơn ông bạn! Cày cuốc bấy lâu nay cũng có ngày hái quả." },
        { participant: 'Duc', text: "Big promotion means big celebration!", translation: "Lên chức to là phải ăn mừng lớn nha!" },
        { participant: 'Khoa', text: "BBQ on Friday, mark your calendar!", translation: "Thứ Sáu đi ăn thịt nướng, nhớ giữ lịch đó!" }
      ]
    }
  ],

  'pro-17': [
    {
      type: 'pair',
      school: 'business',
      title: 'Formal Annual Leave and Shift Coverage Authorization',
      participants: [
        { name: 'Director Armstrong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Armstrong', role: 'Operations Director' },
        { name: 'Hoa', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Hoa', role: 'Shift Supervisor' }
      ],
      lines: [
        { participant: 'Hoa', text: "Good morning, Director Armstrong. I am submitting my formal petition for ten business days of annual leave commencing August 1st.", translation: "Kính chào Giám đốc Armstrong. Tôi xin phép được trình đơn chính thức xin nghỉ phép thường niên mười ngày làm việc, bắt đầu từ ngày 1 tháng 8 ạ." },
        { participant: 'Director Armstrong', text: "Good morning, Hoa. Has a comprehensive operational handover plan been established for your shift supervision duties?", translation: "Chào Hoa. Một kế hoạch bàn giao vận hành toàn diện cho công tác giám sát ca trực của bạn đã được thiết lập chưa?" },
        { participant: 'Hoa', text: "Yes, sir. Assistant Supervisor Binh has formally agreed to assume shift oversight, and all emergency escalation protocols have been validated.", translation: "Dạ rồi thưa Giám đốc. Trợ lý Giám sát Bình đã chính thức đồng ý phụ trách quản lý ca, và toàn bộ quy trình ứng phó khẩn cấp đã được kiểm duyệt." },
        { participant: 'Director Armstrong', text: "Exemplary preparation. Your annual leave request is officially endorsed in the personnel registry.", translation: "Chuẩn bị rất chu đáo. Đơn xin nghỉ phép của bạn đã được chính thức phê duyệt trên cổng nhân sự." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Swapping Shifts and Overtime Support with Teammate',
      participants: [
        { name: 'Minh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Minh', role: 'Support Engineer' },
        { name: 'Son', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Son', role: 'Support Engineer' }
      ],
      lines: [
        { participant: 'Minh', text: "Hey Son, could you do me a favor and swap on-call weekend shifts with me next week? I have a family wedding to attend.", translation: "Sơn ơi, bạn giúp mình đổi ca trực cuối tuần tuần sau được không? Mình có đám cưới người thân trong gia đình." },
        { participant: 'Son', text: "Sure thing, Minh! If I take your Saturday on-call shift, could you cover my overnight shift on the 20th?", translation: "Được chứ Minh! Nếu mình trực thay bạn thứ Bảy thì ngày 20 bạn trực ca đêm giùm mình được không?" },
        { participant: 'Minh', text: "Absolutely, I'm completely free on the 20th! I'll update the rotation roster on Google Sheets right now.", translation: "Chắc chắn rồi, ngày 20 mình rảnh hoàn toàn! Để mình cập nhật lại bảng phân ca trên Google Sheets liền nhé." },
        { participant: 'Son', text: "Awesome. Have fun at the wedding!", translation: "Tuyệt vời. Đi ăn cưới vui vẻ nha bạn!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick PTO Notice on Slack',
      participants: [
        { name: 'An', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=An', role: 'Colleague' },
        { name: 'Long', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Long', role: 'Colleague' }
      ],
      lines: [
        { participant: 'An', text: "Heads up, OOO tomorrow for dentist.", translation: "Báo trước nhe, mai tui nghỉ đi khám nha khoa cả ngày." },
        { participant: 'Long', text: "Got it. Need me to cover client emails?", translation: "Ghi nhận. Có cần tui trực mail khách hàng giùm không?" },
        { participant: 'An', text: "Set auto-responder already. Urgents to you!", translation: "Cài trả lời tự động rồi. Ca nào khẩn thì nhờ ông ngó giùm!" },
        { participant: 'Long', text: "No stress, enjoy the day off!", translation: "Yên tâm đi, nghỉ ngơi thoải mái nhe!" }
      ]
    }
  ],

  'pro-18': [
    {
      type: 'pair',
      school: 'business',
      title: 'Executive Resignation & Comprehensive Handover Protocol',
      participants: [
        { name: 'Senior VP Henderson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=VP事Henderson', role: 'Senior VP' },
        { name: 'Khang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KhangExit', role: 'Director' }
      ],
      lines: [
        { participant: 'Khang', text: "Good afternoon, Senior VP Henderson. It is with profound appreciation for our five-year journey that I tender my formal letter of resignation.", translation: "Kính chào Phó Chủ tịch Cấp cao Henderson. Với lòng biết ơn sâu sắc sau chặng đường năm năm gắn bó, tôi xin phép được gửi bức thư từ nhiệm chính thức." },
        { participant: 'Senior VP Henderson', text: "We receive this with sincere regret, Khang, but we understand you are pursuing an executive venture. How does your transition roadmap look?", translation: "Ban lãnh đạo đón nhận tin này với đầy sự tiếc nuối, Khang à, nhưng chúng tôi hoàn toàn thấu hiểu bạn đang theo đuổi một cơ hội mới. Kế hoạch chuyển giao của bạn thế nào?" },
        { participant: 'Khang', text: "I have prepared a six-week transitional protocol, documenting all client covenants and mentoring Deputy Director Mai to assume immediate leadership.", translation: "Tôi đã lập lộ trình chuyển giao trong sáu tuần, văn bản hóa toàn bộ các cam kết khách hàng và kèm cặp Phó Giám đốc Mai để tiếp quản ngay công việc." },
        { participant: 'Senior VP Henderson', text: "Your professional integrity is exemplary to the very end. The company wishes you every triumph in your future leadership endeavours.", translation: "Tác phong chuyên nghiệp của bạn rất mẫu mực đến tận những ngày cuối cùng. Công ty chúc bạn gặt hái mọi thành công vang dội trên con đường lãnh đạo sắp tới." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Handing Over Project Credentials to Colleague',
      participants: [
        { name: 'Bao', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Bao', role: 'Outgoing Dev' },
        { name: 'Quoc', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Quoc', role: 'Incoming Dev' }
      ],
      lines: [
        { participant: 'Bao', text: "Quoc, let's spend an hour walking through the server architecture and repository access before my last day on Friday.", translation: "Quốc ơi, tụi mình dành một tiếng cùng đi qua sơ đồ kiến trúc máy chủ và quyền truy cập kho code trước ngày làm việc cuối của mình vào thứ Sáu nhé." },
        { participant: 'Quoc', text: "Definitely, Bao. We're really going to miss having you on the engineering team! Everything is so well-documented in Notion.", translation: "Chắc chắn rồi Bảo. Team kỹ thuật sẽ nhớ bạn nhiều lắm đó! Mọi thứ bạn lưu lại trên Notion đều cực kỳ rõ ràng và chi tiết." },
        { participant: 'Bao', text: "Thanks! I transferred all admin privileges to your corporate account, and I'll always be available on LinkedIn if anything pops up.", translation: "Cảm ơn bạn! Mình đã chuyển toàn bộ quyền quản trị sang tài khoản của bạn rồi, và có gì cần hỏi cứ nhắn qua LinkedIn cho mình bất cứ lúc nào nhé." },
        { participant: 'Quoc', text: "Appreciate that so much. Let's make sure we stay in touch after your move!", translation: "Trân quý điều đó lắm. Nhất định tụi mình phải giữ liên lạc sau khi bạn chuyển sang nơi mới nha!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Last Day Farewell Ping',
      participants: [
        { name: 'Vy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Vy', role: 'Colleague' },
        { name: 'Nam', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Nam', role: 'Colleague' }
      ],
      lines: [
        { participant: 'Vy', text: "Can't believe today is your last day!", translation: "Không tin nổi hôm nay là ngày làm việc cuối của ông rồi!" },
        { participant: 'Nam', text: "Bittersweet! Handover's 100% complete though.", translation: "Vừa vui vừa bồi hồi! Bàn giao xong 100% hết rồi nè." },
        { participant: 'Vy', text: "Farewell drinks at 6 PM, don't sneak out!", translation: "6 giờ chiều đi uống chia tay đó, cấm trốn về sớm nhen!" },
        { participant: 'Nam', text: "Wouldn't miss it for the world!", translation: "Có các vàng cũng không dám trốn đâu!" }
      ]
    }
  ],

  'pro-19': [
    {
      type: 'pair',
      school: 'business',
      title: 'Annual Corporate Gala Keynote and Milestone Toast',
      participants: [
        { name: 'Chief Executive Officer Sterling', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=CEOExecutive', role: 'CEO' },
        { name: 'Chairwoman Elizabeth', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Chairwoman', role: 'Board Chair' }
      ],
      lines: [
        { participant: 'Chief Executive Officer Sterling', text: "Distinguished guests, shareholders, and esteemed team members: welcome to our tenth annual corporate gala celebration.", translation: "Kính thưa quý vị quan khách, quý cổ đông và toàn thể các cộng sự ưu tú: chào mừng quý vị đến với đêm tiệc kỷ niệm mười năm thành lập công ty." },
        { participant: 'Chairwoman Elizabeth', text: "This milestone year reflects the relentless dedication, innovation, and resilience of our collective workforce across fifteen countries.", translation: "Năm kỷ niệm bước ngoặt này phản ánh sự cống hiến không ngừng nghỉ, tinh thần đổi mới và sự bền bỉ của tập thể cán bộ nhân viên tại 15 quốc gia." },
        { participant: 'Chief Executive Officer Sterling', text: "Let us raise our glasses in tribute to our historic achievements, our enduring client partnerships, and a luminous corporate future.", translation: "Xin mời tất cả chúng ta cùng nâng ly chúc mừng những thành tựu mang tính lịch sử, mối quan hệ đối tác bền chặt và một tương lai doanh nghiệp rực rỡ." },
        { participant: 'Chairwoman Elizabeth', text: "To our continuing excellence and shared prosperity: cheers!", translation: "Chúc cho sự xuất sắc không ngừng và sự thịnh vượng chung của tất cả chúng ta: xin chúc mừng!" }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Planning a Colleague’s Surprise Birthday in the Office',
      participants: [
        { name: 'Hien', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Hien', role: 'Colleague' },
        { name: 'Tung', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tung', role: 'Colleague' }
      ],
      lines: [
        { participant: 'Hien', text: "Tung, remember that tomorrow is Lan's birthday! Did you order the matcha cake from the bakery?", translation: "Tùng ơi, nhớ là ngày mai sinh nhật Lan nha! Bạn đã đặt bánh kem vị matcha ở tiệm bánh chưa?" },
        { participant: 'Tung', text: "Ordered and confirmed! It'll be delivered to the reception desk at 3 PM sharp.", translation: "Đã đặt và xác nhận rồi! Tiệm sẽ giao tới quầy lễ tân đúng 3 giờ chiều." },
        { participant: 'Hien', text: "Awesome! I bought the birthday card and got everyone on the floor to secretly sign it.", translation: "Tuyệt quá! Mình đã mua thiệp sinh nhật và cho mọi người cả tầng ký tên bí mật hết rồi." },
        { participant: 'Tung', text: "Let's gather the team in the pantry at 3:15 for a surprise celebration when she comes back from her meeting.", translation: "Tụi mình tập trung mọi người ở phòng ăn lúc 3h15 để tạo bất ngờ khi cô ấy đi họp về nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Office Party Cake Call',
      participants: [
        { name: 'Binh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Binh', role: 'Coworker' },
        { name: 'Khang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Khang', role: 'Coworker' }
      ],
      lines: [
        { participant: 'Binh', text: "Free cake in the pantry right now!", translation: "Có bánh kem miễn phí trong phòng ăn kìa!" },
        { participant: 'Khang', text: "Whose birthday? Flying over now!", translation: "Sinh nhật ai thế? Bay qua liền đây!" },
        { participant: 'Binh', text: "Lan's birthday! Chocolate and fruit.", translation: "Sinh nhật Lan! Vị sô-cô-la với trái cây." },
        { participant: 'Khang', text: "Save me a big slice!", translation: "Nhớ giữ cho tui miếng bự nha!" }
      ]
    }
  ],

  'pro-20': [
    {
      type: 'pair',
      school: 'business',
      title: 'Executive Leadership Mentorship & 5-Year Vision Consultation',
      participants: [
        { name: 'Managing Partner Dr. Bradley', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DrBradley', role: 'Managing Partner' },
        { name: 'Diep', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DiepVP', role: 'VP Candidate' }
      ],
      lines: [
        { participant: 'Diep', text: "Good morning, Dr. Bradley. As I refine my five-year career trajectory, I would deeply value your executive perspective on enterprise leadership succession.", translation: "Kính chào Tiến sĩ Bradley. Khi đang hoàn thiện lộ trình sự nghiệp năm năm tới, tôi rất mong nhận được góc nhìn lãnh đạo cấp cao của ngài về quy hoạch đội ngũ kế thừa." },
        { participant: 'Managing Partner Dr. Bradley', text: "Welcome, Diep. True executive impact transcends operational mastery; it hinges on cultivating strategic vision and organizational empathy.", translation: "Chào Diep. Tầm ảnh hưởng của một nhà lãnh đạo thực thụ vượt lên trên sự am hiểu vận hành thuần túy; nó bắt nguồn từ việc nuôi dưỡng tầm nhìn chiến lược và sự thấu cảm tổ chức." },
        { participant: 'Diep', text: "I have enrolled in an executive leadership program at INSEAD to sharpen my global governance and venture capital acumen.", translation: "Tôi đã đăng ký tham gia chương trình đào tạo lãnh đạo cấp cao tại INSEAD để mài giũa năng lực quản trị toàn cầu và tư duy đầu tư mạo hiểm." },
        { participant: 'Managing Partner Dr. Bradley', text: "That is precisely the calibre of continuous upskilling required for our forthcoming managing board appointment.", translation: "Đó chính xác là tầm vóc của việc nâng cao năng lực liên tục mà vị trí hội đồng điều hành sắp tới đòi hỏi." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Discussing Career Shift and Learning AI Skills',
      participants: [
        { name: 'Kien', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kien', role: 'Colleague' },
        { name: 'Tram', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tram', role: 'Colleague' }
      ],
      lines: [
        { participant: 'Kien', text: "Tram, I noticed you've been taking evening courses in prompt engineering and machine learning. Are you planning a career shift?", translation: "Trâm ơi, mình thấy bạn đang theo học mấy khóa buổi tối về kỹ thuật câu lệnh AI với học máy. Bạn định chuyển hướng sự nghiệp hả?" },
        { participant: 'Tram', text: "Not a total shift, but I want to upskill so I can lead AI-driven product features in our department.", translation: "Không phải rẽ ngang hoàn toàn đâu, mà mình muốn nâng cấp kỹ năng để có thể dẫn dắt các tính năng sản phẩm ứng dụng AI trong phòng ban mình." },
        { participant: 'Kien', text: "That's so forward-thinking! Stepping out of your comfort zone always opens up amazing opportunities.", translation: "Tư duy đón đầu tương lai quá! Dám bước ra khỏi vùng an toàn lúc nào cũng mở ra những cơ hội tuyệt vời." },
        { participant: 'Tram', text: "Thanks, Kien! Having a clear three-year plan makes the late-night studying totally worth it.", translation: "Cảm ơn Kiên nha! Có một kế hoạch ba năm rõ ràng làm cho những đêm thức khuya học bài thấy vô cùng xứng đáng." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Fast Study Goal Check-in',
      participants: [
        { name: 'Minh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Minh', role: 'Friend' },
        { name: 'Phong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Phong', role: 'Friend' }
      ],
      lines: [
        { participant: 'Minh', text: "Passed your AWS cloud certification?", translation: "Đậu chứng chỉ điện toán đám mây AWS chưa?" },
        { participant: 'Phong', text: "Passed with 920 points yesterday!", translation: "Đậu rồi, 920 điểm hôm qua luôn!" },
        { participant: 'Minh', text: "Huge level up! Senior promotion in the bag.", translation: "Nâng cấp trình độ quá xịn! Chắc chắn cầm chắc suất lên Senior rồi." },
        { participant: 'Phong', text: "Coffee's on me to celebrate!", translation: "Để tui khao chầu cà phê ăn mừng nha!" }
      ]
    }
  ]
};
