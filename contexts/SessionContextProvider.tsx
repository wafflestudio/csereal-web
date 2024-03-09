'use client';
import React, { PropsWithChildren, useCallback, useEffect, useState } from 'react';

import { getIsStaff, getMockAuth, removeAuth } from '@/actions/sessionActions';
import { useRouter } from '@/navigation';

import { LOGIN_URL, LOGOUT_URL } from '@/constants/network';

import { UserState, SessionContext } from './SessionContext';

export default function SessionContextProvider({ children }: PropsWithChildren) {
  const router = useRouter();
  const [state, setState] = useState<UserState>('logout');

  const refresh = useCallback(async () => {
    const resp = await getIsStaff();
    setState(resp);
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const login = useCallback(async () => {
    if (process.env.NODE_ENV === 'production') {
      router.push(LOGIN_URL);
    } else {
      await getMockAuth();
    }
    await refresh();
  }, [refresh, router]);

  const logout = useCallback(async () => {
    if (process.env.NODE_ENV === 'production') {
      router.push(LOGOUT_URL);
    } else {
      removeAuth();
    }
    await refresh();
  }, [refresh, router]);

  return (
    <SessionContext.Provider value={{ state, login, logout }}>{children}</SessionContext.Provider>
  );
}
