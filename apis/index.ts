import axios, { isAxiosError } from 'axios';

const BASE_URL = '';

const client = axios.create({
  baseURL: BASE_URL,
});

export const getRequest = async (url: string, params: object = {}, headers: object = {}) => {
  try {
    const response = await client.get<unknown>(url, { params, headers });
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
