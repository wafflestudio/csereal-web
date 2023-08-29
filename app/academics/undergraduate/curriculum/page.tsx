'use client';

import Link from 'next/link';
import { useState } from 'react';
import useSWR from 'swr';

import PentagonMedium from '@/public/image/pentagon_medium.svg';

import { getCurriculum } from '@/apis/academics';

import Dropdown from '@/components/common/Dropdown';
import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { Curriculum } from '@/types/academics';

export default function UndergradutecurriculumPage() {
  const { data } = useSWR<Curriculum[]>(
    `academics/undergraduate/degree-requirements`,
    getCurriculum,
  );
  const [selectedcurriculumIndex, setSelectedcurriculumIndex] = useState(0);

  return (
    data && (
      <PageLayout titleType="big" titleMargin="mb-8">
        <div className="flex flex-col">
          <div className="relative w-fit">
            <Link
              href={`/academics/undergraduate/courses`}
              className={`absolute flex flex-row text-sm h-10 p-4 items-center text-center peer hover:text-white duration-300`}
            >
              <span className="font-yoon tracking-[-0.019em]">교과목 정보, 선수 교과목 로드맵</span>
              <span className="material-symbols-outlined text-xl">navigate_next</span>
            </Link>
            <div className="text-white peer-hover:text-main-orange">
              <PentagonMedium className="duration-300" />
            </div>
          </div>
          <div className="flex flex-col mt-8">
            <div className="flex flex-row items-center gap-2">
              <p className="font-noto text-sm font-normal">입학연도</p>
              <Dropdown
                contents={data.map((item) => item.year.toString())}
                selectedIndex={selectedcurriculumIndex}
                onClick={setSelectedcurriculumIndex}
              />
            </div>
          </div>
          <HTMLViewer htmlContent={data[selectedcurriculumIndex].description} margin="mt-7" />
        </div>
      </PageLayout>
    )
  );
}
