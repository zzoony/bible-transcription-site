#!/usr/bin/env node

/**
 * Batch Processor for Philippians Chapter 3
 * 빌립보서 3장 전체를 처리하는 배치 프로세서
 */

import { analyzeVerse, saveAnalysisToDatabase, getOrCreateVerse } from './single_verse_analyzer.js';
import pg from 'pg';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load environment variables
dotenv.config({ path: join(__dirname, '..', '.env') });

// Initialize PostgreSQL client
const pool = new pg.Pool({
    host: process.env.LOCAL_DB_HOST || 'localhost',
    port: parseInt(process.env.LOCAL_DB_PORT || '5432'),
    database: process.env.LOCAL_DB_NAME || 'bible_transcription',
    user: process.env.LOCAL_DB_USER || 'postgres',
    password: process.env.LOCAL_DB_PASSWORD || 'localdev123',
});

// Philippians 3 NIV text
const philippians3Verses = [
    { verse: 1, text: "Further, my brothers and sisters, rejoice in the Lord! It is no trouble for me to write the same things to you again, and it is a safeguard for you." },
    { verse: 2, text: "Watch out for those dogs, those evildoers, those mutilators of the flesh." },
    { verse: 3, text: "For it is we who are the circumcision, we who serve God by his Spirit, who boast in Christ Jesus, and who put no confidence in the flesh—" },
    { verse: 4, text: "though I myself have reasons for such confidence. If someone else thinks they have reasons to put confidence in the flesh, I have more:" },
    { verse: 5, text: "circumcised on the eighth day, of the people of Israel, of the tribe of Benjamin, a Hebrew of Hebrews; in regard to the law, a Pharisee;" },
    { verse: 6, text: "as for zeal, persecuting the church; as for righteousness based on the law, faultless." },
    { verse: 7, text: "But whatever were gains to me I now consider loss for the sake of Christ." },
    { verse: 8, text: "What is more, I consider everything a loss because of the surpassing worth of knowing Christ Jesus my Lord, for whose sake I have lost all things. I consider them garbage, that I may gain Christ" },
    { verse: 9, text: "and be found in him, not having a righteousness of my own that comes from the law, but that which is through faith in Christ—the righteousness that comes from God on the basis of faith." },
    { verse: 10, text: "I want to know Christ—yes, to know the power of his resurrection and participation in his sufferings, becoming like him in his death," },
    { verse: 11, text: "and so, somehow, attaining to the resurrection from the dead." },
    { verse: 12, text: "Not that I have already obtained all this, or have already arrived at my goal, but I press on to take hold of that for which Christ Jesus took hold of me." },
    { verse: 13, text: "Brothers and sisters, I do not consider myself yet to have taken hold of it. But one thing I do: Forgetting what is behind and straining toward what is ahead," },
    { verse: 14, text: "I press on toward the goal to win the prize for which God has called me heavenward in Christ Jesus." },
    { verse: 15, text: "All of us, then, who are mature should take such a view of things. And if on some point you think differently, that too God will make clear to you." },
    { verse: 16, text: "Only let us live up to what we have already attained." },
    { verse: 17, text: "Join together in following my example, brothers and sisters, and just as you have us as a model, keep your eyes on those who live as we do." },
    { verse: 18, text: "For, as I have often told you before and now tell you again even with tears, many live as enemies of the cross of Christ." },
    { verse: 19, text: "Their destiny is destruction, their god is their stomach, and their glory is in their shame. Their mind is set on earthly things." },
    { verse: 20, text: "But our citizenship is in heaven. And we eagerly await a Savior from there, the Lord Jesus Christ," },
    { verse: 21, text: "who, by the power that enables him to bring everything under his control, will transform our lowly bodies so that they will be like his glorious body." }
];

/**
 * Process a single verse with delay to avoid rate limiting
 */
async function processVerse(bookName, chapter, verseData, delay = 2000) {
    const { verse: verseNumber, text: nivText } = verseData;
    const reference = `${bookName} ${chapter}:${verseNumber}`;

    console.log(`\n${'='.repeat(60)}`);
    console.log(`📖 Processing ${reference}`);
    console.log(`${'='.repeat(60)}`);

    try {
        // Get or create verse
        const verse = await getOrCreateVerse(bookName, chapter, verseNumber, nivText);

        if (verse.analysis_completed) {
            console.log(`✓ ${reference} already analyzed. Skipping.`);
            return { success: true, skipped: true, reference };
        }

        // Analyze verse
        const analysis = await analyzeVerse(reference, nivText);

        // Save to database
        await saveAnalysisToDatabase(verse.id, analysis);

        console.log(`✅ Successfully analyzed ${reference}`);

        // Add delay between API calls
        if (delay > 0) {
            console.log(`⏳ Waiting ${delay/1000} seconds before next verse...`);
            await new Promise(resolve => setTimeout(resolve, delay));
        }

        return { success: true, skipped: false, reference };

    } catch (error) {
        console.error(`❌ Failed to process ${reference}: ${error.message}`);
        return { success: false, error: error.message, reference };
    }
}

/**
 * Main execution function
 */
async function main() {
    console.log('🚀 Starting Philippians 3 Batch Processor');
    console.log(`📚 Processing ${philippians3Verses.length} verses`);

    const results = {
        total: philippians3Verses.length,
        processed: 0,
        skipped: 0,
        failed: 0,
        errors: []
    };

    const startTime = Date.now();

    for (const verseData of philippians3Verses) {
        const result = await processVerse('Philippians', 3, verseData);

        if (result.success) {
            if (result.skipped) {
                results.skipped++;
            } else {
                results.processed++;
            }
        } else {
            results.failed++;
            results.errors.push(result);
        }

        // Progress update
        const completed = results.processed + results.skipped + results.failed;
        const percentage = Math.round((completed / results.total) * 100);
        console.log(`📊 Progress: ${completed}/${results.total} (${percentage}%)`);
    }

    // Final summary
    const elapsedTime = Math.round((Date.now() - startTime) / 1000);
    console.log(`\n${'='.repeat(60)}`);
    console.log('📈 PROCESSING COMPLETE');
    console.log(`${'='.repeat(60)}`);
    console.log(`✅ Processed: ${results.processed} verses`);
    console.log(`⏭️  Skipped: ${results.skipped} verses (already analyzed)`);
    console.log(`❌ Failed: ${results.failed} verses`);
    console.log(`⏱️  Total time: ${elapsedTime} seconds`);

    if (results.errors.length > 0) {
        console.log('\n❌ Errors:');
        results.errors.forEach(err => {
            console.log(`  - ${err.reference}: ${err.error}`);
        });
    }

    // Close database connection
    await pool.end();
}

// Run if executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
    main().catch(console.error);
}