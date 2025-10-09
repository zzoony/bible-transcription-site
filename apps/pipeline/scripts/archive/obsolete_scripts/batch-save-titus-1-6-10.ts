import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

const analyses: AnalysisData[] = [
  {
    reference: "Titus 1:6",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "장로의 가정적 자격",
        original_text: "An elder must be blameless, faithful to his wife",
        korean_translation: "장로는 책망할 것이 없고, 한 아내의 남편이며",
        grammatical_explanation: "must be로 필수 요건 제시"
      },
      {
        sequence_order: 2,
        semantic_classification: "자녀 관련 자격",
        original_text: "a man whose children believe and are not open to the charge of being wild and disobedient",
        korean_translation: "믿는 자녀를 둔 자로서 자녀가 방탕하다거나 불순종한다는 비난을 받지 않는 자라야 합니다",
        grammatical_explanation: "관계절로 자녀의 상태 설명"
      }
    ],
    vocabulary: [
      { word: "elder", ipa_pronunciation: "/ˈɛldər/", korean_pronunciation: "엘더", definition_korean: "장로" },
      { word: "blameless", ipa_pronunciation: "/ˈbleɪmləs/", korean_pronunciation: "블레임리스", definition_korean: "책망할 것이 없는" },
      { word: "faithful", ipa_pronunciation: "/ˈfeɪθfəl/", korean_pronunciation: "페이스풀", definition_korean: "신실한, 충실한" },
      { word: "wild", ipa_pronunciation: "/waɪld/", korean_pronunciation: "와일드", definition_korean: "방탕한" },
      { word: "disobedient", ipa_pronunciation: "/ˌdɪsəˈbiːdiənt/", korean_pronunciation: "디서비디언트", definition_korean: "불순종하는" }
    ],
    contextual_explanation: {
      integrated_explanation: "1:6-9는 장로(πρεσβύτερος)/감독(ἐπίσκοπος)의 자격 요건을 제시합니다. '책망할 것이 없는'(ἀνέγκλητος)은 도덕적 무결성을, '한 아내의 남편'(μιᾶς γυναικὸς ἀνήρ)은 결혼 충실성을 강조합니다. 자녀의 믿음과 행실은 리더의 가정 관리 능력을 보여주는 증거입니다(딤전 3:4-5). 크레타의 도덕적 문제(1:12) 때문에 건강한 가정 모범이 더욱 중요했습니다."
    },
    korean_translation: {
      natural_translation: "장로는 책망할 것이 없고, 한 아내의 남편이며, 믿는 자녀를 둔 자로서 자녀가 방탕하다거나 불순종한다는 비난을 받지 않는 자라야 합니다."
    },
    special_explanation: {
      explanation_type: "장로와 감독",
      content: "1:5-7에서 '장로'(πρεσβύτερος)와 '감독'(ἐπίσκοπος)은 같은 직분을 가리킵니다. '장로'는 유대적 배경의 명칭이고, '감독'은 헬라적 배경의 명칭입니다. 신약에서 이 두 용어는 상호 교환적으로 사용됩니다(행 20:17, 28; 벧전 5:1-2)."
    }
  },
  {
    reference: "Titus 1:7",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "감독의 근본 자격",
        original_text: "Since an overseer manages God's household, he must be blameless",
        korean_translation: "감독은 하나님의 집을 관리하는 자로서 책망할 것이 없어야 하기 때문입니다",
        grammatical_explanation: "since절로 이유 제시"
      },
      {
        sequence_order: 2,
        semantic_classification: "부정적 자격 1 (성격)",
        original_text: "not overbearing, not quick-tempered",
        korean_translation: "제 멋대로 하지 않고, 급히 분내지 않으며",
        grammatical_explanation: "연속된 부정으로 금지 사항 나열"
      },
      {
        sequence_order: 3,
        semantic_classification: "부정적 자격 2 (행동)",
        original_text: "not given to drunkenness, not violent, not pursuing dishonest gain",
        korean_translation: "술을 즐기지 않고, 폭력적이지 않으며, 부정한 이익을 추구하지 않아야 합니다",
        grammatical_explanation: "계속되는 부정 나열"
      }
    ],
    vocabulary: [
      { word: "overseer", ipa_pronunciation: "/ˈoʊvərsiːər/", korean_pronunciation: "오버시어", definition_korean: "감독" },
      { word: "overbearing", ipa_pronunciation: "/ˌoʊvərˈbɛrɪŋ/", korean_pronunciation: "오버베어링", definition_korean: "제 멋대로 하는, 독선적인" },
      { word: "quick-tempered", ipa_pronunciation: "/kwɪk ˈtɛmpərd/", korean_pronunciation: "퀵 템퍼드", definition_korean: "급히 분내는" },
      { word: "drunkenness", ipa_pronunciation: "/ˈdrʌŋkənnəs/", korean_pronunciation: "드렁크니스", definition_korean: "술 취함" },
      { word: "violent", ipa_pronunciation: "/ˈvaɪələnt/", korean_pronunciation: "바이올런트", definition_korean: "폭력적인" },
      { word: "dishonest gain", ipa_pronunciation: "/dɪsˈɒnɪst ɡeɪn/", korean_pronunciation: "디서니스트 게인", definition_korean: "부정한 이익" }
    ],
    contextual_explanation: {
      integrated_explanation: "감독은 '하나님의 집'(θεοῦ οἰκονόμος)을 관리하는 청지기입니다. 5가지 부정적 자격(제 멋대로 함, 급한 성질, 술, 폭력, 부정한 이익)은 크레타의 문화적 문제(1:12 참조)를 반영합니다. '제 멋대로 하지 않음'(μὴ αὐθάδη)은 독선이 아닌 섬김의 리더십을, '부정한 이익 추구 않음'(μὴ αἰσχροκερδῆ)은 재정적 청렴성을 강조합니다."
    },
    korean_translation: {
      natural_translation: "감독은 하나님의 집을 관리하는 자로서 책망할 것이 없어야 하고, 제 멋대로 하지 않고, 급히 분내지 않으며, 술을 즐기지 않고, 폭력적이지 않으며, 부정한 이익을 추구하지 않아야 합니다."
    },
    special_explanation: {
      explanation_type: "크레타 문화 반영",
      content: "부정적 자격들은 크레타의 도덕적 문제를 반영합니다. 1:12는 크레타인을 '거짓말쟁이, 악한 짐승, 게으른 먹보'로 묘사합니다. 교회 지도자는 이러한 문화적 악습과 정반대 특성을 지녀야 했습니다."
    }
  },
  {
    reference: "Titus 1:8",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "긍정적 자격 1 (관계)",
        original_text: "Rather, he must be hospitable, one who loves what is good",
        korean_translation: "오히려 그는 손님 대접하기를 좋아하고, 선을 사랑하며",
        grammatical_explanation: "rather로 대조 강조"
      },
      {
        sequence_order: 2,
        semantic_classification: "긍정적 자격 2 (성품)",
        original_text: "who is self-controlled, upright, holy and disciplined",
        korean_translation: "절제하고, 의롭고, 거룩하고, 자제력이 있어야 합니다",
        grammatical_explanation: "4가지 덕목 나열"
      }
    ],
    vocabulary: [
      { word: "hospitable", ipa_pronunciation: "/hɒˈspɪtəbəl/", korean_pronunciation: "호스피터블", definition_korean: "손님 대접하는" },
      { word: "self-controlled", ipa_pronunciation: "/sɛlf kənˈtroʊld/", korean_pronunciation: "셀프 컨트롤드", definition_korean: "절제하는" },
      { word: "upright", ipa_pronunciation: "/ˈʌpraɪt/", korean_pronunciation: "업라이트", definition_korean: "의로운" },
      { word: "holy", ipa_pronunciation: "/ˈhoʊli/", korean_pronunciation: "홀리", definition_korean: "거룩한" },
      { word: "disciplined", ipa_pronunciation: "/ˈdɪsəplɪnd/", korean_pronunciation: "디서플린드", definition_korean: "절제된, 자제력 있는" }
    ],
    contextual_explanation: {
      integrated_explanation: "1:7의 부정적 자격과 대조되는 6가지 긍정적 자격이 제시됩니다. '손님 대접'(φιλόξενος)은 초대교회의 중요한 덕목으로(롬 12:13, 히 13:2), 여행하는 전도자와 성도를 돕는 실천이었습니다. '선을 사랑함'(φιλάγαθος), '절제'(σώφρονα), '의로움'(δίκαιον), '거룩함'(ὅσιον), '자제'(ἐγκρατῆ)는 내적 성품과 외적 행동의 조화를 보여줍니다."
    },
    korean_translation: {
      natural_translation: "오히려 그는 손님 대접하기를 좋아하고, 선을 사랑하며, 절제하고, 의롭고, 거룩하고, 자제력이 있어야 합니다."
    },
    special_explanation: {
      explanation_type: "손님 대접의 중요성",
      content: "초대교회 시대 여관은 비싸고 위험했습니다. 손님 대접(φιλοξενία)은 여행하는 사도, 전도자, 박해받는 성도를 돌보는 핵심 사역이었습니다. 장로는 이를 본보이며 교회 공동체의 환대 문화를 이끌어야 했습니다(딤전 3:2, 벧전 4:9)."
    }
  },
  {
    reference: "Titus 1:9",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "교리적 자격",
        original_text: "He must hold firmly to the trustworthy message as it has been taught",
        korean_translation: "그는 가르침을 받은 대로 신실한 말씀을 굳게 지켜야 합니다",
        grammatical_explanation: "교리 충실성 요구"
      },
      {
        sequence_order: 2,
        semantic_classification: "교리적 자격의 목적 1",
        original_text: "so that he can encourage others by sound doctrine",
        korean_translation: "그래야 건전한 교리로 다른 사람들을 권면할 수 있고",
        grammatical_explanation: "목적절 1"
      },
      {
        sequence_order: 3,
        semantic_classification: "교리적 자격의 목적 2",
        original_text: "and refute those who oppose it",
        korean_translation: "반대하는 자들을 책망할 수 있기 때문입니다",
        grammatical_explanation: "목적절 2"
      }
    ],
    vocabulary: [
      { word: "hold firmly", ipa_pronunciation: "/hoʊld ˈfɜːrmli/", korean_pronunciation: "홀드 펌리", definition_korean: "굳게 지키다" },
      { word: "trustworthy", ipa_pronunciation: "/ˈtrʌstˌwɜːrði/", korean_pronunciation: "트러스트워디", definition_korean: "신실한, 신뢰할 수 있는" },
      { word: "encourage", ipa_pronunciation: "/ɪnˈkʌrɪdʒ/", korean_pronunciation: "인커리지", definition_korean: "권면하다" },
      { word: "sound doctrine", ipa_pronunciation: "/saʊnd ˈdɒktrɪn/", korean_pronunciation: "사운드 닥트린", definition_korean: "건전한 교리" },
      { word: "refute", ipa_pronunciation: "/rɪˈfjuːt/", korean_pronunciation: "리퓨트", definition_korean: "반박하다, 책망하다" }
    ],
    contextual_explanation: {
      integrated_explanation: "장로의 가장 중요한 자격은 교리적 충실성입니다. '신실한 말씀'(πιστὸς λόγος)을 '굳게 지킴'(ἀντεχόμενον)은 사도적 전통 보존을 의미합니다. 이는 두 가지 목적을 위함입니다: (1) '건전한 교리'(ὑγιαινούσῃ διδασκαλίᾳ)로 권면, (2) 거짓 교사 반박. '건전한 교리'는 목회 서신의 핵심 용어로(딤전 1:10, 딤후 4:3, 딛 2:1), 교회를 건강하게 만드는 가르침을 뜻합니다."
    },
    korean_translation: {
      natural_translation: "그는 가르침을 받은 대로 신실한 말씀을 굳게 지켜야 합니다. 그래야 건전한 교리로 다른 사람들을 권면할 수 있고, 반대하는 자들을 책망할 수 있기 때문입니다."
    },
    special_explanation: {
      explanation_type: "건전한 교리",
      content: "'건전한 교리'(ὑγιαίνω + διδασκαλία)는 문자적으로 '건강하게 만드는 가르침'입니다. 의학적 은유로, 교리가 영적 건강을 증진시킨다는 뜻입니다. 디도서는 이 표현을 반복 사용하여(1:9, 13; 2:1, 2, 8) 건강한 교리의 중요성을 강조합니다."
    }
  },
  {
    reference: "Titus 1:10",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "거짓 교사의 존재",
        original_text: "For there are many rebellious people, full of meaningless talk and deception",
        korean_translation: "불순종하고 헛된 말과 속임수로 가득한 사람들이 많기 때문입니다",
        grammatical_explanation: "for로 이유 제시"
      },
      {
        sequence_order: 2,
        semantic_classification: "특정 집단 지목",
        original_text: "especially those of the circumcision group",
        korean_translation: "특히 할례당에 속한 자들이 그러합니다",
        grammatical_explanation: "especially로 특정 그룹 강조"
      }
    ],
    vocabulary: [
      { word: "rebellious", ipa_pronunciation: "/rɪˈbɛliəs/", korean_pronunciation: "리벨리어스", definition_korean: "반항하는, 불순종하는" },
      { word: "meaningless talk", ipa_pronunciation: "/ˈmiːnɪŋləs tɔːk/", korean_pronunciation: "미닝리스 토크", definition_korean: "헛된 말" },
      { word: "deception", ipa_pronunciation: "/dɪˈsɛpʃən/", korean_pronunciation: "디셉션", definition_korean: "속임수" },
      { word: "circumcision group", ipa_pronunciation: "/ˌsɜːrkəmˈsɪʒən ɡruːp/", korean_pronunciation: "서컴시전 그룹", definition_korean: "할례당" }
    ],
    contextual_explanation: {
      integrated_explanation: "1:9의 '반대하는 자들'이 구체화됩니다. 크레타에는 '반항하는 자들'(ἀνυπότακτοι), '헛된 말쟁이들'(ματαιολόγοι), '속이는 자들'(φρεναπάται)이 많았습니다. '할례당'(ἐκ τῆς περιτομῆς)은 유대주의 거짓 교사들로, 이방인 신자에게 할례와 율법 준수를 강요했습니다(행 15:1-5, 갈 2:12). 바울은 이들을 강력히 반대했으며(1:11-16), 건강한 교리로 그들을 '잠잠하게 해야' 한다고 말합니다(1:11)."
    },
    korean_translation: {
      natural_translation: "불순종하고 헛된 말과 속임수로 가득한 사람들이 많기 때문입니다. 특히 할례당에 속한 자들이 그러합니다."
    },
    special_explanation: {
      explanation_type: "할례당 논쟁",
      content: "'할례당'은 예루살렘 공의회(행 15장) 이후에도 계속된 유대주의 문제를 반영합니다. 이들은 '믿음 + 율법'을 주장하여 복음의 충족성을 훼손했습니다. 바울은 갈라디아서와 디도서에서 이 문제를 강력히 다루며, 은혜로만 구원받는다는 복음의 핵심을 보호했습니다."
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
