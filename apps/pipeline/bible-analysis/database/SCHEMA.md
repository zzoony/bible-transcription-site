# 데이터베이스 스키마

**생성일**: 2025-10-10T08:06:32.096Z

**프로젝트**: bible-transcription-site

**총 테이블 수**: 8

---

## books

### 컬럼 목록

| 컬럼명 | 타입 | 샘플 값 |
|--------|------|--------|
| id | INTEGER | 1 |
| name_english | TEXT | Philippians |
| name_korean | TEXT | 빌립보서 |
| abbreviation | TEXT | Phil |
| testament | INTEGER | 2 |
| order_number | INTEGER | 50 |
| total_chapters | INTEGER | 4 |
| created_at | TIMESTAMP | 2025-09-29T07:00:06.074365+00:00 |
| updated_at | TIMESTAMP | 2025-09-29T07:00:06.074365+00:00 |

**총 레코드 수**: 66

---

## chapters

### 컬럼 목록

| 컬럼명 | 타입 | 샘플 값 |
|--------|------|--------|
| id | INTEGER | 1 |
| book_id | INTEGER | 1 |
| chapter_number | INTEGER | 1 |
| total_verses | INTEGER | 30 |
| created_at | TIMESTAMP | 2025-09-29T07:00:06.074365+00:00 |
| updated_at | TIMESTAMP | 2025-09-29T07:00:06.074365+00:00 |

**총 레코드 수**: 1192

---

## verses

### 컬럼 목록

| 컬럼명 | 타입 | 샘플 값 |
|--------|------|--------|
| id | INTEGER | 1 |
| book_id | INTEGER | 1 |
| chapter_id | INTEGER | 1 |
| verse_number | INTEGER | 1 |
| reference | TEXT | Philippians 3:1 |
| niv_text | TEXT | Further, my brothers and sisters, rejoice in th... |
| analysis_completed | BOOLEAN | true |
| created_at | TIMESTAMP | 2025-09-29T02:38:22.704955+00:00 |
| updated_at | TIMESTAMP | 2025-09-29T02:38:22.704955+00:00 |

**총 레코드 수**: 30903

---

## sentence_structures

### 컬럼 목록

| 컬럼명 | 타입 | 샘플 값 |
|--------|------|--------|
| id | INTEGER | 1 |
| verse_id | INTEGER | 1 |
| sequence_order | INTEGER | 1 |
| semantic_classification | TEXT | 부가적 권면 |
| original_text | TEXT | Further, my brothers and sisters, rejoice in th... |
| korean_translation | TEXT | 더 나아가, 나의 형제자매들이여, 주 안에서 기뻐하십시오! |
| grammatical_explanation | TEXT | 전환 부사 + 호격 + 명령문 구조 |
| created_at | TIMESTAMP | 2025-09-29T02:38:22.704955+00:00 |

**총 레코드 수**: 42979

---

## vocabulary

### 컬럼 목록

| 컬럼명 | 타입 | 샘플 값 |
|--------|------|--------|
| id | INTEGER | 1 |
| verse_id | INTEGER | 1 |
| word | TEXT | Further |
| ipa_pronunciation | TEXT | [ˈfɜːrðər] |
| korean_pronunciation | TEXT | 퍼더 |
| part_of_speech | TEXT | 부사 |
| definition_korean | TEXT | 더 나아가, 끝으로 |
| usage_note | TEXT | NULL |
| frequency | INTEGER | 1 |
| created_at | TIMESTAMP | 2025-09-29T02:38:22.704955+00:00 |

**총 레코드 수**: 189575

---

## contextual_explanations

### 컬럼 목록

| 컬럼명 | 타입 | 샘플 값 |
|--------|------|--------|
| id | INTEGER | 1 |
| verse_id | INTEGER | 1 |
| integrated_explanation | TEXT | 바울이 로마 감옥에서 빌립보 교회에 보낸 서신의 3장 시작 부분입니다. 3장을 시작하... |
| cross_references | TEXT | Philippians 2:18,Philippians 4:4,1 Thessalonians 5:16,Acts 16:12-40,Philippians 4:15-16,Philippians 3:2,Philippians 3:4-14 |
| created_at | TIMESTAMP | 2025-09-29T02:38:22.704955+00:00 |

**총 레코드 수**: 30913

---

## korean_translations

### 컬럼 목록

| 컬럼명 | 타입 | 샘플 값 |
|--------|------|--------|
| id | INTEGER | 1 |
| verse_id | INTEGER | 1 |
| natural_translation | TEXT | 끝으로 나의 형제자매들이여, 주 안에서 기뻐하십시오! 같은 것들을 여러분에게 다시 쓰... |
| translation_notes | TEXT | NULL |
| created_at | TIMESTAMP | 2025-09-29T02:38:22.704955+00:00 |
| updated_at | TIMESTAMP | 2025-09-29T02:38:22.704955+00:00 |

**총 레코드 수**: 30914

---

## special_explanations

### 컬럼 목록

| 컬럼명 | 타입 | 샘플 값 |
|--------|------|--------|
| id | INTEGER | 1 |
| verse_id | INTEGER | 1 |
| explanation_type | TEXT | literary |
| content | TEXT | "Further" = 문학적으로는 결론을 의미하지만, 실제로는 3-4장이 더 이어집니... |
| examples | TEXT |  |
| created_at | TIMESTAMP | 2025-09-29T02:38:22.704955+00:00 |

**총 레코드 수**: 966

---

