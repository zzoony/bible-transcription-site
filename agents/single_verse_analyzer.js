#!/usr/bin/env node

/**
 * Single Verse Analyzer Agent
 * 성경 구절 하나를 분석하여 데이터베이스에 저장하는 에이전트
 */

import { Anthropic } from '@anthropic-ai/sdk';
import pg from 'pg';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config({ path: join(__dirname, '..', '.env') });

// Initialize Anthropic client
const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
});

// Initialize PostgreSQL client
const pool = new pg.Pool({
    host: process.env.LOCAL_DB_HOST || 'localhost',
    port: parseInt(process.env.LOCAL_DB_PORT || '5432'),
    database: process.env.LOCAL_DB_NAME || 'bible_transcription',
    user: process.env.LOCAL_DB_USER || 'postgres',
    password: process.env.LOCAL_DB_PASSWORD || 'localdev123',
});

/**
 * 성경 구절 분석 프롬프트 생성 (새 형식 v2)
 */
function createAnalysisPrompt(verseReference, nivText) {
    return `[${verseReference}]
NIV: ${nivText}

Please analyze this Bible verse following the new output format v2. Provide a comprehensive linguistic and theological analysis in JSON format with the following structure:

{
  "sentence_structures": [
    {
      "sequence_order": 1,
      "semantic_classification": "의미적 분류 (e.g., 부가적 권면, 반복의 이유 1)",
      "original_text": "The sentence or clause",
      "korean_translation": "한국어 번역",
      "grammatical_explanation": "문법적 구조 설명 (e.g., 전환 부사 + 호격 + 명령문 구조)"
    }
  ],
  "vocabulary": [
    {
      "word": "word",
      "ipa_pronunciation": "[IPA pronunciation]",
      "korean_pronunciation": "한글 발음",
      "part_of_speech": "noun|verb|adjective|adverb|etc",
      "definition_korean": "한국어 정의 및 설명"
    }
  ],
  "contextual_explanation": {
    "integrated_explanation": "역사적/신학적/문학적 배경을 통합한 자연스러운 설명",
    "cross_references": ["verse1", "verse2"]
  },
  "korean_translation": {
    "natural_translation": "균형 잡힌 자연스러운 번역"
  },
  "special_explanations": [
    {
      "explanation_type": "grammar|interpretation|linguistic_note",
      "content": "문법적/해석적 특이점이나 주목할 점들"
    }
  ]
}

Requirements:
1. 의미적 분류: 문장을 의미 단위로 분류 (부가적 권면, 반복의 이유 등)
2. 문법적 설명: 각 문장의 문법적 구조를 간단히 설명
3. IPA + 한국어 발음: 둘 다 제공 (명사구는 IPA null 가능)
4. 통합된 문맥 설명: 역사적/신학적/문학적 내용을 하나로 통합
5. 자연스러운 번역: 직역/의역 구분 없이 균형 잡힌 번역
6. 특별 설명: 문법적/해석적 특이점 중심
7. 메타데이터 제외: 복잡도 점수, 핵심 주제 등 제외

Return ONLY the JSON object, no additional text.`;
}

/**
 * Claude API를 통해 구절 분석
 */
async function analyzeVerse(verseReference, nivText) {
    console.log(`📖 Analyzing ${verseReference}...`);

    try {
        const response = await anthropic.messages.create({
            model: 'claude-3-5-sonnet-20241022',
            max_tokens: 8000,
            messages: [{
                role: 'user',
                content: createAnalysisPrompt(verseReference, nivText)
            }]
        });

        const analysisText = response.content[0].text;
        return JSON.parse(analysisText);
    } catch (error) {
        console.error(`❌ Error analyzing verse: ${error.message}`);
        throw error;
    }
}

/**
 * 분석 결과를 데이터베이스에 저장
 */
async function saveAnalysisToDatabase(verseId, analysis) {
    const client = await pool.connect();

    try {
        await client.query('BEGIN');

        // 1. Delete existing data for this verse (v2 schema)
        await client.query('DELETE FROM sentence_structures WHERE verse_id = $1', [verseId]);
        await client.query('DELETE FROM vocabulary WHERE verse_id = $1', [verseId]);
        await client.query('DELETE FROM contextual_explanations WHERE verse_id = $1', [verseId]);
        await client.query('DELETE FROM korean_translations WHERE verse_id = $1', [verseId]);
        await client.query('DELETE FROM special_explanations WHERE verse_id = $1', [verseId]);

        // 2. Insert sentence structures (v2 schema)
        for (const sentence of analysis.sentence_structures) {
            await client.query(`
                INSERT INTO sentence_structures
                (verse_id, sequence_order, semantic_classification, original_text, korean_translation, grammatical_explanation)
                VALUES ($1, $2, $3, $4, $5, $6)
            `, [
                verseId,
                sentence.sequence_order,
                sentence.semantic_classification,
                sentence.original_text,
                sentence.korean_translation,
                sentence.grammatical_explanation
            ]);
        }

        // 3. Insert vocabulary (v2 schema)
        for (const vocab of analysis.vocabulary) {
            await client.query(`
                INSERT INTO vocabulary
                (verse_id, word, ipa_pronunciation, korean_pronunciation, part_of_speech, definition_korean)
                VALUES ($1, $2, $3, $4, $5, $6)
            `, [
                verseId,
                vocab.word,
                vocab.ipa_pronunciation,
                vocab.korean_pronunciation,
                vocab.part_of_speech,
                vocab.definition_korean
            ]);
        }

        // 4. Insert contextual explanation (v2 schema)
        const contextual = analysis.contextual_explanation;
        await client.query(`
            INSERT INTO contextual_explanations
            (verse_id, integrated_explanation, cross_references)
            VALUES ($1, $2, $3)
            ON CONFLICT (verse_id) DO UPDATE SET
                integrated_explanation = $2,
                cross_references = $3
        `, [
            verseId,
            contextual.integrated_explanation,
            contextual.cross_references
        ]);

        // 5. Insert Korean translation (v2 schema)
        const trans = analysis.korean_translation;
        await client.query(`
            INSERT INTO korean_translations
            (verse_id, natural_translation)
            VALUES ($1, $2)
            ON CONFLICT (verse_id) DO UPDATE SET
                natural_translation = $2
        `, [
            verseId,
            trans.natural_translation
        ]);

        // 6. Insert special explanations (v2 schema)
        for (const explanation of analysis.special_explanations) {
            await client.query(`
                INSERT INTO special_explanations
                (verse_id, explanation_type, content)
                VALUES ($1, $2, $3)
            `, [
                verseId,
                explanation.explanation_type,
                explanation.content
            ]);
        }

        // 7. Analysis metadata removed in v2 schema

        // 8. Mark verse as analyzed
        await client.query(`
            UPDATE verses
            SET analysis_completed = true, updated_at = NOW()
            WHERE id = $1
        `, [verseId]);

        await client.query('COMMIT');
        console.log(`✅ Analysis saved for verse ID ${verseId}`);

    } catch (error) {
        await client.query('ROLLBACK');
        console.error(`❌ Error saving to database: ${error.message}`);
        throw error;
    } finally {
        client.release();
    }
}

/**
 * 구절 정보 조회 또는 생성
 */
async function getOrCreateVerse(bookName, chapter, verseNumber, nivText) {
    const client = await pool.connect();

    try {
        // Check if verse exists
        const checkResult = await client.query(`
            SELECT v.id, v.niv_text, v.analysis_completed
            FROM verses v
            JOIN chapters c ON v.chapter_id = c.id
            JOIN books b ON v.book_id = b.id
            WHERE b.name_english = $1
            AND c.chapter_number = $2
            AND v.verse_number = $3
        `, [bookName, chapter, verseNumber]);

        if (checkResult.rows.length > 0) {
            return checkResult.rows[0];
        }

        // Create verse if it doesn't exist
        const reference = `${bookName} ${chapter}:${verseNumber}`;

        const insertResult = await client.query(`
            INSERT INTO verses (book_id, chapter_id, verse_number, reference, niv_text)
            SELECT b.id, c.id, $3, $4, $5
            FROM books b
            JOIN chapters c ON c.book_id = b.id
            WHERE b.name_english = $1 AND c.chapter_number = $2
            RETURNING id
        `, [bookName, chapter, verseNumber, reference, nivText]);

        return {
            id: insertResult.rows[0].id,
            niv_text: nivText,
            analysis_completed: false
        };

    } finally {
        client.release();
    }
}

/**
 * Main execution function
 */
async function main() {
    // Parse command line arguments
    const args = process.argv.slice(2);

    if (args.length < 4) {
        console.log('Usage: node single_verse_analyzer.js <book> <chapter> <verse> "<NIV text>"');
        console.log('Example: node single_verse_analyzer.js Philippians 3 2 "Watch out for those dogs..."');
        process.exit(1);
    }

    const bookName = args[0];
    const chapter = parseInt(args[1]);
    const verseNumber = parseInt(args[2]);
    const nivText = args.slice(3).join(' ');

    try {
        // Get or create verse
        const verse = await getOrCreateVerse(bookName, chapter, verseNumber, nivText);

        if (verse.analysis_completed) {
            console.log(`ℹ️ Verse ${bookName} ${chapter}:${verseNumber} already analyzed. Skipping.`);

            // Optionally re-analyze if --force flag is provided
            if (!args.includes('--force')) {
                return;
            }
            console.log('🔄 Re-analyzing due to --force flag...');
        }

        // Analyze verse
        const reference = `${bookName} ${chapter}:${verseNumber}`;
        const analysis = await analyzeVerse(reference, nivText);

        // Save to database
        await saveAnalysisToDatabase(verse.id, analysis);

        console.log(`✨ Successfully analyzed ${reference}`);

    } catch (error) {
        console.error(`❌ Error in main: ${error.message}`);
        process.exit(1);
    } finally {
        await pool.end();
    }
}

// Run if executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
    main();
}

export { analyzeVerse, saveAnalysisToDatabase, getOrCreateVerse };