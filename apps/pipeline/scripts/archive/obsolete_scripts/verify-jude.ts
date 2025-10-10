import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Load from apps/pipeline/.env
const envPath = path.resolve(__dirname, '../.env');
dotenv.config({ path: envPath });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

async function verifyJude() {
  console.log('Jude 분석 데이터 검증 시작\n');

  // Get all Jude verses
  const { data: verses, error: versesError } = await supabase
    .from('verses')
    .select('id, reference, niv_text')
    .ilike('reference', 'Jude%')
    .order('reference');

  if (versesError || !verses) {
    console.error('Error fetching verses:', versesError);
    return;
  }

  console.log(`Total Jude verses: ${verses.length}`);
  console.log('Expected: 25\n');

  if (verses.length !== 25) {
    console.error('WARNING: Expected 25 verses but found', verses.length);
  }

  let allComplete = true;
  const missingAnalysis: string[] = [];

  for (const verse of verses) {
    console.log(`Checking ${verse.reference}...`);

    // Check sentence_structures
    const { data: sentences } = await supabase
      .from('sentence_structures')
      .select('id')
      .eq('verse_id', verse.id);

    // Check vocabulary
    const { data: vocab } = await supabase
      .from('vocabulary')
      .select('id')
      .eq('verse_id', verse.id);

    // Check contextual_explanations
    const { data: context } = await supabase
      .from('contextual_explanations')
      .select('id')
      .eq('verse_id', verse.id);

    // Check korean_translations
    const { data: korean } = await supabase
      .from('korean_translations')
      .select('id')
      .eq('verse_id', verse.id);

    const hasAllData =
      sentences && sentences.length > 0 &&
      vocab && vocab.length > 0 &&
      context && context.length > 0 &&
      korean && korean.length > 0;

    if (hasAllData) {
      console.log(`  ✅ Complete - ${sentences.length} sentences, ${vocab.length} vocab, ${context.length} context, ${korean.length} korean`);
    } else {
      console.log(`  ❌ Incomplete!`);
      console.log(`     Sentences: ${sentences?.length || 0}, Vocab: ${vocab?.length || 0}, Context: ${context?.length || 0}, Korean: ${korean?.length || 0}`);
      allComplete = false;
      missingAnalysis.push(verse.reference);
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log('검증 결과');
  console.log('='.repeat(60));
  console.log(`총 구절: ${verses.length}/25`);

  if (allComplete) {
    console.log('✅ 모든 구절 분석 완료!');
    console.log('\n각 구절마다 다음 데이터가 저장됨:');
    console.log('  - 문장 구조 (sentence_structures)');
    console.log('  - 어휘 (vocabulary)');
    console.log('  - 문맥 설명 (contextual_explanations)');
    console.log('  - 한국어 번역 (korean_translations)');
    console.log('  - 특별 설명 (special_explanations, 선택사항)');
  } else {
    console.log('❌ 일부 구절 미완성');
    console.log('\n누락된 구절들:');
    missingAnalysis.forEach(ref => console.log(`  - ${ref}`));
  }

  console.log('\n' + '='.repeat(60));
}

verifyJude().catch(console.error);
