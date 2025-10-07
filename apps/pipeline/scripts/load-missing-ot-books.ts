import { createClient } from '@supabase/supabase-js'
import * as fs from 'fs'
import * as path from 'path'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ 환경변수가 설정되지 않았습니다.')
  console.error('SUPABASE_URL과 SUPABASE_SERVICE_ROLE_KEY를 .env 파일에 설정해주세요.')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

// 누락된 2권: JSON 키 이름이 다름
const MISSING_BOOKS = [
  {
    name_english: 'Psalms',
    json_key: 'Psalm',  // JSON에는 단수형
    name_korean: '시편',
    abbreviation: 'Ps',
    order: 19,
    chapters: 150
  },
  {
    name_english: 'Song of Solomon',
    json_key: 'Song Of Solomon',  // JSON에는 Of가 대문자
    name_korean: '아가',
    abbreviation: 'Song',
    order: 22,
    chapters: 8
  }
]

async function loadMissingBook(bookInfo: any, bibleData: any) {
  console.log(`\n📚 ${bookInfo.name_english} 설정 중...`)

  // 1. books 테이블에서 book_id 찾기
  const { data: existingBook } = await supabase
    .from('books')
    .select('id')
    .eq('name_english', bookInfo.name_english)
    .eq('testament', 1)
    .single()

  if (!existingBook) {
    console.error(`  ❌ ${bookInfo.name_english} book이 등록되어 있지 않습니다!`)
    return null
  }

  const bookId = existingBook.id
  console.log(`  ✅ Book ID: ${bookId}`)

  // 2. JSON에서 데이터 로드 (다른 키 이름 사용)
  const bookData = bibleData[bookInfo.json_key]
  if (!bookData) {
    console.error(`  ❌ JSON에 ${bookInfo.json_key} 데이터 없음`)
    return null
  }

  // 3. 각 장의 구절 수 계산
  const verseCountsByChapter: { [key: number]: number } = {}
  for (const chapterNum in bookData) {
    const chapterData = bookData[chapterNum]
    verseCountsByChapter[parseInt(chapterNum)] = Object.keys(chapterData).length
  }

  // 4. chapters 테이블에 각 장 등록 (이미 등록되어 있을 수 있음)
  console.log(`  📖 ${bookInfo.chapters}개 장 등록 중...`)
  const chapterIds: { [key: number]: number } = {}

  for (let chNum = 1; chNum <= bookInfo.chapters; chNum++) {
    const totalVerses = verseCountsByChapter[chNum] || 0

    const { data: existingChapter } = await supabase
      .from('chapters')
      .select('id')
      .eq('book_id', bookId)
      .eq('chapter_number', chNum)
      .single()

    if (existingChapter) {
      chapterIds[chNum] = existingChapter.id
    } else {
      const { data: newChapter, error: chapterError } = await supabase
        .from('chapters')
        .insert({
          book_id: bookId,
          chapter_number: chNum,
          total_verses: totalVerses
        })
        .select()
        .single()

      if (chapterError || !newChapter) {
        console.error(`  ❌ 장 ${chNum} 등록 실패:`, chapterError?.message)
        continue
      }

      chapterIds[chNum] = newChapter.id
    }
  }

  console.log(`  ✅ ${Object.keys(chapterIds).length}개 장 등록 완료`)

  // 5. verses 삽입
  console.log(`  📝 구절 삽입 중...`)
  let savedCount = 0
  let skippedCount = 0

  for (const chapterNum in bookData) {
    const chapterData = bookData[chapterNum]
    const chapterId = chapterIds[parseInt(chapterNum)]

    if (!chapterId) {
      console.log(`  ⚠️ 장 ${chapterNum}의 ID를 찾을 수 없음`)
      continue
    }

    for (const verseNum in chapterData) {
      const verseText = chapterData[verseNum]
      const reference = `${bookInfo.name_english} ${chapterNum}:${verseNum}`

      // 중복 확인
      const { data: existing } = await supabase
        .from('verses')
        .select('id')
        .eq('reference', reference)
        .single()

      if (existing) {
        skippedCount++
        continue
      }

      // verses 삽입
      const { error } = await supabase
        .from('verses')
        .insert({
          book_id: bookId,
          chapter_id: chapterId,
          verse_number: parseInt(verseNum),
          reference: reference,
          niv_text: verseText,
          analysis_completed: false
        })

      if (error) {
        console.error(`  ❌ 구절 삽입 실패: ${reference}`, error.message)
      } else {
        savedCount++
        if (savedCount % 100 === 0) {
          console.log(`    ${savedCount}구절 저장됨...`)
        }
      }
    }
  }

  console.log(`  ✅ ${bookInfo.name_english} 완료: ${savedCount}구절 저장, ${skippedCount}구절 건너뜀`)
  return bookId
}

async function main() {
  console.log('\n' + '='.repeat(60))
  console.log('📖 누락된 구약 책 로드 시작 (Psalms + Song of Solomon)')
  console.log('='.repeat(60) + '\n')

  // JSON 파일 읽기
  const jsonPath = path.join(process.cwd(), '..', '..', 'NIV_Bible.json')
  console.log(`📄 JSON 파일: ${jsonPath}\n`)

  if (!fs.existsSync(jsonPath)) {
    console.error('❌ NIV_Bible.json 파일을 찾을 수 없습니다!')
    return
  }

  const jsonContent = fs.readFileSync(jsonPath, 'utf-8')
  const bibleData = JSON.parse(jsonContent)

  // 2권 순차 처리
  for (const bookInfo of MISSING_BOOKS) {
    await loadMissingBook(bookInfo, bibleData)
    await new Promise(resolve => setTimeout(resolve, 500))
  }

  console.log('\n' + '='.repeat(60))
  console.log('🎉 누락된 책 로드 완료!')
  console.log('='.repeat(60) + '\n')
}

main().catch(console.error)
