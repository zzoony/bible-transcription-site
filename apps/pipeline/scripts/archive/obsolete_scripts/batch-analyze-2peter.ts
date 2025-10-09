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

async function getVersesToAnalyze() {
  const { data: verses } = await supabase
    .from('verses')
    .select('id, reference, niv_text')
    .ilike('reference', '2 Peter%')
    .order('id')

  const verseIds = verses?.map(v => v.id) || []
  const { data: analyzed } = await supabase
    .from('sentence_structures')
    .select('verse_id')
    .in('verse_id', verseIds)

  const analyzedSet = new Set(analyzed?.map(a => a.verse_id) || [])
  const toAnalyze = verses?.filter(v => !analyzedSet.has(v.id)) || []

  return toAnalyze
}

async function main() {
  const verses = await getVersesToAnalyze()

  console.log(JSON.stringify({
    total: verses.length,
    verses: verses.map(v => ({
      id: v.id,
      reference: v.reference,
      niv_text: v.niv_text
    }))
  }, null, 2))
}

main().catch(console.error)
