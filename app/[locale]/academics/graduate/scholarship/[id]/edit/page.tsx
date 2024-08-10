import { getScholarship } from '@/apis/academics';

import InvalidIDFallback from '@/components/common/InvalidIDFallback';

import ScholarshipDetailEdit from '../../../../helper/ScholarshipDetailEdit';

export default async function UndergraduateScholarshipEditPage({
  params,
}: {
  params: { id: string };
}) {
  try {
    const scholarship = await getScholarship(parseInt(params.id));
    return <ScholarshipDetailEdit type="graduate" scholarship={scholarship} />;
  } catch {
    return <InvalidIDFallback rawID={params.id} />;
  }
}
