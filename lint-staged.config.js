module.exports = {
  'src/**/*.{js,ts,jsx,tsx}': ['eslint --fix', 'prettier --write'],
  '!(src/**/*.{js,ts,jsx,tsx})': 'prettier --ignore-unknown --write',
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
};
