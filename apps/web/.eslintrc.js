/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@e_commerce_gql/eslint-config/next.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
