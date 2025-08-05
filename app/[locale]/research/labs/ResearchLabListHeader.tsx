'use client';

import { useTranslations } from 'next-intl';

import { LAB_ROW_ITEM_WIDTH } from '@/app/[locale]/research/labs/ResearchLabListRow';

export default function ResearchLabListHeader() {
  const t = useTranslations('Page.laboratories');

  return (
    <h4 className="hidden h-10 items-center gap-2 whitespace-nowrap bg-neutral-100 px-2 text-sm font-medium tracking-[0.02em] sm:flex">
      <span className={LAB_ROW_ITEM_WIDTH.name}>{t('name')}</span>
      <span className={LAB_ROW_ITEM_WIDTH.professor}>{t('supervisor')}</span>
      <span className={LAB_ROW_ITEM_WIDTH.location}>{t('location')}</span>
      <span className={LAB_ROW_ITEM_WIDTH.tel}>{t('phone')}</span>
      <span className={LAB_ROW_ITEM_WIDTH.acronym}>{t('acronym')}</span>
      <span className={LAB_ROW_ITEM_WIDTH.introMaterial}>{t('information')}</span>
    </h4>
  );
}
