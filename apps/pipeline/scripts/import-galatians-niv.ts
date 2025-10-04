import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'

dotenv.config()

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.SUPABASE_SERVICE_KEY!

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ 필수 환경 변수가 없습니다')
  console.error('필요: NEXT_PUBLIC_SUPABASE_URL, SUPABASE_SERVICE_KEY')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false
  }
})

// Galatians NIV - 전체 149개 구절
const GALATIANS_VERSES = [
  // Chapter 1 (24 verses)
  { reference: 'Galatians 1:1', niv_text: 'Paul, an apostle—sent not from men nor by a man, but by Jesus Christ and God the Father, who raised him from the dead—' },
  { reference: 'Galatians 1:2', niv_text: 'and all the brothers and sisters with me, To the churches in Galatia:' },
  { reference: 'Galatians 1:3', niv_text: 'Grace and peace to you from God our Father and the Lord Jesus Christ,' },
  { reference: 'Galatians 1:4', niv_text: 'who gave himself for our sins to rescue us from the present evil age, according to the will of our God and Father,' },
  { reference: 'Galatians 1:5', niv_text: 'to whom be glory for ever and ever. Amen.' },
  { reference: 'Galatians 1:6', niv_text: 'I am astonished that you are so quickly deserting the one who called you to live in the grace of Christ and are turning to a different gospel—' },
  { reference: 'Galatians 1:7', niv_text: 'which is really no gospel at all. Evidently some people are throwing you into confusion and are trying to pervert the gospel of Christ.' },
  { reference: 'Galatians 1:8', niv_text: 'But even if we or an angel from heaven should preach a gospel other than the one we preached to you, let them be under God\'s curse!' },
  { reference: 'Galatians 1:9', niv_text: 'As we have already said, so now I say again: If anybody is preaching to you a gospel other than what you accepted, let them be under God\'s curse!' },
  { reference: 'Galatians 1:10', niv_text: 'Am I now trying to win the approval of human beings, or of God? Or am I trying to please people? If I were still trying to please people, I would not be a servant of Christ.' },
  { reference: 'Galatians 1:11', niv_text: 'I want you to know, brothers and sisters, that the gospel I preached is not of human origin.' },
  { reference: 'Galatians 1:12', niv_text: 'I did not receive it from any man, nor was I taught it; rather, I received it by revelation from Jesus Christ.' },
  { reference: 'Galatians 1:13', niv_text: 'For you have heard of my previous way of life in Judaism, how intensely I persecuted the church of God and tried to destroy it.' },
  { reference: 'Galatians 1:14', niv_text: 'I was advancing in Judaism beyond many of my own age among my people and was extremely zealous for the traditions of my fathers.' },
  { reference: 'Galatians 1:15', niv_text: 'But when God, who set me apart from my mother\'s womb and called me by his grace, was pleased' },
  { reference: 'Galatians 1:16', niv_text: 'to reveal his Son in me so that I might preach him among the Gentiles, my immediate response was not to consult any human being.' },
  { reference: 'Galatians 1:17', niv_text: 'I did not go up to Jerusalem to see those who were apostles before I was, but I went into Arabia. Later I returned to Damascus.' },
  { reference: 'Galatians 1:18', niv_text: 'Then after three years, I went up to Jerusalem to get acquainted with Cephas and stayed with him fifteen days.' },
  { reference: 'Galatians 1:19', niv_text: 'I saw none of the other apostles—only James, the Lord\'s brother.' },
  { reference: 'Galatians 1:20', niv_text: 'I assure you before God that what I am writing you is no lie.' },
  { reference: 'Galatians 1:21', niv_text: 'Then I went to Syria and Cilicia.' },
  { reference: 'Galatians 1:22', niv_text: 'I was personally unknown to the churches of Judea that are in Christ.' },
  { reference: 'Galatians 1:23', niv_text: 'They only heard the report: "The man who formerly persecuted us is now preaching the faith he once tried to destroy."' },
  { reference: 'Galatians 1:24', niv_text: 'And they praised God because of me.' },

  // Chapter 2 (21 verses)
  { reference: 'Galatians 2:1', niv_text: 'Then after fourteen years, I went up again to Jerusalem, this time with Barnabas. I took Titus along also.' },
  { reference: 'Galatians 2:2', niv_text: 'I went in response to a revelation and, meeting privately with those esteemed as leaders, I presented to them the gospel that I preach among the Gentiles. I wanted to be sure I was not running and had not been running my race in vain.' },
  { reference: 'Galatians 2:3', niv_text: 'Yet not even Titus, who was with me, was compelled to be circumcised, even though he was a Greek.' },
  { reference: 'Galatians 2:4', niv_text: 'This matter arose because some false believers had infiltrated our ranks to spy on the freedom we have in Christ Jesus and to make us slaves.' },
  { reference: 'Galatians 2:5', niv_text: 'We did not give in to them for a moment, so that the truth of the gospel might be preserved for you.' },
  { reference: 'Galatians 2:6', niv_text: 'As for those who were held in high esteem—whatever they were makes no difference to me; God does not show favoritism—they added nothing to my message.' },
  { reference: 'Galatians 2:7', niv_text: 'On the contrary, they recognized that I had been entrusted with the task of preaching the gospel to the uncircumcised, just as Peter had been to the circumcised.' },
  { reference: 'Galatians 2:8', niv_text: 'For God, who was at work in Peter as an apostle to the circumcised, was also at work in me as an apostle to the Gentiles.' },
  { reference: 'Galatians 2:9', niv_text: 'James, Cephas and John, those esteemed as pillars, gave me and Barnabas the right hand of fellowship when they recognized the grace given to me. They agreed that we should go to the Gentiles, and they to the circumcised.' },
  { reference: 'Galatians 2:10', niv_text: 'All they asked was that we should continue to remember the poor, the very thing I had been eager to do all along.' },
  { reference: 'Galatians 2:11', niv_text: 'When Cephas came to Antioch, I opposed him to his face, because he stood condemned.' },
  { reference: 'Galatians 2:12', niv_text: 'For before certain men came from James, he used to eat with the Gentiles. But when they arrived, he began to draw back and separate himself from the Gentiles because he was afraid of those who belonged to the circumcision group.' },
  { reference: 'Galatians 2:13', niv_text: 'The other Jews joined him in his hypocrisy, so that by their hypocrisy even Barnabas was led astray.' },
  { reference: 'Galatians 2:14', niv_text: 'When I saw that they were not acting in line with the truth of the gospel, I said to Cephas in front of them all, "You are a Jew, yet you live like a Gentile and not like a Jew. How is it, then, that you force Gentiles to follow Jewish customs?"' },
  { reference: 'Galatians 2:15', niv_text: 'We who are Jews by birth and not sinful Gentiles' },
  { reference: 'Galatians 2:16', niv_text: 'know that a person is not justified by the works of the law, but by faith in Jesus Christ. So we, too, have put our faith in Christ Jesus that we may be justified by faith in Christ and not by the works of the law, because by the works of the law no one will be justified.' },
  { reference: 'Galatians 2:17', niv_text: 'But if, in seeking to be justified in Christ, we Jews find ourselves also among the sinners, doesn\'t that mean that Christ promotes sin? Absolutely not!' },
  { reference: 'Galatians 2:18', niv_text: 'If I rebuild what I destroyed, then I really would be a lawbreaker.' },
  { reference: 'Galatians 2:19', niv_text: 'For through the law I died to the law so that I might live for God.' },
  { reference: 'Galatians 2:20', niv_text: 'I have been crucified with Christ and I no longer live, but Christ lives in me. The life I now live in the body, I live by faith in the Son of God, who loved me and gave himself for me.' },
  { reference: 'Galatians 2:21', niv_text: 'I do not set aside the grace of God, for if righteousness could be gained through the law, Christ died for nothing!' },

  // Chapter 3 (29 verses)
  { reference: 'Galatians 3:1', niv_text: 'You foolish Galatians! Who has bewitched you? Before your very eyes Jesus Christ was clearly portrayed as crucified.' },
  { reference: 'Galatians 3:2', niv_text: 'I would like to learn just one thing from you: Did you receive the Spirit by the works of the law, or by believing what you heard?' },
  { reference: 'Galatians 3:3', niv_text: 'Are you so foolish? After beginning by means of the Spirit, are you now trying to finish by means of the flesh?' },
  { reference: 'Galatians 3:4', niv_text: 'Have you experienced so much in vain—if it really was in vain?' },
  { reference: 'Galatians 3:5', niv_text: 'So again I ask, does God give you his Spirit and work miracles among you by the works of the law, or by your believing what you heard?' },
  { reference: 'Galatians 3:6', niv_text: 'So also Abraham "believed God, and it was credited to him as righteousness."' },
  { reference: 'Galatians 3:7', niv_text: 'Understand, then, that those who have faith are children of Abraham.' },
  { reference: 'Galatians 3:8', niv_text: 'Scripture foresaw that God would justify the Gentiles by faith, and announced the gospel in advance to Abraham: "All nations will be blessed through you."' },
  { reference: 'Galatians 3:9', niv_text: 'So those who rely on faith are blessed along with Abraham, the man of faith.' },
  { reference: 'Galatians 3:10', niv_text: 'For all who rely on the works of the law are under a curse, as it is written: "Cursed is everyone who does not continue to do everything written in the Book of the Law."' },
  { reference: 'Galatians 3:11', niv_text: 'Clearly no one who relies on the law is justified before God, because "the righteous will live by faith."' },
  { reference: 'Galatians 3:12', niv_text: 'The law is not based on faith; on the contrary, it says, "The person who does these things will live by them."' },
  { reference: 'Galatians 3:13', niv_text: 'Christ redeemed us from the curse of the law by becoming a curse for us, for it is written: "Cursed is everyone who is hung on a pole."' },
  { reference: 'Galatians 3:14', niv_text: 'He redeemed us in order that the blessing given to Abraham might come to the Gentiles through Christ Jesus, so that by faith we might receive the promise of the Spirit.' },
  { reference: 'Galatians 3:15', niv_text: 'Brothers and sisters, let me take an example from everyday life. Just as no one can set aside or add to a human covenant that has been duly established, so it is in this case.' },
  { reference: 'Galatians 3:16', niv_text: 'The promises were spoken to Abraham and to his seed. Scripture does not say "and to seeds," meaning many people, but "and to your seed," meaning one person, who is Christ.' },
  { reference: 'Galatians 3:17', niv_text: 'What I mean is this: The law, introduced 430 years later, does not set aside the covenant previously established by God and thus do away with the promise.' },
  { reference: 'Galatians 3:18', niv_text: 'For if the inheritance depends on the law, then it no longer depends on the promise; but God in his grace gave it to Abraham through a promise.' },
  { reference: 'Galatians 3:19', niv_text: 'Why, then, was the law given at all? It was added because of transgressions until the Seed to whom the promise referred had come. The law was given through angels and entrusted to a mediator.' },
  { reference: 'Galatians 3:20', niv_text: 'A mediator, however, implies more than one party; but God is one.' },
  { reference: 'Galatians 3:21', niv_text: 'Is the law, therefore, opposed to the promises of God? Absolutely not! For if a law had been given that could impart life, then righteousness would certainly have come by the law.' },
  { reference: 'Galatians 3:22', niv_text: 'But Scripture has locked up everything under the control of sin, so that what was promised, being given through faith in Jesus Christ, might be given to those who believe.' },
  { reference: 'Galatians 3:23', niv_text: 'Before the coming of this faith, we were held in custody under the law, locked up until the faith that was to come would be revealed.' },
  { reference: 'Galatians 3:24', niv_text: 'So the law was our guardian until Christ came that we might be justified by faith.' },
  { reference: 'Galatians 3:25', niv_text: 'Now that this faith has come, we are no longer under a guardian.' },
  { reference: 'Galatians 3:26', niv_text: 'So in Christ Jesus you are all children of God through faith,' },
  { reference: 'Galatians 3:27', niv_text: 'for all of you who were baptized into Christ have clothed yourselves with Christ.' },
  { reference: 'Galatians 3:28', niv_text: 'There is neither Jew nor Gentile, neither slave nor free, nor is there male and female, for you are all one in Christ Jesus.' },
  { reference: 'Galatians 3:29', niv_text: 'If you belong to Christ, then you are Abraham\'s seed, and heirs according to the promise.' },

  // Chapter 4 (31 verses)
  { reference: 'Galatians 4:1', niv_text: 'What I am saying is that as long as an heir is underage, he is no different from a slave, although he owns the whole estate.' },
  { reference: 'Galatians 4:2', niv_text: 'The heir is subject to guardians and trustees until the time set by his father.' },
  { reference: 'Galatians 4:3', niv_text: 'So also, when we were underage, we were in slavery under the elemental spiritual forces of the world.' },
  { reference: 'Galatians 4:4', niv_text: 'But when the set time had fully come, God sent his Son, born of a woman, born under the law,' },
  { reference: 'Galatians 4:5', niv_text: 'to redeem those under the law, that we might receive adoption to sonship.' },
  { reference: 'Galatians 4:6', niv_text: 'Because you are his sons, God sent the Spirit of his Son into our hearts, the Spirit who calls out, "Abba, Father."' },
  { reference: 'Galatians 4:7', niv_text: 'So you are no longer a slave, but God\'s child; and since you are his child, God has made you also an heir.' },
  { reference: 'Galatians 4:8', niv_text: 'Formerly, when you did not know God, you were slaves to those who by nature are not gods.' },
  { reference: 'Galatians 4:9', niv_text: 'But now that you know God—or rather are known by God—how is it that you are turning back to those weak and miserable forces? Do you wish to be enslaved by them all over again?' },
  { reference: 'Galatians 4:10', niv_text: 'You are observing special days and months and seasons and years!' },
  { reference: 'Galatians 4:11', niv_text: 'I fear for you, that somehow I have wasted my efforts on you.' },
  { reference: 'Galatians 4:12', niv_text: 'I plead with you, brothers and sisters, become like me, for I became like you. You did me no wrong.' },
  { reference: 'Galatians 4:13', niv_text: 'As you know, it was because of an illness that I first preached the gospel to you,' },
  { reference: 'Galatians 4:14', niv_text: 'and even though my illness was a trial to you, you did not treat me with contempt or scorn. Instead, you welcomed me as if I were an angel of God, as if I were Christ Jesus himself.' },
  { reference: 'Galatians 4:15', niv_text: 'Where, then, is your blessing of me now? I can testify that, if you could have done so, you would have torn out your eyes and given them to me.' },
  { reference: 'Galatians 4:16', niv_text: 'Have I now become your enemy by telling you the truth?' },
  { reference: 'Galatians 4:17', niv_text: 'Those people are zealous to win you over, but for no good. What they want is to alienate you from us, so that you may have zeal for them.' },
  { reference: 'Galatians 4:18', niv_text: 'It is fine to be zealous, provided the purpose is good, and to be so always, not just when I am with you.' },
  { reference: 'Galatians 4:19', niv_text: 'My dear children, for whom I am again in the pains of childbirth until Christ is formed in you,' },
  { reference: 'Galatians 4:20', niv_text: 'how I wish I could be with you now and change my tone, because I am perplexed about you!' },
  { reference: 'Galatians 4:21', niv_text: 'Tell me, you who want to be under the law, are you not aware of what the law says?' },
  { reference: 'Galatians 4:22', niv_text: 'For it is written that Abraham had two sons, one by the slave woman and the other by the free woman.' },
  { reference: 'Galatians 4:23', niv_text: 'His son by the slave woman was born according to the flesh, but his son by the free woman was born as the result of a divine promise.' },
  { reference: 'Galatians 4:24', niv_text: 'These things are being taken figuratively: The women represent two covenants. One covenant is from Mount Sinai and bears children who are to be slaves: This is Hagar.' },
  { reference: 'Galatians 4:25', niv_text: 'Now Hagar stands for Mount Sinai in Arabia and corresponds to the present city of Jerusalem, because she is in slavery with her children.' },
  { reference: 'Galatians 4:26', niv_text: 'But the Jerusalem that is above is free, and she is our mother.' },
  { reference: 'Galatians 4:27', niv_text: 'For it is written: "Be glad, barren woman, you who never bore a child; shout for joy and cry aloud, you who were never in labor; because more are the children of the desolate woman than of her who has a husband."' },
  { reference: 'Galatians 4:28', niv_text: 'Now you, brothers and sisters, like Isaac, are children of promise.' },
  { reference: 'Galatians 4:29', niv_text: 'At that time the son born according to the flesh persecuted the son born by the power of the Spirit. It is the same now.' },
  { reference: 'Galatians 4:30', niv_text: 'But what does Scripture say? "Get rid of the slave woman and her son, for the slave woman\'s son will never share in the inheritance with the free woman\'s son."' },
  { reference: 'Galatians 4:31', niv_text: 'Therefore, brothers and sisters, we are not children of the slave woman, but of the free woman.' },

  // Chapter 5 (26 verses)
  { reference: 'Galatians 5:1', niv_text: 'It is for freedom that Christ has set us free. Stand firm, then, and do not let yourselves be burdened again by a yoke of slavery.' },
  { reference: 'Galatians 5:2', niv_text: 'Mark my words! I, Paul, tell you that if you let yourselves be circumcised, Christ will be of no value to you at all.' },
  { reference: 'Galatians 5:3', niv_text: 'Again I declare to every man who lets himself be circumcised that he is obligated to obey the whole law.' },
  { reference: 'Galatians 5:4', niv_text: 'You who are trying to be justified by the law have been alienated from Christ; you have fallen away from grace.' },
  { reference: 'Galatians 5:5', niv_text: 'For through the Spirit we eagerly await by faith the righteousness for which we hope.' },
  { reference: 'Galatians 5:6', niv_text: 'For in Christ Jesus neither circumcision nor uncircumcision has any value. The only thing that counts is faith expressing itself through love.' },
  { reference: 'Galatians 5:7', niv_text: 'You were running a good race. Who cut in on you to keep you from obeying the truth?' },
  { reference: 'Galatians 5:8', niv_text: 'That kind of persuasion does not come from the one who calls you.' },
  { reference: 'Galatians 5:9', niv_text: 'A little yeast works through the whole batch of dough.' },
  { reference: 'Galatians 5:10', niv_text: 'I am confident in the Lord that you will take no other view. The one who is throwing you into confusion, whoever that may be, will have to pay the penalty.' },
  { reference: 'Galatians 5:11', niv_text: 'Brothers and sisters, if I am still preaching circumcision, why am I still being persecuted? In that case the offense of the cross has been abolished.' },
  { reference: 'Galatians 5:12', niv_text: 'As for those agitators, I wish they would go the whole way and emasculate themselves!' },
  { reference: 'Galatians 5:13', niv_text: 'You, my brothers and sisters, were called to be free. But do not use your freedom to indulge the flesh; rather, serve one another humbly in love.' },
  { reference: 'Galatians 5:14', niv_text: 'For the entire law is fulfilled in keeping this one command: "Love your neighbor as yourself."' },
  { reference: 'Galatians 5:15', niv_text: 'If you bite and devour each other, watch out or you will be destroyed by each other.' },
  { reference: 'Galatians 5:16', niv_text: 'So I say, walk by the Spirit, and you will not gratify the desires of the flesh.' },
  { reference: 'Galatians 5:17', niv_text: 'For the flesh desires what is contrary to the Spirit, and the Spirit what is contrary to the flesh. They are in conflict with each other, so that you are not to do whatever you want.' },
  { reference: 'Galatians 5:18', niv_text: 'But if you are led by the Spirit, you are not under the law.' },
  { reference: 'Galatians 5:19', niv_text: 'The acts of the flesh are obvious: sexual immorality, impurity and debauchery;' },
  { reference: 'Galatians 5:20', niv_text: 'idolatry and witchcraft; hatred, discord, jealousy, fits of rage, selfish ambition, dissensions, factions' },
  { reference: 'Galatians 5:21', niv_text: 'and envy; drunkenness, orgies, and the like. I warn you, as I did before, that those who live like this will not inherit the kingdom of God.' },
  { reference: 'Galatians 5:22', niv_text: 'But the fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness,' },
  { reference: 'Galatians 5:23', niv_text: 'gentleness and self-control. Against such things there is no law.' },
  { reference: 'Galatians 5:24', niv_text: 'Those who belong to Christ Jesus have crucified the flesh with its passions and desires.' },
  { reference: 'Galatians 5:25', niv_text: 'Since we live by the Spirit, let us keep in step with the Spirit.' },
  { reference: 'Galatians 5:26', niv_text: 'Let us not become conceited, provoking and envying each other.' },

  // Chapter 6 (18 verses)
  { reference: 'Galatians 6:1', niv_text: 'Brothers and sisters, if someone is caught in a sin, you who live by the Spirit should restore that person gently. But watch yourselves, or you also may be tempted.' },
  { reference: 'Galatians 6:2', niv_text: 'Carry each other\'s burdens, and in this way you will fulfill the law of Christ.' },
  { reference: 'Galatians 6:3', niv_text: 'If anyone thinks they are something when they are not, they deceive themselves.' },
  { reference: 'Galatians 6:4', niv_text: 'Each one should test their own actions. Then they can take pride in themselves alone, without comparing themselves to someone else,' },
  { reference: 'Galatians 6:5', niv_text: 'for each one should carry their own load.' },
  { reference: 'Galatians 6:6', niv_text: 'Nevertheless, the one who receives instruction in the word should share all good things with their instructor.' },
  { reference: 'Galatians 6:7', niv_text: 'Do not be deceived: God cannot be mocked. A man reaps what he sows.' },
  { reference: 'Galatians 6:8', niv_text: 'Whoever sows to please their flesh, from the flesh will reap destruction; whoever sows to please the Spirit, from the Spirit will reap eternal life.' },
  { reference: 'Galatians 6:9', niv_text: 'Let us not become weary in doing good, for at the proper time we will reap a harvest if we do not give up.' },
  { reference: 'Galatians 6:10', niv_text: 'Therefore, as we have opportunity, let us do good to all people, especially to those who belong to the family of believers.' },
  { reference: 'Galatians 6:11', niv_text: 'See what large letters I use as I write to you with my own hand!' },
  { reference: 'Galatians 6:12', niv_text: 'Those who want to impress people by means of the flesh are trying to compel you to be circumcised. The only reason they do this is to avoid being persecuted for the cross of Christ.' },
  { reference: 'Galatians 6:13', niv_text: 'Not even those who are circumcised keep the law, yet they want you to be circumcised that they may boast about your circumcision in the flesh.' },
  { reference: 'Galatians 6:14', niv_text: 'May I never boast except in the cross of our Lord Jesus Christ, through which the world has been crucified to me, and I to the world.' },
  { reference: 'Galatians 6:15', niv_text: 'Neither circumcision nor uncircumcision means anything; what counts is the new creation.' },
  { reference: 'Galatians 6:16', niv_text: 'Peace and mercy to all who follow this rule—to the Israel of God.' },
  { reference: 'Galatians 6:17', niv_text: 'From now on, let no one cause me trouble, for I bear on my body the marks of Jesus.' },
  { reference: 'Galatians 6:18', niv_text: 'The grace of our Lord Jesus Christ be with your spirit, brothers and sisters. Amen.' }
]

async function insertVerse(verse: { reference: string, niv_text: string }): Promise<boolean> {
  try {
    // Check if verse already exists
    const { data: existing } = await supabase
      .from('verses')
      .select('id')
      .eq('reference', verse.reference)
      .single()

    if (existing) {
      console.log(`  ⏭️  건너뛰기: ${verse.reference} (이미 존재)`)
      return true
    }

    // Extract chapter and verse numbers from reference (e.g., "Galatians 3:16")
    const match = verse.reference.match(/Galatians (\d+):(\d+)/)
    if (!match) {
      console.error(`  ❌ 오류: 잘못된 참조 형식: ${verse.reference}`)
      return false
    }

    const chapterNum = parseInt(match[1])
    const verseNum = parseInt(match[2])

    // Get the chapter_id from chapters table
    const { data: chapter } = await supabase
      .from('chapters')
      .select('id')
      .eq('book_id', 2)
      .eq('chapter_number', chapterNum)
      .single()

    if (!chapter) {
      console.error(`  ❌ 오류: 장을 찾을 수 없음: ${chapterNum}`)
      return false
    }

    // Insert new verse
    const { error } = await supabase
      .from('verses')
      .insert({
        book_id: 2, // Galatians book_id
        chapter_id: chapter.id,
        verse_number: verseNum,
        reference: verse.reference,
        niv_text: verse.niv_text,
        analysis_completed: false
      })

    if (error) {
      console.error(`  ❌ 오류: ${verse.reference}`, error.message)
      return false
    }

    console.log(`  ✅ 추가 완료: ${verse.reference}`)
    return true
  } catch (error: any) {
    console.error(`  ❌ 예외 발생: ${verse.reference}`, error.message)
    return false
  }
}

async function main() {
  console.log('🚀 갈라디아서 NIV 구절 데이터베이스 삽입 시작\n')
  console.log(`총 ${GALATIANS_VERSES.length}개 구절 처리 예정\n`)

  let successCount = 0
  let skipCount = 0
  let errorCount = 0

  // 장별로 그룹화하여 처리
  const chapters = [
    { name: '1장', start: 0, end: 24 },
    { name: '2장', start: 24, end: 45 },
    { name: '3장', start: 45, end: 74 },
    { name: '4장', start: 74, end: 105 },
    { name: '5장', start: 105, end: 131 },
    { name: '6장', start: 131, end: 149 }
  ]

  for (const chapter of chapters) {
    console.log(`\n📖 갈라디아서 ${chapter.name} 처리 중... (${chapter.end - chapter.start}개 구절)`)
    console.log('='.repeat(60))

    for (let i = chapter.start; i < chapter.end; i++) {
      const verse = GALATIANS_VERSES[i]
      const result = await insertVerse(verse)

      if (result) {
        // Check if it was skipped (already exists)
        const { data } = await supabase
          .from('verses')
          .select('id')
          .eq('reference', verse.reference)
          .single()

        if (data) {
          skipCount++
          successCount++
        }
      } else {
        errorCount++
      }

      // Rate limiting - 작은 지연 추가
      await new Promise(resolve => setTimeout(resolve, 100))
    }

    console.log(`\n✅ ${chapter.name} 완료`)
  }

  // 최종 결과
  console.log('\n\n📊 최종 결과')
  console.log('='.repeat(60))
  console.log(`총 처리: ${GALATIANS_VERSES.length}개 구절`)
  console.log(`성공: ${successCount}개`)
  console.log(`건너뜀 (이미 존재): ${skipCount}개`)
  console.log(`실패: ${errorCount}개`)

  // 데이터베이스 검증
  console.log('\n🔍 데이터베이스 검증 중...')
  const { data: allVerses, error } = await supabase
    .from('verses')
    .select('reference')
    .like('reference', 'Galatians %')
    .order('reference')

  if (error) {
    console.error('❌ 검증 실패:', error.message)
    return
  }

  console.log(`\n✅ 데이터베이스에 저장된 갈라디아서 구절: ${allVerses?.length}개`)

  if (allVerses?.length === 149) {
    console.log('🎉 완벽! 모든 149개 구절이 성공적으로 저장되었습니다!')
  } else {
    console.log(`⚠️  예상: 149개, 실제: ${allVerses?.length}개`)
    console.log('누락된 구절을 확인하세요.')
  }
}

main()
  .then(() => {
    console.log('\n✨ 스크립트 완료!')
    process.exit(0)
  })
  .catch(err => {
    console.error('\n💥 치명적 오류:', err)
    process.exit(1)
  })