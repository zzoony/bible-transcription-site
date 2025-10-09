import { saveAnalysisToDb, type AnalysisData } from './save-analysis-to-db';
import * as fs from 'fs';
import * as path from 'path';

async function main() {
  const filePath = path.join(__dirname, '../analysis-data/1-timothy/1-Timothy-5:18.json');

  console.log('1 Timothy 5:18 구절 저장 시작...');

  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    const analysisData: AnalysisData = JSON.parse(content);

    const success = await saveAnalysisToDb(analysisData);

    if (success) {
      console.log('✅ 1 Timothy 5:18 저장 성공');
    } else {
      console.log('❌ 1 Timothy 5:18 저장 실패');
      process.exit(1);
    }
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error(`오류: ${errorMessage}`);
    process.exit(1);
  }
}

main();
