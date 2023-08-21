import { getResearchLab } from '@/apis/research';

import PageLayout from '@/components/layout/pageLayout/PageLayout';
import ResearchLabDetails from '@/components/research/labs/ResearchLabDetails';

import { replaceDashWithSpace } from '@/utils/replaceCharacter';

interface LabDetailPageProps {
  params: { name: string };
}

export default async function ResearchLabDetailPage({ params }: LabDetailPageProps) {
  const lab = await getResearchLab(replaceDashWithSpace(decodeURI(params.name)));

  return (
    <PageLayout title={lab.name} titleType="small" titleMargin="mb-9">
      <ResearchLabDetails lab={lab} />
    </PageLayout>
  );
}
