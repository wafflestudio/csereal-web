export const isDev = process.env.NODE_ENV === 'development';

export const isRelease = process.env.PHASE === 'release';
export const isBeta = process.env.PHASE === 'beta';
