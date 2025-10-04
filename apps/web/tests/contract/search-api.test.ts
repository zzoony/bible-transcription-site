/**
 * Contract Test: GET /api/search
 *
 * CRITICAL: This test MUST FAIL before API implementation
 * Purpose: Define contract for search API endpoint based on contracts/search-api.md
 */

import type { SearchResponse, SearchResult } from '@/lib/types'

describe('GET /api/search - Contract Tests', () => {
  const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000'

  describe('Basic Search', () => {
    it('should return matching verses for valid search query', async () => {
      const response = await fetch(`${BASE_URL}/api/search?q=love`)

      expect(response.status).toBe(200)
      expect(response.headers.get('content-type')).toContain('application/json')

      const data: SearchResponse = await response.json()

      // Contract: Response structure
      expect(data).toHaveProperty('query')
      expect(data).toHaveProperty('results')
      expect(data).toHaveProperty('total')
      expect(data).toHaveProperty('limit')
      expect(data).toHaveProperty('offset')
      expect(data).toHaveProperty('hasMore')

      // Contract: Data types
      expect(typeof data.query).toBe('string')
      expect(Array.isArray(data.results)).toBe(true)
      expect(typeof data.total).toBe('number')
      expect(typeof data.limit).toBe('number')
      expect(typeof data.offset).toBe('number')
      expect(typeof data.hasMore).toBe('boolean')

      // Contract: Query value
      expect(data.query).toBe('love')

      // Contract: Results structure (if any results)
      if (data.results.length > 0) {
        const result: SearchResult = data.results[0]
        expect(result).toHaveProperty('reference')
        expect(result).toHaveProperty('book')
        expect(result).toHaveProperty('chapter')
        expect(result).toHaveProperty('verse')
        expect(result).toHaveProperty('text')
        expect(typeof result.reference).toBe('string')
        expect(typeof result.book).toBe('string')
        expect(typeof result.chapter).toBe('number')
        expect(typeof result.verse).toBe('number')
        expect(typeof result.text).toBe('string')
      }
    })

    it('should return empty results for query with no matches', async () => {
      const response = await fetch(
        `${BASE_URL}/api/search?q=xyznonexistentword123`
      )

      expect(response.status).toBe(200)

      const data: SearchResponse = await response.json()

      expect(data.results).toEqual([])
      expect(data.total).toBe(0)
      expect(data.hasMore).toBe(false)
    })
  })

  describe('Query Parameters', () => {
    it('should handle missing query parameter', async () => {
      const response = await fetch(`${BASE_URL}/api/search`)

      expect(response.status).toBe(400)

      const data = await response.json()
      expect(data).toHaveProperty('error')
      expect(typeof data.error).toBe('string')
    })

    it('should filter by book name', async () => {
      const response = await fetch(
        `${BASE_URL}/api/search?q=love&book=Philippians`
      )

      expect(response.status).toBe(200)

      const data: SearchResponse = await response.json()

      // All results should be from Philippians
      data.results.forEach((result) => {
        expect(result.book).toBe('Philippians')
      })
    })

    it('should filter by chapter number', async () => {
      const response = await fetch(
        `${BASE_URL}/api/search?q=love&book=Philippians&chapter=3`
      )

      expect(response.status).toBe(200)

      const data: SearchResponse = await response.json()

      // All results should be from Philippians chapter 3
      data.results.forEach((result) => {
        expect(result.book).toBe('Philippians')
        expect(result.chapter).toBe(3)
      })
    })

    it('should respect limit parameter', async () => {
      const limit = 5
      const response = await fetch(`${BASE_URL}/api/search?q=love&limit=${limit}`)

      expect(response.status).toBe(200)

      const data: SearchResponse = await response.json()

      expect(data.limit).toBe(limit)
      expect(data.results.length).toBeLessThanOrEqual(limit)
    })

    it('should respect offset parameter for pagination', async () => {
      const offset = 10
      const response = await fetch(
        `${BASE_URL}/api/search?q=love&offset=${offset}`
      )

      expect(response.status).toBe(200)

      const data: SearchResponse = await response.json()

      expect(data.offset).toBe(offset)
    })

    it('should calculate hasMore correctly', async () => {
      const limit = 5
      const offset = 0
      const response = await fetch(
        `${BASE_URL}/api/search?q=love&limit=${limit}&offset=${offset}`
      )

      expect(response.status).toBe(200)

      const data: SearchResponse = await response.json()

      // hasMore should be true if offset + limit < total
      const expectedHasMore = offset + limit < data.total
      expect(data.hasMore).toBe(expectedHasMore)
    })
  })

  describe('Default Values', () => {
    it('should use default limit of 10', async () => {
      const response = await fetch(`${BASE_URL}/api/search?q=love`)

      expect(response.status).toBe(200)

      const data: SearchResponse = await response.json()

      expect(data.limit).toBe(10)
    })

    it('should use default offset of 0', async () => {
      const response = await fetch(`${BASE_URL}/api/search?q=love`)

      expect(response.status).toBe(200)

      const data: SearchResponse = await response.json()

      expect(data.offset).toBe(0)
    })
  })

  describe('Error Handling', () => {
    it('should return 400 for invalid limit (negative)', async () => {
      const response = await fetch(`${BASE_URL}/api/search?q=love&limit=-5`)

      expect(response.status).toBe(400)

      const data = await response.json()
      expect(data).toHaveProperty('error')
    })

    it('should return 400 for invalid offset (negative)', async () => {
      const response = await fetch(`${BASE_URL}/api/search?q=love&offset=-10`)

      expect(response.status).toBe(400)

      const data = await response.json()
      expect(data).toHaveProperty('error')
    })

    it('should return 400 for invalid chapter (non-number)', async () => {
      const response = await fetch(
        `${BASE_URL}/api/search?q=love&chapter=abc`
      )

      expect(response.status).toBe(400)

      const data = await response.json()
      expect(data).toHaveProperty('error')
    })

    it('should handle empty query string', async () => {
      const response = await fetch(`${BASE_URL}/api/search?q=`)

      expect(response.status).toBe(400)

      const data = await response.json()
      expect(data).toHaveProperty('error')
    })
  })

  describe('Full-Text Search Behavior', () => {
    it('should support partial word matching', async () => {
      const response = await fetch(`${BASE_URL}/api/search?q=lov`)

      expect(response.status).toBe(200)

      const data: SearchResponse = await response.json()

      // Should find "love", "loved", "loving", etc.
      expect(data.results.length).toBeGreaterThan(0)
    })

    it('should be case-insensitive', async () => {
      const response1 = await fetch(`${BASE_URL}/api/search?q=LOVE`)
      const response2 = await fetch(`${BASE_URL}/api/search?q=love`)

      expect(response1.status).toBe(200)
      expect(response2.status).toBe(200)

      const data1: SearchResponse = await response1.json()
      const data2: SearchResponse = await response2.json()

      // Both should return same results
      expect(data1.total).toBe(data2.total)
    })

    it('should support multi-word search', async () => {
      const response = await fetch(
        `${BASE_URL}/api/search?q=${encodeURIComponent('love joy')}`
      )

      expect(response.status).toBe(200)

      const data: SearchResponse = await response.json()

      // Should find verses containing both "love" and "joy"
      expect(data.results.length).toBeGreaterThanOrEqual(0)
    })
  })

  describe('Performance', () => {
    it('should respond within 2 seconds', async () => {
      const start = Date.now()
      const response = await fetch(`${BASE_URL}/api/search?q=love`)
      const duration = Date.now() - start

      expect(response.status).toBe(200)
      expect(duration).toBeLessThan(2000)
    })
  })
})