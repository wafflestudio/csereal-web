import { getScholarship } from '@/apis/academics';

import ScholarshipDetail from '../../../helper/ScholarshipDetail';

export default async function GraduateScholarshipPage({ params }: { params: { id: string } }) {
  const scholarship = await getScholarship('graduate', parseInt(params.id));

  return <ScholarshipDetail scholarship={scholarship} />;
}
