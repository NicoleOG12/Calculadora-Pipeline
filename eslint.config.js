const js = require("@eslint/js");

module.exports = [
  {
    ignores: ["node_modules/**", "coverage/**"]
  },

  js.configs.recommended,

  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "commonjs"
    },

    rules: {
      semi: ["error", "always"],
      quotes: ["error", "single"]
    }
  }
];