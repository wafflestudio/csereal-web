import { getCommunityDescription } from '@/apis/community';

import MajorCategoryPageLayout from '@/components/layout/pageLayout/MajorCategoryPageLayout';

export default async function CommunityPage() {
  const description = await getCommunityDescription();

  return <MajorCategoryPageLayout subtitle="Communicate with CSE" description={description} />;
}
