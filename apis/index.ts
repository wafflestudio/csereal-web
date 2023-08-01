import axios from 'axios';

const BASE_URL = '';

const client = axios.create({
  baseURL: BASE_URL,
});

export const getRequest = async <T>(url: string, params: object = {}, headers: object = {}) => {
  try {
    const response = await client.get<T>(url, { params, headers });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response);
    } else {
      console.log('unknown error');
    }
  }
};

export const postRequest = async <T>(url: string, data: object, headers: object = {}) => {
  try {
    const response = await client.post<T>(url, data, { headers });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response);
    } else {
      console.log('unknown error');
    }
  }
};

export const putRequest = async <T>(url: string, data: object, headers: object = {}) => {
  try {
    const response = await client.put<T>(url, data, { headers });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response);
    } else {
      console.log('unknown error');
    }
  }
};

export const patchRequest = async <T>(url: string, data: object, headers: object = {}) => {
  try {
    const response = await client.patch<T>(url, data, { headers });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response);
      return error.response;
    } else {
      console.log('unknown error');
    }
  }
};

export const deleteRequest = async <T>(url: string, headers: object = {}) => {
  try {
    const response = await client.delete<T>(url, { headers });
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log(error.response);
    } else {
      console.log('unknown error');
    }
  }
};
