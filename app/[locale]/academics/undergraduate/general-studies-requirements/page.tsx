import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { getGeneralStudiesRequirements } from '@/apis/academics';

import Accordion from '@/app/[locale]/academics/undergraduate/general-studies-requirements/Accordion';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('Nav');

  return {
    title: t('필수 교양 과목'),
    description: '서울대학교 컴퓨터공학부 필수 교양 과목(학부) 페이지입니다.',
  };
}

export default async function UndergraduateGeneralStudiesRequirements() {
  const { overview, generalStudies } = await getGeneralStudiesRequirements('undergraduate');

  return (
    <PageLayout titleType="big">
      <div className="flex flex-col">
        <p className="mb-10 bg-neutral-100 px-6 py-5 text-md leading-loose">{overview}</p>

        {/* TODO: 행정실 요청. 이부분 맞는지 재확인 */}
        {/* <ContentTitle title={'교양 교과과정 변경 내역'} />
        <div className="mb-5 mt-2.5">
          <HTMLViewer htmlContent={subjectChanges} />
        </div> */}

        <ContentTitle title={'[학번별] 영역별 교양과목 학점 배분 구조표'} />
        <div className="mt-5 flex flex-col gap-3">
          {generalStudies.map((data) => (
            <Accordion
              key={data.id}
              title={`${data.year}학번부터 적용`}
              content={data.description}
            />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}

function ContentTitle({ title }: { title: string }) {
  return (
    <div className="flex flex-row items-center leading-8">
      <div className="h-2.5 w-2.5 rounded-full border border-main-orange" />
      <h3 className="ml-2.5 text-[17px] font-bold leading-loose">{title}</h3>
    </div>
  );
}
