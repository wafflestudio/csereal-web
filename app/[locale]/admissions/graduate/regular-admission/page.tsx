import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { getGraduateRegularAdmission } from '@/apis/admission';

import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Nav');

  return {
    title: t('전기/후기 모집'),
    description: '서울대학교 컴퓨터공학부 전기/후기 모집(대학원) 페이지입니다.',
  };
}

export default async function GraduateRegularAdmission() {
  const data = await getGraduateRegularAdmission();

  return (
    <PageLayout titleType="big">
      <HTMLViewer htmlContent={data.description} />
    </PageLayout>
  );
}
