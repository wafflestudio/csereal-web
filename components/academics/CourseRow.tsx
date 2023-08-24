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
    <div className="no-scrollbar overflow-y-hidden overflow-x-auto p-1.5" ref={screenRef}>
      <div className="flex gap-4">
        {courses.map((course) => (
          <CourseCard course={course} selectedOption={selectedOption} key={course.id} />
        ))}
      </div>
    </div>
  );
}
