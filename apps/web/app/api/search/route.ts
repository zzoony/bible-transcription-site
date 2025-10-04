import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase'
import type { SearchResponse, SearchResult } from '@/lib/types'
import { koreanBookToEnglish } from '@/lib/bible-books'
import { parseVerseReference } from '@/lib/utils'

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

  // cap the limit to a maximum of 100 to prevent abuse
  const limit = limitStr ? Math.min(parseInt(limitStr), 100) : 10
  const offset = offsetStr ? parseInt(offsetStr) : 0
  const chapter = chapterStr ? parseInt(chapterStr) : undefined

  // Validate numeric parameters
  if (isNaN(limit) || limit < 0) {
    return NextResponse.json(
      { error: 'Invalid limit parameter (must be 0-100)' },
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

    // Apply sorting and pagination at database level
    supabaseQuery = supabaseQuery
      .order('chapters.chapter_number', { ascending: true })
      .order('verse_number', { ascending: true })
      .range(offset, offset + limit - 1)

    const { data, error, count } = await supabaseQuery

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Database query failed', details: error.message },
        { status: 500 }
      )
    }

    const total = count || 0

    // Map results
    const results: SearchResult[] =
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
        ...(process.env.NODE_ENV === 'development' && {
          message: error instanceof Error ? error.message : 'Unknown error',
        }),
      },
      { status: 500 }
    )
  }
}

/**
 * Highlight search terms in text with <mark> tags
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
 * Escape special regex characters
 */
function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}