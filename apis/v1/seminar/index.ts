import { getRequest, postRequest } from '@/apis';
import { FETCH_TAG_SEMINAR } from '@/constants/network';
import { PostSearchQueryParams } from '@/types/post';
import { SeminarPreviewList } from '@/types/seminar';

export const getSeminarPosts = async (params: PostSearchQueryParams) => {
  return getRequest('/v1/seminar', params, {
    next: { tags: [FETCH_TAG_SEMINAR] },
    jsessionID: true,
  }) as Promise<SeminarPreviewList>;
};

export const postSeminar = async (formData: FormData) => {
  return postRequest('/v1/seminar', { body: formData, jsessionID: true }) as Promise<{
    id: number;
  }>;
};
