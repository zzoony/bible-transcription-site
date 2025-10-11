import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

// 환경 변수 로드
dotenv.config({
  path: path.resolve(__dirname, '../../../../apps/web/.env.local')
});

// Supabase 클라이언트 생성
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

async function checkDataIntegrity() {
  console.log('🔍 데이터베이스 무결성 검사\n');
  console.log('═══════════════════════════════════════\n');

  // 1. verses 테이블 중복 확인
  console.log('1️⃣  verses 테이블 중복 확인...');
  const { data: verses } = await supabase
    .from('verses')
    .select('reference');

  const verseMap = new Map<string, number>();
  verses?.forEach(v => {
    verseMap.set(v.reference, (verseMap.get(v.reference) || 0) + 1);
  });

  const verseDuplicates = Array.from(verseMap.entries()).filter(([_, count]) => count > 1);
  if (verseDuplicates.length > 0) {
    console.log(`   ⚠️  ${verseDuplicates.length}개 중복 발견:`);
    verseDuplicates.slice(0, 5).forEach(([ref, count]) => {
      console.log(`      - ${ref}: ${count}번`);
    });
  } else {
    console.log('   ✅ 중복 없음');
  }

  // 2. sentence_structures 중복 확인
  console.log('\n2️⃣  sentence_structures 중복 확인...');
  const { data: structures } = await supabase
    .from('sentence_structures')
    .select('verse_id, sequence_order');

  const structureMap = new Map<string, number>();
  structures?.forEach(s => {
    const key = `${s.verse_id}-${s.sequence_order}`;
    structureMap.set(key, (structureMap.get(key) || 0) + 1);
  });

  const structureDuplicates = Array.from(structureMap.entries()).filter(([_, count]) => count > 1);
  if (structureDuplicates.length > 0) {
    console.log(`   ⚠️  ${structureDuplicates.length}개 중복 발견:`);
    structureDuplicates.slice(0, 5).forEach(([key, count]) => {
      console.log(`      - verse_id-sequence: ${key}: ${count}번`);
    });
  } else {
    console.log('   ✅ 중복 없음');
  }

  // 3. vocabulary 중복 확인 (같은 verse_id에 같은 word)
  console.log('\n3️⃣  vocabulary 중복 확인...');
  const { data: vocab } = await supabase
    .from('vocabulary')
    .select('verse_id, word');

  const vocabMap = new Map<string, number>();
  vocab?.forEach(v => {
    const key = `${v.verse_id}-${v.word}`;
    vocabMap.set(key, (vocabMap.get(key) || 0) + 1);
  });

  const vocabDuplicates = Array.from(vocabMap.entries()).filter(([_, count]) => count > 1);
  if (vocabDuplicates.length > 0) {
    console.log(`   ⚠️  ${vocabDuplicates.length}개 중복 발견:`);
    vocabDuplicates.slice(0, 5).forEach(([key, count]) => {
      console.log(`      - verse_id-word: ${key}: ${count}번`);
    });
  } else {
    console.log('   ✅ 중복 없음');
  }

  // 4. contextual_explanations 중복 확인 (verse_id는 unique해야 함)
  console.log('\n4️⃣  contextual_explanations 중복 확인...');
  const { data: contexts } = await supabase
    .from('contextual_explanations')
    .select('verse_id');

  const contextMap = new Map<number, number>();
  contexts?.forEach(c => {
    contextMap.set(c.verse_id, (contextMap.get(c.verse_id) || 0) + 1);
  });

  const contextDuplicates = Array.from(contextMap.entries()).filter(([_, count]) => count > 1);
  if (contextDuplicates.length > 0) {
    console.log(`   ⚠️  ${contextDuplicates.length}개 중복 발견:`);
    contextDuplicates.slice(0, 5).forEach(([verseId, count]) => {
      console.log(`      - verse_id ${verseId}: ${count}번`);
    });
  } else {
    console.log('   ✅ 중복 없음');
  }

  // 5. korean_translations 중복 확인 (verse_id는 unique해야 함)
  console.log('\n5️⃣  korean_translations 중복 확인...');
  const { data: translations } = await supabase
    .from('korean_translations')
    .select('verse_id');

  const translationMap = new Map<number, number>();
  translations?.forEach(t => {
    translationMap.set(t.verse_id, (translationMap.get(t.verse_id) || 0) + 1);
  });

  const translationDuplicates = Array.from(translationMap.entries()).filter(([_, count]) => count > 1);
  if (translationDuplicates.length > 0) {
    console.log(`   ⚠️  ${translationDuplicates.length}개 중복 발견:`);
    translationDuplicates.slice(0, 5).forEach(([verseId, count]) => {
      console.log(`      - verse_id ${verseId}: ${count}번`);
    });
  } else {
    console.log('   ✅ 중복 없음');
  }

  // 6. special_explanations 중복 확인 (verse_id + explanation_type 조합)
  console.log('\n6️⃣  special_explanations 중복 확인...');
  const { data: specials } = await supabase
    .from('special_explanations')
    .select('verse_id, explanation_type');

  const specialMap = new Map<string, number>();
  specials?.forEach(s => {
    const key = `${s.verse_id}-${s.explanation_type}`;
    specialMap.set(key, (specialMap.get(key) || 0) + 1);
  });

  const specialDuplicates = Array.from(specialMap.entries()).filter(([_, count]) => count > 1);
  if (specialDuplicates.length > 0) {
    console.log(`   ⚠️  ${specialDuplicates.length}개 중복 발견:`);
    specialDuplicates.slice(0, 5).forEach(([key, count]) => {
      console.log(`      - verse_id-type: ${key}: ${count}번`);
    });
  } else {
    console.log('   ✅ 중복 없음');
  }

  // 요약
  console.log('\n═══════════════════════════════════════');
  console.log('📊 검사 결과 요약:\n');

  const totalDuplicates =
    verseDuplicates.length +
    structureDuplicates.length +
    vocabDuplicates.length +
    contextDuplicates.length +
    translationDuplicates.length +
    specialDuplicates.length;

  if (totalDuplicates === 0) {
    console.log('✅ 모든 테이블 무결성 정상!');
  } else {
    console.log(`⚠️  총 ${totalDuplicates}개 유형의 중복 발견`);
    console.log('\n상세 내용:');
    if (verseDuplicates.length > 0) console.log(`   - verses: ${verseDuplicates.length}건`);
    if (structureDuplicates.length > 0) console.log(`   - sentence_structures: ${structureDuplicates.length}건`);
    if (vocabDuplicates.length > 0) console.log(`   - vocabulary: ${vocabDuplicates.length}건`);
    if (contextDuplicates.length > 0) console.log(`   - contextual_explanations: ${contextDuplicates.length}건`);
    if (translationDuplicates.length > 0) console.log(`   - korean_translations: ${translationDuplicates.length}건`);
    if (specialDuplicates.length > 0) console.log(`   - special_explanations: ${specialDuplicates.length}건`);
  }

  console.log('\n');
}

checkDataIntegrity().catch(error => {
  console.error('❌ 실행 오류:', error);
  process.exit(1);
});
