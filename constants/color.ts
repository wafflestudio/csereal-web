export const MAIN_ORANGE = '#ff6914';
export const NEUTRAL_50 = '#fafafa';
export const NEUTRAL_100 = '#f5f5f5';
export const NEUTRAL_200 = '#e5e5e5';
export const NEUTRAL_700 = '#404040';
export const WHITE = '#ffffff';

export const COLOR_THEME = {
  orange: { bgColor: MAIN_ORANGE, triangleColor: NEUTRAL_100 },
  lightGray: { bgColor: NEUTRAL_50, triangleColor: NEUTRAL_100 },
  darkGray: { bgColor: NEUTRAL_700, triangleColor: NEUTRAL_200 },
  white: { bgColor: WHITE, triangleColor: NEUTRAL_100 },
} as const;

export type ColorTheme = (typeof COLOR_THEME)[keyof typeof COLOR_THEME];
