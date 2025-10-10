import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'

dotenv.config()

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  }
)

// 2 Peter NIV 텍스트 (3장 61구절)
const VERSES = [
  // Chapter 1 (21 verses)
  { ref: '2 Peter 1:1', text: 'Simon Peter, a servant and apostle of Jesus Christ, To those who through the righteousness of our God and Savior Jesus Christ have received a faith as precious as ours:' },
  { ref: '2 Peter 1:2', text: 'Grace and peace be yours in abundance through the knowledge of God and of Jesus our Lord.' },
  { ref: '2 Peter 1:3', text: 'His divine power has given us everything we need for a godly life through our knowledge of him who called us by his own glory and goodness.' },
  { ref: '2 Peter 1:4', text: 'Through these he has given us his very great and precious promises, so that through them you may participate in the divine nature, having escaped the corruption in the world caused by evil desires.' },
  { ref: '2 Peter 1:5', text: 'For this very reason, make every effort to add to your faith goodness; and to goodness, knowledge;' },
  { ref: '2 Peter 1:6', text: 'and to knowledge, self-control; and to self-control, perseverance; and to perseverance, godliness;' },
  { ref: '2 Peter 1:7', text: 'and to godliness, mutual affection; and to mutual affection, love.' },
  { ref: '2 Peter 1:8', text: 'For if you possess these qualities in increasing measure, they will keep you from being ineffective and unproductive in your knowledge of our Lord Jesus Christ.' },
  { ref: '2 Peter 1:9', text: 'But whoever does not have them is nearsighted and blind, forgetting that they have been cleansed from their past sins.' },
  { ref: '2 Peter 1:10', text: 'Therefore, my brothers and sisters, make every effort to confirm your calling and election. For if you do these things, you will never stumble,' },
  { ref: '2 Peter 1:11', text: 'and you will receive a rich welcome into the eternal kingdom of our Lord and Savior Jesus Christ.' },
  { ref: '2 Peter 1:12', text: 'So I will always remind you of these things, even though you know them and are firmly established in the truth you now have.' },
  { ref: '2 Peter 1:13', text: 'I think it is right to refresh your memory as long as I live in the tent of this body,' },
  { ref: '2 Peter 1:14', text: 'because I know that I will soon put it aside, as our Lord Jesus Christ has made clear to me.' },
  { ref: '2 Peter 1:15', text: 'And I will make every effort to see that after my departure you will always be able to remember these things.' },
  { ref: '2 Peter 1:16', text: 'For we did not follow cleverly devised stories when we told you about the coming of our Lord Jesus Christ in power, but we were eyewitnesses of his majesty.' },
  { ref: '2 Peter 1:17', text: 'He received honor and glory from God the Father when the voice came to him from the Majestic Glory, saying, "This is my Son, whom I love; with him I am well pleased."' },
  { ref: '2 Peter 1:18', text: 'We ourselves heard this voice that came from heaven when we were with him on the sacred mountain.' },
  { ref: '2 Peter 1:19', text: 'We also have the prophetic message as something completely reliable, and you will do well to pay attention to it, as to a light shining in a dark place, until the day dawns and the morning star rises in your hearts.' },
  { ref: '2 Peter 1:20', text: 'Above all, you must understand that no prophecy of Scripture came about by the prophet\'s own interpretation of things.' },
  { ref: '2 Peter 1:21', text: 'For prophecy never had its origin in the human will, but prophets, though human, spoke from God as they were carried along by the Holy Spirit.' },

  // Chapter 2 (22 verses)
  { ref: '2 Peter 2:1', text: 'But there were also false prophets among the people, just as there will be false teachers among you. They will secretly introduce destructive heresies, even denying the sovereign Lord who bought them—bringing swift destruction on themselves.' },
  { ref: '2 Peter 2:2', text: 'Many will follow their depraved conduct and will bring the way of truth into disrepute.' },
  { ref: '2 Peter 2:3', text: 'In their greed these teachers will exploit you with fabricated stories. Their condemnation has long been hanging over them, and their destruction has not been sleeping.' },
  { ref: '2 Peter 2:4', text: 'For if God did not spare angels when they sinned, but sent them to hell, putting them in chains of darkness to be held for judgment;' },
  { ref: '2 Peter 2:5', text: 'if he did not spare the ancient world when he brought the flood on its ungodly people, but protected Noah, a preacher of righteousness, and seven others;' },
  { ref: '2 Peter 2:6', text: 'if he condemned the cities of Sodom and Gomorrah by burning them to ashes, and made them an example of what is going to happen to the ungodly;' },
  { ref: '2 Peter 2:7', text: 'and if he rescued Lot, a righteous man, who was distressed by the depraved conduct of the lawless' },
  { ref: '2 Peter 2:8', text: '(for that righteous man, living among them day after day, was tormented in his righteous soul by the lawless deeds he saw and heard)—' },
  { ref: '2 Peter 2:9', text: 'if this is so, then the Lord knows how to rescue the godly from trials and to hold the unrighteous for punishment on the day of judgment.' },
  { ref: '2 Peter 2:10', text: 'This is especially true of those who follow the corrupt desire of the flesh and despise authority. Bold and arrogant, they are not afraid to heap abuse on celestial beings;' },
  { ref: '2 Peter 2:11', text: 'yet even angels, although they are stronger and more powerful, do not heap abuse on such beings when bringing judgment on them from the Lord.' },
  { ref: '2 Peter 2:12', text: 'But these people blaspheme in matters they do not understand. They are like unreasoning animals, creatures of instinct, born only to be caught and destroyed, and like animals they too will perish.' },
  { ref: '2 Peter 2:13', text: 'They will be paid back with harm for the harm they have done. Their idea of pleasure is to carouse in broad daylight. They are blots and blemishes, reveling in their pleasures while they feast with you.' },
  { ref: '2 Peter 2:14', text: 'With eyes full of adultery, they never stop sinning; they seduce the unstable; they are experts in greed—an accursed brood!' },
  { ref: '2 Peter 2:15', text: 'They have left the straight way and wandered off to follow the way of Balaam son of Bezer, who loved the wages of wickedness.' },
  { ref: '2 Peter 2:16', text: 'But he was rebuked for his wrongdoing by a donkey—an animal without speech—who spoke with a human voice and restrained the prophet\'s madness.' },
  { ref: '2 Peter 2:17', text: 'These people are springs without water and mists driven by a storm. Blackest darkness is reserved for them.' },
  { ref: '2 Peter 2:18', text: 'For they mouth empty, boastful words and, by appealing to the lustful desires of the flesh, they entice people who are just escaping from those who live in error.' },
  { ref: '2 Peter 2:19', text: 'They promise them freedom, while they themselves are slaves of depravity—for "people are slaves to whatever has mastered them."' },
  { ref: '2 Peter 2:20', text: 'If they have escaped the corruption of the world by knowing our Lord and Savior Jesus Christ and are again entangled in it and are overcome, they are worse off at the end than they were at the beginning.' },
  { ref: '2 Peter 2:21', text: 'It would have been better for them not to have known the way of righteousness, than to have known it and then to turn their backs on the sacred command that was passed on to them.' },
  { ref: '2 Peter 2:22', text: 'Of them the proverbs are true: "A dog returns to its vomit," and, "A sow that is washed returns to her wallowing in the mud."' },

  // Chapter 3 (18 verses)
  { ref: '2 Peter 3:1', text: 'Dear friends, this is now my second letter to you. I have written both of them as reminders to stimulate you to wholesome thinking.' },
  { ref: '2 Peter 3:2', text: 'I want you to recall the words spoken in the past by the holy prophets and the command given by our Lord and Savior through your apostles.' },
  { ref: '2 Peter 3:3', text: 'Above all, you must understand that in the last days scoffers will come, scoffing and following their own evil desires.' },
  { ref: '2 Peter 3:4', text: 'They will say, "Where is this \'coming\' he promised? Ever since our ancestors died, everything goes on as it has since the beginning of creation."' },
  { ref: '2 Peter 3:5', text: 'But they deliberately forget that long ago by God\'s word the heavens came into being and the earth was formed out of water and by water.' },
  { ref: '2 Peter 3:6', text: 'By these waters also the world of that time was deluged and destroyed.' },
  { ref: '2 Peter 3:7', text: 'By the same word the present heavens and earth are reserved for fire, being kept for the day of judgment and destruction of the ungodly.' },
  { ref: '2 Peter 3:8', text: 'But do not forget this one thing, dear friends: With the Lord a day is like a thousand years, and a thousand years are like a day.' },
  { ref: '2 Peter 3:9', text: 'The Lord is not slow in keeping his promise, as some understand slowness. Instead he is patient with you, not wanting anyone to perish, but everyone to come to repentance.' },
  { ref: '2 Peter 3:10', text: 'But the day of the Lord will come like a thief. The heavens will disappear with a roar; the elements will be destroyed by fire, and the earth and everything done in it will be laid bare.' },
  { ref: '2 Peter 3:11', text: 'Since everything will be destroyed in this way, what kind of people ought you to be? You ought to live holy and godly lives' },
  { ref: '2 Peter 3:12', text: 'as you look forward to the day of God and speed its coming. That day will bring about the destruction of the heavens by fire, and the elements will melt in the heat.' },
  { ref: '2 Peter 3:13', text: 'But in keeping with his promise we are looking forward to a new heaven and a new earth, where righteousness dwells.' },
  { ref: '2 Peter 3:14', text: 'So then, dear friends, since you are looking forward to this, make every effort to be found spotless, blameless and at peace with him.' },
  { ref: '2 Peter 3:15', text: 'Bear in mind that our Lord\'s patience means salvation, just as our dear brother Paul also wrote you with the wisdom that God gave him.' },
  { ref: '2 Peter 3:16', text: 'He writes the same way in all his letters, speaking in them of these matters. His letters contain some things that are hard to understand, which ignorant and unstable people distort, as they do the other Scriptures, to their own destruction.' },
  { ref: '2 Peter 3:17', text: 'Therefore, dear friends, since you have been forewarned, be on your guard so that you may not be carried away by the error of the lawless and fall from your secure position.' },
  { ref: '2 Peter 3:18', text: 'But grow in the grace and knowledge of our Lord and Savior Jesus Christ. To him be glory both now and forever! Amen.' }
]

async function setup() {
  console.log('2 Peter 설정 시작\n')

  // 1. Check if book exists
  let { data: book } = await supabase
    .from('books')
    .select('id')
    .eq('name_english', '2 Peter')
    .single()

  if (!book) {
    console.log('Books 테이블에 2 Peter 추가 중...')
    const { data: newBook, error } = await supabase
      .from('books')
      .insert({
        name_english: '2 Peter',
        name_korean: '베드로후서',
        abbreviation: '2 Pet',
        testament: 2,
        order_number: 61,
        total_chapters: 3
      })
      .select()
      .single()

    if (error) {
      console.error('책 추가 오류:', error)
      return
    }
    book = newBook
    console.log('책 추가 완료, ID:', book.id)
  } else {
    console.log('2 Peter 책 존재, ID:', book.id)
  }

  // 2. Add chapters
  console.log('\n장 추가 중...')
  const chapterVerseCounts = [21, 22, 18] // 각 장의 구절 수
  for (let chNum = 1; chNum <= 3; chNum++) {
    const { data: existingChapter } = await supabase
      .from('chapters')
      .select('id')
      .eq('book_id', book.id)
      .eq('chapter_number', chNum)
      .single()

    if (!existingChapter) {
      const { error } = await supabase
        .from('chapters')
        .insert({
          book_id: book.id,
          chapter_number: chNum,
          total_verses: chapterVerseCounts[chNum - 1]
        })

      if (error) {
        console.error(`${chNum}장 오류:`, error)
      } else {
        console.log(`${chNum}장 추가 완료`)
      }
    } else {
      console.log(`${chNum}장 이미 존재`)
    }
  }

  // 3. Add verses
  console.log('\n구절 추가 중...')
  let addedCount = 0
  let skippedCount = 0

  for (const verse of VERSES) {
    // Extract chapter and verse numbers
    const match = verse.ref.match(/2 Peter (\d+):(\d+)/)
    if (!match) continue

    const chapterNum = parseInt(match[1])
    const verseNum = parseInt(match[2])

    // Get chapter_id
    const { data: chapter } = await supabase
      .from('chapters')
      .select('id')
      .eq('book_id', book.id)
      .eq('chapter_number', chapterNum)
      .single()

    if (!chapter) {
      console.error(`${chapterNum}장을 찾을 수 없음`)
      continue
    }

    // Check if verse exists
    const { data: existing } = await supabase
      .from('verses')
      .select('id')
      .eq('reference', verse.ref)
      .single()

    if (existing) {
      skippedCount++
      continue
    }

    // Insert verse
    const { error } = await supabase
      .from('verses')
      .insert({
        book_id: book.id,
        chapter_id: chapter.id,
        verse_number: verseNum,
        reference: verse.ref,
        niv_text: verse.text,
        analysis_completed: false
      })

    if (error) {
      console.error(`${verse.ref} 오류:`, error.message)
    } else {
      addedCount++
    }
  }

  console.log(`\n완료: ${addedCount}개 추가, ${skippedCount}개 건너뜀`)
  console.log(`총 구절: ${VERSES.length}`)
}

setup()
