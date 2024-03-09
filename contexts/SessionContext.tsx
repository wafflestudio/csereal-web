'use client';

import React, {
  createContext,
  useContext,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from 'react';

import { getIsStaff, getMockAuth, removeAuth } from '@/actions/session';

export type UserState = 'logout' | 'non-staff' | 'staff';

type SessionContextData = {
  state: UserState;
  logout: () => Promise<void>;
  login: () => Promise<void>;
};

export const SessionContext = createContext<SessionContextData>({
  state: 'logout',
  logout: async () => {},
  login: async () => {},
});

export const useSessionContext = () => useContext(SessionContext);

export default function SessionContextProvider({ children }: PropsWithChildren) {
  const [state, setState] = useState<UserState>('logout');

  const refresh = useCallback(async () => {
    const resp = await getIsStaff();
    setState(resp);
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const login = useCallback(async () => {
    // TODO: 실제 배포시 LOGIN_URL, LOGOUT_URL 사용
    await getMockAuth();
    await refresh();
  }, [refresh]);

  const logout = useCallback(async () => {
    // TODO: 실제 배포시 LOGIN_URL, LOGOUT_URL 사용
    removeAuth();
    await refresh();
  }, [refresh]);

  return (
    <SessionContext.Provider value={{ state, login, logout }}>{children}</SessionContext.Provider>
  );
}
