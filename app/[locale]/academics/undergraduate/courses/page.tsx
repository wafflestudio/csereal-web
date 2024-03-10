import { getCourses } from '@/apis/academics';

import RoadMapButton from '@/app/[locale]/academics/helper/RoadMapButton';
import CoursePageContent from '@/app/[locale]/academics/undergraduate/courses/CoursePageContent';

import PageLayout from '@/components/layout/pageLayout/PageLayout';

import { Course } from '@/types/academics';

export default async function UndergraduateCoursePage() {
  const data: Course[] = await getCourses('undergraduate');

  return (
    <PageLayout titleType="big">
      <RoadMapButton />
      <CoursePageContent courses={data} />
    </PageLayout>
  );
}
