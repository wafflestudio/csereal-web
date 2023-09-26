export const MAIN_ORANGE = '#e9390b';
export const NEUTRAL_100 = '#171717';
export const NEUTRAL_150 = '#1e1e1e';
export const NEUTRAL_200 = '#262626';
export const NEUTRAL_300 = '#404040';
export const NEUTRAL_600 = '#d4d4d4';

export const COLOR_THEME = {
  orange: { bgColor: MAIN_ORANGE, triangleColor: NEUTRAL_600, borderColor: MAIN_ORANGE },
  lightGray: { bgColor: NEUTRAL_100, triangleColor: NEUTRAL_300, borderColor: NEUTRAL_150 },
  black: { bgColor: NEUTRAL_100, triangleColor: NEUTRAL_200, borderColor: NEUTRAL_150 },
  darkGray: { bgColor: NEUTRAL_200, triangleColor: NEUTRAL_600, borderColor: NEUTRAL_150 },
} as const;

export type ColorTheme = (typeof COLOR_THEME)[keyof typeof COLOR_THEME];
