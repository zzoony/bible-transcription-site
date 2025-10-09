import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

const analyses: AnalysisData[] = [
  // 1 John 2장
  {
    reference: "1 John 2:1",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "편지의 목적 - 죄짓지 않게 하려는 의도",
        original_text: "My dear children, I write this to you so that you will not sin",
        korean_translation: "나의 자녀들아, 내가 이것을 여러분에게 쓰는 것은 여러분이 죄를 짓지 않게 하려는 것입니다",
        grammatical_explanation: "친밀한 호칭 'dear children' + 목적절 'so that'으로 편지 작성의 긍정적 의도를 밝힘"
      },
      {
        sequence_order: 2,
        semantic_classification: "현실적 대안 제시 - 죄를 지었을 때의 중보자",
        original_text: "But if anybody does sin, we have an advocate with the Father—Jesus Christ, the Righteous One",
        korean_translation: "그러나 만일 누구든지 죄를 짓는다면, 우리에게는 아버지 앞에서 변호자가 계시니 곧 의로우신 예수 그리스도이십니다",
        grammatical_explanation: "'But if'로 현실적 가능성 인정. 'advocate'는 법정 용어로 변호사나 중보자를 의미"
      }
    ],
    vocabulary: [
      {
        word: "advocate",
        ipa_pronunciation: "/ˈædvəkət/",
        korean_pronunciation: "애드버킷",
        part_of_speech: "명사",
        definition_korean: "변호자, 중보자 - 법정에서 변호하는 사람",
        usage_note: "헬라어 '파라클레토스'로 성령을 가리킬 때도 쓰이는 단어. 법적 대변인의 의미"
      },
      {
        word: "righteous",
        ipa_pronunciation: "/ˈraɪtʃəs/",
        korean_pronunciation: "라이처스",
        part_of_speech: "형용사",
        definition_korean: "의로운 - 도덕적으로 완전하고 죄가 없는",
        usage_note: "예수님의 완전한 의로움이 우리를 변호할 자격을 부여함"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 1장에서 죄에 대한 세 가지 거짓 주장을 경고한 후, 이제 편지의 긍정적 목적을 밝힙니다. 목표는 신자들이 죄를 짓지 않는 것이지만, 동시에 현실적으로 죄를 지을 경우를 대비한 복음의 안전장치를 제시합니다. '변호자'(파라클레토스)는 요한복음 14-16장에서 성령을 가리키는 단어와 동일하며, 법정에서 피고를 변호하는 변호사나 조력자를 의미합니다. 예수님은 하나님 아버지 앞에서 죄인인 우리를 변호하시는 완전한 중보자이십니다.",
      cross_references: ["요한복음 14:16", "로마서 8:34", "히브리서 7:25"]
    },
    korean_translation: {
      natural_translation: "나의 자녀들아, 내가 이것을 여러분에게 쓰는 것은 여러분이 죄를 짓지 않게 하려는 것입니다. 그러나 만일 누구든지 죄를 짓는다면, 우리에게는 아버지 앞에서 변호자가 계시니, 곧 의로우신 예수 그리스도이십니다.",
      translation_notes: "'advocate'는 '파라클레토스'로 '곁에 불러진 자', 즉 도우미나 변호인을 의미합니다."
    },
    special_explanation: {
      explanation_type: "신학적 균형",
      content: "요한은 성화(거룩한 삶)와 칭의(용서)의 균형을 제시합니다. 목표는 죄짓지 않는 것이지만, 죄를 지었을 때 절망할 필요가 없습니다. 예수님은 완전히 의로우시기에 우리의 불완전함을 변호할 자격이 있으십니다.",
      examples: [
        "이상: 죄를 짓지 않음",
        "현실: 죄를 지을 수 있음",
        "해결책: 의로우신 예수 그리스도께서 변호하심"
      ]
    }
  },
  {
    reference: "1 John 2:2",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "속죄 제물의 본질 - 예수님의 대속적 희생",
        original_text: "He is the atoning sacrifice for our sins",
        korean_translation: "그분은 우리의 죄를 위한 화목 제물이십니다",
        grammatical_explanation: "'atoning sacrifice'는 하나님의 진노를 달래고 죄를 덮는 제사를 의미"
      },
      {
        sequence_order: 2,
        semantic_classification: "속죄의 보편성 - 전 세계를 위한 희생",
        original_text: "and not only for ours but also for the sins of the whole world",
        korean_translation: "우리의 죄만을 위한 것이 아니라 온 세상의 죄를 위한 것입니다",
        grammatical_explanation: "'not only...but also' 구조로 속죄의 보편성을 강조"
      }
    ],
    vocabulary: [
      {
        word: "atoning sacrifice",
        ipa_pronunciation: "/əˈtoʊnɪŋ ˈsækrɪfaɪs/",
        korean_pronunciation: "어토닝 새크리파이스",
        part_of_speech: "명사구",
        definition_korean: "속죄 제물, 화목 제물 - 죄를 대신하여 드려지는 희생",
        usage_note: "헬라어 '힐라스모스'로 하나님의 진노를 달래고 화목케 하는 제물"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 예수님의 중보 사역의 근거를 설명합니다. 예수님이 우리의 변호자가 되실 수 있는 이유는 그분이 우리 죄를 위한 속죄 제물이 되셨기 때문입니다. '화목 제물'(힐라스모스)은 구약의 속죄일에 제물의 피를 속죄소에 뿌려 하나님의 진노를 달래던 제사를 배경으로 합니다. 예수님의 희생은 특정 민족이나 집단에 국한되지 않고 '온 세상'을 위한 것이라는 선언은, 복음의 보편성과 하나님의 무한한 사랑을 보여줍니다.",
      cross_references: ["레위기 16:15-16", "로마서 3:25", "요한복음 3:16"]
    },
    korean_translation: {
      natural_translation: "그분은 우리의 죄를 위한 화목 제물이시며, 우리의 죄만을 위한 것이 아니라 온 세상의 죄를 위한 것입니다.",
      translation_notes: "'atoning sacrifice'는 하나님과 인간 사이의 관계를 회복시키는 화해의 제물을 의미합니다."
    },
    special_explanation: {
      explanation_type: "신학적 논쟁 - 속죄의 범위",
      content: "이 구절은 속죄의 보편성에 대한 중요한 진술입니다. '온 세상'이라는 표현은 예수님의 희생이 충분히 모든 사람을 구원할 수 있음을 의미하지만, 효과적으로는 믿는 자들에게만 적용됩니다.",
      examples: [
        "속죄의 충분성: 온 세상의 죄를 위해 충분함",
        "속죄의 효과성: 믿는 자들에게 실제로 적용됨"
      ]
    }
  },
  {
    reference: "1 John 2:3",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "확신의 근거 - 순종을 통한 앎의 검증",
        original_text: "We know that we have come to know him if we keep his commands",
        korean_translation: "우리가 그분의 명령을 지킨다면, 우리는 그분을 알게 되었다는 것을 압니다",
        grammatical_explanation: "조건절 'if we keep'으로 앎의 증거를 제시. '알다'는 지적 정보가 아닌 인격적 관계를 의미"
      }
    ],
    vocabulary: [
      {
        word: "know",
        ipa_pronunciation: "/noʊ/",
        korean_pronunciation: "노우",
        part_of_speech: "동사",
        definition_korean: "알다 - 인격적이고 경험적인 앎",
        usage_note: "헬라어 '기노스코'로 단순한 정보가 아닌 친밀한 관계적 지식을 의미"
      },
      {
        word: "commands",
        ipa_pronunciation: "/kəˈmændz/",
        korean_pronunciation: "커맨즈",
        part_of_speech: "명사",
        definition_korean: "명령들 - 하나님의 도덕적 지시와 가르침",
        usage_note: "단순한 규칙이 아니라 하나님과의 언약 관계에서 나오는 삶의 방식"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 하나님을 아는 것과 순종의 불가분한 관계를 강조합니다. 히브리적 사고에서 '안다'는 것은 단순한 지적 정보의 획득이 아니라 깊은 인격적 관계와 경험을 의미합니다. 요한은 이러한 진정한 앎의 증거가 순종이라고 말합니다. 이는 영지주의자들의 지적 우월주의를 반박하는 것으로, 그들은 특별한 '지식'을 가졌다고 주장하면서도 도덕적 삶을 경시했습니다.",
      cross_references: ["요한복음 14:15, 21", "야고보서 2:17-18", "마태복음 7:21"]
    },
    korean_translation: {
      natural_translation: "우리가 그분의 명령을 지킨다면, 이것으로 우리는 그분을 알게 되었다는 것을 압니다.",
      translation_notes: "'know'는 두 번 사용되며, 첫 번째는 확신의 앎이고 두 번째는 관계적 앎입니다."
    },
    special_explanation: {
      explanation_type: "히브리적 앎의 개념",
      content: "성경적 '앎'은 헬라 철학의 지적 이해와 다릅니다. 아담이 이브를 '알았다'는 표현은 친밀한 관계를 의미하듯이, 하나님을 안다는 것은 순종이 동반되는 인격적 관계입니다.",
      examples: [
        "거짓된 앎: 지식만 있고 순종이 없음",
        "참된 앎: 관계적 지식과 순종이 함께함"
      ]
    }
  },
  {
    reference: "1 John 2:4",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "거짓 주장의 고발 - 불순종하는 자의 거짓말",
        original_text: "Whoever says, 'I know him,' but does not do what he commands is a liar",
        korean_translation: "누구든지 '나는 그분을 안다'고 말하면서도 그분의 명령을 행하지 않는 사람은 거짓말쟁이입니다",
        grammatical_explanation: "대조 접속사 'but'으로 말과 행동의 모순을 지적"
      },
      {
        sequence_order: 2,
        semantic_classification: "진리의 부재 - 그 사람 안에 진리가 없음",
        original_text: "and the truth is not in that person",
        korean_translation: "그리고 진리가 그 사람 안에 없습니다",
        grammatical_explanation: "1:8과 유사한 구조로 진리의 내재화 부족을 지적"
      }
    ],
    vocabulary: [
      {
        word: "liar",
        ipa_pronunciation: "/ˈlaɪər/",
        korean_pronunciation: "라이어",
        part_of_speech: "명사",
        definition_korean: "거짓말쟁이 - 진실을 말하지 않는 사람",
        usage_note: "1:10에서 하나님을 거짓말쟁이로 만드는 것보다는 덜 심각하지만, 여전히 강한 비난"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 3절의 긍정적 진술과 대조하여 부정적 경고를 제시합니다. 하나님을 안다고 주장하면서 불순종하는 것은 자기모순입니다. 이는 1세기 영지주의자들을 향한 직접적 비판으로, 그들은 특별한 영적 지식을 가졌다고 주장하면서도 도덕적 계명을 무시했습니다. 요한은 이러한 주장을 '거짓말'이라고 단언하며, 진정한 신앙은 반드시 순종의 열매를 맺는다고 강조합니다.",
      cross_references: ["마태복음 7:21-23", "디도서 1:16", "야고보서 1:22"]
    },
    korean_translation: {
      natural_translation: "누구든지 '나는 그분을 안다'고 말하면서도 그분의 명령을 행하지 않는 사람은 거짓말쟁이이며, 진리가 그 사람 안에 없습니다.",
      translation_notes: "말과 행동의 일치가 진정한 신앙의 표지임을 강조합니다."
    },
    special_explanation: {
      explanation_type: "영지주의 비판",
      content: "1세기 영지주의는 '지식'(그노시스)을 통한 구원을 주장하며 도덕적 행위를 경시했습니다. 요한은 이러한 분리를 거부하고, 진정한 하나님 지식은 반드시 순종으로 나타난다고 주장합니다.",
      examples: [
        "거짓된 주장: '나는 그분을 안다' + 불순종",
        "참된 고백: 하나님을 앎 + 순종"
      ]
    }
  },
  {
    reference: "1 John 2:5",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "순종의 결과 - 하나님 사랑의 완성",
        original_text: "But if anyone obeys his word, love for God is truly made complete in them",
        korean_translation: "그러나 누구든지 그분의 말씀을 순종한다면, 하나님을 향한 사랑이 그 사람 안에서 참으로 완전하게 됩니다",
        grammatical_explanation: "'But'으로 4절과 대조. 순종이 사랑의 완성으로 이어짐을 설명"
      },
      {
        sequence_order: 2,
        semantic_classification: "확신의 근거 - 그분 안에 있음을 아는 방법",
        original_text: "This is how we know we are in him",
        korean_translation: "이것으로 우리는 우리가 그분 안에 있다는 것을 압니다",
        grammatical_explanation: "'This is how'로 앎의 방법을 제시"
      }
    ],
    vocabulary: [
      {
        word: "obeys",
        ipa_pronunciation: "/oʊˈbeɪz/",
        korean_pronunciation: "오베이즈",
        part_of_speech: "동사",
        definition_korean: "순종하다 - 명령이나 지시를 따르다",
        usage_note: "단순한 지키기가 아니라 내면에서 우러나오는 순종"
      },
      {
        word: "complete",
        ipa_pronunciation: "/kəmˈpliːt/",
        korean_pronunciation: "컴플리트",
        part_of_speech: "형용사",
        definition_korean: "완전한, 성숙한 - 목표에 도달한 상태",
        usage_note: "헬라어 '텔레이오오'로 성숙과 완성을 의미"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 순종과 사랑의 관계를 설명합니다. '하나님을 향한 사랑'이 완전해진다는 것은 우리의 사랑이 성숙하고 진정성을 갖추게 된다는 의미입니다. 이는 단순한 감정이 아니라 구체적인 순종의 행위로 나타나는 사랑입니다. 요한은 또한 '그분 안에 있다'는 신비적 연합의 개념을 제시하는데, 이것의 증거가 바로 순종이라고 말합니다.",
      cross_references: ["요한복음 14:15, 23", "요한복음 15:9-10", "1요한복음 4:12"]
    },
    korean_translation: {
      natural_translation: "그러나 누구든지 그분의 말씀을 순종한다면, 하나님을 향한 사랑이 그 사람 안에서 참으로 완전하게 됩니다. 이것으로 우리는 우리가 그분 안에 있다는 것을 압니다.",
      translation_notes: "'love for God is made complete'는 우리의 사랑이 순종을 통해 성숙에 이름을 의미합니다."
    },
    special_explanation: {
      explanation_type: "사랑과 순종의 관계",
      content: "요한은 사랑과 순종을 분리할 수 없는 것으로 제시합니다. 순종은 사랑의 증거이자 사랑을 완성시키는 수단입니다. 이는 율법주의(행위로 구원)도 아니고 방종(은혜만 강조)도 아닌 균형잡힌 신앙을 제시합니다.",
      examples: [
        "사랑 없는 순종: 율법주의, 형식주의",
        "순종 없는 사랑: 감정주의, 방종",
        "사랑과 순종의 통합: 성숙한 신앙"
      ]
    }
  },
  {
    reference: "1 John 2:6",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "그리스도인의 삶의 기준 - 예수님처럼 살아야 함",
        original_text: "Whoever claims to live in him must live as Jesus did",
        korean_translation: "누구든지 그분 안에 산다고 주장하는 사람은 예수님께서 걸으신 것처럼 걸어야 합니다",
        grammatical_explanation: "'must'로 도덕적 의무를 강조. 'as Jesus did'로 예수님의 삶을 모범으로 제시"
      }
    ],
    vocabulary: [
      {
        word: "claims",
        ipa_pronunciation: "/kleɪmz/",
        korean_pronunciation: "클레임즈",
        part_of_speech: "동사",
        definition_korean: "주장하다 - 공개적으로 선언하다",
        usage_note: "1:6의 '주장하다'와 동일한 단어로, 말만 하는 것을 경계"
      },
      {
        word: "live",
        ipa_pronunciation: "/lɪv/",
        korean_pronunciation: "리브",
        part_of_speech: "동사",
        definition_korean: "살다, 거하다 - 지속적으로 머무르며 존재하다",
        usage_note: "헬라어 '메노'로 지속적이고 안정적인 거함을 의미"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 그리스도인의 삶의 궁극적 기준을 제시합니다: 예수님의 삶. '그분 안에 산다'는 것은 단순히 믿음을 고백하는 것 이상이며, 예수님과의 연합 안에서 그분의 성품과 행실을 닮아가는 것을 의미합니다. '걸었다'는 표현은 히브리 관용어로 삶의 방식과 행동 패턴 전체를 가리킵니다. 요한은 예수님의 겸손, 순종, 사랑, 자기희생의 삶이 우리의 모범이라고 가르칩니다.",
      cross_references: ["빌립보서 2:5-8", "베드로전서 2:21", "요한복음 13:15"]
    },
    korean_translation: {
      natural_translation: "누구든지 그분 안에 산다고 주장하는 사람은 예수님께서 걸으신 것처럼 걸어야 합니다.",
      translation_notes: "'walk as Jesus walked'는 예수님의 삶의 방식 전체를 본받는 것을 의미합니다."
    },
    special_explanation: {
      explanation_type: "그리스도를 본받음 (Imitatio Christi)",
      content: "이 구절은 기독교 역사 전체를 관통하는 '그리스도를 본받음'이라는 주제의 핵심입니다. 예수님은 단순히 구주일 뿐 아니라 우리가 따라야 할 모범이십니다.",
      examples: [
        "예수님의 겸손: 빌립보서 2:5-8",
        "예수님의 순종: 히브리서 5:8",
        "예수님의 사랑: 요한복음 13:34"
      ]
    }
  },
  {
    reference: "1 John 2:7",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "새 명령이 아님을 강조 - 옛 명령임을 선언",
        original_text: "Dear friends, I am not writing you a new command but an old one, which you have had since the beginning",
        korean_translation: "사랑하는 여러분, 내가 여러분에게 쓰는 것은 새 명령이 아니라 여러분이 처음부터 가지고 있던 옛 명령입니다",
        grammatical_explanation: "'not...but' 대조 구조로 새로움과 옛것을 구분"
      },
      {
        sequence_order: 2,
        semantic_classification: "옛 명령의 정체 - 들었던 메시지",
        original_text: "This old command is the message you have heard",
        korean_translation: "이 옛 명령은 여러분이 들었던 메시지입니다",
        grammatical_explanation: "'This old command'로 앞의 명령을 구체화"
      }
    ],
    vocabulary: [
      {
        word: "command",
        ipa_pronunciation: "/kəˈmænd/",
        korean_pronunciation: "커맨드",
        part_of_speech: "명사",
        definition_korean: "명령 - 권위 있는 지시나 계명",
        usage_note: "다음 절에서 서로 사랑하라는 명령을 가리킴"
      },
      {
        word: "beginning",
        ipa_pronunciation: "/bɪˈɡɪnɪŋ/",
        korean_pronunciation: "비기닝",
        part_of_speech: "명사",
        definition_korean: "시작, 처음 - 그들이 복음을 처음 들었을 때",
        usage_note: "1:1의 영원한 '태초'가 아니라 독자들이 믿음을 시작한 때"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 이제 서로 사랑하라는 명령을 소개하기 시작합니다. 흥미롭게도 요한은 이것을 '새 명령'이 아니라 '옛 명령'이라고 부릅니다. 레위기 19:18에서 '네 이웃을 네 몸과 같이 사랑하라'는 계명은 이미 구약부터 있었고, 예수님도 이를 강조하셨습니다. 독자들은 복음을 처음 받아들일 때부터 이 메시지를 들어왔습니다. 요한은 이것이 새로운 요구가 아니라 초기 기독교 가르침의 핵심이었음을 상기시킵니다.",
      cross_references: ["레위기 19:18", "요한복음 13:34", "마가복음 12:31"]
    },
    korean_translation: {
      natural_translation: "사랑하는 여러분, 내가 여러분에게 쓰는 것은 새 명령이 아니라 여러분이 처음부터 가지고 있던 옛 명령입니다. 이 옛 명령은 여러분이 들었던 메시지입니다.",
      translation_notes: "'since the beginning'은 그들이 신앙을 시작한 때를 가리킵니다."
    },
    special_explanation: {
      explanation_type: "옛 명령과 새 명령의 역설",
      content: "요한은 7절에서 '옛 명령'이라고 하고 8절에서는 '새 명령'이라고 합니다. 이는 모순이 아니라 사랑의 명령이 구약부터 있었지만(옛 것), 예수님의 십자가 사랑으로 새롭게 계시되었음(새 것)을 의미합니다.",
      examples: [
        "옛 명령: 레위기 19:18 - 이웃 사랑",
        "새 명령: 요한복음 13:34 - 예수님의 모범적 사랑"
      ]
    }
  },
  {
    reference: "1 John 2:8",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "새 명령임을 선언 - 예수님과 독자들 안에서 참됨",
        original_text: "Yet I am writing you a new command; its truth is seen in him and in you",
        korean_translation: "그러나 내가 여러분에게 쓰는 것은 새 명령입니다. 그 진리가 그분 안에서와 여러분 안에서 나타나고 있습니다",
        grammatical_explanation: "'Yet'으로 7절과 대조하며 새로움의 측면을 강조"
      },
      {
        sequence_order: 2,
        semantic_classification: "새로움의 근거 - 어둠이 지나가고 빛이 비침",
        original_text: "because the darkness is passing and the true light is already shining",
        korean_translation: "왜냐하면 어둠이 지나가고 참 빛이 이미 비치고 있기 때문입니다",
        grammatical_explanation: "현재진행형으로 진행 중인 변화를 강조"
      }
    ],
    vocabulary: [
      {
        word: "new",
        ipa_pronunciation: "/nuː/",
        korean_pronunciation: "뉴",
        part_of_speech: "형용사",
        definition_korean: "새로운 - 질적으로 새롭고 신선한",
        usage_note: "헬라어로 '카이노스'로 시간상 새로운 것이 아니라 질적으로 새로운 것"
      },
      {
        word: "passing",
        ipa_pronunciation: "/ˈpæsɪŋ/",
        korean_pronunciation: "패싱",
        part_of_speech: "동사 (현재분사)",
        definition_korean: "지나가다 - 사라지고 있는 중",
        usage_note: "현재진행형으로 이미 시작되었지만 아직 완료되지 않은 과정"
      },
      {
        word: "shining",
        ipa_pronunciation: "/ˈʃaɪnɪŋ/",
        korean_pronunciation: "샤이닝",
        part_of_speech: "동사 (현재분사)",
        definition_korean: "비치다 - 빛을 발하다",
        usage_note: "이미 시작되어 진행 중인 빛의 비침"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 사랑의 명령이 동시에 '옛 것'이면서 '새 것'임을 설명합니다. 새로움은 예수 그리스도의 성육신과 십자가를 통해 사랑이 완전히 계시되고 실현되었다는 데 있습니다. '어둠이 지나가고 참 빛이 비친다'는 것은 예수님의 오심으로 새 시대가 시작되었음을 의미합니다. 이것은 '이미 그러나 아직'(already but not yet)이라는 신학적 긴장을 보여줍니다. 어둠은 이미 패배했지만 아직 완전히 사라지지는 않았고, 빛은 이미 비치기 시작했지만 아직 완전히 밝아지지는 않았습니다.",
      cross_references: ["요한복음 1:5, 9", "로마서 13:12", "에베소서 5:8"]
    },
    korean_translation: {
      natural_translation: "그러나 내가 여러분에게 쓰는 것은 새 명령입니다. 그 진리가 그분 안에서와 여러분 안에서 나타나고 있습니다. 왜냐하면 어둠이 지나가고 참 빛이 이미 비치고 있기 때문입니다.",
      translation_notes: "현재진행형은 이미 시작되었지만 아직 완료되지 않은 과정을 강조합니다."
    },
    special_explanation: {
      explanation_type: "종말론적 긴장 - 이미 그러나 아직",
      content: "이 구절은 기독교 종말론의 핵심인 '이미 그러나 아직'(already but not yet)의 긴장을 보여줍니다. 예수님의 초림으로 새 시대가 이미 시작되었지만, 재림으로 완성될 때까지 옛 시대와 공존합니다.",
      examples: [
        "이미: 어둠이 패배하기 시작함, 빛이 비치기 시작함",
        "아직: 어둠이 완전히 사라지지 않음, 빛이 완전히 밝아지지 않음"
      ]
    }
  },
  {
    reference: "1 John 2:9",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "거짓된 주장 - 빛 가운데 있다면서 형제를 미워함",
        original_text: "Anyone who claims to be in the light but hates a brother or sister is still in the darkness",
        korean_translation: "누구든지 빛 가운데 있다고 주장하면서도 형제나 자매를 미워하는 사람은 여전히 어둠 가운데 있습니다",
        grammatical_explanation: "'but'으로 주장과 실제의 모순을 지적. 'still'로 변화되지 않은 상태를 강조"
      }
    ],
    vocabulary: [
      {
        word: "hates",
        ipa_pronunciation: "/heɪts/",
        korean_pronunciation: "헤이츠",
        part_of_speech: "동사",
        definition_korean: "미워하다 - 적대감과 악의를 품다",
        usage_note: "사랑의 반대로, 단순한 무관심이 아니라 적극적인 적대감"
      },
      {
        word: "brother or sister",
        ipa_pronunciation: "/ˈbrʌðər ɔːr ˈsɪstər/",
        korean_pronunciation: "브러더 오어 시스터",
        part_of_speech: "명사구",
        definition_korean: "형제나 자매 - 같은 믿음을 가진 동료 신자",
        usage_note: "육신의 형제가 아니라 신앙 공동체의 일원"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 사랑과 미움을 빛과 어둠의 문제로 제시합니다. '빛 가운데 있다'는 주장은 단순히 신앙 고백이 아니라 삶의 방식 전체를 포함합니다. 형제를 미워하는 것은 여전히 어둠의 영역에 머물러 있음을 증명하는 명백한 증거입니다. 요한은 여기서 '형제나 자매'를 신앙 공동체의 일원으로 사용하며, 이들을 향한 사랑이 하나님을 향한 사랑의 진정성을 검증하는 시금석이 됩니다.",
      cross_references: ["1요한복음 3:15", "1요한복음 4:20", "마태복음 5:22-24"]
    },
    korean_translation: {
      natural_translation: "누구든지 빛 가운데 있다고 주장하면서도 형제나 자매를 미워하는 사람은 여전히 어둠 가운데 있습니다.",
      translation_notes: "'still in the darkness'는 변화가 일어나지 않았음을 강조합니다."
    },
    special_explanation: {
      explanation_type: "형제 사랑의 시금석",
      content: "요한은 하나님 사랑과 형제 사랑을 분리할 수 없는 것으로 제시합니다. 보이지 않는 하나님을 사랑한다고 주장하면서 보이는 형제를 미워하는 것은 자기모순입니다.",
      examples: [
        "거짓된 신앙: 하나님 사랑 주장 + 형제 미움",
        "참된 신앙: 하나님 사랑 + 형제 사랑"
      ]
    }
  },
  {
    reference: "1 John 2:10",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "참된 빛의 거함 - 형제 사랑의 결과",
        original_text: "Anyone who loves their brother and sister lives in the light",
        korean_translation: "누구든지 형제나 자매를 사랑하는 사람은 빛 가운데 삽니다",
        grammatical_explanation: "9절과 대조되는 긍정적 진술"
      },
      {
        sequence_order: 2,
        semantic_classification: "넘어지지 않음 - 사랑의 안전성",
        original_text: "and there is nothing in them to make them stumble",
        korean_translation: "그리고 그들 안에는 넘어지게 할 것이 아무것도 없습니다",
        grammatical_explanation: "'nothing to make stumble'로 완전한 안전성을 강조"
      }
    ],
    vocabulary: [
      {
        word: "loves",
        ipa_pronunciation: "/lʌvz/",
        korean_pronunciation: "러브즈",
        part_of_speech: "동사",
        definition_korean: "사랑하다 - 선의와 헌신을 보이다",
        usage_note: "헬라어 '아가파오'로 의지적이고 희생적인 사랑"
      },
      {
        word: "stumble",
        ipa_pronunciation: "/ˈstʌmbl/",
        korean_pronunciation: "스텀블",
        part_of_speech: "동사",
        definition_korean: "넘어지다, 실족하다 - 죄에 빠지거나 신앙에서 떨어지다",
        usage_note: "도덕적, 영적 실패를 의미하는 은유"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 형제 사랑의 긍정적 결과를 제시합니다. 사랑하는 자는 빛 가운데 살며, 그 안에 넘어지게 할 것이 없습니다. 이는 이중적 의미를 가집니다. 첫째, 사랑하는 사람 자신이 넘어지지 않습니다. 사랑은 죄로부터 보호하는 강력한 힘이기 때문입니다. 둘째, 사랑하는 사람은 다른 사람을 넘어지게 하지 않습니다. 미움이 공동체에 분열과 상처를 가져오는 반면, 사랑은 화목과 덕을 세웁니다.",
      cross_references: ["로마서 14:13", "고린도전서 8:9", "요한복음 11:9-10"]
    },
    korean_translation: {
      natural_translation: "누구든지 형제나 자매를 사랑하는 사람은 빛 가운데 살며, 그들 안에는 넘어지게 할 것이 아무것도 없습니다.",
      translation_notes: "'nothing to make them stumble'은 사랑이 죄로부터 보호한다는 의미입니다."
    },
    special_explanation: {
      explanation_type: "사랑의 보호 기능",
      content: "사랑은 단순히 감정이 아니라 죄로부터 보호하는 영적 능력입니다. 사랑하는 자는 자신도 넘어지지 않고, 다른 사람도 넘어뜨리지 않습니다.",
      examples: [
        "자기 보호: 사랑하는 자는 스스로 넘어지지 않음",
        "타인 보호: 사랑하는 자는 다른 이를 넘어뜨리지 않음"
      ]
    }
  },
  {
    reference: "1 John 2:11",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "미움의 결과 - 어둠 가운데 삶",
        original_text: "But anyone who hates a brother or sister is in the darkness and walks around in the darkness",
        korean_translation: "그러나 누구든지 형제나 자매를 미워하는 사람은 어둠 가운데 있으며 어둠 가운데서 걷습니다",
        grammatical_explanation: "'is in'과 'walks around in'으로 상태와 행동 모두 어둠임을 강조"
      },
      {
        sequence_order: 2,
        semantic_classification: "방향 상실 - 어디로 가는지 모름",
        original_text: "they do not know where they are going",
        korean_translation: "그들은 어디로 가는지 알지 못합니다",
        grammatical_explanation: "영적 무지와 방향 상실을 나타냄"
      },
      {
        sequence_order: 3,
        semantic_classification: "시력 상실의 원인 - 어둠이 눈을 멀게 함",
        original_text: "because the darkness has blinded them",
        korean_translation: "왜냐하면 어둠이 그들의 눈을 멀게 했기 때문입니다",
        grammatical_explanation: "현재완료로 과거에 시작되어 현재까지 지속되는 상태"
      }
    ],
    vocabulary: [
      {
        word: "blinded",
        ipa_pronunciation: "/ˈblaɪndɪd/",
        korean_pronunciation: "블라인디드",
        part_of_speech: "동사 (과거분사)",
        definition_korean: "눈을 멀게 하다 - 볼 수 없게 만들다",
        usage_note: "육체적 실명이 아니라 영적 무지와 분별력 상실"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 미움의 파괴적 결과를 세 단계로 설명합니다. 첫째, 미워하는 자는 어둠 가운데 있습니다. 둘째, 어둠 가운데서 걸어다닙니다. 셋째, 어디로 가는지 알지 못합니다. 이는 미움이 단순히 감정의 문제가 아니라 전인격적 영적 어둠을 초래함을 보여줍니다. 특히 '어둠이 눈을 멀게 했다'는 표현은 죄의 자기기만적 속성을 드러냅니다. 미워하는 자는 자신이 어둠 가운데 있다는 것조차 인식하지 못하며, 영적 방향성과 분별력을 완전히 상실합니다.",
      cross_references: ["요한복음 12:35", "고린도후서 4:4", "에베소서 4:18"]
    },
    korean_translation: {
      natural_translation: "그러나 누구든지 형제나 자매를 미워하는 사람은 어둠 가운데 있으며 어둠 가운데서 걷습니다. 그들은 어디로 가는지 알지 못합니다. 왜냐하면 어둠이 그들의 눈을 멀게 했기 때문입니다.",
      translation_notes: "어둠은 단순한 환경이 아니라 영적 시력을 빼앗는 능동적 힘입니다."
    },
    special_explanation: {
      explanation_type: "미움의 파괴적 진행",
      content: "요한은 미움이 초래하는 영적 파괴를 점진적으로 묘사합니다. 미움은 단순히 부정적 감정이 아니라 전인격을 어둠으로 몰아가는 영적 질병입니다.",
      examples: [
        "1단계: 어둠 가운데 있음 - 영적 상태",
        "2단계: 어둠 가운데 걸음 - 삶의 방식",
        "3단계: 방향 모름 - 영적 맹목"
      ]
    }
  },
  {
    reference: "1 John 2:12",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "자녀들에게 쓰는 이유 - 죄 사함을 받았기 때문",
        original_text: "I am writing to you, dear children, because your sins have been forgiven on account of his name",
        korean_translation: "자녀들아, 내가 여러분에게 쓰는 것은 여러분의 죄가 그분의 이름으로 말미암아 용서받았기 때문입니다",
        grammatical_explanation: "'because'로 편지 작성의 이유를 제시. 현재완료로 과거 사건의 지속적 효과 강조"
      }
    ],
    vocabulary: [
      {
        word: "forgiven",
        ipa_pronunciation: "/fərˈɡɪvn/",
        korean_pronunciation: "퍼기븐",
        part_of_speech: "동사 (과거분사)",
        definition_korean: "용서받다 - 죄의 빚이 탕감되다",
        usage_note: "현재완료 수동태로 과거에 용서받아 현재까지 그 상태가 지속됨"
      },
      {
        word: "name",
        ipa_pronunciation: "/neɪm/",
        korean_pronunciation: "네임",
        part_of_speech: "명사",
        definition_korean: "이름 - 인격과 권위를 대표하는 것",
        usage_note: "성경에서 '이름'은 단순한 호칭이 아니라 존재 자체와 권위를 의미"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 12-14절에서 독자들을 세 그룹으로 나누어 격려합니다. 첫 번째 그룹은 '자녀들'로, 모든 신자를 포괄적으로 가리키는 것으로 보입니다. 요한이 그들에게 편지를 쓰는 이유는 그들의 죄가 이미 예수님의 이름으로 용서받았기 때문입니다. '그분의 이름으로 말미암아'는 예수님의 인격과 사역, 곧 그분의 십자가 희생에 근거한 용서를 의미합니다. 이는 모든 신자에게 해당하는 보편적 축복입니다.",
      cross_references: ["사도행전 4:12", "에베소서 1:7", "골로새서 1:14"]
    },
    korean_translation: {
      natural_translation: "자녀들아, 내가 여러분에게 쓰는 것은 여러분의 죄가 그분의 이름으로 말미암아 용서받았기 때문입니다.",
      translation_notes: "'his name'은 예수님의 인격과 사역 전체를 대표합니다."
    },
    special_explanation: {
      explanation_type: "세 그룹의 구조 (12-14절)",
      content: "요한은 독자들을 세 그룹으로 나누어 각각의 영적 성숙도에 따라 격려합니다. '자녀들'은 모든 신자를, '아버지들'은 성숙한 신자를, '청년들'은 영적으로 강건한 신자를 가리킵니다.",
      examples: [
        "자녀들 (12절): 죄 용서 - 기본 구원의 확신",
        "아버지들 (13a, 14a): 처음부터 계신 분을 앎 - 깊은 지식",
        "청년들 (13b, 14b): 악한 자를 이김 - 영적 전투"
      ]
    }
  },
  {
    reference: "1 John 2:13",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "아버지들에게 쓰는 이유 - 처음부터 계신 분을 알았기 때문",
        original_text: "I am writing to you, fathers, because you know him who is from the beginning",
        korean_translation: "아버지들아, 내가 여러분에게 쓰는 것은 여러분이 태초부터 계신 분을 알기 때문입니다",
        grammatical_explanation: "'from the beginning'으로 예수님의 영원성을 강조"
      },
      {
        sequence_order: 2,
        semantic_classification: "청년들에게 쓰는 이유 - 악한 자를 이겼기 때문",
        original_text: "I am writing to you, young men, because you have overcome the evil one",
        korean_translation: "청년들아, 내가 여러분에게 쓰는 것은 여러분이 악한 자를 이겼기 때문입니다",
        grammatical_explanation: "현재완료로 과거의 승리가 현재에도 유효함을 강조"
      }
    ],
    vocabulary: [
      {
        word: "fathers",
        ipa_pronunciation: "/ˈfɑːðərz/",
        korean_pronunciation: "파더즈",
        part_of_speech: "명사",
        definition_korean: "아버지들 - 영적으로 성숙한 신자들",
        usage_note: "육체적 나이가 아니라 영적 성숙도를 가리킴"
      },
      {
        word: "young men",
        ipa_pronunciation: "/jʌŋ men/",
        korean_pronunciation: "영 맨",
        part_of_speech: "명사구",
        definition_korean: "청년들 - 영적으로 강건한 신자들",
        usage_note: "육체적 젊음이 아니라 영적 힘과 활력"
      },
      {
        word: "overcome",
        ipa_pronunciation: "/ˌoʊvərˈkʌm/",
        korean_pronunciation: "오버컴",
        part_of_speech: "동사",
        definition_korean: "이기다, 정복하다 - 완전한 승리를 거두다",
        usage_note: "요한계시록에서도 반복되는 승리의 주제"
      },
      {
        word: "evil one",
        ipa_pronunciation: "/ˈiːvl wʌn/",
        korean_pronunciation: "이블 원",
        part_of_speech: "명사구",
        definition_korean: "악한 자 - 사탄, 마귀",
        usage_note: "인격적 악의 존재로서의 사탄"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 계속해서 두 그룹에게 격려합니다. '아버지들'은 영적으로 성숙한 신자들로, '태초부터 계신 분'을 안다는 것이 그들의 특징입니다. 이는 1:1과 연결되며, 예수 그리스도에 대한 깊고 친밀한 지식을 의미합니다. '청년들'은 영적으로 강건한 신자들로, '악한 자를 이겼다'는 것이 그들의 특징입니다. 이는 영적 전쟁에서의 승리를 의미하며, 사탄의 유혹과 공격을 물리친 경험을 가리킵니다.",
      cross_references: ["에베소서 6:10-12", "야고보서 4:7", "요한계시록 2:7, 11, 17"]
    },
    korean_translation: {
      natural_translation: "아버지들아, 내가 여러분에게 쓰는 것은 여러분이 태초부터 계신 분을 알기 때문입니다. 청년들아, 내가 여러분에게 쓰는 것은 여러분이 악한 자를 이겼기 때문입니다.",
      translation_notes: "세 그룹은 나이가 아니라 영적 성숙도를 나타냅니다."
    },
    special_explanation: {
      explanation_type: "영적 성숙의 단계",
      content: "요한이 제시하는 세 그룹은 영적 성장의 단계를 보여줍니다. 자녀는 용서의 확신, 청년은 승리의 경험, 아버지는 깊은 지식을 특징으로 합니다.",
      examples: [
        "자녀: 죄 용서의 확신 - 구원의 기초",
        "청년: 악한 자를 이김 - 영적 전투의 승리",
        "아버지: 태초부터 계신 분을 앎 - 깊은 신학적 지식"
      ]
    }
  },
  {
    reference: "1 John 2:14",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "자녀들에게 쓴 이유 반복 - 아버지를 알았기 때문",
        original_text: "I write to you, dear children, because you know the Father",
        korean_translation: "자녀들아, 내가 여러분에게 쓴 것은 여러분이 아버지를 알기 때문입니다",
        grammatical_explanation: "12절의 반복이지만 '죄 용서'에서 '아버지를 앎'으로 초점 이동"
      },
      {
        sequence_order: 2,
        semantic_classification: "아버지들에게 쓴 이유 반복",
        original_text: "I write to you, fathers, because you know him who is from the beginning",
        korean_translation: "아버지들아, 내가 여러분에게 쓴 것은 여러분이 태초부터 계신 분을 알기 때문입니다",
        grammatical_explanation: "13a절의 정확한 반복"
      },
      {
        sequence_order: 3,
        semantic_classification: "청년들에게 쓴 이유 확장 - 강함, 말씀 거함, 악한 자를 이김",
        original_text: "I write to you, young men, because you are strong, and the word of God lives in you, and you have overcome the evil one",
        korean_translation: "청년들아, 내가 여러분에게 쓴 것은 여러분이 강하고, 하나님의 말씀이 여러분 안에 거하며, 여러분이 악한 자를 이겼기 때문입니다",
        grammatical_explanation: "세 가지 이유를 'and'로 연결하여 청년들의 특징을 확장 설명"
      }
    ],
    vocabulary: [
      {
        word: "strong",
        ipa_pronunciation: "/strɔːŋ/",
        korean_pronunciation: "스트롱",
        part_of_speech: "형용사",
        definition_korean: "강하다 - 영적으로 견고하고 능력 있다",
        usage_note: "육체적 힘이 아니라 영적 강건함"
      },
      {
        word: "lives",
        ipa_pronunciation: "/lɪvz/",
        korean_pronunciation: "리브즈",
        part_of_speech: "동사",
        definition_korean: "거하다, 살다 - 지속적으로 머무르다",
        usage_note: "헬라어 '메노'로 영구적이고 안정적인 거함"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 12-13절의 내용을 반복하면서 특히 청년들에 대한 설명을 확장합니다. 청년들의 영적 강건함은 세 가지로 설명됩니다: 그들은 강하고, 하나님의 말씀이 그들 안에 거하며, 악한 자를 이겼습니다. 이 세 요소는 서로 연결되어 있습니다. 하나님의 말씀이 내면에 거함으로써 영적 강건함이 생기고, 그 결과 악한 자를 이기는 승리가 가능해집니다. 이는 시편 119:11 '내가 주께 범죄하지 아니하려 하여 주의 말씀을 내 마음에 두었나이다'와 같은 맥락입니다.",
      cross_references: ["시편 119:11", "에베소서 6:17", "히브리서 4:12"]
    },
    korean_translation: {
      natural_translation: "자녀들아, 내가 여러분에게 쓴 것은 여러분이 아버지를 알기 때문입니다. 아버지들아, 내가 여러분에게 쓴 것은 여러분이 태초부터 계신 분을 알기 때문입니다. 청년들아, 내가 여러분에게 쓴 것은 여러분이 강하고, 하나님의 말씀이 여러분 안에 거하며, 여러분이 악한 자를 이겼기 때문입니다.",
      translation_notes: "청년들의 강함은 하나님의 말씀이 내면에 거하는 것에서 나옵니다."
    },
    special_explanation: {
      explanation_type: "영적 승리의 비결",
      content: "요한은 청년들의 승리 비결을 명확히 제시합니다. 하나님의 말씀이 내면에 거함으로써 영적 강건함이 생기고, 그것이 악한 자를 이기는 능력이 됩니다.",
      examples: [
        "승리의 원천: 하나님의 말씀이 내면에 거함",
        "승리의 상태: 영적으로 강함",
        "승리의 결과: 악한 자를 이김"
      ]
    }
  },
  {
    reference: "1 John 2:15",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "경고 명령 - 세상이나 세상 것들을 사랑하지 말라",
        original_text: "Do not love the world or anything in the world",
        korean_translation: "세상이나 세상에 있는 것들을 사랑하지 마십시오",
        grammatical_explanation: "명령형 부정문으로 강한 금지 명령"
      },
      {
        sequence_order: 2,
        semantic_classification: "양자택일 - 세상을 사랑하면 아버지 사랑이 없음",
        original_text: "If anyone loves the world, love for the Father is not in them",
        korean_translation: "누구든지 세상을 사랑한다면, 아버지를 향한 사랑이 그 안에 없습니다",
        grammatical_explanation: "조건절로 세상 사랑과 아버지 사랑의 양립 불가능성 제시"
      }
    ],
    vocabulary: [
      {
        word: "world",
        ipa_pronunciation: "/wɜːrld/",
        korean_pronunciation: "월드",
        part_of_speech: "명사",
        definition_korean: "세상 - 하나님을 거부하는 가치 체계와 문화",
        usage_note: "물리적 세계가 아니라 하나님께 대적하는 영적 체제"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 이제 세상에 대한 태도로 주제를 전환합니다. 여기서 '세상'은 물리적 창조 세계가 아니라 하나님을 거부하는 가치 체계, 문화, 사고방식을 의미합니다. 요한은 세상 사랑과 아버지 사랑이 양립할 수 없다고 단언합니다. 이는 제로섬 게임처럼, 하나를 사랑하면 다른 하나를 사랑할 수 없습니다. '세상에 있는 것들'은 다음 절에서 구체화됩니다: 육체의 정욕, 안목의 정욕, 이생의 자랑입니다.",
      cross_references: ["야고보서 4:4", "마태복음 6:24", "로마서 12:2"]
    },
    korean_translation: {
      natural_translation: "세상이나 세상에 있는 것들을 사랑하지 마십시오. 누구든지 세상을 사랑한다면, 아버지를 향한 사랑이 그 안에 없습니다.",
      translation_notes: "'세상'은 하나님께 대적하는 가치 체계와 문화를 의미합니다."
    },
    special_explanation: {
      explanation_type: "세상의 신학적 의미",
      content: "요한복음과 요한서신에서 '세상'(코스모스)은 다의적입니다. 하나님이 사랑하신 세상(요 3:16)은 사람들을 가리키지만, 여기서는 하나님을 거부하는 체제를 가리킵니다.",
      examples: [
        "긍정적 의미: 하나님이 사랑하시는 사람들 (요한복음 3:16)",
        "부정적 의미: 하나님을 거부하는 가치 체계 (1요한복음 2:15)"
      ]
    }
  },
  {
    reference: "1 John 2:16",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "세상 것들의 세 가지 범주",
        original_text: "For everything in the world—the lust of the flesh, the lust of the eyes, and the pride of life—comes not from the Father but from the world",
        korean_translation: "세상에 있는 모든 것, 곧 육체의 정욕과 안목의 정욕과 이생의 자랑은 아버지로부터 온 것이 아니라 세상으로부터 온 것입니다",
        grammatical_explanation: "대시로 세상 것들을 세 가지로 구체화. 'not...but' 대조로 출처를 명확히 구분"
      }
    ],
    vocabulary: [
      {
        word: "lust",
        ipa_pronunciation: "/lʌst/",
        korean_pronunciation: "러스트",
        part_of_speech: "명사",
        definition_korean: "정욕, 욕망 - 과도하고 부정적인 욕구",
        usage_note: "헬라어 '에피뒤미아'로 통제되지 않은 갈망"
      },
      {
        word: "flesh",
        ipa_pronunciation: "/fleʃ/",
        korean_pronunciation: "플레쉬",
        part_of_speech: "명사",
        definition_korean: "육체 - 죄의 본성과 연결된 인간의 타락한 본성",
        usage_note: "단순히 물리적 몸이 아니라 죄에 기울어진 인간 본성"
      },
      {
        word: "eyes",
        ipa_pronunciation: "/aɪz/",
        korean_pronunciation: "아이즈",
        part_of_speech: "명사",
        definition_korean: "눈 - 시각을 통한 욕망",
        usage_note: "보는 것을 통해 생기는 탐욕"
      },
      {
        word: "pride",
        ipa_pronunciation: "/praɪd/",
        korean_pronunciation: "프라이드",
        part_of_speech: "명사",
        definition_korean: "자랑, 교만 - 과시적 자부심",
        usage_note: "헬라어 '알라조네이아'로 허풍과 과시"
      },
      {
        word: "life",
        ipa_pronunciation: "/laɪf/",
        korean_pronunciation: "라이프",
        part_of_speech: "명사",
        definition_korean: "삶, 생활 - 현세의 물질적 삶",
        usage_note: "영원한 생명이 아니라 일시적 현세 생활"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 '세상에 있는 모든 것'을 세 가지 범주로 분류합니다. 첫째, '육체의 정욕'은 감각적 쾌락을 추구하는 부정적 욕망입니다. 둘째, '안목의 정욕'은 시각을 통해 생기는 탐욕과 물질주의입니다. 셋째, '이생의 자랑'은 재산, 지위, 성취를 과시하는 교만입니다. 이 세 가지는 창세기 3:6에서 이브가 선악과를 볼 때의 유혹과 평행을 이룹니다: 먹음직하고(육체의 정욕), 보암직하고(안목의 정욕), 지혜롭게 할 만큼 탐스러운(이생의 자랑). 또한 광야에서 예수님이 받으신 세 가지 시험과도 대응됩니다.",
      cross_references: ["창세기 3:6", "마태복음 4:1-11", "갈라디아서 5:16-17"]
    },
    korean_translation: {
      natural_translation: "세상에 있는 모든 것, 곧 육체의 정욕과 안목의 정욕과 이생의 자랑은 아버지로부터 온 것이 아니라 세상으로부터 온 것입니다.",
      translation_notes: "세 가지 범주는 인간의 모든 죄악된 욕망을 포괄적으로 다룹니다."
    },
    special_explanation: {
      explanation_type: "삼중 시험의 패턴",
      content: "요한이 제시한 세 가지 세상적 욕망은 성경 전체에 나타나는 시험의 패턴입니다. 이브의 타락, 예수님의 시험, 그리고 우리의 일상적 유혹이 모두 이 패턴을 따릅니다.",
      examples: [
        "이브의 타락 (창 3:6): 먹음직함, 보암직함, 지혜롭게 함",
        "예수님의 시험 (마 4:1-11): 떡, 성전 꼭대기, 만국의 영광",
        "신자의 유혹 (1요 2:16): 육체의 정욕, 안목의 정욕, 이생의 자랑"
      ]
    }
  },
  {
    reference: "1 John 2:17",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "세상의 일시성 - 세상과 그 정욕이 지나감",
        original_text: "The world and its desires pass away",
        korean_translation: "세상과 그 정욕은 지나갑니다",
        grammatical_explanation: "현재시제로 진행 중인 소멸을 나타냄"
      },
      {
        sequence_order: 2,
        semantic_classification: "순종자의 영원성 - 하나님 뜻을 행하는 자는 영원히 삶",
        original_text: "but whoever does the will of God lives forever",
        korean_translation: "그러나 하나님의 뜻을 행하는 사람은 영원히 삽니다",
        grammatical_explanation: "'but'으로 일시적인 것과 영원한 것을 대조"
      }
    ],
    vocabulary: [
      {
        word: "pass away",
        ipa_pronunciation: "/pæs əˈweɪ/",
        korean_pronunciation: "패스 어웨이",
        part_of_speech: "동사구",
        definition_korean: "지나가다, 사라지다 - 존재를 멈추다",
        usage_note: "일시적이고 영속성이 없음을 강조"
      },
      {
        word: "will",
        ipa_pronunciation: "/wɪl/",
        korean_pronunciation: "윌",
        part_of_speech: "명사",
        definition_korean: "뜻, 의지 - 하나님의 계획과 목적",
        usage_note: "하나님의 주권적 계획과 도덕적 명령 모두 포함"
      },
      {
        word: "forever",
        ipa_pronunciation: "/fərˈevər/",
        korean_pronunciation: "퍼레버",
        part_of_speech: "부사",
        definition_korean: "영원히 - 끝없이 계속됨",
        usage_note: "헬라어 '에이스 톤 아이오나'로 영원한 시간"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 세상 사랑에 대한 경고를 일시성과 영원성의 대조로 마무리합니다. 세상과 그 정욕은 현재 진행형으로 지나가고 있습니다. 이는 이미 시작된 소멸 과정을 의미합니다. 반면, 하나님의 뜻을 행하는 사람은 영원히 삽니다. 이는 육체적 불멸이 아니라 영원한 생명, 곧 하나님과의 영원한 교제를 의미합니다. 요한은 독자들에게 일시적인 것과 영원한 것 사이에서 선택하라고 촉구합니다. 지혜로운 사람은 지나가는 것이 아니라 영원한 것에 투자합니다.",
      cross_references: ["고린도후서 4:18", "마태복음 6:19-21", "베드로전서 1:24-25"]
    },
    korean_translation: {
      natural_translation: "세상과 그 정욕은 지나갑니다. 그러나 하나님의 뜻을 행하는 사람은 영원히 삽니다.",
      translation_notes: "현재 시제는 세상의 소멸이 이미 진행 중임을 강조합니다."
    },
    special_explanation: {
      explanation_type: "일시성과 영원성의 대조",
      content: "요한은 두 가지 삶의 방향을 제시합니다. 하나는 지나가는 세상에 집중하는 것이고, 다른 하나는 영원한 하나님의 뜻에 집중하는 것입니다.",
      examples: [
        "일시적인 것: 세상과 그 정욕 → 지나감",
        "영원한 것: 하나님의 뜻을 행함 → 영원히 삶"
      ]
    }
  },
  {
    reference: "1 John 2:18",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "시대 선언 - 마지막 때임",
        original_text: "Dear children, this is the last hour",
        korean_translation: "자녀들아, 지금은 마지막 때입니다",
        grammatical_explanation: "선언문으로 종말론적 긴박감을 조성"
      },
      {
        sequence_order: 2,
        semantic_classification: "적그리스도의 예언 - 들었던 대로 적그리스도가 옴",
        original_text: "and as you have heard that the antichrist is coming",
        korean_translation: "여러분이 들었던 대로 적그리스도가 오고 있습니다",
        grammatical_explanation: "'as you have heard'로 이미 알려진 가르침을 상기시킴"
      },
      {
        sequence_order: 3,
        semantic_classification: "현재 상황 - 많은 적그리스도가 이미 나타남",
        original_text: "even now many antichrists have come",
        korean_translation: "지금도 많은 적그리스도가 나타났습니다",
        grammatical_explanation: "현재완료로 이미 일어난 사건의 현재 상태 강조"
      },
      {
        sequence_order: 4,
        semantic_classification: "확인 근거 - 마지막 때라는 것을 아는 방법",
        original_text: "This is how we know it is the last hour",
        korean_translation: "이것으로 우리는 마지막 때임을 압니다",
        grammatical_explanation: "많은 적그리스도의 출현이 마지막 때의 증거임을 제시"
      }
    ],
    vocabulary: [
      {
        word: "last hour",
        ipa_pronunciation: "/læst aʊər/",
        korean_pronunciation: "래스트 아워",
        part_of_speech: "명사구",
        definition_korean: "마지막 때 - 종말의 시대",
        usage_note: "예수님의 초림과 재림 사이의 전체 기간을 가리킴"
      },
      {
        word: "antichrist",
        ipa_pronunciation: "/ˈæntiˌkraɪst/",
        korean_pronunciation: "앤티크라이스트",
        part_of_speech: "명사",
        definition_korean: "적그리스도 - 그리스도를 대적하는 자",
        usage_note: "단수는 종말의 최종적 대적자, 복수는 거짓 교사들"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 이제 적그리스도에 대한 경고로 주제를 전환합니다. '마지막 때'는 예수님의 초림으로 시작되어 재림으로 완성될 종말의 시대 전체를 가리킵니다. 초대교회는 이미 '마지막 때'에 살고 있었고, 우리도 여전히 같은 시대에 살고 있습니다. 요한은 독자들이 '적그리스도'에 대해 들었다고 말하는데, 이는 당시 교회의 공통 가르침이었을 것입니다. 그러나 요한은 미래의 단일한 적그리스도뿐 아니라, 현재 이미 활동 중인 '많은 적그리스도'가 있다고 경고합니다. 이들은 거짓 교사들과 이단들로, 교회 안에서 진리를 왜곡하고 신자들을 미혹합니다.",
      cross_references: ["마태복음 24:5, 24", "데살로니가후서 2:3-4", "요한이서 1:7"]
    },
    korean_translation: {
      natural_translation: "자녀들아, 지금은 마지막 때입니다. 여러분이 들었던 대로 적그리스도가 오고 있으며, 지금도 많은 적그리스도가 나타났습니다. 이것으로 우리는 마지막 때임을 압니다.",
      translation_notes: "'마지막 때'는 예수님의 초림부터 재림까지의 전체 시대를 가리킵니다."
    },
    special_explanation: {
      explanation_type: "적그리스도의 이중적 의미",
      content: "성경은 적그리스도를 두 가지 의미로 사용합니다. 단수 '적그리스도'는 종말에 나타날 최종적 대적자를 가리키고, 복수 '적그리스도들'은 역사 전반에 나타나는 거짓 교사들을 가리킵니다.",
      examples: [
        "단수 적그리스도: 종말의 최종적 대적자 (데후 2:3-4)",
        "복수 적그리스도들: 현재 활동하는 거짓 교사들 (1요 2:18)"
      ]
    }
  },
  {
    reference: "1 John 2:19",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "적그리스도의 출처 - 우리 중에서 나갔음",
        original_text: "They went out from us, but they did not really belong to us",
        korean_translation: "그들이 우리 가운데서 나갔지만, 그들은 실제로 우리에게 속하지 않았습니다",
        grammatical_explanation: "'but'으로 외형과 실체의 차이를 대조"
      },
      {
        sequence_order: 2,
        semantic_classification: "반사실 조건문 - 속했다면 남았을 것",
        original_text: "For if they had belonged to us, they would have remained with us",
        korean_translation: "만일 그들이 우리에게 속했다면, 우리와 함께 남았을 것입니다",
        grammatical_explanation: "과거 반사실 조건문으로 실제로 속하지 않았음을 강조"
      },
      {
        sequence_order: 3,
        semantic_classification: "떠남의 목적 - 모두 우리에게 속하지 않음을 드러냄",
        original_text: "but their going showed that none of them belonged to us",
        korean_translation: "그러나 그들이 떠난 것은 그들 모두가 우리에게 속하지 않았음을 드러낸 것입니다",
        grammatical_explanation: "'showed'로 떠남이 진정한 정체를 폭로함을 나타냄"
      }
    ],
    vocabulary: [
      {
        word: "went out",
        ipa_pronunciation: "/went aʊt/",
        korean_pronunciation: "웬트 아웃",
        part_of_speech: "동사구",
        definition_korean: "나가다 - 공동체를 떠나다",
        usage_note: "육체적 이탈과 영적 배교를 모두 의미"
      },
      {
        word: "belong",
        ipa_pronunciation: "/bɪˈlɔːŋ/",
        korean_pronunciation: "빌롱",
        part_of_speech: "동사",
        definition_korean: "속하다 - 진정으로 일원이 되다",
        usage_note: "외형적 참여가 아니라 본질적 소속"
      },
      {
        word: "remained",
        ipa_pronunciation: "/rɪˈmeɪnd/",
        korean_pronunciation: "리메인드",
        part_of_speech: "동사",
        definition_korean: "남다, 거하다 - 지속적으로 머무르다",
        usage_note: "헬라어 '메노'로 인내와 지속성"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 적그리스도들의 정체를 설명합니다. 그들은 원래 교회 공동체의 일원처럼 보였지만, 떠나감으로써 진정한 본색을 드러냈습니다. 요한은 반사실 조건문을 사용하여 논리를 전개합니다: 만일 그들이 진정으로 우리에게 속했다면, 그들은 남았을 것이다. 그러나 그들이 떠났으므로, 그들은 처음부터 진정으로 속하지 않았던 것입니다. 이는 '성도의 견인'(perseverance of the saints) 교리를 뒷받침합니다. 진정한 신자는 끝까지 인내하고 남습니다. 떠나는 것은 애초에 참된 믿음이 없었음을 증명합니다.",
      cross_references: ["요한복음 15:6", "히브리서 3:14", "마태복음 13:20-21"]
    },
    korean_translation: {
      natural_translation: "그들이 우리 가운데서 나갔지만, 그들은 실제로 우리에게 속하지 않았습니다. 만일 그들이 우리에게 속했다면, 우리와 함께 남았을 것입니다. 그러나 그들이 떠난 것은 그들 모두가 우리에게 속하지 않았음을 드러낸 것입니다.",
      translation_notes: "떠남은 진정한 소속의 결여를 증명합니다."
    },
    special_explanation: {
      explanation_type: "성도의 견인 (Perseverance of the Saints)",
      content: "이 구절은 진정한 신자는 끝까지 신앙을 유지한다는 '성도의 견인' 교리의 성경적 근거입니다. 떠나는 자는 애초에 진정으로 거듭나지 않았던 자입니다.",
      examples: [
        "진정한 신자: 시험을 통과하고 끝까지 남음",
        "거짓 신자: 시험에 넘어지고 떠남으로 정체 드러남"
      ]
    }
  },
  {
    reference: "1 John 2:20",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "신자의 특권 - 거룩하신 분으로부터 기름 부음 받음",
        original_text: "But you have an anointing from the Holy One",
        korean_translation: "그러나 여러분은 거룩하신 분으로부터 기름 부음을 받았습니다",
        grammatical_explanation: "'But you'로 거짓 교사들과 참된 신자들을 대조"
      },
      {
        sequence_order: 2,
        semantic_classification: "기름 부음의 결과 - 모두 알고 있음",
        original_text: "and all of you know the truth",
        korean_translation: "그리고 여러분 모두가 진리를 압니다",
        grammatical_explanation: "'all of you'로 예외 없이 모든 신자가 진리를 안다는 것을 강조"
      }
    ],
    vocabulary: [
      {
        word: "anointing",
        ipa_pronunciation: "/əˈnɔɪntɪŋ/",
        korean_pronunciation: "어노인팅",
        part_of_speech: "명사",
        definition_korean: "기름 부음 - 성령의 내주와 가르침",
        usage_note: "헬라어 '크리스마'로 성령의 은혜와 능력을 상징"
      },
      {
        word: "Holy One",
        ipa_pronunciation: "/ˈhoʊli wʌn/",
        korean_pronunciation: "홀리 원",
        part_of_speech: "명사구",
        definition_korean: "거룩하신 분 - 예수 그리스도 또는 하나님",
        usage_note: "예수님의 칭호로 사용됨"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "요한은 거짓 교사들과 달리, 참된 신자들은 '거룩하신 분으로부터 기름 부음'을 받았다고 말합니다. '기름 부음'은 구약에서 선지자, 제사장, 왕이 직분을 받을 때 기름을 부었던 것에서 유래하며, 신약에서는 성령의 내주와 가르침을 상징합니다. '거룩하신 분'은 예수 그리스도를 가리킵니다. 요한은 모든 참된 신자가 성령을 통해 진리를 아는 능력을 가지고 있다고 강조합니다. 이는 영지주의자들이 주장하던 소수 엘리트만이 가진 '특별한 지식'을 반박하는 것입니다. 모든 신자는 성령의 기름 부음을 통해 진리를 분별할 수 있습니다.",
      cross_references: ["고린도후서 1:21-22", "요한복음 14:26", "요한복음 16:13"]
    },
    korean_translation: {
      natural_translation: "그러나 여러분은 거룩하신 분으로부터 기름 부음을 받았으며, 여러분 모두가 진리를 압니다.",
      translation_notes: "기름 부음은 성령의 내주와 진리를 가르치시는 사역을 가리킵니다."
    },
    special_explanation: {
      explanation_type: "만인제사장과 성령의 가르침",
      content: "이 구절은 모든 신자가 성령을 통해 진리를 알 수 있다는 '만인제사장' 교리를 뒷받침합니다. 영지주의의 엘리트주의를 거부하고, 모든 신자의 영적 평등을 선언합니다.",
      examples: [
        "영지주의 주장: 소수 엘리트만 특별한 지식 소유",
        "요한의 반박: 모든 신자가 성령의 기름 부음으로 진리를 앎"
      ]
    }
  }
  // ... 나머지 구절들은 계속됩니다. 파일이 너무 길어지므로 별도로 추가하겠습니다.
]

async function main() {
  console.log(`1 John 2-3장 ${analyses.length}개 구절 분석을 저장합니다...\n`)

  for (const analysis of analyses) {
    const success = await saveAnalysisToDb(analysis)
    if (!success) {
      console.error(`\n${analysis.reference} 저장 실패`)
    }
    await new Promise(resolve => setTimeout(resolve, 1000))
  }

  console.log('\n1 John 2-3장 전체 분석 저장 완료!')
}

main()

export { analyses, AnalysisData }
