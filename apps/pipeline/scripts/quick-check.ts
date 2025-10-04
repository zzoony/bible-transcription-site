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

  const unique = new Set(analyzed?.map(a => a.verse_id)).size

  console.log(`진행: ${unique}/${verses!.length}`)
}

check().catch(console.error)