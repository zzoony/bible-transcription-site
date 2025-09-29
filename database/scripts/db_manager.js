// Database Manager - Handles both local and Supabase connections
import { createClient } from '@supabase/supabase-js';
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

class DatabaseManager {
  constructor(mode = 'local') {
    this.mode = mode;
    this.connection = null;
    this.supabaseClient = null;
  }

  // Connect to database based on mode
  async connect() {
    if (this.mode === 'local') {
      return this.connectLocal();
    } else if (this.mode === 'supabase') {
      return this.connectSupabase();
    }
  }

  // Local PostgreSQL connection
  async connectLocal() {
    const { Pool } = pg;
    this.connection = new Pool({
      host: process.env.LOCAL_DB_HOST,
      port: process.env.LOCAL_DB_PORT,
      database: process.env.LOCAL_DB_NAME,
      user: process.env.LOCAL_DB_USER,
      password: process.env.LOCAL_DB_PASSWORD,
    });

    try {
      await this.connection.query('SELECT 1');
      console.log('✅ Connected to local PostgreSQL');
      return this.connection;
    } catch (error) {
      console.error('❌ Local DB connection failed:', error);
      throw error;
    }
  }

  // Supabase connection
  async connectSupabase() {
    this.supabaseClient = createClient(
      process.env.SUPABASE_URL,
      process.env.SUPABASE_SERVICE_KEY
    );

    // Test connection
    const { data, error } = await this.supabaseClient
      .from('books')
      .select('count');

    if (error) {
      console.error('❌ Supabase connection failed:', error);
      throw error;
    }

    console.log('✅ Connected to Supabase');
    return this.supabaseClient;
  }

  // Insert verse analysis data
  async insertVerseAnalysis(analysisData) {
    const {
      verse_reference,
      niv_text,
      sentence_structures,
      vocabulary,
      contextual_notes,
      korean_translation,
      special_explanations
    } = analysisData;

    try {
      // Start transaction (local) or batch insert (Supabase)
      if (this.mode === 'local') {
        const client = await this.connection.connect();
        try {
          await client.query('BEGIN');

          // 1. Insert or get verse
          const verseResult = await client.query(
            `INSERT INTO verses (reference, niv_text, book_id, chapter_id, verse_number)
             VALUES ($1, $2, $3, $4, $5)
             ON CONFLICT (reference)
             DO UPDATE SET niv_text = $2, updated_at = NOW()
             RETURNING id`,
            [verse_reference, niv_text, /* book_id */, /* chapter_id */, /* verse_number */]
          );
          const verseId = verseResult.rows[0].id;

          // 2. Insert sentence structures
          for (const structure of sentence_structures) {
            await client.query(
              `INSERT INTO sentence_structures
               (verse_id, sequence_order, original_text, korean_translation, clause_type, components)
               VALUES ($1, $2, $3, $4, $5, $6)`,
              [verseId, structure.sequence, structure.original_text,
               structure.korean_translation, structure.type, JSON.stringify(structure.components)]
            );
          }

          // 3. Insert vocabulary
          for (const word of vocabulary) {
            await client.query(
              `INSERT INTO vocabulary
               (verse_id, word, pronunciation_ipa, pronunciation_simple, part_of_speech, definition_korean)
               VALUES ($1, $2, $3, $4, $5, $6)`,
              [verseId, word.word, word.pronunciation_ipa,
               word.pronunciation_simple, word.part_of_speech, word.definition_korean]
            );
          }

          // 4. Insert Korean translation
          await client.query(
            `INSERT INTO korean_translations (verse_id, literal_translation, dynamic_translation)
             VALUES ($1, $2, $3)
             ON CONFLICT (verse_id) DO UPDATE
             SET literal_translation = $2, dynamic_translation = $3`,
            [verseId, korean_translation.literal, korean_translation.dynamic]
          );

          // 5. Mark as analyzed
          await client.query(
            `UPDATE verses SET analysis_completed = TRUE WHERE id = $1`,
            [verseId]
          );

          await client.query('COMMIT');
          console.log(`✅ Saved: ${verse_reference}`);
        } catch (e) {
          await client.query('ROLLBACK');
          throw e;
        } finally {
          client.release();
        }
      } else {
        // Supabase batch insert
        const { data: verse, error: verseError } = await this.supabaseClient
          .from('verses')
          .upsert({
            reference: verse_reference,
            niv_text: niv_text,
            analysis_completed: true
          })
          .select()
          .single();

        if (verseError) throw verseError;

        // Batch insert related data
        await Promise.all([
          this.supabaseClient.from('sentence_structures').insert(
            sentence_structures.map(s => ({ verse_id: verse.id, ...s }))
          ),
          this.supabaseClient.from('vocabulary').insert(
            vocabulary.map(v => ({ verse_id: verse.id, ...v }))
          ),
          this.supabaseClient.from('korean_translations').upsert({
            verse_id: verse.id,
            ...korean_translation
          })
        ]);

        console.log(`✅ Saved to Supabase: ${verse_reference}`);
      }
    } catch (error) {
      console.error(`❌ Failed to save ${verse_reference}:`, error);
      throw error;
    }
  }

  // Migrate from local to Supabase
  async migrateToSupabase() {
    console.log('🚀 Starting migration from local to Supabase...');

    // Connect to both databases
    const localDb = new DatabaseManager('local');
    await localDb.connect();

    const supabaseDb = new DatabaseManager('supabase');
    await supabaseDb.connect();

    try {
      // Get all data from local
      const tables = [
        'books', 'chapters', 'verses', 'sentence_structures',
        'vocabulary', 'contextual_notes', 'korean_translations',
        'special_explanations'
      ];

      for (const table of tables) {
        console.log(`📦 Migrating ${table}...`);

        const result = await localDb.connection.query(
          `SELECT * FROM ${table}`
        );

        if (result.rows.length > 0) {
          // Batch insert to Supabase
          const batchSize = 100;
          for (let i = 0; i < result.rows.length; i += batchSize) {
            const batch = result.rows.slice(i, i + batchSize);

            const { error } = await supabaseDb.supabaseClient
              .from(table)
              .insert(batch);

            if (error) {
              console.error(`❌ Error migrating ${table}:`, error);
            } else {
              console.log(`✅ Migrated ${i + batch.length}/${result.rows.length} rows`);
            }
          }
        }
      }

      console.log('✅ Migration completed successfully!');
    } catch (error) {
      console.error('❌ Migration failed:', error);
      throw error;
    }
  }

  // Get processing statistics
  async getStats() {
    const query = `
      SELECT
        (SELECT COUNT(*) FROM verses) as total_verses,
        (SELECT COUNT(*) FROM verses WHERE analysis_completed = true) as analyzed_verses,
        (SELECT COUNT(*) FROM processing_queue WHERE status = 'pending') as pending,
        (SELECT COUNT(*) FROM processing_queue WHERE status = 'processing') as processing,
        (SELECT COUNT(*) FROM processing_queue WHERE status = 'failed') as failed
    `;

    if (this.mode === 'local') {
      const result = await this.connection.query(query);
      return result.rows[0];
    } else {
      // Supabase doesn't support this exact query format, use individual queries
      const [verses, analyzed, queue] = await Promise.all([
        this.supabaseClient.from('verses').select('id', { count: 'exact' }),
        this.supabaseClient.from('verses').select('id', { count: 'exact' })
          .eq('analysis_completed', true),
        this.supabaseClient.from('processing_queue').select('status')
      ]);

      return {
        total_verses: verses.count,
        analyzed_verses: analyzed.count,
        pending: queue.data?.filter(q => q.status === 'pending').length || 0,
        processing: queue.data?.filter(q => q.status === 'processing').length || 0,
        failed: queue.data?.filter(q => q.status === 'failed').length || 0
      };
    }
  }
}

export default DatabaseManager;