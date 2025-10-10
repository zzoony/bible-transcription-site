import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ 환경변수가 설정되지 않았습니다.')
  console.error('SUPABASE_URL과 SUPABASE_SERVICE_ROLE_KEY를 .env 파일에 설정해주세요.')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

async function checkDuplicateBooks() {
  console.log('\n🔍 중복된 성경책 확인 중...\n')

  // books 테이블 전체 조회
  const { data: books, error } = await supabase
    .from('books')
    .select('id, name_english, name_korean, testament')
    .order('testament', { ascending: true })
    .order('id', { ascending: true })

  if (error) {
    console.error('❌ 조회 오류:', error)
    return
  }

  console.log(`📊 전체 등록된 책: ${books?.length}개\n`)

  // 책 이름별 개수 세기
  const nameCounts: { [key: string]: any[] } = {}
  books?.forEach((book) => {
    const key = book.name_english
    if (!nameCounts[key]) {
      nameCounts[key] = []
    }
    nameCounts[key].push(book)
  })

  // 중복 찾기
  const duplicates = Object.entries(nameCounts)
    .filter(([_, books]) => books.length > 1)
    .sort((a, b) => b[1].length - a[1].length)

  if (duplicates.length === 0) {
    console.log('✅ 중복된 책 없음!\n')
    console.log('📖 등록된 책 목록:\n')

    const otBooks = books?.filter(b => b.testament === 1) || []
    const ntBooks = books?.filter(b => b.testament === 2) || []

    console.log('구약 (39권):')
    otBooks.forEach(b => {
      console.log(`  ID ${b.id}: ${b.name_english} (${b.name_korean})`)
    })

    console.log('\n신약 (27권):')
    ntBooks.forEach(b => {
      console.log(`  ID ${b.id}: ${b.name_english} (${b.name_korean})`)
    })

    console.log(`\n총: 구약 ${otBooks.length}권 + 신약 ${ntBooks.length}권 = ${books?.length}권`)
  } else {
    console.log(`🔴 중복된 책 발견: ${duplicates.length}개\n`)

    duplicates.forEach(([name, bookList]) => {
      console.log(`❌ "${name}" - ${bookList.length}번 중복:`)
      bookList.forEach(book => {
        console.log(`   ID ${book.id}: ${book.name_english} (${book.name_korean}) - ${book.testament === 1 ? '구약' : '신약'}`)
      })
      console.log('')
    })
  }

  // Testament별 통계
  const otCount = books?.filter(b => b.testament === 1).length || 0
  const ntCount = books?.filter(b => b.testament === 2).length || 0

  console.log('\n📊 통계:')
  console.log(`  구약: ${otCount}권 (예상: 39권)`)
  console.log(`  신약: ${ntCount}권 (예상: 27권)`)
  console.log(`  총합: ${books?.length}권 (예상: 66권)`)

  if (otCount !== 39) console.log(`  ⚠️  구약이 ${39 - otCount > 0 ? '부족' : '초과'}합니다: ${Math.abs(39 - otCount)}권`)
  if (ntCount !== 27) console.log(`  ⚠️  신약이 ${27 - ntCount > 0 ? '부족' : '초과'}합니다: ${Math.abs(27 - ntCount)}권`)
}

checkDuplicateBooks()
