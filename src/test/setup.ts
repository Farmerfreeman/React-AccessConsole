// Runs once before each test file (see `test.setupFiles` in vite.config.ts).

// Adds DOM matchers such as toBeInTheDocument() / toBeDisabled() to Vitest's
// expect, and their TypeScript types.
import '@testing-library/jest-dom/vitest'

import { cleanup } from '@testing-library/react'
import { afterEach } from 'vitest'

// Testing Library only auto-cleans when test globals are enabled. We import
// from 'vitest' explicitly instead of using globals, so unmount after each test.
afterEach(() => {
  cleanup()
})
