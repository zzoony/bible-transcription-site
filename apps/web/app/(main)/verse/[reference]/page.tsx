'use client'

import { useEffect, useCallback } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { VerseDetail } from '@/components/verse/VerseDetail'
import { useVerse } from '@/hooks/useVerse'
import { useVerseNavigation } from '@/hooks/useVerseNavigation'
import { Card, CardContent } from '@/components/ui/card'

export default function VersePage() {
  const router = useRouter()
  const params = useParams()
  const reference = params.reference as string

  const { data, isLoading, error, fetchVerse } = useVerse()

  // Navigation hook 사용
  const {
    prev,
    next,
    hasPrev,
    hasNext,
    isLoading: navIsLoading,
  } = useVerseNavigation(data?.verse.reference)

  useEffect(() => {
    if (reference) {
      fetchVerse(reference)
    }
  }, [reference, fetchVerse])

  const handleBack = () => {
    router.back()
  }

  // Navigation 핸들러
  const handleNavigate = useCallback(
    (targetReference: string) => {
      // URL-safe 형식으로 변환 (공백을 %20으로)
      const encodedRef = encodeURIComponent(targetReference)
      router.push(`/verse/${encodedRef}`)
    },
    [router]
  )

  // 키보드 이벤트 핸들러
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // input, textarea 등에서는 키보드 이벤트 무시
      const target = event.target as HTMLElement
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.isContentEditable
      ) {
        return
      }

      // 왼쪽 방향키: 이전 구절
      if (event.key === 'ArrowLeft' && hasPrev && prev) {
        event.preventDefault()
        handleNavigate(prev)
      }

      // 오른쪽 방향키: 다음 구절
      if (event.key === 'ArrowRight' && hasNext && next) {
        event.preventDefault()
        handleNavigate(next)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [prev, next, hasPrev, hasNext, handleNavigate])

  const handleShare = () => {
    // Open share modal
    const shareData = {
      title: data
        ? `${data.verse.book} ${data.verse.chapter}:${data.verse.verse}`
        : 'Bible Verse',
      text: data?.verse.text || '',
      url: window.location.href,
    }

    if (navigator.share) {
      navigator.share(shareData).catch((err) => {
        console.error('Error sharing:', err)
      })
    } else {
      // Fallback: Copy link to clipboard
      navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    }
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto">
        <Card className="border-destructive">
          <CardContent className="py-12 text-center">
            <p className="text-lg text-destructive mb-4">
              Error loading verse
            </p>
            <p className="text-sm text-muted-foreground mb-6">{error}</p>
            <button
              onClick={handleBack}
              className="text-primary hover:underline"
            >
              Go back
            </button>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (isLoading || !data) {
    return (
      <div className="max-w-4xl mx-auto">
        <VerseDetail
          analysis={{
            verse: {
              reference: '',
              verse_number: 0,
              niv_text: '',
              book: '',
              chapter: 0,
              verse: 0,
              text: '',
            },
            sentence_structure: [],
            vocabulary: [],
            contextual_explanation: null,
            korean_translation: null,
            special_explanation: null,
          }}
          isLoading={true}
        />
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto">
      <VerseDetail
        analysis={data}
        onBack={handleBack}
        onShare={handleShare}
        onNavigate={handleNavigate}
        navigationState={{
          prev,
          next,
          hasPrev,
          hasNext,
          isLoading: navIsLoading,
        }}
        isLoading={isLoading}
      />
    </div>
  )
}