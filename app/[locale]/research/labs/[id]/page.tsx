import { getResearchLab } from '@/apis/v2/research/lab/[id]';
import ResearchLabDetailContent from '@/app/[locale]/research/labs/[id]/ResearchLabDetailContent';
import InvalidIDFallback from '@/components/common/InvalidIDFallback';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { Language } from '@/types/language';
import { getMetadata } from '@/utils/metadata';

export async function generateMetadata(props: LabDetailPageProps) {
  const params = await props.params;
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
  params: Promise<{ id: string; locale: Language }>;
}

export default async function ResearchLabDetail(props: LabDetailPageProps) {
  const params = await props.params;
  try {
    const data = await getResearchLab(parseInt(params.id));
    const lab = data[params.locale];

    return (
      <PageLayout title={lab.name} titleType="small">
        <ResearchLabDetailContent lab={lab} ids={{ ko: data.ko.id, en: data.en.id }} />
      </PageLayout>
    );
  } catch {
    return <InvalidIDFallback rawID={params.id} />;
  }
}
