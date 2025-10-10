import { saveAnalysisToDb, type AnalysisData } from './save-analysis-to-db'

const analyses: AnalysisData[] = [
  // 1 Peter 1:14
  {
    reference: '1 Peter 1:14',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '정체성 명시',
        original_text: 'As obedient children',
        korean_translation: '순종하는 자녀로서',
        grammatical_explanation: '비교절로 신자의 정체성을 규정'
      },
      {
        sequence_order: 2,
        semantic_classification: '부정 명령',
        original_text: 'do not conform to the evil desires you had when you lived in ignorance',
        korean_translation: '무지하게 살던 때의 악한 욕망을 따르지 마십시오',
        grammatical_explanation: '부정 명령형, 관계절로 과거의 삶을 묘사'
      }
    ],
    vocabulary: [
      {
        word: 'obedient',
        ipa_pronunciation: '/əˈbiːdiənt/',
        korean_pronunciation: '어비디언트',
        part_of_speech: '형용사',
        definition_korean: '순종하는'
      },
      {
        word: 'conform',
        ipa_pronunciation: '/kənˈfɔːm/',
        korean_pronunciation: '컨폼',
        part_of_speech: '동사',
        definition_korean: '따르다, 순응하다'
      },
      {
        word: 'ignorance',
        ipa_pronunciation: '/ˈɪɡnərəns/',
        korean_pronunciation: '이그너런스',
        part_of_speech: '명사',
        definition_korean: '무지, 무지함'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '베드로는 신자들을 "순종하는 자녀"로 부릅니다. 이는 하나님을 아버지로, 신자를 자녀로 보는 가족 비유입니다. 자녀의 본분은 순종이며, 이는 율법적 강요가 아니라 사랑의 관계에서 나오는 자발적 순종입니다. "따르다"(suschēmatizomenoi)는 외적 형태를 맞춘다는 뜻으로, 로마서 12:2에서도 "이 세대를 본받지 말라"고 번역됩니다. "무지"(agnoia)는 도덕적 무지를 가리키며, 복음을 알기 전 우상 숭배와 도덕적 타락 속에 살던 때를 말합니다. 바울도 "전에는 무지하므로 허락하셨으나"(사도행전 17:30)라고 말했습니다. 과거의 악한 욕망은 더 이상 신자를 지배해서는 안 됩니다.'
    },
    korean_translation: {
      natural_translation: '순종하는 자녀로서 무지하게 살던 때의 악한 욕망을 따르지 마십시오.'
    },
    special_explanation: {
      explanation_type: '과거와의 단절',
      content: '이 구절은 회심의 급진성을 강조합니다. 신자는 과거 삶의 패턴에서 완전히 벗어나야 합니다. "무지" 시절은 복음 이전의 삶 전체를 가리키며, 그때의 욕망 체계는 더 이상 신자의 행동 기준이 아닙니다.'
    }
  },

  // 1 Peter 1:15
  {
    reference: '1 Peter 1:15',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '대조와 비교',
        original_text: 'But just as he who called you is holy',
        korean_translation: '오히려 여러분을 부르신 분이 거룩하신 것처럼',
        grammatical_explanation: '비교절로 하나님의 거룩을 기준으로 제시'
      },
      {
        sequence_order: 2,
        semantic_classification: '긍정 명령',
        original_text: 'so be holy in all you do',
        korean_translation: '여러분도 모든 행실에서 거룩하십시오',
        grammatical_explanation: '명령형 동사, "모든 행실"로 전인격적 거룩 요구'
      }
    ],
    vocabulary: [
      {
        word: 'holy',
        ipa_pronunciation: '/ˈhəʊli/',
        korean_pronunciation: '호울리',
        part_of_speech: '형용사',
        definition_korean: '거룩한, 성스러운'
      },
      {
        word: 'called',
        ipa_pronunciation: '/kɔːld/',
        korean_pronunciation: '콜드',
        part_of_speech: '동사(과거분사)',
        definition_korean: '부르신, 소명하신'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '"거룩"(hagios)은 성경의 핵심 개념으로, "구별된, 다른"이라는 뜻입니다. 하나님은 본질적으로 거룩하시며, 죄와 악에서 완전히 분리되어 계십니다. "부르신"(kalesantos)은 구원의 부르심을 가리키며, 단순한 초대가 아니라 효력 있는 소명입니다. 하나님께서 신자를 구원하신 목적은 그분의 거룩한 성품을 닮게 하는 것입니다. "모든 행실에서"(en pasē anastrophē)는 부분적이거나 선택적 거룩이 아니라, 삶의 모든 영역에서의 거룩을 요구합니다. 이는 레위기의 거룩 법전을 연상시키며, 실제로 다음 절에서 레위기를 직접 인용합니다.'
    },
    korean_translation: {
      natural_translation: '오히려 여러분을 부르신 분이 거룩하신 것처럼, 여러분도 모든 행실에서 거룩하십시오.'
    },
    special_explanation: {
      explanation_type: '모방 윤리',
      content: '이 구절은 "모방 윤리"(imitatio Dei) 원리를 보여줍니다. 신자의 도덕성은 외부 법률이 아니라 하나님의 성품에 근거합니다. 에베소서 5:1도 "하나님을 본받는 자가 되라"고 명령합니다. 하나님의 거룩은 명령의 근거이자 모델입니다.'
    }
  },

  // 1 Peter 1:16
  {
    reference: '1 Peter 1:16',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '성경 인용',
        original_text: 'for it is written: "Be holy, because I am holy."',
        korean_translation: '기록되었으되 "내가 거룩하니 너희도 거룩하라" 하셨느니라',
        grammatical_explanation: '인용 공식으로 구약 성경의 권위를 끌어옴'
      }
    ],
    vocabulary: [
      {
        word: 'written',
        ipa_pronunciation: '/ˈrɪtn/',
        korean_pronunciation: '리튼',
        part_of_speech: '동사(과거분사)',
        definition_korean: '기록된'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '이 구절은 레위기 11:44-45, 19:2, 20:7을 인용합니다. 레위기에서 이 명령은 이스라엘이 하나님의 백성으로서 주변 이방 민족과 구별되어야 한다는 맥락에서 주어졌습니다. 음식법, 제사법, 도덕법 등 모든 규정의 근본 원리는 "하나님이 거룩하시므로 백성도 거룩해야 한다"는 것입니다. 베드로는 이 구약의 원리를 신약 교회에 적용합니다. 신자들도 세상과 구별된 거룩한 공동체로 살아야 합니다. "내가 거룩하니"라는 하나님의 자기 선언은 명령의 가장 강력한 근거입니다. 자녀는 아버지를 닮아야 하기 때문입니다.'
    },
    korean_translation: {
      natural_translation: '기록되었으되 "내가 거룩하니 너희도 거룩하라" 하셨느니라.'
    },
    special_explanation: {
      explanation_type: '구약의 연속성',
      content: '베드로는 레위기를 직접 인용함으로써 신약 윤리가 구약과 단절이 아니라 연속임을 보여줍니다. 의식법은 폐지되었지만(마가복음 7:19, 사도행전 10장), 도덕적 거룩의 요구는 여전히 유효합니다.'
    }
  },

  // 1 Peter 1:17
  {
    reference: '1 Peter 1:17',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '조건절',
        original_text: 'Since you call on a Father who judges each person\'s work impartially',
        korean_translation: '각 사람의 행위를 공평하게 심판하시는 아버지를 부르므로',
        grammatical_explanation: '조건절로 하나님과의 관계를 전제'
      },
      {
        sequence_order: 2,
        semantic_classification: '명령',
        original_text: 'live out your time as foreigners here in reverent fear',
        korean_translation: '이 땅에서 나그네로 지내는 동안 두려움으로 살아가십시오',
        grammatical_explanation: '명령형 동사, 시간과 태도를 명시'
      }
    ],
    vocabulary: [
      {
        word: 'judges',
        ipa_pronunciation: '/ˈdʒʌdʒɪz/',
        korean_pronunciation: '저지즈',
        part_of_speech: '동사',
        definition_korean: '심판하다'
      },
      {
        word: 'impartially',
        ipa_pronunciation: '/ɪmˈpɑːʃəli/',
        korean_pronunciation: '임파셜리',
        part_of_speech: '부사',
        definition_korean: '공평하게, 편파적이지 않게'
      },
      {
        word: 'foreigners',
        ipa_pronunciation: '/ˈfɒrənərz/',
        korean_pronunciation: '포리너즈',
        part_of_speech: '명사',
        definition_korean: '나그네들, 외국인들'
      },
      {
        word: 'reverent fear',
        ipa_pronunciation: '/ˈrevərənt fɪər/',
        korean_pronunciation: '레버런트 피어',
        part_of_speech: '명사구',
        definition_korean: '경외하는 두려움'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '하나님은 동시에 "아버지"이자 "심판자"이십니다. 이 두 측면은 상충하지 않고 조화롭게 공존합니다. "부른다"(epikaleisthe)는 기도와 예배를 의미합니다. "공평하게"(aprosōpolēmptōs)는 문자적으로 "얼굴을 보지 않고"라는 뜻으로, 신분, 재산, 인종에 상관없이 오직 행위에 따라 심판하심을 의미합니다(신명기 10:17, 로마서 2:11). "나그네"(paroikia)는 1절의 "exiles"와 연결되며, 이 세상은 신자의 영원한 고향이 아니라 임시 거처임을 상기시킵니다. "경외하는 두려움"(phobos)은 공포가 아니라 존경과 경외입니다. 자녀는 사랑하는 아버지를 기쁘시게 하려는 거룩한 두려움을 가져야 합니다. 이는 은혜와 책임의 균형을 보여줍니다.'
    },
    korean_translation: {
      natural_translation: '각 사람의 행위를 공평하게 심판하시는 아버지를 부르므로, 이 땅에서 나그네로 지내는 동안 두려움으로 살아가십시오.'
    },
    special_explanation: {
      explanation_type: '아버지와 심판자',
      content: '하나님의 아버지 되심은 방종을 허락하지 않습니다. 오히려 더 높은 책임감을 요구합니다. 히브리서 12:5-11도 하나님의 징계가 아버지의 사랑의 표현임을 가르칩니다. 은혜와 거룩은 대립하지 않습니다.'
    }
  },

  // 1 Peter 1:18
  {
    reference: '1 Peter 1:18',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '부정문으로 속량의 대가',
        original_text: 'For you know that it was not with perishable things such as silver or gold that you were redeemed',
        korean_translation: '여러분이 알다시피 은이나 금같이 없어질 것으로 속량받은 것이 아니라',
        grammatical_explanation: '부정 구문으로 무가치한 것을 먼저 제시, 대조를 위한 준비'
      },
      {
        sequence_order: 2,
        semantic_classification: '속량의 출처',
        original_text: 'from the empty way of life handed down to you from your ancestors',
        korean_translation: '조상으로부터 물려받은 허망한 생활 방식으로부터',
        grammatical_explanation: '전치사구로 속량의 기원을 설명'
      }
    ],
    vocabulary: [
      {
        word: 'redeemed',
        ipa_pronunciation: '/rɪˈdiːmd/',
        korean_pronunciation: '리딤드',
        part_of_speech: '동사(과거분사)',
        definition_korean: '속량받은, 구속받은'
      },
      {
        word: 'perishable',
        ipa_pronunciation: '/ˈperɪʃəbl/',
        korean_pronunciation: '페리셔블',
        part_of_speech: '형용사',
        definition_korean: '없어질, 썩을'
      },
      {
        word: 'empty',
        ipa_pronunciation: '/ˈempti/',
        korean_pronunciation: '엠프티',
        part_of_speech: '형용사',
        definition_korean: '헛된, 공허한'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '"속량"(lytrōthēte)은 노예나 포로를 값을 치르고 해방시키는 것을 의미합니다. 고대 사회에서 노예는 돈으로 자유를 살 수 있었습니다. 은과 금은 가장 귀한 재화였지만, 인간의 영적 속박을 풀기에는 부족합니다. "없어질 것"이라는 형용사는 은금이 궁극적으로 가치 없음을 강조합니다. "허망한 생활 방식"(mataias anastrophēs)은 우상 숭배와 도덕적 타락을 포괄합니다. "조상으로부터 물려받은"은 전통의 권위를 부정하는 급진적 표현입니다. 유대인에게나 이방인에게나, 조상의 종교와 관습은 구원을 가져오지 못합니다. 오직 그리스도의 피만이 진정한 속량을 이룹니다(다음 절).'
    },
    korean_translation: {
      natural_translation: '여러분이 알다시피, 조상으로부터 물려받은 허망한 생활 방식에서 여러분이 속량받은 것은 은이나 금같이 없어질 것으로 된 것이 아닙니다.'
    },
    special_explanation: {
      explanation_type: '속량 신학',
      content: '속량(redemption)은 값을 지불하여 해방시키는 것입니다. 구약에서 고엘(kinsman-redeemer)이 가난한 친족을 속량했듯이(레위기 25장, 룻기), 그리스도는 죄의 노예된 인류를 속량하셨습니다. 값은 썩을 것이 아니라 그리스도의 피입니다.'
    }
  },

  // 1 Peter 1:19
  {
    reference: '1 Peter 1:19',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '긍정문으로 진정한 속량의 대가',
        original_text: 'but with the precious blood of Christ, a lamb without blemish or defect',
        korean_translation: '오직 흠도 없고 점도 없는 어린 양 같은 그리스도의 보배로운 피로 된 것입니다',
        grammatical_explanation: '대조절로 진정한 속량 값을 제시, 동격 명사구로 그리스도를 어린 양으로 묘사'
      }
    ],
    vocabulary: [
      {
        word: 'precious',
        ipa_pronunciation: '/ˈpreʃəs/',
        korean_pronunciation: '프레셔스',
        part_of_speech: '형용사',
        definition_korean: '보배로운, 귀한'
      },
      {
        word: 'blood',
        ipa_pronunciation: '/blʌd/',
        korean_pronunciation: '블러드',
        part_of_speech: '명사',
        definition_korean: '피'
      },
      {
        word: 'lamb',
        ipa_pronunciation: '/læm/',
        korean_pronunciation: '램',
        part_of_speech: '명사',
        definition_korean: '어린 양'
      },
      {
        word: 'blemish',
        ipa_pronunciation: '/ˈblemɪʃ/',
        korean_pronunciation: '블레미시',
        part_of_speech: '명사',
        definition_korean: '흠, 결점'
      },
      {
        word: 'defect',
        ipa_pronunciation: '/ˈdiːfekt/',
        korean_pronunciation: '디펙트',
        part_of_speech: '명사',
        definition_korean: '점, 결함'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '"보배로운"(timios)은 은금보다 훨씬 더 귀함을 나타냅니다. "피"는 생명을 의미하며(레위기 17:11), 그리스도의 죽음을 가리킵니다. "어린 양"은 여러 구약 배경을 가집니다: 1) 출애굽 유월절 어린 양(출애굽기 12장) - 그 피로 이스라엘이 죽음에서 구원받음, 2) 이사야의 고난받는 종 "도살장으로 끌려가는 어린 양"(이사야 53:7), 3) 매일 드려지는 번제 어린 양(출애굽기 29:38-42). "흠도 없고 점도 없는"(amōmou kai aspilou)은 제사 제물의 완전성 요구입니다(레위기 22:20-21). 그리스도는 도덕적으로 완전하셨기에 완벽한 제물이 되셨습니다. 요한복음 1:29에서 세례 요한도 "세상 죄를 지고 가는 하나님의 어린 양"이라 불렀습니다.'
    },
    korean_translation: {
      natural_translation: '오직 흠도 없고 점도 없는 어린 양 같은 그리스도의 보배로운 피로 된 것입니다.'
    },
    special_explanation: {
      explanation_type: '어린 양 기독론',
      content: '그리스도를 "어린 양"으로 묘사하는 것은 신약 전체의 중요한 주제입니다. 요한복음, 사도행전 8:32, 요한계시록(28회)에서 반복됩니다. 이는 그리스도의 희생적 죽음과 순결함을 동시에 강조합니다.'
    }
  },

  // 1 Peter 1:20
  {
    reference: '1 Peter 1:20',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '영원 전 예정',
        original_text: 'He was chosen before the creation of the world',
        korean_translation: '그분은 창세 전에 미리 알려지셨으나',
        grammatical_explanation: '수동태로 하나님의 예정을 나타냄, 시간 표시로 영원성 강조'
      },
      {
        sequence_order: 2,
        semantic_classification: '역사적 현현',
        original_text: 'but was revealed in these last times for your sake',
        korean_translation: '이 마지막 때에 여러분을 위하여 나타나셨습니다',
        grammatical_explanation: '대조절로 영원과 시간의 만남을 표현'
      }
    ],
    vocabulary: [
      {
        word: 'chosen',
        ipa_pronunciation: '/ˈtʃəʊzən/',
        korean_pronunciation: '초즌',
        part_of_speech: '동사(과거분사)',
        definition_korean: '선택된, 예정된'
      },
      {
        word: 'creation',
        ipa_pronunciation: '/kriˈeɪʃn/',
        korean_pronunciation: '크리에이션',
        part_of_speech: '명사',
        definition_korean: '창조'
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
      integrated_explanation: '구원은 우연이나 사후 계획이 아니라 영원 전부터 하나님의 계획이었습니다. "미리 알려지다"(proegnōsmenou)는 단순한 예지가 아니라 예정을 의미합니다(로마서 8:29, 사도행전 2:23). 그리스도의 십자가는 하나님의 영원한 구원 계획의 중심입니다. "창세 전"(pro katabolēs kosmou)은 에베소서 1:4의 "창세 전에 우리를 택하심"과 병행됩니다. "마지막 때"(eschatou tōn chronōn)는 메시아 시대, 곧 그리스도의 초림부터 재림까지의 기간을 가리킵니다. 히브리서 1:2도 "이 모든 날 마지막에 아들로 말씀하셨다"고 선언합니다. "여러분을 위하여"는 개인적 적용을 강조합니다. 영원한 계획이 역사 속에서 독자들을 위해 실현되었습니다.'
    },
    korean_translation: {
      natural_translation: '그분은 창세 전에 미리 알려지셨으나, 이 마지막 때에 여러분을 위하여 나타나셨습니다.'
    },
    special_explanation: {
      explanation_type: '구원의 영원성과 역사성',
      content: '이 구절은 구원의 두 차원을 보여줍니다: 1) 영원성 - 창세 전 하나님의 계획, 2) 역사성 - 그리스도의 성육신과 십자가. 영원한 계획이 특정 시점에 역사 속으로 들어왔습니다.'
    }
  },

  // 1 Peter 1:21
  {
    reference: '1 Peter 1:21',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '믿음의 통로',
        original_text: 'Through him you believe in God',
        korean_translation: '그분을 통하여 여러분은 하나님을 믿고',
        grammatical_explanation: '전치사구로 그리스도가 믿음의 중보자임을 나타냄'
      },
      {
        sequence_order: 2,
        semantic_classification: '하나님의 행위',
        original_text: 'who raised him from the dead and glorified him',
        korean_translation: '그분을 죽은 자들 가운데서 살리시고 영광을 주신',
        grammatical_explanation: '관계절로 하나님의 두 행위(부활과 영화)를 병렬'
      },
      {
        sequence_order: 3,
        semantic_classification: '결과',
        original_text: 'and so your faith and hope are in God',
        korean_translation: '그러므로 여러분의 믿음과 소망이 하나님께 있습니다',
        grammatical_explanation: '결과절로 믿음과 소망의 확고한 기초를 선언'
      }
    ],
    vocabulary: [
      {
        word: 'believe',
        ipa_pronunciation: '/bɪˈliːv/',
        korean_pronunciation: '빌리브',
        part_of_speech: '동사',
        definition_korean: '믿다'
      },
      {
        word: 'raised',
        ipa_pronunciation: '/reɪzd/',
        korean_pronunciation: '레이즈드',
        part_of_speech: '동사(과거)',
        definition_korean: '일으키다, 부활시키다'
      },
      {
        word: 'glorified',
        ipa_pronunciation: '/ˈɡlɔːrɪfaɪd/',
        korean_pronunciation: '글로리파이드',
        part_of_speech: '동사(과거)',
        definition_korean: '영광을 주다'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '그리스도는 하나님께 나아가는 유일한 길입니다(요한복음 14:6). "통하여"(di autou)는 중보를 의미합니다. 부활과 영화는 그리스도의 메시아 되심을 확증합니다. 로마서 1:4는 "부활로 말미암아 하나님의 아들로 선포되셨다"고 선언합니다. 부활은 십자가가 실패가 아니라 승리임을 입증했고, 승천과 영화는 그리스도께서 하나님 우편에 앉으신 것을 의미합니다(빌립보서 2:9-11, 히브리서 1:3). "믿음과 소망"은 밀접히 연결되어 있습니다. 믿음은 현재의 확신이고, 소망은 미래에 대한 기대입니다. 둘 다 부활하신 그리스도를 통해 하나님께 향합니다. "하나님께 있다"(eis Theon)는 하나님이 믿음과 소망의 궁극적 대상이자 근거임을 강조합니다.'
    },
    korean_translation: {
      natural_translation: '그분을 통하여 여러분은 하나님을 믿고, 하나님은 그분을 죽은 자들 가운데서 살리시고 영광을 주셨으므로, 여러분의 믿음과 소망이 하나님께 있습니다.'
    },
    special_explanation: {
      explanation_type: '삼위일체적 구조',
      content: '이 구절은 삼위일체 구원론을 보여줍니다: 성자(그리스도)를 통해, 성부(하나님)께 나아가며, 성부가 성자를 부활시키고 영화롭게 하심으로 신자의 믿음과 소망이 확립됩니다.'
    }
  },

  // 1 Peter 1:22
  {
    reference: '1 Peter 1:22',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '완료된 정결',
        original_text: 'Now that you have purified yourselves by obeying the truth',
        korean_translation: '진리를 순종함으로 영혼을 깨끗하게 하였으니',
        grammatical_explanation: '분사구문으로 이미 이루어진 정결을 전제'
      },
      {
        sequence_order: 2,
        semantic_classification: '정결의 목적',
        original_text: 'so that you have sincere love for each other',
        korean_translation: '거짓 없이 형제를 사랑하게 되었으므로',
        grammatical_explanation: '결과절로 정결의 열매를 설명'
      },
      {
        sequence_order: 3,
        semantic_classification: '명령',
        original_text: 'love one another deeply, from the heart',
        korean_translation: '마음으로 뜨겁게 서로 사랑하십시오',
        grammatical_explanation: '명령형 동사, 부사구로 사랑의 깊이와 진정성 강조'
      }
    ],
    vocabulary: [
      {
        word: 'purified',
        ipa_pronunciation: '/ˈpjʊərɪfaɪd/',
        korean_pronunciation: '퓨어리파이드',
        part_of_speech: '동사(과거분사)',
        definition_korean: '깨끗하게 하다, 정결하게 하다'
      },
      {
        word: 'sincere',
        ipa_pronunciation: '/sɪnˈsɪər/',
        korean_pronunciation: '신시어',
        part_of_speech: '형용사',
        definition_korean: '진실한, 거짓 없는'
      },
      {
        word: 'deeply',
        ipa_pronunciation: '/ˈdiːpli/',
        korean_pronunciation: '딥리',
        part_of_speech: '부사',
        definition_korean: '깊이, 열심히'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '"영혼을 깨끗하게 하다"(hēgnikotes tas psychas)는 도덕적·영적 정결을 의미합니다. "진리를 순종함으로"는 복음을 믿고 순종하는 것을 가리킵니다. 야고보서 1:18도 "진리의 말씀으로 우리를 낳으셨다"고 선언합니다. 정결의 목적은 형제 사랑입니다. "거짓 없는"(anypokritos)은 위선이나 가식이 없는 진실한 사랑을 의미합니다. 바울도 로마서 12:9에서 "사랑은 거짓이 없어야 한다"고 가르쳤습니다. "뜨겁게"(ektenōs)는 강렬하고 지속적인 사랑을 의미합니다. "마음으로"(ek katharas kardias)는 외적 형식이 아니라 내적 진정성을 강조합니다. 형제 사랑은 기독교의 핵심 표지입니다(요한복음 13:35). 박해받는 공동체에서 서로 사랑하고 돕는 것은 생존과 증언을 위해 필수적이었습니다.'
    },
    korean_translation: {
      natural_translation: '진리를 순종함으로 영혼을 깨끗하게 하여 거짓 없이 형제를 사랑하게 되었으니, 마음으로 뜨겁게 서로 사랑하십시오.'
    },
    special_explanation: {
      explanation_type: '정결과 사랑의 연결',
      content: '이 구절은 정결(purity)과 사랑(love)을 연결합니다. 진리 순종으로 정결해진 영혼은 자연스럽게 형제 사랑으로 나타납니다. 거룩과 사랑은 대립하지 않고 필연적으로 연결됩니다. 요한일서 3:3도 "이 소망을 가진 자마다 그의 깨끗하심과 같이 자기를 깨끗하게 한다"고 가르칩니다.'
    }
  },

  // 1 Peter 1:23
  {
    reference: '1 Peter 1:23',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '거듭남의 선언',
        original_text: 'For you have been born again',
        korean_translation: '여러분이 거듭났으되',
        grammatical_explanation: '완료 수동태로 이미 이루어진 중생을 나타냄'
      },
      {
        sequence_order: 2,
        semantic_classification: '부정 대조',
        original_text: 'not of perishable seed, but of imperishable',
        korean_translation: '썩을 씨로 된 것이 아니요 썩지 않을 씨로 된 것이니',
        grammatical_explanation: '대조 구문으로 두 종류의 씨를 비교'
      },
      {
        sequence_order: 3,
        semantic_classification: '수단 명시',
        original_text: 'through the living and enduring word of God',
        korean_translation: '살아 있고 항상 있는 하나님의 말씀으로 된 것입니다',
        grammatical_explanation: '전치사구로 중생의 도구를 설명, 두 형용사로 말씀의 특성 강조'
      }
    ],
    vocabulary: [
      {
        word: 'born again',
        ipa_pronunciation: '/bɔːn əˈɡen/',
        korean_pronunciation: '본 어게인',
        part_of_speech: '동사구',
        definition_korean: '거듭나다, 다시 태어나다'
      },
      {
        word: 'seed',
        ipa_pronunciation: '/siːd/',
        korean_pronunciation: '시드',
        part_of_speech: '명사',
        definition_korean: '씨'
      },
      {
        word: 'imperishable',
        ipa_pronunciation: '/ɪmˈperɪʃəbl/',
        korean_pronunciation: '임페리셔블',
        part_of_speech: '형용사',
        definition_korean: '썩지 않는, 불멸의'
      },
      {
        word: 'enduring',
        ipa_pronunciation: '/ɪnˈdjʊərɪŋ/',
        korean_pronunciation: '인듀어링',
        part_of_speech: '형용사',
        definition_korean: '영속하는, 지속하는'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '3절에서 언급된 "거듭남"이 여기서 재차 강조됩니다. "씨"(spora)는 생명의 근원을 의미하며, 인간의 자연적 출생은 썩을 씨(부모)에서 비롯되지만, 영적 출생은 썩지 않을 씨에서 비롯됩니다. "하나님의 말씀"(logos Theou)은 복음 메시지를 가리킵니다. 야고보서 1:18도 "진리의 말씀으로 우리를 낳으셨다"고 선언합니다. "살아 있는"(zōntos)은 말씀이 죽은 문자가 아니라 생명을 주는 능력이 있음을 강조합니다(히브리서 4:12). "항상 있는"(menontos)은 말씀의 영원성을 나타냅니다. 다음 절에서 이사야 40:6-8을 인용하여 이를 확증합니다. 거듭남은 인간의 노력이 아니라 하나님 말씀의 초자연적 역사입니다.'
    },
    korean_translation: {
      natural_translation: '여러분이 거듭났으되, 썩을 씨로 된 것이 아니요 썩지 않을 씨로 된 것이니, 살아 있고 항상 있는 하나님의 말씀으로 된 것입니다.'
    },
    special_explanation: {
      explanation_type: '말씀과 중생',
      content: '개혁 신학은 중생의 수단으로 말씀을 강조합니다. 성령은 말씀을 통해 역사하십니다(요한복음 3:5의 "물과 성령"을 말씀과 성령으로 해석). 로마서 10:17도 "믿음은 들음에서 나며 들음은 그리스도의 말씀으로 말미암는다"고 선언합니다.'
    }
  },

  // 1 Peter 1:24
  {
    reference: '1 Peter 1:24',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '성경 인용 시작',
        original_text: 'For, "All people are like grass, and all their glory is like the flowers of the field',
        korean_translation: '그러므로 "모든 육체는 풀과 같고 그 모든 영광은 풀의 꽃과 같으니',
        grammatical_explanation: '인용 공식으로 이사야 40:6-8 인용, 비유로 인간의 덧없음 표현'
      },
      {
        sequence_order: 2,
        semantic_classification: '덧없음의 묘사',
        original_text: 'the grass withers and the flowers fall',
        korean_translation: '풀은 마르고 꽃은 떨어지되',
        grammatical_explanation: '병렬 구문으로 소멸의 과정을 묘사'
      }
    ],
    vocabulary: [
      {
        word: 'grass',
        ipa_pronunciation: '/ɡrɑːs/',
        korean_pronunciation: '그라스',
        part_of_speech: '명사',
        definition_korean: '풀'
      },
      {
        word: 'glory',
        ipa_pronunciation: '/ˈɡlɔːri/',
        korean_pronunciation: '글로리',
        part_of_speech: '명사',
        definition_korean: '영광, 영화'
      },
      {
        word: 'withers',
        ipa_pronunciation: '/ˈwɪðərz/',
        korean_pronunciation: '위더즈',
        part_of_speech: '동사',
        definition_korean: '시들다, 마르다'
      },
      {
        word: 'fall',
        ipa_pronunciation: '/fɔːl/',
        korean_pronunciation: '폴',
        part_of_speech: '동사',
        definition_korean: '떨어지다'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '베드로는 이사야 40:6-8을 인용합니다. 이사야는 바벨론 포로 시대에 "모든 육체는 풀"이라 선언하며 인간의 약함과 하나님의 영원함을 대조했습니다. 팔레스타인의 건기에 풀은 빨리 마르고 야생화는 금방 시듭니다. 야고보서 1:10-11도 같은 이미지를 사용합니다. "모든 영광"은 인간의 성취, 명예, 재산 등을 포괄합니다. 이 모든 것은 일시적입니다. 시편 90:5-6, 103:15-16도 같은 주제를 다룹니다. 이 인용은 23절의 대조를 강화합니다 - 썩을 씨(인간)와 썩지 않을 씨(하나님의 말씀). 세상의 모든 것은 사라지지만, 하나님의 말씀과 그 말씀으로 거듭난 생명은 영원합니다.'
    },
    korean_translation: {
      natural_translation: '그러므로 "모든 육체는 풀과 같고 그 모든 영광은 풀의 꽃과 같으니, 풀은 마르고 꽃은 떨어지되"'
    },
    special_explanation: {
      explanation_type: '덧없음의 보편성',
      content: '"모든"(pasa)의 반복은 예외 없는 보편성을 강조합니다. 부자나 가난한 자, 권력자나 평민, 모두가 풀과 같이 덧없습니다. 오직 하나님의 말씀만이 영원합니다.'
    }
  },

  // 1 Peter 1:25
  {
    reference: '1 Peter 1:25',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '대조와 영원성',
        original_text: 'but the word of the Lord endures forever',
        korean_translation: '오직 주의 말씀은 영원히 있도다" 하였으니',
        grammatical_explanation: '대조절로 말씀의 영원성을 선언'
      },
      {
        sequence_order: 2,
        semantic_classification: '적용',
        original_text: 'And this is the word that was preached to you',
        korean_translation: '이 말씀이 곧 여러분에게 전한 복음이니라',
        grammatical_explanation: '지시대명사로 구약 예언과 신약 복음을 연결'
      }
    ],
    vocabulary: [
      {
        word: 'endures',
        ipa_pronunciation: '/ɪnˈdjʊərz/',
        korean_pronunciation: '인듀어즈',
        part_of_speech: '동사',
        definition_korean: '영속하다, 지속하다'
      },
      {
        word: 'forever',
        ipa_pronunciation: '/fərˈevər/',
        korean_pronunciation: '포에버',
        part_of_speech: '부사',
        definition_korean: '영원히'
      },
      {
        word: 'preached',
        ipa_pronunciation: '/priːtʃt/',
        korean_pronunciation: '프리치트',
        part_of_speech: '동사(과거분사)',
        definition_korean: '전파된, 설교된'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '이사야 인용의 정점입니다. 모든 것이 사라지지만 "주의 말씀은 영원히 있습니다." "주"(kyrios)는 구약의 야웨를 가리키며, 그 말씀은 변치 않습니다. 베드로는 이 영원한 말씀이 바로 독자들에게 전해진 "복음"(euangelion)이라고 적용합니다. 이는 23절의 "살아 있고 항상 있는 하나님의 말씀"과 직접 연결됩니다. 복음은 인간의 철학이나 전통이 아니라 영원하신 하나님의 말씀이므로 신뢰할 수 있습니다. 박해받는 신자들에게 이는 큰 위로입니다 - 그들을 박해하는 권력과 제도는 풀처럼 사라질 것이지만, 그들이 믿는 복음은 영원히 서 있을 것입니다. 이로써 베드로는 1장을 마무리하며, 2장에서 거룩한 삶에 대한 구체적 권면으로 넘어갑니다.'
    },
    korean_translation: {
      natural_translation: '"오직 주의 말씀은 영원히 있도다" 하였으니, 이 말씀이 곧 여러분에게 전한 복음이니라.'
    },
    special_explanation: {
      explanation_type: '복음의 영원성',
      content: '이 구절은 복음의 권위와 영원성을 확립합니다. 복음은 시대에 따라 변하는 인간의 가르침이 아니라, 영원하신 하나님의 말씀입니다. 마태복음 24:35에서 예수님도 "천지는 없어지겠으나 내 말은 없어지지 않으리라"고 선언하셨습니다.'
    }
  }
]

async function main() {
  console.log('1 Peter 1:14-25 분석 결과 저장 시작...\n')

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
