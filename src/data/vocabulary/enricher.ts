import { Topic, Structure } from './types';

export type Dialogue = NonNullable<Topic['dialogues']>[number];
export type DialogueLine = Dialogue['lines'][number];

// Helper maps to inject highly natural English patterns, context examples, and Vietnamese translations for each style
const STUDENT_TEMPLATES = {
  business: {
    greetings: ["Good morning/afternoon, Professor.", "It is an absolute honor to introduce myself."],
    closing: ["Thank you very much for this academic opportunity.", "I look forward to secondary research and collaboration."],
    transition: ["Pardon the inquiry, but regarding...", "I would highly appreciate your academic guidance."]
  },
  superCasual: {
    greetings: ["Hey y'all! Meet...", "Hey ya! Just checking in."],
    closing: ["Stoked to nail this term together, no cap!", "Hit me up when you're free, bro."],
    transition: ["Ngl, this is pretty wild...", "Down for some sprint reviews later?"]
  }
};

const PROFESSIONAL_TEMPLATES = {
  business: {
    greetings: ["Dear esteemed colleagues,", "Good day. Allow me to introduce myself on this onboarding day."],
    closing: ["Thank you for your valuable attention.", "I look forward to our mutually beneficial collaboration."],
    transition: ["Regarding our current agenda...", "Please keep me apprised of any development."]
  },
  superCasual: {
    greetings: ["Hey folks!", "Hi team! Up and running."],
    closing: ["Let's crush this sprint, peeps!", "Catch ya later! Cheers."],
    transition: ["Just a quick ping here...", "Ngl, we gotta speed this up fr."]
  }
};

const BEAUTY_TEMPLATES = {
  business: {
    greetings: ["Good day. Welcome to our luxury salon.", "It is our privilege to attend to your wellness today."],
    closing: ["We sincerely hope you have experienced a transcendent session.", "Kindly advise if you require any beverage adjustment."],
    transition: ["Shall we commence with...", "Please allow me to inspect the progress..."]
  },
  superCasual: {
    greetings: ["Hey girl!", "Oh, hi honey! Look who's here."],
    closing: ["Gorgeous! You look absolutely stunning! ✨", "Check that shine! So lit."],
    transition: ["Let's get this party started!", "Gotta cure this under the lamp real quick."]
  }
};

const FRIENDS_TEMPLATES = {
  business: {
    greetings: ["Excuse me, pleased to make your acquaintance.", "Pardon me, it is a privilege to connect with you."],
    closing: ["I highly value our insightful cultural exchange.", "Let us maintain professional communication in the future."],
    transition: ["If I may enquire...", "Fascinating perspective regarding..."]
  },
  superCasual: {
    greetings: ["Hi buddy!", "Hey! What's crackin', buddy?"],
    closing: ["Catch you on Discord, fr!", "We gotta hang out again sometime soon, no cap."],
    transition: ["So wild, ngl...", "Wait, seriously? That's so suss!"]
  }
};

const PARENT_CHILD_TEMPLATES = {
  business: {
    greetings: ["Good afternoon, dear parent/child.", "I appreciate you taking time to discuss this with me."],
    closing: ["I respect our family standards profoundly.", "Thank you for sharing your thoughts with such maturity."],
    transition: ["Let us examine this academic matter...", "Regarding our mutual household rules..."]
  },
  superCasual: {
    greetings: ["Hey sweetie-pie! 🥰", "Hey champ!"],
    closing: ["Hugs and kisses! You're the best ever!", "Love you to the moon and back!"],
    transition: ["Wait, tells me all about it!", "Oh no! Totally bummed out!"]
  }
};

// Generates cohesive and high-quality 3-level registers for structures
function enrichStructure(struct: Structure, category: string, index: number = 0): Structure {
  const result: Structure = { ...struct };
  
  const basePhrase = struct.phrase;
  const baseMeaning = struct.meaning || "";
  const baseVietnamese = struct.vietnamese || "";
  const hasCasualFallback = !!struct.casual;

  // Let's determine the mood templates
  let currentGroup = PROFESSIONAL_TEMPLATES;
  if (category.toLowerCase().includes('student')) currentGroup = STUDENT_TEMPLATES;
  if (category.toLowerCase().includes('beauty') || category.toLowerCase().includes('nail')) currentGroup = BEAUTY_TEMPLATES;
  if (category.toLowerCase().includes('friend')) currentGroup = FRIENDS_TEMPLATES;
  if (category.toLowerCase().includes('parent')) currentGroup = PARENT_CHILD_TEMPLATES;

  // 1. Enrich CASUAL STYLE
  if (!result.casualStyle) {
    const casualPhrase = struct.casual || basePhrase;
    result.casualStyle = {
      phrase: casualPhrase,
      example: hasCasualFallback ? struct.casual! : `I think ${casualPhrase.toLowerCase()}`,
      translation: `[Phong cách tự nhiên] ${baseVietnamese}`
    };
  }

  // 2. Enrich BUSINESS / SEMI-FORMAL
  if (!result.business) {
    let formalPhrase = basePhrase;
    let formalExample = basePhrase;
    let formalTranslation = baseVietnamese;

    // Apply polite, semi-formal, professional transformations
    if (category.toLowerCase().includes('student')) {
      formalPhrase = basePhrase
        .replace(/hey|hi/gi, "Excuse me, Professor")
        .replace(/want/gi, "would highly appreciate the opportunity to")
        .replace(/can i|could i/gi, "Would it be permissible for me to");
      
      formalExample = `Professor, ${formalPhrase.substring(0, 1).toLowerCase()}${formalPhrase.substring(1)} for our class.`;
      formalTranslation = `[Học thuật & Trịnh trọng] Dạ thưa Thầy/Cô, xin được phép ${baseVietnamese.toLowerCase()}`;
    } else if (category.toLowerCase().includes('beauty') || category.toLowerCase().includes('nail')) {
      formalPhrase = basePhrase
        .replace(/want/gi, "would prefer")
        .replace(/look/gi, "Please observe")
        .replace(/is that okay/gi, "does this layout meet your standards");
      
      formalExample = `Dear modern client, ${formalPhrase.substring(0, 1).toLowerCase()}${formalPhrase.substring(1)}.`;
      formalTranslation = `[Chăm sóc khách hàng cao cấp] Dạ em xin phép mời chị, ${baseVietnamese.toLowerCase()}`;
    } else if (category.toLowerCase().includes('parent')) {
      formalPhrase = basePhrase
        .replace(/bummed|mad|sad/gi, "experiencing emotional difficulties");
      formalExample = `Let us analyze: "${formalPhrase}" as a family agreement.`;
      formalTranslation = `[Gia đình thấu cảm & Gắn kết giáo dục] Cha mẹ và con cùng ngồi chia sẻ: ${baseVietnamese}`;
    } else {
      // General professional / networking
      formalPhrase = basePhrase
        .replace(/yo|hey|hi/gi, "Good morning, pleasure to connect")
        .replace(/down to/gi, "inclined to")
        .replace(/free|busy/gi, "available / committed")
        .replace(/mind if i/gi, "Would it be convenient if I");
      formalExample = `For your consideration, ${formalPhrase.substring(0, 1).toLowerCase()}${formalPhrase.substring(1)} regarding our agenda.`;
      formalTranslation = `[Trang trọng & Lịch sự] Kính thưa anh/chị, xin được phép ${baseVietnamese.toLowerCase()}`;
    }

    result.business = {
      phrase: formalPhrase,
      example: formalExample,
      translation: formalTranslation
    };
  }

  // 3. Enrich SUPER CASUAL
  if (!result.superCasual) {
    let slangPhrase = basePhrase;
    let slangExample = basePhrase;
    let slangTranslation = baseVietnamese;

    if (category.toLowerCase().includes('student')) {
      const prefixes = ["Hey,", "Sup,", "Ngl,", "Bro, is", "Check this:"];
      const prefix = prefixes[index % prefixes.length];
      slangPhrase = `${prefix} ${basePhrase.toLowerCase().replace("could you", "wanna").replace("may i", "can I check")}`;
      slangExample = `${prefix} ngl, ${slangPhrase.toLowerCase().replace("...", "this semester is wild!")}`;
      slangTranslation = `[Đồng nghiệp / Bạn học thân thiết] Ê bồ tèo ơi, thực sực là ${baseVietnamese.toLowerCase()}`;
    } else if (category.toLowerCase().includes('beauty') || category.toLowerCase().includes('nail')) {
      const prefixes = ["Stunning!", "Gorgeous!", "Super chic!", "On point!", "Absolutely killer!"];
      const prefix = prefixes[index % prefixes.length];
      slangPhrase = `${prefix} ${basePhrase.toLowerCase()}`;
      slangExample = `Girl, ${prefix.toLowerCase().replace("!", "")} this design looks absolutely gorgeous, fr!`;
      slangTranslation = `[Giao lưu nồng nhiệt khách tiệm] Trời ơi bộ này xuất sắc ${prefix.toLowerCase().replace("!", "")} đỉnh chóp luôn chị iu, xịn đét mờ ê mê! ✨`;
    } else if (category.toLowerCase().includes('parent')) {
      slangPhrase = `Hey sweetie-pie, ${basePhrase.toLowerCase()}`;
      slangExample = `Oh wow, sweetie! ${slangPhrase} You did amazing, high five!`;
      slangTranslation = `[Nói chuyện cực kỳ cưng nựng, vui tươi] Ôi bé cưng ơi, ${baseVietnamese.toLowerCase()} ôm hôn con một cái nhen! ❤️`;
    } else if (category.toLowerCase().includes('friend')) {
      const prefixes = ["Yo!", "Hey buddy!", "What's crackin'!", "Wassup!", "Ngl,"];
      const prefix = prefixes[index % prefixes.length];
      slangPhrase = `${prefix} ${basePhrase.toLowerCase().replace("would you like to", "wanna")}`;
      slangExample = `${prefix} ${slangPhrase.toLowerCase().replace("...", "this awesome setup is so lit, hit me up!")}`;
      slangTranslation = `[Bạn thân quốc tế / Game thủ / Chat Discord] Thề luôn, đỉnh quá ông ơi, ${baseVietnamese.toLowerCase()} luôn sòng phẳng nhe!`;
    } else {
      // Professionals
      const prefixes = ["Hey team!", "Quick ping!", "Hey folks!", "Hi team!", "Just pinging!"];
      const prefix = prefixes[index % prefixes.length];
      slangPhrase = `${prefix} ${basePhrase.toLowerCase().replace("am responsible for", "deal with")}`;
      slangExample = `Team, ${prefix.toLowerCase()} checking in: ${slangPhrase.toLowerCase()} to secure our sprint delivery.`;
      slangTranslation = `[Nhắn Slack/Zalo siêu thân mật với cạ cứng phòng ban] Ê sếp iu / đồng nghiệp ruột ơi, tớ nhắn lẹ xíu để ${baseVietnamese.toLowerCase()}`;
    }

    result.superCasual = {
      phrase: slangPhrase,
      example: slangExample,
      translation: slangTranslation
    };
  }

  return result;
}

// Rewrites dialogue lines to match Business, Casual, and Super Casual moods
function enrichDialogue(original: Dialogue, category: string, school: 'business' | 'casual' | 'superCasual'): Dialogue {
  const result: Dialogue = {
    ...original,
    school,
    title: `${original.title} (${school === 'business' ? '👔 Business/Semi-formal' : school === 'superCasual' ? '⚡ Super Casual' : '💬 Casual Standard'})`
  };

  result.lines = original.lines.map((line, lineIdx) => {
    const newLine: DialogueLine = { ...line };
    const originalText = line.text;
    const originalTrans = line.translation || "";

    if (school === 'business') {
      // Apply polite executive academic rules
      if (category.toLowerCase().includes('student')) {
        newLine.text = originalText
          .replace(/hey|hi|hello/gi, "Good afternoon, excuse me.")
          .replace(/want to/gi, "intend to / would highly prefer to")
          .replace(/awesome|cool|great/gi, "highly significant / exceptional")
          .replace(/cuz/gi, "since it is important because")
          .replace(/run fast/gi, "proceed swiftly")
          .replace(/pack/gi, "fully utilized")
          .replace(/dorm/gi, "campus dormitory facility")
          .replace(/what about you/gi, "how about your perspective");
        
        newLine.translation = originalTrans
          .replace(/chào cậu|ấy ơi|này bồ/gi, "Dạ thưa anh/chị, xin chào.")
          .replace(/tớ|mình|em/gi, "Em")
          .replace(/cậu|bạn/gi, "Thầy/Cô/Anh/Chị")
          .replace(/ổn nha|được nha|chạy lẹ/gi, "Dạ rất tuyệt vời, tiến hành nhanh chóng ạ.");
      } else if (category.toLowerCase().includes('beauty') || category.toLowerCase().includes('nail')) {
        newLine.text = originalText
          .replace(/hey|hi/gi, "Welcome to our esteemed establishment.")
          .replace(/want my nails done|make my lash/gi, "would like to book an appointment for nail styling / lash session")
          .replace(/is that okay/gi, "does that correspond to your preference")
          .replace(/clumpy|heavy/gi, "showing structural density that requires professional adjustment")
          .replace(/cheap|price/gi, "cost-effective pricing system");
        
        newLine.translation = originalTrans
          .replace(/chào cưng|em yêu|chị yêu/gi, "Dạ chào Quý khách hàng.")
          .replace(/tiền tip|bo/gi, "tiền hoa hồng tri ân dịch vụ")
          .replace(/quẹt thẻ|tiền mặt|đóng sòng/gi, "thanh toán bằng phương thức chuyển khoản hoặc tiền mặt ạ.");
      } else if (category.toLowerCase().includes('parent')) {
        newLine.text = originalText
          .replace(/hey|hi/gi, "Good evening.")
          .replace(/dad|mom/gi, "Father / Mother")
          .replace(/busy|hectic/gi, "highly occupied with professional commitments")
          .replace(/bummed|mad/gi, "temporarily experiencing distress")
          .replace(/ football/gi, "sports game")
          .replace(/won/gi, "achieved a successful victory");
        
        newLine.translation = originalTrans
          .replace(/mẹ ơi|bố ơi/gi, "Kính thưa Bố/Mẹ")
          .replace(/con chịu|bố chịu/gi, "Con xin phép được đồng ý")
          .replace(/bóng đá|chơi bóng/gi, "hoạt động thể thao rèn luyện sức khỏe.");
      } else {
        // Professionals
        newLine.text = originalText
          .replace(/hey|hi/gi, "Good day, pleasure to connect.")
          .replace(/wanna|want to/gi, "would wish to / coordinate to")
          .replace(/ASAP|lẹ lên/gi, "with high priority / at your earliest convenience")
          .replace(/cool|great/gi, "excellent and highly aligned with our company standards")
          .replace(/boss/gi, "direct manager / oversight director");
        
        newLine.translation = originalTrans
          .replace(/chào nhé|hello/gi, "Kính chào quý vị / đối tác thành viên.")
          .replace(/sếp|boss/gi, "Quản lý cấp cao")
          .replace(/làm luôn|quẹt/gi, "tiến hành triển khai một cách chuyên nghiệp nhất.");
      }
    } else if (school === 'superCasual') {
      // Apply highly slangy Gen Z peer chat rules
      if (category.toLowerCase().includes('student')) {
        const studentGreetings = ["Hey y'all!", "Ngl,", "Sup fam!", "Whassup!", "Oh boy,", "Hey hey!"];
        const greeting = studentGreetings[lineIdx % studentGreetings.length];
        newLine.text = `${greeting} ${originalText
          .replace(/hey|hi|hello/gi, "Whaddian, bro!")
          .replace(/introduce myself/gi, "toss my name out")
          .replace(/software design/gi, "coding stuff")
          .replace(/modern practical/gi, "super-lit")
          .replace(/packed|crowded/gi, "jam-packed fr")
          .replace(/assignment/gi, "daily grind")
          .replace(/schedule/gi, "daily sheet")}, ngl!`;
        
        newLine.translation = `[Bồ tèo thân thiết] Ê bồ! ${originalTrans
          .replace(/chào cậu|xin chào/gi, "súp lô bồ ơi!")
          .replace(/tôi|mình/gi, "tớ")
          .replace(/bạn|cậu/gi, "bồ tèo")
          .replace(/tuyệt vời|tốt quá/gi, "đỉnh chóp luôn, ngầu đét!")}`;
      } else if (category.toLowerCase().includes('beauty') || category.toLowerCase().includes('nail')) {
        const beautyGreetings = ["Oh gorgeous!", "Fabulous, honey!", "On point!", "Perfection!", "Stunning!", "Super chic!", "Glow up!"];
        const greeting = beautyGreetings[lineIdx % beautyGreetings.length];
        newLine.text = `${greeting} ${originalText
          .replace(/hey|hi/gi, "gorgeous!")
          .replace(/want/gi, "gotta secure a custom")
          .replace(/nails done/gi, "killer nails set")
          .replace(/price/gi, "bucks / deal")
          .replace(/tip/gi, "cash on top")
          .replace(/heavy|clumpy/gi, "spider-heavy, so clumpy, fr")}`;
        
        newLine.translation = `[Chị em bạn dì slay] Ôi chị iu ơi! Bộ này siêu lung linh, ${originalTrans
          .replace(/quý khách|chị/gi, "chị đẹp / tình yêu")
          .replace(/tiền tip/gi, "bắn tip lấy lộc tay")
          .replace(/tuyệt vời/gi, "xịn sò hết nước chấm")}`;
      } else if (category.toLowerCase().includes('parent')) {
        newLine.text = `Hey champ! 😍 ${originalText
          .replace(/hey|hi/gi, "Whassup!")
          .replace(/tired|exhausted/gi, "totally wiped out / zero energy")
          .replace(/proud /gi, "super hyped about ")
          .replace(/good/gi, "absolutely ace")}, hugs!`;
        
        newLine.translation = `[Mẹ con thỏ thẻ đáng yêu] Con cưng ơi! ${originalTrans
          .replace(/con|mẹ/gi, "bé con / mẹ yêu")
          .replace(/được rồi|đúng thế/gi, "đỉnh luôn nhen con trai cưng của mẹ, ngoan quá đi")}`;
      } else {
        // Professionals / Friends
        const profGreetings = ["Hey folks!", "Quick ping!", "Alright team,", "What's crackin'!", "Sup!", "Hey team!"];
        const greeting = profGreetings[lineIdx % profGreetings.length];
        newLine.text = `${greeting} ${originalText
          .replace(/hey|hi/gi, "Hey ya!")
          .replace(/collaborate/gi, "team up")
          .replace(/point of contact/gi, "main guy")
          .replace(/background/gi, "daily hustle")
          .replace(/ASAP/gi, "fr fr, quick loop")
          .replace(/boss/gi, "head honcho")}, no cap!`;
        
        newLine.translation = `[Anh em chí cốt Zalo/Slack] Ê sếp iu / chiến hữu ơi! ${originalTrans
          .replace(/xin chào|hello/gi, "Hế lô bồ tèo!")
          .replace(/chuyên nghiệp|hoàn thành/gi, "crush ngọt lịm / gánh còng lưng luôn")}`;
      }
    }

    return newLine;
  });

  return result;
}

// Enhances list of topics ensuring each has complete structured three registers
export function enrichTopics(topics: Topic[], category: string): Topic[] {
  return topics.map((t) => {
    // 1. Process structures
    const enrichedStructures = t.structures 
      ? t.structures.map((s, idx) => enrichStructure(s, t.subCategory?.[0] || category, idx))
      : [];

    // 2. Process dialogues: We must supply exactly three full dialogue transcripts
    const originalDialogue = t.dialogues?.[0];
    const enrichedDialogues: Dialogue[] = [];

    if (originalDialogue) {
      // Generate individual register dialogues
      const businessDialogue = enrichDialogue(originalDialogue, t.subCategory?.[0] || category, 'business');
      const casualDialogue = enrichDialogue(originalDialogue, t.subCategory?.[0] || category, 'casual');
      const superCasualDialogue = enrichDialogue(originalDialogue, t.subCategory?.[0] || category, 'superCasual');

      enrichedDialogues.push(businessDialogue, casualDialogue, superCasualDialogue);
    }

    return {
      ...t,
      structures: enrichedStructures,
      dialogues: enrichedDialogues
    };
  });
}
