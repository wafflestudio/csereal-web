import { Course, SortOption } from '@/types/academics';

import CourseListHeader from './CourseListHeader';
import CourseListRow from './CourseListRow';

interface CourseListProps {
  courses: Course[];
  selectedOption: SortOption;
}

export default function CourseList({ courses, selectedOption }: CourseListProps) {
  return (
    <div className="border-b border-neutral-200">
      <CourseListHeader />
      <ul className="divide-y divide-neutral-200 divide-dashed font-noto ">
        {courses.map((course) => (
          <CourseListRow course={course} key={course.code} />
        ))}
      </ul>
    </div>
  );
}
