'use client';
import useSWR from 'swr';

import { useLanguage } from '@/contexts/LanguageContext';

import { getEmeritusFacultyList, getEmeritusFacultyListEng } from '@/apis/people';

import PageLayout from '@/components/layout/pageLayout/PageLayout';
import PeopleRow from '@/components/people/PeopleRow';

export default function EmeritusFacultyPage() {
  const { isEnglish } = useLanguage();
  const url = isEnglish ? '/eng/people/faculty' : '/people/faculty';
  const fetchFunction = isEnglish ? getEmeritusFacultyListEng : getEmeritusFacultyList;
  const { data } = useSWR(url, fetchFunction);

  return (
    data && (
      <PageLayout titleType="big" titleMargin="mb-9">
        <div className="grid grid-cols-4 gap-14">
          {data.map((emeritusFaculty, index) => (
            <PeopleRow
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
    )
  );
}
