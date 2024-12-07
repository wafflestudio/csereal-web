import { getScholarshipList } from '@/apis/v1/academics/scholarship';
import { getMetadata } from '@/utils/metadata';
import { graduateScholarship } from '@/utils/segmentNode';

import ScholarshipPreview from '../../components/scholarship/ScholarshipPreview';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return await getMetadata({ locale, node: graduateScholarship });
}

export default async function GraduateScholarshipListPage() {
  const data = await getScholarshipList('graduate');

  return (
    <ScholarshipPreview
      description={data.description}
      scholarshipList={data.scholarships}
      type="graduate"
    />
  );
}
