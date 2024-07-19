'use client';

import { useState } from 'react';

import TimeLine from '@/app/[locale]/academics/helper/TimeLine';

import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { CourseChange } from '@/types/academics';

import useResponsive from '@/utils/hooks/useResponsive';

export type TimeSpots = { year: number; isLast?: boolean }[];

const YEAR_LIMIT_CNT = 10;

export default function CourseChanges({ changes }: { changes: CourseChange[] }) {
  const { isDesktopWide } = useResponsive();
  const [selectedYear, setSelectedYear] = useState(changes[0].year);
  const timeLineYears = changes.map((change) => change.year).slice(0, YEAR_LIMIT_CNT);
  const yearLimit = timeLineYears[timeLineYears.length - 1];
  const selectedChanges = getSelectedChanges(selectedYear, yearLimit, changes);

  return (
    <PageLayout titleType="big" bodyStyle={{ minHeight: '600px' }}>
      <div className="flex flex-col gap-7">
        {isDesktopWide ? (
          <TimeLine
            spots={timeLineYears}
            selectedSpot={selectedYear}
            setSelectedSpot={setSelectedYear}
          />
        ) : (
          <TimeLine
            spots={timeLineYears}
            selectedSpot={selectedYear}
            setSelectedSpot={setSelectedYear}
          />

          // timeSpotsList.map((timeSpots, index) => (
          //   <TimeLine spots={timeSpots} selectedSpot={year} setSelectedSpot={setYear} key={index} />
          // ))
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
