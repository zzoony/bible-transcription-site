import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'

dotenv.config()

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
)

async function check() {
  // Get all 2 Peter verses
  const { data: verses } = await supabase
    .from('verses')
    .select('id, reference, niv_text')
    .ilike('reference', '2 Peter%')
    .order('reference')

  console.log(`총 구절: ${verses?.length || 0}`)
  console.log(`샘플:`)
  verses?.slice(0, 3).forEach(v => {
    console.log(`  ${v.reference}: ${v.niv_text?.substring(0, 60)}...`)
  })

  // Check already analyzed
  const verseIds = verses?.map(v => v.id) || []
  const { data: analyzed } = await supabase
    .from('verse_analysis')
    .select('verse_id')
    .in('verse_id', verseIds)

  console.log(`이미 분석됨: ${analyzed?.length || 0}`)
}

check().catch(console.error)
