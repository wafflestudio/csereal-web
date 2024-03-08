'use client';

import React, {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { getIsStaff, getMockAuth, removeAuth } from '@/actions/sessionActions';
import { useRouter } from '@/navigation';

import { BASE_URL } from '@/apis/common/client';

export type UserState = 'logout' | 'non-staff' | 'staff';

const LOGIN_URL = BASE_URL + '/login';
const LOGOUT_URL = BASE_URL + '/logout';

type SessionContextData = {
  state: UserState;
  logout: () => Promise<void>;
  login: () => Promise<void>;
};

const SessionContext = createContext<SessionContextData>({
  state: 'logout',
  logout: async () => {},
  login: async () => {},
});

export const useSessionContext = () => useContext(SessionContext);

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
