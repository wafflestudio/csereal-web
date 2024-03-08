'use client';

import React, { createContext, PropsWithChildren, useContext, useMemo } from 'react';
import useSWR from 'swr';

import { getRequest } from '@/apis';

interface SessionContextData {
  user?: User;
  isLoading: boolean;
}

export interface User {
  isStaff: boolean;
}

const SessionContext = createContext<SessionContextData>({
  user: undefined,
  isLoading: true,
});

export const useSessionContext = () => useContext(SessionContext);

export function SessionContextProvider({ children }: PropsWithChildren) {
  const { data, isLoading, error } = useSWR<User>('/user/is-staff', getRequest);

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
