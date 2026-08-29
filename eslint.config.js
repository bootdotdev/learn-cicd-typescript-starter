import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
// 1. أضف هذا السطر في الأعلى
import pluginSecurity from "eslint-plugin-security";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  // 2. أضف هذا السطر في نهاية القائمة
  pluginSecurity.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  }
);
