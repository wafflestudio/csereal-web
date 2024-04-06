'use client';

import { Course } from '@/types/academics';

import useResponsive from '@/utils/hooks/useResponsive';

import CourseCards from '../../helper/courses/CourseCards';
import CourseList from '../../helper/courses/CourseList';
import CourseToolbar from '../../helper/courses/CourseToolbar';
import useCourseToolbar from '../../helper/courses/useCourseToolbar';

interface CoursePageContentProps {
  courses: Course[];
}

export default function CoursePageContent({ courses }: CoursePageContentProps) {
  const { selectedOption, changeOptions } = useCourseToolbar();
  const { isMobile } = useResponsive();

  if (isMobile && selectedOption.view !== '목록형') {
    changeOptions({ type: 'view', option: '목록형' });
  }

  return (
    <>
      <h4 className="mb-8 pl-5 text-[17px] font-bold">교과목 정보</h4>
      <CourseToolbar
        viewOption={selectedOption.view}
        sortOption={selectedOption.sort}
        hideSortOption
        hideViewOption={isMobile}
        changeOptions={changeOptions}
      />
      {selectedOption.view === '카드형' ? (
        <CourseCards courses={chunkCourse(courses)} selectedOption="학년" />
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
