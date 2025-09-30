'use client'

import { useState, useCallback } from 'react'
import { supabase } from '@/lib/supabase'
import { parseVerseReference } from '@/lib/utils'
import type { VerseAnalysis, VerseLoadingState } from '@/lib/types'

/**
 * Hook that manages loading and retrieval of verse analysis data by reference.
 *
 * Provides reactive state for the currently requested reference, loading status, any error message, and the loaded VerseAnalysis, plus functions to fetch a verse by reference and to reset state.
 *
 * @returns An object containing:
 * - `reference`: the last requested verse reference or `null`
 * - `isLoading`: `true` while a fetch is in progress, `false` otherwise
 * - `error`: an error message string when a fetch fails, or `null`
 * - `data`: the loaded `VerseAnalysis` object when available, or `null`
 * - `fetchVerse(reference: string)`: function to initiate fetching analysis for the given verse reference
 * - `clear()`: function to reset the hook state to its initial values
 */
export function useVerse() {
  const [state, setState] = useState<VerseLoadingState>({
    reference: null,
    isLoading: false,
    error: null,
    data: null,
  })

  const fetchVerse = useCallback(async (reference: string) => {
    setState({
      reference,
      isLoading: true,
      error: null,
      data: null,
    })

    try {
      // Decode URL-encoded reference
      const decodedReference = decodeURIComponent(reference)

      // Parse reference
      const parsed = parseVerseReference(decodedReference)
      if (!parsed) {
        throw new Error('Invalid verse reference format')
      }

      const { book, chapter, verse } = parsed
      const verseRef = `${book} ${chapter}:${verse}`

      // Fetch verse data with joins
      const { data: verseData, error: verseError } = await supabase
        .from('verses')
        .select(
          `
          id,
          reference,
          niv_text,
          verse_number,
          book_id,
          chapter_id,
          analysis_completed,
          created_at,
          updated_at,
          books!inner(name_english),
          chapters!inner(chapter_number)
        `
        )
        .ilike('reference', verseRef)
        .single()

      const verseRecord: any = verseData

      if (verseError) throw verseError
      if (!verseRecord) throw new Error('Verse not found')

      // Parse reference for accurate display
      const parsedRef = parseVerseReference(verseRecord.reference)

      // Create Verse object matching the Verse interface
      const verseObj = {
        id: verseRecord.id,
        book_id: verseRecord.book_id,
        chapter_id: verseRecord.chapter_id,
        verse_number: verseRecord.verse_number,
        reference: verseRecord.reference,
        niv_text: verseRecord.niv_text,
        analysis_completed: verseRecord.analysis_completed,
        created_at: verseRecord.created_at,
        updated_at: verseRecord.updated_at,
        // Computed fields for compatibility
        book: parsedRef?.book || verseRecord.books.name_english,
        chapter: parsedRef?.chapter || verseRecord.chapters.chapter_number,
        verse: parsedRef?.verse || verseRecord.verse_number,
        text: verseRecord.niv_text,
      }

      // Fetch related analysis data in parallel using verse_id
      const [
        { data: sentenceStructures },
        { data: vocabulary },
        { data: contextualExplanation },
        { data: koreanTranslation },
        { data: specialExplanation },
      ] = await Promise.all([
        supabase
          .from('sentence_structures')
          .select('*')
          .eq('verse_id', verseRecord.id)
          .order('sequence_order', { ascending: true }),
        supabase
          .from('vocabulary')
          .select('*')
          .eq('verse_id', verseRecord.id)
          .order('id', { ascending: true }),
        supabase
          .from('contextual_explanations')
          .select('*')
          .eq('verse_id', verseRecord.id)
          .single(),
        supabase
          .from('korean_translations')
          .select('*')
          .eq('verse_id', verseRecord.id)
          .single(),
        supabase
          .from('special_explanations')
          .select('*')
          .eq('verse_id', verseRecord.id)
          .single(),
      ])

      const analysis: VerseAnalysis = {
        verse: verseObj,
        sentence_structure: sentenceStructures || [],
        vocabulary: vocabulary || [],
        contextual_explanation: contextualExplanation || null,
        korean_translation: koreanTranslation || null,
        special_explanation: specialExplanation || null,
      }

      setState({
        reference,
        isLoading: false,
        error: null,
        data: analysis,
      })
    } catch (error) {
      console.error('Fetch verse error:', error)
      setState({
        reference,
        isLoading: false,
        error: error instanceof Error ? error.message : 'Failed to fetch verse',
        data: null,
      })
    }
  }, [])

  const clear = useCallback(() => {
    setState({
      reference: null,
      isLoading: false,
      error: null,
      data: null,
    })
  }, [])

  return {
    ...state,
    fetchVerse,
    clear,
  }
}