'use client'

import { useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { SearchBar } from '@/components/search/SearchBar'
import { SearchResults } from '@/components/search/SearchResults'
import { useSearch } from '@/hooks/useSearch'
import { Button } from '@/components/ui/button'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { parseSearchQuery } from '@/lib/bible-books'

export default function SearchPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const {
    results,
    total,
    limit,
    offset,
    hasMore,
    query,
    filters,
    isLoading,
    error,
    search,
    setQuery,
    setFilters,
  } = useSearch()

  const queryParam = searchParams.get('q')
  const bookParam = searchParams.get('book')
  const chapterParam = searchParams.get('chapter')
  const offsetParam = searchParams.get('offset')

  // Perform search when URL params change
  useEffect(() => {
    if (queryParam) {
      // Parse query to check if it's a Korean book name
      const parsed = parseSearchQuery(queryParam)

      if (parsed.isBookName && parsed.book) {
        // If it's a book name, search all verses in that book
        setQuery('')
        setFilters({ book: parsed.book })
        search({
          q: '*', // Search all verses
          book: parsed.book,
          chapter: chapterParam ? parseInt(chapterParam) : undefined,
          offset: offsetParam ? parseInt(offsetParam) : 0,
        })
      } else {
        // Regular text search
        setQuery(queryParam)
        search({
          q: queryParam,
          book: bookParam || undefined,
          chapter: chapterParam ? parseInt(chapterParam) : undefined,
          offset: offsetParam ? parseInt(offsetParam) : 0,
        })
      }
    }
  }, [queryParam, bookParam, chapterParam, offsetParam])

  const handleSearch = (newQuery: string) => {
    const params = new URLSearchParams()
    params.set('q', newQuery)
    if (filters.book) params.set('book', filters.book)
    if (filters.chapter) params.set('chapter', filters.chapter.toString())
    router.push(`/search?${params.toString()}`)
  }

  const handlePageChange = (newOffset: number) => {
    const params = new URLSearchParams()
    params.set('q', query)
    params.set('offset', newOffset.toString())
    if (filters.book) params.set('book', filters.book)
    if (filters.chapter) params.set('chapter', filters.chapter.toString())
    router.push(`/search?${params.toString()}`)
  }

  const handleResultClick = (reference: string) => {
    router.push(`/verse/${reference}`)
  }

  const handleBookFilter = (book: string) => {
    const params = new URLSearchParams()
    params.set('q', query)
    if (book && book !== 'all') {
      params.set('book', book)
      setFilters({ ...filters, book })
    } else {
      setFilters({ ...filters, book: undefined })
    }
    router.push(`/search?${params.toString()}`)
  }

  const handleClearFilters = () => {
    setFilters({})
    router.push(`/search?q=${encodeURIComponent(query)}`)
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Search Bar */}
      <div className="mb-8">
        <SearchBar
          onSearch={handleSearch}
          defaultValue={query}
          placeholder="Search for Bible verses..."
        />
      </div>

      {/* Filters */}
      <div className="mb-6 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium">Book:</label>
          <Select
            value={filters.book || 'all'}
            onValueChange={handleBookFilter}
          >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="All Books" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Books</SelectItem>
              <SelectItem value="Philippians">Philippians</SelectItem>
              <SelectItem value="Genesis">Genesis</SelectItem>
              <SelectItem value="John">John</SelectItem>
              <SelectItem value="Romans">Romans</SelectItem>
              <SelectItem value="Psalms">Psalms</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {(filters.book || filters.chapter) && (
          <Button variant="outline" size="sm" onClick={handleClearFilters}>
            Clear Filters
          </Button>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-6 rounded-md border border-destructive bg-destructive/10 p-4">
          <p className="text-sm text-destructive">{error}</p>
        </div>
      )}

      {/* Search Results */}
      <SearchResults
        results={results}
        total={total}
        limit={limit}
        offset={offset}
        hasMore={hasMore}
        query={query}
        isLoading={isLoading}
        onPageChange={handlePageChange}
        onResultClick={handleResultClick}
      />
    </div>
  )
}