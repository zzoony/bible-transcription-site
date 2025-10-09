import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

const analyses: AnalysisData[] = [
  {
    reference: "2 Timothy 3:1",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "경고: 말세의 위험",
        original_text: "But mark this: There will be terrible times in the last days",
        korean_translation: "너는 이것을 알라: 말세에 고통하는 때가 이르리니"
      }
    ],
    vocabulary: [
      {
        word: "terrible times",
        ipa_pronunciation: "/ˈtɛrəbl taɪmz/",
        korean_pronunciation: "테러블 타임즈",
        part_of_speech: "명사구",
        definition_korean: "고통하는 때, 어려운 시기",
        usage_note: "그리스어 καιροὶ χαλεποί(kairoi chalepoi)는 '위험한 때들, 어려운 시기들'을 의미합니다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 '말세'(ἐν ἐσχάταις ἡμέραις)의 특징을 경고합니다. '말세'는 그리스도의 초림부터 재림까지의 전체 시기를 가리킵니다(행 2:17 '말세에 하나님이 이르시되'; 히 1:2 '이 모든 날 마지막에는'). '고통하는 때'(καιροὶ χαλεποί)는 마 8:28에서 '사나운 귀신들린 자'를 묘사할 때 사용된 단어로, 극도로 위험하고 어려운 시기를 의미합니다.",
      cross_references: ["마 24:12 (불법이 성하므로 많은 사람의 사랑이 식어지리라)", "딤전 4:1 (후일에 어떤 사람들이 믿음에서 떠나)", "벧후 3:3 (말세에 기롱하는 자들이 와서)"]
    },
    korean_translation: {
      natural_translation: "너는 이것을 알라: 말세에 고통하는 때가 이르리니"
    },
    special_explanation: {
      explanation_type: "말세 (Last Days)",
      content: "'말세'(ἐσχάται ἡμέραι)는 신약에서 그리스도의 초림부터 재림까지의 전체 교회 시대를 가리킵니다. 행 2:17 '말세에 하나님이 이르시되 내가 내 영을 모든 육체에 부어 주리니', 히 1:2 '이 모든 날 마지막에는 아들을 통하여 우리에게 말씀하셨으니'. 따라서 바울이 경고하는 '말세의 고통'은 미래만이 아니라 현재 교회가 직면한 위험들을 포함합니다."
    }
  },
  {
    reference: "2 Timothy 3:2",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "말세 사람들의 특징 (19가지 시작)",
        original_text: "People will be lovers of themselves, lovers of money, boastful, proud, abusive, disobedient to their parents, ungrateful, unholy",
        korean_translation: "사람들이 자기를 사랑하며, 돈을 사랑하며, 자랑하며, 교만하며, 비방하며, 부모를 거역하며, 감사하지 아니하며, 거룩하지 아니하며"
      }
    ],
    vocabulary: [
      {
        word: "lovers of themselves",
        ipa_pronunciation: "/ˈlʌvərz əv ðəmˈsɛlvz/",
        korean_pronunciation: "러버즈 오브 뎀셀브즈",
        part_of_speech: "명사구",
        definition_korean: "자기를 사랑하는 자들",
        usage_note: "그리스어 φίλαυτοι(philautoi)는 '자기'(αὐτός) + '사랑하는'(φίλος)의 합성어입니다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 3:2-4에서 말세 사람들의 19가지 악한 특징을 나열합니다. 첫 번째는 '자기를 사랑함'(φίλαυτοι)으로, 이것이 모든 다른 죄의 근원입니다. 롬 1:29-31도 비슷한 악덕 목록을 제시합니다. 이 목록은 개인적 죄(자기애, 탐욕), 사회적 죄(교만, 비방), 가족 관계 파괴(부모 거역), 영적 타락(감사 없음, 거룩하지 않음)을 포함합니다.",
      cross_references: ["롬 1:29-31 (온갖 불의, 추악, 탐욕, 악의가 가득한 자요)", "딤전 1:9-10 (법없는 자와 복종하지 아니하는 자)", "빌 2:21 (다 자기 일을 구하고 그리스도 예수의 일을 구하지 아니하되)"]
    },
    korean_translation: {
      natural_translation: "사람들이 자기를 사랑하며, 돈을 사랑하며, 자랑하며, 교만하며, 비방하며, 부모를 거역하며, 감사하지 아니하며, 거룩하지 아니하며"
    },
    special_explanation: {
      explanation_type: "19가지 악덕 목록",
      content: "바울은 3:2-4에서 말세 사람들의 19가지 특징을 나열합니다: (1) 자기를 사랑함(φίλαυτοι) - 모든 죄의 근원, (2) 돈을 사랑함(φιλάργυροι), (3) 자랑함(ἀλαζόνες), (4) 교만함(ὑπερήφανοι), (5) 비방함(βλάσφημοι), (6) 부모 거역(γονεῦσιν ἀπειθεῖς), (7) 감사 없음(ἀχάριστοι), (8) 거룩하지 않음(ἀνόσιοι). 이는 롬 1:29-31의 악덕 목록과 유사하며, 죄의 진행(자기애 → 탐욕 → 교만 → 관계 파괴)을 보여줍니다."
    }
  },
  {
    reference: "2 Timothy 3:3",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "말세 사람들의 특징 (계속)",
        original_text: "without love, unforgiving, slanderous, without self-control, brutal, not lovers of the good",
        korean_translation: "무정하며, 원통함을 풀지 아니하며, 모함하며, 절제하지 못하며, 사나우며, 선한 것을 좋아하지 아니하며"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "19가지 악덕 목록이 계속됩니다: (9) 무정함(ἄστοργοι) - 가족애 결핍, (10) 원통함을 풀지 않음(ἄσπονδοι) - 화해 거부, (11) 모함(διάβολοι) - '마귀'(διάβολος)와 같은 어근, (12) 절제하지 못함(ἀκρατεῖς), (13) 사나움(ἀνήμεροι) - 야수 같음, (14) 선한 것을 좋아하지 않음(ἀφιλάγαθοι).",
      cross_references: ["롬 1:31 (무정하며 무자비한 자)", "약 3:15 (이러한 지혜는... 땅에 속한 것이요 정욕에 속한 것이요 귀신에 속한 것)"]
    },
    korean_translation: {
      natural_translation: "무정하며, 원통함을 풀지 아니하며, 모함하며, 절제하지 못하며, 사나우며, 선한 것을 좋아하지 아니하며"
    },
    special_explanation: {
      explanation_type: "관계 파괴의 죄들",
      content: "이 구절의 죄들은 주로 관계 파괴와 관련됩니다: 무정함(ἄστοργοι, without natural affection), 원통함을 풀지 않음(ἄσπονδοι, unforgiving), 모함(διάβολοι, slanderous - '마귀'와 같은 어근). 이는 말세에 인간 관계가 극도로 악화되어 가족애, 용서, 신뢰가 사라지는 것을 보여줍니다."
    }
  },
  {
    reference: "2 Timothy 3:4",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "말세 사람들의 특징 (마지막)",
        original_text: "treacherous, rash, conceited, lovers of pleasure rather than lovers of God",
        korean_translation: "배신하며, 조급하며, 자만하며, 하나님보다 쾌락을 더 사랑하는 자가 되며"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "19가지 악덕의 마지막: (15) 배신(προδόται), (16) 조급함(προπετεῖς), (17) 자만(τετυφωμένοι), (18-19) 하나님보다 쾌락을 더 사랑함(φιλήδονοι μᾶλλον ἢ φιλόθεοι). 마지막 항목이 핵심입니다: 사람들이 하나님(φιλόθεοι)보다 쾌락(φιλήδονοι)을 더 사랑합니다. 이는 우상숭배의 본질입니다.",
      cross_references: ["빌 3:19 (그들의 신은 배요 그 영광은 그들의 부끄러움에 있고 땅의 일을 생각)", "약 4:4 (세상과 벗된 것이 하나님과 원수 됨을 알지 못하느냐)"]
    },
    korean_translation: {
      natural_translation: "배신하며, 조급하며, 자만하며, 하나님보다 쾌락을 더 사랑하는 자가 되며"
    },
    special_explanation: {
      explanation_type: "하나님 vs 쾌락",
      content: "19가지 악덕의 절정은 '하나님보다 쾌락을 더 사랑함'(φιλήδονοι μᾶλλον ἢ φιλόθεοι)입니다. 이는 세 가지 '사랑'의 대조를 보여줍니다: (1) 자기 사랑(φίλαυτοι, 3:2), (2) 돈 사랑(φιλάργυροι, 3:2), (3) 쾌락 사랑(φιλήδονοι, 3:4) vs 하나님 사랑(φιλόθεοι). 말세의 본질은 잘못된 사랑의 대상입니다."
    }
  },
  {
    reference: "2 Timothy 3:5",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "외형적 경건",
        original_text: "having a form of godliness but denying its power",
        korean_translation: "경건의 모양은 있으나 경건의 능력은 부인하는 자니"
      },
      {
        sequence_order: 2,
        semantic_classification: "명령: 이런 자들에게서 돌아서라",
        original_text: "Have nothing to do with such people",
        korean_translation: "이같은 자들에게서 네가 돌아서라"
      }
    ],
    vocabulary: [
      {
        word: "form of godliness",
        ipa_pronunciation: "/fɔrm əv ˈɡɑdlinəs/",
        korean_pronunciation: "폼 오브 갓리니스",
        part_of_speech: "명사구",
        definition_korean: "경건의 모양, 외형적 종교성",
        usage_note: "그리스어 μόρφωσις εὐσεβείας(morphosis eusebeias)는 '형태, 외형'을 의미합니다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "이 구절은 가장 위험한 유형의 악을 묘사합니다: '경건의 모양'(μόρφωσιν εὐσεβείας)은 있으나 '경건의 능력'(τὴν δύναμιν αὐτῆς)은 부인하는 것입니다. 이는 형식적 종교, 위선적 신앙을 가리킵니다. 외적으로는 종교 활동을 하지만, 내적 변화와 성령의 능력이 없습니다. 이사야 29:13 '이 백성이 입으로는 나를 가까이 하며... 그들의 마음은 내게서 멀도다', 마 23:27-28 '회칠한 무덤 같으니'와 같습니다. 바울은 '이같은 자들에게서 돌아서라'(τούτους ἀποτρέπου)고 명령합니다.",
      cross_references: ["사 29:13 (입으로는 나를 가까이 하며 입술로는 나를 공경하되 마음은 내게서 멀도다)", "마 23:27-28 (회칠한 무덤 같으니... 안으로는 죽은 사람의 뼈)", "딛 1:16 (그들이 하나님을 시인하나 행위로는 부인하니)"]
    },
    korean_translation: {
      natural_translation: "경건의 모양은 있으나 경건의 능력은 부인하는 자니, 이같은 자들에게서 네가 돌아서라."
    },
    special_explanation: {
      explanation_type: "형식적 종교의 위험",
      content: "'경건의 모양'(μόρφωσις, form)은 외적 종교 활동(예배 참석, 기도, 금식)을 의미하고, '경건의 능력'(δύναμις, power)은 내적 변화와 성령의 역사를 의미합니다. 이는 가장 위험한 유형의 악입니다: 외적으로는 경건해 보이지만 내적으로는 죽어 있는 상태. 계 3:1 '네가 살았다 하는 이름은 가졌으나 죽은 자로다'. 바울은 이런 자들과 관계를 끊으라고 명령합니다(ἀποτρέπου, turn away)."
    }
  },
  // 3:6-9: 거짓 교사들의 특징
  {
    reference: "2 Timothy 3:6",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "거짓 교사들의 방법",
        original_text: "They are the kind who worm their way into homes and gain control over gullible women",
        korean_translation: "그들 중에 집에 가만히 들어가 여러 가지 욕심에 사로잡혀 죄를 짓고 있는 어리석은 여자들을 유혹하는 자들이 있으니"
      },
      {
        sequence_order: 2,
        semantic_classification: "피해자의 특징",
        original_text: "who are loaded down with sins and are swayed by all kinds of evil desires",
        korean_translation: "항상 배우나 끝내 진리의 지식에 이를 수 없느니라"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "거짓 교사들은 '집에 가만히 들어가'(εἰσδύνοντες εἰς τὰς οἰκίας) 취약한 사람들을 노립니다. '어리석은 여자들'(γυναικάρια)은 경멸적 표현입니다. 이들은 '여러 가지 욕심에 사로잡혀'(σεσωρευμένα ἁμαρτίαις, ἀγόμενα ἐπιθυμίαις ποικίλαις) 있어 쉽게 속습니다. 딛 1:11도 비슷합니다: '그들이 더러운 이득을 취하려고 마땅하지 아니한 것을 가르쳐 가정들을 온통 무너뜨리는도다'.",
      cross_references: ["딛 1:11 (마땅하지 아니한 것을 가르쳐 가정들을 온통 무너뜨리는도다)", "벧후 2:14 (음심이 가득한 눈을 가지고... 굳세지 못한 영혼들을 유혹)"]
    },
    korean_translation: {
      natural_translation: "그들 중에 집에 가만히 들어가 여러 가지 욕심에 사로잡혀 죄를 짓고 있는 어리석은 여자들을 유혹하는 자들이 있으니"
    },
    special_explanation: {
      explanation_type: "거짓 교사의 전략",
      content: "거짓 교사들은 '집에 가만히 들어가'(εἰσδύνοντες, creep into) 취약한 사람들(특히 죄책감과 욕망에 사로잡힌 사람들)을 노립니다. 이는 현대 이단들의 전형적 방법입니다: 가정 방문, 개인 상담, 죄책감 이용."
    }
  },
  {
    reference: "2 Timothy 3:7",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "피해자들의 상태",
        original_text: "always learning but never able to come to a knowledge of the truth",
        korean_translation: "항상 배우나 끝내 진리의 지식에 이를 수 없느니라"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "'항상 배우나'(πάντοτε μανθάνοντα) '끝내 진리의 지식에 이를 수 없는'(μηδέποτε εἰς ἐπίγνωσιν ἀληθείας ἐλθεῖν δυνάμενα) 상태는 지적 호기심은 있으나 진리를 받아들일 의지가 없는 사람들을 묘사합니다. 이는 딤전 2:4 '모든 사람이 구원을 받으며 진리를 아는 데에 이르기를 원하시느니라'의 반대입니다.",
      cross_references: ["요 5:39-40 (너희가 성경에서 영생을 얻는 줄 생각하고... 그러나 너희가 영생을 얻기 위하여 내게 오기를 원하지 아니하는도다)", "고후 4:4 (이 세상의 신이 믿지 아니하는 자들의 마음을 혼미하게 하여)"]
    },
    korean_translation: {
      natural_translation: "항상 배우나 끝내 진리의 지식에 이를 수 없느니라."
    },
    special_explanation: {
      explanation_type: "지적 호기심 vs 진리 수용",
      content: "'항상 배우나'(always learning) '끝내 진리를 알 수 없는'(never able to come to knowledge of truth) 상태는 지적 호기심과 종교적 관심은 있으나, 진리를 받아들이고 복종할 의지가 없는 사람들입니다. 요 5:39-40 '너희가 성경에서 영생을 얻는 줄 생각하고 성경을 연구하거니와 이 성경이 내게 대하여 증언하는 것이니라 그러나 너희가 영생을 얻기 위하여 내게 오기를 원하지 아니하는도다'."
    }
  },
  // 3:8-9
  {
    reference: "2 Timothy 3:8",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "비교: 얀네와 얌브레",
        original_text: "Just as Jannes and Jambres opposed Moses, so also these teachers oppose the truth",
        korean_translation: "얀네와 얌브레가 모세를 대적한 것 같이 이 사람들도 진리를 대적하니"
      },
      {
        sequence_order: 2,
        semantic_classification: "거짓 교사들의 특징",
        original_text: "They are men of depraved minds, who, as far as the faith is concerned, are rejected",
        korean_translation: "이들은 마음이 부패한 자들이요 믿음에 관하여는 버림 받은 자들이라"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "바울은 거짓 교사들을 '얀네와 얌브레'(Ἰάννης καὶ Ἰαμβρῆς)에 비유합니다. 이들은 구약에 이름이 나오지 않지만, 유대 전승에서 출 7:11-12의 바로의 술객들로 알려져 있습니다. 이들은 모세의 표적을 흉내 냈지만 결국 실패했습니다(출 8:18-19). 거짓 교사들도 마찬가지로 진리를 대적하며, '마음이 부패하고'(κατεφθαρμένοι τὸν νοῦν), '믿음에 관하여는 버림 받은'(ἀδόκιμοι περὶ τὴν πίστιν) 자들입니다.",
      cross_references: ["출 7:11-12 (애굽 술객들도 그들의 비술로 그와 같이 행하되)", "출 8:18-19 (술객들이 이를 행하려 하여도... 이는 하나님의 손가락이니이다)", "딛 1:16 (그들이 하나님을 시인하나 행위로는 부인하니 가증한 자요 복종하지 아니하는 자요 모든 선한 일을 버리는 자니라)"]
    },
    korean_translation: {
      natural_translation: "얀네와 얌브레가 모세를 대적한 것 같이 이 사람들도 진리를 대적하니, 이들은 마음이 부패한 자들이요 믿음에 관하여는 버림 받은 자들이라."
    },
    special_explanation: {
      explanation_type: "얀네와 얌브레",
      content: "얀네와 얌브레(Jannes and Jambres)는 구약에 이름이 나오지 않지만, 유대 전승(미드라쉬)에서 출애굽기 7:11-12의 '바로의 술객들'로 알려져 있습니다. 이들은 모세의 표적을 흉내 냈지만(지팡이를 뱀으로, 물을 피로), 결국 실패했습니다(출 8:18-19 '이를 행하려 하여도 못하였고... 이는 하나님의 손가락이니이다'). 거짓 교사들도 진리를 흉내 내지만 결국 드러납니다."
    }
  },
  {
    reference: "2 Timothy 3:9",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "한계: 더 이상 나아가지 못함",
        original_text: "But they will not get very far because, as in the case of those men, their folly will be clear to everyone",
        korean_translation: "그러나 그들은 더 이상 나아가지 못할 것은 그 두 사람의 경우와 같이 그들의 어리석음이 모든 사람에게 드러날 것임이라"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "거짓 교사들은 '더 이상 나아가지 못할 것'(οὐκ ἐπὶ πλεῖον προκόψουσιν)입니다. 아이러니하게도 2:16에서는 '경건하지 않은 헛된 말'이 '점점 더 나아간다'(ἐπὐ πλεῖον προκόψουσιν)고 했는데, 여기서는 거짓 교사들 자신은 결국 막힌다고 합니다. 이유는 '그들의 어리석음이 모든 사람에게 드러날 것'(ἡ ἄνοια αὐτῶν ἔκδηλος ἔσται πᾶσιν)이기 때문입니다. 얀네와 얌브레도 결국 드러났습니다(출 8:18-19).",
      cross_references: ["눅 12:2 (감추인 것이 드러나지 않을 것이 없고)", "고전 4:5 (어둠에 감추인 것들을 드러내고 마음의 뜻을 나타내시리니)", "딤전 5:24-25 (어떤 사람들의 죄는 밝히 드러나... 어떤 사람들의 죄는 그 뒤를 따르나니)"]
    },
    korean_translation: {
      natural_translation: "그러나 그들은 더 이상 나아가지 못할 것은 그 두 사람의 경우와 같이 그들의 어리석음이 모든 사람에게 드러날 것임이라."
    },
    special_explanation: {
      explanation_type: "거짓의 자기 파괴성",
      content: "거짓 교사들은 한동안 성공하는 것처럼 보이지만(2:16 '점점 더 나아간다'), 결국 막힙니다(3:9 '더 이상 나아가지 못할 것'). 이유는 '그들의 어리석음이 드러날 것'이기 때문입니다. 진리는 스스로 증명되고, 거짓도 스스로 드러납니다. 눅 12:2 '감추인 것이 드러나지 않을 것이 없고 숨겨진 것이 알려지지 않을 것이 없나니'."
    }
  },
  // 3:10-13: 바울의 모범
  {
    reference: "2 Timothy 3:10",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "대조: 디모데는 바울을 따름",
        original_text: "You, however, know all about my teaching, my way of life, my purpose, faith, patience, love, endurance",
        korean_translation: "그러나 너는 나의 교훈과 행실과 의향과 믿음과 오래 참음과 사랑과 인내와"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "바울은 거짓 교사들(3:2-9)과 자신을 대조합니다. '그러나 너는'(Σὺ δὲ)라는 강한 대조로 시작합니다. 디모데는 바울의 9가지 특징을 '알고 따랐습니다'(παρηκολούθησας): (1) 교훈(διδασκαλίᾳ), (2) 행실(ἀγωγῇ), (3) 의향(προθέσει), (4) 믿음(πίστει), (5) 오래 참음(μακροθυμίᾳ), (6) 사랑(ἀγάπῃ), (7) 인내(ὑπομονῇ). 이는 말과 삶이 일치하는 바울의 진정성을 보여줍니다.",
      cross_references: ["빌 3:17 (형제들아 너희는 함께 나를 본받으라)", "고전 11:1 (내가 그리스도를 본받는 자가 된 것 같이 너희는 나를 본받는 자가 되라)", "살전 1:6 (너희는 많은 환난 가운데서 성령의 기쁨으로 말씀을 받아 우리와 주를 본받은 자가 되었으니)"]
    },
    korean_translation: {
      natural_translation: "그러나 너는 나의 교훈과 행실과 의향과 믿음과 오래 참음과 사랑과 인내와"
    },
    special_explanation: {
      explanation_type: "바울의 9가지 특징",
      content: "바울은 거짓 교사들과 대조하여 자신의 9가지 특징을 제시합니다: (1) 교훈(teaching) - 사도적 가르침, (2) 행실(way of life) - 말과 삶의 일치, (3) 의향(purpose) - 복음 전파 목표, (4) 믿음(faith) - 그리스도에 대한 신뢰, (5) 오래 참음(patience) - 장기적 인내, (6) 사랑(love) - 그리스도의 사랑, (7) 인내(endurance) - 고난 중 견딤. 이는 참된 사역자의 자격입니다."
    }
  },
  // 나머지 구절들 계속...
  {
    reference: "2 Timothy 3:11",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "바울의 박해 경험",
        original_text: "persecutions, sufferings—what kinds of things happened to me in Antioch, Iconium and Lystra, the persecutions I endured",
        korean_translation: "박해와 고난 곧 안디옥과 이고니온과 루스드라에서 내게 일어난 일과 내가 어떠한 박해를 견딘 것을 네가 알거니와"
      },
      {
        sequence_order: 2,
        semantic_classification: "주의 구원",
        original_text: "Yet the Lord rescued me from all of them",
        korean_translation: "주께서 이 모든 것에서 나를 건지셨느니라"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "바울은 1차 전도여행 때의 박해를 언급합니다: 안디옥(행 13:50), 이고니온(행 14:5), 루스드라(행 14:19). 루스드라는 디모데의 고향입니다(행 16:1). 디모데는 바울의 고난을 직접 목격했을 것입니다. '주께서 이 모든 것에서 나를 건지셨느니라'(ἐκ πάντων με ἐρρύσατο ὁ κύριος)는 시 34:19 '의인은 고난이 많으나 여호와께서 그들을 모두 건지시는도다'의 성취입니다.",
      cross_references: ["행 14:19 (유대인들이 와서 무리를 충동하니 그들이 돌로 바울을 쳐 죽은 줄로 알고 성 밖에 끌어 내치니라)", "시 34:19 (의인은 고난이 많으나 여호와께서 그들을 모두 건지시는도다)", "고후 11:23-27 (매도 수없이 맞고 여러 번 죽을 뻔하였으니)"]
    },
    korean_translation: {
      natural_translation: "박해와 고난 곧 안디옥과 이고니온과 루스드라에서 내게 일어난 일과 내가 어떠한 박해를 견딘 것을 네가 알거니와, 주께서 이 모든 것에서 나를 건지셨느니라."
    },
    special_explanation: {
      explanation_type: "디모데가 목격한 박해",
      content: "바울이 언급한 세 도시(안디옥, 이고니온, 루스드라)는 1차 전도여행(AD 46-48)의 장소들입니다. 루스드라는 디모데의 고향입니다(행 16:1). 디모데는 아마도 이 박해들을 직접 목격했을 것입니다. 특히 루스드라에서 바울은 돌에 맞아 죽은 줄로 알고 성 밖에 끌려나갔습니다(행 14:19). 그러나 '주께서 이 모든 것에서 나를 건지셨습니다'."
    }
  },
  {
    reference: "2 Timothy 3:12",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "보편적 원리: 경건한 삶 = 박해",
        original_text: "In fact, everyone who wants to live a godly life in Christ Jesus will be persecuted",
        korean_translation: "무릇 그리스도 예수 안에서 경건하게 살고자 하는 자는 박해를 받으리라"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "이 구절은 신약의 가장 명확한 박해 약속 중 하나입니다: '무릇... 경건하게 살고자 하는 자는 박해를 받으리라'(πάντες δὲ οἱ θέλοντες εὐσεβῶς ζῆν ἐν Χριστῷ Ἰησοῦ διωχθήσονται). 이는 예수님의 말씀을 확증합니다: 마 5:10-12 '의를 위하여 박해를 받은 자는 복이 있나니', 요 15:20 '그들이 나를 박해하였은즉 너희도 박해할 것이요'. '그리스도 예수 안에서'(ἐν Χριστῷ Ἰησοῦ) 경건하게 사는 것은 세상과의 충돌을 필연적으로 초래합니다.",
      cross_references: ["요 15:18-20 (세상이 너희를 미워하면... 그들이 나를 박해하였은즉 너희도 박해할 것이요)", "마 5:10-12 (의를 위하여 박해를 받은 자는 복이 있나니)", "행 14:22 (우리가 하나님의 나라에 들어가려면 많은 환난을 겪어야 할 것이라)"]
    },
    korean_translation: {
      natural_translation: "무릇 그리스도 예수 안에서 경건하게 살고자 하는 자는 박해를 받으리라."
    },
    special_explanation: {
      explanation_type: "경건한 삶과 박해의 필연성",
      content: "이 구절은 신약의 가장 명확한 박해 약속입니다: '무릇... 경건하게 살고자 하는 자는 박해를 받으리라'(πάντες... διωχθήσονται). 이는 예외가 없습니다(πάντες, everyone). '그리스도 예수 안에서 경건하게 사는 것'은 세상의 가치관, 문화, 죄와 충돌합니다. 요 15:18-19 '세상이 너희를 미워하면 너희보다 먼저 나를 미워한 줄을 알라 너희가 세상에 속하였으면 세상이 자기의 것을 사랑할 것이로되 너희는 세상에 속한 자가 아니요'."
    }
  },
  {
    reference: "2 Timothy 3:13",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "대조: 악한 자들은 더 악해짐",
        original_text: "while evildoers and impostors will go from bad to worse, deceiving and being deceived",
        korean_translation: "악한 사람들과 속이는 자들은 더욱 악하여져서 속이기도 하고 속기도 하나니"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "바울은 두 그룹의 미래를 대조합니다: 경건한 자들은 박해를 받고(3:12), 악한 자들은 '더욱 악하여집니다'(προκόψουσιν ἐπὶ τὸ χεῖρον). 이는 도덕적 진보가 아니라 퇴보입니다. '속이기도 하고 속기도 하는'(πλανῶντες καὶ πλανώμενοι) 상태는 거짓 교사들이 다른 사람을 속이면서 동시에 자신도 사탄에게 속고 있음을 나타냅니다. 이는 2:16의 '점점 더 경건하지 않음으로 나아간다'와 연결됩니다.",
      cross_references: ["롬 1:21-22 (생각이 허망하여지며... 스스로 지혜 있다 하나 어리석게 되어)", "살후 2:10-11 (불의의 모든 속임으로... 하나님이 미혹의 역사를 그들에게 보내사 거짓 것을 믿게 하심은)"]
    },
    korean_translation: {
      natural_translation: "악한 사람들과 속이는 자들은 더욱 악하여져서 속이기도 하고 속기도 하나니"
    },
    special_explanation: {
      explanation_type: "죄의 진행성",
      content: "악한 자들은 '더욱 악하여집니다'(will go from bad to worse). 이는 죄의 진행성(progressive nature of sin)을 보여줍니다. '속이기도 하고 속기도 하는'(πλανῶντες καὶ πλανώμενοι, deceiving and being deceived)은 거짓 교사들의 이중적 속임을 나타냅니다: 그들은 다른 사람을 속이면서 동시에 자신도 사탄에게 속고 있습니다. 살후 2:10-11 '하나님이 미혹의 역사를 그들에게 보내사 거짓 것을 믿게 하심'."
    }
  },
  // 3:14-17: 성경의 영감과 유익
  {
    reference: "2 Timothy 3:14",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "명령: 배운 것에 거하라",
        original_text: "But as for you, continue in what you have learned and have become convinced of",
        korean_translation: "그러나 너는 배우고 확신한 일에 거하라"
      },
      {
        sequence_order: 2,
        semantic_classification: "이유: 누구에게서 배웠는지 앎",
        original_text: "because you know those from whom you learned it",
        korean_translation: "너는 네가 누구에게서 배운 것을 알며"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "다시 '그러나 너는'(Σὺ δὲ)라는 강한 대조로 악한 자들(3:13)과 디모데를 구분합니다. 디모데는 '배우고 확신한 일에 거해야'(μένε ἐν οἷς ἔμαθες καὶ ἐπιστώθης) 합니다. 이유는 '누구에게서 배웠는지 알기'(εἰδὼς παρὰ τίνων ἔμαθες) 때문입니다. 디모데는 할머니 로이스, 어머니 유니게, 그리고 바울에게서 배웠습니다(딤후 1:5; 3:10).",
      cross_references: ["딤후 1:5 (네 외조모 로이스와 네 어머니 유니게 속에 있더니)", "요일 2:24 (너희는 처음부터 들은 것을 너희 안에 거하게 하라)", "골 2:6-7 (너희가 그리스도 예수를 주로 받았으니 그 안에서 행하되... 믿음에 굳게 서서)"]
    },
    korean_translation: {
      natural_translation: "그러나 너는 배우고 확신한 일에 거하라. 너는 네가 누구에게서 배운 것을 알며"
    },
    special_explanation: {
      explanation_type: "배움의 원천",
      content: "디모데는 '배우고 확신한 일에 거해야'(continue in what you have learned and become convinced of) 합니다. 이유는 '누구에게서 배웠는지 알기' 때문입니다. 디모데의 교사들은 신뢰할 만한 사람들이었습니다: 할머니 로이스(딤후 1:5), 어머니 유니게(딤후 1:5), 사도 바울(딤후 3:10). 이는 신앙 전승의 중요성을 보여줍니다."
    }
  },
  {
    reference: "2 Timothy 3:15",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "성경 교육의 시작",
        original_text: "and how from infancy you have known the Holy Scriptures",
        korean_translation: "또 어려서부터 성경을 알았나니"
      },
      {
        sequence_order: 2,
        semantic_classification: "성경의 목적: 구원의 지혜",
        original_text: "which are able to make you wise for salvation through faith in Christ Jesus",
        korean_translation: "성경은 능히 너로 하여금 그리스도 예수 안에 있는 믿음으로 말미암아 구원에 이르는 지혜가 있게 하느니라"
      }
    ],
    vocabulary: [
      {
        word: "infancy",
        ipa_pronunciation: "/ˈɪnfənsi/",
        korean_pronunciation: "인펀시",
        part_of_speech: "명사",
        definition_korean: "어린 시절, 유아기",
        usage_note: "그리스어 βρέφος(brephos)는 '아기, 유아'를 의미합니다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "디모데는 '어려서부터'(ἀπὸ βρέφους) 성경을 배웠습니다. 이는 로이스와 유니게의 가정 교육을 가리킵니다. '성경'(ἱερὰ γράμματα, holy writings)은 구약을 의미합니다. 성경의 목적은 '그리스도 예수 안에 있는 믿음으로 말미암아 구원에 이르는 지혜'(σοφίσαι εἰς σωτηρίαν διὰ πίστεως τῆς ἐν Χριστῷ Ἰησοῦ)입니다. 이는 요 5:39 '이 성경이 내게 대하여 증언하는 것이니라', 눅 24:27 '모세와 모든 선지자의 글로 시작하여 모든 성경에 쓴 바 자기에 관한 것을 자세히 설명하시니라'와 같습니다.",
      cross_references: ["요 5:39 (이 성경이 내게 대하여 증언하는 것이니라)", "눅 24:27 (모든 성경에 쓴 바 자기에 관한 것을 자세히 설명하시니라)", "행 17:11 (날마다 성경을 상고하여 이것이 그러한가 보더라)"]
    },
    korean_translation: {
      natural_translation: "또 어려서부터 성경을 알았나니, 성경은 능히 너로 하여금 그리스도 예수 안에 있는 믿음으로 말미암아 구원에 이르는 지혜가 있게 하느니라."
    },
    special_explanation: {
      explanation_type: "성경의 구원론적 목적",
      content: "성경의 목적은 '그리스도 예수 안에 있는 믿음으로 말미암아 구원에 이르는 지혜'(wise for salvation through faith in Christ Jesus)입니다. 구약 성경(ἱερὰ γράμματα)도 그리스도를 증언합니다(요 5:39; 눅 24:27). 디모데는 '어려서부터'(ἀπὸ βρέφους, from infancy) 성경을 배웠는데, 이는 가정 신앙 교육의 모범입니다(신 6:6-7 '네 자녀에게 부지런히 가르치며')."
    }
  },
  {
    reference: "2 Timothy 3:16",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "성경의 영감",
        original_text: "All Scripture is God-breathed",
        korean_translation: "모든 성경은 하나님의 감동으로 된 것으로"
      },
      {
        sequence_order: 2,
        semantic_classification: "성경의 유익 (4가지)",
        original_text: "and is useful for teaching, rebuking, correcting and training in righteousness",
        korean_translation: "교훈과 책망과 바르게 함과 의로 교육하기에 유익하니"
      }
    ],
    vocabulary: [
      {
        word: "God-breathed",
        ipa_pronunciation: "/ɡɑd brɛθd/",
        korean_pronunciation: "갓 브레스드",
        part_of_speech: "형용사",
        definition_korean: "하나님의 감동으로 된, 하나님이 숨결을 불어넣은",
        usage_note: "그리스어 θεόπνευστος(theopneustos)는 '하나님'(θεός) + '숨쉬다'(πνέω)의 합성어입니다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "이 구절은 성경의 영감 교리의 핵심 구절입니다. '모든 성경'(πᾶσα γραφὴ)은 구약 전체를 가리키며, 원리상 신약도 포함합니다(벧후 3:16). '하나님의 감동으로 된'(θεόπνευστος)은 문자적으로 '하나님이 숨을 불어넣은'(God-breathed)이라는 뜻입니다. 이는 성경의 저자가 궁극적으로 하나님이심을 나타냅니다(벧후 1:21 '사람이 원함으로... 오직 성령의 감동하심을 받은 사람들이 하나님께 받아 말한 것임이라'). 성경은 네 가지에 유익합니다: (1) 교훈(διδασκαλίαν, teaching), (2) 책망(ἐλεγμόν, rebuking), (3) 바르게 함(ἐπανόρθωσιν, correcting), (4) 의로 교육(παιδείαν τὴν ἐν δικαιοσύνῃ, training in righteousness).",
      cross_references: ["벧후 1:21 (사람이 원함으로... 오직 성령의 감동하심을 받은 사람들이 하나님께 받아 말한 것)", "벧후 3:16 (바울이 모든 편지에도 이런 것들을 말하였으되... 다른 성경과 같이 억지로 풀다가)", "시 119:105 (주의 말씀은 내 발에 등이요 내 길에 빛이니이다)"]
    },
    korean_translation: {
      natural_translation: "모든 성경은 하나님의 감동으로 된 것으로 교훈과 책망과 바르게 함과 의로 교육하기에 유익하니"
    },
    special_explanation: {
      explanation_type: "성경의 영감 (Inspiration)",
      content: "이 구절은 성경 영감 교리의 핵심입니다. θεόπνευστος(theopneustos)는 '하나님'(θεός) + '숨쉬다'(πνέω)의 합성어로, '하나님이 숨을 불어넣은'(God-breathed)이라는 뜻입니다. 이는 성경의 궁극적 저자가 하나님이심을 나타냅니다. 벧후 1:21 '사람이 원함으로 예언을 가져온 것이 아니요 오직 성령의 감동하심을 받은 사람들이 하나님께 받아 말한 것임이라'. 성경은 네 가지에 유익합니다: (1) 교훈(teaching) - 진리 가르침, (2) 책망(rebuking) - 오류 지적, (3) 바르게 함(correcting) - 회복, (4) 의로 교육(training in righteousness) - 성화."
    }
  },
  {
    reference: "2 Timothy 3:17",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "성경의 목적: 온전케 함",
        original_text: "so that the servant of God may be thoroughly equipped for every good work",
        korean_translation: "이는 하나님의 사람으로 온전하게 하며 모든 선한 일을 행할 능력을 갖추게 하려 함이라"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "성경의 궁극적 목적은 '하나님의 사람'(ὁ τοῦ θεοῦ ἄνθρωπος)을 '온전하게 하며'(ἄρτιος, complete, capable) '모든 선한 일을 행할 능력을 갖추게'(πρὸς πᾶν ἔργον ἀγαθὸν ἐξηρτισμένος, thoroughly equipped for every good work) 하는 것입니다. 이는 엡 4:12-13 '성도를 온전하게 하여... 그리스도의 장성한 분량이 충만한 데까지 이르리니'와 같습니다. 성경은 구원뿐 아니라 성화와 사역 준비를 위해 충분합니다(sola scriptura - 오직 성경).",
      cross_references: ["엡 4:12-13 (성도를 온전하게 하여... 그리스도의 장성한 분량이 충만한 데까지)", "약 1:4 (인내를 온전히 이루라 이는 너희로 온전하고 구비하여 조금도 부족함이 없게 하려 함이라)", "골 1:28 (각 사람을 그리스도 안에서 완전한 자로 세우려 함이니)"]
    },
    korean_translation: {
      natural_translation: "이는 하나님의 사람으로 온전하게 하며 모든 선한 일을 행할 능력을 갖추게 하려 함이라."
    },
    special_explanation: {
      explanation_type: "성경의 충족성 (Sufficiency)",
      content: "성경은 '하나님의 사람'(the man of God)을 '온전하게'(ἄρτιος, complete) 하고 '모든 선한 일을 행할 능력을 갖추게'(ἐξηρτισμένος πρὸς πᾶν ἔργον ἀγαθόν, thoroughly equipped for every good work) 합니다. 이는 종교개혁의 '오직 성경'(sola scriptura) 교리의 성경적 근거입니다: 성경은 구원, 성화, 사역을 위해 충분합니다. 다른 전통이나 계시가 필요하지 않습니다. 엡 4:12-13 '성도를 온전하게 하여 봉사의 일을 하게 하며'."
    }
  }
]

async function main() {
  console.log('=== 2 Timothy 3:1-17 배치 저장 시작 ===\n')

  for (const analysis of analyses) {
    await saveAnalysisToDb(analysis)
  }

  console.log('\n=== 완료 ===')
  console.log(`성공: ${analyses.length}`)
}

main()
