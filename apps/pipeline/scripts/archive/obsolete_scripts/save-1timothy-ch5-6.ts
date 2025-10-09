import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

const analysesData: AnalysisData[] = [
  {
    reference: "1 Timothy 5:1",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "금지 명령 - 연장자에 대한 태도",
        original_text: "Do not rebuke an older man harshly",
        korean_translation: "나이 든 사람을 가혹하게 꾸짖지 마십시오",
        grammatical_explanation: "부정 명령문, 'harshly'는 금지되는 태도의 방식을 명시"
      },
      {
        sequence_order: 2,
        semantic_classification: "긍정 명령 - 올바른 권면 방식",
        original_text: "but exhort him as if he were your father",
        korean_translation: "오히려 그를 마치 당신의 아버지인 것처럼 권면하십시오",
        grammatical_explanation: "대조 접속사 'but', 가정법 'as if he were'로 비유적 관계 설정"
      },
      {
        sequence_order: 3,
        semantic_classification: "적용 - 젊은 남자들에 대한 태도",
        original_text: "Treat younger men as brothers",
        korean_translation: "젊은 남자들은 형제처럼 대하십시오",
        grammatical_explanation: "명령문, 직유 구조 'as brothers'"
      }
    ],
    vocabulary: [
      {
        word: "rebuke",
        ipa_pronunciation: "/rɪˈbjuːk/",
        korean_pronunciation: "리뷰크",
        definition_korean: "꾸짖다, 책망하다"
      },
      {
        word: "harshly",
        ipa_pronunciation: "/ˈhɑːrʃli/",
        korean_pronunciation: "하쉴리",
        definition_korean: "가혹하게, 혹독하게"
      },
      {
        word: "exhort",
        ipa_pronunciation: "/ɪɡˈzɔːrt/",
        korean_pronunciation: "이그조트",
        definition_korean: "권면하다, 격려하다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 디모데에게 교회 내 다양한 연령층을 대하는 방법을 가르칩니다. 젊은 목회자가 나이 든 회중을 다룰 때 발생할 수 있는 갈등을 예방하기 위한 지침입니다. '가혹하게 꾸짖지 말라'는 명령은 권위를 버리라는 것이 아니라 존중의 태도로 권면하라는 것입니다. 가족 관계의 비유(아버지, 형제)는 교회 공동체가 하나님의 가족임을 강조하며, 연령과 지위에 관계없이 서로 존중해야 함을 가르칩니다."
    },
    korean_translation: {
      natural_translation: "나이 든 사람을 가혹하게 꾸짖지 말고 마치 당신의 아버지인 것처럼 권면하십시오. 젊은 남자들은 형제처럼 대하십시오.",
      translation_notes: "'as if he were your father'는 존중과 온화함의 태도를 강조하며, 교회를 가족 공동체로 보는 관점을 제시합니다."
    }
  },
  {
    reference: "1 Timothy 5:2",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "명령 - 나이 든 여성에 대한 태도",
        original_text: "older women as mothers",
        korean_translation: "나이 든 여성들은 어머니처럼",
        grammatical_explanation: "1절의 'Treat' 동사가 생략된 병렬 구조"
      },
      {
        sequence_order: 2,
        semantic_classification: "명령 - 젊은 여성에 대한 태도와 조건",
        original_text: "and younger women as sisters, with absolute purity",
        korean_translation: "젊은 여성들은 자매처럼, 절대적인 순결함으로",
        grammatical_explanation: "병렬 구조, 'with absolute purity'는 특별히 강조된 조건"
      }
    ],
    vocabulary: [
      {
        word: "absolute",
        ipa_pronunciation: "/ˈæbsəluːt/",
        korean_pronunciation: "앱솔루트",
        definition_korean: "절대적인, 완전한"
      },
      {
        word: "purity",
        ipa_pronunciation: "/ˈpjʊrəti/",
        korean_pronunciation: "퓨러티",
        definition_korean: "순결, 순수함"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "1절의 가족 비유가 계속됩니다. 나이 든 여성은 어머니처럼, 젊은 여성은 자매처럼 대하라는 명령은 교회 내 모든 관계가 거룩하고 순결해야 함을 강조합니다. 특히 '절대적인 순결함'이라는 구절은 젊은 남성 목회자가 젊은 여성 교인들을 대할 때 성적 부도덕의 의심조차 받지 않도록 주의해야 함을 경고합니다. 1세기 교회에서 여성의 지위가 향상되면서 발생할 수 있는 오해를 예방하는 지혜로운 교훈입니다."
    },
    korean_translation: {
      natural_translation: "나이 든 여성들은 어머니처럼, 젊은 여성들은 절대적인 순결함으로 자매처럼 대하십시오.",
      translation_notes: "'with absolute purity'는 목회자의 도덕적 청렴성에 대한 높은 기준을 요구하며, 교회 공동체의 성적 순결을 지키기 위한 실천적 지침입니다."
    }
  },
  {
    reference: "1 Timothy 5:3",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "명령 - 진정한 과부에 대한 인정",
        original_text: "Give proper recognition to those widows who are really in need",
        korean_translation: "정말로 도움이 필요한 과부들에게 적절한 인정을 하십시오",
        grammatical_explanation: "명령문, 관계절 'who are really in need'로 대상을 한정"
      }
    ],
    vocabulary: [
      {
        word: "recognition",
        ipa_pronunciation: "/ˌrekəɡˈnɪʃn/",
        korean_pronunciation: "레커그니션",
        definition_korean: "인정, 인식"
      },
      {
        word: "widows",
        ipa_pronunciation: "/ˈwɪdoʊz/",
        korean_pronunciation: "위도우즈",
        definition_korean: "과부들"
      },
      {
        word: "in need",
        ipa_pronunciation: "/ɪn niːd/",
        korean_pronunciation: "인 니드",
        definition_korean: "도움이 필요한"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "3-16절은 과부 돌봄에 관한 상세한 지침입니다. 1세기 로마 사회에서 과부는 가장 취약한 계층이었으며, 초대 교회는 이들을 돌보는 것을 중요한 사역으로 여겼습니다(행 6:1 참조). '적절한 인정'은 단순한 동정이 아니라 존중과 물질적 지원을 포함하는 공식적 돌봄을 의미합니다. '정말로 도움이 필요한'이라는 표현은 다음 구절들에서 설명될 자격 기준을 암시하며, 교회 자원의 지혜로운 관리를 가르칩니다."
    },
    korean_translation: {
      natural_translation: "정말로 도움이 필요한 과부들에게 적절한 인정을 하십시오.",
      translation_notes: "'proper recognition'은 존중과 물질적 지원을 포함하는 공식적 돌봄 체계를 가리킵니다."
    }
  },
  {
    reference: "1 Timothy 5:4",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "조건 - 가족이 있는 과부의 경우",
        original_text: "But if a widow has children or grandchildren",
        korean_translation: "그러나 과부에게 자녀나 손주가 있다면",
        grammatical_explanation: "조건절 'if', 대조 접속사 'But'으로 3절과 대비"
      },
      {
        sequence_order: 2,
        semantic_classification: "명령 - 가족의 책임",
        original_text: "these should learn first of all to put their religion into practice by caring for their own family",
        korean_translation: "이들은 무엇보다도 자기 가족을 돌봄으로써 자신의 신앙을 실천하는 법을 배워야 합니다",
        grammatical_explanation: "'should learn'은 의무를 나타냄, 부정사구 'to put... into practice'와 'by caring'으로 방법 설명"
      },
      {
        sequence_order: 3,
        semantic_classification: "목적 - 부모 조부모에 대한 보답",
        original_text: "and so repaying their parents and grandparents",
        korean_translation: "그리하여 부모와 조부모에게 보답하는 것입니다",
        grammatical_explanation: "분사 'repaying'으로 결과를 나타냄"
      },
      {
        sequence_order: 4,
        semantic_classification: "이유 - 하나님을 기쁘게 함",
        original_text: "for this is pleasing to God",
        korean_translation: "이것이 하나님을 기쁘시게 하는 것이기 때문입니다",
        grammatical_explanation: "'for' 접속사로 이유 제시, 'pleasing to God'은 신학적 근거"
      }
    ],
    vocabulary: [
      {
        word: "grandchildren",
        ipa_pronunciation: "/ˈɡrænˌtʃɪldrən/",
        korean_pronunciation: "그랜칠드런",
        definition_korean: "손주들"
      },
      {
        word: "put into practice",
        ipa_pronunciation: "/pʊt ˈɪntuː ˈpræktɪs/",
        korean_pronunciation: "풋 인투 프랙티스",
        definition_korean: "실천하다, 실행하다"
      },
      {
        word: "repaying",
        ipa_pronunciation: "/rɪˈpeɪɪŋ/",
        korean_pronunciation: "리페잉",
        definition_korean: "보답하다, 갚다"
      },
      {
        word: "pleasing",
        ipa_pronunciation: "/ˈpliːzɪŋ/",
        korean_pronunciation: "플리징",
        definition_korean: "기쁘게 하는"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 과부 돌봄의 일차적 책임이 가족에게 있음을 분명히 합니다. '신앙을 실천하다'는 표현은 참된 종교가 단순히 의식이나 교리가 아니라 구체적인 사랑의 행위임을 강조합니다(약 1:27). '보답하다'는 단어는 부모의 양육에 대한 자녀의 감사와 책임을 나타내며, 십계명의 다섯 번째 계명(부모 공경)과 연결됩니다. 이러한 가족 돌봄이 '하나님을 기쁘시게 한다'는 신학적 근거는 효도와 가족 책임이 단순한 사회 규범이 아니라 하나님의 뜻임을 보여줍니다."
    },
    korean_translation: {
      natural_translation: "그러나 과부에게 자녀나 손주가 있다면, 이들은 무엇보다도 자기 가족을 돌봄으로써 자신의 신앙을 실천하는 법을 배우고 부모와 조부모에게 보답해야 합니다. 이것이 하나님을 기쁘시게 하는 것이기 때문입니다.",
      translation_notes: "'put their religion into practice'는 참된 신앙이 가족 돌봄이라는 구체적 행위로 나타나야 함을 강조합니다."
    }
  },
  {
    reference: "1 Timothy 5:5",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "정의 - 진정한 과부의 특징",
        original_text: "The widow who is really in need and left all alone puts her hope in God",
        korean_translation: "정말로 도움이 필요하고 완전히 홀로 남겨진 과부는 하나님께 소망을 둡니다",
        grammatical_explanation: "두 개의 관계절로 과부를 정의, 'puts her hope in God'은 영적 특징"
      },
      {
        sequence_order: 2,
        semantic_classification: "행위 - 기도 생활",
        original_text: "and continues night and day to pray and to ask God for help",
        korean_translation: "밤낮으로 계속해서 기도하며 하나님께 도움을 구합니다",
        grammatical_explanation: "병렬 구조 'continues... to pray and to ask', 'night and day'로 지속성 강조"
      }
    ],
    vocabulary: [
      {
        word: "left all alone",
        ipa_pronunciation: "/left ɔːl əˈloʊn/",
        korean_pronunciation: "레프트 올 얼론",
        definition_korean: "완전히 홀로 남겨진"
      },
      {
        word: "hope",
        ipa_pronunciation: "/hoʊp/",
        korean_pronunciation: "호프",
        definition_korean: "소망, 희망"
      },
      {
        word: "continues",
        ipa_pronunciation: "/kənˈtɪnjuːz/",
        korean_pronunciation: "컨티뉴즈",
        definition_korean: "계속하다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "3절의 '정말로 도움이 필요한 과부'의 정의가 여기서 구체화됩니다. 진정한 과부는 단순히 경제적으로 궁핍한 것이 아니라 '완전히 홀로 남겨진' 상태, 즉 의지할 가족이 없는 상황입니다. 그러나 영적 측면에서 이들은 하나님께 소망을 두고 밤낮으로 기도하는 경건한 삶을 삽니다. 이는 안나 선지자의 모습을 연상시킵니다(눅 2:36-38). 교회의 지원 대상은 단순히 가난한 과부가 아니라 경건하고 의지할 곳 없는 과부임을 명확히 합니다."
    },
    korean_translation: {
      natural_translation: "정말로 도움이 필요하고 완전히 홀로 남겨진 과부는 하나님께 소망을 두고 밤낮으로 계속해서 기도하며 하나님께 도움을 구합니다.",
      translation_notes: "'left all alone'은 단순한 외로움이 아니라 의지할 가족이 전혀 없는 완전한 고립 상태를 의미합니다."
    }
  },
  {
    reference: "1 Timothy 5:6",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "대조 - 방탕한 과부의 상태",
        original_text: "But the widow who lives for pleasure is dead even while she lives",
        korean_translation: "그러나 쾌락을 위해 사는 과부는 살아 있어도 죽은 것입니다",
        grammatical_explanation: "대조 접속사 'But', 역설적 표현 'dead even while she lives'"
      }
    ],
    vocabulary: [
      {
        word: "pleasure",
        ipa_pronunciation: "/ˈpleʒər/",
        korean_pronunciation: "플레저",
        definition_korean: "쾌락, 즐거움"
      },
      {
        word: "dead",
        ipa_pronunciation: "/ded/",
        korean_pronunciation: "데드",
        definition_korean: "죽은"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "5절의 경건한 과부와 극명한 대조를 이룹니다. '쾌락을 위해 사는' 과부는 남편이 죽은 후 도덕적 방종에 빠진 여성을 가리킵니다. '살아 있어도 죽었다'는 역설적 표현은 육체적으로는 생존하지만 영적으로는 죽은 상태를 의미합니다(엡 2:1 참조). 이러한 과부는 교회의 지원 대상이 아니며, 오히려 회개가 필요한 상태입니다. 바울은 교회 자원이 진정으로 경건하고 도움이 필요한 이들에게 집중되어야 함을 강조합니다."
    },
    korean_translation: {
      natural_translation: "그러나 쾌락을 위해 사는 과부는 살아 있어도 죽은 것입니다.",
      translation_notes: "'dead even while she lives'는 영적 죽음의 심각성을 강조하는 역설적 표현입니다."
    }
  },
  {
    reference: "1 Timothy 5:7",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "명령 - 교훈 전달",
        original_text: "Give the people these instructions",
        korean_translation: "사람들에게 이 교훈들을 주십시오",
        grammatical_explanation: "명령문, 'these instructions'는 앞의 과부 돌봄 지침들을 가리킴"
      },
      {
        sequence_order: 2,
        semantic_classification: "목적 - 비난 회피",
        original_text: "so that no one may be open to blame",
        korean_translation: "아무도 비난받을 여지가 없도록",
        grammatical_explanation: "목적절 'so that', 'be open to blame'은 취약성을 나타냄"
      }
    ],
    vocabulary: [
      {
        word: "instructions",
        ipa_pronunciation: "/ɪnˈstrʌkʃnz/",
        korean_pronunciation: "인스트럭션즈",
        definition_korean: "교훈들, 지시들"
      },
      {
        word: "open to blame",
        ipa_pronunciation: "/ˈoʊpən tuː bleɪm/",
        korean_pronunciation: "오픈 투 블레임",
        definition_korean: "비난받을 여지가 있는"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 디모데에게 앞서 제시한 과부 돌봄의 원칙들을 교회에 명확히 가르치라고 지시합니다. 이는 개인적 조언이 아니라 공개적으로 선포해야 할 교회 정책입니다. '비난받을 여지가 없도록'이라는 목적은 이중적입니다: (1) 교회 내부적으로 과부들이나 가족들이 책임을 회피하지 않도록, (2) 외부적으로 교회가 무책임하다거나 부도덕하다는 비난을 받지 않도록. 명확한 원칙과 공개적 교훈은 교회의 증거와 질서를 지키는 지혜입니다."
    },
    korean_translation: {
      natural_translation: "사람들에게 이 교훈들을 주어서 아무도 비난받을 여지가 없도록 하십시오.",
      translation_notes: "'these instructions'는 3-6절의 과부 돌봄 원칙들을 가리키며, 공개적 교훈의 필요성을 강조합니다."
    }
  },
  {
    reference: "1 Timothy 5:8",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "조건 - 가족 돌봄 실패",
        original_text: "Anyone who does not provide for their relatives, and especially for their own household",
        korean_translation: "자기 친척들, 특히 자기 가족을 돌보지 않는 사람은",
        grammatical_explanation: "관계절, 'especially'로 가족에 대한 책임 강조, 'provide for'는 물질적 지원"
      },
      {
        sequence_order: 2,
        semantic_classification: "결과 - 믿음 부인",
        original_text: "has denied the faith",
        korean_translation: "믿음을 부인한 것입니다",
        grammatical_explanation: "완료 시제로 결과 상태 표현, 'deny the faith'는 행위를 통한 신앙 부정"
      },
      {
        sequence_order: 3,
        semantic_classification: "비교 - 불신자보다 못함",
        original_text: "and is worse than an unbeliever",
        korean_translation: "불신자보다 더 나쁩니다",
        grammatical_explanation: "비교급 구조 'worse than', 극단적 정죄"
      }
    ],
    vocabulary: [
      {
        word: "provide for",
        ipa_pronunciation: "/prəˈvaɪd fɔːr/",
        korean_pronunciation: "프러바이드 포",
        definition_korean: "돌보다, 부양하다"
      },
      {
        word: "relatives",
        ipa_pronunciation: "/ˈrelətɪvz/",
        korean_pronunciation: "렐러티브즈",
        definition_korean: "친척들"
      },
      {
        word: "household",
        ipa_pronunciation: "/ˈhaʊshoʊld/",
        korean_pronunciation: "하우스홀드",
        definition_korean: "가족, 가정"
      },
      {
        word: "denied",
        ipa_pronunciation: "/dɪˈnaɪd/",
        korean_pronunciation: "디나이드",
        definition_korean: "부인하다"
      },
      {
        word: "unbeliever",
        ipa_pronunciation: "/ˌʌnbɪˈliːvər/",
        korean_pronunciation: "언비리버",
        definition_korean: "불신자"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "이것은 신약성경에서 가장 강력한 경고 중 하나입니다. 바울은 가족 돌봄을 단순한 사회적 의무가 아니라 신앙의 핵심으로 제시합니다. '믿음을 부인했다'는 표현은 충격적이며, 신앙 고백과 삶의 일치를 강조합니다. '불신자보다 더 나쁘다'는 비교는 극단적입니다 - 불신자들도 자기 가족을 돌보는데, 그리스도인이 이를 하지 않는다면 신앙의 위선을 드러내는 것입니다. 이는 참된 복음이 개인의 경건함뿐 아니라 가족과 사회적 책임까지 포함함을 보여줍니다."
    },
    korean_translation: {
      natural_translation: "자기 친척들, 특히 자기 가족을 돌보지 않는 사람은 믿음을 부인한 것이며 불신자보다 더 나쁩니다.",
      translation_notes: "'has denied the faith'는 행위를 통한 신앙 부정을 의미하며, 가족 돌봄이 신앙의 본질적 증거임을 강조합니다."
    }
  },
  {
    reference: "1 Timothy 5:9",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "자격 조건 - 나이 제한",
        original_text: "No widow may be put on the list of widows unless she is over sixty",
        korean_translation: "과부 명단에 올릴 수 있는 과부는 60세 이상이어야 하며",
        grammatical_explanation: "부정문, 조건절 'unless', 'put on the list'는 공식 등록"
      },
      {
        sequence_order: 2,
        semantic_classification: "자격 조건 - 결혼 신실함",
        original_text: "has been faithful to her husband",
        korean_translation: "한 남편에게 신실했어야 합니다",
        grammatical_explanation: "완료 시제로 과거 삶의 패턴 강조, 'faithful to'는 결혼 충실도"
      }
    ],
    vocabulary: [
      {
        word: "list",
        ipa_pronunciation: "/lɪst/",
        korean_pronunciation: "리스트",
        definition_korean: "명단, 목록"
      },
      {
        word: "faithful",
        ipa_pronunciation: "/ˈfeɪθfl/",
        korean_pronunciation: "페이쓰플",
        definition_korean: "신실한, 충실한"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "여기서부터 교회가 공식적으로 지원하는 과부 명단의 자격 조건이 제시됩니다. '과부 명단'은 초대 교회가 운영한 공식적 과부 지원 제도로 보입니다. 60세 이상이라는 나이 제한은 여러 이유가 있습니다: (1) 재혼 가능성이 낮아 장기적 지원이 필요, (2) 연령에 따른 지혜와 성숙함, (3) 교회 자원의 현실적 관리. '한 남편에게 신실했다'는 조건은 결혼 생활 동안의 성적 순결과 충실함을 요구하며, 도덕적 평판이 중요함을 보여줍니다."
    },
    korean_translation: {
      natural_translation: "과부 명단에 올릴 수 있는 과부는 60세 이상이고 한 남편에게 신실했어야 합니다.",
      translation_notes: "'the list of widows'는 교회의 공식적 과부 지원 제도를 가리키며, 엄격한 자격 조건이 있었음을 보여줍니다."
    }
  },
  {
    reference: "1 Timothy 5:10",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "자격 조건 - 선행으로 알려짐",
        original_text: "and is well known for her good deeds",
        korean_translation: "선한 일들로 잘 알려져 있어야 하며",
        grammatical_explanation: "수동태 구조 'is well known for', 공적 평판 강조"
      },
      {
        sequence_order: 2,
        semantic_classification: "구체적 선행 - 자녀 양육",
        original_text: "such as bringing up children",
        korean_translation: "자녀를 키우는 것과 같은 일입니다",
        grammatical_explanation: "'such as'로 구체적 예시 시작, 동명사구"
      },
      {
        sequence_order: 3,
        semantic_classification: "구체적 선행 - 환대",
        original_text: "showing hospitality",
        korean_translation: "손님을 대접하는 것",
        grammatical_explanation: "병렬 동명사구"
      },
      {
        sequence_order: 4,
        semantic_classification: "구체적 선행 - 겸손한 섬김",
        original_text: "washing the feet of the Lord's people",
        korean_translation: "주님의 백성들의 발을 씻어주는 것",
        grammatical_explanation: "병렬 동명사구, 낮은 섬김의 상징적 행위"
      },
      {
        sequence_order: 5,
        semantic_classification: "구체적 선행 - 어려운 이 돕기",
        original_text: "helping those in trouble",
        korean_translation: "어려움에 처한 사람들을 돕는 것",
        grammatical_explanation: "병렬 동명사구"
      },
      {
        sequence_order: 6,
        semantic_classification: "포괄적 선행 - 모든 선한 일 헌신",
        original_text: "and devoting herself to all kinds of good deeds",
        korean_translation: "온갖 선한 일에 자신을 바치는 것",
        grammatical_explanation: "병렬 동명사구, 'all kinds of'로 포괄성 강조"
      }
    ],
    vocabulary: [
      {
        word: "bringing up",
        ipa_pronunciation: "/ˈbrɪŋɪŋ ʌp/",
        korean_pronunciation: "브링잉 업",
        definition_korean: "키우다, 양육하다"
      },
      {
        word: "hospitality",
        ipa_pronunciation: "/ˌhɑːspɪˈtæləti/",
        korean_pronunciation: "하스피탤러티",
        definition_korean: "환대, 손님 대접"
      },
      {
        word: "washing",
        ipa_pronunciation: "/ˈwɑːʃɪŋ/",
        korean_pronunciation: "워싱",
        definition_korean: "씻다"
      },
      {
        word: "devoting",
        ipa_pronunciation: "/dɪˈvoʊtɪŋ/",
        korean_pronunciation: "디보팅",
        definition_korean: "바치다, 헌신하다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "과부 명단 자격의 마지막 조건은 선행으로 널리 알려진 삶입니다. 바울은 다섯 가지 구체적 선행을 나열합니다: (1) 자녀 양육 - 가정에서의 충실함, (2) 손님 대접 - 초대 교회에서 중요한 덕목(히 13:2), (3) 발 씻김 - 예수님의 모범을 따른 겸손한 섬김(요 13:14), (4) 어려운 이 돕기 - 자비와 긍휼의 실천, (5) 모든 선한 일 헌신 - 포괄적 헌신. 이러한 조건들은 과부 명단이 단순한 구제 대상이 아니라 교회의 영적 자산이며, 젊은 세대의 본보기가 되는 경건한 여성들의 명예로운 지위였음을 보여줍니다."
    },
    korean_translation: {
      natural_translation: "선한 일들로 잘 알려져 있어야 합니다. 이는 자녀를 키우는 것, 손님을 대접하는 것, 주님의 백성들의 발을 씻어주는 것, 어려움에 처한 사람들을 돕는 것, 온갖 선한 일에 자신을 바치는 것과 같은 일들입니다.",
      translation_notes: "'washing the feet of the Lord's people'은 겸손한 섬김의 상징이며, 예수님의 모범(요 13:14)을 따르는 구체적 행위입니다."
    }
  },
  {
    reference: "1 Timothy 5:11",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "금지 - 젊은 과부 명단 제외",
        original_text: "As for younger widows, do not put them on such a list",
        korean_translation: "젊은 과부들은 그런 명단에 올리지 마십시오",
        grammatical_explanation: "대조 표현 'As for', 부정 명령문"
      },
      {
        sequence_order: 2,
        semantic_classification: "이유 - 육체적 욕망",
        original_text: "For when their sensual desires overcome their dedication to Christ",
        korean_translation: "그들의 육체적 욕망이 그리스도께 대한 헌신을 압도할 때",
        grammatical_explanation: "'For'로 이유 설명, 시간절 'when', 'overcome'은 극복/압도"
      },
      {
        sequence_order: 3,
        semantic_classification: "결과 - 재혼 욕구",
        original_text: "they want to marry",
        korean_translation: "그들은 결혼하기를 원하기 때문입니다",
        grammatical_explanation: "결과절, 'want to marry'는 자연스러운 욕구이지만 맥락상 문제가 됨"
      }
    ],
    vocabulary: [
      {
        word: "sensual",
        ipa_pronunciation: "/ˈsenʃuəl/",
        korean_pronunciation: "센슈얼",
        definition_korean: "육체적인, 감각적인"
      },
      {
        word: "desires",
        ipa_pronunciation: "/dɪˈzaɪərz/",
        korean_pronunciation: "디자이어즈",
        definition_korean: "욕망들, 욕구들"
      },
      {
        word: "overcome",
        ipa_pronunciation: "/ˌoʊvərˈkʌm/",
        korean_pronunciation: "오버컴",
        definition_korean: "극복하다, 압도하다"
      },
      {
        word: "dedication",
        ipa_pronunciation: "/ˌdedɪˈkeɪʃn/",
        korean_pronunciation: "데디케이션",
        definition_korean: "헌신, 전념"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 젊은 과부를 명단에서 제외하라고 명령합니다. 이유는 실용적이며 심리적 통찰을 보여줍니다. 젊은 과부들은 자연스럽게 재혼 욕구가 있으며, 이것 자체는 죄가 아닙니다. 문제는 과부 명단에 등록되면 일종의 헌신 서약을 하게 되는데, 나중에 재혼 욕구가 이 헌신과 충돌할 수 있다는 점입니다. 바울은 이를 '육체적 욕망이 그리스도께 대한 헌신을 압도한다'고 표현합니다. 이는 인간 본성에 대한 현실적 이해이며, 불필요한 영적 갈등을 예방하려는 지혜입니다."
    },
    korean_translation: {
      natural_translation: "젊은 과부들은 그런 명단에 올리지 마십시오. 그들의 육체적 욕망이 그리스도께 대한 헌신을 압도할 때 결혼하기를 원하기 때문입니다.",
      translation_notes: "'sensual desires'는 재혼에 대한 자연스러운 욕구를 가리키며, 이것이 과부 명단의 헌신과 충돌할 수 있음을 설명합니다."
    }
  },
  {
    reference: "1 Timothy 5:12",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "결과 - 자기 심판",
        original_text: "Thus they bring judgment on themselves",
        korean_translation: "그리하여 그들은 자기 자신에게 심판을 가져옵니다",
        grammatical_explanation: "'Thus'로 11절과 연결, 'bring judgment on'은 자초하는 결과"
      },
      {
        sequence_order: 2,
        semantic_classification: "이유 - 첫 서약 파기",
        original_text: "because they have broken their first pledge",
        korean_translation: "그들이 첫 서약을 깨뜨렸기 때문입니다",
        grammatical_explanation: "'because' 절, 완료 시제 'have broken', 'first pledge'는 초기 헌신"
      }
    ],
    vocabulary: [
      {
        word: "judgment",
        ipa_pronunciation: "/ˈdʒʌdʒmənt/",
        korean_pronunciation: "저지먼트",
        definition_korean: "심판, 판단"
      },
      {
        word: "broken",
        ipa_pronunciation: "/ˈbroʊkən/",
        korean_pronunciation: "브로큰",
        definition_korean: "깨뜨리다"
      },
      {
        word: "pledge",
        ipa_pronunciation: "/pledʒ/",
        korean_pronunciation: "플레지",
        definition_korean: "서약, 약속"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "11절의 상황이 계속됩니다. '심판을 가져온다'는 표현은 하나님의 직접적 징벌보다는 양심의 가책과 영적 결과를 의미할 가능성이 높습니다. '첫 서약'은 과부 명단 등록 시 했던 헌신의 약속을 가리킵니다. 이것이 정확히 무엇인지는 명시되지 않았지만, 아마도 그리스도께 헌신하며 재혼하지 않고 교회를 섬기겠다는 약속으로 보입니다. 바울의 요점은 이러한 서약을 지킬 수 없는 위치에 젊은 과부들을 두지 말라는 것입니다. 이는 과도한 종교적 의무가 오히려 죄를 유발할 수 있음을 보여주는 지혜로운 통찰입니다."
    },
    korean_translation: {
      natural_translation: "그리하여 그들은 첫 서약을 깨뜨렸기 때문에 자기 자신에게 심판을 가져옵니다.",
      translation_notes: "'their first pledge'는 과부 명단 등록 시 그리스도께 한 헌신의 약속을 가리킵니다."
    }
  },
  {
    reference: "1 Timothy 5:13",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "추가 문제 - 게으름의 습관",
        original_text: "Besides, they get into the habit of being idle and going about from house to house",
        korean_translation: "게다가 그들은 게으르고 집집마다 돌아다니는 습관에 빠집니다",
        grammatical_explanation: "'Besides' 추가 이유, 'get into the habit of'는 습관 형성, 병렬 동명사구"
      },
      {
        sequence_order: 2,
        semantic_classification: "악화 - 게으름에서 참견으로",
        original_text: "And not only do they become idlers, but also busybodies who talk nonsense",
        korean_translation: "그들은 게으른 자가 될 뿐만 아니라 쓸데없는 말을 하는 참견쟁이도 됩니다",
        grammatical_explanation: "'not only... but also' 구조로 점진적 악화, 강조를 위한 도치"
      },
      {
        sequence_order: 3,
        semantic_classification: "결과 - 부적절한 말",
        original_text: "saying things they ought not to",
        korean_translation: "마땅히 하지 말아야 할 말들을 합니다",
        grammatical_explanation: "분사구로 구체적 행위 설명, 'ought not to'는 도덕적 금지"
      }
    ],
    vocabulary: [
      {
        word: "idle",
        ipa_pronunciation: "/ˈaɪdl/",
        korean_pronunciation: "아이들",
        definition_korean: "게으른, 한가한"
      },
      {
        word: "busybodies",
        ipa_pronunciation: "/ˈbɪziˌbɑːdiz/",
        korean_pronunciation: "비지바디즈",
        definition_korean: "참견쟁이들, 주제넘은 사람들"
      },
      {
        word: "nonsense",
        ipa_pronunciation: "/ˈnɑːnsens/",
        korean_pronunciation: "난센스",
        definition_korean: "쓸데없는 말, 허튼소리"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 젊은 과부를 명단에서 제외해야 할 또 다른 실용적 이유를 제시합니다. 일할 필요가 없고 시간이 많은 젊은 과부들이 빠질 수 있는 유혹은 게으름입니다. 이것은 집집마다 돌아다니는 행동으로 나타나며, 점차 '참견쟁이'가 되어 '쓸데없는 말'과 '마땅히 하지 말아야 할 말'을 하게 됩니다. 이는 교회 공동체에 분쟁과 분열을 일으킬 수 있습니다. 바울의 통찰은 놀랍도록 현실적입니다: 구조화된 책임 없이 물질적 지원만 받는 것은 영적으로나 도덕적으로 건강하지 않습니다."
    },
    korean_translation: {
      natural_translation: "게다가 그들은 게으르고 집집마다 돌아다니는 습관에 빠집니다. 그들은 게으른 자가 될 뿐만 아니라 쓸데없는 말을 하며 마땅히 하지 말아야 할 말들을 하는 참견쟁이도 됩니다.",
      translation_notes: "'busybodies who talk nonsense'는 교회 공동체를 해치는 험담과 분쟁의 원인이 됨을 경고합니다."
    }
  },
  {
    reference: "1 Timothy 5:14",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "권면 - 재혼",
        original_text: "So I counsel younger widows to marry",
        korean_translation: "그러므로 나는 젊은 과부들에게 결혼하라고 권면합니다",
        grammatical_explanation: "'So' 결론, 'counsel'은 강한 권고, 부정사 'to marry'"
      },
      {
        sequence_order: 2,
        semantic_classification: "권면 - 자녀 출산",
        original_text: "to have children",
        korean_translation: "자녀를 낳고",
        grammatical_explanation: "병렬 부정사구"
      },
      {
        sequence_order: 3,
        semantic_classification: "권면 - 가정 관리",
        original_text: "to manage their homes",
        korean_translation: "자기 가정을 관리하며",
        grammatical_explanation: "병렬 부정사구"
      },
      {
        sequence_order: 4,
        semantic_classification: "목적 - 원수의 비방 기회 제거",
        original_text: "and to give the enemy no opportunity for slander",
        korean_translation: "원수에게 비방할 기회를 주지 않도록 하라고 합니다",
        grammatical_explanation: "병렬 부정사구, 'give no opportunity'는 기회 차단"
      }
    ],
    vocabulary: [
      {
        word: "counsel",
        ipa_pronunciation: "/ˈkaʊnsl/",
        korean_pronunciation: "카운슬",
        definition_korean: "권면하다, 조언하다"
      },
      {
        word: "manage",
        ipa_pronunciation: "/ˈmænɪdʒ/",
        korean_pronunciation: "매니지",
        definition_korean: "관리하다, 경영하다"
      },
      {
        word: "enemy",
        ipa_pronunciation: "/ˈenəmi/",
        korean_pronunciation: "에너미",
        definition_korean: "원수, 적"
      },
      {
        word: "slander",
        ipa_pronunciation: "/ˈslændər/",
        korean_pronunciation: "슬랜더",
        definition_korean: "비방, 중상"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "11-13절의 문제들에 대한 바울의 해결책은 놀랍도록 실용적입니다: 젊은 과부들은 재혼하라. 이는 세 가지 목적을 제시합니다: (1) 결혼, (2) 자녀 양육, (3) 가정 관리. 이러한 역할들은 게으름과 참견의 유혹을 제거하며 생산적인 삶을 제공합니다. 최종 목적은 '원수에게 비방할 기회를 주지 않는 것'입니다. '원수'는 사탄을 가리킬 수도 있고(15절), 교회를 비난하는 외부인을 가리킬 수도 있습니다. 바울은 교회의 증거와 평판을 매우 중요하게 여기며, 개인의 선택이 공동체 전체의 증거에 영향을 미친다는 것을 인식합니다."
    },
    korean_translation: {
      natural_translation: "그러므로 나는 젊은 과부들에게 결혼하고 자녀를 낳고 자기 가정을 관리하여 원수에게 비방할 기회를 주지 않도록 하라고 권면합니다.",
      translation_notes: "'the enemy'는 사탄이나 교회를 비난하려는 외부인을 가리키며, 교회의 증거 보호가 중요함을 강조합니다."
    }
  },
  {
    reference: "1 Timothy 5:15",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "현실 - 이미 타락한 사례",
        original_text: "Some have in fact already turned away to follow Satan",
        korean_translation: "실제로 어떤 이들은 이미 사탄을 따르려고 돌아섰습니다",
        grammatical_explanation: "강조 표현 'in fact already', 완료 시제 'have turned away', 부정사 'to follow'"
      }
    ],
    vocabulary: [
      {
        word: "turned away",
        ipa_pronunciation: "/tɜːrnd əˈweɪ/",
        korean_pronunciation: "턴드 어웨이",
        definition_korean: "돌아서다, 이탈하다"
      },
      {
        word: "follow",
        ipa_pronunciation: "/ˈfɑːloʊ/",
        korean_pronunciation: "팔로우",
        definition_korean: "따르다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울의 경고는 이론이 아니라 실제 사례에 기반합니다. 일부 젊은 과부들은 이미 '사탄을 따르려고 돌아섰습니다.' 이것은 극단적 표현이지만, 11-13절에서 언급된 문제들(서약 파기, 게으름, 참견, 부적절한 말)이 심각한 영적 타락으로 이어질 수 있음을 보여줍니다. '사탄을 따른다'는 것은 명시적으로 사탄 숭배를 의미하기보다는 하나님의 뜻에서 벗어나 죄의 길로 갔다는 것을 의미합니다. 이는 바울의 조언이 단순한 선호가 아니라 관찰된 위험에 대한 경고임을 확인시킵니다."
    },
    korean_translation: {
      natural_translation: "실제로 어떤 이들은 이미 사탄을 따르려고 돌아섰습니다.",
      translation_notes: "'turned away to follow Satan'은 영적 타락의 심각성을 극적으로 표현하며, 바울의 경고가 실제 관찰에 기반함을 보여줍니다."
    }
  },
  {
    reference: "1 Timothy 5:16",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "조건 - 믿는 여성과 과부들",
        original_text: "If any woman who is a believer has widows in her care",
        korean_translation: "믿는 여성이 돌볼 과부들이 있다면",
        grammatical_explanation: "조건절 'If', 관계절 'who is a believer', 'in her care' 책임 표현"
      },
      {
        sequence_order: 2,
        semantic_classification: "명령 - 계속 도울 것",
        original_text: "she should continue to help them",
        korean_translation: "그녀는 계속해서 그들을 도와야 합니다",
        grammatical_explanation: "'should' 의무, 'continue to help' 지속적 행위"
      },
      {
        sequence_order: 3,
        semantic_classification: "목적 - 교회 부담 경감",
        original_text: "and not let the church be burdened with them",
        korean_translation: "교회가 그들로 인해 부담받지 않게 해야 합니다",
        grammatical_explanation: "부정 명령, 수동태 'be burdened with'"
      },
      {
        sequence_order: 4,
        semantic_classification: "최종 목적 - 진정한 과부 지원",
        original_text: "so that the church can help those widows who are really in need",
        korean_translation: "그래야 교회가 정말로 도움이 필요한 과부들을 도울 수 있습니다",
        grammatical_explanation: "목적절 'so that', 'can help' 가능성, 관계절로 대상 한정"
      }
    ],
    vocabulary: [
      {
        word: "care",
        ipa_pronunciation: "/ker/",
        korean_pronunciation: "케어",
        definition_korean: "돌봄, 보살핌"
      },
      {
        word: "burdened",
        ipa_pronunciation: "/ˈbɜːrdnd/",
        korean_pronunciation: "버든드",
        definition_korean: "부담을 주다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 과부 돌봄에 관한 지침을 요약하며 마무리합니다. 가족이 있는 과부는 가족이 돌봐야 하며(4절의 원칙 재확인), 교회는 '정말로 도움이 필요한' 과부들(3, 5절)에 집중해야 합니다. 이는 교회 자원의 지혜로운 관리입니다. 바울은 교회가 무한한 자원을 가진 것이 아니라는 현실을 인정하며, 우선순위를 정하도록 가르칩니다. 가족 책임을 강조하는 것은 교회 돌봄을 약화시키는 것이 아니라 오히려 진정으로 도움이 필요한 이들에게 더 나은 돌봄을 제공하기 위함입니다. 이는 사회적 책임과 교회 사역의 균형을 보여주는 지혜로운 원칙입니다."
    },
    korean_translation: {
      natural_translation: "믿는 여성이 돌볼 과부들이 있다면, 그녀는 계속해서 그들을 도와야 합니다. 교회가 그들로 인해 부담받지 않게 하여 교회가 정말로 도움이 필요한 과부들을 도울 수 있게 해야 합니다.",
      translation_notes: "이 구절은 가족 책임과 교회 자원의 지혜로운 배분이라는 두 가지 원칙을 통합하여 제시합니다."
    }
  },
  {
    reference: "1 Timothy 6:1",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "대상 지정 - 노예 신분의 그리스도인",
        original_text: "All who are under the yoke of slavery",
        korean_translation: "노예의 멍에 아래 있는 모든 이들은",
        grammatical_explanation: "관계절, 'under the yoke'는 종속 상태의 은유"
      },
      {
        sequence_order: 2,
        semantic_classification: "명령 - 주인 존중",
        original_text: "should consider their masters worthy of full respect",
        korean_translation: "자기 주인을 충분한 존경을 받을 만한 자로 여겨야 합니다",
        grammatical_explanation: "'should consider' 의무, 'worthy of full respect' 가치 평가"
      },
      {
        sequence_order: 3,
        semantic_classification: "목적 - 하나님의 이름과 교훈 보호",
        original_text: "so that God's name and our teaching may not be slandered",
        korean_translation: "하나님의 이름과 우리 가르침이 비방받지 않도록",
        grammatical_explanation: "목적절 'so that', 수동태 'may not be slandered', 두 목적어 병렬"
      }
    ],
    vocabulary: [
      {
        word: "yoke",
        ipa_pronunciation: "/joʊk/",
        korean_pronunciation: "요크",
        definition_korean: "멍에, 속박"
      },
      {
        word: "slavery",
        ipa_pronunciation: "/ˈsleɪvəri/",
        korean_pronunciation: "슬레이버리",
        definition_korean: "노예제도"
      },
      {
        word: "masters",
        ipa_pronunciation: "/ˈmæstərz/",
        korean_pronunciation: "마스터즈",
        definition_korean: "주인들"
      },
      {
        word: "worthy",
        ipa_pronunciation: "/ˈwɜːrði/",
        korean_pronunciation: "워디",
        definition_korean: "가치 있는, 받을 만한"
      },
      {
        word: "slandered",
        ipa_pronunciation: "/ˈslændərd/",
        korean_pronunciation: "슬랜더드",
        definition_korean: "비방받다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 노예 제도라는 1세기 로마 사회의 현실을 다룹니다. 초대 교회에는 많은 노예 신자들이 있었으며(고전 7:21-24), 복음은 '그리스도 안에서 모두 하나'라는 혁명적 메시지를 전했습니다(갈 3:28). 그러나 바울은 사회 제도의 즉각적 전복이 아니라 그 안에서의 경건한 삶을 가르칩니다. 노예 신자들은 불신자 주인에게도 '충분한 존경'을 보여야 하며, 그 이유는 복음의 증거입니다. 노예들이 무례하거나 불순종하면 외부인들이 '하나님의 이름과 우리 가르침'을 비방할 것이기 때문입니다. 이는 개인의 행위가 복음 전체의 평판에 영향을 미친다는 중요한 원칙입니다."
    },
    korean_translation: {
      natural_translation: "노예의 멍에 아래 있는 모든 이들은 하나님의 이름과 우리 가르침이 비방받지 않도록 자기 주인을 충분한 존경을 받을 만한 자로 여겨야 합니다.",
      translation_notes: "'under the yoke of slavery'는 노예의 억압적 상황을 인정하면서도, 그 안에서 복음의 증거를 우선시하도록 가르칩니다."
    }
  },
  {
    reference: "1 Timothy 6:2",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "특수 상황 - 믿는 주인을 둔 노예",
        original_text: "Those who have believing masters should not show them disrespect just because they are fellow believers",
        korean_translation: "믿는 주인을 둔 이들은 그들이 동료 신자라는 이유만으로 그들을 무례하게 대해서는 안 됩니다",
        grammatical_explanation: "관계절 'who have', 부정 명령, 'just because' 잘못된 논리 경고"
      },
      {
        sequence_order: 2,
        semantic_classification: "대안 명령 - 더 나은 섬김",
        original_text: "Instead, they should serve them even better",
        korean_translation: "오히려 더 잘 섬겨야 합니다",
        grammatical_explanation: "대조 부사 'Instead', 비교급 'even better'"
      },
      {
        sequence_order: 3,
        semantic_classification: "이유 - 주인의 신분과 헌신",
        original_text: "because their masters are dear to them as fellow believers and are devoted to the welfare of their slaves",
        korean_translation: "그들의 주인이 동료 신자로서 그들에게 소중하고 노예들의 복지에 헌신하기 때문입니다",
        grammatical_explanation: "'because' 절, 두 가지 이유를 'and'로 연결"
      }
    ],
    vocabulary: [
      {
        word: "disrespect",
        ipa_pronunciation: "/ˌdɪsrɪˈspekt/",
        korean_pronunciation: "디스리스펙트",
        definition_korean: "무례, 불경"
      },
      {
        word: "fellow believers",
        ipa_pronunciation: "/ˈfeloʊ bɪˈliːvərz/",
        korean_pronunciation: "펠로우 비리버즈",
        definition_korean: "동료 신자들"
      },
      {
        word: "devoted",
        ipa_pronunciation: "/dɪˈvoʊtɪd/",
        korean_pronunciation: "디보티드",
        definition_korean: "헌신하다"
      },
      {
        word: "welfare",
        ipa_pronunciation: "/ˈwelfer/",
        korean_pronunciation: "웰페어",
        definition_korean: "복지, 안녕"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 더 복잡한 상황을 다룹니다: 주인도 그리스도인인 경우입니다. 일부 노예들은 '그리스도 안에서 형제'라는 평등 개념을 오해하여 주인에게 무례할 수 있었습니다. 바울은 이를 경고하며, 오히려 믿는 주인을 '더 잘' 섬기라고 명령합니다. 이유는 두 가지입니다: (1) 영적 유대 - 주인이 '동료 신자로서 소중함', (2) 주인의 선한 동기 - '노예들의 복지에 헌신함'. 이는 사회적 역할과 영적 평등의 역설을 보여줍니다. 그리스도 안에서 주인과 노예는 평등하지만(갈 3:28), 사회적 역할은 여전히 존중되어야 합니다. 복음은 사회 구조의 즉각적 혁명이 아니라 관계의 변화를 통해 점진적으로 사회를 변화시킵니다."
    },
    korean_translation: {
      natural_translation: "믿는 주인을 둔 이들은 그들이 동료 신자라는 이유만으로 무례하게 대해서는 안 됩니다. 오히려 그들의 주인이 동료 신자로서 소중하고 노예들의 복지에 헌신하기 때문에 더 잘 섬겨야 합니다.",
      translation_notes: "'serve them even better'는 영적 평등이 사회적 책임을 없애는 것이 아니라 오히려 더 나은 섬김으로 이어져야 함을 보여줍니다."
    }
  },
  {
    reference: "1 Timothy 6:3-5",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "조건 - 거짓 교사의 특징",
        original_text: "If anyone teaches otherwise and does not agree to the sound instruction of our Lord Jesus Christ and to godly teaching",
        korean_translation: "누구든지 다르게 가르치고 우리 주 예수 그리스도의 건전한 가르침과 경건한 교훈에 동의하지 않으면",
        grammatical_explanation: "조건절 'If', 두 개의 부정 'teaches otherwise'와 'does not agree', 병렬 목적어"
      },
      {
        sequence_order: 2,
        semantic_classification: "판단 - 교만과 무지",
        original_text: "they are conceited and understand nothing",
        korean_translation: "그들은 교만하고 아무것도 이해하지 못합니다",
        grammatical_explanation: "두 가지 특징을 병렬로 제시, 'understand nothing' 전면 부정"
      },
      {
        sequence_order: 3,
        semantic_classification: "병적 관심 - 논쟁과 말다툼",
        original_text: "They have an unhealthy interest in controversies and quarrels about words",
        korean_translation: "그들은 논쟁과 말다툼에 병적인 관심을 가지고 있습니다",
        grammatical_explanation: "'unhealthy interest'는 비정상적 집착, 'about words' 내용 명시"
      },
      {
        sequence_order: 4,
        semantic_classification: "결과 - 다섯 가지 악",
        original_text: "that result in envy, strife, malicious talk, evil suspicions and constant friction between people of corrupt mind",
        korean_translation: "그 결과 시기, 분쟁, 악한 말, 악한 의심, 부패한 마음을 가진 사람들 사이의 끊임없는 마찰이 생깁니다",
        grammatical_explanation: "관계절 'that result in', 다섯 가지 악을 나열, 'of corrupt mind' 추가 특징"
      },
      {
        sequence_order: 5,
        semantic_classification: "최종 상태 - 진리 상실",
        original_text: "who have been robbed of the truth",
        korean_translation: "이들은 진리를 빼앗겼으며",
        grammatical_explanation: "관계절, 수동태 'have been robbed' 완료 시제"
      },
      {
        sequence_order: 6,
        semantic_classification: "거짓 동기 - 경건의 오용",
        original_text: "and who think that godliness is a means to financial gain",
        korean_translation: "경건을 재정적 이득의 수단으로 생각합니다",
        grammatical_explanation: "병렬 관계절, 'a means to' 도구화"
      }
    ],
    vocabulary: [
      {
        word: "sound instruction",
        ipa_pronunciation: "/saʊnd ɪnˈstrʌkʃn/",
        korean_pronunciation: "사운드 인스트럭션",
        definition_korean: "건전한 가르침"
      },
      {
        word: "conceited",
        ipa_pronunciation: "/kənˈsiːtɪd/",
        korean_pronunciation: "컨시티드",
        definition_korean: "교만한, 자만하는"
      },
      {
        word: "unhealthy",
        ipa_pronunciation: "/ʌnˈhelθi/",
        korean_pronunciation: "언헬띠",
        definition_korean: "건강하지 않은, 병적인"
      },
      {
        word: "controversies",
        ipa_pronunciation: "/ˈkɑːntrəˌvɜːrsiz/",
        korean_pronunciation: "칸트러버시즈",
        definition_korean: "논쟁들"
      },
      {
        word: "quarrels",
        ipa_pronunciation: "/ˈkwɔːrəlz/",
        korean_pronunciation: "쿼럴즈",
        definition_korean: "말다툼, 언쟁"
      },
      {
        word: "envy",
        ipa_pronunciation: "/ˈenvi/",
        korean_pronunciation: "엔비",
        definition_korean: "시기, 질투"
      },
      {
        word: "strife",
        ipa_pronunciation: "/straɪf/",
        korean_pronunciation: "스트라이프",
        definition_korean: "분쟁, 다툼"
      },
      {
        word: "malicious",
        ipa_pronunciation: "/məˈlɪʃəs/",
        korean_pronunciation: "멀리셔스",
        definition_korean: "악의적인"
      },
      {
        word: "suspicions",
        ipa_pronunciation: "/səˈspɪʃnz/",
        korean_pronunciation: "서스피션즈",
        definition_korean: "의심들"
      },
      {
        word: "friction",
        ipa_pronunciation: "/ˈfrɪkʃn/",
        korean_pronunciation: "프릭션",
        definition_korean: "마찰, 불화"
      },
      {
        word: "corrupt",
        ipa_pronunciation: "/kəˈrʌpt/",
        korean_pronunciation: "커럽트",
        definition_korean: "부패한, 타락한"
      },
      {
        word: "robbed",
        ipa_pronunciation: "/rɑːbd/",
        korean_pronunciation: "라브드",
        definition_korean: "빼앗기다, 강탈당하다"
      },
      {
        word: "means",
        ipa_pronunciation: "/miːnz/",
        korean_pronunciation: "민즈",
        definition_korean: "수단, 방법"
      },
      {
        word: "financial gain",
        ipa_pronunciation: "/faɪˈnænʃl ɡeɪn/",
        korean_pronunciation: "파이낸셜 게인",
        definition_korean: "재정적 이득"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 거짓 교사들의 종합적 진단을 제공합니다. 그들의 문제는 다층적입니다: (1) 교리적 - '건전한 가르침'과 '경건한 교훈'을 거부, (2) 성격적 - 교만하고 무지함, (3) 관심사 - 논쟁과 말다툼에 병적으로 집착, (4) 결과적 - 공동체에 다섯 가지 악을 초래(시기, 분쟁, 악한 말, 악한 의심, 끊임없는 마찰), (5) 영적 - 진리를 상실, (6) 동기적 - 경건을 돈벌이 수단으로 이용. 특히 마지막 비난은 1세기 교회의 실제 문제를 반영합니다. 일부 거짓 교사들은 종교를 이용하여 재정적 이익을 추구했습니다. 바울의 분석은 교리적 오류가 단순히 지적 실수가 아니라 도덕적 타락과 공동체 파괴로 이어진다는 것을 보여줍니다."
    },
    korean_translation: {
      natural_translation: "누구든지 다르게 가르치고 우리 주 예수 그리스도의 건전한 가르침과 경건한 교훈에 동의하지 않으면, 그들은 교만하고 아무것도 이해하지 못합니다. 그들은 논쟁과 말다툼에 병적인 관심을 가지고 있어서, 그 결과 시기, 분쟁, 악한 말, 악한 의심, 부패한 마음을 가진 사람들 사이의 끊임없는 마찰이 생깁니다. 이들은 진리를 빼앗겼으며 경건을 재정적 이득의 수단으로 생각합니다.",
      translation_notes: "'think that godliness is a means to financial gain'은 종교를 이용한 재정적 착취를 날카롭게 비판하며, 복음 사역의 순수한 동기를 강조합니다."
    }
  },
  {
    reference: "1 Timothy 6:6-8",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "대조 - 참된 이득",
        original_text: "But godliness with contentment is great gain",
        korean_translation: "그러나 만족과 함께하는 경건은 큰 이득입니다",
        grammatical_explanation: "대조 접속사 'But', 'with contentment' 조건, 'great gain' 가치 평가"
      },
      {
        sequence_order: 2,
        semantic_classification: "이유 - 탄생 시 공수래",
        original_text: "For we brought nothing into the world",
        korean_translation: "우리가 세상에 아무것도 가져오지 않았고",
        grammatical_explanation: "'For' 이유 접속사, 과거 시제, 'nothing' 전면 부정"
      },
      {
        sequence_order: 3,
        semantic_classification: "이유 - 죽음 시 공수거",
        original_text: "and we can take nothing out of it",
        korean_translation: "세상에서 아무것도 가져갈 수 없기 때문입니다",
        grammatical_explanation: "병렬 구조, 'can take nothing' 불가능성, 'out of it' 죽음 암시"
      },
      {
        sequence_order: 4,
        semantic_classification: "조건 - 만족의 기준",
        original_text: "But if we have food and clothing",
        korean_translation: "그러나 우리에게 먹을 것과 입을 것이 있으면",
        grammatical_explanation: "조건절 'if', 'food and clothing' 기본 필요"
      },
      {
        sequence_order: 5,
        semantic_classification: "결과 - 만족",
        original_text: "we will be content with that",
        korean_translation: "우리는 그것으로 만족할 것입니다",
        grammatical_explanation: "미래 시제 의지, 'content with' 만족 상태"
      }
    ],
    vocabulary: [
      {
        word: "godliness",
        ipa_pronunciation: "/ˈɡɑːdlinəs/",
        korean_pronunciation: "갓리니스",
        definition_korean: "경건, 신실함"
      },
      {
        word: "contentment",
        ipa_pronunciation: "/kənˈtentmənt/",
        korean_pronunciation: "컨텐트먼트",
        definition_korean: "만족, 만족감"
      },
      {
        word: "brought",
        ipa_pronunciation: "/brɔːt/",
        korean_pronunciation: "브롯",
        definition_korean: "가져오다(과거)"
      },
      {
        word: "content",
        ipa_pronunciation: "/kənˈtent/",
        korean_pronunciation: "컨텐트",
        definition_korean: "만족하는"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "3-5절의 거짓 교사들('경건을 이득의 수단으로 생각')과 대조하여, 바울은 참된 영적 부를 정의합니다. '만족과 함께하는 경건'이 큰 이득입니다. 이것은 역설적입니다 - 물질적 이득을 추구하지 않는 것이 진정한 이득이라는 것입니다. 바울은 세 가지 논증을 제시합니다: (1) 공수래공수거 - 우리는 세상에 빈손으로 왔고 빈손으로 갑니다(욥 1:21; 전 5:15), (2) 필요의 단순성 - 진정한 필요는 음식과 옷뿐, (3) 만족의 선택 - '우리는... 만족할 것입니다'는 의지의 결정. 이는 스토아 철학의 영향도 있지만, 근본적으로는 하나님의 섭리에 대한 신뢰입니다. 바울 자신이 이러한 만족의 비결을 배웠다고 고백합니다(빌 4:11-12)."
    },
    korean_translation: {
      natural_translation: "그러나 만족과 함께하는 경건은 큰 이득입니다. 우리가 세상에 아무것도 가져오지 않았고 세상에서 아무것도 가져갈 수 없기 때문입니다. 그러나 우리에게 먹을 것과 입을 것이 있으면 우리는 그것으로 만족할 것입니다.",
      translation_notes: "'godliness with contentment'는 영적 성숙과 물질적 만족의 결합이며, 참된 부의 기준을 제시합니다."
    }
  },
  {
    reference: "1 Timothy 6:9-10",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "경고 - 부자 되려는 욕망의 위험",
        original_text: "Those who want to get rich fall into temptation and a trap",
        korean_translation: "부자가 되기를 원하는 사람들은 유혹과 올가미에 빠지며",
        grammatical_explanation: "관계절 'who want to get rich', 'fall into' 함정에 빠짐"
      },
      {
        sequence_order: 2,
        semantic_classification: "추가 위험 - 해로운 욕망들",
        original_text: "and into many foolish and harmful desires",
        korean_translation: "많은 어리석고 해로운 욕망들에 빠집니다",
        grammatical_explanation: "병렬 구조 'and into', 두 가지 형용사로 욕망 특징화"
      },
      {
        sequence_order: 3,
        semantic_classification: "최종 결과 - 파멸",
        original_text: "that plunge people into ruin and destruction",
        korean_translation: "이것들은 사람들을 파멸과 멸망으로 빠뜨립니다",
        grammatical_explanation: "관계절, 'plunge into' 격렬한 추락, 두 가지 파멸 용어"
      },
      {
        sequence_order: 4,
        semantic_classification: "원리 선언 - 돈 사랑의 악",
        original_text: "For the love of money is a root of all kinds of evil",
        korean_translation: "돈을 사랑하는 것이 온갖 악의 뿌리이기 때문입니다",
        grammatical_explanation: "'For' 이유 접속사, 'a root' 단수 부정관사, 'all kinds of evil' 포괄적 악"
      },
      {
        sequence_order: 5,
        semantic_classification: "구체적 사례 - 믿음에서 방황",
        original_text: "Some people, eager for money, have wandered from the faith",
        korean_translation: "어떤 사람들은 돈에 대한 열망으로 믿음에서 방황하여",
        grammatical_explanation: "동격 설명 'eager for money', 완료 시제 'have wandered'"
      },
      {
        sequence_order: 6,
        semantic_classification: "자초한 고통 - 많은 슬픔",
        original_text: "and pierced themselves with many griefs",
        korean_translation: "많은 슬픔으로 자기 자신을 찔렀습니다",
        grammatical_explanation: "재귀 동사 'pierced themselves', 'with many griefs' 도구이자 결과"
      }
    ],
    vocabulary: [
      {
        word: "get rich",
        ipa_pronunciation: "/ɡet rɪtʃ/",
        korean_pronunciation: "겟 리치",
        definition_korean: "부자가 되다"
      },
      {
        word: "temptation",
        ipa_pronunciation: "/tempˈteɪʃn/",
        korean_pronunciation: "템테이션",
        definition_korean: "유혹"
      },
      {
        word: "trap",
        ipa_pronunciation: "/træp/",
        korean_pronunciation: "트랩",
        definition_korean: "올가미, 함정"
      },
      {
        word: "foolish",
        ipa_pronunciation: "/ˈfuːlɪʃ/",
        korean_pronunciation: "풀리시",
        definition_korean: "어리석은"
      },
      {
        word: "harmful",
        ipa_pronunciation: "/ˈhɑːrmfl/",
        korean_pronunciation: "함플",
        definition_korean: "해로운"
      },
      {
        word: "plunge",
        ipa_pronunciation: "/plʌndʒ/",
        korean_pronunciation: "플런지",
        definition_korean: "빠뜨리다, 던지다"
      },
      {
        word: "ruin",
        ipa_pronunciation: "/ˈruːɪn/",
        korean_pronunciation: "루인",
        definition_korean: "파멸, 몰락"
      },
      {
        word: "destruction",
        ipa_pronunciation: "/dɪˈstrʌkʃn/",
        korean_pronunciation: "디스트럭션",
        definition_korean: "멸망, 파괴"
      },
      {
        word: "root",
        ipa_pronunciation: "/ruːt/",
        korean_pronunciation: "루트",
        definition_korean: "뿌리, 근원"
      },
      {
        word: "eager",
        ipa_pronunciation: "/ˈiːɡər/",
        korean_pronunciation: "이거",
        definition_korean: "열망하는, 갈망하는"
      },
      {
        word: "wandered",
        ipa_pronunciation: "/ˈwɑːndərd/",
        korean_pronunciation: "완더드",
        definition_korean: "방황하다, 헤매다"
      },
      {
        word: "pierced",
        ipa_pronunciation: "/pɪrst/",
        korean_pronunciation: "피어스트",
        definition_korean: "찌르다, 관통하다"
      },
      {
        word: "griefs",
        ipa_pronunciation: "/ɡriːfs/",
        korean_pronunciation: "그리프스",
        definition_korean: "슬픔들, 비통함"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "이것은 신약성경에서 물질주의에 대한 가장 강력한 경고 중 하나입니다. 바울은 부 자체가 아니라 '부자가 되기를 원하는 것'을 문제 삼습니다. 이 욕망은 단계적 파멸로 이어집니다: (1) 유혹과 올가미, (2) 어리석고 해로운 욕망들, (3) 파멸과 멸망. 10절의 유명한 구절 '돈 사랑이 온갖 악의 뿌리'는 종종 오해됩니다. 바울은 돈 자체가 악이라고 하지 않으며('돈이' 아니라 '돈 사랑이'), 모든 악의 유일한 원인이라고도 하지 않습니다('뿌리' 단수 부정관사). 그러나 탐욕은 광범위한 악의 주요 원인입니다. 구체적 결과는 두 가지입니다: (1) 믿음에서 방황 - 영적 타락, (2) 많은 슬픔으로 자신을 찌름 - 자초한 고통. '찌른다'는 강렬한 이미지는 탐욕의 자해적 본성을 보여줍니다."
    },
    korean_translation: {
      natural_translation: "부자가 되기를 원하는 사람들은 유혹과 올가미에 빠지며 많은 어리석고 해로운 욕망들에 빠집니다. 이것들은 사람들을 파멸과 멸망으로 빠뜨립니다. 돈을 사랑하는 것이 온갖 악의 뿌리이기 때문입니다. 어떤 사람들은 돈에 대한 열망으로 믿음에서 방황하여 많은 슬픔으로 자기 자신을 찔렀습니다.",
      translation_notes: "'the love of money is a root of all kinds of evil'은 돈 자체가 아니라 돈에 대한 사랑(탐욕)이 광범위한 악의 근원임을 강조합니다."
    }
  },
  {
    reference: "1 Timothy 6:11-12",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "호칭 - 디모데의 정체성",
        original_text: "But you, man of God",
        korean_translation: "그러나 하나님의 사람이여",
        grammatical_explanation: "대조 접속사 'But', 호격 'man of God' 신분 확인"
      },
      {
        sequence_order: 2,
        semantic_classification: "명령 - 도피",
        original_text: "flee from all this",
        korean_translation: "이 모든 것에서 도망치십시오",
        grammatical_explanation: "명령문 'flee', 'all this'는 앞의 탐욕과 악을 가리킴"
      },
      {
        sequence_order: 3,
        semantic_classification: "명령 - 추구할 덕목들",
        original_text: "and pursue righteousness, godliness, faith, love, endurance and gentleness",
        korean_translation: "그리고 의와 경건과 믿음과 사랑과 인내와 온유를 추구하십시오",
        grammatical_explanation: "병렬 명령 'pursue', 여섯 가지 덕목을 나열"
      },
      {
        sequence_order: 4,
        semantic_classification: "명령 - 믿음의 선한 싸움",
        original_text: "Fight the good fight of the faith",
        korean_translation: "믿음의 선한 싸움을 싸우십시오",
        grammatical_explanation: "명령문, 'the good fight of the faith' 영적 전투 비유"
      },
      {
        sequence_order: 5,
        semantic_classification: "명령 - 영생 붙잡기",
        original_text: "Take hold of the eternal life to which you were called",
        korean_translation: "당신이 부름받은 영생을 붙잡으십시오",
        grammatical_explanation: "명령문, 관계절 'to which you were called' 과거 소명"
      },
      {
        sequence_order: 6,
        semantic_classification: "과거 사건 - 공개 고백",
        original_text: "when you made your good confession in the presence of many witnesses",
        korean_translation: "많은 증인들 앞에서 선한 고백을 했을 때",
        grammatical_explanation: "시간절 'when', 'in the presence of' 공개성 강조"
      }
    ],
    vocabulary: [
      {
        word: "flee",
        ipa_pronunciation: "/fliː/",
        korean_pronunciation: "플리",
        definition_korean: "도망치다, 피하다"
      },
      {
        word: "pursue",
        ipa_pronunciation: "/pərˈsuː/",
        korean_pronunciation: "퍼수",
        definition_korean: "추구하다, 좇다"
      },
      {
        word: "righteousness",
        ipa_pronunciation: "/ˈraɪtʃəsnəs/",
        korean_pronunciation: "라이처스니스",
        definition_korean: "의, 정의"
      },
      {
        word: "endurance",
        ipa_pronunciation: "/ɪnˈdʊrəns/",
        korean_pronunciation: "인듀런스",
        definition_korean: "인내, 참을성"
      },
      {
        word: "gentleness",
        ipa_pronunciation: "/ˈdʒentlnəs/",
        korean_pronunciation: "젠틀니스",
        definition_korean: "온유, 부드러움"
      },
      {
        word: "fight",
        ipa_pronunciation: "/faɪt/",
        korean_pronunciation: "파이트",
        definition_korean: "싸우다, 전투하다"
      },
      {
        word: "take hold of",
        ipa_pronunciation: "/teɪk hoʊld ʌv/",
        korean_pronunciation: "테이크 홀드 오브",
        definition_korean: "붙잡다, 취하다"
      },
      {
        word: "confession",
        ipa_pronunciation: "/kənˈfeʃn/",
        korean_pronunciation: "컨페션",
        definition_korean: "고백, 신앙고백"
      },
      {
        word: "witnesses",
        ipa_pronunciation: "/ˈwɪtnəsɪz/",
        korean_pronunciation: "위트니시즈",
        definition_korean: "증인들"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "9-10절의 탐욕에 빠진 사람들과 대조하여, 바울은 디모데를 '하나님의 사람'이라고 부릅니다. 이는 구약의 선지자들을 가리키던 영예로운 칭호입니다(신 33:1; 왕상 17:18). 바울은 이중적 명령을 줍니다: (1) 소극적 - '도망치라' (탐욕과 악에서), (2) 적극적 - '추구하라' (여섯 가지 덕목). 이 여섯 덕목은 세 쌍으로 묶을 수 있습니다: 의/경건(하나님과의 관계), 믿음/사랑(신학적 덕), 인내/온유(성품). 그 다음 두 가지 추가 명령: (1) '믿음의 선한 싸움을 싸우라' (1:18 참조) - 목회 사역을 영적 전투로 봄, (2) '영생을 붙잡으라' - 이미 부름받은(과거) 구원을 현재 확고히 붙잡으라는 것. '선한 고백'은 아마도 디모데의 세례나 안수식을 가리키며, 공개적 신앙 고백의 책임을 상기시킵니다."
    },
    korean_translation: {
      natural_translation: "그러나 하나님의 사람이여, 이 모든 것에서 도망치고 의와 경건과 믿음과 사랑과 인내와 온유를 추구하십시오. 믿음의 선한 싸움을 싸우고, 많은 증인들 앞에서 선한 고백을 했을 때 당신이 부름받은 영생을 붙잡으십시오.",
      translation_notes: "'man of God'는 디모데를 구약 선지자들의 계보에 연결시키는 영예로운 칭호입니다."
    }
  },
  {
    reference: "1 Timothy 6:13-16",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "엄숙한 명령 서두 - 하나님 앞에서",
        original_text: "In the sight of God, who gives life to everything",
        korean_translation: "만물에 생명을 주시는 하나님 앞에서",
        grammatical_explanation: "'In the sight of' 하나님의 임재, 관계절 'who gives life' 창조주 속성"
      },
      {
        sequence_order: 2,
        semantic_classification: "엄숙한 명령 서두 - 그리스도 앞에서",
        original_text: "and of Christ Jesus, who while testifying before Pontius Pilate made the good confession",
        korean_translation: "본디오 빌라도 앞에서 증언하시면서 선한 고백을 하신 그리스도 예수 앞에서",
        grammatical_explanation: "병렬 구조 'and of', 시간 분사절 'while testifying', 역사적 사건 언급"
      },
      {
        sequence_order: 3,
        semantic_classification: "핵심 명령 - 명령 지키기",
        original_text: "I charge you to keep this command without spot or blame",
        korean_translation: "나는 당신에게 이 명령을 흠이나 책망 없이 지키라고 명합니다",
        grammatical_explanation: "'charge' 강한 명령, 부정사 'to keep', 두 가지 부정 조건 'without spot or blame'"
      },
      {
        sequence_order: 4,
        semantic_classification: "시간 한계 - 그리스도 재림까지",
        original_text: "until the appearing of our Lord Jesus Christ",
        korean_translation: "우리 주 예수 그리스도께서 나타나실 때까지",
        grammatical_explanation: "시간 전치사 'until', 'appearing' 재림 용어"
      },
      {
        sequence_order: 5,
        semantic_classification: "하나님의 주권 - 재림 시기 결정",
        original_text: "which God will bring about in his own time",
        korean_translation: "하나님께서 그분 자신의 때에 이루실 것입니다",
        grammatical_explanation: "관계절, 미래 시제 'will bring about', 'in his own time' 주권적 시간"
      },
      {
        sequence_order: 6,
        semantic_classification: "송영 - 하나님의 칭호들",
        original_text: "God, the blessed and only Ruler, the King of kings and Lord of lords",
        korean_translation: "복되시고 유일하신 주권자, 만왕의 왕이시며 만주의 주이신 하나님",
        grammatical_explanation: "동격 구조로 하나님의 다섯 가지 속성/칭호 나열"
      },
      {
        sequence_order: 7,
        semantic_classification: "송영 - 하나님의 속성들",
        original_text: "who alone is immortal and who lives in unapproachable light",
        korean_translation: "홀로 불멸하시며 가까이 갈 수 없는 빛 가운데 거하시는 분",
        grammatical_explanation: "두 개의 관계절, 'alone' 유일성, 'unapproachable light' 초월성"
      },
      {
        sequence_order: 8,
        semantic_classification: "송영 - 하나님의 비가시성",
        original_text: "whom no one has seen or can see",
        korean_translation: "아무도 보지 못했고 볼 수 없는 분",
        grammatical_explanation: "관계절, 'has seen' 과거, 'can see' 현재 불가능성"
      },
      {
        sequence_order: 9,
        semantic_classification: "송영 - 영광 돌림",
        original_text: "To him be honor and might forever. Amen",
        korean_translation: "그분께 영원히 존귀와 능력이 있기를 원합니다. 아멘",
        grammatical_explanation: "송영 구조, 'be' 기원, 'forever' 영원성, 'Amen' 확증"
      }
    ],
    vocabulary: [
      {
        word: "in the sight of",
        ipa_pronunciation: "/ɪn ðə saɪt ʌv/",
        korean_pronunciation: "인 더 사이트 오브",
        definition_korean: "앞에서, 눈앞에서"
      },
      {
        word: "testifying",
        ipa_pronunciation: "/ˈtestɪfaɪɪŋ/",
        korean_pronunciation: "테스티파잉",
        definition_korean: "증언하다"
      },
      {
        word: "charge",
        ipa_pronunciation: "/tʃɑːrdʒ/",
        korean_pronunciation: "차지",
        definition_korean: "명령하다, 부과하다"
      },
      {
        word: "spot",
        ipa_pronunciation: "/spɑːt/",
        korean_pronunciation: "스팟",
        definition_korean: "흠, 오점"
      },
      {
        word: "appearing",
        ipa_pronunciation: "/əˈpɪrɪŋ/",
        korean_pronunciation: "어피어링",
        definition_korean: "나타남, 출현"
      },
      {
        word: "bring about",
        ipa_pronunciation: "/brɪŋ əˈbaʊt/",
        korean_pronunciation: "브링 어바웃",
        definition_korean: "이루다, 초래하다"
      },
      {
        word: "blessed",
        ipa_pronunciation: "/blest/",
        korean_pronunciation: "블레스트",
        definition_korean: "복되신"
      },
      {
        word: "ruler",
        ipa_pronunciation: "/ˈruːlər/",
        korean_pronunciation: "룰러",
        definition_korean: "통치자, 주권자"
      },
      {
        word: "immortal",
        ipa_pronunciation: "/ɪˈmɔːrtl/",
        korean_pronunciation: "이모털",
        definition_korean: "불멸의, 죽지 않는"
      },
      {
        word: "unapproachable",
        ipa_pronunciation: "/ˌʌnəˈproʊtʃəbl/",
        korean_pronunciation: "언어프로처블",
        definition_korean: "가까이 갈 수 없는"
      },
      {
        word: "might",
        ipa_pronunciation: "/maɪt/",
        korean_pronunciation: "마이트",
        definition_korean: "능력, 권능"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 디모데에게 주는 명령을 가장 엄숙한 방식으로 마무리합니다. 그는 두 증인을 부릅니다: (1) 창조주 하나님 - '만물에 생명을 주시는 분', (2) 그리스도 예수 - 빌라도 앞에서 선한 고백을 하신 분. 그리스도의 고백은 디모데의 고백(12절)과 평행을 이루며, 순교 가능성까지 포함하는 충성의 모델입니다. 명령은 '흠이나 책망 없이 지키라'는 것으로, 도덕적 순결과 교리적 충실함을 모두 포함합니다. 시간 한계는 '그리스도의 재림까지'이며, 이는 '하나님 자신의 때'에 이루어질 것입니다 - 인간이 예측하거나 조급해할 수 없습니다. 바울은 장엄한 송영으로 마무리합니다. 하나님의 칭호와 속성을 나열하는데: 복되신, 유일하신 주권자, 만왕의 왕, 만주의 주, 홀로 불멸하신, 가까이 갈 수 없는 빛 가운데 거하시는, 아무도 볼 수 없는 분. 이러한 초월적 하나님 앞에서 디모데는 충실해야 합니다. 송영은 '아멘'으로 확증됩니다."
    },
    korean_translation: {
      natural_translation: "만물에 생명을 주시는 하나님과 본디오 빌라도 앞에서 증언하시면서 선한 고백을 하신 그리스도 예수 앞에서, 나는 당신에게 우리 주 예수 그리스도께서 나타나실 때까지 이 명령을 흠이나 책망 없이 지키라고 명합니다. 하나님께서 그분 자신의 때에 이를 이루실 것입니다. 복되시고 유일하신 주권자, 만왕의 왕이시며 만주의 주이신 하나님, 홀로 불멸하시며 가까이 갈 수 없는 빛 가운데 거하시고 아무도 보지 못했고 볼 수 없는 분께 영원히 존귀와 능력이 있기를 원합니다. 아멘.",
      translation_notes: "'who while testifying before Pontius Pilate made the good confession'은 그리스도의 고백을 디모데 고백의 모델로 제시하며, 순교까지 포함하는 충성을 암시합니다."
    }
  },
  {
    reference: "1 Timothy 6:17",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "명령 대상 - 현세의 부자들",
        original_text: "Command those who are rich in this present world",
        korean_translation: "이 현세에서 부유한 사람들에게 명령하십시오",
        grammatical_explanation: "명령문, 관계절 'who are rich', 'in this present world'로 대상 한정"
      },
      {
        sequence_order: 2,
        semantic_classification: "금지 - 교만",
        original_text: "not to be arrogant",
        korean_translation: "교만하지 말라고",
        grammatical_explanation: "부정 부정사, 'arrogant' 부자의 전형적 유혹"
      },
      {
        sequence_order: 3,
        semantic_classification: "금지 - 재물에 대한 소망",
        original_text: "nor to put their hope in wealth, which is so uncertain",
        korean_translation: "매우 불확실한 재물에 소망을 두지 말라고",
        grammatical_explanation: "병렬 부정 부정사, 관계절 'which is so uncertain'으로 재물의 본질 설명"
      },
      {
        sequence_order: 4,
        semantic_classification: "긍정 명령 - 하나님께 소망",
        original_text: "but to put their hope in God",
        korean_translation: "오히려 하나님께 소망을 두라고",
        grammatical_explanation: "대조 접속사 'but', 긍정적 대안 제시"
      },
      {
        sequence_order: 5,
        semantic_classification: "하나님의 속성 - 풍성한 공급자",
        original_text: "who richly provides us with everything for our enjoyment",
        korean_translation: "우리에게 모든 것을 풍성히 제공하시어 즐기게 하시는 분",
        grammatical_explanation: "관계절, 'richly provides' 하나님의 관대함, 'for our enjoyment' 목적"
      }
    ],
    vocabulary: [
      {
        word: "command",
        ipa_pronunciation: "/kəˈmænd/",
        korean_pronunciation: "커맨드",
        definition_korean: "명령하다"
      },
      {
        word: "arrogant",
        ipa_pronunciation: "/ˈærəɡənt/",
        korean_pronunciation: "애러건트",
        definition_korean: "교만한, 오만한"
      },
      {
        word: "wealth",
        ipa_pronunciation: "/welθ/",
        korean_pronunciation: "웰쓰",
        definition_korean: "재물, 부"
      },
      {
        word: "uncertain",
        ipa_pronunciation: "/ʌnˈsɜːrtn/",
        korean_pronunciation: "언설튼",
        definition_korean: "불확실한"
      },
      {
        word: "provides",
        ipa_pronunciation: "/prəˈvaɪdz/",
        korean_pronunciation: "프러바이즈",
        definition_korean: "제공하다"
      },
      {
        word: "enjoyment",
        ipa_pronunciation: "/ɪnˈdʒɔɪmənt/",
        korean_pronunciation: "인조이먼트",
        definition_korean: "즐김, 향유"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "9-10절에서 부자가 되려는 욕망을 경고한 후, 바울은 이미 부유한 그리스도인들에게 조언합니다. 이는 균형 잡힌 가르침입니다 - 부 자체가 악이 아니라 부에 대한 태도가 문제입니다. 부자들의 두 가지 유혹: (1) 교만 - 자신의 능력을 과신, (2) 재물 의존 - '불확실한' 것에 안전을 구함. 바울은 재물이 본질적으로 불안정함을 지적합니다(약 1:10-11). 대안은 하나님께 소망을 두는 것이며, 하나님은 '모든 것을 풍성히 제공하시어 즐기게 하시는 분'입니다. 이 표현은 중요합니다 - 하나님은 금욕주의를 요구하지 않으시며, 창조의 선물을 즐기도록 허락하십니다(딤전 4:3-4). 문제는 소유 자체가 아니라 소망의 대상입니다."
    },
    korean_translation: {
      natural_translation: "이 현세에서 부유한 사람들에게 교만하지 말고 매우 불확실한 재물에 소망을 두지 말며, 오히려 우리에게 모든 것을 풍성히 제공하시어 즐기게 하시는 하나님께 소망을 두라고 명령하십시오.",
      translation_notes: "'who richly provides us with everything for our enjoyment'는 하나님이 창조의 선물을 즐기도록 허락하신다는 긍정적 신학을 보여줍니다."
    }
  },
  {
    reference: "1 Timothy 6:18",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "명령 - 선을 행함",
        original_text: "Command them to do good",
        korean_translation: "그들에게 선을 행하고",
        grammatical_explanation: "명령문, 부정사 'to do good' 일반적 선행"
      },
      {
        sequence_order: 2,
        semantic_classification: "명령 - 선한 일에 부유함",
        original_text: "to be rich in good deeds",
        korean_translation: "선한 일에 부유하며",
        grammatical_explanation: "병렬 부정사, 'rich in good deeds' 역설적 표현"
      },
      {
        sequence_order: 3,
        semantic_classification: "명령 - 관대함",
        original_text: "and to be generous",
        korean_translation: "관대하고",
        grammatical_explanation: "병렬 부정사"
      },
      {
        sequence_order: 4,
        semantic_classification: "명령 - 나눔의 의지",
        original_text: "and willing to share",
        korean_translation: "기꺼이 나누라고 명령하십시오",
        grammatical_explanation: "병렬 형용사구, 'willing to share' 자발적 태도"
      }
    ],
    vocabulary: [
      {
        word: "good deeds",
        ipa_pronunciation: "/ɡʊd diːdz/",
        korean_pronunciation: "굿 디즈",
        definition_korean: "선한 일들"
      },
      {
        word: "generous",
        ipa_pronunciation: "/ˈdʒenərəs/",
        korean_pronunciation: "제너러스",
        definition_korean: "관대한, 후한"
      },
      {
        word: "willing",
        ipa_pronunciation: "/ˈwɪlɪŋ/",
        korean_pronunciation: "윌링",
        definition_korean: "기꺼이 하는"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "17절의 부정적 명령(교만하지 말고, 재물에 의지하지 말라)에 이어 긍정적 명령이 제시됩니다. 바울은 네 가지 적극적 행위를 요구합니다: (1) 선을 행함 - 일반적 선행, (2) 선한 일에 부유함 - 물질적 부를 영적 부로 전환, (3) 관대함 - 후하게 주는 태도, (4) 기꺼이 나눔 - 자발적 나눔의 의지. '선한 일에 부유하라'는 표현은 역설적이며 아름답습니다 - 물질적 부자는 선행으로 영적 부자가 되어야 합니다. 이는 예수님의 '하늘에 보물을 쌓으라'는 가르침과 일치합니다(마 6:19-20). 부는 축적의 대상이 아니라 나눔의 도구입니다."
    },
    korean_translation: {
      natural_translation: "그들에게 선을 행하고 선한 일에 부유하며 관대하고 기꺼이 나누라고 명령하십시오.",
      translation_notes: "'be rich in good deeds'는 물질적 부를 영적 부(선행)로 전환하라는 역설적 명령입니다."
    }
  },
  {
    reference: "1 Timothy 6:19",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "방법 - 이러한 방식으로",
        original_text: "In this way they will lay up treasure for themselves",
        korean_translation: "이렇게 하여 그들은 자신을 위해 보물을 쌓을 것입니다",
        grammatical_explanation: "'In this way' 방법 지시, 미래 시제 'will lay up', 'for themselves' 유익 대상"
      },
      {
        sequence_order: 2,
        semantic_classification: "비유 - 견고한 기초",
        original_text: "as a firm foundation for the coming age",
        korean_translation: "다가올 시대를 위한 견고한 기초로서",
        grammatical_explanation: "'as' 비유 구조, 'firm foundation' 안정성, 'coming age' 종말론적 미래"
      },
      {
        sequence_order: 3,
        semantic_classification: "목적 - 참된 생명 붙잡기",
        original_text: "so that they may take hold of the life that is truly life",
        korean_translation: "그리하여 참으로 생명인 생명을 붙잡을 수 있습니다",
        grammatical_explanation: "목적절 'so that', 'may take hold of' 가능성, 'life that is truly life' 강조 표현"
      }
    ],
    vocabulary: [
      {
        word: "lay up",
        ipa_pronunciation: "/leɪ ʌp/",
        korean_pronunciation: "레이 업",
        definition_korean: "쌓다, 저축하다"
      },
      {
        word: "treasure",
        ipa_pronunciation: "/ˈtreʒər/",
        korean_pronunciation: "트레저",
        definition_korean: "보물"
      },
      {
        word: "firm",
        ipa_pronunciation: "/fɜːrm/",
        korean_pronunciation: "펌",
        definition_korean: "견고한, 확고한"
      },
      {
        word: "foundation",
        ipa_pronunciation: "/faʊnˈdeɪʃn/",
        korean_pronunciation: "파운데이션",
        definition_korean: "기초, 토대"
      },
      {
        word: "coming age",
        ipa_pronunciation: "/ˈkʌmɪŋ eɪdʒ/",
        korean_pronunciation: "커밍 에이지",
        definition_korean: "다가올 시대"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "18절의 명령들(선행, 관대함, 나눔)의 결과와 목적이 설명됩니다. 이러한 선행은 '보물을 쌓는' 것이지만, 17절의 불확실한 지상 재물이 아니라 '다가올 시대'를 위한 것입니다. 이는 예수님의 '하늘에 보물을 쌓으라'는 가르침의 직접적 반영입니다(마 6:19-21; 눅 12:33). '견고한 기초'는 불확실한 재물(17절)과 대조되며, 영원한 안정성을 제공합니다. 최종 목적은 '참으로 생명인 생명을 붙잡는 것'입니다. 이 표현은 역설적이며 심오합니다 - 육체적 생존이 아닌 진정한 생명, 즉 영생과 하나님과의 친밀한 관계를 의미합니다. 역설적으로, 현세의 부를 놓아주는 것이 참된 생명을 붙잡는 길입니다."
    },
    korean_translation: {
      natural_translation: "이렇게 하여 그들은 다가올 시대를 위한 견고한 기초로서 자신을 위해 보물을 쌓고, 그리하여 참으로 생명인 생명을 붙잡을 수 있습니다.",
      translation_notes: "'the life that is truly life'는 단순한 육체적 생존이 아닌 하나님과의 영원한 관계인 참된 생명을 강조하는 표현입니다."
    }
  },
  {
    reference: "1 Timothy 6:20",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "호칭 - 디모데",
        original_text: "Timothy",
        korean_translation: "디모데여",
        grammatical_explanation: "호격, 개인적이고 직접적인 호소"
      },
      {
        sequence_order: 2,
        semantic_classification: "명령 - 맡은 것 지키기",
        original_text: "guard what has been entrusted to your care",
        korean_translation: "당신에게 맡겨진 것을 지키십시오",
        grammatical_explanation: "명령문 'guard', 수동태 'has been entrusted', 'to your care' 책임 강조"
      },
      {
        sequence_order: 3,
        semantic_classification: "명령 - 거짓에서 돌아서기",
        original_text: "Turn away from godless chatter",
        korean_translation: "경건하지 않은 헛된 말에서 돌아서고",
        grammatical_explanation: "명령문 'Turn away from', 'godless chatter' 내용 없는 말"
      },
      {
        sequence_order: 4,
        semantic_classification: "명령 - 거짓 지식 거부",
        original_text: "and the opposing ideas of what is falsely called knowledge",
        korean_translation: "거짓되게 지식이라 불리는 것의 반대 주장들에서 돌아서십시오",
        grammatical_explanation: "병렬 구조, 'opposing ideas' 대립적 논쟁, 'falsely called' 허위 주장"
      }
    ],
    vocabulary: [
      {
        word: "guard",
        ipa_pronunciation: "/ɡɑːrd/",
        korean_pronunciation: "가드",
        definition_korean: "지키다, 보호하다"
      },
      {
        word: "entrusted",
        ipa_pronunciation: "/ɪnˈtrʌstɪd/",
        korean_pronunciation: "인트러스티드",
        definition_korean: "맡기다, 위탁하다"
      },
      {
        word: "godless",
        ipa_pronunciation: "/ˈɡɑːdləs/",
        korean_pronunciation: "갓리스",
        definition_korean: "경건하지 않은, 신을 모르는"
      },
      {
        word: "chatter",
        ipa_pronunciation: "/ˈtʃætər/",
        korean_pronunciation: "채터",
        definition_korean: "헛된 말, 잡담"
      },
      {
        word: "opposing",
        ipa_pronunciation: "/əˈpoʊzɪŋ/",
        korean_pronunciation: "어포징",
        definition_korean: "반대하는, 대립하는"
      },
      {
        word: "falsely",
        ipa_pronunciation: "/ˈfɔːlsli/",
        korean_pronunciation: "폴슬리",
        definition_korean: "거짓되게"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "편지의 결론에서 바울은 디모데를 이름으로 직접 부르며 개인적이고 긴급한 호소를 합니다. '맡겨진 것'은 복음의 진리, 건전한 교리, 사도적 가르침을 가리킵니다(딤후 1:14). 디모데는 이것의 관리자이며 보호자입니다. 두 가지를 피해야 합니다: (1) 경건하지 않은 헛된 말 - 내용 없는 종교적 수사학, (2) '거짓되게 지식이라 불리는 것의 반대 주장들' - 이것은 초기 영지주의를 가리킬 가능성이 높습니다. 영지주의자들은 비밀 지식(gnosis)을 주장했지만, 바울은 이를 '거짓 지식'으로 폭로합니다. 이러한 거짓 가르침들은 복음의 단순함과 진리를 왜곡하며, 디모데는 이로부터 돌아서야 합니다."
    },
    korean_translation: {
      natural_translation: "디모데여, 당신에게 맡겨진 것을 지키고 경건하지 않은 헛된 말과 거짓되게 지식이라 불리는 것의 반대 주장들에서 돌아서십시오.",
      translation_notes: "'what is falsely called knowledge'는 초기 영지주의의 거짓 지식 주장을 가리킬 가능성이 높습니다."
    }
  },
  {
    reference: "1 Timothy 6:21",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "과거 사례 - 거짓 지식 고백자들",
        original_text: "which some have professed",
        korean_translation: "어떤 이들이 이것을 고백하여",
        grammatical_explanation: "관계절, 완료 시제 'have professed', 20절과 연결"
      },
      {
        sequence_order: 2,
        semantic_classification: "결과 - 믿음에서 이탈",
        original_text: "and in so doing have departed from the faith",
        korean_translation: "그렇게 함으로써 믿음에서 떠났습니다",
        grammatical_explanation: "'in so doing' 방법, 완료 시제 'have departed', 'from the faith' 신앙 포기"
      },
      {
        sequence_order: 3,
        semantic_classification: "축복 기원 - 은혜",
        original_text: "Grace be with you all",
        korean_translation: "은혜가 여러분 모두와 함께하기를",
        grammatical_explanation: "기원 구조, 'you all' 복수로 개인(디모데)을 넘어 교회 공동체로 확장"
      }
    ],
    vocabulary: [
      {
        word: "professed",
        ipa_pronunciation: "/prəˈfest/",
        korean_pronunciation: "프러페스트",
        definition_korean: "고백하다, 공언하다"
      },
      {
        word: "departed",
        ipa_pronunciation: "/dɪˈpɑːrtɪd/",
        korean_pronunciation: "디파티드",
        definition_korean: "떠나다, 이탈하다"
      },
      {
        word: "grace",
        ipa_pronunciation: "/ɡreɪs/",
        korean_pronunciation: "그레이스",
        definition_korean: "은혜"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 20절의 경고가 이론이 아니라 실제 사례에 기반함을 확인합니다. 일부는 거짓 지식을 '고백'(공개적으로 주장)하여 '믿음에서 떠났습니다.' 이는 교리적 오류가 영적 이탈로 이어질 수 있음을 보여줍니다. 편지는 간단하지만 의미 있는 축복으로 끝납니다: '은혜가 여러분 모두와 함께하기를.' 주목할 점은 '여러분 모두'(복수)라는 표현입니다. 편지가 디모데 개인에게 쓰였지만, 바울은 이것이 에베소 교회 전체에서 읽힐 것을 예상합니다. 은혜는 편지의 시작(1:2)과 끝을 감싸며, 모든 그리스도인의 삶과 사역의 기초입니다. 디모데가 맡은 사역을 감당하는 것도, 교회가 거짓 교리를 물리치는 것도 궁극적으로 하나님의 은혜에 의해서만 가능합니다."
    },
    korean_translation: {
      natural_translation: "어떤 이들이 이것을 고백하여 그렇게 함으로써 믿음에서 떠났습니다. 은혜가 여러분 모두와 함께하기를.",
      translation_notes: "'Grace be with you all'의 '여러분 모두'(복수)는 개인 서신이 교회 공동체 전체를 위한 것임을 보여줍니다."
    }
  }
]

async function main() {
  console.log('1 Timothy Chapter 5-6 분석 데이터를 저장합니다...')
  console.log(`총 ${analysesData.length}개 구절 저장 시작\n`)

  for (const data of analysesData) {
    await saveAnalysisToDb(data)
  }

  console.log('\n모든 구절 저장 완료!')
}

main()
