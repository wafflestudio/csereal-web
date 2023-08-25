import { useParams } from 'next/navigation';
import { useCallback } from 'react';
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

  const { data: { currPost, prevPostPreview, nextPostPreview } = {} } = useSwr(
    { id, searchParams },
    async ({ id, searchParams }) => {
      const currPost = await getPostDetail(id, searchParams);
      const prevPostPreview = getAdjPostInfo(currPost.prevId, currPost.prevTitle);
      const nextPostPreview = getAdjPostInfo(currPost.nextId, currPost.nextTitle);
      return { currPost, prevPostPreview, nextPostPreview };
    },
  );

  const getAdjPostInfo = useCallback(
    (id: number | null, title: string | null) => {
      if (!id || !title) return;
      const adjPost: AdjPostInfo = { title, href: `${listPath}/${id}${queryString}` };
      return adjPost;
    },
    [listPath, queryString],
  );

  return {
    currPost,
    prevPostPreview,
    nextPostPreview,
    listPathWithQuery,
  } as const;
}
