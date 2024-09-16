import { getResearchLab } from '@/apis/research';
import ResearchLabDetailContent from '@/app/[locale]/research/labs/[id]/ResearchLabDetailContent';
import InvalidIDFallback from '@/components/common/InvalidIDFallback';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { getMetadata } from '@/utils/metadata';

export async function generateMetadata({ params: { locale, id } }: LabDetailPageProps) {
  try {
    const lab = await getResearchLab(parseInt(id));

    return await getMetadata({
      locale,
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
  params: { id: string; locale: string };
}

export default async function ResearchLabDetail({ params }: LabDetailPageProps) {
  try {
    const lab = await getResearchLab(parseInt(params.id));

    return (
      <PageLayout title={lab.name} titleType="small">
        {/* TODO: id 제대로 넣기 */}
        <ResearchLabDetailContent lab={lab} ids={{ ko: 0, en: 0 }} />
      </PageLayout>
    );
  } catch {
    return <InvalidIDFallback rawID={params.id} />;
  }
}
