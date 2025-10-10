import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

const analyses: AnalysisData[] = [
  {
    reference: "2 Timothy 2:11",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "신실한 말씀 소개",
        original_text: "Here is a trustworthy saying",
        korean_translation: "미쁘다, 이 말이여",
        grammatical_explanation: "공식 도입구 - '미쁜 말씀'(πιστὸς ὁ λόγος)은 초대 교회 신앙고백 인용 표시입니다"
      },
      {
        sequence_order: 2,
        semantic_classification: "조건: 함께 죽음",
        original_text: "If we died with him, we will also live with him",
        korean_translation: "우리가 그와 함께 죽었으면, 또한 그와 함께 살 것이요",
        grammatical_explanation: "조건문 - 1급 조건문으로 '죽었다'(συναπεθάνομεν)는 과거 사실, '살 것이다'(συζήσομεν)는 미래입니다"
      }
    ],
    vocabulary: [
      {
        word: "trustworthy",
        ipa_pronunciation: "/ˈtrʌstˌwɜrði/",
        korean_pronunciation: "트러스트워디",
        part_of_speech: "형용사",
        definition_korean: "미쁜, 신실한, 믿을 만한",
        usage_note: "그리스어 πιστὸς(pistos)는 목회서신에서 신앙고백 인용을 나타내는 공식입니다 (딤전 1:15; 3:1; 4:9; 딛 3:8)"
      },
      {
        word: "died with",
        ipa_pronunciation: "/daɪd wɪθ/",
        korean_pronunciation: "다이드 위드",
        part_of_speech: "동사구",
        definition_korean: "함께 죽다",
        usage_note: "그리스어 συναποθνῄσκω(sunapothnesko)는 '함께'(σύν) + '죽다'(ἀποθνῄσκω)의 합성어입니다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "'미쁘다, 이 말이여'(πιστὸς ὁ λόγος)는 목회서신에서 신앙고백이나 중요한 교리를 인용할 때 사용하는 공식입니다(딤전 1:15; 3:1; 4:9; 딤후 2:11; 딛 3:8). 2:11-13은 초대 교회의 찬송이나 신앙고백으로 추정됩니다(4행시 형식). '우리가 그와 함께 죽었으면'(εἰ γὰρ συναπεθάνομεν)은 1급 조건문으로 실제 사실을 나타냅니다. 이는 두 가지 의미를 가집니다: (1) 세례와 회심 시 그리스도와의 연합(롬 6:3-8 '우리가 그의 죽으심과 합하여 세례를 받음으로 그와 함께 장사되었나니... 우리가 그리스도와 함께 죽었으면 또한 그와 함께 살 줄을 믿노니'), (2) 실제 순교(빌 3:10 '그의 죽으심과 같은 모양이 되어'). '함께 살 것이다'(συζήσομεν)는 미래 영생을 의미합니다.",
      cross_references: ["롬 6:8 (만일 우리가 그리스도와 함께 죽었으면 또한 그와 함께 살 줄을 믿노니)", "골 3:3 (이는 너희가 죽었고 너희 생명이 그리스도와 함께 하나님 안에 감추어졌음이라)", "계 20:4 (그들이 살아서 그리스도와 더불어 천 년 동안 왕 노릇 하니)"]
    },
    korean_translation: {
      natural_translation: "미쁘다, 이 말이여: 우리가 그와 함께 죽었으면, 또한 그와 함께 살 것이요",
      translation_notes: "초대 교회 신앙고백의 시작"
    },
    special_explanation: {
      explanation_type: "초대 교회 신앙고백 찬송 (2:11-13)",
      content: "딤후 2:11-13은 초대 교회의 찬송이나 신앙고백으로 추정됩니다. 4행시 구조를 가지며 각 행은 조건문과 결과문으로 이루어져 있습니다: (1) 2:11 - 함께 죽음 → 함께 삶, (2) 2:12a - 참고 견딤 → 함께 왕 노릇, (3) 2:12b - 부인함 → 부인당함, (4) 2:13 - 우리의 신실치 못함 ← 주의 신실하심. 이는 초대 교회 예배에서 암송되거나 노래되었을 가능성이 높습니다. 바울은 이 찬송을 인용하여 디모데에게 고난과 충성의 중요성을 강조합니다.",
      examples: ["롬 6:3-8 - 세례와 그리스도의 죽음에 연합", "빌 1:21 - 내게 사는 것이 그리스도니 죽는 것도 유익함이라", "계 20:4 - 그들이 살아서 그리스도와 더불어 천 년 동안 왕 노릇 하니"]
    }
  },
  {
    reference: "2 Timothy 2:12",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "조건: 인내",
        original_text: "if we endure, we will also reign with him",
        korean_translation: "참고 견디면, 또한 그와 함께 왕 노릇 할 것이요",
        grammatical_explanation: "조건문 - '참고 견디다'(ὑπομένομεν)는 현재형으로 계속적 인내를 나타냅니다"
      },
      {
        sequence_order: 2,
        semantic_classification: "경고: 부인",
        original_text: "If we disown him, he will also disown us",
        korean_translation: "우리가 주를 부인하면, 주도 우리를 부인하실 것이라",
        grammatical_explanation: "조건문 - '부인하다'(ἀρνησόμεθα, ἀρνήσεται)는 미래형으로 가정된 상황입니다"
      }
    ],
    vocabulary: [
      {
        word: "endure",
        ipa_pronunciation: "/ɪnˈdʊr/",
        korean_pronunciation: "인듀어",
        part_of_speech: "동사",
        definition_korean: "참고 견디다, 인내하다",
        usage_note: "그리스어 ὑπομένω(hupomeno)는 '끝까지 견디다'는 뜻으로 딤후 2:10에서도 사용되었습니다"
      },
      {
        word: "reign",
        ipa_pronunciation: "/reɪn/",
        korean_pronunciation: "레인",
        part_of_speech: "동사",
        definition_korean: "왕 노릇 하다, 통치하다",
        usage_note: "그리스어 συμβασιλεύω(sumbasileuo)는 '함께'(σύν) + '왕 노릇 하다'(βασιλεύω)의 합성어입니다"
      },
      {
        word: "disown",
        ipa_pronunciation: "/dɪˈsoʊn/",
        korean_pronunciation: "디소운",
        part_of_speech: "동사",
        definition_korean: "부인하다, 거부하다",
        usage_note: "그리스어 ἀρνέομαι(arneomai)는 '거부하다, 부정하다'는 뜻으로 베드로의 부인(마 26:70, 72, 74)과 같은 단어입니다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "이 구절은 신앙고백 찬송의 2-3행입니다. '참고 견디면'(εἰ ὑπομένομεν)은 현재형으로 계속적인 인내를 나타냅니다. 이는 순교나 박해를 견디는 것을 의미합니다. '함께 왕 노릇 할 것이다'(συμβασιλεύσομεν)는 계 20:4 '그들이 살아서 그리스도와 더불어 천 년 동안 왕 노릇 하니'와 연결됩니다. 이는 신자의 미래 영광을 나타냅니다(롬 8:17 '자녀이면 또한 상속자 곧 하나님의 상속자요 그리스도와 함께 한 상속자니 우리가 그와 함께 영광을 받기 위하여 고난도 함께 받아야 할 것이니라'). '부인하면'(ἀρνησόμεθα)은 배교(apostasy)를 가리킵니다. 예수님도 마 10:33에서 경고하셨습니다: '누구든지 사람 앞에서 나를 부인하면 나도 하늘에 계신 내 아버지 앞에서 그를 부인하리라'. 베드로의 부인(마 26:70-74)도 같은 단어(ἀρνέομαι)를 사용합니다.",
      cross_references: ["마 10:33 (누구든지 사람 앞에서 나를 부인하면 나도... 그를 부인하리라)", "롬 8:17 (그리스도와 함께 한 상속자니... 함께 영광을 받기 위하여)", "계 20:4 (그리스도와 더불어 천 년 동안 왕 노릇 하니)"]
    },
    korean_translation: {
      natural_translation: "참고 견디면, 또한 그와 함께 왕 노릇 할 것이요; 우리가 주를 부인하면, 주도 우리를 부인하실 것이라.",
      translation_notes: "인내의 보상과 배교의 경고"
    },
    special_explanation: {
      explanation_type: "인내와 배교",
      content: "이 구절은 두 가지 대조를 제시합니다: (1) 인내(ὑπομένω) → 함께 왕 노릇(συμβασιλεύω): 현재의 고난을 참고 견디는 자는 미래에 그리스도와 함께 통치할 것입니다(계 20:4; 22:5). 롬 8:17 '우리가 그와 함께 영광을 받기 위하여 고난도 함께 받아야 할 것이니라'. (2) 부인(ἀρνέομαι) → 부인당함(ἀρνέομαι): 그리스도를 부인하는 자는 그리스도께 부인당할 것입니다(마 10:33). 이는 배교(apostasy)의 위험성을 경고합니다. 베드로는 예수님을 세 번 부인했지만(마 26:70-74, 같은 단어 ἀρνέομαι), 회개하고 회복되었습니다(요 21:15-17). 따라서 이 경고는 최종적이고 회개 없는 배교를 가리킵니다.",
      examples: ["마 10:32-33 - 누구든지 사람 앞에서 나를 시인하면... 부인하면", "히 10:26-27 - 진리를 아는 지식을 받은 후 고의로 죄를 범한즉", "계 2:10 - 네가 죽도록 충성하라 그리하면 내가 생명의 관을 네게 주리라"]
    }
  },
  {
    reference: "2 Timothy 2:13",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "대조: 우리의 신실치 못함",
        original_text: "if we are faithless, he remains faithful",
        korean_translation: "우리는 신실하지 못할지라도, 주는 항상 신실하시니",
        grammatical_explanation: "대조문 - '신실하지 못하다'(ἀπιστοῦμεν)와 '신실하시다'(πιστὸς μένει)의 대조입니다"
      },
      {
        sequence_order: 2,
        semantic_classification: "이유: 주의 본성",
        original_text: "for he cannot disown himself",
        korean_translation: "이는 자기를 부인하실 수 없으심이라",
        grammatical_explanation: "이유절 - '부인할 수 없다'(ἀρνήσασθαι οὐ δύναται)는 불가능성을 나타냅니다"
      }
    ],
    vocabulary: [
      {
        word: "faithless",
        ipa_pronunciation: "/ˈfeɪθləs/",
        korean_pronunciation: "페이스리스",
        part_of_speech: "형용사",
        definition_korean: "신실하지 못한, 믿음이 없는",
        usage_note: "그리스어 ἀπιστέω(apisteo)는 '믿지 않다, 신실하지 못하다'는 뜻입니다"
      },
      {
        word: "faithful",
        ipa_pronunciation: "/ˈfeɪθfəl/",
        korean_pronunciation: "페이스풀",
        part_of_speech: "형용사",
        definition_korean: "신실한, 충성된",
        usage_note: "그리스어 πιστός(pistos)는 '믿을 만한, 신실한'이라는 뜻입니다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "이 구절은 신앙고백 찬송의 마지막 행이며, 하나님의 변치 않는 신실함을 강조합니다. '우리가 신실하지 못할지라도'(εἰ ἀπιστοῦμεν)는 인간의 연약함과 믿음의 흔들림을 가리킵니다. 그러나 '주는 항상 신실하시니'(ἐκεῖνος πιστὸς μένει)는 하나님의 변치 않는 본성을 나타냅니다. '자기를 부인하실 수 없으심이라'(ἀρνήσασθαι γὰρ ἑαυτὸν οὐ δύναται)는 하나님의 신실함이 그분의 본성에 속한 것이기 때문에, 그분은 자신의 약속을 어길 수 없다는 뜻입니다. 민 23:19 '하나님은 사람이 아니시니 거짓말을 하지 않으시고 인생이 아니시니 후회가 없으시도다', 히 6:18 '하나님은 거짓말을 하실 수 없으시기에', 딤후 2:19 '그러나 하나님의 견고한 터는 섰으니 인침이 있어 일렀으되 주께서 자기 백성을 아신다'와 같은 원리입니다. 이 구절은 성도의 견인(perseverance of the saints) 교리의 성경적 근거 중 하나입니다: 신자의 구원이 하나님의 신실함에 근거하기 때문에 안전합니다.",
      cross_references: ["민 23:19 (하나님은 사람이 아니시니 거짓말을 하지 않으시고)", "히 6:18 (하나님은 거짓말을 하실 수 없으시기에)", "롬 3:3 (어떤 자들이 믿지 아니하였으면 어찌하리요 그 믿지 아니함이 하나님의 미쁘심을 폐하겠느냐)"]
    },
    korean_translation: {
      natural_translation: "우리는 신실하지 못할지라도, 주는 항상 신실하시니, 이는 자기를 부인하실 수 없으심이라.",
      translation_notes: "하나님의 변치 않는 신실함"
    },
    special_explanation: {
      explanation_type: "하나님의 신실함과 성도의 견인",
      content: "이 구절은 하나님의 신실함(πιστός)이 그분의 본성에 속한 불변의 속성임을 선언합니다. '자기를 부인하실 수 없으심'(ἀρνήσασθαι ἑαυτὸν οὐ δύναται)은 하나님이 자신의 약속과 언약을 어길 수 없다는 뜻입니다. 민 23:19 '하나님은 사람이 아니시니 거짓말을 하지 않으시고', 히 6:18 '하나님은 거짓말을 하실 수 없으시기에', 약 1:17 '각양 좋은 은사와 온전한 선물이 다 위로부터... 내려오나니 그는 변함도 없으시고 회전하는 그림자도 없으시니라'. 이는 개혁주의 신학의 '성도의 견인'(perseverance of the saints) 교리의 성경적 근거입니다: 신자의 구원이 인간의 신실함이 아니라 하나님의 신실함에 근거하기 때문에 영원히 안전합니다. 빌 1:6 '너희 안에서 착한 일을 시작하신 이가 그리스도 예수의 날까지 이루실 줄을 우리는 확신하노라'.",
      examples: ["빌 1:6 - 착한 일을 시작하신 이가... 이루실 줄을 확신", "롬 8:38-39 - 어떤 피조물도 우리를 우리 주 그리스도 예수 안에 있는 하나님의 사랑에서 끊을 수 없으리라", "요 10:28-29 - 그들을 내 손에서 빼앗을 자가 없느니라"]
    }
  },
  // 2:14-25는 다음 배치로...
]

async function main() {
  console.log('=== 2 Timothy 2:11-13 배치 저장 시작 ===\n')

  for (const analysis of analyses) {
    await saveAnalysisToDb(analysis)
  }

  console.log('\n=== 완료 ===')
  console.log(`성공: ${analyses.length}`)
}

main()
