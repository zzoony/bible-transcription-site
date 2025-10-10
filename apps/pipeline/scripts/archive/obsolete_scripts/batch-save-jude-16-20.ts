import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

const analyses: AnalysisData[] = [
  {
    reference: "Jude 1:16",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "주절",
        original_text: "These people are grumblers and faultfinders",
        korean_translation: "이 사람들은 불평하고 흠잡는 자들이며",
        grammatical_explanation: "특성 1"
      },
      {
        sequence_order: 2,
        semantic_classification: "병렬절",
        original_text: "they follow their own evil desires",
        korean_translation: "자신의 악한 욕망을 따르고",
        grammatical_explanation: "특성 2"
      },
      {
        sequence_order: 3,
        semantic_classification: "병렬절",
        original_text: "they boast about themselves and flatter others for their own advantage",
        korean_translation: "자신을 자랑하며 이익을 위해 남을 아첨합니다",
        grammatical_explanation: "특성 3, 4"
      }
    ],
    vocabulary: [
      { word: "grumblers", ipa_pronunciation: "/ˈɡrʌmblərz/", korean_pronunciation: "그럼블러즈", definition_korean: "불평하는 자들" },
      { word: "faultfinders", ipa_pronunciation: "/ˈfɔːltˌfaɪndərz/", korean_pronunciation: "폴트파인더즈", definition_korean: "흠잡는 자들" },
      { word: "boast", ipa_pronunciation: "/boʊst/", korean_pronunciation: "보스트", definition_korean: "자랑하다" },
      { word: "flatter", ipa_pronunciation: "/ˈflætər/", korean_pronunciation: "플래터", definition_korean: "아첨하다" },
      { word: "advantage", ipa_pronunciation: "/ədˈvæntɪdʒ/", korean_pronunciation: "어드밴티지", definition_korean: "이익, 유리함" }
    ],
    contextual_explanation: {
      integrated_explanation: "유다는 거짓 교사들의 네 가지 성격적 특징을 열거합니다. 첫째, '불평하는 자들'로 하나님의 섭리에 만족하지 않습니다(출애굽 세대와 유사). 둘째, '흠잡는 자들'로 타인을 비판합니다. 셋째, '자신의 악한 욕망을 따릅니다'(성적 방종, 물질 탐욕). 넷째, '자신을 자랑하고 이익을 위해 타인을 아첨합니다'. 이들은 겉으로는 거창해 보이지만 본질적으로 자기중심적이고 기회주의적입니다."
    },
    korean_translation: {
      natural_translation: "이 사람들은 불평하고 흠잡는 자들이며, 자신의 악한 욕망을 따르고, 자신을 자랑하며 이익을 위해 남을 아첨합니다."
    },
    special_explanation: {
      explanation_type: "성경 배경",
      content: "'grumblers'(γογγυσταί)는 출애굽 세대가 광야에서 모세와 하나님께 불평한 것을 연상시킵니다. 'flatter others for their own advantage'는 부유하거나 영향력 있는 사람들에게 아첨하여 물질적 이득을 취하는 행태를 가리킵니다."
    }
  },
  {
    reference: "Jude 1:17",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "주절",
        original_text: "But, dear friends, remember",
        korean_translation: "그러나 사랑하는 여러분, 기억하십시오",
        grammatical_explanation: "명령"
      },
      {
        sequence_order: 2,
        semantic_classification: "명사절",
        original_text: "what the apostles of our Lord Jesus Christ foretold",
        korean_translation: "우리 주 예수 그리스도의 사도들이 미리 말한 것을",
        grammatical_explanation: "기억할 내용"
      }
    ],
    vocabulary: [
      { word: "dear", ipa_pronunciation: "/dɪər/", korean_pronunciation: "디어", definition_korean: "사랑하는" },
      { word: "remember", ipa_pronunciation: "/rɪˈmɛmbər/", korean_pronunciation: "리멤버", definition_korean: "기억하다" },
      { word: "apostles", ipa_pronunciation: "/əˈpɒsəlz/", korean_pronunciation: "어파슬즈", definition_korean: "사도들" },
      { word: "foretold", ipa_pronunciation: "/fɔːrˈtoʊld/", korean_pronunciation: "포어톨드", definition_korean: "미리 말하다, 예언하다" }
    ],
    contextual_explanation: {
      integrated_explanation: "유다는 거짓 교사들에 대한 고발(1:3-16)에서 독자들에 대한 권면(1:17-23)으로 전환합니다. '사랑하는 친구들'이라는 호칭은 공동체의 친밀함을 강조하며, 독자들을 거짓 교사들과 구별합니다. 유다는 독자들에게 '사도들이 미리 말한 것'을 기억하라고 권면하는데, 이는 거짓 교사들의 출현이 예상 밖의 사건이 아님을 상기시킵니다. 사도들의 예언적 경고는 신약 교회의 권위 있는 가르침으로 인정됩니다."
    },
    korean_translation: {
      natural_translation: "그러나 사랑하는 여러분, 우리 주 예수 그리스도의 사도들이 미리 말한 것을 기억하십시오."
    },
    special_explanation: {
      explanation_type: "문학적 구조",
      content: "'dear friends'(ἀγαπητοί)는 유다서에서 세 번 등장하며(1:3, 1:17, 1:20), 독자들과의 정서적 유대를 강조합니다. 유다는 자신을 사도들과 구별하여(1:1에서 '사도'를 칭하지 않음), 사도들의 가르침에 복종하는 자세를 보입니다."
    }
  },
  {
    reference: "Jude 1:18",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "주절",
        original_text: "They said to you",
        korean_translation: "그들이 여러분에게 말하기를",
        grammatical_explanation: "발화 동사"
      },
      {
        sequence_order: 2,
        semantic_classification: "직접 인용",
        original_text: "In the last times there will be scoffers",
        korean_translation: "마지막 때에 조롱하는 자들이 나타날 것입니다",
        grammatical_explanation: "예언 내용 1"
      },
      {
        sequence_order: 3,
        semantic_classification: "관계절",
        original_text: "who will follow their own ungodly desires",
        korean_translation: "자기 자신의 경건하지 않은 욕망을 따르는",
        grammatical_explanation: "예언 내용 2"
      }
    ],
    vocabulary: [
      { word: "last times", ipa_pronunciation: "/læst taɪmz/", korean_pronunciation: "라스트 타임즈", definition_korean: "마지막 때" },
      { word: "scoffers", ipa_pronunciation: "/ˈskɒfərz/", korean_pronunciation: "스코퍼즈", definition_korean: "조롱하는 자들" },
      { word: "follow", ipa_pronunciation: "/ˈfɒloʊ/", korean_pronunciation: "팔로우", definition_korean: "따르다" }
    ],
    contextual_explanation: {
      integrated_explanation: "유다는 사도들의 예언을 직접 인용합니다. '마지막 때'(ἐν ἐσχάτῳ χρόνῳ)는 메시아의 초림과 재림 사이의 교회 시대 전체를 가리키며, 거짓 교사들의 출현은 이 시대의 특징입니다. '조롱하는 자들'(ἐμπαῖκται)은 하나님과 진리를 비웃고 조롱하는 자들을 의미합니다. 이들의 특징은 '자신의 경건하지 않은 욕망을 따르는 것'으로, 1:16의 묘사와 일치합니다. 이 예언은 베드로후서 3:3과 유사합니다."
    },
    korean_translation: {
      natural_translation: "그들이 여러분에게 말하기를, '마지막 때에 자기 자신의 경건하지 않은 욕망을 따르는 조롱하는 자들이 나타날 것입니다'라고 했습니다."
    },
    special_explanation: {
      explanation_type: "종말론적 배경",
      content: "'last times'는 신약의 종말론적 시간관을 반영하며, 현재 교회 시대 전체가 '마지막 때'에 속합니다. 'scoffers'는 베드로후서 3:3-4에서 그리스도의 재림을 조롱하는 자들로 구체화됩니다."
    }
  },
  {
    reference: "Jude 1:19",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "주절",
        original_text: "These are the people who divide you",
        korean_translation: "이들은 여러분을 분열시키고",
        grammatical_explanation: "정체와 행위 1"
      },
      {
        sequence_order: 2,
        semantic_classification: "관계절",
        original_text: "who follow mere natural instincts",
        korean_translation: "단지 본능적 욕망만을 따르며",
        grammatical_explanation: "행위 2"
      },
      {
        sequence_order: 3,
        semantic_classification: "병렬절",
        original_text: "and do not have the Spirit",
        korean_translation: "성령을 소유하지 못한 자들입니다",
        grammatical_explanation: "영적 결핍"
      }
    ],
    vocabulary: [
      { word: "divide", ipa_pronunciation: "/dɪˈvaɪd/", korean_pronunciation: "디바이드", definition_korean: "나누다, 분열시키다" },
      { word: "mere", ipa_pronunciation: "/mɪər/", korean_pronunciation: "미어", definition_korean: "단지, 오직" },
      { word: "natural instincts", ipa_pronunciation: "/ˈnætʃərəl ˈɪnstɪŋkts/", korean_pronunciation: "내추럴 인스팅츠", definition_korean: "본성적 욕구" },
      { word: "Spirit", ipa_pronunciation: "/ˈspɪrɪt/", korean_pronunciation: "스피릿", definition_korean: "성령" }
    ],
    contextual_explanation: {
      integrated_explanation: "유다는 거짓 교사들의 세 가지 치명적 특징을 제시합니다. 첫째, '여러분을 분열시키는 자들'로, 교회 공동체의 일치를 파괴합니다. 둘째, '단지 본능적 욕망을 따르는 자들'(ψυχικοί)로, 영적 차원이 아닌 육체적·심리적 차원에서만 행동합니다. 셋째, '성령을 소유하지 않은 자들'로, 진정한 신자가 아님을 드러냅니다. '성령을 갖지 않음'은 구원받지 못한 상태를 의미합니다(로마서 8:9)."
    },
    korean_translation: {
      natural_translation: "이들은 여러분을 분열시키고, 단지 본능적 욕망만을 따르며, 성령을 소유하지 못한 자들입니다."
    },
    special_explanation: {
      explanation_type: "영적 진단",
      content: "'divide'(ἀποδιορίζοντες)는 교회를 파당으로 나누는 것으로, 거짓 교사들이 자신의 추종자들을 만들어냈음을 암시합니다. 'natural instincts'(ψυχικοί)는 고린도전서 2:14의 '육에 속한 사람'과 유사한 개념으로, 성령의 인도를 받지 않는 자연적 인간을 의미합니다. 'do not have the Spirit'는 거짓 교사들의 가장 근본적인 문제로, 그들이 아무리 영적으로 보여도 실제로는 성령이 없는 자들임을 선언합니다."
    }
  },
  {
    reference: "Jude 1:20",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "대조 주어",
        original_text: "But you, dear friends",
        korean_translation: "그러나 사랑하는 여러분",
        grammatical_explanation: "독자들 강조"
      },
      {
        sequence_order: 2,
        semantic_classification: "분사구",
        original_text: "by building yourselves up in your most holy faith",
        korean_translation: "여러분의 가장 거룩한 믿음 위에 자신을 세우고",
        grammatical_explanation: "수단 1"
      },
      {
        sequence_order: 3,
        semantic_classification: "병렬 분사구",
        original_text: "and praying in the Holy Spirit",
        korean_translation: "성령 안에서 기도하며",
        grammatical_explanation: "수단 2"
      }
    ],
    vocabulary: [
      { word: "building up", ipa_pronunciation: "/ˈbɪldɪŋ ʌp/", korean_pronunciation: "빌딩 업", definition_korean: "세우다, 건축하다" },
      { word: "most holy", ipa_pronunciation: "/moʊst ˈhoʊli/", korean_pronunciation: "모스트 홀리", definition_korean: "가장 거룩한" },
      { word: "praying", ipa_pronunciation: "/ˈpreɪɪŋ/", korean_pronunciation: "프레잉", definition_korean: "기도하다" }
    ],
    contextual_explanation: {
      integrated_explanation: "유다는 거짓 교사들(1:19)과 대조하여 독자들에게 권면합니다. '그러나 여러분은'이라는 강조적 대조는 신자들의 다른 길을 제시합니다. 첫째, '가장 거룩한 믿음 안에서 자신을 세우라'는 것은 사도적 진리(1:3의 '한 번에 맡겨진 믿음')를 통해 영적 성장을 이루라는 의미입니다. 둘째, '성령 안에서 기도하라'는 것은 성령의 인도와 능력으로 기도하라는 뜻으로, 거짓 교사들이 '성령을 갖지 못한 것'(1:19)과 대조됩니다."
    },
    korean_translation: {
      natural_translation: "그러나 사랑하는 여러분, 여러분의 가장 거룩한 믿음 위에 자신을 세우고, 성령 안에서 기도하며,"
    },
    special_explanation: {
      explanation_type: "영적 성장",
      content: "'most holy faith'(ἁγιωτάτῃ πίστει)는 객관적 복음 진리를 가리키며, 주관적 믿음의 행위가 아닙니다. 'praying in the Holy Spirit'는 에베소서 6:18의 '항상 성령 안에서 기도하라'와 일치하며, 성령의 도우심과 인도하심 속에서의 기도를 의미합니다. 이 구절은 1:21로 계속되는 문장의 일부로, 여러 분사구들이 명령의 수단을 제시합니다."
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
