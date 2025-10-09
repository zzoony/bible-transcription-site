import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

const analysis: AnalysisData = {
  reference: "2 Peter 2:8",
  sentence_structures: [
    {
      sequence_order: 1,
      semantic_classification: "배경 설명의 삽입절",
      original_text: "for that righteous man, living among them day after day, was tormented in his righteous soul by the lawless deeds he saw and heard",
      korean_translation: "그 의로운 사람은 그들 가운데 날마다 살면서, 보고 듣는 불법적인 행위들로 인해 자신의 의로운 영혼이 고통받았기 때문입니다",
      grammatical_explanation: "삽입절 - 'for'는 이유를 제시하며, 괄호는 보충 설명을 나타냄. 7절의 롯 구원 이야기에 대한 추가 설명"
    },
    {
      sequence_order: 2,
      semantic_classification: "주어부 확장",
      original_text: "that righteous man, living among them day after day",
      korean_translation: "그들 가운데 날마다 살던 그 의로운 사람",
      grammatical_explanation: "분사구 'living among them day after day'가 주어 'that righteous man'을 수식하여 상황을 묘사"
    },
    {
      sequence_order: 3,
      semantic_classification: "수동태 서술부",
      original_text: "was tormented in his righteous soul",
      korean_translation: "자신의 의로운 영혼이 고통받았다",
      grammatical_explanation: "수동태로 고통의 대상임을 강조. 'in his righteous soul'은 고통의 영역을 명시"
    },
    {
      sequence_order: 4,
      semantic_classification: "원인 표현",
      original_text: "by the lawless deeds he saw and heard",
      korean_translation: "그가 보고 듣는 불법적인 행위들로 인해",
      grammatical_explanation: "전치사 'by'로 고통의 원인을 명시. 관계절 'he saw and heard'가 'lawless deeds'를 수식"
    }
  ],
  vocabulary: [
    {
      word: "righteous",
      ipa_pronunciation: "/ˈraɪtʃəs/",
      korean_pronunciation: "라이처스",
      part_of_speech: "형용사",
      definition_korean: "의로운, 정의로운",
      usage_note: "도덕적으로 올바른 상태를 나타냄. 이 구절에서는 '의로운 사람'과 '의로운 영혼'에 두 번 사용되어 롯의 본질적 성품을 강조"
    },
    {
      word: "tormented",
      ipa_pronunciation: "/ˈtɔːrmentɪd/",
      korean_pronunciation: "토멘티드",
      part_of_speech: "동사(과거분사)",
      definition_korean: "고통받는, 괴로워하는",
      usage_note: "정신적/영적 고통을 강조하는 수동태. 그리스어 βασανίζω(basanizō)에서 유래하며 시험하다, 고문하다의 의미"
    },
    {
      word: "lawless",
      ipa_pronunciation: "/ˈlɔːləs/",
      korean_pronunciation: "로리스",
      part_of_speech: "형용사",
      definition_korean: "무법한, 불법적인",
      usage_note: "법이나 도덕을 무시하는 행위를 지칭. 소돔과 고모라의 부도덕한 행위들을 묘사"
    },
    {
      word: "deeds",
      ipa_pronunciation: "/diːdz/",
      korean_pronunciation: "디즈",
      part_of_speech: "명사(복수)",
      definition_korean: "행위들, 행동들",
      usage_note: "구체적인 행위나 행동을 가리킴. 'lawless deeds'는 불법적이고 부도덕한 구체적 행위들"
    },
    {
      word: "soul",
      ipa_pronunciation: "/soʊl/",
      korean_pronunciation: "소울",
      part_of_speech: "명사",
      definition_korean: "영혼, 내면",
      usage_note: "사람의 내적/영적 본질을 의미. 'his righteous soul'은 롯의 영적 정체성을 가리킴"
    }
  ],
  contextual_explanation: {
    integrated_explanation: "베드로후서 2장은 거짓 교사들에 대한 경고를 다루고 있습니다. 8절은 7절에서 언급된 '의로운 롯'에 대한 보충 설명으로, 소돔과 고모라에 살던 롯이 주변의 악한 행위들로 인해 얼마나 고통받았는지를 묘사합니다.\n\n이 구절은 창세기 19장의 롯의 이야기를 배경으로 합니다. 롯은 아브라함의 조카로, 소돔에 정착했지만 그곳의 부패하고 악한 환경 속에서 살았습니다. 베드로는 롯을 '의로운 사람'이라고 두 번이나 강조하며, 그가 불의한 환경에서도 의로움을 유지했지만 동시에 큰 영적 고통을 겪었음을 보여줍니다.\n\n'날마다'(day after day)라는 표현은 롯의 고통이 일회성이 아니라 지속적이었음을 강조합니다. '보고 듣는' 것으로 고통받았다는 표현은 롯이 악한 행위에 직접 참여하지 않았지만, 그것을 목격하는 것만으로도 깊은 영적 고뇌를 느꼈음을 나타냅니다.\n\n신학적으로 이 구절은 의로운 사람이 악한 환경에 있을 때의 내적 갈등을 묘사하며, 하나님께서 의로운 자를 구원하실 것이라는 7-9절의 전체 논지를 뒷받침합니다. 베드로는 이를 통해 당시 거짓 교사들의 악한 행위를 목격하는 교회 성도들에게 위로와 격려를 주고자 했습니다.",
    cross_references: [
      "창세기 19:1-29 (롯과 소돔의 멸망)",
      "베드로후서 2:7 (의로운 롯을 건지심)",
      "베드로후서 2:9 (주께서 경건한 자를 건지실 줄 아심)",
      "시편 119:136 (불법을 보고 눈물 흘림)"
    ]
  },
  korean_translation: {
    natural_translation: "그 의로운 사람은 그들 가운데 살면서 날마다 그가 보고 듣는 불법적인 행위들로 인해 자신의 의로운 영혼이 고통받았습니다",
    translation_notes: "괄호와 대시는 삽입구를 나타내므로 번역에서는 자연스러운 흐름을 위해 생략했습니다. 'day after day'는 '날마다'로 번역하여 지속성을 강조했습니다."
  },
  special_explanation: {
    explanation_type: "문법적 및 신학적 특징",
    content: "1. 괄호 사용의 문법적 의미: 이 구절 전체가 괄호 안에 있고 끝에 대시(—)가 있는 것은 본문의 흐름을 잠시 중단하고 보충 설명을 삽입했음을 나타냅니다. 이는 7절에서 '롯을 구원하셨다'는 내용과 9절의 '주님은...구원하실 줄 아신다'는 결론 사이에 롯의 구체적인 상황을 설명하는 삽입구입니다.\n\n2. '의로운'의 반복: 'righteous'가 'that righteous man'과 'his righteous soul'에 두 번 나타나는 것은 문학적 강조 기법입니다. 이는 롯의 의로움이 단순히 외적 행위가 아니라 그의 본질적 영혼의 상태임을 강조합니다.\n\n3. 수동태의 신학적 함의: 'was tormented'의 수동태 사용은 롯이 능동적으로 고통을 선택한 것이 아니라, 악한 환경의 희생자로서 불가피하게 고통을 경험했음을 나타냅니다. 이는 의로운 자가 악한 세상에서 겪는 수난의 불가피성을 암시합니다.",
    examples: [
      "괄호 구조: 7절 '롯을 구원하셨고' → (8절 보충 설명) → 9절 '주께서...아신다'",
      "의로운의 반복: 'righteous man' + 'righteous soul' = 본질적 성품 강조",
      "수동태 강조: 'was tormented' = 의로운 자의 불가피한 고통"
    ]
  }
}

async function main() {
  const success = await saveAnalysisToDb(analysis)
  if (success) {
    console.log("✅ 2 Peter 2:8 분석 완료!")
  } else {
    console.error("❌ 저장 실패")
    process.exit(1)
  }
}

main()
