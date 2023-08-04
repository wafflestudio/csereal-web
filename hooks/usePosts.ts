import { useParams } from 'next/navigation';
import { useCallback, useEffect, useMemo, useState } from 'react';

import { AdjPostInfo } from '@/types/post';

import { PostSearchQueryParams, useCustomSearchParams } from './useCustomSearchParams';
import { useQueryString } from './useQueryString';

interface PostInfo {
  id: number;
  title: string;
  nextId: number | null;
  prevId: number | null;
}

export function usePosts<T extends PostInfo>(
  listPath: string,
  getPostDetail: (id: number, params: PostSearchQueryParams) => Promise<T>,
) {
  const [posts, setPosts] = useState<{ curr?: T; prev?: AdjPostInfo; next?: AdjPostInfo }>({});
  const { page, keyword, tags } = useCustomSearchParams();
  const searchParams = useMemo(() => ({ page, keyword, tag: tags }), [page, keyword, tags]);
  const id = parseInt(useParams().id);
  const queryString = useQueryString();
  const listPathWithQuery = `${listPath}${queryString}`;

  const getAdjPost = useCallback(
    async (id: number, type: 'prev' | 'next') => {
      const adjPost = await getPostDetail(id, searchParams);
      const adjPostInfo = adjPost
        ? { title: adjPost.title, href: `${listPath}/${adjPost.id}${queryString}` }
        : undefined;
      setPosts((p) => ({ ...p, [type]: adjPostInfo }));
    },
    [searchParams, listPath, queryString, getPostDetail],
  );

  useEffect(() => {
    (async () => {
      const curr = await getPostDetail(id, searchParams);
      setPosts((p) => ({ ...p, curr: curr }));
      if (curr.prevId) getAdjPost(curr.prevId, 'prev');
      if (curr.nextId) getAdjPost(curr.nextId, 'next');
    })();
  }, [id, searchParams, getAdjPost, getPostDetail]);

  return { posts, listPathWithQuery } as const;
}
