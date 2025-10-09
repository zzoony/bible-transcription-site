import { saveAnalysisToDb, type AnalysisData } from './analyze-titus'

// Titus 1:1 분석
const titus1_1: AnalysisData = {
  reference: 'Titus 1:1',
  sentence_structures: [
    {
      sequence_order: 1,
      semantic_classification: '자기 소개',
      original_text: 'Paul, a servant of God and an apostle of Jesus Christ',
      korean_translation: '바울, 하나님의 종이자 예수 그리스도의 사도',
      grammatical_explanation: '동격 구조 - Paul = servant = apostle'
    },
    {
      sequence_order: 2,
      semantic_classification: '사도직의 목적',
      original_text: 'to further the faith of God\'s elect',
      korean_translation: '하나님의 택하신 자들의 믿음을 증진시키기 위하여',
      grammatical_explanation: 'to 부정사구, purpose 표현'
    },
    {
      sequence_order: 3,
      semantic_classification: '사도직의 목적 (연결)',
      original_text: 'and their knowledge of the truth that leads to godliness',
      korean_translation: '그리고 경건에 이르는 진리에 대한 그들의 지식을 위하여',
      grammatical_explanation: '병렬 구조, 관계절 that leads to godliness'
    }
  ],
  vocabulary: [
    {
      word: 'servant',
      ipa_pronunciation: '/ˈsɜːrvənt/',
      korean_pronunciation: '서번트',
      part_of_speech: 'noun',
      definition_korean: '종, 하인'
    },
    {
      word: 'apostle',
      ipa_pronunciation: '/əˈpɑːsl/',
      korean_pronunciation: '어파슬',
      part_of_speech: 'noun',
      definition_korean: '사도, 전도자'
    },
    {
      word: 'further',
      ipa_pronunciation: '/ˈfɜːrðər/',
      korean_pronunciation: '퍼더',
      part_of_speech: 'verb',
      definition_korean: '증진시키다, 촉진하다'
    },
    {
      word: 'elect',
      ipa_pronunciation: '/ɪˈlekt/',
      korean_pronunciation: '일렉트',
      part_of_speech: 'noun',
      definition_korean: '택함을 받은 사람들, 선택된 자들'
    },
    {
      word: 'godliness',
      ipa_pronunciation: '/ˈɡɑːdlinəs/',
      korean_pronunciation: '갓리니스',
      part_of_speech: 'noun',
      definition_korean: '경건함, 신앙심'
    }
  ],
  contextual_explanation: {
    integrated_explanation: '바울은 디도서를 시작하면서 자신을 이중적으로 소개한다. 첫째, 하나님의 종으로서, 둘째, 예수 그리스도의 사도로서이다. 이는 그의 권위가 인간적인 것이 아니라 하나님으로부터 온 것임을 강조한다. 그의 사도직의 목적은 명확하다: 하나님께서 선택하신 사람들의 믿음을 강화하고, 경건한 삶으로 이끄는 진리에 대한 그들의 지식을 증진시키는 것이다. 이 서문은 디도서 전체의 주제를 암시한다 - 올바른 교리(진리)와 올바른 삶(경건)의 결합.',
    cross_references: ['Romans 1:1', '1 Timothy 1:1', '2 Peter 1:3']
  },
  korean_translation: {
    natural_translation: '하나님의 종이며 예수 그리스도의 사도인 바울은, 하나님께서 택하신 자들의 믿음을 굳건하게 하고 경건에 이르게 하는 진리의 지식을 증진시키기 위하여 이 편지를 씁니다.',
    translation_notes: 'to further는 목적을 나타내는 부정사구로, 사도직의 두 가지 목적을 연결함'
  },
  special_explanation: {
    explanation_type: '문법적 구조',
    content: '이 구절은 전형적인 그리스-로마 서신의 서두 형식을 따르되, 바울은 자신의 역할과 목적을 상세히 설명한다. "servant"와 "apostle"의 병렬은 겸손(종)과 권위(사도)의 균형을 보여준다.',
    examples: ['servant of God = 하나님께 헌신된 자', 'apostle of Jesus Christ = 그리스도의 권위를 받은 대표자']
  }
}

// Titus 1:2 분석
const titus1_2: AnalysisData = {
  reference: 'Titus 1:2',
  sentence_structures: [
    {
      sequence_order: 1,
      semantic_classification: '영생의 소망',
      original_text: 'in the hope of eternal life',
      korean_translation: '영생의 소망 안에서',
      grammatical_explanation: '전치사구, 1:1과 연결됨'
    },
    {
      sequence_order: 2,
      semantic_classification: '하나님의 약속',
      original_text: 'which God, who does not lie, promised before the beginning of time',
      korean_translation: '거짓말하지 않으시는 하나님께서 창세 전에 약속하신 것',
      grammatical_explanation: '관계절, God를 수식하는 삽입구 포함'
    }
  ],
  vocabulary: [
    {
      word: 'eternal',
      ipa_pronunciation: '/ɪˈtɜːrnl/',
      korean_pronunciation: '이터널',
      part_of_speech: 'adjective',
      definition_korean: '영원한, 불멸의'
    },
    {
      word: 'lie',
      ipa_pronunciation: '/laɪ/',
      korean_pronunciation: '라이',
      part_of_speech: 'verb',
      definition_korean: '거짓말하다'
    },
    {
      word: 'promised',
      ipa_pronunciation: '/ˈprɑːmɪst/',
      korean_pronunciation: '프라미스트',
      part_of_speech: 'verb',
      definition_korean: '약속하다'
    }
  ],
  contextual_explanation: {
    integrated_explanation: '바울의 사도직은 영생의 소망에 기반을 두고 있다. 이 소망은 인간의 희망 사항이 아니라 하나님의 확실한 약속에 근거한다. 특별히 "거짓말하지 않으시는 하나님"이라는 표현은 이 약속의 절대적 확실성을 강조한다. 더욱이 이 약속은 "창세 전"에 이미 이루어진 것으로, 하나님의 구원 계획이 영원 전부터 존재했음을 보여준다.',
    cross_references: ['2 Timothy 1:9', 'Ephesians 1:4', 'Numbers 23:19']
  },
  korean_translation: {
    natural_translation: '이는 거짓말하실 수 없으신 하나님께서 영원 전에 약속하신 영생의 소망에 근거한 것입니다.',
    translation_notes: 'before the beginning of time은 문자적으로는 "영원 전" 또는 "창세 전"으로 번역됨'
  },
  special_explanation: {
    explanation_type: '신학적 의미',
    content: '"who does not lie"는 하나님의 본성을 나타내며, 약속의 확실성을 보장한다. 창세 전의 약속은 하나님의 구원 계획이 인간 역사 이전부터 존재했음을 의미한다.',
    examples: ['God cannot lie = 하나님의 불변하는 신실함', 'before the beginning of time = 영원한 구원 계획']
  }
}

// Titus 1:3 분석
const titus1_3: AnalysisData = {
  reference: 'Titus 1:3',
  sentence_structures: [
    {
      sequence_order: 1,
      semantic_classification: '약속의 실현',
      original_text: 'and which now at his appointed season he has brought to light through the preaching entrusted to me',
      korean_translation: '그리고 정하신 때에 이제 나에게 맡겨진 전파를 통해 그것을 나타내셨습니다',
      grammatical_explanation: '관계절, passive voice "brought to light" 사용'
    },
    {
      sequence_order: 2,
      semantic_classification: '권위의 근원',
      original_text: 'by the command of God our Savior',
      korean_translation: '우리의 구주이신 하나님의 명령에 따라',
      grammatical_explanation: '전치사구, agency 표현'
    }
  ],
  vocabulary: [
    {
      word: 'appointed',
      ipa_pronunciation: '/əˈpɔɪntɪd/',
      korean_pronunciation: '어포인티드',
      part_of_speech: 'adjective',
      definition_korean: '정해진, 임명된'
    },
    {
      word: 'brought to light',
      ipa_pronunciation: '/brɔːt tuː laɪt/',
      korean_pronunciation: '브롯 투 라이트',
      part_of_speech: 'idiom',
      definition_korean: '드러내다, 나타내다'
    },
    {
      word: 'entrusted',
      ipa_pronunciation: '/ɪnˈtrʌstɪd/',
      korean_pronunciation: '인트러스티드',
      part_of_speech: 'verb',
      definition_korean: '맡기다, 위임하다'
    },
    {
      word: 'command',
      ipa_pronunciation: '/kəˈmænd/',
      korean_pronunciation: '커맨드',
      part_of_speech: 'noun',
      definition_korean: '명령, 지시'
    }
  ],
  contextual_explanation: {
    integrated_explanation: '영원 전부터 계획된 하나님의 구원 약속이 "정하신 때에" 드러났다. 이는 하나님의 시간표가 있음을 보여준다. 그 계시의 방법은 "전파"이며, 바울은 이 복음 전파의 사명을 하나님으로부터 직접 명령받았다. "우리의 구주이신 하나님"이라는 표현은 디도서에 반복적으로 나타나며(1:3, 2:10, 3:4), 하나님의 구원하시는 본성을 강조한다.',
    cross_references: ['Galatians 4:4', '1 Timothy 1:1', 'Titus 2:10']
  },
  korean_translation: {
    natural_translation: '그리고 정하신 때에 우리 구주이신 하나님의 명령에 따라 나에게 맡겨진 복음 전파를 통해 이 약속을 나타내셨습니다.',
    translation_notes: 'brought to light는 "드러내다", "나타내다"로 번역되며, 숨겨진 것이 공개되는 의미'
  },
  special_explanation: {
    explanation_type: '시간적 구조',
    content: '이 구절은 영원 전의 약속(1:2)에서 현재의 실현으로 시간적 이동을 보여준다. "정하신 때"(kairos)는 단순한 시간이 아니라 하나님의 구원 역사에서 결정적 순간을 의미한다.',
    examples: ['eternal promise → appointed time → manifestation', '영원한 계획 → 정해진 때 → 현재의 실현']
  }
}

// 모든 구절 저장 함수
async function saveAll() {
  console.log('=== Titus 분석 데이터 저장 시작 ===\n')

  const analyses = [titus1_1, titus1_2, titus1_3]

  for (let i = 0; i < analyses.length; i++) {
    console.log(`[${i + 1}/${analyses.length}] 저장 중...`)
    await saveAnalysisToDb(analyses[i])
    // Rate limiting: 3초 대기
    if (i < analyses.length - 1) {
      await new Promise(resolve => setTimeout(resolve, 3000))
    }
  }

  console.log('\n=== 저장 완료 ===')
  console.log(`총 ${analyses.length}개 구절 저장됨`)
}

saveAll().catch(console.error)
