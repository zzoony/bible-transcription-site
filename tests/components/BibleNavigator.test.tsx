/**
 * BibleNavigator 컴포넌트 테스트
 *
 * 테스트 범위:
 * 1. 책/장/절 선택 드롭다운
 * 2. 절 그리드 렌더링
 * 3. 사용 가능/불가능 절 구분
 * 4. Go 버튼 활성화/비활성화
 * 5. 반응형 디자인
 * 6. 로딩 및 오류 상태
 */

import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { BibleNavigator } from '@/components/navigation/BibleNavigator'
import { useBibleStructure } from '@/hooks/useBibleStructure'

// useBibleStructure 훅 모킹
jest.mock('@/hooks/useBibleStructure', () => ({
  useBibleStructure: jest.fn(),
}))

describe('BibleNavigator 컴포넌트', () => {
  const mockOnNavigate = jest.fn()

  const mockBibleStructure = {
    books: [
      {
        id: 1,
        name: 'Philippians',
        nameKorean: '빌립보서',
        chapters: [
          {
            number: 1,
            totalVerses: 30,
            availableVerses: [1, 2, 3, 4, 5],
          },
          {
            number: 2,
            totalVerses: 30,
            availableVerses: [1, 2],
          },
        ],
      },
      {
        id: 2,
        name: 'Galatians',
        nameKorean: '갈라디아서',
        chapters: [
          {
            number: 1,
            totalVerses: 24,
            availableVerses: [1, 2, 3],
          },
        ],
      },
    ],
    isLoading: false,
    error: null,
    selection: {
      selectedBook: null,
      selectedChapter: null,
      selectedVerse: null,
    },
    setSelectedBook: jest.fn(),
    setSelectedChapter: jest.fn(),
    setSelectedVerse: jest.fn(),
    isVerseAvailable: jest.fn(),
    getAvailableVerseRange: jest.fn(() => '1-3, 5'),
  }

  beforeEach(() => {
    jest.clearAllMocks()
    ;(useBibleStructure as jest.Mock).mockReturnValue(mockBibleStructure)
  })

  describe('렌더링', () => {
    it('컴포넌트가 렌더링되어야 함', () => {
      render(<BibleNavigator onNavigate={mockOnNavigate} />)

      expect(
        screen.getByText('성경 구절 찾아보기')
      ).toBeInTheDocument()
    })

    it('책 선택 드롭다운이 렌더링되어야 함', () => {
      render(<BibleNavigator onNavigate={mockOnNavigate} />)

      expect(screen.getByText('1️⃣ 책 선택')).toBeInTheDocument()
      expect(screen.getByLabelText('책 선택')).toBeInTheDocument()
    })

    it('책 목록이 올바르게 표시되어야 함', () => {
      render(<BibleNavigator onNavigate={mockOnNavigate} />)

      const bookSelect = screen.getByLabelText('책 선택')
      fireEvent.click(bookSelect)

      expect(screen.getByText(/Philippians.*빌립보서/)).toBeInTheDocument()
      expect(screen.getByText(/Galatians.*갈라디아서/)).toBeInTheDocument()
    })
  })

  describe('책 선택', () => {
    it('책 선택 시 setSelectedBook이 호출되어야 함', () => {
      const setSelectedBook = jest.fn()
      ;(useBibleStructure as jest.Mock).mockReturnValue({
        ...mockBibleStructure,
        setSelectedBook,
      })

      render(<BibleNavigator onNavigate={mockOnNavigate} />)

      const bookSelect = screen.getByLabelText('책 선택')
      fireEvent.click(bookSelect)

      const philippians = screen.getByText(/Philippians.*빌립보서/)
      fireEvent.click(philippians)

      expect(setSelectedBook).toHaveBeenCalledWith(mockBibleStructure.books[0])
    })

    it('책 선택 후 장 선택이 표시되어야 함', () => {
      ;(useBibleStructure as jest.Mock).mockReturnValue({
        ...mockBibleStructure,
        selection: {
          selectedBook: mockBibleStructure.books[0],
          selectedChapter: null,
          selectedVerse: null,
        },
      })

      render(<BibleNavigator onNavigate={mockOnNavigate} />)

      expect(screen.getByText('2️⃣ 장 선택')).toBeInTheDocument()
      expect(screen.getByLabelText('장 선택')).toBeInTheDocument()
    })
  })

  describe('장 선택', () => {
    beforeEach(() => {
      ;(useBibleStructure as jest.Mock).mockReturnValue({
        ...mockBibleStructure,
        selection: {
          selectedBook: mockBibleStructure.books[0],
          selectedChapter: null,
          selectedVerse: null,
        },
      })
    })

    it('장 목록이 표시되어야 함', () => {
      render(<BibleNavigator onNavigate={mockOnNavigate} />)

      const chapterSelect = screen.getByLabelText('장 선택')
      fireEvent.click(chapterSelect)

      expect(screen.getByText('Chapter 1')).toBeInTheDocument()
      expect(screen.getByText('Chapter 2')).toBeInTheDocument()
    })

    it('장 선택 시 setSelectedChapter가 호출되어야 함', () => {
      const setSelectedChapter = jest.fn()
      ;(useBibleStructure as jest.Mock).mockReturnValue({
        ...mockBibleStructure,
        selection: {
          selectedBook: mockBibleStructure.books[0],
          selectedChapter: null,
          selectedVerse: null,
        },
        setSelectedChapter,
      })

      render(<BibleNavigator onNavigate={mockOnNavigate} />)

      const chapterSelect = screen.getByLabelText('장 선택')
      fireEvent.click(chapterSelect)

      const chapter1 = screen.getByText('Chapter 1')
      fireEvent.click(chapter1)

      expect(setSelectedChapter).toHaveBeenCalledWith(
        mockBibleStructure.books[0].chapters[0]
      )
    })

    it('장 선택 후 절 그리드가 표시되어야 함', () => {
      ;(useBibleStructure as jest.Mock).mockReturnValue({
        ...mockBibleStructure,
        selection: {
          selectedBook: mockBibleStructure.books[0],
          selectedChapter: mockBibleStructure.books[0].chapters[0],
          selectedVerse: null,
        },
      })

      render(<BibleNavigator onNavigate={mockOnNavigate} />)

      expect(screen.getByText('3️⃣ 절 선택')).toBeInTheDocument()
    })
  })

  describe('절 그리드', () => {
    beforeEach(() => {
      ;(useBibleStructure as jest.Mock).mockReturnValue({
        ...mockBibleStructure,
        selection: {
          selectedBook: mockBibleStructure.books[0],
          selectedChapter: mockBibleStructure.books[0].chapters[0],
          selectedVerse: null,
        },
        isVerseAvailable: (verseNum: number) =>
          mockBibleStructure.books[0].chapters[0].availableVerses.includes(
            verseNum
          ),
      })
    })

    it('절 버튼들이 렌더링되어야 함', () => {
      const { container } = render(
        <BibleNavigator onNavigate={mockOnNavigate} />
      )

      // 1-30까지의 절 버튼 확인 (버튼 개수로 확인)
      const verseButtons = container.querySelectorAll('button[aria-label^="절"]')
      expect(verseButtons.length).toBe(30)
    })

    it('사용 가능한 절은 클릭 가능해야 함', () => {
      render(<BibleNavigator onNavigate={mockOnNavigate} />)

      const verse1 = screen.getByLabelText('절 1')
      expect(verse1).not.toBeDisabled()
    })

    it('사용 불가능한 절은 비활성화되어야 함', () => {
      render(<BibleNavigator onNavigate={mockOnNavigate} />)

      // 6번 절은 availableVerses에 없음
      const verse6 = screen.getByLabelText('절 6 (분석 안됨)')
      expect(verse6).toBeDisabled()
    })

    it('절 클릭 시 setSelectedVerse가 호출되어야 함', () => {
      const setSelectedVerse = jest.fn()
      ;(useBibleStructure as jest.Mock).mockReturnValue({
        ...mockBibleStructure,
        selection: {
          selectedBook: mockBibleStructure.books[0],
          selectedChapter: mockBibleStructure.books[0].chapters[0],
          selectedVerse: null,
        },
        setSelectedVerse,
        isVerseAvailable: () => true,
      })

      render(<BibleNavigator onNavigate={mockOnNavigate} />)

      const verse3 = screen.getByLabelText('절 3')
      fireEvent.click(verse3)

      expect(setSelectedVerse).toHaveBeenCalledWith(3)
    })

    it('사용 불가능한 절 클릭 시 아무 일도 일어나지 않아야 함', () => {
      const setSelectedVerse = jest.fn()
      ;(useBibleStructure as jest.Mock).mockReturnValue({
        ...mockBibleStructure,
        selection: {
          selectedBook: mockBibleStructure.books[0],
          selectedChapter: mockBibleStructure.books[0].chapters[0],
          selectedVerse: null,
        },
        setSelectedVerse,
        isVerseAvailable: (verseNum: number) => verseNum <= 5,
      })

      render(<BibleNavigator onNavigate={mockOnNavigate} />)

      const verse10 = screen.getByLabelText('절 10 (분석 안됨)')
      fireEvent.click(verse10)

      expect(setSelectedVerse).not.toHaveBeenCalled()
    })

    it('선택된 절은 시각적으로 구분되어야 함', () => {
      ;(useBibleStructure as jest.Mock).mockReturnValue({
        ...mockBibleStructure,
        selection: {
          selectedBook: mockBibleStructure.books[0],
          selectedChapter: mockBibleStructure.books[0].chapters[0],
          selectedVerse: 3,
        },
        isVerseAvailable: () => true,
      })

      render(<BibleNavigator onNavigate={mockOnNavigate} />)

      const verse3 = screen.getByLabelText('절 3')
      expect(verse3.className).toContain('bg-primary')
    })
  })

  describe('사용 가능한 절 정보', () => {
    beforeEach(() => {
      ;(useBibleStructure as jest.Mock).mockReturnValue({
        ...mockBibleStructure,
        selection: {
          selectedBook: mockBibleStructure.books[0],
          selectedChapter: mockBibleStructure.books[0].chapters[0],
          selectedVerse: null,
        },
        isVerseAvailable: () => true,
      })
    })

    it('사용 가능한 절 범위가 표시되어야 함', () => {
      render(<BibleNavigator onNavigate={mockOnNavigate} />)

      expect(screen.getByText(/Available:/)).toBeInTheDocument()
      expect(screen.getByText(/1-3, 5/)).toBeInTheDocument()
    })
  })

  describe('Go 버튼', () => {
    it('절 선택 후 Go 버튼이 표시되어야 함', () => {
      ;(useBibleStructure as jest.Mock).mockReturnValue({
        ...mockBibleStructure,
        selection: {
          selectedBook: mockBibleStructure.books[0],
          selectedChapter: mockBibleStructure.books[0].chapters[0],
          selectedVerse: 3,
        },
        isVerseAvailable: () => true,
      })

      render(<BibleNavigator onNavigate={mockOnNavigate} />)

      expect(
        screen.getByText(/Philippians 1:3로 이동/)
      ).toBeInTheDocument()
    })

    it('Go 버튼 클릭 시 onNavigate가 호출되어야 함', () => {
      ;(useBibleStructure as jest.Mock).mockReturnValue({
        ...mockBibleStructure,
        selection: {
          selectedBook: mockBibleStructure.books[0],
          selectedChapter: mockBibleStructure.books[0].chapters[0],
          selectedVerse: 3,
        },
        isVerseAvailable: () => true,
      })

      render(<BibleNavigator onNavigate={mockOnNavigate} />)

      const goButton = screen.getByText(/Philippians 1:3로 이동/)
      fireEvent.click(goButton)

      expect(mockOnNavigate).toHaveBeenCalledWith('Philippians 1:3')
    })

    it('사용 불가능한 절 선택 시 Go 버튼이 비활성화되어야 함', () => {
      ;(useBibleStructure as jest.Mock).mockReturnValue({
        ...mockBibleStructure,
        selection: {
          selectedBook: mockBibleStructure.books[0],
          selectedChapter: mockBibleStructure.books[0].chapters[0],
          selectedVerse: 10,
        },
        isVerseAvailable: (verseNum: number) => verseNum <= 5,
      })

      render(<BibleNavigator onNavigate={mockOnNavigate} />)

      const goButton = screen.getByText(/Philippians 1:10로 이동/)
      expect(goButton).toBeDisabled()
    })
  })

  describe('로딩 상태', () => {
    it('로딩 중 스피너가 표시되어야 함', () => {
      ;(useBibleStructure as jest.Mock).mockReturnValue({
        ...mockBibleStructure,
        isLoading: true,
      })

      render(<BibleNavigator onNavigate={mockOnNavigate} />)

      expect(screen.getByText('로딩 중...')).toBeInTheDocument()
    })

    it('로딩 중 선택 UI가 표시되지 않아야 함', () => {
      ;(useBibleStructure as jest.Mock).mockReturnValue({
        ...mockBibleStructure,
        isLoading: true,
      })

      render(<BibleNavigator onNavigate={mockOnNavigate} />)

      expect(screen.queryByText('1️⃣ 책 선택')).not.toBeInTheDocument()
    })
  })

  describe('오류 상태', () => {
    it('오류 메시지가 표시되어야 함', () => {
      ;(useBibleStructure as jest.Mock).mockReturnValue({
        ...mockBibleStructure,
        isLoading: false,
        error: '데이터를 불러올 수 없습니다',
      })

      render(<BibleNavigator onNavigate={mockOnNavigate} />)

      expect(screen.getByText('오류가 발생했습니다')).toBeInTheDocument()
      expect(
        screen.getByText('데이터를 불러올 수 없습니다')
      ).toBeInTheDocument()
    })

    it('오류 시 선택 UI가 표시되지 않아야 함', () => {
      ;(useBibleStructure as jest.Mock).mockReturnValue({
        ...mockBibleStructure,
        isLoading: false,
        error: '네트워크 오류',
      })

      render(<BibleNavigator onNavigate={mockOnNavigate} />)

      expect(screen.queryByText('1️⃣ 책 선택')).not.toBeInTheDocument()
    })
  })

  describe('반응형 디자인', () => {
    beforeEach(() => {
      ;(useBibleStructure as jest.Mock).mockReturnValue({
        ...mockBibleStructure,
        selection: {
          selectedBook: mockBibleStructure.books[0],
          selectedChapter: mockBibleStructure.books[0].chapters[0],
          selectedVerse: null,
        },
        isVerseAvailable: () => true,
      })
    })

    it('절 그리드가 반응형 클래스를 가져야 함', () => {
      const { container } = render(
        <BibleNavigator onNavigate={mockOnNavigate} />
      )

      const grid = container.querySelector('.grid')
      expect(grid?.className).toContain('grid-cols-5') // 모바일: 5열
      expect(grid?.className).toContain('md:grid-cols-8') // 태블릿: 8열
      expect(grid?.className).toContain('lg:grid-cols-10') // 데스크톱: 10열
    })

    it('버튼 최소 크기가 터치 영역을 만족해야 함 (44x44px)', () => {
      render(<BibleNavigator onNavigate={mockOnNavigate} />)

      const verse1 = screen.getByLabelText('절 1')
      expect(verse1.className).toContain('min-h-[44px]')
      expect(verse1.className).toContain('min-w-[44px]')
    })
  })

  describe('접근성', () => {
    it('모든 드롭다운에 aria-label이 있어야 함', () => {
      ;(useBibleStructure as jest.Mock).mockReturnValue({
        ...mockBibleStructure,
        selection: {
          selectedBook: mockBibleStructure.books[0],
          selectedChapter: null,
          selectedVerse: null,
        },
      })

      render(<BibleNavigator onNavigate={mockOnNavigate} />)

      expect(screen.getByLabelText('책 선택')).toBeInTheDocument()
      expect(screen.getByLabelText('장 선택')).toBeInTheDocument()
    })

    it('절 버튼에 적절한 aria-label이 있어야 함', () => {
      ;(useBibleStructure as jest.Mock).mockReturnValue({
        ...mockBibleStructure,
        selection: {
          selectedBook: mockBibleStructure.books[0],
          selectedChapter: mockBibleStructure.books[0].chapters[0],
          selectedVerse: null,
        },
        isVerseAvailable: (verseNum: number) => verseNum <= 5,
      })

      render(<BibleNavigator onNavigate={mockOnNavigate} />)

      expect(screen.getByLabelText('절 1')).toBeInTheDocument()
      expect(screen.getByLabelText('절 10 (분석 안됨)')).toBeInTheDocument()
    })
  })
})
