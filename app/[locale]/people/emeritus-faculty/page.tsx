import { SimpleEmeritusFaculty } from '@/apis/types/people';
import { getEmeritusFacultyList } from '@/apis/v2/professor/inactive';
import { PeopleCellProps } from '@/app/[locale]/people/components/PeopleCell';
import PeopleGrid from '@/app/[locale]/people/components/PeopleGrid';
import { CreateButton } from '@/components/common/Buttons';
import LoginVisible from '@/components/common/LoginVisible';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { emeritusFaculty, faculty } from '@/constants/segmentNode';
import { Language } from '@/types/language';
import { getMetadata } from '@/utils/metadata';
import { getPath } from '@/utils/page';

interface EmeritusFacultyPageProps {
  params: Promise<{ locale: Language }>;
}

export async function generateMetadata(props: EmeritusFacultyPageProps) {
  const params = await props.params;

  const { locale } = params;

  return await getMetadata({ locale, node: emeritusFaculty });
}

const emeritusFacultyPath = getPath(emeritusFaculty);
const facultyPath = getPath(faculty);

export default async function EmeritusFacultyPage(props0: EmeritusFacultyPageProps) {
  const params = await props0.params;

  const { locale } = params;

  const facultyList = await getEmeritusFacultyList(locale);
  const props = facultyList.map(facultyToProp);

  return (
    <PageLayout title="역대 교수진" titleType="big">
      <LoginVisible staff>
        <CreateButton href={`${facultyPath}/create?status=INACTIVE`} />
      </LoginVisible>
      <PeopleGrid contentList={props} />
    </PageLayout>
  );
}

const facultyToProp = (faculty: SimpleEmeritusFaculty): PeopleCellProps => {
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
