import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

const analyses: AnalysisData[] = [
  // ===== HEBREWS 2 =====
  {
    reference: 'Hebrews 2:1',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '명령: 청중 권면',
        original_text: 'We must pay the most careful attention, therefore, to what we have heard',
        korean_translation: '그러므로 우리가 들은 것에 더욱 주의를 기울여야 합니다',
        grammatical_explanation: 'must는 강한 의무, therefore는 1장 논증의 결론, most careful attention은 최상급으로 극도의 주의를 강조'
      },
      {
        sequence_order: 2,
        semantic_classification: '목적절: 이탈 방지',
        original_text: 'so that we do not drift away',
        korean_translation: '그리하여 우리가 떠내려가지 않게 하려는 것입니다',
        grammatical_explanation: 'so that은 목적절, drift away는 해양 은유로 무의식적이고 점진적인 신앙 이탈을 표현'
      }
    ],
    vocabulary: [
      {
        word: 'careful attention',
        ipa_pronunciation: '/ˈkɛrfəl əˈtɛnʃən/',
        korean_pronunciation: '케어풀 어텐션',
        part_of_speech: '명사구',
        definition_korean: '주의 깊은 집중',
        usage_note: '그리스어 prosechein으로 배가 항구에 정박하듯 마음을 붙들어두는 것'
      },
      {
        word: 'drift away',
        ipa_pronunciation: '/drɪft əˈweɪ/',
        korean_pronunciation: '드리프트 어웨이',
        part_of_speech: '동사구',
        definition_korean: '표류하다, 떠내려가다',
        usage_note: '그리스어 pararreō으로 닻을 내리지 않은 배가 조류에 밀려가듯 신앙에서 멀어지는 것'
      },
      {
        word: 'heard',
        ipa_pronunciation: '/hɜːrd/',
        korean_pronunciation: '허드',
        part_of_speech: '동사',
        definition_korean: '들은',
        usage_note: '복음 메시지, 특히 1장에서 논증한 그리스도의 우월성을 지칭'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '히브리서 2:1-4는 첫 번째 경고 구절로, 1장에서 논증한 그리스도의 우월성에 대한 실천적 적용입니다. 저자는 해양 은유를 사용하여 닻을 내리지 않은 배가 조류에 표류하듯, 복음에 주의를 기울이지 않으면 무의식적으로 신앙에서 멀어질 수 있음을 경고합니다. "들은 것"은 사도들을 통해 전해진 복음을 의미하며, 당시 유대 기독교인들이 박해와 유대교로의 복귀 유혹 속에서 신앙을 유지해야 하는 상황을 반영합니다.'
    },
    korean_translation: {
      natural_translation: '그러므로 우리는 들은 것에 더욱 깊이 주의를 기울여야 합니다. 그렇지 않으면 떠내려갈 수 있기 때문입니다.',
      translation_notes: '1장 논증의 실천적 결론으로, 표류 은유를 통해 신앙 이탈의 위험을 경고'
    },
    special_explanation: {
      explanation_type: '문학적 기법',
      content: '표류(drift away) 은유는 의도적 배교가 아닌 점진적이고 무의식적인 신앙 이탈을 강조합니다. 이는 히브리서 전체에 나타나는 경고 구절들의 특징으로, 독자들에게 능동적이고 의도적인 신앙 유지를 촉구합니다.'
    }
  },
  {
    reference: 'Hebrews 2:2',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '조건: 천사들의 메시지',
        original_text: 'For since the message spoken through angels was binding',
        korean_translation: '천사들을 통하여 전한 말씀이 확실하였으므로',
        grammatical_explanation: 'For는 2:1의 근거 제시, since는 조건절, binding은 법적 구속력을 의미'
      },
      {
        sequence_order: 2,
        semantic_classification: '결과: 처벌의 확실성',
        original_text: 'and every violation and disobedience received its just punishment',
        korean_translation: '모든 범죄와 불순종이 공정한 처벌을 받았으니',
        grammatical_explanation: 'every는 예외 없는 보편성, just punishment는 공정한 응보를 강조'
      }
    ],
    vocabulary: [
      {
        word: 'binding',
        ipa_pronunciation: '/ˈbaɪndɪŋ/',
        korean_pronunciation: '바인딩',
        part_of_speech: '형용사',
        definition_korean: '구속력 있는, 확실한',
        usage_note: '그리스어 bebaios로 법적 효력이 있고 확고한 것'
      },
      {
        word: 'violation',
        ipa_pronunciation: '/ˌvaɪəˈleɪʃən/',
        korean_pronunciation: '바이얼레이션',
        part_of_speech: '명사',
        definition_korean: '위반, 범죄',
        usage_note: '그리스어 parabasis로 경계를 넘는 것, 율법 위반'
      },
      {
        word: 'disobedience',
        ipa_pronunciation: '/ˌdɪsəˈbiːdiəns/',
        korean_pronunciation: '디소비디언스',
        part_of_speech: '명사',
        definition_korean: '불순종',
        usage_note: '그리스어 parakoe로 듣지 않음, 순종 거부'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '저자는 소전제대전제 논증(qal wahomer, 가벼운 것에서 무거운 것으로)을 사용합니다. 천사들을 통해 전해진 율법(출애굽기 19장, 신명기 33:2, 행 7:53)도 구속력이 있어 위반 시 처벌을 받았다면, 하물며 천사보다 우월한 그리스도를 통해 전해진 복음을 무시하면 어떻겠느냐는 논리입니다. 유대 전통은 시내산 율법이 천사들을 통해 전달되었다고 믿었습니다.'
    },
    korean_translation: {
      natural_translation: '천사들을 통하여 하신 말씀도 확실하여, 모든 범죄와 불순종이 공정한 대가를 받았습니다.',
      translation_notes: '율법의 권위와 위반의 결과를 확립하여 다음 논증의 토대를 마련'
    }
  },
  {
    reference: 'Hebrews 2:3',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '수사학적 질문: 책임 강조',
        original_text: 'how shall we escape if we ignore so great a salvation?',
        korean_translation: '이같이 큰 구원을 소홀히 여기면 우리가 어떻게 피하겠습니까?',
        grammatical_explanation: 'how shall we escape는 수사학적 질문으로 탈출 불가능을 암시, so great는 구원의 광대함 강조'
      },
      {
        sequence_order: 2,
        semantic_classification: '설명: 구원의 출처',
        original_text: 'This salvation, which was first announced by the Lord, was confirmed to us by those who heard him',
        korean_translation: '이 구원은 처음에 주께서 말씀하신 것이요, 듣는 자들로 말미암아 우리에게 확증된 바 되었습니다',
        grammatical_explanation: 'first announced by the Lord는 복음의 1차 출처, confirmed는 사도적 증언의 신뢰성'
      }
    ],
    vocabulary: [
      {
        word: 'escape',
        ipa_pronunciation: '/ɪˈskeɪp/',
        korean_pronunciation: '이스케이프',
        part_of_speech: '동사',
        definition_korean: '피하다, 탈출하다',
        usage_note: '심판으로부터의 도피'
      },
      {
        word: 'ignore',
        ipa_pronunciation: '/ɪɡˈnɔːr/',
        korean_pronunciation: '이그노어',
        part_of_speech: '동사',
        definition_korean: '무시하다, 소홀히 여기다',
        usage_note: '그리스어 amelēsantes로 돌보지 않음, 무관심'
      },
      {
        word: 'confirmed',
        ipa_pronunciation: '/kənˈfɜːrmd/',
        korean_pronunciation: '컨펌드',
        part_of_speech: '동사',
        definition_korean: '확증하다, 확인하다',
        usage_note: '그리스어 ebebaiōthē로 확고하게 입증되다'
      }
    ],
    contextual_explanation: {
      integrated_explanation: 'qal wahomer 논증의 결론입니다. 천사를 통한 율법도 구속력이 있었다면, 하나님의 아들이 직접 선포하고 사도들이 확증한 복음을 무시하면 더 큰 책임을 면할 수 없습니다. "듣는 자들"은 사도들을 지칭하며, 저자가 2세대 그리스도인임을 암시합니다. "이같이 큰 구원"은 1장에서 논증한 그리스도의 우월성을 반영합니다.'
    },
    korean_translation: {
      natural_translation: '그렇다면 이처럼 큰 구원을 등한히 여긴다면 우리가 어떻게 벗어나겠습니까? 이 구원은 처음에 주님께서 말씀하셨고, 그분의 말씀을 들은 사람들이 우리에게 확증해 주었습니다.',
      translation_notes: '소전제대전제 논증의 완성으로 복음 무시의 심각성 경고'
    },
    special_explanation: {
      explanation_type: '논증 구조',
      content: '유대 해석학의 qal wahomer(가벼운 것에서 무거운 것으로) 논증법을 사용합니다. 천사 < 그리스도이므로, 천사의 율법 위반도 처벌받았다면 그리스도의 복음 무시는 더 큰 심판을 받는다는 논리입니다.'
    }
  },
  {
    reference: 'Hebrews 2:4',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '보충: 하나님의 증거',
        original_text: 'God also testified to it by signs, wonders and various miracles, and by gifts of the Holy Spirit distributed according to his will',
        korean_translation: '하나님도 표적들과 기사들과 여러 가지 능력과 또한 자기의 뜻을 따라 성령의 은사들을 나누어 주심으로써 이를 증언하셨습니다',
        grammatical_explanation: 'also는 사도 증언에 더하여 하나님도 증거함, by는 증거 방법 나열, distributed according to his will은 주권적 분배'
      }
    ],
    vocabulary: [
      {
        word: 'testified',
        ipa_pronunciation: '/ˈtɛstɪfaɪd/',
        korean_pronunciation: '테스티파이드',
        part_of_speech: '동사',
        definition_korean: '증언하다',
        usage_note: '그리스어 synepimartyrountos로 함께 증거하다'
      },
      {
        word: 'signs',
        ipa_pronunciation: '/saɪnz/',
        korean_pronunciation: '사인즈',
        part_of_speech: '명사',
        definition_korean: '표적',
        usage_note: '그리스어 sēmeiois로 영적 실재를 가리키는 외적 증표'
      },
      {
        word: 'wonders',
        ipa_pronunciation: '/ˈwʌndərz/',
        korean_pronunciation: '원더즈',
        part_of_speech: '명사',
        definition_korean: '기사',
        usage_note: '그리스어 terasin으로 경이와 두려움을 불러일으키는 초자연적 사건'
      },
      {
        word: 'miracles',
        ipa_pronunciation: '/ˈmɪrəkəlz/',
        korean_pronunciation: '미러클즈',
        part_of_speech: '명사',
        definition_korean: '능력, 기적',
        usage_note: '그리스어 dynamesi로 하나님의 힘의 나타남'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '구원의 확실성에 대한 삼중 증거를 제시합니다: 1) 주님이 직접 선포하심, 2) 사도들의 확증, 3) 하나님의 초자연적 증거. 표적, 기사, 능력은 사도행전에 나타난 초대교회의 기적들을 지칭합니다. 성령의 은사는 고린도전서 12장의 은사들과 연결되며, "자기 뜻대로"는 하나님의 주권을 강조합니다. 이 삼중 증거는 복음의 신빙성을 입증하며, 따라서 무시할 수 없음을 논증합니다.'
    },
    korean_translation: {
      natural_translation: '하나님께서도 표적과 기사와 여러 가지 능력을 행하시고, 또 자기 뜻을 따라 성령의 은사들을 나누어 주심으로 이를 증거하셨습니다.',
      translation_notes: '복음의 신빙성에 대한 하나님의 초자연적 증거 제시'
    }
  },
  {
    reference: 'Hebrews 2:5',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '부정: 천사의 통치 배제',
        original_text: 'It is not to angels that he has subjected the world to come, about which we are speaking',
        korean_translation: '하나님이 우리가 말하는 장차 올 세상을 천사들에게 복종시키지 아니하셨습니다',
        grammatical_explanation: 'It is not... that 강조 구문, subjected는 복종시킴, the world to come은 종말론적 하나님 나라'
      }
    ],
    vocabulary: [
      {
        word: 'subjected',
        ipa_pronunciation: '/səbˈdʒɛktɪd/',
        korean_pronunciation: '섭젝티드',
        part_of_speech: '동사',
        definition_korean: '복종시키다, 종속시키다',
        usage_note: '그리스어 hypetaxen으로 권위 아래 두다'
      },
      {
        word: 'world to come',
        ipa_pronunciation: '/wɜːrld tuː kʌm/',
        korean_pronunciation: '월드 투 컴',
        part_of_speech: '명사구',
        definition_korean: '장차 올 세상',
        usage_note: '그리스어 tēn oikoumenēn tēn mellousan으로 메시아 시대, 하나님 나라'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '2:5-18은 그리스도의 인성과 고난의 필요성을 논증합니다. 저자는 1장의 주제(그리스도의 천사보다 우월한 신성)에서 2장의 새 주제(인간이 되신 그리스도)로 전환합니다. "장차 올 세상"은 유대 묵시 문학의 개념으로, 현 세대와 구별되는 메시아 통치 시대를 의미합니다. 천사들이 아니라 사람, 특히 인간이 되신 그리스도가 이 세상을 다스릴 것임을 암시합니다.'
    },
    korean_translation: {
      natural_translation: '하나님께서는 우리가 말하고 있는 장차 올 세상을 천사들에게 복종시키지 않으셨습니다.',
      translation_notes: '천사가 아닌 인간의 통치라는 새로운 주제 도입'
    }
  },
  {
    reference: 'Hebrews 2:6',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '인용 서론',
        original_text: 'But there is a place where someone has testified',
        korean_translation: '그러나 누군가 어디선가 증언하여 말하기를',
        grammatical_explanation: 'someone은 시편 저자(다윗)를 겸손하게 지칭, testified는 성경 인용 도입'
      },
      {
        sequence_order: 2,
        semantic_classification: '인용: 인간의 본질',
        original_text: 'What is mankind that you are mindful of them, a son of man that you care for him?',
        korean_translation: '사람이 무엇이기에 주께서 그를 생각하시며, 인자가 무엇이기에 그를 돌보시나이까?',
        grammatical_explanation: '시편 8:4 인용, 수사학적 질문으로 인간의 작음과 하나님의 관심 대조'
      }
    ],
    vocabulary: [
      {
        word: 'mankind',
        ipa_pronunciation: '/mænˈkaɪnd/',
        korean_pronunciation: '맨카인드',
        part_of_speech: '명사',
        definition_korean: '인류, 사람',
        usage_note: '그리스어 anthrōpos, 히브리어 enosh로 연약한 필멸의 인간'
      },
      {
        word: 'mindful',
        ipa_pronunciation: '/ˈmaɪndfəl/',
        korean_pronunciation: '마인드풀',
        part_of_speech: '형용사',
        definition_korean: '마음에 두다, 생각하다',
        usage_note: '그리스어 mimnēskē, 히브리어 zakar로 기억하고 돌보다'
      },
      {
        word: 'son of man',
        ipa_pronunciation: '/sʌn əv mæn/',
        korean_pronunciation: '선 오브 맨',
        part_of_speech: '명사구',
        definition_korean: '인자, 사람의 아들',
        usage_note: '히브리 시 병행법으로 mankind와 동의, 후에 메시아 칭호로 사용됨'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '시편 8:4-6을 인용하여 인간의 지위를 논증합니다. 원래 시편 8편은 창조 질서에서 인간의 존엄성을 노래하지만, 히브리서는 이를 그리스도론적으로 재해석합니다. "사람이 무엇이기에"는 인간의 작음과 연약함을 강조하며, 그럼에도 하나님이 인간을 기억하시고 돌보신다는 놀라움을 표현합니다. "인자"는 병행법으로 같은 의미지만, 히브리서는 이를 예수의 자기 칭호(복음서)와 연결시킵니다.'
    },
    korean_translation: {
      natural_translation: '그런데 성경 어디선가 이렇게 증언했습니다. "사람이 무엇이기에 주께서 그를 기억하시며, 인자가 무엇이기에 그를 돌보십니까?"',
      translation_notes: '시편 8편 인용으로 인간 본성에 대한 신학적 성찰 시작'
    },
    special_explanation: {
      explanation_type: '인용 해석',
      content: '시편 8편은 원래 아담과 인류 전체에 대한 것이지만, 히브리서는 이를 예수 그리스도에게 적용합니다. 인간 본성을 입으신 그리스도만이 인간에게 주어진 통치 사명(창세기 1:26-28)을 완전히 성취하셨다는 것입니다.'
    }
  },
  {
    reference: 'Hebrews 2:7',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '인용: 인간의 위상',
        original_text: 'You made them a little lower than the angels; you crowned them with glory and honor',
        korean_translation: '주께서 그를 천사들보다 잠시 동안 낮게 하셨다가, 영광과 존귀로 관을 씌우셨으며',
        grammatical_explanation: 'a little lower는 시간적(잠시) 또는 지위적(조금) 해석 가능, crowned는 왕권 부여'
      }
    ],
    vocabulary: [
      {
        word: 'lower',
        ipa_pronunciation: '/ˈloʊər/',
        korean_pronunciation: '로워',
        part_of_speech: '형용사',
        definition_korean: '낮은',
        usage_note: '그리스어 ēlattōsas는 시간적 "잠시"와 지위적 "조금" 양쪽 의미 가능'
      },
      {
        word: 'crowned',
        ipa_pronunciation: '/kraʊnd/',
        korean_pronunciation: '크라운드',
        part_of_speech: '동사',
        definition_korean: '관을 씌우다',
        usage_note: '그리스어 estefanōsas로 승리자나 왕에게 주는 면류관'
      },
      {
        word: 'glory and honor',
        ipa_pronunciation: '/ˈɡlɔːri ænd ˈɑːnər/',
        korean_pronunciation: '글로리 앤드 아너',
        part_of_speech: '명사구',
        definition_korean: '영광과 존귀',
        usage_note: '하나님의 형상, 왕권적 위엄'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '시편 8:5 인용의 계속입니다. "천사보다 잠시 낮게"의 그리스어 brachy ti는 시간적으로도 공간적으로도 해석 가능합니다. 히브리서는 이를 그리스도의 성육신과 연결시킵니다: 예수님은 잠시 동안(성육신부터 부활까지) 천사보다 낮은 인간이 되셨지만, 이후 영광과 존귀로 관을 쓰셨습니다(부활과 승천). 이는 또한 창세기 1:26-28의 인간 통치 사명을 반영합니다.'
    },
    korean_translation: {
      natural_translation: '주께서는 그를 천사들보다 잠깐 동안 낮게 하시고, 영광과 존귀의 관을 씌우셨으며',
      translation_notes: '인간의 일시적 낮아짐과 최종적 영광의 대조'
    }
  },
  {
    reference: 'Hebrews 2:8',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '인용: 만물 복종',
        original_text: 'and put everything under their feet',
        korean_translation: '만물을 그 발 아래 복종하게 하셨습니다',
        grammatical_explanation: 'put under feet은 완전한 통치권의 고대 관용 표현'
      },
      {
        sequence_order: 2,
        semantic_classification: '해석: 포괄적 의미',
        original_text: 'In putting everything under them, God left nothing that is not subject to them',
        korean_translation: '만물을 그에게 복종하게 하셨은즉 복종하지 않은 것이 하나도 없어야 하겠으나',
        grammatical_explanation: 'everything과 nothing의 절대 표현으로 통치의 완전함 강조'
      },
      {
        sequence_order: 3,
        semantic_classification: '현실 인정: 아직 미완성',
        original_text: 'Yet at present we do not see everything subject to them',
        korean_translation: '지금은 아직 만물이 그에게 복종한 것을 보지 못합니다',
        grammatical_explanation: 'Yet는 이상과 현실의 대조, at present는 종말론적 긴장의 "이미와 아직" 구조'
      }
    ],
    vocabulary: [
      {
        word: 'under their feet',
        ipa_pronunciation: '/ˈʌndər ðɛr fiːt/',
        korean_pronunciation: '언더 데어 피트',
        part_of_speech: '전치사구',
        definition_korean: '발 아래',
        usage_note: '고대 근동의 관용 표현으로 완전한 정복과 통치를 상징'
      },
      {
        word: 'subject',
        ipa_pronunciation: '/ˈsʌbdʒɪkt/',
        korean_pronunciation: '섭젝트',
        part_of_speech: '형용사',
        definition_korean: '복종하는',
        usage_note: '그리스어 hypotassō로 권위 아래 질서 있게 배치됨'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '시편 8:6 인용 완료 후 저자의 해석이 이어집니다. 하나님은 인간에게 만물 통치권을 주셨지만(창 1:28), 현실에서는 아직 성취되지 않았습니다. 이것이 종말론적 긴장("이미와 아직")입니다. 인간은 타락으로 통치 능력을 상실했고, 오직 완전한 인간 예수 그리스도만이 이 사명을 성취하십니다. "지금은 아직"은 그리스도의 재림 때 완성될 미래를 암시합니다.'
    },
    korean_translation: {
      natural_translation: '만물을 그 발 아래 두셨습니다. 하나님께서 만물을 그에게 복종시키실 때에 복종하지 않을 것을 하나도 남겨 두지 않으셨습니다. 그러나 지금 우리는 아직 만물이 그에게 복종한 것을 보지 못하고 있습니다.',
      translation_notes: '이상적 통치권과 현실의 간극을 제시하여 그리스도의 필요성 암시'
    },
    special_explanation: {
      explanation_type: '신학적 개념',
      content: '종말론적 긴장: 그리스도의 초림으로 하나님 나라가 "이미" 시작되었지만 재림 때까지 "아직" 완성되지 않은 상태입니다. 만물 복종도 그리스도께 원리적으로는 이루어졌으나(엡 1:22) 실제적으로는 재림 때 완성됩니다(고전 15:25-28).'
    }
  },
  {
    reference: 'Hebrews 2:9',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '대조: 현재의 성취',
        original_text: 'But we do see Jesus, who was made lower than the angels for a little while',
        korean_translation: '그러나 우리는 천사들보다 잠시 낮아지신 예수를 봅니다',
        grammatical_explanation: 'But은 2:8의 "아직 안 보임"과 대조, do see는 강조, for a little while은 성육신 기간'
      },
      {
        sequence_order: 2,
        semantic_classification: '이유: 죽음과 영광',
        original_text: 'now crowned with glory and honor because he suffered death',
        korean_translation: '죽음의 고난을 받으심으로 말미암아 영광과 존귀의 관을 쓰신',
        grammatical_explanation: 'now crowned는 부활 승천 후 현재 상태, because절은 영광의 이유'
      },
      {
        sequence_order: 3,
        semantic_classification: '목적: 만인을 위한 죽음',
        original_text: 'so that by the grace of God he might taste death for everyone',
        korean_translation: '하나님의 은혜로 모든 사람을 위하여 죽음을 맛보셨습니다',
        grammatical_explanation: 'so that은 목적절, by the grace of God은 대속의 동기, for everyone은 보편성'
      }
    ],
    vocabulary: [
      {
        word: 'crowned',
        ipa_pronunciation: '/kraʊnd/',
        korean_pronunciation: '크라운드',
        part_of_speech: '동사',
        definition_korean: '관을 씌우다',
        usage_note: '부활 승천 후 예수님의 영광을 표현'
      },
      {
        word: 'suffered',
        ipa_pronunciation: '/ˈsʌfərd/',
        korean_pronunciation: '서퍼드',
        part_of_speech: '동사',
        definition_korean: '고난받다',
        usage_note: '그리스어 pathēma로 십자가 고난'
      },
      {
        word: 'taste',
        ipa_pronunciation: '/teɪst/',
        korean_pronunciation: '테이스트',
        part_of_speech: '동사',
        definition_korean: '맛보다, 경험하다',
        usage_note: '그리스어 geusētai로 완전히 경험하다, 실제로 겪다'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '히브리서 그리스도론의 핵심 구절입니다. 예수님은 인간이 되어(천사보다 낮아짐) 죽음을 경험하셨고, 그 결과 영광을 받으셨습니다(부활 승천). 이것이 2:5-8의 딜레마(인간에게 주어진 통치권이 아직 실현 안 됨)의 해답입니다. "죽음을 맛보다"는 단순한 경험이 아니라 죽음을 완전히 겪으셨다는 의미입니다. "모든 사람을 위하여"는 그리스도 대속의 보편성을 강조하며, "하나님의 은혜로"는 인간의 공로가 아닌 하나님의 주도권을 나타냅니다.'
    },
    korean_translation: {
      natural_translation: '그러나 우리는 천사들보다 잠깐 동안 낮아지셨다가 죽음의 고난을 받으심으로 영광과 존귀의 관을 쓰신 예수를 봅니다. 이는 하나님의 은혜로 모든 사람을 위하여 죽음을 맛보시게 하려 하심이었습니다.',
      translation_notes: '낮아짐-고난-영광의 그리스도 서사와 대속의 목적'
    },
    special_explanation: {
      explanation_type: '그리스도론적 해석',
      content: '시편 8편을 그리스도론적으로 재해석한 핵심입니다. 인간에게 약속된 통치권은 완전한 인간이자 하나님이신 예수 그리스도를 통해서만 실현됩니다. 그분의 낮아짐(성육신)과 높아짐(부활 승천)은 모든 믿는 자의 패턴이 됩니다.'
    }
  },
  {
    reference: 'Hebrews 2:10',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '설명: 하나님의 적합한 방법',
        original_text: 'In bringing many sons and daughters to glory, it was fitting that God, for whom and through whom everything exists, should make the pioneer of their salvation perfect through what he suffered',
        korean_translation: '만물이 그를 위하고 그로 말미암은 하나님께서 많은 아들들을 이끌어 영광에 들어가게 하시는 일에, 그들의 구원의 창시자를 고난을 통하여 온전하게 하심이 합당하였습니다',
        grammatical_explanation: 'fitting은 신학적 적합성, for whom and through whom은 하나님의 창조 주권, pioneer는 선구자, perfect through suffering은 역설적 온전함'
      }
    ],
    vocabulary: [
      {
        word: 'fitting',
        ipa_pronunciation: '/ˈfɪtɪŋ/',
        korean_pronunciation: '피팅',
        part_of_speech: '형용사',
        definition_korean: '적합한, 마땅한',
        usage_note: '그리스어 eprepen으로 하나님 성품에 어울리는'
      },
      {
        word: 'pioneer',
        ipa_pronunciation: '/ˌpaɪəˈnɪr/',
        korean_pronunciation: '파이어니어',
        part_of_speech: '명사',
        definition_korean: '창시자, 선도자',
        usage_note: '그리스어 archēgon으로 길을 여는 자, 대장'
      },
      {
        word: 'perfect',
        ipa_pronunciation: '/ˈpɜːrfɪkt/',
        korean_pronunciation: '퍼펙트',
        part_of_speech: '형용사',
        definition_korean: '온전하게 하다',
        usage_note: '그리스어 teleiōsai로 목적을 완성하다, 자격을 갖추다'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '왜 하나님의 아들이 고난을 받아야 했는가에 대한 신학적 설명입니다. "합당하다"는 하나님의 지혜와 정의에 부합함을 의미합니다. "많은 아들들"은 믿는 자들을 가리키며, 예수님이 그들을 영광으로 인도하는 선구자(pioneer)입니다. "온전하게 하다"는 도덕적 완전이 아니라(예수님은 이미 죄 없으심) 대제사장과 구원자로서의 자격을 고난을 통해 완성하셨다는 의미입니다. 이는 히브리서의 핵심 역설: 고난을 통한 온전함입니다.'
    },
    korean_translation: {
      natural_translation: '만물이 그분으로 말미암고 그분을 위하여 있는 하나님께서 많은 아들을 이끌어 영광에 들어가게 하시는 일에서, 그들의 구원의 창시자를 고난을 통하여 온전하게 하신 것이 합당합니다.',
      translation_notes: '그리스도 고난의 신학적 필연성과 목적'
    },
    special_explanation: {
      explanation_type: '핵심 개념',
      content: 'teleiōsai(온전하게 하다)는 히브리서의 핵심 개념으로, 제사장이 직무를 수행할 자격을 얻는 것을 의미합니다(레위기 8장). 예수님은 고난을 통해 우리와 같이 되셔서 완전한 대제사장이 되셨습니다.'
    }
  },
  {
    reference: 'Hebrews 2:11',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '설명: 성화자와 피성화자',
        original_text: 'Both the one who makes people holy and those who are made holy are of the same family',
        korean_translation: '거룩하게 하시는 이와 거룩하게 되는 자들이 모두 한 근원에서 났으니',
        grammatical_explanation: 'Both... and는 병행 구조, of the same family는 공통 기원, 인성의 공유'
      },
      {
        sequence_order: 2,
        semantic_classification: '결과: 형제됨',
        original_text: 'So Jesus is not ashamed to call them brothers and sisters',
        korean_translation: '그러므로 예수께서 그들을 형제라 부르기를 부끄러워하지 아니하십니다',
        grammatical_explanation: 'So는 결론, not ashamed는 강한 긍정(기꺼이 부르심), brothers는 가족 은유'
      }
    ],
    vocabulary: [
      {
        word: 'makes holy',
        ipa_pronunciation: '/meɪks ˈhoʊli/',
        korean_pronunciation: '메익스 홀리',
        part_of_speech: '동사구',
        definition_korean: '거룩하게 하다',
        usage_note: '그리스어 hagiazōn으로 성화시키는 자, 그리스도'
      },
      {
        word: 'same family',
        ipa_pronunciation: '/seɪm ˈfæməli/',
        korean_pronunciation: '세임 패밀리',
        part_of_speech: '명사구',
        definition_korean: '같은 가족, 한 근원',
        usage_note: '그리스어 ex henos로 하나에서 나옴, 아담 또는 하나님을 지칭'
      },
      {
        word: 'ashamed',
        ipa_pronunciation: '/əˈʃeɪmd/',
        korean_pronunciation: '어쉐임드',
        part_of_speech: '형용사',
        definition_korean: '부끄러워하는',
        usage_note: '그리스어 epaischunetai로 수치스럽게 여기다'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '예수님과 믿는 자들의 연대성을 설명합니다. "한 근원"은 아담(공통 인성) 또는 하나님(창조주)을 의미할 수 있으며, 양쪽 다 가능합니다. 핵심은 예수님이 우리와 같은 인간 본성을 가지셨다는 것입니다. "형제"는 단순한 비유가 아니라 실제적 가족 관계를 나타내며, 예수님이 우리를 동등한 가족으로 대우하심을 의미합니다. "부끄러워하지 않으신다"는 강한 긍정으로, 비록 우리가 죄인이지만 예수님이 기꺼이 우리를 인정하신다는 뜻입니다.'
    },
    korean_translation: {
      natural_translation: '거룩하게 하시는 분과 거룩하게 되는 사람들이 모두 하나에서 났습니다. 그러므로 예수님께서는 그들을 형제자매라고 부르시기를 부끄러워하지 않으십니다.',
      translation_notes: '그리스도와 믿는 자의 연대성, 공통 인성을 통한 형제됨'
    }
  },
  {
    reference: 'Hebrews 2:12',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '인용: 이름 선포',
        original_text: 'He says, "I will declare your name to my brothers and sisters; in the assembly I will sing your praises"',
        korean_translation: '"내가 주의 이름을 내 형제들에게 선포하고 회중 가운데에서 주를 찬송하리라" 하셨고',
        grammatical_explanation: '시편 22:22 인용, I will declare는 미래 의지, assembly는 예배 공동체'
      }
    ],
    vocabulary: [
      {
        word: 'declare',
        ipa_pronunciation: '/dɪˈklɛr/',
        korean_pronunciation: '디클레어',
        part_of_speech: '동사',
        definition_korean: '선포하다, 알리다',
        usage_note: '그리스어 apangellō로 공식적으로 알리다'
      },
      {
        word: 'assembly',
        ipa_pronunciation: '/əˈsɛmbli/',
        korean_pronunciation: '어셈블리',
        part_of_speech: '명사',
        definition_korean: '회중, 모임',
        usage_note: '그리스어 ekklēsias로 교회, 예배 공동체'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '시편 22:22를 인용하여 예수님이 우리를 형제라 부르신다는 증거를 제시합니다. 시편 22편은 메시아의 고난시로, 십자가에서 예수님이 인용하신 시편입니다(마 27:46). 이 시편의 후반부는 고난 후 승리와 찬양으로 전환되는데, 히브리서는 부활하신 예수님이 교회 안에서 하나님을 찬양하신다고 해석합니다. 이는 예수님이 우리와 분리되지 않고 우리 가운데 계시며 우리를 형제로 여기신다는 증거입니다.'
    },
    korean_translation: {
      natural_translation: '예수께서 "내가 주님의 이름을 내 형제들에게 알리고, 회중 가운데서 주님을 찬양하겠습니다" 하고 말씀하셨습니다.',
      translation_notes: '시편 22편 인용으로 형제됨의 성경적 근거 제시'
    },
    special_explanation: {
      explanation_type: '구약 인용',
      content: '시편 22편은 그리스도의 고난과 영광을 예언한 핵심 시편입니다. 예수님은 십자가에서 이 시편을 인용하셨고(마 27:46), 히브리서는 부활 후 승리의 부분(22:22)을 인용하여 그리스도와 교회의 연합을 강조합니다.'
    }
  },
  {
    reference: 'Hebrews 2:13',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '인용: 신뢰 표현',
        original_text: 'And again, "I will put my trust in him"',
        korean_translation: '또 "나는 그를 의지하리라" 하셨고',
        grammatical_explanation: '이사야 8:17 인용, I will trust는 인간 예수의 하나님 의존'
      },
      {
        sequence_order: 2,
        semantic_classification: '인용: 자녀 관계',
        original_text: 'And again he says, "Here am I, and the children God has given me"',
        korean_translation: '또 "보라 나와 하나님께서 내게 주신 자녀들이라" 하셨습니다',
        grammatical_explanation: '이사야 8:18 인용, Here am I는 임재 선언, children은 제자들/믿는 자들'
      }
    ],
    vocabulary: [
      {
        word: 'trust',
        ipa_pronunciation: '/trʌst/',
        korean_pronunciation: '트러스트',
        part_of_speech: '동사',
        definition_korean: '신뢰하다, 의지하다',
        usage_note: '그리스어 pepoithōs로 확신 있는 의존'
      },
      {
        word: 'children',
        ipa_pronunciation: '/ˈtʃɪldrən/',
        korean_pronunciation: '칠드런',
        part_of_speech: '명사',
        definition_korean: '자녀들',
        usage_note: '그리스어 paidia로 하나님의 백성, 믿는 자들'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '이사야 8:17-18을 인용하여 예수님의 인간성과 우리와의 연대를 강조합니다. "나는 그를 의지하리라"는 인간 예수께서 하나님을 의지하셨음을 보여주며, 이는 그분의 참된 인간성을 증명합니다. "나와 자녀들"은 원래 이사야와 그의 자녀들을 지칭했지만, 히브리서는 이를 그리스도와 교회에 적용합니다. 예수님은 하나님이 맡기신 백성을 자녀로 돌보시며, 그들과 하나의 가족을 이룹니다.'
    },
    korean_translation: {
      natural_translation: '또 "나는 하나님을 신뢰하겠습니다"라고 하셨으며, 또 "보십시오, 여기 나와 하나님께서 내게 주신 자녀들이 있습니다"라고 하셨습니다.',
      translation_notes: '이사야 인용으로 그리스도의 신뢰와 백성 돌봄 강조'
    }
  },
  {
    reference: 'Hebrews 2:14',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '이유: 성육신의 목적',
        original_text: 'Since the children have flesh and blood, he too shared in their humanity',
        korean_translation: '자녀들이 혈육을 가졌으매 그도 또한 같은 모양으로 혈육을 함께 지니셨습니다',
        grammatical_explanation: 'Since절은 이유, flesh and blood는 인간 본성, shared는 완전한 참여'
      },
      {
        sequence_order: 2,
        semantic_classification: '목적: 마귀 멸망',
        original_text: 'so that by his death he might break the power of him who holds the power of death—that is, the devil',
        korean_translation: '이는 자기의 죽음을 통하여 죽음의 권세를 잡은 자 곧 마귀를 멸하시기 위함이요',
        grammatical_explanation: 'so that은 목적절, by his death는 수단, break the power는 권세 파괴'
      }
    ],
    vocabulary: [
      {
        word: 'flesh and blood',
        ipa_pronunciation: '/flɛʃ ænd blʌd/',
        korean_pronunciation: '플레쉬 앤드 블러드',
        part_of_speech: '명사구',
        definition_korean: '혈육, 육체',
        usage_note: '인간의 물리적 본성을 가리키는 관용구'
      },
      {
        word: 'shared',
        ipa_pronunciation: '/ʃɛrd/',
        korean_pronunciation: '쉐어드',
        part_of_speech: '동사',
        definition_korean: '함께 나누다, 공유하다',
        usage_note: '그리스어 meteschēken으로 완전히 참여하다'
      },
      {
        word: 'break the power',
        ipa_pronunciation: '/breɪk ðə ˈpaʊər/',
        korean_pronunciation: '브레이크 더 파워',
        part_of_speech: '동사구',
        definition_korean: '권세를 파괴하다',
        usage_note: '그리스어 katargēsē로 무효화하다, 무력화하다'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '성육신의 목적을 설명합니다. 예수님이 인간이 되신 이유는 죽음을 경험하여 마귀의 권세를 파괴하기 위함입니다. 마귀는 죄를 통해 인간에게 죽음의 두려움을 행사하며 지배했지만, 그리스도께서 죽음을 이기심으로 그 권세를 무력화하셨습니다. "권세를 파괴하다"(katargēsē)는 완전히 무효화시키는 것으로, 십자가와 부활을 통해 죽음과 마귀의 지배가 끝났음을 의미합니다.'
    },
    korean_translation: {
      natural_translation: '자녀들은 피와 살을 가진 존재이므로, 예수님도 마찬가지로 같은 본성을 가지셨습니다. 이는 자기의 죽음으로 죽음의 권세를 쥐고 있는 자, 곧 마귀를 멸하시려는 것이었습니다.',
      translation_notes: '성육신의 목적: 죽음을 통한 마귀 권세 파괴'
    },
    special_explanation: {
      explanation_type: '신학적 역설',
      content: '그리스도는 죽음을 통해 죽음을 정복하셨습니다. 마귀는 죄와 죽음의 두려움으로 인간을 지배했지만, 그리스도께서 무죄한 죽음과 부활로 그 권세를 완전히 무력화하셨습니다(고전 15:55-57).'
    }
  },
  {
    reference: 'Hebrews 2:15',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '목적: 종노릇 해방',
        original_text: 'and free those who all their lives were held in slavery by their fear of death',
        korean_translation: '또 죽기를 무서워하므로 일생 동안 종노릇 하는 모든 자들을 해방하시려 하셨습니다',
        grammatical_explanation: 'free는 해방하다, held in slavery는 속박 상태, fear of death는 지배 수단'
      }
    ],
    vocabulary: [
      {
        word: 'free',
        ipa_pronunciation: '/friː/',
        korean_pronunciation: '프리',
        part_of_speech: '동사',
        definition_korean: '자유케 하다, 해방하다',
        usage_note: '그리스어 apallaxē로 완전히 풀어주다'
      },
      {
        word: 'slavery',
        ipa_pronunciation: '/ˈsleɪvəri/',
        korean_pronunciation: '슬레이버리',
        part_of_speech: '명사',
        definition_korean: '종노릇, 노예 상태',
        usage_note: '그리스어 douleias로 노예제의 속박'
      },
      {
        word: 'fear of death',
        ipa_pronunciation: '/fɪr əv dɛθ/',
        korean_pronunciation: '피어 오브 데쓰',
        part_of_speech: '명사구',
        definition_korean: '죽음의 두려움',
        usage_note: '인간을 지배하는 근본적 공포'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '그리스도의 죽음과 부활의 결과를 설명합니다. 인간은 죽음의 두려움 때문에 일생 동안 속박되어 살았습니다. 이 두려움은 단순한 감정이 아니라 죄와 심판에 대한 근본적 공포입니다. 그러나 그리스도께서 죽음을 이기심으로 우리를 이 두려움에서 해방하셨습니다. "일생 동안"은 보편적이고 지속적인 속박을, "종노릇"은 완전한 지배를 의미합니다. 복음은 이 근본적 두려움으로부터의 해방입니다(롬 8:15, 딤후 1:10).'
    },
    korean_translation: {
      natural_translation: '또한 죽음을 두려워하여 평생 동안 종살이하는 모든 사람을 해방시키려 하셨습니다.',
      translation_notes: '죽음 정복의 결과: 죽음 공포로부터의 해방'
    }
  },
  {
    reference: 'Hebrews 2:16',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '부정: 천사 구원 배제',
        original_text: 'For surely it is not angels he helps',
        korean_translation: '진실로 그가 천사들을 붙들어 주지 아니하시고',
        grammatical_explanation: 'For surely는 강한 확신, not angels는 부정, helps는 구원 행위'
      },
      {
        sequence_order: 2,
        semantic_classification: '긍정: 아브라함 자손 구원',
        original_text: 'but Abraham\'s descendants',
        korean_translation: '아브라함의 자손을 붙들어 주십니다',
        grammatical_explanation: 'but은 대조, Abraham\'s descendants는 믿음의 후손'
      }
    ],
    vocabulary: [
      {
        word: 'helps',
        ipa_pronunciation: '/hɛlps/',
        korean_pronunciation: '헬프스',
        part_of_speech: '동사',
        definition_korean: '돕다, 붙들다',
        usage_note: '그리스어 epilambanetai로 붙잡아 구하다'
      },
      {
        word: 'descendants',
        ipa_pronunciation: '/dɪˈsɛndənts/',
        korean_pronunciation: '디센던츠',
        part_of_speech: '명사',
        definition_korean: '자손, 후손',
        usage_note: '그리스어 sperma로 씨, 후손, 여기서는 믿음의 후손'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '그리스도의 구원 대상을 명확히 합니다. 타락한 천사들은 구원받지 못하지만(베후 2:4, 유 6), 인간은 구원받을 수 있습니다. "아브라함의 자손"은 육신적 유대인뿐 아니라 믿음으로 아브라함의 후손이 된 모든 믿는 자를 의미합니다(갈 3:7, 29). "붙들다"는 빠지는 자를 붙잡아 구하는 강한 이미지로, 능동적이고 확실한 구원 행위를 나타냅니다. 이는 왜 그리스도께서 천사가 아닌 인간이 되셔야 했는지를 설명합니다.'
    },
    korean_translation: {
      natural_translation: '확실히 그분께서는 천사들을 붙잡아 주시는 것이 아니라 아브라함의 후손을 붙잡아 주십니다.',
      translation_notes: '구원 대상의 명확화: 천사가 아닌 인간, 특히 믿음의 후손'
    }
  },
  {
    reference: 'Hebrews 2:17',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '결론: 형제 같이 되심의 필연',
        original_text: 'For this reason he had to be made like them, fully human in every way',
        korean_translation: '그러므로 그가 모든 일에 형제들과 같이 되셔야 했습니다',
        grammatical_explanation: 'For this reason은 앞 논증의 결론, had to는 필연성, fully human은 완전한 인성'
      },
      {
        sequence_order: 2,
        semantic_classification: '목적: 자비롭고 신실한 대제사장',
        original_text: 'in order that he might become a merciful and faithful high priest in service to God',
        korean_translation: '이는 하나님의 일에 자비롭고 신실한 대제사장이 되게 하려 하심이니',
        grammatical_explanation: 'in order that은 목적절, merciful and faithful은 대제사장의 자질, in service to God은 직무 영역'
      },
      {
        sequence_order: 3,
        semantic_classification: '목적: 백성의 죄 속죄',
        original_text: 'and that he might make atonement for the sins of the people',
        korean_translation: '백성의 죄를 속죄하려 하심이라',
        grammatical_explanation: 'and that은 추가 목적, make atonement는 제사장적 속죄 행위'
      }
    ],
    vocabulary: [
      {
        word: 'merciful',
        ipa_pronunciation: '/ˈmɜːrsɪfəl/',
        korean_pronunciation: '머시풀',
        part_of_speech: '형용사',
        definition_korean: '자비로운',
        usage_note: '그리스어 eleēmōn으로 동정심 많은'
      },
      {
        word: 'faithful',
        ipa_pronunciation: '/ˈfeɪθfəl/',
        korean_pronunciation: '페이쓰풀',
        part_of_speech: '형용사',
        definition_korean: '신실한',
        usage_note: '그리스어 pistos로 믿을 수 있는, 충성된'
      },
      {
        word: 'high priest',
        ipa_pronunciation: '/haɪ priːst/',
        korean_pronunciation: '하이 프리스트',
        part_of_speech: '명사구',
        definition_korean: '대제사장',
        usage_note: '그리스어 archierea, 히브리서의 핵심 그리스도론적 칭호'
      },
      {
        word: 'atonement',
        ipa_pronunciation: '/əˈtoʊnmənt/',
        korean_pronunciation: '어톤먼트',
        part_of_speech: '명사',
        definition_korean: '속죄, 화목',
        usage_note: '그리스어 hilaskesthai로 죄를 덮어 화해케 함'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '히브리서 2장의 결론이자 3-10장의 대제사장 주제로 전환하는 핵심 구절입니다. 그리스도께서 인간이 되신 목적은 자비롭고 신실한 대제사장이 되기 위함입니다. "자비로운"은 우리의 연약함을 동정하실 수 있음을, "신실한"은 하나님께 충성되고 우리에게 믿을 수 있음을 의미합니다. 대제사장은 반드시 인간이어야 하므로(5:1) 그리스도께서 완전한 인간이 되셔야 했습니다. 속죄는 대제사장의 핵심 직무로, 그리스도께서 자신을 희생 제물로 드려 완전한 속죄를 이루셨습니다.'
    },
    korean_translation: {
      natural_translation: '그러므로 그분은 모든 면에서 형제들과 같이 되셔야 했습니다. 이는 하나님을 섬기는 일에 자비롭고 신실한 대제사장이 되셔서 백성의 죄를 속죄하시려는 것이었습니다.',
      translation_notes: '성육신의 목적: 자비롭고 신실한 대제사장이 되어 속죄하심'
    },
    special_explanation: {
      explanation_type: '핵심 그리스도론',
      content: '대제사장 그리스도론은 히브리서의 독특한 기여입니다. 그리스도는 완전한 인간이 되심으로(자비) 우리를 이해하시고, 완전한 순종으로(신실) 하나님을 대표하며, 자기 희생으로 완전한 속죄를 이루셨습니다. 이는 구약 제사 제도의 완성입니다.'
    }
  },
  {
    reference: 'Hebrews 2:18',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '이유: 시험받으심',
        original_text: 'Because he himself suffered when he was tempted',
        korean_translation: '그가 친히 시험을 받아 고난을 당하셨으므로',
        grammatical_explanation: 'Because절은 이유, himself는 강조, suffered와 tempted의 연결'
      },
      {
        sequence_order: 2,
        semantic_classification: '결과: 도우실 능력',
        original_text: 'he is able to help those who are being tempted',
        korean_translation: '시험받는 자들을 능히 도우실 수 있습니다',
        grammatical_explanation: 'is able to는 능력, help는 구체적 도움, those who are being tempted는 현재 시험받는 자들'
      }
    ],
    vocabulary: [
      {
        word: 'suffered',
        ipa_pronunciation: '/ˈsʌfərd/',
        korean_pronunciation: '서퍼드',
        part_of_speech: '동사',
        definition_korean: '고난받다',
        usage_note: '그리스어 epathen으로 경험하다, 겪다'
      },
      {
        word: 'tempted',
        ipa_pronunciation: '/ˈtɛmptɪd/',
        korean_pronunciation: '템프티드',
        part_of_speech: '동사',
        definition_korean: '시험받다, 유혹받다',
        usage_note: '그리스어 peirastheis로 시험, 유혹, 시련'
      },
      {
        word: 'able to help',
        ipa_pronunciation: '/ˈeɪbəl tuː hɛlp/',
        korean_pronunciation: '에이블 투 헬프',
        part_of_speech: '동사구',
        definition_korean: '도울 수 있다',
        usage_note: '그리스어 dynastai boēthēsai로 능력 있게 원조하다'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '히브리서 2장의 최종 결론입니다. 그리스도께서 시험과 고난을 경험하셨기 때문에 우리가 시험받을 때 도우실 수 있습니다. "시험"(peirasmos)은 외적 유혹뿐 아니라 고난과 역경을 포함합니다. 예수님은 광야 시험(마 4장), 겟세마네 고뇌(막 14:32-42), 십자가 고난 등 모든 시험을 경험하셨지만 죄 없이 승리하셨습니다(4:15). 이 경험을 통해 그분은 우리의 연약함을 이해하시고(자비) 효과적으로 도우실 수 있습니다. 이것이 성육신의 실천적 유익입니다.'
    },
    korean_translation: {
      natural_translation: '그분 자신이 시험을 받아 고난을 당하셨으므로, 시험받는 사람들을 능히 도우실 수 있습니다.',
      translation_notes: '고난 경험을 통한 도우심의 능력, 2장 전체의 실천적 결론'
    }
  },
  // ===== HEBREWS 3 =====
  {
    reference: 'Hebrews 3:1',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '호칭: 거룩한 형제들',
        original_text: 'Therefore, holy brothers and sisters, who share in the heavenly calling',
        korean_translation: '그러므로 하늘의 부르심에 참여한 거룩한 형제들이여',
        grammatical_explanation: 'Therefore는 2장 논증의 결론, holy brothers는 친밀한 호칭, heavenly calling은 소명'
      },
      {
        sequence_order: 2,
        semantic_classification: '명령: 예수 깊이 생각',
        original_text: 'fix your thoughts on Jesus, whom we acknowledge as our apostle and high priest',
        korean_translation: '우리가 고백하는 사도시며 대제사장이신 예수를 깊이 생각하십시오',
        grammatical_explanation: 'fix your thoughts는 집중 명령, apostle and high priest는 이중 직분'
      }
    ],
    vocabulary: [
      {
        word: 'fix your thoughts',
        ipa_pronunciation: '/fɪks jʊr θɔːts/',
        korean_pronunciation: '픽스 유어 쏘츠',
        part_of_speech: '동사구',
        definition_korean: '생각을 고정하다, 깊이 생각하다',
        usage_note: '그리스어 katanoēsate로 주의 깊게 관찰하고 묵상하다'
      },
      {
        word: 'apostle',
        ipa_pronunciation: '/əˈpɑːsəl/',
        korean_pronunciation: '어파슬',
        part_of_speech: '명사',
        definition_korean: '사도, 보냄받은 자',
        usage_note: '그리스어 apostolon으로 하나님이 보내신 대표자'
      },
      {
        word: 'heavenly calling',
        ipa_pronunciation: '/ˈhɛvənli ˈkɔːlɪŋ/',
        korean_pronunciation: '헤븐리 콜링',
        part_of_speech: '명사구',
        definition_korean: '하늘의 부르심',
        usage_note: '그리스어 klēseōs epouraniou로 하나님의 초청'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '히브리서 3:1-6은 그리스도와 모세를 비교합니다. "거룩한 형제들"은 2:11의 형제 관계를 반영하며, "하늘의 부르심"은 복음 초대를 의미합니다. "사도이며 대제사장"은 그리스도의 이중 역할로, 사도로서 하나님을 인간에게 대표하시고(하나님 → 인간), 대제사장으로서 인간을 하나님께 대표하십니다(인간 → 하나님). "깊이 생각하라"는 표면적 인식이 아닌 집중적 묵상을 요구합니다. 이는 모세와의 비교로 이어집니다.'
    },
    korean_translation: {
      natural_translation: '그러므로 하늘의 부르심에 참여한 거룩한 형제자매 여러분, 우리가 고백하는 사도이시며 대제사장이신 예수님을 깊이 생각하십시오.',
      translation_notes: '모세 비교를 위한 도입, 예수의 이중 직분 강조'
    },
    special_explanation: {
      explanation_type: '직분 의미',
      content: '사도(apostle)는 하나님에게서 인간에게로 보냄받은 자로 계시의 중보자를, 대제사장(high priest)은 인간에게서 하나님께로 나아가는 자로 속죄의 중보자를 의미합니다. 예수님은 양쪽을 완전히 수행하십니다.'
    }
  }
]

async function main() {
  console.log(`히브리서 2-4장 분석 데이터 저장 시작 (총 ${analyses.length}개 구절)...\n`)

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
