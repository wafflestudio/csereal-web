import { PostSearchQueryParams } from '@/hooks/useCustomSearchParams';

import {
  NoticePostResponse,
  GETNoticePostsResponse,
  NoticePost,
  SimpleNoticePost,
} from '@/types/post';

import { deleteRequest, getRequest, patchRequest, postRequest } from '.';

const noticePath = '/notice';

export const getNoticePosts = (params: PostSearchQueryParams) =>
  getRequest(noticePath, params) as Promise<GETNoticePostsResponse>;

export const getNoticePostDetail = (id: number, params: PostSearchQueryParams) =>
  getRequest(`${noticePath}/${id}`, params) as Promise<NoticePostResponse>;

export const postNotice = (newPost: NoticePost) =>
  postRequest(noticePath, newPost) as Promise<NoticePostResponse>;

export const patchNotice = (id: number, newPost: Partial<NoticePost>) =>
  patchRequest(`${noticePath}/${id}`, newPost) as Promise<NoticePostResponse>;

export const deleteNotice = (id: number) => deleteRequest(`${noticePath}/${id}`);

export const getNoticePostsMock: typeof getNoticePosts = async (params) => {
  console.log('getnotice lists!!');
  return {
    searchList: noticeListMock,
    total: noticeListMock.length,
  };
};

const NoticeMockLong: SimpleNoticePost = {
  id: 1,
  title:
    '2023학년도 2학기 푸른등대 기부장학사업 신규장학생 선발 2023학년도 2학기 푸른등대 기부장학사업 신규장학생 선발',
  createdAt: '2023-07-11T09:29:13',
  isPinned: true,
};

const NoticeMock: SimpleNoticePost = {
  id: 1,
  title: '2023학년도 2학기 푸른등대 기부장학사업 신규장학생 선발',
  createdAt: '2023-07-11T09:29:13',
  isPinned: false,
};

const NoticeMockPin: SimpleNoticePost = {
  id: 2,
  title: '2023학년도 2학기 푸른등대 기부장학사업 신규장학생 선발 안내',
  createdAt: '2023-07-11T09:29:13',
  isPinned: true,
};

const noticeListMock = [
  NoticeMockLong,
  NoticeMockPin,
  NoticeMockPin,
  NoticeMockPin,
  NoticeMockPin,
  NoticeMockPin,
  NoticeMockPin,
  NoticeMock,
  NoticeMock,
  NoticeMock,
  NoticeMock,
  NoticeMock,
  NoticeMock,
  NoticeMock,
  NoticeMock,
  NoticeMock,
  NoticeMock,
  NoticeMock,
  NoticeMock,
  NoticeMock,
  NoticeMock,
  NoticeMock,
  NoticeMock,
  NoticeMock,
  NoticeMock,
  NoticeMock,
];
