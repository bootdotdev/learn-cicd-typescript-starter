import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import security from "eslint-plugin-security";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],

    plugins: {
      security,
    },

    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
    ],

    rules: {
      ...security.configs.recommended.rules,
    },

    languageOptions: {
      globals: globals.node,
    },
  },
]);
