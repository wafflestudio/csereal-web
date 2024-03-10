'use server';

import { ImportantPreview, SlidePreview } from '@/types/admin';

import { getRequest, patchRequest } from './network/server';

// GET

export const getSlides = (pageNum: number) =>
  getRequest('/admin/slide', { pageNum }, { next: { tags: ['slide'] } }) as Promise<{
    slides: SlidePreview[];
    total: number;
  }>;

export const getImportants = (pageNum: number) =>
  getRequest('/admin/important', { pageNum }, { next: { tags: ['important'] } }) as Promise<{
    importants: ImportantPreview[];
    total: number;
  }>;

// PATCH

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
