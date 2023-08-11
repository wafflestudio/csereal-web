import { getMockEmeritusFacultyList } from '@/apis/faculty';

import PageLayout from '@/components/layout/PageLayout';
import PeopleRow from '@/components/people/PeopleRow';

import { emeritusFaculty } from '@/types/page';

export default async function EmeritusFacultyPage() {
  const { facultyList } = await getEmeritusFacultyData();
  return (
    <PageLayout currentPage={emeritusFaculty} title="역대 교수진" titleSize="text-2xl">
      <div className="grid grid-cols-4 gap-14">
        {facultyList.map((emeritusFaculty, index) => (
          <PeopleRow
            key={index}
            id={emeritusFaculty.id}
            name={emeritusFaculty.name}
            academicRank={emeritusFaculty.academicRank}
            labId={emeritusFaculty.labId}
            labName={emeritusFaculty.labName}
            email={emeritusFaculty.email}
            phone={emeritusFaculty.phone}
            imageURL={emeritusFaculty.imageURL}
          />
        ))}
      </div>
    </PageLayout>
  );
}

async function getEmeritusFacultyData() {
  const posts = getMockEmeritusFacultyList();
  return posts;
}
