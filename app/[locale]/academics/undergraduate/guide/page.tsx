import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { getAcademicsGuide } from '@/apis/academics';

import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Nav');

  return {
    title: t('학부 안내'),
    description: '서울대학교 컴퓨터공학부 학부 안내 페이지입니다.',
  };
}

export default async function UndergraduateGuidePage() {
  const data = await getAcademicsGuide('undergraduate');

  return (
    <PageLayout titleType="big">
      <HTMLViewer htmlContent={data.description} />
    </PageLayout>
  );
}
