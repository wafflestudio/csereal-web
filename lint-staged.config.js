module.exports = {
  '*.{js,ts,tsx}': 'eslint --cache --fix',
  '*.{js,ts,tsx,css,md}': 'prettier --write',
  '*.{ts,tsx}': () => 'tsc --noEmit',
};
