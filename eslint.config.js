import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import pluginSecurity from "eslint-plugin-security";

export default defineConfig([
  {
    ignores: ["dist/**", "coverage/**", "node_modules/**"]
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.es2021
      }
    }
  },
  { files: ["**/*.js"], languageOptions: { sourceType: "script" } },
  tseslint.configs.recommended,
  pluginSecurity.configs.recommended,
]);
