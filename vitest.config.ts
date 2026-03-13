// vitest.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8', // uses @vitest/coverage-v8
      reporter: ['text', 'lcov'], // text = console, lcov = folder
      reportsDirectory: 'coverage',
      all: true, // this folder will be created
    },
  },
})
