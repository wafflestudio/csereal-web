'use client';

import { Dispatch, SetStateAction, useState } from 'react';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default function UndergraduateCourseChanges() {
  const [selectedYear, setSelectedYear] = useState<number>(2020);

  return (
    <PageLayout titleType="big" titleMargin="mb-14">
      <TimeLine selectedYear={selectedYear} setSelectedYear={setSelectedYear} />
    </PageLayout>
  );
}

interface TimeLineProps {
  selectedYear: number;
  setSelectedYear: Dispatch<SetStateAction<number>>;
}

function TimeLine({ selectedYear, setSelectedYear }: TimeLineProps) {
  return (
    <div className="relative h-[38px] ">
      <div className="border-b border-main-orange pt-[7px] " />
      <TimeSection
        year={2020}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        left="left-0"
      />
      <TimeSection
        year={2018}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        left="left-[58px]"
      />
      <TimeSection
        year={2015}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        left="left-[116px]"
      />
      <TimeSection
        year={2012}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        left="left-[174px]"
      />
      <TimeSection
        year={2010}
        selectedYear={selectedYear}
        setSelectedYear={setSelectedYear}
        left="left-[200px]"
      />
    </div>
  );
}

interface TimeSectionProps {
  year: number;
  selectedYear: number;
  setSelectedYear: Dispatch<SetStateAction<number>>;
  left: string;
}

function TimeSection({ year, selectedYear, setSelectedYear, left }: TimeSectionProps) {
  return (
    <div
      className={`absolute group top-0 w-[38px] h-full flex flex-col justify-between items-center cursor-pointer ${left}`}
      onClick={() => setSelectedYear(year)}
    >
      <Circle highlight={year === selectedYear} />
      <span className="text-main-orange text-sm tracking-[0.02em]">{year}</span>
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
