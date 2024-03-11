import { cookies } from 'next/headers';

import { objToQueryString } from '@/utils/convertParams';

export const BASE_URL = 'https://cse-dev-waffle.bacchus.io/api/v1';

// REST request

export const getRequest = async <T = unknown>(
  url: string,
  params: object = {},
  init?: RequestInit,
): Promise<T> => {
  const queryString = objToQueryString(params);
  const resp = await fetchWithRetry(`${BASE_URL}${url}${queryString}`, 'GET', init);
  return await resp.json();
};

export const postRequest = async <T = unknown>(url: string, init?: RequestInit): Promise<T> => {
  const resp = await fetchWithRetry(`${BASE_URL}${url}`, 'POST', init);
  return await resp.json();
};

export const patchRequest = async <T = unknown>(
  url: string,
  init?: RequestInit,
): Promise<T | null> => {
  const resp = await fetchWithRetry(`${BASE_URL}${url}`, 'PATCH', init);
  return resp.headers.get('content-type') ? await resp.json() : null;
};

export const deleteRequest = async (url: string, init?: RequestInit) => {
  await fetchWithRetry(`${BASE_URL}${url}`, 'DELETE', init);
};

// util

/**
 * 학교 서버가 간헐적으로 첫 요청에서 ECONNRESET이 뜨는 경우가 있어 한 번 더 요청.
 * 안전을 위해 멱등성이 있는 GET 요청에 대해서만 retry
 */
const fetchWithRetry = async (url: string, method: string, init?: RequestInit) => {
  if (method !== 'GET') return fetchWithCredentials(url, method, init);

  try {
    return await fetchWithCredentials(url, method, init);
  } catch (e) {
    if (e instanceof NetworkError) throw e;
    console.log('fetchWithRetry: 서버 에러 감지');
    return fetchWithCredentials(url, method, init);
  }
};

const fetchWithCredentials = async (url: string, method: string, init?: RequestInit) => {
  const jsessionId = cookies().get('JSESSIONID');
  const resp = await fetch(url, {
    ...init,
    method,
    headers: {
      Cookie: `JSESSIONID=${jsessionId?.value}`,
      ...init?.headers,
    },
  });
  checkError(resp);

  return resp;
};

export const checkError = (response: Response) => {
  if (response.ok) return;
  throw new NetworkError(response.status);
};

export class NetworkError extends Error {
  statusCode: number;
  constructor(statusCode: number) {
    super(`${statusCode} 에러`);
    this.statusCode = statusCode;
  }
}
