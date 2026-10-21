// Pronunciation & Translation Lab Helper
// Generates authentic Intonation and Connected Speech (Linking) drills
// - For Communication lessons: 100% sourced from topic.structures (Cấu trúc đa dạng)
// - For Essential Word Bank lessons: 100% sourced from topic.words (Từ vựng mục tiêu)

import { Topic, Structure, Word } from '../data/vocab';

export interface IntonationDrillItem {
  sentence: string;
  translation: string;
  pitch: 'rising' | 'falling';
  explanation: string;
}

export interface LinkingDrillItem {
  phrase: string;
  sentence: string;
  linked: string;
  explanation: string;
}

export interface PhoneticDrillItem {
  id: string;
  question: string;
  hint?: string;
  audioTarget?: string;
  options: { text: string; ipa?: string; isCorrect: boolean }[];
  explanation: string;
}

// Common phonetic linking dictionary for precise transcriptions and pedagogical rules
const PHONETIC_LINKING_DICT: Record<string, { linked: string; explanation: string }> = {
  'cups of': {
    linked: 'cup-s‿of',
    explanation: "Quy tắc Nối âm: Âm đuôi /s/ (đuôi -s vô thanh sau /p/) của 'cups' nối trực tiếp sang nguyên âm /ʌ/ của 'of' -> /kʌp.səv/."
  },
  'cats and': {
    linked: 'cat-s‿and',
    explanation: "Quy tắc Nối âm: Âm đuôi /s/ (đuôi -s vô thanh sau /t/) của 'cats' nối liền sang nguyên âm /æ/ của 'and' -> /kæt.sænd/."
  },
  'books in': {
    linked: 'book-s‿in',
    explanation: "Quy tắc Nối âm: Âm đuôi /s/ (đuôi -s vô thanh sau /k/) của 'books' nối liền sang nguyên âm ngắn /ɪ/ của 'in' -> /bʊk.sɪn/."
  },
  'lives in': {
    linked: 'live-z‿in',
    explanation: "Quy tắc Nối âm: Âm đuôi /z/ (đuôi -s hữu thanh sau phụ âm rung /v/) của 'lives' nối trực tiếp sang nguyên âm /ɪ/ của 'in' -> /lɪv.zɪn/."
  },
  'dogs and': {
    linked: 'dog-z‿and',
    explanation: "Quy tắc Nối âm: Âm đuôi /z/ (đuôi -s hữu thanh sau phụ âm rung /ɡ/) của 'dogs' nối liền sang nguyên âm /æ/ của 'and' -> /dɒɡ.zænd/."
  },
  'days off': {
    linked: 'day-z‿off',
    explanation: "Quy tắc Nối âm: Âm đuôi /z/ (sau nguyên âm đôi rung /eɪ/) của 'days' nối liền sang nguyên âm /ɒ/ của 'off' -> /deɪ.zɒf/."
  },
  'buses arrive': {
    linked: 'buse-s-ɪz‿arrive',
    explanation: "Quy tắc Nối âm: Đuôi -es sau âm gió /s/ phát âm là /ɪz/ (thêm 1 âm tiết), âm cuối /z/ nối sang nguyên âm /ə/ của 'arrive' -> /ˈbʌs.ɪ.zəˈraɪv/."
  },
  'watches over': {
    linked: 'watche-s-ɪz‿over',
    explanation: "Quy tắc Nối âm: Đuôi -es sau âm xuýt /tʃ/ phát âm là /ɪz/, âm cuối /z/ nối sang nguyên âm /oʊ/ của 'over' -> /ˈwɒtʃ.ɪ.zoʊ.vər/."
  },
  'boxes of': {
    linked: 'boxe-s-ɪz‿of',
    explanation: "Quy tắc Nối âm: Đuôi -es sau âm gió /ks/ phát âm là /ɪz/, âm cuối /z/ lướt sang nguyên âm /ə/ của 'of' -> /ˈbɒk.sɪ.zəv/."
  },
  'looked at': {
    linked: 'look-t‿at',
    explanation: "Quy tắc Nối âm: Đuôi -ed vô thanh sau âm /k/ đọc là /t/, nối bật hơi dứt khoát sang nguyên âm /æ/ của 'at' -> /lʊk.tæt/."
  },
  'looked up': {
    linked: 'loo-ktup',
    explanation: "Quy tắc Nối âm: Âm đuôi /t/ (từ đuôi -ed vô thanh) của 'looked' nối liền sang nguyên âm /ʌ/ của 'up'."
  },
  'stopped it': {
    linked: 'stop-t‿it',
    explanation: "Quy tắc Nối âm: Đuôi -ed vô thanh sau /p/ đọc là /t/, nối dứt khoát sang nguyên âm /ɪ/ của 'it' -> /stɒp.tɪt/."
  },
  'cleaned up': {
    linked: 'clean-d‿up',
    explanation: "Quy tắc Nối âm: Đuôi -ed hữu thanh sau phụ âm rung /n/ đọc là /d/, nối trầm ấm sang nguyên âm /ʌ/ của 'up' -> /kliːn.dʌp/."
  },
  'played a': {
    linked: 'play-d‿a',
    explanation: "Quy tắc Nối âm: Đuôi -ed hữu thanh sau nguyên âm rung /eɪ/ đọc là /d/, nối sang nguyên âm lướt /ə/ của 'a' -> /pleɪ.də/."
  },
  'decided on': {
    linked: 'decide-d-ɪd‿on',
    explanation: "Quy tắc Nối âm: Đuôi -ed sau âm /d/ đọc là /ɪd/ (thêm 1 âm tiết), âm cuối /d/ nối trực tiếp sang nguyên âm /ɒ/ của 'on' -> /dɪˈsaɪ.dɪ.dɒn/."
  },
  'naked eye': {
    linked: 'nake-d-ɪd‿eye',
    explanation: "Quy tắc Nối âm Tính Từ Ngoại Lệ: Tính từ 'naked' luôn có đuôi -ed đọc là /ɪd/, âm /d/ nối sang nguyên âm đôi /aɪ/ của 'eye' -> /ˈneɪ.kɪ.daɪ/."
  },
  'wants it': {
    linked: 'wan-tsit',
    explanation: "Quy tắc Nối âm: Âm đuôi /s/ của 'wants' nối liền sang nguyên âm /ɪ/ của 'it'."
  },
  'could you': {
    linked: 'cou-dju',
    explanation: "Biến âm (Assimilation): Âm đuôi /d/ của 'could' kết hợp với bán nguyên âm /j/ của 'you' tạo thành âm bật /dʒ/ mượt mà ('cou-dju')."
  },
  'would you': {
    linked: 'wou-dju',
    explanation: "Biến âm (Assimilation): Âm đuôi /d/ của 'would' kết hợp với bán nguyên âm /j/ của 'you' tạo thành âm bật /dʒ/ ('wou-dju')."
  },
  'did you': {
    linked: 'di-dju',
    explanation: "Biến âm (Assimilation): Âm đuôi /d/ của 'did' kết hợp với bán nguyên âm /j/ của 'you' tạo thành âm bật /dʒ/ ('di-dju')."
  },
  'can you': {
    linked: 'can-yu',
    explanation: "Phụ âm mũi /n/ của 'can' lướt nhẹ sang bán nguyên âm /j/ của 'you' tạo dòng chảy âm thanh liền mạch."
  },
  'want you': {
    linked: 'wan-chu',
    explanation: "Biến âm (Assimilation): Âm đuôi /t/ của 'want' gặp bán nguyên âm /j/ của 'you' biến đổi thành âm bật /tʃ/ ('wan-chu')."
  },
  'want to': {
    linked: 'wan-na',
    explanation: "Nuốt âm (Elision): Trong văn nói tự nhiên, 'want to' được nối và nuốt âm nhẹ thành 'wanna'."
  },
  'going to': {
    linked: 'gon-na',
    explanation: "Nuốt âm (Elision): Trong giao tiếp thường nhật, 'going to' lướt thành 'gonna'."
  },
  'check in': {
    linked: 'che-kin',
    explanation: "Phụ âm sang Nguyên âm: Âm đuôi /k/ của 'check' nối thẳng sang nguyên âm ngắn /ɪ/ của 'in' tạo nhịp 'che-kin'."
  },
  'check out': {
    linked: 'che-kout',
    explanation: "Phụ âm sang Nguyên âm: Âm đuôi /k/ của 'check' nối liền sang nguyên âm đôi /aʊ/ của 'out'."
  },
  'clean up': {
    linked: 'clea-nup',
    explanation: "Phụ âm sang Nguyên âm: Âm đuôi /n/ của 'clean' nối liền sang nguyên âm ngắn /ʌ/ của 'up'."
  },
  'pick up': {
    linked: 'pic-kup',
    explanation: "Phụ âm sang Nguyên âm: Âm đuôi /k/ của 'pick' nối sang nguyên âm ngắn /ʌ/ của 'up'."
  },
  'set up': {
    linked: 'se-tup',
    explanation: "Phụ âm sang Nguyên âm: Âm đuôi /t/ của 'set' nối sang nguyên âm ngắn /ʌ/ của 'up'."
  },
  'look at': {
    linked: 'loo-kat',
    explanation: "Phụ âm sang Nguyên âm: Âm đuôi /k/ của 'look' nối sang nguyên âm mở /æ/ của 'at'."
  },
  'looking at': {
    linked: 'loo-kin-gat',
    explanation: "Phụ âm sang Nguyên âm: Âm mũi /ŋ/ của 'looking' nối sang nguyên âm /æ/ của 'at'."
  },
  'work on': {
    linked: 'wor-kon',
    explanation: "Phụ âm sang Nguyên âm: Âm đuôi /k/ của 'work' nối thẳng sang nguyên âm /ɒ/ của 'on'."
  },
  'turn on': {
    linked: 'tur-non',
    explanation: "Phụ âm sang Nguyên âm: Âm đuôi /n/ của 'turn' nối sang nguyên âm /ɒ/ của 'on'."
  },
  'turn off': {
    linked: 'tur-noff',
    explanation: "Phụ âm sang Nguyên âm: Âm đuôi /n/ của 'turn' nối sang nguyên âm /ɒ/ của 'off'."
  },
  'turn down': {
    linked: 'turn-down',
    explanation: "Phụ âm /n/ giữ hơi chuyển nhanh sang âm bật /d/ của 'down' không ngắt quãng."
  },
  'give up': {
    linked: 'gi-vup',
    explanation: "Phụ âm sang Nguyên âm: Âm răng môi /v/ của 'give' nối sang nguyên âm /ʌ/ của 'up'."
  },
  'give it': {
    linked: 'gi-vit',
    explanation: "Phụ âm sang Nguyên âm: Âm răng môi /v/ của 'give' nối sang nguyên âm /ɪ/ của 'it'."
  },
  'give us': {
    linked: 'gi-vus',
    explanation: "Phụ âm sang Nguyên âm: Âm răng môi /v/ của 'give' nối sang nguyên âm /ʌ/ của 'us'."
  },
  'take it': {
    linked: 'tay-kit',
    explanation: "Phụ âm sang Nguyên âm: Âm đuôi /k/ của 'take' nối sang nguyên âm /ɪ/ của 'it'."
  },
  'take a': {
    linked: 'tay-ka',
    explanation: "Phụ âm sang Nguyên âm: Âm đuôi /k/ của 'take' nối sang nguyên âm lướt nhẹ /ə/ của 'a'."
  },
  'make it': {
    linked: 'may-kit',
    explanation: "Phụ âm sang Nguyên âm: Âm đuôi /k/ của 'make' nối sang nguyên âm /ɪ/ của 'it'."
  },
  'make a': {
    linked: 'may-ka',
    explanation: "Phụ âm sang Nguyên âm: Âm đuôi /k/ của 'make' nối sang nguyên âm lướt /ə/ của 'a'."
  },
  'tell us': {
    linked: 'tel-lus',
    explanation: "Phụ âm sang Nguyên âm: Âm uốn lưỡi /l/ của 'tell' nối sang nguyên âm ngắn /ʌ/ của 'us'."
  },
  'ask us': {
    linked: 'as-kus',
    explanation: "Phụ âm sang Nguyên âm: Âm đuôi /k/ của 'ask' nối sang nguyên âm ngắn /ʌ/ của 'us'."
  },
  'help us': {
    linked: 'hel-pus',
    explanation: "Phụ âm sang Nguyên âm: Âm bật môi /p/ của 'help' nối sang nguyên âm ngắn /ʌ/ của 'us'."
  },
  'help out': {
    linked: 'hel-pout',
    explanation: "Phụ âm sang Nguyên âm: Âm bật môi /p/ của 'help' nối sang nguyên âm đôi /aʊ/ của 'out'."
  },
  'wrap up': {
    linked: 'wra-pup',
    explanation: "Phụ âm sang Nguyên âm: Âm bật môi /p/ của 'wrap' nối sang nguyên âm ngắn /ʌ/ của 'up'."
  },
  'run out': {
    linked: 'ru-nout',
    explanation: "Phụ âm sang Nguyên âm: Âm đuôi /n/ của 'run' nối sang nguyên âm đôi /aʊ/ của 'out'."
  },
  'find out': {
    linked: 'fin-dout',
    explanation: "Phụ âm sang Nguyên âm: Âm đuôi /d/ của 'find' nối sang nguyên âm đôi /aʊ/ của 'out'."
  },
  'figure out': {
    linked: 'fi-gyu-rout',
    explanation: "Phụ âm sang Nguyên âm: Âm uốn lưỡi /r/ của 'figure' nối sang nguyên âm đôi /aʊ/ của 'out'."
  },
  'chill out': {
    linked: 'chil-lout',
    explanation: "Phụ âm sang Nguyên âm: Âm uốn lưỡi /l/ của 'chill' nối sang nguyên âm đôi /aʊ/ của 'out'."
  },
  'hang out': {
    linked: 'han-gout',
    explanation: "Phụ âm sang Nguyên âm: Âm ngạc mềm /ŋ/ của 'hang' nối sang nguyên âm đôi /aʊ/ của 'out'."
  },
  'fill out': {
    linked: 'fil-lout',
    explanation: "Phụ âm sang Nguyên âm: Âm /l/ của 'fill' nối sang nguyên âm đôi /aʊ/ của 'out'."
  },
  'fill in': {
    linked: 'fil-lin',
    explanation: "Phụ âm sang Nguyên âm: Âm /l/ của 'fill' nối sang nguyên âm ngắn /ɪ/ của 'in'."
  },
  'sign in': {
    linked: 'si-gnin',
    explanation: "Phụ âm sang Nguyên âm: Âm đuôi /n/ của 'sign' nối sang nguyên âm ngắn /ɪ/ của 'in'."
  },
  'sign up': {
    linked: 'si-gnup',
    explanation: "Phụ âm sang Nguyên âm: Âm đuôi /n/ của 'sign' nối sang nguyên âm ngắn /ʌ/ của 'up'."
  },
  'sort of': {
    linked: 'sor-tov',
    explanation: "Phụ âm sang Nguyên âm: Âm đuôi /t/ của 'sort' nối sang nguyên âm /ə/ của 'of'."
  },
  'kind of': {
    linked: 'kin-dov',
    explanation: "Phụ âm sang Nguyên âm: Âm đuôi /d/ của 'kind' nối sang nguyên âm /ə/ của 'of'."
  },
  'lot of': {
    linked: 'lo-tov',
    explanation: "Phụ âm sang Nguyên âm: Âm đuôi /t/ của 'lot' nối sang nguyên âm /ə/ của 'of'."
  },
  'part of': {
    linked: 'par-tov',
    explanation: "Phụ âm sang Nguyên âm: Âm đuôi /t/ của 'part' nối sang nguyên âm /ə/ của 'of'."
  },
  'is a': {
    linked: 'i-za',
    explanation: "Phụ âm sang Nguyên âm: Âm xì rung /z/ của 'is' nối sang nguyên âm lướt /ə/ của 'a'."
  },
  'is it': {
    linked: 'i-zit',
    explanation: "Phụ âm sang Nguyên âm: Âm xì rung /z/ của 'is' nối sang nguyên âm ngắn /ɪ/ của 'it'."
  },
  'was a': {
    linked: 'wa-za',
    explanation: "Phụ âm sang Nguyên âm: Âm xì rung /z/ của 'was' nối sang nguyên âm lướt /ə/ của 'a'."
  },
  'has a': {
    linked: 'ha-za',
    explanation: "Phụ âm sang Nguyên âm: Âm xì rung /z/ của 'has' nối sang nguyên âm lướt /ə/ của 'a'."
  },
  'have a': {
    linked: 'ha-va',
    explanation: "Phụ âm sang Nguyên âm: Âm răng môi /v/ của 'have' nối sang nguyên âm lướt /ə/ của 'a'."
  },
  'need a': {
    linked: 'nee-da',
    explanation: "Phụ âm sang Nguyên âm: Âm đuôi /d/ của 'need' nối sang nguyên âm lướt /ə/ của 'a'."
  },
  'with a': {
    linked: 'wi-tha',
    explanation: "Phụ âm sang Nguyên âm: Âm kẹp lưỡi /ð/ của 'with' nối sang nguyên âm lướt /ə/ của 'a'."
  },
  'in a': {
    linked: 'i-na',
    explanation: "Phụ âm sang Nguyên âm: Âm đuôi /n/ của 'in' nối sang nguyên âm lướt /ə/ của 'a'."
  },
  'on a': {
    linked: 'o-na',
    explanation: "Phụ âm sang Nguyên âm: Âm đuôi /n/ của 'on' nối sang nguyên âm lướt /ə/ của 'a'."
  },
  'for a': {
    linked: 'fo-ra',
    explanation: "Phụ âm sang Nguyên âm: Âm uốn lưỡi /r/ của 'for' nối sang nguyên âm lướt /ə/ của 'a'."
  },
  'at a': {
    linked: 'a-ta',
    explanation: "Phụ âm sang Nguyên âm: Âm đuôi /t/ của 'at' nối sang nguyên âm lướt /ə/ của 'a'."
  },
  'think about': {
    linked: 'thin-kabout',
    explanation: "Phụ âm sang Nguyên âm: Âm đuôi /k/ của 'think' nối sang nguyên âm /ə/ của 'about'."
  },
  'talk about': {
    linked: 'tal-kabout',
    explanation: "Phụ âm sang Nguyên âm: Âm đuôi /k/ của 'talk' nối sang nguyên âm /ə/ của 'about'."
  },
  'care about': {
    linked: 'ca-rabout',
    explanation: "Phụ âm sang Nguyên âm: Âm uốn lưỡi /r/ của 'care' nối sang nguyên âm /ə/ của 'about'."
  },
  'piece of': {
    linked: 'pie-sov',
    explanation: "Phụ âm sang Nguyên âm: Âm xì nhẹ /s/ của 'piece' nối liền sang nguyên âm /əv/ của 'of'."
  },
  'out of': {
    linked: 'ou-tov',
    explanation: "Phụ âm sang Nguyên âm: Âm đuôi /t/ của 'out' lướt sang nguyên âm /əv/ của 'of'."
  },
  'break a': {
    linked: 'bray-ka',
    explanation: "Phụ âm sang Nguyên âm: Âm đuôi /k/ của 'break' nối sang nguyên âm lướt /ə/ của 'a'."
  },
  'call it': {
    linked: 'cal-lit',
    explanation: "Phụ âm sang Nguyên âm: Âm uốn lưỡi /l/ của 'call' nối sang nguyên âm ngắn /ɪ/ của 'it'."
  },
  'step in': {
    linked: 'ste-pin',
    explanation: "Phụ âm sang Nguyên âm: Âm bật môi /p/ của 'step' nối sang nguyên âm ngắn /ɪ/ của 'in'."
  },
  'step into': {
    linked: 'ste-pinto',
    explanation: "Phụ âm sang Nguyên âm: Âm bật môi /p/ của 'step' nối sang nguyên âm ngắn /ɪ/ của 'into'."
  },
  'hold on': {
    linked: 'hol-don',
    explanation: "Phụ âm sang Nguyên âm: Âm đuôi /d/ của 'hold' nối sang nguyên âm /ɒ/ của 'on'."
  },
  'drop in': {
    linked: 'dro-pin',
    explanation: "Phụ âm sang Nguyên âm: Âm bật môi /p/ của 'drop' nối sang nguyên âm ngắn /ɪ/ của 'in'."
  },
  'show up': {
    linked: 'sho-wup',
    explanation: "Nối âm qua bán nguyên âm /w/: Âm đuôi tròn môi /oʊ/ lướt nhẹ âm /w/ sang nguyên âm /ʌ/ của 'up'."
  }
};

/**
 * Classifies a sentence for Intonation (Rising vs Falling)
 */
function classifySentenceIntonation(sentence: string): { pitch: 'rising' | 'falling'; explanation: string } {
  const clean = sentence.trim();
  const lower = clean.toLowerCase();

  const isQuestion = clean.endsWith('?');
  const isWhQuestion = /^(who|what|where|when|why|how|which|whose)\b/i.test(lower);
  const isYesNoAuxiliary = /^(is|are|am|was|were|do|does|did|have|has|had|can|could|would|will|shall|should|may|might|must)\b/i.test(lower);
  const isPoliteInquiry = /^(would you mind|could you please|can you please|do you mind|is it okay if|any chance you)\b/i.test(lower);

  if (isQuestion) {
    if (isWhQuestion) {
      return {
        pitch: 'falling',
        explanation: `Xuống giọng ở cuối câu hỏi Wh- ("${clean}"). Quy tắc: Câu hỏi bắt đầu bằng từ để hỏi (Who, What, Where, When, Why, How) xuống giọng ở cuối câu để thể hiện sự dứt khoát và tập trung lấy thông tin cụ thể.`
      };
    } else if (isYesNoAuxiliary || isPoliteInquiry) {
      return {
        pitch: 'rising',
        explanation: `Lên giọng ở cuối câu hỏi Yes/No hoặc câu đề nghị thăm dò ("${clean}"). Quy tắc: Câu hỏi nghi vấn hoặc nhờ vả lịch sự lên giọng ở cuối câu để biểu thị thái độ cởi mở và chờ đợi xác nhận.`
      };
    } else {
      return {
        pitch: 'rising',
        explanation: `Lên giọng ở cuối câu hỏi xác nhận thông tin ("${clean}"). Quy tắc: Ngữ điệu đi lên dùng để kiểm tra lại tính chính xác với người nghe.`
      };
    }
  } else {
    if (clean.endsWith('!')) {
      return {
        pitch: 'falling',
        explanation: `Xuống giọng ở cuối câu cảm thán hoặc mệnh lệnh ("${clean}"). Quy tắc: Điểm rơi ngữ điệu ở cuối câu tạo độ dứt khoát và nhấn mạnh ý nghĩa hoàn chỉnh.`
      };
    }
    return {
      pitch: 'falling',
      explanation: `Xuống giọng ở cuối câu khẳng định / trần thuật ("${clean}"). Quy tắc: Câu kể, câu phát biểu có ngữ điệu xuống giọng ở cuối câu để khẳng định thông điệp đã hoàn tất và chắc chắn.`
    };
  }
}

/**
 * GENERATOR: Intonation Drills for Communication Lessons
 * STRICT REQUIREMENT: Phải lấy các ví dụ từ đúng cấu trúc ở phần cấu trúc đa dạng của bài đó
 */
function generateCommunicationIntonation(topic: Topic): IntonationDrillItem[] {
  const structures = topic.structures || [];
  if (structures.length === 0) {
    return [
      {
        sentence: "Do you have any questions for me?",
        translation: "Bạn có câu hỏi nào dành cho tôi không?",
        pitch: "rising",
        explanation: "Lên giọng ở cuối câu hỏi Yes/No để biểu thị sự thăm dò ngữ cảnh."
      },
      {
        sentence: "I am ready to get started.",
        translation: "Tôi đã sẵn sàng để bắt đầu rồi.",
        pitch: "falling",
        explanation: "Xuống giọng ở cuối câu khẳng định để tạo sự chắc chắn."
      }
    ];
  }

  const items: IntonationDrillItem[] = [];

  // Iterate over topic.structures and extract sentences
  for (let i = 0; i < structures.length; i++) {
    const s = structures[i];
    
    // Check casualStyle example/phrase
    const casualEx = s.casualStyle?.example || s.phrase;
    const casualTrans = s.casualStyle?.translation || s.vietnamese;
    if (casualEx) {
      const cls = classifySentenceIntonation(casualEx);
      items.push({
        sentence: casualEx,
        translation: casualTrans,
        pitch: cls.pitch,
        explanation: cls.explanation
      });
    }

    // Check business example
    const bizEx = s.business?.example;
    const bizTrans = s.business?.translation;
    if (bizEx && bizEx !== casualEx) {
      const cls = classifySentenceIntonation(bizEx);
      items.push({
        sentence: bizEx,
        translation: bizTrans || s.vietnamese,
        pitch: cls.pitch,
        explanation: cls.explanation
      });
    }

    // Check superCasual example
    const superEx = s.superCasual?.example;
    const superTrans = s.superCasual?.translation;
    if (superEx && superEx !== casualEx && superEx !== bizEx) {
      const cls = classifySentenceIntonation(superEx);
      items.push({
        sentence: superEx,
        translation: superTrans || s.vietnamese,
        pitch: cls.pitch,
        explanation: cls.explanation
      });
    }
  }

  // Ensure balance of rising and falling if available
  const risingItems = items.filter(it => it.pitch === 'rising');
  const fallingItems = items.filter(it => it.pitch === 'falling');

  // If there are no rising items among structures (e.g. all structures were statements),
  // derive natural Yes/No inquiry questions directly from the topic structures:
  if (risingItems.length === 0 && structures.length > 0) {
    for (const s of structures.slice(0, 2)) {
      const p = s.phrase.replace(/[.!?]/g, '').trim();
      let qSentence = `Would you like to ${p.charAt(0).toLowerCase() + p.slice(1)}?`;
      if (/^(i am|i'm|i would|i'd|i prefer)/i.test(p)) {
        qSentence = p.replace(/^i am\b/i, 'Are you')
                     .replace(/^i'm\b/i, 'Are you')
                     .replace(/^i would like\b/i, 'Would you like')
                     .replace(/^i'd like\b/i, 'Would you like')
                     .replace(/^i prefer\b/i, 'Do you prefer') + '?';
      } else if (!qSentence.endsWith('?')) {
        qSentence = `Could you ${p.charAt(0).toLowerCase() + p.slice(1)}?`;
      }
      risingItems.push({
        sentence: qSentence,
        translation: `Hỏi xác nhận cấu trúc: "${s.vietnamese}"?`,
        pitch: 'rising',
        explanation: `Lên giọng ở cuối câu hỏi Yes/No phái sinh từ cấu trúc "${s.phrase}" để thăm dò ý kiến đối phương một cách lịch thiệp.`
      });
    }
  }

  // Interleave rising and falling for an optimal interactive test flow
  const combined: IntonationDrillItem[] = [];
  const maxLen = Math.max(risingItems.length, fallingItems.length);
  for (let idx = 0; idx < maxLen; idx++) {
    if (risingItems[idx]) combined.push(risingItems[idx]);
    if (fallingItems[idx]) combined.push(fallingItems[idx]);
    if (combined.length >= 6) break;
  }

  return combined.length > 0 ? combined : items.slice(0, 5);
}

/**
 * GENERATOR: Intonation Drills for Essential Word Bank Lessons
 * STRICT REQUIREMENT: Bỏ đối thoại & cấu trúc, intonation phải lấy các ví dụ có từ vựng liên quan đến bài học tương ứng
 */
function generateWordBankIntonation(topic: Topic): IntonationDrillItem[] {
  const words = topic.words || [];
  if (words.length === 0) {
    return [
      {
        sentence: "Do you understand this vocabulary?",
        translation: "Bạn có hiểu từ vựng này không?",
        pitch: "rising",
        explanation: "Lên giọng ở cuối câu hỏi Yes/No để biểu thị sự thăm dò."
      }
    ];
  }

  const items: IntonationDrillItem[] = [];

  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    const ex = w.example;
    if (!ex) continue;

    // 1. Sentence directly from example
    const cls = classifySentenceIntonation(ex);
    items.push({
      sentence: ex,
      translation: `Ví dụ chứa "${w.word}" (${w.translation || ''}): ${ex}`,
      pitch: cls.pitch,
      explanation: cls.pitch === 'falling'
        ? `Xuống giọng ở cuối câu kể/khẳng định chứa từ vựng "${w.word}" (${w.translation || ''}) để truyền tải ý nghĩa hoàn chỉnh, dứt khoát.`
        : `Lên giọng ở cuối câu hỏi chứa từ vựng "${w.word}" (${w.translation || ''}) để thăm dò ý kiến.`
    });

    // 2. If the example is falling, also provide a conversational Yes/No question with w.word to practice rising pitch
    if (cls.pitch === 'falling') {
      const cleanWord = w.word.toLowerCase().replace(/[^a-z0-9 ]/gi, '');
      const qSentence = `Did you know how to use the phrase "${w.word}"?`;
      items.push({
        sentence: qSentence,
        translation: `Hỏi thăm dò về từ vựng "${w.word}" (${w.translation || ''})?`,
        pitch: 'rising',
        explanation: `Lên giọng ở cuối câu hỏi Yes/No nhằm kiểm tra khả năng vận dụng từ vựng "${w.word}".`
      });
    }

    if (items.length >= 6) break;
  }

  // Interleave to balance rising and falling
  const rising = items.filter(it => it.pitch === 'rising');
  const falling = items.filter(it => it.pitch === 'falling');
  const result: IntonationDrillItem[] = [];
  const max = Math.max(rising.length, falling.length);
  for (let i = 0; i < max; i++) {
    if (falling[i]) result.push(falling[i]);
    if (rising[i]) result.push(rising[i]);
    if (result.length >= 6) break;
  }

  return result.length > 0 ? result : items.slice(0, 5);
}

/**
 * Public selector for Intonation Drills
 */
export function getIntonationDrills(topic: Topic, rawTopic: Topic): IntonationDrillItem[] {
  // Check howToSpeak manual dataset
  const speakData = rawTopic.howToSpeak?.find(h => h.type === 'intonation');
  if (speakData?.items && speakData.items.length > 0) {
    return speakData.items.map(item => {
      const lastWordPitch = item.words?.[item.words.length - 1]?.pitch || 'falling';
      const mainPitch = item.words?.find((w: any) => w.pitch === 'rising') ? 'rising' : lastWordPitch;
      return {
        sentence: item.sentence,
        translation: item.translation,
        pitch: mainPitch === 'rising' ? 'rising' : 'falling',
        explanation: item.translation
      };
    });
  }

  const isWordBank = topic.category !== 'Communication' || ['Slang', 'Life', 'PhrasalVerbs', 'Idioms', 'Collocations'].includes(topic.category as string);

  if (isWordBank) {
    return generateWordBankIntonation(topic);
  } else {
    return generateCommunicationIntonation(topic);
  }
}

/**
 * Helper to scan a sentence for phonetic linking pairs
 */
function findLinkingInSentence(sentence: string): { phrase: string; linked: string; explanation: string } | null {
  const lower = sentence.toLowerCase().replace(/[.,!?:;"]/g, ' ');
  
  // 1. Check curated dictionary first
  for (const [key, val] of Object.entries(PHONETIC_LINKING_DICT)) {
    const regex = new RegExp(`\\b${key}\\b`, 'i');
    if (regex.test(lower)) {
      return {
        phrase: key.toUpperCase(),
        linked: val.linked,
        explanation: val.explanation
      };
    }
  }

  // 2. Dynamic Consonant to Vowel matching on adjacent words
  const words = lower.split(/\s+/).filter(Boolean);
  const vowels = new Set(['a', 'e', 'i', 'o', 'u']);

  for (let i = 0; i < words.length - 1; i++) {
    const w1 = words[i];
    const w2 = words[i + 1];
    if (w1.length < 2 || w2.length < 1) continue;

    const lastChar = w1.charAt(w1.length - 1);
    const firstChar = w2.charAt(0);

    // If w1 ends in consonant and w2 starts in vowel
    if (!vowels.has(lastChar) && vowels.has(firstChar) && /[a-z]/.test(lastChar)) {
      return {
        phrase: `${w1.toUpperCase()} ${w2.toUpperCase()}`,
        linked: `${w1}-⁀-${w2}`,
        explanation: `Quy tắc Phụ âm sang Nguyên âm: Phụ âm cuối /${lastChar}/ của từ '${w1}' nối trực tiếp sang nguyên âm /${firstChar}/ của từ '${w2}' tạo thành âm liền '${w1}-${w2}'.`
      };
    }
  }

  return null;
}

/**
 * GENERATOR: Connected Speech (Nối âm) Drills for Communication Lessons
 * STRICT REQUIREMENT: Phải lấy các ví dụ từ đúng cấu trúc ở phần cấu trúc đa dạng của bài đó
 */
function generateCommunicationLinking(topic: Topic): LinkingDrillItem[] {
  const structures = topic.structures || [];
  const results: LinkingDrillItem[] = [];
  const seenPhrases = new Set<string>();

  for (const s of structures) {
    const candidateSentences = [
      s.business?.example,
      s.casualStyle?.example,
      s.superCasual?.example,
      s.phrase
    ].filter(Boolean) as string[];

    for (const sent of candidateSentences) {
      const match = findLinkingInSentence(sent);
      if (match && !seenPhrases.has(match.phrase)) {
        seenPhrases.add(match.phrase);
        results.push({
          phrase: match.phrase,
          sentence: sent,
          linked: match.linked,
          explanation: match.explanation
        });
      }
      if (results.length >= 5) break;
    }
    if (results.length >= 5) break;
  }

  if (results.length === 0) {
    // If no linking could be found dynamically, provide standard structure-level link
    const firstStruct = structures[0];
    const phraseText = firstStruct ? firstStruct.phrase : "Could you help";
    results.push({
      phrase: "COULD YOU",
      sentence: firstStruct ? `Could you confirm: "${firstStruct.phrase}"?` : "Could you help me with this?",
      linked: "cou-dju",
      explanation: "Biến âm (Assimilation): Âm đuôi /d/ của 'could' gặp âm /j/ của 'you' tạo thành âm bật /dʒ/ ('cou-dju')."
    });
  }

  return results;
}

/**
 * GENERATOR: Connected Speech (Nối âm) Drills for Essential Word Bank Lessons
 * STRICT REQUIREMENT: Bỏ đối thoại & cấu trúc, nối âm phải lấy các ví dụ có từ vựng liên quan đến bài học tương ứng
 */
function generateWordBankLinking(topic: Topic): LinkingDrillItem[] {
  const words = topic.words || [];
  const results: LinkingDrillItem[] = [];
  const seenPhrases = new Set<string>();

  for (const w of words) {
    // 1. Check if the word itself is a multi-word linking expression
    const wordClean = w.word.trim();
    const matchInWord = findLinkingInSentence(wordClean);
    if (matchInWord && !seenPhrases.has(matchInWord.phrase)) {
      seenPhrases.add(matchInWord.phrase);
      results.push({
        phrase: matchInWord.phrase,
        sentence: w.example || `Let's practice the vocabulary: ${w.word}.`,
        linked: matchInWord.linked,
        explanation: `${matchInWord.explanation} (Nằm trực tiếp trong từ vựng "${w.word}": ${w.translation || ''}).`
      });
    } else if (w.example) {
      // 2. Check if the example sentence contains a linking sound
      const matchInEx = findLinkingInSentence(w.example);
      if (matchInEx && !seenPhrases.has(matchInEx.phrase)) {
        seenPhrases.add(matchInEx.phrase);
        results.push({
          phrase: matchInEx.phrase,
          sentence: w.example,
          linked: matchInEx.linked,
          explanation: `${matchInEx.explanation} (Ví dụ chứa từ vựng "${w.word}").`
        });
      }
    }
    if (results.length >= 5) break;
  }

  if (results.length === 0 && words.length > 0) {
    const firstWord = words[0];
    results.push({
      phrase: firstWord.word.toUpperCase(),
      sentence: firstWord.example,
      linked: firstWord.word.toLowerCase().replace(/\s+/g, '-⁀-'),
      explanation: `Luyện đọc nối mượt mà từ vựng "${firstWord.word}" (${firstWord.translation || ''}) theo tiết tấu tự nhiên.`
    });
  }

  return results;
}

/**
 * Public selector for Connected Speech (Nối âm) Drills
 */
export function getLinkingDrills(topic: Topic, rawTopic: Topic): LinkingDrillItem[] {
  // SPECIALIZED: 12 Diverse Ending Sounds (-s, -es, -ed) Linking Drills
  if (topic.id === 'hts-ending-sounds' || rawTopic.id === 'hts-ending-sounds') {
    return [
      {
        phrase: 'CUPS OF',
        sentence: 'She washes the coffee cups of hot drinks every morning.',
        linked: 'cup-s‿of (/kʌp.səv/)',
        explanation: "Cụm 1/12 (Đuôi -s Vô thanh sau /p/): Âm đuôi /s/ vô thanh của 'cups' nối trực tiếp sang nguyên âm /ʌ/ của 'of' -> /kʌp.səv/."
      },
      {
        phrase: 'CATS AND',
        sentence: 'Two friendly cats and dogs play happily in the backyard.',
        linked: 'cat-s‿and (/kæt.sænd/)',
        explanation: "Cụm 2/12 (Đuôi -s Vô thanh sau /t/): Âm đuôi /s/ vô thanh của 'cats' nối liền sang nguyên âm /æ/ của 'and' -> /kæt.sænd/."
      },
      {
        phrase: 'BOOKS IN',
        sentence: 'He arranges all his favorite books in the wooden bookshelf.',
        linked: 'book-s‿in (/bʊk.sɪn/)',
        explanation: "Cụm 3/12 (Đuôi -s Vô thanh sau /k/): Âm đuôi /s/ vô thanh của 'books' lướt sang nguyên âm ngắn /ɪ/ của 'in' -> /bʊk.sɪn/."
      },
      {
        phrase: 'LIVES IN',
        sentence: 'My best friend lives in a modern apartment in the city center.',
        linked: 'live-z‿in (/lɪv.zɪn/)',
        explanation: "Cụm 4/12 (Đuôi -s Hữu thanh sau phụ âm rung /v/): Đuôi -s đọc rung /z/, nối trực tiếp sang nguyên âm /ɪ/ của 'in' -> /lɪv.zɪn/."
      },
      {
        phrase: 'DAYS OFF',
        sentence: 'We took three sunny days off to relax and travel.',
        linked: 'day-z‿off (/deɪ.zɒf/)',
        explanation: "Cụm 5/12 (Đuôi -s Hữu thanh sau nguyên âm đôi rung /eɪ/): Âm đuôi rung /z/ của 'days' nối liền sang nguyên âm /ɒ/ của 'off' -> /deɪ.zɒf/."
      },
      {
        phrase: 'BUSES ARRIVE',
        sentence: 'Public buses arrive every ten minutes during morning rush hours.',
        linked: 'buse-s-ɪz‿arrive (/ˈbʌs.ɪ.zəˈraɪv/)',
        explanation: "Cụm 6/12 (Đuôi -es sau âm gió /s/ đọc /ɪz/): Thêm 1 âm tiết, âm cuối /z/ nối sang nguyên âm /ə/ của 'arrive' -> /ˈbʌs.ɪ.zəˈraɪv/."
      },
      {
        phrase: 'WATCHES OVER',
        sentence: 'The caring mother watches over her sleeping newborn baby.',
        linked: 'watche-s-ɪz‿over (/ˈwɒtʃ.ɪ.zoʊ.vər/)',
        explanation: "Cụm 7/12 (Đuôi -es sau âm xuýt /tʃ/ đọc /ɪz/): Âm cuối /z/ của 'watches' nối liền sang nguyên âm /oʊ/ của 'over' -> /ˈwɒtʃ.ɪ.zoʊ.vər/."
      },
      {
        phrase: 'BOXES OF',
        sentence: 'The movers carried heavy boxes of clothes into the bedroom.',
        linked: 'boxe-s-ɪz‿of (/ˈbɒk.sɪ.zəv/)',
        explanation: "Cụm 8/12 (Đuôi -es sau âm gió /ks/ đọc /ɪz/): Đuôi /ɪz/ với âm cuối /z/ nối trực tiếp sang nguyên âm /ə/ của 'of' -> /ˈbɒk.sɪ.zəv/."
      },
      {
        phrase: 'LOOKED AT',
        sentence: 'She looked at the roadmap carefully before driving.',
        linked: 'look-t‿at (/lʊk.tæt/)',
        explanation: "Cụm 9/12 (Đuôi -ed Vô thanh sau /k/ đọc là /t/): Âm /t/ vô thanh của 'looked' bật dứt khoát sang nguyên âm /æ/ của 'at' -> /lʊk.tæt/."
      },
      {
        phrase: 'STOPPED IT',
        sentence: 'The alert train driver saw the obstacle and stopped it in time.',
        linked: 'stop-t‿it (/stɒp.tɪt/)',
        explanation: "Cụm 10/12 (Đuôi -ed Vô thanh sau /p/ đọc là /t/): Âm /t/ vô thanh của 'stopped' nối thẳng sang nguyên âm /ɪ/ của 'it' -> /stɒp.tɪt/."
      },
      {
        phrase: 'CLEANED UP',
        sentence: 'They cleaned up the messy kitchen together after dinner.',
        linked: 'clean-d‿up (/kliːn.dʌp/)',
        explanation: "Cụm 11/12 (Đuôi -ed Hữu thanh sau phụ âm rung /n/ đọc là /d/): Âm /d/ của 'cleaned' nối sang nguyên âm /ʌ/ của 'up' -> /kliːn.dʌp/."
      },
      {
        phrase: 'DECIDED ON',
        sentence: 'The management decided on a new project to support the beloved team.',
        linked: 'decide-d-ɪd‿on (/dɪˈsaɪ.dɪ.dɒn/)',
        explanation: "Cụm 12/12 (Đuôi -ed đọc là /ɪd/ sau /d/ và tính từ ngoại lệ như naked, beloved): Thêm âm tiết /ɪd/, âm cuối /d/ nối trực tiếp sang nguyên âm /ɒ/ của 'on' -> /dɪˈsaɪ.dɪ.dɒn/."
      }
    ];
  }

  // Check howToSpeak manual dataset
  const speakData = rawTopic.howToSpeak?.find(h => h.type === 'connected_speech');
  if (speakData?.items && speakData.items.length > 0) {
    return speakData.items.map(item => {
      const linkedRepresentation = item.words?.map((w: any) => w.text + (w.linkToNext ? ' ⁀ ' : ' ')).join('').trim();
      return {
        phrase: item.sentence.split(' ').slice(0, 2).join(' '),
        sentence: item.sentence,
        linked: linkedRepresentation || item.sentence,
        explanation: item.translation
      };
    });
  }

  const isWordBank = topic.category !== 'Communication' || ['Slang', 'Life', 'PhrasalVerbs', 'Idioms', 'Collocations'].includes(topic.category as string);

  if (isWordBank) {
    return generateWordBankLinking(topic);
  } else {
    return generateCommunicationLinking(topic);
  }
}

/**
 * Phonetic Sound Discrimination Drills (Chọn từ theo quy tắc âm cuối & Cặp âm tối thiểu)
 */
export function getPhoneticDiscriminationDrills(topic: Topic): PhoneticDrillItem[] {
  if (topic.id === 'hts-ending-sounds') {
    return [
      {
        id: 'disc-end-01',
        question: 'Chọn từ có âm đuôi -s/-es phát âm là /s/ (Vô thanh sau /p, t, k, f, θ/):',
        hint: 'Mẹo nhớ: "Thảo Phải Phục Thời Kiến" (θ, p, f, t, k) - Dây thanh đới không rung.',
        audioTarget: 'cups',
        options: [
          { text: 'cups', ipa: '/kʌps/', isCorrect: true },
          { text: 'dogs', ipa: '/dɒɡz/', isCorrect: false },
          { text: 'buses', ipa: '/ˈbʌsɪz/', isCorrect: false },
          { text: 'rooms', ipa: '/ruːmz/', isCorrect: false }
        ],
        explanation: 'Quy tắc vàng: Tận cùng là phụ âm vô thanh /p/ ("cups") -> thêm -s phát âm là vô thanh /s/.'
      },
      {
        id: 'disc-end-02',
        question: 'Chọn từ có âm đuôi -s/-es phát âm là /ɪz/ (Âm gió / xuýt /s, z, ʃ, tʃ, dʒ, ʒ/):',
        hint: 'Mẹo nhớ: "Sóng Gió Chẳng Sợ Zó Giông" (s, z, ʃ, tʃ, ʒ, dʒ) - Tạo thêm 1 âm tiết.',
        audioTarget: 'watches',
        options: [
          { text: 'watches', ipa: '/ˈwɒtʃɪz/', isCorrect: true },
          { text: 'cats', ipa: '/kæts/', isCorrect: false },
          { text: 'books', ipa: '/bʊks/', isCorrect: false },
          { text: 'days', ipa: '/deɪz/', isCorrect: false }
        ],
        explanation: 'Quy tắc vàng: Tận cùng là âm xuýt /tʃ/ ("watches") -> thêm -es phát âm là /ɪz/ (thêm 1 âm tiết rõ rệt).'
      },
      {
        id: 'disc-end-03',
        question: 'Chọn từ có âm đuôi -s/-es phát âm là /z/ (Hữu thanh & Nguyên âm):',
        hint: 'Tất cả các nguyên âm đều là âm hữu thanh (dây thanh quản rung).',
        audioTarget: 'days',
        options: [
          { text: 'days', ipa: '/deɪz/', isCorrect: true },
          { text: 'hats', ipa: '/hæts/', isCorrect: false },
          { text: 'cliffs', ipa: '/klɪfs/', isCorrect: false },
          { text: 'maps', ipa: '/mæps/', isCorrect: false }
        ],
        explanation: 'Quy tắc vàng: Tận cùng là nguyên âm đôi /eɪ/ ("days") -> nguyên âm luôn rung cổ họng nên thêm -s đọc là /z/.'
      },
      {
        id: 'disc-end-04',
        question: 'Chọn từ có âm đuôi -ed phát âm là /t/ (Vô thanh sau /p, k, f, s, ʃ, tʃ/):',
        hint: 'Mẹo nhớ: "Chính Phủ Phát Sách Không Thèm Share" (tʃ, p, f, s, k, θ, ʃ).',
        audioTarget: 'looked',
        options: [
          { text: 'looked', ipa: '/lʊkt/', isCorrect: true },
          { text: 'played', ipa: '/pleɪd/', isCorrect: false },
          { text: 'wanted', ipa: '/ˈwɒntɪd/', isCorrect: false },
          { text: 'cleaned', ipa: '/kliːnd/', isCorrect: false }
        ],
        explanation: 'Quy tắc vàng: Tận cùng là phụ âm vô thanh /k/ ("looked") -> đuôi -ed phát âm là vô thanh /t/.'
      },
      {
        id: 'disc-end-05',
        question: 'Chọn từ có âm đuôi -ed phát âm là /ɪd/ (Sau âm /t/ hoặc /d/):',
        hint: 'Mẹo nhớ: "Tiền - Đô" (t - d) -> Bắt buộc thêm 1 âm tiết /ɪd/.',
        audioTarget: 'decided',
        options: [
          { text: 'decided', ipa: '/dɪˈsaɪdɪd/', isCorrect: true },
          { text: 'stopped', ipa: '/stɒpt/', isCorrect: false },
          { text: 'washed', ipa: '/wɒʃt/', isCorrect: false },
          { text: 'loved', ipa: '/lʌvd/', isCorrect: false }
        ],
        explanation: 'Quy tắc vàng: Động từ tận cùng bằng âm /d/ ("decided") -> thêm -ed đọc là /ɪd/ (quy tắc tiền-đô).'
      },
      {
        id: 'disc-end-06',
        question: 'Chọn TÍNH TỪ ĐẶC BIỆT (Ngoại lệ) có đuôi -ed luôn phát âm là /ɪd/:',
        hint: 'Tính từ mô tả mắt trần / trần trụi.',
        audioTarget: 'naked',
        options: [
          { text: 'naked', ipa: '/ˈneɪkɪd/', isCorrect: true },
          { text: 'worked', ipa: '/wɜːkt/', isCorrect: false },
          { text: 'cooked', ipa: '/kʊkt/', isCorrect: false },
          { text: 'walked', ipa: '/wɔːkt/', isCorrect: false }
        ],
        explanation: 'Trường hợp ngoại lệ vàng: Tính từ "naked" (mắt trần/khỏa thân) luôn phát âm là /ɪd/ thay vì /t/!'
      },
      {
        id: 'disc-end-07',
        question: 'Chọn TÍNH TỪ ĐẶC BIỆT (Ngoại lệ) có đuôi -ed luôn phát âm là /ɪd/:',
        hint: 'Tính từ mô tả độc ác / quỷ quyệt.',
        audioTarget: 'wicked',
        options: [
          { text: 'wicked', ipa: '/ˈwɪkɪd/', isCorrect: true },
          { text: 'watched', ipa: '/wɒtʃt/', isCorrect: false },
          { text: 'fixed', ipa: '/fɪkst/', isCorrect: false },
          { text: 'missed', ipa: '/mɪst/', isCorrect: false }
        ],
        explanation: 'Trường hợp ngoại lệ vàng: Tính từ "wicked" (độc ác/tinh quái) luôn luôn phát âm là /ɪd/!'
      },
      {
        id: 'disc-end-08',
        question: 'Chọn TÍNH TỪ ĐẶC BIỆT (Ngoại lệ) có đuôi -ed luôn phát âm là /ɪd/:',
        hint: 'Tính từ mô tả sự thiêng liêng, trang trọng.',
        audioTarget: 'sacred',
        options: [
          { text: 'sacred', ipa: '/ˈseɪkrɪd/', isCorrect: true },
          { text: 'laughed', ipa: '/lɑːft/', isCorrect: false },
          { text: 'dropped', ipa: '/drɒpt/', isCorrect: false },
          { text: 'opened', ipa: '/ˈoʊpənd/', isCorrect: false }
        ],
        explanation: 'Trường hợp ngoại lệ vàng: Tính từ "sacred" (thiêng liêng) luôn luôn phát âm là /ɪd/!'
      },
      {
        id: 'disc-end-09',
        question: 'Chọn TÍNH TỪ ĐẶC BIỆT (Ngoại lệ) có đuôi -ed luôn phát âm là /ɪd/:',
        hint: 'Tính từ mô tả người/nơi chốn yêu dấu.',
        audioTarget: 'beloved',
        options: [
          { text: 'beloved', ipa: '/bɪˈlʌvɪd/', isCorrect: true },
          { text: 'called', ipa: '/kɔːld/', isCorrect: false },
          { text: 'planned', ipa: '/plænd/', isCorrect: false },
          { text: 'arrived', ipa: '/əˈraɪvd/', isCorrect: false }
        ],
        explanation: 'Trường hợp ngoại lệ vàng: Tính từ "beloved" (người yêu dấu/quê hương yêu quý) luôn phát âm là /ɪd/!'
      },
      {
        id: 'disc-end-10',
        question: 'Chọn từ có đuôi -ed phát âm là /d/ (Hữu thanh & Nguyên âm):',
        hint: 'Âm tận cùng là nguyên âm đôi /eɪ/ rung cổ họng.',
        audioTarget: 'played',
        options: [
          { text: 'played', ipa: '/pleɪd/', isCorrect: true },
          { text: 'stopped', ipa: '/stɒpt/', isCorrect: false },
          { text: 'visited', ipa: '/ˈvɪzɪtɪd/', isCorrect: false },
          { text: 'laughed', ipa: '/lɑːft/', isCorrect: false }
        ],
        explanation: 'Quy tắc vàng: Tận cùng là nguyên âm /eɪ/ (rung dây thanh quản) -> đuôi -ed phát âm là /d/.'
      }
    ];
  }

  if (topic.id === 'hts-minimal-pairs') {
    return [
      {
        id: 'disc-pair-01',
        question: 'Nghe & phân biệt cặp âm /iː/ vs /ɪ/: Chọn từ phát âm là "sheep" (ngân dài cười tươi):',
        hint: 'Âm /iː/ kéo dài mép sang 2 bên như đang cười; trong khi /ɪ/ phát âm ngắn dứt khoát.',
        audioTarget: 'sheep',
        options: [
          { text: 'sheep', ipa: '/ʃiːp/ (con cừu)', isCorrect: true },
          { text: 'ship', ipa: '/ʃɪp/ (con tàu)', isCorrect: false }
        ],
        explanation: 'Âm /iː/ có dấu hai chấm ngân dài căng cơ miệng; nếu phát âm ngắn dứt khoát sẽ biến thành "ship".'
      },
      {
        id: 'disc-pair-02',
        question: 'Nghe & phân biệt cặp âm /e/ vs /æ/: Chọn từ phát âm là "bad" (mở to hạ quai hàm):',
        hint: 'Âm /æ/ hạ sâu quai hàm tối đa vòm họng; /e/ chỉ mở miệng vừa phải.',
        audioTarget: 'bad',
        options: [
          { text: 'bad', ipa: '/bæd/ (tồi tệ)', isCorrect: true },
          { text: 'bed', ipa: '/bed/ (cái giường)', isCorrect: false }
        ],
        explanation: 'Âm /æ/ (a bẹt) yêu cầu mở vòm miệng to hết cỡ; nếu khép hẹp miệng người nghe sẽ tưởng bạn nói "bed"!'
      },
      {
        id: 'disc-pair-03',
        question: 'Nghe & phân biệt cặp âm /θ/ vs /s/: Chọn từ phát âm là "think" (kẹp đầu lưỡi thổi hơi):',
        hint: 'Đầu lưỡi thò ra giữa hai hàm răng thổi luồng hơi gió nhẹ ra ngoài.',
        audioTarget: 'think',
        options: [
          { text: 'think', ipa: '/θɪŋk/ (suy nghĩ)', isCorrect: true },
          { text: 'sink', ipa: '/sɪŋk/ (bồn rửa/chìm)', isCorrect: false }
        ],
        explanation: 'Âm /θ/ đặt lưỡi giữa hai hàm răng thổi hơi; nếu rụt lưỡi vào khép răng xì gió sẽ thành "sink" (bồn rửa).'
      },
      {
        id: 'disc-pair-04',
        question: 'Nghe & phân biệt cặp âm /ʃ/ vs /s/: Chọn từ phát âm là "she" (chu môi suỵt gió):',
        hint: 'Môi chu tròn hướng ra trước như ra hiệu im lặng "suỵt".',
        audioTarget: 'she',
        options: [
          { text: 'she', ipa: '/ʃiː/ (cô ấy)', isCorrect: true },
          { text: 'see', ipa: '/siː/ (nhìn thấy)', isCorrect: false }
        ],
        explanation: 'Âm /ʃ/ phải chu môi tròn ra trước; còn âm /s/ hai hàm răng khép hờ cười xì nhẹ.'
      },
      {
        id: 'disc-pair-05',
        question: 'Nghe & phân biệt cặp âm /uː/ vs /ʊ/: Chọn từ phát âm là "pool" (chu môi nhỏ ngân dài):',
        hint: 'Môi chu tròn nhỏ như huýt sáo, cơ môi căng tròn đẩy luồng hơi dài.',
        audioTarget: 'pool',
        options: [
          { text: 'pool', ipa: '/puːl/ (hồ bơi)', isCorrect: true },
          { text: 'pull', ipa: '/pʊl/ (kéo vào)', isCorrect: false }
        ],
        explanation: 'Âm /uː/ môi chu tròn nhỏ huýt sáo ngân dài; âm /ʊ/ cơ môi thả lỏng hoàn toàn dứt khoát.'
      },
      {
        id: 'disc-pair-06',
        question: 'Phân biệt âm đuôi: Từ nào có âm cuối bật từ cuống lưỡi /k/?',
        hint: 'Nâng cuống lưỡi chạm vòm miệng chặn hơi rồi bật nhanh.',
        audioTarget: 'like',
        options: [
          { text: 'like', ipa: '/laɪk/ (thích)', isCorrect: true },
          { text: 'life', ipa: '/laɪf/ (cuộc sống)', isCorrect: false },
          { text: 'light', ipa: '/laɪt/ (ánh sáng)', isCorrect: false },
          { text: 'line', ipa: '/laɪn/ (hàng lối)', isCorrect: false }
        ],
        explanation: 'Người Việt hay nuốt âm đuôi khiến các từ này nghe y chang nhau như "lai". Phải bật rõ âm /k/ trong "like"!'
      },
      {
        id: 'disc-pair-07',
        question: 'Nghe & phân biệt cặp âm /tʃ/ vs /dʒ/: Chọn từ phát âm là "cheap" (vô thanh không rung cổ):',
        hint: 'Chu môi giật lưỡi bật luồng gió sắc không rung cuống họng.',
        audioTarget: 'cheap',
        options: [
          { text: 'cheap', ipa: '/tʃiːp/ (giá rẻ)', isCorrect: true },
          { text: 'jeep', ipa: '/dʒiːp/ (xe jeep)', isCorrect: false }
        ],
        explanation: 'Âm /tʃ/ bật hơi vô thanh không rung dây thanh quản; còn /dʒ/ rung bần bật trong cuống họng.'
      },
      {
        id: 'disc-pair-08',
        question: 'Nghe & phân biệt cặp âm /ð/ vs /d/: Chọn từ phát âm là "they" (kẹp lưỡi rung đầu lưỡi):',
        hint: 'Đầu lưỡi kẹp giữa 2 hàm răng và rung rần rần ngay trên mặt lưỡi.',
        audioTarget: 'they',
        options: [
          { text: 'they', ipa: '/ðeɪ/ (họ/chúng nó)', isCorrect: true },
          { text: 'day', ipa: '/deɪ/ (ngày)', isCorrect: false }
        ],
        explanation: 'Âm /ð/ đầu lưỡi thò ra giữa hai hàm răng và rung tê cổ; không thụt vào trong nướu gõ như /d/.'
      }
    ];
  }

  // Fallback: draw from topic.words
  return (topic.words || []).map((w, idx) => ({
    id: `disc-gen-${idx}`,
    question: `Luyện nghe phát âm từ vựng: "${w.word}" (${w.translation || ''}):`,
    hint: `Phiên âm IPA chuẩn: ${w.ipa}`,
    audioTarget: w.word,
    options: [
      { text: w.word, ipa: w.ipa, isCorrect: true },
      { text: `Not ${w.word}`, ipa: '', isCorrect: false }
    ],
    explanation: `${w.definition || ''} (IPA: ${w.ipa})`
  }));
}

