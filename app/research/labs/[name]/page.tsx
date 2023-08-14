import { getResearchLab, getResearchLabMock } from '@/apis/research';

import PageLayout from '@/components/layout/PageLayout';
import ResearchLabDetails from '@/components/research/ResearchLabDetails';

interface LabDetailPageProps {
  params: { name: string };
}

export default async function ResearchLabDetailPage({ params }: LabDetailPageProps) {
  // const lab = await getResearchLab(decodeURI(params.name));
  const lab = await getResearchLabMock(decodeURI(params.name));

  return (
    <PageLayout title={lab.name} titleSize="text-lg" titleWeight="font-medium">
      <ResearchLabDetails lab={lab} />
    </PageLayout>
  );
}
