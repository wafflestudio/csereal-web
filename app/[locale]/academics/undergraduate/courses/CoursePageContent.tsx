'use client';

import { useTranslations } from 'next-intl';

import { Classification, Course, SortOption } from '@/types/academics';

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
  const t = useTranslations('Content');

  if (isMobile && selectedOption.view !== '목록형') {
    changeOptions({ type: 'view', option: '목록형' });
  }

  return (
    <>
      <h4 className="mb-8 text-[17px] font-bold sm:pl-5">{t('교과목 정보')}</h4>
      <CourseToolbar
        viewOption={selectedOption.view}
        sortOption={selectedOption.sort}
        hideViewOption={isMobile}
        changeOptions={changeOptions}
      />
      {selectedOption.view === '카드형' ? (
        <CourseCards
          courses={sortCourses(courses, selectedOption.sort)}
          selectedOption={selectedOption.sort}
        />
      ) : (
        <CourseList courses={courses} selectedOption={selectedOption.sort} />
      )}
    </>
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
    courses.forEach((course) => sortedCourses[parseInt(course.grade) - 1].push(course));
  } else if (sortOption === '교과목 구분') {
    sortedCourses.push([], [], []);
    courses.forEach((course) =>
      sortedCourses[getSortGroupIndexByClassification(course.classification)].push(course),
    );
  } else {
    sortedCourses.push([], [], [], []);
    courses.forEach((course) => sortedCourses[course.credit - 1].push(course));
  }

  return sortedCourses;
};
