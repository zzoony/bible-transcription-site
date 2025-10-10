import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

const analyses: AnalysisData[] = [
  // Colossians 3:14
  {
    reference: 'Colossians 3:14',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '명령 - 사랑의 우선성',
        original_text: 'And over all these virtues put on love',
        korean_translation: '이 모든 덕목 위에 사랑을 입으십시오',
        grammatical_explanation: '명령문. "put on"은 옷을 입듯이 사랑을 입으라는 의미의 은유적 표현. "over all these virtues"는 앞서 언급된 모든 덕목들 위에 더한다는 의미.'
      },
      {
        sequence_order: 2,
        semantic_classification: '사랑의 기능 설명',
        original_text: 'which binds them all together in perfect unity',
        korean_translation: '사랑은 이 모든 것을 완전한 연합으로 묶어줍니다',
        grammatical_explanation: '관계절. "which"는 "love"를 가리킴. "binds together"는 하나로 묶는다는 의미. "in perfect unity"는 완전한 연합 안에서.'
      }
    ],
    vocabulary: [
      {
        word: 'virtues',
        ipa_pronunciation: '/ˈvɜːrtʃuːz/',
        korean_pronunciation: '버츄즈',
        definition_korean: '덕목, 미덕'
      },
      {
        word: 'put on',
        ipa_pronunciation: '/pʊt ɒn/',
        korean_pronunciation: '풋 온',
        definition_korean: '입다, 착용하다'
      },
      {
        word: 'binds',
        ipa_pronunciation: '/baɪndz/',
        korean_pronunciation: '바인즈',
        definition_korean: '묶다, 결속하다'
      },
      {
        word: 'unity',
        ipa_pronunciation: '/ˈjuːnəti/',
        korean_pronunciation: '유니티',
        definition_korean: '연합, 일치'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 앞서 골로새서 3:12-13에서 그리스도인이 입어야 할 다양한 덕목들(긍휼, 자비, 겸손, 온유, 오래 참음, 용서)을 나열했습니다. 이제 14절에서는 그 모든 덕목들 위에 가장 중요한 것으로 사랑을 강조합니다. "옷을 입다"라는 은유는 3:12에서 시작된 이미지를 계속 이어가며, 사랑은 모든 다른 덕목들을 하나로 묶어주는 띠와 같은 역할을 합니다. 고대 의복에서 띠는 옷의 모든 부분을 함께 고정시키는 역할을 했듯이, 사랑은 그리스도인 공동체의 모든 덕목들을 완전한 조화 속에 하나로 묶어줍니다. 이는 고린도전서 13장에서 사랑을 가장 큰 덕으로 제시한 바울의 신학과 일치합니다.'
    },
    korean_translation: {
      natural_translation: '이 모든 덕목 위에 사랑을 입으십시오. 사랑은 이 모든 것을 완전한 연합으로 묶어줍니다.'
    },
    special_explanation: {
      explanation_type: '언어적/신학적 설명',
      content: '"put on"(입으라)는 헬라어 "엔뒤사스테"(ἐνδύσασθε)의 번역으로, 3:12에서도 사용된 동일한 동사입니다. 이는 의도적이고 능동적인 행위를 나타내는 부정과거 명령형입니다. "perfect unity"는 직역하면 "완전함의 띠"로, 사랑이 모든 덕목들을 완전하게 만드는 결속의 역할을 한다는 의미입니다. 일부 학자들은 대제사장의 의복에 있던 띠를 연상시킨다고 해석하기도 합니다.'
    }
  },

  // Colossians 3:15
  {
    reference: 'Colossians 3:15',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '명령 - 그리스도의 평강의 통치',
        original_text: 'Let the peace of Christ rule in your hearts',
        korean_translation: '그리스도의 평강이 여러분의 마음을 다스리게 하십시오',
        grammatical_explanation: '명령문. "let...rule"은 평강이 심판자나 중재자 역할을 하도록 허락하라는 의미. "in your hearts"는 마음 안에서.'
      },
      {
        sequence_order: 2,
        semantic_classification: '이유 설명 - 부르심의 목적',
        original_text: 'since as members of one body you were called to peace',
        korean_translation: '여러분은 한 몸의 지체로 부르심을 받아 평강을 누리게 되었습니다',
        grammatical_explanation: '원인절. "since"는 이유를 나타냄. "as members of one body"는 한 몸의 지체로서. 수동태 "were called"는 하나님의 부르심을 나타냄.'
      },
      {
        sequence_order: 3,
        semantic_classification: '명령 - 감사',
        original_text: 'And be thankful',
        korean_translation: '그리고 감사하는 사람이 되십시오',
        grammatical_explanation: '간결한 명령문. 현재 명령형으로 지속적인 감사의 태도를 요구함.'
      }
    ],
    vocabulary: [
      {
        word: 'peace',
        ipa_pronunciation: '/piːs/',
        korean_pronunciation: '피스',
        definition_korean: '평강, 평화'
      },
      {
        word: 'rule',
        ipa_pronunciation: '/ruːl/',
        korean_pronunciation: '룰',
        definition_korean: '통치하다, 지배하다, 심판하다'
      },
      {
        word: 'members',
        ipa_pronunciation: '/ˈmembərz/',
        korean_pronunciation: '멤버즈',
        definition_korean: '지체, 구성원'
      },
      {
        word: 'called',
        ipa_pronunciation: '/kɔːld/',
        korean_pronunciation: '콜드',
        definition_korean: '부름받은'
      },
      {
        word: 'thankful',
        ipa_pronunciation: '/ˈθæŋkfəl/',
        korean_pronunciation: '땡크풀',
        definition_korean: '감사하는'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 사랑에 이어 평강과 감사를 강조합니다. "그리스도의 평강"은 단순히 갈등이 없는 상태가 아니라, 그리스도께서 주시는 초자연적인 평안을 의미합니다. "통치하다"(rule)로 번역된 헬라어 단어는 "브라뷰에토"(βραβευέτω)로, 경기에서 심판이 결정을 내리는 것을 가리킵니다. 즉, 그리스도의 평강이 우리 마음에서 최종 판단자 역할을 하도록 해야 합니다. "한 몸의 지체"라는 표현은 교회의 연합을 강조하며, 이는 에베소서 4:4에서도 나타나는 바울의 핵심 신학입니다. 감사는 골로새서에서 반복되는 주제로(1:3, 12; 2:7; 3:17; 4:2), 그리스도인의 삶의 특징이어야 합니다.'
    },
    korean_translation: {
      natural_translation: '그리스도의 평강이 여러분의 마음을 다스리게 하십시오. 여러분은 한 몸의 지체로 부르심을 받아 평강을 누리게 되었습니다. 그리고 감사하는 사람이 되십시오.'
    },
    special_explanation: {
      explanation_type: '언어적/신학적 설명',
      content: '"rule"로 번역된 헬라어 "브라뷰에토"는 신약에서 이곳에만 나타나는 독특한 단어입니다. 이는 운동 경기에서 심판이 승자를 선언하거나 분쟁을 해결하는 것을 의미했습니다. 따라서 그리스도의 평강이 우리 마음의 갈등 상황에서 최종 심판자 역할을 해야 한다는 의미입니다. "한 몸"이라는 표현은 교회론적으로 중요한데, 그리스도를 머리로 한 교회 공동체의 유기적 연합을 강조합니다.'
    }
  },

  // Colossians 3:16
  {
    reference: 'Colossians 3:16',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '명령 - 그리스도의 말씀이 풍성히 거하게 함',
        original_text: 'Let the message of Christ dwell among you richly',
        korean_translation: '그리스도의 말씀이 여러분 가운데 풍성히 거하게 하십시오',
        grammatical_explanation: '명령문. "let...dwell"은 말씀이 내주하도록 허락하라는 의미. "richly"는 풍성하게, 충만하게.'
      },
      {
        sequence_order: 2,
        semantic_classification: '말씀이 거하는 방식 - 가르침과 권면',
        original_text: 'as you teach and admonish one another with all wisdom',
        korean_translation: '모든 지혜로 서로 가르치고 권면하며',
        grammatical_explanation: '방법을 나타내는 분사구문. "teach"와 "admonish"는 현재 분사. "with all wisdom"은 모든 지혜로.'
      },
      {
        sequence_order: 3,
        semantic_classification: '가르침의 수단 - 찬양',
        original_text: 'through psalms, hymns, and songs from the Spirit',
        korean_translation: '시편과 찬송과 영적인 노래로',
        grammatical_explanation: '전치사구. "through"는 수단을 나타냄. 세 가지 유형의 노래를 나열.'
      },
      {
        sequence_order: 4,
        semantic_classification: '찬양의 방식 - 감사함으로',
        original_text: 'singing to God with gratitude in your hearts',
        korean_translation: '마음에 감사함으로 하나님께 찬양하십시오',
        grammatical_explanation: '분사구문. "singing"은 현재 분사. "with gratitude in your hearts"는 마음의 감사로.'
      }
    ],
    vocabulary: [
      {
        word: 'message',
        ipa_pronunciation: '/ˈmesɪdʒ/',
        korean_pronunciation: '메시지',
        definition_korean: '말씀, 메시지'
      },
      {
        word: 'dwell',
        ipa_pronunciation: '/dwel/',
        korean_pronunciation: '드웰',
        definition_korean: '거하다, 내주하다'
      },
      {
        word: 'richly',
        ipa_pronunciation: '/ˈrɪtʃli/',
        korean_pronunciation: '리치리',
        definition_korean: '풍성하게, 충만하게'
      },
      {
        word: 'admonish',
        ipa_pronunciation: '/ədˈmɒnɪʃ/',
        korean_pronunciation: '어드머니쉬',
        definition_korean: '권면하다, 훈계하다'
      },
      {
        word: 'psalms',
        ipa_pronunciation: '/sɑːmz/',
        korean_pronunciation: '삼즈',
        definition_korean: '시편, 찬송시'
      },
      {
        word: 'hymns',
        ipa_pronunciation: '/hɪmz/',
        korean_pronunciation: '힘즈',
        definition_korean: '찬송가'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '이 구절은 초대 교회의 예배와 공동체 생활을 엿볼 수 있는 중요한 본문입니다. "그리스도의 말씀"은 그리스도에 관한 복음 메시지이자 그리스도께서 주신 가르침을 의미합니다. 이 말씀이 "풍성히 거한다"는 것은 단순히 성경을 읽는 것을 넘어, 말씀이 공동체 안에서 살아 움직이며 넘치도록 충만해야 함을 의미합니다. 가르침과 권면은 상호적입니다("서로"). 초대 교회에서는 시편(구약의 시편), 찬송(그리스도를 찬양하는 새로운 노래), 영가(성령의 감동으로 부르는 즉흥적 노래)가 모두 사용되었습니다. 에베소서 5:18-19에도 유사한 내용이 나오는데, 이는 성령 충만과 말씀 충만이 밀접히 연결되어 있음을 보여줍니다.'
    },
    korean_translation: {
      natural_translation: '그리스도의 말씀이 여러분 가운데 풍성히 거하게 하십시오. 모든 지혜로 서로 가르치고 권면하며, 시편과 찬송과 영적인 노래로 마음에 감사함으로 하나님께 찬양하십시오.'
    },
    special_explanation: {
      explanation_type: '역사적/언어적 설명',
      content: '이 구절은 초대 교회 예배의 요소들을 보여줍니다. "시편"(psalms)은 구약 시편을 가리키고, "찬송"(hymns)은 그리스도를 찬양하는 구조화된 노래를, "영가"(songs from the Spirit)는 성령의 감동으로 부르는 더 자유로운 형태의 노래를 의미합니다. 일부 사본에는 "from the Spirit" 대신 "spiritual"(영적인)로 되어 있습니다. "마음에"(in your hearts)는 외적 형식보다 내적 진실성을 강조합니다.'
    }
  },

  // Colossians 3:17
  {
    reference: 'Colossians 3:17',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '포괄적 범위 설정 - 모든 행동',
        original_text: 'And whatever you do, whether in word or deed',
        korean_translation: '여러분이 무엇을 하든지, 말로 하든 행동으로 하든',
        grammatical_explanation: '양보절. "whatever"는 무엇이든지. "whether...or"는 선택의 전체 범위를 나타냄.'
      },
      {
        sequence_order: 2,
        semantic_classification: '명령 - 주 예수의 이름으로',
        original_text: 'do it all in the name of the Lord Jesus',
        korean_translation: '모든 것을 주 예수의 이름으로 하고',
        grammatical_explanation: '명령문. "in the name of"는 권위와 대표성을 나타내는 관용구.'
      },
      {
        sequence_order: 3,
        semantic_classification: '방식 설명 - 감사하며',
        original_text: 'giving thanks to God the Father through him',
        korean_translation: '그분을 통하여 하나님 아버지께 감사하십시오',
        grammatical_explanation: '분사구문. "giving thanks"는 동시적 행위를 나타냄. "through him"은 중보자로서의 예수.'
      }
    ],
    vocabulary: [
      {
        word: 'whatever',
        ipa_pronunciation: '/wɒtˈevər/',
        korean_pronunciation: '왓에버',
        definition_korean: '무엇이든지'
      },
      {
        word: 'deed',
        ipa_pronunciation: '/diːd/',
        korean_pronunciation: '디드',
        definition_korean: '행동, 행위'
      },
      {
        word: 'in the name of',
        ipa_pronunciation: '/ɪn ðə neɪm ɒv/',
        korean_pronunciation: '인 더 네임 오브',
        definition_korean: '~의 이름으로, ~을 대표하여'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 이제 그리스도인의 삶 전체를 포괄하는 원리를 제시합니다. "말이나 행동이나"는 인간 활동의 전체를 아우르는 표현으로, 삶의 모든 영역이 거룩해야 함을 강조합니다. "주 예수의 이름으로"라는 표현은 단순히 "예수의 이름을 말하며"가 아니라, 예수의 권위 아래, 예수를 대표하여, 예수와의 관계 속에서 행하라는 의미입니다. 이는 성속을 구분하지 않는 통전적 신앙을 강조합니다. 모든 일상적 행위가 예배가 될 수 있습니다.'
    },
    korean_translation: {
      natural_translation: '여러분이 무엇을 하든지, 말로 하든 행동으로 하든, 모든 것을 주 예수의 이름으로 하고, 그분을 통하여 하나님 아버지께 감사하십시오.'
    },
    special_explanation: {
      explanation_type: '신학적 설명',
      content: '이 구절은 성속 이원론을 거부하는 중요한 신학적 진술입니다. "주 예수의 이름으로"는 단순한 공식이 아니라, 예수의 주권 아래 살며, 그분의 품성을 반영하고, 그분의 영광을 위해 산다는 포괄적 의미입니다. "through him"(그를 통하여)은 그리스도의 중보 사역을 나타내며, 우리의 모든 감사와 예배가 그리스도를 통해서만 하나님께 상달됨을 강조합니다.'
    }
  },

  // Colossians 3:18
  {
    reference: 'Colossians 3:18',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '명령 - 아내의 순종',
        original_text: 'Wives, submit yourselves to your husbands',
        korean_translation: '아내들은 남편에게 순종하십시오',
        grammatical_explanation: '명령문. "submit"은 자발적 복종을 의미하는 중간태 동사.'
      },
      {
        sequence_order: 2,
        semantic_classification: '순종의 근거 - 주 안에서 합당함',
        original_text: 'as is fitting in the Lord',
        korean_translation: '주 안에서 마땅히 해야 할 바와 같이',
        grammatical_explanation: '비교절. "as"는 방식을 나타냄. "fitting"은 적합한, 합당한.'
      }
    ],
    vocabulary: [
      {
        word: 'wives',
        ipa_pronunciation: '/waɪvz/',
        korean_pronunciation: '와입즈',
        definition_korean: '아내들'
      },
      {
        word: 'submit',
        ipa_pronunciation: '/səbˈmɪt/',
        korean_pronunciation: '서브밋',
        definition_korean: '복종하다, 순종하다'
      },
      {
        word: 'fitting',
        ipa_pronunciation: '/ˈfɪtɪŋ/',
        korean_pronunciation: '피팅',
        definition_korean: '적합한, 합당한'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '여기서부터 3:18-4:1까지는 "가정 규칙"(Haustafel, household code)이라 불리는 부분입니다. 이는 고대 그리스-로마 세계에서 흔한 문학 형식으로, 가정의 각 구성원에게 주는 윤리적 지침입니다. 바울은 이 전통적 형식을 차용하되, "주 안에서"라는 그리스도교적 틀 안에 재해석합니다. "순종하다"로 번역된 헬라어 "휘포타쎄테"는 군사 용어에서 유래했지만, 여기서는 자발적이고 사랑 안에서의 질서를 의미합니다.'
    },
    korean_translation: {
      natural_translation: '아내들은 주 안에서 마땅히 해야 할 바와 같이 남편에게 순종하십시오.'
    },
    special_explanation: {
      explanation_type: '신학적/문화적 설명',
      content: '"submit"(휘포탓쎄스테)은 중간태 동사로, 외부의 강요가 아닌 자발적 선택을 나타냅니다. "주 안에서"라는 한정은 이 순종이 절대적이지 않고, 그리스도의 주권 아래 있음을 의미합니다. 에베소서 5:21에서는 먼저 "그리스도를 경외함으로 서로 복종하라"고 말하며 상호 복종의 원리를 제시합니다.'
    }
  },

  // Colossians 3:19
  {
    reference: 'Colossians 3:19',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '명령 - 남편의 사랑',
        original_text: 'Husbands, love your wives',
        korean_translation: '남편들은 아내를 사랑하고',
        grammatical_explanation: '명령문. 현재 명령형으로 지속적 사랑을 요구.'
      },
      {
        sequence_order: 2,
        semantic_classification: '금지 명령 - 가혹함 금지',
        original_text: 'and do not be harsh with them',
        korean_translation: '그들에게 가혹하게 대하지 마십시오',
        grammatical_explanation: '부정 명령문. "be harsh"는 쓴맛, 가혹함을 의미.'
      }
    ],
    vocabulary: [
      {
        word: 'husbands',
        ipa_pronunciation: '/ˈhʌzbəndz/',
        korean_pronunciation: '허즈번즈',
        definition_korean: '남편들'
      },
      {
        word: 'love',
        ipa_pronunciation: '/lʌv/',
        korean_pronunciation: '러브',
        definition_korean: '사랑하다'
      },
      {
        word: 'harsh',
        ipa_pronunciation: '/hɑːʃ/',
        korean_pronunciation: '하쉬',
        definition_korean: '가혹한, 거친'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 남편들에게 아내를 사랑하라고 명령합니다. 이는 당시 가부장적 문화에서 혁명적인 가르침이었습니다. "사랑하라"는 헬라어 "아가파테"는 희생적이고 자기를 내어주는 사랑을 의미합니다. "가혹하게 대하지 말라"는 부정 명령은 권위를 남용하거나 쓴소리로 대하지 말라는 경고입니다. 에베소서 5:25에서는 더 구체적으로 "그리스도께서 교회를 사랑하신 것같이"라는 모델을 제시합니다.'
    },
    korean_translation: {
      natural_translation: '남편들은 아내를 사랑하고, 그들에게 가혹하게 대하지 마십시오.'
    },
    special_explanation: {
      explanation_type: '언어적/신학적 설명',
      content: '"사랑하라"(아가파테)는 신약에서 하나님의 사랑을 묘사할 때 사용되는 단어로, 감정적 끌림을 넘어 의지적이고 희생적인 헌신을 의미합니다. "가혹하게 대하지 말라"의 헬라어 "피크라이네스테"는 문자적으로 "쓴맛이 되게 하지 말라"는 의미로, 분노나 냉소적 태도로 아내의 영혼을 상하게 하지 말라는 것입니다.'
    }
  },

  // Colossians 3:20
  {
    reference: 'Colossians 3:20',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '명령 - 자녀의 순종',
        original_text: 'Children, obey your parents in everything',
        korean_translation: '자녀들은 모든 일에 부모에게 순종하십시오',
        grammatical_explanation: '명령문. "in everything"은 모든 일에서, 전면적 순종.'
      },
      {
        sequence_order: 2,
        semantic_classification: '순종의 이유 - 주를 기쁘시게 함',
        original_text: 'for this pleases the Lord',
        korean_translation: '이것이 주를 기쁘시게 하는 일입니다',
        grammatical_explanation: '원인절. "for"는 이유를 나타냄. "pleases"는 기쁘게 하다.'
      }
    ],
    vocabulary: [
      {
        word: 'children',
        ipa_pronunciation: '/ˈtʃɪldrən/',
        korean_pronunciation: '칠드런',
        definition_korean: '자녀들, 아이들'
      },
      {
        word: 'obey',
        ipa_pronunciation: '/əˈbeɪ/',
        korean_pronunciation: '오베이',
        definition_korean: '순종하다, 복종하다'
      },
      {
        word: 'pleases',
        ipa_pronunciation: '/ˈpliːzɪz/',
        korean_pronunciation: '플리지즈',
        definition_korean: '기쁘게 하다'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '자녀들에게 주는 명령은 십계명의 다섯 번째 계명(출애굽기 20:12, "네 부모를 공경하라")을 반영합니다. "순종하다"(휘파쿠에테)는 듣고 따르는 것을 의미합니다. "모든 일에"라는 포괄적 표현은 전면적 순종을 요구하지만, 이는 "주 안에서"라는 전제 아래 있습니다. 순종의 동기는 단순히 부모를 기쁘게 하는 것이 아니라 "주를 기쁘시게 하는 것"입니다.'
    },
    korean_translation: {
      natural_translation: '자녀들은 모든 일에 부모에게 순종하십시오. 이것이 주를 기쁘시게 하는 일입니다.'
    },
    special_explanation: {
      explanation_type: '언어적/신학적 설명',
      content: '"순종하라"(휘파쿠에테)는 18절의 아내에게 사용된 "복종하라"(휘포탓쎄스테)와 다른 단어입니다. 휘파쿠에테는 더 직접적인 순종을 의미하며, 군대에서 명령에 따르는 것을 연상시킵니다. "모든 일에"는 제한이 없는 것처럼 보이지만, 에베소서 6:1의 평행 구절은 "주 안에서"라는 한정을 추가합니다.'
    }
  },

  // Colossians 3:21
  {
    reference: 'Colossians 3:21',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '금지 명령 - 자녀를 낙심시키지 말 것',
        original_text: 'Fathers, do not embitter your children',
        korean_translation: '아버지들은 자녀를 괴롭히지 마십시오',
        grammatical_explanation: '부정 명령문. "embitter"는 분노하게 하다, 낙심시키다.'
      },
      {
        sequence_order: 2,
        semantic_classification: '결과 설명 - 낙심의 위험',
        original_text: 'or they will become discouraged',
        korean_translation: '그러면 그들이 낙심하게 됩니다',
        grammatical_explanation: '조건절. "or"는 그렇지 않으면. "become discouraged"는 의기소침해지다.'
      }
    ],
    vocabulary: [
      {
        word: 'fathers',
        ipa_pronunciation: '/ˈfɑːðərz/',
        korean_pronunciation: '파더즈',
        definition_korean: '아버지들'
      },
      {
        word: 'embitter',
        ipa_pronunciation: '/ɪmˈbɪtər/',
        korean_pronunciation: '임비터',
        definition_korean: '괴롭히다, 분노하게 하다'
      },
      {
        word: 'discouraged',
        ipa_pronunciation: '/dɪsˈkʌrɪdʒd/',
        korean_pronunciation: '디스커리지드',
        definition_korean: '낙심한, 의기소침한'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 자녀의 순종 명령에 이어 아버지들에게 균형잡힌 권면을 합니다. "괴롭히지 말라"는 헬라어 "에레티제테"는 자녀를 자극하여 분노나 좌절감을 일으키지 말라는 의미입니다. 과도한 요구, 일관성 없는 훈육, 편애, 냉소적 비판 등이 이에 해당할 수 있습니다. "낙심하다"(아튀메오)는 영혼이 꺾이고 의욕을 잃는 상태를 가리킵니다.'
    },
    korean_translation: {
      natural_translation: '아버지들은 자녀를 괴롭히지 마십시오. 그러면 그들이 낙심하게 됩니다.'
    },
    special_explanation: {
      explanation_type: '언어적/문화적 설명',
      content: '"괴롭히다"(에레티제테)는 문자적으로 "자극하다, 도발하다"는 의미로, 불필요한 비판이나 과도한 요구로 자녀의 감정을 상하게 하는 것을 가리킵니다. "낙심하다"(아튀메오)는 신약에서 이곳에만 나타나는 단어로, 용기를 잃고 영혼이 꺾이는 상태를 묘사합니다.'
    }
  },

  // Colossians 3:22
  {
    reference: 'Colossians 3:22',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '명령 - 종의 순종',
        original_text: 'Slaves, obey your earthly masters in everything',
        korean_translation: '종들은 모든 일에 육신의 주인들에게 순종하십시오',
        grammatical_explanation: '명령문. "earthly masters"는 육신의 주인들, 지상의 주인들.'
      },
      {
        sequence_order: 2,
        semantic_classification: '순종의 잘못된 방식 - 눈가림 봉사',
        original_text: 'and do it, not only when their eye is on you and to curry their favor',
        korean_translation: '눈가림으로 사람을 기쁘게 하는 자처럼 하지 말고',
        grammatical_explanation: '부정 명령문. "curry favor"는 아첨하다, 환심을 사다.'
      },
      {
        sequence_order: 3,
        semantic_classification: '순종의 올바른 방식 - 진실한 마음과 주를 경외함',
        original_text: 'but with sincerity of heart and reverence for the Lord',
        korean_translation: '주를 경외하는 마음으로 진실하게 하십시오',
        grammatical_explanation: '대조절. "but"은 대조. "sincerity of heart"는 마음의 진실함.'
      }
    ],
    vocabulary: [
      {
        word: 'slaves',
        ipa_pronunciation: '/sleɪvz/',
        korean_pronunciation: '슬레입즈',
        definition_korean: '종들, 노예들'
      },
      {
        word: 'earthly masters',
        ipa_pronunciation: '/ˈɜːθli ˈmɑːstərz/',
        korean_pronunciation: '어쓸리 마스터즈',
        definition_korean: '육신의 주인들, 지상의 주인들'
      },
      {
        word: 'sincerity',
        ipa_pronunciation: '/sɪnˈserəti/',
        korean_pronunciation: '신세러티',
        definition_korean: '성실, 진실'
      },
      {
        word: 'reverence',
        ipa_pronunciation: '/ˈrevərəns/',
        korean_pronunciation: '레버런스',
        definition_korean: '경외, 공경'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '고대 로마 제국에서 인구의 약 1/3이 노예였으며, 초대 교회에도 많은 노예 신자들이 있었습니다. 바울은 노예 제도 자체를 직접 공격하지 않고, 노예들의 노동 윤리를 그리스도교적으로 재해석합니다. "육신의 주인들"이라는 표현은 진정한 주인이 따로 있음(주 예수)을 암시합니다. "눈가림 봉사"는 주인이 볼 때만 일하는 태도를, "사람을 기쁘게 하는 자"는 진심 없이 아첨하는 태도를 가리킵니다.'
    },
    korean_translation: {
      natural_translation: '종들은 모든 일에 육신의 주인들에게 순종하십시오. 눈가림으로 사람을 기쁘게 하는 자처럼 하지 말고, 주를 경외하는 마음으로 진실하게 하십시오.'
    },
    special_explanation: {
      explanation_type: '언어적/역사적/신학적 설명',
      content: '"눈가림 봉사"(ophthalmodoulos)는 문자적으로 "눈-종"이라는 합성어로, 신약에서 바울만 사용합니다. 이는 주인이 볼 때만 열심히 하는 위선적 태도를 비판합니다. "마음의 진실함"(haplotes kardias)의 "하플로테스"는 "단순함, 순수함, 관대함"을 의미하며, 이중성 없는 순수한 마음가짐을 강조합니다.'
    }
  },

  // Colossians 3:23
  {
    reference: 'Colossians 3:23',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '명령 - 온 마음을 다한 일',
        original_text: 'Whatever you do, work at it with all your heart',
        korean_translation: '무엇을 하든지 마음을 다하여',
        grammatical_explanation: '명령문. "whatever you do"는 포괄적 범위. "with all your heart"는 온 마음을 다해.'
      },
      {
        sequence_order: 2,
        semantic_classification: '일의 동기와 대상 - 주님을 위함',
        original_text: 'as working for the Lord, not for human masters',
        korean_translation: '주님을 위하여 하고, 사람을 위하여 하지 마십시오',
        grammatical_explanation: '비교절. "as"는 방식. "not for...but for" 대조 구조.'
      }
    ],
    vocabulary: [
      {
        word: 'work at',
        ipa_pronunciation: '/wɜːk æt/',
        korean_pronunciation: '워크 앳',
        definition_korean: '일하다, 힘쓰다'
      },
      {
        word: 'with all your heart',
        ipa_pronunciation: '/wɪð ɔːl jɔːr hɑːrt/',
        korean_pronunciation: '위드 올 유어 하트',
        definition_korean: '온 마음을 다하여'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 노예들의 노동을 영적 차원으로 끌어올립니다. "무엇을 하든지"는 3:17의 포괄적 원리를 반복하며, 모든 일상적 노동이 거룩할 수 있음을 강조합니다. "온 마음을 다하여"는 문자적으로 "영혼으로부터"라는 의미로, 외적 의무 이상의 내적 헌신을 요구합니다. 핵심은 관점의 전환입니다. 노예가 지상의 주인을 위해 일하는 것이 아니라, 하늘의 주인(주 예수)을 위해 일한다고 보는 것입니다.'
    },
    korean_translation: {
      natural_translation: '무엇을 하든지 마음을 다하여 주님을 위하여 하고, 사람을 위하여 하지 마십시오.'
    },
    special_explanation: {
      explanation_type: '신학적 설명',
      content: '"온 마음을 다하여"(에크 프쉬케스)의 "프쉬케"는 생명, 영혼, 자아를 의미하며, 단순한 외적 행위를 넘어 전인격적 헌신을 나타냅니다. 이는 억압적 현실을 정당화하는 것이 아니라, 현재 상황 속에서도 영적 자유와 존엄을 유지하는 방법을 제시합니다.'
    }
  },

  // Colossians 3:24
  {
    reference: 'Colossians 3:24',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '동기 제공 - 상급의 약속',
        original_text: 'since you know that you will receive an inheritance from the Lord as a reward',
        korean_translation: '여러분은 주님으로부터 상급으로 유산을 받을 줄 압니다',
        grammatical_explanation: '원인절. "since"는 이유. "will receive"는 미래 시제. "inheritance"는 유산, 기업.'
      },
      {
        sequence_order: 2,
        semantic_classification: '재확인 - 진정한 주인',
        original_text: 'It is the Lord Christ you are serving',
        korean_translation: '여러분은 주 그리스도를 섬기고 있는 것입니다',
        grammatical_explanation: '강조 구문. 도치 구조로 "the Lord Christ"를 강조.'
      }
    ],
    vocabulary: [
      {
        word: 'inheritance',
        ipa_pronunciation: '/ɪnˈherɪtəns/',
        korean_pronunciation: '인헤리턴스',
        definition_korean: '유산, 기업'
      },
      {
        word: 'reward',
        ipa_pronunciation: '/rɪˈwɔːrd/',
        korean_pronunciation: '리워드',
        definition_korean: '보상, 상급'
      },
      {
        word: 'serving',
        ipa_pronunciation: '/ˈsɜːrvɪŋ/',
        korean_pronunciation: '서빙',
        definition_korean: '섬기는'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 노예들에게 놀라운 약속을 제시합니다. 로마 사회에서 노예는 재산을 소유할 수 없었고 유산을 물려받을 수도 없었습니다. 그러나 바울은 그리스도 안에서 노예도 "기업"을 받을 것이라고 선언합니다. 이 기업은 구약에서 이스라엘 백성이 가나안 땅을 기업으로 받은 것을 연상시키며, 신약에서는 영원한 하늘의 기업을 의미합니다. "상급"은 노동에 대한 정당한 대가를 의미하며, 지상의 주인은 주지 못하지만 하늘의 주인은 반드시 주실 것입니다.'
    },
    korean_translation: {
      natural_translation: '여러분은 주님으로부터 상급으로 유산을 받을 줄 압니다. 여러분은 주 그리스도를 섬기고 있는 것입니다.'
    },
    special_explanation: {
      explanation_type: '신학적/언어적 설명',
      content: '"기업"(클레로노미아)은 구약에서 하나님이 이스라엘에게 주신 약속의 땅을 가리키는 중요한 신학적 용어입니다. 노예는 지상에서 아무것도 소유할 수 없지만, 하늘에서는 상속자입니다. "주 그리스도"는 정관사와 함께 사용되어, "바로 그 주인이신 그리스도"라는 강한 강조를 나타냅니다.'
    }
  },

  // Colossians 3:25
  {
    reference: 'Colossians 3:25',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '경고 - 불의에 대한 보응',
        original_text: 'Anyone who does wrong will be repaid for their wrongs',
        korean_translation: '불의를 행하는 자는 그 불의대로 보응을 받을 것입니다',
        grammatical_explanation: '조건문. "anyone who"는 일반적 조건. 수동태 "will be repaid"는 하나님의 심판을 암시.'
      },
      {
        sequence_order: 2,
        semantic_classification: '공의의 원리 - 편애 없음',
        original_text: 'and there is no favoritism',
        korean_translation: '하나님께는 편파적인 대우가 없습니다',
        grammatical_explanation: '부가 설명. "favoritism"은 편파적 대우, 차별.'
      }
    ],
    vocabulary: [
      {
        word: 'does wrong',
        ipa_pronunciation: '/dʌz rɒŋ/',
        korean_pronunciation: '더즈 롱',
        definition_korean: '불의를 행하다'
      },
      {
        word: 'repaid',
        ipa_pronunciation: '/rɪˈpeɪd/',
        korean_pronunciation: '리페이드',
        definition_korean: '보응받다, 갚음을 받다'
      },
      {
        word: 'favoritism',
        ipa_pronunciation: '/ˈfeɪvərɪtɪzəm/',
        korean_pronunciation: '페이버리티즘',
        definition_korean: '편애, 편파'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 노예들에게 위로와 약속을 준 후, 이제 경고로 균형을 맞춥니다. "불의를 행하는 자"는 일차적으로 노예들을 향한 경고지만, 동시에 주인들에게도 적용됩니다. 노예가 일을 게을리하거나 도둑질하면 하나님께 책임을 지게 되고, 주인이 노예를 학대하면 마찬가지로 심판받습니다. 가장 중요한 원리는 "외모로 사람을 취하심이 없느니라"입니다. 하나님 앞에서는 주인도 노예도 동등합니다.'
    },
    korean_translation: {
      natural_translation: '불의를 행하는 자는 그 불의대로 보응을 받을 것입니다. 하나님께는 편파적인 대우가 없습니다.'
    },
    special_explanation: {
      explanation_type: '신학적/언어적 설명',
      content: '"외모로 사람을 취함"(프로소폴렘프시아)은 문자적으로 "얼굴을 받다"는 의미로, 외적 조건(신분, 재산, 인종 등)에 기초하여 차별하는 것을 가리킵니다. 하나님은 노예와 자유인, 주인과 종을 차별 없이 동일한 기준으로 심판하십니다. 이 평등주의적 원리는 결국 노예제도의 도덕적 기초를 무너뜨리는 혁명적 씨앗이 됩니다.'
    }
  }
]

async function batchSave() {
  console.log(`총 ${analyses.length}개 구절 분석 데이터 저장을 시작합니다...\n`)

  let successCount = 0
  let failCount = 0

  for (const analysis of analyses) {
    const success = await saveAnalysisToDb(analysis)
    if (success) {
      successCount++
    } else {
      failCount++
    }

    // 약간의 지연 추가 (DB 부하 방지)
    await new Promise(resolve => setTimeout(resolve, 500))
  }

  console.log(`\n=== 저장 완료 ===`)
  console.log(`성공: ${successCount}개`)
  console.log(`실패: ${failCount}개`)
}

batchSave()
