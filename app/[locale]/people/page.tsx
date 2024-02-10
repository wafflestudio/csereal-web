import { getPeopleDescription } from '@/apis/people';

import MajorCategoryPageLayout from '@/components/layout/pageLayout/MajorCategoryPageLayout';

export default async function PeoplePage() {
  const description = await getPeopleDescription();

  return <MajorCategoryPageLayout subtitle="Leading CSE" description={description} />;
}
