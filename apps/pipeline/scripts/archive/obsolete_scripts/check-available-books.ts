import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import * as path from 'path'

const envPath = path.resolve(__dirname, '../.env')
dotenv.config({ path: envPath })

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

async function checkBooks() {
  // 신약 책들 목록
  const ntBooks = [
    'Matthew', 'Mark', 'Luke', 'John', 'Acts',
    'Romans', '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians',
    'Philippians', 'Colossians', '1 Thessalonians', '2 Thessalonians',
    '1 Timothy', '2 Timothy', 'Titus', 'Philemon',
    'Hebrews', 'James', '1 Peter', '2 Peter',
    '1 John', '2 John', '3 John', 'Jude', 'Revelation'
  ]

  console.log('📖 신약 성경 NIV 텍스트 확인 중...\n')

  for (const book of ntBooks) {
    const { data, error } = await supabase
      .from('verses')
      .select('reference')
      .ilike('reference', `${book}%`)
      .limit(1)

    if (data && data.length > 0) {
      // 총 구절 수 확인
      const { count } = await supabase
        .from('verses')
        .select('*', { count: 'exact', head: true })
        .ilike('reference', `${book}%`)

      console.log(`✅ ${book}: ${count}구절 있음`)
    } else {
      console.log(`❌ ${book}: NIV 텍스트 없음`)
    }
  }
}

checkBooks()
