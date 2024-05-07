import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { getInternationalUndergraduate } from '@/apis/admission';

import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Nav');

  return {
    title: t('Undergraduate'),
    description: 'Dept. of Computer Science and Engineering, SNU Undergraduate page',
  };
}

export default async function InternationalUndergraduateAdmissionPage() {
  const { description } = await getInternationalUndergraduate();

  return (
    <PageLayout titleType="big">
      <HTMLViewer htmlContent={description} />
    </PageLayout>
  );
}
