import axios from 'axios';

const BASE_URL = '';

const BaseInstance = axios.create({
  baseURL: BASE_URL,
});

export const getRequest = (url: string, params: object = {}, headers: object = {}) =>
  BaseInstance.get(url, { params, headers });

export const postRequest = (url: string, data: object, headers: object = {}) =>
  BaseInstance.post(url, data, { headers });

export const putRequest = (url: string, data: object, headers: object = {}) =>
  BaseInstance.put(url, data, { headers });

export const patchRequest = (url: string, data: object, headers: object = {}) =>
  BaseInstance.patch(url, data, { headers });

export const deleteRequest = (url: string, headers: object = {}) =>
  BaseInstance.delete(url, { headers });
