import { getScholarshipList } from '@/apis/v1/academics/scholarship';

import ScholarshipGuideEditPageContent from '../../../helper/ScholarshipGuideEditPageContent';

export default async function GraduateScholarshipListEditPage() {
  const { description } = await getScholarshipList('graduate');

  return <ScholarshipGuideEditPageContent type="graduate" description={description} />;
}
