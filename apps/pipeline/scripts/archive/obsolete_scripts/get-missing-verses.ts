import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://kmbndafjfxzbyokzqgno.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttYm5kYWZqZnh6Ynlva3pxZ25vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1OTEwMjAwMywiZXhwIjoyMDc0Njc4MDAzfQ.dfX0cuabX-QPHWXf5XSbTfo-73Yqin6nTKpDShngjvY'
);

async function getMissing() {
  const { data } = await supabase
    .from('verses')
    .select('id, reference, niv_text')
    .in('reference', ['Romans 1:8', 'Romans 1:9'])
    .order('reference');

  console.log(JSON.stringify(data, null, 2));
}

getMissing();
