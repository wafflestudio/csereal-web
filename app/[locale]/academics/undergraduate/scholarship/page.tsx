import { getScholarshipList } from '@/apis/v1/academics/scholarship';
import { getMetadata } from '@/utils/metadata';
import { undergraduateScholarship } from '@/utils/segmentNode';

import ScholarshipPreview from '../../components/ScholarshipPreview';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return await getMetadata({ locale, node: undergraduateScholarship });
}

export default async function UndergraduateScholarshipListPage() {
  const data = await getScholarshipList('undergraduate');

  return (
    <ScholarshipPreview
      description={data.description}
      scholarshipList={data.scholarships}
      type="undergraduate"
    />
  );
}
