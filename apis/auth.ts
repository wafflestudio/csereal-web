import { cookies } from 'next/dist/client/components/headers';

import { getRequest } from '.';

export const getIsStaff = async () => {
  const jsessionId = cookies().get('JSESSIONID');

  return (await getRequest(
    '/user/is-staff',
    {},
    { credentials: 'include', headers: { Cookie: `JESSIONID=${jsessionId?.value}` } },
  )) as { isStaff: boolean };
};
