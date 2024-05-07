import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import MajorCategoryPageLayout from '@/components/layout/pageLayout/MajorCategoryPageLayout';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Nav');

  return {
    title: t('연구'),
    description: '서울대학교 컴퓨터공학부 연구 페이지입니다.',
  };
}

const description = `<p>세계가 주목하는 컴퓨터공학부의 많은 교수들은 ACM, IEEE 등 세계적인 컴퓨터관련 주요 학회에서 국제학술지 편집위원, 국제학술회의 위원장, 기조연설자 등으로 활발하게 활동하고 있습니다. 정부 지원과제, 민간 산업체 지원 연구과제 등도 성공적으로 수행, 우수한 성과들을 내놓고 있으며, 오늘도 인류가 꿈꾸는 행복하고 편리한 세상을 위해 변화와 혁신, 연구와 도전을 계속하고 있습니다.</p>`;

export default async function ResearchPage() {
  return <MajorCategoryPageLayout subtitle="Research CSE" description={description} />;
}
