import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'

dotenv.config()

const sb = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!,
  { auth: { autoRefreshToken: false, persistSession: false } }
)

async function check() {
  const { data: verses } = await sb
    .from('verses')
    .select('id')
    .ilike('reference', 'Galatians%')

  const { data: analyzed } = await sb
    .from('sentence_structures')
    .select('verse_id')
    .in('verse_id', verses!.map(v => v.id))

  const analyzedSet = new Set(analyzed?.map(a => a.verse_id))
  const count = analyzedSet.size
  const total = verses!.length

  console.log(`\n📊 최종 결과`)
  console.log(`완료: ${count}/${total}`)
  console.log(`진행률: ${Math.round((count/total)*100)}%`)

  if (count < total) {
    const missing = verses!.filter(v => !analyzedSet.has(v.id))
    console.log(`\n❌ 누락: ${missing.length}개`)
    missing.forEach(v => console.log(`  - ${v.id}`))
  } else {
    console.log(`\n✅ 모든 구절 완료!`)
  }
}

check().catch(console.error)