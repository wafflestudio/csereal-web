import { getResearchDescription } from '@/apis/research';

import GuidePageLayout from '@/components/layout/pageLayout/GuidePageLayout';

export default async function ResearchPage() {
  const description = await getResearchDescription();

  return <GuidePageLayout subtitle="Research CSE" description={description} />;
}
