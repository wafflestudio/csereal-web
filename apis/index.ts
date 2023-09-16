import { objToQueryString } from '@/utils/convertParams';

// export const BASE_URL = 'https://cse-dev-waffle.bacchus.io/api/v1';
export const BASE_URL = 'http://localhost:8080/api/v1';

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
  });
  checkError(response);
  const responseData = await response.json();
  return responseData as T;
};

export const getRequestWithCookie: typeof getRequest = (url, params, init) =>
  getRequest(url, params, { ...init, credentials: 'include' });

export const postRequest = async <T = unknown>(url: string, init?: RequestInit) => {
  const fetchUrl = `${BASE_URL}${url}`;
  const response = await fetch(fetchUrl, { ...init, method: 'POST' });
  checkError(response);
  const responseData = await response.json();
  return responseData as T;
};

export const postRequestWithCookie: typeof postRequest = (url, init) =>
  postRequest(url, { ...init, credentials: 'include' });

export const patchRequest = async <T = unknown>(url: string, init?: RequestInit) => {
  const fetchUrl = `${BASE_URL}${url}`;
  const response = await fetch(fetchUrl, { ...init, method: 'PATCH' });
  checkError(response);
  if (response.headers.get('content-type')) {
    const responseData = await response.json();
    return responseData as T;
  }
};

export const patchRequestWithCookie: typeof patchRequest = (url, init) =>
  patchRequest(url, { ...init, credentials: 'include' });

export const deleteRequest = async (url: string, init?: RequestInit) => {
  const fetchUrl = `${BASE_URL}${url}`;
  const response = await fetch(fetchUrl, { ...init, method: 'DELETE' });
  checkError(response);
};

export const deleteRequestWithCookie: typeof deleteRequest = async (url, init) =>
  deleteRequest(url, { ...init, credentials: 'include' });

const checkError = (response: Response) => {
  if (!response.ok) {
    throw new Error(`네트워크 에러
status: ${response.status}`);
  }
};
