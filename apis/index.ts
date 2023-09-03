import { objToQueryString } from '@/utils/convertParams';

const BASE_URL = 'https://cse-dev-waffle.bacchus.io/api/v1';

export const getRequest = async <T = unknown>(
  url: string,
  params: object = {},
  headers: HeadersInit = {},
) => {
  const queryString = objToQueryString(params);
  const fetchUrl = `${BASE_URL}${url}${queryString}`;
  const response = await fetch(fetchUrl, { method: 'GET', headers });
  checkError(response);
  const responseData = await response.json();
  return responseData as T;
};

export const postRequest = async <T = unknown>(
  url: string,
  data: object,
  headers: HeadersInit = {},
) => {
  const fetchUrl = `${BASE_URL}${url}`;
  const response = await fetch(fetchUrl, { method: 'POST', headers, body: JSON.stringify(data) });
  checkError(response);
  const responseData = await response.json();
  return responseData as T;
};

export const patchRequest = async <T = unknown>(
  url: string,
  data: object,
  headers: HeadersInit = {},
) => {
  const fetchUrl = `${BASE_URL}${url}`;
  const response = await fetch(fetchUrl, {
    method: 'PATCH',
    headers,
    body: JSON.stringify(data),
  });
  checkError(response);
  const responseData = await response.json();
  return responseData as T;
};

export const deleteRequest = async <T = unknown>(url: string, headers: HeadersInit = {}) => {
  const fetchUrl = `${BASE_URL}${url}`;
  const response = await fetch(fetchUrl, { method: 'DELETE', headers });
  checkError(response);
  const responseData = await response.json();
  return responseData as T;
};

const checkError = (response: Response) => {
  if (!response.ok) {
    throw new Error(`네트워크 에러
status: ${response.status}`);
  }
};
