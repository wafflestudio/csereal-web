import { getMockSeminarPost, getMockSeminarPosts } from '@/data/seminar';

import { GETSeminarPostsResponse, SeminarPostResponse, PostSearchQueryParams } from '@/types/post';

import { getRequest } from '.';

const seminarPath = '/seminar';

export const getSeminarPosts = async (params: PostSearchQueryParams) => {
  return (await getRequest(seminarPath, params, {
    cache: 'no-store',
  })) as GETSeminarPostsResponse;
};

export const getSeminarPost = (id: number, params: PostSearchQueryParams) =>
  getRequest(`/${seminarPath}/${id}`, params, {
    cache: 'no-store',
  }) as Promise<SeminarPostResponse>;
