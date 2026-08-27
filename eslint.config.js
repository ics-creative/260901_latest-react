import reactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

export default [
  {
    ignores: ["docs/**", "node_modules/**"],
  },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      sourceType: "module",
    },
    plugins: {
      "react-hooks": reactHooks,
    },
    rules: {
      "no-debugger": "error",
      "no-duplicate-case": "error",
      "no-empty": "error",
      "no-fallthrough": "error",
      "no-irregular-whitespace": "error",
      "no-loss-of-precision": "error",
      "no-self-assign": "error",
      "no-undef": "error",
      "no-unreachable": "error",
      "no-unused-labels": "error",
      "no-unused-vars": "error",
      "no-useless-catch": "error",
      "no-useless-escape": "error",
      "no-with": "error",
      ...reactHooks.configs.flat.recommended.rules,
    },
  },
];
