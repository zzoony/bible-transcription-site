'use client'

import { VerseAnalysis } from '@/lib/types'
import { AnalysisDisplay } from './AnalysisDisplay'
import { ShareModal } from './ShareModal'
import { NavigationControls } from '@/components/navigation/NavigationControls'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Copy, Share2 } from 'lucide-react'
import { useState } from 'react'

export interface VerseDetailProps {
  analysis: VerseAnalysis
  onBack?: () => void
  onCopy?: () => void
  onShare?: () => void
  onNavigate?: (reference: string) => void
  navigationState?: {
    prev: string | null
    next: string | null
    hasPrev: boolean
    hasNext: boolean
    isLoading: boolean
  }
  isLoading?: boolean
  className?: string
}

export function VerseDetail({
  analysis,
  onBack,
  onCopy,
  onShare,
  onNavigate,
  navigationState,
  isLoading = false,
  className,
}: VerseDetailProps) {
  const [copySuccess, setCopySuccess] = useState(false)
  const [shareModalOpen, setShareModalOpen] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(
        `${analysis.verse.book} ${analysis.verse.chapter}:${analysis.verse.verse}\n${analysis.verse.text}`
      )
      setCopySuccess(true)
      onCopy?.()

      setTimeout(() => setCopySuccess(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const handleShare = () => {
    setShareModalOpen(true)
    onShare?.()
  }

  if (isLoading) {
    return (
      <div
        className="flex items-center justify-center py-12"
        data-testid="verse-loading"
      >
        <div className="text-muted-foreground">Loading verse analysis...</div>
      </div>
    )
  }

  // 현재 구절 참조 문자열 생성
  const currentReference = `${analysis.verse.book} ${analysis.verse.chapter}:${analysis.verse.verse}`

  return (
    <div className={className} data-testid="verse-detail">
      {/* Header with Back Button */}
      <div className="mb-6 flex items-center justify-between">
        {onBack && (
          <Button
            variant="ghost"
            size="sm"
            onClick={onBack}
            data-testid="back-button"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            뒤로
          </Button>
        )}

        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleCopy}
            data-testid="copy-button"
          >
            <Copy className="h-4 w-4 mr-2" />
            {copySuccess ? '복사됨!' : '복사'}
          </Button>

          {onShare && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleShare}
              data-testid="share-button"
            >
              <Share2 className="h-4 w-4 mr-2" />
              공유
            </Button>
          )}
        </div>
      </div>

      {/* Navigation Controls - 상단 */}
      {navigationState && onNavigate && (
        <div className="mb-6">
          <NavigationControls
            currentReference={currentReference}
            prev={navigationState.prev}
            next={navigationState.next}
            hasPrev={navigationState.hasPrev}
            hasNext={navigationState.hasNext}
            isLoading={navigationState.isLoading}
            onNavigate={onNavigate}
          />
        </div>
      )}

      {/* Verse Reference and Text */}
      <div className="mb-8">
        <h1
          className="mb-4 text-2xl font-bold text-primary"
          data-testid="verse-reference"
        >
          {analysis.verse.book} {analysis.verse.chapter}:{analysis.verse.verse}
        </h1>
        <p
          className="text-lg leading-relaxed text-foreground"
          data-testid="verse-text"
        >
          {analysis.verse.text}
        </p>
      </div>

      {/* Analysis Display */}
      <div data-testid="analysis-container">
        <AnalysisDisplay analysis={analysis} />
      </div>

      {/* Navigation Controls - 하단 */}
      {navigationState && onNavigate && (
        <div className="mt-8">
          <NavigationControls
            currentReference={currentReference}
            prev={navigationState.prev}
            next={navigationState.next}
            hasPrev={navigationState.hasPrev}
            hasNext={navigationState.hasNext}
            isLoading={navigationState.isLoading}
            onNavigate={onNavigate}
          />
        </div>
      )}

      {/* Share Modal */}
      <ShareModal
        verse={analysis.verse}
        open={shareModalOpen}
        onOpenChange={setShareModalOpen}
      />
    </div>
  )
}