import { useParams } from 'next/navigation';
import { useCallback, useMemo } from 'react';
import useSwr from 'swr';

import { AdjPostInfo } from '@/types/post';

import { PostSearchQueryParams, useCustomSearchParams } from './useCustomSearchParams';
import { useQueryString } from './useQueryString';

interface PostWithAdjIdInfo {
  id: number;
  title: string;
  nextId: number | null;
  nextTitle: string | null;
  prevId: number | null;
  prevTitle: string | null;
}

export function usePosts<T extends PostWithAdjIdInfo>(
  listPath: string,
  getPostDetail: (id: number, params: PostSearchQueryParams) => Promise<T>,
) {
  const { page, keyword, tags } = useCustomSearchParams();
  const searchParams = { page, keyword, tag: tags };
  const id = parseInt(useParams().id);
  const queryString = useQueryString();
  const listPathWithQuery = `${listPath}${queryString}`;

  const { data: posts } = useSwr([id, searchParams], async () => {
    const curr = await getPostDetail(id, searchParams);
    const prev = getAdjPostInfo(curr.prevId, curr.prevTitle);
    const next = getAdjPostInfo(curr.nextId, curr.nextTitle);
    return { curr, prev, next };
  });

  const getAdjPostInfo = useCallback(
    (id: number | null, title: string | null) => {
      if (!id || !title) return;
      const adjPost: AdjPostInfo = { title, href: `${listPath}/${id}${queryString}` };
      return adjPost;
    },
    [listPath, queryString],
  );

  return { posts, listPathWithQuery } as const;
}
