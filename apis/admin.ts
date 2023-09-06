import { SimpleImportant, SimpleSlide } from '@/types/admin';

import { deleteRequest, getRequest, patchRequest } from '.';

// export const getSlides = (page: number) => getRequest('/admin/slide', { page });

// export const getImportants = (page: number) => getRequest('/admin/important', { page });

export const patchMultipleSlides = (newsIdList: number[]) =>
  patchRequest('/admin/slide', { body: JSON.stringify(newsIdList) });

export const patchMultipleImportants = (targetInfos: { id: number; category: string }[]) =>
  patchRequest('/admin/important', { body: JSON.stringify(targetInfos) });

export const getSlides = async (): Promise<{ posts: SimpleSlide[]; total: number }> => ({
  posts: [
    { title: '슬라이드', id: 1, createdAt: '2023-08-05' },
    { title: '슬라이드', id: 2, createdAt: '2023-08-05' },
  ],
  total: 2,
});

export const getImportants = async (): Promise<{ posts: SimpleImportant[]; total: number }> => ({
  posts: [
    { title: '슬라이드', id: 1, createdAt: '2023-08-05', category: 'notice' },
    { title: '슬라이드', id: 2, createdAt: '2023-08-05', category: 'news' },
  ],
  total: 2,
});
