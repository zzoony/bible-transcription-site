import { createClient } from '@supabase/supabase-js';
import { saveAnalysisToDb, type AnalysisData } from './save-analysis-to-db';
import * as fs from 'fs';
import * as path from 'path';

const SUPABASE_URL = 'https://kmbndafjfxzbyokzqgno.supabase.co';
const SUPABASE_SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttYm5kYWZqZnh6Ynlva3pxZ25vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1OTEwMjAwMywiZXhwIjoyMDc0Njc4MDAzfQ.dfX0cuabX-QPHWXf5XSbTfo-73Yqin6nTKpDShngjvY';

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

const analysisDir = path.join(__dirname, '../analysis-data/1-timothy');
const logFile = path.join(__dirname, '../logs/bulk-save-1timothy.log');

function log(message: string) {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}\n`;
  console.log(message);
  fs.appendFileSync(logFile, logMessage);
}

async function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  log('=== 1 Timothy 분석 데이터 대량 저장 시작 ===');
  const startTime = Date.now();

  try {
    // 분석 파일 목록 조회
    const files = fs.readdirSync(analysisDir)
      .filter(f => f.endsWith('.json'))
      .sort();

    log(`총 ${files.length}개 파일 발견`);

    let successCount = 0;
    let failureCount = 0;

    for (const file of files) {
      const filePath = path.join(analysisDir, file);

      try {
        log(`\n처리 중: ${file}`);

        // JSON 파일 읽기
        const content = fs.readFileSync(filePath, 'utf-8');
        const analysisData: AnalysisData = JSON.parse(content);

        // 데이터베이스에 저장
        const success = await saveAnalysisToDb(analysisData);

        if (success) {
          successCount++;
          log(`✅ 성공: ${analysisData.reference}`);
        } else {
          failureCount++;
          log(`❌ 실패: ${analysisData.reference}`);
        }

        // Rate limiting (3초 대기)
        await sleep(3000);

      } catch (error) {
        failureCount++;
        const errorMessage = error instanceof Error ? error.message : String(error);
        log(`❌ 오류 (${file}): ${errorMessage}`);
      }
    }

    // 최종 통계
    const totalDuration = Date.now() - startTime;
    const minutes = Math.floor(totalDuration / 60000);
    const seconds = Math.floor((totalDuration % 60000) / 1000);

    log('\n=== 최종 결과 ===');
    log(`✅ 1 Timothy 분석 데이터 저장 완료`);
    log(`- 총 파일: ${files.length}개`);
    log(`- 성공: ${successCount}개`);
    log(`- 실패: ${failureCount}개`);
    log(`- 소요 시간: ${minutes}분 ${seconds}초`);

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    log(`치명적 오류: ${errorMessage}`);
    throw error;
  }
}

main().catch(error => {
  log(`프로그램 종료: ${error}`);
  process.exit(1);
});
