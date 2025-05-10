import { create } from 'zustand';
import { getUserState, removeAuthCookie, setMockAuthCookie } from '@/actions/session';
import { Role } from '@/apis/types/role';
import { PROD_LOGIN_URL, PROD_LOGOUT_URL } from '@/constants/network';

export type UserState = 'logout' | Role;

interface SessionStore {
  state: UserState;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  mockLogin: (role: Role) => Promise<void>;
  mockLogout: () => Promise<void>;
}

export const useSessionStore = create<SessionStore>((set) => {
  const refresh = async () => {
    const state = await getUserState();
    set({ state });
  };

  return {
    state: 'logout',
    login: async () => {
      window.location.href = PROD_LOGIN_URL; // next/router 없어도 전환 가능
      await refresh();
    },
    logout: async () => {
      window.location.href = PROD_LOGOUT_URL;
      await refresh();
    },
    mockLogin: async (role: Role) => {
      await setMockAuthCookie(role);
      await refresh();
    },
    mockLogout: async () => {
      await removeAuthCookie();
      await refresh();
    },
  };
});
