'use server';

import { cookies } from 'next/headers';

import { getRequest } from '@/apis';
import { UserState } from '@/contexts/SessionContext';

import { COOKIE_SESSION_ID } from '@/constants/network';

export const getMockAuth = async () => {
  const resp = await fetch(`https://cse-dev-waffle.bacchus.io/api/v1/mock-login`, {
    method: 'GET',
    cache: 'no-store',
  });

  const cookie = resp.headers.getSetCookie()[0];
  const value = cookie.split(/=|;/)[1];

  cookies().set(COOKIE_SESSION_ID, value, { httpOnly: true, sameSite: 'strict' });
};

export const removeAuth = async () => {
  cookies().delete(COOKIE_SESSION_ID);
};

// TODO: getUserState로 이름 변경?
export const getIsStaff = async (): Promise<UserState> => {
  const id = cookies().get(COOKIE_SESSION_ID);
  if (id === undefined) return 'logout';

  try {
    const resp = await getRequest<{ isStaff: boolean }>('/user/is-staff', undefined, {
      cache: 'no-store',
      jsessionID: true,
    });

    return resp.isStaff ? 'staff' : 'non-staff';
  } catch {
    removeAuth();
    return 'logout';
  }
};
