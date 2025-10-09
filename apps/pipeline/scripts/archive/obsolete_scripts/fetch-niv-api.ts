import { createClient } from '@supabase/supabase-js'
import * as dotenv from 'dotenv'
import * as path from 'path'

const envPath = path.resolve(__dirname, '../.env')
dotenv.config({ path: envPath })

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_KEY!
)

// 신약 27권 (약어)
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
      reference: `${bookName} ${v.chapter}:${v.verse}`,
      niv_text: v.text?.trim() || ''
    })) || []

    console.log(`    ✅ ${verses.length}구절`)
    return verses

  } catch (error) {
    console.error(`    ❌ 가져오기 실패: ${bookName} ${chapter}`, error)
    return []
  }
}

async function saveVerses(verses: any[]) {
  let saved = 0
  let skipped = 0

  for (const verse of verses) {
    if (!verse.niv_text) continue

    try {
      const { data: existing } = await supabase
        .from('verses')
        .select('id')
        .eq('reference', verse.reference)
        .single()

      if (existing) {
        skipped++
        continue
      }

      const { error } = await supabase
        .from('verses')
        .insert({
          reference: verse.reference,
          niv_text: verse.niv_text,
          testament: 2
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

async function fetchAllNT() {
  console.log('📖 신약 전체 NIV 텍스트 가져오기 (API 사용)\n')

  let totalVerses = 0

  for (let i = 0; i < NT_BOOKS.length; i++) {
    const book = NT_BOOKS[i]
    console.log(`\n📚 [${i+1}/${NT_BOOKS.length}] ${book.name} (${book.chapters}개 장)`)

    const bookVerses = []

    for (let ch = 1; ch <= book.chapters; ch++) {
      const verses = await fetchChapter(book.name, book.abbr, ch)
      bookVerses.push(...verses)

      // Rate limiting (10초 대기로 증가)
      await new Promise(resolve => setTimeout(resolve, 10000))
    }

    await saveVerses(bookVerses)

    totalVerses += bookVerses.length
    console.log(`  ✅ ${book.name} 완료! (누적: ${totalVerses}구절)`)

    // 책 사이 대기 (30초로 증가)
    await new Promise(resolve => setTimeout(resolve, 30000))
  }

  console.log(`\n🎉 신약 전체 완료!`)
  console.log(`📊 총 ${totalVerses}구절`)
}

fetchAllNT().catch(console.error)
