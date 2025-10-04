import { NextRequest, NextResponse } from 'next/server'
import type { ApiError } from '@/lib/types'

/**
 * Error handler middleware for API routes
 */
export function handleApiError(error: unknown): NextResponse<ApiError> {
  console.error('API Error:', error)

  if (error instanceof ApiValidationError) {
    return NextResponse.json(
      {
        error: 'Validation Error',
        message: error.message,
        statusCode: 400,
        details: error.details,
      },
      { status: 400 }
    )
  }

  if (error instanceof ApiNotFoundError) {
    return NextResponse.json(
      {
        error: 'Not Found',
        message: error.message,
        statusCode: 404,
      },
      { status: 404 }
    )
  }

  if (error instanceof ApiDatabaseError) {
    return NextResponse.json(
      {
        error: 'Database Error',
        message: 'A database error occurred',
        statusCode: 500,
        details: { originalError: error.message },
      },
      { status: 500 }
    )
  }

  // Generic error
  return NextResponse.json(
    {
      error: 'Internal Server Error',
      message: error instanceof Error ? error.message : 'An unknown error occurred',
      statusCode: 500,
    },
    { status: 500 }
  )
}

/**
 * Custom API error classes
 */
export class ApiValidationError extends Error {
  details?: Record<string, unknown>

  constructor(message: string, details?: Record<string, unknown>) {
    super(message)
    this.name = 'ApiValidationError'
    this.details = details
  }
}

export class ApiNotFoundError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ApiNotFoundError'
  }
}

export class ApiDatabaseError extends Error {
  constructor(message: string) {
    super(message)
    this.name = 'ApiDatabaseError'
  }
}

/**
 * Validation helpers
 */
export function validateQueryParam(
  request: NextRequest,
  paramName: string,
  options?: {
    required?: boolean
    type?: 'string' | 'number'
    min?: number
    max?: number
  }
): string | number | null {
  const value = request.nextUrl.searchParams.get(paramName)

  if (!value) {
    if (options?.required) {
      throw new ApiValidationError(
        `Missing required parameter: ${paramName}`
      )
    }
    return null
  }

  if (options?.type === 'number') {
    const num = parseInt(value)
    if (isNaN(num)) {
      throw new ApiValidationError(
        `Invalid ${paramName}: must be a number`
      )
    }
    if (options.min !== undefined && num < options.min) {
      throw new ApiValidationError(
        `Invalid ${paramName}: must be at least ${options.min}`
      )
    }
    if (options.max !== undefined && num > options.max) {
      throw new ApiValidationError(
        `Invalid ${paramName}: must be at most ${options.max}`
      )
    }
    return num
  }

  return value
}

/**
 * Rate limiting helper (simple in-memory implementation)
 */
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()

export function checkRateLimit(
  identifier: string,
  limit: number = 100,
  windowMs: number = 60000
): boolean {
  const now = Date.now()
  const record = rateLimitMap.get(identifier)

  if (!record || now > record.resetAt) {
    rateLimitMap.set(identifier, {
      count: 1,
      resetAt: now + windowMs,
    })
    return true
  }

  if (record.count >= limit) {
    return false
  }

  record.count++
  return true
}

/**
 * CORS headers for API routes
 */
export function corsHeaders(origin?: string) {
  return {
    'Access-Control-Allow-Origin': origin || '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  }
}