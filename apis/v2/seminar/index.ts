import { getRequest, postRequest } from '@/apis';
import { PostSearchQueryParams } from '@/apis/types/post';
import { SeminarPreviewList } from '@/apis/types/seminar';
import { FETCH_TAG_SEMINAR } from '@/constants/network';

export const getSeminarPosts = async (params: PostSearchQueryParams) => {
  return getRequest('/v2/seminar', params, {
    next: { tags: [FETCH_TAG_SEMINAR] },
    jsessionID: true,
  }) as Promise<SeminarPreviewList>;
};

export const postSeminar = async (formData: FormData) => {
  return postRequest('/v2/seminar', { body: formData, jsessionID: true }) as Promise<{
    id: number;
  }>;
};
