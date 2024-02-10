import { getAboutDescription } from '@/apis/about';

import GuidePageLayout from '@/components/layout/pageLayout/GuidePageLayout';

export default async function AboutPage() {
  const description = await getAboutDescription();

  return <GuidePageLayout subtitle="About CSE" description={description} />;
}
