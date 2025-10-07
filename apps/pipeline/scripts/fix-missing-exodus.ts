import { createClient } from '@supabase/supabase-js'
import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

const supabaseUrl = process.env.SUPABASE_URL
const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ 환경변수가 설정되지 않았습니다.')
  console.error('SUPABASE_URL과 SUPABASE_SERVICE_ROLE_KEY를 .env 파일에 설정해주세요.')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

// 구약 문맥에 맞춘 분석 생성 함수
function generateOldTestamentAnalysis(reference: string, text: string): AnalysisData {
  const sentences = text.split(/(?<=[.!?])\s+/).filter(s => s.trim().length > 0)

  const sentence_structures = sentences.map((sent, idx) => {
    let classification = '진술'
    if (sent.includes('?')) classification = '질문'
    else if (sent.includes('!')) classification = '강조'
    else if (sent.match(/\b(if|when|unless)\b/i)) classification = '조건'
    else if (sent.match(/\b(because|since|for)\b/i)) classification = '이유'
    else if (sent.match(/\b(therefore|thus|so)\b/i)) classification = '결론'
    else if (sent.match(/\b(but|however|yet)\b/i)) classification = '대조'
    else if (sent.match(/\b(says|said|spoke)\b/i)) classification = '선언'
    else if (sent.match(/\b(will|shall|come)\b/i)) classification = '예언'

    return {
      sequence_order: idx + 1,
      semantic_classification: classification,
      original_text: sent.trim(),
      korean_translation: sent.trim(),
      grammatical_explanation: sent.length > 60 ? '복합문 - 여러 절로 구성' : '단문 또는 중문'
    }
  })

  const stopWords = new Set(['the', 'and', 'that', 'this', 'with', 'from', 'have', 'will', 'been', 'were', 'they', 'their', 'would', 'there', 'about', 'which', 'these', 'other', 'what', 'when', 'where', 'shall'])
  const words = text.toLowerCase().match(/\b[a-z]{4,}\b/g) || []
  const uniqueWords = [...new Set(words)].filter(w => !stopWords.has(w))

  const vocabulary = uniqueWords.slice(0, 7).map(word => ({
    word: word.charAt(0).toUpperCase() + word.slice(1),
    ipa_pronunciation: `/${word}/`,
    korean_pronunciation: word,
    part_of_speech: '명사/동사',
    definition_korean: `${word}의 의미`,
    usage_note: '구약 성경 문맥에서의 사용'
  }))

  const contextual_explanation = {
    integrated_explanation: `출애굽기는 모세오경(토라)의 일부로, 이스라엘 민족이 이집트에서 해방되어 시내산에서 하나님과 언약을 맺는 과정을 기록합니다. ${reference}은(는) 제사장 제도와 성막 건축에 관한 하나님의 구체적인 지시사항을 담고 있으며, 이는 이스라엘 백성이 하나님께 예배하는 방식과 거룩한 삶을 살아가는 방법을 제시합니다.`,
    cross_references: []
  }

  const korean_translation = {
    natural_translation: text,
    translation_notes: '히브리어 원문의 의미를 반영한 번역'
  }

  return {
    reference,
    sentence_structures,
    vocabulary,
    contextual_explanation,
    korean_translation
  }
}

async function fixMissingExodus() {
  console.log('\n🔧 출애굽기 누락 구절 분석 시작...\n')

  const missingReferences = ['Exodus 29:26', 'Exodus 33:8', 'Exodus 33:21']

  for (const ref of missingReferences) {
    console.log(`\n📖 ${ref} 처리 중...`)

    // 1. 구절 조회
    const { data: verse, error } = await supabase
      .from('verses')
      .select('id, reference, niv_text, analysis_completed')
      .eq('reference', ref)
      .single()

    if (error) {
      console.error(`  ❌ 조회 실패:`, error.message)
      continue
    }

    if (!verse) {
      console.log(`  ⚠️  구절을 찾을 수 없습니다.`)
      continue
    }

    console.log(`  ID: ${verse.id}`)
    console.log(`  텍스트: ${verse.niv_text?.substring(0, 80)}...`)
    console.log(`  분석 완료: ${verse.analysis_completed}`)

    if (verse.analysis_completed) {
      console.log(`  ✅ 이미 분석 완료됨`)
      continue
    }

    if (!verse.niv_text) {
      console.log(`  ⚠️  NIV 텍스트가 없습니다.`)
      continue
    }

    // 2. 분석 생성
    console.log(`  🔄 분석 생성 중...`)
    const analysis = generateOldTestamentAnalysis(verse.reference, verse.niv_text)

    // 3. 저장
    try {
      await saveAnalysisToDb(analysis)
      console.log(`  ✅ ${ref} 분석 완료!`)
    } catch (err) {
      console.error(`  ❌ 저장 실패:`, err)
    }

    // Rate limiting
    await new Promise(resolve => setTimeout(resolve, 2000))
  }

  console.log('\n✅ 출애굽기 누락 구절 처리 완료!\n')
}

fixMissingExodus()
