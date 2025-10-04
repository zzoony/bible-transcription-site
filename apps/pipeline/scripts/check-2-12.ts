import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import * as path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({ path: path.join(__dirname, '../.env') })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ 필수 환경 변수가 설정되지 않았습니다: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_KEY')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function checkVerse() {
  const { data: verse, error: verseError } = await supabase
    .from('verses')
    .select('id, reference')
    .eq('reference', 'Philippians 2:12')
    .single()

  if (verseError) {
    console.error('❌ 구절 조회 실패:', verseError.message)
    process.exit(1)
  }

  if (!verse) {
    console.log('❌ Verse not found')
    return
  }

  const { data: structures, error: structuresError } = await supabase
    .from('sentence_structures')
    .select('*')
    .eq('verse_id', verse.id)
    .order('sequence_order')

  if (structuresError) {
    console.error('❌ 문장 구조 조회 실패:', structuresError.message)
    process.exit(1)
  }

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