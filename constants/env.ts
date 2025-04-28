export const isLocal = process.env.NEXT_PUBLIC_PHASE === 'local';
export const isBeta = process.env.NEXT_PUBLIC_PHASE === 'beta';
export const isProd = process.env.NEXT_PUBLIC_PHASE === 'prod';

export const BASE_URL = {
  local: 'https://cse-dev-waffle.bacchus.io/api',
  beta: 'http://localhost:8080/api',
  prod: 'http://localhost:8080/api',
}[process.env.NEXT_PUBLIC_PHASE as string]!;
