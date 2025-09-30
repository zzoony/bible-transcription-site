import { NextRequest, NextResponse } from 'next/server'
import type { ApiError } from '@/lib/types'

/**
 * Convert an API error into an HTTP JSON response with an appropriate status and structured ApiError body.
 *
 * Maps ApiValidationError to a 400 response including validation `details`, ApiNotFoundError to 404,
 * ApiDatabaseError to 500 with the original error message in `details`, and all other errors to a generic 500 response.
 *
 * @returns A NextResponse containing an ApiError object with `error` (short error type), `message` (human-readable),
 * `statusCode` (HTTP status), and optional `details` with additional error information.
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
 * Retrieve and validate a query parameter from a NextRequest's URL.
 *
 * @param paramName - The query parameter name to read from the request URL
 * @param options - Validation options:
 *   - `required`: if true, a missing parameter triggers an `ApiValidationError`
 *   - `type`: `'string'` (default) or `'number'`; when `'number'`, the value is parsed as an integer
 *   - `min` / `max`: numeric bounds applied when `type` is `'number'`
 * @returns The parameter value as a string, the parsed integer when `type` is `'number'`, or `null` if the parameter is absent and not required
 * @throws ApiValidationError - if a required parameter is missing, a numeric parse fails, or a numeric value violates `min`/`max`
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

/**
 * Checks and updates a simple in-memory rate limiter for the given identifier.
 *
 * @param identifier - Unique key for the client or resource being rate limited (e.g., IP, user ID, API key)
 * @param limit - Maximum allowed requests within the window (default: 100)
 * @param windowMs - Time window in milliseconds for rate limiting (default: 60000)
 * @returns `true` if the request is allowed under the current limit, `false` if the limit has been exceeded
 */
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
 * Create standard CORS headers for API responses.
 *
 * @param origin - Optional value for `Access-Control-Allow-Origin`; when omitted `'*'` is used
 * @returns An object mapping CORS header names to their values suitable for attaching to a response
 */
export function corsHeaders(origin?: string) {
  return {
    'Access-Control-Allow-Origin': origin || '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  }
}