import { Classification, Course, SortOption } from '@/types/academics';

import CourseListHeader from './CourseListHeader';
import CourseListRow from './CourseListRow';

interface CourseListProps {
  courses: Course[];
  selectedOption: SortOption;
}

export default function CourseList({ courses, selectedOption }: CourseListProps) {
  const sortedCourses = sortCourses(courses ?? [], selectedOption);

  return (
    <div className="border-b border-neutral-200 px-5">
      <CourseListHeader />
      <ul className="divide-y divide-neutral-200 divide-dashed">
        {sortedCourses.map((course) => (
          <CourseListRow course={course} key={course.code} />
        ))}
      </ul>
    </div>
  );
}

const ClassificationPriority: { [key in Classification]: number } = {
  전공필수: 1,
  전공선택: 2,
  교양: 3,
};

const sortCourses = (courses: Course[], sortOption: SortOption) => {
  if (sortOption === '학년') {
    courses.sort((c1, c2) => {
      if (c1.grade === '대학원' || c2.grade === '대학원') return 0;
      return parseInt(c1.grade) - parseInt(c2.grade);
    });
  } else if (sortOption === '교과목 구분') {
    courses.sort((c1, c2) => {
      return ClassificationPriority[c1.classification] - ClassificationPriority[c2.classification];
    });
  } else {
    courses.sort((c1, c2) => c1.credit - c2.credit);
  }

  return courses;
};
