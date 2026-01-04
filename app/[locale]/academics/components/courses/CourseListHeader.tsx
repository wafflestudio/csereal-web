'use client';

import { useTranslations } from 'next-intl';

import { COURSE_ROW_ITEM_WIDTH } from '@/app/[locale]/academics/components/courses/CourseListRow';

/**
 * Grade mapping
 * 0: 대학원
 * 1: 1학년
 * 2: 2학년
 * 3: 3학년
 * 4: 4학년
 * 5: 학년
 */

export default function CourseListHeader() {
  const t = useTranslations('Page.courses');

  return (
    <h5 className="hidden h-11 items-center whitespace-nowrap border-y border-neutral-100 bg-neutral-100 px-4 text-md sm:flex">
      <span className={COURSE_ROW_ITEM_WIDTH.name}>{t('name')}</span>
      <span className={COURSE_ROW_ITEM_WIDTH.classification}>{t('classification')}</span>
      <span className={COURSE_ROW_ITEM_WIDTH.code}>{t('code')}</span>
      <span className={COURSE_ROW_ITEM_WIDTH.credit}>{t('credit', { credit: 0 })}</span>
      <span className={COURSE_ROW_ITEM_WIDTH.grade}>{t('grade', { grade: 5 })}</span>
    </h5>
  );
}
