import { getCourses } from '@/apis/academics';

import CourseRow from '@/app/[locale]/academics/helper/courses/CourseRow';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { Course } from '@/types/academics';

import CoursePageContent from './CoursePageContent';

export default async function GraduateCoursePage() {
  const courseList = await getCourses('graduate');
  const chunckedCourses = chunkCourse(courseList);

  return (
    <PageLayout titleType="big">
      <CoursePageContent courses={courseList} />
      {chunckedCourses.length > 0 && (
        <div className="flex max-w-[880px] flex-col gap-8">
          {chunckedCourses.map((courses, i) => (
            <CourseRow courses={courses} selectedOption="학년" key={i} />
          ))}
        </div>
      )}
    </PageLayout>
  );
}

const chunkCourse = (courses: Course[]) => {
  const chunckedCourses: Course[][] = [];
  const chunkSize = Math.floor(courses.length / 4);

  chunckedCourses.push(courses.slice(0, chunkSize));
  chunckedCourses.push(courses.slice(chunkSize, chunkSize * 2));
  chunckedCourses.push(courses.slice(chunkSize * 2, chunkSize * 3));
  chunckedCourses.push(courses.slice(chunkSize * 3));

  return chunckedCourses;
};
