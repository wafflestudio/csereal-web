'use client';

import React, { createContext, PropsWithChildren, useCallback, useContext, useMemo } from 'react';
import useSWR from 'swr';

import { getRequest } from '@/apis';

interface SessionContextData {
  user?: User;
  logout: () => void;
  isLoading: boolean;
}

const SessionContext = createContext<SessionContextData>({
  user: undefined,
  logout: () => {
    throw new Error('SessionContext not provided');
  },
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

  const logout = useCallback(() => {
    deleteCookie('JSESSIONID');
  }, []);

  return (
    <SessionContext.Provider value={{ user, logout, isLoading }}>
      {children}
    </SessionContext.Provider>
  );
}

const getRequestWithCookie: typeof getRequest = (url, params, init) =>
  getRequest(url, params, { ...init, credentials: 'include' });

const deleteCookie = (key: string) => {
  document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};
