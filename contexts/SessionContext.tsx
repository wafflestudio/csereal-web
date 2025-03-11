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

import { getUserState, removeAuthCookie, setMockAuthCookie } from '@/actions/session';
import { Role } from '@/apis/types/role';
import { PROD_LOGIN_URL, PROD_LOGOUT_URL } from '@/constants/network';

export type UserState = 'logout' | Role;

type SessionContextData = {
  state: UserState;
  logout: () => Promise<void>;
  login: () => Promise<void>;
  mockLogin: (role: Role) => Promise<void>;
  mockLogout: () => Promise<void>;
};

export const SessionContext = createContext<SessionContextData>({
  state: 'logout',
  logout: async () => {},
  login: async () => {},
  mockLogin: async () => {},
  mockLogout: async () => {},
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
    router.push(PROD_LOGIN_URL);
  }, [router]);

  const logout = useCallback(async () => {
    router.push(PROD_LOGOUT_URL);
  }, [router]);

  const mockLogin = useCallback(
    async (role: Role) => {
      await setMockAuthCookie(role);
      await refresh();
    },
    [refresh],
  );

  const mockLogout = useCallback(async () => {
    await removeAuthCookie();
    await refresh();
  }, [refresh]);

  return (
    <SessionContext.Provider value={{ state, login, logout, mockLogin, mockLogout }}>
      {children}
    </SessionContext.Provider>
  );
}
