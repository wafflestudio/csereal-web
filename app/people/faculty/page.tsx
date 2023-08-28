import { getFacultyList } from '@/apis/people';

import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import PeopleRow from '@/components/people/PeopleRow';

export default async function FacultyPage() {
  const { description, facultyList } = await getFacultyList();
  return (
    <PageLayout title="교수진" titleType="big" titleMargin="mb-9">
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
