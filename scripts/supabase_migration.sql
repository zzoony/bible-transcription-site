-- Supabase Migration Script for Bible Transcription Database
-- Created: 2025-09-29
-- Purpose: Create schema for Bible analysis data

-- Enable Row Level Security (RLS) for security
-- We'll start with basic setup and can adjust RLS policies later

-- Books table
CREATE TABLE IF NOT EXISTS books (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    abbreviation VARCHAR(10) NOT NULL UNIQUE,
    testament VARCHAR(3) CHECK (testament IN ('OT', 'NT')),
    book_order INTEGER NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Chapters table
CREATE TABLE IF NOT EXISTS chapters (
    id SERIAL PRIMARY KEY,
    book_id INTEGER REFERENCES books(id) ON DELETE CASCADE,
    chapter_number INTEGER NOT NULL,
    verse_count INTEGER DEFAULT 0,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    UNIQUE(book_id, chapter_number)
);

-- Main verses table
CREATE TABLE IF NOT EXISTS verses (
    id SERIAL PRIMARY KEY,
    book_id INTEGER REFERENCES books(id) ON DELETE CASCADE,
    chapter_id INTEGER REFERENCES chapters(id) ON DELETE CASCADE,
    verse_number INTEGER NOT NULL,
    reference VARCHAR(50) NOT NULL UNIQUE,
    niv_text TEXT NOT NULL,
    analysis_completed BOOLEAN DEFAULT FALSE,
    complexity_score INTEGER DEFAULT 1 CHECK (complexity_score BETWEEN 1 AND 5),
    analysis_date TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Sentence structure analysis
CREATE TABLE IF NOT EXISTS sentence_structures (
    id SERIAL PRIMARY KEY,
    verse_id INTEGER REFERENCES verses(id) ON DELETE CASCADE,
    structure_type VARCHAR(100) NOT NULL,
    explanation TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Vocabulary table
CREATE TABLE IF NOT EXISTS vocabulary (
    id SERIAL PRIMARY KEY,
    verse_id INTEGER REFERENCES verses(id) ON DELETE CASCADE,
    word VARCHAR(100) NOT NULL,
    ipa_pronunciation VARCHAR(200),
    korean_pronunciation VARCHAR(200),
    meaning TEXT NOT NULL,
    part_of_speech VARCHAR(50),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Contextual explanations
CREATE TABLE IF NOT EXISTS contextual_explanations (
    id SERIAL PRIMARY KEY,
    verse_id INTEGER REFERENCES verses(id) ON DELETE CASCADE,
    context_type VARCHAR(50) NOT NULL,
    explanation TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Korean translations
CREATE TABLE IF NOT EXISTS korean_translations (
    id SERIAL PRIMARY KEY,
    verse_id INTEGER REFERENCES verses(id) ON DELETE CASCADE,
    translation_type VARCHAR(50) DEFAULT 'natural',
    korean_text TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Special explanations
CREATE TABLE IF NOT EXISTS special_explanations (
    id SERIAL PRIMARY KEY,
    verse_id INTEGER REFERENCES verses(id) ON DELETE CASCADE,
    explanation_type VARCHAR(50) NOT NULL,
    content TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Processing queue for tracking analysis progress
CREATE TABLE IF NOT EXISTS processing_queue (
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
CREATE INDEX IF NOT EXISTS idx_verses_reference ON verses(reference);
CREATE INDEX IF NOT EXISTS idx_verses_book_chapter ON verses(book_id, chapter_id);
CREATE INDEX IF NOT EXISTS idx_verses_analysis_completed ON verses(analysis_completed);
CREATE INDEX IF NOT EXISTS idx_vocabulary_verse_id ON vocabulary(verse_id);
CREATE INDEX IF NOT EXISTS idx_sentence_structures_verse_id ON sentence_structures(verse_id);
CREATE INDEX IF NOT EXISTS idx_contextual_explanations_verse_id ON contextual_explanations(verse_id);
CREATE INDEX IF NOT EXISTS idx_processing_queue_status ON processing_queue(status);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply triggers to all tables with updated_at columns
CREATE TRIGGER update_books_updated_at BEFORE UPDATE ON books FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_chapters_updated_at BEFORE UPDATE ON chapters FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_verses_updated_at BEFORE UPDATE ON verses FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_sentence_structures_updated_at BEFORE UPDATE ON sentence_structures FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_vocabulary_updated_at BEFORE UPDATE ON vocabulary FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_contextual_explanations_updated_at BEFORE UPDATE ON contextual_explanations FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_korean_translations_updated_at BEFORE UPDATE ON korean_translations FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_special_explanations_updated_at BEFORE UPDATE ON special_explanations FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Create helpful views
CREATE OR REPLACE VIEW verse_analysis_complete AS
SELECT
    v.id,
    v.reference,
    v.niv_text,
    v.analysis_completed,
    COUNT(ss.id) as structure_count,
    COUNT(vocab.id) as vocabulary_count,
    COUNT(ce.id) as context_count,
    COUNT(kt.id) as translation_count,
    COUNT(se.id) as special_count
FROM verses v
LEFT JOIN sentence_structures ss ON v.id = ss.verse_id
LEFT JOIN vocabulary vocab ON v.id = vocab.verse_id
LEFT JOIN contextual_explanations ce ON v.id = ce.verse_id
LEFT JOIN korean_translations kt ON v.id = kt.verse_id
LEFT JOIN special_explanations se ON v.id = se.verse_id
GROUP BY v.id, v.reference, v.niv_text, v.analysis_completed;

-- Create processing status view
CREATE OR REPLACE VIEW processing_status AS
SELECT
    pq.status,
    COUNT(*) as count,
    ROUND(COUNT(*) * 100.0 / SUM(COUNT(*)) OVER(), 2) as percentage
FROM processing_queue pq
GROUP BY pq.status;

-- Helper function for marking verses as analyzed
CREATE OR REPLACE FUNCTION mark_verse_analyzed(verse_id_param INTEGER)
RETURNS VOID AS $$
BEGIN
    UPDATE verses
    SET analysis_completed = TRUE,
        analysis_date = NOW(),
        updated_at = NOW()
    WHERE id = verse_id_param;

    UPDATE processing_queue
    SET status = 'completed',
        completed_at = NOW()
    WHERE verse_id = verse_id_param;
END;
$$ LANGUAGE plpgsql;

-- Enable RLS on all tables (can be configured later)
ALTER TABLE books ENABLE ROW LEVEL SECURITY;
ALTER TABLE chapters ENABLE ROW LEVEL SECURITY;
ALTER TABLE verses ENABLE ROW LEVEL SECURITY;
ALTER TABLE sentence_structures ENABLE ROW LEVEL SECURITY;
ALTER TABLE vocabulary ENABLE ROW LEVEL SECURITY;
ALTER TABLE contextual_explanations ENABLE ROW LEVEL SECURITY;
ALTER TABLE korean_translations ENABLE ROW LEVEL SECURITY;
ALTER TABLE special_explanations ENABLE ROW LEVEL SECURITY;
ALTER TABLE processing_queue ENABLE ROW LEVEL SECURITY;

-- Create permissive policies for now (should be refined later)
-- Allow all operations for authenticated users
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

-- Insert initial book data
INSERT INTO books (name, abbreviation, testament, book_order) VALUES
('Philippians', 'Phil', 'NT', 50)
ON CONFLICT (name) DO NOTHING;

-- Insert Philippians chapters
INSERT INTO chapters (book_id, chapter_number, verse_count) VALUES
((SELECT id FROM books WHERE name = 'Philippians'), 1, 30),
((SELECT id FROM books WHERE name = 'Philippians'), 2, 30),
((SELECT id FROM books WHERE name = 'Philippians'), 3, 21),
((SELECT id FROM books WHERE name = 'Philippians'), 4, 23)
ON CONFLICT (book_id, chapter_number) DO NOTHING;