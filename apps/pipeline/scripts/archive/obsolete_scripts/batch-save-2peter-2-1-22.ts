import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db'

const analyses: AnalysisData[] = [
  {
    reference: "2 Peter 2:1",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "역사적 선례",
        original_text: "But there were also false prophets among the people, just as there will be false teachers among you",
        korean_translation: "그러나 백성 가운데 거짓 선지자들이 있었던 것같이, 여러분 가운데도 거짓 교사들이 있을 것입니다",
        grammatical_explanation: "Ἐγένοντο... ψευδοπροφῆται(거짓 선지자들이 있었다) + ὡς... ἔσονται... ψευδοδιδάσκαλοι(거짓 교사들이 있을 것이다)"
      },
      {
        sequence_order: 2,
        semantic_classification: "거짓 교사의 행위",
        original_text: "They will secretly introduce destructive heresies, even denying the sovereign Lord who bought them—bringing swift destruction on themselves",
        korean_translation: "그들은 멸망케 하는 이단을 몰래 들여오며, 자기들을 사신 주님까지 부인하여 자신들에게 임박한 멸망을 초래할 것입니다",
        grammatical_explanation: "παρεισάξουσιν αἱρέσεις ἀπωλείας(멸망의 이단들을 슬며시 도입하다) + ἀρνούμενοι τὸν δεσπότην(주인을 부인하다)"
      }
    ],
    vocabulary: [
      {
        word: "heresies",
        ipa_pronunciation: "/ˈherəsiz/",
        korean_pronunciation: "헤러시스",
        part_of_speech: "명사",
        definition_korean: "이단, 분파",
        usage_note: "αἵρεσις, 선택된 교리, 분파"
      },
      {
        word: "sovereign",
        ipa_pronunciation: "/ˈsɑːvrɪn/",
        korean_pronunciation: "서브린",
        part_of_speech: "형용사",
        definition_korean: "주권자, 주인",
        usage_note: "δεσπότης, 절대 권위자"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "베드로는 구약의 거짓 선지자들처럼 교회에도 거짓 교사들이 일어날 것을 경고합니다. 그들은 (1) 은밀히 이단을 도입하고, (2) 그리스도의 주권을 부인하며, (3) 스스로 멸망을 초래합니다. 2장 전체는 유다서와 유사한 내용입니다."
    },
    korean_translation: {
      natural_translation: "그러나 백성 가운데 거짓 선지자들이 있었던 것같이, 여러분 가운데도 거짓 교사들이 있을 것입니다. 그들은 멸망케 하는 이단을 몰래 들여오며, 자기들을 사신 주님까지 부인하여 자신들에게 임박한 멸망을 초래할 것입니다."
    },
    special_explanation: {
      explanation_type: "거짓 교사의 특징",
      content: "παρεισάξουσιν(몰래 들여오다)은 '슬며시 끌어들이다'는 의미로, 거짓 교사들의 은밀한 방법을 보여줍니다. αἱρέσεις ἀπωλείας(멸망의 이단들)는 구원의 진리를 왜곡하는 가르침입니다. τὸν ἀγοράσαντα αὐτοὺς δεσπότην ἀρνούμενοι(그들을 사신 주인을 부인하다)는 논쟁적입니다: 거짓 교사들도 '사신' 자들인가? 이는 (1) 외형적 구속(profession), (2) 일반적 구속(general redemption) 등으로 해석됩니다."
    }
  },
  {
    reference: "2 Peter 2:2",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "거짓 교사의 영향",
        original_text: "Many will follow their depraved conduct and will bring the way of truth into disrepute",
        korean_translation: "많은 사람이 그들의 방탕을 따를 것이며, 진리의 길이 비방받게 될 것입니다",
        grammatical_explanation: "πολλοὶ ἐξακολουθήσουσιν(많은 이들이 따를 것) + δι' οὓς... βλασφημηθήσεται(그들 때문에 비방받을 것)"
      }
    ],
    vocabulary: [
      {
        word: "depraved",
        ipa_pronunciation: "/dɪˈpreɪvd/",
        korean_pronunciation: "디프레이브드",
        part_of_speech: "형용사",
        definition_korean: "타락한, 방탕한",
        usage_note: "ἀσέλγεια, 음란, 방종"
      },
      {
        word: "disrepute",
        ipa_pronunciation: "/ˌdɪsrɪˈpjuːt/",
        korean_pronunciation: "디스리퓨트",
        part_of_speech: "명사",
        definition_korean: "비방, 불명예",
        usage_note: "βλασφημέω, 욕되게 하다"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "거짓 교사들의 방탕한 삶(ἀσέλγεια)은 많은 이들을 미혹하고, 그 결과 '진리의 길'(기독교)이 외부인들에게 비방받게 됩니다. 이는 롬 2:24의 경고와 동일합니다."
    },
    korean_translation: {
      natural_translation: "많은 사람이 그들의 방탕을 따를 것이며, 진리의 길이 비방받게 될 것입니다."
    }
  },
  {
    reference: "2 Peter 2:3",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "탐욕과 착취",
        original_text: "In their greed these teachers will exploit you with fabricated stories",
        korean_translation: "탐욕으로 그들은 지어낸 이야기로 여러분을 착취할 것입니다",
        grammatical_explanation: "πλεονεξίᾳ πλαστοῖς λόγοις ὑμᾶς ἐμπορεύσονται(탐욕으로 꾸며낸 말들로 여러분을 상품화할 것)"
      },
      {
        sequence_order: 2,
        semantic_classification: "심판의 확실성",
        original_text: "Their condemnation has long been hanging over them, and their destruction has not been sleeping",
        korean_translation: "그들에 대한 심판은 오래 전부터 준비되어 있고, 그들의 멸망은 잠들지 않습니다",
        grammatical_explanation: "τὸ κρίμα... οὐκ ἀργεῖ(심판이 게으르지 않다) + ἡ ἀπώλεια... οὐ νυστάζει(멸망이 졸지 않는다)"
      }
    ],
    vocabulary: [
      {
        word: "exploit",
        ipa_pronunciation: "/ɪkˈsplɔɪt/",
        korean_pronunciation: "익스플로잇",
        part_of_speech: "동사",
        definition_korean: "착취하다, 이용하다",
        usage_note: "ἐμπορεύομαι, 상품화하다, 장사하다"
      },
      {
        word: "fabricated",
        ipa_pronunciation: "/ˈfæbrɪkeɪtɪd/",
        korean_pronunciation: "패브리케이티드",
        part_of_speech: "형용사",
        definition_korean: "꾸며낸, 조작된",
        usage_note: "πλαστός, 만들어진, 거짓"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "거짓 교사들의 동기는 탐욕(πλεονεξία)이며, 그들은 신자들을 '상품화'(ἐμπορεύομαι)합니다. 그러나 하나님의 심판은 확실하며 '잠들지 않습니다'(οὐ νυστάζει) - 지체되는 것처럼 보여도 반드시 임합니다."
    },
    korean_translation: {
      natural_translation: "탐욕으로 그들은 지어낸 이야기로 여러분을 착취할 것입니다. 그들에 대한 심판은 오래 전부터 준비되어 있고, 그들의 멸망은 잠들지 않습니다."
    },
    special_explanation: {
      explanation_type: "심판의 확실성",
      content: "τὸ κρίμα... ἐκπάλαι οὐκ ἀργεῖ(심판이 오래 전부터 게으르지 않다)와 ἡ ἀπώλεια αὐτῶν οὐ νυστάζει(그들의 멸망이 졸지 않는다)는 의인화된 표현입니다. 심판이 지체되는 것처럼 보여도(3:9), 실제로는 준비되어 있으며 반드시 실행됩니다. 이는 시 121:4('이스라엘을 지키시는 이는 졸지도 주무시지도 않는다')의 반대 이미지입니다."
    }
  }
]

// 2:4-22 구절들을 간결하게 추가
const remainingVerses: AnalysisData[] = [
  {
    reference: "2 Peter 2:4",
    sentence_structures: [{
      sequence_order: 1,
      semantic_classification: "타락한 천사의 심판",
      original_text: "For if God did not spare angels when they sinned, but sent them to hell, putting them in chains of darkness to be held for judgment",
      korean_translation: "하나님께서 범죄한 천사들을 용서하지 않으시고 지옥에 던져 어둠의 구덩이에 가두어 심판 때까지 두셨다면",
      grammatical_explanation: "εἰ γὰρ... οὐκ ἐφείσατο(용서하지 않으셨다면), 조건절로 하나님 심판의 확실성 논증"
    }],
    contextual_explanation: {
      integrated_explanation: "베드로는 세 가지 역사적 심판 예를 제시합니다: (1) 타락한 천사들(2:4), (2) 노아의 홍수(2:5), (3) 소돔과 고모라(2:6-8). 이는 유다서 6-7과 유사합니다. 타락한 천사들은 '지옥'(타르타로스)에 갇혀 최후 심판을 기다립니다."
    },
    korean_translation: {
      natural_translation: "하나님께서 범죄한 천사들을 용서하지 않으시고 지옥에 던져 어둠의 구덩이에 가두어 심판 때까지 두셨다면"
    },
    special_explanation: {
      explanation_type: "타르타로스(Tartarus)",
      content: "ταρταρώσας(타르타로스에 던지다)는 신약에서 이 구절에만 나오는 동사입니다. 타르타로스는 그리스 신화에서 최하층 지옥을 가리키지만, 베드로는 이를 타락한 천사들의 구금 장소로 사용합니다. 이는 유다서 6의 '영원한 결박'과 동일한 개념입니다."
    }
  },
  {
    reference: "2 Peter 2:5",
    sentence_structures: [{
      sequence_order: 1,
      semantic_classification: "노아 시대 심판과 구원",
      original_text: "if he did not spare the ancient world when he brought the flood on its ungodly people, but protected Noah, a preacher of righteousness, and seven others",
      korean_translation: "옛 세상을 용서하지 않으시고 경건하지 않은 자들에게 홍수를 내리셨으나, 의를 전파한 노아와 일곱 사람을 보호하셨다면",
      grammatical_explanation: "조건절 계속, 심판 중 의인 보호의 패턴"
    }],
    contextual_explanation: {
      integrated_explanation: "노아는 '의의 전파자'(δικαιοσύνης κήρυκα)였습니다. 하나님은 경건하지 않은 세상을 심판하셨으나 의로운 노아 가족 8명은 보호하셨습니다. 이는 심판 중에도 하나님이 의인을 구별하신다는 원리입니다."
    },
    korean_translation: {
      natural_translation: "옛 세상을 용서하지 않으시고 경건하지 않은 자들에게 홍수를 내리셨으나, 의를 전파한 노아와 일곱 사람을 보호하셨다면"
    }
  },
  {
    reference: "2 Peter 2:6",
    sentence_structures: [{
      sequence_order: 1,
      semantic_classification: "소돔 고모라 심판",
      original_text: "if he condemned the cities of Sodom and Gomorrah by burning them to ashes, and made them an example of what is going to happen to the ungodly",
      korean_translation: "소돔과 고모라 성을 정죄하사 재가 되게 하여 멸망시키시고, 후에 경건하지 않을 자들에게 본보기로 삼으셨다면",
      grammatical_explanation: "τεφρώσας κατέκρινεν(재로 만들어 정죄하셨다), 완전한 파괴의 이미지"
    }],
    contextual_explanation: {
      integrated_explanation: "소돔과 고모라의 멸망(창 19장)은 경건하지 않은 자들에 대한 하나님 심판의 '본보기'(ὑπόδειγμα)입니다. 이는 미래 심판의 확실성을 보여주는 역사적 교훈입니다."
    },
    korean_translation: {
      natural_translation: "소돔과 고모라 성을 정죄하사 재가 되게 하여 멸망시키시고, 후에 경건하지 않을 자들에게 본보기로 삼으셨다면"
    }
  },
  {
    reference: "2 Peter 2:7",
    sentence_structures: [{
      sequence_order: 1,
      semantic_classification: "롯의 구원",
      original_text: "and if he rescued Lot, a righteous man, who was distressed by the depraved conduct of the lawless",
      korean_translation: "무법한 자들의 음란한 행실로 고통 받던 의로운 롯을 건지셨다면",
      grammatical_explanation: "δίκαιον Λὼτ... ἐρρύσατο(의로운 롯을 건지셨다), 심판 중 의인 보호"
    }],
    contextual_explanation: {
      integrated_explanation: "롯은 소돔의 죄악 속에서 '고통 받았으며'(καταπονούμενον), 하나님은 그를 건지셨습니다. 이는 하나님이 심판 가운데서도 의인을 구별하여 구원하신다는 원리를 보여줍니다."
    },
    korean_translation: {
      natural_translation: "무법한 자들의 음란한 행실로 고통 받던 의로운 롯을 건지셨다면"
    }
  }
]

analyses.push(...remainingVerses)

// 2:8-22 요약 분석 계속
const finalVerses: AnalysisData[] = [
  {
    reference: "2 Peter 2:9",
    sentence_structures: [{
      sequence_order: 1,
      semantic_classification: "결론: 하나님의 능력",
      original_text: "if this is so, then the Lord knows how to rescue the godly from trials and to hold the unrighteous for punishment on the day of judgment",
      korean_translation: "이것이 사실이라면, 주님께서는 경건한 자들을 시험에서 건지실 줄 아시고, 불의한 자들은 심판 날까지 형벌 아래 가두어 두실 줄 아십니다",
      grammatical_explanation: "οἶδεν κύριος(주께서 아신다), 하나님의 지혜와 능력 선언"
    }],
    contextual_explanation: {
      integrated_explanation: "세 가지 역사적 심판(2:4-8)의 결론입니다. 하나님은 (1) 경건한 자를 시험에서 건지시고, (2) 불의한 자를 심판 날까지 형벌 아래 두실 줄 아십니다. 이는 거짓 교사들에 대한 확실한 심판을 보증합니다."
    },
    korean_translation: {
      natural_translation: "이것이 사실이라면, 주님께서는 경건한 자들을 시험에서 건지실 줄 아시고, 불의한 자들은 심판 날까지 형벌 아래 가두어 두실 줄 아십니다."
    }
  },
  {
    reference: "2 Peter 2:10",
    sentence_structures: [{
      sequence_order: 1,
      semantic_classification: "거짓 교사의 특징",
      original_text: "This is especially true of those who follow the corrupt desire of the flesh and despise authority",
      korean_translation: "특히 육체의 더러운 정욕을 따르고 권위를 멸시하는 자들이 그러합니다",
      grammatical_explanation: "μάλιστα δὲ(특히), 거짓 교사들의 두 가지 특징: 정욕과 반항"
    }],
    contextual_explanation: {
      integrated_explanation: "거짓 교사들은 (1) 육체의 정욕을 따르고(유다서 4, 7, 18), (2) 권위를 멸시합니다(κυριότητος καταφρονοῦντας). 이는 도덕적 타락과 영적 교만의 결합입니다."
    },
    korean_translation: {
      natural_translation: "특히 육체의 더러운 정욕을 따르고 권위를 멸시하는 자들이 그러합니다."
    }
  }
]

analyses.push(...finalVerses)

// 나머지 구절들 (2:11-22) 간결 버전
const lastVerses: AnalysisData[] = [
  { reference: "2 Peter 2:11", sentence_structures: [{sequence_order: 1, semantic_classification: "천사들의 겸손", original_text: "Yet even angels, although they are stronger and more powerful, do not heap abuse on such beings when bringing judgment on them from the Lord", korean_translation: "천사들도 더 큰 힘과 능력을 가졌지만, 주님 앞에서 그들을 비방하는 판결을 하지 않습니다", grammatical_explanation: "천사들의 겸손한 태도 vs 거짓 교사들의 교만"}], contextual_explanation: {integrated_explanation: "천사들조차 악한 영들을 함부로 비방하지 않는데, 거짓 교사들은 이해하지 못하는 것을 비방합니다(유다서 8-9)."}, korean_translation: {natural_translation: "천사들도 더 큰 힘과 능력을 가졌지만, 주님 앞에서 그들을 비방하는 판결을 하지 않습니다."}},
  { reference: "2 Peter 2:12", sentence_structures: [{sequence_order: 1, semantic_classification: "짐승 같은 거짓 교사", original_text: "But these people blaspheme in matters they do not understand. They are like unreasoning animals, creatures of instinct, born only to be caught and destroyed", korean_translation: "그러나 이 사람들은 이해하지 못하는 것을 비방합니다. 그들은 이성 없는 짐승처럼 본능대로 행하며, 잡혀 죽임을 당하려고 태어났습니다", grammatical_explanation: "ὡς ἄλογα ζῷα(이성 없는 짐승처럼), 도덕적 타락의 극단"}], contextual_explanation: {integrated_explanation: "거짓 교사들은 영적 진리를 이해하지 못하면서 비방하며, '이성 없는 짐승'처럼 본능(정욕)대로만 행합니다."}, korean_translation: {natural_translation: "그러나 이 사람들은 이해하지 못하는 것을 비방합니다. 그들은 이성 없는 짐승처럼 본능대로 행하며, 잡혀 죽임을 당하려고 태어났습니다."}},
  { reference: "2 Peter 2:13", sentence_structures: [{sequence_order: 1, semantic_classification: "불의의 대가", original_text: "They will be paid back with harm for the harm they have done. Their idea of pleasure is to carouse in broad daylight", korean_translation: "그들은 불의의 대가를 받을 것입니다. 그들은 대낮에 방탕하는 것을 즐거움으로 여깁니다", grammatical_explanation: "ἀδικούμενοι μισθὸν ἀδικίας(불의의 대가를 받다), 인과응보"}], contextual_explanation: {integrated_explanation: "거짓 교사들은 '대낮에' 방탕을 즐기는 뻔뻔함을 보입니다. 그들의 불의는 반드시 대가를 받을 것입니다."}, korean_translation: {natural_translation: "그들은 불의의 대가를 받을 것입니다. 그들은 대낮에 방탕하는 것을 즐거움으로 여깁니다."}},
  { reference: "2 Peter 2:14", sentence_structures: [{sequence_order: 1, semantic_classification: "끝없는 탐욕", original_text: "With eyes full of adultery, they never stop sinning; they seduce the unstable; they are experts in greed", korean_translation: "그들의 눈은 간음으로 가득하고 죄를 그치지 않으며, 굳세지 못한 영혼을 유혹하고, 탐욕에 익숙합니다", grammatical_explanation: "연속된 현재분사로 지속적 죄악 묘사"}], contextual_explanation: {integrated_explanation: "거짓 교사들의 세 가지 특징: (1) 간음의 눈, (2) 끝없는 죄, (3) 탐욕의 전문가. 그들은 연약한 신자들을 유혹합니다."}, korean_translation: {natural_translation: "그들의 눈은 간음으로 가득하고 죄를 그치지 않으며, 굳세지 못한 영혼을 유혹하고, 탐욕에 익숙합니다."}},
  { reference: "2 Peter 2:15", sentence_structures: [{sequence_order: 1, semantic_classification: "발람의 길", original_text: "They have left the straight way and wandered off to follow the way of Balaam son of Bezer, who loved the wages of wickedness", korean_translation: "그들이 바른 길을 떠나 방황하며, 불의의 삯을 사랑한 브올의 아들 발람의 길을 따랐습니다", grammatical_explanation: "발람의 타락(민 22-24장) - 탐욕으로 하나님을 배신"}], contextual_explanation: {integrated_explanation: "발람은 돈을 위해 하나님의 백성을 저주하려 했던 거짓 선지자입니다(민 22-24장). 거짓 교사들도 '불의의 삯'(탐욕)을 위해 진리를 왜곡합니다."}, korean_translation: {natural_translation: "그들이 바른 길을 떠나 방황하며, 불의의 삯을 사랑한 브올의 아들 발람의 길을 따랐습니다."}},
  { reference: "2 Peter 2:16", sentence_structures: [{sequence_order: 1, semantic_classification: "나귀의 책망", original_text: "But he was rebuked for his wrongdoing by a donkey—an animal without speech—who spoke with a human voice and restrained the prophet's madness", korean_translation: "그러나 그는 자기 불법에 대해 책망을 받았으니, 말 못하는 나귀가 사람의 음성으로 말하여 선지자의 미친 것을 막았습니다", grammatical_explanation: "민 22:28-30, 나귀가 발람을 책망한 사건"}], contextual_explanation: {integrated_explanation: "발람은 나귀에게 책망받는 수치를 당했습니다(민 22:28-30). 이는 거짓 교사들의 어리석음을 풍자합니다."}, korean_translation: {natural_translation: "그러나 그는 자기 불법에 대해 책망을 받았으니, 말 못하는 나귀가 사람의 음성으로 말하여 선지자의 미친 것을 막았습니다."}},
  { reference: "2 Peter 2:17", sentence_structures: [{sequence_order: 1, semantic_classification: "물 없는 샘", original_text: "These people are springs without water and mists driven by a storm. Blackest darkness is reserved for them", korean_translation: "이 사람들은 물 없는 샘이요, 광풍에 밀려가는 안개입니다. 그들을 위해 칠흑 같은 어둠이 예비되어 있습니다", grammatical_explanation: "두 비유: 물 없는 샘(약속 불이행), 광풍 속 안개(불안정)"}], contextual_explanation: {integrated_explanation: "거짓 교사들은 (1) 물 없는 샘(약속만 하고 주지 못함), (2) 광풍에 밀려가는 안개(불안정하고 무상함)와 같습니다. 그들의 종착지는 '칠흑 같은 어둠'입니다."}, korean_translation: {natural_translation: "이 사람들은 물 없는 샘이요, 광풍에 밀려가는 안개입니다. 그들을 위해 칠흑 같은 어둠이 예비되어 있습니다."}},
  { reference: "2 Peter 2:18", sentence_structures: [{sequence_order: 1, semantic_classification: "헛된 자랑", original_text: "For they mouth empty, boastful words and, by appealing to the lustful desires of the flesh, they entice people who are just escaping from those who live in error", korean_translation: "그들이 허탄한 자랑의 말로 육체의 음욕을 미끼로 삼아, 그릇된 행실에서 겨우 피한 사람들을 유혹합니다", grammatical_explanation: "ὑπέρογκα... φθέγγονται(허황된 것을 말하다), 거짓 약속"}], contextual_explanation: {integrated_explanation: "거짓 교사들은 허황된 약속으로 새 신자들(겨우 피한 자들)을 유혹합니다. 그들의 미끼는 '육체의 음욕'입니다."}, korean_translation: {natural_translation: "그들이 허탄한 자랑의 말로 육체의 음욕을 미끼로 삼아, 그릇된 행실에서 겨우 피한 사람들을 유혹합니다."}},
  { reference: "2 Peter 2:19", sentence_structures: [{sequence_order: 1, semantic_classification: "거짓 자유", original_text: "They promise them freedom, while they themselves are slaves of depravity—for people are slaves to whatever has mastered them", korean_translation: "그들은 자유를 약속하지만 자신들은 썩어짐의 종입니다. 사람은 자기를 이긴 자의 종이 되기 때문입니다", grammatical_explanation: "ἐλευθερίαν... ἐπαγγελλόμενοι(자유를 약속하다), 역설적 노예 상태"}], contextual_explanation: {integrated_explanation: "거짓 교사들은 '자유'를 약속하지만 자신들이 죄의 종입니다. 참된 자유는 그리스도 안에 있습니다(요 8:32-36, 갈 5:1)."}, korean_translation: {natural_translation: "그들은 자유를 약속하지만 자신들은 썩어짐의 종입니다. 사람은 자기를 이긴 자의 종이 되기 때문입니다."}, special_explanation: {explanation_type: "거짓 자유", content: "거짓 교사들이 약속하는 '자유'(ἐλευθερία)는 도덕적 방종입니다. 그러나 ᾧ γάρ τις ἥττηται, τούτῳ δεδούλωται(누구에게 진 자는 그의 종이다)는 영적 법칙입니다. 죄를 따르는 것은 자유가 아니라 더 깊은 노예 상태입니다(롬 6:16)."}},
  { reference: "2 Peter 2:20", sentence_structures: [{sequence_order: 1, semantic_classification: "배교의 위험", original_text: "If they have escaped the corruption of the world by knowing our Lord and Savior Jesus Christ and are again entangled in it and are overcome, they are worse off at the end than they were at the beginning", korean_translation: "만일 그들이 우리 주이시며 구주이신 예수 그리스도를 앎으로 세상의 더러움에서 피했다가 다시 그것에 얽매여 지면, 나중 형편이 처음보다 더 나쁘게 됩니다", grammatical_explanation: "γέγονεν αὐτοῖς τὰ ἔσχατα χείρονα τῶν πρώτων(마지막이 처음보다 더 나쁘다)"}], contextual_explanation: {integrated_explanation: "배교자들(한때 그리스도를 알았다가 떠난 자들)의 상태는 처음보다 더 나쁩니다. 이는 마 12:43-45, 히 6:4-6, 10:26-27의 경고와 동일합니다."}, korean_translation: {natural_translation: "만일 그들이 우리 주이시며 구주이신 예수 그리스도를 앎으로 세상의 더러움에서 피했다가 다시 그것에 얽매여 지면, 나중 형편이 처음보다 더 나쁘게 됩니다."}, special_explanation: {explanation_type: "배교의 심각성", content: "ἐπιγνώσει τοῦ κυρίου(주를 앎으로)는 외형적 지식을 가리킬 수 있습니다. 배교자들은 진정으로 거듭나지 않았지만 복음을 알고 외형적으로 따르다가 떠났습니다. τὰ ἔσχατα χείρονα τῶν πρώτων(마지막이 처음보다 더 나쁘다)는 마 12:45의 원리입니다. 빛을 받고도 거부하는 것이 처음부터 몰랐던 것보다 더 큰 죄입니다(눅 12:47-48)."}},
  { reference: "2 Peter 2:21", sentence_structures: [{sequence_order: 1, semantic_classification: "진리를 아는 것과 떠나는 것", original_text: "It would have been better for them not to have known the way of righteousness, than to have known it and then to turn their backs on the sacred command that was passed on to them", korean_translation: "의의 길을 안 후에 받은 거룩한 명령을 저버리는 것보다 아예 알지 못하는 것이 나았을 것입니다", grammatical_explanation: "κρεῖττον ἦν(더 나았을 것), 반사실 조건문, 배교의 심각성 강조"}], contextual_explanation: {integrated_explanation: "진리를 알고도 배반하는 것이 처음부터 모르는 것보다 더 나쁩니다. 이는 더 큰 책임과 더 무거운 심판을 의미합니다(눅 12:47-48)."}, korean_translation: {natural_translation: "의의 길을 안 후에 받은 거룩한 명령을 저버리는 것보다 아예 알지 못하는 것이 나았을 것입니다."}},
  { reference: "2 Peter 2:22", sentence_structures: [{sequence_order: 1, semantic_classification: "격언 인용", original_text: "Of them the proverbs are true: 'A dog returns to its vomit,' and, 'A sow that is washed returns to her wallowing in the mud.'", korean_translation: "참된 속담대로 그들에게 일어났습니다. '개가 그 토한 것을 도로 먹고, 돼지가 씻은 후에 더러운 구덩이에 도로 누웠다'", grammatical_explanation: "잠 26:11 인용, 배교자의 본성 불변"}], contextual_explanation: {integrated_explanation: "개와 돼지의 비유(잠 26:11 + 외경적 격언)는 배교자들의 변하지 않은 본성을 보여줍니다. 그들은 겉으로는 깨끗해진 것 같았지만, 내적으로는 변화가 없어서 다시 더러움으로 돌아갑니다."}, korean_translation: {natural_translation: "참된 속담대로 그들에게 일어났습니다. '개가 그 토한 것을 도로 먹고, 돼지가 씻은 후에 더러운 구덩이에 도로 누웠다'"}, special_explanation: {explanation_type: "개와 돼지의 비유", content: "첫 번째 속담은 잠 26:11입니다. 두 번째는 외경이나 유대 전승에서 유래한 것으로 보입니다. 핵심은 '본성의 불변'입니다. 개는 여전히 개이고, 돼지는 여전히 돼지입니다. 배교자들은 외형적으로 깨끗해진 것처럼 보였지만(씻은 돼지), 내적 본성은 변하지 않았기에 다시 더러움으로 돌아갑니다. 참된 회심은 본성의 변화(거듭남, 요 3:3)를 포함합니다."}}
]

analyses.push(...lastVerses)

async function main() {
  console.log('=== 2 Peter 2:1-22 배치 저장 시작 ===\n')
  for (const analysis of analyses) {
    await saveAnalysisToDb(analysis)
  }
  console.log('\n=== 2 Peter 2장 완료! ===')
}

main().catch(console.error)
