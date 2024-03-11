import { Classification, Course, SortOption } from '@/types/academics';

import CourseRow from './CourseRow';

interface CourseCardProps {
  courses: Course[];
  selectedOption: SortOption;
}

// TODO: CourseCards가 CourseCard의 배열 형태가 아닌 것 -> rename
export default function CourseCards({ courses, selectedOption }: CourseCardProps) {
  const sortedCourses = sortCourses(courses ?? [], selectedOption);

  return (
    courses.length > 0 && (
      <div className="mt-6 flex flex-col gap-8">
        {sortedCourses.map((courses, i) => {
          if (courses.length == 0) return;
          return <CourseRow courses={courses} selectedOption={selectedOption} key={i} />;
        })}
      </div>
    )
  );
}

const getSortGroupIndexByClassification = (classification: Classification) => {
  if (classification === '전공필수') return 0;
  else if (classification === '전공선택') return 1;
  else return 2;
};

const sortCourses = (courses: Course[], sortOption: SortOption) => {
  const sortedCourses: Course[][] = [];

  if (sortOption === '학년') {
    sortedCourses.push([], [], [], []);
    courses.forEach((course) => sortedCourses[parseInt(course.grade) - 1].push(course));
  } else if (sortOption === '교과목 구분') {
    sortedCourses.push([], [], []);
    courses.forEach((course) =>
      sortedCourses[getSortGroupIndexByClassification(course.classification)].push(course),
    );
  } else {
    sortedCourses.push([], [], [], []);
    courses.forEach((course) => sortedCourses[course.credit - 1].push(course));
  }

  return sortedCourses;
};