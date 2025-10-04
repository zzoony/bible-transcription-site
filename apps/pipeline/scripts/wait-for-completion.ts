import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'

dotenv.config()

const sb = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!,
  { auth: { autoRefreshToken: false, persistSession: false } }
)

async function waitFor() {
  const TARGET = 149
  let count = 0

  while (count < TARGET) {
    const { data: verses } = await sb
      .from('verses')
      .select('id')
      .ilike('reference', 'Galatians%')

    const { data: analyzed } = await sb
      .from('sentence_structures')
      .select('verse_id')
      .in('verse_id', verses!.map(v => v.id))

    count = new Set(analyzed?.map(a => a.verse_id)).size
    console.log(`${new Date().toLocaleTimeString()}: ${count}/${TARGET}`)

    if (count >= TARGET) {
      console.log('\n✅ 완료!')
      break
    }

    await new Promise(resolve => setTimeout(resolve, 30000)) // 30초 대기
  }
}

waitFor().catch(console.error)