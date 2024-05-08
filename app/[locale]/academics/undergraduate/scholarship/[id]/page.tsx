import { Metadata } from 'next';

import { getScholarship } from '@/apis/academics';

import ScholarshipDetail from '../../../helper/ScholarshipDetail';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const scholarship = await getScholarship(parseInt(params.id));

  return {
    title: `${scholarship.name}`,
    description: '서울대학교 컴퓨터공학부 장학금 안내 페이지입니다.',
  };
}

export default async function UndergraduateScholarshipPage({ params }: { params: { id: string } }) {
  const scholarship = await getScholarship(parseInt(params.id));

  return <ScholarshipDetail scholarship={scholarship} />;
}
