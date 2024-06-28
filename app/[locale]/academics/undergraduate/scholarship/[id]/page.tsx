import { Metadata } from 'next';

import { getScholarship } from '@/apis/academics';

import { undergraduateScholarship } from '@/constants/navTreeNode';

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
    node: undergraduateScholarship,
    metadata: { title: scholarship.name },
  });
}

export default async function UndergraduateScholarshipPage({ params }: { params: { id: string } }) {
  const scholarship = await getScholarship(parseInt(params.id));

  return <ScholarshipDetail scholarship={scholarship} />;
}
