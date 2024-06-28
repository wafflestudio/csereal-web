import MajorCategoryPageLayout from '@/components/layout/pageLayout/MajorCategoryPageLayout';

import { community } from '@/constants/navTreeNode';

import { getMetadata } from '@/utils/metadata';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return await getMetadata({ locale, node: community });
}

export default async function CommunityPage() {
  return <MajorCategoryPageLayout subtitle="Communicate with CSE" />;
}
