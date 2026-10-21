// Distinct 3-tier Dialogues (Business/Formal, Casual, Super Casual) for Lessons pro-01 to pro-20
// Guarantees 100% thematic accuracy across all 20 professional workplace topics with zero overlapping scenarios.

import { Dialogue } from './comm-students-dialogues';

export const PROFESSIONALS_DIALOGUES: Record<string, Dialogue[]> = {
  'pro-01': [
    {
      type: 'pair',
      school: 'business',
      title: 'Formal Executive Onboarding Introduction',
      participants: [
        { name: 'Director Vance', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DirectorVance', role: 'Managing Director' },
        { name: 'Khang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KhangPro', role: 'New Senior Manager' }
      ],
      lines: [
        { participant: 'Khang', text: "Good morning, Director Vance. I am honored to join the global product division today as the new Technical Lead.", translation: "Kính chào Giám đốc Vance. Tôi rất vinh dự được gia nhập khối sản phẩm toàn cầu hôm nay với tư cách Trưởng nhóm Kỹ thuật mới." },
        { participant: 'Director Vance', text: "Welcome aboard, Khang. We are confident your background in enterprise software architecture will drive our digital transformation roadmap.", translation: "Chào mừng anh gia nhập công ty, Khang. Ban giám đốc tin tưởng bề dày kinh nghiệm kiến trúc phần mềm doanh nghiệp của anh sẽ thúc đẩy lộ trình chuyển đổi số của chúng ta." },
        { participant: 'Khang', text: "Thank you, sir. I look forward to collaborating closely with our cross-functional engineering heads and stakeholders.", translation: "Xin cảm ơn Giám đốc. Tôi rất mong đợi được phối hợp chặt chẽ cùng các trưởng bộ phận kỹ thuật liên phòng ban và các bên liên quan." },
        { participant: 'Director Vance', text: "Excellent. Please join our department heads' standup at ten for your formal introduction to the executive committee.", translation: "Rất tốt. Xin mời anh tham dự buổi họp nhanh của các trưởng bộ phận lúc 10 giờ để chính thức ra mắt ban điều hành." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Coffee Machine Welcome with Department Colleague',
      participants: [
        { name: 'Linh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LinhPro', role: 'Colleague' },
        { name: 'Tuan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TuanPro', role: 'New Hire' }
      ],
      lines: [
        { participant: 'Linh', text: "Hi there! You must be Tuan, the new UX designer who joined our marketing floor today?", translation: "Chào bạn! Bạn chắc hẳn là Tuấn, nhà thiết kế trải nghiệm người dùng mới gia nhập tầng marketing hôm nay đúng không?" },
        { participant: 'Tuan', text: "Hi Linh! Yes, that's me. Today is my official onboarding day, trying to find my way around the office!", translation: "Chào Linh! Đúng là mình rồi. Hôm nay là ngày đầu tiên mình nhận việc, đang làm quen với đường đi lối lại trong văn phòng đây!" },
        { participant: 'Linh', text: "Welcome to the squad! The coffee machine here makes amazing espresso. Let me know if you need help with printer setup or Slack channels.", translation: "Chào mừng bạn đến với nhóm nha! Máy pha cà phê ở đây pha espresso ngon đỉnh chóp luôn. Cần hỗ trợ cài máy in hay tìm kênh Slack thì cứ ới mình nhé." },
        { participant: 'Tuan', text: "That's so thoughtful of you, thanks a lot! I'll definitely take you up on that.", translation: "Bạn chu đáo quá, cảm ơn bạn rất nhiều nhé! Chắc chắn mình sẽ nhờ bạn giúp đỡ rồi." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Slack DM Onboarding Welcome',
      participants: [
        { name: 'Nam', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NamSlack', role: 'Teammate' },
        { name: 'Duc', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DucSlack', role: 'New Hire' }
      ],
      lines: [
        { participant: 'Nam', text: "Welcome to the squad bro! Sitting right across desk 4B.", translation: "Chào mừng người anh em gia nhập nhóm nha! Tớ ngồi ngay đối diện bàn 4B nè." },
        { participant: 'Duc', text: "Thanks Nam! Just setting up my laptop credentials.", translation: "Cảm ơn Nam nhé! Tớ đang cài đặt tài khoản máy tính xách tay đây." },
        { participant: 'Nam', text: "Grab lunch together at 12? Local pho joint?", translation: "Trưa 12 giờ đi ăn chung nhé? Quán phở gần công ty nha?" },
        { participant: 'Duc', text: "Count me in! See you then.", translation: "Chắc chắn rồi! Hẹn gặp lúc đó nhé." }
      ]
    }
  ],

  'pro-02': [
    {
      type: 'pair',
      school: 'business',
      title: 'Morning Executive Briefing Between Department Heads',
      participants: [
        { name: 'Director Sterling', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SterlingExec', role: 'Operations Director' },
        { name: 'Manager Phuong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PhuongExec', role: 'Finance Head' }
      ],
      lines: [
        { participant: 'Director Sterling', text: "Good morning, Phuong. I trust your weekend was restful. Do we have the consolidated Q3 operating figures prepared?", translation: "Chào buổi sáng, Phương. Hy vọng cuối tuần của chị thật thư thái. Khối tài chính đã chuẩn bị xong số liệu vận hành hợp nhất quý 3 chưa?" },
        { participant: 'Manager Phuong', text: "Good morning, Director. Yes, our variance audits are finalized, showing a four-percent margin expansion over budget.", translation: "Chào Giám đốc. Dạ rồi ạ, các phân tích chênh lệch ngân sách đã hoàn tất, ghi nhận biên lợi nhuận tăng 4% so với kế hoạch ban đầu." },
        { participant: 'Director Sterling', text: "Commendable diligence. Please circulate the briefing summary to executive committee members prior to noon.", translation: "Sự chuẩn bị rất đáng khen. Nhờ chị chuyển bản tóm tắt báo cáo cho các thành viên ban điều hành trước 12 giờ trưa nay nhé." },
        { participant: 'Manager Phuong', text: "Certainly. I will ensure all department heads receive the encrypted dossier promptly.", translation: "Dạ chắc chắn rồi ạ. Tôi sẽ đảm bảo tất cả các trưởng bộ phận nhận được tài liệu bảo mật đúng giờ." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Pantry Small Talk and Borrowing a Charger',
      participants: [
        { name: 'Mai', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MaiPantry', role: 'Colleague' },
        { name: 'Hoang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HoangPantry', role: 'Colleague' }
      ],
      lines: [
        { participant: 'Mai', text: "Morning Hoang! Did you catch that dramatic football match last night?", translation: "Chào buổi sáng Hoàng! Tối qua bạn có theo dõi trận bóng đá kịch tính không?" },
        { participant: 'Hoang', text: "I did! Kept me up until midnight. By the way Mai, do you happen to have a spare Type-C laptop charger? Mine is at home.", translation: "Có chứ! Coi đến nửa đêm mới ngủ được á. Nhân tiện Mai ơi, bạn có dư củ sạc laptop Type-C không? Mình để quên ở nhà rồi." },
        { participant: 'Mai', text: "I've got one in my desk drawer! You can borrow it for the whole afternoon.", translation: "Mình có một cái trong ngăn kéo bàn làm việc nè! Bạn cứ lấy dùng cả buổi chiều luôn đi." },
        { participant: 'Hoang', text: "You're an absolute lifesaver! I'll buy you a matcha latte after our team sync.", translation: "Cứu tinh của đời mình rồi! Xong buổi họp nhóm mình mời bạn ly matcha latte nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Desk Ping Across Cubicles',
      participants: [
        { name: 'Binh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BinhDesk', role: 'Coworker' },
        { name: 'Son', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SonDesk', role: 'Coworker' }
      ],
      lines: [
        { participant: 'Binh', text: "Heading down for coffee run. Want anything?", translation: "Đang xuống sảnh mua cà phê nè. Có dặn mua gì không?" },
        { participant: 'Son', text: "Iced Americano, no sugar please!", translation: "Cho ly Americano đá, không đường nha bồ!" },
        { participant: 'Binh', text: "Cash or transfer?", translation: "Tiền mặt hay chuyển khoản nè?" },
        { participant: 'Son', text: "Transferred via banking app just now! Thanks.", translation: "Vừa chuyển khoản qua app ngân hàng xong rồi đó! Cảm ơn nha." }
      ]
    }
  ],

  'pro-03': [
    {
      type: 'pair',
      school: 'business',
      title: 'Opening and Moderating a Regional Strategy Meeting',
      participants: [
        { name: 'Director Henderson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HendersonMod', role: 'Chairman' },
        { name: 'Khang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KhangMod', role: 'Regional Lead' }
      ],
      lines: [
        { participant: 'Director Henderson', text: "Good morning, colleagues. Let us call this quarterly strategic governance session to order. Khang, please present item one on market expansion.", translation: "Chào buổi sáng các đồng nghiệp. Tôi xin phép khai mạc phiên họp quản trị chiến lược quý này. Xin mời anh Khang trình bày nội dung thứ nhất về mở rộng thị trường." },
        { participant: 'Khang', text: "Thank you, Mr. Chairman. Our regional analysis indicates strong adoption in Southeast Asian enterprise hubs, justifying localized cloud deployment.", translation: "Cảm ơn Chủ tọa. Phân tích khu vực của chúng tôi chỉ ra mức độ đón nhận rất lớn tại các trung tâm doanh nghiệp Đông Nam Á, củng cố việc triển khai hạ tầng đám mây nội địa hóa." },
        { participant: 'Director Henderson', text: "Are there any dissenting stakeholder considerations before we move toward a formal committee vote?", translation: "Có quý vị nào trong ban các bên liên quan có ý kiến phản biện nào trước khi chúng ta tiến hành biểu quyết chính thức không?" },
        { participant: 'Khang', text: "All technical risks and financial parameters have been vetted and documented in annex B for committee sign-off.", translation: "Toàn bộ rủi ro kỹ thuật và tham số tài chính đều đã được thẩm định và ghi chú chi tiết tại phụ lục B để hội đồng thông qua." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Scheduling a Cross-Team Sync',
      participants: [
        { name: 'Lan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LanSync', role: 'Project Manager' },
        { name: 'Duc', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DucSync', role: 'Tech Lead' }
      ],
      lines: [
        { participant: 'Lan', text: "Hey Duc, could we set up a quick thirty-minute sync tomorrow to align on the mobile release checklist?", translation: "Đức ơi, ngày mai tụi mình hẹn họp nhanh 30 phút để thống nhất danh mục kiểm tra bản phát hành di động được không?" },
        { participant: 'Duc', text: "Sure Lan! Tomorrow afternoon works best for me. Would 2:30 PM clash with your schedule?", translation: "Được chứ Lan! Chiều mai là tiện nhất cho mình nè. Tầm 2 giờ rưỡi có bị trùng lịch với bạn không?" },
        { participant: 'Lan', text: "2:30 PM is wide open. I'll send out a Google Calendar invite with the agenda bullet points.", translation: "2 giờ rưỡi chiều mình trống lịch hoàn toàn luôn. Mình sẽ gửi lời mời Google Calendar kèm các gạch đầu dòng nội dung nhé." },
        { participant: 'Duc', text: "Sounds great. I'll have the QA bug log ready for our discussion.", translation: "Tuyệt vời. Mình sẽ chuẩn bị sẵn danh sách lỗi từ đội kiểm thử để cùng bàn luận." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Meeting Reschedule Ping',
      participants: [
        { name: 'Tri', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TriResched', role: 'Colleague' },
        { name: 'Huy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HuyResched', role: 'Colleague' }
      ],
      lines: [
        { participant: 'Tri', text: "Can we push our 3 PM 1-on-1 back by 30 mins? Client call running late.", translation: "Dời lịch họp 1-1 lúc 3 giờ chiều lùi lại 30 phút được không? Đang bị cuốn vào cuộc gọi với khách." },
        { participant: 'Huy', text: "3:30 PM works fine for me. Take your time!", translation: "3 rưỡi chiều hoàn toàn ổn nha. Cứ thong thả giải quyết khách hàng đi!" },
        { participant: 'Tri', text: "Updated the calendar invite. Thanks bro!", translation: "Đã cập nhật lại lịch họp rồi. Cảm ơn ông nhé!" },
        { participant: 'Huy', text: "See you at 3:30 in meeting room 2.", translation: "Hẹn gặp 3 rưỡi ở phòng họp số 2." }
      ]
    }
  ],

  'pro-04': [
    {
      type: 'pair',
      school: 'business',
      title: 'Formal Executive Written Request & Follow-up via Email',
      participants: [
        { name: 'Director Bennett', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BennettMail', role: 'Corporate Director' },
        { name: 'Manager Linh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LinhMail', role: 'Account Manager' }
      ],
      lines: [
        { participant: 'Manager Linh', text: "Good morning, Director Bennett. I have just transmitted our comprehensive strategic proposal via encrypted executive email for your formal review.", translation: "Kính chào Giám đốc Bennett. Tôi vừa chuyển tiếp bản đề xuất chiến lược toàn diện qua email điều hành bảo mật để xin ý kiến chỉ đạo chính thức của Giám đốc ạ." },
        { participant: 'Director Bennett', text: "Thank you, Linh. I appreciate your structured email format and concise executive summary in the opening paragraph.", translation: "Cảm ơn cô Linh. Tôi đánh giá cao cách trình bày email rất mạch lạc và phần tóm tắt điều hành ngắn gọn ngay đoạn mở đầu." },
        { participant: 'Manager Linh', text: "Please advise if any supplementary appendices or financial modeling sheets are required prior to Friday's board session.", translation: "Kính xin Giám đốc cho biết nếu cần bổ sung thêm phụ lục hoặc bảng mô hình tài chính nào trước phiên họp hội đồng thứ Sáu tới." },
        { participant: 'Director Bennett', text: "The documentation appears complete. I shall reply with my formal sign-off before the close of business today.", translation: "Hồ sơ như vậy là rất đầy đủ. Tôi sẽ phản hồi email phê duyệt chính thức trước giờ tan sở hôm nay." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Tagging Colleague on Slack for Document Review',
      participants: [
        { name: 'Quang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=QuangSlack', role: 'Engineer' },
        { name: 'Yen', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=YenSlack', role: 'Product Lead' }
      ],
      lines: [
        { participant: 'Quang', text: "Hi Yen! I tagged you on Slack with the link to our updated product specification document.", translation: "Chào Yến! Mình vừa tag bạn trên Slack kèm link tài liệu đặc tả sản phẩm cập nhật rồi đó." },
        { participant: 'Yen', text: "Thanks Quang! Do you need my feedback on the whole document or just the API integration section?", translation: "Cảm ơn Quang nha! Bạn cần mình góp ý toàn bộ tài liệu hay chỉ cần xem kỹ phần tích hợp API thôi?" },
        { participant: 'Quang', text: "Just sections two and four would be amazing! Whenever you have ten minutes this afternoon.", translation: "Chỉ cần mục 2 với mục 4 là tuyệt vời lắm rồi! Chiều nay lúc nào bạn rảnh tầm mười phút xem qua giùm mình nhé." },
        { participant: 'Yen', text: "No problem at all. I'll drop my comments directly into the Google Doc by 4 PM.", translation: "Không vấn đề gì cả. Tầm 4 giờ chiều mình sẽ để lại bình luận trực tiếp trong Google Doc nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Slack DM / Teams Ping on Shared Document',
      participants: [
        { name: 'Son', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SonDM', role: 'Colleague' },
        { name: 'Duc', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DucDM', role: 'Colleague' }
      ],
      lines: [
        { participant: 'Son', text: "Pinged you on Slack, check the PR link!", translation: "Vừa ping ông trên Slack, check link duyệt code giùm nhé!" },
        { participant: 'Duc', text: "Looking at it now. Code looks super clean.", translation: "Đang mở xem đây. Code viết nhìn sạch sẽ gọn gàng lắm." },
        { participant: 'Son', text: "Hit approve if no blockers!", translation: "Không vướng gì thì bấm duyệt nút Approve giùm tớ nha!" },
        { participant: 'Duc', text: "Approved and merged! Great work.", translation: "Đã duyệt và gộp nhánh thành công! Làm tốt lắm." }
      ]
    }
  ],

  'pro-05': [
    {
      type: 'pair',
      school: 'business',
      title: 'Quarterly Milestone Status Report & Risk Mitigation to Executive Director',
      participants: [
        { name: 'Director Sterling', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SterlingExecDir', role: 'Executive Director' },
        { name: 'Manager Minh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MinhManager', role: 'Operations Manager' }
      ],
      lines: [
        { participant: 'Manager Minh', text: "Good afternoon, Director Sterling. I am presenting our quarterly progress deliverable and managing up on operational risk factors.", translation: "Kính chào Giám đốc Sterling. Tôi xin phép báo cáo tiến độ bàn giao quý và báo cáo quản lý cấp trên về các yếu tố rủi ro vận hành ạ." },
        { participant: 'Director Sterling', text: "Proceed, Minh. How has the team addressed the recent supply chain delivery bottleneck?", translation: "Anh trình bày đi Minh. Đội ngũ đã giải quyết nút thắt giao hàng của chuỗi cung ứng vừa qua như thế nào?" },
        { participant: 'Manager Minh', text: "We proactively onboarded two localized secondary suppliers, successfully mitigating potential shipment delays by two weeks.", translation: "Dạ chúng tôi đã chủ động kết nối hai nhà cung ứng dự phòng nội địa, giảm thiểu thành công nguy cơ chậm đơn hàng được hai tuần." },
        { participant: 'Director Sterling', text: "Prudent risk mitigation and decisive leadership. Your contingency protocol is officially endorsed.", translation: "Kiểm soát rủi ro rất thận trọng và chỉ đạo quyết đoán. Phương án dự phòng của anh chính thức được ban giám đốc phê chuẩn." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Weekly Sprint Progress Update with Team Manager',
      participants: [
        { name: 'Tuan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TuanSprint', role: 'Engineer' },
        { name: 'Lan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LanSprintLead', role: 'Engineering Lead' }
      ],
      lines: [
        { participant: 'Tuan', text: "Hi Lan! Here is our quick progress report for sprint four: all front-end tickets are ninety percent finished.", translation: "Chào Lan! Đây là báo cáo tiến độ nhanh cho sprint số 4: toàn bộ đầu việc giao diện đã hoàn thành 90% rồi nhé." },
        { participant: 'Lan', text: "Great work Tuan! Are there any blockers or dependencies from the backend team holding you up?", translation: "Làm tốt lắm Tuấn! Có điểm nghẽn hay đầu mối phụ thuộc nào từ đội backend làm bạn bị vướng không?" },
        { participant: 'Tuan', text: "Just waiting on the authentication API staging endpoint. Once that's live tomorrow morning, we're ready for QA testing.", translation: "Chỉ đang đợi cổng thử nghiệm API xác thực thôi. Sáng mai cổng đó chạy là tụi mình sẵn sàng chuyển qua khâu kiểm thử chất lượng." },
        { participant: 'Lan', text: "I'll follow up with the backend lead today so you get that endpoint right on time.", translation: "Hôm nay mình sẽ đốc thúc trưởng nhóm backend để bạn có cổng thử nghiệm đúng hạn nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Standup Progress Ping to Lead',
      participants: [
        { name: 'Khoa', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KhoaStandup', role: 'Dev' },
        { name: 'Bao', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BaoStandup', role: 'Team Lead' }
      ],
      lines: [
        { participant: 'Khoa', text: "Database migration done! No downtime occurred.", translation: "Chuyển đổi cơ sở dữ liệu xong xuôi rồi! Không bị gián đoạn hệ thống phút nào." },
        { participant: 'Bao', text: "Legendary! Any residual memory leaks?", translation: "Đỉnh quá ông ơi! Có bị rò rỉ bộ nhớ phát sinh nào không?" },
        { participant: 'Khoa', text: "Monitoring graphs are totally stable.", translation: "Biểu đồ theo dõi đang chạy ổn định tuyệt đối luôn." },
        { participant: 'Bao', text: "Awesome. Log it in the sprint ticket and take a break!", translation: "Tuyệt vời. Cập nhật vào thẻ sprint rồi nghỉ ngơi xíu đi nha!" }
      ]
    }
  ],

  'pro-06': [
    {
      type: 'pair',
      school: 'business',
      title: 'Cross-Functional Task Alignment & Resource Delegation Across Departments',
      participants: [
        { name: 'Vice President Vance', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=VanceVP', role: 'VP Operations' },
        { name: 'Director Mai', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MaiDir', role: 'Engineering Director' }
      ],
      lines: [
        { participant: 'Director Mai', text: "Good afternoon, Vice President Vance. We have convened this cross-department summit to align project deliverables between product, marketing, and engineering.", translation: "Kính chào Phó Chủ tịch Vance. Chúng tôi triệu tập phiên họp liên ban này để thống nhất các đầu việc bàn giao giữa khối sản phẩm, marketing và kỹ thuật ạ." },
        { participant: 'Vice President Vance', text: "Cross-functional alignment is our highest priority. How are resource dependencies distributed across the upcoming quarter?", translation: "Sự phối hợp liên phòng ban là ưu tiên hàng đầu. Sự phụ thuộc nguồn lực được phân bổ thế nào trong quý tới?" },
        { participant: 'Director Mai', text: "Engineering delegates dedicated squad bandwidth for marketing integration, with weekly synchronization checkpoints.", translation: "Dạ khối kỹ thuật đã phân bổ riêng thời gian làm việc của nhóm phụ trách để tích hợp cho marketing, kèm các buổi họp đồng bộ hằng tuần ạ." },
        { participant: 'Vice President Vance', text: "A well-structured operational framework. I authorize the cross-department resource allocation immediately.", translation: "Một khung vận hành rất bài bản. Tôi chính thức phê duyệt phân bổ nguồn lực liên phòng ban này ngay lập tức." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Coordinating Feature Deliverables Between Design & Engineering Teams',
      participants: [
        { name: 'Quang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=QuangDesign', role: 'UI Designer' },
        { name: 'Thang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=ThangDev', role: 'Frontend Lead' }
      ],
      lines: [
        { participant: 'Quang', text: "Thang, our design squad just finalized the Figma component library for the checkout redesign.", translation: "Thắng ơi, nhóm thiết kế vừa chốt xong bộ thư viện thành phần trên Figma cho giao diện thanh toán mới rồi đó." },
        { participant: 'Thang', text: "Awesome! Are the responsive mobile mockups and dark mode tokens ready for our developers?", translation: "Tuyệt quá! Bản thiết kế tương thích di động với mã màu chế độ tối đã sẵn sàng cho lập trình viên chưa bạn?" },
        { participant: 'Quang', text: "Yes, everything is documented with exact padding specs and CSS variables. Let's do a handoff walk-through.", translation: "Đầy đủ hết rồi nha, có chú thích khoảng cách chi tiết và biến CSS luôn. Tụi mình cùng lướt qua một lượt bàn giao nhé." },
        { participant: 'Thang', text: "Perfect. Having design and dev in lockstep makes our sprint delivery so much smoother!", translation: "Quá chuẩn. Thiết kế và kỹ thuật ăn ý thế này thì tiến độ sprint mượt mà hơn nhiều!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Fast Cross-Team Handoff Ping',
      participants: [
        { name: 'Son', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SonHandoff', role: 'Designer' },
        { name: 'Duc', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DucHandoff', role: 'Developer' }
      ],
      lines: [
        { participant: 'Son', text: "Figma handoff ready! Check your inbox.", translation: "File thiết kế Figma đã bàn giao xong nha! Check hộp thư đi bồ." },
        { participant: 'Duc', text: "Opened! Clean components and assets exported.", translation: "Đang xem nè! Thành phần sạch đẹp, hình ảnh xuất ra đầy đủ rồi." },
        { participant: 'Son', text: "Ping me if any screen dimensions look weird.", translation: "Có kích thước màn hình nào bị lệch thì ới tớ liền nha." },
        { participant: 'Duc', text: "Crystal clear. Building the screens now!", translation: "Rõ như ban ngày luôn. Đang bắt tay vào code đây!" }
      ]
    }
  ],

  'pro-07': [
    {
      type: 'pair',
      school: 'business',
      title: 'High-Stakes Contract Negotiation & Strategic Enterprise SLA Agreement',
      participants: [
        { name: 'Director Vance', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=VancePartner', role: 'Commercial Director' },
        { name: 'Ms. Kensington', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KensingtonClient', role: 'Enterprise Client' }
      ],
      lines: [
        { participant: 'Director Vance', text: "Good afternoon, Ms. Kensington. We are prepared to review our finalized multi-year service level agreement and enterprise terms.", translation: "Kính chào Bà Kensington. Chúng tôi đã sẵn sàng rà soát bản thỏa thuận chất lượng dịch vụ nhiều năm và các điều khoản doanh nghiệp ạ." },
        { participant: 'Ms. Kensington', text: "We appreciate your commitment to guaranteed ninety-nine point nine percent cloud uptime and dedicated concierge technical support.", translation: "Chúng tôi đánh giá cao cam kết đảm bảo thời gian hoạt động đám mây 99,9% và đội ngũ kỹ thuật hỗ trợ chuyên biệt của quý công ty." },
        { participant: 'Director Vance', text: "Our enterprise SLA guarantees rapid escalation protocols and comprehensive audit indemnification.", translation: "Quy chuẩn dịch vụ doanh nghiệp của chúng tôi cam kết quy trình xử lý sự cố khẩn cấp và bảo hiểm kiểm toán toàn diện." },
        { participant: 'Ms. Kensington', text: "The contractual parameters meet all our institutional criteria. We look forward to executing the agreement.", translation: "Các điều khoản hợp đồng đáp ứng đầy đủ tiêu chuẩn của chúng tôi. Chúng tôi rất mong đợi ký kết hợp tác chính thức." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Meeting with Prospective Client to Clarify Service Requirements',
      participants: [
        { name: 'Lan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LanClient', role: 'Account Lead' },
        { name: 'Mark', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MarkProspect', role: 'Prospective Client' }
      ],
      lines: [
        { participant: 'Lan', text: "Hi Mark! Thanks for dropping by our office. How can our creative team help tailor your marketing campaign?", translation: "Chào Mark! Cảm ơn bạn đã ghé qua văn phòng của tụi mình. Đội ngũ sáng tạo có thể hỗ trợ điều chỉnh chiến dịch tiếp thị cho bạn như thế nào?" },
        { participant: 'Mark', text: "We're expanding into Southeast Asia and need customized video content and social media branding suited for local audiences.", translation: "Bên mình đang mở rộng thị trường sang Đông Nam Á và cần các video cùng bộ nhận diện mạng xã hội phù hợp với thị hiếu người dùng bản địa." },
        { participant: 'Lan', text: "We specialize in localized cross-border campaigns! We can put together a customized tier proposal by Thursday afternoon.", translation: "Đó chính là thế mạnh của bên mình! Tụi mình có thể gửi một bản đề xuất các gói dịch vụ trước chiều thứ Năm nhé." },
        { participant: 'Mark', text: "That timeline sounds perfect. Really looking forward to collaborating with your agency!", translation: "Tiến độ như vậy là quá chuẩn rồi. Rất mong chờ được hợp tác cùng công ty các bạn!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Deal Closed & Quick Contract Signed Ping',
      participants: [
        { name: 'Khang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KhangDeal', role: 'Sales Lead' },
        { name: 'Nam', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NamDeal', role: 'Manager' }
      ],
      lines: [
        { participant: 'Khang', text: "Client just signed the contract! Deal closed!", translation: "Khách hàng vừa ký hợp đồng xong rồi nha! Chốt đơn thành công!" },
        { participant: 'Nam', text: "Huge win for the company! What tier did they pick?", translation: "Thành tích quá xuất sắc cho công ty luôn! Họ chọn gói nào thế?" },
        { participant: 'Khang', text: "Full enterprise annual package. Champagne time!", translation: "Trọn gói doanh nghiệp năm luôn. Mở tiệc ăn mừng thôi!" },
        { participant: 'Nam', text: "Drinks on the company tonight! High five.", translation: "Tối nay công ty bao liên hoan nha! Đập tay cái nào." }
      ]
    }
  ],

  'pro-08': [
    {
      type: 'pair',
      school: 'business',
      title: 'Annual Executive Performance Appraisal & Merit Compensation Review',
      participants: [
        { name: 'Director Henderson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HendersonReview', role: 'Managing Director' },
        { name: 'Khang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KhangAppraisal', role: 'Senior Architect' }
      ],
      lines: [
        { participant: 'Director Henderson', text: "Good morning, Khang. Let us proceed with your annual executive performance appraisal and career milestone evaluation.", translation: "Chào buổi sáng, Khang. Chúng ta hãy bắt đầu buổi đánh giá hiệu suất điều hành hàng năm và các dấu mốc sự nghiệp của anh." },
        { participant: 'Khang', text: "Thank you, Director. Over the past four quarters, our technical unit exceeded all core KPIs and elevated system reliability to ninety-nine point nine percent.", translation: "Cảm ơn Giám đốc. Trong bốn quý vừa qua, khối kỹ thuật của chúng tôi đã vượt toàn bộ KPI trọng tâm và nâng độ ổn định hệ thống lên mức 99,9% ạ." },
        { participant: 'Director Henderson', text: "Your technical leadership and talent development are exemplary. The board has approved your promotion to Principal Director alongside a merit bonus.", translation: "Năng lực dẫn dắt kỹ thuật và bồi dưỡng nhân tài của anh rất xuất sắc. Hội đồng quản trị đã phê chuẩn việc thăng chức anh lên Giám đốc Cấp cao kèm theo khoản thưởng xứng đáng." },
        { participant: 'Khang', text: "I am deeply appreciative of this executive recognition and remain committed to accelerating our organization's strategic vision.", translation: "Tôi vô cùng trân trọng sự công nhận của ban điều hành và sẽ tiếp tục cam kết thúc đẩy tầm nhìn chiến lược của tổ chức." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Discussing Year-End KPI Evaluation & Promotion Goals with Manager',
      participants: [
        { name: 'Phuong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PhuongManager', role: 'Team Manager' },
        { name: 'Tuan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TuanEmployee', role: 'Senior Designer' }
      ],
      lines: [
        { participant: 'Phuong', text: "Tuan, let's grab coffee to review your year-end self-assessment. You've had an incredible impact on our branding rehaul!", translation: "Tuấn ơi, tụi mình uống cà phê xem qua bản tự đánh giá cuối năm nhé. Năm nay bạn đã tạo ra dấu ấn rất lớn trong việc làm mới thương hiệu đó!" },
        { participant: 'Tuan', text: "Thanks so much Phuong! I really enjoyed mentoring the juniors and leading the major design system rollout.", translation: "Cảm ơn Phương nhiều nha! Mình thực sự rất thích việc hướng dẫn các bạn mới và dẫn dắt đợt ra mắt hệ thống thiết kế vừa qua." },
        { participant: 'Phuong', text: "Your initiative definitely stands out. I am recommending you for the Lead Designer promotion in the upcoming review cycle.", translation: "Sự chủ động của bạn thực sự rất nổi bật. Mình đang đề xuất bạn lên vị trí Trưởng nhóm Thiết kế trong kỳ xét duyệt sắp tới nè." },
        { participant: 'Tuan', text: "That means the world to me. I'm ready to take on larger strategic responsibilities!", translation: "Điều đó có ý nghĩa rất lớn với mình. Mình đã sẵn sàng đón nhận những trọng trách chiến lược lớn hơn!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Promotion Congratulation Ping in Office Chat',
      participants: [
        { name: 'Son', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SonPromo', role: 'Colleague' },
        { name: 'Duc', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DucPromo', role: 'Promoted Peer' }
      ],
      lines: [
        { participant: 'Son', text: "Saw the company email! Congrats on Senior Lead!", translation: "Vừa thấy email toàn công ty thông báo! Chúc mừng tân Trưởng nhóm Cấp cao nha!" },
        { participant: 'Duc', text: "Thanks bro! Still can't believe it's official.", translation: "Cảm ơn người anh em! Vẫn chưa tin là có thông báo chính thức luôn nè." },
        { participant: 'Son', text: "Well deserved! We celebrating after work?", translation: "Xứng đáng với công sức bỏ ra mà! Tan làm làm chầu ăn mừng chứ?" },
        { participant: 'Duc', text: "First round of craft beer is on me!", translation: "Chầu bia thủ công đầu tiên tớ bao trọn gói!" }
      ]
    }
  ],

  'pro-09': [
    {
      type: 'pair',
      school: 'business',
      title: 'Executive Industry Summit Keynote Networking & Partnership Dialogue',
      participants: [
        { name: 'Director Sterling', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SterlingSummit', role: 'Chief Executive' },
        { name: 'Dr. Evelyn', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DrEvelynSummit', role: 'Summit Keynote Speaker' }
      ],
      lines: [
        { participant: 'Director Sterling', text: "Dr. Evelyn, allow me to commend your keynote address on artificial intelligence ethics and enterprise governance.", translation: "Kính thưa Tiến sĩ Evelyn, cho phép tôi được chúc mừng bài phát biểu quan trọng của bà về đạo đức trí tuệ nhân tạo và quản trị doanh nghiệp." },
        { participant: 'Dr. Evelyn', text: "Thank you, Director Sterling. I noted your enterprise's recent expansion into sustainable cloud architectures with keen interest.", translation: "Cảm ơn Giám đốc Sterling. Tôi rất quan tâm và theo dõi sát sao bước chuyển mình gần đây của doanh nghiệp quý vị sang kiến trúc đám mây bền vững." },
        { participant: 'Director Sterling', text: "Here is my executive card. We would welcome an opportunity to explore strategic collaborative research between our organizations.", translation: "Đây là danh thiếp của tôi. Chúng tôi rất hoan nghênh cơ hội được tìm hiểu hướng hợp tác nghiên cứu chiến lược giữa hai tổ chức." },
        { participant: 'Dr. Evelyn', text: "Splendid. My office will connect with your secretariat next week to schedule a formal bilateral consultation.", translation: "Rất tuyệt vời. Văn phòng của tôi sẽ liên hệ với ban thư ký của ông vào tuần tới để sắp xếp một buổi thảo luận song phương chính thức." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Connecting with Industry Peers at Tech Meetup over Coffee',
      participants: [
        { name: 'Quang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=QuangMeetup', role: 'Engineer' },
        { name: 'Alex', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=AlexMeetup', role: 'Tech Founder' }
      ],
      lines: [
        { participant: 'Quang', text: "Hi Alex! That panel discussion on scalable microservices was fantastic. What tech stack are you running at your startup?", translation: "Chào Alex! Phiên thảo luận về kiến trúc vi dịch vụ mở rộng vừa rồi hay quá chừng. Bên công ty khởi nghiệp của bạn đang dùng bộ công nghệ nào thế?" },
        { participant: 'Alex', text: "We're primarily using Go and Kubernetes on AWS! How about your engineering team?", translation: "Tụi mình chủ yếu dùng ngôn ngữ Go kết hợp Kubernetes trên hạ tầng AWS! Còn đội ngũ kỹ thuật của bên bạn thì sao?" },
        { participant: 'Quang', text: "TypeScript, Node, and Postgres! Let's swap LinkedIn profiles so we can keep in touch on tech updates.", translation: "Bên mình dùng TypeScript, Node và Postgres nè! Tụi mình kết nối trang LinkedIn của nhau để tiện trao đổi thêm về công nghệ nhé." },
        { participant: 'Alex', text: "Scanning your QR code right now! Awesome meeting you here.", translation: "Mình đang quét mã QR của bạn luôn đây! Rất vui được gặp bạn tại sự kiện này nha." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Fast LinkedIn QR Scan at Conference Booth',
      participants: [
        { name: 'Son', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SonQR', role: 'Attendee' },
        { name: 'Tri', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TriQR', role: 'Attendee' }
      ],
      lines: [
        { participant: 'Son', text: "Pull up your LinkedIn QR, let's connect!", translation: "Bật mã QR LinkedIn lên đi bồ, kết bạn giao lưu nào!" },
        { participant: 'Tri', text: "On my screen! Accepted your invite.", translation: "Hiện trên màn hình rồi nè! Đã chấp nhận lời mời rồi nha." },
        { participant: 'Son', text: "Hit me up if you ever need design advice.", translation: "Lúc nào cần tư vấn về thiết kế thì cứ nhắn tớ nhé." },
        { participant: 'Tri', text: "Will do bro! Catch you at the afterparty.", translation: "Chắc chắn rồi bồ! Hẹn gặp ở buổi tiệc giao lưu tối nay." }
      ]
    }
  ],

  'pro-10': [
    {
      type: 'pair',
      school: 'business',
      title: 'Multinational Cross-Cultural Alignment & Time-Zone Protocol Briefing',
      participants: [
        { name: 'Managing Director Vance', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=VanceCulture', role: 'Managing Director' },
        { name: 'Lead Coordinator Lan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LanCulture', role: 'Cross-Border Lead' }
      ],
      lines: [
        { participant: 'Managing Director Vance', text: "Good morning, Lan. As our operations span Tokyo, London, and San Francisco, how is our cross-cultural synchronization progressing?", translation: "Chào buổi sáng, Lan. Khi hoạt động của công ty trải dài khắp Tokyo, London và San Francisco, sự phối hợp đa văn hóa của chúng ta tiến triển thế nào rồi?" },
        { participant: 'Lead Coordinator Lan', text: "We established asynchronous documentation standards and rotational meeting hours to respect regional holidays and time-zone boundaries.", translation: "Dạ chúng tôi đã thiết lập chuẩn tài liệu bất đồng bộ và luân phiên khung giờ họp để tôn trọng các ngày lễ khu vực và múi giờ các nước ạ." },
        { participant: 'Managing Director Vance', text: "Cultural empathy and inclusive governance are core to our transnational ethos. Ensure all regional teams feel heard.", translation: "Sự thấu cảm văn hóa và quản trị hòa nhập là cốt lõi trong tôn chỉ quốc tế của chúng ta. Hãy đảm bảo mọi đội ngũ khu vực đều được lắng nghe." },
        { participant: 'Lead Coordinator Lan', text: "Certainly, Director. We also launched quarterly cultural sharing brown-bag lunches across departments.", translation: "Dạ chắc chắn rồi thưa Giám đốc. Chúng tôi cũng đã tổ chức các buổi trưa giao lưu văn hóa thường kỳ giữa các phòng ban." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Coordinating Global Meeting Times Respectfully Across Time Zones',
      participants: [
        { name: 'Duc', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DucGlobalTime', role: 'Engineer' },
        { name: 'Sarah', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SarahLondon', role: 'London Colleague' }
      ],
      lines: [
        { participant: 'Duc', text: "Hi Sarah! I noticed our weekly sprint demo was scheduled for 8 PM your time in London, which feels way too late!", translation: "Chào Sarah! Mình thấy buổi báo cáo sprint hàng tuần bị xếp vào lúc 8 giờ tối theo giờ London của bạn, muộn quá chừng luôn!" },
        { participant: 'Sarah', text: "Thanks so much for thinking of that, Duc! Can we shift it two hours earlier so it falls during standard working hours?", translation: "Cảm ơn bạn Đức nhiều vì đã để ý tới điều đó nhé! Tụi mình dời sớm lên hai tiếng để rơi vào đúng giờ làm việc được không?" },
        { participant: 'Duc', text: "That works out to 2 PM in Hanoi and 8 AM in London! That's a great sweet spot for both of us.", translation: "Như vậy là 2 giờ chiều ở Hà Nội và 8 giờ sáng ở London! Quá là hợp lý cho cả đôi bên luôn nè." },
        { participant: 'Sarah', text: "You're wonderful. Appreciate your cultural consideration across time zones!", translation: "Bạn thật chu đáo. Cảm ơn sự tinh tế tôn trọng múi giờ của bạn nhé!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Global Team Time-Zone Sync Ping',
      participants: [
        { name: 'Nam', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NamTZ', role: 'Colleague' },
        { name: 'Koji', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KojiTZ', role: 'Tokyo Colleague' }
      ],
      lines: [
        { participant: 'Nam', text: "Tokyo is 2 hours ahead, right? End of workday for you?", translation: "Tokyo đi trước 2 tiếng đúng không bồ? Bên đó hết giờ làm rồi hả?" },
        { participant: 'Koji', text: "Just wrapping up at 6 PM! Anything urgent?", translation: "Vừa thu dọn bàn làm việc lúc 6 giờ chiều nè! Có việc gì gấp không ông?" },
        { participant: 'Nam', text: "Nothing urgent, enjoy your evening! Catch up tomorrow.", translation: "Không có gì gấp đâu, tối vui vẻ nha! Mai tụi mình trao đổi sau." },
        { participant: 'Koji', text: "Thanks bro! Talk tomorrow morning.", translation: "Cảm ơn ông nhé! Sáng mai nói chuyện sau." }
      ]
    }
  ],

  'pro-11': [
    {
      type: 'pair',
      school: 'business',
      title: 'Executive Workload Prioritization & Diplomatic Scope Negotiation',
      participants: [
        { name: 'Director Henderson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HendersonScope', role: 'Division Head' },
        { name: 'Lead Architect Khang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KhangScope', role: 'Lead Architect' }
      ],
      lines: [
        { participant: 'Lead Architect Khang', text: "Director Henderson, I wish to consult you regarding our engineering bandwidth. Incorporating two additional enterprise features mid-sprint risks delivery stability.", translation: "Thưa Giám đốc Henderson, tôi xin phép được tham vấn về công suất của đội ngũ kỹ thuật. Việc bổ sung thêm hai tính năng lớn ngay giữa sprint sẽ gây rủi ro cho độ ổn định bàn giao ạ." },
        { participant: 'Director Henderson', text: "We cannot compromise system integrity, Khang. What do you recommend as an assertive priority ranking?", translation: "Chúng ta tuyệt đối không thể đánh đổi sự toàn vẹn của hệ thống, Khang. Anh đề xuất thứ tự ưu tiên dứt khoát như thế nào?" },
        { participant: 'Lead Architect Khang', text: "We should prioritize core database encryption for release one, while deferring peripheral reporting widgets to phase two.", translation: "Dạ chúng ta nên ưu tiên bảo mật cơ sở dữ liệu cốt lõi cho đợt phát hành 1, và dời các tiện ích báo cáo phụ trợ sang giai đoạn 2 ạ." },
        { participant: 'Director Henderson', text: "A judicious and realistic appraisal. I endorse the revised timeline and scope adjustment.", translation: "Một đánh giá rất thấu đáo và thực tế. Tôi chuẩn thuận lộ trình và điều chỉnh phạm vi công việc đã đề xuất." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Politely Declining an Unplanned Task to Protect Project Deadlines',
      participants: [
        { name: 'Tuan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TuanDecline', role: 'Developer' },
        { name: 'Lan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LanDecline', role: 'Project Coordinator' }
      ],
      lines: [
        { participant: 'Lan', text: "Hi Tuan! Could you take on designing the slide deck for tomorrow morning's unexpected marketing meeting?", translation: "Tuấn ơi! Bạn có thể nhận làm giúp slide thuyết trình cho cuộc họp marketing đột xuất sáng mai được không?" },
        { participant: 'Tuan', text: "I'd love to help out Lan, but I'm currently committed to closing three critical bug tickets for our Friday release deadline.", translation: "Mình rất muốn giúp một tay Lan ơi, nhưng hiện tại mình đang phải dồn sức sửa xong 3 lỗi nghiêm trọng cho kịp hạn chót phát hành thứ Sáu này." },
        { participant: 'Lan', text: "I completely understand. Quality and release deadlines come first!", translation: "Mình hoàn toàn hiểu mà. Chất lượng và thời hạn phát hành phải được ưu tiên hàng đầu chứ!" },
        { participant: 'Tuan', text: "Thanks for understanding. Once Friday's deployment is finished, I'm happy to help with future presentations!", translation: "Cảm ơn bạn đã thông cảm nhé. Xong đợt triển khai thứ Sáu này thì mình rất sẵn lòng hỗ trợ các bài thuyết trình sau nha!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Deadline Reality Check on Trello Board',
      participants: [
        { name: 'Binh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BinhTrello', role: 'Teammate' },
        { name: 'Son', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SonTrello', role: 'Teammate' }
      ],
      lines: [
        { participant: 'Binh', text: "Can we finish all five user stories before Friday?", translation: "Kịp làm xong cả năm đầu việc trước thứ Sáu không bồ?" },
        { participant: 'Son', text: "Realistically only three. Let's move two to next sprint.", translation: "Thực tế thì chỉ kịp ba việc thôi. Chuyển hai việc sang sprint sau đi." },
        { participant: 'Binh', text: "Good call. Don't want half-baked code in production.", translation: "Quyết định chuẩn đấy. Chứ ai lại đưa code dở dang lên hệ thống thật." },
        { participant: 'Son', text: "Moving them on Jira now!", translation: "Đang kéo việc sang sprint mới trên Jira đây!" }
      ]
    }
  ],

  'pro-12': [
    {
      type: 'pair',
      school: 'business',
      title: 'Facilitating Constructive Conflict Resolution Between Department Heads',
      participants: [
        { name: 'Director Sterling', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SterlingMediate', role: 'Mediator' },
        { name: 'Manager Phuong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PhuongConflict', role: 'Department Head' }
      ],
      lines: [
        { participant: 'Director Sterling', text: "Good afternoon, colleagues. We are convening this executive mediation to address contrasting viewpoints regarding product roadmap priorities.", translation: "Kính chào quý vị. Chúng ta triệu tập buổi hòa giải điều hành này để cùng giải quyết các quan điểm trái chiều về thứ tự ưu tiên của lộ trình sản phẩm." },
        { participant: 'Manager Phuong', text: "Our concern was rooted in resource contention. Marketing required immediate feature rollouts while engineering prioritized essential stability refactoring.", translation: "Mối bận tâm của chúng tôi bắt nguồn từ sự cạnh tranh nguồn lực. Marketing cần ra mắt tính năng gấp, trong khi kỹ thuật lại ưu tiên tối ưu hóa độ ổn định cốt lõi." },
        { participant: 'Director Sterling', text: "Both mandates serve our enterprise objectives. Let us agree on a phased hybrid schedule balancing technical stability with commercial visibility.", translation: "Cả hai mục tiêu đều phục vụ sự phát triển của doanh nghiệp. Chúng ta hãy thống nhất lộ trình phân kỳ kết hợp vừa đảm bảo kỹ thuật vừa đáp ứng thương mại." },
        { participant: 'Manager Phuong', text: "That compromise directly addresses our shared strategic interests. I am aligned with this resolution.", translation: "Sự thỏa hiệp này đáp ứng đúng lợi ích chiến lược chung của cả hai bên. Tôi hoàn toàn ủng hộ giải pháp này." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Clearing Up a Workflow Misunderstanding After a Heated Meeting',
      participants: [
        { name: 'Duc', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DucClear', role: 'Colleague' },
        { name: 'Mai', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MaiClear', role: 'Colleague' }
      ],
      lines: [
        { participant: 'Duc', text: "Hey Mai, do you have a few minutes for a coffee? I wanted to check in after our sprint planning discussion earlier.", translation: "Mai ơi, bạn có rảnh vài phút uống cà phê không? Mình muốn trao đổi thêm sau buổi tranh luận kế hoạch sprint hồi nãy á." },
        { participant: 'Mai', text: "Sure Duc! Things felt a little tense during the timeline debate, but I know we both just want what's best for the project.", translation: "Được chứ Đức! Nãy lúc bàn về tiến độ hơi căng thẳng một xíu, nhưng mình biết cả hai đứa đều chỉ muốn điều tốt nhất cho dự án thôi mà." },
        { participant: 'Duc', text: "Exactly. I didn't mean to sound dismissive of your UX proposal. Let's look at how we can integrate your design smoothly.", translation: "Chuẩn luôn. Mình hoàn toàn không có ý gạt bỏ đề xuất trải nghiệm người dùng của bạn đâu. Tụi mình cùng bàn xem tích hợp thiết kế thế nào cho mượt nhé." },
        { participant: 'Mai', text: "I really appreciate you speaking up directly. I feel so much better now that we've talked it through!", translation: "Mình thực sự rất quý sự thẳng thắn chia sẻ của bạn. Ngồi nói chuyện rõ ràng thế này thấy nhẹ nhõm hẳn luôn!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick 1:1 Coffee Reset to Smooth Out Disagreement',
      participants: [
        { name: 'Khang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KhangReset', role: 'Coworker' },
        { name: 'Tri', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TriReset', role: 'Coworker' }
      ],
      lines: [
        { participant: 'Khang', text: "Grab a quick coffee downstairs? No hard feelings from earlier!", translation: "Xuống sảnh làm ly cà phê không bồ? Hồi nãy tranh luận công việc chứ không có ác ý gì đâu nha!" },
        { participant: 'Tri', text: "None at all bro, just passionate about the product.", translation: "Không để bụng gì đâu ông ơi, chỉ là hai đứa đều tâm huyết với sản phẩm thôi mà." },
        { participant: 'Khang', text: "That's what makes our team great. Iced latte on me!", translation: "Thế mới tạo nên một tập thể ăn ý chứ. Ly latte đá để tớ bao nhé!" },
        { participant: 'Tri', text: "Heading down the elevator now!", translation: "Đang đi thang máy xuống liền đây!" }
      ]
    }
  ],

  'pro-13': [
    {
      type: 'pair',
      school: 'business',
      title: 'Cordial Corporate Luncheon Discussion on Personal Interests & Arts',
      participants: [
        { name: 'Director Vance', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=VanceLuncheon', role: 'Managing Director' },
        { name: 'Mrs. Kensington', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KensingtonLunch', role: 'Executive Partner' }
      ],
      lines: [
        { participant: 'Director Vance', text: "During our corporate retreat, Mrs. Kensington, I learned of your passion for contemporary photography and architectural history.", translation: "Trong kỳ nghỉ dưỡng doanh nghiệp vừa qua, thưa Bà Kensington, tôi được biết về niềm đam mê của bà dành cho nhiếp ảnh đương đại và lịch sử kiến trúc." },
        { participant: 'Mrs. Kensington', text: "Indeed, Director Vance. Engaging with fine arts and cultural conservation provides valuable creative balance amidst executive responsibilities.", translation: "Dạ đúng vậy thưa Giám đốc Vance. Việc tìm về nghệ thuật và bảo tồn văn hóa đem lại sự cân bằng sáng tạo quý giá giữa những trọng trách điều hành." },
        { participant: 'Director Vance', text: "A wonderful pursuit. Our foundation frequently sponsors classical chamber recitals; it would be an honor to extend you an invitation.", translation: "Một thú vui rất tao nhã. Quỹ của công ty chúng tôi thường xuyên tài trợ các buổi hòa nhạc thính phòng; chúng tôi rất vinh hạnh được gửi thiệp mời tới bà." },
        { participant: 'Mrs. Kensington', text: "I would be delighted to attend. It is a pleasure to connect beyond purely commercial parameters.", translation: "Tôi rất vui lòng tham dự. Thật là một điều đáng quý khi chúng ta có thể kết nối vượt ra ngoài khuôn khổ công việc đơn thuần." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Weekend Hobbies, Marathon Training & Dinner Recommendations with Colleague',
      participants: [
        { name: 'Hoang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HoangHobby', role: 'Colleague' },
        { name: 'Lan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LanHobby', role: 'Colleague' }
      ],
      lines: [
        { participant: 'Hoang', text: "Lan, what do you usually get up to on weekends when you're not managing product releases?", translation: "Lan ơi, những dịp cuối tuần không phải bận rộn với các đợt phát hành sản phẩm thì bạn thường làm gì?" },
        { participant: 'Lan', text: "I'm currently training for a half-marathon! I also love baking sourdough bread and exploring new brunch cafes.", translation: "Dạo này mình đang tập chạy chuẩn bị cho giải bán marathon đó! Mình cũng rất thích nướng bánh mì men tự nhiên với đi khám phá mấy quán cà phê brunch mới nữa." },
        { participant: 'Hoang', text: "A half-marathon is so impressive! My weekend passion is board game nights with old university friends and landscape photography.", translation: "Chạy bán marathon đỉnh thật sự luôn! Còn đam mê cuối tuần của mình là tụ tập chơi cờ board game với nhóm bạn đại học và chụp ảnh phong cảnh." },
        { participant: 'Lan', text: "That sounds like so much fun. It's so nice getting to know each other beyond our spreadsheets!", translation: "Nghe vui quá chừng. Thật thích khi tụi mình hiểu thêm về nhau ngoài những bảng biểu số liệu công việc!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Weekend Soccer Match Plan Ping',
      participants: [
        { name: 'Duc', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DucSoccer', role: 'Friend' },
        { name: 'Son', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SonSoccer', role: 'Friend' }
      ],
      lines: [
        { participant: 'Duc', text: "Playing soccer with the office squad this Saturday?", translation: "Thứ Bảy này đá bóng cùng đội bóng công ty không ông?" },
        { participant: 'Son', text: "Stadium 7 at 4 PM? Count me in!", translation: "Sân số 7 lúc 4 giờ chiều đúng không? Cho tớ một chân nha!" },
        { participant: 'Duc', text: "Bring boots! Need a solid defender.", translation: "Nhớ mang giày đá bóng theo nha! Đang thiếu một hậu vệ cứng cáp nè." },
        { participant: 'Son', text: "Locked in! Ready to run 90 minutes.", translation: "Chốt lịch luôn! Sẵn sàng chạy đủ 90 phút nhé." }
      ]
    }
  ],

  'pro-14': [
    {
      type: 'pair',
      school: 'business',
      title: 'Diplomatic Notification of Flexible Working Hours for Family Caregiving',
      participants: [
        { name: 'Director Henderson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HendersonCare', role: 'Managing Director' },
        { name: 'Manager Phuong', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=PhuongCare', role: 'Manager' }
      ],
      lines: [
        { participant: 'Manager Phuong', text: "Good morning, Director Henderson. I wish to formally arrange a temporary flexible schedule to accommodate essential domestic caregiving responsibilities.", translation: "Kính chào Giám đốc Henderson. Tôi xin phép đăng ký lịch làm việc linh hoạt tạm thời để chu toàn nghĩa vụ chăm sóc gia đình ạ." },
        { participant: 'Director Henderson', text: "Our enterprise firmly champions sustainable work-life balance, Phuong. What working adjustments would best support your circumstances?", translation: "Doanh nghiệp luôn kiên định ủng hộ sự cân bằng bền vững giữa công việc và gia đình, Phương. Sự điều chỉnh nào sẽ hỗ trợ hoàn cảnh của chị tốt nhất?" },
        { participant: 'Manager Phuong', text: "I will be online early from 7 AM to 3 PM, ensuring all regional deliverables and deliverables are executed without disruption.", translation: "Dạ tôi sẽ làm việc trực tuyến từ 7 giờ sáng đến 3 giờ chiều, bảo đảm toàn bộ đầu việc của khu vực vẫn được hoàn thành không gián đoạn ạ." },
        { participant: 'Director Henderson', text: "Your proactive planning guarantees continuity. Your flexible arrangement is officially approved.", translation: "Kế hoạch chủ động của chị bảo đảm tính liên tục của công việc. Đề xuất làm việc linh hoạt này chính thức được phê duyệt." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Swapping Shifts to Pick Up Child from School & Parent-Teacher Meeting',
      participants: [
        { name: 'Mai', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MaiKin', role: 'Colleague' },
        { name: 'Hoang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HoangKin', role: 'Colleague' }
      ],
      lines: [
        { participant: 'Mai', text: "Hoang, do you think you could cover my 4 PM duty this Thursday? My daughter has a parent-teacher meeting at school.", translation: "Hoàng ơi, bạn đổi ca trực lúc 4 giờ chiều thứ Năm này giùm mình được không? Con gái mình có buổi họp phụ huynh ở trường á." },
        { participant: 'Hoang', text: "Of course Mai! Family duties always come first. I'll take over your monitoring shift with pleasure.", translation: "Tất nhiên rồi Mai! Chuyện gia đình con cái luôn phải ưu tiên trước hết mà. Mình sẽ nhận trực thay ca theo dõi hệ thống cho bạn nhé." },
        { participant: 'Mai', text: "You're such a wonderful colleague, thank you so much! I can take your Saturday morning shift next week in return.", translation: "Bạn là người đồng nghiệp tuyệt vời quá chừng, cảm ơn bạn nhiều nhé! Đổi lại tuần sau mình trực thay ca sáng thứ Bảy cho bạn nha." },
        { participant: 'Hoang', text: "That works out perfectly for both of us! Give your little one my best regards.", translation: "Thế thì tiện lợi cho cả đôi bên quá rồi! Cho mình gửi lời hỏi thăm bé nhà bạn nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Fast School Pickup Coverage Ping',
      participants: [
        { name: 'Khang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KhangPickup', role: 'Parent' },
        { name: 'Tuan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TuanPickup', role: 'Teammate' }
      ],
      lines: [
        { participant: 'Khang', text: "Stepping out 30 mins early to pick up my kid from kindergarten!", translation: "Tớ xin phép ra ngoài sớm 30 phút đi đón con nhỏ ở trường mẫu giáo nha!" },
        { participant: 'Tuan', text: "Go ahead! Watching the Slack support channel for you.", translation: "Cứ đi đi bồ! Tớ trực kênh hỗ trợ Slack giùm cho." },
        { participant: 'Khang', text: "Back online from home by 5:30 PM! Thanks man.", translation: "Tầm 5 rưỡi về tới nhà là tớ online lại liền! Cảm ơn nhiều nha." },
        { participant: 'Tuan', text: "Drive safe! Don't worry about the channel.", translation: "Lái xe an toàn nha! Cứ yên tâm không lo gì đâu." }
      ]
    }
  ],

  'pro-15': [
    {
      type: 'pair',
      school: 'business',
      title: 'Strategic Financial Advisory on Long-term Wealth Management & Investments',
      participants: [
        { name: 'Director Henderson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HendersonWealth', role: 'Board Advisor' },
        { name: 'Senior Partner Khang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KhangWealth', role: 'Senior Partner' }
      ],
      lines: [
        { participant: 'Senior Partner Khang', text: "Director Henderson, I am consulting our executive fiduciary advisor regarding personal corporate equity vesting and long-term asset allocation.", translation: "Kính thưa Giám đốc Henderson, tôi đang tham vấn cố vấn ủy thác điều hành về việc trao quyền cổ phiếu doanh nghiệp cá nhân và phân bổ tài sản dài hạn ạ." },
        { participant: 'Director Henderson', text: "A prudent personal milestone, Khang. Diversifying capital across diversified index vehicles and conservative bond holdings mitigates market volatility.", translation: "Một dấu mốc cá nhân rất thận trọng, Khang. Đa dạng hóa nguồn vốn qua các quỹ chỉ số và trái phiếu an toàn sẽ giúp giảm thiểu biến động thị trường." },
        { participant: 'Senior Partner Khang', text: "Indeed, sir. Establishing a family trust structure ensures financial resilience and supports future philanthropic endeavors.", translation: "Dạ đúng như vậy thưa Giám đốc. Thiết lập một cấu trúc quỹ tín thác gia đình sẽ bảo đảm tính vững chắc tài chính và phục vụ các dự định thiện nguyện sau này." },
        { participant: 'Director Henderson', text: "Sound financial stewardship. Such strategic forethought mirrors the acumen you bring to our corporate balance sheet.", translation: "Quản lý tài chính rất chuẩn mực. Tầm nhìn chiến lược này phản ánh đúng sự nhạy bén mà anh đã đóng góp cho bảng cân đối tài chính của công ty." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Chatting About Housing Mortgages, Savings Plans & Financial Goals over Lunch',
      participants: [
        { name: 'Quang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=QuangMortgage', role: 'Colleague' },
        { name: 'Duc', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DucMortgage', role: 'Colleague' }
      ],
      lines: [
        { participant: 'Quang', text: "Duc, have you been following the bank interest rates lately? My partner and I are looking into buying our first apartment.", translation: "Đức ơi, dạo này bạn có theo dõi lãi suất ngân hàng không? Vợ chồng mình đang tìm hiểu để mua căn hộ đầu tiên nè." },
        { participant: 'Duc', text: "I have! Home loan mortgage rates dropped slightly this quarter. Making a disciplined thirty-percent down payment is usually the safest route.", translation: "Mình có theo dõi nè! Lãi suất vay mua nhà quý này đang giảm nhẹ đó. Chuẩn bị sẵn tiền trả trước tầm 30% thường là phương án an toàn nhất á." },
        { participant: 'Quang', text: "Yeah, we've set up an automatic monthly savings plan to build our emergency fund and mortgage reserve.", translation: "Ừ, tụi mình cũng đã lập quỹ tiết kiệm tự động trích hàng tháng để xây dựng quỹ khẩn cấp với tiền trả góp nhà." },
        { participant: 'Duc', text: "Smart move! Being steady with budgeting makes buying a home so much less stressful.", translation: "Quyết định khôn ngoan đó! Giữ kỷ luật chi tiêu đều đặn sẽ giúp việc mua nhà đỡ áp lực đi nhiều lắm." }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick First Apartment Hunting Advice Ping',
      participants: [
        { name: 'Son', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SonApt', role: 'Friend' },
        { name: 'Tri', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TriApt', role: 'Friend' }
      ],
      lines: [
        { participant: 'Son', text: "Toured a two-bedroom apartment near the metro line!", translation: "Vừa đi xem căn hộ 2 phòng ngủ gần tuyến metro về nè!" },
        { participant: 'Tri', text: "Awesome! How's the price per square meter?", translation: "Xịn quá! Giá mỗi mét vuông thế nào ông?" },
        { participant: 'Son', text: "Within our savings budget! Checking mortgage terms now.", translation: "Vừa vặn trong ngân sách tích lũy luôn! Đang kiểm tra điều khoản vay." },
        { participant: 'Tri', text: "Lock in a fixed interest rate if you can!", translation: "Cố gắng chốt lãi suất cố định nếu được nha bồ!" }
      ]
    }
  ],

  'pro-16': [
    {
      type: 'pair',
      school: 'business',
      title: 'Formal Sick Leave Authorization & Ergonomic Workplace Health Consultation',
      participants: [
        { name: 'Director Henderson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HendersonHealth', role: 'Managing Director' },
        { name: 'Lead Architect Khang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KhangHealth', role: 'Lead Architect' }
      ],
      lines: [
        { participant: 'Lead Architect Khang', text: "Good morning, Director Henderson. Following intense delivery sprints, my physician has advised three days of medical leave for cervical strain and physical recovery.", translation: "Kính chào Giám đốc Henderson. Sau các đợt chạy tiến độ dồn dập, bác sĩ đã khuyến cáo tôi nên nghỉ phép điều trị 3 ngày do căng cơ vai gáy và để hồi phục thể trạng ạ." },
        { participant: 'Director Henderson', text: "Health must always remain an uncompromising priority, Khang. Your medical leave is fully authorized with immediate effect.", translation: "Sức khỏe luôn phải là ưu tiên không bao giờ được phép xem nhẹ, Khang. Đơn xin nghỉ phép điều trị của anh được phê duyệt ngay lập tức." },
        { participant: 'Lead Architect Khang', text: "Thank you, sir. I have transferred operational oversight to my deputy to ensure zero disruption to live customer deployments.", translation: "Cảm ơn Giám đốc. Tôi đã bàn giao công tác quản lý cho cấp phó để đảm bảo không gây gián đoạn các đợt triển khai của khách hàng ạ." },
        { participant: 'Director Henderson', text: "Rest thoroughly and prioritize full recovery. Our occupational health team will inspect your desk ergonomics upon your return.", translation: "Anh hãy nghỉ ngơi tĩnh dưỡng và ưu tiên hồi phục hoàn toàn nhé. Đội ngũ an toàn sức khỏe sẽ khảo sát lại bàn ghế công thái học khi anh quay lại làm việc." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Sharing Ergonomic Tips for Desk Posture & Stress Management with Co-worker',
      participants: [
        { name: 'Mai', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MaiErgo', role: 'Colleague' },
        { name: 'Duc', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DucErgo', role: 'Colleague' }
      ],
      lines: [
        { participant: 'Mai', text: "Duc, you look like you're rubbing your neck every five minutes! Are you dealing with office shoulder pain?", translation: "Đức ơi, thấy bạn cứ 5 phút lại xoa bóp cổ một lần kìa! Bạn đang bị đau mỏi vai gáy văn phòng đúng không?" },
        { participant: 'Duc', text: "Yeah, hunching over my laptop during deadline week really strained my lower back and neck muscles.", translation: "Ừ, mấy hôm hạn chót ngồi cắm cúi trước laptop làm căng cứng hết cả cơ lưng dưới với cổ luôn á." },
        { participant: 'Mai', text: "Try raising your laptop stand to eye level and setting an alarm to stretch every fifty minutes. It worked wonders for me!", translation: "Bạn thử nâng giá đỡ laptop lên ngang tầm mắt với cài chuông báo đứng dậy vươn vai mỗi 50 phút xem. Mình làm theo thấy đỡ hẳn luôn á!" },
        { participant: 'Duc', text: "That's a great tip. I'm going to order an ergonomic lumbar cushion today!", translation: "Lời khuyên hữu ích ghê. Hôm nay mình đặt mua luôn một cái gối tựa lưng công thái học liền!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Sick Leave Notification to Team Lead',
      participants: [
        { name: 'Son', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SonSick', role: 'Employee' },
        { name: 'Bao', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BaoLeadSick', role: 'Team Lead' }
      ],
      lines: [
        { participant: 'Son', text: "Woke up with a high fever and sore throat. Taking sick leave today!", translation: "Sáng nay thức dậy bị sốt cao với đau rát họng quá. Hôm nay tớ xin phép nghỉ ốm nha!" },
        { participant: 'Bao', text: "Rest up bro! Drink lots of warm water.", translation: "Nghỉ ngơi dưỡng bệnh đi ông! Nhớ uống nhiều nước ấm nha." },
        { participant: 'Son', text: "Transferred my open tickets to Khang.", translation: "Tớ đã chuyển giao các đầu việc đang mở cho Khang rồi nhé." },
        { participant: 'Bao', text: "Don't check Slack today, just get well!", translation: "Hôm nay không cần vào xem Slack đâu, cứ lo mau khỏe lại là được!" }
      ]
    }
  ],

  'pro-17': [
    {
      type: 'pair',
      school: 'business',
      title: 'Selecting an Executive Dining Venue for International Delegations',
      participants: [
        { name: 'Director Vance', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=VanceDine', role: 'Managing Director' },
        { name: 'Concierge Manager Lan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LanConcierge', role: 'Hospitality Lead' }
      ],
      lines: [
        { participant: 'Director Vance', text: "Good morning, Lan. We are hosting an international executive delegation from Zurich next Thursday. Have you reserved an appropriate culinary venue?", translation: "Chào buổi sáng, Lan. Thứ Năm tới chúng ta sẽ đón tiếp đoàn đại biểu điều hành quốc tế từ Zurich. Cô đã đặt trước một địa điểm ẩm thực phù hợp chưa?" },
        { participant: 'Concierge Manager Lan', text: "Yes, Director. I secured a private panoramic dining suite showcasing refined Vietnamese culinary heritage with certified dietary accommodations.", translation: "Dạ rồi thưa Giám đốc. Tôi đã giữ một phòng tiệc riêng ngắm toàn cảnh thành phố, giới thiệu tinh hoa ẩm thực Việt Nam tinh tế cùng thực đơn đáp ứng chuẩn kiêng khem của khách ạ." },
        { participant: 'Director Vance', text: "Exemplary planning. Dignified hospitality and thoughtful culinary presentation reflect our corporate stature.", translation: "Khâu chuẩn bị rất gương mẫu. Sự đón tiếp trang trọng và ẩm thực tinh tế sẽ thể hiện đúng vị thế của doanh nghiệp chúng ta." },
        { participant: 'Concierge Manager Lan', text: "All menu tasting notes and dietary preferences have been confirmed with the executive chef.", translation: "Toàn bộ ghi chú nếm thử thực đơn và yêu cầu ăn uống của khách đều đã được xác nhận với bếp trưởng ạ." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Recommending Favorite Lunch Spots and Planning a Weekend Getaway',
      participants: [
        { name: 'Hoang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HoangTravel', role: 'Colleague' },
        { name: 'Mai', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MaiTravel', role: 'Colleague' }
      ],
      lines: [
        { participant: 'Hoang', text: "Mai, where should we go for lunch today? I'm craving something hot and flavorful!", translation: "Mai ơi, trưa nay tụi mình đi ăn ở đâu đây? Đang thèm món gì nóng hổi đậm đà xíu nè!" },
        { participant: 'Mai', text: "There's an authentic Hue beef noodle soup spot two blocks down that has the richest lemongrass broth in town!", translation: "Có quán bún bò Huế chính gốc cách đây hai dãy nhà có nước dùng sả thơm lừng đậm đà nhất khu này luôn đó!" },
        { participant: 'Hoang', text: "Sold! Also, are you taking any time off for the upcoming long weekend?", translation: "Chốt quán đó luôn! Mà nhân tiện dịp nghỉ lễ dài sắp tới bạn có đi chơi đâu không?" },
        { participant: 'Mai', text: "Yes! Booking a quick beach getaway to Quy Nhon to unwind and eat fresh seafood!", translation: "Có chứ! Đang đặt chuyến đi trốn ra biển Quy Nhơn để xả hơi và ăn hải sản tươi sống nè!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Team Boba & Lunch Run Ping',
      participants: [
        { name: 'Duc', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DucBoba', role: 'Colleague' },
        { name: 'Son', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SonBoba', role: 'Colleague' }
      ],
      lines: [
        { participant: 'Duc', text: "Ordering boba milk tea for the team! Want in?", translation: "Đang đặt trà sữa cho cả phòng nè! Uống không bồ?" },
        { participant: 'Son', text: "Oolong milk tea, 30% sugar, boba pearls!", translation: "Trà sữa ô long, 30% đường, trân châu đen nha!" },
        { participant: 'Duc', text: "Added to cart. Arriving in 20 mins!", translation: "Đã thêm vào giỏ hàng. Tầm 20 phút nữa giao tới nha!" },
        { participant: 'Son', text: "Sweet! Transferred cash to your MoMo.", translation: "Quá ngon! Đã bắn tiền qua MoMo cho ông rồi nhé." }
      ]
    }
  ],

  'pro-18': [
    {
      type: 'pair',
      school: 'business',
      title: 'Community Relations Executive Briefing & Neighborhood Association Engagement',
      participants: [
        { name: 'Director Henderson', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=HendersonComm', role: 'Corporate VP' },
        { name: 'Representative Lan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LanComm', role: 'Community Liaison' }
      ],
      lines: [
        { participant: 'Representative Lan', text: "Good morning, Director Henderson. I am presenting our quarterly civic report on neighborly relations and local community partnerships surrounding our campus.", translation: "Kính chào Giám đốc Henderson. Tôi xin phép báo cáo kết quả quý về mối quan hệ cộng đồng cư dân lân cận và các chương trình gắn kết xã hội quanh khuôn viên công ty ạ." },
        { participant: 'Director Henderson', text: "Maintaining cordial and proactive civic engagement with local neighborhood associations is fundamental to our enterprise responsibility.", translation: "Duy trì sự gắn kết văn minh và chủ động với tổ dân phố địa phương là nền tảng trong trách nhiệm xã hội của doanh nghiệp chúng ta." },
        { participant: 'Representative Lan', text: "We sponsored the local district solar street lighting initiative and organized a monthly civic park cleanup involving employee volunteers.", translation: "Dạ chúng ta đã tài trợ dự án đèn đường năng lượng mặt trời cho phường và tổ chức ngày hội dọn dẹp công viên hàng tháng với sự tham gia của nhân viên công ty ạ." },
        { participant: 'Director Henderson', text: "Exemplary corporate citizenship. Continue fostering these collaborative community ties.", translation: "Tinh thần trách nhiệm cộng đồng rất đáng biểu dương. Hãy tiếp tục vun đắp mối quan hệ gắn bó hữu nghị này nhé." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Friendly Interaction with Apartment Neighbor Regarding Package Delivery',
      participants: [
        { name: 'Duc', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DucNeighbor', role: 'Resident' },
        { name: 'Mrs. Nga', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=NgaNeighbor', role: 'Neighbor' }
      ],
      lines: [
        { participant: 'Duc', text: "Good evening, Mrs. Nga! I noticed the courier delivered an oversized parcel to your doorstep while you were out at work.", translation: "Cháu chào cô Nga ạ! Cháu thấy bên giao hàng có gửi một kiện hàng khá to trước cửa nhà cô trong lúc cô đi làm vắng." },
        { participant: 'Mrs. Nga', text: "Oh thank you so much for watching out, Duc! I was stuck in city traffic and worried about leaving it in the hallway.", translation: "Ôi cảm ơn cháu Đức nhiều vì đã để mắt giúp cô nhé! Cô bị kẹt xe trên đường về nên cứ lo để đồ ngoài hành lang không an toàn." },
        { participant: 'Duc', text: "I moved it inside our foyer for safekeeping. Let me bring it over for you right now!", translation: "Dạ cháu đã mang tạm vào sảnh nhà cháu giữ giùm cô rồi ạ. Để cháu bưng qua cho cô ngay nhé!" },
        { participant: 'Mrs. Nga', text: "You're such a kind and thoughtful neighbor. Here, have some fresh mangoes my sister brought from our hometown!", translation: "Cháu thật là người hàng xóm tốt bụng và chu đáo. Nè, cô gửi biếu cháu ít xoài tươi dưới quê em gái cô mới gửi lên nhé!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Neighbor Package Pickup Text',
      participants: [
        { name: 'Son', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SonPack', role: 'Neighbor' },
        { name: 'Quan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=QuanPack', role: 'Neighbor' }
      ],
      lines: [
        { participant: 'Son', text: "Hey Quan! Courier left your parcel at my door.", translation: "Ê Quân ơi! Shipper vừa gửi kiện hàng của ông qua cửa nhà tớ nè." },
        { participant: 'Quan', text: "Thanks so much bro! Coming by to pick it up now.", translation: "Cảm ơn ông nhiều nhé! Tớ chạy qua lấy liền đây." },
        { participant: 'Son', text: "Left it on the shoe rack right outside.", translation: "Tớ để ngay trên kệ giày trước cửa đó nha." },
        { participant: 'Quan', text: "Grabbed it! Much appreciated man.", translation: "Lấy rồi nha! Cảm ơn người anh em nhiều lắm." }
      ]
    }
  ],

  'pro-19': [
    {
      type: 'pair',
      school: 'business',
      title: 'Annual Corporate Gala Keynote Toast & Milestone Recognition',
      participants: [
        { name: 'Director Vance', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=VanceGala', role: 'Managing Director' },
        { name: 'Senior Executive Minh', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=MinhGala', role: 'Senior Executive' }
      ],
      lines: [
        { participant: 'Director Vance', text: "Ladies and gentlemen, let us raise our glasses in celebration of our organization's tenth anniversary and historic market expansion.", translation: "Kính thưa quý vị, xin mời tất cả chúng ta cùng nâng ly chúc mừng kỷ niệm 10 năm thành lập tổ chức và dấu mốc mở rộng thị trường lịch sử của công ty." },
        { participant: 'Senior Executive Minh', text: "On behalf of the executive leadership team, we extend our heartfelt gratitude to every employee whose enduring dedication made this milestone possible.", translation: "Đại diện ban điều hành, chúng tôi xin gửi lời tri ân sâu sắc nhất tới toàn thể cán bộ nhân viên, những người đã cống hiến không ngừng để tạo nên cột mốc đáng nhớ này." },
        { participant: 'Director Vance', text: "May the coming decade bring sustained innovation, mutual prosperity, and continued excellence.", translation: "Chúc cho thập kỷ tiếp theo của chúng ta luôn tràn đầy đổi mới sáng tạo, thịnh vượng bền vững và không ngừng vươn tới sự xuất sắc." },
        { participant: 'Senior Executive Minh', text: "Hear, hear! To ten years of shared triumphs and future breakthroughs!", translation: "Hoan hô! Xin nâng ly chúc mừng mười năm thành công rực rỡ và những đột phá tương lai!" }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Congratulating a Colleague on Wedding Invitation and Choosing a Gift',
      participants: [
        { name: 'Lan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LanWedding', role: 'Colleague' },
        { name: 'Tuan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TuanGroom', role: 'Groom-to-be' }
      ],
      lines: [
        { participant: 'Lan', text: "Tuan! I received your beautiful wedding invitation card yesterday. Congratulations to both of you!", translation: "Tuấn ơi! Hôm qua mình vừa nhận được thiệp cưới xinh xắn của bạn rồi. Chúc mừng hạnh phúc hai bạn nhé!" },
        { participant: 'Tuan', text: "Thank you so much Lan! It's going to be a warm garden celebration with close friends and our department squad.", translation: "Cảm ơn Lan nhiều nha! Bọn mình tổ chức một bữa tiệc sân vườn ấm cúng cùng bạn bè thân thiết và cả phòng mình nè." },
        { participant: 'Lan', text: "The whole office is so excited for you! Are you registered for any specific household gifts, or do you prefer a traditional gift envelope?", translation: "Cả công ty ai cũng háo hức chúc mừng bạn hết á! Bạn có lập danh sách quà tặng đồ gia dụng nào không, hay là phong bì mừng cưới truyền thống nè?" },
        { participant: 'Tuan', text: "Having you all there to celebrate our special day is the greatest gift of all!", translation: "Sự hiện diện của mọi người trong ngày vui đặc biệt này đã là món quà lớn nhất với bọn mình rồi!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Quick Office Birthday Cake Call in Breakroom',
      participants: [
        { name: 'Son', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SonCake', role: 'Colleague' },
        { name: 'Bao', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=BaoCake', role: 'Birthday Colleague' }
      ],
      lines: [
        { participant: 'Son', text: "Surprise birthday cake in the pantry! Come quick!", translation: "Bánh sinh nhật bất ngờ trong phòng nghỉ nè! Ra mau lên bồ ơi!" },
        { participant: 'Bao', text: "Wait, for me?! You guys shouldn't have!", translation: "Ủa, cho tớ hả?! Mọi người bày vẽ chu đáo quá chừng!" },
        { participant: 'Son', text: "Blow the candles and make a wish!", translation: "Thổi nến rồi ước một điều ước mau lên nào!" },
        { participant: 'Bao', text: "Best team ever! Cutting cake for everyone now.", translation: "Đội ngũ tuyệt vời nhất quả đất! Cắt bánh chia cho mọi người liền đây." }
      ]
    }
  ],

  'pro-20': [
    {
      type: 'pair',
      school: 'business',
      title: 'Executive Leadership Mentorship & Five-Year Strategic Vision Consultation',
      participants: [
        { name: 'Managing Director Vance', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=VanceVision', role: 'Managing Director' },
        { name: 'Principal Lead Khang', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=KhangVision', role: 'Principal Lead' }
      ],
      lines: [
        { participant: 'Managing Director Vance', text: "Good afternoon, Khang. As part of our executive succession framework, I wish to discuss your five-year leadership trajectory within the enterprise.", translation: "Kính chào Khang. Nằm trong khuôn khổ kế hoạch nhân sự kế thừa điều hành, tôi muốn trao đổi về lộ trình phát triển lãnh đạo 5 năm tới của anh trong doanh nghiệp." },
        { participant: 'Principal Lead Khang', text: "Thank you, Director. My aspiration is to spearhead our artificial intelligence research lab and transition into global enterprise technology governance.", translation: "Cảm ơn Giám đốc. Khát vọng của tôi là dẫn dắt phòng thí nghiệm nghiên cứu trí tuệ nhân tạo và tiến tới quản trị công nghệ doanh nghiệp toàn cầu ạ." },
        { participant: 'Managing Director Vance', text: "An ambitious and well-founded vision. We will sponsor your enrollment in an executive advanced management program next semester.", translation: "Một tầm nhìn đầy hoài bão và có cơ sở vững chắc. Ban giám đốc sẽ tài trợ học phí cho anh tham gia chương trình quản trị điều hành cao cấp vào kỳ tới." },
        { participant: 'Principal Lead Khang', text: "I am deeply privileged by this corporate sponsorship and remain dedicated to cultivating the next generation of technical leaders.", translation: "Tôi vô cùng vinh dự trước sự bảo trợ của công ty và cam kết sẽ bồi dưỡng thế hệ lãnh đạo kỹ thuật kế cận." }
      ]
    },
    {
      type: 'pair',
      school: 'casual',
      title: 'Discussing Upskilling in AI & Tech Certifications with Senior Mentor',
      participants: [
        { name: 'Lan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=LanUpskill', role: 'Senior Mentor' },
        { name: 'Tuan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TuanUpskill', role: 'Junior Engineer' }
      ],
      lines: [
        { participant: 'Tuan', text: "Lan, with AI tools evolving so fast, I'm thinking about upskilling in machine learning and cloud architecture this year.", translation: "Lan ơi, thấy các công nghệ AI phát triển nhanh quá, năm nay mình đang tính nâng cao kỹ năng về học máy và kiến trúc đám mây nè." },
        { participant: 'Lan', text: "That's a fantastic career move Tuan! Did you know our company provides an annual learning stipend for professional certifications?", translation: "Đó là bước đi sự nghiệp rất đúng đắn đó Tuấn! Bạn có biết công ty mình có gói tài trợ học tập hàng năm cho các chứng chỉ chuyên nghiệp không?" },
        { participant: 'Tuan', text: "Really? I didn't realize that was available! How do I submit an application to HR?", translation: "Ủa thật hả bạn? Mình chưa biết có chính sách đó luôn á! Nộp đơn xin tài trợ lên phòng nhân sự thế nào vậy?" },
        { participant: 'Lan', text: "Just fill out the one-page learning development form on our intranet. I'll gladly co-sign it as your mentor!", translation: "Chỉ cần điền mẫu phát triển kỹ năng một trang trên cổng nội bộ thôi. Mình sẽ sẵn lòng ký xác nhận với tư cách người hướng dẫn của bạn!" }
      ]
    },
    {
      type: 'pair',
      school: 'superCasual',
      title: 'Fast Professional Certification Passed Ping',
      participants: [
        { name: 'Duc', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=DucCert', role: 'Colleague' },
        { name: 'Son', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=SonCert', role: 'Colleague' }
      ],
      lines: [
        { participant: 'Duc', text: "Passed the AWS Solutions Architect exam this morning!", translation: "Sáng nay vừa thi đỗ chứng chỉ AWS Solutions Architect rồi nha!" },
        { participant: 'Son', text: "Huge congrats bro! Months of studying paid off.", translation: "Chúc mừng người anh em nha! Mấy tháng cày cuốc cuối cùng cũng hái quả ngọt rồi." },
        { participant: 'Duc', text: "Scores came in at 880/1000! Super pumped.", translation: "Điểm đạt 880/1000 luôn nè! Phấn khởi quá chừng." },
        { participant: 'Son', text: "Time to update your LinkedIn credentials!", translation: "Mau cập nhật lên hồ sơ năng lực LinkedIn liền đi thôi!" }
      ]
    }
  ]
};
