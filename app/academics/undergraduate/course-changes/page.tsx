'use client';

import { Dispatch, SetStateAction, useState } from 'react';
import useSWR from 'swr';

import { getCourseChanges } from '@/apis/academics';

import HTMLViewer from '@/components/common/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { CourseChange } from '@/types/academics';

const YEAR_LIMIT = 2010;
const NO_CHANGE = (year: number): CourseChange => ({
  year,
  description: `${year}학년도 교과과정 변경 내역은 없습니다.`,
});

const getSelectedChanges = (selectedYear: number, data: CourseChange[]) => {
  if (selectedYear <= YEAR_LIMIT) return data.filter((d) => d.year <= YEAR_LIMIT);

  const change = data.find((d) => d.year === selectedYear);
  return change ? [change] : [NO_CHANGE(selectedYear)];
};

// TODO: 연도 추가되어도 타임라인 잘 설정되도록 리팩토링
export default function UndergraduateCourseChanges() {
  const { data } = useSWR('/academics/undergraduate/course-changes', getCourseChanges);
  const [selectedYear, setSelectedYear] = useState<number>(2020);
  const selectedChanges = getSelectedChanges(selectedYear, data ?? []);

  return (
    <PageLayout titleType="big" titleMargin="mb-14">
      <TimeLine selectedYear={selectedYear} setSelectedYear={setSelectedYear} />
      {selectedChanges &&
        selectedChanges.map((change) => (
          <HTMLViewer htmlContent={change.description} margin="mt-12" key={change.year} />
        ))}
    </PageLayout>
  );
}

interface TimeLineProps {
  selectedYear: number;
  setSelectedYear: Dispatch<SetStateAction<number>>;
}

const TIME_SPOTS: { year: number; margin?: string; isLast?: boolean }[] = [
  { year: 2020 },
  { year: 2019, margin: 'ml-5' },
  { year: 2018, margin: 'ml-5' },
  { year: 2017, margin: 'ml-5' },
  { year: 2015, margin: 'ml-[4.875rem]' },
  { year: 2013, margin: 'ml-[4.875rem]' },
  { year: 2012, margin: 'ml-5' },
  { year: 2010, margin: 'ml-[4.875rem]', isLast: true },
];

function TimeLine({ selectedYear, setSelectedYear }: TimeLineProps) {
  return (
    <div className="relative h-[38px] w-[48.75rem] flex">
      <div className="absolute w-[calc(100%-14px)] h-[0.8px] bg-main-orange mt-[7px] ml-[14px] bg-gradient-to-r from-main-orange from-90% to-white" />
      {TIME_SPOTS.map((spot) => (
        <TimeSpot
          year={spot.year}
          selectedYear={selectedYear}
          setSelectedYear={setSelectedYear}
          margin={spot.margin}
          isLast={spot.isLast}
          key={spot.year}
        />
      ))}
    </div>
  );
}

interface TimeSpotProps {
  year: number;
  selectedYear: number;
  setSelectedYear: Dispatch<SetStateAction<number>>;
  margin?: string;
  isLast?: boolean;
}

function TimeSpot({ year, selectedYear, setSelectedYear, margin, isLast }: TimeSpotProps) {
  const isSelected = year === selectedYear;

  return (
    <div
      className={`z-10 group top-0 w-[38px] h-full flex flex-col justify-between items-center ${margin} ${
        isSelected ? 'cursor-default' : 'cursor-pointer'
      }`}
      onClick={() => setSelectedYear(year)}
    >
      <Circle highlight={isSelected} />
      <span className="flex items-center font-yoon text-main-orange text-sm tracking-[0.02em]">
        {year}
        {isLast && (
          <span className="material-symbols-rounded font-light text-base">arrow_downward</span>
        )}
      </span>
    </div>
  );
}

function Circle({ highlight }: { highlight: boolean }) {
  const highlightStyle = 'bg-main-orange w-3.5 h-3.5 mt-0';
  const defaultStyle =
    'bg-white w-2.5 h-2.5 mt-[2px] group-hover:w-3.5 group-hover:h-3.5 group-hover:mt-0';

  return (
    <span
      className={`inline-block rounded-full border border-main-orange duration-200 ${
        highlight ? highlightStyle : defaultStyle
      }`}
    />
  );
}
