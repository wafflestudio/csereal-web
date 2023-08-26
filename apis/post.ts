import { PostSearchQueryParams } from '@/hooks/useCustomSearchParams';

import { AdjPostInfo } from '@/types/post';

import { objToQueryString } from '@/utils/convert';

import { getRequest } from '.';

interface PostWithAdjInfo {
  id: number;
  title: string;
  nextId: number | null;
  nextTitle: string | null;
  prevId: number | null;
  prevTitle: string | null;
}

const getAdjPostInfo = (
  id: number | null,
  title: string | null,
  listPath: string,
  queryString: string,
) => {
  if (!id || !title) return;
  const adjPost: AdjPostInfo = { title, href: `${listPath}/${id}${queryString}` };
  return adjPost;
};

export const getPostWithAdjInfo = async <T extends PostWithAdjInfo>(
  id: number,
  params: PostSearchQueryParams,
  getPostDetail: (id: number, params: PostSearchQueryParams) => Promise<T>,
  listPath: string,
) => {
  const queryString = objToQueryString(params);
  const currPost = await getPostDetail(id, params);
  const prevPostPreview = getAdjPostInfo(
    currPost.prevId,
    currPost.prevTitle,
    listPath,
    queryString,
  );
  const nextPostPreview = getAdjPostInfo(
    currPost.nextId,
    currPost.nextTitle,
    listPath,
    queryString,
  );
  const listPathWithQuery = `${listPath}${queryString}`;

  return { currPost, prevPostPreview, nextPostPreview, listPathWithQuery };
};
