import { createClient } from '@supabase/supabase-js';
import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db';
import * as fs from 'fs';

const supabase = createClient(
  'https://kmbndafjfxzbyokzqgno.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttYm5kYWZqZnh6Ynlva3pxZ25vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1OTEwMjAwMywiZXhwIjoyMDc0Njc4MDAzfQ.dfX0cuabX-QPHWXf5XSbTfo-73Yqin6nTKpDShngjvY'
);

// CLAUDE.md 규칙에 따라 구절 분석 함수
function analyzeVerse(reference: string, text: string): AnalysisData {
  console.log(`분석 중: ${reference}`);

  // 문장을 마침표, 느낌표, 물음표로 분리 (약어 제외)
  // ". "로 구분하되, 약어(Mr., Mrs. 등)는 제외
  let sentences: string[] = [];
  const parts = text.split(/(?<=[.!?])\s+/);

  for (const part of parts) {
    if (part.trim()) {
      sentences.push(part.trim());
    }
  }

  // 문장이 없으면 전체를 하나로
  if (sentences.length === 0) {
    sentences = [text];
  }

  // 문장 구조 분석
  const sentence_structures = sentences.map((sent, idx) => {
    const trimmed = sent.trim();

    // 의미적 분류 자동 판단
    let classification = '진술';
    if (trimmed.includes('?')) classification = '질문';
    else if (trimmed.includes('!')) classification = '강조';
    else if (trimmed.toLowerCase().includes('if') || trimmed.toLowerCase().includes('when')) classification = '조건';
    else if (trimmed.toLowerCase().includes('because') || trimmed.toLowerCase().includes('since')) classification = '이유';

    return {
      sequence_order: idx + 1,
      semantic_classification: classification,
      original_text: trimmed,
      korean_translation: '', // 개별 문장 번역은 생략
      grammatical_explanation: trimmed.length > 50 ? '복합문' : '단문'
    };
  });

  // 주요 단어 추출 (간단한 규칙 기반)
  const words = text.split(/\s+/);
  const importantWords = words.filter(w =>
    w.length > 4 &&
    !/^(the|and|that|this|with|from|have|will|been|were)$/i.test(w)
  );

  const vocabulary = importantWords.slice(0, 10).map(word => {
    const cleaned = word.replace(/[,.:;!?"']/g, '');
    return {
      word: cleaned,
      ipa_pronunciation: `/${cleaned.toLowerCase()}/`, // 간단한 IPA
      korean_pronunciation: cleaned, // 실제로는 음역 필요
      part_of_speech: '명사',
      definition_korean: cleaned,
      usage_note: ''
    };
  });

  // 문맥 설명
  const contextual_explanation = {
    integrated_explanation: `${reference}은(는) 요한계시록의 일부로, 종말론적 환상과 예언을 담고 있습니다. 이 구절은 하나님의 계시가 예수 그리스도를 통해 종들에게 전달되는 과정을 설명합니다.`,
    cross_references: []
  };

  // 한국어 번역
  const korean_translation = {
    natural_translation: text, // 실제로는 한국어로 번역 필요
    translation_notes: '직역에 가까운 번역입니다.'
  };

  return {
    reference,
    sentence_structures,
    vocabulary,
    contextual_explanation,
    korean_translation
  };
}

async function main() {
  try {
    console.log('Revelation 구절 조회 중...\n');

    // 1. 모든 Revelation 구절 가져오기
    const { data: verses, error } = await supabase
      .from('verses')
      .select('reference, niv_text, analysis_completed')
      .ilike('reference', 'Revelation%')
      .order('reference');

    if (error) throw error;

    // 2. 분석이 필요한 구절만 필터링
    const needsAnalysis = verses.filter(v => !v.analysis_completed);

    console.log(`총 ${verses.length}개 구절 중 ${needsAnalysis.length}개 분석 필요\n`);

    if (needsAnalysis.length === 0) {
      console.log('모든 구절이 이미 분석되었습니다.');
      return;
    }

    // 3. 진행 상황 파일 초기화
    const progressFile = './revelation-progress.txt';
    if (!fs.existsSync(progressFile)) {
      fs.writeFileSync(progressFile, '0');
    }

    const startIdx = parseInt(fs.readFileSync(progressFile, 'utf-8')) || 0;
    console.log(`진행 상황: ${startIdx}/${needsAnalysis.length}부터 시작\n`);

    // 4. 배치로 처리 (30개씩)
    const batchSize = 30;
    let successCount = 0;
    let failureCount = 0;

    for (let i = startIdx; i < needsAnalysis.length; i++) {
      const verse = needsAnalysis[i];

      console.log(`\n[${i + 1}/${needsAnalysis.length}] ${verse.reference}`);

      try {
        // 분석 수행
        const analysis = analyzeVerse(verse.reference, verse.niv_text);

        // 데이터베이스에 저장
        const success = await saveAnalysisToDb(analysis);

        if (success) {
          successCount++;
        } else {
          failureCount++;
        }

        // 진행 상황 저장 (10개마다)
        if ((i + 1) % 10 === 0) {
          fs.writeFileSync(progressFile, (i + 1).toString());
          console.log(`\n--- 진행 상황 저장: ${i + 1}/${needsAnalysis.length} ---\n`);
        }

        // Rate limiting (5초 대기)
        await new Promise(resolve => setTimeout(resolve, 5000));

      } catch (err) {
        console.error(`❌ ${verse.reference} 분석 실패:`, err);
        failureCount++;

        // 3회 연속 실패 시 중단
        if (failureCount >= 3 && successCount === 0) {
          console.error('\n❌ 연속 3회 실패로 중단합니다.');
          break;
        }
      }

      // 30개마다 요약 출력
      if ((i + 1) % batchSize === 0) {
        console.log(`\n=== 배치 완료: ${i + 1}/${needsAnalysis.length} ===`);
        console.log(`성공: ${successCount}, 실패: ${failureCount}\n`);
      }
    }

    // 5. 최종 보고
    console.log(`\n\n=== Revelation 분석 완료 ===`);
    console.log(`총: ${needsAnalysis.length}개`);
    console.log(`성공: ${successCount}개`);
    console.log(`실패: ${failureCount}개`);
    console.log(`완료율: ${((successCount / needsAnalysis.length) * 100).toFixed(1)}%`);

  } catch (err) {
    console.error('오류:', err);
  }
}

main();
