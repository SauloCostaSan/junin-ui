/* eslint-env node */

module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      // "plugin:@typescript-eslint/recommended-requiring-type-checking",
      // "plugin:react-hooks/recommended",
    ],
    ignorePatterns: ["jest.config.ts", ".*cjs", "dist/**", "tsup.config.js"],
    parser: "@typescript-eslint/parser",
    parserOptions: { 
      ecmaVersion: "latest",
      sourceType: "module",
      project: true,
      tsconfigRootDir: __dirname
    },
    plugins: ["react-refresh", "@typescript-eslint"],
    rules: {
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "@typescript-eslint/no-non-null-assertion": "off",
    },
  };
  