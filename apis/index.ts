import { convertObjToURLSearchParams } from '@/utils/convert';

const BASE_URL = 'http://cse-dev-waffle.bacchus.io';

const paramsToString = (params: URLSearchParams) => (params.size ? `?${params}` : '');

export const getRequest = async <T = unknown>(
  url: string,
  params: object = {},
  headers: HeadersInit = {},
) => {
  const urlSearchParams = convertObjToURLSearchParams(params);
  const fetchUrl = `${url}${paramsToString(urlSearchParams)}`;
  try {
    const response = await fetch(fetchUrl, { method: 'GET', headers });
    const responseData = await response.json();
    console.log(responseData);
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
  try {
    const response = await fetch(url, { method: 'POST', headers, body: JSON.stringify(data) });
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
  try {
    const response = await fetch(url, {
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
  try {
    const response = await fetch(url, { method: 'DELETE', headers });
    const responseData = await response.json();
    return responseData as T;
  } catch (error) {
    console.log('error on delete request');
  }
};
