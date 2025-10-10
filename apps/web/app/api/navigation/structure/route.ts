import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase'

/**
 * Chapter 구조 정보
 */
interface ChapterStructure {
  number: number
  totalVerses: number
  availableVerses: number[]
}

/**
 * Book 구조 정보
 */
interface BookStructure {
  id: number
  name: string
  nameKorean: string
  testament: string
  abbreviation: string
  chapters: ChapterStructure[]
}

/**
 * Bible Structure API Response
 */
interface BibleStructureResponse {
  books: BookStructure[]
}

/**
 * GET /api/navigation/structure
 *
 * 전체 성경 구조를 계층적으로 반환
 * Response:
 *   - books: 책 목록
 *     - id: 책 고유 ID
 *     - name: 영어 책 이름
 *     - nameKorean: 한글 책 이름
 *     - chapters: 장 목록
 *       - number: 장 번호
 *       - totalVerses: 총 구절 수
 *       - availableVerses: 사용 가능한 구절 번호 배열
 */
export async function GET(_request: NextRequest) {
  try {
    // 환경변수 디버깅
    console.log('🔑 ENV CHECK:')
    console.log('  URL:', process.env.NEXT_PUBLIC_SUPABASE_URL?.substring(0, 30))
    console.log('  KEY length:', process.env.SUPABASE_SERVICE_KEY?.length)

    const supabase = createServerClient()

    // books 테이블에서 모든 책 정보 가져오기 (order_number 순서로)
    const { data: books, error: booksError } = await supabase
      .from('books')
      .select('id, name_english, name_korean, order_number, testament, abbreviation')
      .order('order_number')
      .returns<
        {
          id: number
          name_english: string
          name_korean: string
          order_number: number
          testament: number
          abbreviation: string
        }[]
      >()

    if (booksError) {
      console.error('Books 조회 오류:', booksError)
      return NextResponse.json(
        { error: '데이터베이스 조회 중 오류가 발생했습니다' },
        { status: 500 }
      )
    }

    if (!books || books.length === 0) {
      return NextResponse.json(
        { error: '책 데이터가 없습니다' },
        { status: 404 }
      )
    }

    // chapters와 verses를 한번에 가져오기
    const { data: chaptersData, error: chaptersError } = await supabase
      .from('chapters')
      .select('id, book_id, chapter_number, total_verses')
      .order('book_id')
      .order('chapter_number')
      .returns<
        { id: number; book_id: number; chapter_number: number; total_verses: number }[]
      >()

    if (chaptersError) {
      console.error('Chapters 조회 오류:', chaptersError)
      return NextResponse.json(
        { error: '데이터베이스 조회 중 오류가 발생했습니다' },
        { status: 500 }
      )
    }

    // verses를 chapter별로 그룹화하기 위해 조회 (모든 구절)
    // 페이지네이션으로 모든 데이터 조회 (Supabase 기본 limit 우회)
    let allVerses: { chapter_id: number; verse_number: number }[] = []
    let hasMore = true
    let offset = 0
    const pageSize = 1000

    while (hasMore) {
      const { data: pageData, error: pageError } = await supabase
        .from('verses')
        .select('chapter_id, verse_number')
        .order('chapter_id')
        .order('verse_number')
        .range(offset, offset + pageSize - 1)

      if (pageError) {
        console.error(`Verses 조회 오류 (offset: ${offset}):`, pageError)
        break
      }

      if (!pageData || pageData.length === 0) {
        hasMore = false
      } else {
        allVerses = allVerses.concat(pageData)
        offset += pageSize
        hasMore = pageData.length === pageSize
      }
    }

    const versesData = allVerses
    const versesError = null

    if (versesError) {
      console.error('Verses 조회 오류:', versesError)
      return NextResponse.json(
        { error: '데이터베이스 조회 중 오류가 발생했습니다' },
        { status: 500 }
      )
    }

    // 디버깅: 전체 verses 및 Genesis 확인
    console.log('📊 전체 verses 개수:', versesData?.length || 0)
    if (versesData && versesData.length > 0) {
      console.log('   첫 3개 chapter_id:', versesData.slice(0, 3).map(v => v.chapter_id))
      // 고유한 chapter_id 목록 (처음 10개)
      const uniqueChapterIds = [...new Set(versesData.map(v => v.chapter_id))].slice(0, 10)
      console.log('   고유 chapter_id (처음 10개):', uniqueChapterIds)
    }

    const genesisVersesTest = versesData?.filter((v) => v.chapter_id === 621)
    console.log('📖 Genesis chapter 621 verses:', genesisVersesTest?.length || 0)

    // verses를 chapter_id로 그룹화
    const versesByChapter = new Map<number, number[]>()
    versesData?.forEach((verse) => {
      if (!versesByChapter.has(verse.chapter_id)) {
        versesByChapter.set(verse.chapter_id, [])
      }
      versesByChapter.get(verse.chapter_id)!.push(verse.verse_number)
    })

    console.log('📊 전체 Map 크기:', versesByChapter.size)
    console.log('📖 Genesis chapter 621:', versesByChapter.get(621))

    // chapters를 book_id로 그룹화
    const chaptersByBook = new Map<number, typeof chaptersData>()
    chaptersData?.forEach((chapter) => {
      if (!chaptersByBook.has(chapter.book_id)) {
        chaptersByBook.set(chapter.book_id, [])
      }
      chaptersByBook.get(chapter.book_id)!.push(chapter)
    })

    // 최종 BookStructure 배열 생성
    const booksStructure: BookStructure[] = books.map((book) => {
      const bookChapters = chaptersByBook.get(book.id) || []

      const chapters: ChapterStructure[] = bookChapters.map((chapter) => {
        const verses = versesByChapter.get(chapter.id) || []

        return {
          number: chapter.chapter_number,
          totalVerses: chapter.total_verses,
          availableVerses: verses,
        }
      })

      // testament 숫자를 문자열로 변환 (1 → "Old", 2 → "New")
      const testamentString = book.testament === 1 ? 'Old' : 'New'

      return {
        id: book.id,
        name: book.name_english,
        nameKorean: book.name_korean,
        testament: testamentString,
        abbreviation: book.abbreviation,
        chapters,
      }
    })

    const response: BibleStructureResponse = {
      books: booksStructure,
    }

    return NextResponse.json(response, {
      headers: {
        'Cache-Control': 'public, max-age=3600, s-maxage=7200',
      },
    })
  } catch (error) {
    console.error('Bible Structure API 오류:', error)

    // 프로덕션 환경에서는 상세 오류 숨김
    const isDevelopment = process.env.NODE_ENV === 'development'
    return NextResponse.json(
      {
        error: '서버 오류가 발생했습니다',
        ...(isDevelopment && { details: String(error) }),
      },
      { status: 500 }
    )
  }
}
