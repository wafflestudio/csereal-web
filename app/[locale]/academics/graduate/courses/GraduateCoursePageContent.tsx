'use client';

import { useTranslations } from 'next-intl';

import { Course } from '@/apis/types/academics';
import LoginVisible from '@/components/common/LoginVisible';
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

export default function GraduateCoursePageContent({ courses, language }: CoursePageContentProps) {
  const { selectedOption, changeOptions } = useCourseToolbar();
  const { isMobile } = useResponsive();
  const t = useTranslations('Content');

  if (isMobile && selectedOption.view !== '목록형') {
    changeOptions({ type: 'view', option: '목록형' });
  }

  return (
    <>
      <LoginVisible staff>
        <AddCourseButton studentType="graduate" />
      </LoginVisible>
      <h4 className="mb-2 text-[17px] font-bold sm:mb-8 sm:pl-5">{t('교과목 정보')}</h4>
      <CourseToolbar
        viewOption={selectedOption.view}
        sortOption={selectedOption.sort}
        hideSortOption
        hideViewOption={isMobile}
        changeOptions={changeOptions}
      />
      {language === 'en' && <ClassificationDescription />}
      {selectedOption.view === '카드형' ? (
        <CourseCards courses={chunkCourse(courses)} selectedOption="학년" />
      ) : (
        <CourseList courses={courses} />
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

const chunkCourse = (courses: Course[]) => {
  const chunckedCourses: Course[][] = [];
  const chunkSize = Math.floor(courses.length / 4);

  chunckedCourses.push(courses.slice(0, chunkSize));
  chunckedCourses.push(courses.slice(chunkSize, chunkSize * 2));
  chunckedCourses.push(courses.slice(chunkSize * 2, chunkSize * 3));
  chunckedCourses.push(courses.slice(chunkSize * 3));

  return chunckedCourses;
};
