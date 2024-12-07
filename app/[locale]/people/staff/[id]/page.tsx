import { getStaff } from '@/apis/v2/staff/[id]';
import InvalidIDFallback from '@/components/common/InvalidIDFallback';
import { Language } from '@/types/language';
import { getMetadata } from '@/utils/metadata';

import StaffMemberPageContent from './StaffMemberPageContent';

export async function generateMetadata(props: StaffMemberPageProps) {
  const params = await props.params;
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
  params: Promise<{ id: string; locale: Language }>;
}

export default async function StaffMemberPage(props: StaffMemberPageProps) {
  const params = await props.params;
  try {
    const id = parseInt(params.id);
    const data = await getStaff(id);
    console.log(data);

    return (
      <StaffMemberPageContent
        staff={data[params.locale]}
        ids={{ ko: data.ko.id, en: data.en.id }}
      />
    );
  } catch {
    return <InvalidIDFallback rawID={params.id} />;
  }
}
