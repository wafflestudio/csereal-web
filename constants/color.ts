export const MAIN_ORANGE = '#ff6914';
export const NEUTRAL_50 = '#fafafa';
export const NEUTRAL_100 = '#f5f5f5';
export const NEUTRAL_200 = '#e5e5e5';
export const NEUTRAL_300 = '#d4d4d4';
export const NEUTRAL_600 = '#525252';
export const WHITE = '#ffffff';

export const COLOR_THEME = {
  orange: { bgColor: MAIN_ORANGE, triangleColor: WHITE, borderColor: MAIN_ORANGE },
  lightGray: { bgColor: NEUTRAL_50, triangleColor: WHITE, borderColor: NEUTRAL_100 },
  black: { bgColor: NEUTRAL_50, triangleColor: NEUTRAL_200, borderColor: NEUTRAL_100 },
  darkGray: { bgColor: NEUTRAL_200, triangleColor: NEUTRAL_600, borderColor: NEUTRAL_100 },
} as const;

export type ColorTheme = (typeof COLOR_THEME)[keyof typeof COLOR_THEME];
