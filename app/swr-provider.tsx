'use client';

import { SWRConfig } from 'swr';

import { getRequest } from '@/apis';

export const SWRProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        fetcher: ({ url, params, headers }) => getRequest(url, params, headers),
        suspense: true,
      }}
    >
      {children}
    </SWRConfig>
  );
};
