import { deleteRequest, putRequest } from '@/apis';
import { WithLanguage } from '@/types/language';
import { ResearchCenter, ResearchGroup } from '@/apis/types/research';

export const putResearchGroup = (ids: WithLanguage<number>, formData: FormData) =>
  putRequest<WithLanguage<ResearchGroup>>(`/v2/research/${ids.ko}/${ids.en}`, {
    body: formData,
    jsessionID: true,
  });

export const deleteResearchGroup = (ids: WithLanguage<number>) =>
  deleteRequest(`/v2/research/${ids.ko}/${ids.en}`, { jsessionID: true });

export const putResearchCenter = (ids: WithLanguage<number>, formData: FormData) =>
  putRequest<WithLanguage<ResearchCenter>>(`/v2/research/${ids.ko}/${ids.en}`, {
    body: formData,
    jsessionID: true,
  });

export const deleteResearchCenter = (ids: WithLanguage<number>) =>
  deleteRequest(`/v2/research/${ids.ko}/${ids.en}`, { jsessionID: true });
