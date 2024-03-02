import { Link } from '@/navigation';

import { getEmeritusFaculty } from '@/apis/people';

import PeopleImageWithAnimation from '@/app/[locale]/people/PeopleImageWithAnimation';
import PeopleInfoList from '@/app/[locale]/people/PeopleInfoList';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function EmeritusFacultyMemberPage({ params }: { params: { id: number } }) {
  const data = await getEmeritusFaculty(params.id);

  //   const startTime = `${data.startDate.getFullYear()}년 ${data.startDate.getMonth() + 1}월`;
  //   const endTime = `${data.endDate.getFullYear()}년 ${data.endDate.getMonth() + 1}월`;
  //   const careerTime = { startTime, endTime };
  const careerTime = { startTime: data.startDate, endTime: data.endDate };

  return (
    data && (
      <PageLayout
        title={
          <div className="flex flex-row items-end">
            <p>{data.name}</p>
            <p className="text-neutral-500 text-md font-normal ml-2 leading-7">
              {data.academicRank}
            </p>
          </div>
        }
        titleType="big"
        titleMargin="mb-9"
      >
        <div className="flow-root relative mb-10">
          <PeopleImageWithAnimation imageURL={data.imageURL} />
          <div className="break-all">
            {(data.office || data.email || data.website) && (
              <article className="text-neutral-700 flex flex-col mb-7">
                <>
                  <h3 className="font-noto text-base font-bold leading-8">연락처 정보</h3>
                  <ul className="list-inside list-disc">
                    {data.office && (
                      <li className="flex items-center space-x-2 px-2 text-sm font-normal leading-[26px] mr-[1px]">
                        <div className="w-[3px] h-[3px] bg-neutral-950 rounded-full"></div>
                        <p>교수실: {data.office}</p>
                      </li>
                    )}
                    {data.email && (
                      <li className="flex items-center space-x-2 px-2 text-sm font-normal leading-[26px] mr-[1px]">
                        <div className="w-[3px] h-[3px] bg-neutral-950 rounded-full"></div>
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
                    {data.website && (
                      <li className="flex items-center space-x-2 px-2 text-sm font-normal leading-[26px] mr-[1px]">
                        <div className="w-[3px] h-[3px] bg-neutral-950 rounded-full"></div>
                        <p>
                          웹사이트:
                          <Link className="ml-1 text-link hover:underline" href={`${data.website}`}>
                            {data.website}
                          </Link>
                        </p>
                      </li>
                    )}
                  </ul>
                </>
              </article>
            )}
            <PeopleInfoList title="학력" infoList={data.educations} />
            {data.researchAreas && (
              <PeopleInfoList title="연구 분야" infoList={data.researchAreas} />
            )}
            <div className="mb-7 font-noto font-medium text-sm text-neutral-700">
              재직 기간: {careerTime.startTime} - {careerTime.endTime}
            </div>
          </div>
        </div>
      </PageLayout>
    )
  );
}
