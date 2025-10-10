import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../../apps/web/.env.local') });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!,
  { auth: { autoRefreshToken: false, persistSession: false } }
);

async function checkGenesisChapter1() {
  console.log('=== 창세기 1장 전체 분석 현황 ===\n');

  // 창세기 1장 모든 구절 조회
  const { data: verses } = await supabase
    .from('verses')
    .select('id, reference, niv_text')
    .ilike('reference', 'Genesis 1:%')
    .order('reference');

  if (!verses) {
    console.log('구절을 찾을 수 없습니다.');
    return;
  }

  console.log(`총 ${verses.length}개 구절 발견\n`);

  const summary = [];

  for (const verse of verses) {
    const verseNum = parseInt(verse.reference.match(/Genesis 1:(\d+)/)?.[1] || '0');

    // Sentence structures 확인
    const { data: structures } = await supabase
      .from('sentence_structures')
      .select('id')
      .eq('verse_id', verse.id);

    // Korean translation 확인
    const { data: translation } = await supabase
      .from('korean_translations')
      .select('natural_translation')
      .eq('verse_id', verse.id)
      .single();

    const hasStructures = (structures?.length || 0) > 0;
    const hasTranslation = translation && translation.natural_translation !== '번역 필요';

    const status = hasStructures && hasTranslation ? '✅' : '❌';

    summary.push({
      verse: verseNum,
      reference: verse.reference,
      structures: structures?.length || 0,
      hasTranslation,
      status
    });

    console.log(`${status} ${verse.reference}: structures=${structures?.length || 0}, translation=${hasTranslation ? 'O' : 'X'}`);
  }

  // 통계
  console.log('\n=== 통계 ===');
  const completed = summary.filter(s => s.status === '✅').length;
  const missing = summary.filter(s => s.status === '❌').length;

  console.log(`완료: ${completed}/${verses.length}`);
  console.log(`누락: ${missing}/${verses.length}`);

  // 누락된 구절 범위 확인
  const missingVerses = summary.filter(s => s.status === '❌');
  if (missingVerses.length > 0) {
    console.log('\n누락된 구절:');
    console.log(missingVerses.map(v => v.verse).join(', '));
  }
}

checkGenesisChapter1().catch(console.error);
