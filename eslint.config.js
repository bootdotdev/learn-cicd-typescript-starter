import js from "@eslint/js";
import globals from "globals";
import pluginSecurity from "eslint-plugin-security";

export default [
  {
    ignores: ["dist/**"],
  },
  js.configs.recommended,
  {
    languageOptions: {
      globals: globals.node,
    },
  },
  pluginSecurity.configs.recommended,
];