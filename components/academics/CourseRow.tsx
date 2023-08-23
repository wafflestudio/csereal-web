import { useRef } from 'react';

import { Course, SortOption } from '@/types/academics';

import CourseCard from './CourseCard';

interface CourseRowProps {
  courses: Course[];
  selectedOption: SortOption;
}

export default function CourseRow({ courses, selectedOption }: CourseRowProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className="no-scrollbar overflow-auto p-1.5"
      ref={rootRef}
      onWheel={(e) => {
        e.stopPropagation();
        e.preventDefault();

        if (rootRef.current) {
          rootRef.current.scrollLeft += e.deltaY;
        }
      }}
    >
      <div className="flex gap-5" ref={contentRef}>
        {courses.map((course) => (
          <CourseCard course={course} selectedOption={selectedOption} key={course.code} />
        ))}
      </div>
    </div>
  );
}
