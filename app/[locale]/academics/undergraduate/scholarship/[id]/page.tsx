import { getScholarship } from '@/apis/academicsServer';

import ScholarshipDetail from '../../../helper/ScholarshipDetail';

export default async function UndergraduateScholarshipPage({ params }: { params: { id: string } }) {
  const scholarship = await getScholarship(parseInt(params.id), 'undergraduate');

  return <ScholarshipDetail scholarship={scholarship} />;
}
