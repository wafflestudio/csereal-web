import { getScholarship } from '@/apis/academics';

import ScholarshipDetail from '../../../helper/ScholarshipDetail';

export default async function UndergraduateScholarshipPage({ params }: { params: { id: string } }) {
  const scholarship = await getScholarship(parseInt(params.id));

  return <ScholarshipDetail scholarship={scholarship} />;
}
