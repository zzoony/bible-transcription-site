import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

const analyses: AnalysisData[] = [
  // 1 Thessalonians 4:1
  {
    reference: '1 Thessalonians 4:1',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '호칭과 과거 지시',
        original_text: 'As for other matters, brothers and sisters, we instructed you how to live in order to please God',
        korean_translation: '형제자매 여러분, 우리가 하나님을 기쁘시게 하기 위해 어떻게 살아야 하는지 여러분께 가르쳤습니다',
        grammatical_explanation: '종속절 - 과거 시제 동사 instructed와 목적을 나타내는 in order to 구문'
      },
      {
        sequence_order: 2,
        semantic_classification: '현재 상태 확인',
        original_text: 'as in fact you are living',
        korean_translation: '실제로 여러분이 그렇게 살고 있습니다',
        grammatical_explanation: '삽입절 - 현재진행형으로 청중의 순종을 확인'
      },
      {
        sequence_order: 3,
        semantic_classification: '권면과 격려',
        original_text: 'Now we ask you and urge you in the Lord Jesus to do this more and more',
        korean_translation: '이제 우리는 주 예수님 안에서 여러분께 간청하고 권면합니다, 이것을 더욱 더 행하라고',
        grammatical_explanation: '주절 - 두 개의 동사 ask와 urge가 병렬, to부정사로 요청 내용 명시'
      }
    ],
    vocabulary: [
      {
        word: 'instructed',
        ipa_pronunciation: '/ɪnˈstrʌktɪd/',
        korean_pronunciation: '인스트럭티드',
        part_of_speech: '동사 (과거형)',
        definition_korean: '가르쳤다, 지시했다',
        usage_note: '권위 있는 가르침을 의미'
      },
      {
        word: 'please',
        ipa_pronunciation: '/pliːz/',
        korean_pronunciation: '플리즈',
        part_of_speech: '동사',
        definition_korean: '기쁘게 하다, 만족시키다',
        usage_note: '하나님을 기쁘시게 하는 삶의 목적'
      },
      {
        word: 'urge',
        ipa_pronunciation: '/ɜːrdʒ/',
        korean_pronunciation: '어지',
        part_of_speech: '동사',
        definition_korean: '강권하다, 재촉하다',
        usage_note: 'ask보다 더 강한 요청'
      },
      {
        word: 'more and more',
        ipa_pronunciation: '/mɔːr ənd mɔːr/',
        korean_pronunciation: '모어 앤 모어',
        part_of_speech: '부사구',
        definition_korean: '더욱 더, 점점 더',
        usage_note: '지속적인 영적 성장을 강조'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 데살로니가 교회에게 이전에 가르쳤던 거룩한 삶의 원리를 상기시킵니다. "다른 문제들에 관하여"라는 표현은 새로운 주제로의 전환을 나타냅니다. 바울은 이미 순종하고 있는 그들을 칭찬하면서도, "더욱 더"라는 표현을 통해 영적 성장이 계속되어야 함을 강조합니다. "주 예수님 안에서"라는 구절은 이 권면이 단순히 인간적 조언이 아니라 그리스도의 권위에 기반함을 나타냅니다. 이는 신앙 생활의 점진적 성화 과정을 가르치는 중요한 구절입니다.',
      cross_references: ['1 Thessalonians 2:12', 'Colossians 1:10', 'Philippians 1:27']
    },
    korean_translation: {
      natural_translation: '마지막으로 형제자매 여러분, 우리가 여러분께 하나님을 기쁘시게 하는 삶의 방법을 가르쳤고 여러분이 실제로 그렇게 살고 있습니다. 이제 주 예수님의 이름으로 여러분께 간청하고 권면합니다. 더욱 더 그렇게 사십시오.',
      translation_notes: 'As for other matters를 "마지막으로"로 의역하여 주제 전환을 자연스럽게 표현'
    },
    special_explanation: {
      explanation_type: '신학적 강조점',
      content: '이 구절은 기독교 윤리의 핵심 원리를 담고 있습니다: (1) 하나님을 기쁘시게 하는 것이 삶의 목적, (2) 이미 순종하고 있어도 계속 성장해야 함, (3) 영적 권면은 그리스도의 권위에 기반. "더욱 더"라는 표현은 성화가 단번에 완성되지 않고 평생에 걸친 과정임을 보여줍니다.',
      examples: ['현재의 선한 행실에 만족하지 않고 계속 성장하는 태도', '과거의 가르침을 기억하고 실천하는 순종']
    }
  },

  // 1 Thessalonians 4:2
  {
    reference: '1 Thessalonians 4:2',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '청중의 지식 확인',
        original_text: 'For you know what instructions we gave you',
        korean_translation: '우리가 여러분께 준 교훈들을 여러분이 알고 있습니다',
        grammatical_explanation: '주절 - know가 주동사, what절이 목적어'
      },
      {
        sequence_order: 2,
        semantic_classification: '권위의 출처',
        original_text: 'by the authority of the Lord Jesus',
        korean_translation: '주 예수님의 권위로',
        grammatical_explanation: '전치사구 - 교훈의 권위 근거를 명시'
      }
    ],
    vocabulary: [
      {
        word: 'instructions',
        ipa_pronunciation: '/ɪnˈstrʌkʃənz/',
        korean_pronunciation: '인스트럭션스',
        part_of_speech: '명사 (복수)',
        definition_korean: '교훈, 지시사항',
        usage_note: '구체적인 삶의 원칙들'
      },
      {
        word: 'authority',
        ipa_pronunciation: '/əˈθɔːrəti/',
        korean_pronunciation: '어쏘리티',
        part_of_speech: '명사',
        definition_korean: '권위, 권한',
        usage_note: '예수 그리스도의 신적 권위'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 자신이 전한 교훈들이 단순히 인간적 조언이 아니라 주 예수 그리스도의 권위에 기반함을 강조합니다. "여러분이 알고 있습니다"라는 표현은 데살로니가 교인들이 이미 이 교훈을 받았고 그 중요성을 인지하고 있음을 상기시킵니다. 이는 사도적 가르침의 신적 권위를 확립하는 중요한 신학적 주장입니다. 초대교회에서 사도들의 가르침은 그리스도 자신의 가르침과 동등한 권위를 가졌습니다.',
      cross_references: ['Matthew 28:18-20', '1 Corinthians 14:37', '2 Thessalonians 3:6']
    },
    korean_translation: {
      natural_translation: '우리가 주 예수님의 권위로 여러분께 준 교훈들을 여러분이 알고 있기 때문입니다.',
      translation_notes: 'For를 "~이기 때문입니다"로 번역하여 1절과의 논리적 연결 명확히 표현'
    },
    special_explanation: {
      explanation_type: '권위 구조',
      content: '이 구절은 신약 교회의 권위 구조를 보여줍니다: 그리스도 → 사도들 → 교회. 바울의 교훈은 개인적 의견이 아니라 그리스도로부터 받은 계시입니다. "by the authority of"는 대리 권한을 나타내며, 사도들이 그리스도의 권위를 위임받았음을 의미합니다.',
      examples: ['사도적 가르침에 대한 순종은 곧 그리스도께 대한 순종', '교회의 윤리적 표준은 그리스도의 권위에 기반']
    }
  },

  // 1 Thessalonians 4:3
  {
    reference: '1 Thessalonians 4:3',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '하나님의 뜻 선언',
        original_text: 'It is God\'s will that you should be sanctified',
        korean_translation: '여러분이 거룩해지는 것이 하나님의 뜻입니다',
        grammatical_explanation: '주절 - It이 가주어, that절이 진주어, 당위를 나타내는 should'
      },
      {
        sequence_order: 2,
        semantic_classification: '구체적 적용 - 금지',
        original_text: 'that you should avoid sexual immorality',
        korean_translation: '여러분이 성적 부도덕을 피해야 합니다',
        grammatical_explanation: '동격절 - 성화의 구체적 의미를 설명, avoid는 동사원형'
      }
    ],
    vocabulary: [
      {
        word: 'sanctified',
        ipa_pronunciation: '/ˈsæŋktɪfaɪd/',
        korean_pronunciation: '생크티파이드',
        part_of_speech: '동사 (과거분사)',
        definition_korean: '거룩하게 되다, 성화되다',
        usage_note: '도덕적, 영적으로 구별됨'
      },
      {
        word: 'avoid',
        ipa_pronunciation: '/əˈvɔɪd/',
        korean_pronunciation: '어보이드',
        part_of_speech: '동사',
        definition_korean: '피하다, 멀리하다',
        usage_note: '의도적으로 거리를 둠'
      },
      {
        word: 'sexual immorality',
        ipa_pronunciation: '/ˈsɛkʃuəl ˌɪməˈræləti/',
        korean_pronunciation: '섹슈얼 이머랄러티',
        part_of_speech: '명사구',
        definition_korean: '성적 부도덕',
        usage_note: '그리스어 porneia, 모든 형태의 성적 죄'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 성화의 본질을 설명하며, 그것이 단순한 제안이 아니라 하나님의 뜻임을 명확히 합니다. 1세기 그리스-로마 문화에서는 성적 방종이 일상적이었으나, 기독교는 근본적으로 다른 윤리 기준을 제시했습니다. "성적 부도덕"으로 번역된 그리스어 porneia는 결혼 밖의 모든 성적 관계를 포함하는 포괄적 용어입니다. 이는 단순히 외적 행동뿐만 아니라 내적 태도까지 포함하는 거룩함의 실천적 표현입니다.',
      cross_references: ['1 Corinthians 6:18-20', 'Ephesians 5:3', 'Hebrews 13:4']
    },
    korean_translation: {
      natural_translation: '하나님의 뜻은 여러분이 거룩해지는 것입니다. 곧 성적 부도덕을 멀리하는 것입니다.',
      translation_notes: '두 that절의 관계를 "곧"으로 연결하여 성화의 구체적 적용을 명확히 표현'
    },
    special_explanation: {
      explanation_type: '문화적 대조',
      content: '1세기 고린도와 데살로니가는 성적 방종으로 악명 높았습니다. 이교 종교들은 종종 성적 의식을 포함했고, 혼외 성관계가 사회적으로 용인되었습니다. 기독교의 성윤리는 당시 문화와 급진적으로 달랐으며, 이는 신자들이 세상과 구별된 삶을 살아야 함을 보여줍니다. 성화는 추상적 개념이 아니라 일상의 구체적 선택에서 나타납니다.',
      examples: ['문화적 규범을 따르지 않고 하나님의 기준을 따르는 용기', '거룩함이 성적 순결을 포함하는 전인적 개념임']
    }
  },

  // 1 Thessalonians 4:4
  {
    reference: '1 Thessalonians 4:4',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '성화의 실천적 방법',
        original_text: 'that each of you should learn to control your own body',
        korean_translation: '여러분 각자가 자기 몸을 다스리는 법을 배워야 합니다',
        grammatical_explanation: 'that절 계속 - learn to 구문, control이 목적어를 취하는 타동사'
      },
      {
        sequence_order: 2,
        semantic_classification: '방법의 특성',
        original_text: 'in a way that is holy and honorable',
        korean_translation: '거룩하고 존귀한 방식으로',
        grammatical_explanation: '전치사구 - 관계절 that is로 방식의 성격 설명'
      }
    ],
    vocabulary: [
      {
        word: 'learn',
        ipa_pronunciation: '/lɜːrn/',
        korean_pronunciation: '런',
        part_of_speech: '동사',
        definition_korean: '배우다, 익히다',
        usage_note: '지속적인 훈련 과정을 암시'
      },
      {
        word: 'control',
        ipa_pronunciation: '/kənˈtroʊl/',
        korean_pronunciation: '컨트롤',
        part_of_speech: '동사',
        definition_korean: '통제하다, 다스리다',
        usage_note: '자기 절제와 관리'
      },
      {
        word: 'holy',
        ipa_pronunciation: '/ˈhoʊli/',
        korean_pronunciation: '홀리',
        part_of_speech: '형용사',
        definition_korean: '거룩한, 성스러운',
        usage_note: '하나님께 구별된'
      },
      {
        word: 'honorable',
        ipa_pronunciation: '/ˈɑːnərəbəl/',
        korean_pronunciation: '아너러블',
        part_of_speech: '형용사',
        definition_korean: '존귀한, 고상한',
        usage_note: '존중받을 만한 품위'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 성적 순결이 자동으로 이루어지는 것이 아니라 배우고 훈련해야 할 기술임을 가르칩니다. "배워야 합니다"는 점진적 과정을 나타내며, 즉각적 완성이 아닌 지속적 성장을 의미합니다. "자기 몸을 다스리다"는 표현은 자기 절제의 중요성을 강조합니다. "거룩하고 존귀한"이라는 두 형용사는 하나님과의 관계(거룩)와 사람들 앞에서의 품위(존귀) 양면을 모두 다룹니다. 이는 기독교 윤리가 신앙과 삶, 영적 영역과 육체적 영역을 통합함을 보여줍니다.',
      cross_references: ['1 Corinthians 9:27', 'Romans 6:12-13', '1 Peter 1:15-16']
    },
    korean_translation: {
      natural_translation: '각 사람이 거룩하고 존귀한 방식으로 자기 몸을 다스리는 법을 배워야 합니다.',
      translation_notes: '"your own body"를 "자기 몸"으로 번역하여 개인적 책임을 강조'
    },
    special_explanation: {
      explanation_type: '자기 절제의 신학',
      content: '이 구절은 영지주의적 육체 경시도, 방종적 자유주의도 아닌 균형 잡힌 기독교 윤리를 제시합니다. 몸은 악한 것이 아니라 거룩하게 사용되어야 할 선물입니다. "배워야 합니다"는 자기 절제가 타고난 것이 아니라 훈련을 통해 개발되는 덕목임을 보여줍니다. 성령의 도우심 안에서 이루어지는 적극적 자기 관리입니다.',
      examples: ['습관과 훈련을 통한 점진적 성화', '영적인 것과 육체적인 것의 통합적 거룩함']
    }
  },

  // 1 Thessalonians 4:5
  {
    reference: '1 Thessalonians 4:5',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '부정적 대조 - 금지',
        original_text: 'not in passionate lust like the pagans',
        korean_translation: '이교도들처럼 정욕에 사로잡혀서는 안 됩니다',
        grammatical_explanation: '부정 전치사구 - not in으로 시작, like로 비교 대상 제시'
      },
      {
        sequence_order: 2,
        semantic_classification: '이유 설명',
        original_text: 'who do not know God',
        korean_translation: '그들은 하나님을 알지 못합니다',
        grammatical_explanation: '관계절 - pagans를 수식, 행동의 근본 원인 설명'
      }
    ],
    vocabulary: [
      {
        word: 'passionate',
        ipa_pronunciation: '/ˈpæʃənət/',
        korean_pronunciation: '패셔닛',
        part_of_speech: '형용사',
        definition_korean: '열정적인, 격렬한',
        usage_note: '통제되지 않은 강렬한 감정'
      },
      {
        word: 'lust',
        ipa_pronunciation: '/lʌst/',
        korean_pronunciation: '러스트',
        part_of_speech: '명사',
        definition_korean: '정욕, 욕망',
        usage_note: '육체적 욕망, 특히 성적 욕구'
      },
      {
        word: 'pagans',
        ipa_pronunciation: '/ˈpeɪɡənz/',
        korean_pronunciation: '페이건스',
        part_of_speech: '명사 (복수)',
        definition_korean: '이교도, 이방인',
        usage_note: '하나님을 알지 못하는 사람들'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 신자들의 성적 윤리를 이교도들과 명확히 구별합니다. "정욕"으로 번역된 그리스어는 통제되지 않은 강렬한 욕망을 의미합니다. 중요한 것은 이러한 행동의 뿌리가 "하나님을 알지 못함"에 있다는 통찰입니다. 하나님을 아는 지식은 단순한 정보가 아니라 관계적 앎이며, 이것이 삶의 방식을 근본적으로 변화시킵니다. 1세기 이교 세계에서는 성적 욕망의 즉각적 충족이 자연스럽게 여겨졌으나, 기독교는 다른 기준을 제시했습니다.',
      cross_references: ['Romans 1:24-27', 'Ephesians 4:17-19', '1 Peter 4:3-4']
    },
    korean_translation: {
      natural_translation: '하나님을 알지 못하는 이교도들처럼 정욕에 사로잡혀서는 안 됩니다.',
      translation_notes: 'passionate lust를 "정욕에 사로잡혀"로 의역하여 통제되지 않은 욕망의 지배를 표현'
    },
    special_explanation: {
      explanation_type: '앎과 행동의 연결',
      content: '이 구절은 신학과 윤리의 불가분한 관계를 보여줍니다. 부도덕한 행동의 근본 원인은 하나님을 알지 못하는 것입니다. 반대로, 하나님을 참되게 아는 것은 자연스럽게 거룩한 삶으로 이어집니다. "아는 것"은 히브리적 개념으로 단순한 지적 인식이 아니라 인격적 관계와 경험을 의미합니다. 이는 복음이 단순한 윤리 강령이 아니라 관계의 변화를 통한 삶의 변화임을 보여줍니다.',
      examples: ['하나님을 아는 것이 윤리적 행동의 기초', '신학적 무지가 도덕적 타락으로 이어지는 연결고리']
    }
  },

  // 1 Thessalonians 4:6
  {
    reference: '1 Thessalonians 4:6',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '금지 명령',
        original_text: 'and that in this matter no one should wrong or take advantage of a brother or sister',
        korean_translation: '이 일에 있어서 아무도 형제자매를 해치거나 이용해서는 안 됩니다',
        grammatical_explanation: 'that절 계속 - 이중 부정 구조(no one should), or로 두 동사 병렬'
      },
      {
        sequence_order: 2,
        semantic_classification: '경고 - 심판 선언',
        original_text: 'The Lord will punish all those who commit such sins',
        korean_translation: '주님께서 이런 죄를 범하는 모든 사람을 심판하실 것입니다',
        grammatical_explanation: '주절 - 미래 시제 will punish, 관계대명사 who절로 대상 한정'
      },
      {
        sequence_order: 3,
        semantic_classification: '과거 경고 상기',
        original_text: 'as we told you and warned you before',
        korean_translation: '우리가 전에 여러분께 말하고 경고했던 대로',
        grammatical_explanation: '종속절 - as 접속사, 두 과거 동사 told와 warned 병렬'
      }
    ],
    vocabulary: [
      {
        word: 'wrong',
        ipa_pronunciation: '/rɔːŋ/',
        korean_pronunciation: '롱',
        part_of_speech: '동사',
        definition_korean: '해치다, 부당하게 대하다',
        usage_note: '불의한 행동으로 피해를 입힘'
      },
      {
        word: 'take advantage',
        ipa_pronunciation: '/teɪk ədˈvæntɪdʒ/',
        korean_pronunciation: '테이크 어드밴티지',
        part_of_speech: '동사구',
        definition_korean: '이용하다, 착취하다',
        usage_note: '타인의 약점을 악용함'
      },
      {
        word: 'punish',
        ipa_pronunciation: '/ˈpʌnɪʃ/',
        korean_pronunciation: '퍼니쉬',
        part_of_speech: '동사',
        definition_korean: '처벌하다, 심판하다',
        usage_note: '죄에 대한 응징'
      },
      {
        word: 'warned',
        ipa_pronunciation: '/wɔːrnd/',
        korean_pronunciation: '원드',
        part_of_speech: '동사 (과거형)',
        definition_korean: '경고했다',
        usage_note: '위험을 미리 알림'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 성적 죄의 사회적 차원을 다룹니다. 성적 부도덕은 개인의 문제만이 아니라 다른 사람, 특히 믿음의 공동체 구성원을 해치는 행위입니다. "이 일에 있어서"는 성적 영역을 가리키며, "해치다"와 "이용하다"는 성적 죄가 타인에게 미치는 파괴적 영향을 나타냅니다. 중요한 것은 주님께서 친히 심판자가 되신다는 경고입니다. 이는 새로운 가르침이 아니라 이미 전했던 내용의 재확인입니다. 초대교회는 도덕적 해이에 대해 명확한 경고를 전했으며, 이는 사랑과 모순되지 않는 필수적 요소였습니다.',
      cross_references: ['Hebrews 13:4', '1 Corinthians 6:9-10', 'Ephesians 5:5-6']
    },
    korean_translation: {
      natural_translation: '이 일에 있어서 누구든지 형제자매를 해치거나 이용해서는 안 됩니다. 주님께서 이런 모든 죄를 범하는 자들을 심판하실 것입니다. 우리가 전에 분명히 말하고 경고했던 대로입니다.',
      translation_notes: 'commit such sins를 "이런 모든 죄를 범하는"으로 확대하여 포괄적 경고를 명확히 표현'
    },
    special_explanation: {
      explanation_type: '공동체적 차원의 성윤리',
      content: '이 구절은 성적 죄가 단순히 개인적 선택의 문제가 아니라 타인, 특히 믿음의 형제자매에게 피해를 주는 사회적 죄임을 강조합니다. "해치다"와 "이용하다"는 성적 죄의 파괴적 본질을 폭로합니다. 또한 주님의 심판이라는 종말론적 경고는 도덕적 책임을 강화합니다. 바울은 사랑과 은혜를 전하면서도 죄의 결과에 대한 명확한 경고를 주저하지 않았습니다.',
      examples: ['간음이 배우자와 가정을 파괴하는 공동체적 죄', '성적 착취가 형제자매를 상품화하는 반(反)공동체적 행위']
    }
  },

  // 1 Thessalonians 4:7
  {
    reference: '1 Thessalonians 4:7',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '부정적 목적 - 아님',
        original_text: 'For God did not call us to be impure',
        korean_translation: '하나님께서 우리를 부정하게 되라고 부르신 것이 아닙니다',
        grammatical_explanation: '부정문 - did not call, to부정사로 목적 표현'
      },
      {
        sequence_order: 2,
        semantic_classification: '긍정적 목적 - 대조',
        original_text: 'but to live a holy life',
        korean_translation: '거룩한 삶을 살라고 부르셨습니다',
        grammatical_explanation: '대조절 - but으로 연결, to부정사로 진정한 목적 제시'
      }
    ],
    vocabulary: [
      {
        word: 'call',
        ipa_pronunciation: '/kɔːl/',
        korean_pronunciation: '콜',
        part_of_speech: '동사',
        definition_korean: '부르다, 소명하다',
        usage_note: '하나님의 주권적 부르심'
      },
      {
        word: 'impure',
        ipa_pronunciation: '/ɪmˈpjʊr/',
        korean_pronunciation: '임퓨어',
        part_of_speech: '형용사',
        definition_korean: '부정한, 더러운',
        usage_note: '도덕적, 영적 오염 상태'
      },
      {
        word: 'holy life',
        ipa_pronunciation: '/ˈhoʊli laɪf/',
        korean_pronunciation: '홀리 라이프',
        part_of_speech: '명사구',
        definition_korean: '거룩한 삶',
        usage_note: '하나님께 구별된 전인적 삶'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 기독교 윤리의 신학적 기초를 제시합니다. 거룩한 삶은 단순한 도덕적 노력이 아니라 하나님의 부르심에 대한 응답입니다. "부르다"(call)는 신약에서 중요한 신학적 용어로, 하나님의 주권적 선택과 소명을 의미합니다. 부정과 긍정의 대조 구조(not... but)는 하나님의 뜻을 명확히 합니다. 부정함은 하나님의 부르심과 양립할 수 없습니다. "거룩한 삶"(holiness)은 단순히 죄를 피하는 소극적 상태가 아니라 하나님을 닮아가는 적극적 과정입니다. 이는 기독교 윤리가 율법주의가 아니라 관계와 정체성에 기반함을 보여줍니다.',
      cross_references: ['1 Peter 1:15-16', '2 Timothy 1:9', 'Ephesians 1:4']
    },
    korean_translation: {
      natural_translation: '하나님께서 우리를 부르신 것은 부정함을 위해서가 아니라 거룩한 삶을 살라고 하신 것입니다.',
      translation_notes: 'not... but 구조를 "~을 위해서가 아니라 ~을 위해"로 번역하여 목적의 대조를 명확히 표현'
    },
    special_explanation: {
      explanation_type: '소명 신학',
      content: '이 구절은 기독교 윤리의 근거가 외부적 율법이 아니라 하나님의 부르심임을 보여줍니다. "부르심"은 단순히 구원의 초대가 아니라 특정한 삶의 방식을 향한 소명입니다. 하나님의 본성(거룩)이 우리의 삶의 방식(거룩한 삶)을 결정합니다. 이는 "너희는 거룩하라. 나 여호와 너희 하나님이 거룩함이니라"(레위기 19:2)는 구약의 명령을 신약적으로 재해석한 것입니다.',
      examples: ['정체성이 행동을 결정함 - 우리가 거룩한 자로 부름받았기에 거룩하게 삶', '윤리가 신학에 기초함 - 하나님의 본성이 우리 삶의 표준']
    }
  },

  // 1 Thessalonians 4:8
  {
    reference: '1 Thessalonians 4:8',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '결론적 경고',
        original_text: 'Therefore, anyone who rejects this instruction does not reject a human being but God',
        korean_translation: '그러므로 이 교훈을 거부하는 사람은 사람을 거부하는 것이 아니라 하나님을 거부하는 것입니다',
        grammatical_explanation: '주절 - Therefore로 논리적 결론, not... but 대조 구조'
      },
      {
        sequence_order: 2,
        semantic_classification: '하나님의 특성 설명',
        original_text: 'the very God who gives you his Holy Spirit',
        korean_translation: '바로 그분은 여러분께 성령을 주시는 하나님입니다',
        grammatical_explanation: '동격 명사구 - 관계절 who로 하나님의 행위 설명'
      }
    ],
    vocabulary: [
      {
        word: 'rejects',
        ipa_pronunciation: '/rɪˈdʒɛkts/',
        korean_pronunciation: '리젝츠',
        part_of_speech: '동사',
        definition_korean: '거부하다, 배척하다',
        usage_note: '의도적으로 받아들이기를 거절함'
      },
      {
        word: 'instruction',
        ipa_pronunciation: '/ɪnˈstrʌkʃən/',
        korean_pronunciation: '인스트럭션',
        part_of_speech: '명사',
        definition_korean: '교훈, 가르침',
        usage_note: '앞서 제시한 거룩한 삶의 원칙들'
      },
      {
        word: 'the very God',
        ipa_pronunciation: '/ðə ˈvɛri ɡɑːd/',
        korean_pronunciation: '더 베리 갓',
        part_of_speech: '명사구',
        definition_korean: '바로 그 하나님',
        usage_note: 'very는 강조 부사로 동일성 강조'
      },
      {
        word: 'Holy Spirit',
        ipa_pronunciation: '/ˈhoʊli ˈspɪrɪt/',
        korean_pronunciation: '홀리 스피릿',
        part_of_speech: '고유명사',
        definition_korean: '성령',
        usage_note: '하나님의 영, 제3위 하나님'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 성적 윤리에 관한 가르침을 강력한 경고로 마무리합니다. 이 교훈을 거부하는 것은 단순히 사도의 권위를 무시하는 것이 아니라 하나님 자신을 거부하는 것입니다. 이는 2절에서 언급한 "주 예수님의 권위"를 재확인합니다. 특히 중요한 것은 성령을 주시는 하나님에 대한 언급입니다. 성령은 거룩한 삶을 가능하게 하는 능력의 원천입니다. 따라서 거룩한 삶의 요구는 불가능한 명령이 아니라 성령의 도우심 안에서 실현 가능한 것입니다. "주시는"(gives)의 현재 시제는 지속적인 하나님의 은혜를 나타냅니다.',
      cross_references: ['Luke 10:16', 'John 14:26', 'Romans 5:5']
    },
    korean_translation: {
      natural_translation: '그러므로 이 교훈을 거부하는 사람은 사람을 거부하는 것이 아니라 하나님을 거부하는 것입니다. 바로 그 하나님께서 여러분에게 성령을 주십니다.',
      translation_notes: 'the very God을 "바로 그 하나님"으로 번역하여 동일성 강조, gives의 현재 시제를 "주십니다"로 표현'
    },
    special_explanation: {
      explanation_type: '삼위일체적 성화',
      content: '이 구절은 성화의 삼위일체적 차원을 보여줍니다: 하나님 아버지의 부르심(7절), 주 예수님의 권위(2절), 성령의 내주하심(8절). 성령을 주심은 두 가지를 의미합니다: (1) 거룩한 삶을 위한 능력 제공, (2) 하나님과의 관계 확립. 성령의 내주는 신자가 더 이상 혼자가 아니며, 거룩한 삶이 인간적 노력만이 아니라 신적 능력으로 가능함을 보장합니다. 이는 은혜와 책임의 균형을 보여줍니다.',
      examples: ['성령의 능력으로 가능한 거룩한 삶', '하나님을 거부함의 심각성 - 성령을 주신 분을 거역함']
    }
  },

  // 1 Thessalonians 4:9
  {
    reference: '1 Thessalonians 4:9',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '새로운 주제 전환',
        original_text: 'Now about your love for one another we do not need to write to you',
        korean_translation: '서로 사랑하는 것에 관해서는 우리가 여러분께 쓸 필요가 없습니다',
        grammatical_explanation: '주절 - about으로 주제 제시, need to 구문의 부정형'
      },
      {
        sequence_order: 2,
        semantic_classification: '이유 설명',
        original_text: 'for you yourselves have been taught by God to love each other',
        korean_translation: '여러분 스스로가 서로 사랑하라고 하나님께 가르침을 받았기 때문입니다',
        grammatical_explanation: '종속절 - for 접속사, 수동태 have been taught, to부정사로 내용 명시'
      }
    ],
    vocabulary: [
      {
        word: 'love for one another',
        ipa_pronunciation: '/lʌv fɔːr wʌn əˈnʌðər/',
        korean_pronunciation: '러브 포 원 어나더',
        part_of_speech: '명사구',
        definition_korean: '서로 사랑함',
        usage_note: '그리스어 philadelphia - 형제 사랑'
      },
      {
        word: 'taught',
        ipa_pronunciation: '/tɔːt/',
        korean_pronunciation: '톳',
        part_of_speech: '동사 (과거분사)',
        definition_korean: '가르침을 받다',
        usage_note: '수동태로 하나님의 주도적 가르침'
      },
      {
        word: 'by God',
        ipa_pronunciation: '/baɪ ɡɑːd/',
        korean_pronunciation: '바이 갓',
        part_of_speech: '전치사구',
        definition_korean: '하나님에 의해',
        usage_note: '가르침의 궁극적 출처'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 성적 윤리에서 형제 사랑으로 주제를 전환합니다. "Now about"는 편지에서 새로운 주제를 도입하는 전형적 표현입니다. "서로 사랑함"으로 번역된 그리스어 philadelphia는 가족적 애정을 나타내며, 교회 공동체의 본질을 보여줍니다. 놀라운 것은 바울이 이에 대해 쓸 필요가 없다고 말하는 이유입니다: 데살로니가 교인들이 이미 "하나님께 가르침을 받았기" 때문입니다. 이는 성령의 내적 가르침을 가리키며, 외적 교훈 이전에 하나님께서 친히 그들의 마음에 사랑을 심으셨음을 의미합니다. 이는 새 언약의 약속(예레미야 31:33-34)이 실현됨을 보여줍니다.',
      cross_references: ['John 13:34-35', 'Jeremiah 31:33-34', '1 John 4:7-8']
    },
    korean_translation: {
      natural_translation: '형제 사랑에 관해서는 우리가 여러분께 쓸 필요가 없습니다. 여러분 스스로가 서로 사랑하라고 하나님께 직접 가르침을 받았기 때문입니다.',
      translation_notes: 'taught by God을 "하나님께 직접 가르침을 받았"으로 강조하여 성령의 내적 가르침을 명확히 표현'
    },
    special_explanation: {
      explanation_type: '하나님께서 가르치심',
      content: '이 구절은 기독교 윤리의 독특한 특징을 보여줍니다: 단순히 외적 규칙이 아니라 성령을 통한 내적 변화. "하나님께 가르침을 받다"(theodidaktoi - God-taught)는 성령의 내주하심으로 인한 자연스러운 사랑의 열매를 의미합니다. 이는 율법을 마음에 새기시겠다는 새 언약의 약속이 성취됨을 보여줍니다. 외적 명령이 아니라 내적 성향의 변화로 이루어지는 사랑입니다.',
      examples: ['성령의 내적 가르침을 통한 자연스러운 사랑의 실천', '새 언약의 약속 - 마음에 새겨진 하나님의 법']
    }
  },

  // 1 Thessalonians 4:10
  {
    reference: '1 Thessalonians 4:10',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '실제 실천 확인',
        original_text: 'And in fact, you do love all of God\'s family throughout Macedonia',
        korean_translation: '실제로 여러분은 마게도냐 전역에 있는 모든 하나님의 가족을 사랑하고 있습니다',
        grammatical_explanation: '주절 - do로 동사 강조, throughout으로 범위 명시'
      },
      {
        sequence_order: 2,
        semantic_classification: '지속적 권면',
        original_text: 'Yet we urge you, brothers and sisters, to do so more and more',
        korean_translation: '그러나 형제자매 여러분, 우리는 여러분께 더욱 더 그렇게 하라고 권면합니다',
        grammatical_explanation: '대조절 - Yet으로 시작, to부정사로 권면 내용, more and more로 점진성 강조'
      }
    ],
    vocabulary: [
      {
        word: 'in fact',
        ipa_pronunciation: '/ɪn fækt/',
        korean_pronunciation: '인 팩트',
        part_of_speech: '부사구',
        definition_korean: '실제로, 사실',
        usage_note: '이론이 아닌 현실임을 강조'
      },
      {
        word: 'God\'s family',
        ipa_pronunciation: '/ɡɑːdz ˈfæməli/',
        korean_pronunciation: '갓츠 패멀리',
        part_of_speech: '명사구',
        definition_korean: '하나님의 가족',
        usage_note: '모든 신자들의 공동체'
      },
      {
        word: 'throughout',
        ipa_pronunciation: '/θruːˈaʊt/',
        korean_pronunciation: '쓰루아웃',
        part_of_speech: '전치사',
        definition_korean: '~전역에, ~도처에',
        usage_note: '지역적 광범위함'
      },
      {
        word: 'Macedonia',
        ipa_pronunciation: '/ˌmæsəˈdoʊniə/',
        korean_pronunciation: '마세도니아',
        part_of_speech: '고유명사',
        definition_korean: '마게도냐',
        usage_note: '그리스 북부 지방, 빌립보, 베뢰아 등 포함'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 데살로니가 교회의 사랑의 실천을 구체적으로 확인합니다. 그들의 사랑은 단지 자기 교회 안에 국한되지 않고 마게도냐 전역의 모든 신자들에게 확장되었습니다. 이는 놀라운 사실입니다. 왜냐하면 데살로니가 교회는 비교적 신생 교회였고, 박해를 받고 있었기 때문입니다(1:6). 그럼에도 그들은 다른 지역의 신자들을 돌보았습니다. "하나님의 가족"이라는 표현은 교회의 본질을 잘 나타냅니다. 그러나 바울은 칭찬에 만족하지 않고 "더욱 더"라는 권면을 덧붙입니다. 이는 1절과 동일한 패턴으로, 현재의 선함에 안주하지 않고 계속 성장해야 함을 강조합니다.',
      cross_references: ['2 Corinthians 8:1-5', 'Philippians 4:15-16', '1 Thessalonians 1:7-8']
    },
    korean_translation: {
      natural_translation: '실제로 여러분은 마게도냐 전역에 있는 모든 형제자매들을 사랑하고 있습니다. 그러나 우리는 여러분께 권면합니다. 형제자매 여러분, 더욱 더 그렇게 하십시오.',
      translation_notes: 'God\'s family를 "형제자매들"로 번역하여 가족적 관계를 명확히 표현'
    },
    special_explanation: {
      explanation_type: '사랑의 지역적 확장',
      content: '이 구절은 초대교회의 놀라운 연대성을 보여줍니다. 데살로니가 교회는 자기 교회의 필요만 돌보지 않고 지역 전체의 신자들을 돌보았습니다. 이는 교회가 단순히 지역 모임이 아니라 보편적 하나님의 가족임을 보여줍니다. 또한 "더욱 더"라는 권면은 영적 성장이 끝이 없음을 가르칩니다. 아무리 잘하고 있어도 항상 더 성장할 여지가 있습니다.',
      examples: ['지역을 넘어선 형제 사랑의 실천', '현재의 선함에 만족하지 않는 지속적 성장']
    }
  },

  // 1 Thessalonians 4:11
  {
    reference: '1 Thessalonians 4:11',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '역설적 명령 - 조용한 삶',
        original_text: 'and to make it your ambition to lead a quiet life',
        korean_translation: '조용한 삶을 사는 것을 여러분의 목표로 삼으십시오',
        grammatical_explanation: 'to부정사 계속 - make it your ambition 관용구, to부정사로 목표 명시'
      },
      {
        sequence_order: 2,
        semantic_classification: '구체적 실천 1',
        original_text: 'You should mind your own business',
        korean_translation: '여러분 자신의 일에 전념하십시오',
        grammatical_explanation: '명령문 - should로 권고, mind your own business 관용구'
      },
      {
        sequence_order: 3,
        semantic_classification: '구체적 실천 2',
        original_text: 'and work with your hands',
        korean_translation: '그리고 여러분의 손으로 일하십시오',
        grammatical_explanation: '병렬 명령문 - and로 연결, with your hands로 구체적 방법 명시'
      },
      {
        sequence_order: 4,
        semantic_classification: '과거 교훈 상기',
        original_text: 'just as we told you',
        korean_translation: '우리가 여러분께 말했던 대로',
        grammatical_explanation: '종속절 - just as 비교 구문'
      }
    ],
    vocabulary: [
      {
        word: 'ambition',
        ipa_pronunciation: '/æmˈbɪʃən/',
        korean_pronunciation: '앰비션',
        part_of_speech: '명사',
        definition_korean: '야망, 목표',
        usage_note: '열정적으로 추구하는 것'
      },
      {
        word: 'quiet life',
        ipa_pronunciation: '/ˈkwaɪət laɪf/',
        korean_pronunciation: '콰이엇 라이프',
        part_of_speech: '명사구',
        definition_korean: '조용한 삶',
        usage_note: '분주함 없는 평온한 삶'
      },
      {
        word: 'mind your own business',
        ipa_pronunciation: '/maɪnd jɔːr oʊn ˈbɪznəs/',
        korean_pronunciation: '마인드 요어 온 비즈니스',
        part_of_speech: '관용구',
        definition_korean: '자기 일에 전념하다',
        usage_note: '남의 일에 간섭하지 않고 자기 일에 집중'
      },
      {
        word: 'work with your hands',
        ipa_pronunciation: '/wɜːrk wɪð jɔːr hændz/',
        korean_pronunciation: '워크 위드 요어 핸즈',
        part_of_speech: '동사구',
        definition_korean: '손으로 일하다',
        usage_note: '육체 노동, 실제적 일'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 실제적인 삶의 태도를 가르칩니다. "조용한 삶을 목표로 삼으라"는 역설적 표현입니다. 보통 야망(ambition)은 눈에 띄는 성취를 추구하지만, 여기서는 조용함을 목표로 삼으라고 합니다. 이는 당시 일부 데살로니가 교인들이 주님의 재림을 기다리며 일을 멈추고 분주하게 떠들며 다른 사람의 일에 간섭하는 문제를 다룹니다(2데살로니가서 3:11 참조). "자기 일에 전념하라"는 남의 일에 간섭하지 말라는 의미이며, "손으로 일하라"는 육체 노동을 존중하는 기독교 직업관을 보여줍니다. 당시 그리스-로마 사회에서 육체 노동은 천하게 여겨졌으나, 바울은 이를 긍정적으로 가르칩니다.',
      cross_references: ['2 Thessalonians 3:6-12', 'Ephesians 4:28', '1 Timothy 5:13']
    },
    korean_translation: {
      natural_translation: '조용한 삶을 사는 것을 여러분의 목표로 삼으십시오. 자기 일에 전념하고 여러분의 손으로 일하십시오. 우리가 여러분께 말했던 대로입니다.',
      translation_notes: 'make it your ambition을 "목표로 삼으십시오"로 번역하여 역설적 명령을 자연스럽게 표현'
    },
    special_explanation: {
      explanation_type: '역설적 야망',
      content: '이 구절의 핵심은 "조용한 삶을 목표로 삼으라"는 역설입니다. 세상은 눈에 띄는 성취를 야망으로 삼지만, 기독교는 조용하고 충실한 삶을 추구합니다. 이는 세 가지 실천으로 구체화됩니다: (1) 평온한 태도, (2) 자기 책임에 집중, (3) 정직한 노동. 이는 종말론적 흥분으로 인한 무질서를 바로잡고, 증인으로서의 일상적 삶의 중요성을 강조합니다.',
      examples: ['재림을 기다리며 일상의 책임을 다하는 균형', '육체 노동의 존엄성과 기독교 직업관']
    }
  },

  // 1 Thessalonians 4:12
  {
    reference: '1 Thessalonians 4:12',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '목적 1 - 증인',
        original_text: 'so that your daily life may win the respect of outsiders',
        korean_translation: '여러분의 일상 생활이 밖에 있는 사람들의 존경을 얻도록',
        grammatical_explanation: '목적절 - so that 구문, may로 가능성 표현, win이 주동사'
      },
      {
        sequence_order: 2,
        semantic_classification: '목적 2 - 자립',
        original_text: 'and so that you will not be dependent on anybody',
        korean_translation: '그리고 여러분이 아무에게도 의존하지 않도록',
        grammatical_explanation: '병렬 목적절 - and so that, 미래 will, dependent on 구문'
      }
    ],
    vocabulary: [
      {
        word: 'daily life',
        ipa_pronunciation: '/ˈdeɪli laɪf/',
        korean_pronunciation: '데일리 라이프',
        part_of_speech: '명사구',
        definition_korean: '일상 생활',
        usage_note: '날마다의 구체적 삶'
      },
      {
        word: 'win the respect',
        ipa_pronunciation: '/wɪn ðə rɪˈspɛkt/',
        korean_pronunciation: '윈 더 리스펙트',
        part_of_speech: '동사구',
        definition_korean: '존경을 얻다',
        usage_note: '존중을 받게 되다'
      },
      {
        word: 'outsiders',
        ipa_pronunciation: '/ˌaʊtˈsaɪdərz/',
        korean_pronunciation: '아웃사이더스',
        part_of_speech: '명사 (복수)',
        definition_korean: '외부인, 비신자',
        usage_note: '교회 밖의 사람들'
      },
      {
        word: 'dependent',
        ipa_pronunciation: '/dɪˈpɛndənt/',
        korean_pronunciation: '디펜던트',
        part_of_speech: '형용사',
        definition_korean: '의존하는',
        usage_note: '다른 사람에게 기대는'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 11절의 실천적 가르침의 두 가지 목적을 제시합니다. 첫째, 외부인들의 존경을 얻기 위함입니다. "밖에 있는 사람들"은 비신자를 가리키며, 신자들의 일상적 삶이 복음의 증거가 됨을 강조합니다. 게으르고 간섭하기 좋아하는 사람은 복음의 명예를 손상시키지만, 성실하고 책임감 있는 삶은 복음의 신빙성을 높입니다. 둘째, 경제적 자립을 위함입니다. "아무에게도 의존하지 않는다"는 것은 재정적 독립을 의미하며, 이는 개인의 존엄성과 복음의 순수성을 보호합니다. 이는 기독교 신앙이 일상의 모든 영역, 특히 직업과 경제적 책임을 포함함을 보여줍니다.',
      cross_references: ['1 Timothy 5:14', 'Titus 2:5', 'Colossians 4:5']
    },
    korean_translation: {
      natural_translation: '그리하여 여러분의 일상적인 삶이 교회 밖 사람들의 존경을 받게 하고, 또한 누구에게도 의존하지 않게 하십시오.',
      translation_notes: 'outsiders를 "교회 밖 사람들"로 의역하여 의미를 명확히 표현'
    },
    special_explanation: {
      explanation_type: '증인적 삶과 자립',
      content: '이 구절은 기독교 윤리의 두 가지 중요한 차원을 보여줍니다. (1) 대외적 증인: 신자의 삶은 복음의 신빙성에 영향을 미칩니다. 성실한 일상은 말보다 강력한 복음 증거입니다. (2) 경제적 자립: 자립은 존엄성의 문제이며, 타인에게 불필요한 부담을 주지 않는 사랑의 표현입니다. 이는 복음이 세상으로부터의 도피가 아니라 세상 안에서의 책임 있는 삶을 요구함을 보여줍니다.',
      examples: ['성실한 직업 생활을 통한 복음 증거', '경제적 자립을 통한 복음의 순수성 보호']
    }
  },

  // 1 Thessalonians 4:13
  {
    reference: '1 Thessalonians 4:13',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '주제 전환과 의도',
        original_text: 'Brothers and sisters, we do not want you to be uninformed about those who sleep in death',
        korean_translation: '형제자매 여러분, 우리는 여러분이 죽음 가운데 잠든 자들에 관하여 무지하기를 원하지 않습니다',
        grammatical_explanation: '주절 - do not want 구문, to부정사로 의도, about으로 주제 명시'
      },
      {
        sequence_order: 2,
        semantic_classification: '목적 - 슬픔의 차이',
        original_text: 'so that you do not grieve like the rest of mankind, who have no hope',
        korean_translation: '소망이 없는 다른 사람들처럼 슬퍼하지 않도록',
        grammatical_explanation: '목적절 - so that 구문, like로 비교, 관계절 who로 특성 설명'
      }
    ],
    vocabulary: [
      {
        word: 'uninformed',
        ipa_pronunciation: '/ˌʌnɪnˈfɔːrmd/',
        korean_pronunciation: '언인포름드',
        part_of_speech: '형용사',
        definition_korean: '알지 못하는, 무지한',
        usage_note: '정보나 지식이 없는 상태'
      },
      {
        word: 'sleep in death',
        ipa_pronunciation: '/sliːp ɪn dɛθ/',
        korean_pronunciation: '슬립 인 데쓰',
        part_of_speech: '동사구',
        definition_korean: '죽음 가운데 잠들다',
        usage_note: '죽음에 대한 완곡한 표현, 부활 소망 암시'
      },
      {
        word: 'grieve',
        ipa_pronunciation: '/ɡriːv/',
        korean_pronunciation: '그리브',
        part_of_speech: '동사',
        definition_korean: '슬퍼하다, 애도하다',
        usage_note: '깊은 슬픔을 느끼다'
      },
      {
        word: 'the rest of mankind',
        ipa_pronunciation: '/ðə rɛst əv ˈmænkaɪnd/',
        korean_pronunciation: '더 레스트 오브 맨카인드',
        part_of_speech: '명사구',
        definition_korean: '나머지 인류, 다른 사람들',
        usage_note: '신자가 아닌 사람들'
      },
      {
        word: 'hope',
        ipa_pronunciation: '/hoʊp/',
        korean_pronunciation: '홉',
        part_of_speech: '명사',
        definition_korean: '소망, 희망',
        usage_note: '부활과 영생에 대한 확신'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 죽은 신자들에 관한 새로운 주제를 시작합니다. 데살로니가 교인들은 아마도 재림 전에 죽은 신자들의 운명에 대해 염려했던 것 같습니다. "죽음 가운데 잠들다"는 표현은 죽음에 대한 기독교적 완곡어로, 부활의 소망을 암시합니다. 잠은 깨어남을 전제하기 때문입니다. 바울은 무지로 인한 불필요한 슬픔을 방지하고자 합니다. 중요한 것은 신자의 슬픔과 불신자의 슬픔의 차이입니다. 신자도 슬퍼하지만(바울은 슬퍼하지 말라고 하지 않음), 그 슬픔의 성격이 다릅니다. "소망이 없는 자들"은 부활과 영생의 확신이 없는 사람들을 가리키며, 그들의 슬픔은 절망적입니다. 반면 신자의 슬픔은 재회의 소망으로 위로받습니다.',
      cross_references: ['1 Corinthians 15:18-20', 'John 11:11-14', 'Ephesians 2:12']
    },
    korean_translation: {
      natural_translation: '형제자매 여러분, 우리는 여러분이 이미 세상을 떠난 분들에 대해 알지 못하여, 소망이 없는 다른 사람들처럼 슬퍼하는 것을 원하지 않습니다.',
      translation_notes: 'sleep in death를 "이미 세상을 떠난"으로 의역하여 자연스럽게 표현'
    },
    special_explanation: {
      explanation_type: '기독교적 슬픔',
      content: '이 구절은 기독교가 슬픔을 부정하지 않지만 그 성격을 변화시킴을 보여줍니다. 신자도 사별의 아픔을 느끼지만, 그 슬픔은 절망이 아니라 일시적 이별의 슬픔입니다. "잠들다"는 은유는 죽음이 영구적 종말이 아니라 일시적 상태임을 암시합니다. 부활 소망은 슬픔을 제거하지 않지만 그 본질을 변화시킵니다. 이는 초대교회가 이교 세계와 구별되는 죽음관을 가졌음을 보여줍니다.',
      examples: ['부활 소망 안에서의 건강한 애도', '절망 없는 슬픔 - 재회의 확신']
    }
  },

  // 1 Thessalonians 4:14
  {
    reference: '1 Thessalonians 4:14',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '신앙 고백 - 조건',
        original_text: 'For we believe that Jesus died and rose again',
        korean_translation: '우리는 예수님께서 죽으셨다가 다시 살아나신 것을 믿습니다',
        grammatical_explanation: '종속절 - For 접속사, believe that 구문, 두 동작 died와 rose 병렬'
      },
      {
        sequence_order: 2,
        semantic_classification: '논리적 결론',
        original_text: 'and so we believe that God will bring with Jesus those who have fallen asleep in him',
        korean_translation: '그러므로 우리는 하나님께서 예수님 안에서 잠든 자들을 예수님과 함께 데려오실 것을 믿습니다',
        grammatical_explanation: '주절 - and so 논리적 연결, believe that 구문, 미래 will bring, 관계절 who'
      }
    ],
    vocabulary: [
      {
        word: 'rose again',
        ipa_pronunciation: '/roʊz əˈɡɛn/',
        korean_pronunciation: '로즈 어겐',
        part_of_speech: '동사구 (과거형)',
        definition_korean: '다시 살아났다',
        usage_note: '부활을 의미'
      },
      {
        word: 'bring with',
        ipa_pronunciation: '/brɪŋ wɪð/',
        korean_pronunciation: '브링 위드',
        part_of_speech: '동사구',
        definition_korean: '함께 데려오다',
        usage_note: '동반하여 오다'
      },
      {
        word: 'fallen asleep',
        ipa_pronunciation: '/ˈfɔːlən əˈsliːp/',
        korean_pronunciation: '폴른 어슬립',
        part_of_speech: '동사구 (완료형)',
        definition_korean: '잠들었다',
        usage_note: '죽음에 대한 완곡 표현'
      },
      {
        word: 'in him',
        ipa_pronunciation: '/ɪn hɪm/',
        korean_pronunciation: '인 힘',
        part_of_speech: '전치사구',
        definition_korean: '그분 안에서',
        usage_note: '그리스도와의 연합'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 죽은 신자들의 소망의 신학적 근거를 제시합니다. 논리는 간단합니다: 그리스도의 부활 → 신자의 부활. "우리는 믿습니다"는 초대교회의 신앙고백적 표현입니다. 예수님의 죽음과 부활은 기독교 신앙의 핵심이며, 이것이 신자의 미래 소망의 기초입니다. "그러므로"(and so)는 논리적 연결을 나타냅니다. 그리스도께서 부활하셨다면, 그리스도 안에 있는 자들도 반드시 부활할 것입니다. "예수님과 함께 데려오실 것"은 재림 시 죽은 신자들이 그리스도와 함께 올 것을 의미합니다. "예수님 안에서 잠든 자들"은 그리스도와 연합하여 죽은 신자들을 가리키며, 이 연합이 부활의 보증입니다.',
      cross_references: ['1 Corinthians 15:20-23', 'Romans 6:5', '2 Corinthians 4:14']
    },
    korean_translation: {
      natural_translation: '우리는 예수님께서 죽으셨다가 다시 살아나신 것을 믿습니다. 그러므로 하나님께서 예수님 안에서 잠든 사람들도 예수님과 함께 데려오실 것을 믿습니다.',
      translation_notes: 'and so를 "그러므로"로 번역하여 논리적 연결을 명확히 표현'
    },
    special_explanation: {
      explanation_type: '부활의 연대성',
      content: '이 구절은 그리스도의 부활과 신자의 부활의 불가분한 관계를 보여줍니다. 그리스도의 부활은 단순히 개인적 사건이 아니라 모든 신자의 부활을 보증하는 원형적 사건입니다. "예수님 안에서"라는 표현은 그리스도와의 연합이 부활의 근거임을 나타냅니다. 그리스도와 연합한 자는 그리스도의 죽음과 부활에 참여하며, 따라서 그리스도의 부활이 그들의 부활을 보증합니다. 이는 바울 신학의 핵심인 "그리스도 안에" 있음의 종말론적 의미입니다.',
      examples: ['그리스도의 부활이 신자 부활의 보증과 원형', '그리스도와의 연합이 부활 소망의 근거']
    }
  },

  // 1 Thessalonians 4:15
  {
    reference: '1 Thessalonians 4:15',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '권위의 출처',
        original_text: 'According to the Lord\'s word, we tell you',
        korean_translation: '주님의 말씀에 따라 우리가 여러분께 말합니다',
        grammatical_explanation: '전치사구 + 주절 - According to로 근거 제시, tell you가 주동사'
      },
      {
        sequence_order: 2,
        semantic_classification: '핵심 계시',
        original_text: 'that we who are still alive, who are left until the coming of the Lord, will certainly not precede those who have fallen asleep',
        korean_translation: '주님의 재림 때까지 살아남아 있는 우리가 결코 잠든 자들보다 앞서지 못할 것입니다',
        grammatical_explanation: 'that절 명사절 - 이중 관계절 who, 미래 will not precede, certainly로 강조'
      }
    ],
    vocabulary: [
      {
        word: 'according to',
        ipa_pronunciation: '/əˈkɔːrdɪŋ tuː/',
        korean_pronunciation: '어코딩 투',
        part_of_speech: '전치사구',
        definition_korean: '~에 따라',
        usage_note: '~을 근거로 하여'
      },
      {
        word: 'the Lord\'s word',
        ipa_pronunciation: '/ðə lɔːrdz wɜːrd/',
        korean_pronunciation: '더 로즈 워드',
        part_of_speech: '명사구',
        definition_korean: '주님의 말씀',
        usage_note: '그리스도의 직접적 가르침 또는 계시'
      },
      {
        word: 'still alive',
        ipa_pronunciation: '/stɪl əˈlaɪv/',
        korean_pronunciation: '스틸 얼라이브',
        part_of_speech: '형용사구',
        definition_korean: '아직 살아있는',
        usage_note: '재림 시까지 생존한'
      },
      {
        word: 'precede',
        ipa_pronunciation: '/prɪˈsiːd/',
        korean_pronunciation: '프리시드',
        part_of_speech: '동사',
        definition_korean: '앞서다',
        usage_note: '시간적으로 먼저 가다'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 자신의 가르침이 개인적 견해가 아니라 "주님의 말씀"에 근거함을 명확히 합니다. 이는 예수님의 직접적 가르침(마태복음 24장 등)이거나 바울에게 주어진 특별 계시일 수 있습니다. 핵심 메시지는 재림 시까지 살아있는 신자들이 죽은 신자들보다 어떤 우위를 갖지 않는다는 것입니다. "결코 앞서지 못할 것"이라는 강한 부정은 데살로니가 교인들의 염려를 해소합니다. 그들은 아마도 죽은 신자들이 재림의 축복을 놓치지 않을까 걱정했을 것입니다. 바울은 이것이 잘못된 염려임을 명확히 합니다. 죽은 신자들은 불이익을 당하지 않으며, 오히려 16절에서 보듯 먼저 부활할 것입니다.',
      cross_references: ['Matthew 24:30-31', '1 Corinthians 15:51-52', 'Revelation 1:7']
    },
    korean_translation: {
      natural_translation: '주님의 말씀에 따라 우리가 여러분께 분명히 말합니다. 주님께서 재림하실 때까지 살아남은 우리가 이미 세상을 떠난 사람들보다 결코 앞서지 못할 것입니다.',
      translation_notes: 'will certainly not을 "결코 ~못할 것입니다"로 강조하여 확실성 표현'
    },
    special_explanation: {
      explanation_type: '재림과 부활의 순서',
      content: '이 구절은 초대교회의 종말론적 관심사를 다룹니다. 일부 데살로니가 교인들은 재림 전에 죽은 신자들이 재림의 영광을 놓칠까 걱정했습니다. 바울은 이것이 잘못된 염려임을 "주님의 말씀"의 권위로 선언합니다. 중요한 것은 모든 신자가 - 살아있든 죽었든 - 그리스도의 재림을 완전히 경험할 것이라는 확신입니다. 이는 죽음이 신자를 그리스도로부터 분리하지 못함을 보여줍니다.',
      examples: ['죽은 신자들도 재림의 축복을 온전히 누림', '살아있는 것이 죽은 자보다 유리하지 않음']
    }
  },

  // 1 Thessalonians 4:16
  {
    reference: '1 Thessalonians 4:16',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '주님의 강림',
        original_text: 'For the Lord himself will come down from heaven',
        korean_translation: '주님께서 친히 하늘에서 내려오실 것입니다',
        grammatical_explanation: '주절 - himself로 주님 강조, 미래 will come down, from heaven으로 방향'
      },
      {
        sequence_order: 2,
        semantic_classification: '동반 현상 1',
        original_text: 'with a loud command',
        korean_translation: '큰 호령과 함께',
        grammatical_explanation: '전치사구 - with로 동반 수단, loud로 소리 강조'
      },
      {
        sequence_order: 3,
        semantic_classification: '동반 현상 2',
        original_text: 'with the voice of the archangel',
        korean_translation: '천사장의 음성과 함께',
        grammatical_explanation: '전치사구 - 병렬 구조, of로 소유격'
      },
      {
        sequence_order: 4,
        semantic_classification: '동반 현상 3',
        original_text: 'and with the trumpet call of God',
        korean_translation: '그리고 하나님의 나팔 소리와 함께',
        grammatical_explanation: '전치사구 - and로 병렬, trumpet call 명사구'
      },
      {
        sequence_order: 5,
        semantic_classification: '결과 - 부활',
        original_text: 'and the dead in Christ will rise first',
        korean_translation: '그리스도 안에서 죽은 자들이 먼저 일어날 것입니다',
        grammatical_explanation: '주절 - and로 연결, 미래 will rise, first 부사로 순서 강조'
      }
    ],
    vocabulary: [
      {
        word: 'himself',
        ipa_pronunciation: '/hɪmˈsɛlf/',
        korean_pronunciation: '힘셀프',
        part_of_speech: '재귀대명사',
        definition_korean: '친히, 직접',
        usage_note: '주님의 직접적 임재 강조'
      },
      {
        word: 'loud command',
        ipa_pronunciation: '/laʊd kəˈmænd/',
        korean_pronunciation: '라우드 커맨드',
        part_of_speech: '명사구',
        definition_korean: '큰 호령',
        usage_note: '권위 있는 명령'
      },
      {
        word: 'archangel',
        ipa_pronunciation: '/ˈɑːrkˌeɪndʒəl/',
        korean_pronunciation: '아크엔젤',
        part_of_speech: '명사',
        definition_korean: '천사장',
        usage_note: '천사들의 우두머리'
      },
      {
        word: 'trumpet call',
        ipa_pronunciation: '/ˈtrʌmpɪt kɔːl/',
        korean_pronunciation: '트럼핏 콜',
        part_of_speech: '명사구',
        definition_korean: '나팔 소리',
        usage_note: '신적 선포와 소집의 상징'
      },
      {
        word: 'the dead in Christ',
        ipa_pronunciation: '/ðə dɛd ɪn kraɪst/',
        korean_pronunciation: '더 데드 인 크라이스트',
        part_of_speech: '명사구',
        definition_korean: '그리스도 안에서 죽은 자들',
        usage_note: '신자로 죽은 사람들'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 재림의 장엄한 광경을 생생하게 묘사합니다. "주님께서 친히"라는 강조는 대리인이 아닌 그리스도 자신의 직접적 임재를 나타냅니다. 세 가지 소리가 재림을 동반합니다: (1) 큰 호령 - 권위 있는 명령, 아마도 죽은 자들을 깨우는 소리, (2) 천사장의 음성 - 미가엘(유다서 9, 다니엘 12:1)을 가리킬 수 있으며 천상의 군대를 나타냄, (3) 하나님의 나팔 소리 - 구약에서 나팔은 하나님의 백성을 소집하고 중요한 사건을 알림(출애굽기 19:16). 이 모든 소리는 재림의 공개성, 장엄함, 그리고 우주적 중요성을 강조합니다. 결과는 "그리스도 안에서 죽은 자들이 먼저 일어남"입니다. "먼저"는 15절의 약속을 확인하며, 죽은 신자들이 불이익을 받지 않음을 보여줍니다.',
      cross_references: ['1 Corinthians 15:52', 'Matthew 24:30-31', 'Revelation 11:15']
    },
    korean_translation: {
      natural_translation: '주님께서 호령과 천사장의 음성과 하나님의 나팔 소리와 함께 친히 하늘에서 내려오실 것입니다. 그러면 그리스도 안에서 죽은 사람들이 먼저 부활할 것입니다.',
      translation_notes: '세 가지 with 구조를 "~와 함께"로 병렬하여 재림의 동반 현상들을 나열'
    },
    special_explanation: {
      explanation_type: '재림의 장엄함',
      content: '이 구절은 재림이 은밀하거나 영적인 사건이 아니라 우주적으로 공개적이고 장엄한 사건임을 보여줍니다. 세 가지 소리는 재림의 다층적 의미를 나타냅니다: 권위(호령), 천상의 동반(천사장), 신적 선포(나팔). 이는 구약의 시내산 현현(출애굽기 19장)을 연상시키며, 하나님의 임재가 감각적으로 경험될 것임을 보여줍니다. "먼저"라는 단어는 죽은 신자들의 우선권을 강조하며, 죽음이 그리스도의 영광을 누리는 데 장애가 되지 않음을 확증합니다.',
      examples: ['재림의 공개성과 우주적 규모', '죽은 신자들의 부활 우선권']
    }
  },

  // 1 Thessalonians 4:17
  {
    reference: '1 Thessalonians 4:17',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '시간적 순서',
        original_text: 'After that, we who are still alive and are left will be caught up together with them in the clouds',
        korean_translation: '그 후에 살아남은 우리가 그들과 함께 구름 속으로 들려 올라갈 것입니다',
        grammatical_explanation: '주절 - After that 시간 표현, 이중 관계절 who, 수동태 will be caught up, together with로 동반'
      },
      {
        sequence_order: 2,
        semantic_classification: '목적',
        original_text: 'to meet the Lord in the air',
        korean_translation: '공중에서 주님을 만나기 위하여',
        grammatical_explanation: 'to부정사 목적절 - meet이 동사, in the air 장소 표현'
      },
      {
        sequence_order: 3,
        semantic_classification: '영원한 결과',
        original_text: 'And so we will be with the Lord forever',
        korean_translation: '그리하여 우리가 영원히 주님과 함께 있을 것입니다',
        grammatical_explanation: '결과절 - And so 결과 표현, 미래 will be, forever 시간 부사'
      }
    ],
    vocabulary: [
      {
        word: 'caught up',
        ipa_pronunciation: '/kɔːt ʌp/',
        korean_pronunciation: '콧 업',
        part_of_speech: '동사구 (과거분사)',
        definition_korean: '들려 올라가다',
        usage_note: '그리스어 harpazo, 라틴어 rapturo에서 휴거(rapture) 유래'
      },
      {
        word: 'together with',
        ipa_pronunciation: '/təˈɡɛðər wɪð/',
        korean_pronunciation: '투게더 위드',
        part_of_speech: '전치사구',
        definition_korean: '함께',
        usage_note: '연합과 동반'
      },
      {
        word: 'in the clouds',
        ipa_pronunciation: '/ɪn ðə klaʊdz/',
        korean_pronunciation: '인 더 클라우즈',
        part_of_speech: '전치사구',
        definition_korean: '구름 속으로',
        usage_note: '신적 임재의 상징'
      },
      {
        word: 'meet',
        ipa_pronunciation: '/miːt/',
        korean_pronunciation: '미트',
        part_of_speech: '동사',
        definition_korean: '만나다',
        usage_note: '그리스어 apantesis, 공식적 영접'
      },
      {
        word: 'forever',
        ipa_pronunciation: '/fəˈrɛvər/',
        korean_pronunciation: '포레버',
        part_of_speech: '부사',
        definition_korean: '영원히',
        usage_note: '끝없는 시간'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 재림 사건의 절정을 묘사합니다. "그 후에"는 16절의 죽은 자 부활 이후를 가리킵니다. 살아있는 신자들이 "들려 올라간다"(caught up)는 표현은 라틴어 번역에서 "휴거"(rapture)라는 용어가 유래했습니다. 중요한 것은 "그들과 함께"라는 구절로, 살아있는 자와 부활한 자가 함께 주님을 맞이합니다. 이는 15절의 약속을 완성합니다 - 죽은 자들이 불이익을 받지 않으며, 오히려 모든 신자가 연합하여 주님을 영접합니다. "구름 속으로"는 신적 임재의 상징입니다(출애굽기 13:21, 다니엘 7:13). "만나다"로 번역된 그리스어는 고위 인사를 공식적으로 영접하는 용어입니다. 가장 중요한 것은 최종 결과입니다: "영원히 주님과 함께". 이것이 기독교 소망의 본질입니다. 천국이나 지상 왕국보다 더 근본적인 것은 주님과의 영원한 교제입니다.',
      cross_references: ['Acts 1:9-11', 'Philippians 3:20-21', 'Revelation 21:3']
    },
    korean_translation: {
      natural_translation: '그 후에 살아남은 우리가 그들과 함께 구름 속으로 들려 올라가 공중에서 주님을 맞이할 것입니다. 그리하여 우리는 영원히 주님과 함께 있을 것입니다.',
      translation_notes: 'meet을 "맞이하다"로 번역하여 공식적 영접의 의미를 표현'
    },
    special_explanation: {
      explanation_type: '영원한 연합',
      content: '이 구절은 기독교 종말론의 정점을 보여줍니다. 핵심은 특정 사건의 순서가 아니라 "영원히 주님과 함께"라는 최종 상태입니다. 몇 가지 중요한 신학적 진리: (1) 모든 신자의 연합 - 죽은 자와 살아있는 자의 구별이 사라짐, (2) 주님과의 영접 - 공식적이고 영광스러운 만남, (3) 영원한 교제 - 일시적이 아닌 영구적 관계. "영원히 주님과 함께"는 모든 종말론적 소망의 핵심입니다. 장소(천국)보다 관계(주님과 함께)가 중심입니다.',
      examples: ['모든 신자의 통합 - 시간과 죽음을 넘어선 연합', '관계 중심적 영생관 - 장소보다 주님과의 교제']
    }
  },

  // 1 Thessalonians 4:18
  {
    reference: '1 Thessalonians 4:18',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '결론적 명령',
        original_text: 'Therefore encourage one another with these words',
        korean_translation: '그러므로 이 말씀들로 서로를 격려하십시오',
        grammatical_explanation: '명령문 - Therefore 결론 표지, encourage 명령형, with로 수단, one another 상호성'
      }
    ],
    vocabulary: [
      {
        word: 'therefore',
        ipa_pronunciation: '/ˈðɛrfɔːr/',
        korean_pronunciation: '데어포',
        part_of_speech: '부사',
        definition_korean: '그러므로',
        usage_note: '논리적 결론 도출'
      },
      {
        word: 'encourage',
        ipa_pronunciation: '/ɪnˈkɜːrɪdʒ/',
        korean_pronunciation: '인커리지',
        part_of_speech: '동사',
        definition_korean: '격려하다, 위로하다',
        usage_note: '그리스어 parakaleo - 옆에서 부르다, 위로하다'
      },
      {
        word: 'one another',
        ipa_pronunciation: '/wʌn əˈnʌðər/',
        korean_pronunciation: '원 어나더',
        part_of_speech: '대명사',
        definition_korean: '서로',
        usage_note: '상호적 행동'
      },
      {
        word: 'these words',
        ipa_pronunciation: '/ðiːz wɜːrdz/',
        korean_pronunciation: '디즈 워즈',
        part_of_speech: '명사구',
        definition_korean: '이 말씀들',
        usage_note: '13-17절의 가르침'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 재림과 부활에 관한 가르침을 실제적 적용으로 마무리합니다. "그러므로"는 앞선 모든 가르침(13-17절)을 가리킵니다. 신학은 위로를 위한 것입니다. 바울이 재림 교리를 가르친 이유는 학문적 호기심이 아니라 슬퍼하는 자들을 위로하기 위함입니다. "격려하다"로 번역된 그리스어 parakaleo는 "옆에서 부르다"는 의미로, 위로와 격려를 동시에 담고 있습니다. 이는 성령의 사역을 나타내는 단어(보혜사, Paraclete)와 같은 어근입니다. 중요한 것은 "서로"(one another)입니다. 격려는 목회자에서 평신도로의 일방향이 아니라 신자들 상호간의 사역입니다. "이 말씀들로"는 격려의 내용을 명시합니다: 그리스도의 부활, 죽은 자의 부활, 재림의 영광, 영원한 연합. 이것이 슬픔 가운데 있는 자들을 위로하는 복음의 능력입니다.',
      cross_references: ['1 Thessalonians 5:11', 'Hebrews 10:24-25', 'Romans 15:4']
    },
    korean_translation: {
      natural_translation: '그러므로 이러한 말씀들로 서로를 위로하고 격려하십시오.',
      translation_notes: 'encourage를 "위로하고 격려하십시오"로 확대하여 parakaleo의 풍부한 의미 표현'
    },
    special_explanation: {
      explanation_type: '신학의 목회적 적용',
      content: '이 짧은 구절은 신학과 목회의 관계를 보여줍니다. 재림 교리는 추상적 사변이 아니라 실제적 위로를 위한 것입니다. 몇 가지 중요한 원리: (1) 신학은 위로를 위한 것 - 교리가 삶을 섬김, (2) 상호 사역 - 모든 신자가 서로를 격려하는 제사장직, (3) 말씀의 능력 - "이 말씀들로" 격려, 인간적 위로가 아닌 복음의 진리로 위로. 바울은 복잡한 종말론을 간단한 적용으로 마무리합니다: 서로 위로하라. 이것이 건강한 종말론의 표지입니다.',
      examples: ['교리가 삶을 섬기는 실제적 신학', '성도의 상호 격려 사역']
    }
  }
]

async function main() {
  console.log(`\n${'='.repeat(60)}`)
  console.log(`1 Thessalonians 4:1-18 분석 데이터 저장 시작`)
  console.log(`총 ${analyses.length}개 구절`)
  console.log(`${'='.repeat(60)}\n`)

  let successCount = 0
  let failCount = 0

  for (const analysis of analyses) {
    const success = await saveAnalysisToDb(analysis)
    if (success) {
      successCount++
    } else {
      failCount++
    }
    // Rate limiting
    await new Promise((resolve) => setTimeout(resolve, 1000))
  }

  console.log(`\n${'='.repeat(60)}`)
  console.log(`저장 완료`)
  console.log(`성공: ${successCount}개`)
  console.log(`실패: ${failCount}개`)
  console.log(`${'='.repeat(60)}\n`)
}

main()
