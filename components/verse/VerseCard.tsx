'use client'

import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'

export interface VerseCardProps {
  reference: string
  book: string
  chapter: number
  verse: number
  text: string
  snippet?: string
  onClick?: () => void
  className?: string
}

/**
 * Render a verse card showing the book/chapter:verse reference and verse text, with optional highlighted snippets.
 *
 * @param reference - Original verse reference string (unused internally; provided for external tracking)
 * @param book - Book name to display in the reference
 * @param chapter - Chapter number to display in the reference
 * @param verse - Verse number to display in the reference
 * @param text - Full verse text to display when `snippet` is not provided
 * @param snippet - Optional HTML snippet used instead of `text`; `<mark>` tags within are styled for emphasis
 * @param onClick - Optional click handler attached to the card
 * @param className - Optional additional CSS class names applied to the root Card
 * @returns A JSX element rendering the verse card with reference and (potentially highlighted) verse text
 */
export function VerseCard({
  reference: _reference,
  book,
  chapter,
  verse,
  text,
  snippet,
  onClick,
  className,
}: VerseCardProps) {
  const displayText = snippet || text

  // Highlight search terms in snippet (marked with <mark> tags)
  const highlightedText = displayText.replace(
    /<mark>(.*?)<\/mark>/g,
    '<mark class="bg-yellow-200 dark:bg-yellow-900 font-semibold">$1</mark>'
  )

  return (
    <Card
      className={cn(
        'cursor-pointer transition-all hover:shadow-md hover:border-primary/50',
        className
      )}
      onClick={onClick}
      data-testid="verse-card"
    >
      <CardContent className="pt-6">
        {/* Verse Reference */}
        <div
          className="mb-3 text-sm font-semibold text-primary"
          data-testid="verse-reference"
        >
          {book} {chapter}:{verse}
        </div>

        {/* Verse Text */}
        <div
          className="text-base leading-relaxed"
          data-testid="verse-text"
          dangerouslySetInnerHTML={{ __html: highlightedText }}
        />
      </CardContent>
    </Card>
  )
}