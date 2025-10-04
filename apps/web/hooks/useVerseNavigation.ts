'use client'

import { useState, useCallback, useEffect } from 'react'

/**
 * Navigation API 응답 타입
 */
interface NavigationApiResponse {
  current: string
  target: string | null
  hasTarget: boolean
}

/**
 * useVerseNavigation Hook 결과 타입
 */
export interface VerseNavigationResult {
  prev: string | null
  next: string | null
  hasPrev: boolean
  hasNext: boolean
  isLoading: boolean
  error: string | null
  fetchNavigation: () => Promise<void>
}

/**
 * 구절 탐색 Hook
 *
 * @param currentReference - 현재 구절 참조 (예: "Philippians 1:1")
 * @returns 이전/다음 구절 정보 및 상태
 *
 * @example
 * const { prev, next, hasPrev, hasNext, isLoading } = useVerseNavigation('Philippians 1:1')
 */
export function useVerseNavigation(
  currentReference: string | null | undefined
): VerseNavigationResult {
  const [prev, setPrev] = useState<string | null>(null)
  const [next, setNext] = useState<string | null>(null)
  const [hasPrev, setHasPrev] = useState(false)
  const [hasNext, setHasNext] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  /**
   * Navigation API 호출
   */
  const fetchNavigationData = useCallback(
    async (reference: string, direction: 'prev' | 'next') => {
      const url = `/api/verse/navigation?reference=${encodeURIComponent(
        reference
      )}&direction=${direction}`

      const response = await fetch(url)

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.error || `API 오류: ${response.status}`)
      }

      return (await response.json()) as NavigationApiResponse
    },
    []
  )

  /**
   * 이전/다음 구절 정보 가져오기
   */
  const fetchNavigation = useCallback(async () => {
    if (!currentReference) {
      setPrev(null)
      setNext(null)
      setHasPrev(false)
      setHasNext(false)
      return
    }

    setIsLoading(true)
    setError(null)

    try {
      // 이전/다음 구절을 병렬로 조회
      const [prevData, nextData] = await Promise.all([
        fetchNavigationData(currentReference, 'prev'),
        fetchNavigationData(currentReference, 'next'),
      ])

      setPrev(prevData.target)
      setHasPrev(prevData.hasTarget)

      setNext(nextData.target)
      setHasNext(nextData.hasTarget)
    } catch (err) {
      console.error('Navigation 조회 오류:', err)
      setError(err instanceof Error ? err.message : '탐색 정보를 불러올 수 없습니다')

      // 에러 시 초기화
      setPrev(null)
      setNext(null)
      setHasPrev(false)
      setHasNext(false)
    } finally {
      setIsLoading(false)
    }
  }, [currentReference, fetchNavigationData])

  // currentReference 변경 시 자동으로 navigation 정보 가져오기
  useEffect(() => {
    fetchNavigation()
  }, [fetchNavigation])

  return {
    prev,
    next,
    hasPrev,
    hasNext,
    isLoading,
    error,
    fetchNavigation,
  }
}
