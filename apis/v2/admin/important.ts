import { getRequest, patchRequest } from '@/apis';
import { ImportantPreview } from '@/apis/types/admin';

export const getImportants = (pageNum: number) =>
  getRequest(
    '/v2/admin/important',
    { pageNum },
    { next: { tags: ['important'] }, jsessionID: true },
  ) as Promise<{
    importants: ImportantPreview[];
    total: number;
  }>;

export const patchMultipleImportants = (targetInfos: { id: number; category: string }[]) =>
  patchRequest('/v2/admin/important', {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ targetInfos }),
    jsessionID: true,
  });
