#!/usr/bin/env tsx
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config();

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || '',
  process.env.SUPABASE_SERVICE_KEY || ''
);

// 2 John NIV 전체 텍스트
const twoJohnNIV = [
  { verse: 1, text: "The elder, To the lady chosen by God and to her children, whom I love in the truth—and not I only, but also all who know the truth—" },
  { verse: 2, text: "because of the truth, which lives in us and will be with us forever:" },
  { verse: 3, text: "Grace, mercy and peace from God the Father and from Jesus Christ, the Father's Son, will be with us in truth and love." },
  { verse: 4, text: "It has given me great joy to find some of your children walking in the truth, just as the Father commanded us." },
  { verse: 5, text: "And now, dear lady, I am not writing you a new command but one we have had from the beginning. I ask that we love one another." },
  { verse: 6, text: "And this is love: that we walk in obedience to his commands. As you have heard from the beginning, his command is that you walk in love." },
  { verse: 7, text: "I say this because many deceivers, who do not acknowledge Jesus Christ as coming in the flesh, have gone out into the world. Any such person is the deceiver and the antichrist." },
  { verse: 8, text: "Watch out that you do not lose what we have worked for, but that you may be rewarded fully." },
  { verse: 9, text: "Anyone who runs ahead and does not continue in the teaching of Christ does not have God; whoever continues in the teaching has both the Father and the Son." },
  { verse: 10, text: "If anyone comes to you and does not bring this teaching, do not take them into your house or welcome them." },
  { verse: 11, text: "Anyone who welcomes them shares in their wicked work." },
  { verse: 12, text: "I have much to write to you, but I do not want to use paper and ink. Instead, I hope to visit you and talk with you face to face, so that our joy may be complete." },
  { verse: 13, text: "The children of your sister, who is chosen by God, send their greetings." }
];

// Jude NIV 전체 텍스트
const judeNIV = [
  { verse: 1, text: "Jude, a servant of Jesus Christ and a brother of James, To those who have been called, who are loved in God the Father and kept for Jesus Christ:" },
  { verse: 2, text: "Mercy, peace and love be yours in abundance." },
  { verse: 3, text: "Dear friends, although I was very eager to write to you about the salvation we share, I felt compelled to write and urge you to contend for the faith that was once for all entrusted to God's holy people." },
  { verse: 4, text: "For certain individuals whose condemnation was written about long ago have secretly slipped in among you. They are ungodly people, who pervert the grace of our God into a license for immorality and deny Jesus Christ our only Sovereign and Lord." },
  { verse: 5, text: "Though you already know all this, I want to remind you that the Lord at one time delivered his people out of Egypt, but later destroyed those who did not believe." },
  { verse: 6, text: "And the angels who did not keep their positions of authority but abandoned their proper dwelling—these he has kept in darkness, bound with everlasting chains for judgment on the great Day." },
  { verse: 7, text: "In a similar way, Sodom and Gomorrah and the surrounding towns gave themselves up to sexual immorality and perversion. They serve as an example of those who suffer the punishment of eternal fire." },
  { verse: 8, text: "In the very same way, on the strength of their dreams these ungodly people pollute their own bodies, reject authority and heap abuse on celestial beings." },
  { verse: 9, text: "But even the archangel Michael, when he was disputing with the devil about the body of Moses, did not himself dare to condemn him for slander but said, "The Lord rebuke you!"" },
  { verse: 10, text: "Yet these people slander whatever they do not understand, and the very things they do understand by instinct—as irrational animals do—will destroy them." },
  { verse: 11, text: "Woe to them! They have taken the way of Cain; they have rushed for profit into Balaam's error; they have been destroyed in Korah's rebellion." },
  { verse: 12, text: "These people are blemishes at your love feasts, eating with you without the slightest qualm—shepherds who feed only themselves. They are clouds without rain, blown along by the wind; autumn trees, without fruit and uprooted—twice dead." },
  { verse: 13, text: "They are wild waves of the sea, foaming up their shame; wandering stars, for whom blackest darkness has been reserved forever." },
  { verse: 14, text: "Enoch, the seventh from Adam, prophesied about them: "See, the Lord is coming with thousands upon thousands of his holy ones" },
  { verse: 15, text: "to judge everyone, and to convict all of them of all the ungodly acts they have committed in their ungodliness, and of all the defiant words ungodly sinners have spoken against him."" },
  { verse: 16, text: "These people are grumblers and faultfinders; they follow their own evil desires; they boast about themselves and flatter others for their own advantage." },
  { verse: 17, text: "But, dear friends, remember what the apostles of our Lord Jesus Christ foretold." },
  { verse: 18, text: "They said to you, "In the last times there will be scoffers who will follow their own ungodly desires."" },
  { verse: 19, text: "These are the people who divide you, who follow mere natural instincts and do not have the Spirit." },
  { verse: 20, text: "But you, dear friends, by building yourselves up in your most holy faith and praying in the Holy Spirit," },
  { verse: 21, text: "keep yourselves in God's love as you wait for the mercy of our Lord Jesus Christ to bring you to eternal life." },
  { verse: 22, text: "Be merciful to those who doubt;" },
  { verse: 23, text: "save others by snatching them from the fire; to others show mercy, mixed with fear—hating even the clothing stained by corrupted flesh." },
  { verse: 24, text: "To him who is able to keep you from stumbling and to present you before his glorious presence without fault and with great joy—" },
  { verse: 25, text: "to the only God our Savior be glory, majesty, power and authority, through Jesus Christ our Lord, before all ages, now and forevermore! Amen." }
];

// Titus NIV 전체 텍스트
const titusNIV = [
  // Chapter 1
  { chapter: 1, verse: 1, text: "Paul, a servant of God and an apostle of Jesus Christ to further the faith of God's elect and their knowledge of the truth that leads to godliness—" },
  { chapter: 1, verse: 2, text: "in the hope of eternal life, which God, who does not lie, promised before the beginning of time," },
  { chapter: 1, verse: 3, text: "and which now at his appointed season he has brought to light through the preaching entrusted to me by the command of God our Savior," },
  { chapter: 1, verse: 4, text: "To Titus, my true son in our common faith: Grace and peace from God the Father and Christ Jesus our Savior." },
  { chapter: 1, verse: 5, text: "The reason I left you in Crete was that you might put in order what was left unfinished and appoint elders in every town, as I directed you." },
  { chapter: 1, verse: 6, text: "An elder must be blameless, faithful to his wife, a man whose children believe and are not open to the charge of being wild and disobedient." },
  { chapter: 1, verse: 7, text: "Since an overseer manages God's household, he must be blameless—not overbearing, not quick-tempered, not given to drunkenness, not violent, not pursuing dishonest gain." },
  { chapter: 1, verse: 8, text: "Rather, he must be hospitable, one who loves what is good, who is self-controlled, upright, holy and disciplined." },
  { chapter: 1, verse: 9, text: "He must hold firmly to the trustworthy message as it has been taught, so that he can encourage others by sound doctrine and refute those who oppose it." },
  { chapter: 1, verse: 10, text: "For there are many rebellious people, full of meaningless talk and deception, especially those of the circumcision group." },
  { chapter: 1, verse: 11, text: "They must be silenced, because they are disrupting whole households by teaching things they ought not to teach—and that for the sake of dishonest gain." },
  { chapter: 1, verse: 12, text: "One of Crete's own prophets has said it: "Cretans are always liars, evil brutes, lazy gluttons."" },
  { chapter: 1, verse: 13, text: "This saying is true. Therefore rebuke them sharply, so that they will be sound in the faith" },
  { chapter: 1, verse: 14, text: "and will pay no attention to Jewish myths or to the merely human commands of those who reject the truth." },
  { chapter: 1, verse: 15, text: "To the pure, all things are pure, but to those who are corrupted and do not believe, nothing is pure. In fact, both their minds and consciences are corrupted." },
  { chapter: 1, verse: 16, text: "They claim to know God, but by their actions they deny him. They are detestable, disobedient and unfit for doing anything good." },

  // Chapter 2
  { chapter: 2, verse: 1, text: "You, however, must teach what is appropriate to sound doctrine." },
  { chapter: 2, verse: 2, text: "Teach the older men to be temperate, worthy of respect, self-controlled, and sound in faith, in love and in endurance." },
  { chapter: 2, verse: 3, text: "Likewise, teach the older women to be reverent in the way they live, not to be slanderers or addicted to much wine, but to teach what is good." },
  { chapter: 2, verse: 4, text: "Then they can urge the younger women to love their husbands and children," },
  { chapter: 2, verse: 5, text: "to be self-controlled and pure, to be busy at home, to be kind, and to be subject to their husbands, so that no one will malign the word of God." },
  { chapter: 2, verse: 6, text: "Similarly, encourage the young men to be self-controlled." },
  { chapter: 2, verse: 7, text: "In everything set them an example by doing what is good. In your teaching show integrity, seriousness" },
  { chapter: 2, verse: 8, text: "and soundness of speech that cannot be condemned, so that those who oppose you may be ashamed because they have nothing bad to say about us." },
  { chapter: 2, verse: 9, text: "Teach slaves to be subject to their masters in everything, to try to please them, not to talk back to them," },
  { chapter: 2, verse: 10, text: "and not to steal from them, but to show that they can be fully trusted, so that in every way they will make the teaching about God our Savior attractive." },
  { chapter: 2, verse: 11, text: "For the grace of God has appeared that offers salvation to all people." },
  { chapter: 2, verse: 12, text: "It teaches us to say "No" to ungodliness and worldly passions, and to live self-controlled, upright and godly lives in this present age," },
  { chapter: 2, verse: 13, text: "while we wait for the blessed hope—the appearing of the glory of our great God and Savior, Jesus Christ," },
  { chapter: 2, verse: 14, text: "who gave himself for us to redeem us from all wickedness and to purify for himself a people that are his very own, eager to do what is good." },
  { chapter: 2, verse: 15, text: "These, then, are the things you should teach. Encourage and rebuke with all authority. Do not let anyone despise you." },

  // Chapter 3
  { chapter: 3, verse: 1, text: "Remind the people to be subject to rulers and authorities, to be obedient, to be ready to do whatever is good," },
  { chapter: 3, verse: 2, text: "to slander no one, to be peaceable and considerate, and always to be gentle toward everyone." },
  { chapter: 3, verse: 3, text: "At one time we too were foolish, disobedient, deceived and enslaved by all kinds of passions and pleasures. We lived in malice and envy, being hated and hating one another." },
  { chapter: 3, verse: 4, text: "But when the kindness and love of God our Savior appeared," },
  { chapter: 3, verse: 5, text: "he saved us, not because of righteous things we had done, but because of his mercy. He saved us through the washing of rebirth and renewal by the Holy Spirit," },
  { chapter: 3, verse: 6, text: "whom he poured out on us generously through Jesus Christ our Savior," },
  { chapter: 3, verse: 7, text: "so that, having been justified by his grace, we might become heirs having the hope of eternal life." },
  { chapter: 3, verse: 8, text: "This is a trustworthy saying. And I want you to stress these things, so that those who have trusted in God may be careful to devote themselves to doing what is good. These things are excellent and profitable for everyone." },
  { chapter: 3, verse: 9, text: "But avoid foolish controversies and genealogies and arguments and quarrels about the law, because these are unprofitable and useless." },
  { chapter: 3, verse: 10, text: "Warn a divisive person once, and then warn them a second time. After that, have nothing to do with them." },
  { chapter: 3, verse: 11, text: "You may be sure that such people are warped and sinful; they are self-condemned." },
  { chapter: 3, verse: 12, text: "As soon as I send Artemas or Tychicus to you, do your best to come to me at Nicopolis, because I have decided to winter there." },
  { chapter: 3, verse: 13, text: "Do everything you can to help Zenas the lawyer and Apollos on their way and see that they have everything they need." },
  { chapter: 3, verse: 14, text: "Our people must learn to devote themselves to doing what is good, in order to provide for urgent needs and not live unproductive lives." },
  { chapter: 3, verse: 15, text: "Everyone with me sends you greetings. Greet those who love us in the faith. Grace be with you all." }
];

async function importVerses() {
  // 2 John 처리
  console.log('\n📖 2 John 구절 삽입 중...');
  const { data: twoJohnBook } = await supabase
    .from('books')
    .select('id')
    .eq('name_english', '2 John')
    .single();

  if (twoJohnBook) {
    const { data: twoJohnChapter } = await supabase
      .from('chapters')
      .select('id')
      .eq('book_id', twoJohnBook.id)
      .eq('chapter_number', 1)
      .single();

    if (twoJohnChapter) {
      for (const v of twoJohnNIV) {
        const reference = `2 John 1:${v.verse}`;

        // 중복 체크
        const { data: existing } = await supabase
          .from('verses')
          .select('id')
          .eq('reference', reference)
          .single();

        if (!existing) {
          await supabase.from('verses').insert({
            book_id: twoJohnBook.id,
            chapter_id: twoJohnChapter.id,
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

  // Jude 처리
  console.log('\n📖 Jude 구절 삽입 중...');
  const { data: judeBook } = await supabase
    .from('books')
    .select('id')
    .eq('name_english', 'Jude')
    .single();

  if (judeBook) {
    const { data: judeChapter } = await supabase
      .from('chapters')
      .select('id')
      .eq('book_id', judeBook.id)
      .eq('chapter_number', 1)
      .single();

    if (judeChapter) {
      for (const v of judeNIV) {
        const reference = `Jude 1:${v.verse}`;

        const { data: existing } = await supabase
          .from('verses')
          .select('id')
          .eq('reference', reference)
          .single();

        if (!existing) {
          await supabase.from('verses').insert({
            book_id: judeBook.id,
            chapter_id: judeChapter.id,
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

  // Titus 처리
  console.log('\n📖 Titus 구절 삽입 중...');
  const { data: titusBook } = await supabase
    .from('books')
    .select('id')
    .eq('name_english', 'Titus')
    .single();

  if (titusBook) {
    for (const v of titusNIV) {
      const { data: chapter } = await supabase
        .from('chapters')
        .select('id')
        .eq('book_id', titusBook.id)
        .eq('chapter_number', v.chapter)
        .single();

      if (chapter) {
        const reference = `Titus ${v.chapter}:${v.verse}`;

        const { data: existing } = await supabase
          .from('verses')
          .select('id')
          .eq('reference', reference)
          .single();

        if (!existing) {
          await supabase.from('verses').insert({
            book_id: titusBook.id,
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

  console.log('\n✅ 모든 구절 삽입 완료\n');
}

importVerses();
