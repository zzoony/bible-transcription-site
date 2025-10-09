import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

const analysesData: AnalysisData[] = [
  {
    reference: "1 Timothy 1:1",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "신분 선언 - 바울의 사도직",
        original_text: "Paul, an apostle of Christ Jesus by the command of God our Savior and of Christ Jesus our hope",
        korean_translation: "바울, 우리 구주 하나님과 우리 소망이신 그리스도 예수의 명령에 따른 그리스도 예수의 사도",
        grammatical_explanation: "동격 구조로 바울의 신분을 설명, 'by the command'는 사도권의 출처를 명시"
      }
    ],
    vocabulary: [
      {
        word: "apostle",
        ipa_pronunciation: "/əˈpɑːsl/",
        korean_pronunciation: "어파슬",
        definition_korean: "사도, 파송된 자"
      },
      {
        word: "command",
        ipa_pronunciation: "/kəˈmænd/",
        korean_pronunciation: "커맨드",
        definition_korean: "명령, 지시"
      },
      {
        word: "Savior",
        ipa_pronunciation: "/ˈseɪvjər/",
        korean_pronunciation: "세이비어",
        definition_korean: "구주, 구원자"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 자신의 사도직이 인간의 임명이 아니라 하나님의 직접적인 명령에 의한 것임을 분명히 합니다. '하나님 우리 구주'와 '그리스도 예수 우리 소망'이라는 표현은 하나님과 그리스도의 역할을 명확히 구분하면서도 통합적으로 제시합니다. 이는 목회 서신의 전형적인 시작으로, 바울의 권위를 확립하는 중요한 서두입니다."
    },
    korean_translation: {
      natural_translation: "바울, 우리 구주 하나님과 우리 소망이신 그리스도 예수의 명령에 따른 그리스도 예수의 사도입니다.",
      translation_notes: "'by the command'는 바울의 사도직이 자발적 선택이 아닌 신적 임명임을 강조합니다."
    }
  },
  {
    reference: "1 Timothy 1:2",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "수신자 - 디모데에 대한 호칭",
        original_text: "To Timothy my true son in the faith",
        korean_translation: "믿음 안에서 참된 아들인 디모데에게",
        grammatical_explanation: "서신의 수신자를 밝히는 구조, 'true son'은 영적 관계를 나타냄"
      },
      {
        sequence_order: 2,
        semantic_classification: "축복 기원 - 삼중 축복",
        original_text: "Grace, mercy and peace from God the Father and Christ Jesus our Lord",
        korean_translation: "하나님 아버지와 우리 주 그리스도 예수로부터 은혜와 긍휼과 평강이 있기를",
        grammatical_explanation: "세 가지 축복 (grace, mercy, peace)을 나열하며, 그 출처를 명시"
      }
    ],
    vocabulary: [
      {
        word: "true",
        ipa_pronunciation: "/truː/",
        korean_pronunciation: "트루",
        definition_korean: "참된, 진실한"
      },
      {
        word: "grace",
        ipa_pronunciation: "/ɡreɪs/",
        korean_pronunciation: "그레이스",
        definition_korean: "은혜, 은총"
      },
      {
        word: "mercy",
        ipa_pronunciation: "/ˈmɜːrsi/",
        korean_pronunciation: "머시",
        definition_korean: "긍휼, 자비"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 디모데를 '믿음 안에서 참된 아들'로 부르며 깊은 영적 유대를 표현합니다. 일반적인 서신에서는 '은혜와 평강'만 언급하지만, 목회 서신에서는 '긍휼'이 추가되어 목회자가 필요로 하는 특별한 하나님의 자비를 강조합니다."
    },
    korean_translation: {
      natural_translation: "믿음 안에서 참된 아들인 디모데에게, 하나님 아버지와 우리 주 그리스도 예수로부터 은혜와 긍휼과 평강이 있기를 빕니다.",
      translation_notes: "목회 서신에만 나타나는 '긍휼(mercy)'의 추가는 목회 사역의 어려움을 고려한 특별한 배려입니다."
    }
  },
  {
    reference: "1 Timothy 1:3",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "과거 요청 상기 - 마케도니아로 떠날 때의 부탁",
        original_text: "As I urged you when I went into Macedonia",
        korean_translation: "내가 마케도니아로 떠날 때 그대에게 권면한 것처럼",
        grammatical_explanation: "시간을 나타내는 종속절, 과거의 맥락을 제공"
      },
      {
        sequence_order: 2,
        semantic_classification: "명령 - 에베소에 머물 것",
        original_text: "stay there in Ephesus",
        korean_translation: "에베소에 머물러서",
        grammatical_explanation: "명령형 동사 'stay', 장소를 명시"
      },
      {
        sequence_order: 3,
        semantic_classification: "목적 - 거짓 교리 금지 명령",
        original_text: "so that you may command certain people not to teach false doctrines any longer",
        korean_translation: "어떤 사람들에게 더 이상 거짓 교리를 가르치지 말도록 명령하게 하려 함이니",
        grammatical_explanation: "목적절 'so that', 부정 명령 'not to teach'"
      }
    ],
    vocabulary: [
      {
        word: "urged",
        ipa_pronunciation: "/ɜːrdʒd/",
        korean_pronunciation: "얼지드",
        definition_korean: "권면하다, 강력히 요청하다"
      },
      {
        word: "command",
        ipa_pronunciation: "/kəˈmænd/",
        korean_pronunciation: "커맨드",
        definition_korean: "명령하다"
      },
      {
        word: "doctrine",
        ipa_pronunciation: "/ˈdɑːktrɪn/",
        korean_pronunciation: "닥트린",
        definition_korean: "교리, 가르침"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울이 마케도니아로 떠나면서 디모데에게 에베소 교회를 맡긴 상황을 설명합니다. 에베소 교회에는 거짓 교사들이 활동하고 있었고, 디모데의 주요 임무는 이들을 제지하고 건전한 교리를 지키는 것이었습니다. 이는 1세기 교회가 직면한 교리적 위협의 심각성을 보여줍니다."
    },
    korean_translation: {
      natural_translation: "내가 마케도니아로 떠날 때 그대에게 권면한 것처럼, 에베소에 머물러서 어떤 사람들에게 더 이상 거짓 교리를 가르치지 말도록 명령하십시오.",
      translation_notes: "'certain people'은 구체적인 이름을 밝히지 않지만 특정 거짓 교사들을 가리킵니다."
    }
  },
  {
    reference: "1 Timothy 1:4",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "금지 대상 - 잘못된 교훈의 내용",
        original_text: "or to devote themselves to myths and endless genealogies",
        korean_translation: "또는 신화와 끝없는 족보에 몰두하지 말도록",
        grammatical_explanation: "병렬 구조로 3절의 명령과 연결, 'devote themselves to'는 과도한 집착을 의미"
      },
      {
        sequence_order: 2,
        semantic_classification: "결과 설명 - 부정적 영향",
        original_text: "Such things promote controversial speculations rather than advancing God's work",
        korean_translation: "그런 것들은 하나님의 일을 진전시키기보다는 논쟁적인 억측만 조장합니다",
        grammatical_explanation: "대조 구조 'rather than', 'promote'와 'advancing'의 대비"
      },
      {
        sequence_order: 3,
        semantic_classification: "수단 명시 - 하나님의 일의 방법",
        original_text: "which is by faith",
        korean_translation: "이는 믿음으로 되는 것입니다",
        grammatical_explanation: "관계절로 하나님의 일이 이루어지는 방식을 설명"
      }
    ],
    vocabulary: [
      {
        word: "devote",
        ipa_pronunciation: "/dɪˈvoʊt/",
        korean_pronunciation: "디보트",
        definition_korean: "전념하다, 몰두하다"
      },
      {
        word: "myths",
        ipa_pronunciation: "/mɪθs/",
        korean_pronunciation: "미쓰스",
        definition_korean: "신화, 꾸며낸 이야기"
      },
      {
        word: "genealogies",
        ipa_pronunciation: "/ˌdʒiːniˈɑːlədʒiz/",
        korean_pronunciation: "지니알러지즈",
        definition_korean: "족보, 계보"
      },
      {
        word: "speculation",
        ipa_pronunciation: "/ˌspekjuˈleɪʃn/",
        korean_pronunciation: "스페큘레이션",
        definition_korean: "억측, 추측"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "거짓 교사들은 유대교적 신화와 족보에 집착하여 무익한 논쟁을 일으켰습니다. 바울은 이러한 가르침이 믿음으로 이루어지는 하나님의 구원 사역을 방해한다고 지적합니다. 초대 교회는 영지주의적 요소와 유대주의적 율법주의라는 이중적 위협에 직면해 있었고, 바울은 복음의 순수성을 지키기 위해 이를 단호히 거부합니다."
    },
    korean_translation: {
      natural_translation: "또한 신화와 끝없는 족보에 몰두하지 말도록 하십시오. 그런 것들은 믿음으로 이루어지는 하나님의 일을 진전시키기보다는 논쟁적인 억측만 조장할 뿐입니다.",
      translation_notes: "'endless genealogies'는 당시 유대교에서 유행하던 족보 연구를 가리키며, 이는 복음의 본질에서 벗어난 것이었습니다."
    }
  },
  {
    reference: "1 Timothy 1:5",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "목표 선언 - 명령의 진정한 목적",
        original_text: "The goal of this command is love",
        korean_translation: "이 명령의 목표는 사랑입니다",
        grammatical_explanation: "주어-동사-보어 구조로 명령의 핵심 목적을 명시"
      },
      {
        sequence_order: 2,
        semantic_classification: "출처 설명 - 사랑의 세 가지 원천",
        original_text: "which comes from a pure heart and a good conscience and a sincere faith",
        korean_translation: "이는 깨끗한 마음과 선한 양심과 거짓 없는 믿음에서 나옵니다",
        grammatical_explanation: "관계절, 세 가지 요소를 'and'로 연결하는 병렬 구조"
      }
    ],
    vocabulary: [
      {
        word: "goal",
        ipa_pronunciation: "/ɡoʊl/",
        korean_pronunciation: "골",
        definition_korean: "목표, 목적"
      },
      {
        word: "pure",
        ipa_pronunciation: "/pjʊr/",
        korean_pronunciation: "퓨어",
        definition_korean: "깨끗한, 순수한"
      },
      {
        word: "conscience",
        ipa_pronunciation: "/ˈkɑːnʃəns/",
        korean_pronunciation: "칸션스",
        definition_korean: "양심"
      },
      {
        word: "sincere",
        ipa_pronunciation: "/sɪnˈsɪr/",
        korean_pronunciation: "신시어",
        definition_korean: "진실한, 거짓 없는"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 거짓 교사들의 무익한 논쟁과 대조하여 진정한 기독교 교훈의 목표는 사랑이라고 선언합니다. 이 사랑은 단순한 감정이 아니라 깨끗한 마음(순수한 동기), 선한 양심(도덕적 청렴성), 거짓 없는 믿음(진실한 신앙)에서 나오는 전인격적 덕입니다. 이는 예수님의 가장 큰 계명(하나님과 이웃 사랑)과 일치하는 교훈입니다."
    },
    korean_translation: {
      natural_translation: "이 명령의 목표는 사랑입니다. 이는 깨끗한 마음과 선한 양심과 거짓 없는 믿음에서 나오는 것입니다.",
      translation_notes: "세 가지 출처(마음, 양심, 믿음)는 인간 존재의 전체를 포괄하여 온전한 사랑을 강조합니다."
    }
  },
  {
    reference: "1 Timothy 1:6",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "일탈 행위 - 거짓 교사들의 이탈",
        original_text: "Some have departed from these",
        korean_translation: "어떤 이들은 이것들에서 벗어나서",
        grammatical_explanation: "주어-동사-전치사구, 'have departed'는 완료 시제로 지속적 상태를 나타냄"
      },
      {
        sequence_order: 2,
        semantic_classification: "결과 - 무의미한 말로의 전향",
        original_text: "and have turned to meaningless talk",
        korean_translation: "무의미한 말로 돌아섰습니다",
        grammatical_explanation: "병렬 동사 'have turned', 'meaningless talk'은 그들의 가르침의 공허함을 지적"
      }
    ],
    vocabulary: [
      {
        word: "departed",
        ipa_pronunciation: "/dɪˈpɑːrtɪd/",
        korean_pronunciation: "디파티드",
        definition_korean: "떠나다, 벗어나다"
      },
      {
        word: "meaningless",
        ipa_pronunciation: "/ˈmiːnɪŋləs/",
        korean_pronunciation: "미닝리스",
        definition_korean: "무의미한, 공허한"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "5절에서 언급한 사랑과 그 출처(깨끗한 마음, 선한 양심, 거짓 없는 믿음)로부터 일부가 이탈했음을 지적합니다. '무의미한 말'은 4절의 신화와 족보 논쟁을 다시 가리키며, 이는 영적으로 유익하지 않고 교회를 분열시키는 헛된 가르침입니다."
    },
    korean_translation: {
      natural_translation: "어떤 이들은 이것들에서 벗어나서 무의미한 말로 돌아섰습니다.",
      translation_notes: "'these'는 5절의 깨끗한 마음, 선한 양심, 거짓 없는 믿음을 가리킵니다."
    }
  },
  {
    reference: "1 Timothy 1:7",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "동기 - 거짓 교사들의 야망",
        original_text: "They want to be teachers of the law",
        korean_translation: "그들은 율법 교사가 되기를 원하지만",
        grammatical_explanation: "주어-동사-보어 구조, 'want to be'는 욕망을 나타냄"
      },
      {
        sequence_order: 2,
        semantic_classification: "무지 폭로 - 두 가지 결핍",
        original_text: "but they do not know what they are talking about or what they so confidently affirm",
        korean_translation: "자기들이 말하는 것도, 그토록 확신 있게 주장하는 것도 알지 못합니다",
        grammatical_explanation: "대조 접속사 'but', 두 개의 'what' 절이 병렬로 연결됨"
      }
    ],
    vocabulary: [
      {
        word: "teachers",
        ipa_pronunciation: "/ˈtiːtʃərz/",
        korean_pronunciation: "티처즈",
        definition_korean: "교사들"
      },
      {
        word: "confidently",
        ipa_pronunciation: "/ˈkɑːnfɪdəntli/",
        korean_pronunciation: "칸피던틀리",
        definition_korean: "확신 있게, 자신 있게"
      },
      {
        word: "affirm",
        ipa_pronunciation: "/əˈfɜːrm/",
        korean_pronunciation: "어펌",
        definition_korean: "주장하다, 단언하다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "거짓 교사들의 모순적 상황을 날카롭게 지적합니다. 그들은 율법 교사가 되려는 야망은 있지만, 정작 율법의 진정한 의미와 목적을 이해하지 못합니다. 그럼에도 불구하고 그들은 확신에 찬 태도로 가르치며, 이는 무지와 교만의 위험한 결합입니다. 바울은 지식 없는 열심과 권위 없는 확신을 경고합니다."
    },
    korean_translation: {
      natural_translation: "그들은 율법 교사가 되기를 원하지만, 자기들이 말하는 것도, 그토록 확신 있게 주장하는 것도 알지 못합니다.",
      translation_notes: "'confidently affirm'은 그들의 근거 없는 확신을 풍자적으로 표현합니다."
    }
  },
  {
    reference: "1 Timothy 1:8",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "긍정 선언 - 율법의 선함",
        original_text: "We know that the law is good",
        korean_translation: "우리는 율법이 선한 것임을 압니다",
        grammatical_explanation: "주어-동사-명사절, 'that' 절이 동사의 목적어"
      },
      {
        sequence_order: 2,
        semantic_classification: "조건 - 올바른 사용",
        original_text: "if one uses it properly",
        korean_translation: "누군가 그것을 올바르게 사용한다면",
        grammatical_explanation: "조건절 'if', 'properly'는 방식을 나타냄"
      }
    ],
    vocabulary: [
      {
        word: "law",
        ipa_pronunciation: "/lɔː/",
        korean_pronunciation: "로",
        definition_korean: "율법, 법"
      },
      {
        word: "properly",
        ipa_pronunciation: "/ˈprɑːpərli/",
        korean_pronunciation: "프라퍼리",
        definition_korean: "올바르게, 적절하게"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 율법 자체를 부정하지 않고 그 선함을 확인합니다. 문제는 율법 자체가 아니라 그것의 남용입니다. '올바르게 사용'한다는 것은 다음 구절들에서 설명될 율법의 본래 목적에 맞게 사용하는 것을 의미합니다. 이는 율법주의적 오용과 복음적 이해 사이의 균형을 제시합니다."
    },
    korean_translation: {
      natural_translation: "우리는 율법이 선한 것임을 압니다. 누군가 그것을 올바르게 사용한다면 말입니다.",
      translation_notes: "'if one uses it properly'는 율법의 가치가 그 사용 방식에 달려 있음을 강조합니다."
    }
  },
  {
    reference: "1 Timothy 1:9",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "원리 선언 - 율법의 대상",
        original_text: "We also know that the law is made not for the righteous but for lawbreakers and rebels",
        korean_translation: "우리는 또한 율법이 의로운 사람을 위해 만들어진 것이 아니라 불법자들과 반역자들을 위해 만들어졌음을 압니다",
        grammatical_explanation: "대조 구조 'not for... but for...', 'the righteous'와 'lawbreakers and rebels' 대비"
      },
      {
        sequence_order: 2,
        semantic_classification: "범죄자 목록 - 첫 번째 그룹",
        original_text: "the ungodly and sinful, the unholy and irreligious",
        korean_translation: "경건하지 않은 자와 죄인, 거룩하지 않은 자와 불경건한 자",
        grammatical_explanation: "네 가지 형용사가 쌍으로 병렬 구조"
      },
      {
        sequence_order: 3,
        semantic_classification: "범죄자 목록 - 극악한 죄",
        original_text: "for those who kill their fathers or mothers, for murderers",
        korean_translation: "아버지나 어머니를 죽이는 자들, 살인자들",
        grammatical_explanation: "구체적인 범죄 행위를 열거, 십계명의 순서를 반영"
      }
    ],
    vocabulary: [
      {
        word: "righteous",
        ipa_pronunciation: "/ˈraɪtʃəs/",
        korean_pronunciation: "라이처스",
        definition_korean: "의로운, 정의로운"
      },
      {
        word: "lawbreakers",
        ipa_pronunciation: "/ˈlɔːbreɪkərz/",
        korean_pronunciation: "로브레이커즈",
        definition_korean: "불법자들, 법을 어기는 자들"
      },
      {
        word: "rebels",
        ipa_pronunciation: "/ˈreblz/",
        korean_pronunciation: "레블즈",
        definition_korean: "반역자들"
      },
      {
        word: "ungodly",
        ipa_pronunciation: "/ʌnˈɡɑːdli/",
        korean_pronunciation: "언갓리",
        definition_korean: "경건하지 않은"
      },
      {
        word: "irreligious",
        ipa_pronunciation: "/ˌɪrɪˈlɪdʒəs/",
        korean_pronunciation: "이리리저스",
        definition_korean: "불경건한, 종교심이 없는"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 율법의 본래 목적을 설명합니다. 율법은 이미 성령으로 의롭게 된 사람들을 통제하기 위한 것이 아니라, 죄를 깨닫지 못하고 하나님께 반역하는 자들을 위한 것입니다. 범죄자 목록은 십계명의 순서를 따라 구성되어 있으며, 사회와 가정의 질서를 파괴하는 극악한 죄들을 포함합니다. 이는 율법의 교육적, 억제적 기능을 보여줍니다."
    },
    korean_translation: {
      natural_translation: "우리는 또한 율법이 의로운 사람을 위해 만들어진 것이 아니라, 불법자들과 반역자들, 경건하지 않은 자와 죄인, 거룩하지 않은 자와 불경건한 자, 아버지나 어머니를 죽이는 자들과 살인자들을 위해 만들어졌음을 압니다.",
      translation_notes: "범죄자 목록은 점차 구체적이고 심각해지며, 십계명의 순서와 연결됩니다."
    }
  },
  {
    reference: "1 Timothy 1:10",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "범죄자 목록 계속 - 성적 부도덕",
        original_text: "for the sexually immoral, for those practicing homosexuality",
        korean_translation: "음행하는 자들, 동성애를 행하는 자들",
        grammatical_explanation: "9절의 목록 계속, 성적 죄를 다룸"
      },
      {
        sequence_order: 2,
        semantic_classification: "범죄자 목록 계속 - 사회적 죄악",
        original_text: "for slave traders and liars and perjurers",
        korean_translation: "노예 매매업자와 거짓말하는 자들과 위증하는 자들",
        grammatical_explanation: "세 가지 사회적 죄악을 병렬로 나열"
      },
      {
        sequence_order: 3,
        semantic_classification: "포괄적 결론 - 건전한 교리에 반대되는 모든 것",
        original_text: "and for whatever else is contrary to the sound doctrine",
        korean_translation: "그리고 건전한 교리에 반대되는 그 밖의 모든 것",
        grammatical_explanation: "'whatever else' 포괄 표현, 'contrary to'는 대립을 나타냄"
      }
    ],
    vocabulary: [
      {
        word: "sexually immoral",
        ipa_pronunciation: "/ˈsekʃuəli ɪˈmɔːrəl/",
        korean_pronunciation: "섹슈얼리 이모럴",
        definition_korean: "음행하는, 성적으로 부도덕한"
      },
      {
        word: "homosexuality",
        ipa_pronunciation: "/ˌhoʊmoʊˌsekʃuˈæləti/",
        korean_pronunciation: "호모섹슈앨러티",
        definition_korean: "동성애"
      },
      {
        word: "slave traders",
        ipa_pronunciation: "/sleɪv ˈtreɪdərz/",
        korean_pronunciation: "슬레이브 트레이더즈",
        definition_korean: "노예 매매업자"
      },
      {
        word: "perjurers",
        ipa_pronunciation: "/ˈpɜːrdʒərərz/",
        korean_pronunciation: "퍼저러즈",
        definition_korean: "위증하는 자들"
      },
      {
        word: "contrary",
        ipa_pronunciation: "/ˈkɑːntreri/",
        korean_pronunciation: "칸트레리",
        definition_korean: "반대되는, 거스르는"
      },
      {
        word: "sound doctrine",
        ipa_pronunciation: "/saʊnd ˈdɑːktrɪn/",
        korean_pronunciation: "사운드 닥트린",
        definition_korean: "건전한 교리"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "범죄 목록이 성적 죄악과 사회적 부정의로 확대됩니다. 노예 매매는 1세기 로마 사회에서 흔했지만 바울은 이를 명백히 죄악으로 규정합니다. 거짓말과 위증은 공동체의 신뢰를 파괴하는 죄입니다. 마지막으로 바울은 '건전한 교리에 반대되는 그 밖의 모든 것'으로 포괄적 결론을 내립니다. 이는 율법이 단순히 규칙 목록이 아니라 하나님의 거룩한 성품을 반영하는 도덕적 기준임을 보여줍니다."
    },
    korean_translation: {
      natural_translation: "음행하는 자들과 동성애를 행하는 자들, 노예 매매업자와 거짓말하는 자들과 위증하는 자들, 그리고 건전한 교리에 반대되는 그 밖의 모든 것을 위한 것입니다.",
      translation_notes: "'sound doctrine'은 복음의 핵심 진리를 가리키며, 도덕적 기준과 교리적 진리를 통합합니다."
    }
  },
  {
    reference: "1 Timothy 1:11",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "교리의 출처 - 복음과의 일치",
        original_text: "that conforms to the gospel concerning the glory of the blessed God",
        korean_translation: "이는 복된 하나님의 영광에 관한 복음에 일치하는 것입니다",
        grammatical_explanation: "관계절, 'conforms to'는 일치를 나타냄, 'concerning'은 복음의 내용을 명시"
      },
      {
        sequence_order: 2,
        semantic_classification: "위임 - 바울에게 맡겨진 복음",
        original_text: "which he entrusted to me",
        korean_translation: "이 복음은 그분이 내게 맡기신 것입니다",
        grammatical_explanation: "관계절, 'entrust'는 신뢰하여 맡김을 의미"
      }
    ],
    vocabulary: [
      {
        word: "conforms",
        ipa_pronunciation: "/kənˈfɔːrmz/",
        korean_pronunciation: "컨폼즈",
        definition_korean: "일치하다, 부합하다"
      },
      {
        word: "gospel",
        ipa_pronunciation: "/ˈɡɑːspəl/",
        korean_pronunciation: "가스펠",
        definition_korean: "복음, 좋은 소식"
      },
      {
        word: "blessed",
        ipa_pronunciation: "/blest/",
        korean_pronunciation: "블레스트",
        definition_korean: "복된, 축복받은"
      },
      {
        word: "entrusted",
        ipa_pronunciation: "/ɪnˈtrʌstɪd/",
        korean_pronunciation: "인트러스티드",
        definition_korean: "맡기다, 위임하다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 건전한 교리가 복음과 분리될 수 없음을 강조합니다. 이 복음은 '복된 하나님의 영광'에 관한 것으로, 하나님의 본질적 선하심과 영광을 계시합니다. 바울은 이 복음이 자신에게 직접 맡겨진 것임을 언급하여 자신의 사도적 권위를 재확인합니다. 율법의 올바른 이해는 복음의 빛 안에서만 가능하며, 이는 바울이 직접 받은 계시에 기초합니다."
    },
    korean_translation: {
      natural_translation: "이는 복된 하나님의 영광에 관한 복음에 일치하는 것입니다. 이 복음은 그분이 내게 맡기신 것입니다.",
      translation_notes: "'the gospel concerning the glory of the blessed God'는 복음의 핵심이 하나님의 영광 계시임을 보여줍니다."
    }
  },
  {
    reference: "1 Timothy 1:12",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "감사 표현 - 그리스도께 대한 감사",
        original_text: "I thank Christ Jesus our Lord, who has given me strength",
        korean_translation: "나에게 능력을 주신 우리 주 그리스도 예수께 감사합니다",
        grammatical_explanation: "주절, 관계절 'who'로 감사의 이유 제시, 완료 시제 'has given'"
      },
      {
        sequence_order: 2,
        semantic_classification: "이유 - 신뢰받음과 임명",
        original_text: "that he considered me trustworthy, appointing me to his service",
        korean_translation: "그분이 나를 신실하다고 여기시어 그분의 섬김에 임명하셨기 때문입니다",
        grammatical_explanation: "'that' 절로 감사 이유 설명, 분사 'appointing'으로 결과를 나타냄"
      }
    ],
    vocabulary: [
      {
        word: "strength",
        ipa_pronunciation: "/streŋθ/",
        korean_pronunciation: "스트렝쓰",
        definition_korean: "능력, 힘"
      },
      {
        word: "considered",
        ipa_pronunciation: "/kənˈsɪdərd/",
        korean_pronunciation: "컨시더드",
        definition_korean: "여기다, 간주하다"
      },
      {
        word: "trustworthy",
        ipa_pronunciation: "/ˈtrʌstˌwɜːrði/",
        korean_pronunciation: "트러스트워디",
        definition_korean: "신실한, 믿을 만한"
      },
      {
        word: "appointing",
        ipa_pronunciation: "/əˈpɔɪntɪŋ/",
        korean_pronunciation: "어포인팅",
        definition_korean: "임명하다, 지명하다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 자신의 과거 죄악(13절)을 언급하기 전에 먼저 그리스도의 은혜에 대한 감사로 시작합니다. 그는 사역의 능력이 자신에게서 나온 것이 아니라 그리스도께서 주신 것임을 인정합니다. '신실하다고 여기심'은 바울의 객관적 자격이 아니라 그리스도의 주권적 선택을 강조합니다. 이는 사역자의 자격이 하나님의 부르심과 능력 부여에 있음을 보여줍니다."
    },
    korean_translation: {
      natural_translation: "나에게 능력을 주신 우리 주 그리스도 예수께 감사합니다. 그분이 나를 신실하다고 여기시어 그분의 섬김에 임명하셨기 때문입니다.",
      translation_notes: "'appointing me to his service'는 바울의 사도직이 그리스도의 직접적인 임명임을 강조합니다."
    }
  },
  {
    reference: "1 Timothy 1:13",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "과거 고백 - 바울의 세 가지 죄",
        original_text: "Even though I was once a blasphemer and a persecutor and a violent man",
        korean_translation: "비록 내가 한때 신성 모독자요 박해자요 폭력적인 사람이었지만",
        grammatical_explanation: "양보절 'Even though', 세 가지 죄를 병렬 구조로 나열"
      },
      {
        sequence_order: 2,
        semantic_classification: "은혜 - 긍휼을 받은 이유",
        original_text: "I was shown mercy because I acted in ignorance and unbelief",
        korean_translation: "내가 무지와 불신앙 가운데 행했기 때문에 긍휼을 받았습니다",
        grammatical_explanation: "수동태 'was shown', 'because' 절로 이유 설명"
      }
    ],
    vocabulary: [
      {
        word: "blasphemer",
        ipa_pronunciation: "/blæsˈfiːmər/",
        korean_pronunciation: "블래스피머",
        definition_korean: "신성 모독자"
      },
      {
        word: "persecutor",
        ipa_pronunciation: "/ˈpɜːrsɪkjuːtər/",
        korean_pronunciation: "퍼시큐터",
        definition_korean: "박해자"
      },
      {
        word: "violent",
        ipa_pronunciation: "/ˈvaɪələnt/",
        korean_pronunciation: "바이얼런트",
        definition_korean: "폭력적인"
      },
      {
        word: "ignorance",
        ipa_pronunciation: "/ˈɪɡnərəns/",
        korean_pronunciation: "이그너런스",
        definition_korean: "무지"
      },
      {
        word: "unbelief",
        ipa_pronunciation: "/ˌʌnbɪˈliːf/",
        korean_pronunciation: "언비리프",
        definition_korean: "불신앙"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 회심 전 자신의 죄악을 솔직하게 고백합니다. 그는 하나님을 모독하고, 기독교인들을 박해하며, 폭력을 사용했습니다(행 9장 참조). 그러나 그는 '무지와 불신앙 가운데' 행했다고 설명합니다. 이는 그의 죄를 정당화하는 것이 아니라, 하나님의 긍휼이 미치는 범위를 보여줍니다. 의도적 반역이 아닌 무지에서 비롯된 죄에 대해서도 하나님은 구원의 긍휼을 베푸십니다."
    },
    korean_translation: {
      natural_translation: "비록 내가 한때 신성 모독자요 박해자요 폭력적인 사람이었지만, 내가 무지와 불신앙 가운데 행했기 때문에 긍휼을 받았습니다.",
      translation_notes: "'in ignorance and unbelief'는 바울이 그리스도를 알지 못한 상태에서 잘못된 열심으로 행했음을 설명합니다."
    }
  },
  {
    reference: "1 Timothy 1:14",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "은혜의 풍성함 - 넘치게 부어진 은혜",
        original_text: "The grace of our Lord was poured out on me abundantly",
        korean_translation: "우리 주님의 은혜가 내게 넘치도록 부어졌습니다",
        grammatical_explanation: "수동태 구조, 'poured out' 은유, 부사 'abundantly'로 정도 강조"
      },
      {
        sequence_order: 2,
        semantic_classification: "동반 요소 - 믿음과 사랑",
        original_text: "along with the faith and love that are in Christ Jesus",
        korean_translation: "그리스도 예수 안에 있는 믿음과 사랑과 함께",
        grammatical_explanation: "'along with' 구조, 관계절 'that are in Christ Jesus'로 출처 명시"
      }
    ],
    vocabulary: [
      {
        word: "poured out",
        ipa_pronunciation: "/pɔːrd aʊt/",
        korean_pronunciation: "포드 아웃",
        definition_korean: "부어지다, 쏟아지다"
      },
      {
        word: "abundantly",
        ipa_pronunciation: "/əˈbʌndəntli/",
        korean_pronunciation: "어번던틀리",
        definition_korean: "풍성하게, 넘치도록"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "13절의 과거 죄악에 대비하여 14절은 하나님 은혜의 풍성함을 강조합니다. '넘치도록 부어진' 표현은 구약의 성령 부으심 이미지를 연상시키며, 은혜가 죄를 압도함을 보여줍니다(롬 5:20). 이 은혜와 함께 믿음과 사랑도 주어졌는데, 이는 모두 '그리스도 예수 안에' 있는 것으로 그리스도와의 연합을 강조합니다. 5절의 '사랑'이 여기서 다시 나타나며, 이는 하나님께서 주신 선물입니다."
    },
    korean_translation: {
      natural_translation: "우리 주님의 은혜가 그리스도 예수 안에 있는 믿음과 사랑과 함께 내게 넘치도록 부어졌습니다.",
      translation_notes: "'poured out abundantly'는 은혜의 과도함을 강조하며, 죄보다 은혜가 훨씬 더 큼을 보여줍니다."
    }
  },
  {
    reference: "1 Timothy 1:15",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "선언 - 신뢰할 만한 말씀",
        original_text: "Here is a trustworthy saying that deserves full acceptance",
        korean_translation: "이것은 신뢰할 만하고 완전히 받아들일 만한 말씀입니다",
        grammatical_explanation: "지시 구조 'Here is', 두 가지 특성을 병렬로 제시"
      },
      {
        sequence_order: 2,
        semantic_classification: "복음 핵심 - 그리스도의 오심 목적",
        original_text: "Christ Jesus came into the world to save sinners",
        korean_translation: "그리스도 예수께서 죄인들을 구원하시려고 세상에 오셨습니다",
        grammatical_explanation: "주어-동사-목적절, 부정사 'to save'로 목적 표현"
      },
      {
        sequence_order: 3,
        semantic_classification: "개인적 적용 - 바울의 고백",
        original_text: "of whom I am the worst",
        korean_translation: "그 중에 내가 가장 큰 죄인입니다",
        grammatical_explanation: "관계절, 최상급 'the worst'로 자신의 죄를 인정"
      }
    ],
    vocabulary: [
      {
        word: "trustworthy",
        ipa_pronunciation: "/ˈtrʌstˌwɜːrði/",
        korean_pronunciation: "트러스트워디",
        definition_korean: "신뢰할 만한"
      },
      {
        word: "deserves",
        ipa_pronunciation: "/dɪˈzɜːrvz/",
        korean_pronunciation: "디절브즈",
        definition_korean: "받을 만하다"
      },
      {
        word: "acceptance",
        ipa_pronunciation: "/əkˈseptəns/",
        korean_pronunciation: "액셉턴스",
        definition_korean: "받아들임, 수용"
      },
      {
        word: "sinners",
        ipa_pronunciation: "/ˈsɪnərz/",
        korean_pronunciation: "시너즈",
        definition_korean: "죄인들"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "이것은 목회 서신에서 반복되는 '신뢰할 만한 말씀'의 첫 번째 예입니다. 바울은 복음의 핵심을 단순하고 명확하게 표현합니다: '그리스도 예수께서 죄인들을 구원하시려고 세상에 오셨다.' 이는 성육신의 목적을 직접적으로 진술합니다. 바울은 자신을 '죄인 중 가장 큰 자'로 표현하는데, 이는 과장이 아니라 하나님 앞에서의 진실한 자기 인식입니다. 사도로서의 위대함이 아니라 죄인으로서의 정체성이 그의 사역의 기초가 됩니다."
    },
    korean_translation: {
      natural_translation: "이것은 신뢰할 만하고 완전히 받아들일 만한 말씀입니다. 그리스도 예수께서 죄인들을 구원하시려고 세상에 오셨는데, 그 중에 내가 가장 큰 죄인입니다.",
      translation_notes: "'of whom I am the worst'는 바울의 과거(박해자)에 대한 깊은 회개와 겸손을 보여줍니다."
    }
  },
  {
    reference: "1 Timothy 1:16",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "이유 - 긍휼 받은 목적",
        original_text: "But for that very reason I was shown mercy",
        korean_translation: "그러나 바로 그 이유 때문에 내가 긍휼을 받았습니다",
        grammatical_explanation: "대조 접속사 'But', 'for that very reason'은 15절과 연결, 수동태 'was shown'"
      },
      {
        sequence_order: 2,
        semantic_classification: "목적 - 그리스도의 인내 전시",
        original_text: "so that in me, the worst of sinners, Christ Jesus might display his immense patience",
        korean_translation: "그리하여 가장 큰 죄인인 내게 그리스도 예수께서 그분의 무한한 인내를 보이시기 위함입니다",
        grammatical_explanation: "목적절 'so that', 동격 설명 'the worst of sinners', 형용사 'immense' 강조"
      },
      {
        sequence_order: 3,
        semantic_classification: "최종 목적 - 다른 이들을 위한 본보기",
        original_text: "as an example for those who would believe in him and receive eternal life",
        korean_translation: "그분을 믿고 영생을 받을 자들을 위한 본보기로",
        grammatical_explanation: "'as an example' 구조, 관계절 'who would believe' (미래 의지), 병렬 동사 'believe'와 'receive'"
      }
    ],
    vocabulary: [
      {
        word: "immense",
        ipa_pronunciation: "/ɪˈmens/",
        korean_pronunciation: "이멘스",
        definition_korean: "무한한, 엄청난"
      },
      {
        word: "patience",
        ipa_pronunciation: "/ˈpeɪʃns/",
        korean_pronunciation: "페이션스",
        definition_korean: "인내, 오래 참으심"
      },
      {
        word: "example",
        ipa_pronunciation: "/ɪɡˈzæmpl/",
        korean_pronunciation: "이그잼플",
        definition_korean: "본보기, 모범"
      },
      {
        word: "eternal life",
        ipa_pronunciation: "/ɪˈtɜːrnl laɪf/",
        korean_pronunciation: "이털널 라이프",
        definition_korean: "영생, 영원한 생명"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 자신이 '가장 큰 죄인'이었기 때문에 오히려 긍휼을 받았다고 역설적으로 말합니다. 그 목적은 이중적입니다: (1) 그리스도의 무한한 인내를 전시하고, (2) 미래의 믿는 자들에게 소망의 본보기가 되는 것입니다. 바울의 회심은 단순히 개인적 구원이 아니라 하나님의 구원 계획의 시범 사례입니다. '만약 하나님이 바울 같은 죄인도 구원하실 수 있다면, 누구든지 구원받을 수 있다'는 메시지를 전합니다."
    },
    korean_translation: {
      natural_translation: "그러나 바로 그 이유 때문에 내가 긍휼을 받았습니다. 그리하여 가장 큰 죄인인 내게 그리스도 예수께서 그분의 무한한 인내를 보이시고, 그분을 믿고 영생을 받을 자들을 위한 본보기로 삼으시기 위함입니다.",
      translation_notes: "'for that very reason'은 역설적으로 죄의 크기가 은혜의 풍성함을 보여주는 기회가 됨을 나타냅니다."
    }
  },
  {
    reference: "1 Timothy 1:17",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "송영 - 하나님을 향한 찬양",
        original_text: "Now to the King eternal, immortal, invisible, the only God, be honor and glory for ever and ever. Amen.",
        korean_translation: "이제 영원하신 왕, 불멸하시고 보이지 않으시는 유일하신 하나님께 영원무궁토록 존귀와 영광이 있기를 원합니다. 아멘.",
        grammatical_explanation: "송영 구조, 네 가지 속성 나열 (eternal, immortal, invisible, only), 'be' 동사로 기원 표현"
      }
    ],
    vocabulary: [
      {
        word: "eternal",
        ipa_pronunciation: "/ɪˈtɜːrnl/",
        korean_pronunciation: "이털널",
        definition_korean: "영원한"
      },
      {
        word: "immortal",
        ipa_pronunciation: "/ɪˈmɔːrtl/",
        korean_pronunciation: "이모털",
        definition_korean: "불멸의, 죽지 않는"
      },
      {
        word: "invisible",
        ipa_pronunciation: "/ɪnˈvɪzəbl/",
        korean_pronunciation: "인비저블",
        definition_korean: "보이지 않는"
      },
      {
        word: "honor",
        ipa_pronunciation: "/ˈɑːnər/",
        korean_pronunciation: "아너",
        definition_korean: "존귀, 명예"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "하나님의 구원 사역에 대한 묵상(12-16절) 후 자연스럽게 송영으로 이어집니다. 바울은 하나님의 네 가지 본질적 속성을 선포합니다: 영원성(시간을 초월), 불멸성(죽음 없음), 비가시성(물질적 한계 초월), 유일성(다른 신 없음). 이는 구원의 하나님이 피조물과 근본적으로 다른 초월적 존재임을 강조합니다. '아멘'은 히브리어로 '참으로 그러하다'는 의미로 확증입니다."
    },
    korean_translation: {
      natural_translation: "이제 영원하신 왕, 불멸하시고 보이지 않으시는 유일하신 하나님께 영원무궁토록 존귀와 영광이 있기를 원합니다. 아멘.",
      translation_notes: "네 가지 속성은 각각 하나님의 초월성을 다른 각도에서 조명하며, 구원의 위대함을 배가시킵니다."
    }
  },
  {
    reference: "1 Timothy 1:18",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "호칭 - 디모데를 향한 애정",
        original_text: "Timothy, my son",
        korean_translation: "디모데, 내 아들아",
        grammatical_explanation: "호격, 동격 구조로 친밀감 표현"
      },
      {
        sequence_order: 2,
        semantic_classification: "행동 - 명령을 주는 행위",
        original_text: "I am giving you this command",
        korean_translation: "나는 네게 이 명령을 줍니다",
        grammatical_explanation: "현재 진행형으로 지금 일어나는 행동 강조"
      },
      {
        sequence_order: 3,
        semantic_classification: "근거 - 과거 예언과의 일치",
        original_text: "in keeping with the prophecies once made about you",
        korean_translation: "전에 네게 대해 주어진 예언들에 따라",
        grammatical_explanation: "'in keeping with'는 일치를 나타냄, 수동태 'made about you'"
      },
      {
        sequence_order: 4,
        semantic_classification: "목적 - 전투를 잘 싸우기 위함",
        original_text: "so that by recalling them you may fight the battle well",
        korean_translation: "그것들을 기억함으로써 네가 그 싸움을 잘 싸우도록",
        grammatical_explanation: "목적절 'so that', 분사 'recalling'로 수단 표현, 'fight the battle well' 은유"
      }
    ],
    vocabulary: [
      {
        word: "command",
        ipa_pronunciation: "/kəˈmænd/",
        korean_pronunciation: "커맨드",
        definition_korean: "명령, 지시"
      },
      {
        word: "prophecies",
        ipa_pronunciation: "/ˈprɑːfəsiz/",
        korean_pronunciation: "프라퍼시즈",
        definition_korean: "예언들"
      },
      {
        word: "recalling",
        ipa_pronunciation: "/rɪˈkɔːlɪŋ/",
        korean_pronunciation: "리콜링",
        definition_korean: "기억하다, 떠올리다"
      },
      {
        word: "battle",
        ipa_pronunciation: "/ˈbætl/",
        korean_pronunciation: "배틀",
        definition_korean: "전투, 싸움"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 디모데를 '내 아들'로 부르며 영적 애정을 표현한 후, 과거에 디모데에게 주어진 예언들을 상기시킵니다. 이 예언들은 아마도 디모데가 사역에 부름받을 때 선지자들이나 장로들을 통해 주어진 것으로 보입니다(4:14 참조). 바울은 이 예언들을 기억함으로써 디모데가 '선한 싸움'을 잘 싸울 수 있다고 격려합니다. 목회 사역은 영적 전쟁으로 묘사되며, 과거의 하나님의 말씀이 현재 전투의 힘이 됩니다."
    },
    korean_translation: {
      natural_translation: "디모데, 내 아들아, 나는 전에 네게 대해 주어진 예언들에 따라 네게 이 명령을 줍니다. 그것들을 기억함으로써 네가 그 싸움을 잘 싸우도록 하기 위함입니다.",
      translation_notes: "'fight the battle well'은 목회 사역을 영적 전투로 비유하며, 충성스러운 수행을 촉구합니다."
    }
  },
  {
    reference: "1 Timothy 1:19",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "명령 - 두 가지를 붙잡을 것",
        original_text: "holding on to faith and a good conscience",
        korean_translation: "믿음과 선한 양심을 붙잡으십시오",
        grammatical_explanation: "분사 'holding on to', 두 가지 목적어를 병렬로 나열"
      },
      {
        sequence_order: 2,
        semantic_classification: "경고 - 일부의 거부와 결과",
        original_text: "which some have rejected and so have suffered shipwreck with regard to the faith",
        korean_translation: "어떤 이들은 이것들을 거부하여 믿음에 관하여 파선을 당했습니다",
        grammatical_explanation: "관계절, 'have rejected'와 'have suffered' 병렬, 'shipwreck' 은유"
      }
    ],
    vocabulary: [
      {
        word: "holding on",
        ipa_pronunciation: "/ˈhoʊldɪŋ ɑːn/",
        korean_pronunciation: "홀딩 안",
        definition_korean: "붙잡다, 견지하다"
      },
      {
        word: "conscience",
        ipa_pronunciation: "/ˈkɑːnʃəns/",
        korean_pronunciation: "칸션스",
        definition_korean: "양심"
      },
      {
        word: "rejected",
        ipa_pronunciation: "/rɪˈdʒektɪd/",
        korean_pronunciation: "리젝티드",
        definition_korean: "거부하다, 버리다"
      },
      {
        word: "shipwreck",
        ipa_pronunciation: "/ˈʃɪprek/",
        korean_pronunciation: "십렉",
        definition_korean: "파선, 난파"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "18절의 '선한 싸움'을 위해서는 믿음과 선한 양심이라는 두 가지 필수 요소가 필요합니다. 믿음은 교리적 확신을, 선한 양심은 도덕적 청렴성을 의미합니다. 바울은 일부가 이를 거부하여 '믿음의 파선'을 당했다고 경고합니다. 파선 은유는 완전한 영적 붕괴를 암시하며, 교리적 일탈과 도덕적 타협이 불가분의 관계임을 보여줍니다. 선한 양심 없이는 바른 교리도 지킬 수 없습니다."
    },
    korean_translation: {
      natural_translation: "믿음과 선한 양심을 붙잡으십시오. 어떤 이들은 이것들을 거부하여 믿음에 관하여 파선을 당했습니다.",
      translation_notes: "'shipwreck with regard to the faith'는 완전한 영적 붕괴의 심각성을 극적으로 표현합니다."
    }
  },
  {
    reference: "1 Timothy 1:20",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "구체적 예 - 파선당한 자들의 이름",
        original_text: "Among them are Hymenaeus and Alexander",
        korean_translation: "그들 중에 후메네오와 알렉산더가 있습니다",
        grammatical_explanation: "도치 구조 'Among them are', 두 이름을 병렬로 나열"
      },
      {
        sequence_order: 2,
        semantic_classification: "징계 조치 - 사탄에게 넘김",
        original_text: "whom I have handed over to Satan",
        korean_translation: "내가 그들을 사탄에게 넘겼습니다",
        grammatical_explanation: "관계절, 완료 시제 'have handed over', 강력한 징계 표현"
      },
      {
        sequence_order: 3,
        semantic_classification: "목적 - 교정적 징계",
        original_text: "to be taught not to blaspheme",
        korean_translation: "신성 모독하지 않도록 가르침을 받게 하려 함입니다",
        grammatical_explanation: "부정사구로 목적 표현, 수동태 'to be taught', 부정 부정사 'not to blaspheme'"
      }
    ],
    vocabulary: [
      {
        word: "handed over",
        ipa_pronunciation: "/ˈhændɪd ˈoʊvər/",
        korean_pronunciation: "핸디드 오버",
        definition_korean: "넘기다, 인도하다"
      },
      {
        word: "Satan",
        ipa_pronunciation: "/ˈseɪtn/",
        korean_pronunciation: "세이튼",
        definition_korean: "사탄, 마귀"
      },
      {
        word: "blaspheme",
        ipa_pronunciation: "/blæsˈfiːm/",
        korean_pronunciation: "블래스핌",
        definition_korean: "신성 모독하다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 19절의 일반적 경고를 구체적 사례로 뒷받침합니다. 후메네오(딤후 2:17에서도 언급)와 알렉산더(딤후 4:14의 동일인 가능성)는 실제로 믿음의 파선을 당한 자들입니다. '사탄에게 넘긴다'는 표현은 교회에서 출교하여 세상의 영역(사탄의 지배 아래)에 두는 것을 의미합니다(고전 5:5 참조). 그러나 이는 파멸이 아니라 교정적 징계로서, '신성 모독하지 않도록 가르침을 받게 하려는' 회복의 목적이 있습니다. 교회 징계는 사랑의 표현이며 구원의 수단입니다."
    },
    korean_translation: {
      natural_translation: "그들 중에 후메네오와 알렉산더가 있는데, 내가 그들을 사탄에게 넘겨서 신성 모독하지 않도록 가르침을 받게 했습니다.",
      translation_notes: "'handed over to Satan'은 출교를 의미하지만, 목적은 회복이며 이는 교정적 사랑을 보여줍니다."
    }
  }
]

async function main() {
  console.log('1 Timothy Chapter 1 분석 데이터를 저장합니다...')
  console.log(`총 ${analysesData.length}개 구절 저장 시작\n`)

  for (const data of analysesData) {
    await saveAnalysisToDb(data)
  }

  console.log('\n모든 구절 저장 완료!')
}

main()
