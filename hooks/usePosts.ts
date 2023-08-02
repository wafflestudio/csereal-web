import { ReadonlyURLSearchParams, useParams, useSearchParams } from 'next/navigation';
import { Dispatch, SetStateAction, useCallback, useEffect, useState } from 'react';

import { getNoticePostDetailAPI } from '@/apis/notice';

import { AdjPostInfo } from '@/components/common/AdjPostNav';

import { paramsToString } from '@/hooks/useCustomSearchParams';

import { FullPost } from '@/types/post';

export function usePosts<T extends FullPost>(
  initPath: string,
  initPost: T,
  getPostDetailAPI: (id: number, params: ReadonlyURLSearchParams) => Promise<T | undefined>,
) {
  const [post, setPost] = useState<T>(initPost);
  const [prev, setPrev] = useState<AdjPostInfo>();
  const [next, setNext] = useState<AdjPostInfo>();
  const { id } = useParams();
  const params = useSearchParams();
  const queryString = paramsToString(params);
  const listPath = `${initPath}${queryString}`;

  const getAdjPost = useCallback(
    async (id: number, setAdjPost: Dispatch<SetStateAction<AdjPostInfo | undefined>>) => {
      const adjPost = await getPostDetailAPI(id, params);
      const adjPostInfo = adjPost
        ? { title: adjPost.title, href: `${initPath}/${adjPost.id}${queryString}` }
        : undefined;
      setAdjPost(adjPostInfo);
    },
    [initPath, params, queryString],
  );

  const getCurrPost = useCallback(async () => {
    const currPost = await getPostDetailAPI(parseInt(id), params);
    if (!currPost) return;
    setPost(currPost);
    if (currPost.prevId) getAdjPost(currPost.prevId, setPrev);
    if (currPost.nextId) getAdjPost(currPost.nextId, setNext);
  }, [id, params, getAdjPost]);

  useEffect(() => {
    // getCurrPost();
  }, [getCurrPost]);

  return { post, prev, next, listPath } as const;
}
