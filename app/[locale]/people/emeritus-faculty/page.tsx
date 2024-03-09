export const dynamic = 'force-dynamic';

import { getEmeritusFacultyList } from '@/apis/people';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

import PeopleGrid from '../PeopleGrid';

export default async function EmeritusFacultyPage() {
  const facultyList = await getEmeritusFacultyList();

  return (
    <PageLayout title="역대 교수진" titleType="big">
      <PeopleGrid people={facultyList} peopleType="EMIRITUS_FACULTY" />
    </PageLayout>
  );
}
