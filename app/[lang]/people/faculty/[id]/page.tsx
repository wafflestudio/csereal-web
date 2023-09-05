import Link from 'next/link';

import { getDictionary } from '@/dictionaries/get-dictionaries';
import { Locale } from '@/i18n-config';

import { getFaculty, getFacultyEng } from '@/apis/people';

import { CurvedHorizontalSmallNode } from '@/components/common/Nodes';
import PageLayout from '@/components/layout/pageLayout/PageLayout';
import FacultyInfoWithImage from '@/components/people/FacultyInfoWithImage';
import PeopleInfoList from '@/components/people/PeopleInfoList';

import { researchLabs } from '@/types/page';

import { getPath } from '@/utils/page';

const labUrl = getPath(researchLabs);

export default async function FacultyMemberPage({
  params,
}: {
  params: { id: number; lang: Locale };
}) {
  const data = params.lang === 'ko' ? await getFaculty(params.id) : await getFacultyEng(params.id);
  const dictionary = await getDictionary(params.lang);
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
          <FacultyInfoWithImage
            office={data.office}
            phone={data.phone}
            fax={data.fax}
            email={data.email}
            website={data.website}
            imageURL={data.imageURL}
          />
          <div className="flex flex-row">
            <CurvedHorizontalSmallNode />
            <div className=" border-b-[1px] pb-[5px] pr-2 border-b-main-orange -translate-x-[7.15px] translate-y-[1.5px]">
              <Link
                href={`${labUrl}`}
                className="font-noto font-medium text-sm leading-5 hover:text-main-orange hover:cursor-pointer"
              >
                {data?.labName}
              </Link>
            </div>
          </div>
          <div className="mt-8 break-all">
            {data.educations && (
              <PeopleInfoList
                title={dictionary.People.Faculty.educations}
                infoList={data.educations}
              />
            )}
            {data.researchAreas !== undefined && (
              <PeopleInfoList
                title={dictionary.People.Faculty.researchAreas}
                infoList={data.researchAreas}
              />
            )}
            {data.careers && (
              <PeopleInfoList title={dictionary.People.Faculty.careers} infoList={data.careers} />
            )}
          </div>
        </div>
      </PageLayout>
    )
  );
}
