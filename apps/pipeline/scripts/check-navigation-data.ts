import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'

dotenv.config()

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
)

interface VerseData {
  id: number
  reference: string
  verse_number: number
  book_id: number | null
  chapter_id: number | null
}

interface ChapterData {
  chapter: number
  verses: number[]
  totalVerses: number
  analyzedVerses: number
}

interface BookData {
  bookName: string
  chapters: Map<number, ChapterData>
}

async function checkNavigationData() {
  console.log('📊 Navigation Data 상세 조사\n')
  console.log('=' .repeat(80))

  try {
    // 모든 구절 조회
    const { data: verses, error: versesError } = await supabase
      .from('verses')
      .select('id, reference, verse_number, book_id, chapter_id')
      .order('reference')

    if (versesError) {
      console.error('❌ 구절 조회 오류:', versesError.message)
      return
    }

    if (!verses || verses.length === 0) {
      console.log('❌ 구절 데이터가 없습니다')
      return
    }

    console.log(`\n총 구절 수: ${verses.length}`)

    // 분석 완료된 구절 조회
    const { data: structures, error: structuresError } = await supabase
      .from('sentence_structures')
      .select('verse_id')

    if (structuresError) {
      console.error('❌ 문장구조 조회 오류:', structuresError.message)
      return
    }

    const analyzedVerseIds = new Set(structures?.map(s => s.verse_id) || [])

    // 책별로 데이터 그룹화
    const books = new Map<string, BookData>()

    verses.forEach((verse: VerseData) => {
      // reference에서 책 이름과 장:절 추출
      const match = verse.reference.match(/^([\dA-Za-z\s]+)\s+(\d+):(\d+)$/)
      if (!match) {
        console.warn(`⚠️  잘못된 reference 형식: ${verse.reference}`)
        return
      }

      const [, bookName, chapterStr, verseStr] = match
      const chapter = parseInt(chapterStr, 10)
      const verseNum = parseInt(verseStr, 10)

      if (!books.has(bookName)) {
        books.set(bookName, {
          bookName,
          chapters: new Map()
        })
      }

      const book = books.get(bookName)!
      if (!book.chapters.has(chapter)) {
        book.chapters.set(chapter, {
          chapter,
          verses: [],
          totalVerses: 0,
          analyzedVerses: 0
        })
      }

      const chapterData = book.chapters.get(chapter)!
      chapterData.verses.push(verseNum)
      chapterData.totalVerses++

      if (analyzedVerseIds.has(verse.id)) {
        chapterData.analyzedVerses++
      }
    })

    // 결과 출력
    console.log('\n' + '=' .repeat(80))
    console.log('📖 책별 상세 정보\n')

    for (const [bookName, bookData] of books.entries()) {
      console.log(`\n📘 ${bookName}`)
      console.log('-' .repeat(80))

      // 장 번호 정렬
      const sortedChapters = Array.from(bookData.chapters.entries()).sort(
        ([a], [b]) => a - b
      )

      for (const [chapterNum, chapterData] of sortedChapters) {
        // 구절 번호 정렬
        const sortedVerses = chapterData.verses.sort((a, b) => a - b)

        const completionRate = chapterData.totalVerses > 0
          ? (chapterData.analyzedVerses / chapterData.totalVerses * 100).toFixed(1)
          : '0.0'

        console.log(`\nChapter ${chapterNum}:`)
        console.log(`  구절 번호: [${sortedVerses.join(', ')}]`)
        console.log(`  총 구절: ${chapterData.totalVerses}`)
        console.log(`  분석 완료: ${chapterData.analyzedVerses}`)
        console.log(`  완성도: ${completionRate}%`)

        if (chapterData.analyzedVerses < chapterData.totalVerses) {
          console.log(`  ⚠️  미완성 (${chapterData.totalVerses - chapterData.analyzedVerses}개 구절 누락)`)
        } else {
          console.log(`  ✅ 완성`)
        }
      }

      // 책 전체 통계
      const totalVerses = Array.from(bookData.chapters.values()).reduce(
        (sum, ch) => sum + ch.totalVerses, 0
      )
      const totalAnalyzed = Array.from(bookData.chapters.values()).reduce(
        (sum, ch) => sum + ch.analyzedVerses, 0
      )
      const bookCompletionRate = totalVerses > 0
        ? (totalAnalyzed / totalVerses * 100).toFixed(1)
        : '0.0'

      console.log(`\n${bookName} 전체 통계:`)
      console.log(`  총 장: ${bookData.chapters.size}`)
      console.log(`  총 구절: ${totalVerses}`)
      console.log(`  분석 완료: ${totalAnalyzed}`)
      console.log(`  완성도: ${bookCompletionRate}%`)
    }

    // 전체 통계
    console.log('\n' + '=' .repeat(80))
    console.log('📊 전체 통계\n')

    const totalBooks = books.size
    const totalChapters = Array.from(books.values()).reduce(
      (sum, book) => sum + book.chapters.size, 0
    )
    const totalVerses = verses.length
    const totalAnalyzed = analyzedVerseIds.size
    const overallCompletionRate = totalVerses > 0
      ? (totalAnalyzed / totalVerses * 100).toFixed(1)
      : '0.0'

    console.log(`총 책: ${totalBooks}`)
    console.log(`총 장: ${totalChapters}`)
    console.log(`총 구절: ${totalVerses}`)
    console.log(`분석 완료: ${totalAnalyzed}`)
    console.log(`전체 완성도: ${overallCompletionRate}%`)

    console.log('\n' + '=' .repeat(80))

  } catch (error) {
    console.error('❌ 오류 발생:', error)
  }
}

checkNavigationData().catch(console.error)
