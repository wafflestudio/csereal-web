import { AdjPostInfo, PostSearchQueryParams } from '@/types/post';

import { objToQueryString } from './convertParams';

interface PostWithAdjInfo {
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

export const getAdjPostsInfo = <T extends PostWithAdjInfo>(
  currPost: T,
  params: PostSearchQueryParams,
  listPath: string,
) => {
  const queryString = objToQueryString(params);
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

  return { prevPostPreview, nextPostPreview, listPathWithQuery };
};
