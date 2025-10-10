'use client'

import { useState, useEffect } from 'react'

/**
 * Chapter 구조 정보
 */
export interface Chapter {
  number: number
  totalVerses: number
  availableVerses: number[]
}

/**
 * Book 구조 정보
 */
export interface Book {
  id: number
  name: string
  nameKorean: string
  testament: string
  abbreviation: string
  chapters: Chapter[]
}

/**
 * Bible Structure API Response
 */
interface BibleStructureResponse {
  books: Book[]
}

/**
 * Bible Structure 상태
 */
interface BibleStructure {
  books: Book[]
  isLoading: boolean
  error: string | null
}

/**
 * 선택 상태
 */
export interface BibleSelection {
  selectedBook: Book | null
  selectedChapter: Chapter | null
  selectedVerse: number | null
}

/**
 * useBibleStructure Hook 반환 타입
 */
interface UseBibleStructureReturn extends BibleStructure {
  selection: BibleSelection
  setSelectedBook: (book: Book | null) => void
  setSelectedChapter: (chapter: Chapter | null) => void
  setSelectedVerse: (verse: number | null) => void
  isVerseAvailable: (verseNumber: number) => boolean
  getAvailableVerseRange: () => string
  resetSelection: () => void
}

/**
 * 성경 구조 데이터 및 선택 상태 관리 Hook
 *
 * Structure API를 호출하여 전체 성경 구조를 가져오고,
 * 책/장/절 선택 상태를 관리합니다.
 */
export function useBibleStructure(): UseBibleStructureReturn {
  // API 데이터 상태
  const [books, setBooks] = useState<Book[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // 선택 상태
  const [selectedBook, setSelectedBook] = useState<Book | null>(null)
  const [selectedChapter, setSelectedChapter] = useState<Chapter | null>(null)
  const [selectedVerse, setSelectedVerse] = useState<number | null>(null)

  /**
   * Structure API 호출
   */
  useEffect(() => {
    const fetchStructure = async () => {
      try {
        setIsLoading(true)
        setError(null)

        const response = await fetch('/api/navigation/structure')

        if (!response.ok) {
          throw new Error(`API 호출 실패: ${response.status}`)
        }

        const data: BibleStructureResponse = await response.json()

        if (!data.books || data.books.length === 0) {
          throw new Error('성경 구조 데이터가 없습니다')
        }

        setBooks(data.books)
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : '알 수 없는 오류가 발생했습니다'
        setError(errorMessage)
        console.error('Bible Structure API 오류:', err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchStructure()
  }, [])

  /**
   * 책 선택 시 장/절 초기화
   */
  const handleSetSelectedBook = (book: Book | null) => {
    setSelectedBook(book)
    setSelectedChapter(null)
    setSelectedVerse(null)
  }

  /**
   * 장 선택 시 절 초기화
   */
  const handleSetSelectedChapter = (chapter: Chapter | null) => {
    setSelectedChapter(chapter)
    setSelectedVerse(null)
  }

  /**
   * 절이 사용 가능한지 확인
   */
  const isVerseAvailable = (verseNumber: number): boolean => {
    if (!selectedChapter) return false
    return selectedChapter.availableVerses.includes(verseNumber)
  }

  /**
   * 사용 가능한 절 범위 문자열 생성
   * 예: "verses 1-12" 또는 "verses 1-5, 8-12"
   */
  const getAvailableVerseRange = (): string => {
    if (!selectedChapter || selectedChapter.availableVerses.length === 0) {
      return ''
    }

    const verses = [...selectedChapter.availableVerses].sort((a, b) => a - b)
    const ranges: string[] = []
    let rangeStart = verses[0]
    let rangeEnd = verses[0]

    for (let i = 1; i < verses.length; i++) {
      if (verses[i] === rangeEnd + 1) {
        // 연속된 범위
        rangeEnd = verses[i]
      } else {
        // 범위 종료
        if (rangeStart === rangeEnd) {
          ranges.push(`${rangeStart}`)
        } else {
          ranges.push(`${rangeStart}-${rangeEnd}`)
        }
        rangeStart = verses[i]
        rangeEnd = verses[i]
      }
    }

    // 마지막 범위 추가
    if (rangeStart === rangeEnd) {
      ranges.push(`${rangeStart}`)
    } else {
      ranges.push(`${rangeStart}-${rangeEnd}`)
    }

    return `verses ${ranges.join(', ')}`
  }

  /**
   * 선택 초기화
   */
  const resetSelection = () => {
    setSelectedBook(null)
    setSelectedChapter(null)
    setSelectedVerse(null)
  }

  return {
    books,
    isLoading,
    error,
    selection: {
      selectedBook,
      selectedChapter,
      selectedVerse,
    },
    setSelectedBook: handleSetSelectedBook,
    setSelectedChapter: handleSetSelectedChapter,
    setSelectedVerse,
    isVerseAvailable,
    getAvailableVerseRange,
    resetSelection,
  }
}
