import axios, { isAxiosError } from 'axios';

import { convertObjToURLSearchParams } from '@/utils/objectToURLParams';

const BASE_URL = '';

const client = axios.create({
  baseURL: BASE_URL,
});

axios.defaults.paramsSerializer = (params: object) =>
  convertObjToURLSearchParams(params).toString();

export const getRequest = async (url: string, params: object = {}, headers: object = {}) => {
  try {
    const response = await client.get<unknown>(url, { headers, params });
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error.response);
    } else {
      console.log('unknown error');
    }
  }
};

export const postRequest = async (url: string, data: object, headers: object = {}) => {
  try {
    const response = await client.post<unknown>(url, data, { headers });
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error.response);
    } else {
      console.log('unknown error');
    }
  }
};

// 필요할지 모르겠으나 혹시 몰라서 일단 만들어놓음
export const putRequest = async (url: string, data: object, headers: object = {}) => {
  try {
    const response = await client.put<unknown>(url, data, { headers });
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error.response);
    } else {
      console.log('unknown error');
    }
  }
};

export const patchRequest = async (url: string, data: object, headers: object = {}) => {
  try {
    const response = await client.patch<unknown>(url, data, { headers });
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error.response);
      return error.response;
    } else {
      console.log('unknown error');
    }
  }
};

export const deleteRequest = async (url: string, headers: object = {}) => {
  try {
    const response = await client.delete<unknown>(url, { headers });
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.log(error.response);
    } else {
      console.log('unknown error');
    }
  }
};
