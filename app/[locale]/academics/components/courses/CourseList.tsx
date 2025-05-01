import { Course } from '@/apis/types/academics';
import CourseListHeader from '@/app/[locale]/academics/components/courses/CourseListHeader';
import CourseListRow from '@/app/[locale]/academics/components/courses/CourseListRow';

export default function CourseList({ courses }: { courses: Course[] }) {
  return (
    <div className="border-b border-neutral-200 sm:mx-5">
      <CourseListHeader />
      <ul className="sm:divide-y sm:divide-dashed sm:divide-neutral-200">
        {courses.map((course) => (
          <CourseListRow course={course} key={course.code} />
        ))}
      </ul>
    </div>
  );
}
