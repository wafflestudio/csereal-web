import { notFound } from 'next/navigation';

import { getFaculty } from '@/apis/people';

import InvalidIDFallback from '@/components/common/InvalidIDFallback';

import { Language } from '@/types/language';

import { getMetadata } from '@/utils/metadata';

import FacultyMemberPageContent from './FacultyMemberPageContent';

export async function generateMetadata({ params }: FacultyMemberPageProps) {
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
  params: { id: string; locale: Language };
}

export default async function FacultyMemberPage({ params }: FacultyMemberPageProps) {
  try {
    const id = parseInt(params.id);
    // TODO: 영어까지 적절히 변경
    const { ko: faculty } = await getFaculty(id);

    if (faculty.status !== 'ACTIVE') notFound();

    return <FacultyMemberPageContent faculty={faculty} />;
  } catch {
    return <InvalidIDFallback rawID={params.id} />;
  }
}
