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
    Philippians: '빌립보서',
    Galatians: '갈라디아서',
    Romans: '로마서',
    Ephesians: '에베소서',
    Colossians: '골로새서',
    '1 Thessalonians': '데살로니가전서',
    '2 Thessalonians': '데살로니가후서',
    '1 Corinthians': '고린도전서',
    '2 Corinthians': '고린도후서',
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
    Matthew: '마태복음',
    Mark: '마가복음',
    Luke: '누가복음',
    John: '요한복음',
    Acts: '사도행전',
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

    // 모든 구절 조회
    const { data: verses, error: versesError } = await supabase
      .from('verses')
      .select('id, reference, verse_number')
      .order('reference')
      .returns<{ id: number; reference: string; verse_number: number }[]>()

    if (versesError) {
      console.error('DB 조회 오류:', versesError)
      return NextResponse.json(
        { error: '데이터베이스 조회 중 오류가 발생했습니다' },
        { status: 500 }
      )
    }

    if (!verses || verses.length === 0) {
      return NextResponse.json(
        { error: '구절 데이터가 없습니다' },
        { status: 404 }
      )
    }

    // 책별로 데이터 그룹화
    const booksMap = new Map<
      string,
      {
        id: number
        name: string
        chapters: Map<number, { verses: number[] }>
      }
    >()

    verses.forEach((verse) => {
      const parsed = parseReference(verse.reference)
      if (!parsed) {
        console.warn(`잘못된 reference 형식: ${verse.reference}`)
        return
      }

      const { book, chapter, verse: verseNum } = parsed

      if (!booksMap.has(book)) {
        booksMap.set(book, {
          id: verse.id, // 첫 번째 구절의 ID를 책 ID로 사용
          name: book,
          chapters: new Map(),
        })
      }

      const bookData = booksMap.get(book)!
      if (!bookData.chapters.has(chapter)) {
        bookData.chapters.set(chapter, { verses: [] })
      }

      bookData.chapters.get(chapter)!.verses.push(verseNum)
    })

    // BookStructure 배열 생성
    const books: BookStructure[] = Array.from(booksMap.entries()).map(
      ([bookName, bookData]) => {
        // 장 번호 정렬
        const sortedChapters = Array.from(bookData.chapters.entries()).sort(
          ([a], [b]) => a - b
        )

        const chapters: ChapterStructure[] = sortedChapters.map(
          ([chapterNum, chapterData]) => {
            // 구절 번호 정렬
            const sortedVerses = chapterData.verses.sort((a, b) => a - b)

            return {
              number: chapterNum,
              totalVerses: sortedVerses.length,
              availableVerses: sortedVerses,
            }
          }
        )

        return {
          id: bookData.id,
          name: bookName,
          nameKorean: getKoreanBookName(bookName),
          chapters,
        }
      }
    )

    // 책 이름으로 정렬 (신약 순서 고려)
    const bookOrder = [
      'Matthew',
      'Mark',
      'Luke',
      'John',
      'Acts',
      'Romans',
      '1 Corinthians',
      '2 Corinthians',
      'Galatians',
      'Ephesians',
      'Philippians',
      'Colossians',
      '1 Thessalonians',
      '2 Thessalonians',
      '1 Timothy',
      '2 Timothy',
      'Titus',
      'Philemon',
      'Hebrews',
      'James',
      '1 Peter',
      '2 Peter',
      '1 John',
      '2 John',
      '3 John',
      'Jude',
      'Revelation',
    ]

    books.sort((a, b) => {
      const indexA = bookOrder.indexOf(a.name)
      const indexB = bookOrder.indexOf(b.name)

      // 둘 다 bookOrder에 있으면 순서대로
      if (indexA !== -1 && indexB !== -1) {
        return indexA - indexB
      }

      // 하나만 있으면 그것을 먼저
      if (indexA !== -1) return -1
      if (indexB !== -1) return 1

      // 둘 다 없으면 알파벳 순
      return a.name.localeCompare(b.name)
    })

    const response: BibleStructureResponse = {
      books,
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
