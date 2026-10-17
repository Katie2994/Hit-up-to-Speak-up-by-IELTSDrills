import { Topic } from './types';
import { PROFESSIONALS_DIALOGUES } from './comm-professionals-dialogues';
import { PROFESSIONALS_STRUCTURES } from './comm-professionals-structures';

const rawProfessionals: Topic[] = [
  {
    id: 'pro-01',
    title: 'Self-Introduction in the Office',
    vietnameseTitle: 'Giới thiệu bản thân công sở',
    category: 'Communication',
    subCategory: ['For Professionals'],
    icon: '👔',
    color: '#0A3F7A',
    description: 'Giới thiệu tên, vị trí, phòng ban và kinh nghiệm khi mới onboard, họp phòng ban hoặc gặp gỡ khách hàng, đối tác.',
    words: [
      { id: 'pr1-1', word: 'Onboard', ipa: '/ˌɒnˈbɔːd/', definition: 'Hội nhập, nhận việc và làm quen với môi trường mới.', translation: 'Nhận việc/Hội nhập', example: 'I am excited to onboard as the new project manager today.', blankSentence: 'He will ____ with the marketing team tomorrow.', emoji: '🚀' },
      { id: 'pr1-2', word: 'Point of contact', ipa: '/pɔɪnt əv ˈkɒntækt/', definition: 'Đầu mối liên hệ chính cho một công việc hoặc dự án.', translation: 'Đầu mối liên hệ', example: 'For all technical issues, I will be your primary point of contact.', blankSentence: 'Who is the main ____ for this client account?', emoji: '🗣️' },
      { id: 'pr1-3', word: 'Background', ipa: '/ˈbækɡraʊnd/', definition: 'Nền tảng học vấn và kinh nghiệm làm việc tích lũy.', translation: 'Nền tảng kinh nghiệm', example: 'My professional background is in digital marketing and content strategy.', blankSentence: 'She has a solid ____ in software development.', emoji: '📚' },
      { id: 'pr1-4', word: 'Oversee', ipa: '/ˌəʊvəˈsiː/', definition: 'Giám sát, quản lý và chịu trách nhiệm cho một phòng ban hoặc một mảng việc.', translation: 'Giám sát/Quản lý', example: 'In my new role, I will oversee the customer service department.', blankSentence: 'Our director will ____ the entire launch next week.', emoji: '👁️' },
      { id: 'pr1-5', word: 'Collaborate', ipa: '/kəˈlæbəreɪt/', definition: 'Hợp tác làm việc cùng nhau để đạt mục tiêu chung.', translation: 'Cộng tác/Phối hợp', example: 'I look forward to collaborating with all of you on future projects.', blankSentence: 'We need to ____ closely to finish this report.', emoji: '🤝' }
    ],
    structures: [
      { id: 'str1-1', phrase: 'I am responsible for...', meaning: 'Tôi chịu trách nhiệm về...', vietnamese: 'Dùng để nêu rõ nhiệm vụ công việc.' },
      { id: 'str1-2', phrase: 'I report to [Name/Role]...', meaning: 'Tôi báo cáo trực tiếp cho [Tên/Vị trí]...', vietnamese: 'Dùng để giới thiệu tuyến quản lý trực tiếp.' }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Office Onboarding',
        participants: [
          { name: 'Alex', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex' },
          { name: 'Sarah', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah' }
        ],
        lines: [
          { participant: 'Alex', text: "Hi Sarah! Good morning. I just onboarded today as the new developer on this floor.", translation: "Chào Sarah! Chúc buổi sáng tốt lành. Tôi vừa mới onboard nhận việc hôm nay với vai trò lập trình viên mới ở tầng này." },
          { participant: 'Sarah', text: "Welcome aboard, Alex! I am Sarah, and I will be your primary point of contact for our department.", translation: "Chào mừng bạn gia nhập team, Alex! Tôi là Sarah, và tôi sẽ là đầu mối liên hệ chính của bạn ở bộ phận này." },
          { participant: 'Alex', text: "Nice to meet you in person. My professional background is in React, and I report to John.", translation: "Rất vui được gặp trực tiếp bạn. Nền tảng kinh nghiệm chuyên môn của tôi là về React, và tôi báo cáo trực tiếp cho John." },
          { participant: 'Sarah', text: "Fantastic. John oversees the whole web platform team. I look forward to collaborating with you on our next project!", translation: "Tuyệt quá. John quản lý toàn bộ nhóm nền tảng web. Tôi rất mong được hợp tác cùng bạn trong dự án tiếp theo!" }
        ]
      }
    ]
  },
  {
    id: 'pro-02',
    title: 'Daily Chat with Colleagues',
    vietnameseTitle: 'Giao tiếp hằng ngày với đồng nghiệp',
    category: 'Communication',
    subCategory: ['For Professionals'],
    icon: '☕',
    color: '#0E6251',
    description: 'Chào hỏi buổi sáng, small talk, mượn đồ dùng cá nhân, hỏi thăm tiến độ nhẹ nhàng và cách kết thân đồng nghiệp mới.',
    words: [
      { id: 'pr2-1', word: 'Catch up', ipa: '/kætʃ ʌp/', definition: 'Hàn huyên, cập nhật tin tức hoặc bàn chuyện cũ sau một thời gian.', translation: 'Trò chuyện/Cập nhật', example: 'Let’s grab a coffee and catch up during lunch break.', blankSentence: 'We must ____ on your latest trip.', emoji: '💬' },
      { id: 'pr2-2', word: 'Favor', ipa: '/ˈfeɪvə(r)/', definition: 'Sự giúp đỡ, nhờ vả một việc gì đó.', translation: 'Việc giúp đỡ', example: 'Can I ask you a quick favor? Could you check this email for me?', blankSentence: 'Would you do me a ____ and print this file?', emoji: '🙋' },
      { id: 'pr2-3', word: 'Borrow', ipa: '/ˈbɒrəʊ/', definition: 'Mượn đồ dùng từ ai đó và có ý định trả lại.', translation: 'Mượn đồ', example: 'Do you mind if I borrow your phone charger for an hour?', blankSentence: 'Can I ____ this dry erase marker?', emoji: '🔌' },
      { id: 'pr2-4', word: 'Settle in', ipa: '/ˈsetl ɪn/', definition: 'Trở nên thoải mái, quen thuộc với môi trường phòng ban mới.', translation: 'Thích nghi/Ổn định', example: 'Are you settling in well with the new desk setup?', blankSentence: 'It took him a week to ____ at the office.', emoji: '📦' },
      { id: 'pr2-5', word: 'Chit-chat', ipa: '/ˈtʃɪt tʃæt/', definition: 'Đoạn tán gẫu ngắn về các chủ đề nhẹ nhàng phi công việc.', translation: 'Tán gẫu/Nói chuyện phiếm', example: 'We had a brief chit-chat near the water cooler this morning.', blankSentence: 'No more ____, we need to focus!', emoji: '🗣️' }
    ],
    structures: [
      { id: 'str2-1', phrase: 'How is your day treating you?', meaning: 'Ngày hôm nay của bạn thế nào?', vietnamese: 'Lời hỏi thăm lịch sự, tự nhiên hơn "How are you?".' },
      { id: 'str2-2', phrase: 'Mind if I...?', meaning: 'Bạn có phiền nếu tôi... không?', vietnamese: 'Cách xin mượn đồ hoặc làm gì đó cực kỳ lịch sự.' }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Daily Office Small Talk',
        participants: [
          { name: 'Mark', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mark' },
          { name: 'Emily', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emily' }
        ],
        lines: [
          { participant: 'Mark', text: "Hey Emily! How is your day treating you so far?", translation: "Chào Emily! Ngày hôm nay của bạn thế nào rồi?" },
          { participant: 'Emily', text: "Hi Mark! It is busy but good. Are you settling in well at your new desk?", translation: "Chào Mark! Tuy hơi bận rộn nhưng ổn cả. Bạn đã thích nghi và làm quen tốt với góc làm việc mới chưa?" },
          { participant: 'Mark', text: "Yes, fully settling in. Hey, can I ask you a quick favor? Mind if I borrow your phone charger for an hour?", translation: "Rồi, tớ thích nghi tốt lắm. Này, tôi nhờ chút việc được không? Bạn có phiền nếu tôi mượn cục sạc điện thoại của bạn một tiếng không?" },
          { participant: 'Emily', text: "Sure, go ahead! Let's grab a coffee and catch up properly during our lunch break.", translation: "Chắc chắn rồi, bạn cứ lấy đi! Trưa nay đi cafe rồi hàn huyên tâm sự kỹ hơn trong giờ nghỉ nhen." }
        ]
      }
    ]
  },
  {
    id: 'pro-03',
    title: 'Meetings & Job Discussions',
    vietnameseTitle: 'Họp hành & Trao đổi công việc',
    category: 'Communication',
    subCategory: ['For Professionals'],
    icon: '📅',
    color: '#78281F',
    description: 'Cách đặt lịch, dời lịch họp, mở đầu trình bày ý chính, đặt câu hỏi làm rõ vấn đề và cách phản đối lịch sự trong phòng họp.',
    words: [
      { id: 'pr3-1', word: 'Schedule', ipa: '/ˈʃedjuːl/', definition: 'Sắp xếp, lên lịch hoặc đặt khung thời gian cho cuộc họp.', translation: 'Lên lịch họp', example: 'I will schedule a sync meeting for tomorrow afternoon.', blankSentence: 'Can we ____ a call for next Tuesday?', emoji: '🗓️' },
      { id: 'pr3-2', word: 'Reschedule', ipa: '/ˌriːˈʃedjuːl/', definition: 'Dời lịch, đổi thời gian họp sang một khung giờ khác.', translation: 'Dời lịch họp', example: 'Since John is sick, we need to reschedule the weekly demo.', blankSentence: 'Let’s ____ our appointment to Friday.', emoji: '🔄' },
      { id: 'pr3-3', word: 'Takeaway', ipa: '/ˈteɪkəweɪ/', definition: 'Ý chính, bài học cốt lõi hoặc hành động cần làm rút ra sau cuộc họp.', translation: 'Ý cốt lõi/Điểm mấu chốt', example: 'The main takeaway from today’s brainstorm is to simplify our UI.', blankSentence: 'What are the key ____s from the presentation?', emoji: '💡' },
      { id: 'pr3-4', word: 'Interject', ipa: '/ˌɪntəˈdʒekt/', definition: 'Xen ngang một cách khéo léo để đóng góp bổ sung ý kiến.', translation: 'Bổ sung ý/Xen ngang', example: 'If I may interject, I think we should also consider the budget.', blankSentence: 'Excuse me for a moment, let me ____ here.', emoji: '🙋' },
      { id: 'pr3-5', word: 'Respectfully disagree', ipa: '/rɪˈspektfəli ˌdɪsəˈɡriː/', definition: 'Bày tỏ sự không đồng tình nhưng với thái độ cực kỳ tôn trọng.', translation: 'Không đồng ý một cách lịch sự', example: 'I respectfully disagree with the estimate; it might take longer.', blankSentence: 'I have to ____ with that particular approach.', emoji: '🤝' }
    ],
    structures: [
      { id: 'str3-1', phrase: 'Let\'s get the ball rolling.', meaning: 'Cùng bắt đầu thảo luận/làm việc thôi.', vietnamese: 'Cách mở đầu cuộc họp tràn đầy năng lượng.' },
      { id: 'str3-2', phrase: 'Could you elaborate on...?', meaning: 'Bạn có thể làm rõ/nói chi tiết về... không?', vietnamese: 'Được dùng để yêu cầu đồng nghiệp giải thích chi tiết hơn.' }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Weekly Sync Meeting',
        participants: [
          { name: 'David', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=David' },
          { name: 'Chloe', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Chloe' }
        ],
        lines: [
          { participant: 'David', text: "Good morning everyone. Let's get the ball rolling with our monthly brainstorm.", translation: "Chào buổi sáng mọi người. Cùng bắt đầu cuộc họp thảo luận ý tưởng hàng tháng thôi nào." },
          { participant: 'Chloe', text: "Actually, David, since John is sick, could we reschedule the budget presentation to Friday?", translation: "Thực ra anh David ơi, vì anh John đang ốm, chúng ta dời lịch họp trình bày ngân sách sang thứ Sáu được không?" },
          { participant: 'David', text: "That is fine. But regarding our current UI layout, could you elaborate on the core changes?", translation: "Được chứ. Nhưng liên quan đến bố cục UI hiện tại, em có thể làm rõ thêm về những thay đổi cốt lõi không?" },
          { participant: 'Chloe', text: "If I may interject, I respectfully disagree with simplifying it too much, as clients prefer rich details.", translation: "Nếu tôi có thể xen ngang một chút, tôi xin phép không đồng ý với việc đơn giản hóa quá mức, vì khách hàng chuộng chi tiết phong phú hơn." }
        ]
      }
    ]
  },
  {
    id: 'pro-04',
    title: 'Professional Email & Chat Platforms',
    vietnameseTitle: 'Viết email & nhắn tin công việc',
    category: 'Communication',
    subCategory: ['For Professionals'],
    icon: '📧',
    color: '#1A5276',
    description: 'Cách viết email ngắn gọn, trình bày thông điệp lịch sự. Nhắn tin nhanh trên Slack, Teams, Zalo để nhắc nhở và xin khất khéo.',
    words: [
      { id: 'pr4-1', word: 'Keep in the loop', ipa: '/kiːp ɪn ðə luːp/', definition: 'Giữ cho ai đó luôn cập nhật thông tin và tiến trình mới nhất.', translation: 'Luôn cập nhật thông tin', example: 'Please keep me in the loop regarding the client’s feedback.', blankSentence: 'The boss wants us to ____ him ____.', emoji: '🔄' },
      { id: 'pr4-2', word: 'Follow up', ipa: '/ˈfɒləʊ ʌp/', definition: 'Theo sát, liên hệ lại để cập nhật kết quả hoặc thúc tiến độ.', translation: 'Liên hệ lại/Bám sát', example: 'I will follow up with the logistics team to check the shipment.', blankSentence: 'Don\'t forget to ____ on this invoice.', emoji: '🔍' },
      { id: 'pr4-3', word: 'ASAP', ipa: '/ˌeɪ es eɪ ˈpiː/', definition: 'Làm việc gì đó càng nhanh càng tốt.', translation: 'Càng sớm càng tốt', example: 'Please review the attached contract and sign it ASAP.', blankSentence: 'The design files need to be delivered ____.', emoji: '⚡' },
      { id: 'pr4-4', word: 'Decline', ipa: '/dɪˈklaɪn/', definition: 'Từ chối một cách lịch sự và chuyên nghiệp.', translation: 'Từ chối khéo', example: 'Unfortunately, I must decline the invitation due to tight schedules.', blankSentence: 'I had to ____ the additional task request.', emoji: '❌' },
      { id: 'pr4-5', word: 'Postpone', ipa: '/pəʊˈspəʊn/', definition: 'Hoãn thời hạn hoặc thay đổi lịch dự kiến lùi lại phía sau.', translation: 'Hoãn lại', example: 'We have deciding to postpone the system deployment until next Tuesday.', blankSentence: 'Should we ____ the marketing campaign launch?', emoji: '⏳' }
    ],
    structures: [
      { id: 'str4-1', phrase: 'Hope this email finds you well.', meaning: 'Hy vọng email này tìm thấy bạn trong trạng thái tốt lành.', vietnamese: 'Lời chào xã giao siêu phổ biến ở đầu email.' },
      { id: 'str4-2', phrase: 'Just checking in to see...', meaning: 'Tôi chỉ nhắn tin để xem thử...', vietnamese: 'Cách mở đầu tin nhắn Slack/Teams rất tự nhiên và thân thiện.' }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Chat Over Slack/Teams',
        participants: [
          { name: 'Tina', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tina' },
          { name: 'Leo', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Leo' }
        ],
        lines: [
          { participant: 'Tina', text: "Hey Leo, just checking in to see if you reviewed the client contract.", translation: "Chào Leo, tớ nhắn tin xem thử cậu đã kiểm duyệt hợp đồng của đối tác chưa." },
          { participant: 'Leo', text: "Hey Tina! Sorry, my client meeting was prolonged, so I had to decline the invitation to review it earlier.", translation: "Chào Tina! Xin lỗi nhé, cuộc họp khách hàng của tớ bị kéo dài quá, nên tớ buộc phải từ chối lời mời duyệt sớm hơn." },
          { participant: 'Tina', text: "No worries! Please keep me in the loop and follow up once you have the signed copy.", translation: "Không sao cả! Có gì cập nhật thông tin và bám sát liên hệ lại ngay khi cậu có bản ký nhen." },
          { participant: 'Leo', text: "Sure thing! I will review it ASAP, as we shouldn't postpone this deployment past Tuesday.", translation: "Nhất trí luôn! Tớ sẽ duyệt càng sớm càng tốt (ASAP), vì tụi mình không nên hoãn lịch triển khai này quá thứ Ba tuần sau." }
        ]
      }
    ]
  },
  {
    id: 'pro-05',
    title: 'Reporting & Managing Up',
    vietnameseTitle: 'Báo cáo & Làm việc với quản lý',
    category: 'Communication',
    subCategory: ['For Professionals'],
    icon: '📊',
    color: '#5F4B8B',
    description: 'Trình bày tiến độ, kết quả công việc, khéo léo báo cáo sự cố hư hại, xin chỉ đạo từ sếp và cách phản hồi khi bị nhắc nhở.',
    words: [
      { id: 'pr5-1', word: 'Progress report', ipa: '/ˈprəʊɡres rɪˈpɔːt/', definition: 'Bản báo cáo chi tiết về tiến độ dự án đang chạy.', translation: 'Báo cáo tiến độ', example: 'I will submit my weekly progress report by 5 PM today.', blankSentence: 'The CEO requested a detailed ____.', emoji: '📈' },
      { id: 'pr5-2', word: 'Setback', ipa: '/ˈsetbæk/', definition: 'Trở ngại, sự cố ngoài ý muốn làm trì hoãn tiến độ công việc.', translation: 'Sự cố/Trở ngại', example: 'We hit a technical setback, but the developers are fixing it now.', blankSentence: 'Don\'t worry, this is only a temporary ____.', emoji: '⚠️' },
      { id: 'pr5-3', word: 'Guidance', ipa: '/ˈɡaɪdns/', definition: 'Sự chỉ đạo, dìu dắt, tư vấn định hướng từ cấp quản lý.', translation: 'Sự chỉ đạo/Hướng dẫn', example: 'I would highly appreciate your guidance on dealing with this budget limit.', blankSentence: 'Under her ____, the team succeeded.', emoji: '🎯' },
      { id: 'pr5-4', word: 'Deliverable', ipa: '/dɪˈlɪvərəbl/', definition: 'Sản phẩm, kết quả đầu ra cụ thể cần bàn giao theo cam kết.', translation: 'Sản phẩm bàn giao', example: 'We must verify all deliverables before sending them to the client.', blankSentence: 'The project has three main ____s.', emoji: '📦' },
      { id: 'pr5-5', word: 'Constructive criticism', ipa: '/kənˈstrʌktɪv ˈkrɪtɪsɪzəm/', definition: 'Góp ý thẳng thắn nhưng mang tính xây dựng cao để giúp tiến bộ.', translation: 'Phê bình mang tính xây dựng', example: 'I always welcome constructive criticism from my manager.', blankSentence: 'He gave me some ____ on my pitch deck.', emoji: '🛠️' }
    ],
    structures: [
      { id: 'str5-1', phrase: 'I wanted to run this by you...', meaning: 'Tôi muốn thông qua/tham khảo ý kiến của bạn về việc này...', vietnamese: 'Dùng khi muốn hỏi ý kiến cấp trên trước khi quyết định.' },
      { id: 'str5-2', phrase: 'I will take ownership of this.', meaning: 'Tôi chịu trách nhiệm xử lý dứt điểm việc này.', vietnamese: 'Thể hiện tinh thần chủ động cao trước quản lý.' }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Reporting to the Manager',
        participants: [
          { name: 'Rachel', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Rachel' },
          { name: 'Boss', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Boss' }
        ],
        lines: [
          { participant: 'Rachel', text: "Good afternoon. I wanted to run this new project design by you before finalizing the progress report.", translation: "Dạ em chào sếp. Em muốn thông qua/tham khảo ý kiến của sếp về bản thiết kế dự án mới này trước khi hoàn thành báo cáo tiến độ ạ." },
          { participant: 'Boss', text: "Excellent. How are we handling the recent server setback we encountered on Monday?", translation: "Rất tốt. Thế chúng ta đang xử lý thế nào với sự cố máy chủ gần đây gặp phải vào hôm thứ Hai thế em?" },
          { participant: 'Rachel', text: "I will take ownership of this. I am already coordinating with engineering to ensure our deliverables are met.", translation: "Em xin chịu trách nhiệm xử lý dứt điểm việc này ạ. Em đang phối hợp với đội kỹ thuật để đảm bảo bàn giao đúng hạn cam kết." },
          { participant: 'Boss', text: "Happy to hear that. I will provide some constructive criticism and guidance on the budget tomorrow.", translation: "Sếp rất vui khi thấy tinh thần chủ động đó. Mai sếp sẽ hướng dẫn và đưa một vài góp ý mang tính xây dựng về chi phí nhen." }
        ]
      }
    ]
  },
  {
    id: 'pro-06',
    title: 'Teamwork & Cross-department Projects',
    vietnameseTitle: 'Làm việc nhóm & Liên phòng ban',
    category: 'Communication',
    subCategory: ['For Professionals'],
    icon: '🤝',
    color: '#6E2C00',
    description: 'Phân công nhiệm vụ, chốt deadline, cách thảo luận phương án, xử lý hiểu lầm giữa các phòng ban và đưa/nhận feedback.',
    words: [
      { id: 'pr6-1', word: 'Delegate', ipa: '/ˈdelɪɡeɪt/', definition: 'Giao phó, chia nhỏ và phân công nhiệm vụ cho đúng người chịu trách nhiệm.', translation: 'Giao phó/Phân công', example: 'As the leader, you should learn to delegate tasks effectively.', blankSentence: 'I am going to ____ this part of the project to Mary.', emoji: '📌' },
      { id: 'pr6-2', word: 'Cross-functional', ipa: '/krɒs ˈfʌŋkʃənl/', definition: 'Liên quan hoặc phối hợp của nhiều ban ngành, bộ phận khác nhau.', translation: 'Liên phòng ban/Đa chức năng', example: 'We formed a cross-functional group to tackle the branding overhaul.', blankSentence: 'This initiative requires a ____ effort.', emoji: '🔗' },
      { id: 'pr6-3', word: 'Misunderstanding', ipa: '/ˌmɪsʌndəˈstændɪŋ/', definition: 'Sự hiểu lầm, không thấu hiểu ý nhau dẫn tới sai sót.', translation: 'Sự hiểu lầm', example: 'A minor misunderstanding caused the project deadline delay.', blankSentence: 'Let\'s clarify the terms to avoid any ____.', emoji: '🤷' },
      { id: 'pr6-4', word: 'Feedback loop', ipa: '/ˈfiːdbæk luːp/', definition: 'Chu trình lấy ý kiến phản hồi liên tục để sửa đổi hoàn thiện sản phẩm.', translation: 'Quy trình phản hồi xoay vòng', example: 'Establishing a tight feedback loop helps us fix bugs quickly.', blankSentence: 'We want to shorten the ____ with end-users.', emoji: '🔁' },
      { id: 'pr6-5', word: 'Alignment', ipa: '/əˈlaɪnmənt/', definition: 'Sự đồng thuận, thống nhất quan điểm và hướng đi giữa các bộ phận.', translation: 'Sự thống nhất/Đồng hành', example: 'We need to reach alignment on the launch date before making it public.', blankSentence: 'This ensures ____ with corporate goals.', emoji: '🎯' }
    ],
    structures: [
      { id: 'str6-1', phrase: 'Who is taking the lead on this?', meaning: 'Ai sẽ là người chủ trì/chỉ đạo phần này?', vietnamese: 'Được dùng để làm rõ trách nhiệm của từng cá nhân.' },
      { id: 'str6-2', phrase: 'We need to make sure we are on the same page.', meaning: 'Chúng ta cần đảm bảo rằng tất cả đều hiểu thống nhất như nhau.', vietnamese: 'Câu nói vàng để giữ sự đồng hành trong dự án.' }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Cross-functional Collaboration',
        participants: [
          { name: 'James', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=James' },
          { name: 'Emma', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Emma' }
        ],
        lines: [
          { participant: 'James', text: "We need to make sure we are on the same page before starting this cross-functional campaign.", translation: "Chúng ta cần đảm bảo rằng tất cả đều hiểu thống nhất như nhau trước khi khởi động chiến dịch liên phòng ban này nhe." },
          { participant: 'Emma', text: "I agree. Who is taking the lead on matching the branding design assets?", translation: "Nhất trí luôn. Thế ai sẽ là người chủ trì/chỉ đạo phần khớp các tài nguyên thiết kế thương hiệu thế nhỉ?" },
          { participant: 'James', text: "I will delegate that to Mary. That should avoid any minor misunderstanding between marketing and sales.", translation: "Tớ sẽ giao phó việc đó cho Mary. Làm thế sẽ tránh được mấy cái hiểu lầm lặt vặt giữa phòng marketing và sales." },
          { participant: 'Emma', text: "Perfect. Let's maintain a tight feedback loop to reach total alignment on our delivery targets.", translation: "Tuyệt quá. Tụi mình duy trì quy trình phản hồi liên tục để đạt được sự thống nhất tuyệt đối về mục tiêu bàn giao nhé." }
        ]
      }
    ]
  },
  {
    id: 'pro-07',
    title: 'Client & Partner Relations',
    vietnameseTitle: 'Khách hàng & Bán hàng',
    category: 'Communication',
    subCategory: ['For Professionals'],
    icon: '💼',
    color: '#1B4F72',
    description: 'Giới thiệu dịch vụ, lắng nghe nhu cầu của đối tác, đặt câu hỏi đào sâu, xử lý phàn nàn và chốt thỏa thuận lịch thiệp.',
    words: [
      { id: 'pr7-1', word: 'Prospect', ipa: '/ˈprɒspekt/', definition: 'Đối tượng hoặc doanh nghiệp có khả năng cao trở thành khách hàng của ta.', translation: 'Khách hàng triển vọng', example: 'She is calling professional prospects to present our new SaaS product.', blankSentence: 'Our sales pipeline has many warm ____s.', emoji: '🎯' },
      { id: 'pr7-2', word: 'Clarify', ipa: '/ˈklærɪfaɪ/', definition: 'Làm sáng tỏ thông tin chưa rõ ràng hoặc đưa thêm lời giải thích.', translation: 'Làm rõ/Xác nhận lại', example: 'Let me clarify the warranty options we offer under contract B.', blankSentence: 'Could you help ____ this requirement?', emoji: '🔍' },
      { id: 'pr7-3', word: 'Grievance', ipa: '/ˈɡriːvəns/', definition: 'Nỗi bất bình, lời phàn nàn chính thức từ phía đối tác/khách hàng.', translation: 'Ý kiến phàn nàn', example: 'We have set up an online portal to address client grievances fast.', blankSentence: 'Our support desk is handling a major ____.', emoji: '🗣️' },
      { id: 'pr7-4', word: 'Compromise', ipa: '/ˈkɒmprəmaɪz/', definition: 'Giải pháp dung hòa, đôi bên cùng nhường một chút để đạt thỏa thuận.', translation: 'Sự thỏa hiệp/Thỏa thuận', example: 'After hours of negotiation, we reached a compromise on the pricing.', blankSentence: 'It is important to find a ____ that works for both.', emoji: '🤝' },
      { id: 'pr7-5', word: 'Wrap up', ipa: '/ræp ʌp/', definition: 'Kết thúc, tóm tắt và khép lại buổi gặp gỡ hoặc cuộc trò chuyện.', translation: 'Tổng kết/Khép lại', example: 'Let’s wrap up our meeting today by summarizing the next actions.', blankSentence: 'We need to ____ the call before 11 AM.', emoji: '👔' }
    ],
    structures: [
      { id: 'str7-1', phrase: 'What are your core expectations?', meaning: 'Mong đợi lớn nhất/cốt lõi của anh/chị là gì?', vietnamese: 'Câu hỏi thấu hiểu sâu sắc nhu cầu đối tác.' },
      { id: 'str7-2', phrase: 'I will personally look into this issue.', meaning: 'Tôi sẽ tự mình đi kiểm tra và giải quyết vấn đề này.', vietnamese: 'Khẳng định uy tín cá nhân khi đối mặt khiếu nại.' }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Meeting with a Client',
        participants: [
          { name: 'Victor', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Victor' },
          { name: 'Lisa', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa' }
        ],
        lines: [
          { participant: 'Victor', text: "Welcome to our office, Ms. Lisa. To start, what are your core expectations for our SaaS system?", translation: "Chào mừng chị Lisa đã đến văn phòng của chúng tôi. Đầu tiên, mong đợi cốt lõi/lớn nhất của chị đối với hệ thống SaaS của chúng tôi là gì ạ?" },
          { participant: 'Lisa', text: "We need high system uptime. Also, let me clarify our main grievance with your previous service package.", translation: "Chúng tôi cần hệ thống hoạt động ổn định liên tục. Nhân đây, tôi cũng muốn làm rõ khiếu nại chính của bên tôi đối với gói dịch vụ trước của các bạn." },
          { participant: 'Victor', text: "I will personally look into this issue. We aim to offer a fair compromise on pricing for our warm prospects.", translation: "Tôi sẽ tự mình đi kiểm tra và giải quyết dứt điểm vấn đề này ạ. Chúng tôi luôn muốn đưa ra một mức thỏa hiệp dung hòa về giá cả cho các khách hàng triển vọng." },
          { participant: 'Lisa', text: "That sounds reassuring. Let’s wrap up our talk by detailing the contract terms.", translation: "Nghe vậy tôi thấy yên tâm rồi. Vậy chúng ta khép lại buổi trao đổi bằng cách thống kê chi tiết các điều khoản hợp đồng nhe." }
        ]
      }
    ]
  },
  {
    id: 'pro-08',
    title: 'Interviews & Performance Reviews',
    vietnameseTitle: 'Phỏng vấn & Đánh giá hiệu suất',
    category: 'Communication',
    subCategory: ['For Professionals'],
    icon: '📝',
    color: '#117864',
    description: 'Tự giới thiệu trong phỏng vấn, trình bày điểm mạnh, điểm yếu, phản hồi trong buổi đánh giá KPI và khéo léo đề xuất tăng lương.',
    words: [
      { id: 'pr8-1', word: 'Accomplishment', ipa: '/əˈkʌmplɪʃmənt/', definition: 'Thành tựu ấn tượng đạt được nhờ nỗ lực và năng lực cá nhân.', translation: 'Thành tựu nổi bật', example: 'My biggest accomplishment was driving a 40% increase in lead generation.', blankSentence: 'List your top three ____s here.', emoji: '🏆' },
      { id: 'pr8-2', word: 'Shortcoming', ipa: '/ˈʃɔːtkʌmɪŋ/', definition: 'Thiếu sót, điểm chưa hoàn thiện trong công việc hoặc kỹ năng.', translation: 'Thiếu sót/Đoản điểm', example: 'I recognize my shortcomings in public speaking and am actively upskilling.', blankSentence: 'How do you plan to overcome this ____?', emoji: '🔍' },
      { id: 'pr8-3', word: 'Performance review', ipa: '/pəˈfɔːməns rɪˈvjuː/', definition: 'Buổi làm việc chính thức để đánh giá hiệu quả đóng góp công việc hằng năm.', translation: 'Đánh giá hiệu suất', example: 'I have my quarterly performance review with the CEO this afternoon.', blankSentence: 'The manager conducts the ____ tomorrow.', emoji: '📊' },
      { id: 'pr8-4', word: 'Promotion', ipa: '/prəˈməʊʃn/', definition: 'Sự thăng chức lên vị trí cao hơn và đảm nhận nhiều trách nhiệm hơn.', translation: 'Thăng chức', example: 'He is hoping for a promotion to lead architect after the release.', blankSentence: 'Congratulations on your well-deserved ____!', emoji: '📈' },
      { id: 'pr8-5', word: 'Compensation', ipa: '/ˌkɒmpenˈseɪʃn/', definition: 'Toàn bộ thù lao nhận được, bao gồm lương cứng và các phúc lợi đi kèm.', translation: 'Chế độ lương bổng/Đãi ngộ', example: 'The company offers attractive compensation packages for top talent.', blankSentence: 'We negotiated the financial ____ with HR.', emoji: '💰' }
    ],
    structures: [
      { id: 'str8-1', phrase: 'I have a proven track record of...', meaning: 'Tôi có bề dày thành tích được chứng minh trong việc...', vietnamese: 'Mẫu câu cực mạnh nâng cấp CV và thể hiện uy tín lúc phỏng vấn.' },
      { id: 'str8-2', phrase: 'Based on my contributions, I would like to discuss...', meaning: 'Dựa trên các đóng góp của mình, tôi muốn thảo luận về...', vietnamese: 'Cách mở lời đàm phán thăng tiến hoặc xin tăng lương khéo léo.' }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Professional Job Interview',
        participants: [
          { name: 'Chris', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Chris' },
          { name: 'Helen', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Helen' }
        ],
        lines: [
          { participant: 'Chris', text: "Good morning. I have a proven track record of driving a forty percent increase in software sales.", translation: "Kính chào anh/chị. Tôi có bề dày thành tích được chứng minh trong việc thúc đẩy doanh số bán phần mềm tăng 40% ạ." },
          { participant: 'Helen', text: "Impressive accomplishment! What would you say is your main shortcoming as a professional?", translation: "Thành tựu nổi bật thật ấn tượng! Thế theo bạn điểm chưa hoàn thiện/thiếu sót lớn nhất của bạn trong công việc là gì?" },
          { participant: 'Chris', text: "Based on my contributions, I would like to discuss the future career path and compensation structure.", translation: "Dựa trên những đóng góp và năng lực của mình, em rất mong được thảo luận về lộ trình sự nghiệp và cơ cấu đãi ngộ lương bổng của công ty." },
          { participant: 'Helen', text: "We will evaluate that thoroughly during our periodic performance review. A promotion is highly achievable here.", translation: "Chúng tôi đứng ở góc độ quản lý sẽ luôn đánh giá kỹ lưỡng vấn đề đó trong buổi xem xét hiệu suất định kỳ. Cơ hổi thăng chức ở đây luôn mở rộng cho bạn." }
        ]
      }
    ]
  },
  {
    id: 'pro-09',
    title: 'Networking & Industry Events',
    vietnameseTitle: 'Networking & Hội thảo nghề nghiệp',
    category: 'Communication',
    subCategory: ['For Professionals'],
    icon: '🤝',
    color: '#7D6608',
    description: 'Cách phá băng bắt chuyện tại sự kiện, trao đổi danh thiếp, kết nối LinkedIn, đặt câu hỏi sau bài phát biểu và giữ liên lạc.',
    words: [
      { id: 'pr9-1', word: 'Break the ice', ipa: '/breɪk ðə aɪs/', definition: 'Làm dịu bầu không khí ngượng ngùng lúc mới gặp người lạ.', translation: 'Phá vỡ sự e ngại', example: 'I tried to break the ice by asking about his thoughts on the opening speech.', blankSentence: 'A light joke is a great way to ____.', emoji: '🧊' },
      { id: 'pr9-2', word: 'Exchange contacts', ipa: '/ɪksˈtʃeɪndʒ ˈkɒntækts/', definition: 'Trao đổi số điện thoại, email hoặc namecard để giữ kết nối.', translation: 'Trao đổi phương thức liên lạc', example: 'Before we left, we took a moment to exchange contacts and connect on LinkedIn.', blankSentence: 'Let\'s ____ so we can talk further.', emoji: '📇' },
      { id: 'pr9-3', word: 'Inquire', ipa: '/ɪnˈkwaɪə(r)/', definition: 'Đặt câu hỏi thăm dò tìm kiếm thông tin chi tiết một cách trang trọng.', translation: 'Đặt câu hỏi/Hỏi thăm', example: 'I would like to inquire about the potential vacancies in your R&D branch.', blankSentence: 'Many attendees rose to ____ about the new technology.', emoji: '🗣️' },
      { id: 'pr9-4', word: 'Follow-up email', ipa: '/ˈfɒləʊ ʌp ˈiːmeɪl/', definition: 'Thư viết để nhắc lại mối quan hệ đã bắt chuyện sau sự kiện kết thúc.', translation: 'Thư duy trì liên lạc', example: 'Sending a follow-up email within 24 hours shows high enthusiasm.', blankSentence: 'I draft a ____ to the company manager.', emoji: '✉️' },
      { id: 'pr9-5', word: 'Mutual connection', ipa: '/ˈmjuːtʃuəl kəˈnekʃn/', definition: 'Người quen chung của cả hai người khi trò chuyện giao lưu.', translation: 'Mối quan hệ chung', example: 'We discovered we have a mutual connection at Microsoft.', blankSentence: 'Having a ____ helps build trust.', emoji: '🔗' }
    ],
    structures: [
      { id: 'str9-1', phrase: 'What brings you to this event today?', meaning: 'Cơ duyên nào đưa anh/chị đến với sự kiện hôm nay thế?', vietnamese: 'Câu khởi đầu hội thoại lịch sự, thân mật bậc nhất tại hội thảo.' },
      { id: 'str9-2', phrase: 'Let\'s stay in touch.', meaning: 'Chúng ta hãy duy trì liên lạc nhé.', vietnamese: 'Câu tóm tắt trước khi dừng cuộc đối thoại ở sảnh tiệc.' }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Networking at a Tech Seminar',
        participants: [
          { name: 'Peter', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Peter' },
          { name: 'Sophia', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sophia' }
        ],
        lines: [
          { participant: 'Peter', text: "Hi there! I am Peter. What brings you to this awesome industry event today?", translation: "Xin chào bạn! Tôi là Peter. Cơ duyên nào đưa bạn đến với sự kiện ngành tuyệt vời ngày hôm nay thế?" },
          { participant: 'Sophia', text: "Hi Peter! I wanted to check out the new tech trends. It's a nice place to break the ice with fellow engineers.", translation: "Chào Peter! Mình đến đây để xem các xu hướng công nghệ mới. Đúng là nơi lý tưởng để trò chuyện làm quen với đồng nghiệp kỹ sư nhỉ." },
          { participant: 'Peter', text: "Absolutely. I found out we actually have a mutual connection at Microsoft. Let's stay in touch.", translation: "Hoàn toàn đồng ý. Mình vừa phát hiện ra tụi mình có một mối quan hệ/người quen chung ở Microsoft đó. Hãy giữ liên lạc nhé." },
          { participant: 'Sophia', text: "Sure! Let's exchange contacts, and I will keep an eye out for your follow-up email.", translation: "Nhất trí luôn! Tụi mình trao đổi phương thức liên lạc đi, mình sẽ chờ nhận email duy trì liên lạc từ bạn nhe." }
        ]
      }
    ]
  },
  {
    id: 'pro-10',
    title: 'Multicultural Workplace Ethics',
    vietnameseTitle: 'Văn hóa sở làm đa quốc gia',
    category: 'Communication',
    subCategory: ['For Professionals'],
    icon: '🌐',
    color: '#4A235A',
    description: 'Cách làm việc với sếp/đồng nghiệp nước ngoài, trò chuyện về khác biệt múi giờ, phong cách làm việc và lịch thiệp xuyên quốc gia.',
    words: [
      { id: 'pr10-1', word: 'Cultural barrier', ipa: '/ˈkʌltʃərəl ˈbæriə(r)/', definition: 'Khoảng cách, rào cản do khác biệt biệt về phong tục và giá trị văn hóa.', translation: 'Rào cản văn hóa', example: 'Open-minded active listening helps overcome any cultural barrier.', blankSentence: 'She worked hard to bridge the ____ at the office.', emoji: '🚧' },
      { id: 'pr10-2', word: 'Time zone difference', ipa: '/taɪm zəʊn ˈdɪfrəns/', definition: 'Sự chênh lệch phát sinh do địa lý gây lệch giờ giấc sinh hoạt.', translation: 'Mối chênh lệch múi giờ', example: 'Because of the time zone difference, our US sync call is set at 9 PM.', blankSentence: 'We must plan meetings around the ____.', emoji: '⏰' },
      { id: 'pr10-3', word: 'Work style', ipa: '/wɜːk staɪl/', definition: 'Phong thái ứng xử, phương pháp xử lý công việc ưa thích của mỗi người.', translation: 'Phong cách làm việc', example: 'Some managers favor a collaborative work style over micro-management.', blankSentence: 'Understanding each other\'s ____ is key.', emoji: '👤' },
      { id: 'pr10-4', word: 'Inclusive', ipa: '/ɪnˈkluːsɪv/', definition: 'Không phân biệt đối xử, chào đón mọi sự khác biệt và quan điểm.', translation: 'Hài hòa/Cởi mở tôn trọng', example: 'The enterprise aims to cultivate an inclusive, safe workplace for all.', blankSentence: 'We want to make our company culture more ____.', emoji: '🌍' },
      { id: 'pr10-5', word: 'Etiquette', ipa: '/ˈetɪket/', definition: 'Quy tắc ứng xử lịch thiệp, chuẩn mực chuẩn mực xã hội được tôn trọng.', translation: 'Quy tắc xã giao/Nghi thức', example: 'Business etiquette varies significantly across APAC territories.', blankSentence: 'Online ____ and chat manners are vital.', emoji: '🤝' }
    ],
    structures: [
      { id: 'str10-1', phrase: 'In our culture, we tend to...', meaning: 'Trong văn hóa của chúng tôi, mọi người thường có xu hướng...', vietnamese: 'Giúp giải thích các thói quen địa phương cho đối tác ngoại quốc.' },
      { id: 'str10-2', phrase: 'Does this timing work for you?', meaning: 'Khung giờ này có thuận tiện cho anh/chị không?', vietnamese: 'Điều phối đặt lịch họp tối ưu khi lệch múi giờ.' }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Global Team Time-zone Sync',
        participants: [
          { name: 'Kenji', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kenji' },
          { name: 'Sarah', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah' }
        ],
        lines: [
          { participant: 'Kenji', text: "Hi Sarah. Since we have a big time zone difference, does this timing work for you?", translation: "Chào Sarah. Vì hai bên lệch múi giờ khá nhiều, khung giờ họp này có thuận tiện cho bạn không?" },
          { participant: 'Sarah', text: "Yes, this is fine! I love how inclusive and respectful our international team's etiquette is.", translation: "Được chứ, tầm này ổn áp nè! Tôi rất thích sự cởi mở hòa nhập cũng như nghi thức văn hóa đối xử chuẩn mực của nhóm đa quốc gia chúng ta." },
          { participant: 'Kenji', text: "In our culture, we tend to check details thoroughly, so my work style might be slightly slow.", translation: "Trong văn hóa của chúng tôi, mọi người thường có xu hướng rà soát chi tiết cực kỳ kỹ lưỡng, vì thế phong cách làm việc của tôi hơi chậm chút." },
          { participant: 'Sarah', text: "Don't worry. Bridging the cultural barrier makes our brainstorming even richer and more successful!", translation: "Không sao đâu bạn ơi. Việc vượt qua rào cản văn hóa giúp những đợt thảo luận ý tưởng của chúng ta phong phú và hiệu quả hơn nhiều!" }
        ]
      }
    ]
  },
  {
    id: 'pro-11',
    title: 'Time Management & Assertiveness',
    vietnameseTitle: 'Quản lý thời gian & Từ chối khéo',
    category: 'Communication',
    subCategory: ['For Professionals'],
    icon: '⏳',
    color: '#1B2631',
    description: 'Bày tỏ khi công việc bị quá tải, đề xuất thay đổi thứ tự ưu tiên, khéo léo từ chối nhận thêm việc mới và xin giãn hạn.',
    words: [
      { id: 'pr11-1', word: 'Overloaded', ipa: '/ˌəʊvəˈləʊdɪd/', definition: 'Bị đặt lượng công việc quá sức chịu đựng thông thường.', translation: 'Quá tải công việc', example: 'I am totally overloaded with corporate reports this week.', blankSentence: 'If you feel ____, tell your supervisor.', emoji: '🥵' },
      { id: 'pr11-2', word: 'Prioritize', ipa: '/praɪˈɒrətaɪz/', definition: 'Tập trung sắp đặt việc quan trọng hàng đầu lên xử lý trước.', translation: 'Ưu tiên hàng đầu', example: 'We must prioritize client acquisition before addressing branding updates.', blankSentence: 'How do you ____ your daily tasks?', emoji: '📌' },
      { id: 'pr11-3', word: 'Negotiate', ipa: '/nɪˈɡəʊʃieɪt/', definition: 'Bàn bạc thương thảo để tìm được thỏa thuận tốt nhất cho đôi bên.', translation: 'Thương lượng/Thương thuyết', example: 'I managed to negotiate a two-day extension for the prototype release.', blankSentence: 'Let\'s ____ a realistic timeframe.', emoji: '🗣️' },
      { id: 'pr11-4', word: 'Turn down', ipa: '/tɜːn daʊn/', definition: 'Phủ nhận, từ chối một lời đề nghị khéo léo.', translation: 'Từ chối (đề nghị)', example: 'I had to turn down the extra gig because my plate is currently full.', blankSentence: 'It\'s hard to ____ a direct request from a director.', emoji: '👎' },
      { id: 'pr11-5', word: 'Timeframe', ipa: '/ˈtaɪmfreɪm/', definition: 'Khung thời gian cố định được thiết lập cho dự án.', translation: 'Khung thời gian', example: 'What is the exact timeframe for finishing this design audit?', blankSentence: 'We must complete the task within this ____.', emoji: '⏱️' }
    ],
    structures: [
      { id: 'str11-1', phrase: 'To be fair, my plate is currently full...', meaning: 'Nói thật lòng thì hiện tại lịch trình của tôi đang quá kín rồi...', vietnamese: 'Cách mở đầu từ chối cực kỳ trơn tru tế nhị.' },
      { id: 'str11-2', phrase: 'Could we push back the deadline to...?', meaning: 'Chúng ta có thể lùi lịch/hạn chót sang ngày... được không?', vietnamese: 'Thương thảo lại tiến độ dễ chấp nhận.' }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Managing Time and Workload',
        participants: [
          { name: 'Tom', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Tom' },
          { name: 'Susan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Susan' }
        ],
        lines: [
          { participant: 'Tom', text: "Hey Susan, could you help me review the financial audit charts today?", translation: "Chào Susan, cậu hỗ trợ tớ kiểm duyệt mấy cái biểu đồ kiểm toán tài chính hôm nay được không?" },
          { participant: 'Susan', text: "To be fair, my plate is currently full. I am feeling slightly overloaded with the quarterly reviews.", translation: "Nói thật lòng thì hiện tại lịch trình của tớ đang quá kín rồi. Tớ đang cảm thấy hơi quá tải với các báo cáo đánh giá quý." },
          { participant: 'Tom', text: "I understand. Is there any way we can negotiate a better timeframe for this?", translation: "Tớ hiểu mà. Liệu có cách nào tụi mình thương lượng lại một khu biệt thời gian tối ưu hơn cho việc này không?" },
          { participant: 'Susan', text: "Could we push back the deadline to Friday? That way I can prioritize our main client deliverables first.", translation: "Chúng mình có thể lùi hạn chót sang thứ Sáu được không? Như thế tớ mới ưu tiên xử lý xong sản phẩm bàn giao của khách hàng chính trước." }
        ]
      }
    ]
  },
  {
    id: 'pro-12',
    title: 'Constructive Conflict Resolution',
    vietnameseTitle: 'Giải quyết xung đột văn minh',
    category: 'Communication',
    subCategory: ['For Professionals'],
    icon: '⚖️',
    color: '#7E5109',
    description: 'Nêu vấn đề nhạy cảm, mô tả tác động tiêu cực, đề xuất giải pháp, lắng nghe phản hồi của người khác một cách bình tĩnh.',
    words: [
      { id: 'pr12-1', word: 'Resolve conflict', ipa: '/rɪˈzɒlv ˈkɒnflɪkt/', definition: 'Dàn xếp ổn thỏa những khúc mắc mâu thuẫn trong tập thể.', translation: 'Mỏ nút thắt xung đột', example: 'We held a private chat to resolve conflict and move on with development.', blankSentence: 'It\'s crucial to ____ early.', emoji: '🤝' },
      { id: 'pr12-2', word: 'Impact', ipa: '/ˈɪmpækt/', definition: 'Sự ảnh hưởng trực tiếp của hành vi lên hiệu suất chung.', translation: 'Sự tác động/Trực tiếp', example: 'The continuous delay in design had a huge impact on our front-end flow.', blankSentence: 'This change will drastically ____ our sales.', emoji: '💥' },
      { id: 'pr12-3', word: 'Propose a solution', ipa: '/prəˈpəʊz ə səˈluːʃn/', definition: 'Trình bày cách tháo gỡ khó khăn thay vì chỉ đứng than vãn.', translation: 'Đề nghị giải pháp', example: 'Instead of assigning blame, I want to propose a solution to our bottleneck.', blankSentence: 'Who can ____ for this crisis?', emoji: '💡' },
      { id: 'pr12-4', word: 'Receptive', ipa: '/rɪˈseptɪv/', definition: 'Cởi mở lắng nghe học hỏi ý kiến trái chiều mà không tự ái.', translation: 'Cởi mở tiếp thu', example: 'A good leader is always receptive to the feedback of the junior team.', blankSentence: 'The board was very ____ to our proposal.', emoji: '👂' },
      { id: 'pr12-5', word: 'Diplomatic', ipa: '/ˌdɪpləˈmætɪk/', definition: 'Uốn lưỡi khéo léo để không gây thù oán mất lòng đối mặt.', translation: 'Tính nhã nhặn/Ngoại giao', example: 'Her diplomatic response cooled down the client\'s immediate anger.', blankSentence: 'Try to be more ____ in your emails.', emoji: '🕊️' }
    ],
    structures: [
      { id: 'str12-1', phrase: 'I see where you are coming from, but...', meaning: 'Tôi hiểu hoàn cảnh/quan điểm của bạn đứng từ góc độ đó, tuy nhiên...', vietnamese: 'Công nhận cảm xúc đối phương trước khi phản biện.' },
      { id: 'str12-2', phrase: 'Let\'s look at this objectively.', meaning: 'Hãy cùng nhìn nhận việc này một cách khách quan không cảm tính.', vietnamese: 'Kéo tập thể về luồng tư duy lý tính.' }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Resolving Team Dispute',
        participants: [
          { name: 'Henry', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Henry' },
          { name: 'Jack', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Jack' }
        ],
        lines: [
          { participant: 'Henry', text: "Jack, let's look at this objectively. The delayed deployment had a severe impact on sales.", translation: "Jack này, chúng ta hãy nhìn nhận việc này một cách khách quan đi. Chuyến triển khai chậm trễ vừa rồi tác động ảnh hưởng sâu sắc đến doanh số bán hàng." },
          { participant: 'Jack', text: "I see where you are coming from, but my team worked late nights to fix the backend security bugs.", translation: "Tôi hiểu hoàn cảnh của anh đứng từ góc độ đó, tuy nhiên phản biện của tôi là nhóm của tôi đã phải cày đêm suốt để khắc phục lỗi bảo mật hệ thống." },
          { participant: 'Henry', text: "Alright, let's turn this around and propose a solution to resolve conflict between our branches.", translation: "Được rồi, cùng dẹp chuyện cũ đi và đề xuất một giải pháp cụ thể để gỡ nút thắt xung đột giữa hai bộ phận nhé." },
          { participant: 'Jack', text: "I am totally receptive to that. Staying diplomatic will keep our cross-functional cooperation strong.", translation: "Tôi hoàn toàn tiếp thu và cởi mở đồng ý. Ứng xử nhã nhặn nhịp nhàng sẽ giữ cho sự hợp tác liên phòng ban này luôn bền vững." }
        ]
      }
    ]
  },
  {
    id: 'pro-13',
    title: 'Personal Life & Interests',
    vietnameseTitle: 'Đời sống & Sở thích cá nhân',
    category: 'Communication',
    subCategory: ['For Professionals'],
    icon: '🎾',
    color: '#4D5656',
    description: 'Trò chuyện về đời sống cá nhân: Độc thân nói về nhóm bạn, hoạt động thể thao, hẹn hò / Đã kết hôn nói về bạn đời, gia đình nhỏ.',
    words: [
      { id: 'pr13-1', word: 'Leisure activity', ipa: '/ˈleʒə ækˈtɪvəti/', definition: 'Hoạt động giải trí, sở thích thư giãn làm trong thời gian rảnh.', translation: 'Hoạt động giải trí rảnh rỗi', example: 'Playing tennis on Sunday morning is my favorite leisure activity.', blankSentence: 'Do you engage in any ____ after office hours?', emoji: '🎾' },
      { id: 'pr13-2', word: 'Social circle', ipa: '/ˈsəʊʃl ˈsɜːkl/', definition: 'Nhóm bạn bè cùng tần số sở thích giao lưu quen biết rộng.', translation: 'Vòng bạn bè/Nhóm giao lưu', example: 'Most of my social circle consists of coworkers from my previous agency.', blankSentence: 'He has an extremely wide ____.', emoji: '👥' },
      { id: 'pr13-3', word: 'Date', ipa: '/deɪt/', definition: 'Buổi hẹn hò lãng mạn lãng mạn của những người tìm hiểu nhau.', translation: 'Buổi hẹn hò', example: 'I have a dinner date this evening, so I’m leaving exactly at 5:30.', blankSentence: 'She went out on a ____ last night.', emoji: '🌹' },
      { id: 'pr13-4', word: 'Spouse', ipa: '/spaʊz/', definition: 'Vợ hoặc chồng chính thức được pháp luật bảo hộ kết hôn.', translation: 'Vợ/Chồng (bạn đời)', example: 'My spouse works as an accountant in a multinational bank.', blankSentence: 'Are you bringing your ____ to the company dinner?', emoji: '💍' },
      { id: 'pr13-5', word: 'Get together', ipa: '/ɡet təˈɡeðə(r)/', definition: 'Tổ chức cuộc họp mặt tụ hội vui vẻ trò chuyện.', translation: 'Tụ họp/Họp mặt thân mặt', example: 'Let’s organize a family get-together over the coming weekend.', blankSentence: 'The annual classmates ____ is next month.', emoji: '🍻' }
    ],
    structures: [
      { id: 'str13-1', phrase: 'What do you do to unwind after a crazy day?', meaning: 'Bạn thường làm gì để giải tỏa căng thẳng sau một ngày làm việc điên cuồng?', vietnamese: 'Hỏi thăm khơi gợi chủ đề sở thích.' },
      { id: 'str13-2', phrase: 'We’ve been married for...', meaning: 'Vợ chồng tôi đã cưới nhau được...', vietnamese: 'Mẫu câu chia sẻ tình trạng hôn nhân tự nhiên.' }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Interests and Marital Status',
        participants: [
          { name: 'Arthur', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Arthur' },
          { name: 'Lily', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lily' }
        ],
        lines: [
          { participant: 'Arthur', text: "What do you do to unwind after a crazy day at the corporate office, Lily?", translation: "Cậu thường làm gì để giải tỏa căng thẳng sau một ngày làm việc điên cuồng ở cơ quan thế, Lily?" },
          { participant: 'Lily', text: "I love playing tennis! It is my favorite leisure activity with my close social circle.", translation: "Tớ cực kỳ thích chơi tennis! Đó là hoạt động giải trí yêu thích nhất của tớ với vòng bạn bè thân thiết cùng gu." },
          { participant: 'Arthur', text: "Nice! My spouse and I usually cycle in the evening. We've been married for five years now.", translation: "Tuyệt quá! Vợ chồng tớ thì thường đạp xe thư giãn vào buổi tối. Nhà tớ đã cưới nhau được năm năm tròn rồi đó." },
          { participant: 'Lily', text: "Wow, congrats! Let's organize a weekend get-together. I can bring my dinner date along!", translation: "Ôi chúc mừng nhé! Cuối tuần nào đó tụ tập ăn uống gặp mặt thân mật đi. Tớ có thể rủ cả bạn đang hẹn hò đi cùng nữa!" }
        ]
      }
    ]
  },
  {
    id: 'pro-14',
    title: 'Work-Life Balance & Kinship',
    vietnameseTitle: 'Cân bằng việc & Trách nhiệm gia đình',
    category: 'Communication',
    subCategory: ['For Professionals'],
    icon: '🏠',
    color: '#5D6D7E',
    description: 'Chia sẻ chuyện con cái học hành, dọn đón con, đi họp phụ huynh, chăm người ốm và giải tỏa áp lực gồng gánh deadline khi việc nhà bận rộn.',
    words: [
      { id: 'pr14-1', word: 'Pick up', ipa: '/pɪk ʌp/', definition: 'Hành động ghé tới mang hoặc đón ai đó đi về.', translation: 'Đón (con/bạn bè)', example: 'I have to leave the office slightly early today to pick up my son.', blankSentence: 'Can you ____ the kids from school?', emoji: '🚗' },
      { id: 'pr14-2', word: 'Parent-teacher meeting', ipa: '/ˈpeərənt ˈtiːtʃə(r) ˈmiːtɪŋ/', definition: 'Buổi gặp gỡ chính thức định kỳ cuối học kỳ giữa phụ huynh và thầy cô giáo.', translation: 'Họp phụ huynh học sinh', example: 'I must attend the parent-teacher meeting this coming Saturday morning.', blankSentence: 'My wife is going to the ____.', emoji: '🏫' },
      { id: 'pr14-3', word: 'Work-life balance', ipa: '/wɜːk laɪf ˈbæləns/', definition: 'Thế cân bằng lành mạnh giữa áp lực sự nghiệp và chăm chút hạnh phúc nhà.', translation: 'Cân bằng cuộc sống & công việc', example: 'Achieving a healthy work-life balance is essential for career longevity.', blankSentence: 'This job offers terrible ____.', emoji: '⚖️' },
      { id: 'pr14-4', word: 'Caregiver', ipa: '/ˈkeəɡɪvə(r)/', definition: 'Thành viên trực tiếp trông nom, săn sóc thuốc thang cho người ốm yếu hoặc người già.', translation: 'Người chăm lo sức khỏe gia đình', example: 'Being both a full-time lead and a caregiver for my mother is challenging.', blankSentence: 'His sister is the main ____ for grandfather.', emoji: '❤️' },
      { id: 'pr14-5', word: 'Domestic duty', ipa: '/dəˈmestɪk ˈdjuːti/', definition: 'Những nốt việc không tên dọn dẹp, nấu ăn chăm sóc nội trợ.', translation: 'Việc nhà/Bổn phận gia đình', example: 'We split the domestic duties equally so neither of us feels exhausted.', blankSentence: 'After the office, I am busy with ____.', emoji: '🧹' }
    ],
    structures: [
      { id: 'str14-1', phrase: 'How do you juggle work and parenting?', meaning: 'Làm thế nào bạn có thể xoay xở/gánh vác cả việc học của con lẫn việc cơ quan?', vietnamese: 'Hỏi han xin kinh nghiệm các bố mẹ bỉm sữa.' },
      { id: 'str14-2', phrase: 'I need to attend to a family matter...', meaning: 'Tôi có việc gia đình đột xuất cần xử lý...', vietnamese: 'Lý do xin rời cơ quan sớm lịch sự, được tôn trọng.' }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Juggling Work and Family',
        participants: [
          { name: 'Ben', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ben' },
          { name: 'Lucy', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Lucy' }
        ],
        lines: [
          { participant: 'Ben', text: "Lucy, how do you juggle work and parenting? You always seem so focused and energized.", translation: "Lucy ơi, làm sao cậu có thể vừa gánh vác việc cơ quan vừa nuôi dạy con khéo thế? Trông cậu lúc nào cũng tập trung và đầy năng lượng." },
          { participant: 'Lucy', text: "It's tough! Achieving a healthy work-life balance requires splitting domestic duties with my husband.", translation: "Chật vật lắm cậu ơi! Để cân bằng ổn thỏa giữa công việc và cuộc sống đòi hỏi tớ phải chia sẻ gánh nặng việc nhà nội trợ với chồng tớ." },
          { participant: 'Ben', text: "I see. Actually, I need to attend to a family matter today. I must leave early to pick up my daughter from school.", translation: "Ra là vậy. Thực ra hôm nay tớ có việc gia đình đột xuất cần xử lý. Tớ phải xin về sớm xíu để đi đón con gái đi học về." },
          { participant: 'Lucy', text: "Go ahead! My husband is going to a parent-teacher meeting, and I am the primary caregiver for my grandma tonight, so I get it.", translation: "Cậu cứ đi đi! Nay chồng tớ cũng đi họp phụ huynh cho con, còn tối nay tớ lại là người trông thuốc thang cho bà nội ốm, nên tớ thấu cảm lắm." }
        ]
      }
    ]
  },
  {
    id: 'pro-15',
    title: 'Personal Finance & Career Goals',
    vietnameseTitle: 'Tài chính cá nhân & Dự định lớn',
    category: 'Communication',
    subCategory: ['For Professionals'],
    icon: '💵',
    color: '#626567',
    description: 'Trò chuyện tiết kiệm chi tiêu, bàn mua nhà mua xe, lập kế hoạch đám cưới nuôi con, nghỉ hưu sớm ở mức giao tiếp thường ngày bình dị.',
    words: [
      { id: 'pr15-1', word: 'Savings', ipa: '/ˈseɪvɪŋz/', definition: 'Phần tiền dư dôi dành dụm tích trữ phòng cơ nguy biến.', translation: 'Quỹ tiết kiệm', example: 'We are planning to put most of our bonus directly into our savings.', blankSentence: 'He withdrew all his ____ to start a business.', emoji: '🏦' },
      { id: 'pr15-2', word: 'Mortgage', ipa: '/ˈmɔːɡɪdʒ/', definition: 'Khoản tiền thế chấp ký nợ ngân hàng để tiến hành mua bất động sản.', translation: 'Thế chấp/Tiền nợ mua nhà', example: 'We finally paid off our 15-year apartment mortgage last month.', blankSentence: 'Getting a ____ can be a serious burden.', emoji: '🏠' },
      { id: 'pr15-3', word: 'Budgeting', ipa: '/ˈbʌdʒɪtɪŋ/', definition: 'Tác vụ tính toán phân bổ dòng tiền chi tiêu sinh hoạt khoa học.', translation: 'Lập quỹ chi tiêu', example: 'Strict budgeting helped us accumulate our wedding fund within a year.', blankSentence: 'She is learning the art of personal ____.', emoji: '📊' },
      { id: 'pr15-4', word: 'Retirement plan', ipa: '/rɪˈtaɪəmənt plæn/', definition: 'Chuẩn bị tích lũy tài sản phục vụ an dưỡng tuổi già.', translation: 'Kế hoạch an hưởng tuổi già/nghỉ hưu', example: 'It’s never too early to start investing in a long-term retirement plan.', blankSentence: 'What does your ____ look like?', emoji: '⛳' },
      { id: 'pr15-5', word: 'Big-ticket purchase', ipa: '/bɪɡ ˈtɪkɪt ˈpɜːtʃəs/', definition: 'Những tài sản vô cùng đắt đỏ như ô tô, căn hộ hoặc siêu xe máy.', translation: 'Món mua sắm đắt giá', example: 'Buying a family car is our next big-ticket purchase for this year.', blankSentence: 'A home is the biggest ____ for most.', emoji: '🚗' }
    ],
    structures: [
      { id: 'str15-1', phrase: 'I am trying to cut back on running costs...', meaning: 'Tôi đang nỗ lực cắt giảm tối đa các khoản phí sinh hoạt hàng ngày...', vietnamese: 'Chia sẻ đời thường khi kể chuyện thắt lưng buộc bụng.' },
      { id: 'str15-2', phrase: 'Is it worth investing in...?', meaning: 'Có đáng để dốc tiền đầu tư vào... không?', vietnamese: 'Xin lời khuyên tiền bạc từ tiền bối đi trước.' }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Personal Finance Planning',
        participants: [
          { name: 'Oliver', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Oliver' },
          { name: 'Sophia', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sophia' }
        ],
        lines: [
          { participant: 'Oliver', text: "I am trying to cut back on running costs, as we just signed a major mortgage for our new apartment.", translation: "Tớ đang nỗ lực cắt giảm tối đa các khoản chi tiêu sinh hoạt, vì hai vợ chồng tớ vừa ký khoản nợ thế chấp lớn mua căn hộ mới." },
          { participant: 'Sophia', text: "Smart! Personal budgeting is key. We should safeguard our core savings index.", translation: "Sáng suốt đó! Việc quản lý lập quỹ chi tiêu cá nhân là chìa khóa. Tụi mình phải luôn bảo vệ phần quỹ tiết kiệm cốt lõi." },
          { participant: 'Oliver', text: "True. Is it worth investing in a long-term retirement plan while paying off major debts?", translation: "Đúng vậy. Thế liệu có đáng dốc tiền đầu tư vào một kế hoạch an dưỡng tuổi già dài hạn trong khi đang phải gánh nợ lớn không cậu?" },
          { participant: 'Sophia', text: "Absolutely. I recommend starting early, but wait with any other big-ticket purchase for now.", translation: "Hoàn toàn đáng chứ. Tớ khuyên nên chuẩn bị từ sớm, nhưng tạm thời cứ gác lại mấy món mua sắm xa xỉ đắt giá khác đã nhen." }
        ]
      }
    ]
  },
  {
    id: 'pro-16',
    title: 'Health, Stress & Self-Care',
    vietnameseTitle: 'Sức khỏe & Áp lực KPI dồn dập',
    category: 'Communication',
    subCategory: ['For Professionals'],
    icon: '🏥',
    color: '#0E6655',
    description: 'Kể bệnh mỏi vai gáy văn phòng, đau lưng, stress, xin nghỉ phép ốm, trao đổi triệu chứng kiệt sức burnout và chế độ hồi phục.',
    words: [
      { id: 'pr16-1', word: 'Sore back', ipa: '/sɔːr bæk/', definition: 'Cơn mỏi đau cơ lưng xảy ra do ngồi làm máy tính quá lâu sai tư thế.', translation: 'Bệnh mỏi lưng văn phòng', example: 'A ergonomic chair is a lifesaver for my persistent sore back.', blankSentence: 'Sitting all day gives me a ____.', emoji: '🪑' },
      { id: 'pr16-2', word: 'Sick leave', ipa: '/sɪk liːv/', definition: 'Yêu cầu được xin nghỉ phép tĩnh dưỡng hợp pháp do cơ thể không khỏe.', translation: 'Nghỉ phép ốm có lương', example: 'I will be on sick leave today; I have developed a bad sore throat.', blankSentence: 'Does our contract guarantee paid ____?', emoji: '🤒' },
      { id: 'pr16-3', word: 'Burnout', ipa: '/ˈbɜːnaʊt/', definition: 'Trạng thái hoàn toàn kiệt quệ thể chất lẫn tinh thần vì gánh KPI quá tải liên tục.', translation: 'Kiệt sức/Mất lửa nghề', example: 'She suffered severe burnout after working 80 hours a week for six months.', blankSentence: 'Prevent ____ by taking regular weekends off.', emoji: '😩' },
      { id: 'pr16-4', word: 'Insomnia', ipa: '/ɪnˈsɒmniə/', definition: 'Tình trạng khó chìm vào giấc ngủ sâu do suy nghĩ căng thẳng triền miên.', translation: 'Chứng mất ngủ kinh niên', example: 'Insomnia often kicks in when we are near of a critical deployment date.', blankSentence: 'He went to a doctor to treat his ____.', emoji: '🦉' },
      { id: 'pr16-5', word: 'KPI pressure', ipa: '/ˌkeɪ piː ˈaɪ ˈpreʃə(r)//', definition: 'Áp lực mệt mỏi từ việc bắt buộc phải cán đúng mục tiêu số liệu.', translation: 'Áp lực chỉ tiêu hiệu số', example: 'The sales team is under intense KPI pressure to meet the quarterly target.', blankSentence: 'Too much ____ leads to high employee turnover.', emoji: '📈' }
    ],
    structures: [
      { id: 'str16-1', phrase: 'I\'m feeling a bit under the weather today.', meaning: 'Hôm nay tôi thấy trong người hơi sụt sịt khó chịu không được sảng khoái.', vietnamese: 'Thành ngữ kinh điển khi xin phép nghỉ hoặc giải thích lý do mệt mỏi.' },
      { id: 'str16-2', phrase: 'My back is killing me.', meaning: 'Cái lưng tôi ê ẩm điên cuồng chịu không nổi.', vietnamese: 'Câu nói đùa hằng ngày thân mật kêu ca với đồng nghiệp.' }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Workspace Health and Sick Leave',
        participants: [
          { name: 'Mike', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mike' },
          { name: 'Helen', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Helen' }
        ],
        lines: [
          { participant: 'Mike', text: "I'm feeling a bit under the weather today. My back is killing me after sitting at this desk.", translation: "Hôm nay tớ thấy trong người hơi sụt sịt khó chịu mệt mỏi quá. Cái lưng thì ê ẩm nhức nhối sau khi ngồi lỳ ở góc làm việc này." },
          { participant: 'Helen', text: "You have a persistent sore back? You should request a day of sick leave to rest.", translation: "Cậu bị mỏi đau mỏi lưng văn phòng kinh niên à? Cậu nên làm đơn xin nghỉ phép ốm một ngày để tĩnh dưỡng đi." },
          { participant: 'Mike', text: "I want to, but the current KPI pressure to deliver the system is giving me major insomnia.", translation: "Tớ cũng muốn lắm, nhưng áp lực chỉ tiêu KPI phải chốt hệ thống hiện tại đang khiến tớ bị mất ngủ triền miên luôn ấy." },
          { participant: 'Helen', text: "Please take care of yourself. Too much stress leads to severe burnout, which is not worth it at all.", translation: "Cậu phải chú ý giữ gìn sức khỏe nhe. Áp lực mệt mỏi dồn dập quá dễ dẫn tới kiệt sức mất lửa nghề (burnout) nghiêm trọng, chẳng đáng chút nào đâu." }
        ]
      }
    ]
  },
  {
    id: 'pro-17',
    title: 'Food, Travel & Leisure Trips',
    vietnameseTitle: 'Ăn uống, du lịch bụi & giải trí',
    category: 'Communication',
    subCategory: ['For Professionals'],
    icon: '✈️',
    color: '#7B241C',
    description: 'Hẹn bạn đi nhậu, rủ đồng nghiệp cà phê xả stress, khoe review quán ruột hoặc hào hứng kể các chuyến đi trốn ngắn ngày.',
    words: [
      { id: 'pr17-1', word: 'Grab a coffee', ipa: '/ɡræb ə ˈkɒfi/', definition: 'Cụm xã giao rủ ai đó uống nước nghỉ xả hơi một lát.', translation: 'Rủ đi uống nước/cafe', example: 'Do you want to step out and grab a coffee with me?', blankSentence: 'Let\'s ____ and talk about the news.', emoji: '☕' },
      { id: 'pr17-2', word: 'Favorite spot', ipa: '/ˈfeɪvərɪt spɒt/', definition: 'Bất cứ nơi chốn quán cafe ăn uống quen thuộc nào bạn ưa thích đắm mình nhất.', translation: 'Quán ruột/Quán quen', example: 'This quiet vegan bistro has become my absolute favorite spot.', blankSentence: 'We always hang out at our ____.', emoji: '📍' },
      { id: 'pr17-3', word: 'Getaway', ipa: '/ˈɡetəweɪ/', definition: 'Chuyến đi nghỉ xả hơi ngắn ngày đổi gió xua tan stress.', translation: 'Chuyến đi trốn/Nghỉ mát ngắn', example: 'Vung Tau is our convenient weekend getaway from Saigon traffic.', blankSentence: 'We planned a lovely holiday ____.', emoji: '🏝️' },
      { id: 'pr17-4', word: 'Family trip', ipa: '/ˈfæməli trɪp/', definition: 'Kỳ nghỉ cả gia đình cùng lên đường khám thám.', translation: 'Chuyến đi chơi gia đình', example: 'Our annual family trip to Da Nang was filled with unforgettable dining.', blankSentence: 'We spent a fortune on the summer ____.', emoji: '👨‍👩‍👧‍👦' },
      { id: 'pr17-5', word: 'Review', ipa: '/rɪˈvjuː/', definition: 'Tường thuật chân thực cảm nhận dịch vụ ăn uống vui chơi.', translation: 'Đánh giá/Nhận xét trải nghiệm', example: 'Be sure to read the Google reviews before booking that hotel room.', blankSentence: 'I leave a positive ____ for the cafe.', emoji: '⭐' }
    ],
    structures: [
      { id: 'str17-1', phrase: 'It\'s my treat / It\'s on me.', meaning: 'Hôm nay tôi đãi / Cứ để tôi bao nhé.', vietnamese: 'Thế hiện sự hào sảng khi thanh toán tiền ăn rủ rê đồng nghiệp.' },
      { id: 'str17-2', phrase: 'Let\'s go Dutch!', meaning: 'Tụi mình chia đều tiền sòng phẳng nhé!', vietnamese: 'Chào rủ ăn uống kiểu văn phòng hiện đại mỗi người tự trả tiền.' }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Office Co-workers Eating Out',
        participants: [
          { name: 'Liam', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Liam' },
          { name: 'Maya', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Maya' }
        ],
        lines: [
          { participant: 'Liam', text: "Hey Maya! Want to step out of the office and grab a coffee during the afternoon break?", translation: "Chào Maya! Cậu có muốn cùng bước ra ngoài cơ quan và đi uống nước giải xả stress một lát trong giờ nghỉ chiều không?" },
          { participant: 'Maya', text: "I'd love to! Let's go to that quiet pastry cafe down the street. It has become my favorite spot.", translation: "Thích quá đi chứ! Tụi mình qua quán bánh trà yên tĩnh cuối phố đi. Chỗ đó giờ thành quán ruột quen thuộc của tớ luôn rồi." },
          { participant: 'Liam', text: "Perfect. It's my treat today, you helped me so much with the marketing reviews last week.", translation: "Tuyệt vời. Hôm nay tớ bao/tớ đãi nhen, tuần trước cậu đã hỗ trợ tớ cực nhiều trong mấy đợt rà soát duyệt nội dung tiếp thị." },
          { participant: 'Maya', text: "Oh, thank you! But next time, let's go Dutch. Tell me about your weekend getaway family trip!", translation: "Ôi cảm ơn cậu nhé! Nhưng lần sau là tụi mình phải chia đều tiền sòng phẳng đó nhe. Kể tớ nghe về chuyến trốn ngắn ngày cùng gia đình cậu đi!" }
        ]
      }
    ]
  },
  {
    id: 'pro-18',
    title: 'Neighborly Life & Community Engagement',
    vietnameseTitle: 'Quan hệ hàng xóm & Cộng đồng',
    category: 'Communication',
    subCategory: ['For Professionals'],
    icon: '🏘️',
    color: '#2471A3',
    description: 'Chào hỏi hàng xóm khu nhà, giao lưu, nhờ vả trông giùm xe, coi giùm con nhỏ buổi chiều, tham gia từ thiện tổ dân phố.',
    words: [
      { id: 'pr18-1', word: 'Next-door neighbor', ipa: '/nekst dɔːr ˈneɪbə(r)/', definition: 'Gia đình, người sinh sống kế sát vách tường ngôi nhà của bạn.', translation: 'Hàng xóm sát vách', example: 'Our next-door neighbor is extremely friendly and always greets us.', blankSentence: 'I borrowed some salt from my ____.', emoji: '🏡' },
      { id: 'pr18-2', word: 'Keep an eye on', ipa: '/kiːp ən aɪ ɒn/', definition: 'Nhờ trông giữ coi chừng hộ tài sản hoặc trẻ nhỏ trong tầm mắt.', translation: 'Trông giùm/Coi hộ', example: 'Could you keep an eye on my package if the shipper delivers early?', blankSentence: 'Please ____ my luggage for a moment.', emoji: '👀' },
      { id: 'pr18-3', word: 'Neighborhood association', ipa: '/ˈneɪbəhʊd əˌsəʊʃiˈeɪʃn/', definition: 'Ban tổ chức quản lý đại diện cho quyền lợi cư dân sinh sống.', translation: 'Ban quản lý cư dân/Tổ dân phố', example: 'The neighborhood association voted to plant more trees this summer.', blankSentence: 'I paid our monthly fee to the ____.', emoji: '🏢' },
      { id: 'pr18-4', word: 'Charity work', ipa: '/ˈtʃærəti wɜːk/', definition: 'Công vụ, hành vi giúp quyên góp hỗ trợ những mảnh đời nghèo đói bất hạnh.', translation: 'Công tác từ thiện cứu tế', example: 'We spend our Sunday morning doing charity work at the orphanage.', blankSentence: 'Her parents dedicate their retirement to ____.', emoji: '❤️' },
      { id: 'pr18-5', word: 'Deliver a package', ipa: '/dɪˈlɪvər ə ˈpækɪdʒ/', definition: 'Hành động trao gửi hàng hóa bưu kiện tới địa chỉ của nhà.', translation: 'Giao nhận bưu phẩm', example: 'The postman came to deliver a package while I was taking a nap.', blankSentence: 'The shipper will ____ to your neighbor.', emoji: '📦' }
    ],
    structures: [
      { id: 'str18-1', phrase: 'Sorry to bother you, but...', meaning: 'Thật vô cùng xin lỗi vì đã làm phiền bạn, nhưng...', vietnamese: 'Mở đầu lời gõ cửa xin lỗi tế nhị nhờ coi nhà hoặc dọn dẹp hàng xóm.' },
      { id: 'str18-2', phrase: 'If you ever need any help, just let me know.', meaning: 'Nếu bạn cần giúp đỡ gì, cứ nói với tôi một tiếng nhé.', vietnamese: 'Tạo mối quan hệ hàng xóm khăng khít ấm lòng.' }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Talking to the Neighbor',
        participants: [
          { name: 'John', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=John' },
          { name: 'Mary', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Mary' }
        ],
        lines: [
          { participant: 'John', text: "Sorry to bother you, but could you keep an eye on my porch if the shipper comes to deliver a package today?", translation: "Chào chị, xin lỗi vì đã làm phiền chị một xíu nhen, nhưng chị có thể để mắt trông giùm trước nhà nếu hôm nay shipper tới giao bưu phẩm được không ạ?" },
          { participant: 'Mary', text: "Of course, John! As your next-door neighbor, I am happy to help you coordinate that.", translation: "Được chứ anh John ơi! Là hàng xóm sát vách của anh, tôi rất vui lòng hỗ trợ anh chuyện đó." },
          { participant: 'John', text: "Thank you so much. If you ever need any help with your garden or home, just let me know.", translation: "Cảm ơn chị nhiều lắm. Nếu chị có lúc nào cần giúp đỡ việc vườn tược nhà cửa, cứ nói tôi một tiếng nhé." },
          { participant: 'Mary', text: "I appreciate that. By the way, are you participating in our neighborhood association's weekend charity work?", translation: "Tôi ghi nhận tấm lòng nha. Nhân tiện, cuối tuần này anh có tham gia buổi từ thiện cứu tế do tổ dân phố phát động không thế?" }
        ]
      }
    ]
  },
  {
    id: 'pro-19',
    title: 'Important Life Milestones & Events',
    vietnameseTitle: 'Chào mừng sinh nhật, cưới xin, đám tiệc',
    category: 'Communication',
    subCategory: ['For Professionals'],
    icon: '🎉',
    color: '#138D75',
    description: 'Bày tỏ cảm xúc khi nhận thiệp, cách mời khách, cách viết từ chối khéo léo kèm lời tiếc nuối và tặng quà mừng đầy ý nghĩa.',
    words: [
      { id: 'pr19-1', word: 'Wedding invitation', ipa: '/ˈwedɪŋ ˌɪnvɪˈteɪʃn/', definition: 'Tấm thiệp báo hỷ long trọng mời người quen tới chung vui thành hôn.', translation: 'Thiệp cưới/Lời mời cưới', example: 'I came home to find a wedding invitation from our old coworker.', blankSentence: 'Did you receive the official ____ yet?', emoji: '✉️' },
      { id: 'pr19-2', word: 'Decline with regrets', ipa: '/dɪˈklaɪn wɪð rɪˈɡrets/', definition: 'Gửi lời từ chối không dự tiệc cưới một cách khéo léo vô cùng ái ngại.', translation: 'Từ chối dự tiệc đầy tiếc nuối', example: 'As I am out of the country, I had to decline with regrets.', blankSentence: 'We must ____ their kind invitation.', emoji: '😔' },
      { id: 'pr19-3', word: 'Milestone', ipa: '/ˈmaɪlstəʊn/', definition: 'Cột mốc mang giá trị bước ngoặt đột ngột cho dòng đời hoặc sự nghiệp.', translation: 'Cột mốc cuộc đời/Bước ngoặt', example: 'Buying our first family home was a major milestone for us.', blankSentence: 'Turning thirty is a significant ____.', emoji: '🏆' },
      { id: 'pr19-4', word: 'Condolence', ipa: '/kənˈdəʊləns/', definition: 'Lời thăm hỏi chia sẻ xót xa gửi tới người mất đi người thân.', translation: 'Lời chia buồn sâu sắc', example: 'We sent a white flower bouquet to express our deepest condolences.', blankSentence: 'Please accept my sincere ____s.', emoji: '🖤' },
      { id: 'pr19-5', word: 'Housewarming', ipa: '/ˈhaʊswɔːmɪŋ/', definition: 'Bữa tiệc ăn mừng hò hẹn dọn về nhà mới xây dựng xong.', translation: 'Tiệc tân gia nhà mới', example: 'They of course invited the entire marketing team to their housewarming party.', blankSentence: 'What should we buy for a ____ gift?', emoji: '🎁' }
    ],
    structures: [
      { id: 'str19-1', phrase: 'I\'m so thrilled for you both!', meaning: 'Tôi vô cùng mừng rỡ/phấn khởi thay cho cả hai bạn!', vietnamese: 'Chào mừng chúc phúc đám cưới dạt dào tình cảm.' },
      { id: 'str19-2', phrase: 'Please let me know where I can send a gift.', meaning: 'Cho tôi hỏi tôi có thể gửi quà mừng qua đường nào nhé.', vietnamese: 'Câu hỏi tế nhị khi bận không tới dự được nhưng vẫn gửi quà.' }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Wedding and Housewarming Invites',
        participants: [
          { name: 'Kevin', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kevin' },
          { name: 'Amber', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Amber' }
        ],
        lines: [
          { participant: 'Kevin', text: "Hey Amber! I just received your housewarming party and wedding invitation today.", translation: "Chào Amber! Hôm nay tớ vừa mới nhận được thiệp báo hỷ lễ thành hôn kết hợp tân gia nhà mới của cậu đây." },
          { participant: 'Amber', text: "Oh great! Buying this apartment and getting married is a massive lifetime milestone for us.", translation: "Ồ tuyệt quá! Mua được căn hộ này với lấy chồng đúng là cột mốc bước ngoặt cuộc đời cực kỳ lớn đối với tụi tớ." },
          { participant: 'Kevin', text: "I'm so thrilled for you both! But since I am on business in Japan, I must decline with regrets.", translation: "Tớ vô cùng mừng rỡ phấn khởi thay cho cả hai bạn! Nhưng vì kẹt lịch đi công tác xa ở Nhật, tớ buộc phải từ chối dự tiệc trong đầy tiếc nuối." },
          { participant: 'Amber', text: "Totally understand, don't worry about it!", translation: "Tớ hoàn toàn hiểu mà, cậu đừng lo lắng bận tâm chuyện đó quá nhen!" },
          { participant: 'Kevin', text: "Thank you. Please let me know where I can send a gift to congratulate your beautiful family.", translation: "Cảm ơn cậu. Nhớ chỉ cho tớ biết tớ có thể chuyển quà mừng đám cưới qua đường nào để gửi tới gia đình nhỏ nhé." }
        ]
      }
    ]
  },
  {
    id: 'pro-20',
    title: 'Self-Development & Future Aspirations',
    vietnameseTitle: 'Phát triển bản thân & Tương lai',
    category: 'Communication',
    subCategory: ['For Professionals'],
    icon: '🔮',
    color: '#A04000',
    description: 'Định hướng học nâng cao (ngoại ngữ, chứng chỉ quý), đổi ngành nghề, ấp ủ ước mơ khởi nghiệp và đối thoại chia sẻ kế hoạch 3-5 năm tới.',
    words: [
      { id: 'pr20-1', word: 'Upskill', ipa: '/ˌʌpˈskɪl/', definition: 'Dành thời gian rèn luyện thêm tri thức nâng cao năng lực sẵn có.', translation: 'Thúc đẩy nâng cấp kỹ năng', example: 'I plan to upskill in AI and Prompt Engineering this quarter.', blankSentence: 'To survive the job market, we need to ____.', emoji: '📈' },
      { id: 'pr20-2', word: 'Career shift', ipa: '/kəˈrɪə ʃɪft/', definition: 'Cú rẽ ngang đột ngột nhảy sang một nghề nghiệp hoàn toàn mới.', translation: 'Bước chuyển hướng nghề nghiệp', example: 'She made a successful career shift from hospitality to coding.', blankSentence: 'Making a secure ____ at forty takes courage.', emoji: '🔄' },
      { id: 'pr20-3', word: 'Mentor', ipa: '/ˈmentɔː(r)/', definition: 'Người đi trước dày dặn trận mạc, sẵn sàng hướng dẫn mở mắt.', translation: 'Người cố vấn/Chỉ đường', example: 'My mentor advised me to focus on leadership skills, not just core code.', blankSentence: 'I am looking for a senior ____.', emoji: '🧑‍🏫' },
      { id: 'pr20-4', word: 'Start-up', ipa: '/ˈstɑːt ʌp/', definition: 'Gầy dựng thành lập pháp nhân phục vụ mô hình kinh doanh có tăng trưởng đột phá.', translation: 'Khởi nghiệp kinh doanh', example: 'Leaving a cozy corporate job to launch a fast-growing start-up is risky.', blankSentence: 'They just secured funding for their ____.', emoji: '🚀' },
      { id: 'pr20-5', word: 'Five-year plan', ipa: '/faɪv jɪə plæn/', definition: 'Khung định hướng hành trình tham vọng trong 5 năm sắp sửa đi tới.', translation: 'Kế hoạch phát triển năm năm', example: 'In my five-year plan, I aim to become the CTO of an international firm.', blankSentence: 'Where do you see yourself in your ____?', emoji: '🗺️' }
    ],
    structures: [
      { id: 'str20-1', phrase: 'I am taking a course in...', meaning: 'Tôi đang theo học một khóa giảng chuyên sâu về...', vietnamese: 'Khoe lành mạnh nỗ lực học hành nâng cao giá trị bản thân.' },
      { id: 'str20-2', phrase: 'I want to step out of my comfort zone.', meaning: 'Tôi muốn mạnh dạn bước ra khỏi vùng an toàn bấy lâu nay.', vietnamese: 'Bày tỏ động cơ khao khát thay đổi số phận sự nghiệp.' }
    ],
    dialogues: [
      {
        type: 'pair',
        title: 'Career Shift and Five-Year Plan',
        participants: [
          { name: 'Ryan', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Ryan' },
          { name: 'Chloe', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Chloe' }
        ],
        lines: [
          { participant: 'Ryan', text: "I want to step out of my comfort zone, so I am taking a course in software engineering and cloud deployment.", translation: "Tớ muốn mạnh dạn bước ra khỏi vùng an toàn bấy lâu nay, thế nên tớ đang theo học một khóa chuyên sâu về công nghệ phần mềm và triển khai đám mây." },
          { participant: 'Chloe', text: "That is awesome! Are you preparing for a complete career shift into the technology sector?", translation: "Xuất sắc quá cậu ơi! Cậu đang chuẩn bị cho một cú rẽ ngang chuyển hướng hẳn sang ngành công nghệ đúng không?" },
          { participant: 'Ryan', text: "Yes. My five-year plan is to gain solid skills under a senior mentor and then start my own tech-focused start-up.", translation: "Đúng vậy. Định hướng kế hoạch năm năm của tớ là tích lũy kinh nghiệm vững vàng dưới sự dẫn dắt của một người thầy cố vấn giỏi, sau đó gầy dựng một công ty khởi nghiệp công nghệ." },
          { participant: 'Chloe', text: "A highly ambitious start-up? You must upskill constantly, but I have absolute faith that you will succeed!", translation: "Một start-up đầy tham vọng á? Thế thì cậu phải liên tục thúc đẩy nâng cấp kỹ năng của mình, nhưng tớ có niềm tin tuyệt đối cậu sẽ thành công!" }
        ]
      }
    ]
  }
];

export const specificProfessionals: Topic[] = rawProfessionals.map(topic => ({
  ...topic,
  dialogues: PROFESSIONALS_DIALOGUES[topic.id] || topic.dialogues,
  structures: PROFESSIONALS_STRUCTURES[topic.id] || topic.structures
}));
