import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Monorepo에서 apps/web/.env.local 파일 로드
dotenv.config({ path: path.resolve(__dirname, '../../../apps/web/.env.local') });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
);

async function checkGenesisQuality() {
  console.log('창세기 1장 품질 체크 (처음 5절만)');
  console.log('='.repeat(80));

  // 창세기 ID 찾기
  const { data: book } = await supabase
    .from('books')
    .select('id')
    .ilike('name_english', 'Genesis')
    .single();

  if (!book) {
    console.log('창세기를 찾을 수 없습니다.');
    return;
  }

  // 창세기 1:1-5 조회
  const { data: verses } = await supabase
    .from('verses')
    .select('id, reference, niv_text')
    .eq('book_id', book.id)
    .gte('chapter_number', 1)
    .lte('chapter_number', 1)
    .gte('verse_number', 1)
    .lte('verse_number', 5)
    .order('verse_number');

  if (!verses || verses.length === 0) {
    console.log('창세기 1장 구절을 찾을 수 없습니다.');
    return;
  }

  for (const verse of verses) {
    console.log(`\n${verse.reference}`);
    console.log('-'.repeat(80));

    // 한국어 번역 체크
    const { data: translation } = await supabase
      .from('korean_translations')
      .select('natural_translation')
      .eq('verse_id', verse.id)
      .single();

    if (!translation) {
      console.log('❌ 한국어 번역 없음');
    } else if (translation.natural_translation === verse.niv_text) {
      console.log(`❌ 번역이 영어 그대로: "${translation.natural_translation}"`);
    } else {
      console.log(`✅ 한국어 번역: "${translation.natural_translation}"`);
    }

    // 주요 단어 체크
    const { data: vocab } = await supabase
      .from('vocabulary')
      .select('word, ipa_pronunciation')
      .eq('verse_id', verse.id);

    if (!vocab || vocab.length === 0) {
      console.log('❌ 주요 단어 없음');
    } else {
      const invalidIPA = vocab.filter(
        (v) => v.ipa_pronunciation && !v.ipa_pronunciation.match(/^\[.+\]$/)
      );
      if (invalidIPA.length > 0) {
        console.log(`❌ IPA 형식 오류 (${invalidIPA.length}개): ${invalidIPA.map((v) => v.word).join(', ')}`);
      } else {
        console.log(`✅ 주요 단어 ${vocab.length}개 (IPA 형식 정상)`);
      }
    }

    // 문맥 설명 체크
    const { data: context } = await supabase
      .from('contextual_explanations')
      .select('integrated_explanation')
      .eq('verse_id', verse.id)
      .single();

    if (!context) {
      console.log('❌ 문맥 설명 없음');
    } else if (context.integrated_explanation.length < 200) {
      console.log(`⚠️  문맥 설명 짧음 (${context.integrated_explanation.length}자)`);
    } else {
      console.log(`✅ 문맥 설명 ${context.integrated_explanation.length}자`);
    }
  }

  console.log('\n' + '='.repeat(80));
}

checkGenesisQuality().catch(console.error);
