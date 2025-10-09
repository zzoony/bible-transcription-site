import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

const analyses: AnalysisData[] = [
  {
    reference: "2 Thessalonians 3:1",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "기도 요청 도입",
        original_text: "As for other matters, brothers and sisters, pray for us",
        korean_translation: "마지막으로, 형제자매 여러분, 우리를 위해 기도해 주십시오",
        grammatical_explanation: "τὸ λοιπόν(마지막으로) + 명령형 προσεύχεσθε(기도하라), 서신의 실천 부분 시작"
      },
      {
        sequence_order: 2,
        semantic_classification: "기도 내용",
        original_text: "that the message of the Lord may spread rapidly and be honored, just as it was with you",
        korean_translation: "주의 말씀이 빠르게 퍼지고 영광스럽게 되기를, 여러분에게서처럼",
        grammatical_explanation: "ἵνα(~하도록) + 두 가지: (1) τρέχῃ(달리다, 퍼지다), (2) δοξάζηται(영광받다)"
      }
    ],
    vocabulary: [
      {
        word: "spread rapidly",
        ipa_pronunciation: "/spred ˈræpɪdli/",
        korean_pronunciation: "스프레드 래피들리",
        part_of_speech: "동사구",
        definition_korean: "빠르게 퍼지다",
        usage_note: "τρέχω, 문자적으로 '달리다'"
      },
      {
        word: "honored",
        ipa_pronunciation: "/ˈɑːnərd/",
        korean_pronunciation: "아너드",
        part_of_speech: "동사",
        definition_korean: "영광스럽게 되다, 존귀하게 되다",
        usage_note: "δοξάζω, 영광받다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 3장에서 실천적 권면들(기도 요청, 게으름 경계, 질서 유지)을 제시합니다. 첫 번째 요청은 복음 전파를 위한 기도입니다. '달리다'(τρέχω)는 시 147:15('그의 말씀이 빠르게 달린다')의 이미지를 차용합니다."
    },
    korean_translation: {
      natural_translation: "마지막으로, 형제자매 여러분, 우리를 위해 기도해 주십시오. 주의 말씀이 여러분에게서처럼 빠르게 퍼지고 영광스럽게 되도록 말입니다."
    },
    special_explanation: {
      explanation_type: "말씀의 달림(Word Running)",
      content: "ὁ λόγος τοῦ κυρίου τρέχῃ(주의 말씀이 달리다)는 시 147:15 LXX의 표현입니다. 말씀은 생명력을 가지고 스스로 '달립니다'(히 4:12). 바울은 복음이 데살로니가에서 빠르게 퍼진 것처럼(행 17:1-9, 1 Thess 1:8), 다른 곳에서도 그렇게 되기를 기도 요청합니다."
    }
  },
  {
    reference: "2 Thessalonians 3:2",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "보호 기도",
        original_text: "And pray that we may be delivered from wicked and evil people",
        korean_translation: "그리고 우리가 사악하고 악한 사람들에게서 구원받도록 기도해 주십시오",
        grammatical_explanation: "ἵνα ῥυσθῶμεν(구원받도록) ἀπὸ τῶν ἀτόπων καὶ πονηρῶν ἀνθρώπων(부당하고 악한 사람들로부터)"
      },
      {
        sequence_order: 2,
        semantic_classification: "이유 설명",
        original_text: "for not everyone has faith",
        korean_translation: "모든 사람이 믿음을 가진 것은 아니기 때문입니다",
        grammatical_explanation: "γάρ(왜냐하면) οὐ πάντων ἡ πίστις(믿음이 모든 이의 것이 아니다)"
      }
    ],
    vocabulary: [
      {
        word: "wicked",
        ipa_pronunciation: "/ˈwɪkɪd/",
        korean_pronunciation: "위키드",
        part_of_speech: "형용사",
        definition_korean: "사악한, 부당한",
        usage_note: "ἄτοπος, 제자리를 벗어난, 부적절한"
      },
      {
        word: "delivered",
        ipa_pronunciation: "/dɪˈlɪvərd/",
        korean_pronunciation: "딜리버드",
        part_of_speech: "동사",
        definition_korean: "구원받다, 건져지다",
        usage_note: "ῥύομαι, 위험에서 구출되다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 고린도(행 18:12-17), 에베소(행 19:23-41)에서 복음을 반대하는 사람들로부터 위협을 받았습니다. '모든 사람이 믿음을 가진 것이 아니다'는 슬픈 현실 인정입니다."
    },
    korean_translation: {
      natural_translation: "그리고 우리가 사악하고 악한 사람들에게서 구원받도록 기도해 주십시오. 모든 사람이 믿음을 가진 것은 아니기 때문입니다."
    }
  },
  {
    reference: "2 Thessalonians 3:3",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "주의 신실성 선언",
        original_text: "But the Lord is faithful, and he will strengthen you and protect you from the evil one",
        korean_translation: "그러나 주님은 신실하셔서 여러분을 굳게 하시고 악한 자에게서 지켜 주실 것입니다",
        grammatical_explanation: "πιστὸς δέ ἐστιν ὁ κύριος(주는 신실하시다) + 두 가지 행위: (1) στηρίξει(굳게 하실 것), (2) φυλάξει(지키실 것)"
      }
    ],
    vocabulary: [
      {
        word: "faithful",
        ipa_pronunciation: "/ˈfeɪθfəl/",
        korean_pronunciation: "페이스풀",
        part_of_speech: "형용사",
        definition_korean: "신실한, 신뢰할 만한",
        usage_note: "πιστός, 약속을 지키시는"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "사람들의 불신실함(3:2)과 대조하여, 주님의 신실하심이 강조됩니다. 주님은 성도들을 (1) 내적으로 굳게 하시고(strengthen), (2) 외적으로 악한 자(사탄)로부터 보호하십니다(요 17:15, 마 6:13)."
    },
    korean_translation: {
      natural_translation: "그러나 주님은 신실하셔서 여러분을 굳게 하시고 악한 자에게서 지켜 주실 것입니다."
    },
    special_explanation: {
      explanation_type: "주의 신실성(The Lord's Faithfulness)",
      content: "πιστὸς δέ ἐστιν ὁ κύριος는 사람의 불신실함(3:2)과 대조됩니다. 하나님의 신실성은 구약의 중심 주제이며(신 7:9, 시 89:8), 신약에서도 반복됩니다(고전 1:9, 10:13, 살전 5:24). '악한 자'(τοῦ πονηροῦ)는 사탄을 가리킵니다(마 6:13, 요 17:15, 엡 6:16)."
    }
  },
  {
    reference: "2 Thessalonians 3:4",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "확신 표현",
        original_text: "We have confidence in the Lord that you are doing and will continue to do the things we command",
        korean_translation: "우리는 주님 안에서 여러분이 우리가 명령하는 것들을 행하고 있고 계속 행할 것이라고 확신합니다",
        grammatical_explanation: "πεποίθαμεν ἐν κυρίῳ(주 안에서 확신한다) + 현재와 미래 연결(ποιεῖτε καὶ ποιήσετε)"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 데살로니가 교회가 이미 순종하고 있으며 앞으로도 계속 순종할 것이라고 확신합니다. 이 확신은 사람이 아니라 '주님 안에서'(in the Lord) 갖는 확신입니다."
    },
    korean_translation: {
      natural_translation: "우리는 주님 안에서 여러분이 우리가 명령하는 것들을 행하고 있고 계속 행할 것이라고 확신합니다."
    }
  },
  {
    reference: "2 Thessalonians 3:5",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "기도 소원",
        original_text: "May the Lord direct your hearts into God's love and Christ's perseverance",
        korean_translation: "주님께서 여러분의 마음을 하나님의 사랑과 그리스도의 인내로 인도하시기를 원합니다",
        grammatical_explanation: "기원법 κατευθύναι(인도하시기를) + 두 목적지: (1) 하나님의 사랑, (2) 그리스도의 인내"
      }
    ],
    vocabulary: [
      {
        word: "direct",
        ipa_pronunciation: "/dɪˈrekt/",
        korean_pronunciation: "디렉트",
        part_of_speech: "동사",
        definition_korean: "인도하다, 향하게 하다",
        usage_note: "κατευθύνω, 올바른 방향으로 이끌다"
      },
      {
        word: "perseverance",
        ipa_pronunciation: "/ˌpɜːrsəˈvɪrəns/",
        korean_pronunciation: "퍼서비어런스",
        part_of_speech: "명사",
        definition_korean: "인내, 참고 견딤",
        usage_note: "ὑπομονή, 꾸준한 인내"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 성도들의 마음이 두 가지로 향하기를 기도합니다: (1) 하나님의 사랑(하나님이 우리를 사랑하심), (2) 그리스도의 인내(그리스도께서 보여주신 인내, 또는 그리스도를 기다리는 인내). 이 두 가지가 고난 중에도 신앙을 유지하는 힘입니다."
    },
    korean_translation: {
      natural_translation: "주님께서 여러분의 마음을 하나님의 사랑과 그리스도의 인내로 인도하시기를 원합니다."
    },
    special_explanation: {
      explanation_type: "그리스도의 인내(Christ's Perseverance)",
      content: "τὴν ὑπομονὴν τοῦ Χριστοῦ(그리스도의 인내)는 두 가지로 해석됩니다: (1) 객관적 속격 - 그리스도를 향한/기다리는 인내(재림 대망), (2) 주관적 속격 - 그리스도께서 보여주신 인내(십자가 고난). 문맥상 두 의미 모두 가능하며, 상호 보완적입니다."
    }
  },
  {
    reference: "2 Thessalonians 3:6",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "권위 있는 명령",
        original_text: "In the name of the Lord Jesus Christ, we command you, brothers and sisters, to keep away from every believer who is idle and disruptive and does not live according to the teaching you received from us",
        korean_translation: "형제자매 여러분, 우리는 주 예수 그리스도의 이름으로 명령합니다. 게으르고 무질서하게 살며 우리에게서 받은 가르침대로 살지 않는 모든 신자로부터 떨어져 있으십시오",
        grammatical_explanation: "ἐν ὀνόματι τοῦ κυρίου(주의 이름으로) + 명령형 στέλλεσθαι(떨어져 있으라), 사도적 권위"
      }
    ],
    vocabulary: [
      {
        word: "idle",
        ipa_pronunciation: "/ˈaɪdl/",
        korean_pronunciation: "아이들",
        part_of_speech: "형용사",
        definition_korean: "게으른, 무질서한",
        usage_note: "ἀτάκτως, 질서 없이 행하는"
      },
      {
        word: "keep away",
        ipa_pronunciation: "/kiːp əˈweɪ/",
        korean_pronunciation: "킵 어웨이",
        part_of_speech: "동사구",
        definition_korean: "떨어져 있다, 피하다",
        usage_note: "στέλλομαι, 멀리하다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "데살로니가 교회에는 재림이 임박했다는 핑계로 일하지 않고 게으르게 사는 사람들이 있었습니다(1 Thess 4:11-12, 5:14). 바울은 이들과 거리를 두라고 명령합니다. 이는 교회 권징의 한 형태입니다."
    },
    korean_translation: {
      natural_translation: "형제자매 여러분, 우리는 주 예수 그리스도의 이름으로 명령합니다. 게으르고 무질서하게 살며 우리에게서 받은 가르침대로 살지 않는 모든 신자로부터 떨어져 있으십시오."
    },
    special_explanation: {
      explanation_type: "무질서한 생활(Disorderly Conduct)",
      content: "ἀτάκτως(무질서하게)는 군사 용어에서 유래하여 '대열을 이탈한' 의미입니다. 데살로니가 교회의 문제는 재림 대망을 핑계로 일상의 책임을 저버리는 것이었습니다(1 Thess 4:11-12). 바울은 재림 신앙이 일상 책임 포기의 핑계가 될 수 없다고 강조합니다."
    }
  },
  {
    reference: "2 Thessalonians 3:7",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "모범 상기",
        original_text: "For you yourselves know how you ought to follow our example",
        korean_translation: "여러분 스스로가 우리의 본을 어떻게 따라야 하는지 알고 있습니다",
        grammatical_explanation: "οἴδατε(알다) + πῶς δεῖ μιμεῖσθαι(어떻게 모방해야 하는지)"
      },
      {
        sequence_order: 2,
        semantic_classification: "바울의 모범",
        original_text: "We were not idle when we were with you",
        korean_translation: "우리가 여러분과 함께 있을 때 게으르게 살지 않았습니다",
        grammatical_explanation: "οὐκ ἠτακτήσαμεν ἐν ὑμῖν(여러분 가운데서 무질서하지 않았다), 부정과거"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 데살로니가에 있을 때 스스로 일하며 모범을 보였습니다(행 18:3, 고전 4:12). 그는 복음 사역자로서 교회의 지원을 받을 권리가 있었지만(고전 9:14), 부담 주지 않기 위해 자비량 사역을 했습니다."
    },
    korean_translation: {
      natural_translation: "여러분 스스로가 우리의 본을 어떻게 따라야 하는지 알고 있습니다. 우리가 여러분과 함께 있을 때 게으르게 살지 않았습니다."
    }
  },
  {
    reference: "2 Thessalonians 3:8",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "자급 사역",
        original_text: "nor did we eat anyone's food without paying for it",
        korean_translation: "아무에게서도 공짜로 음식을 얻어먹지 않았습니다",
        grammatical_explanation: "οὐδέ(또한 ~않다) δωρεάν(공짜로) + 부정과거, 자비량 강조"
      },
      {
        sequence_order: 2,
        semantic_classification: "수고와 노력",
        original_text: "On the contrary, we worked night and day, laboring and toiling so that we would not be a burden to any of you",
        korean_translation: "오히려 여러분 중 아무에게도 짐이 되지 않으려고 밤낮으로 수고하며 애쓰며 일했습니다",
        grammatical_explanation: "ἐν κόπῳ καὶ μόχθῳ(수고와 애씀 가운데) + νυκτὸς καὶ ἡμέρας(밤과 낮)"
      }
    ],
    vocabulary: [
      {
        word: "laboring",
        ipa_pronunciation: "/ˈleɪbərɪŋ/",
        korean_pronunciation: "레이버링",
        part_of_speech: "동명사",
        definition_korean: "수고하다, 힘써 일하다",
        usage_note: "κόπος, 피곤한 수고"
      },
      {
        word: "toiling",
        ipa_pronunciation: "/ˈtɔɪlɪŋ/",
        korean_pronunciation: "토일링",
        part_of_speech: "동명사",
        definition_korean: "애쓰다, 고되게 일하다",
        usage_note: "μόχθος, 고통스러운 노동"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 천막 제조업으로 생계를 유지하며(행 18:3), 밤낮으로 일했습니다. 이는 복음 사역자의 권리(고전 9:3-14)를 포기하고, 교회에 부담 주지 않기 위함이었습니다."
    },
    korean_translation: {
      natural_translation: "아무에게서도 공짜로 음식을 얻어먹지 않았고, 오히려 여러분 중 아무에게도 짐이 되지 않으려고 밤낮으로 수고하며 애쓰며 일했습니다."
    },
    special_explanation: {
      explanation_type: "바울의 자비량 사역",
      content: "바울은 복음 전하는 자가 복음으로 살 권리(고전 9:14)가 있음을 알았지만, 데살로니가에서는 자비량 사역을 선택했습니다. 이유: (1) 교회에 부담 주지 않기 위해(ἵνα μὴ ἐπιβαρῆσαί τινα ὑμῶν), (2) 게으른 자들에게 모범 보이기 위해(3:9). κόπος καὶ μόχθος(수고와 애씀)는 육체노동의 고됨을 강조합니다."
    }
  },
  {
    reference: "2 Thessalonians 3:9",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "권리 인정",
        original_text: "We did this, not because we do not have the right to such help",
        korean_translation: "우리가 이렇게 한 것은 우리에게 그럴 권리가 없어서가 아닙니다",
        grammatical_explanation: "οὐχ ὅτι οὐκ ἔχομεν ἐξουσίαν(권리가 없어서가 아니라), 이중 부정으로 권리 강조"
      },
      {
        sequence_order: 2,
        semantic_classification: "모범의 목적",
        original_text: "but in order to offer ourselves as a model for you to imitate",
        korean_translation: "오히려 여러분이 본받도록 우리 자신을 모범으로 제시하기 위함입니다",
        grammatical_explanation: "ἀλλ' ἵνα(오히려 ~하기 위해) + ἑαυτοὺς τύπον δῶμεν(우리 자신을 모범으로 주다)"
      }
    ],
    vocabulary: [
      {
        word: "model",
        ipa_pronunciation: "/ˈmɑːdl/",
        korean_pronunciation: "마들",
        part_of_speech: "명사",
        definition_korean: "모범, 본보기",
        usage_note: "τύπος, 찍어낸 형틀, 모형"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 자비량 사역이 권리 부족 때문이 아니라(고전 9:3-14), 교회에 모범을 제시하기 위함임을 분명히 합니다. 이는 게으른 자들에게 일의 중요성을 가르치기 위함입니다."
    },
    korean_translation: {
      natural_translation: "우리가 이렇게 한 것은 우리에게 그럴 권리가 없어서가 아니라, 오히려 여러분이 본받도록 우리 자신을 모범으로 제시하기 위함입니다."
    },
    special_explanation: {
      explanation_type: "사도적 권리와 자발적 포기",
      content: "바울은 ἐξουσία(권리, authority)가 자신에게 있음을 분명히 하면서도(고전 9:3-14, 갈 6:6, 딤전 5:17-18), 그 권리를 사용하지 않았습니다. 이는 τύπον(모범, pattern)을 제시하기 위함입니다. 참된 리더십은 권리 주장이 아니라 모범 제시입니다(벧전 5:3)."
    }
  },
  {
    reference: "2 Thessalonians 3:10",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "과거 교훈 상기",
        original_text: "For even when we were with you, we gave you this rule",
        korean_translation: "우리가 여러분과 함께 있을 때에도 이런 규칙을 주었습니다",
        grammatical_explanation: "καὶ γὰρ ὅτε(왜냐하면 ~때에도) + 미완료과거 παρηγγέλλομεν(계속 명령했다)"
      },
      {
        sequence_order: 2,
        semantic_classification: "노동 원칙",
        original_text: "The one who is unwilling to work shall not eat",
        korean_translation: "일하기 싫어하는 사람은 먹지도 말라",
        grammatical_explanation: "εἴ τις οὐ θέλει ἐργάζεσθαι(만일 누가 일하기를 원치 않으면) + μηδὲ ἐσθιέτω(먹지도 말라)"
      }
    ],
    vocabulary: [
      {
        word: "unwilling",
        ipa_pronunciation: "/ʌnˈwɪlɪŋ/",
        korean_pronunciation: "언윌링",
        part_of_speech: "형용사",
        definition_korean: "원치 않는, 싫어하는",
        usage_note: "οὐ θέλει, 의지적 거부"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "이 원칙은 창 3:19('땀 흘려 먹을 것을 얻으리라')의 적용입니다. 바울은 일할 '능력'이 없는 자(질병, 장애)가 아니라 일할 '의지'가 없는 자를 다룹니다. 이는 게으름에 대한 강력한 경고입니다."
    },
    korean_translation: {
      natural_translation: "우리가 여러분과 함께 있을 때에도 이런 규칙을 주었습니다. 일하기 싫어하는 사람은 먹지도 말라."
    },
    special_explanation: {
      explanation_type: "일과 먹는 것의 원칙",
      content: "εἴ τις οὐ θέλει ἐργάζεσθαι μηδὲ ἐσθιέτω는 창조 질서의 원칙(창 2:15, 3:19)을 반영합니다. 중요한 것은 '할 수 없다'(οὐ δύναται, 무능력)가 아니라 '원치 않는다'(οὐ θέλει, 의지 거부)입니다. 일할 능력이 없는 자(병자, 노약자)는 교회가 돌봐야 하지만(딤전 5:3-16, 약 1:27), 일할 의지가 없는 자는 먹지 말아야 합니다."
    }
  },
  {
    reference: "2 Thessalonians 3:11",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "문제 상황 보고",
        original_text: "We hear that some among you are idle and disruptive",
        korean_translation: "우리는 여러분 가운데 어떤 사람들이 게으르고 무질서하게 산다는 말을 듣습니다",
        grammatical_explanation: "ἀκούομεν(듣는다) + τινας περιπατοῦντας ἀτάκτως(어떤 이들이 무질서하게 행한다)"
      },
      {
        sequence_order: 2,
        semantic_classification: "역설적 묘사",
        original_text: "They are not busy; they are busybodies",
        korean_translation: "그들은 일하지 않으면서 쓸데없는 일에 바쁩니다",
        grammatical_explanation: "μηδὲν ἐργαζομένους ἀλλὰ περιεργαζομένους(아무것도 일하지 않고 오히려 참견한다), 말장난(wordplay)"
      }
    ],
    vocabulary: [
      {
        word: "busybodies",
        ipa_pronunciation: "/ˈbɪzibɑːdiz/",
        korean_pronunciation: "비지바디스",
        part_of_speech: "명사",
        definition_korean: "참견하는 사람, 쓸데없이 바쁜 사람",
        usage_note: "περιεργάζομαι, 남의 일에 간섭하다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "게으른 자들은 자기 일은 하지 않으면서(not busy), 남의 일에 참견하고 소문 퍼뜨리는 데 시간을 낭비합니다(busybodies). 이는 딤전 5:13의 '집집마다 돌아다니며 헛된 말을 하는' 과부들과 유사한 문제입니다."
    },
    korean_translation: {
      natural_translation: "우리는 여러분 가운데 어떤 사람들이 게으르고 무질서하게 산다는 말을 듣습니다. 그들은 일하지 않으면서 쓸데없는 일에 바쁩니다."
    },
    special_explanation: {
      explanation_type: "말장난: 일하지 않고 참견하다",
      content: "μηδὲν ἐργαζομένους(아무것도 일하지 않고) ἀλλὰ περιεργαζομένους(오히려 참견하고)는 그리스어 말장난입니다. ἐργάζομαι(일하다)와 περιεργάζομαι(쓸데없이 참견하다)의 대조입니다. 게으른 자들은 생산적 노동은 거부하면서, 남의 일에 간섭하고 쓸데없는 일에 시간을 낭비합니다(딤전 5:13)."
    }
  },
  {
    reference: "2 Thessalonians 3:12",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "권위 있는 권면",
        original_text: "Such people we command and urge in the Lord Jesus Christ",
        korean_translation: "그런 사람들에게 우리는 주 예수 그리스도 안에서 명령하고 권면합니다",
        grammatical_explanation: "παραγγέλλομεν(명령한다) καὶ παρακαλοῦμεν(권면한다) ἐν κυρίῳ Ἰησοῦ Χριστῷ(주 안에서)"
      },
      {
        sequence_order: 2,
        semantic_classification: "구체적 명령",
        original_text: "to settle down and earn the food they eat",
        korean_translation: "조용히 일하여 자기 양식을 먹으라고",
        grammatical_explanation: "μετὰ ἡσυχίας ἐργαζόμενοι(조용함과 함께 일하면서) + τὸν ἑαυτῶν ἄρτον ἐσθίωσιν(자기 빵을 먹다)"
      }
    ],
    vocabulary: [
      {
        word: "settle down",
        ipa_pronunciation: "/ˈsetl daʊn/",
        korean_pronunciation: "세틀 다운",
        part_of_speech: "동사구",
        definition_korean: "조용히 지내다, 안정되다",
        usage_note: "ἡσυχία, 평온함, 조용함"
      },
      {
        word: "earn",
        ipa_pronunciation: "/ɜːrn/",
        korean_pronunciation: "언",
        part_of_speech: "동사",
        definition_korean: "벌다, 얻다",
        usage_note: "ἐργάζομαι, 일하다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 게으른 자들에게 두 가지를 명령합니다: (1) 조용히 지내라(stop being busybodies), (2) 일하여 자기 양식을 벌어라(be self-sufficient). 이는 1 Thess 4:11의 반복입니다."
    },
    korean_translation: {
      natural_translation: "그런 사람들에게 우리는 주 예수 그리스도 안에서 명령하고 권면합니다. 조용히 일하여 자기 양식을 먹으라고."
    },
    special_explanation: {
      explanation_type: "조용히 일하라(Work Quietly)",
      content: "μετὰ ἡσυχίας ἐργαζόμενοι(조용함과 함께 일하면서)는 1 Thess 4:11('조용히 지내며 자기 일에 힘쓰라')의 반복입니다. '조용함'(ἡσυχία)은 (1) 남의 일에 참견하지 않고, (2) 소란 피우지 않으며, (3) 성실히 자기 일에 집중하는 태도입니다. 이는 초대 교회가 외부 사회로부터 존경받는 길이었습니다(살전 4:12, 딤전 2:2)."
    }
  },
  {
    reference: "2 Thessalonians 3:13",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "지속적 권면",
        original_text: "And as for you, brothers and sisters, never tire of doing what is good",
        korean_translation: "그러나 형제자매 여러분, 선을 행하는 데 지치지 마십시오",
        grammatical_explanation: "μὴ ἐγκακήσητε(지치지 말라) καλοποιοῦντες(선을 행하면서), 금지 명령"
      }
    ],
    vocabulary: [
      {
        word: "tire",
        ipa_pronunciation: "/ˈtaɪər/",
        korean_pronunciation: "타이어",
        part_of_speech: "동사",
        definition_korean: "지치다, 싫증내다",
        usage_note: "ἐγκακέω, 낙담하다, 포기하다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "일부 게으른 자들의 문제 때문에, 성실하게 일하는 성도들이 낙담할 수 있습니다. 바울은 그들에게 선을 행하는 데 지치지 말라고 격려합니다(갈 6:9)."
    },
    korean_translation: {
      natural_translation: "그러나 형제자매 여러분, 선을 행하는 데 지치지 마십시오."
    },
    special_explanation: {
      explanation_type: "선행에 지치지 말라",
      content: "μὴ ἐγκακήσητε καλοποιοῦντες는 갈 6:9('선을 행하되 낙심하지 말라')와 동일한 권면입니다. 게으른 자들을 돌보고 권면하는 것이 부담스러울 수 있지만, 성실한 성도들은 계속 선을 행해야 합니다. 때가 되면 거둘 것입니다(갈 6:9)."
    }
  },
  {
    reference: "2 Thessalonians 3:14",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "불순종 대처",
        original_text: "Take special note of anyone who does not obey our instruction in this letter",
        korean_translation: "만일 누가 이 편지에 있는 우리의 지시에 순종하지 않으면, 그 사람을 주목하십시오",
        grammatical_explanation: "εἰ δέ τις(만일 누가) οὐχ ὑπακούει(순종하지 않으면) + σημειοῦσθε(표시하라, 주목하라)"
      },
      {
        sequence_order: 2,
        semantic_classification: "교제 중단",
        original_text: "Do not associate with them, in order that they may feel ashamed",
        korean_translation: "그와 어울리지 말아서 그가 부끄러워하게 하십시오",
        grammatical_explanation: "μὴ συναναμίγνυσθαι αὐτῷ(그와 섞이지 말라) + ἵνα ἐντραπῇ(부끄럽게 하기 위해)"
      }
    ],
    vocabulary: [
      {
        word: "associate",
        ipa_pronunciation: "/əˈsoʊsieɪt/",
        korean_pronunciation: "어소시에이트",
        part_of_speech: "동사",
        definition_korean: "어울리다, 교제하다",
        usage_note: "συναναμίγνυμι, 함께 섞이다"
      },
      {
        word: "ashamed",
        ipa_pronunciation: "/əˈʃeɪmd/",
        korean_pronunciation: "어쉐임드",
        part_of_speech: "형용사",
        definition_korean: "부끄러워하다",
        usage_note: "ἐντρέπω, 수치심을 느끼다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 교회 권징의 한 형태를 제시합니다: 불순종하는 자와 교제를 중단하되, 그 목적은 멸망시키기 위함이 아니라 부끄러워하여 회개하게 하기 위함입니다(고전 5:5, 딤전 1:20)."
    },
    korean_translation: {
      natural_translation: "만일 누가 이 편지에 있는 우리의 지시에 순종하지 않으면, 그 사람을 주목하여 그와 어울리지 말고 그가 부끄러워하게 하십시오."
    },
    special_explanation: {
      explanation_type: "교회 권징의 목적",
      content: "μὴ συναναμίγνυσθαι(섞이지 말라)는 고전 5:9-11의 원리와 유사하지만, 더 가벼운 형태입니다. 목적은 ἵνα ἐντραπῇ(부끄럽게 하기 위해)로, 회개와 회복입니다(고후 7:8-11). 이는 출교(고전 5:5)보다 경미한 권징으로, 사회적 압박을 통한 교정입니다."
    }
  },
  {
    reference: "2 Thessalonians 3:15",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "관계 유지 지침",
        original_text: "Yet do not regard them as an enemy, but warn them as you would a fellow believer",
        korean_translation: "그러나 그를 원수로 여기지 말고 형제로 권면하십시오",
        grammatical_explanation: "μὴ... ἡγεῖσθε(여기지 말라) ὡς ἐχθρόν(원수처럼) ἀλλὰ νουθετεῖτε(오히려 권면하라) ὡς ἀδελφόν(형제처럼)"
      }
    ],
    vocabulary: [
      {
        word: "enemy",
        ipa_pronunciation: "/ˈenəmi/",
        korean_pronunciation: "에너미",
        part_of_speech: "명사",
        definition_korean: "원수, 적",
        usage_note: "ἐχθρός, 대적자"
      },
      {
        word: "warn",
        ipa_pronunciation: "/wɔːrn/",
        korean_pronunciation: "워른",
        part_of_speech: "동사",
        definition_korean: "권면하다, 충고하다",
        usage_note: "νουθετέω, 마음에 두게 하다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "교회 권징의 정신은 사랑입니다. 불순종하는 자를 교제에서 제외하되, 그를 원수로 여기지 않고 여전히 형제로 대하며 회개하도록 권면해야 합니다. 이는 마 18:15-17의 원리입니다."
    },
    korean_translation: {
      natural_translation: "그러나 그를 원수로 여기지 말고 형제로 권면하십시오."
    },
    special_explanation: {
      explanation_type: "권징 중에도 형제",
      content: "μὴ... ἡγεῖσθε ὡς ἐχθρόν(원수로 여기지 말라)은 교회 권징의 정신을 보여줍니다. 불순종하는 자도 여전히 ἀδελφός(형제)이며, νουθετεῖτε(권면하라)는 회개와 회복이 목표입니다. 이는 마 18:15('형제를 얻으라'), 갈 6:1('온유한 심령으로 바로잡으라')과 일치합니다."
    }
  },
  {
    reference: "2 Thessalonians 3:16",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "평강 기도",
        original_text: "Now may the Lord of peace himself give you peace at all times and in every way",
        korean_translation: "이제 평강의 주님께서 친히 항상 모든 방법으로 여러분에게 평강을 주시기를 원합니다",
        grammatical_explanation: "기원법 αὐτὸς δὲ ὁ κύριος τῆς εἰρήνης δῴη ὑμῖν τὴν εἰρήνην(평강의 주께서 여러분에게 평강을 주시기를)"
      },
      {
        sequence_order: 2,
        semantic_classification: "임재 기도",
        original_text: "The Lord be with all of you",
        korean_translation: "주님께서 여러분 모두와 함께 계시기를 원합니다",
        grammatical_explanation: "기원법 ὁ κύριος μετὰ πάντων ὑμῶν(주께서 여러분 모두와 함께)"
      }
    ],
    vocabulary: [
      {
        word: "peace",
        ipa_pronunciation: "/piːs/",
        korean_pronunciation: "피스",
        part_of_speech: "명사",
        definition_korean: "평강, 평화",
        usage_note: "εἰρήνη, 샬롬의 번역"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 교회 권징과 갈등 상황 속에서도 '평강의 주님'께서 교회에 평강을 주시기를 기도합니다. 참된 평강은 주님의 임재에서 옵니다."
    },
    korean_translation: {
      natural_translation: "이제 평강의 주님께서 친히 항상 모든 방법으로 여러분에게 평강을 주시기를 원합니다. 주님께서 여러분 모두와 함께 계시기를 원합니다."
    },
    special_explanation: {
      explanation_type: "평강의 주(The Lord of Peace)",
      content: "ὁ κύριος τῆς εἰρήνης(평강의 주)는 신약에서 이 구절에만 나오는 표현입니다(히브리서의 '평강의 하나님' 제외). 교회의 갈등과 권징 상황에서, 바울은 주님께서 친히(αὐτὸς) 평강을 주시기를 기도합니다. 평강은 διὰ παντὸς ἐν παντὶ τρόπῳ(항상 모든 방법으로) 필요합니다."
    }
  },
  {
    reference: "2 Thessalonians 3:17",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "진위 확인",
        original_text: "I, Paul, write this greeting in my own hand, which is the distinguishing mark in all my letters. This is how I write",
        korean_translation: "나 바울이 친필로 인사를 씁니다. 이것이 내 모든 편지의 표시입니다. 내가 이렇게 씁니다",
        grammatical_explanation: "Ἀσπασμὸς τῇ ἐμῇ χειρὶ Παύλου(바울이 자기 손으로 인사함), 진품 증명"
      }
    ],
    vocabulary: [
      {
        word: "distinguishing mark",
        ipa_pronunciation: "/dɪˈstɪŋɡwɪʃɪŋ mɑːrk/",
        korean_pronunciation: "디스팅귀싱 마크",
        part_of_speech: "명사구",
        definition_korean: "구별 표시, 특징",
        usage_note: "σημεῖον, 진위 증명 기호"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울의 편지가 위조되는 문제(2:2)가 있었기 때문에, 바울은 자기 손으로 마지막 인사를 써서 진품임을 증명합니다(고전 16:21, 갈 6:11, 골 4:18). 이는 고대 서신의 관행이었습니다(대부분은 서기가 쓰고 마지막만 저자가 직접 씀)."
    },
    korean_translation: {
      natural_translation: "나 바울이 친필로 인사를 씁니다. 이것이 내 모든 편지의 표시입니다. 내가 이렇게 씁니다."
    },
    special_explanation: {
      explanation_type: "바울의 친필 서명",
      content: "τῇ ἐμῇ χειρὶ Παύλου(바울의 손으로)는 편지 진위를 증명하는 방법입니다. 위조 편지 문제(2:2) 때문에, 바울은 모든 편지에 자기 손으로 마지막 인사를 썼습니다(고전 16:21, 갈 6:11, 골 4:18, 몬 1:19). 고대에는 서기가 구술을 받아 적고(롬 16:22), 저자가 마지막 몇 줄을 직접 써서 진품임을 증명했습니다."
    }
  },
  {
    reference: "2 Thessalonians 3:18",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "은혜 축복",
        original_text: "The grace of our Lord Jesus Christ be with you all",
        korean_translation: "우리 주 예수 그리스도의 은혜가 여러분 모두와 함께 있기를 원합니다",
        grammatical_explanation: "기원법 ἡ χάρις τοῦ κυρίου ἡμῶν Ἰησοῦ Χριστοῦ μετὰ πάντων ὑμῶν(주 예수 그리스도의 은혜가 여러분 모두와 함께)"
      }
    ],
    vocabulary: [
      {
        word: "grace",
        ipa_pronunciation: "/ɡreɪs/",
        korean_pronunciation: "그레이스",
        part_of_speech: "명사",
        definition_korean: "은혜",
        usage_note: "χάρις, 하나님의 호의와 능력"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울의 모든 서신은 은혜로 시작하여 은혜로 끝납니다. 이는 기독교 신앙의 본질이 은혜임을 보여줍니다. 교회의 모든 문제(거짓 가르침, 게으름, 갈등)의 해결은 그리스도의 은혜에 달려 있습니다."
    },
    korean_translation: {
      natural_translation: "우리 주 예수 그리스도의 은혜가 여러분 모두와 함께 있기를 원합니다."
    },
    special_explanation: {
      explanation_type: "은혜의 포괄성",
      content: "ἡ χάρις... μετὰ πάντων ὑμῶν(은혜가 여러분 모두와 함께)는 바울 서신의 전형적 마무리입니다. '모두'(πάντων)는 순종하는 자와 불순종하는 자, 부지런한 자와 게으른 자 모두를 포함합니다. 은혜는 모든 문제의 해결책이며, 모든 신자의 필요입니다."
    }
  }
]

async function main() {
  console.log('=== 2 Thessalonians 3:1-18 배치 저장 시작 ===\n')

  for (const analysis of analyses) {
    await saveAnalysisToDb(analysis)
  }

  console.log('\n=== 완료 ===')
}

main().catch(console.error)
