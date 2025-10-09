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
  chapters: ChapterStructure[]
}

/**
 * Bible Structure API Response
 */
interface BibleStructureResponse {
  books: BookStructure[]
}

/**
 * 책 이름을 한글로 변환
 */
function getKoreanBookName(bookName: string): string {
  const koreanNames: Record<string, string> = {
    // Old Testament (구약)
    Genesis: '창세기',
    Exodus: '출애굽기',
    Leviticus: '레위기',
    Numbers: '민수기',
    Deuteronomy: '신명기',
    Joshua: '여호수아',
    Judges: '사사기',
    Ruth: '룻기',
    '1 Samuel': '사무엘상',
    '2 Samuel': '사무엘하',
    '1 Kings': '열왕기상',
    '2 Kings': '열왕기하',
    '1 Chronicles': '역대상',
    '2 Chronicles': '역대하',
    Ezra: '에스라',
    Nehemiah: '느헤미야',
    Esther: '에스더',
    Job: '욥기',
    Psalms: '시편',
    Proverbs: '잠언',
    Ecclesiastes: '전도서',
    'Song of Solomon': '아가',
    Isaiah: '이사야',
    Jeremiah: '예레미야',
    Lamentations: '예레미야애가',
    Ezekiel: '에스겔',
    Daniel: '다니엘',
    Hosea: '호세아',
    Joel: '요엘',
    Amos: '아모스',
    Obadiah: '오바댜',
    Jonah: '요나',
    Micah: '미가',
    Nahum: '나훔',
    Habakkuk: '하박국',
    Zephaniah: '스바냐',
    Haggai: '학개',
    Zechariah: '스가랴',
    Malachi: '말라기',
    // New Testament (신약)
    Matthew: '마태복음',
    Mark: '마가복음',
    Luke: '누가복음',
    John: '요한복음',
    Acts: '사도행전',
    Romans: '로마서',
    '1 Corinthians': '고린도전서',
    '2 Corinthians': '고린도후서',
    Galatians: '갈라디아서',
    Ephesians: '에베소서',
    Philippians: '빌립보서',
    Colossians: '골로새서',
    '1 Thessalonians': '데살로니가전서',
    '2 Thessalonians': '데살로니가후서',
    '1 Timothy': '디모데전서',
    '2 Timothy': '디모데후서',
    Titus: '디도서',
    Philemon: '빌레몬서',
    Hebrews: '히브리서',
    James: '야고보서',
    '1 Peter': '베드로전서',
    '2 Peter': '베드로후서',
    '1 John': '요한일서',
    '2 John': '요한이서',
    '3 John': '요한삼서',
    Jude: '유다서',
    Revelation: '요한계시록',
  }

  return koreanNames[bookName] || bookName
}

/**
 * Verse reference 파싱
 * @param reference - 예: "Philippians 2:12"
 * @returns { book, chapter, verse } 또는 null
 */
function parseReference(reference: string): {
  book: string
  chapter: number
  verse: number
} | null {
  const match = reference.match(/^([A-Za-z\s\d]+)\s+(\d+):(\d+)$/)
  if (!match) return null

  const [, book, chapterStr, verseStr] = match
  return {
    book: book.trim(),
    chapter: parseInt(chapterStr, 10),
    verse: parseInt(verseStr, 10),
  }
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
export async function GET(request: NextRequest) {
  try {
    const supabase = createServerClient()

    // books 테이블에서 모든 책 정보 가져오기 (order_number 순서로)
    const { data: books, error: booksError } = await supabase
      .from('books')
      .select('id, name_english, name_korean, order_number, testament')
      .order('order_number')

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

    if (chaptersError) {
      console.error('Chapters 조회 오류:', chaptersError)
      return NextResponse.json(
        { error: '데이터베이스 조회 중 오류가 발생했습니다' },
        { status: 500 }
      )
    }

    // verses를 chapter별로 그룹화하기 위해 조회
    const { data: versesData, error: versesError } = await supabase
      .from('verses')
      .select('chapter_id, verse_number')
      .order('chapter_id')
      .order('verse_number')

    if (versesError) {
      console.error('Verses 조회 오류:', versesError)
      return NextResponse.json(
        { error: '데이터베이스 조회 중 오류가 발생했습니다' },
        { status: 500 }
      )
    }

    // verses를 chapter_id로 그룹화
    const versesByChapter = new Map<number, number[]>()
    versesData?.forEach((verse) => {
      if (!versesByChapter.has(verse.chapter_id)) {
        versesByChapter.set(verse.chapter_id, [])
      }
      versesByChapter.get(verse.chapter_id)!.push(verse.verse_number)
    })

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

      return {
        id: book.id,
        name: book.name_english,
        nameKorean: book.name_korean,
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
