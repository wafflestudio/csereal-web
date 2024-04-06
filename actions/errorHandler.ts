// https://github.com/vercel/next.js/discussions/49506

'use server';

import { isDynamicUsageError } from 'next/dist/export/helpers/is-dynamic-usage-error';

import { CustomError } from '@/utils/serverActionError';

export const withErrorHandler = <T extends Array<unknown>, U>(fn: (...args: T) => Promise<U>) => {
  return async (...args: T): Promise<U | CustomError> => {
    try {
      return await fn(...args);
    } catch (e) {
      if (isDynamicUsageError(e)) throw e;

      return { error: { message: (e as Error).message } };
    }
  };
};
