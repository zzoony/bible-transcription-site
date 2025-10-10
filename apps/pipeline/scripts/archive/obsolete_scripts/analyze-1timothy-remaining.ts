import { createClient } from '@supabase/supabase-js';
import { saveAnalysisToDb, type AnalysisData } from './save-analysis-to-db';
import * as fs from 'fs';
import * as path from 'path';

const SUPABASE_URL = 'https://kmbndafjfxzbyokzqgno.supabase.co';
const SUPABASE_SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttYm5kYWZqZnh6Ynlva3pxZ25vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1OTEwMjAwMywiZXhwIjoyMDc0Njc4MDAzfQ.dfX0cuabX-QPHWXf5XSbTfo-73Yqin6nTKpDShngjvY';

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

interface Verse {
  id: string;
  reference: string;
  niv_text: string;
}

interface AnalysisResult {
  reference: string;
  success: boolean;
  error?: string;
  duration?: number;
}

const logFile = path.join(__dirname, '../logs/agent-1timothy.log');
const progressFile = path.join(__dirname, '../logs/1timothy-progress.json');

// 로그 디렉토리 생성
const logsDir = path.dirname(logFile);
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

function log(message: string) {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] ${message}\n`;
  console.log(message);
  fs.appendFileSync(logFile, logMessage);
}

function saveProgress(results: AnalysisResult[]) {
  fs.writeFileSync(progressFile, JSON.stringify(results, null, 2));
}

function loadProgress(): AnalysisResult[] {
  if (fs.existsSync(progressFile)) {
    return JSON.parse(fs.readFileSync(progressFile, 'utf-8'));
  }
  return [];
}

async function sleep(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchUnanalyzedVerses(): Promise<Verse[]> {
  log('1 Timothy 미분석 구절 조회 중...');

  const { data, error } = await supabase
    .from('verses')
    .select('id, reference, niv_text')
    .ilike('reference', '1 Timothy%')
    .eq('analysis_completed', false)
    .order('reference');

  if (error) {
    log(`오류: ${error.message}`);
    throw error;
  }

  log(`총 ${data?.length || 0}개의 미분석 구절 발견`);
  return data || [];
}

/**
 * 구절의 핵심 분석 수행
 * CLAUDE.md 규칙에 따라 분석 데이터를 생성합니다
 */
async function generateAnalysis(verse: Verse): Promise<AnalysisData> {
  // 이 함수는 구절을 분석하여 AnalysisData 형식으로 반환합니다
  // 실제 분석 로직은 별도의 파일에서 구절별로 수동으로 작성됩니다

  // 분석 파일 경로
  const analysisDir = path.join(__dirname, '../analysis-data/1-timothy');
  const analysisFile = path.join(analysisDir, `${verse.reference.replace(/\s+/g, '-')}.json`);

  // 분석 파일이 있으면 로드
  if (fs.existsSync(analysisFile)) {
    const content = fs.readFileSync(analysisFile, 'utf-8');
    return JSON.parse(content);
  }

  // 분석 파일이 없으면 에러
  throw new Error(`분석 데이터 파일이 없습니다: ${analysisFile}`);
}

async function analyzeVerse(verse: Verse, retryCount = 0): Promise<AnalysisResult> {
  const maxRetries = 3;
  const startTime = Date.now();

  try {
    log(`분석 시작: ${verse.reference}`);

    // 이미 분석된 데이터가 있는지 확인
    const { data: existingData } = await supabase
      .from('sentence_structures')
      .select('id')
      .eq('verse_id', verse.id)
      .limit(1);

    if (existingData && existingData.length > 0) {
      log(`건너뛰기: ${verse.reference} (이미 분석됨)`);
      return {
        reference: verse.reference,
        success: true,
        duration: Date.now() - startTime
      };
    }

    log(`원문: ${verse.niv_text}`);

    // 분석 데이터 생성
    const analysisData = await generateAnalysis(verse);

    // 데이터베이스에 저장
    const success = await saveAnalysisToDb(analysisData);

    if (!success) {
      throw new Error('데이터베이스 저장 실패');
    }

    // analysis_completed 플래그 업데이트
    await supabase
      .from('verses')
      .update({ analysis_completed: true })
      .eq('id', verse.id);

    log(`✅ 완료: ${verse.reference}`);

    return {
      reference: verse.reference,
      success: true,
      duration: Date.now() - startTime
    };

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    log(`오류 (${verse.reference}): ${errorMessage}`);

    if (retryCount < maxRetries) {
      const backoffTime = Math.pow(2, retryCount) * 5000; // 5s, 10s, 20s
      log(`재시도 ${retryCount + 1}/${maxRetries} (${backoffTime}ms 후)`);
      await sleep(backoffTime);
      return analyzeVerse(verse, retryCount + 1);
    }

    return {
      reference: verse.reference,
      success: false,
      error: errorMessage,
      duration: Date.now() - startTime
    };
  }
}

async function main() {
  log('=== 1 Timothy 남은 구절 분석 시작 ===');
  const overallStartTime = Date.now();

  try {
    // 미분석 구절 조회
    const verses = await fetchUnanalyzedVerses();

    if (verses.length === 0) {
      log('분석할 구절이 없습니다.');
      return;
    }

    // 진행 상황 로드
    const existingProgress = loadProgress();
    const completedReferences = new Set(
      existingProgress.filter(r => r.success).map(r => r.reference)
    );

    const results: AnalysisResult[] = [...existingProgress];
    let successCount = existingProgress.filter(r => r.success).length;
    let failureCount = existingProgress.filter(r => !r.success).length;

    // 각 구절 분석
    for (let i = 0; i < verses.length; i++) {
      const verse = verses[i];

      // 이미 완료된 구절 건너뛰기
      if (completedReferences.has(verse.reference)) {
        log(`건너뛰기: ${verse.reference} (이전에 완료됨)`);
        continue;
      }

      log(`진행: ${i + 1}/${verses.length} (${Math.round((i + 1) / verses.length * 100)}%)`);

      const result = await analyzeVerse(verse);
      results.push(result);

      if (result.success) {
        successCount++;
      } else {
        failureCount++;
      }

      // 진행 상황 저장
      saveProgress(results);

      // Rate limiting (3초 대기)
      if (i < verses.length - 1) {
        await sleep(3000);
      }
    }

    // 최종 통계
    const totalDuration = Date.now() - overallStartTime;
    const minutes = Math.floor(totalDuration / 60000);
    const seconds = Math.floor((totalDuration % 60000) / 1000);

    log('\n=== 최종 결과 ===');
    log(`✅ 1 Timothy 분석 완료`);
    log(`- 총 구절: ${verses.length}개`);
    log(`- 성공: ${successCount}개`);
    log(`- 실패: ${failureCount}개`);
    log(`- 소요 시간: ${minutes}분 ${seconds}초`);

    // 실패한 구절 목록
    if (failureCount > 0) {
      log('\n실패한 구절:');
      results
        .filter(r => !r.success)
        .forEach(r => log(`  - ${r.reference}: ${r.error}`));
    }

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
