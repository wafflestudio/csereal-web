'use client';

import { useReducer, useState } from 'react';

import TimeLine from '@/app/[locale]/academics/helper/TimeLine';

import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { CourseChange } from '@/types/academics';

import useResponsive from '@/utils/hooks/useResponsive';

export type TimeSpots = { year: number; isLast?: boolean }[];

const YEAR_LIMIT_CNT = 7;

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
      <div className="mt-12">
        {selectedChanges.map((change, i) => (
          <ContentViewer
            description={change.description}
            year={change.year}
            expandDefault={i === 0}
            alwaysExpanded={selectedChanges.length === 1}
            isLast={i !== 0 && i === selectedChanges.length - 1}
            key={change.year}
          />
        ))}
      </div>
    </PageLayout>
  );
}

function ContentViewer({
  description,
  year,
  expandDefault = false,
  alwaysExpanded = false,
  isLast = false,
}: {
  description: string;
  year: number;
  expandDefault?: boolean;
  alwaysExpanded?: boolean;
  isLast?: boolean;
}) {
  const [isExpanded, toggleContent] = useReducer((x) => !x, expandDefault || alwaysExpanded);

  return (
    <div className="mb-5">
      <button onClick={alwaysExpanded ? undefined : toggleContent} className="flex items-center">
        <span className="font-semibold">
          {year}학년도{isLast && ' 이하'} 교과과정 변경
        </span>
        {!alwaysExpanded && (
          <span className="material-symbols-outlined text-3xl font-light">
            {isExpanded ? 'expand_less' : 'expand_more'}
          </span>
        )}
      </button>
      {isExpanded && <HTMLViewer htmlContent={description} key={year} />}
    </div>
  );
}

const getSelectedChanges = (year: number, yearLimit: number, data: CourseChange[]) => {
  if (year <= yearLimit) return data.filter((d) => d.year <= yearLimit);

  const change = data.find((d) => d.year === year);
  return change
    ? [change]
    : [{ year, description: `${year}학년도 교과과정 변경 내역은 없습니다.` }];
};
