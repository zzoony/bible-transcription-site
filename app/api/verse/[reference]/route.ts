import { NextRequest, NextResponse } from 'next/server'
import { createServerClient } from '@/lib/supabase'
import { parseVerseReference } from '@/lib/utils'
import type { VerseAnalysisResponse, VerseAnalysis } from '@/lib/types'

export async function GET(
  request: NextRequest,
  { params }: { params: { reference: string } }
) {
  const reference = params.reference

  if (!reference) {
    return NextResponse.json(
      { error: 'Reference parameter is required' },
      { status: 400 }
    )
  }

  // Parse and validate reference
  const parsed = parseVerseReference(reference)
  if (!parsed) {
    return NextResponse.json(
      {
        error: 'Invalid reference format',
        message:
          'Expected format: "book-chapter-verse" or "Book Chapter:Verse"',
      },
      { status: 400 }
    )
  }

  const { book, chapter, verse } = parsed
  const verseRef = `${book} ${chapter}:${verse}`

  try {
    const supabase = createServerClient()

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

    if (verseError || !verseRecord) {
      const response: VerseAnalysisResponse = {
        reference: verseRef,
        found: false,
        data: null,
      }

      return NextResponse.json(response, {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Cache-Control': 'public, max-age=3600, s-maxage=7200',
        },
      })
    }

    // Parse reference for accurate display
    const parsedRef = parseVerseReference(verseRecord.reference)

    // Create Verse object matching the Verse interface
    const verse = {
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
      verse,
      sentence_structure: sentenceStructures || [],
      vocabulary: vocabulary || [],
      contextual_explanation: contextualExplanation || null,
      korean_translation: koreanTranslation || null,
      special_explanation: specialExplanation || null,
    }

    const response: VerseAnalysisResponse = {
      reference: verseRef,
      found: true,
      data: analysis,
    }

    return NextResponse.json(response, {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'public, max-age=3600, s-maxage=7200',
      },
    })
  } catch (error) {
    console.error('Verse API error:', error)
    return NextResponse.json(
      {
        reference: verseRef,
        found: false,
        data: null,
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}