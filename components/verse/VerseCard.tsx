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