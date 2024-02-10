import { getResearchDescription } from '@/apis/research';

import MajorCategoryPageLayout from '@/components/layout/pageLayout/MajorCategoryPageLayout';

export default async function ResearchPage() {
  const description = await getResearchDescription();

  return <MajorCategoryPageLayout subtitle="Research CSE" description={description} />;
}
