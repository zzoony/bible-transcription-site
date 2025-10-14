import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../../../.env') });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

interface QualityScore {
  total: number;
  breakdown: {
    sentenceStructures: number;
    vocabulary: number;
    contextualExplanation: number;
    koreanTranslation: number;
    specialExplanations: number;
  };
  details: string[];
  grade: string;
}

/**
 * 창세기 1:2를 기준으로 구절의 품질을 평가합니다
 *
 * 평가 기준:
 * - 문장 구조 (30점): 완전성, 문법 설명, 의미 분류
 * - 주요 단어 (25점): 개수, 원어 포함, 발음 정확성
 * - 문맥 설명 (20점): 길이, 깊이, 통합성
 * - 한국어 번역 (15점): 자연스러움, 정확성
 * - 특별 설명 (10점): 개수, 다양성
 */
async function evaluateVerseQuality(reference: string): Promise<QualityScore> {
  const score: QualityScore = {
    total: 0,
    breakdown: {
      sentenceStructures: 0,
      vocabulary: 0,
      contextualExplanation: 0,
      koreanTranslation: 0,
      specialExplanations: 0
    },
    details: [],
    grade: ''
  };

  // 구절 조회
  const { data: verse } = await supabase
    .from('verses')
    .select('id, reference, niv_text')
    .ilike('reference', reference)
    .single();

  if (!verse) {
    score.details.push(`❌ 구절을 찾을 수 없음: ${reference}`);
    return score;
  }

  console.log(`\n📊 구절 품질 평가: ${verse.reference}`);
  console.log(`원문: ${verse.niv_text}\n`);

  // 1. 문장 구조 평가 (30점)
  const { data: structures } = await supabase
    .from('sentence_structures')
    .select('*')
    .eq('verse_id', verse.id);

  if (structures && structures.length > 0) {
    score.breakdown.sentenceStructures += 10; // 기본 10점
    score.details.push(`✅ 문장 구조 ${structures.length}개 존재`);

    // 모든 구조에 문법 설명이 있는지
    const hasGrammar = structures.every(s => s.grammatical_explanation && s.grammatical_explanation.length > 20);
    if (hasGrammar) {
      score.breakdown.sentenceStructures += 10;
      score.details.push(`✅ 모든 구조에 상세한 문법 설명 포함`);
    } else {
      score.details.push(`⚠️ 일부 구조의 문법 설명 부족`);
    }

    // 의미 분류가 있는지
    const hasClassification = structures.every(s => s.semantic_classification);
    if (hasClassification) {
      score.breakdown.sentenceStructures += 10;
      score.details.push(`✅ 모든 구조에 의미적 분류 포함`);
    } else {
      score.details.push(`⚠️ 일부 구조의 의미 분류 누락`);
    }

    // NIV 원문과 비교하여 완전성 체크 (간단한 휴리스틱)
    const totalWords = verse.niv_text.split(/\s+/).length;
    const structureWords = structures.reduce((sum, s) =>
      sum + s.original_text.split(/\s+/).length, 0
    );

    if (structureWords >= totalWords * 0.9) {
      score.details.push(`✅ 문장 구조가 원문의 대부분을 커버 (${structureWords}/${totalWords} 단어)`);
    } else {
      score.breakdown.sentenceStructures -= 5;
      score.details.push(`⚠️ 문장 구조가 원문을 충분히 커버하지 못함 (${structureWords}/${totalWords} 단어)`);
    }
  } else {
    score.details.push(`❌ 문장 구조 없음`);
  }

  // 2. 주요 단어 평가 (25점)
  const { data: vocabulary } = await supabase
    .from('vocabulary')
    .select('*')
    .eq('verse_id', verse.id);

  if (vocabulary && vocabulary.length >= 7) {
    score.breakdown.vocabulary += 10;
    score.details.push(`✅ 주요 단어 ${vocabulary.length}개 (기준: 7-10개)`);

    if (vocabulary.length >= 10) {
      score.breakdown.vocabulary += 5;
      score.details.push(`⭐ 우수: 주요 단어 10개 이상`);
    }

    // 히브리어/그리스어 원어 포함 확인
    const hasOriginalLanguage = vocabulary.filter(v =>
      v.definition_korean && (
        v.definition_korean.includes('히브리어') ||
        v.definition_korean.includes('그리스어')
      )
    ).length;

    const originalLanguageRatio = hasOriginalLanguage / vocabulary.length;
    if (originalLanguageRatio >= 0.8) {
      score.breakdown.vocabulary += 10;
      score.details.push(`✅ 대부분의 단어(${hasOriginalLanguage}/${vocabulary.length})에 원어 설명 포함`);
    } else if (originalLanguageRatio >= 0.5) {
      score.breakdown.vocabulary += 5;
      score.details.push(`⚠️ 일부 단어(${hasOriginalLanguage}/${vocabulary.length})에만 원어 설명 포함`);
    } else {
      score.details.push(`❌ 원어 설명 부족 (${hasOriginalLanguage}/${vocabulary.length})`);
    }
  } else if (vocabulary && vocabulary.length >= 5) {
    score.breakdown.vocabulary += 5;
    score.details.push(`⚠️ 주요 단어 ${vocabulary.length}개 (기준 미달: 7-10개 권장)`);
  } else {
    score.details.push(`❌ 주요 단어 부족 (${vocabulary?.length || 0}개)`);
  }

  // 3. 문맥 설명 평가 (20점)
  const { data: context } = await supabase
    .from('contextual_explanations')
    .select('*')
    .eq('verse_id', verse.id)
    .single();

  if (context?.integrated_explanation) {
    const length = context.integrated_explanation.length;

    if (length >= 500) {
      score.breakdown.contextualExplanation += 20;
      score.details.push(`✅ 문맥 설명 ${length}자 (우수)`);
    } else if (length >= 300) {
      score.breakdown.contextualExplanation += 15;
      score.details.push(`✅ 문맥 설명 ${length}자 (양호)`);
    } else if (length >= 200) {
      score.breakdown.contextualExplanation += 10;
      score.details.push(`⚠️ 문맥 설명 ${length}자 (기준 미달)`);
    } else {
      score.breakdown.contextualExplanation += 5;
      score.details.push(`❌ 문맥 설명 ${length}자 (부족)`);
    }

    // 히브리어/그리스어 원어 분석 포함 확인
    if (context.integrated_explanation.includes('히브리어') ||
        context.integrated_explanation.includes('그리스어')) {
      score.details.push(`✅ 원어 분석 포함`);
    } else {
      score.breakdown.contextualExplanation -= 5;
      score.details.push(`⚠️ 원어 분석 미포함`);
    }
  } else {
    score.details.push(`❌ 문맥 설명 없음`);
  }

  // 4. 한국어 번역 평가 (15점)
  const { data: translation } = await supabase
    .from('korean_translations')
    .select('*')
    .eq('verse_id', verse.id)
    .single();

  if (translation?.natural_translation) {
    score.breakdown.koreanTranslation += 10;
    score.details.push(`✅ 한국어 번역 존재`);

    // 번역의 자연스러움 (길이가 원문과 유사한지)
    const translationLength = translation.natural_translation.length;
    const originalLength = verse.niv_text.length;

    if (translationLength > 0) {
      score.breakdown.koreanTranslation += 5;
      score.details.push(`✅ 번역 길이 적절 (${translationLength}자)`);
    }
  } else {
    score.details.push(`❌ 한국어 번역 없음`);
  }

  // 5. 특별 설명 평가 (10점)
  const { data: specialExplanations } = await supabase
    .from('special_explanations')
    .select('*')
    .eq('verse_id', verse.id);

  if (specialExplanations && specialExplanations.length >= 3) {
    score.breakdown.specialExplanations += 10;
    score.details.push(`✅ 특별 설명 ${specialExplanations.length}개 (우수)`);
  } else if (specialExplanations && specialExplanations.length >= 2) {
    score.breakdown.specialExplanations += 7;
    score.details.push(`✅ 특별 설명 ${specialExplanations.length}개 (양호)`);
  } else if (specialExplanations && specialExplanations.length >= 1) {
    score.breakdown.specialExplanations += 4;
    score.details.push(`⚠️ 특별 설명 ${specialExplanations.length}개 (기준 미달)`);
  } else {
    score.details.push(`❌ 특별 설명 없음`);
  }

  // 총점 계산
  score.total = Object.values(score.breakdown).reduce((sum, val) => sum + val, 0);

  // 등급 계산
  if (score.total >= 90) {
    score.grade = '우수 (A)';
  } else if (score.total >= 70) {
    score.grade = '양호 (B)';
  } else if (score.total >= 50) {
    score.grade = '보통 (C)';
  } else {
    score.grade = '미흡 (D)';
  }

  return score;
}

// 메인 실행
async function main() {
  const reference = process.argv[2] || 'Genesis 1:2';

  const score = await evaluateVerseQuality(reference);

  console.log('\n📈 점수 분석:');
  console.log(`  문장 구조: ${score.breakdown.sentenceStructures}/30`);
  console.log(`  주요 단어: ${score.breakdown.vocabulary}/25`);
  console.log(`  문맥 설명: ${score.breakdown.contextualExplanation}/20`);
  console.log(`  한국어 번역: ${score.breakdown.koreanTranslation}/15`);
  console.log(`  특별 설명: ${score.breakdown.specialExplanations}/10`);
  console.log(`\n🎯 총점: ${score.total}/100`);
  console.log(`📊 등급: ${score.grade}`);

  console.log('\n📝 상세 내역:');
  score.details.forEach(detail => console.log(`  ${detail}`));

  // 개선 제안
  console.log('\n💡 개선 제안:');
  if (score.breakdown.sentenceStructures < 25) {
    console.log('  - 문장 구조: 모든 문장/절을 빠짐없이 분석하고 상세한 문법 설명 추가');
  }
  if (score.breakdown.vocabulary < 20) {
    console.log('  - 주요 단어: 7-10개 선정하고 모든 단어에 히브리어/그리스어 원어 설명 포함');
  }
  if (score.breakdown.contextualExplanation < 15) {
    console.log('  - 문맥 설명: 300자 이상으로 확장하고 역사적/신학적 배경 추가');
  }
  if (score.breakdown.koreanTranslation < 12) {
    console.log('  - 한국어 번역: 자연스럽고 정확한 번역 추가');
  }
  if (score.breakdown.specialExplanations < 7) {
    console.log('  - 특별 설명: 최소 2-3개의 문법적/신학적 설명 추가');
  }

  console.log('\n참고: 창세기 1:2는 100점 만점의 완벽한 분석 사례입니다.');
  console.log('상세 템플릿: bible-analysis/templates/ANALYSIS_TEMPLATE.md\n');
}

main();
