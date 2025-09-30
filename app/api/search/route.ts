import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase'
import type { SearchResponse, SearchResult } from '@/lib/types'
import { koreanBookToEnglish } from '@/lib/bible-books'
import { parseVerseReference } from '@/lib/utils'

/**
 * Handle GET /api/search requests and return paginated verse search results.
 *
 * Validates query parameters (`q`, `book`, `chapter`, `limit`, `offset`), performs a database search (optionally full-text when `q` is not `*`), filters by book or chapter when provided, maps and sorts matching verses, and returns a paginated SearchResponse.
 *
 * @returns A JSON `SearchResponse` containing `query`, `results`, `total`, `limit`, `offset`, and `hasMore` on success; on failure returns a JSON error object with an appropriate HTTP status code and message.
 */
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const query = searchParams.get('q')
  const book = searchParams.get('book')
  const chapterStr = searchParams.get('chapter')
  const limitStr = searchParams.get('limit')
  const offsetStr = searchParams.get('offset')

  // Validation
  if (!query || query.trim() === '') {
    return NextResponse.json(
      { error: 'Query parameter "q" is required and cannot be empty' },
      { status: 400 }
    )
  }

  const limit = limitStr ? parseInt(limitStr) : 10
  const offset = offsetStr ? parseInt(offsetStr) : 0
  const chapter = chapterStr ? parseInt(chapterStr) : undefined

  // Validate numeric parameters
  if (isNaN(limit) || limit < 0) {
    return NextResponse.json(
      { error: 'Invalid limit parameter' },
      { status: 400 }
    )
  }

  if (isNaN(offset) || offset < 0) {
    return NextResponse.json(
      { error: 'Invalid offset parameter' },
      { status: 400 }
    )
  }

  if (chapterStr && (isNaN(chapter as number) || (chapter as number) < 0)) {
    return NextResponse.json(
      { error: 'Invalid chapter parameter' },
      { status: 400 }
    )
  }

  try {
    const supabase = createServerClient()

    // Build query with joins to books and chapters tables
    let supabaseQuery = supabase
      .from('verses')
      .select(
        `
        id,
        reference,
        niv_text,
        verse_number,
        book_id,
        chapter_id,
        books!inner(name_english, name_korean),
        chapters!inner(chapter_number)
      `,
        { count: 'exact' }
      )

    // Apply text search only if not searching all verses
    if (query !== '*') {
      supabaseQuery = supabaseQuery.textSearch('niv_text', query, {
        type: 'websearch',
        config: 'english',
      })
    }

    // Apply filters
    if (book) {
      // Check if book is Korean name and convert to English
      const englishBook = koreanBookToEnglish(book) || book
      supabaseQuery = supabaseQuery.eq('books.name_english', englishBook)
    }

    if (chapter !== undefined) {
      supabaseQuery = supabaseQuery.eq('chapters.chapter_number', chapter)
    }

    // Don't apply range yet - we need to sort first
    const { data, error, count } = await supabaseQuery

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Database query failed', details: error.message },
        { status: 500 }
      )
    }

    const total = count || 0

    // Map and sort results by chapter and verse
    const allResults: SearchResult[] =
      data?.map((verse: any) => {
        // Parse reference to get accurate book, chapter, verse
        const parsed = parseVerseReference(verse.reference)
        return {
          reference: verse.reference,
          book: parsed?.book || verse.books.name_english,
          chapter: parsed?.chapter || verse.chapters.chapter_number,
          verse: parsed?.verse || verse.verse_number,
          text: verse.niv_text,
          snippet: highlightSearchTerms(verse.niv_text, query),
          relevance_score: 1.0, // TODO: Implement proper relevance scoring
        }
      }) || []

    // Sort by chapter (ascending), then verse (ascending)
    allResults.sort((a, b) => {
      if (a.chapter !== b.chapter) {
        return a.chapter - b.chapter
      }
      return a.verse - b.verse
    })

    // Apply pagination after sorting
    const results = allResults.slice(offset, offset + limit)
    const hasMore = offset + limit < total

    const response: SearchResponse = {
      query,
      results,
      total,
      limit,
      offset,
      hasMore,
    }

    return NextResponse.json(response, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=300, s-maxage=600',
      },
    })
  } catch (error) {
    console.error('Search API error:', error)
    return NextResponse.json(
      {
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}

/**
 * Wraps occurrences of words from `query` found in `text` with `<mark>` tags.
 *
 * @param text - The original text to highlight
 * @param query - Space-separated search terms to highlight within `text`
 * @returns The input `text` with each match of any query word wrapped in `<mark>` tags
 */
function highlightSearchTerms(text: string, query: string): string {
  // Simple word-based highlighting
  const words = query
    .toLowerCase()
    .split(/\s+/)
    .filter((w) => w.length > 0)

  let highlighted = text
  words.forEach((word) => {
    const regex = new RegExp(`(${escapeRegex(word)})`, 'gi')
    highlighted = highlighted.replace(regex, '<mark>$1</mark>')
  })

  return highlighted
}

/**
 * Escapes regular-expression metacharacters in a string.
 *
 * @param str - The input text to escape
 * @returns The input with characters that have special meaning in regular expressions escaped so it can be used safely in a RegExp
 */
function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}