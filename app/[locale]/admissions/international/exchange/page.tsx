import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { getInternationalExchangeVisiting } from '@/apis/admission';

import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Nav');

  return {
    title: t('Exchange/Visiting Program'),
    description: 'Dept. of Computer Science and Engineering, SNU Exchange/Visiting Program page',
  };
}

export default async function InternationalExchangePage() {
  const { description } = await getInternationalExchangeVisiting();

  return (
    <PageLayout titleType="big" bodyStyle={{ paddingBottom: 0 }}>
      <HTMLViewer htmlContent={description} className="pb-16 sm:pb-[220px]" />
    </PageLayout>
  );
}
