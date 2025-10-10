import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

// This script allows saving multiple verse analyses in one run
async function main() {
  const analyses: AnalysisData[] = [
    // Analyses will be added here
  ]

  let successCount = 0
  let failureCount = 0

  for (const analysis of analyses) {
    const success = await saveAnalysisToDb(analysis)
    if (success) {
      successCount++
    } else {
      failureCount++
    }
    // Rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000))
  }

  console.log(`\n=== 완료 ===`)
  console.log(`성공: ${successCount}`)
  console.log(`실패: ${failureCount}`)
}

main()
