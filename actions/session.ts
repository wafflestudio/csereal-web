'use server';

import { cookies } from 'next/headers';

import { getMockLogin } from '@/apis/v1/mock-login';
import { getMyRole } from '@/apis/v2/user/my-role';
import { COOKIE_SESSION_ID } from '@/constants/network';
import { UserState } from '@/contexts/SessionContext';

export const setAuthCookie = async () => {
  const resp = await getMockLogin();
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
    const resp = await getMyRole();
    return resp.roles[0];
  } catch {
    removeAuthCookie();
    return 'logout';
  }
};
