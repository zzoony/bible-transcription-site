// Database type definitions will be auto-generated from Supabase
// This file can be extended with custom types

export interface VerseAnalysisData {
  sentence_structures?: Array<{
    text: string;
    classification: string;
    description?: string;
  }>;
  key_words?: Array<{
    word: string;
    pronunciation?: {
      ipa?: string;
      korean?: string;
    };
    meaning?: string;
  }>;
  context?: string;
  korean_translation?: string;
  special_notes?: string;
  [key: string]: unknown; // 확장 가능하도록 추가 필드 허용
}

export interface Database {
  public: {
    Tables: {
      verses: {
        Row: {
          id: string;
          reference: string;
          niv_text: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          reference: string;
          niv_text: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          reference?: string;
          niv_text?: string;
          created_at?: string;
        };
      };
      verse_analyses: {
        Row: {
          id: string;
          verse_id: string;
          analysis_data: VerseAnalysisData;
          created_at: string;
        };
        Insert: {
          id?: string;
          verse_id: string;
          analysis_data: VerseAnalysisData;
          created_at?: string;
        };
        Update: {
          id?: string;
          verse_id?: string;
          analysis_data?: VerseAnalysisData;
          created_at?: string;
        };
      };
    };
  };
}
