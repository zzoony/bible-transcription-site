// Database type definitions will be auto-generated from Supabase
// This file can be extended with custom types

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
          analysis_data: any;
          created_at: string;
        };
        Insert: {
          id?: string;
          verse_id: string;
          analysis_data: any;
          created_at?: string;
        };
        Update: {
          id?: string;
          verse_id?: string;
          analysis_data?: any;
          created_at?: string;
        };
      };
    };
  };
}
