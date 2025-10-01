'use client'

import { VerseAnalysis } from '@/lib/types'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export interface AnalysisDisplayProps {
  analysis: VerseAnalysis
  className?: string
}

export function AnalysisDisplay({ analysis, className }: AnalysisDisplayProps) {
  return (
    <div className={className} data-testid="analysis-display">
      {/* Sentence Structure */}
      {analysis.sentence_structure && analysis.sentence_structure.length > 0 && (
        <Card className="mb-6" data-testid="sentence-structure">
          <CardHeader>
            <CardTitle>문장 구조 분석</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {analysis.sentence_structure.map((structure, index) => (
                <div
                  key={structure.id || index}
                  className={index > 0 ? 'pt-6 border-t' : ''}
                >
                  <div className="space-y-4">
                    {structure.original_text && (
                      <div>
                        <p className="font-semibold text-sm text-muted-foreground mb-2">
                          원문
                        </p>
                        <p className="leading-relaxed text-foreground italic">
                          {structure.original_text}
                        </p>
                      </div>
                    )}
                    {structure.korean_translation && (
                      <div>
                        <p className="font-semibold text-sm text-muted-foreground mb-2">
                          직역
                        </p>
                        <p className="leading-relaxed text-foreground">
                          {structure.korean_translation}
                        </p>
                      </div>
                    )}
                    <div>
                      <p className="font-semibold text-sm text-muted-foreground mb-2">
                        의미적 분류
                      </p>
                      <p className="leading-relaxed text-foreground">
                        {structure.semantic_classification}
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-muted-foreground mb-2">
                        문법적 설명
                      </p>
                      <p className="leading-relaxed text-foreground">
                        {structure.grammatical_explanation}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Vocabulary */}
      {analysis.vocabulary && analysis.vocabulary.length > 0 && (
        <Card className="mb-6" data-testid="vocabulary">
          <CardHeader>
            <CardTitle>주요 단어들</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full" role="table">
                <thead>
                  <tr className="border-b">
                    <th className="pb-3 text-left font-semibold">Word</th>
                    <th className="pb-3 text-left font-semibold">IPA</th>
                    <th className="pb-3 text-left font-semibold">Korean</th>
                    <th className="pb-3 text-left font-semibold">Meaning</th>
                  </tr>
                </thead>
                <tbody>
                  {analysis.vocabulary.map((vocab, index) => (
                    <tr
                      key={vocab.id || index}
                      className="border-b last:border-0"
                    >
                      <td className="py-3 font-medium">{vocab.word}</td>
                      <td className="py-3 text-muted-foreground">
                        {vocab.ipa_pronunciation}
                      </td>
                      <td className="py-3">{vocab.korean_pronunciation}</td>
                      <td className="py-3">{vocab.definition_korean}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Contextual Explanation */}
      {analysis.contextual_explanation && (
        <Card className="mb-6" data-testid="contextual-explanation">
          <CardHeader>
            <CardTitle>문맥 설명</CardTitle>
          </CardHeader>
          <CardContent>
            <p
              className="leading-relaxed text-foreground whitespace-pre-wrap"
              data-testid="explanation-text"
            >
              {analysis.contextual_explanation.integrated_explanation}
            </p>
          </CardContent>
        </Card>
      )}

      {/* Korean Translation */}
      {analysis.korean_translation && (
        <Card className="mb-6" data-testid="korean-translation">
          <CardHeader>
            <CardTitle>한국어 번역</CardTitle>
          </CardHeader>
          <CardContent>
            <p
              className="text-lg leading-relaxed text-foreground"
              data-testid="translation-text"
            >
              {analysis.korean_translation.natural_translation}
            </p>
          </CardContent>
        </Card>
      )}

      {/* Special Explanation */}
      {analysis.special_explanation && (
        <Card className="mb-6" data-testid="special-explanation">
          <CardHeader>
            <CardTitle>특별 설명</CardTitle>
          </CardHeader>
          <CardContent>
            {analysis.special_explanation.grammatical_notes && (
              <div className="mb-4">
                <p className="font-semibold text-sm text-muted-foreground mb-2">
                  문법적 특이점
                </p>
                <p className="leading-relaxed text-foreground whitespace-pre-wrap">
                  {analysis.special_explanation.grammatical_notes}
                </p>
              </div>
            )}
            {analysis.special_explanation.interpretive_notes && (
              <div>
                <p className="font-semibold text-sm text-muted-foreground mb-2">
                  해석적 특이점
                </p>
                <p className="leading-relaxed text-foreground whitespace-pre-wrap">
                  {analysis.special_explanation.interpretive_notes}
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Empty State - if no analysis data */}
      {!analysis.sentence_structure?.length &&
        !analysis.vocabulary?.length &&
        !analysis.contextual_explanation &&
        !analysis.korean_translation &&
        !analysis.special_explanation && (
          <Card>
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">
                Analysis data is not yet available for this verse.
              </p>
            </CardContent>
          </Card>
        )}
    </div>
  )
}