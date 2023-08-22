'use client';

import { useState } from 'react';
import useSWR from 'swr';

import { getCourses } from '@/apis/academics';

import { Tag } from '@/components/common/Tags';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { Course } from '@/types/academics';

export default function UndergraduateCoursePage() {
  const [selectedOption, setSelectedOption] = useState<SortOption>('학년');
  const { data } = useSWR<Course[]>(`/courses/undergraduate`, getCourses);

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

const SORT_OPTIOINS = { grade: '학년', courseType: '교과목 구분', credit: '학점' } as const;
type SortOption =
  | typeof SORT_OPTIOINS.grade
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

const sortCourses = (courses: Course[], sortOption: SortOption) => {
  const sortedCourses: Course[][] = [];

  if (sortOption === SORT_OPTIOINS.grade) {
    sortedCourses.push([], [], [], []);
    courses.forEach((course) => sortedCourses[course.grade - 1].push(course));
  } else if (sortOption === SORT_OPTIOINS.courseType) {
    sortedCourses.push([], [], []);
    courses.forEach((course) => sortedCourses[course.courseType - 1].push(course));
  } else {
    sortedCourses.push([], [], []);
    courses.forEach((course) => sortedCourses[course.credit - 2].push(course));
  }

  return sortedCourses;
};
