import { PostSearchQueryParams } from '@/types/post';
import { PATCHSeminarBody, POSTSeminarBody, Seminar, SeminarList } from '@/types/seminar';

import {
  deleteRequest,
  getRequest,
  patchRequestWithCookie,
  postRequest,
  postRequestWithCookie,
} from '.';

const seminarPath = '/seminar';

export const getSeminarPosts = async (params: PostSearchQueryParams) => {
  return (await getRequest(seminarPath, params, { cache: 'no-store' })) as SeminarList;
};

export const getSeminarPost = async (id: number, params: PostSearchQueryParams) => {
  return (await getRequest(`${seminarPath}/${id}`, params, {
    cache: 'no-store',
  })) as Seminar;
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
    formData.append('mainImage', body.image);
  }

  for (const attachment of body.attachments) {
    formData.append('attachments', attachment);
  }

  await postRequestWithCookie(seminarPath, { body: formData });
};

export const editSeminar = async (id: number, body: PATCHSeminarBody) => {
  const formData = new FormData();

  formData.append(
    'request',
    new Blob([JSON.stringify(body.request)], {
      type: 'application/json',
    }),
  );

  if (body.image) {
    formData.append('mainImage', body.image);
  }

  for (const attachment of body.newAttachments) {
    formData.append('newAttachments', attachment);
  }

  await patchRequestWithCookie(`${seminarPath}/${id}`, { body: formData });
};

export const deleteSeminar = async (id: number) => deleteRequest(`${seminarPath}/${id}`);
