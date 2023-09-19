import { ImportantPreview, SlidePreview } from '@/types/admin';

import { deleteRequest, getRequest, getRequestWithCookie, patchRequest } from '.';

// export const getSlides = (pageNum: number) =>
//   getRequestWithCookie('/admin/slide', { pageNum }) as Promise<{
//     posts: SlidePreview[];
//     total: number;
//   }>;

// export const getImportants = (pageNum: number) =>
//   getRequest('/admin/important', { pageNum }) as Promise<{
//     posts: ImportantPreview[];
//     total: number;
//   }>;

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

export const getSlides = async (): Promise<{ posts: SlidePreview[]; total: number }> => ({
  posts: [
    { title: '슬라이드', id: 1, createdAt: '2023-08-05' },
    { title: '슬라이드', id: 2, createdAt: '2023-08-05' },
  ],
  total: 2,
});

export const getImportants = async (): Promise<{ posts: ImportantPreview[]; total: number }> => ({
  posts: [
    { title: '슬라이드', id: 1, createdAt: '2023-08-05', category: 'notice' },
    { title: '슬라이드', id: 2, createdAt: '2023-08-05', category: 'news' },
  ],
  total: 2,
});
