import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';
import * as path from 'path';

// Monorepo에서 apps/web/.env.local 파일 로드
dotenv.config({ path: path.resolve(__dirname, '../../../apps/web/.env.local') });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!,
  { auth: { autoRefreshToken: false, persistSession: false } }
);

async function checkGenesisVerses() {
  console.log('=== 창세기 1:2 확인 ===\n');

  // 창세기 1:2 조회
  const { data: verse2Data } = await supabase
    .from('verses')
    .select('id, reference, niv_text')
    .eq('reference', 'Genesis 1:2')
    .single();

  if (verse2Data) {
    console.log('Reference:', verse2Data.reference);
    console.log('NIV Text:', verse2Data.niv_text?.substring(0, 100));

    // Sentence structures
    const { data: structures2 } = await supabase
      .from('sentence_structures')
      .select('*')
      .eq('verse_id', verse2Data.id);

    console.log('Sentence Structures count:', structures2?.length || 0);
    if (structures2 && structures2.length > 0) {
      console.log('First structure:', JSON.stringify(structures2[0], null, 2));
    }

    // Korean translation
    const { data: translation2 } = await supabase
      .from('korean_translations')
      .select('*')
      .eq('verse_id', verse2Data.id)
      .single();

    console.log('Korean translation:', translation2?.natural_translation?.substring(0, 100));
    console.log('\n');
  }

  console.log('=== 창세기 1:13 이후 확인 ===\n');

  // 창세기 1:13 이후 조회
  const { data: verses13plus } = await supabase
    .from('verses')
    .select('id, reference, niv_text')
    .ilike('reference', 'Genesis 1:%')
    .order('reference');

  if (verses13plus) {
    const filtered = verses13plus.filter(v => {
      const match = v.reference.match(/Genesis 1:(\d+)/);
      return match && parseInt(match[1]) >= 13 && parseInt(match[1]) <= 20;
    });

    console.log(`Found ${filtered.length} verses from 1:13-1:20\n`);

    for (const verse of filtered) {
      console.log('---');
      console.log('Reference:', verse.reference);
      console.log('NIV Text:', verse.niv_text?.substring(0, 80) + '...');

      // Sentence structures
      const { data: structures } = await supabase
        .from('sentence_structures')
        .select('*')
        .eq('verse_id', verse.id);

      console.log('Sentence Structures count:', structures?.length || 0);
      if (structures && structures.length > 0) {
        console.log('First structure sample:', {
          text: structures[0].niv_text?.substring(0, 50),
          classification: structures[0].semantic_classification,
          grammatical_note: structures[0].grammatical_note?.substring(0, 50)
        });
      }

      // Korean translation
      const { data: translation } = await supabase
        .from('korean_translations')
        .select('natural_translation')
        .eq('verse_id', verse.id)
        .single();

      console.log('Korean translation:', translation?.natural_translation?.substring(0, 80) + '...');
      console.log('\n');
    }
  }

  // 패턴 비교
  console.log('=== 패턴 분석 ===\n');

  if (verse2Data && verses13plus) {
    const { data: s2 } = await supabase
      .from('sentence_structures')
      .select('*')
      .eq('verse_id', verse2Data.id);

    const verse13 = verses13plus.find(v => v.reference === 'Genesis 1:13');
    if (verse13) {
      const { data: s13 } = await supabase
        .from('sentence_structures')
        .select('*')
        .eq('verse_id', verse13.id);

      console.log('1:2 sentence_structures:', s2?.length, 'entries');
      console.log('1:13 sentence_structures:', s13?.length, 'entries');

      if (s2 && s2.length > 0) {
        console.log('\n1:2 structure fields:', Object.keys(s2[0]));
      }

      if (s13 && s13.length > 0) {
        console.log('1:13 structure fields:', Object.keys(s13[0]));
      }
    }
  }
}

checkGenesisVerses().catch(console.error);
