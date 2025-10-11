import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

// ✅ 환경 변수 로드 (ENV_SETUP.md 참조)
dotenv.config({
  path: path.resolve(__dirname, '../../../../apps/web/.env.local')
});

// ✅ Supabase 클라이언트 생성
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!  // 서버 측 작업에는 SERVICE_KEY
);

interface DuplicateGroup {
  reference: string;
  count: number;
  verse_ids: number[];
}

/**
 * 중복된 구절 찾기
 */
async function findDuplicates(): Promise<DuplicateGroup[]> {
  console.log('🔍 중복 구절 검색 중...\n');

  // verses 테이블에서 reference로 그룹화하여 중복 찾기
  const { data: verses, error } = await supabase
    .from('verses')
    .select('id, reference')
    .order('reference');

  if (error) {
    console.error('❌ 구절 조회 실패:', error.message);
    return [];
  }

  // reference별로 그룹화
  const groupedByReference = new Map<string, number[]>();

  for (const verse of verses || []) {
    if (!groupedByReference.has(verse.reference)) {
      groupedByReference.set(verse.reference, []);
    }
    groupedByReference.get(verse.reference)!.push(verse.id);
  }

  // 중복된 것만 필터링 (2개 이상)
  const duplicates: DuplicateGroup[] = [];

  for (const [reference, ids] of groupedByReference.entries()) {
    if (ids.length > 1) {
      duplicates.push({
        reference,
        count: ids.length,
        verse_ids: ids.sort((a, b) => a - b) // ID 순서로 정렬
      });
    }
  }

  return duplicates;
}

/**
 * 특정 구절의 관련 데이터 삭제
 */
async function deleteVerseRelatedData(verseId: number): Promise<void> {
  // Foreign Key 관계에 따라 순서대로 삭제
  const tables = [
    'sentence_structures',
    'vocabulary',
    'contextual_explanations',
    'korean_translations',
    'special_explanations'
  ];

  for (const table of tables) {
    const { error } = await supabase
      .from(table)
      .delete()
      .eq('verse_id', verseId);

    if (error) {
      console.error(`  ⚠️ ${table} 삭제 실패:`, error.message);
    }
  }

  // 마지막으로 verses 삭제
  const { error } = await supabase
    .from('verses')
    .delete()
    .eq('id', verseId);

  if (error) {
    console.error(`  ❌ verse 삭제 실패:`, error.message);
  }
}

/**
 * 중복 제거 실행
 */
async function removeDuplicates(
  duplicates: DuplicateGroup[],
  dryRun: boolean = true
): Promise<void> {
  console.log(`\n📊 발견된 중복 구절: ${duplicates.length}개\n`);

  if (duplicates.length === 0) {
    console.log('✅ 중복된 구절이 없습니다!\n');
    return;
  }

  // 중복 목록 출력
  for (const dup of duplicates) {
    console.log(`📖 ${dup.reference}`);
    console.log(`   중복 횟수: ${dup.count}회`);
    console.log(`   Verse IDs: ${dup.verse_ids.join(', ')}`);
    console.log(`   유지할 ID: ${dup.verse_ids[dup.verse_ids.length - 1]} (최신)`);
    console.log(`   삭제할 ID: ${dup.verse_ids.slice(0, -1).join(', ')}\n`);
  }

  if (dryRun) {
    console.log('⚠️  Dry Run 모드: 실제 삭제하지 않음');
    console.log('💡 실제 삭제하려면: --execute 플래그 사용\n');
    return;
  }

  // 실제 삭제 수행
  console.log('🗑️  중복 제거 시작...\n');

  let totalDeleted = 0;

  for (const dup of duplicates) {
    // 최신 것(마지막 ID)을 제외한 나머지 삭제
    const idsToDelete = dup.verse_ids.slice(0, -1);

    console.log(`📖 ${dup.reference} 처리 중...`);

    for (const verseId of idsToDelete) {
      console.log(`  🗑️  Verse ID ${verseId} 삭제 중...`);
      await deleteVerseRelatedData(verseId);
      totalDeleted++;
    }

    console.log(`  ✅ 완료 (${idsToDelete.length}개 삭제)\n`);
  }

  console.log(`\n🎉 중복 제거 완료!`);
  console.log(`   총 ${totalDeleted}개의 중복 구절 삭제됨\n`);
}

/**
 * 특정 책의 중복만 찾기
 */
async function findDuplicatesByBook(bookName: string): Promise<DuplicateGroup[]> {
  console.log(`🔍 ${bookName}의 중복 구절 검색 중...\n`);

  const { data: verses, error } = await supabase
    .from('verses')
    .select('id, reference')
    .ilike('reference', `${bookName}%`)
    .order('reference');

  if (error) {
    console.error('❌ 구절 조회 실패:', error.message);
    return [];
  }

  // reference별로 그룹화
  const groupedByReference = new Map<string, number[]>();

  for (const verse of verses || []) {
    if (!groupedByReference.has(verse.reference)) {
      groupedByReference.set(verse.reference, []);
    }
    groupedByReference.get(verse.reference)!.push(verse.id);
  }

  // 중복된 것만 필터링
  const duplicates: DuplicateGroup[] = [];

  for (const [reference, ids] of groupedByReference.entries()) {
    if (ids.length > 1) {
      duplicates.push({
        reference,
        count: ids.length,
        verse_ids: ids.sort((a, b) => a - b)
      });
    }
  }

  return duplicates;
}

/**
 * 메인 실행
 */
async function main() {
  const args = process.argv.slice(2);
  const executeMode = args.includes('--execute');
  const bookName = args.find(arg => arg.startsWith('--book='))?.split('=')[1];

  console.log('🗄️  데이터베이스 중복 제거 도구\n');
  console.log('═══════════════════════════════════════\n');

  let duplicates: DuplicateGroup[];

  if (bookName) {
    duplicates = await findDuplicatesByBook(bookName);
  } else {
    duplicates = await findDuplicates();
  }

  await removeDuplicates(duplicates, !executeMode);
}

main().catch(error => {
  console.error('❌ 오류 발생:', error);
  process.exit(1);
});
