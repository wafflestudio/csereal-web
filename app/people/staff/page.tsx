'use client';
import useSWR from 'swr';

import { useLanguage } from '@/contexts/LanguageContext';

import { getStaffList, getStaffListEng } from '@/apis/people';

import PageLayout from '@/components/layout/pageLayout/PageLayout';
import PeopleRow from '@/components/people/PeopleRow';

export default function StaffPage() {
  const { isEnglish } = useLanguage();
  const url = isEnglish ? '/eng/people/faculty' : '/people/faculty';
  const fetchFunction = isEnglish ? getStaffListEng : getStaffList;
  const { data } = useSWR(url, fetchFunction);

  return (
    data && (
      <PageLayout titleType="big" titleMargin="mb-9">
        <div className="grid grid-cols-4 gap-14 mb-10">
          {data.staffList.map((staff, index) => (
            <PeopleRow
              type="STAFF"
              key={index}
              id={staff.id}
              name={staff.name}
              role={staff.role}
              office={staff.office}
              email={staff.email}
              phone={staff.phone}
              imageURL={staff.imageURL}
            />
          ))}
        </div>
      </PageLayout>
    )
  );
}
