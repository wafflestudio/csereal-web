import { getScholarship } from '@/apis/v2/academics/scholarship/[id]';
import InvalidIDFallback from '@/components/common/InvalidIDFallback';
import { Language } from '@/types/language';
import { getMetadata } from '@/utils/metadata';
import { undergraduateScholarship } from '@/utils/segmentNode';

import ScholarshipDetail from '../../../components/ScholarshipDetail';

interface ScholarshipDetailProps {
  params: { locale: Language; id: string };
}

export async function generateMetadata({ params: { locale, id } }: ScholarshipDetailProps) {
  try {
    const scholarship = await getScholarship(parseInt(id));

    return await getMetadata({
      locale,
      node: undergraduateScholarship,
      metadata: { title: scholarship[locale].name },
    });
  } catch {
    return {};
  }
}

export default async function UndergraduateScholarshipPage({ params }: ScholarshipDetailProps) {
  try {
    const scholarship = await getScholarship(parseInt(params.id));
    return <ScholarshipDetail scholarship={scholarship[params.locale]} type="undergraduate" />;
  } catch {
    return <InvalidIDFallback rawID={params.id} />;
  }
}
