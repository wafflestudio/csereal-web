export const dynamic = 'force-dynamic';

import { getStaffList } from '@/apis/people';

import PeopleRow from '@/app/[locale]/people/PeopleRow';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function StaffPage() {
  const { staffList } = await getStaffList();
  return (
    <PageLayout title="행정직원" titleType="big" titleMargin="mb-9">
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
