module.exports = {
  "src/**/*.{js,jsx,ts,tsx}": [
   "eslint --fix",
   "prettier --write",
   //  "git add"
  ],
  "src/**/*.{css,less}": [
    // https://stylelint.io/user-guide/cli#options
    "stylelint --fix",
    "prettier --write",
    // "git add"
   ],
};
