import { postRequest } from '@/apis';
import { ResearchCenter, ResearchGroup } from '@/apis/types/research';
import { WithLanguage } from '@/types/language';

export const postResearchGroup = (formData: FormData) =>
  postRequest<WithLanguage<ResearchGroup>>('/v2/research', { body: formData, jsessionID: true });

// 연구 그룹과 동일하나 개발 시 가독성을 위해 분리해둠 (GET은 분리되고 나머지는 통일하면 더 헷갈릴 듯하여)
export const postResearchCenter = (formData: FormData) =>
  postRequest<WithLanguage<ResearchCenter>>('/v2/research', { body: formData, jsessionID: true });
