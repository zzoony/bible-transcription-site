import { render, screen, fireEvent } from '@testing-library/react'
import { SearchResults } from '@/components/search/SearchResults'
import { SearchResult } from '@/lib/types'

// Mock VerseCard component
jest.mock('@/components/verse/VerseCard', () => ({
  VerseCard: ({
    reference,
    book,
    chapter,
    verse,
    text,
    onClick,
  }: {
    reference: string
    book: string
    chapter: number
    verse: number
    text: string
    onClick?: () => void
  }) => (
    <div data-testid="verse-card" onClick={onClick}>
      <div data-testid="verse-reference">
        {book} {chapter}:{verse}
      </div>
      <div data-testid="verse-text">{text}</div>
    </div>
  ),
}))

describe('SearchResults', () => {
  const mockResults: SearchResult[] = [
    {
      reference: 'philippians-3-1',
      book: 'Philippians',
      chapter: 3,
      verse: 1,
      text: 'Further, my brothers and sisters, rejoice in the Lord!',
    },
    {
      reference: 'philippians-3-2',
      book: 'Philippians',
      chapter: 3,
      verse: 2,
      text: 'Watch out for those dogs, those evildoers, those mutilators of the flesh.',
    },
  ]

  const defaultProps = {
    results: mockResults,
    total: 2,
    limit: 10,
    offset: 0,
    hasMore: false,
    query: 'love',
  }

  describe('Loading State', () => {
    it('should show loading indicator when isLoading is true', () => {
      render(<SearchResults {...defaultProps} results={[]} isLoading={true} />)

      const loading = screen.getByTestId('search-loading')
      expect(loading).toBeInTheDocument()
      expect(loading).toHaveTextContent('Searching...')
    })
  })

  describe('Empty Results', () => {
    it('should show "no results" message when results are empty', () => {
      render(<SearchResults {...defaultProps} results={[]} total={0} />)

      expect(screen.getByText('No results found')).toBeInTheDocument()
      expect(
        screen.getByText('Try searching with different keywords')
      ).toBeInTheDocument()
    })

    it('should not show results list when empty', () => {
      render(<SearchResults {...defaultProps} results={[]} total={0} />)

      const resultsList = screen.queryByTestId('results-list')
      expect(resultsList).not.toBeInTheDocument()
    })
  })

  describe('Results Display', () => {
    it('should display all results', () => {
      render(<SearchResults {...defaultProps} />)

      const results = screen.getAllByTestId('verse-card')
      expect(results).toHaveLength(2)
    })

    it('should display total results count', () => {
      render(<SearchResults {...defaultProps} total={42} />)

      const totalResults = screen.getByTestId('total-results')
      expect(totalResults).toHaveTextContent('42 results')
    })

    it('should display singular "result" when total is 1', () => {
      render(<SearchResults {...defaultProps} total={1} results={[mockResults[0]]} />)

      const totalResults = screen.getByTestId('total-results')
      expect(totalResults).toHaveTextContent('1 result')
    })

    it('should display search query in header', () => {
      render(<SearchResults {...defaultProps} query="love" />)

      expect(screen.getByText('love')).toBeInTheDocument()
    })

    it('should format total with thousands separator', () => {
      render(<SearchResults {...defaultProps} total={1234} />)

      const totalResults = screen.getByTestId('total-results')
      expect(totalResults).toHaveTextContent('1,234')
    })
  })

  describe('Result Click', () => {
    it('should call onResultClick when result is clicked', () => {
      const mockOnResultClick = jest.fn()

      render(
        <SearchResults {...defaultProps} onResultClick={mockOnResultClick} />
      )

      const firstResult = screen.getAllByTestId('verse-card')[0]
      fireEvent.click(firstResult)

      expect(mockOnResultClick).toHaveBeenCalledWith('philippians-3-1')
    })
  })

  describe('Pagination', () => {
    it('should not show pagination when total pages is 1', () => {
      render(<SearchResults {...defaultProps} total={5} limit={10} />)

      const prevButton = screen.queryByTestId('prev-page')
      const nextButton = screen.queryByTestId('next-page')

      expect(prevButton).not.toBeInTheDocument()
      expect(nextButton).not.toBeInTheDocument()
    })

    it('should show pagination when total pages > 1', () => {
      render(<SearchResults {...defaultProps} total={25} limit={10} hasMore={true} />)

      const prevButton = screen.getByTestId('prev-page')
      const nextButton = screen.getByTestId('next-page')

      expect(prevButton).toBeInTheDocument()
      expect(nextButton).toBeInTheDocument()
    })

    it('should disable previous button on first page', () => {
      render(<SearchResults {...defaultProps} total={25} limit={10} offset={0} hasMore={true} />)

      const prevButton = screen.getByTestId('prev-page')
      expect(prevButton).toBeDisabled()
    })

    it('should enable previous button when not on first page', () => {
      render(<SearchResults {...defaultProps} total={25} limit={10} offset={10} hasMore={true} />)

      const prevButton = screen.getByTestId('prev-page')
      expect(prevButton).toBeEnabled()
    })

    it('should disable next button when hasMore is false', () => {
      render(<SearchResults {...defaultProps} total={25} limit={10} offset={20} hasMore={false} />)

      const nextButton = screen.getByTestId('next-page')
      expect(nextButton).toBeDisabled()
    })

    it('should enable next button when hasMore is true', () => {
      render(<SearchResults {...defaultProps} total={25} limit={10} offset={0} hasMore={true} />)

      const nextButton = screen.getByTestId('next-page')
      expect(nextButton).toBeEnabled()
    })

    it('should call onPageChange with correct offset when next is clicked', () => {
      const mockOnPageChange = jest.fn()

      render(
        <SearchResults
          {...defaultProps}
          total={25}
          limit={10}
          offset={0}
          hasMore={true}
          onPageChange={mockOnPageChange}
        />
      )

      const nextButton = screen.getByTestId('next-page')
      fireEvent.click(nextButton)

      expect(mockOnPageChange).toHaveBeenCalledWith(10)
    })

    it('should call onPageChange with correct offset when previous is clicked', () => {
      const mockOnPageChange = jest.fn()

      render(
        <SearchResults
          {...defaultProps}
          total={25}
          limit={10}
          offset={10}
          hasMore={true}
          onPageChange={mockOnPageChange}
        />
      )

      const prevButton = screen.getByTestId('prev-page')
      fireEvent.click(prevButton)

      expect(mockOnPageChange).toHaveBeenCalledWith(0)
    })

    it('should display current page and total pages', () => {
      render(<SearchResults {...defaultProps} total={25} limit={10} offset={10} hasMore={true} />)

      expect(screen.getByText('Page 2 of 3')).toBeInTheDocument()
    })

    it('should calculate pages correctly with different offsets', () => {
      const { rerender } = render(
        <SearchResults {...defaultProps} total={100} limit={10} offset={0} hasMore={true} />
      )

      expect(screen.getByText('Page 1 of 10')).toBeInTheDocument()

      rerender(
        <SearchResults {...defaultProps} total={100} limit={10} offset={50} hasMore={true} />
      )

      expect(screen.getByText('Page 6 of 10')).toBeInTheDocument()
    })
  })

  describe('Accessibility', () => {
    it('should have proper data-testid attributes', () => {
      render(<SearchResults {...defaultProps} total={25} limit={10} />)

      expect(screen.getByTestId('total-results')).toBeInTheDocument()
      expect(screen.getByTestId('results-list')).toBeInTheDocument()
      expect(screen.getAllByTestId('search-result')).toHaveLength(2)
    })
  })

  describe('Custom Styling', () => {
    it('should apply custom className', () => {
      const { container } = render(
        <SearchResults {...defaultProps} className="custom-class" />
      )

      const wrapper = container.firstChild as HTMLElement
      expect(wrapper).toHaveClass('custom-class')
    })
  })
})