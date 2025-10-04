'use client'

import { useState, useCallback } from 'react'
import { getSupabase } from '@/lib/supabase'
import type { SearchResult, SearchQuery, SearchState } from '@/lib/types'
import { parseVerseReference } from '@/lib/utils'

export function useSearch() {
  const [state, setState] = useState<SearchState>({
    query: '',
    filters: {},
    results: [],
    total: 0,
    limit: 10,
    offset: 0,
    hasMore: false,
    isLoading: false,
    error: null,
  })

  const search = useCallback(
    async (params: Partial<SearchQuery>) => {
      const query = params.q || state.query
      const limit = params.limit || state.limit
      const offset = params.offset || state.offset
      const book = params.book
      const chapter = params.chapter

      if (!query.trim()) {
        setState((prev) => ({ ...prev, error: 'Query is required' }))
        return
      }

      setState((prev) => ({ ...prev, isLoading: true, error: null }))

      try {
        const supabase = getSupabase()

        // Build query with joins
        let supabaseQuery = supabase
          .from('verses')
          .select(
            `
            reference,
            niv_text,
            verse_number,
            books!inner(name_english),
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
          supabaseQuery = supabaseQuery.eq('books.name_english', book)
        }

        if (chapter !== undefined) {
          supabaseQuery = supabaseQuery.eq('chapters.chapter_number', chapter)
        }

        // Don't apply pagination yet - we need to sort first
        const { data, error, count } = await supabaseQuery

        if (error) throw error

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
              snippet: verse.niv_text, // TODO: Implement highlighting
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

        setState({
          query,
          filters: { book, chapter },
          results,
          total,
          limit,
          offset,
          hasMore,
          isLoading: false,
          error: null,
        })
      } catch (error) {
        console.error('Search error:', error)
        setState((prev) => ({
          ...prev,
          isLoading: false,
          error: error instanceof Error ? error.message : 'Search failed',
        }))
      }
    },
    [state.query, state.limit, state.offset]
  )

  const clear = useCallback(() => {
    setState({
      query: '',
      filters: {},
      results: [],
      total: 0,
      limit: 10,
      offset: 0,
      hasMore: false,
      isLoading: false,
      error: null,
    })
  }, [])

  const setQuery = useCallback((query: string) => {
    setState((prev) => ({ ...prev, query }))
  }, [])

  const setFilters = useCallback(
    (filters: { book?: string; chapter?: number }) => {
      setState((prev) => ({ ...prev, filters }))
    },
    []
  )

  const nextPage = useCallback(() => {
    if (state.hasMore) {
      search({ offset: state.offset + state.limit })
    }
  }, [state.hasMore, state.offset, state.limit, search])

  const previousPage = useCallback(() => {
    if (state.offset > 0) {
      search({ offset: Math.max(0, state.offset - state.limit) })
    }
  }, [state.offset, state.limit, search])

  return {
    ...state,
    search,
    clear,
    setQuery,
    setFilters,
    nextPage,
    previousPage,
  }
}