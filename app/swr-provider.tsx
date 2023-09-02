'use client';

import { SWRConfig } from 'swr';

import { getRequest } from '@/apis';

import { getNoticePosts } from '@/apis/notice';

export const SWRProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <SWRConfig
      value={{
        revalidateOnFocus: false,
        fetcher: ({ url, params, headers }) => getRequest(url, params, headers),
      }}
    >
      {children}
    </SWRConfig>
  );
};
