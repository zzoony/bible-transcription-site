import { chromium } from 'playwright'
import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import * as path from 'path'

const envPath = path.resolve(__dirname, '../.env')
dotenv.config({ path: envPath })

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

// 신약 27권과 각 책의 장 개수
const NT_BOOKS = [
  { name: 'Matthew', chapters: 28 },
  { name: 'Mark', chapters: 16 },
  { name: 'Luke', chapters: 24 },
  { name: 'John', chapters: 21 },
  { name: 'Acts', chapters: 28 },
  { name: 'Romans', chapters: 16 },
  { name: '1 Corinthians', chapters: 16 },
  { name: '2 Corinthians', chapters: 13 },
  { name: 'Galatians', chapters: 6 },
  { name: 'Ephesians', chapters: 6 },
  { name: 'Philippians', chapters: 4 },
  { name: 'Colossians', chapters: 4 },
  { name: '1 Thessalonians', chapters: 5 },
  { name: '2 Thessalonians', chapters: 3 },
  { name: '1 Timothy', chapters: 6 },
  { name: '2 Timothy', chapters: 4 },
  { name: 'Titus', chapters: 3 },
  { name: 'Philemon', chapters: 1 },
  { name: 'Hebrews', chapters: 13 },
  { name: 'James', chapters: 5 },
  { name: '1 Peter', chapters: 5 },
  { name: '2 Peter', chapters: 3 },
  { name: '1 John', chapters: 5 },
  { name: '2 John', chapters: 1 },
  { name: '3 John', chapters: 1 },
  { name: 'Jude', chapters: 1 },
  { name: 'Revelation', chapters: 22 }
]

interface Verse {
  reference: string
  niv_text: string
}

async function scrapeChapter(page: any, bookName: string, chapter: number): Promise<Verse[]> {
  const searchTerm = bookName.replace(' ', '+')
  const url = `https://www.biblegateway.com/passage/?search=${searchTerm}+${chapter}&version=NIV`

  console.log(`  🔍 스크래핑 중: ${bookName} ${chapter}`)

  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 })
    await page.waitForSelector('.passage-text', { timeout: 10000 })

    const verses: Verse[] = []

    // 모든 구절 가져오기
    const verseElements = await page.$$('.passage-text .text')

    for (const elem of verseElements) {
      try {
        // 구절 번호 추출
        const verseNum = await elem.evaluate((el: any) => {
          const verseLabel = el.querySelector('.versenum, .chapternum')
          return verseLabel ? verseLabel.textContent.replace(/[^\d]/g, '') : null
        })

        if (!verseNum) continue

        // 텍스트 추출 (각주, 제목 등 제외)
        const text = await elem.evaluate((el: any) => {
          // 각주, 제목, 크로스 레퍼런스 제거
          const clone = el.cloneNode(true)
          clone.querySelectorAll('.footnote, .crossreference, .chapternum, .versenum').forEach((n: any) => n.remove())
          return clone.textContent.trim()
        })

        if (text) {
          const reference = `${bookName} ${chapter}:${verseNum}`
          verses.push({ reference, niv_text: text })
        }
      } catch (err) {
        console.error(`    ⚠️ 구절 추출 오류:`, err)
      }
    }

    console.log(`    ✅ ${verses.length}구절 추출 완료`)
    return verses

  } catch (error) {
    console.error(`    ❌ 스크래핑 실패: ${bookName} ${chapter}`, error)
    return []
  }
}

async function saveVerses(verses: Verse[]) {
  for (const verse of verses) {
    try {
      // 중복 확인
      const { data: existing } = await supabase
        .from('verses')
        .select('id')
        .eq('reference', verse.reference)
        .single()

      if (existing) {
        console.log(`    ⏭️  이미 존재: ${verse.reference}`)
        continue
      }

      // 삽입
      const { error } = await supabase
        .from('verses')
        .insert({
          reference: verse.reference,
          niv_text: verse.niv_text,
          testament: 2 // 신약
        })

      if (error) {
        console.error(`    ❌ 저장 실패: ${verse.reference}`, error)
      }
    } catch (err) {
      console.error(`    ❌ 저장 오류: ${verse.reference}`, err)
    }
  }
}

async function scrapeAllNT() {
  console.log('📖 신약 전체 NIV 텍스트 스크래핑 시작\n')

  const browser = await chromium.launch({
    headless: true,
    timeout: 60000
  })

  const page = await browser.newPage()

  let totalVerses = 0
  let totalBooks = NT_BOOKS.length

  for (let i = 0; i < NT_BOOKS.length; i++) {
    const book = NT_BOOKS[i]
    console.log(`\n📚 [${i+1}/${totalBooks}] ${book.name} (${book.chapters}개 장)`)

    const bookVerses: Verse[] = []

    for (let ch = 1; ch <= book.chapters; ch++) {
      const chapterVerses = await scrapeChapter(page, book.name, ch)
      bookVerses.push(...chapterVerses)

      // Rate limiting (BibleGateway 서버 보호)
      await page.waitForTimeout(2000)
    }

    console.log(`  💾 데이터베이스 저장 중... (${bookVerses.length}구절)`)
    await saveVerses(bookVerses)

    totalVerses += bookVerses.length
    console.log(`  ✅ ${book.name} 완료! (누적: ${totalVerses}구절)`)

    // 책 사이 잠시 대기
    await page.waitForTimeout(3000)
  }

  await browser.close()

  console.log(`\n🎉 신약 전체 스크래핑 완료!`)
  console.log(`📊 총 ${totalVerses}구절 추출`)
}

scrapeAllNT().catch(console.error)
