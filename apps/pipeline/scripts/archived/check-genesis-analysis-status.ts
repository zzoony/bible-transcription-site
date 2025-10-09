import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

async function checkStatus() {
  // Genesis verses의 analysis_completed 통계
  const { data: allVerses, error: allError } = await supabase
    .from('verses')
    .select('id, reference, analysis_completed')
    .eq('book_id', 37)
    .eq('chapter_id', 621)
    .order('verse_number')
    .limit(10)

  console.log('\n=== Genesis Chapter 1 verses (first 10) ===')
  if (allError) {
    console.error('Error:', allError)
  } else {
    console.log('Total:', allVerses?.length || 0)
    allVerses?.forEach(v => {
      console.log(`${v.reference}: analysis_completed = ${v.analysis_completed}`)
    })
  }

  // analysis_completed = true인 것만 조회
  const { data: completedVerses, error: completedError } = await supabase
    .from('verses')
    .select('id, reference')
    .eq('book_id', 37)
    .eq('chapter_id', 621)
    .eq('analysis_completed', true)
    .limit(10)

  console.log('\n=== analysis_completed = true 필터 적용 ===')
  if (completedError) {
    console.error('Error:', completedError)
  } else {
    console.log('Count:', completedVerses?.length || 0)
  }
}

checkStatus().catch(console.error)
