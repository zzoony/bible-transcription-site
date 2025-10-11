import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';

// 환경 변수 로드
dotenv.config({
  path: path.resolve(__dirname, '../../../../apps/web/.env.local')
});

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

// NIV Bible JSON 로드
const nivBiblePath = path.resolve(__dirname, '../source-data/NIV_Bible.json');
const nivBible = JSON.parse(fs.readFileSync(nivBiblePath, 'utf-8'));

/**
 * 1단계: 기존 분석 조회
 */
async function fetchExistingAnalysis(reference: string) {
  console.log(`\n📖 1단계: "${reference}" 기존 분석 조회 중...`);

  const { data: verse, error } = await supabase
    .from('verses')
    .select(`
      id,
      reference,
      niv_text,
      sentence_structures (*),
      vocabulary (*),
      contextual_explanations (*),
      korean_translations (*),
      special_explanations (*)
    `)
    .ilike('reference', reference)
    .single();

  if (error || !verse) {
    console.log(`   ⚠️  구절을 찾을 수 없습니다: ${reference}`);
    return null;
  }

  console.log(`   ✅ 구절 ID: ${verse.id}`);
  console.log(`   📝 원문: ${verse.niv_text}`);

  return verse;
}

/**
 * 2단계: 품질 평가
 * 창세기 1:2 기준 (90점 이상 = 우수)
 */
function evaluateQuality(analysis: any): number {
  let score = 0;

  // 문장 구조 (30점)
  const structures = analysis.sentence_structures || [];
  if (structures.length >= 3) score += 20;
  else if (structures.length >= 2) score += 15;
  else if (structures.length >= 1) score += 10;

  if (structures.every((s: any) => s.grammatical_explanation && s.grammatical_explanation.length > 30)) {
    score += 10;
  }

  // 주요 단어 (25점)
  const vocabulary = analysis.vocabulary || [];
  if (vocabulary.length >= 7) score += 15;
  else if (vocabulary.length >= 5) score += 10;
  else if (vocabulary.length >= 3) score += 5;

  // 히브리어/그리스어 원어 포함 여부
  const hasOriginalLanguage = vocabulary.some((v: any) =>
    v.definition_korean && (v.definition_korean.includes('히브리어') || v.definition_korean.includes('그리스어'))
  );
  if (hasOriginalLanguage) score += 10;

  // 문맥 설명 (20점)
  const context = analysis.contextual_explanations?.[0];
  if (context && context.integrated_explanation) {
    const length = context.integrated_explanation.length;
    if (length >= 500) score += 20;
    else if (length >= 300) score += 15;
    else if (length >= 200) score += 10;
    else score += 5;
  }

  // 한국어 번역 (15점)
  const translation = analysis.korean_translations?.[0];
  if (translation && translation.natural_translation) {
    score += 15;
  }

  // 특별 설명 (10점)
  const specials = analysis.special_explanations || [];
  if (specials.length >= 3) score += 10;
  else if (specials.length >= 2) score += 7;
  else if (specials.length >= 1) score += 4;

  return Math.min(score, 100);
}

/**
 * 3단계: NIV 원문 추출
 */
function getNIVText(reference: string): string | null {
  console.log(`\n📚 3단계: NIV 원문 추출 중...`);

  // "1 Corinthians 13:1" → "1 Corinthians", "13", "1"
  const match = reference.match(/^(.+?)\s+(\d+):(\d+)$/);
  if (!match) {
    console.log(`   ❌ 구절 참조 형식이 잘못되었습니다: ${reference}`);
    return null;
  }

  const [, book, chapter, verse] = match;

  try {
    const text = nivBible[book]?.[chapter]?.[verse];
    if (!text) {
      console.log(`   ❌ NIV JSON에서 찾을 수 없습니다: ${reference}`);
      return null;
    }

    console.log(`   ✅ NIV 원문: "${text}"`);
    return text;
  } catch (error) {
    console.log(`   ❌ NIV JSON 파싱 오류:`, error);
    return null;
  }
}

/**
 * 4단계: 분석 수행
 * Claude가 직접 작성하는 부분
 */
function performAnalysis(reference: string, nivText: string, verseId: number) {
  console.log(`\n✍️  4단계: 분석 수행 중...`);
  console.log(`   📖 구절: ${reference}`);
  console.log(`   📝 원문: ${nivText}`);
  console.log(`\n   🤖 Claude가 창세기 1:2 템플릿 기준으로 분석을 작성합니다...`);

  // ==========================================
  // 여기서 Claude가 직접 분석 내용을 작성합니다
  // 고린도전서 13:1 분석
  // ==========================================

  return {
    verse_id: verseId,
    reference,
    niv_text: nivText,

    // 문장 구조 (3-5개)
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "조건절 - 능력 가정",
        original_text: "If I speak in the tongues of men or of angels",
        korean_translation: "만약 내가 사람의 방언이나 천사의 방언으로 말한다 해도",
        grammatical_explanation: "조건절 if + 주어(I) + 동사(speak) + 전치사구(in the tongues of men or of angels). 'or'로 연결된 두 명사구가 가능한 방언의 범위를 확장하여 극단적인 경우를 가정함"
      },
      {
        sequence_order: 2,
        semantic_classification: "대조절 - 결핍 조건",
        original_text: "but do not have love",
        korean_translation: "그러나 사랑이 없다면",
        grammatical_explanation: "접속사(but) + 부정 조동사(do not) + 동사(have) + 목적어(love). 강한 대조를 나타내는 'but'이 앞의 위대한 능력과 사랑의 부재를 극명하게 대비시킴"
      },
      {
        sequence_order: 3,
        semantic_classification: "결과절 - 비유적 귀결",
        original_text: "I am only a resounding gong or a clanging cymbal",
        korean_translation: "나는 단지 울리는 징이나 요란한 꽹과리에 불과하다",
        grammatical_explanation: "주어(I) + be동사(am) + 부사(only) + 보어(a resounding gong or a clanging cymbal). 'only'가 제한적 의미를 강조하며, 두 악기의 비유가 내용 없는 소음을 생생하게 표현함"
      }
    ],

    // 주요 단어 (7-10개, 반드시 그리스어 원어 포함)
    vocabulary: [
      {
        word: "speak",
        ipa_pronunciation: "[spiːk]",
        korean_pronunciation: "스피크",
        part_of_speech: "동사",
        definition_korean: "말하다, 이야기하다 (그리스어 'λαλέω'(laleo)로, 단순히 소리를 내는 것이 아니라 의미 있는 언어로 의사소통하는 것을 의미함. 방언의 은사를 행사하는 행위를 나타냄)",
        usage_note: "1 Corinthians 13:1에서 사용됨"
      },
      {
        word: "tongues",
        ipa_pronunciation: "[tʌŋz]",
        korean_pronunciation: "텅스",
        part_of_speech: "명사(복수)",
        definition_korean: "방언, 언어들 (그리스어 'γλῶσσα'(glossa)의 복수형으로, 문자 그대로는 '혀'를 의미하지만, 여기서는 성령의 은사로 주어지는 초자연적 언어 능력을 가리킴. 고린도교회에서 중요하게 여겨진 은사)",
        usage_note: "1 Corinthians 13:1에서 사용됨"
      },
      {
        word: "angels",
        ipa_pronunciation: "[ˈeɪndʒəlz]",
        korean_pronunciation: "에인절스",
        part_of_speech: "명사(복수)",
        definition_korean: "천사들 (그리스어 'ἄγγελος'(angelos)의 복수형으로, '메신저'를 의미하며, 하나님의 메시지를 전하는 영적 존재. 천사의 방언은 가능한 가장 높은 수준의 영적 의사소통을 상징함)",
        usage_note: "1 Corinthians 13:1에서 사용됨"
      },
      {
        word: "love",
        ipa_pronunciation: "[lʌv]",
        korean_pronunciation: "러브",
        part_of_speech: "명사",
        definition_korean: "사랑 (그리스어 'ἀγάπη'(agape)로, 조건 없는 희생적 사랑을 의미함. 고린도전서 13장 전체의 주제이며, 단순한 감정이 아니라 의지적이고 행동으로 나타나는 사랑. 모든 은사보다 탁월한 덕목)",
        usage_note: "1 Corinthians 13:1에서 사용됨"
      },
      {
        word: "resounding",
        ipa_pronunciation: "[rɪˈzaʊndɪŋ]",
        korean_pronunciation: "리자운딩",
        part_of_speech: "형용사",
        definition_korean: "울리는, 공명하는 (그리스어 'ἠχέω'(echeo)의 분사형으로, '소리를 내다', '울려 퍼지다'를 의미함. 크고 빈 소리를 강조하며, 내용 없는 형식적인 소음을 비유적으로 표현)",
        usage_note: "1 Corinthians 13:1에서 사용됨"
      },
      {
        word: "gong",
        ipa_pronunciation: "[ɡɒŋ]",
        korean_pronunciation: "공",
        part_of_speech: "명사",
        definition_korean: "징, 금속 타악기 (그리스어 'χαλκός'(chalkos)로, '청동', '놋쇠'를 의미함. 고대 이교도 의식에서 사용되던 시끄러운 금속 악기로, 소음은 크지만 영적 의미는 없는 것을 상징함)",
        usage_note: "1 Corinthians 13:1에서 사용됨"
      },
      {
        word: "clanging",
        ipa_pronunciation: "[ˈklæŋɪŋ]",
        korean_pronunciation: "클랭잉",
        part_of_speech: "형용사",
        definition_korean: "요란한, 쨍그랑거리는 (그리스어 'ἀλαλάζω'(alalazo)의 분사형으로, '큰 소리로 외치다', '울부짖다'를 의미함. 불협화음적이고 불쾌한 소리를 강조하여, 사랑 없는 은사의 무가치함을 표현)",
        usage_note: "1 Corinthians 13:1에서 사용됨"
      },
      {
        word: "cymbal",
        ipa_pronunciation: "[ˈsɪmbəl]",
        korean_pronunciation: "심벌",
        part_of_speech: "명사",
        definition_korean: "꽹과리, 제금 (그리스어 'κύμβαλον'(kumbalon)으로, 두 개의 금속판을 부딪쳐 소리를 내는 악기. 이교도 제의에서 광란적인 예배에 사용되었으며, 여기서는 시끄럽지만 의미 없는 소리를 비유함)",
        usage_note: "1 Corinthians 13:1에서 사용됨"
      }
    ],

    // 문맥 설명 (300자 이상, 역사적/신학적/문학적 배경 통합)
    contextual_explanations: [{
      integrated_explanation: `1 Corinthians 13:1은 사도 바울이 고린도교회에 보낸 편지 중 가장 유명한 "사랑 장"의 시작 구절이다. 고린도교회는 방언의 은사를 특히 중요하게 여겼으나, 바울은 이 구절을 통해 사랑이 없는 은사는 무의미함을 강력하게 선언한다.

"사람의 방언이나 천사의 방언"은 히브리적 과장법으로, 가능한 모든 방언, 즉 인간과 천사의 언어 전체를 포괄한다. 당시 유대교 전승에서는 천사들이 특별한 언어로 하나님을 찬양한다고 믿었으며, 바울은 이러한 최고 수준의 영적 의사소통 능력까지도 사랑 없이는 무가치함을 역설한다.

"울리는 징"(그리스어 χαλκός ἠχῶν)과 "요란한 꽹과리"(κύμβαλον ἀλαλάζον)는 당시 고린도 지역의 이교도 신전 예배에서 사용되던 시끄러운 악기들을 가리킨다. 특히 Cybele 여신 숭배에서는 광란적인 예배 중에 징과 꽹과리를 요란하게 울렸는데, 바울은 이러한 이미지를 사용하여 사랑 없는 방언이 이교도의 무의미한 소음과 다를 바 없음을 비유적으로 표현한다.

문학적으로 이 구절은 "If... but... I am only..."의 조건-대조-결과 구조를 사용하여, 은사와 사랑의 관계를 명확히 대비시킨다. 이는 13장 전체에서 반복되는 수사적 패턴의 시작으로, 바울이 사랑의 절대적 우위성을 강조하는 문학적 기교를 보여준다.

신학적으로 이 구절은 은사중심주의에 대한 경고이자, 사랑이 모든 영적 활동의 본질임을 선언한다. 아가페 사랑 없이는 가장 위대한 은사조차도 하나님께 받아들여지지 않으며, 성도의 덕을 세우지 못한다는 바울의 핵심 메시지가 담겨 있다.`
    }],

    // 한국어 번역 (자연스러운 통합 번역)
    korean_translations: [{
      natural_translation: "만약 내가 사람의 방언이나 천사의 방언으로 말한다 해도, 사랑이 없다면 나는 단지 울리는 징이나 요란한 꽹과리에 불과하다."
    }],

    // 특별 설명 (2-3개, 다양한 관점)
    special_explanations: [
      {
        explanation_type: "그리스어 문법",
        content: "바울은 가정법(ἐὰν + 접속법)을 사용하여 실현 가능한 조건을 제시하지만, 'ἀγάπην δὲ μὴ ἔχω'(사랑이 없다면)라는 대조절을 통해 그 모든 능력이 무의미해질 수 있음을 경고한다. 'μόνον'(only, 단지)이 강조 위치에 놓여 사랑 없는 은사의 완전한 무가치함을 강조한다."
      },
      {
        explanation_type: "신학적 해석",
        content: "이 구절은 은사와 사랑의 관계를 정립한다. 방언을 포함한 모든 은사는 사랑이라는 토대 위에서만 진정한 가치를 가진다. 사랑(ἀγάπη)은 단순한 감정이 아니라 희생적이고 자기 부인적인 행동으로, 고린도전서 13:4-7에서 더 자세히 설명된다. 이는 은사중심적 교회에 대한 바울의 근본적인 교정이다."
      },
      {
        explanation_type: "역사적 배경",
        content: "고대 고린도는 다양한 이교 신전들이 있던 도시였으며, 특히 Cybele와 Dionysus 숭배에서 징과 꽹과리를 사용한 광란적 예배가 행해졌다. 바울은 고린도 신자들에게 익숙한 이러한 이미지를 사용하여, 사랑 없는 영적 은사가 이교도의 무의미한 의식과 본질적으로 다르지 않음을 생생하게 전달한다."
      }
    ]
  };
}

/**
 * 6단계: DB 저장
 */
async function saveToDatabase(analysis: any) {
  console.log(`\n💾 6단계: 데이터베이스 저장 중...`);

  const verseId = analysis.verse_id;

  // 기존 데이터 삭제 (중복 방지)
  console.log(`   🗑️  기존 분석 데이터 삭제 중...`);
  await Promise.all([
    supabase.from('sentence_structures').delete().eq('verse_id', verseId),
    supabase.from('vocabulary').delete().eq('verse_id', verseId),
    supabase.from('contextual_explanations').delete().eq('verse_id', verseId),
    supabase.from('korean_translations').delete().eq('verse_id', verseId),
    supabase.from('special_explanations').delete().eq('verse_id', verseId),
  ]);

  // 문장 구조 저장
  const structuresToInsert = analysis.sentence_structures.map((s: any) => ({
    verse_id: verseId,
    ...s
  }));

  const { error: structError } = await supabase
    .from('sentence_structures')
    .insert(structuresToInsert);

  if (structError) {
    console.log(`   ❌ 문장 구조 저장 실패:`, structError.message);
  } else {
    console.log(`   ✅ 문장 구조 저장 완료 (${structuresToInsert.length}개)`);
  }

  // 주요 단어 저장
  const vocabularyToInsert = analysis.vocabulary.map((v: any) => ({
    verse_id: verseId,
    ...v
  }));

  const { error: vocabError } = await supabase
    .from('vocabulary')
    .insert(vocabularyToInsert);

  if (vocabError) {
    console.log(`   ❌ 주요 단어 저장 실패:`, vocabError.message);
  } else {
    console.log(`   ✅ 주요 단어 저장 완료 (${vocabularyToInsert.length}개)`);
  }

  // 문맥 설명 저장
  const contextToInsert = analysis.contextual_explanations.map((c: any) => ({
    verse_id: verseId,
    ...c
  }));

  const { error: contextError } = await supabase
    .from('contextual_explanations')
    .insert(contextToInsert);

  if (contextError) {
    console.log(`   ❌ 문맥 설명 저장 실패:`, contextError.message);
  } else {
    console.log(`   ✅ 문맥 설명 저장 완료`);
  }

  // 한국어 번역 저장
  const translationToInsert = analysis.korean_translations.map((t: any) => ({
    verse_id: verseId,
    ...t
  }));

  const { error: transError } = await supabase
    .from('korean_translations')
    .insert(translationToInsert);

  if (transError) {
    console.log(`   ❌ 한국어 번역 저장 실패:`, transError.message);
  } else {
    console.log(`   ✅ 한국어 번역 저장 완료`);
  }

  // 특별 설명 저장
  const specialToInsert = analysis.special_explanations.map((s: any) => ({
    verse_id: verseId,
    ...s
  }));

  const { error: specialError } = await supabase
    .from('special_explanations')
    .insert(specialToInsert);

  if (specialError) {
    console.log(`   ❌ 특별 설명 저장 실패:`, specialError.message);
  } else {
    console.log(`   ✅ 특별 설명 저장 완료 (${specialToInsert.length}개)`);
  }
}

/**
 * 메인 함수: 단일 절 분석 전체 프로세스
 */
export async function analyzeSingleVerse(reference: string): Promise<{ success: boolean; finalScore: number }> {
  console.log('\n' + '='.repeat(80));
  console.log(`🔍 단일 절 분석 프로세스: ${reference}`);
  console.log('='.repeat(80));

  const startTime = Date.now();

  // 1단계: 기존 분석 조회
  const existing = await fetchExistingAnalysis(reference);

  if (!existing) {
    console.log(`\n❌ 구절을 찾을 수 없습니다: ${reference}`);
    return { success: false, finalScore: 0 };
  }

  // 2단계: 품질 평가
  console.log(`\n📊 2단계: 품질 평가 중...`);
  const currentScore = evaluateQuality(existing);
  console.log(`   📈 현재 품질 점수: ${currentScore}/100`);

  if (currentScore >= 90) {
    console.log(`   ✅ 이미 우수한 품질입니다 (90점 이상). 재분석 불필요.`);
    console.log('\n' + '='.repeat(80));
    return { success: true, finalScore: currentScore };
  }

  console.log(`   ⚠️  품질이 기준 미달입니다 (90점 미만). 재분석 필요.`);

  // 3단계: NIV 원문 추출
  const nivText = getNIVText(reference);

  if (!nivText) {
    console.log(`\n❌ NIV 원문을 찾을 수 없습니다.`);
    return { success: false, finalScore: currentScore };
  }

  // 4단계: 분석 수행 (Claude가 직접 작성)
  const newAnalysis = performAnalysis(reference, nivText, existing.id);

  // 5단계: 재평가
  console.log(`\n📊 5단계: 새 분석 품질 평가 중...`);
  const newScore = evaluateQuality(newAnalysis);
  console.log(`   📈 새 분석 품질 점수: ${newScore}/100`);

  if (newScore < 90) {
    console.log(`   ⚠️  품질이 여전히 기준 미달입니다. DB 저장을 건너뜁니다.`);
    console.log(`   💡 분석을 수정하여 90점 이상으로 개선하세요.`);
    console.log('\n' + '='.repeat(80));
    return { success: false, finalScore: newScore };
  }

  console.log(`   ✅ 우수한 품질입니다! (90점 이상)`);

  // 6단계: DB 저장
  await saveToDatabase(newAnalysis);

  const elapsed = ((Date.now() - startTime) / 1000).toFixed(2);
  console.log('\n' + '='.repeat(80));
  console.log(`✅ 완료! 소요 시간: ${elapsed}초`);
  console.log(`   이전 점수: ${currentScore}/100 → 새 점수: ${newScore}/100`);
  console.log('='.repeat(80) + '\n');

  return { success: true, finalScore: newScore };
}

// 커맨드라인에서 직접 실행 가능
if (require.main === module) {
  const reference = process.argv[2] || '1 Corinthians 13:1';
  analyzeSingleVerse(reference).catch(console.error);
}
