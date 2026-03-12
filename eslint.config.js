import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
{
  files: ['src/tests/**/*.ts'],
  rules: {
    '@typescript-eslint/no-explicit-any': 'off'
  }
}
  tseslint.configs.recommended,
]);
