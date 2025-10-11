import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';
import { batch2Analyses } from './analyze-batch-2';

dotenv.config({ path: path.resolve(__dirname, '../../../../apps/web/.env.local') });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

const PROGRESS_FILE = 'bible-analysis/workspace/.1cor-batch-progress.json';

async function saveBatch() {
  console.log('배치 #2 저장 시작...\n');
  console.log('='.repeat(80));
  console.log('총 구절: ' + batch2Analyses.length + '개');
  console.log('='.repeat(80) + '\n');

  let successCount = 0;
  let errorCount = 0;
  const errors: any[] = [];

  for (let i = 0; i < batch2Analyses.length; i++) {
    const analysis = batch2Analyses[i];
    console.log((i + 1) + '. ' + analysis.reference + ' 저장 중...');

    try {
      // 구절 ID 조회
      const { data: verse, error: verseError } = await supabase
        .from('verses')
        .select('id')
        .ilike('reference', analysis.reference)
        .single();

      if (verseError || !verse) {
        throw new Error('구절을 찾을 수 없음: ' + analysis.reference);
      }

      const verseId = verse.id;

      // 1. 기존 데이터 삭제 (중복 방지)
      await supabase.from('sentence_structures').delete().eq('verse_id', verseId);
      await supabase.from('vocabulary').delete().eq('verse_id', verseId);
      await supabase.from('contextual_explanations').delete().eq('verse_id', verseId);
      await supabase.from('korean_translations').delete().eq('verse_id', verseId);
      await supabase.from('special_explanations').delete().eq('verse_id', verseId);

      // 2. 문장 구조 저장
      if (analysis.sentence_structures && analysis.sentence_structures.length > 0) {
        const { error: structureError } = await supabase
          .from('sentence_structures')
          .insert(
            analysis.sentence_structures.map((s: any) => ({
              verse_id: verseId,
              sequence_order: s.sequence_order,
              semantic_classification: s.semantic_classification,
              original_text: s.original_text,
              korean_translation: s.korean_translation,
              grammatical_explanation: s.grammatical_explanation
            }))
          );

        if (structureError) throw structureError;
      }

      // 3. 주요 단어 저장
      if (analysis.vocabulary && analysis.vocabulary.length > 0) {
        const { error: vocabError } = await supabase
          .from('vocabulary')
          .insert(
            analysis.vocabulary.map((v: any) => ({
              verse_id: verseId,
              word: v.word,
              ipa_pronunciation: v.ipa_pronunciation,
              korean_pronunciation: v.korean_pronunciation,
              part_of_speech: v.part_of_speech,
              definition_korean: v.definition_korean,
              usage_note: v.usage_note
            }))
          );

        if (vocabError) throw vocabError;
      }

      // 4. 문맥 설명 저장
      if (analysis.contextual_explanations && analysis.contextual_explanations.length > 0) {
        const { error: contextError } = await supabase
          .from('contextual_explanations')
          .insert(
            analysis.contextual_explanations.map((c: any) => ({
              verse_id: verseId,
              integrated_explanation: c.integrated_explanation
            }))
          );

        if (contextError) throw contextError;
      }

      // 5. 한국어 번역 저장
      if (analysis.korean_translations && analysis.korean_translations.length > 0) {
        const { error: translationError } = await supabase
          .from('korean_translations')
          .insert(
            analysis.korean_translations.map((t: any) => ({
              verse_id: verseId,
              natural_translation: t.natural_translation
            }))
          );

        if (translationError) throw translationError;
      }

      // 6. 특별 설명 저장
      if (analysis.special_explanations && analysis.special_explanations.length > 0) {
        const { error: specialError } = await supabase
          .from('special_explanations')
          .insert(
            analysis.special_explanations.map((s: any) => ({
              verse_id: verseId,
              explanation_type: s.explanation_type,
              content: s.content
            }))
          );

        if (specialError) throw specialError;
      }

      console.log('   ✅ 저장 완료\n');
      successCount++;

      // Rate limiting (3초 대기)
      await new Promise(resolve => setTimeout(resolve, 3000));

    } catch (error: any) {
      console.log('   ❌ 오류 발생: ' + error.message + '\n');
      errorCount++;
      errors.push({
        reference: analysis.reference,
        error: error.message
      });
    }
  }

  console.log('='.repeat(80));
  console.log('저장 완료 결과');
  console.log('='.repeat(80));
  console.log('성공: ' + successCount + '개');
  console.log('실패: ' + errorCount + '개');
  console.log('='.repeat(80) + '\n');

  if (errorCount > 0) {
    console.log('오류 목록:');
    errors.forEach(e => {
      console.log('- ' + e.reference + ': ' + e.error);
    });
    console.log('');
  }

  // 진행 상황 업데이트
  if (successCount > 0) {
    let completedVerses: string[] = [];
    if (fs.existsSync(PROGRESS_FILE)) {
      completedVerses = JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf-8'));
    }

    // 새로 완료된 구절 추가
    const newCompleted = batch2Analyses
      .slice(0, successCount)
      .map(a => a.reference)
      .filter(ref => !completedVerses.includes(ref));

    completedVerses = [...completedVerses, ...newCompleted];
    fs.writeFileSync(PROGRESS_FILE, JSON.stringify(completedVerses, null, 2));

    console.log('진행 상황 파일 업데이트됨: ' + completedVerses.length + '개 완료');
  }

  if (successCount === batch2Analyses.length) {
    console.log('\n🎉 배치 #2 전체 저장 성공!');
    console.log('다음 단계: prepare-next-batch.ts를 실행하여 배치 #3 준비\n');
  } else {
    console.log('\n⚠️  일부 구절 저장 실패. 오류를 확인하고 재시도하세요.\n');
  }
}

saveBatch().catch(console.error);
