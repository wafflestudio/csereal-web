import { getCourses } from '@/apis/academics';

import CourseRow from '@/app/[locale]/academics/helper/CourseRow';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { Course } from '@/types/academics';

export default async function GraduateCoursePage() {
  const courstList = await getCourses('graduate');
  const chunckedCourses = chunkCourse(courstList);

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
  const chunkSize = Math.floor(courses.length / 4);

  chunckedCourses.push(courses.slice(0, chunkSize));
  chunckedCourses.push(courses.slice(chunkSize, chunkSize * 2));
  chunckedCourses.push(courses.slice(chunkSize * 2, chunkSize * 3));
  chunckedCourses.push(courses.slice(chunkSize * 3));

  return chunckedCourses;
};
