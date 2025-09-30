import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import { parseKoreanReference } from './bible-books'

/**
 * Merge CSS class inputs into a single class string and resolve Tailwind utility conflicts.
 *
 * @param inputs - One or more class name inputs (strings, arrays, objects, etc.) compatible with `clsx`
 * @returns The final class string with combined values and Tailwind classes deduplicated/merged
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Parse a verse reference string into its book, chapter, and verse components.
 *
 * @param reference - Verse string in formats like "Philippians 3:1", "philippians-3-1", or Korean "빌립보서 3:1"
 * @returns An object with `book`, `chapter`, and `verse` when parsing succeeds, or `null` if the string cannot be parsed
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
 * Create a URL-safe verse reference string.
 *
 * @param book - Book name (will be lowercased in the output)
 * @param chapter - Chapter number
 * @param verse - Verse number
 * @returns A string in the form `book-chapter-verse` where `book` is lowercased
 */
export function formatVerseReference(
  book: string,
  chapter: number,
  verse: number
): string {
  return `${book.toLowerCase()}-${chapter}-${verse}`
}

/**
 * Produce a human-readable verse reference.
 *
 * @param book - Book name (e.g., "Philippians")
 * @param chapter - Chapter number
 * @param verse - Verse number
 * @returns The reference formatted as "Book Chapter:Verse" (e.g., "Philippians 3:1")
 */
export function formatVerseDisplay(
  book: string,
  chapter: number,
  verse: number
): string {
  return `${book} ${chapter}:${verse}`
}