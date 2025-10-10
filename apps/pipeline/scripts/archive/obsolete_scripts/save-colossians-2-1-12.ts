import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

const analyses: AnalysisData[] = [
  // Colossians 2:1
  {
    reference: 'Colossians 2:1',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '열정적 관심 표현',
        original_text: 'I want you to know how hard I am contending for you',
        korean_translation: '내가 여러분을 위해 얼마나 열심히 싸우고 있는지 알기를 원합니다',
        grammatical_explanation: '동사 want + 목적절 (you to know), contend는 현재진행형으로 계속되는 노력 강조'
      },
      {
        sequence_order: 2,
        semantic_classification: '관심 대상 확장',
        original_text: 'and for those at Laodicea',
        korean_translation: '그리고 라오디게아에 있는 사람들을 위해서도',
        grammatical_explanation: '병렬 구조 (and for...), 지역 전치사구 (at Laodicea)'
      },
      {
        sequence_order: 3,
        semantic_classification: '관심 대상의 특징',
        original_text: 'and for all who have not met me personally',
        korean_translation: '그리고 나를 직접 만나지 못한 모든 사람들을 위해서도',
        grammatical_explanation: '관계대명사절 (who have not met), 현재완료 부정형으로 경험 없음 표현'
      }
    ],
    vocabulary: [
      {
        word: 'contending',
        ipa_pronunciation: '/kənˈtɛndɪŋ/',
        korean_pronunciation: '컨텐딩',
        part_of_speech: '동사 (현재분사)',
        definition_korean: '싸우다, 분투하다, 노력하다',
        usage_note: '강한 노력이나 투쟁을 의미하는 단어'
      },
      {
        word: 'Laodicea',
        ipa_pronunciation: '/ˌleɪədiːˈsiːə/',
        korean_pronunciation: '라오디시아',
        part_of_speech: '고유명사',
        definition_korean: '소아시아의 고대 도시, 골로새와 히에라폴리스 근처',
        usage_note: '바울 당시 부유하고 번영했던 도시'
      },
      {
        word: 'personally',
        ipa_pronunciation: '/ˈpɜːrsənəli/',
        korean_pronunciation: '퍼스널리',
        part_of_speech: '부사',
        definition_korean: '직접, 개인적으로',
        usage_note: '바울이 이 교회들을 직접 방문하지 않았음을 시사'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 골로새 교회와 라오디게아 교회, 그리고 자신을 직접 만나지 못한 다른 믿음의 공동체들을 위해 열심히 기도하고 있음을 표현합니다. 이는 바울의 사역이 단지 자신이 직접 세운 교회들뿐 아니라 더 넓은 그리스도의 몸 전체를 향한 것임을 보여줍니다. 골로새와 라오디게아는 소아시아의 리쿠스 계곡에 위치한 인접 도시들로, 바울이 에베소에서 사역할 때 이 지역에 복음이 전파되었습니다. "싸우고 있다"는 표현은 바울이 투옥 중에도 이 교회들을 위해 영적 전투를 벌이고 있음을 나타냅니다.',
      cross_references: ['Colossians 4:13-16', 'Revelation 3:14-22']
    },
    korean_translation: {
      natural_translation: '나는 여러분과 라오디게아에 있는 사람들, 그리고 나를 직접 만나보지 못한 모든 이들을 위해 얼마나 열심히 싸우고 있는지 여러분이 알기를 원합니다.',
      translation_notes: 'contending을 "싸우다"로 번역하여 바울의 영적 투쟁을 강조'
    },
    special_explanation: {
      explanation_type: '역사적 배경',
      content: '바울은 골로새 교회를 직접 세우지 않았습니다. 이 교회는 아마도 에바브라가 바울의 에베소 사역 중에 복음을 듣고 돌아가 세운 것으로 보입니다. 그럼에도 바울은 이 교회들을 위해 깊은 관심과 사랑을 가지고 기도하며 영적 전투를 벌이고 있습니다. 이는 사도로서 모든 교회를 돌보는 바울의 책임감을 보여줍니다.',
      examples: ['Colossians 1:7-8 (에바브라에 대한 언급)', 'Acts 19:10 (에베소에서의 사역)']
    }
  },

  // Colossians 2:2
  {
    reference: 'Colossians 2:2',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '목표 선언',
        original_text: 'My goal is that they may be encouraged in heart',
        korean_translation: '내 목표는 그들이 마음에 격려를 받는 것입니다',
        grammatical_explanation: '주격 보어 구조 (goal is that...), 가정법 현재 (may be)'
      },
      {
        sequence_order: 2,
        semantic_classification: '목표의 확장',
        original_text: 'and united in love',
        korean_translation: '그리고 사랑 안에서 연합하는 것입니다',
        grammatical_explanation: '병렬 구조 (encouraged... and united), 전치사구 (in love)'
      },
      {
        sequence_order: 3,
        semantic_classification: '목적 설명',
        original_text: 'so that they may have the full riches of complete understanding',
        korean_translation: '그래서 그들이 완전한 이해의 충만한 부요함을 가지게 하기 위함입니다',
        grammatical_explanation: '목적절 (so that), 이중 수식 (full riches of complete understanding)'
      },
      {
        sequence_order: 4,
        semantic_classification: '최종 목적',
        original_text: 'in order that they may know the mystery of God, namely, Christ',
        korean_translation: '그들이 하나님의 비밀, 곧 그리스도를 알게 하기 위함입니다',
        grammatical_explanation: '목적절 (in order that), 동격 표현 (namely, Christ는 mystery of God와 동격)'
      }
    ],
    vocabulary: [
      {
        word: 'encouraged',
        ipa_pronunciation: '/ɪnˈkʌrɪdʒd/',
        korean_pronunciation: '인커리지드',
        part_of_speech: '형용사',
        definition_korean: '격려받은, 힘을 얻은',
        usage_note: '마음의 강함과 용기를 얻는 것'
      },
      {
        word: 'united',
        ipa_pronunciation: '/juːˈnaɪtɪd/',
        korean_pronunciation: '유나이티드',
        part_of_speech: '형용사',
        definition_korean: '연합된, 하나 된',
        usage_note: '사랑으로 함께 묶인 상태'
      },
      {
        word: 'riches',
        ipa_pronunciation: '/ˈrɪtʃɪz/',
        korean_pronunciation: '리치스',
        part_of_speech: '명사',
        definition_korean: '부, 풍요로움, 재물',
        usage_note: '여기서는 영적 부요함을 의미'
      },
      {
        word: 'mystery',
        ipa_pronunciation: '/ˈmɪstəri/',
        korean_pronunciation: '미스터리',
        part_of_speech: '명사',
        definition_korean: '비밀, 신비',
        usage_note: '바울 신학에서 중요한 용어로, 이전에 감추어졌다가 이제 계시된 하나님의 구원 계획'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 자신의 사역 목표를 네 단계로 제시합니다. 첫째, 믿는 이들이 마음에 격려를 받는 것, 둘째, 사랑 안에서 연합하는 것, 셋째, 완전한 이해의 충만함을 얻는 것, 넷째, 궁극적으로 하나님의 비밀인 그리스도를 아는 것입니다. 이 구조는 점점 더 깊어지는 영적 성숙의 과정을 보여줍니다. 바울에게 "하나님의 비밀"은 그리스도 자신이며, 이는 골로새 교회가 직면한 거짓 가르침에 대한 답입니다. 참된 지혜와 지식은 다른 곳이 아니라 그리스도 안에 있습니다.',
      cross_references: ['Colossians 1:27', 'Ephesians 3:3-6', '1 Corinthians 2:7']
    },
    korean_translation: {
      natural_translation: '내 목표는 그들이 마음에 격려를 받고 사랑 안에서 연합하여, 완전한 이해의 충만한 부요함을 얻고, 하나님의 비밀 곧 그리스도를 알게 되는 것입니다.',
      translation_notes: '"namely, Christ"를 "곧 그리스도"로 번역하여 동격 관계를 명확히 표현'
    },
    special_explanation: {
      explanation_type: '신학적 개념',
      content: '바울 서신에서 "하나님의 비밀"(mystery)은 핵심 신학 용어입니다. 이는 구약 시대에는 감추어졌다가 이제 그리스도를 통해 계시된 하나님의 구원 계획을 의미합니다. 골로새서에서 이 비밀은 단순히 그리스도 자신이며, 특히 유대인과 이방인이 함께 그리스도 안에서 하나 됨을 가리킵니다. 바울은 거짓 교사들이 제시하는 특별한 지식이나 신비 체험보다 그리스도를 아는 것이 참된 지혜임을 강조합니다.',
      examples: ['Colossians 1:26-27', 'Ephesians 3:4-6', 'Romans 16:25-26']
    }
  },

  // Colossians 2:3
  {
    reference: 'Colossians 2:3',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '그리스도의 충만성 선언',
        original_text: 'in whom are hidden all the treasures of wisdom and knowledge',
        korean_translation: '그 안에 지혜와 지식의 모든 보화가 감추어져 있습니다',
        grammatical_explanation: '관계대명사절 (in whom), 도치 구조 (are hidden이 주어 앞에 위치), 이중 소유격 (treasures of wisdom and knowledge)'
      }
    ],
    vocabulary: [
      {
        word: 'hidden',
        ipa_pronunciation: '/ˈhɪdən/',
        korean_pronunciation: '히든',
        part_of_speech: '형용사',
        definition_korean: '감추어진, 숨겨진',
        usage_note: '보물처럼 귀중하게 보관되어 있다는 의미'
      },
      {
        word: 'treasures',
        ipa_pronunciation: '/ˈtrɛʒərz/',
        korean_pronunciation: '트레저스',
        part_of_speech: '명사',
        definition_korean: '보화, 보물',
        usage_note: '매우 귀중하고 가치 있는 것들'
      },
      {
        word: 'wisdom',
        ipa_pronunciation: '/ˈwɪzdəm/',
        korean_pronunciation: '위즈덤',
        part_of_speech: '명사',
        definition_korean: '지혜',
        usage_note: '실제 삶에 적용할 수 있는 통찰력과 분별력'
      },
      {
        word: 'knowledge',
        ipa_pronunciation: '/ˈnɑːlɪdʒ/',
        korean_pronunciation: '날리지',
        part_of_speech: '명사',
        definition_korean: '지식',
        usage_note: '사실과 정보에 대한 이해'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 그리스도 안에 지혜와 지식의 모든 보화가 감추어져 있다고 선언합니다. "감추어져 있다"는 표현은 이것이 쉽게 발견되지 않는 귀중한 보물임을 시사하지만, 동시에 그리스도 안에서 찾을 수 있음을 의미합니다. 이는 골로새 교회를 위협하던 영지주의적 거짓 가르침에 대한 직접적인 반박입니다. 영지주의자들은 특별한 비밀 지식을 통해서만 구원에 이를 수 있다고 주장했지만, 바울은 모든 참된 지혜와 지식이 그리스도 안에 있다고 가르칩니다. "모든"이라는 말은 그리스도 밖에서 더 찾을 필요가 없음을 강조합니다.',
      cross_references: ['1 Corinthians 1:24', '1 Corinthians 1:30', 'Colossians 1:19']
    },
    korean_translation: {
      natural_translation: '그리스도 안에는 지혜와 지식의 모든 보화가 감추어져 있습니다.',
      translation_notes: '도치 구조를 한국어의 자연스러운 어순으로 변경'
    },
    special_explanation: {
      explanation_type: '논쟁적 맥락',
      content: '이 구절은 골로새 교회가 직면한 거짓 가르침에 대한 바울의 답변입니다. 당시 영지주의 사상의 영향을 받은 거짓 교사들은 그리스도를 믿는 것만으로는 부족하며, 특별한 비밀 지식이나 영적 체험이 필요하다고 주장했습니다. 바울은 이에 맞서 그리스도 안에 "모든" 지혜와 지식이 있다고 강조합니다. 따라서 신자들은 그리스도 밖에서 추가적인 지식이나 계시를 구할 필요가 없습니다.',
      examples: ['Colossians 2:8', 'Colossians 2:18-19']
    }
  },

  // Colossians 2:4
  {
    reference: 'Colossians 2:4',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '경고의 목적 진술',
        original_text: 'I tell you this so that no one may deceive you',
        korean_translation: '내가 이것을 말하는 이유는 아무도 여러분을 속이지 못하게 하기 위함입니다',
        grammatical_explanation: '목적절 (so that), 부정 주어 (no one), 가정법 현재 (may deceive)'
      },
      {
        sequence_order: 2,
        semantic_classification: '속임의 방법',
        original_text: 'by fine-sounding arguments',
        korean_translation: '그럴듯하게 들리는 논증으로',
        grammatical_explanation: '수단의 전치사구 (by...), 복합 형용사 (fine-sounding)'
      }
    ],
    vocabulary: [
      {
        word: 'deceive',
        ipa_pronunciation: '/dɪˈsiːv/',
        korean_pronunciation: '디시브',
        part_of_speech: '동사',
        definition_korean: '속이다, 기만하다',
        usage_note: '진실이 아닌 것을 믿게 만드는 것'
      },
      {
        word: 'fine-sounding',
        ipa_pronunciation: '/faɪn ˈsaʊndɪŋ/',
        korean_pronunciation: '파인 사운딩',
        part_of_speech: '형용사',
        definition_korean: '그럴듯하게 들리는, 말이 좋은',
        usage_note: '겉으로는 설득력 있어 보이지만 실제로는 거짓인 것'
      },
      {
        word: 'arguments',
        ipa_pronunciation: '/ˈɑːrɡjuːmənts/',
        korean_pronunciation: '아규먼츠',
        part_of_speech: '명사',
        definition_korean: '논증, 주장, 논거',
        usage_note: '논리적으로 보이는 주장이나 이론'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 앞서 그리스도 안에 모든 지혜와 지식이 있다고 말한 이유를 밝힙니다. 그것은 골로새 교인들이 "그럴듯하게 들리는 논증"에 속지 않게 하기 위함입니다. 이 표현은 헬라어 "피타노로기아"(pithanologia)로, 설득력 있어 보이지만 실제로는 공허한 수사학적 논증을 의미합니다. 당시 골로새 교회에는 철학적으로 세련되고 지적으로 매력적으로 보이는 거짓 가르침이 퍼지고 있었습니다. 바울은 교인들에게 그리스도 안에서 이미 완전한 지혜를 가지고 있으므로, 겉으로만 그럴듯한 인간의 철학에 현혹되지 말라고 경고합니다.',
      cross_references: ['Romans 16:18', 'Ephesians 4:14', '2 Timothy 4:3-4']
    },
    korean_translation: {
      natural_translation: '내가 이것을 말하는 것은 아무도 그럴듯하게 들리는 논증으로 여러분을 속이지 못하게 하기 위함입니다.',
      translation_notes: 'fine-sounding arguments를 "그럴듯하게 들리는 논증"으로 번역'
    },
    special_explanation: {
      explanation_type: '수사학적 용어',
      content: '"Fine-sounding arguments"에 해당하는 헬라어 "피타노로기아"는 신약성경에서 이곳에만 나타나는 단어입니다. 이는 고대 그리스 수사학에서 사용되던 용어로, 진리보다는 설득력을 우선시하는 교묘한 말솜씨를 가리킵니다. 바울은 골로새의 거짓 교사들이 철학적 용어와 영적인 언어로 포장된 그럴듯한 이론을 제시하지만, 실제로는 그리스도의 복음에서 벗어난 거짓된 가르침임을 경고하고 있습니다.',
      examples: ['Colossians 2:8 (철학과 헛된 속임수)', 'Colossians 2:18 (거짓된 겸손)']
    }
  },

  // Colossians 2:5
  {
    reference: 'Colossians 2:5',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '양보절 - 육체적 부재',
        original_text: 'For though I am absent from you in body',
        korean_translation: '내가 비록 육체로는 여러분과 떨어져 있지만',
        grammatical_explanation: '양보절 (though), 전치사구 (in body)'
      },
      {
        sequence_order: 2,
        semantic_classification: '영적 현존 표현',
        original_text: 'I am present with you in spirit',
        korean_translation: '영으로는 여러분과 함께 있습니다',
        grammatical_explanation: '대조 구조 (absent in body / present in spirit)'
      },
      {
        sequence_order: 3,
        semantic_classification: '기쁨의 이유 - 질서',
        original_text: 'and delight to see how disciplined you are',
        korean_translation: '그리고 여러분이 얼마나 질서 있는지 보면서 기뻐합니다',
        grammatical_explanation: '명사절 목적어 (how disciplined you are), delight to + 부정사'
      },
      {
        sequence_order: 4,
        semantic_classification: '기쁨의 이유 - 믿음의 견고함',
        original_text: 'and how firm your faith in Christ is',
        korean_translation: '그리고 그리스도를 향한 여러분의 믿음이 얼마나 견고한지 보면서',
        grammatical_explanation: '병렬 명사절 (and how firm...), 소유격 구조 (your faith in Christ)'
      }
    ],
    vocabulary: [
      {
        word: 'absent',
        ipa_pronunciation: '/ˈæbsənt/',
        korean_pronunciation: '앱센트',
        part_of_speech: '형용사',
        definition_korean: '부재하는, 없는',
        usage_note: '물리적으로 함께 있지 않음'
      },
      {
        word: 'delight',
        ipa_pronunciation: '/dɪˈlaɪt/',
        korean_pronunciation: '딜라이트',
        part_of_speech: '동사',
        definition_korean: '기뻐하다, 즐거워하다',
        usage_note: '깊은 만족과 기쁨을 느끼다'
      },
      {
        word: 'disciplined',
        ipa_pronunciation: '/ˈdɪsəplɪnd/',
        korean_pronunciation: '디서플린드',
        part_of_speech: '형용사',
        definition_korean: '규율 있는, 질서 정연한',
        usage_note: '군사 용어에서 파생, 잘 조직되고 통제된 상태'
      },
      {
        word: 'firm',
        ipa_pronunciation: '/fɜːrm/',
        korean_pronunciation: '퍼름',
        part_of_speech: '형용사',
        definition_korean: '견고한, 확고한',
        usage_note: '흔들리지 않고 안정적인'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 육체적으로는 골로새에 없지만 영적으로는 그들과 함께 있다고 말합니다. 이는 단순한 수사가 아니라 그리스도 안에서 믿는 이들이 공유하는 영적 연합을 표현합니다. 바울은 두 가지를 보며 기뻐합니다. 첫째는 그들의 "질서"(taxis)인데, 이는 군사 용어로 군대의 정렬된 대형을 의미합니다. 둘째는 그들의 믿음의 "견고함"(stereōma)인데, 이 역시 군사 용어로 견고한 방어벽을 가리킵니다. 바울은 군사적 이미지를 사용하여 골로새 교회가 거짓 가르침에 맞서 잘 조직되고 견고하게 서 있음을 칭찬합니다.',
      cross_references: ['1 Corinthians 5:3', '1 Thessalonians 2:17', 'Colossians 1:23']
    },
    korean_translation: {
      natural_translation: '내가 비록 몸으로는 여러분과 떨어져 있지만, 영으로는 여러분과 함께 있으면서 여러분의 질서와 그리스도를 향한 믿음의 견고함을 보며 기뻐하고 있습니다.',
      translation_notes: '군사적 이미지인 disciplined와 firm을 "질서"와 "견고함"으로 번역'
    },
    special_explanation: {
      explanation_type: '군사적 이미지',
      content: '이 구절에서 바울이 사용한 "질서"(taxis)와 "견고함"(stereōma)은 모두 군사 용어입니다. Taxis는 군대의 정렬된 대형을, stereōma는 적의 공격을 막는 견고한 방어 진지를 의미합니다. 바울은 골로새 교회를 거짓 가르침과 싸우는 잘 훈련된 군대에 비유합니다. 이들은 무질서하게 흩어지거나 쉽게 무너지지 않고, 그리스도를 향한 믿음 안에서 단단히 서 있습니다. 이러한 군사적 이미지는 영적 전투의 심각성을 강조합니다.',
      examples: ['Ephesians 6:10-17 (하나님의 전신갑주)', '2 Timothy 2:3-4 (그리스도의 군사)']
    }
  },

  // Colossians 2:6
  {
    reference: 'Colossians 2:6',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '명령의 근거',
        original_text: 'So then, just as you received Christ Jesus as Lord',
        korean_translation: '그러므로 여러분이 그리스도 예수를 주로 받아들인 것처럼',
        grammatical_explanation: '비교절 (just as), 과거 시제 (received), 이중 칭호 (Christ Jesus as Lord)'
      },
      {
        sequence_order: 2,
        semantic_classification: '삶의 방식에 대한 명령',
        original_text: 'continue to live your lives in him',
        korean_translation: '계속해서 그분 안에서 여러분의 삶을 살아가십시오',
        grammatical_explanation: '명령형 (continue), 부정사 (to live), 전치사구 (in him)'
      }
    ],
    vocabulary: [
      {
        word: 'received',
        ipa_pronunciation: '/rɪˈsiːvd/',
        korean_pronunciation: '리시브드',
        part_of_speech: '동사 (과거형)',
        definition_korean: '받아들이다, 영접하다',
        usage_note: '신앙의 결단으로 그리스도를 받아들임'
      },
      {
        word: 'Lord',
        ipa_pronunciation: '/lɔːrd/',
        korean_pronunciation: '로드',
        part_of_speech: '명사',
        definition_korean: '주, 주인, 통치자',
        usage_note: '절대적 권위와 주권을 가진 분'
      },
      {
        word: 'continue',
        ipa_pronunciation: '/kənˈtɪnjuː/',
        korean_pronunciation: '컨티뉴',
        part_of_speech: '동사',
        definition_korean: '계속하다, 지속하다',
        usage_note: '시작한 것을 끝까지 유지함'
      },
      {
        word: 'live',
        ipa_pronunciation: '/lɪv/',
        korean_pronunciation: '리브',
        part_of_speech: '동사',
        definition_korean: '살다, 생활하다',
        usage_note: '일상적인 삶의 모든 영역'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 "그러므로"(So then)로 앞서의 논의를 요약하며 실제적인 적용을 제시합니다. 골로새 교인들이 그리스도 예수를 "주"로 받아들였다는 것은 단순히 구원자로만이 아니라 삶의 모든 영역을 다스리는 통치자로 영접했다는 의미입니다. 바울은 시작과 지속의 일관성을 강조합니다. 처음 믿음을 시작했을 때처럼, 계속해서 그리스도 안에서 살아가야 합니다. "그분 안에서"라는 표현은 골로새서의 핵심 주제로, 모든 영적 실재와 자원이 그리스도 안에 있음을 나타냅니다. 이는 거짓 교사들이 제시하는 추가적인 의식이나 지식이 필요 없음을 암시합니다.',
      cross_references: ['John 1:12', 'Colossians 1:10', 'Galatians 2:20']
    },
    korean_translation: {
      natural_translation: '그러므로 여러분이 그리스도 예수를 주님으로 받아들인 것처럼, 계속해서 그분 안에서 살아가십시오.',
      translation_notes: '"as Lord"를 "주님으로"로 번역하여 존칭 표현'
    },
    special_explanation: {
      explanation_type: '신학적 함의',
      content: '이 구절은 기독교 신앙생활의 핵심 원리를 담고 있습니다. "받아들였다"(received)는 과거의 결정적 사건을, "계속 살아가라"(continue to live)는 현재 진행형의 삶을 가리킵니다. 이는 칭의(justification)와 성화(sanctification)의 관계를 보여줍니다. 우리가 처음 그리스도를 영접할 때 은혜로 받은 것처럼, 날마다 살아가는 것도 그분 안에서 은혜로 이루어집니다. "주"라는 호칭은 그리스도의 절대적 권위를 인정하는 것으로, 삶의 모든 영역에서 그분의 주권에 복종함을 의미합니다.',
      examples: ['Romans 10:9 (예수를 주로 시인)', 'Philippians 2:11 (모든 입이 예수를 주라 고백)']
    }
  },

  // Colossians 2:7
  {
    reference: 'Colossians 2:7',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '영적 성장의 첫 단계 - 뿌리내림',
        original_text: 'rooted and built up in him',
        korean_translation: '그분 안에 뿌리를 내리고 세워져',
        grammatical_explanation: '과거분사 수동태 (rooted and built up), 전치사구 (in him)'
      },
      {
        sequence_order: 2,
        semantic_classification: '영적 성장의 둘째 단계 - 믿음의 강화',
        original_text: 'strengthened in the faith as you were taught',
        korean_translation: '여러분이 가르침 받은 대로 믿음 안에서 강건해지며',
        grammatical_explanation: '과거분사 수동태 (strengthened), 비교절 (as you were taught)'
      },
      {
        sequence_order: 3,
        semantic_classification: '영적 성장의 결과 - 감사의 넘침',
        original_text: 'and overflowing with thankfulness',
        korean_translation: '감사함으로 넘치십시오',
        grammatical_explanation: '현재분사 능동태 (overflowing), 전치사구 (with thankfulness)'
      }
    ],
    vocabulary: [
      {
        word: 'rooted',
        ipa_pronunciation: '/ˈruːtɪd/',
        korean_pronunciation: '루티드',
        part_of_speech: '형용사 (과거분사)',
        definition_korean: '뿌리내린, 확고히 자리 잡은',
        usage_note: '나무가 땅에 깊이 뿌리를 내리는 이미지'
      },
      {
        word: 'built up',
        ipa_pronunciation: '/bɪlt ʌp/',
        korean_pronunciation: '빌트 업',
        part_of_speech: '동사구 (과거분사)',
        definition_korean: '세워진, 건축된',
        usage_note: '건물이 기초 위에 세워지는 이미지'
      },
      {
        word: 'strengthened',
        ipa_pronunciation: '/ˈstreŋθənd/',
        korean_pronunciation: '스트렝쓴드',
        part_of_speech: '형용사 (과거분사)',
        definition_korean: '강하게 된, 강건해진',
        usage_note: '점점 더 튼튼해지는 과정'
      },
      {
        word: 'overflowing',
        ipa_pronunciation: '/ˌoʊvərˈfloʊɪŋ/',
        korean_pronunciation: '오버플로잉',
        part_of_speech: '형용사 (현재분사)',
        definition_korean: '넘치는, 충만한',
        usage_note: '그릇이 넘쳐흐르는 이미지'
      },
      {
        word: 'thankfulness',
        ipa_pronunciation: '/ˈθæŋkfəlnəs/',
        korean_pronunciation: '쌩크풀니스',
        part_of_speech: '명사',
        definition_korean: '감사함, 감사의 마음',
        usage_note: '지속적인 감사의 태도'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 세 가지 생생한 이미지를 사용하여 그리스도 안에서의 성장을 묘사합니다. 첫째, "뿌리내림"은 농업적 이미지로 나무가 토양 깊이 뿌리를 내려 영양분을 공급받는 것을 나타냅니다. 둘째, "세워짐"은 건축학적 이미지로 건물이 견고한 기초 위에 쌓아 올려지는 것을 의미합니다. 이 두 이미지는 과거분사로, 이미 일어난 일을 가리킵니다. 셋째, "강건해짐"은 현재 진행되는 과정으로, 사도들의 가르침에 따라 믿음이 점점 더 튼튼해지는 것입니다. 마지막으로 "감사로 넘침"은 이 모든 성장의 자연스러운 결과입니다. 감사는 골로새서의 중요한 주제로, 그리스도 안에서 이미 받은 풍성함을 인식할 때 나타나는 반응입니다.',
      cross_references: ['Ephesians 3:17', 'Colossians 1:23', 'Colossians 3:17']
    },
    korean_translation: {
      natural_translation: '그분 안에 뿌리를 내리고 세워져서, 가르침 받은 대로 믿음 안에서 강건해지며, 감사함으로 넘치십시오.',
      translation_notes: '세 가지 분사 구조를 자연스러운 한국어로 연결'
    },
    special_explanation: {
      explanation_type: '이미지의 전환',
      content: '바울은 하나의 문장 안에서 두 가지 다른 이미지를 혼합합니다. "뿌리내림"(rooted)은 유기체적 성장의 이미지이고, "세워짐"(built up)은 건축의 이미지입니다. 이러한 이미지의 혼합은 바울 서신에서 자주 나타나는 특징으로, 여러 각도에서 영적 실재를 조명합니다. 두 이미지 모두 안정성과 성장을 강조합니다. 나무는 깊은 뿌리로 폭풍을 견디고, 건물은 견고한 기초로 무너지지 않습니다. 그리스도는 우리의 토양이자 기초이며, 그분 안에서 우리는 안전하게 성장합니다.',
      examples: ['1 Corinthians 3:9 (하나님의 밭, 하나님의 건물)', 'Ephesians 2:20-22 (성전으로 건축됨)']
    }
  },

  // Colossians 2:8
  {
    reference: 'Colossians 2:8',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '경고 명령',
        original_text: 'See to it that no one takes you captive',
        korean_translation: '아무도 여러분을 사로잡지 못하도록 조심하십시오',
        grammatical_explanation: '명령형 (See to it), 목적절 (that no one takes), 부정 주어 (no one)'
      },
      {
        sequence_order: 2,
        semantic_classification: '사로잡는 수단 1',
        original_text: 'through hollow and deceptive philosophy',
        korean_translation: '공허하고 속이는 철학을 통해서',
        grammatical_explanation: '수단의 전치사구 (through), 이중 형용사 수식 (hollow and deceptive)'
      },
      {
        sequence_order: 3,
        semantic_classification: '거짓 철학의 근거 1',
        original_text: 'which depends on human tradition',
        korean_translation: '그것은 인간의 전통에 의존하고 있으며',
        grammatical_explanation: '관계대명사절 (which depends), 전치사구 (on human tradition)'
      },
      {
        sequence_order: 4,
        semantic_classification: '거짓 철학의 근거 2',
        original_text: 'and the elemental spiritual forces of this world',
        korean_translation: '이 세상의 초보적인 영적 세력들에 의존하고 있습니다',
        grammatical_explanation: '병렬 구조 (and the elemental...), 소유격 구조 (forces of this world)'
      },
      {
        sequence_order: 5,
        semantic_classification: '대조 - 참된 기초',
        original_text: 'rather than on Christ',
        korean_translation: '그리스도에게가 아니라',
        grammatical_explanation: '대조 구문 (rather than), 전치사구 (on Christ)'
      }
    ],
    vocabulary: [
      {
        word: 'captive',
        ipa_pronunciation: '/ˈkæptɪv/',
        korean_pronunciation: '캡티브',
        part_of_speech: '명사/형용사',
        definition_korean: '포로, 사로잡힌 자',
        usage_note: '전쟁에서 사로잡혀 자유를 잃은 상태'
      },
      {
        word: 'hollow',
        ipa_pronunciation: '/ˈhɑːloʊ/',
        korean_pronunciation: '할로우',
        part_of_speech: '형용사',
        definition_korean: '속이 빈, 공허한',
        usage_note: '내용이나 실체가 없는'
      },
      {
        word: 'deceptive',
        ipa_pronunciation: '/dɪˈsɛptɪv/',
        korean_pronunciation: '디셉티브',
        part_of_speech: '형용사',
        definition_korean: '속이는, 기만적인',
        usage_note: '겉으로는 참처럼 보이지만 실제로는 거짓인'
      },
      {
        word: 'philosophy',
        ipa_pronunciation: '/fɪˈlɑːsəfi/',
        korean_pronunciation: '필라서피',
        part_of_speech: '명사',
        definition_korean: '철학, 사상 체계',
        usage_note: '여기서는 부정적 의미로 사용됨'
      },
      {
        word: 'elemental',
        ipa_pronunciation: '/ˌelɪˈmentl/',
        korean_pronunciation: '엘리멘틀',
        part_of_speech: '형용사',
        definition_korean: '초보적인, 기초적인, 원소의',
        usage_note: '복잡한 의미를 가진 단어로 해석이 다양함'
      },
      {
        word: 'tradition',
        ipa_pronunciation: '/trəˈdɪʃən/',
        korean_pronunciation: '트러디션',
        part_of_speech: '명사',
        definition_korean: '전통, 관습',
        usage_note: '인간이 만들어낸 규칙이나 가르침'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 골로새 교인들에게 거짓 가르침에 대해 강력하게 경고합니다. "사로잡다"는 군사 용어로, 전쟁 포로처럼 자유를 빼앗기는 것을 의미합니다. 바울은 이 거짓 가르침을 "철학"이라 부르는데, 이는 당시 그리스-로마 세계에서 광범위한 사상 체계를 지칭하는 말이었습니다. 그러나 바울은 이 철학이 "공허하고 속이는" 것이라고 규정합니다. 이 철학은 두 가지 잘못된 기초 위에 서 있습니다. 첫째는 "인간의 전통"으로, 하나님의 계시가 아닌 사람의 생각입니다. 둘째는 "이 세상의 초보적인 영적 세력들"(ta stoicheia tou kosmou)인데, 이는 해석이 어려운 표현으로 기초적인 원리들, 천사적 존재들, 또는 우주의 기본 요소들을 의미할 수 있습니다. 중요한 것은 이것들이 모두 "그리스도가 아니라"는 점입니다.',
      cross_references: ['Colossians 2:20', 'Galatians 4:3, 9', '1 Corinthians 1:20']
    },
    korean_translation: {
      natural_translation: '아무도 공허하고 속이는 철학으로 여러분을 사로잡지 못하도록 조심하십시오. 그런 철학은 인간의 전통과 이 세상의 초보적인 영적 세력들에 근거한 것이지 그리스도에게 근거한 것이 아닙니다.',
      translation_notes: '"elemental spiritual forces"를 "초보적인 영적 세력들"로 번역, 해석의 여지를 남김'
    },
    special_explanation: {
      explanation_type: '용어 해석의 어려움',
      content: '"Ta stoicheia tou kosmou"(이 세상의 초보적 원리/세력)는 신약성경 해석에서 가장 논란이 많은 표현 중 하나입니다. 주요 해석은 세 가지입니다. (1) 기초적인 종교적 원리나 율법주의적 규례들, (2) 우주를 구성하는 물질적 원소들 (불, 물, 공기, 흙), (3) 천사적 존재나 영적 세력들. 문맥상 골로새의 거짓 교사들은 특정한 규례들(음식, 절기, 할례)과 천사 숭배를 가르쳤으므로, 아마도 (1)과 (3)의 조합으로 이해될 수 있습니다. 중요한 것은 이것들이 무엇이든 그리스도보다 열등하며, 신자들을 속박하려 한다는 점입니다.',
      examples: ['Galatians 4:3, 9 (세상의 초등 학문)', 'Colossians 2:20 (세상의 초등 학문)']
    }
  },

  // Colossians 2:9
  {
    reference: 'Colossians 2:9',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '신성의 완전한 내재 선언',
        original_text: 'For in Christ all the fullness of the Deity lives in bodily form',
        korean_translation: '그리스도 안에는 신성의 모든 충만이 육체의 형태로 거하시기 때문입니다',
        grammatical_explanation: '이유절 (For), 전치사구 강조 (in Christ), 주어 (all the fullness), 동사 (lives), 방식의 전치사구 (in bodily form)'
      }
    ],
    vocabulary: [
      {
        word: 'fullness',
        ipa_pronunciation: '/ˈfʊlnəs/',
        korean_pronunciation: '풀니스',
        part_of_speech: '명사',
        definition_korean: '충만, 완전함',
        usage_note: '완전하고 결핍이 없는 상태'
      },
      {
        word: 'Deity',
        ipa_pronunciation: '/ˈdiːəti/',
        korean_pronunciation: '디이티',
        part_of_speech: '명사',
        definition_korean: '신성, 신의 본질',
        usage_note: '하나님의 본질적 속성과 성품'
      },
      {
        word: 'bodily',
        ipa_pronunciation: '/ˈbɑːdɪli/',
        korean_pronunciation: '바딜리',
        part_of_speech: '형용사/부사',
        definition_korean: '육체의, 몸의',
        usage_note: '물리적이고 구체적인 형태'
      },
      {
        word: 'form',
        ipa_pronunciation: '/fɔːrm/',
        korean_pronunciation: '폼',
        part_of_speech: '명사',
        definition_korean: '형태, 모습',
        usage_note: '외적으로 나타나는 모양'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '이 구절은 골로새서 전체의 신학적 정점이며, 그리스도의 신성에 대한 가장 명확한 진술 중 하나입니다. "신성"(theotēs)은 "신"(theos)에서 파생된 단어로, 하나님의 본질 그 자체를 의미합니다. 바울은 그리스도 안에 신성의 "모든 충만"(pan to plērōma)이 거한다고 말합니다. 이는 그리스도가 단지 신적 속성의 일부를 가진 것이 아니라, 하나님의 본질 전체를 완전히 소유하고 계심을 의미합니다. "육체의 형태로"(sōmatikōs)라는 표현은 성육신을 가리키며, 이 신성의 충만이 추상적이거나 영적으로만 존재하는 것이 아니라 실제 육체를 입은 예수 그리스도 안에 구체적으로 나타났음을 강조합니다. 이는 골로새의 거짓 교사들이 그리스도만으로는 부족하다고 주장하는 것에 대한 결정적 반박입니다.',
      cross_references: ['John 1:14', 'Colossians 1:19', 'Philippians 2:6']
    },
    korean_translation: {
      natural_translation: '그리스도 안에는 신성의 모든 충만이 육체의 형태로 거하십니다.',
      translation_notes: '"lives"를 "거하십니다"로 번역하여 지속적 현존을 표현'
    },
    special_explanation: {
      explanation_type: '신학적 중요성',
      content: '이 구절은 기독교 정통 교리인 그리스도의 완전한 신성을 확증하는 핵심 구절입니다. 바울이 사용한 "theotēs"(신성)는 신약에서 이곳에만 나타나는 단어로, "theiotēs"(신적 속성, 롬 1:20)보다 더 강한 의미를 가집니다. Theiotēs가 신의 속성이나 특성을 가리킨다면, theotēs는 신의 본질 자체를 의미합니다. 또한 "모든 충만"(pan to plērōma)은 골로새의 거짓 교사들이 사용하던 영지주의적 용어를 바울이 전유하여, 그들이 말하는 신적 충만이 그리스도 안에 완전히 있다고 선언하는 것입니다. "육체의 형태로"라는 표현은 초대교회의 영지주의적 이단들이 부정하던 그리스도의 참된 인성과 성육신을 확증합니다.',
      examples: ['John 1:1 (말씀은 하나님이시라)', 'John 10:30 (나와 아버지는 하나)', 'Hebrews 1:3 (하나님의 본체의 형상)']
    }
  },

  // Colossians 2:10
  {
    reference: 'Colossians 2:10',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '신자의 완전함 선언',
        original_text: 'and in Christ you have been brought to fullness',
        korean_translation: '그리고 그리스도 안에서 여러분은 충만함에 이르렀습니다',
        grammatical_explanation: '완료 시제 수동태 (have been brought), 전치사구 (in Christ, to fullness)'
      },
      {
        sequence_order: 2,
        semantic_classification: '그리스도의 권위 선언',
        original_text: 'He is the head over every power and authority',
        korean_translation: '그분은 모든 권세와 권위의 머리이십니다',
        grammatical_explanation: '주격 보어 구조 (He is the head), 전치사구 (over every power and authority)'
      }
    ],
    vocabulary: [
      {
        word: 'brought',
        ipa_pronunciation: '/brɔːt/',
        korean_pronunciation: '브롯',
        part_of_speech: '동사 (과거분사)',
        definition_korean: '가져오다, 이르게 하다',
        usage_note: '어떤 상태에 도달하게 하다'
      },
      {
        word: 'head',
        ipa_pronunciation: '/hɛd/',
        korean_pronunciation: '헤드',
        part_of_speech: '명사',
        definition_korean: '머리, 우두머리',
        usage_note: '권위와 통치의 상징'
      },
      {
        word: 'power',
        ipa_pronunciation: '/ˈpaʊər/',
        korean_pronunciation: '파워',
        part_of_speech: '명사',
        definition_korean: '힘, 권능, 세력',
        usage_note: '능력과 영향력을 행사하는 존재'
      },
      {
        word: 'authority',
        ipa_pronunciation: '/əˈθɔːrəti/',
        korean_pronunciation: '어쏘리티',
        part_of_speech: '명사',
        definition_korean: '권위, 권한',
        usage_note: '통치할 정당한 권리'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 9절에서 그리스도의 완전한 신성을 선언한 후, 10절에서 신자들이 그리스도 안에서 이미 완전함(충만함)에 이르렀다고 말합니다. "충만함에 이르렀다"는 완료 시제로, 이미 완성된 상태를 나타냅니다. 이는 골로새의 거짓 교사들이 그리스도 외에 추가적인 의식이나 지식이 필요하다고 주장하는 것에 대한 직접적 반박입니다. 그리스도 안에 신성의 모든 충만이 있고(9절), 우리가 그리스도 안에 있으므로, 우리도 이미 충만함을 소유하고 있습니다. 바울은 또한 그리스도가 "모든 권세와 권위의 머리"라고 선언합니다. 이는 골로새의 거짓 교사들이 가르치던 천사 숭배나 다른 영적 세력들에 대한 강력한 반박입니다. 그리스도는 모든 피조된 권세들 위에 계시는 절대적 주권자이십니다.',
      cross_references: ['Colossians 1:16-18', 'Ephesians 1:21-22', '1 Corinthians 1:30']
    },
    korean_translation: {
      natural_translation: '그리스도 안에서 여러분은 이미 충만함을 얻었습니다. 그분은 모든 권세와 권위 위에 계신 머리이십니다.',
      translation_notes: '완료 시제의 의미를 강조하기 위해 "이미"를 추가'
    },
    special_explanation: {
      explanation_type: '신학적 논리',
      content: '9-10절은 긴밀하게 연결된 논리 구조를 형성합니다. (1) 전제: 그리스도 안에 신성의 모든 충만이 있다. (2) 사실: 우리는 그리스도 안에 있다. (3) 결론: 따라서 우리도 충만함을 소유한다. 이는 "연합" 신학의 핵심입니다. 우리가 그리스도와 연합되어 있기 때문에, 그분의 것이 우리의 것이 됩니다. "충만함"(plērōma)은 골로새의 거짓 교사들이 사용하던 영지주의 용어였는데, 바울은 이를 전유하여 참된 충만이 그리스도 안에 있고, 우리가 그리스도 안에서 이미 그것을 소유했다고 선언합니다. 따라서 다른 어떤 것도 필요하지 않습니다.',
      examples: ['John 15:5 (내 안에 거하라)', 'Galatians 3:27 (그리스도로 옷 입었다)', 'Ephesians 2:6 (그리스도 안에서 함께 앉혔다)']
    }
  },

  // Colossians 2:11
  {
    reference: 'Colossians 2:11',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '영적 할례의 경험',
        original_text: 'In him you were also circumcised with a circumcision not performed by human hands',
        korean_translation: '그분 안에서 여러분도 사람의 손으로 하지 않은 할례로 할례를 받았습니다',
        grammatical_explanation: '수동태 과거 시제 (were circumcised), 전치사구 (In him), 부정 수식 (not performed by human hands)'
      },
      {
        sequence_order: 2,
        semantic_classification: '영적 할례의 의미',
        original_text: 'Your whole self ruled by the flesh was put off',
        korean_translation: '육체에 의해 지배받던 여러분의 옛 본성이 벗겨졌습니다',
        grammatical_explanation: '수동태 과거 시제 (was put off), 과거분사 수식 (ruled by the flesh)'
      },
      {
        sequence_order: 3,
        semantic_classification: '할례의 주체',
        original_text: 'when you were circumcised by Christ',
        korean_translation: '여러분이 그리스도에 의해 할례를 받을 때',
        grammatical_explanation: '시간절 (when), 수동태 (were circumcised), 행위자 표시 (by Christ)'
      }
    ],
    vocabulary: [
      {
        word: 'circumcised',
        ipa_pronunciation: '/ˈsɜːrkəmsaɪzd/',
        korean_pronunciation: '써컴사이즈드',
        part_of_speech: '동사 (과거분사)',
        definition_korean: '할례를 받은',
        usage_note: '유대교의 언약 의식, 여기서는 영적 의미로 사용'
      },
      {
        word: 'performed',
        ipa_pronunciation: '/pərˈfɔːrmd/',
        korean_pronunciation: '퍼폼드',
        part_of_speech: '동사 (과거분사)',
        definition_korean: '수행된, 행해진',
        usage_note: '의식이나 행위를 실행함'
      },
      {
        word: 'flesh',
        ipa_pronunciation: '/flɛʃ/',
        korean_pronunciation: '플레쉬',
        part_of_speech: '명사',
        definition_korean: '육체, 육신',
        usage_note: '바울 신학에서 죄의 본성을 가진 타락한 인간성'
      },
      {
        word: 'put off',
        ipa_pronunciation: '/pʊt ɔːf/',
        korean_pronunciation: '풋 오프',
        part_of_speech: '동사구',
        definition_korean: '벗다, 제거하다',
        usage_note: '옷을 벗듯이 무언가를 제거함'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 육체적 할례와 대조되는 영적 할례에 대해 설명합니다. 골로새의 거짓 교사들은 아마도 이방인 신자들도 유대교의 할례를 받아야 한다고 주장했을 것입니다. 바울은 이에 대해 그리스도인들은 이미 "손으로 하지 않은 할례"를 받았다고 반박합니다. 이 할례는 육체의 일부를 제거하는 것이 아니라, "육체에 의해 지배받던 옛 본성 전체"를 벗어버리는 것입니다. 헬라어 "육체의 몸"(tou sōmatos tēs sarkos)은 죄의 본성이 지배하는 옛 자아를 가리킵니다. 이 영적 할례는 인간이 행하는 것이 아니라 "그리스도에 의해" 이루어지며, 신자가 그리스도와 연합할 때 일어나는 영적 실재입니다. 이는 구약의 "마음의 할례" 개념의 성취입니다.',
      cross_references: ['Deuteronomy 10:16', 'Deuteronomy 30:6', 'Romans 2:28-29', 'Philippians 3:3']
    },
    korean_translation: {
      natural_translation: '그리스도 안에서 여러분은 사람의 손으로 하지 않은 할례를 받았습니다. 그것은 그리스도의 할례로, 육체의 본성에 지배받던 옛 자아를 완전히 벗어버리는 것입니다.',
      translation_notes: '"whole self ruled by the flesh"를 "육체의 본성에 지배받던 옛 자아"로 의역'
    },
    special_explanation: {
      explanation_type: '구약 배경',
      content: '할례는 아브라함 언약의 표징으로(창 17장), 이스라엘 백성을 다른 민족과 구별하는 중요한 의식이었습니다. 그러나 구약 선지자들은 이미 외적 할례만으로는 부족하며 "마음의 할례"가 필요하다고 가르쳤습니다(신 10:16, 30:6, 렘 4:4). 바울은 이 개념을 발전시켜, 그리스도 안에서 신자들이 받는 영적 할례가 참된 할례라고 선언합니다. 이것은 성령에 의해 이루어지며(롬 2:29), 옛 본성의 죽음과 새로운 본성의 탄생을 의미합니다. 따라서 육체적 할례는 더 이상 필요하지 않습니다.',
      examples: ['Jeremiah 4:4 (마음의 할례)', 'Romans 2:28-29 (속사람의 할례)', 'Galatians 5:6 (할례나 무할례가 중요한 것이 아니라)']
    }
  },

  // Colossians 2:12
  {
    reference: 'Colossians 2:12',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '세례를 통한 그리스도와의 연합 - 죽음',
        original_text: 'having been buried with him in baptism',
        korean_translation: '세례로 그분과 함께 장사되어',
        grammatical_explanation: '완료 분사 수동태 (having been buried), 전치사구 (with him, in baptism)'
      },
      {
        sequence_order: 2,
        semantic_classification: '세례를 통한 그리스도와의 연합 - 부활',
        original_text: 'in which you were also raised with him',
        korean_translation: '그 세례 안에서 여러분도 그분과 함께 일으킴을 받았습니다',
        grammatical_explanation: '관계대명사절 (in which), 수동태 과거 (were raised), 전치사구 (with him)'
      },
      {
        sequence_order: 3,
        semantic_classification: '부활의 수단 - 믿음',
        original_text: 'through your faith in the working of God',
        korean_translation: '하나님의 역사하심에 대한 여러분의 믿음을 통하여',
        grammatical_explanation: '수단의 전치사구 (through your faith), 소유격 구조 (in the working of God)'
      },
      {
        sequence_order: 4,
        semantic_classification: '하나님의 능력',
        original_text: 'who raised him from the dead',
        korean_translation: '하나님은 그리스도를 죽은 자들 가운데서 살리신 분입니다',
        grammatical_explanation: '관계대명사절 (who raised), 전치사구 (from the dead)'
      }
    ],
    vocabulary: [
      {
        word: 'buried',
        ipa_pronunciation: '/ˈbɛrid/',
        korean_pronunciation: '베리드',
        part_of_speech: '동사 (과거분사)',
        definition_korean: '묻힌, 장사된',
        usage_note: '죽은 자를 무덤에 두는 행위'
      },
      {
        word: 'baptism',
        ipa_pronunciation: '/ˈbæptɪzəm/',
        korean_pronunciation: '밥티즘',
        part_of_speech: '명사',
        definition_korean: '세례, 침례',
        usage_note: '기독교의 입문 의식'
      },
      {
        word: 'raised',
        ipa_pronunciation: '/reɪzd/',
        korean_pronunciation: '레이즈드',
        part_of_speech: '동사 (과거분사)',
        definition_korean: '일으킨, 부활시킨',
        usage_note: '죽은 자를 다시 살리다'
      },
      {
        word: 'working',
        ipa_pronunciation: '/ˈwɜːrkɪŋ/',
        korean_pronunciation: '워킹',
        part_of_speech: '명사 (동명사)',
        definition_korean: '역사하심, 활동',
        usage_note: '하나님의 능력 있는 행위'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '바울은 11절의 영적 할례를 세례와 연결합니다. 세례는 신자가 그리스도의 죽음과 부활에 연합되는 것을 상징하고 실제화하는 의식입니다. "장사되다"는 완전한 죽음을 의미하며, 물에 잠기는 세례의 행위는 이를 상징적으로 나타냅니다. 그러나 세례는 단지 죽음만이 아니라 부활도 포함합니다. 신자는 그리스도와 함께 일으킴을 받습니다. 이 부활은 "하나님의 역사하심에 대한 믿음을 통하여" 일어납니다. "하나님의 역사하심"은 특히 그리스도를 죽은 자 가운데서 살리신 부활의 능력을 가리킵니다. 같은 능력이 신자들을 영적으로 살립니다. 바울은 육체적 할례 대신 세례가 새 언약의 표징임을 암시합니다. 세례는 옛 본성의 죽음과 그리스도 안에서의 새 생명을 나타냅니다.',
      cross_references: ['Romans 6:3-5', 'Galatians 3:27', 'Ephesians 2:5-6']
    },
    korean_translation: {
      natural_translation: '여러분은 세례로 그리스도와 함께 장사되었고, 또한 그분을 죽은 자 가운데서 살리신 하나님의 역사하심을 믿는 믿음으로 그분과 함께 일으킴을 받았습니다.',
      translation_notes: '복잡한 구조를 두 부분으로 나누어 자연스럽게 번역'
    },
    special_explanation: {
      explanation_type: '세례 신학',
      content: '이 구절은 신약의 중요한 세례 구절 중 하나입니다. 바울은 세례를 단순한 의식으로 보지 않고, 신자가 그리스도와 신비적으로 연합하는 실재로 봅니다. 로마서 6:3-5에서 더 자세히 전개되는 이 신학은 세 가지 핵심 요소를 포함합니다. (1) 그리스도와의 연합: "함께" (with him)가 세 번 나타나며 강조됩니다. (2) 죽음과 부활: 세례는 옛 사람의 죽음과 새 사람의 탄생을 나타냅니다. (3) 믿음의 역할: 부활은 하나님의 능력에 대한 믿음을 통해 경험됩니다. 이는 할례 논쟁의 맥락에서 세례가 새 언약의 할례임을 시사합니다.',
      examples: ['Romans 6:3-5 (세례를 통한 그리스도와의 연합)', 'Galatians 3:27 (세례로 그리스도를 입음)', '1 Peter 3:21 (세례의 의미)']
    }
  }
]

async function main() {
  console.log('📝 골로새서 2:1-12 분석 데이터 저장 시작\n')

  let successCount = 0
  let failCount = 0

  for (const analysis of analyses) {
    const success = await saveAnalysisToDb(analysis)
    if (success) {
      successCount++
    } else {
      failCount++
    }

    // Rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000))
  }

  console.log('\n' + '='.repeat(50))
  console.log(`✅ 성공: ${successCount}개`)
  console.log(`❌ 실패: ${failCount}개`)
  console.log('='.repeat(50))

  process.exit(failCount > 0 ? 1 : 0)
}

main()
