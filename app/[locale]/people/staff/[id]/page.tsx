import { getStaff } from '@/apis/people';

import InvalidIDFallback from '@/components/common/InvalidIDFallback';

import { getMetadata } from '@/utils/metadata';

import StaffMemberPageContent from './StaffMemberPageContent';

export async function generateMetadata({ params }: StaffMemberPageProps) {
  try {
    const id = parseInt(params.id);
    const { ko: staff } = await getStaff(id);

    return await getMetadata({
      locale: params.locale,
      metadata: {
        title: `${staff.name}`,
        description: `서울대학교 컴퓨터공학부 ${staff.name} 행정직원 페이지입니다.`,
        robots: { noimageindex: true },
      },
    });
  } catch {
    return {};
  }
}

interface StaffMemberPageProps {
  params: { id: string; locale: string };
}

export default async function StaffMemberPage({ params }: StaffMemberPageProps) {
  try {
    const id = parseInt(params.id);
    const data = await getStaff(id);

    return <StaffMemberPageContent staff={data.ko} ids={{ ko: data.ko.id, en: data.en.id }} />;
  } catch {
    return <InvalidIDFallback rawID={params.id} />;
  }
}
