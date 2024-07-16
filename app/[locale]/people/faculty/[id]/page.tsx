import { notFound } from 'next/navigation';

import { getFaculty } from '@/apis/people';

import { Locale } from '@/types/locale';

import { getMetadata } from '@/utils/metadata';

import FacultyMemberPageContent from './FacultyMemberPageContent';

export async function generateMetadata({ params: { locale, id } }: FacultyMemberPageProps) {
  const faculty = await getFaculty(id);

  return await getMetadata({
    locale,
    metadata: {
      title: `${faculty.name}`,
      description: `서울대학교 컴퓨터공학부 ${faculty.name} 교수 페이지입니다.`,
    },
  });
}

interface FacultyMemberPageProps {
  params: { id: number; locale: Locale };
}

export default async function FacultyMemberPage({ params }: FacultyMemberPageProps) {
  const faculty = await getFaculty(params.id);
  if (faculty.status !== 'ACTIVE') notFound();

  return <FacultyMemberPageContent faculty={faculty} />;
}
