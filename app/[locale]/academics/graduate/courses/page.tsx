import { getCourses } from '@/apis/academics';

import CourseRow from '@/app/[locale]/academics/helper/CourseRow';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { Course } from '@/types/academics';

export default async function GraduateCoursePage() {
  const data = await getCourses('graduate');
  const chunckedCourses = data ? chunkCourse(data) : [];

  return (
    <PageLayout titleType="big">
      {chunckedCourses.length > 0 && (
        <div className="flex w-[970px] flex-col gap-8">
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
  const countPerLine = Math.floor(courses.length / 4);

  chunckedCourses.push(courses.slice(0, countPerLine));
  chunckedCourses.push(courses.slice(countPerLine, countPerLine * 2));
  chunckedCourses.push(courses.slice(countPerLine * 2, countPerLine * 3));
  chunckedCourses.push(courses.slice(countPerLine * 3));

  return chunckedCourses;
};
