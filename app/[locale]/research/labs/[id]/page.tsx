import { getResearchLab } from '@/apis/research';

import ResearchLabDetailContent from '@/app/[locale]/research/labs/[id]/ResearchLabDetailContent';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

interface LabDetailPageProps {
  params: { id: string };
}

export default async function ResearchLabDetail({ params }: LabDetailPageProps) {
  const lab = await getResearchLab(parseInt(params.id));

  return (
    <PageLayout title={lab.name} titleType="small">
      <ResearchLabDetailContent lab={lab} />
    </PageLayout>
  );
}
