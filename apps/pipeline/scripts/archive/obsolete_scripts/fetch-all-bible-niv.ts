import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import * as path from 'path'
import * as fs from 'fs'

const envPath = path.resolve(__dirname, '../.env')
dotenv.config({ path: envPath })

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

// 구약 39권
const OT_BOOKS = [
  { name: 'Genesis', abbr: 'GEN', chapters: 50 },
  { name: 'Exodus', abbr: 'EXO', chapters: 40 },
  { name: 'Leviticus', abbr: 'LEV', chapters: 27 },
  { name: 'Numbers', abbr: 'NUM', chapters: 36 },
  { name: 'Deuteronomy', abbr: 'DEU', chapters: 34 },
  { name: 'Joshua', abbr: 'JOS', chapters: 24 },
  { name: 'Judges', abbr: 'JDG', chapters: 21 },
  { name: 'Ruth', abbr: 'RUT', chapters: 4 },
  { name: '1 Samuel', abbr: '1SA', chapters: 31 },
  { name: '2 Samuel', abbr: '2SA', chapters: 24 },
  { name: '1 Kings', abbr: '1KI', chapters: 22 },
  { name: '2 Kings', abbr: '2KI', chapters: 25 },
  { name: '1 Chronicles', abbr: '1CH', chapters: 29 },
  { name: '2 Chronicles', abbr: '2CH', chapters: 36 },
  { name: 'Ezra', abbr: 'EZR', chapters: 10 },
  { name: 'Nehemiah', abbr: 'NEH', chapters: 13 },
  { name: 'Esther', abbr: 'EST', chapters: 10 },
  { name: 'Job', abbr: 'JOB', chapters: 42 },
  { name: 'Psalms', abbr: 'PSA', chapters: 150 },
  { name: 'Proverbs', abbr: 'PRO', chapters: 31 },
  { name: 'Ecclesiastes', abbr: 'ECC', chapters: 12 },
  { name: 'Song of Solomon', abbr: 'SNG', chapters: 8 },
  { name: 'Isaiah', abbr: 'ISA', chapters: 66 },
  { name: 'Jeremiah', abbr: 'JER', chapters: 52 },
  { name: 'Lamentations', abbr: 'LAM', chapters: 5 },
  { name: 'Ezekiel', abbr: 'EZK', chapters: 48 },
  { name: 'Daniel', abbr: 'DAN', chapters: 12 },
  { name: 'Hosea', abbr: 'HOS', chapters: 14 },
  { name: 'Joel', abbr: 'JOL', chapters: 3 },
  { name: 'Amos', abbr: 'AMO', chapters: 9 },
  { name: 'Obadiah', abbr: 'OBA', chapters: 1 },
  { name: 'Jonah', abbr: 'JON', chapters: 4 },
  { name: 'Micah', abbr: 'MIC', chapters: 7 },
  { name: 'Nahum', abbr: 'NAM', chapters: 3 },
  { name: 'Habakkuk', abbr: 'HAB', chapters: 3 },
  { name: 'Zephaniah', abbr: 'ZEP', chapters: 3 },
  { name: 'Haggai', abbr: 'HAG', chapters: 2 },
  { name: 'Zechariah', abbr: 'ZEC', chapters: 14 },
  { name: 'Malachi', abbr: 'MAL', chapters: 4 }
]

// 신약 27권
const NT_BOOKS = [
  { name: 'Matthew', abbr: 'MAT', chapters: 28 },
  { name: 'Mark', abbr: 'MRK', chapters: 16 },
  { name: 'Luke', abbr: 'LUK', chapters: 24 },
  { name: 'John', abbr: 'JHN', chapters: 21 },
  { name: 'Acts', abbr: 'ACT', chapters: 28 },
  { name: 'Romans', abbr: 'ROM', chapters: 16 },
  { name: '1 Corinthians', abbr: '1CO', chapters: 16 },
  { name: '2 Corinthians', abbr: '2CO', chapters: 13 },
  { name: 'Galatians', abbr: 'GAL', chapters: 6 },
  { name: 'Ephesians', abbr: 'EPH', chapters: 6 },
  { name: 'Philippians', abbr: 'PHP', chapters: 4 },
  { name: 'Colossians', abbr: 'COL', chapters: 4 },
  { name: '1 Thessalonians', abbr: '1TH', chapters: 5 },
  { name: '2 Thessalonians', abbr: '2TH', chapters: 3 },
  { name: '1 Timothy', abbr: '1TI', chapters: 6 },
  { name: '2 Timothy', abbr: '2TI', chapters: 4 },
  { name: 'Titus', abbr: 'TIT', chapters: 3 },
  { name: 'Philemon', abbr: 'PHM', chapters: 1 },
  { name: 'Hebrews', abbr: 'HEB', chapters: 13 },
  { name: 'James', abbr: 'JAS', chapters: 5 },
  { name: '1 Peter', abbr: '1PE', chapters: 5 },
  { name: '2 Peter', abbr: '2PE', chapters: 3 },
  { name: '1 John', abbr: '1JN', chapters: 5 },
  { name: '2 John', abbr: '2JN', chapters: 1 },
  { name: '3 John', abbr: '3JN', chapters: 1 },
  { name: 'Jude', abbr: 'JUD', chapters: 1 },
  { name: 'Revelation', abbr: 'REV', chapters: 22 }
]

interface BibleData {
  [bookName: string]: {
    [chapter: number]: {
      [verse: number]: string
    }
  }
}

const bibleData: BibleData = {}

async function fetchChapter(bookName: string, abbr: string, chapter: number) {
  const url = `https://bible-api.com/${abbr}+${chapter}?translation=kjv`

  console.log(`  🔍 가져오는 중: ${bookName} ${chapter}`)

  try {
    const response = await fetch(url)

    if (!response.ok) {
      console.error(`    ❌ API 오류: ${response.status}`)
      return []
    }

    const data = await response.json()

    const verses = data.verses?.map((v: any) => ({
      chapter: v.chapter,
      verse: v.verse,
      text: v.text?.trim() || ''
    })) || []

    console.log(`    ✅ ${verses.length}구절`)
    return verses

  } catch (error) {
    console.error(`    ❌ 가져오기 실패: ${bookName} ${chapter}`, error)
    return []
  }
}

async function saveVerses(bookName: string, verses: any[]) {
  let saved = 0
  let skipped = 0

  for (const verse of verses) {
    if (!verse.text) continue

    const reference = `${bookName} ${verse.chapter}:${verse.verse}`

    try {
      const { data: existing } = await supabase
        .from('verses')
        .select('id')
        .eq('reference', reference)
        .single()

      if (existing) {
        skipped++
        continue
      }

      const { error } = await supabase
        .from('verses')
        .insert({
          reference: reference,
          niv_text: verse.text
        })

      if (!error) {
        saved++
      }
    } catch (err) {
      // 중복 무시
    }
  }

  if (saved > 0) console.log(`    💾 ${saved}구절 저장 완료`)
  if (skipped > 0) console.log(`    ⏭️  ${skipped}구절 이미 존재`)
}

async function fetchAllBible() {
  console.log('📖 전체 성경 NIV 텍스트 가져오기 (API 사용)\n')

  const allBooks = [...OT_BOOKS, ...NT_BOOKS]
  let totalVerses = 0

  for (let i = 0; i < allBooks.length; i++) {
    const book = allBooks[i]
    const testament = i < OT_BOOKS.length ? '구약' : '신약'
    console.log(`\n📚 [${i+1}/${allBooks.length}] ${book.name} (${testament}, ${book.chapters}개 장)`)

    // JSON 구조 초기화
    if (!bibleData[book.name]) {
      bibleData[book.name] = {}
    }

    const bookVerses = []

    for (let ch = 1; ch <= book.chapters; ch++) {
      const verses = await fetchChapter(book.name, book.abbr, ch)
      bookVerses.push(...verses)

      // JSON 구조에 추가
      if (!bibleData[book.name][ch]) {
        bibleData[book.name][ch] = {}
      }

      for (const verse of verses) {
        bibleData[book.name][verse.chapter][verse.verse] = verse.text
      }

      // Rate limiting (10초 대기)
      await new Promise(resolve => setTimeout(resolve, 10000))
    }

    await saveVerses(book.name, bookVerses)

    totalVerses += bookVerses.length
    console.log(`  ✅ ${book.name} 완료! (누적: ${totalVerses}구절)`)

    // 책 사이 대기 (30초)
    await new Promise(resolve => setTimeout(resolve, 30000))
  }

  console.log(`\n🎉 전체 성경 완료!`)
  console.log(`📊 총 ${totalVerses}구절`)

  // JSON 파일로 저장
  const jsonPath = path.resolve(__dirname, '../../../NIV_Bible_Complete.json')
  fs.writeFileSync(jsonPath, JSON.stringify(bibleData, null, 2), 'utf-8')
  console.log(`\n💾 JSON 파일 저장 완료: ${jsonPath}`)
}

fetchAllBible().catch(console.error)
