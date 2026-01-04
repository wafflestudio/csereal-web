'use client';

import { useTranslations } from 'next-intl';

export default function NoSearchResult() {
  const t = useTranslations('Page.search');

  return <p className="mx-2.5 mb-8 mt-6">{t('noResults')}</p>;
}
