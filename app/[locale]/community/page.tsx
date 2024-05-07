import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import MajorCategoryPageLayout from '@/components/layout/pageLayout/MajorCategoryPageLayout';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Nav');

  return {
    title: t('소식'),
    description: '서울대학교 컴퓨터공학부 소식 페이지입니다.',
  };
}

export default async function CommunityPage() {
  return <MajorCategoryPageLayout subtitle="Communicate with CSE" />;
}
