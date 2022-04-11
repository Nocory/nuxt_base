module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    parser: "@typescript-eslint/parser",
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:nuxt/recommended",
    "plugin:vue/vue3-recommended",
  ],
  plugins: [
    "@typescript-eslint",
  ],
  rules: {
    "no-undef": "off",
    "vue/script-setup-uses-vars": "error",
    quotes: [
      "error",
      "double"
    ],
    semi: [
      "error",
      "never"
    ],
    "comma-dangle": ["warn", "only-multiline"]
  }
}
