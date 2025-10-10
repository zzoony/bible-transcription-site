import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

const analyses: AnalysisData[] = [
  {
    reference: "2 Corinthians 1:6",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "바울의 고난 목적 - 위로",
        original_text: "If we are distressed, it is for your comfort and salvation",
        korean_translation: "우리가 환난당하면 이는 너희의 위로와 구원을 위함이요",
        grammatical_explanation: "조건절과 목적 설명"
      },
      {
        sequence_order: 2,
        semantic_classification: "바울의 위로 목적 - 인내",
        original_text: "if we are comforted, it is for your comfort",
        korean_translation: "우리가 위로를 받으면 이는 너희의 위로를 위함이니",
        grammatical_explanation: "병렬 조건절"
      },
      {
        sequence_order: 3,
        semantic_classification: "위로의 결과",
        original_text: "which produces in you patient endurance of the same sufferings we suffer",
        korean_translation: "이 위로가 너희 안에서 우리가 받는 것과 같은 고난을 참고 견디게 합니다",
        grammatical_explanation: "관계절로 결과 묘사"
      }
    ],
    vocabulary: [
      { word: "distressed", ipa_pronunciation: "/dɪˈstrɛst/", korean_pronunciation: "디스트레스트", definition_korean: "고난당하다, 괴로워하다" },
      { word: "salvation", ipa_pronunciation: "/sælˈveɪʃən/", korean_pronunciation: "샐베이션", definition_korean: "구원" },
      { word: "produces", ipa_pronunciation: "/prəˈduːsɪz/", korean_pronunciation: "프로듀시즈", definition_korean: "만들어내다, 생산하다" },
      { word: "patient endurance", ipa_pronunciation: "/ˈpeɪʃənt ɪnˈdjʊərəns/", korean_pronunciation: "페이션트 인듀어런스", definition_korean: "인내, 참음" }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 자신의 고난과 위로가 모두 고린도 교회를 위한 것임을 설명합니다. 고난은 '위로와 구원'을 위한 것이고, 위로는 교회의 '인내'(ὑπομονῆς)를 만들어냅니다. 바울과 교회는 '같은 고난'을 공유하며, 이는 사도와 교회의 연대를 보여줍니다. 고난은 목적 없이 오지 않으며, 하나님의 구원 계획의 일부입니다."
    },
    korean_translation: {
      natural_translation: "우리가 환난당하면 이는 너희의 위로와 구원을 위함이요, 우리가 위로를 받으면 이는 너희의 위로를 위함이니, 이 위로가 우리가 받는 것과 같은 고난을 참고 견디는 능력을 너희 안에 만들어냅니다."
    },
    special_explanation: {
      explanation_type: "사도적 고난의 목회적 의미",
      content: "바울은 자신의 고난을 자기중심적으로 보지 않고, 교회를 위한 '사도적 고난'으로 이해합니다. 이는 골로새서 1:24의 '그리스도의 남은 고난을 채움'과 연결됩니다. 목회자의 고난은 교회의 영적 성장을 위한 수단이 됩니다."
    }
  },
  {
    reference: "2 Corinthians 1:7",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "바울의 확신",
        original_text: "And our hope for you is firm",
        korean_translation: "너희를 위한 우리의 소망은 견고합니다",
        grammatical_explanation: "선언적 확신 표현"
      },
      {
        sequence_order: 2,
        semantic_classification: "확신의 근거",
        original_text: "because we know that just as you share in our sufferings",
        korean_translation: "너희가 우리의 고난에 참여하는 것같이",
        grammatical_explanation: "이유절과 비교 구조"
      },
      {
        sequence_order: 3,
        semantic_classification: "고난과 위로의 병행",
        original_text: "so also you share in our comfort",
        korean_translation: "우리의 위로에도 함께 참여함을 알기 때문입니다",
        grammatical_explanation: "병행 구조로 완성"
      }
    ],
    vocabulary: [
      { word: "hope", ipa_pronunciation: "/hoʊp/", korean_pronunciation: "호프", definition_korean: "소망" },
      { word: "firm", ipa_pronunciation: "/fɜːrm/", korean_pronunciation: "펌", definition_korean: "견고한, 확고한" },
      { word: "share", ipa_pronunciation: "/ʃeər/", korean_pronunciation: "셰어", definition_korean: "나누다, 함께하다" }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 고린도 교회를 위한 '소망'(ἐλπὶς)이 '견고하다'(βεβαία)고 선언합니다. 이 확신의 근거는 교회가 고난과 위로를 '함께 나눈다'(κοινωνοί)는 것입니다. '나눔'(κοινωνία)은 초대교회의 핵심 가치로, 고난과 위로를 함께 경험하는 공동체적 연대를 나타냅니다. 바울은 교회의 인내를 보며 확신을 갖습니다."
    },
    korean_translation: {
      natural_translation: "너희를 위한 우리의 소망은 견고합니다. 왜냐하면 너희가 우리의 고난에 함께 참여하는 것같이, 우리의 위로에도 함께 참여함을 알기 때문입니다."
    }
  },
  {
    reference: "2 Corinthians 1:8",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "정보 공유 의도",
        original_text: "We do not want you to be uninformed, brothers and sisters, about the troubles we experienced in the province of Asia",
        korean_translation: "형제자매 여러분, 우리가 아시아에서 겪은 환난에 대해 너희가 모르기를 원하지 않습니다",
        grammatical_explanation: "부정 목적절로 정보 전달 의도 표현"
      },
      {
        sequence_order: 2,
        semantic_classification: "고난의 강도",
        original_text: "We were under great pressure, far beyond our ability to endure",
        korean_translation: "우리가 심한 압박을 받아 견딜 능력을 훨씬 넘었고",
        grammatical_explanation: "극한 상황 묘사"
      },
      {
        sequence_order: 3,
        semantic_classification: "절망의 정도",
        original_text: "so that we despaired of life itself",
        korean_translation: "심지어 살 소망까지 끊어졌습니다",
        grammatical_explanation: "결과절로 극단적 상황 표현"
      }
    ],
    vocabulary: [
      { word: "uninformed", ipa_pronunciation: "/ˌʌnɪnˈfɔːrmd/", korean_pronunciation: "언인폼드", definition_korean: "모르는, 정보가 없는" },
      { word: "troubles", ipa_pronunciation: "/ˈtrʌbəlz/", korean_pronunciation: "트러블즈", definition_korean: "환난, 고난" },
      { word: "pressure", ipa_pronunciation: "/ˈprɛʃər/", korean_pronunciation: "프레셔", definition_korean: "압박, 압력" },
      { word: "endure", ipa_pronunciation: "/ɪnˈdjʊər/", korean_pronunciation: "인듀어", definition_korean: "견디다, 참다" },
      { word: "despaired", ipa_pronunciation: "/dɪˈspeərd/", korean_pronunciation: "디스페어드", definition_korean: "절망하다" }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 '아시아에서의 환난'을 상세히 설명합니다. '아시아'는 로마 속주로 에베소를 포함하며, 구체적 사건은 명시되지 않지만 극심한 박해나 위기였을 것입니다(행 19장 참조 가능). 고난은 '견딜 능력을 훨씬 넘어'(καθ' ὑπερβολὴν ὑπὲρ δύναμιν) '살 소망까지 끊어질' 정도였습니다. 바울은 자신의 극한 경험을 교회와 공유하여 하나님의 구원을 증거합니다."
    },
    korean_translation: {
      natural_translation: "형제자매 여러분, 우리가 아시아에서 겪은 환난에 대해 여러분이 모르기를 원하지 않습니다. 우리가 심한 압박을 받아 견딜 능력을 훨씬 넘었고, 심지어 살 소망까지 끊어졌습니다."
    },
    special_explanation: {
      explanation_type: "아시아의 환난",
      content: "바울이 언급한 '아시아의 환난'의 구체적 사건은 불분명하지만, 에베소에서의 은장색 소요(행 19:23-41)나 생명을 위협하는 박해였을 가능성이 높습니다. 바울은 고린도전서 15:32에서 '에베소에서 맹수와 싸웠다'고 언급하기도 했습니다."
    }
  },
  {
    reference: "2 Corinthians 1:9",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "사형 선고의 느낌",
        original_text: "Indeed, we felt we had received the sentence of death",
        korean_translation: "참으로 우리는 사형 선고를 받은 것 같았습니다",
        grammatical_explanation: "주관적 경험 표현"
      },
      {
        sequence_order: 2,
        semantic_classification: "고난의 목적",
        original_text: "But this happened that we might not rely on ourselves",
        korean_translation: "그러나 이 일이 일어난 것은 우리가 자신을 의지하지 않게 하려 함이요",
        grammatical_explanation: "목적절로 신학적 의미 설명"
      },
      {
        sequence_order: 3,
        semantic_classification: "참된 의지처",
        original_text: "but on God, who raises the dead",
        korean_translation: "죽은 자를 살리시는 하나님을 의지하게 하려 함입니다",
        grammatical_explanation: "대조적 목적과 하나님 속성 묘사"
      }
    ],
    vocabulary: [
      { word: "indeed", ipa_pronunciation: "/ɪnˈdiːd/", korean_pronunciation: "인디드", definition_korean: "참으로, 진실로" },
      { word: "sentence", ipa_pronunciation: "/ˈsɛntəns/", korean_pronunciation: "센턴스", definition_korean: "선고, 판결" },
      { word: "rely", ipa_pronunciation: "/rɪˈlaɪ/", korean_pronunciation: "릴라이", definition_korean: "의지하다, 의존하다" },
      { word: "raises", ipa_pronunciation: "/ˈreɪzɪz/", korean_pronunciation: "레이지즈", definition_korean: "일으키다, 살리다" }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 극한 고난을 '사형 선고'(τὸ ἀπόκριμα τοῦ θανάτου)로 묘사합니다. 그러나 이 고난에는 신학적 목적이 있었습니다: '자신을 의지하지 않고' '하나님을 의지하게' 하는 것입니다. 하나님은 '죽은 자를 살리시는 분'(τὸν ἐγείροντα τοὺς νεκρούς)으로, 절대 절망 속에서도 생명을 주시는 분입니다. 이는 부활 신앙의 핵심이며, 바울의 고난 신학의 중심입니다."
    },
    korean_translation: {
      natural_translation: "참으로 우리는 사형 선고를 받은 것 같았습니다. 그러나 이 일이 일어난 것은 우리가 자신을 의지하지 않고 죽은 자를 살리시는 하나님을 의지하게 하려 함입니다."
    },
    special_explanation: {
      explanation_type: "고난을 통한 하나님 의존",
      content: "바울은 극한 고난이 자기 의존에서 하나님 의존으로 전환하는 수단이 되었음을 증언합니다. '죽은 자를 살리시는 하나님'은 단순히 미래 부활만이 아니라, 현재의 절망적 상황에서도 생명을 주시는 하나님의 능력을 가리킵니다."
    }
  },
  {
    reference: "2 Corinthians 1:10",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "과거의 구원",
        original_text: "He has delivered us from such a deadly peril",
        korean_translation: "그분께서 우리를 그토록 큰 죽음의 위험에서 건지셨고",
        grammatical_explanation: "완료 시제로 과거 구원 진술"
      },
      {
        sequence_order: 2,
        semantic_classification: "미래의 구원 확신",
        original_text: "and he will deliver us again",
        korean_translation: "또 건지실 것입니다",
        grammatical_explanation: "미래 시제로 계속적 구원 표현"
      },
      {
        sequence_order: 3,
        semantic_classification: "소망의 근거",
        original_text: "On him we have set our hope that he will continue to deliver us",
        korean_translation: "우리는 그분께 소망을 두었으니 그분께서 계속 우리를 건지실 것입니다",
        grammatical_explanation: "완료 시제와 미래 계속 표현"
      }
    ],
    vocabulary: [
      { word: "delivered", ipa_pronunciation: "/dɪˈlɪvərd/", korean_pronunciation: "딜리버드", definition_korean: "구출하다, 건지다" },
      { word: "deadly peril", ipa_pronunciation: "/ˈdɛdli ˈpɛrəl/", korean_pronunciation: "데들리 페럴", definition_korean: "죽음의 위험" },
      { word: "set our hope", ipa_pronunciation: "/sɛt aʊər hoʊp/", korean_pronunciation: "셋 아워 호프", definition_korean: "소망을 두다" },
      { word: "continue", ipa_pronunciation: "/kənˈtɪnjuː/", korean_pronunciation: "컨티뉴", definition_korean: "계속하다" }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 하나님의 구원을 삼중 시제로 고백합니다: '건지셨고'(과거), '건지실 것이며'(미래), '계속 건지실 것'(계속적 미래). '그토록 큰 죽음'(τηλικούτου θανάτου)은 1:8-9의 극한 고난을 가리킵니다. 바울의 소망은 과거 구원 경험에 근거하며, 이는 미래 구원에 대한 확신의 기초가 됩니다. 하나님의 구원은 일회적이 아니라 계속적입니다."
    },
    korean_translation: {
      natural_translation: "그분께서 우리를 그토록 큰 죽음의 위험에서 건지셨고 또 건지실 것입니다. 우리는 그분께 소망을 두었으니 그분께서 계속 우리를 건지실 것입니다."
    },
    special_explanation: {
      explanation_type: "구원의 삼중 시제",
      content: "바울은 구원을 과거(완료), 현재(진행), 미래(완성)의 삼중 구조로 이해합니다. 이는 구원의 '이미'(already)와 '아직'(not yet) 긴장을 반영하며, 종말론적 구원 이해를 보여줍니다."
    }
  }
]

async function main() {
  console.log('📝 2 Corinthians 1:6-10 분석 저장 중...\n')

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
  console.log(`\n누적 진행: 10/257 구절 완료 (3.9%)`)
}

main()
