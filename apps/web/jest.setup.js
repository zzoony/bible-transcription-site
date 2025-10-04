// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'

// Polyfill fetch for Node.js test environment
import { TextEncoder, TextDecoder } from 'util'

global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder

// Use node-fetch for fetch polyfill if not available
if (typeof global.fetch === 'undefined') {
  global.fetch = require('node-fetch')
}

// Polyfill Request and Response for Next.js API routes
if (typeof global.Request === 'undefined') {
  global.Request = require('node-fetch').Request
}

if (typeof global.Response === 'undefined') {
  global.Response = require('node-fetch').Response
}

if (typeof global.Headers === 'undefined') {
  global.Headers = require('node-fetch').Headers
}
