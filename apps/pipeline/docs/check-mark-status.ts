import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://kmbndafjfxzbyokzqgno.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttYm5kYWZqZnh6Ynlva3pxZ25vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1OTEwMjAwMywiZXhwIjoyMDc0Njc4MDAzfQ.dfX0cuabX-QPHWXf5XSbTfo-73Yqin6nTKpDShngjvY'
);

async function checkMarkStatus() {
  const { count: total } = await supabase
    .from('verses')
    .select('id', { count: 'exact', head: true })
    .ilike('reference', 'Mark%');
  
  const { count: completed } = await supabase
    .from('verses')
    .select('id', { count: 'exact', head: true })
    .ilike('reference', 'Mark%')
    .eq('analysis_completed', true);
  
  const { data: pending } = await supabase
    .from('verses')
    .select('id, reference, niv_text')
    .ilike('reference', 'Mark%')
    .eq('analysis_completed', false)
    .order('reference')
    .limit(5);

  console.log('=== 마가복음 분석 현황 ===');
  console.log(`전체 구절: ${total || 0}`);
  console.log(`완료된 구절: ${completed || 0}`);
  console.log(`남은 구절: ${(total || 0) - (completed || 0)}`);
  console.log('\n처음 5개 미완료 구절:');
  if (pending && pending.length > 0) {
    pending.forEach(v => {
      console.log(`  ${v.reference}: ${v.niv_text?.substring(0, 60)}...`);
    });
  }
}

checkMarkStatus().catch(console.error);
