import js from "@eslint/js";
import globals from "globals";
import tseslintParser from "@typescript-eslint/parser";
import tseslintPlugin from "@typescript-eslint/eslint-plugin";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    languageOptions: {
      parser: tseslintParser,
      globals: globals.node,
    },
    plugins: {
      "@typescript-eslint": tseslintPlugin,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...tseslintPlugin.configs.recommended.rules,
    },
  },
  {
    ignores: ["dist/"],
  },
];
