'use server';

import { cookies } from 'next/headers';

import { UserState } from '@/contexts/SessionContext';

import { getRequest } from '@/apis/common/server';

import { COOKIE_SESSION_ID } from '@/constants/network';

export const getMockAuth = async () => {
  // TODO: getRequest 함수로 구현
  // 지금은 /v1이 segment에 없어서 임시로 fetch를 사용해 직접 구현
  const resp = await fetch(`https://cse-dev-waffle.bacchus.io/api/mock-login`, {
    method: 'GET',
  });

  const cookie = resp.headers.getSetCookie()[0];
  const value = cookie.split(/=|;/)[1];

  cookies().set(COOKIE_SESSION_ID, value, { httpOnly: true, secure: true });
};

export const removeAuth = () => {
  cookies().delete(COOKIE_SESSION_ID);
};

export const getIsStaff = async (): Promise<UserState> => {
  if (cookies().get(COOKIE_SESSION_ID) === undefined) return 'logout';

  try {
    const resp = await getRequest<{ isStaff: boolean }>('/user/is-staff');
    return resp.isStaff ? 'staff' : 'non-staff';
  } catch {
    // removeAuth();
    return 'logout';
  }
};
