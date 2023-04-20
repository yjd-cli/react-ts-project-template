module.exports = {
  "src/**/*.{js,jsx,ts,tsx}": [
    // https://eslint.org/docs/latest/use/command-line-interface#options
   "eslint --fix",
   // https://prettier.io/docs/en/cli.html
   "prettier --write"
  ],
  "src/**/*.{css,less}": [
    // https://stylelint.io/user-guide/cli#options
    "stylelint --fix --formatter verbose",
    "prettier --write"
   ],
};
