import { saveAnalysisToDb } from './save-analysis-to-db';
import type { AnalysisData } from './save-analysis-to-db';
import * as fs from 'fs';

async function main() {
  const data: AnalysisData[] = JSON.parse(
    fs.readFileSync('./scripts/titus-ch1-analyses.json', 'utf-8')
  );

  console.log(`총 ${data.length}개 구절 저장 시작...`);

  for (const verse of data) {
    console.log(`\n저장 중: ${verse.reference}`);
    const success = await saveAnalysisToDb(verse);
    if (!success) {
      console.error(`실패: ${verse.reference}`);
      break;
    }
    await new Promise(r => setTimeout(r, 1000)); // 1초 대기
  }

  console.log('\n완료!');
}

main().catch(console.error);
