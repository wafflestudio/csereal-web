import { getMockFacultyList } from '@/apis/faculty';

import HTMLViewer from '@/components/common/HTMLViewer';
import PageLayout from '@/components/layout/PageLayout';
import PeopleRow from '@/components/people/PeopleRow';

import { faculty } from '@/types/page';

export default async function FacultyPage() {
  const { description, facultyList } = await getFacultyData();
  return (
    <PageLayout currentPage={faculty} title="교수진" titleSize="text-2xl">
      <div className="flex flex-col">
        {description ? (
          <div>
            <HTMLViewer htmlContent={description} />
          </div>
        ) : null}
        <div className="grid grid-cols-4 gap-14 mt-12">
          {facultyList.map((faculty, index) => (
            <PeopleRow
              key={index}
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
      </div>
    </PageLayout>
  );
}

async function getFacultyData() {
  const posts = getMockFacultyList();
  return posts;
}
