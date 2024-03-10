import { getUndergraduateScholarshipList } from '@/apis/academicsServer';

import ScholarshipPreview from '../../helper/ScholarshipPreview';

export default async function UndergraduateScholarshipListPage() {
  const data = await getUndergraduateScholarshipList();

  return <ScholarshipPreview description={data.description} scholarshipList={data.scholarship} />;
}
