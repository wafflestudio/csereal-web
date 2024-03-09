import { objToQueryString } from '@/utils/convertParams';

import { BASE_URL, checkError } from './common';

export const getRequest = async <T = unknown>(
  url: string,
  params: object = {},
  init?: RequestInit,
) => {
  const queryString = objToQueryString(params);
  const fetchUrl = `${BASE_URL}${url}${queryString}`;
  const response = await fetch(fetchUrl, {
    ...init,
    method: 'GET',
    credentials: 'include',
  });
  checkError(response);
  const responseData = await response.json();
  return responseData as T;
};

export const postRequest = async <T = unknown>(url: string, init?: RequestInit) => {
  const fetchUrl = `${BASE_URL}${url}`;
  const response = await fetch(fetchUrl, { ...init, method: 'POST', credentials: 'include' });
  checkError(response);
  const responseData = await response.json();
  return responseData as T;
};

export const patchRequest = async <T = unknown>(url: string, init?: RequestInit) => {
  const fetchUrl = `${BASE_URL}${url}`;
  const response = await fetch(fetchUrl, { ...init, method: 'PATCH', credentials: 'include' });
  checkError(response);
  if (response.headers.get('content-type')) {
    const responseData = await response.json();
    return responseData as T;
  }
};

export const deleteRequest = async (url: string, init?: RequestInit) => {
  const fetchUrl = `${BASE_URL}${url}`;
  const response = await fetch(fetchUrl, { ...init, method: 'DELETE', credentials: 'include' });
  checkError(response);
};
