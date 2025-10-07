// Database type definitions will be auto-generated from Supabase
// This file can be extended with custom types

export interface VerseAnalysisData {
  sentence_structures?: Array<{
    sequence_order: number
    semantic_classification: string
    original_text: string
    korean_translation: string
    grammatical_explanation?: string
  }>
  vocabulary?: Array<{
    word: string
    ipa_pronunciation?: string
    korean_pronunciation?: string
    part_of_speech?: string
    definition_korean?: string
    usage_note?: string
  }>
  contextual_explanation?: {
    integrated_explanation: string
    cross_references?: string[]
  }
  korean_translation?: {
    natural_translation: string
    translation_notes?: string
  }
  special_explanation?: Record<string, unknown>
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
