module.exports = {
  "src/**/*.{js,jsx,ts,tsx}": [
    // https://eslint.org/docs/latest/use/command-line-interface#options
   "eslint --fix",
   // https://prettier.io/docs/en/cli.html
   "prettier --write"
  ],
  "src/**/*.{css,less}": [
    // https://stylelint.io/user-guide/cli#options
    // https://stylelint.io/user-guide/options/#formatter
    // https://github.com/stylelint/stylelint/issues/703#issuecomment-339212720
    "stylelint --fix --formatter verbose",
    "prettier --write"
   ],
   // 排序 package.json 中的 keys
   "package.json": [
    "prettier --write"
   ],
};
