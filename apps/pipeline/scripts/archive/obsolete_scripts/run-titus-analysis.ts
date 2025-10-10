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

async function getAllTitusVerses() {
  const { data: verses, error } = await supabase
    .from('verses')
    .select('reference, niv_text')
    .ilike('reference', 'Titus%')
    .order('reference')

  if (error) {
    console.error('구절 조회 실패:', error)
    return []
  }

  return verses || []
}

async function main() {
  const verses = await getAllTitusVerses()

  console.log('=== Titus 전체 구절 목록 ===\n')
  console.log(`총 ${verses.length}개 구절\n`)

  verses.forEach((v, i) => {
    console.log(`\n[${i + 1}/${verses.length}] ${v.reference}`)
    console.log(`${v.niv_text}\n`)
  })
}

main()
