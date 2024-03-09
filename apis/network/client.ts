import { objToQueryString } from '@/utils/convertParams';

import { BASE_URL, checkError } from './common';

export const getRequest = async <T = unknown>(
  url: string,
  params: object = {},
  init?: RequestInit,
): Promise<T> => {
  const queryString = objToQueryString(params);
  const resp = await fetchWithCredentials(`${BASE_URL}${url}${queryString}`, 'GET', init);
  return await resp.json();
};

export const postRequest = async <T = unknown>(url: string, init?: RequestInit): Promise<T> => {
  const resp = await fetchWithCredentials(`${BASE_URL}${url}`, 'POST', init);
  return await resp.json();
};

export const patchRequest = async <T = unknown>(
  url: string,
  init?: RequestInit,
): Promise<T | null> => {
  const resp = await fetchWithCredentials(`${BASE_URL}${url}`, 'PATCH', init);
  return resp.headers.get('content-type') ? await resp.json() : null;
};

export const deleteRequest = async (url: string, init?: RequestInit) => {
  await fetchWithCredentials(`${BASE_URL}${url}`, 'DELETE', init);
};

const fetchWithCredentials = async (url: string, method: string, init?: RequestInit) => {
  const resp = await fetch(url, { ...init, method, credentials: 'include' });
  checkError(resp);
  return resp;
};
