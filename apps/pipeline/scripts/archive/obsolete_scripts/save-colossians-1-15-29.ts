import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

const analysisData: AnalysisData[] = [
  // Colossians 1:15
  {
    reference: 'Colossians 1:15',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '정체성 선언',
        original_text: 'The Son is the image of the invisible God',
        korean_translation: '아들은 보이지 않는 하나님의 형상이시다',
        grammatical_explanation: '주격 보어(predicate nominative)로 "the image"를 사용하여 아들의 본질적 동일성을 표현'
      },
      {
        sequence_order: 2,
        semantic_classification: '지위 선언',
        original_text: 'the firstborn over all creation',
        korean_translation: '모든 창조물의 첫째이시다',
        grammatical_explanation: '"firstborn"은 시간적 첫째가 아닌 지위와 우월성을 나타내는 칭호'
      }
    ],
    vocabulary: [
      {
        word: 'image',
        ipa_pronunciation: '/ˈɪmɪdʒ/',
        korean_pronunciation: '이미지',
        part_of_speech: '명사',
        definition_korean: '형상, 모습',
        usage_note: '헬라어 "eikon"의 번역으로, 완전한 재현과 본질적 동일성을 의미'
      },
      {
        word: 'invisible',
        ipa_pronunciation: '/ɪnˈvɪzəbl/',
        korean_pronunciation: '인비저블',
        part_of_speech: '형용사',
        definition_korean: '보이지 않는',
        usage_note: '하나님의 초월적 본성을 나타냄'
      },
      {
        word: 'firstborn',
        ipa_pronunciation: '/ˈfɜːrstbɔːrn/',
        korean_pronunciation: '퍼스트본',
        part_of_speech: '명사/형용사',
        definition_korean: '첫째, 맏이',
        usage_note: '시간적 첫째가 아닌 지위상의 우월성과 상속권을 나타내는 칭호'
      },
      {
        word: 'creation',
        ipa_pronunciation: '/kriˈeɪʃən/',
        korean_pronunciation: '크리에이션',
        part_of_speech: '명사',
        definition_korean: '창조, 창조물',
        usage_note: '모든 피조된 세계를 포괄적으로 지칭'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '이 구절은 그리스도의 신성과 창조주로서의 지위를 선언하는 그리스도 찬가(1:15-20)의 시작입니다. "형상"(image)이라는 단어는 그리스도가 보이지 않는 하나님을 완전하게 드러내는 분임을 강조합니다. "첫째"(firstborn)는 시간적 선후가 아니라 지위와 권위를 나타내는 용어로, 구약에서 장자가 가정에서 가장 높은 지위와 상속권을 가졌던 것처럼, 그리스도가 모든 창조물 위에 최고의 지위를 가지심을 의미합니다. 바울은 이 표현을 통해 골로새 교회에 침투한 이단적 가르침(영지주의적 요소)에 대항하여 그리스도의 절대적 우월성을 강조합니다.',
      cross_references: ['John 1:18', 'Hebrews 1:3', '2 Corinthians 4:4', 'Psalm 89:27']
    },
    korean_translation: {
      natural_translation: '그 아들은 보이지 않는 하나님의 형상이시며, 모든 창조물보다 먼저 나신 분입니다.',
      translation_notes: '"firstborn over"를 "먼저 나신"으로 번역했으나, 이는 시간적 의미가 아니라 지위상의 우월성을 나타냄'
    },
    special_explanation: {
      explanation_type: '신학적 중요성',
      content: '이 구절은 초대 교회의 그리스도론 논쟁에서 핵심적인 역할을 했습니다. "firstborn"이라는 표현 때문에 일부는 그리스도가 피조물이라고 주장했으나(아리우스주의), 정통 기독교는 이 단어가 지위와 우월성을 나타내는 칭호임을 확립했습니다. 이는 시편 89:27의 용법과 일치합니다.',
      examples: ['Psalm 89:27: "I will also appoint him to be my firstborn, the most exalted of the kings of the earth."']
    }
  },

  // Colossians 1:16
  {
    reference: 'Colossians 1:16',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '창조의 원인',
        original_text: 'For in him all things were created',
        korean_translation: '그 안에서 만물이 창조되었기 때문이다',
        grammatical_explanation: '"For"는 15절의 이유를 설명하는 접속사, "in him"은 창조의 영역 또는 도구를 나타냄'
      },
      {
        sequence_order: 2,
        semantic_classification: '창조의 범위',
        original_text: 'things in heaven and on earth, visible and invisible',
        korean_translation: '하늘과 땅에 있는 것들, 보이는 것과 보이지 않는 것',
        grammatical_explanation: '대조적 병렬 구조로 창조의 전체성을 강조'
      },
      {
        sequence_order: 3,
        semantic_classification: '권세의 열거',
        original_text: 'whether thrones or powers or rulers or authorities',
        korean_translation: '왕좌들이든 권세들이든 통치자들이든 권위들이든',
        grammatical_explanation: '네 가지 영적 권세를 나열하여 보이지 않는 세계의 구체성을 표현'
      },
      {
        sequence_order: 4,
        semantic_classification: '창조의 수단과 목적',
        original_text: 'all things have been created through him and for him',
        korean_translation: '만물이 그를 통해 그를 위해 창조되었다',
        grammatical_explanation: '"through him"(수단/도구), "for him"(목적)의 이중 전치사구로 그리스도 중심성 강조'
      }
    ],
    vocabulary: [
      {
        word: 'thrones',
        ipa_pronunciation: '/θroʊnz/',
        korean_pronunciation: '스론즈',
        part_of_speech: '명사',
        definition_korean: '왕좌들, 통치 권세',
        usage_note: '영적 세계의 높은 권세를 나타내는 은유적 표현'
      },
      {
        word: 'powers',
        ipa_pronunciation: '/ˈpaʊərz/',
        korean_pronunciation: '파워즈',
        part_of_speech: '명사',
        definition_korean: '권세들, 능력들',
        usage_note: '초자연적 존재들의 힘과 영향력을 지칭'
      },
      {
        word: 'rulers',
        ipa_pronunciation: '/ˈruːlərz/',
        korean_pronunciation: '룰러즈',
        part_of_speech: '명사',
        definition_korean: '통치자들',
        usage_note: '영적 영역의 지배적 존재들'
      },
      {
        word: 'authorities',
        ipa_pronunciation: '/əˈθɔːrətiz/',
        korean_pronunciation: '어쏘리티즈',
        part_of_speech: '명사',
        definition_korean: '권위들, 권한들',
        usage_note: '합법적 통치권을 가진 영적 존재들'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 창조의 범위를 점진적으로 확장하며 그리스도의 창조주되심을 강조합니다. "하늘과 땅", "보이는 것과 보이지 않는 것"이라는 대조는 물질적·영적 세계 전체를 포괄합니다. 특히 네 가지 영적 권세(왕좌, 권세, 통치자, 권위)를 열거하는 것은 당시 골로새 교회에 침투한 천사 숭배나 영적 존재들에 대한 과도한 관심에 대응하기 위한 것입니다. 바울은 이 모든 영적 존재들조차 그리스도를 통해(through him) 그리스도를 위해(for him) 창조되었음을 선언함으로써, 그리스도의 절대적 우월성을 확립합니다.',
      cross_references: ['John 1:3', 'Hebrews 1:2', 'Ephesians 1:21', 'Colossians 2:10']
    },
    korean_translation: {
      natural_translation: '왜냐하면 만물이 그분 안에서 창조되었기 때문입니다. 하늘과 땅에 있는 것들, 보이는 것들과 보이지 않는 것들, 왕좌들이든 권세들이든 통치자들이든 권위들이든, 모든 것이 그분을 통해 그분을 위해 창조되었습니다.',
      translation_notes: '영적 권세들의 나열은 골로새 교회의 특정 이단 가르침을 염두에 둔 표현'
    },
    special_explanation: {
      explanation_type: '역사적 배경',
      content: '골로새 교회는 영지주의적 사상의 영향을 받아 다양한 영적 중간 존재들(아이온들)을 숭배하거나 두려워하는 경향이 있었습니다. 바울은 이러한 모든 영적 존재들조차 그리스도에 의해, 그리스도를 위해 창조되었음을 강조함으로써, 그리스도 외에 다른 중보자나 숭배 대상이 필요 없음을 가르칩니다.',
      examples: []
    }
  },

  // Colossians 1:17
  {
    reference: 'Colossians 1:17',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '시간적 우선성',
        original_text: 'He is before all things',
        korean_translation: '그는 만물보다 먼저 계시다',
        grammatical_explanation: '"before"는 시간적·존재론적 우선성을 모두 나타냄'
      },
      {
        sequence_order: 2,
        semantic_classification: '유지와 보존',
        original_text: 'and in him all things hold together',
        korean_translation: '만물이 그 안에서 함께 결합되어 있다',
        grammatical_explanation: '"hold together"는 현재형으로 지속적인 유지·보존의 역할을 강조'
      }
    ],
    vocabulary: [
      {
        word: 'before',
        ipa_pronunciation: '/bɪˈfɔːr/',
        korean_pronunciation: '비포어',
        part_of_speech: '전치사',
        definition_korean: '~보다 먼저, ~보다 앞서',
        usage_note: '시간적 선재성과 존재론적 우월성을 모두 포함'
      },
      {
        word: 'hold together',
        ipa_pronunciation: '/hoʊld təˈɡeðər/',
        korean_pronunciation: '홀드 투게더',
        part_of_speech: '동사구',
        definition_korean: '결합하다, 유지하다, 보존하다',
        usage_note: '헬라어 "sunestēken"으로, 우주의 질서와 통일성을 그리스도가 유지하심을 의미'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '이 구절은 그리스도의 역할을 창조(16절)에서 보존으로 확장합니다. "만물보다 먼저 계시다"는 표현은 단순히 시간적으로 먼저 존재한다는 의미를 넘어, 존재의 근원이며 모든 것의 기초가 되신다는 의미입니다. "만물이 그 안에서 함께 결합되어 있다"는 표현은 그리스도가 단지 창조만 하시고 떠나신 것이 아니라, 지금도 우주의 질서와 통일성을 유지하시는 적극적인 역할을 하고 계심을 나타냅니다. 이는 이신론(Deism)을 거부하고 그리스도의 지속적인 섭리를 강조하는 중요한 신학적 진술입니다.',
      cross_references: ['Hebrews 1:3', 'John 1:1-3', 'Revelation 1:17']
    },
    korean_translation: {
      natural_translation: '그분은 만물보다 먼저 계시며, 만물이 그분 안에서 함께 유지됩니다.',
      translation_notes: '"hold together"를 "함께 유지됩니다"로 번역하여 지속적인 보존의 의미를 강조'
    },
    special_explanation: {
      explanation_type: '신학적 의미',
      content: '"hold together"는 단순한 유지가 아니라 우주의 조화와 질서, 법칙들이 그리스도를 통해 작동함을 의미합니다. 현대 과학이 발견하는 자연 법칙들도 궁극적으로는 그리스도의 지속적인 창조적 능력의 표현입니다.',
      examples: []
    }
  },

  // Colossians 1:18
  {
    reference: 'Colossians 1:18',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '교회의 머리',
        original_text: 'And he is the head of the body, the church',
        korean_translation: '그는 몸인 교회의 머리이시다',
        grammatical_explanation: '"the body"와 "the church"는 동격으로 교회를 유기체적 비유로 설명'
      },
      {
        sequence_order: 2,
        semantic_classification: '부활의 첫 열매',
        original_text: 'he is the beginning and the firstborn from among the dead',
        korean_translation: '그는 시작이시며 죽은 자들 가운데서 첫째이시다',
        grammatical_explanation: '"beginning"과 "firstborn"이 병렬되어 부활에서의 우선성을 강조'
      },
      {
        sequence_order: 3,
        semantic_classification: '목적절',
        original_text: 'so that in everything he might have the supremacy',
        korean_translation: '그가 만물 가운데 으뜸이 되시기 위함이다',
        grammatical_explanation: '"so that" 목적절로 모든 선언의 궁극적 목적을 제시'
      }
    ],
    vocabulary: [
      {
        word: 'head',
        ipa_pronunciation: '/hed/',
        korean_pronunciation: '헤드',
        part_of_speech: '명사',
        definition_korean: '머리, 지도자',
        usage_note: '권위와 통치, 그리고 유기적 연결의 근원을 나타내는 은유'
      },
      {
        word: 'beginning',
        ipa_pronunciation: '/bɪˈɡɪnɪŋ/',
        korean_pronunciation: '비기닝',
        part_of_speech: '명사',
        definition_korean: '시작, 기원',
        usage_note: '부활의 첫 열매로서 새 창조의 시작을 의미'
      },
      {
        word: 'supremacy',
        ipa_pronunciation: '/suːˈpreməsi/',
        korean_pronunciation: '수프레머시',
        part_of_speech: '명사',
        definition_korean: '지고함, 최고의 지위',
        usage_note: '헬라어 "prōteuōn"으로, 모든 영역에서 첫째 되심'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 그리스도의 역할을 우주적 차원(15-17절)에서 교회적 차원으로 전환합니다. 교회는 그리스도의 "몸"이며, 그리스도는 이 몸의 "머리"로서 권위와 통치권을 가지십니다. "시작"(beginning)과 "첫째"(firstborn)라는 이중 표현은 그리스도가 부활의 첫 열매로서 새 창조의 문을 여신 분임을 강조합니다. 이 모든 것의 목적은 "만물 가운데 으뜸이 되시기 위함"입니다. 이는 창조(15-17절)와 재창조/구속(18-20절) 모두에서 그리스도의 절대적 우월성을 확립합니다.',
      cross_references: ['Ephesians 1:22-23', '1 Corinthians 15:20', 'Revelation 1:5', 'Romans 8:29']
    },
    korean_translation: {
      natural_translation: '그분은 몸인 교회의 머리이시며, 시작이시고 죽은 자들 가운데서 첫째로 나신 분입니다. 이는 그분이 만물 가운데 으뜸이 되시기 위함입니다.',
      translation_notes: '"supremacy"를 "으뜸"으로 번역하여 절대적 우월성을 표현'
    },
    special_explanation: {
      explanation_type: '구조적 특징',
      content: '이 구절은 그리스도 찬가의 전환점입니다. 15-17절이 창조에서의 그리스도의 역할을 다루었다면, 18-20절은 재창조(구속)에서의 역할을 다룹니다. 18절은 이 두 부분을 연결하는 다리 역할을 하며, "firstborn"이라는 단어가 15절과 18절에서 반복되어 구조적 평행을 이룹니다.',
      examples: ['15절: firstborn over all creation', '18절: firstborn from among the dead']
    }
  },

  // Colossians 1:19
  {
    reference: 'Colossians 1:19',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '하나님의 의지',
        original_text: 'For God was pleased to have all his fullness dwell in him',
        korean_translation: '하나님께서 모든 충만함이 그 안에 거하게 하시기를 기뻐하셨기 때문이다',
        grammatical_explanation: '"pleased"는 하나님의 주권적 결정, "fullness"는 신성의 총체성을 나타냄'
      }
    ],
    vocabulary: [
      {
        word: 'pleased',
        ipa_pronunciation: '/pliːzd/',
        korean_pronunciation: '플리즈드',
        part_of_speech: '동사(과거)',
        definition_korean: '기뻐하다, 만족하다',
        usage_note: '하나님의 주권적이고 기쁜 의지를 나타냄'
      },
      {
        word: 'fullness',
        ipa_pronunciation: '/ˈfʊlnəs/',
        korean_pronunciation: '풀니스',
        part_of_speech: '명사',
        definition_korean: '충만함, 완전함',
        usage_note: '헬라어 "plērōma"로, 신성의 모든 속성과 능력의 총체'
      },
      {
        word: 'dwell',
        ipa_pronunciation: '/dwel/',
        korean_pronunciation: '드웰',
        part_of_speech: '동사',
        definition_korean: '거하다, 머물다',
        usage_note: '영구적이고 지속적인 거처를 의미'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '이 구절은 그리스도론의 핵심 진술입니다. "모든 충만함"(all his fullness)은 하나님의 신성 전체를 의미하며, 이것이 그리스도 "안에 거한다"(dwell in him)는 것은 그리스도가 신성을 부분적으로가 아니라 완전하게 소유하고 계심을 나타냅니다. 이는 영지주의자들이 주장하던 "충만"(plērōma) 개념을 전복시킵니다. 그들은 하나님과 물질세계 사이에 여러 단계의 영적 존재들(아이온들)이 있으며, 이들의 총합이 "충만"을 이룬다고 가르쳤습니다. 바울은 이 모든 "충만"이 그리스도 한 분 안에 완전히 거한다고 선언함으로써, 다른 중보자들이 불필요함을 강조합니다.',
      cross_references: ['Colossians 2:9', 'John 1:16', 'Ephesians 1:23', 'Ephesians 3:19']
    },
    korean_translation: {
      natural_translation: '왜냐하면 하나님께서 모든 충만하심이 그분 안에 거하게 하시기를 기뻐하셨기 때문입니다.',
      translation_notes: '"all his fullness"를 "모든 충만하심"으로 번역하여 신성의 완전성을 강조'
    },
    special_explanation: {
      explanation_type: '신학적 논쟁',
      content: '이 구절의 "충만"(plērōma)은 영지주의의 핵심 용어였습니다. 바울은 이단들이 사용하던 용어를 빌려와 정통 기독교 교리로 재정의합니다. 골로새서 2:9에서는 더 명확하게 "신성의 모든 충만이 육체로 그 안에 거하시고"라고 표현합니다.',
      examples: []
    }
  },

  // Colossians 1:20
  {
    reference: 'Colossians 1:20',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '화해의 목적',
        original_text: 'and through him to reconcile to himself all things',
        korean_translation: '그를 통해 만물을 자기와 화해시키려 하셨다',
        grammatical_explanation: '"to reconcile"은 19절 "pleased"의 목적을 나타내는 부정사'
      },
      {
        sequence_order: 2,
        semantic_classification: '화해의 범위',
        original_text: 'whether things on earth or things in heaven',
        korean_translation: '땅에 있는 것들이든 하늘에 있는 것들이든',
        grammatical_explanation: '16절의 창조 범위와 평행을 이루는 화해의 우주적 범위'
      },
      {
        sequence_order: 3,
        semantic_classification: '화해의 수단',
        original_text: 'by making peace through his blood, shed on the cross',
        korean_translation: '십자가에서 흘린 그의 피로 평화를 이루심으로써',
        grammatical_explanation: '"through his blood"는 화해의 대가, "shed on the cross"는 분사구로 구체적 사건을 명시'
      }
    ],
    vocabulary: [
      {
        word: 'reconcile',
        ipa_pronunciation: '/ˈrekənsaɪl/',
        korean_pronunciation: '레컨사일',
        part_of_speech: '동사',
        definition_korean: '화해시키다, 화목하게 하다',
        usage_note: '헬라어 "apokatallassō"로, 분리되었던 관계를 회복하는 것'
      },
      {
        word: 'peace',
        ipa_pronunciation: '/piːs/',
        korean_pronunciation: '피스',
        part_of_speech: '명사',
        definition_korean: '평화, 화목',
        usage_note: '히브리어 "샬롬"(shalom) 개념으로, 완전한 회복과 조화'
      },
      {
        word: 'blood',
        ipa_pronunciation: '/blʌd/',
        korean_pronunciation: '블러드',
        part_of_speech: '명사',
        definition_korean: '피',
        usage_note: '희생 제사의 언어로, 속죄의 대가를 상징'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '이 구절은 그리스도의 구속 사역의 범위와 수단을 설명합니다. 화해의 범위는 우주적입니다("땅에 있는 것들이든 하늘에 있는 것들이든"). 이는 죄가 단지 인간만이 아니라 전체 피조 세계에 영향을 미쳤고, 그리스도의 구속도 우주적 규모임을 시사합니다. 화해의 수단은 "십자가에서 흘린 피"로, 이는 구체적이고 역사적인 사건입니다. 바울은 추상적인 영지주의적 구원론을 거부하고, 역사적 십자가 사건의 중요성을 강조합니다. "평화를 이루다"(making peace)는 표현은 단순한 적대감의 종식이 아니라, 샬롬(완전한 조화와 번영)의 회복을 의미합니다.',
      cross_references: ['Romans 5:1', 'Ephesians 2:14-16', '2 Corinthians 5:18-19', 'Romans 8:19-22']
    },
    korean_translation: {
      natural_translation: '그리고 그분을 통해 만물을 자기와 화해시키시되, 땅에 있는 것들이든 하늘에 있는 것들이든, 십자가에서 흘리신 그분의 피로 평화를 이루심으로써 화해시키셨습니다.',
      translation_notes: '화해의 우주적 범위와 십자가의 역사적 사건을 모두 강조'
    },
    special_explanation: {
      explanation_type: '신학적 논쟁점',
      content: '"하늘에 있는 것들"의 화해가 무엇을 의미하는지에 대해 해석이 나뉩니다. 일부는 타락한 천사들도 궁극적으로 구원받는다는 보편 구원론의 근거로 사용하지만, 대부분의 해석자들은 이것이 우주 전체의 질서 회복, 또는 천상의 영적 존재들이 그리스도의 주권 아래 복속됨을 의미한다고 봅니다.',
      examples: ['Ephesians 1:10: "to bring unity to all things in heaven and on earth under Christ"']
    }
  },

  // Colossians 1:21
  {
    reference: 'Colossians 1:21',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '과거의 소외',
        original_text: 'Once you were alienated from God',
        korean_translation: '한때 너희는 하나님으로부터 소외되었다',
        grammatical_explanation: '"Once"는 과거의 상태를 나타내는 시간 부사'
      },
      {
        sequence_order: 2,
        semantic_classification: '적대적 태도',
        original_text: 'and were enemies in your minds',
        korean_translation: '너희 마음에서 원수였다',
        grammatical_explanation: '"in your minds"는 적대감의 근원이 사고방식에 있음을 지적'
      },
      {
        sequence_order: 3,
        semantic_classification: '원인 제시',
        original_text: 'because of your evil behavior',
        korean_translation: '너희의 악한 행실 때문이었다',
        grammatical_explanation: '"because of"는 소외의 원인을 설명하는 전치사구'
      }
    ],
    vocabulary: [
      {
        word: 'alienated',
        ipa_pronunciation: '/ˈeɪliəneɪtɪd/',
        korean_pronunciation: '에일리에네이티드',
        part_of_speech: '형용사',
        definition_korean: '소외된, 멀어진',
        usage_note: '헬라어 "apēllotriōmenous"로, 법적·관계적 분리 상태'
      },
      {
        word: 'enemies',
        ipa_pronunciation: '/ˈenəmiz/',
        korean_pronunciation: '에너미즈',
        part_of_speech: '명사',
        definition_korean: '원수, 적',
        usage_note: '단순한 중립이 아닌 적대적 관계'
      },
      {
        word: 'evil',
        ipa_pronunciation: '/ˈiːvl/',
        korean_pronunciation: '이블',
        part_of_speech: '형용사',
        definition_korean: '악한, 사악한',
        usage_note: '도덕적으로 그릇되고 하나님의 뜻에 반대되는'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 우주적 화해(19-20절)를 골로새 성도들의 개인적 경험에 적용합니다. "소외"는 법적 용어로, 본래 속해야 할 곳에서 분리된 상태를 의미합니다. "마음에서 원수"라는 표현은 적대감이 외부적 강요가 아니라 내면적 태도임을 보여줍니다. "악한 행실"은 이러한 내적 적대감의 외적 표현입니다. 이는 죄의 본질이 단순한 잘못된 행동이 아니라 하나님과의 관계 단절과 적대라는 것을 강조합니다.',
      cross_references: ['Ephesians 2:1-3', 'Romans 5:10', 'Ephesians 4:18', 'Romans 8:7']
    },
    korean_translation: {
      natural_translation: '한때 여러분은 하나님으로부터 소외되어 있었고, 악한 행실로 인해 마음으로 원수가 되어 있었습니다.',
      translation_notes: '과거의 영적 상태를 현재와 대조하여 강조'
    },
    special_explanation: {
      explanation_type: '심리적 통찰',
      content: '"마음에서 원수"(enemies in your minds)라는 표현은 죄의 뿌리가 사고방식과 세계관에 있음을 보여줍니다. 행동의 변화만으로는 충분하지 않고, 마음의 변화(renewal of mind)가 필요합니다.',
      examples: ['Romans 12:2: "be transformed by the renewing of your mind"']
    }
  },

  // Colossians 1:22
  {
    reference: 'Colossians 1:22',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '대조적 전환',
        original_text: 'But now he has reconciled you by Christ\'s physical body through death',
        korean_translation: '그러나 이제 그리스도의 육체로 죽음을 통해 너희를 화해시키셨다',
        grammatical_explanation: '"But now"는 21절과의 강한 대조, "physical body"는 역사적 성육신 강조'
      },
      {
        sequence_order: 2,
        semantic_classification: '화해의 목적',
        original_text: 'to present you holy in his sight',
        korean_translation: '너희를 거룩하게 그의 앞에 세우려 하심이다',
        grammatical_explanation: '"to present"는 목적을 나타내는 부정사, "holy"는 상태를 나타내는 형용사'
      },
      {
        sequence_order: 3,
        semantic_classification: '완전한 결과',
        original_text: 'without blemish and free from accusation',
        korean_translation: '흠 없고 책망할 것이 없는',
        grammatical_explanation: '두 가지 부정적 표현으로 완전한 순결함을 강조'
      }
    ],
    vocabulary: [
      {
        word: 'physical',
        ipa_pronunciation: '/ˈfɪzɪkl/',
        korean_pronunciation: '피지컬',
        part_of_speech: '형용사',
        definition_korean: '육체의, 물질적인',
        usage_note: '헬라어 "sarkos"로, 실제 인간의 몸을 가리킴'
      },
      {
        word: 'present',
        ipa_pronunciation: '/prɪˈzent/',
        korean_pronunciation: '프리젠트',
        part_of_speech: '동사',
        definition_korean: '제시하다, 드리다',
        usage_note: '제사 용어로, 하나님 앞에 드리는 의식적 행위'
      },
      {
        word: 'blemish',
        ipa_pronunciation: '/ˈblemɪʃ/',
        korean_pronunciation: '블레미시',
        part_of_speech: '명사',
        definition_korean: '흠, 결점',
        usage_note: '제사 동물의 완전함을 묘사하던 구약 용어'
      },
      {
        word: 'accusation',
        ipa_pronunciation: '/ˌækjuˈzeɪʃən/',
        korean_pronunciation: '애큐제이션',
        part_of_speech: '명사',
        definition_korean: '고발, 비난',
        usage_note: '법정 용어로, 정죄할 근거가 없음을 의미'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 "그러나 이제"(But now)라는 극적인 전환으로 과거(21절)와 현재를 대조합니다. "그리스도의 육체"(physical body)라는 표현은 영지주의적 가르침에 대한 반박입니다. 영지주의자들은 물질을 악하게 여겨 그리스도가 실제 육체를 가졌다는 것을 부인했습니다. 바울은 구체적으로 "육체"와 "죽음"을 언급함으로써 성육신과 십자가의 역사적 실재성을 강조합니다. 화해의 목적은 성도들을 "거룩하게", "흠 없이", "책망할 것이 없이" 하나님 앞에 세우는 것입니다. 이는 구약의 제사 언어로, 완전한 속죄와 정결을 나타냅니다.',
      cross_references: ['Ephesians 5:27', '1 Peter 1:19', 'Jude 1:24', 'Hebrews 9:14']
    },
    korean_translation: {
      natural_translation: '그러나 이제 그리스도께서 자신의 육체로 죽으심을 통해 여러분을 화해시키셔서, 여러분을 거룩하고 흠 없고 책망받을 것이 없는 자로 하나님 앞에 세우려 하십니다.',
      translation_notes: '제사 용어들을 사용하여 완전한 속죄의 결과를 표현'
    },
    special_explanation: {
      explanation_type: '논쟁적 강조',
      content: '"육체"(physical body)의 강조는 영지주의의 가현설(Docetism)을 반박합니다. 가현설은 그리스도가 실제 육체를 가진 것처럼 보였을 뿐이라고 주장했습니다. 바울은 실제 육체와 실제 죽음을 통한 구속을 강조합니다.',
      examples: ['1 John 4:2-3: "Every spirit that acknowledges that Jesus Christ has come in the flesh is from God"']
    }
  },

  // Colossians 1:23
  {
    reference: 'Colossians 1:23',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '조건절',
        original_text: 'if you continue in your faith',
        korean_translation: '만일 너희가 믿음에 거한다면',
        grammatical_explanation: '"if"는 조건을 나타내지만, 의심이 아닌 권면의 의미'
      },
      {
        sequence_order: 2,
        semantic_classification: '믿음의 특성',
        original_text: 'established and firm',
        korean_translation: '터가 굳고 흔들리지 않으며',
        grammatical_explanation: '두 개의 분사로 믿음의 안정성을 묘사'
      },
      {
        sequence_order: 3,
        semantic_classification: '부정적 조건',
        original_text: 'and do not move from the hope held out in the gospel',
        korean_translation: '복음의 소망에서 옮겨지지 않는다면',
        grammatical_explanation: '"do not move"는 현재 시제로 지속적인 확고함을 강조'
      },
      {
        sequence_order: 4,
        semantic_classification: '복음의 범위',
        original_text: 'This is the gospel that you heard and that has been proclaimed to every creature under heaven',
        korean_translation: '이것이 너희가 들었고 하늘 아래 모든 피조물에게 전파된 복음이다',
        grammatical_explanation: '두 개의 관계절로 복음의 진정성과 보편성을 강조'
      },
      {
        sequence_order: 5,
        semantic_classification: '바울의 사역',
        original_text: 'and of which I, Paul, have become a servant',
        korean_translation: '나 바울이 이 복음의 일꾼이 되었다',
        grammatical_explanation: '"I, Paul"은 강조를 위한 동격 구조'
      }
    ],
    vocabulary: [
      {
        word: 'established',
        ipa_pronunciation: '/ɪˈstæblɪʃt/',
        korean_pronunciation: '이스태블리시트',
        part_of_speech: '형용사',
        definition_korean: '확립된, 견고한',
        usage_note: '헬라어 "tethemeliōmenoi"로, 건물의 기초가 튼튼함을 비유'
      },
      {
        word: 'firm',
        ipa_pronunciation: '/fɜːrm/',
        korean_pronunciation: '펌',
        part_of_speech: '형용사',
        definition_korean: '확고한, 흔들리지 않는',
        usage_note: '변하지 않는 안정성'
      },
      {
        word: 'proclaimed',
        ipa_pronunciation: '/prəˈkleɪmd/',
        korean_pronunciation: '프로클레임드',
        part_of_speech: '동사(과거분사)',
        definition_korean: '선포되다, 전파되다',
        usage_note: '공적이고 공식적인 선언'
      },
      {
        word: 'servant',
        ipa_pronunciation: '/ˈsɜːrvənt/',
        korean_pronunciation: '서번트',
        part_of_speech: '명사',
        definition_korean: '종, 일꾼',
        usage_note: '헬라어 "diakonos"로, 겸손한 섬김의 자세'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 22절의 영광스러운 약속에 조건을 첨부합니다. "만일"(if)이라는 조건절은 구원의 확실성을 의심하는 것이 아니라, 진정한 믿음은 인내로 입증된다는 것을 강조합니다. "터가 굳고 흔들리지 않으며"는 건축 비유로, 믿음이 견고한 기초 위에 세워져야 함을 나타냅니다. 바울은 또한 자신이 전하는 복음의 진정성을 두 가지 방식으로 확증합니다: (1) 골로새 성도들이 직접 들었던 복음이며, (2) "하늘 아래 모든 피조물에게" 전파된 보편적 복음입니다. 마지막으로 바울 자신이 이 복음의 "일꾼"(servant)임을 선언하여, 다음 단락(24-29절)에서 자신의 사역을 설명할 준비를 합니다.',
      cross_references: ['Hebrews 3:14', 'Matthew 24:13', 'Acts 1:8', '1 Corinthians 15:2']
    },
    korean_translation: {
      natural_translation: '만일 여러분이 믿음 안에 머무르되, 터가 굳고 흔들림이 없으며, 여러분이 들은 복음의 소망에서 옮겨지지 않는다면 그러합니다. 이 복음은 하늘 아래 모든 피조물에게 전파되었고, 나 바울이 이 복음의 일꾼이 되었습니다.',
      translation_notes: '조건절은 경고가 아닌 진정한 믿음의 특성을 묘사하는 것'
    },
    special_explanation: {
      explanation_type: '신학적 논쟁',
      content: '이 조건절은 "구원의 견인"(perseverance of the saints) 교리와 관련된 논쟁을 일으켰습니다. 개혁주의 신학은 이것을 진정한 믿음의 필연적 결과로 해석하며, 알미니안주의 신학은 구원을 잃어버릴 가능성으로 해석합니다. 문맥상 바울은 골로새 교회의 이단 가르침에 빠지지 말라는 경고를 하고 있습니다.',
      examples: []
    }
  },

  // Colossians 1:24
  {
    reference: 'Colossians 1:24',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '역설적 기쁨',
        original_text: 'Now I rejoice in what I am suffering for you',
        korean_translation: '이제 나는 너희를 위해 받는 고난을 기뻐한다',
        grammatical_explanation: '고난과 기쁨의 역설적 결합'
      },
      {
        sequence_order: 2,
        semantic_classification: '난해한 진술',
        original_text: 'and I fill up in my flesh what is still lacking in regard to Christ\'s afflictions',
        korean_translation: '그리스도의 고난에 부족한 것을 내 육체로 채운다',
        grammatical_explanation: '"lacking"은 분사로, 그리스도 고난의 "부족함"이라는 어려운 개념'
      },
      {
        sequence_order: 3,
        semantic_classification: '고난의 목적',
        original_text: 'for the sake of his body, which is the church',
        korean_translation: '그의 몸인 교회를 위함이다',
        grammatical_explanation: '"for the sake of"는 고난의 수혜자를 명시'
      }
    ],
    vocabulary: [
      {
        word: 'rejoice',
        ipa_pronunciation: '/rɪˈdʒɔɪs/',
        korean_pronunciation: '리조이스',
        part_of_speech: '동사',
        definition_korean: '기뻐하다',
        usage_note: '역경 중에도 기뻐함'
      },
      {
        word: 'suffering',
        ipa_pronunciation: '/ˈsʌfərɪŋ/',
        korean_pronunciation: '서퍼링',
        part_of_speech: '명사',
        definition_korean: '고난, 고통',
        usage_note: '복음을 위한 박해와 어려움'
      },
      {
        word: 'lacking',
        ipa_pronunciation: '/ˈlækɪŋ/',
        korean_pronunciation: '래킹',
        part_of_speech: '형용사',
        definition_korean: '부족한',
        usage_note: '그리스도 고난의 "부족함"이라는 논쟁적 개념'
      },
      {
        word: 'afflictions',
        ipa_pronunciation: '/əˈflɪkʃənz/',
        korean_pronunciation: '어플릭션즈',
        part_of_speech: '명사',
        definition_korean: '고난, 환난',
        usage_note: '헬라어 "thlipseōn"으로, 압박과 고통'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '이 구절은 신약에서 가장 해석하기 어려운 구절 중 하나입니다. "그리스도의 고난에 부족한 것을 채운다"는 표현이 그리스도의 속죄 사역이 불완전했다는 의미는 절대 아닙니다(히브리서는 그리스도의 단번 제사의 완전함을 강조). 대부분의 해석자들은 이것을 다음과 같이 이해합니다: (1) 그리스도의 속죄적 고난(20절의 십자가 죽음)과 구별되는 "메시야적 고난"의 개념으로, 말세에 하나님의 백성이 겪어야 할 정해진 양의 고난이 있다는 유대교적 사상, 또는 (2) 그리스도와 연합된 사도들이 그리스도의 몸된 교회를 위해 겪는 고난을 의미. 바울은 자신의 고난을 그리스도와의 연합 안에서 이해하며, 이 고난이 교회의 성장과 건강을 위한 것임을 강조합니다.',
      cross_references: ['2 Corinthians 1:5', 'Philippians 3:10', '2 Corinthians 4:10', 'Acts 9:16']
    },
    korean_translation: {
      natural_translation: '이제 나는 여러분을 위해 받는 고난 중에 기뻐하며, 그리스도의 남은 고난을 그분의 몸인 교회를 위하여 내 육신으로 채우고 있습니다.',
      translation_notes: '"부족한 것"을 "남은 고난"으로 번역하여 속죄의 불완전함이 아닌 메시야적 고난의 개념을 표현'
    },
    special_explanation: {
      explanation_type: '신학적 해석',
      content: '이 구절은 로마 가톨릭의 "공로의 보고"(treasury of merit) 교리의 근거로 잘못 사용되어 왔습니다. 그러나 문맥상 바울은 그리스도의 속죄적 죽음이 불완전하다고 말하는 것이 아니라, 사도적 고난이 교회의 성장에 필수적임을 강조합니다. "그리스도의 고난"은 넓은 의미로 그리스도와 연합된 자들의 고난을 포함합니다.',
      examples: ['Acts 9:4: "Saul, Saul, why do you persecute me?" - 교회 박해를 그리스도 박해로 표현']
    }
  },

  // Colossians 1:25
  {
    reference: 'Colossians 1:25',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '직분 선언',
        original_text: 'I have become its servant',
        korean_translation: '나는 그것(교회)의 일꾼이 되었다',
        grammatical_explanation: '"its"는 교회를 가리키는 대명사'
      },
      {
        sequence_order: 2,
        semantic_classification: '임명의 근거',
        original_text: 'by the commission God gave me',
        korean_translation: '하나님께서 내게 주신 직분으로',
        grammatical_explanation: '"commission"은 하나님의 주권적 임명'
      },
      {
        sequence_order: 3,
        semantic_classification: '사역의 목적',
        original_text: 'to present to you the word of God in its fullness',
        korean_translation: '하나님의 말씀을 충만하게 너희에게 전하기 위함이다',
        grammatical_explanation: '"to present"는 목적을 나타내는 부정사, "in its fullness"는 완전하고 충분한 전달을 의미'
      }
    ],
    vocabulary: [
      {
        word: 'commission',
        ipa_pronunciation: '/kəˈmɪʃən/',
        korean_pronunciation: '커미션',
        part_of_speech: '명사',
        definition_korean: '위임, 직분, 임무',
        usage_note: '하나님으로부터 받은 공식적 권한과 책임'
      },
      {
        word: 'present',
        ipa_pronunciation: '/prɪˈzent/',
        korean_pronunciation: '프리젠트',
        part_of_speech: '동사',
        definition_korean: '제시하다, 전달하다',
        usage_note: '완전하고 충분하게 전달함'
      },
      {
        word: 'fullness',
        ipa_pronunciation: '/ˈfʊlnəs/',
        korean_pronunciation: '풀니스',
        part_of_speech: '명사',
        definition_korean: '충만함, 완전함',
        usage_note: '19절의 "충만"과 같은 단어로, 완전하고 부족함 없는 상태'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 자신의 사도직을 설명합니다. "일꾼"(servant)은 23절과 같은 단어(diakonos)로, 겸손한 섬김을 나타냅니다. 그러나 이 섬김은 자발적인 것이 아니라 "하나님께서 주신 직분"에 의한 것입니다. 바울의 사도직은 인간의 선택이나 자격이 아닌 하나님의 주권적 부르심에 근거합니다. 그의 사명은 "하나님의 말씀을 충만하게" 전하는 것입니다. "충만하게"(in its fullness)는 19절의 신학적 "충만"(plērōma)과 연결되어, 바울이 전하는 메시지가 완전하고 부족함이 없음을 강조합니다. 이는 골로새 교회의 거짓 교사들이 추가적인 비밀 지식이나 영적 경험을 주장하는 것에 대한 반박입니다.',
      cross_references: ['1 Corinthians 9:17', 'Galatians 1:15-16', 'Ephesians 3:2', 'Acts 9:15']
    },
    korean_translation: {
      natural_translation: '나는 하나님께서 여러분을 위해 내게 맡기신 직분을 따라 교회의 일꾼이 되었는데, 이는 하나님의 말씀을 충만하게 전하기 위함입니다.',
      translation_notes: '"commission"을 "직분"으로, "fullness"를 "충만하게"로 번역하여 완전한 복음 전달을 강조'
    },
    special_explanation: {
      explanation_type: '사도적 권위',
      content: '바울은 자신의 사도적 권위를 강조합니다. 이는 골로새 교회의 거짓 교사들이 바울이 전하지 않은 "더 높은" 지식을 주장하는 상황에서 중요합니다. 바울이 전한 복음은 이미 "충만"하며, 추가할 것이 없습니다.',
      examples: []
    }
  },

  // Colossians 1:26
  {
    reference: 'Colossians 1:26',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '동격 설명',
        original_text: 'the mystery that has been kept hidden for ages and generations',
        korean_translation: '오랜 세대 동안 감추어졌던 비밀',
        grammatical_explanation: '"mystery"는 25절 "하나님의 말씀"과 동격, 관계절로 과거의 은폐 상태 설명'
      },
      {
        sequence_order: 2,
        semantic_classification: '현재의 계시',
        original_text: 'but is now disclosed to the Lord\'s people',
        korean_translation: '그러나 이제 그의 성도들에게 나타났다',
        grammatical_explanation: '"but now"는 과거와 현재의 극적 대조'
      }
    ],
    vocabulary: [
      {
        word: 'mystery',
        ipa_pronunciation: '/ˈmɪstəri/',
        korean_pronunciation: '미스터리',
        part_of_speech: '명사',
        definition_korean: '비밀, 신비',
        usage_note: '헬라어 "mustērion"으로, 인간 이성으로 알 수 없지만 하나님이 계시하신 진리'
      },
      {
        word: 'hidden',
        ipa_pronunciation: '/ˈhɪdn/',
        korean_pronunciation: '히든',
        part_of_speech: '형용사',
        definition_korean: '감추어진, 숨겨진',
        usage_note: '과거에는 알려지지 않았던'
      },
      {
        word: 'disclosed',
        ipa_pronunciation: '/dɪsˈkloʊzd/',
        korean_pronunciation: '디스클로즈드',
        part_of_speech: '동사(과거분사)',
        definition_korean: '드러나다, 계시되다',
        usage_note: '헬라어 "ephanerōthē"로, 공개적으로 나타남'
      },
      {
        word: 'ages',
        ipa_pronunciation: '/ˈeɪdʒɪz/',
        korean_pronunciation: '에이지즈',
        part_of_speech: '명사',
        definition_korean: '시대, 세대',
        usage_note: '긴 역사적 기간'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '"비밀"(mystery)은 신약, 특히 바울 서신의 핵심 개념입니다. 이것은 불가해한 수수께끼가 아니라, 과거에는 감추어졌지만 이제 하나님이 계시하신 진리를 의미합니다. "오랜 세대 동안"(for ages and generations)은 구약 시대 전체를 가리키며, 이 기간 동안 이 진리는 완전히 드러나지 않았습니다. "그러나 이제"(but now)는 그리스도의 오심과 복음 시대의 도래로 인한 극적인 전환점을 나타냅니다. 이 비밀은 이제 "그의 성도들"에게, 즉 유대인과 이방인을 포함한 모든 믿는 자들에게 계시되었습니다. 바울은 여기서 영지주의자들이 사용하던 "비밀" 용어를 빌려와 재정의합니다. 영지주의자들은 특별한 사람들만 알 수 있는 비밀 지식을 주장했지만, 바울은 이 "비밀"이 모든 성도에게 공개적으로 계시되었다고 선언합니다.',
      cross_references: ['Romans 16:25-26', 'Ephesians 3:4-6', '1 Corinthians 2:7', 'Ephesians 1:9']
    },
    korean_translation: {
      natural_translation: '이 말씀은 오랜 세대와 시대 동안 감추어졌던 비밀인데, 이제는 그분의 성도들에게 나타났습니다.',
      translation_notes: '"mystery"를 "비밀"로 번역했으나, 이는 비밀스러운 것이 아니라 이제 계시된 진리'
    },
    special_explanation: {
      explanation_type: '용어의 재정의',
      content: '바울은 영지주의의 핵심 용어인 "비밀"(mystery)을 빌려와 복음적으로 재정의합니다. 영지주의는 소수 엘리트만 접근할 수 있는 비밀 지식을 주장했지만, 바울의 "비밀"은 모든 성도에게 공개적으로 계시된 것입니다. 이는 기독교 복음의 민주적이고 포괄적인 성격을 보여줍니다.',
      examples: []
    }
  },

  // Colossians 1:27
  {
    reference: 'Colossians 1:27',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '하나님의 선택',
        original_text: 'To them God has chosen to make known among the Gentiles the glorious riches of this mystery',
        korean_translation: '하나님께서 이방인들 가운데 이 비밀의 영광스러운 풍성함을 알리기로 하셨다',
        grammatical_explanation: '"has chosen"은 하나님의 주권적 결정, "among the Gentiles"는 계시의 혁명적 대상'
      },
      {
        sequence_order: 2,
        semantic_classification: '비밀의 내용',
        original_text: 'which is Christ in you, the hope of glory',
        korean_translation: '이는 너희 안에 계신 그리스도시니, 영광의 소망이시다',
        grammatical_explanation: '"which is"는 비밀의 정체를 밝히는 핵심 진술'
      }
    ],
    vocabulary: [
      {
        word: 'glorious',
        ipa_pronunciation: '/ˈɡlɔːriəs/',
        korean_pronunciation: '글로리어스',
        part_of_speech: '형용사',
        definition_korean: '영광스러운',
        usage_note: '뛰어나고 찬란한'
      },
      {
        word: 'riches',
        ipa_pronunciation: '/ˈrɪtʃɪz/',
        korean_pronunciation: '리치즈',
        part_of_speech: '명사',
        definition_korean: '풍성함, 부요함',
        usage_note: '헬라어 "ploutos"로, 측량할 수 없는 가치와 풍요'
      },
      {
        word: 'Gentiles',
        ipa_pronunciation: '/ˈdʒentaɪlz/',
        korean_pronunciation: '젠타일즈',
        part_of_speech: '명사',
        definition_korean: '이방인들',
        usage_note: '유대인이 아닌 모든 민족'
      },
      {
        word: 'hope',
        ipa_pronunciation: '/hoʊp/',
        korean_pronunciation: '호프',
        part_of_speech: '명사',
        definition_korean: '소망, 희망',
        usage_note: '확실한 기대와 보증'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 마침내 26절에서 언급한 "비밀"의 내용을 밝힙니다. 이 비밀의 핵심은 "너희 안에 계신 그리스도"입니다. 이것은 두 가지 혁명적 의미를 담고 있습니다: (1) "이방인들 가운데"라는 표현은 구약 시대에 주로 유대 민족에게 제한되었던 하나님의 구원이 이제 모든 민족에게 개방되었음을 나타냅니다. 이것이 구약 시대에 "감추어진" 비밀입니다. (2) "너희 안에 계신 그리스도"는 단순히 그리스도에 대한 지식이 아니라, 그리스도와의 신비적 연합을 의미합니다. 이것이 "영광의 소망"인 이유는, 그리스도가 내주하심이 미래의 완전한 영광에 참여할 확실한 보증이기 때문입니다. 이는 외적 의식이나 비밀 지식이 아닌, 그리스도와의 인격적 연합이 구원의 핵심임을 강조합니다.',
      cross_references: ['Galatians 2:20', 'John 14:20', 'Romans 8:10', 'Ephesians 3:6']
    },
    korean_translation: {
      natural_translation: '하나님께서는 이방인들 가운데 이 비밀의 영광스러운 풍성함을 알리기를 원하셨는데, 이 비밀은 곧 여러분 안에 계신 그리스도이시며, 이분이 영광의 소망이십니다.',
      translation_notes: '"Christ in you"를 "여러분 안에 계신 그리스도"로 번역하여 내주하시는 그리스도 강조'
    },
    special_explanation: {
      explanation_type: '신학적 혁명',
      content: '이 구절은 신약 계시의 핵심을 담고 있습니다. 구약에서는 부분적으로만 암시되었던 이방인 구원의 완전한 포용과, 그리스도의 내주하심을 통한 신비적 연합이 이제 명확히 계시되었습니다. 이는 민족적·인종적 경계를 넘어서는 복음의 보편성과, 외적 종교 행위가 아닌 내적 변화의 중요성을 보여줍니다.',
      examples: ['Galatians 2:20: "I no longer live, but Christ lives in me"']
    }
  },

  // Colossians 1:28
  {
    reference: 'Colossians 1:28',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '선포의 대상',
        original_text: 'He is the one we proclaim',
        korean_translation: '우리가 선포하는 분이 바로 그이시다',
        grammatical_explanation: '"He"는 그리스도를 가리키며, 선포의 유일한 내용임을 강조'
      },
      {
        sequence_order: 2,
        semantic_classification: '사역의 방법',
        original_text: 'admonishing and teaching everyone with all wisdom',
        korean_translation: '모든 지혜로 각 사람을 권면하고 가르친다',
        grammatical_explanation: '두 개의 분사(admonishing, teaching)로 사역의 이중 방법 제시'
      },
      {
        sequence_order: 3,
        semantic_classification: '사역의 목적',
        original_text: 'so that we may present everyone fully mature in Christ',
        korean_translation: '각 사람을 그리스도 안에서 온전하게 세우기 위함이다',
        grammatical_explanation: '"so that" 목적절, "fully mature"는 영적 성숙의 완전한 상태'
      }
    ],
    vocabulary: [
      {
        word: 'proclaim',
        ipa_pronunciation: '/prəˈkleɪm/',
        korean_pronunciation: '프로클레임',
        part_of_speech: '동사',
        definition_korean: '선포하다, 전파하다',
        usage_note: '공개적이고 권위 있는 선언'
      },
      {
        word: 'admonishing',
        ipa_pronunciation: '/ədˈmɑːnɪʃɪŋ/',
        korean_pronunciation: '어드모니싱',
        part_of_speech: '동명사',
        definition_korean: '권면하다, 경고하다',
        usage_note: '헬라어 "nouthetountes"로, 사랑의 교정과 경고'
      },
      {
        word: 'teaching',
        ipa_pronunciation: '/ˈtiːtʃɪŋ/',
        korean_pronunciation: '티칭',
        part_of_speech: '동명사',
        definition_korean: '가르치다',
        usage_note: '진리의 체계적 전달'
      },
      {
        word: 'mature',
        ipa_pronunciation: '/məˈtʃʊr/',
        korean_pronunciation: '머츄어',
        part_of_speech: '형용사',
        definition_korean: '성숙한, 온전한',
        usage_note: '헬라어 "teleios"로, 목표에 도달한 완전한 상태'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 자신의 사역 방법과 목적을 설명합니다. "우리가 선포하는 분이 바로 그이시다"라는 강조는 바울의 메시지가 그리스도 중심적임을 보여줍니다. 추가적인 비밀이나 지식이 아니라, 오직 그리스도만이 선포의 내용입니다. 사역의 방법은 "권면"과 "가르침"의 결합입니다. "권면"(admonishing)은 잘못된 것을 바로잡고 경고하는 것이며, "가르침"(teaching)은 진리를 체계적으로 전달하는 것입니다. "모든 지혜로"는 단순한 지적 전달이 아닌, 지혜롭고 적절한 방법을 사용함을 의미합니다. "각 사람"(everyone)이 두 번 반복되는 것은 개인적이고 포괄적인 돌봄을 강조합니다. 최종 목표는 "그리스도 안에서 온전하게"(fully mature in Christ) 만드는 것입니다. "온전하게"(teleios)는 도덕적·영적 완전함과 목표 도달을 모두 의미합니다.',
      cross_references: ['Ephesians 4:13', '1 Corinthians 2:6', 'Hebrews 5:14', 'James 1:4']
    },
    korean_translation: {
      natural_translation: '우리가 전하는 분은 바로 그리스도이십니다. 우리는 모든 지혜를 다해 각 사람을 권면하고 가르치는데, 이는 각 사람을 그리스도 안에서 온전한 자로 세우기 위함입니다.',
      translation_notes: '"everyone"의 반복을 "각 사람"으로 번역하여 개별적 돌봄 강조'
    },
    special_explanation: {
      explanation_type: '목회적 방법론',
      content: '이 구절은 균형 잡힌 목회 사역의 모델을 제시합니다: (1) 그리스도 중심성 - 추가적 가르침이 아닌 그리스도만을, (2) 이중 접근 - 권면(교정)과 가르침(건설)의 균형, (3) 지혜로운 방법 - 획일적이 아닌 지혜로운 적용, (4) 개인적 관심 - "각 사람"에 대한 개별적 돌봄, (5) 명확한 목표 - 그리스도 안에서의 영적 성숙.',
      examples: []
    }
  },

  // Colossians 1:29
  {
    reference: 'Colossians 1:29',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '노력의 목적',
        original_text: 'To this end I strenuously contend',
        korean_translation: '이를 위해 나는 힘써 수고한다',
        grammatical_explanation: '"To this end"는 28절의 목표를 가리킴, "strenuously contend"는 격렬한 노력'
      },
      {
        sequence_order: 2,
        semantic_classification: '능력의 근원',
        original_text: 'with all the energy Christ so powerfully works in me',
        korean_translation: '그리스도께서 내 안에서 강력하게 역사하시는 그 능력으로',
        grammatical_explanation: '"energy"는 신적 능력, "powerfully works"는 현재 진행형으로 지속적 역사'
      }
    ],
    vocabulary: [
      {
        word: 'strenuously',
        ipa_pronunciation: '/ˈstrenjuəsli/',
        korean_pronunciation: '스트레뉴어슬리',
        part_of_speech: '부사',
        definition_korean: '힘차게, 격렬하게',
        usage_note: '최대의 노력을 기울임'
      },
      {
        word: 'contend',
        ipa_pronunciation: '/kənˈtend/',
        korean_pronunciation: '컨텐드',
        part_of_speech: '동사',
        definition_korean: '싸우다, 애쓰다',
        usage_note: '헬라어 "agōnizomenos"로, 운동 경기나 전투에서의 격렬한 투쟁'
      },
      {
        word: 'energy',
        ipa_pronunciation: '/ˈenərdʒi/',
        korean_pronunciation: '에너지',
        part_of_speech: '명사',
        definition_korean: '능력, 힘',
        usage_note: '헬라어 "energeian"으로, 실제로 작동하는 효과적인 능력'
      },
      {
        word: 'powerfully',
        ipa_pronunciation: '/ˈpaʊərfəli/',
        korean_pronunciation: '파워풀리',
        part_of_speech: '부사',
        definition_korean: '강력하게',
        usage_note: '압도적이고 효과적인 능력으로'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 자신의 사역을 인간적 노력과 신적 능력의 결합으로 설명합니다. "힘써 수고한다"(strenuously contend)라는 표현은 운동 경기나 전투에서 사용되는 강한 단어로, 바울의 사역이 얼마나 힘든 투쟁인지를 보여줍니다. 그러나 이 노력은 순수하게 인간적인 것이 아닙니다. "그리스도께서 내 안에서 강력하게 역사하시는 그 능력으로"라는 표현은 바울의 수고가 그리스도의 능력에 의해 가능하고 효과적임을 나타냅니다. 이것은 27절의 "너희 안에 계신 그리스도"와 연결됩니다. 그리스도는 단지 믿는 자들 안에만 계시는 것이 아니라, 사역자를 통해 강력하게 역사하십니다. 이는 사역의 역설을 보여줍니다: 최대의 인간적 노력이 필요하지만, 그 능력의 근원은 전적으로 신적입니다. 이 구절은 1:24-29의 바울 자신의 사역에 대한 설명을 마무리하며, 동시에 2장에서 골로새 교회의 문제들을 다루기 전에 바울의 사도적 권위를 확립합니다.',
      cross_references: ['1 Corinthians 15:10', 'Philippians 2:12-13', '2 Corinthians 12:9', 'Galatians 2:20']
    },
    korean_translation: {
      natural_translation: '이를 위하여 나는 내 안에서 강력하게 역사하시는 그리스도의 능력으로 힘을 다해 수고하고 있습니다.',
      translation_notes: '인간의 노력과 신적 능력의 협력(synergism)을 강조'
    },
    special_explanation: {
      explanation_type: '사역의 역설',
      content: '이 구절은 기독교 사역의 핵심 역설을 담고 있습니다: 우리는 마치 모든 것이 우리에게 달린 것처럼 힘써 일해야 하지만, 동시에 모든 것이 하나님의 능력에 달려 있음을 인정해야 합니다. 이것은 나태함과 자기 의존 사이의 균형을 보여줍니다.',
      examples: ['Philippians 2:12-13: "work out your salvation... for it is God who works in you"']
    }
  }
]

async function main() {
  console.log('골로새서 1:15-29 분석 데이터 저장 시작...\n')

  let successCount = 0
  let failCount = 0

  for (const data of analysisData) {
    const success = await saveAnalysisToDb(data)
    if (success) {
      successCount++
    } else {
      failCount++
    }

    // Rate limiting
    await new Promise(resolve => setTimeout(resolve, 3000))
  }

  console.log('\n=== 저장 완료 ===')
  console.log(`성공: ${successCount}개`)
  console.log(`실패: ${failCount}개`)
}

main()
