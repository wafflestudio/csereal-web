import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { getStaffList } from '@/apis/people';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { getPath } from '@/utils/page';
import { staff } from '@/utils/segmentNode';

import { PeopleCellProps } from '../helper/PeopleCell';
import PeopleGrid from '../helper/PeopleGrid';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Nav');

  return {
    title: t('행정직원'),
    description: '서울대학교 컴퓨터공학부 행정직원 페이지입니다.',
  };
}

const staffPath = getPath(staff);

export default async function StaffPage() {
  const staffList = await getStaffList();

  const contentList: PeopleCellProps[] = staffList.map((staff) => ({
    imageURL: staff.imageURL,
    title: staff.name,
    subtitle: staff.role,
    titleNewline: true,
    href: `${staffPath}/${staff.id}`,
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
