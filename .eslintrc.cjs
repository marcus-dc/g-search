const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");
const extensions = [
  "@vercel/style-guide/eslint/node",
  "@vercel/style-guide/eslint/typescript",
].map((ext) => require.resolve(ext));

/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  extends: extensions,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: ["node_modules/", "prettier.config.mjs"],
  rules: {
    "@typescript-eslint/consistent-type-imports": [
      "error",
      { prefer: "type-imports", fixStyle: "inline-type-imports" },
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-misused-promises": [
      "error",
      { checksVoidReturn: { attributes: false } },
    ],
    "import/no-default-export": "off",
    "import/no-named-as-default": "off",
  },
};
