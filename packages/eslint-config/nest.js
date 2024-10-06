/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@e_commerce_gql/eslint-config/root.js"],
  env: {
    node: true,
  },
  ignorePatterns: [".eslintrc.js"],
};
