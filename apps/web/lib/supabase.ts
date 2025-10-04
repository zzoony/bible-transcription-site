import { createClient } from '@supabase/supabase-js'
import type {
  Verse,
  SentenceStructure,
  Vocabulary,
  ContextualExplanation,
  KoreanTranslation,
  SpecialExplanation,
} from './types'

// Database schema type definition
export interface Database {
  public: {
    Tables: {
      verses: {
        Row: Verse
        Insert: Omit<Verse, 'created_at' | 'updated_at'>
        Update: Partial<Omit<Verse, 'created_at' | 'updated_at'>>
      }
      sentence_structures: {
        Row: SentenceStructure
        Insert: Omit<SentenceStructure, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<
          Omit<SentenceStructure, 'id' | 'created_at' | 'updated_at'>
        >
      }
      vocabulary: {
        Row: Vocabulary
        Insert: Omit<Vocabulary, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<Vocabulary, 'id' | 'created_at' | 'updated_at'>>
      }
      contextual_explanations: {
        Row: ContextualExplanation
        Insert: Omit<ContextualExplanation, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<
          Omit<ContextualExplanation, 'id' | 'created_at' | 'updated_at'>
        >
      }
      korean_translations: {
        Row: KoreanTranslation
        Insert: Omit<KoreanTranslation, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<
          Omit<KoreanTranslation, 'id' | 'created_at' | 'updated_at'>
        >
      }
      special_explanations: {
        Row: SpecialExplanation
        Insert: Omit<SpecialExplanation, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<
          Omit<SpecialExplanation, 'id' | 'created_at' | 'updated_at'>
        >
      }
    }
  }
}

// Environment variable validation (lazy - only when actually used)
function getSupabaseUrl(): string {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  if (!url) {
    throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_URL')
  }
  return url
}

function getSupabaseAnonKey(): string {
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!key) {
    throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_ANON_KEY')
  }
  return key
}

// Lazy initialization to avoid build-time errors
let _supabase: ReturnType<typeof createClient<Database>> | null = null

export function getSupabase() {
  if (!_supabase) {
    _supabase = createClient<Database>(getSupabaseUrl(), getSupabaseAnonKey(), {
      auth: {
        persistSession: false, // No authentication needed for read-only operations
      },
      db: {
        schema: 'public',
      },
      global: {
        headers: {
          'x-application-name': 'bible-transcription-site',
        },
      },
    })
  }
  return _supabase
}

// Legacy export for backward compatibility
// Only initialize if environment variables are available (runtime only)
export const supabase =
  typeof window === 'undefined' && !process.env.NEXT_PUBLIC_SUPABASE_URL
    ? (null as any) // Build-time: return null to avoid errors
    : getSupabase() // Runtime: initialize normally

// Server-side client for admin operations (if needed)
export function createServerClient() {
  const serviceKey = process.env.SUPABASE_SERVICE_KEY

  if (!serviceKey) {
    throw new Error('Missing env.SUPABASE_SERVICE_KEY')
  }

  return createClient<Database>(getSupabaseUrl(), serviceKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
    db: {
      schema: 'public',
    },
  })
}

// Type exports for convenience
export type SupabaseClient = typeof supabase