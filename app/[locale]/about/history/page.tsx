import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import history_image from '@/public/image/about/history.png';

import { getHistory } from '@/apis/about';

import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Nav');

  return {
    title: t('연혁'),
    description: '서울대학교 컴퓨터공학부 연혁 페이지입니다.',
  };
}

export default async function History() {
  const resp = await getHistory();

  return (
    <PageLayout titleType="big">
      <HTMLViewer
        htmlContent={resp.description}
        topRightContent={{
          type: 'image',
          widthPX: 320,
          heightPX: 360,
          url: history_image.src,
          mobileFullWidth: true,
        }}
      />
    </PageLayout>
  );
}
