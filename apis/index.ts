import { objToQueryString } from '@/utils/convertParams';

const BASE_URL = 'https://cse-dev-waffle.bacchus.io/api/v1';

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

export const postRequest = async <T = unknown>(url: string, init?: RequestInit) => {
  const fetchUrl = `${BASE_URL}${url}`;
  const response = await fetch(fetchUrl, { ...init, method: 'POST' });
  checkError(response);
  const responseData = await response.json();
  return responseData as T;
};

export const patchRequest = async <T = unknown>(url: string, init?: RequestInit) => {
  const fetchUrl = `${BASE_URL}${url}`;
  const response = await fetch(fetchUrl, { ...init, method: 'PATCH' });
  checkError(response);
  if (response.headers.get('content-type')) {
    const responseData = await response.json();
    return responseData as T;
  }
};

export const deleteRequest = async (url: string, init?: RequestInit) => {
  const fetchUrl = `${BASE_URL}${url}`;
  const response = await fetch(fetchUrl, { ...init, method: 'DELETE' });
  checkError(response);
};

const checkError = (response: Response) => {
  if (!response.ok) {
    throw new Error(`네트워크 에러
status: ${response.status}`);
  }
};
