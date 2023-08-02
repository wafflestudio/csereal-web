import { ReadonlyURLSearchParams, useParams, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';

import { AdjPostInfo, FullPost } from '@/types/post';

import { useQueryString } from './useQueryString';

export function usePosts<T extends FullPost>(
  listPath: string,
  getPostDetail: (id: number, params: ReadonlyURLSearchParams) => Promise<unknown>,
) {
  const [posts, setPosts] = useState<{ curr?: T; prev?: AdjPostInfo; next?: AdjPostInfo }>({});
  const { id } = useParams();
  const params = useSearchParams();
  const queryString = useQueryString();
  const listPathWithQuery = `${listPath}${queryString}`;

  const getAdjPost = useCallback(
    async (id: number, type: 'prev' | 'next') => {
      const adjPost = (await getPostDetail(id, params)) as T;
      const adjPostInfo = adjPost
        ? { title: adjPost.title, href: `${listPath}/${adjPost.id}${queryString}` }
        : undefined;
      setPosts((p) => ({ ...p, [type]: adjPostInfo }));
    },
    [listPath, params, queryString, getPostDetail],
  );

  useEffect(() => {
    (async () => {
      const curr = (await getPostDetail(parseInt(id), params)) as T;
      setPosts((p) => ({ ...p, curr: curr }));
      if (curr.prevId) getAdjPost(curr.prevId, 'prev');
      if (curr.nextId) getAdjPost(curr.nextId, 'next');
    })();
  }, [id, params, getAdjPost, getPostDetail]);

  return { posts, listPathWithQuery } as const;
}
