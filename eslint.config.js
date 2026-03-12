import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import pluginSecurity from "eslint-plugin-security";

export default defineConfig([
  { 
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"], 
    plugins: { js }, 
    extends: ["js/recommended"], 
    languageOptions: { 
      globals: {
        ...globals.browser,
        ...globals.node,  // Add Node.js globals
        ...globals.jest,   // Add Jest globals
      } 
    } 
  },
  tseslint.configs.recommended,
  pluginSecurity.configs.recommended,
  {
    // Ignore specific directories
    ignores: [
      "dist/**",
      "coverage/**",
      "node_modules/**"
    ]
  }
]);