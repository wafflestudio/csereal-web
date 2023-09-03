'use client';

import { Dispatch, SetStateAction, useState } from 'react';
import useSWR from 'swr';

import { getCourses } from '@/apis/academics';

import CourseRow from '@/components/academics/CourseRow';
import RoadMapButton from '@/components/academics/RoadMapButton';
import { Tag } from '@/components/common/Tags';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { Classification, Course, SortOption } from '@/types/academics';

export default function UndergraduateCoursePage() {
  const { data } = useSWR<Course[]>(`/academics/undergraduate/courses`, getCourses);
  const [selectedOption, setSelectedOption] = useState<SortOption>('학년');
  const sortedCourses = sortCourses(data ?? [], selectedOption);

  return (
    <PageLayout titleType="big" titleMargin="mb-9">
      <RoadMapButton />
      <h4 className="my-8 font-bold">교과목 정보</h4>
      <SortOptions selectedOption={selectedOption} changeOption={setSelectedOption} />
      {sortedCourses.length > 0 && (
        <div className="mt-6 flex flex-col gap-8">
          {sortedCourses.map((courses, i) => (
            <CourseRow courses={courses} selectedOption={selectedOption} key={i} />
          ))}
        </div>
      )}
    </PageLayout>
  );
}

interface SortOptionsProps {
  selectedOption: SortOption;
  changeOption: Dispatch<SetStateAction<SortOption>>;
}

const SORT_OPTIONS: SortOption[] = ['학년', '교과목 구분', '학점'];

function SortOptions({ selectedOption, changeOption }: SortOptionsProps) {
  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {SORT_OPTIONS.map((option) =>
        option === selectedOption ? (
          <Tag key={option} tag={option} defaultStyle="fill" />
        ) : (
          <Tag
            key={option}
            tag={option}
            hoverStyle="fill"
            defaultStyle="orange"
            onClick={() => changeOption(option)}
          />
        ),
      )}
    </div>
  );
}

const getSortGroupIndexByClassification = (classification: Classification) => {
  if (classification === '전공필수') return 0;
  else if (classification === '전공선택') return 1;
  else return 2;
};

const sortCourses = (courses: Course[], sortOption: SortOption) => {
  const sortedCourses: Course[][] = [];

  if (sortOption === '학년') {
    sortedCourses.push([], [], [], []);
    courses.forEach((course) => sortedCourses[parseInt(course.year) - 1].push(course));
  } else if (sortOption === '교과목 구분') {
    sortedCourses.push([], [], []);
    courses.forEach((course) =>
      sortedCourses[getSortGroupIndexByClassification(course.classification)].push(course),
    );
  } else {
    sortedCourses.push([], [], []);
    courses.forEach((course) => sortedCourses[course.credit - 2].push(course));
  }

  return sortedCourses;
};
