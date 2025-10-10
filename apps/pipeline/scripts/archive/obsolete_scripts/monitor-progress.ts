import * as fs from 'fs'
import * as path from 'path'

const LOG_FILES = {
  신약전용: 'logs/fetch-niv-api.log',
  전체성경: 'logs/fetch-all-bible.log'
}

interface Progress {
  작업명: string
  현재책: string
  현재장: string
  완료책수: number
  총책수: number
  진행률: string
  예상남은시간: string
  상태: string
}

function parseLog(logPath: string): Progress | null {
  try {
    const fullPath = path.resolve(__dirname, '..', logPath)
    if (!fs.existsSync(fullPath)) {
      return null
    }

    const content = fs.readFileSync(fullPath, 'utf-8')
    const lines = content.split('\n').filter(line => line.trim())

    // 마지막 책 정보 찾기
    const bookLines = lines.filter(line => line.includes('📚'))
    const lastBookLine = bookLines[bookLines.length - 1]

    // 마지막 장 정보 찾기
    const chapterLines = lines.filter(line => line.includes('🔍 가져오는 중:'))
    const lastChapterLine = chapterLines[chapterLines.length - 1]

    if (!lastBookLine || !lastChapterLine) {
      return null
    }

    // 책 정보 파싱: 📚 [1/66] Genesis (구약, 50개 장)
    const bookMatch = lastBookLine.match(/\[(\d+)\/(\d+)\]\s+([^\(]+)\s*\(([^,]+),\s*(\d+)개 장\)/)
    if (!bookMatch) return null

    const [_, currentBook, totalBooks, bookName, testament, totalChapters] = bookMatch

    // 장 정보 파싱: 🔍 가져오는 중: Genesis 11
    const chapterMatch = lastChapterLine.match(/🔍 가져오는 중:\s+\S+\s+(\d+)/)
    if (!chapterMatch) return null

    const currentChapter = chapterMatch[1]

    // 진행률 계산
    const completedBooks = parseInt(currentBook) - 1
    const progress = ((completedBooks + (parseInt(currentChapter) / parseInt(totalChapters))) / parseInt(totalBooks) * 100).toFixed(1)

    // 예상 남은 시간 계산
    const remainingBooks = parseInt(totalBooks) - parseInt(currentBook)
    const remainingChapters = parseInt(totalChapters) - parseInt(currentChapter)
    const estimatedMinutes = (remainingBooks * 15 + remainingChapters) * 0.17
    const hours = Math.floor(estimatedMinutes / 60)
    const minutes = Math.floor(estimatedMinutes % 60)

    return {
      작업명: logPath.includes('all') ? '전체 성경 (구약+신약)' : '신약 전용',
      현재책: `${bookName.trim()} (${testament})`,
      현재장: `${currentChapter}/${totalChapters}`,
      완료책수: completedBooks,
      총책수: parseInt(totalBooks),
      진행률: `${progress}%`,
      예상남은시간: `${hours}시간 ${minutes}분`,
      상태: '✅ 진행 중'
    }
  } catch (error) {
    return null
  }
}

function displayProgress() {
  console.log('\n═══════════════════════════════════════════════════════════')
  console.log('📊 NIV 성경 데이터 수집 진행 현황')
  console.log('═══════════════════════════════════════════════════════════\n')

  const timestamp = new Date().toLocaleString('ko-KR', {
    timeZone: 'Asia/Seoul',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  })
  console.log(`⏰ 확인 시각: ${timestamp}\n`)

  let hasActiveJobs = false

  for (const [name, logPath] of Object.entries(LOG_FILES)) {
    const progress = parseLog(logPath)

    if (progress) {
      hasActiveJobs = true
      console.log(`┌─ ${progress.작업명}`)
      console.log(`│  📖 현재: ${progress.현재책} ${progress.현재장}장`)
      console.log(`│  📊 진행: ${progress.완료책수}/${progress.총책수}권 완료 (${progress.진행률})`)
      console.log(`│  ⏱️  남은 시간: 약 ${progress.예상남은시간}`)
      console.log(`│  ${progress.상태}`)
      console.log(`└─────────────────────────────────────────────────────────\n`)
    } else {
      console.log(`┌─ ${name}`)
      console.log(`│  ⚠️  로그 파일을 찾을 수 없거나 아직 시작되지 않음`)
      console.log(`└─────────────────────────────────────────────────────────\n`)
    }
  }

  if (hasActiveJobs) {
    console.log('💡 TIP: 30분마다 자동으로 진행 상황이 업데이트됩니다.')
    console.log('📁 상세 로그: logs/fetch-all-bible.log')
  } else {
    console.log('⏸️  현재 실행 중인 작업이 없습니다.')
  }

  console.log('═══════════════════════════════════════════════════════════\n')
}

displayProgress()
