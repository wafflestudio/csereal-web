import { getPeopleDescription } from '@/apis/people';

import GuidePageLayout from '@/components/layout/pageLayout/GuidePageLayout';

export default async function PeoplePage() {
  const description = await getPeopleDescription();

  return <GuidePageLayout subtitle="Leading CSE" description={description} />;
}
