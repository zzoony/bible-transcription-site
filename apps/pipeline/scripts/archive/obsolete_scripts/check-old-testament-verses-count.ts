import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'https://kmbndafjfxzbyokzqgno.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttYm5kYWZqZnh6Ynlva3pxZ25vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1OTEwMjAwMywiZXhwIjoyMDc0Njc4MDAzfQ.dfX0cuabX-QPHWXf5XSbTfo-73Yqin6nTKpDShngjvY'
)

// 구약 39권 예상 구절 수 (대략적인 수치)
const OT_EXPECTED_VERSES: { [key: string]: number } = {
  'Genesis': 1533,
  'Exodus': 1213,
  'Leviticus': 859,
  'Numbers': 1288,
  'Deuteronomy': 959,
  'Joshua': 658,
  'Judges': 618,
  'Ruth': 85,
  '1 Samuel': 810,
  '2 Samuel': 695,
  '1 Kings': 816,
  '2 Kings': 719,
  '1 Chronicles': 942,
  '2 Chronicles': 822,
  'Ezra': 280,
  'Nehemiah': 406,
  'Esther': 167,
  'Job': 1070,
  'Psalms': 2461,
  'Proverbs': 915,
  'Ecclesiastes': 222,
  'Song of Solomon': 117,
  'Isaiah': 1292,
  'Jeremiah': 1364,
  'Lamentations': 154,
  'Ezekiel': 1273,
  'Daniel': 357,
  'Hosea': 197,
  'Joel': 73,
  'Amos': 146,
  'Obadiah': 21,
  'Jonah': 48,
  'Micah': 105,
  'Nahum': 47,
  'Habakkuk': 56,
  'Zephaniah': 53,
  'Haggai': 38,
  'Zechariah': 211,
  'Malachi': 55
}

async function main() {
  console.log('\n' + '='.repeat(70))
  console.log('📊 구약 성경 구절 로드 현황')
  console.log('='.repeat(70) + '\n')

  // 1. 구약 books 확인
  const { data: otBooks, error: booksError } = await supabase
    .from('books')
    .select('id, name_english, name_korean')
    .eq('testament', 1)
    .order('order_number')

  if (booksError || !otBooks) {
    console.error('❌ Books 조회 실패:', booksError?.message)
    return
  }

  console.log(`✅ 구약 Books 등록: ${otBooks.length}/39권\n`)

  // 2. 각 책별 구절 수 확인
  let totalExpected = 0
  let totalActual = 0
  let completedBooks = 0

  console.log('책 이름                | 실제 구절 | 예상 구절 | 상태')
  console.log('-'.repeat(70))

  for (const book of otBooks) {
    const expected = OT_EXPECTED_VERSES[book.name_english] || 0
    totalExpected += expected

    const { count } = await supabase
      .from('verses')
      .select('*', { count: 'exact', head: true })
      .eq('book_id', book.id)

    const actual = count || 0
    totalActual += actual

    const percentage = expected > 0 ? Math.round((actual / expected) * 100) : 0
    const status = percentage >= 95 ? '✅' : percentage > 0 ? '🔄' : '⏳'

    if (percentage >= 95) completedBooks++

    const bookNamePadded = (book.name_english + ' ' + book.name_korean).padEnd(20)
    const actualPadded = String(actual).padStart(4)
    const expectedPadded = String(expected).padStart(4)

    console.log(`${bookNamePadded} | ${actualPadded} | ${expectedPadded} | ${percentage}% ${status}`)
  }

  console.log('-'.repeat(70))
  console.log(`총계                    | ${String(totalActual).padStart(5)} | ${String(totalExpected).padStart(5)} | ${Math.round((totalActual / totalExpected) * 100)}%`)

  console.log('\n' + '='.repeat(70))
  console.log(`📈 진행 상황`)
  console.log('='.repeat(70))
  console.log(`✅ 완료된 책: ${completedBooks}/39권 (${Math.round((completedBooks / 39) * 100)}%)`)
  console.log(`📝 총 구절: ${totalActual}/${totalExpected}구절 (${Math.round((totalActual / totalExpected) * 100)}%)`)

  if (totalActual >= totalExpected * 0.95) {
    console.log('\n🎉 구약 전체 데이터 로드 완료!')
  } else if (totalActual > 0) {
    console.log(`\n🔄 진행 중... 남은 구절: ${totalExpected - totalActual}개`)
  } else {
    console.log('\n⏳ 데이터 로드 대기 중...')
  }
  console.log('='.repeat(70) + '\n')
}

main().catch(console.error)
