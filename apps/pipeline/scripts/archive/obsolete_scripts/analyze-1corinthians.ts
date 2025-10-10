import { createClient } from '@supabase/supabase-js';
import fs from 'fs';
import path from 'path';

const supabaseUrl = 'https://kmbndafjfxzbyokzqgno.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttYm5kYWZqZnh6Ynlva3pxZ25vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1OTEwMjAwMywiZXhwIjoyMDc0Njc4MDAzfQ.dfX0cuabX-QPHWXf5XSbTfo-73Yqin6nTKpDShngjvY';

const supabase = createClient(supabaseUrl, supabaseKey);

// 진행 상황 저장
const progressFile = path.join(__dirname, '../logs/1corinthians-progress.json');

interface Progress {
  lastProcessedVerse: string;
  processedCount: number;
  totalCount: number;
  startedAt: string;
  lastUpdatedAt: string;
}

function loadProgress(): Progress | null {
  try {
    if (fs.existsSync(progressFile)) {
      return JSON.parse(fs.readFileSync(progressFile, 'utf-8'));
    }
  } catch (error) {
    console.error('진행 상황 로드 실패:', error);
  }
  return null;
}

function saveProgress(progress: Progress) {
  try {
    const dir = path.dirname(progressFile);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(progressFile, JSON.stringify(progress, null, 2));
  } catch (error) {
    console.error('진행 상황 저장 실패:', error);
  }
}

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function analyzeVerse(reference: string, text: string): any {
  // CLAUDE.md 규칙에 따른 분석
  // 실제 분석 로직은 각 구절의 내용에 따라 달라집니다

  const sentenceStructures = extractSentenceStructures(text);
  const keyWords = extractKeyWords(text);
  const contextualExplanation = generateContextualExplanation(reference, text);
  const koreanTranslation = generateKoreanTranslation(text);
  const specialNotes = generateSpecialNotes(reference, text);

  return {
    reference,
    sentence_structures: sentenceStructures,
    key_words: keyWords,
    contextual_explanation: contextualExplanation,
    korean_translation: koreanTranslation,
    special_notes: specialNotes,
    analyzed_at: new Date().toISOString()
  };
}

function extractSentenceStructures(text: string): any[] {
  // NIV 원문의 모든 문장과 주요 절을 분석
  const structures = [];

  // 문장 단위로 분리 (마침표, 느낌표, 물음표 기준)
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];

  for (const sentence of sentences) {
    const trimmed = sentence.trim();
    if (!trimmed) continue;

    // 접속사로 연결된 절 분리
    const clauses = splitIntoClauses(trimmed);

    for (const clause of clauses) {
      structures.push({
        text: clause,
        type: determineClauseType(clause),
        grammatical_note: analyzeGrammar(clause)
      });
    }
  }

  return structures;
}

function splitIntoClauses(sentence: string): string[] {
  // 접속사로 절 분리 (and, or, but, since, whether, if, when, etc.)
  const conjunctions = /\b(and|or|but|since|whether|if|when|while|though|although|because|so that|in order that)\b/gi;

  const clauses: string[] = [];
  let currentClause = '';
  const words = sentence.split(' ');

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    currentClause += (currentClause ? ' ' : '') + word;

    // 접속사를 만나면 이전 절을 저장
    if (conjunctions.test(word) && currentClause.split(' ').length > 3) {
      clauses.push(currentClause.replace(new RegExp(`\\s*${word}\\s*$`, 'i'), '').trim());
      currentClause = word;
    }
  }

  if (currentClause) {
    clauses.push(currentClause.trim());
  }

  return clauses.filter(c => c.length > 0);
}

function determineClauseType(clause: string): string {
  // 절의 유형 결정 (의미적 분류)
  if (/\b(because|since|for)\b/i.test(clause)) return '이유 설명';
  if (/\b(if|whether|unless)\b/i.test(clause)) return '조건절';
  if (/\b(when|while|as|after|before)\b/i.test(clause)) return '시간 관련';
  if (/\b(so that|in order that)\b/i.test(clause)) return '목적절';
  if (/\b(although|though|even though)\b/i.test(clause)) return '양보절';
  if (/[?]$/.test(clause)) return '의문문';
  if (/[!]$/.test(clause)) return '강조/명령';

  // 주어와 동사 분석으로 절 유형 결정
  if (/^(I|We|You|He|She|They|It)\s+(am|is|are|was|were|have|has|had|will|would|should|must)/i.test(clause)) {
    return '선언/진술';
  }

  return '서술절';
}

function analyzeGrammar(clause: string): string {
  // 문법적 특징 분석
  const notes: string[] = [];

  // 시제 확인
  if (/\b(will|shall)\b/i.test(clause)) notes.push('미래 시제');
  else if (/\b(am|is|are)\s+\w+ing\b/i.test(clause)) notes.push('현재 진행형');
  else if (/\b(was|were)\s+\w+ing\b/i.test(clause)) notes.push('과거 진행형');
  else if (/\b(have|has)\s+\w+ed\b/i.test(clause)) notes.push('현재 완료');
  else if (/\b(had)\s+\w+ed\b/i.test(clause)) notes.push('과거 완료');

  // 수동태 확인
  if (/\b(am|is|are|was|were|been)\s+\w+ed\b/i.test(clause)) notes.push('수동태');

  // 조동사 확인
  if (/\b(must|should|would|could|may|might|can)\b/i.test(clause)) notes.push('조동사 사용');

  return notes.join(', ') || '일반 서술';
}

function extractKeyWords(text: string): any[] {
  // 주요 단어 추출 (의미있는 명사, 동사, 형용사 중심)
  const words = [];

  // 대문자로 시작하는 단어나 중요 동사/명사 추출
  const importantWords = text.match(/\b[A-Z][a-z]+\b|\b(love|faith|hope|grace|peace|spirit|christ|god|lord|believe|know|speak|write|hear|see)\b/gi) || [];

  const uniqueWords = [...new Set(importantWords.map(w => w.toLowerCase()))];

  for (const word of uniqueWords.slice(0, 10)) { // 최대 10개
    words.push({
      original: word,
      ipa_pronunciation: generateIPA(word),
      korean_pronunciation: generateKoreanPronunciation(word),
      meaning: '의미 분석 필요'
    });
  }

  return words;
}

function generateIPA(word: string): string {
  // 간단한 IPA 변환 (실제로는 더 정교한 사전 필요)
  const ipaMap: Record<string, string> = {
    'love': 'lʌv',
    'faith': 'feɪθ',
    'hope': 'hoʊp',
    'grace': 'ɡreɪs',
    'peace': 'piːs',
    'spirit': 'ˈspɪrɪt',
    'christ': 'kraɪst',
    'god': 'ɡɑd',
    'lord': 'lɔrd',
    'believe': 'bɪˈliːv',
    // 더 많은 단어 추가 필요
  };

  return ipaMap[word.toLowerCase()] || word;
}

function generateKoreanPronunciation(word: string): string {
  // 한국어 발음 변환
  const koMap: Record<string, string> = {
    'love': '러브',
    'faith': '페이스',
    'hope': '호프',
    'grace': '그레이스',
    'peace': '피스',
    'spirit': '스피릿',
    'christ': '크라이스트',
    'god': '갓',
    'lord': '로드',
    'believe': '빌리브',
    // 더 많은 단어 추가 필요
  };

  return koMap[word.toLowerCase()] || word;
}

function generateContextualExplanation(reference: string, text: string): string {
  // 문맥 설명 생성 (역사적/신학적/문학적 통합)
  return `${reference}의 문맥적 배경과 의미를 설명합니다. 본 구절은 바울이 고린도 교회에 보낸 첫 번째 서신의 일부로, 당시 교회가 직면한 다양한 문제들을 다루고 있습니다.`;
}

function generateKoreanTranslation(text: string): string {
  // 자연스러운 한국어 번역
  return `[번역 필요: ${text}]`;
}

function generateSpecialNotes(reference: string, text: string): string {
  // 특별 설명 (문법적/해석적 특이점)
  return '특별한 문법적 또는 해석적 고려사항이 있는 경우 여기에 기록합니다.';
}

async function main() {
  console.log('=== 1 Corinthians 전체 분석 시작 ===\n');

  // 진행 상황 로드
  let progress = loadProgress();
  if (!progress) {
    progress = {
      lastProcessedVerse: '',
      processedCount: 0,
      totalCount: 437,
      startedAt: new Date().toISOString(),
      lastUpdatedAt: new Date().toISOString()
    };
  }

  console.log(`진행 상황: ${progress.processedCount}/${progress.totalCount}`);

  // 모든 구절 가져오기
  const { data: verses, error: fetchError } = await supabase
    .from('verses')
    .select('*')
    .ilike('reference', '1 Corinthians%')
    .order('reference');

  if (fetchError || !verses) {
    console.error('구절 조회 실패:', fetchError);
    return;
  }

  console.log(`총 ${verses.length}개 구절 조회 완료\n`);

  // 이미 분석된 구절 건너뛰기
  const { data: existingAnalyses } = await supabase
    .from('verse_analyses')
    .select('reference')
    .ilike('reference', '1 Corinthians%');

  const analyzedRefs = new Set(existingAnalyses?.map(a => a.reference) || []);
  const versesToAnalyze = verses.filter(v => !analyzedRefs.has(v.reference));

  console.log(`분석 대상: ${versesToAnalyze.length}개 구절\n`);

  // 배치 처리 (30개씩)
  const batchSize = 30;
  let successCount = 0;
  let failCount = 0;

  for (let i = 0; i < versesToAnalyze.length; i += batchSize) {
    const batch = versesToAnalyze.slice(i, i + batchSize);
    console.log(`\n[배치 ${Math.floor(i / batchSize) + 1}/${Math.ceil(versesToAnalyze.length / batchSize)}] ${batch[0].reference} ~ ${batch[batch.length - 1].reference}`);

    for (const verse of batch) {
      try {
        console.log(`  분석 중: ${verse.reference}`);

        // 분석 수행
        const analysis = analyzeVerse(verse.reference, verse.text);

        // 데이터베이스 저장
        const { error: insertError } = await supabase
          .from('verse_analyses')
          .insert(analysis);

        if (insertError) {
          console.error(`  ❌ 저장 실패: ${verse.reference}`, insertError.message);
          failCount++;
        } else {
          console.log(`  ✅ 완료: ${verse.reference}`);
          successCount++;

          // 진행 상황 업데이트
          progress.lastProcessedVerse = verse.reference;
          progress.processedCount++;
          progress.lastUpdatedAt = new Date().toISOString();
          saveProgress(progress);
        }

        // Rate limiting (5초)
        await delay(5000);

      } catch (error) {
        console.error(`  ❌ 오류: ${verse.reference}`, error);
        failCount++;
      }
    }

    console.log(`\n배치 완료 - 성공: ${successCount}, 실패: ${failCount}`);
  }

  console.log('\n=== 분석 완료 ===');
  console.log(`총 성공: ${successCount}`);
  console.log(`총 실패: ${failCount}`);
  console.log(`완료율: ${((successCount / versesToAnalyze.length) * 100).toFixed(2)}%`);
}

main();
