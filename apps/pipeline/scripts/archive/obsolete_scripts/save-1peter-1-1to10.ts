import { saveAnalysisToDb, type AnalysisData } from './save-analysis-to-db'

const analyses: AnalysisData[] = [
  // 1 Peter 1:1
  {
    reference: '1 Peter 1:1',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '발신자 소개',
        original_text: 'Peter, an apostle of Jesus Christ',
        korean_translation: '예수 그리스도의 사도 베드로',
        grammatical_explanation: '동격 명사구로 베드로의 권위를 설명'
      },
      {
        sequence_order: 2,
        semantic_classification: '수신자 명시',
        original_text: 'To God\'s elect',
        korean_translation: '하나님께 선택받은 자들에게',
        grammatical_explanation: '전치사구로 편지의 수신자를 지정'
      },
      {
        sequence_order: 3,
        semantic_classification: '수신자의 상태와 위치',
        original_text: 'exiles scattered throughout the provinces of Pontus, Galatia, Cappadocia, Asia and Bithynia',
        korean_translation: '본도, 갈라디아, 갑바도기아, 아시아, 비두니아 지방에 흩어져 나그네로 사는',
        grammatical_explanation: '분사구문으로 흩어진 나그네들을 묘사, 5개 지역 나열'
      }
    ],
    vocabulary: [
      {
        word: 'apostle',
        ipa_pronunciation: '/əˈpɒsl/',
        korean_pronunciation: '어파슬',
        part_of_speech: '명사',
        definition_korean: '사도, 예수 그리스도께 직접 파송받은 전도자'
      },
      {
        word: 'elect',
        ipa_pronunciation: '/ɪˈlekt/',
        korean_pronunciation: '일렉트',
        part_of_speech: '형용사/명사',
        definition_korean: '선택받은 자들, 하나님께서 구원하시기로 예정하신 사람들'
      },
      {
        word: 'exiles',
        ipa_pronunciation: '/ˈeksaɪlz/',
        korean_pronunciation: '엑사일즈',
        part_of_speech: '명사',
        definition_korean: '나그네들, 본향을 떠나 타향에 사는 자들'
      },
      {
        word: 'scattered',
        ipa_pronunciation: '/ˈskætərd/',
        korean_pronunciation: '스캐터드',
        part_of_speech: '동사(과거분사)',
        definition_korean: '흩어진, 여러 곳에 분산된'
      },
      {
        word: 'provinces',
        ipa_pronunciation: '/ˈprɒvɪnsɪz/',
        korean_pronunciation: '프라빈시즈',
        part_of_speech: '명사',
        definition_korean: '속주들, 로마 제국의 행정 구역'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '베드로전서는 주후 60년대 초중반 로마에서 기록된 것으로 추정되며, 소아시아(현대 터키) 지역에 흩어져 살던 그리스도인들에게 보낸 서신입니다. 수신자들은 대부분 이방인 출신 신자들로, 로마 제국 전역에서 점차 심화되던 박해 속에서 신앙을 지켜야 했습니다. 베드로는 자신을 "사도"로 소개함으로써 이 편지의 권위를 확립합니다. 그가 언급한 다섯 지역(본도, 갈라디아, 갑바도기아, 아시아, 비두니아)은 당시 로마의 속주들이었으며, 지리적으로 넓은 범위를 포괄합니다. 수신자들을 "하나님의 택하신 자들"이자 "나그네"로 부르는 것은 이중적 의미를 담고 있습니다. 신학적으로는 하나님께 선택받은 특권적 정체성을 강조하면서도, 사회적으로는 지상에서 임시 거주자로 살아가는 현실을 인정합니다. 이는 독자들에게 현재의 고난을 영원한 관점에서 이해하도록 돕습니다.'
    },
    korean_translation: {
      natural_translation: '예수 그리스도의 사도 베드로는 본도, 갈라디아, 갑바도기아, 아시아, 비두니아 지방에 흩어져 나그네로 사는 하나님의 선택받은 자들에게 편지합니다.'
    },
    special_explanation: {
      explanation_type: '문법적·신학적 특징',
      content: '이 구절은 고대 서신의 전형적인 형식을 따릅니다 - 발신자(Peter), 수신자(God\'s elect), 그리고 인사(다음 절에 계속). "exiles scattered"는 분사구문으로 수신자의 상태를 생생하게 묘사합니다. "elect"(선택받은)과 "exiles"(나그네)의 병치는 신자의 이중적 정체성을 보여줍니다 - 하늘에 속하면서도 땅에서 살아가는 존재. 언급된 다섯 지역은 바울의 1-2차 전도 여행 때 복음이 전파된 곳들이며, 베드로는 이 지역들을 포괄하는 순환 서신 형태로 편지를 썼습니다.'
    }
  },

  // 1 Peter 1:2
  {
    reference: '1 Peter 1:2',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '선택의 근거',
        original_text: 'who have been chosen according to the foreknowledge of God the Father',
        korean_translation: '하나님 아버지께서 미리 아신 대로 선택받은',
        grammatical_explanation: '관계대명사절로 1절의 "elect"를 수식, 수동태 완료형으로 이미 이루어진 선택을 나타냄'
      },
      {
        sequence_order: 2,
        semantic_classification: '선택의 수단',
        original_text: 'through the sanctifying work of the Spirit',
        korean_translation: '성령의 거룩하게 하심을 통해',
        grammatical_explanation: '전치사구로 선택이 실현되는 방식을 설명'
      },
      {
        sequence_order: 3,
        semantic_classification: '선택의 목적',
        original_text: 'to be obedient to Jesus Christ and sprinkled with his blood',
        korean_translation: '예수 그리스도께 순종하며 그분의 피 뿌림을 받기 위해',
        grammatical_explanation: '부정사구로 선택의 궁극적 목적을 제시'
      },
      {
        sequence_order: 4,
        semantic_classification: '인사말',
        original_text: 'Grace and peace be yours in abundance',
        korean_translation: '은혜와 평강이 여러분에게 더욱 풍성하기를 빕니다',
        grammatical_explanation: '접속법을 사용한 기원문, 고대 서신의 전형적 인사'
      }
    ],
    vocabulary: [
      {
        word: 'foreknowledge',
        ipa_pronunciation: '/fɔːˈnɒlɪdʒ/',
        korean_pronunciation: '포놀리지',
        part_of_speech: '명사',
        definition_korean: '미리 아심, 예지'
      },
      {
        word: 'sanctifying',
        ipa_pronunciation: '/ˈsæŋktɪfaɪɪŋ/',
        korean_pronunciation: '생크티파잉',
        part_of_speech: '동사(현재분사)',
        definition_korean: '거룩하게 하는, 성화시키는'
      },
      {
        word: 'obedient',
        ipa_pronunciation: '/əˈbiːdiənt/',
        korean_pronunciation: '어비디언트',
        part_of_speech: '형용사',
        definition_korean: '순종하는'
      },
      {
        word: 'sprinkled',
        ipa_pronunciation: '/ˈsprɪŋkld/',
        korean_pronunciation: '스프링클드',
        part_of_speech: '동사(과거분사)',
        definition_korean: '뿌려진'
      },
      {
        word: 'abundance',
        ipa_pronunciation: '/əˈbʌndəns/',
        korean_pronunciation: '어번던스',
        part_of_speech: '명사',
        definition_korean: '풍성함, 넘침'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '이 구절은 삼위일체 하나님의 구원 사역을 압축적으로 제시합니다. 성부는 미리 아시고 선택하시며, 성령은 거룩하게 하시고, 성자는 순종의 대상이자 피 뿌림을 통한 구속을 이루십니다. "피 뿌림"은 출애굽기 24장의 시내산 언약 체결 장면과 레위기의 제사 제도를 연상시킵니다. 모세가 백성에게 피를 뿌리며 언약을 확증했듯이, 그리스도의 피는 새 언약을 세우고 신자들을 깨끗하게 합니다. "은혜와 평강"은 당시 서신의 전형적인 인사말이지만, 기독교적 의미로 충만합니다. 은혜(charis)는 하나님의 무조건적 사랑을, 평강(shalom)은 하나님과의 화평과 완전한 복지를 의미합니다. "풍성하게"라는 말은 박해받는 독자들에게 하나님의 충만한 공급을 확신시킵니다.'
    },
    korean_translation: {
      natural_translation: '하나님 아버지께서 미리 아신 대로 성령의 거룩하게 하심을 통해 선택받은 여러분, 예수 그리스도께 순종하며 그분의 피 뿌림을 받기 위해 택함을 입었습니다. 은혜와 평강이 여러분에게 더욱 풍성하기를 빕니다.'
    },
    special_explanation: {
      explanation_type: '삼위일체와 구원론',
      content: '이 구절은 초대 교회 신학에서 삼위일체 교리가 얼마나 자연스럽게 표현되었는지 보여줍니다. 성부-성령-성자의 역할이 구원의 과정에서 명확히 구분되면서도 조화롭게 통합됩니다. "have been chosen"(이미 선택받았음)과 "to be obedient"(앞으로 순종할)는 구원의 이미 이루어진 측면과 계속 이루어져 가는 측면을 동시에 나타냅니다.'
    }
  },

  // 1 Peter 1:3
  {
    reference: '1 Peter 1:3',
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: '송축 선언',
        original_text: 'Praise be to the God and Father of our Lord Jesus Christ',
        korean_translation: '우리 주 예수 그리스도의 하나님 아버지를 찬송합니다',
        grammatical_explanation: '접속법을 사용한 송축문, 유대교 전통의 복 선언(berakah) 형식'
      },
      {
        sequence_order: 2,
        semantic_classification: '은혜의 행위',
        original_text: 'In his great mercy he has given us new birth into a living hope',
        korean_translation: '그분은 크신 긍휼로 우리를 거듭나게 하시고 산 소망을 갖게 하셨습니다',
        grammatical_explanation: '현재완료 시제로 이미 이루어진 구원의 사건을 강조'
      },
      {
        sequence_order: 3,
        semantic_classification: '수단 제시',
        original_text: 'through the resurrection of Jesus Christ from the dead',
        korean_translation: '예수 그리스도를 죽은 자들 가운데서 부활시키심으로',
        grammatical_explanation: '전치사구로 거듭남과 산 소망의 근거를 제시'
      }
    ],
    vocabulary: [
      {
        word: 'praise',
        ipa_pronunciation: '/preɪz/',
        korean_pronunciation: '프레이즈',
        part_of_speech: '명사/동사',
        definition_korean: '찬양, 찬송'
      },
      {
        word: 'mercy',
        ipa_pronunciation: '/ˈmɜːsi/',
        korean_pronunciation: '머시',
        part_of_speech: '명사',
        definition_korean: '긍휼, 자비'
      },
      {
        word: 'new birth',
        ipa_pronunciation: '/njuː bɜːθ/',
        korean_pronunciation: '뉴 버스',
        part_of_speech: '명사구',
        definition_korean: '거듭남, 중생'
      },
      {
        word: 'living hope',
        ipa_pronunciation: '/ˈlɪvɪŋ həʊp/',
        korean_pronunciation: '리빙 호프',
        part_of_speech: '명사구',
        definition_korean: '산 소망, 생생하고 활력 있는 희망'
      },
      {
        word: 'resurrection',
        ipa_pronunciation: '/ˌrezəˈrekʃn/',
        korean_pronunciation: '레저렉션',
        part_of_speech: '명사',
        definition_korean: '부활'
      }
    ],
    contextual_explanation: {
      integrated_explanation: '3절부터 12절까지는 구원의 영광을 찬양하는 긴 송축문입니다. 베드로는 유대교 전통의 복 선언 형식(berakah)을 따라 하나님을 찬양하며 편지의 신학적 주제를 펼칩니다. "새로 남" 또는 "거듭남"(anagennao)은 요한복음 3장의 니고데모와 예수의 대화를 연상시키는 중생 개념입니다. 이는 단순한 도덕적 개선이 아니라 영적 존재의 근본적 변혁을 의미합니다. "산 소망"은 죽은 우상이나 헛된 기대와 대조됩니다. 이 소망은 그리스도의 부활이라는 역사적 사건에 기초하므로 확실하고 생명력 있습니다. 박해받는 신자들에게 이는 현재의 고난을 견딜 힘의 원천이 됩니다. 부활은 신약 신학의 핵심입니다. 그리스도의 부활은 죽음을 이기신 승리이며, 신자들의 미래 부활을 보증합니다. 베드로는 부활절 아침 빈 무덤의 목격자로서 이 진리를 확신 있게 선포합니다.'
    },
    korean_translation: {
      natural_translation: '우리 주 예수 그리스도의 하나님 아버지를 찬송합니다! 그분은 크신 긍휼로 예수 그리스도를 죽은 자들 가운데서 부활시키심으로 우리를 거듭나게 하시고 산 소망을 갖게 하셨습니다.'
    },
    special_explanation: {
      explanation_type: '문학적 구조와 신학적 의미',
      content: '이 구절은 베드로전서의 첫 번째 주요 단락의 시작으로, 송축(eulogy) 형식으로 편지의 핵심 주제들(고난, 소망, 부활, 영광)을 소개합니다. 헬라어 "elpis zosa"(산 소망)는 단순한 희망적 생각이 아니라, 부활하신 그리스도 안에서 확실하고 활력 넘치는 기대를 뜻합니다.'
    }
  }
]

async function main() {
  console.log('1 Peter 1:1-3 분석 결과 저장 시작...\n')

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
