import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../../../apps/web/.env.local') });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

async function inspectVerse(reference: string) {
  console.log('구절 상세 분석: ' + reference + '\n');
  console.log('='.repeat(60) + '\n');

  const { data: analysis, error } = await supabase
    .from('verses')
    .select('id, reference, niv_text, sentence_structures (*), vocabulary (*), contextual_explanations (*), korean_translations (*), special_explanations (*)')
    .ilike('reference', reference)
    .single();

  if (error || !analysis) {
    console.error('구절 조회 실패:', error);
    return;
  }

  console.log('NIV 원문:');
  console.log(analysis.niv_text + '\n');

  console.log('문장 구조 (' + (analysis.sentence_structures?.length || 0) + '개):');
  if (analysis.sentence_structures && analysis.sentence_structures.length > 0) {
    analysis.sentence_structures.forEach((s: any, i: number) => {
      console.log((i+1) + '. ' + s.original_text);
      console.log('   분류: ' + (s.semantic_classification || '없음'));
      console.log('   문법: ' + (s.grammatical_explanation || '없음').substring(0, 80) + '...');
    });
  } else {
    console.log('  (없음)');
  }
  console.log('');

  console.log('주요 단어 (' + (analysis.vocabulary?.length || 0) + '개):');
  if (analysis.vocabulary && analysis.vocabulary.length > 0) {
    analysis.vocabulary.forEach((v: any, i: number) => {
      const hasGreek = v.definition_korean && v.definition_korean.includes('그리스어');
      const marker = hasGreek ? '[그리스어 O]' : '[그리스어 X]';
      console.log((i+1) + '. ' + v.word + ' ' + marker);
    });
  } else {
    console.log('  (없음)');
  }
  console.log('');

  console.log('문맥 설명:');
  if (analysis.contextual_explanations && analysis.contextual_explanations.length > 0) {
    const ctx = analysis.contextual_explanations[0];
    const text = ctx.integrated_explanation || '';
    console.log('  길이: ' + text.length + '자');
    console.log('  내용: ' + text.substring(0, 150) + '...\n');
  } else {
    console.log('  (없음)\n');
  }

  console.log('한국어 번역:');
  if (analysis.korean_translations && analysis.korean_translations.length > 0) {
    console.log('  ' + analysis.korean_translations[0].natural_translation + '\n');
  } else {
    console.log('  (없음)\n');
  }

  console.log('특별 설명 (' + (analysis.special_explanations?.length || 0) + '개)');
  if (analysis.special_explanations && analysis.special_explanations.length > 0) {
    analysis.special_explanations.forEach((s: any, i: number) => {
      console.log((i+1) + '. [' + s.explanation_type + '] ' + s.content.substring(0, 80) + '...');
    });
  } else {
    console.log('  (없음)');
  }

  console.log('\n' + '='.repeat(60));
}

const reference = process.argv[2] || '1 Corinthians 1:1';
inspectVerse(reference).catch(console.error);
