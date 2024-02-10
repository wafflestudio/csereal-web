import { getAboutDescription } from '@/apis/about';

import MajorCategoryPageLayout from '@/components/layout/pageLayout/MajorCategoryPageLayout';

export default async function AboutPage() {
  const description = await getAboutDescription();

  return <MajorCategoryPageLayout subtitle="About CSE" description={description} />;
}
