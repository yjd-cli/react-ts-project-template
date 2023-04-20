module.exports = {
  "src/**/*.{js,jsx,ts,tsx}": [
   "eslint --fix",
   "prettier --write"
  ],
  "src/**/*.{css,less}": [
    // https://stylelint.io/user-guide/cli#options
    "stylelint --fix",
    "eslint --fix",
    "prettier --write"
   ],
};
