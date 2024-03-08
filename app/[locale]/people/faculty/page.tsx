export const dynamic = 'force-dynamic';

import { getFacultyList } from '@/apis/people';

import PeopleRow from '@/app/[locale]/people/PeopleRow';

import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function FacultyPage() {
  const { description, facultyList } = await getFacultyList();
  return (
    <PageLayout title="교수진" titleType="big">
      <div className="flex flex-col">
        {description ? (
          <div>
            <HTMLViewer htmlContent={description} />
          </div>
        ) : null}
        <div className="mt-12 grid grid-cols-4 gap-14">
          {facultyList
            .filter((faculty) => faculty.status === 'ACTIVE')
            .map((faculty, index) => (
              <PeopleRow
                type="FACULTY"
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
        <div className="mt-20">
          <h3 className="font-noto mb-11 text-[20px] font-bold">객원교수</h3>
          {facultyList
            .filter((faculty) => faculty.status === 'VISITING')
            .map((faculty, index) => (
              <PeopleRow
                type="FACULTY"
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
