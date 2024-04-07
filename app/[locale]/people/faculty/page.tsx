import { getActiveFacultyList } from '@/apis/people';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { SimpleFaculty } from '@/types/people';

import { getPath } from '@/utils/page';
import { faculty, researchLabs } from '@/utils/segmentNode';

import { PeopleCellProps } from '../helper/PeopleCell';
import PeopleGrid from '../helper/PeopleGrid';

const facultyPath = getPath(faculty);
const labPath = getPath(researchLabs);

export default async function FacultyPage({ params }: { params: { locale: 'ko' | 'en' } }) {
  const { professors } = await getActiveFacultyList(params.locale);

  const normal = professors
    .filter((x) => x.academicRank !== '특임교수') // TODO: 백엔드 status값 반영 전 임시 코드
    .map(facultyToProp);

  const special = professors
    .filter((x) => x.academicRank === '특임교수') // TODO: 백엔드 status값 반영 전 임시 코드
    .map(facultyToProp);

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
