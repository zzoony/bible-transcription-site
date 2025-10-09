import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://kmbndafjfxzbyokzqgno.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttYm5kYWZqZnh6Ynlva3pxZ25vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1OTEwMjAwMywiZXhwIjoyMDc0Njc4MDAzfQ.dfX0cuabX-QPHWXf5XSbTfo-73Yqin6nTKpDShngjvY'
)

async function main() {
  console.log('\n=== 구약성경 분석 현황 ===\n')

  const books = [
    // 모세오경 (Torah)
    { name: 'Genesis', category: 'Torah', size: 'xlarge' },
    { name: 'Exodus', category: 'Torah', size: 'xlarge' },
    { name: 'Leviticus', category: 'Torah', size: 'large' },
    { name: 'Numbers', category: 'Torah', size: 'xlarge' },
    { name: 'Deuteronomy', category: 'Torah', size: 'large' },

    // 역사서 (Historical Books)
    { name: 'Joshua', category: 'Historical', size: 'large' },
    { name: 'Judges', category: 'Historical', size: 'large' },
    { name: 'Ruth', category: 'Historical', size: 'small' },
    { name: '1 Samuel', category: 'Historical', size: 'large' },
    { name: '2 Samuel', category: 'Historical', size: 'large' },
    { name: '1 Kings', category: 'Historical', size: 'large' },
    { name: '2 Kings', category: 'Historical', size: 'large' },
    { name: '1 Chronicles', category: 'Historical', size: 'large' },
    { name: '2 Chronicles', category: 'Historical', size: 'large' },
    { name: 'Ezra', category: 'Historical', size: 'medium' },
    { name: 'Nehemiah', category: 'Historical', size: 'medium' },
    { name: 'Esther', category: 'Historical', size: 'small' },

    // 지혜서 (Wisdom Literature)
    { name: 'Job', category: 'Wisdom', size: 'large' },
    { name: 'Psalms', category: 'Wisdom', size: 'xlarge' },
    { name: 'Proverbs', category: 'Wisdom', size: 'medium' },
    { name: 'Ecclesiastes', category: 'Wisdom', size: 'small' },
    { name: 'Song of Solomon', category: 'Wisdom', size: 'small' },

    // 대선지서 (Major Prophets)
    { name: 'Isaiah', category: 'Major Prophet', size: 'xlarge' },
    { name: 'Jeremiah', category: 'Major Prophet', size: 'xlarge' },
    { name: 'Lamentations', category: 'Major Prophet', size: 'small' },
    { name: 'Ezekiel', category: 'Major Prophet', size: 'xlarge' },
    { name: 'Daniel', category: 'Major Prophet', size: 'medium' },

    // 소선지서 (Minor Prophets)
    { name: 'Hosea', category: 'Minor Prophet', size: 'medium' },
    { name: 'Joel', category: 'Minor Prophet', size: 'small' },
    { name: 'Amos', category: 'Minor Prophet', size: 'medium' },
    { name: 'Obadiah', category: 'Minor Prophet', size: 'small' },
    { name: 'Jonah', category: 'Minor Prophet', size: 'small' },
    { name: 'Micah', category: 'Minor Prophet', size: 'medium' },
    { name: 'Nahum', category: 'Minor Prophet', size: 'small' },
    { name: 'Habakkuk', category: 'Minor Prophet', size: 'small' },
    { name: 'Zephaniah', category: 'Minor Prophet', size: 'small' },
    { name: 'Haggai', category: 'Minor Prophet', size: 'small' },
    { name: 'Zechariah', category: 'Minor Prophet', size: 'medium' },
    { name: 'Malachi', category: 'Minor Prophet', size: 'small' }
  ]

  let totalVerse = 0
  let totalAnalyzed = 0
  const incomplete: Array<{name: string, category: string, remaining: number, total: number}> = []

  let currentCategory = ''

  for (const book of books) {
    // 카테고리 헤더 출력
    if (book.category !== currentCategory) {
      console.log(`\n--- ${book.category} ---`)
      currentCategory = book.category
    }

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
      incomplete.push({ name: book.name, category: book.category, remaining, total: total || 0 })
    }

    const pct = total ? Math.round((analyzed! / total!) * 100) : 0
    const status = analyzed === total ? '✅' : analyzed! > 0 ? '🔄' : '⏸️'

    const name = book.name.padEnd(20)
    const counts = `${String(analyzed).padStart(4)}/${String(total).padStart(4)}`
    const percent = `${String(pct).padStart(3)}%`
    console.log(`${status} ${name} ${counts} (${percent})`)
  }

  console.log('\n' + '='.repeat(60))
  console.log(`구약 전체: ${totalAnalyzed}/${totalVerse} (${((totalAnalyzed/totalVerse)*100).toFixed(1)}%)`)
  console.log('='.repeat(60))

  if (incomplete.length > 0) {
    console.log('\n=== 미완료 책 (크기 순) ===\n')
    incomplete.sort((a, b) => a.remaining - b.remaining)
    incomplete.forEach(book => {
      console.log(`- ${book.name.padEnd(20)} ${book.remaining.toString().padStart(4)}개 구절 남음 (전체 ${book.total})`)
    })
  } else {
    console.log('\n🎉 구약 전체 분석 완료!')
  }

  console.log('')
}

main()
