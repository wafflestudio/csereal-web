import { getCourses } from '@/apis/academics';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

import CoursePageContent from './CoursePageContent';

export default async function GraduateCoursePage() {
  const courseList = await getCourses('graduate');

  return (
    <PageLayout titleType="big">
      <CoursePageContent courses={courseList} />
    </PageLayout>
  );
}
