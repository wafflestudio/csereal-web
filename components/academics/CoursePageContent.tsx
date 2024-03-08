'use client';

import { useState } from 'react';

import { Course, SortOption, ViewOption } from '@/types/academics';

import CourseCards from './CourseCards';
import CourseList from './CourseList';
import CourseToolbar from './CourseToolbar';

interface CoursePageContentProps {
  courses: Course[];
}

export default function CoursePageContent({ courses }: CoursePageContentProps) {
  const [selectedOption, setSelectedOption] = useState<{ view: ViewOption; sort: SortOption }>({
    view: '카드형',
    sort: '학년',
  });

  const changeOptions = (type: 'view' | 'sort', option: ViewOption | SortOption) => {
    setSelectedOption((prev) => ({ ...prev, [type]: option }));
  };

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
