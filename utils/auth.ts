import Cookies from 'js-cookie';

import { COOKIE_SESSION_ID } from '@/constants/network';

/** Client component에서 로그인 유무를 확인 */
export const isLogined = () => {
  const id = Cookies.get(COOKIE_SESSION_ID);
  // TODO: 세션 만료된 경우(?)
  return id !== undefined;
};
