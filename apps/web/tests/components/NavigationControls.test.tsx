/**
 * NavigationControls 컴포넌트 테스트
 *
 * 테스트 범위:
 * 1. 렌더링 및 UI 요소
 * 2. 버튼 상호작용
 * 3. 접근성 (aria-label, disabled)
 * 4. 로딩 상태
 * 5. 반응형 디자인
 */

import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { NavigationControls } from '@/components/navigation/NavigationControls'

describe('NavigationControls 컴포넌트', () => {
  const defaultProps = {
    currentReference: 'Philippians 1:5',
    prev: 'Philippians 1:4',
    next: 'Philippians 1:6',
    hasPrev: true,
    hasNext: true,
    isLoading: false,
    onNavigate: jest.fn(),
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('렌더링', () => {
    it('컴포넌트가 렌더링되어야 함', () => {
      render(<NavigationControls {...defaultProps} />)

      expect(screen.getByTestId('navigation-controls')).toBeInTheDocument()
      expect(screen.getByTestId('nav-prev-button')).toBeInTheDocument()
      expect(screen.getByTestId('nav-next-button')).toBeInTheDocument()
    })

    it('이전 버튼이 렌더링되어야 함', () => {
      render(<NavigationControls {...defaultProps} />)

      const prevButton = screen.getByTestId('nav-prev-button')
      expect(prevButton).toHaveTextContent('이전')
    })

    it('다음 버튼이 렌더링되어야 함', () => {
      render(<NavigationControls {...defaultProps} />)

      const nextButton = screen.getByTestId('nav-next-button')
      expect(nextButton).toHaveTextContent('다음')
    })

    it('현재 구절 참조가 표시되어야 함', () => {
      render(<NavigationControls {...defaultProps} />)

      const currentRef = screen.getByTestId('nav-current-reference')
      expect(currentRef).toHaveTextContent('Philippians 1:5')
    })
  })

  describe('버튼 상호작용', () => {
    it('이전 버튼 클릭 시 onNavigate가 호출되어야 함', () => {
      const onNavigate = jest.fn()
      render(<NavigationControls {...defaultProps} onNavigate={onNavigate} />)

      const prevButton = screen.getByTestId('nav-prev-button')
      fireEvent.click(prevButton)

      expect(onNavigate).toHaveBeenCalledTimes(1)
      expect(onNavigate).toHaveBeenCalledWith('Philippians 1:4')
    })

    it('다음 버튼 클릭 시 onNavigate가 호출되어야 함', () => {
      const onNavigate = jest.fn()
      render(<NavigationControls {...defaultProps} onNavigate={onNavigate} />)

      const nextButton = screen.getByTestId('nav-next-button')
      fireEvent.click(nextButton)

      expect(onNavigate).toHaveBeenCalledTimes(1)
      expect(onNavigate).toHaveBeenCalledWith('Philippians 1:6')
    })

    it('여러 번 클릭해도 정상 동작해야 함', () => {
      const onNavigate = jest.fn()
      render(<NavigationControls {...defaultProps} onNavigate={onNavigate} />)

      const nextButton = screen.getByTestId('nav-next-button')
      fireEvent.click(nextButton)
      fireEvent.click(nextButton)
      fireEvent.click(nextButton)

      expect(onNavigate).toHaveBeenCalledTimes(3)
    })
  })

  describe('비활성화 상태', () => {
    it('hasPrev=false일 때 이전 버튼이 비활성화되어야 함', () => {
      render(
        <NavigationControls
          {...defaultProps}
          prev={null}
          hasPrev={false}
        />
      )

      const prevButton = screen.getByTestId('nav-prev-button')
      expect(prevButton).toBeDisabled()
    })

    it('hasNext=false일 때 다음 버튼이 비활성화되어야 함', () => {
      render(
        <NavigationControls
          {...defaultProps}
          next={null}
          hasNext={false}
        />
      )

      const nextButton = screen.getByTestId('nav-next-button')
      expect(nextButton).toBeDisabled()
    })

    it('비활성화된 버튼 클릭 시 onNavigate가 호출되지 않아야 함', () => {
      const onNavigate = jest.fn()
      render(
        <NavigationControls
          {...defaultProps}
          prev={null}
          hasPrev={false}
          onNavigate={onNavigate}
        />
      )

      const prevButton = screen.getByTestId('nav-prev-button')
      fireEvent.click(prevButton)

      expect(onNavigate).not.toHaveBeenCalled()
    })

    it('양쪽 버튼이 모두 비활성화될 수 있어야 함', () => {
      render(
        <NavigationControls
          {...defaultProps}
          prev={null}
          next={null}
          hasPrev={false}
          hasNext={false}
        />
      )

      expect(screen.getByTestId('nav-prev-button')).toBeDisabled()
      expect(screen.getByTestId('nav-next-button')).toBeDisabled()
    })
  })

  describe('로딩 상태', () => {
    it('로딩 중일 때 스피너가 표시되어야 함', () => {
      const { container } = render(
        <NavigationControls {...defaultProps} isLoading={true} />
      )

      // animate-spin 클래스를 가진 SVG 엘리먼트 확인
      const spinners = container.querySelectorAll('.animate-spin')
      expect(spinners.length).toBeGreaterThan(0)
    })

    it('로딩 중일 때 버튼이 비활성화되어야 함', () => {
      render(<NavigationControls {...defaultProps} isLoading={true} />)

      expect(screen.getByTestId('nav-prev-button')).toBeDisabled()
      expect(screen.getByTestId('nav-next-button')).toBeDisabled()
    })

    it('로딩 중일 때 버튼 클릭이 무시되어야 함', () => {
      const onNavigate = jest.fn()
      render(
        <NavigationControls
          {...defaultProps}
          isLoading={true}
          onNavigate={onNavigate}
        />
      )

      fireEvent.click(screen.getByTestId('nav-prev-button'))
      fireEvent.click(screen.getByTestId('nav-next-button'))

      expect(onNavigate).not.toHaveBeenCalled()
    })
  })

  describe('접근성', () => {
    it('이전 버튼에 aria-label이 있어야 함', () => {
      render(<NavigationControls {...defaultProps} />)

      const prevButton = screen.getByTestId('nav-prev-button')
      expect(prevButton).toHaveAttribute(
        'aria-label',
        '이전 구절로 이동: Philippians 1:4'
      )
    })

    it('다음 버튼에 aria-label이 있어야 함', () => {
      render(<NavigationControls {...defaultProps} />)

      const nextButton = screen.getByTestId('nav-next-button')
      expect(nextButton).toHaveAttribute(
        'aria-label',
        '다음 구절로 이동: Philippians 1:6'
      )
    })

    it('구절이 없을 때 적절한 aria-label이 표시되어야 함', () => {
      render(
        <NavigationControls
          {...defaultProps}
          prev={null}
          hasPrev={false}
        />
      )

      const prevButton = screen.getByTestId('nav-prev-button')
      expect(prevButton).toHaveAttribute('aria-label', '이전 구절 없음')
    })

    it('현재 참조에 aria-live가 있어야 함', () => {
      render(<NavigationControls {...defaultProps} />)

      const currentRef = screen.getByTestId('nav-current-reference')
      expect(currentRef).toHaveAttribute('aria-live', 'polite')
    })

    it('disabled 속성이 올바르게 설정되어야 함', () => {
      render(
        <NavigationControls
          {...defaultProps}
          prev={null}
          hasPrev={false}
        />
      )

      expect(screen.getByTestId('nav-prev-button')).toHaveAttribute('disabled')
      expect(screen.getByTestId('nav-next-button')).not.toHaveAttribute(
        'disabled'
      )
    })
  })

  describe('모바일 친화성', () => {
    it('터치 조작을 위한 클래스가 있어야 함', () => {
      render(<NavigationControls {...defaultProps} />)

      const prevButton = screen.getByTestId('nav-prev-button')
      const nextButton = screen.getByTestId('nav-next-button')

      expect(prevButton.className).toContain('touch-manipulation')
      expect(nextButton.className).toContain('touch-manipulation')
    })

    it('최소 너비가 설정되어야 함 (터치 영역)', () => {
      render(<NavigationControls {...defaultProps} />)

      const prevButton = screen.getByTestId('nav-prev-button')
      const nextButton = screen.getByTestId('nav-next-button')

      expect(prevButton.className).toContain('min-w-[100px]')
      expect(nextButton.className).toContain('min-w-[100px]')
    })
  })

  describe('커스텀 스타일', () => {
    it('커스텀 className을 적용할 수 있어야 함', () => {
      render(
        <NavigationControls {...defaultProps} className="custom-class" />
      )

      const controls = screen.getByTestId('navigation-controls')
      expect(controls.className).toContain('custom-class')
    })
  })

  describe('엣지 케이스', () => {
    it('첫 번째 구절에서 이전 버튼이 비활성화되어야 함', () => {
      render(
        <NavigationControls
          currentReference="Philippians 1:1"
          prev={null}
          next="Philippians 1:2"
          hasPrev={false}
          hasNext={true}
          onNavigate={jest.fn()}
        />
      )

      expect(screen.getByTestId('nav-prev-button')).toBeDisabled()
      expect(screen.getByTestId('nav-next-button')).not.toBeDisabled()
    })

    it('마지막 구절에서 다음 버튼이 비활성화되어야 함', () => {
      render(
        <NavigationControls
          currentReference="Philippians 4:23"
          prev="Philippians 4:22"
          next={null}
          hasPrev={true}
          hasNext={false}
          onNavigate={jest.fn()}
        />
      )

      expect(screen.getByTestId('nav-prev-button')).not.toBeDisabled()
      expect(screen.getByTestId('nav-next-button')).toBeDisabled()
    })

    it('단일 구절 책에서 양쪽 버튼이 비활성화되어야 함', () => {
      render(
        <NavigationControls
          currentReference="Philemon 1:1"
          prev={null}
          next={null}
          hasPrev={false}
          hasNext={false}
          onNavigate={jest.fn()}
        />
      )

      expect(screen.getByTestId('nav-prev-button')).toBeDisabled()
      expect(screen.getByTestId('nav-next-button')).toBeDisabled()
    })
  })
})
