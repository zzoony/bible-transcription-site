import { saveAnalysisToDb, type AnalysisData } from './save-analysis-to-db'

const analyses: AnalysisData[] = [
  // 1 Timothy 4:1
  {
    reference: '1 Timothy 4:1',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '예언적 선언',
        original_text: 'The Spirit clearly says that in later times some will abandon the faith',
        korean_translation: '성령께서 말씀하시기를 후일에 어떤 사람들이 믿음에서 떠나리라',
        grammatical_explanation: '현재형 "says"는 성령의 지속적인 계시를 나타냄. "in later times"는 종말론적 시기를 가리킴. "abandon"은 의도적 이탈을 의미하는 강한 동사'
      },
      {
        sequence_order: 2,
        semantic_classification: '배교의 원인',
        original_text: 'and follow deceiving spirits and things taught by demons',
        korean_translation: '미혹하게 하는 영들과 귀신들의 가르침을 따르리라',
        grammatical_explanation: '병렬 구조 "deceiving spirits and things taught by demons"로 영적 타락의 두 출처를 나타냄. 분사 "deceiving"과 "taught"가 각각 수식'
      }
    ],
    vocabulary: [
      {
        word: 'Spirit',
        ipa_pronunciation: '/ˈspɪrɪt/',
        korean_pronunciation: '스피릿',
        part_of_speech: '명사',
        definition_korean: '성령, 하나님의 영',
        usage_note: '정관사 "The"와 대문자 사용으로 성령을 특정함'
      },
      {
        word: 'clearly',
        ipa_pronunciation: '/ˈklɪrli/',
        korean_pronunciation: '클리얼리',
        part_of_speech: '부사',
        definition_korean: '분명히, 명확하게',
        usage_note: '성령의 메시지가 애매하지 않음을 강조'
      },
      {
        word: 'abandon',
        ipa_pronunciation: '/əˈbændən/',
        korean_pronunciation: '어밴던',
        part_of_speech: '동사',
        definition_korean: '버리다, 포기하다',
        usage_note: '단순한 이탈이 아닌 의도적 포기를 의미하는 강한 표현'
      },
      {
        word: 'deceiving',
        ipa_pronunciation: '/dɪˈsiːvɪŋ/',
        korean_pronunciation: '디시빙',
        part_of_speech: '형용사/현재분사',
        definition_korean: '속이는, 미혹하는',
        usage_note: '능동적으로 사람들을 잘못된 길로 인도하는 의도를 나타냄'
      },
      {
        word: 'demons',
        ipa_pronunciation: '/ˈdiːmənz/',
        korean_pronunciation: '디먼즈',
        part_of_speech: '명사',
        definition_korean: '귀신들, 악령들',
        usage_note: '복수형으로 다수의 영적 존재를 가리킴'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 디모데에게 성령께서 미리 계시하신 종말론적 경고를 전합니다. 이는 1세기 교회가 직면한 현실이면서 동시에 종말까지 계속될 영적 전쟁의 패턴을 보여줍니다. "후일"(later times)은 메시아의 초림과 재림 사이의 전체 교회 시대를 가리킵니다. 배교의 본질은 단순한 도덕적 실패가 아니라 거짓 가르침에 영향받아 믿음의 기초 자체를 포기하는 것입니다. "미혹하게 하는 영들"과 "귀신들의 가르침"은 거짓 교리의 배후에 있는 영적 실재를 드러냅니다. 이는 에베소 교회가 직면한 거짓 교사들의 문제가 단순히 인간적 차원이 아님을 보여줍니다.',
      cross_references: ['2 Timothy 3:1-5', '2 Thessalonians 2:3', '1 John 4:1-3', 'Jude 1:3-4']
    },
    korean_translation: {
      natural_translation: '성령께서 분명히 말씀하십니다. 후일에 어떤 사람들이 믿음에서 떠나 미혹하게 하는 영들과 귀신들의 가르침을 따를 것입니다.',
      translation_notes: '"clearly says"는 성령의 계시가 모호하지 않음을 강조. "abandon the faith"는 단순한 이탈이 아닌 의도적 포기의 강한 의미를 담음'
    },
    special_explanation: {
      explanation_type: '신학적 배경',
      content: '이 예언은 초대교회 시대부터 재림까지 계속될 영적 전쟁의 패턴을 제시합니다. 거짓 가르침의 배후에는 영적 세력이 있으며, 이는 단순한 신학적 오류가 아니라 귀신들의 계획적 미혹입니다. 에베소 교회가 직면한 구체적 이단은 금욕주의와 율법주의 형태였지만, 이 원리는 모든 시대의 거짓 가르침에 적용됩니다.',
      examples: [
        '영지주의: 물질을 악으로 보는 이원론적 거짓 가르침',
        '율법주의: 은혜의 복음을 행위로 대체하려는 시도',
        '현대 신비주의: 성경적 진리를 개인적 경험으로 대체'
      ]
    }
  },

  // 1 Timothy 4:2
  {
    reference: '1 Timothy 4:2',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '거짓 교사의 특징',
        original_text: 'Such teachings come through hypocritical liars',
        korean_translation: '이런 가르침들은 위선적인 거짓말쟁이들을 통해 옵니다',
        grammatical_explanation: '"come through"는 전달 경로를 나타냄. "hypocritical liars"는 이중적 형용사 구조로 거짓 교사의 본질을 강조'
      },
      {
        sequence_order: 2,
        semantic_classification: '도덕적 무감각 상태',
        original_text: 'whose consciences have been seared as with a hot iron',
        korean_translation: '그들의 양심은 뜨거운 인두로 지진 것 같습니다',
        grammatical_explanation: '완료 수동태 "have been seared"는 지속적 상태를 나타냄. "as with a hot iron"은 비유적 비교로 양심의 완전한 마비를 묘사'
      }
    ],
    vocabulary: [
      {
        word: 'hypocritical',
        ipa_pronunciation: '/ˌhɪpəˈkrɪtɪkəl/',
        korean_pronunciation: '히퍼크리티컬',
        part_of_speech: '형용사',
        definition_korean: '위선적인, 겉과 속이 다른',
        usage_note: '신앙적 외양과 실제 삶의 불일치를 나타냄'
      },
      {
        word: 'liars',
        ipa_pronunciation: '/ˈlaɪərz/',
        korean_pronunciation: '라이어즈',
        part_of_speech: '명사',
        definition_korean: '거짓말쟁이들',
        usage_note: '의도적으로 진리를 왜곡하는 자들'
      },
      {
        word: 'consciences',
        ipa_pronunciation: '/ˈkɒnʃənsɪz/',
        korean_pronunciation: '콘션시즈',
        part_of_speech: '명사',
        definition_korean: '양심',
        usage_note: '도덕적 판단 능력, 옳고 그름을 분별하는 내적 기능'
      },
      {
        word: 'seared',
        ipa_pronunciation: '/sɪərd/',
        korean_pronunciation: '시얼드',
        part_of_speech: '동사/과거분사',
        definition_korean: '지지다, 태우다',
        usage_note: '뜨거운 것으로 표면을 태워 감각을 없애는 것. 비유적으로 양심의 무감각화'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 거짓 교사들의 영적 상태를 두 가지로 묘사합니다. 첫째, 그들은 "위선적인 거짓말쟁이들"입니다. 이는 그들이 외적으로는 경건한 척하지만 실제로는 진리를 왜곡하는 자들임을 의미합니다. 둘째, 그들의 양심은 "뜨거운 인두로 지진 것" 같습니다. 고대에 노예나 가축에게 낙인을 찍던 관습을 배경으로, 양심이 완전히 마비되어 도덕적 감각이 없는 상태를 묘사합니다. 이는 반복적인 죄와 진리 거부로 인한 점진적 무감각화의 결과입니다. 이런 상태의 교사들은 자신들이 가르치는 거짓을 진리로 믿을 수도 있으며, 그래서 더욱 위험합니다.',
      cross_references: ['Ephesians 4:17-19', 'Romans 1:28', 'Titus 1:15-16', '2 Timothy 3:8']
    },
    korean_translation: {
      natural_translation: '이런 가르침들은 위선적인 거짓말쟁이들을 통해 옵니다. 그들의 양심은 뜨거운 인두로 지진 것처럼 무감각해졌습니다.',
      translation_notes: '"seared"는 단순한 무감각이 아니라 완전히 기능을 상실한 상태를 나타내는 강력한 이미지'
    },
    special_explanation: {
      explanation_type: '문화적 배경',
      content: '뜨거운 인두로 지진다는 표현은 고대 노예 제도의 낙인 관습에서 유래했습니다. 노예나 가축에게 소유주의 표식을 새길 때 사용하던 방법으로, 그 부위는 완전히 감각을 잃게 됩니다. 바울은 이 이미지로 거짓 교사들의 양심이 반복적인 거짓말과 진리 거부로 인해 완전히 기능을 상실한 상태를 묘사합니다. 이는 일시적 실수가 아니라 지속적 선택의 결과로 나타난 영구적 도덕적 무감각입니다.',
      examples: [
        '1차: 진리를 알면서도 일부러 왜곡 → 양심의 가책',
        '2차: 반복적 거짓으로 양심의 경고 무시',
        '3차: 양심이 완전히 마비되어 거짓을 진리로 믿음'
      ]
    }
  },

  // 1 Timothy 4:3
  {
    reference: '1 Timothy 4:3',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '거짓 교사들의 금지 명령',
        original_text: 'They forbid people to marry and order them to abstain from certain foods',
        korean_translation: '그들은 사람들에게 결혼을 금하고 어떤 음식을 멀리하라고 명령합니다',
        grammatical_explanation: '병렬 동사 "forbid"와 "order"로 두 가지 금욕주의적 가르침을 제시. "to marry"와 "to abstain"은 부정사로 금지 내용을 나타냄'
      },
      {
        sequence_order: 2,
        semantic_classification: '창조의 목적',
        original_text: 'which God created to be received with thanksgiving',
        korean_translation: '하나님께서 감사함으로 받도록 창조하신 것인데',
        grammatical_explanation: '관계절 "which"는 "certain foods"를 선행사로 함. "to be received"는 목적을 나타내는 수동 부정사'
      },
      {
        sequence_order: 3,
        semantic_classification: '수령 자격자',
        original_text: 'by those who believe and who know the truth',
        korean_translation: '믿고 진리를 아는 자들이',
        grammatical_explanation: '병렬 관계절 "who believe"와 "who know"로 자격 요건을 명시. 두 요소가 결합되어 완전한 신자를 묘사'
      }
    ],
    vocabulary: [
      {
        word: 'forbid',
        ipa_pronunciation: '/fərˈbɪd/',
        korean_pronunciation: '퍼비드',
        part_of_speech: '동사',
        definition_korean: '금하다, 금지하다',
        usage_note: '권위를 가지고 명령하듯 막는 것'
      },
      {
        word: 'abstain',
        ipa_pronunciation: '/əbˈsteɪn/',
        korean_pronunciation: '업스테인',
        part_of_speech: '동사',
        definition_korean: '멀리하다, 삼가다',
        usage_note: '의도적으로 피하거나 자제하는 것'
      },
      {
        word: 'thanksgiving',
        ipa_pronunciation: '/ˌθæŋksˈɡɪvɪŋ/',
        korean_pronunciation: '땡크스기빙',
        part_of_speech: '명사',
        definition_korean: '감사, 감사함',
        usage_note: '하나님의 선물을 인정하고 감사하는 태도'
      },
      {
        word: 'truth',
        ipa_pronunciation: '/truːθ/',
        korean_pronunciation: '트루쓰',
        part_of_speech: '명사',
        definition_korean: '진리, 진실',
        usage_note: '정관사 "the"와 함께 사용되어 복음의 진리를 가리킴'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 에베소의 거짓 교사들이 가르치는 구체적인 금욕주의를 비판합니다. 결혼 금지와 음식 제한은 초대교회 시대의 영지주의적 이단과 유대주의적 율법주의에서 공통적으로 나타난 가르침입니다. 영지주의는 물질을 본질적으로 악하다고 보아 결혼과 특정 음식을 금했고, 유대주의는 구약의 음식법을 기독교인에게 강요했습니다. 바울은 이에 대해 창조 신학으로 반박합니다. 하나님께서 창조하신 것들(결혼, 음식)은 본질적으로 선하며, 감사함으로 받도록 의도되었습니다. "믿고 진리를 아는 자들"은 창조의 선함과 은혜의 복음을 이해한 사람들로, 율법주의나 금욕주의에 속박되지 않습니다.',
      cross_references: ['Genesis 1:31', '1 Corinthians 10:30-31', 'Colossians 2:16-23', 'Romans 14:1-6']
    },
    korean_translation: {
      natural_translation: '그들은 사람들에게 결혼을 금하고 어떤 음식을 멀리하라고 명령합니다. 그러나 이것들은 하나님께서 감사함으로 받도록 창조하신 것입니다. 믿고 진리를 아는 자들을 위해서입니다.',
      translation_notes: '"which God created"는 음식뿐 아니라 결혼도 포함하는 넓은 의미. 창조의 선함과 은혜의 원리를 강조'
    },
    special_explanation: {
      explanation_type: '신학적 논쟁',
      content: '이 구절은 초대교회의 두 주요 이단 흐름과 관련됩니다. 영지주의는 물질과 영을 이원론적으로 분리하여 물질적인 것(몸, 결혼, 음식)을 악하다고 보았습니다. 반면 유대주의는 구약의 의식법(음식법 등)을 기독교인에게 강요했습니다. 바울은 창조 신학으로 이 둘을 모두 반박합니다. 하나님의 창조는 "심히 좋았고"(창 1:31), 그리스도 안에서 모든 것이 깨끗해졌습니다(막 7:19). 중요한 것은 외적 규칙이 아니라 감사하는 마음으로 하나님의 선물을 받는 것입니다.',
      examples: [
        '영지주의: 몸은 악하므로 결혼 금지 → 반박: 결혼은 하나님의 선한 창조',
        '유대주의: 돼지고기 금지 등 율법 준수 → 반박: 그리스도 안에서 모든 음식이 깨끗함',
        '극단적 금욕주의: 영적 성숙을 위해 모든 쾌락 거부 → 반박: 감사함으로 받는 것이 하나님의 뜻'
      ]
    }
  },

  // 1 Timothy 4:4
  {
    reference: '1 Timothy 4:4',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '창조의 선함 선언',
        original_text: 'For everything God created is good',
        korean_translation: '하나님께서 창조하신 모든 것이 선하기 때문입니다',
        grammatical_explanation: '"For"는 앞 구절의 근거를 제시. "everything God created"는 명사절로 주어. 현재형 "is"는 불변의 진리를 나타냄'
      },
      {
        sequence_order: 2,
        semantic_classification: '거부 금지와 조건',
        original_text: 'and nothing is to be rejected if it is received with thanksgiving',
        korean_translation: '감사함으로 받으면 버릴 것이 하나도 없습니다',
        grammatical_explanation: '"nothing is to be rejected"는 수동태로 금지 명령. "if"절은 조건절로 올바른 수령 태도를 제시'
      }
    ],
    vocabulary: [
      {
        word: 'created',
        ipa_pronunciation: '/kriˈeɪtɪd/',
        korean_pronunciation: '크리에이티드',
        part_of_speech: '동사/과거분사',
        definition_korean: '창조하다, 만들다',
        usage_note: '무에서 유를 만드는 하나님의 독특한 행위'
      },
      {
        word: 'good',
        ipa_pronunciation: '/ɡʊd/',
        korean_pronunciation: '굿',
        part_of_speech: '형용사',
        definition_korean: '선한, 좋은',
        usage_note: '도덕적, 기능적으로 완전한 상태. 창세기 1장의 "좋았더라"와 연결'
      },
      {
        word: 'rejected',
        ipa_pronunciation: '/rɪˈdʒektɪd/',
        korean_pronunciation: '리젝티드',
        part_of_speech: '동사/과거분사',
        definition_korean: '거부하다, 버리다',
        usage_note: '부정하거나 받아들이기를 거절하는 것'
      },
      {
        word: 'received',
        ipa_pronunciation: '/rɪˈsiːvd/',
        korean_pronunciation: '리시브드',
        part_of_speech: '동사/과거분사',
        definition_korean: '받다, 수령하다',
        usage_note: '선물로 감사히 받아들이는 것'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 창세기 1장의 창조 이야기로 돌아가 신학적 근거를 제시합니다. "하나님께서 창조하신 모든 것이 선하다"는 선언은 창세기 1:31 "하나님이 지으신 그 모든 것을 보시니 보시기에 심히 좋았더라"를 반영합니다. 이는 물질을 본질적으로 악하다고 보는 영지주의를 정면으로 반박합니다. "감사함으로 받으면"이라는 조건은 중요합니다. 이는 피조물 자체가 아니라 그것을 주신 창조주를 인정하고 감사하는 태도를 의미합니다. 따라서 음식이나 결혼 같은 하나님의 선물을 거부하는 것은 창조주를 거부하는 것과 같습니다. 동시에 이 원리는 무절제한 탐욕을 정당화하지 않습니다. "감사함으로"라는 조건은 하나님 중심적 태도를 전제하기 때문입니다.',
      cross_references: ['Genesis 1:31', 'Acts 10:15', 'Romans 14:6', '1 Corinthians 10:30-31']
    },
    korean_translation: {
      natural_translation: '하나님께서 창조하신 모든 것이 선하므로, 감사함으로 받으면 버릴 것이 하나도 없습니다.',
      translation_notes: '"is good"과 "is to be rejected"의 현재형은 보편적 진리를 나타냄. 감사가 핵심 조건'
    },
    special_explanation: {
      explanation_type: '신학적 원리',
      content: '이 구절은 기독교 세계관의 핵심인 창조 신학을 제시합니다. 물질 세계는 타락으로 왜곡되었지만 본질적으로 악하지 않습니다. 하나님께서 창조하신 것은 모두 선하며, 그리스도의 구속으로 회복됩니다. 따라서 기독교인은 세상을 도피하는 것이 아니라 하나님의 선물로 감사히 받으며 그분의 영광을 위해 사용합니다. "감사함으로 받는다"는 것은 세 가지를 포함합니다: 1) 창조주를 인정함, 2) 선물로 겸손히 받음, 3) 하나님의 영광을 위해 사용함. 이는 금욕주의와 탐욕을 모두 배격하는 균형 잡힌 태도입니다.',
      examples: [
        '음식: 우상 제물도 감사함으로 먹으면 깨끗함 (고전 10:30)',
        '결혼: 하나님의 선한 선물이지만 감사와 순결함으로 (히 13:4)',
        '물질: 청지기로서 감사히 관리하며 나눔 (딤전 6:17-18)'
      ]
    }
  },

  // 1 Timothy 4:5
  {
    reference: '1 Timothy 4:5',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '거룩하게 하는 수단',
        original_text: 'because it is consecrated by the word of God and prayer',
        korean_translation: '하나님의 말씀과 기도로 거룩하게 되기 때문입니다',
        grammatical_explanation: '"because"는 이유를 제시. 수동태 "is consecrated"는 거룩하게 만들어지는 과정. "by"는 수단을 나타내며 두 요소를 병렬로 제시'
      }
    ],
    vocabulary: [
      {
        word: 'consecrated',
        ipa_pronunciation: '/ˈkɒnsɪkreɪtɪd/',
        korean_pronunciation: '콘시크레이티드',
        part_of_speech: '동사/과거분사',
        definition_korean: '거룩하게 하다, 성별하다',
        usage_note: '일반적 용도에서 하나님께 드리는 거룩한 용도로 구별하는 것'
      },
      {
        word: 'word',
        ipa_pronunciation: '/wɜːrd/',
        korean_pronunciation: '워드',
        part_of_speech: '명사',
        definition_korean: '말씀, 단어',
        usage_note: '정관사 "the"와 함께 하나님의 계시된 말씀을 가리킴'
      },
      {
        word: 'prayer',
        ipa_pronunciation: '/preər/',
        korean_pronunciation: '프레어',
        part_of_speech: '명사',
        definition_korean: '기도',
        usage_note: '하나님과의 대화, 특히 감사와 간구'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 하나님의 창조물이 어떻게 거룩하게 되는지 설명합니다. "하나님의 말씀"은 창조 선언(창 1장)과 신약의 자유 선언(막 7:19, 행 10:15)을 포함합니다. 하나님께서 "좋다"고 선언하신 것은 본질적으로 선합니다. "기도"는 감사 기도를 의미하며, 이는 유대인의 식사 전 축복 기도 관습을 반영합니다. 이 두 요소의 결합이 중요합니다. 말씀은 객관적 진리(하나님께서 이것을 선하다 하심)를 제공하고, 기도는 주관적 반응(우리가 감사함으로 받음)을 나타냅니다. 이는 단순히 음식에만 적용되는 것이 아니라 하나님의 모든 선물(결혼, 재산, 능력 등)에 적용되는 원리입니다. 거룩함은 피조물의 본질이 변하는 것이 아니라, 하나님께 드려지고 그분의 영광을 위해 사용될 때 구별되는 것입니다.',
      cross_references: ['1 Samuel 9:13', 'Matthew 14:19', 'Luke 24:30', '1 Corinthians 10:30']
    },
    korean_translation: {
      natural_translation: '하나님의 말씀과 기도로 거룩하게 되기 때문입니다.',
      translation_notes: '"consecrated"는 성별되다, 거룩하게 되다의 의미. 말씀과 기도가 수단'
    },
    special_explanation: {
      explanation_type: '실천적 적용',
      content: '이 구절은 식사 전 기도의 신학적 근거를 제공하지만, 그 의미는 단순한 형식적 기도를 넘어섭니다. "하나님의 말씀"은 창조가 선하다는 진리를 우리에게 상기시키고, "기도"는 우리가 그것을 창조주로부터의 선물로 인정하고 감사하게 만듭니다. 이 두 요소가 결합될 때, 평범한 식사는 하나님과의 교제의 기회가 되고, 물질적 필요의 충족은 영적 은혜를 경험하는 통로가 됩니다. 따라서 감사 기도는 단순한 종교적 의식이 아니라, 하나님 중심적 세계관을 실천하는 구체적 방법입니다.',
      examples: [
        '식사 기도: 음식의 근원이 하나님임을 인정하고 감사',
        '결혼 서약: 하나님께서 짝 지어주심을 선포하고 기도로 헌신',
        '물질 관리: 청지기 의식으로 하나님의 뜻을 구하며 사용'
      ]
    }
  },

  // 1 Timothy 4:6
  {
    reference: '1 Timothy 4:6',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '조건과 결과',
        original_text: 'If you point these things out to the brothers and sisters, you will be a good minister of Christ Jesus',
        korean_translation: '네가 이것들을 형제자매들에게 제시하면, 그리스도 예수의 훌륭한 일꾼이 될 것입니다',
        grammatical_explanation: '조건절 "If you point out"과 주절 "you will be"의 구조. "good minister"는 보어로 디모데의 정체성을 정의'
      },
      {
        sequence_order: 2,
        semantic_classification: '영적 양육의 근거',
        original_text: 'nourished on the truths of the faith and of the good teaching that you have followed',
        korean_translation: '믿음의 진리와 네가 따라온 훌륭한 가르침으로 양육받은 자로서',
        korean_translation: '믿음의 진리와 네가 따라온 훌륭한 가르침으로 양육받은 자로서',
        grammatical_explanation: '분사구문 "nourished on"은 디모데의 상태를 설명. "the truths of the faith and of the good teaching"은 병렬 구조로 양육의 내용을 제시'
      }
    ],
    vocabulary: [
      {
        word: 'point out',
        ipa_pronunciation: '/pɔɪnt aʊt/',
        korean_pronunciation: '포인트 아웃',
        part_of_speech: '동사구',
        definition_korean: '지적하다, 제시하다',
        usage_note: '주의를 환기시키거나 가르치는 것'
      },
      {
        word: 'minister',
        ipa_pronunciation: '/ˈmɪnɪstər/',
        korean_pronunciation: '미니스터',
        part_of_speech: '명사',
        definition_korean: '일꾼, 섬기는 자',
        usage_note: '원어 "diakonos"는 종, 봉사자를 의미하며 직분보다 섬김을 강조'
      },
      {
        word: 'nourished',
        ipa_pronunciation: '/ˈnʌrɪʃt/',
        korean_pronunciation: '너리쉬트',
        part_of_speech: '동사/과거분사',
        definition_korean: '양육하다, 영양을 공급하다',
        usage_note: '지속적으로 먹이를 주어 성장시키는 것'
      },
      {
        word: 'truths',
        ipa_pronunciation: '/truːθs/',
        korean_pronunciation: '트루쓰스',
        part_of_speech: '명사',
        definition_korean: '진리들',
        usage_note: '복수형으로 믿음의 여러 교리적 진리를 가리킴'
      },
      {
        word: 'followed',
        ipa_pronunciation: '/ˈfɒləʊd/',
        korean_pronunciation: '팔로우드',
        part_of_speech: '동사/과거분사',
        definition_korean: '따르다',
        usage_note: '지속적으로 순종하며 본받는 것'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 디모데에게 목회자로서의 역할을 정의합니다. "이것들을 제시하다"는 앞에서 설명한 창조의 선함과 거짓 가르침의 위험을 회중에게 가르치는 것을 의미합니다. "그리스도 예수의 훌륭한 일꾼"이라는 표현에서 "일꾼"(minister/diakonos)은 높은 지위가 아니라 겸손한 섬김을 강조합니다. 목회자는 주인이 아니라 그리스도를 섬기고 교회를 섬기는 종입니다. "양육받은"이라는 분사는 디모데가 지속적으로 진리로 자신을 먹이고 있음을 나타냅니다. 이는 중요한 원리입니다: 다른 사람을 가르치려면 먼저 자신이 계속 배우고 성장해야 합니다. "믿음의 진리"는 복음의 객관적 내용이고, "훌륭한 가르침"은 바울과 다른 신실한 교사들로부터 받은 사도적 전통입니다.',
      cross_references: ['2 Timothy 2:2', '1 Timothy 1:3-4', 'Titus 2:1', 'Hebrews 5:12-14']
    },
    korean_translation: {
      natural_translation: '네가 이것들을 형제자매들에게 제시하면, 그리스도 예수의 훌륭한 일꾼이 될 것입니다. 너는 믿음의 진리와 네가 따라온 훌륭한 가르침으로 양육받은 사람입니다.',
      translation_notes: '"minister"는 높은 직분이 아닌 섬기는 종의 의미. "nourished"는 계속 양육받고 있는 현재진행형 상태'
    },
    special_explanation: {
      explanation_type: '목회 신학',
      content: '이 구절은 건강한 목회 사역의 두 핵심 요소를 제시합니다. 첫째, 가르침의 내용입니다. 목회자는 성경적 진리를 분명히 제시해야 하며, 특히 거짓 가르침과 대조되는 건전한 교리를 가르쳐야 합니다. 둘째, 가르치는 자의 자격입니다. 효과적 가르침은 지속적 개인 성장에서 나옵니다. 디모데는 "양육받은"(현재완료 분사) 자로서, 과거에 받은 가르침에 머물지 않고 계속 진리로 자신을 먹이고 있습니다. 이는 현대 목회자에게도 중요한 원리입니다: 설교 준비는 단순한 정보 전달이 아니라 목회자 자신의 영적 양육의 연장입니다.',
      examples: [
        '내용 측면: 창조 신학, 은혜의 복음, 거짓 가르침 경계',
        '태도 측면: 종의 겸손, 지속적 학습, 본을 보임',
        '방법 측면: 분명한 제시, 실제 적용, 교회 상황에 맞는 교육'
      ]
    }
  },

  // 1 Timothy 4:7
  {
    reference: '1 Timothy 4:7',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '거짓 가르침 거부',
        original_text: 'Have nothing to do with godless myths and old wives\' tales',
        korean_translation: '경건하지 않은 신화와 허탄한 이야기들은 상대하지 마십시오',
        grammatical_explanation: '명령문 "Have nothing to do with"는 강한 거부를 나타냄. "godless myths and old wives\' tales"는 병렬 명사구로 거짓 가르침의 특징을 묘사'
      },
      {
        sequence_order: 2,
        semantic_classification: '영적 훈련 명령',
        original_text: 'rather, train yourself to be godly',
        korean_translation: '오히려 경건에 이르도록 자신을 훈련하십시오',
        grammatical_explanation: '"rather"는 대조를 나타냄. "train yourself"는 재귀 동사로 자기 훈련을 강조. "to be godly"는 목적을 나타내는 부정사'
      }
    ],
    vocabulary: [
      {
        word: 'godless',
        ipa_pronunciation: '/ˈɡɒdləs/',
        korean_pronunciation: '갓리스',
        part_of_speech: '형용사',
        definition_korean: '경건하지 않은, 하나님 없는',
        usage_note: '하나님을 거부하거나 무시하는 것'
      },
      {
        word: 'myths',
        ipa_pronunciation: '/mɪθs/',
        korean_pronunciation: '미쓰스',
        part_of_speech: '명사',
        definition_korean: '신화, 꾸며낸 이야기',
        usage_note: '역사적 근거 없는 상상의 이야기나 거짓 전승'
      },
      {
        word: 'old wives\' tales',
        ipa_pronunciation: '/əʊld waɪvz teɪlz/',
        korean_pronunciation: '올드 와이브즈 테일즈',
        part_of_speech: '관용구',
        definition_korean: '허탄한 이야기, 미신',
        usage_note: '근거 없이 전해지는 미신적 이야기들'
      },
      {
        word: 'train',
        ipa_pronunciation: '/treɪn/',
        korean_pronunciation: '트레인',
        part_of_speech: '동사',
        definition_korean: '훈련하다, 연습하다',
        usage_note: '운동선수처럼 규율 있게 지속적으로 연습하는 것'
      },
      {
        word: 'godly',
        ipa_pronunciation: '/ˈɡɒdli/',
        korean_pronunciation: '갓리',
        part_of_speech: '형용사',
        definition_korean: '경건한, 하나님을 닮은',
        usage_note: '하나님의 성품을 반영하는 삶의 태도'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 디모데에게 두 가지 대조적 태도를 명령합니다. 먼저 "경건하지 않은 신화와 허탄한 이야기들"을 거부하라고 합니다. "신화"(myths)는 1:4에서 언급된 것과 같은 유대적 전설이나 족보에 대한 추측을 가리키며, "허탄한 이야기"(old wives\' tales)는 문자적으로 "늙은 여자들의 이야기"로 근거 없는 미신이나 전설을 경멸적으로 표현한 것입니다. 이런 가르침들의 공통점은 "경건하지 않다"(godless)는 것입니다. 즉, 하나님을 영화롭게 하거나 사람을 성화시키지 못합니다. 대신 디모데는 "경건에 이르도록 자신을 훈련"해야 합니다. "훈련하다"(train)는 그리스어 "gymnazo"에서 온 말로, 체육관(gymnasium)에서 운동선수가 훈련하는 것을 연상시킵니다. 이는 영적 성장이 수동적 지식 습득이 아니라 능동적이고 규율 있는 훈련임을 강조합니다.',
      cross_references: ['1 Timothy 1:4', 'Titus 1:14', '2 Timothy 2:23', 'Hebrews 5:14', '1 Corinthians 9:24-27']
    },
    korean_translation: {
      natural_translation: '경건하지 않은 신화와 허탄한 이야기들은 상대하지 마십시오. 오히려 경건에 이르도록 자신을 훈련하십시오.',
      translation_notes: '"Have nothing to do with"는 완전히 피하라는 강한 명령. "train yourself"는 운동선수의 자기 훈련을 연상시키는 능동적 표현'
    },
    special_explanation: {
      explanation_type: '영적 훈련',
      content: '바울은 영적 성장을 운동 훈련에 비유합니다. 운동선수가 목표를 향해 규율 있게 자신을 훈련하듯이, 신자는 경건을 향해 의도적으로 자신을 훈련해야 합니다. 이 훈련은 여러 요소를 포함합니다: 1) 목표 설정 (경건한 성품), 2) 규율 있는 실천 (기도, 말씀 묵상, 금식 등), 3) 꾸준한 반복 (습관 형성), 4) 방해 요소 제거 (거짓 가르침 거부). 중요한 것은 "자신을 훈련하라"는 재귀 동사입니다. 다른 사람이 대신해 줄 수 없으며, 디모데 자신이 책임지고 훈련해야 합니다. 이는 목회자뿐 아니라 모든 신자에게 적용되는 원리입니다.',
      examples: [
        '부정적 측면: 거짓 가르침, 무익한 논쟁, 세속적 가치관 거부',
        '긍정적 측면: 기도, 말씀 묵상, 경건 서적 읽기, 금식',
        '공동체 측면: 예배 참석, 소그룹 교제, 섬김, 전도'
      ]
    }
  },

  // 1 Timothy 4:8
  {
    reference: '1 Timothy 4:8',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '육체 훈련의 제한적 가치',
        original_text: 'For physical training is of some value',
        korean_translation: '육체의 훈련은 약간의 유익이 있습니다',
        grammatical_explanation: '"For"는 앞 구절의 근거 제시. "is of some value"는 제한적 가치를 나타내는 표현'
      },
      {
        sequence_order: 2,
        semantic_classification: '경건의 포괄적 가치',
        original_text: 'but godliness has value for all things',
        korean_translation: '그러나 경건은 모든 것에 유익합니다',
        grammatical_explanation: '"but"은 강한 대조. "for all things"는 경건의 무제한적 가치를 강조'
      },
      {
        sequence_order: 3,
        semantic_classification: '경건의 시간적 범위',
        original_text: 'holding promise for both the present life and the life to come',
        korean_translation: '현재의 삶과 다가올 삶 모두에 약속을 가지고 있기 때문입니다',
        grammatical_explanation: '분사구문 "holding promise"는 이유 설명. "both A and B" 구조로 두 시간 차원을 병렬로 제시'
      }
    ],
    vocabulary: [
      {
        word: 'physical',
        ipa_pronunciation: '/ˈfɪzɪkəl/',
        korean_pronunciation: '피지컬',
        part_of_speech: '형용사',
        definition_korean: '육체적인, 신체의',
        usage_note: '몸과 관련된, 물질적 차원의'
      },
      {
        word: 'training',
        ipa_pronunciation: '/ˈtreɪnɪŋ/',
        korean_pronunciation: '트레이닝',
        part_of_speech: '명사',
        definition_korean: '훈련, 연습',
        usage_note: '7절의 "train"과 같은 어근으로 체계적 훈련을 의미'
      },
      {
        word: 'value',
        ipa_pronunciation: '/ˈvæljuː/',
        korean_pronunciation: '밸류',
        part_of_speech: '명사',
        definition_korean: '가치, 유익',
        usage_note: '실제적 도움이나 이득'
      },
      {
        word: 'godliness',
        ipa_pronunciation: '/ˈɡɒdlinəs/',
        korean_pronunciation: '갓리니스',
        part_of_speech: '명사',
        definition_korean: '경건, 신앙심',
        usage_note: '하나님을 닮아가는 성품과 삶의 방식'
      },
      {
        word: 'promise',
        ipa_pronunciation: '/ˈprɒmɪs/',
        korean_pronunciation: '프라미스',
        part_of_speech: '명사',
        definition_korean: '약속, 보장',
        usage_note: '하나님의 확실한 약속과 보증'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 7절의 운동 비유를 확장하여 육체 훈련과 영적 훈련을 비교합니다. "육체의 훈련"(physical training)은 그리스-로마 세계에서 중요시되던 체육 활동을 가리킵니다. 바울은 이를 완전히 부정하지 않고 "약간의 유익"이 있다고 인정합니다. 건강 유지와 규율 훈련 측면에서 긍정적 가치가 있습니다. 그러나 "경건"은 비교할 수 없이 더 큰 가치를 가집니다. "모든 것에 유익"하다는 것은 삶의 모든 영역(영적, 도덕적, 관계적, 심지어 물질적)에 긍정적 영향을 미친다는 뜻입니다. 더 중요한 것은 시간적 범위입니다. 육체 훈련의 유익은 현재 삶에 제한되지만, 경건은 "현재의 삶과 다가올 삶 모두"에 약속을 가집니다. 여기서 "약속"(promise)은 하나님의 확실한 보증을 의미하며, 현세의 복과 내세의 영생을 모두 포함합니다.',
      cross_references: ['1 Corinthians 9:24-27', 'Philippians 3:8', 'Matthew 6:33', 'Mark 10:29-30']
    },
    korean_translation: {
      natural_translation: '육체의 훈련은 약간의 유익이 있지만, 경건은 모든 것에 유익합니다. 현재의 삶과 다가올 삶 모두에 약속을 가지고 있기 때문입니다.',
      translation_notes: '"some value" 대 "value for all things"의 대조가 핵심. "both...and"로 시간적 포괄성 강조'
    },
    special_explanation: {
      explanation_type: '균형 잡힌 해석',
      content: '이 구절은 때때로 육체 건강을 무시하는 근거로 오용됩니다. 그러나 바울의 의도는 육체 훈련을 부정하는 것이 아니라 우선순위를 정하는 것입니다. "약간의 유익"이라는 표현은 육체 훈련의 가치를 인정하면서도 제한적임을 지적합니다. 육체 건강은 중요하지만, 그것만으로는 인생의 궁극적 문제(죄, 죽음, 심판)를 해결할 수 없습니다. 반면 경건은 전인격적이고 영원한 차원의 유익을 제공합니다. 동시에 경건한 삶은 현재의 삶에도 실제적 유익을 가져옵니다: 지혜로운 선택, 건강한 관계, 심령의 평안, 삶의 목적 등. 따라서 이 구절은 육체 돌봄과 영적 성장 사이의 균형을 요구하되, 영적 우선순위를 분명히 합니다.',
      examples: [
        '육체 훈련: 건강, 규율, 현재 삶에 제한적 유익',
        '경건 훈련: 성품, 관계, 현재와 미래 모두에 유익',
        '통합적 삶: 몸을 돌보되 영혼의 건강을 우선시'
      ]
    }
  },

  // 1 Timothy 4:9
  {
    reference: '1 Timothy 4:9',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '진리의 확증',
        original_text: 'This is a trustworthy saying that deserves full acceptance',
        korean_translation: '이것은 신실한 말씀이며 전적으로 받아들일 만합니다',
        grammatical_explanation: '"This"는 앞 구절(8절)의 내용을 가리킴. "trustworthy"와 "deserves full acceptance"는 병렬로 진술의 권위를 강조'
      }
    ],
    vocabulary: [
      {
        word: 'trustworthy',
        ipa_pronunciation: '/ˈtrʌstwɜːrði/',
        korean_pronunciation: '트러스트워디',
        part_of_speech: '형용사',
        definition_korean: '신뢰할 만한, 확실한',
        usage_note: '완전히 의지할 수 있는, 거짓이 없는'
      },
      {
        word: 'saying',
        ipa_pronunciation: '/ˈseɪɪŋ/',
        korean_pronunciation: '세잉',
        part_of_speech: '명사',
        definition_korean: '말씀, 진술',
        usage_note: '특정한 가르침이나 격언'
      },
      {
        word: 'deserves',
        ipa_pronunciation: '/dɪˈzɜːrvz/',
        korean_pronunciation: '디저브즈',
        part_of_speech: '동사',
        definition_korean: '마땅히 받을 만하다',
        usage_note: '가치가 있어서 받아야 하는 것'
      },
      {
        word: 'acceptance',
        ipa_pronunciation: '/əkˈseptəns/',
        korean_pronunciation: '악셉턴스',
        part_of_speech: '명사',
        definition_korean: '받아들임, 수용',
        usage_note: '믿고 순종하는 것'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '이 구절은 디모데전서에 다섯 번 나오는 "신실한 말씀" 공식 중 하나입니다(1:15, 3:1, 4:9, 2Tim 2:11, Tit 3:8). 이 공식은 특별히 중요하거나 요약적인 진리를 강조할 때 사용됩니다. "이것"(This)이 정확히 무엇을 가리키는지에 대해 학자들 사이에 논쟁이 있습니다. 어떤 이들은 앞 구절(8절)의 경건의 가치에 대한 진술을 가리킨다고 보고, 다른 이들은 다음 구절(10절)의 소망에 대한 진술을 가리킨다고 봅니다. 문맥상 8절을 가리킬 가능성이 더 높습니다. "신실한"(trustworthy)은 하나님의 성품을 반영하는 말로, 이 진술이 완전히 믿을 만하고 거짓이 없음을 의미합니다. "전적으로 받아들일 만하다"는 단순한 지적 동의를 넘어 삶으로 실천해야 할 진리임을 강조합니다.',
      cross_references: ['1 Timothy 1:15', '1 Timothy 3:1', '2 Timothy 2:11', 'Titus 3:8']
    },
    korean_translation: {
      natural_translation: '이것은 신실한 말씀이며 전적으로 받아들일 만합니다.',
      translation_notes: '"trustworthy saying"은 디모데서와 디도서에 나오는 특별 공식. "full acceptance"는 완전한 순종적 수용을 의미'
    },
    special_explanation: {
      explanation_type: '문학적 공식',
      content: '"신실한 말씀" 공식은 목회서신(디모데전후서, 디도서)에만 나타나는 독특한 표현입니다. 이는 바울이 특별히 중요한 진리를 강조하거나, 당시 교회에서 널리 받아들여지던 신앙 고백을 인용할 때 사용한 문학적 장치입니다. 이 공식의 사용은 두 가지를 시사합니다: 1) 초대교회에 이미 형성되고 있던 신앙 고백이나 찬송의 존재, 2) 거짓 가르침이 만연한 상황에서 신뢰할 수 있는 진리를 분명히 표시할 필요성. 디모데전서의 다섯 "신실한 말씀"은 각각 복음의 핵심(1:15), 교회 리더십(3:1), 경건의 가치(4:9), 고난과 영광(2Tim 2:11), 은혜와 선행(Tit 3:8)을 다룹니다.',
      examples: [
        '1 Timothy 1:15: 그리스도께서 죄인을 구원하러 오심',
        '1 Timothy 3:1: 감독 직분을 사모하는 것은 선한 일',
        '1 Timothy 4:9: 경건은 현재와 미래 모두에 유익'
      ]
    }
  },

  // 1 Timothy 4:10
  {
    reference: '1 Timothy 4:10',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '수고의 이유',
        original_text: 'That is why we labor and strive',
        korean_translation: '그래서 우리가 수고하고 애씁니다',
        grammatical_explanation: '"That is why"는 앞 구절들의 결론. "labor and strive"는 병렬 동사로 헌신의 강도를 강조'
      },
      {
        sequence_order: 2,
        semantic_classification: '소망의 근거',
        original_text: 'because we have put our hope in the living God',
        korean_translation: '우리가 살아계신 하나님께 소망을 두었기 때문입니다',
        grammatical_explanation: '"because"는 이유 제시. 완료 시제 "have put"은 과거의 결단이 현재까지 지속됨을 나타냄. "the living God"은 우상과 대조'
      },
      {
        sequence_order: 3,
        semantic_classification: '하나님의 구원 범위',
        original_text: 'who is the Savior of all people, and especially of those who believe',
        korean_translation: '그분은 모든 사람의 구주시며, 특히 믿는 자들의 구주이십니다',
        grammatical_explanation: '관계절 "who is"는 하나님을 설명. "of all people"과 "of those who believe"의 관계가 핵심. "especially"는 특별한 의미를 나타냄'
      }
    ],
    vocabulary: [
      {
        word: 'labor',
        ipa_pronunciation: '/ˈleɪbər/',
        korean_pronunciation: '레이버',
        part_of_speech: '동사',
        definition_korean: '수고하다, 힘들게 일하다',
        usage_note: '피곤하고 힘든 노동'
      },
      {
        word: 'strive',
        ipa_pronunciation: '/straɪv/',
        korean_pronunciation: '스트라이브',
        part_of_speech: '동사',
        definition_korean: '애쓰다, 분투하다',
        usage_note: '목표를 향해 격렬하게 노력하는 것. 운동 경기의 투쟁을 연상시킴'
      },
      {
        word: 'hope',
        ipa_pronunciation: '/həʊp/',
        korean_pronunciation: '호프',
        part_of_speech: '명사',
        definition_korean: '소망, 희망',
        usage_note: '확실한 기대, 신뢰할 만한 미래'
      },
      {
        word: 'living',
        ipa_pronunciation: '/ˈlɪvɪŋ/',
        korean_pronunciation: '리빙',
        part_of_speech: '형용사',
        definition_korean: '살아계신',
        usage_note: '죽은 우상과 대조되어 생명의 근원이신 하나님'
      },
      {
        word: 'Savior',
        ipa_pronunciation: '/ˈseɪvjər/',
        korean_pronunciation: '세이비어',
        part_of_speech: '명사',
        definition_korean: '구주, 구원자',
        usage_note: '위험이나 멸망에서 구해내는 분'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 자신과 디모데의 사역 동기를 설명합니다. "수고하고 애쓴다"는 두 동사는 목회 사역의 힘든 본질을 나타냅니다. "수고"(labor)는 피곤한 육체적 노동을, "애쓴다"(strive)는 운동선수의 격렬한 경쟁을 연상시킵니다. 이런 헌신의 이유는 "살아계신 하나님께 소망을 두었기" 때문입니다. "살아계신"은 우상과의 대조로, 진짜 생명의 근원이신 하나님을 가리킵니다. 마지막 절은 신학적으로 중요하지만 해석이 어렵습니다. "모든 사람의 구주"라는 표현은 만인구원론을 의미하지 않습니다. 하나님은 모든 사람을 향한 구원의 의도를 가지시고(2:4), 만인에게 일반 은총(해, 비, 생명 등)을 베푸시지만, 구원의 효력은 "특히 믿는 자들"에게만 적용됩니다. "특히"(especially)는 일반과 특수의 관계를 나타내며, 믿음이 구원을 경험하는 필수 조건임을 강조합니다.',
      cross_references: ['1 Timothy 2:4-6', 'John 3:16-17', 'Titus 2:11', '2 Peter 3:9']
    },
    korean_translation: {
      natural_translation: '그래서 우리가 수고하고 애씁니다. 우리가 살아계신 하나님께 소망을 두었기 때문입니다. 그분은 모든 사람의 구주시며, 특히 믿는 자들의 구주이십니다.',
      translation_notes: '"Savior of all people"과 "especially of those who believe"의 관계가 핵심. 보편적 의도와 특수적 적용의 구분'
    },
    special_explanation: {
      explanation_type: '신학적 논쟁',
      content: '"모든 사람의 구주, 특히 믿는 자들의 구주"라는 표현은 구원론에서 중요한 구절입니다. 이는 세 가지 방식으로 이해될 수 있습니다: 1) 일반 은총과 특수 은총: 하나님은 모든 사람에게 일반 은총(생명, 건강, 자연의 복)을 베푸시지만, 구원의 특수 은총은 믿는 자들에게만 주심. 2) 잠재적 구원과 실제적 구원: 그리스도의 죽음은 모든 사람을 위해 충분하지만, 믿음으로 받아들이는 자들에게만 효력을 발휘함. 3) 구원의 제공과 적용: 하나님은 모든 사람에게 구원을 제공하시지만(2:4), 실제로 구원받는 것은 믿는 자들뿐임. 어떤 해석을 택하든, 이 구절은 만인구원론을 가르치지 않습니다. "특히"(especially)라는 단어가 믿음의 필수성을 분명히 하기 때문입니다.',
      examples: [
        '일반 은총: 하나님께서 모든 사람에게 해와 비를 주심 (마 5:45)',
        '특수 은총: 믿는 자들에게만 영생과 성령을 주심 (요 3:16)',
        '구원의 제공: 모든 사람을 향한 하나님의 초대 (요 3:17, 벧후 3:9)'
      ]
    }
  },

  // 1 Timothy 4:11
  {
    reference: '1 Timothy 4:11',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '사역 명령',
        original_text: 'Command and teach these things',
        korean_translation: '이것들을 명령하고 가르치십시오',
        grammatical_explanation: '병렬 명령문 "Command and teach". "these things"는 앞에서 논의한 모든 가르침을 가리킴'
      }
    ],
    vocabulary: [
      {
        word: 'command',
        ipa_pronunciation: '/kəˈmɑːnd/',
        korean_pronunciation: '커맨드',
        part_of_speech: '동사',
        definition_korean: '명령하다, 지시하다',
        usage_note: '권위를 가지고 순종을 요구하는 것'
      },
      {
        word: 'teach',
        ipa_pronunciation: '/tiːtʃ/',
        korean_pronunciation: '티치',
        part_of_speech: '동사',
        definition_korean: '가르치다',
        usage_note: '설명하고 이해시키는 것'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 디모데에게 간결하지만 강력한 명령을 내립니다. "명령하고 가르치라"는 두 동사는 목회자의 이중 역할을 나타냅니다. "명령하다"(command)는 권위 있는 선포를 의미하며, 거짓 교사들에 대한 확고한 입장을 요구합니다. "가르치다"(teach)는 더 교육적 측면으로, 성도들이 진리를 이해하고 적용하도록 돕는 것입니다. "이것들"(these things)은 4장 전체에서 논의한 내용을 가리킵니다: 거짓 가르침의 경계, 창조의 선함, 경건 훈련의 중요성, 하나님께 두는 소망 등. 디모데는 이런 진리들을 단순히 제안이 아니라 권위 있게 명령하고, 동시에 인내심을 가지고 가르쳐야 합니다. 이 짧은 구절은 다음 구절들(12-16절)의 서론 역할을 하며, 디모데의 개인적 자질과 사역 태도에 대한 지침으로 이어집니다.',
      cross_references: ['2 Timothy 4:2', 'Titus 2:15', '1 Timothy 1:3', '2 Timothy 2:14']
    },
    korean_translation: {
      natural_translation: '이것들을 명령하고 가르치십시오.',
      translation_notes: '"Command and teach"는 권위와 교육의 결합. 목회자의 이중 역할을 나타냄'
    },
    special_explanation: {
      explanation_type: '목회적 균형',
      content: '"명령"과 "가르침"의 결합은 건강한 목회의 균형을 보여줍니다. 명령만 있으면 권위주의가 되고, 가르침만 있으면 권위가 없어집니다. 목회자는 하나님의 말씀을 권위 있게 선포하되, 성도들이 이해하고 적용할 수 있도록 인내심 있게 가르쳐야 합니다. 이는 특히 거짓 가르침이 만연한 에베소 상황에서 중요했습니다. 디모데는 확고히 진리를 선포하면서도, 사랑으로 성도들을 교육해야 했습니다. 현대 목회에도 이 균형이 필요합니다: 타협 없는 진리 선포와 인내심 있는 교육의 조화.',
      examples: [
        '명령 측면: 거짓 가르침 거부, 경건 훈련 실천, 하나님께 소망 둠',
        '가르침 측면: 왜 이것들이 중요한지 설명, 실천 방법 제시, 질문에 답변',
        '균형: 권위와 사랑, 확고함과 인내, 선포와 교육'
      ]
    }
  },

  // 1 Timothy 4:12
  {
    reference: '1 Timothy 4:12',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '경멸 금지',
        original_text: 'Don\'t let anyone look down on you because you are young',
        korean_translation: '아무도 네가 젊다고 해서 너를 업신여기지 못하게 하십시오',
        grammatical_explanation: '금지 명령문 "Don\'t let". "look down on"은 경멸을 나타내는 관용구. "because you are young"은 이유절'
      },
      {
        sequence_order: 2,
        semantic_classification: '본보기의 다섯 영역',
        original_text: 'but set an example for the believers in speech, in conduct, in love, in faith and in purity',
        korean_translation: '오히려 말과 행실과 사랑과 믿음과 순결에서 믿는 자들의 본이 되십시오',
        grammatical_explanation: '"but"은 대조. "set an example"은 명령문. 다섯 개의 "in" 전치사구가 병렬로 본보기의 영역을 제시'
      }
    ],
    vocabulary: [
      {
        word: 'look down on',
        ipa_pronunciation: '/lʊk daʊn ɒn/',
        korean_pronunciation: '룩 다운 온',
        part_of_speech: '동사구',
        definition_korean: '업신여기다, 얕보다',
        usage_note: '경멸하거나 무시하는 태도'
      },
      {
        word: 'young',
        ipa_pronunciation: '/jʌŋ/',
        korean_pronunciation: '영',
        part_of_speech: '형용사',
        definition_korean: '젊은',
        usage_note: '디모데는 당시 30대 중후반으로 추정되지만, 교회 리더로는 젊은 편'
      },
      {
        word: 'example',
        ipa_pronunciation: '/ɪɡˈzɑːmpəl/',
        korean_pronunciation: '이그잼플',
        part_of_speech: '명사',
        definition_korean: '본, 모범',
        usage_note: '따라야 할 패턴이나 모델'
      },
      {
        word: 'speech',
        ipa_pronunciation: '/spiːtʃ/',
        korean_pronunciation: '스피치',
        part_of_speech: '명사',
        definition_korean: '말, 언어',
        usage_note: '하는 말의 내용과 방식'
      },
      {
        word: 'conduct',
        ipa_pronunciation: '/ˈkɒndʌkt/',
        korean_pronunciation: '컨덕트',
        part_of_speech: '명사',
        definition_korean: '행실, 행동',
        usage_note: '삶의 방식과 태도'
      },
      {
        word: 'purity',
        ipa_pronunciation: '/ˈpjʊərəti/',
        korean_pronunciation: '퓨어리티',
        part_of_speech: '명사',
        definition_korean: '순결, 정결',
        usage_note: '도덕적, 성적 깨끗함'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 젊은 목회자 디모데가 직면한 실제적 어려움을 다룹니다. 고대 사회는 나이와 경험을 존중했기에, 비교적 젊은 디모데(당시 30대 중후반으로 추정)가 나이 든 성도들을 가르치고 이끄는 것은 도전적이었습니다. "아무도 너를 업신여기지 못하게 하라"는 명령은 디모데가 능동적으로 존경을 얻어야 함을 의미합니다. 그 방법은 권위를 주장하는 것이 아니라 "본이 되는" 것입니다. 바울은 다섯 영역을 제시합니다: 1) 말 - 가르침의 내용과 대화 방식, 2) 행실 - 전반적 생활 방식, 3) 사랑 - 하나님과 사람을 향한 아가페, 4) 믿음 - 하나님께 대한 신뢰와 신실함, 5) 순결 - 특히 성적 도덕성. 이 다섯 영역은 목회자의 삶 전체를 포괄하며, 공적 사역과 사적 삶 모두를 포함합니다. "믿는 자들의 본"이라는 표현은 목회자가 단지 가르치는 자가 아니라 살아있는 모델임을 강조합니다.',
      cross_references: ['Titus 2:7-8', '1 Peter 5:3', 'Philippians 3:17', '1 Corinthians 11:1']
    },
    korean_translation: {
      natural_translation: '아무도 네가 젊다고 해서 너를 업신여기지 못하게 하십시오. 오히려 말과 행실과 사랑과 믿음과 순결에서 믿는 자들의 본이 되십시오.',
      translation_notes: '"Don\'t let"은 능동적 방어. "set an example"은 다섯 구체적 영역에서의 모범'
    },
    special_explanation: {
      explanation_type: '리더십 원리',
      content: '이 구절은 영적 리더십의 핵심 원리를 제시합니다: 권위는 지위가 아니라 성품에서 나옵니다. 디모데는 나이나 직분으로 존경을 요구할 수 없었습니다. 대신 그는 모든 삶의 영역에서 본보기가 됨으로써 존경을 얻어야 했습니다. 이는 현대 리더십 이론과도 일치합니다: 가장 효과적인 리더십은 모범을 통한 영향력입니다. 다섯 영역의 순서도 의미심장합니다: 말(공적 사역) → 행실(전반적 삶) → 사랑(동기) → 믿음(하나님과의 관계) → 순결(내적 성품). 이는 외적인 것에서 내적인 것으로, 보이는 것에서 보이지 않는 것으로 진행됩니다. 진정한 본은 모든 차원에서 일관성을 보여야 합니다.',
      examples: [
        '말: 은혜롭고 진리에 근거한 말, 험담이나 거짓 없음',
        '행실: 정직, 성실, 책임감 있는 삶',
        '사랑: 편파심 없이 모든 사람을 섬김',
        '믿음: 위기 중에도 하나님을 신뢰',
        '순결: 성적 도덕성, 탐욕 없음'
      ]
    }
  },

  // 1 Timothy 4:13
  {
    reference: '1 Timothy 4:13',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '헌신의 세 영역',
        original_text: 'Until I come, devote yourself to the public reading of Scripture, to preaching and to teaching',
        korean_translation: '내가 올 때까지 성경의 공개 낭독과 권면과 가르침에 전념하십시오',
        grammatical_explanation: '시간절 "Until I come". 명령문 "devote yourself". 세 개의 "to" 전치사구가 병렬로 헌신의 영역을 제시'
      }
    ],
    vocabulary: [
      {
        word: 'devote',
        ipa_pronunciation: '/dɪˈvəʊt/',
        korean_pronunciation: '디보트',
        part_of_speech: '동사',
        definition_korean: '전념하다, 헌신하다',
        usage_note: '완전히 주의와 노력을 집중하는 것'
      },
      {
        word: 'public reading',
        ipa_pronunciation: '/ˈpʌblɪk ˈriːdɪŋ/',
        korean_pronunciation: '퍼블릭 리딩',
        part_of_speech: '명사구',
        definition_korean: '공개 낭독',
        usage_note: '회중 앞에서 소리 내어 읽는 것'
      },
      {
        word: 'Scripture',
        ipa_pronunciation: '/ˈskrɪptʃər/',
        korean_pronunciation: '스크립처',
        part_of_speech: '명사',
        definition_korean: '성경',
        usage_note: '하나님의 기록된 말씀'
      },
      {
        word: 'preaching',
        ipa_pronunciation: '/ˈpriːtʃɪŋ/',
        korean_pronunciation: '프리칭',
        part_of_speech: '명사',
        definition_korean: '설교, 권면',
        usage_note: '원어 "paraklesis"는 격려, 위로, 권면을 포함'
      },
      {
        word: 'teaching',
        ipa_pronunciation: '/ˈtiːtʃɪŋ/',
        korean_pronunciation: '티칭',
        part_of_speech: '명사',
        definition_korean: '가르침',
        usage_note: '체계적 교육과 설명'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 자신이 에베소를 재방문할 때까지 디모데가 집중해야 할 세 가지 공적 사역을 제시합니다. 첫째, "성경의 공개 낭독"은 초대교회 예배의 핵심 요소였습니다. 당시 대부분의 사람들은 성경을 개인적으로 소유하지 못했고 읽을 수 없었기에, 회중 앞에서 성경을 낭독하는 것은 매우 중요했습니다. 이는 유대교 회당 예배 전통을 따른 것입니다(눅 4:16-17). 둘째, "권면"(preaching/paraklesis)은 성경 본문을 적용하여 격려하고 위로하며 권면하는 것입니다. 셋째, "가르침"(teaching/didaskalia)은 더 체계적인 교리 교육을 의미합니다. 이 세 요소의 순서가 중요합니다: 성경 낭독(객관적 말씀) → 권면(실천적 적용) → 가르침(체계적 이해). 모두 하나님의 말씀에 기초하며, 목회 사역의 핵심은 말씀 사역임을 강조합니다.',
      cross_references: ['Nehemiah 8:8', 'Luke 4:16-21', 'Acts 13:15', 'Colossians 4:16', '2 Timothy 4:2']
    },
    korean_translation: {
      natural_translation: '내가 올 때까지 성경의 공개 낭독과 권면과 가르침에 전념하십시오.',
      translation_notes: '세 요소가 모두 말씀 사역: 낭독(선포), 권면(적용), 가르침(교육)'
    },
    special_explanation: {
      explanation_type: '예배와 설교',
      content: '이 구절은 초대교회 예배의 구조를 엿볼 수 있게 합니다. 유대교 회당 예배는 성경 낭독, 설명, 적용의 순서로 진행되었고, 초대교회도 이를 따랐습니다. 성경 낭독은 단순한 형식이 아니라 하나님의 음성을 듣는 행위였습니다. 회중은 낭독을 통해 하나님께서 직접 말씀하시는 것을 경험했습니다. 권면은 그 말씀을 삶에 적용하도록 격려하고, 가르침은 말씀의 의미를 깊이 이해하도록 도왔습니다. 현대 설교도 이 세 요소를 포함해야 합니다: 1) 본문 충실한 해석(낭독의 정신), 2) 삶의 적용과 격려(권면), 3) 신학적 이해 증진(가르침). "전념하라"는 명령은 이것들이 디모데 사역의 중심이어야 함을 의미합니다.',
      examples: [
        '성경 낭독: 본문의 정확하고 명료한 전달',
        '권면: 본문을 현재 상황에 적용, 순종 격려',
        '가르침: 교리적 의미 설명, 신학적 이해 증진'
      ]
    }
  },

  // 1 Timothy 4:14
  {
    reference: '1 Timothy 4:14',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '은사 방치 경고',
        original_text: 'Do not neglect your gift',
        korean_translation: '네 은사를 등한히 하지 마십시오',
        grammatical_explanation: '금지 명령문 "Do not neglect". "your gift"는 하나님께서 주신 특별한 능력'
      },
      {
        sequence_order: 2,
        semantic_classification: '은사 수여 방식',
        original_text: 'which was given you through prophecy when the body of elders laid their hands on you',
        korean_translation: '그것은 장로들이 네게 안수할 때 예언을 통해 네게 주어진 것입니다',
        grammatical_explanation: '관계절 "which was given". 수동태로 하나님의 주권적 선물을 강조. "through prophecy"와 "when...laid hands"는 은사 수여의 두 측면'
      }
    ],
    vocabulary: [
      {
        word: 'neglect',
        ipa_pronunciation: '/nɪˈɡlekt/',
        korean_pronunciation: '니글렉트',
        part_of_speech: '동사',
        definition_korean: '등한히 하다, 소홀히 하다',
        usage_note: '무시하거나 돌보지 않는 것'
      },
      {
        word: 'gift',
        ipa_pronunciation: '/ɡɪft/',
        korean_pronunciation: '기프트',
        part_of_speech: '명사',
        definition_korean: '은사, 선물',
        usage_note: '원어 "charisma"는 하나님의 은혜로 주신 능력'
      },
      {
        word: 'prophecy',
        ipa_pronunciation: '/ˈprɒfəsi/',
        korean_pronunciation: '프라퍼시',
        part_of_speech: '명사',
        definition_korean: '예언',
        usage_note: '하나님의 계시적 말씀, 여기서는 디모데의 소명 확인'
      },
      {
        word: 'elders',
        ipa_pronunciation: '/ˈeldərz/',
        korean_pronunciation: '엘더즈',
        part_of_speech: '명사',
        definition_korean: '장로들',
        usage_note: '교회의 영적 지도자들'
      },
      {
        word: 'laid hands',
        ipa_pronunciation: '/leɪd hændz/',
        korean_pronunciation: '레이드 핸즈',
        part_of_speech: '동사구',
        definition_korean: '안수하다',
        usage_note: '축복, 임직, 성령 부여를 위한 의식적 행위'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 디모데에게 하나님께서 주신 은사를 소홀히 하지 말라고 경고합니다. "은사"(gift/charisma)는 성령께서 주시는 특별한 능력으로, 디모데의 경우 목회와 가르침의 은사를 가리킵니다. "등한히 하다"는 적극적으로 사용하지 않거나 계발하지 않는 것을 의미합니다. 은사의 수여 방식이 흥미롭습니다. "예언을 통해"는 성령의 계시로 디모데의 소명과 은사가 확인되었음을 의미하고, "장로들이 안수할 때"는 교회 공동체가 그 소명을 공식적으로 인정하고 확증한 것을 나타냅니다(2딤 1:6에서는 바울의 안수도 언급됨). 이는 개인의 은사가 하나님께서 주시지만, 교회 공동체의 확인과 지지 안에서 인정되고 발휘됨을 보여줍니다. 안수는 단순한 형식이 아니라 성령의 능력 부여와 연결된 중요한 의식이었습니다.',
      cross_references: ['2 Timothy 1:6', 'Acts 13:2-3', 'Numbers 27:18-23', '1 Timothy 5:22']
    },
    korean_translation: {
      natural_translation: '네 은사를 등한히 하지 마십시오. 그것은 장로들이 네게 안수할 때 예언을 통해 네게 주어진 것입니다.',
      translation_notes: '"gift"는 하나님의 은혜로 주신 특별한 능력. 예언과 안수는 은사 수여의 두 측면'
    },
    special_explanation: {
      explanation_type: '은사와 안수',
      content: '이 구절은 영적 은사의 본질과 교회의 임직 의식에 대해 중요한 통찰을 제공합니다. 첫째, 은사는 하나님의 주권적 선물이지만, 개인의 책임 있는 사용을 요구합니다. "등한히 하지 말라"는 명령은 은사가 자동으로 작동하지 않으며, 의도적으로 계발하고 사용해야 함을 의미합니다. 둘째, 은사의 확인과 인정에 예언과 안수가 모두 사용되었습니다. 예언은 성령의 초자연적 계시로 하나님의 뜻을 확인하고, 안수는 교회 공동체가 그것을 공식적으로 인정하는 행위입니다. 셋째, 개인의 소명은 공동체적 맥락 안에서 확인됩니다. 디모데의 은사는 사적 경험이 아니라 교회 지도자들(장로들)의 공적 인정을 받았습니다. 이는 건강한 균형을 보여줍니다: 성령의 주권 + 개인의 책임 + 공동체의 확인.',
      examples: [
        '은사 확인: 성령의 계시(예언) + 교회의 인정(안수)',
        '은사 책임: 하나님이 주심 + 개인이 계발하고 사용',
        '은사 목적: 개인의 영광이 아닌 교회의 덕을 세움'
      ]
    }
  },

  // 1 Timothy 4:15
  {
    reference: '1 Timothy 4:15',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '헌신 명령',
        original_text: 'Be diligent in these matters; give yourself wholly to them',
        korean_translation: '이 일들에 부지런하고, 그것들에 네 자신을 온전히 드리십시오',
        grammatical_explanation: '두 개의 병렬 명령문. "Be diligent"는 지속적 노력을 요구. "give yourself wholly"는 완전한 헌신을 나타냄'
      },
      {
        sequence_order: 2,
        semantic_classification: '성장의 가시성',
        original_text: 'so that everyone may see your progress',
        korean_translation: '그래야 모든 사람이 네 진보를 볼 수 있습니다',
        grammatical_explanation: '"so that"은 목적절. "everyone may see"는 공개적 결과. "your progress"는 지속적 성장'
      }
    ],
    vocabulary: [
      {
        word: 'diligent',
        ipa_pronunciation: '/ˈdɪlɪdʒənt/',
        korean_pronunciation: '딜리전트',
        part_of_speech: '형용사',
        definition_korean: '부지런한, 근면한',
        usage_note: '꾸준히 노력하는 것'
      },
      {
        word: 'matters',
        ipa_pronunciation: '/ˈmætərz/',
        korean_pronunciation: '매터즈',
        part_of_speech: '명사',
        definition_korean: '일들, 사안들',
        usage_note: '앞에서 언급된 사역의 여러 측면들'
      },
      {
        word: 'wholly',
        ipa_pronunciation: '/ˈhəʊlli/',
        korean_pronunciation: '홀리',
        part_of_speech: '부사',
        definition_korean: '온전히, 완전히',
        usage_note: '부분적이 아닌 전적으로'
      },
      {
        word: 'progress',
        ipa_pronunciation: '/ˈprəʊɡres/',
        korean_pronunciation: '프로그레스',
        part_of_speech: '명사',
        definition_korean: '진보, 성장',
        usage_note: '지속적 향상과 발전'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 디모데에게 사역에 대한 완전한 헌신을 요구합니다. "이 일들"은 앞에서 언급된 모든 것: 본이 됨(12절), 말씀 사역(13절), 은사 사용(14절)을 가리킵니다. "부지런하라"는 게으름이나 무관심을 경계하며, "네 자신을 온전히 드리라"는 부분적이 아닌 전적인 헌신을 요구합니다. 원어 "give yourself wholly"는 문자적으로 "이것들 안에 있으라"는 의미로, 디모데의 전 존재가 사역에 몰입되어야 함을 나타냅니다. 이런 헌신의 목적은 "모든 사람이 네 진보를 보게" 하기 위함입니다. "진보"(progress)는 군사 용어로 전진을 의미하며, 영적 성장과 사역 발전을 포함합니다. 중요한 것은 이 성장이 공개적으로 가시화되어야 한다는 점입니다. 목회자의 성장은 사적 경건만이 아니라 공적 사역과 성품에서도 명백해야 합니다. 이는 12절의 "본이 되라"는 명령과 연결되며, 디모데의 삶 자체가 복음의 증거가 되어야 함을 강조합니다.',
      cross_references: ['Philippians 1:25', '2 Timothy 2:15', '1 Corinthians 9:24-27', 'Philippians 3:12-14']
    },
    korean_translation: {
      natural_translation: '이 일들에 부지런하고, 그것들에 네 자신을 온전히 드리십시오. 그래야 모든 사람이 네 진보를 볼 수 있습니다.',
      translation_notes: '"give yourself wholly"는 완전한 헌신. "progress"는 지속적 성장으로 공개적으로 가시화됨'
    },
    special_explanation: {
      explanation_type: '영적 성장의 가시성',
      content: '이 구절은 목회자(그리고 모든 신자)의 영적 성장이 공개적으로 명백해야 한다고 가르칩니다. "모든 사람이 볼 수 있는" 성장은 세 가지를 의미합니다: 1) 성장이 실제로 일어나야 함 - 거짓이나 외양이 아님, 2) 성장이 가시적이어야 함 - 사적 경건만이 아니라 공적 삶에서 드러남, 3) 성장이 지속적이어야 함 - 일시적 열정이 아닌 꾸준한 진보. 이는 몇 가지 중요한 질문을 제기합니다: 작년보다 올해 더 성숙했는가? 다른 사람들이 당신의 성장을 관찰할 수 있는가? 성품, 사역 능력, 하나님 이해가 깊어지고 있는가? 이런 가시적 성장은 목회자의 권위와 영향력의 기초입니다. 디모데가 젊음으로 인한 경멸을 극복하는 방법은 명백한 영적 성장을 보여주는 것이었습니다.',
      examples: [
        '성품 성장: 더 인내심 있고 사랑스러운 태도',
        '사역 성장: 더 효과적인 가르침과 리더십',
        '신학 성장: 더 깊은 말씀 이해와 적용'
      ]
    }
  },

  // 1 Timothy 4:16
  {
    reference: '1 Timothy 4:16',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '경계와 인내 명령',
        original_text: 'Watch your life and doctrine closely. Persevere in them',
        korean_translation: '네 삶과 교리를 주의 깊게 살피십시오. 그것들을 견지하십시오',
        grammatical_explanation: '두 명령문. "Watch...closely"는 지속적 감시를 요구. "Persevere"는 흔들림 없는 지속을 의미'
      },
      {
        sequence_order: 2,
        semantic_classification: '인내의 결과',
        original_text: 'because if you do, you will save both yourself and your hearers',
        korean_translation: '그렇게 하면 네 자신과 네 말을 듣는 자들을 구원할 것이기 때문입니다',
        grammatical_explanation: '"because"는 이유 제시. 조건절 "if you do"와 결과절 "you will save". "both...and"로 이중 구원 효과를 강조'
      }
    ],
    vocabulary: [
      {
        word: 'watch',
        ipa_pronunciation: '/wɒtʃ/',
        korean_pronunciation: '왓치',
        part_of_speech: '동사',
        definition_korean: '주의하다, 감시하다',
        usage_note: '경계하며 지속적으로 살피는 것'
      },
      {
        word: 'life',
        ipa_pronunciation: '/laɪf/',
        korean_pronunciation: '라이프',
        part_of_speech: '명사',
        definition_korean: '삶, 생활',
        usage_note: '행동, 습관, 성품의 전체'
      },
      {
        word: 'doctrine',
        ipa_pronunciation: '/ˈdɒktrɪn/',
        korean_pronunciation: '닥트린',
        part_of_speech: '명사',
        definition_korean: '교리, 가르침',
        usage_note: '믿고 가르치는 신학적 내용'
      },
      {
        word: 'persevere',
        ipa_pronunciation: '/ˌpɜːrsɪˈvɪr/',
        korean_pronunciation: '퍼시비어',
        part_of_speech: '동사',
        definition_korean: '견지하다, 계속하다',
        usage_note: '어려움에도 불구하고 지속하는 것'
      },
      {
        word: 'save',
        ipa_pronunciation: '/seɪv/',
        korean_pronunciation: '세이브',
        part_of_speech: '동사',
        definition_korean: '구원하다',
        usage_note: '영적 멸망에서 건져내는 것'
      },
      {
        word: 'hearers',
        ipa_pronunciation: '/ˈhɪrərz/',
        korean_pronunciation: '히어러즈',
        part_of_speech: '명사',
        definition_korean: '듣는 자들',
        usage_note: '디모데의 가르침을 받는 회중'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 4장을 강력한 권면으로 마무리합니다. 디모데는 두 영역을 주의 깊게 살펴야 합니다: "삶"(life)과 "교리"(doctrine). 이 둘의 순서가 중요합니다. 삶이 먼저 언급되는 것은 개인의 성품과 행실이 가르침의 신뢰성에 선행함을 보여줍니다. 그러나 삶만으로는 충분하지 않습니다. 교리, 즉 가르치는 내용도 중요합니다. "주의 깊게 살피라"(watch closely)는 지속적이고 주의 깊은 점검을 의미합니다. 목회자는 자신의 영적 상태와 가르침의 정확성을 끊임없이 평가해야 합니다. "견지하라"(persevere)는 단순한 시작이 아니라 끝까지 지속하는 것을 강조합니다. 이런 충실함의 결과는 놀랍습니다: "네 자신과 네 말을 듣는 자들을 구원할 것입니다." 이는 목회자의 충성된 사역이 자신의 구원을 확증하고, 동시에 회중의 구원에도 기여함을 의미합니다. "구원하다"는 여기서 최종 구원의 완성을 가리키며, 목회자의 사역이 하나님의 구원 계획에서 중요한 역할을 함을 보여줍니다.',
      cross_references: ['Acts 20:28', 'Ezekiel 3:17-21', 'James 5:19-20', 'Philippians 2:12-16']
    },
    korean_translation: {
      natural_translation: '네 삶과 교리를 주의 깊게 살피십시오. 그것들을 견지하십시오. 그렇게 하면 네 자신과 네 말을 듣는 자들을 구원할 것입니다.',
      translation_notes: '"Watch...closely"는 지속적 자기 점검. "save"는 최종 구원의 완성을 가리킴'
    },
    special_explanation: {
      explanation_type: '목회자의 이중 책임',
      content: '이 구절은 목회자의 사역이 자신과 회중 모두의 영원한 운명에 영향을 미친다는 엄숙한 진리를 가르칩니다. "네 자신을 구원"한다는 표현은 행위 구원을 가르치는 것이 아니라, 신실한 사역이 구원의 참됨을 확증하고 완성을 향해 나아가는 것을 의미합니다. 목회자가 교리와 삶에 충실하지 않으면, 그 자신의 구원도 의심스러워집니다. 동시에 "네 말을 듣는 자들을 구원"한다는 것은 목회자의 가르침과 본이 회중의 영적 상태에 심대한 영향을 미침을 보여줍니다. 이는 목회자에게 엄청난 책임을 부과합니다(약 3:1). 그러나 동시에 큰 특권입니다: 하나님께서는 인간 목회자를 통해 사람들을 구원하시는 일을 기뻐하십니다. 이 구절은 모든 시대의 목회자들에게 두 가지 핵심 점검 사항을 제시합니다: 1) 내 삶이 내 가르침과 일치하는가? 2) 내 가르침이 성경적으로 건전한가?',
      examples: [
        '삶의 점검: 성품, 관계, 사적 경건, 도덕성',
        '교리의 점검: 성경적 정확성, 균형, 명료성',
        '인내: 단기 열정이 아닌 평생의 충성'
      ]
    }
  }
]

async function main() {
  console.log('1 Timothy 4장 분석 저장 시작...\n')
  console.log(`총 ${analyses.length}개 구절\n`)

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

  console.log('\n' + '='.repeat(80))
  console.log(`완료: ${successCount}/${analyses.length}`)
  console.log(`실패: ${failCount}/${analyses.length}`)
  console.log('='.repeat(80))
}

main().catch(console.error)
