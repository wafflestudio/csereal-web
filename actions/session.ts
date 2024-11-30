'use server';

import { cookies } from 'next/headers';

import { getMockLogin } from '@/apis/v1/mock-login';
import { getIsStaff } from '@/apis/v1/user/is-staff';
import { COOKIE_SESSION_ID } from '@/constants/network';
import { UserState } from '@/contexts/SessionContext';

export const setAuthCookie = async () => {
  const resp = await getMockLogin();
  const cookie = resp.headers.getSetCookie()[0];
  const value = cookie.split(/=|;/)[1];
  cookies().set(COOKIE_SESSION_ID, value, { httpOnly: true, sameSite: 'strict' });
};

export const removeAuthCookie = async () => {
  cookies().delete(COOKIE_SESSION_ID);
};

export const getUserState = async (): Promise<UserState> => {
  const id = cookies().get(COOKIE_SESSION_ID);
  if (id === undefined) return 'logout';

  try {
    const resp = await getIsStaff();
    return resp.isStaff ? 'staff' : 'non-staff';
  } catch {
    removeAuthCookie();
    return 'logout';
  }
};
