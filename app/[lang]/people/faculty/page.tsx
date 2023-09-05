import { getDictionary } from '@/dictionaries/get-dictionaries';
import { Locale } from '@/i18n-config';

import { getFacultyList, getFacultyListEng } from '@/apis/people';

import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import PeopleRow from '@/components/people/PeopleRow';

export default async function FacultyPage({ params: { lang } }: { params: { lang: Locale } }) {
  const { description, facultyList } =
    lang === 'ko' ? await getFacultyList() : await getFacultyListEng();

  const dictionary = await getDictionary(lang);

  return (
    <PageLayout titleType="big" titleMargin="mb-9">
      <div className="flex flex-col">
        {description ? (
          <div>
            <HTMLViewer htmlContent={description} />
          </div>
        ) : null}
        <div className="grid grid-cols-4 gap-14 mt-12">
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
          <h3 className="font-noto font-bold text-[20px] mb-11">
            {dictionary.People.Faculty.visitingFaculty}
          </h3>
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
