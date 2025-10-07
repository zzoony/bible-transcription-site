import { createClient } from '@supabase/supabase-js'
import * as fs from 'fs'
import * as path from 'path'

const supabase = createClient(
  'https://kmbndafjfxzbyokzqgno.supabase.co',
  '***REMOVED***'
)

// 구약 39권 정의 (성경 순서대로)
const OLD_TESTAMENT_BOOKS = [
  // Torah (모세오경)
  { name_english: 'Genesis', name_korean: '창세기', abbreviation: 'Gen', order: 1, chapters: 50 },
  { name_english: 'Exodus', name_korean: '출애굽기', abbreviation: 'Exod', order: 2, chapters: 40 },
  { name_english: 'Leviticus', name_korean: '레위기', abbreviation: 'Lev', order: 3, chapters: 27 },
  { name_english: 'Numbers', name_korean: '민수기', abbreviation: 'Num', order: 4, chapters: 36 },
  { name_english: 'Deuteronomy', name_korean: '신명기', abbreviation: 'Deut', order: 5, chapters: 34 },

  // Historical (역사서)
  { name_english: 'Joshua', name_korean: '여호수아', abbreviation: 'Josh', order: 6, chapters: 24 },
  { name_english: 'Judges', name_korean: '사사기', abbreviation: 'Judg', order: 7, chapters: 21 },
  { name_english: 'Ruth', name_korean: '룻기', abbreviation: 'Ruth', order: 8, chapters: 4 },
  { name_english: '1 Samuel', name_korean: '사무엘상', abbreviation: '1Sam', order: 9, chapters: 31 },
  { name_english: '2 Samuel', name_korean: '사무엘하', abbreviation: '2Sam', order: 10, chapters: 24 },
  { name_english: '1 Kings', name_korean: '열왕기상', abbreviation: '1Kgs', order: 11, chapters: 22 },
  { name_english: '2 Kings', name_korean: '열왕기하', abbreviation: '2Kgs', order: 12, chapters: 25 },
  { name_english: '1 Chronicles', name_korean: '역대상', abbreviation: '1Chr', order: 13, chapters: 29 },
  { name_english: '2 Chronicles', name_korean: '역대하', abbreviation: '2Chr', order: 14, chapters: 36 },
  { name_english: 'Ezra', name_korean: '에스라', abbreviation: 'Ezra', order: 15, chapters: 10 },
  { name_english: 'Nehemiah', name_korean: '느헤미야', abbreviation: 'Neh', order: 16, chapters: 13 },
  { name_english: 'Esther', name_korean: '에스더', abbreviation: 'Esth', order: 17, chapters: 10 },

  // Wisdom (지혜서)
  { name_english: 'Job', name_korean: '욥기', abbreviation: 'Job', order: 18, chapters: 42 },
  { name_english: 'Psalms', name_korean: '시편', abbreviation: 'Ps', order: 19, chapters: 150 },
  { name_english: 'Proverbs', name_korean: '잠언', abbreviation: 'Prov', order: 20, chapters: 31 },
  { name_english: 'Ecclesiastes', name_korean: '전도서', abbreviation: 'Eccl', order: 21, chapters: 12 },
  { name_english: 'Song of Solomon', name_korean: '아가', abbreviation: 'Song', order: 22, chapters: 8 },

  // Major Prophets (대선지서)
  { name_english: 'Isaiah', name_korean: '이사야', abbreviation: 'Isa', order: 23, chapters: 66 },
  { name_english: 'Jeremiah', name_korean: '예레미야', abbreviation: 'Jer', order: 24, chapters: 52 },
  { name_english: 'Lamentations', name_korean: '애가', abbreviation: 'Lam', order: 25, chapters: 5 },
  { name_english: 'Ezekiel', name_korean: '에스겔', abbreviation: 'Ezek', order: 26, chapters: 48 },
  { name_english: 'Daniel', name_korean: '다니엘', abbreviation: 'Dan', order: 27, chapters: 12 },

  // Minor Prophets (소선지서)
  { name_english: 'Hosea', name_korean: '호세아', abbreviation: 'Hos', order: 28, chapters: 14 },
  { name_english: 'Joel', name_korean: '요엘', abbreviation: 'Joel', order: 29, chapters: 3 },
  { name_english: 'Amos', name_korean: '아모스', abbreviation: 'Amos', order: 30, chapters: 9 },
  { name_english: 'Obadiah', name_korean: '오바댜', abbreviation: 'Obad', order: 31, chapters: 1 },
  { name_english: 'Jonah', name_korean: '요나', abbreviation: 'Jonah', order: 32, chapters: 4 },
  { name_english: 'Micah', name_korean: '미가', abbreviation: 'Mic', order: 33, chapters: 7 },
  { name_english: 'Nahum', name_korean: '나훔', abbreviation: 'Nah', order: 34, chapters: 3 },
  { name_english: 'Habakkuk', name_korean: '하박국', abbreviation: 'Hab', order: 35, chapters: 3 },
  { name_english: 'Zephaniah', name_korean: '스바냐', abbreviation: 'Zeph', order: 36, chapters: 3 },
  { name_english: 'Haggai', name_korean: '학개', abbreviation: 'Hag', order: 37, chapters: 2 },
  { name_english: 'Zechariah', name_korean: '스가랴', abbreviation: 'Zech', order: 38, chapters: 14 },
  { name_english: 'Malachi', name_korean: '말라기', abbreviation: 'Mal', order: 39, chapters: 4 }
]

async function setupBook(bookInfo: any, bibleData: any) {
  console.log(`\n📚 ${bookInfo.name_english} 설정 중...`)

  // 1. books 테이블에 책 등록
  const { data: existingBook } = await supabase
    .from('books')
    .select('id')
    .eq('name_english', bookInfo.name_english)
    .eq('testament', 1) // 구약 = 1
    .single()

  let bookId: number

  if (existingBook) {
    bookId = existingBook.id
    console.log(`  ✅ 이미 등록됨 (ID: ${bookId})`)
  } else {
    const { data: newBook, error: bookError } = await supabase
      .from('books')
      .insert({
        name_english: bookInfo.name_english,
        name_korean: bookInfo.name_korean,
        abbreviation: bookInfo.abbreviation,
        testament: 1, // 구약
        order_number: bookInfo.order,
        total_chapters: bookInfo.chapters
      })
      .select()
      .single()

    if (bookError || !newBook) {
      console.error(`  ❌ 책 등록 실패:`, bookError?.message)
      return null
    }

    bookId = newBook.id
    console.log(`  ✅ 책 등록 완료 (ID: ${bookId})`)
  }

  // 2. JSON에서 각 장의 구절 수 계산
  const bookData = bibleData[bookInfo.name_english]
  if (!bookData) {
    console.log(`  ⚠️ JSON에 ${bookInfo.name_english} 데이터 없음`)
    return bookId
  }

  const verseCountsByChapter: { [key: number]: number } = {}
  for (const chapterNum in bookData) {
    const chapterData = bookData[chapterNum]
    verseCountsByChapter[parseInt(chapterNum)] = Object.keys(chapterData).length
  }

  // 3. chapters 테이블에 각 장 등록
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

  // 4. JSON에서 verses 로드
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
  console.log('🚀 구약 전체 설정 시작 (Books + Chapters + Verses)')
  console.log('='.repeat(60) + '\n')

  // JSON 파일 읽기
  const jsonPath = path.join(process.cwd(), '..', '..', 'NIV_Bible.json')
  console.log(`📄 JSON 파일: ${jsonPath}`)

  if (!fs.existsSync(jsonPath)) {
    console.error('❌ NIV_Bible.json 파일을 찾을 수 없습니다!')
    return
  }

  console.log('📖 JSON 파일 파싱 중...')
  const jsonContent = fs.readFileSync(jsonPath, 'utf-8')
  const bibleData = JSON.parse(jsonContent)
  console.log('✅ JSON 파일 로드 완료\n')

  // 구약 39권 순차 처리
  let totalBooks = 0
  let totalVerses = 0

  for (const bookInfo of OLD_TESTAMENT_BOOKS) {
    const bookId = await setupBook(bookInfo, bibleData)
    if (bookId) {
      totalBooks++
    }

    // 책 사이에 500ms 대기
    await new Promise(resolve => setTimeout(resolve, 500))
  }

  console.log('\n' + '='.repeat(60))
  console.log(`🎉 구약 전체 설정 완료!`)
  console.log(`   총 ${totalBooks}권 설정`)
  console.log('='.repeat(60) + '\n')

  // 최종 통계
  const { count } = await supabase
    .from('verses')
    .select('*', { count: 'exact', head: true })
    .eq('book_id', 1)  // 임시로 1번 확인 (실제론 모든 구약 책)

  console.log('구약 verses 확인을 위해 check-old-testament-status.ts를 실행하세요.')
}

main().catch(console.error)
