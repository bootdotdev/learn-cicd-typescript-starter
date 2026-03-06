import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      // Project files run in Node.js and may also include browser-facing assets.
      globals: { ...globals.node, ...globals.browser },
    },
  },
  tseslint.configs.recommended,
]);
