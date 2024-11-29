import { cookies } from 'next/headers';

import { objToQueryString } from '@/utils/convertParams';

type CredentialRequestInit = RequestInit & { jsessionID?: boolean };

export const BASE_URL = process.env.BASE_URL;

export const getRequest = async <T = unknown>(
  url: string,
  params: object = {},
  init?: CredentialRequestInit,
): Promise<T> => {
  const queryString = objToQueryString(params);
  const resp = await _fetch(`${BASE_URL}${url}${queryString}`, 'GET', init);
  return await resp.json();
};

export const postRequest = async <T = unknown>(
  url: string,
  init?: CredentialRequestInit,
): Promise<T | null> => {
  const resp = await _fetch(`${BASE_URL}${url}`, 'POST', init);
  const isJsonResponse = resp.headers.get('content-type')?.includes('application/json');
  return isJsonResponse ? await resp.json() : null;
};

export const patchRequest = async <T = unknown>(
  url: string,
  init?: CredentialRequestInit,
): Promise<T | null> => {
  const resp = await _fetch(`${BASE_URL}${url}`, 'PATCH', init);
  return resp.headers.get('content-type') ? await resp.json() : null;
};

export const putRequest = async <T = unknown>(
  url: string,
  init?: CredentialRequestInit,
): Promise<T | null> => {
  const resp = await _fetch(`${BASE_URL}${url}`, 'PUT', init);
  return resp.headers.get('content-type') ? await resp.json() : null;
};

export const deleteRequest = async (url: string, init?: CredentialRequestInit) => {
  await _fetch(`${BASE_URL}${url}`, 'DELETE', init);
};

const _fetch = async (url: string, method: string, init?: CredentialRequestInit) => {
  let headers: HeadersInit | undefined;

  if (init?.jsessionID) {
    const jsessionId = cookies().get('JSESSIONID')?.value;
    headers = { Cookie: `JSESSIONID=${jsessionId}`, ...init?.headers };
  }

  const resp = await fetch(url, { ...init, method, headers });

  // server action 에러 처리를 위해 status code만 깔끔하게 담음
  if (!resp.ok) throw new Error(resp.status.toString());

  return resp;
};
