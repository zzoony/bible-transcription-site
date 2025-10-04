import { render, screen, fireEvent } from '@testing-library/react'
import { VerseCard } from '@/components/verse/VerseCard'

describe('VerseCard', () => {
  const defaultProps = {
    reference: 'philippians-3-1',
    book: 'Philippians',
    chapter: 3,
    verse: 1,
    text: 'Further, my brothers and sisters, rejoice in the Lord!',
  }

  describe('Basic Rendering', () => {
    it('should render verse reference', () => {
      render(<VerseCard {...defaultProps} />)

      const reference = screen.getByTestId('verse-reference')
      expect(reference).toBeInTheDocument()
      expect(reference).toHaveTextContent('Philippians 3:1')
    })

    it('should render verse text', () => {
      render(<VerseCard {...defaultProps} />)

      const text = screen.getByTestId('verse-text')
      expect(text).toBeInTheDocument()
      expect(text).toHaveTextContent(defaultProps.text)
    })

    it('should render verse card container', () => {
      render(<VerseCard {...defaultProps} />)

      const card = screen.getByTestId('verse-card')
      expect(card).toBeInTheDocument()
    })
  })

  describe('Snippet Highlighting', () => {
    it('should render snippet instead of full text when provided', () => {
      const snippet = 'rejoice <mark>in the Lord</mark>!'

      render(<VerseCard {...defaultProps} snippet={snippet} />)

      const text = screen.getByTestId('verse-text')
      expect(text).toBeInTheDocument()
      // Should contain highlighted text
      expect(text.innerHTML).toContain('mark')
    })

    it('should apply highlight styles to marked text', () => {
      const snippet = 'rejoice <mark>in the Lord</mark>!'

      render(<VerseCard {...defaultProps} snippet={snippet} />)

      const text = screen.getByTestId('verse-text')
      expect(text.innerHTML).toContain('bg-yellow-200')
      expect(text.innerHTML).toContain('dark:bg-yellow-900')
    })

    it('should handle multiple highlighted terms', () => {
      const snippet = '<mark>rejoice</mark> in the <mark>Lord</mark>!'

      render(<VerseCard {...defaultProps} snippet={snippet} />)

      const text = screen.getByTestId('verse-text')
      expect(text.innerHTML).toContain('mark')
      // Should have two mark tags
      const markCount = (text.innerHTML.match(/<mark/g) || []).length
      expect(markCount).toBe(2)
    })

    it('should render plain text when no snippet is provided', () => {
      render(<VerseCard {...defaultProps} />)

      const text = screen.getByTestId('verse-text')
      expect(text).toHaveTextContent(defaultProps.text)
      expect(text.innerHTML).not.toContain('mark')
    })
  })

  describe('Click Interaction', () => {
    it('should call onClick when card is clicked', () => {
      const mockOnClick = jest.fn()

      render(<VerseCard {...defaultProps} onClick={mockOnClick} />)

      const card = screen.getByTestId('verse-card')
      fireEvent.click(card)

      expect(mockOnClick).toHaveBeenCalledTimes(1)
    })

    it('should not error when onClick is not provided', () => {
      render(<VerseCard {...defaultProps} />)

      const card = screen.getByTestId('verse-card')
      expect(() => fireEvent.click(card)).not.toThrow()
    })

    it('should have cursor-pointer class for clickable indication', () => {
      render(<VerseCard {...defaultProps} onClick={jest.fn()} />)

      const card = screen.getByTestId('verse-card')
      expect(card).toHaveClass('cursor-pointer')
    })
  })

  describe('Reference Formatting', () => {
    it('should format reference with book name, chapter, and verse', () => {
      render(<VerseCard {...defaultProps} />)

      const reference = screen.getByTestId('verse-reference')
      expect(reference).toHaveTextContent('Philippians 3:1')
    })

    it('should handle different book names', () => {
      render(
        <VerseCard
          {...defaultProps}
          book="Genesis"
          chapter={1}
          verse={1}
          reference="genesis-1-1"
        />
      )

      const reference = screen.getByTestId('verse-reference')
      expect(reference).toHaveTextContent('Genesis 1:1')
    })

    it('should handle large chapter and verse numbers', () => {
      render(
        <VerseCard
          {...defaultProps}
          book="Psalms"
          chapter={119}
          verse={176}
          reference="psalms-119-176"
        />
      )

      const reference = screen.getByTestId('verse-reference')
      expect(reference).toHaveTextContent('Psalms 119:176')
    })
  })

  describe('Styling', () => {
    it('should apply custom className', () => {
      render(<VerseCard {...defaultProps} className="custom-class" />)

      const card = screen.getByTestId('verse-card')
      expect(card).toHaveClass('custom-class')
    })

    it('should have hover effects', () => {
      render(<VerseCard {...defaultProps} />)

      const card = screen.getByTestId('verse-card')
      expect(card).toHaveClass('hover:shadow-md')
      expect(card).toHaveClass('hover:border-primary/50')
    })

    it('should have transition class for smooth effects', () => {
      render(<VerseCard {...defaultProps} />)

      const card = screen.getByTestId('verse-card')
      expect(card).toHaveClass('transition-all')
    })
  })

  describe('Content Layout', () => {
    it('should display reference before text', () => {
      const { container } = render(<VerseCard {...defaultProps} />)

      const reference = screen.getByTestId('verse-reference')
      const text = screen.getByTestId('verse-text')

      const referencePosition = Array.from(
        container.querySelectorAll('[data-testid]')
      ).indexOf(reference)
      const textPosition = Array.from(
        container.querySelectorAll('[data-testid]')
      ).indexOf(text)

      expect(referencePosition).toBeLessThan(textPosition)
    })

    it('should have proper spacing between reference and text', () => {
      render(<VerseCard {...defaultProps} />)

      const reference = screen.getByTestId('verse-reference')
      expect(reference).toHaveClass('mb-3')
    })
  })

  describe('Accessibility', () => {
    it('should have proper semantic structure', () => {
      render(<VerseCard {...defaultProps} />)

      const card = screen.getByTestId('verse-card')
      expect(card).toBeInTheDocument()

      const reference = screen.getByTestId('verse-reference')
      expect(reference).toBeInTheDocument()

      const text = screen.getByTestId('verse-text')
      expect(text).toBeInTheDocument()
    })

    it('should use dangerouslySetInnerHTML safely for highlighting', () => {
      const maliciousSnippet = 'test <script>alert("xss")</script>'

      render(<VerseCard {...defaultProps} snippet={maliciousSnippet} />)

      const text = screen.getByTestId('verse-text')
      // Should render as text, not execute script
      expect(text.innerHTML).not.toContain('alert')
    })
  })
})