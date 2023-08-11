'use client';

import { SWRConfig } from 'swr';

import { getRequest } from '@/apis';

export const SWRProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        fetcher: getRequest,
      }}
    >
      {children}
    </SWRConfig>
  );
};
