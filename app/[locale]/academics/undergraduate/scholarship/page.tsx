import { getScholarshipList } from '@/apis/academics';

import { undergraduateScholarship } from '@/constants/navTreeNode';

import { getMetadata } from '@/utils/metadata';

import ScholarshipPreview from '../../helper/ScholarshipPreview';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
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
