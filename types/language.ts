export const LANGUAGE = ['ko', 'en'] as const;
export type Language = (typeof LANGUAGE)[number];

export type WithLanguage<T> = { [language in Language]: T };

export const localeToKo = (language: Language) => {
  switch (language) {
    case 'ko':
      return '한국어';
    case 'en':
      return '영어';
  }
};
