import { SimpleFaculty } from '@/apis/types/people';
import { getActiveFacultyList } from '@/apis/v2/professor/active';
import { PeopleCellProps } from '@/app/[locale]/people/components/PeopleCell';
import PeopleGrid from '@/app/[locale]/people/components/PeopleGrid';
import { CreateButton } from '@/components/common/Buttons';
import LoginVisible from '@/components/common/LoginVisible';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { faculty, researchLabs } from '@/constants/segmentNode';
import { Language } from '@/types/language';
import { getMetadata } from '@/utils/metadata';
import { getPath } from '@/utils/page';

export async function generateMetadata(props: FacultyPageProps) {
  const params = await props.params;

  const { locale } = params;

  return await getMetadata({ locale, node: faculty });
}

const facultyPath = getPath(faculty);
const labPath = getPath(researchLabs);

interface FacultyPageProps {
  params: Promise<{ locale: Language }>;
}

export default async function FacultyPage(props: FacultyPageProps) {
  const params = await props.params;
  const { professors } = await getActiveFacultyList(params.locale);

  const normal = professors.filter((x) => x.status !== 'VISITING').map(facultyToProp);
  const special = professors.filter((x) => x.status === 'VISITING').map(facultyToProp);

  return (
    <PageLayout title="교수진" titleType="big">
      <LoginVisible staff>
        <CreateButton href={`${facultyPath}/create?status=ACTIVE`} />
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
