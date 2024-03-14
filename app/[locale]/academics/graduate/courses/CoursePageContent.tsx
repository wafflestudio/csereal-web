'use client';

import { useState } from 'react';

import { Course, SortOption, ViewOption } from '@/types/academics';

import useResponsive from '@/utils/hooks/useResponsive';

import CourseList from '../../helper/courses/CourseList';
import CourseRow from '../../helper/courses/CourseRow';
import CourseToolbar from '../../helper/courses/CourseToolbar';

interface CoursePageContentProps {
  courses: Course[];
}

export default function CoursePageContent({ courses }: CoursePageContentProps) {
  const [selectedOption, setSelectedOption] = useState<{ view: ViewOption; sort: SortOption }>({
    view: '카드형',
    sort: '학년',
  });
  const { screenType } = useResponsive();
  const hideViewOption = screenType === 'mobile';

  const changeOptions = (
    options: { type: 'view'; option: ViewOption } | { type: 'sort'; option: SortOption },
  ) => {
    setSelectedOption((prev) => ({ ...prev, [options.type]: options.option }));
  };

  if (hideViewOption && selectedOption.view !== '목록형') {
    changeOptions({ type: 'view', option: '목록형' });
  }

  return (
    <>
      <h4 className="mb-8 pl-5 text-[17px] font-bold">교과목 정보</h4>
      <CourseToolbar
        viewOption={selectedOption.view}
        sortOption={selectedOption.sort}
        hideSortOption
        hideViewOption={hideViewOption}
        changeOptions={changeOptions}
      />
      {selectedOption.view === '카드형' ? (
        courses.length > 0 && (
          <div className="flex flex-col gap-8">
            {chunkCourse(courses).map((courseRow, i) => (
              <CourseRow courses={courseRow} selectedOption="학년" key={i} />
            ))}
          </div>
        )
      ) : (
        <CourseList courses={courses} selectedOption={selectedOption.sort} />
      )}
    </>
  );
}

const chunkCourse = (courses: Course[]) => {
  const chunckedCourses: Course[][] = [];
  const chunkSize = Math.floor(courses.length / 4);

  chunckedCourses.push(courses.slice(0, chunkSize));
  chunckedCourses.push(courses.slice(chunkSize, chunkSize * 2));
  chunckedCourses.push(courses.slice(chunkSize * 2, chunkSize * 3));
  chunckedCourses.push(courses.slice(chunkSize * 3));

  return chunckedCourses;
};
