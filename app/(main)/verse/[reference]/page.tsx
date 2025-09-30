'use client'

import { useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { VerseDetail } from '@/components/verse/VerseDetail'
import { useVerse } from '@/hooks/useVerse'
import { Card, CardContent } from '@/components/ui/card'

export default function VersePage() {
  const router = useRouter()
  const params = useParams()
  const reference = params.reference as string

  const { data, isLoading, error, fetchVerse } = useVerse()

  useEffect(() => {
    if (reference) {
      fetchVerse(reference)
    }
  }, [reference, fetchVerse])

  const handleBack = () => {
    router.back()
  }

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
              book: '',
              chapter: 0,
              verse: 0,
              text: '',
            },
            sentence_structure: null,
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
        isLoading={isLoading}
      />
    </div>
  )
}