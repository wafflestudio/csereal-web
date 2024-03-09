export const dynamic = 'force-dynamic';

import { getEmeritusFacultyList } from '@/apis/people';

import PeopleCell from '@/app/[locale]/people/PeopleRow';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function EmeritusFacultyPage() {
  const facultyList = await getEmeritusFacultyList();

  return (
    <PageLayout title="역대 교수진" titleType="big">
      <div className="grid grid-cols-[repeat(auto-fit,_144px)] gap-14">
        {facultyList.map((emeritusFaculty, index) => (
          <PeopleCell
            type="EMIRITUS_FACULTY"
            key={index}
            id={emeritusFaculty.id}
            name={emeritusFaculty.name}
            academicRank={emeritusFaculty.academicRank}
            email={emeritusFaculty.email}
            imageURL={emeritusFaculty.imageURL}
          />
        ))}
      </div>
    </PageLayout>
  );
}
