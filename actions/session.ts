'use server';

import { cookies } from 'next/headers';

import { getRequest } from '@/apis';
import { UserState } from '@/contexts/SessionContext';

import { COOKIE_SESSION_ID } from '@/constants/network';

export const getMockAuth = async () => {
  const resp = await fetch(`https://cse-dev-waffle.bacchus.io/api/v1/mock-login`, {
    method: 'GET',
  });

  const cookie = resp.headers.getSetCookie()[0];
  const value = cookie.split(/=|;/)[1];

  // TODO: 실 배포시 secure 옵션 주기
  cookies().set(COOKIE_SESSION_ID, value, { httpOnly: true });
};

export const removeAuth = () => {
  cookies().delete(COOKIE_SESSION_ID);
};

export const getIsStaff = async (): Promise<UserState> => {
  const id = cookies().get(COOKIE_SESSION_ID);
  if (id === undefined) return 'logout';
  if (process.env.NODE_ENV === 'development' && id) return 'staff';

  try {
    const resp = await getRequest<{ isStaff: boolean }>('/user/is-staff');
    return resp.isStaff ? 'staff' : 'non-staff';
  } catch {
    // removeAuth();
    return 'logout';
  }
};
