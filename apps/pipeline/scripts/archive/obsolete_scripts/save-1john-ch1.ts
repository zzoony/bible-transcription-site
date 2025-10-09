import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

const analyses: AnalysisData[] = [
  {
    reference: "1 John 1:1",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "증언의 선언 - 영원하신 말씀에 대한 감각적 경험",
        original_text: "That which was from the beginning, which we have heard, which we have seen with our eyes, which we have looked at and our hands have touched",
        korean_translation: "태초부터 있었던 것, 우리가 들었던 것, 우리 눈으로 본 것, 우리가 주목하여 보았고 우리 손으로 만져본 것",
        grammatical_explanation: "관계대명사 'which'가 반복되어 누적적 증언을 강조하는 구조. 'from the beginning'은 창세기 1:1과 요한복음 1:1을 암시"
      },
      {
        sequence_order: 2,
        semantic_classification: "선포의 목적 - 생명의 말씀에 관한 복음 전파",
        original_text: "this we proclaim concerning the Word of life",
        korean_translation: "이것을 우리가 생명의 말씀에 관하여 선포합니다",
        grammatical_explanation: "'this'는 앞의 모든 감각적 경험을 가리키며, 'concerning'은 선포의 내용을 도입"
      }
    ],
    vocabulary: [
      {
        word: "beginning",
        ipa_pronunciation: "/bɪˈɡɪnɪŋ/",
        korean_pronunciation: "비기닝",
        part_of_speech: "명사",
        definition_korean: "시작, 태초 - 시간의 시작점이자 영원성을 의미",
        usage_note: "요한복음 1:1 '태초에 말씀이 계셨다'와 동일한 신학적 개념"
      },
      {
        word: "heard",
        ipa_pronunciation: "/hɜːrd/",
        korean_pronunciation: "허드",
        part_of_speech: "동사 (과거분사)",
        definition_korean: "들었다 - 청각적 증언",
        usage_note: "예수님의 가르침을 직접 듣고 경험한 사도적 증언"
      },
      {
        word: "seen",
        ipa_pronunciation: "/siːn/",
        korean_pronunciation: "씬",
        part_of_speech: "동사 (과거분사)",
        definition_korean: "보았다 - 시각적 증언",
        usage_note: "요한복음 1:14 '우리가 그의 영광을 보니'와 연결"
      },
      {
        word: "touched",
        ipa_pronunciation: "/tʌtʃt/",
        korean_pronunciation: "터치트",
        part_of_speech: "동사 (과거분사)",
        definition_korean: "만졌다 - 촉각적 증언",
        usage_note: "부활하신 예수님의 육체성을 증언 (영지주의 이단 반박)"
      },
      {
        word: "proclaim",
        ipa_pronunciation: "/prəˈkleɪm/",
        korean_pronunciation: "프러클레임",
        part_of_speech: "동사",
        definition_korean: "선포하다, 공표하다 - 공적인 복음 선포",
        usage_note: "사도적 권위를 가진 복음 전파"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "사도 요한은 편지를 시작하며 예수 그리스도에 대한 자신의 직접적이고 감각적인 경험을 강조합니다. '태초부터 있었던 것'이라는 표현은 예수님의 영원성과 신성을 선언하며, 요한복음 1:1의 '태초에 말씀이 계시니라'와 동일한 신학적 개념입니다. 요한은 청각(들었던 것), 시각(본 것, 주목한 것), 촉각(만진 것)이라는 세 가지 감각을 통해 예수님의 실제 육체적 존재를 증언합니다. 이는 1세기 말에 유행하던 영지주의 이단을 반박하기 위한 것으로, 영지주의자들은 예수님이 육체 없이 영적으로만 존재했다고 주장했습니다.",
      cross_references: ["요한복음 1:1-4", "요한복음 1:14", "요한복음 20:27"]
    },
    korean_translation: {
      natural_translation: "태초부터 계셨던 분, 우리가 들었고 우리 눈으로 보았으며 주목하여 관찰하고 우리 손으로 만져본 생명의 말씀에 관하여 우리가 선포합니다.",
      translation_notes: "'that which'는 인격적 존재(예수님)를 가리키지만 중성 대명사로 표현하여 '말씀'(로고스)의 개념을 강조합니다."
    },
    special_explanation: {
      explanation_type: "신학적·문학적 특징",
      content: "요한은 'which'를 네 번 반복하여 누적적 증언 효과를 만들어냅니다. 각 관계절은 감각의 강도를 높여가며(듣다 → 보다 → 주목하다 → 만지다), 예수님에 대한 경험이 점점 더 직접적이고 친밀해짐을 표현합니다.",
      examples: [
        "감각의 진행: 청각(원거리) → 시각(중거리) → 촉각(근거리)",
        "신학적 균형: 영원성('태초부터') + 육체성('만진 것')"
      ]
    }
  },
  {
    reference: "1 John 1:2",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "현현의 선언 - 생명이 나타나심",
        original_text: "The life appeared",
        korean_translation: "그 생명이 나타나셨고",
        grammatical_explanation: "단순 과거시제로 역사적 사건(성육신과 부활)을 선언"
      },
      {
        sequence_order: 2,
        semantic_classification: "증언의 확인 - 보고 증언함",
        original_text: "we have seen it and testify to it",
        korean_translation: "우리가 그것을 보았고 증언합니다",
        grammatical_explanation: "현재완료는 과거의 경험이 현재의 증언 활동으로 계속됨을 표현"
      },
      {
        sequence_order: 3,
        semantic_classification: "선포의 내용 - 영원한 생명의 정체",
        original_text: "we proclaim to you the eternal life, which was with the Father and has appeared to us",
        korean_translation: "아버지와 함께 계셨다가 우리에게 나타나신 영원한 생명을 여러분에게 선포합니다",
        grammatical_explanation: "'which'절이 '영원한 생명'을 수식하며 그 정체를 설명"
      }
    ],
    vocabulary: [
      {
        word: "appeared",
        ipa_pronunciation: "/əˈpɪrd/",
        korean_pronunciation: "어피어드",
        part_of_speech: "동사 (과거)",
        definition_korean: "나타나다, 현현하다 - 보이지 않던 것이 보이게 됨",
        usage_note: "성육신과 부활을 통한 예수님의 역사적 현현"
      },
      {
        word: "testify",
        ipa_pronunciation: "/ˈtestɪfaɪ/",
        korean_pronunciation: "테스티파이",
        part_of_speech: "동사",
        definition_korean: "증언하다 - 법적·공식적 진술",
        usage_note: "사도적 증인으로서의 권위 있는 선언"
      },
      {
        word: "eternal life",
        ipa_pronunciation: "/ɪˈtɜːrnl laɪf/",
        korean_pronunciation: "이터널 라이프",
        part_of_speech: "명사구",
        definition_korean: "영원한 생명 - 하나님과의 관계를 통한 영생",
        usage_note: "단순한 불멸이 아니라 하나님과의 교제를 통한 질적 생명"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 '생명'이 추상적 개념이 아니라 구체적으로 나타난 인격체(예수 그리스도)임을 강조합니다. '나타났다'는 표현은 성육신 사건을 가리키며, 보이지 않던 하나님이 예수 그리스도 안에서 인간의 역사 속에 실제로 현현하셨음을 의미합니다.",
      cross_references: ["요한복음 1:1-2", "요한복음 1:14", "요한복음 17:3"]
    },
    korean_translation: {
      natural_translation: "그 생명이 나타나셨습니다. 우리가 보았고 증언하며, 아버지와 함께 계셨다가 우리에게 나타나신 영원한 생명을 여러분에게 선포합니다.",
      translation_notes: "'the life'와 'the eternal life'는 모두 예수 그리스도를 가리키는 인격적 표현입니다."
    },
    special_explanation: {
      explanation_type: "신학적 개념",
      content: "요한은 '생명'을 의인화하여 예수 그리스도와 동일시합니다. 이는 요한복음 14:6 '내가 곧 길이요 진리요 생명이니'와 같은 맥락입니다.",
      examples: [
        "선재성: '아버지와 함께 계셨다' - 성육신 이전의 영원성",
        "현현: '우리에게 나타나셨다' - 역사 속 구체적 사건"
      ]
    }
  },
  {
    reference: "1 John 1:3",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "선포의 반복 - 보고 들은 것의 전달",
        original_text: "We proclaim to you what we have seen and heard",
        korean_translation: "우리가 보고 들은 것을 여러분에게 선포합니다",
        grammatical_explanation: "1절의 감각적 증언을 요약하여 반복"
      },
      {
        sequence_order: 2,
        semantic_classification: "선포의 목적 - 교제의 확장",
        original_text: "so that you also may have fellowship with us",
        korean_translation: "여러분도 우리와 교제를 나누게 하기 위함입니다",
        grammatical_explanation: "'so that'은 목적절을 이끌며, 복음 선포의 궁극적 목적이 관계적 교제임을 밝힘"
      },
      {
        sequence_order: 3,
        semantic_classification: "교제의 본질 - 삼위일체와의 관계",
        original_text: "And our fellowship is with the Father and with his Son, Jesus Christ",
        korean_translation: "우리의 교제는 아버지와 그분의 아들 예수 그리스도와 함께하는 것입니다",
        grammatical_explanation: "교제의 수직적(하나님과)이고 삼위일체적 차원을 명시"
      }
    ],
    vocabulary: [
      {
        word: "fellowship",
        ipa_pronunciation: "/ˈfeloʊʃɪp/",
        korean_pronunciation: "펠로우십",
        part_of_speech: "명사",
        definition_korean: "교제, 친교 - 깊은 관계적 나눔",
        usage_note: "단순한 사교 모임이 아니라 삼위일체 하나님과 믿는 자들이 함께 나누는 영적 연합"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 복음 선포의 궁극적 목적이 정보 전달이 아니라 '교제'의 확장임을 밝힙니다. 초대교회의 핵심 가치 중 하나였던 코이노니아는 단순한 사교적 친목이 아니라, 공동의 믿음과 성령 안에서 이루어지는 깊은 영적 연합과 나눔을 의미합니다.",
      cross_references: ["사도행전 2:42", "고린도전서 1:9", "요한복음 17:20-23"]
    },
    korean_translation: {
      natural_translation: "우리가 보고 들은 것을 여러분에게 선포하는 것은, 여러분도 우리와 교제를 나누게 하기 위함입니다. 우리의 교제는 아버지와 그분의 아들 예수 그리스도와 함께하는 것입니다.",
      translation_notes: "'fellowship'(코이노니아)는 '나눔, 참여, 친교, 동역'의 의미를 모두 포함하는 풍성한 개념입니다."
    },
    special_explanation: {
      explanation_type: "신학적·관계적 구조",
      content: "요한은 교제의 삼중 구조를 제시합니다: (1) 사도들이 본 것 → (2) 독자들과의 교제 → (3) 하나님과의 교제.",
      examples: [
        "교제의 수평적 차원: 신자들 간의 관계",
        "교제의 수직적 차원: 하나님과의 관계"
      ]
    }
  },
  {
    reference: "1 John 1:4",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "기록의 목적 - 기쁨의 완성",
        original_text: "We write this to make our joy complete",
        korean_translation: "우리가 이것을 쓰는 것은 우리의 기쁨이 충만하게 하려는 것입니다",
        grammatical_explanation: "목적 부정사 'to make'가 편지 작성의 목적을 나타냄"
      }
    ],
    vocabulary: [
      {
        word: "joy",
        ipa_pronunciation: "/dʒɔɪ/",
        korean_pronunciation: "조이",
        part_of_speech: "명사",
        definition_korean: "기쁨 - 환경을 초월한 영적 희열",
        usage_note: "일시적 감정이 아니라 하나님과의 교제에서 오는 지속적 상태"
      },
      {
        word: "complete",
        ipa_pronunciation: "/kəmˈpliːt/",
        korean_pronunciation: "컴플리트",
        part_of_speech: "형용사",
        definition_korean: "완전한, 충만한 - 더할 것이 없이 가득 찬 상태",
        usage_note: "헬라어로 '채워진, 충만한'의 의미"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 편지를 쓰는 목적이 단순히 정보 전달이나 교리 교육이 아니라 '기쁨의 충만함'임을 밝힙니다. 목회자나 영적 지도자의 기쁨은 양 떼가 진리 안에서 행할 때 충만해집니다.",
      cross_references: ["요한복음 15:11", "요한복음 16:24", "요한3서 1:4"]
    },
    korean_translation: {
      natural_translation: "우리가 이것을 쓰는 것은 우리의 기쁨이 충만하게 되도록 하기 위함입니다.",
      translation_notes: "일부 사본은 '여러분의 기쁨'으로 되어 있으나, 더 나은 사본 증거는 '우리의 기쁨'을 지지합니다."
    },
    special_explanation: {
      explanation_type: "문헌 비평 및 신학적 의미",
      content: "헬라어 사본에서 '우리의'와 '여러분의'는 한 글자 차이로, 필사 과정에서 혼동이 일어났을 가능성이 있습니다. 신학적으로 이는 영적 지도자의 기쁨이 회중의 영적 상태와 불가분하게 연결되어 있음을 보여줍니다.",
      examples: [
        "평행 구절: 요한3서 1:4 '내 자녀들이 진리 안에 행함을 듣는 것보다 더 큰 기쁨이 없다'"
      ]
    }
  },
  {
    reference: "1 John 1:5",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "메시지의 출처 - 하나님으로부터 들은 소식",
        original_text: "This is the message we have heard from him and declare to you",
        korean_translation: "이것은 우리가 그분에게서 듣고 여러분에게 선포하는 메시지입니다",
        grammatical_explanation: "'from him'은 예수 그리스도를 가리키며, 메시지의 권위 있는 출처를 명시"
      },
      {
        sequence_order: 2,
        semantic_classification: "메시지의 내용 - 하나님은 빛이심",
        original_text: "God is light",
        korean_translation: "하나님은 빛이십니다",
        grammatical_explanation: "주어+be동사+보어의 정의문. '빛'은 하나님의 본질적 속성을 표현"
      },
      {
        sequence_order: 3,
        semantic_classification: "대조적 강조 - 어둠의 완전한 부재",
        original_text: "in him there is no darkness at all",
        korean_translation: "그분 안에는 어둠이 조금도 없습니다",
        grammatical_explanation: "'at all'은 부정을 극대화하는 강조 표현"
      }
    ],
    vocabulary: [
      {
        word: "light",
        ipa_pronunciation: "/laɪt/",
        korean_pronunciation: "라이트",
        part_of_speech: "명사",
        definition_korean: "빛 - 하나님의 거룩함, 진리, 순결함, 영광을 상징",
        usage_note: "구약에서 하나님의 임재와 영광을 나타내는 주요 이미지"
      },
      {
        word: "darkness",
        ipa_pronunciation: "/ˈdɑːrknəs/",
        korean_pronunciation: "다크니스",
        part_of_speech: "명사",
        definition_korean: "어둠 - 죄, 거짓, 악, 무지를 상징",
        usage_note: "빛과 대조되는 개념으로, 도덕적·영적 어둠을 의미"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 복음의 핵심 메시지를 선포합니다: '하나님은 빛이시다.' '빛'은 하나님의 본질적 속성을 나타내며, 거룩함, 순결함, 진리, 영광, 선하심을 포괄적으로 상징합니다. '그분 안에는 어둠이 조금도 없습니다'는 하나님 안에 죄, 거짓, 악, 불의가 전혀 존재할 수 없음을 강조하는 절대적 진술입니다.",
      cross_references: ["요한복음 1:4-5", "요한복음 8:12", "시편 27:1"]
    },
    korean_translation: {
      natural_translation: "우리가 그분에게서 듣고 여러분에게 선포하는 메시지는 이것입니다. 하나님은 빛이시며, 그분 안에는 어둠이 조금도 없습니다.",
      translation_notes: "'빛'은 하나님의 도덕적 완전함과 거룩한 본성을 나타내는 핵심 신학적 은유입니다."
    },
    special_explanation: {
      explanation_type: "신학적·논쟁적 배경",
      content: "요한이 '하나님은 빛'이라는 메시지를 강조하는 것은 1세기 말 영지주의의 이원론을 반박하기 위함입니다. 영지주의자들은 영적 세계(빛)와 물질 세계(어둠)를 근본적으로 대립시켰으나, 요한은 '어둠이 조금도 없다'는 극단적 부정 표현을 사용하여 하나님의 절대적 순수성과 거룩함을 선포합니다.",
      examples: [
        "빛의 속성: 거룩함, 진리, 순결함, 영광, 생명",
        "어둠의 속성: 죄, 거짓, 불의, 악, 죽음"
      ]
    }
  },
  {
    reference: "1 John 1:6",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "거짓 주장의 조건절 - 교제를 주장하면서 어둠 가운데 행함",
        original_text: "If we claim to have fellowship with him and yet walk in the darkness",
        korean_translation: "만일 우리가 그분과 교제가 있다고 말하면서도 어둠 가운데 행한다면",
        grammatical_explanation: "조건절과 대조 접속사가 결합하여 모순된 행위를 지적"
      },
      {
        sequence_order: 2,
        semantic_classification: "거짓의 판정 - 말과 행동의 불일치",
        original_text: "we lie and do not live out the truth",
        korean_translation: "우리는 거짓말하는 것이며 진리를 행하지 않는 것입니다",
        grammatical_explanation: "두 개의 동사구가 병렬되어 거짓의 두 측면을 설명"
      }
    ],
    vocabulary: [
      {
        word: "claim",
        ipa_pronunciation: "/kleɪm/",
        korean_pronunciation: "클레임",
        part_of_speech: "동사",
        definition_korean: "주장하다, 말하다 - 공식적 선언이나 주장",
        usage_note: "단순한 말이 아니라 확신을 가진 주장"
      },
      {
        word: "walk",
        ipa_pronunciation: "/wɔːk/",
        korean_pronunciation: "워크",
        part_of_speech: "동사",
        definition_korean: "걷다, 행하다 - 지속적인 삶의 방식과 행동 패턴",
        usage_note: "히브리적 관용어로 '삶의 방식, 행실'을 의미"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 5절의 신학적 선언('하나님은 빛')을 실천적 적용으로 연결합니다. '행하다'는 일시적 행동이 아니라 지속적이고 습관적인 삶의 방식을 나타냅니다. 요한은 어둠 가운데 행하는 삶의 방식과 하나님과의 교제는 양립할 수 없다고 단언합니다.",
      cross_references: ["요한복음 3:19-21", "에베소서 5:8-11", "야고보서 2:14-17"]
    },
    korean_translation: {
      natural_translation: "만일 우리가 하나님과 교제가 있다고 말하면서도 어둠 가운데 행한다면, 우리는 거짓말하는 것이며 진리를 실천하지 않는 것입니다.",
      translation_notes: "'walk in darkness'는 일회적 실수가 아니라 지속적인 죄의 삶을 의미합니다."
    },
    special_explanation: {
      explanation_type: "히브리적 사고와 실천적 진리관",
      content: "요한은 헬라 철학의 지적 이원론이 아니라 히브리적 통합 사고를 반영합니다. '진리를 행한다'는 표현은 히브리 사고에서는 자연스러운 개념입니다. 요한은 '말'과 '행함'의 일치를 강조합니다.",
      examples: [
        "거짓 주장의 구조: '교제가 있다' (말) + '어둠 가운데 행함' (행동) = 모순"
      ]
    }
  },
  {
    reference: "1 John 1:7",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "대조적 조건 - 빛 가운데 행함",
        original_text: "But if we walk in the light, as he is in the light",
        korean_translation: "그러나 만일 우리가 빛 가운데 행한다면, 그분이 빛 가운데 계신 것처럼",
        grammatical_explanation: "'But'은 6절과 대조. 'as'는 하나님의 빛 가운데 계심과 동일한 방식을 의미"
      },
      {
        sequence_order: 2,
        semantic_classification: "첫 번째 결과 - 서로 간의 교제",
        original_text: "we have fellowship with one another",
        korean_translation: "우리는 서로 교제를 나눕니다",
        grammatical_explanation: "하나님과의 수직적 교제가 수평적 교제로 이어짐"
      },
      {
        sequence_order: 3,
        semantic_classification: "두 번째 결과 - 예수의 피로 말미암은 정결함",
        original_text: "and the blood of Jesus, his Son, purifies us from all sin",
        korean_translation: "그리고 그분의 아들 예수의 피가 우리를 모든 죄에서 깨끗하게 합니다",
        grammatical_explanation: "현재시제는 지속적이고 반복적인 정결케 함을 의미"
      }
    ],
    vocabulary: [
      {
        word: "blood",
        ipa_pronunciation: "/blʌd/",
        korean_pronunciation: "블러드",
        part_of_speech: "명사",
        definition_korean: "피 - 예수님의 십자가 죽음을 상징",
        usage_note: "구약의 속죄 제사를 성취하는 궁극적 희생"
      },
      {
        word: "purifies",
        ipa_pronunciation: "/ˈpjʊrɪfaɪz/",
        korean_pronunciation: "퓨리파이즈",
        part_of_speech: "동사",
        definition_korean: "깨끗하게 하다, 정결케 하다 - 죄를 씻어내다",
        usage_note: "현재시제로 지속적이고 반복적인 정결케 함을 의미"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 6절의 부정적 경고와 대조하여 긍정적 약속을 제시합니다. '빛 가운데 행한다'는 것은 하나님의 거룩함과 진리를 따라 사는 것을 의미합니다. 요한은 두 가지 결과를 제시합니다: 서로 간의 교제와 예수의 피로 말미암은 모든 죄에서의 정결함.",
      cross_references: ["레위기 17:11", "히브리서 9:14, 22", "에베소서 5:2"]
    },
    korean_translation: {
      natural_translation: "그러나 만일 우리가 빛 가운데 행한다면, 하나님께서 빛 가운데 계신 것처럼, 우리는 서로 교제를 나누고, 그분의 아들 예수의 피가 우리를 모든 죄에서 깨끗하게 합니다.",
      translation_notes: "'purifies'의 현재시제는 일회적 정결이 아니라 계속되는 정결케 하심을 나타냅니다."
    },
    special_explanation: {
      explanation_type: "속죄론과 성화론의 통합",
      content: "이 구절은 칭의와 성화를 모두 다룹니다. '빛 가운데 행함'은 성화의 과정을 나타내고, '예수의 피로 정결케 됨'은 칭의의 근거를 나타냅니다. 현재시제는 이것이 과거의 일회적 사건이 아니라 현재 진행 중인 은혜임을 강조합니다.",
      examples: [
        "성화의 조건: 빛 가운데 행함",
        "칭의의 근거: 예수의 피"
      ]
    }
  },
  {
    reference: "1 John 1:8",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "두 번째 거짓 주장 - 죄가 없다는 주장",
        original_text: "If we claim to be without sin",
        korean_translation: "만일 우리가 죄가 없다고 말한다면",
        grammatical_explanation: "'without sin'은 죄의 본성이나 경향이 없다는 의미"
      },
      {
        sequence_order: 2,
        semantic_classification: "자기기만의 판정 - 스스로를 속임",
        original_text: "we deceive ourselves",
        korean_translation: "우리는 스스로를 속이는 것입니다",
        grammatical_explanation: "재귀대명사로 자기기만을 강조"
      },
      {
        sequence_order: 3,
        semantic_classification: "진리의 부재 - 진리가 우리 안에 없음",
        original_text: "and the truth is not in us",
        korean_translation: "그리고 진리가 우리 안에 없습니다",
        grammatical_explanation: "진리의 내재화를 의미"
      }
    ],
    vocabulary: [
      {
        word: "deceive",
        ipa_pronunciation: "/dɪˈsiːv/",
        korean_pronunciation: "디씨브",
        part_of_speech: "동사",
        definition_korean: "속이다, 기만하다 - 거짓을 진실로 믿게 함",
        usage_note: "6절의 '거짓말하다'와 달리 '자기기만'"
      },
      {
        word: "truth",
        ipa_pronunciation: "/truːθ/",
        korean_pronunciation: "트루쓰",
        part_of_speech: "명사",
        definition_korean: "진리 - 하나님의 말씀과 예수 그리스도를 통해 계시된 실재",
        usage_note: "하나님의 계시와 실재를 의미"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 세 가지 거짓 주장 중 두 번째를 다룹니다. 첫 번째가 죄의 행위를 다루었다면, 두 번째는 죄의 본성 자체를 부인하는 것을 다룹니다. 이는 1세기의 영지주의 이단이 주장하던 '영적 완전주의'를 반박하는 것으로 보입니다.",
      cross_references: ["잠언 20:9", "전도서 7:20", "로마서 3:23"]
    },
    korean_translation: {
      natural_translation: "만일 우리가 죄가 없다고 말한다면, 우리는 스스로를 속이는 것이며, 진리가 우리 안에 없습니다.",
      translation_notes: "'without sin'은 죄의 행위가 아니라 죄의 본성 자체를 부인하는 것입니다."
    },
    special_explanation: {
      explanation_type: "영지주의 완전주의 논박",
      content: "1세기의 일부 영지주의자들은 '영적 지식'을 얻은 사람은 죄의 본성을 초월하여 완전해진다고 주장했습니다. 요한은 이러한 주장이 '자기기만'이라고 단언합니다.",
      examples: [
        "자기기만의 위험: 회개 능력 상실"
      ]
    }
  },
  {
    reference: "1 John 1:9",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "조건과 행동 - 죄를 고백함",
        original_text: "If we confess our sins",
        korean_translation: "만일 우리가 우리의 죄를 고백한다면",
        grammatical_explanation: "8절의 부정적 조건과 대조되는 긍정적 조건"
      },
      {
        sequence_order: 2,
        semantic_classification: "하나님의 성품 - 신실하심과 의로우심",
        original_text: "he is faithful and just",
        korean_translation: "그분은 신실하시고 의로우셔서",
        grammatical_explanation: "하나님의 두 속성이 용서의 근거가 됨을 명시"
      },
      {
        sequence_order: 3,
        semantic_classification: "첫 번째 결과 - 죄 사함",
        original_text: "and will forgive us our sins",
        korean_translation: "우리의 죄를 용서하시고",
        grammatical_explanation: "하나님의 확실한 약속을 나타내는 미래시제"
      },
      {
        sequence_order: 4,
        semantic_classification: "두 번째 결과 - 불의에서 정결케 함",
        original_text: "and purify us from all unrighteousness",
        korean_translation: "모든 불의에서 우리를 깨끗하게 하십니다",
        grammatical_explanation: "7절의 '정결케 함'과 연결"
      }
    ],
    vocabulary: [
      {
        word: "confess",
        ipa_pronunciation: "/kənˈfes/",
        korean_pronunciation: "컨페스",
        part_of_speech: "동사",
        definition_korean: "고백하다 - 죄를 인정하고 공개적으로 시인함",
        usage_note: "'같은 말을 하다'는 어원으로, 하나님이 죄라고 하시는 것을 동일하게 죄로 인정하는 것"
      },
      {
        word: "faithful",
        ipa_pronunciation: "/ˈfeɪθfəl/",
        korean_pronunciation: "페이쓰풀",
        part_of_speech: "형용사",
        definition_korean: "신실한 - 약속을 지키시는 하나님의 신뢰성",
        usage_note: "하나님의 언약적 신실함"
      },
      {
        word: "just",
        ipa_pronunciation: "/dʒʌst/",
        korean_pronunciation: "저스트",
        part_of_speech: "형용사",
        definition_korean: "의로운, 공의로운 - 도덕적으로 올바르고 공정하신 하나님의 속성",
        usage_note: "예수님의 십자가 희생으로 공의가 만족되었기에 의롭게 용서하실 수 있음"
      },
      {
        word: "forgive",
        ipa_pronunciation: "/fərˈɡɪv/",
        korean_pronunciation: "퍼기브",
        part_of_speech: "동사",
        definition_korean: "용서하다 - 죄의 형벌과 결과를 면제함",
        usage_note: "'놓아주다, 보내다'는 어원으로 죄의 빚을 탕감하는 것"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 8절의 부정적 경고와 대조하여 긍정적 약속을 제시합니다. '고백하다'는 하나님이 죄라고 하시는 것을 우리도 죄로 인정하고 시인하는 것을 의미합니다. 요한은 용서의 근거를 우리의 진실성이 아니라 하나님의 성품에 둡니다: '그분은 신실하시고 의로우시다.' 하나님은 두 가지를 행하십니다: 죄를 용서하시고, 모든 불의에서 깨끗하게 하십니다.",
      cross_references: ["시편 32:5", "잠언 28:13", "로마서 3:24-26"]
    },
    korean_translation: {
      natural_translation: "만일 우리가 우리의 죄를 고백한다면, 하나님은 신실하시고 의로우셔서 우리의 죄를 용서하시고 모든 불의에서 우리를 깨끗하게 하십니다.",
      translation_notes: "하나님이 '의로우시기에' 용서하신다는 것은 십자가가 하나님의 공의를 만족시켰기 때문입니다."
    },
    special_explanation: {
      explanation_type: "신학적 핵심 - 하나님의 의와 용서의 양립",
      content: "이 구절은 기독교 속죄론의 핵심을 담고 있습니다. 하나님이 '의로우시기에' 용서하신다는 표현은 역설적으로 들릴 수 있습니다. 예수 그리스도의 십자가 희생이 하나님의 공의를 완전히 만족시켰기 때문에, 하나님은 공의를 타협하지 않으면서도 죄인을 의롭게 용서하실 수 있습니다.",
      examples: [
        "용서의 근거: 우리의 고백 + 하나님의 신실하심과 의로우심",
        "이중 효과: 용서(죄의 형벌) + 정결(죄의 오염)"
      ]
    }
  },
  {
    reference: "1 John 1:10",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "세 번째 거짓 주장 - 죄를 짓지 않았다는 주장",
        original_text: "If we claim we have not sinned",
        korean_translation: "만일 우리가 죄를 짓지 않았다고 말한다면",
        grammatical_explanation: "현재완료는 과거부터 현재까지 죄를 짓지 않았다는 주장"
      },
      {
        sequence_order: 2,
        semantic_classification: "하나님을 거짓말쟁이로 만듦",
        original_text: "we make him out to be a liar",
        korean_translation: "우리는 하나님을 거짓말쟁이로 만드는 것입니다",
        grammatical_explanation: "매우 심각한 비난"
      },
      {
        sequence_order: 3,
        semantic_classification: "하나님의 말씀의 부재",
        original_text: "and his word is not in us",
        korean_translation: "그리고 그분의 말씀이 우리 안에 없습니다",
        grammatical_explanation: "8절과 평행 구조"
      }
    ],
    vocabulary: [
      {
        word: "sinned",
        ipa_pronunciation: "/sɪnd/",
        korean_pronunciation: "신드",
        part_of_speech: "동사 (과거분사)",
        definition_korean: "죄를 짓다 - 실제로 죄의 행위를 범함",
        usage_note: "8절의 '죄가 없다'와 달리 구체적인 죄의 행위를 부인하는 것"
      },
      {
        word: "liar",
        ipa_pronunciation: "/ˈlaɪər/",
        korean_pronunciation: "라이어",
        part_of_speech: "명사",
        definition_korean: "거짓말쟁이 - 진실을 말하지 않는 사람",
        usage_note: "하나님은 '거짓말하실 수 없는 분'이므로 이는 극단적 모순"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 세 가지 거짓 주장 중 마지막을 제시합니다. 8절의 '죄가 없다'는 죄의 본성 자체를 부인하는 것이고, 10절의 '죄를 짓지 않았다'는 실제로 죄의 행위를 범하지 않았다는 주장입니다. 성경 전체는 모든 사람이 죄인임을 선언합니다. 따라서 우리가 죄를 짓지 않았다고 주장하는 것은 하나님의 이 모든 선언을 거짓이라고 주장하는 것이며, 결과적으로 하나님을 거짓말쟁이로 만드는 것입니다.",
      cross_references: ["로마서 3:10, 23", "전도서 7:20", "히브리서 6:18"]
    },
    korean_translation: {
      natural_translation: "만일 우리가 죄를 짓지 않았다고 말한다면, 우리는 하나님을 거짓말쟁이로 만드는 것이며, 그분의 말씀이 우리 안에 없습니다.",
      translation_notes: "하나님을 '거짓말쟁이로 만든다'는 것은 하나님의 '모든 사람이 죄인'이라는 선언을 부정하는 것입니다."
    },
    special_explanation: {
      explanation_type: "세 가지 거짓 주장의 구조",
      content: "요한은 1:6-10에서 세 가지 거짓 주장을 대칭적 구조로 제시합니다. 세 번째 주장이 가장 심각한 결과를 초래합니다. 하나님을 거짓말쟁이로 만드는 것은 하나님의 성품과 말씀의 신뢰성 자체를 부정하는 것이기 때문입니다.",
      examples: [
        "6절: 죄의 행위와 주장의 불일치 → 거짓말",
        "8절: 죄의 본성 부인 → 자기기만",
        "10절: 죄의 행위 부인 → 하나님을 거짓말쟁이로 만듦 (가장 심각)"
      ]
    }
  }
]

async function main() {
  console.log(`1 John 1장 ${analyses.length}개 구절 분석을 저장합니다...\n`)

  for (const analysis of analyses) {
    const success = await saveAnalysisToDb(analysis)
    if (!success) {
      console.error(`\n❌ ${analysis.reference} 저장 실패`)
    }
    await new Promise(resolve => setTimeout(resolve, 1000))
  }

  console.log('\n✅ 1 John 1장 전체 분석 저장 완료!')
}

main()

export { analyses, AnalysisData }
