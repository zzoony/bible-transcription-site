import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

const analyses: AnalysisData[] = [
  {
    reference: "2 Corinthians 1:1",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "발신자 소개 - 바울",
        original_text: "Paul, an apostle of Christ Jesus by the will of God",
        korean_translation: "하나님의 뜻으로 말미암아 그리스도 예수의 사도인 바울",
        grammatical_explanation: "동격 명사구로 사도권 강조"
      },
      {
        sequence_order: 2,
        semantic_classification: "발신자 소개 - 디모데",
        original_text: "and Timothy our brother",
        korean_translation: "그리고 우리 형제 디모데가",
        grammatical_explanation: "동격 접속으로 공동 발신자 명시"
      },
      {
        sequence_order: 3,
        semantic_classification: "수신자 지정 - 교회",
        original_text: "To the church of God in Corinth",
        korean_translation: "고린도에 있는 하나님의 교회에게",
        grammatical_explanation: "전치사구로 수신자 명시"
      },
      {
        sequence_order: 4,
        semantic_classification: "수신자 확장 - 아가야",
        original_text: "together with all his holy people throughout Achaia",
        korean_translation: "아가야 전역에 있는 모든 성도들과 함께",
        grammatical_explanation: "확장된 수신자 범위"
      }
    ],
    vocabulary: [
      { word: "apostle", ipa_pronunciation: "/əˈpɒsəl/", korean_pronunciation: "어파슬", definition_korean: "사도" },
      { word: "will", ipa_pronunciation: "/wɪl/", korean_pronunciation: "윌", definition_korean: "뜻, 의지" },
      { word: "holy people", ipa_pronunciation: "/ˈhoʊli ˈpiːpəl/", korean_pronunciation: "홀리 피플", definition_korean: "성도들" },
      { word: "throughout", ipa_pronunciation: "/θruːˈaʊt/", korean_pronunciation: "쓰루아웃", definition_korean: "전역에, 도처에" }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 자신을 '하나님의 뜻으로 말미암은 사도'로 소개하며 권위를 확립합니다. 디모데를 '형제'로 포함시켜 동역자 관계를 나타냅니다. 수신자는 '고린도 교회'뿐 아니라 '아가야 전역의 성도들'로 확장되어, 서신의 범위가 더 넓음을 시사합니다. 아가야는 로마 속주로 그리스 남부 지역을 가리킵니다."
    },
    korean_translation: {
      natural_translation: "하나님의 뜻으로 말미암아 그리스도 예수의 사도인 바울과 우리 형제 디모데가, 고린도에 있는 하나님의 교회와 아가야 전역에 있는 모든 성도들에게 편지합니다."
    },
    special_explanation: {
      explanation_type: "고린도후서의 배경",
      content: "고린도후서는 바울이 고린도 교회에 보낸 여러 서신 중 하나입니다. 이 서신은 바울의 사도권이 도전받는 상황에서 기록되었으며, 그의 사역과 고난에 대한 변증이 포함됩니다. 디모데는 바울의 신뢰받는 동역자로 고린도 방문 경험이 있습니다(고전 4:17)."
    }
  },
  {
    reference: "2 Corinthians 1:2",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "축복 기원",
        original_text: "Grace and peace to you from God our Father and the Lord Jesus Christ",
        korean_translation: "하나님 우리 아버지와 주 예수 그리스도로부터 은혜와 평강이 너희에게 있을지어다",
        grammatical_explanation: "전형적인 바울 서신 인사"
      }
    ],
    vocabulary: [
      { word: "grace", ipa_pronunciation: "/ɡreɪs/", korean_pronunciation: "그레이스", definition_korean: "은혜" },
      { word: "peace", ipa_pronunciation: "/piːs/", korean_pronunciation: "피스", definition_korean: "평강, 평화" },
      { word: "Lord", ipa_pronunciation: "/lɔːrd/", korean_pronunciation: "로드", definition_korean: "주" }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 전형적인 인사말로 '은혜와 평강'을 기원합니다. '은혜'(χάρις)는 하나님의 무조건적 호의를, '평강'(εἰρήνη)은 하나님과의 화목과 내적 평안을 나타냅니다. 두 축복의 근원은 '하나님 아버지'와 '주 예수 그리스도'로, 양자의 동등성과 삼위일체적 축복을 암시합니다."
    },
    korean_translation: {
      natural_translation: "하나님 우리 아버지와 주 예수 그리스도로부터 은혜와 평강이 너희에게 있기를 기원합니다."
    }
  },
  {
    reference: "2 Corinthians 1:3",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "송영 - 하나님 찬양",
        original_text: "Praise be to the God and Father of our Lord Jesus Christ",
        korean_translation: "우리 주 예수 그리스도의 하나님이시며 아버지이신 분께 찬양이 있으소서",
        grammatical_explanation: "송영 공식으로 찬양 시작"
      },
      {
        sequence_order: 2,
        semantic_classification: "하나님의 속성 - 자비",
        original_text: "the Father of compassion",
        korean_translation: "자비의 아버지시며",
        grammatical_explanation: "동격으로 하나님 속성 묘사"
      },
      {
        sequence_order: 3,
        semantic_classification: "하나님의 속성 - 위로",
        original_text: "and the God of all comfort",
        korean_translation: "모든 위로의 하나님이신",
        grammatical_explanation: "병렬 동격으로 속성 강조"
      }
    ],
    vocabulary: [
      { word: "praise", ipa_pronunciation: "/preɪz/", korean_pronunciation: "프레이즈", definition_korean: "찬양" },
      { word: "compassion", ipa_pronunciation: "/kəmˈpæʃən/", korean_pronunciation: "컴패션", definition_korean: "자비, 긍휼" },
      { word: "comfort", ipa_pronunciation: "/ˈkʌmfərt/", korean_pronunciation: "컴퍼트", definition_korean: "위로" }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 송영으로 본문을 시작하며 하나님을 '우리 주 예수 그리스도의 하나님이시며 아버지'로 소개합니다. 하나님은 '자비의 아버지'(πατὴρ τῶν οἰκτιρμῶν)이며 '모든 위로의 하나님'(θεὸς πάσης παραklήσεως)입니다. 이 송영은 바울이 경험한 고난과 하나님의 위로를 배경으로 하며, 1:4-11에서 전개됩니다."
    },
    korean_translation: {
      natural_translation: "우리 주 예수 그리스도의 하나님이시며 아버지이신, 자비의 아버지시며 모든 위로의 하나님께 찬양을 드립니다."
    },
    special_explanation: {
      explanation_type: "고린도후서의 위로 주제",
      content: "고린도후서에서 '위로'(παράklησις)는 핵심 주제로 10회 등장합니다(1:3-7). 바울의 고난과 위로 경험은 교회를 위로하는 사역의 기초가 됩니다. 이는 고난받는 목회자의 사역론을 제시합니다."
    }
  },
  {
    reference: "2 Corinthians 1:4",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "하나님의 위로 - 우리에게",
        original_text: "who comforts us in all our troubles",
        korean_translation: "모든 환난 중에 우리를 위로하시는 분",
        grammatical_explanation: "관계절로 하나님 행위 묘사"
      },
      {
        sequence_order: 2,
        semantic_classification: "위로의 목적",
        original_text: "so that we can comfort those in any trouble",
        korean_translation: "우리가 어떤 환난 중에 있는 자들도 위로할 수 있도록",
        grammatical_explanation: "목적절로 위로의 전달 설명"
      },
      {
        sequence_order: 3,
        semantic_classification: "위로의 수단",
        original_text: "with the comfort we ourselves receive from God",
        korean_translation: "우리 자신이 하나님으로부터 받는 위로로써",
        grammatical_explanation: "수단 표현"
      }
    ],
    vocabulary: [
      { word: "comforts", ipa_pronunciation: "/ˈkʌmfərts/", korean_pronunciation: "컴퍼츠", definition_korean: "위로하다" },
      { word: "troubles", ipa_pronunciation: "/ˈtrʌbəlz/", korean_pronunciation: "트러블즈", definition_korean: "환난, 어려움" },
      { word: "receive", ipa_pronunciation: "/rɪˈsiːv/", korean_pronunciation: "리시브", definition_korean: "받다" }
    ],
    contextual_explanation: {
      integrated_explanation: "하나님은 '모든 환난 중에' 우리를 위로하십니다. 이 위로의 목적은 '우리가 다른 이들을 위로할 수 있도록' 하는 것입니다. 위로는 하나님으로부터 받아 다른 이들에게 전달되는 순환 구조를 이룹니다. 바울의 고난 경험은 고린도 교회를 위로하는 자원이 되었습니다. '환난'(θλίψις)은 바울이 아시아에서 겪은 극심한 고난을 가리킵니다(1:8)."
    },
    korean_translation: {
      natural_translation: "하나님께서는 모든 환난 중에 우리를 위로하셔서, 우리가 하나님께 받은 위로로 어떤 환난 중에 있는 자들도 위로할 수 있게 하십니다."
    },
    special_explanation: {
      explanation_type: "위로의 순환 구조",
      content: "바울은 '위로의 순환'(comfort cycle)을 제시합니다: 하나님의 위로 → 바울의 수용 → 교회로의 전달. 이는 고난받는 목회자가 어떻게 공동체에 유익이 되는지를 보여주는 사역 패러다임입니다."
    }
  },
  {
    reference: "2 Corinthians 1:5",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "고난의 참여",
        original_text: "For just as we share abundantly in the sufferings of Christ",
        korean_translation: "그리스도의 고난이 우리에게 넘치는 것같이",
        grammatical_explanation: "비교절로 고난의 정도 표현"
      },
      {
        sequence_order: 2,
        semantic_classification: "위로의 풍성함",
        original_text: "so also our comfort abounds through Christ",
        korean_translation: "우리의 위로도 그리스도로 말미암아 넘칩니다",
        grammatical_explanation: "대조적 병행 구조"
      }
    ],
    vocabulary: [
      { word: "share", ipa_pronunciation: "/ʃeər/", korean_pronunciation: "셰어", definition_korean: "나누다, 참여하다" },
      { word: "abundantly", ipa_pronunciation: "/əˈbʌndəntli/", korean_pronunciation: "어번던틀리", definition_korean: "풍성하게, 넘치도록" },
      { word: "sufferings", ipa_pronunciation: "/ˈsʌfərɪŋz/", korean_pronunciation: "서퍼링즈", definition_korean: "고난" },
      { word: "abounds", ipa_pronunciation: "/əˈbaʊndz/", korean_pronunciation: "어바운즈", definition_korean: "넘치다" }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 '그리스도의 고난'(τὰ παθήματα τοῦ Χριστοῦ)에 참여하며, 이 고난이 '넘칩니다'(περισσεύει). 동시에 '위로도 넘칩니다'(περισσεύει καὶ ἡ παράklησις). 고난과 위로는 비례 관계에 있습니다. '그리스도의 고난'은 그리스도를 위한 고난(골 1:24)을 의미하며, 바울의 사도적 고난을 가리킵니다. 위로는 '그리스도로 말미암아' 주어지며, 그리스도는 위로의 근원입니다."
    },
    korean_translation: {
      natural_translation: "그리스도의 고난이 우리에게 넘치는 것같이, 우리의 위로도 그리스도로 말미암아 넘칩니다."
    },
    special_explanation: {
      explanation_type: "그리스도의 고난에 참여함",
      content: "'그리스도의 고난'은 그리스도가 겪은 역사적 고난이 아니라, 그리스도를 따르고 섬기는 과정에서 겪는 고난을 의미합니다(빌 3:10, 골 1:24). 바울은 자신의 고난을 그리스도와의 연합 맥락에서 이해합니다."
    }
  }
]

async function main() {
  console.log('📝 2 Corinthians 1:1-5 분석 저장 중...\n')

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
  console.log(`성공: ${successCount}/${analyses.length}`)
  console.log(`실패: ${failureCount}`)
}

main()
