'use client';

import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { getMockAuth, getUserState, removeAuth } from '@/actions/session';
import { LOGIN_URL, LOGOUT_URL } from '@/constants/network';
import { useRouter } from '@/i18n/routing';

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
  const router = useRouter();

  const refresh = useCallback(async () => {
    const resp = await getUserState();
    setState(resp);
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const login = useCallback(async () => {
    if (process.env.NODE_ENV === 'development') {
      await getMockAuth();
    } else {
      router.push(LOGIN_URL);
    }

    await refresh();
  }, [refresh, router]);

  const logout = useCallback(async () => {
    if (process.env.NODE_ENV === 'development') {
      removeAuth();
      router.push('/');
    } else {
      router.push(LOGOUT_URL);
    }

    await refresh();
  }, [refresh, router]);

  return (
    <SessionContext.Provider value={{ state, login, logout }}>{children}</SessionContext.Provider>
  );
}
