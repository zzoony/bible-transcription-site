import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

const analyses: AnalysisData[] = [
  {
    reference: "Titus 1:11",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "거짓 교사 대응 필요성",
        original_text: "They must be silenced",
        korean_translation: "그들을 잠잠하게 해야 합니다",
        grammatical_explanation: "must로 강한 명령"
      },
      {
        sequence_order: 2,
        semantic_classification: "잠잠하게 해야 하는 이유",
        original_text: "because they are disrupting whole households by teaching things they ought not to teach",
        korean_translation: "왜냐하면 그들이 가르치지 말아야 할 것들을 가르침으로써 온 집안을 뒤엎고 있기 때문입니다",
        grammatical_explanation: "because절로 이유 제시"
      },
      {
        sequence_order: 3,
        semantic_classification: "동기 비판",
        original_text: "and that for the sake of dishonest gain",
        korean_translation: "그것도 부정한 이익을 위해서입니다",
        grammatical_explanation: "and that으로 추가 이유"
      }
    ],
    vocabulary: [
      { word: "silenced", ipa_pronunciation: "/ˈsaɪlənst/", korean_pronunciation: "사일런스트", definition_korean: "잠잠하게 하다" },
      { word: "disrupting", ipa_pronunciation: "/dɪsˈrʌptɪŋ/", korean_pronunciation: "디스럽팅", definition_korean: "뒤엎다, 혼란시키다" },
      { word: "households", ipa_pronunciation: "/ˈhaʊshoʊldz/", korean_pronunciation: "하우스홀즈", definition_korean: "가정들, 집안들" }
    ],
    contextual_explanation: {
      integrated_explanation: "거짓 교사들은 '잠잠하게 해야'(ἐπιστομίζειν - 문자적으로 '입을 막다') 합니다. 그들은 '온 집안을 뒤엎고'(ὅλους οἴκους ἀνατρέπουσιν) 있습니다. 초대교회는 가정 교회(house church)로 모였기에, 한 가정의 혼란은 교회 전체에 영향을 미쳤습니다. 그들의 동기는 '부정한 이익'(αἰσχροῦ κέρδους)으로, 1:7에서 금지된 바로 그것입니다. 거짓 교사들은 돈을 위해 복음을 왜곡했습니다(벧후 2:3)."
    },
    korean_translation: {
      natural_translation: "그들을 잠잠하게 해야 합니다. 왜냐하면 그들이 가르치지 말아야 할 것들을 가르침으로써 온 집안을 뒤엎고 있기 때문입니다. 그것도 부정한 이익을 위해서입니다."
    },
    special_explanation: {
      explanation_type: "가정 교회와 거짓 교사",
      content: "초대교회는 신자의 집에서 모이는 '가정 교회'였습니다(롬 16:5, 골 4:15). 거짓 교사가 한 집안을 미혹하면 전체 교회 공동체가 혼란에 빠졌습니다. '온 집안을 뒤엎음'은 단순히 개인이 아니라 교회 공동체 전체가 위협받고 있음을 나타냅니다."
    }
  },
  {
    reference: "Titus 1:12",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "크레타 예언자 인용",
        original_text: "One of Crete's own prophets has said it",
        korean_translation: "크레타 사람 중 한 예언자가 말했습니다",
        grammatical_explanation: "인용 도입"
      },
      {
        sequence_order: 2,
        semantic_classification: "크레타인 묘사",
        original_text: "Cretans are always liars, evil brutes, lazy gluttons",
        korean_translation: "크레타 사람들은 항상 거짓말쟁이요, 악한 짐승이요, 게으른 먹보입니다",
        grammatical_explanation: "3가지 부정적 특성 나열"
      }
    ],
    vocabulary: [
      { word: "prophet", ipa_pronunciation: "/ˈprɒfɪt/", korean_pronunciation: "프라핏", definition_korean: "예언자" },
      { word: "liars", ipa_pronunciation: "/ˈlaɪərz/", korean_pronunciation: "라이어즈", definition_korean: "거짓말쟁이들" },
      { word: "brutes", ipa_pronunciation: "/bruːts/", korean_pronunciation: "브루츠", definition_korean: "짐승들" },
      { word: "gluttons", ipa_pronunciation: "/ˈɡlʌtənz/", korean_pronunciation: "글러턴즈", definition_korean: "먹보들" }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 크레타 출신 시인 에피메니데스(Epimenides, BC 6세기)를 인용합니다. '크레타 사람들은 항상 거짓말쟁이'는 당시 널리 알려진 표현으로, '거짓말하다'를 뜻하는 그리스어 동사 'κρητίζειν'(크레타처럼 행동하다)이 생길 정도였습니다. 바울은 이 문화적 평판을 인정하며(1:13 '이 증언이 참되다'), 크레타 교회가 이러한 문화적 악습을 극복해야 함을 강조합니다. 거짓말(1:2의 '거짓말 않으시는 하나님'과 대조), 악함, 게으름은 모두 1:5-9의 장로 자격과 정반대입니다."
    },
    korean_translation: {
      natural_translation: "크레타 사람 중 한 예언자가 말했습니다: '크레타 사람들은 항상 거짓말쟁이요, 악한 짐승이요, 게으른 먹보입니다.'"
    },
    special_explanation: {
      explanation_type: "에피메니데스 인용과 역설",
      content: "에피메니데스는 크레타 출신 시인이자 철학자로, '크레타인의 역설'로 유명합니다(크레타인이 '모든 크레타인은 거짓말쟁이'라고 말하면 참인가 거짓인가?). 바울은 이 유명한 인용을 사용하여 크레타의 문화적 문제를 지적하고, 복음이 이러한 문화를 변화시켜야 함을 강조합니다."
    }
  },
  {
    reference: "Titus 1:13",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "인용 확증",
        original_text: "This saying is true",
        korean_translation: "이 증언이 참됩니다",
        grammatical_explanation: "앞 절 인용 확인"
      },
      {
        sequence_order: 2,
        semantic_classification: "대응 방법",
        original_text: "Therefore rebuke them sharply",
        korean_translation: "그러므로 그들을 엄하게 꾸짖으십시오",
        grammatical_explanation: "therefore로 결론 도출"
      },
      {
        sequence_order: 3,
        semantic_classification: "대응 목적",
        original_text: "so that they will be sound in the faith",
        korean_translation: "그래야 그들이 믿음에서 건전하게 될 것입니다",
        grammatical_explanation: "목적절"
      }
    ],
    vocabulary: [
      { word: "saying", ipa_pronunciation: "/ˈseɪɪŋ/", korean_pronunciation: "세잉", definition_korean: "말, 증언" },
      { word: "rebuke", ipa_pronunciation: "/rɪˈbjuːk/", korean_pronunciation: "리뷰크", definition_korean: "꾸짖다, 책망하다" },
      { word: "sharply", ipa_pronunciation: "/ˈʃɑːrpli/", korean_pronunciation: "샤플리", definition_korean: "엄하게, 날카롭게" },
      { word: "sound", ipa_pronunciation: "/saʊnd/", korean_pronunciation: "사운드", definition_korean: "건전한" }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 에피메니데스의 평가를 '참되다'(ἀληθής)고 확증합니다. 이는 크레타 문화의 심각성을 인정하는 것입니다. 대응 방법은 '엄하게 꾸짖음'(ἀποτόμως ἔλεγχε)입니다. 목적은 '믿음에서 건전하게'(ὑγιαίνωσιν ἐν τῇ πίστει) 되는 것입니다. '건전한'(ὑγιαίνω)은 1:9의 '건전한 교리'와 같은 의학적 은유로, 영적 건강을 의미합니다. 엄한 책망은 파괴가 아니라 치유를 위한 것입니다."
    },
    korean_translation: {
      natural_translation: "이 증언이 참됩니다. 그러므로 그들을 엄하게 꾸짖으십시오. 그래야 그들이 믿음에서 건전하게 될 것입니다."
    },
    special_explanation: {
      explanation_type: "건전함의 목표",
      content: "바울은 책망의 목적을 명확히 합니다: 파괴가 아니라 '건전함'(ὑγιαίνω)입니다. 이는 의학적 용어로, 영적 질병을 치료하여 건강을 회복시키는 것을 의미합니다. 디도서의 핵심 주제인 '건전한 교리'(1:9, 2:1)는 단순한 정통성이 아니라 영적 건강과 성숙을 목표로 합니다."
    }
  },
  {
    reference: "Titus 1:14",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "주의 사항 1",
        original_text: "and will pay no attention to Jewish myths",
        korean_translation: "그리고 유대인의 신화에 주의를 기울이지 않게 하고",
        grammatical_explanation: "부정 명령"
      },
      {
        sequence_order: 2,
        semantic_classification: "주의 사항 2",
        original_text: "or to the merely human commands of those who reject the truth",
        korean_translation: "진리를 거부하는 자들의 단순히 인간적인 명령들에 주의를 기울이지 않게 하려는 것입니다",
        grammatical_explanation: "병렬 구조"
      }
    ],
    vocabulary: [
      { word: "pay attention", ipa_pronunciation: "/peɪ əˈtɛnʃən/", korean_pronunciation: "페이 어텐션", definition_korean: "주의를 기울이다" },
      { word: "myths", ipa_pronunciation: "/mɪθs/", korean_pronunciation: "미스", definition_korean: "신화, 허구" },
      { word: "merely human", ipa_pronunciation: "/ˈmɪrli ˈhjuːmən/", korean_pronunciation: "미얼리 휴먼", definition_korean: "단순히 인간적인" },
      { word: "reject", ipa_pronunciation: "/rɪˈdʒɛkt/", korean_pronunciation: "리젝트", definition_korean: "거부하다" }
    ],
    contextual_explanation: {
      integrated_explanation: "거짓 교사들의 구체적 문제가 드러납니다: (1) '유대인의 신화'(Ἰουδαϊκοῖς μύθοις), (2) '인간적 명령'(ἐντολαῖς ἀνθρώπων). '유대인의 신화'는 율법에 대한 환상적 해석과 족보 이야기를 가리킵니다(딤전 1:4). '인간적 명령'은 사람이 만든 전통과 규정입니다(골 2:22, 막 7:7-8에서 예수님도 이를 비판). 이들은 '진리를 거부'(ἀποστρεφομένων τὴν ἀλήθειαν)했습니다. 복음의 단순성과 충족성을 벗어난 모든 추가는 위험합니다."
    },
    korean_translation: {
      natural_translation: "그리고 유대인의 신화나 진리를 거부하는 자들의 단순히 인간적인 명령들에 주의를 기울이지 않게 하려는 것입니다."
    },
    special_explanation: {
      explanation_type: "인간의 명령 vs 하나님의 진리",
      content: "'인간적 명령'(ἐντολαῖς ἀνθρώπων)은 마가복음 7:7-8에서 예수님이 바리새인을 비판하실 때 사용한 이사야 29:13 인용과 동일한 표현입니다. 바울은 예수님의 가르침을 따라 인간의 전통이 하나님의 말씀을 대체하는 것을 경고합니다."
    }
  },
  {
    reference: "Titus 1:15",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "순결한 자의 원리",
        original_text: "To the pure, all things are pure",
        korean_translation: "깨끗한 자들에게는 모든 것이 깨끗하지만",
        grammatical_explanation: "대조 구조 첫째"
      },
      {
        sequence_order: 2,
        semantic_classification: "더럽혀진 자의 원리",
        original_text: "but to those who are corrupted and do not believe, nothing is pure",
        korean_translation: "더럽혀지고 믿지 않는 자들에게는 아무것도 깨끗하지 않습니다",
        grammatical_explanation: "대조 구조 둘째"
      },
      {
        sequence_order: 3,
        semantic_classification: "더럽혀진 자의 상태",
        original_text: "In fact, both their minds and consciences are corrupted",
        korean_translation: "사실 그들의 마음과 양심 둘 다 더럽혀졌습니다",
        grammatical_explanation: "추가 설명"
      }
    ],
    vocabulary: [
      { word: "pure", ipa_pronunciation: "/pjʊr/", korean_pronunciation: "퓨어", definition_korean: "깨끗한, 순결한" },
      { word: "corrupted", ipa_pronunciation: "/kəˈrʌptɪd/", korean_pronunciation: "커럽티드", definition_korean: "더럽혀진, 타락한" },
      { word: "minds", ipa_pronunciation: "/maɪndz/", korean_pronunciation: "마인즈", definition_korean: "마음, 정신" },
      { word: "consciences", ipa_pronunciation: "/ˈkɒnʃənsɪz/", korean_pronunciation: "칸션시즈", definition_korean: "양심" }
    ],
    contextual_explanation: {
      integrated_explanation: "이 구절은 율법주의적 정결 규정에 대한 바울의 답변입니다. '깨끗한 자들에게는 모든 것이 깨끗하다'(πάντα καθαρὰ τοῖς καθαροῖς)는 예수님의 가르침(막 7:15, 19)과 베드로의 환상(행 10:15)을 반영합니다. 문제는 외적 의식이 아니라 내적 상태입니다. '더럽혀지고 믿지 않는 자들'(τοῖς δὲ μεμιαμμένοις καὶ ἀπίστοις)은 '마음과 양심'(νοῦς καὶ συνείδησις)이 더럽혀져, 순수한 것조차 왜곡합니다. 이는 거짓 교사들의 본질적 문제를 지적합니다: 외적 규정 강조는 내적 타락을 가립니다."
    },
    korean_translation: {
      natural_translation: "깨끗한 자들에게는 모든 것이 깨끗하지만, 더럽혀지고 믿지 않는 자들에게는 아무것도 깨끗하지 않습니다. 사실 그들의 마음과 양심 둘 다 더럽혀졌습니다."
    },
    special_explanation: {
      explanation_type: "정결 논쟁",
      content: "이 구절은 1세기 유대-기독교 논쟁의 핵심을 다룹니다. 율법주의자들은 외적 정결 규정(음식법, 의식적 씻음)을 강조했지만, 바울은 예수님을 따라 내적 순결을 강조합니다. 로마서 14:14, 20도 같은 원리를 가르칩니다: '무엇이든지 그 자체로 부정한 것은 없다.'"
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
