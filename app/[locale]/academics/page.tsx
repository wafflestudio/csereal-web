import MajorCategoryPageLayout from '@/components/layout/pageLayout/MajorCategoryPageLayout';
import { getMetadata } from '@/utils/metadata';
import { academics } from '@/constants/segmentNode';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;

  const { locale } = params;

  return await getMetadata({ locale, node: academics });
}

export default async function AcademicsPage() {
  return <MajorCategoryPageLayout subtitle="Learning CSE" />;
}
