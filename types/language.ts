export const LANGUAGE = {
  ko: '한국어',
  en: '영어',
} as const;

export type Language = keyof typeof LANGUAGE;

export type WithLanguage<T> = { [language in Language]: T };
