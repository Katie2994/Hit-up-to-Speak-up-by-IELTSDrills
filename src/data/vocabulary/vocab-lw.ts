import { Topic } from './types';

export const lwTopics: Topic[] = [
  {
    id: "lw_1",
    title: "Poetic Words",
    icon: "🕊️",
    color: "bg-[#06D6A0]",
    description: "Từ ngữ văn chương",
    words: [
      {
        id: "lw1_w1",
        word: "Mellifluous",
        ipa: "/məˈlɪf.lu.əs/",
        definition: "Ngọt ngào, êm tai (âm thanh)",
        example: "The radio was playing a mellifluous melody.",
        blankSentence: "The radio was playing a ___ melody.",
        emoji: "🎶"
      },
      {
        id: "lw1_w2",
        word: "Ephemeral",
        ipa: "/ɪˈfem.ər.əl/",
        definition: "Phù du, chóng tàn",
        example: "Fame in the world of rock and pop is largely ephemeral.",
        blankSentence: "Fame in the world of rock and pop is largely ___.",
        emoji: "🌸"
      },
      {
        id: "lw1_w3",
        word: "Luminous",
        ipa: "/ˈluː.mə.nəs/",
        definition: "Sáng chói, rực rỡ",
        example: "The library was filled with luminous ideas and inspiring stories.",
        blankSentence: "The library was filled with ___ ideas and inspiring stories.",
        emoji: "✨"
      },
      {
        id: "lw1_w4",
        word: "Ethereal",
        ipa: "/ɪˈθɪr.i.əl/",
        definition: "Thanh tao, siêu phàm",
        example: "She has an ethereal beauty that captivates everyone.",
        blankSentence: "She has an ___ beauty that captivates everyone.",
        emoji: "🧚"
      },
      {
        id: "lw1_w5",
        word: "Serendipity",
        ipa: "/ˌser.ənˈdɪp.ə.ti/",
        definition: "Sự tình cờ may mắn",
        example: "They found each other by pure serendipity.",
        blankSentence: "They found each other by pure ___.",
        emoji: "🍀"
      }
    ]
  }
];
