import { getStaffList } from '@/apis/v2/staff';
import { PeopleCellProps } from '@/app/[locale]/people/components/PeopleCell';
import PeopleGrid from '@/app/[locale]/people/components/PeopleGrid';
import { CreateButton } from '@/components/common/Buttons';
import LoginVisible from '@/components/common/LoginVisible';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import { staff } from '@/constants/segmentNode';
import { Language } from '@/types/language';
import { getMetadata } from '@/utils/metadata';
import { getPath } from '@/utils/page';

interface StaffPageProps {
  params: Promise<{ locale: Language }>;
}

export async function generateMetadata(props: StaffPageProps) {
  const params = await props.params;

  const { locale } = params;

  return await getMetadata({
    locale,
    node: staff,
    metadata: { robots: { noimageindex: true } },
  });
}

const staffPath = getPath(staff);

export default async function StaffPage(props: StaffPageProps) {
  const params = await props.params;

  const { locale } = params;

  const staffList = await getStaffList(locale);

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
      <LoginVisible staff>
        <CreateButton href={`${staffPath}/create`} />
      </LoginVisible>
      <PeopleGrid contentList={contentList} />
    </PageLayout>
  );
}
