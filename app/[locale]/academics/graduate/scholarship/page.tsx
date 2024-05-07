import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { getScholarshipList } from '@/apis/academics';

import ScholarshipPreview from '../../helper/ScholarshipPreview';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Nav');

  return {
    title: t('장학 제도'),
    description: '서울대학교 컴퓨터공학부 장학 제도(대학원) 페이지입니다.',
  };
}

export default async function GraduateScholarshipListPage() {
  const data = await getScholarshipList('graduate');

  return (
    <ScholarshipPreview
      description={data.description}
      scholarshipList={data.scholarships}
      type="GRADUATE"
    />
  );
}
