import { Course, SortOption } from '@/types/academics';

import CourseListHeader from './CourseListHeader';
import CourseListRow from './CourseListRow';

interface CourseListProps {
  courses: Course[];
  selectedOption: SortOption;
}

export default function CourseList({ courses }: CourseListProps) {
  return (
    <div className="border-b border-neutral-200 sm:px-5">
      <CourseListHeader />
      <ul className="sm:divide-y sm:divide-dashed sm:divide-neutral-200">
        {courses.map((course) => (
          <CourseListRow course={course} key={course.code} />
        ))}
      </ul>
    </div>
  );
}
