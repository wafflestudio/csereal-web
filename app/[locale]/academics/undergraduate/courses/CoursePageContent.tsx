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
      <h4 className="mb-8 mt-14 text-[17px] font-bold sm:pl-5">{t('교과목 정보')}</h4>
      <CourseToolbar
        viewOption={selectedOption.view}
        sortOption={selectedOption.sort}
        hideViewOption={isMobile}
        changeOptions={changeOptions}
      />
      {selectedOption.view === '카드형' ? (
        <CourseCards
          courses={getSortedCourses(courses, selectedOption.sort)}
          selectedOption={selectedOption.sort}
        />
      ) : (
        <CourseList courses={flatten(getSortedCourses(courses, selectedOption.sort))} />
      )}
    </>
  );
}

const getSortGroupIndexByClassification = (classification: Classification) => {
  if (classification === '전공필수') return 0;
  else if (classification === '전공선택') return 1;
  else return 2;
};

const getSortedCourses = (courses: Course[], sortOption: SortOption) => {
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

// flat 메소드보다 concat 쓰는 게 더 빠르다고 함 https://velog.io/@milkcoke/Javascript-Array.flat-%EC%9D%80-%EB%8A%90%EB%A6%AC%EB%8B%A4
const flatten = <T,>(arr: T[][]) => ([] as T[]).concat(...arr);
