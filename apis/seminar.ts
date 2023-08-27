import { getMockSeminarPost, getMockSeminarPosts } from '@/data/seminar';

import { GETSeminarPostsResponse, SeminarPostResponse, PostSearchQueryParams } from '@/types/post';

import { getRequest } from '.';

export const getSeminarPosts = getMockSeminarPosts;

export const getSeminarPost = getMockSeminarPost;

const seminarPath = '/seminar';

// export const getSeminarPosts = (params: PostSearchQueryParams) =>
//   getRequest(seminarPath, params) as Promise<GETSeminarPostsResponse>;

// export const getSeminarPost = (id: number, params: PostSearchQueryParams) =>
//   getRequest(`/${seminarPath}/${id}`, params) as Promise<SeminarPostResponse>;
