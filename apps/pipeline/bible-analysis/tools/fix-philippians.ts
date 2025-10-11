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

async function fixPhilippians(dryRun: boolean = true) {
  console.log('🔧 Philippians 데이터 수정\n');
  console.log('═══════════════════════════════════════\n');

  if (!dryRun) {
    console.log('🚨 실행 모드: 실제 데이터를 수정합니다!\n');
  } else {
    console.log('⚠️  DRY RUN 모드: 실제로 수정하지 않습니다\n');
  }

  // 1. Philippians 1장 구절들의 chapter_id 수정: 3 → 1
  console.log('1️⃣  Philippians 1장 구절 chapter_id 수정: 3 → 1');

  const { data: chapter1Verses } = await supabase
    .from('verses')
    .select('id, reference')
    .eq('book_id', 1)
    .eq('chapter_id', 3)
    .ilike('reference', 'Philippians 1:%');

  console.log(`   대상: ${chapter1Verses?.length || 0}개 구절`);

  if (!dryRun && chapter1Verses) {
    const { error } = await supabase
      .from('verses')
      .update({ chapter_id: 1 })
      .in('id', chapter1Verses.map(v => v.id));

    if (error) {
      console.log(`   ❌ 오류: ${error.message}`);
    } else {
      console.log(`   ✅ ${chapter1Verses.length}개 구절 업데이트 완료`);
    }
  } else if (chapter1Verses) {
    console.log(`   📝 ${chapter1Verses.length}개 구절 업데이트 예정`);
  }

  console.log('');

  // 2. Philippians 3장 구절들의 chapter_id 수정: 1 → 3
  console.log('2️⃣  Philippians 3장 구절 chapter_id 수정: 1 → 3');

  const { data: chapter3Verses } = await supabase
    .from('verses')
    .select('id, reference')
    .eq('book_id', 1)
    .eq('chapter_id', 1)
    .ilike('reference', 'Philippians 3:%');

  console.log(`   대상: ${chapter3Verses?.length || 0}개 구절`);

  if (!dryRun && chapter3Verses) {
    const { error } = await supabase
      .from('verses')
      .update({ chapter_id: 3 })
      .in('id', chapter3Verses.map(v => v.id));

    if (error) {
      console.log(`   ❌ 오류: ${error.message}`);
    } else {
      console.log(`   ✅ ${chapter3Verses.length}개 구절 업데이트 완료`);
    }
  } else if (chapter3Verses) {
    console.log(`   📝 ${chapter3Verses.length}개 구절 업데이트 예정`);
  }

  console.log('');

  // 3. 중복 chapters 삭제: ID 276, 5, 237 (ID 3만 유지)
  console.log('3️⃣  중복 chapters 삭제: ID 276, 5, 237');

  const duplicateChapterIds = [276, 5, 237];

  if (!dryRun) {
    const { error } = await supabase
      .from('chapters')
      .delete()
      .in('id', duplicateChapterIds);

    if (error) {
      console.log(`   ❌ 오류: ${error.message}`);
    } else {
      console.log(`   ✅ 3개 중복 chapters 삭제 완료`);
    }
  } else {
    console.log(`   📝 ID ${duplicateChapterIds.join(', ')} 삭제 예정`);
  }

  console.log('');

  console.log('═══════════════════════════════════════');
  console.log('📊 수정 요약:\n');

  if (!dryRun) {
    console.log('✅ 모든 수정 완료!');
    console.log(`   - Philippians 1장 구절: ${chapter1Verses?.length || 0}개 chapter_id 수정`);
    console.log(`   - Philippians 3장 구절: ${chapter3Verses?.length || 0}개 chapter_id 수정`);
    console.log(`   - 중복 chapters: 3개 삭제`);
  } else {
    console.log('DRY RUN 결과:');
    console.log(`   - Philippians 1장 구절: ${chapter1Verses?.length || 0}개 → chapter_id 1로 변경 예정`);
    console.log(`   - Philippians 3장 구절: ${chapter3Verses?.length || 0}개 → chapter_id 3으로 변경 예정`);
    console.log(`   - 중복 chapters: ID 276, 5, 237 삭제 예정`);
    console.log('\n✅ 실제로 수정하려면: --execute 플래그 사용');
  }

  console.log('\n');
}

async function main() {
  const args = process.argv.slice(2);
  const executeMode = args.includes('--execute');

  await fixPhilippians(!executeMode);
}

main().catch(error => {
  console.error('❌ 오류 발생:', error);
  process.exit(1);
});
