import { analyzeSingleVerse } from '../core/analyze-single-verse';
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';

// 환경 변수 로드
dotenv.config({
  path: path.resolve(__dirname, '../../../../web/.env.local')
});

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

// 세션 설정
const SESSION_ID = 'session3';
const BOOK = '1 Corinthians';
const CHAPTERS = [9, 10, 11, 12];
const PROGRESS_FILE = `.1cor-${SESSION_ID}-progress.json`;
const LOG_FILE = `logs/1cor-${SESSION_ID}.log`;

// 진행 상황 로드
function loadProgress(): string[] {
  if (fs.existsSync(PROGRESS_FILE)) {
    return JSON.parse(fs.readFileSync(PROGRESS_FILE, 'utf-8'));
  }
  return [];
}

// 진행 상황 저장
function saveProgress(completed: string[]) {
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify(completed, null, 2));
}

// 로그 기록
function log(message: string) {
  const timestamp = new Date().toISOString();
  const logMsg = `[${timestamp}] ${message}`;
  console.log(logMsg);
  fs.appendFileSync(LOG_FILE, logMsg + '\n');
}

// 멱등성 보장: DB에서 이미 분석되었는지 확인
async function isAlreadyAnalyzed(verseId: number): Promise<boolean> {
  const { data, error } = await supabase
    .from('sentence_structures')
    .select('id')
    .eq('verse_id', verseId)
    .limit(1);

  return !error && data && data.length > 0;
}

// 구절 ID 조회
async function getVerseId(reference: string): Promise<number | null> {
  const { data, error} = await supabase
    .from('verses')
    .select('id')
    .eq('reference', reference)
    .single();

  if (error || !data) return null;
  return data.id;
}

// 메인 분석 루프
async function analyzeSession() {
  log(`🚀 세션 ${SESSION_ID} 시작: ${BOOK} ${CHAPTERS[0]}-${CHAPTERS[CHAPTERS.length - 1]}장`);

  const completed = loadProgress();
  let successCount = 0;
  let skipCount = 0;
  let failCount = 0;

  // NIV 데이터에서 구절 목록 생성
  const nivBible = require('../source-data/NIV_Bible.json');
  const verses: string[] = [];

  for (const chapter of CHAPTERS) {
    const chapterData = nivBible[BOOK]?.[chapter.toString()];
    if (!chapterData) continue;

    const verseNumbers = Object.keys(chapterData);
    for (const verseNum of verseNumbers) {
      verses.push(`${BOOK} ${chapter}:${verseNum}`);
    }
  }

  log(`📋 총 ${verses.length}개 구절 처리 예정`);
  log(`✅ 이미 완료: ${completed.length}개`);

  for (let i = 0; i < verses.length; i++) {
    const reference = verses[i];

    // 이미 완료된 구절 건너뛰기
    if (completed.includes(reference)) {
      log(`⏭️  [${i + 1}/${verses.length}] ${reference} - 이미 완료됨 (건너뛰기)`);
      skipCount++;
      continue;
    }

    try {
      // DB에서 verse_id 조회
      const verseId = await getVerseId(reference);
      if (!verseId) {
        log(`⚠️  [${i + 1}/${verses.length}] ${reference} - verse_id 없음 (건너뛰기)`);
        skipCount++;
        continue;
      }

      // 멱등성 체크: DB에 이미 분석 데이터가 있는지 확인
      const alreadyAnalyzed = await isAlreadyAnalyzed(verseId);
      if (alreadyAnalyzed) {
        log(`✓ [${i + 1}/${verses.length}] ${reference} - DB에 이미 존재 (건너뛰기)`);
        completed.push(reference);
        saveProgress(completed);
        skipCount++;
        continue;
      }

      log(`🔄 [${i + 1}/${verses.length}] ${reference} 분석 중...`);

      // 분석 실행
      const result = await analyzeSingleVerse(reference);

      if (result.success) {
        log(`✅ [${i + 1}/${verses.length}] ${reference} 완료 (점수: ${result.finalScore}/100)`);
        successCount++;
      } else {
        log(`⚠️  [${i + 1}/${verses.length}] ${reference} 품질 미달 (점수: ${result.finalScore}/100)`);
        failCount++;
      }

      // 진행 상황 저장
      completed.push(reference);
      saveProgress(completed);

      // Rate limiting (3-5초 대기)
      const waitTime = 3000 + Math.random() * 2000;
      await new Promise(resolve => setTimeout(resolve, waitTime));

    } catch (error: any) {
      log(`❌ [${i + 1}/${verses.length}] ${reference} 오류: ${error.message}`);
      failCount++;

      // 오류 발생 시 더 긴 대기 (10초)
      await new Promise(resolve => setTimeout(resolve, 10000));
    }
  }

  // 최종 요약
  log('\n' + '='.repeat(60));
  log(`📊 세션 ${SESSION_ID} 완료 요약`);
  log('='.repeat(60));
  log(`✅ 성공: ${successCount}/${verses.length}`);
  log(`⏭️  건너뜀: ${skipCount}/${verses.length}`);
  log(`❌ 실패: ${failCount}/${verses.length}`);
  log(`📈 진행률: ${((successCount + skipCount) / verses.length * 100).toFixed(1)}%`);
  log('='.repeat(60));
}

// 실행
analyzeSession().catch(error => {
  log(`❌ 치명적 오류: ${error.message}`);
  process.exit(1);
});
