import MajorCategoryPageLayout from '@/components/layout/pageLayout/MajorCategoryPageLayout';
import { getMetadata } from '@/utils/metadata';
import { community } from '@/utils/segmentNode';

export async function generateMetadata(props: { params: Promise<{ locale: string }> }) {
  const params = await props.params;

  const { locale } = params;

  return await getMetadata({ locale, node: community });
}

export default async function CommunityPage() {
  return <MajorCategoryPageLayout subtitle="Communicate with CSE" />;
}
