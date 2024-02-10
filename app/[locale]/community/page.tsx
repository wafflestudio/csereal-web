import { getCommunityDescription } from '@/apis/community';

import GuidePageLayout from '@/components/layout/pageLayout/GuidePageLayout';

export default async function CommunityPage() {
  const description = await getCommunityDescription();

  return <GuidePageLayout subtitle="Communicate with CSE" description={description} />;
}
