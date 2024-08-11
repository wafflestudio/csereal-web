import { getEmeritusFacultyList } from '@/apis/people';
import LoginVisible from '@/components/common/LoginVisible';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { Language } from '@/types/language';
import { SimpleEmiritusFaculty } from '@/types/people';
import { getMetadata } from '@/utils/metadata';
import { getPath } from '@/utils/page';
import { emeritusFaculty, faculty } from '@/utils/segmentNode';

import { CreateButton } from '../helper/AdminButtons';
import { PeopleCellProps } from '../helper/PeopleCell';
import PeopleGrid from '../helper/PeopleGrid';

interface EmeritusFacultyPageProps {
  params: { locale: Language };
}

export async function generateMetadata({ params: { locale } }: EmeritusFacultyPageProps) {
  return await getMetadata({ locale, node: emeritusFaculty });
}

const emeritusFacultyPath = getPath(emeritusFaculty);
const facultyPath = getPath(faculty);

export default async function EmeritusFacultyPage({
  params: { locale },
}: EmeritusFacultyPageProps) {
  const facultyList = await getEmeritusFacultyList(locale);
  const props = facultyList.map(facultyToProp);

  return (
    <PageLayout title="역대 교수진" titleType="big">
      <LoginVisible staff>
        <CreateButton pathname={`${facultyPath}/create`} status="INACTIVE" />
      </LoginVisible>
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
    href: `${emeritusFacultyPath}/${faculty.id}`,
    content,
  };
};
