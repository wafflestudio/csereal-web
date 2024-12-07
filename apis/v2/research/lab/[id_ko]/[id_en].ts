import { deleteRequest, putRequest } from '@/apis';
import { WithLanguage } from '@/types/language';
import { ResearchLab } from '@/apis/types/research';

export const deleteResearchLab = (ids: WithLanguage<number>) =>
  deleteRequest(`/v2/research/lab/${ids.ko}/${ids.en}`, { jsessionID: true });

export const putResearchLab = (ids: WithLanguage<number>, formData: FormData) =>
  putRequest<WithLanguage<ResearchLab>>(`/v2/research/lab/${ids.ko}/${ids.en}`, {
    body: formData,
    jsessionID: true,
  });
