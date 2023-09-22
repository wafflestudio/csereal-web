import { ImportantPreview, SlidePreview } from '@/types/admin';

import { getRequest, patchRequest } from './serverIndex';

// export const getSlides = (pageNum: number) =>
//   getRequest(
//     '/admin/slide',
//     { pageNum },
//     {
//       next: { tags: ['slide'] },
//     },
//   ) as Promise<{
//     posts: SlidePreview[];
//     total: number;
//   }>;

// export const getImportants = (pageNum: number) =>
//   getRequest(
//     '/admin/important',
//     { pageNum },
//     {
//       next: { tags: ['important'] },
//     },
//   ) as Promise<{
//     posts: ImportantPreview[];
//     total: number;
//   }>;

export const getSlides = async (
  page: number,
): Promise<{ posts: SlidePreview[]; total: number }> => ({
  posts: [],
  total: 0,
});

export const getImportants = async (
  page: number,
): Promise<{ posts: ImportantPreview[]; total: number }> => ({
  posts: [],
  total: 0,
});

export const patchMultipleSlides = (newsIdList: number[]) =>
  patchRequest('/admin/slide', {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ newsIdList }),
  });

export const patchMultipleImportants = (targetInfos: { id: number; category: string }[]) =>
  patchRequest('/admin/important', {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ targetInfos }),
  });
