import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { getActiveFacultyList } from '@/apis/people';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { SimpleFaculty } from '@/types/people';

import { getPath } from '@/utils/page';
import { faculty, researchLabs } from '@/utils/segmentNode';

import { PeopleCellProps } from '../helper/PeopleCell';
import PeopleGrid from '../helper/PeopleGrid';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Nav');

  return {
    title: t('교수진'),
    description: '서울대학교 컴퓨터공학부 교수진 페이지입니다.',
  };
}

const facultyPath = getPath(faculty);
const labPath = getPath(researchLabs);

export default async function FacultyPage({ params }: { params: { locale: 'ko' | 'en' } }) {
  const { professors } = await getActiveFacultyList(params.locale);

  const normal = professors.filter((x) => x.status !== 'VISITING').map(facultyToProp);
  const special = professors.filter((x) => x.status === 'VISITING').map(facultyToProp);

  return (
    <PageLayout title="교수진" titleType="big">
      <PeopleGrid contentList={normal} />

      <h3 className="mb-4 mt-12 text-[20px] font-bold">객원교수</h3>
      <PeopleGrid contentList={special} />
    </PageLayout>
  );
}

const facultyToProp = (faculty: SimpleFaculty): PeopleCellProps => {
  const content = [];

  if (faculty.labName && faculty.labId)
    content.push({
      text: faculty.labName ?? '-',
      href: `${labPath}/${faculty.labId}`,
    });

  if (faculty.phone) content.push({ text: faculty.phone });
  if (faculty.email) content.push({ text: faculty.email, href: `mailto:${faculty.email}` });

  return {
    imageURL: faculty.imageURL,
    title: faculty.name,
    subtitle: faculty.academicRank,
    titleNewline: true,
    href: `${facultyPath}/${faculty.id}`,
    content,
  };
};
