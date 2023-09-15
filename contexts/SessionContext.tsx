'use client';

import React, { createContext, PropsWithChildren, useCallback, useContext, useMemo } from 'react';
import useSWR from 'swr';

import { getRequest, getRequestWithCookie } from '@/apis';

interface SessionContextData {
  user?: User;
  isLoading: boolean;
}

const SessionContext = createContext<SessionContextData>({
  user: undefined,
  isLoading: true,
});

export const useSessionContext = () => useContext(SessionContext);

export interface User {
  isStaff: boolean;
}

export default function SessionContextProvider({ children }: PropsWithChildren) {
  const { data, isLoading, error } = useSWR<User>('/user/is-staff', getRequestWithCookie);

  const user = useMemo(() => {
    if (data?.isStaff === undefined || error) {
      return undefined;
    } else {
      return {
        isStaff: data.isStaff,
      };
    }
  }, [data?.isStaff, error]);

  return <SessionContext.Provider value={{ user, isLoading }}>{children}</SessionContext.Provider>;
}

const deleteCookie = (key: string) => {
  document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};
