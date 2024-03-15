import { Course, SortOption } from '@/types/academics';

import CourseRow from './CourseRow';

interface CourseCardProps {
  courses: Course[][];
  selectedOption: SortOption;
}

// TODO: CourseCards가 CourseCard의 배열 형태가 아닌 것 -> rename
export default function CourseCards({ courses, selectedOption }: CourseCardProps) {
  return (
    courses.length > 0 && (
      <div className="mt-6 flex flex-col gap-8">
        {courses.map((courseRow, i) => {
          if (courseRow.length == 0) return;
          return <CourseRow courses={courseRow} selectedOption={selectedOption} key={i} />;
        })}
      </div>
    )
  );
}
