export const dynamic = 'force-dynamic';

import { getStaffList } from '@/apis/people';

import PeopleCell from '@/app/[locale]/people/PeopleRow';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function StaffPage() {
  const staffList = await getStaffList();

  return (
    <PageLayout title="행정직원" titleType="big">
      <div className="grid grid-cols-[repeat(auto-fit,_144px)] gap-14">
        {staffList.map((staff, index) => (
          <PeopleCell
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
