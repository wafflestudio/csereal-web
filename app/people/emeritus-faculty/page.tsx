import { getEmeritusFacultyList } from '@/apis/people';

import PageLayout from '@/components/layout/pageLayout/PageLayout';
import PeopleRow from '@/components/people/PeopleRow';

export default async function EmeritusFacultyPage() {
  const facultyList = await getEmeritusFacultyList();
  return (
    <PageLayout title="역대 교수진" titleType="big" titleMargin="mb-9">
      <div className="grid grid-cols-4 gap-14">
        {facultyList.map((emeritusFaculty, index) => (
          <PeopleRow
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
