'use server';

import { ImportantPreview, SlidePreview } from '@/types/admin';

import { getRequest, patchRequest } from '.';

// GET

export const getSlides = (pageNum: number) =>
  getRequest(
    '/admin/slide',
    { pageNum },
    { next: { tags: ['slide'] }, jsessionID: true },
  ) as Promise<{
    slides: SlidePreview[];
    total: number;
  }>;

export const getImportants = (pageNum: number) =>
  getRequest(
    '/admin/important',
    { pageNum },
    { next: { tags: ['important'] }, jsessionID: true },
  ) as Promise<{
    importants: ImportantPreview[];
    total: number;
  }>;

// PATCH

export const patchMultipleSlides = (newsIdList: number[]) =>
  patchRequest('/admin/slide', {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ newsIdList }),
    jsessionID: true,
  });

export const patchMultipleImportants = (targetInfos: { id: number; category: string }[]) =>
  patchRequest('/admin/important', {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ targetInfos }),
    jsessionID: true,
  });
