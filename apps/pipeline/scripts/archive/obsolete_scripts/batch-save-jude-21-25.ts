import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

const analyses: AnalysisData[] = [
  {
    reference: "Jude 1:21",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "주절 명령",
        original_text: "keep yourselves in God's love",
        korean_translation: "하나님의 사랑 안에 자신을 지키며",
        grammatical_explanation: "핵심 명령"
      },
      {
        sequence_order: 2,
        semantic_classification: "부사절",
        original_text: "as you wait for the mercy of our Lord Jesus Christ",
        korean_translation: "우리 주 예수 그리스도의 자비를 기다리는 동안",
        grammatical_explanation: "시간적 배경"
      },
      {
        sequence_order: 3,
        semantic_classification: "부정사구",
        original_text: "to bring you to eternal life",
        korean_translation: "여러분을 영생으로 인도하기를",
        grammatical_explanation: "목적"
      }
    ],
    vocabulary: [
      { word: "keep", ipa_pronunciation: "/kiːp/", korean_pronunciation: "킵", definition_korean: "지키다" },
      { word: "wait for", ipa_pronunciation: "/weɪt fɔːr/", korean_pronunciation: "웨이트 포", definition_korean: "기다리다" },
      { word: "mercy", ipa_pronunciation: "/ˈmɜːrsi/", korean_pronunciation: "머시", definition_korean: "자비" },
      { word: "eternal life", ipa_pronunciation: "/ɪˈtɜːrnəl laɪf/", korean_pronunciation: "이터널 라이프", definition_korean: "영생" }
    ],
    contextual_explanation: {
      integrated_explanation: "이 구절은 1:20의 분사구들과 함께 주요 명령을 구성합니다. '하나님의 사랑 안에 자신을 지키라'는 것은 하나님과의 교제를 유지하고 그분의 뜻에 순종하라는 의미입니다. 이는 하나님이 우리를 사랑하신다는 객관적 사실(로마 8:39)과, 우리가 그 사랑 안에 거하도록 노력해야 하는 주관적 책임을 모두 포함합니다. '우리 주 예수 그리스도의 자비를 기다리는 동안'은 재림을 향한 소망의 자세를 나타내며, 그 자비가 우리를 '영생으로 인도할 것'입니다."
    },
    korean_translation: {
      natural_translation: "하나님의 사랑 안에 자신을 지키며, 우리 주 예수 그리스도의 자비가 여러분을 영생으로 인도하기를 기다리십시오."
    },
    special_explanation: {
      explanation_type: "신학적 균형",
      content: "'keep yourselves in God's love'는 능동적 순종을 요구하지만, 동시에 하나님의 은혜 안에서 보호받는 것을 전제합니다(1:1의 'kept for Jesus Christ'와 호응). 'wait for the mercy'는 재림 대망(eschatological hope)을 나타내며, 우리의 최종 구원이 하나님의 자비에 근거함을 강조합니다."
    }
  },
  {
    reference: "Jude 1:22",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "명령문",
        original_text: "Be merciful to those who doubt",
        korean_translation: "의심하는 사람들에게는 자비를 베푸십시오",
        grammatical_explanation: "긍휼의 대상 1"
      }
    ],
    vocabulary: [
      { word: "merciful", ipa_pronunciation: "/ˈmɜːrsɪfəl/", korean_pronunciation: "머시풀", definition_korean: "자비로운" },
      { word: "doubt", ipa_pronunciation: "/daʊt/", korean_pronunciation: "다우트", definition_korean: "의심하다" }
    ],
    contextual_explanation: {
      integrated_explanation: "유다는 거짓 교사들과 달리, 교회 내에서 의심하거나 혼란스러워하는 사람들을 어떻게 대해야 하는지 지침을 제시합니다. '의심하는 자들'(διακρινομένοις)은 거짓 교사들의 영향으로 믿음에 흔들리는 연약한 신자들을 가리킵니다. 이들에게는 정죄가 아닌 '자비'(ἐλεᾶτε)를 베풀어야 합니다. 이는 마태복음 18:12-14의 잃은 양 비유와 유사한 목회적 배려를 보여줍니다."
    },
    korean_translation: {
      natural_translation: "의심하는 사람들에게는 자비를 베푸십시오."
    },
    special_explanation: {
      explanation_type: "목회적 지침",
      content: "'those who doubt'는 거짓 교사들(확신에 찬 악인)과 진실한 신자들(확고한 믿음) 사이의 중간 그룹으로, 교회의 목회적 관심이 필요한 대상입니다. 일부 사본에서는 '구별하라'(διακρίνετε)로 읽기도 하지만, NIV는 '자비를 베풀라'를 택했습니다."
    }
  },
  {
    reference: "Jude 1:23",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "명령문",
        original_text: "save others by snatching them from the fire",
        korean_translation: "다른 이들은 불에서 낚아채어 구원하고",
        grammatical_explanation: "긍휼의 대상 2"
      },
      {
        sequence_order: 2,
        semantic_classification: "명령문",
        original_text: "to others show mercy, mixed with fear",
        korean_translation: "또 다른 이들에게는 두려움과 섞인 자비를 베풀되",
        grammatical_explanation: "긍휼의 대상 3"
      },
      {
        sequence_order: 3,
        semantic_classification: "분사구",
        original_text: "hating even the clothing stained by corrupted flesh",
        korean_translation: "부패한 육체로 더럽혀진 옷조차 미워하십시오",
        grammatical_explanation: "조건"
      }
    ],
    vocabulary: [
      { word: "snatch", ipa_pronunciation: "/snætʃ/", korean_pronunciation: "스내치", definition_korean: "낚아채다" },
      { word: "fire", ipa_pronunciation: "/ˈfaɪər/", korean_pronunciation: "파이어", definition_korean: "불" },
      { word: "mixed with", ipa_pronunciation: "/mɪkst wɪð/", korean_pronunciation: "믹스트 위드", definition_korean: "섞인" },
      { word: "fear", ipa_pronunciation: "/fɪər/", korean_pronunciation: "피어", definition_korean: "두려움" },
      { word: "stained", ipa_pronunciation: "/steɪnd/", korean_pronunciation: "스테인드", definition_korean: "더럽혀진" },
      { word: "corrupted flesh", ipa_pronunciation: "/kəˈrʌptɪd flɛʃ/", korean_pronunciation: "커럽티드 플레시", definition_korean: "부패한 육체" }
    ],
    contextual_explanation: {
      integrated_explanation: "유다는 세 가지 유형의 사람들과 각각의 대응 방식을 제시합니다. 첫째, '불에서 낚아채어 구원하라'는 것은 심판 직전의 긴급한 상황에서 적극적으로 구원해야 할 사람들입니다. 둘째, '두려움과 섞인 자비'를 베풀 사람들은 거짓 가르침에 깊이 오염된 자들로, 그들을 도우되 죄에 동화되지 않도록 조심해야 합니다. '부패한 육체로 더럽혀진 옷조차 미워하라'는 것은 죄의 전염성을 경고하며, 죄인은 사랑하되 죄는 미워하라는 원칙을 나타냅니다."
    },
    korean_translation: {
      natural_translation: "다른 이들은 불에서 낚아채어 구원하고, 또 다른 이들에게는 두려움과 섞인 자비를 베풀되, 부패한 육체로 더럽혀진 옷조차 미워하십시오."
    },
    special_explanation: {
      explanation_type: "실천적 지혜",
      content: "'snatching from the fire'는 스가랴 3:2와 아모스 4:11을 연상시키며, 심판의 긴박함을 강조합니다. 'clothing stained by corrupted flesh'는 비유적 표현으로, 죄와의 접촉조차 피해야 함을 나타냅니다. 이 구절은 사랑과 거룩함의 균형, 즉 죄인을 구원하되 죄에 물들지 않는 지혜를 요구합니다."
    }
  },
  {
    reference: "Jude 1:24",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "관계절",
        original_text: "To him who is able to keep you from stumbling",
        korean_translation: "여러분을 넘어지지 않게 지키실 수 있는 분께",
        grammatical_explanation: "하나님의 능력 1"
      },
      {
        sequence_order: 2,
        semantic_classification: "병렬 관계절",
        original_text: "and to present you before his glorious presence without fault and with great joy",
        korean_translation: "그분의 영광스러운 임재 앞에 흠 없이 큰 기쁨으로 서게 하실 수 있는 분께",
        grammatical_explanation: "하나님의 능력 2"
      }
    ],
    vocabulary: [
      { word: "able", ipa_pronunciation: "/ˈeɪbəl/", korean_pronunciation: "에이블", definition_korean: "능력 있는" },
      { word: "stumbling", ipa_pronunciation: "/ˈstʌmblɪŋ/", korean_pronunciation: "스텀블링", definition_korean: "넘어짐" },
      { word: "present", ipa_pronunciation: "/prɪˈzɛnt/", korean_pronunciation: "프리젠트", definition_korean: "제시하다" },
      { word: "glorious", ipa_pronunciation: "/ˈɡlɔːriəs/", korean_pronunciation: "글로리어스", definition_korean: "영광스러운" },
      { word: "without fault", ipa_pronunciation: "/wɪˈðaʊt fɔːlt/", korean_pronunciation: "위다웃 폴트", definition_korean: "흠 없이" }
    ],
    contextual_explanation: {
      integrated_explanation: "유다서는 장엄한 송영(doxology)으로 마무리됩니다. 이는 독자들이 거짓 교사들의 위협에 직면해 있지만, 궁극적으로 그들을 지키시는 분은 하나님이심을 선언합니다. '넘어지지 않게 지키실 수 있는 분'은 배교로부터의 보호를 의미하며, '그분의 영광스러운 임재 앞에 흠 없이 기쁨으로 서게 하실 분'은 최종 구원과 영화(glorification)를 약속합니다. 이는 1:1의 'kept for Jesus Christ'의 확실한 성취입니다."
    },
    korean_translation: {
      natural_translation: "여러분을 넘어지지 않게 지키시고, 그분의 영광스러운 임재 앞에 흠 없이 큰 기쁨으로 서게 하실 수 있는 분께,"
    },
    special_explanation: {
      explanation_type: "송영의 신학",
      content: "'keep you from stumbling'(ἀπταίστους)은 배교나 죄에 빠지지 않도록 보호하심을 의미합니다. 'without fault'(ἀμώμους)는 레위기의 제사 제물이 흠 없어야 한다는 개념에서 유래하며, 그리스도의 의로 인한 완전함을 나타냅니다. 'with great joy'(ἐν ἀγαλλιάσει)는 최후 심판이 신자들에게는 두려움이 아닌 기쁨의 순간임을 강조합니다."
    }
  },
  {
    reference: "Jude 1:25",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "주절",
        original_text: "to the only God our Savior be glory, majesty, power and authority",
        korean_translation: "우리의 구원자이신 유일하신 하나님께 영광과 위엄과 권능과 권세가 있기를 원합니다",
        grammatical_explanation: "송영 본문"
      },
      {
        sequence_order: 2,
        semantic_classification: "전치사구",
        original_text: "through Jesus Christ our Lord",
        korean_translation: "우리 주 예수 그리스도를 통하여",
        grammatical_explanation: "중보자"
      },
      {
        sequence_order: 3,
        semantic_classification: "시간 표현",
        original_text: "before all ages, now and forevermore! Amen.",
        korean_translation: "모든 시대 전에도, 지금도, 영원무궁토록! 아멘.",
        grammatical_explanation: "영원성"
      }
    ],
    vocabulary: [
      { word: "glory", ipa_pronunciation: "/ˈɡlɔːri/", korean_pronunciation: "글로리", definition_korean: "영광" },
      { word: "majesty", ipa_pronunciation: "/ˈmædʒəsti/", korean_pronunciation: "매제스티", definition_korean: "위엄" },
      { word: "power", ipa_pronunciation: "/ˈpaʊər/", korean_pronunciation: "파워", definition_korean: "권능" },
      { word: "authority", ipa_pronunciation: "/ɔːˈθɒrəti/", korean_pronunciation: "오쏘리티", definition_korean: "권세" },
      { word: "forevermore", ipa_pronunciation: "/fəˌrɛvərˈmɔːr/", korean_pronunciation: "포레버모어", definition_korean: "영원무궁토록" }
    ],
    contextual_explanation: {
      integrated_explanation: "송영은 '우리의 구원자이신 유일하신 하나님'께 네 가지 속성(영광, 위엄, 권능, 권세)을 돌립니다. 이는 1:4의 거짓 교사들이 하나님의 주권을 부인한 것과 대조됩니다. '예수 그리스도 우리 주를 통하여'는 하나님께 나아가는 유일한 중보자이신 그리스도를 강조합니다. '모든 시대 전, 지금, 영원무궁토록'은 하나님의 영원한 통치를 선포하며, 거짓 교사들의 일시적 위협에 비해 하나님의 절대적 주권을 확증합니다. '아멘'은 독자들의 동의와 확신을 표현합니다."
    },
    korean_translation: {
      natural_translation: "우리의 구원자이신 유일하신 하나님께, 우리 주 예수 그리스도를 통하여 영광과 위엄과 권능과 권세가 모든 시대 전에도, 지금도, 영원무궁토록 있기를 원합니다. 아멘."
    },
    special_explanation: {
      explanation_type: "송영의 구조",
      content: "'the only God our Savior'는 이사야의 일신론(43:11, 45:21)을 반영하며, 유다서의 신학적 정점입니다. 네 가지 속성(영광, 위엄, 권능, 권세)은 하나님의 완전한 주권을 표현하며, 거짓 교사들이 부인한 모든 것을 재확인합니다. 'before all ages, now and forevermore'는 시간을 초월한 하나님의 영원성을 강조하며, 역사의 시작부터 끝까지 하나님이 통치하심을 선언합니다."
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
