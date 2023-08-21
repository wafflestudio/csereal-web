import { getMockEmeritusFacultyList } from '@/apis/faculty';

import PageLayout from '@/components/layout/pageLayout/PageLayout';
import PeopleRow from '@/components/people/PeopleRow';

export default async function EmeritusFacultyPage() {
  const { facultyList } = await getMockEmeritusFacultyList();
  return (
    <PageLayout title="역대 교수진" titleType="big">
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
