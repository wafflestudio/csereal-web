'use server';

import { cookies } from 'next/headers';

import { Role } from '@/apis/types/role';
import { getMockLogin } from '@/apis/v2/mock-login';
import { getMyRole } from '@/apis/v2/user/my-role';
import { COOKIE_SESSION_ID } from '@/constants/network';
import { UserState } from '@/stores/SessionStore';

export const setMockAuthCookie = async (role: Role) => {
  const resp = await getMockLogin(role);
  const cookie = resp.headers.getSetCookie()[0];
  const value = cookie.split(/=|;/)[1];
  (await cookies()).set(COOKIE_SESSION_ID, value, { httpOnly: true, sameSite: 'strict' });
};

export const removeAuthCookie = async () => {
  (await cookies()).delete(COOKIE_SESSION_ID);
};

export const getUserState = async (): Promise<UserState> => {
  const id = (await cookies()).get(COOKIE_SESSION_ID);
  if (id === undefined) return 'logout';

  try {
    const { roles } = await getMyRole();
    if (roles.includes('ROLE_STAFF')) return 'ROLE_STAFF';
    if (roles.includes('ROLE_RESERVATION')) return 'ROLE_RESERVATION';
    if (roles.includes('ROLE_COUNCIL')) return 'ROLE_COUNCIL';
    return 'logout';
  } catch {
    removeAuthCookie();
    return 'logout';
  }
};
