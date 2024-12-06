import { getScholarship } from '@/apis/v2/academics/scholarship/[id]';
import InvalidIDFallback from '@/components/common/InvalidIDFallback';

import ScholarshipDetailEdit from '../../../../components/ScholarshipDetailEdit';

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
