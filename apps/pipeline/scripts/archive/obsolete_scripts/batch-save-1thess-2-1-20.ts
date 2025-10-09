import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db';

const analyses: AnalysisData[] = [
  {
    reference: "1 Thessalonians 2:1",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "사역의 효과성 확인",
        original_text: "You know, brothers and sisters, that our visit to you was not without results",
        korean_translation: "형제들아 너희가 아는 바와 같이 우리가 너희 가운데 들어간 것이 헛되지 아니한 줄을"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "바울은 1장에서 감사한 내용을 2장에서 자세히 설명합니다. '헛되지 않았다(not without results)'는 복음이 능력과 성령과 확신으로 전해졌다는 1:5의 증거입니다."
    },
    korean_translation: {
      natural_translation: "형제자매 여러분, 우리가 여러분에게 간 것이 헛되지 않았다는 것을 여러분 자신이 알고 있습니다."
    }
  },
  {
    reference: "1 Thessalonians 2:2",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "고난 중의 담대함",
        original_text: "We had previously suffered and been treated outrageously in Philippi, as you know, but with the help of our God we dared to tell you his gospel in the face of strong opposition",
        korean_translation: "우리가 먼저 빌립보에서 고난과 능욕을 당한 것 같이 너희가 아는 바와 같이 우리 하나님을 힘입어 많은 싸움 중에 하나님의 복음을 너희에게 말하였노라"
      }
    ],
    vocabulary: [
      {
        word: "outrageously",
        ipa_pronunciation: "/aʊtˈreɪdʒəsli/",
        korean_pronunciation: "아웃레이저슬리",
        definition_korean: "모욕적으로 (ὑβρίζω, 능욕당함)"
      },
      {
        word: "dared",
        ipa_pronunciation: "/dɛərd/",
        korean_pronunciation: "데어드",
        definition_korean: "담대히 하다 (παρρησιάζομαι)"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 빌립보에서 매질당하고 옥에 갇혔습니다(행 16:19-24). 그러나 빌립보에서 풀려난 직후 데살로니가로 가서 '하나님을 힘입어' 담대히 복음을 전했습니다. 이것은 진정한 사도적 용기입니다.",
      cross_references: ["행 16:19-40 (빌립보 투옥)", "행 17:1-9 (데살로니가 전도)"]
    },
    korean_translation: {
      natural_translation: "여러분이 아는 것처럼, 우리가 빌립보에서 고난과 모욕을 당했지만, 우리는 하나님의 도우심으로 심한 반대에도 불구하고 담대히 하나님의 복음을 여러분에게 전했습니다."
    },
    special_explanation: {
      explanation_type: "사도적 담대함",
      content: "παρρησία(담대함)는 신약에서 핵심 덕목입니다. 바울은 빌립보에서의 고난에도 불구하고 데살로니가에서 즉시 복음을 전했습니다. 이것은 '하나님을 힘입어(ἐν τῷ θεῷ ἡμῶν)' 가능한 초자연적 용기입니다(행 4:13, 29, 31 참조)."
    }
  },
  {
    reference: "1 Thessalonians 2:3-4",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "순수한 동기 변호",
        original_text: "For the appeal we make does not spring from error or impure motives, nor are we trying to trick you. On the contrary, we speak as those approved by God to be entrusted with the gospel",
        korean_translation: "우리의 권면은 간사함이나 부정에서 나지 않고 또 속임수로 하지 아니하노라 오직 하나님께 옳게 여기심을 입어 복음을 위탁받았으니"
      },
      {
        sequence_order: 2,
        semantic_classification: "하나님 중심의 사역",
        original_text: "We are not trying to please people but God, who tests our hearts",
        korean_translation: "사람에게 기쁨이 아니요 오직 우리 마음을 감찰하시는 하나님을 기쁘시게 하려 함이라"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "바울은 세 가지 부정(간사/부정/속임수)과 두 가지 긍정(하나님께 옳게 여기심/하나님을 기쁘시게 함)으로 자신의 동기를 변호합니다. '마음을 감찰하시는 하나님'은 순수성의 궁극적 심판자입니다."
    },
    korean_translation: {
      natural_translation: "우리의 권면은 잘못이나 불순한 동기나 속임수에서 나온 것이 아닙니다. 오히려 하나님께 인정받아 복음을 맡은 사람으로 말합니다. 우리는 사람을 기쁘게 하려는 것이 아니라 우리 마음을 살피시는 하나님을 기쁘시게 하려는 것입니다."
    }
  },
  {
    reference: "1 Thessalonians 2:5-6",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "아첨과 탐욕의 거부",
        original_text: "You know we never used flattery, nor did we put on a mask to cover up greed—God is our witness. We were not looking for praise from people, not from you or anyone else",
        korean_translation: "너희가 아는 바와 같이 우리가 아무 때에도 아첨하는 말이나 탐심의 탈을 쓰지 아니한 것을 하나님이 증언하시느니라 또한 우리가 너희에게서나 다른 이에게서나 사람에게서는 영광을 구하지 아니하였노라"
      }
    ],
    vocabulary: [
      {
        word: "flattery",
        ipa_pronunciation: "/ˈflætəri/",
        korean_pronunciation: "플래터리",
        definition_korean: "아첨 (κολακεία)"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 거짓 교사들과 달리 (1) 아첨하지 않고, (2) 탐욕스럽지 않으며, (3) 사람의 영광을 구하지 않았습니다. 이것은 진정한 사도의 표지입니다."
    },
    korean_translation: {
      natural_translation: "여러분이 아는 것처럼, 우리는 결코 아첨하는 말을 사용하지 않았고, 탐욕을 가리는 가면을 쓰지도 않았습니다. 하나님이 증인이십니다. 우리는 여러분에게서나 다른 누구에게서나 사람의 칭찬을 구하지 않았습니다."
    }
  },
  {
    reference: "1 Thessalonians 2:7-8",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "어머니 같은 사랑",
        original_text: "As apostles of Christ we could have asserted our authority. Instead, we were like young children among you. Just as a nursing mother cares for her children, so we cared for you. Because we loved you so much, we were delighted to share with you not only the gospel of God but our lives as well",
        korean_translation: "도리어 너희 가운데서 유순한 자가 되어 유모가 자기 자녀를 기름과 같이 하였으니 우리가 이같이 너희를 사모하여 하나님의 복음뿐 아니라 우리의 목숨까지 너희에게 주기를 기뻐함은 너희가 우리의 사랑하는 자 됨이라"
      }
    ],
    vocabulary: [
      {
        word: "nursing mother",
        ipa_pronunciation: "/ˈnɜːrsɪŋ ˈmʌðər/",
        korean_pronunciation: "너싱 마더",
        definition_korean: "젖먹이는 어머니 (τροφός)"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 권위를 주장할 수 있었지만(사도로서) 대신 '젖먹이는 어머니'처럼 부드럽고 희생적으로 섬겼습니다. 복음뿐 아니라 '우리의 목숨까지' 나누려 했습니다."
    },
    korean_translation: {
      natural_translation: "그리스도의 사도로서 권위를 내세울 수도 있었지만, 우리는 여러분 가운데서 어린아이처럼 부드러웠습니다. 젖먹이는 어머니가 자기 자녀를 돌보듯이 우리도 여러분을 돌보았습니다. 여러분을 매우 사랑했기에, 하나님의 복음뿐 아니라 우리의 생명까지도 여러분과 나누기를 기뻐했습니다."
    },
    special_explanation: {
      explanation_type: "목회적 사랑의 두 이미지",
      content: "바울은 자신의 목회를 두 가지 부모 이미지로 묘사합니다: (1) 젖먹이는 어머니(2:7-8) - 부드러움과 양육, (2) 아버지(2:11-12) - 권면과 격려. 이것은 균형 잡힌 목회 사역의 모델입니다."
    }
  },
  // 간결성을 위해 나머지 구절들은 핵심만 간략히 저장
  {
    reference: "1 Thessalonians 2:9",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "자립적 사역",
        original_text: "Surely you remember, brothers and sisters, our toil and hardship; we worked night and day in order not to be a burden to anyone while we preached the gospel of God to you",
        korean_translation: "형제들아 우리의 수고와 애씀을 너희가 기억하리니 너희 아무에게도 누를 끼치지 아니하려고 밤낮으로 일하면서 너희에게 하나님의 복음을 전파하였노라"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "바울은 데살로니가에서 '밤낮으로 일하면서' 복음을 전했습니다(행 18:3 - 천막 제조). 성도들에게 재정적 부담을 주지 않기 위함이었습니다."
    },
    korean_translation: {
      natural_translation: "형제자매 여러분, 우리의 수고와 고된 노동을 기억할 것입니다. 여러분에게 짐이 되지 않으려고 밤낮으로 일하면서 하나님의 복음을 전했습니다."
    }
  },
  {
    reference: "1 Thessalonians 2:10-12",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "거룩한 행실",
        original_text: "You are witnesses, and so is God, of how holy, righteous and blameless we were among you who believed. For you know that we dealt with each of you as a father deals with his own children, encouraging, comforting and urging you to live lives worthy of God",
        korean_translation: "우리가 너희 믿는 자들을 대하여 어떻게 거룩하고 옳고 흠 없이 행하였는지에 대하여 너희가 증인이요 하나님도 그러하시니 너희도 아는 바와 같이 우리가 너희 각 사람에게 아버지가 자기 자녀에게 하듯 권면하고 위로하고 경계하노니"
      },
      {
        sequence_order: 2,
        semantic_classification: "하나님 나라의 부르심",
        original_text: "who calls you into his kingdom and glory",
        korean_translation: "이는 너희를 자기 나라와 영광에 이르게 하시는 하나님께 합당히 행하게 하려 함이라"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "바울은 어머니(2:7-8)에 이어 이제 '아버지' 이미지를 사용합니다. 아버지는 (1) 권면하고, (2) 위로하며, (3) 경계합니다. 목표는 '하나님 나라와 영광에 합당한 삶'입니다."
    },
    korean_translation: {
      natural_translation: "우리가 여러분 믿는 이들을 대할 때 얼마나 거룩하고 의롭고 흠 없이 행했는지 여러분과 하나님이 증인이십니다. 아버지가 자기 자녀에게 하듯이, 우리가 여러분 각자를 권면하고 위로하고 촉구하여 여러분을 자기 나라와 영광으로 부르시는 하나님께 합당하게 살도록 했습니다."
    }
  },
  {
    reference: "1 Thessalonians 2:13",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "말씀의 본질 - 하나님의 말씀",
        original_text: "And we also thank God continually because, when you received the word of God, which you heard from us, you accepted it not as a human word, but as it actually is, the word of God, which is indeed at work in you who believe",
        korean_translation: "이러므로 우리가 하나님께 끊임없이 감사함은 너희가 우리에게 들은 바 하나님의 말씀을 받을 때에 사람의 말로 받지 아니하고 하나님의 말씀으로 받음이니 진실로 그러하도다 이 말씀이 또한 너희 믿는 자 가운데서 역사하느니라"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "데살로니가 성도들은 바울의 가르침을 '사람의 말'이 아니라 '하나님의 말씀'으로 받았습니다. 이 말씀은 믿는 자들 안에서 '역사하고(ἐνεργεῖται)' 있습니다."
    },
    korean_translation: {
      natural_translation: "그래서 우리도 하나님께 끊임없이 감사합니다. 여러분이 우리에게서 들은 하나님의 말씀을 받을 때, 사람의 말로 받지 않고 실제로 그것이 무엇인지 대로 하나님의 말씀으로 받았기 때문입니다. 이 말씀은 여러분 믿는 이들 안에서 실제로 역사하고 있습니다."
    },
    special_explanation: {
      explanation_type: "성경 영감과 권위",
      content: "이 구절은 사도적 가르침의 권위를 보여줍니다. 데살로니가 성도들이 바울의 말을 '하나님의 말씀'으로 받은 것은 (1) 사도적 영감, (2) 성령의 역사, (3) 말씀의 능력을 증명합니다. ἐνεργεῖται(역사하다)는 현재형으로 지속적인 변화의 능력을 나타냅니다."
    }
  },
  {
    reference: "1 Thessalonians 2:14-16",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "유대와 데살로니가의 평행한 고난",
        original_text: "For you, brothers and sisters, became imitators of God's churches in Judea, which are in Christ Jesus: You suffered from your own people the same things those churches suffered from the Jews who killed the Lord Jesus and the prophets and also drove us out",
        korean_translation: "형제들아 너희가 그리스도 예수 안에서 유대에 있는 하나님의 교회들을 본받은 자 되었으니 그들이 유대인들에게 고난을 받음과 같이 너희도 너희 동족에게서 동일한 고난을 받았느니라"
      },
      {
        sequence_order: 2,
        semantic_classification: "유대인의 죄와 하나님의 진노",
        original_text: "They displease God and are hostile to everyone in their effort to keep us from speaking to the Gentiles so that they may be saved. In this way they always heap up their sins to the limit. The wrath of God has come upon them at last",
        korean_translation: "유대인은 주 예수와 선지자들을 죽이고 우리를 쫓아내고 하나님을 기쁘시게 하지 아니하고 모든 사람에게 대적이 되어 우리가 이방인에게 말하여 구원받게 함을 그들이 금하니 자기 죄를 채우매 진노가 끝까지 그들에게 임하였느니라"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "데살로니가 교회는 유대의 교회들처럼 동족에게서 핍박받았습니다. 바울은 유대인들의 (1) 예수 살해, (2) 선지자 살해, (3) 복음 방해를 언급하며, 하나님의 진노가 임했다고 선언합니다.",
      cross_references: ["행 17:5-9 (데살로니가 박해)", "마 23:29-36 (예수의 예루살렘 책망)"]
    },
    korean_translation: {
      natural_translation: "형제자매 여러분, 여러분은 그리스도 예수 안에 있는 유대의 하나님 교회들을 본받는 자가 되었습니다. 그들이 유대인들에게서 고난을 받은 것처럼, 여러분도 자기 동족에게서 같은 고난을 받았습니다. 유대인들은 주 예수와 선지자들을 죽이고 우리를 쫓아냈습니다. 그들은 하나님을 기쁘시게 하지 않고 모든 사람에게 적대적입니다. 이방인들이 구원받도록 우리가 말하는 것을 막으려 합니다. 이렇게 그들은 항상 자기 죄를 채웁니다. 하나님의 진노가 마침내 그들에게 임했습니다."
    }
  },
  {
    reference: "1 Thessalonians 2:17-18",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "재방문 열망",
        original_text: "But, brothers and sisters, when we were orphaned by being separated from you for a short time (in person, not in thought), out of our intense longing we made every effort to see you. For we wanted to come to you—certainly I, Paul, did, again and again—but Satan blocked our way",
        korean_translation: "형제들아 우리가 잠시 너희를 떠난 것은 얼굴이요 마음은 아니니 너희 얼굴 보기를 열정으로 더욱 힘썼노라 그러므로 나 바울은 한 번뿐 아니라 두 번이나 너희에게 가고자 하였으나 사탄이 우리를 막았도다"
      }
    ],
    vocabulary: [
      {
        word: "orphaned",
        ipa_pronunciation: "/ˈɔːrfənd/",
        korean_pronunciation: "오펀드",
        definition_korean: "고아가 되다 (ἀπορφανίζω)"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 데살로니가를 떠난 것을 '고아가 된 것'(orphaned)처럼 느꼈고, '한 번뿐 아니라 두 번이나' 재방문을 시도했지만 '사탄이 막았습니다'. 이것은 영적 전쟁의 현실을 보여줍니다."
    },
    korean_translation: {
      natural_translation: "형제자매 여러분, 우리가 여러분과 잠시 떨어져 있게 되었을 때(몸은 떨어졌지만 마음은 아닙니다), 여러분을 보고 싶은 강렬한 열망으로 모든 노력을 다했습니다. 우리가 여러분에게 가기를 원했습니다. 특히 나 바울은 한 번뿐 아니라 여러 번 가려고 했지만, 사탄이 우리를 막았습니다."
    }
  },
  {
    reference: "1 Thessalonians 2:19-20",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "재림의 소망과 기쁨",
        original_text: "For what is our hope, our joy, or the crown in which we will glory in the presence of our Lord Jesus when he comes? Is it not you? Indeed, you are our glory and joy",
        korean_translation: "우리의 소망이나 기쁨이나 자랑의 면류관이 무엇이냐 그가 강림하실 때 우리 주 예수 앞에 너희가 아니냐 너희는 우리의 영광이요 기쁨이니라"
      }
    ],
    vocabulary: [
      {
        word: "crown",
        ipa_pronunciation: "/kraʊn/",
        korean_pronunciation: "크라운",
        definition_korean: "면류관 (στέφανος, 승리의 관)"
      }
    ],
    contextual_explanation: {
      integrated_explanation: "바울은 그리스도의 재림 때 데살로니가 성도들이 자신의 '소망, 기쁨, 자랑의 면류관'이 될 것이라고 말합니다. 이것은 목회자의 궁극적 보상입니다."
    },
    korean_translation: {
      natural_translation: "우리 주 예수께서 오실 때 그분 앞에서 우리의 소망이나 기쁨이나 자랑의 면류관이 무엇이겠습니까? 바로 여러분이 아니겠습니까? 참으로 여러분은 우리의 영광이요 기쁨입니다."
    },
    special_explanation: {
      explanation_type: "재림과 목회적 보상",
      content: "각 장이 재림으로 끝나는 1 Thessalonians의 구조: 1:10 (재림 대망), 2:19 (재림 시의 기쁨), 3:13 (재림의 거룩함), 4:13-18 (재림의 순서), 5:23 (재림의 보전). 바울의 '면류관(στέφανος)'은 왕관이 아니라 경기 우승자의 월계관으로, 성도들의 구원이 목회자의 최고 보상임을 보여줍니다."
    }
  }
];

async function main() {
  console.log('📖 1 Thessalonians 2:1-20 분석 시작...');

  for (const analysis of analyses) {
    try {
      await saveAnalysisToDb(analysis);
      console.log(`✅ ${analysis.reference} 저장 완료`);
      await new Promise(resolve => setTimeout(resolve, 3000));
    } catch (error) {
      console.error(`❌ ${analysis.reference} 저장 실패:`, error);
    }
  }

  console.log('✅ 1 Thessalonians 2장 전체 완료!');
}

main();
