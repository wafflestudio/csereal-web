export const NOTICE_CATEGORY = ['전체', '장학', '학부', '대학원'] as const;

export type NoticeCategoryType = (typeof NOTICE_CATEGORY)[number];
