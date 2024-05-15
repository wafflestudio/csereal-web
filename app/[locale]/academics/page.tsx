import MajorCategoryPageLayout from '@/components/layout/pageLayout/MajorCategoryPageLayout';

import { getMetadata } from '@/utils/metadata';
import { academics } from '@/utils/segmentNode';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return await getMetadata({ locale, node: academics });
}

export default async function AcademicsPage() {
  return <MajorCategoryPageLayout subtitle="Learning CSE" />;
}
