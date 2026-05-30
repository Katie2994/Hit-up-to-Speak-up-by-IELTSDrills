import fs from 'fs';
import path from 'path';

const ipaMap: Record<string, string> = {
    "LOL": "/ˌɛl.oʊˈɛl/",
    "BRB": "/ˌbiː.ɑːrˈbiː/",
    "IMHO": "/ˌaɪ.ɛm.eɪtʃˈoʊ/",
    "TL;DR": "/ˌtiː.ɛl.diːˈɑːr/",
    "FOMO": "/ˈfoʊ.moʊ/",
    "IRL": "/ˌaɪ.ɑːrˈɛl/",
    "TBH": "/ˌtiː.biːˈeɪtʃ/",
    "TFW": "/ˌtiː.ɛfˈdʌb.əl.juː/",
    "AFK": "/ˌeɪ.ɛfˈkeɪ/",
    "SMH": "/ˌɛs.ɛmˈeɪtʃ/",
    "Cap": "/kæp/",
    "No cap": "/noʊ kæp/",
    "Ghost": "/ɡoʊst/",
    "Lit": "/lɪt/",
    "Salty": "/ˈsɔːl.ti/",
    "Sus": "/sʌs/",
    "Vibe check": "/vaɪb tʃɛk/",
    "Simp": "/sɪmp/",
    "Slay": "/sleɪ/",
    "Tea": "/tiː/",
    "Circle back": "/ˈsɜːr.kəl bæk/",
    "Bandwidth": "/ˈbænd.wɪdθ/",
    "Touch base": "/tʌtʃ beɪs/",
    "On the same page": "/ɒn ðə seɪm peɪdʒ/",
    "Deep dive": "/diːp daɪv/",
    "Ping me": "/pɪŋ miː/",
    "Synergy": "/ˈsɪn.ər.dʒi/",
    "Pushback": "/ˈpʊʃ.bæk/",
    "Think outside the box": "/θɪŋk ˌaʊtˈsaɪd ðə bɒks/",
    "ASAP": "/ˌeɪ.ɛs.eɪˈpiː/",
    "Catfish": "/ˈkæt.fɪʃ/",
    "Red flag": "/rɛd flæɡ/",
    "Green flag": "/ɡriːn flæɡ/",
    "Third wheel": "/θɜːrd wiːl/",
    "Dump": "/dʌmp/",
    "Friend zone": "/frɛnd zoʊn/",
    "Breadcrumbing": "/ˈbrɛd.krʌm.ɪŋ/",
    "Love bombing": "/lʌv ˈbɒm.ɪŋ/",
    "Crush": "/krʌʃ/",
    "Bae": "/beɪ/"
};

const filePath = path.join(process.cwd(), 'src/data/vocabulary/vocab-sl.ts');
let content = fs.readFileSync(filePath, 'utf8');

const regex = /word:\s*"([^"]+)",\s*ipa:\s*"\/slæŋ\/"/g;

content = content.replace(regex, (match, word) => {
    if (ipaMap[word]) {
        return `word: "${word}",\n        ipa: "${ipaMap[word]}"`;
    }
    return match; // If not in map, leave it (shouldn't happen)
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Finished updating IPAs.');
