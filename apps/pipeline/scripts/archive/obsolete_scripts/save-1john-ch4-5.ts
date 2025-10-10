import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

const analyses: AnalysisData[] = [
  // 1 John 4:1-21
  {
    reference: "1 John 4:1",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "친애의 호칭 - 독자들에 대한 애정 어린 부름",
        original_text: "Dear friends",
        korean_translation: "사랑하는 친구들이여",
        grammatical_explanation: "영적 공동체를 향한 애정 어린 호칭으로 편지의 주제인 '사랑'과 연결"
      },
      {
        sequence_order: 2,
        semantic_classification: "경고 명령 - 영적 분별의 필요성",
        original_text: "do not believe every spirit, but test the spirits to see whether they are from God",
        korean_translation: "모든 영을 믿지 말고, 그 영들이 하나님께로부터 왔는지 시험하십시오",
        grammatical_explanation: "부정 명령(do not believe) + 대조 명령(but test)의 구조로 영적 분별력을 촉구"
      },
      {
        sequence_order: 3,
        semantic_classification: "이유 설명 - 거짓 선지자의 출현",
        original_text: "because many false prophets have gone out into the world",
        korean_translation: "많은 거짓 선지자들이 세상에 나왔기 때문입니다",
        grammatical_explanation: "현재완료 시제(have gone out)로 과거 사건이 현재까지 영향을 미침을 표현"
      }
    ],
    vocabulary: [
      {
        word: "spirit",
        ipa_pronunciation: "/ˈspɪrɪt/",
        korean_pronunciation: "스피릿",
        part_of_speech: "명사",
        definition_korean: "영, 영적 존재 - 가르침이나 예언의 배후에 있는 영적 세력",
        usage_note: "단순히 사람의 정신이 아니라 초자연적 영적 세력을 의미"
      },
      {
        word: "test",
        ipa_pronunciation: "/test/",
        korean_pronunciation: "테스트",
        part_of_speech: "동사",
        definition_korean: "시험하다, 검증하다 - 진위를 분별하기 위해 평가함",
        usage_note: "성경의 진리에 비추어 가르침을 검증하는 것"
      },
      {
        word: "false prophets",
        ipa_pronunciation: "/fɔːls ˈprɑːfɪts/",
        korean_pronunciation: "폴스 프라핏츠",
        part_of_speech: "명사구",
        definition_korean: "거짓 선지자들 - 하나님의 진리가 아닌 거짓을 가르치는 자들",
        usage_note: "1세기 영지주의 교사들과 같이 예수 그리스도의 육체적 성육신을 부인하는 자들"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 초대교회가 직면한 심각한 영적 위협에 대해 경고합니다. 1세기 말 소아시아 지역에서는 영지주의라는 이단 사상이 급속히 퍼지고 있었습니다. 영지주의자들은 물질을 악하다고 보았기 때문에 예수 그리스도가 진정한 육체를 가질 수 없다고 주장했습니다. 요한은 이러한 거짓 가르침을 '거짓 선지자들'이라 부르며, 모든 영적 가르침을 무조건 받아들이지 말고 반드시 시험해볼 것을 명령합니다. 이는 신자들이 영적 분별력을 가져야 함을 강조하는 것으로, 성경의 진리에 비추어 모든 가르침을 평가해야 한다는 원리를 제시합니다.",
      cross_references: ["마태복음 7:15", "고린도전서 12:10", "데살로니가전서 5:21", "요한일서 2:18-22"]
    },
    korean_translation: {
      natural_translation: "사랑하는 친구들이여, 모든 영을 다 믿지 말고 그 영들이 하나님께로부터 온 것인지 시험해 보십시오. 많은 거짓 선지자들이 세상에 나왔기 때문입니다.",
      translation_notes: "'Dear friends'는 헬라어 '아가페토이'(agapetoi)로 '사랑받는 자들'이라는 의미이며, 편지 전체의 주제인 사랑과 연결됩니다."
    },
    special_explanation: {
      explanation_type: "역사적·신학적 배경",
      content: "이 경고는 영지주의(Gnosticism)라는 구체적 이단에 대응하기 위한 것입니다. 영지주의자들은 특별한 '지식'(gnosis)을 통해서만 구원에 이를 수 있다고 주장하며, 그리스도의 육체적 성육신을 부인했습니다.",
      examples: [
        "영지주의의 주장: 물질은 악하므로 하나님(영)이 육체를 입을 수 없다",
        "요한의 반박: 예수 그리스도는 '육체로 오신' 실제 인간이었다(4:2)"
      ]
    }
  },
  {
    reference: "1 John 4:2",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "분별의 기준 제시 - 참된 영의 표지",
        original_text: "This is how you can recognize the Spirit of God",
        korean_translation: "여러분은 이렇게 하나님의 영을 알아볼 수 있습니다",
        grammatical_explanation: "'This is how'는 뒤에 나올 기준을 도입하는 표현"
      },
      {
        sequence_order: 2,
        semantic_classification: "정통 교리의 선언 - 성육신 고백의 중요성",
        original_text: "Every spirit that acknowledges that Jesus Christ has come in the flesh is from God",
        korean_translation: "예수 그리스도께서 육체로 오셨음을 시인하는 영은 모두 하나님께로부터 온 것입니다",
        grammatical_explanation: "관계절 'that acknowledges'가 'spirit'을 수식하며, 완료 시제 'has come'은 역사적 사건(성육신)을 강조"
      }
    ],
    vocabulary: [
      {
        word: "recognize",
        ipa_pronunciation: "/ˈrekəɡnaɪz/",
        korean_pronunciation: "레커그나이즈",
        part_of_speech: "동사",
        definition_korean: "알아보다, 인식하다 - 진위를 구별하여 확인함",
        usage_note: "단순한 지적 인지가 아니라 영적 분별을 통한 확인"
      },
      {
        word: "acknowledges",
        ipa_pronunciation: "/əkˈnɑːlɪdʒɪz/",
        korean_pronunciation: "어크날리지즈",
        part_of_speech: "동사",
        definition_korean: "인정하다, 시인하다 - 진리로 받아들이고 공개적으로 고백함",
        usage_note: "단순히 사실을 아는 것을 넘어 신앙으로 고백하는 것"
      },
      {
        word: "in the flesh",
        ipa_pronunciation: "/ɪn ðə fleʃ/",
        korean_pronunciation: "인 더 플레시",
        part_of_speech: "전치사구",
        definition_korean: "육체로, 육신을 입고 - 실제 인간의 몸을 가지고",
        usage_note: "영지주의 이단에 대한 반박의 핵심 표현으로, 그리스도의 완전한 인성을 강조"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 참된 영과 거짓 영을 분별하는 명확한 신학적 기준을 제시합니다. 그것은 바로 '예수 그리스도께서 육체로 오셨다'는 성육신 교리를 고백하는가 하는 것입니다. 당시 영지주의자들은 물질(육체)을 본질적으로 악하다고 보았기 때문에, 거룩한 하나님이 더러운 육체를 입을 수 없다고 주장했습니다. 그들은 예수님이 단지 영적으로만 존재했거나, 육체는 겉모습일 뿐이라고 가르쳤습니다. 이에 대해 요한은 예수 그리스도의 완전한 인성과 신성을 동시에 고백하는 것이 정통 신앙의 핵심임을 분명히 합니다. 성육신 교리는 기독교 신앙의 토대이며, 이를 부인하는 것은 구원의 복음 자체를 부인하는 것입니다.",
      cross_references: ["요한복음 1:14", "빌립보서 2:6-8", "요한일서 1:1-3", "요한이서 1:7"]
    },
    korean_translation: {
      natural_translation: "여러분은 이렇게 하나님의 영을 알아볼 수 있습니다. 예수 그리스도께서 육체로 오셨음을 고백하는 영은 모두 하나님께로부터 온 것입니다.",
      translation_notes: "'has come in the flesh'는 현재완료 시제로 과거의 성육신 사건이 현재까지 유효한 신학적 진리임을 나타냅니다."
    },
    special_explanation: {
      explanation_type: "신학적 핵심 교리",
      content: "성육신(Incarnation) 교리는 하나님의 아들이 참된 인간의 본성을 취하셨다는 가르침으로, 기독교 신앙의 가장 핵심적인 교리입니다. 예수님은 완전한 하나님이시면서 동시에 완전한 인간이십니다.",
      examples: [
        "양성론(Two Natures): 그리스도 안에 신성과 인성이 온전히 연합",
        "속죄의 필요성: 인간을 대신하여 죽으시려면 참된 인간이어야 함"
      ]
    }
  },
  {
    reference: "1 John 4:3",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "대조적 경고 - 거짓 영의 특징",
        original_text: "but every spirit that does not acknowledge Jesus is not from God",
        korean_translation: "그러나 예수를 시인하지 않는 영은 모두 하나님께로부터 온 것이 아닙니다",
        grammatical_explanation: "앞 절과 대조를 이루는 부정적 진술로 거짓 가르침의 표지를 제시"
      },
      {
        sequence_order: 2,
        semantic_classification: "정체 폭로 - 적그리스도의 영",
        original_text: "This is the spirit of the antichrist, which you have heard is coming",
        korean_translation: "이것이 바로 여러분이 오고 있다고 들었던 적그리스도의 영입니다",
        grammatical_explanation: "'which'절이 적그리스도에 대한 이전 가르침을 상기시킴"
      },
      {
        sequence_order: 3,
        semantic_classification: "현재적 경고 - 이미 임재한 위협",
        original_text: "and even now is already in the world",
        korean_translation: "그것은 지금 벌써 세상에 있습니다",
        grammatical_explanation: "'even now' + 'already'의 이중 강조로 긴박한 현재적 위협을 표현"
      }
    ],
    vocabulary: [
      {
        word: "antichrist",
        ipa_pronunciation: "/ˈæntiˌkraɪst/",
        korean_pronunciation: "앤티크라이스트",
        part_of_speech: "명사",
        definition_korean: "적그리스도 - 그리스도를 반대하고 대적하는 영적 세력",
        usage_note: "요한서신에만 나타나는 용어로, 그리스도를 부인하는 모든 거짓 가르침을 지칭"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 예수 그리스도의 성육신을 부인하는 영을 '적그리스도의 영'이라고 명확히 규정합니다. '적그리스도'(antichrist)라는 용어는 성경에서 요한서신에만 나타나는데(요한일서 2:18, 22; 4:3; 요한이서 1:7), 단순히 미래에 올 한 인물만을 가리키는 것이 아니라 그리스도를 반대하고 그 진리를 왜곡하는 모든 영적 세력을 의미합니다. 요한은 독자들이 '이미 들었던' 적그리스도에 대한 가르침을 상기시키며(2:18 참조), 그것이 미래의 일이 아니라 '지금 벌써' 활동하고 있음을 경고합니다. 이는 신자들이 현재의 위협에 대해 깨어 있어야 함을 강조하는 것입니다.",
      cross_references: ["요한일서 2:18-23", "요한이서 1:7", "데살로니가후서 2:3-12"]
    },
    korean_translation: {
      natural_translation: "그러나 예수를 고백하지 않는 영은 모두 하나님께로부터 온 것이 아닙니다. 이것이 바로 적그리스도의 영인데, 여러분이 그것이 오고 있다고 들었지만 지금 벌써 세상에 있습니다.",
      translation_notes: "'even now... already'의 이중 강조는 미래적 기대가 아니라 현재적 위협임을 강력히 표현합니다."
    },
    special_explanation: {
      explanation_type: "종말론적 개념",
      content: "적그리스도는 '이미 그러나 아직 아니'(already but not yet)라는 신약의 종말론적 긴장감을 보여줍니다. 최종적인 적그리스도의 출현은 미래이지만, 그 영은 이미 역사 속에서 활동하고 있습니다.",
      examples: [
        "현재적 적그리스도: 그리스도를 부인하는 모든 거짓 가르침과 영적 세력",
        "미래적 적그리스도: 재림 직전에 나타날 최종적인 악의 화신"
      ]
    }
  },
  {
    reference: "1 John 4:4",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "격려의 호칭 - 신자들의 정체성 확인",
        original_text: "You, dear children, are from God",
        korean_translation: "자녀들이여, 여러분은 하나님께 속한 사람들입니다",
        grammatical_explanation: "강조 대명사 'You'를 문두에 배치하여 독자들을 적그리스도와 대조"
      },
      {
        sequence_order: 2,
        semantic_classification: "승리 선언 - 이미 이긴 자들",
        original_text: "and have overcome them",
        korean_translation: "그리고 그들을 이미 이겼습니다",
        grammatical_explanation: "현재완료(have overcome)로 과거의 승리가 현재까지 유효함을 표현"
      },
      {
        sequence_order: 3,
        semantic_classification: "승리의 근거 - 내주하시는 분의 위대하심",
        original_text: "because the one who is in you is greater than the one who is in the world",
        korean_translation: "여러분 안에 계신 분이 세상에 있는 자보다 더 크시기 때문입니다",
        grammatical_explanation: "비교급 구문으로 하나님의 성령과 사탄의 영의 능력 차이를 대조"
      }
    ],
    vocabulary: [
      {
        word: "overcome",
        ipa_pronunciation: "/ˌoʊvərˈkʌm/",
        korean_pronunciation: "오우버컴",
        part_of_speech: "동사",
        definition_korean: "이기다, 극복하다 - 전투에서 승리하다",
        usage_note: "영적 전쟁의 문맥에서 거짓 가르침과 악한 영적 세력을 물리침"
      },
      {
        word: "greater",
        ipa_pronunciation: "/ˈɡreɪtər/",
        korean_pronunciation: "그레이터",
        part_of_speech: "형용사 비교급",
        definition_korean: "더 큰, 더 위대한 - 능력과 권세에서 뛰어남",
        usage_note: "하나님(성령)의 무한한 능력이 사탄의 제한된 능력보다 우월함을 표현"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 거짓 선지자들과 적그리스도의 영에 대한 경고에 이어, 신자들에게 강력한 격려의 메시지를 전합니다. '사랑하는 자녀들'이라는 호칭은 신자들이 하나님의 가족으로서 특별한 보호와 사랑을 받는 존재임을 상기시킵니다. '이겼습니다'라는 현재완료 시제는 과거에 이루어진 승리(그리스도의 십자가와 부활)가 현재 신자들의 삶 속에서도 계속 유효함을 나타냅니다. 이 승리의 근거는 신자들 안에 내주하시는 성령이 세상에서 활동하는 사탄의 영보다 '더 크시기' 때문입니다. 여기서 '더 크다'는 것은 양적 비교가 아니라 질적으로 완전히 다른 차원의 능력을 의미합니다. 창조주이신 하나님과 피조물인 사탄 사이에는 비교 자체가 불가능한 무한한 격차가 있습니다.",
      cross_references: ["요한복음 14:17", "로마서 8:31", "요한일서 5:4-5", "야고보서 4:7"]
    },
    korean_translation: {
      natural_translation: "사랑하는 자녀들이여, 여러분은 하나님께 속한 사람들이며 그들을 이미 이겼습니다. 여러분 안에 계신 분이 세상에 있는 자보다 더 크시기 때문입니다.",
      translation_notes: "'the one who is in you'는 성령을, 'the one who is in the world'는 사탄을 가리킵니다."
    },
    special_explanation: {
      explanation_type: "영적 전쟁의 신학",
      content: "이 구절은 신자의 삶에서 일어나는 영적 전쟁의 본질과 승리의 확신을 제시합니다. 신자들은 이미 승리한 전쟁에 참여하고 있습니다.",
      examples: [
        "승리의 근거: 그리스도의 십자가와 부활 (골로새서 2:15)",
        "승리의 능력: 내주하시는 성령의 무한한 능력 (로마서 8:11)"
      ]
    }
  },
  {
    reference: "1 John 4:5",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "거짓 교사들의 근원 - 세상에 속함",
        original_text: "They are from the world",
        korean_translation: "그들은 세상에 속한 사람들입니다",
        grammatical_explanation: "간결한 선언문으로 거짓 교사들의 정체를 밝힘"
      },
      {
        sequence_order: 2,
        semantic_classification: "가르침의 성격 - 세상적 관점",
        original_text: "and therefore speak from the viewpoint of the world",
        korean_translation: "그래서 세상의 관점에서 말합니다",
        grammatical_explanation: "'therefore'로 앞 절의 논리적 결과를 도출"
      },
      {
        sequence_order: 3,
        semantic_classification: "반응의 특징 - 세상의 동조",
        original_text: "and the world listens to them",
        korean_translation: "그리고 세상이 그들의 말을 듣습니다",
        grammatical_explanation: "세상에 속한 자들끼리의 자연스러운 공감과 수용을 표현"
      }
    ],
    vocabulary: [
      {
        word: "world",
        ipa_pronunciation: "/wɜːrld/",
        korean_pronunciation: "월드",
        part_of_speech: "명사",
        definition_korean: "세상 - 하나님을 대적하는 가치체계와 문화",
        usage_note: "요한서신에서 '세상'은 단순한 물리적 세계가 아니라 하나님을 거부하고 죄에 물든 인간 사회의 체제를 의미"
      },
      {
        word: "viewpoint",
        ipa_pronunciation: "/ˈvjuːpɔɪnt/",
        korean_pronunciation: "뷰포인트",
        part_of_speech: "명사",
        definition_korean: "관점, 시각 - 사물을 바라보고 판단하는 기준",
        usage_note: "하나님의 진리가 아닌 인간 중심적이고 세속적인 가치관"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 거짓 교사들과 그들을 따르는 세상 사이의 본질적 친화성을 설명합니다. '세상'이라는 단어는 요한서신에서 매우 중요한 신학적 용어로, 단순히 물리적 세계나 인류를 가리키는 것이 아니라, 하나님을 거부하고 죄 가운데 살아가는 인간 사회의 타락한 가치체계와 문화를 의미합니다. 거짓 교사들은 이러한 세상에 속하기 때문에, 그들의 가르침은 자연스럽게 세상적 가치관과 관점을 반영합니다. 그들은 하나님 중심이 아닌 인간 중심적 사고를 하며, 성경의 진리보다 인간의 이성과 경험을 우선시합니다. 이에 대해 세상 사람들은 쉽게 공감하고 그들의 말을 기꺼이 받아들입니다. 왜냐하면 그것이 자신들의 가치관과 일치하기 때문입니다.",
      cross_references: ["요한복음 15:19", "요한일서 2:15-17", "야고보서 4:4", "요한복음 8:23"]
    },
    korean_translation: {
      natural_translation: "그들은 세상에 속한 사람들입니다. 그래서 세상의 관점에서 말하며, 세상이 그들의 말을 듣습니다.",
      translation_notes: "'from the world'와 'from the viewpoint of the world'의 'from'은 근원과 출처를 나타냅니다."
    },
    special_explanation: {
      explanation_type: "요한신학의 이원론",
      content: "요한서신은 '하나님으로부터/세상으로부터'(from God/from the world)라는 두 가지 근원의 대조를 통해 영적 실재를 설명합니다. 이는 선과 악, 빛과 어둠의 철저한 구분입니다.",
      examples: [
        "하나님께 속한 자: 하나님의 관점으로 말하고 진리를 받아들임",
        "세상에 속한 자: 세상의 관점으로 말하고 거짓을 받아들임"
      ]
    }
  },
  {
    reference: "1 John 4:6",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "정체성 선언 - 사도들의 근원",
        original_text: "We are from God",
        korean_translation: "우리는 하나님께로부터 왔습니다",
        grammatical_explanation: "강조를 위해 'We'를 문두에 배치하여 앞 절의 '그들'과 대조"
      },
      {
        sequence_order: 2,
        semantic_classification: "반응의 기준 - 하나님을 아는 자의 특징",
        original_text: "and whoever knows God listens to us; but whoever is not from God does not listen to us",
        korean_translation: "하나님을 아는 사람은 우리의 말을 듣지만, 하나님께 속하지 않은 사람은 우리의 말을 듣지 않습니다",
        grammatical_explanation: "대조 접속사 'but'으로 두 종류의 사람을 명확히 구분"
      },
      {
        sequence_order: 3,
        semantic_classification: "분별의 결론 - 영적 분별의 도구",
        original_text: "This is how we recognize the Spirit of truth and the spirit of falsehood",
        korean_translation: "이것으로 우리는 진리의 영과 거짓의 영을 구별합니다",
        grammatical_explanation: "'This'는 앞에서 설명한 사도적 가르침에 대한 반응을 가리킴"
      }
    ],
    vocabulary: [
      {
        word: "knows",
        ipa_pronunciation: "/noʊz/",
        korean_pronunciation: "노우즈",
        part_of_speech: "동사",
        definition_korean: "알다 - 단순한 지식이 아닌 인격적 관계를 통한 앎",
        usage_note: "헬라어 '기노스코'(ginōskō)는 친밀한 교제를 통한 경험적 지식을 의미"
      },
      {
        word: "Spirit of truth",
        ipa_pronunciation: "/ˈspɪrɪt əv truːθ/",
        korean_pronunciation: "스피릿 오브 트루스",
        part_of_speech: "명사구",
        definition_korean: "진리의 영 - 성령을 가리키며, 모든 진리를 깨닫게 하시는 분",
        usage_note: "요한복음 14:17; 15:26; 16:13에서도 사용된 성령의 칭호"
      },
      {
        word: "spirit of falsehood",
        ipa_pronunciation: "/ˈspɪrɪt əv ˈfɔːlshʊd/",
        korean_pronunciation: "스피릿 오브 폴스후드",
        part_of_speech: "명사구",
        definition_korean: "거짓의 영 - 사탄과 그의 세력이 거짓을 통해 역사하는 것",
        usage_note: "진리를 왜곡하고 사람들을 미혹하는 악한 영적 세력"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 사도적 권위를 근거로 영적 분별의 또 다른 기준을 제시합니다. 사도들은 예수님으로부터 직접 가르침을 받았고, 성령의 영감을 받아 복음을 전하는 하나님께로부터 보냄 받은 자들입니다. 따라서 사도들의 가르침(초대교회에서는 사도적 전승, 오늘날에는 성경)을 받아들이는가가 진리의 영에 속하는가 거짓의 영에 속하는가를 판단하는 중요한 기준이 됩니다. '하나님을 아는' 사람은 자연스럽게 하나님께로부터 온 사도들의 가르침을 인정하고 받아들입니다. 왜냐하면 성령께서 그들 안에서 증거하시기 때문입니다(요한복음 16:13). 반대로 하나님께 속하지 않은 사람들은 사도적 가르침을 거부하거나 왜곡합니다. 이는 단순한 지적 동의의 문제가 아니라, 그 사람의 영적 상태를 드러내는 시금석입니다.",
      cross_references: ["요한복음 8:47", "요한복음 10:27", "요한복음 18:37", "고린도전서 14:37"]
    },
    korean_translation: {
      natural_translation: "우리는 하나님께로부터 왔습니다. 하나님을 아는 사람은 우리의 말을 듣지만, 하나님께 속하지 않은 사람은 우리의 말을 듣지 않습니다. 이것으로 우리는 진리의 영과 거짓의 영을 구별합니다.",
      translation_notes: "'listens to us'는 단순히 듣는 것이 아니라 받아들이고 순종하는 것을 포함합니다."
    },
    special_explanation: {
      explanation_type: "사도적 권위와 정경",
      content: "이 구절은 초대교회가 사도적 가르침을 정경(canon)의 기준으로 삼은 신학적 근거를 제공합니다. 사도들의 가르침은 그리스도께로부터 직접 받은 것이며, 성령의 영감을 받은 것입니다.",
      examples: [
        "사도적 계승: 사도들 → 사도적 전승 → 신약성경 정경",
        "분별의 기준: 성경의 진리에 일치하는가가 모든 가르침의 시금석"
      ]
    }
  },
  {
    reference: "1 John 4:7",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "애정 어린 호칭과 권면 - 사랑 실천의 명령",
        original_text: "Dear friends, let us love one another",
        korean_translation: "사랑하는 친구들이여, 서로 사랑합시다",
        grammatical_explanation: "'let us'는 권면의 청유형으로 함께 행동할 것을 촉구"
      },
      {
        sequence_order: 2,
        semantic_classification: "신학적 근거 - 사랑의 근원",
        original_text: "for love comes from God",
        korean_translation: "사랑은 하나님께로부터 오는 것이기 때문입니다",
        grammatical_explanation: "'for'는 앞 명령의 이유를 제시하는 접속사"
      },
      {
        sequence_order: 3,
        semantic_classification: "영적 상태의 확인 - 사랑과 거듭남의 관계",
        original_text: "Everyone who loves has been born of God and knows God",
        korean_translation: "사랑하는 사람은 모두 하나님께로부터 났고 하나님을 압니다",
        grammatical_explanation: "현재완료 'has been born'은 과거의 거듭남이 현재의 사랑하는 삶으로 나타남을 표현"
      }
    ],
    vocabulary: [
      {
        word: "love",
        ipa_pronunciation: "/lʌv/",
        korean_pronunciation: "러브",
        part_of_speech: "동사/명사",
        definition_korean: "사랑하다/사랑 - 헬라어 '아가페'로 자기희생적이고 무조건적인 사랑",
        usage_note: "감정적 애정이 아니라 상대방의 유익을 위한 의지적 결단과 행동"
      },
      {
        word: "born of God",
        ipa_pronunciation: "/bɔːrn əv ɡɑːd/",
        korean_pronunciation: "본 오브 갓",
        part_of_speech: "동사구",
        definition_korean: "하나님께로부터 나다 - 성령으로 거듭나다, 영적으로 재탄생하다",
        usage_note: "요한복음 3장의 '거듭남'(born again) 개념과 동일"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 거짓 가르침에 대한 경고(1-6절)에서 사랑의 본질에 대한 가르침(7-21절)으로 주제를 전환합니다. 4장 후반부는 요한일서 전체의 중심 주제인 '사랑'을 집중적으로 다룹니다. 요한은 먼저 사랑의 근원이 하나님이심을 선언합니다. 모든 참된 사랑은 하나님께로부터 나오며, 하나님의 본성을 반영합니다. 따라서 사랑하는 능력과 실제는 그 사람이 하나님께로부터 거듭났다는 증거가 됩니다. 여기서 '사랑한다'는 것은 단순한 감정이 아니라 구체적인 행동으로 나타나는 아가페 사랑을 의미합니다. 이는 상대방의 필요를 채우고 유익을 구하는 자기희생적 사랑입니다. 요한은 이러한 사랑의 능력이 인간의 본성에서 나올 수 없으며, 오직 하나님께로부터 거듭난 사람만이 진정으로 사랑할 수 있다고 가르칩니다.",
      cross_references: ["요한복음 3:3-7", "요한복음 13:34-35", "요한일서 3:10", "요한일서 5:1"]
    },
    korean_translation: {
      natural_translation: "사랑하는 친구들이여, 서로 사랑합시다. 사랑은 하나님께로부터 오는 것이기 때문입니다. 사랑하는 사람은 모두 하나님께로부터 났고 하나님을 압니다.",
      translation_notes: "'has been born of God'는 단회적 거듭남이 지속적인 사랑의 삶으로 나타남을 강조합니다."
    },
    special_explanation: {
      explanation_type: "사랑의 신학적 토대",
      content: "요한은 사랑을 단순한 윤리적 덕목이 아니라 하나님의 본성과 구원의 표지로 제시합니다. 사랑하는 능력은 거듭남의 결과이며 증거입니다.",
      examples: [
        "사랑의 근원: 하나님 자신 (4:8, 16)",
        "사랑의 모범: 그리스도의 십자가 (4:10)",
        "사랑의 능력: 성령으로 거듭난 새 생명 (로마서 5:5)"
      ]
    }
  },
  {
    reference: "1 John 4:8",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "부정적 판단 - 사랑 없음의 의미",
        original_text: "Whoever does not love does not know God",
        korean_translation: "사랑하지 않는 사람은 하나님을 알지 못합니다",
        grammatical_explanation: "앞 절의 긍정적 진술(사랑하는 자는 하나님을 안다)을 부정형으로 반복하여 강조"
      },
      {
        sequence_order: 2,
        semantic_classification: "핵심 신학 선언 - 하나님의 본질 정의",
        original_text: "because God is love",
        korean_translation: "하나님은 사랑이시기 때문입니다",
        grammatical_explanation: "성경에서 가장 짧고 강력한 하나님에 대한 정의 중 하나"
      }
    ],
    vocabulary: [
      {
        word: "is",
        ipa_pronunciation: "/ɪz/",
        korean_pronunciation: "이즈",
        part_of_speech: "동사 (be동사)",
        definition_korean: "~이다 - 본질과 정체를 나타내는 동사",
        usage_note: "'God is love'에서 'is'는 하나님이 사랑의 속성을 가지신 것이 아니라 사랑 자체가 하나님의 본질임을 표현"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 '하나님은 사랑이시다'(God is love)라는 성경의 가장 중요한 신학적 선언 중 하나를 제시합니다. 이는 단순히 하나님이 사랑의 속성을 가지고 계시다는 것 이상의 의미입니다. 사랑이 하나님의 본질 자체라는 뜻입니다. 하나님의 모든 속성(거룩, 공의, 자비 등)은 사랑이라는 본질 안에서 완전한 조화를 이룹니다. 따라서 사랑 없이는 하나님을 진정으로 알 수 없습니다. 여기서 '안다'는 것은 지적인 인식이 아니라 인격적 관계를 의미합니다(요한복음 17:3). 사랑하지 않는 사람은 하나님과의 친밀한 관계가 없으며, 하나님의 본성을 경험하지 못했다는 것입니다. 이는 외적인 종교 활동이나 신학적 지식이 아니라, 사랑의 실천이야말로 하나님을 아는 가장 확실한 증거임을 보여줍니다.",
      cross_references: ["요한복음 17:3", "예레미야 9:23-24", "요한일서 4:16", "출애굽기 34:6-7"]
    },
    korean_translation: {
      natural_translation: "사랑하지 않는 사람은 하나님을 알지 못합니다. 하나님은 사랑이시기 때문입니다.",
      translation_notes: "'God is love'는 'Love is God'가 아닙니다. 모든 사랑이 하나님인 것이 아니라, 하나님의 본질이 사랑이라는 의미입니다."
    },
    special_explanation: {
      explanation_type: "하나님의 본질로서의 사랑",
      content: "요한은 하나님에 대해 두 가지 본질적 정의를 내립니다: '하나님은 빛이시다'(1:5)와 '하나님은 사랑이시다'(4:8, 16). 이 둘은 하나님의 본성을 가장 완전하게 표현합니다.",
      examples: [
        "하나님의 거룩과 사랑: 거룩한 사랑, 사랑의 거룩함",
        "하나님의 공의와 사랑: 공의로운 사랑, 사랑의 공의",
        "십자가: 하나님의 공의와 사랑이 완전히 만나는 곳"
      ]
    }
  },
  {
    reference: "1 John 4:9",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "현현의 방법 - 하나님의 사랑이 나타난 방식",
        original_text: "This is how God showed his love among us",
        korean_translation: "하나님께서 우리에게 자신의 사랑을 나타내신 방법은 이것입니다",
        grammatical_explanation: "'This is how'는 뒤에 나올 구체적 방법을 도입"
      },
      {
        sequence_order: 2,
        semantic_classification: "성육신의 목적 - 독생자를 보내심",
        original_text: "He sent his one and only Son into the world",
        korean_translation: "하나님께서 자신의 독생자를 세상에 보내셨습니다",
        grammatical_explanation: "'one and only'는 유일무이함과 특별한 사랑을 강조"
      },
      {
        sequence_order: 3,
        semantic_classification: "구원의 목적 - 생명을 주시기 위함",
        original_text: "that we might live through him",
        korean_translation: "우리가 그분을 통해 살게 하시려는 것입니다",
        grammatical_explanation: "'that'은 목적절을 이끌며, 'might live'는 영적 생명을 의미"
      }
    ],
    vocabulary: [
      {
        word: "showed",
        ipa_pronunciation: "/ʃoʊd/",
        korean_pronunciation: "쇼우드",
        part_of_speech: "동사 (과거)",
        definition_korean: "나타내다, 드러내다 - 보이지 않던 것을 보이게 하다",
        usage_note: "헬라어 '파네로오'(phaneroō)는 분명하고 명백하게 드러냄을 의미"
      },
      {
        word: "one and only",
        ipa_pronunciation: "/wʌn ənd ˈoʊnli/",
        korean_pronunciation: "원 앤드 온리",
        part_of_speech: "형용사구",
        definition_korean: "독생자, 유일무이한 - 오직 하나뿐인 특별한 존재",
        usage_note: "헬라어 '모노게네스'(monogenēs)는 '유일하게 낳은'이라는 의미로 그리스도의 유일성과 특별함을 강조"
      },
      {
        word: "live",
        ipa_pronunciation: "/lɪv/",
        korean_pronunciation: "리브",
        part_of_speech: "동사",
        definition_korean: "살다 - 영적 생명을 얻고 누리다",
        usage_note: "단순한 생물학적 생존이 아니라 하나님과의 교제를 통한 풍성한 영생"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 '하나님은 사랑이시다'는 추상적 선언을 구체적이고 역사적인 사건으로 설명합니다. 하나님의 사랑은 단순한 감정이나 개념이 아니라, 독생자 예수 그리스도를 세상에 보내신 실제 행동으로 나타났습니다. '독생자'(one and only Son)라는 표현은 예수님이 하나님의 유일한 아들이시며, 하나님께서 가장 사랑하시는 분임을 강조합니다. 아브라함이 독자 이삭을 제물로 드리려 했던 것(창세기 22장)이 예표였다면, 하나님은 실제로 자신의 독생자를 인류 구원을 위해 내어주셨습니다. 이 파송의 목적은 '우리가 그분을 통해 살게 하시려는' 것입니다. 여기서 '살다'는 것은 단순한 생물학적 생존이 아니라, 죄로 인해 죽었던 영혼이 그리스도를 통해 영적 생명을 얻고 영원히 하나님과 함께 사는 것을 의미합니다.",
      cross_references: ["요한복음 3:16", "로마서 5:8", "로마서 8:32", "창세기 22:1-18"]
    },
    korean_translation: {
      natural_translation: "하나님께서 우리에게 자신의 사랑을 나타내신 방법은 이것입니다. 하나님께서 자신의 독생자를 세상에 보내어 우리가 그분을 통해 살게 하신 것입니다.",
      translation_notes: "'through him'은 그리스도의 대속적 죽음과 부활을 통해서라는 의미입니다."
    },
    special_explanation: {
      explanation_type: "하나님 사랑의 대가",
      content: "하나님의 사랑은 값비싼 대가를 치르는 희생적 사랑입니다. 독생자를 보내신 것은 하나님께서 치르실 수 있는 가장 큰 희생입니다.",
      examples: [
        "아브라함과 이삭: 예표적 사건 - 하나님이 양을 준비하심 (창세기 22:8)",
        "하나님과 예수: 실제 성취 - 하나님이 자신의 아들을 주심 (요한복음 3:16)",
        "사랑의 최고 표현: 자신의 생명을 내어줌 (요한복음 15:13)"
      ]
    }
  },
  {
    reference: "1 John 4:10",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "사랑의 정의 - 사랑의 본질적 특징",
        original_text: "This is love: not that we loved God, but that he loved us",
        korean_translation: "사랑은 이것입니다. 우리가 하나님을 사랑한 것이 아니라 하나님께서 우리를 사랑하신 것입니다",
        grammatical_explanation: "'not... but' 구조로 인간의 사랑과 하나님의 사랑을 대조"
      },
      {
        sequence_order: 2,
        semantic_classification: "구원의 방법 - 화목제물로서의 아들",
        original_text: "and sent his Son as an atoning sacrifice for our sins",
        korean_translation: "그리고 우리 죄를 위한 화목제물로 자기 아들을 보내신 것입니다",
        grammatical_explanation: "'as an atoning sacrifice'는 아들을 보내신 목적과 방식을 설명"
      }
    ],
    vocabulary: [
      {
        word: "atoning sacrifice",
        ipa_pronunciation: "/əˈtoʊnɪŋ ˈsækrɪfaɪs/",
        korean_pronunciation: "어토우닝 새크리파이스",
        part_of_speech: "명사구",
        definition_korean: "화목제물 - 죄로 인한 하나님과의 단절을 회복시키는 제사",
        usage_note: "헬라어 '힐라스모스'(hilasmos)는 하나님의 진노를 돌이키고 관계를 회복시키는 제사를 의미"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 참된 사랑의 본질을 정의합니다. 진정한 사랑은 인간이 먼저 하나님을 사랑한 것이 아니라, 하나님께서 먼저 우리를 사랑하신 데서 시작됩니다. 이것이 복음의 핵심입니다. 인간은 죄인으로서 하나님을 거역하고 원수 되었지만(로마서 5:10), 하나님께서는 일방적이고 주도적으로 우리를 먼저 사랑하셨습니다. 이 사랑의 절정은 독생자를 '화목제물'로 보내신 것입니다. 화목제물(hilasmos)은 구약의 속죄제도를 배경으로 한 개념으로, 죄로 인해 하나님의 진노 아래 있는 인간과 하나님 사이의 관계를 회복시키는 제사를 의미합니다. 예수 그리스도께서 십자가에서 우리 죄를 위해 죽으심으로, 하나님의 공의가 만족되고 우리가 하나님과 화목하게 되었습니다. 이것이 '아가페' 사랑의 본질입니다.",
      cross_references: ["로마서 3:25", "로마서 5:8-10", "요한일서 2:2", "히브리서 2:17"]
    },
    korean_translation: {
      natural_translation: "사랑은 이것입니다. 우리가 하나님을 사랑한 것이 아니라 하나님께서 우리를 사랑하사 우리 죄를 위한 화목제물로 자기 아들을 보내신 것입니다.",
      translation_notes: "'atoning sacrifice'는 죄를 대신 짊어지고 하나님의 공의를 만족시키는 대속적 희생을 의미합니다."
    },
    special_explanation: {
      explanation_type: "화목제물의 신학",
      content: "화목(propitiation/hilasmos)은 하나님의 공의로운 진노를 돌이키고 죄인과 화평을 이루게 하는 것입니다. 이는 그리스도의 대속적 죽음을 통해 이루어졌습니다.",
      examples: [
        "구약의 예표: 대속죄일의 속죄소(레위기 16장)",
        "신약의 성취: 그리스도의 십자가 (로마서 3:25)",
        "화목의 결과: 하나님과의 평화, 의롭다 하심 (로마서 5:1)"
      ]
    }
  },
  {
    reference: "1 John 4:11",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "애정 어린 호칭",
        original_text: "Dear friends",
        korean_translation: "사랑하는 친구들이여",
        grammatical_explanation: "독자들에 대한 친밀한 호칭"
      },
      {
        sequence_order: 2,
        semantic_classification: "논리적 추론 - 하나님의 사랑에 대한 응답",
        original_text: "since God so loved us, we also ought to love one another",
        korean_translation: "하나님께서 이처럼 우리를 사랑하셨으니, 우리도 서로 사랑해야 합니다",
        grammatical_explanation: "'since'는 이유절을 도입하며, 'ought to'는 도덕적 의무를 표현"
      }
    ],
    vocabulary: [
      {
        word: "since",
        ipa_pronunciation: "/sɪns/",
        korean_pronunciation: "신스",
        part_of_speech: "접속사",
        definition_korean: "~이므로, ~이기 때문에",
        usage_note: "논리적 이유를 제시하는 접속사"
      },
      {
        word: "ought to",
        ipa_pronunciation: "/ɔːt tuː/",
        korean_pronunciation: "오트 투",
        part_of_speech: "조동사구",
        definition_korean: "~해야 한다 - 도덕적 의무",
        usage_note: "단순한 권고가 아닌 마땅히 해야 할 책임"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 하나님의 사랑을 설명한 후(9-10절), 이제 그에 대한 자연스러운 응답을 제시합니다. 하나님께서 우리를 먼저 사랑하셨다는 사실은 단순한 정보가 아니라, 우리의 삶을 변화시켜야 하는 복음의 능력입니다. 'since'(~이므로)는 앞의 진리에서 논리적으로 도출되는 결론을 제시합니다. 하나님의 놀라운 사랑을 경험한 사람은 자연스럽게 다른 사람을 사랑하게 됩니다. 'ought to'(마땅히 해야 한다)는 법적 강제가 아니라, 사랑받은 자의 마땅한 응답입니다. 이는 율법주의적 의무가 아니라 은혜에 대한 감사의 반응입니다.",
      cross_references: ["요한복음 13:34", "요한일서 3:16", "에베소서 5:1-2"]
    },
    korean_translation: {
      natural_translation: "사랑하는 친구들이여, 하나님께서 이처럼 우리를 사랑하셨으니 우리도 서로 사랑해야 합니다.",
      translation_notes: "'so loved'는 9-10절에서 설명한 독생자를 보내신 엄청난 사랑을 가리킵니다."
    },
    special_explanation: {
      explanation_type: "복음의 윤리적 함의",
      content: "기독교 윤리는 율법이 아닌 복음에서 나옵니다. 하나님의 사랑을 경험한 것이 사랑하는 삶의 동기와 능력이 됩니다.",
      examples: [
        "순서: 하나님의 사랑 경험 → 사랑의 능력 획득 → 타인을 사랑함",
        "은혜의 윤리: 해야만 구원받는 것이 아니라, 구원받았기에 하는 것"
      ]
    }
  },
  {
    reference: "1 John 4:12",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "신학적 선언 - 하나님의 비가시성",
        original_text: "No one has ever seen God",
        korean_translation: "아무도 하나님을 본 적이 없습니다",
        grammatical_explanation: "현재완료로 과거부터 현재까지 계속되는 사실을 강조"
      },
      {
        sequence_order: 2,
        semantic_classification: "조건절 - 사랑의 실천",
        original_text: "but if we love one another",
        korean_translation: "그러나 우리가 서로 사랑하면",
        grammatical_explanation: "현재 시제의 조건절로 계속적인 사랑의 실천을 의미"
      },
      {
        sequence_order: 3,
        semantic_classification: "결과절 - 하나님의 내주",
        original_text: "God lives in us and his love is made complete in us",
        korean_translation: "하나님께서 우리 안에 거하시고 그분의 사랑이 우리 안에서 완전해집니다",
        grammatical_explanation: "두 개의 결과를 'and'로 연결: 내주와 사랑의 완성"
      }
    ],
    vocabulary: [
      {
        word: "seen",
        ipa_pronunciation: "/siːn/",
        korean_pronunciation: "씬",
        part_of_speech: "동사 과거분사",
        definition_korean: "보다 - 육체의 눈으로 직접 목격하다",
        usage_note: "하나님은 영이시므로 물리적으로 볼 수 없음"
      },
      {
        word: "lives in",
        ipa_pronunciation: "/lɪvz ɪn/",
        korean_pronunciation: "리브즈 인",
        part_of_speech: "동사구",
        definition_korean: "~안에 거하다, 내주하다",
        usage_note: "단순한 임재가 아니라 지속적인 거처를 정함"
      },
      {
        word: "made complete",
        ipa_pronunciation: "/meɪd kəmˈpliːt/",
        korean_pronunciation: "메이드 컴플리트",
        part_of_speech: "동사구 (수동태)",
        definition_korean: "완전하게 되다, 온전히 이루어지다",
        usage_note: "헬라어 '텔레이오오'는 목표에 도달하여 완성됨을 의미"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 역설적인 진리를 제시합니다. 하나님은 영이시므로 아무도 육체의 눈으로 본 적이 없지만(요한복음 1:18, 4:24), 신자들이 서로 사랑할 때 보이지 않는 하나님이 그들 안에 거하시며 그분의 사랑이 가시적으로 나타납니다. 이는 매우 심오한 신학적 통찰입니다. 하나님의 사랑은 추상적 개념이 아니라 신자들의 구체적인 사랑의 행위를 통해 세상에 드러나고 완성됩니다. '완전하게 된다'는 것은 하나님의 사랑이 그 목적을 달성하고 충만히 표현된다는 의미입니다. 보이지 않는 하나님의 사랑이 보이는 형제 사랑을 통해 실체화됩니다.",
      cross_references: ["요한복음 1:18", "요한복음 4:24", "요한복음 13:35", "요한일서 3:17"]
    },
    korean_translation: {
      natural_translation: "아무도 하나님을 본 적이 없습니다. 그러나 우리가 서로 사랑하면 하나님께서 우리 안에 거하시고, 그분의 사랑이 우리 안에서 완전하게 됩니다.",
      translation_notes: "'his love is made complete in us'는 하나님의 사랑이 우리의 사랑을 통해 온전히 표현되고 성취됨을 의미합니다."
    },
    special_explanation: {
      explanation_type: "보이지 않는 하나님을 보이게 하기",
      content: "기독교의 독특한 특징은 보이지 않는 하나님을 사랑의 공동체를 통해 가시화한다는 것입니다. 교회는 그리스도의 몸으로서 하나님의 사랑을 세상에 드러냅니다.",
      examples: [
        "성육신: 보이지 않는 하나님이 그리스도 안에서 보이게 됨 (요한복음 14:9)",
        "교회: 보이지 않는 하나님이 사랑의 공동체를 통해 보이게 됨"
      ]
    }
  },
  {
    reference: "1 John 4:13",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "확신의 근거 제시",
        original_text: "This is how we know that we live in him and he in us",
        korean_translation: "우리가 그분 안에 거하고 그분이 우리 안에 거하심을 아는 방법은 이것입니다",
        grammatical_explanation: "'This is how'는 뒤에 나올 근거를 도입"
      },
      {
        sequence_order: 2,
        semantic_classification: "증거 제시 - 성령의 선물",
        original_text: "He has given us of his Spirit",
        korean_translation: "그분께서 자신의 영을 우리에게 주셨습니다",
        grammatical_explanation: "현재완료로 과거의 사건(오순절)이 현재까지 유효함을 표현"
      }
    ],
    vocabulary: [
      {
        word: "live in",
        ipa_pronunciation: "/lɪv ɪn/",
        korean_pronunciation: "리브 인",
        part_of_speech: "동사구",
        definition_korean: "~안에 거하다 - 친밀한 교제 안에 머물다",
        usage_note: "일시적 방문이 아닌 지속적이고 안정적인 거처"
      },
      {
        word: "Spirit",
        ipa_pronunciation: "/ˈspɪrɪt/",
        korean_pronunciation: "스피릿",
        part_of_speech: "명사 (고유명사)",
        definition_korean: "성령 - 삼위일체의 세 번째 위격",
        usage_note: "대문자 'S'로 표기하여 하나님의 영이심을 강조"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 신자가 하나님 안에 거하고 하나님이 신자 안에 거하신다는 상호 내주의 확신을 어떻게 가질 수 있는지 설명합니다. 그 객관적 증거는 바로 성령의 선물입니다. 오순절에 임하신 성령은 모든 믿는 자 안에 내주하시며(로마서 8:9), 우리가 하나님의 자녀임을 증거하십니다(로마서 8:16). 성령의 임재는 주관적 감정이 아니라 객관적 실재입니다. 성령께서는 우리 안에서 증거하시고, 진리로 인도하시며(요한복음 16:13), 사랑과 기쁨과 평강의 열매를 맺게 하십니다(갈라디아서 5:22). 따라서 성령의 역사는 우리가 하나님과 연합되어 있다는 확실한 보증입니다.",
      cross_references: ["로마서 8:9-16", "고린도전서 3:16", "에베소서 1:13-14", "갈라디아서 4:6"]
    },
    korean_translation: {
      natural_translation: "우리가 그분 안에 거하고 그분이 우리 안에 거하심을 아는 방법은 이것입니다. 그분께서 자신의 영을 우리에게 주셨기 때문입니다.",
      translation_notes: "'of his Spirit'의 'of'는 부분 속격으로, 하나님께서 자신의 영을 나누어 주셨다는 의미입니다."
    },
    special_explanation: {
      explanation_type: "성령의 내주와 인침",
      content: "성령은 신자가 하나님께 속했다는 표지이자 인장입니다. 성령의 임재는 구원의 확증이며 장차 올 영광의 보증입니다.",
      examples: [
        "성령의 역할: 증거자 (로마서 8:16), 인장 (에베소서 1:13), 보증 (에베소서 1:14)",
        "성령의 열매: 사랑, 기쁨, 평강 등 하나님의 성품을 닮아감 (갈라디아서 5:22-23)"
      ]
    }
  },
  {
    reference: "1 John 4:14",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "사도적 증언 - 목격한 사실의 선포",
        original_text: "And we have seen and testify that the Father has sent his Son to be the Savior of the world",
        korean_translation: "또한 우리는 아버지께서 아들을 세상의 구주로 보내신 것을 보았고 증언합니다",
        grammatical_explanation: "현재완료 'have seen'과 현재 'testify'로 과거의 목격이 현재의 증언으로 계속됨을 표현"
      }
    ],
    vocabulary: [
      {
        word: "testify",
        ipa_pronunciation: "/ˈtestɪfaɪ/",
        korean_pronunciation: "테스티파이",
        part_of_speech: "동사",
        definition_korean: "증언하다 - 직접 경험한 것을 공식적으로 선포하다",
        usage_note: "법정 용어로 사도적 증인의 권위를 강조"
      },
      {
        word: "Savior",
        ipa_pronunciation: "/ˈseɪvjər/",
        korean_pronunciation: "세이비어",
        part_of_speech: "명사",
        definition_korean: "구주, 구원자 - 죄와 죽음에서 건져내시는 분",
        usage_note: "헬라어 '소테르'(Sōtēr)는 구약의 여호와 하나님께 사용된 칭호"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 다시 1장 1-3절의 주제로 돌아가 사도적 증언을 강조합니다. '우리는 보았다'는 예수님의 생애, 죽음, 부활을 직접 목격한 사도들의 경험을 가리킵니다. 이는 추상적 철학이나 신화가 아니라 역사적 사실에 기초한 증언입니다. 아버지께서 아들을 보내신 목적은 '세상의 구주'가 되시게 하기 위함입니다. '세상의 구주'라는 칭호는 예수 그리스도의 구원이 특정 민족이나 계층에 국한되지 않고 전 세계 모든 사람에게 제공됨을 의미합니다. 이는 보편적 복음의 선포입니다.",
      cross_references: ["요한복음 1:14", "요한복음 3:16-17", "요한복음 4:42", "요한일서 1:1-3"]
    },
    korean_translation: {
      natural_translation: "또한 우리는 아버지께서 아들을 세상의 구주로 보내신 것을 보았고 증언합니다.",
      translation_notes: "'세상의 구주'는 유대인뿐 아니라 모든 민족을 위한 보편적 구원자라는 의미입니다."
    },
    special_explanation: {
      explanation_type: "복음의 보편성",
      content: "예수 그리스도는 특정 민족이나 집단의 구주가 아니라 '세상의 구주'이십니다. 이는 복음이 모든 인종, 국가, 계층에게 열려 있음을 선포합니다.",
      examples: [
        "구약의 예표: 이방인도 포함하는 구원 (이사야 49:6)",
        "신약의 성취: 모든 족속에게 복음 전파 (마태복음 28:19)",
        "종말론적 완성: 각 나라와 족속에서 나온 무리 (요한계시록 7:9)"
      ]
    }
  },
  {
    reference: "1 John 4:15",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "조건절 - 고백의 중요성",
        original_text: "If anyone acknowledges that Jesus is the Son of God",
        korean_translation: "누구든지 예수가 하나님의 아들이심을 고백하면",
        grammatical_explanation: "'If anyone'은 보편적 조건을 제시"
      },
      {
        sequence_order: 2,
        semantic_classification: "결과절 - 상호 내주",
        original_text: "God lives in them and they in God",
        korean_translation: "하나님께서 그 사람 안에 거하시고 그 사람도 하나님 안에 거합니다",
        grammatical_explanation: "대칭적 구조로 상호적 내주 관계를 강조"
      }
    ],
    vocabulary: [
      {
        word: "acknowledges",
        ipa_pronunciation: "/əkˈnɑːlɪdʒɪz/",
        korean_pronunciation: "어크날리지즈",
        part_of_speech: "동사",
        definition_korean: "고백하다, 인정하다 - 진리로 받아들이고 공개적으로 선언하다",
        usage_note: "단순한 지적 동의를 넘어 신앙의 고백"
      },
      {
        word: "Son of God",
        ipa_pronunciation: "/sʌn əv ɡɑːd/",
        korean_pronunciation: "선 오브 갓",
        part_of_speech: "명사구",
        definition_korean: "하나님의 아들 - 예수 그리스도의 신성을 나타내는 칭호",
        usage_note: "양자가 아닌 본질상 하나님과 동등하신 분"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 구원과 하나님과의 연합에 이르는 길을 명확히 제시합니다. 그것은 예수가 하나님의 아들이심을 고백하는 것입니다. 이 고백은 단순한 말이 아니라 예수 그리스도의 신성과 구주 되심을 진심으로 믿고 공개적으로 선언하는 신앙 고백입니다(로마서 10:9). '하나님의 아들'이라는 칭호는 예수님이 하나님과 본질적으로 동등하시며, 완전한 신성을 가지신 분임을 의미합니다. 이 고백을 하는 사람은 하나님과 연합됩니다. 하나님께서 그 안에 거하시고 그도 하나님 안에 거하는 상호 내주의 관계가 시작됩니다.",
      cross_references: ["마태복음 16:16", "로마서 10:9", "요한복음 20:31", "요한일서 5:1"]
    },
    korean_translation: {
      natural_translation: "누구든지 예수가 하나님의 아들이심을 고백하면, 하나님께서 그 사람 안에 거하시고 그 사람도 하나님 안에 거합니다.",
      translation_notes: "이 고백은 초대교회의 가장 기본적인 신앙고백이었습니다."
    },
    special_explanation: {
      explanation_type: "신앙 고백의 중요성",
      content: "기독교 신앙은 예수 그리스도가 누구신가에 대한 정확한 고백에 기초합니다. '예수는 하나님의 아들'이라는 고백은 가장 핵심적인 기독교 신조입니다.",
      examples: [
        "베드로의 고백: '주는 그리스도시요 살아계신 하나님의 아들' (마태복음 16:16)",
        "요한복음의 목적: 예수가 하나님의 아들 그리스도이심을 믿게 하려 함 (요한복음 20:31)"
      ]
    }
  },
  {
    reference: "1 John 4:16",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "인식과 신뢰의 표현",
        original_text: "And so we know and rely on the love God has for us",
        korean_translation: "그래서 우리는 하나님께서 우리에게 가지신 사랑을 알고 또 믿습니다",
        grammatical_explanation: "'know'(알다)와 'rely on'(의지하다)으로 지적·경험적 이해와 신뢰를 동시에 표현"
      },
      {
        sequence_order: 2,
        semantic_classification: "핵심 신학 재선언 - 하나님의 본질",
        original_text: "God is love",
        korean_translation: "하나님은 사랑이십니다",
        grammatical_explanation: "4:8의 선언을 반복하여 강조"
      },
      {
        sequence_order: 3,
        semantic_classification: "상호 내주의 결과",
        original_text: "Whoever lives in love lives in God, and God in them",
        korean_translation: "사랑 안에 거하는 사람은 하나님 안에 거하고, 하나님도 그 사람 안에 거하십니다",
        grammatical_explanation: "사랑-하나님-내주의 삼중 연결을 표현"
      }
    ],
    vocabulary: [
      {
        word: "rely on",
        ipa_pronunciation: "/rɪˈlaɪ ɑːn/",
        korean_pronunciation: "릴라이 안",
        part_of_speech: "동사구",
        definition_korean: "의지하다, 신뢰하다 - 전적으로 믿고 맡기다",
        usage_note: "단순한 지식을 넘어 삶의 토대로 삼는 신뢰"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 '하나님은 사랑이시다'는 진리를 다시 한 번 선언하며, 이 사랑에 대한 신자들의 반응을 설명합니다. 신자들은 하나님의 사랑을 '안다'(know)고 '의지한다'(rely on)고 말합니다. '안다'는 것은 지적 인식뿐 아니라 경험적으로 체득한 것을 의미하며, '의지한다'는 것은 그 사랑을 삶의 토대로 삼는다는 뜻입니다. 그리고 요한은 놀라운 등식을 제시합니다: 사랑 안에 거하는 것 = 하나님 안에 거하는 것. 왜냐하면 하나님 자체가 사랑이시기 때문입니다. 따라서 사랑하며 사는 사람은 하나님과 연합된 삶을 사는 것이며, 하나님께서도 그 안에 거하십니다.",
      cross_references: ["요한일서 4:8", "요한일서 3:24", "요한복음 15:9-10"]
    },
    korean_translation: {
      natural_translation: "그래서 우리는 하나님께서 우리에게 가지신 사랑을 알고 믿습니다. 하나님은 사랑이십니다. 사랑 안에 거하는 사람은 하나님 안에 거하고, 하나님도 그 사람 안에 거하십니다.",
      translation_notes: "'lives in love'는 사랑을 삶의 원리로 삼아 사는 것을 의미합니다."
    },
    special_explanation: {
      explanation_type: "사랑과 하나님의 동일성",
      content: "요한은 사랑과 하나님을 동일시합니다. 사랑 안에 거하는 것이 곧 하나님 안에 거하는 것입니다. 이는 추상적 개념이 아니라 실제적 영적 연합입니다.",
      examples: [
        "사랑의 삶 = 하나님과의 연합된 삶",
        "사랑 없는 삶 = 하나님과 단절된 삶"
      ]
    }
  },
  {
    reference: "1 John 4:17",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "사랑의 완성 방식",
        original_text: "This is how love is made complete among us",
        korean_translation: "우리 가운데서 사랑이 완전하게 되는 방법은 이것입니다",
        grammatical_explanation: "'This is how'는 뒤에 나올 내용을 도입"
      },
      {
        sequence_order: 2,
        semantic_classification: "사랑 완성의 목적 - 심판날의 담대함",
        original_text: "so that we will have confidence on the day of judgment",
        korean_translation: "심판 날에 우리가 담대함을 가지게 하려는 것입니다",
        grammatical_explanation: "'so that'은 목적절을 이끌며 사랑 완성의 결과를 제시"
      },
      {
        sequence_order: 3,
        semantic_classification: "근거 설명 - 그리스도와의 동일성",
        original_text: "In this world we are like Jesus",
        korean_translation: "이 세상에서 우리가 예수님과 같기 때문입니다",
        grammatical_explanation: "'like Jesus'는 성품과 삶의 방식에서의 유사성을 의미"
      }
    ],
    vocabulary: [
      {
        word: "confidence",
        ipa_pronunciation: "/ˈkɑːnfɪdəns/",
        korean_pronunciation: "칸피던스",
        part_of_speech: "명사",
        definition_korean: "담대함, 확신 - 두려움 없는 확신",
        usage_note: "헬라어 '파르헤시아'(parrēsia)는 자유롭고 담대한 말씀을 뜻함"
      },
      {
        word: "day of judgment",
        ipa_pronunciation: "/deɪ əv ˈdʒʌdʒmənt/",
        korean_pronunciation: "데이 오브 저지먼트",
        part_of_speech: "명사구",
        definition_korean: "심판 날 - 그리스도의 재림 시 모든 사람이 심판받는 날",
        usage_note: "종말론적 개념으로 최후의 심판을 의미"
      },
      {
        word: "like",
        ipa_pronunciation: "/laɪk/",
        korean_pronunciation: "라이크",
        part_of_speech: "전치사",
        definition_korean: "~와 같이 - 유사하거나 닮음",
        usage_note: "완전히 동일한 것은 아니지만 본질적 특징을 공유함"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 사랑이 완전해지는 목적을 제시합니다. 그것은 심판 날에 담대함을 가지기 위함입니다. 많은 사람들이 심판을 두려워하지만, 하나님의 사랑 안에 거하는 신자는 담대함을 가집니다. 왜냐하면 '이 세상에서 우리가 예수님과 같기' 때문입니다. 이는 우리가 예수님처럼 완벽하다는 의미가 아니라, 예수님께서 하나님의 사랑 안에 거하셨듯이 우리도 그분 안에서 하나님의 사랑 안에 거한다는 뜻입니다. 예수님께서 아버지와 하나이셨던 것처럼, 우리도 그리스도와 연합되어 있습니다. 따라서 심판 날에 우리를 대변하실 예수님께서 우리 안에 계시므로, 정죄가 아닌 구원의 확신을 가질 수 있습니다.",
      cross_references: ["로마서 8:1", "히브리서 4:16", "요한일서 2:28", "요한복음 17:21-23"]
    },
    korean_translation: {
      natural_translation: "우리 가운데서 사랑이 완전하게 되는 방법은 이것입니다. 우리가 심판 날에 담대함을 가지게 하려는 것입니다. 이 세상에서 우리가 예수님과 같기 때문입니다.",
      translation_notes: "'as he is, so are we in this world'를 의역하여 '우리가 예수님과 같다'로 표현했습니다."
    },
    special_explanation: {
      explanation_type: "그리스도와의 연합과 심판",
      content: "신자는 그리스도와 연합되어 있기 때문에 심판 날에 담대할 수 있습니다. 그리스도 안에서는 정죄함이 없습니다(로마서 8:1).",
      examples: [
        "그리스도와의 연합: 그분이 계신 곳에 우리도 있음 (요한복음 17:24)",
        "심판에서의 담대함: 우리를 대변하시는 변호자 예수 그리스도 (요한일서 2:1)"
      ]
    }
  },
  {
    reference: "1 John 4:18",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "부정적 선언 - 사랑과 두려움의 비양립성",
        original_text: "There is no fear in love",
        korean_translation: "사랑 안에는 두려움이 없습니다",
        grammatical_explanation: "절대적 부정으로 사랑과 두려움의 상호 배타성을 강조"
      },
      {
        sequence_order: 2,
        semantic_classification: "대조적 진술 - 완전한 사랑의 효과",
        original_text: "But perfect love drives out fear",
        korean_translation: "오히려 완전한 사랑이 두려움을 내쫓습니다",
        grammatical_explanation: "'drives out'은 능동적이고 강력한 제거를 의미"
      },
      {
        sequence_order: 3,
        semantic_classification: "이유 설명 - 두려움의 본질",
        original_text: "because fear has to do with punishment",
        korean_translation: "두려움은 형벌과 관련이 있기 때문입니다",
        grammatical_explanation: "'has to do with'는 본질적 연관성을 표현"
      },
      {
        sequence_order: 4,
        semantic_classification: "결론 - 두려워하는 자의 상태",
        original_text: "The one who fears is not made perfect in love",
        korean_translation: "두려워하는 사람은 사랑 안에서 온전하게 되지 못한 것입니다",
        grammatical_explanation: "수동태 'is not made perfect'로 사랑의 완성이 아직 이루어지지 않음을 표현"
      }
    ],
    vocabulary: [
      {
        word: "fear",
        ipa_pronunciation: "/fɪr/",
        korean_pronunciation: "피어",
        part_of_speech: "명사",
        definition_korean: "두려움, 공포 - 형벌에 대한 불안과 공포",
        usage_note: "여기서는 하나님께 대한 경외심이 아니라 심판에 대한 공포를 의미"
      },
      {
        word: "perfect",
        ipa_pronunciation: "/ˈpɜːrfɪkt/",
        korean_pronunciation: "퍼픽트",
        part_of_speech: "형용사",
        definition_korean: "완전한, 온전한 - 목적을 이룬, 성숙한",
        usage_note: "도덕적 완벽함이 아니라 성숙하고 온전한 상태"
      },
      {
        word: "drives out",
        ipa_pronunciation: "/draɪvz aʊt/",
        korean_pronunciation: "드라이브즈 아웃",
        part_of_speech: "동사구",
        definition_korean: "내쫓다, 몰아내다 - 강제로 제거하다",
        usage_note: "헬라어 '발로'(ballō)는 힘 있게 밖으로 던져버림을 의미"
      },
      {
        word: "punishment",
        ipa_pronunciation: "/ˈpʌnɪʃmənt/",
        korean_pronunciation: "퍼니시먼트",
        part_of_speech: "명사",
        definition_korean: "형벌, 처벌 - 죄에 대한 심판과 징계",
        usage_note: "헬라어 '콜라시스'(kolasis)는 교정적 처벌을 의미"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 사랑과 두려움의 관계를 설명합니다. 하나님의 완전한 사랑을 경험한 사람은 심판에 대한 두려움에서 자유롭습니다. 여기서 '두려움'은 하나님께 대한 경외심(경건한 두려움)이 아니라, 형벌과 정죄에 대한 노예적 공포를 의미합니다. 완전한 사랑은 이러한 두려움을 '내쫓습니다'. 이는 수동적 제거가 아니라 능동적이고 강력한 축출입니다. 왜냐하면 하나님의 사랑을 진정으로 아는 사람은 그분이 심판자가 아니라 아버지이심을 알기 때문입니다. 그리스도 안에서 이미 용서받고 의롭다 하심을 받은 신자는 형벌을 두려워할 필요가 없습니다. 반대로 여전히 두려워하는 사람은 아직 하나님의 사랑을 완전히 이해하지 못한 것입니다.",
      cross_references: ["로마서 8:15", "히브리서 2:14-15", "디모데후서 1:7", "로마서 8:1"]
    },
    korean_translation: {
      natural_translation: "사랑 안에는 두려움이 없습니다. 오히려 완전한 사랑이 두려움을 내쫓습니다. 두려움은 형벌과 관련이 있기 때문입니다. 두려워하는 사람은 사랑 안에서 온전하게 되지 못한 것입니다.",
      translation_notes: "'perfect love'는 하나님의 완전한 사랑과 그것을 경험한 신자의 성숙한 사랑을 모두 포함합니다."
    },
    special_explanation: {
      explanation_type: "노예적 두려움과 자녀의 확신",
      content: "하나님과의 관계에는 두 종류의 태도가 있습니다. 노예적 두려움(형벌에 대한 공포)과 자녀의 확신(아버지께 대한 신뢰)입니다. 복음은 우리를 두려움에서 사랑으로 옮깁니다.",
      examples: [
        "노예의 영: 형벌의 두려움 (로마서 8:15)",
        "양자의 영: 아바 아버지라 부르는 확신 (로마서 8:15)",
        "변화의 원리: 율법(두려움) → 복음(사랑)"
      ]
    }
  },
  {
    reference: "1 John 4:19",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "사랑의 근원과 동기 선언",
        original_text: "We love because he first loved us",
        korean_translation: "우리가 사랑하는 것은 그분께서 먼저 우리를 사랑하셨기 때문입니다",
        grammatical_explanation: "'because'는 우리 사랑의 근원과 동기가 하나님의 선제적 사랑임을 밝힘"
      }
    ],
    vocabulary: [
      {
        word: "first",
        ipa_pronunciation: "/fɜːrst/",
        korean_pronunciation: "퍼스트",
        part_of_speech: "부사",
        definition_korean: "먼저, 처음에 - 시간적·논리적 우선성",
        usage_note: "하나님의 사랑이 우리 사랑보다 시간적으로나 논리적으로 앞섬을 강조"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 4장 사랑 교훈의 핵심을 짧고 강력한 한 문장으로 요약합니다. 우리의 사랑 능력은 우리 자신에게서 나오지 않고, 하나님께서 먼저 우리를 사랑하신 데서 나옵니다. 이는 10절에서 이미 언급된 진리의 반복이자 강조입니다. 'first'(먼저)라는 단어는 시간적 우선성과 논리적 우선성을 모두 포함합니다. 하나님께서 먼저 사랑하셨다는 것은: (1) 우리가 사랑하기 전에 하나님이 먼저 사랑하셨고(시간적), (2) 우리의 사랑은 하나님의 사랑에 대한 반응이며(논리적), (3) 우리가 사랑할 수 있는 능력 자체가 하나님으로부터 온다(근원적)는 의미입니다. 이것이 복음의 본질입니다. 우리가 하나님을 찾은 것이 아니라 하나님께서 먼저 우리를 찾으셨고, 우리가 하나님을 사랑한 것이 아니라 하나님께서 먼저 우리를 사랑하셨습니다.",
      cross_references: ["요한일서 4:10", "로마서 5:8", "요한복음 15:16", "에베소서 2:4-5"]
    },
    korean_translation: {
      natural_translation: "우리가 사랑하는 것은 그분께서 먼저 우리를 사랑하셨기 때문입니다.",
      translation_notes: "이 구절은 복음의 본질을 가장 간결하게 표현한 문장 중 하나입니다."
    },
    special_explanation: {
      explanation_type: "선제적 은혜의 교리",
      content: "모든 구원과 신앙 생활은 하나님의 선제적(prevenient) 은혜에서 시작됩니다. 우리의 어떤 행위나 사랑도 하나님의 먼저 베푸신 사랑에 대한 반응입니다.",
      examples: [
        "구원의 순서: 하나님의 사랑 → 우리의 믿음 → 우리의 사랑",
        "사랑의 근원: 하나님 (요한일서 4:7)",
        "주도권: 항상 하나님께 있음 (요한복음 6:44)"
      ]
    }
  },
  {
    reference: "1 John 4:20",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "위선 폭로 - 거짓 고백",
        original_text: "Whoever claims to love God yet hates a brother or sister is a liar",
        korean_translation: "누구든지 하나님을 사랑한다고 말하면서 형제자매를 미워하는 사람은 거짓말쟁이입니다",
        grammatical_explanation: "'claims... yet hates'의 대조 구조로 말과 행동의 불일치를 폭로"
      },
      {
        sequence_order: 2,
        semantic_classification: "논리적 반박 - 보이는 것과 보이지 않는 것",
        original_text: "For whoever does not love their brother and sister, whom they have seen, cannot love God, whom they have not seen",
        korean_translation: "본 적이 있는 형제자매를 사랑하지 않는 사람이 본 적이 없는 하나님을 사랑할 수는 없기 때문입니다",
        grammatical_explanation: "'whom they have seen'과 'whom they have not seen'의 대조로 논리적 불가능성을 강조"
      }
    ],
    vocabulary: [
      {
        word: "claims",
        ipa_pronunciation: "/kleɪmz/",
        korean_pronunciation: "클레임즈",
        part_of_speech: "동사",
        definition_korean: "주장하다, 말하다 - 사실 여부와 무관하게 주장함",
        usage_note: "단순히 '말한다'를 넘어 실제와 다를 수 있는 주장을 암시"
      },
      {
        word: "liar",
        ipa_pronunciation: "/ˈlaɪər/",
        korean_pronunciation: "라이어",
        part_of_speech: "명사",
        definition_korean: "거짓말쟁이 - 진실과 반대되는 것을 말하는 사람",
        usage_note: "요한서신에서 자주 사용되는 강한 표현으로 위선을 폭로"
      },
      {
        word: "hates",
        ipa_pronunciation: "/heɪts/",
        korean_pronunciation: "헤이츠",
        part_of_speech: "동사",
        definition_korean: "미워하다 - 적대감을 품고 해를 끼치려 함",
        usage_note: "사랑의 정반대로, 단순한 무관심을 넘어 적극적 적대감"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 하나님 사랑과 형제 사랑을 분리할 수 없음을 논리적으로 증명합니다. '하나님을 사랑한다'고 주장하면서 형제자매를 미워하는 사람은 거짓말쟁이입니다. 요한의 논리는 명쾌합니다: 눈에 보이고 만질 수 있는 형제자매도 사랑하지 못하는 사람이 어떻게 눈에 보이지 않는 하나님을 사랑할 수 있겠느냐는 것입니다. 이는 '쉬운 것에서 어려운 것으로'(a fortiori)의 논증 방식입니다. 형제 사랑은 하나님 사랑의 진정성을 검증하는 시금석입니다. 많은 사람들이 추상적이고 영적인 '하나님 사랑'을 말하지만, 구체적이고 실제적인 '사람 사랑'에는 실패합니다. 요한은 이러한 분리를 철저히 거부합니다. 참된 하나님 사랑은 반드시 형제 사랑으로 나타나며, 형제 사랑 없는 하나님 사랑은 자기기만입니다.",
      cross_references: ["요한일서 2:9-11", "요한일서 3:17", "마태복음 25:40", "야고보서 2:14-17"]
    },
    korean_translation: {
      natural_translation: "누구든지 하나님을 사랑한다고 말하면서 형제자매를 미워하는 사람은 거짓말쟁이입니다. 본 적이 있는 형제자매를 사랑하지 않는 사람이 본 적이 없는 하나님을 사랑할 수는 없기 때문입니다.",
      translation_notes: "'brother and sister'는 영적 형제자매, 즉 믿음의 공동체 구성원을 의미합니다."
    },
    special_explanation: {
      explanation_type: "수직적 사랑과 수평적 사랑의 불가분성",
      content: "기독교 신앙에서 하나님 사랑(수직)과 이웃 사랑(수평)은 분리될 수 없습니다. 하나 없이 다른 하나만 있을 수 없습니다.",
      examples: [
        "예수님의 가장 큰 계명: 하나님 사랑 + 이웃 사랑 (마태복음 22:37-40)",
        "최후 심판의 기준: 지극히 작은 자에게 한 것 (마태복음 25:31-46)",
        "참된 경건의 표지: 형제를 사랑함 (야고보서 1:27)"
      ]
    }
  },
  {
    reference: "1 John 4:21",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "명령의 근원 제시",
        original_text: "And he has given us this command",
        korean_translation: "그리고 그분께서 우리에게 이 명령을 주셨습니다",
        grammatical_explanation: "'this command'는 뒤에 나올 내용을 가리킴"
      },
      {
        sequence_order: 2,
        semantic_classification: "이중 명령 - 하나님 사랑과 형제 사랑",
        original_text: "Anyone who loves God must also love their brother and sister",
        korean_translation: "하나님을 사랑하는 사람은 반드시 자기 형제자매도 사랑해야 합니다",
        grammatical_explanation: "'must'로 의무와 필연성을 강조"
      }
    ],
    vocabulary: [
      {
        word: "command",
        ipa_pronunciation: "/kəˈmænd/",
        korean_pronunciation: "커맨드",
        part_of_speech: "명사",
        definition_korean: "명령, 계명 - 권위 있는 지시",
        usage_note: "선택 사항이 아닌 필수적 요구사항"
      },
      {
        word: "must",
        ipa_pronunciation: "/mʌst/",
        korean_pronunciation: "머스트",
        part_of_speech: "조동사",
        definition_korean: "반드시 ~해야 한다 - 필수적 의무",
        usage_note: "도덕적·논리적 필연성을 표현"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 4장을 예수 그리스도께서 주신 명령으로 마무리합니다. 이 명령은 하나님을 사랑하는 자는 '반드시' 형제자매도 사랑해야 한다는 것입니다. 이것은 예수님께서 마지막 만찬에서 제자들에게 주신 '새 계명'(요한복음 13:34)을 반영합니다. 'must'(반드시)라는 조동사는 이것이 선택 사항이 아님을 분명히 합니다. 하나님 사랑과 형제 사랑은 동전의 양면처럼 분리될 수 없습니다. 하나님을 진정으로 사랑하는 사람은 논리적으로, 필연적으로, 자연스럽게 하나님의 형상을 지닌 형제자매를 사랑하게 됩니다. 이는 외적 강제가 아니라 내적 필연성입니다. 하나님의 사랑을 받은 사람은 그 사랑이 자연스럽게 다른 사람에게로 흘러갑니다.",
      cross_references: ["요한복음 13:34-35", "요한복음 15:12", "마태복음 22:37-40", "레위기 19:18"]
    },
    korean_translation: {
      natural_translation: "그리고 그분께서 우리에게 이 명령을 주셨습니다. 하나님을 사랑하는 사람은 반드시 자기 형제자매도 사랑해야 합니다.",
      translation_notes: "이 명령은 구약의 십계명과 신약의 새 계명을 통합한 것입니다."
    },
    special_explanation: {
      explanation_type: "이중 계명의 통합",
      content: "예수님은 구약의 두 계명(하나님 사랑과 이웃 사랑)을 하나로 통합하셨습니다. 이 둘은 분리될 수 없는 하나의 계명입니다.",
      examples: [
        "가장 큰 계명: 하나님 사랑 (신명기 6:5)",
        "둘째 계명: 이웃 사랑 (레위기 19:18)",
        "통합: 하나님 사랑은 이웃 사랑으로 증명됨 (마태복음 22:37-40)"
      ]
    }
  },
  // 1 John 5:1-21
  {
    reference: "1 John 5:1",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "신앙 고백과 거듭남의 관계",
        original_text: "Everyone who believes that Jesus is the Christ is born of God",
        korean_translation: "예수가 그리스도이심을 믿는 사람은 모두 하나님께로부터 났습니다",
        grammatical_explanation: "'believes that'은 신앙의 내용을 도입하며, 현재완료 'is born'은 거듭남의 완료된 상태를 표현"
      },
      {
        sequence_order: 2,
        semantic_classification: "아버지 사랑과 자녀 사랑의 연결",
        original_text: "and everyone who loves the father loves his child as well",
        korean_translation: "아버지를 사랑하는 사람은 모두 그분의 자녀도 사랑합니다",
        grammatical_explanation: "논리적 필연성을 'as well'로 강조"
      }
    ],
    vocabulary: [
      {
        word: "Christ",
        ipa_pronunciation: "/kraɪst/",
        korean_pronunciation: "크라이스트",
        part_of_speech: "명사 (칭호)",
        definition_korean: "그리스도, 메시아 - 기름 부음 받은 자, 구원자",
        usage_note: "헬라어 '크리스토스'는 히브리어 '메시아'를 번역한 것"
      },
      {
        word: "born of God",
        ipa_pronunciation: "/bɔːrn əv ɡɑːd/",
        korean_pronunciation: "본 오브 갓",
        part_of_speech: "동사구",
        definition_korean: "하나님께로부터 나다 - 성령으로 거듭나다",
        usage_note: "요한복음 3장의 거듭남 개념"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 5장을 믿음과 사랑과 순종이라는 세 가지 주제로 시작합니다. '예수가 그리스도'라는 고백은 초대교회의 가장 기본적인 신앙고백입니다. 이는 나사렛 예수가 구약이 예언한 메시아(그리스도)이시며, 하나님께서 보내신 구원자라는 믿음입니다. 이러한 믿음을 가진 사람은 하나님께로부터 거듭난 사람입니다. 요한은 이어서 논리적 추론을 제시합니다: 아버지를 사랑하는 사람은 자연스럽게 그 아버지의 자녀들도 사랑합니다. 이는 가족 관계의 자연스러운 원리를 영적 가족에 적용한 것입니다. 하나님 아버지를 사랑한다면 같은 아버지를 둔 형제자매들도 사랑해야 하는 것이 당연합니다.",
      cross_references: ["요한복음 3:3-7", "요한일서 4:15", "마태복음 16:16", "사도행전 2:36"]
    },
    korean_translation: {
      natural_translation: "예수가 그리스도이심을 믿는 사람은 모두 하나님께로부터 났습니다. 아버지를 사랑하는 사람은 모두 그분의 자녀도 사랑합니다.",
      translation_notes: "'the Christ'는 정관사를 사용하여 약속된 유일한 메시아임을 강조합니다."
    },
    special_explanation: {
      explanation_type: "믿음과 사랑의 연결",
      content: "요한은 믿음(예수는 그리스도), 거듭남(하나님께로부터 남), 사랑(형제 사랑)을 논리적으로 연결합니다. 참된 믿음은 반드시 사랑으로 나타납니다.",
      examples: [
        "믿음 → 거듭남 → 사랑의 순서",
        "가족 비유: 같은 아버지의 자녀들은 서로 사랑함"
      ]
    }
  },
  {
    reference: "1 John 5:2",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "확인의 기준 제시",
        original_text: "This is how we know that we love the children of God",
        korean_translation: "우리가 하나님의 자녀들을 사랑하는 줄 아는 방법은 이것입니다",
        grammatical_explanation: "'This is how'는 뒤에 나올 기준을 도입"
      },
      {
        sequence_order: 2,
        semantic_classification: "사랑의 증거 - 하나님 사랑과 순종",
        original_text: "by loving God and carrying out his commands",
        korean_translation: "하나님을 사랑하고 그분의 계명을 지킬 때입니다",
        grammatical_explanation: "'by -ing'는 방법이나 수단을 나타내는 전치사구"
      }
    ],
    vocabulary: [
      {
        word: "carrying out",
        ipa_pronunciation: "/ˈkærɪɪŋ aʊt/",
        korean_pronunciation: "캐리잉 아웃",
        part_of_speech: "동사구",
        definition_korean: "수행하다, 실행하다 - 명령을 따라 행동하다",
        usage_note: "단순히 아는 것이 아니라 실제로 행함"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 1절에서 제시한 원리(하나님 사랑 → 자녀 사랑)를 역으로도 적용합니다. 우리가 진정으로 하나님의 자녀들을 사랑하는지 확인하는 방법은 하나님을 사랑하고 그분의 계명을 지키는 것입니다. 이는 역설적으로 들릴 수 있습니다. 4:20-21에서는 형제 사랑이 하나님 사랑의 증거라고 했는데, 여기서는 하나님 사랑이 형제 사랑의 증거라고 말하기 때문입니다. 하지만 이는 모순이 아니라 상호 보완입니다. 하나님 사랑과 형제 사랑은 동전의 양면처럼 서로를 증명하고 강화합니다. 참된 형제 사랑은 하나님의 계명에 순종하는 데서 나오며, 참된 하나님 사랑은 형제를 사랑하는 데서 나타납니다.",
      cross_references: ["요한복음 14:15", "요한복음 15:10", "요한일서 2:3-5"]
    },
    korean_translation: {
      natural_translation: "우리가 하나님의 자녀들을 사랑하는 줄 아는 방법은 이것입니다. 하나님을 사랑하고 그분의 계명을 지킬 때입니다.",
      translation_notes: "하나님 사랑과 형제 사랑은 서로를 검증하는 관계입니다."
    },
    special_explanation: {
      explanation_type: "사랑의 상호 검증",
      content: "요한은 하나님 사랑과 형제 사랑이 서로를 검증한다고 가르칩니다. 하나 없이 다른 하나가 진정할 수 없습니다.",
      examples: [
        "4:20-21: 형제 사랑이 하나님 사랑의 증거",
        "5:2: 하나님 사랑이 형제 사랑의 증거",
        "통합: 둘은 분리될 수 없는 하나"
      ]
    }
  },
  {
    reference: "1 John 5:3",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "하나님 사랑의 정의",
        original_text: "In fact, this is love for God: to keep his commands",
        korean_translation: "사실, 하나님을 사랑하는 것은 이것입니다. 그분의 계명을 지키는 것입니다",
        grammatical_explanation: "'In fact'은 강조를 위한 표현, 콜론(:)은 정의를 도입"
      },
      {
        sequence_order: 2,
        semantic_classification: "계명의 성격 - 무거운 짐이 아님",
        original_text: "And his commands are not burdensome",
        korean_translation: "그리고 그분의 계명들은 무거운 짐이 아닙니다",
        grammatical_explanation: "부정문으로 계명의 성격을 명확히 함"
      }
    ],
    vocabulary: [
      {
        word: "in fact",
        ipa_pronunciation: "/ɪn fækt/",
        korean_pronunciation: "인 팩트",
        part_of_speech: "부사구",
        definition_korean: "사실, 실제로 - 강조하여 확인함",
        usage_note: "앞의 진술을 강화하거나 명확히 함"
      },
      {
        word: "burdensome",
        ipa_pronunciation: "/ˈbɜːrdnsəm/",
        korean_pronunciation: "버든섬",
        part_of_speech: "형용사",
        definition_korean: "무거운, 부담스러운 - 짐이 되는",
        usage_note: "헬라어 '바레이아'는 무겁고 힘든 것을 의미"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 하나님을 사랑한다는 것의 의미를 명확히 정의합니다. 그것은 추상적 감정이나 종교적 경험이 아니라 구체적으로 '그분의 계명을 지키는 것'입니다. 이는 예수님의 가르침과 일치합니다(요한복음 14:15, 21). 그런데 요한은 중요한 보충 설명을 추가합니다: 하나님의 계명들은 '무거운 짐이 아니다.' 이는 율법주의와 복음적 순종의 차이를 보여줍니다. 구약의 율법은 죄인에게 무거운 짐이었지만(마태복음 23:4, 사도행전 15:10), 그리스도 안에서 거듭난 신자에게 하나님의 계명은 기쁨이고 자유입니다. 왜냐하면: (1) 성령께서 순종할 능력을 주시고(에스겔 36:27), (2) 하나님의 사랑을 경험한 자에게는 순종이 자연스러운 반응이며, (3) 그리스도의 멍에는 쉽고 가벼우시기 때문입니다(마태복음 11:30).",
      cross_references: ["요한복음 14:15", "마태복음 11:28-30", "시편 119:97", "로마서 8:2-4"]
    },
    korean_translation: {
      natural_translation: "사실, 하나님을 사랑하는 것은 바로 이것입니다. 그분의 계명을 지키는 것입니다. 그리고 그분의 계명들은 무거운 짐이 아닙니다.",
      translation_notes: "'are not burdensome'은 율법주의적 짐이 아닌 자유로운 순종을 의미합니다."
    },
    special_explanation: {
      explanation_type: "율법주의와 복음적 순종의 차이",
      content: "구약의 율법은 죄인에게 정죄의 짐이었지만, 복음 안에서 거듭난 신자에게 하나님의 계명은 사랑의 반응이며 기쁨입니다.",
      examples: [
        "율법주의: 의무, 부담, 두려움으로 지킴",
        "복음적 순종: 사랑, 기쁨, 자원함으로 지킴",
        "차이의 근원: 성령의 능력과 하나님 사랑의 경험"
      ]
    }
  },
  {
    reference: "1 John 5:4",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "승리의 주체와 근거",
        original_text: "for everyone born of God overcomes the world",
        korean_translation: "하나님께로부터 난 사람은 모두 세상을 이기기 때문입니다",
        grammatical_explanation: "'for'는 앞 절(계명이 무겁지 않음)의 이유를 제시"
      },
      {
        sequence_order: 2,
        semantic_classification: "승리의 수단 확인",
        original_text: "This is the victory that has overcome the world, even our faith",
        korean_translation: "세상을 이긴 승리는 바로 이것, 곧 우리의 믿음입니다",
        grammatical_explanation: "현재완료 'has overcome'은 과거의 승리가 현재까지 유효함을 표현"
      }
    ],
    vocabulary: [
      {
        word: "overcomes",
        ipa_pronunciation: "/ˌoʊvərˈkʌmz/",
        korean_pronunciation: "오우버컴즈",
        part_of_speech: "동사",
        definition_korean: "이기다, 정복하다 - 전투에서 승리하다",
        usage_note: "헬라어 '니카오'는 완전한 승리를 의미"
      },
      {
        word: "world",
        ipa_pronunciation: "/wɜːrld/",
        korean_pronunciation: "월드",
        part_of_speech: "명사",
        definition_korean: "세상 - 하나님을 반대하는 가치체계와 영적 세력",
        usage_note: "요한서신에서 '세상'은 하나님과 대적하는 체제를 의미"
      },
      {
        word: "victory",
        ipa_pronunciation: "/ˈvɪktəri/",
        korean_pronunciation: "빅토리",
        part_of_speech: "명사",
        definition_korean: "승리 - 전쟁이나 경쟁에서 이김",
        usage_note: "헬라어 '니케'는 최종적이고 결정적인 승리"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 왜 하나님의 계명이 무겁지 않은지 설명합니다. 그 이유는 하나님께로부터 난 사람(거듭난 신자)은 '세상을 이기기' 때문입니다. 여기서 '세상'은 하나님을 반대하고 신자들을 유혹하여 불순종하게 만드는 모든 영적 세력과 가치체계를 의미합니다. 거듭난 신자는 이 세상을 이미 이겼습니다. 현재 시제 'overcomes'는 계속적인 승리를 의미하며, 현재완료 'has overcome'은 과거에 결정적 승리가 이미 이루어졌음을 나타냅니다. 그 승리의 무기는 바로 '우리의 믿음'입니다. 예수 그리스도를 믿는 믿음이 세상을 이기는 능력입니다. 그리스도께서 이미 십자가와 부활로 세상을 이기셨고(요한복음 16:33), 그와 연합된 신자도 그 승리에 참여합니다.",
      cross_references: ["요한복음 16:33", "요한일서 2:13-14", "로마서 8:37", "고린도전서 15:57"]
    },
    korean_translation: {
      natural_translation: "하나님께로부터 난 사람은 모두 세상을 이기기 때문입니다. 세상을 이긴 승리는 바로 이것, 곧 우리의 믿음입니다.",
      translation_notes: "'our faith'는 예수 그리스도를 믿는 믿음을 의미합니다."
    },
    special_explanation: {
      explanation_type: "믿음의 승리",
      content: "기독교 신앙은 패배주의가 아니라 승리주의입니다. 그리스도 안에서 신자는 이미 승리했으며, 믿음으로 그 승리를 경험합니다.",
      examples: [
        "그리스도의 승리: 십자가와 부활로 세상을 이기심 (요한복음 16:33)",
        "신자의 승리: 그리스도와 연합하여 이김 (로마서 8:37)",
        "승리의 무기: 믿음의 방패 (에베소서 6:16)"
      ]
    }
  },
  {
    reference: "1 John 5:5",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "수사적 질문 - 승리자의 정체",
        original_text: "Who is it that overcomes the world?",
        korean_translation: "세상을 이기는 사람이 누구입니까?",
        grammatical_explanation: "수사적 질문으로 답을 유도"
      },
      {
        sequence_order: 2,
        semantic_classification: "답변 - 예수 신앙의 유일성",
        original_text: "Only the one who believes that Jesus is the Son of God",
        korean_translation: "오직 예수가 하나님의 아들이심을 믿는 사람입니다",
        grammatical_explanation: "'Only'로 배타적 유일성을 강조"
      }
    ],
    vocabulary: [
      {
        word: "only",
        ipa_pronunciation: "/ˈoʊnli/",
        korean_pronunciation: "온리",
        part_of_speech: "부사",
        definition_korean: "오직, 단지 - 이것만, 다른 것은 제외",
        usage_note: "구원의 유일한 길을 강조"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 수사적 질문을 통해 세상을 이기는 자가 누구인지 명확히 밝힙니다. '오직' 예수가 하나님의 아들이심을 믿는 사람만이 세상을 이깁니다. '오직'(only)이라는 단어는 매우 중요합니다. 이는 구원의 배타성과 유일성을 선언합니다. 세상을 이기는 다른 방법은 없습니다. 인간의 노력, 도덕적 선행, 종교적 열심으로는 세상을 이길 수 없습니다. 오직 예수 그리스도를 하나님의 아들로 믿는 믿음만이 승리의 길입니다. 이는 배타적으로 들릴 수 있지만, 동시에 보편적입니다. 누구든지 예수를 믿으면 세상을 이길 수 있기 때문입니다. 이 고백은 5:1의 '예수는 그리스도'와 함께 요한서신의 핵심 신앙고백을 이룹니다.",
      cross_references: ["요한복음 3:36", "사도행전 4:12", "요한일서 5:1", "요한일서 4:15"]
    },
    korean_translation: {
      natural_translation: "세상을 이기는 사람이 누구입니까? 오직 예수가 하나님의 아들이심을 믿는 사람입니다.",
      translation_notes: "'Only'는 구원의 유일한 길이 예수 그리스도임을 강조합니다."
    },
    special_explanation: {
      explanation_type: "구원의 배타성과 보편성",
      content: "기독교는 배타적이면서 동시에 보편적입니다. 예수 그리스도만이 유일한 길이지만(배타성), 누구든지 믿으면 구원받습니다(보편성).",
      examples: [
        "배타성: '다른 이로써는 구원을 받을 수 없나니' (사도행전 4:12)",
        "보편성: '누구든지 주의 이름을 부르는 자는 구원을 받으리라' (로마서 10:13)",
        "통합: 예수 그리스도 안에서만, 그러나 모든 사람에게 열려 있음"
      ]
    }
  }
]

async function main() {
  console.log(`\n=== 1 John 4-5장 분석 저장 시작 ===\n`)

  let successCount = 0
  let failCount = 0

  for (const analysis of analyses) {
    const success = await saveAnalysisToDb(analysis)
    if (success) {
      successCount++
    } else {
      failCount++
    }

    // Rate limiting: 3초 대기
    await new Promise(resolve => setTimeout(resolve, 3000))
  }

  console.log(`\n=== 완료 ===`)
  console.log(`성공: ${successCount}개`)
  console.log(`실패: ${failCount}개`)

  process.exit(failCount > 0 ? 1 : 0)
}

main()
