'use client'

import { VerseAnalysis } from '@/lib/types'
import { AnalysisDisplay } from './AnalysisDisplay'
import { ShareModal } from './ShareModal'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Copy, Share2 } from 'lucide-react'
import { useState } from 'react'

export interface VerseDetailProps {
  analysis: VerseAnalysis
  onBack?: () => void
  onCopy?: () => void
  onShare?: () => void
  isLoading?: boolean
  className?: string
}

/**
 * Renders a detailed view of a verse including its reference, text, analysis, and action controls.
 *
 * Shows optional back, copy, and share actions, displays loading state when requested, and manages
 * copy success feedback and share modal visibility.
 *
 * @param analysis - The verse analysis containing verse metadata and text to display
 * @param onBack - Optional callback invoked when the Back button is clicked
 * @param onCopy - Optional callback invoked after a successful copy action
 * @param onShare - Optional callback invoked when the Share action is triggered
 * @param isLoading - If true, renders a loading placeholder instead of the verse content
 * @param className - Optional CSS class names applied to the outer container
 * @returns The rendered verse detail React element
 */
export function VerseDetail({
  analysis,
  onBack,
  onCopy,
  onShare,
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
            Back
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
            {copySuccess ? 'Copied!' : 'Copy'}
          </Button>

          {onShare && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleShare}
              data-testid="share-button"
            >
              <Share2 className="h-4 w-4 mr-2" />
              Share
            </Button>
          )}
        </div>
      </div>

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

      {/* Share Modal */}
      <ShareModal
        verse={analysis.verse}
        open={shareModalOpen}
        onOpenChange={setShareModalOpen}
      />
    </div>
  )
}