'use client';

import { useReducer, useState } from 'react';

import HTMLViewer from '@/components/editor/HTMLViewer';

import TimeLine from './TimeLine';

export default function TimelinePageViewer<T extends { year: number; description: string }>({
  contents,
  title,
  yearLimitCount = 10,
}: {
  contents: T[];
  title: { text: string; unit: string };
  yearLimitCount?: number;
}) {
  const [selectedYear, setSelectedYear] = useState(contents[0].year);
  const timeLineYears = contents.map((change) => change.year).slice(0, yearLimitCount);
  const yearLimit = timeLineYears.at(-1) ?? 0;
  const selectedContents = getSelectedContents(selectedYear, yearLimit, contents);

  return (
    <>
      <TimeLine
        times={timeLineYears}
        selectedTime={selectedYear}
        setSelectedTime={setSelectedYear}
      />
      <div className="mt-7">
        {selectedContents.length === 1 ? (
          <ContentViewer
            description={selectedContents[0].description}
            title={`${selectedContents[0].year}${title.unit} ${title.text}`}
          />
        ) : (
          selectedContents.map((change, i) => {
            const isLast = i !== 0 && i === selectedContents.length - 1;
            return (
              <TogglableContentViewer
                description={change.description}
                expandDefault={i === 0}
                title={`${change.year}${title.unit}${isLast ? ' 이하' : ''} ${title.text}`}
                key={change.year}
              />
            );
          })
        )}
      </div>
    </>
  );
}

function ContentViewer({ description, title }: { description: string; title: string }) {
  return (
    <div className="mb-5">
      <div className="mb-4 font-semibold">{title}</div>
      <ContentHTMLViewer description={description} />
    </div>
  );
}

function TogglableContentViewer({
  description,
  expandDefault = false,
  title,
}: {
  description: string;
  expandDefault?: boolean;
  title: string;
}) {
  const [isExpanded, toggleContent] = useReducer((x) => !x, expandDefault);

  return (
    <div className="mb-5">
      <button onClick={toggleContent} className="mb-4 flex items-center hover:text-main-orange">
        <span className="material-symbols-outlined text-2xl font-light">
          {isExpanded ? 'expand_less' : 'expand_more'}
        </span>
        <span className="font-semibold">{title}</span>
      </button>
      {isExpanded && <ContentHTMLViewer description={description} />}
    </div>
  );
}

function ContentHTMLViewer({ description }: { description: string }) {
  return <HTMLViewer htmlContent={description} className="bg-neutral-75 p-5" />;
}

const getSelectedContents = <T extends { year: number; description: string }>(
  year: number,
  yearLimit: number,
  data: T[],
) => {
  if (year <= yearLimit) return data.filter((d) => d.year <= yearLimit);

  const change = data.find((d) => d.year === year);
  return change ? [change] : [{ year, description: `${year}학년도 내용은 없습니다.` }];
};
