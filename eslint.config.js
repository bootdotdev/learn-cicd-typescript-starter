import js from "@eslint/js";
import ts from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import globals from "globals";

/** @type {import("eslint").Linter.FlatConfig[]} */
export default [
  // ✅ JavaScript Recommended Rules
  js.configs.recommended,

  // ✅ TypeScript Rules (Flat Config)
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsParser,
      globals: {
        ...globals.browser,
        ...globals.node, // 👈 Fix: Adds `process` and other Node.js globals
      },
    },
    plugins: {
      "@typescript-eslint": ts,
    },
    rules: {
      ...(ts.configs.recommended.rules ?? {}),
    },
  },
];

