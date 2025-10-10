import { saveAnalysisToDb, AnalysisData } from './save-analysis-to-db';

const analyses: AnalysisData[] = [
  {
    reference: "1 Timothy 1:1",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "서신 인사",
        original_text: "Paul, an apostle of Christ Jesus by the command of God our Savior and of Christ Jesus our hope",
        korean_translation: "하나님 우리 구주와 우리의 소망이신 그리스도 예수의 명령을 따라 그리스도 예수의 사도 된 바울은"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "바울은 자신의 사도직이 '하나님의 명령(command)'에 따른 것임을 강조합니다. '하나님 우리 구주'는 구약적 표현이고(사 43:3), '그리스도 예수 우리의 소망'은 재림 대망을 나타냅니다."
    },
    korean_translation: {
      natural_translation: "하나님 우리 구주와 우리의 소망이신 그리스도 예수의 명령을 따라 그리스도 예수의 사도 된 바울은"
    }
  },
  {
    reference: "1 Timothy 1:2",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "디모데에게 인사",
        original_text: "To Timothy my true son in the faith: Grace, mercy and peace from God the Father and Christ Jesus our Lord",
        korean_translation: "믿음 안에서 참 아들 된 디모데에게 편지하노니 하나님 아버지와 그리스도 예수 우리 주께로부터 은혜와 긍휼과 평강이 네게 있을지어다"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "디모데는 바울의 '믿음 안에서 참 아들'입니다. 바울이 디모데를 회심시켰거나(행 16:1-3), 영적 아버지 역할을 했습니다. '은혜와 긍휼과 평강'은 목회 서신(딤전/딤후/딛)의 특징적 인사입니다."
    },
    korean_translation: {
      natural_translation: "믿음 안에서 참 아들 된 디모데에게 편지하노니 하나님 아버지와 그리스도 예수 우리 주께로부터 은혜와 긍휼과 평강이 네게 있을지어다."
    }
  },
  {
    reference: "1 Timothy 1:3",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "디모데의 사명 - 거짓 교리 저지",
        original_text: "As I urged you when I went into Macedonia, stay there in Ephesus so that you may command certain people not to teach false doctrines any longer",
        korean_translation: "내가 마게도냐로 갈 때에 너를 권하여 에베소에 머물라 한 것은 어떤 사람들을 명하여 다른 교훈을 가르치지 말며"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "바울은 디모데를 에베소에 남겨두고 마케도니아로 갔습니다. 디모데의 주요 사명은 '거짓 교사들을 막는 것'입니다. 에베소 교회는 거짓 교사 문제가 심각했습니다(행 20:29-30)."
    },
    korean_translation: {
      natural_translation: "내가 마케도니아로 갈 때 너에게 권한 것처럼 에베소에 머물러서 어떤 사람들에게 다른 교훈을 가르치지 말라고 명하라."
    }
  },
  {
    reference: "1 Timothy 1:4",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "거짓 교리의 내용",
        original_text: "or to devote themselves to myths and endless genealogies. Such things promote controversial speculations rather than advancing God's work—which is by faith",
        korean_translation: "신화와 끝없는 족보에 몰두하지 말게 하라 이런 것은 믿음 안에 있는 하나님의 경륜을 이룸보다 도리어 변론을 내는 것이라"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "거짓 교사들은 '신화'와 '끝없는 족보'를 가르쳤습니다. 이것은 영지주의적 추측이나 유대교적 족보 연구로 추정됩니다. 이런 것들은 '변론(speculations)'만 일으키고 '하나님의 경륜(God's work)'을 이루지 못합니다."
    },
    korean_translation: {
      natural_translation: "신화와 끝없는 족보에 몰두하지 말게 하라. 이런 것들은 논쟁만 일으킬 뿐 믿음으로 이루는 하나님의 일을 진전시키지 못한다."
    }
  },
  {
    reference: "1 Timothy 1:5",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "명령의 목적 - 사랑",
        original_text: "The goal of this command is love, which comes from a pure heart and a good conscience and a sincere faith",
        korean_translation: "이 교훈의 목적은 청결한 마음과 선한 양심과 거짓이 없는 믿음에서 나오는 사랑이거늘"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "바울의 명령(거짓 교사를 막으라)의 궁극적 목적은 '사랑'입니다. 이 사랑은 세 가지 원천에서 나옵니다: (1) 청결한 마음, (2) 선한 양심, (3) 거짓 없는 믿음."
    },
    korean_translation: {
      natural_translation: "이 명령의 목적은 청결한 마음과 선한 양심과 거짓 없는 믿음에서 나오는 사랑입니다."
    },
    special_explanation: {
      explanation_type: "사랑의 세 가지 원천",
      content: "진정한 기독교 사랑(ἀγάπη)은 세 가지에서 나옵니다: (1) καθαρὰ καρδία(청결한 마음) - 동기의 순수성, (2) συνείδησις ἀγαθή(선한 양심) - 도덕적 무결성, (3) πίστις ἀνυπόκριτος(거짓 없는 믿음) - 진실한 신뢰. 이것은 거짓 교사들의 추측적 논쟁과 대비됩니다."
    }
  },
  // 간결성을 위해 나머지 구절들은 핵심만
  {
    reference: "1 Timothy 1:6",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "거짓 교사의 특징",
        original_text: "Some have departed from these and have turned to meaningless talk",
        korean_translation: "사람들이 이에서 벗어나 헛된 말에 빠져"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "거짓 교사들은 사랑의 목적에서 '벗어나' '헛된 말(meaningless talk, ματαιολογία)'에 빠졌습니다."
    },
    korean_translation: {
      natural_translation: "어떤 사람들이 이것에서 벗어나 헛된 논의로 빠졌습니다."
    }
  },
  {
    reference: "1 Timothy 1:7",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "율법 교사의 무지",
        original_text: "They want to be teachers of the law, but they do not know what they are talking about or what they so confidently affirm",
        korean_translation: "율법의 선생이 되려 하나 자기가 말하는 것이나 자기가 확증하는 것도 깨닫지 못하는도다"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "거짓 교사들은 '율법의 선생(teachers of the law)'이 되려 하지만, 실제로는 자신이 말하는 것도 이해하지 못합니다."
    },
    korean_translation: {
      natural_translation: "그들은 율법 교사가 되기를 원하지만, 자기가 말하는 것이나 확신하는 것도 깨닫지 못합니다."
    }
  },
  {
    reference: "1 Timothy 1:8",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "율법의 올바른 용도",
        original_text: "We know that the law is good if one uses it properly",
        korean_translation: "그러나 사람이 율법을 법적으로만 쓰면 율법은 선한 것인 줄 우리는 아노라"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "율법 자체는 '선합니다(good)'. 문제는 '제대로 사용하는가(uses it properly)'입니다."
    },
    korean_translation: {
      natural_translation: "우리는 율법이 선한 것임을 압니다. 다만 올바르게 사용한다면 말입니다."
    }
  },
  {
    reference: "1 Timothy 1:9-10",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "율법의 대상 - 불의한 자들",
        original_text: "We also know that the law is made not for the righteous but for lawbreakers and rebels, the ungodly and sinful, the unholy and irreligious, for those who kill their fathers or mothers, for murderers, for the sexually immoral, for those practicing homosexuality, for slave traders and liars and perjurers—and for whatever else is contrary to the sound doctrine",
        korean_translation: "알 것은 이것이니 율법은 옳은 사람을 위하여 세운 것이 아니요 오직 불법한 자와 복종하지 아니하는 자며 경건하지 아니한 자와 죄인이며 거룩하지 아니한 자와 망령된 자며 아버지를 치는 자와 어머니를 치는 자며 살인하는 자며 음행하는 자며 남색하는 자며 인신매매를 하는 자며 거짓말하는 자며 거짓 맹세하는 자와 기타 바른 교훈을 거스르는 모든 것을 위함이니"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "율법은 '의로운 자'를 위한 것이 아니라 '불의한 자들'을 위한 것입니다. 바울은 십계명의 순서(1-5계명: 부모 치는 자, 6계명: 살인, 7계명: 음행/남색, 9계명: 거짓말/거짓 맹세)를 따라 나열합니다."
    },
    korean_translation: {
      natural_translation: "우리는 또한 율법이 의로운 사람을 위한 것이 아니라 불법적인 자와 반역하는 자, 경건하지 않은 자와 죄인, 거룩하지 않은 자와 속된 자, 아버지나 어머니를 죽이는 자, 살인자, 음행하는 자, 동성애자, 인신매매자, 거짓말쟁이와 위증자, 그리고 건전한 교훈에 반대되는 모든 것을 위한 것임을 압니다."
    }
  },
  {
    reference: "1 Timothy 1:11",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "영광의 복음",
        original_text: "that conforms to the gospel concerning the glory of the blessed God, which he entrusted to me",
        korean_translation: "이 교훈은 나에게 맡기신 바 복되신 하나님의 영광의 복음을 따름이니라"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "'바른 교훈'은 '복되신 하나님의 영광의 복음'에 일치합니다. 이 복음은 바울에게 '맡겨진' 것입니다."
    },
    korean_translation: {
      natural_translation: "이 교훈은 복되신 하나님의 영광에 관한 복음에 일치하는 것이며, 그분이 나에게 맡기신 것입니다."
    }
  },
  {
    reference: "1 Timothy 1:12",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "바울의 감사",
        original_text: "I thank Christ Jesus our Lord, who has given me strength, that he considered me trustworthy, appointing me to his service",
        korean_translation: "나를 능하게 하신 그리스도 예수 우리 주께 내가 감사함은 나를 충성되이 여겨 내게 직분을 맡기심이니"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "바울은 (1) 그리스도께서 자신을 '능하게 하시고', (2) '충성되이 여기며', (3) '직분을 맡기신' 것에 감사합니다."
    },
    korean_translation: {
      natural_translation: "나를 능하게 하신 그리스도 예수 우리 주께 감사드립니다. 그분이 나를 신실하다고 여기셔서 이 직분에 임명하셨기 때문입니다."
    }
  },
  {
    reference: "1 Timothy 1:13",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "과거의 죄 - 핍박자, 폭행자",
        original_text: "Even though I was once a blasphemer and a persecutor and a violent man, I was shown mercy because I acted in ignorance and unbelief",
        korean_translation: "내가 전에는 비방자요 박해자요 폭행자였으나 도리어 긍휼을 입은 것은 내가 믿지 아니할 때에 알지 못하고 행하였음이라"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "바울은 과거에 (1) 비방자(blasphemer), (2) 박해자(persecutor), (3) 폭행자(violent man)였습니다. 그러나 '무지 가운데(in ignorance)' 행했기에 긍휼을 받았습니다."
    },
    korean_translation: {
      natural_translation: "나는 전에 비방자요 박해자요 폭행자였으나, 믿지 않을 때에 알지 못하고 한 일이므로 긍휼을 받았습니다."
    }
  },
  {
    reference: "1 Timothy 1:14",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "넘치는 은혜",
        original_text: "The grace of our Lord was poured out on me abundantly, along with the faith and love that are in Christ Jesus",
        korean_translation: "우리 주의 은혜가 그리스도 예수 안에 있는 믿음과 사랑과 함께 넘치도록 풍성하였도다"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "주님의 은혜가 '넘치도록 풍성하게(abundantly)' 임했고, 이것은 '믿음과 사랑'과 함께 왔습니다."
    },
    korean_translation: {
      natural_translation: "우리 주의 은혜가 그리스도 예수 안에 있는 믿음과 사랑과 함께 넘치도록 풍성하게 부어졌습니다."
    }
  },
  {
    reference: "1 Timothy 1:15",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "신실한 말씀 - 그리스도의 구원",
        original_text: "Here is a trustworthy saying that deserves full acceptance: Christ Jesus came into the world to save sinners—of whom I am the worst",
        korean_translation: "미쁘다 모든 사람이 받을 만한 이 말이여 그리스도 예수께서 죄인을 구원하시려고 세상에 임하셨다 하였도다 죄인 중에 내가 괴수니라"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "'미쁘다 모든 사람이 받을 만한 이 말'은 목회 서신의 특징적 표현입니다(딤전 1:15, 3:1, 4:9, 딤후 2:11, 딛 3:8). '그리스도 예수께서 죄인을 구원하시려고 세상에 임하셨다'는 복음의 핵심입니다."
    },
    korean_translation: {
      natural_translation: "이 말은 신실하고 모든 사람이 받을 만합니다. 그리스도 예수께서 죄인을 구원하시려고 세상에 오셨습니다. 나는 죄인 중의 괴수입니다."
    },
    special_explanation: {
      explanation_type: "목회 서신의 '신실한 말씀' 공식",
      content: "πιστὸς ὁ λόγος(미쁘다 이 말)는 목회 서신에 5번 나옵니다: (1) 딤전 1:15 - 그리스도의 구원 사역, (2) 딤전 3:1 - 감독직의 고귀함, (3) 딤전 4:8-9 - 경건의 유익함, (4) 딤후 2:11-13 - 죽으면 함께 살 것, (5) 딛 3:8 - 선한 일에 힘쓰라. 이것은 초대교회의 신앙고백이나 찬송 구절로 추정됩니다."
    }
  },
  {
    reference: "1 Timothy 1:16",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "본보기로서의 바울",
        original_text: "But for that very reason I was shown mercy so that in me, the worst of sinners, Christ Jesus might display his immense patience as an example for those who would believe in him and receive eternal life",
        korean_translation: "그러나 내가 긍휼을 입은 까닭은 예수 그리스도께서 내게 먼저 일체의 오래 참으심을 보이사 후에 주를 믿어 영생 얻는 자들에게 본이 되게 하려 하심이라"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "바울이 긍휼을 받은 이유는 '본보기(example, ὑποτύπωσις)'가 되기 위함입니다. 가장 악한 죄인도 구원받을 수 있다는 증거입니다."
    },
    korean_translation: {
      natural_translation: "그러나 바로 이 이유로 내가 긍휼을 받았습니다. 그리스도 예수께서 가장 악한 죄인인 나에게 그분의 무한한 인내를 보이심으로써, 앞으로 그분을 믿고 영생을 얻을 사람들에게 본보기가 되게 하셨습니다."
    }
  },
  {
    reference: "1 Timothy 1:17",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "송영",
        original_text: "Now to the King eternal, immortal, invisible, the only God, be honor and glory for ever and ever. Amen",
        korean_translation: "영원하신 왕 곧 썩지 아니하고 보이지 아니하고 홀로 하나이신 하나님께 존귀와 영광이 영원무궁하도록 있을지어다 아멘"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "바울은 하나님을 네 가지로 묘사합니다: (1) 영원하신 왕, (2) 썩지 않으시고, (3) 보이지 않으시며, (4) 홀로 하나이신 하나님. 이것은 구약적 하나님 찬양입니다."
    },
    korean_translation: {
      natural_translation: "영원하신 왕, 썩지 않으시고 보이지 않으시며 홀로 하나이신 하나님께 존귀와 영광이 영원무궁토록 있기를 원합니다. 아멘."
    },
    special_explanation: {
      explanation_type: "송영(Doxology)의 네 가지 속성",
      content: "하나님의 네 가지 속성: (1) βασιλεὺς τῶν αἰώνων(영원의 왕) - 시간을 초월한 주권, (2) ἄφθαρτος(썩지 않으심) - 불변성, (3) ἀόρατος(보이지 않으심) - 영성, (4) μόνος θεός(홀로 하나님) - 유일신. 이것은 유대교와 초대교회의 하나님 이해를 보여줍니다(신 6:4, 롬 16:27)."
    }
  },
  {
    reference: "1 Timothy 1:18",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "디모데에게 명령",
        original_text: "Timothy, my son, I am giving you this command in keeping with the prophecies once made about you, so that by recalling them you may fight the battle well",
        korean_translation: "아들 디모데야 내가 네게 이 명령으로써 경계하노니 전에 너를 지도한 예언을 따라 그것으로 선한 싸움을 싸우며"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "바울은 디모데에게 '예언(prophecies)'을 상기시킵니다. 이것은 디모데가 안수받을 때(딤전 4:14) 주어진 예언적 말씀으로 추정됩니다. 디모데는 이것을 기억하며 '선한 싸움'을 싸워야 합니다."
    },
    korean_translation: {
      natural_translation: "내 아들 디모데야, 전에 너에 대해 주어진 예언들을 따라 이 명령을 네게 맡깁니다. 그 예언들을 기억하며 선한 싸움을 잘 싸우라."
    }
  },
  {
    reference: "1 Timothy 1:19",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "믿음과 선한 양심 지킴",
        original_text: "holding on to faith and a good conscience, which some have rejected and so have suffered shipwreck with regard to the faith",
        korean_translation: "믿음과 착한 양심을 가지라 어떤 이들은 이 양심을 버려 그 믿음에 관하여 파선하였느니라"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "디모데는 (1) 믿음과 (2) 선한 양심을 '붙들어야(holding on)' 합니다. 어떤 이들은 양심을 버려 '믿음의 파선(shipwreck)'을 경험했습니다."
    },
    korean_translation: {
      natural_translation: "믿음과 선한 양심을 붙들라. 어떤 사람들은 양심을 버려서 그 믿음이 파선했다."
    }
  },
  {
    reference: "1 Timothy 1:20",
    sentence_structures: [
      {
        sequence_order: 1,
        semantic_classification: "배교자의 예 - 후메내오와 알렉산더",
        original_text: "Among them are Hymenaeus and Alexander, whom I have handed over to Satan to be taught not to blaspheme",
        korean_translation: "그 가운데 후메내오와 알렉산더가 있으니 내가 사탄에게 내준 것은 그들로 징계를 받아 비방하지 못하게 하려 함이라"
      }
    ],
    vocabulary: [],
    contextual_explanation: {
      integrated_explanation: "후메내오(Hymenaeus)와 알렉산더(Alexander)는 믿음의 파선을 경험한 구체적 예입니다. 바울은 그들을 '사탄에게 내주었습니다(handed over to Satan)'. 이것은 교회에서 출교시켜 징계하는 것을 의미합니다(고전 5:5).",
      cross_references: ["딤후 2:17-18 (후메내오와 빌레도)", "고전 5:5 (사탄에게 내줌)"]
    },
    korean_translation: {
      natural_translation: "그들 가운데 후메내오와 알렉산더가 있는데, 내가 그들을 사탄에게 내주었습니다. 징계를 받아 더 이상 비방하지 못하게 하려는 것입니다."
    }
  }
];

async function main() {
  console.log('📖 1 Timothy 1:1-20 분석 시작...');

  for (const analysis of analyses) {
    try {
      await saveAnalysisToDb(analysis);
      console.log(`✅ ${analysis.reference} 저장 완료`);
      await new Promise(resolve => setTimeout(resolve, 3000));
    } catch (error) {
      console.error(`❌ ${analysis.reference} 저장 실패:`, error);
    }
  }

  console.log('✅ 1 Timothy 1장 전체 완료!');
}

main();
