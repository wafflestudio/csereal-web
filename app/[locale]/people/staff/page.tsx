import { getStaffList } from '@/apis/people';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { getPath } from '@/utils/page';
import { faculty } from '@/utils/segmentNode';

import { PeopleCellProps } from '../helper/PeopleCell';
import PeopleGrid from '../helper/PeopleGrid';

const facultyPath = getPath(faculty);

export default async function StaffPage() {
  const staffList = await getStaffList();

  const contentList: PeopleCellProps[] = staffList.map((staff) => ({
    imageURL: staff.imageURL,
    title: staff.name,
    subtitle: staff.role,
    titleNewline: true,
    href: `${facultyPath}/${staff.id}`,
    content: [
      { text: staff.office },
      { text: staff.phone },
      { text: staff.email, href: `mailto:${staff.email}` },
    ],
  }));

  return (
    <PageLayout title="행정직원" titleType="big">
      <PeopleGrid contentList={contentList} />
    </PageLayout>
  );
}
