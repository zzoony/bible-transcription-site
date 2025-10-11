import { batch1Analyses } from './analyze-batch-1';

function evaluateQuality(analysis: any): { score: number; breakdown: any } {
  let score = 0;
  const breakdown: any = {};

  // 1. 문장 구조 평가 (30점)
  const structures = analysis.sentence_structures || [];
  breakdown.structures = {
    count: structures.length,
    points: 0
  };

  if (structures.length >= 3) {
    breakdown.structures.points += 20;
    score += 20;
  } else if (structures.length >= 2) {
    breakdown.structures.points += 15;
    score += 15;
  } else if (structures.length >= 1) {
    breakdown.structures.points += 10;
    score += 10;
  }

  const hasDetailedGrammar = structures.every((s: any) =>
    s.grammatical_explanation && s.grammatical_explanation.length > 30
  );
  if (hasDetailedGrammar) {
    breakdown.structures.points += 10;
    score += 10;
  }

  // 2. 주요 단어 평가 (25점)
  const vocabulary = analysis.vocabulary || [];
  breakdown.vocabulary = {
    count: vocabulary.length,
    points: 0
  };

  if (vocabulary.length >= 7) {
    breakdown.vocabulary.points += 15;
    score += 15;
  } else if (vocabulary.length >= 5) {
    breakdown.vocabulary.points += 10;
    score += 10;
  } else if (vocabulary.length >= 3) {
    breakdown.vocabulary.points += 5;
    score += 5;
  }

  const hasOriginalLanguage = vocabulary.some((v: any) =>
    v.definition_korean && (v.definition_korean.includes('히브리어') || v.definition_korean.includes('그리스어'))
  );
  breakdown.vocabulary.hasGreek = hasOriginalLanguage;
  if (hasOriginalLanguage) {
    breakdown.vocabulary.points += 10;
    score += 10;
  }

  // 3. 문맥 설명 평가 (20점)
  const context = analysis.contextual_explanations?.[0];
  breakdown.context = {
    length: 0,
    points: 0
  };

  if (context && context.integrated_explanation) {
    const length = context.integrated_explanation.length;
    breakdown.context.length = length;

    if (length >= 500) {
      breakdown.context.points = 20;
      score += 20;
    } else if (length >= 300) {
      breakdown.context.points = 15;
      score += 15;
    } else if (length >= 200) {
      breakdown.context.points = 10;
      score += 10;
    } else {
      breakdown.context.points = 5;
      score += 5;
    }
  }

  // 4. 한국어 번역 평가 (15점)
  const translation = analysis.korean_translations?.[0];
  breakdown.translation = {
    exists: !!translation?.natural_translation,
    points: 0
  };

  if (translation && translation.natural_translation) {
    breakdown.translation.points = 15;
    score += 15;
  }

  // 5. 특별 설명 평가 (10점)
  const specials = analysis.special_explanations || [];
  breakdown.specials = {
    count: specials.length,
    points: 0
  };

  if (specials.length >= 3) {
    breakdown.specials.points = 10;
    score += 10;
  } else if (specials.length >= 2) {
    breakdown.specials.points = 7;
    score += 7;
  } else if (specials.length >= 1) {
    breakdown.specials.points = 4;
    score += 4;
  }

  return { score: Math.min(score, 100), breakdown };
}

const firstVerse = batch1Analyses[0];
const result = evaluateQuality(firstVerse);

console.log('='.repeat(80));
console.log('1 Corinthians 1:1 품질 평가 결과');
console.log('='.repeat(80));
console.log('');
console.log('총점: ' + result.score + '점');
console.log('');
console.log('상세 점수:');
console.log('  1. 문장 구조 (' + result.breakdown.structures.points + '/30점)');
console.log('     - 구조 개수: ' + result.breakdown.structures.count + '개');
console.log('');
console.log('  2. 주요 단어 (' + result.breakdown.vocabulary.points + '/25점)');
console.log('     - 단어 개수: ' + result.breakdown.vocabulary.count + '개');
console.log('     - 그리스어 원어: ' + (result.breakdown.vocabulary.hasGreek ? 'O' : 'X'));
console.log('');
console.log('  3. 문맥 설명 (' + result.breakdown.context.points + '/20점)');
console.log('     - 설명 길이: ' + result.breakdown.context.length + '자');
console.log('');
console.log('  4. 한국어 번역 (' + result.breakdown.translation.points + '/15점)');
console.log('     - 번역 존재: ' + (result.breakdown.translation.exists ? 'O' : 'X'));
console.log('');
console.log('  5. 특별 설명 (' + result.breakdown.specials.points + '/10점)');
console.log('     - 설명 개수: ' + result.breakdown.specials.count + '개');
console.log('');
console.log('='.repeat(80));
console.log('');

if (result.score >= 90) {
  console.log('✅ 우수 (A등급) - 창세기 1:2 수준 달성!');
} else if (result.score >= 70) {
  console.log('⚠️  양호 (B등급) - 일부 개선 필요');
} else if (result.score >= 50) {
  console.log('⚠️  보통 (C등급) - 개선 필요');
} else {
  console.log('❌ 미흡 (D등급) - 대폭 개선 필요');
}
console.log('');

if (result.score < 90) {
  console.log('개선 방안:');
  if (result.breakdown.structures.count < 3) {
    console.log('  - 문장 구조를 ' + (3 - result.breakdown.structures.count) + '개 더 추가');
  }
  if (result.breakdown.vocabulary.count < 7) {
    console.log('  - 주요 단어를 ' + (7 - result.breakdown.vocabulary.count) + '개 더 추가');
  }
  if (!result.breakdown.vocabulary.hasGreek) {
    console.log('  - 그리스어 원어 설명 추가 필수!');
  }
  if (result.breakdown.context.length < 500) {
    console.log('  - 문맥 설명을 ' + (500 - result.breakdown.context.length) + '자 더 작성');
  }
  if (result.breakdown.specials.count < 3) {
    console.log('  - 특별 설명을 ' + (3 - result.breakdown.specials.count) + '개 더 추가');
  }
}
