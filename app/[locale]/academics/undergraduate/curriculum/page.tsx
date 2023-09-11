export const dynamic = 'force-dynamic';

import Link from 'next-intl/link';

import PentagonMedium from '@/public/image/pentagon_medium.svg';

import { getCurriculum } from '@/apis/academicsServer';

import CurriculumBody from '@/components/academics/CurriculumBody';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default async function UndergradutecurriculumPage() {
  const data = await getCurriculum();

  return (
    <PageLayout titleType="big" titleMargin="mb-8">
      <div className="flex flex-col">
        <div className="relative">
          <Link
            href={`/academics/undergraduate/courses`}
            className={`absolute flex flex-row text-sm h-10 p-4 items-center text-center peer text-main-orange hover:text-[#141212] duration-300`}
          >
            <span className="font-yoon tracking-[-0.019em] mr-2 font-medium">
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
