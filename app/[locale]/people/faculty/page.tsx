import { getActiveFacultyList } from '@/apis/people';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

import PeopleGrid from '../PeopleGrid';

export default async function FacultyPage() {
  const { professors } = await getActiveFacultyList();

  return (
    <PageLayout title="교수진" titleType="big">
      <PeopleGrid
        people={professors.filter((x) => x.academicRank !== '특임교수')} // TODO: 백엔드 status값 반영 전 임시 코드
        peopleType="FACULTY"
      />

      <h3 className="mb-4 mt-12 text-[20px] font-bold">객원교수</h3>
      <PeopleGrid
        people={professors.filter((x) => x.academicRank === '특임교수')} // TODO: 백엔드 status값 반영 전 임시 코드
        peopleType="FACULTY"
      />
    </PageLayout>
  );
}
