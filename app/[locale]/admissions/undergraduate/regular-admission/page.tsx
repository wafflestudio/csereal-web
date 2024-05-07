import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { getUndergraduateRegularAdmission } from '@/apis/admission';

import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Nav');

  return {
    title: t('정시 모집'),
    description: '서울대학교 컴퓨터공학부 정시 모집(학부) 페이지입니다.',
  };
}

export default async function UndergraduateRegularAdmission() {
  const data = await getUndergraduateRegularAdmission();

  return (
    <PageLayout titleType="big">
      <HTMLViewer htmlContent={data.description} />
    </PageLayout>
  );
}
