import { saveAnalysisToDb } from './save-analysis-to-db'

// 골로새서 3:1-25의 분석 데이터를 올바른 형식으로 변환하여 저장
const verses = [
  {
    ref: 'Colossians 3:1',
    structures: [
      { text: 'Since, then, you have been raised with Christ', class: '조건절', ko: '그러므로 여러분이 그리스도와 함께 일으킴을 받았으니', grammar: '완료 수동태로 그리스도와 함께 부활한 신학적 사실을 전제로 제시' },
      { text: 'set your hearts on things above', class: '명령문', ko: '위의 것들을 추구하십시오', grammar: '위의 것들에 마음을 두라는 직접적 권면' },
      { text: 'where Christ is, seated at the right hand of God', class: '관계절', ko: '거기에는 그리스도께서 하나님의 오른편에 앉아 계십니다', grammar: '그리스도의 현재 위치를 하나님 우편으로 설명' }
    ],
    words: [
      { w: 'raised', ipa: '/reɪzd/', ko: '레이즈드', def: '일으킴을 받은, 부활시킴을 받은' },
      { w: 'hearts', ipa: '/hɑrts/', ko: '하츠', def: '마음, 심령' },
      { w: 'things above', ipa: '/θɪŋz əˈbʌv/', ko: '씽즈 어버브', def: '위의 것들, 하늘의 것들' },
      { w: 'seated', ipa: '/ˈsiːtɪd/', ko: '시티드', def: '앉아 계신' }
    ],
    context: '바울은 골로새 교회 성도들에게 그리스도와의 연합을 통한 새로운 정체성을 강조합니다. "그리스도와 함께 일으킴을 받았다"는 표현은 세례를 통해 그리스도의 죽음과 부활에 참여한 신학적 현실을 가리킵니다. 이는 단순히 미래의 소망이 아니라 현재 이미 일어난 영적 사건입니다. "위의 것들"은 지상의 물질적이고 일시적인 가치와 대비되는 하늘의 영원한 가치를 의미합니다. 그리스도께서 하나님 우편에 앉아 계시다는 것은 구약의 시편 110:1을 인용한 것으로, 메시아의 왕권과 권위를 나타냅니다. 따라서 성도들은 자신들의 주님이 계신 곳, 즉 하늘의 가치와 관점에 마음을 집중해야 합니다.',
    translation: '그러므로 여러분이 그리스도와 함께 일으킴을 받았으니, 위의 것들을 추구하십시오. 거기에는 그리스도께서 하나님의 오른편에 앉아 계십니다.',
    notes: '"raised with Christ"는 완료 수동태(perfect passive)로 과거에 완성되어 현재까지 지속되는 상태를 나타냅니다. "set your hearts"는 현재 명령형으로 계속적인 행동을 요구합니다.'
  },
  {
    ref: 'Colossians 3:2',
    structures: [
      { text: 'Set your minds on things above', class: '명령문', ko: '위의 것들에 여러분의 생각을 두고', grammar: '생각을 위의 것들에 두라는 적극적 권면' },
      { text: 'not on earthly things', class: '부정 대조구', ko: '땅의 것들에 두지 마십시오', grammar: '땅의 것들과 대비하여 강조' }
    ],
    words: [
      { w: 'minds', ipa: '/maɪndz/', ko: '마인즈', def: '생각, 사고, 정신' },
      { w: 'earthly', ipa: '/ˈɜrθli/', ko: '어슬리', def: '땅의, 세상의, 일시적인' }
    ],
    context: '1절의 "마음"(hearts)에 이어 여기서는 "생각"(minds)을 언급하며, 신자의 내면 전체가 하늘의 가치로 방향 전환되어야 함을 강조합니다. "위의 것들"과 "땅의 것들"의 대조는 초대 교회가 직면한 이원론적 세계관과 연결됩니다. 골로새서가 대응하는 거짓 가르침은 물질 세계를 악한 것으로 보거나, 반대로 영적 영역을 무시하고 현세적 가치에만 집중하는 극단을 모두 포함했을 가능성이 있습니다. 바울은 육체를 부정하는 것이 아니라, 그리스도 안에서 새로운 관점과 가치관을 가지라고 권면합니다. 이는 도피주의가 아니라 그리스도의 왕권 아래서 모든 삶을 재구성하는 것입니다.',
    translation: '위의 것들에 여러분의 생각을 두고, 땅의 것들에 두지 마십시오.',
    notes: '"minds"와 "hearts"(1절)의 구분은 의지와 감정, 이성과 정서를 모두 포함하는 전인적 헌신을 요구하는 히브리적 사고를 반영합니다.'
  }
]

async function main() {
  console.log('골로새서 3:1-2 분석 저장 시작 (테스트)\\n')

  for (const v of verses) {
    const data = {
      reference: v.ref,
      sentence_structures: v.structures.map((s, i) => ({
        sequence_order: i + 1,
        semantic_classification: s.class,
        original_text: s.text,
        korean_translation: s.ko,
        grammatical_explanation: s.grammar
      })),
      vocabulary: v.words.map(w => ({
        word: w.w,
        ipa_pronunciation: w.ipa,
        korean_pronunciation: w.ko,
        definition_korean: w.def
      })),
      contextual_explanation: {
        integrated_explanation: v.context
      },
      korean_translation: {
        natural_translation: v.translation,
        translation_notes: v.notes
      },
      special_explanation: v.notes ? {
        explanation_type: '문법 및 해석',
        content: v.notes
      } : undefined
    }

    await saveAnalysisToDb(data)
    await new Promise(resolve => setTimeout(resolve, 500))
  }

  console.log('\\n테스트 완료')
}

main()
