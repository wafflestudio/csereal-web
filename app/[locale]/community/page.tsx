import MajorCategoryPageLayout from '@/components/layout/pageLayout/MajorCategoryPageLayout';
import { community } from '@/constants/segmentNode';
import { getMetadata } from '@/utils/metadata';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;

  const { locale } = params;

  return await getMetadata({ locale, node: community });
}

export default async function CommunityPage() {
  return <MajorCategoryPageLayout subtitle="Communicate with CSE" />;
}
