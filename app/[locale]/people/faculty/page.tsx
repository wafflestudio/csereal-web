import { getActiveFacultyList } from '@/apis/people';

import PeopleCell from '@/app/[locale]/people/PeopleRow';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function FacultyPage() {
  const { professors } = await getActiveFacultyList();

  return (
    <PageLayout title="교수진" titleType="big">
      <div className="grid grid-cols-[repeat(auto-fit,_144px)] gap-14">
        {professors
          .filter((x) => x.academicRank !== '특임교수') // TODO: 백엔드 status값 반영 전 임시 코드
          .map((faculty, index) => (
            <PeopleCell
              key={index}
              type="FACULTY"
              id={faculty.id}
              name={faculty.name}
              academicRank={faculty.academicRank}
              labId={faculty.labId}
              labName={faculty.labName}
              email={faculty.email}
              phone={faculty.phone}
              imageURL={faculty.imageURL}
            />
          ))}
      </div>

      <h3 className="mt-12 text-[20px] font-bold">객원교수</h3>
      <div className="mt-4 grid grid-cols-4 gap-14">
        {professors
          .filter((x) => x.academicRank === '특임교수') // TODO: 백엔드 status값 반영 전 임시 코드
          .map((faculty, index) => (
            <PeopleCell
              key={index}
              type="FACULTY"
              id={faculty.id}
              name={faculty.name}
              academicRank={faculty.academicRank}
              labId={faculty.labId}
              labName={faculty.labName}
              email={faculty.email}
              phone={faculty.phone}
              imageURL={faculty.imageURL}
            />
          ))}
      </div>
    </PageLayout>
  );
}
