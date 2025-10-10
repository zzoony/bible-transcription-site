import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_KEY!
const supabase = createClient(supabaseUrl, supabaseKey)

async function checkType() {
  const { data, error } = await supabase
    .from('verses')
    .select('id, reference, analysis_completed')
    .eq('book_id', 37)
    .eq('chapter_id', 621)
    .limit(3)

  if (error) {
    console.error('Error:', error)
  } else {
    data?.forEach(v => {
      console.log(`${v.reference}:`)
      console.log(`  value: ${v.analysis_completed}`)
      console.log(`  type: ${typeof v.analysis_completed}`)
      console.log(`  === true: ${v.analysis_completed === true}`)
      console.log(`  == true: ${v.analysis_completed == true}`)
      console.log(`  raw: ${JSON.stringify(v.analysis_completed)}`)
    })
  }
}

checkType().catch(console.error)
