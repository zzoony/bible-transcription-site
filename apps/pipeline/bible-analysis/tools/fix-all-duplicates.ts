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

interface DuplicateRecord {
  ids: number[];
  key: string;
}

/**
 * vocabulary 테이블 중복 제거
 */
async function fixVocabularyDuplicates(dryRun: boolean = true): Promise<number> {
  console.log('📚 vocabulary 테이블 중복 제거 중...');

  // 모든 데이터 가져오기 (페이지네이션 없이)
  let allVocab: any[] = [];
  let from = 0;
  const batchSize = 1000;

  while (true) {
    const { data: vocab } = await supabase
      .from('vocabulary')
      .select('id, verse_id, word')
      .order('id')
      .range(from, from + batchSize - 1);

    if (!vocab || vocab.length === 0) break;

    allVocab = allVocab.concat(vocab);

    if (vocab.length < batchSize) break;
    from += batchSize;
  }

  console.log(`   전체 ${allVocab.length}개 레코드 조회 완료`);

  if (!allVocab || allVocab.length === 0) return 0;

  // 중복 찾기 (verse_id + word 조합)
  const groups = new Map<string, number[]>();
  allVocab.forEach(v => {
    const key = `${v.verse_id}-${v.word}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(v.id);
  });

  const duplicates = Array.from(groups.entries())
    .filter(([_, ids]) => ids.length > 1)
    .map(([key, ids]) => ({ key, ids }));

  console.log(`   발견: ${duplicates.length}개 중복 그룹`);

  if (dryRun) {
    duplicates.slice(0, 3).forEach(({ key, ids }) => {
      console.log(`   예: ${key} → IDs: ${ids.join(', ')} (${ids.slice(0, -1).join(', ')} 삭제 예정)`);
    });
    return duplicates.length;
  }

  // 실제 삭제
  let deleted = 0;
  for (const { key, ids } of duplicates) {
    const idsToDelete = ids.slice(0, -1); // 마지막(최신) 제외하고 삭제
    const { error } = await supabase
      .from('vocabulary')
      .delete()
      .in('id', idsToDelete);

    if (!error) {
      deleted += idsToDelete.length;
    } else {
      console.log(`   ⚠️  ${key} 삭제 실패: ${error.message}`);
    }
  }

  console.log(`   ✅ ${deleted}개 레코드 삭제 완료`);
  return deleted;
}

/**
 * contextual_explanations 테이블 중복 제거
 */
async function fixContextualDuplicates(dryRun: boolean = true): Promise<number> {
  console.log('📖 contextual_explanations 테이블 중복 제거 중...');

  const { data: contexts } = await supabase
    .from('contextual_explanations')
    .select('id, verse_id')
    .order('id');

  if (!contexts) return 0;

  // 중복 찾기 (verse_id)
  const groups = new Map<number, number[]>();
  contexts.forEach(c => {
    if (!groups.has(c.verse_id)) groups.set(c.verse_id, []);
    groups.get(c.verse_id)!.push(c.id);
  });

  const duplicates = Array.from(groups.entries())
    .filter(([_, ids]) => ids.length > 1)
    .map(([verseId, ids]) => ({ key: `verse_${verseId}`, ids }));

  console.log(`   발견: ${duplicates.length}개 중복 그룹`);

  if (dryRun) {
    duplicates.slice(0, 3).forEach(({ key, ids }) => {
      console.log(`   예: ${key} → IDs: ${ids.join(', ')} (${ids.slice(0, -1).join(', ')} 삭제 예정)`);
    });
    return duplicates.length;
  }

  // 실제 삭제
  let deleted = 0;
  for (const { ids } of duplicates) {
    const idsToDelete = ids.slice(0, -1);
    const { error } = await supabase
      .from('contextual_explanations')
      .delete()
      .in('id', idsToDelete);

    if (!error) {
      deleted += idsToDelete.length;
    }
  }

  console.log(`   ✅ ${deleted}개 레코드 삭제 완료`);
  return deleted;
}

/**
 * korean_translations 테이블 중복 제거
 */
async function fixTranslationDuplicates(dryRun: boolean = true): Promise<number> {
  console.log('🇰🇷 korean_translations 테이블 중복 제거 중...');

  const { data: translations } = await supabase
    .from('korean_translations')
    .select('id, verse_id')
    .order('id');

  if (!translations) return 0;

  // 중복 찾기 (verse_id)
  const groups = new Map<number, number[]>();
  translations.forEach(t => {
    if (!groups.has(t.verse_id)) groups.set(t.verse_id, []);
    groups.get(t.verse_id)!.push(t.id);
  });

  const duplicates = Array.from(groups.entries())
    .filter(([_, ids]) => ids.length > 1)
    .map(([verseId, ids]) => ({ key: `verse_${verseId}`, ids }));

  console.log(`   발견: ${duplicates.length}개 중복 그룹`);

  if (dryRun) {
    duplicates.slice(0, 3).forEach(({ key, ids }) => {
      console.log(`   예: ${key} → IDs: ${ids.join(', ')} (${ids.slice(0, -1).join(', ')} 삭제 예정)`);
    });
    return duplicates.length;
  }

  // 실제 삭제
  let deleted = 0;
  for (const { ids } of duplicates) {
    const idsToDelete = ids.slice(0, -1);
    const { error } = await supabase
      .from('korean_translations')
      .delete()
      .in('id', idsToDelete);

    if (!error) {
      deleted += idsToDelete.length;
    }
  }

  console.log(`   ✅ ${deleted}개 레코드 삭제 완료`);
  return deleted;
}

/**
 * special_explanations 테이블 중복 제거
 */
async function fixSpecialDuplicates(dryRun: boolean = true): Promise<number> {
  console.log('⭐ special_explanations 테이블 중복 제거 중...');

  const { data: specials } = await supabase
    .from('special_explanations')
    .select('id, verse_id, explanation_type')
    .order('id');

  if (!specials) return 0;

  // 중복 찾기 (verse_id + explanation_type 조합)
  const groups = new Map<string, number[]>();
  specials.forEach(s => {
    const key = `${s.verse_id}-${s.explanation_type || 'null'}`;
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(s.id);
  });

  const duplicates = Array.from(groups.entries())
    .filter(([_, ids]) => ids.length > 1)
    .map(([key, ids]) => ({ key, ids }));

  console.log(`   발견: ${duplicates.length}개 중복 그룹`);

  if (dryRun) {
    duplicates.slice(0, 3).forEach(({ key, ids }) => {
      console.log(`   예: ${key} → IDs: ${ids.join(', ')} (${ids.slice(0, -1).join(', ')} 삭제 예정)`);
    });
    return duplicates.length;
  }

  // 실제 삭제
  let deleted = 0;
  for (const { ids } of duplicates) {
    const idsToDelete = ids.slice(0, -1);
    const { error } = await supabase
      .from('special_explanations')
      .delete()
      .in('id', idsToDelete);

    if (!error) {
      deleted += idsToDelete.length;
    }
  }

  console.log(`   ✅ ${deleted}개 레코드 삭제 완료`);
  return deleted;
}

/**
 * 메인 실행
 */
async function main() {
  const args = process.argv.slice(2);
  const executeMode = args.includes('--execute');

  console.log('🔧 데이터베이스 중복 제거 도구\n');
  console.log('═══════════════════════════════════════\n');

  if (!executeMode) {
    console.log('⚠️  DRY RUN 모드 (실제 삭제하지 않음)');
    console.log('💡 실제 삭제하려면: --execute 플래그 사용\n');
  } else {
    console.log('🚨 실행 모드 (실제 삭제 진행)\n');
  }

  const vocabCount = await fixVocabularyDuplicates(executeMode ? false : true);
  console.log('');

  const contextCount = await fixContextualDuplicates(executeMode ? false : true);
  console.log('');

  const translationCount = await fixTranslationDuplicates(executeMode ? false : true);
  console.log('');

  const specialCount = await fixSpecialDuplicates(executeMode ? false : true);
  console.log('');

  console.log('═══════════════════════════════════════');
  console.log('📊 요약:\n');

  if (!executeMode) {
    console.log('발견된 중복 그룹:');
    console.log(`   - vocabulary: ${vocabCount}개`);
    console.log(`   - contextual_explanations: ${contextCount}개`);
    console.log(`   - korean_translations: ${translationCount}개`);
    console.log(`   - special_explanations: ${specialCount}개`);
    console.log(`\n총 ${vocabCount + contextCount + translationCount + specialCount}개 중복 그룹`);
    console.log('\n✅ 실제 삭제하려면: --execute 플래그와 함께 재실행\n');
  } else {
    console.log('삭제 완료!');
    console.log('\n🎉 모든 중복이 제거되었습니다.\n');
  }
}

main().catch(error => {
  console.error('❌ 오류 발생:', error);
  process.exit(1);
});
