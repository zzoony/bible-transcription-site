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

// Environment variable validation
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_URL')
}

if (!supabaseAnonKey) {
  throw new Error('Missing env.NEXT_PUBLIC_SUPABASE_ANON_KEY')
}

// Create Supabase client with TypeScript support
export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
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

/**
 * Creates a Supabase client configured for server-side admin operations using the service key.
 *
 * @returns A typed Supabase client connected with the service key and configured to use the `public` schema.
 * @throws Error if the environment variable `SUPABASE_SERVICE_KEY` is not set.
 */
export function createServerClient() {
  const serviceKey = process.env.SUPABASE_SERVICE_KEY

  if (!serviceKey) {
    throw new Error('Missing env.SUPABASE_SERVICE_KEY')
  }

  return createClient<Database>(supabaseUrl!, serviceKey, {
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