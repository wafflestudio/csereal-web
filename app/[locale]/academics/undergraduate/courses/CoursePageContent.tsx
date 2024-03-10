'use client';

import { useEffect, useState } from 'react';

import { Course, SortOption, ViewOption } from '@/types/academics';

import useResponsive from '@/utils/hooks/useResponsive';

import CourseToolbar from './CourseToolbar';
import CourseCards from '../../helper/courses/CourseCards';
import CourseList from '../../helper/courses/CourseList';

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

  useEffect(() => {
    if (hideViewOption) {
      changeOptions({ type: 'view', option: '목록형' });
    }
  }, [hideViewOption]);

  return (
    <div className={selectedOption.view === '카드형' ? 'w-[970px]' : 'w-[720px]'}>
      <h4 className="mb-8 mt-14 pl-5 text-[17px] font-bold">교과목 정보</h4>
      <CourseToolbar
        viewOption={selectedOption.view}
        sortOption={selectedOption.sort}
        changeOptions={changeOptions}
      />
      {selectedOption.view === '카드형' ? (
        <CourseCards courses={courses} selectedOption={selectedOption.sort} />
      ) : (
        <CourseList courses={courses} selectedOption={selectedOption.sort} />
      )}
    </div>
  );
}
