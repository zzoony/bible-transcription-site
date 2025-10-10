import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

const envPath = path.resolve(__dirname, '../.env');
dotenv.config({ path: envPath });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
);

interface AnalysisData {
  reference: string;
  sentence_structures: Array<{
    sequence_order: number;
    semantic_classification: string;
    original_text: string;
    korean_translation: string;
    grammatical_explanation?: string;
  }>;
  vocabulary: Array<{
    word: string;
    ipa_pronunciation?: string;
    korean_pronunciation?: string;
    part_of_speech?: string;
    definition_korean: string;
    usage_note?: string;
  }>;
  contextual_explanation: {
    integrated_explanation: string;
    cross_references?: string[];
  };
  korean_translation: {
    natural_translation: string;
    translation_notes?: string;
  };
  special_explanation?: {
    explanation_type: string;
    content: string;
    examples?: string[];
  };
}

async function saveAnalysisToDb(data: AnalysisData) {
  console.log(`\n📝 ${data.reference} 분석 결과 저장 중...`);

  const { data: verse, error: verseError } = await supabase
    .from('verses')
    .select('id')
    .eq('reference', data.reference)
    .single();

  if (verseError || !verse) {
    console.error(`❌ 구절을 찾을 수 없습니다: ${data.reference}`);
    return false;
  }

  const verseId = verse.id;

  try {
    await supabase.from('sentence_structures').delete().eq('verse_id', verseId);
    await supabase.from('vocabulary').delete().eq('verse_id', verseId);
    await supabase.from('contextual_explanations').delete().eq('verse_id', verseId);
    await supabase.from('korean_translations').delete().eq('verse_id', verseId);
    await supabase.from('special_explanations').delete().eq('verse_id', verseId);

    if (data.sentence_structures && data.sentence_structures.length > 0) {
      const { error: sentenceError } = await supabase
        .from('sentence_structures')
        .insert(data.sentence_structures.map((s) => ({ verse_id: verseId, ...s })));

      if (sentenceError) {
        console.error('❌ 문장 구조 저장 실패:', sentenceError);
        return false;
      }
      console.log(`  ✅ ${data.sentence_structures.length}개 문장구조 저장`);
    }

    if (data.vocabulary && data.vocabulary.length > 0) {
      const { error: vocabError } = await supabase
        .from('vocabulary')
        .insert(data.vocabulary.map((v) => ({ verse_id: verseId, ...v })));

      if (vocabError) {
        console.error('❌ 어휘 저장 실패:', vocabError);
        return false;
      }
      console.log(`  ✅ ${data.vocabulary.length}개 어휘 저장`);
    }

    const { error: contextError } = await supabase
      .from('contextual_explanations')
      .insert({
        verse_id: verseId,
        ...data.contextual_explanation
      });

    if (contextError) {
      console.error('❌ 문맥 설명 저장 실패:', contextError);
      return false;
    }
    console.log('  ✅ 문맥 설명 저장');

    const { error: translationError } = await supabase
      .from('korean_translations')
      .insert({
        verse_id: verseId,
        ...data.korean_translation
      });

    if (translationError) {
      console.error('❌ 한국어 번역 저장 실패:', translationError);
      return false;
    }
    console.log('  ✅ 한국어 번역 저장');

    if (data.special_explanation) {
      const { error: specialError } = await supabase
        .from('special_explanations')
        .insert({
          verse_id: verseId,
          ...data.special_explanation
        });

      if (specialError) {
        console.error('❌ 특별 설명 저장 실패:', specialError);
        return false;
      }
      console.log('  ✅ 특별 설명 저장');
    }

    const { error: flagError } = await supabase
      .from('verses')
      .update({ is_analyzed: true })
      .eq('id', verseId);

    if (flagError) {
      console.error('❌ 분석 플래그 업데이트 실패:', flagError);
      return false;
    }

    console.log(`✅ ${data.reference} 저장 완료!\n`);
    return true;
  } catch (error) {
    console.error(`❌ ${data.reference} 저장 중 오류:`, error);
    return false;
  }
}

// 히브리서 1장 분석 데이터
const hebrews1Analyses = [
  {
    reference: "Hebrews 1:1",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "과거 하나님의 계시 방법",
        original_text: "In the past God spoke to our ancestors through the prophets at many times and in various ways",
        korean_translation: "옛적에 하나님께서 선지자들을 통하여 여러 번 여러 방식으로 우리 조상들에게 말씀하셨으나",
        grammatical_explanation: "시간 부사구 'In the past'로 시작하는 주절. 'at many times and in various ways'는 계시의 다양성을 강조하는 부사구."
      }
    ],
    vocabulary: [
      {
        word: "spoke",
        ipa_pronunciation: "/spoʊk/",
        korean_pronunciation: "스포크",
        part_of_speech: "동사 (과거형)",
        definition_korean: "말씀하셨다"
      },
      {
        word: "ancestors",
        ipa_pronunciation: "/ˈænsestərz/",
        korean_pronunciation: "앤세스터즈",
        part_of_speech: "명사",
        definition_korean: "조상들"
      },
      {
        word: "prophets",
        ipa_pronunciation: "/ˈprɑːfɪts/",
        korean_pronunciation: "프라핏츠",
        part_of_speech: "명사",
        definition_korean: "선지자들"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "히브리서는 예수 그리스도의 우월성을 강조하는 서신으로, 1장은 하나님의 계시 방법의 전환점을 제시합니다. 구약 시대에는 하나님이 선지자들을 통해 여러 번, 여러 방식으로 말씀하셨습니다. '여러 번'(many times)은 계시의 점진성을, '여러 방식으로'(various ways)는 계시의 다양성을 의미합니다. 저자는 이 구절을 통해 구약의 계시가 불완전하거나 부족했다는 것이 아니라, 하나님의 계시가 역사를 통해 점진적으로 전개되었음을 보여줍니다."
    },
    korean_translation: {
      natural_translation: "옛적에 하나님께서 선지자들을 통하여 여러 번 여러 방식으로 우리 조상들에게 말씀하셨으나",
      translation_notes: "1-2절이 하나의 문장 구조를 이루며, 'In the past'와 'in these last days'의 대조를 통해 계시의 역사적 전환을 강조합니다."
    },
    special_explanation: {
      explanation_type: "문법적 특이점",
      content: "이 구절은 히브리서 전체의 서론 역할을 하며, 1-2절이 하나의 문장 구조를 이룹니다. 'In the past'와 'in these last days'(2절)의 대조를 통해 계시의 역사적 전환을 강조합니다."
    }
  }
];

async function main() {
  console.log('='.repeat(50));
  console.log('히브리서 1장 분석 데이터 저장 시작');
  console.log('='.repeat(50));

  let successCount = 0;
  let failCount = 0;

  for (const analysis of hebrews1Analyses) {
    const success = await saveAnalysisToDb(analysis);
    if (success) {
      successCount++;
    } else {
      failCount++;
    }
    await new Promise(resolve => setTimeout(resolve, 1000));
  }

  console.log('\n' + '='.repeat(50));
  console.log(`저장 완료: ${successCount}개 성공, ${failCount}개 실패`);
  console.log('='.repeat(50));
}

main();
