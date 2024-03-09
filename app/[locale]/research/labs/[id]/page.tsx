import { getResearchLab } from '@/apis/research';

import ResearchLabDetails from '@/app/[locale]/research/labs/ResearchLabDetails';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

interface LabDetailPageProps {
  params: { id: string };
}

export default async function ResearchLabDetailPage({ params }: LabDetailPageProps) {
  const lab = await getResearchLab(parseInt(params.id));

  return (
    <PageLayout title={lab.name} titleType="small" titleMargin="mb-9">
      <ResearchLabDetails lab={lab} />
    </PageLayout>
  );
}
