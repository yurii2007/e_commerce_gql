/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    '@e_commerce_gql/eslint-config/nest.js',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
  },
};
