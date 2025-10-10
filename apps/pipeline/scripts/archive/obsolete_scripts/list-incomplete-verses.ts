import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import * as fs from 'fs'

dotenv.config()

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

const NT_BOOKS = [
  'Matthew', 'Mark', 'Luke', 'John', 'Acts', 'Romans',
  '1 Corinthians', '2 Corinthians', 'Galatians', 'Ephesians',
  'Philippians', 'Colossians', '1 Thessalonians', '2 Thessalonians',
  '1 Timothy', '2 Timothy', 'Titus', 'Philemon', 'Hebrews',
  'James', '1 Peter', '2 Peter', '1 John', '2 John', '3 John',
  'Jude', 'Revelation'
]

async function listIncompleteVerses() {
  console.log('📋 미완료 구절 목록 생성 중...\n')

  const allIncomplete: string[] = []
  const bookStats: any[] = []

  for (const bookName of NT_BOOKS) {
    const { data: verses } = await supabase
      .from('verses')
      .select('reference, analysis_completed')
      .ilike('reference', `${bookName}%`)
      .order('id')

    if (!verses || verses.length === 0) {
      console.log(`⚠️  ${bookName}: 구절 없음`)
      continue
    }

    const incomplete = verses.filter(v => !v.analysis_completed)
    const total = verses.length
    const completed = total - incomplete.length
    const percent = Math.round((completed / total) * 100)

    const status = percent === 100 ? '✅' : percent > 0 ? '🔄' : '❌'
    console.log(`${status} ${bookName}: ${completed}/${total} (${percent}%)`)

    if (incomplete.length > 0) {
      allIncomplete.push(...incomplete.map(v => v.reference))
      bookStats.push({
        book: bookName,
        total,
        completed,
        incomplete: incomplete.length,
        percent
      })
    }
  }

  // JSON 파일로 저장
  const output = {
    timestamp: new Date().toISOString(),
    total_incomplete: allIncomplete.length,
    incomplete_verses: allIncomplete,
    book_stats: bookStats
  }

  fs.writeFileSync(
    'logs/incomplete-verses.json',
    JSON.stringify(output, null, 2)
  )

  console.log(`\n📁 미완료 구절 목록 저장: logs/incomplete-verses.json`)
  console.log(`📊 총 미완료 구절: ${allIncomplete.length}개`)

  return output
}

listIncompleteVerses().catch(console.error)
