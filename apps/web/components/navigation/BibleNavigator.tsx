'use client'

import { useMemo } from 'react'
import { useBibleStructure } from '@/hooks/useBibleStructure'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { ArrowRight, Loader2 } from 'lucide-react'

interface BibleNavigatorProps {
  onNavigate: (reference: string) => void
}

/**
 * BibleNavigator 컴포넌트
 *
 * 책/장/절을 선택하여 특정 구절로 이동하는 네비게이션 컴포넌트
 * 하이브리드 UI: 드롭다운(책/장) + 그리드(절)
 */
export function BibleNavigator({ onNavigate }: BibleNavigatorProps) {
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

  /**
   * 절 그리드 생성 (1부터 totalVerses까지)
   */
  const verseGrid = useMemo(() => {
    if (!selectedChapter) return []

    const maxVerse = Math.max(
      ...selectedChapter.availableVerses,
      selectedChapter.totalVerses
    )

    return Array.from({ length: maxVerse }, (_, i) => i + 1)
  }, [selectedChapter])

  /**
   * 최종 reference 생성
   */
  const currentReference = useMemo(() => {
    if (!selectedBook || !selectedChapter || selectedVerse === null) {
      return null
    }
    return `${selectedBook.name} ${selectedChapter.number}:${selectedVerse}`
  }, [selectedBook, selectedChapter, selectedVerse])

  /**
   * Go 버튼 클릭 핸들러
   */
  const handleNavigate = () => {
    if (currentReference) {
      onNavigate(currentReference)
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
   * 메인 UI
   */
  return (
    <Card>
      <CardHeader>
        <CardTitle>성경 구절 찾아보기</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* 1단계: 책 선택 */}
        <div className="space-y-2">
          <label className="text-sm font-medium">1️⃣ 책 선택</label>
          <Select
            value={selectedBook?.name}
            onValueChange={(bookName) => {
              const book = books.find((b) => b.name === bookName)
              setSelectedBook(book || null)
            }}
          >
            <SelectTrigger aria-label="책 선택">
              <SelectValue placeholder="책을 선택하세요" />
            </SelectTrigger>
            <SelectContent>
              {books.map((book) => (
                <SelectItem key={book.id} value={book.name}>
                  {book.name} ({book.nameKorean})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* 2단계: 장 선택 */}
        {selectedBook && (
          <div className="space-y-2 border-t pt-6">
            <label className="text-sm font-medium">2️⃣ 장 선택</label>
            <Select
              value={selectedChapter?.number.toString()}
              onValueChange={(chapterNum) => {
                const chapter = selectedBook.chapters.find(
                  (c) => c.number === parseInt(chapterNum, 10)
                )
                setSelectedChapter(chapter || null)
              }}
            >
              <SelectTrigger aria-label="장 선택">
                <SelectValue placeholder="장을 선택하세요" />
              </SelectTrigger>
              <SelectContent>
                {selectedBook.chapters.map((chapter) => (
                  <SelectItem
                    key={chapter.number}
                    value={chapter.number.toString()}
                  >
                    Chapter {chapter.number}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        )}

        {/* 3단계: 절 선택 */}
        {selectedChapter && (
          <div className="space-y-3 border-t pt-6">
            <label className="text-sm font-medium">3️⃣ 절 선택</label>

            {/* 절 그리드 */}
            <div className="grid grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-2">
              {verseGrid.map((verseNum) => {
                const available = isVerseAvailable(verseNum)
                const isSelected = selectedVerse === verseNum

                return (
                  <button
                    key={verseNum}
                    onClick={() => available && setSelectedVerse(verseNum)}
                    disabled={!available}
                    aria-label={`절 ${verseNum}${available ? '' : ' (분석 안됨)'}`}
                    className={`
                      min-h-[44px] min-w-[44px] rounded-md text-sm font-medium
                      transition-all duration-200
                      ${
                        isSelected
                          ? 'bg-primary text-primary-foreground shadow-md scale-105'
                          : available
                            ? 'bg-secondary hover:bg-secondary/80 hover:scale-105'
                            : 'bg-muted opacity-40 cursor-not-allowed'
                      }
                    `}
                  >
                    {verseNum}
                  </button>
                )
              })}
            </div>

            {/* 사용 가능한 절 정보 */}
            {selectedChapter.availableVerses.length > 0 && (
              <div className="flex items-start gap-2 p-3 bg-muted/50 rounded-md">
                <span className="text-lg">💡</span>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">
                    <strong>Available:</strong> {getAvailableVerseRange()}
                  </p>
                </div>
              </div>
            )}

            {/* Go 버튼 */}
            {currentReference && (
              <Button
                onClick={handleNavigate}
                disabled={!selectedVerse || !isVerseAvailable(selectedVerse)}
                className="w-full"
                size="lg"
              >
                <ArrowRight className="mr-2 h-4 w-4" />
                {currentReference}로 이동
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}
