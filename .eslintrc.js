module.exports = {
  root: true,
  env: {
    'node': true,
    'browser': true
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    "@typescript-eslint/no-explicit-any": "off",
    "no-async-promise-executor": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off"
  }
};
