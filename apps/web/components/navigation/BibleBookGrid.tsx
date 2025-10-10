'use client'

import { useState } from 'react'
import { useBibleStructure } from '@/hooks/useBibleStructure'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Loader2, Book, ArrowLeft } from 'lucide-react'

interface BibleBookGridProps {
  onNavigate: (reference: string) => void
}

/**
 * BibleBookGrid 컴포넌트
 *
 * 성경 66권을 카드 그리드 형태로 표시하여 직관적인 네비게이션 제공
 * - 구약/신약 구분
 * - 각 책의 정보 (한글명, 영문 약자, 장 수) 표시
 * - 책 선택 → 장 선택 → 절 선택 흐름
 */
export function BibleBookGrid({ onNavigate }: BibleBookGridProps) {
  const {
    books,
    isLoading,
    error,
    selection: { selectedBook, selectedChapter, selectedVerse },
    setSelectedBook,
    setSelectedChapter,
    setSelectedVerse,
    isVerseAvailable,
    getAvailableVerseRange,
  } = useBibleStructure()

  const [step, setStep] = useState<'book' | 'chapter' | 'verse'>('book')

  // 구약/신약 분류
  const oldTestament = books.filter((book) => book.testament === 'Old')
  const newTestament = books.filter((book) => book.testament === 'New')

  /**
   * 책 선택 핸들러
   */
  const handleBookSelect = (bookId: number) => {
    const book = books.find((b) => b.id === bookId)
    if (book) {
      setSelectedBook(book)
      setStep('chapter')
    }
  }

  /**
   * 장 선택 핸들러
   */
  const handleChapterSelect = (chapterNum: number) => {
    if (!selectedBook) return
    const chapter = selectedBook.chapters.find((c) => c.number === chapterNum)
    if (chapter) {
      setSelectedChapter(chapter)
      setStep('verse')
    }
  }

  /**
   * 절 선택 핸들러
   */
  const handleVerseSelect = (verseNum: number) => {
    if (!selectedBook || !selectedChapter || !isVerseAvailable(verseNum)) return

    setSelectedVerse(verseNum)
    const reference = `${selectedBook.name} ${selectedChapter.number}:${verseNum}`
    onNavigate(reference)
  }

  /**
   * 뒤로 가기
   */
  const handleBack = () => {
    if (step === 'verse') {
      setStep('chapter')
      setSelectedChapter(null)
      setSelectedVerse(null)
    } else if (step === 'chapter') {
      setStep('book')
      setSelectedBook(null)
    }
  }

  /**
   * 로딩 상태
   */
  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>성경 구절 찾아보기</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            <span className="ml-3 text-muted-foreground">로딩 중...</span>
          </div>
        </CardContent>
      </Card>
    )
  }

  /**
   * 에러 상태
   */
  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>성경 구절 찾아보기</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center py-12">
            <p className="text-destructive mb-2">오류가 발생했습니다</p>
            <p className="text-sm text-muted-foreground">{error}</p>
          </div>
        </CardContent>
      </Card>
    )
  }

  /**
   * 책 선택 뷰
   */
  if (step === 'book') {
    return (
      <Card>
        <CardHeader>
          <CardTitle>📖 성경책 선택</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {/* 구약 성경 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Book className="h-5 w-5" />
              구약 성경 ({oldTestament.length}권)
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {oldTestament.map((book) => (
                <button
                  key={book.id}
                  onClick={() => handleBookSelect(book.id)}
                  className="group relative p-4 rounded-lg border-2 border-border hover:border-primary transition-all duration-200 hover:shadow-md bg-card"
                >
                  <div className="text-center space-y-1">
                    <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                      {book.nameKorean}
                    </p>
                    <p className="text-xs text-muted-foreground font-mono">
                      {book.abbreviation}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {book.chapters.length}장
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* 신약 성경 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Book className="h-5 w-5" />
              신약 성경 ({newTestament.length}권)
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {newTestament.map((book) => (
                <button
                  key={book.id}
                  onClick={() => handleBookSelect(book.id)}
                  className="group relative p-4 rounded-lg border-2 border-border hover:border-primary transition-all duration-200 hover:shadow-md bg-card"
                >
                  <div className="text-center space-y-1">
                    <p className="font-semibold text-sm group-hover:text-primary transition-colors">
                      {book.nameKorean}
                    </p>
                    <p className="text-xs text-muted-foreground font-mono">
                      {book.abbreviation}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {book.chapters.length}장
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    )
  }

  /**
   * 장 선택 뷰
   */
  if (step === 'chapter' && selectedBook) {
    return (
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={handleBack}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <CardTitle>
              {selectedBook.nameKorean} ({selectedBook.name}) - 장 선택
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-5 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12 gap-2">
            {selectedBook.chapters.map((chapter) => (
              <button
                key={chapter.number}
                onClick={() => handleChapterSelect(chapter.number)}
                className="min-h-[50px] min-w-[50px] rounded-md text-sm font-medium bg-secondary hover:bg-secondary/80 hover:scale-105 transition-all duration-200"
              >
                {chapter.number}
              </button>
            ))}
          </div>
        </CardContent>
      </Card>
    )
  }

  /**
   * 절 선택 뷰
   */
  if (step === 'verse' && selectedBook && selectedChapter) {
    const maxVerse = Math.max(
      ...selectedChapter.availableVerses,
      selectedChapter.totalVerses
    )
    const verseGrid = Array.from({ length: maxVerse }, (_, i) => i + 1)

    return (
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={handleBack}>
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <CardTitle>
              {selectedBook.nameKorean} {selectedChapter.number}장 - 절 선택
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* 사용 가능한 절 정보 */}
          {selectedChapter.availableVerses.length > 0 && (
            <div className="flex items-start gap-2 p-3 bg-muted/50 rounded-md">
              <span className="text-lg">💡</span>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground">
                  <strong>분석 완료:</strong> {getAvailableVerseRange()}
                </p>
              </div>
            </div>
          )}

          {/* 절 그리드 */}
          <div className="grid grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-2">
            {verseGrid.map((verseNum) => {
              const available = isVerseAvailable(verseNum)
              const isSelected = selectedVerse === verseNum

              return (
                <button
                  key={verseNum}
                  onClick={() => handleVerseSelect(verseNum)}
                  disabled={!available}
                  aria-label={`절 ${verseNum}${available ? '' : ' (분석 안됨)'}`}
                  className={`
                    min-h-[44px] min-w-[44px] rounded-md text-sm font-medium
                    transition-all duration-200
                    ${
                      isSelected
                        ? 'bg-primary text-primary-foreground shadow-md scale-105'
                        : available
                          ? 'bg-secondary hover:bg-secondary/80 hover:scale-105 cursor-pointer'
                          : 'bg-muted opacity-40 cursor-not-allowed'
                    }
                  `}
                >
                  {verseNum}
                </button>
              )
            })}
          </div>
        </CardContent>
      </Card>
    )
  }

  return null
}
