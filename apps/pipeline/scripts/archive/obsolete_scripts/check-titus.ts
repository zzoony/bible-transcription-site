import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'

dotenv.config()

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!,
  { auth: { autoRefreshToken: false, persistSession: false } }
)

async function checkTitus() {
  // Titus NIV 원문 확인
  const { data: verses, error } = await supabase
    .from('verses')
    .select('reference, niv_text')
    .ilike('reference', 'Titus%')
    .order('reference')

  if (error) {
    console.error('오류:', error)
    return
  }

  console.log(`\n=== Titus 총 구절 수: ${verses?.length || 0} ===\n`)

  if (verses && verses.length > 0) {
    console.log('처음 5개 구절:')
    verses.slice(0, 5).forEach(v => {
      console.log(`\n${v.reference}`)
      console.log(`${v.niv_text?.substring(0, 100)}...`)
    })

    console.log('\n마지막 3개 구절:')
    verses.slice(-3).forEach(v => {
      console.log(`\n${v.reference}`)
      console.log(`${v.niv_text?.substring(0, 100)}...`)
    })
  }

  // 이미 분석된 구절 확인
  const { data: analyzed } = await supabase
    .from('verse_analyses')
    .select('verse_reference')
    .ilike('verse_reference', 'Titus%')

  console.log(`\n이미 분석된 Titus 구절: ${analyzed?.length || 0}개`)

  if (analyzed && analyzed.length > 0) {
    console.log('분석된 구절들:', analyzed.map(a => a.verse_reference).join(', '))
  }
}

checkTitus().catch(console.error)
