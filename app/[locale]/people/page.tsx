import MajorCategoryPageLayout from '@/components/layout/pageLayout/MajorCategoryPageLayout';
import { getMetadata } from '@/utils/metadata';
import { people } from '@/constants/segmentNode';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;

  const { locale } = params;

  return await getMetadata({ locale, node: people });
}

export default function PeoplePage() {
  return <MajorCategoryPageLayout subtitle="Leading CSE" />;
}
