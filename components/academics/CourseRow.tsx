import { Course, SortOption } from '@/types/academics';

import CourseCard from './CourseCard';

interface CourseRowProps {
  courses: Course[];
  selectedOption: SortOption;
}

export default function CourseRow({ courses, selectedOption }: CourseRowProps) {
  return (
    <div className="overflow-auto p-1.5">
      <div className="flex gap-5">
        {courses.map((course) => (
          <CourseCard course={course} selectedOption={selectedOption} key={course.code} />
        ))}
      </div>
    </div>
  );
}
