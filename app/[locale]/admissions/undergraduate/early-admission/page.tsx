import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { getUndergraduateEarlyAdmission } from '@/apis/admission';

import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Nav');

  return {
    title: t('수시 모집'),
    description: '서울대학교 컴퓨터공학부 수시 모집(학부) 페이지입니다.',
  };
}

export default async function UndergraduateEarlyAdmission() {
  const data = await getUndergraduateEarlyAdmission();

  return (
    <PageLayout titleType="big">
      <HTMLViewer htmlContent={data.description} />
    </PageLayout>
  );
}
