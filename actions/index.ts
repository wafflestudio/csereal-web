import { cookies } from 'next/headers';

import { BASE_URL, checkError } from '@/apis';

export const deleteRequest = async (url: string, init?: RequestInit) => {
  const fetchUrl = `${BASE_URL}${url}`;
  const jsessionId = cookies().get('JSESSIONID');
  const response = await fetch(fetchUrl, {
    ...init,
    method: 'DELETE',
    headers: {
      Cookie: `JSESSIONID=${jsessionId?.value}`,
      ...init?.headers,
    },
  });
  checkError(response);
};

export const postRequest = async (url: string, init?: RequestInit) => {
  const fetchUrl = `${BASE_URL}${url}`;
  const jsessionId = cookies().get('JSESSIONID');
  const response = await fetch(fetchUrl, {
    ...init,
    method: 'POST',
    headers: {
      Cookie: `JSESSIONID=${jsessionId?.value}`,
      ...init?.headers,
    },
  });
  checkError(response);
  const responseData = await response.json();
  return responseData;
};

export const patchRequest = async <T = unknown>(url: string, init?: RequestInit) => {
  const fetchUrl = `${BASE_URL}${url}`;
  const jsessionId = cookies().get('JSESSIONID');
  const response = await fetch(fetchUrl, {
    ...init,
    method: 'PATCH',
    headers: {
      Cookie: `JSESSIONID=${jsessionId?.value}`,
      ...init?.headers,
    },
  });
  checkError(response);
  if (response.headers.get('content-type')) {
    const responseData = await response.json();
    return responseData as T;
  }
};
