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

export const getNoticePostsMock: typeof getNoticePosts = async (params) => ({
  searchList: noticeListMock,
  total: noticeListMock.length,
});

export const getNoticePostDetailMock: typeof getNoticePostDetail = async (id, params) =>
  NoticeDetailMock;

const NoticeDetailMock: NoticePostResponse = {
  id: 3,
  title: 'What is Lorem Ipsum?',
  nextId: 4,
  nextTitle: 'Why do we use it?',
  prevId: null,
  prevTitle: null,
  tags: ['장학', '다전공'],
  isPinned: false,
  isPublic: true,
  isSlide: false,
  description: `<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>`,
  createdAt: '2023-08-10 19:42',
  modifiedAt: '2023-08-10 19:42',
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
