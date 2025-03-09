'use client';

import { useTranslations } from 'next-intl';

import { LAB_ROW_ITEM_WIDTH } from './ResearchLabListRow';

export default function ResearchLabListHeader() {
  const t = useTranslations('Content');

  return (
    <h4 className="hidden h-10 items-center gap-2 whitespace-nowrap bg-neutral-100 px-2 text-sm font-medium tracking-[0.02em] sm:flex">
      <span className={LAB_ROW_ITEM_WIDTH.name}>{t('연구실')}</span>
      <span className={LAB_ROW_ITEM_WIDTH.professor}>{t('지도교수')}</span>
      <span className={LAB_ROW_ITEM_WIDTH.location}>{t('연구실 위치')}</span>
      <span className={LAB_ROW_ITEM_WIDTH.tel}>{t('전화')}</span>
      <span className={LAB_ROW_ITEM_WIDTH.acronym}>{t('약자')}</span>
      <span className={LAB_ROW_ITEM_WIDTH.introMaterial}>{t('소개 자료')}</span>
    </h4>
  );
}
