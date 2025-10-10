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

// 2 Thessalonians NIV 텍스트 (3장 47구절)
const VERSES = [
  // Chapter 1 (12 verses)
  { ref: '2 Thessalonians 1:1', text: 'Paul, Silas and Timothy, To the church of the Thessalonians in God our Father and the Lord Jesus Christ:' },
  { ref: '2 Thessalonians 1:2', text: 'Grace and peace to you from God the Father and the Lord Jesus Christ.' },
  { ref: '2 Thessalonians 1:3', text: 'We ought always to thank God for you, brothers and sisters, and rightly so, because your faith is growing more and more, and the love all of you have for one another is increasing.' },
  { ref: '2 Thessalonians 1:4', text: 'Therefore, among God\'s churches we boast about your perseverance and faith in all the persecutions and trials you are enduring.' },
  { ref: '2 Thessalonians 1:5', text: 'All this is evidence that God\'s judgment is right, and as a result you will be counted worthy of the kingdom of God, for which you are suffering.' },
  { ref: '2 Thessalonians 1:6', text: 'God is just: He will pay back trouble to those who trouble you' },
  { ref: '2 Thessalonians 1:7', text: 'and give relief to you who are troubled, and to us as well. This will happen when the Lord Jesus is revealed from heaven in blazing fire with his powerful angels.' },
  { ref: '2 Thessalonians 1:8', text: 'He will punish those who do not know God and do not obey the gospel of our Lord Jesus.' },
  { ref: '2 Thessalonians 1:9', text: 'They will be punished with everlasting destruction and shut out from the presence of the Lord and from the glory of his might' },
  { ref: '2 Thessalonians 1:10', text: 'on the day he comes to be glorified in his holy people and to be marveled at among all those who have believed. This includes you, because you believed our testimony to you.' },
  { ref: '2 Thessalonians 1:11', text: 'With this in mind, we constantly pray for you, that our God may make you worthy of his calling, and that by his power he may bring to fruition your every desire for goodness and your every deed prompted by faith.' },
  { ref: '2 Thessalonians 1:12', text: 'We pray this so that the name of our Lord Jesus may be glorified in you, and you in him, according to the grace of our God and the Lord Jesus Christ.' },

  // Chapter 2 (17 verses)
  { ref: '2 Thessalonians 2:1', text: 'Concerning the coming of our Lord Jesus Christ and our being gathered to him, we ask you, brothers and sisters,' },
  { ref: '2 Thessalonians 2:2', text: 'not to become easily unsettled or alarmed by the teaching allegedly from us—whether by a prophecy or by word of mouth or by letter—asserting that the day of the Lord has already come.' },
  { ref: '2 Thessalonians 2:3', text: 'Don\'t let anyone deceive you in any way, for that day will not come until the rebellion occurs and the man of lawlessness is revealed, the man doomed to destruction.' },
  { ref: '2 Thessalonians 2:4', text: 'He will oppose and will exalt himself over everything that is called God or is worshiped, so that he sets himself up in God\'s temple, proclaiming himself to be God.' },
  { ref: '2 Thessalonians 2:5', text: 'Don\'t you remember that when I was with you I used to tell you these things?' },
  { ref: '2 Thessalonians 2:6', text: 'And now you know what is holding him back, so that he may be revealed at the proper time.' },
  { ref: '2 Thessalonians 2:7', text: 'For the secret power of lawlessness is already at work; but the one who now holds it back will continue to do so till he is taken out of the way.' },
  { ref: '2 Thessalonians 2:8', text: 'And then the lawless one will be revealed, whom the Lord Jesus will overthrow with the breath of his mouth and destroy by the splendor of his coming.' },
  { ref: '2 Thessalonians 2:9', text: 'The coming of the lawless one will be in accordance with how Satan works. He will use all sorts of displays of power through signs and wonders that serve the lie,' },
  { ref: '2 Thessalonians 2:10', text: 'and all the ways that wickedness deceives those who are perishing. They perish because they refused to love the truth and so be saved.' },
  { ref: '2 Thessalonians 2:11', text: 'For this reason God sends them a powerful delusion so that they will believe the lie' },
  { ref: '2 Thessalonians 2:12', text: 'and so that all will be condemned who have not believed the truth but have delighted in wickedness.' },
  { ref: '2 Thessalonians 2:13', text: 'But we ought always to thank God for you, brothers and sisters loved by the Lord, because God chose you as firstfruits to be saved through the sanctifying work of the Spirit and through belief in the truth.' },
  { ref: '2 Thessalonians 2:14', text: 'He called you to this through our gospel, that you might share in the glory of our Lord Jesus Christ.' },
  { ref: '2 Thessalonians 2:15', text: 'So then, brothers and sisters, stand firm and hold fast to the teachings we passed on to you, whether by word of mouth or by letter.' },
  { ref: '2 Thessalonians 2:16', text: 'May our Lord Jesus Christ himself and God our Father, who loved us and by his grace gave us eternal encouragement and good hope,' },
  { ref: '2 Thessalonians 2:17', text: 'encourage your hearts and strengthen you in every good deed and word.' },

  // Chapter 3 (18 verses)
  { ref: '2 Thessalonians 3:1', text: 'As for other matters, brothers and sisters, pray for us that the message of the Lord may spread rapidly and be honored, just as it was with you.' },
  { ref: '2 Thessalonians 3:2', text: 'And pray that we may be delivered from wicked and evil people, for not everyone has faith.' },
  { ref: '2 Thessalonians 3:3', text: 'But the Lord is faithful, and he will strengthen you and protect you from the evil one.' },
  { ref: '2 Thessalonians 3:4', text: 'We have confidence in the Lord that you are doing and will continue to do the things we command.' },
  { ref: '2 Thessalonians 3:5', text: 'May the Lord direct your hearts into God\'s love and Christ\'s perseverance.' },
  { ref: '2 Thessalonians 3:6', text: 'In the name of the Lord Jesus Christ, we command you, brothers and sisters, to keep away from every believer who is idle and disruptive and does not live according to the teaching you received from us.' },
  { ref: '2 Thessalonians 3:7', text: 'For you yourselves know how you ought to follow our example. We were not idle when we were with you,' },
  { ref: '2 Thessalonians 3:8', text: 'nor did we eat anyone\'s food without paying for it. On the contrary, we worked night and day, laboring and toiling so that we would not be a burden to any of you.' },
  { ref: '2 Thessalonians 3:9', text: 'We did this, not because we do not have the right to such help, but in order to offer ourselves as a model for you to imitate.' },
  { ref: '2 Thessalonians 3:10', text: 'For even when we were with you, we gave you this rule: "The one who is unwilling to work shall not eat."' },
  { ref: '2 Thessalonians 3:11', text: 'We hear that some among you are idle and disruptive. They are not busy; they are busybodies.' },
  { ref: '2 Thessalonians 3:12', text: 'Such people we command and urge in the Lord Jesus Christ to settle down and earn the food they eat.' },
  { ref: '2 Thessalonians 3:13', text: 'And as for you, brothers and sisters, never tire of doing what is good.' },
  { ref: '2 Thessalonians 3:14', text: 'Take special note of anyone who does not obey our instruction in this letter. Do not associate with them, in order that they may feel ashamed.' },
  { ref: '2 Thessalonians 3:15', text: 'Yet do not regard them as an enemy, but warn them as you would a fellow believer.' },
  { ref: '2 Thessalonians 3:16', text: 'Now may the Lord of peace himself give you peace at all times and in every way. The Lord be with all of you.' },
  { ref: '2 Thessalonians 3:17', text: 'I, Paul, write this greeting in my own hand, which is the distinguishing mark in all my letters. This is how I write.' },
  { ref: '2 Thessalonians 3:18', text: 'The grace of our Lord Jesus Christ be with you all.' }
]

async function setup() {
  console.log('2 Thessalonians 설정 시작\n')

  // 1. Check if book exists
  let { data: book } = await supabase
    .from('books')
    .select('id')
    .eq('name_english', '2 Thessalonians')
    .single()

  if (!book) {
    console.log('Books 테이블에 2 Thessalonians 추가 중...')
    const { data: newBook, error } = await supabase
      .from('books')
      .insert({
        name_english: '2 Thessalonians',
        name_korean: '데살로니가후서',
        abbreviation: '2 Thess',
        testament: 2,
        order_number: 53,
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
    console.log('2 Thessalonians 책 존재, ID:', book.id)
  }

  // 2. Add chapters
  console.log('\n장 추가 중...')
  const chapterVerseCounts = [12, 17, 18] // 각 장의 구절 수
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
    const match = verse.ref.match(/2 Thessalonians (\d+):(\d+)/)
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
