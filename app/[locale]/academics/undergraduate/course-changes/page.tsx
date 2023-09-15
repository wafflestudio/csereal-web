'use client';

import { useState } from 'react';
import useSWR from 'swr';

import { getCourseChanges } from '@/apis/academics';

import TimeLine from '@/components/academics/TimeLine';
import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { CourseChange } from '@/types/academics';

const YEAR_LIMIT = 2010;
const noChange = (year: number): CourseChange => ({
  year,
  description: `${year}학년도 교과과정 변경 내역은 없습니다.`,
});

const TIME_SPOTS: { year: number; margin?: string; isLast?: boolean }[] = [
  { year: 2020 },
  { year: 2019, margin: 'ml-7' },
  { year: 2018, margin: 'ml-7' },
  { year: 2017, margin: 'ml-7' },
  { year: 2016, margin: 'ml-7' },
  { year: 2015, margin: 'ml-7' },
  { year: 2013, margin: 'ml-[5.375rem]' },
  { year: 2012, margin: 'ml-7' },
  { year: 2011, margin: 'ml-7' },
  { year: 2010, margin: 'ml-7', isLast: true },
];

const getSelectedChanges = (selectedYear: number, data: CourseChange[]) => {
  if (selectedYear <= YEAR_LIMIT) return data.filter((d) => d.year <= YEAR_LIMIT);

  const change = data.find((d) => d.year === selectedYear);
  return change ? [change] : [noChange(selectedYear)];
};

// TODO: 연도 추가되어도 타임라인 잘 설정되도록 리팩토링
export default function UndergraduateCourseChangesPage() {
  const { data } = useSWR('/academics/undergraduate/course-changes', getCourseChanges);
  const [selectedYear, setSelectedYear] = useState<number>(2020);
  const selectedChanges = getSelectedChanges(selectedYear, data ?? []);

  return (
    <PageLayout titleType="big" titleMargin="mb-14">
      <TimeLine
        timeSpots={TIME_SPOTS}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
      />
      {selectedChanges &&
        selectedChanges.map((change) => (
          <HTMLViewer htmlContent={change.description} margin="mt-12" key={change.year} />
        ))}
    </PageLayout>
  );
}
