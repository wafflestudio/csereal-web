'use client';
import useSWR from 'swr';

import { useLanguage } from '@/contexts/LanguageContext';

import { getFacultyList, getFacultyListEng } from '@/apis/people';

import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import PeopleRow from '@/components/people/PeopleRow';

export default function FacultyPage() {
  const { isEnglish } = useLanguage();
  const url = isEnglish ? '/eng/people/faculty' : '/people/faculty';
  const fetchFunction = isEnglish ? getFacultyListEng : getFacultyList;
  const { data } = useSWR(url, fetchFunction);

  return (
    data && (
      <PageLayout titleType="big" titleMargin="mb-9">
        <div className="flex flex-col">
          {data.description ? (
            <div>
              <HTMLViewer htmlContent={data.description} />
            </div>
          ) : null}
          <div className="grid grid-cols-4 gap-14 mt-12">
            {data.facultyList
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
            <h3 className="font-noto font-bold text-[20px] mb-11">객원교수</h3>
            {data.facultyList
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
    )
  );
}
