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
  const { data: verses } = await supabase
    .from('verses')
    .select('id, reference')
    .ilike('reference', '2 Peter%')
    .order('reference')

  const verseIds = verses?.map(v => v.id) || []

  const { data: structures } = await supabase
    .from('sentence_structures')
    .select('verse_id')
    .in('verse_id', verseIds)

  const analyzed = new Set(structures?.map(s => s.verse_id) || [])

  console.log(`총 구절: ${verses?.length || 0}`)
  console.log(`분석 완료: ${analyzed.size}`)
  console.log(`남은 구절: ${(verses?.length || 0) - analyzed.size}`)

  if (analyzed.size < 10) {
    verses?.slice(0, 5).forEach(v => {
      const done = analyzed.has(v.id) ? '✓' : '✗'
      console.log(`  ${done} ${v.reference}`)
    })
  }
}

check().catch(console.error)
