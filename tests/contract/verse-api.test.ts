/**
 * Contract Test: GET /api/verse/[reference]
 *
 * CRITICAL: This test MUST FAIL before API implementation
 * Purpose: Define contract for verse analysis API based on contracts/verse-api.md
 */

import type { VerseAnalysisResponse, VerseAnalysis } from '@/lib/types'

describe('GET /api/verse/[reference] - Contract Tests', () => {
  const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'

  describe('Valid Verse Reference', () => {
    it('should return complete analysis for existing verse', async () => {
      const reference = 'philippians-3-1'
      const response = await fetch(`${BASE_URL}/api/verse/${reference}`)

      expect(response.status).toBe(200)
      expect(response.headers.get('content-type')).toContain('application/json')

      const data: VerseAnalysisResponse = await response.json()

      // Contract: Response structure
      expect(data).toHaveProperty('reference')
      expect(data).toHaveProperty('found')
      expect(data).toHaveProperty('data')

      // Contract: Data types
      expect(typeof data.reference).toBe('string')
      expect(typeof data.found).toBe('boolean')

      // Contract: Found verse
      expect(data.found).toBe(true)
      expect(data.data).not.toBeNull()

      const analysis: VerseAnalysis = data.data!

      // Contract: Verse entity
      expect(analysis.verse).toBeDefined()
      expect(analysis.verse).toHaveProperty('reference')
      expect(analysis.verse).toHaveProperty('book')
      expect(analysis.verse).toHaveProperty('chapter')
      expect(analysis.verse).toHaveProperty('verse')
      expect(analysis.verse).toHaveProperty('text')

      // Contract: Related entities (may be null if not analyzed yet)
      expect(analysis).toHaveProperty('sentence_structure')
      expect(analysis).toHaveProperty('vocabulary')
      expect(analysis).toHaveProperty('contextual_explanation')
      expect(analysis).toHaveProperty('korean_translation')
      expect(analysis).toHaveProperty('special_explanation')

      // If analysis exists, check structure
      if (analysis.sentence_structure) {
        expect(analysis.sentence_structure).toHaveProperty('structure_description')
        expect(typeof analysis.sentence_structure.structure_description).toBe(
          'string'
        )
      }

      // Vocabulary should be an array
      expect(Array.isArray(analysis.vocabulary)).toBe(true)

      // If vocabulary exists, check first item
      if (analysis.vocabulary.length > 0) {
        const vocab = analysis.vocabulary[0]
        expect(vocab).toHaveProperty('word')
        expect(vocab).toHaveProperty('pronunciation_ipa')
        expect(vocab).toHaveProperty('pronunciation_korean')
        expect(vocab).toHaveProperty('meaning')
      }

      if (analysis.contextual_explanation) {
        expect(analysis.contextual_explanation).toHaveProperty('explanation')
        expect(typeof analysis.contextual_explanation.explanation).toBe('string')
      }

      if (analysis.korean_translation) {
        expect(analysis.korean_translation).toHaveProperty('translation')
        expect(typeof analysis.korean_translation.translation).toBe('string')
      }

      if (analysis.special_explanation) {
        expect(analysis.special_explanation).toHaveProperty('explanation')
        expect(typeof analysis.special_explanation.explanation).toBe('string')
      }
    })

    it('should handle dash-separated reference format', async () => {
      const reference = 'philippians-3-1'
      const response = await fetch(`${BASE_URL}/api/verse/${reference}`)

      expect(response.status).toBe(200)

      const data: VerseAnalysisResponse = await response.json()

      expect(data.found).toBe(true)
      expect(data.data?.verse.book).toBe('Philippians')
      expect(data.data?.verse.chapter).toBe(3)
      expect(data.data?.verse.verse).toBe(1)
    })

    it('should handle URL-encoded reference format', async () => {
      const reference = encodeURIComponent('Philippians 3:1')
      const response = await fetch(`${BASE_URL}/api/verse/${reference}`)

      expect(response.status).toBe(200)

      const data: VerseAnalysisResponse = await response.json()

      expect(data.found).toBe(true)
      expect(data.data?.verse.book).toBe('Philippians')
    })
  })

  describe('Non-existent Verse Reference', () => {
    it('should return found=false for non-existent book', async () => {
      const reference = 'nonexistent-1-1'
      const response = await fetch(`${BASE_URL}/api/verse/${reference}`)

      expect(response.status).toBe(200)

      const data: VerseAnalysisResponse = await response.json()

      expect(data.found).toBe(false)
      expect(data.data).toBeNull()
    })

    it('should return found=false for invalid chapter/verse', async () => {
      const reference = 'philippians-999-999'
      const response = await fetch(`${BASE_URL}/api/verse/${reference}`)

      expect(response.status).toBe(200)

      const data: VerseAnalysisResponse = await response.json()

      expect(data.found).toBe(false)
      expect(data.data).toBeNull()
    })
  })

  describe('Invalid Reference Format', () => {
    it('should return 400 for malformed reference', async () => {
      const reference = 'invalid-reference-format'
      const response = await fetch(`${BASE_URL}/api/verse/${reference}`)

      expect(response.status).toBe(400)

      const data = await response.json()
      expect(data).toHaveProperty('error')
      expect(typeof data.error).toBe('string')
    })

    it('should return 400 for missing components', async () => {
      const reference = 'philippians-3'
      const response = await fetch(`${BASE_URL}/api/verse/${reference}`)

      expect(response.status).toBe(400)

      const data = await response.json()
      expect(data).toHaveProperty('error')
    })

    it('should return 400 for non-numeric chapter', async () => {
      const reference = 'philippians-abc-1'
      const response = await fetch(`${BASE_URL}/api/verse/${reference}`)

      expect(response.status).toBe(400)

      const data = await response.json()
      expect(data).toHaveProperty('error')
    })

    it('should return 400 for non-numeric verse', async () => {
      const reference = 'philippians-3-xyz'
      const response = await fetch(`${BASE_URL}/api/verse/${reference}`)

      expect(response.status).toBe(400)

      const data = await response.json()
      expect(data).toHaveProperty('error')
    })
  })

  describe('Case Sensitivity', () => {
    it('should handle case-insensitive book names', async () => {
      const reference1 = 'philippians-3-1'
      const reference2 = 'PHILIPPIANS-3-1'
      const reference3 = 'Philippians-3-1'

      const [response1, response2, response3] = await Promise.all([
        fetch(`${BASE_URL}/api/verse/${reference1}`),
        fetch(`${BASE_URL}/api/verse/${reference2}`),
        fetch(`${BASE_URL}/api/verse/${reference3}`),
      ])

      expect(response1.status).toBe(200)
      expect(response2.status).toBe(200)
      expect(response3.status).toBe(200)

      const [data1, data2, data3] = await Promise.all([
        response1.json(),
        response2.json(),
        response3.json(),
      ])

      expect(data1.found).toBe(true)
      expect(data2.found).toBe(true)
      expect(data3.found).toBe(true)

      // All should return same verse
      expect(data1.data?.verse.text).toBe(data2.data?.verse.text)
      expect(data2.data?.verse.text).toBe(data3.data?.verse.text)
    })
  })

  describe('Special Characters', () => {
    it('should handle book names with spaces (URL encoded)', async () => {
      const reference = encodeURIComponent('1 Corinthians 13:4')
      const response = await fetch(`${BASE_URL}/api/verse/${reference}`)

      // Should handle gracefully (200 with found=false or 400)
      expect([200, 400]).toContain(response.status)
    })
  })

  describe('Complete Analysis Structure', () => {
    it('should return all expected fields for fully analyzed verse', async () => {
      const reference = 'philippians-3-1'
      const response = await fetch(`${BASE_URL}/api/verse/${reference}`)

      expect(response.status).toBe(200)

      const data: VerseAnalysisResponse = await response.json()

      if (data.found && data.data) {
        const analysis = data.data

        // Verify complete structure
        expect(analysis).toMatchObject({
          verse: expect.objectContaining({
            reference: expect.any(String),
            book: expect.any(String),
            chapter: expect.any(Number),
            verse: expect.any(Number),
            text: expect.any(String),
          }),
          sentence_structure: expect.any(Object),
          vocabulary: expect.any(Array),
          contextual_explanation: expect.any(Object),
          korean_translation: expect.any(Object),
          special_explanation: expect.any(Object),
        })

        // Vocabulary items should have consistent structure
        analysis.vocabulary.forEach((item) => {
          expect(item).toMatchObject({
            word: expect.any(String),
            pronunciation_ipa: expect.any(String),
            pronunciation_korean: expect.any(String),
            meaning: expect.any(String),
          })
        })
      }
    })
  })

  describe('Performance', () => {
    it('should respond within 2 seconds', async () => {
      const reference = 'philippians-3-1'
      const start = Date.now()
      const response = await fetch(`${BASE_URL}/api/verse/${reference}`)
      const duration = Date.now() - start

      expect(response.status).toBe(200)
      expect(duration).toBeLessThan(2000)
    })
  })

  describe('Caching Headers', () => {
    it('should include appropriate cache headers', async () => {
      const reference = 'philippians-3-1'
      const response = await fetch(`${BASE_URL}/api/verse/${reference}`)

      expect(response.status).toBe(200)

      // Should have cache control for static content
      const cacheControl = response.headers.get('cache-control')
      expect(cacheControl).toBeTruthy()
    })
  })

  describe('Empty Analysis Handling', () => {
    it('should handle verses without analysis data gracefully', async () => {
      // Test with a verse that might not have full analysis
      const reference = 'genesis-1-1'
      const response = await fetch(`${BASE_URL}/api/verse/${reference}`)

      expect(response.status).toBe(200)

      const data: VerseAnalysisResponse = await response.json()

      if (data.found) {
        // Verse exists
        expect(data.data?.verse).toBeDefined()

        // Analysis fields can be null
        const nullableFields = [
          'sentence_structure',
          'contextual_explanation',
          'korean_translation',
          'special_explanation',
        ]

        nullableFields.forEach((field) => {
          expect(data.data).toHaveProperty(field)
          // Field can be null or object, but should exist
        })

        // Vocabulary should always be array (empty if no data)
        expect(Array.isArray(data.data?.vocabulary)).toBe(true)
      }
    })
  })
})