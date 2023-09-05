import { Locale } from '@/i18n-config';

import { getStaffList, getStaffListEng } from '@/apis/people';

import PageLayout from '@/components/layout/pageLayout/PageLayout';
import PeopleRow from '@/components/people/PeopleRow';

export default async function StaffPage({ params: { lang } }: { params: { lang: Locale } }) {
  const { staffList } = lang === 'ko' ? await getStaffList() : await getStaffListEng();
  return (
    <PageLayout titleType="big" titleMargin="mb-9">
      <div className="grid grid-cols-4 gap-14 mb-10">
        {staffList.map((staff, index) => (
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
  );
}
