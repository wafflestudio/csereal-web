'use client';

import { useReducer, useState } from 'react';

import TimeLine from '@/app/[locale]/academics/helper/TimeLine';

import HTMLViewer from '@/components/editor/HTMLViewer';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { CourseChange } from '@/types/academics';

const YEAR_LIMIT_CNT = 10; // 양수

export default function CourseChangesPageContent({ changes }: { changes: CourseChange[] }) {
  const [selectedYear, setSelectedYear] = useState(changes[0].year);
  const timeLineYears = changes.map((change) => change.year).slice(0, YEAR_LIMIT_CNT);
  const yearLimit = timeLineYears.at(-1) ?? 0;
  const selectedChanges = getSelectedChanges(selectedYear, yearLimit, changes);

  return (
    <PageLayout titleType="big" bodyStyle={{ minHeight: '600px' }}>
      <TimeLine
        times={timeLineYears}
        selectedTime={selectedYear}
        setSelectedTime={setSelectedYear}
      />
      <div className="mt-7">
        {selectedChanges.length === 1 ? (
          <ContentViewer
            description={selectedChanges[0].description}
            year={selectedChanges[0].year}
          />
        ) : (
          selectedChanges.map((change, i) => (
            <TogglableContentViewer
              description={change.description}
              year={change.year}
              expandDefault={i === 0}
              isLast={i !== 0 && i === selectedChanges.length - 1}
              key={change.year}
            />
          ))
        )}
      </div>
    </PageLayout>
  );
}

function ContentViewer({ description, year }: { description: string; year: number }) {
  return (
    <div className="mb-5">
      <div className="mb-4 font-semibold">{year}학년도 교과과정 변경 내역</div>
      <ContentHTMLViewer description={description} />
    </div>
  );
}

function TogglableContentViewer({
  description,
  year,
  expandDefault = false,
  isLast = false,
}: {
  description: string;
  year: number;
  expandDefault?: boolean;
  isLast?: boolean;
}) {
  const [isExpanded, toggleContent] = useReducer((x) => !x, expandDefault);

  return (
    <div className="mb-5">
      <button onClick={toggleContent} className="mb-4 flex items-center">
        <span className="material-symbols-outlined text-2xl font-light">
          {isExpanded ? 'expand_less' : 'expand_more'}
        </span>
        <span className="font-semibold">
          {year}학년도{isLast && ' 이하'} 교과과정 변경 내역
        </span>
      </button>
      {isExpanded && <ContentHTMLViewer description={description} />}
    </div>
  );
}

function ContentHTMLViewer({ description }: { description: string }) {
  return <HTMLViewer htmlContent={description} className="bg-neutral-75 p-5" />;
}

const getSelectedChanges = (year: number, yearLimit: number, data: CourseChange[]) => {
  if (year <= yearLimit) return data.filter((d) => d.year <= yearLimit);

  const change = data.find((d) => d.year === year);
  return change
    ? [change]
    : [{ year, description: `${year}학년도 교과과정 변경 내역은 없습니다.` }];
};
