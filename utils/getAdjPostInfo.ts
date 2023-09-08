import { AdjPostInfo, PostSearchQueryParams } from '@/types/post';

interface PostWithAdjInfo {
  nextId: number | null;
  nextTitle: string | null;
  prevId: number | null;
  prevTitle: string | null;
}

const getAdjPostInfo = (id: number | null, title: string | null, listPath: string) => {
  if (!id || !title) return;
  const adjPost: AdjPostInfo = { title, href: `${listPath}/${id}` };
  return adjPost;
};

export const getAdjPostsInfo = <T extends PostWithAdjInfo>(
  currPost: T,
  params: PostSearchQueryParams,
  listPath: string,
) => {
  const prevPostPreview = getAdjPostInfo(currPost.prevId, currPost.prevTitle, listPath);
  const nextPostPreview = getAdjPostInfo(currPost.nextId, currPost.nextTitle, listPath);

  return { prevPostPreview, nextPostPreview };
};
