import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://kmbndafjfxzbyokzqgno.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttYm5kYWZqZnh6Ynlva3pxZ25vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1OTEwMjAwMywiZXhwIjoyMDc0Njc4MDAzfQ.dfX0cuabX-QPHWXf5XSbTfo-73Yqin6nTKpDShngjvY'
)

async function main() {
  const { data: chapters, error } = await supabase
    .from('chapters')
    .select('*')
    .limit(3)

  if (error) {
    console.error('❌ 오류:', error)
    return
  }

  console.log('\n=== CHAPTERS 테이블 샘플 ===\n')
  chapters?.forEach(ch => {
    console.log(JSON.stringify(ch, null, 2))
    console.log('---')
  })
}

main().catch(console.error)
