import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8', // uses @vitest/coverage-v8
      reporter: ['text'], // prints coverage to console
    },
  },
})
// done 
