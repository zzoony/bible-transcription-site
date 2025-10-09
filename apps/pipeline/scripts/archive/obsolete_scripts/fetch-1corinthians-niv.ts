import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://kmbndafjfxzbyokzqgno.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttYm5kYWZqZnh6Ynlva3pxZ25vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1OTEwMjAwMywiZXhwIjoyMDc0Njc4MDAzfQ.dfX0cuabX-QPHWXf5XSbTfo-73Yqin6nTKpDShngjvY';

const supabase = createClient(supabaseUrl, supabaseKey);

// 1 Corinthians NIV 전체 텍스트 (BibleGateway 기반)
const verses = {
  '1': {
    '1': 'Paul, called to be an apostle of Christ Jesus by the will of God, and our brother Sosthenes,',
    '2': 'To the church of God in Corinth, to those sanctified in Christ Jesus and called to be his holy people, together with all those everywhere who call on the name of our Lord Jesus Christ—their Lord and ours:',
    '3': 'Grace and peace to you from God our Father and the Lord Jesus Christ.',
    '4': 'I always thank my God for you because of his grace given you in Christ Jesus.',
    '5': 'For in him you have been enriched in every way—with all kinds of speech and with all knowledge—',
    '6': 'God thus confirming our testimony about Christ among you.',
    '7': 'Therefore you do not lack any spiritual gift as you eagerly wait for our Lord Jesus Christ to be revealed.',
    '8': 'He will also keep you firm to the end, so that you will be blameless on the day of our Lord Jesus Christ.',
    '9': 'God is faithful, who has called you into fellowship with his Son, Jesus Christ our Lord.',
    '10': 'I appeal to you, brothers and sisters, in the name of our Lord Jesus Christ, that all of you agree with one another in what you say and that there be no divisions among you, but that you be perfectly united in mind and thought.',
    '11': 'My brothers and sisters, some from Chloe's household have informed me that there are quarrels among you.',
    '12': 'What I mean is this: One of you says, "I follow Paul"; another, "I follow Apollos"; another, "I follow Cephas"; still another, "I follow Christ."',
    '13': 'Is Christ divided? Was Paul crucified for you? Were you baptized in the name of Paul?',
    '14': 'I thank God that I did not baptize any of you except Crispus and Gaius,',
    '15': 'so no one can say that you were baptized in my name.',
    '16': '(Yes, I also baptized the household of Stephanas; beyond that, I don't remember if I baptized anyone else.)',
    '17': 'For Christ did not send me to baptize, but to preach the gospel—not with wisdom and eloquence, lest the cross of Christ be emptied of its power.',
    '18': 'For the message of the cross is foolishness to those who are perishing, but to us who are being saved it is the power of God.',
    '19': 'For it is written: "I will destroy the wisdom of the wise; the intelligence of the intelligent I will frustrate."',
    '20': 'Where is the wise person? Where is the teacher of the law? Where is the philosopher of this age? Has not God made foolish the wisdom of the world?',
    '21': 'For since in the wisdom of God the world through its wisdom did not know him, God was pleased through the foolishness of what was preached to save those who believe.',
    '22': 'Jews demand signs and Greeks look for wisdom,',
    '23': 'but we preach Christ crucified: a stumbling block to Jews and foolishness to Gentiles,',
    '24': 'but to those whom God has called, both Jews and Greeks, Christ the power of God and the wisdom of God.',
    '25': 'For the foolishness of God is wiser than human wisdom, and the weakness of God is stronger than human strength.',
    '26': 'Brothers and sisters, think of what you were when you were called. Not many of you were wise by human standards; not many were influential; not many were of noble birth.',
    '27': 'But God chose the foolish things of the world to shame the wise; God chose the weak things of the world to shame the strong.',
    '28': 'God chose the lowly things of this world and the despised things—and the things that are not—to nullify the things that are,',
    '29': 'so that no one may boast before him.',
    '30': 'It is because of him that you are in Christ Jesus, who has become for us wisdom from God—that is, our righteousness, holiness and redemption.',
    '31': 'Therefore, as it is written: "Let the one who boasts boast in the Lord."'
  }
  // 나머지 장들은 API나 웹 스크래핑으로 가져와야 함
};

async function main() {
  console.log('=== 1 Corinthians NIV 텍스트 삽입 시작 ===\n');

  let insertCount = 0;
  let skipCount = 0;

  // 1장만 먼저 테스트
  for (const [chapter, chapterVerses] of Object.entries(verses)) {
    for (const [verse, text] of Object.entries(chapterVerses)) {
      const reference = `1 Corinthians ${chapter}:${verse}`;

      // 이미 존재하는지 확인
      const { data: existing } = await supabase
        .from('verses')
        .select('id')
        .eq('reference', reference)
        .single();

      if (existing) {
        console.log(`건너뜀: ${reference} (이미 존재)`);
        skipCount++;
        continue;
      }

      // 삽입
      const { error } = await supabase
        .from('verses')
        .insert({
          reference,
          text,
          book: '1 Corinthians',
          chapter: parseInt(chapter),
          verse: parseInt(verse)
        });

      if (error) {
        console.error(`❌ 삽입 실패: ${reference}`, error.message);
      } else {
        console.log(`✅ 삽입 완료: ${reference}`);
        insertCount++;
      }
    }
  }

  console.log(`\n=== 완료 ===`);
  console.log(`삽입: ${insertCount}개`);
  console.log(`건너뜀: ${skipCount}개`);
}

main();
