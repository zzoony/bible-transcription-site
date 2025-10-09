import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import * as path from 'path'

dotenv.config({ path: path.resolve(__dirname, '../.env') })

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!,
  { auth: { autoRefreshToken: false, persistSession: false } }
)

function parseReference(ref: string) {
  const match = ref.match(/(\d+)\s+\w+\s+(\d+):(\d+)/)
  if (!match) return { book: 0, chapter: 0, verse: 0 }
  return {
    book: parseInt(match[1]),
    chapter: parseInt(match[2]),
    verse: parseInt(match[3])
  }
}

async function main() {
  const { data, error } = await supabase
    .from('verses')
    .select('reference, niv_text')
    .ilike('reference', '2 Thessalonians%')

  if (error) {
    console.error('Error:', error)
    process.exit(1)
  }

  const sorted = data!.sort((a, b) => {
    const aRef = parseReference(a.reference)
    const bRef = parseReference(b.reference)
    if (aRef.chapter !== bRef.chapter) return aRef.chapter - bRef.chapter
    return aRef.verse - bRef.verse
  })

  console.log('=== 2 THESSALONIANS - ALL VERSES ===\n')
  sorted.forEach(v => {
    console.log(`${v.reference}`)
    console.log(`${v.niv_text}\n`)
  })

  console.log(`\nTotal: ${sorted.length} verses`)
}

main()
