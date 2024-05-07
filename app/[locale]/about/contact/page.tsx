import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { getContact } from '@/apis/about';

import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Nav');

  return {
    title: t('연락처'),
    description: '서울대학교 컴퓨터공학부 연락처 페이지입니다.',
  };
}

export default async function ContactPage() {
  const { description, imageURL } = await getContact();

  return (
    <PageLayout titleType="big">
      <HTMLViewer
        htmlContent={description}
        topRightContent={{
          type: 'image',
          widthPX: 240,
          heightPX: 360,
          marginTopPx: 28,
          url: imageURL,
        }}
        className="mt-[-1.5rem]"
      />
    </PageLayout>
  );
}
