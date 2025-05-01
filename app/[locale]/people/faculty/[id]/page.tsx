import { notFound } from 'next/navigation';

import { getFaculty } from '@/apis/v2/professor/[id]';
import FacultyMemberPageContent from '@/app/[locale]/people/faculty/[id]/FacultyMemberPageContent';
import InvalidIDFallback from '@/components/common/InvalidIDFallback';
import { Language } from '@/types/language';
import { getMetadata } from '@/utils/metadata';

export async function generateMetadata(props: FacultyMemberPageProps) {
  const params = await props.params;
  try {
    const id = parseInt(params.id);
    const { [params.locale]: faculty } = await getFaculty(id);

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

interface FacultyMemberPageProps {
  params: Promise<{ id: string; locale: Language }>;
}

export default async function FacultyMemberPage(props: FacultyMemberPageProps) {
  const params = await props.params;
  try {
    const id = parseInt(params.id);
    const data = await getFaculty(id);
    const faculty = data[params.locale];

    if (faculty.status !== 'ACTIVE' && faculty.status !== 'VISITING') notFound();

    return <FacultyMemberPageContent faculty={faculty} ids={{ ko: data.ko.id, en: data.en.id }} />;
  } catch {
    return <InvalidIDFallback rawID={params.id} />;
  }
}
