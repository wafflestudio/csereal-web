import { Link } from '@/navigation';

import { getStaff } from '@/apis/people';

import HeaderAndList from '@/app/[locale]/people/helper/HeaderAndList';
import ProfileImage from '@/app/[locale]/people/helper/ProfileImage';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

import BulletRow from '../../helper/BulletRow';
import PageTitle from '../../helper/PageTitle';

export default async function StaffMemberPage({ params }: { params: { id: number } }) {
  const staff = await getStaff(params.id);

  return (
    <PageLayout
      title={<PageTitle name={staff.name} academicRank={staff.role} />}
      titleType="big"
      titleMargin="mb-9"
    >
      <div className="relative mb-32 flow-root">
        <ProfileImage imageURL={staff.imageURL} />
        <div className="break-all">
          <article className="mb-7 flex flex-col text-neutral-700">
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
