'use client';

import { useState } from 'react';

import { Tag } from '@/components/common/Tags';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

export default function UndergraduateCoursePage() {
  const [selectedOption, setSelectedOption] = useState<SortOption>('학년');

  return (
    <PageLayout titleType="big" titleMargin="mb-9">
      <SortOptions
        selectedOption={selectedOption}
        changeOption={(newOption) => {
          setSelectedOption(newOption);
        }}
      />
    </PageLayout>
  );
}

const SORT_OPTIOINS = { year: '학년', courseType: '교과목 구분', credit: '학점' } as const;
type SortOption =
  | typeof SORT_OPTIOINS.year
  | typeof SORT_OPTIOINS.courseType
  | typeof SORT_OPTIOINS.credit;

interface SortOptionsProps {
  selectedOption: SortOption;
  changeOption: (newOption: SortOption) => void;
}

function SortOptions({ selectedOption, changeOption }: SortOptionsProps) {
  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {Object.values(SORT_OPTIOINS).map((option) =>
        option === selectedOption ? (
          <Tag key={option} tag={option as SortOption} defaultStyle="fill" />
        ) : (
          <Tag
            key={option}
            tag={option as SortOption}
            hoverStyle="fill"
            defaultStyle="orange"
            onClick={changeOption}
          />
        ),
      )}
    </div>
  );
}
