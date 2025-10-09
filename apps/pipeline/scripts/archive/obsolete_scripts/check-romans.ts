import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://kmbndafjfxzbyokzqgno.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttYm5kYWZqZnh6Ynlva3pxZ25vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1OTEwMjAwMywiZXhwIjoyMDc0Njc4MDAzfQ.dfX0cuabX-QPHWXf5XSbTfo-73Yqin6nTKpDShngjvY'
);

async function checkRomans() {
  console.log('Romans 구절 확인 중...\n');

  // 전체 구절 수
  const { count: totalCount } = await supabase
    .from('verses')
    .select('*', { count: 'exact', head: true })
    .ilike('reference', 'Romans%');

  console.log(`총 구절 수: ${totalCount || 0}`);

  // 분석된 구절 수
  const { count: analyzedCount } = await supabase
    .from('verse_analyses')
    .select('*', { count: 'exact', head: true })
    .ilike('verse_reference', 'Romans%');

  console.log(`분석된 구절 수: ${analyzedCount || 0}`);
  console.log(`진행률: ${totalCount ? Math.round((analyzedCount || 0) / totalCount * 100) : 0}%\n`);

  // 샘플 구절 확인
  const { data: sampleVerses } = await supabase
    .from('verses')
    .select('reference, niv_text')
    .ilike('reference', 'Romans%')
    .order('reference')
    .limit(5);

  console.log('샘플 구절 (처음 5개):');
  sampleVerses?.forEach(v => {
    console.log(`${v.reference}: ${v.niv_text.substring(0, 50)}...`);
  });
}

checkRomans();
