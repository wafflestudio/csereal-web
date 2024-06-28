import MajorCategoryPageLayout from '@/components/layout/pageLayout/MajorCategoryPageLayout';

import { people } from '@/constants/navTreeNode';

import { getMetadata } from '@/utils/metadata';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return await getMetadata({ locale, node: people });
}

export default function PeoplePage() {
  return <MajorCategoryPageLayout subtitle="Leading CSE" />;
}
