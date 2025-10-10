import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import * as path from 'path'
import * as fs from 'fs'

const envPath = path.resolve(__dirname, '../.env')
dotenv.config({ path: envPath })

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

// 신약 27권 (순서 포함)
const NT_BOOKS = [
  { name: 'Matthew', korean: '마태복음', abbr: 'Matt', order: 40 },
  { name: 'Mark', korean: '마가복음', abbr: 'Mark', order: 41 },
  { name: 'Luke', korean: '누가복음', abbr: 'Luke', order: 42 },
  { name: 'John', korean: '요한복음', abbr: 'John', order: 43 },
  { name: 'Acts', korean: '사도행전', abbr: 'Acts', order: 44 },
  { name: 'Romans', korean: '로마서', abbr: 'Rom', order: 45 },
  { name: '1 Corinthians', korean: '고린도전서', abbr: '1Cor', order: 46 },
  { name: '2 Corinthians', korean: '고린도후서', abbr: '2Cor', order: 47 },
  { name: 'Galatians', korean: '갈라디아서', abbr: 'Gal', order: 48 },
  { name: 'Ephesians', korean: '에베소서', abbr: 'Eph', order: 49 },
  { name: 'Philippians', korean: '빌립보서', abbr: 'Phil', order: 50 },
  { name: 'Colossians', korean: '골로새서', abbr: 'Col', order: 51 },
  { name: '1 Thessalonians', korean: '데살로니가전서', abbr: '1Thess', order: 52 },
  { name: '2 Thessalonians', korean: '데살로니가후서', abbr: '2Thess', order: 53 },
  { name: '1 Timothy', korean: '디모데전서', abbr: '1Tim', order: 54 },
  { name: '2 Timothy', korean: '디모데후서', abbr: '2Tim', order: 55 },
  { name: 'Titus', korean: '디도서', abbr: 'Titus', order: 56 },
  { name: 'Philemon', korean: '빌레몬서', abbr: 'Phlm', order: 57 },
  { name: 'Hebrews', korean: '히브리서', abbr: 'Heb', order: 58 },
  { name: 'James', korean: '야고보서', abbr: 'Jas', order: 59 },
  { name: '1 Peter', korean: '베드로전서', abbr: '1Pet', order: 60 },
  { name: '2 Peter', korean: '베드로후서', abbr: '2Pet', order: 61 },
  { name: '1 John', korean: '요한일서', abbr: '1Jn', order: 62 },
  { name: '2 John', korean: '요한이서', abbr: '2Jn', order: 63 },
  { name: '3 John', korean: '요한삼서', abbr: '3Jn', order: 64 },
  { name: 'Jude', korean: '유다서', abbr: 'Jude', order: 65 },
  { name: 'Revelation', korean: '요한계시록', abbr: 'Rev', order: 66 }
]

async function importNIVToDatabase() {
  console.log('📖 NIV JSON 파일에서 신약 전체를 데이터베이스로 임포트\n')

  // JSON 파일 읽기
  const jsonPath = path.resolve(__dirname, '../../../NIV_Bible.json')
  const bibleData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'))

  let totalVerses = 0
  let savedVerses = 0
  let skippedVerses = 0

  for (let i = 0; i < NT_BOOKS.length; i++) {
    const bookInfo = NT_BOOKS[i]
    console.log(`\n📚 [${i + 1}/27] ${bookInfo.name}`)

    const bookData = bibleData[bookInfo.name]
    if (!bookData) {
      console.log(`  ⚠️  ${bookInfo.name} 데이터 없음`)
      continue
    }

    // 1단계: Book 확인/생성
    let { data: book } = await supabase
      .from('books')
      .select('id')
      .eq('name_english', bookInfo.name)
      .single()

    if (!book) {
      const chapters = Object.keys(bookData).sort((a, b) => parseInt(a) - parseInt(b))
      const { data: newBook, error: bookError } = await supabase
        .from('books')
        .insert({
          name_english: bookInfo.name,
          name_korean: bookInfo.korean,
          abbreviation: bookInfo.abbr,
          testament: 2, // 신약
          order_number: bookInfo.order,
          total_chapters: chapters.length
        })
        .select()
        .single()

      if (bookError) {
        console.error(`  ❌ Book 생성 실패:`, bookError.message)
        continue
      }
      book = newBook
      console.log(`  ✅ Book 생성: ${bookInfo.name}`)
    }

    const chapters = Object.keys(bookData).sort((a, b) => parseInt(a) - parseInt(b))

    for (const chapterNum of chapters) {
      // 2단계: Chapter 확인/생성
      let { data: chapter } = await supabase
        .from('chapters')
        .select('id')
        .eq('book_id', book.id)
        .eq('chapter_number', parseInt(chapterNum))
        .single()

      if (!chapter) {
        const verses = bookData[chapterNum]
        const verseCount = Object.keys(verses).length
        const { data: newChapter, error: chapterError } = await supabase
          .from('chapters')
          .insert({
            book_id: book.id,
            chapter_number: parseInt(chapterNum),
            total_verses: verseCount
          })
          .select()
          .single()

        if (chapterError) {
          console.error(`  ❌ Chapter 생성 실패:`, chapterError.message)
          continue
        }
        chapter = newChapter
      }

      // 3단계: Verses 삽입
      const verses = bookData[chapterNum]
      const verseNumbers = Object.keys(verses).sort((a, b) => parseInt(a) - parseInt(b))

      for (const verseNum of verseNumbers) {
        const text = verses[verseNum]
        const reference = `${bookInfo.name} ${chapterNum}:${verseNum}`

        totalVerses++

        try {
          // 중복 확인
          const { data: existing } = await supabase
            .from('verses')
            .select('id')
            .eq('reference', reference)
            .single()

          if (existing) {
            skippedVerses++
            continue
          }

          // 삽입
          const { error } = await supabase
            .from('verses')
            .insert({
              book_id: book.id,
              chapter_id: chapter.id,
              verse_number: parseInt(verseNum),
              reference: reference,
              niv_text: text,
              analysis_completed: false
            })

          if (error) {
            console.error(`    ❌ 저장 실패: ${reference}`, error.message)
          } else {
            savedVerses++
          }
        } catch (err) {
          // 중복 무시
          skippedVerses++
        }
      }

      if (savedVerses % 50 === 0 && savedVerses > 0) {
        console.log(`  💾 ${savedVerses}구절 저장 완료...`)
      }
    }

    console.log(`  ✅ ${bookInfo.name} 완료!`)
  }

  console.log(`\n🎉 신약 전체 임포트 완료!`)
  console.log(`📊 총 ${totalVerses}구절 처리`)
  console.log(`   ✅ 새로 저장: ${savedVerses}구절`)
  console.log(`   ⏭️  이미 존재: ${skippedVerses}구절`)
}

importNIVToDatabase().catch(console.error)
