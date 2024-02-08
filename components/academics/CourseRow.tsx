'use client';

import useHorizontalScroll from '@/hooks/useHorizontalScroll';

import { Course, SortOption } from '@/types/academics';

import CourseCard from './CourseCard';

interface CourseRowProps {
  courses: Course[];
  selectedOption: SortOption;
}

export default function CourseRow({ courses, selectedOption }: CourseRowProps) {
  const { scrollRef: screenRef } = useHorizontalScroll();

  return (
    <div className="flex items-center group">
      <button className="invisible group-hover:visible">
        <span className="material-symbols-rounded font-light text-[32px] text-main-orange">
          navigate_before
        </span>
      </button>
      <div className="styled-scrollbar overflow-y-hidden overflow-x-auto py-1.5" ref={screenRef}>
        <div className="flex gap-5">
          {courses.map((course) => (
            <CourseCard course={course} selectedOption={selectedOption} key={course.code} />
          ))}
        </div>
      </div>
      <button className="invisible group-hover:visible">
        <span className="material-symbols-rounded font-light text-[32px] text-main-orange">
          navigate_next
        </span>
      </button>
    </div>
  );
}
