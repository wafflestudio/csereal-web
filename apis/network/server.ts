import { cookies } from 'next/headers';

import { objToQueryString } from '@/utils/convertParams';

import { BASE_URL, checkError } from './common';

export const getRequest = async <T>(url: string, params: object = {}, init?: RequestInit) => {
  const queryString = objToQueryString(params);
  const fetchUrl = `${BASE_URL}${url}${queryString}`;
  const jsessionId = cookies().get('JSESSIONID');
  const response = await fetch(fetchUrl, {
    ...init,
    method: 'GET',
    headers: {
      Cookie: `JSESSIONID=${jsessionId?.value}`,
      ...init?.headers,
    },
  });
  checkError(response);
  const responseData = await response.json();
  return responseData as T;
};

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
