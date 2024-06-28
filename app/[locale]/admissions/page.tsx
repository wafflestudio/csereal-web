import { Metadata } from 'next';

import MajorCategoryPageLayout from '@/components/layout/pageLayout/MajorCategoryPageLayout';

import { admissions } from '@/constants/navTreeNode';

import { getMetadata } from '@/utils/metadata';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  return await getMetadata({ locale, node: admissions });
}

export default async function AdmissionsPage() {
  return <MajorCategoryPageLayout subtitle="Enroll CSE" />;
}
