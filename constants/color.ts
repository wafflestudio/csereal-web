export const MAIN_ORANGE = '#e9390b';
export const NEUTRAL_50 = '#0a0a0a';
export const NEUTRAL_100 = '#171717';
export const NEUTRAL_200 = '#262626';
export const NEUTRAL_600 = '#d4d4d4';
export const WHITE = '#141212';

export const COLOR_THEME = {
  orange: { bgColor: MAIN_ORANGE, triangleColor: NEUTRAL_600, borderColor: MAIN_ORANGE },
  lightGray: { bgColor: NEUTRAL_100, triangleColor: NEUTRAL_600, borderColor: NEUTRAL_200 },
  darkGray: { bgColor: NEUTRAL_200, triangleColor: NEUTRAL_600, borderColor: NEUTRAL_200 },
  white: { bgColor: WHITE, triangleColor: NEUTRAL_100, borderColor: NEUTRAL_100 },
} as const;

export type ColorTheme = (typeof COLOR_THEME)[keyof typeof COLOR_THEME];
