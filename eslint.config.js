import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: ["dist/"],
  },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.{ts,mts,cts,js,mjs,cjs}"],
    languageOptions: {
      parser: tseslint.parser,
      globals: globals.node,
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "error",
    },
  }
);

