import { objToQueryString } from '@/utils/convertParams';

// export const BASE_URL =
//   process.env.NODE_ENV === 'production'
//     ? 'https://cse-dev-waffle.bacchus.io/api/v1'
//     : 'http://localhost:8080/api/v1';

export const BASE_URL = 'https://cse-dev-waffle.bacchus.io/api/v1';

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

export const checkError = (response: Response) => {
  if (response.ok) return;

  throw new NetworkError(response.status);
};

export class NetworkError extends Error {
  statusCode: number;
  constructor(statusCode: number) {
    super(`네트워크 에러\nstatus: ${statusCode}`);
    this.statusCode = statusCode;
  }
}
