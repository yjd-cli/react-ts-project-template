module.exports = {
  "src/**/*.{js,jsx,ts,tsx}": [
   "eslint --fix",
   "prettier --write",
  //  "git add"
  ],
  "src/**/*.{css,.less}": [
    "prettier --write",
    "stylelint --fix",
    // "git add"
   ],
};
