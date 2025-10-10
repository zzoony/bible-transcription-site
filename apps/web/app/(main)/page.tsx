'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { SearchBar } from '@/components/search/SearchBar'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { BibleBookGrid } from '@/components/navigation/BibleBookGrid'

export default function HomePage() {
  const router = useRouter()
  const [recentSearches, setRecentSearches] = useState<string[]>([])

  const handleSearch = (query: string) => {
    // Add to recent searches
    setRecentSearches((prev) => {
      const updated = [query, ...prev.filter((q) => q !== query)].slice(0, 5)
      // Store in localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('recentSearches', JSON.stringify(updated))
      }
      return updated
    })

    // Navigate to search results
    router.push(`/search?q=${encodeURIComponent(query)}`)
  }

  const handleRecentSearchClick = (query: string) => {
    router.push(`/search?q=${encodeURIComponent(query)}`)
  }

  const handleNavigate = (reference: string) => {
    router.push(`/verse/${encodeURIComponent(reference)}`)
  }

  // Load recent searches from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('recentSearches')
      if (stored) {
        try {
          setRecentSearches(JSON.parse(stored))
        } catch (e) {
          console.error('Failed to parse recent searches:', e)
        }
      }
    }
  }, [])

  return (
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-foreground">
          Bible Transcription Site
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Explore detailed linguistic analysis of Bible verses with Korean
          translations and contextual explanations
        </p>

        {/* Search Bar */}
        <SearchBar
          onSearch={handleSearch}
          placeholder="Search for Bible verses..."
          className="max-w-2xl mx-auto"
        />
      </div>

      {/* Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Sentence Structure</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Semantic classification with grammatical explanations
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Vocabulary Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              IPA pronunciation with Korean phonetic representations
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Korean Translation</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Natural Korean translations with contextual background
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Bible Book Grid */}
      <div className="mb-12">
        <BibleBookGrid onNavigate={handleNavigate} />
      </div>

      {/* Recent Searches */}
      {recentSearches.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Recent Searches</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {recentSearches.map((query, index) => (
                <button
                  key={index}
                  onClick={() => handleRecentSearchClick(query)}
                  className="px-3 py-1 text-sm rounded-md bg-secondary hover:bg-secondary/80 transition-colors"
                >
                  {query}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}