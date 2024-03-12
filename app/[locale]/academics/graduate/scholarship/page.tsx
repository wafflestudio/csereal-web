import { getScholarshipList } from '@/apis/academics';

import ScholarshipPreview from '../../helper/ScholarshipPreview';

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
