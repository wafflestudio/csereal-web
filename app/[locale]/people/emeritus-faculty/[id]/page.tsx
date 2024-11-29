import { getEmeritusFaculty } from '@/apis/v2/professor/[id]';
import InvalidIDFallback from '@/components/common/InvalidIDFallback';
import { Language } from '@/types/language';
import { getMetadata } from '@/utils/metadata';

import EmeritusFacultyMemberPageContent from './EmeritusFacultyMemberPageContent';

export async function generateMetadata({ params }: EmeritusFacultyMemberPageProps) {
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
  params: { id: string; locale: Language };
}

export default async function EmeritusFacultyMemberPage({
  params,
}: EmeritusFacultyMemberPageProps) {
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
