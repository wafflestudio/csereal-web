'use client';

import { useReducer, useState } from 'react';

import TimeLine from '@/app/[locale]/academics/helper/TimeLine';

import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { CourseChange } from '@/types/academics';

export type TimeSpots = { year: number; isLast?: boolean }[];

const YEAR_LIMIT_CNT = 10;

export default function CourseChanges({ changes }: { changes: CourseChange[] }) {
  const [selectedYear, setSelectedYear] = useState(changes[0].year);
  const timeLineYears = changes.map((change) => change.year).slice(0, YEAR_LIMIT_CNT);
  const yearLimit = timeLineYears[timeLineYears.length - 1];
  const selectedChanges = getSelectedChanges(selectedYear, yearLimit, changes);

  return (
    <PageLayout titleType="big" bodyStyle={{ minHeight: '600px' }}>
      <TimeLine
        spots={timeLineYears}
        selectedSpot={selectedYear}
        setSelectedSpot={setSelectedYear}
      />
      <div className="mt-7">
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
          {year}학년도{isLast && ' 이하'} 교과과정 변경 내역
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
