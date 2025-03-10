import { getRequest, patchRequest } from '@/apis';
import { SlidePreview } from '@/apis/types/admin';

export const getSlides = (pageNum: number) =>
  getRequest(
    '/v2/admin/slide',
    { pageNum },
    { next: { tags: ['slide'] }, jsessionID: true },
  ) as Promise<{ slides: SlidePreview[]; total: number }>;

export const patchMultipleSlides = (newsIdList: number[]) =>
  patchRequest('/v2/admin/slide', {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ newsIdList }),
    jsessionID: true,
  });
