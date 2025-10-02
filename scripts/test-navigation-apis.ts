/**
 * Navigation APIs 테스트 스크립트
 *
 * 실행 방법:
 * npm run dev (다른 터미널에서)
 * npx tsx scripts/test-navigation-apis.ts
 */

const BASE_URL = 'http://localhost:3000'

interface NavigationResponse {
  current: string
  target: string | null
  hasTarget: boolean
}

interface ChapterStructure {
  number: number
  totalVerses: number
  availableVerses: number[]
}

interface BookStructure {
  id: number
  name: string
  nameKorean: string
  chapters: ChapterStructure[]
}

interface StructureResponse {
  books: BookStructure[]
}

async function testNavigationAPI() {
  console.log('🧪 Navigation API 테스트\n')
  console.log('=' .repeat(80))

  const tests = [
    {
      name: '다음 구절 (같은 장)',
      url: `${BASE_URL}/api/verse/navigation?reference=Philippians%202%3A12&direction=next`,
      expected: {
        current: 'Philippians 2:12',
        target: 'Philippians 2:13',
        hasTarget: true,
      },
    },
    {
      name: '이전 구절 (같은 장)',
      url: `${BASE_URL}/api/verse/navigation?reference=Philippians%202%3A12&direction=prev`,
      expected: {
        current: 'Philippians 2:12',
        target: 'Philippians 2:11',
        hasTarget: true,
      },
    },
    {
      name: '다음 구절 (장 경계 넘기)',
      url: `${BASE_URL}/api/verse/navigation?reference=Philippians%201%3A30&direction=next`,
      expected: {
        current: 'Philippians 1:30',
        target: 'Philippians 2:1',
        hasTarget: true,
      },
    },
    {
      name: '이전 구절 (장 경계 넘기)',
      url: `${BASE_URL}/api/verse/navigation?reference=Philippians%202%3A1&direction=prev`,
      expected: {
        current: 'Philippians 2:1',
        target: 'Philippians 1:30',
        hasTarget: true,
      },
    },
    {
      name: '첫 구절 이전 (null)',
      url: `${BASE_URL}/api/verse/navigation?reference=Galatians%201%3A1&direction=prev`,
      expected: {
        current: 'Galatians 1:1',
        target: null,
        hasTarget: false,
      },
    },
    {
      name: '마지막 구절 다음 (null)',
      url: `${BASE_URL}/api/verse/navigation?reference=Galatians%206%3A18&direction=next`,
      expected: {
        current: 'Galatians 6:18',
        target: null,
        hasTarget: false,
      },
    },
  ]

  let passed = 0
  let failed = 0

  for (const test of tests) {
    try {
      const response = await fetch(test.url)
      const data = (await response.json()) as NavigationResponse

      const isMatch =
        data.current === test.expected.current &&
        data.target === test.expected.target &&
        data.hasTarget === test.expected.hasTarget

      if (isMatch) {
        console.log(`✅ ${test.name}`)
        passed++
      } else {
        console.log(`❌ ${test.name}`)
        console.log(`   예상: ${JSON.stringify(test.expected)}`)
        console.log(`   실제: ${JSON.stringify(data)}`)
        failed++
      }
    } catch (error) {
      console.log(`❌ ${test.name} - 오류: ${error}`)
      failed++
    }
  }

  console.log('\n' + '=' .repeat(80))
  console.log(`총 테스트: ${tests.length}`)
  console.log(`통과: ${passed}`)
  console.log(`실패: ${failed}`)
  console.log('=' .repeat(80))

  return failed === 0
}

async function testStructureAPI() {
  console.log('\n🧪 Bible Structure API 테스트\n')
  console.log('=' .repeat(80))

  try {
    const response = await fetch(`${BASE_URL}/api/navigation/structure`)
    const data = (await response.json()) as StructureResponse

    let passed = 0
    let failed = 0

    // 책 개수 확인
    if (data.books.length === 2) {
      console.log('✅ 책 개수: 2')
      passed++
    } else {
      console.log(`❌ 책 개수: 예상 2, 실제 ${data.books.length}`)
      failed++
    }

    // Galatians 확인
    const galatians = data.books.find((b) => b.name === 'Galatians')
    if (galatians) {
      console.log('✅ Galatians 존재')
      passed++

      if (galatians.nameKorean === '갈라디아서') {
        console.log('✅ Galatians 한글명: 갈라디아서')
        passed++
      } else {
        console.log(
          `❌ Galatians 한글명: 예상 "갈라디아서", 실제 "${galatians.nameKorean}"`
        )
        failed++
      }

      if (galatians.chapters.length === 6) {
        console.log('✅ Galatians 장 개수: 6')
        passed++
      } else {
        console.log(
          `❌ Galatians 장 개수: 예상 6, 실제 ${galatians.chapters.length}`
        )
        failed++
      }

      // Galatians 1장 확인
      const chapter1 = galatians.chapters.find((c) => c.number === 1)
      if (chapter1 && chapter1.totalVerses === 24) {
        console.log('✅ Galatians 1장 구절 수: 24')
        passed++
      } else {
        console.log(
          `❌ Galatians 1장 구절 수: 예상 24, 실제 ${chapter1?.totalVerses}`
        )
        failed++
      }
    } else {
      console.log('❌ Galatians 없음')
      failed++
    }

    // Philippians 확인
    const philippians = data.books.find((b) => b.name === 'Philippians')
    if (philippians) {
      console.log('✅ Philippians 존재')
      passed++

      if (philippians.nameKorean === '빌립보서') {
        console.log('✅ Philippians 한글명: 빌립보서')
        passed++
      } else {
        console.log(
          `❌ Philippians 한글명: 예상 "빌립보서", 실제 "${philippians.nameKorean}"`
        )
        failed++
      }

      if (philippians.chapters.length === 4) {
        console.log('✅ Philippians 장 개수: 4')
        passed++
      } else {
        console.log(
          `❌ Philippians 장 개수: 예상 4, 실제 ${philippians.chapters.length}`
        )
        failed++
      }

      // Philippians 1장 확인
      const chapter1 = philippians.chapters.find((c) => c.number === 1)
      if (chapter1 && chapter1.totalVerses === 30) {
        console.log('✅ Philippians 1장 구절 수: 30')
        passed++
      } else {
        console.log(
          `❌ Philippians 1장 구절 수: 예상 30, 실제 ${chapter1?.totalVerses}`
        )
        failed++
      }

      // Philippians 1장 구절 번호 확인
      if (
        chapter1 &&
        chapter1.availableVerses.length === 30 &&
        chapter1.availableVerses[0] === 1 &&
        chapter1.availableVerses[29] === 30
      ) {
        console.log('✅ Philippians 1장 구절 번호 배열 정상')
        passed++
      } else {
        console.log('❌ Philippians 1장 구절 번호 배열 비정상')
        failed++
      }
    } else {
      console.log('❌ Philippians 없음')
      failed++
    }

    console.log('\n' + '=' .repeat(80))
    console.log(`통과: ${passed}`)
    console.log(`실패: ${failed}`)
    console.log('=' .repeat(80))

    return failed === 0
  } catch (error) {
    console.log(`❌ 오류 발생: ${error}`)
    console.log('=' .repeat(80))
    return false
  }
}

async function main() {
  console.log('📊 Navigation APIs 통합 테스트\n')

  const navSuccess = await testNavigationAPI()
  const structureSuccess = await testStructureAPI()

  console.log('\n' + '=' .repeat(80))
  console.log('📊 최종 결과\n')

  if (navSuccess && structureSuccess) {
    console.log('✅ ✅ ✅ 모든 테스트 통과! ✅ ✅ ✅')
  } else {
    console.log('❌ 일부 테스트 실패')
    if (!navSuccess) console.log('  - Navigation API 실패')
    if (!structureSuccess) console.log('  - Structure API 실패')
  }

  console.log('=' .repeat(80))

  process.exit(navSuccess && structureSuccess ? 0 : 1)
}

main().catch(console.error)
