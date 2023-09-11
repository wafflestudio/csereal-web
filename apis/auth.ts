import { cookies } from 'next/dist/client/components/headers';

import { User } from '@/contexts/SessionContext';

import { getRequest } from '.';

// 쿠키 브라우저에 저장되어 있으면 알아서 서버에 넘어간다는 얘기를 들어서 걍 쿠키 설정 안 해보기도 했는데 그럼 401뜸
// 이 상태면 Error: Invariant: Method expects to have requestAsyncStorage, none available 뜸
export const getIsStaff = async () => {
  const jsessionId = cookies().get('JSESSIONID');

  return (await getRequest(
    '/user/is-staff',
    {},
    {
      credentials: 'include',
      headers: {
        Cookie: `JSESSIONID=${jsessionId?.value}`,
      },
    },
  )) as User;
};
