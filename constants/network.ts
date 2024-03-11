import { BASE_URL } from '@/apis/common';

export const COOKIE_SESSION_ID = 'JSESSIONID';

export const LOGIN_URL = BASE_URL + '/login';
export const LOGOUT_URL = BASE_URL + '/logout';

// TODO: fine-grained cache로 바꾸기
export const FETCH_TAG_IMPORANT = 'important';
export const FETCH_TAG_SLIDE = 'slide';
export const FETCH_TAG_NEWS = 'news';
export const FETCH_TAG_NOTICE = 'notice';
export const FETCH_TAG_SEMINAR = 'seminar';
export const FETCH_TAG_RESERVATION = 'reservation';
