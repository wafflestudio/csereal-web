import { Metadata } from 'next';

import { getScholarship } from '@/apis/academics';

import { graduateScholarship } from '@/constants/navTreeNode';

import { getMetadata } from '@/utils/metadata';

import ScholarshipDetail from '../../../helper/ScholarshipDetail';

export async function generateMetadata({
  params: { locale, id },
}: {
  params: { locale: string; id: string };
}): Promise<Metadata> {
  const scholarship = await getScholarship(parseInt(id));

  return await getMetadata({
    locale,
    node: graduateScholarship,
    metadata: { title: scholarship.name },
  });
}

export default async function GraduateScholarshipPage({ params }: { params: { id: string } }) {
  const scholarship = await getScholarship(parseInt(params.id));

  return <ScholarshipDetail scholarship={scholarship} />;
}
