import { NEWS_TAGS, NOTICE_TAGS } from '@/constants/tag';

export const validatePageNum = (pageNumStr: string) => {
  const pageNum = Number.parseInt(pageNumStr);
  const isValid = Number.isNaN(pageNum) || pageNum < 1 ? false : true;
  return isValid;
};

export const validateTag = (category: 'notice' | 'news', tag: string | string[]) => {
  const availableTags = category === 'notice' ? NOTICE_TAGS : NEWS_TAGS;
  const isTagValid = (singleTag: string) => availableTags.includes(singleTag);

  let isValid = false;

  if (Array.isArray(tag)) {
    isValid = tag.every(isTagValid);
  } else {
    isValid = isTagValid(tag);
  }

  return isValid;
};
