'use client';

import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { getUserState, removeAuthCookie, setAuthCookie } from '@/actions/session';
import { LOGIN_URL, LOGOUT_URL } from '@/constants/network';
import { usePathname, useRouter } from '@/i18n/routing';
import { isDev } from '@/constants/env';

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
  const pathname = usePathname();

  const refresh = useCallback(async () => {
    setState(await getUserState());
  }, []);

  useEffect(() => {
    refresh();
  }, [pathname]);

  const login = useCallback(async () => {
    if (isDev) {
      await setAuthCookie();
      await refresh();
    } else {
      router.push(LOGIN_URL);
    }
  }, [refresh, router]);

  const logout = useCallback(async () => {
    if (isDev) {
      removeAuthCookie();
      await refresh();
    } else {
      router.push(LOGOUT_URL);
    }
  }, [refresh, router]);

  return (
    <SessionContext.Provider value={{ state, login, logout }}>{children}</SessionContext.Provider>
  );
}
