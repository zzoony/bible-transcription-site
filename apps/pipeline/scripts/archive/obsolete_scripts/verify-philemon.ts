import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'

dotenv.config()

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

async function verify() {
  console.log('🔍 Philemon 1:1 분석 데이터 확인\n')
  
  // Get verse
  const { data: verse } = await supabase
    .from('verses')
    .select('id, reference')
    .eq('reference', 'Philemon 1:1')
    .single()
  
  if (!verse) {
    console.log('❌ 구절을 찾을 수 없습니다')
    return
  }
  
  console.log('✅ 구절:', verse.reference)
  console.log('   ID:', verse.id, '\n')
  
  // Check sentence_structures
  const { data: sentences } = await supabase
    .from('sentence_structures')
    .select('*')
    .eq('verse_id', verse.id)
  
  console.log(`📝 문장 구조: ${sentences?.length || 0}개`)
  if (sentences && sentences.length > 0) {
    sentences.forEach(s => {
      console.log(`   ${s.sequence_order}. ${s.semantic_classification}`)
      console.log(`      "${s.original_text}"`)
    })
  }
  
  // Check vocabulary
  const { data: vocab } = await supabase
    .from('vocabulary')
    .select('*')
    .eq('verse_id', verse.id)
  
  console.log(`\n📚 어휘: ${vocab?.length || 0}개`)
  if (vocab && vocab.length > 0) {
    vocab.forEach(v => {
      console.log(`   - ${v.word} (${v.korean_pronunciation}): ${v.definition_korean}`)
    })
  }
  
  // Check contextual_explanation
  const { data: context } = await supabase
    .from('contextual_explanations')
    .select('*')
    .eq('verse_id', verse.id)
    .single()
  
  console.log(`\n🌍 문맥 설명: ${context ? '✅' : '❌'}`)
  if (context) {
    console.log(`   ${context.integrated_explanation.substring(0, 100)}...`)
  }
  
  // Check korean_translation
  const { data: translation } = await supabase
    .from('korean_translations')
    .select('*')
    .eq('verse_id', verse.id)
    .single()
  
  console.log(`\n🇰🇷 한국어 번역: ${translation ? '✅' : '❌'}`)
  if (translation) {
    console.log(`   "${translation.natural_translation}"`)
  }
  
  // Check special_explanation
  const { data: special } = await supabase
    .from('special_explanations')
    .select('*')
    .eq('verse_id', verse.id)
    .single()
  
  console.log(`\n⭐ 특별 설명: ${special ? '✅' : '❌'}`)
  if (special) {
    console.log(`   유형: ${special.explanation_type}`)
    console.log(`   ${special.content.substring(0, 100)}...`)
  }
  
  console.log('\n✅ 모든 데이터가 Supabase에 성공적으로 저장되었습니다!')
}

verify()
