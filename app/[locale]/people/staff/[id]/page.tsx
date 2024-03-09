import { Link } from '@/navigation';

import { getStaff } from '@/apis/people';

import PeopleImageWithAnimation from '@/app/[locale]/people/helper/PeopleImageWithAnimation';
import PeopleInfoList from '@/app/[locale]/people/helper/PeopleInfoList';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function StaffMemberPage({ params }: { params: { id: number } }) {
  const data = await getStaff(params.id);

  return (
    data && (
      <PageLayout
        title={
          <div className="flex flex-row items-end">
            <p>{data.name}</p>
            <p className="ml-2 text-md font-normal leading-7 text-neutral-500">{data.role}</p>
          </div>
        }
        titleType="big"
        titleMargin="mb-9"
      >
        <div className="relative mb-32 flow-root">
          <PeopleImageWithAnimation imageURL={data.imageURL} />
          <div className="break-all">
            <article className="mb-7 flex flex-col text-neutral-700">
              <h3 className=" text-base font-bold leading-8">주요 업무</h3>
              <ul className="list-inside list-disc">
                {data.office && (
                  <li className="mr-[1px] flex items-center space-x-2 px-2 text-sm font-normal leading-[26px]">
                    <div className="h-[3px] w-[3px] rounded-full bg-neutral-950"></div>
                    <p>위치: {data.office}</p>
                  </li>
                )}
                {data.phone && (
                  <li className="mr-[1px] flex items-center space-x-2 px-2 text-sm font-normal leading-[26px]">
                    <div className="h-[3px] w-[3px] rounded-full bg-neutral-950"></div>
                    <p>전화: {data.phone}</p>
                  </li>
                )}
                {data.email && (
                  <li className="mr-[1px] flex items-center space-x-2 px-2 text-sm font-normal leading-[26px]">
                    <div className="h-[3px] w-[3px] rounded-full bg-neutral-950"></div>
                    <p>
                      이메일:
                      <Link
                        className="ml-1 text-link hover:underline"
                        href={`mailto:${data.email}`}
                      >
                        {data.email}
                      </Link>
                    </p>
                  </li>
                )}
              </ul>
            </article>
            <PeopleInfoList title="학력" infoList={data.tasks} />
          </div>
        </div>
      </PageLayout>
    )
  );
}
