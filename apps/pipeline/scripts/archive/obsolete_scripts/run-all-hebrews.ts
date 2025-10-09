import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

// 모든 히브리서 스크립트에서 분석 데이터 가져오기
import { analyses as ch2_4 } from './save-hebrews-ch2-4'
import { analyses as ch5_7 } from './save-hebrews-ch5-7'
import { analyses as ch9_10 } from './save-hebrews-ch9-10'
import { analyses as ch11_13 } from './save-hebrews-ch11-13'

async function main() {
  console.log('='.repeat(60))
  console.log('히브리서 전체 분석 데이터 저장 시작')
  console.log('='.repeat(60))

  const allAnalyses = [
    ...ch2_4,
    ...ch5_7,
    ...ch9_10,
    ...ch11_13
  ]

  console.log(`\n총 ${allAnalyses.length}개 구절 저장 예정\n`)

  let successCount = 0
  let failCount = 0
  const failed: string[] = []

  for (let i = 0; i < allAnalyses.length; i++) {
    const analysis = allAnalyses[i]
    console.log(`[${i + 1}/${allAnalyses.length}] ${analysis.reference}`)

    const success = await saveAnalysisToDb(analysis)

    if (success) {
      successCount++
    } else {
      failCount++
      failed.push(analysis.reference)
    }

    // Rate limiting: 1초 대기
    if (i < allAnalyses.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 1000))
    }
  }

  console.log('\n' + '='.repeat(60))
  console.log(`저장 완료!`)
  console.log(`성공: ${successCount}개`)
  console.log(`실패: ${failCount}개`)

  if (failed.length > 0) {
    console.log(`\n실패한 구절:`)
    failed.forEach(ref => console.log(`  - ${ref}`))
  }

  console.log('='.repeat(60))
  console.log('\n')

  process.exit(failCount > 0 ? 1 : 0)
}

if (require.main === module) {
  main()
}
