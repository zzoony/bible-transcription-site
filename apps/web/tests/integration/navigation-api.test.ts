/**
 * Navigation API 통합 테스트
 *
 * 테스트 범위:
 * 1. /api/verse/navigation 엔드포인트
 * 2. /api/navigation/structure 엔드포인트
 * 3. 다양한 엣지 케이스 및 오류 처리
 */

import { NextRequest } from 'next/server'
import { GET as navigationGET } from '@/app/api/verse/navigation/route'
import { GET as structureGET } from '@/app/api/navigation/structure/route'
import { createServerClient } from '@/lib/supabase'

// Supabase 클라이언트 모킹
jest.mock('@/lib/supabase', () => ({
  createServerClient: jest.fn(),
}))

describe('Navigation API 통합 테스트', () => {
  let mockSupabaseClient: any

  beforeEach(() => {
    // Supabase 클라이언트 모킹 초기화
    mockSupabaseClient = {
      from: jest.fn().mockReturnThis(),
      select: jest.fn().mockReturnThis(),
      ilike: jest.fn().mockReturnThis(),
      order: jest.fn().mockReturnThis(),
      returns: jest.fn().mockResolvedValue({ data: null, error: null }),
    }

    ;(createServerClient as jest.Mock).mockReturnValue(mockSupabaseClient)
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('/api/verse/navigation 엔드포인트', () => {
    const mockGalatiansVerses = [
      { reference: 'Galatians 1:1', verse_number: 1 },
      { reference: 'Galatians 1:2', verse_number: 2 },
      { reference: 'Galatians 1:3', verse_number: 3 },
      { reference: 'Galatians 2:1', verse_number: 1 },
      { reference: 'Galatians 2:2', verse_number: 2 },
    ]

    const createRequest = (reference: string, direction: string) => {
      const url = `http://localhost:3000/api/verse/navigation?reference=${encodeURIComponent(
        reference
      )}&direction=${direction}`
      return new NextRequest(url)
    }

    describe('정상 동작', () => {
      it('다음 구절을 올바르게 조회해야 함 (같은 장)', async () => {
        mockSupabaseClient.returns.mockResolvedValue({
          data: mockGalatiansVerses,
          error: null,
        })

        const request = createRequest('Galatians 1:1', 'next')
        const response = await navigationGET(request)
        const data = await response.json()

        expect(response.status).toBe(200)
        expect(data).toEqual({
          current: 'Galatians 1:1',
          target: 'Galatians 1:2',
          hasTarget: true,
        })
      })

      it('이전 구절을 올바르게 조회해야 함 (같은 장)', async () => {
        mockSupabaseClient.returns.mockResolvedValue({
          data: mockGalatiansVerses,
          error: null,
        })

        const request = createRequest('Galatians 1:2', 'prev')
        const response = await navigationGET(request)
        const data = await response.json()

        expect(response.status).toBe(200)
        expect(data).toEqual({
          current: 'Galatians 1:2',
          target: 'Galatians 1:1',
          hasTarget: true,
        })
      })

      it('장 경계를 넘어 다음 구절을 조회해야 함', async () => {
        mockSupabaseClient.returns.mockResolvedValue({
          data: mockGalatiansVerses,
          error: null,
        })

        const request = createRequest('Galatians 1:3', 'next')
        const response = await navigationGET(request)
        const data = await response.json()

        expect(response.status).toBe(200)
        expect(data).toEqual({
          current: 'Galatians 1:3',
          target: 'Galatians 2:1',
          hasTarget: true,
        })
      })

      it('장 경계를 넘어 이전 구절을 조회해야 함', async () => {
        mockSupabaseClient.returns.mockResolvedValue({
          data: mockGalatiansVerses,
          error: null,
        })

        const request = createRequest('Galatians 2:1', 'prev')
        const response = await navigationGET(request)
        const data = await response.json()

        expect(response.status).toBe(200)
        expect(data).toEqual({
          current: 'Galatians 2:1',
          target: 'Galatians 1:3',
          hasTarget: true,
        })
      })

      it('응답에 캐싱 헤더가 포함되어야 함', async () => {
        mockSupabaseClient.returns.mockResolvedValue({
          data: mockGalatiansVerses,
          error: null,
        })

        const request = createRequest('Galatians 1:1', 'next')
        const response = await navigationGET(request)

        expect(response.headers.get('Cache-Control')).toBe(
          'public, max-age=3600, s-maxage=7200'
        )
      })
    })

    describe('엣지 케이스', () => {
      it('첫 구절 이전은 null을 반환해야 함', async () => {
        mockSupabaseClient.returns.mockResolvedValue({
          data: mockGalatiansVerses,
          error: null,
        })

        const request = createRequest('Galatians 1:1', 'prev')
        const response = await navigationGET(request)
        const data = await response.json()

        expect(response.status).toBe(200)
        expect(data).toEqual({
          current: 'Galatians 1:1',
          target: null,
          hasTarget: false,
        })
      })

      it('마지막 구절 다음은 null을 반환해야 함', async () => {
        mockSupabaseClient.returns.mockResolvedValue({
          data: mockGalatiansVerses,
          error: null,
        })

        const request = createRequest('Galatians 2:2', 'next')
        const response = await navigationGET(request)
        const data = await response.json()

        expect(response.status).toBe(200)
        expect(data).toEqual({
          current: 'Galatians 2:2',
          target: null,
          hasTarget: false,
        })
      })
    })

    describe('오류 처리', () => {
      it('reference 파라미터 누락 시 400 오류를 반환해야 함', async () => {
        const request = new NextRequest(
          'http://localhost:3000/api/verse/navigation?direction=next'
        )
        const response = await navigationGET(request)
        const data = await response.json()

        expect(response.status).toBe(400)
        expect(data.error).toBe('구절 참조(reference)가 필요합니다')
      })

      it('direction 파라미터 누락 시 400 오류를 반환해야 함', async () => {
        const request = new NextRequest(
          'http://localhost:3000/api/verse/navigation?reference=Galatians%201:1'
        )
        const response = await navigationGET(request)
        const data = await response.json()

        expect(response.status).toBe(400)
        expect(data.error).toBe('direction은 "next" 또는 "prev"여야 합니다')
      })

      it('잘못된 direction 값 시 400 오류를 반환해야 함', async () => {
        const request = createRequest('Galatians 1:1', 'invalid')
        const response = await navigationGET(request)
        const data = await response.json()

        expect(response.status).toBe(400)
        expect(data.error).toBe('direction은 "next" 또는 "prev"여야 합니다')
      })

      it('잘못된 reference 형식 시 400 오류를 반환해야 함', async () => {
        const request = createRequest('InvalidFormat', 'next')
        const response = await navigationGET(request)
        const data = await response.json()

        expect(response.status).toBe(400)
        expect(data.error).toContain('잘못된 구절 참조 형식입니다')
      })

      it('존재하지 않는 책 이름 시 404 오류를 반환해야 함', async () => {
        mockSupabaseClient.returns.mockResolvedValue({
          data: [],
          error: null,
        })

        const request = createRequest('NonExistentBook 1:1', 'next')
        const response = await navigationGET(request)
        const data = await response.json()

        expect(response.status).toBe(404)
        expect(data.error).toBe('해당 책의 구절을 찾을 수 없습니다')
      })

      it('존재하지 않는 구절 시 404 오류를 반환해야 함', async () => {
        mockSupabaseClient.returns.mockResolvedValue({
          data: mockGalatiansVerses,
          error: null,
        })

        const request = createRequest('Galatians 10:99', 'next')
        const response = await navigationGET(request)
        const data = await response.json()

        expect(response.status).toBe(404)
        expect(data.error).toBe('현재 구절을 찾을 수 없습니다')
      })

      it('데이터베이스 오류 시 500 오류를 반환해야 함', async () => {
        mockSupabaseClient.returns.mockResolvedValue({
          data: null,
          error: { message: 'Database error' },
        })

        const request = createRequest('Galatians 1:1', 'next')
        const response = await navigationGET(request)
        const data = await response.json()

        expect(response.status).toBe(500)
        expect(data.error).toBe('데이터베이스 조회 중 오류가 발생했습니다')
      })
    })
  })

  describe('/api/navigation/structure 엔드포인트', () => {
    const mockVerses = [
      { id: 1, reference: 'Philippians 1:1', verse_number: 1 },
      { id: 2, reference: 'Philippians 1:2', verse_number: 2 },
      { id: 3, reference: 'Philippians 2:1', verse_number: 1 },
      { id: 4, reference: 'Galatians 1:1', verse_number: 1 },
      { id: 5, reference: 'Galatians 1:2', verse_number: 2 },
    ]

    const createRequest = () => {
      return new NextRequest('http://localhost:3000/api/navigation/structure')
    }

    describe('정상 동작', () => {
      it('전체 성경 구조를 올바르게 반환해야 함', async () => {
        mockSupabaseClient.returns.mockResolvedValue({
          data: mockVerses,
          error: null,
        })

        const request = createRequest()
        const response = await structureGET(request)
        const data = await response.json()

        expect(response.status).toBe(200)
        expect(data.books).toBeDefined()
        expect(Array.isArray(data.books)).toBe(true)
      })

      it('책 개수가 정확해야 함', async () => {
        mockSupabaseClient.returns.mockResolvedValue({
          data: mockVerses,
          error: null,
        })

        const request = createRequest()
        const response = await structureGET(request)
        const data = await response.json()

        expect(data.books).toHaveLength(2) // Philippians, Galatians
      })

      it('책 데이터 구조가 올바라야 함', async () => {
        mockSupabaseClient.returns.mockResolvedValue({
          data: mockVerses,
          error: null,
        })

        const request = createRequest()
        const response = await structureGET(request)
        const data = await response.json()

        const book = data.books[0]
        expect(book).toHaveProperty('id')
        expect(book).toHaveProperty('name')
        expect(book).toHaveProperty('nameKorean')
        expect(book).toHaveProperty('chapters')
        expect(Array.isArray(book.chapters)).toBe(true)
      })

      it('장 데이터 구조가 올바라야 함', async () => {
        mockSupabaseClient.returns.mockResolvedValue({
          data: mockVerses,
          error: null,
        })

        const request = createRequest()
        const response = await structureGET(request)
        const data = await response.json()

        const chapter = data.books[0].chapters[0]
        expect(chapter).toHaveProperty('number')
        expect(chapter).toHaveProperty('totalVerses')
        expect(chapter).toHaveProperty('availableVerses')
        expect(Array.isArray(chapter.availableVerses)).toBe(true)
      })

      it('한글 책 이름이 올바르게 매핑되어야 함', async () => {
        mockSupabaseClient.returns.mockResolvedValue({
          data: mockVerses,
          error: null,
        })

        const request = createRequest()
        const response = await structureGET(request)
        const data = await response.json()

        const philippians = data.books.find(
          (b: any) => b.name === 'Philippians'
        )
        expect(philippians?.nameKorean).toBe('빌립보서')

        const galatians = data.books.find((b: any) => b.name === 'Galatians')
        expect(galatians?.nameKorean).toBe('갈라디아서')
      })

      it('사용 가능한 절 번호가 정렬되어야 함', async () => {
        mockSupabaseClient.returns.mockResolvedValue({
          data: [
            { id: 1, reference: 'Philippians 1:3', verse_number: 3 },
            { id: 2, reference: 'Philippians 1:1', verse_number: 1 },
            { id: 3, reference: 'Philippians 1:2', verse_number: 2 },
          ],
          error: null,
        })

        const request = createRequest()
        const response = await structureGET(request)
        const data = await response.json()

        const chapter = data.books[0].chapters[0]
        expect(chapter.availableVerses).toEqual([1, 2, 3])
      })

      it('응답에 캐싱 헤더가 포함되어야 함', async () => {
        mockSupabaseClient.returns.mockResolvedValue({
          data: mockVerses,
          error: null,
        })

        const request = createRequest()
        const response = await structureGET(request)

        expect(response.headers.get('Cache-Control')).toBe(
          'public, max-age=3600, s-maxage=7200'
        )
      })
    })

    describe('오류 처리', () => {
      it('구절 데이터가 없을 때 404 오류를 반환해야 함', async () => {
        mockSupabaseClient.returns.mockResolvedValue({
          data: [],
          error: null,
        })

        const request = createRequest()
        const response = await structureGET(request)
        const data = await response.json()

        expect(response.status).toBe(404)
        expect(data.error).toBe('구절 데이터가 없습니다')
      })

      it('데이터베이스 오류 시 500 오류를 반환해야 함', async () => {
        mockSupabaseClient.returns.mockResolvedValue({
          data: null,
          error: { message: 'Database error' },
        })

        const request = createRequest()
        const response = await structureGET(request)
        const data = await response.json()

        expect(response.status).toBe(500)
        expect(data.error).toBe('데이터베이스 조회 중 오류가 발생했습니다')
      })

      it('잘못된 reference 형식은 경고만 출력하고 건너뛰어야 함', async () => {
        const consoleSpy = jest.spyOn(console, 'warn').mockImplementation()

        mockSupabaseClient.returns.mockResolvedValue({
          data: [
            { id: 1, reference: 'Invalid Format', verse_number: 1 },
            { id: 2, reference: 'Philippians 1:1', verse_number: 1 },
          ],
          error: null,
        })

        const request = createRequest()
        const response = await structureGET(request)
        const data = await response.json()

        expect(response.status).toBe(200)
        expect(data.books).toHaveLength(1) // Invalid 항목은 제외
        expect(consoleSpy).toHaveBeenCalledWith(
          expect.stringContaining('잘못된 reference 형식')
        )

        consoleSpy.mockRestore()
      })
    })

    describe('정렬 및 순서', () => {
      it('책이 신약 성경 순서대로 정렬되어야 함', async () => {
        mockSupabaseClient.returns.mockResolvedValue({
          data: [
            { id: 1, reference: 'Galatians 1:1', verse_number: 1 },
            { id: 2, reference: 'Romans 1:1', verse_number: 1 },
            { id: 3, reference: 'Philippians 1:1', verse_number: 1 },
          ],
          error: null,
        })

        const request = createRequest()
        const response = await structureGET(request)
        const data = await response.json()

        const bookNames = data.books.map((b: any) => b.name)
        expect(bookNames).toEqual(['Romans', 'Galatians', 'Philippians'])
      })

      it('장이 번호 순서대로 정렬되어야 함', async () => {
        mockSupabaseClient.returns.mockResolvedValue({
          data: [
            { id: 1, reference: 'Philippians 3:1', verse_number: 1 },
            { id: 2, reference: 'Philippians 1:1', verse_number: 1 },
            { id: 3, reference: 'Philippians 2:1', verse_number: 1 },
          ],
          error: null,
        })

        const request = createRequest()
        const response = await structureGET(request)
        const data = await response.json()

        const chapterNumbers = data.books[0].chapters.map((c: any) => c.number)
        expect(chapterNumbers).toEqual([1, 2, 3])
      })
    })
  })
})
