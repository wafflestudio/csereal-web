import { ImportantPreview, SlidePreview } from '@/types/admin';

import { getRequest } from './common/client';

export const getSlides = (pageNum: number) =>
  getRequest(
    '/admin/slide',
    { pageNum },
    {
      next: { tags: ['slide'] },
    },
  ) as Promise<{
    slides: SlidePreview[];
    total: number;
  }>;

export const getImportants = (pageNum: number) =>
  getRequest(
    '/admin/important',
    { pageNum },
    {
      next: { tags: ['important'] },
    },
  ) as Promise<{
    importants: ImportantPreview[];
    total: number;
  }>;

// export const getSlides = async (
//   pageNum: number,
// ): Promise<{ slides: SlidePreview[]; total: number }> => ({
//   slides: [],
//   total: 0,
// });

// export const getImportants = async (
//   pageNum: number,
// ): Promise<{ importants: ImportantPreview[]; total: number }> => ({
//   importants: [],
//   total: 0,
// });

// export const patchMultipleSlides = (newsIdList: number[]) =>
//   patchRequest('/admin/slide', {
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ newsIdList }),
//   });

// export const patchMultipleImportants = (targetInfos: { id: number; category: string }[]) =>
//   patchRequest('/admin/important', {
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ targetInfos }),
//   });
