import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

// James 4:1 완전 분석
const james4_1: AnalysisData = {
  reference: 'James 4:1',
  sentence_structures: [
    {
      sequence_order: 1,
      semantic_classification: '수사적 질문 - 문제 제기',
      original_text: 'What causes fights and quarrels among you?',
      korean_translation: '여러분 가운데 싸움과 다툼이 어디서 생깁니까?',
      grammatical_explanation: '의문사 what이 주어 역할, causes가 동사. fights and quarrels가 목적어, among you가 부사구'
    },
    {
      sequence_order: 2,
      semantic_classification: '수사적 질문 - 답변 유도',
      original_text: "Don't they come from your desires that battle within you?",
      korean_translation: '그것은 여러분 안에서 싸우는 욕망에서 나오지 않습니까?',
      grammatical_explanation: '부정 의문문 형태. desires가 주격 관계대명사절(that battle within you)로 수식됨'
    }
  ],
  vocabulary: [
    {
      word: 'fights',
      ipa_pronunciation: '/faɪts/',
      korean_pronunciation: '파이츠',
      part_of_speech: '명사',
      definition_korean: '싸움, 전투, 격렬한 논쟁',
      usage_note: '물리적 또는 언어적 충돌을 모두 포함'
    },
    {
      word: 'quarrels',
      ipa_pronunciation: '/ˈkwɔːrəlz/',
      korean_pronunciation: '쿼럴즈',
      part_of_speech: '명사',
      definition_korean: '다툼, 말다툼, 논쟁',
      usage_note: 'fights보다 더 언어적 충돌에 초점'
    },
    {
      word: 'desires',
      ipa_pronunciation: '/dɪˈzaɪərz/',
      korean_pronunciation: '디자이어즈',
      part_of_speech: '명사',
      definition_korean: '욕망, 욕구, 갈망',
      usage_note: '여기서는 부정적 의미의 탐욕적 욕구'
    },
    {
      word: 'battle',
      ipa_pronunciation: '/ˈbætl/',
      korean_pronunciation: '배틀',
      part_of_speech: '동사',
      definition_korean: '싸우다, 전투하다',
      usage_note: '내적 갈등을 군사 은유로 표현'
    }
  ],
  contextual_explanation: {
    integrated_explanation: '야고보서 4장 1절은 신앙 공동체 내의 갈등 문제를 다룹니다. 야고보는 수사적 질문을 통해 독자들이 스스로 문제의 근원을 깨닫도록 유도합니다. 1세기 유대-기독교 공동체는 로마 제국의 박해와 경제적 어려움 속에서 내부 갈등을 겪었습니다. 야고보는 외부 상황이 아니라 내면의 욕망(epithumia)이 갈등의 진짜 원인임을 지적합니다. "battle within you"라는 표현은 플라톤 철학의 영향을 받은 유대 지혜 문학 전통에서 흔한 영혼의 내적 투쟁 은유입니다.',
    cross_references: ['James 1:14-15', 'Galatians 5:17', 'Romans 7:23', '1 Peter 2:11']
  },
  korean_translation: {
    natural_translation: '여러분 가운데 싸움과 다툼이 어디서 생깁니까? 그것은 여러분 안에서 싸우고 있는 욕망에서 나오는 것이 아닙니까?',
    translation_notes: '수사적 질문의 뉘앙스를 살리기 위해 반어적 표현 유지. desires를 "욕망"으로 번역하여 부정적 의미 강조'
  },
  special_explanation: {
    explanation_type: '수사 기법',
    content: '이 구절은 이중 수사적 질문(double rhetorical question) 구조를 사용합니다. 첫 번째 질문은 문제를 제기하고, 두 번째 질문은 즉각 답을 제시함으로써 독자가 스스로 진리를 깨닫도록 유도합니다.',
    examples: ['이 기법은 소크라테스 문답법과 유사하며, 유대 랍비 교육 방식에서도 흔히 사용됨']
  }
}

// James 4:10 완전 분석
const james4_10: AnalysisData = {
  reference: 'James 4:10',
  sentence_structures: [
    {
      sequence_order: 1,
      semantic_classification: '명령 - 행동 요구',
      original_text: 'Humble yourselves before the Lord,',
      korean_translation: '주님 앞에서 자신을 낮추십시오,',
      grammatical_explanation: '명령문. humble은 타동사로 yourselves를 목적어로 취함. before the Lord는 장소/상황 부사구'
    },
    {
      sequence_order: 2,
      semantic_classification: '약속 - 결과 제시',
      original_text: 'and he will lift you up.',
      korean_translation: '그러면 그분께서 여러분을 높이실 것입니다.',
      grammatical_explanation: 'and로 연결된 미래 시제 문장. he는 the Lord를 가리킴. lift up은 구동사'
    }
  ],
  vocabulary: [
    {
      word: 'humble',
      ipa_pronunciation: '/ˈhʌmbl/',
      korean_pronunciation: '험블',
      part_of_speech: '동사',
      definition_korean: '겸손하게 하다, 낮추다',
      usage_note: '재귀 동사로 사용되어 자발적 행동 강조'
    },
    {
      word: 'lift up',
      ipa_pronunciation: '/lɪft ʌp/',
      korean_pronunciation: '리프트 업',
      part_of_speech: '구동사',
      definition_korean: '들어 올리다, 높이다, 고양시키다',
      usage_note: '물리적/영적 고양을 모두 의미'
    }
  ],
  contextual_explanation: {
    integrated_explanation: '이 구절은 성경의 중요한 역설적 원리를 표현합니다. 구약의 지혜 문학(잠언 3:34, 29:23)과 예수님의 가르침(마태복음 23:12, 누가복음 14:11, 18:14)에서 반복되는 주제입니다. 야고보는 하나님의 주권과 인간의 책임을 동시에 강조합니다. "자신을 낮추라"는 명령은 인간의 능동적 순종을 요구하고, "그분께서 높이실 것"은 하나님의 은혜로운 응답을 약속합니다. 이는 당시 그리스-로마 사회의 명예 추구 문화와 대조되는 반문화적 가르침입니다.',
    cross_references: ['Proverbs 3:34', 'Matthew 23:12', 'Luke 14:11', '1 Peter 5:6', 'Philippians 2:8-9']
  },
  korean_translation: {
    natural_translation: '주님 앞에서 자신을 낮추십시오. 그러면 그분께서 여러분을 높이실 것입니다.',
    translation_notes: '명령과 약속의 인과관계를 명확히 하기 위해 "그러면"을 추가. humble을 "낮추다"로, lift up을 "높이다"로 대칭적으로 번역'
  },
  special_explanation: {
    explanation_type: '신학적 패러독스',
    content: '이 구절은 "신적 역설(divine paradox)"의 핵심을 담고 있습니다. 낮아짐이 높아지는 길이라는 역설은 십자가 신학의 핵심입니다. 문법적으로 능동태 명령(humble yourselves)과 수동적 결과(will be lifted up)의 대조가 인간의 역할과 하나님의 역할을 명확히 구분합니다.',
    examples: ['예수 그리스도의 성육신과 십자가-부활 사건이 이 원리의 완벽한 실현']
  }
}

async function main() {
  console.log('James 4:1, 4:10 분석 데이터베이스 저장 시작...\n')

  try {
    await saveAnalysisToDb(james4_1)
    console.log('✅ James 4:1 저장 완료')

    await saveAnalysisToDb(james4_10)
    console.log('✅ James 4:10 저장 완료')

    console.log('\n✅ 배치 1 완료: 2개 구절 저장됨')
  } catch (error) {
    console.error('❌ 오류 발생:', error)
    throw error
  }
}

main()
