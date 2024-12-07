import { Metadata } from 'next';

import MajorCategoryPageLayout from '@/components/layout/pageLayout/MajorCategoryPageLayout';
import { getMetadata } from '@/utils/metadata';
import { admissions } from '@/utils/segmentNode';

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const params = await props.params;

  const { locale } = params;

  return await getMetadata({ locale, node: admissions });
}

export default async function AdmissionsPage() {
  return <MajorCategoryPageLayout subtitle="Enroll CSE" />;
}
