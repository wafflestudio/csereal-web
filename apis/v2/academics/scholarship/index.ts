import { putRequest } from '@/apis';
import { Scholarship } from '@/apis/types/academics';
import { WithLanguage } from '@/types/language';

export const putScholarship = async (data: WithLanguage<Scholarship>) =>
  putRequest(`/v2/academics/scholarship`, {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    jsessionID: true,
  });
