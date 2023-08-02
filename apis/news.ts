import axios from 'axios';
import { ReadonlyURLSearchParams } from 'next/navigation';

import { BASE_URL } from './baseURL';

const axiosInstance = axios.create({
  baseURL: `${BASE_URL}/notice`,
});

export const getNewsPosts = (searchParams: ReadonlyURLSearchParams) =>
  axiosInstance.get('/', { params: searchParams });
