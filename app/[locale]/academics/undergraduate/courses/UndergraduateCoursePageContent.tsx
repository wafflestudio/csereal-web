'use client';

import { useTranslations } from 'next-intl';

import LoginVisible from '@/components/common/LoginVisible';
import { Classification, Course, SortOption } from '@/types/academics';
import { Language } from '@/types/language';
import useResponsive from '@/utils/hooks/useResponsive';

import AddCourseButton from '../../components/courses/AddCourseButton';
import CourseCards from '../../components/courses/CourseCards';
import CourseList from '../../components/courses/CourseList';
import CourseToolbar from '../../components/courses/CourseToolbar';
import useCourseToolbar from '../../components/courses/useCourseToolbar';

interface CoursePageContentProps {
  courses: Course[];
  language: Language;
}

export default function UndergraduateCoursePageContent({
  courses,
  language,
}: CoursePageContentProps) {
  const { selectedOption, changeOptions } = useCourseToolbar();
  const { isMobile } = useResponsive();
  const t = useTranslations('Content');
  const sortedCourses = getSortedCourses(courses, selectedOption.sort);

  if (isMobile && selectedOption.view !== '목록형') {
    changeOptions({ type: 'view', option: '목록형' });
  }

  return (
    <>
      <LoginVisible staff>
        <AddCourseButton studentType="undergraduate" />
      </LoginVisible>
      <h4 className="mb-8 text-[17px] font-bold sm:pl-5">{t('교과목 정보')}</h4>
      <CourseToolbar
        viewOption={selectedOption.view}
        sortOption={selectedOption.sort}
        hideViewOption={isMobile}
        changeOptions={changeOptions}
      />
      {language === 'en' && <ClassificationDescription />}
      {selectedOption.view === '카드형' ? (
        <CourseCards courses={sortedCourses} selectedOption={selectedOption.sort} />
      ) : (
        <CourseList courses={sortedCourses.flat()} />
      )}
    </>
  );
}

function ClassificationDescription() {
  return (
    <div className="mb-3 ml-5 flex items-center gap-1.5 text-sm text-neutral-400">
      <span className="material-symbols-outlined text-xl font-light">info</span>
      <span className="pt-px">
        RM: Required course for Major&nbsp;&nbsp;/&nbsp;&nbsp;EM: Elective course for
        Major&nbsp;&nbsp;/&nbsp;&nbsp;LE: Liberal Education course
      </span>
    </div>
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
    courses.forEach((course) => sortedCourses[course.grade - 1].push(course));
  } else if (sortOption === '교과목 구분') {
    sortedCourses.push([], [], []);
    courses.forEach((course) =>
      sortedCourses[classificationToIndexMap[course.ko.classification]].push(course),
    );
  } else {
    sortedCourses.push([], [], [], []);
    courses.forEach((course) => sortedCourses[course.credit - 1].push(course));
  }

  return sortedCourses;
};
