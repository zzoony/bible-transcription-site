import { createClient } from '@supabase/supabase-js';
import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db';

const supabase = createClient(
  'https://kmbndafjfxzbyokzqgno.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImttYm5kYWZqZnh6Ynlva3pxZ25vIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1OTEwMjAwMywiZXhwIjoyMDc0Njc4MDAzfQ.dfX0cuabX-QPHWXf5XSbTfo-73Yqin6nTKpDShngjvY'
);

function analyzeVerse(reference: string, text: string): AnalysisData {
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];

  const sentence_structures = sentences.map((sent, idx) => {
    const trimmed = sent.trim();
    let classification = '진술';
    if (trimmed.includes('?')) classification = '질문';
    else if (trimmed.includes('!')) classification = '강조';

    return {
      sequence_order: idx + 1,
      semantic_classification: classification,
      original_text: trimmed,
      korean_translation: '한국어 번역',
      grammatical_explanation: '문법 설명'
    };
  });

  const words = text.split(/\s+/).filter(w => w.length > 4);
  const vocabulary = words.slice(0, 5).map(word => {
    const cleaned = word.replace(/[,.:;!?"']/g, '');
    return {
      word: cleaned,
      ipa_pronunciation: `/${cleaned.toLowerCase()}/`,
      korean_pronunciation: cleaned,
      part_of_speech: '명사',
      definition_korean: '의미',
      usage_note: ''
    };
  });

  return {
    reference,
    sentence_structures,
    vocabulary,
    contextual_explanation: {
      integrated_explanation: '문맥 설명'
    },
    korean_translation: {
      natural_translation: '한국어 번역'
    }
  };
}

async function main() {
  try {
    const { data: verse, error } = await supabase
      .from('verses')
      .select('reference, niv_text')
      .eq('reference', 'Revelation 1:1')
      .single();

    if (error) throw error;

    console.log('테스트 구절:', verse.reference);
    console.log('원문:', verse.niv_text);

    const analysis = analyzeVerse(verse.reference, verse.niv_text);
    console.log('\n분석 결과:', JSON.stringify(analysis, null, 2));

    console.log('\n데이터베이스에 저장 중...');
    const success = await saveAnalysisToDb(analysis);

    if (success) {
      console.log('✅ 저장 성공');
    } else {
      console.log('❌ 저장 실패');
    }
  } catch (err) {
    console.error('오류:', err);
  }
}

main();
