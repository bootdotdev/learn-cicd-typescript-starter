import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "@typescript-eslint/eslint-plugin";
import pluginSecurity from "eslint-plugin-security";

/** @type {import('eslint').Linter.Config} */
export default {
  files: ["**/*.{js,mjs,cjs,ts}"],
  languageOptions: {
    globals: globals.browser,
  },
  extends: [
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended, 
    pluginSecurity.configs.recommended,
  ],
};

