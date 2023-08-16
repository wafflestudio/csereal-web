export const MAIN_ORANGE = '#ff6914';
export const NEUTRAL_50 = '#fafafa';
export const NEUTRAL_100 = '#f5f5f5';
export const NEUTRAL_200 = '#e5e5e5';
export const NEUTRAL_700 = '#404040';

export const COLOR_THEME = {
  orange: { bgColor: MAIN_ORANGE, triangleColor: NEUTRAL_100 },
  lightGray: { bgColor: NEUTRAL_50, triangleColor: NEUTRAL_100 },
  darkGray: { bgColor: NEUTRAL_700, triangleColor: NEUTRAL_200 },
} as const;

export type ColorTheme = (typeof COLOR_THEME)[keyof typeof COLOR_THEME];

export const FILTER = {
  NEUTRAL_400: [
    'invert-[.79]',
    'sepia-0',
    'saturate-[.399]',
    'hue-rotate-[227deg]',
    'brightness-[.85]',
    'contrast-[.81]',
  ],
  NEUTRAL_700: [
    'invert-[.20]',
    'sepia-0',
    'saturate-[.12]',
    'hue-rotate-[152deg]',
    'brightness-100',
    'contrast-[.84]',
  ],
};
