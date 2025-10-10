import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

const analyses: AnalysisData[] = [
  {
    reference: "2 Peter 1:1",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "저자 소개",
        original_text: "Simon Peter, a servant and apostle of Jesus Christ",
        korean_translation: "예수 그리스도의 종이자 사도인 시몬 베드로",
        grammatical_explanation: "Συμεὼν Πέτρος δοῦλος καὶ ἀπόστολος(종이자 사도), 이중 신분"
      },
      {
        sequence_order: 2,
        semantic_classification: "수신자 묘사",
        original_text: "To those who through the righteousness of our God and Savior Jesus Christ have received a faith as precious as ours",
        korean_translation: "우리 하나님이시며 구주이신 예수 그리스도의 의로우심으로 우리와 동등하게 귀한 믿음을 받은 자들에게",
        grammatical_explanation: "τοῖς... λαχοῦσιν(받은 자들에게) + ἰσότιμον πίστιν(동등한 가치의 믿음)"
      }
    ],
    vocabulary: [
      {
        word: "precious",
        ipa_pronunciation: "/ˈpreʃəs/",
        korean_pronunciation: "프레셔스",
        part_of_speech: "형용사",
        definition_korean: "귀한, 값진",
        usage_note: "ἰσότιμος, 동등한 가치의"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "베드로는 '종'(δοῦλος)과 '사도'(ἀπόστολος)라는 이중 정체성으로 자신을 소개합니다. 수신자들의 믿음이 '우리와 동등하게 귀하다'는 표현은 베드로(유대인 사도)와 수신자들(이방인 신자들)의 믿음이 본질적으로 같음을 강조합니다."
    },
    korean_translation: {
      natural_translation: "예수 그리스도의 종이자 사도인 시몬 베드로가, 우리 하나님이시며 구주이신 예수 그리스도의 의로우심으로 우리와 동등하게 귀한 믿음을 받은 자들에게 편지합니다."
    },
    special_explanation: {
      explanation_type: "예수 그리스도의 신성",
      content: "τοῦ θεοῦ ἡμῶν καὶ σωτῆρος Ἰησοῦ Χριστοῦ(우리 하나님이시며 구주이신 예수 그리스도)는 그랜빌 샤프 규칙이 적용되는 구절입니다. 하나의 관사(τοῦ)로 '하나님'과 '구주'가 연결되어, 예수 그리스도께서 하나님이시자 구주이심을 선언합니다(딛 2:13과 동일)."
    }
  },
  {
    reference: "2 Peter 1:2",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "축복 기원",
        original_text: "Grace and peace be yours in abundance through the knowledge of God and of Jesus our Lord",
        korean_translation: "하나님과 우리 주 예수를 아는 지식으로 은혜와 평강이 여러분에게 더욱 많아지기를 원합니다",
        grammatical_explanation: "χάρις ὑμῖν καὶ εἰρήνη πληθυνθείη(은혜와 평강이 더하기를) + ἐν ἐπιγνώσει(지식 안에서)"
      }
    ],
    vocabulary: [
      {
        word: "abundance",
        ipa_pronunciation: "/əˈbʌndəns/",
        korean_pronunciation: "어번던스",
        part_of_speech: "명사",
        definition_korean: "풍성함, 넘침",
        usage_note: "πληθύνω, 증가시키다, 더하다"
      },
      {
        word: "knowledge",
        ipa_pronunciation: "/ˈnɑːlɪdʒ/",
        korean_pronunciation: "날리지",
        part_of_speech: "명사",
        definition_korean: "지식, 앎",
        usage_note: "ἐπίγνωσις, 깊은 인식, 완전한 지식"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "베드로는 은혜와 평강이 '하나님과 예수를 아는 지식'을 통해 증가한다고 말합니다. ἐπίγνωσις(지식)는 단순 정보가 아니라 인격적 관계를 통한 깊은 앎입니다. 2 Peter에서 '지식'은 핵심 주제입니다(1:2, 3, 8; 2:20; 3:18)."
    },
    korean_translation: {
      natural_translation: "하나님과 우리 주 예수를 아는 지식으로 은혜와 평강이 여러분에게 더욱 많아지기를 원합니다."
    }
  },
  {
    reference: "2 Peter 1:3",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "신적 능력의 공급",
        original_text: "His divine power has given us everything we need for a godly life through our knowledge of him who called us by his own glory and goodness",
        korean_translation: "그분의 신적 능력이 우리를 자기 영광과 덕으로 부르신 분을 아는 지식으로 경건한 삶에 필요한 모든 것을 우리에게 주셨습니다",
        grammatical_explanation: "ἡ θεία δύναμις(신적 능력) + δεδωρημένης(완료 수동태, 주어진) + πάντα τὰ πρὸς ζωήν(생명에 필요한 모든 것)"
      }
    ],
    vocabulary: [
      {
        word: "divine",
        ipa_pronunciation: "/dɪˈvaɪn/",
        korean_pronunciation: "디바인",
        part_of_speech: "형용사",
        definition_korean: "신적인, 하나님의",
        usage_note: "θεῖος, 하나님께 속한"
      },
      {
        word: "godly",
        ipa_pronunciation: "/ˈɡɑːdli/",
        korean_pronunciation: "갓리",
        part_of_speech: "형용사",
        definition_korean: "경건한, 하나님을 닮은",
        usage_note: "εὐσέβεια, 하나님을 경외함"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "베드로는 하나님의 '신적 능력'이 이미(완료형) 우리에게 경건한 삶에 필요한 '모든 것'을 주셨다고 선언합니다. 이는 성화의 충족성 교리입니다. 우리는 더 이상 부족함이 없으며, 하나님을 아는 지식을 통해 그 능력에 접근합니다."
    },
    korean_translation: {
      natural_translation: "그분의 신적 능력이 우리를 자기 영광과 덕으로 부르신 분을 아는 지식으로 경건한 삶에 필요한 모든 것을 우리에게 주셨습니다."
    },
    special_explanation: {
      explanation_type: "신적 능력의 충족성",
      content: "τὰ πάντα... δεδωρημένης(모든 것을 주셨다, 완료형)는 하나님께서 이미 우리에게 필요한 모든 것을 공급하셨음을 강조합니다. 이는 Sola Scriptura(성경 충족성)와 유사한 원리로, 경건한 삶을 위해 추가적인 계시나 인간의 방법이 필요하지 않습니다. τῆς θείας δυνάμεως(신적 능력)는 성령의 내주하는 능력입니다."
    }
  },
  {
    reference: "2 Peter 1:4",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "약속의 수여",
        original_text: "Through these he has given us his very great and precious promises",
        korean_translation: "이것들을 통해 그분은 우리에게 매우 크고 귀한 약속들을 주셨습니다",
        grammatical_explanation: "δι' ὧν(이것들을 통해) + τὰ τίμια καὶ μέγιστα... ἐπαγγέλματα δεδώρηται(귀하고 매우 큰 약속들을 주셨다)"
      },
      {
        sequence_order: 2,
        semantic_classification: "약속의 목적",
        original_text: "so that through them you may participate in the divine nature, having escaped the corruption in the world caused by evil desires",
        korean_translation: "그리하여 여러분이 이것들을 통해 악한 욕망으로 인한 세상의 썩어짐을 피하고 신적 본성에 참여하게 되도록",
        grammatical_explanation: "ἵνα... γένησθε θείας κοινωνοὶ φύσεως(신적 본성의 참여자가 되도록) + ἀποφυγόντες τὴν... φθοράν(썩어짐을 피하여)"
      }
    ],
    vocabulary: [
      {
        word: "participate",
        ipa_pronunciation: "/pɑːrˈtɪsɪpeɪt/",
        korean_pronunciation: "파티시페이트",
        part_of_speech: "동사",
        definition_korean: "참여하다, 나누다",
        usage_note: "κοινωνός, 공유하는 자, 동참자"
      },
      {
        word: "corruption",
        ipa_pronunciation: "/kəˈrʌpʃn/",
        korean_pronunciation: "커럽션",
        part_of_speech: "명사",
        definition_korean: "썩어짐, 부패",
        usage_note: "φθορά, 도덕적/육체적 붕괴"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "하나님의 약속의 목적은 성도들이 '신적 본성에 참여'(θείας κοινωνοὶ φύσεως)하는 것입니다. 이는 하나님이 되는 것이 아니라, 하나님의 거룩한 성품을 닮아가는 것입니다(성화). 동시에 세상의 썩어짐(죄의 지배)에서 벗어나는 것입니다."
    },
    korean_translation: {
      natural_translation: "이것들을 통해 그분은 우리에게 매우 크고 귀한 약속들을 주셨습니다. 그리하여 여러분이 이것들을 통해 악한 욕망으로 인한 세상의 썩어짐을 피하고 신적 본성에 참여하게 되도록 하셨습니다."
    },
    special_explanation: {
      explanation_type: "신적 본성에 참여(Partakers of the Divine Nature)",
      content: "θείας κοινωνοὶ φύσεως(신적 본성의 참여자)는 2 Peter의 가장 논쟁적 표현입니다. 이는 '신격화'(deification)가 아니라 성화(sanctification)를 의미합니다. 성도들은 (1) 하나님의 도덕적 성품(거룩, 사랑, 진실)을 닮아가고(롬 8:29, 고후 3:18), (2) 썩어짐(φθορά, 죄와 죽음)에서 벗어납니다(롬 8:21). 동방 정교회는 이를 'θέωσις'(theosis, 신화)로 해석하지만, 개신교는 성화로 이해합니다."
    }
  },
  {
    reference: "2 Peter 1:5",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "성장의 명령",
        original_text: "For this very reason, make every effort to add to your faith goodness",
        korean_translation: "바로 이런 이유로, 여러분의 믿음에 덕을 더하도록 모든 노력을 다하십시오",
        grammatical_explanation: "σπουδὴν πᾶσαν παρεισενέγκαντες(모든 열심을 가져와서) + ἐπιχορηγήσατε(더하라, 공급하라)"
      }
    ],
    vocabulary: [
      {
        word: "effort",
        ipa_pronunciation: "/ˈefərt/",
        korean_pronunciation: "에퍼트",
        part_of_speech: "명사",
        definition_korean: "노력, 열심",
        usage_note: "σπουδή, 부지런함, 진지함"
      },
      {
        word: "add",
        ipa_pronunciation: "/æd/",
        korean_pronunciation: "애드",
        part_of_speech: "동사",
        definition_korean: "더하다, 공급하다",
        usage_note: "ἐπιχορηγέω, 풍성하게 공급하다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "베드로는 하나님의 은혜(1:3-4)와 인간의 노력(1:5-7)을 결합합니다. 하나님이 '모든 것을 주셨기 때문에'(1:3), 우리는 '모든 노력을 다해야'(1:5) 합니다. 이는 은혜와 책임의 균형입니다."
    },
    korean_translation: {
      natural_translation: "바로 이런 이유로, 여러분의 믿음에 덕을 더하도록 모든 노력을 다하십시오."
    },
    special_explanation: {
      explanation_type: "미덕의 사슬(Chain of Virtues)",
      content: "1:5-7은 8개 미덕의 '사슬'(chain)입니다: 믿음 → 덕 → 지식 → 절제 → 인내 → 경건 → 형제애 → 사랑. ἐπιχορηγέω(더하다)는 '합창대에 재정 지원하다'는 뜻에서 유래하여, '풍성하게 공급하다'는 의미입니다. 각 미덕은 이전 미덕의 토대 위에 세워집니다."
    }
  },
  {
    reference: "2 Peter 1:6",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "미덕 연쇄",
        original_text: "and to goodness, knowledge; and to knowledge, self-control; and to self-control, perseverance; and to perseverance, godliness",
        korean_translation: "그리고 덕에 지식을, 지식에 절제를, 절제에 인내를, 인내에 경건을",
        grammatical_explanation: "연속된 여격 구조로 각 미덕이 다음 미덕의 토대"
      }
    ],
    vocabulary: [
      {
        word: "self-control",
        ipa_pronunciation: "/self kənˈtroʊl/",
        korean_pronunciation: "셀프 컨트롤",
        part_of_speech: "명사",
        definition_korean: "절제, 자제력",
        usage_note: "ἐγκράτεια, 자기 통제"
      },
      {
        word: "perseverance",
        ipa_pronunciation: "/ˌpɜːrsəˈvɪrəns/",
        korean_pronunciation: "퍼서비어런스",
        part_of_speech: "명사",
        definition_korean: "인내, 참고 견딤",
        usage_note: "ὑπομονή, 꾸준한 견딤"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "미덕 사슬의 중간 단계들입니다: (1) γνῶσις(지식) - 하나님과 도덕적 진리에 대한 앎, (2) ἐγκράτεια(절제) - 욕망과 감정의 통제, (3) ὑπομονή(인내) - 시련 속 견딤, (4) εὐσέβεια(경건) - 하나님을 경외하는 삶."
    },
    korean_translation: {
      natural_translation: "그리고 덕에 지식을, 지식에 절제를, 절제에 인내를, 인내에 경건을 더하십시오."
    }
  },
  {
    reference: "2 Peter 1:7",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "미덕의 완성",
        original_text: "and to godliness, mutual affection; and to mutual affection, love",
        korean_translation: "그리고 경건에 형제 사랑을, 형제 사랑에 사랑을",
        grammatical_explanation: "사슬의 최종 단계: 경건 → 형제애 → 아가페 사랑"
      }
    ],
    vocabulary: [
      {
        word: "mutual affection",
        ipa_pronunciation: "/ˈmjuːtʃuəl əˈfekʃn/",
        korean_pronunciation: "뮤추얼 어펙션",
        part_of_speech: "명사구",
        definition_korean: "형제 사랑",
        usage_note: "φιλαδελφία, 형제간 애정"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "미덕 사슬의 정점은 '사랑'(ἀγάπη)입니다. φιλαδελφία(형제 사랑)에서 ἀγάπη(무조건적 사랑)로 확장됩니다. 이는 고전 13장과 유사하게, 사랑이 모든 미덕의 완성임을 보여줍니다(골 3:14)."
    },
    korean_translation: {
      natural_translation: "그리고 경건에 형제 사랑을, 형제 사랑에 사랑을 더하십시오."
    },
    special_explanation: {
      explanation_type: "형제애에서 아가페로",
      content: "베드로는 φιλαδελφία(형제 사랑, brotherly affection)와 ἀγάπη(무조건적 사랑, divine love)를 구분합니다. φιλαδελφία는 같은 신앙 공동체 내의 사랑이지만, ἀγάπη는 원수까지 포함하는 하나님의 사랑입니다(마 5:44-48). 사랑은 8개 미덕의 정점이자 완성입니다(골 3:14)."
    }
  },
  {
    reference: "2 Peter 1:8",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "미덕의 결과",
        original_text: "For if you possess these qualities in increasing measure, they will keep you from being ineffective and unproductive in your knowledge of our Lord Jesus Christ",
        korean_translation: "이런 것들이 여러분에게 있고 더욱 풍성하면, 우리 주 예수 그리스도를 아는 지식에 있어서 쓸모없거나 열매 없는 자가 되지 않게 할 것입니다",
        grammatical_explanation: "ὑπάρχοντα... πλεονάζοντα(있고 풍성하면) → οὐκ ἀργοὺς οὐδὲ ἀκάρπους(쓸모없지도 열매없지도 않게)"
      }
    ],
    vocabulary: [
      {
        word: "ineffective",
        ipa_pronunciation: "/ˌɪnɪˈfektɪv/",
        korean_pronunciation: "이니펙티브",
        part_of_speech: "형용사",
        definition_korean: "쓸모없는, 게으른",
        usage_note: "ἀργός, 일하지 않는"
      },
      {
        word: "unproductive",
        ipa_pronunciation: "/ˌʌnprəˈdʌktɪv/",
        korean_pronunciation: "언프러덕티브",
        part_of_speech: "형용사",
        definition_korean: "열매 없는, 불모의",
        usage_note: "ἄκαρπος, 열매 맺지 못하는"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "미덕들이 '있고 풍성할 때'(ὑπάρχοντα καὶ πλεονάζοντα) 두 가지 부정적 상태를 피합니다: (1) ἀργός(게으름, ineffective), (2) ἄκαρπος(열매없음, unproductive). 참된 지식은 반드시 열매로 이어집니다(야 2:14-26)."
    },
    korean_translation: {
      natural_translation: "이런 것들이 여러분에게 있고 더욱 풍성하면, 우리 주 예수 그리스도를 아는 지식에 있어서 쓸모없거나 열매 없는 자가 되지 않게 할 것입니다."
    }
  },
  {
    reference: "2 Peter 1:9",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "경고",
        original_text: "But whoever does not have them is nearsighted and blind, forgetting that they have been cleansed from their past sins",
        korean_translation: "그러나 이런 것들이 없는 사람은 눈이 어두워 장님이 되어, 자기 옛 죄에서 깨끗함을 받은 것을 잊어버렸습니다",
        grammatical_explanation: "ᾧ γὰρ μὴ πάρεστιν ταῦτα(이것들이 없는 자) → τυφλός ἐστιν(장님이다) + λήθην λαβὼν τοῦ καθαρισμοῦ(깨끗함의 망각)"
      }
    ],
    vocabulary: [
      {
        word: "nearsighted",
        ipa_pronunciation: "/ˈnɪrsaɪtɪd/",
        korean_pronunciation: "니어사이티드",
        part_of_speech: "형용사",
        definition_korean: "근시의, 멀리 보지 못하는",
        usage_note: "μυωπάζω, 눈을 가늘게 뜨다, 시력 약함"
      },
      {
        word: "cleansed",
        ipa_pronunciation: "/klenzd/",
        korean_pronunciation: "클렌즈드",
        part_of_speech: "동사",
        definition_korean: "깨끗하게 되다",
        usage_note: "καθαρισμός, 정결케 함"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "미덕이 없는 사람은 영적으로 '근시'(μυωπάζων)이자 '장님'(τυφλός)입니다. 그는 자신이 과거 죄에서 깨끗함을 받은 것(구원)을 '잊어버렸습니다'(λήθην λαβών). 이는 구원의 확신 상실과 배교의 위험을 경고합니다."
    },
    korean_translation: {
      natural_translation: "그러나 이런 것들이 없는 사람은 눈이 어두워 장님이 되어, 자기 옛 죄에서 깨끗함을 받은 것을 잊어버렸습니다."
    },
    special_explanation: {
      explanation_type: "영적 근시와 기억상실",
      content: "μυωπάζων(근시)과 τυφλός(장님)의 조합은 역설적입니다. 미덕이 없는 자는 (1) 근시적으로 현재의 쾌락만 보고(근시), (2) 영원한 미래는 보지 못하며(장님), (3) 과거의 구원도 잊습니다(기억상실). τοῦ καθαρισμοῦ τῶν πάλαι αὐτοῦ ἁμαρτιῶν(옛 죄의 깨끗함)은 세례와 회심 때의 죄 용서를 가리킵니다."
    }
  },
  {
    reference: "2 Peter 1:10",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "권면",
        original_text: "Therefore, my brothers and sisters, make every effort to confirm your calling and election",
        korean_translation: "그러므로 형제자매 여러분, 여러분의 부르심과 택하심을 확실하게 하기 위해 더욱 힘쓰십시오",
        grammatical_explanation: "σπουδάσατε(힘쓰라) + βεβαίαν... ποιεῖσθαι(확실하게 만들다) + τὴν κλῆσιν καὶ ἐκλογήν(부르심과 택하심)"
      },
      {
        sequence_order: 2,
        semantic_classification: "약속",
        original_text: "For if you do these things, you will never stumble, and you will receive a rich welcome into the eternal kingdom of our Lord and Savior Jesus Christ",
        korean_translation: "이런 것들을 행하면 결코 넘어지지 않을 것이며, 우리 주이시며 구주이신 예수 그리스도의 영원한 나라에 풍성하게 들어가게 될 것입니다",
        grammatical_explanation: "ταῦτα ποιοῦντες(이것들을 행하면) → οὐ μὴ πταίσητέ ποτε(결코 넘어지지 않을 것) + πλουσίως... εἴσοδος(풍성한 입장)"
      }
    ],
    vocabulary: [
      {
        word: "confirm",
        ipa_pronunciation: "/kənˈfɜːrm/",
        korean_pronunciation: "컨펌",
        part_of_speech: "동사",
        definition_korean: "확실하게 하다, 확증하다",
        usage_note: "βέβαιος, 안정된, 확고한"
      },
      {
        word: "stumble",
        ipa_pronunciation: "/ˈstʌmbl/",
        korean_pronunciation: "스텀블",
        part_of_speech: "동사",
        definition_korean: "넘어지다, 실족하다",
        usage_note: "πταίω, 실수하다, 타락하다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "베드로는 '부르심과 택하심을 확실하게 하라'고 권면합니다. 이는 선택 교리의 주관적 확신(구원의 확신)을 의미합니다. 미덕의 성장(1:5-7)은 구원의 증거이며, 이를 통해 우리는 확신을 얻습니다. 약속은 (1) 결코 넘어지지 않음, (2) 하나님 나라에 풍성한 입장입니다."
    },
    korean_translation: {
      natural_translation: "그러므로 형제자매 여러분, 여러분의 부르심과 택하심을 확실하게 하기 위해 더욱 힘쓰십시오. 이런 것들을 행하면 결코 넘어지지 않을 것이며, 우리 주이시며 구주이신 예수 그리스도의 영원한 나라에 풍성하게 들어가게 될 것입니다."
    },
    special_explanation: {
      explanation_type: "부르심과 택하심의 확증",
      content: "βεβαίαν ὑμῶν τὴν κλῆσιν καὶ ἐκλογὴν ποιεῖσθαι(부르심과 택하심을 확실하게 만들다)는 구원의 확신 교리입니다. 이는 선택을 '만드는' 것이 아니라 '확증하는' 것입니다. 미덕의 성장(1:5-9)은 선택의 '증거'이며, 이를 통해 주관적 확신을 얻습니다. πλουσίως ἐπιχορηγηθήσεται ὑμῖν ἡ εἴσοδος(풍성하게 입장이 공급될 것)는 심판대가 아니라 환영식 이미지입니다."
    }
  }
]

async function main() {
  console.log('=== 2 Peter 1:1-10 배치 저장 시작 ===\n')

  for (const analysis of analyses) {
    await saveAnalysisToDb(analysis)
  }

  console.log('\n=== 2 Peter 1:1-10 완료, 11-21 계속... ===')
}

main().catch(console.error)
