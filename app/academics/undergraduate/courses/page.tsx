'use client';

import { useState } from 'react';
import useSWR from 'swr';

import { getCourses } from '@/apis/academics';

import CourseCard from '@/components/academics/CourseCard';
import { Tag } from '@/components/common/Tags';
import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { Classification, Course, SortOption } from '@/types/academics';

const courseData: Course = {
  name: '소프트웨어 개발의 원리와 실습',
  classification: '전공선택',
  code: 'M2177.004300',
  credit: 4,
  year: '3학년',
  description:
    '개발자를 꿈꾼다면 한번쯤은 들어보아야 할 수업! 올해 소개원실은 안드로이드이기 때문에 와플의 안드로이드 세미나 신청 인원이 눈에 띄게 증가한 것이 아닐지 추측해봅니다. 개발자를 꿈꾼다면 한번쯤은 들어보아야 할 수업! 올해 소개원실은 안드로이드이기 때문에 와플의 안드로이드 세미나 신청 인원이 눈에 띄게 증가한 것이 아닐지 추측해봅니다. 개발자를 꿈꾼다면 한번쯤은 들어보아야 할 수업! 올해 소개원실은 안드로이드이기 때문에 와플의 안드로이드 세미나 신청 인원이 눈에 띄게 증가한 것이 아닐지 추측해봅니다.',
};

export default function UndergraduateCoursePage() {
  const [selectedOption, setSelectedOption] = useState<SortOption>('학년');
  const { data } = useSWR<Course[]>(`/courses/undergraduate`, getCourses);
  const [sortedCourses, setSortedCourses] = useState<Course[][]>(
    data ? sortCourses(data, selectedOption) : [],
  );

  return (
    <PageLayout titleType="big" titleMargin="mb-9">
      <SortOptions
        selectedOption={selectedOption}
        changeOption={(newOption) => {
          setSelectedOption(newOption);
        }}
      />
      <div className="mt-6">
        <CourseCard course={courseData} selectedOption={selectedOption} />
      </div>
    </PageLayout>
  );
}

interface SortOptionsProps {
  selectedOption: SortOption;
  changeOption: (newOption: SortOption) => void;
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
