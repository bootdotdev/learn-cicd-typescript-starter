import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
export default tseslint.config(
  { ignores: ["dist/", "node_modules/"] },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        console: "readonly",
        process: "readonly"
      }
    },
    rules: {
      "@typescript-eslint/no-unused-vars": "error"
    }
  }
);
