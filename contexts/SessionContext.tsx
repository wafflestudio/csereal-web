'use client';

// SessionContext는 next-intl에 의존적일 필요 없으므로 next의 useRouter를 사용한다.
// eslint-disable-next-line no-restricted-imports
import { usePathname, useRouter } from 'next/navigation';
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { getUserState, removeAuthCookie, setAuthCookie } from '@/actions/session';
import { isDev } from '@/constants/env';
import { LOGIN_URL, LOGOUT_URL } from '@/constants/network';

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
  }, [pathname, refresh]);

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
