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
  const sortedCourses = getSortedCourses(courses, selectedOption.sort);

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
        <CourseCards courses={sortedCourses} selectedOption={selectedOption.sort} />
      ) : (
        <CourseList courses={sortedCourses.flat()} />
      )}
    </>
  );
}

const classificationToIndexMap: { [key in Classification]: number } = {
  전공필수: 0,
  전공선택: 1,
  교양: 2,
};

// 기본 정렬 가나다순 보장 (백엔드에서 처리)
const getSortedCourses = (courses: Course[], sortOption: SortOption) => {
  const sortedCourses: Course[][] = [];

  if (sortOption === '학년') {
    sortedCourses.push([], [], [], []);
    courses.forEach((course) => sortedCourses[parseInt(course.grade) - 1].push(course));
  } else if (sortOption === '교과목 구분') {
    sortedCourses.push([], [], []);
    courses.forEach((course) =>
      sortedCourses[classificationToIndexMap[course.classification]].push(course),
    );
  } else {
    sortedCourses.push([], [], [], []);
    courses.forEach((course) => sortedCourses[course.credit - 1].push(course));
  }

  return sortedCourses;
};
