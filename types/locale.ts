export const LOCALE = ['ko', 'en'] as const;
export type Locale = (typeof LOCALE)[number];

export const localeToKo = (locale: Locale) => {
  switch (locale) {
    case 'ko':
      return '한국어';
    case 'en':
      return '영어';
  }
};
