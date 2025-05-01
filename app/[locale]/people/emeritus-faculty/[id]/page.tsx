import { getEmeritusFaculty } from '@/apis/v2/professor/[id]';
import EmeritusFacultyMemberPageContent from '@/app/[locale]/people/emeritus-faculty/[id]/EmeritusFacultyMemberPageContent';
import InvalidIDFallback from '@/components/common/InvalidIDFallback';
import { Language } from '@/types/language';
import { getMetadata } from '@/utils/metadata';

export async function generateMetadata(props: EmeritusFacultyMemberPageProps) {
  const params = await props.params;
  try {
    const id = parseInt(params.id);
    const { [params.locale]: faculty } = await getEmeritusFaculty(id);

    return await getMetadata({
      locale: params.locale,
      metadata: {
        title: `${faculty.name}`,
        description: `서울대학교 컴퓨터공학부 ${faculty.name} 교수 페이지입니다.`,
      },
    });
  } catch {
    return {};
  }
}

interface EmeritusFacultyMemberPageProps {
  params: Promise<{ id: string; locale: Language }>;
}

export default async function EmeritusFacultyMemberPage(props: EmeritusFacultyMemberPageProps) {
  const params = await props.params;
  try {
    const id = parseInt(params.id);
    const data = await getEmeritusFaculty(id);

    return (
      <EmeritusFacultyMemberPageContent
        faculty={data[params.locale]}
        ids={{ ko: data.ko.id, en: data.en.id }}
      />
    );
  } catch {
    return <InvalidIDFallback rawID={params.id} />;
  }
}
