import { getMockSeminarPost, getMockSeminarPosts } from '@/data/seminar';

import { GETSeminarPostsResponse, SeminarPostResponse, PostSearchQueryParams } from '@/types/post';

import { getRequest } from '.';

const seminarPath = '/seminar';

export const getSeminarPosts = (url: string, params: PostSearchQueryParams) =>
  getRequest(seminarPath, params) as Promise<GETSeminarPostsResponse>;

export const getSeminarPost = (id: number, params: PostSearchQueryParams) =>
  getRequest(`/${seminarPath}/${id}`, params) as Promise<SeminarPostResponse>;
