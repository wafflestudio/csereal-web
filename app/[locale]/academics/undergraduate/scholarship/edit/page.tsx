import { getScholarshipList } from '@/apis/academics';

import ScholarshipGuideEditPageContent from '../../../helper/ScholarshipGuideEditPageContent';

export default async function UndergraduateScholarshipListEditPage() {
  const { description } = await getScholarshipList('undergraduate');

  return <ScholarshipGuideEditPageContent type="undergraduate" description={description} />;
}
