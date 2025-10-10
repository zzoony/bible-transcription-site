import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db';
import * as fs from 'fs';

async function batchSave(analyses: AnalysisData[]) {
  console.log(`\n일괄 저장 시작: ${analyses.length}개 구절\n`);

  let successCount = 0;
  let failCount = 0;

  for (const analysis of analyses) {
    const success = await saveAnalysisToDb(analysis);
    if (success) {
      successCount++;
    } else {
      failCount++;
    }
    // 3초 대기 (rate limiting)
    await new Promise(resolve => setTimeout(resolve, 3000));
  }

  console.log(`\n=== 완료 ===`);
  console.log(`성공: ${successCount}개`);
  console.log(`실패: ${failCount}개`);
}

// CLI 사용
async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log('사용법: npx tsx scripts/batch-save-romans.ts <JSON 파일>');
    process.exit(1);
  }

  const filePath = args[0];
  const content = fs.readFileSync(filePath, 'utf-8');
  const analyses: AnalysisData[] = JSON.parse(content);

  await batchSave(analyses);
}

main();
