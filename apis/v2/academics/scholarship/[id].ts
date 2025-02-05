import { deleteRequest, getRequest } from '@/apis';
import { Scholarship } from '@/apis/types/academics';
import { FETCH_TAG_SCHOLARSHIP } from '@/constants/network';
import { WithLanguage } from '@/types/language';

export const getScholarship = async (id: number): Promise<WithLanguage<Scholarship>> => {
  const res = await getRequest<{ first: Scholarship; second: Scholarship }>(
    `/v2/academics/scholarship/${id}`,
    undefined,
    { next: { tags: [FETCH_TAG_SCHOLARSHIP] } },
  );
  const isFirstKo = res.first.language === 'ko';
  return isFirstKo ? { ko: res.first, en: res.second } : { ko: res.second, en: res.first };
};

export const deleteScholarship = async (id: number) =>
  deleteRequest(`/v2/academics/scholarship/${id}`, { jsessionID: true });
