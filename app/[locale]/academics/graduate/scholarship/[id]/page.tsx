import { getScholarship } from '@/apis/v2/academics/scholarship/[id]';
import InvalidIDFallback from '@/components/common/InvalidIDFallback';
import { graduateScholarship } from '@/constants/segmentNode';
import { Language } from '@/types/language';
import { getMetadata } from '@/utils/metadata';

import ScholarshipDetail from '../../../components/scholarship/ScholarshipDetail';

interface ScholarshipDetailProps {
  params: Promise<{ locale: Language; id: string }>;
}

export async function generateMetadata(props: ScholarshipDetailProps) {
  const params = await props.params;

  const { locale, id } = params;

  try {
    const scholarship = await getScholarship(parseInt(id));

    return await getMetadata({
      locale,
      node: graduateScholarship,
      metadata: { title: scholarship[locale].name },
    });
  } catch {
    return {};
  }
}

export default async function GraduateScholarshipPage(props: ScholarshipDetailProps) {
  const params = await props.params;
  try {
    const scholarship = await getScholarship(parseInt(params.id));
    return <ScholarshipDetail scholarship={scholarship[params.locale]} type="graduate" />;
  } catch {
    return <InvalidIDFallback rawID={params.id} />;
  }
}
