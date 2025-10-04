-- Supabase Schema Recreation - Exact Match with Local DB
-- Reset and recreate all tables to match local structure

-- Drop existing tables if they exist (in reverse dependency order)
DROP TABLE IF EXISTS processing_queue CASCADE;
DROP TABLE IF EXISTS special_explanations CASCADE;
DROP TABLE IF EXISTS korean_translations CASCADE;
DROP TABLE IF EXISTS contextual_explanations CASCADE;
DROP TABLE IF EXISTS vocabulary CASCADE;
DROP TABLE IF EXISTS sentence_structures CASCADE;
DROP TABLE IF EXISTS verses CASCADE;
DROP TABLE IF EXISTS chapters CASCADE;
DROP TABLE IF EXISTS books CASCADE;

-- Create books table (exact match with local)
CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    name_english VARCHAR NOT NULL,
    name_korean VARCHAR NOT NULL,
    abbreviation VARCHAR NOT NULL,
    testament SMALLINT NOT NULL,
    order_number SMALLINT NOT NULL,
    total_chapters SMALLINT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create chapters table (exact match with local)
CREATE TABLE chapters (
    id SERIAL PRIMARY KEY,
    book_id INTEGER NOT NULL REFERENCES books(id) ON DELETE CASCADE,
    chapter_number SMALLINT NOT NULL,
    total_verses SMALLINT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create verses table (exact match with local)
CREATE TABLE verses (
    id SERIAL PRIMARY KEY,
    book_id INTEGER NOT NULL REFERENCES books(id) ON DELETE CASCADE,
    chapter_id INTEGER NOT NULL REFERENCES chapters(id) ON DELETE CASCADE,
    verse_number SMALLINT NOT NULL,
    reference VARCHAR NOT NULL UNIQUE,
    niv_text TEXT NOT NULL,
    analysis_completed BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create sentence_structures table (exact match with local)
CREATE TABLE sentence_structures (
    id SERIAL PRIMARY KEY,
    verse_id INTEGER NOT NULL REFERENCES verses(id) ON DELETE CASCADE,
    sequence_order SMALLINT NOT NULL,
    semantic_classification VARCHAR NOT NULL,
    original_text TEXT NOT NULL,
    korean_translation TEXT NOT NULL,
    grammatical_explanation TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create vocabulary table (exact match with local)
CREATE TABLE vocabulary (
    id SERIAL PRIMARY KEY,
    verse_id INTEGER NOT NULL REFERENCES verses(id) ON DELETE CASCADE,
    word VARCHAR NOT NULL,
    ipa_pronunciation VARCHAR,
    korean_pronunciation VARCHAR,
    part_of_speech VARCHAR,
    definition_korean TEXT NOT NULL,
    usage_note TEXT,
    frequency INTEGER DEFAULT 1,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create contextual_explanations table (exact match with local)
CREATE TABLE contextual_explanations (
    id SERIAL PRIMARY KEY,
    verse_id INTEGER NOT NULL REFERENCES verses(id) ON DELETE CASCADE,
    integrated_explanation TEXT NOT NULL,
    cross_references TEXT[], -- Using TEXT[] instead of ARRAY for Supabase compatibility
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create korean_translations table (exact match with local)
CREATE TABLE korean_translations (
    id SERIAL PRIMARY KEY,
    verse_id INTEGER NOT NULL REFERENCES verses(id) ON DELETE CASCADE,
    natural_translation TEXT NOT NULL,
    translation_notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create special_explanations table (exact match with local)
CREATE TABLE special_explanations (
    id SERIAL PRIMARY KEY,
    verse_id INTEGER NOT NULL REFERENCES verses(id) ON DELETE CASCADE,
    explanation_type VARCHAR,
    content TEXT NOT NULL,
    examples JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create processing_queue table (from local)
CREATE TABLE processing_queue (
    id SERIAL PRIMARY KEY,
    verse_id INTEGER REFERENCES verses(id) ON DELETE CASCADE,
    status VARCHAR(20) DEFAULT 'pending' CHECK (status IN ('pending', 'processing', 'completed', 'failed')),
    priority INTEGER DEFAULT 1,
    attempts INTEGER DEFAULT 0,
    error_message TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    completed_at TIMESTAMP WITH TIME ZONE
);

-- Create indexes for better performance
CREATE INDEX idx_verses_reference ON verses(reference);
CREATE INDEX idx_verses_book_chapter ON verses(book_id, chapter_id);
CREATE INDEX idx_verses_analysis_completed ON verses(analysis_completed);
CREATE INDEX idx_vocabulary_verse_id ON vocabulary(verse_id);
CREATE INDEX idx_sentence_structures_verse_id ON sentence_structures(verse_id);
CREATE INDEX idx_contextual_explanations_verse_id ON contextual_explanations(verse_id);
CREATE INDEX idx_korean_translations_verse_id ON korean_translations(verse_id);
CREATE INDEX idx_special_explanations_verse_id ON special_explanations(verse_id);
CREATE INDEX idx_processing_queue_status ON processing_queue(status);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply triggers to tables with updated_at columns
CREATE TRIGGER update_books_updated_at BEFORE UPDATE ON books FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_chapters_updated_at BEFORE UPDATE ON chapters FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_verses_updated_at BEFORE UPDATE ON verses FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_korean_translations_updated_at BEFORE UPDATE ON korean_translations FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Enable RLS on all tables
ALTER TABLE books ENABLE ROW LEVEL SECURITY;
ALTER TABLE chapters ENABLE ROW LEVEL SECURITY;
ALTER TABLE verses ENABLE ROW LEVEL SECURITY;
ALTER TABLE sentence_structures ENABLE ROW LEVEL SECURITY;
ALTER TABLE vocabulary ENABLE ROW LEVEL SECURITY;
ALTER TABLE contextual_explanations ENABLE ROW LEVEL SECURITY;
ALTER TABLE korean_translations ENABLE ROW LEVEL SECURITY;
ALTER TABLE special_explanations ENABLE ROW LEVEL SECURITY;
ALTER TABLE processing_queue ENABLE ROW LEVEL SECURITY;

-- Create permissive policies for authenticated users
CREATE POLICY "Allow all for authenticated users" ON books FOR ALL TO authenticated USING (true);
CREATE POLICY "Allow all for authenticated users" ON chapters FOR ALL TO authenticated USING (true);
CREATE POLICY "Allow all for authenticated users" ON verses FOR ALL TO authenticated USING (true);
CREATE POLICY "Allow all for authenticated users" ON sentence_structures FOR ALL TO authenticated USING (true);
CREATE POLICY "Allow all for authenticated users" ON vocabulary FOR ALL TO authenticated USING (true);
CREATE POLICY "Allow all for authenticated users" ON contextual_explanations FOR ALL TO authenticated USING (true);
CREATE POLICY "Allow all for authenticated users" ON korean_translations FOR ALL TO authenticated USING (true);
CREATE POLICY "Allow all for authenticated users" ON special_explanations FOR ALL TO authenticated USING (true);
CREATE POLICY "Allow all for authenticated users" ON processing_queue FOR ALL TO authenticated USING (true);

-- Allow read access for anonymous users
CREATE POLICY "Allow read for anonymous users" ON books FOR SELECT TO anon USING (true);
CREATE POLICY "Allow read for anonymous users" ON chapters FOR SELECT TO anon USING (true);
CREATE POLICY "Allow read for anonymous users" ON verses FOR SELECT TO anon USING (true);
CREATE POLICY "Allow read for anonymous users" ON sentence_structures FOR SELECT TO anon USING (true);
CREATE POLICY "Allow read for anonymous users" ON vocabulary FOR SELECT TO anon USING (true);
CREATE POLICY "Allow read for anonymous users" ON contextual_explanations FOR SELECT TO anon USING (true);
CREATE POLICY "Allow read for anonymous users" ON korean_translations FOR SELECT TO anon USING (true);
CREATE POLICY "Allow read for anonymous users" ON special_explanations FOR SELECT TO anon USING (true);

-- Insert initial data with exact IDs from local
INSERT INTO books (id, name_english, name_korean, abbreviation, testament, order_number, total_chapters) VALUES
(1, 'Philippians', '빌립보서', 'Phil', 2, 50, 4);

INSERT INTO chapters (id, book_id, chapter_number, total_verses) VALUES
(1, 1, 1, 30),
(4, 1, 2, 30),
(5, 1, 3, 21),
(6, 1, 4, 23);

-- Reset sequences to match current data
SELECT setval('books_id_seq', (SELECT MAX(id) FROM books));
SELECT setval('chapters_id_seq', (SELECT MAX(id) FROM chapters));