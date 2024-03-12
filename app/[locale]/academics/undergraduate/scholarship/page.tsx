import { getScholarshipList } from '@/apis/academics';

import ScholarshipPreview from '../../helper/ScholarshipPreview';

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
