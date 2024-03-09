import { ImportantPreview, SlidePreview } from '@/types/admin';

import { patchRequest } from './network/server';

export const getSlides = async (): Promise<{ slides: SlidePreview[]; total: number }> => ({
  slides: [],
  total: 0,
});

export const getImportants = async (): Promise<{
  importants: ImportantPreview[];
  total: number;
}> => ({
  importants: [],
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
