'use client';

import { useTranslations } from 'next-intl';

import { COURSE_ROW_ITEM_WIDTH } from './CourseListRow';

export default function CourseListHeader() {
  const t = useTranslations('Content');

  return (
    <h5 className="hidden h-11 items-center whitespace-nowrap border-y border-neutral-100 bg-neutral-100 px-4 text-md sm:flex">
      <span className={COURSE_ROW_ITEM_WIDTH.name}>{t('교과목명')}</span>
      <span className={COURSE_ROW_ITEM_WIDTH.classification}>{t('교과목 구분')}</span>
      <span className={COURSE_ROW_ITEM_WIDTH.code}>{t('교과목 번호')}</span>
      <span className={COURSE_ROW_ITEM_WIDTH.credit}>{t('학점')}</span>
      <span className={COURSE_ROW_ITEM_WIDTH.grade}>{t('학년')}</span>
    </h5>
  );
}
