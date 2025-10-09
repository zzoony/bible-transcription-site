import { saveAnalysisToDb, loadProgress, saveProgress, type AnalysisData } from './analyze-titus'

// 모든 Titus 구절 분석 데이터
const allAnalyses: AnalysisData[] = [
  // Titus 1:2
  {
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
      { word: 'eternal', ipa_pronunciation: '/ɪˈtɜːrnl/', korean_pronunciation: '이터널', part_of_speech: 'adjective', definition_korean: '영원한, 불멸의' },
      { word: 'lie', ipa_pronunciation: '/laɪ/', korean_pronunciation: '라이', part_of_speech: 'verb', definition_korean: '거짓말하다' },
      { word: 'promised', ipa_pronunciation: '/ˈprɑːmɪst/', korean_pronunciation: '프라미스트', part_of_speech: 'verb', definition_korean: '약속하다' }
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
  },

  // Titus 1:3
  {
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
      { word: 'appointed', ipa_pronunciation: '/əˈpɔɪntɪd/', korean_pronunciation: '어포인티드', part_of_speech: 'adjective', definition_korean: '정해진, 임명된' },
      { word: 'brought to light', ipa_pronunciation: '/brɔːt tuː laɪt/', korean_pronunciation: '브롯 투 라이트', part_of_speech: 'idiom', definition_korean: '드러내다, 나타내다' },
      { word: 'entrusted', ipa_pronunciation: '/ɪnˈtrʌstɪd/', korean_pronunciation: '인트러스티드', part_of_speech: 'verb', definition_korean: '맡기다, 위임하다' },
      { word: 'command', ipa_pronunciation: '/kəˈmænd/', korean_pronunciation: '커맨드', part_of_speech: 'noun', definition_korean: '명령, 지시' }
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

  // 나머지 43개 구절은 아래에 계속 추가...
  // 이 파일은 매우 길어질 것입니다
]

async function saveAllAnalyses() {
  console.log('=== Titus 전체 구절 분석 저장 시작 ===\n')

  const completed = loadProgress()
  let success = 0
  let failed = 0

  for (let i = 0; i < allAnalyses.length; i++) {
    const analysis = allAnalyses[i]

    // 이미 완료된 구절 건너뛰기
    if (completed.has(analysis.reference)) {
      console.log(`[${i + 1}/${allAnalyses.length}] ${analysis.reference} - 이미 완료됨 (건너뜀)`)
      continue
    }

    console.log(`\n[${i + 1}/${allAnalyses.length}] ${analysis.reference} 저장 중...`)

    try {
      const result = await saveAnalysisToDb(analysis)

      if (result) {
        success++
        completed.add(analysis.reference)
        saveProgress(completed)
        console.log(`  ✓ 성공`)
      } else {
        failed++
        console.log(`  ✗ 실패`)
      }
    } catch (error) {
      failed++
      console.error(`  ✗ 오류:`, error)
    }

    // Rate limiting: 3-5초 대기
    if (i < allAnalyses.length - 1) {
      const delay = 3000 + Math.random() * 2000
      await new Promise(resolve => setTimeout(resolve, delay))
    }
  }

  console.log('\n=== 저장 완료 ===')
  console.log(`성공: ${success}개`)
  console.log(`실패: ${failed}개`)
  console.log(`총 완료: ${completed.size}개`)
}

saveAllAnalyses().catch(console.error)
