import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { parseKoreanReference } from './bible-books'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Parse verse reference string into components
 * @param reference - e.g., "Philippians 3:1", "philippians-3-1", "빌립보서 3:1"
 * @returns Object with book, chapter, verse
 */
export function parseVerseReference(reference: string): {
  book: string
  chapter: number
  verse: number
} | null {
  // Try Korean format first (빌립보서 3:1)
  const koreanParsed = parseKoreanReference(reference)
  if (koreanParsed) {
    return koreanParsed
  }

  // Handle dash-separated format (philippians-3-1)
  const dashMatch = reference.match(/^([a-z]+)-(\d+)-(\d+)$/i)
  if (dashMatch) {
    return {
      book: dashMatch[1].charAt(0).toUpperCase() + dashMatch[1].slice(1),
      chapter: parseInt(dashMatch[2]),
      verse: parseInt(dashMatch[3]),
    }
  }

  // Handle standard format (Philippians 3:1, 1 Corinthians 2:3, etc.)
  const standardMatch = reference.match(/^([\w\s]+?)\s+(\d+):(\d+)$/i)
  if (standardMatch) {
    const book = standardMatch[1].trim()
    return {
      book: book.charAt(0).toUpperCase() + book.slice(1),
      chapter: parseInt(standardMatch[2]),
      verse: parseInt(standardMatch[3]),
    }
  }

  return null
}

/**
 * Format verse reference for URL
 * @param book - Book name
 * @param chapter - Chapter number
 * @param verse - Verse number
 * @returns URL-safe reference string
 */
export function formatVerseReference(
  book: string,
  chapter: number,
  verse: number
): string {
  return `${book.toLowerCase()}-${chapter}-${verse}`
}

/**
 * Format verse reference for display
 * @param book - Book name
 * @param chapter - Chapter number
 * @param verse - Verse number
 * @returns Human-readable reference string
 */
export function formatVerseDisplay(
  book: string,
  chapter: number,
  verse: number
): string {
  return `${book} ${chapter}:${verse}`
}