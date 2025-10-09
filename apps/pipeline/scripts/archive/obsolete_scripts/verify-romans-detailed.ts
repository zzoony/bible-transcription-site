import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://kmbndafjfxzbyokzqgno.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttYm5kYWZqZnh6Ynlva3pxZ25vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1OTEwMjAwMywiZXhwIjoyMDc0Njc4MDAzfQ.dfX0cuabX-QPHWXf5XSbTfo-73Yqin6nTKpDShngjvY'
);

async function verifyRomans() {
  console.log('Romans 분석 상태 상세 확인\n');
  console.log('='.repeat(60));

  // 1. 전체 구절 수
  const { count: totalVerses } = await supabase
    .from('verses')
    .select('*', { count: 'exact', head: true })
    .ilike('reference', 'Romans%');

  console.log(`\n1. 전체 Romans 구절 수: ${totalVerses}`);

  // 2. 각 테이블별 저장 상태
  const tables = [
    'sentence_structures',
    'vocabulary',
    'contextual_explanations',
    'korean_translations',
    'special_explanations'
  ];

  console.log('\n2. 테이블별 저장 상태:');

  for (const table of tables) {
    // Romans 구절의 verse_id 가져오기
    const { data: romansVerses } = await supabase
      .from('verses')
      .select('id')
      .ilike('reference', 'Romans%');

    const verseIds = romansVerses?.map(v => v.id) || [];

    // 각 테이블에서 Romans 관련 데이터 수 확인
    const { count } = await supabase
      .from(table)
      .select('*', { count: 'exact', head: true })
      .in('verse_id', verseIds);

    console.log(`   ${table}: ${count}개`);
  }

  // 3. Romans 1장 상세 확인
  console.log('\n3. Romans 1장 구절별 확인:');

  const { data: chapter1Verses } = await supabase
    .from('verses')
    .select('id, reference')
    .ilike('reference', 'Romans 1:%')
    .order('reference');

  if (chapter1Verses) {
    for (const verse of chapter1Verses) {
      const { count: structCount } = await supabase
        .from('sentence_structures')
        .select('*', { count: 'exact', head: true })
        .eq('verse_id', verse.id);

      const status = structCount && structCount > 0 ? '✅' : '❌';
      console.log(`   ${status} ${verse.reference} (문장구조: ${structCount}개)`);
    }
  }

  console.log('\n' + '='.repeat(60));
}

verifyRomans();
