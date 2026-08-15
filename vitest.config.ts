import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      provider: 'v8',      // استخدم v8 coverage
      reporter: ['text', 'lcov'], // طباعة النص في الـ console وملف lcov
    },
  },
});

