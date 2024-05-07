import { Metadata } from 'next';

import { getResearchLab } from '@/apis/research';

import ResearchLabDetailContent from '@/app/[locale]/research/labs/[id]/ResearchLabDetailContent';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const lab = await getData(parseInt(params.id));

  return {
    title: `${lab.name}`,
    description: `서울대학교 컴퓨터공학부 ${lab.name} 페이지입니다.`,
  };
}

interface LabDetailPageProps {
  params: { id: string };
}

export default async function ResearchLabDetail({ params }: LabDetailPageProps) {
  const lab = await getData(parseInt(params.id));

  return (
    <PageLayout title={lab.name} titleType="small">
      <ResearchLabDetailContent lab={lab} />
    </PageLayout>
  );
}

async function getData(id: number) {
  const lab = await getResearchLab(id);

  return lab;
}
