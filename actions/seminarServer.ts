import { PostSearchQueryParams } from '@/types/post';
import { SeminarList, Seminar } from '@/types/seminar';

import { deleteRequest, getRequest } from '../apis/serverIndex';

const seminarPath = '/seminar';

export const getSeminarPosts = async (params: PostSearchQueryParams) => {
  return (await getRequest(seminarPath, params, { next: { tags: ['seminar'] } })) as SeminarList;
};

export const getSeminarPost = async (id: number, params: PostSearchQueryParams) => {
  return (await getRequest(`${seminarPath}/${id}`, params, {
    next: { tags: ['seminar'] },
  })) as Seminar;
};

export const deleteSeminar = async (id: number) => deleteRequest(`${seminarPath}/${id}`);
