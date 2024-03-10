import { getMockGraduateScholarshipList } from '@/data/serverObjects';

import ScholarshipPreview from '../../helper/ScholarshipPreview';

export default async function GraduateScholarshipListPage() {
  const data = await getMockGraduateScholarshipList();

  return (
    <ScholarshipPreview
      description={data.description}
      scholarshipList={data.scholarship}
      type="GRADUATE"
    />
  );
}
