import { delay } from 'es-toolkit';
import { cookies } from 'next/headers';

import { objToQueryString } from '@/utils/convertParams';

type CredentialRequestInit = RequestInit & { jsessionID?: boolean };

// TODO: BASE_URL 통합
export const BASE_URL =
  process.env.NODE_ENV === 'development'
    ? 'https://cse-dev-waffle.bacchus.io/api'
    : 'http://localhost:8080/api';

export const getRequest = async <T = unknown>(
  url: string,
  params: object = {},
  init?: CredentialRequestInit,
): Promise<T> => {
  const queryString = objToQueryString(params);
  const resp = await fetchWithRetry(`${BASE_URL}${url}${queryString}`, 'GET', init);
  return await resp.json();
};

export const postRequest = async <T = unknown>(
  url: string,
  init?: CredentialRequestInit,
): Promise<T | null> => {
  const resp = await fetchWithRetry(`${BASE_URL}${url}`, 'POST', init);
  const isJsonResponse = resp.headers.get('content-type')?.includes('application/json');
  return isJsonResponse ? await resp.json() : null;
};

export const patchRequest = async <T = unknown>(
  url: string,
  init?: CredentialRequestInit,
): Promise<T | null> => {
  const resp = await fetchWithRetry(`${BASE_URL}${url}`, 'PATCH', init);
  return resp.headers.get('content-type') ? await resp.json() : null;
};

export const putRequest = async <T = unknown>(
  url: string,
  init?: CredentialRequestInit,
): Promise<T | null> => {
  const resp = await fetchWithRetry(`${BASE_URL}${url}`, 'PUT', init);
  return resp.headers.get('content-type') ? await resp.json() : null;
};

export const deleteRequest = async (url: string, init?: CredentialRequestInit) => {
  await fetchWithRetry(`${BASE_URL}${url}`, 'DELETE', init);
};

// 학교 서버가 간헐적으로 첫 요청에서 ECONNRESET이 뜨는 경우가 있어 한 번 더 요청.
const fetchWithRetry = async (
  url: string,
  method: string,
  init?: CredentialRequestInit,
  remain: number = 3,
): Promise<Response> => {
  // 안전을 위해 멱등성이 있는 GET 요청에 대해서만 retry
  if (method !== 'GET') return _fetch(url, method, init);

  try {
    return await _fetch(url, method, init);
  } catch (e) {
    if (remain === 0) throw e;
    if (e instanceof Error === false) throw e;
    if (e.message === '404') throw e;

    await delay(100 * 1.5 ** (3 - remain));
    return await fetchWithRetry(url, method, init, remain - 1);
  }
};

const _fetch = async (url: string, method: string, init?: CredentialRequestInit) => {
  if (init?.jsessionID) {
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
  } else {
    const resp = await fetch(url, { ...init, method });
    checkError(resp);

    return resp;
  }
};

const checkError = (response: Response) => {
  if (response.ok) return;
  // server action 에러 처리를 위해 status code만 깔끔하게 담음
  throw new Error(response.status.toString());
};
