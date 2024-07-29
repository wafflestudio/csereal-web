import { NEWS_TAGS, NOTICE_TAGS } from '@/constants/tag';

export const validatePageNum = (pageNumStr?: string) => {
  // pageNum 없을 경우는 validate 필요 X
  if (!pageNumStr) return true;

  const pageNum = Number.parseInt(pageNumStr);
  const isValid = !Number.isNaN(pageNum) && pageNum >= 1;
  return isValid;
};

export const validateTag = (category: 'notice' | 'news', tag?: string | string[]) => {
  // tag 없을 경우는 validate 필요 X
  if (!tag) return true;

  const availableTags = category === 'notice' ? NOTICE_TAGS : NEWS_TAGS;
  const isTagValid = (singleTag: string) => availableTags.includes(singleTag);

  return Array.isArray(tag) ? tag.every(isTagValid) : isTagValid(tag);
};
