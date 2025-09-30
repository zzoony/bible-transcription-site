'use client'

import { SearchResult } from '@/lib/types'
import { VerseCard } from '@/components/verse/VerseCard'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export interface SearchResultsProps {
  results: SearchResult[]
  total: number
  limit: number
  offset: number
  hasMore: boolean
  query: string
  isLoading?: boolean
  onPageChange?: (newOffset: number) => void
  onResultClick?: (reference: string) => void
  className?: string
}

/**
 * Render paginated search results with optional loading and empty states.
 *
 * Displays a loading indicator when `isLoading` is true, an empty-state message when `results` is empty,
 * and otherwise shows a header with total/result summary, a list of result cards, and pagination controls.
 *
 * @param results - Array of search result items to render
 * @param total - Total number of matching results across all pages
 * @param limit - Number of results per page
 * @param offset - Current result offset (0-based)
 * @param hasMore - Whether additional results are available beyond the current page
 * @param query - Optional search query string to show in the header
 * @param isLoading - When true, shows the loading state instead of results
 * @param onPageChange - Optional callback invoked with the new offset when the user navigates pages
 * @param onResultClick - Optional callback invoked with a result `reference` when a result is clicked
 * @param className - Optional CSS class applied to the root container
 * @returns A React element containing the results header, list, and pagination controls
 */
export function SearchResults({
  results,
  total,
  limit,
  offset,
  hasMore,
  query,
  isLoading = false,
  onPageChange,
  onResultClick,
  className,
}: SearchResultsProps) {
  const currentPage = Math.floor(offset / limit) + 1
  const totalPages = Math.ceil(total / limit)

  const handlePreviousPage = () => {
    if (offset > 0) {
      onPageChange?.(Math.max(0, offset - limit))
    }
  }

  const handleNextPage = () => {
    if (hasMore) {
      onPageChange?.(offset + limit)
    }
  }

  if (isLoading) {
    return (
      <div
        className="flex items-center justify-center py-12"
        data-testid="search-loading"
      >
        <div className="text-muted-foreground">Searching...</div>
      </div>
    )
  }

  if (results.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-12 text-center">
        <p className="text-lg text-muted-foreground">No results found</p>
        {query && (
          <p className="mt-2 text-sm text-muted-foreground">
            Try searching with different keywords
          </p>
        )}
      </div>
    )
  }

  return (
    <div className={className}>
      {/* Results Header */}
      <div className="mb-6 flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          <span data-testid="total-results">
            {total.toLocaleString()} {total === 1 ? 'result' : 'results'}
          </span>
          {query && (
            <span>
              {' '}
              for <span className="font-semibold text-foreground">{query}</span>
            </span>
          )}
        </div>
        {totalPages > 1 && (
          <div className="text-sm text-muted-foreground">
            Page {currentPage} of {totalPages}
          </div>
        )}
      </div>

      {/* Results List */}
      <div className="space-y-4" data-testid="results-list">
        {results.map((result) => (
          <div key={result.reference} data-testid="search-result">
            <VerseCard
              reference={result.reference}
              book={result.book}
              chapter={result.chapter}
              verse={result.verse}
              text={result.text}
              snippet={result.snippet}
              onClick={() => onResultClick?.(result.reference)}
            />
          </div>
        ))}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="mt-8 flex items-center justify-center gap-2">
          <Button
            variant="outline"
            size="default"
            onClick={handlePreviousPage}
            disabled={offset === 0}
            data-testid="prev-page"
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Previous
          </Button>

          <div className="flex items-center gap-2 px-4">
            <span className="text-sm text-muted-foreground">
              Page {currentPage} of {totalPages}
            </span>
          </div>

          <Button
            variant="outline"
            size="default"
            onClick={handleNextPage}
            disabled={!hasMore}
            data-testid="next-page"
          >
            Next
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      )}
    </div>
  )
}