import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { getEmeritusFacultyList } from '@/apis/people';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { SimpleEmiritusFaculty } from '@/types/people';

import { getPath } from '@/utils/page';
import { emeritusFaculty } from '@/utils/segmentNode';

import { PeopleCellProps } from '../helper/PeopleCell';
import PeopleGrid from '../helper/PeopleGrid';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Nav');

  return {
    title: t('역대 교수진'),
    description: '서울대학교 컴퓨터공학부 역대 교수진 페이지입니다.',
  };
}

const facultyPath = getPath(emeritusFaculty);

export default async function EmeritusFacultyPage() {
  const facultyList = await getEmeritusFacultyList();
  const props = facultyList.map(facultyToProp);

  return (
    <PageLayout title="역대 교수진" titleType="big">
      <PeopleGrid contentList={props} />
    </PageLayout>
  );
}

const facultyToProp = (faculty: SimpleEmiritusFaculty): PeopleCellProps => {
  const content = [];
  if (faculty.email) content.push({ text: faculty.email, href: `mailto:${faculty.email}` });

  return {
    imageURL: faculty.imageURL,
    title: faculty.name,
    subtitle: faculty.academicRank,
    titleNewline: false,
    href: `${facultyPath}/${faculty.id}`,
    content,
  };
};
