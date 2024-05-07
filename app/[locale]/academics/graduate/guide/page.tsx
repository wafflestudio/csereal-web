import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { getAcademicsGuide } from '@/apis/academics';

import Attachments from '@/components/common/Attachments';
import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Nav');

  return {
    title: t('대학원 안내'),
    description: '서울대학교 컴퓨터공학부 대학원 안내 페이지입니다.',
  };
}

export default async function GraduateGuidePage() {
  const data = await getAcademicsGuide('graduate');

  return (
    <PageLayout titleType="big">
      <Attachments files={data.attachments} />
      <HTMLViewer htmlContent={data.description} />
    </PageLayout>
  );
}
