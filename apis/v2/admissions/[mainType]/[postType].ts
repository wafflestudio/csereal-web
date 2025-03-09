import { getRequest, putRequest } from '@/apis';
import { WithLanguage } from '@/types/language';

type MainType = 'undergraduate' | 'graduate' | 'international';
type PostType =
  | 'early-admission'
  | 'regular-admission'
  | 'exchange-visiting'
  | 'graduate'
  | 'scholarships'
  | 'undergraduate';

export const getAdmissions = (mainType: MainType, postType: PostType, fetchTag: string) =>
  getRequest(`/v2/admissions/${mainType}/${postType}`, undefined, {
    next: { tags: [fetchTag] },
  }) as Promise<WithLanguage<{ description: string }>>;

export const putAdmissions = (
  mainType: MainType,
  postType: PostType,
  description: WithLanguage<string>,
) =>
  putRequest(`/v2/admissions/${mainType}/${postType}`, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(description),
    jsessionID: true,
  });
