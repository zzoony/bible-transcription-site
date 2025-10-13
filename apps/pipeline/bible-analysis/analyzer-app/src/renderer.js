const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

// 경로 설정
const BASE_DIR = path.join(__dirname, '..', '..');
const ANALYSIS_JSON_DIR = path.join(BASE_DIR, 'analysis-json');
const PROMPT_PATH = path.join(BASE_DIR, 'ANALYZE_VERSE_PROMPT.txt');

// 실제 구절 수 데이터 (미리 추출된 경량 데이터)
let verseCounts = null;

// 실제 구절 수 가져오기 헬퍼 함수
function getActualVerseCount(bookName, chapter) {
  try {
    if (!verseCounts || !verseCounts[bookName] || !verseCounts[bookName][chapter.toString()]) {
      console.warn(`⚠️ 구절 수 데이터에서 ${bookName} ${chapter}장을 찾을 수 없습니다`);
      return 0;
    }

    return verseCounts[bookName][chapter.toString()];
  } catch (error) {
    console.error(`❌ 구절 수 조회 오류: ${bookName} ${chapter}장`, error);
    return 0;
  }
}

// 전역 상태
let bibleStructure = null;
let selectedBooks = new Set();
let isAnalyzing = false;
let analysisController = null;
let failedVerses = []; // 실패한 구절 목록

// 배치 크기 설정 (Mac Mini M4 16GB 최적화)
const BATCH_SIZE = 20; // 10 → 20으로 변경 (2배 속도)

// 초기화
async function init() {
  try {
    // 성경 구조 데이터 로드
    const structureData = fs.readFileSync(path.join(__dirname, 'bible-structure.json'), 'utf8');
    bibleStructure = JSON.parse(structureData);

    // 구절 수 데이터 로드 (경량화된 데이터)
    const verseCountsData = fs.readFileSync(path.join(__dirname, 'verse-counts.json'), 'utf8');
    verseCounts = JSON.parse(verseCountsData);
    console.log('✅ 구절 수 데이터 로드 완료 (66권 성경)');

    // UI 렌더링
    renderBooks();
    updateProgress();

    // 이벤트 리스너 설정
    setupEventListeners();

    // 5초마다 진행도 업데이트
    setInterval(updateProgress, 5000);

    console.log('앱 초기화 완료');
  } catch (error) {
    console.error('초기화 오류:', error);
    alert('앱 초기화 중 오류가 발생했습니다: ' + error.message);
  }
}

// 진행도 계산
function calculateProgress(book) {
  const bookName = book.name.replace(/ /g, '');
  let completed = 0;

  try {
    const files = fs.readdirSync(ANALYSIS_JSON_DIR);

    for (let chapter = 1; chapter <= book.chapters; chapter++) {
      // NIV 데이터에서 실제 구절 수 가져오기
      const actualVerseCount = getActualVerseCount(book.name, chapter);

      for (let verse = 1; verse <= actualVerseCount; verse++) {
        const filename = `${bookName}_${chapter}_${verse}.json`;
        if (files.includes(filename)) {
          completed++;
        }
      }
    }
  } catch (error) {
    console.error(`진행도 계산 오류 (${book.name}):`, error);
  }

  return {
    completed,
    total: book.verses,
    percentage: book.verses > 0 ? ((completed / book.verses) * 100).toFixed(1) : 0
  };
}

// 전체 진행도 계산
function calculateOverallProgress() {
  const allBooks = [...bibleStructure.oldTestament, ...bibleStructure.newTestament];
  let totalCompleted = 0;
  let totalVerses = 0;

  allBooks.forEach(book => {
    const progress = calculateProgress(book);
    totalCompleted += progress.completed;
    totalVerses += progress.total;
  });

  return {
    completed: totalCompleted,
    total: totalVerses,
    percentage: totalVerses > 0 ? ((totalCompleted / totalVerses) * 100).toFixed(1) : 0
  };
}

// 진행도 UI 업데이트
function updateProgress() {
  const overall = calculateOverallProgress();

  document.getElementById('overallProgress').style.width = `${overall.percentage}%`;
  document.getElementById('overallProgressText').textContent = `${overall.percentage}%`;
  document.getElementById('completedVerses').textContent = overall.completed.toLocaleString();
  document.getElementById('totalVerses').textContent = overall.total.toLocaleString();

  // 각 카드의 진행도도 업데이트
  const cards = document.querySelectorAll('.book-card');
  cards.forEach(card => {
    const bookName = card.dataset.book;
    const testament = card.dataset.testament;
    const books = testament === 'old' ? bibleStructure.oldTestament : bibleStructure.newTestament;
    const book = books.find(b => b.name === bookName);

    if (book) {
      const progress = calculateProgress(book);
      const progressBar = card.querySelector('.book-progress-fill');
      const progressText = card.querySelector('.book-progress-text');
      const statsText = card.querySelector('.book-stats');

      progressBar.style.width = `${progress.percentage}%`;
      progressText.textContent = `${progress.percentage}%`;
      statsText.textContent = `${progress.completed}/${progress.total} 구절`;
    }
  });
}

// 성경 카드 렌더링
function renderBooks(filter = 'all') {
  const grid = document.getElementById('booksGrid');
  grid.innerHTML = '';

  const books = [];
  if (filter === 'all' || filter === 'old') {
    books.push(...bibleStructure.oldTestament.map(b => ({ ...b, testament: 'old' })));
  }
  if (filter === 'all' || filter === 'new') {
    books.push(...bibleStructure.newTestament.map(b => ({ ...b, testament: 'new' })));
  }

  books.forEach(book => {
    const progress = calculateProgress(book);
    const card = document.createElement('div');
    card.className = 'book-card';
    card.dataset.book = book.name;
    card.dataset.testament = book.testament;

    if (selectedBooks.has(book.name)) {
      card.classList.add('selected');
    }

    card.innerHTML = `
      <div class="book-name">${book.korean}</div>
      <div class="book-name-en">${book.name}</div>
      <div class="book-stats">${progress.completed}/${progress.total} 구절</div>
      <div class="book-progress-bar">
        <div class="book-progress-fill" style="width: ${progress.percentage}%"></div>
      </div>
      <div class="book-progress-text">${progress.percentage}%</div>
    `;

    card.addEventListener('click', () => toggleBookSelection(book.name, card));
    grid.appendChild(card);
  });
}

// 책 선택/해제
function toggleBookSelection(bookName, card) {
  if (isAnalyzing) {
    alert('분석 진행 중에는 선택을 변경할 수 없습니다.');
    return;
  }

  if (selectedBooks.has(bookName)) {
    selectedBooks.delete(bookName);
    card.classList.remove('selected');
  } else {
    selectedBooks.add(bookName);
    card.classList.add('selected');
  }

  updateSelectionInfo();
}

// 선택 정보 업데이트
function updateSelectionInfo() {
  const selectionText = document.getElementById('selectionText');
  const estimateText = document.getElementById('estimateText');
  const startBtn = document.getElementById('startBtn');

  if (selectedBooks.size === 0) {
    selectionText.textContent = '선택된 책이 없습니다';
    estimateText.textContent = '';
    startBtn.disabled = true;
    return;
  }

  const allBooks = [...bibleStructure.oldTestament, ...bibleStructure.newTestament];
  const selected = allBooks.filter(b => selectedBooks.has(b.name));

  let totalToAnalyze = 0;
  let alreadyCompleted = 0;

  selected.forEach(book => {
    const progress = calculateProgress(book);
    totalToAnalyze += progress.total;
    alreadyCompleted += progress.completed;
  });

  const remaining = totalToAnalyze - alreadyCompleted;
  const batches = Math.ceil(remaining / BATCH_SIZE);
  // 배치당 평균 2-3분 + 10초 간격으로 계산
  const estimatedMinutes = batches * 2.5;
  const hours = Math.floor(estimatedMinutes / 60);
  const minutes = Math.ceil(estimatedMinutes % 60);

  selectionText.textContent = `✓ 선택: ${selectedBooks.size}개 책 (${selected.map(b => b.korean).join(', ')})`;
  estimateText.textContent = `📊 분석할 구절: ${remaining.toLocaleString()}개 (완료 ${alreadyCompleted.toLocaleString()}개) | ⏱️ 예상 소요: ~${batches} 배치 × 2.5분 = ${hours > 0 ? `${hours}시간 ` : ''}${minutes}분`;

  startBtn.disabled = remaining === 0;
}

// 이벤트 리스너 설정
function setupEventListeners() {
  // 필터 버튼
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderBooks(btn.dataset.filter);
    });
  });

  // 전체 선택
  document.getElementById('selectAllBtn').addEventListener('click', () => {
    if (isAnalyzing) return;
    const allBooks = [...bibleStructure.oldTestament, ...bibleStructure.newTestament];
    allBooks.forEach(book => selectedBooks.add(book.name));
    renderBooks(document.querySelector('.filter-btn.active').dataset.filter);
    updateSelectionInfo();
  });

  // 선택 해제
  document.getElementById('deselectAllBtn').addEventListener('click', () => {
    if (isAnalyzing) return;
    selectedBooks.clear();
    renderBooks(document.querySelector('.filter-btn.active').dataset.filter);
    updateSelectionInfo();
  });

  // 새로고침
  document.getElementById('refreshBtn').addEventListener('click', () => {
    updateProgress();
    renderBooks(document.querySelector('.filter-btn.active').dataset.filter);
    updateSelectionInfo();
  });

  // 분석 시작
  document.getElementById('startBtn').addEventListener('click', startAnalysis);

  // 분석 중단
  document.getElementById('cancelBtn').addEventListener('click', stopAnalysis);

  // 실패한 것만 재분석
  document.getElementById('retryFailedBtn').addEventListener('click', retryFailedAnalysis);
}

// 실패한 구절만 재분석
async function retryFailedAnalysis() {
  if (failedVerses.length === 0) {
    alert('재분석할 실패 구절이 없습니다.');
    return;
  }

  if (!confirm(`${failedVerses.length}개의 실패한 구절을 재분석하시겠습니까?`)) {
    return;
  }

  // 실패 목록 복사
  const toRetry = [...failedVerses];
  failedVerses = []; // 초기화

  // 재분석 시작
  isAnalyzing = true;
  document.getElementById('retryFailedBtn').disabled = true;
  document.getElementById('cancelBtn').style.display = 'inline-block';
  document.getElementById('analysisPanel').style.display = 'block';

  analysisController = {
    verses: toRetry,
    currentIndex: 0,
    startTime: Date.now(),
    completed: []
  };

  console.log(`실패 구절 재분석 시작: ${toRetry.length}개`);
  processBatches();
}

// 분석 시작
async function startAnalysis() {
  if (isAnalyzing || selectedBooks.size === 0) return;

  // 초기화
  failedVerses = [];
  document.getElementById('retryFailedBtn').style.display = 'none';
  document.getElementById('retryFailedBtn').disabled = false;

  isAnalyzing = true;
  document.getElementById('startBtn').disabled = true;
  document.getElementById('cancelBtn').style.display = 'inline-block';
  document.getElementById('analysisPanel').style.display = 'block';

  const allBooks = [...bibleStructure.oldTestament, ...bibleStructure.newTestament];
  const selected = allBooks.filter(b => selectedBooks.has(b.name));

  // 분석할 구절 목록 생성
  const versesToAnalyze = [];

  for (const book of selected) {
    const bookName = book.name.replace(/ /g, '');
    const existingFiles = new Set(fs.readdirSync(ANALYSIS_JSON_DIR));

    // 각 장, 각 절 확인
    for (let chapter = 1; chapter <= book.chapters; chapter++) {
      // NIV 데이터에서 실제 구절 수 가져오기
      const actualVerseCount = getActualVerseCount(book.name, chapter);

      for (let verse = 1; verse <= actualVerseCount; verse++) {
        const filename = `${bookName}_${chapter}_${verse}.json`;

        if (!existingFiles.has(filename)) {
          versesToAnalyze.push({
            book: book.korean,
            bookEn: book.name,
            chapter,
            verse,
            reference: `${book.korean} ${chapter}장 ${verse}절`
          });
        }
      }
    }
  }

  console.log(`총 ${versesToAnalyze.length}개 구절 분석 시작`);

  // 분석 컨트롤러 생성
  analysisController = {
    verses: versesToAnalyze,
    currentIndex: 0,
    startTime: Date.now(),
    completed: []
  };

  // 배치 분석 시작
  processBatches();
}

// 워커 풀 방식 처리 (항상 BATCH_SIZE개 동시 실행)
async function processBatches() {
  const { verses } = analysisController;

  console.log(`🚀 워커 풀 시작: ${verses.length}개 구절, 동시 실행 ${BATCH_SIZE}개`);

  let currentIndex = 0;
  let activeWorkers = 0;
  const maxWorkers = BATCH_SIZE;

  // 워커 시작 함수
  const startWorker = async () => {
    if (currentIndex >= verses.length || !isAnalyzing) {
      return;
    }

    const verse = verses[currentIndex];
    const verseIndex = currentIndex;
    currentIndex++;
    activeWorkers++;

    // UI 업데이트
    updateUI(verseIndex, verses.length, activeWorkers);

    try {
      // 구절 분석
      const result = await analyzeVerse(verse);

      if (result.success) {
        // 성공 - JSON 파일 생성 확인
        const fileCreated = await waitForVerseCompletion(verse);

        if (fileCreated) {
          analysisController.completed.push(verse);
          // 최근 완료 업데이트
          updateRecentCompletions([verse]);
        } else {
          // 파일이 생성되지 않음 - 실패로 처리
          failedVerses.push({
            ...verse,
            error: 'JSON 파일이 생성되지 않았습니다'
          });
          console.error(`💥 파일 생성 실패: ${verse.reference}`);
        }
      } else {
        // 실패 처리 - failedVerses에 추가
        failedVerses.push({
          ...verse,
          error: result.error
        });
        console.error(`💥 구절 실패 추가: ${verse.reference}`);
      }

      // 진행도 새로고침
      updateProgress();

    } catch (error) {
      console.error(`워커 오류 (${verse.reference}):`, error);
    } finally {
      activeWorkers--;

      // 다음 작업 즉시 시작
      if (currentIndex < verses.length && isAnalyzing) {
        startWorker();
      } else if (activeWorkers === 0) {
        // 모든 워커 완료
        finishAnalysis();
      }
    }
  };

  // 초기 워커들 시작
  const initialWorkers = Math.min(maxWorkers, verses.length);
  for (let i = 0; i < initialWorkers; i++) {
    startWorker();
  }
}

// UI 업데이트 헬퍼
function updateUI(completedCount, totalCount, activeCount) {
  const progress = (completedCount / totalCount) * 100;
  document.getElementById('batchProgress').style.width = `${progress.toFixed(1)}%`;
  document.getElementById('batchProgressText').textContent = `${progress.toFixed(1)}%`;

  document.getElementById('processingCount').textContent = activeCount;
  document.getElementById('waitingCount').textContent = Math.max(0, totalCount - completedCount - activeCount);
  document.getElementById('completedCount').textContent = completedCount;

  // 경과 시간
  const elapsed = Date.now() - analysisController.startTime;
  document.getElementById('elapsedTime').textContent = formatTime(elapsed);

  // 남은 시간 추정
  if (completedCount > 0) {
    const avgTimePerVerse = elapsed / completedCount;
    const remaining = (totalCount - completedCount) * avgTimePerVerse;
    document.getElementById('remainingTime').textContent = formatTime(remaining);
  } else {
    document.getElementById('remainingTime').textContent = '계산 중...';
  }

  // 실패 카운트
  if (failedVerses.length > 0) {
    document.getElementById('failedCount').textContent = failedVerses.length;
    document.getElementById('failedCount').parentElement.style.display = 'block';
  }
}

// 단일 구절 완료 대기
async function waitForVerseCompletion(verse) {
  const maxWaitTime = 120 * 1000; // 최대 2분
  const checkInterval = 2 * 1000; // 2초마다 체크
  const startTime = Date.now();

  while (Date.now() - startTime < maxWaitTime) {
    const bookName = verse.bookEn.replace(/ /g, '');
    const filename = `${bookName}_${verse.chapter}_${verse.verse}.json`;
    const filePath = path.join(ANALYSIS_JSON_DIR, filename);

    if (fs.existsSync(filePath)) {
      return true;
    }

    await sleep(checkInterval);
  }

  console.warn(`⏱️ 타임아웃: ${verse.reference} (JSON 파일 생성 대기)`);
  return false;
}

// 단일 구절 분석 (재시도 포함)
async function analyzeVerse(verse, retryCount = 0) {
  const maxRetries = 3;
  const promptContent = fs.readFileSync(PROMPT_PATH, 'utf8');

  return new Promise((resolve, reject) => {
    console.log(`🚀 분석 시작: ${verse.reference}${retryCount > 0 ? ` (재시도 ${retryCount}/${maxRetries})` : ''}`);

    // 프롬프트를 임시 파일로 저장
    const tempPromptPath = path.join(BASE_DIR, '.temp_prompt.txt');
    fs.writeFileSync(tempPromptPath, `${verse.reference}\n\n${promptContent}`, 'utf8');

    // claude를 백그라운드에서 직접 실행 (터미널 없음)
    const process = spawn('bash', ['-c', `cat "${tempPromptPath}" | claude --dangerously-skip-permissions`], {
      cwd: BASE_DIR,
      stdio: ['ignore', 'pipe', 'pipe']
    });

    // 출력 로깅
    let output = '';
    process.stdout.on('data', (data) => {
      output += data.toString();
    });

    process.stderr.on('data', (data) => {
      const errorMsg = data.toString();
      // 일반적인 진행 메시지는 로그 안 함
      if (!errorMsg.includes('Thinking') && !errorMsg.includes('tokens')) {
        console.error(`⚠️ ${verse.reference}: ${errorMsg}`);
      }
    });

    process.on('close', async (code) => {
      if (code === 0) {
        console.log(`✅ 완료: ${verse.reference}`);
        resolve({ success: true, verse });
      } else {
        console.error(`❌ 실패: ${verse.reference} (exit code: ${code})`);

        // 재시도
        if (retryCount < maxRetries) {
          console.log(`🔄 재시도 중... ${verse.reference} (${retryCount + 1}/${maxRetries})`);
          await sleep(5000); // 5초 대기 후 재시도

          try {
            const result = await analyzeVerse(verse, retryCount + 1);
            resolve(result);
          } catch (err) {
            reject(err);
          }
        } else {
          // 최대 재시도 횟수 초과
          console.error(`💥 최종 실패: ${verse.reference} (${maxRetries}회 재시도 후)`);
          resolve({ success: false, verse, error: `Exit code: ${code}` });
        }
      }
    });

    process.on('error', async (err) => {
      console.error(`❌ 오류: ${verse.reference}`, err);

      // 재시도
      if (retryCount < maxRetries) {
        console.log(`🔄 재시도 중... ${verse.reference} (${retryCount + 1}/${maxRetries})`);
        await sleep(5000);

        try {
          const result = await analyzeVerse(verse, retryCount + 1);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      } else {
        resolve({ success: false, verse, error: err.message });
      }
    });
  });
}

// 최근 완료 업데이트
function updateRecentCompletions(batch) {
  const list = document.getElementById('recentList');
  list.innerHTML = '';

  const recent = analysisController.completed.slice(-10).reverse();
  recent.forEach(verse => {
    const li = document.createElement('li');
    li.textContent = `✅ ${verse.reference}`;
    list.appendChild(li);
  });
}

// 분석 중단
function stopAnalysis() {
  if (!confirm('분석을 중단하시겠습니까?')) return;

  isAnalyzing = false;
  analysisController = null;

  document.getElementById('startBtn').disabled = false;
  document.getElementById('cancelBtn').style.display = 'none';
  document.getElementById('analysisPanel').style.display = 'none';

  console.log('분석 중단됨');
}

// 분석 완료
function finishAnalysis() {
  isAnalyzing = false;

  document.getElementById('startBtn').disabled = false;
  document.getElementById('cancelBtn').style.display = 'none';

  // 최종 통계
  const totalProcessed = analysisController.currentIndex;
  const successCount = analysisController.completed.length;
  const failCount = failedVerses.length;

  let message = `분석이 완료되었습니다!\n\n`;
  message += `✅ 성공: ${successCount}개 구절\n`;

  if (failCount > 0) {
    message += `❌ 실패: ${failCount}개 구절\n\n`;
    message += `실패한 구절:\n`;
    failedVerses.slice(0, 5).forEach(v => {
      message += `- ${v.reference}: ${v.error}\n`;
    });

    if (failCount > 5) {
      message += `... 외 ${failCount - 5}개\n`;
    }

    message += `\n💡 "실패한 것만 재분석" 버튼을 클릭하여 재시도할 수 있습니다.`;

    // 재분석 버튼 표시
    document.getElementById('retryFailedBtn').style.display = 'inline-block';
  }

  alert(message);

  console.log(`분석 완료: 성공 ${successCount}, 실패 ${failCount}`);

  // 선택 해제
  selectedBooks.clear();
  renderBooks(document.querySelector('.filter-btn.active').dataset.filter);
  updateSelectionInfo();
  updateProgress();
}

// 유틸리티 함수
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function formatTime(ms) {
  const seconds = Math.floor(ms / 1000);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = seconds % 60;

  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

// 앱 초기화
init();
