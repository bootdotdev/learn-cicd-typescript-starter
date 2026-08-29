import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginSecurity from "eslint-plugin-security";

export default tseslint.config(
    // 1. Ignore the build folder
    { ignores: ["dist/"] },

    // 2. Base Javascript recommended rules
    js.configs.recommended,

    // 3. Typescript recommended rules
    ...tseslint.configs.recommended,

    pluginSecurity.configs.recommended,

    // 4. Custom overrides and Global settings
    {
      files: ["**/*.{ts,tsx}"],
      languageOptions: {
        globals: {
          ...globals.browser,
          ...globals.node, // Adding node allows 'process' to work
        },
      },
      rules: {
        // Force unused variables to be an error
        "@typescript-eslint/no-unused-vars": ["error", {
          "argsIgnorePattern": "^_",
          "varsIgnorePattern": "^_"
        }],
      },
    }
);
