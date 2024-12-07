import { getScholarshipList } from '@/apis/v1/academics/scholarship';
import { getMetadata } from '@/utils/metadata';
import { undergraduateScholarship } from '@/utils/segmentNode';

import ScholarshipPreview from '../../components/scholarship/ScholarshipPreview';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;

  const { locale } = params;

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
