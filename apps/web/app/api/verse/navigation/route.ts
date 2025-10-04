import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase'

/**
 * Navigation API Response
 */
interface NavigationResponse {
  current: string
  target: string | null
  hasTarget: boolean
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
  const match = reference.match(/^(.+?)\s+(\d+):(\d+)$/)
  if (!match) return null

  const [, book, chapterStr, verseStr] = match
  return {
    book: book.trim(),
    chapter: parseInt(chapterStr, 10),
    verse: parseInt(verseStr, 10),
  }
}

// Dynamic route - query params에 의존하므로 static export 비활성화
export const dynamic = 'force-dynamic'

/**
 * GET /api/verse/navigation
 * Query params:
 *   - reference: 현재 구절 (예: "Philippians 2:12")
 *   - direction: "next" | "prev"
 *
 * Response:
 *   - current: 현재 구절
 *   - target: 이전/다음 구절 (없으면 null)
 *   - hasTarget: 이전/다음 구절 존재 여부
 */
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const reference = searchParams.get('reference')
    const direction = searchParams.get('direction')

    // Validation
    if (!reference) {
      return NextResponse.json(
        { error: '구절 참조(reference)가 필요합니다' },
        { status: 400 }
      )
    }

    if (!direction || !['next', 'prev'].includes(direction)) {
      return NextResponse.json(
        { error: 'direction은 "next" 또는 "prev"여야 합니다' },
        { status: 400 }
      )
    }

    // Parse reference
    const parsed = parseReference(reference)
    if (!parsed) {
      return NextResponse.json(
        { error: '잘못된 구절 참조 형식입니다 (예: "Philippians 2:12")' },
        { status: 400 }
      )
    }

    const { book } = parsed

    // Supabase client
    const supabase = createServerClient()

    // 현재 책의 모든 구절 조회 (같은 책 내에서만 탐색)
    const { data: verses, error: versesError } = await supabase
      .from('verses')
      .select('reference, verse_number')
      .ilike('reference', `${book}%`)
      .returns<{ reference: string; verse_number: number }[]>()

    if (versesError) {
      console.error('DB 조회 오류:', versesError)
      return NextResponse.json(
        { error: '데이터베이스 조회 중 오류가 발생했습니다' },
        { status: 500 }
      )
    }

    if (!verses || verses.length === 0) {
      return NextResponse.json(
        { error: '해당 책의 구절을 찾을 수 없습니다' },
        { status: 404 }
      )
    }

    // 장:절 순서로 정렬 (문자열 정렬이 아닌 숫자 정렬)
    verses.sort((a, b) => {
      const parsedA = parseReference(a.reference)
      const parsedB = parseReference(b.reference)

      if (!parsedA || !parsedB) return 0

      // 장 번호로 먼저 비교
      if (parsedA.chapter !== parsedB.chapter) {
        return parsedA.chapter - parsedB.chapter
      }

      // 같은 장이면 절 번호로 비교
      return parsedA.verse - parsedB.verse
    })

    // 현재 구절의 인덱스 찾기
    const currentIndex = verses.findIndex((v) => v.reference === reference)

    if (currentIndex === -1) {
      return NextResponse.json(
        { error: '현재 구절을 찾을 수 없습니다' },
        { status: 404 }
      )
    }

    // 이전/다음 구절 찾기
    let targetIndex: number | null = null
    if (direction === 'next') {
      targetIndex = currentIndex + 1 < verses.length ? currentIndex + 1 : null
    } else {
      targetIndex = currentIndex - 1 >= 0 ? currentIndex - 1 : null
    }

    const response: NavigationResponse = {
      current: reference,
      target: targetIndex !== null ? verses[targetIndex].reference : null,
      hasTarget: targetIndex !== null,
    }

    return NextResponse.json(response, {
      headers: {
        'Cache-Control': 'public, max-age=3600, s-maxage=7200',
      },
    })
  } catch (error) {
    console.error('Navigation API 오류:', error)

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
