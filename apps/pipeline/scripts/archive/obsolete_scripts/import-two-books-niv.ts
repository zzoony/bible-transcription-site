#!/usr/bin/env tsx
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config();

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_KEY || ''
);

// 2 Timothy NIV 전체 텍스트 (4장 83구절)
const twoTimothyNIV = [
  // Chapter 1 (18 verses)
  { chapter: 1, verse: 1, text: "Paul, an apostle of Christ Jesus by the will of God, in keeping with the promise of life that is in Christ Jesus," },
  { chapter: 1, verse: 2, text: "To Timothy, my dear son: Grace, mercy and peace from God the Father and Christ Jesus our Lord." },
  { chapter: 1, verse: 3, text: "I thank God, whom I serve, as my ancestors did, with a clear conscience, as night and day I constantly remember you in my prayers." },
  { chapter: 1, verse: 4, text: "Recalling your tears, I long to see you, so that I may be filled with joy." },
  { chapter: 1, verse: 5, text: "I am reminded of your sincere faith, which first lived in your grandmother Lois and in your mother Eunice and, I am persuaded, now lives in you also." },
  { chapter: 1, verse: 6, text: "For this reason I remind you to fan into flame the gift of God, which is in you through the laying on of my hands." },
  { chapter: 1, verse: 7, text: "For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline." },
  { chapter: 1, verse: 8, text: "So do not be ashamed of the testimony about our Lord or of me his prisoner. Rather, join with me in suffering for the gospel, by the power of God." },
  { chapter: 1, verse: 9, text: "He has saved us and called us to a holy life—not because of anything we have done but because of his own purpose and grace. This grace was given us in Christ Jesus before the beginning of time," },
  { chapter: 1, verse: 10, text: "but it has now been revealed through the appearing of our Savior, Christ Jesus, who has destroyed death and has brought life and immortality to light through the gospel." },
  { chapter: 1, verse: 11, text: "And of this gospel I was appointed a herald and an apostle and a teacher." },
  { chapter: 1, verse: 12, text: "That is why I am suffering as I am. Yet this is no cause for shame, because I know whom I have believed, and am convinced that he is able to guard what I have entrusted to him until that day." },
  { chapter: 1, verse: 13, text: "What you heard from me, keep as the pattern of sound teaching, with faith and love in Christ Jesus." },
  { chapter: 1, verse: 14, text: "Guard the good deposit that was entrusted to you—guard it with the help of the Holy Spirit who lives in us." },
  { chapter: 1, verse: 15, text: "You know that everyone in the province of Asia has deserted me, including Phygelus and Hermogenes." },
  { chapter: 1, verse: 16, text: "May the Lord show mercy to the household of Onesiphorus, because he often refreshed me and was not ashamed of my chains." },
  { chapter: 1, verse: 17, text: "On the contrary, when he was in Rome, he searched hard for me until he found me." },
  { chapter: 1, verse: 18, text: "May the Lord grant that he will find mercy from the Lord on that day! You know very well in how many ways he helped me in Ephesus." },

  // Chapter 2 (26 verses)
  { chapter: 2, verse: 1, text: "You then, my son, be strong in the grace that is in Christ Jesus." },
  { chapter: 2, verse: 2, text: "And the things you have heard me say in the presence of many witnesses entrust to reliable people who will also be qualified to teach others." },
  { chapter: 2, verse: 3, text: "Join with me in suffering, like a good soldier of Christ Jesus." },
  { chapter: 2, verse: 4, text: "No one serving as a soldier gets entangled in civilian affairs, but rather tries to please his commanding officer." },
  { chapter: 2, verse: 5, text: "Similarly, anyone who competes as an athlete does not receive the victor's crown except by competing according to the rules." },
  { chapter: 2, verse: 6, text: "The hardworking farmer should be the first to receive a share of the crops." },
  { chapter: 2, verse: 7, text: "Reflect on what I am saying, for the Lord will give you insight into all this." },
  { chapter: 2, verse: 8, text: "Remember Jesus Christ, raised from the dead, descended from David. This is my gospel," },
  { chapter: 2, verse: 9, text: "for which I am suffering even to the point of being chained like a criminal. But God's word is not chained." },
  { chapter: 2, verse: 10, text: "Therefore I endure everything for the sake of the elect, that they too may obtain the salvation that is in Christ Jesus, with eternal glory." },
  { chapter: 2, verse: 11, text: "Here is a trustworthy saying: If we died with him, we will also live with him;" },
  { chapter: 2, verse: 12, text: "if we endure, we will also reign with him. If we disown him, he will also disown us;" },
  { chapter: 2, verse: 13, text: "if we are faithless, he remains faithful, for he cannot disown himself." },
  { chapter: 2, verse: 14, text: "Keep reminding God's people of these things. Warn them before God against quarreling about words; it is of no value, and only ruins those who listen." },
  { chapter: 2, verse: 15, text: "Do your best to present yourself to God as one approved, a worker who does not need to be ashamed and who correctly handles the word of truth." },
  { chapter: 2, verse: 16, text: "Avoid godless chatter, because those who indulge in it will become more and more ungodly." },
  { chapter: 2, verse: 17, text: "Their teaching will spread like gangrene. Among them are Hymenaeus and Philetus," },
  { chapter: 2, verse: 18, text: "who have departed from the truth. They say that the resurrection has already taken place, and they destroy the faith of some." },
  { chapter: 2, verse: 19, text: "Nevertheless, God's solid foundation stands firm, sealed with this inscription: \"The Lord knows those who are his,\" and, \"Everyone who confesses the name of the Lord must turn away from wickedness.\"" },
  { chapter: 2, verse: 20, text: "In a large house there are articles not only of gold and silver, but also of wood and clay; some are for special purposes and some for common use." },
  { chapter: 2, verse: 21, text: "Those who cleanse themselves from the latter will be instruments for special purposes, made holy, useful to the Master and prepared to do any good work." },
  { chapter: 2, verse: 22, text: "Flee the evil desires of youth and pursue righteousness, faith, love and peace, along with those who call on the Lord out of a pure heart." },
  { chapter: 2, verse: 23, text: "Don't have anything to do with foolish and stupid arguments, because you know they produce quarrels." },
  { chapter: 2, verse: 24, text: "And the Lord's servant must not be quarrelsome but must be kind to everyone, able to teach, not resentful." },
  { chapter: 2, verse: 25, text: "Opponents must be gently instructed, in the hope that God will grant them repentance leading them to a knowledge of the truth," },
  { chapter: 2, verse: 26, text: "and that they will come to their senses and escape from the trap of the devil, who has taken them captive to do his will." },

  // Chapter 3 (17 verses)
  { chapter: 3, verse: 1, text: "But mark this: There will be terrible times in the last days." },
  { chapter: 3, verse: 2, text: "People will be lovers of themselves, lovers of money, boastful, proud, abusive, disobedient to their parents, ungrateful, unholy," },
  { chapter: 3, verse: 3, text: "without love, unforgiving, slanderous, without self-control, brutal, not lovers of the good," },
  { chapter: 3, verse: 4, text: "treacherous, rash, conceited, lovers of pleasure rather than lovers of God—" },
  { chapter: 3, verse: 5, text: "having a form of godliness but denying its power. Have nothing to do with such people." },
  { chapter: 3, verse: 6, text: "They are the kind who worm their way into homes and gain control over gullible women, who are loaded down with sins and are swayed by all kinds of evil desires," },
  { chapter: 3, verse: 7, text: "always learning but never able to come to a knowledge of the truth." },
  { chapter: 3, verse: 8, text: "Just as Jannes and Jambres opposed Moses, so also these teachers oppose the truth. They are men of depraved minds, who, as far as the faith is concerned, are rejected." },
  { chapter: 3, verse: 9, text: "But they will not get very far because, as in the case of those men, their folly will be clear to everyone." },
  { chapter: 3, verse: 10, text: "You, however, know all about my teaching, my way of life, my purpose, faith, patience, love, endurance," },
  { chapter: 3, verse: 11, text: "persecutions, sufferings—what kinds of things happened to me in Antioch, Iconium and Lystra, the persecutions I endured. Yet the Lord rescued me from all of them." },
  { chapter: 3, verse: 12, text: "In fact, everyone who wants to live a godly life in Christ Jesus will be persecuted," },
  { chapter: 3, verse: 13, text: "while evildoers and impostors will go from bad to worse, deceiving and being deceived." },
  { chapter: 3, verse: 14, text: "But as for you, continue in what you have learned and have become convinced of, because you know those from whom you learned it," },
  { chapter: 3, verse: 15, text: "and how from infancy you have known the Holy Scriptures, which are able to make you wise for salvation through faith in Christ Jesus." },
  { chapter: 3, verse: 16, text: "All Scripture is God-breathed and is useful for teaching, rebuking, correcting and training in righteousness," },
  { chapter: 3, verse: 17, text: "so that the servant of God may be thoroughly equipped for every good work." },

  // Chapter 4 (22 verses)
  { chapter: 4, verse: 1, text: "In the presence of God and of Christ Jesus, who will judge the living and the dead, and in view of his appearing and his kingdom, I give you this charge:" },
  { chapter: 4, verse: 2, text: "Preach the word; be prepared in season and out of season; correct, rebuke and encourage—with great patience and careful instruction." },
  { chapter: 4, verse: 3, text: "For the time will come when people will not put up with sound doctrine. Instead, to suit their own desires, they will gather around them a great number of teachers to say what their itching ears want to hear." },
  { chapter: 4, verse: 4, text: "They will turn their ears away from the truth and turn aside to myths." },
  { chapter: 4, verse: 5, text: "But you, keep your head in all situations, endure hardship, do the work of an evangelist, discharge all the duties of your ministry." },
  { chapter: 4, verse: 6, text: "For I am already being poured out like a drink offering, and the time for my departure is near." },
  { chapter: 4, verse: 7, text: "I have fought the good fight, I have finished the race, I have kept the faith." },
  { chapter: 4, verse: 8, text: "Now there is in store for me the crown of righteousness, which the Lord, the righteous Judge, will award to me on that day—and not only to me, but also to all who have longed for his appearing." },
  { chapter: 4, verse: 9, text: "Do your best to come to me quickly," },
  { chapter: 4, verse: 10, text: "for Demas, because he loved this world, has deserted me and has gone to Thessalonica. Crescens has gone to Galatia, and Titus to Dalmatia." },
  { chapter: 4, verse: 11, text: "Only Luke is with me. Get Mark and bring him with you, because he is helpful to me in my ministry." },
  { chapter: 4, verse: 12, text: "I sent Tychicus to Ephesus." },
  { chapter: 4, verse: 13, text: "When you come, bring the cloak that I left with Carpus at Troas, and my scrolls, especially the parchments." },
  { chapter: 4, verse: 14, text: "Alexander the metalworker did me a great deal of harm. The Lord will repay him for what he has done." },
  { chapter: 4, verse: 15, text: "You too should be on your guard against him, because he strongly opposed our message." },
  { chapter: 4, verse: 16, text: "At my first defense, no one came to my support, but everyone deserted me. May it not be held against them." },
  { chapter: 4, verse: 17, text: "But the Lord stood at my side and gave me strength, so that through me the message might be fully proclaimed and all the Gentiles might hear it. And I was delivered from the lion's mouth." },
  { chapter: 4, verse: 18, text: "The Lord will rescue me from every evil attack and will bring me safely to his heavenly kingdom. To him be glory for ever and ever. Amen." },
  { chapter: 4, verse: 19, text: "Greet Priscilla and Aquila and the household of Onesiphorus." },
  { chapter: 4, verse: 20, text: "Erastus stayed in Corinth, and I left Trophimus sick in Miletus." },
  { chapter: 4, verse: 21, text: "Do your best to get here before winter. Eubulus greets you, and so do Pudens, Linus, Claudia and all the brothers and sisters." },
  { chapter: 4, verse: 22, text: "The Lord be with your spirit. Grace be with you all." }
];

// 1 Thessalonians NIV 전체 텍스트 (5장 89구절)
const thessaloniansNIV = [
  // Chapter 1 (10 verses)
  { chapter: 1, verse: 1, text: "Paul, Silas and Timothy, To the church of the Thessalonians in God the Father and the Lord Jesus Christ: Grace and peace to you." },
  { chapter: 1, verse: 2, text: "We always thank God for all of you and continually mention you in our prayers." },
  { chapter: 1, verse: 3, text: "We remember before our God and Father your work produced by faith, your labor prompted by love, and your endurance inspired by hope in our Lord Jesus Christ." },
  { chapter: 1, verse: 4, text: "For we know, brothers and sisters loved by God, that he has chosen you," },
  { chapter: 1, verse: 5, text: "because our gospel came to you not simply with words but also with power, with the Holy Spirit and deep conviction. You know how we lived among you for your sake." },
  { chapter: 1, verse: 6, text: "You became imitators of us and of the Lord, for you welcomed the message in the midst of severe suffering with the joy given by the Holy Spirit." },
  { chapter: 1, verse: 7, text: "And so you became a model to all the believers in Macedonia and Achaia." },
  { chapter: 1, verse: 8, text: "The Lord's message rang out from you not only in Macedonia and Achaia—your faith in God has become known everywhere. Therefore we do not need to say anything about it," },
  { chapter: 1, verse: 9, text: "for they themselves report what kind of reception you gave us. They tell how you turned to God from idols to serve the living and true God," },
  { chapter: 1, verse: 10, text: "and to wait for his Son from heaven, whom he raised from the dead—Jesus, who rescues us from the coming wrath." },

  // Chapter 2 (20 verses)
  { chapter: 2, verse: 1, text: "You know, brothers and sisters, that our visit to you was not without results." },
  { chapter: 2, verse: 2, text: "We had previously suffered and been treated outrageously in Philippi, as you know, but with the help of our God we dared to tell you his gospel in the face of strong opposition." },
  { chapter: 2, verse: 3, text: "For the appeal we make does not spring from error or impure motives, nor are we trying to trick you." },
  { chapter: 2, verse: 4, text: "On the contrary, we speak as those approved by God to be entrusted with the gospel. We are not trying to please people but God, who tests our hearts." },
  { chapter: 2, verse: 5, text: "You know we never used flattery, nor did we put on a mask to cover up greed—God is our witness." },
  { chapter: 2, verse: 6, text: "We were not looking for praise from people, not from you or anyone else, even though as apostles of Christ we could have asserted our authority." },
  { chapter: 2, verse: 7, text: "Instead, we were like young children among you. Just as a nursing mother cares for her children," },
  { chapter: 2, verse: 8, text: "so we cared for you. Because we loved you so much, we were delighted to share with you not only the gospel of God but our lives as well." },
  { chapter: 2, verse: 9, text: "Surely you remember, brothers and sisters, our toil and hardship; we worked night and day in order not to be a burden to anyone while we preached the gospel of God to you." },
  { chapter: 2, verse: 10, text: "You are witnesses, and so is God, of how holy, righteous and blameless we were among you who believed." },
  { chapter: 2, verse: 11, text: "For you know that we dealt with each of you as a father deals with his own children," },
  { chapter: 2, verse: 12, text: "encouraging, comforting and urging you to live lives worthy of God, who calls you into his kingdom and glory." },
  { chapter: 2, verse: 13, text: "And we also thank God continually because, when you received the word of God, which you heard from us, you accepted it not as a human word, but as it actually is, the word of God, which is indeed at work in you who believe." },
  { chapter: 2, verse: 14, text: "For you, brothers and sisters, became imitators of God's churches in Judea, which are in Christ Jesus: You suffered from your own people the same things those churches suffered from the Jews" },
  { chapter: 2, verse: 15, text: "who killed the Lord Jesus and the prophets and also drove us out. They displease God and are hostile to everyone" },
  { chapter: 2, verse: 16, text: "in their effort to keep us from speaking to the Gentiles so that they may be saved. In this way they always heap up their sins to the limit. The wrath of God has come upon them at last." },
  { chapter: 2, verse: 17, text: "But, brothers and sisters, when we were orphaned by being separated from you for a short time (in person, not in thought), out of our intense longing we made every effort to see you." },
  { chapter: 2, verse: 18, text: "For we wanted to come to you—certainly I, Paul, did, again and again—but Satan blocked our way." },
  { chapter: 2, verse: 19, text: "For what is our hope, our joy, or the crown in which we will glory in the presence of our Lord Jesus when he comes? Is it not you?" },
  { chapter: 2, verse: 20, text: "Indeed, you are our glory and joy." },

  // Chapter 3 (13 verses)
  { chapter: 3, verse: 1, text: "So when we could stand it no longer, we thought it best to be left by ourselves in Athens." },
  { chapter: 3, verse: 2, text: "We sent Timothy, who is our brother and co-worker in God's service in spreading the gospel of Christ, to strengthen and encourage you in your faith," },
  { chapter: 3, verse: 3, text: "so that no one would be unsettled by these trials. For you know quite well that we are destined for them." },
  { chapter: 3, verse: 4, text: "In fact, when we were with you, we kept telling you that we would be persecuted. And it turned out that way, as you well know." },
  { chapter: 3, verse: 5, text: "For this reason, when I could stand it no longer, I sent to find out about your faith. I was afraid that in some way the tempter had tempted you and that our labors might have been in vain." },
  { chapter: 3, verse: 6, text: "But Timothy has just now come to us from you and has brought good news about your faith and love. He has told us that you always have pleasant memories of us and that you long to see us, just as we also long to see you." },
  { chapter: 3, verse: 7, text: "Therefore, brothers and sisters, in all our distress and persecution we were encouraged about you because of your faith." },
  { chapter: 3, verse: 8, text: "For now we really live, since you are standing firm in the Lord." },
  { chapter: 3, verse: 9, text: "How can we thank God enough for you in return for all the joy we have in the presence of our God because of you?" },
  { chapter: 3, verse: 10, text: "Night and day we pray most earnestly that we may see you again and supply what is lacking in your faith." },
  { chapter: 3, verse: 11, text: "Now may our God and Father himself and our Lord Jesus clear the way for us to come to you." },
  { chapter: 3, verse: 12, text: "May the Lord make your love increase and overflow for each other and for everyone else, just as ours does for you." },
  { chapter: 3, verse: 13, text: "May he strengthen your hearts so that you will be blameless and holy in the presence of our God and Father when our Lord Jesus comes with all his holy ones." },

  // Chapter 4 (18 verses)
  { chapter: 4, verse: 1, text: "As for other matters, brothers and sisters, we instructed you how to live in order to please God, as in fact you are living. Now we ask you and urge you in the Lord Jesus to do this more and more." },
  { chapter: 4, verse: 2, text: "For you know what instructions we gave you by the authority of the Lord Jesus." },
  { chapter: 4, verse: 3, text: "It is God's will that you should be sanctified: that you should avoid sexual immorality;" },
  { chapter: 4, verse: 4, text: "that each of you should learn to control your own body in a way that is holy and honorable," },
  { chapter: 4, verse: 5, text: "not in passionate lust like the pagans, who do not know God;" },
  { chapter: 4, verse: 6, text: "and that in this matter no one should wrong or take advantage of a brother or sister. The Lord will punish all those who commit such sins, as we told you and warned you before." },
  { chapter: 4, verse: 7, text: "For God did not call us to be impure, but to live a holy life." },
  { chapter: 4, verse: 8, text: "Therefore, anyone who rejects this instruction does not reject a human being but God, the very God who gives you his Holy Spirit." },
  { chapter: 4, verse: 9, text: "Now about your love for one another we do not need to write to you, for you yourselves have been taught by God to love each other." },
  { chapter: 4, verse: 10, text: "And in fact, you do love all of God's family throughout Macedonia. Yet we urge you, brothers and sisters, to do so more and more," },
  { chapter: 4, verse: 11, text: "and to make it your ambition to lead a quiet life: You should mind your own business and work with your hands, just as we told you," },
  { chapter: 4, verse: 12, text: "so that your daily life may win the respect of outsiders and so that you will not be dependent on anybody." },
  { chapter: 4, verse: 13, text: "Brothers and sisters, we do not want you to be uninformed about those who sleep in death, so that you do not grieve like the rest of mankind, who have no hope." },
  { chapter: 4, verse: 14, text: "For we believe that Jesus died and rose again, and so we believe that God will bring with Jesus those who have fallen asleep in him." },
  { chapter: 4, verse: 15, text: "According to the Lord's word, we tell you that we who are still alive, who are left until the coming of the Lord, will certainly not precede those who have fallen asleep." },
  { chapter: 4, verse: 16, text: "For the Lord himself will come down from heaven, with a loud command, with the voice of the archangel and with the trumpet call of God, and the dead in Christ will rise first." },
  { chapter: 4, verse: 17, text: "After that, we who are still alive and are left will be caught up together with them in the clouds to meet the Lord in the air. And so we will be with the Lord forever." },
  { chapter: 4, verse: 18, text: "Therefore encourage one another with these words." },

  // Chapter 5 (28 verses)
  { chapter: 5, verse: 1, text: "Now, brothers and sisters, about times and dates we do not need to write to you," },
  { chapter: 5, verse: 2, text: "for you know very well that the day of the Lord will come like a thief in the night." },
  { chapter: 5, verse: 3, text: "While people are saying, \"Peace and safety,\" destruction will come on them suddenly, as labor pains on a pregnant woman, and they will not escape." },
  { chapter: 5, verse: 4, text: "But you, brothers and sisters, are not in darkness so that this day should surprise you like a thief." },
  { chapter: 5, verse: 5, text: "You are all children of the light and children of the day. We do not belong to the night or to the darkness." },
  { chapter: 5, verse: 6, text: "So then, let us not be like others, who are asleep, but let us be awake and sober." },
  { chapter: 5, verse: 7, text: "For those who sleep, sleep at night, and those who get drunk, get drunk at night." },
  { chapter: 5, verse: 8, text: "But since we belong to the day, let us be sober, putting on faith and love as a breastplate, and the hope of salvation as a helmet." },
  { chapter: 5, verse: 9, text: "For God did not appoint us to suffer wrath but to receive salvation through our Lord Jesus Christ." },
  { chapter: 5, verse: 10, text: "He died for us so that, whether we are awake or asleep, we may live together with him." },
  { chapter: 5, verse: 11, text: "Therefore encourage one another and build each other up, just as in fact you are doing." },
  { chapter: 5, verse: 12, text: "Now we ask you, brothers and sisters, to acknowledge those who work hard among you, who care for you in the Lord and who admonish you." },
  { chapter: 5, verse: 13, text: "Hold them in the highest regard in love because of their work. Live in peace with each other." },
  { chapter: 5, verse: 14, text: "And we urge you, brothers and sisters, warn those who are idle and disruptive, encourage the disheartened, help the weak, be patient with everyone." },
  { chapter: 5, verse: 15, text: "Make sure that nobody pays back wrong for wrong, but always strive to do what is good for each other and for everyone else." },
  { chapter: 5, verse: 16, text: "Rejoice always," },
  { chapter: 5, verse: 17, text: "pray continually," },
  { chapter: 5, verse: 18, text: "give thanks in all circumstances; for this is God's will for you in Christ Jesus." },
  { chapter: 5, verse: 19, text: "Do not quench the Spirit." },
  { chapter: 5, verse: 20, text: "Do not treat prophecies with contempt" },
  { chapter: 5, verse: 21, text: "but test them all; hold on to what is good," },
  { chapter: 5, verse: 22, text: "reject every kind of evil." },
  { chapter: 5, verse: 23, text: "May God himself, the God of peace, sanctify you through and through. May your whole spirit, soul and body be kept blameless at the coming of our Lord Jesus Christ." },
  { chapter: 5, verse: 24, text: "The one who calls you is faithful, and he will do it." },
  { chapter: 5, verse: 25, text: "Brothers and sisters, pray for us." },
  { chapter: 5, verse: 26, text: "Greet all God's people with a holy kiss." },
  { chapter: 5, verse: 27, text: "I charge you before the Lord to have this letter read to all the brothers and sisters." },
  { chapter: 5, verse: 28, text: "The grace of our Lord Jesus Christ be with you." }
];

async function importVerses() {
  // 2 Timothy 처리
  console.log('\n📖 2 Timothy 구절 삽입 중...');
  const { data: twoTimothyBook } = await supabase
    .from('books')
    .select('id')
    .eq('name_english', '2 Timothy')
    .single();

  if (twoTimothyBook) {
    for (const v of twoTimothyNIV) {
      const { data: chapter } = await supabase
        .from('chapters')
        .select('id')
        .eq('book_id', twoTimothyBook.id)
        .eq('chapter_number', v.chapter)
        .single();

      if (chapter) {
        const reference = `2 Timothy ${v.chapter}:${v.verse}`;

        // 중복 체크
        const { data: existing } = await supabase
          .from('verses')
          .select('id')
          .eq('reference', reference)
          .single();

        if (!existing) {
          await supabase.from('verses').insert({
            book_id: twoTimothyBook.id,
            chapter_id: chapter.id,
            verse_number: v.verse,
            reference,
            niv_text: v.text,
            analysis_completed: false
          });
          console.log(`  ✅ ${reference}`);
        } else {
          console.log(`  ⏭️  ${reference} (이미 존재)`);
        }
      }
    }
  }

  // 1 Thessalonians 처리
  console.log('\n📖 1 Thessalonians 구절 삽입 중...');
  const { data: thessaloniansBook } = await supabase
    .from('books')
    .select('id')
    .eq('name_english', '1 Thessalonians')
    .single();

  if (thessaloniansBook) {
    for (const v of thessaloniansNIV) {
      const { data: chapter } = await supabase
        .from('chapters')
        .select('id')
        .eq('book_id', thessaloniansBook.id)
        .eq('chapter_number', v.chapter)
        .single();

      if (chapter) {
        const reference = `1 Thessalonians ${v.chapter}:${v.verse}`;

        const { data: existing } = await supabase
          .from('verses')
          .select('id')
          .eq('reference', reference)
          .single();

        if (!existing) {
          await supabase.from('verses').insert({
            book_id: thessaloniansBook.id,
            chapter_id: chapter.id,
            verse_number: v.verse,
            reference,
            niv_text: v.text,
            analysis_completed: false
          });
          console.log(`  ✅ ${reference}`);
        } else {
          console.log(`  ⏭️  ${reference} (이미 존재)`);
        }
      }
    }
  }

  console.log('\n✅ 모든 구절 삽입 완료');
  console.log('📊 2 Timothy: 83구절');
  console.log('📊 1 Thessalonians: 89구절');
  console.log('📊 총: 172구절\n');
}

importVerses();
