'use client';

import { useState } from 'react';

import TimeLine from '@/app/[locale]/academics/helper/TimeLine';

import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { CourseChange } from '@/types/academics';

export type TimeSpots = { year: number; margin?: string; isLast?: boolean }[];

type CourseChangesProps = {
  changes: CourseChange[];
  yearLimit: number;
  timeSpots: TimeSpots;
};

// TODO: 연도 추가되어도 타임라인 잘 설정되도록 리팩토링
export default function CourseChanges({ changes, yearLimit, timeSpots }: CourseChangesProps) {
  const [year, setYear] = useState(2020);
  const selectedChanges = getSelectedChanges(year, yearLimit, changes);

  return (
    <PageLayout titleType="big">
      <TimeLine timeSpots={timeSpots} selectedYear={year} setSelectedYear={setYear} />
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
