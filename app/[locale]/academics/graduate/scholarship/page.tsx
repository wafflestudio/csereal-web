import { Metadata } from 'next';

import { getScholarshipList } from '@/apis/academics';

import { graduateScholarship } from '@/constants/navTreeNode';

import { getMetadata } from '@/utils/metadata';

import ScholarshipPreview from '../../helper/ScholarshipPreview';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return await getMetadata({ locale, node: graduateScholarship });
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
