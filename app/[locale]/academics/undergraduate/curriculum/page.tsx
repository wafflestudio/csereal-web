export const dynamic = 'force-static';

import Link from 'next/link';

import PentagonMedium from '@/public/image/pentagon_medium.svg';

import { getCurriculum } from '@/apis/academicsServer';

import CurriculumBody from '@/components/academics/CurriculumBody';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function UndergradutecurriculumPage({
  params,
}: {
  params: { locale: string };
}) {
  const data = await getCurriculum();

  return (
    <PageLayout titleType="big" titleMargin="mb-[44px]">
      <div className="flex flex-col">
        <div className="relative">
          <Link
            href={`/${params.locale}/academics/undergraduate/courses`}
            className={`peer absolute flex h-10 flex-row items-center p-4 text-center text-sm text-main-orange duration-300 hover:text-[#141212]`}
          >
            <span className="font-yoon mr-2 font-medium tracking-[-0.019em]">
              교과목 정보, 선수 교과목 로드맵
            </span>
            <span className="material-symbols-outlined text-[20px] font-light">navigate_next</span>
          </Link>
          <div className="text-white peer-hover:text-main-orange">
            <PentagonMedium className="duration-300" />
          </div>
        </div>
        <CurriculumBody data={data} />
      </div>
    </PageLayout>
  );
}
