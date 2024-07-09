import { getEmeritusFacultyList } from '@/apis/people';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { SimpleEmiritusFaculty } from '@/types/people';

import { getMetadata } from '@/utils/metadata';
import { getPath } from '@/utils/page';
import { emeritusFaculty } from '@/utils/segmentNode';

import { PeopleCellProps } from '../helper/PeopleCell';
import PeopleGrid from '../helper/PeopleGrid';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return await getMetadata({ locale, node: emeritusFaculty });
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
    href: `${facultyPath}/${faculty.id}`,
    content,
  };
};
