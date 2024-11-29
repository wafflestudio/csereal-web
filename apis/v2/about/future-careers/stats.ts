import { postRequest, putRequest } from '@/apis';
import { CareerStatEditorContent } from '@/components/editor/CareerStatEditor';

export const postCareerStat = (data: CareerStatEditorContent) =>
  postRequest('/v2/about/future-careers/stats', {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    jsessionID: true,
  });

export const putCareerStat = (data: CareerStatEditorContent) =>
  putRequest('/v2/about/future-careers/stats', {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    jsessionID: true,
  });
