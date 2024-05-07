import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import MajorCategoryPageLayout from '@/components/layout/pageLayout/MajorCategoryPageLayout';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Nav');

  return {
    title: t('입학'),
    description: '서울대학교 컴퓨터공학부 입학 페이지입니다.',
  };
}

export default async function AdmissionsPage() {
  return <MajorCategoryPageLayout subtitle="Enroll CSE" />;
}
