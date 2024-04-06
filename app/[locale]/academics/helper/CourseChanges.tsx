'use client';

import { useState } from 'react';

import TimeLine from '@/app/[locale]/academics/helper/TimeLine';

import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { CourseChange } from '@/types/academics';

import useResponsive from '@/utils/hooks/useResponsive';

export type TimeSpots = { year: number; margin?: string; isLast?: boolean }[];

type CourseChangesProps = {
  changes: CourseChange[];
  yearLimit: number;
  timeSpotsList: TimeSpots[];
};

// TODO: 연도 추가되어도 타임라인 잘 설정되도록 리팩토링
export default function CourseChanges({ changes, yearLimit, timeSpotsList }: CourseChangesProps) {
  const [year, setYear] = useState(2020);
  const selectedChanges = getSelectedChanges(year, yearLimit, changes);
  const { isDesktopWide } = useResponsive();

  return (
    <PageLayout titleType="big">
      <div className="flex flex-col gap-7">
        {isDesktopWide ? (
          <TimeLine
            timeSpots={timeSpotsList.flat()}
            selectedYear={year}
            setSelectedYear={setYear}
          />
        ) : (
          timeSpotsList.map((timeSpots, index) => (
            <TimeLine
              timeSpots={timeSpots}
              selectedYear={year}
              setSelectedYear={setYear}
              key={index}
            />
          ))
        )}
      </div>
      {selectedChanges.map((change) => (
        <HTMLViewer htmlContent={change.description} className="mt-12" key={change.year} />
      ))}
    </PageLayout>
  );
}

const getSelectedChanges = (year: number, yearLimit: number, data: CourseChange[]) => {
  if (year <= yearLimit) return data.filter((d) => d.year <= yearLimit);

  const change = data.find((d) => d.year === year);
  return change
    ? [change]
    : [{ year, description: `${year}학년도 교과과정 변경 내역은 없습니다.` }];
};
