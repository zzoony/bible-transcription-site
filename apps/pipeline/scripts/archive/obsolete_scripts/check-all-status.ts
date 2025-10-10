import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://kmbndafjfxzbyokzqgno.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttYm5kYWZqZnh6Ynlva3pxZ25vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1OTEwMjAwMywiZXhwIjoyMDc0Njc4MDAzfQ.dfX0cuabX-QPHWXf5XSbTfo-73Yqin6nTKpDShngjvY'
)

async function main() {
  console.log('\n=== 신약성경 분석 현황 ===\n')

  const books = [
    { name: 'Philemon', size: 'small' },
    { name: '2 John', size: 'small' },
    { name: '3 John', size: 'small' },
    { name: 'Jude', size: 'small' },
    { name: 'Titus', size: 'small' },
    { name: '2 Thessalonians', size: 'small' },
    { name: '1 Thessalonians', size: 'small' },
    { name: '2 Timothy', size: 'small' },
    { name: 'Colossians', size: 'small' },
    { name: 'Philippians', size: 'small' },
    { name: '2 Peter', size: 'small' },
    { name: 'Galatians', size: 'small' },
    { name: '1 Timothy', size: 'medium' },
    { name: 'James', size: 'medium' },
    { name: '1 Peter', size: 'medium' },
    { name: '1 John', size: 'medium' },
    { name: 'Ephesians', size: 'large' },
    { name: 'Hebrews', size: 'large' },
    { name: 'Revelation', size: 'large' },
    { name: '2 Corinthians', size: 'large' },
    { name: 'Romans', size: 'large' },
    { name: '1 Corinthians', size: 'large' },
    { name: 'Mark', size: 'xlarge' },
    { name: 'John', size: 'xlarge' },
    { name: 'Acts', size: 'xlarge' },
    { name: 'Matthew', size: 'xlarge' },
    { name: 'Luke', size: 'xlarge' }
  ]

  let totalVerse = 0
  let totalAnalyzed = 0
  const incomplete: Array<{name: string, remaining: number, total: number}> = []

  for (const book of books) {
    const { count: total } = await supabase
      .from('verses')
      .select('*', { count: 'exact', head: true })
      .ilike('reference', `${book.name}%`)

    const { count: analyzed } = await supabase
      .from('verses')
      .select('*', { count: 'exact', head: true })
      .ilike('reference', `${book.name}%`)
      .eq('analysis_completed', true)

    totalVerse += total || 0
    totalAnalyzed += analyzed || 0

    const remaining = (total || 0) - (analyzed || 0)
    if (remaining > 0) {
      incomplete.push({ name: book.name, remaining, total: total || 0 })
    }

    const pct = total ? Math.round((analyzed! / total!) * 100) : 0
    const status = analyzed === total ? '✅' : analyzed! > 0 ? '🔄' : '⏸️'

    const name = book.name.padEnd(20)
    const counts = `${String(analyzed).padStart(3)}/${String(total).padStart(3)}`
    const percent = `${String(pct).padStart(3)}%`
    console.log(`${status} ${name} ${counts} (${percent})`)
  }

  console.log('\n' + '='.repeat(50))
  console.log(`전체: ${totalAnalyzed}/${totalVerse} (${((totalAnalyzed/totalVerse)*100).toFixed(1)}%)`)
  console.log('='.repeat(50))

  console.log('\n=== 미완료 책 (우선순위 순) ===\n')
  incomplete.sort((a, b) => a.remaining - b.remaining)
  incomplete.forEach(book => {
    console.log(`- ${book.name.padEnd(20)} ${book.remaining}개 구절 남음 (전체 ${book.total})`)
  })
}

main()
