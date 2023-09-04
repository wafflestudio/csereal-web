import { getMockSeminarPost, getMockSeminarPosts } from '@/data/seminar';

import {
  GETSeminarPostsResponse,
  SeminarPostResponse,
  PostSearchQueryParams,
  POSTSeminarBody,
} from '@/types/post';

import { getRequest, postRequest } from '.';

const seminarPath = '/seminar';

export const getSeminarPosts = async (params: PostSearchQueryParams) => {
  return (await getRequest(seminarPath, params, { cache: 'no-store' })) as GETSeminarPostsResponse;
};

export const getSeminarPost = async (id: number, params: PostSearchQueryParams) => {
  return (await getRequest(`${seminarPath}/${id}`, params, {
    cache: 'no-store',
  })) as SeminarPostResponse;
};

export const postSeminar = async (body: POSTSeminarBody) => {
  const formData = new FormData();

  formData.append(
    'request',
    new Blob([JSON.stringify(body.request)], {
      type: 'application/json',
    }),
  );

  if (body.image) {
    formData.append('image', body.image);
  }
  for (const attachment of body.attachments) {
    formData.append('attachments', attachment);
  }

  return (await postRequest(seminarPath, { body: formData })) as SeminarPostResponse;
};
