import { Metadata } from 'next';

import { getScholarship } from '@/apis/academics';
import InvalidIDFallback from '@/components/common/InvalidIDFallback';
import { getMetadata } from '@/utils/metadata';
import { graduateScholarship } from '@/utils/segmentNode';

import ScholarshipDetail from '../../../helper/ScholarshipDetail';

export async function generateMetadata({
  params: { locale, id },
}: {
  params: { locale: string; id: string };
}): Promise<Metadata> {
  try {
    const scholarship = await getScholarship(parseInt(id));

    return await getMetadata({
      locale,
      node: graduateScholarship,
      metadata: { title: scholarship.name },
    });
  } catch {
    return {};
  }
}

export default async function GraduateScholarshipPage({ params }: { params: { id: string } }) {
  try {
    const scholarship = await getScholarship(parseInt(params.id));
    return <ScholarshipDetail scholarship={scholarship} type="graduate" />;
  } catch {
    return <InvalidIDFallback rawID={params.id} />;
  }
}
