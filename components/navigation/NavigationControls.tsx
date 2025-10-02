'use client'

import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface NavigationControlsProps {
  /**
   * 현재 구절 참조
   */
  currentReference: string

  /**
   * 이전 구절 참조 (없으면 null)
   */
  prev: string | null

  /**
   * 다음 구절 참조 (없으면 null)
   */
  next: string | null

  /**
   * 이전 구절 존재 여부
   */
  hasPrev: boolean

  /**
   * 다음 구절 존재 여부
   */
  hasNext: boolean

  /**
   * 로딩 상태
   */
  isLoading?: boolean

  /**
   * 탐색 이벤트 핸들러
   * @param reference - 이동할 구절 참조
   */
  onNavigate: (reference: string) => void

  /**
   * 추가 클래스명
   */
  className?: string
}

/**
 * 구절 탐색 컨트롤 컴포넌트
 *
 * 이전/다음 구절로 이동할 수 있는 버튼을 제공합니다.
 * 접근성과 모바일 친화적 디자인을 고려하여 설계되었습니다.
 *
 * @example
 * <NavigationControls
 *   currentReference="Philippians 1:1"
 *   prev={null}
 *   next="Philippians 1:2"
 *   hasPrev={false}
 *   hasNext={true}
 *   onNavigate={(ref) => router.push(`/verse/${ref}`)}
 * />
 */
export function NavigationControls({
  currentReference,
  prev,
  next,
  hasPrev,
  hasNext,
  isLoading = false,
  onNavigate,
  className,
}: NavigationControlsProps) {
  const handlePrev = () => {
    if (prev && hasPrev && !isLoading) {
      onNavigate(prev)
    }
  }

  const handleNext = () => {
    if (next && hasNext && !isLoading) {
      onNavigate(next)
    }
  }

  return (
    <div
      className={cn('flex items-center justify-between gap-4', className)}
      data-testid="navigation-controls"
    >
      {/* 이전 버튼 */}
      <Button
        variant="outline"
        size="default"
        onClick={handlePrev}
        disabled={!hasPrev || isLoading}
        aria-label={prev ? `이전 구절로 이동: ${prev}` : '이전 구절 없음'}
        className="min-w-[100px] touch-manipulation"
        data-testid="nav-prev-button"
      >
        {isLoading ? (
          <Loader2 className="h-4 w-4 mr-2 animate-spin" />
        ) : (
          <ChevronLeft className="h-4 w-4 mr-2" />
        )}
        <span className="hidden sm:inline">이전</span>
        <span className="sm:hidden">이전</span>
      </Button>

      {/* 현재 위치 표시 (선택사항) */}
      <div
        className="flex-1 text-center text-sm text-muted-foreground hidden md:block"
        aria-live="polite"
        data-testid="nav-current-reference"
      >
        {currentReference}
      </div>

      {/* 다음 버튼 */}
      <Button
        variant="outline"
        size="default"
        onClick={handleNext}
        disabled={!hasNext || isLoading}
        aria-label={next ? `다음 구절로 이동: ${next}` : '다음 구절 없음'}
        className="min-w-[100px] touch-manipulation"
        data-testid="nav-next-button"
      >
        <span className="hidden sm:inline">다음</span>
        <span className="sm:hidden">다음</span>
        {isLoading ? (
          <Loader2 className="h-4 w-4 ml-2 animate-spin" />
        ) : (
          <ChevronRight className="h-4 w-4 ml-2" />
        )}
      </Button>
    </div>
  )
}
