import { Topic } from './types';

export const specificTopics: Topic[] = [
  {
    id: 'spec-01',
    title: 'For Students',
    vietnameseTitle: 'Dành cho Học sinh - Sinh viên',
    category: 'Communication',
    subCategory: ['Theo nhu cầu', 'For Students'],
    icon: '🎒',
    color: '#E9C46A',
    description: 'Từ vựng và giao tiếp trong môi trường học đường, thi cử.',
    words: [
      { id: 'sp1-1', word: 'Assignment', ipa: '/əˈsaɪnmənt/', definition: 'Bài tập được giao.', translation: 'Bài tập', example: 'I have to finish my assignment.', blankSentence: 'Submit your ____.', emoji: '📝' },
      { id: 'sp1-2', word: 'Deadline', ipa: '/ˈdedlaɪn/', definition: 'Hạn chót.', translation: 'Hạn chót', example: 'The deadline is tomorrow.', blankSentence: 'Meet the ____.', emoji: '⏰' },
      { id: 'sp1-3', word: 'Lecture', ipa: '/ˈlektʃə(r)/', definition: 'Bài giảng đại học.', translation: 'Bài giảng', example: 'The lecture was boring.', blankSentence: 'Attend the ____.', emoji: '👨‍🏫' }
    ]
  },
  {
    id: 'spec-02',
    title: 'For Professionals',
    vietnameseTitle: 'Dành cho Người đi làm',
    category: 'Communication',
    subCategory: ['Theo nhu cầu', 'For Professionals'],
    icon: '💼',
    color: '#264653',
    description: 'Giao tiếp công sở, email, và họp hành.',
    words: [
      { id: 'sp2-1', word: 'Meeting', ipa: '/ˈmiːtɪŋ/', definition: 'Cuộc họp.', translation: 'Cuộc họp', example: 'We have a meeting at 10 AM.', blankSentence: 'Join the ____.', emoji: '🤝' },
      { id: 'sp2-2', word: 'Colleague', ipa: '/ˈkɒliːɡ/', definition: 'Đồng nghiệp.', translation: 'Đồng nghiệp', example: 'My colleague is very helpful.', blankSentence: 'Talk to your ____.', emoji: '👨‍💻' },
      { id: 'sp2-3', word: 'Report', ipa: '/rɪˈpɔːt/', definition: 'Báo cáo.', translation: 'Báo cáo', example: 'Send me the weekly report.', blankSentence: 'Write a ____.', emoji: '📊' }
    ]
  },
  {
    id: 'spec-03',
    title: 'For Beauty Professionals',
    vietnameseTitle: 'Dành cho thợ làm đẹp (Nail, Spa...)',
    category: 'Communication',
    subCategory: ['Theo nhu cầu', 'For Beauty Professionals'],
    icon: '💅',
    color: '#F4A261',
    description: 'Chăm sóc khách hàng trong ngành Spa, Nail, Hair salon.',
    words: [
      { id: 'sp3-1', word: 'Customer', ipa: '/ˈkʌstəmə(r)/', definition: 'Khách hàng.', translation: 'Khách hàng', example: 'Welcome the customer warmly.', blankSentence: 'Serve the ____.', emoji: '🙋‍♀️' },
      { id: 'sp3-2', word: 'Manicure', ipa: '/ˈmænɪkjʊə(r)/', definition: 'Làm móng tay.', translation: 'Làm nail tay', example: 'Would you like a manicure?', blankSentence: 'Get a ____.', emoji: '💅' },
      { id: 'sp3-3', word: 'Massage', ipa: '/ˈmæsɑːʒ/', definition: 'Xoa bóp thư giãn.', translation: 'Mát xa', example: 'I need a foot massage.', blankSentence: 'A relaxing ____.', emoji: '💆‍♀️' }
    ]
  },
  {
    id: 'spec-04',
    title: 'Making Friends Abroad',
    vietnameseTitle: 'Kết bạn với người nước ngoài',
    category: 'Communication',
    subCategory: ['Theo nhu cầu', 'Making Friends Abroad'],
    icon: '🌍',
    color: '#2A9D8F',
    description: 'Bắt chuyện và kết bạn với người ngoại quốc.',
    words: [
      { id: 'sp4-1', word: 'Culture', ipa: '/ˈkʌltʃə(r)/', definition: 'Văn hóa.', translation: 'Văn hóa', example: 'I love learning about different cultures.', blankSentence: 'Share your ____.', emoji: '🎭' },
      { id: 'sp4-2', word: 'Language', ipa: '/ˈlæŋɡwɪdʒ/', definition: 'Ngôn ngữ.', translation: 'Ngôn ngữ', example: 'What language do you speak?', blankSentence: 'Learn a new ____.', emoji: '🗣️' },
      { id: 'sp4-3', word: 'Awesome', ipa: '/ˈɔːsəm/', definition: 'Tuyệt vời.', translation: 'Rất tuyệt', example: 'Your country is awesome!', blankSentence: 'That is ____!', emoji: '🤩' }
    ]
  }
];
