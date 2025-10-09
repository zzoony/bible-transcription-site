import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

async function updateGenesis() {
  // Genesis book ID = 37
  const { data: updated, error } = await supabase
    .from('verses')
    .update({ analysis_completed: true })
    .eq('book_id', 37)
    .select('id, reference, analysis_completed')
    .limit(10)

  if (error) {
    console.error('Update 오류:', error)
  } else {
    console.log('✅ 업데이트된 verses:', updated?.length || 0)
    console.log('샘플:', updated?.slice(0, 3))
  }
}

updateGenesis().catch(console.error)
