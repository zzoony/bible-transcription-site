import { saveAnalysisToDb, type AnalysisData } from './save-analysis-to-db'

const analyses: AnalysisData[] = [
  // 1 Peter 1:4
  {
    reference: '1 Peter 1:4',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '유업의 특성',
        original_text: 'and into an inheritance that can never perish, spoil or fade',
        korean_translation: '썩지 않고 더럽혀지지 않으며 시들지 않는 유업',
        grammatical_explanation: '3절에서 계속되는 전치사구, 세 개의 부정 동사로 유업의 불변성 강조'
      },
      {
        sequence_order: 2,
        semantic_classification: '유업의 보관',
        original_text: 'This inheritance is kept in heaven for you',
        korean_translation: '이 유업은 하늘에 여러분을 위해 보관되어 있습니다',
        grammatical_explanation: '수동태 현재형으로 하나님의 지속적인 보호를 나타냄'
      }
    ],
    vocabulary: [
      {
        word: 'inheritance',
        ipa_pronunciation: '/ɪnˈherɪtəns/',
        korean_pronunciation: '인헤리턴스',
        part_of_speech: '명사',
        definition_korean: '유업, 상속받을 것'
      },
      {
        word: 'perish',
        ipa_pronunciation: '/ˈperɪʃ/',
        korean_pronunciation: '페리시',
        part_of_speech: '동사',
        definition_korean: '썩다, 멸망하다'
      },
      {
        word: 'spoil',
        ipa_pronunciation: '/spɔɪl/',
        korean_pronunciation: '스포일',
        part_of_speech: '동사',
        definition_korean: '더럽혀지다, 손상되다'
      },
      {
        word: 'fade',
        ipa_pronunciation: '/feɪd/',
        korean_pronunciation: '페이드',
        part_of_speech: '동사',
        definition_korean: '시들다, 사라지다'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '베드로는 신자들의 유업을 세 가지 부정어로 묘사합니다. "썩지 않는"(aphthartos)은 부패하지 않는 영원성을, "더럽혀지지 않는"(amiantos)은 도덕적 순수성을, "시들지 않는"(amarantos)은 영구적 아름다움을 의미합니다. 이는 지상의 모든 소유와 극명하게 대조됩니다. 당시 독자들은 재산 몰수와 사회적 배척을 경험했지만, 하늘에 보관된 유업은 어떤 박해자도 빼앗을 수 없습니다. "하늘에 보관되어"라는 표현은 완벽한 안전성을 강조하며, 이는 마태복음 6:20의 "하늘에 쌓아두라"는 예수님의 가르침과 연결됩니다.'
    },
    korean_translation: {
      natural_translation: '썩지 않고 더럽혀지지 않으며 시들지 않는 유업을 받게 하셨습니다. 이 유업은 하늘에서 여러분을 위해 보관되어 있습니다.'
    },
    special_explanation: {
      explanation_type: '수사학적 강조',
      content: '세 개의 "a-" 접두사를 가진 형용사(aphthartos, amiantos, amarantos)의 연속은 강력한 수사학적 효과를 만듭니다. 헬라어에서 alpha privativum(부정 접두사)의 반복은 청중의 주의를 끌고 메시지를 강화합니다.'
    }
  },

  // 1 Peter 1:5
  {
    reference: '1 Peter 1:5',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '현재의 보호',
        original_text: 'who through faith are shielded by God\'s power',
        korean_translation: '믿음으로 말미암아 하나님의 능력으로 보호받는',
        grammatical_explanation: '관계대명사절로 4절의 "you"를 수식, 현재 수동태로 지속적 보호를 나타냄'
      },
      {
        sequence_order: 2,
        semantic_classification: '보호의 목적과 시간',
        original_text: 'until the coming of the salvation that is ready to be revealed in the last time',
        korean_translation: '마지막 때에 나타나기로 예비된 구원에 이르기까지',
        grammatical_explanation: '시간을 나타내는 전치사구, 종말론적 완성을 가리킴'
      }
    ],
    vocabulary: [
      {
        word: 'shielded',
        ipa_pronunciation: '/ˈʃiːldɪd/',
        korean_pronunciation: '실디드',
        part_of_speech: '동사(과거분사)',
        definition_korean: '보호받는, 지켜지는'
      },
      {
        word: 'power',
        ipa_pronunciation: '/ˈpaʊər/',
        korean_pronunciation: '파워',
        part_of_speech: '명사',
        definition_korean: '능력, 권능'
      },
      {
        word: 'salvation',
        ipa_pronunciation: '/sælˈveɪʃn/',
        korean_pronunciation: '살베이션',
        part_of_speech: '명사',
        definition_korean: '구원'
      },
      {
        word: 'revealed',
        ipa_pronunciation: '/rɪˈviːld/',
        korean_pronunciation: '리빌드',
        part_of_speech: '동사(과거분사)',
        definition_korean: '나타난, 계시된'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '이 구절은 구원의 "이미"와 "아직"을 동시에 제시합니다. 신자들은 현재 하나님의 능력으로 보호받지만(현재적 측면), 완전한 구원은 마지막 때에 나타날 것입니다(미래적 측면). "보호받는"으로 번역된 헬라어 "phroureō"는 군사 용어로, 요새가 군대에 의해 지켜지는 것처럼 신자들이 하나님의 능력으로 둘러싸여 있음을 의미합니다. 믿음은 이 보호를 받는 통로입니다. "마지막 때"는 그리스도의 재림 때를 가리키며, 그때 현재 부분적인 구원이 완전히 이루어집니다. 박해받는 독자들에게 이는 현재의 고난이 일시적이며 영광스러운 종말이 확실하다는 확신을 줍니다.'
    },
    korean_translation: {
      natural_translation: '여러분은 믿음으로 말미암아 하나님의 능력으로 보호를 받아 마지막 때에 나타나기로 예비된 구원에 이르게 됩니다.'
    },
    special_explanation: {
      explanation_type: '구원의 삼중 시제',
      content: '신약 신학에서 구원은 삼중 시제를 가집니다: 과거(칭의 - 우리는 구원받았음), 현재(성화 - 우리는 구원받고 있음), 미래(영화 - 우리는 구원받을 것임). 이 구절은 현재의 보호와 미래의 완성을 연결합니다.'
    }
  },

  // 1 Peter 1:6
  {
    reference: '1 Peter 1:6',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '기쁨의 선언',
        original_text: 'In all this you greatly rejoice',
        korean_translation: '이 모든 것으로 여러분은 크게 기뻐합니다',
        grammatical_explanation: '현재 시제로 지속적인 기쁨을 나타냄, "이 모든 것"은 3-5절의 구원의 축복을 가리킴'
      },
      {
        sequence_order: 2,
        semantic_classification: '현재 고난의 인정',
        original_text: 'though now for a little while you may have had to suffer grief in all kinds of trials',
        korean_translation: '비록 지금 잠시 동안 여러 가지 시련으로 근심할 수밖에 없지만',
        grammatical_explanation: '양보절로 기쁨과 고난의 역설적 공존을 표현'
      }
    ],
    vocabulary: [
      {
        word: 'rejoice',
        ipa_pronunciation: '/rɪˈdʒɔɪs/',
        korean_pronunciation: '리조이스',
        part_of_speech: '동사',
        definition_korean: '기뻐하다, 즐거워하다'
      },
      {
        word: 'grief',
        ipa_pronunciation: '/ɡriːf/',
        korean_pronunciation: '그리프',
        part_of_speech: '명사',
        definition_korean: '근심, 슬픔'
      },
      {
        word: 'trials',
        ipa_pronunciation: '/ˈtraɪəlz/',
        korean_pronunciation: '트라이얼즈',
        part_of_speech: '명사',
        definition_korean: '시련, 시험'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '베드로는 기독교 신앙의 역설을 제시합니다 - 고난 중의 기쁨. "잠시 동안"(oligon)은 고난의 일시성을 강조하며 영원한 영광(5절)과 대조됩니다. "여러 가지 시련"(poikilois peirasmois)은 다양한 형태의 박해와 어려움을 의미합니다. 베드로 자신도 예수님을 부인한 후 쓴 눈물을 흘렸고, 후에 십자가 순교를 당했으므로, 고난에 대한 그의 가르침은 개인적 경험에서 나온 것입니다. "근심할 수밖에 없다"는 표현은 고난의 현실성을 인정하면서도, "크게 기뻐한다"는 현재 시제는 고난이 기쁨을 압도하지 못함을 보여줍니다. 이는 야고보서 1:2의 "시련을 만나거든 온전히 기쁘게 여기라"는 가르침과 일맥상통합니다.'
    },
    korean_translation: {
      natural_translation: '이 모든 것으로 여러분은 크게 기뻐합니다. 비록 지금 잠시 동안 여러 가지 시련으로 근심할 수밖에 없지만 말입니다.'
    },
    special_explanation: {
      explanation_type: '역설적 기독교 기쁨',
      content: '"though"로 도입되는 양보절은 기쁨이 환경에 의존하지 않음을 보여줍니다. 기독교의 기쁨은 정황적(circumstantial)이 아니라 신학적(theological)입니다 - 구원의 확실성에 근거합니다.'
    }
  },

  // 1 Peter 1:7
  {
    reference: '1 Peter 1:7',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '시련의 목적',
        original_text: 'These have come so that the proven genuineness of your faith may result in praise, glory and honor',
        korean_translation: '이 시련들은 여러분의 믿음이 진짜임이 입증되어 칭찬과 영광과 존귀를 얻게 하려고 온 것입니다',
        grammatical_explanation: '목적절(so that)로 시련의 긍정적 목적을 설명'
      },
      {
        sequence_order: 2,
        semantic_classification: '믿음과 금의 비교',
        original_text: 'of greater worth than gold, which perishes even though refined by fire',
        korean_translation: '불로 연단되어도 결국 없어질 금보다 더 귀한',
        grammatical_explanation: '삽입절로 믿음의 가치를 금과 대조'
      },
      {
        sequence_order: 3,
        semantic_classification: '종말론적 완성',
        original_text: 'when Jesus Christ is revealed',
        korean_translation: '예수 그리스도께서 나타나실 때',
        grammatical_explanation: '시간절로 칭찬과 영광을 받을 때를 명시'
      }
    ],
    vocabulary: [
      {
        word: 'genuineness',
        ipa_pronunciation: '/ˈdʒenjuɪnnəs/',
        korean_pronunciation: '제뉴인니스',
        part_of_speech: '명사',
        definition_korean: '진실성, 진짜임'
      },
      {
        word: 'refined',
        ipa_pronunciation: '/rɪˈfaɪnd/',
        korean_pronunciation: '리파인드',
        part_of_speech: '동사(과거분사)',
        definition_korean: '정제된, 연단된'
      },
      {
        word: 'praise',
        ipa_pronunciation: '/preɪz/',
        korean_pronunciation: '프레이즈',
        part_of_speech: '명사',
        definition_korean: '칭찬, 찬양'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '베드로는 금 정제 과정의 비유를 사용합니다. 고대에 금은 불에 녹여 불순물을 제거했습니다. 마찬가지로 시련은 신자의 믿음에서 불순물을 제거하고 진정성을 입증합니다. "입증된 진실성"(dokimion)은 시험을 통과하여 승인받은 것을 의미합니다. 역설적으로, 썩을 금도 불로 정제하는데, 썩지 않을 믿음이 시련으로 연단되는 것은 당연합니다. 이 정제 과정의 최종 목표는 그리스도의 재림 때 칭찬과 영광과 존귀를 받는 것입니다. 세 가지 명사의 나열은 완전한 인정을 강조합니다. 현재의 고난은 미래의 영광을 위한 준비 과정입니다.'
    },
    korean_translation: {
      natural_translation: '이는 여러분의 믿음이 진짜임이 입증되어, 불로 연단되어도 결국 없어질 금보다 더 귀하게 여겨져, 예수 그리스도께서 나타나실 때 칭찬과 영광과 존귀를 얻게 하려는 것입니다.'
    },
    special_explanation: {
      explanation_type: '정제 비유의 신학',
      content: '금 정제 비유는 구약(욥기 23:10, 시편 66:10, 스가랴 13:9)과 신약(야고보서 1:2-3)에 공통적입니다. 이는 고난이 임의적이거나 징벌적이 아니라 정화와 성장을 위한 하나님의 도구임을 가르칩니다.'
    }
  },

  // 1 Peter 1:8
  {
    reference: '1 Peter 1:8',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '보지 못했지만 사랑함',
        original_text: 'Though you have not seen him, you love him',
        korean_translation: '여러분은 그분을 본 적이 없지만 그분을 사랑하며',
        grammatical_explanation: '양보절과 주절의 대조, 현재 시제로 지속적 사랑을 나타냄'
      },
      {
        sequence_order: 2,
        semantic_classification: '보지 못하지만 믿음',
        original_text: 'and even though you do not see him now, you believe in him',
        korean_translation: '지금 보지 못하지만 그분을 믿고',
        grammatical_explanation: '병렬 구조로 첫 번째 문장을 강화'
      },
      {
        sequence_order: 3,
        semantic_classification: '믿음의 결과',
        original_text: 'and are filled with an inexpressible and glorious joy',
        korean_translation: '말로 다 표현할 수 없고 영광스러운 기쁨으로 충만합니다',
        grammatical_explanation: '수동태로 기쁨이 하나님께로부터 온 선물임을 나타냄'
      }
    ],
    vocabulary: [
      {
        word: 'inexpressible',
        ipa_pronunciation: '/ˌɪnɪkˈspresəbl/',
        korean_pronunciation: '이닉스프레서블',
        part_of_speech: '형용사',
        definition_korean: '형언할 수 없는, 말로 표현할 수 없는'
      },
      {
        word: 'glorious',
        ipa_pronunciation: '/ˈɡlɔːriəs/',
        korean_pronunciation: '글로리어스',
        part_of_speech: '형용사',
        definition_korean: '영광스러운, 찬란한'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '베드로는 2세대 그리스도인의 독특한 상황을 다룹니다. 그 자신은 예수님과 3년을 함께 보냈지만, 독자들은 예수님을 직접 본 적이 없습니다. 요한복음 20:29에서 예수님은 부활 후 도마에게 "보지 못하고 믿는 자들은 복되도다"라고 말씀하셨습니다. 1세대 사도들과 달리, 소아시아의 신자들은 육안으로 본 것이 아니라 복음의 증언을 통해 믿었습니다. 그럼에도 그들의 사랑과 믿음은 진실합니다. "형언할 수 없는"(aneklalētos)은 인간의 언어로 완전히 표현할 수 없는 경험을 묘사합니다. "영광스러운"(dedoxasmenē)은 하늘의 영광이 현재 경험 속에 이미 임재함을 시사합니다. 이 기쁨은 감정적 들뜸이 아니라 구원의 확신에서 나오는 깊은 영적 만족입니다.'
    },
    korean_translation: {
      natural_translation: '여러분은 그분을 본 적이 없지만 그분을 사랑하며, 지금 보지 못하지만 그분을 믿고, 말로 다 표현할 수 없고 영광스러운 기쁨으로 충만합니다.'
    },
    special_explanation: {
      explanation_type: '보이지 않는 믿음',
      content: '히브리서 11:1은 "믿음은 바라는 것들의 실상이요 보이지 않는 것들의 증거"라고 정의합니다. 베드로는 이 진리를 독자들의 경험에 적용합니다. 그리스도를 보지 못한 것이 믿음의 장애가 아니라 오히려 믿음의 본질입니다.'
    }
  },

  // 1 Peter 1:9
  {
    reference: '1 Peter 1:9',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '믿음의 목표 달성',
        original_text: 'for you are receiving the end result of your faith, the salvation of your souls',
        korean_translation: '여러분이 믿음의 목표인 영혼의 구원을 받고 있기 때문입니다',
        grammatical_explanation: '8절의 기쁨에 대한 이유 설명, 현재 시제로 구원의 진행성을 나타냄'
      }
    ],
    vocabulary: [
      {
        word: 'end result',
        ipa_pronunciation: '/end rɪˈzʌlt/',
        korean_pronunciation: '엔드 리절트',
        part_of_speech: '명사구',
        definition_korean: '최종 결과, 목표'
      },
      {
        word: 'souls',
        ipa_pronunciation: '/səʊlz/',
        korean_pronunciation: '소울즈',
        part_of_speech: '명사',
        definition_korean: '영혼들'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '"받고 있다"(komizomenoi)의 현재 시제는 구원이 미래의 사건일 뿐 아니라 현재 진행 중인 과정임을 나타냅니다. "목표"(telos)는 단순한 끝이 아니라 목적 있는 완성을 의미합니다. 믿음은 그 자체가 목적이 아니라 구원이라는 목표를 향한 수단입니다. "영혼의 구원"은 전인적 구원을 의미합니다. 헬라어 "psychē"(영혼)는 단순히 영적 부분만이 아니라 전체 인격과 생명을 가리킵니다. 이미 3절에서 언급된 "산 소망"과 5절의 "나타날 구원"이 여기서 "받고 있는" 현재적 경험으로 연결됩니다. 신자들은 미래의 완전한 구원을 기다리면서도 현재 그 구원의 첫 열매를 맛보고 있습니다.'
    },
    korean_translation: {
      natural_translation: '여러분이 믿음의 목표인 영혼의 구원을 받고 있기 때문입니다.'
    },
    special_explanation: {
      explanation_type: '구원의 현재적-미래적 긴장',
      content: '이 구절은 구원론의 "이미"와 "아직"을 잘 보여줍니다. 현재 시제 "받고 있다"는 진행형으로, 구원이 과거에 시작되어(칭의), 현재 진행 중이며(성화), 미래에 완성될(영화) 것임을 암시합니다.'
    }
  },

  // 1 Peter 1:10
  {
    reference: '1 Peter 1:10',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '구원의 대상',
        original_text: 'Concerning this salvation',
        korean_translation: '이 구원에 대하여',
        grammatical_explanation: '전치사구로 새로운 단락 시작, 9절의 구원을 계속 다룸'
      },
      {
        sequence_order: 2,
        semantic_classification: '선지자들의 행위',
        original_text: 'the prophets, who spoke of the grace that was to come to you, searched intently and with the greatest care',
        korean_translation: '선지자들은 여러분에게 임할 은혜를 예언하면서 부지런히 연구하고 살펴보았습니다',
        grammatical_explanation: '관계절로 선지자들을 묘사, 두 개의 동사로 그들의 열심을 강조'
      }
    ],
    vocabulary: [
      {
        word: 'prophets',
        ipa_pronunciation: '/ˈprɒfɪts/',
        korean_pronunciation: '프라핏츠',
        part_of_speech: '명사',
        definition_korean: '선지자들, 예언자들'
      },
      {
        word: 'searched',
        ipa_pronunciation: '/sɜːtʃt/',
        korean_pronunciation: '서치트',
        part_of_speech: '동사(과거)',
        definition_korean: '연구하다, 조사하다'
      },
      {
        word: 'intently',
        ipa_pronunciation: '/ɪnˈtentli/',
        korean_pronunciation: '인텐틀리',
        part_of_speech: '부사',
        definition_korean: '열심히, 부지런히'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '베드로는 구원의 역사적 연속성을 강조합니다. 신약의 구원은 갑작스러운 것이 아니라 구약 선지자들이 예언하고 고대했던 것입니다. "부지런히 연구하고"(exezētēsan)와 "살펴보았다"(exēreunēsan)는 강한 동사로, 선지자들이 자신들의 예언을 깊이 이해하려 애썼음을 나타냅니다. 다니엘서 12:8-9에서 다니엘은 자신의 환상을 완전히 이해하지 못했고, 그 의미가 "마지막 때"까지 봉인되었다고 기록됩니다. 선지자들은 메시아의 고난과 영광(11절), 새 언약, 성령의 부어짐 등을 예언했지만, 그것이 어떻게 성취될지 완전히 알지 못했습니다. 베드로의 독자들은 선지자들보다 특권적 위치에 있습니다 - 그들이 갈망하던 것을 지금 경험하고 있기 때문입니다.'
    },
    korean_translation: {
      natural_translation: '이 구원에 대하여 선지자들은 여러분에게 임할 은혜를 예언하면서 부지런히 연구하고 살펴보았습니다.'
    },
    special_explanation: {
      explanation_type: '계시의 점진성',
      content: '이 구절은 점진적 계시(progressive revelation) 개념을 보여줍니다. 하나님은 역사를 통해 점차적으로 구원 계획을 드러내셨고, 선지자들은 부분적으로 이해했지만, 그리스도 안에서 완전히 계시되었습니다(히브리서 1:1-2).'
    }
  },

  // 1 Peter 1:11
  {
    reference: '1 Peter 1:11',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '선지자들의 탐구',
        original_text: 'trying to find out the time and circumstances to which the Spirit of Christ in them was pointing',
        korean_translation: '그들 안에 계신 그리스도의 영이 가리키시는 때와 상황이 어떠한지 알아내려고 했습니다',
        grammatical_explanation: '10절에서 계속되는 분사구문, 관계절로 성령의 역할을 설명'
      },
      {
        sequence_order: 2,
        semantic_classification: '예언의 내용',
        original_text: 'when he predicted the sufferings of the Messiah and the glories that would follow',
        korean_translation: '그 영이 메시아의 고난과 그 후에 올 영광을 미리 증언하실 때',
        grammatical_explanation: '시간절로 예언의 구체적 내용을 명시'
      }
    ],
    vocabulary: [
      {
        word: 'circumstances',
        ipa_pronunciation: '/ˈsɜːkəmstənsɪz/',
        korean_pronunciation: '서컴스턴시즈',
        part_of_speech: '명사',
        definition_korean: '상황, 정황'
      },
      {
        word: 'predicted',
        ipa_pronunciation: '/prɪˈdɪktɪd/',
        korean_pronunciation: '프리딕티드',
        part_of_speech: '동사(과거)',
        definition_korean: '예언하다, 예측하다'
      },
      {
        word: 'sufferings',
        ipa_pronunciation: '/ˈsʌfərɪŋz/',
        korean_pronunciation: '서퍼링즈',
        part_of_speech: '명사',
        definition_korean: '고난들, 고통들'
      },
      {
        word: 'glories',
        ipa_pronunciation: '/ˈɡlɔːriz/',
        korean_pronunciation: '글로리즈',
        part_of_speech: '명사',
        definition_korean: '영광들'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '이 구절은 구약 선지자들에게 영감을 주신 이가 "그리스도의 영"이었음을 명확히 합니다. 성육신 이전에도 그리스도의 영(곧 성령)이 활동하셨습니다. 선지자들이 알고자 했던 것은 "때"(chronos - 시간)와 "상황"(kairos - 적절한 시기)이었습니다. 예언의 핵심 내용은 메시아의 고난과 영광입니다. 이사야 53장(고난받는 종), 시편 22편(십자가 고통), 스가랴 9:9(겸손한 왕)은 고난을 예언했고, 시편 110편, 다니엘 7:13-14는 영광을 예언했습니다. 유대인들은 두 가지를 조화시키기 어려워했습니다 - 고난받는 메시아와 영광스러운 메시아. 예수님 자신도 엠마오 도상에서 "그리스도가 이런 고난을 받고 자기 영광에 들어가야 할 것이 아니냐"(누가복음 24:26)고 가르치셨습니다. 베드로는 독자들에게 그들의 고난 역시 이 패턴을 따른다고 격려합니다 - 고난 후에 영광이 옵니다.'
    },
    korean_translation: {
      natural_translation: '그들 안에 계신 그리스도의 영이 메시아의 고난과 그 후에 올 영광을 미리 증언하실 때, 그 영이 가리키시는 때와 상황이 어떠한지 알아내려고 했습니다.'
    },
    special_explanation: {
      explanation_type: '고난-영광 패턴',
      content: '고난 후 영광의 패턴은 베드로전서의 핵심 주제입니다(2:21-24, 3:18, 4:13, 5:1, 5:10). 그리스도가 이 패턴을 먼저 걸으셨고, 신자들도 같은 길을 걷습니다. 이는 고난받는 독자들에게 큰 위로가 됩니다.'
    }
  },

  // 1 Peter 1:12
  {
    reference: '1 Peter 1:12',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '선지자들에게 계시된 것',
        original_text: 'It was revealed to them that they were not serving themselves but you',
        korean_translation: '그들은 자신들이 아니라 여러분을 위해 봉사하고 있다는 것이 계시되었습니다',
        grammatical_explanation: '수동태로 하나님의 계시 행위를 나타냄, 대조 구조(자신들 vs 여러분)'
      },
      {
        sequence_order: 2,
        semantic_classification: '예언의 성취',
        original_text: 'when they spoke of the things that have now been told you by those who have preached the gospel to you by the Holy Spirit sent from heaven',
        korean_translation: '그들이 말한 그것들이 지금 하늘에서 보내신 성령으로 여러분에게 복음을 전한 사람들을 통해 여러분에게 전해졌을 때',
        grammatical_explanation: '시간절로 복음 전파를 설명, 성령의 역할 강조'
      },
      {
        sequence_order: 3,
        semantic_classification: '천사들의 관심',
        original_text: 'Even angels long to look into these things',
        korean_translation: '천사들도 이것들을 자세히 살펴보기를 간절히 원합니다',
        grammatical_explanation: '독립절로 구원의 신비로움을 강조'
      }
    ],
    vocabulary: [
      {
        word: 'revealed',
        ipa_pronunciation: '/rɪˈviːld/',
        korean_pronunciation: '리빌드',
        part_of_speech: '동사(과거분사)',
        definition_korean: '계시되다, 드러나다'
      },
      {
        word: 'serving',
        ipa_pronunciation: '/ˈsɜːvɪŋ/',
        korean_pronunciation: '서빙',
        part_of_speech: '동사(현재분사)',
        definition_korean: '섬기다, 봉사하다'
      },
      {
        word: 'angels',
        ipa_pronunciation: '/ˈeɪndʒəlz/',
        korean_pronunciation: '에인절즈',
        part_of_speech: '명사',
        definition_korean: '천사들'
      },
      {
        word: 'long to',
        ipa_pronunciation: '/lɒŋ tuː/',
        korean_pronunciation: '롱 투',
        part_of_speech: '동사구',
        definition_korean: '간절히 원하다, 갈망하다'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '선지자들은 자신들의 예언이 미래 세대를 위한 것임을 알게 되었습니다. 다니엘은 "봉함하라"(다니엘 12:4)는 명령을 받았고, 그 의미는 후대에 밝혀질 것이었습니다. 이제 신약 시대에 복음 전도자들이 성령의 능력으로 그 예언들을 해석하며 전파합니다. 구약 선지자들에게 역사하신 "그리스도의 영"(11절)과 신약 전도자들에게 주신 "하늘에서 보내신 성령"(12절)은 동일한 성령이십니다. "자세히 살펴보다"(parakupsai)는 몸을 굽혀 들여다본다는 뜻으로, 요한복음 20:5에서 베드로가 빈 무덤을 들여다볼 때 같은 단어가 사용되었습니다. 천사들도 구원의 신비를 완전히 이해하지 못하고 깊이 알기를 갈망합니다(에베소서 3:10). 타락을 경험하지 않은 천사들조차 구속의 신비에 놀라워합니다. 이는 구원이 얼마나 영광스러운지를 강조하며, 독자들에게 자신들이 누리는 특권을 깨닫게 합니다.'
    },
    korean_translation: {
      natural_translation: '그들은 자신들이 아니라 여러분을 위해 봉사하고 있다는 것이 계시되었습니다. 그들이 말한 그것들이 지금 하늘에서 보내신 성령으로 여러분에게 복음을 전한 사람들을 통해 여러분에게 전해졌습니다. 천사들도 이것들을 자세히 살펴보기를 간절히 원합니다.'
    },
    special_explanation: {
      explanation_type: '구원사의 특권',
      content: '이 구절은 신약 신자들의 특권적 위치를 강조합니다. 선지자들이 갈망했고, 천사들이 살피기 원하는 구원을 지금 경험하고 있습니다. 마태복음 13:17에서 예수님도 "많은 선지자와 의인이 너희가 보는 것을 보고자 하여도 보지 못하였다"고 말씀하셨습니다.'
    }
  },

  // 1 Peter 1:13
  {
    reference: '1 Peter 1:13',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '결론 및 권면',
        original_text: 'Therefore, with minds that are alert and fully sober',
        korean_translation: '그러므로 정신을 차리고 근신하여',
        grammatical_explanation: '접속부사로 앞의 신학적 논의에서 실천적 권면으로 전환, 분사구로 태도를 설명'
      },
      {
        sequence_order: 2,
        semantic_classification: '명령',
        original_text: 'set your hope on the grace to be brought to you when Jesus Christ is revealed at his coming',
        korean_translation: '예수 그리스도께서 나타나실 때 여러분에게 가져다주실 은혜에 소망을 온전히 두십시오',
        grammatical_explanation: '명령형 동사로 직접적 권면, 시간절로 종말론적 완성을 명시'
      }
    ],
    vocabulary: [
      {
        word: 'alert',
        ipa_pronunciation: '/əˈlɜːt/',
        korean_pronunciation: '얼럿',
        part_of_speech: '형용사',
        definition_korean: '정신을 차린, 깨어 있는'
      },
      {
        word: 'sober',
        ipa_pronunciation: '/ˈsəʊbər/',
        korean_pronunciation: '소버',
        part_of_speech: '형용사',
        definition_korean: '근신하는, 절제하는'
      },
      {
        word: 'hope',
        ipa_pronunciation: '/həʊp/',
        korean_pronunciation: '호프',
        part_of_speech: '명사/동사',
        definition_korean: '소망, 희망'
      },
      {
        word: 'revealed',
        ipa_pronunciation: '/rɪˈviːld/',
        korean_pronunciation: '리빌드',
        part_of_speech: '동사(과거분사)',
        definition_korean: '나타나다, 계시되다'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '"그러므로"(dio)는 1-12절의 신학적 기초에서 13절 이하의 윤리적 적용으로 전환을 표시합니다. "정신을 차리다"(anazōsamenoi)는 문자적으로 "허리띠를 동이다"는 뜻으로, 긴 옷을 입은 사람이 활동하기 위해 허리를 동이는 모습입니다(출애굽기 12:11, 누가복음 12:35). 이는 준비된 상태, 행동할 준비를 의미합니다. "근신하다"(nēphontes)는 술 취하지 않은 정신이 또렷한 상태를 가리키며, 영적 각성과 도덕적 자제력을 의미합니다. "온전히"(teleiōs)는 완전하게, 전적으로라는 뜻입니다. 소망은 부분적이거나 나뉘어서는 안 되고, 전적으로 그리스도께 향해야 합니다. 이 소망의 대상은 그리스도의 재림 때 가져올 은혜입니다. 3절의 "산 소망"이 여기서 실천적 명령으로 구체화됩니다. 박해받는 상황에서 세상의 위협에 굴복하거나 두려워하지 말고, 오직 미래의 영광에 소망을 두라는 권면입니다.'
    },
    korean_translation: {
      natural_translation: '그러므로 정신을 차리고 근신하여, 예수 그리스도께서 나타나실 때 여러분에게 가져다주실 은혜에 소망을 온전히 두십시오.'
    },
    special_explanation: {
      explanation_type: '신학에서 윤리로의 전환',
      content: '베드로전서는 교리(1:3-12)를 먼저 제시한 후 윤리(1:13-)로 전환하는 전형적인 신약 서신 구조를 따릅니다. "그러므로"는 신학적 직설법(하나님이 하신 일)이 윤리적 명령법(우리가 해야 할 일)의 근거임을 보여줍니다. 은혜가 먼저, 순종이 그 다음입니다.'
    }
  }
]

async function main() {
  console.log('1 Peter 1:4-13 분석 결과 저장 시작...\n')

  for (const analysis of analyses) {
    const success = await saveAnalysisToDb(analysis)
    if (!success) {
      console.error(`${analysis.reference} 저장 실패`)
      process.exit(1)
    }
    // Rate limiting
    await new Promise(resolve => setTimeout(resolve, 3000))
  }

  console.log('\n✅ 모든 분석 결과 저장 완료!')
}

main()
