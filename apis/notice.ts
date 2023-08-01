import axios from 'axios';
import { ReadonlyURLSearchParams } from 'next/navigation';

import { BASE_URL } from './baseURL';

const NoticeAPI = axios.create({
  baseURL: `${BASE_URL}/notice`,
});

export const getNoticePostsAPI = (searchParams: ReadonlyURLSearchParams) =>
  NoticeAPI.get('/', { params: searchParams });
