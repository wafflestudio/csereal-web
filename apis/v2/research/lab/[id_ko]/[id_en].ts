import { deleteRequest, putRequest } from '@/apis';
import { ResearchLab } from '@/apis/types/research';
import { WithLanguage } from '@/types/language';

export const deleteResearchLab = (ids: WithLanguage<number>) =>
  deleteRequest(`/v2/research/lab/${ids.ko}/${ids.en}`, { jsessionID: true });

export const putResearchLab = (ids: WithLanguage<number>, formData: FormData) =>
  putRequest<WithLanguage<ResearchLab>>(`/v2/research/lab/${ids.ko}/${ids.en}`, {
    body: formData,
    jsessionID: true,
  });
