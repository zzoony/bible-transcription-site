import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

const analyses: AnalysisData[] = [
  {
    reference: "Titus 1:16",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "거짓 주장",
        original_text: "They claim to know God",
        korean_translation: "그들은 하나님을 안다고 주장하지만",
        grammatical_explanation: "claim으로 거짓된 주장 표현"
      },
      {
        sequence_order: 2,
        semantic_classification: "행동으로 부인",
        original_text: "but by their actions they deny him",
        korean_translation: "그들의 행동으로는 그분을 부인합니다",
        grammatical_explanation: "but으로 대조"
      },
      {
        sequence_order: 3,
        semantic_classification: "세 가지 특성",
        original_text: "They are detestable, disobedient and unfit for doing anything good",
        korean_translation: "그들은 가증스럽고, 불순종하며, 어떤 선한 일에도 합당하지 않습니다",
        grammatical_explanation: "3가지 부정적 특성 나열"
      }
    ],
    vocabulary: [
      { word: "claim", ipa_pronunciation: "/kleɪm/", korean_pronunciation: "클레임", definition_korean: "주장하다" },
      { word: "deny", ipa_pronunciation: "/dɪˈnaɪ/", korean_pronunciation: "디나이", definition_korean: "부인하다" },
      { word: "detestable", ipa_pronunciation: "/dɪˈtɛstəbəl/", korean_pronunciation: "디테스터블", definition_korean: "가증스러운" },
      { word: "disobedient", ipa_pronunciation: "/ˌdɪsəˈbiːdiənt/", korean_pronunciation: "디서비디언트", definition_korean: "불순종하는" },
      { word: "unfit", ipa_pronunciation: "/ʌnˈfɪt/", korean_pronunciation: "언핏", definition_korean: "합당하지 않은" }
    ],
    contextual_explanation: {
      integrated_explanation: "거짓 교사들의 결정적 모순이 드러납니다: '하나님을 안다고 주장'(ὁμολογοῦσιν εἰδέναι θεόν)하지만 '행동으로는 부인'(τοῖς δὲ ἔργοις ἀρνοῦνται)합니다. 이는 야고보서 2:14-26의 '행함 없는 믿음'과 같은 문제입니다. 세 가지 특성이 제시됩니다: (1) '가증스러움'(βδελυκτοί - 레위기의 정결법 용어), (2) '불순종'(ἀπειθεῖς - 1:6, 10과 연결), (3) '선한 일에 합당하지 않음'(πρὸς πᾶν ἔργον ἀγαθὸν ἀδόκιμοι). 디도서는 '선한 일'을 강조하는 책으로(2:7, 14; 3:1, 8, 14), 거짓 교사들은 이와 정반대입니다. 1장은 참된 교회 지도자(1:5-9)와 거짓 교사(1:10-16)의 극명한 대조로 마무리됩니다."
    },
    korean_translation: {
      natural_translation: "그들은 하나님을 안다고 주장하지만, 그들의 행동으로는 그분을 부인합니다. 그들은 가증스럽고, 불순종하며, 어떤 선한 일에도 합당하지 않습니다."
    },
    special_explanation: {
      explanation_type: "말과 행동의 일치",
      content: "이 구절은 디도서의 핵심 주제를 요약합니다: 참된 신앙은 고백과 행동의 일치입니다. 1장은 교회 지도자의 자격(1:5-9)으로 시작하여 거짓 교사의 정체(1:10-16)로 끝나며, 양자의 차이는 삶의 열매로 드러납니다. 디도서 전체는 '선한 일'(καλὰ ἔργα, ἔργα ἀγαθά)을 반복 강조하여(2:7, 14; 3:1, 8, 14), 복음이 삶의 변화로 이어져야 함을 가르칩니다."
    }
  }
]

async function main() {
  let successCount = 0
  let failureCount = 0

  for (const analysis of analyses) {
    const success = await saveAnalysisToDb(analysis)
    if (success) {
      successCount++
    } else {
      failureCount++
    }
    await new Promise(resolve => setTimeout(resolve, 1000))
  }

  console.log(`\n=== 완료 ===`)
  console.log(`성공: ${successCount}`)
  console.log(`실패: ${failureCount}`)

  if (successCount > 0) {
    const { createClient } = await import('@supabase/supabase-js')
    const dotenv = await import('dotenv')
    dotenv.config()

    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.SUPABASE_SERVICE_KEY!
    )

    for (const analysis of analyses) {
      await supabase
        .from('verses')
        .update({ analysis_completed: true })
        .eq('reference', analysis.reference)
    }
    console.log(`✅ ${successCount}개 구절 analysis_completed 플래그 업데이트 완료`)
  }
}

main()
