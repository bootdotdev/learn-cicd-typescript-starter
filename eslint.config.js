import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginSecurity from "eslint-plugin-security";

export default tseslint.config(
  {
    ignores: ["dist/**", "node_modules/**"],
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  pluginSecurity.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest, 
      },
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "off", 
      "@typescript-eslint/no-explicit-any": "off",
      "no-case-declarations": "off", 
      "security/detect-object-injection": "off" 
      
    },
  }
);