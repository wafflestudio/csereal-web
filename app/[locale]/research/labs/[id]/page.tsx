import { getResearchLab } from '@/apis/research';
import InvalidIDFallback from '@/components/common/InvalidIDFallback';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { Language } from '@/types/language';
import { getMetadata } from '@/utils/metadata';

import ResearchLabDetailContent from './ResearchLabDetailContent';

export async function generateMetadata({ params }: LabDetailPageProps) {
  try {
    const id = parseInt(params.id);
    const { [params.locale]: lab } = await getResearchLab(id);

    return await getMetadata({
      locale: params.locale,
      metadata: {
        title: lab.name,
        description: `서울대학교 컴퓨터공학부 ${lab.name} 페이지입니다.`,
      },
    });
  } catch {
    return {};
  }
}

interface LabDetailPageProps {
  params: { id: string; locale: Language };
}

export default async function ResearchLabDetail({ params }: LabDetailPageProps) {
  try {
    const data = await getResearchLab(parseInt(params.id));
    const lab = data[params.locale];

    return (
      <PageLayout title={lab.name} titleType="small">
        <ResearchLabDetailContent lab={lab} />
      </PageLayout>
    );
  } catch {
    return <InvalidIDFallback rawID={params.id} />;
  }
}
