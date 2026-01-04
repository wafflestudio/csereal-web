'use client';

import { useTranslations } from 'next-intl';

import MagnificentGlass from '@/public/image/search/magnificent_glass.svg';

export default function NoSearchResultError() {
  const t = useTranslations('Page.search');

  return (
    <div className="flex flex-col items-center">
      <p className="text-base font-medium text-neutral-300">{t('noResults')}</p>
      <MagnificentGlass />
    </div>
  );
}
