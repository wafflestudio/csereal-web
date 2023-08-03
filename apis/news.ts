import axios from 'axios';
import { ReadonlyURLSearchParams } from 'next/navigation';

const axiosInstance = axios.create({
  baseURL: `/notice`,
});

export const getNewsPosts = (searchParams: ReadonlyURLSearchParams) =>
  axiosInstance.get('/', { params: searchParams });
