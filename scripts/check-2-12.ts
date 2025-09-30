import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.join(__dirname, '../.env') })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_KEY!

const supabase = createClient(supabaseUrl, supabaseKey)

/**
 * Logs the verse and its associated sentence structures for "Philippians 2:12" to the console.
 *
 * If the verse is not found, logs '❌ Verse not found' and returns early.
 */
async function checkVerse() {
  const { data: verse } = await supabase
    .from('verses')
    .select('id, reference')
    .eq('reference', 'Philippians 2:12')
    .single()

  if (!verse) {
    console.log('❌ Verse not found')
    return
  }

  const { data: structures } = await supabase
    .from('sentence_structures')
    .select('*')
    .eq('verse_id', verse.id)
    .order('sequence_order')

  console.log(`\n📖 ${verse.reference}`)
  console.log(`Total structures: ${structures?.length}\n`)

  structures?.forEach((s, i) => {
    console.log(`[${i + 1}] Sequence: ${s.sequence_order}`)
    console.log(`    Classification: ${s.semantic_classification}`)
    console.log(`    Original: ${s.original_text}`)
    console.log(`    Korean: ${s.korean_translation}`)
    console.log()
  })
}

checkVerse()
  .then(() => process.exit(0))
  .catch(err => {
    console.error('Error:', err)
    process.exit(1)
  })