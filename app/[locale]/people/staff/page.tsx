export const dynamic = 'force-dynamic';

import { getStaffList } from '@/apis/people';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

import PeopleGrid from '../PeopleGrid';

export default async function StaffPage() {
  const staffList = await getStaffList();

  return (
    <PageLayout title="행정직원" titleType="big">
      <PeopleGrid people={staffList} peopleType="STAFF" />
    </PageLayout>
  );
}
