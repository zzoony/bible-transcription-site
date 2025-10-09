import { saveAnalysisToDb, type AnalysisData } from './save-analysis-to-db'

const analyses: AnalysisData[] = [
  // Colossians 3:1
  {
    reference: 'Colossians 3:1',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '조건절 - 신학적 전제',
        original_text: 'Since, then, you have been raised with Christ',
        korean_translation: '그러므로 여러분이 그리스도와 함께 살아났으니',
        grammatical_explanation: '과거 수동 완료형(have been raised)을 사용하여 그리스도와의 부활이 이미 완료된 사실임을 강조. "since"는 인과관계를 나타냄'
      },
      {
        sequence_order: 2,
        semantic_classification: '명령 - 마음의 방향 설정',
        original_text: 'set your hearts on things above',
        korean_translation: '위의 것들에 마음을 두십시오',
        grammatical_explanation: '명령형 동사(set)로 적극적인 행동 요구. "hearts"는 의지와 감정의 중심을 의미'
      },
      {
        sequence_order: 3,
        semantic_classification: '관계절 - 그리스도의 위치',
        original_text: 'where Christ is, seated at the right hand of God',
        korean_translation: '그곳은 그리스도께서 하나님의 우편에 앉아 계신 곳입니다',
        grammatical_explanation: '관계부사 "where"로 장소를 지시. 완료형 분사구(seated)로 그리스도의 영속적인 지위를 표현'
      }
    ],
    vocabulary: [
      {
        word: 'raised',
        ipa_pronunciation: '/reɪzd/',
        korean_pronunciation: '레이즈드',
        part_of_speech: '동사(과거분사)',
        definition_korean: '일으키다, 부활시키다',
        usage_note: '그리스도와의 영적 부활을 나타냄'
      },
      {
        word: 'hearts',
        ipa_pronunciation: '/hɑːrts/',
        korean_pronunciation: '하츠',
        part_of_speech: '명사(복수)',
        definition_korean: '마음, 심장; 애정과 의지의 중심',
        usage_note: '성경에서 마음은 단순한 감정이 아닌 전인격의 중심'
      },
      {
        word: 'above',
        ipa_pronunciation: '/əˈbʌv/',
        korean_pronunciation: '어버브',
        part_of_speech: '부사',
        definition_korean: '위에, 하늘에',
        usage_note: '지상적인 것과 대비되는 천상적/영적 영역'
      },
      {
        word: 'seated',
        ipa_pronunciation: '/ˈsiːtɪd/',
        korean_pronunciation: '시티드',
        part_of_speech: '동사(과거분사)',
        definition_korean: '앉아 있는',
        usage_note: '왕권과 권위를 상징하는 자세'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 골로새 교회에 그리스도인의 정체성을 상기시킵니다. "그리스도와 함께 살아났다"는 표현은 2장에서 논의한 세례와 연결되며, 신자들이 그리스도의 죽음과 부활에 연합했음을 의미합니다. "위의 것"은 단순히 하늘이 아니라 그리스도께서 계신 영적 영역을 가리킵니다. "하나님의 우편에 앉아 계신"이라는 표현은 시편 110:1을 인용한 것으로, 그리스도의 최고 권위와 통치권을 나타냅니다. 바울은 신자들의 실존적 위치가 이미 그리스도와 함께 하늘에 있음을 강조하며, 이에 따라 가치관과 삶의 방향도 변화해야 한다고 권면합니다.'
    },
    korean_translation: {
      natural_translation: '그러므로 여러분이 그리스도와 함께 살아났으니, 그리스도께서 하나님의 우편에 앉아 계신 그곳, 위의 것들에 마음을 두십시오.'
    },
    special_explanation: {
      explanation_type: '신학적 의미',
      content: '"그리스도와 함께 살아났다"는 표현은 단순한 미래의 희망이 아니라 이미 일어난 영적 현실을 의미합니다. 바울 신학에서 신자는 그리스도의 죽음과 부활에 연합하여 "이미" 새 생명을 얻었지만, "아직" 완전한 영광의 상태에 도달하지 않은 "already but not yet"의 긴장 속에 살아갑니다. "위의 것에 마음을 두라"는 명령은 도피주의가 아니라, 그리스도의 통치 아래 있는 새로운 가치관과 윤리를 추구하라는 적극적 권면입니다.'
    }
  },

  // Colossians 3:2
  {
    reference: 'Colossians 3:2',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '명령 - 사고의 방향',
        original_text: 'Set your minds on things above',
        korean_translation: '위의 것들에 마음을 두십시오',
        grammatical_explanation: '1절의 "hearts"를 "minds"로 반복하며 강조. 동일한 명령형 구조'
      },
      {
        sequence_order: 2,
        semantic_classification: '부정 명령 - 금지',
        original_text: 'not on earthly things',
        korean_translation: '땅의 것들에 두지 마십시오',
        grammatical_explanation: '부정어 "not"을 사용한 대조적 명령. "earthly"는 "above"와 명확한 대비'
      }
    ],
    vocabulary: [
      {
        word: 'minds',
        ipa_pronunciation: '/maɪndz/',
        korean_pronunciation: '마인즈',
        part_of_speech: '명사(복수)',
        definition_korean: '생각, 정신, 마음',
        usage_note: '"hearts"보다 이성적/인지적 측면을 강조'
      },
      {
        word: 'earthly',
        ipa_pronunciation: '/ˈɜːrθli/',
        korean_pronunciation: '어쓸리',
        part_of_speech: '형용사',
        definition_korean: '땅의, 세속적인',
        usage_note: '천상적인 것과 대조되는 일시적이고 물질적인 것'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '1절의 "hearts"에 이어 "minds"를 사용함으로써 바울은 신자의 전인격적 변화를 요구합니다. 단순히 감정적 차원이 아니라 사고방식과 가치관의 근본적 전환을 말합니다. "위의 것"과 "땅의 것"의 대조는 영지주의적 이원론이 아니라, 그리스도 중심의 삶과 자기중심적 삶의 대비입니다. "땅의 것"은 본질적으로 악한 것이 아니라, 하나님 없이 추구되는 세속적 가치와 욕망을 의미합니다. 바울은 5절 이하에서 구체적으로 이러한 "땅의 것"들을 열거할 것입니다.'
    },
    korean_translation: {
      natural_translation: '위의 것들에 마음을 두고, 땅의 것들에 두지 마십시오.'
    },
    special_explanation: {
      explanation_type: '문학적 구조',
      content: '이 구절은 1절의 평행 반복이면서 동시에 대조를 더합니다. "hearts"(1절)와 "minds"(2절)의 쌍, "things above"의 반복과 "earthly things"의 추가는 히브리 시문학의 평행법을 연상시킵니다. 긍정 명령과 부정 명령의 결합은 교훈의 효과를 극대화하며, 신자의 삶에서 선택의 명확성을 요구합니다.'
    }
  },

  // Colossians 3:3
  {
    reference: 'Colossians 3:3',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '이유절 - 과거 사실',
        original_text: 'For you died',
        korean_translation: '여러분은 죽었고',
        grammatical_explanation: '단순 과거형으로 이미 일어난 결정적 사건. 접속사 "For"는 1-2절의 근거 제시'
      },
      {
        sequence_order: 2,
        semantic_classification: '현재 상태 - 숨겨진 생명',
        original_text: 'and your life is now hidden with Christ in God',
        korean_translation: '여러분의 생명은 이제 그리스도와 함께 하나님 안에 감추어져 있습니다',
        grammatical_explanation: '현재형(is hidden)으로 지속적 상태 표현. 이중 전치사구(with Christ / in God)로 안전함을 강조'
      }
    ],
    vocabulary: [
      {
        word: 'died',
        ipa_pronunciation: '/daɪd/',
        korean_pronunciation: '다이드',
        part_of_speech: '동사(과거)',
        definition_korean: '죽었다',
        usage_note: '그리스도와의 연합을 통한 옛 자아의 죽음'
      },
      {
        word: 'hidden',
        ipa_pronunciation: '/ˈhɪdn/',
        korean_pronunciation: '히든',
        part_of_speech: '동사(과거분사)',
        definition_korean: '감추어진, 숨겨진',
        usage_note: '세상에 드러나지 않지만 안전하게 보호됨을 의미'
      },
      {
        word: 'life',
        ipa_pronunciation: '/laɪf/',
        korean_pronunciation: '라이프',
        part_of_speech: '명사',
        definition_korean: '생명, 삶',
        usage_note: '그리스도 안에서 얻은 새로운 영적 생명'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 신자의 이중적 정체성을 설명합니다. "죽었다"는 것은 2:20의 "그리스도와 함께 죽었다"는 표현과 연결되며, 세례를 통한 옛 자아의 죽음을 의미합니다. 동시에 신자는 새로운 생명을 소유하고 있지만, 이 생명은 아직 세상에 완전히 드러나지 않았습니다. "감추어져 있다"는 표현은 부정적 의미가 아니라 하나님께서 보호하고 계신다는 뜻입니다. 이중 전치사 구조("그리스도와 함께"와 "하나님 안에")는 신자의 생명이 얼마나 안전하게 보호되고 있는지를 강조합니다. 이는 골로새의 거짓 교사들이 제시하는 불확실한 영적 경험과 대조됩니다.'
    },
    korean_translation: {
      natural_translation: '여러분은 죽었고, 여러분의 생명은 이제 그리스도와 함께 하나님 안에 감추어져 있기 때문입니다.'
    },
    special_explanation: {
      explanation_type: '신학적 역설',
      content: '"죽었다"와 "생명이 있다"는 표면적으로 모순되지만, 바울 신학의 핵심 역설입니다. 신자는 죄와 옛 자아에 대해서는 죽었지만, 그리스도 안에서 새로운 생명을 얻었습니다. "감추어져 있다"는 표현은 요한복음 3:3의 "거듭남"과 연결되며, 이 새 생명은 현재 믿음의 눈으로만 볼 수 있지만 4절에서 말하는 것처럼 장차 영광 중에 드러날 것입니다.'
    }
  },

  // Colossians 3:4
  {
    reference: 'Colossians 3:4',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '시간절 - 미래 사건',
        original_text: 'When Christ, who is your life, appears',
        korean_translation: '여러분의 생명이신 그리스도께서 나타나실 때',
        grammatical_explanation: '시간 접속사 "when"으로 미래 확실한 사건 제시. 관계절 "who is your life"로 그리스도의 정체성 삽입'
      },
      {
        sequence_order: 2,
        semantic_classification: '결과절 - 영광의 현현',
        original_text: 'then you also will appear with him in glory',
        korean_translation: '그때 여러분도 그분과 함께 영광 중에 나타날 것입니다',
        grammatical_explanation: '미래형(will appear)으로 확실한 약속 표현. "also"로 그리스도와 신자의 연합 강조'
      }
    ],
    vocabulary: [
      {
        word: 'appears',
        ipa_pronunciation: '/əˈpɪrz/',
        korean_pronunciation: '어피어즈',
        part_of_speech: '동사(3인칭 단수 현재)',
        definition_korean: '나타나다, 드러나다',
        usage_note: '그리스도의 재림을 의미하는 기술적 용어'
      },
      {
        word: 'glory',
        ipa_pronunciation: '/ˈɡlɔːri/',
        korean_pronunciation: '글로리',
        part_of_speech: '명사',
        definition_korean: '영광, 영화',
        usage_note: '하나님의 임재와 위엄이 완전히 드러나는 상태'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '3절의 "감추어진 생명"과 대조되는 미래의 영광스러운 현현을 말합니다. "그리스도께서 나타나실 때"는 재림(parousia)을 가리키며, 초대교회의 핵심 소망이었습니다. "여러분의 생명이신 그리스도"라는 표현은 신자의 생명이 그리스도와 분리될 수 없음을 강조합니다. 그리스도의 나타남과 신자의 나타남이 동시에 일어나며, 이는 그리스도와의 연합이 얼마나 견고한지 보여줍니다. "영광 중에"는 단순히 장소가 아니라 영광스러운 상태를 의미하며, 로마서 8:18-21의 피조물의 회복과 연결됩니다. 이 미래의 소망은 현재의 윤리적 삶을 위한 동기가 됩니다.'
    },
    korean_translation: {
      natural_translation: '여러분의 생명이신 그리스도께서 나타나실 때, 그때 여러분도 그분과 함께 영광 중에 나타날 것입니다.'
    },
    special_explanation: {
      explanation_type: '종말론적 구조',
      content: '이 구절은 "이미와 아직"(already-not yet)의 긴장을 해소합니다. 신자의 생명은 "이미" 그리스도 안에 있지만(3절), "아직" 완전히 드러나지 않았습니다. 그리스도의 재림 시 이 숨겨진 현실이 완전히 드러날 것입니다. 바울은 이를 통해 신자들에게 현재의 고난과 숨겨진 삶을 인내하도록 격려하며, 동시에 미래의 확실한 영광을 소망하도록 합니다.'
    }
  },

  // Colossians 3:5
  {
    reference: 'Colossians 3:5',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '명령 - 급진적 행동',
        original_text: 'Put to death, therefore, whatever belongs to your earthly nature',
        korean_translation: '그러므로 여러분의 땅의 본성에 속한 것은 무엇이든지 죽이십시오',
        grammatical_explanation: '강력한 명령형 "put to death"(죽이라)는 적극적이고 급진적인 행동 요구. "therefore"로 1-4절의 신학적 근거와 연결'
      },
      {
        sequence_order: 2,
        semantic_classification: '예시 나열 - 구체적 죄목들',
        original_text: 'sexual immorality, impurity, lust, evil desires and greed, which is idolatry',
        korean_translation: '음행, 부정함, 정욕, 악한 욕망, 그리고 탐욕인데 이것은 우상숭배입니다',
        grammatical_explanation: '다섯 가지 죄를 나열하며 점층적 구조. 마지막 "greed"를 관계절로 "idolatry"와 동일시'
      }
    ],
    vocabulary: [
      {
        word: 'put to death',
        ipa_pronunciation: '/pʊt tə dɛθ/',
        korean_pronunciation: '풋 투 데쓰',
        part_of_speech: '동사구',
        definition_korean: '죽이다, 제거하다',
        usage_note: '비유적으로 죄를 완전히 제거하라는 강력한 명령'
      },
      {
        word: 'sexual immorality',
        ipa_pronunciation: '/ˈsɛkʃuəl ɪˌmɔːrəˈlɪti/',
        korean_pronunciation: '섹슈얼 이모랠리티',
        part_of_speech: '명사구',
        definition_korean: '성적 부도덕, 음행',
        usage_note: '결혼 관계 밖의 모든 성적 행위'
      },
      {
        word: 'impurity',
        ipa_pronunciation: '/ɪmˈpjʊrəti/',
        korean_pronunciation: '임퓨어리티',
        part_of_speech: '명사',
        definition_korean: '부정함, 더러움',
        usage_note: '도덕적/영적 오염'
      },
      {
        word: 'lust',
        ipa_pronunciation: '/lʌst/',
        korean_pronunciation: '러스트',
        part_of_speech: '명사',
        definition_korean: '정욕, 육체적 욕망',
        usage_note: '통제되지 않는 성적 욕구'
      },
      {
        word: 'greed',
        ipa_pronunciation: '/ɡriːd/',
        korean_pronunciation: '그리드',
        part_of_speech: '명사',
        definition_korean: '탐욕, 탐심',
        usage_note: '물질에 대한 끝없는 욕망'
      },
      {
        word: 'idolatry',
        ipa_pronunciation: '/aɪˈdɒlətri/',
        korean_pronunciation: '아이돌러트리',
        part_of_speech: '명사',
        definition_korean: '우상숭배',
        usage_note: '하나님 대신 다른 것을 최고 가치로 삼는 것'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '"그러므로"는 1-4절의 신학적 선언에서 윤리적 명령으로의 전환을 표시합니다. 신자가 이미 그리스도와 함께 죽고 살아났다면(3절), 옛 본성에 속한 것들도 죽여야 한다는 논리입니다. "죽이십시오"라는 극단적 표현은 죄와의 타협 없는 투쟁을 요구합니다. 바울이 나열한 다섯 가지 죄는 대체로 성적 영역(처음 셋)에서 물질적 영역(탐욕)으로 진행됩니다. 특히 "탐욕"을 "우상숭배"와 동일시하는 것은 에베소서 5:5에도 나타나며, 물질에 대한 욕망이 하나님의 자리를 차지한다는 통찰입니다. 골로새의 이방인 배경을 고려할 때, 이러한 죄들은 그들의 과거 삶을 특징지었을 것입니다.'
    },
    korean_translation: {
      natural_translation: '그러므로 여러분의 땅의 본성에 속한 것은 무엇이든지 죽이십시오. 곧 음행, 부정함, 정욕, 악한 욕망, 그리고 우상숭배인 탐욕을 죽이십시오.'
    },
    special_explanation: {
      explanation_type: '윤리적 급진성',
      content: '"죽이십시오"(put to death)라는 표현은 단순한 억제나 절제가 아니라 완전한 제거를 의미합니다. 이는 예수님의 "네 오른눈이 너를 범죄하게 하거든 빼어 버리라"(마 5:29)는 급진적 윤리와 일맥상통합니다. 바울은 죄를 "관리"하거나 "통제"하라고 하지 않고 "죽이라"고 합니다. 또한 탐욕을 우상숭배와 동일시함으로써, 물질주의가 단순한 윤리적 문제가 아니라 신학적 배교임을 보여줍니다.'
    }
  },

  // Colossians 3:6
  {
    reference: 'Colossians 3:6',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '이유절 - 심판 경고',
        original_text: 'Because of these, the wrath of God is coming',
        korean_translation: '이런 것들 때문에 하나님의 진노가 임합니다',
        grammatical_explanation: '현재 진행형(is coming)으로 확실하고 임박한 미래 심판 표현. "because of"로 인과관계 명시'
      }
    ],
    vocabulary: [
      {
        word: 'wrath',
        ipa_pronunciation: '/ræθ/',
        korean_pronunciation: '래쓰',
        part_of_speech: '명사',
        definition_korean: '진노, 분노',
        usage_note: '하나님의 의로운 심판'
      },
      {
        word: 'coming',
        ipa_pronunciation: '/ˈkʌmɪŋ/',
        korean_pronunciation: '커밍',
        part_of_speech: '동사(현재분사)',
        definition_korean: '오고 있는',
        usage_note: '현재 진행형으로 확실성과 임박함을 동시에 표현'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '5절에서 나열한 죄들에 대한 하나님의 반응을 설명합니다. "하나님의 진노"는 구약의 심판 전통을 이어받은 개념으로, 하나님의 거룩하심이 죄에 대해 보이는 의로운 반응입니다. 현재 진행형 "is coming"은 이 심판이 현재 진행 중이면서 동시에 종말론적으로 완성될 것임을 암시합니다. 로마서 1:18-32에서 바울은 하나님의 진노가 이미 불의를 행하는 자들에게 나타나고 있다고 말합니다. 이 경고는 단순히 위협이 아니라 신자들이 왜 5절의 죄들을 죽여야 하는지에 대한 심각한 동기를 제공합니다. 골로새 신자들은 과거에 이러한 죄들 가운데 살았지만(7절), 이제 그리스도 안에서 그 진노에서 구원받았습니다.'
    },
    korean_translation: {
      natural_translation: '이런 것들 때문에 하나님의 진노가 임합니다.'
    },
    special_explanation: {
      explanation_type: '신학적 개념',
      content: '하나님의 진노는 감정적 폭발이 아니라 죄에 대한 하나님의 일관되고 의로운 반응입니다. 바울은 이를 현재 진행형으로 표현함으로써, 심판이 단지 먼 미래의 사건이 아니라 현재 작동하고 있는 하나님의 도덕적 질서임을 보여줍니다. 동시에 종말론적 차원에서 이 진노는 최후 심판 때 완전히 드러날 것입니다.'
    }
  },

  // Colossians 3:7
  {
    reference: 'Colossians 3:7',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '과거 행동 - 회상',
        original_text: 'You used to walk in these ways, in the life you once lived',
        korean_translation: '여러분도 전에 그런 삶을 살 때에는 그렇게 행하였습니다',
        grammatical_explanation: '"used to"로 과거의 습관적 행동 표현. "walk"는 삶의 방식을 나타내는 히브리적 표현'
      }
    ],
    vocabulary: [
      {
        word: 'walk',
        ipa_pronunciation: '/wɔːk/',
        korean_pronunciation: '워크',
        part_of_speech: '동사',
        definition_korean: '걷다; 행하다, 살아가다',
        usage_note: '성경에서 삶의 방식과 행동 양식을 나타내는 비유적 표현'
      },
      {
        word: 'used to',
        ipa_pronunciation: '/juːst tuː/',
        korean_pronunciation: '유스트 투',
        part_of_speech: '조동사구',
        definition_korean: '과거에 ~하곤 했다',
        usage_note: '과거의 습관이나 상태를 나타내며, 현재는 더 이상 그렇지 않음을 암시'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 골로새 신자들의 과거를 회상시킵니다. "행하다"로 번역된 "walk"는 성경에서 자주 사용되는 히브리적 표현으로, 단순한 행동이 아니라 전체적인 삶의 방식을 의미합니다. "used to"라는 표현은 과거의 습관적 행동을 나타내면서, 동시에 그것이 더 이상 현재의 상태가 아님을 암시합니다. 이는 회심 이전과 이후의 명확한 단절을 강조합니다. 골로새 교회는 주로 이방인 신자들로 구성되었기에, 5절의 죄목들은 그들의 과거 삶을 정확히 묘사합니다. 바울은 이 회상을 통해 신자들에게 과거와의 결별과 새로운 정체성을 확인시키고자 합니다.'
    },
    korean_translation: {
      natural_translation: '여러분도 전에 그런 삶을 살 때에는 그렇게 행하였습니다.'
    },
    special_explanation: {
      explanation_type: '문체적 기능',
      content: '이 구절은 과거와 현재의 대조를 통해 회심의 변화를 강조합니다. "used to walk"는 과거의 지속적 행동 패턴을 나타내며, 8절의 "but now"(그러나 이제는)와 대조를 이룹니다. 이러한 "과거-현재" 대조 구조는 바울 서신에서 자주 나타나며(엡 2:1-10, 딛 3:3-7), 복음이 가져온 근본적 변화를 강조하는 효과적인 수사법입니다.'
    }
  },

  // Colossians 3:8
  {
    reference: 'Colossians 3:8',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '대조적 명령 - 현재의 과제',
        original_text: 'But now you must also rid yourselves of all such things as these',
        korean_translation: '그러나 이제 여러분은 이 모든 것을 벗어 버려야 합니다',
        grammatical_explanation: '"But now"로 과거(7절)와 현재의 명확한 대조. "must"로 의무 강조. "rid yourselves"는 능동적 행동 요구'
      },
      {
        sequence_order: 2,
        semantic_classification: '예시 나열 - 언어적 죄목들',
        original_text: 'anger, rage, malice, slander, and filthy language from your lips',
        korean_translation: '분노, 격분, 악의, 비방, 그리고 여러분의 입에서 나오는 추악한 말',
        grammatical_explanation: '다섯 가지 죄를 나열하되, 5절과 달리 주로 언어와 관계적 죄에 초점'
      }
    ],
    vocabulary: [
      {
        word: 'rid',
        ipa_pronunciation: '/rɪd/',
        korean_pronunciation: '리드',
        part_of_speech: '동사',
        definition_korean: '제거하다, 벗어나다',
        usage_note: '"get rid of"는 완전히 제거하는 것을 의미'
      },
      {
        word: 'anger',
        ipa_pronunciation: '/ˈæŋɡər/',
        korean_pronunciation: '앵거',
        part_of_speech: '명사',
        definition_korean: '분노, 노여움',
        usage_note: '지속적이고 억눌린 분노'
      },
      {
        word: 'rage',
        ipa_pronunciation: '/reɪdʒ/',
        korean_pronunciation: '레이지',
        part_of_speech: '명사',
        definition_korean: '격분, 격노',
        usage_note: '폭발적이고 통제되지 않는 분노'
      },
      {
        word: 'malice',
        ipa_pronunciation: '/ˈmælɪs/',
        korean_pronunciation: '매리스',
        part_of_speech: '명사',
        definition_korean: '악의, 원한',
        usage_note: '타인에게 해를 끼치려는 의도적 악의'
      },
      {
        word: 'slander',
        ipa_pronunciation: '/ˈslɑːndər/',
        korean_pronunciation: '슬랜더',
        part_of_speech: '명사',
        definition_korean: '비방, 중상',
        usage_note: '타인의 명예를 훼손하는 거짓 말'
      },
      {
        word: 'filthy language',
        ipa_pronunciation: '/ˈfɪlθi ˈlæŋɡwɪdʒ/',
        korean_pronunciation: '필씨 랭귀지',
        part_of_speech: '명사구',
        definition_korean: '추악한 말, 음란한 언어',
        usage_note: '도덕적으로 더럽고 부적절한 말'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '"그러나 이제"(But now)는 7절의 과거와 명확한 대조를 이룹니다. 5절이 주로 성적/물질적 죄에 초점을 맞췄다면, 8절은 관계적이고 언어적인 죄들을 다룹니다. "벗어 버리라"는 표현은 옷을 벗는 이미지로, 9절의 "옛 사람을 벗어 버렸으니"와 연결됩니다. 나열된 다섯 가지 죄는 점층적 구조를 보입니다: "분노"(내적 감정)에서 "격분"(외적 표출)으로, "악의"(해치려는 의도)에서 "비방"(언어적 공격)으로, 마지막으로 "추악한 말"(일반적 언어 윤리)에 이릅니다. 이는 내면의 감정이 언어적 죄로 발전하는 과정을 보여줍니다. 야고보서 3장의 혀에 대한 경고와 연결됩니다. 신앙 공동체 내에서 이러한 언어적 죄는 치명적 파괴력을 가지므로, 바울은 이를 강력히 경고합니다.'
    },
    korean_translation: {
      natural_translation: '그러나 이제 여러분은 이 모든 것도 벗어 버려야 합니다. 곧 분노, 격분, 악의, 비방, 그리고 여러분의 입에서 나오는 추악한 말을 벗어 버리십시오.'
    },
    special_explanation: {
      explanation_type: '죄의 분류',
      content: '바울은 5절과 8절에서 두 범주의 죄를 다룹니다. 5절은 주로 개인적이고 육체적인 죄(성적 죄와 탐욕), 8절은 관계적이고 언어적인 죄입니다. 이 이중 구조는 신자의 삶 전체 영역(개인적/공동체적, 행동/언어)을 포괄합니다. 특히 언어적 죄를 강조하는 것은, 신앙 공동체에서 말이 얼마나 중요한지를 보여줍니다. "입에서 나오는"이라는 표현은 예수님의 "입에서 나오는 것이 사람을 더럽게 한다"(마 15:11)는 가르침을 상기시킵니다.'
    }
  },

  // Colossians 3:9
  {
    reference: 'Colossians 3:9',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '부정 명령 - 거짓말 금지',
        original_text: 'Do not lie to each other',
        korean_translation: '서로에게 거짓말하지 마십시오',
        grammatical_explanation: '명령형 부정문으로 강력한 금지. "each other"로 공동체 내 관계 강조'
      },
      {
        sequence_order: 2,
        semantic_classification: '이유절 - 과거 행동',
        original_text: 'since you have taken off your old self with its practices',
        korean_translation: '여러분이 옛 사람을 그 행실과 함께 벗어 버렸기 때문입니다',
        grammatical_explanation: '완료형(have taken off)으로 이미 완료된 행동. "since"로 명령의 근거 제시'
      }
    ],
    vocabulary: [
      {
        word: 'lie',
        ipa_pronunciation: '/laɪ/',
        korean_pronunciation: '라이',
        part_of_speech: '동사',
        definition_korean: '거짓말하다',
        usage_note: '진실을 왜곡하거나 속이는 행위'
      },
      {
        word: 'taken off',
        ipa_pronunciation: '/ˈteɪkən ɒf/',
        korean_pronunciation: '테이큰 오프',
        part_of_speech: '동사구(과거분사)',
        definition_korean: '벗어 버리다',
        usage_note: '옷을 벗는 이미지로 완전한 분리를 의미'
      },
      {
        word: 'old self',
        ipa_pronunciation: '/əʊld sɛlf/',
        korean_pronunciation: '올드 셀프',
        part_of_speech: '명사구',
        definition_korean: '옛 사람, 구인',
        usage_note: '그리스도를 만나기 전의 옛 정체성'
      },
      {
        word: 'practices',
        ipa_pronunciation: '/ˈpræktɪsɪz/',
        korean_pronunciation: '프랙티시즈',
        part_of_speech: '명사(복수)',
        definition_korean: '행실, 관행',
        usage_note: '습관적 행동 패턴'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '거짓말에 대한 금지는 8절의 언어적 죄 목록을 마무리하면서, 동시에 10절의 "새 사람을 입었다"는 긍정적 선언으로 전환하는 다리 역할을 합니다. "서로에게"라는 표현은 신앙 공동체 내의 관계를 강조하며, 진실성이 공동체의 기초임을 시사합니다. "옛 사람을 벗어 버렸다"는 표현은 8절의 "벗어 버리라"는 명령과 달리 이미 완료된 사건(회심과 세례)을 가리킵니다. 이는 바울 신학의 특징적 긴장입니다: 신자는 이미 옛 사람을 벗었지만(직설법, 선언), 여전히 그 행실들을 벗어야 합니다(명령법, 권면). 이는 "이미와 아직"(already-not yet)의 긴장을 보여줍니다. "그 행실과 함께"라는 표현은 옛 정체성과 그에 따른 행동이 불가분의 관계임을 나타냅니다.'
    },
    korean_translation: {
      natural_translation: '서로에게 거짓말하지 마십시오. 여러분이 옛 사람을 그 행실과 함께 벗어 버렸기 때문입니다.'
    },
    special_explanation: {
      explanation_type: '신학적 긴장',
      content: '이 구절은 바울 신학의 핵심적 긴장을 보여줍니다. 신자는 그리스도와의 연합을 통해 "이미" 옛 사람을 벗었지만(완료된 사실, 직설법), "아직" 그 행실들을 지속적으로 벗어야 합니다(계속되는 과제, 명령법). 이는 칭의(이미 의롭게 됨)와 성화(점진적으로 거룩해짐)의 관계를 보여줍니다. 신자의 정체성 변화(옛 사람 → 새 사람)는 이미 일어났지만, 그 정체성에 합당한 삶의 실천은 지속적 과제입니다.'
    }
  },

  // Colossians 3:10
  {
    reference: 'Colossians 3:10',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '긍정적 선언 - 새 정체성',
        original_text: 'and have put on the new self',
        korean_translation: '그리고 새 사람을 입었습니다',
        grammatical_explanation: '완료형(have put on)으로 이미 일어난 사건. 9절 "벗었다"와 평행 구조'
      },
      {
        sequence_order: 2,
        semantic_classification: '관계절 - 새 사람의 특성',
        original_text: 'which is being renewed in knowledge in the image of its Creator',
        korean_translation: '이 새 사람은 자기를 창조하신 분의 형상을 따라 지식에 있어서 새롭게 되고 있습니다',
        grammatical_explanation: '현재 수동 진행형(is being renewed)으로 지속적 변화 과정 표현. "in the image of"로 창조 신학 연결'
      }
    ],
    vocabulary: [
      {
        word: 'put on',
        ipa_pronunciation: '/pʊt ɒn/',
        korean_pronunciation: '풋 온',
        part_of_speech: '동사구',
        definition_korean: '입다',
        usage_note: '옷을 입는 이미지로 새로운 정체성을 취함'
      },
      {
        word: 'new self',
        ipa_pronunciation: '/njuː sɛlf/',
        korean_pronunciation: '뉴 셀프',
        part_of_speech: '명사구',
        definition_korean: '새 사람, 신인',
        usage_note: '그리스도 안에서 얻은 새로운 정체성'
      },
      {
        word: 'renewed',
        ipa_pronunciation: '/rɪˈnjuːd/',
        korean_pronunciation: '리뉴드',
        part_of_speech: '동사(과거분사)',
        definition_korean: '새롭게 되다, 갱신되다',
        usage_note: '지속적인 변화와 성장의 과정'
      },
      {
        word: 'knowledge',
        ipa_pronunciation: '/ˈnɒlɪdʒ/',
        korean_pronunciation: '놀리지',
        part_of_speech: '명사',
        definition_korean: '지식, 앎',
        usage_note: '하나님과 그분의 뜻에 대한 깊은 이해'
      },
      {
        word: 'image',
        ipa_pronunciation: '/ˈɪmɪdʒ/',
        korean_pronunciation: '이미지',
        part_of_speech: '명사',
        definition_korean: '형상, 모습',
        usage_note: '창세기 1:27의 "하나님의 형상"을 환기'
      },
      {
        word: 'Creator',
        ipa_pronunciation: '/kriˈeɪtər/',
        korean_pronunciation: '크리에이터',
        part_of_speech: '명사',
        definition_korean: '창조주',
        usage_note: '하나님을 가리키는 호칭'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '9절의 "벗어 버렸다"와 평행을 이루는 "입었다"는 세례의 이미지를 연상시킵니다(갈 3:27 "그리스도로 옷 입었다"). 그러나 "벗었다"가 완료된 사건이라면, "입은" 새 사람은 "지속적으로 새롭게 되고 있다"는 현재 진행형으로 표현됩니다. 이는 성화의 과정을 나타냅니다. "지식에 있어서"라는 표현은 골로새의 거짓 교사들이 강조하던 특수한 영지(gnosis)에 대한 반박일 수 있습니다. 참된 지식은 하나님과의 관계에서 자라나는 것입니다. "창조주의 형상을 따라"는 창세기 1:27의 창조 서사를 환기시키며, 그리스도 안에서의 새 창조가 타락 이전의 하나님 형상을 회복하는 과정임을 시사합니다. 바울은 고린도후서 3:18에서도 신자들이 "영광에서 영광으로" 주의 형상으로 변화된다고 말합니다. 이 갱신의 과정은 인간의 노력이 아니라 하나님의 사역입니다(수동태 "is being renewed").'
    },
    korean_translation: {
      natural_translation: '그리고 새 사람을 입었습니다. 이 새 사람은 자기를 창조하신 분의 형상을 따라 지식에 있어서 새롭게 되고 있습니다.'
    },
    special_explanation: {
      explanation_type: '창조 신학',
      content: '바울은 구원을 "새 창조"로 이해합니다. "창조주의 형상을 따라"는 표현은 창세기 1:27의 창조 서사를 환기시키며, 그리스도 안에서 타락으로 손상된 하나님의 형상이 회복되고 있음을 나타냅니다. 고린도후서 5:17 "그리스도 안에 있으면 새로운 피조물"과 연결됩니다. 이 새 창조는 일회적 사건(입었다, 완료형)이면서 동시에 지속적 과정(새롭게 되고 있다, 현재 진행형)입니다. "지식"이라는 표현은 단순한 정보가 아니라 하나님을 아는 관계적 지식(호 6:6)을 의미합니다.'
    }
  },

  // Colossians 3:11
  {
    reference: 'Colossians 3:11',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '선언 - 구분의 철폐',
        original_text: 'Here there is no Gentile or Jew, circumcised or uncircumcised, barbarian, Scythian, slave or free',
        korean_translation: '여기에는 헬라인이나 유대인이나, 할례자나 무할례자나, 야만인이나 스구디아인이나, 종이나 자유인이 없습니다',
        grammatical_explanation: '네 쌍의 대조를 나열하여 모든 사회적/종교적 구분의 철폐 선언. "Here"는 그리스도 안의 새 공동체 지시'
      },
      {
        sequence_order: 2,
        semantic_classification: '긍정적 선언 - 그리스도의 우월성',
        original_text: 'but Christ is all, and is in all',
        korean_translation: '오직 그리스도만이 모든 것이며 모든 이 안에 계십니다',
        grammatical_explanation: '"but"으로 대조하며 그리스도의 절대적 중심성 선언. "all"의 반복으로 포괄성 강조'
      }
    ],
    vocabulary: [
      {
        word: 'Gentile',
        ipa_pronunciation: '/ˈdʒɛntaɪl/',
        korean_pronunciation: '젠타일',
        part_of_speech: '명사',
        definition_korean: '이방인, 비유대인',
        usage_note: '유대인이 아닌 모든 민족'
      },
      {
        word: 'circumcised',
        ipa_pronunciation: '/ˈsɜːrkəmsaɪzd/',
        korean_pronunciation: '서컴사이즈드',
        part_of_speech: '형용사',
        definition_korean: '할례받은',
        usage_note: '유대교 언약의 표징'
      },
      {
        word: 'barbarian',
        ipa_pronunciation: '/bɑːrˈbɛəriən/',
        korean_pronunciation: '바베리언',
        part_of_speech: '명사',
        definition_korean: '야만인',
        usage_note: '헬라어를 하지 못하는 문화적으로 열등하다고 여겨진 사람'
      },
      {
        word: 'Scythian',
        ipa_pronunciation: '/ˈsɪθiən/',
        korean_pronunciation: '시씨언',
        part_of_speech: '명사',
        definition_korean: '스구디아인',
        usage_note: '흑해 북부의 유목민족으로 극도로 야만적이라고 여겨짐'
      },
      {
        word: 'slave',
        ipa_pronunciation: '/sleɪv/',
        korean_pronunciation: '슬레이브',
        part_of_speech: '명사',
        definition_korean: '노예, 종',
        usage_note: '자유가 없는 사람'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 그리스도 안의 새 창조(10절)가 가져온 가장 혁명적 결과를 선언합니다. "여기"는 그리스도 안의 새 공동체를 가리킵니다. 네 쌍의 대조는 당시 세계의 주요 구분선들을 포괄합니다: (1) 헬라인/유대인은 종교-민족적 구분, (2) 할례자/무할례자는 언약적 구분, (3) 야만인/스구디아인은 문화적 구분(스구디아인은 야만인 중에서도 가장 미개하다고 여겨짐), (4) 종/자유인은 사회경제적 구분입니다. 바울은 갈라디아서 3:28에서도 유사한 선언을 했지만("유대인이나 헬라인이나, 종이나 자유인이나, 남자나 여자나"), 여기서는 특히 문화적 우월감("야만인, 스구디아인")을 추가하여 더욱 포괄적입니다. "그리스도만이 모든 것"이라는 선언은 그리스도께서 모든 사회적 구분을 초월하시며, 신자 공동체의 유일한 정체성과 통일성의 근거가 되심을 의미합니다. "모든 이 안에 계시다"는 그리스도께서 각 신자 안에 내주하심으로써 모든 구분이 무의미해짐을 강조합니다.'
    },
    korean_translation: {
      natural_translation: '여기에는 헬라인이나 유대인이나, 할례자나 무할례자나, 야만인이나 스구디아인이나, 종이나 자유인의 구분이 없습니다. 오직 그리스도만이 모든 것이시며 모든 이 안에 계십니다.'
    },
    special_explanation: {
      explanation_type: '사회적 혁명성',
      content: '이 구절은 초대교회의 급진적 평등 사상을 보여줍니다. 1세기 로마 사회는 엄격한 계급과 차별이 지배했지만, 그리스도 안에서는 모든 구분이 철폐됩니다. 특히 "스구디아인"을 언급한 것은 당시 가장 멸시받던 집단까지 포함한다는 의미로, 어떤 사회적 배경의 사람도 그리스도 안에서 동등하다는 선언입니다. 이는 단순히 영적 평등만이 아니라 공동체 내에서의 실제적 관계 변화를 요구합니다. 골로새서 4:1과 빌레몬서에서 바울이 노예 제도에 대해 다루는 방식도 이 원리에 근거합니다.'
    }
  },

  // Colossians 3:12
  {
    reference: 'Colossians 3:12',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '호격 - 신자의 정체성',
        original_text: 'Therefore, as God\'s chosen people, holy and dearly loved',
        korean_translation: '그러므로 하나님께서 선택하신 사람들, 거룩하고 사랑받는 자들로서',
        grammatical_explanation: '"Therefore"로 앞 내용과 연결. 세 가지 정체성 표현(선택된, 거룩한, 사랑받는)으로 신자 규정'
      },
      {
        sequence_order: 2,
        semantic_classification: '명령 - 덕목의 실천',
        original_text: 'clothe yourselves with compassion, kindness, humility, gentleness and patience',
        korean_translation: '긍휼, 자비, 겸손, 온유, 인내로 옷 입으십시오',
        grammatical_explanation: '명령형 "clothe yourselves"와 다섯 가지 덕목 나열. "옷 입다" 은유는 10절 "새 사람을 입었다"와 연결'
      }
    ],
    vocabulary: [
      {
        word: 'chosen',
        ipa_pronunciation: '/ˈtʃəʊzən/',
        korean_pronunciation: '초즌',
        part_of_speech: '형용사(과거분사)',
        definition_korean: '선택된, 택함받은',
        usage_note: '하나님의 주권적 선택을 나타냄'
      },
      {
        word: 'holy',
        ipa_pronunciation: '/ˈhəʊli/',
        korean_pronunciation: '홀리',
        part_of_speech: '형용사',
        definition_korean: '거룩한, 성스러운',
        usage_note: '하나님께 구별된 상태'
      },
      {
        word: 'dearly loved',
        ipa_pronunciation: '/ˈdɪrli lʌvd/',
        korean_pronunciation: '디얼리 러브드',
        part_of_speech: '형용사구',
        definition_korean: '사랑받는',
        usage_note: '하나님의 깊은 애정을 받는'
      },
      {
        word: 'compassion',
        ipa_pronunciation: '/kəmˈpæʃən/',
        korean_pronunciation: '컴패션',
        part_of_speech: '명사',
        definition_korean: '긍휼, 동정심',
        usage_note: '타인의 고통에 대한 깊은 공감과 반응'
      },
      {
        word: 'kindness',
        ipa_pronunciation: '/ˈkaɪndnəs/',
        korean_pronunciation: '카인드니스',
        part_of_speech: '명사',
        definition_korean: '자비, 친절',
        usage_note: '타인을 향한 선한 태도와 행동'
      },
      {
        word: 'humility',
        ipa_pronunciation: '/hjuːˈmɪlɪti/',
        korean_pronunciation: '휴밀리티',
        part_of_speech: '명사',
        definition_korean: '겸손, 겸비',
        usage_note: '자신을 낮추는 태도'
      },
      {
        word: 'gentleness',
        ipa_pronunciation: '/ˈdʒɛntlnəs/',
        korean_pronunciation: '젠틀니스',
        part_of_speech: '명사',
        definition_korean: '온유, 부드러움',
        usage_note: '힘을 절제하여 부드럽게 대하는 태도'
      },
      {
        word: 'patience',
        ipa_pronunciation: '/ˈpeɪʃəns/',
        korean_pronunciation: '페이션스',
        part_of_speech: '명사',
        definition_korean: '인내, 오래 참음',
        usage_note: '어려움이나 도발에도 침착함을 유지'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '"그러므로"는 1-11절의 신학적 선언에서 실천적 윤리로의 전환을 표시합니다. 바울은 먼저 신자의 정체성을 세 가지로 규정합니다: (1) "선택받은 자들"은 이스라엘에게 사용되던 언어(신 7:6)를 교회에 적용하여 신약의 하나님 백성임을 선언, (2) "거룩한"은 하나님께 구별된 상태, (3) "사랑받는"은 하나님의 애정의 대상임을 강조합니다. 이 정체성은 명령의 근거가 됩니다: "이런 자들이므로" 특정한 방식으로 살아야 합니다. "옷 입으십시오"라는 표현은 8절의 "벗어 버리라"와 대조를 이루며, 10절의 "새 사람을 입었다"를 구체화합니다. 나열된 다섯 가지 덕목은 5절과 8절의 부정적 죄목들과 대조됩니다: (1) 긍휼 - 타인의 필요에 대한 깊은 공감, (2) 자비 - 선한 행동으로의 표현, (3) 겸손 - 빌립보서 2:3-8의 그리스도의 겸손을 본받음, (4) 온유 - 마태복음 5:5의 팔복과 연결, (5) 인내 - 관계에서 오래 참음. 이 덕목들은 모두 관계적이며, 공동체 내에서 실천되는 것들입니다.'
    },
    korean_translation: {
      natural_translation: '그러므로 하나님께서 선택하신 사람들, 거룩하고 사랑받는 자들로서, 긍휼과 자비와 겸손과 온유와 인내로 옷 입으십시오.'
    },
    special_explanation: {
      explanation_type: '정체성과 윤리의 연결',
      content: '바울의 윤리는 항상 정체성에 기초합니다. "그러므로"는 단순한 논리적 연결이 아니라 "당신이 이런 사람이므로 이렇게 살아야 한다"는 신학적 명령법입니다. 선택받고, 거룩하며, 사랑받는 자들이라는 정체성은 은혜의 선물이지만, 동시에 그에 합당한 삶을 살아야 할 책임을 수반합니다. 나열된 덕목들은 갈라디아서 5:22-23의 "성령의 열매"와 유사하며, 인간의 노력이 아닌 하나님의 은혜로 가능한 성품들입니다. "옷 입다"는 은유는 이러한 덕목들이 외적으로 드러나는 삶의 방식이 되어야 함을 시사합니다.'
    }
  },

  // Colossians 3:13
  {
    reference: 'Colossians 3:13',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '명령 - 관계적 태도',
        original_text: 'Bear with each other and forgive one another if any of you has a grievance against someone',
        korean_translation: '서로 용납하고, 누가 누구에게 불만이 있거든 서로 용서하십시오',
        grammatical_explanation: '두 개의 명령형(Bear, forgive)과 조건절. "each other"와 "one another"로 상호성 강조'
      },
      {
        sequence_order: 2,
        semantic_classification: '비교절 - 용서의 모델',
        original_text: 'Forgive as the Lord forgave you',
        korean_translation: '주께서 여러분을 용서하신 것같이 여러분도 용서하십시오',
        grammatical_explanation: '"as"로 주님의 용서를 모델로 제시. 단순 과거(forgave)로 완료된 사건'
      }
    ],
    vocabulary: [
      {
        word: 'bear with',
        ipa_pronunciation: '/bɛr wɪð/',
        korean_pronunciation: '베어 위드',
        part_of_speech: '동사구',
        definition_korean: '참다, 용납하다',
        usage_note: '타인의 약점이나 결점을 인내하며 받아들임'
      },
      {
        word: 'forgive',
        ipa_pronunciation: '/fərˈɡɪv/',
        korean_pronunciation: '퍼기브',
        part_of_speech: '동사',
        definition_korean: '용서하다',
        usage_note: '잘못이나 빚을 면제해 줌'
      },
      {
        word: 'grievance',
        ipa_pronunciation: '/ˈɡriːvəns/',
        korean_pronunciation: '그리번스',
        part_of_speech: '명사',
        definition_korean: '불만, 원한',
        usage_note: '정당하다고 여기는 불평이나 불만 사항'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '12절의 덕목 목록을 구체적 관계 윤리로 적용합니다. "서로 용납하라"는 표현은 완벽하지 않은 형제자매들과 함께 살아가는 공동체 현실을 인정합니다. "용서하십시오"는 단순한 감정이 아니라 의지적 행동을 요구하는 명령입니다. 조건절 "누가 누구에게 불만이 있거든"은 공동체 내 갈등이 불가피함을 인정하면서도, 그것이 용서의 장애가 되어서는 안 됨을 시사합니다. 용서의 근거는 "주께서 여러분을 용서하신 것같이"라는 비교절에 있습니다. 단순 과거 "forgave"는 그리스도의 십자가 사건을 가리키며, 이는 일회적이고 완전한 용서였습니다. 바울은 에베소서 4:32에서도 동일한 원리를 가르칩니다: "서로 친절하게 하며... 용서하기를 하나님이 그리스도 안에서 너희를 용서하심과 같이 하라." 이는 마태복음 18:21-35의 무자비한 종의 비유와 연결되며, 용서받은 자가 용서하지 못하는 것은 은혜를 이해하지 못한 것임을 보여줍니다. "주"(Lord)는 대부분 사본에서 "그리스도"로 되어 있으며, 그리스도의 용서가 신자 공동체 용서의 원형이자 능력의 원천임을 강조합니다.'
    },
    korean_translation: {
      natural_translation: '서로 용납하고, 누가 누구에게 불만이 있거든 서로 용서하십시오. 주께서 여러분을 용서하신 것같이 여러분도 용서하십시오.'
    },
    special_explanation: {
      explanation_type: '용서 신학',
      content: '바울의 용서 명령은 단순한 도덕적 권고가 아니라 복음의 핵심에서 나옵니다. "주께서 여러분을 용서하신 것같이"라는 표현은 두 가지 의미를 담고 있습니다: (1) 모델 - 그리스도의 용서가 우리 용서의 본보기, (2) 동기 - 이미 큰 용서를 받았으므로 다른 이를 용서해야 함. 이는 "은혜의 순환"을 나타내며, 받은 은혜가 다른 이에게 흘러가야 함을 강조합니다. "서로"(each other, one another)의 반복은 용서가 일방적이 아니라 상호적임을 보여주며, 공동체의 모든 구성원이 용서를 주고받는 관계에 있음을 시사합니다.'
    }
  }
]

async function main() {
  console.log('골로새서 3:1-13 분석 결과를 데이터베이스에 저장합니다...\n')

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
    await new Promise(resolve => setTimeout(resolve, 1000))
  }

  console.log('\n=== 저장 완료 ===')
  console.log(`성공: ${successCount}개 구절`)
  console.log(`실패: ${failCount}개 구절`)

  process.exit(failCount > 0 ? 1 : 0)
}

main()
