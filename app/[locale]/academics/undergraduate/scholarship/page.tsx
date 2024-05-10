import { Metadata } from 'next';

import { getScholarshipList } from '@/apis/academics';

import { getMetadata } from '@/utils/metadata';
import { undergraduateScholarship } from '@/utils/segmentNode';

import ScholarshipPreview from '../../helper/ScholarshipPreview';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return await getMetadata({ locale, node: undergraduateScholarship });
}

export default async function UndergraduateScholarshipListPage() {
  const data = await getScholarshipList('undergraduate');

  return (
    <ScholarshipPreview
      description={data.description}
      scholarshipList={data.scholarships}
      type="UNDERGRADUATE"
    />
  );
}
