import { getScholarshipList } from '@/apis/v1/academics/scholarship';

import ScholarshipGuideEditPageContent from '../../../helper/ScholarshipGuideEditPageContent';

export default async function UndergraduateScholarshipListEditPage() {
  const { description } = await getScholarshipList('undergraduate');

  return <ScholarshipGuideEditPageContent type="undergraduate" description={description} />;
}
