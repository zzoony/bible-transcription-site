import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import * as path from 'path'

const envPath = path.resolve(__dirname, '../.env')
dotenv.config({ path: envPath })

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

async function checkAll() {
  const books = [
    'Philippians', '1 Thessalonians', '2 Thessalonians',
    '2 Timothy', 'Titus', 'Philemon',
    '2 Peter', '2 John', '3 John', 'Jude', 'Galatians'
  ]

  console.log('📊 모든 책 완성도 확인:\n')

  for (const book of books) {
    const { data } = await supabase
      .from('verses')
      .select(`
        reference,
        sentence_structures(id)
      `)
      .ilike('reference', `${book}%`)

    const total = data?.length || 0
    const analyzed = data?.filter(v => v.sentence_structures && v.sentence_structures.length > 0).length || 0
    const status = total === analyzed ? '✅' : '⚠️'
    
    console.log(`${status} ${book}: ${analyzed}/${total} 구절 (${Math.round(analyzed/total*100)}%)`)
  }
}

checkAll()
