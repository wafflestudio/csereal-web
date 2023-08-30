import { objToQueryString } from '@/utils/convertParams';

const BASE_URL = 'https://cse-dev-waffle.bacchus.io/api/v1';

export const getRequest = async <T = unknown>(
  url: string,
  params: object = {},
  headers: HeadersInit = {},
) => {
  const queryString = objToQueryString(params);
  const fetchUrl = `${BASE_URL}${url}${queryString}`;
  try {
    const response = await fetch(fetchUrl, { method: 'GET', headers });
    const responseData = await response.json();
    return responseData as T;
  } catch (error) {
    console.log('error on get request');
  }
};

export const postRequest = async <T = unknown>(
  url: string,
  data: object,
  headers: HeadersInit = {},
) => {
  const fetchUrl = `${BASE_URL}${url}`;
  try {
    const response = await fetch(fetchUrl, { method: 'POST', headers, body: JSON.stringify(data) });
    const responseData = await response.json();
    return responseData as T;
  } catch (error) {
    console.log('error on post request');
  }
};

export const patchRequest = async <T = unknown>(
  url: string,
  data: object,
  headers: HeadersInit = {},
) => {
  const fetchUrl = `${BASE_URL}${url}`;
  try {
    const response = await fetch(fetchUrl, {
      method: 'PATCH',
      headers,
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    return responseData as T;
  } catch (error) {
    console.log('error on patch request');
  }
};

export const deleteRequest = async <T = unknown>(url: string, headers: HeadersInit = {}) => {
  const fetchUrl = `${BASE_URL}${url}`;
  try {
    const response = await fetch(fetchUrl, { method: 'DELETE', headers });
    const responseData = await response.json();
    return responseData as T;
  } catch (error) {
    console.log('error on delete request');
  }
};
