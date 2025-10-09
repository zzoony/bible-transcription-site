import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

const analyses: AnalysisData[] = [
  {
    reference: "Titus 2:1",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "대조적 명령",
        original_text: "You, however, must teach what is appropriate to sound doctrine",
        korean_translation: "그러나 너는 건전한 교리에 합당한 것을 가르쳐야 합니다",
        grammatical_explanation: "however로 거짓 교사와 대조"
      }
    ],
    vocabulary: [
      { word: "however", ipa_pronunciation: "/haʊˈɛvər/", korean_pronunciation: "하우에버", definition_korean: "그러나" },
      { word: "appropriate", ipa_pronunciation: "/əˈproʊpriət/", korean_pronunciation: "어프로프리엇", definition_korean: "합당한, 적절한" },
      { word: "sound doctrine", ipa_pronunciation: "/saʊnd ˈdɒktrɪn/", korean_pronunciation: "사운드 닥트린", definition_korean: "건전한 교리" }
    ],
    contextual_explanation: {
      integrated_explanation: "2장은 1장의 거짓 교사들(1:10-16)과 대조하여 '너는 그러나'(σὺ δὲ)로 시작합니다. 디도는 '건전한 교리에 합당한 것'(ἃ πρέπει τῇ ὑγιαινούσῃ διδασκαλίᾳ)을 가르쳐야 합니다. '건전한 교리'는 1:9의 핵심 용어이며, 2장은 이 교리가 실제 삶으로 어떻게 나타나는지 보여줍니다. '합당한 것'(πρέπει)은 교리와 삶의 일치를 강조합니다. 2:2-10은 다양한 그룹(노인, 젊은이, 종)에게 구체적인 삶의 지침을 제시합니다."
    },
    korean_translation: {
      natural_translation: "그러나 너는 건전한 교리에 합당한 것을 가르쳐야 합니다."
    },
    special_explanation: {
      explanation_type: "교리와 삶의 연결",
      content: "디도서는 교리(διδασκαλία)를 추상적 개념이 아니라 구체적 삶으로 연결합니다. '건전한 교리에 합당한 것'은 믿음이 행동으로 나타나야 함을 의미합니다. 2장 전체는 이 원리를 연령별, 성별, 사회적 지위별로 구체화합니다."
    }
  },
  {
    reference: "Titus 2:2",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "노년 남성 지침",
        original_text: "Teach the older men to be temperate, worthy of respect, self-controlled",
        korean_translation: "노년 남성들에게 절제하고, 존중받을 만하며, 자제력이 있으라고 가르치고",
        grammatical_explanation: "3가지 외적 덕목"
      },
      {
        sequence_order: 2,
        semantic_classification: "영적 덕목",
        original_text: "and sound in faith, in love and in endurance",
        korean_translation: "믿음과 사랑과 인내에서 건전하라고 가르치십시오",
        grammatical_explanation: "3가지 내적 덕목"
      }
    ],
    vocabulary: [
      { word: "temperate", ipa_pronunciation: "/ˈtɛmpərət/", korean_pronunciation: "템퍼릿", definition_korean: "절제하는" },
      { word: "worthy of respect", ipa_pronunciation: "/ˈwɜːrði əv rɪˈspɛkt/", korean_pronunciation: "워디 오브 리스펙트", definition_korean: "존중받을 만한" },
      { word: "self-controlled", ipa_pronunciation: "/sɛlf kənˈtroʊld/", korean_pronunciation: "셀프 컨트롤드", definition_korean: "자제력 있는" },
      { word: "endurance", ipa_pronunciation: "/ɪnˈdjʊrəns/", korean_pronunciation: "인듀런스", definition_korean: "인내" }
    ],
    contextual_explanation: {
      integrated_explanation: "노년 남성들(πρεσβύτας)을 위한 6가지 덕목이 제시됩니다: (1-3) 외적 행동 - '절제'(νηφαλίους), '존중받을 만함'(σεμνούς), '자제력'(σώφρονας); (4-6) 내적 영적 상태 - '믿음'(πίστει), '사랑'(ἀγάπῃ), '인내'(ὑπομονῇ)에서 '건전함'(ὑγιαίνοντας). '건전함'은 1:9, 13; 2:1의 핵심 용어로, 영적 건강을 의미합니다. 노년 남성들은 공동체에서 지혜와 성숙의 모범이 되어야 했습니다(레 19:32)."
    },
    korean_translation: {
      natural_translation: "노년 남성들에게 절제하고, 존중받을 만하며, 자제력이 있고, 믿음과 사랑과 인내에서 건전하라고 가르치십시오."
    },
    special_explanation: {
      explanation_type: "믿음, 사랑, 인내",
      content: "믿음(πίστις), 사랑(ἀγάπη), 인내(ὑπομονή)는 바울 서신의 핵심 삼요소입니다(고전 13:13; 살전 1:3). 디도서는 이 세 덕목에서 '건전함'을 강조하여, 단순한 소유가 아니라 성숙한 발전을 요구합니다."
    }
  },
  {
    reference: "Titus 2:3",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "노년 여성의 긍정적 자세",
        original_text: "Likewise, teach the older women to be reverent in the way they live",
        korean_translation: "마찬가지로 노년 여성들에게 삶의 방식에서 경건하며",
        grammatical_explanation: "likewise로 연결"
      },
      {
        sequence_order: 2,
        semantic_classification: "노년 여성의 부정적 금지 1",
        original_text: "not to be slanderers",
        korean_translation: "비방하지 않고",
        grammatical_explanation: "부정 명령"
      },
      {
        sequence_order: 3,
        semantic_classification: "노년 여성의 부정적 금지 2",
        original_text: "or addicted to much wine",
        korean_translation: "많은 술에 중독되지 않으며",
        grammatical_explanation: "계속되는 부정 명령"
      },
      {
        sequence_order: 4,
        semantic_classification: "노년 여성의 긍정적 역할",
        original_text: "but to teach what is good",
        korean_translation: "선한 것을 가르치라고 하십시오",
        grammatical_explanation: "but으로 긍정 전환"
      }
    ],
    vocabulary: [
      { word: "reverent", ipa_pronunciation: "/ˈrɛvərənt/", korean_pronunciation: "레버런트", definition_korean: "경건한" },
      { word: "slanderers", ipa_pronunciation: "/ˈslændərərz/", korean_pronunciation: "슬랜더러즈", definition_korean: "비방하는 자들" },
      { word: "addicted", ipa_pronunciation: "/əˈdɪktɪd/", korean_pronunciation: "어딕티드", definition_korean: "중독된" }
    ],
    contextual_explanation: {
      integrated_explanation: "노년 여성들(πρεσβύτιδας)을 위한 지침은 4가지입니다: (1) '삶의 방식에서 경건함'(ἱεροπρεπεῖς - '제사장처럼 행동함'이라는 강한 표현), (2) '비방하지 않음'(μὴ διαβόλους - '마귀'라는 단어와 같은 어근), (3) '많은 술에 중독 않음'(μὴ οἴνῳ πολλῷ δεδουλωμένας), (4) '선한 것을 가르침'(καλοδιδασκάλους). 노년 여성들은 젊은 여성의 멘토 역할을 해야 했습니다(2:4-5). 초대교회에서 나이든 여성들은 중요한 교육적 역할을 담당했습니다."
    },
    korean_translation: {
      natural_translation: "마찬가지로 노년 여성들에게 삶의 방식에서 경건하고, 비방하지 않고, 많은 술에 중독되지 않으며, 선한 것을 가르치라고 하십시오."
    },
    special_explanation: {
      explanation_type: "제사장적 행동",
      content: "'경건함'(ἱεροπρεπεῖς)은 문자적으로 '제사장에게 합당한'이라는 뜻입니다. 벧전 2:9의 '왕 같은 제사장' 개념을 반영하며, 노년 여성들의 삶이 거룩한 제사장처럼 하나님께 구별되어야 함을 강조합니다."
    }
  },
  {
    reference: "Titus 2:4",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "멘토링의 목적",
        original_text: "Then they can urge the younger women to love their husbands and children",
        korean_translation: "그러면 그들이 젊은 여성들에게 남편과 자녀를 사랑하라고 권면할 수 있습니다",
        grammatical_explanation: "then으로 결과 제시"
      }
    ],
    vocabulary: [
      { word: "urge", ipa_pronunciation: "/ɜːrdʒ/", korean_pronunciation: "어지", definition_korean: "권면하다" },
      { word: "younger women", ipa_pronunciation: "/ˈjʌŋɡər ˈwɪmɪn/", korean_pronunciation: "영거 위민", definition_korean: "젊은 여성들" }
    ],
    contextual_explanation: {
      integrated_explanation: "노년 여성들(2:3)의 역할은 젊은 여성들(νέας)을 '훈련시키는'(σωφρονίζωσιν - '지혜롭게 만들다') 것입니다. 첫 번째 지침은 '남편 사랑'(φιλάνδρους)과 '자녀 사랑'(φιλοτέκνους)입니다. 그리스어는 복합어로, 자연스러운 애정을 강조합니다. 그리스-로마 문화에서 여성은 종종 자녀보다 남편에게 덜 헌신적이었고, 일부는 자녀 양육을 노예에게 맡겼습니다. 기독교는 가정 내 사랑과 헌신을 강조했습니다."
    },
    korean_translation: {
      natural_translation: "그러면 그들이 젊은 여성들에게 남편과 자녀를 사랑하라고 권면할 수 있습니다."
    },
    special_explanation: {
      explanation_type: "세대 간 멘토링",
      content: "디도서는 체계적 멘토링 구조를 제시합니다: 노년 여성 → 젊은 여성. 이는 초대교회의 중요한 제자훈련 모델이었습니다. 공식 교사가 될 수 없었던 여성들도(딤전 2:12) 비공식적 멘토링을 통해 핵심적 교육 역할을 담당했습니다."
    }
  },
  {
    reference: "Titus 2:5",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "젊은 여성의 덕목 1-2",
        original_text: "to be self-controlled and pure",
        korean_translation: "자제력이 있고 순결하며",
        grammatical_explanation: "내적 성품"
      },
      {
        sequence_order: 2,
        semantic_classification: "젊은 여성의 덕목 3",
        original_text: "to be busy at home",
        korean_translation: "집안일에 부지런하고",
        grammatical_explanation: "가정 내 역할"
      },
      {
        sequence_order: 3,
        semantic_classification: "젊은 여성의 덕목 4-5",
        original_text: "to be kind, and to be subject to their husbands",
        korean_translation: "친절하며, 자기 남편에게 순종하라고 하십시오",
        grammatical_explanation: "관계적 태도"
      },
      {
        sequence_order: 4,
        semantic_classification: "목적",
        original_text: "so that no one will malign the word of God",
        korean_translation: "그래야 하나님의 말씀이 비방받지 않을 것입니다",
        grammatical_explanation: "so that으로 목적 제시"
      }
    ],
    vocabulary: [
      { word: "self-controlled", ipa_pronunciation: "/sɛlf kənˈtroʊld/", korean_pronunciation: "셀프 컨트롤드", definition_korean: "자제력 있는" },
      { word: "pure", ipa_pronunciation: "/pjʊr/", korean_pronunciation: "퓨어", definition_korean: "순결한" },
      { word: "busy at home", ipa_pronunciation: "/ˈbɪzi æt hoʊm/", korean_pronunciation: "비지 앳 홈", definition_korean: "집안일에 부지런한" },
      { word: "subject", ipa_pronunciation: "/səbˈdʒɛkt/", korean_pronunciation: "서브젝트", definition_korean: "순종하는" },
      { word: "malign", ipa_pronunciation: "/məˈlaɪn/", korean_pronunciation: "멀라인", definition_korean: "비방하다" }
    ],
    contextual_explanation: {
      integrated_explanation: "젊은 여성들을 위한 5가지 덕목이 제시됩니다: (1) '자제력'(σώφρονας - 2:2, 4와 연결), (2) '순결'(ἁγνάς), (3) '집안일에 부지런함'(οἰκουργούς - '집 일꾼'), (4) '친절'(ἀγαθάς), (5) '남편에게 순종'(ὑποτασσομένας). 이러한 지침의 목적은 '하나님의 말씀이 비방받지 않게'(ἵνα μὴ ὁ λόγος τοῦ θεοῦ βλασφημῆται) 하기 위함입니다. 1세기 문화에서 기독교 여성들의 비전통적 행동은 복음을 비방거리로 만들 수 있었습니다. 바울은 문화적 기대와 복음 증거 사이의 균형을 강조합니다(고전 9:19-23)."
    },
    korean_translation: {
      natural_translation: "자제력이 있고 순결하며, 집안일에 부지런하고, 친절하며, 자기 남편에게 순종하라고 하십시오. 그래야 하나님의 말씀이 비방받지 않을 것입니다."
    },
    special_explanation: {
      explanation_type: "문화적 증거",
      content: "이 구절은 1세기 문화적 맥락을 반영합니다. 기독교는 여성에게 새로운 자유를 주었지만(갈 3:28), 동시에 복음을 위해 문화적 규범 내에서 증거하도록 권면했습니다. '하나님의 말씀이 비방받지 않게'는 디도서의 핵심 관심사로(2:8, 10도 유사), 신자의 삶이 복음의 신뢰성을 보여주어야 함을 강조합니다."
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
