import { Metadata } from 'next';

import { Link } from '@/navigation';

import { getStaff } from '@/apis/people';

import HeaderAndList from '@/app/[locale]/people/helper/HeaderAndList';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

import BulletRow from '../../helper/BulletRow';
import PageTitle from '../../helper/PageTitle';
import ProfileImage from '../../helper/ProfileImage';

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const staff = await getData(parseInt(params.id));

  return {
    title: `${staff.name}`,
    description: `서울대학교 컴퓨터공학부 ${staff.name} 행정직원 페이지입니다.`,
  };
}

export default async function StaffMemberPage({ params }: { params: { id: number } }) {
  const staff = await getData(params.id);

  return (
    <PageLayout
      title={<PageTitle name={staff.name} academicRank={staff.role} />}
      titleType="big"
      titleMargin="mb-9"
    >
      <div className="relative mb-32 flex flex-col items-start sm:flex-row sm:gap-[3.75rem]">
        <ProfileImage imageURL={staff.imageURL} />
        <div className="mt-6 sm:mt-0">
          <article className="mb-6 flex flex-col text-neutral-700">
            <h3 className=" text-base font-bold leading-8">연락처 정보</h3>
            <ul className="list-inside list-disc">
              <BulletRow>위치: {staff.office}</BulletRow>
              <BulletRow>전화: {staff.phone}</BulletRow>
              <BulletRow>
                이메일:
                <Link className="ml-1 text-link hover:underline" href={`mailto:${staff.email}`}>
                  {staff.email}
                </Link>
              </BulletRow>
            </ul>
          </article>
          <HeaderAndList header="주요 업무" list={staff.tasks} />
        </div>
      </div>
    </PageLayout>
  );
}

async function getData(id: number) {
  const staff = await getStaff(id);

  return staff;
}
