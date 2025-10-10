import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Monorepo에서 apps/web/.env.local 파일 로드
dotenv.config({ path: path.resolve(__dirname, '../../../apps/web/.env.local') });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

async function checkGenesis1_1() {
  console.log('창세기 1:1 현재 상태 확인');
  console.log('='.repeat(80));

  const verseId = 16705; // Genesis 1:1 verse_id

  // 한국어 번역 확인
  const { data: translation, error: transError } = await supabase
    .from('korean_translations')
    .select('natural_translation')
    .eq('verse_id', verseId)
    .single();

  console.log('\n한국어 번역:');
  if (transError) {
    console.log(`❌ 오류: ${transError.message}`);
  } else if (translation) {
    console.log(`"${translation.natural_translation}"`);
  } else {
    console.log('없음');
  }

  // 주요 단어 확인
  const { data: vocab, error: vocabError } = await supabase
    .from('vocabulary')
    .select('word, ipa_pronunciation, definition_korean')
    .eq('verse_id', verseId);

  console.log('\n주요 단어:');
  if (vocabError) {
    console.log(`❌ 오류: ${vocabError.message}`);
  } else if (vocab && vocab.length > 0) {
    vocab.forEach((v) => {
      const ipaStatus = v.ipa_pronunciation?.match(/^\[.+\]$/) ? '✅' : '❌';
      console.log(`  ${ipaStatus} ${v.word}: ${v.ipa_pronunciation} - ${v.definition_korean?.substring(0, 50)}...`);
    });
  } else {
    console.log('없음');
  }

  // 문맥 설명 확인
  const { data: context, error: contextError } = await supabase
    .from('contextual_explanations')
    .select('integrated_explanation')
    .eq('verse_id', verseId)
    .single();

  console.log('\n문맥 설명:');
  if (contextError) {
    console.log(`❌ 오류: ${contextError.message}`);
  } else if (context) {
    console.log(`길이: ${context.integrated_explanation.length}자`);
    console.log(`내용: ${context.integrated_explanation.substring(0, 100)}...`);
  } else {
    console.log('없음');
  }

  console.log('\n' + '='.repeat(80));
}

checkGenesis1_1().catch(console.error);
