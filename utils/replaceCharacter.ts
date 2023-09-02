export const replaceSpaceWithDash = (words: string) => words.replace(/\s+/g, '-');

export const replaceDashWithSpace = (words: string) => words.replace(/-/g, ' ');

export const capitalizeFirstLetter = (words: string) => {
  if (words.length === 0) {
    return '';
  }

  return words.charAt(0).toUpperCase() + words.slice(1);
};
