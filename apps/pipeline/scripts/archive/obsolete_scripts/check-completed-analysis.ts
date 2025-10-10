import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import * as path from 'path'

const envPath = path.resolve(__dirname, '../.env')
dotenv.config({ path: envPath })

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

async function checkAnalysis() {
  const books = [
    'Philippians', '1 Thessalonians', '2 Thessalonians',
    '2 Timothy', 'Titus', 'Philemon',
    '2 Peter', '2 John', '3 John', 'Jude', 'Galatians'
  ]

  console.log('📊 분석 완료 현황:\n')

  for (const book of books) {
    const { count: verseCount } = await supabase
      .from('verses')
      .select('*', { count: 'exact', head: true })
      .ilike('reference', `${book}%`)

    const { count: analysisCount } = await supabase
      .from('sentence_structures')
      .select('verses!inner(reference)', { count: 'exact', head: true })
      .ilike('verses.reference', `${book}%`)

    const status = verseCount === analysisCount ? '✅' : '⚠️'
    console.log(`${status} ${book}: ${analysisCount}/${verseCount} 구절 분석 완료`)
  }
}

checkAnalysis()
