import { getMockStaffList } from '@/apis/staff';

import PageLayout from '@/components/layout/PageLayout';
import PeopleRow from '@/components/people/PeopleRow';

import { staff } from '@/types/page';

export default async function StaffPage() {
  const { staffList } = await getStaffData();
  return (
    <PageLayout currentPage={staff} title="행정직원" titleSize="text-2xl">
      <div className="grid grid-cols-4 gap-14">
        {staffList.map((staff, index) => (
          <PeopleRow
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

async function getStaffData() {
  const posts = getMockStaffList();
  return posts;
}
