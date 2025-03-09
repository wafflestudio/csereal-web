export const isLocal = process.env.PHASE === 'local';
export const isBeta = process.env.PHASE === 'beta';
export const isProd = process.env.PHASE === 'prod';
