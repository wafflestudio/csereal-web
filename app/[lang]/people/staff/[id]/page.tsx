import Link from 'next/link';

import { getDictionary } from '@/dictionaries/get-dictionaries';
import { Locale } from '@/i18n-config';

import { getStaff, getStaffEng } from '@/apis/people';

import PageLayout from '@/components/layout/pageLayout/PageLayout';
import PeopleImageWithAnimation from '@/components/people/PeopleImageWithAnimation';
import PeopleInfoList from '@/components/people/PeopleInfoList';

export default async function StaffMemberPage({
  params,
}: {
  params: { id: number; lang: Locale };
}) {
  const data = params.lang === 'ko' ? await getStaff(params.id) : await getStaffEng(params.id);
  const dictionary = await getDictionary(params.lang);

  return (
    data && (
      <PageLayout
        title={
          <div className="flex flex-row items-end">
            <p>{data.name}</p>
            <p className="text-neutral-500 text-md font-normal ml-2 leading-7">{data.role}</p>
          </div>
        }
        titleType="big"
        titleMargin="mb-9"
      >
        <div className="flow-root relative mb-32">
          <PeopleImageWithAnimation imageURL={data.imageURL} />
          <div className="break-all">
            <article className="text-neutral-700 font-noto flex flex-col mb-7">
              <h3 className="text-base font-bold leading-8">
                {dictionary.People.Staff.contactInfo}
              </h3>
              <ul className="list-inside list-disc">
                {data.office && (
                  <li className="flex items-center space-x-2 px-2 text-sm font-normal leading-[26px] mr-[1px]">
                    <div className="w-[3px] h-[3px] bg-neutral-950 rounded-full"></div>
                    <p>
                      {dictionary.People.Staff.office}: {data.office}
                    </p>
                  </li>
                )}
                {data.phone && (
                  <li className="flex items-center space-x-2 px-2 text-sm font-normal leading-[26px] mr-[1px]">
                    <div className="w-[3px] h-[3px] bg-neutral-950 rounded-full"></div>
                    <p>
                      {dictionary.People.Staff.phone}: {data.phone}
                    </p>
                  </li>
                )}
                {data.email && (
                  <li className="flex items-center space-x-2 px-2 text-sm font-normal leading-[26px] mr-[1px]">
                    <div className="w-[3px] h-[3px] bg-neutral-950 rounded-full"></div>
                    <p>
                      {dictionary.People.Staff.email}:
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
            <PeopleInfoList title={dictionary.People.Staff.tasks} infoList={data.tasks} />
          </div>
        </div>
      </PageLayout>
    )
  );
}
