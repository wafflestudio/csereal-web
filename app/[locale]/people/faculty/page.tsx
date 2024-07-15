import { getActiveFacultyList } from '@/apis/people';

import LoginVisible from '@/components/common/LoginVisible';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { Locale } from '@/types/locale';
import { SimpleFaculty } from '@/types/people';

import { getMetadata } from '@/utils/metadata';
import { getPath } from '@/utils/page';
import { faculty, researchLabs } from '@/utils/segmentNode';

import CreateButton from '../helper/CreateButton';
import { PeopleCellProps } from '../helper/PeopleCell';
import PeopleGrid from '../helper/PeopleGrid';

export async function generateMetadata({ params: { locale } }: FacultyPageProps) {
  return await getMetadata({ locale, node: faculty });
}

const facultyPath = getPath(faculty);
const labPath = getPath(researchLabs);

interface FacultyPageProps {
  params: { locale: Locale };
}

export default async function FacultyPage({ params }: FacultyPageProps) {
  const { professors } = await getActiveFacultyList(params.locale);

  const normal = professors.filter((x) => x.status !== 'VISITING').map(facultyToProp);
  const special = professors.filter((x) => x.status === 'VISITING').map(facultyToProp);

  return (
    <PageLayout title="교수진" titleType="big">
      <LoginVisible staff>
        <CreateButton pathname={`${facultyPath}/create`} status="ACTIVE" />
      </LoginVisible>
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
    href: `${facultyPath}/${faculty.id}`,
    content,
  };
};
