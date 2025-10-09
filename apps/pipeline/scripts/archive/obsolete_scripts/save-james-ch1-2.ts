import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

const analyses: AnalysisData[] = [
  {
    reference: 'James 1:1',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '발신인 소개',
        original_text: 'James, a servant of God and of the Lord Jesus Christ',
        korean_translation: '하나님과 주 예수 그리스도의 종인 야고보',
        grammatical_explanation: '동격 표현으로 저자의 정체성과 역할을 나타냄. servant는 노예를 의미하는 doulos의 번역으로 완전한 헌신을 표현'
      },
      {
        sequence_order: 2,
        semantic_classification: '수신인 지정',
        original_text: 'To the twelve tribes scattered among the nations',
        korean_translation: '여러 나라에 흩어진 열두 지파에게',
        grammatical_explanation: 'twelve tribes는 유대 디아스포라 공동체를 지칭하는 관용적 표현'
      },
      {
        sequence_order: 3,
        semantic_classification: '인사말',
        original_text: 'Greetings',
        korean_translation: '문안하노라',
        grammatical_explanation: '그리스어 서신 형식의 전형적인 인사 표현 chairein'
      }
    ],
    vocabulary: [
      {
        word: 'servant',
        ipa_pronunciation: '/ˈsɜːrvənt/',
        korean_pronunciation: '서번트',
        part_of_speech: '명사',
        definition_korean: '종, 하인',
        usage_note: '그리스어 doulos(δοῦλος)를 번역한 것으로, 자발적 헌신과 복종을 의미'
      },
      {
        word: 'scattered',
        ipa_pronunciation: '/ˈskætərd/',
        korean_pronunciation: '스캐터드',
        part_of_speech: '형용사',
        definition_korean: '흩어진',
        usage_note: '디아스포라(diaspora)를 표현하는 용어로 유대인의 전 세계 분산을 지칭'
      },
      {
        word: 'tribes',
        ipa_pronunciation: '/traɪbz/',
        korean_pronunciation: '트라입스',
        part_of_speech: '명사',
        definition_korean: '지파들',
        usage_note: '이스라엘 열두 지파를 가리키며, 여기서는 전체 유대 기독교 공동체를 상징'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '야고보서는 예수의 형제 야고보가 주후 45-50년경 예루살렘에서 디아스포라 유대인 기독교인들에게 보낸 서신으로 추정됩니다. 저자는 자신을 사도나 예수의 형제로 소개하지 않고 겸손하게 "종"으로만 표현합니다. "열두 지파"는 문자적으로 유대인을 가리키지만, 신학적으로는 새 이스라엘인 교회 전체를 의미할 수 있습니다. 이 서신은 신약 중 가장 유대적 색채가 강하며, 지혜 문학의 전통을 따릅니다.'
    },
    korean_translation: {
      natural_translation: '하나님과 주 예수 그리스도의 종 야고보는 여러 나라에 흩어져 사는 열두 지파에게 문안합니다.',
      translation_notes: '간결한 서신 서두로, 저자의 겸손과 수신자의 광범위한 지역적 분포를 동시에 보여줌'
    },
    special_explanation: {
      explanation_type: '역사적 배경',
      content: '야고보는 예수의 동생으로(마가복음 6:3), 부활 후 믿음을 가지게 되었으며(고린도전서 15:7) 예루살렘 교회의 지도자가 되었습니다(사도행전 15장). 이 서신은 신약에서 가장 이른 시기에 쓰인 문서 중 하나로, 초대 교회의 실천적 신앙을 잘 보여줍니다.'
    }
  },
  {
    reference: 'James 1:2',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '명령: 태도의 전환',
        original_text: 'Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds',
        korean_translation: '내 형제자매들이여, 여러 가지 시험을 만날 때 순전한 기쁨으로 여기십시오',
        grammatical_explanation: 'Consider it은 imperative(명령형)로 능동적인 관점의 전환을 요구. pure joy는 조건 없는 완전한 기쁨을 의미. whenever절은 시련이 반복적이고 불가피함을 나타냄'
      }
    ],
    vocabulary: [
      {
        word: 'consider',
        ipa_pronunciation: '/kənˈsɪdər/',
        korean_pronunciation: '컨시더',
        part_of_speech: '동사',
        definition_korean: '여기다, 간주하다',
        usage_note: '그리스어 hēgēsasthe로, 의도적이고 의지적인 사고 작용을 의미'
      },
      {
        word: 'pure',
        ipa_pronunciation: '/pjʊər/',
        korean_pronunciation: '퓨어',
        part_of_speech: '형용사',
        definition_korean: '순전한, 완전한',
        usage_note: '그리스어 pasan으로 전부, 모든 것을 의미하여 조건 없는 완전한 기쁨을 강조'
      },
      {
        word: 'trials',
        ipa_pronunciation: '/ˈtraɪəlz/',
        korean_pronunciation: '트라이얼즈',
        part_of_speech: '명사',
        definition_korean: '시련, 시험',
        usage_note: '그리스어 peirasmos로 신앙을 시험하고 단련하는 역경을 의미'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '이 구절은 야고보서의 핵심 주제인 시련 속 신앙을 도입합니다. 1세기 디아스포라 유대 기독교인들은 사회적 차별, 경제적 박탈, 종교적 박해를 경험했습니다. 야고보는 이런 시련을 회피할 것이 아니라 오히려 기쁨으로 받아들이라는 역설적 권면을 합니다. 이는 구약의 지혜 전통(잠언 3:11-12)과 예수의 산상수훈(마태복음 5:10-12)을 반영합니다.'
    },
    korean_translation: {
      natural_translation: '나의 형제자매 여러분, 각종 시험을 만날 때에 그것을 온전한 기쁨으로 여기십시오.',
      translation_notes: '역설적이지만 의도적인 태도 전환을 촉구하는 명령'
    },
    special_explanation: {
      explanation_type: '신학적 역설',
      content: '시련을 기쁨으로 여기라는 것은 masochism이 아니라, 시련이 가져올 영적 성장과 믿음의 정련을 미리 바라보는 믿음의 관점입니다. 이는 로마서 5:3-5의 바울 신학과 일맥상통합니다.'
    }
  },
  {
    reference: 'James 1:3',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '이유 설명',
        original_text: 'because you know that the testing of your faith produces perseverance',
        korean_translation: '너희 믿음의 시험이 인내를 만들어내는 것을 너희가 알기 때문이니',
        grammatical_explanation: 'because절은 1:2의 명령에 대한 근거를 제시. testing은 dokimion(검증)으로 금속 정련 과정의 은유. produces는 현재형으로 필연적이고 확실한 결과를 나타냄'
      }
    ],
    vocabulary: [
      {
        word: 'testing',
        ipa_pronunciation: '/ˈtɛstɪŋ/',
        korean_pronunciation: '테스팅',
        part_of_speech: '명사',
        definition_korean: '시험, 검증',
        usage_note: '그리스어 dokimion으로 금속의 순도를 시험하는 것처럼 믿음의 진정성을 검증하는 과정'
      },
      {
        word: 'perseverance',
        ipa_pronunciation: '/ˌpɜːrsəˈvɪrəns/',
        korean_pronunciation: '퍼서비어런스',
        part_of_speech: '명사',
        definition_korean: '인내, 견딤',
        usage_note: '그리스어 hypomonē로 단순한 수동적 참음이 아닌 능동적이고 승리하는 견딤을 의미'
      },
      {
        word: 'produces',
        ipa_pronunciation: '/prəˈduːsɪz/',
        korean_pronunciation: '프러듀시즈',
        part_of_speech: '동사',
        definition_korean: '만들어내다, 생산하다',
        usage_note: '그리스어 katergazetai로 완전히 이루어내다, 성취하다는 의미의 강한 동사'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '야고보는 시련을 긍정적으로 보아야 하는 논리적 근거를 제시합니다. 믿음의 시험(testing)은 금속 정련의 은유로, 불순물을 제거하고 순도를 높이는 과정입니다. 이를 통해 hypomonē(인내)가 형성되는데, 이는 신약에서 매우 중요한 덕목으로 단순한 소극적 참음이 아니라 어려움을 이겨내며 성장하는 적극적 능력입니다. 이 개념은 로마서 5:3-4에서도 동일하게 나타납니다.'
    },
    korean_translation: {
      natural_translation: '이는 여러분의 믿음이 시험을 받으면 인내가 생긴다는 것을 여러분이 알기 때문입니다.',
      translation_notes: '시련과 영적 성장의 필연적 연결을 논리적으로 설명'
    }
  },
  {
    reference: 'James 1:4',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '명령: 과정의 완성',
        original_text: 'Let perseverance finish its work',
        korean_translation: '인내가 그 일을 완전히 이루게 하십시오',
        grammatical_explanation: 'Let은 허용의 imperative로 인내의 과정을 방해하지 말라는 의미. finish its work는 완전한 성취를 의미'
      },
      {
        sequence_order: 2,
        semantic_classification: '목적: 성숙한 완전함',
        original_text: 'so that you may be mature and complete, not lacking anything',
        korean_translation: '그리하여 너희가 온전하고 완전하여 조금도 부족함이 없게 하려 함이라',
        grammatical_explanation: 'so that절은 목적을 나타냄. mature and complete은 동의적 병행으로 영적 완전함을 강조. not lacking anything은 부정적 표현으로 긍정을 강화'
      }
    ],
    vocabulary: [
      {
        word: 'finish',
        ipa_pronunciation: '/ˈfɪnɪʃ/',
        korean_pronunciation: '피니쉬',
        part_of_speech: '동사',
        definition_korean: '완성하다, 끝마치다',
        usage_note: '그리스어 teleiōsis로 목표까지 완전히 이루어내는 것을 의미'
      },
      {
        word: 'mature',
        ipa_pronunciation: '/məˈtʊər/',
        korean_pronunciation: '머츄어',
        part_of_speech: '형용사',
        definition_korean: '성숙한, 온전한',
        usage_note: '그리스어 teleioi로 목적을 달성한, 완전히 발달한 상태'
      },
      {
        word: 'complete',
        ipa_pronunciation: '/kəmˈpliːt/',
        korean_pronunciation: '컴플리트',
        part_of_speech: '형용사',
        definition_korean: '완전한, 온전한',
        usage_note: '그리스어 holoklēroi로 모든 부분이 완전한, 통합된 상태'
      },
      {
        word: 'lacking',
        ipa_pronunciation: '/ˈlækɪŋ/',
        korean_pronunciation: '래킹',
        part_of_speech: '동사',
        definition_korean: '부족하다',
        usage_note: '그리스어 leipō로 결핍되거나 모자라는 것'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '야고보는 시련-인내-성숙의 영적 발전 과정을 완성합니다. "온전하고 완전하여(mature and complete)"는 히브리적 완전 개념을 반영하는 동의적 병행 표현으로, 도덕적 완벽이 아닌 목적을 이룬 성숙함을 의미합니다. "조금도 부족함이 없게"는 부정적 표현으로 긍정을 더 강조하는 수사적 기법입니다. 이는 신약 전체의 주제인 그리스도인의 성화 과정(sanctification)을 압축적으로 표현한 것입니다.'
    },
    korean_translation: {
      natural_translation: '인내를 온전히 이루게 하십시오. 그리하여 여러분이 온전하고 구비하여 조금도 부족함이 없게 하려는 것입니다.',
      translation_notes: '영적 성장의 완전한 과정과 최종 목표를 제시'
    },
    special_explanation: {
      explanation_type: '어휘 분석',
      content: 'mature(teleios)와 complete(holoklēros)는 미묘한 차이가 있습니다. teleios는 목적을 달성한 성숙함을, holoklēros는 모든 부분이 온전한 통합성을 강조합니다. 두 단어의 조합은 영적 성숙의 양적, 질적 완전함을 모두 표현합니다.'
    }
  },
  {
    reference: 'James 1:5',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '조건절: 지혜 부족',
        original_text: 'If any of you lacks wisdom',
        korean_translation: '너희 중에 누구든지 지혜가 부족하거든',
        grammatical_explanation: 'If절은 조건절로 실제 상황을 가정. lacks는 현재형으로 지속적 결핍 상태. wisdom은 실천적 분별력을 의미'
      },
      {
        sequence_order: 2,
        semantic_classification: '명령: 하나님께 구함',
        original_text: 'you should ask God, who gives generously to all without finding fault',
        korean_translation: '모든 사람에게 후히 주시고 꾸짖지 아니하시는 하나님께 구하십시오',
        grammatical_explanation: 'should ask는 명령형 의미의 권고. 관계절로 하나님의 성품을 설명: gives generously(후하게 주심)와 without finding fault(꾸짖지 않음)'
      },
      {
        sequence_order: 3,
        semantic_classification: '약속: 응답',
        original_text: 'and it will be given to you',
        korean_translation: '그리하면 너희에게 주실 것입니다',
        grammatical_explanation: 'will be given은 신적 수동태(divine passive)로 하나님이 주체. 미래형은 확실한 약속'
      }
    ],
    vocabulary: [
      {
        word: 'wisdom',
        ipa_pronunciation: '/ˈwɪzdəm/',
        korean_pronunciation: '위즈덤',
        part_of_speech: '명사',
        definition_korean: '지혜',
        usage_note: '그리스어 sophia로 단순한 지식이 아닌 실천적 분별력과 하나님의 뜻을 아는 것'
      },
      {
        word: 'generously',
        ipa_pronunciation: '/ˈdʒɛnərəsli/',
        korean_pronunciation: '제너러슬리',
        part_of_speech: '부사',
        definition_korean: '후하게, 너그럽게',
        usage_note: '그리스어 haplōs로 단순하게, 순수하게, 조건 없이 주는 것을 의미'
      },
      {
        word: 'finding fault',
        ipa_pronunciation: '/ˈfaɪndɪŋ fɔːlt/',
        korean_pronunciation: '파인딩 폴트',
        part_of_speech: '동명사구',
        definition_korean: '꾸짖다, 비난하다',
        usage_note: '그리스어 oneidizō로 모욕하거나 책망하는 것. 하나님은 기도하는 자를 꾸짖지 않으심'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '1:2-4의 시련 주제에서 자연스럽게 지혜의 필요성으로 전환됩니다. 시련을 잘 견디고 성숙에 이르기 위해서는 지혜가 필요하기 때문입니다. 야고보의 지혜 개념은 구약 지혜 문학(잠언, 전도서)을 배경으로 하며, 단순한 지적 능력이 아닌 하나님을 경외하며 그분의 뜻대로 사는 실천적 분별력을 의미합니다. 하나님은 후하게(generously) 주시고 꾸짖지 않으신다는 표현은 기도를 장려하는 독특한 야고보적 표현으로, 하나님의 관대한 성품을 강조합니다.'
    },
    korean_translation: {
      natural_translation: '여러분 가운데 누구든지 지혜가 부족하면, 모든 사람에게 아낌없이 주시고 나무라지 않으시는 하나님께 구하십시오. 그러면 주실 것입니다.',
      translation_notes: '조건-명령-약속의 구조로 기도에 대한 확신을 제공'
    },
    special_explanation: {
      explanation_type: '신학적 개념',
      content: '야고보의 지혜는 바울의 믿음과 상호보완적입니다. 지혜는 시련 속에서 하나님의 뜻을 분별하고 올바르게 반응하는 능력으로, 단순한 지식이 아닌 삶으로 실천되는 경건입니다. 이는 잠언 9:10의 "여호와를 경외하는 것이 지혜의 근본"을 반영합니다.'
    }
  },
  {
    reference: 'James 1:6',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '조건: 믿음의 태도',
        original_text: 'But when you ask, you must believe and not doubt',
        korean_translation: '그러나 구할 때에는 의심하지 말고 믿음으로 구하십시오',
        grammatical_explanation: 'must believe는 강한 의무. and not doubt는 부정 명령으로 의심 배제'
      },
      {
        sequence_order: 2,
        semantic_classification: '비유: 의심하는 자',
        original_text: 'because the one who doubts is like a wave of the sea, blown and tossed by the wind',
        korean_translation: '의심하는 사람은 바람에 불려 요동하는 바다 물결 같기 때문입니다',
        grammatical_explanation: 'like a wave는 직유법. blown and tossed는 수동태 분사로 외부 힘에 의한 불안정을 강조'
      }
    ],
    vocabulary: [
      {
        word: 'doubt',
        ipa_pronunciation: '/daʊt/',
        korean_pronunciation: '다우트',
        part_of_speech: '동사',
        definition_korean: '의심하다',
        usage_note: '그리스어 diakrinō로 마음이 둘로 나뉘어 판단이 흔들리는 상태'
      },
      {
        word: 'wave',
        ipa_pronunciation: '/weɪv/',
        korean_pronunciation: '웨이브',
        part_of_speech: '명사',
        definition_korean: '파도, 물결',
        usage_note: '안정성 없이 계속 움직이는 것의 비유'
      },
      {
        word: 'tossed',
        ipa_pronunciation: '/tɔːst/',
        korean_pronunciation: '토스트',
        part_of_speech: '과거분사',
        definition_korean: '내던져진, 요동하는',
        usage_note: '외부 힘에 의해 통제 불능 상태로 흔들리는 것'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '야고보는 기도의 조건으로 의심 없는 믿음을 제시합니다. 바다 물결의 비유는 구약(이사야 57:20)과 유대 문학에서 불안정과 불신앙의 상징으로 사용되었습니다. 의심은 단순한 지적 회의가 아니라 하나님의 신실하심에 대한 불신을 의미하며, 이는 기도 응답을 방해합니다.'
    },
    korean_translation: {
      natural_translation: '다만 믿음으로 구하고 조금도 의심하지 마십시오. 의심하는 사람은 바람에 밀려 요동하는 바다 물결 같습니다.',
      translation_notes: '믿음과 의심의 대조, 물결 비유로 의심의 불안정성 강조'
    }
  },
  {
    reference: 'James 1:7',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '결과: 응답 불가',
        original_text: 'That person should not expect to receive anything from the Lord',
        korean_translation: '그런 사람은 주께로부터 무엇이든 받으리라고 생각하지 말아야 합니다',
        grammatical_explanation: 'should not expect는 부정 명령의 강화. anything은 포괄적 부정'
      }
    ],
    vocabulary: [
      {
        word: 'expect',
        ipa_pronunciation: '/ɪkˈspɛkt/',
        korean_pronunciation: '익스펙트',
        part_of_speech: '동사',
        definition_korean: '기대하다',
        usage_note: '받을 것이라는 확신이나 추측'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '의심하는 자에 대한 경고입니다. 하나님께 구하면서도 의심한다면 응답을 기대할 수 없습니다. 이는 하나님의 무능 때문이 아니라 구하는 자의 불신 때문입니다.'
    },
    korean_translation: {
      natural_translation: '그런 사람은 주님께 무엇을 받으리라고 생각하지 마십시오.',
      translation_notes: '의심의 결과에 대한 단호한 경고'
    }
  },
  {
    reference: 'James 1:8',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '특징 묘사',
        original_text: 'Such a person is double-minded and unstable in all they do',
        korean_translation: '그런 사람은 두 마음을 품어 모든 일에 안정되지 못합니다',
        grammatical_explanation: 'double-minded는 야고보의 독특한 용어. unstable in all they do는 전 생활 영역의 불안정'
      }
    ],
    vocabulary: [
      {
        word: 'double-minded',
        ipa_pronunciation: '/ˈdʌbəl ˈmaɪndɪd/',
        korean_pronunciation: '더블 마인디드',
        part_of_speech: '형용사',
        definition_korean: '두 마음을 품은',
        usage_note: '그리스어 dipsychos로 야고보서에서만 나타나는 단어. 하나님과 세상 사이에서 갈등하는 상태'
      },
      {
        word: 'unstable',
        ipa_pronunciation: '/ʌnˈsteɪbəl/',
        korean_pronunciation: '언스테이블',
        part_of_speech: '형용사',
        definition_korean: '불안정한',
        usage_note: '확고한 기반이 없이 흔들리는 상태'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '"두 마음"(double-minded, dipsychos)은 야고보가 만든 신조어로, 하나님과 세상 사이에서 양다리를 걸친 분열된 마음을 묘사합니다(4:8 참조). 이런 내적 분열은 삶의 모든 영역에 불안정을 가져옵니다.'
    },
    korean_translation: {
      natural_translation: '그는 두 마음을 품고 모든 일에 안정되지 못한 사람입니다.',
      translation_notes: '의심의 근본 원인인 내적 분열과 그 결과'
    },
    special_explanation: {
      explanation_type: '어휘 연구',
      content: 'dipsychos(두 마음)는 신약에서 야고보서에만 나타나는 독특한 용어로, dis(둘) + psychē(혼)의 합성어입니다. 이는 하나님께 온전히 헌신하지 못하고 세상과 타협하려는 분열된 충성을 묘사합니다.'
    }
  },
  {
    reference: 'James 1:9',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '명령: 가난한 자의 자랑',
        original_text: 'Believers in humble circumstances ought to take pride in their high position',
        korean_translation: '낮은 처지에 있는 믿는 사람은 자기의 높은 지위를 자랑해야 합니다',
        grammatical_explanation: 'ought to는 도덕적 의무. high position은 영적 지위로 물질적 가난과 대조'
      }
    ],
    vocabulary: [
      {
        word: 'humble',
        ipa_pronunciation: '/ˈhʌmbəl/',
        korean_pronunciation: '험블',
        part_of_speech: '형용사',
        definition_korean: '낮은, 겸손한',
        usage_note: '사회경제적으로 낮은 지위를 의미'
      },
      {
        word: 'take pride',
        ipa_pronunciation: '/teɪk praɪd/',
        korean_pronunciation: '테이크 프라이드',
        part_of_speech: '동사구',
        definition_korean: '자랑하다',
        usage_note: '그리스어 kauchastho로 기쁨과 자부심을 가지는 것'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '야고보는 사회경제적 역설을 제시합니다. 가난한 믿는 자는 하나님 나라에서의 높은 지위를 자랑해야 합니다. 이는 예수의 팔복(마태복음 5:3)과 마리아의 찬가(누가복음 1:52-53)를 반영합니다.'
    },
    korean_translation: {
      natural_translation: '가난한 형제는 자기가 높아진 것을 자랑하십시오.',
      translation_notes: '세상적 가난과 영적 부요의 역설'
    }
  },
  {
    reference: 'James 1:10',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '명령: 부자의 겸손',
        original_text: 'But the rich should take pride in their humiliation',
        korean_translation: '그러나 부자는 자기의 낮아짐을 자랑해야 합니다',
        grammatical_explanation: 'But은 1:9와의 대조. humiliation은 부의 무가치함을 깨달은 영적 겸손'
      },
      {
        sequence_order: 2,
        semantic_classification: '이유: 부의 무상함',
        original_text: 'since they will pass away like a wild flower',
        korean_translation: '왜냐하면 그들은 들풀처럼 지나갈 것이기 때문입니다',
        grammatical_explanation: 'since절은 이유. wild flower 비유는 구약(이사야 40:6-8) 인용'
      }
    ],
    vocabulary: [
      {
        word: 'humiliation',
        ipa_pronunciation: '/hjuːˌmɪliˈeɪʃən/',
        korean_pronunciation: '휴밀리에이션',
        part_of_speech: '명사',
        definition_korean: '낮아짐, 겸손',
        usage_note: '그리스어 tapeinōsis로 자발적 또는 강제적 낮아짐'
      },
      {
        word: 'wild flower',
        ipa_pronunciation: '/waɪld ˈflaʊər/',
        korean_pronunciation: '와일드 플라워',
        part_of_speech: '명사구',
        definition_korean: '들풀, 야생화',
        usage_note: '순식간에 피었다 지는 무상함의 상징'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '부자에 대한 역설적 권면입니다. 부는 일시적이므로 부자는 자신의 영적 가난을 깨닫고 겸손해져야 합니다. 들풀 비유는 이사야 40:6-8을 인용하여 인간과 부의 덧없음을 강조합니다.'
    },
    korean_translation: {
      natural_translation: '부한 사람은 자기가 낮아진 것을 자랑하십시오. 그는 들풀처럼 사라질 것이기 때문입니다.',
      translation_notes: '부의 무상함과 영적 겸손의 필요성'
    }
  }
]

async function main() {
  console.log(`James 1-2장 분석 데이터 저장 시작 (총 ${analyses.length}개 구절)...\n`)

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

  console.log(`\n=== 저장 완료 ===`)
  console.log(`성공: ${successCount}개`)
  console.log(`실패: ${failCount}개`)
}

main()
