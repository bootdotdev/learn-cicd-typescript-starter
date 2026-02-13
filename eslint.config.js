import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default [
  // Ignore build/coverage folders
  { ignores: ["dist/**", "coverage/**", "node_modules/**"] },

  // Recommended configs
  js.configs.recommended,
  ...tseslint.configs.recommended,

  // Node environment
  {
    files: ["**/*.{ts,js,mts,cts,mjs,cjs}"],
    languageOptions: {
      globals: { ...globals.node },
    },
  },
];

